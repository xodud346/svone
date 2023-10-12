package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 기획전 Dao
 * @package com.ssp.bo.sa.dao
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.04.
 * @version 1.0
 * @see ExhbnInfoDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.04.	박진원		최초작성
 */
public interface ExhbnInfoDao
{
	/** 기획전 목록 조회 */
    List<Map<String, Object>> selectExhbnInfoList(Map<String, Object> searchMap) throws Exception;
    
    /** SSP-2111 : 엑셀용 기획전 목록 및 상세 조회 */
    List<Map<String,Object>> selectExhbnInfoDtlForExcel(Map<String, Object> searchMap) throws Exception;

	/** 기획전 목록 건수 조회 */
	int selectExhbnInfoListCount(Map<String, Object> searchMap) throws Exception;	

    /** 기획전 전시순서 수정 */
    int updateExhbnInfoOrder(Map<String, Object> saveExhbnInfoMap) throws Exception;

	/** 기획전 상세 */
    List<Map<String, Object>> selectExhbnInfo(Map<String, Object> searchMap) throws Exception;

	/** 기획전 운영단위상세 */
    List<Map<String, Object>> selectExhbnOprUnitList(Map<String, Object> searchMap) throws Exception;

	/** 기획전 기본 상품 카테고리상세 */
    List<Map<String, Object>> selectExhbnCatgDtlList(Map<String, Object> searchMap) throws Exception;

	/** 기획전 메인 노출 상품/기본 상품 상세 */
    List<Map<String, Object>> selectExhbnCatgPrdDtlList(Map<String, Object> searchMap) throws Exception;
    
    /** 기획전 정보 삭제 */
    int deleteExhbnInfo(Map<String, Object> searchMap) throws Exception;

    /** 기획전 운영단위 정보 삭제 (전체) */
    int deleteExhbnOprUnitAll(Map<String, Object> searchMap) throws Exception;

    /** 기획전 기본 상품 카테고리 정보 삭 (전체)제 */
    int deleteExhbnCatgDtlAll(Map<String, Object> searchMap) throws Exception;

    /** 기획전 메인 노출 상품/기본 상품 정보 삭제 (전체) */
    int deleteExhbnCatgPrdDtlAll(Map<String, Object> searchMap) throws Exception;

	/** 기획전 시퀀스 값 조회 */
    Map<String, Object> selectExhbnInfoSeq(Map<String, Object> saveExhbnInfoMap) throws Exception;	

    /** 기획전 기본 정보 등록 */
    int insertExhbnInfo(Map<String, Object> saveExhbnInfoMap) throws Exception;

    /** 기획전 기본 정보 수정 */
    int updateExhbnInfo(Map<String, Object> saveExhbnInfoMap) throws Exception;

    /** 기획전 운영단위 정보 삭제 */
    int deleteExhbnOprUnit(Map<String, Object> saveExhbnOprUnitMap) throws Exception;

    /** 기획전 운영단위 정보 등록 */
    int insertExhbnOprUnit(Map<String, Object> saveExhbnOprUnitMap) throws Exception;

    /** 기획전 메인 노출 상품/기본 상품 정보 삭제 */
    int deleteExhbnCatgPrdDtl(Map<String, Object> saveExhbnCatgPrdDtlMap) throws Exception;

    /** 기획전 메인 노출 상품/기본 상품 정보 등록 */
    int insertExhbnCatgPrdDtl(Map<String, Object> saveExhbnCatgPrdDtlMap) throws Exception;

    /** 기획전 기본 상품 카테고리 정보 삭제 */
    int deleteExhbnCatgDtl(Map<String, Object> saveExhbnCatgDtlMap) throws Exception;

	/** 기획전 기본 상품 카테고리 시퀀스 값 조회 */
    Map<String, Object> selectExhbnCatgDtlSeq(Map<String, Object> saveExhbnCatgDtlMap) throws Exception;	

    /** 기획전 카테고리 정보 등록 */
    int insertExhbnCatgDtl(Map<String, Object> saveExhbnCatgDtlMap) throws Exception;

    /** 기획전 카테고리 정보 수정 */
    int updateExhbnCatgDtl(Map<String, Object> saveExhbnCatgDtlMap) throws Exception;
}
