package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustBgtPrdAprvlDao;


/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * <pre>    CustBgtPrdAprvlDaoImpl</pre>
 * @author  moonjooh
 * @since   2022. 03. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.11		최초작성
 */
@Repository("custBgtPrdAprvlDao")
public class CustBgtPrdAprvlDaoImpl implements CustBgtPrdAprvlDao {

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 상품결재선 관리 목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCustBgtPrdAprvl(Map<String, Object> searchMap) {
        return sqlSession.selectList("custBgtPrdAprvl.selectCustBgtPrdAprvl", searchMap);
    }
    
    /**
     * 계정별 결재선 관리 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public void deleteCustBgtPrdAprvl(Map<String, Object> saveMap) throws Exception {
    	sqlSession.update("custBgtPrdAprvl.deleteCustBgtPrdAprvl", saveMap);
	}
	/**
     * 계정별 결재선 관리 결재선정보 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public void deleteCustBgtPrdAprvlDetail(Map<String, Object> saveMap) throws Exception {
    	sqlSession.delete("custBgtPrdAprvl.deleteCustBgtPrdAprvlDetail", saveMap);
	}
	
	/**
     * 상품 상세정보 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectPrdInfoByPrdId(Map<String, Object> searchMap) {
        return sqlSession.selectList("custBgtPrdAprvl.selectPrdInfoByPrdId", searchMap);
    }

	/**
     * 생성된 결재선 관리 상세 관리정보 APRVL_SET_SEQ 채번
     * @param searchMap Map
     * @return List
     */
	@Override
	public int selectAprvlSetSeq(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("custBgtPrdAprvl.selectAprvlSetSeq", searchMap);
	}

	/**
     * insert validation
     * @param searchMap Map
     * @return List
     */
	@Override
	public int selectInsertValidationCheck(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("custBgtPrdAprvl.selectInsertValidationCheck", searchMap);
	}

	/**
     * 상품별 결재선 관리 상세 관리정보 생성
     * @param searchMap Map
     * @return List
     */
	@Override
	public int insertPrdAprvlInfo(Map<String, Object> saveMap) throws Exception {
        return sqlSession.insert("custBgtPrdAprvl.savePrdAprvlInfo", saveMap);
	}

	/**
     * 상품별 결재선 관리 상세 관리정보 이력
     * @param searchMap Map
     * @return List
     */
	@Override
	public void insertPrdAprvlInfoHist(Map<String, Object> saveMap) throws Exception {
    	sqlSession.insert("custBgtPrdAprvl.savePrdAprvlInfoHist", saveMap);
	}
	
	/**
     * 상품별 결재선 관리 상세 결재선정보 생성
     * @param searchMap Map
     * @return List
     */
	@Override
	public int insertPopApr(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.insert("custBgtPrdAprvl.insertPopApr", saveMap);
	}
	
	/**
     * 상품별 결재선 관리 상세 결재선정보 이력
     * @param searchMap Map
     * @return List
     * @throws Exception 
     */
	@Override
	public void savePrdAprvlInfoHistForDelete(Map<String, Object> saveMap) throws Exception {
    	sqlSession.insert("custBgtPrdAprvl.savePrdAprvlInfoHistForDelete", saveMap);
		
	}
	
	/**
     * 결재선 관리 상세 결재선정보 수정
     * @param searchMap Map
     * @return List
     */
	@Override
	public int updatePopApr(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.update("custBgtPrdAprvl.updatePopApr", saveMap);
	}
	
	/**
     * 결재선 관리 상세 결재선정보 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public void deletePopApr(Map<String, Object> saveMap) throws Exception {
    	sqlSession.update("custBgtPrdAprvl.deletePopApr", saveMap);
	}

	@Override
	public Map<String, Object> selectPopAprInfo(Map<String, Object> prdMap) throws Exception {
		return sqlSession.selectOne("custBgtPrdAprvl.selectPopAprInfo", prdMap);
	}

	@Override
	public List<Map<String, Object>> selectPopAprDetail(Map<String, Object> infoMap) throws Exception {
        return sqlSession.selectList("custBgtPrdAprvl.selectPopAprDetail", infoMap);
	}

	/**
     * 계정별 결재선 관리 수정
     * @param searchMap Map
     * @return List
     */
	@Override
	public void updateCustBgtPrdAprvl(Map<String, Object> saveMap) throws Exception {
    	sqlSession.update("custBgtPrdAprvl.updateCustBgtPrdAprvl", saveMap);
	}

	
    
}
