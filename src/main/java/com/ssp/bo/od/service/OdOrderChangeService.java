package com.ssp.bo.od.service;
import java.util.List;
import java.util.Map;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

public interface OdOrderChangeService {
    NexacroResult selectOrderChangeList(Map<String, String> searchMap,OdOrderComm odComm) throws Exception;
    NexacroResult selectOrderChangeDetail(Map<String, String> searchMap,OdOrderComm odComm) throws Exception;
    NexacroResult selectMbrPopup(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception;
    NexacroResult selectMbrPopupMbrList(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception;

    NexacroResult selectRefCdPopupList(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception;
    NexacroResult selectDstrPathPopup(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception;

    NexacroResult saveOrderDetail(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception;
    NexacroResult sendApprEmailInfo(Map<String, Object> commandMap,OdOrderComm odComm) throws Exception;
    NexacroResult saveOrderDetailAprvInfo(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception;
    NexacroResult saveOrderDetailAprvOdr(List<Map<String, Object>> commandMap, List<Map<String, Object>> commandMap2,OdOrderComm odComm) throws Exception;

    NexacroResult insertnselectOrderDoc(Map<String, Object> searchMap,OdOrderComm odComm) throws Exception;

    /* 변경제어항목그룹코드 조회 */
    NexacroResult selectChgCtlItmGrpCdList(Map<String, Object> searchMap) throws Exception;

    /* 변경제어항목그룹권한 조회 */
    NexacroResult selectChgCtlItmGrpAuthList(Map<String, Object> searchMap) throws Exception;

    /* 변경제어항목그룹상세 조회 */
    NexacroResult selectChgCtlItmGrpDtlList(Map<String, Object> searchMap) throws Exception;

    /* 변경제어항목그룹 권한, 상세 조회 */
    NexacroResult selectChgCtlItmGrpAuthAndDtlList(Map<String, Object> searchMap) throws Exception;

    /* 변경제어항목그룹코드 저장 */
    NexacroResult saveChgCtlItmGrpCd(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception;

    /* 변경제어항목그룹권한 저장 */
    NexacroResult saveChgCtlItmGrpAuthInfo(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception;

    /* 변경제어항목그룹상세 저장 */
    NexacroResult saveChgCtlItmGrpDtl(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception;

    /* 변경제어항목그룹 권한.상세 저장 */
    NexacroResult saveChgCtlItmGrpAuthAndDtl(List<Map<String, Object>> commandMap1, List<Map<String, Object>> commandMap2, OdOrderComm odComm) throws Exception;

    /* 변경제어항목그룹 목록.상세 저장 */
    NexacroResult saveChgCtlItmGrpCdAndDtl(List<Map<String, Object>> commandMap1, List<Map<String, Object>> commandMap2, OdOrderComm odComm) throws Exception;

    /* 변경제어항목그룹 목록.권한 저장 */
    NexacroResult saveChgCtlItmGrpCdAndAuth(List<Map<String, Object>> commandMap1, List<Map<String, Object>> commandMap2, OdOrderComm odComm) throws Exception;

    /* 변경제어항목그룹 목록.권한.상세 저장 */
    NexacroResult saveChgCtlItmGrpCdAndAll(List<Map<String, Object>> commandMap1, List<Map<String, Object>> commandMap2, List<Map<String, Object>> commandMap3, OdOrderComm odComm) throws Exception;

    /* 주문일괄변경 엑셀데이터 업로드 */
    boolean uploadExcelUpldDtls(List<Map<String, Object>> commandMap, Map<String, Object> searchMap, OdOrderComm odComm) throws Exception;

    /* 주문일괄변경 엑셀데이터 저장 */
    NexacroResult saveExcelUpldDtls(List<Map<String, Object>> commandMap, OdOrderComm odComm) throws Exception;

    /* 주문일괄변경 조회 */
    NexacroResult selectExcelUpldDtls(Map<String, Object> searchMap) throws Exception;

    NexacroResult selectExcelUpldItmGrp(Map<String, Object> searchMap, OdOrderComm odComm) throws Exception;

    NexacroResult selectExcelUpldItmGrp2(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception;

    Map<String, Object> checkExcelUpldDtls(Map<String, Object> searchMap) throws Exception;

    NexacroResult selectOrderChangeListDetail(Map<String, String> searchMap, OdOrderComm odOrderComm) throws Exception;

}
