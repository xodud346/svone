package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;



import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.CustDeptDao;


/** 
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * <pre>    CustDeptDaoImpl</pre>
 * @author  moonjooh
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.11		최초작성
 *  2022.02.17		부서상세 조회 및 수정구현
 *  2022.02.18		부서상세 생성/복사 구현
 */
@Repository("custDeptDao")
public class CustDeptDaoImpl implements CustDeptDao {
    
    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 부서조회 목록 리스트 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCustDept(Map<String, Object> searchMap) {
        return sqlSession.selectList("custDept.selectCustDept", searchMap);
    }
    
    /**
     * 부서조회 목록 리스트 카운트
     * @param searchMap Map
     * @return List
     */
    @Override
	public int selectCustDeptCount(Map<String, Object> searchMap) throws Exception {
    	return sqlSession.selectOne("custDept.selectCustDeptCount", searchMap);
	}

    /**
     * 부서조회 목록 일괄상태변경
     * @param searchMap Map
     * @return List
     */
	@Override
	public int saveCustDeptState(Map<String, Object> saveMap) throws Exception {
		CCUtils.prefixCoCd(saveMap);
		return sqlSession.update("custDept.saveCustDeptState", saveMap);
	}
	
	/**
     * 부서조회 상세조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCustDeptDetailInfo(Map<String, Object> searchMap) {
        return sqlSession.selectList("custDept.selectCustDeptDetailInfo", searchMap);
    }
    
    /**
     * 부서조회 상세수정
     * @param searchMap Map
     * @return List
     */
	@Override
	public int saveCustDeptDetailInfo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("custDept.saveCustDeptDetailInfo", saveMap);
	}
	
	/**
     * 부서조회 제어권한 수정
     * @param searchMap Map
     * @return List
     */
	@Override
	public int saveCustDeptDetailInfoAuth(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("custDept.saveCustDeptDetailInfoAuth", saveMap);
	}

	/**
     * 부서생성 고객구분 조회
     * @param searchMap Map
     * @return List
     */
	@Override
	public List<Map<String, Object>> selectCustSpr(Map<String, Object> searchMap) {
        return sqlSession.selectList("custDept.selectCustSpr", searchMap);
	}
	
	/**
     * 부서생성 최상위부서, 입고담당자 조회
     * @param searchMap Map
     * @return List
     */
	@Override
	public List<Map<String, Object>> selectHgstDept(Map<String, Object> searchMap) {
        return sqlSession.selectList("custDept.selectHgstDept", searchMap);
	}

	/**
     * 부서생성 insert
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int insertCustDeptDetail(Map<String, Object> saveMap) throws Exception {
		return sqlSession.insert("custDept.insertCustDeptDetail", saveMap);
	}
	
	/**
     * 부서생성 제어권한 insert
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int insertCustDeptDetailAuth(Map<String, Object> saveMap) throws Exception {
		return sqlSession.insert("custDept.insertCustDeptDetailAuth", saveMap);
	}
	
	/**
     * DEPT_ID 채번
     * @param searchMap Map
     * @return List
	 * @throws Exception 
     */
    @Override
    public String selectSeqDeptId(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("custDept.selectSeqDeptId", searchMap);
    }
    
	@Override
	public Map<String, Object> selectOprUnituseYn(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("custDept.selectOprUnituseYn", searchMap);
	}
	
	@Override
	public int selectChkHrnkDeptUse(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("custDept.selectChkHrnkDeptUse", searchMap);
	}

	@Override
	public Map<String, Object> selectAuthByOprUnit(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("custDept.selectAuthByOprUnit", searchMap);
	}

	@Override
	public int chkMbrDeptUse(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("custDept.chkMbrDeptUse", searchMap);
	}

	@Override
	public int selectHrnkDeptIdCnt(Map<String, Object> searchMap) throws Exception {
    	return sqlSession.selectOne("custDept.selectHrnkDeptIdCnt", searchMap);
	}

	@Override
	public Map<String, Object> selectOprUnitRegStatsCdChk(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("custDept.selectOprUnitRegStatsCdChk", paramMap);
	}

	@Override
	public int selectChkUpperHrnkDeptUse(Map<String, Object> saveMap) throws Exception {
        return sqlSession.selectOne("custDept.selectChkUpperHrnkDeptUse", saveMap);
	}
    
}
