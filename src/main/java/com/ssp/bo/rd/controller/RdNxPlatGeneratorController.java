package com.ssp.bo.rd.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.RdNxPlatGeneratorService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 *
 * @title
 * @package com.ssp.bo.rd.controller
 *
 *          <pre>
 * @author
 * @since 2022. 04. 14.
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.04.14 최초작성
 */
@Controller
@RequestMapping("/rd/rdNxPlatGenerator")
public class RdNxPlatGeneratorController {
	private Logger logger = LoggerFactory.getLogger(RdCommInitController.class);

	@Resource(name = "rdNxPlatGeneratorService")
	private RdNxPlatGeneratorService rdNxPlatGeneratorService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		RdNxPlatGeneratorController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectNxPlatGeneratorUser
	 * 2. ClassName  : RdCommInitController.java
	 * 3. Comment    : 테이블 유저를 조회
	 * 4. 작성자     : 
	 * 5. 작성일     : 2022.04.14
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/selectNxPlatGeneratorUser.do", method = RequestMethod.POST)
	public NexacroResult selectNxPlatGeneratorUser(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try
		{
			result = rdNxPlatGeneratorService.selectNxPlatGeneratorUser();
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectNxPlatGeneratorUser", "R&D테이블유저조회" }, e) {	};
		}

		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : selectNxPlatGeneratorM
	 * 2. ClassName  : RdCommInitController.java
	 * 3. Comment    : 모든 테이블을 조회
	 * 4. 작성자     : 
	 * 5. 작성일     : 2022.04.14
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/selectNxPlatGeneratorM.do", method = RequestMethod.POST)
	public NexacroResult selectNxPlatGeneratorM(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception
	{
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try
		{
			result = rdNxPlatGeneratorService.selectNxPlatGeneratorM(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectNxPlatGeneratorM", "R&D모든테이블정보조회" }, e) {	};
		}

		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : selectNxPlatGeneratorD
	 * 2. ClassName  : RdCommInitController.java
	 * 3. Comment    : 각각 테이블 항목을 조회
	 * 4. 작성자     : 
	 * 5. 작성일     : 2022.04.14
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/selectNxPlatGeneratorD.do", method = RequestMethod.POST)
	public NexacroResult selectNxPlatGeneratorD(@ParamVariable(name = "TABLE_NAME") String TABLE_NAME
                                               , @ParamVariable(name = "CODE")       String CODE) throws Exception
	{
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try
		{
			Map<String, Object> searchMap = new HashMap<>();
			searchMap.put("TABLE_NAME",TABLE_NAME);
			searchMap.put("CODE",      CODE);

			result = rdNxPlatGeneratorService.selectNxPlatGeneratorD(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectNxPlatGeneratorD", "R&D개별테이블정보조회" }, e) {	};
		}

		return result;
    }
}
