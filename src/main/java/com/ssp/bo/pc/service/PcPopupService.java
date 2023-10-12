package com.ssp.bo.pc.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title
 * @package com.ssp.bo.pc.service
 * </pre>
 * @author scvgo17
 * @since 2022. 01. 18.
 * @version 1.0
 * @see PcPopupService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface PcPopupService {

	NexacroResult selectPrcCondList(Map<String, Object> commandMap) throws Exception;
	
	NexacroResult selectCprtcpOcarTrnsreList(Map<String, Object> commandMap) throws Exception;
	
	NexacroResult selectPrdQtyHstList(Map<String, Object> commandMap) throws Exception;
	
	NexacroResult selectPrdDlcstHstList(Map<String, Object> commandMap) throws Exception;
	
	NexacroResult selectSalsDsgnSalsprcHstList(Map<String, Object> commandMap) throws Exception;
	
	NexacroResult updateNewPrdReqPrcExcept(Map<String, Object> insertMap,List<Map<String, Object>> insertListMap) throws Exception;
	
	NexacroResult selectPrcTrendList(Map<String, Object> commandMap) throws Exception;
	
	NexacroResult selectPrcHistoryList(Map<String, Object> commandMap) throws Exception;
	
	NexacroResult selectDispHistoryList(Map<String, Object> commandMap) throws Exception;
	
	Map<String, Object> updateNewPrdReqPrc(Map<String, Object> insertMap, OdOrderComm odComm) throws Exception;

}
