package com.ssp.bo.rd.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.DispStatsChgHstService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * 
 * @title
 * @package com.ssp.bo.rd.controller
 * 
 *          <pre>
 * @author
 * @since 2022. 02. 16.
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.01.25 최초작성
 */
@Controller
@RequestMapping("/rd/DispStatsChgHst")
public class DispStatsChgHstController {
	private Logger logger = LoggerFactory.getLogger(DispStatsChgHstController.class);

	@Resource(name = "dispStatsChgHstService")
	private DispStatsChgHstService dispStatsChgHstService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		DispStatsChgHstController.propertiesService = propertiesService;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectList
	 * 2. ClassName  : DispStatsChgHstController.java
	 * 3. Comment    : 진열상태변경이력
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.02.17
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/selectList.do")
	public NexacroResult selectPgmMngList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			// TODO 기본값 설정 확인 필요
			String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
			if (CommUtil.nvl(langCd).equals("")) {
				searchMap.put("LANG_CD", "KO");
			}
			result = dispStatsChgHstService.selectList(searchMap);
		} catch (Exception ne) {
			String message = "진열상태변경이력 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "selectPgmMngList", "진열상태변경이력" }, ne) {
			};

		}
		return result;

	}


}
