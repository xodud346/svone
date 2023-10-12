package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title 시리즈그룹상품관리 
 * @package com.ssp.bo.pr.service
 * </pre>
 * @author 이원준
 * @since 2022.03.25
 * @version 1.0
 * @see PrProductSeriesService
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 
 */
public interface PrProductSeriesService {

    /** 시리즈 상품그룹 목록 조회 */ 
    List<Map<String, Object>> selectProductSeriesList(Map<String, Object> commandMap, OdOrderComm odOrderComm) throws Exception;

    /** 시리즈 상품그룹 목록 카운터 */
    int selectProductSeriesCount(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception;

    /** 시리즈 상품그룹 기본 조회 */
    List<Map<String, Object>> selectProductSeriesBasis(Map<String, Object> searchMap) throws Exception;
    
    /** 시리즈 상품그룹 상세 조회*/
    List<Map<String, Object>> selectProductSeriesDtl(Map<String, Object> searchMap) throws Exception;

    /** 그룹상품추가 조회*/
    List<Map<String, Object>> selectSeriesTemp(Map<String, Object> searchMap) throws Exception;

    /** 상품그룹 저장 */
    NexacroResult saveProductSeries(Map<String, Object> commandMap, List<Map<String, Object>> listMap, Map<String, Object> admin) throws Exception;

    /** 기준상품 중복 체크 */
    int selectSeriesBssTmp(Map<String, Object> searchMap) throws Exception;

	 /** 엑셀 대용량 다운로드 */
	public Map<String, Object> callLargeExcelDownload(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception;
    
}