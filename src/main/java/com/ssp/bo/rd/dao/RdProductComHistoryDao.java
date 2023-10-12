/*------------------------------------------------------------------------------
 * NAME : RdProductComHistoryDao.java
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
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   RdProductComHistoryDao
 * @@desc    Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.06.22
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.06.22			       최초작성
 */
public interface RdProductComHistoryDao {

    
	
    /**==================== (구매/상품)담당자 관리 히스토리 시작 ===================**/
	/**
     * (구매/상품)담당자 관리 히스트로 카운트 조회(selectPersonHistoryCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPersonHistoryCount(Map<String, Object> map) throws Exception;
	/**
     * (구매/상품)담당자 관리 히스트로 리스트(selectPersonHistory)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPersonHistory(Map<String, Object> map) throws Exception;
    
    /**==================== (구매/상품)담당자 관리 히스토리 종료 ===================**/
    /**==================== 상품 관리 히스토리 시작  ===============================**/
    /**
     * 상품 관리 히스토리 카운트 조회(selectProductDetailHistoryCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectProductDetailHistoryCount(Map<String, Object> map) throws Exception;
	/**
     * 상품 관리 히스토리 리스트(selectProductDetailHistory)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectProductDetailHistory(Map<String, Object> map) throws Exception;

    /**==================== 상품 관리 히스토리 종료  ================================**/
    /**==================== 시리즈 그룹상품 관리 히스토리 시작  =====================**/
    /**
     * 시리즈 그룹상품 관리 히스토리 카운트 조회(selectSeriesHistoryCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectSeriesHistoryCount(Map<String, Object> map) throws Exception;
	/**
     * 시리즈 그룹상품 관리 히스토리 리스트(selectSeriesHistory)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectSeriesHistory(Map<String, Object> map) throws Exception;

    /**==================== 시리즈 그룹상품 관리 히스토리 종료  =======================**/
    /**==================== 카테고리 관리 히스토리 시작  ==============================**/
    /**
     * 카테고리 관리 히스토리 카운트 조회(selectCategoryHistoryCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectCategoryHistoryCount(Map<String, Object> map) throws Exception;
	/**
     * 카테고리 관리 히스토리 리스트(selectCategoryHistory)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCategoryHistory(Map<String, Object> map) throws Exception;

    /**==================== 카테고리 관리 히스토리 종료  ==============================**/
        
    /**==================== 화학물질 관리 히스토리 시작  ==================================**/
    /**
     * 화학물질 관리 히스토리 카운트 조회(selectChmMtlInfoHistoryCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectChmMtlInfoHistoryCount(Map<String, Object> map) throws Exception;
	/**
     * 화학물질 관리 히스토리 리스트(selectChmMtlInfoHistory)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlInfoHistory(Map<String, Object> map) throws Exception;

    /**==================== 화학물질 관리 히스토리 종료  ====================================**/
    
    /**
     *  상품 공통 히스토리 뷰어 조회(selectRdHstDtlHtmlInfo)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectRdHstDtlHtmlInfo(Map<String, Object> map) throws Exception;
    
    /**
     * 화학물질 상세 히스토리 조회(selectRdProductComDtlHistory)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectRdProductComDtlHistory(Map<String, Object> map) throws Exception;
}