package com.ssp.bo.pr.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pr.service.PrProductDispService;
import com.ssp.core.co.service.CoCommonService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  SSP전시상품
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  조지훈
 * @since   2022.06.10
 * @version 1.0
 * @see PrProductDispController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.06.10    조지훈        최초작성
 */
@Controller
@RequestMapping("/pr/prd-disp")
public class PrProductDispController {

	@Autowired
	private PrProductDispService prProductDispService;
	
	@Autowired
	private CoCommonService coCommonService;

	private Logger logger = LoggerFactory.getLogger(PrProductDispController.class);
	
	/**
	 * <pre>
	 * 1. MethodName : selectProductDispInfo
	 * 2. ClassName  : PrProductDispController
	 * 3. Comment    : 전시상품 정보 조회
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.06.16
	 * </pre>
     * @return NexacroResult
     */
	@RequestMapping(value = "/select-product-disp-info.do")
    public NexacroResult selectProductDispInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("ds_basic", prProductDispService.selectDispBasis(searchMap));
            result.addDataSet("ds_optnBasis", prProductDispService.selectDispOptnBasis(searchMap));
            result.addDataSet("ds_optnDtl", prProductDispService.selectDispOptnDtl(searchMap));
            result.addDataSet("ds_prdCon", prProductDispService.selectDispOptnDtlMapp(searchMap));
            result.addDataSet("ds_addOptnBasis", prProductDispService.selectDispAddOptnBasis(searchMap));
            result.addDataSet("ds_addOptnDtl", prProductDispService.selectDispAddOptnDtl(searchMap));
            Map<String, Object> oprtrMap = prProductDispService.selectProductDispOprtr(searchMap);
        	if(oprtrMap!=null) {
        		result.addVariable("dispOprtrId", StringUtil.getString(oprtrMap, "OPRTR_ID"));
            	result.addVariable("dispOprtrNm", StringUtil.getString(oprtrMap, "OPRTR_NM"));
        	}
        } catch (Exception e) {
            logger.error("전시상품 정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_NA_25", "전시상품 정보 조회 실패" }, e);
        }
        return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectDispReprProductInfo
	 * 2. ClassName  : PrProductDispController
	 * 3. Comment    : 전시 대표상품 정보
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.06.16
	 * </pre>
     * @return NexacroResult
     */
	@RequestMapping(value = "/select-disp-repr-product-info.do")
    public NexacroResult selectDispReprProductInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("ds_reprPrd", prProductDispService.selectDispReprProductInfo(searchMap));
        } catch (Exception e) {
            logger.error("전시 대표상품 정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_NA_25", "전시 대표상품 정보 조회 실패" }, e);
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
            prProductDispService.saveProductDispInfo(ds_basic, ds_optnBasis, ds_optnDtl, ds_prdCon, ds_addOptnBasis, ds_addOptnDtl, ds_delOptn);
        } catch (Exception e) {
            logger.error("전시상품 저장 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_NA_25", "전시상품 저장 실패" }, e);
        }
        return result;
    }
	
	
	/**
	 * <pre>
	 * 1. MethodName : selectProductDispExists
	 * 2. ClassName  : PrProductDispController
	 * 3. Comment    : 전시상품 중복체크
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.06.16
	 * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-product-disp-exists.do")
    public NexacroResult selectProductDispExists(@ParamDataSet(name = "ds_search", required = true) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	result.addVariable("productDispExists", prProductDispService.selectProductDispExists(searchMap));
        	Map<String, Object> oprtrMap = prProductDispService.selectProductDispOprtr(searchMap);
        	if(oprtrMap!=null) {
        		result.addVariable("dispOprtrId", StringUtil.getString(oprtrMap, "OPRTR_ID"));
            	result.addVariable("dispOprtrNm", StringUtil.getString(oprtrMap, "OPRTR_NM"));
        	}
        } catch (Exception e) {
            logger.error("전시상품 중복체크");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_NA_25", "전시상품 중복체크" }, e);
        }
        return result;
    }
    
    
    /**
	 *
	 * <pre>
	 * 1. MethodName : fileDelete
	 * 2. ClassName : CoCommonController
	 * 3. Comment : 첨부파일 삭제
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-02-23
	 * </pre>
	 *
	 * @param request HttpServletRequest
	 * @return NexacroResult Map{ docRegId, result }
	 * @throws Exception
	 */
	@RequestMapping("/file-delete.do")
	public NexacroResult fileDelete(@ParamDataSet(name = "ds_fileDel", required = true) Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();
		try {
			prProductDispService.fileDelete(StringUtil.getString(searchMap, "docRegId"));
		} catch ( MessageException e ) {
			if( e.getCode() == -100 ) {
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());
				return result;
			} else {
				String message = "파일 삭제 에러";
				logger.error(message, e);
				throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_NA_25", message}, e);
			}
		}

		return result;
	}
}
