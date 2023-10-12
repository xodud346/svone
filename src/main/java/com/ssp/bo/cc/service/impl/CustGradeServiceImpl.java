package com.ssp.bo.cc.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.ssp.core.common.exception.MessageException;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.dao.CustGradeDao;
import com.ssp.bo.cc.service.CustGradeService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 고객등급관리 service implements
 * @package com.ssp.bo.cc.service.impl
 * <pre> 
 * @author  moonjooh
 * @since   2022. 02. 10.
 * @version 1.0
 * @see CustGradeServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@Service("custGradeService")
public class CustGradeServiceImpl implements CustGradeService {

    @Resource(name="custGradeDao")
    private CustGradeDao CustGradeDao;

    private final Logger logger = LoggerFactory.getLogger(CustGradeServiceImpl.class);

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 고객등급 리스트를 조회한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public NexacroResult custGrdList(Map<String,Object> searchInfo) throws Exception {
    	NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        
        //조회
        List<Map<String,Object>> list = CustGradeDao.selectCustGrdList(searchMap); 
        // 카운트
      	int totalCount = CustGradeDao.selectCustGrdListCount(searchMap);
      	
      	// 리턴값 set
        result.addVariable( "totalCount", totalCount);
        result.addDataSet("ds_output1", list);
        
        return result;
	}

