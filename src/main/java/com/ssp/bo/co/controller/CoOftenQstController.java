package com.ssp.bo.co.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.co.service.CoOftenQstService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;


/**
 * <pre>
 * 
 * @title
 * @package com.serveone.co.service.controller
 * 
 *          <pre>
 * @author
 * @since 2022.02.16
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.01.25 최초작성
 */
@Controller
@RequestMapping("/co/often-qst")
public class CoOftenQstController {
	private Logger logger = LoggerFactory.getLogger(CoOftenQstController.class);

	@Autowired
	private CoOftenQstService coOftenQstService;

	/**
	 * <pre>
	 * 1. MethodName : selectOftenQstList
	 * 2. ClassName  : CoOftenQstController.java
	 * 3. Comment    : 자주하는 질문 목록 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.02.16
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-often-qst-list.do")
	public NexacroResult selectOftenQstList(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			int totalCount = coOftenQstService.selectOftenQstListCount(searchMap);
			List<Map<String, Object>> list = coOftenQstService.selectOftenQstList(searchMap);
			result.addVariable("totalCount", totalCount);
			result.addDataSet("ds_output1", list);
		} catch (Exception ne) {
			String message = "자주하는 질문 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_CN_11", message }, ne);
		}
		return result;

	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectOftenQstDetail
	 * 2. ClassName  : CoOftenQstController.java
	 * 3. Comment    : 자주하는 질문 상세 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.02.22
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-often-qst-detail.do")
	public NexacroResult selectOftenQstDetail(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			Map<String, Object> rtnMap = coOftenQstService.selectOftenQstDetail(searchMap);
			result.addDataSet("ds_output1", rtnMap);
		} catch (Exception ne) {
			String message = "자주하는 질문 상세 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_CN_13", message}, ne);
		}
		return result;

	}

	/**
	 * <pre>
	 * 1. MethodName : saveOftenQstList
	 * 2. ClassName  : CoOftenQstController.java
	 * 3. Comment    : 자주하는질문 등록/수정
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.02.16
	 * </pre>
	 *
	 * @param  list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-often-qst-list.do")
	public NexacroResult saveOftenQstList(HttpServletRequest request,
			@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> list) throws Exception {
		NexacroResult result = new NexacroResult();	
		try {
			Map<String, Object> saveMap = new HashMap<>();
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			saveMap.put("regpsnId", admin.get("OPRTR_ID"));
			Map<String, Object> rtnMap = coOftenQstService.saveOftenQstList(list, saveMap);
			result.addVariable("oftenQstSeq", rtnMap.get("oftenQstSeq"));
		} catch ( MessageException e ) {
			if( e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly(); // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			}else {
				String message = "자주하는질문 저장 에러";
				logger.error(message);
				throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CN_13", message}, e);
			}
		
		}

		return result;
	}

	
	/**
	 * <pre>
	 * 1. MethodName : selectRfiTpCdList
	 * 2. ClassName  : CoOftenQstController.java
	 * 3. Comment    : FAQ 유형 관리 조회
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.02.16
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/select-rfi-tp-cd-list.do")
	public NexacroResult selectRfiTpCdList(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			List<Map<String, Object>> list  = coOftenQstService.selectRfiTpCdList(searchMap);
			int totalCount = coOftenQstService.selectRfiTpCdListCount(searchMap);
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "FAQ 유형 관리 팝업 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CN_27", message}, ne);
		}
		return result;
		
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveRfiTpCdList
	 * 2. ClassName  : CoOftenQstController.java
	 * 3. Comment    : FAQ 유형 관리 팝업 저장/수정
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.02.16
	 * </pre>
	 *
	 * @param  list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/save-rfi-tp-cd-list.do")
	public NexacroResult saveRfiTpCdList(HttpServletRequest request,
			@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> list) throws Exception {
		NexacroResult result = new NexacroResult();	
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			//TODO 기본값 설정 확인 필요(LANG_CD 세션 활용)
			Map<String, Object> saveMap = new HashMap<>();
			saveMap.put("langCd", "KO");
			saveMap.put("regpsnId", admin.get("OPRTR_ID"));
			coOftenQstService.saveRfiTpCdList(list, saveMap);
		} catch (MessageException e) {
			if(e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly(); // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			}else {
				String message = "FAQ 유형 관리 팝업 저장 에러";
				logger.error(message);
				throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_CN_27", message }, e);
			}
			
		}

		return result;
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : fileUpload
	 * 2. ClassName : CoOftenQstController
	 * 3. Comment : 첨부파일 저장
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022-02-23
	 * </pre>
	 *
	 */
	@RequestMapping("/rfi-file-upload.do")
	public NexacroResult rfiFileUpload(HttpServletRequest request) throws Exception {
		new NexacroResult();
		NexacroResult result = new NexacroResult();
		try {
			List<Map<String, Object>> resultList = coOftenQstService.rfiFileUpload(request);
			result.addDataSet("ds_output1", resultList);
		} catch ( MessageException e ) {
			if(e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly(); // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			}else {
				String message = "FAQ 유형 관리 팝업 파일 업로드 저장 에러";
				logger.error(message, e);
				throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CN_27", message}, e);
			}
			
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : deleteRfiTpCdList
	 * 2. ClassName  : CoOftenQstController.java
	 * 3. Comment    : FAQ 유형 삭제
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.04.22
	 * </pre>
	 *
	 * @param list
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/delete-rfi-tp-cd-list.do")
	public NexacroResult deleteRfiTpCdList(HttpServletRequest request,
			@ParamDataSet(name = "ds_delete", required = false) List<Map<String, Object>> list) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			coOftenQstService.deleteRfiTpCdList(list, admin);
		} catch (Exception ne) {
			String message = "FAQ 유형 삭제 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_CN_27", message}, ne);
		}

		return result;
	}
	
	
	/**
	 * <pre>
	 * 1. MethodName : selectRfiTpCdExistCnt
	 * 2. ClassName  : CoOftenQstController.java
	 * 3. Comment    : 유형에 해당하는 질문데이터 존재 여부 확인 
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.04.29
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/select-rfi-tp-cd-exist-cnt.do")
	public NexacroResult selectRfiTpCdExistCnt(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			int cnt = coOftenQstService.selectRfiTpCdExistCnt(searchMap);
			result.addVariable("delchkCnt", cnt);
		} catch (Exception ne) {
			String message = "FAQ 유형 관리 삭제 가능 여부 체크 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "CO", "BO", "SSP_BO_CN_27", message}, ne);
		}
		return result;
		
	}
}
