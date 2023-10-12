package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

public interface PrProductPopupService {

    int selectCategoryPopupCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectCategoryPopupList(Map<String, Object> searchMap) throws Exception;
    
    int selectProductNoticePopupCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectProductNoticePopupList(Map<String, Object> searchMap) throws Exception;

    int selectProductPopupCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectProductPopupList(Map<String, Object> searchMap) throws Exception;
	
    /** S-MRO 카테고리 검색 카운터 */
    int selectMroPrdPopupListCount(Map<String, Object> searchMap) throws Exception;
    /** S-MRO 카테고리 검색조회 */
	List<Map<String, Object>> selectMroPrdPopupList(Map<String, Object> searchMap) throws Exception;
	
	/** 원산지 검색 카운터 */
	int selectCtryPopupListCount(Map<String, Object> searchMap) throws Exception;
	/** 원산지 검색조회 */
	List<Map<String, Object>> selectCtryPopupList(Map<String, Object> searchMap) throws Exception;
	
	/** 카테고리 추천&조회 */
	List<Map<String, Object>> selectPrdClsfList(Map<String, Object> searchMap) throws Exception;
	/** 카테고리 추천 R&D 이관이력 저장 */
	NexacroResult saveNewPrdStats(Map<String, Object> commandMap) throws Exception;
	
    List<Map<String, Object>> selectBgPopupList(Map<String, Object> searchMap) throws Exception;
    
    /** R&D 이관이력 조회 */
	List<Map<String, Object>> selectNewPrdProcHst(Map<String, Object> searchMap)throws Exception;
	
	/** 신규상품 중복처리 시 메서드*/
	List<Map<String, Object>> selectProductPopupListForDupProc(Map<String, Object> searchMap)throws Exception;

	/** 특화산업군 조회 */
	List<Map<String, Object>> selectSpecialIndustryGroup(Map<String, Object> searchMap) throws Exception;

	/** 특화산업군 카테고리 조회 */
	List<Map<String, Object>> selectSpecialIndustryGroupMappList(Map<String, Object> searchMap) throws Exception;

	NexacroResult updateSpecialIndustryGroupMappList(List<Map<String, Object>> commandMap, Map<String, Object> admin) throws Exception;
}
