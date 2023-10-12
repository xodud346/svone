package com.ssp.bo.pr.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 시리즈그룹상품관리 
 * @package com.ssp.bo.pr.dao
 * </pre>
 * @author 이원준
 * @since 2022.03.25
 * @version 1.0
 * @see PrProductSeriesDao
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 
 */
public interface PrProductSeriesDao {

	/** 시리즈 상품그룹 목록 조회 */
    List<Map<String, Object>> selectProductSeriesList(Map<String, Object> searchMap) throws Exception;

    /** 시리즈 상품그룹 목록 카운터 */
    int selectProductSeriesCount(Map<String, Object> searchMap) throws Exception;

    /** 시리즈 상품그룹 기본 조회 */
    List<Map<String, Object>> selectProductSeriesBasis(Map<String, Object> searchMap) throws Exception;
    
    /** 시리즈 상품그룹 상세 조회(동기화/비동기화) */
    List<Map<String, Object>> selectProductSeriesDtl01(Map<String, Object> searchMap) throws Exception;

    /** 시리즈 상품그룹 상세 조회(연관) */
    List<Map<String, Object>> selectProductSeriesDtl02(Map<String, Object> searchMap) throws Exception;

    /** 상품그룹기본 등록 */
    int insertProductSeriesBasis(Map<String, Object> commandMap) throws Exception;

    /** 상품그룹기본 수정 */
    int updateProductSeriesBasis(Map<String, Object> commandMap) throws Exception;

    /** 상품그룹상세 등록 */
    int insertProductSeriesDtl(Map<String, Object> saveMap) throws Exception;

    /** 상품그룹상세 수정 */
    int updateProductSeriesDtl(Map<String, Object> saveMap) throws Exception;

    /** 상품그룹상세 삭제 */
    int deleteProductSeriesDtl(Map<String, Object> saveMap) throws Exception;

    /** 그룹상품추가 조회(동기화/비동기화) */
    List<Map<String, Object>> selectSeriesTemp01(Map<String, Object> searchMap) throws Exception;

    /** 그룹상품추가 조회(연관) */
    List<Map<String, Object>> selectSeriesTemp02(Map<String, Object> searchMap) throws Exception;

    /** 그룹ID 생성 */
    String selectPrdGrpId(Map<String, Object> commandMap) throws Exception;

    /** 기준상품 중복 체크 */
    int selectSeriesBssTmp(Map<String, Object> searchMap) throws Exception;

}
