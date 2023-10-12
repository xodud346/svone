package com.ssp.bo.co.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.co.message.SspMessageService;
import com.ssp.core.co.message.SspMessageSource;
import com.ssp.core.co.message.SspMessageUtil;

/**
 * <pre>
 * @title  메시지 로드
 * @package com.ssp.core.co.service.controller
 * <pre>
 * @author  lee
 * @since   2022. 01. 18.
 * @version 1.0
 * @see CoMessageController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/co/Message")
public class CoMessageController {
	private final Logger log = LoggerFactory.getLogger(CoCommonPopupController.class);
		
	@Autowired
    private SspMessageService sspMessageService;

	/**
	 * <pre>
	 * 1. MethodName : selectMessageList
	 * 2. ClassName  : CoMessageController.java
	 * 3. Comment    : 메뉴 리스트 조회
	 * 4. 작성자       : java_01
	 * 5. 작성일       : 2022. 04. 12.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-msg-list.do")
	public NexacroResult selectMessageList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			if (SspMessageSource.MESSAGES == null) { 
	    		SspMessageSource.MESSAGES = sspMessageService.getMessageBundle();
	    	}
			SspMessageUtil addMessage = new SspMessageUtil();
			 List<Map<String, String>> propertiesMessage = addMessage.getAllProperties();
			
			List<Map<String,String>> list = SspMessageSource.MESSAGES;
			list.addAll(propertiesMessage);
			result.addDataSet("ds_output", list);
		} catch (Exception e ) {
			String message = "메시지 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectMessageList", "메시지 조회"}, e) {};
		}
		return result;
	}
}
