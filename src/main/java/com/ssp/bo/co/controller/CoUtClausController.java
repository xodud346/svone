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
import com.ssp.core.co.service.CoUtClausService;
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
 * @since 2022.02.22
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/co/ut-claus")
public class CoUtClausController {
	private Logger logger = LoggerFactory.getLogger(CoUtClausController.class);

	@Autowired
	private CoUtClausService coUtClausService;

	/**
	 * <pre>
	 * 1. MethodName : selectUtClausList
	 * 2. ClassName  : CoUtClausController.java
	 * 3. Comment    : 약관 관리 목록 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.02.22
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-ut-claus-list.do")
	public NexacroResult selectUtClausList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);   
			int totalCount = coUtClausService.selectUtClausListCount(searchMap);
			List<Map<String, Object>> list = coUtClausService.selectUtClausList(searchMap);
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "약관 관리 목록 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_CN_14",message}, ne);
		}
		return result;

	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectUtClausListDetail
	 * 2. ClassName  : CoUtClausController.java
	 * 3. Comment    : 약관관리 상세 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.02.22
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-ut-claus-list-detail.do")
	public NexacroResult selectUtClausListDetail(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);  
			Map<String, Object> list = coUtClausService.selectUtClausListDetail(searchMap);
			result.addDataSet("ds_output1", list);
		} catch (Exception ne) {
			String message = "약관관리 상세 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_CN_16",message}, ne);
		}
		return result;

	}

	/**
	 * <pre>
	 * 1. MethodName : saveUtClausList
	 * 2. ClassName  : CoUtClausController.java
	 * 3. Comment    : 약관관리 등록/수정/삭제
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.02.22
	 * </pre>
	 *
	 * @param  list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-ut-claus-list.do")
	public NexacroResult saveUtClausList(HttpServletRequest request,
			@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> list) throws Exception {
		NexacroResult result = new NexacroResult();	
		try {
			 Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			Map<String, Object> saveMap = new HashMap<>();
			saveMap.put("regpsnId", admin.get("OPRTR_ID"));
			Map<String, Object> rtnMap = coUtClausService.saveUtClausList(list, saveMap);
			result.addVariable("utClausSeq", rtnMap.get("utClausSeq"));
			result.addVariable("useCntYn", rtnMap.get("useCntYn"));
		} catch (MessageException e) {
			String message = "약관관리 저장 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_CN_15", message }, e);
		}

		return result;
	}

}
