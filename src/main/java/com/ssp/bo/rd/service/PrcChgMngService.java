/*------------------------------------------------------------------------------
 * NAME : PrcChgMngService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   PrcChgMngService
 * @@desc   가격변동이력관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성n */
public interface PrcChgMngService {

    /**
     * 가격변동이력관리 리스트 조회(selectPrcChgMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPrcChgMng(Map<String, Object> searchMap) throws Exception;

    
}