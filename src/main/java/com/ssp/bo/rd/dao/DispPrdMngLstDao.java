/*------------------------------------------------------------------------------
 * NAME : DispPrdMngLstDao.java
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
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   DispPrdMngLstDao
 * @@desc   전시상품관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface DispPrdMngLstDao {

    /**
     * 전시상품관리 리스트 조회(selectDispPrdMngLst)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map<String, Object>> selectDispPrdMngLst(Map<String, Object> map) throws Exception;

    /**
     * 전시상품관리 리스트 카운트 조회(selectDispPrdMngLstCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectDispPrdMngLstCount(Map<String, Object> map) throws Exception;

    /**
     * RnD 전시상품 진열순서 변경
     * 
     * @param dataMap
     * @return
     * @throws Exception
     */
    int updateSrtSo(Map<String, Object> dataMap) throws Exception;

    /**
     * RnD 전시상품 기본정보 조회
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
    Map<String, Object> selectDispBasis(Map<String, Object> searchMap) throws Exception;

    /**
     * 전시상품 옵션정보 조회
     *
     * @param searchMap
     * @return
     */
    List<Map<String, Object>> selectDispOptnBasis(Map<String, Object> searchMap) throws Exception;

    /**
     * 전시상품 옵션상세 조회
     *
     * @param searchMap
     * @return
     */
    List<Map<String, Object>> selectDispOptnDtl(Map<String, Object> searchMap) throws Exception;

    /**
     * 전시상품 상품연결정보 조회
     *
     * @param searchMap
     * @return
     */
    List<Map<String, Object>> selectDispOptnDtlMapp(Map<String, Object> searchMap) throws Exception;

    Map<String, Object> selectOptnNmByDtlItmno(Map<String, Object> searchMap) throws Exception;

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
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
    List<Map<String, Object>> selectDispAddOptnDtl(Map<String, Object> searchMap) throws Exception;

    /**
     * 전시상품 담당자 조회
     *
     * @param searchMap
     * @return
     * @throws Exception
     */
    Map<String, Object> selectProductDispOprtr(Map<String, Object> searchMap) throws Exception;

    /**
     * Rnd 전시그룹 ID 채번
     *
     * @return String
     */
    String selectRndDispGrpId() throws Exception;

    /**
     * Rnd 전시상품 등록
     *
     * @param map 상품정보
     * @return int
     * @throws Exception
     */
    int insertRndDispBasis(Map<String, Object> map) throws Exception;

    /**
     * RnD 전시상품 옵션정보 등록
     *
     * @param map
     * @return
     * @throws Exception
     */
    int insertRndDispOptnBasis(Map<String, Object> map) throws Exception;

    /**
     * RnD 전시상품 옵션상세정보 등록
     *
     * @param map
     * @return
     * @throws Exception
     */
    int insertRndDispOptnDtl(Map<String, Object> map) throws Exception;

    /**
     * RnD 전시상품 상품연결정보 등록
     *
     * @param map
     * @return
     * @throws Exception
     */
    int insertRndDispOptnDtlMapp(Map<String, Object> map) throws Exception;

    /**
     * RnD 전시상품 추가정보 등록
     *
     * @param map
     * @return
     * @throws Exception
     */
    int insertRndDispAddOptnBasis(Map<String, Object> map) throws Exception;

    /**
     * RnD 전시상품 추가정보상세 등록
     * @param map
     * @return
     * @throws Exception
     */
    int insertRndDispAddOptnDtl(Map<String, Object> map) throws Exception;

    /**
     * Rnd 전시상품 옵션정보 삭제
     *
     * @param map
     * @return int
     * @throws Exception
     */
    int deleteRndDispOptnBasis(Map<String, Object> map) throws Exception;

    /**
     * RnD 전시상품 옵션상세정보 삭제
     * @param map
     * @return
     * @throws Exception
     */
    int deleteRndDispOptnDtl(Map<String, Object> map) throws Exception;

    /**
     * RnD 전시상품 추가정보 삭제
     *
     * @param map
     * @return
     * @throws Exception
     */
    int deleteRndDispAddOptnBasis(Map<String, Object> map) throws Exception;

    /**
     * RnD 전시상품 추가상세정보 삭제
     *
     * @param map
     * @return
     * @throws Exception
     */
    int deleteRndDispAddOptnDtl(Map<String, Object> map) throws Exception;

    /**
     * RnD 전시상품 상품연결정보 삭제
     *
     * @param map
     * @return
     * @throws Exception
     */
    int deleteRndDispOptnDtlMappAll(Map<String, Object> map) throws Exception;

    /**
     * RnD 전시 대표상품 ID 카운트 조회
     *
     * @param prdClcd   상품분류코드
     * @param reprPrdId 대표상품ID
     * @return boolean
     */
    boolean existsRndDispReprPrdId(String prdClcd, String reprPrdId, String dispGrpId) throws Exception;

    /**
     * 상품군 옵션값 조회
     *
     * @param searchMap
     * @return List
     * @throws Exception
     */
    List<Map<String, Object>> selectCategoryOptionValues(Map<String, Object> searchMap) throws Exception;

}