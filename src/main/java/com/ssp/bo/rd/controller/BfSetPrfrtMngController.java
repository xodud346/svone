/*------------------------------------------------------------------------------
 * NAME : BfSetPrfrtMngController.java
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
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.BfSetPrfrtMngService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title   BfSetPrfrtMngController
 * @@desc   사전설정매익률관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/bf-set-prfrt-mng")
public class BfSetPrfrtMngController {
	private Logger logger = LoggerFactory.getLogger(BfSetPrfrtMngController.class);

	@Resource(name = "bfSetPrfrtMngService")
	private BfSetPrfrtMngService bfSetPrfrtMngService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		BfSetPrfrtMngController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectBfSetPrfrtMng
	 * 2. ClassName  : BfSetPrfrtMngController.java
	 * 3. Comment    : 사전설정매익률관리 리스트 조회 (selectBfSetPrfrtMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-bf-set-prfrt-mng.do", method = RequestMethod.POST)
	public NexacroResult selectBfSetPrfrtMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = bfSetPrfrtMngService.selectBfSetPrfrtMng(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectBfSetPrfrtMng", "사전설정매익률관리 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveBfSetPrfrtMng
	 * 2. ClassName  : BfSetPrfrtMngController.java
	 * 3. Comment    : 사전설정매익률 관리 등록/수정(saveBfSetPrfrtMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.20
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-bf-set-prfrt-mng.do", method = RequestMethod.POST)
	public NexacroResult saveBfSetPrfrtMng(@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap) throws Exception 
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
			result = bfSetPrfrtMngService.saveBfSetPrfrtMng(saveMap,userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveGenCustDcrtMng", "사전설정매익률 관리 등록" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPurgChrpsnYn
	 * 2. ClassName  : BfSetPrfrtMngController.java
	 * 3. Comment    : 사전설정매익률 구매담당자여부 조회(selectPurgChrpsnYn)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.18
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-purg-chrpsn-yn.do", method = RequestMethod.POST)
	public NexacroResult selectPurgChrpsnYn(HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();
		Map<String, Object> searchMap = new HashMap<String,Object>();

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		if(userInfo == null) {
			userInfo = new HashMap<String, Object>();
		}
		searchMap.put("CO_CD", userInfo.get("CO_CD"));
		searchMap.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));

		try
		{
			result = bfSetPrfrtMngService.selectPurgChrpsnYn(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPurgChrpsnYn", "구매담당자 여부조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectBfSetPrfrtMngHst
	 * 2. ClassName  : BfSetPrfrtMngController.java
	 * 3. Comment    : 사전설정매익률관리 이력 조회 (selectBfSetPrfrtMngHst)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-bf-set-prfrt-mng-hst.do", method = RequestMethod.POST)
	public NexacroResult selectBfSetPrfrtMngHst(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = bfSetPrfrtMngService.selectBfSetPrfrtMngHst(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectBfSetPrfrtMngHst", "사전설정매익률관리 이력조회" }, e) { };
		}

		return result;
	}
	
}