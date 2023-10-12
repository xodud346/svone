/*------------------------------------------------------------------------------
 * NAME : PurgInfoChgHstMngController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.10  오왕표
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
import com.ssp.bo.rd.service.PurgInfoChgHstMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   PurgInfoChgHstMngController
 * @@desc   구매정보변경이력관리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.06.10
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/purg-info-chg-hst-mng")
public class PurgInfoChgHstMngController {
	private Logger logger = LoggerFactory.getLogger(PurgInfoChgHstMngController.class);

	@Resource(name = "purgInfoChgHstMngService")
	private PurgInfoChgHstMngService purgInfoChgHstMngService;

	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PurgInfoChgHstMngController.propertiesService = propertiesService;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPurgInfoChgHstMng
	 * 2. ClassName  : PurgInfoChgHstMngController.java
	 * 3. Comment    : 구매정보변경이력관리 리스트 조회 (selectPurgInfoChgHstMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-purg-info-chg-hst-mng.do", method = RequestMethod.POST)
	public NexacroResult selectPurgInfoChgHstMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,HttpSession session) throws Exception
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

		searchMap.put("SES_ID", session.getId());

		try
		{
			result = purgInfoChgHstMngService.selectPurgInfoChgHstMng(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPurgInfoChgHstMng", "구매정보변경이력관리 조회" }, e) { };
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectPurgInfoChgDtlInq
	 * 2. ClassName  : PurgInfoChgHstMngController.java
	 * 3. Comment    : 구매정보변경상세 조회
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-purg-info-chg-dtl-inq.do", method = RequestMethod.POST)
	public NexacroResult selectPurgInfoChgDtlInq(
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
			result = purgInfoChgHstMngService.selectPurgInfoChgDtlInq(searchMap);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectPurgInfoChgHstMng", "구매정보변경이력관리 조회"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : savePurgInfoMng
	 * 2. ClassName  : PurgInfoChgHstMngController.java
	 * 3. Comment    : 구매정보관리 리스트 저장 (savePurgInfoMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.15
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-purg-info-mng.do", method = RequestMethod.POST)
	public NexacroResult savePurgInfoMng(@ParamDataSet(name = "ds_purgInfo",      required = false)  Map<String, Object>      saveMap
	                                    , @ParamDataSet(name = "ds_qtyDcList",     required = false) List<Map<String, Object>> qtyDcMap
	                                    , @ParamDataSet(name = "ds_saveFileList",  required = false) List<Map<String, Object>> fileMap
	                                    , @ParamDataSet(name = "ds_kcCertInfoList",required = false) List<Map<String, Object>> kcMap) throws Exception 
	{
		NexacroResult result;

		try
		{

			if(SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) 
			{
				SessionsAdmin.setSessionAdminLocal();
			}

			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
			if(userInfo == null) {
				userInfo = new HashMap<String, Object>();
			}
			String contextRealPath = propertiesService.getString("file.path.root");

			result = purgInfoChgHstMngService.savePurgInfoMng(saveMap, qtyDcMap, fileMap, kcMap, userInfo, contextRealPath);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "savePurgInfoMng", "요청협력사합의상세 저장" }, e) { };
		}

		return result;
	}

}
