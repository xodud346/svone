/*------------------------------------------------------------------------------
 * NAME : PurgInfoPkgChgController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.02  오왕표
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
import com.ssp.bo.rd.service.PurgInfoPkgChgService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   PurgInfoPkgChgController
 * @@desc   구매정보일괄변경 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.06.02
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/purg-info-pkg-chg")
public class PurgInfoPkgChgController {
	private Logger logger = LoggerFactory.getLogger(PurgInfoPkgChgController.class);

	@Resource(name = "purgInfoPkgChgService")
	private PurgInfoPkgChgService purgInfoPkgChgService;

	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PurgInfoPkgChgController.propertiesService = propertiesService;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectPurgInfoPkgChg
	 * 2. ClassName  : PurgInfoPkgChgController.java
	 * 3. Comment    : 구매정보일괄변경 리스트 조회
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-purg-info-pkg-chg.do", method = RequestMethod.POST)
	public NexacroResult selectPurgInfoPkgChg(
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

		if (CommUtil.nvl(coCd).equals("") && admin != null) {
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try {
			result = purgInfoPkgChgService.selectPurgInfoPkgChg(searchMap);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectPurgInfoPkgChg", "구매정보일괄변경 조회"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectPrpsFileExcelDown
	 * 2. ClassName  : PurgInfoPkgChgController.java
	 * 3. Comment    : 제안파일엑셀다운로드 조회 (selectPrpsFileExcelDown)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-prps-file-excel-down.do", method = RequestMethod.POST)
	public NexacroResult selectPrpsFileExcelDown(@ParamVariable(name = "CONT_NO")        String CONT_NO
	                                           , @ParamVariable(name = "CONT_CHG_DGRCNT") String CONT_CHG_DGRCNT
	                                           , @ParamVariable(name = "CO_CD")           String CO_CD) throws Exception
	{
		NexacroResult result = new NexacroResult();

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		Map<String, Object> searchMap = new HashMap<>();
		searchMap.put("CONT_NO",        CONT_NO);
		searchMap.put("CONT_CHG_DGRCNT",CONT_CHG_DGRCNT);
		searchMap.put("CO_CD",          CO_CD);

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = purgInfoPkgChgService.selectPrpsFileExcelDown(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPurgInfoPkgChg", "구매정보일괄변경 조회" }, e) { };
		}

		return result;
	}


	/**
	 * 구매정보 개별, 일괄 변경 처리
	 *
	 * @param searchMap
	 * @param saveMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-req-cprtcp-consn-stats-dtls-stor.do", method = RequestMethod.POST)
	public NexacroResult saveReqCprtcpConsnStatsDtlsStor(
		@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
		, @ParamDataSet(name = "ds_input", required = false) List<Map<String, Object>> saveMap
	) throws Exception {
		NexacroResult result;

		try {
			if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
				SessionsAdmin.setSessionAdminLocal();
			}

			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
			if (userInfo == null) {
				userInfo = new HashMap<>();
			}

			result = purgInfoPkgChgService.saveReqCprtcpConsnStatsDtlsStor(searchMap, saveMap, userInfo);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "saveCommonCodeList", "요청협력사합의상태내역 저장"}, e) {
			};
		}

		return result;
	}
}