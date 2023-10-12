package com.ssp.bo.sa.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.PnbStoryInfoDao;

/**
 * <pre>
 * @title PNB스토리 DaoImpl
 * @package com.ssp.bo.sa.dao.impl
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.30.
 * @version 1.0
 * @see PnbStoryInfoDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.30.	박진원		최초작성
 * 2023.02.17.	87minho		PNB스토리 리뉴얼
 */
@Repository("pnbStoryInfoDao")
public class PnbStoryInfoDaoImpl implements PnbStoryInfoDao {
	@Autowired
    private SqlSession sqlSession;

	/**
	 * <pre>
	 * 1. MethodName : selectPnbStoryThmList
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 테마 목록 조회
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectPnbStoryThmList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.sa.pnbStoryInfo.selectPnbStoryThmList", searchMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : updateThmDispSo
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 테마 전시 순서 수정
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateThmDispSo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.sa.pnbStoryInfo.updateThmDispSo", paramMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : insertThmInfo
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 테마 정보 등록
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertThmInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.sa.pnbStoryInfo.insertThmInfo", paramMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : updateThmInfo
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 테마 정보 수정
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateThmInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.sa.pnbStoryInfo.updateThmInfo", paramMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : updatePnbStoryDispSo
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 테마 아이템 전시 순서 수정
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updatePnbStoryDispSo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.sa.pnbStoryInfo.updatePnbStoryDispSo", paramMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : deleteThmInfo
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 테마 정보 삭제
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteThmInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.sa.pnbStoryInfo.deleteThmInfo", paramMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPnbStoryInfoSeq
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 시퀀스 값 조회
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.30.
	 * </pre>
	 *
	 * @param savePnbStoryInfoMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectPnbStoryInfoSeq(Map<String, Object> savePnbStoryInfoMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.sa.pnbStoryInfo.selectPnbStoryInfoSeq", savePnbStoryInfoMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertPnbStoryInfo
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 기본 정보 등록
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.30.
	 * </pre>
	 *
	 * @param savePnbStoryInfoMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertPnbStoryInfo(Map<String, Object> savePnbStoryInfoMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.sa.pnbStoryInfo.insertPnbStoryInfo", savePnbStoryInfoMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : updatePnbStoryInfo
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 기본 정보 수정
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.30.
	 * </pre>
	 *
	 * @param savePnbStoryInfoMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updatePnbStoryInfo(Map<String, Object> savePnbStoryInfoMap) throws Exception {
		return sqlSession.update("com.ssp.bo.sa.pnbStoryInfo.updatePnbStoryInfo", savePnbStoryInfoMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPnbStoryCatgDtlList
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 카테고리 상세
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectPnbStoryCatgDtlList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.sa.pnbStoryInfo.selectPnbStoryCatgDtlList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPnbStoryCatgPrdDtlList
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 카테고리 상품 상세
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectPnbStoryCatgPrdDtlList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.sa.pnbStoryInfo.selectPnbStoryCatgPrdDtlList", searchMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deletePnbStoryInfo
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 정보 삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.30.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deletePnbStoryInfo(Map<String, Object> searchMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.sa.pnbStoryInfo.deletePnbStoryInfo", searchMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : deletePnbStoryCatgDtl
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 카테고리 정보 삭제
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param savePnbStoryCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deletePnbStoryCatgDtl(Map<String, Object> savePnbStoryCatgDtlMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.sa.pnbStoryInfo.deletePnbStoryCatgDtl", savePnbStoryCatgDtlMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : deletePnbStoryCatgPrdDtl
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 카테고리 상품 정보 삭제
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param savePnbStoryCatgPrdDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deletePnbStoryCatgPrdDtl(Map<String, Object> savePnbStoryCatgPrdDtlMap) throws Exception {
		return sqlSession.delete("com.ssp.bo.sa.pnbStoryInfo.deletePnbStoryCatgPrdDtl", savePnbStoryCatgPrdDtlMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPnbStoryCatgDtlSeq
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 카테고리 시퀀스 값 조회
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param savePnbStoryCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public String selectPnbStoryCatgDtlSeq(Map<String, Object> savePnbStoryCatgDtlMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.sa.pnbStoryInfo.selectPnbStoryCatgDtlSeq", savePnbStoryCatgDtlMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertPnbStoryCatgDtl
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 카테고리 정보 등록
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param savePnbStoryCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertPnbStoryCatgDtl(Map<String, Object> savePnbStoryCatgDtlMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.sa.pnbStoryInfo.insertPnbStoryCatgDtl", savePnbStoryCatgDtlMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : updatePnbStoryCatgDtl
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 카테고리 정보 수정
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param savePnbStoryCatgDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updatePnbStoryCatgDtl(Map<String, Object> savePnbStoryCatgDtlMap) throws Exception {
		return sqlSession.update("com.ssp.bo.sa.pnbStoryInfo.updatePnbStoryCatgDtl", savePnbStoryCatgDtlMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : insertPnbStoryCatgPrdDtl
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 카테고리 상품 정보 등록
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param savePnbStoryCatgPrdDtlMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertPnbStoryCatgPrdDtl(Map<String, Object> savePnbStoryCatgPrdDtlMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.sa.pnbStoryInfo.insertPnbStoryCatgPrdDtl", savePnbStoryCatgPrdDtlMap);
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectExcelPnbStoryList
	 * 2. ClassName : PnbStoryInfoDaoImpl
	 * 3. Comment : PNB스토리 엑셀 다운 목록 조회
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectExcelPnbStoryList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("com.ssp.bo.sa.pnbStoryInfo.selectExcelPnbStoryList", searchMap);
	}
}
