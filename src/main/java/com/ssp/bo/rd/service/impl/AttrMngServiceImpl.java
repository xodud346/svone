/*------------------------------------------------------------------------------
 * NAME : AttrMngServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.AttrMngDao;
import com.ssp.bo.rd.service.AttrMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   AttrMngServiceImpl
 * @@desc   속성관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성
 */
@Service("attrMngService")
public class AttrMngServiceImpl implements AttrMngService {

    @Resource(name = "attrMngDao")
    private AttrMngDao attrMngDao;

    /**
     * 속성관리 리스트 조회(selectAttrMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectAttrMng(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int totalCount    = attrMngDao.selectAttrMngTotCount(searchMap);
        List<Map> records = attrMngDao.selectAttrMng(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }
    
    
    /**
     * 상품속성정보 리스트 조회(selectAttrMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectAttrMngDtl(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

       
        List<Map> records = attrMngDao.selectAttrMngDtl(searchMap);
        result.addDataSet("ds_master",  records);
      

        return result;
    }

    
    /**
     * 속성관리 저장(saveAttrMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult saveAttrMng(List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception {

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
	
	                  if (rowType == DataSet.ROW_TYPE_INSERTED)
	                  {
	                      List <Map> recordKeyValue = attrMngDao.selectAttrMngPKey(saveData);
	
	                      Map<String, Object> mapKeyValue = (Map<String, Object>)recordKeyValue.get(0);
	                      
	                      saveData.put("PRD_ATTR_CD", mapKeyValue.get("KEY_CODE").toString());
	                      saveData.put("REGPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
	                      saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
	
	                      int dupList = attrMngDao.selectAttrMngCount(saveData);
	
	                      if (dupList > 0)
	                      {
	                            throw new MessageException(-200, "");         // 속성관리명이 중복되었습니다.
	                      }
	
	                      iCnt += attrMngDao.insertAttrMng(saveData);
	                  
	                  }
	                  recordPKeyValue = StringUtil.getString(saveData.get("PRD_ATTR_CD"));
	              }
	        }
        }catch(MessageException e) {
			if( e.getCode() == -200 ) {
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
     * 속성관리 수정(updateAttrMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult updateAttrMng(Map<String, Object> searchMap, List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception {
  
        NexacroResult result = new NexacroResult();

        int uCnt            = 0;
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
	                	  if(!saveData.get("PRNM").toString().equals(saveData.get("ORG_PRNM").toString()))
	                	  {	  
		                	  int dupList = attrMngDao.selectAttrMngCount(searchMap);
		                		
		                      if (dupList > 0)
		                      {
		                    	  throw new MessageException(-200, "");   //속성관리명이 중복되었습니다.
		                      }
	                	  }
	                      saveData.put("UPDPSN_ID", StringUtil.getString(userInfo.get("EMP_NO")));
	
	                      uCnt += attrMngDao.updateAttrMng(saveData);
	                  }
	                  recordPKeyValue = StringUtil.getString(saveData.get("PRD_ATTR_CD"));
	              }
	        }
        }catch(MessageException e) {
			if( e.getCode() == -200 ) {
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

}