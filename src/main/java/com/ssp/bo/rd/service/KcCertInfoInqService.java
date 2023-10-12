/*------------------------------------------------------------------------------
 * NAME : KcCertInfoInqService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.24  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 *
 * @title   KcCertInfoInqService
 * @@desc    Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.24
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.24			       최초작성
 */
public interface KcCertInfoInqService {

    /**
     * KC인증정보 조회(selectKcCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectKcCertInfoInq(Map<String, Object> searchMap) throws Exception;

    /**
     * KC인증정보리스트 조회(selectKcCertInfoListInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectKcCertInfoListInq(Map<String, Object> searchMap) throws Exception;

    /**
     * KC인증정보 저장/수정(saveKcCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveKcCertInfoInq(List<Map<String, Object>> saveMap
    		                      , List<Map<String, Object>> fileMap
    		                      , Map<String, Object> userInfo
    		                      , String contextRealPath) throws Exception;

}