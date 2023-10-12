package com.ssp.bo.pc.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pc.service.PcPlnPrfrtService;
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
 * @see PcPlnPrfrtController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/pc/plnPrfrt")
public class PcPlnPrfrtController {
	private final Logger log = LoggerFactory.getLogger(PcPlnPrfrtController.class);
		
	@Autowired
    private PcPlnPrfrtService pcPlnPrfrtService;

	@RequestMapping(value = "/selectPlnPrfrtList.do")
	public NexacroResult selectPlnPrfrtList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			result = pcPlnPrfrtService.selectPlnPrfrtList(searchMap);
						
		} catch (Exception e ) {
			String message = "계획매익률 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectDetrInfoList", "절사 관리 조회"}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/selectCommonPlnPrfrtList.do")
	public NexacroResult selectCommonPlnPrfrtList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			searchMap.put("useYn", "");
			result = pcPlnPrfrtService.selectPlnPrfrtList(searchMap);
			
			searchMap.put("useYn", "Y");
			searchMap.put("prdClcd", "*");
			result.addDataSet("ds_detail", pcPlnPrfrtService.selectPlnPrfrtDetail(searchMap));
						
		} catch (Exception e ) {
			String message = "계획매익률 공통 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectDetrInfoList", "절사 관리 조회"}, e) {};
		}
		return result;
	}
	
	@RequestMapping("/insertPlnPrfrt")
    public NexacroResult insertPlnPrfrt(HttpServletRequest request,
    									@ParamDataSet(name = "ds_insert", required = false) Map<String, Object> insertMap) throws Exception {
        NexacroResult result;
        try {
        	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	insertMap = CommonUtil.toCamelCaseMap(insertMap);
        	if(admin != null) {
        		insertMap.put("coCd", admin.get("CO_CD"));
				insertMap.put("updpsnId", admin.get("OPRTR_ID"));
        		insertMap.put("regpsnId", admin.get("OPRTR_ID"));
			}
            result = pcPlnPrfrtService.insertPlnPrfrt(insertMap);
            
        } catch ( Exception ne ) {
            String message = "계획매익률 관리 저장 에러";
            log.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "insertPlnPrfrt", message}, ne);
        }
        return result;
    }
	
}
