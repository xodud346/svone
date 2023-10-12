package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;


/**
 * EDM 타겟 관리 EdmInfoDao
 * YHK
 * 2022.12.13.
 */

public interface EdmInfoDao {
	
	/** EDM 타겟 관리 목록 조회 */
	public List<Map<String, Object>> selectEdmInfoList(Map<String, Object> searchMap) throws Exception;
	
	/** EDM 타겟 관리 목록 카운트 */
	public int selectEdmInfoListCnt(Map<String, Object> saveInfo) throws Exception;
	
	/** EDM 타겟 관리 등록 */
	public int insertEdmInfo(Map<String, Object> saveInfo) throws Exception;
	
	/** EDM 타겟 관리 수정 */
	public void updateEdmInfo(Map<String, Object> saveInfo) throws Exception;
	
	/** EDM 타겟 관리 대상회원 카운트 */
	public long selectMbrListCnt(Map<String, Object> saveInfo) throws Exception;
	
	/** 등록자 이름 선택*/
	public String selectRegpsnNm (String regpsnId) throws Exception;
	
	/** 정보보호사무국 직원조회(이메일발송대상자) */
	public List<Map<String, Object>> selectSecurity() throws Exception;
	
	/** 정보보호사무국에 이메일 발송 */
	public int insertEmailTransLogInfo(Map<String, Object> saveInfo) throws Exception;
	
}
