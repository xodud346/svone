package com.ssp.bo.pc.controller;

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
import com.ssp.bo.pc.service.PcPrdProcStbService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;

/**
 * <pre>
 * @title
 * @package com.ssp.bo.pc.controller
 * <pre>
 * @author  scvgo17
 * @since   2022. 01. 18.
 * @version 1.0
 * @see PcPrdProcStbController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/pc/prd-Proc-stb")
public class PcPrdProcStbController {
	private final Logger log = LoggerFactory.getLogger(PcPrdProcStbController.class);

	@Autowired
    private PcPrdProcStbService pcPrdProcStbService;

	@RequestMapping(value = "/select-pub-prd-proc-stb-list.do")
	public NexacroResult selectPcPubPrdProcStbList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap
													, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			if(admin != null) {
				searchMap.put("coCd", admin.get("CO_CD"));
			}
			searchMap.put("sesId", session.getId());
			result = pcPrdProcStbService.selectPcPubPrdProcStbList(searchMap);

		} catch (Exception e ) {
			String message = "공용상품처리대기 목록";
			log.error(message, e);
			throw new LoggingException(new String[]{"CO", "BO", "selectPcPubPrdProcStbList", message}, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/insert-pub-prd-proc-stb.do")
	public NexacroResult insertPcPubPrdProcStb(@ParamDataSet(name = "ds_updateList", required = false) List<Map<String,Object>> updateList
												, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		
		try {
			
			result = pcPrdProcStbService.insertPcPrdProcStb(updateList, new OdOrderComm(session));
						
		} catch (MessageException e ) {
			if( e.getCode() == -100 ) {
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            } else {
            	String message = "공용상품 기준판매가 처리";
    			log.error(message, e);
    			throw new LoggingException(new String[]{"CO", "BO", "insertPcPubPrdProcStb", message}, e) {};
            }
		}
		return result;
	}

}
