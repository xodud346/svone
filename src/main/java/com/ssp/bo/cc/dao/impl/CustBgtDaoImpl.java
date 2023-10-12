package com.ssp.bo.cc.dao.impl;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustBgtDao;


/**
 * <pre>
 * @title 예산
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * @ClassName CustBgtImplDao
 * </pre>
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@Repository("custBgtDao")
public class CustBgtDaoImpl implements CustBgtDao {

    @Autowired
    private SqlSession sqlSession;

    /**
     * 예산목록(일반) 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectBgtList(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.custBgt.selectBgtList", searchMap);
    }

    /**
     * 예산목록(공통) 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectBgtCommonList(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.custBgt.selectBgtCommonList", searchMap);
    }
    
    /**
     * 예산이월목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectBgtTransMonthList(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.custBgt.selectBgtTransMonthList", searchMap);
    }


	/**
     * 일반예산이월 상세 저장(이체할 계정)
     * @param map
     * @return 
     */	
	@Override
	public void saveBgtTransMonthDtlFrom(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.cc.custBgt.saveBgtTransMonthDtlFrom", map);
	}

	/**
     * 일반예산이월 상세 저장(이체받을 계정)
     * @param map
     * @return 
     */	
	@Override
	public void saveBgtTransMonthDtlTo(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.cc.custBgt.saveBgtTransMonthDtlTo", map);
	}

	/**
     * 일반예산이월 이력 저장
     * @param map
     * @return 
     */	
	@Override
	public void saveBgtTransMonthHst(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.cc.custBgt.saveBgtTransMonthHst", map);
	}
	
    /**
     * 부서/계정 설정 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectBgtDeptMappList(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.custBgt.selectBgtDeptMappList", searchMap);
    }

    /**
     * 계정/부서 설정 조회(일반)
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectBgtDeptMappListByAcct(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.custBgt.selectBgtDeptMappListByAcct", searchMap);
    }

    /**
     * 계정/부서 설정 조회(공통)
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectBgtDeptMappListByCommonAcct(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.custBgt.selectBgtDeptMappListByCommonAcct", searchMap);
    }

	/**
     * 예산설정 부서/계정 부서 수정
     * @param map
     * @return 
     */	
	@Override
	public void updateBgtMappDept(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.cc.custBgt.updateBgtMappDept", map);
	}

	/**
     * 예산설정 계정/부서 에산사용 상위계정 수정
     * @param map
     * @return 
     */	
	@Override
	public void updateBgtMappBgtUseHrnkAcct(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.cc.custBgt.updateBgtMappBgtUseHrnkAcct", map);
	}

    /**
     * 분기예산사용여부 조회(운영단위)
     * @param searchMap Map
     * @return List
     */
    @Override
    public Map<String, Object> selectQrtBgtUseYn(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.cc.custBgt.selectQrtBgtUseYn", searchMap);
    }

    /**
     * 분기예산사용여부 조회(사업장)
     * @param searchMap Map
     * @return List
     */
    @Override
    public Map<String, Object> selectBzplcQrtBgtUseYn(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.cc.custBgt.selectBzplcQrtBgtUseYn", searchMap);
    }

    /**
     * 부서/계정 설정 상세 조회(부서별)
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectBgtDeptDtlMappListByDept(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.custBgt.selectBgtDeptDtlMappListByDept", searchMap);
    }

    /**
     * 부서/계정 설정 상세 조회(계정별)
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectBgtDeptDtlMappListByAcct(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.custBgt.selectBgtDeptDtlMappListByAcct", searchMap);
    }

    /**
     * 부서/계정 설정 상세 조회(공통)
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectBgtDeptDtlMappListByCommonAcct(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.custBgt.selectBgtDeptDtlMappListByCommonAcct", searchMap);
    }

	/**
     * 부서/계정 설정 상세 저장(부서별)
     * @param map
     * @return 
     */	
	@Override
	public void saveBgtDeptDtl(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.cc.custBgt.saveBgtDeptDtl", map);
	}

	/**
     * 부서/계정 설정 이력 저장(부서별)
     * @param map
     * @return 
     */	
	@Override
	public void saveBgtDeptDtlHst(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.cc.custBgt.saveBgtDeptDtlHst", map);
	}

	/**
     * 부서/계정 설정 상세 저장(공통)
     * @param map
     * @return 
     */	
	@Override
	public void saveBgtCommonAcctDtl(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.cc.custBgt.saveBgtCommonAcctDtl", map);
	}

	/**
     * 부서/계정 설정 이력 저장(공통)
     * @param map
     * @return 
     */	
	@Override
	public void saveBgtCommonAcctDtlHst(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.cc.custBgt.saveBgtCommonAcctDtlHst", map);
	}
	
    /**
     * 일반예산이체  계정잔액 조회
     * @param searchMap Map
     * @return Map
     * 박재광 2022.03.28
     */
    @Override
    public Map<String, Object> selectBalanceAmt(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.cc.custBgt.selectBalanceAmt", searchMap);
    }

	/**
     * 일반예산이체 예산변경이력 등록
     * @param map
     * @return void
     * 박재광 2022.03.28
     */
	@Override
	public void insertBgtChgHst(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.cc.custBgt.insertBgtChgHst", map);
	}

    /**
     * 예산내역에 있나 확인
     * @param searchMap Map
     * @return int
     * 박재광 2022.03.28
     */
    @Override
    public int selectLastBgtNo(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.cc.custBgt.selectLastBgtNo", searchMap);
    }

	/**
     * 일반예산이체 예산내역 수정 변경전
     * @param map
     * @return void
     * 박재광 2022.03.28
     */
	@Override
	public void updateBgtDtlsDsp(Map<String, Object> map) throws Exception {
    	sqlSession.update("com.ssp.bo.cc.custBgt.updateBgtDtlsDsp", map);
	}

	/**
     * 일반예산이체 예산내역 수정 변경후
     * @param map
     * @return void
     * 박재광 2022.03.28
     */
	@Override
	public void updateBgtDtlsRcv(Map<String, Object> map) throws Exception {
    	sqlSession.update("com.ssp.bo.cc.custBgt.updateBgtDtlsRcv", map);
	}

	/**
     * 일반예산이체 예산내역 등록
     * @param map
     * @return void
     * 박재광 2022.03.28
     */
	@Override
	public void insertBgtDtlsRcv(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.cc.custBgt.insertBgtDtlsRcv", map);
	}

	// 공통예산이월 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    /**
     * 공통예산이월 목록 조회
     * @param searchMap Map
     * @return List
     * 박재광 2022.04.06
     */
	public List<Map<String, Object>> selectComBgtFwList(Map<String, Object> searchMap) { 
    	return sqlSession.selectList("com.ssp.bo.cc.custBgt.selectComBgtFwList", searchMap);
    }
    
	/**
     * 공통예산이월 이력 등록
     * @param map
     * @return void
     * 박재광 2022.04.06
     */
	@Override
	public void insertComBgtFwHst(Map<String, Object> map) throws Exception {
		sqlSession.insert("com.ssp.bo.cc.custBgt.insertComBgtFwHst", map);
	}
    
    /**
     * 공통예산이월  예산내역에 있나 확인
     * @param searchMap Map
     * @return int
     * 박재광 2022.04.06
     */
    @Override
    public int selectLastBgtNoComBgtFw(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.cc.custBgt.selectLastBgtNoComBgtFw", searchMap);
    }

	/**
     * 공통예산이월 이체할 상세 저장
     * @param map
     * @return void
     * 박재광 2022.04.06
     */
	@Override
	public void updateComBgtFwDtlFrom(Map<String, Object> map) throws Exception {
		sqlSession.update("com.ssp.bo.cc.custBgt.updateComBgtFwDtlFrom", map);
	}
    
	/**
     * 공통예산이월 이체받을 상세 
     * @param map
     * @return void
     * 박재광 2022.04.06
     */
	@Override
	public void updateComBgtFwDtlTo(Map<String, Object> map) throws Exception {
		sqlSession.update("com.ssp.bo.cc.custBgt.updateComBgtFwDtlTo", map);
	}

	/**
     * 공통예산이월 이체받을 상세 
     * @param map
     * @return void
     * 박재광 2022.04.06
     */
	@Override
	public void insertComBgtFwDtlTo(Map<String, Object> map) throws Exception {
		sqlSession.insert("com.ssp.bo.cc.custBgt.insertComBgtFwDtlTo", map);
	}
	// 공통예산이월 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
}
