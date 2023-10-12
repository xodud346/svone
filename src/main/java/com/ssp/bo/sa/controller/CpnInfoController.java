package com.ssp.bo.sa.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.sa.service.CpnInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title 쿠폰 Controller
 * @package com.ssp.bo.sa.controller
 * <pre>
 * @author
 * @since   2022.03.17.
 * @version 1.0
 * @see CpnInfoController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.17.	박진원		최초작성
 */

@Controller
@RequestMapping("/sa/cpn")
public class CpnInfoController
{
	private final Logger log = LoggerFactory.getLogger(CpnInfoController.class);

	@Autowired
	private CpnInfoService cpnInfoService;

	/**
	 * <pre>
	 * 1. MethodName : selectCpnInfoList
	 * 2. ClassName  : CpnInfoController.java
	 * 3. Comment    : 쿠폰 목록
	 * 4. 작성자       : 박진원
	 * 5. 작성일       : 2022.03.17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-cpn-info-list.do")
	public NexacroResult selectCpnInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			searchMap = CommonUtil.toCamelCaseMap(searchMap);

			List<Map<String,Object>> list = cpnInfoService.selectCpnInfoList(searchMap);
			int totalCount = cpnInfoService.selectCpnInfoListCount(searchMap);

			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		}
		catch (Exception e )
		{
			String message = "쿠폰 목록 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_07", "쿠폰 목록"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectCpnPubcUseDtlsList
	 * 2. ClassName  : CpnInfoController.java
	 * 3. Comment    : 쿠폰 발행 내역 목록
	 * 4. 작성자       : 박진원
	 * 5. 작성일       : 2022.03.17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-cpn-pubc-use-dtls-list.do")
	public NexacroResult selectCpnPubcUseDtlsList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			searchMap = CommonUtil.toCamelCaseMap(searchMap);

			List<Map<String,Object>> list = cpnInfoService.selectCpnPubcUseDtlsList(searchMap);
			int totalCount = cpnInfoService.selectCpnPubcUseDtlsListCount(searchMap);

			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		}
		catch (Exception e )
		{
			String message = "쿠폰 발행 내역 목록";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_10", "쿠폰 발행 내역 목록"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectCpnPubcMbrList
	 * 2. ClassName  : CpnInfoController.java
	 * 3. Comment    : 쿠폰 발급 대상 목록
	 * 4. 작성자       : 박진원
	 * 5. 작성일       : 2022.03.21.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-cpn-pubc-mbr-list.do")
	public NexacroResult selectCpnPubcMbrList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			searchMap = CommonUtil.toCamelCaseMap(searchMap);

			List<Map<String,Object>> list = cpnInfoService.selectCpnPubcMbrList(searchMap);

			result.addDataSet("ds_output1", list);
		}
		catch (Exception e )
		{
			String message = "쿠폰 발급 대상 목록";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_20", "쿠폰 발급 대상 목록"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveCpnInfo
	 * 2. ClassName  : CpnInfoController.java
	 * 3. Comment    : 쿠폰 등록/수정/삭제
	 * 4. 작성자       : 박진원
	 * 5. 작성일       : 2022.03.22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/save-cpn-info.do")
	public NexacroResult saveCpnInfo(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> saveCpnInfoMap,
			@ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> saveCpnPubcUseDtlsMapList,
			@ParamDataSet(name = "ds_save3", required = false) List<Map<String, Object>> saveCpnAplyTgtPrd20MapList,
			@ParamDataSet(name = "ds_save4", required = false) List<Map<String, Object>> saveCpnAplyTgtPrd30MapList,
			@ParamDataSet(name = "ds_save5", required = false) List<Map<String, Object>> saveCpnExcptTgtPrd20MapList,
			@ParamDataSet(name = "ds_save6", required = false) List<Map<String, Object>> saveCpnExcptTgtPrd30MapList) throws Exception
	{
		NexacroResult result = new NexacroResult();
		Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();

		try
		{
			saveCpnInfoMap = CommonUtil.toCamelCaseMap(saveCpnInfoMap);
			
			if (sessionsAdmin != null) {
				saveCpnInfoMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
				saveCpnInfoMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}

			result = cpnInfoService.saveCpnInfo(saveCpnInfoMap, saveCpnPubcUseDtlsMapList, saveCpnAplyTgtPrd20MapList, saveCpnAplyTgtPrd30MapList, saveCpnExcptTgtPrd20MapList, saveCpnExcptTgtPrd30MapList);
		}
		catch (Exception e )
		{
			String message = "쿠폰 등록/수정/삭제 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_09", "쿠폰 등록/수정/삭제"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectCpnInfo
	 * 2. ClassName  : CpnInfoController.java
	 * 3. Comment    : 쿠폰 상세
	 * 4. 작성자       : 박진원
	 * 5. 작성일       : 2022.03.22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-cpn-info.do")
	public NexacroResult selectCpnInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			searchMap = CommonUtil.toCamelCaseMap(searchMap);

			Map<String,Object> info1 = cpnInfoService.selectCpnInfo(searchMap);
			List<Map<String,Object>> list2 = cpnInfoService.selectCpnPubcUseDtlsInfoList(searchMap);
			List<Map<String,Object>> list3 = cpnInfoService.selectCpnAplyTgtPrd20List(searchMap);
			List<Map<String,Object>> list4 = cpnInfoService.selectCpnAplyTgtPrd30List(searchMap);
			List<Map<String,Object>> list5 = cpnInfoService.selectCpnExcptTgtPrd20List(searchMap);
			List<Map<String,Object>> list6 = cpnInfoService.selectCpnExcptTgtPrd30List(searchMap);

			result.addDataSet("ds_output1", info1);
			result.addDataSet("ds_output2", list2);
			result.addDataSet("ds_output3", list3);
			result.addDataSet("ds_output4", list4);
			result.addDataSet("ds_output5", list5);
			result.addDataSet("ds_output6", list6);
		}
		catch (Exception e )
		{
			String message = "쿠폰 상세 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_09", "쿠폰 상세"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectCpnInfoPopupList
	 * 2. ClassName  : CpnInfoController.java
	 * 3. Comment    : 쿠폰 - 목록 - 쿠폰설정 팝업
	 * 4. 작성자       : 박진원
	 * 5. 작성일       : 2022.03.23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-cpn-info-popup-list.do")
	public NexacroResult selectCpnInfoPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			searchMap = CommonUtil.toCamelCaseMap(searchMap);

			List<Map<String,Object>> list = cpnInfoService.selectCpnInfoPopupList(searchMap);

			result.addDataSet("ds_output1", list);
		}
		catch (Exception e )
		{
			String message = "쿠폰 - 목록 - 쿠폰설정 팝업 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_PP_29", "쿠폰 - 목록 - 쿠폰설정 팝업"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectCpnInfoMbrList
	 * 2. ClassName  : CpnInfoController.java
	 * 3. Comment    : 쿠폰 목록 (회원)
	 * 4. 작성자       : 박진원
	 * 5. 작성일       : 2022.03.23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-cpn-info-mbr-list.do")
	public NexacroResult selectCpnInfoMbrList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			searchMap = CommonUtil.toCamelCaseMap(searchMap);

			List<Map<String,Object>> list = cpnInfoService.selectCpnInfoMbrList(searchMap);
			int totalCount = cpnInfoService.selectCpnInfoMbrListCount(searchMap);
			Map<String,Object> cpnCnt = cpnInfoService.selectCpnInfoMbrCount(searchMap);

			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
			result.addDataSet("ds_output2", cpnCnt);
		}
		catch (Exception e )
		{
			String message = "쿠폰 목록 (회원) 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_MA_54", "쿠폰 목록 (회원)"}, e) {};
		}

		return result;
	}
}
