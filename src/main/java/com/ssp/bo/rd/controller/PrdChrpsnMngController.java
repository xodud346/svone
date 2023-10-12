/*------------------------------------------------------------------------------
 * NAME : PrdChrpsnMngController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.02  홍길동
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
import com.ssp.bo.rd.service.PrdChrpsnMngService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title   PrdChrpsnMngController
 * @@desc   상품담당자관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.02
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/prd-chrpsn-mng")
public class PrdChrpsnMngController {
	private Logger logger = LoggerFactory.getLogger(PrdChrpsnMngController.class);

	@Resource(name = "prdChrpsnMngService")
	private PrdChrpsnMngService prdChrpsnMngService;
	
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PrdChrpsnMngController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectPrdChrpsnMng
	 * 2. ClassName  : PrdChrpsnMngController.java
	 * 3. Comment    : 상품담당자관리 리스트 조회 (selectPrdChrpsnMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.02
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-prd-chrpsn-mng.do", method = RequestMethod.POST)
	public NexacroResult selectPrdChrpsnMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception
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
		//Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = prdChrpsnMngService.selectPrdChrpsnMng(searchMap,session);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPrdChrpsnMng", "상품담당자관리 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPrdChrpsnMngDtl
	 * 2. ClassName  : PrdChrpsnMngController.java
	 * 3. Comment    : 상품담당자 상세 조회 (selectPrdChrpsnMngDtl)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.12
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-prd-chrpsn-mng-dtl.do", method = RequestMethod.POST)
	public NexacroResult selectPrdChrpsnMngDtl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = prdChrpsnMngService.selectPrdChrpsnMngDtl(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPrdChrpsnMngDtl", "상품담당자상세 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : updatePrdChrpsnMng
	 * 2. ClassName  : PrdChrpsnMngController.java
	 * 3. Comment    : R&D상품담당자 수정 (updatePrdChrpsnMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.12
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/update-prd-chrpsn-mng.do", method = RequestMethod.POST)
	public NexacroResult updatePrdChrpsnMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object>       searchMap 
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
			result = prdChrpsnMngService.updatePrdChrpsnMng(searchMap, saveMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "updatePrdChrpsnMng", "R&D 상품담당자 수정" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : insertPrdChrpsnMng
	 * 2. ClassName  : PrdChrpsnMngController.java
	 * 3. Comment    : R&D상품담당자 등록 (insertPrdChrpsnMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.12
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/insert-prd-chrpsn-mng.do", method = RequestMethod.POST)
	public NexacroResult insertPrdChrpsnMng(@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap) throws Exception 
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
			result = prdChrpsnMngService.insertPrdChrpsnMng(saveMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "insertPrdChrpsnMng", "R&D 상품담당자 등록" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectCodeChkYn
	 * 2. ClassName  : CodeChkYnController.java
	 * 3. Comment    : 신규 저장 코드체크여부 조회 (selectCodeChkYn)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.20
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-code-chk-yn.do", method = RequestMethod.POST)
	public NexacroResult selectCodeChkYn(@ParamDataSet(name = "ds_searchChkYn", required = false) Map<String, Object> searchMap
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
			result = prdChrpsnMngService.selectCodeChkYn(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectCodeChkYn", "신규 저장 코드체크여부 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectUpCodeChkYn
	 * 2. ClassName  : CodeChkYnController.java
	 * 3. Comment    : 수정시 코드체크여부 조회 (selectUpCodeChkYn)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.20
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-up-code-chk-yn.do", method = RequestMethod.POST)
	public NexacroResult selectUpCodeChkYn(@ParamDataSet(name = "ds_searchChkYn", required = false) Map<String, Object> searchMap
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
			result = prdChrpsnMngService.selectUpCodeChkYn(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectUpCodeChkYn", "수정코드체크여부 조회" }, e) { };
		}

		return result;
	}

}
