package com.ssp.bo.co.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.co.service.CoMnuAuthChgHstService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;

@Controller
@RequestMapping("/co/mnu-auth-chg-hst")
public class CoMnuAuthChgHstController {
	@Autowired
	CoMnuAuthChgHstService coMnuAuthChgHstService;
	
	@RequestMapping(value="/select-mnu-auth-chg-hst-list.do", method=RequestMethod.POST)
	public NexacroResult selectMnuAuthChgHstList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> param, HttpSession session) throws Exception {
		NexacroResult rslt = new NexacroResult();
		
		try {
			List<Map<String,Object>> list = new ArrayList<>();
			Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(param);
			searchMap.put("sesId", new OdOrderComm(session).getSession().get("SES_ID").toString());
			
			int totalCount = coMnuAuthChgHstService.selectMnuAuthChgHstListCount(searchMap);
			
			if(totalCount > 0) {
				searchMap.put("offset", searchMap.get("startNum"));
				searchMap.put("fetchSize", searchMap.get("rowCount"));
				
				list = coMnuAuthChgHstService.selectMnuAuthChgHstList(searchMap);				
			}
			
			rslt.addVariable("totalCount", totalCount);
			rslt.addDataSet("ds_output1", list);
		} catch (Exception e) {
			String message = "메뉴 권한 변경이력 조회 오류";
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_YA_39", message }, e);
		}
		
		return rslt;
	}
}
