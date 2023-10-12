package com.ssp.bo.sa.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.PrePkgInfoDao;

/**
 * <pre>
 * @title 프리패키지 DaoImpl
 * @package com.ssp.bo.sa.dao.impl
 * </pre>
 * 
 * @author 박진원
 * @since 2022.02.25.
 * @version 1.0
 * @see PrePkgInfoDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.25.	박진원		최초작성
 */
@Repository("PrePkgInfoDao")
public class PrePkgInfoDaoImpl implements PrePkgInfoDao
{
	@Autowired
    private SqlSession sqlSession;
	
	/**
	 * 프리패키지 시퀀스 값 조회
	 */
	@Override
	public String selectPrePkgInfoSeq(Map<String, Object> savePrePkgInfoMap) throws Exception {
		return sqlSession.selectOne("PrePkgInfo.selectPrePkgInfoSeq", savePrePkgInfoMap);
	}
	
	/**
	 * 프리패키지 목록 조회
	 */
	@Override
	public List<Map<String, Object>> selectPrePkgInfoList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("PrePkgInfo.selectPrePkgInfoList", searchMap);
	}

	/**
	 * 프리패키지 목록 건수 조회
	 */
	@Override
	public int selectPrePkgInfoListCount(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("PrePkgInfo.selectPrePkgInfoListCount", searchMap);
	}

	/**
	 * 프리패키지 상세
	 */
	@Override
	public List<Map<String, Object>> selectPrePkgInfo(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("PrePkgInfo.selectPrePkgInfo", searchMap);
	}
	
	/**
	 * 프리패키지 등록
	 */
	@Override
	public int insertPrePkgInfo(Map<String, Object> savePrePkgInfoMap) throws Exception {
		return sqlSession.insert("PrePkgInfo.insertPrePkgInfo", savePrePkgInfoMap);
	}

	/**
	 * 프리패키지 수정
	 */
	@Override
	public int updatePrePkgInfo(Map<String, Object> savePrePkgInfoMap) throws Exception {
		return sqlSession.update("PrePkgInfo.updatePrePkgInfo", savePrePkgInfoMap);
	}
	
	/**
	 * 프리패키지 삭제
	 */
	@Override
	public int deletePrePkgInfo(Map<String, Object> deleteMap) throws Exception {
		return sqlSession.delete("PrePkgInfo.deletePrePkgInfo", deleteMap);
	}
	
	/**
	 * 프리패키지 산업군 조회
	 */
	@Override
	public List<Map<String, Object>> selectPrePkgIddtDtlList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("PrePkgInfo.selectPrePkgIddtDtlList", searchMap);
	}
	
	/**
	 * 프리패키지 산업군 등록
	 */
	@Override
	public int insertPrePkgIddtDtl(Map<String, Object> savePrePkgIddtDtlMap) throws Exception {
		return sqlSession.insert("PrePkgInfo.insertPrePkgIddtDtl", savePrePkgIddtDtlMap);
	}

	/**
	 * 프리패키지 산업군 삭제
	 */
	@Override
	public int deletePrePkgIddtDtl(Map<String, Object> savePrePkgIddtDtlMap) throws Exception {
		return sqlSession.delete("PrePkgInfo.deletePrePkgIddtDtl", savePrePkgIddtDtlMap);
	}

		
	
	/**
	 * 프리패키지 카테고리 시퀀스 값 조회
	 */
	@Override
	public String selectPrePkgCatgSeq(Map<String, Object> savePrePkgInfoMap) {
		return sqlSession.selectOne("PrePkgInfo.selectPrePkgCatgSeq", savePrePkgInfoMap);
	}
	
	/**
	 * 프리패키지 카테고리 조회
	 */
	@Override
	public List<Map<String, Object>> selectPrePkgCatgDtlList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("PrePkgInfo.selectPrePkgCatgDtl", searchMap);
	}
	
	/**
	 * 프리패키지 카테고리 등록
	 */
	@Override
	public int insertPrePkgCatgDtl(Map<String, Object> saveMap) throws Exception {
		return sqlSession.insert("PrePkgInfo.insertPrePkgCatgDtl", saveMap);
	}
	
	/**
	 * 프리패키티 카테고리 삭제
	 */
	@Override
	public int deletePrePkgCatgDtl(Map<String, Object> saveMap) throws Exception {
		return sqlSession.delete("PrePkgInfo.deletePrePkgCatgDtl", saveMap);
	}
	
	/**
	 * 프리패키티 카테고리 수정
	 */
	@Override
	public int updatePrePkgCatgDtl(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("PrePkgInfo.updatePrePkgCatgDtl", saveMap);
	}
	
	
	
	/**
	 * 프리패키지 상품 조회
	 */
	@Override
	public List<Map<String, Object>> selectPrePkgPrdDtlList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("PrePkgInfo.selectPrePkgPrdDtlList", searchMap);
	}
	
	/**
	 * 프리패키지 상품 등록
	 */
	@Override
	public int insertPrePkgPrdDtl(Map<String, Object> savePrePkgPrdDtlMap) throws Exception
	{
		return sqlSession.insert("PrePkgInfo.insertPrePkgPrdDtl", savePrePkgPrdDtlMap);
	}

	/**
	 * 프리패키지 상품 삭제
	 */
	@Override
	public int deletePrePkgPrdDtl(Map<String, Object> savePrePkgPrdDtlMap) throws Exception
	{
		return sqlSession.delete("PrePkgInfo.deletePrePkgPrdDtl", savePrePkgPrdDtlMap);
	}
	
	/**
	 * 프리패키지 상품 수정
	 */
	@Override
	public int updatePrePkgPrdDtl(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("PrePkgInfo.updatePrePkgPrdDtl", saveMap);
	}
	
	
	
	/**
	 * 프리패키지 목록 순서 저장
	 */
	@Override
	public int updatePrePkgExpsSo(Map<String, Object> saveMap) throws Exception {		
		return sqlSession.update("PrePkgInfo.updatePrePkgExpsSo",saveMap);
	}
	
	/**
	 * 프리패키지 상품 순서 저장
	 */
	@Override
	public int updatePrePkgPrdExpsSo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.update("PrePkgInfo.updatePrePkgPrdExpsSo",saveMap);
	}
	
	/** SSP-2111 : 엑셀용 프리패키지 목록 및 상세 조회 */
	@Override
	public List<Map<String, Object>> selectPrePkgInfoDtlForExcel(Map<String, List<String>> seqMap) throws Exception {
		return sqlSession.selectList("PrePkgInfo.selectPrePkgInfoDtlForExcel", seqMap);
	}

	
	
	
	
}
