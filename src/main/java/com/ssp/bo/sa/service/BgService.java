package com.ssp.bo.sa.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title 배지 서비스
 * @package com.ssp.bo.sa.service
 * </pre>
 * @author
 * @since 2022. 02. 22.
 * @version 1.0
 * @see BgService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.22.		87minho	최초작성
 */
public interface BgService {

	/** 배지 목록 조회 */
	NexacroResult selectBgList(Map<String, Object> searchMap) throws Exception;

	/** 배지 상세 조회 */
	NexacroResult selectBgDetail(Map<String, Object> searchMap) throws Exception;

	/** 배지 상세 등록 */
	NexacroResult insertBgDetail(Map<String, Object> insertMap) throws Exception;

	/** 배지 상세 수정 */
	NexacroResult updateBgDetail(Map<String, Object> updateMap) throws Exception;

	/** 상품에 배지 적용된 개수 조회 */
	NexacroResult selectBgPrdAplyCnt(Map<String, Object> deleteMap) throws Exception;

	/** 배지 상세 삭제 */
	NexacroResult deleteBgDetail(Map<String, Object> deleteMap) throws Exception;
}
