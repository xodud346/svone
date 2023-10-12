/*------------------------------------------------------------------------------
 * NAME : NewPrdReqLstService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.21  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 *
 * @title   NewPrdReqLstService
 * @@desc   신규상품요청처리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.04.21
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.21			       최초작성
 */
public interface NewPrdReqLstService {

    /**
     * 신규상품요청처리 리스트 조회(selectNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectNewPrdReqLst(Map<String, Object> searchMap, HttpSession session) throws Exception;

    /**
     * 상품등록자사조회 리스트 조회(selectPrdRegOcorpInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPrdRegOcorpInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 카테고리속성정보 리스트 조회(selectCatgAttrInfo)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCatgAttrInfo(Map<String, Object> searchMap) throws Exception;

    /**
     * 상품고시상품 리스트 조회(selectCatgAttrInfo)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPrdNotiPrdInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 상품ID존재여부 리스트 조회(selectPrdIdExstYn)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPrdIdExstYn(Map<String, Object> searchMap) throws Exception;

    /**
     * 배지 리스트 정보 조회(selectBgListInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectBgListInfoInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 코드체크여부 조회(selectCdChkYnInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCdChkYnInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 신규상품요청처리 리스트 저장/수정(saveNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveNewPrdReqLst(List<Map<String, Object>> mainMap1
    		                     , List<Map<String, Object>> catgMap2
    		                     , List<Map<String, Object>> notiMap3
    		                     , List<Map<String, Object>> fileMap4
    		                     , Map<String, Object> userInfo
    		                     , String contextRealPath) throws Exception;

    /**
     * 협력사등록저장 리스트 저장/수정(saveCprtcpRegStor)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveCprtcpRegStor(List<Map<String, Object>> mainMap1
    		                     , List<Map<String, Object>> catgMap2
    		                     , List<Map<String, Object>> notiMap3
    		                     , List<Map<String, Object>> fileMap4
    		                     , List<Map<String, Object>> custMap5
    		                     , List<Map<String, Object>> purgMap6
    		                     , Map<String, Object> userInfo
    		                     , String contextRealPath) throws Exception;

    /**
     * 협력사중복상품처리저장 리스트 저장/수정(saveCprtcpDupPrdProcStor)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveCprtcpDupPrdProcStor(List<Map<String, Object>> mainMap1
    		                     , List<Map<String, Object>> custMap2
    		                     , List<Map<String, Object>> purgMap3
    		                     , Map<String, Object> userInfo) throws Exception;

    /**
     * 상품요청반려처리저장 (savePrdReqRjctProcStor)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult savePrdReqRjctProcStor(List<Map<String, Object>> mainMap
    		                           , Map<String, Object> userInfo) throws Exception;

    /**
     * 고객요청처리 저장 (saveCustReqProc)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveCustReqProc(List<Map<String, Object>> mainMap
    		                           , Map<String, Object> userInfo) throws Exception;
    
    /**
     * 협력사 신규상품요청 검증(validateReqInfo) 
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult validateReqInfo(List<Map<String, Object>> mainMap) throws Exception;
}