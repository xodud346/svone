package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;



import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustBgtChmAprvlDao;


/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * <pre>    CustBgtChmAprvlDaoImpl</pre>
 * @author  moonjooh
 * @since   2022. 04. 13.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.04.13		최초작성
 */
@Repository("custBgtChmAprvlDao")
public class CustBgtChmAprvlDaoImpl implements CustBgtChmAprvlDao {

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 화학물질 결재선 관리 목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCustBgtChmAprvl(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cust.bgt.chmAprvl.selectCustBgtChmAprvl", searchMap);
    }

    /**
     * 화학물질 결재선 관리 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public void deleteCustBgtChmAprvl(Map<String, Object> saveMap) throws Exception {
    	sqlSession.update("com.ssp.bo.cust.bgt.chmAprvl.deleteCustBgtChmAprvl", saveMap);
	}
	/**
     * 화학물질 결재선 관리 결재선정보 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public void deleteCustBgtChmAprvlDetail(Map<String, Object> saveMap) throws Exception {
    	sqlSession.delete("com.ssp.bo.cust.bgt.chmAprvl.deleteCustBgtChmAprvlDetail", saveMap);
	}

	/**
     * 생성된 결재선 관리 상세 관리정보 APRVL_SET_SEQ 채번
     * @param searchMap Map
     * @return List
     */
	@Override
	public int selectAprvlSetSeq(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.cust.bgt.chmAprvl.selectAprvlSetSeq", searchMap);
	}

	/**
     * insert validation
     * @param searchMap Map
     * @return List
     */
	@Override
	public int selectInsertValidationCheck(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.cust.bgt.chmAprvl.selectInsertValidationCheck", searchMap);
	}

	/**
     * 화학물질 결재선 관리 상세 관리정보 생성
     * @param searchMap Map
     * @return List
     */
	@Override
	public int insertChmAprvlInfo(Map<String, Object> saveMap) throws Exception {
        return sqlSession.insert("com.ssp.bo.cust.bgt.chmAprvl.insertChmAprvlInfo", saveMap);
	}

	/**
     * 화학물질 결재선 관리 상세 관리정보 이력
     * @param searchMap Map
     * @return List
     */
	@Override
	public void insertChmAprvlInfoHist(Map<String, Object> saveMap) throws Exception {
    	sqlSession.insert("com.ssp.bo.cust.bgt.chmAprvl.insertChmAprvlInfoHist", saveMap);
	}
	
	/**
     * 화학물질 결재선 관리 상세 결재선정보 생성
     * @param searchMap Map
     * @return List
     */
	@Override
	public int insertPopApr(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.insert("com.ssp.bo.cust.bgt.chmAprvl.insertPopApr", saveMap);
	}
	
	/**
     * 결재선 설정정보 수정
     * @param searchMap Map
     * @return List
     */
	@Override
	public int updateAprvl(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.update("com.ssp.bo.cust.bgt.chmAprvl.updateAprvl", saveMap);
	}
	
	/**
     * 결재선 관리 상세 결재선정보 수정
     * @param searchMap Map
     * @return List
     */
	@Override
	public int updatePopApr(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.update("com.ssp.bo.cust.bgt.chmAprvl.updatePopApr", saveMap);
	}
	
	/**
     * 결재선 관리 상세 결재선정보 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public void deletePopApr(Map<String, Object> saveMap) throws Exception {
    	sqlSession.update("com.ssp.bo.cust.bgt.chmAprvl.deletePopApr", saveMap);
	}

	/**
     * 화학물질 결재선 관리 조회
     * @param searchMap Map
     * @return List
     */
	@Override
	public List<Map<String, Object>> selectPopAprInfo(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.cust.bgt.chmAprvl.selectPopAprInfo", searchMap);
	}

	/**
     * 화학물질 결재선 관리 상세 결재선조회
     * @param searchMap Map
     * @return List
     */
	@Override
	public List<Map<String, Object>> selectPopAprDetail(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectList("com.ssp.bo.cust.bgt.chmAprvl.selectPopAprDetail", searchMap);
	}

	/**
     * 결재선 관리 상세 결재선정보 이력
     * @param searchMap Map
     * @return List
     */
	@Override
	public void saveAprvlInfoHist(Map<String, Object> saveMap) throws Exception {
    	sqlSession.insert("com.ssp.bo.cust.bgt.chmAprvl.saveAprvlInfoHist", saveMap);
	}
    
}
