package com.ssp.bo.sa.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.sa.service.SaExcelDownService;

/**
 * 영업마케팅 엑셀다운로드  SaExcelDownController
 * YHK
 * 2022.12.13.
 */

@Controller
@RequestMapping(value = "/sa/excelDown")
public class SaExcelDownController {
	
	@Autowired
	private SaExcelDownService saExcelDownService;
	
	
	
	/** 기획전 목록 대용량 엑셀 다운로드 */
	@RequestMapping(value = "/large/exhbnInfo.do")
	public NexacroResult createLargeExcelexhbnInfo(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> saveMap,  
			HttpSession session) throws Exception {
					
		return saExcelDownService.createLargeExcelexhbnInfo(saveMap, new OdOrderComm(session));
		
	}
	
	/** 프리패키지 목록 대용량 엑셀 다운로드 */
	@RequestMapping(value = "/large/prePkgInfo.do")
	public NexacroResult createLargeExcelprePkgInfo(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> saveMap,  
			HttpSession session) throws Exception {
					
		return saExcelDownService.createLargeExcelprePkgInfo(saveMap, new OdOrderComm(session));
		
	}
	
	/** 메인상품 목록 대용량 엑셀 다운로드 */
	@RequestMapping(value = "/large/mainPrdInfo.do")
	public NexacroResult createLargeExcelmainPrdInfo(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> saveMap,  
			HttpSession session) throws Exception {
					
		return saExcelDownService.createLargeExcelmainPrdInfo(saveMap, new OdOrderComm(session));
		
	}
	
	/** EDM 타겟 관리 대용량 엑셀 다운로드 */
	@RequestMapping(value = "/large/edmInfo.do")
	public NexacroResult createLargeExcelEdmInfo(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> saveMap, 
			HttpSession session) throws Exception {
					
		return saExcelDownService.createLargeExcelEdmInfo(saveMap, new OdOrderComm(session));
		
	}
	
	
	
	
}
