package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 배지
 * @package com.ssp.bo.sa.dao
 * </pre>
 * @author
 * @since 2022. 03. 02.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.02.	87minho		최초작성
 */
public interface MainPrdDao {

	/** 메인상품 목록 조회 */
	List<Map<String, Object>> selectMainPrdList(Map<String, Object> searchMap) throws Exception;

	/** 메인상품 상세 목록 총 합계 조회 */
	int selectMainPrdDtlListCnt(Map<String, Object> searchMap) throws Exception;

	/** 메인상품 상세 목록 조회 */
	List<Map<String, Object>> selectMainPrdDtlList(Map<String, Object> searchMap) throws Exception;

	/** 메인상품 상세 중복 조회 */
	List<Map<String, Object>> selectMainPrdIdDuplCheckList(Map<String, Object> saveMap) throws Exception;

	/** 메인상품 저장 */
	int insertMainPrd(Map<String, Object> saveMap) throws Exception;

	/** 메인상품 수정 */
	int updateMainPrd(Map<String, Object> saveMap) throws Exception;

	/** 메인상품 상세 전시 순서 셋팅 위한 게시구분별(+운영단위별) 총 합계 조회 */
	int selectMainPrdDtlDispSo(Map<String, Object> saveMap) throws Exception;

	/** 메인상품 게시구분:전체 개수 조회 */
	int selectMainPrdSprAllCnt(Map<String, Object> chkMap) throws Exception;

	/** 메인상품 상세 순서 저장 */
	int updateMainPrdDtlSo(Map<String, Object> saveMap) throws Exception;

	/** 메인상품 상세 등록 */
	int insertMainPrdDtl(Map<String, Object> saveMap) throws Exception;

	/** 메인상품 상세 삭제 */
	int deleteMainPrdDtl(Map<String, Object> deleteMap) throws Exception;

	/** 메인상품 삭제 */
	int deleteMainPrd(Map<String, Object> deleteMap) throws Exception;

	/** 메인상품 상세 삭제(메인상품 삭제 뒤 상세 삭제) */
	int deleteMainPrdRelDtl(Map<String, Object> deleteMap) throws Exception;
}
