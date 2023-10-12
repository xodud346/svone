package com.ssp.bo.sa.service.impl;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.sa.dao.EdmInfoDao;
import com.ssp.bo.sa.service.EdmInfoService;
import com.ssp.core.co.service.CoCommonSendService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * EDM 타겟 관리 EdmInfoServiceImpl
 * YHK
 * 2022.12.13.
 */

@Service
public class EdmInfoServiceImpl implements EdmInfoService{
	
	private final Logger logger = LoggerFactory.getLogger(EdmInfoServiceImpl.class);
		
	@Autowired
	private EdmInfoDao edmInfoDao;
	
	@Autowired
    private CoCommonSendService coCommonSendService;
	
	@Autowired
	private SspPropertyService sspPropertyService;
	
	/** EDM 타겟 관리 목록 조회 */
	@Override
	public NexacroResult selectEdmInfoList(Map<String, Object> searchMap) throws Exception {
		
		NexacroResult result = new NexacroResult();

		try {
			Map<String, Object> searchInfo = CommonUtil.toCamelCaseMap(searchMap);
			List<Map<String, Object>> edmInfoList = edmInfoDao.selectEdmInfoList(searchInfo);
			int totalCount = edmInfoDao.selectEdmInfoListCnt(searchInfo);
			result.addDataSet("ds_output", edmInfoList);
			result.addVariable("totalCount", totalCount);

		} catch (Exception e ) {
			String message = "EDM 타겟 관리 리스트 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_ED_01", "EDM 타겟 관리 리스트 조회"}, e) {};
		}
		
		return result;
		
	}

	/** EDM 타겟 관리 등록 */
	@Override
	public NexacroResult insertEdmInfo(Map<String, Object> saveMap, OdOrderComm odComm) throws Exception {
		
		NexacroResult result = new NexacroResult();

        try {
            int rtn = 0;
            String msg = "";
            
            Map<String, Object> saveInfo = CommonUtil.toCamelCaseMap(saveMap);
                        
            String regpsnId = StringUtil.getString(odComm.getSession().get("REGPSN_ID"));
            String regpsnNm = edmInfoDao.selectRegpsnNm(regpsnId);
            saveInfo.put("sesId", odComm.getSessionId());
            saveInfo.put("regpsnId", regpsnId);
            saveInfo.put("regpsnNm", regpsnId + " " + regpsnNm);
             
            // EDM 타입 코드 체크 (이메일, 문자)
            if("E".equals(StringUtil.getString(saveInfo.get("edmFormCd")))) {
            	saveInfo.put("mktgMailRcvAgreYn", "Y");  
            	
            } else if("S".equals(StringUtil.getString(saveInfo.get("edmFormCd")))) {          	
            	saveInfo.put("mktgCharRcvAgreYn", "Y");            	
            }  
                       			                         
            // 해당 타입에 수신동의한 회원수 조회
            long totalCount = edmInfoDao.selectMbrListCnt(saveInfo);
            saveInfo.put("opcnt", totalCount);

        	// EDM 타겟 정보 등록
            rtn = edmInfoDao.insertEdmInfo(saveInfo);
            msg = "EDM 타겟 정보 등록";
                       
            // 정보 등록 에러시 예외 
            if( rtn < 0 ) {
            	throw new MessageException(-100, msg + " 실패");
            }
              
            // 등록 시점에 정보보호사무국에 이메일 발송			
			List<Map<String, Object>> securityMembers = edmInfoDao.selectSecurity();
			for(Map<String, Object> securityMember : securityMembers) {
				saveInfo.put("securityMemberName", securityMember.get("OPRTR_NM"));
				saveInfo.put("securityMemberEmail", securityMember.get("EMAIL_ADDR"));
				sendMailToSecurity(saveInfo); 
			}
			 
			                                  
            // 이메일 솔루션 등록전까지 SMS발송으로 대체           
			/*
			 * List<Map<String, Object>> securityMembers = edmInfoDao.selectSecurity();
			 * for(Map<String, Object> securityMember : securityMembers) {
			 * saveInfo.put("securityMemberName", securityMember.get("OPRTR_NM"));
			 * saveInfo.put("securityMemberHpNo", securityMember.get("HP_NO"));
			 * sendSmsToSecurity(saveInfo); }
			 */
                       
            // 등록후 EDM_SEQ가 추가된(쿼리에서 값리턴) savaInfo를 넥사크로로 리턴, 대용량엑셀다운로드시 필요
            result.addDataSet("ds_output", saveInfo);
                         
		} catch ( MessageException e ) {
            logger.info("result==>" + e.getCode());
            logger.info("result==>" + e.getMessage());

            // 에러코드 반환시만 처리하자
            if( e.getCode() == -100 )
            {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            }
            else
            {
                throw e;
            }
        }
       
        return result;
		
	}
	
	
	// 정보보호사무국에 이메일 발송
	public void sendMailToSecurity(Map<String, Object> saveInfo) throws Exception {
        Map<String,Object> commandMap = new HashMap<String,Object>();
        try {
        	// 현재 시간      	
        	LocalDateTime now = LocalDateTime.now();
        	String formatedNow = now.format(DateTimeFormatter.ofPattern("yyyy.MM.dd HH:mm"));
        	
        	// 대상자수 천단위 콤마
        	int count = Integer.valueOf(StringUtil.getString(saveInfo.get("opcnt")));
        	DecimalFormat df = new DecimalFormat("###,###,###");
        	String opcnt = df.format(count);
        	
            // 이메일 헤더정보
            commandMap.put("eventId"  , "20036");  							// 이메일 EVENT ID
            commandMap.put("sspEvtId"  , "20036-1");						// 이메일 SSP EVENT ID
            
            // 이메일 발송 로그테이블 등록
            edmInfoDao.insertEmailTransLogInfo(commandMap);
            
            commandMap.put("subInfoYn", "Y");                                     	 // 이메일 디테일 유무         
            commandMap.put("toEmail"  , saveInfo.get("securityMemberEmail"));        // 수신자 이메일 
            commandMap.put("toName"   , saveInfo.get("securityMemberName"));         // 수신자 이름 
            commandMap.put("fromEmail", "mail@serveone.co.kr");                   	 // 발신자 이메일
            commandMap.put("fromName" , "서브원스토어");                          	 // 발신자 이름
            commandMap.put("title"    , "마케팅 대상자 추출 건 입니다.");  			     // 메일 제목

            commandMap.put("mapping1", sspPropertyService.getString("mail.resource.root")
                                     + sspPropertyService.getString("mail.resource.logo"));                 // 서브원스토어의 이미지 URL경로
            commandMap.put("mapping2", "마케팅 대상자 데이터 추출");                                            // 치환값2
            commandMap.put("mapping3", "정보보호사무국 담당자님,");            									// 치환값3
            commandMap.put("mapping4", saveInfo.get("regpsnNm"));                            				// 치환값4 - 추출요청자 아이디
            commandMap.put("mapping5", formatedNow);                                 						// 치환값5 - 추출일시 
            commandMap.put("mapping6", saveInfo.get("extrRsn"));                                            // 치환값6 - 사유
            commandMap.put("mapping7", saveInfo.get("evtId"));                                              // 치환값7 - EDM 이벤트 아이디
            commandMap.put("mapping8", opcnt);                                              				// 치환값8 - 대상자 수
            commandMap.put("mapping9", saveInfo.get("excelPw"));                                            // 치환값9 - 엑셀 비밀번호
            commandMap.put("mapping10", sspPropertyService.getString("mail.resource.root"));                // 서브원스토어의 URL경로

            // 이메일 디테일정보
            List<Map<String, Object>> map = new ArrayList<>();
			
            coCommonSendService.insertCoSendMail(commandMap, map);
            
        } catch(Exception e) {
            this.logger.error("EDM 타겟 대상 정보 메일전송 오류");
            throw new Exception(e);
        }
    }
	
	
	// 정보보호사무국에 SMS 발송
	public void sendSmsToSecurity(Map<String, Object> saveInfo) throws Exception {
        Map<String,Object> commandMap = new HashMap<String,Object>();
        try {
        	       	      	
        	LocalDateTime now = LocalDateTime.now();
        	String formatedNow = now.format(DateTimeFormatter.ofPattern("yyyy.MM.dd HH:mm"));
        	
        	String callback = sspPropertyService.getString("sms.callback.ssp");
        	String telNo = StringUtil.getString(saveInfo.get("securityMemberHpNo")).trim(); 
        	
        	commandMap.put("transDtm", "");				//전송일시(SYSDATE)
			commandMap.put("custIssNo", 20036);		    //고객발급번호
			commandMap.put("custIssLowrId", "01");		//고객발급하위ID
			commandMap.put("charTransFormCd", "0");		//문자전송형태코드(0:일반메시지,1:콜백URL메시지)
			commandMap.put("telNo", telNo);		        //전화번호
			commandMap.put("cbTelNo", callback);		//콜백전화번호
			commandMap.put("transMsg", "[서브원] 정보보호사무국 담당자님, 마케팅 대상자 추출 요청 내용을 확인해주세요.");				//전송메시지
			commandMap.put("smsEtcFds1", "추출요청자 : " + saveInfo.get("regpsnNm"));		//SMS기타필드1 - 추출요청자
			commandMap.put("smsEtcFds2", "추출일시 : " + formatedNow);					//SMS기타필드2 - 추출일시
			commandMap.put("smsEtcFds3", "사유 : " + saveInfo.get("extrRsn"));			//SMS기타필드3 - 사유
			commandMap.put("smsEtcFds4", "이벤트ID : " + saveInfo.get("evtId"));			//SMS기타필드4 - 이벤트ID
			commandMap.put("smsEtcFds5", "대상자 수 : " + saveInfo.get("opcnt"));			//SMS기타필드5 - 대상자 수
			commandMap.put("smsEtcFds6", "엑셀PW : " + saveInfo.get("excelPw"));			//SMS기타필드6 - 엑셀PW
			
			coCommonSendService.insertCoSendSms(commandMap);		//전송 Table 저장            
            
        } catch(Exception e) {
            this.logger.error("EDM 타겟 대상 정보 SMS전송 오류");
            throw new Exception(e);
        }
    }
	
}
