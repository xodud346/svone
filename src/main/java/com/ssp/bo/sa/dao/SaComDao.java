package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 영업마케팅 공통 Dao
 * @package com.ssp.bo.sa.dao
 * </pre>
 *
 * @author 87minho
 * @since 2022.03.07.
 * @version 1.0
 * @see SaComDao
 * =================== 변경 내역 ==================
 * 날짜			변경자	내용
 * ------------------------------------------------
 * 2022.03.07.	87minho	최초작성
 * 2022.04.11.	박진원	상품, 운영단위 벨리데이션 체크
 */
public interface SaComDao
{
	/** 상품 상세 조회 */
	Map<String, Object> selectPrdInfo(Map<String, Object> searchMap) throws Exception;

	/** 상품ID 유효성 검사 */
	List<Map<String, Object>> selectPrdIdCheckList(Map<String, Object> searchMap) throws Exception;

	/** 운영단위ID 유효성 검사 */
	List<Map<String, Object>> selectOprUnitCheckList(Map<String, Object> searchMap) throws Exception;

	/** 상품군ID 유효성 검사 */
	List<Map<String, Object>> selectPrdClcdCheckList(Map<String, Object> searchMap) throws Exception;








}
