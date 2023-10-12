package com.ssp.bo.pc.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.pc.service.PcPrdPrcService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.od.utils.OU;

/**
 * <pre>
 * @title  계획매익률 컨트롤러
 * @package com.ssp.bo.pc.controller
 * <pre>
 * @author  scvgo17
 * @since   2022. 01. 18.
 * @version 1.0
 * @see PcPrdPrcController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/pc/prd-prc")
public class PcPrdPrcController {
	private final Logger log = LoggerFactory.getLogger(PcPrdPrcController.class);

	@Autowired
    private PcPrdPrcService pcPrdPrcService;


	@RequestMapping(value = "/update-bss-salsprc-calc.do")
	public NexacroResult updateBssSalsprcCalc(@ParamDataSet(name = "ds_save", required = false) Map<String,Object> updateMap,
											HttpServletRequest request, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		List<Map<String, Object>> listReturn = OU.newList();
        Map<String, Object> returnMap = OU.newMap();

		try {
		    updateMap = CommonUtil.toCamelCaseMap(updateMap);
System.out.println(updateMap);
		    returnMap = pcPrdPrcService.updateBssSalsprcCalc(updateMap, new OdOrderComm(session));
		    listReturn.add(returnMap);
            result.addDataSet("ds_output1", listReturn);

		} catch (Exception e) {
            String message = "Naming 조회 에러";
            log.error(message, e);
            throw new LoggingException(new String[] { "PC", "BO", "updateBssSalsprcCalc", "저장 요류" }, e);
        }
		return result;
	}

    //getList
  	@RequestMapping(value = "/prc-history-list.do")
  	public NexacroResult prcHistoryList(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

  		NexacroResult result = new NexacroResult();

  		try {

  		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
  		searchMap.put("sesId", session.getId());
  		searchMap = CommonUtil.toCamelCaseMap(searchMap);
  		if(admin != null) {
  			searchMap.put("coCd", admin.get("CO_CD"));
  		}
  		result = pcPrdPrcService.prcHistoryList(searchMap);

  		} catch (Exception e ) {
  			log.error("가격변동이력 조회 실패");
  			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CA_02", "가격변동이력 조회 실패"}, e);
  		}

  		return  result;
  	}

}
