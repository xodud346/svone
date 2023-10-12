/*------------------------------------------------------------------------------
 * NAME : RdProductComHistoryService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.22  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 *
 * @title   RdProductComHistoryService
 * @@desc    Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.06.22
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.06.22			       최초작성
 */
public interface RdProductComHistoryService {

    /**
     * 공통히스토리 조회(selectRdProductComHistory)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectRdProductComHistory(Map<String, Object> searchMap) throws Exception;
    
    /**
     * 상품 공통 히스토리 뷰어 조회(selectRdHstDtlHtmlInfo)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectRdHstDtlHtmlInfo(Map<String, Object> searchMap) throws Exception;
    
    /**
     * 화학물질 상세 히스토리 조회(selectRdProductComDtlHistory)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectRdProductComDtlHistory(Map<String, Object> searchMap) throws Exception;
    
    


   
}