package com.ssp.bo.sa.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * @title 메타 태그 정보 서비스
 * @author yuno
 * @since 2023.05.23
 * @version 1.0
 * ==============변경 내역 ===============
 * 날짜			변경자			내용
 * -------------------------------------
 * 2023.05.23   김윤호			최초작성
 */
public interface MetaTagInfoService {
	
	/** 메타 태그 정보 리스트 조회 */
	NexacroResult selectMetaTagInfoList(Map<String, Object> dataMap) throws Exception;
	
	/** 메타 태그 정보 저장 */
	NexacroResult saveMetaTagInfo(Map<String, Object> dataMap) throws Exception;

	/** 메타 태그 정보 상세 */
	NexacroResult selectMetaTagInfo(Map<String, Object> dataMap) throws Exception;

	/** 메타 태그 정보 삭제 */
	NexacroResult deleteMetaTagInfo(Map<String, Object> dataMap) throws Exception;
}







	
	