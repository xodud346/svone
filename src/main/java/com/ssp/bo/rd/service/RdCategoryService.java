package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title R&D카테고리
 * @package com.ssp.bo.rd.service
 * </pre>
 * @author 김진섭
 * @since 2022.03.22
 * @version 1.0
 * @see RdCategoryCService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface RdCategoryService {

	/**
     * R&D카테고리관리 조회 (selectCategoryList)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCategoryList(Map<String, Object> searchMap) throws Exception;

    /**
     * R&D카테고리관리 상세조회 (selectCategory)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCategory(Map<String, Object> searchMap) throws Exception;
    
    /**
     * 카테고리명 중복체크 조회(selectRdCategoryDuplicateCheck)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectRdCategoryDuplicateCheck(Map<String, Object> searchMap) throws Exception;
    
    /**
     * R&D카테고리 상세저장 조회(saveCategoryInfo)
     * @param input
     * @return
     * @throws Exception
     */
    
    NexacroResult saveCategoryInfo(List<Map<String, Object>> commandMap
    		                     , List<Map<String, Object>> mainList
    		                     , List<Map<String, Object>> subList
    		                     , List<Map<String, Object>> fileMap
    		                     , Map<String, Object> userInfo
    		                     , String contextRealPath) throws Exception;

    
    /**
     * R&D하위 카테고리 팝업 생성 저장(saveCategory)
     * @param input
     * @return
     * @throws Exception
     */
    
	NexacroResult saveCategory(Map<String, Object> commandMap,List<Map<String, Object>> fileMap, Map<String, Object> userInfo, String contextRealPath) throws Exception;

	
	/**
     * 상품군 조회(selectPrdAttrList)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectPrdAttrList(Map<String, Object> searchMap) throws Exception;
	
	/**
     * 상품군 사용 SSP속성 조회(selectClsfAttrMappList)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectClsfAttrMappList(Map<String, Object> searchMap) throws Exception;

	/**
     * 상품군 사용 SSP속성 저장/수정/삭제(saveClsfAttrMapp)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveClsfAttrMapp(List<Map<String, Object>> commandMap, Map<String, Object> userInfo) throws Exception;



	int selectPrdClsfNm(Map<String, Object> commandMap) throws Exception;

	
	 /**
     * 신규 저장 코드체크여부 조회 (selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCodeChkYn(Map<String, Object> searchMap) throws Exception;
    
	/**
     *  수정 코드체크여부 조회 (selectUpCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectUpCodeChkYn(Map<String, Object> searchMap) throws Exception;
}
