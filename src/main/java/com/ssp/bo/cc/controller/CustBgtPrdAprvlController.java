package com.ssp.bo.cc.controller;

import com.ssp.bo.cc.CCUtils;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.service.CustBgtPrdAprvlService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  상품결재선 관리 목록
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 03. 11.
 * @version 1.0
 * @see CustBgtPrdAprvlController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.11		최초작성
 */
@Controller
@RequestMapping("/bgt/prd/aprvl")
public class CustBgtPrdAprvlController {
	private final Logger log = LoggerFactory.getLogger(CustBgtPrdAprvlController.class);
		
	@Resource(name="custBgtPrdAprvlService") 
	private CustBgtPrdAprvlService custBgtPrdAprvlService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustBgtPrdAprvl
	 * 2. ClassName  : CustBgtPrdAprvlController.java
	 * 3. Comment    : 상품결재선 관리 목록 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-bgt-prd-aprvl.do", method = RequestMethod.POST)
	public NexacroResult selectCustBgtByacctAprv(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result.addDataSet("ds_output1", custBgtPrdAprvlService.selectCustBgtPrdAprvl(searchMap, new CCUtils(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_14", "상품결재선 관리 목록 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : deleteCustBgtPrdAprvl
	 * 2. ClassName  : CustBgtPrdAprvlController.java
	 * 3. Comment    : 상품결재선 관리 목록 삭제
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-cust-bgt-prd-aprvl.do", method = RequestMethod.POST)
	public NexacroResult savePopAprDetail(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> input, HttpSession session) throws Exception{	
		
		NexacroResult result = new NexacroResult();
		try {
			input = CCUtils.prefixSessionList(input, session);
			result = custBgtPrdAprvlService.deleteCustBgtPrdAprvl(input);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_14", "상품결재선 관리 목록 삭제" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectPrdInfoByPrdId
	 * 2. ClassName  : CustBgtPrdAprvlController.java
	 * 3. Comment    : 상품 상세정보 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 15.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-prdinfo-by-prdid.do", method = RequestMethod.POST)
	public NexacroResult selectPrdInfoByPrdId(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", custBgtPrdAprvlService.selectPrdInfoByPrdId(searchMap));
			result.addDataSet("ds_output2", custBgtPrdAprvlService.selectPopAprInfo(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_15", "상품 상세정보 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : savePrdAprvlInfo
	 * 2. ClassName  : CustBgtPrdAprvlController.java
	 * 3. Comment    : 상품 결재선 관리 상세 결재선 생성
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 15.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-prd-aprvl-info.do", method = RequestMethod.POST)
	public NexacroResult savePrdAprvlInfo(
			@ParamDataSet(name = "ds_save1", required = false) Map<String, Object> input1
			, @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> inputList2
			, HttpSession session
		) throws Exception{	
		
		NexacroResult result = new NexacroResult();
		try {
			input1 = CCUtils.prefixSession(input1, session);
			inputList2 = CCUtils.prefixSessionList(inputList2, session);
			result = custBgtPrdAprvlService.savePrdAprvlInfo(input1, inputList2);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_15", "상품 결재선 관리 상세 결재선 생성" }, e) {
			};
		}
		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : saveDrmcMbrDeatil
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 상품별 결재선 관리 상세 결재선 수정
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-prd_aprvl-info.do", method = RequestMethod.POST)
	public NexacroResult updatePrdAprvlInfo(
			@ParamDataSet(name = "ds_save1", required = false) Map<String, Object> input1
			, @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> inputList2
			, HttpSession session
		) throws Exception{	
		
		NexacroResult result = new NexacroResult();
		try {
			input1 = CCUtils.prefixSession(input1, session);
			inputList2 = CCUtils.prefixSessionList(inputList2, session);
			result = custBgtPrdAprvlService.updatePrdAprvlInfo(input1, inputList2);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_15", "상품별 결재선 관리 상세 결재선 수정" }, e) {
			};
		}
		return result;
    }
	
}
