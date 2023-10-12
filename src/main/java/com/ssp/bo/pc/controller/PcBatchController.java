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
import com.ssp.bo.pc.service.PcBatchService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.LoggingException;

@Controller
@RequestMapping(value = "/pc/pc-batch")
public class PcBatchController {
	private final Logger log = LoggerFactory.getLogger(PcBatchController.class);
	
	@Autowired
	private PcBatchService pcBatchService;

	@RequestMapping(value = "/prc.do")
	public NexacroResult Prc(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {

		searchMap = CommonUtil.toCamelCaseMap(searchMap);
		result = pcBatchService.PrcBatch(searchMap);

		} catch (Exception e ) {
			log.error("가격배치 실패");
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CA_PRC_BATCH", "가격배치 실패"}, e);
		}

		return  result;
	}
	
	
	@RequestMapping(value = "/dp.do")
	public NexacroResult Dp(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

		NexacroResult result = new NexacroResult();

		try {

		searchMap = CommonUtil.toCamelCaseMap(searchMap);
		result = pcBatchService.DpBatch(searchMap);

		} catch (Exception e ) {
			log.error("진열배치 실패");
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CA_DP_BATCH", "진열배치 실패"}, e);
		}

		return  result;
	}
	
	@RequestMapping(value = "/day.do")
	public NexacroResult Day(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{

		NexacroResult result = new NexacroResult();

		try {

		searchMap = CommonUtil.toCamelCaseMap(searchMap);
		result = pcBatchService.DayBatch(searchMap);

		} catch (Exception e ) {
			log.error("일배치 실패");
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CA_DAY_BATCH", "일배치 실패"}, e);
		}

		return  result;
	}
}
