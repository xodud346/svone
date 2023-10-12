package com.ssp.bo.sa.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.sa.service.SaComService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title 영업마케팅 공통 Controller
 * @package com.ssp.bo.sa.controller
 * <pre>
 *
 * @author 87minho
 * @since 2022.03.18.
 * @version 1.0
 * @see SaComController
 * =================== 변경 내역 ==================
 * 날짜			변경자	내용
 * ------------------------------------------------
 * 2022.03.18.	87minho	최초작성
 * 2022.04.11.	박진원	상품, 운영단위 벨리데이션 체크
 */
@Controller
@RequestMapping("/sa/com")
public class SaComController
{
	private final Logger logger = LoggerFactory.getLogger(SaComController.class);

	@Autowired
	private SaComService saComService;

	/**
	 *
	 * <pre>
	 * 1. MethodName : singlecFileUpload
	 * 2. ClassName : SaComController.java
	 * 3. Comment : 단일 파일 업로드
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2022.03.18.
	 * </pre>
	 *
	 */
	@RequestMapping("/singlec-file-upload.do")
	public NexacroResult singlecFileUpload(HttpServletRequest request) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			result = saComService.singleFileUpload(request);

		}
		catch (Exception e )
		{
			String message = "단일 파일 업로드 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "singlecFileUpload", message}, e);
		}

		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : fileUpload
	 * 2. ClassName : SaComController.java
	 * 3. Comment : 파일 업로드
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2022.03.21.
	 * </pre>
	 *
	 */
	@RequestMapping("/file-upload.do")
	public NexacroResult fileUpload(HttpServletRequest request) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			result = saComService.fileUpload(request);

		}
		catch(Exception e )
		{
			String message = "파일 업로드 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "fileUpload", message}, e);
		}

		return result;
	}










	/**
	 * <pre>
	 * 1. MethodName : selectPrdIdCheckList
	 * 2. ClassName : SaComController
	 * 3. Comment : 상품ID 유효성 검사
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.04.11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-prd-id-check-list.do")
	public NexacroResult selectPrdIdCheckList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, @ParamDataSet(name = "ds_searchPrdIdCheckList", required = false) List<Map<String, Object>> searchPrdIdCheckMapList) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			searchMap = CommonUtil.toCamelCaseMap(searchMap);

			searchMap.put("prdIdChecks", searchPrdIdCheckMapList);

			// 상품ID 유효성 검사
			List<Map<String,Object>> selectPrdIdCheckList = saComService.selectPrdIdCheckList(searchMap, searchPrdIdCheckMapList);

			result.addDataSet("ds_output1", selectPrdIdCheckList);
		}
		catch (Exception e )
		{
			String message = "상품ID 유효성 검사";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "selectPrdIdCheckList", "상품ID 유효성 검사"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectOprUnitCheckList
	 * 2. ClassName : SaComController
	 * 3. Comment : 운영단위ID 유효성 검사
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.04.12.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-opr-unit-check-list.do")
	public NexacroResult selectOprUnitCheckList(@ParamDataSet(name = "ds_searchOprUnitCheckList", required = false) List<Map<String, Object>> ds_searchOprUnitCheckList) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			Map<String, Object> searchMap = new HashMap<>();

			searchMap.put("oprUnitChecks", ds_searchOprUnitCheckList);

			// 운영단위ID 유효성 검사
			List<Map<String,Object>> selectOprUnitCheckList = saComService.selectOprUnitCheckList(searchMap, ds_searchOprUnitCheckList);

			result.addDataSet("ds_output1", selectOprUnitCheckList);
		}
		catch (Exception e )
		{
			String message = "운영단위ID 유효성 검사";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "selectOprUnitCheckList", "운영단위ID 유효성 검사"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPrdClcdCheckList
	 * 2. ClassName : SaComController
	 * 3. Comment : 상품군ID 유효성 검사
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2022.04.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-prd-clcd-check-list.do")
	public NexacroResult selectPrdClcdCheckList(@ParamDataSet(name = "ds_searchPrdClcdCheckList", required = false) List<Map<String, Object>> searchPrdClcdCheckMapList) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			Map<String, Object> searchMap = new HashMap<>();

			//searchMap.put("prdIdChecks", searchPrdClcdCheckMapList);

			// 상품군ID 유효성 검사
			List<Map<String,Object>> selectPrdClcdCheckList = saComService.selectPrdClcdCheckList(searchMap, searchPrdClcdCheckMapList);

			result.addDataSet("ds_output1", selectPrdClcdCheckList);
		}
		catch (Exception e )
		{
			String message = "상품군ID 유효성 검사";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "selectPrdClcdCheckList", "상품군ID 유효성 검사"}, e) {};
		}

		return result;
	}







}
