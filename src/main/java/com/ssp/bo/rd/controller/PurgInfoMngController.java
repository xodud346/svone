/*------------------------------------------------------------------------------
 * NAME : PurgInfoMngController.java
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
import com.ssp.bo.rd.service.PurgInfoMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.rd.service.PI_PrdInfoCallService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   PurgInfoMngController
 * @@desc   구매정보관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/purg-info-mng")
public class PurgInfoMngController {
	private Logger logger = LoggerFactory.getLogger(PurgInfoMngController.class);

	@Resource(name = "purgInfoMngService")
	private PurgInfoMngService purgInfoMngService;

	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PurgInfoMngController.propertiesService = propertiesService;
	}

	protected static PI_PrdInfoCallService pI_PrdInfoCallService;

	@Autowired
	void setPI_PrdInfoCallService(PI_PrdInfoCallService pI_PrdInfoCallService) {
		PurgInfoMngController.pI_PrdInfoCallService = pI_PrdInfoCallService;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPurgInfoMng
	 * 2. ClassName  : PurgInfoMngController.java
	 * 3. Comment    : 구매정보관리 리스트 조회 (selectPurgInfoMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.28
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-purg-info-mng.do", method = RequestMethod.POST)
	public NexacroResult selectPurgInfoMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,HttpSession session) throws Exception
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
			result = purgInfoMngService.selectPurgInfoMng(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPurgInfoMng", "구매정보관리 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPurgPrdInfoInq
	 * 2. ClassName  : PurgInfoMngController.java
	 * 3. Comment    : 구매상품정보 조회 (selectPurgPrdInfoInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.28
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-purg-prd-info-inq.do", method = RequestMethod.POST)
	public NexacroResult selectPurgPrdInfoInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
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
			result = purgInfoMngService.selectPurgPrdInfoInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPurgInfoMng", "구매정보관리 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPurgInfoDtlInq
	 * 2. ClassName  : PurgInfoMngController.java
	 * 3. Comment    : 구매정보상세 조회 (selectPurgInfoDtlInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.28
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-purg-info-dtl-inq.do", method = RequestMethod.POST)
	public NexacroResult selectPurgInfoDtlInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
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
			result = purgInfoMngService.selectPurgInfoDtlInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPurgInfoMng", "구매정보관리 조회" }, e) { };
		}

		return result;
	}


	/**
	 * 구매정보관리 리스트 저장
	 *
	 * @param saveMap
	 * @param qtyDcMap
	 * @param fileMap
	 * @param kcMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-purg-info-mng.do", method = RequestMethod.POST)
	public NexacroResult savePurgInfoMng(
		@ParamDataSet(name = "ds_purgInfo", required = false) Map<String, Object> saveMap
		, @ParamDataSet(name = "ds_qtyDcList", required = false) List<Map<String, Object>> qtyDcMap
		, @ParamDataSet(name = "ds_saveFileList", required = false) List<Map<String, Object>> fileMap
		, @ParamDataSet(name = "ds_kcCertInfoList", required = false) List<Map<String, Object>> kcMap
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
			result = purgInfoMngService.savePurgInfoMng(saveMap, qtyDcMap, fileMap, kcMap, userInfo, propertiesService.getString("file.path.root"));
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "savePurgInfoMng", "구매정보관리 상세 합의요청 저장"}, e) {};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : updatePurgInfoUpd
	 * 2. ClassName  : PurgInfoMngController.java
	 * 3. Comment    : 구매정보수정 저장 (updatePurgInfoUpd)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.27
	 * </pre>
	 *
	 * @param saveMap
	 * @param fileMap
	 * @param kcMap
	 * @param kcDelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-purg-info-upd.do", method = RequestMethod.POST)
	public NexacroResult updatePurgInfoUpd(
		@ParamDataSet(name = "ds_purgInfo", required = false) Map<String, Object> saveMap
		, @ParamDataSet(name = "ds_saveFileList", required = false) List<Map<String, Object>> fileMap
		, @ParamDataSet(name = "ds_kcCertInfoList", required = false) List<Map<String, Object>> kcMap
		, @ParamDataSet(name = "ds_delKcCertInfoList", required = false) List<Map<String, Object>> kcDelMap
	) throws Exception {
		NexacroResult result;

		try {
			if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
				SessionsAdmin.setSessionAdminLocal();
			}

			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
			if(userInfo == null) {
				userInfo = new HashMap<String, Object>();
			}
			String contextRealPath = propertiesService.getString("file.path.root");

			result = purgInfoMngService.updatePurgInfoUpd(saveMap, fileMap, kcMap, kcDelMap, userInfo, contextRealPath);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "savePurgInfoMng", "요청협력사합의상세 저장"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : savePrdPurgInfoSync
	 * 2. ClassName  : PurgInfoMngController.java
	 * 3. Comment    : S-MRO IF 상품구매정보 동기화 저장 (savePrdPurgInfoSync)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.27
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-prd-purg-info-sync.do", method = RequestMethod.POST)
	public NexacroResult savePrdPurgInfoSync(@ParamDataSet(name = "ds_prdPurgInfoSync",required = false) List<Map<String, Object>> saveMap
			                                , HttpServletRequest request) throws Exception 
	{
		NexacroResult result = new NexacroResult();

		try
		{
			if(SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) 
			{
				SessionsAdmin.setSessionAdminLocal();
			}
			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

			int count = pI_PrdInfoCallService.PI_PrdInfoCall(saveMap, request, userInfo);

			result.addVariable("lv_piCount",count);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "savePrdPurgInfoSync", "S-MRO IF 상품구매정보 동기화 저장" }, e) { };
		}

		return result;
	}	
}
