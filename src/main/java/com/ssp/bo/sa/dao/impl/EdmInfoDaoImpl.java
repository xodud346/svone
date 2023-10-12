package com.ssp.bo.sa.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.sa.dao.EdmInfoDao;

/**
 * EDM 타겟 관리 EdmInfoDaoImpl
 * YHK
 * 2022.12.13.
 */

@Repository
public class EdmInfoDaoImpl implements EdmInfoDao{
	
	@Autowired
	private SqlSession sqlSession;
	
	/** EDM 타겟 관리 목록 조회 */
	@Override
	public List<Map<String, Object>> selectEdmInfoList(Map<String, Object> searchMap) throws Exception {		
		return sqlSession.selectList("EdmInfo.selectEdmInfoList", searchMap);		
	}
	
	/** EDM 타겟 관리 목록 카운트 */
	@Override
	public int selectEdmInfoListCnt(Map<String, Object> saveInfo) throws Exception {		
		return sqlSession.selectOne("EdmInfo.selectEdmInfoListCnt", saveInfo);		
	}	
	
	/** EDM 타겟 관리 등록 */
	@Override
	public int insertEdmInfo(Map<String, Object> saveInfo) throws Exception {		
		return sqlSession.insert("EdmInfo.insertEdmInfo", saveInfo);		
	}
	
	/** EDM 타겟 관리 수정 */
	@Override
	public void updateEdmInfo(Map<String, Object> saveInfo) throws Exception {
		sqlSession.update("EdmInfo.updateEdmInfo", saveInfo);	
	}
			
	/** EDM 타겟 관리 대상회원 카운트 */
	@Override
	public long selectMbrListCnt(Map<String, Object> saveInfo) throws Exception {		
		return sqlSession.selectOne("EdmInfo.selectMbrListCnt", saveInfo);		
	}
	
	/** 정보보호사무국에 이메일 발송 */
	@Override
	public int insertEmailTransLogInfo(Map<String, Object> saveInfo) throws Exception {
		return sqlSession.insert("EdmInfo.insertEmailTransLogInfo", saveInfo);
	}
	
	/** 정보보호사무국 직원조회(이메일,SMS 발송대상자) */
	@Override
	public List<Map<String, Object>> selectSecurity() throws Exception {
		return sqlSession.selectList("EdmInfo.selectSecurity");
	}
	
	/** 등록자 이름 선택*/
	@Override
	public String selectRegpsnNm(String regpsnId) throws Exception {		
		return sqlSession.selectOne("EdmInfo.selectRegpsnNm", regpsnId);
	}
	
	
	
	
}
