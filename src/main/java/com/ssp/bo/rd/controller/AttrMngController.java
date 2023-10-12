/*------------------------------------------------------------------------------
 * NAME : AttrMngController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  홍길동
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
import com.ssp.bo.rd.service.AttrMngService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title   AttrMngController
 * @@desc   속성관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/attr-mng")
public class AttrMngController {
	private Logger logger = LoggerFactory.getLogger(AttrMngController.class);

	@Resource(name = "attrMngService")
	private AttrMngService attrMngService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		AttrMngController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectAttrMng
	 * 2. ClassName  : AttrMngController.java
	 * 3. Comment    : 속성관리 리스트 조회 (selectAttrMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-attr-mng.do", method = RequestMethod.POST)
	public NexacroResult selectAttrMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	                                           , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

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
			result = attrMngService.selectAttrMng(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectAttrMng", "속성관리 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectAttrMngDtl
	 * 2. ClassName  : AttrMngDtlController.java
	 * 3. Comment    : 상품속성정보 상세 리스트 조회 (selectAttrMngDtl)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.11
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-attr-mng-dtl.do", method = RequestMethod.POST)
	public NexacroResult selectAttrMngDtl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	                                           , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

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
			result = attrMngService.selectAttrMngDtl(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectAttrMngDtl", "상품속성정보 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveAttrMng
	 * 2. ClassName  : AttrMngController.java
	 * 3. Comment    : 속성관리 저장 (saveAttrMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.11
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-attr-mng.do", method = RequestMethod.POST)
	public NexacroResult saveAttrMng( @ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap) throws Exception 
	{
		NexacroResult result;

		try
		{
			if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
				SessionsAdmin.setSessionAdminLocal();
			}
			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
			if(userInfo == null) {
				userInfo = new HashMap<String, Object>();
			}
			result = attrMngService.saveAttrMng(saveMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveAttrMng", "속성관리 저장" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : updateAttrMng
	 * 2. ClassName  : AttrMngController.java
	 * 3. Comment    : 속성관리 수정 (updateAttrMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.11
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	
	
	@RequestMapping(value = "/update-attr-mng.do", method = RequestMethod.POST)
	public NexacroResult updateAttrMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object>       searchMap 
                                      , @ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap) throws Exception 
	{
		NexacroResult result;

		try
		{
			if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
				SessionsAdmin.setSessionAdminLocal();
			}
			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
			if(userInfo == null) {
				userInfo = new HashMap<String, Object>();
			}
			result = attrMngService.updateAttrMng(searchMap, saveMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "updateAttrMng", "속성관리 수정" }, e) { };
		}

		return result;
	}
	
}