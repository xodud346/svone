package com.ssp.bo.rd.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.rd.service.RdXlsxDownService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

@Controller
@RequestMapping(value = "/rd/rd-xlsx-down")
public class RdXlsxDownController {
	private final Logger log = LoggerFactory.getLogger(RdXlsxDownController.class);
 
	@Autowired
	protected SspPropertyService propertiesService;

	@Autowired
	private RdXlsxDownService rdXlsxDownService;

	//공용상품가격관리 LA_01
	@RequestMapping(value = "/excel-prd-prc.do")
	public NexacroResult excelPrdPrc(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}
		
		searchMap.put("SES_ID", session.getId());
		
		
		try {
			result.addDataSet("ds_output", rdXlsxDownService.excelPrdPrc(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_LA_01", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	//전용상품가격관리 LA_05
	@RequestMapping(value = "/excel-ex-prd-prc.do")
	public NexacroResult excelExPrdPrc(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}
		
		searchMap.put("SES_ID", session.getId());
		
		try {
			result.addDataSet("ds_output", rdXlsxDownService.excelExPrdPrc(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_LA_05", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	//공용상품영업지정판매가관리 LA_18
	@RequestMapping(value = "/excel-sals-prd-prc.do")
	public NexacroResult excelSalsPrdPrc(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}
		
		searchMap.put("SES_ID", session.getId());
		
		try {
			result.addDataSet("ds_output", rdXlsxDownService.excelSalsPrdPrc(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_LA_18", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	//공용상품처리대기 LA_24
	@RequestMapping(value = "/excel-prd-prc-stb.do")
	public NexacroResult excelLargeDown(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}
		
		searchMap.put("SES_ID", session.getId());
		
		try {
			result.addDataSet("ds_output", rdXlsxDownService.excelPrdPrcStb(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_LA_24", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	//전용상품처리대기 LA_25
	@RequestMapping(value = "/excel-ex-prd-prc-stb.do")
	public NexacroResult excelLargeDownEx(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}
		
		searchMap.put("SES_ID", session.getId());
		
		try {
			result.addDataSet("ds_output", rdXlsxDownService.excelExPrdPrcStb(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_LA_25", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
    
	//가격변동이력관리 LA_23
	@RequestMapping(value = "/excel-prd-prc-hst.do")
	public NexacroResult excelPrdPrcHst(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		try {
			result.addDataSet("ds_output", rdXlsxDownService.excelPrdPrcHst(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_LA_23", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;		
    }

}
