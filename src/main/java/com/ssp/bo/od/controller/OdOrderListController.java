package com.ssp.bo.od.controller;

import java.util.ArrayList;
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
import com.ssp.bo.od.service.OdOderListService;
import com.ssp.bo.od.util.OBU;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.components.OdReSendCpmponent;
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
 * @see OdOrderListController
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */

@Controller
@RequestMapping("/od/oderlist")
public class OdOrderListController {
private final Logger log = LoggerFactory.getLogger(OdOrderListController.class);

    @Autowired
    private OdReSendCpmponent odResend;

    @Autowired
    private OdOderListService odOderListService;

    @RequestMapping(value = "/selectOrderList.do")
    public NexacroResult selectOrderList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectOrderList(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문목록 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOrderList", "주문목록 조회" }, e) ;
        }

        return result;
    }

    @RequestMapping(value = "/selectOderDetailList.do")
    public NexacroResult selectOderDetailList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectOderDetailList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문목록 상세 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOderDetailList", "주문목록 상세 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 고객정보 */
    @RequestMapping(value = "/selectCustOderInfo.do")
    public NexacroResult selectCustOderInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectCustOderInfo(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 고객정보 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectCustOderInfo", "주문상세 고객정보 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 결재/발주 */
    @RequestMapping(value = "/selectApprOrdInfo.do")
    public NexacroResult selectApprOrdInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectApprOrdInfo(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 결재/발주 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectApprOrdInfo", "주문상세 결재/발주 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 영업정보 */
    @RequestMapping(value = "/selectSalsInfoList.do")
    public NexacroResult selectSalsInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectSalsInfoList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 영업정보 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectSalsInfoList", "주문상세 영업정보 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 영업정보04 */
    @RequestMapping(value = "/selectSalsInfoList04.do")
    public NexacroResult selectSalsInfoList04(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectSalsInfoList04(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 영업정보04 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectSalsInfoList04", "주문상세 영업정보04 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 변경이력 */
    @RequestMapping(value = "/selectChgHstList.do")
    public NexacroResult selectChgHstList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectChgHstList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 변경이력 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectChgHstList", "주문상세 변경이력 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 배송정보 */
    @RequestMapping(value = "/selectDlvInfo.do")
    public NexacroResult selectDlvInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectDlvInfo(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 배송정보 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectDlvInfo", "주문상세 배송정보 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 정산정보 */
    @RequestMapping(value = "/selectAdjInfo.do")
    public NexacroResult selectAdjInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectAdjInfo(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 정산정보 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectAdjInfo", "주문상세 정산정보 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 주문정보 */
    @RequestMapping(value = "/selectOdrInfo.do")
    public NexacroResult selectOdrInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectOdrInfo(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 주문정보 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOdrInfo", "주문상세 주문정보 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 연계정보 */
    @RequestMapping(value = "/selectSndRcvList.do")
    public NexacroResult selectSndRcvList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectSndRcvList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 연계정보 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectSndRcvList", "주문상세 연계정보 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 연계정보2 */
    @RequestMapping(value = "/selectSndRcvList2.do")
    public NexacroResult selectSndRcvList2(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectSndRcvList2(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 연계정보2 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectSndRcvList2", "주문상세 연계정보2 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 물량배분 */
    @RequestMapping(value = "/selectQtyDstrList.do")
    public NexacroResult selectQtyDstrList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectQtyDstrList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 물량배분 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectQtyDstrList", "주문상세 물량배분 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 분납정보 */
    @RequestMapping(value = "/selectDvdpayList.do")
    public NexacroResult selectDvdpayList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectDvdpayList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 분납정보 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectDvdpayList", "주문상세 분납정보 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 예외처리 */
    @RequestMapping(value = "/selectExcProcList.do")
    public NexacroResult selectExcProcList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectExcProcList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 예외처리 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectExcProcList", "주문상세 예외처리 조회" }, e) ;
        }

        return result;
    }

    /* 주문상세 - 예외처리 VOC배송정보 */
    @RequestMapping(value = "/selectExcProcVocDlvInfo.do")
    public NexacroResult selectExcProcVocDlvInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectExcProcVocDlvInfo(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 예외처리 VOC배송정보 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectExcProcVocDlvInfo", "주문상세 예외처리 VOC배송정보 조회" }, e) ;
        }

        return result;
    }


    /* 주문대행고객로그인*/
    @RequestMapping(value = "/selectMbrList.do")
    public NexacroResult selectMbrList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectMbrList(searchMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문대행고객로그인 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectMbrList", "주문대행고객로그인 조회" }, e) ;
        }

        return result;
    }

    /* 접속이력조회*/
    @RequestMapping(value = "/conHstList.do")
    public NexacroResult conHstList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.conHstList(searchMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "접속이력 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "conHstList", "접속이력 조회" }, e) ;
        }

        return result;
    }

    /* 주문조회 오즈리포트 ID 조회 */
    @RequestMapping(value = "/selectReportId.do")
    public NexacroResult selectReportId(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectReportId(commandMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "OZ레포트 ID 조회";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectReportId", message }, e);
        }

        return result;
    }

    /* 주문조회 오즈리포트 조회대상 주문번호 insert */
    @RequestMapping(value = "/insertReportItemToSession.do")
    public NexacroResult insertReportItemToSession(@ParamDataSet(name = "ds_search", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
          if(commandMap.size() != 0)
          {
            result = odOderListService.deleteOdrInqTgtDtls(commandMap,new OdOrderComm(session));
            result = odOderListService.insertReportItemToSession(commandMap,new OdOrderComm(session));
          }
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "OZ레포트 멀티항목 저장 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "insertReportItemToSession", message }, e);
        }

        return result;
    }

    /* 연계정보 조회 */
    @RequestMapping(value = "/selectSndRcvInfoList.do")
    public NexacroResult selectSndRcvInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectSndRcvInfoList(searchMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문상세 연계정보 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectSndRcvInfoList", "주문상세 연계정보 조회" }, e) ;
        }

        return result;
    }

    /* 연계정보 이력조회 */
    @RequestMapping(value = "/selectSndRcvInfoList2.do")
    public NexacroResult selectSndRcvInfoList2(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOderListService.selectSndRcvInfoList2(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "연계정보 이력 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectSndRcvInfoList2", "연계정보 이력 조회" }, e) ;
        }

        return result;
    }

    /* 연계정보 재전송 */
    @RequestMapping(value = "/interfaceInfoResend.do")
    public NexacroResult interfaceInfoResend(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = interfaceInfoResend(searchMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "연계정보 재전송 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "interfaceInfoResend", "연계정보 재전송" }, e) ;
        }

        return result;
    }
    private NexacroResult interfaceInfoResend(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception {
        NexacroResult result = new NexacroResult();
        List<Map<String, Object>> listReturn = new ArrayList<Map<String, Object>>();
        Map<String, Object> returnMap = OU.newMap();
        String strIfSystemId = OU.asS(searchMap.get("IF_SYSTEM_ID"));
        String strIfPiId = OU.asS(searchMap.get("IF_PI_ID"));
        String strIfMsgId = OU.asS(searchMap.get("IF_MSG_ID"));
        String strIfMsgSeq = OU.asS(searchMap.get("IF_MSG_SEQ"));
        String strCoCd = OU.asS(searchMap.get("CO_CD"));
        String strBzplcId = OU.asS(searchMap.get("BZPLC_ID"));
        String strOdrNo = OU.asS(searchMap.get("ODR_NO"));
        String strOdrItmNo = OU.asS(searchMap.get("ODR_ITM_NO"));

        odResend.reSend(strIfSystemId, strIfPiId, strIfMsgId, strIfMsgSeq,strCoCd,strBzplcId,strOdrNo,strOdrItmNo,OU.asS(odOrderComm.getSession().get("OPRTR_ID")));
        returnMap.put("RTN_CD", "0");
        returnMap.put("RTN_MSG", "SUCCESS");

        listReturn.add(returnMap);
        result.addDataSet("ds_output1", listReturn);
        return result;
    }

}
