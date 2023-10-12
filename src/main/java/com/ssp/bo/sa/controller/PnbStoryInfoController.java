package com.ssp.bo.sa.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.sa.service.PnbStoryInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title PNB스토리 Controller
 * @package com.ssp.bo.sa.controller
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.30.
 * @version 1.0
 * @see PnbStoryInfoController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.30.	박진원		최초작성
 * 2023.02.17.	87minho		PNB스토리 리뉴얼
 */
@Controller
@RequestMapping("/sa/pnb-story")
public class PnbStoryInfoController {
	private final Logger log = LoggerFactory.getLogger(PnbStoryInfoController.class);

	@Resource(name="pnbStoryInfoService")
	private PnbStoryInfoService pnbStoryInfoService;

	/**
	 * <pre>
	 * 1. MethodName : selectPnbStoryThmList
	 * 2. ClassName : PnbStoryInfoController
	 * 3. Comment : PNB스토리 테마 목록
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-pnb-story-thm-list.do")
	public NexacroResult selectPnbStoryThmList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
	        searchMap = CommonUtil.toCamelCaseMap(searchMap);

			List<Map<String,Object>> list = pnbStoryInfoService.selectPnbStoryThmList(searchMap);						

			result.addDataSet("ds_output1", list);			
		} catch (Exception e ) {
			String message = "PNB스토리 테마 목록 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_14", "PNB스토리 테마 목록"}, e) {};
		}
		
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : updateThmDispSo
	 * 2. ClassName  : PnbStoryInfoController
	 * 3. Comment    : PNB스토리 테마 순서 저장
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.02.17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-thm-disp-so.do")
	public NexacroResult saveThmDispSo(@ParamDataSet(name = "ds_save", required = true) List<Map<String, Object>> paramMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = pnbStoryInfoService.updateThmDispSo(paramMap);
		} catch (Exception e) {
			String message = "PNB스토리 테마 순서 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_14", "PNB스토리 테마 순서 저장"}, e) {};
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveThmInfo
	 * 2. ClassName : PnbStoryInfoController
	 * 3. Comment : PNB스토리 테마 등록
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/save-thm-info.do")
	public NexacroResult saveThmInfo(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> paramInfo, @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> pnbList) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> paramMap = new HashMap<String, Object>(); 
		try {
			paramMap = CommonUtil.toCamelCaseMap(paramInfo);
			
			Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
			
			if (sessionsAdmin != null) {
				paramMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
				paramMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}

            result = pnbStoryInfoService.saveThmInfo(paramMap, pnbList);
            
		} catch (Exception e ) {
			String message = "PNB스토리 테마 등록 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_14_1", "스토리 테마 등록 에러"}, e) {};
		}
		
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : deleteThmInfo
	 * 2. ClassName : PnbStoryInfoController
	 * 3. Comment : PNB스토리 테마 삭제
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2023.02.17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/delete-thm-info.do")
	public NexacroResult deleteThmInfo(@ParamDataSet(name = "ds_delete", required = false) Map<String, Object> paramInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> paramMap = new HashMap<String, Object>(); 
		try {
			paramMap = CommonUtil.toCamelCaseMap(paramInfo);
			
			Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
			
			if (sessionsAdmin != null) {
				paramMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
				paramMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}

            result = pnbStoryInfoService.deleteThmInfo(paramMap);
            
		} catch (Exception e ) {
			String message = "PNB스토리 테마 삭제 에러";
			log.error(message, e);
				throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_14", "스토리 테마 삭제 에러"}, e) {};
		}
		
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : savePnbStoryInfo
	 * 2. ClassName : PnbStoryInfoController
	 * 3. Comment : PNB스토리 등록/수정/삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.30.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/save-pnb-story-info.do")
	public NexacroResult savePnbStoryInfo(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> savePnbStoryInfoMap
			,@ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> savePnbStoryCatgDtlMapList 
			,@ParamDataSet(name = "ds_save3", required = false) List<Map<String, Object>> savePnbStoryCatgPrdDtlMapList) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
			savePnbStoryInfoMap = CommonUtil.toCamelCaseMap(savePnbStoryInfoMap);
			
			Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
			
			if (sessionsAdmin != null) {
				savePnbStoryInfoMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
				savePnbStoryInfoMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}

            result = pnbStoryInfoService.savePnbStoryInfo(savePnbStoryInfoMap, savePnbStoryCatgDtlMapList, savePnbStoryCatgPrdDtlMapList);
		} catch (Exception e ) {
			String message = "PNB스토리 등록/수정/삭제 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_14", "PNB스토리 등록"}, e) {};
		}
		
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPnbStoryCatgPrdList
	 * 2. ClassName : PnbStoryInfoController
	 * 3. Comment : PNB스토리 카테고리 상품 리스트
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.30.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-pnb-story-catg-prd-list.do")
	public NexacroResult selectPnbStoryCatgPrdList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> paramMap = new HashMap<String, Object>();
		try {
			paramMap = CommonUtil.toCamelCaseMap(paramInfo);

			List<Map<String,Object>> pnbCatgDtlList = pnbStoryInfoService.selectPnbStoryCatgDtlList(paramMap);
			List<Map<String,Object>> pnbCatgPrdDtlList = pnbStoryInfoService.selectPnbStoryCatgPrdDtlList(paramMap);

			result.addDataSet("ds_output1", pnbCatgDtlList);
			result.addDataSet("ds_output2", pnbCatgPrdDtlList);
		} catch (Exception e ) {
			String message = "PNB스토리 카테고리 상품 리스트 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_14", "PNB스토리 카테고리 상품 리스트"}, e) {};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : deletePnbStoryInfo
	 * 2. ClassName : PnbStoryInfoController
	 * 3. Comment : PNB스토리 삭제
	 * 4. 작성자 : 박진원
	 * 5. 작성일 : 2022.03.30.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/delete-pnb-story-info.do")
	public NexacroResult deletePnbStoryInfo(@ParamDataSet(name = "ds_delete", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			
			Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
			
			if (sessionsAdmin != null) {
				searchMap.put("regpsnId", sessionsAdmin.get("OPRTR_ID"));
				searchMap.put("updpsnId", sessionsAdmin.get("OPRTR_ID"));
			}

            result = pnbStoryInfoService.deletePnbStoryInfo(searchMap);
		} catch (Exception e ) {
			String message = "PNB스토리 삭제 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_14", "PNB스토리 삭제"}, e) {};
		}
		
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectExcelPnbStoryList
	 * 2. ClassName  : PnbStoryInfoController
	 * 3. Comment    : PNB스토리 엑셀 다운 목록 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.02.17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-pnb-story-excel.do")
	public NexacroResult selectExcelPnbStoryList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {

			result = pnbStoryInfoService.selectExcelPnbStoryList(paramMap);

		} catch (Exception e ) {
			String message = "PNB스토리 엑셀 다운 목록 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_16", "PNB스토리 엑셀 다운 목록 조회"}, e) {};
		}
		return result;
	}
}
