package com.ssp.bo.iv.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

public interface IvInventoryService {

	NexacroResult selectComCdList(Map<String, Object> searchMap) throws Exception;
	NexacroResult selectInventoryList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception;
    NexacroResult selectInventoryDetail(Map<String, Object> searchMap) throws Exception;
}
