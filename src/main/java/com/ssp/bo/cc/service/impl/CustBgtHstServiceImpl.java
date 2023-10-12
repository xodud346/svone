package com.ssp.bo.cc.service.impl;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.cc.dao.CustBgtHstDao;
import com.ssp.bo.cc.service.CustBgtHstService;

@Service("custBgtHstService")
public class CustBgtHstServiceImpl implements CustBgtHstService {

	@Autowired
	private CustBgtHstDao custBgtHstDao;
	
	public Map<String,Object> selectBgtHstList(Map<String, Object> param) {
		Map<String,Object> map = new HashMap<String,Object>();
		
		//String[] sMFlds = { "bzplcId", "oprUnitId", "deptId", "acctId", "bzplcNm", "oprUnitNm", "deptNm", "acctNm" };
		String[] sMFlds = { "bzplcId", "oprUnitId", "deptId", "acctId" };
		for (String sMFld : sMFlds) {
			String sMData = (String) param.get(sMFld);
			if (sMData  !=null && !"".equals(sMData.trim())) {
				param.put(sMFld+"s"  , Arrays.asList(sMData.split(",")));
			}
		}
		
		map.put("dsList", custBgtHstDao.selectBgtHstList(param));
		
		return map;
	}

}
