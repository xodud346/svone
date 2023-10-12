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
 * @since 2022. 03. 15.
 * @version 1.0
 * @see OdOderListService
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */
public interface OdOderListService {

    /* 주문목록 조회 */
    NexacroResult selectOrderList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception;

    /* 주문목록 상세(상단)정보 조회 */
    NexacroResult selectOderDetailList(Map<String, String> searchMap) throws Exception;

    /* 주문상세 고객정보 조회 */
    NexacroResult selectCustOderInfo(Map<String, String> searchMap) throws Exception;

    /* 주문상세 결재/발주 조회 */
    NexacroResult selectApprOrdInfo(Map<String, String> searchMap) throws Exception;

    /* 주문상세 변경이력 조회 */
    NexacroResult selectChgHstList(Map<String, String> searchMap) throws Exception;

    /* 주문상세 영업정보 조회 */
    NexacroResult selectSalsInfoList(Map<String, String> searchMap) throws Exception;

    /* 주문상세 영업정보04 조회 */
    NexacroResult selectSalsInfoList04(Map<String, String> searchMap) throws Exception;

    /* 주문상세 배송정보 조회 */
    NexacroResult selectDlvInfo(Map<String, String> searchMap) throws Exception;

    /* 주문상세 정산정보 조회 */
    NexacroResult selectAdjInfo(Map<String, String> searchMap) throws Exception;

    /* 주문상세 주문정보 조회 */
    NexacroResult selectOdrInfo(Map<String, String> searchMap) throws Exception;

    /* 주문상세 연계정보 조회 */
    NexacroResult selectSndRcvList(Map<String, String> searchMap) throws Exception;

    /* 주문상세 연계정보2 조회 */
    NexacroResult selectSndRcvList2(Map<String, String> searchMap) throws Exception;

    /* 주문상세 물량배분 조회 */
    NexacroResult selectQtyDstrList(Map<String, String> searchMap) throws Exception;

    /* 주문상세 분납정보 조회 */
    NexacroResult selectDvdpayList(Map<String, String> searchMap) throws Exception;

    /* 주문상세 예외처리 조회 */
    NexacroResult selectExcProcList(Map<String, String> searchMap) throws Exception;

    /* 주문상세 예외처리 VOC배송정보 조회 */
    NexacroResult selectExcProcVocDlvInfo(Map<String, String> searchMap) throws Exception;

    /* 주문대행고객로그인 */
    NexacroResult selectMbrList(Map<String, String> searchMap, OdOrderComm odComm) throws Exception;

    /* 접속이력 조회 */
    NexacroResult conHstList(Map<String, String> searchMap, OdOrderComm odOrderComm) throws Exception;

    /* 주문조회 오즈리포트 ID 조회 */
    NexacroResult selectReportId(Map<String, Object> commandMap, OdOrderComm odOrderComm) throws Exception;

    /* 주문조회 오즈리포트 insert 동작 이전에 동일한 데이터 삭제 */
    NexacroResult deleteOdrInqTgtDtls(List<Map<String, Object>> commandMap, OdOrderComm odOrderComm) throws Exception;

    /* 주문조회 오즈리포트 조회대상 주문번호 insert */
    NexacroResult insertReportItemToSession(List<Map<String, Object>> commandMap, OdOrderComm odOrderComm) throws Exception;

    /* 연계정보 조회 */
    NexacroResult selectSndRcvInfoList(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception;

    /* 연계정보 이력조회 */
    NexacroResult selectSndRcvInfoList2(Map<String, String> searchMap) throws Exception;

}
