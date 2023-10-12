/*------------------------------------------------------------------------------
 * NAME : PubPrdSalsDsgnSalsprcMngController.java
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
import com.ssp.bo.rd.service.PubPrdSalsDsgnSalsprcMngService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title   PubPrdSalsDsgnSalsprcMngController
 * @@desc   공용상품영업지정판매가관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/pub-prd-sals-dsgn-salsprc-mng")
public class PubPrdSalsDsgnSalsprcMngController {
	private Logger logger = LoggerFactory.getLogger(PubPrdSalsDsgnSalsprcMngController.class);

	@Resource(name = "pubPrdSalsDsgnSalsprcMngService")
	private PubPrdSalsDsgnSalsprcMngService pubPrdSalsDsgnSalsprcMngService;
	
	protected static SspPropertyService propertiesService;
	
	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PubPrdSalsDsgnSalsprcMngController.propertiesService = propertiesService;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPubPrdSalsDsgnSalsprcMng
	 * 2. ClassName  : PubPrdSalsDsgnSalsprcMngController.java
	 * 3. Comment    : 공용상품영업지정판매가관리 리스트 조회 (selectPubPrdSalsDsgnSalsprcMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.24
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-pub-prd-sals-dsgn-salsprc-mng.do", method = RequestMethod.POST)
	public NexacroResult selectPubPrdSalsDsgnSalsprcMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,HttpSession session) throws Exception
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
			result = pubPrdSalsDsgnSalsprcMngService.selectPubPrdSalsDsgnSalsprcMng(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPubPrdSalsDsgnSalsprcMng", "공용상품영업지정판매가관리 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPubPrdSalsDsgnSalsprcMngDtl
	 * 2. ClassName  : PubPrdSalsDsgnSalsprcMngController.java
	 * 3. Comment    : 공용상품 영업지정판매가 상세 (selectPubPrdSalsDsgnSalsprcMngDtl)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.24
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-pub-prd-sals-dsgn-salsprc-mng-dtl.do", method = RequestMethod.POST)
	public NexacroResult selectPubPrdSalsDsgnSalsprcMngDtl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = pubPrdSalsDsgnSalsprcMngService.selectPubPrdSalsDsgnSalsprcMngDtl(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPubPrdSalsDsgnSalsprcMngDtl", "공용상품 영업지정가 상세 조회" }, e) { };
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : insertPubPrdSalsDsgnSalsprcMng
	 * 2. ClassName  : PubPrdSalsDsgnSalsprcMngController.java
	 * 3. Comment    : 공용상품 영업지정판매가 등록
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.25
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/insert-pub-prd-sals-dsgn-salsprc-mng.do", method = RequestMethod.POST)
	public NexacroResult insertPubPrdSalsDsgnSalsprcMng(
		@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap
		, @ParamDataSet(name = "ds_saveFileList", required = false) List<Map<String, Object>> fileMap
	) throws Exception {
		NexacroResult result;

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		if (userInfo == null) {
			userInfo = new HashMap<>();
		}
		String contextRealPath = propertiesService.getString("file.path.root");

		try {
			result = pubPrdSalsDsgnSalsprcMngService.insertPubPrdSalsDsgnSalsprcMng(saveMap, userInfo, fileMap, contextRealPath);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "insertPubPrdSalsDsgnSalsprcMng", "공용상품 영업지정판매가 등록"}, e) {};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : updatePubPrdSalsDsgnSalsprcMng
	 * 2. ClassName  : PubPrdSalsDsgnSalsprcMngController.java
	 * 3. Comment    : 공용상품 영업지정판매가 수정 (updatePubPrdSalsDsgnSalsprcMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.25
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/update-pub-prd-sals-dsgn-salsprc-mng.do", method = RequestMethod.POST)
	public NexacroResult updatePubPrdSalsDsgnSalsprcMng(@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap
			                         , @ParamDataSet(name = "ds_saveFileList",required = false) List<Map<String, Object>> fileMap) throws Exception 
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
			
			result = pubPrdSalsDsgnSalsprcMngService.updatePubPrdSalsDsgnSalsprcMng(saveMap, userInfo,fileMap,contextRealPath);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "updatePubPrdSalsDsgnSalsprcMng", "공용상품 영업지정판매가 수정" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectSalsChrpsnYn
	 * 2. ClassName  : PubPrdSalsDsgnSalsprcMngController.java
	 * 3. Comment    : 공용상품 영업지정판매가 영업담당자여부 조회(selectSalsChrpsnYn)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.25
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
			result = pubPrdSalsDsgnSalsprcMngService.selectSalsChrpsnYn(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectSalsChrpsnYn", "공용상품 영업지정판매가 영업담당자 여부조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPubPrdSalsDsgnSalsprcMngDtl
	 * 2. ClassName  : PubPrdSalsDsgnSalsprcMngController.java
	 * 3. Comment    : 공용상품 영업지정판매가 상세 (selectPubPrdSalsDsgnSalsprcMngDtl)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.24
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-pub-prd-sals-dsgn-salsprc-mng-prd-dtl.do", method = RequestMethod.POST)
	public NexacroResult selectPubPrdSalsDsgnSalsprcMngPrdDtl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = pubPrdSalsDsgnSalsprcMngService.selectPubPrdSalsDsgnSalsprcMngPrdDtl(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPubPrdSalsDsgnSalsprcMngPrdDtl", "공용상품 영업지정가 상품정보 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPubPrdSalsDsgnSalsprcMngDtl
	 * 2. ClassName  : PubPrdSalsDsgnSalsprcMngController.java
	 * 3. Comment    : 공용상품 영업지정판매가 저장여부 (selectPubPrdSalsDsgnSalsprcMngDtl)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.24
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-pub-prd-sals-dsgn-salsprc-mng-prd-save-yn.do", method = RequestMethod.POST)
	public NexacroResult selectPubPrdSalsDsgnSalsprcMngPrdSaveYn(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = pubPrdSalsDsgnSalsprcMngService.selectPubPrdSalsDsgnSalsprcMngPrdSaveYn(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPubPrdSalsDsgnSalsprcMngPrdSaveYn", "공용상품 영업지정가 상품정보 저장여부" }, e) { };
		}

		return result;
	}

}
