/*------------------------------------------------------------------------------
 * NAME : OnlyPrdPrcMngController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.09  나용철
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.controller;

import java.util.HashMap;
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
import com.ssp.bo.rd.service.OnlyPrdPrcMngService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title  OnlyPrdPrcMngController
 * @@desc   전용상품가격관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/only-prd-prc-mng")
public class OnlyPrdPrcMngController {
	private Logger logger = LoggerFactory.getLogger(OnlyPrdPrcMngController.class);

	@Resource(name = "onlyPrdPrcMngService")
	private OnlyPrdPrcMngService onlyPrdPrcMngService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		OnlyPrdPrcMngController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectOnlyPrdPrcMng
	 * 2. ClassName  : OnlyPrdPrcMngController.java
	 * 3. Comment    : 전용상품가격관리 리스트 조회 (selectOnlyPrdPrcMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.09
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-only-prd-prc-mng.do", method = RequestMethod.POST)
	public NexacroResult selectOnlyPrdPrcMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,HttpSession session) throws Exception
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
			result = onlyPrdPrcMngService.selectOnlyPrdPrcMng(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectOnlyPrdPrcMng", "전용상품가격관리 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectOprUnitInfo
	 * 2. ClassName  : OnlyPrdPrcMngController.java
	 * 3. Comment    : 전용상품가격관리 등록 시 (운영단위정보) 조회 (selectOprUnitInfo)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.09
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-opr-unit-info.do", method = RequestMethod.POST)
	public NexacroResult selectOprUnitInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,HttpSession session) throws Exception
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
			result = onlyPrdPrcMngService.selectOprUnitInfo(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectOprUnitInfo", "전용상품가격관리 등록 시 (운영단위정보) 조회" }, e) { };
		}

		return result;
	}
	
//	select-prd-bss-prc-info.do
//	only-prd-prc-mng
	/**
	 * <pre>
	 * 1. MethodName : selectOnlyPrdPrcMngDtlReg
	 * 2. ClassName  : OnlyPrdPrcMngController.java
	 * 3. Comment    : 전용상품가격관리 등록 시 상세 조회 (selectOnlyPrdPrcMngDtlReg)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.09
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-only-prd-prc-mng-dtl-reg.do", method = RequestMethod.POST)
	public NexacroResult selectOnlyPrdPrcMngDtlReg(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,HttpSession session) throws Exception
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
			result = onlyPrdPrcMngService.selectOnlyPrdPrcMngDtlReg(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectOnlyPrdPrcMngDtlReg", "전용상품가격관리 등록 시 상세 조회" }, e) { };
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : saveOnlyPrdPrcMngDtl
	 * 2. ClassName  : OnlyPrdPrcMngController.java
	 * 3. Comment    : 전용상품가격관리 등록/수정 (saveOnlyPrdPrcMngDtl)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.14
	 * </pre>
	 *
	 * @param saveMap1
	 * @param saveMap2
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-only-prd-prc-mng-dtl.do", method = RequestMethod.POST)
	public NexacroResult saveOnlyPrdPrcMngDtl(
		@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap1
		, @ParamDataSet(name = "ds_oprUnitInfo", required = false) List<Map<String, Object>> saveMap2
	) throws Exception {
		NexacroResult result;

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		if (userInfo == null) {
			userInfo = new HashMap<String, Object>();
		}

		try {
			result = onlyPrdPrcMngService.saveOnlyPrdPrcMngDtl(userInfo, saveMap1, saveMap2);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "saveOnlyPrdPrcMngDtl", "전용상품가격관리 등록/수정"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectOnlyPrdPrcMngDtl
	 * 2. ClassName  : OnlyPrdPrcMngController.java
	 * 3. Comment    : 전용상품가격관리 상세 조회 (selectOnlyPrdPrcMngDtl)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.09
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-only-prd-prc-mng-dtl.do", method = RequestMethod.POST)
	public NexacroResult selectOnlyPrdPrcMngDtl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,HttpSession session) throws Exception
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
			result = onlyPrdPrcMngService.selectOnlyPrdPrcMngDtl(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectOnlyPrdPrcMngDtl", "전용상품가격관리 상세 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectOnlyPrdPrcMngDupl
	 * 2. ClassName  : OnlyPrdPrcMngController.java
	 * 3. Comment    : 전용상품가격관리 기등록 체크(selectOnlyPrdPrcMngDupl)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.17
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-only-prd-prc-mng-dupl.do", method = RequestMethod.POST)
	public NexacroResult selectOnlyPrdPrcMngDupl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,HttpSession session) throws Exception
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
			result = onlyPrdPrcMngService.selectOnlyPrdPrcMngDupl(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectOnlyPrdPrcMngDupl", "전용상품가격관리 기등록 체크" }, e) { };
		}

		return result;
	}
}
