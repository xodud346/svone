package com.ssp.bo.pc.controller;

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
import com.ssp.bo.pc.service.PcIntlLwstService;
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
 * @see PcIntlLwstController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/pc/intlLwst")
public class PcIntlLwstController {
	private final Logger log = LoggerFactory.getLogger(PcIntlLwstController.class);
		
	@Autowired
    private PcIntlLwstService pcIntlLwstService;

	@RequestMapping(value = "/selectIntlLwstList.do")
	public NexacroResult selectIntlLwstList(HttpServletRequest request,
											HttpSession session,
											@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			if(searchMap != null) {
				searchMap = CommonUtil.toCamelCaseMap(searchMap);
				
				Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
				
				if(admin != null) {
					searchMap.put("coCd", admin.get("CO_CD"));
				}
				
				searchMap.put("sesId", session.getId());
				
				result = pcIntlLwstService.selectIntlLwstList(searchMap);
			}
		} catch (Exception e ) {
			String message = "내부최저판매가 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectIntlLwstList", "내부최저판매가 조회"}, e) {};
		}
		return result;
	}

	
	@RequestMapping(value = "/selectIntlLwstPopupList.do")
	public NexacroResult selectIntlLwstPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			if(searchMap != null) {
				searchMap = CommonUtil.toCamelCaseMap(searchMap);
				searchMap.put("sPrdId", searchMap.get("prdId"));
				searchMap.put("prdId",0);
				
				//searchMap.put("prdId", "000000000004737792");
				
				result = pcIntlLwstService.selectIntlLwstList(searchMap);
				
				result.addDataSet("ds_detail", pcIntlLwstService.selectIntlLwstDetail(searchMap));
			}
			
			
						
		} catch (Exception e ) {
			String message = "내부최저판매가 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectIntlLwstList", "내부최저판매가 조회"}, e) {};
		}
		return result;
	}
	
}
