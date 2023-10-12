package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.CustIddtDao;


/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * <pre>    CustIddtDaoImpl</pre>
 * @author  moonjooh
 * @since   2022. 02. 21.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.21		최초작성
 */
@Repository("custIddtDao")
public class CustIddtDaoImpl implements CustIddtDao {

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 산업군조회 목록
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCustIddtList(Map<String, Object> searchMap) {
    	CCUtils.prefixCoCd(searchMap);
        return sqlSession.selectList("custIddt.selectCustIddtList", searchMap);
    }
    
    /**
     * 산업군조회 목록 카운트
     * @param searchMap Map
     * @return List
     */
    @Override
	public int selectCustIddtCount(Map<String, Object> searchMap) throws Exception {
    	return sqlSession.selectOne("custIddt.selectCustIddtCount", searchMap);
	}
    
    /**
     * 산업군조회 저장
     * @param paramMap Map
     * @return int
     * @throws Exception
     */
	@Override
	public int saveCustIddt(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("custIddt.saveCustIddt", paramMap);
	}
	
	/**
     * 산업군조회 삭제
     * @param paramMap Map
     * @return int
     * @throws Exception
     */
	@Override
	public int deleteCustIddt(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("custIddt.deleteCustIddt", paramMap);
	}
	
	/**
     * 산업군조회 영업담당 콤보박스 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCombo(Map<String, Object> searchMap) {
        return sqlSession.selectList("custIddt.selectCombo", searchMap);
    }

    /**
     * 해당 산업군 정보가 사용중인지 체크
     * @param searchMap Map
     * @return List
     */
	@Override
	public int selectBzplcIddtChk(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("custIddt.selectBzplcIddtChk", searchMap);
	}

	/**
     * 산업군명 중복여부 체크
     * @param searchMap Map
     * @return List
     */
	@Override
	public int selectDuplNmChk(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("custIddt.selectDuplNmChk", searchMap);
	}
	/**
	 * 
	 * 상품군 조회
	 */
	@Override
	public List<Map<String,Object>> selectPrdPlcdList (Map<String,Object> prdSearchMap) throws Exception{
		return sqlSession.selectList("custIddt.selectPrdPlcdList", prdSearchMap);
	}
	
	/**
	 * 
	 * 산업군 상세 패키지 정보 조회 
	 */
	@Override
	public Map<String,Object> selectIddtMktgInfo (Map<String,Object> searchMap) throws Exception{
		return sqlSession.selectOne("custIddt.selectIddtMktgInfo", searchMap);
	}
	/**
	 * 
	 * 산업군 상세 패키지 정보 저장
	 */
	@Override
	public Map<String,Object> saveIddtMktgInfo (Map<String,Object> saveMap) throws Exception{
		return sqlSession.selectOne("custIddt.saveIddtMktgInfo", saveMap);
	}
	
	/**
	 * 
	 * 산업군 상세 기본(mro_iddt_id)저장
	 */
	@Override
	public Map<String,Object> updateIddtInfo (Map<String,Object> saveMap) throws Exception{
		return sqlSession.selectOne("custIddt.updateIddtInfo", saveMap);
	}
	
	/**
	 * 
	 * 산업군 마케팅(패키지) 정보 기본 노출여부 N
	 */
	@Override
	public int saveCustIddtMktg (Map<String,Object> saveMap) throws Exception{
		return sqlSession.update("custIddt.saveCustIddtMktg", saveMap);
	}
}	
