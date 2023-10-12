/*------------------------------------------------------------------------------
 * NAME : NewPrdReqLstController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.21  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.NewPrdReqLstService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   NewPrdReqLstController
 * @@desc   신규상품요청처리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.04.21
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/new-prd-req-lst")
public class NewPrdReqLstController {
	private Logger logger = LoggerFactory.getLogger(NewPrdReqLstController.class);

	@Resource(name = "newPrdReqLstService")
	private NewPrdReqLstService newPrdReqLstService;

	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		NewPrdReqLstController.propertiesService = propertiesService;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectNewPrdReqLst
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 신규상품요청처리 리스트 조회
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.21
	 * </pre>
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-new-prd-req-lst.do", method = RequestMethod.POST)
	public NexacroResult selectNewPrdReqLst(
		HttpSession session
		, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	) throws Exception {
		NexacroResult result = new NexacroResult();
		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if (CommUtil.nvl(langCd).equals("")) {
			searchMap.put("LANG_CD", "KO");
		}

		try {
			result = newPrdReqLstService.selectNewPrdReqLst(searchMap, session);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectNewPrdReqLst", "신규상품요청처리 조회"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectPrdRegOcorpInq
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 상품등록자사조회 (selectPrdRegOcorpInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.26
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-prd-reg-ocorp-inq.do", method = RequestMethod.POST)
	public NexacroResult selectPrdRegOcorpInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
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
			result = newPrdReqLstService.selectPrdRegOcorpInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPrdRegOcorpInq", "상품등록자사 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectCatgAttrInfo
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 카테고리속성정보 조회 (selectCatgAttrInfo)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.26
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-catg-attr-info.do", method = RequestMethod.POST)
	public NexacroResult selectCatgAttrInfo(@ParamVariable(name = "NEW_PRD_REQ_NO") String NEW_PRD_REQ_NO
			                               , @ParamVariable(name = "PRD_CLCD")       String PRD_CLCD
			                               , @ParamVariable(name = "OLD_PRD_CLCD")   String OLD_PRD_CLCD
			                               , @ParamVariable(name = "CO_CD")          String CO_CD) throws Exception
	{
		NexacroResult result = new NexacroResult();

		Map<String, Object> searchMap = new HashMap<>();
		searchMap.put("NEW_PRD_REQ_NO",NEW_PRD_REQ_NO);
		searchMap.put("PRD_CLCD",      PRD_CLCD);
		searchMap.put("OLD_PRD_CLCD",  OLD_PRD_CLCD);
		searchMap.put("CO_CD",         CO_CD);

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
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
			result = newPrdReqLstService.selectCatgAttrInfo(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPrdRegOcorpInq", "카테고리속성정보 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPrdNotiPrdInq
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 상품고시상품 조회 (selectPrdNotiPrdInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.26
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-prd-noti-prd-inq.do", method = RequestMethod.POST)
	public NexacroResult selectPrdNotiPrdInq(@ParamVariable(name = "PRD_ID")     String PRD_ID
			                               , @ParamVariable(name = "CO_CD")       String CO_CD
			                               , @ParamVariable(name = "NOTI_ITM_ID") String NOTI_ITM_ID) throws Exception
	{
		NexacroResult result = new NexacroResult();

		Map<String, Object> searchMap = new HashMap<>();
		searchMap.put("PRD_ID",     PRD_ID);
		searchMap.put("CO_CD",      CO_CD);
		searchMap.put("NOTI_ITM_ID",NOTI_ITM_ID);

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
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
			result = newPrdReqLstService.selectPrdNotiPrdInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPrdNotiPrdInq", "상품고시상품 조회" }, e) { };
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectPrdIdExstYn
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 상품ID존재여부 조회 (selectPrdIdExstYn)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.26
	 * </pre>
	 *
	 * @param PRD_ID
	 * @param CO_CD
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-prd-id-exst-yn.do", method = RequestMethod.POST)
	public NexacroResult selectPrdIdExstYn(
		@ParamVariable(name = "PRD_ID") String PRD_ID
		, @ParamVariable(name = "CO_CD") String CO_CD
	) throws Exception {
		NexacroResult result = new NexacroResult();

		Map<String, Object> searchMap = new HashMap<>();
		searchMap.put("PRD_ID", PRD_ID);
		searchMap.put("CO_CD", CO_CD);

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if (CommUtil.nvl(coCd).equals("") && admin != null) {
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try {
			result = newPrdReqLstService.selectPrdIdExstYn(searchMap);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectPrdNotiPrdInq", "상품고시상품 조회"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectBgListInfoInq
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 배지리스트정보 조회 (selectBgListInfoInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.02
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-bg-list-info-inq.do", method = RequestMethod.POST)
	public NexacroResult selectBgListInfoInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
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
			String contextRealPath = propertiesService.getString("file.path.root");
			searchMap.put("CONTEXT_REAL_PATH", contextRealPath);

			result = newPrdReqLstService.selectBgListInfoInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectBgListInfoInq", "배지리스트정보 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectCdChkYnInq
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 코드체크여부 조회 (selectCdChkYnInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.02
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-cd-chk-yn-inq.do", method = RequestMethod.POST)
	public NexacroResult selectCdChkYnInq(@ParamVariable(name = "CO_CD")          String CO_CD
			                             , @ParamVariable(name = "ORGPLC_CTRY_CD") String ORGPLC_CTRY_CD
                                         , @ParamVariable(name = "MNFR_NO")        String MNFR_NO) throws Exception
	{
		NexacroResult result = new NexacroResult();

		Map<String, Object> searchMap = new HashMap<>();
		searchMap.put("CO_CD",         CO_CD);
		searchMap.put("ORGPLC_CTRY_CD",ORGPLC_CTRY_CD);
		searchMap.put("MNFR_NO",       MNFR_NO);

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
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
			result = newPrdReqLstService.selectCdChkYnInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectCdChkYnInq", "코드체크여부 조회" }, e) { };
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : saveNewPrdReqLst
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 신규상품요청처리 리스트 저장
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.21
	 * </pre>
	 *
	 * @param mainMap1
	 * @param catgMap2
	 * @param notiMap3
	 * @param fileMap4
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-new-prd-req-lst.do", method = RequestMethod.POST)
	public NexacroResult saveNewPrdReqLst(
		@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> mainMap1
		, @ParamDataSet(name = "ds_catgRcmdInq", required = false) List<Map<String, Object>> catgMap2
		, @ParamDataSet(name = "ds_notiItmList", required = false) List<Map<String, Object>> notiMap3
		, @ParamDataSet(name = "ds_saveFileList", required = false) List<Map<String, Object>> fileMap4
	) throws Exception {
		NexacroResult result;

		String contextRealPath = propertiesService.getString("file.path.root");

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		if (userInfo == null) {
			userInfo = new HashMap<String, Object>();
		}

		try {
			result = newPrdReqLstService.saveNewPrdReqLst(mainMap1, catgMap2, notiMap3, fileMap4, userInfo, contextRealPath);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "saveNewPrdReqLst", "신규상품요청처리 저장"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : saveNewPrdReqRjctProc
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 신규상품요청처리 리스트 저장 (saveNewPrdReqRjctProc)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.21
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-new-prd-req-rjct-proc.do", method = RequestMethod.POST)
	public NexacroResult saveNewPrdReqRjctProc(@ParamDataSet(name = "ds_master",      required = false) List<Map<String, Object>> mainMap1
	                                          , @ParamDataSet(name = "ds_catgRcmdInq", required = false) List<Map<String, Object>> catgMap2
	                                          , @ParamDataSet(name = "ds_notiItmList", required = false) List<Map<String, Object>> notiMap3
	                                          , @ParamDataSet(name = "ds_saveFileList",required = false) List<Map<String, Object>> fileMap4) throws Exception
	{
		NexacroResult result;

		try
		{
			if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
				SessionsAdmin.setSessionAdminLocal();
			}
			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
			if(userInfo == null) {
				userInfo = new HashMap<String, Object>();
			}
			String contextRealPath = propertiesService.getString("file.path.root");

			result = newPrdReqLstService.saveNewPrdReqLst(mainMap1, catgMap2, notiMap3, fileMap4, userInfo, contextRealPath);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveNewPrdReqLst", "신규상품요청처리 저장" }, e) { };
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : saveCprtcpRegStor
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 고객, 협력사 신규상품 등록 처리
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.21
	 * </pre>
	 *
	 * @param mainMap1
	 * @param catgMap2
	 * @param notiMap3
	 * @param fileMap4
	 * @param custMap5
	 * @param purgMap6
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-cprtcp-reg-stor.do", method = RequestMethod.POST)
	public NexacroResult saveCprtcpRegStor(
		@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> mainMap1
		, @ParamDataSet(name = "ds_catgRcmdInq", required = false) List<Map<String, Object>> catgMap2
		, @ParamDataSet(name = "ds_notiItmList", required = false) List<Map<String, Object>> notiMap3
		, @ParamDataSet(name = "ds_saveFileList", required = false) List<Map<String, Object>> fileMap4
		, @ParamDataSet(name = "ds_newPrdCustReqInfo", required = false) List<Map<String, Object>> custMap5
		, @ParamDataSet(name = "ds_newPrdPurgQtyDtls", required = false) List<Map<String, Object>> purgMap6
	) throws Exception {
		NexacroResult result;

		try {
			if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
				SessionsAdmin.setSessionAdminLocal();
			}

			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

			if (userInfo == null) {
				userInfo = new HashMap<String, Object>();
			}
			String contextRealPath = propertiesService.getString("file.path.root");

			result = newPrdReqLstService.saveCprtcpRegStor(mainMap1, catgMap2, notiMap3, fileMap4, custMap5, purgMap6, userInfo, contextRealPath);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "saveNewPrdReqLst", "신규상품요청처리 저장"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : saveCprtcpDupPrdProcStor
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 협력사중복상품처리저장
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.04
	 * </pre>
	 *
	 * @param mainMap1
	 * @param custMap2
	 * @param purgMap3
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-cprtcp-dup-prd-proc-stor.do", method = RequestMethod.POST)
	public NexacroResult saveCprtcpDupPrdProcStorList(
		@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> mainMap1
		, @ParamDataSet(name = "ds_newPrdCustReqInfo", required = false) List<Map<String, Object>> custMap2
		, @ParamDataSet(name = "ds_newPrdPurgQtyDtls", required = false) List<Map<String, Object>> purgMap3
	) throws Exception {
		NexacroResult result;

		try {
			if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
				SessionsAdmin.setSessionAdminLocal();
			}

			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
			if (userInfo == null) {
				userInfo = new HashMap<String, Object>();
			}

			result = newPrdReqLstService.saveCprtcpDupPrdProcStor(mainMap1, custMap2, purgMap3, userInfo);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "saveCprtcpDupPrdProcStorList", "협력사중복상품처리 저장"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : savePrdReqRjctProcStor
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 상품요청반려처리저장
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.04
	 * </pre>
	 *
	 * @param mainMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-prd-req-rjct-proc-stor.do", method = RequestMethod.POST)
	public NexacroResult savePrdReqRjctProcStor(
		@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> mainMap
	) throws Exception {
		NexacroResult result;

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		if (userInfo == null) {
			userInfo = new HashMap<>();
		}

		try {
			result = newPrdReqLstService.savePrdReqRjctProcStor(mainMap, userInfo);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "saveCprtcpDupPrdProcStorList", "상품요청반려처리 저장"}, e) {};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : saveCustReqProc
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 고객요청처리 저장
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.09
	 * </pre>
	 *
	 * @param mainMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-cust-req-proc.do", method = RequestMethod.POST)
	public NexacroResult saveCustReqProc(@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> mainMap) throws Exception {
		NexacroResult result;

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		if (userInfo == null) {
			userInfo = new HashMap<>();
		}

		try {
			result = newPrdReqLstService.saveCustReqProc(mainMap, userInfo);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "saveCprtcpDupPrdProcStorList", "고객요청처리 저장"}, e) {};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : validateReqInfo
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 협력사 신규상품요청정보 검증 (validateReqInfo)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.04
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/validate-req-info.do", method = RequestMethod.POST)
	public NexacroResult validateReqInfo(@ParamDataSet(name = "ds_input",required = false) List<Map<String, Object>> mainMap) throws Exception
	{
		NexacroResult result;

		try
		{
			result = newPrdReqLstService.validateReqInfo(mainMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "validateReqInfo", "협력사 신규상품요청정보 검증" }, e) { };
		}

		return result;
	}
}
