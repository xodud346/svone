package com.ssp.bo.sa.dao.impl;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.BgDao;

/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.sa.dao.impl
 * <pre>    BgDaoImpl</pre>
 * @author
 * @since 2022. 02. 22.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.22.		87minho	최초작성
 */
@Repository("bgDao")
public class BgDaoImpl implements BgDao {

	@Autowired
	private SqlSession sqlSession;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBgList
	 * 2. ClassName  : BgDaoImpl
	 * 3. Comment    : 배지 리스트 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.02.22.
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectBgList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("Bg.selectBgList", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBgListCnt
	 * 2. ClassName  : BgDaoImpl
	 * 3. Comment    : 배지 리스트 총 합계
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.02.22.
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int selectBgListCnt(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("Bg.selectBgListCnt", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBgDtlInfo
	 * 2. ClassName  : BgDaoImpl
	 * 3. Comment    : 배지 상세 조회
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.02.24.
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectBgDetail(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("Bg.selectBgDetail", searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : updateBgDetail
	 * 2. ClassName  : BgDaoImpl
	 * 3. Comment    : 배지 상세 수정
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.02.24.
	 * </pre>
	 *
	 * @param insertMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertBgDetail(Map<String, Object> insertMap) throws Exception {
		return sqlSession.update("Bg.insertBgDetail", insertMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : updateBgDetail
	 * 2. ClassName  : BgDaoImpl
	 * 3. Comment    : 배지 상세 수정
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.02.24.
	 * </pre>
	 *
	 * @param updateMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updateBgDetail(Map<String, Object> updateMap) throws Exception {
		return sqlSession.update("Bg.updateBgDetail", updateMap);
	}

	/**
	*
	* <pre>
	* 1. MethodName : prdBgCnt
	* 2. ClassName  : BgDaoImpl
	* 3. Comment    : 상품에 배지 적용된 개수 조회
	* 4. 작성자      : 87minho
	* 5. 작성일      : 2022.06.28.
	* </pre>
	*
	* @param deleteMap
	* @return
	* @throws Exception
	*/
	@Override
	public Map<String, Object> selectBgPrdAplyCnt(Map<String, Object> deleteMap) throws Exception {
		return sqlSession.selectOne("Bg.selectBgPrdAplyCnt", deleteMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteBgDetail
	 * 2. ClassName  : BgDaoImpl
	 * 3. Comment    : 배지 상세 삭제
	 * 4. 작성자      : 87minho
	 * 5. 작성일      : 2022.02.24.
	 * </pre>
	 *
	 * @param deleteMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public int deleteBgDetail(Map<String, Object> deleteMap) throws Exception {
		return sqlSession.update("Bg.deleteBgDetail", deleteMap);
	}

}
