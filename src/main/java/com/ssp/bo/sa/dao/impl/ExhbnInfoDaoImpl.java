package com.ssp.bo.sa.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.ExhbnInfoDao;

/**
 * <pre>
 * @title 기획전 DaoImpl
 * @package com.ssp.bo.sa.dao.impl
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.04.
 * @version 1.0
 * @see ExhbnInfoDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.04.	박진원		최초작성
 */
@Repository("ExhbnInfoDao")
public class ExhbnInfoDaoImpl implements ExhbnInfoDao
{
	@Autowired
    private SqlSession sqlSession;

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnInfoList
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 목록 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectExhbnInfoList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("ExhbnInfo.selectExhbnInfoList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnInfoListCount
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 목록 건수 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectExhbnInfoListCount(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectOne("ExhbnInfo.selectExhbnInfoListCount", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : updateExhbnInfoOrder
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 전시순서 수정
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param saveExhbnInfoMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateExhbnInfoOrder(Map<String, Object> saveExhbnInfoMap) throws Exception
	{
		return sqlSession.update("ExhbnInfo.updateExhbnInfoOrder", saveExhbnInfoMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnInfo
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectExhbnInfo(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("ExhbnInfo.selectExhbnInfo", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnOprUnitList
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 운영단위상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectExhbnOprUnitList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("ExhbnInfo.selectExhbnOprUnitList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnCatgDtlList
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 기본 상품 카테고리상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectExhbnCatgDtlList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("ExhbnInfo.selectExhbnCatgDtlList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnCatgPrdDtlList
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 메인 노출 상품/기본 상품 상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectExhbnCatgPrdDtlList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("ExhbnInfo.selectExhbnCatgPrdDtlList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteExhbnInfo
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 정보 삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteExhbnInfo(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.delete("ExhbnInfo.deleteExhbnInfo", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteExhbnOprUnitAll
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 운영단위 정보 삭제 (전체)
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteExhbnOprUnitAll(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.delete("ExhbnInfo.deleteExhbnOprUnitAll", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteExhbnCatgDtlAll
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 기본 상품 카테고리 정보 삭제 (전체)
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteExhbnCatgDtlAll(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.delete("ExhbnInfo.deleteExhbnCatgDtlAll", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteExhbnCatgDtlAll
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 메인 노출 상품/기본 상품 정보 삭제 (전체)
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteExhbnCatgPrdDtlAll(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.delete("ExhbnInfo.deleteExhbnCatgPrdDtlAll", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnInfoSeq
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 시퀀스 값 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param 
	 * @return
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectExhbnInfoSeq(Map<String, Object> saveExhbnInfoMap) throws Exception
	{
		return sqlSession.selectOne("ExhbnInfo.selectExhbnInfoSeq", saveExhbnInfoMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertExhbnInfo
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 기본 정보 등록
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param saveExhbnInfoMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertExhbnInfo(Map<String, Object> saveExhbnInfoMap) throws Exception
	{
		return sqlSession.insert("ExhbnInfo.insertExhbnInfo", saveExhbnInfoMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : updateExhbnInfo
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 기본 정보 수정
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param saveExhbnInfoMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateExhbnInfo(Map<String, Object> saveExhbnInfoMap) throws Exception
	{
		return sqlSession.update("ExhbnInfo.updateExhbnInfo", saveExhbnInfoMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteExhbnOprUnit
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 운영단위 정보 삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param saveExhbnOprUnitMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteExhbnOprUnit(Map<String, Object> saveExhbnOprUnitMap) throws Exception
	{
		return sqlSession.delete("ExhbnInfo.deleteExhbnOprUnit", saveExhbnOprUnitMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertExhbnOprUnit
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 운영단위 정보 등록
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param saveExhbnOprUnitMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertExhbnOprUnit(Map<String, Object> saveExhbnOprUnitMap) throws Exception
	{
		return sqlSession.insert("ExhbnInfo.insertExhbnOprUnit", saveExhbnOprUnitMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteExhbnCatgPrdDtl
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 메인 노출 상품/기본 상품 정보 삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param saveExhbnCatgPrdDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteExhbnCatgPrdDtl(Map<String, Object> saveExhbnCatgPrdDtlMap) throws Exception
	{
		return sqlSession.delete("ExhbnInfo.deleteExhbnCatgPrdDtl", saveExhbnCatgPrdDtlMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : insertExhbnCatgPrdDtl
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 메인 노출 상품/기본 상품 정보 등록
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param saveExhbnCatgPrdDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertExhbnCatgPrdDtl(Map<String, Object> saveExhbnCatgPrdDtlMap) throws Exception
	{
		return sqlSession.insert("ExhbnInfo.insertExhbnCatgPrdDtl", saveExhbnCatgPrdDtlMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteExhbnCatgDtl
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 기본 상품 카테고리 정보 삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param saveExhbnCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteExhbnCatgDtl(Map<String, Object> saveExhbnCatgDtlMap) throws Exception
	{
		return sqlSession.delete("ExhbnInfo.deleteExhbnCatgDtl", saveExhbnCatgDtlMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnCatgDtlSeq
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 기본 상품 카테고리 시퀀스 값 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param saveExhbnCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectExhbnCatgDtlSeq(Map<String, Object> saveExhbnCatgDtlMap) throws Exception
	{
		return sqlSession.selectOne("ExhbnInfo.selectExhbnCatgDtlSeq", saveExhbnCatgDtlMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertExhbnCatgDtl
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 카테고리 정보 등록
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @param saveExhbnCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertExhbnCatgDtl(Map<String, Object> saveExhbnCatgDtlMap) throws Exception
	{
		return sqlSession.insert("ExhbnInfo.insertExhbnCatgDtl", saveExhbnCatgDtlMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : updateExhbnCatgDtl
	 * 2. ClassName : ExhbnInfoDaoImpl
	 * 3. Comment : 기획전 카테고리 정보 수정
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.23.
	 * </pre>
	 *
	 * @param saveExhbnCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateExhbnCatgDtl(Map<String, Object> saveExhbnCatgDtlMap) throws Exception
	{
		return sqlSession.update("ExhbnInfo.updateExhbnCatgDtl", saveExhbnCatgDtlMap);
	}
	
	/** SSP-2111 : 엑셀용 기획전 목록 및 상세 조회 */
	@Override
	public List<Map<String,Object>> selectExhbnInfoDtlForExcel(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("ExhbnInfo.selectExhbnInfoDtlForExcel", searchMap);
	}
}
