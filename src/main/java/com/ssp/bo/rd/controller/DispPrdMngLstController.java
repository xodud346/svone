/*------------------------------------------------------------------------------
 * NAME : DispPrdMngLstController.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 * DATE         AUTHOR      DESCRIPTION
 * ----------   ----------  ----------------------------------------------------
 * 2022.04.28   newwhite7   전시상품 화면 생성
 * 2023.07.11   egnho7      RND 전문 제작품 분리 작업 SSP-3316
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.controller;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.service.DispPrdMngLstService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.BizRuntimeException;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.util.StringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <pre>
 * 전시상품 Controller
 * </pre>
 *
 * @package com.ssp.bo.rd.controller
 * @title DispPrdMngLstController
 * @since 2022.04.28
 * @author son
 */
@Controller
@RequestMapping("/rd/disp-prd-mng-lst")
public class DispPrdMngLstController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private DispPrdMngLstService dispPrdMngLstService;


	/**
	 * <pre>
	 * 1. MethodName : selectPrdSprList
	 * 2. ClassName  : PrdSprController.java
	 * 3. Comment    : RND 전시상품 목록
	 * 4. 작성자       : 박성진
	 * 5. 작성일       : 2022.04.25
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-prd-spr-list.do")
	public NexacroResult selectPrdSprList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result;

		try {
			result = dispPrdMngLstService.selectDispPrdMngLst(searchMap);
		} catch (Exception e) {
			String message = "RND 전시상품 목록 에러";
			logger.error(message, e);
			throw new LoggingException(new String[]{"RD", "BO", "SSP_BO_RD_65", "RND 전시상품 목록"}, e) {
			};
		}
		return result;
	}

	/**
	 * RnD 전시상품 진열순서 변경
	 *
	 * @param srtList
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/update-list-srt.do")
	public NexacroResult updateSrtSo(@ParamDataSet(name = "ds_bgList", required = false) List<Map<String, Object>> srtList) throws Exception {
		NexacroResult result = new NexacroResult();

		try {
			Map<String, Object> param = new HashMap<>();

			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			param.put("CO_CD", admin.get("CO_CD"));
			param.put("UPDPSN_ID", admin.get("OPRTR_ID"));

			param.put("srtList", srtList);

			dispPrdMngLstService.updateSrtSo(param);
		} catch (Exception e) {
			logger.error("RND 전시상품 진열순서 변경 실패");
			throw new LoggingException(new String[] { "RD", "RD", "SSP_BO_RD_65", "RND 전시상품 진열순서 변경 실패" }, e);
		}
		return result;
	}

	/**
	 * RnD 전시상품 상세 조회
	 *
	 * @param searchMap 조회조건
	 * @return NexacroResult
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-product-disp-info.do")
	public NexacroResult selectProductDispInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_basic", dispPrdMngLstService.selectDispBasis(searchMap));
			result.addDataSet("ds_optnBasis", dispPrdMngLstService.selectDispOptnBasis(searchMap));
			result.addDataSet("ds_optnDtl", dispPrdMngLstService.selectDispOptnDtl(searchMap));
			result.addDataSet("ds_prdCon", dispPrdMngLstService.selectDispOptnDtlMapp(searchMap));
			result.addDataSet("ds_addOptnBasis", dispPrdMngLstService.selectDispAddOptnBasis(searchMap));
			result.addDataSet("ds_addOptnDtl", dispPrdMngLstService.selectDispAddOptnDtl(searchMap));
			Map<String, Object> oprtrMap = dispPrdMngLstService.selectProductDispOprtr(searchMap);
			if (oprtrMap != null) {
				result.addVariable("dispOprtrId", StringUtil.getString(oprtrMap, "OPRTR_ID"));
				result.addVariable("dispOprtrNm", StringUtil.getString(oprtrMap, "OPRTR_NM"));
			}
		} catch (Exception e) {
			logger.error("전시상품 정보 조회 실패");
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_66", "RND 전시상품 상세 정보 조회 실패" }, e);
		}
		return result;
	}


	/**
	 * <pre>
	 * 1. MethodName : saveProductDispInfo
	 * 2. ClassName  : PrProductDispController
	 * 3. Comment    : 전시상품 저장
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.06.16
	 * </pre>
	 * @return NexacroResult
	 */
	@RequestMapping(value = "/save-product-disp-info.do")
	public NexacroResult saveProductDispInfo(@ParamDataSet(name = "ds_basic", required = true) Map<String, Object> ds_basic,
	                                         @ParamDataSet(name = "ds_optnBasis", required = true) List<Map<String, Object>> ds_optnBasis,
	                                         @ParamDataSet(name = "ds_optnDtl", required = true) List<Map<String, Object>> ds_optnDtl,
	                                         @ParamDataSet(name = "ds_prdCon", required = true) List<Map<String, Object>> ds_prdCon,
	                                         @ParamDataSet(name = "ds_addOptnBasis", required = true) List<Map<String, Object>> ds_addOptnBasis,
	                                         @ParamDataSet(name = "ds_addOptnDtl", required = true) List<Map<String, Object>> ds_addOptnDtl,
	                                         @ParamDataSet(name = "ds_delOptn", required = true) List<Map<String, Object>> ds_delOptn) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			if(admin!=null && !admin.isEmpty()) {
				ds_basic.put("SESSION_OPRTR_ID", admin.get("OPRTR_ID"));
			}
			String resStr = dispPrdMngLstService.saveRndProductDispInfo(ds_basic, ds_optnBasis, ds_optnDtl, ds_prdCon, ds_addOptnBasis, ds_addOptnDtl, ds_delOptn);
			if (resStr.equals("EXISTS_ITM")) {
				result.addVariable("resStr", "이미 등록된 대표상품 ID 입니다.");
			}
		} catch (Exception e) {
			logger.error("전시상품 저장 실패");
			throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_NA_25", "전시상품 저장 실패" }, e);
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectCategoryOptionValues
	 * 2. ClassName  : PrProductDispController
	 * 3. Comment    : 상품군 옵션값 조회
	 * 4. 작성자      : 김재흥
	 * 5. 작성일      : 2023.07.25
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-category-option-values.do")
    public NexacroResult selectCategoryOptionValues(@ParamDataSet(name = "ds_search", required = true) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
			List<Map<String, Object>> categoryOptions = dispPrdMngLstService.selectCategoryOptionValues(searchMap);
			result.addDataSet("ds_optnBasis", categoryOptions);
            result.addVariable("categoryOptions", categoryOptions);
            Map<String, Object> oprtrMap = dispPrdMngLstService.selectProductDispOprtr(searchMap);
            if (oprtrMap != null) {
                result.addVariable("dispOprtrId", StringUtil.getString(oprtrMap, "OPRTR_ID"));
                result.addVariable("dispOprtrNm", StringUtil.getString(oprtrMap, "OPRTR_NM"));
            }
        } catch (Exception e) {
            logger.error("전시상품 중복체크");
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_NA_25", "전시상품 중복체크"}, e);
        }
        return result;
    }
}