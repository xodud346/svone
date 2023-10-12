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
 * @see PcPrdProcStbService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *
 */
public interface PcPrdProcStbService {

	NexacroResult selectPcPubPrdProcStbList(Map<String, Object> commandMap) throws Exception;

	int insertNewPrdReqPrc(Map<String, Object> commandMap) throws Exception;
	
	NexacroResult insertPcPrdProcStb(List<Map<String,Object>> commandMapList,OdOrderComm odComm) throws Exception;
}
