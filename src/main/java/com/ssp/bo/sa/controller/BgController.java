package com.ssp.bo.sa.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.sa.service.BgService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  배지 관리 컨트롤러
 * @package com.ssp.bo.sa.controller
 * <pre>
 * @author
 * @since   2022. 02. 22.
 * @version 1.0
 * @see BgController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.22.		최초작성
 */
@Controller
@RequestMapping("/sa/bg")
public class BgController {
	private final Logger logger = LoggerFactory.getLogger(BgController.class);

	@Autowired
	private BgService bgService;

	/**
	 * <pre>
	 * 1. MethodName : selectBgList
	 * 2. ClassName  : BgController.java
	 * 3. Comment    : 배지 목록
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.02.22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-bg-list.do")
	public NexacroResult selectBgList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = bgService.selectBgList(searchMap);

		} catch (Exception e ) {
			String message = "배지 리스트 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_11", "배지 리스트 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectBgDtlInfo
	 * 2. ClassName  : BgController.java
	 * 3. Comment    : 배지 상세
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.02.24.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-bg-detail.do")
	public NexacroResult selectBgDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = bgService.selectBgDetail(searchMap);

		} catch (Exception e ) {
			String message = "배지 상세 조회 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_13", "배지 상세 조회"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : insertBgDetail
	 * 2. ClassName  : BgController.java
	 * 3. Comment    : 배지 상세 등록
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.02.24.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/insert-bg-detail.do")
	public NexacroResult insertBgDetail(@ParamDataSet(name = "ds_save", required = true) Map<String, Object> deleteMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = bgService.insertBgDetail(deleteMap);
		} catch (Exception e) {
			String message = "배지 상세 등록 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_12", "배지 상세 등록"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : updateBgDetail
	 * 2. ClassName  : BgController.java
	 * 3. Comment    : 배지 상세 수정
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.02.24.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-bg-detail.do")
	public NexacroResult updateBgDetail(@ParamDataSet(name = "ds_save", required = true) Map<String, Object> updateMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			result = bgService.updateBgDetail(updateMap);

		} catch (Exception e ) {
			String message = "배지 상세 수정 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_13", "배지 상세 수정"}, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectBgPrdAplyCnt
	 * 2. ClassName  : BgController.java
	 * 3. Comment    : 상품에 배지 적용된 개수 조회
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.06.28.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-bg-prd-aply-cnt.do")
	public NexacroResult selectBgPrdAplyCnt(@ParamDataSet(name = "ds_delete", required = true) Map<String, Object> deleteMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = bgService.selectBgPrdAplyCnt(deleteMap);
		} catch (Exception e) {
			String message = "배지 상세 삭제 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_13", "배지 상세 삭제"}, e) {};
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : deleteBgDetail
	 * 2. ClassName  : BgController.java
	 * 3. Comment    : 배지 상세 삭제
	 * 4. 작성자       : 87minho
	 * 5. 작성일       : 2022.02.24.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/delete-bg-detail.do")
	public NexacroResult deleteBgDetail(@ParamDataSet(name = "ds_delete", required = true) Map<String, Object> deleteMap) throws Exception {

		NexacroResult result = new NexacroResult();
		try {
			result = bgService.deleteBgDetail(deleteMap);
		} catch (Exception e) {
			String message = "배지 상세 삭제 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"SA", "BO", "SSP_BO_NA_13", "배지 상세 삭제"}, e) {};
		}

		return result;
	}


}
