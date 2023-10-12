package com.ssp.bo.sa.dao.impl;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.MainPrdDao;

/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.sa.dao.impl
 * <pre>    MainPrdDaoImpl</pre>
 * @author
 * @since 2022. 03. 02.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.02.		87minho	최초작성
 */
@Repository("mainPrdDao")
public class MainPrdDaoImpl implements MainPrdDao {

	@Autowired
	private SqlSession sqlSession;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMainPrdList
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    : 메인상품 목록 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.02.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectMainPrdList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("MainPrd.selectMainPrdList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMainPrdDtlListCnt
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    : 메인상품 상세 목록 총 합계
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.03.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectMainPrdDtlListCnt(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("MainPrd.selectMainPrdDtlListCnt", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMainPrdDtlList
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    : 메인상품 상세 목록 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.03.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectMainPrdDtlList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("MainPrd.selectMainPrdDtlList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertMainPrd
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    : 메인상품 등록
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.10.
	 * </pre>
	 *
	 * @param saveMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertMainPrd(Map<String, Object> saveMap) throws Exception {
		return sqlSession.insert("MainPrd.insertMainPrd", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : updateMainPrd
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    : 메인상품 수정
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.10.
	 * </pre>
	 *
	 * @param saveMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateMainPrd(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("MainPrd.updateMainPrd", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectDupMainPrdDtl
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    : 메인상품 상세 중복 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectMainPrdIdDuplCheckList(Map<String, Object> saveMap) throws Exception {
		return sqlSession.selectList("MainPrd.selectMainPrdIdDuplCheckList", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectDupMainPrdDtl
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    :메인상품 상세 전시 순서 셋팅 위한 게시구분별(+운영단위별) 총 합계 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int  selectMainPrdDtlDispSo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.selectOne("MainPrd.selectMainPrdDtlDispSo", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMainPrdSprAllCnt
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    : 메인상품 게시구분:전체 개수 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.29.
	 * </pre>
	 *
	 * @param chkMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectMainPrdSprAllCnt(Map<String, Object> chkMap) throws Exception {
		return sqlSession.selectOne("MainPrd.selectMainPrdSprAllCnt", chkMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : updateMainPrdDtlSo
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    : 메인상품 상세 순서 저장
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.07.
	 * </pre>
	 *
	 * @param saveMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateMainPrdDtlSo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("MainPrd.updateMainPrdDtlSo", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertMainPrdDtl
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    : 메인상품 상세 등록
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.04.
	 * </pre>
	 *
	 * @param saveMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertMainPrdDtl(Map<String, Object> saveMap) throws Exception {
		return sqlSession.insert("MainPrd.insertMainPrdDtl", saveMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteMainPrdDtl
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    : 메인상품 상세 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.08.
	 * </pre>
	 *
	 * @param deleteMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteMainPrdDtl(Map<String, Object> deleteMap) throws Exception {
		return sqlSession.delete("MainPrd.deleteMainPrdDtl", deleteMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteMainPrd
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    : 메인상품 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.08.
	 * </pre>
	 *
	 * @param deleteMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteMainPrd(Map<String, Object> deleteMap) throws Exception {
		return sqlSession.delete("MainPrd.deleteMainPrd", deleteMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteMainPrdRelDtl
	 * 2. ClassName  : MainPrdDaoImpl
	 * 3. Comment    : 메인상품 삭제(메인상품 삭제 뒤 상세 삭제)
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.08.
	 * </pre>
	 *
	 * @param deleteMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteMainPrdRelDtl(Map<String, Object> deleteMap) throws Exception {
		return sqlSession.delete("MainPrd.deleteMainPrdRelDtl", deleteMap);
	}
}
