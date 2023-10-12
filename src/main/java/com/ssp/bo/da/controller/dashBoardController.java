package com.ssp.bo.da.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.da.service.dashBoardService;
import com.ssp.bo.rd.controller.NewPrdReqLstController;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

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
@RequestMapping("/da/dash")
public class dashBoardController {
	private Logger logger = LoggerFactory.getLogger(NewPrdReqLstController.class);
	
	protected static SspPropertyService propertiesService;
	
	@Resource(name = "dashBoardService")
	private dashBoardService dashBoardService;
	
	/**
	 * <pre>
	 * 1. MethodName : 
	 * 2. ClassName  : 
	 * 3. Comment    : 
	 * 4. 작성자    :
	 * 5. 작성일    : 2022.04.21
	 * </pre>
	 *
	 * @param session
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-board.do", method = RequestMethod.POST)
	public NexacroResult selectDashBoardLst(
		HttpSession session
		, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	) throws Exception {
		NexacroResult result = new NexacroResult();
		
		logger.info("##  세션정보 : "+SessionsAdmin.getSessionAdmn());
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		if (SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> paramMap = new HashMap<>();
		logger.info("search Map : "+ searchMap);
		paramMap.put("CO_CD", admin.get("CO_CD"));
		paramMap.put("OPRTR_ID", admin.get("OPRTR_ID"));
		paramMap.put("OPRTR_NM", admin.get("OPRTR_NM"));
		paramMap.put("JB_CD", admin.get("JB_CD"));
		paramMap.put("JBPOS_NM", admin.get("JBPOS_NM"));
		paramMap.put("ORG_CD", admin.get("ORG_CD"));
		paramMap.put("PERIOD", searchMap.get("PERIOD"));
		paramMap.put("INIT", searchMap.get("INIT"));
		try {
			result = dashBoardService.selectDashBoardLst(paramMap, session);
			
		} catch (Exception e) {
			throw new LoggingException(new String[]{"FRAME", "BO", "selectDashBoardLst", "메인화면 대시보드 조회"}, e) {
			};
		}

		return result;
	}
}
