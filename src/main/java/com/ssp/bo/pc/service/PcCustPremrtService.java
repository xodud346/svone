package com.ssp.bo.pc.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title 절사관리
 * @package com.ssp.bo.pc.service
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcCustPremrtService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcCustPremrtService {

	NexacroResult selectCustPremrtList(Map<String, Object> commandMap, OdOrderComm odComm) throws Exception;
	
	Map<String, Object> selectCustPremrtDetail(Map<String, Object> commandMap, OdOrderComm odComm) throws Exception;
	
    NexacroResult insertCustPremrt(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception;
    
}
