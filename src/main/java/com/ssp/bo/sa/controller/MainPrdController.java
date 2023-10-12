package com.ssp.bo.sa.controller;

import java.util.HashMap;
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
import com.ssp.bo.sa.service.MainPrdService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  메인상품 컨트롤러
 * @package com.ssp.bo.sa.controller
 * <pre>
 * @author
 * @since   2022. 03. 02.
 * @version 1.0
 * @see MainPrdController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.02.		최초작성
 */
@Controller
@RequestMapping("/sa/main-prd")
public class MainPrdController {
	private final Logger logger = LoggerFactory.getLogger(MainPrdController.class);

	@Autowired
	private MainPrdService mainPrdService;

	/**
	 * <pre>
	 * 1. MethodName : selectMainPrdList
	 * 2. ClassName  : MainPrdController.java
	 * 3. Comment    : 메인상품 목록 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.02.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-main-prd-list.do")
	public NexacroResult selectMainPrdList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = mainPrdService.selectMainPrdList(searchMap);

		} catch (Exception e ) {
			String message = "메인상품 목록 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_01", "메인상품 목록 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectMainPrdDtlList
	 * 2. ClassName  : MainPrdController.java
	 * 3. Comment    : 메인상품 상세 목록 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.03.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-main-prd-dtl-list.do")
	public NexacroResult selectMainPrdDtlList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, @ParamDataSet(name = "ds_oprUnitList", required = false) List<Map<String, Object>> oprUnitList, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = mainPrdService.selectMainPrdDtlList(searchMap, oprUnitList, new OdOrderComm(session));

		} catch (Exception e ) {
			String message = "메인상품 상세 목록 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_01", "메인상품 상세 목록 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveMainPrd
	 * 2. ClassName  : MainPrdController.java
	 * 3. Comment    : 메인상품 저장
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.10.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-main-prd.do")
	public NexacroResult saveMainPrd(@ParamDataSet(name = "ds_save", required = true) Map<String, Object> saveMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = mainPrdService.saveMainPrd(saveMap);
		} catch (Exception e) {
			String message = "메인상품 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_01", "메인상품 저장"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : updateMainPrdDtlSo
	 * 2. ClassName  : MainPrdController.java
	 * 3. Comment    : 메인상품 상세 순서 저장
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.07.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-main-prd-dtl-so.do")
	public NexacroResult updateMainPrdDtlSo(@ParamDataSet(name = "ds_save", required = true) List<Map<String, Object>> saveMap, @ParamDataSet(name = "ds_chk", required = false) Map<String, Object> chkMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = mainPrdService.updateMainPrdDtlSo(saveMap, chkMap);
		} catch (Exception e) {
			String message = "메인상품 상세 순서 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_01", "메인상품 상세 순서 저장"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : insertMainPrdDtl
	 * 2. ClassName  : MainPrdController.java
	 * 3. Comment    : 메인상품 상세 등록
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.04.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/insert-main-prd-dtl.do")
	public NexacroResult insertMainPrdDtl(@ParamDataSet(name = "ds_save", required = true) Map<String, Object> saveMap, @ParamDataSet(name = "ds_oprUnitList", required =false) List<Map<String, Object>> oprUnitMapList) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = mainPrdService.insertMainPrdDtl(saveMap, oprUnitMapList);
		} catch (Exception e) {
			String message = "메인상품 상세 등록 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_02", "메인상품 상세 등록"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteMainPrdDtl
	 * 2. ClassName  : MainPrdController.java
	 * 3. Comment    : 메인상품 상세 삭제
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.08.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-main-prd-dtl.do")
	public NexacroResult deleteMainPrdDetail(@ParamDataSet(name = "ds_delete", required = true) List<Map<String, Object>> deleteMapList) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = mainPrdService.deleteMainPrdDtl(deleteMapList);
		} catch (Exception e) {
			String message = "메인상품 상세 삭제 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_01", "메인상품 상세 삭제"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteMainPrd
	 * 2. ClassName  : MainPrdController.java
	 * 3. Comment    : 메인상품 삭제(삭제된 카테고리의 garbage 데이터를 삭제하는 용도)
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.08.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-main-prd.do")
	public NexacroResult deleteMainPrd(@ParamDataSet(name = "ds_delete", required = true) Map<String, Object> deleteMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = mainPrdService.deleteMainPrd(deleteMap);
		} catch (Exception e) {
			String message = "메인상품 삭제 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_01", "메인상품 삭제"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPrdInfo
	 * 2. ClassName  : MainPrdController.java
	 * 3. Comment    : 상품 상세
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-prd-info.do")
	public NexacroResult selectPrdInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = mainPrdService.selectPrdInfo(searchMap);

		} catch (Exception e ) {
			String message = "상품 상세 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_03", "상품 상세 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectMainPrdIdCheckList
	 * 2. ClassName : MainPrdController
	 * 3. Comment : 상품ID 유효성 검사
	 * 4. 작성자 : 87minho
	 * 5. 작성일 : 2022.04.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@SuppressWarnings("serial")
	@RequestMapping(value = "/select-main-prd-id-check-list.do")
	public NexacroResult selectMainPrdIdCheckList(@ParamDataSet(name = "ds_save", required = true) Map<String, Object> saveMap, @ParamDataSet(name = "ds_oprUnitList", required =false) List<Map<String, Object>> oprUnitMapList,@ParamDataSet(name = "ds_searchPrdIdCheckList", required = false) List<Map<String, Object>> searchPrdIdCheckMapList) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
			Map<String, Object> searchMap = new HashMap<>();

			//searchMap.put("prdIdChecks", searchPrdIdCheckMapList);

			// 상품ID 유효성 검사
			List<Map<String,Object>> selectMainPrdIdCheckList = mainPrdService.selectMainPrdIdCheckList(saveMap, oprUnitMapList, searchPrdIdCheckMapList);

			result.addDataSet("ds_output1", selectMainPrdIdCheckList);
		} catch (Exception e ) {
			String message = "메인상품ID 유효성 검사";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_02", "메인상품ID 유효성 검사"}, e) {};
		}

		return result;
	}
}
