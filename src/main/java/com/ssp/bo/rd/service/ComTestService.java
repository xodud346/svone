/*------------------------------------------------------------------------------
 * NAME : ComTestService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.09  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   ComTestService
 * @@desc   상품전송정보 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.09			       최초작성n */
public interface ComTestService {

    /**
     * 상품전송정보 리스트 조회(selectComTest)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectComTest(Map<String, Object> searchMap) throws Exception;

    /**
     * 상품전송정보 리스트 저장/수정(saveComTest)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveComTest(List<Map<String, Object>> prdMap, Admin userInfo) throws Exception;

	NexacroResult selectComTestprd(Map<String, Object> searchMap) throws Exception;

	/**
	 * 상품전송정보 리스트 저장/수정(saveComTest)
	 * @param input
	 * @return
	 * @throws Exception
	 */
	NexacroResult saveComTestBatch(List<Map<String, Object>> prdMap, Admin userInfo) throws Exception;

	/**
	 * 상품전송정보 리스트 저장/수정(saveComTest)
	 * @param input
	 * @return
	 * @throws Exception
	 */
	NexacroResult saveComTestOnly(List<Map<String, Object>> prdMap, Admin userInfo) throws Exception;
	
	NexacroResult saveComTest1303(List<Map<String, Object>> prdMap, Admin userInfo) throws Exception;

}