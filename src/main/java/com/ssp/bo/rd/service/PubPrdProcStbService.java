/*------------------------------------------------------------------------------
 * NAME : PubPrdProcStbService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.06  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   PubPrdProcStbService
 * @@desc   공용상품처리대기 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.06	나용철		최초작성n */
public interface PubPrdProcStbService {

    /**
     * 공용상품처리대기 조회(selectPubPrdProcStb)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPubPrdProcStb(Map<String, Object> searchMap) throws Exception;

    
}