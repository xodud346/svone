package com.ssp.bo.pc.service.impl;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pc.service.PcBatchService;
import com.ssp.core.pc.dao.PcBatchDao;


@Service("pcBatchService")
public class PcBatchServiceImpl implements PcBatchService{
    private final Logger log = LoggerFactory.getLogger(PcBatchServiceImpl.class);

	@Autowired
	private PcBatchDao pcBatchDao;
	

	@Override
	public NexacroResult PrcBatch(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		NexacroResult result = new NexacroResult();
		
		searchMap.put("BatRun", "2");

		Map<String, Object> detail = pcBatchDao.savePrcBat(searchMap);
		
		result.addDataSet("ds_prcBatch", detail);
		return result;
	}

	@Override
	public NexacroResult DpBatch(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		NexacroResult result = new NexacroResult();
		
		searchMap.put("BatRun", "1");

		Map<String, Object> detail = pcBatchDao.saveDispBat(searchMap);

		result.addDataSet("ds_dpBatch", detail);
		return result;
	}
	
	@Override
	public NexacroResult DayBatch(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		NexacroResult result = new NexacroResult();
		
		searchMap.put("BatRun", "1");

		Map<String, Object> detail = pcBatchDao.savePrcBat(searchMap);

		result.addDataSet("ds_dayBatch", detail);
		return result;
	}

}
