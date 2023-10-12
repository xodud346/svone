/*------------------------------------------------------------------------------
 * NAME : DispPrdMngEstmReqLstController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 * DATE         AUTHOR      DESCRIPTION
 * ----------   ---------   ----------------------------------------------------
 * 2022.04.28   newwhite7
 * 2023.07.12   egnho7      SSP-3316 전문제작품 로직 분리
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.controller;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.rd.service.CprtcpEstmReqMngService;
import com.ssp.bo.rd.service.DispPrdMngEstmReqLstService;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.util.StringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

/**
 * <pre>
 *  전시상품관리 견적요청 Controller
 * </pre>
 * @package com.ssp.bo.rd.controller
 * @title   DispPrdMngEstmReqLstController
 * @since 2022.04.28
 * @version 1.0
 */
@Controller
@RequestMapping("/rd/disp-prd-mng-estm-req-lst")
public class DispPrdMngEstmReqLstController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private DispPrdMngEstmReqLstService dispPrdMngEstmReqLstService;

	@Autowired
	private CprtcpEstmReqMngService cprtcpEstmReqMngService;


	/**
	 * <pre>
	 * 1. MethodName : selectProductEstimateList
	 * 2. ClassName  : PrProductEstimateController
	 * 3. Comment    : 견적요청 목록
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.03.14
	 * </pre>
	 * @return NexacroResult
	 */
	@RequestMapping(value = "/select-product-estimate-list.do")
	public NexacroResult selectProductEstimateList(
		HttpSession session
		, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
	) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("__MALL_ADMIN_SESSION_INFO__");

		try {
			if (userInfo != null) {
				result.addVariable("totalCount", dispPrdMngEstmReqLstService.selectProductEstimateCount(searchMap, new OdOrderComm(session)));
				result.addDataSet("ds_list", dispPrdMngEstmReqLstService.selectProductEstimateList(searchMap, new OdOrderComm(session)));
			} else {
				throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_68", "전문제작품 견적요청 조회 실패"}, new Exception("로그인 정보가 없습니다."));
			}
		} catch (Exception e) {
			logger.error("전문제작품 견적요청 조회 실패 :: {}", e.getMessage());
			throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_68", "전문제작품 견적요청 조회 실패"}, e);
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : selectProductEstimateDetail
	 * 2. ClassName  : PrProductEstimateController
	 * 3. Comment    : 견적요청 상세 조회
	 * 4. 작성자     : 김주화
	 * 5. 작성일     : 2022.04.12
	 * </pre>
	 *
	 * @return NexacroResult
	 */
	@RequestMapping(value = "/select-product-estimate-detail.do")
	public NexacroResult selectProductEstimateDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("__MALL_ADMIN_SESSION_INFO__");

		try {
			if (userInfo != null) {
				Map<String, Object> map = dispPrdMngEstmReqLstService.selectReqProcStat(searchMap);
				String procStatCd = StringUtil.getString(map, "ESTM_REQ_PROC_STATS_CD");

				Map<String, String> detail;
				List<Map<String, String>> op;
				List<Map<String, String>> addOp;
				// 요청상태일땐 대표상품 정보와 견적요청 정보를 가지고 옴
				if (procStatCd.equals("10")) {
					detail = dispPrdMngEstmReqLstService.selectProductEstimateDetail(searchMap);
					op = dispPrdMngEstmReqLstService.selectProductEstimateOption(searchMap);
				}
				// 그외 상태일땐 상품요청정보를 가지고 옴
				else {
					detail = dispPrdMngEstmReqLstService.selectNewProductDetail(searchMap);
					op = dispPrdMngEstmReqLstService.selectNewProductOption(searchMap);
				}
				addOp = dispPrdMngEstmReqLstService.selectProductEstimateAddOption(searchMap);

				// 협력사 견적요청 처리 정보
				List<Map<String, Object>> suppliers = cprtcpEstmReqMngService.selectRndDispEstmReqRplyListInq(searchMap);
				List<Map<String, Object>> reqHistory = cprtcpEstmReqMngService.selectRndDispReqCprtcpEstmStatsDtls(searchMap);

				result.addDataSet("ds_detail", detail);
				result.addDataSet("ds_op", op);
				result.addDataSet("ds_addOp", addOp);
				result.addDataSet("ds_supplier", suppliers);
				result.addDataSet("ds_reqProcDtls", reqHistory);
			} else {
				throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_69", "RND 전문제작품 견적요청 상세 조회 실패"}, new Exception("로그인 정보가 없습니다."));
			}
		} catch (Exception e) {
			this.logger.error("견적요청 상세 조회 실패");
			throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_69", "RND 전문제작품 견적요청 상세 조회 실패"}, e);
		}

		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : prProductEstimateStatusList
	 * 2. ClassName  : PrProductEstimateController
	 * 3. Comment    : 견적요청 접수
	 * 4. 작성자     : 김주화
	 * 5. 작성일     : 2022.04.12
	 * </pre>
	 *
	 * @return NexacroResult
	 */
	@RequestMapping(value = "pr-product-estimate-status-list.do")
	public NexacroResult prProductEstimateStatusList(
			@ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> list
			, @ParamDataSet(name = "ds_op", required = false) List<Map<String, Object>> op
			, @ParamDataSet(name = "ds_addOp", required = false) List<Map<String, Object>> addOp
			, HttpSession session) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("__MALL_ADMIN_SESSION_INFO__");

		try {
			if (userInfo != null) {
                dispPrdMngEstmReqLstService.insertProductEstimateStatusList(list, op, addOp, userInfo);
			} else {
				throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_69", "RND 전문제작품 견적요청 상태 등록 실패"}, new Exception("로그인 정보가 없습니다."));
			}
		} catch (Exception e) {
			this.logger.error("견적요청 상세 조회 실패");
			throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_69", "RND 전문제작품 견적요청 상태 등록 실패"}, e);
		}

		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : prProductEstimateStatus
	 * 2. ClassName  : PrProductEstimateController
	 * 3. Comment    : 견적요청 상태변경
	 * 4. 작성자     : 김주화
	 * 5. 작성일     : 2022.04.12
	 * </pre>
	 *
	 * @return NexacroResult
	 */
	@RequestMapping(value = "pr-product-estimate-status.do")
	public NexacroResult prProductEstimateStatus(@ParamDataSet(name = "ds_detail", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
		NexacroResult result = new NexacroResult();
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("__MALL_ADMIN_SESSION_INFO__");

		try {
			if (userInfo != null) {
				searchMap.put("OPRTR_ID", userInfo.get("OPRTR_ID"));
				Map<String, Object> resultMap = dispPrdMngEstmReqLstService.insertProductEstimateStatus(searchMap);

				result.addDataSet("ds_stat", resultMap);
			} else {
				throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_69", "RND 전문제작품 견적요청 상태 등록 실패"}, new Exception("로그인 정보가 없습니다."));
			}
		} catch (Exception e) {
			this.logger.error("RND 전문제작품 견적요청 상세 조회 실패");
			throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_69", "RND 전문제작품 견적요청 상태 등록 실패"}, e);
		}

		return result;
	}

	/**
	 * <pre>
	 * 	1. MethodName : saveRndDispEstmAddOptions
	 * 	2. ClassName  : PrProductEstimateController
	 * 	3. Comment    : 견적요청 추가정보 등록
	 * 	4. 작성자     : 김재흥
	 * 	5. 작성일     : 2023.08.08
	 * 	</pre>
	 * @param saveMap
	 * @param session
	 * @return NexacroResult
	 */
	@RequestMapping(value = "save-rnd-disp-estm-add-options.do")
	public NexacroResult saveRndDispEstmAddOptions(@ParamDataSet(name = "ds_addOpFileInfo", required = false) Map<String, Object> saveMap, HttpSession session) throws LoggingException {
		NexacroResult result = new NexacroResult();
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute("__MALL_ADMIN_SESSION_INFO__");

		try {
			if (userInfo != null) {
				saveMap.put("OPRTR_ID", userInfo.get("OPRTR_ID"));
				dispPrdMngEstmReqLstService.saveRndDispEstmAddOptions(saveMap);

				result.addDataSet("ds_addOp", dispPrdMngEstmReqLstService.selectProductEstimateAddOption(saveMap));
			} else {
				throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_69", "RND 견적요청 추가정보 등록 실패"}, new Exception("로그인 정보가 없습니다."));
			}
		} catch (Exception e) {
			this.logger.error("RND 견적요청 추가정보 등록 실패");
			throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_69", "RND 견적요청 추가정보 등록 실패"}, e);
		}

		return result;
	}
}
