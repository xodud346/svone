package com.ssp.bo.od.dao;
import java.util.List;
import java.util.Map;

public interface OdOrderChangeDao {

    List<Map<String, Object>> selectChangeList(Map<String, String> searchMap) throws Exception;

    int selectChangeCount(Map<String, String> searchMap) throws Exception;

    List<Map<String, Object>> selectOrderChangeDetail(Map<String, String> searchMap) throws Exception;

    List<Map<String, Object>> selectMbrPopup(Map<String, Object> searchMap,String gb) throws Exception;

    List<Map<String, Object>> selectMbrPopupMbrList(Map<String, Object> searchMap,String gb) throws Exception;

    List<Map<String, Object>> selectRefCdPopupList(Map<String, Object> searchMap) throws Exception;

    List<Map<String, Object>> selectDstrPathPopup(Map<String, Object> searchMap) throws Exception;

    int insertOrderDoc(Map<String, Object> searchMap) throws Exception;

    int selectOrderDocOprUnit(Map<String, Object> searchMap) throws Exception;

    List<Map<String, Object>> selectOrderDoc(Map<String, Object> searchMap) throws Exception;

    /* 변경제어항목그룹코드 조회 */
    List<Map<String, Object>> selectChgCtlItmGrpCdList(Map<String, Object> searchMap) throws Exception;

    /* 변경제어항목그룹권한 조회 */
    List<Map<String, Object>> selectChgCtlItmGrpAuthList(Map<String, Object> searchMap) throws Exception;

    /* 변경제어항목그룹상세 조회 */
    List<Map<String, Object>> selectChgCtlItmGrpDtlList(Map<String, Object> searchMap) throws Exception;

    /* 변경제어항목그룹코드 저장 */
    int saveChgCtlItmGrpCd(Map<String, Object> commandMap) throws Exception;

    /* 변경제어항목그룹권한 저장 */
    int saveChgCtlItmGrpAuthInfo(Map<String, Object> commandMap) throws Exception;

    /* 변경제어항목그룹권한 삭제 */
    int deleteChgCtlItmGrpAuthInfo(Map<String, Object> data) throws Exception;

    /* 변경제어항목그룹상세 저장 */
    int saveChgCtlItmGrpDtl(Map<String, Object> commandMap) throws Exception;

    /* 주문일괄변경 조회 */
    List<Map<String, Object>> selectExcelUpldDtls(Map<String, Object> searchMap) throws Exception;

    List<Map<String, Object>> selectExcelUpldItmGrp(Map<String, Object> searchMap) throws Exception;

    List<Map<String, Object>> selectExcelUpldItmGrp2(Map<String, Object> searchMap) throws Exception;

    Map<String, Object> checkExcelUpldDtls(Map<String, Object> commandMap) throws Exception;

    int updateExcelUpldMstAfterSave(Map<String, Object> commandMap) throws Exception;

    int updateExcelUpldAfterSave(Map<String, Object> commandMap) throws Exception;

    List<Map<String, Object>> selectOrderChangeListDetail(Map<String, String> searchMap) throws Exception;

}
