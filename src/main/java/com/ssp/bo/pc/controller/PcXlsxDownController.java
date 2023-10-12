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
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.service.PcXlsxDownService;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

@Controller
@RequestMapping(value = "/pc/pc-xlsx-down")
public class PcXlsxDownController {
	private final Logger log = LoggerFactory.getLogger(PcXlsxDownController.class);

	@Autowired
	protected SspPropertyService propertiesService;

	@Autowired
	private PcXlsxDownService pcXlsxDownService;

	
	//사업장별가격조회 CA_01
	@RequestMapping(value = "/excel-prd-prc-bzplc.do")
	public NexacroResult excelPrdPrcBzplc(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output", pcXlsxDownService.excelPrdPrcBzplc(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_01", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	//공용상품가격관리 CA_20
	@RequestMapping(value = "/excel-prd-prc.do")
	public NexacroResult excelPrdPrc(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output", pcXlsxDownService.excelPrdPrc(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_20", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	//전용상품가격관리 CA_37
	@RequestMapping(value = "/excel-ex-prd-prc.do")
	public NexacroResult excelExPrdPrc(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output", pcXlsxDownService.excelExPrdPrc(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_37", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	//공용상품영업지정판매가관리 CA_32
	@RequestMapping(value = "/excel-sals-prd-prc.do")
	public NexacroResult excelSalsPrdPrc(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output", pcXlsxDownService.excelSalsPrdPrc(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_32", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	
	//배치 CA_58
	@RequestMapping(value = "/excel-prd-prc-batch.do")
	public NexacroResult excelLargeDownBatch(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output", pcXlsxDownService.excelPrdPrcBatch(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_58", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	
	//공용상품처리대기 CA_10
	@RequestMapping(value = "/excel-prd-prc-stb.do")
	public NexacroResult excelLargeDown(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output", pcXlsxDownService.excelPrdPrcStb(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_10", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	//전용상품처리대기 CA_11
	@RequestMapping(value = "/excel-ex-prd-prc-stb.do")
	public NexacroResult excelLargeDownEx(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output", pcXlsxDownService.excelExPrdPrcStb(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_11", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
    
	//가격변동이력관리 CA_02
	@RequestMapping(value = "/excel-prd-prc-hst.do")
	public NexacroResult excelPrdPrcHst(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output", pcXlsxDownService.excelPrdPrcHst(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_02", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;		
    }
	
	//내부최저판매가관리 CA_55_A
	@RequestMapping(value = "/excel-intl-lwst.do")
	public NexacroResult excelIntlLwst(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output", pcXlsxDownService.excelIntlLwst(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_55_A", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;		
    }
	
	//참조가격관리 CA_55_B
	@RequestMapping(value = "/excel-prd-prc-chg.do")
	public NexacroResult excelPrdPrcChg(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output", pcXlsxDownService.excelPrdPrcChg(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "PC", "BO", "SSP_BO_CA_55_B", "대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;		
    }
}
