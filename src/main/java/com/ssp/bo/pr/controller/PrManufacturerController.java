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
import com.ssp.bo.pr.service.PrManufacturerService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title  SSP 제조원 목록관리
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  조지훈
 * @since   2022.02.22
 * @version 1.0
 * @see PrManufacturerController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.02.22    조지훈        최초작성
 */
@Controller
@RequestMapping("/pr/ctg-mng")
public class PrManufacturerController {
    
    private Logger logger = LoggerFactory.getLogger(PrManufacturerController.class);
    
    @Autowired
    private PrManufacturerService manufacturerService;
    
    @Autowired
	protected SspPropertyService propertiesService;
    
    /**
     * <pre>
     * 1. MethodName : selectManufacturerList
     * 2. ClassName  : PrManufacturerController
     * 3. Comment    : 제조원목록 조회
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.02.22
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-manufacturer-list.do")
    public NexacroResult selectManufacturerList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();	
    		searchMap.put("CO_CD", admin==null?propertiesService.getString("ssp.cocd"):admin.get("CO_CD"));
            result.addVariable("mnfrTotalCount", manufacturerService.selectManufacturerCount(searchMap));
            result.addDataSet("manufacturerList", manufacturerService.selectManufacturerList(searchMap));
        } catch (Exception e) {
            logger.error("제조원목록 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_27", "제조원목록 조회 실패" }, e);
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : saveManufacturer
     * 2. ClassName  : PrManufacturerController
     * 3. Comment    : 제조원명 저장
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.02.22
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/save-manufacturer.do")
    public NexacroResult saveManufacturer(@ParamDataSet(name = "ds_saveRow", required = false) List<Map<String, Object>> dataList, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	if(admin!=null && !admin.isEmpty()) {
            }else {
                throw new Exception("세션정보 없음.");
            }
        	for(Map<String, Object> data : dataList) {
        		data.put("SESSION_OPRTR_ID", admin.get("OPRTR_ID"));
				manufacturerService.saveManufacturer(data);
			}
        } catch (Exception e) {
            logger.error("제조원명 저장 실패 > "+e.getMessage());
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_27", "제조원명 저장 실패 > "+e.getMessage() }, e);
        }
        return result;
    }
            
}
