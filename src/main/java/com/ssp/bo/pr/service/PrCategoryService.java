package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title SSP카테고리
 * @package com.ssp.bo.pr.service
 * </pre>
 * @author 이원준
 * @since 2022.02.17
 * @version 1.0
 * @see PrCategoryCService
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 
 */
public interface PrCategoryService {

	/** SSP카테고리 트리조회 */
    List<Map<String, Object>> selectCategoryList(Map<String, Object> commandMap) throws Exception;

    /** 하위 카테고리 조회 */
    List<Map<String, Object>> selectSubCategoryList(Map<String, Object> searchMap) throws Exception;

    /** SSP카테고리 상세조회 */
    List<Map<String, Object>> selectCategory(Map<String, Object> searchMap) throws Exception;

    /** SSP카테고리 저장*/
    NexacroResult saveCategory(Map<String, Object> commandMap, List<Map<String, Object>> fileMap, String contextRealPath) throws Exception;

    /** SSP카테고리ID 생성*/
    String selectPrdClcdSeq(Map<String, Object> commandMap) throws Exception;

    /** SSP카테고리 상세 저장*/
    NexacroResult saveCategoryInfo(List<Map<String, Object>> commandMap, List<Map<String, Object>> mainList, List<Map<String, Object>> subList, Map<String, Object> admin, List<Map<String, Object>> fileMap, String contextRealPath) throws Exception;

    /** 속성명 조회 */
    List<Map<String, Object>> selectPrdAttrList(Map<String, Object> searchMap) throws Exception;

    /** 상품군 사용SSP속성 조회 */
    List<Map<String, Object>> selectClsfAttrMappList(Map<String, Object> searchMap) throws Exception;

    /** 상품군속성관리 저장 */
    NexacroResult saveClsfAttrMapp(List<Map<String, Object>> commandMap, Map<String, Object> admin) throws Exception;

    /** 카테고리명 중복 체크 */
    int selectPrdClsfNmCnt(Map<String, Object> commandMap) throws Exception;

    /** 첨부파일 정보조회 */
    List<Map<String, Object>> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception;

    /** 엑셀 대용량 다운로드 */
	public Map<String, Object> callLargeExcelDownload(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception;
    
	
	
	
	List<Map<String, Object>> selectSspPrdNmFrtMdfrList(Map<String, Object> searchMap) throws Exception;
	List<Map<String, Object>> selectSspPrdNmRearMdfrList(Map<String, Object> searchMap) throws Exception;
	List<Map<String, Object>> selectSspPrdNmAttrList(Map<String, Object> searchMap) throws Exception;
	Map<String, Object> selectSspPrdNmAddInfo(Map<String, Object> searchMap) throws Exception;
	List<Map<String, Object>> selectSspPrdNmMngList(Map<String, Object> searchMap) throws Exception;
	List<Map<String, Object>> selectClsfAttrList(Map<String, Object> searchMap) throws Exception;
	int saveSspPrdNmInfo(List<Map<String, Object>> ds_frtMdfr, List<Map<String, Object>> ds_rearMdfr, List<Map<String, Object>> ds_attr, List<Map<String, Object>> ds_addInfo, List<Map<String, Object>> ds_mng, Map<String, Object> adminMap) throws Exception;
	Map<String, Object> selectLastBatchTime(Map<String, Object> searchMap) throws Exception;

    int deleteCategory(Map<String, Object> commandMap, Map<String, Object> admin) throws Exception;
}
