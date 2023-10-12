package com.ssp.bo.sa.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.sa.service.PmtPopupService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  프로모션 팝업 컨트롤러
 * @package com.ssp.bo.sa.controller
 * <pre>
 * @author
 * @since   2022. 01. 26.
 * @version 1.0
 * @see PmtPopupController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.01.26.		최초작성
 */
@Controller
@RequestMapping("/sa/pmtPopup")
public class PmtPopupController {
	private final Logger logger = LoggerFactory.getLogger(PmtPopupController.class);

	@Autowired
	private PmtPopupService pmtPopupService;

	/**
	 * <pre>
	 * 1. MethodName : selectPmtPopupList
	 * 2. ClassName  : PmtPopupController.java
	 * 3. Comment    : 프로모션 팝업 목록 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.01.26.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-pmt-popup-list.do")
	public NexacroResult selectPmtPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();

		try {

			result = pmtPopupService.selectPmtPopupList(paramMap, new OdOrderComm(session));

		} catch (Exception e ) {
			String message = "프로모션 팝업 목록 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_28", "프로모션 팝업 목록 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : updatePmtPopupDispSo
	 * 2. ClassName  : PmtPopupController.java
	 * 3. Comment    : 프로모션 팝업 순서 저장
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.01.26.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-pmt-popup-disp-so.do")
	public NexacroResult updatePmtPopupDispSo(@ParamDataSet(name = "ds_save", required = true) List<Map<String, Object>> saveMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = pmtPopupService.updatePmtPopupDispSo(saveMap);
		} catch (Exception e) {
			String message = "프로모션 팝업 순서 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_28", "프로모션 팝업 순서 저장"}, e) {};
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectPmtPopupInfo
	 * 2. ClassName  : PmtPopupController.java
	 * 3. Comment    : 프로모션 팝업 상세 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.01.26.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-pmt-popup-info.do")
	public NexacroResult selectPmtPopupInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			
			result = pmtPopupService.selectPmtPopupInfo(paramMap);

		} catch (Exception e ) {
			String message = "프로모션 팝업 상세 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_30", "프로모션 팝업 상세 조회"}, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : savePmtPopupInfo
	 * 2. ClassName  : PmtPopupController.java
	 * 3. Comment    : 프로모션 팝업 상세 저장
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.01.26.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-pmt-popup-info.do")
	public NexacroResult savePmtPopupInfo(@ParamDataSet(name = "ds_save", required = true) Map<String, Object> paramMap
			, @ParamDataSet(name = "ds_oprUnitList", required =false) List<Map<String, Object>> oprUnitMapList
			, @ParamDataSet(name = "ds_aplyDtlList", required =false) List<Map<String, Object>> aplyDtlList
			, @ParamDataSet(name = "ds_excptDtlList", required =false) List<Map<String, Object>> excptDtlList
			, @ParamDataSet(name = "ds_prmDtlList", required =false) List<Map<String, Object>> prmDtlList) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			
			result = pmtPopupService.savePmtPopupInfo(paramMap, oprUnitMapList, aplyDtlList, excptDtlList, prmDtlList);
			
		} catch (Exception e) {
			String message = "프로모션 팝업 상세 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_34", "프로모션 팝업 상세 저장"}, e) {};
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : deletePmtPopupInfo
	 * 2. ClassName  : PmtPopupController.java
	 * 3. Comment    : 프로모션 팝업 삭제
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.01.26.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-pmt-popup-info.do")
	public NexacroResult deletePmtPopupInfo(@ParamDataSet(name = "ds_delete", required = true) Map<String, Object> deleteMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			
			result = pmtPopupService.deletePmtPopupInfo(deleteMap);
			
		} catch (Exception e) {
			String message = "배너 삭제 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_08", "배너 삭제"}, e) {};
		}

		return result;
	}
}
