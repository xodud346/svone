package com.ssp.bo.cc.dao.impl;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.dao.CustBizplcDao;


/**
 * <pre>
 * @title 예산
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * @ClassName CustBizplcImplDao
 * </pre>
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@Repository("custBizplcDao")
public class CustBizplcDaoImpl implements CustBizplcDao {

    @Autowired
    private SqlSession sqlSession;

    /**
     * 콤보박스 데이터 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCodeList(Map<String, Object> searchMap) {
        return sqlSession.selectList("custBizplc.selectCodeList", searchMap);
    }
   
    /**
     * 사업장상세정보 조회
     * @param searchMap Map
     * @return Map
     */
    @Override
    public Map<String, Object> selectBizplcDtl(Map<String, Object> searchMap) throws Exception {
        return sqlSession.selectOne("custBizplc.selectBizplcDtl", searchMap);
    }

    /**
     * 수금조건 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectBilcltCondList(Map<String, Object> searchMap) {
        return sqlSession.selectList("custBizplc.selectBilcltCondList", searchMap);
    }

    /**
     * 결제수단 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectStlMeanList(Map<String, Object> searchMap) {
        return sqlSession.selectList("custBizplc.selectStlMeanList", searchMap);
    }

    /**
     * 사업장 산업군, 등급 수정
     * @param map Map
     * @return 
     */
	@Override
	public void updateBizplcDtl(Map<String, Object> map) throws Exception {
		sqlSession.update("custBizplc.updateBizplcDtl", map);
	}

	 /**
     * 예산년도 시작월 수정
     * @param map Map
     * @return 
     */
	@Override
	public void updateBizplcCtlAuth(Map<String, Object> map) throws Exception {
		sqlSession.update("custBizplc.updateBizplcCtlAuth", map);
	}

	 /**
     * 사업장 산업군, 등급 수정, 예산년도 시작월 이력 등록
     * @param map Map
     * @return 
     */
	@Override
	public void insertBizplcCtlAuthHst(Map<String, Object> map) throws Exception {
		sqlSession.update("custBizplc.insertBizplcCtlAuthHst", map);
	}

    /**
     * 첨부파일 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectBizFileList(Map<String, Object> searchMap) {
        return sqlSession.selectList("custBizplc.selectBizFileList", searchMap);
    }
    
    /**
     * 사업장명 조회(중복확인)
     * @param searchMap Map
     * @return map Map
     */
	@Override
	public Map<String, Object> selectBzplcDupCheck(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("custBizplc.selectBzplcDupCheck", searchMap);
	}
	
    /**
     * 사업장명 조회(사업자ID로 사업자명 검색)
     * @param searchMap Map
     * @return map Map
     */
	@Override
	public Map<String, Object> selectBzplcOne(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("custBizplc.selectBzplcOne", searchMap);
	}

    /**
     * 사업장 수정 데이터 ReqInfo insert
     * @param map Map
     * @return map Map
     */
	@Override
	public int insertSelectBzplcBasisReqInfo(Map<String, Object> map) {
		CCUtils.prefixCoCd(map);
		return sqlSession.insert("custBizplc.insertSelectBzplcBasisReqInfo", map);
	}

    /**
     * 운영단위 수정 데이터 ReqInfo insert
     * @param map Map
     * @return map Map
     */
	@Override
	public int insertSelectOprUnitBasisReqInfo(Map<String, Object> map) {
		CCUtils.prefixCoCd(map);	
		return sqlSession.insert("custBizplc.insertSelectOprUnitBasisReqInfo", map);		
	}
	
	/**
	 * 일반고객 사업장명 수정에 따른 부서명 수정
	 * @param map Map
     * @return map Map
	 */
	@Override
	public int updateDeptDtl(Map<String, Object> map) {
		return sqlSession.update("custBizplc.updateDeptDtl", map);
	}
	
	/* [2023-03-01] sg.park AI-015 일반고객의 여신거래 가능 프로세스 추가 */
	@Override
	public Map<String, String> selectPiLog(Map<String, Object> map) throws Exception {
		return sqlSession.selectOne("custBizplc.selectPiLog", map);
	}

	@Override
	public int selectPiBzplc(Map<String, Object> param) throws Exception {
		return sqlSession.selectOne("custBizplc.selectPiBzplc", param);
	}
	/* /[2023-03-01] sg.park AI-015 일반고객의 여신거래 가능 프로세스 추가 */
	
	/* [2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */
	/**
	 * CMS의료기기 판매허가 첨부파일
	 * 
	 * @param map
	 * @return
	 */
	public List<Map<String, Object>> selectBzplcMediDeviSellPermitAtfls(Map<String, Object> map) throws Exception {
		return sqlSession.selectList("custBizplc.selectBzplcMediDeviSellPermitAtfls", map);
	}
	
	public int saveMediDeviSellPermitAtfls(Map<String, Object> map) throws Exception {
		return sqlSession.insert("custBizplc.saveMediDeviSellPermitAtfls", map);
	}
	public int reqtMediDeviSellPermitAtfls(Map<String, Object> map) throws Exception {
		return sqlSession.insert("custBizplc.reqtMediDeviSellPermitAtfls", map);
	}

//	public int deleBzplcMediDeviSellPermitAtfls(Map<String, Object> map) throws Exception {
//		return sqlSession.delete("custBizplc.deleBzplcMediDeviSellPermitAtfls", map);
//	}
	/*/[2023-03-01] sg.park AI-018 CMS의료기기 사업장 관리 */

	@Override
	public int bzplcChrpsnInfoReset(Map<String, Object> map) {
		return sqlSession.update("custBizplc.bzplcChrpsnInfoReset", map);
	}

	@Override
	public int oprUnitChrpsnInfoReset(Map<String, Object> map) {
		return sqlSession.update("custBizplc.oprUnitChrpsnInfoReset", map);
	}
}
