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
import com.ssp.bo.od.service.OdBasisDlcstZpcdService;
import com.ssp.bo.od.util.OBU;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.exceptions.OdBizException;

/**
 * <pre>
 *
 * @title 도서산간 배송비 설정 컨트롤러
 * @package com.ssp.bo.od
 * <pre>
 * @author neonlee
 * @since 2022. 02. 24.
 * @version 1.0
 * @see OdBasisDlcstZpcdController
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */
@Controller
@RequestMapping("/od/basisDlcstZpcd")
public class OdBasisDlcstZpcdController {
    private final Logger log = LoggerFactory.getLogger(OdBasisDlcstZpcdController.class);

    @Autowired
    private OdBasisDlcstZpcdService dlBasisDlcstZpcdService;

    @RequestMapping(value = "/selectBasisDlcstCount.do")
    public NexacroResult selectBasisDlcstCount(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = dlBasisDlcstZpcdService.selectBasisDlcstCount(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "배송비구분 Count 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "DL", "BO", "selectBasisDlcstCount", "배송비구분 Count 조회" }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectBasisDlcstList.do")
    public NexacroResult selectBasisDlcstList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = dlBasisDlcstZpcdService.selectBasisDlcstList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "배송비구분 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "DL", "BO", "selectBasisDlcstList", "배송비구분 조회" }, e);
        }
        return result;
    }

    @RequestMapping(value = "/updateBasisDlcst.do")
    public NexacroResult updateBasisDlcst(@ParamDataSet(name = "ds_updateData", required = false) Map<String, Object> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = dlBasisDlcstZpcdService.updateBasisDlcst(commandMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "배송비구분 업데이트 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "DL", "BO", "updateBasisDlcst", "배송비구분 업데이트" }, e);
        }

        return result;
    }

    @RequestMapping(value = "/selectBasisDlcstHistoryCount.do")
    public NexacroResult selectBasisDlcstHistoryCount(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = dlBasisDlcstZpcdService.selectBasisDlcstHistoryCount(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "배송비구분 이력 Count 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "DL", "BO", "selectBasisDlcstHistoryCount", "배송비구분 이력 Count 조회" }, e);
        }

        return result;
    }

    @RequestMapping(value = "/selectCartDlcstPopupList.do")
    public NexacroResult selectCartDlcstPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = dlBasisDlcstZpcdService.selectCartDlcstPopupList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "배송비구분 이력 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "DL", "BO", "selectCartDlcstPopupList", "배송비구분 이력 조회" }, e);
        }

        return result;
    }

    @RequestMapping(value = "/selectIsareaZpcdCount.do")
    public NexacroResult selectIsareaZpcdCount(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = dlBasisDlcstZpcdService.selectIsareaZpcdCount(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "도서산간 배송비 우편정보 Count 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "DL", "BO", "selectIsareaZpcdCount", "도서산간 배송비 우편정보 Count 조회" }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectIsareaZpcdList.do")
    public NexacroResult selectIsareaZpcdList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = dlBasisDlcstZpcdService.selectIsareaZpcdList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "도서산간 배송비 우편정보 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "DL", "BO", "selectIsareaZpcdList", "도서산간 배송비 우편정보 조회" }, e);
        }
        return result;
    }

    @RequestMapping(value = "/selectIsareaZpcdGubunList.do")
    public NexacroResult selectIsareaZpcdGubunList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = dlBasisDlcstZpcdService.selectIsareaZpcdGubunList(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "도서산간 배송비 우편정보 구분정보 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "DL", "BO", "selectIsareaZpcdGubunList", "도서산간 배송비 우편정보 구분정보 조회" }, e);
        }
        return result;
    }

    @RequestMapping(value = "/updateIsareaZpcd.do")
    public NexacroResult updateIsareaZpcd(@ParamDataSet(name = "ds_updateList", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = dlBasisDlcstZpcdService.updateIsareaZpcd(commandMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "도서산간 배송비 우편정보 업데이트 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "DL", "BO", "updateIsareaZpcd", "도서산간 배송비 우편정보 업데이트" }, e);
        }
        return result;
    }

    @RequestMapping(value = "/insertIsareaZpcd.do")
    public NexacroResult insertIsareaZpcd(@ParamDataSet(name = "ds_insertData", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = dlBasisDlcstZpcdService.insertIsareaZpcd(commandMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "도서산간 배송비 우편정보 추가 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "DL", "BO", "insertIsareaZpcd", "도서산간 배송비 우편정보 업데이트" }, e);
        }
        return result;
    }
}
