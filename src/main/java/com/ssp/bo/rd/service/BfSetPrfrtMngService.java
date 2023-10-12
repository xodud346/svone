/*------------------------------------------------------------------------------
 * NAME : BfSetPrfrtMngService.java
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
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   BfSetPrfrtMngService
 * @@desc   사전설정매익률관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성n */
public interface BfSetPrfrtMngService {

    /**
     * 사전설정매익률관리 리스트 조회(selectBfSetPrfrtMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectBfSetPrfrtMng(Map<String, Object> searchMap) throws Exception;

    /**
     * 사전설정매익률관리 등록/수정(saveBfSetPrfrtMng)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult saveBfSetPrfrtMng(List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception;

	/**
     * 구매담당자여부 조회(selectPurgChrpsnYn)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectPurgChrpsnYn(Map<String, Object> searchMap) throws Exception;

	/**
     * 사전설정매익률관리 이력조회(selectBfSetPrfrtMngHst)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectBfSetPrfrtMngHst(Map<String, Object> searchMap) throws Exception;

   
}