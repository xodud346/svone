/*------------------------------------------------------------------------------
 * NAME : KcCertInfoInqController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.24  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.KcCertInfoInqService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   KcCertInfoInqController
 * @@desc    Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.24
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/kc-cert-info-inq")
public class KcCertInfoInqController {
	private Logger logger = LoggerFactory.getLogger(KcCertInfoInqController.class);

	@Resource(name = "kcCertInfoInqService")
	private KcCertInfoInqService kcCertInfoInqService;

	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		KcCertInfoInqController.propertiesService = propertiesService;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectKcCertInfoInq
	 * 2. ClassName  : KcCertInfoInqController.java
	 * 3. Comment    : KC인증정보 조회 (selectKcCertInfoInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.24
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-kc-cert-info-inq.do", method = RequestMethod.POST)
	public NexacroResult selectKcCertInfoInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = kcCertInfoInqService.selectKcCertInfoInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectKcCertInfoInq", " 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : "selectKcCertInfoListInq"
	 * 2. ClassName  : KcCertInfoInqController.java
	 * 3. Comment    : KC인증정보리스트 조회("selectKcCertInfoListInq")
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.24
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-kc-cert-info-list-inq.do", method = RequestMethod.POST)
	public NexacroResult selectKcCertInfoListInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
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

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = kcCertInfoInqService.selectKcCertInfoListInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectKcCertInfoListInq", "KC인증정보리스트 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveKcCertInfoInq
	 * 2. ClassName  : KcCertInfoInqController.java
	 * 3. Comment    : KC인증정보 저장 (saveKcCertInfoInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.24
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-kc-cert-info-inq.do", method = RequestMethod.POST)
	public NexacroResult saveKcCertInfoInq(@ParamDataSet(name = "ds_master",       required = false) List<Map<String, Object>> saveMap 
	                                      , @ParamDataSet(name = "ds_saveFileList", required = false) List<Map<String, Object>> fileMap) throws Exception 
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
			String contextRealPath = propertiesService.getString("file.path.root");

			result = kcCertInfoInqService.saveKcCertInfoInq(saveMap, fileMap, userInfo, contextRealPath);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveKcCertInfoInq", " 저장" }, e) { };
		}

		return result;
	}
}
