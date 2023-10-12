package com.ssp.bo.co.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.service.CoSmsSendHstService;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  SMS 발송이력조회 컨트롤러
 * @package com.ssp.core.co.service.controller
 * <pre>
 * @author  lee
 * @since   2023. 06. 02.
 * @version 1.0
 * @see CoSmsSendHstInfoController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.06.02		최초작성
 */
@Controller
@RequestMapping("/co/sms")
public class CoSmsSendHstInfoController {
	private final Logger log = LoggerFactory.getLogger(CoCommonPopupController.class);
		
	@Autowired
    private CoSmsSendHstService coSmsSendHstService;

	/**
	 * <pre>
	 * 1. MethodName : selectSmsSendHstList
	 * 2. ClassName  : CoScrnPrsnController
	 * 3. Comment    : SMS발송이력리스트 조회
	 * 4. 작성자       : 이상민
	 * 5. 작성일       : 2023-06-02
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	
	@RequestMapping(value = "/select-sms-send-hst-list.do")
	public NexacroResult selectSmsSendHstList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		
		NexacroResult 				rslt = new NexacroResult();
		List<Map<String,Object>> 	list = new ArrayList<>();
		
		searchMap.put("SES_ID", new OdOrderComm(session).getSessionId());
		
		Map<String, Object> cParam = CommonUtil.toCamelCaseMap(searchMap);
		
		try {
			int totalCount = coSmsSendHstService.selectSmsSendHstListCount(cParam);
			
			if(totalCount > 0) {
				list = coSmsSendHstService.selectSmsSendHstList(cParam);
			}
						
			rslt.addVariable("totalCount", totalCount);
			rslt.addDataSet("ds_output1", list);
			
		} catch (Exception e ) {
			String message = "SMS 발송이력리스트 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectSmsSendHstList", "SMS 발송이력리스트 조회 에러"}, e) {};
		}
		return rslt;
	}
}
