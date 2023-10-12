/*------------------------------------------------------------------------------
 * NAME : SrsGrpPrdMngController.java
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
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.SrsGrpPrdMngService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title   SrsGrpPrdMngController
 * @@desc   R&D 시리즈그룹 상품 관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/srs-grp-prd-mng")
public class SrsGrpPrdMngController {
	private Logger logger = LoggerFactory.getLogger(SrsGrpPrdMngController.class);

	@Resource(name = "srsGrpPrdMngService")
	private SrsGrpPrdMngService srsGrpPrdMngService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		SrsGrpPrdMngController.propertiesService = propertiesService;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectSrsGrpPrdMng
	 * 2. ClassName  : SrsGrpPrdMngController.java
	 * 3. Comment    : R&D 시리즈그룹 상품 관리 리스트 조회 (selectSrsGrpPrdMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.28
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-srs-grp-prd-mng.do", method = RequestMethod.POST)
	public NexacroResult selectSrsGrpPrdMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}
		
		System.out.println(searchMap.toString());

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
			result = srsGrpPrdMngService.selectSrsGrpPrdMng(searchMap,session);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectSrsGrpPrdMng", "R&D 시리즈그룹 상품 관리 조회" }, e) { };
		}

		return result;
	}
	
	
	/**
	 * <pre>
	 * 1. MethodName : selectSeriesBssTemp
	 * 2. ClassName  : SrsGrpPrdMngController.java
	 * 3. Comment    : 기준상품 중복 체크 조회 (selectSeriesBssTemp)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.23
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-series-bss-temp.do", method = RequestMethod.POST)
	public NexacroResult selectSeriesBssTemp(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = srsGrpPrdMngService.selectSeriesBssTemp(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectSeriesBssTemp", "기준상품 중복 체크 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectSeriesTemp
	 * 2. ClassName  : SrsGrpPrdMngController.java
	 * 3. Comment    : 그룹상품추가 조회 (selectSeriesTemp)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.23
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-series-temp.do", method = RequestMethod.POST)
	public NexacroResult selectSeriesTemp(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = srsGrpPrdMngService.selectSeriesTemp(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectSeriesTemp", "그룹상품추가 조회" }, e) { };
		}

		return result;
	}
	

	/**
	 * <pre>
	 * 1. MethodName : saveProductSeries
	 * 2. ClassName  : SrsGrpPrdMngController.java
	 * 3. Comment    : 그룹상품추가 저장/수정/및 상세저장/수정/삭제 (saveProductSeries)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.24
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-product-series.do", method = RequestMethod.POST)
	public NexacroResult saveProductSeries(@ParamDataSet(name = "ds_detail", required = false) Map<String, Object> commandMap
			                              , @ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> listMap) throws Exception
	{	
		NexacroResult result;

		try
		{
			if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
				SessionsAdmin.setSessionAdminLocal();
			}
			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
			if(userInfo != null) {
    			commandMap.put("CO_CD",   userInfo.get("CO_CD"));
    			commandMap.put("USER_ID", userInfo.get("OPRTR_ID"));
			}

			result = srsGrpPrdMngService.saveProductSeries(commandMap, listMap,userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveProductSeries", "상품그룹 저장" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectProductSeries
	 * 2. ClassName  : ProductSeriesController.java
	 * 3. Comment    : 상품그룹 상세 조회 (selectProductSeries)
	 * 4. 작성자     :
	 * 5. 작성일     : 2022.05.24
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-product-series.do", method = RequestMethod.POST)
	public NexacroResult selectProductSeries(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = srsGrpPrdMngService.selectProductSeries(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectProductSeries", "상품그룹 상세 조회" }, e) { };
		}

		return result;
	}
	
}
