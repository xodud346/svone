/*------------------------------------------------------------------------------
 * NAME : PubPrdProcStbController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.06  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.PubPrdProcStbService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title   PubPrdProcStbController
 * @@desc   공용상품처리대기 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/pub-prd-proc-stb")
public class PubPrdProcStbController {
	private Logger logger = LoggerFactory.getLogger(PubPrdProcStbController.class);

	@Resource(name = "pubPrdProcStbService")
	private PubPrdProcStbService pubPrdProcStbService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PubPrdProcStbController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectPubPrdProcStb
	 * 2. ClassName  : PubPrdProcStbController.java
	 * 3. Comment    : 공용상품처리대기 (selectPubPrdProcStb)
	 * 4. 작성자     : 나용철
	 * 5. 작성일     : 2022.05.06
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-pub-prd-proc-stb.do", method = RequestMethod.POST)
	public NexacroResult selectPubPrdProcStb(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}
		
		searchMap.put("SES_ID", session.getId());
		

		try
		{
			result = pubPrdProcStbService.selectPubPrdProcStb(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPubPrdProcStb", "공용상품처리대기조회" }, e) { };
		}

		return result;
	}

	
}
