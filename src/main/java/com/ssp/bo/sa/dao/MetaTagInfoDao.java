package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;

/**
 * @title 메타 태그 정보 Dao
 * @author yuno
 * @since 2023.05.23
 * @version 1.0
 * ==============변경 내역 ===============
 * 날짜			변경자			내용
 * -------------------------------------
 * 2023.05.23   김윤호			최초작성
 */
public interface MetaTagInfoDao {
	
	/** 메타 태그 정보 시퀀스 값 조회 */
	Map<String, Object> selectMetaTagInfoSeq(Map<String, Object> dataMap) throws Exception;
	
	/** 메타 태그 정보 리스트 조회 */
	List<Map<String, Object>> selectMetaTagInfoList(Map<String, Object> dataMap) throws Exception;
	
	/** 메타 태그 정보 리스트 카운트 */
	int selectMetaTagInfoListCount(Map<String, Object> dataMap) throws Exception;
	
	/** 메타 태그 정보 상세 */
	Map<String, Object> selectMetaTagInfo(Map<String, Object> dataMap) throws Exception;
	
	/** 메타 태그 정보 등록 */
	int insertMetaTagInfo(Map<String, Object> dataMap) throws Exception;
	
	/** 메타 태그 정보 수정 */
	int updateMetaTagInfo(Map<String, Object> dataMap) throws Exception;

	/** 메타 태그 정보 삭제 */
	int deleteMetaTagInfo(Map<String, Object> dataMap) throws Exception;
	

	

}
