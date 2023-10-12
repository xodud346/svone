package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.co.dao.CoPsnInfoArcHstDao;
import com.ssp.bo.co.service.CoPsnInfoArcHstService;

@Service("coPsnInfoArcHstService")
public class CoPsnInfoArcHstServiceImpl implements CoPsnInfoArcHstService {
	@Autowired
	CoPsnInfoArcHstDao coPsnInfoArcHstDao;
	
	@Override
	public int selectCoPsnInfoArcHstListCnt(Map<String, Object> param) throws Exception {
		return coPsnInfoArcHstDao.selectCoPsnInfoArcHstListCnt(param);
	}
	
	@Override
	public List<Map<String, Object>> selectCoPsnInfoArcHstList(Map<String, Object> param) throws Exception {
		return coPsnInfoArcHstDao.selectCoPsnInfoArcHstList(param);
	}

}
