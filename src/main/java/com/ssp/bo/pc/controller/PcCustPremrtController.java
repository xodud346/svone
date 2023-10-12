package com.ssp.bo.pc.controller;

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
import com.ssp.bo.pc.service.PcCustPremrtService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  
 * @package com.ssp.bo.pc.controller
 * <pre>
 * @author  scvgo17
 * @since   2022. 01. 18.
 * @version 1.0
 * @see PcCustPremrtController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/pc/custPremrt")
public class PcCustPremrtController {
	private final Logger log = LoggerFactory.getLogger(PcCustPremrtController.class);
		
	@Autowired
    private PcCustPremrtService custPremrtService;

	@RequestMapping(value = "/selectCustPremrtList.do")
	public NexacroResult selectCustPremrtList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			if(searchMap != null){
				searchMap = CommonUtil.toCamelCaseMap(searchMap);
				searchMap.put("useYn", "");
				result = custPremrtService.selectCustPremrtList(searchMap, new OdOrderComm(session));
				
				searchMap.put("useYn", "Y");
				result.addDataSet("ds_detail", custPremrtService.selectCustPremrtDetail(searchMap, new OdOrderComm(session)));
			}
			
		} catch (Exception e ) {
			String message = "일반고객할증율 조회 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectCustPremrtList", "일반고객할증율 조회"}, e) {};
		}
		return result;
	}
	
	@RequestMapping("/insertCustPremrt")
    public NexacroResult insertCustPremrt(@ParamDataSet(name = "ds_insert", required = false) Map<String, Object> insertMap, HttpSession session) throws Exception {
        NexacroResult result;
        try {
        	
        	insertMap = CommonUtil.toCamelCaseMap(insertMap);
        	
            result = custPremrtService.insertCustPremrt(insertMap, new OdOrderComm(session));
            
        } catch ( Exception ne ) {
            String message = "일반고객할증율 관리 저장 에러";
            log.error(message);
            throw new LoggingException(new String[]{"CO", "BO", "insertCustPremrt", message}, ne);
        }
        return result;
    }
	
}
