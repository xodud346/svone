package com.ssp.bo.ad.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.ad.service.AdCalculateService;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.od.util.OBU;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.exceptions.OdBizException;

/**
 * <pre>
 * @title  정산관리 목록관리
 * @package com.ssp.bo.ad.controller
 * <pre>
 * @author  윤민우
 * @since   2022.03.11
 * @version 1.0
 * @see AdCalculateController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.11    윤민우        최초작성
 */
@Controller
@RequestMapping("/ad/cal")
public class AdCalculateController {

    private Logger logger = LoggerFactory.getLogger(AdCalculateController.class);

    @Autowired
    private AdCalculateService adCalculateService;


    /**
     * <pre>
     * 1. MethodName : selectCalculateList
     * 2. ClassName  : AdCalculateController
     * 3. Comment    : 정산대사 목록 조회
     * 4. 작성자       : 윤민우
     * 5. 작성일       : 2022.03.11
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-calculate-list.do")
    public NexacroResult selectCalculateList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            //OdOrderComm.initSession(session);
            result = adCalculateService.selectCalculateList(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            logger.error("정산관리 - 정산대사 목록 조회 실패");
            throw new LoggingException(new String[] { "AD", "SN", "selectCalculateList", "정산관리 - 정산대사 목록 조회 실패" }, e);
        }
        return result;
    }


    /**
     * <pre>
     * 1. MethodName : selectNoCalculateList
     * 2. ClassName  : AdCalculateController
     * 3. Comment    : 미정산내역 목록 전체 조회
     * 4. 작성자       : 윤민우
     * 5. 작성일       : 2022.03.11
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-no-calculate-list.do")
    public NexacroResult selectNoCalculateList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            //OdOrderComm.initSession(session);
            result = adCalculateService.selectNoCalculateList(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            logger.error("정산관리 - 미정산내역 목록 전체 조회 실패");
            throw new LoggingException(new String[] { "AD", "SN", "selectNoCalculateList", "정산관리 - 미정산내역 목록 전체 조회 실패" }, e);
        }
        return result;
    }

}
