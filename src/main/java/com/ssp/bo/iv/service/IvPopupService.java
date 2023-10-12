package com.ssp.bo.iv.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

public interface IvPopupService {
	
	/** 담당자 조회 카운트 */
	public int selectOperatorPopupListCount(Map<String, Object> commandMap) throws Exception;

	/** 담당자 조회  */
	public List<Map<String, Object>> selectOperatorPopupList(Map<String, Object> commandMap) throws Exception;
	
	// [팝업]팀 조회 옵션 설정
	NexacroResult selectMbrOprtrOrgInfoList(Map<String,Object> searchInfo) throws Exception;

}
