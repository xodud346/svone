package com.ssp.bo.cc.controller;

import static com.ssp.bo.cc.CCUtils.prefixSession;

import java.util.Arrays;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.service.BzplcService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  사업장기본 컨트롤러
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  박성근
 * @since   2022.02.10.
 * @version 1.0
 * @see CustDvlplcController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/cc/bzplc")
public class BzplcController {
	private final Logger log = LoggerFactory.getLogger(BzplcController.class);
	
	@Resource(name="bzplcService") 
	private BzplcService bzplcService;
	
	private Map<String, Object> prefixParam(Map<String, Object> param, HttpSession session) {
		prefixSession(param, session);
		
		String[] aCsv2List = { "BZPLC_IDS", "IDDT_IDS", "CORP_IDS" };
		for (String sTrgt : aCsv2List) {
			String data = (String) param.get(sTrgt);
//			if (data!=null && !"".equals(data.trim())) {
//				param.put(sTrgt, Arrays.asList( data.split(",") ));
//			}
			param.put(sTrgt, (data==null || "".equals(data.trim())) ? null : Arrays.asList( data.split(",") ));
		}
		
		//CCUtils.cnvtParams(param);
		return param;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : listBzplc
	 * 2. ClassName  : BzplcController.java
	 * 3. Comment    : 사업장기본 목록
	 * 4. 작성자     : 박성근
	 * 5. 작성일     : 2022.02.10.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value="/list.do", method = RequestMethod.POST)
	public NexacroResult list(@ParamDataSet(name="dsParam", required=false) Map<String, Object> param, HttpSession session) throws Exception {
		NexacroResult nr = new NexacroResult();
		
		//prefixParam(param, session);
		nr.addDataSet("dsBzplc", bzplcService.list(param, new CCUtils(session)));
		
		return nr;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : detail
	 * 2. ClassName  : BzplcController.java
	 * 3. Comment    : 사업장기본 상세
	 * 4. 작성자     : 박성근
	 * 5. 작성일     : 2022.02.10.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value="/detail.do", method = RequestMethod.POST)
	public NexacroResult detailBzplc(@ParamDataSet(name="dsParam", required=false) Map<String, Object> param, HttpSession session) throws Exception {
		NexacroResult nr = new NexacroResult();
		
		prefixParam(param, session);
		CCUtils.cnvtMap2NexacroResult(bzplcService.detail(param), nr);
		
		return nr;
	}
	
	// 대용량엑셀
	@RequestMapping(value = "/select-all-excel-download.do")
	public NexacroResult selectAllExcelDownload(@ParamDataSet(name = "dsParam", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result =  bzplcService.selectAllExcelDownload(searchMap, new CCUtils(session));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_17", "대용량엑셀 다운로드" }, e) {
			};
		}
		return result;
    }
		
}
