package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.StockDao;


/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * <pre>    StockDaoImpl</pre>
 * @author  moonjooh
 * @since   2022. 03. 22.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.22		최초작성
 */
@Repository("stockDao")
public class StockDaoImpl implements StockDao {

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * StockNo관리 목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCustStockList(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.stock.selectCustStockList", searchMap);
    }
    
    /**
     * StockNo관리 상품 상세정보 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectPrdInfoByPrdId(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.stock.selectPrdInfoByPrdId", searchMap);
    }
    
    /**
     * StockNo관리 stockNo 중복체크
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCheckStockNo(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.stock.selectCheckStockNo", searchMap);
    }
    
    /**
     * insert validation 체크
     * @param searchMap Map
     * @return List
	 * @throws Exception 
     */
    @Override
    public int selectChkForInsert(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.cc.stock.selectChkForInsert", searchMap);
    }
    
    /**
     * StockNo 중복체크
     * @param searchMap Map
     * @return List
	 * @throws Exception 
     */
    @Override
    public int selectChkForStock(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.cc.stock.selectChkForStock", searchMap);
    }
    
    /**
     * StockNo관리 정보 생성
     * @param searchMap Map
     * @return List
     */
	@Override
	public int saveCustStockList(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.insert("com.ssp.bo.cc.stock.saveCustStockList", saveMap);
	}
    
	/**
     * StockNo관리 이력정보 생성
     * @param searchMap Map
     * @return List
     */
	@Override
	public int saveCustStockHist(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.insert("com.ssp.bo.cc.stock.saveCustStockHist", saveMap);
	}
    
	/**
     * StockNo관리 수정
     * @param searchMap Map
     * @return List
     */
	@Override
	public int updateCustStockList(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.update("com.ssp.bo.cc.stock.updateCustStockList", saveMap);
	}
    
	/**
     * StockNo관리 이력조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCustStockHst(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.stock.selectCustStockHst", searchMap);
    }

}
