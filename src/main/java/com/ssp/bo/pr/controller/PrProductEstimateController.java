package com.ssp.bo.pr.controller;

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
import com.ssp.bo.pr.service.PrProductEstimateService;
import com.ssp.core.co.service.CoCommonService;
import com.ssp.core.common.exception.LoggingException;

/**
*
* @PackageName: com.ssp.bo.pr.controller
* @FileName : PrProductEstimateController.java
* @Date : 2021. 10. 20.
* @프로그램 설명 : 견적요청 controller
* @author khs
*/
@Controller 
@RequestMapping("/pr/prdMng")
public class PrProductEstimateController {

	private Logger logger = LoggerFactory.getLogger(PrProductEstimateController.class);
	
	@Autowired
	private PrProductEstimateService prProductEstimateService;
	
	@Autowired
	private CoCommonService coCommonService;

	/**
     * <pre>
     * 1. MethodName : selectProductEstimateList
     * 2. ClassName  : PrProductEstimateController
     * 3. Comment    : 견적요청 목록
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.14
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-product-estimate-list.do")
    public NexacroResult selectProductEstimateList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("__MALL_ADMIN_SESSION_INFO__");
        
        try {
        	if (userInfo != null) {
        		result.addVariable("totalCount", prProductEstimateService.selectProductEstimateCount(searchMap, new OdOrderComm(session)));
            	result.addDataSet("ds_list", prProductEstimateService.selectProductEstimateList(searchMap, new OdOrderComm(session)));
            }else{
            	throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_NA_30", "견적요청 조회 실패" }, new Exception("로그인 정보가 없습니다."));
            }
        } catch (Exception e) {
            logger.error("견적요청 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_NA_30", "견적요청 조회 실패" }, e);
        }
        
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductEstimateDetail
     * 2. ClassName  : PrProductEstimateController
     * 3. Comment    : 견적요청 상세 조회
     * 4. 작성자     : 김주화
     * 5. 작성일     : 2022.04.12
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-product-estimate-detail.do")
    public NexacroResult selectProductEstimateDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("__MALL_ADMIN_SESSION_INFO__");
         
        try {
        	if (userInfo != null) {
        		Map<String, String> detail  = prProductEstimateService.selectProductEstimateDetail(searchMap);
            	List<Map<String, String>> op = prProductEstimateService.selectProductEstimateOption(searchMap);
            	List<Map<String, String>> addOp = prProductEstimateService.selectProductEstimateAddOption(searchMap);
            	List<Map<String, String>> history = prProductEstimateService.selectProductEstimateHistory(searchMap);

                result.addDataSet("ds_detail", detail);
                result.addDataSet("ds_op" , op );
                result.addDataSet("ds_addOp", addOp);
                result.addDataSet("ds_history", history);
            }else{
            	throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_NA_31", "견적요청 상세 조회 실패" }, new Exception("로그인 정보가 없습니다."));
            }
        } catch (Exception e) {
            this.logger.error("견적요청 상세 조회 실패");
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_NA_31", "견적요청 상세 조회 실패"}, e);
        }

        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : prProductEstimateStatusList
     * 2. ClassName  : PrProductEstimateController
     * 3. Comment    : 견적요청 접수
     * 4. 작성자     : 김주화
     * 5. 작성일     : 2022.04.12
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "pr-product-estimate-status-list.do")
    public NexacroResult prProductEstimateStatusList(@ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> list, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("__MALL_ADMIN_SESSION_INFO__");
        
        try {
        	if (userInfo != null) {
        		int iCnt  = prProductEstimateService.insertProductEstimateStatusList(list, userInfo);
            	
//            	searchMap.put("iCnt", iCnt);
//              result.addDataSet("ds_param", searchMap);
            }else{
            	throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_NA_31", "견적요청 상태 등록 실패" }, new Exception("로그인 정보가 없습니다."));
            }
        } catch (Exception e) {
            this.logger.error("견적요청 상세 조회 실패");
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_NA_31", "견적요청 상태 등록 실패"}, e);
        }
        
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : prProductEstimateStatus
     * 2. ClassName  : PrProductEstimateController
     * 3. Comment    : 견적요청 상태변경
     * 4. 작성자     : 김주화
     * 5. 작성일     : 2022.04.12
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "pr-product-estimate-status.do")
    public NexacroResult prProductEstimateStatus(@ParamDataSet(name = "ds_detail", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("__MALL_ADMIN_SESSION_INFO__");
        
        try {
        	if (userInfo != null) {
        		searchMap.put("OPRTR_ID", userInfo.get("OPRTR_ID"));
        		Map<String, Object> resultMap  = prProductEstimateService.insertProductEstimateStatus(searchMap);
            	
        		result.addDataSet("ds_stat", resultMap);
            }else{
            	throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_NA_31", "견적요청 상태 등록 실패" }, new Exception("로그인 정보가 없습니다."));
            }
        } catch (Exception e) {
            this.logger.error("견적요청 상세 조회 실패");
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_NA_31", "견적요청 상태 등록 실패"}, e);
        }
        
        return result;
    }
    
}
