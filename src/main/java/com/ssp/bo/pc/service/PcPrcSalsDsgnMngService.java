package com.ssp.bo.pc.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

public interface PcPrcSalsDsgnMngService {
	public NexacroResult searchList(Map<String, Object> searchMap) throws Exception;
	
	public NexacroResult saveInfo(Map<String, Object> searchMap) throws Exception;
	
	public NexacroResult selectPcPrdPubSalsprc(Map<String, Object> searchMap) throws Exception;
}
