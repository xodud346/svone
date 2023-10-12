package com.ssp.bo.sa.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title 프로모션 팝업 서비스
 * @package com.ssp.bo.sa.service
 * </pre>
 * @author
 * @since 2023. 01. 26.
 * @version 1.0
 * @see PmtPopupService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.01.26.		87minho	최초작성
 */
public interface PmtPopupService {

	/** 프로모션 팝업 노출 목록 조회 */
	NexacroResult selectPmtPopupList(Map<String, Object> paramMap, OdOrderComm odComm) throws Exception;
	
	/** 프로모션 팝업 순서 저장 */
	NexacroResult updatePmtPopupDispSo(List<Map<String, Object>> paramMap) throws Exception;
	
	/** 프로모션 팝업 상세 조회 */
	NexacroResult selectPmtPopupInfo(Map<String, Object> paramMap) throws Exception;
	
	/** 프로모션 팝업 저장 */
	NexacroResult savePmtPopupInfo(Map<String, Object> paramMap, List<Map<String, Object>> oprUnitInfoList, List<Map<String, Object>> aplyDtlList
			, List<Map<String, Object>> excptDtlList, List<Map<String, Object>> prmDtlList) throws Exception;
	
	/** 프로모션 팝업 삭제 */
	NexacroResult deletePmtPopupInfo(Map<String, Object> deleteMap) throws Exception;
}
