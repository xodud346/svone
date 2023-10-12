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
import com.ssp.bo.rd.service.RdCommInitService;
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
 * @since 2022. 04. 14.
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.04.14 최초작성
 */
@Controller
@RequestMapping("/rd/rdCommInit")
public class RdCommInitController {
	private Logger logger = LoggerFactory.getLogger(RdCommInitController.class);

	@Resource(name = "rdCommInitService")
	private RdCommInitService rdCommInitService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		RdCommInitController.propertiesService = propertiesService;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectCommInitList
	 * 2. ClassName  : RdCommInitController.java
	 * 3. Comment    : R&D공통모듈
	 * 4. 작성자     : 
	 * 5. 작성일     : 2022.04.14
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-comm-init-list.do", method = RequestMethod.POST)
	public NexacroResult selectCommInitList(@ParamVariable(name = "dsDataSet")  String dsDataSet
			                               , @ParamVariable(name = "commLgCode") String commLgCode
			                               , @ParamVariable(name = "commHipoFg") String commHipoFg
			                               , @ParamVariable(name = "commOptn")   String commOptn
			                               , @ParamVariable(name = "language")   String language) throws Exception
	{
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try
		{
			Map<String, Object> inMap = new HashMap<>();
			inMap.put("dsDataSet", dsDataSet);
			inMap.put("commLgCode",commLgCode);
			inMap.put("commHipoFg",commHipoFg);
			inMap.put("commOptn",  commOptn);
			inMap.put("language",  language);

			result = rdCommInitService.selectCommInitList(inMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectCommInitList", "R&D공통코드" }, e) {	};
		}

		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : selectRndPrdAuthInq
	 * 2. ClassName  : RdCommInitController.java
	 * 3. Comment    : RND상품권한조회
	 * 4. 작성자     : 
	 * 5. 작성일     : 2022.04.14
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-rnd-prd-auth-inq.do", method = RequestMethod.POST)
	public NexacroResult selectRndPrdAuthInq(@ParamVariable(name = "MNFR_NO")  String MNFR_NO
                                            , @ParamVariable(name = "PRD_CLCD") String PRD_CLCD) throws Exception
	{
		NexacroResult result = new NexacroResult();

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> searchMap = new HashMap<>();
		searchMap.put("MNFR_NO", MNFR_NO);
		searchMap.put("PRD_CLCD",PRD_CLCD);

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD","KO");
		}

		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals(""))
		{
			searchMap.put("CO_CD", userInfo.get("CO_CD"));
		}

		String empNo = StringUtil.getString(searchMap.get("EMP_NO"));

		if(CommUtil.nvl(empNo).equals(""))
		{
			searchMap.put("EMP_NO", userInfo.get("EMP_NO"));
		}

		try
		{
			result = rdCommInitService.selectRndPrdAuthInq(searchMap);
		}
		catch(Exception e)
		{
			throw new LoggingException(new String[] { "RD", "BO", "selectCommInitList", "R&D공통코드" }, e) {	};
		}

		return result;
    }
}
