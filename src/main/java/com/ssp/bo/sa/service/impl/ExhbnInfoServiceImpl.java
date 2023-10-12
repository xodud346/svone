package com.ssp.bo.sa.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.service.impl.CoComCdMngServiceImpl;
import com.ssp.bo.sa.dao.ExhbnInfoDao;
import com.ssp.bo.sa.service.ExhbnInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 기획전 Serviceimpl
 * @package com.ssp.bo.sample.service.impl
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.04.
 * @version 1.0
 * @see ExhbnInfoServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.04.	박진원		최초작성
 */
@Service("ExhbnInfoService")
public class ExhbnInfoServiceImpl implements ExhbnInfoService
{
	@Resource(name = "ExhbnInfoDao")
	private ExhbnInfoDao ExhbnInfoDao;

    private final Logger logger = LoggerFactory.getLogger(CoComCdMngServiceImpl.class);

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnInfoList
	 * 2. ClassName : ExhbnInfoServiceImpl
	 * 3. Comment : 기획전 목록 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public List<Map<String,Object>> selectExhbnInfoList(Map<String, Object> searchMap) throws Exception
	{
		return ExhbnInfoDao.selectExhbnInfoList(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnInfoListCount
	 * 2. ClassName : ExhbnInfoServiceImpl
	 * 3. Comment : 기획전 목록 건수 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public int selectExhbnInfoListCount(Map<String, Object> searchMap) throws Exception
	{
		return ExhbnInfoDao.selectExhbnInfoListCount(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : saveExhbnInfoOrder
	 * 2. ClassName : ExhbnInfoServiceImpl
	 * 3. Comment : 기획전 순서 저장
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param saveExhbnInfoMap, saveExhbnInfoMapList
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public NexacroResult saveExhbnInfoOrder(Map<String, Object> saveExhbnInfoMap, List<Map<String, Object>> saveExhbnInfoMapList) throws Exception
	{	
        NexacroResult result = new NexacroResult();

        try
        {
            int rtn = 0;
            String msg = "";

            String sRegpsnId = StringUtil.getString(saveExhbnInfoMap.get("regpsnId"));
            String sUpdpsnId = StringUtil.getString(saveExhbnInfoMap.get("updpsnId"));
    		
            // 전시순서 수정
            for( Map<String, Object> data : saveExhbnInfoMapList )
            {
                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);
            	
            	// 기획전 전시순서 수정
                rtn = ExhbnInfoDao.updateExhbnInfoOrder(saveMap);
                msg = "기획전 전시순서 수정";
            }

            if( rtn < 0 )
            {
            	throw new MessageException(-100, msg + " 실패");
            }
		}
        catch ( MessageException e )
        {
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

		//return ExhbnInfoDao.selectExhbnInfoListCount(searchMap);
        return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnInfo
	 * 2. ClassName : ExhbnInfoServiceImpl
	 * 3. Comment : 기획전 상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public List<Map<String,Object>> selectExhbnInfo(Map<String, Object> searchMap) throws Exception
	{
		return ExhbnInfoDao.selectExhbnInfo(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnOprUnitList
	 * 2. ClassName : ExhbnInfoServiceImpl
	 * 3. Comment : 기획전 운영단위상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public List<Map<String,Object>> selectExhbnOprUnitList(Map<String, Object> searchMap) throws Exception
	{
		return ExhbnInfoDao.selectExhbnOprUnitList(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnCatgPrdDtlMainList
	 * 2. ClassName : ExhbnInfoServiceImpl
	 * 3. Comment : 기획전 메인 노출 상품
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public List<Map<String,Object>> selectExhbnCatgPrdDtlMainList(Map<String, Object> searchMap) throws Exception
	{
		searchMap.put("exhbnCatgSeq", "0");
    	
		return ExhbnInfoDao.selectExhbnCatgPrdDtlList(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnCatgDtlList
	 * 2. ClassName : ExhbnInfoServiceImpl
	 * 3. Comment : 기획전 기본 상품 카테고리상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public List<Map<String,Object>> selectExhbnCatgDtlList(Map<String, Object> searchMap) throws Exception
	{
		return ExhbnInfoDao.selectExhbnCatgDtlList(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnCatgPrdDtlList
	 * 2. ClassName : ExhbnInfoServiceImpl
	 * 3. Comment : 기획전 기본 상품 상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public List<Map<String,Object>> selectExhbnCatgPrdDtlList(Map<String, Object> searchMap) throws Exception
	{
		searchMap.put("exhbnCatgSeq", "");
    	
		return ExhbnInfoDao.selectExhbnCatgPrdDtlList(searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteExhbnInfo
	 * 2. ClassName : ExhbnInfoServiceImpl
	 * 3. Comment : 기획전 삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public NexacroResult deleteExhbnInfo(Map<String, Object> searchMap) throws Exception
	{	
        NexacroResult result = new NexacroResult();

        try
        {
            int rtn = 0;
            String msg = "";

        	// 기획전 정보 삭제
            rtn = ExhbnInfoDao.deleteExhbnInfo(searchMap);
            msg = "기획전 정보 삭제";   

        	// 기획전 운영단위 정보 삭제 (전체)
            rtn = ExhbnInfoDao.deleteExhbnOprUnitAll(searchMap);
            msg = "기획전 운영단위 정보 삭제 (전체)";   

        	// 기획전 기본 상품 카테고리 정보 삭제 (전체)
            rtn = ExhbnInfoDao.deleteExhbnCatgDtlAll(searchMap);
            msg = "기획전 기본 상품 카테고리 정보 삭제 (전체)";

        	// 기획전 메인 노출 상품/기본 상품 정보 삭제
            rtn = ExhbnInfoDao.deleteExhbnCatgPrdDtlAll(searchMap);
            msg = "기획전 메인 노출 상품/기본 상품 정보 삭제 (전체)";  
            
            if( rtn < 0 )
            {
            	throw new MessageException(-100, msg + " 실패");
            }
		}
        catch ( MessageException e )
        {
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
	
	/**
	 * <pre>
	 * 1. MethodName : saveExhbnInfo
	 * 2. ClassName : ExhbnInfoServiceImpl
	 * 3. Comment : 기획전 등록/수정/삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param saveExhbnInfoMap, saveExhbnOprUnitMapList, saveExhbnCatgPrdDtlMainMapList, saveExhbnCatgDtlMapList, saveExhbnCatgPrdDtlMapList
	 * @return
	 * @throws NexacroException
	 */
	@Override
	public NexacroResult saveExhbnInfo(Map<String, Object> saveExhbnInfoMap, 
			List<Map<String, Object>> saveExhbnOprUnitMapList, 
			List<Map<String, Object>> saveExhbnCatgPrdDtlMainMapList, 
			List<Map<String, Object>> saveExhbnCatgDtlMapList, 
			List<Map<String, Object>> saveExhbnCatgPrdDtlMapList) throws Exception
	{	
        NexacroResult result = new NexacroResult();

        try
        {
            int rtn = 0;
            String msg = "";
    		
            String sExhbnSeq = StringUtil.getString(saveExhbnInfoMap.get("exhbnSeq"));
            String sRegpsnId = StringUtil.getString(saveExhbnInfoMap.get("regpsnId"));
            String sUpdpsnId = StringUtil.getString(saveExhbnInfoMap.get("updpsnId"));

            if ("".equals(sExhbnSeq))
            {	
            	// 기획전 시퀀스 값 조회
            	Map<String,Object> exhbnInfoSeqMap = ExhbnInfoDao.selectExhbnInfoSeq(saveExhbnInfoMap);

                String sExhbnSeqNew = StringUtil.getString(exhbnInfoSeqMap.get("EXHBN_SEQ"));
                
                sExhbnSeq = sExhbnSeqNew;

                saveExhbnInfoMap.put("exhbnSeq", sExhbnSeq);
                saveExhbnInfoMap.put("dispSo", "");
                
            	// 기획전 기본 정보 등록
                rtn = ExhbnInfoDao.insertExhbnInfo(saveExhbnInfoMap);
                msg = "기획전 기본 정보 등록";            	
            }
            else
            {
            	// 기획전 기본 정보 수정
                rtn = ExhbnInfoDao.updateExhbnInfo(saveExhbnInfoMap);
                msg = "기획전 기본 정보 수정";            	
            }

            // 운영단위 삭제
            for( Map<String, Object> data : saveExhbnOprUnitMapList )
            {
            	int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                saveMap.put("exhbnSeq", sExhbnSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);

                if( saveType == 3 )
                {
                	// 삭제

                	// 기획전 운영단위 정보 삭제
                    rtn = ExhbnInfoDao.deleteExhbnOprUnit(saveMap);
                    msg = "기획전 운영단위 정보 삭제";   
                }
            }

            // 운영단위 등록/수정.
            for( Map<String, Object> data : saveExhbnOprUnitMapList )
            {
            	int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                saveMap.put("exhbnSeq", sExhbnSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);

                if( saveType == 1)
                {
                	// 등록

                	// 기획전 운영단위 정보 등록
                    rtn = ExhbnInfoDao.insertExhbnOprUnit(saveMap);
                    msg = "기획전 운영단위 정보 등록";   
            	}
                else if( saveType == 2 )
                {
                	// 수정
                }
            }

            // 메인 노출 상품 삭제
            for( Map<String, Object> data : saveExhbnCatgPrdDtlMainMapList )
            {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                saveMap.put("exhbnSeq", sExhbnSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);

                if( saveType == 3 )
                {
                	// 삭제

                	// 기획전 메인 노출 상품 정보 삭제
                    rtn = ExhbnInfoDao.deleteExhbnCatgPrdDtl(saveMap);
                    msg = "기획전 메인 노출 상품 정보 삭제";  
                }
            }

            // 메인 노출 상품 등록/수정.
            for( Map<String, Object> data : saveExhbnCatgPrdDtlMainMapList )
            {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                saveMap.put("exhbnSeq", sExhbnSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);

                if( saveType == 1)
                {
                	// 등록

                	// 기획전 메인 노출 상품 정보 등록
                    rtn = ExhbnInfoDao.insertExhbnCatgPrdDtl(saveMap);
                    msg = "기획전 메인 노출 상품 정보 등록";  
            	}
                else if( saveType == 2 )
                {
                	// 수정
                }
            }

            // 기본 상품 카테고리 삭제.
            for( Map<String, Object> data : saveExhbnCatgDtlMapList )
            {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
                
                saveMap.put("exhbnSeq", sExhbnSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);
    			
                if( saveType == 3 )
                {
                	// 삭제

                	// 기획전 기본 상품 카테고리 정보 삭제
                    rtn = ExhbnInfoDao.deleteExhbnCatgDtl(saveMap);
                    msg = "기획전 기본 상품 카테고리 정보 삭제";                    
                }
            }

            // 기본 상품 삭제.
            for( Map<String, Object> data : saveExhbnCatgPrdDtlMapList )
            {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
                
                saveMap.put("exhbnSeq", sExhbnSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);
    			
                if( saveType == 3 )
                {
                	// 삭제

                	// 기획전 기본 상품 정보 삭제
                    rtn = ExhbnInfoDao.deleteExhbnCatgPrdDtl(saveMap);
                    msg = "기획전 기본 상품 정보 삭제";                    
                }
            }
            
            // 기본 상품 카테고리 등록/수정.
            for( Map<String, Object> data : saveExhbnCatgDtlMapList )
            {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                String sExhbnCatgSeq = StringUtil.getString(saveMap.get("exhbnCatgSeq"));
                
                //logger.debug("================================================== sExhbnCatgSeq : " + sExhbnCatgSeq + "==================================================");
                
                saveMap.put("exhbnSeq", sExhbnSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);
    			
                if( saveType == 1)
                {
                	// 등록

                	// 기획전 기본 상품 카테고리 시퀀스 값 조회
                	Map<String,Object> ExhbnCatgDtlSeqMap = ExhbnInfoDao.selectExhbnCatgDtlSeq(saveMap);

                    String sExhbnCatgSeqNew = StringUtil.getString(ExhbnCatgDtlSeqMap.get("EXHBN_CATG_SEQ"));

                    for( Map<String, Object> data2 : saveExhbnCatgPrdDtlMapList )
                    {
                        Map<String, Object> saveMap2 = CommonUtil.toCamelCaseMap(data2);

                        String sExhbnCatgSeq2 = StringUtil.getString(saveMap2.get("exhbnCatgSeq"));

                        //logger.debug("================================================== sExhbnCatgSeq2 : " + sExhbnCatgSeq2 + "==================================================");
                        
                        if (sExhbnCatgSeq2.equals(sExhbnCatgSeq))
                        {
                            saveMap2.put("exhbnSeq", sExhbnSeq);
                            saveMap2.put("exhbnCatgSeq", sExhbnCatgSeqNew);
                            saveMap2.put("regpsnId", sRegpsnId);
                            saveMap2.put("updpsnId", sUpdpsnId);

                        	// 기획전 기본 상품 정보 등록
                            rtn = ExhbnInfoDao.insertExhbnCatgPrdDtl(saveMap2);
                            msg = "기획전 기본 상품 정보 등록";
                        }
                    }

                    saveMap.put("exhbnCatgSeq", sExhbnCatgSeqNew);
                	
                	// 기획전 카테고리 정보 등록
                    rtn = ExhbnInfoDao.insertExhbnCatgDtl(saveMap);
                    msg = "기획전 카테고리 정보 등록";
            	}
                else if( saveType == 2 )
                {
                	// 수정

                	// 기획전 카테고리 정보 수정
                    rtn = ExhbnInfoDao.updateExhbnCatgDtl(saveMap);
                    msg = "기획전 카테고리 정보 수정";
                }
            }

            // 기획전 기본 상품 정보 등록/수정.
            for( Map<String, Object> data : saveExhbnCatgPrdDtlMapList )
            {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                saveMap.put("exhbnSeq", sExhbnSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);

                if( saveType == 1)
                {
                	// 등록

                    String sExhbnCatgSeq = StringUtil.getString(saveMap.get("exhbnCatgSeq"));
                    
                    if (!"C".equals(sExhbnCatgSeq.substring(0, 1)))
                    {
                    	// 기획전 메인 노출 상품 정보 등록
                        rtn = ExhbnInfoDao.insertExhbnCatgPrdDtl(saveMap);
                        msg = "기획전 메인 노출 상품 정보 등록";  
                    }
            	}
                else if( saveType == 2 )
                {
                	// 수정
                }
            }

            if( rtn < 0 )
            {
            	throw new MessageException(-100, msg + " 실패");
            }
		}
        catch ( MessageException e )
        {
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

	/** SSP-2111 : 엑셀용 기획전 목록 및 상세 조회 */
	@Override
	public List<Map<String, Object>> selectExhbnInfoDtlForExcel(List<Map<String,Object>> list) throws Exception {
		
		List<Map<String, Object>> exhbnInfoExcel = new ArrayList<Map<String,Object>>();
		
		for(Map<String,Object> map : list) {
			
			Map<String,Object> seqMap = new HashMap<String,Object>();			
			seqMap.put("exhbnSeq", StringUtil.getString(map.get("EXHBN_SEQ")));
			List<Map<String,Object>> exhbnDtl = ExhbnInfoDao.selectExhbnInfoDtlForExcel(seqMap);
			exhbnInfoExcel.addAll(exhbnDtl);
			
		}
		return exhbnInfoExcel;
	}
}
