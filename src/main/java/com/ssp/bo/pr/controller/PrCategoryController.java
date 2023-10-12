package com.ssp.bo.pr.controller;

import java.util.ArrayList;
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
import com.ssp.bo.pr.service.PrCategoryService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
       
/**
 * <pre>
 * 
 * @title SSP카테고리 컨트롤러
 * @package com.ssp.bo.pr.controller
 *<pre>
 * @author 이원준
 * @since 2022.02.17
 * @version 1.0
 * @see PrCategoryController 
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.01.18        최초작성
 */
@Controller
@RequestMapping("/pr/ctg-mng")
public class PrCategoryController {
    private final Logger log = LoggerFactory.getLogger(PrCategoryController.class);

    @Autowired
    private PrCategoryService categoryService;

    @Autowired
    protected SspPropertyService propertiesService;
    
    /**
     * <pre>
     * 1. MethodName : selectCategoryList
     * 2. ClassName  : PrCategoryController.java
     * 3. Comment    : SSP카테고리 관리
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.02
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/select-categoryList.do")
    public NexacroResult selectCategoryList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            List<Map<String, Object>> list1 = categoryService.selectCategoryList(searchMap);
            List<Map<String, Object>> list2 = categoryService.selectSubCategoryList(searchMap);
            result.addDataSet("ds_output1", list1);
            result.addDataSet("ds_output2", list2);

        } catch (Exception e) {
            String message = "SSP카테고리관리 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_14", "SSP카테고리관리 조회" }, e) {
            };
        }
        return result;
    }

    /**
     * <pre>
     * 1. MethodName : selectCategory
     * 2. ClassName  : PrCategoryController.java
     * 3. Comment    : SSP카테고리관리 상세조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.02
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/select-category.do")
    public NexacroResult selectCategory(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            String contextRealPath = propertiesService.getString("file.path.root");
            searchMap.put("contextRealPath", contextRealPath);
            
            List<Map<String, Object>> list1 = categoryService.selectCategory(searchMap);
            List<Map<String, Object>> list2 = categoryService.selectSubCategoryList(searchMap);
            List<Map<String, Object>> list3 = new ArrayList<>();
            if(list1.size() > 0){
                if(list1.get(0).get("DISP_PRD_FILE_ATTC_ID") != null) {
                    searchMap.put("DOC_REG_ID",list1.get(0).get("DISP_PRD_FILE_ATTC_ID").toString());
                    list3 = categoryService.selectAttcFileDtlsInq(searchMap);
                }
            }
                
            result.addDataSet("ds_output1", list1);
            result.addDataSet("ds_output2", list2);
            result.addDataSet("ds_output3",list3);
            result.addVariable("contextRealPath", contextRealPath);

        } catch (Exception e) {
            String message = "SSP카테고리관리 상세조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_14", "SSP카테고리관리 상세조회" }, e) {
            };
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : saveCategory
     * 2. ClassName  : PrCategoryController.java
     * 3. Comment    : SSP카테고리 생성 저장
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.02
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/save-category.do")
    public NexacroResult saveCategory(@ParamDataSet(name = "ds_detail", required = false) Map<String, Object> commandMap,
    		@ParamDataSet(name = "ds_fileSingle", required = false) List<Map<String, Object>> fileMap) throws Exception{
        NexacroResult result = new NexacroResult();
        try {
            int cnt = categoryService.selectPrdClsfNmCnt(commandMap);
            String prdClcd = null;
            if(cnt > 0) {
                result.addVariable("prdNmCnt", cnt);
                return result;
            }else{
                Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
                prdClcd = categoryService.selectPrdClcdSeq(commandMap);
                
                if(prdClcd != null) {
	                commandMap.put("CO_CD", admin.get("CO_CD"));
	                commandMap.put("USER_ID", admin.get("OPRTR_ID"));
	                commandMap.put("PRD_CLCD", prdClcd);
	                String contextRealPath = propertiesService.getString("file.path.root");
	                categoryService.saveCategory(commandMap, fileMap, contextRealPath);
	                
	                result.addVariable("prdClcd", prdClcd);
                }
            }
        } catch ( Exception e ) {
            String message = "SSP카테고리 생성 저장에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_15", "SSP카테고리 생성저장"}, e) {};
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : saveCategoryInfo
     * 2. ClassName  : PrCategoryController.java
     * 3. Comment    : SSP카테고리 상세 저장
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.02
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/save-category-info.do")
    public NexacroResult saveCategoryInfo(@ParamDataSet(name = "ds_detail", required = false) List<Map<String, Object>> commandMap, 
            @ParamDataSet(name = "ds_list", required = false) List<Map<String, Object>> mainList,
            @ParamDataSet(name = "ds_subList", required = false) List<Map<String, Object>> subList,
            @ParamDataSet(name = "ds_fileSingle", required = false) List<Map<String, Object>> fileMap
            ) throws Exception{
        NexacroResult result = new NexacroResult();
        try {
            Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
            String contextRealPath = propertiesService.getString("file.path.root");
            result = categoryService.saveCategoryInfo(commandMap, mainList, subList, admin, fileMap, contextRealPath);
            
        } catch ( Exception e ) {
            String message = "SSP카테고리 상세 저장에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_14", "SSP카테고리 상세저장"}, e) {};
        }
        return result;
    }
    

    /**
     * <pre>
     * 1. MethodName : selectPrdAttrList
     * 2. ClassName  : PrCategoryController.java
     * 3. Comment    : 속성명 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.02
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/select-prd-attr-list.do")
    public NexacroResult selectPrdAttrList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();

        try {
            List<Map<String, Object>> list = categoryService.selectPrdAttrList(searchMap);
            result.addDataSet("ds_output", list);

        } catch (Exception e) {
            String message = "속성명 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_16", "상품군 조회" }, e) {
            };
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectClsfAttrMappList
     * 2. ClassName  : PrCategoryController.java
     * 3. Comment    : 상품군 사용SSP속성 조회
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.02
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/select-clsf-attr-mapp-list.do")
    public NexacroResult selectClsfAttrMappList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        
        try {
            List<Map<String, Object>> list = categoryService.selectClsfAttrMappList(searchMap);
            result.addDataSet("ds_output", list);
            
        } catch (Exception e) {
            String message = "상품군 사용 SSP속성 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_16", "상품군 사용 SSP속성 조회" }, e) {};
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : saveClsfAttrMapp
     * 2. ClassName  : PrCategoryController.java
     * 3. Comment    : 상품군속성관리 저장
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.02
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
    @RequestMapping(value = "/save-clsf-attr-mapp.do")
    public NexacroResult saveClsfAttrMapp(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> commandMap) throws Exception{
        NexacroResult result = new NexacroResult();
        try {
            Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
            categoryService.saveClsfAttrMapp(commandMap, admin);
            
        } catch ( Exception e ) {
            String message = "상품군 사용 SSP속성 저장에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_16", "상품군 사용 SSP속성 저장"}, e) {};
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : callLargeExcelDownload
     * 2. ClassName  : PrCategoryController.java
     * 3. Comment    : 엑셀 대용량 다운로드
     * 4. 작성자       : 이원준
     * 5. 작성일       : 2022.03.02
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception 
     */
	@RequestMapping(value = "/call-large-excel-download.do")
	public NexacroResult callLargeExcelDownload(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_outputlarge", categoryService.callLargeExcelDownload(searchMap, new OdOrderComm(session)));
	    }catch(Exception e) {
	    	throw new LoggingException(new String[] { "PR", "BO", "SSP_XL_PR_02", "대용량다운로드_SSP카테고리" }, e);
		}
		return result;
    }
	
	
	
	
	
	/**
	 * <pre>
	 * 1. MethodName : selectProductDispInfo
	 * 2. ClassName  : PrProductDispController
	 * 3. Comment    : SSP상품 관리 조회
	 * 4. 작성자       : 조지훈
	 * 5. 작성일       : 2022.06.16
	 * </pre>
     * @return NexacroResult
     */
	@RequestMapping(value = "/select-ssp-prd-nm-info.do")
    public NexacroResult selectProductDispInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("ds_frtMdfr", categoryService.selectSspPrdNmFrtMdfrList(searchMap));
            result.addDataSet("ds_rearMdfr", categoryService.selectSspPrdNmRearMdfrList(searchMap));
            result.addDataSet("ds_attr", categoryService.selectSspPrdNmAttrList(searchMap));
            result.addDataSet("ds_addInfo", categoryService.selectSspPrdNmAddInfo(searchMap));
            result.addDataSet("ds_mng", categoryService.selectSspPrdNmMngList(searchMap));
            result.addDataSet("ds_clsfAttr", categoryService.selectClsfAttrList(searchMap));
        } catch (Exception e) {
            log.error("SSP상품명 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_NA_28", "SSP상품명 조회 실패" }, e);
        }
        return result;
    }
	
	@RequestMapping(value = "/save-ssp-prd-nm-info.do")
    public NexacroResult saveSspPrdNmInfo(@ParamDataSet(name = "ds_frtMdfr", required = false) List<Map<String, Object>> ds_frtMdfr,
    		@ParamDataSet(name = "ds_rearMdfr", required = false) List<Map<String, Object>> ds_rearMdfr,
    		@ParamDataSet(name = "ds_attr", required = false) List<Map<String, Object>> ds_attr,
    		@ParamDataSet(name = "ds_addInfo", required = false) List<Map<String, Object>> ds_addInfo,
    		@ParamDataSet(name = "ds_mng", required = false) List<Map<String, Object>> ds_mng) throws Exception{
        NexacroResult result = new NexacroResult();
        try {
            Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
            categoryService.saveSspPrdNmInfo(ds_frtMdfr, ds_rearMdfr, ds_attr, ds_addInfo, ds_mng, admin);
            
        } catch ( Exception e ) {
            String message = "상품군 사용 SSP속성 저장에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_16", "상품군 사용 SSP속성 저장"}, e);
        }
        return result;
    }
	
	@RequestMapping(value = "/select-last-batch-time.do")
    public NexacroResult selectLastBatchTime(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("ds_last", categoryService.selectLastBatchTime(searchMap));
        } catch (Exception e) {
            log.error("SSP상품명 배치 마지막시간 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_NA_28", "SSP상품명 배치 마지막시간 조회 실패" }, e);
        }
        return result;
    }




    /**
     * <pre>
     * 1. MethodName : deleteCategory
     * 2. ClassName  : PrCategoryController.java
     * 3. Comment    : SSP카테고리 삭제
     * 4. 작성자       : 김영남
     * 5. 작성일       : 2023.05.15
     * </pre>
     *
     * @return NexacroResult
     * @throws Exception
     */
    @RequestMapping(value = "/delete-category.do")
    public NexacroResult deleteCategory(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> commandMap) throws Exception{
        NexacroResult result = new NexacroResult();
        try {
            Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
                categoryService.deleteCategory(commandMap, admin);
        } catch ( Exception e ) {
            String message = "SSP카테고리 삭제 에러";
            log.error(message, e);
            throw new LoggingException(new String[]{"PR", "BO", "SSP_BO_PA_15", "SSP카테고리 삭제"}, e) {};
        }
        return result;
    }

}
