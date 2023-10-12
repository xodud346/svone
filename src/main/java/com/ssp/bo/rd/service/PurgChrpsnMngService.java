/*------------------------------------------------------------------------------
 * NAME : PurgChrpsnMngService.java
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

import javax.servlet.http.HttpSession;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   PurgChrpsnMngService
 * @@desc   구매담당자 관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface PurgChrpsnMngService {

    /**
     * 구매담당자 관리 리스트 조회(selectPurgChrpsnMng)
     * @param session 
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPurgChrpsnMng(Map<String, Object> searchMap, HttpSession session) throws Exception;

    /**
     * 구매담당자 상세 조회(selectPurgChrpsnMngDtl)
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
	NexacroResult selectPurgChrpsnMngDtl(Map<String, Object> searchMap) throws Exception;

	/**
     * 구매담당자 수정(updatePurgChrpsnMng)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult updatePurgChrpsnMng(Map<String, Object> searchMap, List<Map<String, Object>> saveMap,
			Map<String, Object> userInfo) throws Exception;

	/**
     * 구매담당자 등록(insertPurgChrpsnMng)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult insertPurgChrpsnMng(List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception;
	
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