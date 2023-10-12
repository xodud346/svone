package com.ssp.bo.ad.controller;

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
import com.ssp.bo.ad.service.AdCalPopupService;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.od.util.OBU;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.exceptions.OdBizException;

/**
 * <pre>
 * @title  정산관리 - 정산 재고 팝업
 * @package com.ssp.bo.ad.controller
 * <pre>
 * @author  윤민우
 * @since   2022.04.04
 * @version 1.0
 * @see AdCalPopupController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.04.04    윤민우        최초작성
 */
@Controller
@RequestMapping("/ad/cal/popup")
public class AdCalPopupController {

    private Logger logger = LoggerFactory.getLogger(AdCalPopupController.class);

    @Autowired
    private AdCalPopupService adCalPopupService;


    /**
     * <pre>
     * 1. MethodName : selectCalculateList
     * 2. ClassName  : AdCalPopupController
     * 3. Comment    : 정산확정 취소 목록 조회
     * 4. 작성자       : 윤민우
     * 5. 작성일       : 2022.04.04
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-cal-cxl-list.do")
    public NexacroResult selectCalCxlList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //OdOrderComm.initSession(session);
            result = adCalPopupService.selectCalCxlList(commandMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            logger.error("정산관리 - 정산확정 취소 목록 조회 실패");
            throw new LoggingException(new String[] { "AD", "SN", "selectCalCxlList", "정산관리 - 정산확정 취소 목록 조회 실패" }, e);
        }
        return result;
    }

    @RequestMapping(value = "/save-cal-cxl-list.do")
    public NexacroResult saveCalCxlList(@ParamDataSet(name = "ds_update1", required = false) List<Map<String, Object>> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //OdOrderComm.initSession(session);
            result = adCalPopupService.saveCalCxlList(commandMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            logger.error("정산관리 - 정산확정 취소 목록 조회 실패");
            throw new LoggingException(new String[] { "AD", "SN", "saveCalCxlList", "정산관리 - 정산확정 취소 저장" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectCalHistoryList
     * 2. ClassName  : AdCalPopupController
     * 3. Comment    : 정산 이력 목록 조회
     * 4. 작성자       : 윤민우
     * 5. 작성일       : 2022.04.06
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-cal-history-list.do")
    public NexacroResult selectCalHistoryList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> commandMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            //OdOrderComm.initSession(session);
            result = adCalPopupService.selectCalHistoryList(commandMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            logger.error("정산관리 - 정산 이력 목록 조회 실패");
            throw new LoggingException(new String[] { "AD", "SN", "selectCalCxlList", "정산관리 - 정산 이력 목록 조회 실패" }, e);
        }
        return result;
    }

}
