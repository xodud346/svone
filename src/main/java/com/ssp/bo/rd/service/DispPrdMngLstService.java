/*------------------------------------------------------------------------------
 * NAME : DispPrdMngLstService.java
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

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   DispPrdMngLstService
 * @@desc   전시상품관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface DispPrdMngLstService {

    /**
     * 전시상품관리 리스트 조회(selectDispPrdMngLst)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectDispPrdMngLst(Map<String, Object> searchMap) throws Exception;

    /**
     * RnD 전시상품 진열순서 변경
     * 
     * @param paramMap
     * @throws Exception
     */
    void updateSrtSo(Map<String, Object> paramMap) throws Exception;

    /**
     * RnD 전시상품 기본정보 조회
     *
     * @param searchMap
     * @return Map
     * @throws Exception
     */
    Map<String, Object> selectDispBasis(Map<String, Object> searchMap) throws Exception;

    /**
     * 전시상품 옵션정보 조회
     *
     * @param searchMap
     * @return List
     * @throws Exception
     */
    List<Map<String, Object>> selectDispOptnBasis(Map<String, Object> searchMap) throws Exception;

    /**
     * 전시상품 상품연결정보 조회
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
    List<Map<String, Object>> selectDispOptnDtlMapp(Map<String, Object> searchMap) throws Exception;

    /**
     * 전시상품 추가정보 조회
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
    List<Map<String, Object>> selectDispAddOptnBasis(Map<String, Object> searchMap) throws Exception;

    /**
     * 전시상품 추가정보상세 조회
     * @param searchMap
     * @return
     * @throws Exception
     */
    List<Map<String, Object>> selectDispAddOptnDtl(Map<String, Object> searchMap) throws Exception;

    /**
     * 전시상품 담당자 정보 조회
     * @param searchMap
     * @return
     * @throws Exception
     */
    Map<String, Object> selectProductDispOprtr(Map<String, Object> searchMap) throws Exception;

    /**
     * 전시상세 옵션상세정보 조회
     *
     * @param searchMap
     * @return List
     * @throws Exception
     */
    List<Map<String, Object>> selectDispOptnDtl(Map<String, Object> searchMap) throws Exception;

    String saveRndProductDispInfo(Map<String, Object> ds_basic,
                               List<Map<String, Object>> ds_optnBasis,
                               List<Map<String, Object>> ds_optnDtl,
                               List<Map<String, Object>> ds_prdCon,
                               List<Map<String, Object>> ds_addOptnBasis,
                               List<Map<String, Object>> ds_addOptnDtl,
                               List<Map<String, Object>> ds_delOptn) throws Exception;

    List<Map<String, Object>> selectCategoryOptionValues(Map<String, Object> searchMap) throws Exception;

}