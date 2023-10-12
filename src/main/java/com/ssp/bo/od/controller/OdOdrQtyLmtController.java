package com.ssp.bo.od.controller;

import static com.ssp.bo.cc.CCUtils.prefixSession;

import java.util.HashMap;
import java.util.List;
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
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.od.service.OdOdrQtyLmtService;
import com.ssp.bo.od.util.OBU;
import com.ssp.core.co.util.CoHttp;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.exceptions.OdBizException;

/**
 * <pre>
 * @title  주문수량제한 관리 Controller
 * @package com.ssp.bo.od.controller
 * <pre>
 * @author  sg.park
 * @since   2023.01.12
 * @version 1.0
 * @see OdOdrQtyLmtController
 * =================== 변경 내역 ==================
 *  날짜    	변경자  	내용
 * ------------------------------------------------
 *  2023.01.12	sg.park 	최초작성
 */
@Controller
@RequestMapping("/bo/od/odr-lmt-qty")
public class OdOdrQtyLmtController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private OdOdrQtyLmtService service;

	@RequestMapping(value = "/use-yn.do", method = RequestMethod.POST)
	public NexacroResult selectQtyLmtUseYn(@ParamDataSet(name = "ds_odrQtyLmtUseYn", required = false) Map<String, Object> map, HttpSession session) throws Exception {
		prefixSession(map, session);
		String dsKey="ds_odrQtyLmtUseYn";
		NexacroResult nr = new NexacroResult();
		
		service.selectQtyLmtUseYn(map);
		nr.addDataSet(dsKey, map.get(dsKey));
		
		return nr;
	}

	@RequestMapping(value = "/list.do", method = RequestMethod.POST)
	public NexacroResult listOdrQtyLmt(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> map, HttpSession session) throws Exception {
		prefixSession(map, session);
		String dsKey="ds_list";
		NexacroResult nr = new NexacroResult();
		
		service.listOdrQtyLmt(map);
		nr.addDataSet(dsKey, map.get(dsKey));
		
		return nr;
	}
	
	@RequestMapping(value = "/xlsx.do", method = RequestMethod.POST)
	public NexacroResult xlsxOdrQtyLmt(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> map, HttpSession session) throws Exception {
		NexacroResult nr = new NexacroResult();
		
		prefixSession(map, session);
		String dsKey="ds_xlsx";
		
		service.xlsxOdrQtyLmt(map);
		nr.addDataSet(dsKey, map.get(dsKey));
		
		return nr;
	}
	
	@RequestMapping(value = "/info.do", method = RequestMethod.POST)
	public NexacroResult infoOdrQtyLmt(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> map, HttpSession session) throws Exception {
		NexacroResult nr = new NexacroResult();
		
		service.infoOdrQtyLmt(map);
		nr.addDataSet("ds_info"             , map.get("ds_info"             ));
		nr.addDataSet("ds_info_tgt_prd"     , map.get("ds_info_tgt_prd"     ));
		nr.addDataSet("ds_info_except_bzplc", map.get("ds_info_except_bzplc"));
		
		return nr;
	}
	
	
	@RequestMapping(value = "/hist.do", method = RequestMethod.POST)
	public NexacroResult histOdrQtyLmt(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> map, HttpSession session) throws Exception {
		NexacroResult nr = new NexacroResult();
		
		service.histOdrQtyLmt(map);
		nr.addDataSet("ds_hist", map.get("ds_hist"));
		
		return nr;
	}
	
	
	
	@RequestMapping(value = "/save.do", method = RequestMethod.POST)
	public NexacroResult saveOdrQtyLmtInfo(
			  @ParamDataSet(name = "ds_info"                 , required = false)      Map<String, Object>  maInfo
			, @ParamDataSet(name = "ds_info_tgt_prd"         , required = false) List<Map<String, Object>> lsTgtPrd
			, @ParamDataSet(name = "ds_info_except_bzplc"    , required = false) List<Map<String, Object>> lsExceptBzplc
			, @ParamDataSet(name = "ds_info_tgt_prd_del"     , required = false) List<Map<String, Object>> lsTgtPrdDel
			, @ParamDataSet(name = "ds_info_except_bzplc_del", required = false) List<Map<String, Object>> lsExceptBzplcDel
			, HttpSession session) throws Exception {
		
		NexacroResult nr = new NexacroResult();
		if (maInfo           != null && maInfo          .size() > 0) { CCUtils.prefixSession(maInfo          , session); }
		if (lsTgtPrd         != null && lsTgtPrd        .size() > 0) { CCUtils.prefixSession(lsTgtPrd        , session); maInfo.put("LIST_TGT_PRD"         , lsTgtPrd        ); }
		if (lsExceptBzplc    != null && lsExceptBzplc   .size() > 0) { CCUtils.prefixSession(lsExceptBzplc   , session); maInfo.put("LIST_EXCEPT_BZPLC"    , lsExceptBzplc   ); }
		if (lsTgtPrdDel      != null && lsTgtPrdDel     .size() > 0) { CCUtils.prefixSession(lsTgtPrdDel     , session); maInfo.put("LIST_TGT_PRD_DEL"     , lsTgtPrdDel     ); }
		if (lsExceptBzplcDel != null && lsExceptBzplcDel.size() > 0) { CCUtils.prefixSession(lsExceptBzplcDel, session); maInfo.put("LIST_EXCEPT_BZPLC_DEL", lsExceptBzplcDel); }
		
		service.saveOdrQtyLmt(maInfo);
		
		return nr;
	}
	
	
	@RequestMapping(value = "/patch.do", method = RequestMethod.POST)
	public NexacroResult patch(@ParamDataSet(name = "ds_patch", required = false) List<Map<String, Object>> lsPatch, HttpSession session) throws Exception {
		NexacroResult nr = new NexacroResult();
		
		Map<String, Object> map = new HashMap<String, Object>();
		CCUtils.prefixSession(map    , session);
		
		if (lsPatch != null && lsPatch .size() > 0) {
			// CCUtils.prefixSession(lsPatch, session);
			Map<String, Object> row0 = lsPatch.get(0);
			String useYn = (row0 != null) ? (String) row0.get("USE_YN") : "N";
			useYn = useYn != null && !"".equals(useYn.trim()) ? useYn.toUpperCase() : "N";
			
			map.put("USE_YN"    , useYn  );
			map.put("LIST_PATCH", lsPatch);
			
			service.patchOdrQtyLmt(map);
		}
		
		
		return nr;
	}
	
	@RequestMapping(value = "/trmn.do", method = RequestMethod.POST)
	public NexacroResult trmnOdrQtyLmtInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> map, @ParamDataSet(name = "ds_contInfo", required = false) Map<String, Object> maContInfo, HttpSession session) throws Exception {
		NexacroResult nr = new NexacroResult();
		
		service.trmnOdrQtyLmt(map);
		
		return nr;
	}
	
	
	@RequestMapping(value = "/prd/info.do", method = RequestMethod.POST)
	public NexacroResult infoPrd(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> map, HttpSession session) throws Exception {
		NexacroResult nr = new NexacroResult();
		
		service.infoPrd(map);
		nr.addDataSet("ds_prd_Info", map.get("dsPrdInfo"));
		
		return nr;
	}
	
	@RequestMapping(value = "/validate/prd.do", method = RequestMethod.POST)
	public NexacroResult validatePrd  (@ParamDataSet(name = "ds_validate_params", required = false) List<Map<String, Object>> lsParam, HttpSession session) throws Exception {
		NexacroResult nr = new NexacroResult();
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("ds_validate_params", lsParam);
		CCUtils.prefixSession(map, session);
		
		service.validatePrd(map);
		nr.addDataSet("ds_validate_result", map.get("ds_validate_result"));
		
		return nr;
	}
	
	@RequestMapping(value = "/validate/bzplc.do", method = RequestMethod.POST)
	public NexacroResult validateBzplc(@ParamDataSet(name = "ds_validate_params", required = false) List<Map<String, Object>> lsParam, HttpSession session) throws Exception {
		NexacroResult nr = new NexacroResult();
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("ds_validate_params", lsParam);
		CCUtils.prefixSession(map, session);
		
		service.validateBzplc(map);
		nr.addDataSet("ds_validate_result", map.get("ds_validate_result"));
		
		return nr;
	}
	
	
	
	@RequestMapping(value = "/xlsx/background/download.do", method = RequestMethod.POST)
	public NexacroResult xlsxBackgroundDownload(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> map, HttpSession session) throws Exception {
		NexacroResult nr = new NexacroResult();
		
		try {
			
			CCUtils.prefixSession(map, session);
			map = service.xlsxBackgroundDownload(map);
			
			if ( map.get("errorCode")!=null ) { nr.setErrorCode((int   ) map.get("errorCode") ); }  // result.setErrorCode(e.getCode   ());
			if ( map.get("errorMsg" )!=null ) { nr.setErrorMsg ((String) map.get("errorMsg" ) ); }  // result.setErrorMsg (e.getMessage());
			
		} catch (OdBizException obe) {
			return OBU.convExceptionToResult(obe);
		} catch (Exception e) {
			String message = "주문 수량제한 대용량 엑셀 다운로드 에러";
			logger.error(message, e);
			throw new LoggingException(new String[] { "OD", "BO", "xlsxDownload", message }, e) ;
		}
		
		return nr;
	}
	
}
