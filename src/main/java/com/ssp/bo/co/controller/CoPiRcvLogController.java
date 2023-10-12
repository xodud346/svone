package com.ssp.bo.co.controller;

import java.util.List;
import java.util.Map;

import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.co.service.CoPiRcvLogService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.util.StringUtil;


/**
 * <pre>
 * 
 * @title
 * @package com.serveone.co.service.controller
 * 
 *          <pre>
 * @author
 * @since 2022.03.21
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 */
@Controller
@RequestMapping("/co")
public class CoPiRcvLogController {
	private Logger logger = LoggerFactory.getLogger(CoPiRcvLogController.class);

	@Autowired
	private CoPiRcvLogService coPiRcvLogService;

	/**
	 * <pre>
	 * 1. MethodName : selectPiRcvLogList
	 * 2. ClassName  : CoPiRcvLogController.java
	 * 3. Comment    : pi 로그 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.21
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-pi-rcv-log-list.do")
	public NexacroResult selectPiRcvLogList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			int totalCount = coPiRcvLogService.selectPiRcvLogListCount(searchMap);
			List<Map<String, Object>> list = coPiRcvLogService.selectPiRcvLogList(searchMap);
			makeSndDataCtsJSON(list);
			result.addVariable("totalCount", totalCount);
			result.addDataSet("ds_output1", list);
		} catch (Exception ne) {
			String message = "pi 로그 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_17", message }, ne);
		}
		return result;

	}
	/**
	 * <pre>
	 * 1. MethodName : select-pi-rcv-log-retry.do
	 * 2. ClassName  : CoPiRcvLogController.java
	 * 3. Comment    : pi 로그 재시도
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.06.28
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-pi-rcv-log-retry.do")
	public NexacroResult selectPiRcvLogRetry(
			@ParamDataSet(name = "ds_select", required = false) Map<String, Object> log) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
			log = CommonUtil.toCamelCaseMap(log);			
			coPiRcvLogService.callPi(log);
			coPiRcvLogService.updatPiRcvRetryCnt(log);
		} catch (Exception ne) {
			String message = "pi 로그 재시도 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_17", message }, ne);
		}
		return result;

	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPiIfInfoList
	 * 2. ClassName  : CoPiRcvLogController.java
	 * 3. Comment    : pi 인터페이스 정보 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.21
	 * </pre>
	 */
	@RequestMapping(value = "/select-pi-if-info-list.do")
	public NexacroResult selectPiIfInfoList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			List<Map<String, Object>> list = coPiRcvLogService.selectPiIfInfoList(searchMap);
			result.addVariable("totalCount", list.size());
			result.addDataSet("ds_output1", list);
		} catch (Exception ne) {
			String message = "pi 인터페이스 정보 조회";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_17", message }, ne);
		}
		return result;

	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPiRcvLogList
	 * 2. ClassName  : CoPiRcvLogController.java
	 * 3. Comment    : pi 인터페이스 저장
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.21
	 * </pre>
	 */
	@RequestMapping(value = "/save-pi-if-info.do")
	public NexacroResult savePiIfInfo(
			@ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> data) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	if(admin!=null && !admin.isEmpty()) {
        		data.stream().forEach(map -> { map.put("SESSION_OPRTR_ID", admin.get("OPRTR_ID")); });
            }
			coPiRcvLogService.savePiIFInfo(data);
		} catch (Exception ne) {
			String message = "pi 인터페이스 저장";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_17", message }, ne);
		}
		return result;

	}
	
	/**
	 * JSON 개행처리
	 * @param param
	 */
	private void makeSndDataCtsJSON(List<Map<String, Object>> param) {
		param.stream().forEach(map ->{ 
			try {
				if(map.get("SND_DATA_CTS") != null) {
					if(map.get("SND_DATA_CTS").toString().isEmpty()) {return;}
					ObjectMapper mapper = new ObjectMapper();
					String SND_DATA_CTS = StringUtil.getString(map.get("SND_DATA_CTS"));
					String NEW_SND_DATA_CTS = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(mapper.readTree(SND_DATA_CTS));
					if(NEW_SND_DATA_CTS.length() > SND_DATA_CTS.length()+SND_DATA_CTS.length()/10) {
						map.put("SND_DATA_CTS", NEW_SND_DATA_CTS);
					}
				}
			} catch (Exception e) {
				logger.error("JSON 개행처리 에러 ==> "+e.getMessage());
			} 
		});
	}
}
