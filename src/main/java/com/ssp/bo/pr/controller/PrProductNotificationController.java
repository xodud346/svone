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
import com.ssp.bo.pr.service.PrManufacturerService;
import com.ssp.bo.pr.service.PrProductNotificationService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.od.service.OdOrderCommService;
import com.ssp.core.pr.service.PrCoreService;

/**
 * <pre>
 * @title  상품알림관리
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  김명기
 * @since   2023.03.10
 * @version 1.0
 * @see PrProductNotificationController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2023.03.10    김명기        최초작성
 */
@Controller
@RequestMapping("/pr/notc-mng")
public class PrProductNotificationController {

    private Logger logger = LoggerFactory.getLogger(PrManufacturerController.class);

    @Autowired
	protected SspPropertyService propertiesService;
    
    @Autowired
    private PrProductNotificationService prProductNotificationService;
    
    @Autowired
    private PrCoreService prCoreService;
    
    @Autowired
    private OdOrderCommService svcComm;
    
    /**
     * <pre>
     * 1. MethodName : selectNotificationList
     * 2. ClassName  : PrProductNotificationController
     * 3. Comment    : 상품알림목록 조회
     * 4. 작성자       : 김명기
     * 5. 작성일       : 2023.03.10
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/select-notification-list.do")
    public NexacroResult selectNotificationList(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
        	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();	
    		searchMap.put("CO_CD", admin==null?propertiesService.getString("ssp.cocd"):admin.get("CO_CD"));
            result.addVariable("notificationTotalCount", prProductNotificationService.selectNotificationCount(searchMap, new OdOrderComm(session)));
            result.addDataSet("notificationList", prProductNotificationService.selectNotificationList(searchMap, new OdOrderComm(session)));
            
        } catch (Exception e) {
            logger.error("상품알림목록 조회 실패");
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_25", "상품알림목록 조회 실패" }, e);
        }
        return result;
    }
    
    /**
     * <pre>
     * 1. MethodName : deleteNotification
     * 2. ClassName  : PrProductNotificationController
     * 3. Comment    : 상품알림목록 알림제외
     * 4. 작성자       : 김명기
     * 5. 작성일       : 2023.03.14
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping(value = "/delete-notification.do")
    public NexacroResult deleteNotification(@ParamDataSet(name = "ds_deleteRow", required = false) List<Map<String, Object>> dataList, HttpSession session) throws Exception {
        NexacroResult result = new NexacroResult();
        try {
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			
        	if(admin!=null && !admin.isEmpty()) {
            }else {
                throw new Exception("세션정보 없음.");
            }
        	
        	for(Map<String, Object> data : dataList) {
        		
        		data.put("NOTC_STATS_YN", "D");
        		data.put("UPDPSN_ID", admin.get("OPRTR_ID"));
        		
        		data = svcComm.changeToCamel(data);
        		
        		prCoreService.updateProductNotice(data);
			}
        	
        } catch (Exception e) {
            logger.error("상품알림해제 실패 > "+e.getMessage());
            throw new LoggingException(new String[] { "PR", "BO", "SSP_BO_PA_25", "상품알림해제 실패 > "+e.getMessage() }, e);
        }
        return result;
    }
         
}
