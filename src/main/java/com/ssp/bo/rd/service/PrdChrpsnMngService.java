/*------------------------------------------------------------------------------
 * NAME : PrdChrpsnMngService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.02  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   PrdChrpsnMngService
 * @@desc   상품담당자관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.02
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.02			       최초작성n */
public interface PrdChrpsnMngService {

    /**
     * 상품담당자관리 리스트 조회(selectPrdChrpsnMng)
     * @param session 
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPrdChrpsnMng(Map<String, Object> searchMap, HttpSession session) throws Exception;
    
    /**
     * 상품담당자관리 상세 조회(selectPrdChrpsnMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectPrdChrpsnMngDtl(Map<String, Object> searchMap) throws Exception;

	/**
     * 상품담당자관리 수정(updatePrdChrpsnMng)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult updatePrdChrpsnMng(Map<String, Object> searchMap, List<Map<String, Object>> saveMap,
			Map<String, Object> userInfo) throws Exception;

	/**
     * 상품담당자관리 등록(insertPrdChrpsnMng)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult insertPrdChrpsnMng(List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception;
	
	/**
     * 신규 저장 코드체크여부 조회 (selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCodeChkYn(Map<String, Object> searchMap) throws Exception;
    
    /**
     *  수정 코드체크여부 조회 (selectUpCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectUpCodeChkYn(Map<String, Object> searchMap) throws Exception;

}