package com.ssp.bo.sa.dao.impl;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.BrndhlDao;

/**
 * <pre></pre>
 * @title 전문관 DaoImpl
 * @desc
 * @package com.ssp.bo.sa.dao.impl
 * <pre>    com.ssp.bo.sa.brndhlDaoImpl</pre>
 * @author
 * @since 2023. 02. 20.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.03.14.		87minho	최초작성
 */
@Repository("brndhlDao")
public class BrndhlDaoImpl implements BrndhlDao {

	@Autowired
	private SqlSession sqlSession;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBrndhlList
	 * 2. ClassName  : BrndhlDaoImpl
	 * 3. Comment    : 전문관 노출 목록 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectBrndhlList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.sa.brndhl.selectBrndhlList", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBrndhlListCnt
	 * 2. ClassName  : BrndhlDaoImpl
	 * 3. Comment    : 전문관 목록 총 합계 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectBrndhlListCnt(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.sa.brndhl.selectBrndhlListCnt", paramMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : updateBrndhlDispSo
	 * 2. ClassName  : BrndhlDaoImpl
	 * 3. Comment    : 전문관 순서 저장
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.03.14.
	 * </pre>
	 *
	 * @param saveMap
	 * @return
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateBrndhlDispSo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.sa.brndhl.updateBrndhlDispSo", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBrndhlInfo
	 * 2. ClassName  : BrndhlDaoImpl
	 * 3. Comment    : 전문관 상세 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectBrndhlInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.sa.brndhl.selectBrndhlInfo", paramMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectBrndhlCatgDtlList
	 * 2. ClassName : BrndhlDaoImpl
	 * 3. Comment : 전문관 카테고리 상세
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectBrndhlCatgDtlList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.sa.brndhl.selectBrndhlCatgDtlList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectBrndhlCatgPrdDtlList
	 * 2. ClassName : BrndhlDaoImpl
	 * 3. Comment : 전문관 카테고리 상품 상세
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectBrndhlCatgPrdDtlList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.sa.brndhl.selectBrndhlCatgPrdDtlList", searchMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBrndhlOprUnitList
	 * 2. ClassName  : BrndhlDaoImpl
	 * 3. Comment    : 전문관 운영단위 리스트 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectBrndhlOprUnitList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.sa.brndhl.selectBrndhlOprUnitList", paramMap);
	}
		
	/**
	 * <pre>
	 * 1. MethodName : selectBrndhlCatgDtlSeq
	 * 2. ClassName : BrndhlInfoDaoImpl
	 * 3. Comment : 전문관 카테고리 시퀀스 값 조회
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.03.14
	 * </pre>
	 *
	 * @param saveBrndhlCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public String selectBrndhlSeq(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.sa.brndhl.selectBrndhlSeq", paramMap);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : insertBrndhlDtl
	 * 2. ClassName  : BrndhlDaoImpl
	 * 3. Comment    : 전문관 등록
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertBrndhlDtl(Map<String, Object> paramMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.sa.brndhl.insertBrndhlDtl", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : updateBrndhlDtl
	 * 2. ClassName  : BrndhlDaoImpl
	 * 3. Comment    : 전문관 수정
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateBrndhlDtl(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.sa.brndhl.updateBrndhlDtl", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertBrndhlOprUnit
	 * 2. ClassName  : BrndhlDaoImpl
	 * 3. Comment    : 전문관 운영단위 등록
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertBrndhlOprUnit(Map<String, Object> paramMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.sa.brndhl.insertBrndhlOprUnit", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteBrndhlInfo
	 * 2. ClassName  : BrndhlDaoImpl
	 * 3. Comment    : 전문관 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteBrndhlInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.sa.brndhl.deleteBrndhlInfo", paramMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteBrndhlOprUnit
	 * 2. ClassName  : BrndhlDaoImpl
	 * 3. Comment    : 전문관 운영단위 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteBrndhlOprUnit(Map<String, Object> paramMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.sa.brndhl.deleteBrndhlOprUnit", paramMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteBrndhlCatgDtl
	 * 2. ClassName : BrndhlInfoDaoImpl
	 * 3. Comment : 전문관 카테고리 정보 삭제
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.03.14
	 * </pre>
	 *
	 * @param saveBrndhlCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteBrndhlCatgDtl(Map<String, Object> saveBrndhlCatgDtlMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.sa.brndhl.deleteBrndhlCatgDtl", saveBrndhlCatgDtlMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectBrndhlCatgDtlSeq
	 * 2. ClassName : BrndhlInfoDaoImpl
	 * 3. Comment : 전문관 카테고리 시퀀스 값 조회
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.03.14
	 * </pre>
	 *
	 * @param saveBrndhlCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public String selectBrndhlCatgDtlSeq(Map<String, Object> saveBrndhlCatgDtlMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.sa.brndhl.selectBrndhlCatgDtlSeq", saveBrndhlCatgDtlMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertBrndhlCatgDtl
	 * 2. ClassName : BrndhlInfoDaoImpl
	 * 3. Comment : 전문관 카테고리 정보 등록
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.03.14
	 * </pre>
	 *
	 * @param saveBrndhlCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertBrndhlCatgDtl(Map<String, Object> saveBrndhlCatgDtlMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.sa.brndhl.insertBrndhlCatgDtl", saveBrndhlCatgDtlMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : updateBrndhlCatgDtl
	 * 2. ClassName : BrndhlInfoDaoImpl
	 * 3. Comment : 전문관 카테고리 정보 수정
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.03.14
	 * </pre>
	 *
	 * @param saveBrndhlCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateBrndhlCatgDtl(Map<String, Object> saveBrndhlCatgDtlMap) throws Exception {
		return sqlSession.update("com.ssp.bo.sa.brndhl.updateBrndhlCatgDtl", saveBrndhlCatgDtlMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteBrndhlCatgPrdDtl
	 * 2. ClassName : BrndhlInfoDaoImpl
	 * 3. Comment : 전문관 카테고리 상품 정보 삭제
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.03.14
	 * </pre>
	 *
	 * @param saveBrndhlCatgPrdDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteBrndhlCatgPrdDtl(Map<String, Object> saveBrndhlCatgPrdDtlMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.sa.brndhl.deleteBrndhlCatgPrdDtl", saveBrndhlCatgPrdDtlMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : insertBrndhlCatgPrdDtl
	 * 2. ClassName : BrndhlInfoDaoImpl
	 * 3. Comment : 전문관 카테고리 상품 정보 등록
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.03.14
	 * </pre>
	 *
	 * @param saveBrndhlCatgPrdDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertBrndhlCatgPrdDtl(Map<String, Object> saveBrndhlCatgPrdDtlMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.sa.brndhl.insertBrndhlCatgPrdDtl", saveBrndhlCatgPrdDtlMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectExcelBrndhlList
	 * 2. ClassName  : BrndhlInfoDaoImpl
	 * 3. Comment    : 전문관 엑셀 다운 목록 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2023.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectExcelBrndhlList(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.sa.brndhl.selectExcelBrndhlList", paramMap);
	}
}
