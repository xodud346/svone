package com.ssp.bo.sa.service;

import java.util.Map;


import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * 영업마케팅 엑셀다운로드  SaExcelDownService
 * YHK
 * 2022.12.13.
 */

public interface SaExcelDownService {
					
	/** 기획전 목록 대용량 엑셀 다운로드 */
	public NexacroResult createLargeExcelexhbnInfo(Map<String, Object> saveMap, OdOrderComm odComm) throws Exception;
	
	/** 프리패키지 목록 대용량 엑셀 다운로드 */
	public NexacroResult createLargeExcelprePkgInfo(Map<String, Object> saveMap, OdOrderComm odComm) throws Exception;
	
	/** 메인상품 목록 대용량 엑셀 다운로드 */
	public NexacroResult createLargeExcelmainPrdInfo(Map<String, Object> saveMap, OdOrderComm odComm) throws Exception;
	
	/** EDM 타겟 관리 대용량 엑셀 다운로드 */
	public NexacroResult createLargeExcelEdmInfo(Map<String, Object> saveMap, OdOrderComm odComm) throws Exception;
}
