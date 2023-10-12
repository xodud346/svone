package com.ssp.bo.cc.controller;

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
import com.ssp.bo.cc.service.CustAlnceSsoMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * 
 * @title
 * @package com.serveone.cc.service.controller
 * 
 *          <pre>
 * @author
 * @since 2023.05.09
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2023.05.09 최초작성
 */
@Controller
@RequestMapping("/cc")
public class CustAlnceSsoMngController {
	private Logger logger = LoggerFactory.getLogger(CustAlnceSsoMngController.class);

	@Autowired
	private CustAlnceSsoMngService custAlnceSsoMngService;

	/**
	 * <pre>
	 * 1. MethodName : selectSsoMngList
	 * 2. ClassName  : CustAlnceSsoMngController.java
	 * 3. Comment    : SSO회원관리 목록 관리 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2023.05.09
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-sso-mng-list.do")
	public NexacroResult selectSsoMngList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);  
			// TODO 기본값 설정 확인 필요
			String langCd = StringUtil.getString(searchMap.get("langCd"));
			if (CommUtil.nvl(langCd).equals("")) {
				searchMap.put("langCd", "KO");
			}
			List<Map<String, Object>> list = custAlnceSsoMngService.selectSsoMngList(searchMap);
			int totalCount = custAlnceSsoMngService.selectSsoMngCount(searchMap);
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "SSO회원관리 목록 관리 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_95", message }, ne);

		}
		return result;

	}

	/**
	 * <pre>
	 * 1. MethodName : selectSsoMngList
	 * 2. ClassName  : CustAlnceSsoMngController.java
	 * 3. Comment    : SSO회원관리 목록 관리 저장
	 * 4. 작성자       : 
	 * 5. 작성일       : 2023.05.09
	 * </pre>
	 *
	 * @param searchMap, list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-sso-mng-list.do")
	public NexacroResult saveSsoMngList(HttpServletRequest request,
			@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> list,
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);  
		    Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			// TODO 세션정보
			searchMap.put("regpsnId", admin.get("OPRTR_ID"));
			custAlnceSsoMngService.saveSsoMngList(searchMap, list);			
		} catch (MessageException e) {
			if( e.getCode() == -100 ) {
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			}else {
				String message = "SSO회원관리 목록 관리 저장 에러";
				logger.error(message);
				throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_95",message}, e);
			}
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteSsoMngList
	 * 2. ClassName  : CustAlnceSsoMngController.java
	 * 3. Comment    : SSO회원관리 목록 관리 삭제
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.02.08
	 * </pre>
	 *
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/delete-sso-mng-list.do")
	public NexacroResult deleteSsoMngList(HttpServletRequest request,
			@ParamDataSet(name = "ds_delete", required = false) List<Map<String, Object>> list) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			custAlnceSsoMngService.deleteSsoMngList(list);
		} catch (Exception ne) {
			String message = "SSO회원관리 목록 관리 삭제 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_95", message}, ne);
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : pgmMngPopupList
	 * 2. ClassName  : CoCommonPopupController.java
	 * 3. Comment    : SSO회원관리 목록 팝업 리스트 (공통)
	 * 4. 작성자       : 
	 * 5. 작성일       : 2021. 01. 26.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/select-sso-mng-popup-list.do")
	public NexacroResult selectSsoMngPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);    
			// TODO 기본값 설정 확인 필요
			String langCd = StringUtil.getString(searchMap.get("langCd"));
			if (CommUtil.nvl(langCd).equals("")) {
				searchMap.put("langCd", "KO");
			}
			int totalCount = custAlnceSsoMngService.selectSsoMngCount(searchMap);
			//List<Map<String,Object>> list = custAlnceSsoMngService.selectSsoMngPopupList(searchMap);
			List<Map<String,Object>> list = custAlnceSsoMngService.selectSsoMngList(searchMap);
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "SSO회원관리 목록 관리 팝업 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_95",message}, ne);
		}
		return result;
		
	}

}
