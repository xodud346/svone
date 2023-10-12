/*------------------------------------------------------------------------------
 * NAME : NewPrdMltReqLstService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2023.07.04  김완수
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 *
 * @title   NewPrdMltReqLstService
 * @@desc   신규상품일괄요청처리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2023.07.04
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.07.04			       최초작성
 */
public interface NewPrdMltReqLstService {

    /**
     * 신규상품요청처리 리스트 조회(selectNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectNewPrdMltReqLst(Map<String, Object> searchMap, HttpSession session) throws Exception;
    
    /**
     * 합의완료 진열상태 리스트 조회(selectAgrCompDispStt)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectAgrCompDispStt(Map<String, Object> searchMap, HttpSession session) throws Exception;


    /**
     * 합의처리사유 저장(saveAgrProcRsn)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveAgrProcRsn(Map<String, Object> mainMap1, Map<String,Object> userInfo, String contextRealPath) throws Exception;

    /**
     * 상품일괄요청반려처리저장(savePrdMltReqRjctProcStor)
     * @param input
     * @return
     * @throws Exception
     */
	NexacroResult savePrdMltReqRjctProcStor(Map<String, Object> mainMap, Map<String, Object> userInfo) throws Exception;
}