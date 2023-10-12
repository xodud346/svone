/*------------------------------------------------------------------------------
 * NAME : FileUploadDowloadServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.07.11  이택우
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.rd.service.RdPrcChgReqPkgService;
import com.ssp.core.co.service.CoCommonSendService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   RdPrcChgReqPkgServiceImpl
 * @@desc    메일 서비스 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.07.11
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.07.11			       최초작성
 */
@Service("rdPrcChgReqPkgService")
public class RdPrcChgReqPkgServiceImpl implements RdPrcChgReqPkgService {
	private Logger log = LoggerFactory.getLogger(this.getClass());
	@Autowired
	SqlSession sqlSession;
	
	@Autowired
	public CoCommonSendService coCommonSendService;

    /**
     * 가격변경요청 메일(sendEmailRdPrcChgReqPkg)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
	public void sendEmailRdPrcChgReqPkg(Map<String, Object> commandMap) throws Exception {
    	
    	System.out.println("RnD 가격변경요청 메일 시작===========");
		 
		String toEmail			= null;
		String toName 			= null;
		String cnt 				= null;
		String userId 			= null;
		String custPreqno 		= null;
		String prdId 			= null;
		String prdNm 			= null;
		String attrValList 		= null;
		String mnfrNm 			= null;
		String purgChrpsnId		= null;
		String currYyyy			= null;
		String currMm			= null;
		String currDd			= null;
		String currHh			= null;	
		
		try {

			List<Map<String, Object>> list = sqlSession.selectList("RdPrcChgReq.selectRdPrcChgReqPkg", commandMap);
			
			for(int i=0;i<list.size();i++) {
				List<Map<String, Object>> listMail = new ArrayList<Map<String, Object>>();
				Map<String, Object> mapMail = list.get(i);
				
				toEmail 	= StringUtil.getString(mapMail.get("RECV_MAIL"));
				toName 		= "홍길동";
				cnt 		= StringUtil.getString(mapMail.get("CNT"));
				currYyyy 	= StringUtil.getString(mapMail.get("CURR_YYYY"));
				currMm 		= StringUtil.getString(mapMail.get("CURR_MM"));
				currDd 		= StringUtil.getString(mapMail.get("CURR_DD"));
				currHh		= StringUtil.getString(mapMail.get("CURR_HH"));
				userId 		= "PM00002925";
				
				mapMail.put("eventId", "20065");							//이메일 템플릿 정보
				mapMail.put("subInfoYn", "Y");								//이메일 디테일 유무
				mapMail.put("toEmail", toEmail);							//수신자 이메일 
				mapMail.put("toName", toName);								//수신자 이름 
				mapMail.put("fromEmail", "mall.serveone.co.kr");			//발신자 이메일
				mapMail.put("fromName", "서브원스토어 G-lab");					//발신자 이름
				mapMail.put("title", "가격정보수정 요청 메일입니다.");				//메일 제목
				mapMail.put("mapping1", "https://teststore.serveone.co.kr/fo/images/common/mail_logo.png");	//치환값1
				mapMail.put("mapping2", "가격정보수정 요청 안내");													//치환값2
				mapMail.put("mapping3", ""+currYyyy+"년 "+currMm+"월 "+currDd+"일 "+currHh+" 기준 가격정보수정 요청 중 총 "+cnt+"건 입니다.");	//치환값3
				mapMail.put("mapping4", "가격정보수정 요청은 전체 메뉴>등록상품 관리>가격 변경이력조회에서 관리하실 수 있습니다.");							//치환값4
				mapMail.put("mapping5", "");														//치환값5
				mapMail.put("mapping6", "※ 기타 문의사항이 있으실 경우, 구매담당자에게 문의해주시기 바랍니다.");		//치환값6
				mapMail.put("mapping7", "");														//치환값7
				mapMail.put("mapping8", "");														//치환값8
				mapMail.put("mapping9", "");														//치환값9
				mapMail.put("mapping10", "https://testpartners.serveone.co.kr/index.do");			//치환값10
				mapMail.put("sendTime", "");														//예약전송일시
				mapMail.put("userId", userId);														//회원ID
				mapMail.put("CO_CD", StringUtil.getString(commandMap.get("CO_CD")));
				mapMail.put("PRPS_SPR_CD", StringUtil.getString(commandMap.get("PRPS_SPR_CD")));

				if(list.size() > 0) {
					List<Map<String, Object>> listDtls = sqlSession.selectList("RdPrcChgReq.selectRdPrcChgReqPkgInfo", mapMail); 
					int dtlNum = 0;
					
					for(int ii=0;ii<listDtls.size();ii++) {
						dtlNum = ii+1;
						
						Map<String, Object> mapDtls = listDtls.get(ii);
						
						custPreqno 		= StringUtil.getString(mapDtls.get("CUST_PREQNO"));
						prdId 			= StringUtil.getString(mapDtls.get("PRD_ID"));
						prdNm 			= StringUtil.getString(mapDtls.get("PRD_NM"));
						attrValList 	= StringUtil.getString(mapDtls.get("ATTR_VAL_LIST"));
						mnfrNm 			= StringUtil.getString(mapDtls.get("MNFR_NM"));
						purgChrpsnId	= StringUtil.getString(mapDtls.get("PURG_CHRPSN_ID"));

						mapDtls.put("eventId", "20063");
						mapDtls.put("mstSeq", "1");
						mapDtls.put("reptNo", "1");
						mapDtls.put("reptSeq", dtlNum);
						mapDtls.put("transEtcFds1", custPreqno);
						mapDtls.put("transEtcFds2", prdId);
						mapDtls.put("transEtcFds3", prdNm);
						mapDtls.put("transEtcFds4", attrValList);
						mapDtls.put("transEtcFds5", mnfrNm);
						mapDtls.put("transEtcFds6", purgChrpsnId);
						
						/* subMapList
			        	 * eventId       ; 이메일 템플릿 정보
			             * mstSeq        ; 마스터순번	 
			             * reptNo        ; 반복번호	     
			             * reptSeq       ; 반복순번	     
			             * transEtcFds1  ; 전송기타필드1  
			             * transEtcFds2  ; 전송기타필드2  
			             * transEtcFds3  ; 전송기타필드3  
			             * transEtcFds4  ; 전송기타필드4  
			             * transEtcFds5  ; 전송기타필드5  
			             * transEtcFds6  ; 전송기타필드6  
			             * transEtcFds7  ; 전송기타필드7  
			             * transEtcFds8  ; 전송기타필드8  
			             * transEtcFds9  ; 전송기타필드9  
			             * transEtcFds10 ; 전송기타필드10 
			             * transEtcFds11 ; 전송기타필드11 
			             * transEtcFds12 ; 전송기타필드12 
			             * transEtcFds13 ; 전송기타필드13 
			             * transEtcFds14 ; 전송기타필드14 
			             * transEtcFds15 ; 전송기타필드15 
			             * transEtcFds16 ; 전송기타필드16 
			             * transEtcFds17 ; 전송기타필드17 
			             * transEtcFds18 ; 전송기타필드18 
			             * transEtcFds19 ; 전송기타필드19 
			             * transEtcFds20 ; 전송기타필드20 
			             * transEtcFds21 ; 전송기타필드21 
			             * transEtcFds22 ; 전송기타필드22 
			             * transEtcFds23 ; 전송기타필드23 
			             * transEtcFds24 ; 전송기타필드24 
			             * transEtcFds25 ; 전송기타필드25 
			             * transEtcFds26 ; 전송기타필드26 
			             * transEtcFds27 ; 전송기타필드27 
			             * transEtcFds28 ; 전송기타필드28 
			             * transEtcFds29 ; 전송기타필드29 
			             * transEtcFds30 ; 전송기타필드30 
			        	*/
						listMail.add(mapDtls);
					}
				}
				
				System.out.println("	&& dtl size="+listMail.size());
				coCommonSendService.insertCoSendMail(mapMail, listMail); 
			}
			
		}catch(Exception e) {
			log.error("sendEmailRdPrcChgReqPkg exception :", e);
		}
		
		System.out.println("RnD 가격변경요청 메일 종료===========");
    }
}
