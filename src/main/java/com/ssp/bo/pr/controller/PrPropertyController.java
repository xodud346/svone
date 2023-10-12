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
import com.ssp.bo.pr.service.PrPropertyService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  SSP속성 컨트롤러
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  이원준
 * @since   2022.02.17
 * @version 1.0
 * @see PrPropertyController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.01.18        최초작성
 */
@Controller
@RequestMapping("/pr/ctg-mng")
public class PrPropertyController {
    private final Logger log = LoggerFactory.getLogger(PrPropertyController.class);
        
    @Autowired
    private PrPropertyService propertyService;

    /**
     * <pre>
     * 1. MethodName : selectPropertyList
     * 2. ClassName  : PrPropertyController.java
     * 3. Comment    : SSP속성 목록
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/select-property-list.do")
    public NexacroResult selectPropertyList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
        NexacroResult result = new NexacroResult();

        try {
            int totalCount = propertyService.selectPropertyCount(searchMap, new OdOrderComm(session));
            List<Map<String,Object>> list = propertyService.selectPropertyList(searchMap, new OdOrderComm(session));
            result.addDataSet("ds_output", list);
            result.addVariable("totalCount", totalCount);
                        
        } catch (Exception e ) {
            String message = "SSP속성 목록 에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_17", "SSP속성 목록"}, e) {};
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProperty
     * 2. ClassName  : PrPropertyController.java
     * 3. Comment    : SSP속성 상세 
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/select-property.do")
    public NexacroResult selectProperty(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
        NexacroResult result = new NexacroResult();
        
        try {
            List<Map<String,Object>> list = propertyService.selectProperty(searchMap);
            result.addDataSet("ds_output", list);
            
        } catch (Exception e ) {
            String message = "SSP속성 상세 에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_19", "SSP속성 상세"}, e) {};
        }
        return result;
    }
    
    /**
     *
     * <pre>
     * 1. MethodName : saveProperty
     * 2. ClassName  : PrPropertyController
     * 3. Comment      : SSP속성 저장
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.21
     * </pre>
     *
     * @param commandMapList List
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/save-property.do")
    public NexacroResult saveProperty(@ParamDataSet(name = "ds_detail", required = false) Map<String, Object> commandMap) throws Exception{
        NexacroResult result;
        try {
            Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
            commandMap.put("CO_CD", admin.get("CO_CD"));
            commandMap.put("USER_ID", admin.get("OPRTR_ID"));
            result = propertyService.saveProperty(commandMap);
        } catch ( Exception e ) {
            String message = "SSP속성 저장 에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_18", "SSP속성 저장"}, e) {};
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectPropertyPrNm
     * 2. ClassName  : PrPropertyController.java
     * 3. Comment    : SSP속성명 중복조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/select-property-prnm.do")
    public NexacroResult selectPropertyPrNm(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
        NexacroResult result = new NexacroResult();
        
        try {
            int cnt = propertyService.selectPropertyPrNm(searchMap);
            result.addVariable("prNmCnt", cnt);
            
        } catch (Exception e ) {
            String message = "SSP속성명 중복조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_18", "SSP속성 중복조회"}, e) {};
        }
        return result;
    }
    
}
