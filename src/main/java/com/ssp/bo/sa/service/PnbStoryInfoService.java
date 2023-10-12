package com.ssp.bo.sa.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title PNB스토리 Service
 * @package com.ssp.bo.sa.service
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.30.
 * @version 1.0
 * @see PnbStoryInfoService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.30.	박진원		최초작성
 * 2023.02.17.	87minho		PNB스토리 리뉴얼
 */
public interface PnbStoryInfoService {
	/** PNB스토리 테마 목록 조회 */
    public List<Map<String, Object>> selectPnbStoryThmList(Map<String, Object> searchMap) throws Exception;
    
    /** PNB스토리 테마 순서 저장 */
    NexacroResult updateThmDispSo(List<Map<String, Object>> paramList) throws Exception;
    
    /** PNB스토리 테마 저장 */
    NexacroResult saveThmInfo(Map<String, Object> paramMap, List<Map<String, Object>> pnbList) throws Exception;
    
    /** PNB스토리 테마 삭제 */
    NexacroResult deleteThmInfo(Map<String, Object> paramMap) throws Exception;
    
    /** PNB스토리 등록/수정/삭제 */
    NexacroResult savePnbStoryInfo(Map<String, Object> savePnbStoryInfoMap, List<Map<String, Object>> savePnbStoryCatgDtlMapList, List<Map<String, Object>> savePnbStoryCatgPrdDtlMapList) throws Exception;

	/** PNB스토리 카테고리 상세 */
    public List<Map<String, Object>> selectPnbStoryCatgDtlList(Map<String, Object> searchMap) throws Exception;

	/** PNB스토리 상품 상세 */
    public List<Map<String, Object>> selectPnbStoryCatgPrdDtlList(Map<String, Object> searchMap) throws Exception;
    
    /** PNB스토리 삭제 */
    NexacroResult deletePnbStoryInfo(Map<String, Object> searchMap) throws Exception;

    /** PNB스토리 엑셀 다운 목록 조회 */
    NexacroResult selectExcelPnbStoryList(Map<String, Object> paramMap) throws Exception;
}
