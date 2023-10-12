package com.ssp.bo.sa.dao.impl;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.BnrDao;

/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.sa.dao.impl
 * <pre>    BnrDaoImpl</pre>
 * @author
 * @since 2022. 03. 14.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.14.		87minho	최초작성
 */
@Repository("bnrDao")
public class BnrDaoImpl implements BnrDao {

	@Autowired
	private SqlSession sqlSession;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBnrExpsList
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 노출 목록 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectBnrExpsList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("Bnr.selectBnrExpsList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBnrListCnt
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 목록 총 합계 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.15.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectBnrListCnt(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("Bnr.selectBnrListCnt", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBnrList
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 목록 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.15.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectBnrList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("Bnr.selectBnrList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : updateBnrDispSo
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 순서 저장
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.16.
	 * </pre>
	 *
	 * @param saveMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateBnrDispSo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("Bnr.updateBnrDispSo", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteBnrExps
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 노출 정보 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.16.
	 * </pre>
	 *
	 * @param deleteMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteBnrExps(Map<String, Object> deleteMap) throws Exception {
		return sqlSession.delete("Bnr.deleteBnrExps", deleteMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteBnrExpsRelBnr
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 삭제(배너 노출정보 삭제 뒤 배너 정보 삭제)
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.16.
	 * </pre>
	 *
	 * @param deleteMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteBnrExpsRelBnr(Map<String, Object> deleteMap) throws Exception {
		return sqlSession.delete("Bnr.deleteBnrExpsRelBnr", deleteMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteBnrPrd
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 상품 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.16.
	 * </pre>
	 *
	 * @param deleteMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteBnrPrd(Map<String, Object> deleteMap) throws Exception {
		return sqlSession.delete("Bnr.deleteBnrPrd", deleteMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertBnrPrdDtl
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 상품 등록
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.21.
	 * </pre>
	 *
	 * @param saveMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertBnrPrdDtl(Map<String, Object> saveMap) throws Exception {
		return sqlSession.insert("Bnr.insertBnrPrdDtl", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBnrInfo
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 상세 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.16.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectBnrInfo(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("Bnr.selectBnrInfo", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBnrOprUnit
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 운영단위 리스트 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.16.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectBnrOprUnitList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("Bnr.selectBnrOprUnitList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertBnrExpsInfo
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 노출정보 등록
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertBnrExpsInfo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.insert("Bnr.insertBnrExpsInfo", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertBnrInfo
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 등록
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertBnrInfo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.insert("Bnr.insertBnrInfo", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : updateBnrInfo
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 수정
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateBnrInfo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("Bnr.updateBnrInfo", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertBnrOprUnit
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 운영단위 등록
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertBnrOprUnit(Map<String, Object> saveMap) throws Exception {
		return sqlSession.insert("Bnr.insertBnrOprUnit", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteBnrOprUnit
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 운영단위 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteBnrOprUnit(Map<String, Object> saveMap) throws Exception {
		return sqlSession.delete("Bnr.deleteBnrOprUnit", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteBnrInfo
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 배너 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteBnrInfo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.delete("Bnr.deleteBnrInfo", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPprCatgBnrList
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 인기카테고리 배너 목록 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.29.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectPprCatgBnrList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("Bnr.selectPprCatgBnrList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPprCatgBnrInfo
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 인기카테고리 배너 상세 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.04.21.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectPprCatgBnrInfo(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("Bnr.selectPprCatgBnrInfo", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPprCatgBnrMnfrList
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 인기카테고리 배너 제조사 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.04.22.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectPprCatgBnrMnfrList(Map<String, Object> saveMap) throws Exception {
		return sqlSession.selectList("Bnr.selectPprCatgBnrMnfrList", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : updatePprCatgBnrInfo
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 인기카테고리 배너 수정
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.04.22.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updatePprCatgBnrInfo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("Bnr.updatePprCatgBnrInfo", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deletePprCatgBnrMnfrInfo
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 인기카테고리 배너 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.04.22.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deletePprCatgBnrMnfrInfo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.delete("Bnr.deletePprCatgBnrMnfrInfo", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertPprCatgBnrMnfrInfo
	 * 2. ClassName  : BnrDaoImpl
	 * 3. Comment    : 인기카테고리 배너 제조사 등록
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.04.22.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertPprCatgBnrMnfrInfo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.insert("Bnr.insertPprCatgBnrMnfrInfo", saveMap);
	}
}
