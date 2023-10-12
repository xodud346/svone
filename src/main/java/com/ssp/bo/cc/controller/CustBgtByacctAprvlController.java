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
import com.ssp.bo.cc.service.CustBgtByacctAprvlService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  계정별 결재선 관리 목록
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 03. 02.
 * @version 1.0
 * @see CustBgtByacctAprvlController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.03.02		최초작성
 */
@Controller
@RequestMapping("/bgt/byacct/aprvl")
public class CustBgtByacctAprvlController {
	private final Logger log = LoggerFactory.getLogger(CustBgtByacctAprvlController.class);
		
	@Resource(name="custBgtByacctAprvlService") 
	private CustBgtByacctAprvlService custBgtByacctAprvlService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustGrdList
	 * 2. ClassName  : CustBgtByacctAprvlController.java
	 * 3. Comment    : 계정별 결재선 관리 목록 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 02.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-bgt-by-acct-aprv.do", method = RequestMethod.POST)
	public NexacroResult selectCustBgtByacctAprv(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result.addDataSet("ds_output1", custBgtByacctAprvlService.selectCustBgtByacctAprv(searchMap, new CCUtils(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_20", "계정별 결재선 관리 목록 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustGrdList
	 * 2. ClassName  : CustBgtByacctAprvlController.java
	 * 3. Comment    : 계정별 결재선 관리 조회
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
			List<Map<String,Object>> list = custBgtByacctAprvlService.selectPopAprInfo(searchMap);
			result.addDataSet("ds_output1", list);
			
			List<Map<String,Object>> list2 = null;
			if(!list.isEmpty()) {
				list2 = custBgtByacctAprvlService.selectPopAprDetail(list.get(0));
			}
			result.addDataSet("ds_output2", list2);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_21", "계정별 결재선 관리 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustGrdList
	 * 2. ClassName  : CustBgtByacctAprvlController.java
	 * 3. Comment    : 계정별 결재선 관리 상세 결재선조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 03.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-pop-apr-detail.do", method = RequestMethod.POST)
	public NexacroResult selectPopAprDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", custBgtByacctAprvlService.selectPopAprDetail(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_21", "계정별 결재선 관리 상세 결재선조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : saveDrmcMbrDeatil
	 * 2. ClassName  : CustBgtByacctAprvlController.java
	 * 3. Comment    : 계정별 결재선 관리 상세 결재선 수정
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 23.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-pop-apr-detail.do", method = RequestMethod.POST)
	public NexacroResult savePopAprDetail(
			@ParamDataSet(name = "ds_save1", required = false) Map<String, Object> input1
			, @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> inputList2
			, HttpSession session
		) throws Exception{	
		
		NexacroResult result = new NexacroResult();
		try {
			input1 = CCUtils.prefixSession(input1, session);
			inputList2 = CCUtils.prefixSessionList(inputList2, session);
			result = custBgtByacctAprvlService.savePopAprDetail(input1, inputList2);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_21", "계정별 결재선 관리 상세 결재선 수정" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : saveDrmcMbrDeatil
	 * 2. ClassName  : CustBgtByacctAprvlController.java
	 * 3. Comment    : 계정별 결재선 관리 상세 결재선 생성
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 07.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/insert-pop-apr-detail.do", method = RequestMethod.POST)
	public NexacroResult insertPopAprDetail(
			@ParamDataSet(name = "ds_save1", required = false) Map<String, Object> input1
			, @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> inputList2
			, HttpSession session
		) throws Exception{	
		
		NexacroResult result = new NexacroResult();
		try {
			input1 = CCUtils.prefixSession(input1, session);
			inputList2 = CCUtils.prefixSessionList(inputList2, session);
			result = custBgtByacctAprvlService.insertPopAprDetail(input1, inputList2);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_21", "계정별 결재선 관리 상세 결재선 생성" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustGrdList
	 * 2. ClassName  : CustBgtByacctAprvlController.java
	 * 3. Comment    : 계정별 결재선 관리 예산계정 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 08.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-acct-list.do", method = RequestMethod.POST)
	public NexacroResult selectAcctList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", custBgtByacctAprvlService.selectAcctList(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_21", "계정별 결재선 관리 예산계정 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : deleteCustBgtByAcctAprv
	 * 2. ClassName  : CustBgtByacctAprvlController.java
	 * 3. Comment    : 계정별 결재선 관리 목록 삭제
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 03. 21.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-cust-bgt-by-acct-aprv.do", method = RequestMethod.POST)
	public NexacroResult deleteCustBgtByAcctAprv(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> input, HttpSession session) throws Exception{	
		NexacroResult result = new NexacroResult();
		try {
			input = CCUtils.prefixSessionList(input, session);
			result = custBgtByacctAprvlService.deleteCustBgtByAcctAprv(input);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MF_20", "계정별 결재선 관리 목록 삭제" }, e) {
			};
		}
		return result;
    }
	
}
