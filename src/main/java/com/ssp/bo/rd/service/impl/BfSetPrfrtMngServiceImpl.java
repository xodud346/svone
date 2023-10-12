/*------------------------------------------------------------------------------
 * NAME : BfSetPrfrtMngServiceImpl.java
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
import com.ssp.bo.rd.dao.BfSetPrfrtMngDao;
import com.ssp.bo.rd.service.BfSetPrfrtMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   BfSetPrfrtMngServiceImpl
 * @@desc   사전설정매익률관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성
 */
@Service("bfSetPrfrtMngService")
public class BfSetPrfrtMngServiceImpl implements BfSetPrfrtMngService {

    @Resource(name = "bfSetPrfrtMngDao")
    private BfSetPrfrtMngDao bfSetPrfrtMngDao;

    /**
     * 사전설정매익률관리 리스트 조회(selectBfSetPrfrtMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectBfSetPrfrtMng(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int totalCount    = bfSetPrfrtMngDao.selectBfSetPrfrtMngCount(searchMap);
        List<Map> records = bfSetPrfrtMngDao.selectBfSetPrfrtMng(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }

    /**
     * 사전설정매익률관리 등록/수정(saveBfSetPrfrtMng)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult saveBfSetPrfrtMng(List<Map<String, Object>> saveMap, Map<String, Object> userInfo)
			throws Exception {
		NexacroResult result = new NexacroResult();

        int iCnt            = 0;
        int iCnt2           = 0;
        int iCnt3           = 0;
        int rowType;
        String recordPKeyValue = "";
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
	                	  int dupList = bfSetPrfrtMngDao.selectBfSetPrfrtMngDupl(saveData);
	                      if (dupList > 0)
	                      {
	                    	  String errMsg = StringUtil.getString(saveData.get("RND_PRFRT_SPR_NM"));
	                          throw new MessageException(-100, "이미 등록된 " + errMsg + " 정보 입니다");
	                      }
	                	  saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
	                      iCnt += bfSetPrfrtMngDao.saveBfSetPrfrtMng(saveData);
	                  
	                  } else if ( rowType == DataSet.ROW_TYPE_UPDATED && chk.equals("1") ) {
	                	  saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
	                	  bfSetPrfrtMngDao.updateBfSetPrfrtMng(saveData);
	                      iCnt += bfSetPrfrtMngDao.insertBfSetPrfrtMng(saveData);
	                  }
	                  iCnt2 = bfSetPrfrtMngDao.selectBfSetPrfrtMngChkCount(saveData);
	                  if ( iCnt2 > 0 ) 
	                  {
	                	  iCnt3 = bfSetPrfrtMngDao.updateBfSetPrfrtMngPrcHst(saveData);
	                	  if ( iCnt3 > 0)
	                	  {
	                		  bfSetPrfrtMngDao.insertBfSetPrfrtMngPrcHst(saveData);
	                	  }
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
     * 구매담당자 여부 조회(selectPurgChrpsnYn)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult selectPurgChrpsnYn(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

        List<Map> records = bfSetPrfrtMngDao.selectPurgChrpsnYn(searchMap);

        result.addDataSet("ds_purgChrpsnYn",  records);
        return result;
	}

	/**
     * 사전설정매익률 이력조회(selectBfSetPrfrtMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult selectBfSetPrfrtMngHst(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

        int totalCount    = bfSetPrfrtMngDao.selectBfSetPrfrtMngHstCount(searchMap);
        List<Map> records = bfSetPrfrtMngDao.selectBfSetPrfrtMngHst(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
	}

   
}