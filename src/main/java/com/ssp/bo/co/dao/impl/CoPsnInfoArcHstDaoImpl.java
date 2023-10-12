package com.ssp.bo.co.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.co.dao.CoPsnInfoArcHstDao;
import com.ssp.core.co.dao.CommonDAO;

@Repository("coPsnInfoArcHstDao")
public class CoPsnInfoArcHstDaoImpl implements CoPsnInfoArcHstDao {
	@Resource(name = "commonDAO")
    private CommonDAO commonDAO;
	
	@Override
	public int insertCoPsnInfoArcHst(Map<String, Object> param) throws Exception {
		return commonDAO.insert("CoPsnInfoArcHst.insertCoPsnInfoArcHst", param);
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public Map<String, Object> selectPgmInfo(Map<String, Object> param) throws Exception {
		return commonDAO.select("CoPsnInfoArcHst.selectPgmInfo", param);
	}

	@Override
	public Map<String, Object> selectPgmInfo(String uri) throws Exception {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("uri", uri);
		
		return selectPgmInfo(param);
	}

	@Override
	public int selectCoPsnInfoArcHstListCnt(Map<String, Object> param) throws Exception {
		return commonDAO.selectCount("CoPsnInfoArcHst.selectCoPsnInfoArcHstListCnt", param);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectCoPsnInfoArcHstList(Map<String, Object> param) throws Exception {
		return commonDAO.selectList("CoPsnInfoArcHst.selectCoPsnInfoArcHstList", param);
	}
	
	@Override
	public int selectCount(Map<String, Object> param) throws Exception {
		return commonDAO.selectCount("CoPsnInfoArcHst.selectCount", param);
	}
}
