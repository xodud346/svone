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
import com.ssp.bo.co.service.CoFrtPgmInfoService;
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
public class CoFrtPgmInfoController {
	private Logger logger = LoggerFactory.getLogger(CoFrtPgmInfoController.class);

	@Autowired
	private CoFrtPgmInfoService coFrtPgmInfoService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectFrtPgmList
	 * 2. ClassName  : CoFrtPgmInfoController.java
	 * 3. Comment    : 프론트프로그램관리 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.16
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-frt-pgm-list.do")
	public NexacroResult selectFrtPgmList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);  
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			searchMap.put("coCd", admin.get("CO_CD"));
			List<Map<String, Object>> list = coFrtPgmInfoService.selectFrtPgmList(searchMap);
			int totalCount = coFrtPgmInfoService.selectFrtPgmListCount(searchMap);
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "프론트프로그램관리 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_13", message }, ne);

		}
		return result;

	}

	/**
	 * <pre>
	 * 1. MethodName : saveFrtPgmGrpList
	 * 2. ClassName  : CoFrtPgmInfoController.java
	 * 3. Comment    : 프론트프로그램관리 저장
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.16
	 * </pre>
	 *
	 * @param searchMap, list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-frt-pgm-list.do")
	public NexacroResult saveFrtPgmList(HttpServletRequest request,
			@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> list,
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);  
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			searchMap.put("coCd", admin.get("CO_CD"));
			searchMap.put("regpsnId", admin.get("OPRTR_ID"));
			coFrtPgmInfoService.saveFrtPgmList(searchMap, list);			
		} catch (MessageException e) {
			if( e.getCode() == -100 ) {
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			}else {
				String message = "프론트프로그램관리 저장 에러";
				logger.error(message);
				throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_13",message}, e);
			}
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteFrtPgmList
	 * 2. ClassName  : CoFrtPgmInfoController.java
	 * 3. Comment    : 프론트프로그램관리 삭제
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.16
	 * </pre>
	 *
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/delete-frt-pgm-list.do")
	public NexacroResult deleteFrtPgmList(HttpServletRequest request,
			@ParamDataSet(name = "ds_delete", required = false) List<Map<String, Object>> list) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			coFrtPgmInfoService.deleteFrtPgmList(list, admin);
		} catch (Exception ne) {
			String message = "프론트프로그램관리 삭제 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_13", message}, ne);
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectFrtPgmPopupList
	 * 2. ClassName  : CoFrtPgmInfoController.java
	 * 3. Comment    : 프론트프로그램관리 팝업 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.22
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-frt-pgm-popup-list.do")
	public NexacroResult selectFrtPgmPopupList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);  
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			searchMap.put("coCd", admin.get("CO_CD"));
			List<Map<String, Object>> list = coFrtPgmInfoService.selectFrtPgmPopupList(searchMap);
			int totalCount = list.size();
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
			
			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("totalPopIdCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchPgmId", list.get(0).get("PGM_ID"));
				result.addVariable("searchPgmNm", list.get(0).get("PGM_NM"));
			}
			
		} catch (Exception ne) {
			String message = "프론트프로그램관리 팝업  에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_30", message }, ne);

		}
		return result;

	}
	
}
