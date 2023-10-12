package com.ssp.bo.sa.controller;


import java.util.HashMap;
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
import com.ssp.bo.sa.service.ExhbnInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 기획전 Controller
 * @package com.ssp.bo.sa.controller
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.04.
 * @version 1.0
 * @see ExhbnInfoController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.04.	박진원		최초작성
 */
@Controller
@RequestMapping("/sa/exhbn")
public class ExhbnInfoController
{
	private final Logger log = LoggerFactory.getLogger(ExhbnInfoController.class);

	@Resource(name="ExhbnInfoService")
	private ExhbnInfoService ExhbnInfoService;

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnInfoList
	 * 2. ClassName : ExhbnInfoController
	 * 3. Comment : 기획전 목록
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-exhbn-info-list.do")
	public NexacroResult selectExhbnInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, 
			@ParamDataSet(name = "ds_searchExhbnOprUnitList", required = false) List<Map<String, Object>> searchExhbnOprUnitMapList, HttpSession session) throws Exception
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
	        	searchMap.put("oprUnitIds", searchExhbnOprUnitMapList);
	        }

			searchMap.put("sesId", new OdOrderComm(session).getSession().get("SES_ID").toString());

			List<Map<String,Object>> list = ExhbnInfoService.selectExhbnInfoList(searchMap);
			int totalCount = ExhbnInfoService.selectExhbnInfoListCount(searchMap);
			
			//SSP-2111 : 엑셀용 기획전 목록 및 상세 조회 (조회한 기획전 목록으로 해당 기획전들의 상세정보를 조회)		
			List<Map<String,Object>> excelList = ExhbnInfoService.selectExhbnInfoDtlForExcel(list);
			
			result.addDataSet("ds_output1", list);
			result.addDataSet("ds_output2", excelList);
			result.addVariable("totalCount", totalCount);
		}
		catch (Exception e )
		{
			String message = "기획전 목록 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_01", "기획전 목록"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveExhbnInfoOrder
	 * 2. ClassName : ExhbnInfoController
	 * 3. Comment : 기획전 순서 저장
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/save-exhbn-info-order.do")
	public NexacroResult saveExhbnInfoOrder(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> saveExhbnInfoMapList) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			Map<String, Object> saveExhbnInfoMap = new HashMap<>();
			Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
			
			if (sessionsAdmin != null)
			{
				saveExhbnInfoMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
				saveExhbnInfoMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}
			
            result = ExhbnInfoService.saveExhbnInfoOrder(saveExhbnInfoMap, saveExhbnInfoMapList);
		}
		catch (Exception e )
		{
			String message = "기획전 순서 저장";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_01", "기획전 순서 저장"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExhbnInfo
	 * 2. ClassName : ExhbnInfoController
	 * 3. Comment : 기획전 상세
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-exhbn-info.do")
	public NexacroResult selectExhbnInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
	        searchMap = CommonUtil.toCamelCaseMap(searchMap);
	        
			List<Map<String,Object>> list1 = ExhbnInfoService.selectExhbnInfo(searchMap);
			List<Map<String,Object>> list2 = ExhbnInfoService.selectExhbnOprUnitList(searchMap);
			List<Map<String,Object>> list3 = ExhbnInfoService.selectExhbnCatgPrdDtlMainList(searchMap);
			List<Map<String,Object>> list4 = ExhbnInfoService.selectExhbnCatgDtlList(searchMap);
			List<Map<String,Object>> list5 = ExhbnInfoService.selectExhbnCatgPrdDtlList(searchMap);

			result.addDataSet("ds_output1", list1);
			result.addDataSet("ds_output2", list2);
			result.addDataSet("ds_output3", list3);
			result.addDataSet("ds_output4", list4);
			result.addDataSet("ds_output5", list5);
		}
		catch (Exception e )
		{
			String message = "기획전 상세 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_03", "기획전 상세"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteExhbnInfo
	 * 2. ClassName : ExhbnInfoController
	 * 3. Comment : 기획전 삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/delete-exhbn-info.do")
	public NexacroResult deleteExhbnInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
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

            result = ExhbnInfoService.deleteExhbnInfo(searchMap);
		}
		catch (Exception e )
		{
			String message = "기획전 삭제 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_03", "기획전 삭제"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveExhbnInfo
	 * 2. ClassName : ExhbnInfoController
	 * 3. Comment : 기획전 등록/수정/삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.04.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/save-exhbn-info.do")
	public NexacroResult saveExhbnInfo(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> saveExhbnInfoMap,
			@ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> saveExhbnOprUnitMapList, 
			@ParamDataSet(name = "ds_save3", required = false) List<Map<String, Object>> saveExhbnCatgPrdDtlMainMapList, 
			@ParamDataSet(name = "ds_save4", required = false) List<Map<String, Object>> saveExhbnCatgDtlMapList, 
			@ParamDataSet(name = "ds_save5", required = false) List<Map<String, Object>> saveExhbnCatgPrdDtlMapList) throws Exception
	{
		NexacroResult result = new NexacroResult();

		try
		{
			saveExhbnInfoMap = CommonUtil.toCamelCaseMap(saveExhbnInfoMap);
			
			Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
			
			if (sessionsAdmin != null)
			{
				saveExhbnInfoMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
				saveExhbnInfoMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}

            result = ExhbnInfoService.saveExhbnInfo(saveExhbnInfoMap, saveExhbnOprUnitMapList, saveExhbnCatgPrdDtlMainMapList, saveExhbnCatgDtlMapList, saveExhbnCatgPrdDtlMapList);
		}
		catch (Exception e )
		{
			String message = "기획전 등록 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_02", "기획전 등록"}, e) {};
		}
		
		return result;
	}
}
