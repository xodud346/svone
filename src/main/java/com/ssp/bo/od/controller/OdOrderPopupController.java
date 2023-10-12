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
import com.ssp.bo.od.service.OdOdrPopupService;
import com.ssp.bo.od.util.OBU;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.exceptions.OdBizException;

/**
 * <pre>
 * @title 주문 팝업
 * @package com.ssp.bo.od.controller
 * </pre>
 *
 * @author neonlee
 * @since 2022. 03. 04.
 * @version 1.0
 * @see OdOrderPopupController
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */

@Controller
@RequestMapping("/od/odrPopup")
public class OdOrderPopupController {
    private final Logger log = LoggerFactory.getLogger(OdOrderPopupController.class);

    @Autowired
    private OdOdrPopupService odOdrPopupService;

//    @Autowired
//    private OdOrderChangeService odOrderChangeService;

    @RequestMapping(value = "/selectOdrNumberList.do")
    public NexacroResult selectOdrNumberList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectOdrNumberList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문번호 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOdrNumberList", message }, e);
        }

        return result;
    }

    @RequestMapping(value = "/selectOdrNumberCount.do")
    public NexacroResult selectOdrNumberCount(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectOdrNumberCount(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문번호 Count 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOdrNumberCount", message }, e);
        }

        return result;
    }

    @RequestMapping(value = "/insertOdrInqTgtDtls.do")
    public NexacroResult insertOdrInqTgtDtls(@ParamDataSet(name = "ds_search", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.deleteOdrInqTgtDtls(commandMap,new OdOrderComm(session));
            result = odOdrPopupService.insertOdrInqTgtBatch(commandMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문조회대상내역 등록 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "insertOdrInqTgtDtls", message }, e);
        }

        return result;
    }

    /*
    @RequestMapping(value = "/insertReportItemToSession.do")
    public NexacroResult insertReportItemToSession(@ParamDataSet(name = "ds_search", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.deleteOdrInqTgtDtls(commandMap,new OdOrderComm(session));
            result = odOdrPopupService.insertReportItemToSession(commandMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "OZ레포트 멀티항목 저장 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "insertReportItemToSession", message }, e);
        }

        return result;
    }
    */

    /*
    @RequestMapping(value = "/selectReportId.do")
    public NexacroResult selectReportId(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectReportId(commandMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "OZ레포트 ID 조회";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectReportId", message }, e);
        }

        return result;
    }
    */


    @RequestMapping(value = "/deleteOdrInqTgtDtls.do")
    public NexacroResult deleteOdrInqTgtDtls(@ParamDataSet(name = "ds_search", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.deleteOdrInqTgtDtls(commandMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문조회대상내역 삭제 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "deleteOdrInqTgtDtls", message }, e);
        }

        return result;
    }

    @RequestMapping(value = "/selectOrdNumberCount.do")
    public NexacroResult selectOrdNumberCount(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectOrdNumberCount(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "발주번호 Count 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOrdNumberCount", message }, e);
        }

        return result;
    }

    @RequestMapping(value = "/selectOrdNumberList.do")
    public NexacroResult selectOrdNumberList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectOrdNumberList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "발주번호 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOrdNumberList", message }, e);
        }

        return result;
    }

    @RequestMapping(value = "/selectOdrPsnCount.do")
    public NexacroResult selectOdrPsnCount(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectOdrPsnCount(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문자 Count 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOdrPsnCount", message }, e);
        }

        return result;
    }

    @RequestMapping(value = "/selectOdrPsnList.do")
    public NexacroResult selectOdrPsnList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectOdrPsnList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문자 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOdrPsnList", message }, e);
        }

        return result;
    }

    @RequestMapping(value = "/selectOdrPlntCount.do")
    public NexacroResult selectOdrPlntCount(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectOdrPlntCount(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "플랜트 Count 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOdrPlntCount", message }, e);
        }

        return result;
    }

    @RequestMapping(value = "/selectOdrPlntList.do")
    public NexacroResult selectOdrPlntList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectOdrPlntList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "플랜트 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOdrPlntList", message }, e);
        }

        return result;
    }

    @RequestMapping(value = "/selectChgItmGrpCount.do")
    public NexacroResult selectChgItmGrpCount(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectChgItmGrpCount(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경항목그룹 Count 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectChgItmGrpCount", message }, e);
        }

        return result;
    }

    @RequestMapping(value = "/selectChgItmGrpList.do")
    public NexacroResult selectChgItmGrpList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectChgItmGrpList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "변경항목그룹 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectChgItmGrpList", message }, e);
        }

        return result;
    }

    // 공통코드 조회 테스트
    @RequestMapping(value = "/selectCommonCodeList.do")
    public NexacroResult selectCommonCodeList(@ParamDataSet(name = "ds_search", required = false) List<Map<String, String>> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectCommonCodeList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "공통코드 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectCommonCDList", message }, e);
        }

        return result;
    }

    // 배송지목록 조회
    @RequestMapping(value = "/selectDlvplcList.do")
    public NexacroResult selectDlvplcList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectDlvplcList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "배송지목록 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectDlvplcList", message }, e);
        }

        return result;
    }

    // 명함정보 조회
    @RequestMapping(value = "/selectOdrBzcrdPrdInfo.do")
    public NexacroResult selectOdrBzcrdPrdInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectOdrBzcrdPrdInfo(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "명함정보 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOdrBzcrdPrdInfo", message }, e);
        }

        return result;
    }

    // 명함정보 업데이트
    @RequestMapping(value = "/updateOdrBzcrdPrdInfo.do")
    public NexacroResult updateOdrBzcrdPrdInfo(@ParamDataSet(name = "ds_update", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "명함정보 업데이트 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "updateOdrBzcrdPrdInfo", message }, e);
        }

        return result;
    }

    // 비용이체부서 조회
    @RequestMapping(value = "/selectCostTrnsfDeptList.do")
    public NexacroResult selectCostTrnsfDeptList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectCostTrnsfDeptList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "비용이체부서 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectCostTrnsfDeptList", message }, e);
        }

        return result;
    }

    // 비용이체부서계정 조회
    @RequestMapping(value = "/selectCostTrnsfDeptAcctList.do")
    public NexacroResult selectCostTrnsfDeptAcctList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectCostTrnsfDeptAcctList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "비용이체부서계정 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectCostTrnsfDeptAcctList", message }, e);
        }

        return result;
    }

    // 귀속부서 조회
    @RequestMapping(value = "/selectBlngDeptList.do")
    public NexacroResult selectBlngDeptList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectBlngDeptList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "귀속부서 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectBlngDeptList", message }, e);
        }

        return result;
    }

    // Email 발송 이력
    @RequestMapping(value = "/selectEmailSentHstList.do")
    public NexacroResult selectEmailSentHstList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectEmailSentHstList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "Email 발송이력 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectEmailSentHstList", message }, e);
        }

        return result;
    }

    // 컬럼 조회
    @RequestMapping(value = "/selectColumnList.do")
    public NexacroResult selectColumnList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectColumnList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "컬럼 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectColumnList", message }, e);
        }

        return result;
    }

    // 주문일괄등록 이력 조회
    @RequestMapping(value = "/selectExcelUpldDtlsHstList.do")
    public NexacroResult selectExcelUpldDtlsHstList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectExcelUpldDtlsHstList(searchMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문일괄등록 이력 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectExcelUpldDtlsHstList", message }, e);
        }

        return result;
    }
    
    // 운영자 멀티 조회
    @RequestMapping(value = "/selectOprtrList.do")
    public NexacroResult selectOprtrList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectOprtrList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "운영자 멀티 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectOprtrList", message }, e);
        }

        return result;
    }
    
    // MD담당자 멀티 조회
    @RequestMapping(value = "/selectMDOprtrList.do")
    public NexacroResult selectMDOprtrList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectMDOprtrList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "MD담당자 멀티 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectMDOprtrList", message }, e);
        }

        return result;
    }
    
    // MD담당자 단일 조회
    @RequestMapping(value = "/selectMDOprtrSingleList.do")
    public NexacroResult selectMDOprtrSingleList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOdrPopupService.selectMDOprtrList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "MD담당자 단일 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "selectMDOprtrSingleList", message }, e);
        }

        return result;
    }
}

