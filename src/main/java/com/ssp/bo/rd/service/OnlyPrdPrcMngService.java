/*------------------------------------------------------------------------------
 * NAME : OnlyPrdPrcMngService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.09  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   OnlyPrdPrcMngService
 * @@desc   전용상품가격관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.09			       최초작성n */
public interface OnlyPrdPrcMngService {

    /**
     * 전용상품가격관리 조회(selectOnlyPrdPrcMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectOnlyPrdPrcMng(Map<String, Object> searchMap) throws Exception;
    
    /**
     * 전용상품가격관리 등록 시 (운영단위정보) 조회(selectOprUnitInfo)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectOprUnitInfo(Map<String, Object> searchMap) throws Exception;

	/**
	 * 전용상품가격관리 등록/수정 (saveOnlyPrdPrcMngDtl)
	 *
	 * @param userInfo
	 * @param saveMap1
	 * @param saveMap2
	 * @return
	 * @throws Exception
	 */
	NexacroResult saveOnlyPrdPrcMngDtl(
		Map<String, Object> userInfo
		, List<Map<String, Object>> saveMap1
		, List<Map<String, Object>> saveMap2
	) throws Exception;

	/**
     * 전용상품가격관리 등록 시 (상세정보) 조회(selectOnlyPrdPrcMngDtlReg)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectOnlyPrdPrcMngDtlReg(Map<String, Object> searchMap) throws Exception;
	
	/**
     * 전용상품가격관리 (상세정보) 조회(selectOnlyPrdPrcMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectOnlyPrdPrcMngDtl(Map<String, Object> searchMap) throws Exception;
	
	/**
     * 전용상품가격관리 기등록 체크(selectOnlyPrdPrcMngDupl)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectOnlyPrdPrcMngDupl(Map<String, Object> searchMap) throws Exception;
	
   
}