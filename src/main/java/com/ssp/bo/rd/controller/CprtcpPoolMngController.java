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
import com.ssp.bo.rd.service.CprtcpEstmReqMngService;
import com.ssp.bo.rd.service.CprtcpPoolMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   CprtcpPoolMngController
 * @@desc   협력사 견적 POOL 관리  Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2023.07.11
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/select-pool-mng")
public class CprtcpPoolMngController {
	private Logger logger = LoggerFactory.getLogger(CprtcpPoolMngController.class);

	@Resource(name = "cprtcpEstmReqMngService")
	private CprtcpEstmReqMngService cprtcpEstmReqMngService;
	
	protected static SspPropertyService propertiesService;
	
	@Autowired
	private CprtcpPoolMngService cprtcpPoolMngService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		CprtcpPoolMngController.propertiesService = propertiesService;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectPoolMng
	 * 2. ClassName  : CprtcpPoolMngController.java
	 * 3. Comment    : 협력사 견적 POOL 관리 리스트 조회
	 * 4. 작성자    :
	 * 5. 작성일    : 2023.07.11
	 * </pre>
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-pool-mng.do", method = RequestMethod.POST)
	public NexacroResult selectPoolMng(
		HttpSession session
		, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	) throws Exception {
		NexacroResult result;
		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		if (CommUtil.nvl(coCd).equals("") && admin != null) {
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}
		try {
			result = cprtcpPoolMngService.selectCprtcpPoolReqMng(searchMap);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectCprtcpEstmReqMng", "협력사 POOL 관리 리스트 조회"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPoolMng
	 * 2. ClassName  : CprtcpPoolMngController.java
	 * 3. Comment    : 협력사 견적 POOL 관리 리스트 조회
	 * 4. 작성자    :
	 * 5. 작성일    : 2023.07.11
	 * </pre>
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-pool-mng-hstr.do", method = RequestMethod.POST)
	public NexacroResult selectPoolMngHstr(
		HttpSession session
		, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	) throws Exception {
		NexacroResult result;
		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		if (CommUtil.nvl(coCd).equals("") && admin != null) {
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try {
			result = cprtcpPoolMngService.selectCprtcpPoolReqMngHstr(searchMap);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectCprtcpEstmReqMng", "협력사 POOL 관리 리스트 조회"}, e) {};
		}

		return result;
	}
}