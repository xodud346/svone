package com.ssp.bo.vo.controller;

import java.util.Arrays;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.controller.CustOprunitController;
import com.ssp.bo.vo.service.VocHelperService;

/**
 * <pre>
 * @title  부서조회 목록
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 02. 11.
 * @version 1.0
 * @see CustOprunitController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.16		최초작성
 */
@Controller
@RequestMapping("/vo/voc/helper")
public class VocHelperController {
	private final Logger log = LoggerFactory.getLogger(VocHelperController.class);
	
	@Autowired
	private VocHelperService vocHelperService;
	
	private Map<String, Object> prefixParam(Map<String, Object> param) {
		
		String[] aCsv2List = { "BZPLC_IDS", "OPR_UNIT_IDS", "bzplcIds", "oprUnitIds", "csChrPsnIds" };  //, "caddrDispNms"
		for (String sTrgt : aCsv2List) {
			String data = (String) param.get(sTrgt);
			if (data!=null && !"".equals(data.trim())) {
				param.put(sTrgt, Arrays.asList( data.split("[ ,]+") ));
			} else {
				param.put(sTrgt, null);
			}
		}
		
		//CCUtils.cnvtParams(param);
		return param;
	}
	
	@RequestMapping(value="/list.do", method = RequestMethod.POST)
	public NexacroResult list(@ParamDataSet(name="dsParam", required=false) Map<String, Object> param, HttpSession session) throws Exception {
		NexacroResult nr = null;
		
		prefixParam(param);
		nr = CCUtils.cnvtMap2NexacroResult(vocHelperService.list(param));
		
		return nr;
	}
	
	@RequestMapping(value="/info.do", method = RequestMethod.POST)
	public NexacroResult info(@ParamDataSet(name="dsParam", required=false) Map<String, Object> param, HttpSession session) throws Exception {
		NexacroResult nr = null;
		
		prefixParam(param);
		nr = CCUtils.cnvtMap2NexacroResult(vocHelperService.info(param));
		
		return nr;
	}
	
	@RequestMapping(value="/save.do", method = RequestMethod.POST)
	public NexacroResult save(@ParamDataSet(name="dsParam", required=false) Map<String, Object> param, HttpSession session) throws Exception {
		NexacroResult nr = null;
		
		prefixParam(param);
		nr = CCUtils.cnvtMap2NexacroResult(vocHelperService.save(param));
		
		return nr;
	}
}
