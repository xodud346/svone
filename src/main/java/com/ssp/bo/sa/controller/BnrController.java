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
import com.ssp.bo.sa.service.BnrService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  배너 컨트롤러
 * @package com.ssp.bo.sa.controller
 * <pre>
 * @author
 * @since   2022. 03. 14.
 * @version 1.0
 * @see BnrController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.14.		최초작성
 */
@Controller
@RequestMapping("/sa/bnr")
public class BnrController {
	private final Logger logger = LoggerFactory.getLogger(BnrController.class);

	@Autowired
	private BnrService bnrService;

	/**
	 * <pre>
	 * 1. MethodName : selectBnrExpsList
	 * 2. ClassName  : BnrController.java
	 * 3. Comment    : 배너 노출 목록 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.14.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-bnr-exps-list.do")
	public NexacroResult selectBnrExpsList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = bnrService.selectBnrExpsList(searchMap);

		} catch (Exception e ) {
			String message = "배너 노출 목록 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_07", "배너 노출 목록 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectBnrList
	 * 2. ClassName  : BnrController.java
	 * 3. Comment    : 배너 목록 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.15.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-bnr-list.do")
	public NexacroResult selectBnrList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, @ParamDataSet(name = "ds_oprUnitList", required = false) List<Map<String, Object>> oprUnitList, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = bnrService.selectBnrList(searchMap, oprUnitList, new OdOrderComm(session));

		} catch (Exception e ) {
			String message = "배너 목록 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_07", "배너 목록 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectNoticAllBnrCnt
	 * 2. ClassName  : BnrController.java
	 * 3. Comment    : 게시구분:전체 배너 개수 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.30.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-notic-all-bnr-cnt.do")
	public NexacroResult selectBnrListCnt(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = bnrService.selectNoticAllBnrCnt(searchMap);

		} catch (Exception e ) {
			String message = "게시구분:전체 배너 개수 조회";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_07", "게시구분:전체 배너 개수 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : updateBnrDispSo
	 * 2. ClassName  : BnrController.java
	 * 3. Comment    : 배너 순서 저장
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.16.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-bnr-disp-so.do")
	public NexacroResult updateBnrDispSo(@ParamDataSet(name = "ds_save", required = true) List<Map<String, Object>> saveMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = bnrService.updateBnrDispSo(saveMap);
		} catch (Exception e) {
			String message = "배너 순서 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_07", "배너 순서 저장"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteBnrExps
	 * 2. ClassName  : BnrController.java
	 * 3. Comment    : 배너 노출정보 및 배너정보 삭제(배너노출정보,배너정보 삭제, 삭제된 카테고리의 garbage 데이터를 삭제하는 용도)
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.16.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-bnr-exps.do")
	public NexacroResult deleteMainPrd(@ParamDataSet(name = "ds_delete", required = true) Map<String, Object> deleteMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = bnrService.deleteBnrExps(deleteMap);
		} catch (Exception e) {
			String message = "배너 노출정보 및 배너정보 삭제 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_07", "배너 노출정보 및 배너정보 삭제"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectBnrInfo
	 * 2. ClassName  : BnrController.java
	 * 3. Comment    : 배너 상세 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.16.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-bnr-info.do")
	public NexacroResult selectBnrDtl(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = bnrService.selectBnrInfo(searchMap);

		} catch (Exception e ) {
			String message = "배너 상세 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_08", "배너 상세 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : saveBnrInfo
	 * 2. ClassName  : BnrController.java
	 * 3. Comment    : 배너 저장
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.04.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-bnr-info.do")
	public NexacroResult saveBnrInfo(@ParamDataSet(name = "ds_save", required = true) Map<String, Object> saveMap, @ParamDataSet(name = "ds_oprUnitList", required =false) List<Map<String, Object>> oprUnitMapList) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = bnrService.saveBnrInfo(saveMap, oprUnitMapList);
		} catch (Exception e) {
			String message = "배너 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_08", "배너 저장 등록"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteBnrInfo
	 * 2. ClassName  : BnrController.java
	 * 3. Comment    : 배너 삭제
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-bnr-info.do")
	public NexacroResult deleteBnrInfo(@ParamDataSet(name = "ds_delete", required = true) Map<String, Object> deleteMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = bnrService.deleteBnrInfo(deleteMap);
		} catch (Exception e) {
			String message = "배너 삭제 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_08", "배너 삭제"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPprCatgBnrList
	 * 2. ClassName  : BnrController.java
	 * 3. Comment    : R&D 인기카테고리 배너 목록 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.03.29.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-ppr-catg-bnr-list.do")
	public NexacroResult selectPprCatgBnrList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = bnrService.selectPprCatgBnrList(searchMap);

		} catch (Exception e ) {
			String message = "인기카테고리 배너 목록 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_07_2", "인기카테고리 배너 목록 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectPprCatgBnrInfo
	 * 2. ClassName  : BnrController.java
	 * 3. Comment    : 인기 카테고리 배너 상세
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.04.21.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-ppr-catg-bnr-info.do")
	public NexacroResult selectPprCatgBnrInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = bnrService.selectPprCatgBnrInfo(searchMap);

		} catch (Exception e ) {
			String message = "인기 카테고리 배너 상세 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_08_4", "인기 카테고리 배너 상세 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : savePprCatgBnrInfo
	 * 2. ClassName  : BnrController.java
	 * 3. Comment    : 인기카테고리 배너 저장
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.04.22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/save-ppr-catg-bnr-info.do")
	public NexacroResult savePprCatgBnrInfo(@ParamDataSet(name = "ds_save", required = true) Map<String, Object> saveMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = bnrService.savePprCatgBnrInfo(saveMap);
		} catch (Exception e) {
			String message = "인기카테고리 배너 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_VA_08_4", "인기카테고리 배너 저장 등록"}, e) {};
		}

		return result;
	}
}
