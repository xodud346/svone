package com.ssp.bo.sa.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title 메인상품 서비스
 * @package com.ssp.bo.sa.service
 * </pre>
 * @author
 * @since 2022. 03. 02.
 * @version 1.0
 * @see MainPrdService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.02.		87minho	최초작성
 */
public interface MainPrdService {

	/** 메인상품 목록 조회 */
	NexacroResult selectMainPrdList(Map<String, Object> searchMap) throws Exception;

	/** 메인상품 상세 목록 조회 */
	NexacroResult selectMainPrdDtlList(Map<String, Object> searchMap, List<Map<String, Object>> oprUnitList, OdOrderComm odComm) throws Exception;

	/** 메인상품 저장 */
	NexacroResult saveMainPrd(Map<String, Object> saveMap) throws Exception;

	/** 메인상품 상세 순서 저장 */
	NexacroResult updateMainPrdDtlSo(List<Map<String, Object>> saveMap, Map<String, Object> chkMap) throws Exception;

	/** 메인상품 상세 등록 */
	NexacroResult insertMainPrdDtl(Map<String, Object> saveMap, List<Map<String, Object>> oprUnitList) throws Exception;

	/** 메인상품 상세 삭제 */
	NexacroResult deleteMainPrdDtl(List<Map<String, Object>> deleteMapList) throws Exception;

	/** 메인상품 삭제 */
	NexacroResult deleteMainPrd(Map<String, Object> deleteMap) throws Exception;

	/** 상품 상세 조회 */
	NexacroResult selectPrdInfo(Map<String, Object> searchMap) throws Exception;

	/** 메인상품ID 유효성 검사 */
	public List<Map<String, Object>> selectMainPrdIdCheckList(Map<String, Object> saveMap, List<Map<String, Object>> oprUnitList, List<Map<String, Object>> searchPrdIdCheckMapList) throws Exception;
}
