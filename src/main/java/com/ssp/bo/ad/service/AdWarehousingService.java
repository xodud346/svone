package com.ssp.bo.ad.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

public interface AdWarehousingService {

	NexacroResult selectComCdList(Map<String, Object> searchMap) throws Exception;
	NexacroResult selectWarehousingList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception;

    NexacroResult updateWarehousingFinish(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception;

}
