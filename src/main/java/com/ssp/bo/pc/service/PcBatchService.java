package com.ssp.bo.pc.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

public interface PcBatchService {
	public NexacroResult PrcBatch(Map<String, Object> searchMap) throws Exception;
	public NexacroResult DpBatch(Map<String, Object> searchMap) throws Exception;
	public NexacroResult DayBatch(Map<String, Object> searchMap) throws Exception;
	
	
	
}
