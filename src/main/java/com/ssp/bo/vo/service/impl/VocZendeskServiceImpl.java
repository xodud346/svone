package com.ssp.bo.vo.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.vo.dao.VocZendeskDao;
import com.ssp.bo.vo.service.VocZendeskService;

@Service
public class VocZendeskServiceImpl implements VocZendeskService {
	
	@Autowired
	private VocZendeskDao vocZendeskDao;
	
	@Override
	public Map<String, Object> list(Map<String, Object> param) throws Exception {
		Map<String, Object> r = new HashMap<String, Object>();
		
		List<Map<String, Object>> list = vocZendeskDao.list(param);
		if (list != null && list.size() > 0) {
			r.put("TOT_CUNT", list.get(0).get("TOT_CUNT"));
		} else {
			r.put("TOT_CUNT", 0);
		}
		r.put("ds_list", list);
		
		return r;
	}

	@Override
	public Map<String, Object> info(Map<String, Object> param) throws Exception {
		Map<String, Object> r = new HashMap<String, Object>();
		
		
		
		return r;
	}
	
	@Override
	public Map<String, Object> save(Map<String, Object> param) throws Exception {
		Map<String, Object> r = new HashMap<String, Object>();
		
		
		
		return r;
	}

}
