/*------------------------------------------------------------------------------
 * NAME : CmsErrRepairController.java
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
import com.ssp.bo.rd.service.CmsErrRepairService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.rd.service.PI_PrdInfoCallService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title   CmsErrRepairController
 * @@desc   CMS오류 정비 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/cms-err-repair")
public class CmsErrRepairController {
	private Logger logger = LoggerFactory.getLogger(CmsErrRepairController.class);

	@Resource(name = "cmsErrRepairService")
	private CmsErrRepairService cmsErrRepairService;
	
	@Resource(name = "pI_PrdInfoCallService")
	private PI_PrdInfoCallService pI_PrdInfoCallService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		CmsErrRepairController.propertiesService = propertiesService;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectCmsErrRepair
	 * 2. ClassName  : CmsErrRepairController.java
	 * 3. Comment    : CMS오류 정비 리스트 조회
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.10
	 * </pre>
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-cms-err-repair.do", method = RequestMethod.POST)
	public NexacroResult selectCmsErrRepair(
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

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));
		if (CommUtil.nvl(coCd).equals("")) {
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try {
			result = cmsErrRepairService.selectCmsErrRepair(searchMap);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectCmsErrRepair", "CMS오류 정비 조회"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectCmsErrRepairDtlInq
	 * 2. ClassName  : CmsErrRepairController.java
	 * 3. Comment    : CMS오류정비상세 조회 (selectCmsErrRepairDtlInq)
	 * 4. 작성자     :
	 * 5. 작성일     : 2022.06.28
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-cms-err-repair-dtl-inq.do", method = RequestMethod.POST)
	public NexacroResult selectCmsErrRepairDtlInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
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
			result = cmsErrRepairService.selectCmsErrRepairDtlInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectCmsErrRepairDtlInq", "CMS오류정비상세 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectMsdsChmMtlInfoInq
	 * 2. ClassName  : CmsErrRepairController.java
	 * 3. Comment    : MSDS화학물질정보 조회 (selectMsdsChmMtlInfoInq)
	 * 4. 작성자     :
	 * 5. 작성일     : 2022.06.30
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-msds-chm-mtl-info-inq.do", method = RequestMethod.POST)
	public NexacroResult selectMsdsChmMtlInfoInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
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
			result = cmsErrRepairService.selectMsdsChmMtlInfoInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectMsdsChmMtlInfoInq", "MSDS화학물질정보 조회" }, e) { };
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : saveCmsErrDtlEstmStatsDtlsStor
	 * 2. ClassName  : CommonCodeController.java
	 * 3. Comment    : CMS오류상세견적상태내역 저장(saveCmsErrDtlEstmStatsDtlsStor)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.07.05
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-cms-err-dtl-estm-stats-dtls-stor.do", method = RequestMethod.POST)

	public NexacroResult saveCmsErrDtlEstmStatsDtlsStor(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
		, @ParamDataSet(name = "ds_input", required = false) List<Map<String, Object>> saveMap) throws Exception {
		NexacroResult result;

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if (CommUtil.nvl(langCd).equals("")) {
			searchMap.put("LANG_CD", "KO");
		}

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if (CommUtil.nvl(coCd).equals("") && userInfo != null) {
			searchMap.put("CO_CD", userInfo.get("CO_CD"));
		}

		if(userInfo == null) {
			userInfo = new HashMap<String, Object>();
		}
		
		try {
			result = cmsErrRepairService.saveCmsErrDtlEstmStatsDtlsStor(searchMap, saveMap, userInfo);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "saveCommonCodeList", "협력사상품정보 저장"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : saveCmsErrDtlStor
	 * 2. ClassName  : CommonCodeController.java
	 * 3. Comment    : CMS오류상세 저장 (saveCmsErrDtlStor)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.07.05
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-cms-err-dtl-stor.do", method = RequestMethod.POST)
	public NexacroResult saveCmsErrDtlStor(@ParamDataSet(name = "ds_search",      required = false) Map<String, Object> searchMap
                                         , @ParamDataSet(name = "ds_master",      required = false) Map<String, Object> mainMap
                                         , @ParamDataSet(name = "ds_chmMtlList",  required = false) List<Map<String, Object>> saveMap
                                         , @ParamDataSet(name = "ds_saveFileList",required = false) List<Map<String, Object>> saveFileList) throws Exception 
	{
		NexacroResult result;

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD","KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && userInfo != null)
		{
			searchMap.put("CO_CD", userInfo.get("CO_CD"));
		}

		String contextRealPath = propertiesService.getString("file.path.root");

		if(userInfo == null) {
			userInfo = new HashMap<String, Object>();
		}
		
		try
		{
			result = cmsErrRepairService.saveCmsErrDtlStor(searchMap, mainMap, saveMap, saveFileList, userInfo, contextRealPath);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveCommonCodeList", "협력사상품정보 저장" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : cmsPiCallStat
	 * 2. ClassName  : CmsErrRepairController.java
	 * 3. Comment    : 상품 상태 PI 호출
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.16
	 * </pre>
	 *
	 * @param mainMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/cms-pi-call-stat.do", method = RequestMethod.POST)
	public NexacroResult cmsPiCallStat(@ParamDataSet(name = "ds_master",      required = false) List<Map<String, Object>> mainMap
											) throws Exception
	{
		NexacroResult result = new NexacroResult();
		int cnt = 0;

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		cnt = pI_PrdInfoCallService.PI_PrdStatCall(mainMap);

		result.addVariable("lv_piCount",cnt);
		Thread.sleep(1000);
		
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : cmsPiCallPrd
	 * 2. ClassName  : CmsErrRepairController.java
	 * 3. Comment    : 상품 정보 PI 호출
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.16
	 * </pre>
	 *
	 * @param mainMap
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/cms-pi-call-prd.do", method = RequestMethod.POST)
	public NexacroResult cmsPiCallPrd(HttpServletRequest request, @ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> mainMap) throws Exception {
		NexacroResult result = new NexacroResult();
		int cnt = 0;

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		cnt = cmsErrRepairService.savePIPrdInfo(mainMap, userInfo);

		result.addVariable("lv_piCount", cnt);
		Thread.sleep(1000);

		return result;
	}
}