    /**
     * 고객등급 리스트를 수정/저장한다.
     * @param commandMap NexacroResult
     * @return Map
     * @throws Exception Exception
     */
	@Override
    @Transactional
	public NexacroResult saveCustGrd(List<Map<String, Object>> saveListMap) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		try {
			for(Map<String, Object> rowMap : saveListMap){
				// input dataset id 카멜화
		        Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(rowMap);
		        //saveMap.put("oprtrId", ccUtils.getSession().get("OPRTR_ID").toString());
		        
		        // 로그인 세션확인
		        String login = StringUtil.getString(saveMap.get("oprtrId"));
		        if(login == null || "".equals(login)) {
		        	throw new MessageException(-100, "로그인 세션이 만료되었습니다. 다시 로그인하시길 바랍니다.");
		        }
		        
		        // 앞자리수와 뒷자리수로 나눠 가져온 할인율 조합
//		        int inputFr = Integer.parseInt(StringUtil.getString(saveMap.get("aplyDcrtFr")));
//		        int inputEnd = StringUtil.getInt(saveMap.get("aplyDcrtEnd"));
		        
//		        float aplyDcrt = 0;
//		        if(inputEnd>0 && inputEnd<100) {
//		        	// 22.06.27 고객 테스트 : 적용할인율 (-)적용
//		        	if(inputFr < 0) {
//		        		aplyDcrt = inputFr - ((float)inputEnd/100);
//		        	}else {
//		        		aplyDcrt = inputFr + ((float)inputEnd/100);
//		        	}
//		        }
//		        else { 
//		        	aplyDcrt = inputFr;
//		        }
//		        
//		        float aplyDcrt =Float.parseFloat(StringUtil.getString(saveMap.get("BAplyDcrt")));
		        
//		        saveMap.put("BaplyDcrt", "-0.5");
		        float aplyDcrt =Float.parseFloat(StringUtil.getString(saveMap.get("aplyDcrt")));
		        saveMap.put("aplyDcrt", aplyDcrt);

		        // 날짜입력 결합
		        String dateStr1 = null;
		        String dateEnd1 = null;
		        String dateStr2 = null;
		        String dateEnd2 = null;
		        if(saveMap.get("vldPerdStrDtmStr") != null && !"".equals(saveMap.get("vldPerdStrDtmStr"))) {
			        dateStr1 = (String.valueOf(saveMap.get("vldPerdStrDtmStr"))).substring(0,8);
		        }
		        if(saveMap.get("vldPerdEndDtmStr") != null && !"".equals(saveMap.get("vldPerdEndDtmStr"))) {
		        	dateEnd1 = (String.valueOf(saveMap.get("vldPerdEndDtmStr"))).substring(0,8);
		        }
		        if(saveMap.get("vldPerdStrDtmEnd") != null && !"".equals(saveMap.get("vldPerdStrDtmEnd"))) {
		        	dateStr2 = String.valueOf(saveMap.get("vldPerdStrDtmEnd"));
		        }
		        if(saveMap.get("vldPerdEndDtmEnd") != null && !"".equals(saveMap.get("vldPerdEndDtmEnd"))) {
		        	dateEnd2 = String.valueOf(saveMap.get("vldPerdEndDtmEnd"));
		        }
		        
		        //if(dateStr1 == null || "".equals(dateStr1)) dateStr1 = null;
		        if(dateStr2 == null || "".equals(dateStr2)) dateStr2 = "000000";
		        if(dateEnd1 == null || "".equals(dateEnd1)) dateEnd1 = "99991231";
		        if(dateEnd2 == null || "".equals(dateEnd2)) dateEnd2 = "235959";
		        
		        if(dateStr1 == null || "".equals(dateStr1)) saveMap.put("vldPerdStrDtm", null);
		        else saveMap.put("vldPerdStrDtm", dateStr1 + dateStr2);
		        saveMap.put("vldPerdEndDtm", dateEnd1 + dateEnd2);
		        
	        	// 1. 값 수정인 경우 : 마스터값은 '할인율' 혹은 마지막순번인 경우 '유효기간종료일자'만 수정가능
		        if("0".equals(saveMap.get("MASTER"))) {
		        	// STATE(상태) 값이 N(만료)인 경우 수정 불가
			        if("N".equals(saveMap.get("STATE"))) {
			        	throw new MessageException(-1, "등급명 "+saveMap.get("bzplcGrdNm")+" 은(는) 이미 만료된 등급입니다. 다시한번 확인해주세요."); 
			        }
		        	
		        	String chkDtm1 = (StringUtil.getString(saveMap.get("chkDtm1"))).substring(0,8);
		        	String chkDtm2 = StringUtil.getString(saveMap.get("chkDtm2"));
		        	String chkDtm3 = (StringUtil.getString(saveMap.get("vldPerdEndDtm"))).substring(0,8);
		        	String chkDtm4 = StringUtil.getString(saveMap.get("vldPerdEndDtmEnd"));
		        	
		        	// 1-1. 종료일시에 수정이 일어난 경우
		        	if(!chkDtm1.equals(chkDtm3) || !chkDtm2.equals(chkDtm4)) {
		        		// 마스터값의 시퀀스가 마지막 시퀀스인지 확인
		        		int chkLastSeq = CustGradeDao.selectChkLastSeq(saveMap);
		        		if(chkLastSeq > 0) {
		        			throw new MessageException(-1, "등급명 "+saveMap.get("bzplcGrdNm")+" 은(는) 마지막 순번의 데이터가 아니라 종료일시를 수정 할 수 없습니다. 다시한번 확인해주세요.");
						}
		        		
		        		// 날짜 유효성체크 필요 - 유효시간 시작일시가 종료일시보다 빠른지
		        		int chkLastDate = CustGradeDao.selectchkLastDate(saveMap);
		        		if(chkLastDate > 0) {
		        			throw new MessageException(-1, "등급명 "+saveMap.get("bzplcGrdNm")+" 은(는) 종료일시가 시작일시보다 빨라 수정 할 수 없습니다."); 
						}
		        		
		        		int updCnt1 = CustGradeDao.updateGrdDtm(saveMap); // 유효기간 종료일시 update
				        if(updCnt1 <= 0) {
				        	throw new MessageException(-1, "저장에 실패했습니다."); 
						}
		        	}
		        	
		        	// 1-2. 할인율의 수정이 일어난경우 - 05/17 단위테스트 : 미사용
		        	/*
		        	if(!Float.toString(aplyDcrt).equals(Float.toString(Float.parseFloat(StringUtil.getString(saveMap.get("BAplyDcrt")))))) {
		        		// 할인율 수정이 현재적용중인 시퀀스라면 현재날짜기준으로 앞뒤잘라줘야함
		        		int updCnt2 = CustGradeDao.selectchkDate(saveMap);
		        		if(updCnt2 > 0) {
		        			// 기존의 시퀀스 종료시간을 당김
					        Map<String, Object> sMap = CommonUtil.toCamelCaseMap(saveMap);
		        			sMap.put("vldPerdEndDtm", CustGradeDao.selectVldPerdSysdate(saveMap));
					        int updCnt4 = CustGradeDao.updateGrdDtm(sMap); // update
					        if(updCnt4 <= 0) {
					        	throw new MessageException(-1, "저장에 실패했습니다.");
							}
					        resultMap.put("msg", sMap.get("bzplcGrdNm")); // 유효기간이 변경되면 msg 전달
		        			
		        			// 시퀀스No 정렬
		        			int maxSeq = CustGradeDao.selectMaxSeq(saveMap);	// 1. SEQ최대값 조회
		        			int seq = Integer.parseInt(StringUtil.getString(saveMap.get("SEQ")));
		        			
		        			for(int i=maxSeq; i>seq; i--) {	// 2. 최대SEQ 부터 1씩내려가며 SEQ보다 큰 값까지 1씩더해줌
		        				sMap.put("SEQ", i);
		        				int updCnt6 = CustGradeDao.updateNextSeq(sMap);
		        				if(updCnt6 <= 0) {
						        	throw new MessageException(-1, "저장에 실패했습니다.");
								}
		        			}
		        			
		        			// insert
		        			int updCnt7 = CustGradeDao.saveCustGrdSetSeq(saveMap);
		    		        if(updCnt7 <= 0) {
					        	throw new MessageException(-1, "저장에 실패했습니다.");
		    				}
		        		}else {
		        			// 할인율 수정
				        	int updCnt3 = CustGradeDao.updateGrdAplyDcrt(saveMap); // update
					        if(updCnt3 <= 0) {
					        	throw new MessageException(-1, "저장에 실패했습니다.");
							}
		        		}
		        	}
		        	*/
		        	
		        	continue;
		        }
		        
		        // 입력시간에대한 유효성 체크
		        int chkCnt = CustGradeDao.selectChkLackTime(saveMap);
		        if(chkCnt > 0) {
					throw new MessageException(-1, "등급명 "+saveMap.get("bzplcGrdNm")+" 은(는) 입력된 유효기간이 정확하지 않습니다."); 
				}
		        
		        // 2. 기간변경인 경우
		        if(saveMap.get("bzplcGrdId") != null && !"".equals(saveMap.get("bzplcGrdId"))) {
		        	// 시작일시 당일은 수정불가능 - 화면에서 당일인경우 비워서 가져왔음
			        if(saveMap.get("vldPerdStrDtm") == null || "".equals(saveMap.get("vldPerdStrDtm"))) {
			        	throw new MessageException(-1, "등급명 "+saveMap.get("bzplcGrdNm")+" 은(는) 기존코드 추가생성 시, 당일은 등록할 수 없습니다. 이후 일자를 선택하세요."); 
		        	}

			        // 해당 ID에 중복되는 유효기간 데이터가 있는지 체크
		        	List<Map<String, Object>> chkMap = null;
		        	chkMap = CustGradeDao.selectOverlapTime(saveMap);
		        	if(chkMap.size() > 1) {
		        		// 겹치는 구간이 2개 이상인 경우 Exception
		        		throw new MessageException(-1, "등급명 "+saveMap.get("bzplcGrdNm")+" 은(는) 입력된 유효기간이 중복되고있습니다.");
		        	}else if(chkMap.size() == 1){
		        		// 겹치는 구간이 1개인경우 유효기간 시작일이 제일 늦은 유효기간의 시작일보다 시작일시를 빠른 날짜로 지정할 수 없음
		        		Map<String, Object> rMap = chkMap.get(0);
		        		if(!rMap.get("TOT_CUNT").equals(rMap.get("SEQ"))) {
		        			// 유효기간 시작일이 제일 늦은 유효기간의 시작일보다 시작일시를 빠른 날짜로 지정할 수 없음
		        			throw new MessageException(-1, "등급명 "+saveMap.get("bzplcGrdNm")+" 은(는) 유효기간 시작일이 제일 늦은 유효기간의 시작일보다 시작일시를 빠른 날짜로 지정할 수 없습니다."); 
		        		}
		        		
		        		// 기존의 마지막 유효기간 update
				        Map<String, Object> sMap = CommonUtil.toCamelCaseMap(rMap);
				        sMap.put("vldPerdEndDtm", CustGradeDao.selectVldPerdEndDtm(saveMap));
				        
				        int updCnt5 = CustGradeDao.updateGrdDtm(sMap); // update
				        if(updCnt5 <= 0) {
				        	throw new MessageException(-1, "저장에 실패했습니다."); 
						}
				        resultMap.put("msg", sMap.get("bzplcGrdNm")); // 유효기간이 변경되면 msg 전달
				        
		        	}else {
		        		// 겹치는구간이 없는경우
		        		throw new MessageException(-1, "등급명 "+saveMap.get("bzplcGrdNm")+" 은(는) 기간추가 시, 시작일자는 -1작일 이후로 지정해야 합니다.");
		        	}
				}
		        
		        // 3. 저장
		        int returnCnt = CustGradeDao.saveCustGrd(saveMap);
		        if(returnCnt <= 0) {
					throw new MessageException(-1, "저장에 실패했습니다."); 
				}
			}
		}catch(MessageException e) {
			if( e.getCode() == -1 || e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
	            result.setErrorCode(e.getCode());
	            result.setErrorMsg(e.getMessage());
	            return result;
	        } else {
	            throw e;
	        }
		}
		
		result.addDataSet("ds_output1", resultMap);
		return result;
	}
	
	/**
     * 고객등급 사용중인 데이터 체크
     * @param searchInfo
     * @return Map
     * @throws Exception Exception
     */
    @Override
	public NexacroResult selectCustGrdChk(Map<String,Object> searchInfo) throws Exception {
    	NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

        //조회
        List<Map<String,Object>> list = CustGradeDao.selectCustGrdChk(searchMap); 
      	
      	// 리턴값 set
        result.addDataSet("ds_output1", list);
        
        return result;
	}

    /**
     * 고객등급 이력조회
     * @param searchInfo
     * @return Map
     * @throws Exception Exception
     */
	@Override
	public List<Map<String,Object>> selectCustGradeHst(Map<String, Object> searchInfo) throws Exception {
		// input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);
        return CustGradeDao.selectCustGradeHst(searchMap);
	}
	
}


