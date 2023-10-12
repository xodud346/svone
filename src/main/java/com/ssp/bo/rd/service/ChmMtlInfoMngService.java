/*------------------------------------------------------------------------------
 * NAME : ChmMtlInfoMngService.java
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

/**
 * <pre>
 *
 * @title   ChmMtlInfoMngService
 * @@desc   화학물질정보관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n
 */
public interface ChmMtlInfoMngService {

    /**
     * 화학물질정보관리 리스트 조회(selectChmMtlInfoMng)
     * @param session 
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectChmMtlInfoMng(Map<String, Object> searchMap, HttpSession session) throws Exception;

    /**
     * 화학물질정보등록수정 리스트 조회(selectChmMtlInfoRegUpdListInq)
     * @param session 
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectChmMtlInfoRegUpdListInq(Map<String, Object> searchMap, Map<String, Object> userInfo) throws Exception;

    /**
     * 화학물질정보추가정보 리스트 조회(selectChmMtlInfoAddInfoListInq)
     * @param session 
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectChmMtlInfoAddInfoListInq(Map<String, Object> searchMap, Map<String, Object> userInfo) throws Exception;

    /**
     * 규제정보확인여부 리스트 조회(selectRegulationInfoCnfYn)
     * @param session 
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectRegulationInfoCnfYn(Map<String, Object> searchMap
    		                              , List<Map<String, Object>> saveMap
    		                              , Map<String, Object> userInfo) throws Exception;

    /**
     * 화학물질정보확인 저장(saveChmMtlInfoCnf)
     * @param session 
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveChmMtlInfoCnf(Map<String, Object> searchMap
    		                      , Map<String, Object> mainMap
    		                      , List<Map<String, Object>> saveMap
    		                      , List<Map<String, Object>> saveFileList
    		                      , Map<String, Object> userInfo
    		                      , String contextRealPath) throws Exception;
	 /**
     * 저장/수정 코드체크여부 조회 (selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCodeChkYn(Map<String, Object> searchMap) throws Exception;
}