/*------------------------------------------------------------------------------
 * NAME : PubPrdPrcMngService.java
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
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   PubPrdPrcMngService
 * @@desc   공용상품가격관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.06			       최초작성n */
public interface PubPrdPrcMngService {

    /**
     * 공용상품가격관리 리스트 조회(selectPubPrdPrcMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPubPrdPrcMng(Map<String, Object> searchMap) throws Exception;

    /**
     * 공용상품가격관리 상세 조회(selectPubPrdPrcMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectPubPrdPrcMngDtl(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품가격관리 상세 수정(savePubPrdPrcMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult savePubPrdPrcMngDtl(List<Map<String, Object>> saveMap1, List<Map<String, Object>> saveMap2,
			List<Map<String, Object>> saveMap3,List<Map<String, Object>> saveMap4, Map<String, Object> userInfo) throws Exception;
	
	/**
     * 진열상태변경이력 조회(selectDispStatsChgHst)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectDispStatsChgHst(Map<String, Object> searchMap) throws Exception;
	
	/**
     * 진열상태변경이력 조회(selectPrcChgHst)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectPrcChgHst(Map<String, Object> searchMap) throws Exception;

  
}