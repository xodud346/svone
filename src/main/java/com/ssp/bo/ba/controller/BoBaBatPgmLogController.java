package com.ssp.bo.ba.controller;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.ba.service.BoBaBatPgmLogService;
import com.ssp.core.ba.vo.BaBatPgmLogVo;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/ba/bat-adm")
public class BoBaBatPgmLogController {

	@Autowired
	private BoBaBatPgmLogService boBaBatPgmLogService;
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : inqBatPgmLogList
	 * 2. ClassName : BoBaBatPgmController
	 * 3. Comment : 배치프로그램 실행이력 조회
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-28
	 * </pre>
	 */
	@RequestMapping(value = "/bat-pgm-log-list.do")
	public NexacroResult inqBatPgmLogList(@ParamDataSet(name = "ds_search", required = false) BaBatPgmLogVo baBatPgmLogVo) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 카운트
			int totalCount = boBaBatPgmLogService.inqBatPgmLogListCount(baBatPgmLogVo);
			// 배치프로그램 목록
			List<BaBatPgmLogVo> inqBatPgmLogList = boBaBatPgmLogService.inqBatPgmLogList(baBatPgmLogVo);
			
			ret.addDataSet("ds_list", inqBatPgmLogList);
			ret.addVariable("totalCount", totalCount);
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_CO_02", "배치프로그램 실행이력 조회" }, e);
			}
		}
	}
}
