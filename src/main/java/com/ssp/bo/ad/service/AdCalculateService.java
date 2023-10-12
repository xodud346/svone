package com.ssp.bo.ad.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

public interface AdCalculateService {

	NexacroResult selectCalculateList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception;
	NexacroResult selectNoCalculateList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception;
}
