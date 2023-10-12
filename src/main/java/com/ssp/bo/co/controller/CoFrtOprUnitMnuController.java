package com.ssp.bo.co.controller;

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
import com.ssp.bo.co.service.CoFrtOprUnitMnuService;
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
 * @since 2022.03.16
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/co/frt")
public class CoFrtOprUnitMnuController {
	private Logger logger = LoggerFactory.getLogger(CoFrtOprUnitMnuController.class);

	@Autowired
	private CoFrtOprUnitMnuService coFrtOprUnitMnuService;

	/**
	 * <pre>
	 * 1. MethodName : selectFrtOprUnitMnuList
	 * 2. ClassName  : CoFrtOprUnitMnuController.java
	 * 3. Comment    : 프론트메뉴관리 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.17
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-frt-opr-unit-mnu-list.do")
	public NexacroResult selectFrtOprUnitMnuList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);  
		
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			searchMap.put("coCd", admin.get("CO_CD"));
				
			List<Map<String, Object>> list = coFrtOprUnitMnuService.selectFrtOprUnitMnuList(searchMap);
			int totalCount = coFrtOprUnitMnuService.selectFrtOprUnitMnuListCount(searchMap);
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "프론트메뉴관리 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_14", message }, ne);

		}
		return result;

	}

	/**
	 * <pre>
	 * 1. MethodName : saveFrtOprUnitMnuList
	 * 2. ClassName  : CoFrtOprUnitMnuController.java
	 * 3. Comment    : 프론트메뉴관리 저장
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.17
	 * </pre>
	 *
	 * @param searchMap, list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-frt-opr-unit-mnu-list.do")
	public NexacroResult saveFrtOprUnitMnuList(HttpServletRequest request,
			@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> list,
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap); 
		
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			searchMap.put("coCd", admin.get("CO_CD"));
			searchMap.put("regpsnId", admin.get("OPRTR_ID"));
			coFrtOprUnitMnuService.saveFrtOprUnitMnuList(searchMap, list);			
		} catch (MessageException e) {
			if( e.getCode() == -100 ) {
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			}else {
				String message = "프론트메뉴관리 저장 에러";
				logger.error(message);
				throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_14",message}, e);
			}
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteOprUnitMnuList
	 * 2. ClassName  : CoFrtOprUnitMnuController.java
	 * 3. Comment    : 프론트메뉴관리 삭제
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.17
	 * </pre>
	 *
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/delete-frt-opr-unit-mnu-list.do")
	public NexacroResult deleteOprUnitMnuList(HttpServletRequest request,
			@ParamDataSet(name = "ds_delete", required = false) List<Map<String, Object>> list) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			coFrtOprUnitMnuService.deleteOprUnitMnuList(list, admin);
		} catch (Exception ne) {
			String message = "프론트메뉴관리 삭제 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_14", message}, ne);
		}

		return result;
	}
	
}
