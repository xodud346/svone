package com.ssp.bo.co.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.service.CoPsnInfoArcHstService;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;

@Controller
@RequestMapping("/co/psn-info-arc-hst")
public class CoPsnInfoArcHstController {
	private final Logger logger = LoggerFactory.getLogger(CoPsnInfoArcHstController.class);
	@Autowired
	CoPsnInfoArcHstService coPsnInfoArcHstService;
	
	@RequestMapping(value = "/select-psn-info-arc-hst-list.do")
	public NexacroResult selectPsnInfoArcHstList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap, HttpSession session) throws Exception {
		NexacroResult rslt = new NexacroResult();
		
		try {
			List<Map<String,Object>> list = new ArrayList<>();
			Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(commandMap);
			searchMap.put("sesId", new OdOrderComm(session).getSession().get("SES_ID").toString());
			
			int totalCount = coPsnInfoArcHstService.selectCoPsnInfoArcHstListCnt(searchMap);
			if(totalCount > 0) {
				list = coPsnInfoArcHstService.selectCoPsnInfoArcHstList(searchMap);
			}
			
			rslt.addVariable("totalCount", totalCount);
			rslt.addDataSet("ds_output1", list);
		} catch (Exception e ) {
			String message = "개인정보접근이력조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_YA_38", "개인정보접근이력 조회"}, e) {};
		}
		return rslt;
	}
}
