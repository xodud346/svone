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
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.co.dataset.CoDataSet;
import com.ssp.bo.co.service.CoMnuAuthGrpMngService;
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
 * @package com.serveone.co.service.controller
 * 
 *          <pre>
 * @author
 * @since 2022. 01. 27
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.01.27 최초작성
 */
@Controller
@RequestMapping("/co/mnu_auth")
public class CoMnuAuthGrpMngController {
	private Logger logger = LoggerFactory.getLogger(CoMnuAuthGrpMngController.class);

	@Autowired
	private CoMnuAuthGrpMngService coMnuAuthGrpMngService;

	/**
	 * <pre>
	 * 1. MethodName : selectMnuMngList
	 * 2. ClassName  : CoMnuAuthGrpMngController.java
	 * 3. Comment    : 메뉴권한정보 탭 - 메뉴 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.01.27
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-mnu-mng-list.do")
	public NexacroResult selectMnuMngList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			 searchMap = CommonUtil.toCamelCaseMap(searchMap);
			 List<Map<String, Object>> list =  coMnuAuthGrpMngService.selectMnuMngList(searchMap);
			 List<Map<String, Object>> list2 =  coMnuAuthGrpMngService.selectMnuAuthInfoList(searchMap);
			 result.addDataSet("ds_output1", list);
			 result.addDataSet("ds_output2", list2);
		} catch (Exception ne) {
			String message = "메뉴권한정보 메뉴조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_B0_YA_02_1", message}, ne);
		}
		return result;
	}

	
	/**
	 * <pre>
	 * 1. MethodName : saveMnuAuthInfoList
	 * 2. ClassName  : CoMnuAuthGrpMngController.java
	 * 3. Comment    : 메뉴권한정보 저장
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.01.27
	 * </pre>
	 *
	 * @param saveMap Map
	 * @param list List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/save-mnu-auth-info-list.do")
	public NexacroResult saveMnuAuthInfoList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> saveMap,
			@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> list) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			 Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			saveMap.put("REGPSN_ID", admin.get("OPRTR_ID"));
			saveMap = CommonUtil.toCamelCaseMap(saveMap);
			coMnuAuthGrpMngService.saveMnuAuthInfoList(saveMap, list);
		
		} catch (Exception ne) {
			String message = "메뉴권한그룹관리 저장 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_B0_YA_02_1", message}, ne);
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectMnuAuthGrpInfoList
	 * 2. ClassName  : CoMnuAuthGrpMngController.java
	 * 3. Comment    : 메뉴권한그룹정보 탭- 권한그룹정보 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.01.27
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-mnu-auth-grp-info-list.do")
	public NexacroResult selectMnuAuthGrpInfoList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			 searchMap = CommonUtil.toCamelCaseMap(searchMap);
			 List<Map<String, Object>> list =  coMnuAuthGrpMngService.selectMnuAuthGrpInfoList(searchMap);
			 result.addDataSet("ds_output1", list);
		} catch (Exception ne) {
			String message = "메뉴권한그룹관리 메뉴권한그룹정보 탭 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_B0_YA_02_2", message}, ne);
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveMnuAuthGrpInfo
	 * 2. ClassName  : CoMnuAuthGrpMngController.java
	 * 3. Comment    : 메뉴권한그룹정보 저장
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.04.13
	 * </pre>
	 *
	 * @param saveMap Map
	 * @param list List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/save-mnu-auth-grp-info.do")
	public NexacroResult saveMnuAuthGrpInfo(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> saveMap,
			@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> list) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			saveMap.put("REGPSN_ID", admin.get("OPRTR_ID"));
			saveMap = CommonUtil.toCamelCaseMap(saveMap);
			coMnuAuthGrpMngService.saveMnuAuthGrpInfo(saveMap, list);
		
		} catch (Exception ne) {
			String message = "메뉴권한그룹정보 저장 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_B0_YA_02_2", message}, ne);
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : deleteMnuAuthGrpInfoList
	 * 2. ClassName  : CoMnuAuthGrpMngController.java
	 * 3. Comment    : 메뉴권한그룹정보 삭제
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.04.13
	 * </pre>
	 *
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/delete-mnu-auth-grp-info-list.do")
	public NexacroResult deleteMnuAuthGrpInfoList(HttpServletRequest request,
			@ParamDataSet(name = "ds_delete", required = false) List<Map<String, Object>> list) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			coMnuAuthGrpMngService.deleteMnuAuthGrpInfoList(list);
		} catch (Exception ne) {
			String message = "메뉴권한그룹정보 삭제 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_B0_YA_02_2", message}, ne);
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectOprtrAuthGrpMenuList
	 * 2. ClassName  : CoMnuAuthGrpMngController.java
	 * 3. Comment    : 메뉴권한그룹정보 탭- 권한역할별 메뉴 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.01.27
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-oprtr-auth-grp-menu-list.do")
	public NexacroResult selectOprtrAuthGrpMenuList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			 searchMap = CommonUtil.toCamelCaseMap(searchMap);
			 List<Map<String, Object>> list =  coMnuAuthGrpMngService.selectMnuAuthInfoList(searchMap);
			 result.addDataSet("ds_output1", list);
		} catch (Exception ne) {
			String message = "메뉴권한그룹관리 권한역할별 메뉴 조회";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_B0_YA_02_2", message}, ne);
		}
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectOprtrMnuMngList
	 * 2. ClassName : CoMnuAuthGrpMngController
	 * 3. Comment : 운영자권한그룹관리 > 부서별 메뉴 권한 목록
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-17
	 * </pre>
	 *
	 * @param searchMap  Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/select-dept-auth-mng-list")
	public NexacroResult selectDeptAuthMngList( @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);

			String langCd = StringUtil.getString(searchMap.get("langCd"));
			if(CommUtil.nvl(langCd).equals("")) {
				searchMap.put("langCd", "KO");
			}

			List<Map<String, Object>> list =  coMnuAuthGrpMngService.selectDeptAuthMngList(searchMap);   // 부서 권한 목록
			if( list.size() <= 0 ) {
				//초기화
				DataSet dataSet = CoDataSet.getDs("deptAuthMng", "ds_output");
				result.addDataSet(dataSet);
			} else {
				result.addDataSet("ds_output", list);
			}
		} catch (Exception ne) {
			String message = "부서별 메뉴 권한 목록 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_11_1", message}, ne);
		}
		return result;
	}




	/**
	 *
	 * <pre>
	 * 1. MethodName : selectDeptAuthMngMenu
	 * 2. ClassName : CoMnuAuthGrpMngController
	 * 3. Comment : 부서별 메뉴권한 별 메뉴정보
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-17
	 * </pre>
	 *
	 * @param searchMapList List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/select-dept-auth-mng-menu")
	public NexacroResult selectDeptAuthMngMenu( @ParamDataSet(name = "ds_search", required = false) List<Map<String, Object>> searchMapList) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			List<Map<String, Object>> list =  coMnuAuthGrpMngService.selectDeptAuthMngMenu(searchMapList);  //권한별 메뉴목록

			result.addDataSet("ds_output", list);
			//result.addDataSet("ds_output2", list2);
		} catch (Exception ne) {
			String message = "부서별 메뉴권한 별 메뉴정보 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_11_1", message}, ne);
		}
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectDeptAuthMngMenuExcel
	 * 2. ClassName : CoMnuAuthGrpMngController
	 * 3. Comment : 부서별 메뉴 권한 엑셀 조회
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-18
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/select-dept-auth-mng-menu-excel.do")
	public NexacroResult selectDeptAuthMngMenuExcel( @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			searchMap.put("coCd", admin.get("CO_CD"));

			List<Map<String, Object>> list =  coMnuAuthGrpMngService.selectDeptAuthMngMenuExcel(searchMap);

			result.addDataSet("ds_output", list);
			//result.addDataSet("ds_output2", list2);
		} catch (Exception ne) {
			String message = "부서별 메뉴권한 별 메뉴정보 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_11_1", message}, ne);
		}
		return result;
	}




	/**
	 *
	 * <pre>
	 * 1. MethodName : saveDeptAuthMngMenu
	 * 2. ClassName : CoMnuAuthGrpMngController
	 * 3. Comment :  부서별 메뉴 권한 등록
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-17
	 * </pre>
	 *
	 * @param saveList List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping("/save-dept-auth-mng-menu.do")
	public NexacroResult saveDeptAuthMngMenu(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commonMap,  @ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> saveList) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			//리스트
			coMnuAuthGrpMngService.saveDeptAuthMngMenu(commonMap, saveList);
			result.setErrorCode(0);
		} catch ( MessageException e ) {
			// 에러코드 반환시만 처리하자
			if( e.getCode() == -100 ) {
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				String message = "부서별 메뉴 권한 등록 에러";
				logger.error(message);
				throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_11_1", message}, e);
			}
		}

		return result;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : selectOprtrAuthInfoList
	 * 2. ClassName : CoMnuAuthGrpMngController
	 * 3. Comment : 운영자별 메뉴권한분류코드 목록
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-21
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/select-oprtr-auth-info-list.do")
	public NexacroResult selectOprtrAuthInfoList( @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			String langCd = StringUtil.getString(searchMap.get("langCd"));
			if(CommUtil.nvl(langCd).equals("")) {
				searchMap.put("langCd", "KO");
			}

			List<Map<String, Object>> list =  coMnuAuthGrpMngService.selectOprtrAuthInfoList(searchMap);  // 운영자별 권한분류 목록

			if( list.size() <= 0 ) {
				//초기화
				DataSet dataSet = CoDataSet.getDs("oprtrAuthInfo", "ds_output");
				result.addDataSet(dataSet);
			} else {
				result.addDataSet("ds_output", list);
			}
		} catch (Exception ne) {
			String message = "운영자별 메뉴권한분류코드 목록 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_11_2", message}, ne);
		}
		return result;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : saveOprtrAuthInfo
	 * 2. ClassName : CoMnuAuthGrpMngController
	 * 3. Comment : 운영자별 메뉴권한 저장
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-21
	 * </pre>
	 *
	 * @param saveList List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping("/save-oprtr-auth-info.do")
	public NexacroResult saveOprtrAuthInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commonMap, @ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> saveList) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			//리스트
			coMnuAuthGrpMngService.saveOprtrAuthInfo(commonMap, saveList);
			result.setErrorCode(0);
		} catch ( MessageException e ) {
			// 에러코드 반환시만 처리하자
			if( e.getCode() == -100 ) {
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				String message = "운영자별 메뉴권한 저장 에러";
				logger.error(message);
				throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_11_2", message}, e);
			}
		}

		return result;
	}



	/**
	 *
	 * <pre>
	 * 1. MethodName : selectOprtrMnuMngList
	 * 2. ClassName : CoMnuAuthGrpMngController
	 * 3. Comment : 운영자별 개별 메뉴권한 트리메뉴 조회
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-17
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/select-oprtr-mnu-mng-list")
	public NexacroResult selectOprtrMnuMngList( @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			List<Map<String, Object>> list = coMnuAuthGrpMngService.selectOprtrMnuMngList(searchMap);   // 메뉴목록
			List<Map<String, Object>> list2 = coMnuAuthGrpMngService.selectOprtrMnuAuthGrpMngList(searchMap);  //운영자별 메뉴목록


			//데이터셋 초기화
			if( list.size() == 0 ) {
				result.addDataSet(CoDataSet.getDs("oprtrMnuMng", "ds_output1"));
			} else {
				result.addDataSet("ds_output1", list);
			}

			if( list2.size() == 0 ) {
				result.addDataSet(CoDataSet.getDs("oprtrMnuMng", "ds_output2"));
			} else {
				result.addDataSet("ds_output2", list2);
			}

		} catch (Exception ne) {
			String message = "운영자별 개별 메뉴권한 트리메뉴 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_11_2", message}, ne);
		}
		return result;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : saveAuthOprtrMngList
	 * 2. ClassName : CoMnuAuthGrpMngController
	 * 3. Comment : 운영자별 메뉴목록 저장
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-03-22
	 * </pre>
	 *
	 * @param saveMap Map
	 * @param list List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/save-auth-oprtr-mng-list")
	public NexacroResult saveAuthOprtrMngList( @ParamDataSet(name = "ds_search", required = false) Map<String, Object> saveMap, @ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> list) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			saveMap = CommonUtil.toCamelCaseMap(saveMap);
			coMnuAuthGrpMngService.saveAuthOprtrMngList(saveMap, list);

		} catch (Exception ne) {
			String message = "메뉴권한그룹관리 저장 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_11_2", message}, ne);
		}

		return result;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : selectOprtrAuthMngMenuExcel
	 * 2. ClassName : CoMnuAuthGrpMngController
	 * 3. Comment : 운영자별 메뉴 권한 엑셀 조회
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-18
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/select-oprtr-auth-mng-menu-excel.do")
	public NexacroResult selectOprtrAuthMngMenuExcel( @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			searchMap.put("coCd", admin.get("CO_CD"));

			List<Map<String, Object>> list =  coMnuAuthGrpMngService.selectOprtrAuthMngMenuExcel(searchMap);

			result.addDataSet("ds_output", list);
			//result.addDataSet("ds_output2", list2);
		} catch (Exception ne) {
			String message = "운영자별 메뉴권한 별 메뉴정보 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_11_2", message}, ne);
		}
		return result;
	}



}
