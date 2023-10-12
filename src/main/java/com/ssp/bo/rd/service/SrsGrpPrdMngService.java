/*------------------------------------------------------------------------------
 * NAME : SrsGrpPrdMngService.java
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
import com.ssp.core.legacy.mall.model.Admin;

/**
 * <pre>
 *
 * @title   SrsGrpPrdMngService
 * @@desc   R&D 시리즈그룹 상품 관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface SrsGrpPrdMngService {

    /**
     * R&D 시리즈그룹 상품 관리 리스트 조회(selectSrsGrpPrdMng)
     * @param session 
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectSrsGrpPrdMng(Map<String, Object> searchMap, HttpSession session) throws Exception;
    
    
    /**
     * 기준상품 중복 체크 조회(selectSeriesBssTemp)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectSeriesBssTemp(Map<String, Object> searchMap) throws Exception;
    
    /**
     * 그룹상품추가 조회(selectSeriesTemp)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectSeriesTemp(Map<String, Object> searchMap) throws Exception;
   
    /**
     * 그룹상품추가 저장/수정/및 상세저장/수정/삭제 (saveProductSeries)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveProductSeries(Map<String, Object> commandMap, List<Map<String, Object>> listMap,Map<String, Object> userInfo) throws Exception;
    
    
    /**
     * 상품그룹 상세 조회(selectProductSeries)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectProductSeries(Map<String, Object> searchMap) throws Exception;



}