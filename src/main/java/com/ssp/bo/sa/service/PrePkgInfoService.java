package com.ssp.bo.sa.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title 프리패키지 Service
 * @package com.ssp.bo.sa.service
 * </pre>
 * 
 * @author 박진원
 * @since 2022.02.25.
 * @version 1.0
 * @see PrePkgInfoService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.25.	박진원		최초작성
 */
public interface PrePkgInfoService
{	
	/** 프리패키지 목록 조회 */
    public List<Map<String, Object>> selectPrePkgInfoList(Map<String, Object> searchMap) throws Exception;

	/** 프리패키지 목록 건수 조회 */
    public int selectPrePkgInfoListCount(Map<String, Object> searchMap) throws Exception;	

	/** 프리패키지 상세 */
    public List<Map<String, Object>> selectPrePkgInfo(Map<String, Object> searchMap) throws Exception;

    /** 프리패키지 등록/수정 */
    NexacroResult savePrePkgInfo(Map<String, Object> savePrePkgInfoMap
    							, List<Map<String, Object>> savePrePkgIddtDtlMapList
    							, List<Map<String, Object>> savePrePkgCatgDtlMapList
    							, List<Map<String, Object>> savePrePkgPrdDtlMapList
    							) throws Exception;
    /** 프리패키지 삭제 */
    public NexacroResult deletePrePkgInfo(Map<String, Object> deleteMap) throws Exception;
    
	/** 프리패키지 산업군 조회 */
    public List<Map<String, Object>> selectPrePkgIddtDtlList(Map<String, Object> searchMap) throws Exception;
    
    /** 프리패키지 카테고리 조회 */
	public List<Map<String, Object>> selectPrePkgCatgDtlList(Map<String, Object> searchMap)throws Exception;
	
	/** 프리패키지 상품 조회*/
    public List<Map<String, Object>> selectPrePkgPrdDtlList(Map<String, Object> searchMap) throws Exception;
	
	
	/** 프리패키지 순서 저장 */
	public NexacroResult updatePrePkgExpsSo(List<Map<String, Object>> saveMap, Map<String, Object> typeMap) throws Exception;
	
	/** SSP-2111 : 엑셀용 프리패키지 목록 및 상세 조회 */
	public List<Map<String, Object>> selectPrePkgInfoDtlForExcel(List<Map<String,Object>> list) throws Exception;

	
	
}
