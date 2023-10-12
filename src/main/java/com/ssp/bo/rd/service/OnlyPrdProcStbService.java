/*------------------------------------------------------------------------------
 * NAME : OnlyPrdProcStbService.java
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
 * @title   OnlyPrdProcStbService
 * @@desc   전용상품 처리대기 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.06			       최초작성n */
public interface OnlyPrdProcStbService {

    /**
     * 전용상품 처리대기 리스트 조회(selectOnlyPrdProcStb)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectOnlyPrdProcStb(Map<String, Object> searchMap) throws Exception;

	/**
     * 전용상품처리대기 기준판매가 수정 (saveOnlyPrdBssSalsprcProc)
	 * @param saveMap
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult saveOnlyPrdBssSalsprcProc(List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception;
    
}