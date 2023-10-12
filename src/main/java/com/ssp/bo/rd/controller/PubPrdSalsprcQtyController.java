package com.ssp.bo.rd.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.PubPrdSalsprcQtyService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * 
 * @title
 * @package com.ssp.bo.rd.controller
 * 
 *          <pre>
 * @author
 * @since 2022. 02. 15.
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.01.25 최초작성
 */
@Controller
@RequestMapping("/rd/pubPrdSalsprcQty")
public class PubPrdSalsprcQtyController {
	private Logger logger = LoggerFactory.getLogger(PubPrdSalsprcQtyController.class);

	@Resource(name = "pubPrdSalsprcQtyService")
	private PubPrdSalsprcQtyService pubPrdSalsprcQtyService;
	
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PubPrdSalsprcQtyController.propertiesService = propertiesService;
	}
	/**
	 * <pre>
	 * 1. MethodName : selectList
	 * 2. ClassName  : PubPrdProcStbController.java
	 * 3. Comment    : 공용상품 정보
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.02.15
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/selectPrPrdInfo.do")
	public NexacroResult selectPrPrdInfo(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			// TODO 기본값 설정 확인 필요
			
			String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
//			String coCd = StringUtil.getString(searchMap.get("CO_CD"));
//			String prdId = StringUtil.getString(searchMap.get("PRD_ID"));
//			String bzplcId = StringUtil.getString(searchMap.get("BZPLC_ID"));
//			String oprUnitId = StringUtil.getString(searchMap.get("OPR_UNIT_ID"));
			
			if (CommUtil.nvl(langCd).equals("")) {
				searchMap.put("LANG_CD", "KO");
			}
			result = pubPrdSalsprcQtyService.selectPrPrdInfo(searchMap);
			
		} catch (Exception ne) {
			String message = "공용상품 기준판매가 상세 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "RD", "BO", "selectPrPrdInfo", "공용상품 기준판매가 상세" }, ne) {
			};

		}
		return result;
	}

	/*
	 * 진열정보
	 */
	@RequestMapping(value = "/selectDpPrdStatsInfo.do")
	public NexacroResult selectDpPrdStatsInfo(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			// TODO 기본값 설정 확인 필요
			String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
			
			if (CommUtil.nvl(langCd).equals("")) {
				searchMap.put("LANG_CD", "KO");
			}
			result = pubPrdSalsprcQtyService.selectDpPrdStatsInfo(searchMap);
			
		} catch (Exception ne) {
			String message = "공용상품 진열 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "RD", "BO", "selectDpPrdStatsInfo", "공용상품 진열" }, ne) {
			};
		}
		return result;
	}
		
	/*
	 * 구매정보
	 */
	@RequestMapping(value = "/selectPurcInfo.do")
	public NexacroResult selectPurcInfo(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			// TODO 기본값 설정 확인 필요
			String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
			
			if (CommUtil.nvl(langCd).equals("")) {
				searchMap.put("LANG_CD", "KO");
			}
			result = pubPrdSalsprcQtyService.selectPurcInfo(searchMap);
			
		} catch (Exception ne) {
			String message = "공용상품 구매정보 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "RD", "BO", "selectPurcInfo", "공용상품 구매정보" }, ne) {
			};

		}
		return result;
	}
	
	/*
	 * 기준가격
	 */
	@RequestMapping(value = "/selectPcPrdPrc.do")
	public NexacroResult selectPcPrdPrc(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			// TODO 기본값 설정 확인 필요
			String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
			
			if (CommUtil.nvl(langCd).equals("")) {
				searchMap.put("LANG_CD", "KO");
			}
			result = pubPrdSalsprcQtyService.selectPcPrdPrc(searchMap);
			
		} catch (Exception ne) {
			String message = "공용상품 가격정보 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "RD", "BO", "selectPcPrdPrc", "공용상품 기준가격" }, ne) {
			};

		}
		return result;
	}
	
	/*
	 * 물량할인
	 */
	@RequestMapping(value = "/selectPcPrdQty.do")
	public NexacroResult selectPcPrdQty(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			// TODO 기본값 설정 확인 필요
			String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
			
			if (CommUtil.nvl(langCd).equals("")) {
				searchMap.put("LANG_CD", "KO");
			}
			result = pubPrdSalsprcQtyService.selectPcPrdQty(searchMap);
			
		} catch (Exception ne) {
			String message = "공용상품 물량할인 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "RD", "BO", "selectPcPrdQty", "공용상품 물량할인" }, ne) {
			};

		}
		return result;
	}
	
	/*
	 * 배송비
	 */
	@RequestMapping(value = "/selectPcPrdDlcstDtls.do")
	public NexacroResult selectPcPrdDlcstDtls(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			// TODO 기본값 설정 확인 필요
			String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
			
			if (CommUtil.nvl(langCd).equals("")) {
				searchMap.put("LANG_CD", "KO");
			}
			result = pubPrdSalsprcQtyService.selectPcPrdDlcstDtls(searchMap);
			
		} catch (Exception ne) {
			String message = "공용상품 배송비 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "RD", "BO", "selectPcPrdDlcstDtls", "공용상품 배송비" }, ne) {
			};

		}
		return result;
	}
	
	/*
	 * 요청 상품 정보
	 */
	@RequestMapping(value = "/selectRdReqNewPrdInfo.do")
	public NexacroResult selectRdReqNewPrdInfo(
			@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			// TODO 기본값 설정 확인 필요
			String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
			
			if (CommUtil.nvl(langCd).equals("")) {
				searchMap.put("LANG_CD", "KO");
			}
			result = pubPrdSalsprcQtyService.selectRdReqNewPrdInfo(searchMap);
			
		} catch (Exception ne) {
			String message = "공용상품 요청 상품 정보 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[] { "RD", "BO", "selectRdReqNewPrdInfo", "공용상품 요청 상품 정보" }, ne) {
			};

		}
		return result;
	}
	
	
	/*
	 * 진열정보 저장
	 */
	@RequestMapping(value = "/saveDpPrdStatsInfo.do")
	public NexacroResult saveDpPrdStatsInfo(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception{
		NexacroResult result;
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			result = pubPrdSalsprcQtyService.saveDpPrdStatsInfo(commandMapList);
		} catch ( Exception e ) {
			String message = "진열정보 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"RD", "BO", "saveDpPrdStatsInfo", "진열정보 저장"}, e) {};
		}
		return result;
	}
	
	/*
	 * 기준가격 저장
	 */
	@RequestMapping(value = "/savePcPrdPrcDtls.do")
	public NexacroResult savePcPrdPrcDtls(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception{
		NexacroResult result;
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			result = pubPrdSalsprcQtyService.savePcPrdPrcDtls(commandMapList);
		} catch ( Exception e ) {
			String message = "기준가격 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"RD", "BO", "savePcPrdPrcDtls", "기준가격 저장"}, e) {};
		}
		return result;
	}
	
	/*
	 * 물량할인 저장
	 */
	@RequestMapping(value = "/saveRndQtyDc.do")
	public NexacroResult saveRndQtyDc(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception{
		NexacroResult result;
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			result = pubPrdSalsprcQtyService.saveRndQtyDc(commandMapList);
		} catch ( Exception e ) {
			String message = "물량할인 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"RD", "BO", "saveRndQtyDc", "물량할인 저장"}, e) {};
		}
		return result;
	}
	
	/*
	 * 배송비 저장
	 */
	@RequestMapping(value = "/savePcPrdDlcstDtls.do")
	public NexacroResult savePcPrdDlcstDtls(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMapList) throws Exception{
		NexacroResult result;
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		try {
			result = pubPrdSalsprcQtyService.savePcPrdDlcstDtls(commandMapList);
		} catch ( Exception e ) {
			String message = "배송비 저장 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"RD", "BO", "savePcPrdDlcstDtls", "배송비 저장"}, e) {};
		}
		return result;
	}
	
}
