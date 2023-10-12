/*------------------------------------------------------------------------------
 * NAME : RdServiceSmlService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.20  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   RdServiceSmlService
 * @@desc   업체공통클래스(샘풀) Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.04.20
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.20			       최초작성n */
public interface RdServiceSmlService {

    /**
     * 업체공통클래스(샘풀) 리스트 조회(selectRdServiceSml)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectRdServiceSml(Map<String, Object> searchMap) throws Exception;

    /**
     * 업체공통클래스(샘풀) 리스트 저장/수정(saveRdServiceSml)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveRdServiceSml(Map<String, Object> searchMap, List<Map<String, Object>> saveMap, Admin userInfo) throws Exception;

}