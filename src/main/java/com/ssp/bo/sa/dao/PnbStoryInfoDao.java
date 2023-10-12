package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title PNB스토리 Dao
 * @package com.ssp.bo.sa.dao
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.30.
 * @version 1.0
 * @see PnbStoryInfoDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.30.	박진원		최초작성
 * 2023.02.17.	87minho		PNB스토리 리뉴얼
 */
public interface PnbStoryInfoDao
{
	/** PNB스토리 테마 목록 조회 */
    List<Map<String, Object>> selectPnbStoryThmList(Map<String, Object> searchMap) throws Exception;
    
	/** PNB스토리 테마 전시순서 수정 */
	int updateThmDispSo(Map<String, Object> paramMap) throws Exception;
	
	/** PNB스토리 테마 정보 등록 */
	int insertThmInfo(Map<String, Object> paramMap) throws Exception;
	
	/** PNB스토리 테마 정보 수정 */
	int updateThmInfo(Map<String, Object> paramMap) throws Exception;
	
	/** PNB스토리 테마 아이템 전시 순서 수정 */
	int updatePnbStoryDispSo(Map<String, Object> paramMap) throws Exception;	
	
	/** PNB스토리 테마 정보 삭제 */
	int deleteThmInfo(Map<String, Object> paramMap) throws Exception;
	
	/** PNB스토리 시퀀스 값 조회 */
    Map<String, Object> selectPnbStoryInfoSeq(Map<String, Object> savePnbStoryInfoMap) throws Exception;
	
    /** PNB스토리 기본 정보 등록 */
    int insertPnbStoryInfo(Map<String, Object> savePnbStoryInfoMap) throws Exception;

    /** PNB스토리 기본 정보 수정 */
    int updatePnbStoryInfo(Map<String, Object> savePnbStoryInfoMap) throws Exception;
    
    /** PNB스토리 카테고리 상세 */
    List<Map<String, Object>> selectPnbStoryCatgDtlList(Map<String, Object> searchMap) throws Exception;

	/** PNB스토리 카테고리 상품 상세 */
    List<Map<String, Object>> selectPnbStoryCatgPrdDtlList(Map<String, Object> searchMap) throws Exception;

    /** PNB스토리 정보 삭제 */
    int deletePnbStoryInfo(Map<String, Object> searchMap) throws Exception;
    
    /** PNB스토리 카테고리 정보 삭제 */
    int deletePnbStoryCatgDtl(Map<String, Object> savePnbStoryCatgDtlMap) throws Exception;

    /** PNB스토리 카테고리 상품 정보 삭제 */
    int deletePnbStoryCatgPrdDtl(Map<String, Object> savePnbStoryCatgPrdDtlMap) throws Exception;
    
	/** PNB스토리 카테고리 시퀀스 값 조회 */
    String selectPnbStoryCatgDtlSeq(Map<String, Object> savePnbStoryCatgDtlMap) throws Exception;	

    /** PNB스토리 카테고리 정보 등록 */
    int insertPnbStoryCatgDtl(Map<String, Object> savePnbStoryCatgDtlMap) throws Exception;

    /** PNB스토리 카테고리 정보 수정 */
    int updatePnbStoryCatgDtl(Map<String, Object> savePnbStoryCatgDtlMap) throws Exception;

    /** PNB스토리 카테고리 상품 정보 등록 */
    int insertPnbStoryCatgPrdDtl(Map<String, Object> savePnbStoryCatgPrdDtlMap) throws Exception;
    
    /** PNB스토리 엑셀 다운 목록 조회 */
    List<Map<String, Object>> selectExcelPnbStoryList(Map<String, Object> searchMap) throws Exception;
    
}
