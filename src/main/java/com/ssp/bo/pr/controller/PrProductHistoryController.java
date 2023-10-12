package com.ssp.bo.pr.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pr.service.PrProductHistoryService;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.pr.util.PrUtils;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  SSP 상품 변경이력관리 공통팝업
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  조지훈
 * @since   2022.03.10
 * @version 1.0
 * @see PrManufacturerController
 * 파라미터 HISTORY_TYPE 이력유형, KEY1~5 조회키
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.10    조지훈        최초작성(담당자)
 */
@Controller
@RequestMapping("/pr/prd-hst")
public class PrProductHistoryController {
    
    private Logger logger = LoggerFactory.getLogger(PrProductHistoryController.class);
    
    @Autowired
    private PrProductHistoryService prProductHistoryService;
    
    @Autowired
    private SspPropertyService propertiesService;
    
    /**
     * <pre>
     * 1. MethodName : selectProductHistory
     * 2. ClassName  : PrProductHistoryController
     * 3. Comment    : 변경이력조회 
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.10
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping("/select-product-history.do")
    public NexacroResult selectProductHistory(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
    	String historyType = StringUtil.getString(searchMap, "HISTORY_TYPE");	//이력유형
        try {
        	if(historyType.isEmpty()) {
        		throw new Exception("이력 필수값 에러");
        	}
            searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));	//cocd코드
			result.addVariable("totalCount", prProductHistoryService.selectProductHistoryCount(searchMap));
	        result.addDataSet("historyList", prProductHistoryService.selectProductHistoryList(searchMap));
        } catch (Exception e) {
            logger.error(historyType+" 상품변경이력조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_48", historyType+" 상품변경이력조회 실패" }, e);
        }
        return result;
    }
    
    @RequestMapping("/select-prd-hst-dtl-html-info.do")
    public NexacroResult selectPrdHstDtlHtmlInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
    	NexacroResult result = new NexacroResult();
        try {
            searchMap.put("CO_CD", propertiesService.getString("ssp.cocd"));	//cocd코드
            Map<String, Object> dtl = prProductHistoryService.selectPrdHstDtlHtmlInfo(searchMap);
            if(dtl!=null) {
            	dtl.replace("PRD_DTL_DESC", PrUtils.clobToString(dtl, "PRD_DTL_DESC"));
            }
	        result.addDataSet("prdDtlHtml", dtl);
        } catch (Exception e) {
        	logger.error("상품변경이력 상품상세HTML조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_48", "상품변경이력 상품상세HTML조회 실패" }, e);
        }
        return result;
    }
    
}
