/*------------------------------------------------------------------------------
 * NAME : PrdInfoMngController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  오왕표
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
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.od.service.OdOdrPopupService;
import com.ssp.bo.rd.service.PrdInfoMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.rd.service.PI_PrdInfoCallService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   PrdInfoMngController
 * @@desc   MRO상품정보 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/prd-info-mng")
public class PrdInfoMngController {
	private Logger logger = LoggerFactory.getLogger(PrdInfoMngController.class);

	@Resource(name = "prdInfoMngService")
	private PrdInfoMngService prdInfoMngService;
	
	@Resource(name = "pI_PrdInfoCallService")
	private PI_PrdInfoCallService pI_PrdInfoCallService;

	protected static OdOdrPopupService odOdrPopupService;

	@Autowired
	void setOdOdrPopupService(OdOdrPopupService odOdrPopupService) {
		PrdInfoMngController.odOdrPopupService = odOdrPopupService;
	}

	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PrdInfoMngController.propertiesService = propertiesService;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPrdInfoMng
	 * 2. ClassName  : PrdInfoMngController.java
	 * 3. Comment    : MRO상품정보 리스트 조회 (selectPrdInfoMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-prd-info-mng.do", method = RequestMethod.POST)
	public NexacroResult selectPrdInfoMng(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try
		{
			result = prdInfoMngService.selectPrdInfoMng(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPrdInfoMng", "MRO상품정보 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPrdInfoMngDtlUpdInq
	 * 2. ClassName  : PrdInfoMngController.java
	 * 3. Comment    : 상품정보관리상세수정 리스트 조회 (selectPrdInfoMngDtlUpdInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-prd-info-mng-dtl-upd-inq.do", method = RequestMethod.POST)
	public NexacroResult selectPrdInfoMngDtlUpdInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
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
			result = prdInfoMngService.selectPrdInfoMngDtlUpdInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPrdInfoMng", "MRO상품정보 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectCatgAttrInfo
	 * 2. ClassName  : PrdInfoMngController.java
	 * 3. Comment    : 카테고리속성정보 리스트 조회 (selectCatgAttrInfo)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-catg-attr-info.do", method = RequestMethod.POST)
	public NexacroResult selectCatgAttrInfo(@ParamVariable(name = "PRD_ID")       String PRD_ID
                                           , @ParamVariable(name = "CO_CD")        String CO_CD
                                           , @ParamVariable(name = "PRD_CLCD")     String PRD_CLCD
                                           , @ParamVariable(name = "OLD_PRD_CLCD") String OLD_PRD_CLCD) throws Exception
	{
		NexacroResult result = new NexacroResult();

		Map<String, Object> searchMap = new HashMap<>();
		searchMap.put("PRD_ID",      PRD_ID);
		searchMap.put("PRD_CLCD",    PRD_CLCD);
		searchMap.put("OLD_PRD_CLCD",OLD_PRD_CLCD);
		searchMap.put("CO_CD",       CO_CD);

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
			result = prdInfoMngService.selectCatgAttrInfo(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPrdInfoMng", "MRO상품정보 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPrdImgListDownInq
	 * 2. ClassName  : PrdInfoMngController.java
	 * 3. Comment    : 상품이미지리스트다운로드 조회 (selectPrdImgListDownInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.06.30
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
    @RequestMapping(value = "/select-prd-img-list-down-inq.do")
    public NexacroResult selectPrdImgListDownInq(@ParamDataSet(name = "ds_search", required = false) List<Map<String, Object>> commandMap
    		                                    , @ParamDataSet(name = "ds_input", required = false)  Map<String, Object>       searchMap
    		                                    , HttpSession session) throws Exception {
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

		searchMap.put("SES_ID",session.getId());

        try
        {
        	result = odOdrPopupService.deleteOdrInqTgtDtls(commandMap,new OdOrderComm(session));
            result = odOdrPopupService.insertOdrInqTgtBatch(commandMap,new OdOrderComm(session));
            result = prdInfoMngService.selectPrdImgListDownInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectPrdImgListDownInq", "상품이미지리스트다운로드 조회" }, e) { };
		}

		return result;
    }


	/**
	 * <pre>
	 * 1. MethodName : savePrdInfoMng
	 * 2. ClassName : PrdInfoMngController.java
	 * 3. Comment : MRO상품정보 리스트 저장
	 * 4. 작성자 :
	 * 5. 작성일 : 2022.05.10
	 * </pre>
	 *
	 * @param mainMap
	 * @param catgMap
	 * @param notiMap
	 * @param fileMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-prd-info-mng.do", method = RequestMethod.POST)
	public NexacroResult savePrdInfoMng(
		@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> mainMap
		, @ParamDataSet(name = "ds_catgRcmdInq", required = false) List<Map<String, Object>> catgMap
		, @ParamDataSet(name = "ds_notiItmList", required = false) List<Map<String, Object>> notiMap
		, @ParamDataSet(name = "ds_saveFileList", required = false) List<Map<String, Object>> fileMap) throws Exception {
		NexacroResult result;
		String contextRealPath = propertiesService.getString("file.path.root");

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		if (userInfo == null) {
			userInfo = new HashMap<>();
		}

		try {
			result = prdInfoMngService.savePrdInfoMng(mainMap, catgMap, notiMap, fileMap, userInfo, contextRealPath);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "savePrdInfoMng", "MRO상품정보 저장"}, e) {
			};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : savePrdInfoMng
	 * 2. ClassName  : PrdInfoMngController.java
	 * 3. Comment    : MRO상품정보 리스트 저장 (savePrdInfoMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.10
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/call-prd-info-mng.do", method = RequestMethod.POST)
	public NexacroResult callPrdInfo(
		@ParamDataSet(name = "ds_master",      required = false) List<Map<String, Object>> mainMap
	                                  ) throws Exception 
	{
		NexacroResult result = new NexacroResult();
		int cnt = 0;

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		cnt = pI_PrdInfoCallService.PI_PrdStatCall(mainMap);

		result.addVariable("lv_piCount",cnt);
		
		return result;
	}
}
