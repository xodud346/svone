/*------------------------------------------------------------------------------
 * NAME : OnlyPrdProcStbController.java
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
import com.ssp.bo.rd.service.OnlyPrdProcStbService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title   OnlyPrdProcStbController
 * @@desc   전용상품 처리대기 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.06
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/only-prd-proc-stb")
public class OnlyPrdProcStbController {
	private Logger logger = LoggerFactory.getLogger(OnlyPrdProcStbController.class);

	@Resource(name = "onlyPrdProcStbService")
	private OnlyPrdProcStbService onlyPrdProcStbService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		OnlyPrdProcStbController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectOnlyPrdProcStb
	 * 2. ClassName  : OnlyPrdProcStbController.java
	 * 3. Comment    : 전용상품 처리대기 리스트 조회 (selectOnlyPrdProcStb)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.06
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-only-prd-proc-stb.do", method = RequestMethod.POST)
	public NexacroResult selectOnlyPrdProcStb(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap,HttpSession session) throws Exception
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
		
		searchMap.put("SES_ID", session.getId());
		
		try
		{
			result = onlyPrdProcStbService.selectOnlyPrdProcStb(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectOnlyPrdProcStb", "전용상품 처리대기 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveOnlyPrdBssSalsprcProc
	 * 2. ClassName  : OnlyPrdPrcMngController.java
	 * 3. Comment    : 전용상품처리대기 기준판매가 수정 (saveOnlyPrdBssSalsprcProc)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.10.11
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-only-prd-bss-salsprc-proc.do", method = RequestMethod.POST)
	public NexacroResult saveOnlyPrdBssSalsprcProc(@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap
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
			result = onlyPrdProcStbService.saveOnlyPrdBssSalsprcProc(saveMap,userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveOnlyPrdBssSalsprcProc", "전용상품처리대기 기준판매가 수정" }, e) { };
		}

		return result;
	}

	
}
