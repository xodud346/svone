/*------------------------------------------------------------------------------
 * NAME : CprtcpEstmReqMngController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.16  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.controller;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.CprtcpEstmReqMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.rd.service.PI_PrdInfoCallService;
import com.ssp.core.util.StringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   CprtcpEstmReqMngController
 * @@desc   협력사 견적요청 관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.06.16
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/cprtcp-estm-req-mng")
public class CprtcpEstmReqMngController {
	private Logger logger = LoggerFactory.getLogger(CprtcpEstmReqMngController.class);

	@Resource(name = "cprtcpEstmReqMngService")
	private CprtcpEstmReqMngService cprtcpEstmReqMngService;
	
	@Resource(name = "pI_PrdInfoCallService")
	private PI_PrdInfoCallService pI_PrdInfoCallService;

	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		CprtcpEstmReqMngController.propertiesService = propertiesService;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectCprtcpEstmReqMng
	 * 2. ClassName  : CprtcpEstmReqMngController.java
	 * 3. Comment    : 협력사 견적요청 관리 리스트 조회
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.28
	 * </pre>
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-cprtcp-estm-req-mng.do", method = RequestMethod.POST)
	public NexacroResult selectCprtcpEstmReqMng(
		HttpSession session
		, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	) throws Exception {
		NexacroResult result;
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if (CommUtil.nvl(langCd).equals("")) {
			searchMap.put("LANG_CD", "KO");
		}

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		if (CommUtil.nvl(coCd).equals("") && admin != null) {
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		searchMap.put("SES_ID", session.getId());

		try {
			result = cprtcpEstmReqMngService.selectCprtcpEstmReqMng(searchMap);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectCprtcpEstmReqMng", "협력사 견적요청 관리 리스트 조회"}, e) {};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectEstmReqDtlInfoInq
	 * 2. ClassName  : CprtcpEstmReqMngController.java
	 * 3. Comment    : 견적요청상세정보 조회 (selectEstmReqDtlInfoInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.21
	 * </pre>
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-estm-req-dtl-info-inq.do", method = RequestMethod.POST)
	public NexacroResult selectEstmReqDtlInfoInq(
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

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if (CommUtil.nvl(coCd).equals("") && admin != null) {
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try {
			result = cprtcpEstmReqMngService.selectEstmReqDtlInfoInq(searchMap);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectEstmReqDtlInfoInq", "견적요청상세정보 조회"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectEstmReqChmMtlInfoInq
	 * 2. ClassName  : ChmMtlInfoMngController.java
	 * 3. Comment    : 견적요청화학물질정보 조회 (selectEstmReqChmMtlInfoInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.23
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-estm-req-chm-mtl-info-inq.do", method = RequestMethod.POST)
	public NexacroResult selectEstmReqChmMtlInfoInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD","KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		if(userInfo == null) {
			userInfo = new HashMap<String, Object>();
		}
		
		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals(""))
		{
			searchMap.put("CO_CD", userInfo.get("CO_CD"));
		}

		try
		{
			result = cprtcpEstmReqMngService.selectEstmReqChmMtlInfoInq(searchMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectEstmReqChmMtlInfoInq", "견적요청화학물질정보 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectCprtcpPrdInfoInq
	 * 2. ClassName  : ChmMtlInfoMngController.java
	 * 3. Comment    : 협력사상품정보 조회(selectCprtcpPrdInfoInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.07.22
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-cprtcp-prd-info-inq.do", method = RequestMethod.POST)
	public NexacroResult selectCprtcpPrdInfoInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = cprtcpEstmReqMngService.selectCprtcpPrdInfoInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectCprtcpPrdInfoInq", "협력사상품정보 조회" }, e) { };
		}

		return result;
	}


	/**
	 * 협력사 견적요청 상태변경 저장
	 *
	 * @param searchMap
	 * @param saveMap
	 * @param delMap
	 * @param masterMap
	 * @param detailMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-cprtcp-estm-stats-dtls-stor.do", method = RequestMethod.POST)
	public NexacroResult saveCprtcpEstmStatsDtlsStor(
		@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
		, @ParamDataSet(name = "ds_input", required = false) List<Map<String, Object>> saveMap
		, @ParamDataSet(name = "ds_delete", required = false) List<Map<String, Object>> delMap
		, @ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> masterMap
		, @ParamDataSet(name = "ds_detail", required = false) List<Map<String, Object>> detailMap
	) throws Exception {
		NexacroResult result;

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
		if (CommUtil.nvl(langCd).equals("")) {
			searchMap.put("LANG_CD", "KO");
		}

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		if (userInfo == null) {
			userInfo = new HashMap<>();
		}

		try {
			result = cprtcpEstmReqMngService.saveCprtcpEstmStatsDtlsStor(searchMap, saveMap, delMap, masterMap, detailMap, userInfo);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "saveCprtcpEstmStatsDtlsStor", "요청협력사합의상태내역 저장"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveCprtcpEstmStatsDtlsStor
	 * 2. ClassName  : CommonCodeController.java
	 * 3. Comment    : RnD전시상품 협력사견적상태내역 저장
	 * 4. 작성자    	 : 김재흥
	 * 5. 작성일    	 : 2023.08.03
	 * </pre>
	 *
	 * @param searchMap
	 * @param saveMap
	 * @param delMap
	 * @param masterMap
	 * @param detailMap
	 * @param optionMap
	 * @param addOptionMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-cprtcp-disp-estm-stats-dtls-stor.do", method = RequestMethod.POST)
	public NexacroResult saveCprtcpRndDispEstmStatsDtlsStor(
		@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
		, @ParamDataSet(name = "ds_input", required = false) List<Map<String, Object>> saveMap
		, @ParamDataSet(name = "ds_delete", required = false) List<Map<String, Object>> delMap
		, @ParamDataSet(name = "ds_detail", required = false) Map<String, Object> masterMap
		, @ParamDataSet(name = "ds_supplier", required = false) List<Map<String, Object>> detailMap
		, @ParamDataSet(name = "ds_op", required = false) List<Map<String, Object>> optionMap
		, @ParamDataSet(name = "ds_addOp", required = false) List<Map<String, Object>> addOptionMap
	) throws Exception {
		NexacroResult result;

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
		if (CommUtil.nvl(langCd).equals("")) {
			searchMap.put("LANG_CD", "KO");
		}

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn() == null ? new HashMap<>() : SessionsAdmin.getSessionAdmn();

		try {
			result = cprtcpEstmReqMngService.saveCprtcpDispEstmStatsDtlsStor(searchMap, saveMap, delMap, masterMap, detailMap, userInfo, optionMap, addOptionMap);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_69", "RnD전시상품 요청협력사합의상태내역 저장"}, e) {};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : saveEstmDisProcStor
	 * 2. ClassName  : CommonCodeController.java
	 * 3. Comment    : 견적불가처리 저장 (saveEstmDisProcStor)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.20
	 * </pre>
	 *
	 * @param saveMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-estm-dis-proc-stor.do", method = RequestMethod.POST)
	public NexacroResult saveEstmDisProcStor(
		@ParamDataSet(name = "ds_input", required = false) Map<String, Object> saveMap
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
			result = cprtcpEstmReqMngService.saveEstmDisProcStor(saveMap, userInfo);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "saveEstmDisProcStor", "견적불가처리 저장"}, e) {
			};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveDispEstmDisProcStor
	 * 2. ClassName  : CommonCodeController.java
	 * 3. Comment    : 전시견적불가처리 저장 (saveDispEstmDisProcStor)
	 * 4. 작성자    :
	 * 5. 작성일    : 2023.08.08
	 * </pre>
	 *
	 * @param saveMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-disp-estm-dis-proc-stor.do", method = RequestMethod.POST)
	public NexacroResult saveDispEstmDisProcStor(
			@ParamDataSet(name = "ds_input", required = false) Map<String, Object> saveMap
	) throws Exception {
		NexacroResult result;

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		if (userInfo == null) {
			userInfo = new HashMap<>();
		}

		try {
			result = cprtcpEstmReqMngService.saveDispEstmDisProcStor(saveMap, userInfo);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_69", "전시견적불가처리 저장"}, e) {};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : saveChmMtlInfoCnf
	 * 2. ClassName  : ChmMtlInfoMngController.java
	 * 3. Comment    : 화학물질정보확인 저장 (saveChmMtlInfoCnf)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.16
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-chm-mtl-info-cnf.do", method = RequestMethod.POST)
	public NexacroResult saveChmMtlInfoCnf(@ParamDataSet(name = "ds_search",      required = false) Map<String, Object> searchMap
			                              , @ParamDataSet(name = "ds_master",      required = false) Map<String, Object> mainMap
			                              , @ParamDataSet(name = "ds_chmMtlList",  required = false) List<Map<String, Object>> saveMap
			                              , @ParamDataSet(name = "ds_saveFileList",required = false) List<Map<String, Object>> saveFileList) throws Exception
	{
		NexacroResult result = new NexacroResult();

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD","KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		if(userInfo == null) {
			userInfo = new HashMap<String, Object>();
		}
		
		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && userInfo != null)
		{
			searchMap.put("CO_CD", userInfo.get("CO_CD"));
		}

		String contextRealPath = propertiesService.getString("file.path.root");

		try
		{
			result = cprtcpEstmReqMngService.saveChmMtlInfoCnf(searchMap, mainMap, saveMap, saveFileList, userInfo, contextRealPath);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectChmMtlInfoMng", "화확물질 규제정보 확인" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : cmsPiCallStat
	 * 2. ClassName  : CprtcpEstmReqMngController.java
	 * 3. Comment    : 휴면화 PI 호출
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.16
	 * </pre>
	 *
	 * @param mainMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/cms-pi-call-stat.do", method = RequestMethod.POST)
	public NexacroResult cmsPiCallStat(
		@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> mainMap
	) throws Exception {
		NexacroResult result = new NexacroResult();
		int cnt = 0;

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		cnt = pI_PrdInfoCallService.PI_PrdStatCall(mainMap);

		result.addVariable("lv_piCount", cnt);

		return result;
	}
}