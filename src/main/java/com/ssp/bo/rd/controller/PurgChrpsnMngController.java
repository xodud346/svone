/*------------------------------------------------------------------------------
 * NAME : PurgChrpsnMngController.java
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
import com.ssp.bo.rd.service.PurgChrpsnMngService;
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
 * @title   PurgChrpsnMngController
 * @@desc   구매담당자 관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/purg-chrpsn-mng")
public class PurgChrpsnMngController {
	private Logger logger = LoggerFactory.getLogger(PurgChrpsnMngController.class);

	@Resource(name = "purgChrpsnMngService")
	private PurgChrpsnMngService purgChrpsnMngService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PurgChrpsnMngController.propertiesService = propertiesService;
	}

	protected static PI_PrdInfoCallService pI_PrdInfoCallService;

	@Autowired
	void setPI_PrdInfoCallService(PI_PrdInfoCallService pI_PrdInfoCallService) {
		PurgChrpsnMngController.pI_PrdInfoCallService = pI_PrdInfoCallService;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPurgChrpsnMng
	 * 2. ClassName  : PurgChrpsnMngController.java
	 * 3. Comment    : 구매담당자 관리 리스트 조회 (selectPurgChrpsnMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.28
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-purg-chrpsn-mng.do", method = RequestMethod.POST)
	public NexacroResult selectPurgChrpsnMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception
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

		try
		{
			result = purgChrpsnMngService.selectPurgChrpsnMng(searchMap, session);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPurgChrpsnMng", "구매담당자 관리 조회" }, e) { };
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectPurgChrpsnMngDtl
	 * 2. ClassName  : PurgChrpsnMngController.java
	 * 3. Comment    : 구매담당자 상세 조회 (selectPurgChrpsnMngDtl)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.12
	 * </pre>
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-purg-chrpsn-mng-dtl.do", method = RequestMethod.POST)
	public NexacroResult selectPurgChrpsnMngDtl(
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
			result = purgChrpsnMngService.selectPurgChrpsnMngDtl(searchMap);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectPurgChrpsnMngDtl", "구매담당자상세 조회"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : updatePurgChrpsnMng
	 * 2. ClassName  : PurgChrpsnMngController.java
	 * 3. Comment    : R&D 구매 담당자 수정
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.12
	 * </pre>
	 *
	 * @param searchMap
	 * @param saveMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/update-purg-chrpsn-mng.do", method = RequestMethod.POST)
	public NexacroResult updatePurgChrpsnMng(
		@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
		, @ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap
	) throws Exception {
		NexacroResult result;

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		try {
			if (userInfo == null) {
				userInfo = new HashMap<>();
			}

			result = purgChrpsnMngService.updatePurgChrpsnMng(searchMap, saveMap, userInfo);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "updatePurgChrpsnMng", "R&D 구매담당자 수정"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : insertPurgChrpsnMng
	 * 2. ClassName : PurgChrpsnMngController.java
	 * 3. Comment : R&D구매담당자 등록
	 * 4. 작성자 : SON
	 * 5. 작성일 : 2022.05.12
	 * </pre>
	 *
	 * @param saveMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/insert-purg-chrpsn-mng.do", method = RequestMethod.POST)
	public NexacroResult insertPurgChrpsnMng(@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap) throws Exception {
		NexacroResult result;

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		if (userInfo == null) {
			userInfo = new HashMap<String, Object>();
		}

		try {
			result = purgChrpsnMngService.insertPurgChrpsnMng(saveMap, userInfo);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "insertPurgChrpsnMng", "R&D 구매담당자 등록"}, e) {};
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : savePurgChrpsnPiCall
	 * 2. ClassName  : PurgInfoMngController.java
	 * 3. Comment    : 구매담당자PI호출 저장 (savePurgChrpsnPiCall)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.08
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-purg-chrpsn-pi-call.do", method = RequestMethod.POST)
	public NexacroResult savePurgChrpsnPiCall(@ParamDataSet(name = "ds_purgChrpsnPiCall",required = false) List<Map<String, Object>> saveMap
			                                , HttpServletRequest request) throws Exception 
	{
		NexacroResult result = new NexacroResult();

		try
		{
			int count = pI_PrdInfoCallService.PI_PrdPurgChrpsnCall(saveMap, request);

			result.addVariable("lv_piCount",count);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "savePrdPurgInfoSync", "구매담당자PI호출 저장" }, e) { };
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
			result = purgChrpsnMngService.selectCodeChkYn(searchMap);
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
			result = purgChrpsnMngService.selectUpCodeChkYn(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectUpCodeChkYn", "수정코드체크여부 조회" }, e) { };
		}

		return result;
	}
}
