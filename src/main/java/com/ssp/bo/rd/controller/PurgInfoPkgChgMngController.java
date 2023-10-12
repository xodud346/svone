/*------------------------------------------------------------------------------
 * NAME : PurgInfoPkgChgMngController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.28  newwhite7
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
import com.ssp.bo.rd.service.PurgInfoPkgChgMngService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title   PurgInfoPkgChgMngController
 * @@desc   업체공통클래스(샘풀) Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/purg-info-pkg-chg-mng")
public class PurgInfoPkgChgMngController {
	private Logger logger = LoggerFactory.getLogger(PurgInfoPkgChgMngController.class);

	@Resource(name = "purgInfoPkgChgMngService")
	private PurgInfoPkgChgMngService purgInfoPkgChgMngService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PurgInfoPkgChgMngController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectPurgInfoPkgChgMng
	 * 2. ClassName  : PurgInfoPkgChgMngController.java
	 * 3. Comment    : 업체공통클래스(샘풀) 리스트 조회 (selectPurgInfoPkgChgMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.28
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-purg-info-pkg-chg-mng.do", method = RequestMethod.POST)
	public NexacroResult selectPurgInfoPkgChgMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
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

		try
		{
			result = purgInfoPkgChgMngService.selectPurgInfoPkgChgMng(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPurgInfoPkgChgMng", "업체공통클래스(샘풀) 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : savePurgInfoPkgChgMng
	 * 2. ClassName  : PurgInfoPkgChgMngController.java
	 * 3. Comment    : 업체공통클래스(샘풀) 리스트 저장 (savePurgInfoPkgChgMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.28
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-purg-info-pkg-chg-mng.do", method = RequestMethod.POST)
	public NexacroResult savePurgInfoPkgChgMng(HttpServletRequest request
	                                     , @ParamDataSet(name = "ds_search", required = false) Map<String, Object>       searchMap 
	                                     , @ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap) throws Exception 
	{
		NexacroResult result;
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try
		{
			Admin userInfo = SessionsAdmin.getSessionAdmin(request);

			result = purgInfoPkgChgMngService.savePurgInfoPkgChgMng(searchMap, saveMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "savePurgInfoPkgChgMng", "업체공통클래스(샘풀) 저장" }, e) { };
		}

		return result;
	}
}
