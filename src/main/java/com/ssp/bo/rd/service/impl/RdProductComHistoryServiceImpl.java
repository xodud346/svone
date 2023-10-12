/*------------------------------------------------------------------------------
 * NAME : RdProductComHistoryServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.22  홍길동
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
import com.ssp.bo.rd.dao.RdProductComHistoryDao;
import com.ssp.bo.rd.service.RdProductComHistoryService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   RdProductComHistoryServiceImpl
 * @@desc    ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.06.22
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.06.22			       최초작성
 */
@Service("rdProductComHistoryService")
public class RdProductComHistoryServiceImpl implements RdProductComHistoryService {

    @Resource(name = "rdProductComHistoryDao")
    private RdProductComHistoryDao rdProductComHistoryDao;

    /**
     * 공통 히스토리 조회(selectRdProductComHistory)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectRdProductComHistory(Map<String, Object> searchMap) throws Exception {

        NexacroResult result   = new NexacroResult();
       
        int totalCount = 0;
        List<Map>     records  = null;
       
        String strGrdFormat    = searchMap.get("GRD_FORMAT").toString(); 
        String strHistoryTable = searchMap.get("HIS_TABLE").toString(); 
        
        if(strGrdFormat.equals("FORMAT01")) {
        	
	        if(strHistoryTable.equals("TB_PR_PRD_CLSF_CHRPSN_INFO_HST")) {
	        	
	        	totalCount  = rdProductComHistoryDao.selectPersonHistoryCount(searchMap);                    // (구매/상품)담당자 관리 히스트로 카운트
		        records     = rdProductComHistoryDao.selectPersonHistory(searchMap);                         // (구매/상품)담당자 관리 히스트로 리스트
	        
	        } else if(strHistoryTable.equals("TB_PR_PRD_INFO_HST")){
	        	
	        	totalCount  = rdProductComHistoryDao.selectProductDetailHistoryCount(searchMap);             // 상품 관리 히스토리 카운트
		        records     = rdProductComHistoryDao.selectProductDetailHistory(searchMap);                  // 상품 관리 관리 히스토리 리스트
	        
	        } else if(strHistoryTable.equals("TB_PR_PRD_GRP_BASIS_HST")){
	        	
	        	totalCount  = rdProductComHistoryDao.selectSeriesHistoryCount(searchMap);                    // 시리즈 그룹상품 관리 히스토리 카운트
		        records     = rdProductComHistoryDao.selectSeriesHistory(searchMap);                         // 시리즈 그룹상품 관리 히스토리 히스토리 리스트
	       
	        } else if(strHistoryTable.equals("TB_PR_PRD_CLSF_INFO_HST")){
	        	
	        	totalCount  = rdProductComHistoryDao.selectCategoryHistoryCount(searchMap);                  // 카테고리 관리 히스토리 카운트
		        records     = rdProductComHistoryDao.selectCategoryHistory(searchMap);                       // 카테고리 관리 히스토리 히스토리 리스트
	        
	        } 
	        
        }else if(strGrdFormat.equals("FORMAT02")) {
        	
        	if(strHistoryTable.equals("TB_PR_PRD_CHM_MTL_DTLS_HST")) {
	        	
	        	totalCount  = rdProductComHistoryDao.selectChmMtlInfoHistoryCount(searchMap);                // 화학물질 관리 히스트로 카운트
		        records     = rdProductComHistoryDao.selectChmMtlInfoHistory(searchMap);                     // 화학물질 관리 히스트로 리스트
	        
	        }
        }
        result.addDataSet("ds_list",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }
    
    /**
     * 상품 공통 히스토리 뷰어 조회(selectRdHstDtlHtmlInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectRdHstDtlHtmlInfo(Map<String, Object> searchMap) throws Exception {

        NexacroResult result   = new NexacroResult();
       
        List<Map> records = rdProductComHistoryDao.selectRdHstDtlHtmlInfo(searchMap);

        result.addDataSet("ds_output",  records);
        
        return result;

    }

    /**
     * 화학물질 상세 히스토리 조회(selectRdProductComDtlHistory)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectRdProductComDtlHistory(Map<String, Object> searchMap) throws Exception {

        NexacroResult result   = new NexacroResult();
       
        List<Map> records = rdProductComHistoryDao.selectRdProductComDtlHistory(searchMap);

        result.addDataSet("ds_dlist",  records);
        
        return result;

    }
}