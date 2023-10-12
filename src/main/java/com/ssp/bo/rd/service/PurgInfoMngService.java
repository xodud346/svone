/*------------------------------------------------------------------------------
 * NAME : PurgInfoMngService.java
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
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   PurgInfoMngService
 * @@desc   구매정보관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface PurgInfoMngService {

    /**
     * 구매정보관리 리스트 조회(selectPurgInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPurgInfoMng(Map<String, Object> searchMap) throws Exception;

    /**
     * 구매상품정보 조회(selectPrdInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPurgPrdInfoInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 구매정보상세 조회(selectPurgInfoDtlInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPurgInfoDtlInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 구매정보관리 리스트 저장/수정(savePurgInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult savePurgInfoMng(Map<String, Object>       saveMap
    		                    , List<Map<String, Object>> qtyDcMap
    		                    , List<Map<String, Object>> fileMap
    		                    , List<Map<String, Object>> kcMap
    		                    , Map<String, Object>       userInfo
    		                    , String contextRealPath) throws Exception;

    /**
     * 구매정보 수정(savePurgInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult updatePurgInfoUpd(Map<String, Object>       saveMap
    		                      , List<Map<String, Object>> fileMap
    		                      , List<Map<String, Object>> kcMap
    		                      , List<Map<String, Object>> kcDelMap
    		                      , Map<String, Object>       userInfo
    		                      , String contextRealPath) throws Exception;    
}