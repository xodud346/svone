package com.ssp.bo.pr.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title SSP속성
 * @package com.ssp.bo.pr.dao
 * </pre>
 * @author 이원준
 * @since 2022.02.17
 * @version 1.0
 * @see PrPropertyDao
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 
 */
public interface PrPropertyDao {

    /** SSP속성 목록 조회 */
    List<Map<String, Object>> selectPropertyList(Map<String, Object> searchMap) throws Exception;

    /** SSP속성 목록 카운터 */
    int selectPropertyCount(Map<String, Object> searchMap) throws Exception;

    /** SSP속성 등록 */
    int insertProperty(Map<String, Object> data) throws Exception;

    /** SSP속성 수정 */
    int updateProperty(Map<String, Object> data) throws Exception;

    /** SSP속성 상세 조회 */
    List<Map<String, Object>> selectProperty(Map<String, Object> searchMap) throws Exception;

    /** SSP속성명 중복조회 */
    int selectPropertyPrNm(Map<String, Object> searchMap) throws Exception;
    
}
