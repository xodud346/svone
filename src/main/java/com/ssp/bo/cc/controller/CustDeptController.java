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
import com.ssp.bo.cc.service.CustDeptService;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  부서조회 목록
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 02. 11.
 * @version 1.0
 * @see CustDeptController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.11		최초작성
 *  2022.02.17		부서상세 조회 및 수정구현
 *  2022.02.18		부서상세 생성/복사 구현
 */
@Controller
@RequestMapping("/bo/cust/dept")
public class CustDeptController {
	private final Logger log = LoggerFactory.getLogger(CustDeptController.class);
		
	@Resource(name="custDeptService")  
	private CustDeptService custDeptService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustGrdList
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 부서조회 목록 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-dept.do")
	public NexacroResult selectCustDept(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custDeptService.selectCustDept(searchMap, new CCUtils(session));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_07", "부서조회 목록" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : saveCustDeptState
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 부서조회 목록 일괄상태변경
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-cust-dept-state.do", method = RequestMethod.POST)
	public NexacroResult saveCustDeptState(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> inputList, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			inputList = CCUtils.prefixSessionList(inputList, session);
			result = custDeptService.saveCustDeptState(inputList);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_07", "부서조회 목록 일괄상태변경" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustDeptDetailInfo
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 부서조회 상세조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-dept-detail-info.do")
	public NexacroResult selectCustDeptDetailInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custDeptService.selectCustDeptDetailInfo(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_10", "부서조회 상세조회" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : saveCustDeptDetailInfo
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 부서조회 상세 수정
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-cust-dept-detail-info.do", method = RequestMethod.POST)
	public NexacroResult saveCustDeptDetailInfo(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> inputList, HttpSession session) throws Exception{	
		NexacroResult result = new NexacroResult();
		try {
			inputList = CCUtils.prefixSessionList(inputList, session);
			result = custDeptService.saveCustDeptDetailInfo(inputList);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_10", "부서조회 상세 수정" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustSpr
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 부서생성 고객구분 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 18.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-spr.do")
	public NexacroResult selectCustSpr(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custDeptService.selectCustSpr(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_10", "부서생성 고객구분 조회" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectHgstDept
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 부서생성 최상위부서, 입고담당자 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 18.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-hgst-dept.do")
	public NexacroResult selectHgstDept(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		try {
			result = custDeptService.selectHgstDept(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_10", "부서생성 최상위부서, 입고담당자 조회" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : insertCustDeptDetail
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 부서생성 insert
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 18.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/insert-cust-dept-detail.do")
	public NexacroResult insertCustDeptDetail(@ParamDataSet(name = "ds_save", required = false) Map<String, Object> paramMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			paramMap = CCUtils.prefixSession(paramMap, session);
			result = custDeptService.insertCustDeptDetail(paramMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_08", "부서생성 insert" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustDeptForCopy
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 부서조회 부서복사
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 18.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-dept-for-copy.do")
	public NexacroResult selectCustDeptForCopy(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custDeptService.selectCustDeptForCopy(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_10", "부서조회 상세조회" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectAuthByOprUnit
	 * 2. ClassName  : CustDeptController.java
	 * 3. Comment    : 선택한 운영단위의 권한을 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-auth-by-opr-unit.do")
	public NexacroResult selectAuthByOprUnit(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custDeptService.selectAuthByOprUnit(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_10", "선택한 운영단위의 권한 조회" }, e) {
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
			result = custDeptService.selectAllExcelDownload(searchMap, new CCUtils(session));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_07", "대용량엑셀 다운로드" }, e) {
			};
		}
		return result;
    }
	
}
