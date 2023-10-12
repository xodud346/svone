package com.ssp.bo.iv.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.iv.service.IvInventoryService;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.od.util.OBU;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.exceptions.OdBizException;

/**
 * <pre>
 * @title  재고관리 목록관리
 * @package com.ssp.bo.vi.controller
 * <pre>
 * @author  윤민우
 * @since   2022.03.11
 * @version 1.0
 * @see IvInventoryController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.11    윤민우        최초작성
 */
@Controller
@RequestMapping("/iv/inv")
public class IvInventoryController {

    private Logger logger = LoggerFactory.getLogger(IvInventoryController.class);

    @Autowired
    private IvInventoryService inventoryService;


    /**
     * <pre>
     * 1. MethodName : selectComCdList
     * 2. ClassName  : IvInventoryController
     * 3. Comment    : 공통코드 목록 조회
     * 4. 작성자       : 윤민우
     * 5. 작성일       : 2022.03.15
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-comcd-list.do")
    public NexacroResult selectComCdList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        //logger.info("===================== ctl searchMap 확인 : " + searchMap + "\n");
        try {
            result = inventoryService.selectComCdList(searchMap);
            //logger.info("===================== ctl result 확인 : " + result.getDataSets() + "\n");
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            logger.error("공통코드 목록 조회 실패");
            throw new LoggingException(new String[] { "IV", "BO", "selectComCdList", "공통코드 목록 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectInventoryList
     * 2. ClassName  : IvInventoryController
     * 3. Comment    : 재고관리 마스터 목록 조회
     * 4. 작성자       : 윤민우
     * 5. 작성일       : 2022.03.11
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-inventory-list.do")
    public NexacroResult selectInventoryList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
           // OdOrderComm.initSession(session);
            result = inventoryService.selectInventoryList(searchMap,new OdOrderComm(session));
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            logger.error("재고관리 마스터 목록 조회 실패");
            throw new LoggingException(new String[] { "IV", "BO", "selectInventoryList", "재고관리 마스터 목록 조회 실패" }, e);
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectInventoryDetail
     * 2. ClassName  : IvInventoryController
     * 3. Comment    : 재고관리 마스터 상세 조회
     * 4. 작성자       : 윤민우
     * 5. 작성일       : 2022.03.14
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-inventory-detail.do")
    public NexacroResult selectInventoryDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result = inventoryService.selectInventoryDetail(searchMap);
        } catch (OdBizException obe) {
            return OBU.convExceptionToResult(obe);
        } catch (Exception e) {
            logger.error("재고관리 마스터 상세 조회 실패");
            throw new LoggingException(new String[] { "IV", "BO", "selectInventoryDetail", "재고관리 마스터 상세 조회 실패" }, e);
        }
        return result;
    }
}
