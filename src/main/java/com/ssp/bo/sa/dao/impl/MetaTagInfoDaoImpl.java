package com.ssp.bo.sa.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.MetaTagInfoDao;

/**
 * @title 메타 태그 정보 DaoImpl
 * @author yuno
 * @since 2023.05.23
 * @version 1.0
 * ==============변경 내역 ===============
 * 날짜			변경자			내용
 * -------------------------------------
 * 2023.05.23   김윤호			최초작성
 */

@Repository("metaTagInfoDao")
public class MetaTagInfoDaoImpl implements MetaTagInfoDao{
	
	@Autowired
	private SqlSession sqlSession;
	
	
	/**
	 * 1.MethodName : selectMetaTagInfoSeq
	 * 2.ClassName : MetaTagInfoDaoImpl
	 * 3.Comment : 메타 태그 정보 시퀀스 값 조회
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectMetaTagInfoSeq(Map<String, Object> dataMap) throws Exception {
		return sqlSession.selectOne("MetaTagInfo.selectMetaTagInfoSeq", dataMap);
	}
	
	/**
	 * 1.MethodName : selectMetaTagInfoListCount
	 * 2.ClassName : MetaTagInfoDaoImpl
	 * 3.Comment : 메타 태그 정보 리스트 카운트
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@Override
	public int selectMetaTagInfoListCount(Map<String, Object> dataMap) throws Exception {
		return sqlSession.selectOne("MetaTagInfo.selectMetaTagInfoListCount", dataMap);
	}
	
	/**
	 * 1.MethodName : selectMetaTagInfoList
	 * 2.ClassName : MetaTagInfoDaoImpl
	 * 3.Comment : 메타 태그 정보 리스트 조회
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> selectMetaTagInfoList(Map<String, Object> dataMap) throws Exception {
		return sqlSession.selectList("MetaTagInfo.selectMetaTagInfoList", dataMap);
	}
	
	/**
	 * 1.MethodName : selectMetaTagInfo
	 * 2.ClassName : MetaTagInfoDaoImpl
	 * 3.Comment : 메타 태그 정보 상세
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@Override
	public Map<String, Object> selectMetaTagInfo(Map<String, Object> dataMap) throws Exception {
		return sqlSession.selectOne("MetaTagInfo.selectMetaTagInfo", dataMap);
	}
	
	/**
	 * 1.MethodName : insertMetaTagInfo
	 * 2.ClassName : MetaTagInfoDaoImpl
	 * 3.Comment : 메타 태그 정보 등록
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@Override
	public int insertMetaTagInfo(Map<String, Object> dataMap) throws Exception {
		return sqlSession.insert("MetaTagInfo.insertMetaTagInfo", dataMap);
	}
	
	/**
	 * 1.MethodName : updateMetaTagInfo
	 * 2.ClassName : MetaTagInfoDaoImpl
	 * 3.Comment : 메타 태그 정보 수정
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@Override
	public int updateMetaTagInfo(Map<String, Object> dataMap) throws Exception {
		return sqlSession.update("MetaTagInfo.updateMetaTagInfo", dataMap);
	}
	
	/**
	 * 1.MethodName : deleteMetaTagInfo
	 * 2.ClassName : MetaTagInfoDaoImpl
	 * 3.Comment : 메타 태그 정보 삭제
	 * 4.작성자 : 김윤호
	 * 5.작성일 : 2023.05.23
	 * 
	 * @param dataMap
	 * @return NexacroResult
	 * @throws Exception
	 */
	@Override
	public int deleteMetaTagInfo(Map<String, Object> dataMap) throws Exception {
		return sqlSession.delete("MetaTagInfo.deleteMetaTagInfo", dataMap);
	}

	

	
	
	
}
