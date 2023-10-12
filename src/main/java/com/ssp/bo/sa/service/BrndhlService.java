package com.ssp.bo.sa.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title 전문관 서비스
 * @package com.ssp.bo.sa.service
 * </pre>
 * @author
 * @since 2023. 02. 20.
 * @version 1.0
 * @see BrndhlService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.03.14.		87minho	최초작성
 */
public interface BrndhlService {

	/** 전문관 목록 조회 */
	NexacroResult selectBrndhlList(Map<String, Object> paramMap, OdOrderComm odComm) throws Exception;
	
	/** 전문관 순서 저장 */
	NexacroResult updateBrndhlDispSo(List<Map<String, Object>> paramMap) throws Exception;
	
	/** 전문관 상세 조회 */
	NexacroResult selectBrndhlInfo(Map<String, Object> paramMap) throws Exception;
    
	/** 전문관 저장 */
	NexacroResult saveBrndhlInfo(Map<String, Object> paramMap, List<Map<String, Object>> oprUnitInfoList
			, List<Map<String, Object>> saveBrndhlCatgDtlMapList, List<Map<String, Object>> saveBrndhlCatgPrdDtlMapList) throws Exception;
	
	/** 전문관 삭제 */
	NexacroResult deleteBrndhlInfo(Map<String, Object> deleteMap) throws Exception;
	
	/** 전문관 엑셀 다운 목록 조회 */
	NexacroResult selectExcelBrndhlList(Map<String, Object> paramMap) throws Exception;
}
