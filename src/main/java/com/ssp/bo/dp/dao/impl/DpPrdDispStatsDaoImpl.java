package com.ssp.bo.dp.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.dp.dao.DpPrdDispStatsDao;

@Repository("pcPrdDispStatsDao")
public class DpPrdDispStatsDaoImpl implements DpPrdDispStatsDao {

    @Autowired
    private SqlSession sqlSession;

	@Override
    public List<Map<String, Object>> selectDispHistoryList(Map<String, Object> searchMap) {
        return sqlSession.selectList("DpPrdDispStats.selectDispHistoryList", searchMap);
    }

    @Override
    public int selectDispHistoryCount(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("DpPrdDispStats.selectDispHistoryCount", searchMap);
    }

    @Override
    public int insertDispRegHist(Map<String, Object> searchMap) throws Exception {
        return sqlSession.insert("DpPrdDispStats.insertToPrdDispReg", searchMap);
    }

    @Override
    public Map<String, Object> insertDispRegHistLast(Map<String, Object> searchMap) throws Exception {
        sqlSession.insert("DpPrdDispStats.insertToPrdDispRegHist", searchMap);
        return searchMap;
    }

    @Override
    public Map<String, Object> insertDispStatsInfoHist(Map<String, Object> searchMap) throws Exception {
        sqlSession.insert("DpPrdDispStats.insertToPrdDispStatsInfoHist", searchMap);
        return searchMap;
    }

    @Override
    public int selectPcPrdDispHistCount(Map<String, Object> prcMap) throws Exception {
        return sqlSession.selectOne("DpPrdDispStats.selectPcPrdDispHistCount", prcMap);
    }
}
