package com.ssp.bo.od.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.od.service.OdOrderBoCommService;
import com.ssp.bo.od.service.OdOrderChangeService;
import com.ssp.bo.od.util.OBU;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.exceptions.OdBizException;
import com.ssp.core.od.utils.OU;


/**
 * <pre>
 * @title 주문 목록
 * @package com.ssp.bo.od.controller
 * </pre>
 *
 * @author neonlee
 * @since 2022. 03. 15
 * @version 1.0
 * @see OdOderChangeListController
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */

@Controller
@RequestMapping("/od/orderChange")
public class OdOrderChangeController {
private final Logger log = LoggerFactory.getLogger(OdOrderChangeController.class);

    @Autowired
    private OdOrderChangeService srv;

    @Autowired
    private OdOrderBoCommService srvBoComm;

    @RequestMapping(value = "/selectOrderChangeList.do")
    public NexacroResult selectOrderChangeList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectOrderChangeList(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문목록 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectChangeList", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectOrderChangeListDetail.do")
    public NexacroResult selectOrderChangeListDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectOrderChangeListDetail(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경목록 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOrderChangeListDetail", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectOrderChangeDetail.do")
    public NexacroResult selectOrderChangeDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectOrderChangeDetail(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경목록 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOrderChangeDetail", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectMbrPopup.do")
    public NexacroResult selectMbrPopup(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectMbrPopup(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "회원 발주,결재 사업장 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectMbrPopup", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectMbrPopupMbrList.do")
    public NexacroResult selectMbrPopupMbrList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectMbrPopupMbrList(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "회원 발주,결재 검색리스트 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectMbrPopupMbrList", message }, e);
        }
        return result;
    }

    // Naming서비스
    @RequestMapping(value = "/selectCommonCodeName.do")
    public NexacroResult selectCommonCodeName(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srvBoComm.selectCommonCodeName(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "Naming 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectCommonCodeName", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectCommonMessage.do")
    public NexacroResult selectCommonMessage(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srvBoComm.selectCommonMessage(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "Message 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectCommonMessage", message }, e);
        }
        return result;
    }

    // 주문정보 업데이트
    @RequestMapping(value = "/saveOrderDetail.do")
    public NexacroResult saveOrderDetail(@ParamDataSet(name = "ds_update", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.saveOrderDetail(commandMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 업데이트 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "saveOrderDetail", message }, e);
        }
        return result;
    }

    // 결재자,발주자 업데이트 APRV_INFO
    @RequestMapping(value = "/saveOrderDetailAprvInfo.do")
    public NexacroResult saveOrderDetailAprvInfo(@ParamDataSet(name = "ds_update1", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.saveOrderDetailAprvInfo(commandMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 업데이트 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "saveOrderDetail", message }, e);
        }
        return result;
    }

 // 결재자,발주자 업데이트 TotalSave
    @RequestMapping(value = "/saveOrderDetailAprvOdr.do")
    public NexacroResult saveOrderDetailAprvOdr(@ParamDataSet(name = "ds_update1", required = false) List<Map<String, Object>> commandMap, @ParamDataSet(name = "ds_update2", required = false) List<Map<String, Object>> commandMap2, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.saveOrderDetailAprvOdr(commandMap, commandMap2,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 업데이트 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "saveOrderDetailAprvOdr", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/sendApprEmailInfo.do")
    public NexacroResult sendApprEmailInfo(@ParamDataSet(name = "ds_update1", required = false) Map<String, Object> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.sendApprEmailInfo(commandMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "결재자 eMail 전송 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "sendApprEmailInfo", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectRefCdPopup.do")
    public NexacroResult selectRefCdPopup(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectRefCdPopupList(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문 참조코드 변경 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectRefCdPopup", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectDstrPathPopup.do")
    public NexacroResult selectDstrPathPopup(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectDstrPathPopup(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문 유통경로변경 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectRefCdPopup", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/insertnselectOrderDoc.do")
    public NexacroResult insertnselectOrderDoc(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.insertnselectOrderDoc(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문거래명세서 주문번호 저장 및 조회";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectRefCdPopup", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectChgCtlItmGrpCdList.do")
    public NexacroResult selectChgCtlItmGrpCdList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectChgCtlItmGrpCdList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경제어항목그룹 코드 조회";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectChgCtlItmGrpCdList", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectChgCtlItmGrpAuthList.do")
    public NexacroResult selectChgCtlItmGrpAuthList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectChgCtlItmGrpAuthList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경제어항목그룹 권한 조회";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectChgCtlItmGrpAuthList", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectChgCtlItmGrpDtlList.do")
    public NexacroResult selectChgCtlItmGrpDtlList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectChgCtlItmGrpDtlList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경제어항목그룹 상세 조회";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectChgCtlItmGrpDtlList", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectChgCtlItmGrpAuthAndDtlList.do")
    public NexacroResult selectChgCtlItmGrpAuthAndDtlList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectChgCtlItmGrpAuthAndDtlList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경제어항목그룹 권한, 상세 조회";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectChgCtlItmGrpAuthAndDtlList", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/saveChgCtlItmGrpCd.do")
    public NexacroResult saveChgCtlItmGrpCd(@ParamDataSet(name = "ds_update1", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.saveChgCtlItmGrpCd(commandMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경제어항목그룹 코드 저장";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "saveChgCtlItmGrpCd", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/saveChgCtlItmGrpAuthInfo.do")
    public NexacroResult saveChgCtlItmGrpAuthInfo(@ParamDataSet(name = "ds_update1", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.saveChgCtlItmGrpAuthInfo(commandMap, new OdOrderComm(session));

        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경제어항목그룹 권한 저장";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "saveChgCtlItmGrpAuthInfo", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/saveChgCtlItmGrpDtl.do")
    public NexacroResult saveChgCtlItmGrpDtl(@ParamDataSet(name = "ds_update1", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.saveChgCtlItmGrpDtl(commandMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경제어항목그룹 상세 저장";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "saveChgCtlItmGrpDtl", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/saveChgCtlItmGrpAuthAndDtl.do")
    public NexacroResult saveChgCtlItmGrpAuthAndDtl(@ParamDataSet(name = "ds_update1", required = false) List<Map<String, Object>> commandMap1, @ParamDataSet(name = "ds_update2", required = false) List<Map<String, Object>> commandMap2, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.saveChgCtlItmGrpAuthAndDtl(commandMap1, commandMap2, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경제어항목그룹 권한.상세 저장";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "saveChgCtlItmGrpAuthAndDtl", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/saveChgCtlItmGrpCdAndDtl.do")
    public NexacroResult saveChgCtlItmGrpCdAndDtl(@ParamDataSet(name = "ds_update1", required = false) List<Map<String, Object>> commandMap1, @ParamDataSet(name = "ds_update2", required = false) List<Map<String, Object>> commandMap2, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.saveChgCtlItmGrpCdAndDtl(commandMap1, commandMap2, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경제어항목그룹 코드.상세 저장";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "saveChgCtlItmGrpCdAndDtl", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/saveChgCtlItmGrpCdAndAuth.do")
    public NexacroResult saveChgCtlItmGrpCdAndAuth(@ParamDataSet(name = "ds_update1", required = false) List<Map<String, Object>> commandMap1, @ParamDataSet(name = "ds_update2", required = false) List<Map<String, Object>> commandMap2, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.saveChgCtlItmGrpCdAndAuth(commandMap1, commandMap2, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경제어항목그룹 코드.권한 저장";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "saveChgCtlItmGrpCdAndAuth", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/saveChgCtlItmGrpCdAndAll.do")
    public NexacroResult saveChgCtlItmGrpCdAndAll(@ParamDataSet(name = "ds_update1", required = false) List<Map<String, Object>> commandMap1,
                                                  @ParamDataSet(name = "ds_update2", required = false) List<Map<String, Object>> commandMap2,
                                                  @ParamDataSet(name = "ds_update3", required = false) List<Map<String, Object>> commandMap3, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.saveChgCtlItmGrpCdAndAll(commandMap1, commandMap2, commandMap3, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경제어항목그룹 코드.권한.상세 저장";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "saveChgCtlItmGrpAuthAndDtl", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/uploadExcelUpldDtls.do")
    public NexacroResult uploadExcelUpldDtls(@ParamDataSet(name = "ds_update1", required = false) List<Map<String, Object>> commandMap,
                                             @ParamDataSet(name = "ds_update2", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            if(srv.uploadExcelUpldDtls(commandMap, searchMap, new OdOrderComm(session)) == true )   {
                Map<String, Object> retMap = srv.checkExcelUpldDtls(searchMap);
                if("S".equals(retMap.get("RTN_CD")))
                    result = srv.selectExcelUpldDtls(searchMap);
                else
                    throw new OdBizException(OU.asS(retMap.get("RTN_MSG")));
            }
            else
                throw new LoggingException(new String[] { "OD", "BO", "uploadExcelUpldDtls", "insert Error" }, new Exception());
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문일괄변경 엑셀 데이터 업로드";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "uploadExcelUpldDtls", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/saveExcelUpldDtls.do")
    public NexacroResult saveExcelUpldDtls(@ParamDataSet(name = "ds_update1", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result = srv.saveExcelUpldDtls(commandMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문일괄변경 엑셀 데이터 저장";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "saveExcelUpldDtls", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectExcelUpldDtls.do")
    public NexacroResult selectExcelUpldDtls(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectExcelUpldDtls(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문일괄변경 조회";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectExcelUpldDtls", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectExcelUpldItmGrp.do")
    public NexacroResult selectExcelUpldItmGrp(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectExcelUpldItmGrp(searchMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문일괄변경 콤보 조회";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectExcelUpldItmGrp", message }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectExcelUpldItmGrp2.do")
    public NexacroResult selectExcelUpldItmGrp2(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = srv.selectExcelUpldItmGrp2(searchMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문일괄변경 팝업 콤보 조회";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectExcelUpldItmGrp2", message }, e);
        }
        return result;
    }

}