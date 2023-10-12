/*------------------------------------------------------------------------------
 * NAME : SrsGrpPrdMngDao.java
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
 * @title   SrsGrpPrdMngDao
 * @@desc   R&D 시리즈그룹 상품 관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface SrsGrpPrdMngDao {

    /**
     * R&D 시리즈그룹 상품 관리 리스트 조회(selectSrsGrpPrdMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectSrsGrpPrdMng(Map<String, Object> map) throws Exception;

    /**
     * R&D 시리즈그룹 상품 관리 리스트 중복 체크조회(selectSrsGrpPrdMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectSrsGrpPrdMngCount(Map<String, Object> map) throws Exception;
    
    /**
     * 기준상품 중복 체크 조회(selectSeriesBssTemp)
     * @param input
     * @return
     * @throws Exception
     */
    int selectSeriesBssTemp(Map<String, Object> map) throws Exception;
    
    /**
     * 그룹구분 시리즈(10,20)(selectSeriesTemp01)
     * @param input
     * @return
     * @throws Exception
     */
  
    List<Map<String, Object>> selectSeriesTemp01(Map<String, Object> searchMap) throws Exception;
    
    
    /**
     * 그룹구분 연관(30) (selectSeriesTemp02)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map<String, Object>> selectSeriesTemp02(Map<String, Object> searchMap) throws Exception;
	
	/**
     * 상품그룹ID 체번 (selectPrdGrpId)
     * @param input
     * @return
     * @throws Exception
     */
	String selectPrdGrpId(Map<String, Object> commandMap) throws Exception;
	
	/**
     * 상품그룹기본 저장 (insertProductSeriesBasis)
     * @param input
     * @return
     * @throws Exception
     */
	int insertProductSeriesBasis(Map<String, Object> commandMap) throws Exception;
	
	/**
     * 상품그룹기본 수정 (updateProductSeriesBasis)
     * @param input
     * @return
     * @throws Exception
     */
	int updateProductSeriesBasis(Map<String, Object> commandMap) throws Exception;
	
	/**
     * 상품그룹상세 저장 (insertProductSeriesDtl)
     * @param input
     * @return
     * @throws Exception
     */
	int insertProductSeriesDtl(Map<String, Object> saveMap) throws Exception;
	/**
     * 상품그룹상세 수정 (updateProductSeriesDtl)
     * @param input
     * @return
     * @throws Exception
     */
	int updateProductSeriesDtl(Map<String, Object> saveMap) throws Exception;
	/**
     * 상품그룹상세 삭제 (updateProductSeriesDtl)
     * @param input
     * @return
     * @throws Exception
     */
	int deleteProductSeriesDtl(Map<String, Object> saveMap) throws Exception;
	
	/**
     * 상품그룹 메인 상세 조회(selectProductSeries)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map<String,Object>> selectProductSeriesBasis(Map<String, Object> searchMap) throws Exception;
	
    List<Map<String,Object>> selectProductSeriesDtl01(Map<String, Object> searchMap) throws Exception;

    List<Map<String,Object>> selectProductSeriesDtl02(Map<String, Object> searchMap) throws Exception;
	    
    /**
     * 시리즈그룹 조회
     * @param searchMap
     * @return
     * @throws Exception
     */
    List<Map<String, Object>> selectSeriesGroupListToAttrSync(Map<String, Object> searchMap) throws Exception;
    
    /**
     * 상품속성 동기화
     * @param searchMap
     * @return
     * @throws Exception
     */
	int updateRndProductAttrToAttrSync(Map<String, Object> searchMap) throws Exception;
}