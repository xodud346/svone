package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustBgtHstDao;


/**
 * <pre>
 * @title 예산이력
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * @ClassName CustBgtHstDaoImpl
 * </pre>
 * @author  박성근
 * @since   2022. 03. 17.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@Repository("custBgtHstDao")
public class CustBgtHstDaoImpl implements CustBgtHstDao {

    @Autowired
    private SqlSession sqlSession;
    
    private final String NS = "com.ssp.cc.bgt.hst.";
    private String ns(String sqlId) {
    	return new StringBuffer(NS).append(sqlId).toString();
    }
    
    /**
     * 예산이력 목록조회
     * @param param Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectBgtHstList(Map<String, Object> param) {
        return sqlSession.selectList(ns("selectBgtHstList"), param);
    }
    
//
//    /**
//     * 부서/계정 설정 조회
//     * @param param Map
//     * @return List
//     */
//    
//    public List<Map<String, Object>> selectBgtDeptMappList(Map<String, Object> param) {
//        return sqlSession.selectList("custBgt.selectBgtDeptMappList", param);
//    }
//
//	/**
//     * 예산설정 부서/계정 부서 수정
//     * @param map
//     * @return 
//     */	
//	
//	public void updateBgtMappDept(Map<String, Object> map) throws Exception {
//    	sqlSession.insert("custBgt.updateBgtMappDept", map);
//	}
//
//    /**
//     * 분기예산사용여부 조회
//     * @param param Map
//     * @return List
//     */
//    
//    public Map<String, Object> selectQrtBgtUseYn(Map<String, Object> param) throws Exception {
//        return sqlSession.select("custBgt.selectQrtBgtUseYn", param);
//    }
//
//    /**
//     * 부서/계정 설정 상세 조회(부서별)
//     * @param param Map
//     * @return List
//     */
//    
//    public List<Map<String, Object>> selectBgtDeptDtlMappList(Map<String, Object> param) {
//        return sqlSession.selectList("custBgt.selectBgtDeptDtlMappList", param);
//    }
//
//	/**
//     * 부서/계정 설정 상세 저장(부서별)
//     * @param map
//     * @return 
//     */	
//	
//	public void saveBgtDeptDtl(Map<String, Object> map) throws Exception {
//    	sqlSession.insert("custBgt.saveBgtDeptDtl", map);
//	}
//
//	/**
//     * 부서/계정 설정 이력 저장(부서별)
//     * @param map
//     * @return 
//     */	
//	
//	public void saveBgtDeptDtlHst(Map<String, Object> map) throws Exception {
//    	sqlSession.insert("custBgt.saveBgtDeptDtlHst", map);
//	}

	
}
