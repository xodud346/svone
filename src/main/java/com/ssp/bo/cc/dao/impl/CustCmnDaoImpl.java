package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustCmnDao;


/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * <pre>    CustCmnDaoImpl</pre>
 * @author  moonjooh
 * @since   2022. 02. 22.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.22		최초작성
 */
@Repository("custCmnDao")
public class CustCmnDaoImpl implements CustCmnDao {

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 산업군 멀티조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectIddtMultiPop(Map<String, Object> searchMap) {
        return sqlSession.selectList("custCmn.selectIddtMultiPop", searchMap);
    }
    
    /**
     * 부서 멀티조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectDeptMultiPop(Map<String, Object> searchMap) {
        return sqlSession.selectList("custCmn.selectDeptMultiPop", searchMap);
    }

	@Override
	public List<Map<String, Object>> selectMbrOprtrOrgInfoList(Map<String, Object> searchMap) {
		return sqlSession.selectList("custCmn.selectMbrOprtrOrgInfoList", searchMap);
	}

	@Override
	public int selectMbrOprtrOrgInfoListCnt(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("custCmn.selectMbrOprtrOrgInfoListCnt", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectMbrOprtrSalsInfoList(Map<String, Object> searchMap) {
		return sqlSession.selectList("custCmn.selectMbrOprtrSalsInfoList", searchMap);
	}

	@Override
	public int selectMbrOprtrSalsInfoListCnt(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("custCmn.selectMbrOprtrSalsInfoListCnt", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectMbrOprtrOrgInfoListNewVersion(Map<String, Object> searchMap) {
		return sqlSession.selectList("custCmn.selectMbrOprtrOrgInfoListNewVersion", searchMap);
	}

	@Override
	public int selectMbrOprtrOrgInfoListNewVersionCnt(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("custCmn.selectMbrOprtrOrgInfoListNewVersionCnt", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectSvcOprtrMbr(Map<String, Object> searchMap) {
		return sqlSession.selectList("custCmn.selectSvcOprtrMbr", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectCaddrRegNum(Map<String, Object> searchMap) {
		return sqlSession.selectList("custCmn.selectCaddrRegNum", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectClientPopupList(Map<String, Object> searchMap) {
		return sqlSession.selectList("custCmn.selectClientPopupList", searchMap);
	}

	public List<Map<String, Object>> selectUsdIddtMultiPop(Map<String, Object> searchMap) {
		return sqlSession.selectList("custCmn.selectUsdIddtMultiPop", searchMap);
	}


}
