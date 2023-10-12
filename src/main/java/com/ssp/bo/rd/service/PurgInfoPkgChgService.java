/*------------------------------------------------------------------------------
 * NAME : PurgInfoPkgChgService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.02  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 *
 * @title   PurgInfoPkgChgService
 * @@desc   구매정보일괄변경 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.06.02
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.06.02			       최초작성
 */
public interface PurgInfoPkgChgService {

    /**
     * 구매정보일괄변경 리스트 조회(selectPurgInfoPkgChg)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPurgInfoPkgChg(Map<String, Object> searchMap) throws Exception;

    /**
     * 제안파일엑셀다운로드 조회(selectPrpsFileExcelDown)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPrpsFileExcelDown(Map<String, Object> searchMap) throws Exception;

    /**
     * 요청협력사합의상태내역 저장/수정(saveReqCprtcpConsnStatsDtlsStor)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveReqCprtcpConsnStatsDtlsStor(Map<String, Object> searchMap, List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception;
}