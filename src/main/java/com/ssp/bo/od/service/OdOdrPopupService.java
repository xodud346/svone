package com.ssp.bo.od.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title 주문번호
 * @package com.ssp.bo.od.service
 * </pre>
 *
 * @author neonlee
 * @since 2022. 03. 04.
 * @version 1.0
 * @see OdOdrPopupService
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */

public interface OdOdrPopupService {
    /** 주문번호 조회 */
    NexacroResult selectOdrNumberList(Map<String, String> searchMap) throws Exception;

    /** 주문번호 Count 조회 **/
    NexacroResult selectOdrNumberCount(Map<String, String> searchMap) throws Exception;

    /** 주문조회대상내역 배치등록 **/
    NexacroResult insertOdrInqTgtBatch(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception;

    /** 주문조회대상내역 삭제 **/
    NexacroResult deleteOdrInqTgtDtls(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception;

    /** 발주번호 Count 조회 **/
    NexacroResult selectOrdNumberCount(Map<String, String> searchMap) throws Exception;

    /** 발주번호 조회 **/
    NexacroResult selectOrdNumberList(Map<String, String> searchMap) throws Exception;

    /** 주문자 Count 조회 **/
    NexacroResult selectOdrPsnCount(Map<String, String> searchMap) throws Exception;

    /** 주문자 조회 **/
    NexacroResult selectOdrPsnList(Map<String, String> searchMap) throws Exception;

    /* 플랜트 Count 조회 */
    NexacroResult selectOdrPlntCount(Map<String, String> searchMap) throws Exception;

    /* 플랜트 조회 */
    NexacroResult selectOdrPlntList(Map<String, String> searchMap) throws Exception;

    /* 변경항목그룹 Count 조회 */
    NexacroResult selectChgItmGrpCount(Map<String, String> searchMap) throws Exception;

    /* 변경항목그룹 조회 */
    NexacroResult selectChgItmGrpList(Map<String, String> searchMap) throws Exception;

    /* 공통코드 조회 테스트 */
    NexacroResult selectCommonCodeList(List<Map<String, String>> searchMap) throws Exception;

    /* 배송지 목록 조회 */
    NexacroResult selectDlvplcList(Map<String, String> searchMap) throws Exception;

    /* 명함정보 조회 */
    NexacroResult selectOdrBzcrdPrdInfo(Map<String, String> searchMap) throws Exception;

    /* 비용이체부서 조회 */
    NexacroResult selectCostTrnsfDeptList(Map<String, String> searchMap) throws Exception;

    /* 비용이체부서계정 조회 */
    NexacroResult selectCostTrnsfDeptAcctList(Map<String, String> searchMap) throws Exception;

    /* 귀속부서 조회 */
    NexacroResult selectBlngDeptList(Map<String, String> searchMap) throws Exception;

    /* Email 발송이력 조회 */
    NexacroResult selectEmailSentHstList(Map<String, String> searchMap) throws Exception;

    /* 컬럼 조회 */
    NexacroResult selectColumnList(Map<String, String> searchMap) throws Exception;

    /* 주문일괄등록 이력 조회 */
    NexacroResult selectExcelUpldDtlsHstList(Map<String, String> searchMap, OdOrderComm odComm) throws Exception;

    /* 운영자 멀티 조회 */
    NexacroResult selectOprtrList(Map<String, String> searchMap) throws Exception;

    /* MD담당자 멀티 조회 */
    NexacroResult selectMDOprtrList(Map<String, String> searchMap) throws Exception;

    /** OZ레포트 항목 배치등록 **/
    //NexacroResult insertReportItemToSession(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception;

    /** OZ레포트 ID 가져오기 **/
    //NexacroResult selectReportId(Map<String, Object> commandMap, OdOrderComm odComm) throws Exception;

}
