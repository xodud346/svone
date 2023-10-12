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
import com.ssp.bo.sa.service.BrndhlService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  전문관 컨트롤러
 * @package com.ssp.bo.sa.controller
 * <pre>
 * @author
 * @since   2023.03.14.
 * @version 1.0
 * @see BrndhlController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.03.14.		최초작성
 */
@Controller
@RequestMapping("/sa/brndhl")
public class BrndhlController {
	private final Logger logger = LoggerFactory.getLogger(BrndhlController.class);

	@Autowired
	private BrndhlService brndhlService;

	/**
	 * <pre>
	 * 1. MethodName : selectBrndhlList
	 * 2. ClassName  : BrndhlController.java
	 * 3. Comment    : 전문관 목록 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.03.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-brndhl-list.do")
	public NexacroResult selectBrndhlList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();

		try {

			result = brndhlService.selectBrndhlList(paramMap, new OdOrderComm(session));

		} catch (Exception e ) {
			String message = "전문관 목록 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_10", "전문관 목록 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : updateBrndhlDispSo
	 * 2. ClassName  : BrndhlController.java
	 * 3. Comment    : 전문관 순서 저장
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.03.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-brndhl-disp-so.do")
	public NexacroResult updateBrndhlDispSo(@ParamDataSet(name = "ds_save", required = true) List<Map<String, Object>> saveMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = brndhlService.updateBrndhlDispSo(saveMap);
		} catch (Exception e) {
			String message = "전문관 순서 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_10", "전문관 순서 저장"}, e) {};
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectBrndhlInfo
	 * 2. ClassName  : BrndhlController.java
	 * 3. Comment    : 전문관 상세 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.03.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-brndhl-info.do")
	public NexacroResult selectBrndhlInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = brndhlService.selectBrndhlInfo(paramMap);

		} catch (Exception e ) {
			String message = "전문관 상세 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_12", "전문관 상세 조회"}, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : saveBrndhlInfo
	 * 2. ClassName  : BrndhlController.java
	 * 3. Comment    : 전문관 상세 저장
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.03.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-brndhl-info.do")
	public NexacroResult saveBrndhlInfo(@ParamDataSet(name = "ds_save", required = true) Map<String, Object> paramMap
			, @ParamDataSet(name = "ds_oprUnitList", required =false) List<Map<String, Object>> oprUnitMapList
			, @ParamDataSet(name = "ds_save2", required = false) List<Map<String, Object>> saveBrndhlCatgDtlMapList 
			, @ParamDataSet(name = "ds_save3", required = false) List<Map<String, Object>> saveBrndhlCatgPrdDtlMapList) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = brndhlService.saveBrndhlInfo(paramMap, oprUnitMapList, saveBrndhlCatgDtlMapList, saveBrndhlCatgPrdDtlMapList);
		} catch (Exception e) {
			String message = "전문관 상세 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_12", "전문관 상세 저장"}, e) {};
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : deleteBrndhlInfo
	 * 2. ClassName  : BrndhlController.java
	 * 3. Comment    : 전문관 삭제
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.03.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-brndhl-info.do")
	public NexacroResult deleteBrndhlInfo(@ParamDataSet(name = "ds_delete", required = true) Map<String, Object> deleteMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = brndhlService.deleteBrndhlInfo(deleteMap);
		} catch (Exception e) {
			String message = "배너 삭제 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_12", "배너 삭제"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectExcelBrndhlList
	 * 2. ClassName  : BrndhlController.java
	 * 3. Comment    : 전문관 엑셀다운 목록 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2023.03.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-brndhl-excel.do")
	public NexacroResult selectExcelBrndhlList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> paramMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {

			result = brndhlService.selectExcelBrndhlList(paramMap);

		} catch (Exception e ) {
			String message = "전문관 엑셀 다운 목록 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_10", "전문관 엑셀 다운 목록 조회"}, e) {};
		}
		return result;
	}
	
}
