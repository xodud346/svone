package com.ssp.bo.od.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 주문번호
 * @package com.ssp.bo.od.dao
 * </pre>
 * @author neonlee
 * @since 2022. 03. 15.
 * @version 1.0
 * @see OdOrderListDao
 * =================== 변경 내역 ==================
 * 날짜       변경자     내용
 * ------------------------------------------------
 * 
 */

public interface OdOrderListDao {

    /* 주문목록 샘플 조회 */
    List<Map<String, Object>> selectSampleList(Map<String, String> searchMap) throws Exception;
    
    /* 주문목록 조회 */
    List<Map<String, Object>> selectOrderList(Map<String, String> searchMap) throws Exception;

    /* 주문목록 카운트 */
    int selectOrderCount(Map<String, String> searchMap) throws Exception;

    /* 주문목록 상세(상단)정보 조회 */
    List<Map<String, Object>> selectOderDetailList(Map<String, String> searchMap) throws Exception;
    
    /* 주문상세 고객정보 조회 */
    List<Map<String, Object>> selectCustOderInfo(Map<String, String> searchMap) throws Exception;
    
    /* 주문상세 고객정보 - 참조코드 조회 */
    List<Map<String, Object>> selectCustOderInfoRefCodeList(Map<String, String> searchMap) throws Exception;
    
    /* 주문상세 고객정보 - 일회성코드 조회 */
    List<Map<String, Object>> selectCustOderInfoInstanceCodeList(Map<String, String> searchMap) throws Exception;

    /* 주문상세 결재/발주 결재정보 조회 */
    List<Map<String, Object>> selectApprInfo(Map<String, String> searchMap) throws Exception;

    /* 주문상세 결재/발주 발주정보 조회 */
    List<Map<String, Object>> selectOrdInfo(Map<String, String> searchMap) throws Exception;

    /* 주문상세 변경이력 조회 */
    List<Map<String, Object>> selectChgHstList(Map<String, String> searchMap) throws Exception;

    /* 주문상세 영업정보 조회 */
    List<Map<String, Object>> selectSalsInfoList(Map<String, String> searchMap) throws Exception;
    
    /* 주문상세 영업정보 02 조회 */
    List<Map<String, Object>> selectSalsInfoList02(Map<String, String> searchMap) throws Exception;
    
    /* 주문상세 영업정보 03 조회 */
    List<Map<String, Object>> selectSalsInfoList03(Map<String, String> searchMap) throws Exception;

    /* 주문상세 영업정보 04 조회 */
    List<Map<String, Object>> selectSalsInfoList04(Map<String, String> searchMap) throws Exception;

    /* 주문상세 배송정보 조회 */
    List<Map<String, Object>> selectDlvInfo(Map<String, String> searchMap) throws Exception;

    /* 주문상세 배송정보 배송처리 조회 */
    List<Map<String, Object>> selectDlvProcInfo(Map<String, String> searchMap) throws Exception;

    /* 주문상세 배송정보 자차 조회 */
    List<Map<String, Object>> selectDlvSrvonInfo(Map<String, String> searchMap) throws Exception;

    /* 주문상세 배송정보 택배 조회 */
    List<Map<String, Object>> selectDlvHdvInfo(Map<String, String> searchMap) throws Exception;

    /* 주문상세 정산정보 조회 */
    List<Map<String, Object>> selectAdjInfo(Map<String, String> searchMap) throws Exception;
    
    /* 주문상세 정산정보 고객 입고/검수 현황 조회 */
    List<Map<String, Object>> selectAdjGiVerfInfo(Map<String, String> searchMap) throws Exception;
    
    /* 주문상세 정산정보 고객검수현황 조회 */
    List<Map<String, Object>> selectAdjCustVerfInfo(Map<String, String> searchMap) throws Exception;

    /* 주문상세 주문정보 조회 */
    List<Map<String, Object>> selectOdrInfo(Map<String, String> searchMap) throws Exception;
    
    /* 주문상세 주문정보 첨부파일 조회 */
    List<Map<String, Object>> selectOdrInfoAttFile(Map<String, String> searchMap) throws Exception;
    
    /* 주문상세 연계정보 조회 */
    List<Map<String, Object>> selectSndRcvList(Map<String, String> searchMap) throws Exception;
    
    /* 주문상세 연계정보2 조회 */
    List<Map<String, Object>> selectSndRcvList2(Map<String, String> searchMap) throws Exception;

    /* 주문상세 물량배분 조회 */
    List<Map<String, Object>> selectQtyDstrList(Map<String, String> searchMap) throws Exception;

    /* 주문상세 분납정보 조회 */
    List<Map<String, Object>> selectDvdpayList(Map<String, String> searchMap) throws Exception;

    /* 주문상세 예외처리 조회 */
    List<Map<String, Object>> selectExcProcList(Map<String, String> searchMap) throws Exception;

    /* 주문상세 예외처리 VOC배송정보1 조회 */
    List<Map<String, Object>> selectExcProcVocDlv01Info(Map<String, String> searchMap) throws Exception;

    /* 주문상세 예외처리 VOC배송정보2 조회 */
    List<Map<String, Object>> selectExcProcVocDlv02Info(Map<String, String> searchMap) throws Exception;

    /* 주문대행고객로그인 Count */
    int selectMbrListCount(Map<String, String> searchMap) throws Exception;

    /* 주문대행고객로그인 조회 */
    List<Map<String, Object>> selectMbrList(Map<String, String> searchMap) throws Exception;

    /* 접속이력 Count 조회 */
    int conHstListCount(Map<String, String> searchMap) throws Exception;

    /* 접속이력 조회 */
    List<Map<String, Object>> conHstList(Map<String, String> searchMap) throws Exception;

    /* 연계정보 Count 조회 */
    int selectSndRcvInfoListCount(Map<String, Object> searchMap) throws Exception;

    /* 연계정보 조회 */
    List<Map<String, Object>> selectSndRcvInfoList(Map<String, Object> searchMap) throws Exception;

    /* 연계정보 이력조회 */
    List<Map<String, Object>> selectSndRcvInfoList2(Map<String, String> searchMap) throws Exception;

}
