package com.ssp.bo.sa.service;

import java.util.*;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;


/**
 * EDM 타겟 관리 EdmInfoService
 * YHK
 * 2022.12.13.
 */

public interface EdmInfoService {
	
	/** EDM 타겟 관리 목록 조회 */
	public NexacroResult selectEdmInfoList(Map<String, Object> searchMap) throws Exception;
	
	/** EDM 타겟 관리 등록 */
	public NexacroResult insertEdmInfo(Map<String, Object> saveMap, OdOrderComm odComm) throws Exception;
	
	
}
