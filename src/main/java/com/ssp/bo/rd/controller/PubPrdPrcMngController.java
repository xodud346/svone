/*------------------------------------------------------------------------------
 * NAME : PubPrdPrcMngController.java
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
import com.ssp.bo.rd.service.PubPrdPrcMngService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title  PubPrdPrcMngController
 * @@desc   공용상품가격관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/pub-prd-prc-mng")
public class PubPrdPrcMngController {
	private Logger logger = LoggerFactory.getLogger(PubPrdPrcMngController.class);

	@Resource(name = "pubPrdPrcMngService")
	private PubPrdPrcMngService pubPrdPrcMngService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PubPrdPrcMngController.propertiesService = propertiesService;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectPubPrdPrcMng
	 * 2. ClassName  : PubPrdPrcMngController.java
	 * 3. Comment    : 공용상품가격관리 리스트 조회 (selectPubPrdPrcMng)
	 * 4. 작성자     : 나용철
	 * 5. 작성일     : 2022.05.06
	 * </pre>
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-pub-prd-prc-mng.do", method = RequestMethod.POST)
	public NexacroResult selectPubPrdPrcMng(
		HttpSession session
		, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	) throws Exception {
		NexacroResult result = new NexacroResult();
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if (CommUtil.nvl(langCd).equals("")) {
			searchMap.put("LANG_CD", "KO");
		}

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if (CommUtil.nvl(coCd).equals("") && admin != null) {
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		searchMap.put("SES_ID", session.getId());

		try {
			result = pubPrdPrcMngService.selectPubPrdPrcMng(searchMap);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectPubPrdPrcMng", "공용상품가격관리 조회"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1.MethodName : selectPubPrdPrcMngDtl
	 * 2.ClassName : PubPrdPrcMngController.java
	 * 3.Comment : 공용상품가격관리 상세 (selectPubPrdPrcMngDtl)
	 * 4.작성자 :
	 * 5.작성일 : 2022.06.02
	 * </pre>
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-pub-prd-prc-mng-dtl.do", method = RequestMethod.POST)
	public NexacroResult selectPubPrdPrcMngDtl(
		HttpSession session
		, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	) throws Exception {
		NexacroResult result = new NexacroResult();
		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if (CommUtil.nvl(langCd).equals("")) {
			searchMap.put("LANG_CD", "KO");
		}

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if (CommUtil.nvl(coCd).equals("") && admin != null) {
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try {
			result = pubPrdPrcMngService.selectPubPrdPrcMngDtl(searchMap);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectPubPrdPrcMngDtl", "공용상품가격관리 상세 조회"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : savePubPrdPrcMngDtl
	 * 2. ClassName  : PubPrdPrcMngController.java
	 * 3. Comment    : 공용상품가격관리 수정 (savePubPrdPrcMngDtl)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.07
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-pub-prd-prc-mng-dtl.do", method = RequestMethod.POST)
	public NexacroResult savePubPrdPrcMngDtl(@ParamDataSet(name = "ds_dispInfo", required = false) List<Map<String, Object>> saveMap1
			                         , @ParamDataSet(name = "ds_prdPrcQtyDc",required = false) List<Map<String, Object>> saveMap2
			                         , @ParamDataSet(name = "ds_prdPrcDlcst",required = false) List<Map<String, Object>> saveMap3
			                         , @ParamDataSet(name = "ds_prdPrcCurAply",required = false) List<Map<String, Object>> saveMap4
			                         ) throws Exception 
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
			result = pubPrdPrcMngService.savePubPrdPrcMngDtl(saveMap1,saveMap2,saveMap3,saveMap4, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "updatePubPrdSalsDsgnSalsprcMng", "공용상품가격관리 상세 수정" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectDispStatsChgHst
	 * 2. ClassName  : PubPrdPrcMngController.java
	 * 3. Comment    : 진열상태변경이력 (selectDispStatsChgHst)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.07
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-disp-stats-chg-hst.do", method = RequestMethod.POST)
	public NexacroResult selectDispStatsChgHst(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = pubPrdPrcMngService.selectDispStatsChgHst(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPubPrdPrcMngDtl", "공용상품가격관리 상세 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPrcChgHst
	 * 2. ClassName  : PubPrdPrcMngController.java
	 * 3. Comment    : 가격변경이력 조회 (selectPrcChgHst)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.21
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-prc-chg-hst.do", method = RequestMethod.POST)
	public NexacroResult selectPrcChgHst(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = pubPrdPrcMngService.selectPrcChgHst(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPrcChgHst", "공용상품가격관리 가격변동이력 조회" }, e) { };
		}

		return result;
	}
	
}
