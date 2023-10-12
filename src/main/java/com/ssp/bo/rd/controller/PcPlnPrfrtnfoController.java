package com.ssp.bo.rd.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.PcPlnPrfrtnfoService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * 
 * @title
 * @package com.ssp.bo.rd.controller
 * 
 *          <pre>
 * @author
 * @since 2022. 02. 15.
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.01.25 최초작성
 */
@Controller
@RequestMapping("/rd/pcPlnPrfrtnfo")
public class PcPlnPrfrtnfoController {
	private Logger logger = LoggerFactory.getLogger(PubPrdPrcMngController.class);

	@Resource(name = "pcPlnPrfrtnfoService")
	private PcPlnPrfrtnfoService pcPlnPrfrtnfoService;

	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PcPlnPrfrtnfoController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectList
	 * 2. ClassName  : PcPlnPrfrtnfoController.java
	 * 3. Comment    : 공용상품가격관리
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.02
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/selectPcPlnPrfrtnfo.do", method = RequestMethod.POST)
	public NexacroResult selectPcPlnPrfrtnfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			result = pcPlnPrfrtnfoService.selectPcPlnPrfrtnfo(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "selectPcPlnPrfrtnfo", "사전설정매익률관리" }, e) {
			};
		}
		return result;
    }


	/*
	 * 계획매익율정보 저장
	 */
	@RequestMapping(value = "/savePcPcPlnPrfrtInfo.do")
	public NexacroResult savePcPlnPrfrtnfo(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception{
		NexacroResult result;
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			result = pcPlnPrfrtnfoService.savePcPcPlnPrfrtInfo(commandMapList);
		} catch ( Exception e ) {
			String message = "계획매익율정보 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"RD", "BO", "savePcPcPlnPrfrtInfo", "계획매익율정보 저장"}, e) {};
		}
		return result;
	}
}
