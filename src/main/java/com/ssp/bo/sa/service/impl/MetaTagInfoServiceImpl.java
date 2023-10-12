package com.ssp.bo.sa.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.sa.dao.MetaTagInfoDao;
import com.ssp.bo.sa.service.MetaTagInfoService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * @title 메타 태그 정보 서비스 Impl
 * @author yuno
 * @since 2023.05.23
 * @version 1.0
 * ==============변경 내역 ===============
 * 날짜			변경자			내용
 * -------------------------------------
 * 2023.05.23   김윤호			최초작성
 */

@Service("metaTagInfoService")
public class MetaTagInfoServiceImpl implements MetaTagInfoService{
	private final Logger logger = LoggerFactory.getLogger(MetaTagInfoServiceImpl.class);
	
	@Autowired
	private MetaTagInfoDao metaTagInfoDao;
	
	/**
	 * 1.MethodName : selectMetaTagInfoList
	 * 2.ClassName : MetaTagInfoServiceImpl
	 * 3.Comment : 메타 태그 정보 리스트 조회
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectMetaTagInfoList(Map<String, Object> dataMap) throws Exception {
		NexacroResult result = new NexacroResult();		
		
		int totalCount = metaTagInfoDao.selectMetaTagInfoListCount(dataMap);
		List<Map<String, Object>> metaTagInfoList = metaTagInfoDao.selectMetaTagInfoList(dataMap);		
		result.addVariable("totalCount", totalCount);
		result.addDataSet("ds_output", metaTagInfoList);
		return result;
	}
	
	/**
	 * 1.MethodName : selectMetaTagInfo
	 * 2.ClassName : MetaTagInfoServiceImpl
	 * 3.Comment : 메타 태그 정보 상세
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectMetaTagInfo(Map<String, Object> dataMap) throws Exception {
		NexacroResult result = new NexacroResult();
		
		Map<String, Object> metaTagInfoMap = metaTagInfoDao.selectMetaTagInfo(dataMap);
		result.addDataSet("ds_output", metaTagInfoMap);
		return result;
	}
	
	/**
	 * 1.MethodName : saveMetaTagInfo
	 * 2.ClassName : MetaTagInfoServiceImpl
	 * 3.Comment : 메타 태그 정보 저장
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@Override
	public NexacroResult saveMetaTagInfo(Map<String, Object> dataMap) throws Exception {
		NexacroResult result = new NexacroResult();
		
		int rtn = 0;
		String msg = "";
		
		try {
			// 사용자 정보
			Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
			if(sessionsAdmin != null) {
				dataMap.put("REGPSN_ID", sessionsAdmin.get("OPRTR_ID"));
				dataMap.put("UPDPSN_ID", sessionsAdmin.get("OPRTR_ID"));
			}
			// 시퀀스
			String metaTagSeq = StringUtil.getString(dataMap.get("META_TAG_SEQ"));
			
			if("".equals(metaTagSeq)) { // 등록
				Map<String, Object> metaTagInfoSeqMap = metaTagInfoDao.selectMetaTagInfoSeq(dataMap);
				metaTagSeq = StringUtil.getString(metaTagInfoSeqMap.get("META_TAG_SEQ"));
				dataMap.put("META_TAG_SEQ", metaTagSeq);
				rtn = metaTagInfoDao.insertMetaTagInfo(dataMap);
				msg = "메타 태그 정보 등록";
			} else { // 수정
				rtn = metaTagInfoDao.updateMetaTagInfo(dataMap);
				msg = "메타 태그 정보 수정";
			}
			
			// 등록, 수정 실패시
			if( rtn < 0 ) {
            	throw new MessageException(-200, msg + " 실패");
            }
			
		} catch(MessageException e) {
			logger.info("[ 에러 정보 ] - 코드: {} | 메세지: {}", e.getCode(), e.getMessage());

            // 에러코드 반환시만 처리
            if( e.getCode() == -200 ) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly(); 
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            } else {
                throw e;
            }
		}
		
		return result;
	}

	/**
	 * 1.MethodName : deleteMetaTagInfo
	 * 2.ClassName : MetaTagInfoServiceImpl
	 * 3.Comment : 메타 태그 정보 삭제
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@Override
	public NexacroResult deleteMetaTagInfo(Map<String, Object> dataMap) throws Exception {
		NexacroResult result = new NexacroResult();
	
		try {
			int rtn = metaTagInfoDao.deleteMetaTagInfo(dataMap);
			String msg = "메타 태그 정보 삭제";
			// 삭제 실패시
			if( rtn < 0 ) {
            	throw new MessageException(-200, msg + " 실패");
            }
		} catch(MessageException e) {
			logger.info("[ 에러 정보 ] - 코드: {} | 메세지: {}", e.getCode(), e.getMessage());

            // 에러코드 반환시만 처리
            if( e.getCode() == -200 ) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly(); 
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            } else {
                throw e;
            }
		}
		return result;
	}

	
	
}
