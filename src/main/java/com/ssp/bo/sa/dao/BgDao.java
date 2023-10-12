package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 배지
 * @package com.ssp.bo.sa.dao
 * </pre>
 * @author
 * @since 2022. 02. 22.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.22.	87minho		최초작성
 */
public interface BgDao {

	/** 배지 목록 조회 */
	List<Map<String, Object>> selectBgList(Map<String, Object> searchMap) throws Exception;

	/** 배지 목록 총 개수 */
	int selectBgListCnt(Map<String, Object> searchMap) throws Exception;

	/** 배지 상세 조회 */
	Map<String, Object> selectBgDetail(Map<String, Object> searchMap) throws Exception;

	/** 배지 상세 등록 */
	int insertBgDetail(Map<String, Object> insertMap) throws Exception;

	/** 배지 상세 수정 */
	int updateBgDetail(Map<String, Object> updateMap) throws Exception;

	/** 상품에 배지 적용된 개수 조회 */
	Map<String, Object> selectBgPrdAplyCnt(Map<String, Object> deleteMap) throws Exception;

	/** 배지 상세 삭제 */
	int deleteBgDetail(Map<String, Object> deleteMap) throws Exception;

}
