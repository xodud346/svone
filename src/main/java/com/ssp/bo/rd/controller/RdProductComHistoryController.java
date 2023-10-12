/*------------------------------------------------------------------------------
 * NAME : RdProductComHistoryController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.22  홍길동
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
import com.ssp.bo.rd.service.RdProductComHistoryService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 *
 * @title   RdProductComHistoryController
 * @@desc    Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.06.22
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/rd-product-com-history")
public class RdProductComHistoryController {
	private Logger logger = LoggerFactory.getLogger(RdProductComHistoryController.class);

	@Resource(name = "rdProductComHistoryService")
	private RdProductComHistoryService rdProductComHistoryService;

	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		RdProductComHistoryController.propertiesService = propertiesService;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectRdProductComHistory
	 * 2. ClassName  : RdProductComHistoryController.java
	 * 3. Comment    : 공통히스토리 조회 (selectRdProductComHistory)
	 * 4. 작성자     : 나용철
	 * 5. 작성일     : 2022.06.22
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-rd-product-com-history.do", method = RequestMethod.POST)
	public NexacroResult selectRdProductComHistory(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	                                           , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if(SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) 
		{
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = rdProductComHistoryService.selectRdProductComHistory(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectRdProductComHistory", "공통 히스토리 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectRdHstDtlHtmlInfo
	 * 2. ClassName  : RdProductComHistoryController.java
	 * 3. Comment    : 상품 공통 히스토리 뷰어 조회 (selectRdHstDtlHtmlInfo)
	 * 4. 작성자     : 나용철
	 * 5. 작성일     : 2022.06.22
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-rd-hst-dtl-html-info.do", method = RequestMethod.POST)
	public NexacroResult selectRdHstDtlHtmlInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	                                           , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if(SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) 
		{
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = rdProductComHistoryService.selectRdHstDtlHtmlInfo(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectRdHstDtlHtmlInfo", "상품 공통 히스토리 뷰어 조회" }, e) { };
		}

		return result;
	}
	
	
	/**
	 * <pre>
	 * 1. MethodName : selectRdProductComDtlHistory
	 * 2. ClassName  : RdProductComHistoryController.java
	 * 3. Comment    : 화학물질 상세 히스토리 조회 (selectRdProductComDtlHistory)
	 * 4. 작성자     : 나용철
	 * 5. 작성일     : 2022.06.22
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-rd-product-com-dtl-history.do", method = RequestMethod.POST)
	public NexacroResult selectRdProductComDtlHistory(@ParamDataSet(name = "ds_dsearch", required = false) Map<String, Object> searchMap
	                                                             , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if(SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) 
		{
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = rdProductComHistoryService.selectRdProductComDtlHistory(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectRdProductComDtlHistory", "화학물질 상세 히스토리 조회" }, e) { };
		}

		return result;
	}
}
