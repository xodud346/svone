package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustBgtByacctAprvlDao;


/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * <pre>    CustBgtByacctAprvlDaoImpl</pre>
 * @author  moonjooh
 * @since   2022. 03. 02.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.02		최초작성
 */
@Repository("custBgtByacctAprvlDao")
public class CustBgtByacctAprvlDaoImpl implements CustBgtByacctAprvlDao {

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 부서조회 목록 리스트 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCustBgtByacctAprv(Map<String, Object> searchMap) {
        return sqlSession.selectList("custBgtByacctAprvl.selectCustBgtByacctAprv", searchMap);
    }
    
    /**
     * 계정별 결재선 관리 조회
     * @param searchMap Map
     * @return List
     */
    @Override
	public List<Map<String, Object>> selectPopAprInfo(Map<String, Object> searchMap) {
        return sqlSession.selectList("custBgtByacctAprvl.selectPopAprInfo", searchMap);
	}
    
    /**
     * 계정별 결재선 관리 상세 결재선조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectPopAprDetail(Map<String, Object> searchMap) {
        return sqlSession.selectList("custBgtByacctAprvl.selectPopAprDetail", searchMap);
    }

    /**
     * 계정별 결재선 관리 상세 관리정보 수정
     * @param searchMap Map
     * @return List
     */
	@Override
	public int savePopAprDetail(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.update("custBgtByacctAprvl.savePopAprDetail", saveMap);
	}
	
	/**
     * 계정별 결재선 관리 상세 결재선정보 수정
     * @param searchMap Map
     * @return List
     */
	@Override
	public int updatePopApr(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.update("custBgtByacctAprvl.updatePopApr", saveMap);
	}
	
	/**
     * 계정별 결재선 관리 상세 결재선정보 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public void deletePopApr(Map<String, Object> saveMap) throws Exception {
    	sqlSession.update("custBgtByacctAprvl.deletePopApr", saveMap);
	}
	
	/**
     * 계정별 결재선 관리 상세 관리정보 생성
     * @param searchMap Map
     * @return List
     */
	@Override
	public int insertPopAprDetail(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.insert("custBgtByacctAprvl.insertPopAprDetail", saveMap);
	}
	
	/**
     * 계정별 결재선 관리 상세 결재선정보 생성
     * @param searchMap Map
     * @return List
     */
	@Override
	public int insertPopApr(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.insert("custBgtByacctAprvl.insertPopApr", saveMap);
	}
	
	/**
     * 생성된 계정별 결재선 관리 상세 관리정보 APRVL_SET_SEQ 채번
     * @param searchMap Map
     * @return List
	 * @throws Exception 
     */
    @Override
    public int selectAprvlSetSeq(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("custBgtByacctAprvl.selectAprvlSetSeq", searchMap);
    }
    
    /**
     * 계정별 결재선 관리 예산계정 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectAcctList(Map<String, Object> searchMap) {
        return sqlSession.selectList("custBgtByacctAprvl.selectAcctList", searchMap);
    }
    
    /**
     * 계정별 결재선 관리 상세 관리정보 이력
     * @param searchMap Map
     * @return List
     * @throws Exception 
     */
	@Override
	public void insertPopAprDetailHist(Map<String, Object> saveMap) throws Exception {
    	sqlSession.insert("custBgtByacctAprvl.insertPopAprDetailHist", saveMap);
	}
	
	/**
     * insert validation
     * @param searchMap Map
     * @return List
	 * @throws Exception 
     */
    @Override
    public int selectInsertValidationCheck(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("custBgtByacctAprvl.selectInsertValidationCheck", searchMap);
    }
    
    /**
     * 계정별 결재선 관리 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public void deleteCustBgtByAcctAprv(Map<String, Object> saveMap) throws Exception {
    	sqlSession.update("custBgtByacctAprvl.deleteCustBgtByAcctAprv", saveMap);
	}
	
	/**
     * 계정별 결재선 관리 결재선정보 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public void deleteCustBgtByAcctAprvDetail(Map<String, Object> saveMap) throws Exception {
    	sqlSession.delete("custBgtByacctAprvl.deleteCustBgtByAcctAprvDetail", saveMap);
	}

	@Override
	public void saveByacctAprvlInfoHist(Map<String, Object> saveMap) throws Exception {
    	sqlSession.insert("custBgtByacctAprvl.saveByacctAprvlInfoHist", saveMap);
	}

	
    
}
