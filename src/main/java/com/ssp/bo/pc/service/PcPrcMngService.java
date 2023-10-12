package com.ssp.bo.pc.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

public interface PcPrcMngService {
	public NexacroResult selectList(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception;
	public NexacroResult selectBzplcList(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception;
	public NexacroResult selectPrcHistList(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception;

	public NexacroResult selectPubPrcList(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception;

    public NexacroResult getPcPrdReq(Map<String, Object> searchMap) throws Exception;
	public List<Map<String, Object>> getExhbnInfo(Map<String, Object> searchMap) throws Exception;
	public List<Map<String, Object>> getPcPrdQty(Map<String, Object> searchMap) throws Exception;
	public List<Map<String, Object>> getPcPrdDlcst(Map<String, Object> searchMap) throws Exception;
	public NexacroResult getPcPrdPrc(Map<String, Object> searchMap) throws Exception;

	public List<Map<String, Object>> getPrcList(Map<String, Object> searchMap) throws Exception;
	public List<Map<String, Object>> getPcPrdPrcList(Map<String, Object> searchMap) throws Exception;
	public List<Map<String, Object>> getPcPrdPrcSimulList(Map<String, Object> searchMap) throws Exception;

	public NexacroResult getNewItemInfo(Map<String, Object> searchMap) throws Exception;

}
