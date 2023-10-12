package com.ssp.bo.cc.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.service.CustMbrHistService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  고객이력 Controller
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 02. 24.
 * @version 1.0
 * @see CustMbrHistController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.24		최초작성
 */
@Controller
@RequestMapping("/bo/cust/mbr/hist")
public class CustMbrHistController {
	private final Logger log = LoggerFactory.getLogger(CustMbrHistController.class);
		
	@Resource(name="custMbrHistService") 
	private CustMbrHistService custMbrHistService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustGrdList
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 회원정보 전체 이력 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 24.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-mbr-hist-pop.do")
	public NexacroResult selectMbrHistPop(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", custMbrHistService.selectMbrHistPop(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_51", "회원정보 전체 이력 조회" }, e) {
			};
		}
		return result;
    }
	
}
