package com.ssp.bo.pc.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pc.service.PcPrdPrcChgService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  계획매익률 컨트롤러
 * @package com.ssp.bo.pc.controller
 * <pre>
 * @author  scvgo17
 * @since   2022. 01. 18.
 * @version 1.0
 * @see PcPrdPrcChgController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/pc/prd-prc-chg")
public class PcPrdPrcChgController {
	private final Logger log = LoggerFactory.getLogger(PcPrdPrcChgController.class);
		
	@Autowired
    private PcPrdPrcChgService pcPrdPrcChgService;

	@RequestMapping(value = "/select-exprd-prc-list.do")
	public NexacroResult selectExPrdPrcList(HttpServletRequest request,
											HttpSession session,
											@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			if(searchMap != null) {
				
				searchMap = CommonUtil.toCamelCaseMap(searchMap);
				
				Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
				searchMap.put("coCd", admin.get("CO_CD"));
				searchMap.put("sesId", session.getId());
				
				result = pcPrdPrcChgService.selectExPrdPrcList(searchMap);
				
			}
			
						
		} catch (Exception e ) {
			String message = "예외 가격 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectExPrdPrcList", message}, e) {};
		}
		return result;
	}
	
	@RequestMapping("/update-ex-prd-prc.do")
    public NexacroResult updateExPrdPrc(HttpServletRequest request,
    									@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,
    									@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> updateList) throws Exception {
		NexacroResult result = new NexacroResult();
        try {
        	if(searchMap != null) {
        		
        		searchMap = CommonUtil.toCamelCaseMap(searchMap);
        		
        		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
            	if(admin != null) {
            		searchMap.put("coCd", admin.get("CO_CD"));
            		searchMap.put("updpsnId", admin.get("OPRTR_ID"));
            		searchMap.put("regpsnId", admin.get("OPRTR_ID"));
    			}
    			result = pcPrdPrcChgService.updateExPrdPrc(searchMap, updateList);
        		
        	}
        	
        	
        } catch ( Exception ne ) {
            String message = "예외 가격 관리 저장 에러";
            log.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "updateExPrdPrc", message}, ne);
        }
        return result;
    }
	
	@RequestMapping(value = "/select-exprd-prc-detail.do")
	public NexacroResult selectExPrdPrcDetail(HttpServletRequest request,
											@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			if(searchMap != null) {
				
				searchMap = CommonUtil.toCamelCaseMap(searchMap);
				
				Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
				if(admin != null) {
					searchMap.put("coCd", admin.get("CO_CD"));
				}
				
				result = pcPrdPrcChgService.selectExPrdPrcDetail(searchMap);
				
			}
						
		} catch (Exception e ) {
			String message = "예외 가격 조회 상세 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectExPrdPrcDetail", message}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/update-ex-File.do")
	public NexacroResult updateExFile(HttpServletRequest request) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			List<Map<String, Object>> resultList = pcPrdPrcChgService.updateExFile(request);
			result.addDataSet("ds_output1", resultList);			
		} catch (Exception e ) {
			String message = "예외 가격 조회 상세 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectExPrdPrcDetail", message}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/select-exprd-prc-hst-list.do")
	public NexacroResult selectExPrdPrcHstList(HttpServletRequest request,
											HttpSession session,
											@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			if(searchMap != null) {
				
				searchMap = CommonUtil.toCamelCaseMap(searchMap);
				Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
				searchMap.put("coCd", admin.get("CO_CD"));
				searchMap.put("sesId", session.getId());
				
				result = pcPrdPrcChgService.selectExPrdPrcHstList(searchMap);
				
			}
			
						
		} catch (Exception e ) {
			String message = "예외 가격 조회 이력 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectExPrdPrcHstList", message}, e) {};
		}
		return result;
	}
	
}
