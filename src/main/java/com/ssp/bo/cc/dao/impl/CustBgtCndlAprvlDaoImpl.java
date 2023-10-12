package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustBgtCndlAprvlDao;


/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * <pre>    CustBgtCndlAprvlDaoImpl</pre>
 * @author  moonjooh
 * @since   2022. 03. 16.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.16		최초작성
 */
@Repository("custBgtCndlAprvlDao")
public class CustBgtCndlAprvlDaoImpl implements CustBgtCndlAprvlDao {

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 조건부 결재선 관리 목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCustBgtCndlAprvl(Map<String, Object> searchMap) {
        return sqlSession.selectList("CustBgtCndlAprvl.selectCustBgtCndlAprvl", searchMap);
    }

    /**
     * 조건부 결재선 관리 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public void deleteCustBgtCndlAprvl(Map<String, Object> saveMap) throws Exception {
    	sqlSession.update("CustBgtCndlAprvl.deleteCustBgtCndlAprvl", saveMap);
	}
	/**
     * 조건부 결재선 관리 결재선정보 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public void deleteCustBgtCndlAprvlDetail(Map<String, Object> saveMap) throws Exception {
    	sqlSession.delete("CustBgtCndlAprvl.deleteCustBgtCndlAprvlDetail", saveMap);
	}

	/**
     * 생성된 결재선 관리 상세 관리정보 APRVL_SET_SEQ 채번
     * @param searchMap Map
     * @return List
     */
	@Override
	public int selectAprvlSetSeq(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("CustBgtCndlAprvl.selectAprvlSetSeq", searchMap);
	}

	/**
     * insert validation
     * @param searchMap Map
     * @return List
     */
	@Override
	public int selectInsertValidationCheck(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("CustBgtCndlAprvl.selectInsertValidationCheck", searchMap);
	}

	/**
     * 상품별 결재선 관리 상세 관리정보 생성
     * @param searchMap Map
     * @return List
     */
	@Override
	public int insertCndlAprvlInfo(Map<String, Object> saveMap) throws Exception {
        return sqlSession.insert("CustBgtCndlAprvl.insertCndlAprvlInfo", saveMap);
	}

	/**
     * 상품별 결재선 관리 상세 관리정보 이력
     * @param searchMap Map
     * @return List
     */
	@Override
	public void insertCndlAprvlInfoHist(Map<String, Object> saveMap) throws Exception {
    	sqlSession.insert("CustBgtCndlAprvl.insertCndlAprvlInfoHist", saveMap);
	}
	
	/**
     * 상품별 결재선 관리 상세 결재선정보 생성
     * @param searchMap Map
     * @return List
     */
	@Override
	public int insertPopApr(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.insert("CustBgtCndlAprvl.insertPopApr", saveMap);
	}
	
	/**
     * 결재선 설정정보 수정
     * @param searchMap Map
     * @return List
     */
	@Override
	public int updateAprvl(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.update("CustBgtCndlAprvl.updateAprvl", saveMap);
	}
	
	/**
     * 결재선 관리 상세 결재선정보 수정
     * @param searchMap Map
     * @return List
     */
	@Override
	public int updatePopApr(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.update("CustBgtCndlAprvl.updatePopApr", saveMap);
	}
	
	/**
     * 결재선 관리 상세 결재선정보 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public void deletePopApr(Map<String, Object> saveMap) throws Exception {
    	sqlSession.update("CustBgtCndlAprvl.deletePopApr", saveMap);
	}

	@Override
	public List<Map<String, Object>> selectPopAprInfo(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("CustBgtCndlAprvl.selectPopAprInfo", searchMap);
	}

	@Override
	public List<Map<String, Object>> selectPopAprDetail(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("CustBgtCndlAprvl.selectPopAprDetail", searchMap);
	}

	@Override
	public void savePrdAprvlInfoHistForDelete(Map<String, Object> saveMap) throws Exception {
    	sqlSession.insert("CustBgtCndlAprvl.savePrdAprvlInfoHistForDelete", saveMap);
	}
	
}
