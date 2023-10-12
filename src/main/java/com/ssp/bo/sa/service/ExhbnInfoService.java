package com.ssp.bo.sa.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title 기획전 Service
 * @package com.ssp.bo.sa.service
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.04.
 * @version 1.0
 * @see ExhbnInfoService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.04.	박진원		최초작성
 */
public interface ExhbnInfoService
{
	/** 기획전 목록 조회 */
    public List<Map<String, Object>> selectExhbnInfoList(Map<String, Object> searchMap) throws Exception;
        
    /** SSP-2111 : 엑셀용 기획전 목록 및 상세 조회 */
    public List<Map<String, Object>> selectExhbnInfoDtlForExcel(List<Map<String,Object>> list) throws Exception;

	/** 기획전 목록 건수 조회 */
    public int selectExhbnInfoListCount(Map<String, Object> searchMap) throws Exception;	

    /** 기획전 순서 저장 */
    NexacroResult saveExhbnInfoOrder(Map<String, Object> saveExhbnInfoMap, List<Map<String, Object>> saveExhbnInfoMapList) throws Exception;

	/** 기획전 상세 */
    public List<Map<String, Object>> selectExhbnInfo(Map<String, Object> searchMap) throws Exception;

	/** 기획전 운영단위상세 */
    public List<Map<String, Object>> selectExhbnOprUnitList(Map<String, Object> searchMap) throws Exception;

	/** 기획전 메인 노출 상품 */
    public List<Map<String, Object>> selectExhbnCatgPrdDtlMainList(Map<String, Object> searchMap) throws Exception;

	/** 기획전 기본 상품 카테고리상세 */
    public List<Map<String, Object>> selectExhbnCatgDtlList(Map<String, Object> searchMap) throws Exception;

	/** 기획전 기본 상품 상세 */
    public List<Map<String, Object>> selectExhbnCatgPrdDtlList(Map<String, Object> searchMap) throws Exception;

    /** 기획전 삭제 */
    NexacroResult deleteExhbnInfo(Map<String, Object> searchMap) throws Exception;
    
    /** 기획전 등록/수정/삭제 */
    NexacroResult saveExhbnInfo(Map<String, Object> saveExhbnInfoMap, 
    		List<Map<String, Object>> saveExhbnOprUnitMapList, 
    		List<Map<String, Object>> saveExhbnCatgPrdDtlMainMapList, 
    		List<Map<String, Object>> saveExhbnCatgDtlMapList, 
    		List<Map<String, Object>> saveExhbnCatgPrdDtlMapList) throws Exception;
}
