/*------------------------------------------------------------------------------
 * NAME : PubPrdSalsDsgnSalsprcMngServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.28  newwhite7
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.PubPrdSalsDsgnSalsprcMngDao;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.bo.rd.service.PubPrdSalsDsgnSalsprcMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   PubPrdSalsDsgnSalsprcMngServiceImpl
 * @@desc   공용상품영업지정판매가관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.05.09			       최초작성
 */
@Service("pubPrdSalsDsgnSalsprcMngService")
public class PubPrdSalsDsgnSalsprcMngServiceImpl implements PubPrdSalsDsgnSalsprcMngService {

    @Resource(name = "pubPrdSalsDsgnSalsprcMngDao")
    private PubPrdSalsDsgnSalsprcMngDao pubPrdSalsDsgnSalsprcMngDao;
    
    @Resource(name = "fileUploadDowloadService")
    private FileUploadDowloadService fileUploadDowloadService;

    /**
     * 공용상품영업지정판매가관리 리스트 조회(selectPubPrdSalsDsgnSalsprcMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPubPrdSalsDsgnSalsprcMng(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int totalCount    = pubPrdSalsDsgnSalsprcMngDao.selectPubPrdSalsDsgnSalsprcMngCount(searchMap);
        List<Map> records = pubPrdSalsDsgnSalsprcMngDao.selectPubPrdSalsDsgnSalsprcMng(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }

    /**
     * 공용상품영업지정판매가관리 상세 조회(selectPubPrdSalsDsgnSalsprcMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult selectPubPrdSalsDsgnSalsprcMngDtl(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		List<Map> records = pubPrdSalsDsgnSalsprcMngDao.selectPubPrdSalsDsgnSalsprcMngDtl(searchMap);
		List<Map> records1 = null;
		List<Map> records2 = pubPrdSalsDsgnSalsprcMngDao.selectPubPrdSalsDsgnSalsprcMngHst(searchMap);
		if(records.get(0).get("SALS_SALSPRC_ATFL_ID") != null && "".equals(records.get(0).get("SALS_SALSPRC_ATFL_ID").toString()) == false)
		{
        	searchMap.put("DOC_REG_ID", CommUtil.nvl(records.get(0).get("SALS_SALSPRC_ATFL_ID")).toString());

	        // 첨부파일내역 조회
	        records1 = pubPrdSalsDsgnSalsprcMngDao.selectAttcFileDtlsInq(searchMap);
		}
		
		result.addDataSet("ds_master"      , records);
		result.addDataSet("ds_saveFileList", records1);
		result.addDataSet("ds_salsDsgnSalsprcHst", records2);
		
		return result;
	}


	/**
	 * 공용상품영업지정판매가관리 등록
	 *
	 * @param saveMap
	 * @param userInfo
	 * @param fileMap
	 * @param contextRealPath
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult insertPubPrdSalsDsgnSalsprcMng(
		List<Map<String, Object>> saveMap
		, Map<String, Object> userInfo
		, List<Map<String, Object>> fileMap
		, String contextRealPath
	) throws Exception {
		NexacroResult result = new NexacroResult();

		int iCnt = 0;
		int rowType;
		String recordPKeyValue = "";

		try {
			if (saveMap.size() > 0) {
				for (Map<String, Object> saveData : saveMap) {
					rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));

					if (rowType == DataSet.ROW_TYPE_INSERTED) {
						/*int dupList = pubPrdSalsDsgnSalsprcMngDao.selectPubPrdSalsDsgnSalsprcMngDupl(saveData);
						if (dupList > 0) {
							throw new MessageException(-100, "이미 등록되어있는 공용상품정보 입니다.");
						}*/
						saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
						String strDt = StringUtil.getString(saveData.get("SALS_DSGN_SALSPRC_STR_DTM"));
						String endDt = StringUtil.getString(saveData.get("SALS_DSGN_SALSPRC_END_DTM"));

						if (strDt.length() > 14) {
							saveData.put("SALS_DSGN_SALSPRC_STR_DTM", strDt.substring(0, 14));
						}
						if (endDt.length() > 14) {
							saveData.put("SALS_DSGN_SALSPRC_END_DTM", endDt.substring(0, 14));
						}

