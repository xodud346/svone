package com.ssp.bo.pc.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pc.service.PcPopupService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  계획매익률 컨트롤러
 * @package com.ssp.bo.pc.controller
 * <pre>
 * @author  scvgo17
 * @since   2022. 01. 18.
 * @version 1.0
 * @see PcPopupController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/pc/popup")
public class PcPopupController {
	private final Logger log = LoggerFactory.getLogger(PcPopupController.class);

	@Autowired
    private PcPopupService pcPopupService;

	@RequestMapping(value = "/selectPrcCondList.do")
	public NexacroResult selectPrcCondList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			result = pcPopupService.selectPrcCondList(searchMap);

		} catch (Exception e ) {
			String message = "협력사 Condition 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectDetrInfoList", "절사 관리 조회"}, e) {};
		}
		return result;
	}

	@RequestMapping(value = "/selectCprtcpOcarTrnsreList.do")
	public NexacroResult selectCprtcpOcarTrnsreList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			result = pcPopupService.selectCprtcpOcarTrnsreList(searchMap);

		} catch (Exception e ) {
			String message = "자차배송 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectCprtcpOcarTrnsreList", message}, e) {};
		}
		return result;
	}

	@RequestMapping(value = "/select-prd-qty-hst-list.do")
	public NexacroResult selectPrdQtyHstList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			result = pcPopupService.selectPrdQtyHstList(searchMap);

		} catch (Exception e ) {
			String message = "물량할인 히스토리 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectPrdQtyHstList", message}, e) {};
		}
		return result;
	}

	@RequestMapping(value = "/select-prd-dlcst-hst-list.do")
	public NexacroResult selectPrdDlcstHstList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
	System.out.println(searchMap);
			result = pcPopupService.selectPrdDlcstHstList(searchMap);

		} catch (Exception e ) {
			String message = "배송비할인 히스토리 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectPrdDlcstHstList", message}, e) {};
		}
		return result;
	}

	@RequestMapping(value = "/select-sals-dsgn-salsprc-hst-list.do")
	public NexacroResult selectSalsDsgnSalsprcHstList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			if(admin != null) {
				searchMap.put("coCd", admin.get("CO_CD"));
			}
			
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			
			result = pcPopupService.selectSalsDsgnSalsprcHstList(searchMap);
		} catch (Exception e ) {
			String message = "배송비할인 히스토리 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectSalsDsgnSalsprcHstList", message}, e) {};
		}
		return result;
	}

	@RequestMapping(value = "/update-new-prd-req-prc.do")
	public NexacroResult updateNewPrdReqPrcExcept(@ParamDataSet(name = "ds_insert", required = false) Map<String, Object> insertMap
											,@ParamDataSet(name = "ds_insertList", required = false) List<Map<String, Object>> insertListMap) throws Exception{
		NexacroResult result = new NexacroResult();

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		if(admin != null) {
			insertMap.put("coCd", admin.get("CO_CD"));
			insertMap.put("updpsnId", admin.get("OPRTR_ID"));
		}

		try {

			insertMap = CommonUtil.toCamelCaseMap(insertMap);

			result = pcPopupService.updateNewPrdReqPrcExcept(insertMap,insertListMap);

		} catch (Exception e ) {
			String message = "예외처리 저장 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "updateNewPrdReqPrc", message}, e) {};
		}
		return result;
	}

	@RequestMapping(value = "/select-prc-trend-list.do")
	public NexacroResult selectPrcTrendList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);

			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

			if(admin != null) {
				searchMap.put("coCd", admin.get("CO_CD"));
			}

			result = pcPopupService.selectPrcTrendList(searchMap);

		} catch (Exception e ) {
			String message = "단가변경 이력 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectPrcTrendList", message}, e) {};
		}
		return result;
	}

	@RequestMapping(value = "/select-prc-history-list.do")
	public NexacroResult selectPrcHistoryList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

			if(admin != null) {
				searchMap.put("coCd", admin.get("CO_CD"));
			}
			result = pcPopupService.selectPrcHistoryList(searchMap);

		} catch (Exception e ) {
			String message = "단가변경 이력 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectPrcHistoryList", message}, e) {};
		}
		return result;
	}

	@RequestMapping(value = "/select-disp-history-list.do")
	public NexacroResult selectDispHistoryList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			if(admin != null) {
				searchMap.put("coCd", admin.get("CO_CD"));
			}

			result = pcPopupService.selectDispHistoryList(searchMap);

		} catch (Exception e ) {
			String message = "진열변경 이력 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectDispHistoryList", message}, e) {};
		}
		return result;
	}



}
