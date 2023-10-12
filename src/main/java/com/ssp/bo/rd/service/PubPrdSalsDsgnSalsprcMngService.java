/*------------------------------------------------------------------------------
 * NAME : PubPrdSalsDsgnSalsprcMngService.java
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
 * @title   PubPrdSalsDsgnSalsprcMngService
 * @@desc   공용상품영업지정판매가관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.09			       최초작성n */
public interface PubPrdSalsDsgnSalsprcMngService {

    /**
     * 공용상품영업지정판매가관리 리스트 조회(selectPubPrdSalsDsgnSalsprcMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPubPrdSalsDsgnSalsprcMng(Map<String, Object> searchMap) throws Exception;
    
    /**
     * 공용상품영업지정판매가관리 상세 조회(selectPubPrdSalsDsgnSalsprcMngDtl)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectPubPrdSalsDsgnSalsprcMngDtl(Map<String, Object> searchMap) throws Exception;

    /**
     * 공용상품영업지정판매가관리 등록(insertPubPrdSalsDsgnSalsprcMng)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult insertPubPrdSalsDsgnSalsprcMng(List<Map<String, Object>> saveMap, Map<String, Object> userInfo,
			List<Map<String, Object>> fileMap, String contextRealPath) throws Exception;

    /**
     * 공용상품영업지정판매가관리 수정(updatePubPrdSalsDsgnSalsprcMng)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult updatePubPrdSalsDsgnSalsprcMng(List<Map<String, Object>> saveMap, Map<String, Object> userInfo,
			List<Map<String, Object>> fileMap, String contextRealPath) throws Exception;

	/**
     * 공용상품영업지정판매가관리 영업담당자 여부 조회(selectSalsChrpsnYn)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectSalsChrpsnYn(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품영업지정판매가관리 상품정보 조회(selectPubPrdSalsDsgnSalsprcMngPrdDtl)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectPubPrdSalsDsgnSalsprcMngPrdDtl(Map<String, Object> searchMap) throws Exception;

	/**
     * 공용상품영업지정판매가관리 상품정보 저장여부(selectPubPrdSalsDsgnSalsprcMngPrdSaveYn)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult selectPubPrdSalsDsgnSalsprcMngPrdSaveYn(Map<String, Object> searchMap) throws Exception;

    
}