/*------------------------------------------------------------------------------
 * NAME : ChmMtlInfoMngServiceImpl.java
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

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.ChmMtlInfoMngDao;
import com.ssp.bo.rd.service.ChmMtlInfoMngService;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   ChmMtlInfoMngServiceImpl
 * @@desc   화학물질정보관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성
 */
@Service("chmMtlInfoMngService")
public class ChmMtlInfoMngServiceImpl implements ChmMtlInfoMngService {

    @Resource(name = "chmMtlInfoMngDao")
    private ChmMtlInfoMngDao chmMtlInfoMngDao;

    @Resource(name = "fileUploadDowloadService")
    private FileUploadDowloadService fileUploadDowloadService;

    /**
     * 화학물질정보관리 리스트 조회(selectChmMtlInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectChmMtlInfoMng(Map<String, Object> searchMap, HttpSession session) throws Exception {

        NexacroResult result = new NexacroResult();
        searchMap.put("SES_ID", session.getId());
        String searchType = searchMap.get("INQ_BSS") + "";

        int totalCount    = 0;
        int casNoCnt      = 0;
        
        List<Map> records = null;
        if ( "PRD_ID".equals(searchType)) {
        	casNoCnt   = chmMtlInfoMngDao.selectChmMtlInfoMngCasNoCount(searchMap); 

        	StringBuffer strBuilder1 = new StringBuffer();
        	StringBuffer strBuilder2 = new StringBuffer();

        	String comma = " ";

        	if(casNoCnt > 30)
        	{
        		casNoCnt = 30;
        	}

        	for(int idx=1; idx<=casNoCnt; idx++)
        	{
        		if(idx > 1)
        		{
        			comma = "\n                               , ";
        		}
        		strBuilder1.append(comma + idx + " AS C"+ idx);

        		if(idx == 1)
        		{
        			strBuilder2.append(", C" +idx +"_CAS_NO               AS C" + idx +"_CAS_NO                /*" + idx +" CAS NO*/\n");	
        		}
        		else
        		{
        			strBuilder2.append("                  , C" +idx +"_CAS_NO               AS C" + idx +"_CAS_NO                /*" + idx +" CAS NO*/\n");
        		}
        		strBuilder2.append("                  , C" +idx +"_CHM_MTL_NM           AS C" + idx +"_CHM_MTL_NM            /*" + idx +" 화학물질명*/\n");
        		strBuilder2.append("                  , C" +idx +"_MIN_CONTENT          AS C" + idx +"_MIN_CONTENT           /*" + idx +" 함량From*/\n");

        		if(idx < casNoCnt)
        		{
        			strBuilder2.append("                  , C" +idx +"_MAX_CONTENT          AS C" + idx +"_MAX_CONTENT           /*" + idx +" 함량To*/\n");
        		}
        		else
        		{
        			strBuilder2.append("                  , C" +idx +"_MAX_CONTENT          AS C" + idx +"_MAX_CONTENT           /*" + idx +" 함량To*/");
        		}
        	}

        	searchMap.put("CAS_NO_LIST", strBuilder1.toString());
        	searchMap.put("LIST_CAS_NO", strBuilder2.toString());

        	totalCount = chmMtlInfoMngDao.selectChmMtlInfoMngCount(searchMap);
        	records    = chmMtlInfoMngDao.selectChmMtlInfoMng(searchMap);
        } else {
        	totalCount = chmMtlInfoMngDao.selectChmMtlInfoMngCasnoCount(searchMap);
        	records    = chmMtlInfoMngDao.selectChmMtlInfoMngCasno(searchMap);
        }

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }

    /**
     * 화학물질정보등록수정 리스트 조회(selectChmMtlInfoRegUpdListInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectChmMtlInfoRegUpdListInq(Map<String, Object> searchMap, Map<String, Object> userInfo) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records1 = null;
        List<Map> records2 = null;
        List<Map> records3 = null;
        List<Map> records4 = null;

        // 화학물질상품정보 리스트 조회
    	records1 = chmMtlInfoMngDao.selectChmMtlPrdInfoInq(searchMap);

    	// 화학물질정보 리스트 조회
    	records2 = chmMtlInfoMngDao.selectChmMtlInfoInq(searchMap);

    	// 화학물질정보추가 리스트 조회
    	records3 = chmMtlInfoMngDao.selectChmMtlAddInfoInq(searchMap);

        if(records1.get(0).get("PRD_DOC_REG_ID") != null && "".equals(records1.get(0).get("PRD_DOC_REG_ID").toString()) == false)
		{
        	searchMap.put("DOC_REG_ID", CommUtil.nvl(records1.get(0).get("PRD_DOC_REG_ID")).toString());

	        // 첨부파일내역 조회
	        records4 = chmMtlInfoMngDao.selectAttcFileDtlsInq(searchMap);
		}

        result.addDataSet("ds_master",       records1);		// 화학물질상품정보 리스트 조회
        result.addDataSet("ds_chmMtlList",   records2);		// 화학물질정보 리스트 조회
        result.addDataSet("ds_chmMtlAddList",records3);		// 화학물질정보추가 리스트 조회
        result.addDataSet("ds_saveFileList", records4);		// 첨부파일 리스트 조회

        return result;
    }

    /**
     * 화학물질정보추가정보 리스트 조회(selectChmMtlInfoAddInfoListInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectChmMtlInfoAddInfoListInq(Map<String, Object> searchMap, Map<String, Object> userInfo) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records1 = null;
        List<Map> records2 = null;

    	// 화학물질정보 리스트 조회
    	records1 = chmMtlInfoMngDao.selectChmMtlInfoInq(searchMap);

    	// 화학물질정보추가 리스트 조회
    	records2 = chmMtlInfoMngDao.selectChmMtlAddInfoInq(searchMap);

        result.addDataSet("ds_chmMtlList",   records1);		// 화학물질정보 리스트 조회
        result.addDataSet("ds_chmMtlAddList",records2);		// 화학물질정보추가 리스트 조회

        return result;
    }

    /**
     * 규제정보확인여부 리스트 조회(selectRegulationInfoCnfYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectRegulationInfoCnfYn(Map<String, Object> searchMap
    		                                      , List<Map<String, Object>> saveMap
    		                                      , Map<String, Object> userInfo) throws Exception {

        NexacroResult result = new NexacroResult();

        String strCasNo = "Y";

        List<Map> records1 = null;
        List<Map> records2 = null;
        List<Map> records3 = null;

    	// 규제정보확인여부 리스트 조회
    	records1 = chmMtlInfoMngDao.selectRegulationInfoCnfYn(saveMap);

    	for(int idx=0; idx<records1.size(); idx++)
    	{
    		Map<String, Object> dataMap = records1.get(idx);

    		if("N".equals(dataMap.get("CAS_YN").toString()))
    		{
    			strCasNo = dataMap.get("CAS_NO").toString();
    			break;
    		}
    	}

    	if("Y".equals(strCasNo) == false)
    	{
    		result.addVariable("lv_casNo",strCasNo);
    	}
    	else
    	{
    		// 화학물질검증정보 리스트 조회
    		records2 = chmMtlInfoMngDao.selectChmMtlVldtInfoListInq(saveMap);

    		for(int idx=0; idx<records2.size(); idx++)
    		{
    			records2.get(idx).put("CO_CD", searchMap.get("CO_CD").toString());
    			records2.get(idx).put("PRD_ID",searchMap.get("PRD_ID").toString());
    		}

    		result.addDataSet("ds_chmMtlList",records2);		// 화학물질검증정보 리스트 조회

    		// 화학물질검증추가정보 리스트 조회
    		records3 = chmMtlInfoMngDao.selectChmMtlVldtAddInfoListInq(saveMap);

    		for(int idx=0; idx<records3.size(); idx++)
    		{
    			records3.get(idx).put("CO_CD", searchMap.get("CO_CD").toString());
    			records3.get(idx).put("PRD_ID",searchMap.get("PRD_ID").toString());
    		}

    		result.addDataSet("ds_chmMtlAddList",records3);		// 화학물질검증추가정보 리스트 조회
    		result.addVariable("lv_casNo",       strCasNo);
    	}

        return result;
    }

    /**
     * 화학물질정보확인 저장(saveChmMtlInfoCnf)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult saveChmMtlInfoCnf(Map<String, Object> searchMap
    		                              , Map<String, Object> mainMap
    		                              , List<Map<String, Object>> saveMap
    		                              , List<Map<String, Object>> saveFileMap
    		                              , Map<String, Object> userInfo
    		                              , String contextRealPath) throws Exception {

	    NexacroResult result = new NexacroResult();

	    int rowType;

	    List<Map> records1 = null;
	    List<Map> records2 = null;

	    try
	    {
			if(saveMap.size() > 0)
	        {
	             LocalDate nowDate = LocalDate.now();
	             DateTimeFormatter formatter1 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
	             String formatedNow = nowDate.format(formatter1);

	             LocalTime nowTime = LocalTime.now();
	             DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("HH:mm:ss");
	             String formatedTime = nowTime.format(formatter2);

	             String dateDtm = formatedNow + " " + formatedTime;

	             for(int i=0; i<saveMap.size(); i++)
	             {
	                  Map<String,Object> dataMap = saveMap.get(i);

	                  rowType = Integer.parseInt(String.valueOf(dataMap.get(DataSetRowTypeAccessor.NAME)));

	                  dataMap.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
	                  dataMap.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));

	                  dataMap.put("REG_DTM",dateDtm);
	                  dataMap.put("UPD_DTM",dateDtm);

	                  if(rowType == DataSet.ROW_TYPE_INSERTED)
	                  {
	                	  // 화학물질정보확인 저장
	                      chmMtlInfoMngDao.insertChmMtlInfoCnf(dataMap);
	                  }
	                  else if(rowType == DataSet.ROW_TYPE_UPDATED)
	                  {
	                	  // 화학물질정보확인 수정
	                	  chmMtlInfoMngDao.updateChmMtlInfoCnf(dataMap);
	                  }
	                  else if(rowType == DataSet.ROW_TYPE_DELETED)
	                  {
	                	  // 화학물질정보 삭제
	                      chmMtlInfoMngDao.deleteChmMtlInfoDel(dataMap);
	                  }
	             }

	 	    	 Map<String, Object> procMap = new HashMap<>();
		    	 procMap.put("I_CO_CD", mainMap.get("CO_CD").toString());
		    	 procMap.put("I_PRD_ID",mainMap.get("PRD_ID").toString());

		    	 // 화학물질처리 저장
		    	 chmMtlInfoMngDao.updateSpRdChmMtlsProc(procMap);
	        }

	        if(saveFileMap.size() > 0)
	        {
	        	// 이미지&첨부파일 삭제&수정 함수 호출
	        	fileUploadDowloadService.saveMultiFileDelUpdate(saveFileMap, contextRealPath);
	        }

	        if(mainMap.size() > 0)
	        {
	        	mainMap.put("UPDPSN_ID",StringUtil.getString(userInfo.get("EMP_NO")));

	        	// MRO상품정보 수정
	        	chmMtlInfoMngDao.updateMroPrdInfoUpd(mainMap);
	        }

	    	// 화학물질정보 리스트 조회
	    	records1 = chmMtlInfoMngDao.selectChmMtlInfoInq(searchMap);

	    	// 화학물질정보추가 리스트 조회
	    	records2 = chmMtlInfoMngDao.selectChmMtlAddInfoInq(searchMap);

	        result.addDataSet("ds_chmMtlList",   records1);		// 화학물질정보 리스트 조회
	        result.addDataSet("ds_chmMtlAddList",records2);		// 화학물질정보추가 리스트 조회
	    }
	    catch(MessageException e)
	    {
	        if(e.getCode() == -100)
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
     * 저장/수정 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectCodeChkYn(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = chmMtlInfoMngDao.selectCodeChkYn(searchMap);

        result.addDataSet("ds_codeChkYn",  records);

        return result;
    }
}