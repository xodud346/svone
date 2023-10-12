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

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.service.CustGradeService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  고객등급관리
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 02. 10.
 * @version 1.0
 * @see CustGradeController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/bo/cust/grade")
public class CustGradeController {
	private final Logger log = LoggerFactory.getLogger(CustGradeController.class);
		
	@Resource(name="custGradeService") 
	private CustGradeService custGradeService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustGrade
	 * 2. ClassName  : CustGradeController.java
	 * 3. Comment    : 고객등급 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 10.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-grade.do")
	public NexacroResult selectCustGrade(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custGradeService.custGrdList(searchMap);  
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_03", "고객등급 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : saveCustGrd
	 * 2. ClassName  : CustGradeController.java
	 * 3. Comment    : 고객등급 수정/저장
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 10.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-cust-grd.do")
	public NexacroResult saveCustGrd(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> inputList, HttpSession session) throws Exception{	
		NexacroResult result = new NexacroResult();
		try {
			inputList = CCUtils.prefixSessionList(inputList, session);
			result = custGradeService.saveCustGrd(inputList); 
		} catch(Exception e) {
			String message = "고객등급 수정 에러";
			log.error(message);
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_03", "고객등급 수정/저장" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustGrdChk
	 * 2. ClassName  : CustGradeController.java
	 * 3. Comment    : 고객등급 사용중인 데이터 체크
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 18.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-grd-chk.do")
	public NexacroResult selectCustGrdChk(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custGradeService.selectCustGrdChk(searchMap);  
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_03", "고객등급 사용중인 데이터 체크" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustGradeHst
	 * 2. ClassName  : CustGradeController.java
	 * 3. Comment    : 고객등급 이력 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 19.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-grade-hst.do")
	public NexacroResult selectCustBgtChmAprvl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", custGradeService.selectCustGradeHst(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_03", "고객등급 사용중인 데이터 체크" }, e) {
			};
		}
		return result;
    }
	
	
}
