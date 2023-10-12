/*------------------------------------------------------------------------------
 * NAME : PurgInfoChgHstMngService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.10  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 *
 * @title   PurgInfoChgHstMngService
 * @@desc   구매정보변경이력관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.06.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성n */
public interface PurgInfoChgHstMngService {

    /**
     * 구매정보변경이력관리 리스트 조회(selectPurgInfoChgHstMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPurgInfoChgHstMng(Map<String, Object> searchMap) throws Exception;

    /**
     * 구매정보변경상세 조회(selectPurgInfoChgDtlInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPurgInfoChgDtlInq(Map<String, Object> searchMap) throws Exception;

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
}