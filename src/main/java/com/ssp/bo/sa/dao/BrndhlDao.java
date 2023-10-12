package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 전문관 Dao
 * @package com.ssp.bo.sa.dao
 * </pre>
 * @author
 * @since 2023. 02. 20.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.03.14.	87minho		최초작성
 */
public interface BrndhlDao {

	/** 전문관 목록 조회 */
	List<Map<String, Object>> selectBrndhlList(Map<String, Object> paramMap) throws Exception;

	/** 전문관 목록 총 합계 조회 */
	int selectBrndhlListCnt(Map<String, Object> paramMap) throws Exception;
	
	/** 전문관 순서 저장 */
	int updateBrndhlDispSo(Map<String, Object> paramMap) throws Exception;
	
	/** 전문관 상세 조회 */
	Map<String, Object> selectBrndhlInfo(Map<String, Object> paramMap) throws Exception;

	/** 전문관 카테고리 상세 */
    List<Map<String, Object>> selectBrndhlCatgDtlList(Map<String, Object> searchMap) throws Exception;

	/** 전문관 카테고리 상품 상세 */
    List<Map<String, Object>> selectBrndhlCatgPrdDtlList(Map<String, Object> searchMap) throws Exception;
    
	/** 전문관 운영단위 리스트 조회 */
	List<Map<String, Object>> selectBrndhlOprUnitList(Map<String, Object> paramMap) throws Exception;
	
	/** 전문관 시퀀스 값 조회 */
    String selectBrndhlSeq(Map<String, Object> paramMap) throws Exception;
    
	/** 전문관 등록 */
	int insertBrndhlDtl(Map<String, Object> paramMap) throws Exception;
	
	/** 전문관 수정 */
	int updateBrndhlDtl(Map<String, Object> paramMap) throws Exception;

	/** 전문관 운영단위 등록 */
	int insertBrndhlOprUnit(Map<String, Object> paramMap) throws Exception;

	/** 전문관 삭제 */
	int deleteBrndhlInfo(Map<String, Object> paramMap) throws Exception;
	
	/** 전문관 운영단위 삭제 */
	int deleteBrndhlOprUnit(Map<String, Object> paramMap) throws Exception;
	
    /** 전문관 카테고리 정보 삭제 */
    int deleteBrndhlCatgDtl(Map<String, Object> saveBrndhlCatgDtlMap) throws Exception;

	/** 전문관 카테고리 시퀀스 값 조회 */
    String selectBrndhlCatgDtlSeq(Map<String, Object> saveBrndhlCatgDtlMap) throws Exception;	

    /** 전문관 카테고리 정보 등록 */
    int insertBrndhlCatgDtl(Map<String, Object> saveBrndhlCatgDtlMap) throws Exception;

    /** 전문관 카테고리 정보 수정 */
    int updateBrndhlCatgDtl(Map<String, Object> saveBrndhlCatgDtlMap) throws Exception;

    /** 전문관 카테고리 상품 정보 삭제 */
    int deleteBrndhlCatgPrdDtl(Map<String, Object> saveBrndhlCatgPrdDtlMap) throws Exception;

    /** 전문관 카테고리 상품 정보 등록 */
    int insertBrndhlCatgPrdDtl(Map<String, Object> saveBrndhlCatgPrdDtlMap) throws Exception;

    /** 전문관 엑셀 다운 목록 조회 */
	List<Map<String, Object>> selectExcelBrndhlList(Map<String, Object> paramMap) throws Exception;
}
