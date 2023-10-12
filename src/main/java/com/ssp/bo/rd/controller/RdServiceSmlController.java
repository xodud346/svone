/*------------------------------------------------------------------------------
 * NAME : RdServiceSmlController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.20  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.RdServiceSmlService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title   RdServiceSmlController
 * @@desc   업체공통클래스(샘풀) Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.04.20
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/rdServiceSml")
public class RdServiceSmlController {
	private Logger logger = LoggerFactory.getLogger(RdServiceSmlController.class);

	@Resource(name = "rdServiceSmlService")
	private RdServiceSmlService rdServiceSmlService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		RdServiceSmlController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectRdServiceSml
	 * 2. ClassName  : RdServiceSmlController.java
	 * 3. Comment    : 업체공통클래스(샘풀) 리스트 조회 (selectRdServiceSml)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.20
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/selectRdServiceSml.do", method = RequestMethod.POST)
	public NexacroResult selectRdServiceSml(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		try
		{
			result = rdServiceSmlService.selectRdServiceSml(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectRdServiceSml", "업체공통클래스(샘풀) 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveRdServiceSml
	 * 2. ClassName  : RdServiceSmlController.java
	 * 3. Comment    : 업체공통클래스(샘풀) 리스트 저장 (saveRdServiceSml)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.20
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/saveRdServiceSml.do", method = RequestMethod.POST)
	public NexacroResult saveRdServiceSml(HttpServletRequest request
	                                     , @ParamDataSet(name = "ds_search", required = false) Map<String, Object>       searchMap 
	                                     , @ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap) throws Exception 
	{
		NexacroResult result;

		try
		{
			Admin userInfo = SessionsAdmin.getSessionAdmin(request);

			result = rdServiceSmlService.saveRdServiceSml(searchMap, saveMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveRdServiceSml", "업체공통클래스(샘풀) 저장" }, e) { };
		}

		return result;
	}
}