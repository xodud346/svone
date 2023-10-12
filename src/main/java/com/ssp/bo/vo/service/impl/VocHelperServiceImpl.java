package com.ssp.bo.vo.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.vo.dao.VocHelperDao;
import com.ssp.bo.vo.service.VocHelperService;

@Service
public class VocHelperServiceImpl implements VocHelperService {
	
	@Autowired
	private VocHelperDao vocHelperDao;
	
	@Override
	public Map<String, Object> list(Map<String, Object> param) throws Exception {
		Map<String, Object> r = new HashMap<String, Object>();
		
		r.put("dsList", vocHelperDao.list(param));
		
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
