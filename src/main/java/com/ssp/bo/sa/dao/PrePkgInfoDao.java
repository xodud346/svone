package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 프리패키지 Dao
 * @package com.ssp.bo.sa.dao
 * </pre>
 * 
 * @author 박진원
 * @since 2022.02.25.
 * @version 1.0
 * @see PrePkgInfoDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.22.	박진원		최초작성
 */
public interface PrePkgInfoDao
{	
	/** 프리패키지 시퀀스 값 조회 */
    String selectPrePkgInfoSeq(Map<String, Object> savePrePkgInfoMap) throws Exception;	
    
	/** 프리패키지 목록 조회 */
    List<Map<String, Object>> selectPrePkgInfoList(Map<String, Object> searchMap) throws Exception;
    
    /** 프리패키지 목록 건수 조회 */
	int selectPrePkgInfoListCount(Map<String, Object> searchMap) throws Exception;	
	
	/** 프리패키지 상세 조회*/
    List<Map<String, Object>> selectPrePkgInfo(Map<String, Object> searchMap) throws Exception;
    
    /** 프리패키지 정보 등록 */
    int insertPrePkgInfo(Map<String, Object> savePrePkgInfoMap) throws Exception;

    /** 프리패키지 정보 수정 */
    int updatePrePkgInfo(Map<String, Object> savePrePkgInfoMap) throws Exception;
    
    /** 프리패키지 정보 삭제 */
    int deletePrePkgInfo(Map<String, Object> deleteMap) throws Exception;
    
    /** SSP-2111 : 엑셀용 프리패키지 목록 및 상세 조회 */
	public List<Map<String, Object>> selectPrePkgInfoDtlForExcel(Map<String, List<String>> seqMap) throws Exception;
		
	
	
	/** 프리패키지 산업군상세 조회*/
    List<Map<String, Object>> selectPrePkgIddtDtlList(Map<String, Object> searchMap) throws Exception;
    
    /** 프리패키지 산업군상세 등록 */
    int insertPrePkgIddtDtl(Map<String, Object> savePrePkgIddtDtlMap) throws Exception;

    /** 프리패키지 산업군상세 삭제 */
    int deletePrePkgIddtDtl(Map<String, Object> savePrePkgIddtDtlMap) throws Exception;
    
    
    
    /** 프리패키지 카테고리 시퀀스 조회 */
	String selectPrePkgCatgSeq(Map<String, Object> savePrePkgInfoMap);
	
	/** 프리패키지 카테고리 조회*/
    List<Map<String, Object>> selectPrePkgCatgDtlList(Map<String, Object> searchMap) throws Exception;
    
	/** 프리패키지 카테고리 등록 */
	int insertPrePkgCatgDtl(Map<String, Object> saveMap) throws Exception;
	
	/** 프리패키지 카테고리 삭제 */
	int deletePrePkgCatgDtl(Map<String, Object> saveMap) throws Exception;
	
	/** 프리패키지 카테고리 수정 */
	int updatePrePkgCatgDtl(Map<String, Object> saveMap) throws Exception;
	
	
	
	/** 프리패키지 상품 조회*/
    List<Map<String, Object>> selectPrePkgPrdDtlList(Map<String, Object> searchMap) throws Exception;	   

    /** 프리패키지 상품 정보 등록 */
    int insertPrePkgPrdDtl(Map<String, Object> savePrePkgPrdDtlMap) throws Exception;

    /** 프리패키지 상품 정보 삭제 */
    int deletePrePkgPrdDtl(Map<String, Object> savePrePkgPrdDtlMap) throws Exception;
    
    /** 프리패키지 상품 정보 수정 */
    int updatePrePkgPrdDtl(Map<String, Object> saveMap) throws Exception;
    
    
    
    /** 프리패키지 목록 순서 저장 */
	int updatePrePkgExpsSo(Map<String, Object> saveMap) throws Exception;
	
	/** 프리패키지 상품 순서 저장 */
	int updatePrePkgPrdExpsSo(Map<String, Object> saveMap) throws Exception;

	


	

	

	
	
	
}
