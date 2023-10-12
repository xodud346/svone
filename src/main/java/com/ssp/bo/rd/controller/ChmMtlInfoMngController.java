/*------------------------------------------------------------------------------
 * NAME : ChmMtlInfoMngController.java
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
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.ChmMtlInfoMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.rd.service.PI_PrdInfoCallService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   ChmMtlInfoMngController
 * @@desc   화학물질정보관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/chm-mtl-info-mng")
public class ChmMtlInfoMngController {
	private Logger logger = LoggerFactory.getLogger(ChmMtlInfoMngController.class);

	@Resource(name = "chmMtlInfoMngService")
	private ChmMtlInfoMngService chmMtlInfoMngService;
	
	@Resource(name = "pI_PrdInfoCallService")
	private PI_PrdInfoCallService pI_PrdInfoCallService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		ChmMtlInfoMngController.propertiesService = propertiesService;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectChmMtlInfoMng
	 * 2. ClassName  : ChmMtlInfoMngController.java
	 * 3. Comment    : 화학물질정보관리 리스트 조회 (selectChmMtlInfoMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.28
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-chm-mtl-info-mng.do", method = RequestMethod.POST)
	public NexacroResult selectChmMtlInfoMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception
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
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && userInfo != null)
		{
			searchMap.put("CO_CD", userInfo.get("CO_CD"));
		}

		try
		{
			result = chmMtlInfoMngService.selectChmMtlInfoMng(searchMap, session);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectChmMtlInfoMng", "화학물질정보관리 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectChmMtlInfoRegUpdListInq
	 * 2. ClassName  : ChmMtlInfoMngController.java
	 * 3. Comment    : 화학물질정보등록수정 리스트 조회 (selectChmMtlInfoRegUpdListInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.16
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-chm-mtl-info-reg-upd-list-inq.do", method = RequestMethod.POST)
	public NexacroResult selectChmMtlInfoRegUpdListInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
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

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && userInfo != null)
		{
			searchMap.put("CO_CD", userInfo.get("CO_CD"));
		}

		try
		{
			result = chmMtlInfoMngService.selectChmMtlInfoRegUpdListInq(searchMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectChmMtlInfoMng", "화학물질정보등록수정 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectChmMtlInfoAddInfoListInq
	 * 2. ClassName  : ChmMtlInfoMngController.java
	 * 3. Comment    : 화학물질정보추가정보 리스트 조회 (selectChmMtlInfoAddInfoListInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.16
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-chm-mtl-info-add-info-list-inq.do", method = RequestMethod.POST)
	public NexacroResult selectChmMtlInfoAddInfoListInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
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

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && userInfo != null)
		{
			searchMap.put("CO_CD", userInfo.get("CO_CD"));
		}

		try
		{
			result = chmMtlInfoMngService.selectChmMtlInfoAddInfoListInq(searchMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectChmMtlInfoMng", "화학물질정보추가정보 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectRegulationInfoCnfYn
	 * 2. ClassName  : ChmMtlInfoMngController.java
	 * 3. Comment    : 규제정보확인여부 리스트 조회 (selectRegulationInfoCnfYn)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.16
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-regulation-info-cnf-yn.do", method = RequestMethod.POST)
	public NexacroResult selectRegulationInfoCnfYn(@ParamDataSet(name = "ds_chmMtlList", required = false) List<Map<String, Object>> saveMap
			                                      , @ParamVariable(name = "PRD_ID") String PRD_ID
                                                  , @ParamVariable(name = "CO_CD")  String CO_CD) throws Exception
	{
		NexacroResult result = new NexacroResult();

		Map<String, Object> searchMap = new HashMap<>();

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD","KO");
		}

		searchMap.put("PRD_ID",PRD_ID);
		searchMap.put("CO_CD", CO_CD);

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && userInfo != null)
		{
			searchMap.put("CO_CD", userInfo.get("CO_CD"));
		}

		try
		{
			result = chmMtlInfoMngService.selectRegulationInfoCnfYn(searchMap, saveMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectChmMtlInfoMng", "화학물질정보추가정보 조회" }, e) { };
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

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && userInfo != null)
		{
			searchMap.put("CO_CD", userInfo.get("CO_CD"));
		}

		String contextRealPath = propertiesService.getString("file.path.root");

		try
		{
			if(userInfo == null) {
				userInfo = new HashMap<String, Object>();
			}
			result = chmMtlInfoMngService.saveChmMtlInfoCnf(searchMap, mainMap, saveMap, saveFileList, userInfo, contextRealPath);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectChmMtlInfoMng", "화확물질 규제정보 확인" }, e) { };
		}

		return result;
	}
	
	
	/**
	 * <pre>
	 * 1. MethodName : selectCodeChkYn
	 * 2. ClassName  : CodeChkYnController.java
	 * 3. Comment    : 저장/수정 코드체크여부 조회 (selectCodeChkYn)
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
			result = chmMtlInfoMngService.selectCodeChkYn(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectCodeChkYn", "저장/수정 코드체크여부 조회" }, e) { };
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
		
		return result;
	}
	
}