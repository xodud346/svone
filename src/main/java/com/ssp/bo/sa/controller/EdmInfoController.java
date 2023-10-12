package com.ssp.bo.sa.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.sa.service.EdmInfoService;

/**
 * EDM 타겟 관리 EdmInfoController
 * YHK
 * 2022.12.13.
 */
@Controller
@RequestMapping("/sa/edm")
public class EdmInfoController {
	
	@Autowired
	private EdmInfoService edmInfoService;
	
	/** EDM 타겟 관리 목록 조회 */
	@RequestMapping(value = "/selectEdmInfoList.do")
	public NexacroResult selectEdmInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{						
		return edmInfoService.selectEdmInfoList(searchMap);		
	}
	
	/** EDM 타겟 관리 저장 */
	@RequestMapping(value = "/insertEdmInfo.do")
	public NexacroResult insertEdmInfo(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> saveMap, HttpSession session) throws Exception{						
		return edmInfoService.insertEdmInfo(saveMap, new OdOrderComm(session));		
	}

	


}
