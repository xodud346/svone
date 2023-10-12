package com.ssp.bo.vo.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.vo.dao.VocHelperDao;

@Repository
public class VocHelperDaoImpl implements VocHelperDao {
	
	@Autowired
	private SqlSession sqlSession;
	
	private final String NS = "com.ssp.bo.vo.helper.";
	private String ns(String s) {
		return new StringBuffer(NS).append(s).toString();
	}
	
	@Override
	public List<Map<String, Object>> list(Map<String, Object> param) throws Exception {
		return sqlSession.selectList(ns("selectListVocHelper"), param);
	}

	@Override
	public Map<String, Object> info(Map<String, Object> param) throws Exception {
		
		Map<String, Object> row = sqlSession.selectOne(ns("selectInfoVocHelper"), param);
		
		return row;
	}

	@Override
	public Map<String, Object> save(Map<String, Object> param) throws Exception {
		Map<String, Object> r = null;
		
		sqlSession.insert(ns("saveVocHelper"), param);
		
		return r;
	}

}
