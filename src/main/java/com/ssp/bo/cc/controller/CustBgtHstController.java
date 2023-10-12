package com.ssp.bo.cc.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.service.CustBgtHstService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  예산
 * @package com.ssp.bo.cc.controller
 * @ClassName CustBgtController
 * </pre>
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see CustBgtController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/bo/cust/bgt/hst")
public class CustBgtHstController {
	//private final Logger log = LoggerFactory.getLogger(this.getClass());
		
	@Resource(name="custBgtHstService") 
	private CustBgtHstService custBgtHstService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectBgtHstList
	 * 2. ClassName  : CustBgtHstController.java
	 * 3. Comment    : 예산변경 목록조회
	 * 4. 작성자     : 박성근
	 * 5. 작성일     : 2022. 03. 15.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception
	 */
	@RequestMapping(value = "/list.do")
	public NexacroResult selectBgtHstList(@ParamDataSet(name="dsParam", required=false) Map<String, Object> param) throws Exception {
		NexacroResult nr = null;
		try {
			nr = CCUtils.cnvtMap2NexacroResult(custBgtHstService.selectBgtHstList(param));
		}
		catch (Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectBgtHstList", "예산변경 목록조회" }, e) {	};
		}
		
		return nr;
	}
	
}
