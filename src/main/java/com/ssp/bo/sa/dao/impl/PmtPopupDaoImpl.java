package com.ssp.bo.sa.dao.impl;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.PmtPopupDao;

/**
 * <pre></pre>
 * @title 프로모션 팝업 DaoImpl
 * @desc
 * @package com.ssp.bo.sa.dao.impl
 * <pre>    com.ssp.bo.sa.pmtPopupDaoImpl</pre>
 * @author
 * @since 2023. 01. 26.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.01.26.		87minho	최초작성
 */
@Repository("pmtPopupDao")
public class PmtPopupDaoImpl implements PmtPopupDao {

	@Autowired
	private SqlSession sqlSession;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectcom.ssp.bo.sa.pmtPopupExpsList
	 * 2. ClassName  : com.ssp.bo.sa.pmtPopupDaoImpl
	 * 3. Comment    : 프로모션 팝업 노출 목록 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectPmtPopupList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.sa.pmtPopup.selectPmtPopupList", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectcom.ssp.bo.sa.pmtPopupListCnt
	 * 2. ClassName  : com.ssp.bo.sa.pmtPopupDaoImpl
	 * 3. Comment    : 프로모션 팝업 목록 총 합계 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectPmtPopupListCnt(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.sa.pmtPopup.selectPmtPopupListCnt", paramMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : updatePmtPopupDispSo
	 * 2. ClassName  : PmtPopupDaoImpl
	 * 3. Comment    : 프로모션 팝업 순서 저장
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param saveMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updatePmtPopupDispSo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.sa.pmtPopup.updatePmtPopupDispSo", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPmtPopupInfo
	 * 2. ClassName  : PmtPopupDaoImpl
	 * 3. Comment    : 프로모션 팝업 상세 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectPmtPopupInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.sa.pmtPopup.selectPmtPopupInfo", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPmtPopupOprUnitList
	 * 2. ClassName  : PmtPopupDaoImpl
	 * 3. Comment    : 프로모션 팝업 운영단위 리스트 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectPmtPopupOprUnitList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.sa.pmtPopup.selectPmtPopupOprUnitList", paramMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPmtPopupAplyDtlList
	 * 2. ClassName  : PmtPopupDaoImpl
	 * 3. Comment    : 프로모션 팝업 적용 상세 리스트 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectPmtPopupAplyDtlList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.sa.pmtPopup.selectPmtPopupAplyDtlList", paramMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPmtPopupSeq
	 * 2. ClassName : PmtPopupDaoImpl
	 * 3. Comment : 프로모션 팝업 시퀀스 값 조회
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.01.26.
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public String selectPmtPopupSeq(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.sa.pmtPopup.selectPmtPopupSeq", paramMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : insertPmtPopupDtl
	 * 2. ClassName  : PmtPopupDaoImpl
	 * 3. Comment    : 프로모션 팝업 등록
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertPmtPopupDtl(Map<String, Object> paramMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.sa.pmtPopup.insertPmtPopupDtl", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : updatePmtPopupDtl
	 * 2. ClassName  : PmtPopupDaoImpl
	 * 3. Comment    : 프로모션 팝업 수정
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updatePmtPopupDtl(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.sa.pmtPopup.updatePmtPopupDtl", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertPmtPopupOprUnit
	 * 2. ClassName  : PmtPopupDaoImpl
	 * 3. Comment    : 프로모션 팝업 운영단위 등록
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertPmtPopupOprUnit(Map<String, Object> paramMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.sa.pmtPopup.insertPmtPopupOprUnit", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deletePmtPopupInfo
	 * 2. ClassName  : PmtPopupDaoImpl
	 * 3. Comment    : 프로모션 팝업 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deletePmtPopupInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.sa.pmtPopup.deletePmtPopupInfo", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deletePmtPopupOprUnit
	 * 2. ClassName  : PmtPopupDaoImpl
	 * 3. Comment    : 프로모션 팝업 운영단위 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deletePmtPopupOprUnit(Map<String, Object> paramMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.sa.pmtPopup.deletePmtPopupOprUnit", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deletePmtPopupAplyInfo
	 * 2. ClassName  : PmtPopupDaoImpl
	 * 3. Comment    : 프로모션 팝업 적용 상세 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deletePmtPopupAplyDtl(Map<String, Object> paramMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.sa.pmtPopup.deletePmtPopupAplyDtl", paramMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : insertPmtPopupAplyDtl
	 * 2. ClassName  : PmtPopupDaoImpl
	 * 3. Comment    : 프로모션 적용 상세 등록
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertPmtPopupAplyDtl(Map<String, Object> paramMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.sa.pmtPopup.insertPmtPopupAplyDtl", paramMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : updatePmtPopupAplyDtl
	 * 2. ClassName  : PmtPopupDaoImpl
	 * 3. Comment    : 프로모션 적용 상세 수정
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.01.26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updatePmtPopupAplyDtl(Map<String, Object> paramMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.sa.pmtPopup.updatePmtPopupAplyDtl", paramMap);
	}

}
