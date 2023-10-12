package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;



import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustAcctDao;


/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.cc.dao.impl
 * <pre>    CustAcctDaoImpl
 * @author 
 * @since 2022.02.17
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.17		최초작성
 */
@SuppressWarnings("unchecked")
@Repository("custAcctDao")
public class CustAcctDaoImpl implements CustAcctDao {

    @Autowired
    private SqlSession sqlSession;

    /**
     * 계정 등록
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int insertAcctBasis(Map<String, Object> paramMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.cc.acct.insertAcctBasis", paramMap);
	}

	/**
     * 계정 정보 수정
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int updateAcctBasis(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.cc.acct.updateAcctBasis", paramMap);
	}

	/**
     * 계정 정보 수정2
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int updateAcctBasis2(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.cc.acct.updateAcctBasis2", paramMap);
	}

	/**
     * 계정 단일조회 팝업 카운트 조회
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int selectAcctSinglePopupListCnt(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.acct.selectAcctSinglePopupListCnt", paramMap);
	}
	

	/**
     * 계정 단일조회 팝업 리스트 조회
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectAcctSinglePopupList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.cc.acct.selectAcctSinglePopupList", paramMap);
	}
	
	
	/**
     * 계정 단일조회 팝업 카운트 조회(상위계정 대상 조회)
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int selectAcctSingleHrnkAcctPopupListCnt(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.acct.selectAcctSingleHrnkAcctPopupListCnt", paramMap);
	}
	
	/**
     * 계정 단일조회 팝업 리스트 조회(상위계정 대상 조회)
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectAcctSingleHrnkAcctPopupList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.cc.acct.selectAcctSingleHrnkAcctPopupList", paramMap);
	}

	/**
     * 계정 단일조회 팝업 카운트 조회(상위계정 대상 조회)
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int selectAcctSingleHrnkAcctPopupListCnt2(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.acct.selectAcctSingleHrnkAcctPopupListCnt2", paramMap);
	}
	
	/**
     * 계정 단일조회 팝업 리스트 조회(상위계정 대상 조회)
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectAcctSingleHrnkAcctPopupList2(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.cc.acct.selectAcctSingleHrnkAcctPopupList2", paramMap);
	}
	
	/**
     * 계정 멀티조회 팝업 카운트 조회
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int selectAcctMultiPopupListCnt(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.acct.selectAcctMultiPopupListCnt", paramMap);
	}

	/**
     * 계정 멀티조회 팝업 리스트 조회
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectAcctMultiPopupList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.cc.acct.selectAcctMultiPopupList", paramMap);
	}

	/**
     * 계정에 매핑된 부서 리스트 카운트 조회
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int selectAcctDeptMappListCnt(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.acct.selectAcctDeptMappListCnt", paramMap);
	}

	/**
     * 계정에 매핑된 부서 리스트 조회
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectAcctDeptMappList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.cc.acct.selectAcctDeptMappList", paramMap);
	}
	
	/**
     * 예산계정부서매핑 정보 등록
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int insertBgtAcctDeptMapp(Map<String, Object> paramMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.cc.acct.insertBgtAcctDeptMapp", paramMap);
	}

	/**
     * 예산계정부서매핑 정보 삭제처리(UPDATE)
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int deleteBgtAcctDeptMapp(Map<String, Object> paramMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.cc.acct.deleteBgtAcctDeptMapp", paramMap);
	}
	
	/**
     * 계정설정 계정트리 조회(계정/부서)
     * @param paramMap Map
     * @return List
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectAcctTreeList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.cc.acct.selectAcctTreeList", paramMap);
	}

	/**
     * 계정설정 계정상세정보 조회
     * @param paramMap Map
     * @return List
     * @throws Exception sqlException
     */
	@Override
	public Map<String, Object> selectAcctDtlInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.acct.selectAcctDtlInfo", paramMap);
	}

	/**
     * 매핑 부서, 계정 리스트 조회
     * @param paramMap Map
     * @return List
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectAcctDeptMappListByAcctId(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.cc.acct.selectAcctDeptMappListByAcctId", paramMap);
	}

	/**
     * 매핑 부서, 계정 리스트 조회
     * @param paramMap Map
     * @return List
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectAcctDeptMappListByDeptId(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.cc.acct.selectAcctDeptMappListByDeptId", paramMap);
	}

	/**
     * 계정명 및 계정코드 수정
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public void updateBgtAcctBasis(Map<String, Object> paramMap) throws Exception {
		sqlSession.update("com.ssp.bo.cc.acct.updateBgtAcctBasis", paramMap);
	}

	/**
     * 부서명 및 부서코드 수정
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public void updateDeptBasis(Map<String, Object> paramMap) throws Exception {
		sqlSession.update("com.ssp.bo.cc.acct.updateDeptBasis", paramMap);
	}

	/**
     * 계정설정 계정트리 조회(부서/계정)
     * @param paramMap Map
     * @return List
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectDeptTreeList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.cc.acct.selectDeptTreeList", paramMap);
	}

	/**
     * 계정설정 부서상세정보 조회
     * @param paramMap Map
     * @return List
     * @throws Exception sqlException
     */
	@Override
	public Map<String, Object> selectDeptDtlInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.acct.selectDeptDtlInfo", paramMap);
	}
	
	/**
     * 계정관리 트리 조회
     * @param paramMap Map
     * @return List
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectBizplcAcctTreeList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.cc.acct.selectBizplcAcctTreeList", paramMap);
	}
	
	@Override
	public int updateBzplcAcctLvlInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.cc.acct.updateBzplcAcctLvlInfo", paramMap);
	}

	@Override
	public int selectAcctUnderChk(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.acct.selectAcctUnderChk", paramMap);
	}

	@Override
	public Map<String, Object> selectBgtAcctIdDetail(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.acct.selectBgtAcctIdDetail", paramMap);
	}

	@Override
	public int selectBzplcIdChk(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.acct.selectBzplcIdChk", paramMap);
	}

	@Override
	public Map<String, Object> selectCheckHrnkAcct(Map<String, Object> paramMap) throws Exception {		
		return sqlSession.selectOne("com.ssp.bo.cc.acct.selectCheckHrnkAcct", paramMap);
	}
	
	/**
     * 비용부서 리스트 조회
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectComCostTrnsfDeptList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.cc.acct.selectComCostTrnsfDeptList", paramMap);
	}
	
	/**
     * 참조코드 단일조회 팝업 카운트 조회
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int selectRefSinglePopupListCnt(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.acct.selectRefSinglePopupListCnt", paramMap);
	}
	
	/**
     * 참조코드 단일조회 팝업 리스트 조회
     * @param paramMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectRefSinglePopupList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.cc.acct.selectRefSinglePopupList", paramMap);
	}
	
}
