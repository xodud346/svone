package com.ssp.bo.sa.controller;

import java.io.BufferedReader;
import java.sql.Clob;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.sa.service.EvtInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 이벤트 Controller
 * @package com.ssp.bo.sa.controller
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.14.
 * @version 1.0
 * @see EvtInfoController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.14.	박진원		최초작성
 */
@Controller
@RequestMapping("/sa/evt")
public class EvtInfoController
{
	private final Logger log = LoggerFactory.getLogger(EvtInfoController.class);

	@Resource(name="EvtInfoService")
	private EvtInfoService EvtInfoService;

	/**
	 * <pre>
	 * 1. MethodName : selectEvtInfoList
	 * 2. ClassName : EvtInfoController
	 * 3. Comment : 이벤트 목록
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-evt-info-list.do")
	public NexacroResult selectEvtInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, 
			@ParamDataSet(name = "ds_searchEvtOprUnitList", required = false) List<Map<String, Object>> searchEvtOprUnitMapList, HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
	        searchMap = CommonUtil.toCamelCaseMap(searchMap);

	        String sExpsNoticSprCd = StringUtil.getString(searchMap.get("expsNoticSprCd"));
	        // SSP-2971
	        if ("30".equals(sExpsNoticSprCd) && "50".equals(sExpsNoticSprCd)
	        		&& "60".equals(sExpsNoticSprCd) && "70".equals(sExpsNoticSprCd))
	        {
	        	searchMap.put("oprUnitIds", searchEvtOprUnitMapList);
	        }

			searchMap.put("sesId", new OdOrderComm(session).getSession().get("SES_ID").toString());

			List<Map<String,Object>> list = EvtInfoService.selectEvtInfoList(searchMap);
			int totalCount = EvtInfoService.selectEvtInfoListCount(searchMap);

			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		}
		catch (Exception e )
		{
			String message = "이벤트 목록 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_04", "이벤트 목록"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveEvtInfo
	 * 2. ClassName : EvtInfoController
	 * 3. Comment : 이벤트 등록/수정/삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/save-evt-info.do")
	public NexacroResult saveEvtInfo(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> saveEvtInfoMap,
			@ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> saveEvtOprUnitMapList) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			saveEvtInfoMap = CommonUtil.toCamelCaseMap(saveEvtInfoMap);
			
			Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
			
			if (sessionsAdmin != null)
			{
				saveEvtInfoMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
				saveEvtInfoMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}

            result = EvtInfoService.saveEvtInfo(saveEvtInfoMap, saveEvtOprUnitMapList);
		}
		catch (Exception e )
		{
			String message = "이벤트 등록/수정 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_05", "이벤트 등록/수정"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtInfo
	 * 2. ClassName : EvtInfoController
	 * 3. Comment : 이벤트 상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-evt-info.do")
	public NexacroResult selectEvtInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
	        searchMap = CommonUtil.toCamelCaseMap(searchMap);

	        Map<String,Object> list1 = EvtInfoService.selectEvtInfo(searchMap);
			List<Map<String,Object>> list2 = EvtInfoService.selectEvtOprUnitList(searchMap);

			result.addDataSet("ds_output1", list1);
			result.addDataSet("ds_output2", list2);
		}
		catch (Exception e )
		{
			String message = "이벤트 상세 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_06", "이벤트 상세"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteEvtInfo
	 * 2. ClassName : EvtInfoController
	 * 3. Comment : 이벤트 삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/delete-evt-info.do")
	public NexacroResult deleteEvtInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			
			Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
			
			if (sessionsAdmin != null)
			{
				searchMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
				searchMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}

            result = EvtInfoService.deleteEvtInfo(searchMap);
		}
		catch (Exception e )
		{
			String message = "이벤트 삭제 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_06", "이벤트 삭제"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtPrtcDtlsList
	 * 2. ClassName : EvtInfoController
	 * 3. Comment : 이벤트 - 응모형- 참여자목록
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.16.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-evt-prtc-dtls-list.do")
	public NexacroResult selectEvtPrtcDtlsList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, 
			@ParamDataSet(name = "ds_searchMbrIdList", required = false) List<Map<String, Object>> searchMbrIdMapList) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
	        searchMap = CommonUtil.toCamelCaseMap(searchMap);
        	searchMap.put("mbrIds", searchMbrIdMapList);

			List<Map<String,Object>> list = EvtInfoService.selectEvtPrtcDtlsList(searchMap);
			int totalCount = EvtInfoService.selectEvtPrtcDtlsListCount(searchMap);

			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		}
		catch (Exception e )
		{
			String message = "이벤트 - 응모형- 참여자목록";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_18", "이벤트 - 응모형- 참여자목록"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveEvtPrtcDtls
	 * 2. ClassName : EvtInfoController
	 * 3. Comment : 이벤트 - 응모형- 참여자목록 댓글 공개 여부 수정
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.16.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/save-evt-prtc-dtls.do")
	public NexacroResult saveEvtPrtcDtls(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> saveEvtPrtcDtlsMapList) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
            result = EvtInfoService.saveEvtPrtcDtls(saveEvtPrtcDtlsMapList);
		}
		catch (Exception e )
		{
			String message = "이벤트 - 응모형- 참여자목록 댓글 공개 여부 수정";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_18", "이벤트 - 응모형- 참여자목록 댓글 공개 여부 수정"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtPrtcDtlsStampList
	 * 2. ClassName : EvtInfoController
	 * 3. Comment : 이벤트 - 스템프형- 참여자목록
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.16.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-evt-prtc-dtls-stamp-list.do")
	public NexacroResult selectEvtPrtcDtlsStampList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, 
			@ParamDataSet(name = "ds_searchMbrIdList", required = false) List<Map<String, Object>> searchMbrIdMapList) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
	        searchMap = CommonUtil.toCamelCaseMap(searchMap);
        	searchMap.put("mbrIds", searchMbrIdMapList);

			List<Map<String,Object>> list = EvtInfoService.selectEvtPrtcDtlsStampList(searchMap);
			int totalCount = EvtInfoService.selectEvtPrtcDtlsStampListCount(searchMap);

			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		}
		catch (Exception e )
		{
			String message = "이벤트 - 스템프형- 참여자목록";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_19", "이벤트 - 스템프형- 참여자목록"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtPrtcDtlsStampAllList
	 * 2. ClassName : EvtInfoController
	 * 3. Comment : 이벤트 - 스템프형- 참여자목록 (전체)
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.16.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-evt-prtc-dtls-stamp-all-list.do")
	public NexacroResult selectEvtPrtcDtlsStampAllList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
	        searchMap = CommonUtil.toCamelCaseMap(searchMap);

			List<Map<String,Object>> list = EvtInfoService.selectEvtPrtcDtlsStampAllList(searchMap);

			result.addDataSet("ds_output1", list);
		}
		catch (Exception e )
		{
			String message = "이벤트 - 스템프형- 참여자목록 (전체)";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_19", "이벤트 - 스템프형- 참여자목록 (전체)"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectEvtInfoMbrList
	 * 2. ClassName : EvtInfoController
	 * 3. Comment : 이벤트 목록 (회원)
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-evt-info-mbr-list.do")
	public NexacroResult selectEvtInfoMbrList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, 
			@ParamDataSet(name = "ds_searchEvtOprUnitList", required = false) List<Map<String, Object>> searchEvtOprUnitMapList) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
	        searchMap = CommonUtil.toCamelCaseMap(searchMap);

			List<Map<String,Object>> list = EvtInfoService.selectEvtInfoMbrList(searchMap);
			int totalCount = EvtInfoService.selectEvtInfoMbrListCount(searchMap);

			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		}
		catch (Exception e )
		{
			String message = "이벤트 목록 (회원)";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_MA_55", "이벤트 목록 (회원)"}, e) {};
		}
		
		return result;
	}
}
