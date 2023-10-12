package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 배지
 * @package com.ssp.bo.sa.dao
 * </pre>
 * @author
 * @since 2022. 03. 14.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.14.	87minho		최초작성
 */
public interface BnrDao {

	/** 배너 노출 목록 조회 */
	List<Map<String, Object>> selectBnrExpsList(Map<String, Object> searchMap) throws Exception;

	/** 배너 목록 총 합계 조회 */
	int selectBnrListCnt(Map<String, Object> searchMap) throws Exception;

	/** 배너 목록 조회 */
	List<Map<String, Object>> selectBnrList(Map<String, Object> searchMap) throws Exception;

	/** 배너 순서 저장 */
	int updateBnrDispSo(Map<String, Object> saveMap) throws Exception;

	/** 배너 노출 정보 삭제 */
	int deleteBnrExps(Map<String, Object> deleteMap) throws Exception;

	/** 배너 삭제(배너 노출정보 삭제 뒤 배너 정보 삭제) */
	int deleteBnrExpsRelBnr(Map<String, Object> deleteMap) throws Exception;

	/** 배너 상세 조회 */
	Map<String, Object> selectBnrInfo(Map<String, Object> searchMap) throws Exception;

	/** 배너 운영단위 리스트 조회 */
	List<Map<String, Object>> selectBnrOprUnitList(Map<String, Object> searchMap) throws Exception;

	/** 배너 노출정보 등록 */
	int insertBnrExpsInfo(Map<String, Object> saveMap) throws Exception;

	/** 배너 등록 */
	int insertBnrInfo(Map<String, Object> saveMap) throws Exception;

	/** 배너 수정 */
	int updateBnrInfo(Map<String, Object> saveMap) throws Exception;

	/** 배너 운영단위 등록 */
	int insertBnrOprUnit(Map<String, Object> saveMap) throws Exception;

	/** 배너 운영단위 삭제 */
	int deleteBnrOprUnit(Map<String, Object> saveMap) throws Exception;

	/** 배너 상품 삭제 */
	int deleteBnrPrd(Map<String, Object> deleteMap) throws Exception;

	/** 배너 상품 등록 */
	int insertBnrPrdDtl(Map<String, Object> saveMap) throws Exception;

	/** 배너 삭제 */
	int deleteBnrInfo(Map<String, Object> deleteMap) throws Exception;

	/** 인기카테고리 배너 목록 조회 */
	List<Map<String, Object>> selectPprCatgBnrList(Map<String, Object> searchMap) throws Exception;

	/** 인기카테고리 배너 상세 조회 */
	Map<String, Object> selectPprCatgBnrInfo(Map<String, Object> searchMap) throws Exception;

	/** 인기카테고리 배너 제조사 조회 */
	List<Map<String, Object>> selectPprCatgBnrMnfrList(Map<String, Object> searchMap) throws Exception;

	/** 인기카테고리 배너 수정 */
	int updatePprCatgBnrInfo(Map<String, Object> deleteMap) throws Exception;

	/** 인기카테고리 배너 제조사 삭제 */
	int deletePprCatgBnrMnfrInfo(Map<String, Object> deleteMap) throws Exception;

	/** 인기카테고리 배너 제조사 등록 */
	int insertPprCatgBnrMnfrInfo(Map<String, Object> deleteMap) throws Exception;
}
