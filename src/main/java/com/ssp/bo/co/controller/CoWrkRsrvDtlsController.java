package com.ssp.bo.co.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.collections.map.HashedMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.co.service.CoWrkRsrvDtlsService;
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
 * @since 2022.05.17
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/co")
public class CoWrkRsrvDtlsController {
	private Logger logger = LoggerFactory.getLogger(CoWrkRsrvDtlsController.class);

	@Autowired
	private CoWrkRsrvDtlsService coWrkRsrvDtlsService;

	/**
	 * <pre>
	 * 1. MethodName : selectWrkRsrvDtlsList
	 * 2. ClassName  : CoWrkRsrvDtlsController.java
	 * 3. Comment    : 작업예약관리 목록 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.05.17
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-wrk-rsrv-dtls-list.do")
	public NexacroResult selectWrkRsrvDtlsList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);   
			int totalCount = coWrkRsrvDtlsService.selectWrkRsrvDtlsListCount(searchMap);
			List<Map<String, Object>> list = coWrkRsrvDtlsService.selectWrkRsrvDtlsList(searchMap);
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "작업예약관리 목록 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_35",message}, ne);
		}
		return result;

	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectWrkRsrvDtlsDetail
	 * 2. ClassName  : CoWrkRsrvDtlsController.java
	 * 3. Comment    : 작업예약관리 상세 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.05.17
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-wrk-rsrv-dtls-detail.do")
	public NexacroResult selectWrkRsrvDtlsDetail(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);  
			Map<String, Object> list = coWrkRsrvDtlsService.selectWrkRsrvDtlsDetail(searchMap);
			result.addDataSet("ds_output1", list);
		} catch (Exception ne) {
			String message = "작업예약관리 상세 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_37",message}, ne);
		}
		return result;

	}

	/**
	 * <pre>
	 * 1. MethodName : saveWrkRsrvDtls
	 * 2. ClassName  : CoWrkRsrvDtlsController.java
	 * 3. Comment    : 작업예약관리 등록/수정/삭제
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.05.17
	 * </pre>
	 *
	 * @param  list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-select-wrk-rsrv-dtls.do")
	public NexacroResult saveWrkRsrvDtls(HttpServletRequest request,
			@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> list) throws Exception {
		NexacroResult result = new NexacroResult();	
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			Map<String, Object> rtnMap = coWrkRsrvDtlsService.saveWrkRsrvDtls(list, admin);
			result.addVariable("wrkSeq", rtnMap.get("wrkSeq"));
			result.addVariable("rsrvPgmId", rtnMap.get("rsrvPgmId"));
		} catch (MessageException e) {
			String message = "작업예약관리 저장 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_36", message }, e);
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectWrkRsrvPgmMetaList
	 * 2. ClassName  : CoWrkRsrvDtlsController.java
	 * 3. Comment    : 작업예약관리 - 프로그램 목록 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.05.17
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-wrk-rsrv-pgm-meta-list.do")
	public NexacroResult selectWrkRsrvPgmMetaList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);   
			List<Map<String, Object>> list = coWrkRsrvDtlsService.selectWrkRsrvPgmMetaList(searchMap);
			result.addDataSet("ds_output1", list);
		} catch (Exception ne) {
			String message = "작업예약관리 프로그램 목록 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_35",message}, ne);
		}
		return result;

	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectWrkRsrvDtlsVaild
	 * 2. ClassName  : CoWrkRsrvDtlsController.java
	 * 3. Comment    : 작업예약관리 유효성검사
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.07.27
	 * </pre>
	 *
	 * @param  list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-wrk-rsrv-dtls-vaild.do")
	public NexacroResult selectWrkRsrvDtlsVaild(HttpServletRequest request,
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();	
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);   
			int count = coWrkRsrvDtlsService.selectWrkRsrvDtlsVaildCount(searchMap);
			Map<String, Object> map = new HashMap() ;
			map.put("VAILD_CNT", count);
			result.addDataSet("ds_output1", map);
		} catch (MessageException e) {
			String message = "작업예약관리 벨리데이션 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_36", message }, e);
		}

		return result;
	}

}
