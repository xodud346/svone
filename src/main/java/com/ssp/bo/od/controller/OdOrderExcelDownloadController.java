package com.ssp.bo.od.controller;

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
import com.ssp.bo.od.service.OdOrderExcelDownloadService;
import com.ssp.bo.od.util.OBU;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.exceptions.OdBizException;


/**
 * <pre>
 * @title 주문 목록
 * @package com.ssp.bo.od.controller
 * </pre>
 *
 * @author neonlee
 * @since 2022. 05. 25
 * @version 1.0
 * @see OdOrderExcelDownloadController
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */

@Controller
@RequestMapping("/od/orderExcel")
public class OdOrderExcelDownloadController {
private final Logger log = LoggerFactory.getLogger(OdOrderExcelDownloadController.class);

    @Autowired
    private OdOrderExcelDownloadService odOrderExcelDownloadService;

    /* OA_01 엑셀 대용량 다운로드*/
    @RequestMapping(value = "/excelBigDownloadOA01.do")
    public NexacroResult excelBigDownloadOA01(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOrderExcelDownloadService.excelBigDownloadOA01(searchMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문관리 대용량 엑셀 다운로드 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "excelBigDownloadOA01", "주문관리 대용량 엑셀 다운로드 에러" }, e) ;
        }

        return result;
    }

    /* OA_04 엑셀 대용량 다운로드*/
    @RequestMapping(value = "/excelBigDownloadOA04.do")
    public NexacroResult excelBigDownloadOA04(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOrderExcelDownloadService.excelBigDownloadOA04(searchMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "주문변경목록 대용량 엑셀 다운로드 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "excelBigDownloadOA04", "주문변경목록 대용량 엑셀 다운로드 에러" }, e) ;
        }

        return result;
    }

    /* KA_01 엑셀 대용량 다운로드*/
    @RequestMapping(value = "/excelBigDownloadKA01.do")
    public NexacroResult excelBigDownloadKA01(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOrderExcelDownloadService.excelBigDownloadKA01(searchMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "재고관리(S-MRP) 대용량 엑셀 다운로드 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "excelBigDownloadKA01", "재고관리(S-MRP) 대용량 엑셀 다운로드 에러" }, e) ;
        }

        return result;
    }

    /* SN_09 엑셀 대용량 다운로드*/
    @RequestMapping(value = "/excelBigDownloadSN09.do")
    public NexacroResult excelBigDownloadSN09(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            result = odOrderExcelDownloadService.excelBigDownloadSN09(searchMap, new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            String message = "정산대사목록 대용량 엑셀 다운로드 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "OD", "BO", "excelBigDownloadSN09", "정산대사목록 대용량 엑셀 다운로드 에러" }, e) ;
        }

        return result;
    }
}
