package com.ssp.bo.od.dao;

import java.util.List;
import java.util.Map;


/**
 * <pre>
 * @title 주문번호
 * @package com.ssp.bo.od.dao
 * </pre>
 * @author neonlee
 * @since 2022. 03. 04.
 * @version 1.0
 * @see OdOrderPopupDao
 * =================== 변경 내역 ==================
 * 날짜       변경자     내용
 * ------------------------------------------------
 *
 */

public interface OdOrderPopupDao {
    /** 주문번호 리스트 조회 */
    List<Map<String, Object>> selectOdrNumberList(Map<String, String> searchMap)  throws Exception;

    /** 주문번호 Count **/
    int selectOdrNumberCount(Map<String, String> searchMap) throws Exception;

    /** 발주번호 Count **/
    int selectOrdNumberCount(Map<String, String> searchMap) throws Exception;

    /** 발주번호 조회 **/
    List<Map<String, Object>> selectOrdNumberList(Map<String, String> searchMap) throws Exception;

    /** 주문자 Count 조회 **/
    int selectOdrPsnCount(Map<String, String> searchMap) throws Exception;

    /** 주문자 조회 **/
    List<Map<String, Object>> selectOdrPsnList(Map<String, String> searchMap) throws Exception;

    /* 플랜트 Count 조회 */
    int selectOdrPlntCount(Map<String, String> searchMap) throws Exception;

    /* 플랜트 조회 */
    List<Map<String, Object>> selectOdrPlntList(Map<String, String> searchMap) throws Exception;

    /* 변경항목그룹 Count 조회 */
    int selectChgItmGrpCount(Map<String, String> searchMap) throws Exception;

    /* 변경항목그룹 조회 */
    List<Map<String, Object>> selectChgItmGrpList(Map<String, String> searchMap) throws Exception;

    /* 공통코드 조회 테스트 */
    List<Map<String, Object>> selectCommonCodeList(List<String> searchMap) throws Exception;

    /* 공통코드 조회 */
    List<Map<String, Object>> selectCommonCodeMulti(String str) throws Exception;

    /* 배송지목록 조회 */
    List<Map<String, Object>> selectDlvplcList(Map<String, String> searchMa) throws Exception;

    /* 명함정보 조회 */
    List<Map<String, Object>> selectOdrBzcrdPrdInfo(Map<String, String> searchMap) throws Exception;

    /** 비용이체부서 Count 조회 **/
    int selectCostTrnsfDeptCount(Map<String, String> searchMap) throws Exception;

    /* 비용이체부서 조회 */
    List<Map<String, Object>> selectCostTrnsfDeptList(Map<String, String> searchMap) throws Exception;

    /* 비용이체부서계정 Count 조회 */
    int selectCostTrnsfDeptAcctCount(Map<String, String> searchMap) throws Exception;

    /* 비용이체부서계정 조회 */
    List<Map<String, Object>> selectCostTrnsfDeptAcctList(Map<String, String> searchMap) throws Exception;

    /* 귀속부서 Count 조회 */
    int selectBlngDeptCount(Map<String, String> searchMap) throws Exception;

    /* 귀속부서 조회 */
    List<Map<String, Object>> selectBlngDeptList(Map<String, String> searchMap) throws Exception;

    /* Email 발송이력 Count 조회 */
    int selectEmailSentHstListCount(Map<String, String> searchMap) throws Exception;

    /* Email 발송이력 조회 */
    List<Map<String, Object>> selectEmailSentHstList(Map<String, String> searchMap) throws Exception;

    /* 컬럼 조회 */
    List<Map<String, Object>> selectColumnList(Map<String, String> searchMap) throws Exception;

    /* 주문일괄등록 이력 조회 */
    List<Map<String, Object>> selectExcelUpldDtlsHstList(Map<String, String> searchMap) throws Exception;

    /* 운영자 멀티 Count 조회 */
    int selectOprtrListCount(Map<String, String> searchMap) throws Exception;

    /* 운영자 멀티 조회 */
    List<Map<String, Object>> selectOprtrList(Map<String, String> searchMap) throws Exception;

    /* MD담당자 멀티 조회 */
    List<Map<String, Object>> selectMDOprtrList(Map<String, String> searchMap) throws Exception;

    /* MD담당자 멀티 Count 조회 */
    int selectMDOprtrListCount(Map<String, String> searchMap) throws Exception;

}
