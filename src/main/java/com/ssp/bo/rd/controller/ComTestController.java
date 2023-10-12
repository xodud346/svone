/*------------------------------------------------------------------------------
 * NAME : ComTestController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.09  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.ComTestService;
import com.ssp.core.util.StringUtil;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 *
 * @title   ComTestController
 * @@desc   상품전송정보 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.09
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/com-test")
public class ComTestController {
	private Logger logger = LoggerFactory.getLogger(ComTestController.class);

	@Resource(name = "comTestService")
	private ComTestService comTestService;

	/**
	 * <pre>
	 * 1. MethodName : selectComTest
	 * 2. ClassName  : ComTestController.java
	 * 3. Comment    : 상품전송정보 리스트 조회 (selectComTest)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.09
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-com-test.do", method = RequestMethod.POST)
	public NexacroResult selectComTest(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}
		
		SessionsAdmin.setSessionAdminLocal();
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals(""))
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = comTestService.selectComTest(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectComTest", "상품전송정보 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveComTest
	 * 2. ClassName  : ComTestController.java
	 * 3. Comment    : 상품전송정보 리스트 저장 (saveComTest)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.09
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-com-test.do", method = RequestMethod.POST)
	public NexacroResult saveComTest(HttpServletRequest request
	                                     , @ParamDataSet(name = "ds_prdSave", required = false) List<Map<String, Object>> prdMap) throws Exception 
	{
		NexacroResult result;

		try
		{
			Admin userInfo = SessionsAdmin.getSessionAdmin(request);

			result = comTestService.saveComTest(prdMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveComTest", "상품전송정보 저장" }, e) { };
		}

		return result;
	}
	
	@RequestMapping(value = "/select-com-test-prd.do", method = RequestMethod.POST)
	public NexacroResult selectComTestPrd(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			result = comTestService.selectComTestprd(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectComTest", "상품전송정보 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveComTest
	 * 2. ClassName  : ComTestController.java
	 * 3. Comment    : 상품전송정보 리스트 저장 (saveComTest)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.09
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-com-test-batch.do", method = RequestMethod.POST)
	public NexacroResult saveComTestBatch(HttpServletRequest request
	                                     , @ParamDataSet(name = "ds_prdSave", required = false) List<Map<String, Object>> prdMap) throws Exception 
	{
		NexacroResult result;

		try
		{
			Admin userInfo = SessionsAdmin.getSessionAdmin(request);

			result = comTestService.saveComTestBatch(prdMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveComTest", "상품전송정보 저장" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveComTest
	 * 2. ClassName  : ComTestController.java
	 * 3. Comment    : 상품전송정보 리스트 저장 (saveComTest)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.09
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-com-test-only.do", method = RequestMethod.POST)
	public NexacroResult saveComTestOnly(HttpServletRequest request
	                                     , @ParamDataSet(name = "ds_prdSave", required = false) List<Map<String, Object>> prdMap) throws Exception 
	{
		NexacroResult result;

		try
		{
			Admin userInfo = SessionsAdmin.getSessionAdmin(request);

			result = comTestService.saveComTestOnly(prdMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveComTest", "상품전송정보 저장" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveComTest
	 * 2. ClassName  : ComTestController.java
	 * 3. Comment    : 상품전송정보 리스트 저장 (saveComTest)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.09
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-com-test-1303.do", method = RequestMethod.POST)
	public NexacroResult saveComTest1303(HttpServletRequest request
	                                     , @ParamDataSet(name = "ds_prdSave", required = false) List<Map<String, Object>> prdMap) throws Exception 
	{
		NexacroResult result;

		try
		{
			Admin userInfo = SessionsAdmin.getSessionAdmin(request);

			result = comTestService.saveComTest1303(prdMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveComTest", "상품전송정보 저장" }, e) { };
		}

		return result;
	}
}