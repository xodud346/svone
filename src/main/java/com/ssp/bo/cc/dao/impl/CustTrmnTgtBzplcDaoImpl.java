package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustTrmnTgtBzplcDao;


/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * <pre>    CustTrmnTgtBzplcDaoImpl</pre>
 * @author  moonjooh
 * @since   2022. 05. 09.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.05.09		최초작성
 */
@Repository("custTrmnTgtBzplcDao")
public class CustTrmnTgtBzplcDaoImpl implements CustTrmnTgtBzplcDao {

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 일반고객 종결대상 사업장 목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCustTrmnTgtBzplc(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cust.trmn.tgt.bzplc.selectCustTrmnTgtBzplc", searchMap);
    }

    /**
     * 일반고객 종결대상 사업장 종결처리
     * @param searchMap Map
     * @return List
     */
	@Override
	public int updateTrmnTgtBzplc(Map<String, Object> saveMap) throws Exception {
        return sqlSession.update("com.ssp.bo.cust.trmn.tgt.bzplc.updateTrmnTgtBzplc", saveMap);
	}

	/**
     * 일반고객 종결대상 사업장 종결처리
     * @param searchMap Map
     * @return List
     */
	@Override
	public int updateMbrNoUse(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("com.ssp.bo.cust.trmn.tgt.bzplc.updateMbrNoUse"    , saveMap);  // 종결처리 - 부서
	}
	
	@Override
	public int updateDeptNoUse(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("com.ssp.bo.cust.trmn.tgt.bzplc.updateDeptNoUse"   , saveMap);  // 종결처리 - 부서
	}
	
	@Override
	public int updateOprUnitNoUse(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("com.ssp.bo.cust.trmn.tgt.bzplc.updateOprUnitNoUse", saveMap);  // 종결처리 - 운영단위
	}

	@Override
	public int updateBzplcNoUse(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("com.ssp.bo.cust.trmn.tgt.bzplc.updateBzplcNoUse"  , saveMap);  // 종결처리 - 사업장
	}

}
