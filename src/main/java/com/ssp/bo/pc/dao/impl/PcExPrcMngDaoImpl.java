package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcExPrcMngDao;

@Repository("pcExPrcMng")
public class PcExPrcMngDaoImpl implements PcExPrcMngDao{

	@Autowired
	private SqlSession sqlSession; 


	//저장한 운영단위정보 조회
	@Override
	public List<Map<String, Object>> selectUpdatedListOprUnit(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcExPrcMng.updateListOprUnit", searchMap);
	}

	//전용상품 영업지정판매가정보 조회
	@Override
	public List<Map<String, Object>> selectPcPrdSalsprc(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcExPrcMng.selectPcPrdSalsprc", searchMap);
	}


	//사업장별 상품 정보 및 영업지정판매가
    @Override
    public List<Map<String, Object>> selectPcPrdSalsprcNew(Map<String, Object> searchMap) throws Exception {
        // TODO Auto-generated method stub
        return sqlSession.selectList("PcExPrcMng.selectPcPrdSalsprcNew", searchMap);
    }
    
    //공용 상품 정보 및 영업지정판매가
    @Override
    public List<Map<String, Object>> selectPcPrdPubSalsprc(Map<String, Object> searchMap) throws Exception {
    	// TODO Auto-generated method stub
    	return sqlSession.selectList("PcExPrcMng.selectPcPrdPubSalsprc", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectSalsPrcHistList(Map<String, Object> searchMap) throws Exception {
        // TODO Auto-generated method stub
        return sqlSession.selectList("PcExPrcMng.selectSalsPrcHistList", searchMap);
    }

    @Override
    public List<Map<String, Object>> selectOprUnitDispList(Map<String, Object> searchMap) throws Exception {
        // TODO Auto-generated method stub
        return sqlSession.selectList("PcExPrcMng.selectOprUnitDispList", searchMap);
    }
    
    @Override
    public Map<String, Object> selectCurrentStatus(Map<String, Object> searchMap) throws Exception {
    	// TODO Auto-generated method stub
    	return sqlSession.selectOne("PcExPrcMng.selectCurrentStatus", searchMap);
    }

}
