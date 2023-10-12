package com.ssp.bo.rd.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.RdCategoryService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * 
 * @title R&D카테고리 컨트롤러
 * @package com.ssp.bo.pr.controller
 *<pre>
 * @author 김진섭
 * @since 2022.03.22
 * @version 1.0
 * @see RdCategoryController 
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.22		최초작성
 */
@Controller
@RequestMapping("/rd/category")
public class RdCategoryController {
	private final Logger log = LoggerFactory.getLogger(RdCategoryController.class);

	@Autowired
	private RdCategoryService categoryService;

	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		RdCategoryController.propertiesService = propertiesService;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectCategoryList
	 * 2. ClassName  : CategoryController.java
	 * 3. Comment    : RR&D카테고리관리 조회 (selectCategoryList)
	 * 4. 작성자     :
	 * 5. 작성일     : 2022.05.17
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */

	@RequestMapping(value = "/select-category-list.do", method = RequestMethod.POST)
	public NexacroResult selectCategoryList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	                                           , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = categoryService.selectCategoryList(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectCategoryList", "R&D카테고리관리 조회" }, e) { };
		}

		return result;
	}

	
	
	/**
	 * <pre>
	 * 1. MethodName : selectCategory
	 * 2. ClassName  : CategoryController.java
	 * 3. Comment    : R&D카테고리관리 상세 조회 (selectCategory)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.17
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-category.do", method = RequestMethod.POST)
	public NexacroResult selectCategory(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	                                           , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = categoryService.selectCategory(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectCategory", "R&D카테고리관리 상세조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectRdCategoryDuplicateCheck
	 * 2. ClassName  : RdCategoryDuplicateCheckController.java
	 * 3. Comment    : 카테고리명 중복체크 조회 (selectRdCategoryDuplicateCheck)
	 * 4. 작성자     :
	 * 5. 작성일     : 2022.05.18
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-rd-category-duplicate-check.do", method = RequestMethod.POST)
	public NexacroResult selectRdCategoryDuplicateCheck(@ParamDataSet(name = "ds_detail_dupChk", required = false) Map<String, Object> searchMap
	                                           , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = categoryService.selectRdCategoryDuplicateCheck(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectRdCategoryDuplicateCheck", "카테고리명 중복체크" }, e) { };
		}

		return result;
	}

    

	/**
	 * <pre>
	 * 1. MethodName : selectRdCategoryDuplicateCheckRD27
	 * 2. ClassName  : RdCategoryDuplicateCheckController.java
	 * 3. Comment    : 카테고리명 중복체크 - R&D카테고리 생성 팝업 (selectRdCategoryDuplicateCheck)
	 * 4. 작성자     :
	 * 5. 작성일     : 2022.05.18
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-rd-category-duplicate-check-rd27.do", method = RequestMethod.POST)
	public NexacroResult selectRdCategoryDuplicateCheckRD27(@ParamDataSet(name = "ds_detail", required = false) Map<String, Object> searchMap
	                                           , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = categoryService.selectRdCategoryDuplicateCheck(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectRdCategoryDuplicateCheckRD27", "카테고리명 중복체크RD27" }, e) { };
		}

		return result;
	}
		
	/**
	 * <pre>
	 * 1. MethodName : saveCategoryInfo
	 * 2. ClassName  : CategoryInfoController.java
	 * 3. Comment    : R&D카테고리 상세저장 (saveCategoryInfo)
	 * 4. 작성자     :
	 * 5. 작성일     : 2022.05.18
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-category-info.do", method = RequestMethod.POST)
	public NexacroResult saveCategoryInfo(@ParamDataSet(name = "ds_detail", required = false) List<Map<String, Object>>  commandMap 
	                                     , @ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>>  mainList
	                                     , @ParamDataSet(name = "ds_subList", required = false) List<Map<String, Object>> subList
	                                     , @ParamDataSet(name = "ds_saveFileList", required = false) List<Map<String, Object>> fileMap) throws Exception 
	{
		NexacroResult result;
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try
		{
			
			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
			if(userInfo == null) {
				userInfo = new HashMap<String, Object>();
			}
			String contextRealPath = propertiesService.getString("file.path.root");

			result = categoryService.saveCategoryInfo(commandMap, mainList, subList, fileMap, userInfo, contextRealPath);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveCategoryInfo", "R&D카테고리 상세저장" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveCategory
	 * 2. ClassName  : CategoryController.java
	 * 3. Comment    : R&D하위 카테고리 팝업 생성 저장 (saveCategory)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.18
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */

	@RequestMapping(value = "/save-category.do", method = RequestMethod.POST)
	public NexacroResult saveCategory(@ParamDataSet(name = "ds_detail",       required = false) Map<String, Object>       commandMap
			                         , @ParamDataSet(name = "ds_saveFileList", required = false) List<Map<String, Object>> fileMap) throws Exception 
	{
		NexacroResult result;
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try
		{
			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
			if(userInfo == null) {
				userInfo = new HashMap<String, Object>();
			}
			String contextRealPath = propertiesService.getString("file.path.root");

			result = categoryService.saveCategory(commandMap, fileMap, userInfo , contextRealPath);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveCategory", "R&D하위 카테고리 생성저장" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPrdAttrList
	 * 2. ClassName  : PrdAttrListController.java
	 * 3. Comment    : 상품군 조회 (selectPrdAttrList)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.19
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-prd-attr-list.do", method = RequestMethod.POST)
	public NexacroResult selectPrdAttrList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	                                           , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = categoryService.selectPrdAttrList(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPrdAttrList", "상품군 조회" }, e) { };
		}

		return result;
	}
		
	/**
	 * <pre>
	 * 1. MethodName : selectClsfAttrMappList
	 * 2. ClassName  : ClsfAttrMappListController.java
	 * 3. Comment    : 상품군 사용 SSP속성 조회 (selectClsfAttrMappList)
	 * 4. 작성자     :
	 * 5. 작성일     : 2022.05.19
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-clsf-attr-mapp-list.do", method = RequestMethod.POST)
	public NexacroResult selectClsfAttrMappList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	                                           , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = categoryService.selectClsfAttrMappList(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectClsfAttrMappList", "상품군 사용 SSP속성 조회" }, e) { };
		}

		return result;
	}
	

	/**
	 * <pre>
	 * 1. MethodName : saveClsfAttrMapp
	 * 2. ClassName  : ClsfAttrMappController.java
	 * 3. Comment    : 상품군 사용 SSP속성 저장 (saveClsfAttrMapp)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.19
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */

	@RequestMapping(value = "/save-clsf-attr-mapp.do", method = RequestMethod.POST)
	public NexacroResult saveClsfAttrMapp( @ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMap) throws Exception 
	{
		NexacroResult result;
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try
		{
			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
			if(userInfo == null) {
				userInfo = new HashMap<String, Object>();
			}
			result = categoryService.saveClsfAttrMapp(commandMap, userInfo);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveClsfAttrMapp", "상품군 사용 SSP속성 저장" }, e) { };
		}

		return result;
	}

	
	/**
	 * <pre>
	 * 1. MethodName : selectCodeChkYn
	 * 2. ClassName  : CodeChkYnController.java
	 * 3. Comment    : 신규 저장 코드체크여부 조회 (selectCodeChkYn)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.20
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-code-chk-yn.do", method = RequestMethod.POST)
	public NexacroResult selectCodeChkYn(@ParamDataSet(name = "ds_searchChkYn", required = false) Map<String, Object> searchMap
	                                           , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if(SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) 
		{
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = categoryService.selectCodeChkYn(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectCodeChkYn", "신규 저장 코드체크여부 조회" }, e) { };
		}

		return result;
	}
	
	
	/**
	 * <pre>
	 * 1. MethodName : selectUpCodeChkYn
	 * 2. ClassName  : CodeChkYnController.java
	 * 3. Comment    : 수정시 코드체크여부 조회 (selectUpCodeChkYn)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.20
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-up-code-chk-yn.do", method = RequestMethod.POST)
	public NexacroResult selectUpCodeChkYn(@ParamDataSet(name = "ds_searchChkYn", required = false) Map<String, Object> searchMap
	                                           , HttpSession session) throws Exception
	{
		NexacroResult result = new NexacroResult();

		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if(SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) 
		{
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = categoryService.selectUpCodeChkYn(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectUpCodeChkYn", "수정코드체크여부 조회" }, e) { };
		}

		return result;
	}
}
