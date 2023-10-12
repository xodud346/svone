package com.ssp.bo.sa.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.sa.service.PrePkgInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title 프리패키지 Controller
 * @package com.ssp.bo.sa.controller
 * </pre>
 * 
 * @author 박진원
 * @since 2022.02.25.
 * @version 1.0
 * @see PrePkgInfoController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.25.	박진원		최초작성
 */
@Controller
@RequestMapping("/sa/pre-pkg")
public class PrePkgInfoController
{
	private final Logger log = LoggerFactory.getLogger(PrePkgInfoController.class);

	@Resource(name="PrePkgInfoService")
	private PrePkgInfoService PrePkgInfoService;

	/**
	 * 프리패키지 목록
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-pre-pkg-info-list.do")
	public NexacroResult selectPrePkgInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			
			List<Map<String,Object>> list = PrePkgInfoService.selectPrePkgInfoList(searchMap);
			int totalCount = PrePkgInfoService.selectPrePkgInfoListCount(searchMap);
			
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		}
		catch (Exception e) {
			String message = "프리패키지 목록 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_21", "프리패키지 목록"}, e) {};
		}
		
		return result;
	}
	
	/**
	 * 프리패키지 엑셀다운로드
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-pre-pkg-excel-list.do")
	public NexacroResult selectPrePkgExcelList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			
			List<Map<String,Object>> list = PrePkgInfoService.selectPrePkgInfoList(searchMap);
			int totalCount = PrePkgInfoService.selectPrePkgInfoListCount(searchMap);
			
			//SSP-2111 : 엑셀용 프리패키지 목록 및 상세 조회 (조회한 프리패키지 목록으로 해당 프리패키지 상세정보를 조회)
			List<Map<String,Object>> excelList = PrePkgInfoService.selectPrePkgInfoDtlForExcel(list);

			//result.addDataSet("ds_output1", list);
			result.addDataSet("ds_output2", excelList);
			result.addVariable("totalCount", totalCount);
		}
		catch (Exception e){
			String message = "프리패키지 목록 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_21", "프리패키지 목록"}, e) {};
		}
		
		return result;
	}
	
	/**
	 * 프리패키지 상세
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-pre-pkg-info.do")
	public NexacroResult selectPrePkgInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			
			List<Map<String,Object>> list1 = PrePkgInfoService.selectPrePkgInfo(searchMap);
			List<Map<String,Object>> list2 = PrePkgInfoService.selectPrePkgIddtDtlList(searchMap);
			List<Map<String,Object>> list3 = PrePkgInfoService.selectPrePkgCatgDtlList(searchMap);
			List<Map<String,Object>> list4 = PrePkgInfoService.selectPrePkgPrdDtlList(searchMap);

			result.addDataSet("ds_output1", list1);
			result.addDataSet("ds_output2", list2);
			result.addDataSet("ds_output3", list3);
			result.addDataSet("ds_output4", list4);
			
		} catch (Exception e) {
			String message = "프리패키지 상세 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_23", "프리패키지 상세"}, e) {};
		}
		
		return result;
	}

	/**
	 * 프리패키지 저장
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/save-pre-pkg-info.do")
	public NexacroResult savePrePkgInfo(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> savePrePkgInfoMap
										, @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> savePrePkgIddtDtlMapList
										, @ParamDataSet(name = "ds_save3", required = false) List<Map<String, Object>> savePrePkgCatgDtlMapList
										, @ParamDataSet(name = "ds_save4", required = false) List<Map<String, Object>> savePrePkgPrdDtlMapList
										) throws Exception {
		
		NexacroResult result = new NexacroResult();

		try {
			savePrePkgInfoMap = CommonUtil.toCamelCaseMap(savePrePkgInfoMap);
			
			Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
			
			if (sessionsAdmin != null) {
				savePrePkgInfoMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
				savePrePkgInfoMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}

            result = PrePkgInfoService.savePrePkgInfo(savePrePkgInfoMap, savePrePkgIddtDtlMapList, savePrePkgCatgDtlMapList, savePrePkgPrdDtlMapList);
		}
		catch (Exception e) {
			String message = "프리패키지 등록 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_23", "프리패키지 등록"}, e) {};
		}
		
		return result;
	}
	
	/**
	 * 프리패키지 삭제
	 */
	@RequestMapping(value = "/delete-pre-pkg-info.do")
	public NexacroResult deletePrePkgInfo(@ParamDataSet(name = "ds_delete", required = true) Map<String, Object> deleteMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = PrePkgInfoService.deletePrePkgInfo(deleteMap);
		} catch (Exception e) {
			String message = "배너 삭제 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_12", "배너 삭제"}, e) {};
		}

		return result;
	}
	
	/**
	 *  순서 저장
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/update-exps-so.do")
	public NexacroResult updateExpsSo(@ParamDataSet(name = "ds_save1", required = false) List<Map<String, Object>> saveList
									, @ParamDataSet(name = "ds_save2", required = false) Map<String, Object> typeMap) throws Exception {
		NexacroResult result = new NexacroResult();

		try {								
			result = PrePkgInfoService.updatePrePkgExpsSo(saveList, typeMap);
		} catch (Exception e) {
			String message = "프리패키지 목록, 등록, 상세 순서 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_23", "프리패키지 목록, 등록, 상세"}, e) {};
		}
		
		return result;
	}
	
}
