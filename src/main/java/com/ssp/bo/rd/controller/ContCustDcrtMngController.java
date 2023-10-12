/*------------------------------------------------------------------------------
 * NAME : ContCustDcrtMngController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  나용철
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
import com.ssp.bo.rd.service.ContCustDcrtMngService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title   ContCustDcrtMngController
 * @@desc   계약고객할인율관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/cont-cust-dcrt-mng")
public class ContCustDcrtMngController {
	private Logger logger = LoggerFactory.getLogger(ContCustDcrtMngController.class);

	@Resource(name = "contCustDcrtMngService")
	private ContCustDcrtMngService contCustDcrtMngService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		ContCustDcrtMngController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectContCustDcrtMng
	 * 2. ClassName  : ContCustDcrtMngController.java
	 * 3. Comment    : 계약고객할인율관리 리스트 조회 (selectContCustDcrtMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-cont-cust-dcrt-mng.do", method = RequestMethod.POST)
	public NexacroResult selectContCustDcrtMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = contCustDcrtMngService.selectContCustDcrtMng(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectContCustDcrtMng", "계약고객할인율관리 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveContCustDcrtMng
	 * 2. ClassName  : ContCustDcrtMngController.java
	 * 3. Comment    : 계약고객할인율 관리 등록(saveContCustDcrtMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.19
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-cont-cust-dcrt-mng.do", method = RequestMethod.POST)
	public NexacroResult saveContCustDcrtMng(@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap
			                                 ,@ParamDataSet(name = "ds_bzplc", required = false) Map<String, Object> bzplcMap ) throws Exception 
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
			result = contCustDcrtMngService.saveContCustDcrtMng(saveMap,bzplcMap,userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveContCustDcrtMng", "계약고객할인율 관리 등록" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectSalsChrpsnYn
	 * 2. ClassName  : ContCustDcrtMngController.java
	 * 3. Comment    : 계약고객할인율 영업담당자여부 조회(selectSalsChrpsnYn)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.19
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-sals-chrpsn-yn.do", method = RequestMethod.POST)
	public NexacroResult selectSalsChrpsnYn(HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();
		Map<String, Object> searchMap = new HashMap<String,Object>();

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		if(userInfo != null) {
    		searchMap.put("CO_CD", userInfo.get("CO_CD"));
    		searchMap.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));
		}

		try
		{
			result = contCustDcrtMngService.selectSalsChrpsnYn(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectSalsChrpsnYn", "구매담당자 여부조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectContCustDcrtMngHst
	 * 2. ClassName  : ContCustDcrtMngController.java
	 * 3. Comment    : 계약고객할인율 관리 이력 조회 (selectContCustDcrtMngHst)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-cont-cust-dcrt-mng-hst.do", method = RequestMethod.POST)
	public NexacroResult selectContCustDcrtMngHst(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = contCustDcrtMngService.selectContCustDcrtMngHst(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectContCustDcrtMngHst", "계약고객할인율 관리 이력조회" }, e) { };
		}

		return result;
	}

	
}