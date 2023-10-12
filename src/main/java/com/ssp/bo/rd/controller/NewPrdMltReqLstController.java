/*------------------------------------------------------------------------------
 * NAME : NewPrdMltReqLstController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2023.07.04  김완수
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.controller;

import java.util.HashMap;
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
import com.ssp.bo.pr.service.PrProductNewService;
import com.ssp.bo.rd.service.NewPrdMltReqLstService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   NewPrdMltReqLstController
 * @@desc   신규상품일괄요청처리 Controller
 * @package com.ssp.bo.rd.controller
 * <pre>
 * @author
 * @since 2023.07.04
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/rd/new-prd-mlt-req-lst")
public class NewPrdMltReqLstController {
	private Logger logger = LoggerFactory.getLogger(NewPrdMltReqLstController.class);

	@Resource(name = "newPrdMltReqLstService")
	private NewPrdMltReqLstService newPrdMltReqLstService;

	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		NewPrdMltReqLstController.propertiesService = propertiesService;
	}
	@Autowired
    private PrProductNewService prProductNewService;

	
	/**
	 * <pre>
	 * 1. MethodName : selectNewPrdMltReqLst
	 * 2. ClassName  : NewPrdMltReqLstController.java
	 * 3. Comment    : 신규상품일괄요청처리 리스트 조회
	 * 4. 작성자    :
	 * 5. 작성일    : 2023.07.04
	 * </pre>
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-new-prd-mlt-req-lst.do", method = RequestMethod.POST)
	public NexacroResult selectNewPrdMltReqLst(
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
			result = newPrdMltReqLstService.selectNewPrdMltReqLst(searchMap, session);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectNewPrdMltReqLst", "신규상품일괄요청처리 조회"}, e) {
			};
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectAgrCompDispStt
	 * 2. ClassName  : NewPrdMltReqLstController.java
	 * 3. Comment    : 합의완료 진열상태 팝업 리스트 조회
	 * 4. 작성자    :
	 * 5. 작성일    : 2023.07.06
	 * </pre>
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-agr-comp-disp-stt.do", method = RequestMethod.POST)
	public NexacroResult selectAgrCompDispStt(
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
			result = newPrdMltReqLstService.selectAgrCompDispStt(searchMap, session);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "selectAgrCompDispStt", "합의완료 진열상태 조회"}, e) {
			};
		}
		
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveAgrProcRsn
	 * 2. ClassName  : NewPrdReqLstController.java
	 * 3. Comment    : 합의처리사유 저장
	 * 4. 작성자    :
	 * 5. 작성일    : 2023.07.07
	 * </pre>
	 *
	 * @param mainMap1
	 * @param catgMap2
	 * @param notiMap3
	 * @param fileMap4
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-agr-proc-rsn.do", method = RequestMethod.POST)
	public NexacroResult saveAgrProcRsn(
		@ParamDataSet(name = "ds_param", required = false) Map<String, Object> mainMap1
	) throws Exception {
		NexacroResult result;

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
		if (userInfo == null) {
			userInfo = new HashMap<String, Object>();
		}
		String contextRealPath = propertiesService.getString("file.path.root");
		try {
			result = newPrdMltReqLstService.saveAgrProcRsn(mainMap1, userInfo, contextRealPath);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "newPrdMltReqLstService", "합의처리사유 저장"}, e) {
			};
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : savePrdMltReqRjctProcStor
	 * 2. ClassName  : NewPrdMltReqLstController.java
	 * 3. Comment    : 상품일괄요청반려처리저장
	 * 4. 작성자    :
	 * 5. 작성일    : 2023.07.10
	 * </pre>
	 *
	 * @param mainMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-prd-mlt-req-rjct-proc-stor.do", method = RequestMethod.POST)
	public NexacroResult savePrdMltReqRjctProcStor(
		@ParamDataSet(name = "ds_master", required = false) Map<String, Object> mainMap
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
			result = newPrdMltReqLstService.savePrdMltReqRjctProcStor(mainMap, userInfo);
		} catch (Exception e) {
			throw new LoggingException(new String[]{"RD", "BO", "savePrdMltReqRjctProcStor", "상품일괄요청반려처리 저장"}, e) {};
		}

		return result;
	}
}
