/*------------------------------------------------------------------------------
 * NAME : FileUploadDowloadController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.20  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   FileUploadDowloadController
 * @@desc   첨부파일내역 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2022.04.20
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/file-upload-dowload")
public class FileUploadDowloadController {
	private Logger logger = LoggerFactory.getLogger(FileUploadDowloadController.class);

	@Resource(name = "fileUploadDowloadService")
	private FileUploadDowloadService fileUploadDowloadService;

	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		FileUploadDowloadController.propertiesService = propertiesService;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectAttcFileDtlsInq
	 * 2. ClassName  : FileUploadDowloadController.java
	 * 3. Comment    : 첨부파일내역 리스트 조회 (selectAttcFileDtlsInq)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.20
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-attc-file-dtls-inq.do", method = RequestMethod.POST)
	public NexacroResult selectAttcFileDtlsInq(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		try
		{
			result = fileUploadDowloadService.selectAttcFileDtlsInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectFileUploadDowload", "첨부파일내역 조회" }, e) { };
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : save-file-upload-dowload
	 * 2. ClassName  : FileUploadDowloadController.java
	 * 3. Comment    : 첨부파일내역 업로드 저장 (saveFileUploadDowload)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.20
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-file-upload-dowload.do")
	public void saveFileUploadDowload(HttpServletRequest request
			                         , HttpServletResponse response) throws Exception 
	{
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try
		{
			fileUploadDowloadService.saveFileUploadDowload(request, response);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveFileUploadDowload", "첨부파일내역 업로드 저장" }, e) { };
		}
	}

	/**
	 * <pre>
	 * 1. MethodName : saveAddOptnFileUpload
	 * 2. ClassName  : FileUploadDowloadController.java
	 * 3. Comment    : 전시요청 추가정보 파일 업로드 저장 (saveAddOptnFileUpload)
	 * 4. 작성자    :
	 * 5. 작성일    : 2023.08.08
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-add-optn-file-upload.do")
	public void saveAddOptnFileUpload(HttpServletRequest request
			                         , HttpServletResponse response) throws Exception
	{
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try
		{
			fileUploadDowloadService.saveAddOptnFileUpload(request, response);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveFileUploadDowload", "첨부파일내역 업로드 저장" }, e) { };
		}
	}

	/**
	 * <pre>
	 * 1. MethodName : saveMultiFileDelUpdate
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 첨부파일내역 업데이트 및 삭제 (saveMultiFileDelUpdate)
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.28
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-mult-file-del-update.do", method = RequestMethod.POST)
	public NexacroResult saveMultiFileDelUpdate(@ParamDataSet(name = "ds_saveFileList",required = false) List<Map<String, Object>> saveMap) throws Exception 
	{
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try
		{
			String contextRealPath = propertiesService.getString("file.path.root");

			fileUploadDowloadService.saveMultiFileDelUpdate(saveMap, contextRealPath);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "saveMultiFileDelUpdate", "첨부파일내역 삭제 및 업데이트" }, e) { };
		}

		return result;
	}
}