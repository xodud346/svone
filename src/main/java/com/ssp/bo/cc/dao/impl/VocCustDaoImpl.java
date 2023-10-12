package com.ssp.bo.cc.dao.impl;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.VocCustDao;


/** 
 * <pre>
 * @title voc
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * @ClassName VocCustDaoImpl
 * </pre>
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@Repository("vocCustDao")
public class VocCustDaoImpl implements VocCustDao {

	@Autowired
    private SqlSession sqlSession;

    /**
     * voc현황목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectVocStatusList(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.vocCust.selectVocStatusList", searchMap);
    }

    /**
     * voc대분류목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectVocGclsList(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.vocCust.selectVocGclsList", searchMap);
    }
  
    /**
     * voc중분류목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectVocMclasList(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.vocCust.selectVocMclasList", searchMap);
    }
 
    /**
     * voc소분류목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectVocSclsList(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.vocCust.selectVocSclsList", searchMap);
    }

    /**
     * voc상세정보 조회
     * @param searchMap Map
     * @return Map
     */
    @Override
    public Map<String, Object> selectVocDtlInfo(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.cc.vocCust.selectVocDtlInfo", searchMap);
    }

    /**
     * voc처리현황목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectVocProcList(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.vocCust.selectVocProcList", searchMap);
    }

    /**
     * voc반품/교환/AS 조회
     * @param searchMap Map
     * @return Map
     */
    @Override
    public Map<String, Object> selectExceptionProcDtl(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("com.ssp.bo.cc.vocCust.selectExceptionProcDtl", searchMap);
    }

    /**
     * voc반품/교환/AS 목록1 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectExceptionProcList1(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.vocCust.selectExceptionProcList1", searchMap);
    }

    /**
     * voc반품/교환/AS 목록2 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectExceptionProcList2(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.cc.vocCust.selectExceptionProcList2", searchMap);
    }

    /**
     * voc 첨부파일 목록
     * @param searchMap Map
     * @return List
     */
	@Override
	public List<Map<String, Object>> selectVocReqFileList(Map<String, Object> searchMap) {
		return sqlSession.selectList("com.ssp.bo.cc.vocCust.selectVocReqFileList", searchMap);
	}
	
	/**
	 * VOC현황 > VOC현황 상세 > 반품배송정보 > 주문상세 배송정보 배송자차 조회
	 */
	@Override
	public List<Map<String, Object>> selectDlvSrvonInfo(Map<String, Object> searchMap) {
		return sqlSession.selectList("com.ssp.bo.cc.vocCust.selectDlvSrvonInfo", searchMap);
	}

	/**
	 * VOC현황 > VOC현황 상세 > 반품배송정보 > 주문상세 배송정보 배송택배 조회
	 */
	@Override
	public List<Map<String, Object>> selectDlvHdvInfo(Map<String, Object> searchMap) {
		return sqlSession.selectList("com.ssp.bo.cc.vocCust.selectDlvHdvInfo", searchMap);
	}

	/**
	 * VOC현황 > VOC현황 상세 > 등록된 첨부파일 조회
	 */
	@Override
	public List<Map<String, Object>> selectVocDocFileList(Map<String, Object> searchMap) {
		return sqlSession.selectList("com.ssp.bo.cc.vocCust.selectVocDocFileList", searchMap);
	}

}
