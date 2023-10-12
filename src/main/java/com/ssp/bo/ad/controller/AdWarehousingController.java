package com.ssp.bo.ad.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.ad.service.AdWarehousingService;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.od.util.OBU;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.excel.domain.SheetInfo;
import com.ssp.core.od.exceptions.OdBizException;
import com.ssp.core.od.service.OdExcelDownloadService;

/**
 * <pre>
 * @title  입고관리 목록관리
 * @package com.ssp.bo.ad.controller
 * <pre>
 * @author  윤민우
 * @since   2022.03.11
 * @version 1.0
 * @see AdWarehousingController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.11    윤민우        최초작성a
 */
@Controller
@RequestMapping("/ad/wh")
public class AdWarehousingController {

    private Logger logger = LoggerFactory.getLogger(AdWarehousingController.class);

    @Autowired
    private OdExcelDownloadService odExcelDownloadService;

    @Autowired
    private AdWarehousingService adWarehousingService;

    /**
     * <pre>
     * 1. MethodName : selectWarehousingList
     * 2. ClassName  : AdWarehousingController
     * 3. Comment    : 입고목록 마스터 목록 조회
     * 4. 작성자       : 윤민우
     * 5. 작성일       : 2022.03.11
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-warehousing-list.do")
    public NexacroResult selectWarehousingList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //OdOrderComm.initSession(session);
            result = adWarehousingService.selectWarehousingList(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            logger.error("정산관리 - 고객사 입고처리 목록 조회 실패");
            throw new LoggingException(new String[] { "AD", "SN", "selectWarehousingList", "정산관리 - 고객사 입고처리 목록 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : updateWarehousingFinish
     * 2. ClassName  : AdWarehousingController
     * 3. Comment    : 입고처리 완료 저장
     * 4. 작성자       : 윤민우
     * 5. 작성일       : 2022.03.25
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/update-warehousing-finish.do")
    public NexacroResult updateWarehousingFinish(@ParamDataSet(name = "ds_chkList", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        //logger.info("===================== ctl commandMap 확인 : " + commandMap + "\n");
        try {
            result = adWarehousingService.updateWarehousingFinish(commandMap,new OdOrderComm(session));
            //logger.info("===================== ctl result 확인 : " + result.getDataSets() + "\n");
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            logger.error("입고처리 완료 저장 실패");
            throw new LoggingException(new String[] { "AD", "SN", "updateWarehousingFinish", "입고처리 완료 저장 실패" }, e);
        }

        return result;
    }


    @RequestMapping(value = "/select-warehousing-list-excel.do")
    public void excelWarehousingList(HttpServletRequest request, HttpServletResponse response) throws Exception {

        try {
            odExcelDownloadService.excelFileDownload(OdOrderComm.getSearchMap(request), request, response, "입고처리", "sn07_xlsx01",
                    SheetInfo.of("Sheet01", "com.ssp.bo.ad.adWarehousing.selectWarehousingList_xlsx01"));
        } catch (OdBizException obe) {
            //return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            logger.error("정산관리 - 고객사 입고처리 엑셀 조회 실패");
            throw new LoggingException(new String[] { "AD", "SN", "selectWarehousingList", "정산관리 - 고객사 입고처리 엑셀 조회 실패" }, e);
        }
        return ;
    }
}
