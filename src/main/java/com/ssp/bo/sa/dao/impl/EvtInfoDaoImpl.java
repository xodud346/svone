package com.ssp.bo.sa.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.EvtInfoDao;

/**
 * <pre>
 * @title 이벤트 DaoImpl
 * @package com.ssp.bo.sa.dao.impl
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.14.
 * @version 1.0
 * @see EvtInfoDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.14.	박진원		최초작성
 */
@Repository("EvtInfoDao")
public class EvtInfoDaoImpl implements EvtInfoDao
{
	@Autowired
    private SqlSession sqlSession;

	/**
	 * <pre>
	 * 1. MethodName : selectEvtInfoList
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 목록 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectEvtInfoList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("EvtInfo.selectEvtInfoList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtInfoListCount
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 목록 건수 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectEvtInfoListCount(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectOne("EvtInfo.selectEvtInfoListCount", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtInfoSeq
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 시퀀스 값 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param 
	 * @return
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectEvtInfoSeq(Map<String, Object> saveEvtInfoMap) throws Exception
	{
		return sqlSession.selectOne("EvtInfo.selectEvtInfoSeq", saveEvtInfoMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertEvtInfo
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 기본 정보 등록
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param saveEvtInfoMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertEvtInfo(Map<String, Object> saveEvtInfoMap) throws Exception
	{
		return sqlSession.insert("EvtInfo.insertEvtInfo", saveEvtInfoMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : updateEvtInfo
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 기본 정보 수정
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param saveEvtInfoMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateEvtInfo(Map<String, Object> saveEvtInfoMap) throws Exception
	{
		return sqlSession.update("EvtInfo.updateEvtInfo", saveEvtInfoMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteEvtOprUnit
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 운영단위 정보 삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param saveEvtOprUnitMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteEvtOprUnit(Map<String, Object> saveEvtOprUnitMap) throws Exception
	{
		return sqlSession.delete("EvtInfo.deleteEvtOprUnit", saveEvtOprUnitMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertEvtOprUnit
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 운영단위 정보 등록
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param saveEvtOprUnitMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertEvtOprUnit(Map<String, Object> saveEvtOprUnitMap) throws Exception
	{
		return sqlSession.insert("EvtInfo.insertEvtOprUnit", saveEvtOprUnitMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtInfo
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectEvtInfo(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectOne("EvtInfo.selectEvtInfo", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtOprUnitList
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 운영단위상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectEvtOprUnitList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("EvtInfo.selectEvtOprUnitList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteEvtInfo
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 정보 삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteEvtInfo(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.delete("EvtInfo.deleteEvtInfo", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteEvtOprUnitAll
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 운영단위 정보 삭제 (전체)
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteEvtOprUnitAll(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.delete("EvtInfo.deleteEvtOprUnitAll", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtPrtcDtlsList
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 - 응모형- 참여자목록 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.16.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectEvtPrtcDtlsList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("EvtInfo.selectEvtPrtcDtlsList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtPrtcDtlsListCount
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 - 응모형- 참여자목록 건수 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.16.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectEvtPrtcDtlsListCount(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectOne("EvtInfo.selectEvtPrtcDtlsListCount", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : updateEvtPrtcDtls
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 댓글 공개 여부 수정
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.16.
	 * </pre>
	 *
	 * @param saveEvtPrtcDtlsMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateEvtPrtcDtls(Map<String, Object> saveEvtPrtcDtlsMap) throws Exception
	{
		return sqlSession.update("EvtInfo.updateEvtPrtcDtls", saveEvtPrtcDtlsMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtPrtcDtlsStampList
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 - 스템프형- 참여자목록 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.16.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectEvtPrtcDtlsStampList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("EvtInfo.selectEvtPrtcDtlsStampList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtPrtcDtlsStampListCount
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 - 스템프형- 참여자목록 건수 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.16.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectEvtPrtcDtlsStampListCount(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectOne("EvtInfo.selectEvtPrtcDtlsStampListCount", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtPrtcDtlsStampAllList
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 - 스템프형- 참여자목록 (전체)
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.16.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectEvtPrtcDtlsStampAllList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("EvtInfo.selectEvtPrtcDtlsStampAllList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtInfoMbrList
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 목록 (회원) 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectEvtInfoMbrList(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectList("EvtInfo.selectEvtInfoMbrList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtInfoMbrListCount
	 * 2. ClassName : EvtInfoDaoImpl
	 * 3. Comment : 이벤트 목록 (회원) 건수 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectEvtInfoMbrListCount(Map<String, Object> searchMap) throws Exception
	{
		return sqlSession.selectOne("EvtInfo.selectEvtInfoMbrListCount", searchMap);
	}
}
