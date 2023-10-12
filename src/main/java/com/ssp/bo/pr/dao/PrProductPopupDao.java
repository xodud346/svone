package com.ssp.bo.pr.dao;

import java.util.List;
import java.util.Map;

public interface PrProductPopupDao {
    
    int selectCategoryPopupCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectCategoryPopupList(Map<String, Object> searchMap);

    int selectProductNoticePopupCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectProductNoticePopupList(Map<String, Object> searchMap);
    
    int selectProductPopupCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectProductPopupList(Map<String, Object> searchMap);

    /** S-MRO 카테고리 검색 카운터 */
    int selectMroPrdPopupListCount(Map<String, Object> searchMap) throws Exception;
    /** S-MRO 카테고리 검색조회 */
    List<Map<String, Object>> selectMroPrdPopupList(Map<String, Object> searchMap);
	
    /** 원산지 검색 카운터 */
    int selectCtryPopupListCount(Map<String, Object> searchMap) throws Exception;
	/** 원산지 검색조회 */
    List<Map<String, Object>> selectCtryPopupList(Map<String, Object> searchMap);
	
	/** 등록상품명으로 조회 */
	List<Map<String, Object>> selectPrdClsfList(Map<String, Object> searchMap)throws Exception;
	
	/** 신규상품요청상태내역 저장*/
	int insertNewPrdStats(Map<String, Object> commandMap) throws Exception;
	
	/** 신규상품요청처리 수정 */
	int updateNewPrdReqProc(Map<String, Object> commandMap) throws Exception;
	
	/** 신규상품고객요청정보 수정*/
	int updateNewPrdCustReqInfo(Map<String, Object> commandMap) throws Exception;
	
	List<Map<String, Object>> selectBgPopupList(Map<String, Object> searchMap);
	
	/** R&D 이관이력 조회 */
	List<Map<String, Object>> selectNewPrdProcHst(Map<String, Object> searchMap)throws Exception;
	
	/** 카테고리명으로 조회 */
	List<Map<String, Object>> selectPrdClsfNmList(Map<String, Object> searchMap);
	
	/** 상품조회 중복처리*/
	List<Map<String, Object>> selectProductPopupListForDupProc(Map<String, Object> searchMap);

	/** 특화산업군 조회*/
	List<Map<String, Object>> selectSpecialIndustryGroup(Map<String, Object> searchMap)throws Exception;

	/** 특화산업군  카테고리 조회*/
	List<Map<String, Object>> selectSpecialIndustryGroupMappList(Map<String, Object> searchMap)throws Exception;

	int insertSpecialIndustryGroupMappList(Map<String, Object> data) throws Exception;


	int deleteSpecialIndustryGroupMappList(Map<String, Object> data) throws Exception;

}
