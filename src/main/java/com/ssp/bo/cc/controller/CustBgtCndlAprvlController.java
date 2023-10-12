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
import com.ssp.bo.cc.service.CustBgtCndlAprvlService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  조건부 결재선 관리 목록
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 03. 02.
 * @version 1.0
 * @see CustBgtByacctAprvlController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.16		최초작성
 */
@Controller
@RequestMapping("/bgt/cndl/aprvl")
public class CustBgtCndlAprvlController {
	private final Logger log = LoggerFactory.getLogger(CustBgtCndlAprvlController.class);
		
	@Resource(name="custBgtCndlAprvlService") 
	private CustBgtCndlAprvlService custBgtCndlAprvlService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustBgtCndlAprvl
	 * 2. ClassName  : CustBgtCndlAprvlController.java
	 * 3. Comment    : 조건부 결재선 관리 목록 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 16.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-bgt-cndl-aprvl.do", method = RequestMethod.POST)
	public NexacroResult selectCustBgtCndlAprvl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result.addDataSet("ds_output1", custBgtCndlAprvlService.selectCustBgtCndlAprvl(searchMap, new CCUtils(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_17", "조건부 결재선 관리 목록 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : deleteCustBgtCndlAprvl
	 * 2. ClassName  : CustBgtPrdAprvlController.java
	 * 3. Comment    : 조건부 결재선 관리 목록 삭제
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-cust-bgt-cndl-aprvl.do", method = RequestMethod.POST)
	public NexacroResult deleteCustBgtCndlAprvl(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> input, HttpSession session) throws Exception{	
		NexacroResult result = new NexacroResult();
		try {
			input = CCUtils.prefixSessionList(input, session);
			result = custBgtCndlAprvlService.deleteCustBgtCndlAprvl(input);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_17", "조건부 결재선 관리 목록 삭제" }, e) {
			};
		}
		return result;
    }
	

	/**
	 * <pre>
	 * 1. MethodName : selectPopAprInfo
	 * 2. ClassName  : deleteCustBgtCndlAprvl.java
	 * 3. Comment    : 조건부 결재선 관리 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 07.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-pop-apr-info.do", method = RequestMethod.POST)
	public NexacroResult selectPopAprInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			List<Map<String,Object>> list = custBgtCndlAprvlService.selectPopAprInfo(searchMap);
			result.addDataSet("ds_output1", list);
			
			List<Map<String,Object>> list2 = null;
			if(!list.isEmpty()) {
				list2 = custBgtCndlAprvlService.selectPopAprDetail(list.get(0));
			}
			result.addDataSet("ds_output2", list2);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_18", "조건부 결재선 관리 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectPopAprDetail
	 * 2. ClassName  : deleteCustBgtCndlAprvl.java
	 * 3. Comment    : 조건부 결재선 관리 상세 결재선조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 07.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-pop-apr-detail.do", method = RequestMethod.POST)
	public NexacroResult selectPopAprDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", custBgtCndlAprvlService.selectPopAprDetail(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_18", "조건부 결재선 관리 목록 삭제" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : saveCustBgtCndlAprvl
	 * 2. ClassName  : deleteCustBgtCndlAprvl.java
	 * 3. Comment    : 조건부 결재선 관리 상세 결재선 생성
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-cust-bgt-cndl-aprvl.do", method = RequestMethod.POST)
	public NexacroResult saveCustBgtCndlAprvl(
			@ParamDataSet(name = "ds_save1", required = false) Map<String, Object> input1
			, @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> inputList2
			, HttpSession session
		) throws Exception{	
		
		NexacroResult result = new NexacroResult();
		try {
			input1 = CCUtils.prefixSession(input1, session);
			inputList2 = CCUtils.prefixSessionList(inputList2, session);
			result = custBgtCndlAprvlService.saveCustBgtCndlAprvl(input1, inputList2);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_18", "조건부 결재선 관리 상세 결재선 생성" }, e) {
			};
		}
		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : updateCustBgtCndlAprvl
	 * 2. ClassName  : deleteCustBgtCndlAprvl.java
	 * 3. Comment    : 조건부 결재선 관리 상세 결재선 수정
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-cust-bgt-cndl-aprvl.do", method = RequestMethod.POST)
	public NexacroResult updateCustBgtCndlAprvl(
			@ParamDataSet(name = "ds_save1", required = false) Map<String, Object> input1
			, @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> inputList2
			, HttpSession session
		) throws Exception{	
		
		NexacroResult result = new NexacroResult();
		try {
			input1 = CCUtils.prefixSession(input1, session);
			inputList2 = CCUtils.prefixSessionList(inputList2, session);
			result = custBgtCndlAprvlService.updateCustBgtCndlAprvl(input1, inputList2);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_18", "조건부 결재선 관리 상세 결재선 수정" }, e) {
			};
		}
		return result;
    }
	
	// 대용량엑셀
	@RequestMapping(value = "/select-all-excel-download.do")
	public NexacroResult selectAllExcelDownload(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result =  custBgtCndlAprvlService.selectAllExcelDownload(searchMap, new CCUtils(session));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_17", "대용량엑셀 다운로드" }, e) {
			};
		}
		return result;
    }
}
