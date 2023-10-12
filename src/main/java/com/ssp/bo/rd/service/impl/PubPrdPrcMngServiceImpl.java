/*------------------------------------------------------------------------------
 * NAME : PubPrdPrcMngServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.06  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.eclipse.persistence.internal.helper.SimpleDatabaseType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.ibm.icu.text.SimpleDateFormat;
import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.PubPrdPrcMngDao;
import com.ssp.bo.rd.service.PubPrdPrcMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   PubPrdPrcMngServiceImpl
 * @@desc   공용상품가격관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.05.06			       최초작성
 */
@Service("pubPrdPrcMngService")
public class PubPrdPrcMngServiceImpl implements PubPrdPrcMngService {

    @Resource(name = "pubPrdPrcMngDao")
    private PubPrdPrcMngDao pubPrdPrcMngDao;

    /**
     * 공용상품가격관리 리스트 조회(selectPubPrdPrcMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPubPrdPrcMng(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        int totalCount    = pubPrdPrcMngDao.selectPubPrdPrcMngCount(searchMap);
        List<Map> records = pubPrdPrcMngDao.selectPubPrdPrcMng(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }


    /**
     * 공용상품가격관리 상세 조회(selectPubPrdPrcMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult selectPubPrdPrcMngDtl(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

        List<Map> records = pubPrdPrcMngDao.selectPubPrdDispInfo(searchMap);
        List<Map> records1 = pubPrdPrcMngDao.selectPubPrdBasisInfo(searchMap);
        List<Map> records2 = pubPrdPrcMngDao.selectPubPrdPrcInfo(searchMap);
        List<Map> records3 = pubPrdPrcMngDao.selectselectPubPrdPrcCurAply(searchMap);
        List<Map> records4 = pubPrdPrcMngDao.selectselectPubPrdQtyDc(searchMap);
        List<Map> records5 = pubPrdPrcMngDao.selectselectPubPrdDlcst(searchMap);
        List<Map> records6 = null;
        List<Map> records7 = null;
        
        if ( records.size() > 0 ) 
        {
	        if(records.get(0).get("NEW_PRD_REQ_NO") != null && "".equals(records.get(0).get("NEW_PRD_REQ_NO")+"") == false)
			{
	        	searchMap.put("NEW_PRD_REQ_NO", CommUtil.nvl(records.get(0).get("NEW_PRD_REQ_NO")).toString());
	
		        // 첨부파일내역 조회
		        records6 = pubPrdPrcMngDao.selectCprtcpReqInfoInq(searchMap);
		        result.addDataSet("ds_cprtcpReqInfoInq",records6);
		        
		        if(records6.get(0).get("DOC_REG_ID") != null && "".equals(records6.get(0).get("DOC_REG_ID")+"") == false)
	    		{
	            	searchMap.put("DOC_REG_ID", CommUtil.nvl(records6.get(0).get("DOC_REG_ID")).toString());
	
	    	        // 협력사요청 첨부파일내역 조회
	    	        records7 = pubPrdPrcMngDao.selectAttcFileDtlsInq(searchMap);
	
	    	        result.addDataSet("ds_cprtcpReqAttcFile",records7);
	    		}
			}
        }

        result.addDataSet("ds_dispInfo",  records);
        result.addDataSet("ds_prdBasisInfo",  records1);
        result.addDataSet("ds_prdPrcInfo",  records2);
        result.addDataSet("ds_prdPrcCurAply",  records3);
        result.addDataSet("ds_prdPrcQtyDc",  records4);
        result.addDataSet("ds_prdPrcDlcst",  records5);

        return result;
	}

	@Override
	public NexacroResult savePubPrdPrcMngDtl(List<Map<String, Object>> saveMap1, List<Map<String, Object>> saveMap2,
			List<Map<String, Object>> saveMap3,List<Map<String, Object>> saveMap4, Map<String, Object> userInfo) throws Exception {
		
		NexacroResult result = new NexacroResult();

        int iCnt            = 0;
        int iCnt2           = 0;
        int iCnt3           = 0;
        int iCnt4           = 0;
        int rowType;
        String recordPKeyValue = "";
        try {
	        if(saveMap1.size() > 0)
	        {
	             for (int i=0; i < saveMap1.size() ; i++)
	             {
	                  Map<String,Object> saveData = saveMap1.get(i);
	                  String dispStatsCd = saveData.get("DISP_STATS_CD") + "";
	                  String oldDispStatsCd = saveData.get("OLD_DISP_STATS_CD") + "";
	                  String dispStatsChgrsn = null;
	                  String oldDispStatsChgrsn = null;
	                  if ( saveData.get("DISP_STATS_CHGRSN") != null ) {
	                	  dispStatsChgrsn = saveData.get("DISP_STATS_CHGRSN") + "";
	                  }
	                  if ( saveData.get("OLD_DISP_STATS_CHGRSN") != null ) {
	                	  oldDispStatsChgrsn = saveData.get("OLD_DISP_STATS_CHGRSN") + "";
	                  }
	
	                  rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));
	
	                  if (rowType == DataSet.ROW_TYPE_UPDATED)
	                  {
	                	  saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
	                      iCnt += pubPrdPrcMngDao.savePubPrdPrcMngDispInfo(saveData);
	                      
	                      pubPrdPrcMngDao.insertPubPrdDispRegHst(saveData);
	                      if ( !dispStatsCd.equals(oldDispStatsCd) || !dispStatsChgrsn.equals(oldDispStatsChgrsn) ) 
	                      {
	                    	  pubPrdPrcMngDao.insertPubPrdDispStatsInfoHst(saveData);
	                      }
	                      
	                      //pubPrdPrcMngDao.mergePubPrdQty(saveData);
	                  }
	                  recordPKeyValue = StringUtil.getString(saveData.get("PRD_VIEW_ID"));
	              }
	        }
	        String strDtm = "";
	        if(saveMap2.size() > 0)
	        {
	             for (int i=0; i < saveMap2.size() ; i++)
	             {
	                  Map<String,Object> saveData = saveMap2.get(i);
	
	                  rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));
	                  saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
	                  //기준일시 조회
	                  String qtyStrDtm = saveData.get("QTY_STR_DTM") + "";
	                  if(qtyStrDtm.length() > 8 ) {
	                	  qtyStrDtm = qtyStrDtm.substring(0,8);
	                  }
	                  saveData.put("STR_DTM", qtyStrDtm);
	                  if (i==0) {
	                	  strDtm = pubPrdPrcMngDao.selectStrDtm(saveData);
	                  }
	                  saveData.put("QTY_STR_DTM", strDtm);
	                  if (rowType == DataSet.ROW_TYPE_UPDATED || rowType == DataSet.ROW_TYPE_INSERTED)
	                  {
	                	  
                		  iCnt2 += pubPrdPrcMngDao.mergePubPrdQty(saveData);
	                      
	                  } else if (rowType == DataSet.ROW_TYPE_DELETED )
	                  {
	                	  
//	                	  if ( tempDate1.after(tempDate2) )
//	                	  {
//	                		  iCnt2 += pubPrdPrcMngDao.deletePubPrdQty(saveData);
//	                	  } else 
//	                	  {
	                		  iCnt2 += pubPrdPrcMngDao.updatePubPrdQty(saveData);
//	                	  }
	                  }
	                  recordPKeyValue = StringUtil.getString(saveData.get("PRD_VIEW_ID"));
	              }
	        }
	        
	        if(saveMap3.size() > 0)
	        {
	             for (int i=0; i < saveMap3.size() ; i++)
	             {
	                  Map<String,Object> saveData = saveMap3.get(i);
	
	                  rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));
	                  saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
                	  //기준일시 조회
	                  String qtyStrDtm = saveData.get("DLCST_STR_DTM") + "";
	                  if(qtyStrDtm.length() > 8 ) {
	                	  qtyStrDtm = qtyStrDtm.substring(0,8);
	                  }
	                  if (i==0) {
	                	  strDtm = pubPrdPrcMngDao.selectStrDtm(saveData);
	                  }
	                  saveData.put("DLCST_STR_DTM", strDtm);
	                  if (rowType == DataSet.ROW_TYPE_UPDATED || rowType == DataSet.ROW_TYPE_INSERTED)
	                  {
	                      iCnt3 += pubPrdPrcMngDao.mergePubPrdDlcst(saveData);
	                      
	                  } else if (rowType == DataSet.ROW_TYPE_DELETED )
	                  {
//	                	  if ( tempDate1.after(tempDate2) )
//	                	  {
//	                		  iCnt3 += pubPrdPrcMngDao.deletePubPrdDlcst(saveData);
//	                	  } else 
//	                	  {
	                		  iCnt3 += pubPrdPrcMngDao.updatePubPrdDlcst(saveData);
//	                	  }
	                  }
	                  recordPKeyValue = StringUtil.getString(saveData.get("PRD_VIEW_ID"));
	              }
	        }
	        if(saveMap4.size() > 0)
	        {
	        	for (int i=0; i < saveMap4.size() ; i++)
	             {
	                  Map<String,Object> saveData = saveMap4.get(i);
	
	                  rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));
	                  saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
	                  if (rowType == DataSet.ROW_TYPE_UPDATED )
	                  {	                	
 	                	  // 미래일자 삭제
	                	  pubPrdPrcMngDao.deletePubPrdPerdDc(saveData);
	                	  int dupl = pubPrdPrcMngDao.selectPubPrdPerdDcDupl(saveData);
	                	  if ( dupl > 0)
	                	  {
	                		  pubPrdPrcMngDao.updatePubPrdPerdDc(saveData);
	                	  }
	                	  // 기간할인을 삭제했을 경우 등록은 하지 않음
	                	  if(!"".equals(StringUtil.getString(saveData.get("RND_DC_SPR_CD")))) {
	                		  iCnt4 += pubPrdPrcMngDao.insertPubPrdPerdDc(saveData);
	                	  }
	                  } 
	                  recordPKeyValue = StringUtil.getString(saveData.get("PRD_VIEW_ID"));
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
     * 진열상태변경이력 조회(selectDispStatsChgHst)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public NexacroResult selectDispStatsChgHst(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		
		int totalCount    = pubPrdPrcMngDao.selectDispStatsChgHstCount(searchMap);
        List<Map> records = pubPrdPrcMngDao.selectDispStatsChgHst(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);
        return result;
	}

	@Override
	public NexacroResult selectPrcChgHst(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		
		int totalCount    = pubPrdPrcMngDao.selectPrcChgHstCount(searchMap);
        List<Map> records = pubPrdPrcMngDao.selectPrcChgHst(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);
        return result;
	}

   
}