package com.ssp.bo.co.controller;

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
import com.ssp.core.co.service.CoExcelUpldDtlsInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;


/**
 * <pre>
 * 
 * @title
 * @package com.serveone.co.service.controller
 * 
 *          <pre>
 * @author
 * @since 2022.03.18
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/co")
public class CoExcelUpldDtlsInfoController {
	private Logger logger = LoggerFactory.getLogger(CoExcelUpldDtlsInfoController.class);

	@Autowired
	private CoExcelUpldDtlsInfoService coExcelUpldDtlsInfoService;

	/**
	 * <pre>
	 * 1. MethodName : selectExcelUpldDtlsInfoList
	 * 2. ClassName  : CoExcelUpldDtlsInfoController.java
	 * 3. Comment    : 엑셀업로드용양식관리 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.18
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-excel-upld-dtls-info-list.do")
	public NexacroResult selectExcelUpldDtlsInfoList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			int totalCount = coExcelUpldDtlsInfoService.selectExcelUpldDtlsInfoListCount(searchMap);
			List<Map<String, Object>> list = coExcelUpldDtlsInfoService.selectExcelUpldDtlsInfoList(searchMap);
			result.addVariable("totalCount", totalCount);
			result.addDataSet("ds_output1", list);
		} catch (Exception ne) {
			String message = "엑셀업로드용양식관리 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_20", message }, ne);
		}
		return result;

	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectExcelUpldDtlsInfoDetail
	 * 2. ClassName  : CoExcelUpldDtlsInfoController.java
	 * 3. Comment    : 엑셀업로드용양식관리 상세 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.18
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-excel-upld-dtls-info-detail.do")
	public NexacroResult selectExcelUpldDtlsInfoDetail(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			Map<String, Object> rtnMap = coExcelUpldDtlsInfoService.selectExcelUpldDtlsInfoDetail(searchMap);
			result.addDataSet("ds_output1", rtnMap);
		} catch (Exception ne) {
			String message = "엑셀업로드용양식관리 상세 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_24", message}, ne);
		}
		return result;

	}

	/**
	 * <pre>
	 * 1. MethodName : saveExcelUpldDtlsInfo
	 * 2. ClassName  : CoExcelUpldDtlsInfoController.java
	 * 3. Comment    : 엑셀업로드용양식관리 등록/수정
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.18
	 * </pre>
	 *
	 * @param  list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-excel-upld-dtls-info.do")
	public NexacroResult saveExcelUpldDtlsInfo(HttpServletRequest request,
			@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> list) throws Exception {
		NexacroResult result = new NexacroResult();	
		try {
			Map<String, Object> saveMap = new HashMap<>();
			
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			saveMap.put("updpsnId", admin.get("OPRTR_ID"));
			saveMap.put("regpsnId", admin.get("OPRTR_ID"));
			coExcelUpldDtlsInfoService.saveExcelUpldDtlsInfo(list, saveMap);
		} catch ( MessageException e ) {
			String message = "엑셀업로드용양식관리 저장 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CN_24", message}, e);
		}

		return result;
	}

	
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : ExcelUpldDtlsFileUpload
	 * 2. ClassName : CoExcelUpldDtlsInfoController
	 * 3. Comment : 첨부파일 저장
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.18
	 * </pre>
	 *
	 */
	@RequestMapping("/excel-upld-dtls-file-upload.do")
	public NexacroResult excelUpldDtlsFileUpload(HttpServletRequest request) throws Exception {
		new NexacroResult();
		NexacroResult result = new NexacroResult();
		try {
		    Map<String, Object> resultMap = coExcelUpldDtlsInfoService.excelUpldDtlsFileUpload(request);
			result.addDataSet("ds_output1", resultMap);
		} catch ( MessageException e ) {
			String message = "엑셀업로드용양식관리 파일 업로드 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CN_24", message}, e);	
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : deleteExcelUpldDtlsInfo
	 * 2. ClassName  : CoExcelUpldDtlsInfoController.java
	 * 3. Comment    : 엑셀업로드용양식관리 관리 삭제
	 * 4. 작성자       : 
	 * 5. 작성일       : 
	 * </pre>
	 *
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/delete-excel-upld-dtls-info-list.do")
	public NexacroResult deleteExcelUpldDtlsInfo(HttpServletRequest request,
			@ParamDataSet(name = "ds_delete", required = false) List<Map<String, Object>> list) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			coExcelUpldDtlsInfoService.deleteExcelUpldDtlsInfo(list);
		} catch (Exception ne) {
			String message = "엑셀업로드용양식관리 관리 삭제 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_20", message}, ne);
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectExcelPgmIdCheck
	 * 2. ClassName  : CoExcelUpldDtlsInfoController.java
	 * 3. Comment    : 엑셀업로드용양식관리 프로그램ID 중복체크
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.05.04
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-excel-pgm-id-check.do")
	public NexacroResult selectExcelPgmIdCheck(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			List<Map<String, Object>> list = coExcelUpldDtlsInfoService.selectExcelPgmIdCheck(searchMap);
			result.addDataSet("ds_output1", list);
		} catch (Exception ne) {
			String message = "엑셀업로드용양식관리 저장 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_24", message }, ne);
		}
		return result;

	}

}
