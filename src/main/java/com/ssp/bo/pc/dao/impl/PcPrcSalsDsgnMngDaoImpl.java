package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcPrcSalsDsgnMngDao;


@SuppressWarnings("unchecked")
@Repository("pcPrcSalsDsgnMng")
public class PcPrcSalsDsgnMngDaoImpl implements PcPrcSalsDsgnMngDao{

	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Map<String, Object>> selectList(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcPrcSalsDsgnMng.selectList", searchMap);
	}

	public int selectListCount(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("PcPrcSalsDsgnMng.selectListCount", searchMap);
	}

}
