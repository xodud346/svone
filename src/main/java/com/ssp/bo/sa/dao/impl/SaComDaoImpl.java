package com.ssp.bo.sa.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.SaComDao;

/**
 * <pre>
 * @title 영업마케팅 공통 DaoImpl
 * @package com.ssp.bo.sa.dao.impl
 * </pre>
 *
 * @author 87minho
 * @since 2022.03.07.
 * @version 1.0
 * @see SaComDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자	내용
 * ------------------------------------------------
 * 2022.03.07.	87minho	최초작성
 * 2022.04.11.	박진원	상품, 운영단위 벨리데이션 체크
 */
@Repository("saComDao")
public class SaComDaoImpl implements SaComDao
{
	@Autowired
	private SqlSession sqlSession;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPrdInfo
	 * 2. ClassName  : SaComDaoImpl
	 * 3. Comment    : 상품 상세 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.03.11.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public Map<String, Object> selectPrdInfo(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectOne("SaCom.selectPrdInfo", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPrdIdCheckList
	 * 2. ClassName : SaComDaoImpl
	 * 3. Comment : 상품ID 유효성 검사
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.04.11.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectPrdIdCheckList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("SaCom.selectPrdIdCheckList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectOprUnitCheckList
	 * 2. ClassName : SaComDaoImpl
	 * 3. Comment : 운영단위ID 유효성 검사
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.04.12.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectOprUnitCheckList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("SaCom.selectOprUnitCheckList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectPrdClcdCheckList
	 * 2. ClassName : SaComDaoImpl
	 * 3. Comment : 상품군ID 유효성 검사
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2022.04.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectPrdClcdCheckList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("SaCom.selectPrdClcdCheckList", searchMap);
	}


}
