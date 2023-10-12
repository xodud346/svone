package com.ssp.bo.pc.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pc.dao.PcExPrcMngDao;
import com.ssp.bo.pc.dao.PcPrcMngDao;
import com.ssp.bo.pc.dao.PcPrcSalsDsgnMngDao;
import com.ssp.bo.pc.dao.PcSalsDsgnSalsprcDao;
import com.ssp.bo.pc.service.PcPrcSalsDsgnMngService;
import com.ssp.core.util.StringUtil;

@Service("pcPrcSalsDsgnMngService")
public class PcPrcSalsDsgnMngServiceImpl implements PcPrcSalsDsgnMngService{

	@Autowired
	private PcPrcSalsDsgnMngDao pcPrcSalsDsgnMngDao;
	
	@Autowired
	private PcSalsDsgnSalsprcDao pcSalsDsgnSalsprcDao;
	
	@Autowired
	private PcPrcMngDao pcPrcMngDao;
	
	@Autowired
	private PcExPrcMngDao pcExPrcMngDao;
	
	@Override
	public NexacroResult searchList(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		NexacroResult result = new NexacroResult();
		
		String prdIds = StringUtil.getString(searchMap.get("prdId"), "");
		String bzplcIds = StringUtil.getString(searchMap.get("bzplcId"), "");
		String reprPrdGrpIds = StringUtil.getString(searchMap.get("reprPrdGrpId"), "");
		
		if(!"".equals(prdIds) && null != prdIds) {
			String[] prdIdList = prdIds.split(",");
			searchMap.put("prdIdList", prdIdList);
		}
		if(!"".equals(bzplcIds) && null != bzplcIds) {
			String[] bzplcIdList = bzplcIds.split(",");
			searchMap.put("bzplcIdList", bzplcIdList);
		}
		if(!"".equals(reprPrdGrpIds) && null != reprPrdGrpIds) {
			String[] reprPrdGrpList = reprPrdGrpIds.split(",");
			searchMap.put("reprPrdGrpList", reprPrdGrpList);
		}
		
		int totalCount = pcPrcSalsDsgnMngDao.selectListCount(searchMap);
		List<Map<String, Object>> list = pcPrcSalsDsgnMngDao.selectList(searchMap);
		
		result.addDataSet("salsDsgnSalsprcList", list);
		result.addVariable("totalCount", totalCount);
		return result;
	}

	
	@Override
	public NexacroResult saveInfo(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		NexacroResult result = new NexacroResult();
		
				
		pcSalsDsgnSalsprcDao.updateSalsDsgnSalsprc(searchMap);		
		
		result.addVariable("saveResult", "success" );
	
		return result;
	}



	@Override
	public NexacroResult selectPcPrdPubSalsprc(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		
		 NexacroResult result = new NexacroResult();

        result.addDataSet("dpDispInfo",pcExPrcMngDao.selectPcPrdPubSalsprc(searchMap));
        result.addDataSet("exItemInfo",pcExPrcMngDao.selectSalsPrcHistList(searchMap));
        
        return result;
		
	}
	
}
