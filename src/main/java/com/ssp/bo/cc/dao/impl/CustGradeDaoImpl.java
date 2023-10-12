package com.ssp.bo.cc.dao.impl;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustGradeDao;


/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * <pre>    CustGradeDaoImpl</pre>
 * @author  moonjooh
 * @since   2022. 02. 10.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@Repository("custGradeDao")
public class CustGradeDaoImpl implements CustGradeDao {

    @Autowired
    private SqlSession sqlSession;
    
    /**
     * 고객등급 리스트 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCustGrdList(Map<String, Object> searchMap) {
        return sqlSession.selectList("custGrade.selectCustGrdList", searchMap);
    }

    /**
     * 고객등급 리스트 카운트
     * @param searchMap Map
     * @return List
     */
    @Override
	public int selectCustGrdListCount(Map<String, Object> searchMap) throws Exception{
		return sqlSession.selectOne("custGrade.selectCustGrdListCount", searchMap);
	}
    
    /**
     * 고객등급 리스트를 수정/저장
     * @param saveMap Map
     * @return 
     */
    @Override
	public int saveCustGrd(Map<String, Object> saveMap) throws Exception{
		return sqlSession.update("custGrade.saveCustGrd", saveMap);
	}
	
	/**
     * 고객등급 사용중인 데이터 체크
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCustGrdChk(Map<String, Object> searchMap) {
        return sqlSession.selectList("custGrade.selectCustGrdChk", searchMap);
    }

    /**
     * 입력한 날짜포맷 유효성체크
     * @param searchMap Map
     * @return List
     */
	@Override
	public int selectChkLackTime(Map<String, Object> saveMap) throws Exception {
		return sqlSession.selectOne("custGrade.selectChkLackTime", saveMap);
	}

    /**
     * 해당 ID에 중복되는 유효기간 데이터가 있는지 체크
     * @param searchMap Map
     * @return List
     */
	@Override
	public List<Map<String, Object>> selectOverlapTime(Map<String, Object> saveMap) throws Exception {
		return sqlSession.selectList("custGrade.selectOverlapTime", saveMap);
	}

	@Override
	public String selectVldPerdEndDtm(Map<String, Object> saveMap) throws Exception {
		return sqlSession.selectOne("custGrade.selectVldPerdEndDtm", saveMap);
	}

	@Override
	public int updateGrdDtm(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("custGrade.updateGrdDtm", saveMap);
	}

	@Override
	public List<Map<String, Object>> selectCustGradeHst(Map<String, Object> searchMap) {
		return sqlSession.selectList("custGrade.selectCustGradeHst", searchMap);
	}

	@Override
	public int selectChkLastSeq(Map<String, Object> saveMap) throws Exception {
		return sqlSession.selectOne("custGrade.selectChkLastSeq", saveMap);
	}

	@Override
	public int updateGrdAplyDcrt(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("custGrade.updateGrdAplyDcrt", saveMap);
	}

	@Override
	public int selectchkLastDate(Map<String, Object> saveMap) throws Exception {
		return sqlSession.selectOne("custGrade.selectchkLastDate", saveMap);
	}

	@Override
	public int selectchkDate(Map<String, Object> saveMap) throws Exception {
		return sqlSession.selectOne("custGrade.selectchkDate", saveMap);
	}

	@Override
	public int selectMaxSeq(Map<String, Object> saveMap) throws Exception {
		return sqlSession.selectOne("custGrade.selectMaxSeq", saveMap);
	}

	@Override
	public int updateNextSeq(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("custGrade.updateNextSeq", saveMap);
	}

	@Override
	public int saveCustGrdSetSeq(Map<String, Object> saveMap) throws Exception {
		return sqlSession.insert("custGrade.saveCustGrdSetSeq", saveMap);
	}

	@Override
	public String selectVldPerdSysdate(Map<String, Object> saveMap) throws Exception {
		return sqlSession.selectOne("custGrade.selectVldPerdSysdate", saveMap);
	}

}
