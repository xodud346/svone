package com.ssp.bo.pc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.pc.dao.PcPrcMngDao;

@SuppressWarnings("unchecked")
@Repository("pcPrcMng")
public class PcPrcMngDaoImpl implements PcPrcMngDao{

	@Autowired
    private SqlSession sqlSession;

    //사업장별 가격 리스트
    @Override
    public List<Map<String, Object>> selectBzplcList(Map<String, Object> searchMap) throws Exception{
        // TODO Auto-generated method stub
        return sqlSession.selectList("PcPrcMng.selectBzplcList", searchMap);
    }

    //리스트 총 갯수
    @Override
    public int selectBzplcCount(Map<String, Object> searchMap) throws Exception{
        // TODO Auto-generated method stub
        return sqlSession.selectOne("PcPrcMng.selectBzplcCount", searchMap);

    }

    //가격 이력 리스트
    @Override
    public List<Map<String, Object>> selectPrcHistList(Map<String, Object> searchMap) throws Exception{
        // TODO Auto-generated method stub
        return sqlSession.selectList("PcPrcMng.selectPrcHistList", searchMap);
    }

    //리스트 총 갯수
    @Override
    public int selectPrcHistCount(Map<String, Object> searchMap) throws Exception{
        // TODO Auto-generated method stub
        return sqlSession.selectOne("PcPrcMng.selectPrcHistCount", searchMap);

    }

    //전용상품 리스트
	@Override
	public List<Map<String, Object>> selectList(Map<String, Object> searchMap) throws Exception{
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcPrcMng.selectList", searchMap);
	}


	//리스트 총 갯수
	@Override
	public int selectCount(Map<String, Object> searchMap) throws Exception{
		// TODO Auto-generated method stub
		return sqlSession.selectOne("PcPrcMng.selectCount", searchMap);

	}

	//공용상품 리스트
	@Override
	public List<Map<String, Object>> selectPubPrcList(Map<String, Object> searchMap) throws Exception{
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcPrcMng.selectPubPrcList", searchMap);
	}


	//리스트 총 갯수
	@Override
	public int selectPubPrcCount(Map<String, Object> searchMap) throws Exception{
		// TODO Auto-generated method stub
		return sqlSession.selectOne("PcPrcMng.selectPubPrcCount", searchMap);

	}


	//상세데이터
	@Override
	public List<Map<String, Object>> selectItem(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcPrcMng.selectItem", searchMap);
	}


	//가격리스트
	public List<Map<String, Object>> selectPrcList(Map<String, Object> searchMap) throws Exception{
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcPrcMng.selectPrcList", searchMap);
	}

	//가격리스트 총 갯수
	@Override
	public int selectPrcListCount(Map<String, Object> searchMap) throws Exception{
		// TODO Auto-generated method stub
		return sqlSession.selectOne("PcPrcMng.selectPrcListCount", searchMap);

	}

	//탭3 기획전 대상 리스트
	@Override
	public List<Map<String, Object>> selectListExhbnInfo(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcPrcMng.selectListExhbnInfo", searchMap);
	}


	//탭1 그리드2 조회
	@Override
	public List<Map<String, Object>> selectPcPrdPrcList(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcPrcMng.selectPcPrdPrcList", searchMap);
	}

	@Override
    public List<Map<String, Object>> getPcPrdPrcSimulList(Map<String, Object> searchMap) throws Exception {
        // TODO Auto-generated method stub
        return sqlSession.selectList("PcPrcMng.getPcPrdPrcSimulList", searchMap);
    }

	//탭2 그리드1 조회
	@Override
	public List<Map<String, Object>> selectListPcPrdQty(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcPrcMng.selectListPcPrdQty", searchMap);
	}

	//탭2 그리드1 조회 count
	public int selectCountPcPrdQty(Map<String, Object> searchMap) throws Exception{
		return sqlSession.selectOne("PcPrcMng.selectCountPcPrdQty", searchMap);

	}
	//탭2 그리드1 삭제
	@Override
	public int deletePcPrdQty(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.delete("PcPrcMng.deletePcPrdQty", searchMap);
	}

	//탭2 그리드2 조회
	@Override
	public List<Map<String, Object>> selectListPcPrdDlcst(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcPrcMng.selectListPcPrdDlcst", searchMap);
	}

	//탭2 그리드2 조회 count
	public int selectCountPcPrdDlcst(Map<String, Object> searchMap) throws Exception{
		return sqlSession.selectOne("PcPrcMng.selectCountPcPrdDlcst", searchMap);

	}
	//탭2 그리드2 삭제
	@Override
	public int deletePcPrdDlcst(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.delete("PcPrcMng.deletePcPrdDlcst", searchMap);
	}

	//요청정보 조회
	@Override
	public Map<String, Object> selectPcPrdReq(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("PcPrcMng.selectPcPrdReq", searchMap);
	}

	//상세데이터
	@Override
	public List<Map<String, Object>> selectPubDispList(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList("PcPrcMng.selectPubDispList", searchMap);
	}

}
