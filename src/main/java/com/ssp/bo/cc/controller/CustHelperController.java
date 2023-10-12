package com.ssp.bo.cc.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.service.CustHelperService;

/**
 * <pre>
 * @title  voc
 * @package com.ssp.bo.cc.controller
 * @ClassName CustHelperController
 * </pre>
 * @author  유창호
 * @since   2022. 04. 25.
 * @version 1.0
 * @see CustBgtController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/bo/cust/helper")
public class CustHelperController {
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CustHelperService custHelperService;	
	
	/**
	 * <pre>
	 * 1. MethodName : selectVocStatusList
	 * 2. ClassName  : CustHelperController.java
	 * 3. Comment    : 고객정보상세
	 * 4. 작성자       : 유창호
	 * 5. 작성일       : 2022. 04. 25.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-helper-detail.do")
	public NexacroResult selectCustHelperDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();		
		Map<String, Object> resultData = custHelperService.selectCustHelperDetail(paramMap);
		result.addDataSet("ds_dtl", resultData);
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : updateVocStatusList
	 * 2. ClassName  : CustHelperController.java
	 * 3. Comment    : 고객정보상세 수정
	 * 4. 작성자       : 유창호
	 * 5. 작성일       : 2022. 04. 26.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-cust-helper-detail.do")
	public NexacroResult updateCustHelperDetail(HttpSession session, @ParamDataSet(name = "ds_dtl", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		paramMap = CCUtils.prefixSession(paramMap, session);
		Map<String, Object> resultData = custHelperService.updateCustHelperDetail(paramMap);
		result.addDataSet("ds_successYn", resultData);
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectOprUnitChk 
	 * 2. ClassName  : CustHelperController.java
	 * 3. Comment    : 고객도우미 등록 전 운영단위 중복등록 체크
	 * 4. 작성자       : 유창호
	 * 5. 작성일       : 2022. 04. 26.
	 * </pre> 
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-opr-unit-chk.do")
	public NexacroResult selectOprUnitChk(@ParamDataSet(name = "ds_dtl", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();		
		Map<String, Object> resultData = custHelperService.selectOprUnitChk(paramMap);
		result.addDataSet("ds_successYn", resultData);
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : insertCustHelperInfo
	 * 2. ClassName  : CustHelperController.java
	 * 3. Comment    : 고객도우미 등록
	 * 4. 작성자       : 유창호
	 * 5. 작성일       : 2022. 04. 26.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/insert-cust-helper-info.do")
	public NexacroResult insertCustHelperInfo(HttpSession session, @ParamDataSet(name = "ds_dtl", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();
		paramMap = CCUtils.prefixSession(paramMap, session);
		Map<String, Object> resultData = custHelperService.insertCustHelperInfo(paramMap);
		result.addDataSet("ds_successYn", resultData);
		return result;
    }

}