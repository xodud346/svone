package com.ssp.bo.rd.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.RdProductHistoryService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  R&D 상품 변경이력관리 공통팝업
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  김진섭
 * @since   2022.03.10
 * @version 1.0
 * @see RdProductHistoryController.java
 * 파라미터 HISTORY_TYPE 이력유형, KEY1~5 조회키
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.10    김진섭        최초작성(담당자)
 */
@Controller
@RequestMapping("/rd/productHistory")
public class RdProductHistoryController {
    
    private Logger logger = LoggerFactory.getLogger(RdProductHistoryController.class);
    
    @Autowired
    private RdProductHistoryService rdProductHistoryService;
    
    
    protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		RdProductHistoryController.propertiesService = propertiesService;
	}
    /**
     * <pre>
     * 1. MethodName : selectProductHistory
     * 2. ClassName  : RdProductHistoryController
     * 3. Comment    : 변경이력조회 
     * 4. 작성자       : 김진섭
     * 5. 작성일       : 2022.03.10
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping("/selectProductHistory.do")
    public NexacroResult selectProductHistory(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
        String historyType = StringUtil.getString(searchMap, "HISTORY_TYPE");	//이력유형
        try {
        	if(historyType.isEmpty()) {
        		throw new Exception("이력 필수값 에러");
        	}
            searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));	//cocd코드
			result.addVariable("totalCount", rdProductHistoryService.selectProductHistoryCount(searchMap));
	        result.addDataSet("historyList", rdProductHistoryService.selectProductHistoryList(searchMap));
        } catch (Exception e) {
            logger.error(historyType+" 상품변경이력조회 실패");
            throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_56", historyType+" R&D상품변경이력조회 실패" }, e);
        }
        return result;
    }
    
}
