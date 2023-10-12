package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 프로모션 팝업 Dao
 * @package com.ssp.bo.sa.dao
 * </pre>
 * @author
 * @since 2023. 01. 26.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.01.26.	87minho		최초작성
 */
public interface PmtPopupDao {

	/** 프로모션 팝업 목록 조회 */
	List<Map<String, Object>> selectPmtPopupList(Map<String, Object> paramMap) throws Exception;

	/** 프로모션 팝업 목록 총 합계 조회 */
	int selectPmtPopupListCnt(Map<String, Object> paramMap) throws Exception;
	
	/** 프로모션 팝업 순서 저장 */
	int updatePmtPopupDispSo(Map<String, Object> paramMap) throws Exception;
	
	/** 프로모션 팝업 상세 조회 */
	Map<String, Object> selectPmtPopupInfo(Map<String, Object> paramMap) throws Exception;

	/** 프로모션 팝업 운영단위 리스트 조회 */
	List<Map<String, Object>> selectPmtPopupOprUnitList(Map<String, Object> paramMap) throws Exception;
	
	/** 프로모션 팝업 적용 상세 리스트 조회 */
	List<Map<String, Object>> selectPmtPopupAplyDtlList(Map<String, Object> paramMap) throws Exception;

	/** 프로모션 팝업 시퀀스 값 조회 */
    String selectPmtPopupSeq(Map<String, Object> paramMap) throws Exception;
    
	/** 프로모션 팝업 등록 */
	int insertPmtPopupDtl(Map<String, Object> paramMap) throws Exception;
	
	/** 프로모션 팝업 수정 */
	int updatePmtPopupDtl(Map<String, Object> paramMap) throws Exception;

	/** 프로모션 팝업 운영단위 등록 */
	int insertPmtPopupOprUnit(Map<String, Object> paramMap) throws Exception;

	/** 프로모션 팝업 삭제 */
	int deletePmtPopupInfo(Map<String, Object> paramMap) throws Exception;
	
	/** 프로모션 팝업 운영단위 삭제 */
	int deletePmtPopupOprUnit(Map<String, Object> paramMap) throws Exception;

	/** 프로모션 팝업 적용 상세 삭제 */
	int deletePmtPopupAplyDtl(Map<String, Object> paramMap) throws Exception;
	
	/** 프로모션 적용 상세 등록 */
	int insertPmtPopupAplyDtl(Map<String, Object> paramMap) throws Exception;
	
	/** 프로모션 적용 상세 수정 */
	int updatePmtPopupAplyDtl(Map<String, Object> paramMap) throws Exception;
	
}
