/*------------------------------------------------------------------------------
 * NAME : ContCustDcrtMngServiceImpl.java
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
import com.ssp.bo.rd.dao.ContCustDcrtMngDao;
import com.ssp.bo.rd.service.ContCustDcrtMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   ContCustDcrtMngServiceImpl
 * @@desc   계약고객할인율관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성
 */
@Service("contCustDcrtMngService")
public class ContCustDcrtMngServiceImpl implements ContCustDcrtMngService {

    @Resource(name = "contCustDcrtMngDao")
    private ContCustDcrtMngDao contCustDcrtMngDao;

    /**
     * 계약고객할인율관리 리스트 조회(selectContCustDcrtMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectContCustDcrtMng(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int totalCount    = contCustDcrtMngDao.selectContCustDcrtMngCount(searchMap);
        List<Map> records = contCustDcrtMngDao.selectContCustDcrtMng(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }

    /**
     * 계약고객할인율관리 등록/수정(saveContCustDcrtMng)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult saveContCustDcrtMng(List<Map<String, Object>> saveMap, Map<String, Object> bzplcMap,
			Map<String, Object> userInfo) throws Exception {
		NexacroResult result = new NexacroResult();

        int iCnt            = 0;
        int rowType;
        String recordPKeyValue = "";
        String bzplcId = ""; 
        try {
	        if(saveMap.size() > 0)
	        {
	             for (int i=0; i < saveMap.size() ; i++)
	             {
	                  Map<String,Object> saveData = saveMap.get(i);
	                  rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));
	                  String chk = StringUtil.getString(saveData.get("CHK"));
	                  
	                  if (rowType == DataSet.ROW_TYPE_INSERTED )
	                  {
	                	  bzplcId = StringUtil.getString(bzplcMap.get("BZPLC_ID"));
	                	  saveData.put("BZPLC_ID", bzplcId);
	                	  int dupList = contCustDcrtMngDao.selectContCustDcrtMngDupl(saveData);
	                      if (dupList > 0)
	                      {
	                    	  String errMsg = StringUtil.getString(saveData.get("RND_PRFRT_SPR_NM"));
	                          throw new MessageException(-100, "이미 등록된 " + errMsg + " 정보 입니다");
	                      }
	                	  saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
	                      iCnt += contCustDcrtMngDao.saveContCustDcrtMng(saveData);
	                  
	                  } else if ( rowType == DataSet.ROW_TYPE_UPDATED && chk.equals("1") ) {
	                	  saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
	                	  contCustDcrtMngDao.updateContCustDcrtMng(saveData);
	                      iCnt += contCustDcrtMngDao.saveContCustDcrtMng(saveData);
	                  }
	                  String prdClcd = StringUtil.getString(saveData.get("PRD_CLCD"));
	                  String mnfrNo = StringUtil.getString(saveData.get("MNFR_NO"));
	                  String key = prdClcd.equals("") ? mnfrNo : prdClcd;
	                  recordPKeyValue = key;
	              }
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
     * 계약고객할인율관리 영업담당자여부 조회(selectSalsChrpsnYn)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult selectSalsChrpsnYn(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

        List<Map> records = contCustDcrtMngDao.selectSalsChrpsnYn(searchMap);

        result.addDataSet("ds_salsChrpsnYn",  records);
        return result;
	}

	/**
     * 계약고객할인율관리 이력 조회(selectContCustDcrtMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult selectContCustDcrtMngHst(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

        int totalCount    = contCustDcrtMngDao.selectContCustDcrtMngHstCount(searchMap);
        List<Map> records = contCustDcrtMngDao.selectContCustDcrtMngHst(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
	}

    
}