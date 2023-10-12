package com.ssp.bo.pr.controller;

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
import com.ssp.bo.pr.service.PrProductAddService;
import com.ssp.bo.pr.service.PrRegistProductService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title  SSP상품등록
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  조지훈
 * @since   2022.03.14
 * @version 1.0
 * @see PrProductAddController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.14    조지훈        최초작성
 */
@Controller
@RequestMapping("/pr/prd-add")
public class PrProductAddController {

	private Logger logger = LoggerFactory.getLogger(PrProductAddController.class);
	
	@Autowired
	private PrProductAddService prProductAddService;
	
	@Autowired
	private PrRegistProductService prRegistProductService;
	
	@Autowired
	protected SspPropertyService propertiesService;
	
	/**
     * <pre>
     * 1. MethodName : selectProductAddList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 상품등록 -> SSP상품추가
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.22
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-product-add-list.do")
    public NexacroResult selectProductAddList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
    		searchMap.put("CO_CD", admin==null?propertiesService.getString("ssp.cocd"):admin.get("CO_CD"));
        	searchMap.put("SES_ID", new OdOrderComm(session).getSessionId());
            result.addVariable("totalCount", prProductAddService.selectProductAddCount(searchMap));
            result.addDataSet("productAddList", prProductAddService.selectProductAddList(searchMap));
        } catch (Exception e) {
            logger.error("SSP상품추가목록 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_11", "SSP상품추가목록 조회 실패" }, e);
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductAddBasicInfo
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 상품등록 -> SSP상품추가상세 -> 기본정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.29
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-product-add-basic-info.do")
    public NexacroResult selectProductAddBasicInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("basicInfo", prProductAddService.selectProductAddBasicInfo(searchMap));
        } catch (Exception e) {
            logger.error("SSP상품추가목록 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_13", "SSP상품추가목록 조회 실패" }, e);
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : insertProductRegProcAccept
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 상품등록 -> SSP상품추가상세 -> 접수처리
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.11
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/insert-product-reg-proc-accept.do")
    public NexacroResult insertProductRegProcAccept(@ParamDataSet(name = "ds_insertData", required = false) List<Map<String, Object>> dataList) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	if(admin!=null && !admin.isEmpty()) {
            }else {
                throw new Exception("세션정보 없음.");
            }
        	for(Map<String, Object> dataMap : dataList) {
        		dataMap.put("SESSION_OPRTR_ID", admin.get("OPRTR_ID"));
        		prProductAddService.insertRegProcPrdInfo(dataMap);
        	}
        } catch (Exception e) {
            logger.error("SSP상품추가 접수 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_13", "SSP상품추가 접수  실패" }, e);
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : insertProductRegProcAccept
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 상품등록 -> SSP상품추가상세 -> 등록처리
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.11
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/insert-product-reg-proc.do")
    public NexacroResult insertProductRegProc(@ParamDataSet(name = "ds_basicInsert", required = false) Map<String, Object> basicInfo,
    		@ParamDataSet(name = "ds_attrInsert", required = false) List<Map<String, Object>> attrList,
    		@ParamDataSet(name = "ds_notiInsert", required = false) List<Map<String, Object>> notiList,
    		HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	Map<String, Object> param = new HashMap<>();
			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();
        	if(userInfo!=null && !userInfo.isEmpty()) {
            	param.put("SESSION_OPRTR_ID", userInfo.get("OPRTR_ID"));
            	param.put("CO_CD", userInfo.get("CO_CD"));
            }else {
                throw new Exception("세션정보 없음.");
            }
        	param.put("basicInfo", basicInfo);	//상품기본
        	param.put("attrList", attrList);	//속성
        	param.put("notiList", notiList);	//고시
    		prProductAddService.insertProductRegProc(param);
        } catch (Exception e) {
            logger.error("SSP상품추가접수 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_13", "SSP상품추가접수  실패" }, e);
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectMroCategoryAttrInfo
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 상품등록 -> SSP상품추가상세 -> SSP 카테고리, 속성 목록
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.30
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-reg-proc-ssp-attr-list.do")
    public NexacroResult selectSspAttrInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("attrInfo", prProductAddService.selectSspAttrList(searchMap));

        } catch (Exception e) {
            logger.error("SSP 카테고리, 속성정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_13", "SSP 카테고리, 속성정보 조회 실패" }, e);
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectMroCategoryAttrInfo
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 상품등록 -> SSP상품추가상세 -> SSP 추가정보
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.03.30
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-reg-proc-ssp-add-info.do")
    public NexacroResult selectSspAddInfo(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	String contextRealPath = propertiesService.getString("file.path.root");
        	searchMap.put("contextRealPath", contextRealPath);
        	result.addVariable("contextRealPath", contextRealPath);
            result.addDataSet("sspAddInfo", prProductAddService.selectSspAddInfo(searchMap));
            result.addDataSet("bgList", prRegistProductService.selectBgList(searchMap));
        } catch (Exception e) {
            logger.error("SSP 카테고리, 속성정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_13", "SSP 카테고리, 속성정보 조회 실패" }, e);
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductINoticeList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 상품등록 -> SSP상품추가상세 -> 고시품목
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.07
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-reg-proc-product-notice-list.do")
    public NexacroResult selectProductINoticeList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("noticeList", prProductAddService.selectProductNoticeList(searchMap));
        } catch (Exception e) {
            logger.error("상품고시정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_13", "상품고시정보 조회 실패" }, e);
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductINoticeList
     * 2. ClassName  : PrProductAddController
     * 3. Comment    : 상품등록 -> SSP상품추가상세 -> 이미지목록(기타컬럼1,2번 활용)
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.04.07
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-reg-proc-product-image-list.do")
    public NexacroResult selectRegProcProductImageList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	String contextRealPath = propertiesService.getString("file.path.root");
        	searchMap.put("contextRealPath", contextRealPath);
        	result.addVariable("contextRealPath", contextRealPath);
            result.addDataSet("imageList", prProductAddService.selectRegProcProductImageList(searchMap));
        } catch (Exception e) {
            logger.error("이미지정보 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_13", "이미지정보 조회 실패" }, e);
        }
        return result;
    }
    
}
