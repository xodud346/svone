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
import com.ssp.bo.cc.service.CustBgtChmAprvlService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  화학물질 결재선 관리 목록
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 04. 13.
 * @version 1.0
 * @see CustBgtChmAprvlController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.04.13		최초작성
 */
@Controller
@RequestMapping("/bgt/chm/aprvl")
public class CustBgtChmAprvlController {
	private final Logger log = LoggerFactory.getLogger(CustBgtChmAprvlController.class);
		
	@Resource(name="custBgtChmAprvlService") 
	private CustBgtChmAprvlService custBgtChmAprvlService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustBgtChmAprvl
	 * 2. ClassName  : CustBgtChmAprvlController.java
	 * 3. Comment    : 화학물질 결재선 관리 목록 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 13.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-bgt-chm-aprvl.do", method = RequestMethod.POST)
	public NexacroResult selectCustBgtChmAprvl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", custBgtChmAprvlService.selectCustBgtChmAprvl(searchMap, new CCUtils(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_16", "화학물질 결재선 관리 목록 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : deleteCustBgtChmAprvl
	 * 2. ClassName  : CustBgtChmAprvlController.java
	 * 3. Comment    : 화학물질 결재선 관리 목록 삭제
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 13.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-cust-bgt-chm-aprvl.do", method = RequestMethod.POST)
	public NexacroResult deleteCustBgtChmAprvl(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> input, HttpSession session) throws Exception{	
		NexacroResult result = new NexacroResult();
		try {
			input = CCUtils.prefixSessionList(input, session);
			result = custBgtChmAprvlService.deleteCustBgtChmAprvl(input);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_16", "화학물질 결재선 관리 목록 삭제" }, e) {
			};
		}
		return result;
    }
	

	/**
	 * <pre>
	 * 1. MethodName : selectPopAprInfo
	 * 2. ClassName  : CustBgtChmAprvlController.java
	 * 3. Comment    : 화학물질 결재선 관리 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 13.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-pop-apr-info.do", method = RequestMethod.POST)
	public NexacroResult selectPopAprInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			List<Map<String,Object>> list = custBgtChmAprvlService.selectPopAprInfo(searchMap);
			result.addDataSet("ds_output1", list);
			
			List<Map<String,Object>> list2 = null;
			if(!list.isEmpty()) {
				list2 = custBgtChmAprvlService.selectPopAprDetail(list.get(0));
			}
			result.addDataSet("ds_output2", list2);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_19", "화학물질 결재선 관리 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectPopAprDetail
	 * 2. ClassName  : CustBgtChmAprvlController.java
	 * 3. Comment    : 화학물질 결재선 관리 상세 결재선조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 13.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-pop-apr-detail.do", method = RequestMethod.POST)
	public NexacroResult selectPopAprDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", custBgtChmAprvlService.selectPopAprDetail(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_19", "화학물질 결재선 관리 상세 결재선조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : saveCustBgtChmAprvl
	 * 2. ClassName  : CustBgtChmAprvlController.java
	 * 3. Comment    : 화학물질 결재선 관리 상세 결재선 생성
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 13.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-cust-bgt-chm-aprvl.do", method = RequestMethod.POST)
	public NexacroResult saveCustBgtChmAprvl(
			@ParamDataSet(name = "ds_save1", required = false) Map<String, Object> input1
			, @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> inputList2
			, HttpSession session
		) throws Exception{	
		
		NexacroResult result = new NexacroResult();
		try {
			input1 = CCUtils.prefixSession(input1, session);
			inputList2 = CCUtils.prefixSessionList(inputList2, session);
			result = custBgtChmAprvlService.saveCustBgtChmAprvl(input1, inputList2);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_19", "화학물질 결재선 관리 상세 결재선 생성" }, e) {
			};
		}
		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : updateCustBgtChmAprvl
	 * 2. ClassName  : CustBgtChmAprvlController.java
	 * 3. Comment    : 화학물질 결재선 관리 상세 결재선 수정
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 13.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-cust-bgt-chm-aprvl.do", method = RequestMethod.POST)
	public NexacroResult updateCustBgtChmAprvl(
			@ParamDataSet(name = "ds_save1", required = false) Map<String, Object> input1
			, @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> inputList2
			, HttpSession session
		) throws Exception{	
		
		NexacroResult result = new NexacroResult();
		try {
			input1 = CCUtils.prefixSession(input1, session);
			inputList2 = CCUtils.prefixSessionList(inputList2, session);
			result = custBgtChmAprvlService.updateCustBgtChmAprvl(input1, inputList2);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_19", "화학물질 결재선 관리 상세 결재선 수정" }, e) {
			};
		}
		return result;
    }
	
}
