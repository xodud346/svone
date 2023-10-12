/*------------------------------------------------------------------------------
 * NAME : MsdsMngController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.28  newwhite7
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
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.MsdsMngService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * MSDS 관리 Controller
 *
 * @since 2022.04.28
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/msds-mng")
public class MsdsMngController {
	private final Logger logger = LoggerFactory.getLogger(MsdsMngController.class);

	protected static SspPropertyService propertiesService;
	@Resource(name = "msdsMngService")
	private MsdsMngService msdsMngService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		MsdsMngController.propertiesService = propertiesService;
	}


	/**
	 * MSDS 관리 목록 조회
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-msds-mng.do", method = RequestMethod.POST)
	public NexacroResult selectMsdsMng(
		HttpSession session
		, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	) throws Exception {
		NexacroResult result;

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
		if (CommUtil.nvl(langCd).equals("")) {
			searchMap.put("LANG_CD", "KO");
		}

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if (CommUtil.nvl(coCd).equals("") && admin != null) {
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try {
			result = msdsMngService.selectMsdsMng(searchMap, session);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectMsdsMng", "MSDS 관리 목록 조회"}, e) {};
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectMsdsMngDtl
	 * 2. ClassName  : MsdsMngController.java
	 * 3. Comment    : MSDS 상세 조회 (selectMsdsMngDtl)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.12
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-msds-mng-dtl.do", method = RequestMethod.POST)
	public NexacroResult selectMsdsMngDtl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
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
			result = msdsMngService.selectMsdsMngDtl(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectMsdsMngDtl", "MSDS 상세 조회" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveMsdsMng
	 * 2. ClassName  : MsdsMngController.java
	 * 3. Comment    : MSDS관리 등록, 수정(saveMsdsMng)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.05.12
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-msds-mng.do", method = RequestMethod.POST)
	public NexacroResult saveMsdsMng(@ParamDataSet(name = "ds_master", required = false) List<Map<String, Object>> saveMap
			                         , @ParamDataSet(name = "ds_saveFileList",required = false) List<Map<String, Object>> fileMap) throws Exception 
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
			
			result = msdsMngService.saveMsdsMng(saveMap, userInfo,fileMap,contextRealPath);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "insertMsdsMng", "MSDS관리 등록" }, e) { };
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : cprtcpValidation
	 * 2. ClassName  : MsdsMngController.java
	 * 3. Comment    : 협력사 MSDS정보 중복체크
	 * 4. 작성자    :
	 * 5. 작성일    : 2023.01.25
	 * </pre>
	 */
	@RequestMapping(value="/validation-cprtcp.do", method=RequestMethod.POST)
	public NexacroResult cprtcpValidation(@ParamDataSet(name = "ds_search", required = false) List<Map<String, Object>> searchMap) throws Exception{
		
		NexacroResult result;
		
		try {
			
			result = msdsMngService.cprtcpValidation(searchMap);
			
		}
		catch(Exception e) {
			
			throw new LoggingException(new String[] { "RD", "BO", "cprtcpValidation", "협력사 MSDS정보 중복체크" }, e) { };
			
		}
				
		return result;
		
	}
	
	
	
	/**
	 * <pre>
	 * 1. MethodName : selectCodeChkYn
	 * 2. ClassName  : CodeChkYnController.java
	 * 3. Comment    : 저장 코드체크여부 조회 (selectCodeChkYn)
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
			result = msdsMngService.selectCodeChkYn(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectCodeChkYn", "저장 코드체크여부 조회" }, e) { };
		}

		return result;
	}
	
//	private Map<String, String> mXlsxMappCols = new HashMap<String, String>(){{
//		//put("I_USER_ID"              , "BO_MSDS_LOC"      );
//		put("I_CO_CD"                , "coCd"             );
//		put("I_PRD_ID"               , "productId"        );
//		put("I_CPRTCP_ID"            , "partnerId"        );
//		put("I_MSDS_FNL_CHG_DT"      , "msdsFnlChgDt"     );
//		put("I_ATCH_TP_CD"           , "etcFds"           );
//		put("I_RND_MSDS_URL"         , "msdsUrl"          );
//		put("I_ORI_ATFL_NM"          , "oriAtflNm"        );
//		put("I_ATFL_STOR_PATH"       , "atflStorPath"     );
//		put("I_ATFL_LEN"             , "atflLen"          );
//		put("I_ATFL_NM"              , "msdsFileNm"       );
//		put("I_LOC_ATTC_FILENM"      , "locAttcFilenm"    );
//		put("I_LOC_ATTC_FILEPATH"    , "locAttcFilepath"  );
//		put("I_LOC_ATTC_FILESIZE"    , "locAttcFilesize"  );
//		put("I_LOC_ATTC_FILE_ORI_NM" , "locAttcFileOriNm" );
//		put("I_LOC_ATFL_FNL_CHG_DT"  , "locAtflFnlChgDt"  );
//		put("I_SRVON_CERT_YN"        , "srvonCertYn"      );
//		put("I_SRVON_CERT_FNL_CHG_DT", "srvonCertFnlChgDt");
//	}};
	private List<Map<String, Object>> prefixXlsx4MsdsLoc(List<Map<String, Object>> lsXlsx, HttpSession session) throws Exception {
		if (lsXlsx == null || lsXlsx.size() < 1) { return lsXlsx; }
		
		// Session
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) { SessionsAdmin.setSessionAdminLocal(); }
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		if (userInfo == null) { userInfo = new HashMap<String, Object>(); }
		String sLoginId = StringUtil.getString(userInfo.get("OPRTR_ID"));
		
		for (Map<String, Object> xItem : lsXlsx) {
			xItem.put("I_USER_ID", sLoginId);
			
			//for (String tKey : mXlsxMappCols.keySet()) {
			//	String  sKey = mXlsxMappCols.get(tKey);
			//	
			//	xItem.put(tKey, xItem.get(sKey));
			//}
		}
		
		
		return lsXlsx;
	}
	
	/**
	 * MSDS 엑셀업로드 후 데이터 처리
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value="/xlsx-upload-aftr-proc.do", method=RequestMethod.POST)
	public NexacroResult xlsxUploadAftrProc(@ParamDataSet(name="ds_xlsx", required=false) List<Map<String, Object>> lsXlsx, HttpSession session) throws Exception {
		NexacroResult result = new NexacroResult();
		
		Map<String, Object> map = new HashMap<String, Object>(){{
			put("lsXlsx", prefixXlsx4MsdsLoc(lsXlsx, session));
		}};
		
		try {
			msdsMngService.saveSpRdCprtrMsdsLocMultiUpld(map);
			result.addDataSet("ds_xlsx", map.get("lsXlsx"));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "xlsxUploadAftrProc", "일괄 업로드 처리" }, e) { };
		}
		
		return result;
	}
	
	
	/**
	 * MSDS 엑셀업로드 후 데이터 처리 -> 속도개선을 위해 프로시저 JAVA로 변경 
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value="/xlsx-upload-aftr-proc_re.do", method=RequestMethod.POST)
	public NexacroResult xlsxUploadAftrProcReNew(@ParamDataSet(name="ds_xlsx", required=false) List<Map<String, Object>> lsXlsx, HttpSession session) throws Exception {
		NexacroResult result = new NexacroResult();
		
		// Session
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) { SessionsAdmin.setSessionAdminLocal(); }
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		if (userInfo == null) { userInfo = new HashMap<String, Object>(); }
		String sLoginId = StringUtil.getString(userInfo.get("OPRTR_ID"));
		//xItem.put("I_USER_ID", sLoginId);
		try {
			List<Map<String, Object>> resultList = msdsMngService.saveSpRdCprtrMsdsLocMultiUpldReNew(lsXlsx,sLoginId);
			result.addDataSet("ds_result", resultList);
			result.addDataSet("ds_xlsx", lsXlsx);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "xlsxUploadAftrProcReNew", "일괄 업로드 처리" }, e) { };
		}
		
		return result;
	}
	
	
	
	
}
