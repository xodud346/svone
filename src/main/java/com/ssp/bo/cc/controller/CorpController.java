package com.ssp.bo.cc.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.service.CorpService;
import com.ssp.core.co.util.CommonUtil;

/**
 * <pre>
 * @title   법인정보 컨트롤러
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  박성근
 * @since   2022.03.31.
 * @version 1.0
 * @see   	CorpController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.31.	박성근  	최초작성
 */
@Controller
@RequestMapping("/cc/corp")
public class CorpController {
	@Autowired
	private CorpService corpService;
	
	@RequestMapping(value="/list.do", method = RequestMethod.POST)
	public NexacroResult list(@ParamDataSet(name="ds_search", required=false) Map<String, Object> param) throws Exception {
		NexacroResult nr = new NexacroResult();
		
		Map<String, Object> cParam = CommonUtil.toCamelCaseMap(param);
		nr.addDataSet("ds_list", corpService.list(cParam));
		
		return nr;
	}
	
	@RequestMapping(value="/select.do", method = RequestMethod.POST)
	public NexacroResult select(@ParamDataSet(name="ds_search", required=false) Map<String, Object> param) throws Exception {
		NexacroResult nr = new NexacroResult();

		Map<String, Object> cParam = CommonUtil.toCamelCaseMap(param);
		nr.addDataSet("ds_select", corpService.list(cParam));
		
		return nr;
	}
}
