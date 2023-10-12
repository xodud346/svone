package com.ssp.bo.co.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.service.CoMnuMngService;
import com.ssp.core.co.service.CoCommonService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  메뉴관리 컨트롤러
 * @package com.ssp.core.co.service.controller
 * <pre>
 * @author  lee
 * @since   2022. 01. 18.
 * @version 1.0
 * @see CoMenuController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/co/Menu")
public class CoMenuController {
	private final Logger log = LoggerFactory.getLogger(CoCommonPopupController.class);
		
	@Autowired
    private CoMnuMngService coMnuMngService;
	
	@Autowired
	private SspPropertyService propertiesService;
	
	@Autowired
	private CoCommonService coCommonService;

	/**
	 * <pre>
	 * 1. MethodName : bzplcPopupList
	 * 2. ClassName  : CoCommonPopupController.java
	 * 3. Comment    : 메뉴 리스트 조회
	 * 4. 작성자       : java_01
	 * 5. 작성일       : 2021. 09. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-mnu-mng-list.do")
	public NexacroResult selectMnuMngList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {

			if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
				SessionsAdmin.setSessionAdminLocal();
			}

			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

			searchMap.put("coCd", admin.get("CO_CD"));
			searchMap.put("oprtrId", admin.get("OPRTR_ID"));
			searchMap.put("orgCd", admin.get("ORG_CD"));

			List<Map<String,Object>> list = coMnuMngService.selectMnuMngList(searchMap);
			result.addDataSet("ds_output", list);
		} catch (Exception e ) {
			String message = "메뉴 리스트 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "leftFrame", "메뉴 리스트 조회"}, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : bzplcPopupList
	 * 2. ClassName  : CoCommonPopupController.java
	 * 3. Comment    : 메뉴관리 -리스트 조회
	 * 4. 작성자       : java_01
	 * 5. 작성일       : 2021. 09. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-mnu-list.do")
	public NexacroResult selectMnuList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			List<Map<String,Object>> list = coMnuMngService.selectMnuList(searchMap);
			result.addDataSet("ds_output", list);
		} catch (Exception e ) {
			String message = "메뉴 리스트 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_01", "메뉴관리 리스트 조회"}, e) {};
		}
		return result;
	}



	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMenuMngList
	 * 2. ClassName : CoMenuController
	 * 3. Comment : 메뉴관리 화면의 메뉴 목록
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-19
	 * </pre>
	 *
	 */
	@RequestMapping(value = "/select-menu-mng-list.do")
	public NexacroResult selectMenuMngList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			if( searchMap == null) searchMap = new HashMap<>();
			searchMap.put("useYn", "");

			List<Map<String,Object>> list = coMnuMngService.selectMenuMngList(searchMap);
			result.addDataSet("ds_output", list);

		} catch (Exception e ) {
			String message = "메뉴 리스트 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_01", "메뉴관리 리스트 조회"}, e) {};
		}
		return result;
	}

	@RequestMapping(value = "/select-menu-file-list.do")
	public NexacroResult selectMenuFileList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
		 
			 String   docRegId = StringUtil.getString(searchMap.get("DOC_REG_ID"));
			 searchMap.put("docRegId", docRegId);
			 List<Map<String,Object>> fileList = coMnuMngService.selectMenuFileList(searchMap);
		 
			 result.addDataSet("ds_files", fileList);
		} catch (Exception e ) {
			String message = "메뉴 리스트 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_01", "메뉴관리 리스트 조회"}, e) {};
		}
		return result;
	}



	/**
	 *
	 * <pre>
	 * 1. MethodName : comMenuSave
	 * 2. ClassName : CoMenuController
	 * 3. Comment : 메뉴 저장
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-01-26
	 * </pre>
	 *
	 * @param commandMapList List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/com-menu-save.do")
	public NexacroResult comMenuSave(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList
															, @ParamDataSet(name = "ds_files", required = false) List<Map<String, Object>> fileMapList ) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
 
			coMnuMngService.comMenuSave(commandMapList, fileMapList);
		} catch ( Exception e ) {
			String message = "메뉴 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_01", "메뉴 저장"}, e) {};
		}
		return result;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : comMenuSave
	 * 2. ClassName : CoMenuController
	 * 3. Comment : 메뉴 시퀀스 채번
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-02-03
	 * </pre>
	 *
	 */
	@RequestMapping(value = "/select-menu-seq.do")
	public NexacroResult selectMenuSeq(Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {

			int menuSeq = coMnuMngService.selectMenuSeq(searchMap);

			result.addVariable("menuSeq" , menuSeq);
		} catch ( Exception e ) {
			String message = "메뉴 시퀀스 채번 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_01", "메뉴 시퀀스 채번"}, e) {};
		}
		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectMnuFvrtsList
	 * 2. ClassName  : CoMenuController
	 * 3. Comment    : 즐겨찾기 리스트 조회
	 * 4. 작성자       : ksy
	 * 5. 작성일       : 2022-02-17
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/selectMnuFvrtsList.do")
	public NexacroResult selectMnuFvrtsList(@ParamDataSet(name = "ds_search", required = false) Map<String, String> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			
			searchMap.put("coCd", (String) admin.get("CO_CD"));
			searchMap.put("oprtrId", (String) admin.get("OPRTR_ID"));
			List<Map<String,Object>> list = coMnuMngService.selectMnuFvrtsList(searchMap);
			result.addDataSet("ds_output", list);
		} catch (Exception e ) {
			String message = "즐겨찾기 리스트 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "leftFrame", "즐겨찾기 리스트 조회"}, e) {};
		}
		return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : saveMnuFvrts
	 * 2. ClassName : CoMenuController
	 * 3. Comment : 즐겨찾기 저장
	 * 4. 작성자 : ksy
	 * 5. 작성일 : 2022-02-17
	 * </pre>
	 *
	 * @param commandMapList List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/saveMnuFvrts.do")
	public NexacroResult saveMnuFvrts(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			
			coMnuMngService.saveMnuFvrts(commandMapList);
		} catch ( Exception e ) {
			String message = "즐겨찾기 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "leftFrame", "즐겨찾기 저장"}, e) {};
		}
		return result;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : delComMenu
	 * 2. ClassName : CoMenuController
	 * 3. Comment : 즐겨찾기 삭제
	 * 4. 작성자 : ksy
	 * 5. 작성일 : 2022-02-17
	 * </pre>
	 *
	 * @param commandMapList List
	 * @return NexacroResult
	 * @throws Exception exception
	 */
	@RequestMapping(value = "/delMnuFvrts.do")
	public NexacroResult delMnuFvrts(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			coMnuMngService.delMnuFvrts(commandMapList);
		} catch ( Exception e ) {
			String message = "즐겨찾기 삭제 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "leftFrame", "즐겨찾기 삭제"}, e) {};
		}
		return result;
	}
}
