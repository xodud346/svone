/*------------------------------------------------------------------------------
 * NAME : MetaTblInfoInqService.java
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

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 *
 * @title  MetaTblInfoInqService
 * @@desc   메타테이블정보조회 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.04.21
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.21			       최초작성n */
public interface MetaTblInfoInqService {

    /**
     * 메타테이블정보조회(selectMetaTblInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectMetaTblInfoInq(Map<String, Object> searchMap) throws Exception;
}