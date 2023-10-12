package com.ssp.bo.pc.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pc.service.PcExPrcMngService;
import com.ssp.bo.pc.service.PcPrcSalsDsgnMngService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.util.StringUtil;
@Controller
@RequestMapping(value = "/pc/pc-prc-sals-dsgn-mng")
public class PcPrcSalsDsgnMngController {
	private final Logger log = LoggerFactory.getLogger(PcPrdProcStbController.class);
	
	
	@Autowired
	private PcPrcSalsDsgnMngService pcPrcSalsDsgnMngService;
	
	
	//search-list
	@RequestMapping(value = "/search-list.do")
	public NexacroResult searchList(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
	
		NexacroResult result = new NexacroResult();
		
		try {
			
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		searchMap.put("sesId", session.getId());
		searchMap = CommonUtil.toCamelCaseMap(searchMap);
		if(admin != null) {
			searchMap.put("coCd", admin.get("CO_CD"));
		}
		result = pcPrcSalsDsgnMngService.searchList(searchMap);
		
		} catch (Exception e ) {
			log.error("공용상품 영업지정판매가 리스트 조회 실패");
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CA_32", "공용상품 영업지정판매가 리스트 조회 실패"}, e);
		}
		
		return  result;
	}
	
	//search-item
	@RequestMapping(value = "/save-info.do")
	public NexacroResult saveInfo(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
	
		NexacroResult result = new NexacroResult();
		
		
		
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			searchMap.put("sesId", session.getId());
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			if(admin != null) {
				searchMap.put("coCd", admin.get("CO_CD"));
				searchMap.put("regpsnId", admin.get("OPRTR_ID"));
				searchMap.put("updpsnId", admin.get("OPRTR_ID"));
			}
			result = pcPrcSalsDsgnMngService.saveInfo(searchMap);
			
		} catch (Exception e ) {
			log.error("공용상품 영업지정판매가 저장 실패");
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CA_33", "공용상품 영업지정판매가 저장 실패"}, e);
		}
		
		return  result;
	}
	
	//상세페이지 전용상품영업지정판매가 조회
	   @RequestMapping(value = "/get-salsprc-item-info.do")
	   public NexacroResult getNewExItemInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		   
		   
	       NexacroResult result = new NexacroResult();
	       searchMap = CommonUtil.toCamelCaseMap(searchMap);

	       try {
	           System.out.println(searchMap);
	           result = pcPrcSalsDsgnMngService.selectPcPrdPubSalsprc(searchMap);

	       } catch (Exception e) {
	           log.error("영업지정판매가 추가정보 조회 실패");
	           throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_39", "전용상품 추가정보 조회 실패" }, e);
	       }


	       return result;
	   }
	
}
