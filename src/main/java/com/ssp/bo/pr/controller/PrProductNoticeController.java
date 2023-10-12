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
import com.ssp.bo.pr.service.PrProductNoticeService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;

/**
 * <pre>
 * @title  SSP 상품고시정보 컨트롤러
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  조지훈
 * @since   2022.02.22
 * @version 1.0
 * @see PrProductNoticeController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.02.22    조지훈        최초작성
 */
@Controller
@RequestMapping("/pr/prd-ntc")
public class PrProductNoticeController {
    
    private Logger logger = LoggerFactory.getLogger(PrProductNoticeController.class);
    
    @Autowired
    private PrProductNoticeService productNoticeService;

    @Autowired
	protected SspPropertyService propertiesService;
    
    /**
     * <pre>
     * 1. MethodName : selectProductNoticeList
     * 2. ClassName  : PrProductNoticeController
     * 3. Comment    : 품목고시 목록조회
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.02.22
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-product-notice-list.do")
    public NexacroResult selectProductNoticeList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
    		searchMap.put("CO_CD", admin==null?propertiesService.getString("ssp.cocd"):admin.get("CO_CD"));
        	result.addDataSet("noticeList", productNoticeService.selectProductNoticeList(searchMap));
        } catch (Exception e) {
            logger.error("품목고시 목록조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_MF_28", "품목고시 목록조회" }, e);
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : selectProductNoticeDetail
     * 2. ClassName  : PrProductNoticeController
     * 3. Comment    : 품목 상세항목 조회
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.02.22
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-product-notice-detail.do")
    public NexacroResult selectProductNoticeDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
            result.addDataSet("noticeDetail", productNoticeService.selectProductNoticeDetail(searchMap));
        } catch (Exception e) {
            logger.error("품목 상세항목 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_MF_28", "품목 상세항목 조회" }, e);
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : saveProductNotice
     * 2. ClassName  : PrProductNoticeController
     * 3. Comment    : 품목 및 상세항목 저장
     * 4. 작성자       : 조지훈
     * 5. 작성일       : 2022.02.22
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/save-product-notice.do")
    public NexacroResult saveProductNotice(@ParamDataSet(name = "ds_noticeInfo", required = false) Map<String, Object> noticeInfo,
            @ParamDataSet(name = "ds_changeRow", required = false) List<Map<String, Object>> changeList,
            @ParamDataSet(name = "ds_deleteRow", required = false) List<Map<String, Object>> deleteList,
            HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	Map<String, Object> param = new HashMap<>();
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
        	if(admin!=null && !admin.isEmpty()) {
        		param.put("SESSION_OPRTR_ID", admin.get("OPRTR_ID"));
            }else {
                throw new Exception("세션정보 없음.");
            }
            param.put("noticeInfo", noticeInfo);
            param.put("changeList", changeList);
            param.put("deleteList", deleteList);
            productNoticeService.saveProductNotice(param);
        } catch (Exception e) {
            logger.error("품목 및 상세항목 저장 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_MF_28", "품목 및 상세항목 저장" }, e);
        }
        return result;
    }
    
}
