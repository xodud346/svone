package com.ssp.bo.pp.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.pp.service.PpcprtcpInqPopupService;
import com.ssp.bo.pr.controller.PrManufacturerController;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  협력사 ID 단일 조회 공통팝업컨트롤러
 * @package com.ssp.bo.pr.controller
 * <pre>
 * @author  김진섭
 * @since   2022.03.17
 * @version 1.0
 * @see PrManufacturerController
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 */
@Controller
@RequestMapping("/pp/ppcprtcpInqPopup")
public class PpcprtcpInqPopupController {
	
	private Logger logger = LoggerFactory.getLogger(PpcprtcpInqPopupController.class);
	
	//@Autowired
	//private PrManufacturerService manufacturerService;
	
	@Autowired
	private PpcprtcpInqPopupService ppcprtcpInqPopupService;
	
	/**
     * <pre>
     * 1. MethodName : selectManufacturerPopupList
     * 2. ClassName  : PpcprtcpInqPopupController
     * 3. Comment    : 협력사  팝업 조회
     * 4. 작성자       : 김진섭
     * 5. 작성일       : 2022.03.17
     * </pre>
     * @return NexacroResult
     */
	@RequestMapping("/selectPpcprtcpInqPopuplst.do")
	public NexacroResult selectPpcprtcpInqPopuplst(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception {
		
		logger.debug("#######시작_PpcprtcpInqPopupController##################################################:{}",searchMap);
		
		NexacroResult result = new NexacroResult();
        try {
        	result.addVariable("totalCount", ppcprtcpInqPopupService.selectManufacturerCount(searchMap));
            result.addDataSet("manufacturerList", ppcprtcpInqPopupService.selectManufacturerList(searchMap));
        } catch (Exception e) {
            logger.error("협력사목록 조회 실패");
            throw new LoggingException(new String[] { "PP_POP", "BO", "SSP_BO_PP_41", "협력사 팝업 조회 실패" }, e);
        }
        
        logger.debug("#######종료_PpcprtcpInqPopupController##################################################");
        
        return result;
	}
	
}
