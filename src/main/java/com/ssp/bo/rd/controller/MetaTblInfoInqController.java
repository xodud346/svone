/*------------------------------------------------------------------------------
 * NAME : MetaTblInfoInqController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.21  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.controller;

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
import com.ssp.bo.rd.service.MetaTblInfoInqService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title  MetaTblInfoInqController
 * @@desc   메타테이블정보조회 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.04.21
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/metaTblInfoInq")
public class MetaTblInfoInqController {
	private Logger logger = LoggerFactory.getLogger(MetaTblInfoInqController.class);

	@Resource(name = "metaTblInfoInqService")
	private MetaTblInfoInqService metaTblInfoInqService;
	
	protected static SspPropertyService propertiesService;
	
	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		MetaTblInfoInqController.propertiesService = propertiesService;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectMetaTblInfoInq
	 * 2. ClassName  : MetaTblInfoInqController.java
	 * 3. Comment    : 메타테이블정보조회 (selectMetaTblInfoInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.21
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/selectMetaTblInfoInq.do", method = RequestMethod.POST)
	public NexacroResult selectMetaTblInfoInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}

		try
		{
			result = metaTblInfoInqService.selectMetaTblInfoInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectMetaTblInfoInq", "업체공통클래스(샘풀) 조회" }, e) { };
		}

		return result;
	}
}