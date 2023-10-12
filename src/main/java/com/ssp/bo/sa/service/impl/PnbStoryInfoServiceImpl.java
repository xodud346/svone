package com.ssp.bo.sa.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.sa.dao.PnbStoryInfoDao;
import com.ssp.bo.sa.service.PnbStoryInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title PNB스토리 Serviceimpl
 * @package com.ssp.bo.sample.service.impl
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.30.
 * @version 1.0
 * @see PnbStoryInfoServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.30.	박진원		최초작성
 * 2023.02.17.	87minho		PNB스토리 리뉴얼
 */
@Service("pnbStoryInfoService")
public class PnbStoryInfoServiceImpl implements PnbStoryInfoService {
	@Resource(name = "pnbStoryInfoDao")
	private PnbStoryInfoDao pnbStoryInfoDao;

    private final Logger logger = LoggerFactory.getLogger(PnbStoryInfoServiceImpl.class);

    /**
	 * <pre>
	 * 1. MethodName : selectPnbStoryThmList
	 * 2. ClassName : PnbStoryInfoServiceImpl
	 * 3. Comment : PNB스토리 테마 목록 조회
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public List<Map<String,Object>> selectPnbStoryThmList(Map<String, Object> searchMap) throws Exception {
		return pnbStoryInfoDao.selectPnbStoryThmList(searchMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : updateThmDispSo
	 * 2. ClassName : PnbStoryInfoServiceImpl
	 * 3. Comment : PNB스토리 테마 순서 저장
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param savePnbStoryInfoMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public NexacroResult updateThmDispSo(List<Map<String, Object>> paramList) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
		int rtn = 0;
		String msg = "";
		String oprtrId = "";
		if (sessionsAdmin != null) {
			oprtrId = StringUtil.getString(sessionsAdmin.get("OPRTR_ID"));
		}
		
		try {
			for(Map<String, Object> paramInfo : paramList) {
				Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramInfo);

				paramMap.put("updpsnId", oprtrId);
				
				rtn = pnbStoryInfoDao.updateThmDispSo(paramMap);
				msg = "PNB스토리 테마 순서 저장";   
			}
			
			if (rtn < 0) {
				throw new MessageException(-100, msg + " 실패");
			}
		} catch ( MessageException e ) {
            logger.info("result==>" + e.getCode());
            logger.info("result==>" + e.getMessage());

            // 에러코드 반환시만 처리
            if( e.getCode() == -100 ) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
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
	 * <pre>
	 * 1. MethodName : saveThmInfo
	 * 2. ClassName : PnbStoryInfoServiceImpl
	 * 3. Comment : PNB스토리 테마 저장
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param savePnbStoryInfoMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public NexacroResult saveThmInfo(Map<String, Object> paramMap, List<Map<String, Object>> pnbList) throws Exception {	
        NexacroResult result = new NexacroResult();

        try {	
        	int rtn = 0;
            String msg = "";
    		
            String sUpdpsnId = StringUtil.getString(paramMap.get("updpsnId"));
            String pnbThmSeq = StringUtil.getString(paramMap.get("pnbThmSeq"));
    		
            if("".equals(pnbThmSeq)) {	
            	// PNB스토리 테마 정보 등록
                rtn = pnbStoryInfoDao.insertThmInfo(paramMap);
                msg = "PNB스토리 테마 정보 등록";         	
            } else {
            	// PNB스토리 기본 정보 수정
                rtn = pnbStoryInfoDao.updateThmInfo(paramMap);
                msg = "PNB스토리 테마 정보 수정";            	
            }
            
            if(pnbList != null) {
                for(Map<String, Object> pnbInfo : pnbList) {
    				Map<String, Object> pnbMap = CommonUtil.toCamelCaseMap(pnbInfo);
    
    				paramMap.put("updpsnId", sUpdpsnId);
    				
    				pnbStoryInfoDao.updatePnbStoryDispSo(pnbMap);
    				msg = "PNB스토리 테마 아이템 순서 저장";   
    			}
            }
            
            if( rtn < 0 ) {
            	throw new MessageException(-100, msg + " 실패");
            }
		} catch ( MessageException e ) {
            logger.info("result==>" + e.getCode());
            logger.info("result==>" + e.getMessage());

            // 에러코드 반환시만 처리
            if( e.getCode() == -100 ) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
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
	 * <pre>
	 * 1. MethodName : deleteThmInfo
	 * 2. ClassName : PnbStoryInfoServiceImpl
	 * 3. Comment : PNB스토리 테마 삭제
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param savePnbStoryInfoMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public NexacroResult deleteThmInfo(Map<String, Object> paramMap) throws Exception {	
        NexacroResult result = new NexacroResult();

        try {
        	int rtn = 0;
            String msg = "";
    		
        	// PNB스토리 기본 정보 수정
            rtn = pnbStoryInfoDao.deleteThmInfo(paramMap);
            msg = "PNB스토리 테마 정보 삭제";            	
            
            if( rtn < 0 ) {
            	throw new MessageException(-100, msg + " 실패");
            } else {
            	// pnbSeq는 NULL
            	pnbStoryInfoDao.deletePnbStoryInfo(paramMap);
            	pnbStoryInfoDao.deletePnbStoryCatgDtl(paramMap);
            	pnbStoryInfoDao.deletePnbStoryCatgPrdDtl(paramMap);            	
            }
		} catch ( MessageException e ) {
            logger.info("result==>" + e.getCode());
            logger.info("result==>" + e.getMessage());

            // 에러코드 반환시만 처리
            if( e.getCode() == -100 ) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
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
	 * <pre>
	 * 1. MethodName : savePnbStoryInfo
	 * 2. ClassName : PnbStoryInfoServiceImpl
	 * 3. Comment : PNB스토리 등록/수정/삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.30.
	 * </pre>
	 *
	 * @param savePnbStoryInfoMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public NexacroResult savePnbStoryInfo(Map<String, Object> savePnbStoryInfoMap, List<Map<String, Object>> savePnbStoryCatgDtlMapList, List<Map<String, Object>> savePnbStoryCatgPrdDtlMapList) throws Exception {	
        NexacroResult result = new NexacroResult();

        try {	
        	int rtn = 0;
            String msg = "";
    		
            String sRegpsnId = StringUtil.getString(savePnbStoryInfoMap.get("regpsnId"));
            String sUpdpsnId = StringUtil.getString(savePnbStoryInfoMap.get("updpsnId"));
            
            String sPnbThmSeq = StringUtil.getString(savePnbStoryInfoMap.get("pnbThmSeq"));
            String sPnbSeq = StringUtil.getString(savePnbStoryInfoMap.get("pnbSeq"));
    		
            if ("".equals(sPnbSeq)) {	
            	// PNB스토리 시퀀스 값 조회
            	Map<String,Object> pnbStoryInfoSeqMap = pnbStoryInfoDao.selectPnbStoryInfoSeq(savePnbStoryInfoMap);

                String sPnbSeqNew = StringUtil.getString(pnbStoryInfoSeqMap.get("PNB_SEQ"));
                
                sPnbSeq = sPnbSeqNew;

                savePnbStoryInfoMap.put("pnbSeq", sPnbSeq);
            	
            	// PNB스토리 기본 정보 등록
                rtn = pnbStoryInfoDao.insertPnbStoryInfo(savePnbStoryInfoMap);
                msg = "PNB스토리 기본 정보 등록";            	
            } else {
            	// PNB스토리 기본 정보 수정
                rtn = pnbStoryInfoDao.updatePnbStoryInfo(savePnbStoryInfoMap);
                msg = "PNB스토리 기본 정보 수정";            	
            }
            
            // 카테고리 삭제.
            for( Map<String, Object> data : savePnbStoryCatgDtlMapList ) {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
                
                saveMap.put("pnbThmSeq", sPnbThmSeq);
                saveMap.put("pnbSeq", sPnbSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);
    			
                if( saveType == 3 ) { // 삭제
                	// PNB스토리 카테고리 정보 삭제
                    rtn = pnbStoryInfoDao.deletePnbStoryCatgDtl(saveMap);
                    msg = "PNB스토리 카테고리 정보 삭제";                    
                }
            }

            // 카티고리 상품 삭제.
            for( Map<String, Object> data : savePnbStoryCatgPrdDtlMapList ) {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
                
                saveMap.put("pnbThmSeq", sPnbThmSeq);
                saveMap.put("pnbSeq", sPnbSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);
    			
                if( saveType == 3 ) { // 삭제
                	// PNB스토리 카테고리 상품 정보 삭제
                    rtn = pnbStoryInfoDao.deletePnbStoryCatgPrdDtl(saveMap);
                    msg = "PNB스토리 카테고리 상품 정보 삭제";                    
                }
            }
            
            // 카테고리 등록/수정.
            for( Map<String, Object> data : savePnbStoryCatgDtlMapList ) {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                String sPnbStoryCatgSeq = StringUtil.getString(saveMap.get("pnbCatgSeq"));
                
                saveMap.put("pnbThmSeq", sPnbThmSeq);
                saveMap.put("pnbSeq", sPnbSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);
    			
                if( saveType == 1) { // 등록
                	// PNB스토리 카테고리 시퀀스 값 조회
                	String sPnbStoryCatgSeqNew = pnbStoryInfoDao.selectPnbStoryCatgDtlSeq(saveMap);

                    for( Map<String, Object> data2 : savePnbStoryCatgPrdDtlMapList ) {
                        Map<String, Object> saveMap2 = CommonUtil.toCamelCaseMap(data2);

                        String sPnbStoryCatgSeq2 = StringUtil.getString(saveMap2.get("pnbCatgSeq"));

                        if (sPnbStoryCatgSeq2.equals(sPnbStoryCatgSeq)) {
                        	saveMap2.put("pnbThmSeq", sPnbThmSeq);
                            saveMap2.put("pnbSeq", sPnbSeq);
                            saveMap2.put("pnbCatgSeq", sPnbStoryCatgSeqNew);
                            saveMap2.put("regpsnId", sRegpsnId);
                            saveMap2.put("updpsnId", sUpdpsnId);

                        	// PNB스토리 카테고리 상품 정보 정보 등록
                            rtn = pnbStoryInfoDao.insertPnbStoryCatgPrdDtl(saveMap2);
                            msg = "PNB스토리 카테고리 상품 정보 등록";
                        }
                    }

                    saveMap.put("pnbCatgSeq", sPnbStoryCatgSeqNew);
                	
                	// PNB스토리 카테고리 정보 등록
                    rtn = pnbStoryInfoDao.insertPnbStoryCatgDtl(saveMap);
                    msg = "PNB스토리 카테고리 정보 등록";
            	} else if( saveType == 2 ) { // 수정
                	// PNB스토리 카테고리 정보 수정
                    rtn = pnbStoryInfoDao.updatePnbStoryCatgDtl(saveMap);
                    msg = "PNB스토리 카테고리 정보 수정";
                }
            }

            // PNB스토리 상품 정보 등록/수정.
            for( Map<String, Object> data : savePnbStoryCatgPrdDtlMapList ) {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                saveMap.put("pnbThmSeq", sPnbThmSeq);
                saveMap.put("pnbSeq", sPnbSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);

                if( saveType == 1) { // 등록
                    String sPnbStoryCatgSeq = StringUtil.getString(saveMap.get("pnbCatgSeq"));
                    
                    if (!"C".equals(sPnbStoryCatgSeq.substring(0, 1))) {
                    	// PNB스토리 메인 노출 상품 정보 등록
                        rtn = pnbStoryInfoDao.insertPnbStoryCatgPrdDtl(saveMap);
                        msg = "PNB스토리 상품 정보 등록";  
                    }
            	} else if( saveType == 2 ) {
                	// 수정
                }
            }

            if( rtn < 0 ) {
            	throw new MessageException(-100, msg + " 실패");
            }
		} catch ( MessageException e ) {
            logger.info("result==>" + e.getCode());
            logger.info("result==>" + e.getMessage());

            // 에러코드 반환시만 처리하자
            if( e.getCode() == -100 ) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
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
	 * <pre>
	 * 1. MethodName : selectPnbStoryCatgDtlList
	 * 2. ClassName : PnbStoryInfoServiceImpl
	 * 3. Comment : PNB스토리 카테고리 상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public List<Map<String,Object>> selectPnbStoryCatgDtlList(Map<String, Object> searchMap) throws Exception {
		return pnbStoryInfoDao.selectPnbStoryCatgDtlList(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPnbStoryCatgPrdDtlList
	 * 2. ClassName : PnbStoryInfoServiceImpl
	 * 3. Comment : PNB스토리 상품 상세
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public List<Map<String,Object>> selectPnbStoryCatgPrdDtlList(Map<String, Object> searchMap) throws Exception {
		searchMap.put("pnbCatgSeq", "");
    	
		return pnbStoryInfoDao.selectPnbStoryCatgPrdDtlList(searchMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : deletePnbStoryInfo
	 * 2. ClassName : PnbStoryInfoServiceImpl
	 * 3. Comment : PNB스토리 삭제
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2022.03.30
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public NexacroResult deletePnbStoryInfo(Map<String, Object> searchMap) throws Exception {	
        NexacroResult result = new NexacroResult();

        try {
            int rtn = 0;
            String msg = "";

        	// PNB스토리 정보 삭제
            rtn = pnbStoryInfoDao.deletePnbStoryInfo(searchMap);
            
            // PNB스토리 카테고리 정보 삭제 (전체) - pnbCatgSeq는 NULL
            pnbStoryInfoDao.deletePnbStoryCatgDtl(searchMap);
            
        	// PNB스토리 카테고리 상품 정보 삭제 - prdId는 NULL
            pnbStoryInfoDao.deletePnbStoryCatgPrdDtl(searchMap);
            
            msg = "PNB스토리 정보 삭제"; 

            if( rtn < 0 ) {
            	throw new MessageException(-100, msg + " 실패");
            }
		} catch ( MessageException e ) {
            logger.info("result==>" + e.getCode());
            logger.info("result==>" + e.getMessage());

            // 에러코드 반환시만 처리하자
            if( e.getCode() == -100 ) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
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
	 * <pre>
	 * 1. MethodName : selectExcelPnbStoryList
	 * 2. ClassName : PnbStoryInfoServiceImpl
	 * 3. Comment : PNB스토리 엑셀 다운 목록 조회
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public NexacroResult selectExcelPnbStoryList(Map<String, Object> paramInfo) throws Exception {	
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
		Map<String, Object> paramMap = CommonUtil.toCamelCaseMap(paramInfo);
		
		List<Map<String,Object>> list = new ArrayList<>();

		list = pnbStoryInfoDao.selectExcelPnbStoryList(paramMap);

		//리턴값 set
		result.addDataSet("ds_output1", list);
		
		return result;
	}
}
