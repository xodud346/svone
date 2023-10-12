package com.ssp.bo.pr.controller;

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
import com.ssp.bo.pr.service.PrProductSeriesService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  시리즈그룹상품관리  컨트롤러
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  이원준
 * @since   2022.03.25
 * @version 1.0
 * @see PrProductSeriesController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.25        최초작성
 */
@Controller
@RequestMapping("/pr/prd-mng")
public class PrProductSeriesController {
    private final Logger log = LoggerFactory.getLogger(PrProductSeriesController.class);
        
    @Autowired
    private PrProductSeriesService productSeriesService;

    /**
     * <pre>
     * 1. MethodName : selectProductSeriesList
     * 2. ClassName  : PrProductSeriesController.java
     * 3. Comment    : 상품그룹 목록
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/select-product-series-list.do")
    public NexacroResult selectProductSeriesList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
        NexacroResult result = new NexacroResult();
        
        try {
            int totalCount = productSeriesService.selectProductSeriesCount(searchMap, new OdOrderComm(session));
            List<Map<String,Object>> list = productSeriesService.selectProductSeriesList(searchMap, new OdOrderComm(session));
            result.addDataSet("ds_output", list);
            result.addVariable("totalCount", totalCount);
                        
        } catch (Exception e ) {
            String message = "상품그룹 목록 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_04", "상품그룹 목록"}, e) {};
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectProductSeries
     * 2. ClassName  : PrProductSeriesController.java
     * 3. Comment    : 상품그룹 상세목록 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/select-product-series.do")
    public NexacroResult selectProductSeries(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
        NexacroResult result = new NexacroResult();
        
        try {
            List<Map<String,Object>> list1 = productSeriesService.selectProductSeriesBasis(searchMap);
            List<Map<String,Object>> list2 = null;
            
            if(list1!=null && !list1.isEmpty()) {
	            list2 = productSeriesService.selectProductSeriesDtl(searchMap);
            }
            result.addDataSet("ds_output1", list1);
            result.addDataSet("ds_output2", list2);
            
        } catch (Exception e ) {
            String message = "상품그룹 상세목록 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_08", "상품그룹 상세"}, e) {};
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectSeriesTemp
     * 2. ClassName  : PrProductSeriesController.java
     * 3. Comment    : 그룹상품추가 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/select-series-temp.do")
    public NexacroResult selectSeriesTemp(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
        NexacroResult result = new NexacroResult();
        
        try {
            List<Map<String,Object>> list = productSeriesService.selectSeriesTemp(searchMap);
            result.addDataSet("ds_output", list);
            
        } catch (Exception e ) {
            String message = "그룹상품추가 에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_07", "그룹상품추가 조회"}, e) {};
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectSeriesBssTmp
     * 2. ClassName  : PrProductSeriesController.java
     * 3. Comment    : 기준상품 중복 체크
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/select-series-bss-temp.do")
    public NexacroResult selectSeriesBssTmp(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
        NexacroResult result = new NexacroResult();
        
        try {
            int bssCnt = productSeriesService.selectSeriesBssTmp(searchMap);
            result.addVariable("bssCnt", bssCnt);
            
        } catch (Exception e ) {
            String message = "기준상품 중복 체크 에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_07", message}, e) {};
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : saveProductSeries
     * 2. ClassName  : PrProductSeriesController.java
     * 3. Comment    : 상품그룹 저장
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/save-product-series.do")
    public NexacroResult saveProductSeries(@ParamDataSet(name = "ds_detail", required = false) Map<String, Object> commandMap, @ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> listMap) throws Exception{
        NexacroResult result;
        try {
            Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
            result = productSeriesService.saveProductSeries(commandMap, listMap, admin);
        } catch ( Exception e ) {
            String message = "상품그룹 저장 에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_07", "상품그룹 저장"}, e) {};
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : callLargeExcelDownload
     * 2. ClassName  : PrProductSeriesController.java
     * 3. Comment    : 엑셀 대용량 다운로드
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.02.17
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
	@RequestMapping(value = "/call-large-excel-down.do")
	public NexacroResult callLargeExcelDown(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_outputlarge", productSeriesService.callLargeExcelDownload(searchMap, new OdOrderComm(session)));
	    }catch(Exception e) {
	    	throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_04", "대용량다운로드_시리즈" }, e);
		}
		return result;
    }
}
