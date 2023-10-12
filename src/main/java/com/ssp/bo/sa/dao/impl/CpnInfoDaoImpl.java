package com.ssp.bo.sa.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.CpnInfoDao;

/**
 * <pre>
 * @title 쿠폰 DaoImpl
 * @package com.ssp.bo.sa.dao.impl
 * </pre>
 * @author
 * @since 2022.03.17.
 * @version 1.0
 * @see CpnInfoDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.17.	박진원		최초작성
 */
@Repository("cpnInfoDao")
public class CpnInfoDaoImpl implements CpnInfoDao
{

	@Autowired
	private SqlSession sqlSession;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnInfoList
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 목록 조회
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectCpnInfoList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("CpnInfo.selectCpnInfoList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnInfoListCount
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 목록 건수 조회
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectCpnInfoListCount(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectOne("CpnInfo.selectCpnInfoListCount", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnPubcUseDtlsList
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 발행 내역 목록 조회
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectCpnPubcUseDtlsList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("CpnInfo.selectCpnPubcUseDtlsList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnPubcUseDtlsListCount
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 발행 내역 목록 건수 조회
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectCpnPubcUseDtlsListCount(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectOne("CpnInfo.selectCpnPubcUseDtlsListCount", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnPubcMbrList
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 발급 대상 목록
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectCpnPubcMbrList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("CpnInfo.selectCpnPubcMbrList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnInfoSeq
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 시퀀스 값 조회
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.22.
	 * </pre>
	 *
	 * @param
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public Map<String, Object> selectCpnInfoSeq(Map<String, Object> saveCpnInfoMap) throws Exception
	{
		return sqlSession.selectOne("CpnInfo.selectCpnInfoSeq", saveCpnInfoMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertCpnInfo
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 기본 정보 등록
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.22.
	 * </pre>
	 *
	 * @param saveCpnInfoMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertCpnInfo(Map<String, Object> saveCpnInfoMap) throws Exception
	{
		return sqlSession.insert("CpnInfo.insertCpnInfo", saveCpnInfoMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : updateCpnInfo
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 기본 정보 수정
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.22.
	 * </pre>
	 *
	 * @param saveCpnInfoMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateCpnInfo(Map<String, Object> saveCpnInfoMap) throws Exception
	{
		return sqlSession.update("CpnInfo.updateCpnInfo", saveCpnInfoMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteCpnPubcUseDtls
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 개별 발행 대상 삭제
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.22.
	 * </pre>
	 *
	 * @param saveCpnPubcUseDtlsMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteCpnPubcUseDtls(Map<String, Object> saveCpnPubcUseDtlsMap) throws Exception
	{
		return sqlSession.delete("CpnInfo.deleteCpnPubcUseDtls", saveCpnPubcUseDtlsMap);
	}

/**
	*
	* <pre>
	* 1. MethodName : selectCpnPubcCount
	* 2. ClassName  : CpnInfoDaoImpl
	* 3. Comment    : 쿠폰 발급 수량 조회
	* 4. 작성자      : 87minho
	* 5. 작성일      : 2022.05.27.
	* </pre>
	*
	* @param saveCpnPubcUseDtlsMap
	* @return
	* @throws Exception
	*/
@Override
public int selectCpnPubcCount(Map<String, Object> saveCpnInfoMap) throws Exception
{
	return sqlSession.selectOne("CpnInfo.selectCpnPubcCount", saveCpnInfoMap);
}

	/**
	*
	* <pre>
	* 1. MethodName : selectCpnDuplPubcCount
	* 2. ClassName  : CpnInfoDaoImpl
	* 3. Comment    : 쿠폰 중복 발급 확인 건수 조회
	* 4. 작성자      : 87minho
	* 5. 작성일      : 2022.05.27.
	* </pre>
	*
	* @param saveCpnPubcUseDtlsMap
	* @return
	* @throws Exception
	*/
@Override
public int selectCpnDuplPubcCount(Map<String, Object> saveCpnPubcUseDtlsMap) throws Exception
{
	return sqlSession.selectOne("CpnInfo.selectCpnDuplPubcCount", saveCpnPubcUseDtlsMap);
}

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertCpnPubcUseDtls
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 개별 발행 대상 등록
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.22.
	 * </pre>
	 *
	 * @param saveCpnPubcUseDtlsMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertCpnPubcUseDtls(Map<String, Object> saveCpnPubcUseDtlsMap) throws Exception
	{
		return sqlSession.insert("CpnInfo.insertCpnPubcUseDtls", saveCpnPubcUseDtlsMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteCpnPrdDtl
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 적용 대상 상품/상품군, 제외 대상 상품/상품군 삭제
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.22.
	 * </pre>
	 *
	 * @param saveCpnPrdDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteCpnPrdDtl(Map<String, Object> saveCpnPrdDtlMap) throws Exception
	{
		return sqlSession.delete("CpnInfo.deleteCpnPrdDtl", saveCpnPrdDtlMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertCpnPrdDtl
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 적용 대상 상품/상품군, 제외 대상 상품/상품 등록
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.22.
	 * </pre>
	 *
	 * @param saveCpnPrdDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertCpnPrdDtl(Map<String, Object> saveCpnPrdDtlMap) throws Exception
	{
		return sqlSession.insert("CpnInfo.insertCpnPrdDtl", saveCpnPrdDtlMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnInfo
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 상세
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.22.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public Map<String, Object> selectCpnInfo(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectOne("CpnInfo.selectCpnInfo", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnPubcUseDtlsInfoList
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 발급 대상 목록
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.22.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectCpnPubcUseDtlsInfoList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("CpnInfo.selectCpnPubcUseDtlsInfoList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnPrdDtlList
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 적용 대상 상품/상품군, 제외 대상 상품/상품 목록
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.22.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectCpnPrdDtlList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("CpnInfo.selectCpnPrdDtlList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnInfoPopupList
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 - 목록 - 쿠폰설정 팝업
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.23.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectCpnInfoPopupList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("CpnInfo.selectCpnInfoPopupList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnInfoMbrList
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 목록 (회원) 조회
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.23.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Map<String, Object>> selectCpnInfoMbrList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("CpnInfo.selectCpnInfoMbrList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnInfoMbrListCount
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 목록 (회원) 건수 조회
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.23.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectCpnInfoMbrListCount(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectOne("CpnInfo.selectCpnInfoMbrListCount", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCpnInfoMbrCount
	 * 2. ClassName  : CpnInfoDaoImpl
	 * 3. Comment    : 쿠폰 목록 (회원) 사용가능/사용한/만료된 건수 조회
	 * 4. 작성자      : 박진원
	 * 5. 작성일      : 2022.03.23.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	@Override
	public Map<String, Object> selectCpnInfoMbrCount(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectOne("CpnInfo.selectCpnInfoMbrCount", searchMap);
	}
}
