package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title SSP속성
 * @package com.ssp.bo.pr.service
 * </pre>
 * @author 이원준
 * @since 2022.02.17
 * @version 1.0
 * @see PrPropertyService
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 
 */
public interface PrPropertyService {

    /** SSP속성 목록 조회 */ 
    List<Map<String, Object>> selectPropertyList(Map<String, Object> commandMap, OdOrderComm odOrderComm) throws Exception;

    /** SSP속성 목록 카운터 */
    int selectPropertyCount(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception;

    /** SSP속성 저장 */
    NexacroResult saveProperty(Map<String, Object> commandMap) throws Exception;

    /** SSP속성 상세 조회 */
    List<Map<String, Object>> selectProperty(Map<String, Object> searchMap) throws Exception;

    /** SSP속성명 중복조회 */
    int selectPropertyPrNm(Map<String, Object> searchMap) throws Exception;

}