						// SSP-3487 : 사업장 ID 유효성 체크
						if (StringUtil.getString(saveData.get("BZPLC_ID")).length() > 10) {
							throw new MessageException(-100, "사업장ID는 10자리 입니다. 사업장ID 확인해 주세요.");
						}

//						iCnt += pubPrdSalsDsgnSalsprcMngDao.insertPubPrdSalsDsgnSalsprcMngHst(saveData);
						pubPrdSalsDsgnSalsprcMngDao.insertPubPrdSalsDsgnSalsprcMngHst(saveData);
					}
					recordPKeyValue = StringUtil.getString(saveData.get("PRD_VIEW_ID"));
				}
			}

			// 이미지 & 첨부파일 로직 처리
			if (fileMap.size() > 0) {
				// 이미지&첨부파일 삭제&수정 함수 호출
				fileUploadDowloadService.saveMultiFileDelUpdate(fileMap, contextRealPath);
			}
		} catch (MessageException e) {
			if (e.getCode() == -100) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				throw e;
			}
		}

		result.addVariable("strKeyValue", recordPKeyValue);

		return result;
	}


	/**
     * 공용상품영업지정판매가관리 수정(updatePubPrdSalsDsgnSalsprcMng)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult updatePubPrdSalsDsgnSalsprcMng(List<Map<String, Object>> saveMap, Map<String, Object> userInfo,
			List<Map<String, Object>> fileMap, String contextRealPath) throws Exception {
		NexacroResult result = new NexacroResult();

        int iCnt            = 0;
        int rowType;
        String recordPKeyValue = "";
        try {
	        if(saveMap.size() > 0)
	        {
	             for (int i=0; i < saveMap.size() ; i++)
	             {
	                  Map<String,Object> saveData = saveMap.get(i);
	
	                  rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));
	
	                  if (rowType == DataSet.ROW_TYPE_UPDATED)
	                  {
	                	  saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
	                	  String strDt = StringUtil.getString(saveData.get("SALS_DSGN_SALSPRC_STR_DTM"));
	                	  String endDt = StringUtil.getString(saveData.get("SALS_DSGN_SALSPRC_END_DTM"));
	                	  String oldStrDt = StringUtil.getString(saveData.get("OLD_SALS_DSGN_SALSPRC_STR_DTM"));
	                	  String oldEndDt = StringUtil.getString(saveData.get("OLD_SALS_DSGN_SALSPRC_END_DTM"));
	                	  boolean chgYn = false;
	                	  if ( !strDt.equals(oldStrDt) ) {
	                		  chgYn = true;
	                	  }
	                	  if ( !endDt.equals(oldEndDt) ) {
	                		  chgYn = true;
	                	  }
	                	  
            	  		  if ( strDt.length() > 14 ) {
            	  			saveData.put("SALS_DSGN_SALSPRC_STR_DTM", strDt.substring(0,14)); 
	                	  }
            	  		  if ( endDt.length() > 14 ) {
            	  			saveData.put("SALS_DSGN_SALSPRC_END_DTM", endDt.substring(0,14));
            	  		  }
            	  		  //일자가 변경 되었을경우에만 처리
            	  		  if ( chgYn ) {
		                	  // 종료일자가 9999.12.31 23:59:59인경우 미래일자 삭제됨  
		                	  pubPrdSalsDsgnSalsprcMngDao.deletePubPrdSalsDsgnSalsprcMngHst(saveData);
		                	  // 일자 등록 전 히스토리수정
		                	  pubPrdSalsDsgnSalsprcMngDao.updatePubPrdSalsDsgnSalsprcMngHst(saveData);
            	  		  }
	                	  
	                      //iCnt += pubPrdSalsDsgnSalsprcMngDao.updatePubPrdSalsDsgnSalsprcMng(saveData);
	                      if ( !chgYn ) {
	                    	  pubPrdSalsDsgnSalsprcMngDao.updatePubPrdSalsDsgnSalsprcMngHst2(saveData);
	                      }
	                      
	                      if ( chgYn) {
	                    	  //일자 변경 시 이력 생성
	                    	  pubPrdSalsDsgnSalsprcMngDao.insertPubPrdSalsDsgnSalsprcMngHst(saveData);
	                      }
	                  
	                  }
	                  recordPKeyValue = StringUtil.getString(saveData.get("PRD_VIEW_ID"));
	              }
	        }
	        
	        // 이미지 & 첨부파일 로직 처리
	        if(fileMap.size() > 0)
	        {
	        	// 이미지&첨부파일 삭제&수정 함수 호출
	        	fileUploadDowloadService.saveMultiFileDelUpdate(fileMap, contextRealPath);
	        }
	        
        }catch(MessageException e) {
			if( e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
	            result.setErrorCode(e.getCode());
	            result.setErrorMsg(e.getMessage());
	            return result;
	        } else {
	            throw e;
	        }
		}
        result.addVariable("strKeyValue",recordPKeyValue);
        return result;
	}

	/**
     * 공용상품영업지정판매가관리 영업당담자 여부 조회(selectSalsChrpsnYn)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult selectSalsChrpsnYn(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

        List<Map> records = pubPrdSalsDsgnSalsprcMngDao.selectSalsChrpsnYn(searchMap);

        result.addDataSet("ds_salsChrpsnYn",  records);
        return result;
	}

	/**
     * 공용상품영업지정판매가관리 상품정보 조회(selectPubPrdSalsDsgnSalsprcMngPrdDtl)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult selectPubPrdSalsDsgnSalsprcMngPrdDtl(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		List<Map> records = pubPrdSalsDsgnSalsprcMngDao.selectPubPrdSalsDsgnSalsprcMngPrdDtl(searchMap);
		result.addDataSet("ds_detail"      , records);
		
		return result;
	}

	@Override
	public NexacroResult selectPubPrdSalsDsgnSalsprcMngPrdSaveYn(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		int i = pubPrdSalsDsgnSalsprcMngDao.selectPubPrdSalsDsgnSalsprcMngDupl(searchMap);
		if ( i > 0 ) {
			List<Map> records = pubPrdSalsDsgnSalsprcMngDao.selectPubPrdSalsDsgnSalsprcMngDtl(searchMap);
			List<Map> records1 = null;
			List<Map> records2 = pubPrdSalsDsgnSalsprcMngDao.selectPubPrdSalsDsgnSalsprcMngHst(searchMap);
			if(records.get(0).get("SALS_SALSPRC_ATFL_ID") != null && "".equals(records.get(0).get("SALS_SALSPRC_ATFL_ID").toString()) == false)
			{
	        	searchMap.put("DOC_REG_ID", CommUtil.nvl(records.get(0).get("SALS_SALSPRC_ATFL_ID")).toString());

		        // 첨부파일내역 조회
		        records1 = pubPrdSalsDsgnSalsprcMngDao.selectAttcFileDtlsInq(searchMap);
			}
			
			result.addDataSet("ds_master"      , records);
			result.addDataSet("ds_saveFileList", records1);
			result.addDataSet("ds_salsDsgnSalsprcHst", records2);
		} else {
			List<Map> records = pubPrdSalsDsgnSalsprcMngDao.selectPubPrdSalsDsgnSalsprcMngPrdDtl(searchMap);
			result.addDataSet("ds_detail"      , records);
		}
		
		return result;
	}

    

}