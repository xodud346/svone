package com.ssp.bo.ba.controller;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.ba.service.BoBaBatPgmChgHstService;
import com.ssp.core.ba.vo.BaBatPgmChgHstVo;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/ba/bat-adm")
public class BoBaBatPgmChgHstController {

	@Autowired
	private BoBaBatPgmChgHstService boBaBatPgmChgHstService;
	
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
	@RequestMapping(value = "/bat-pgm-chg-hst-list.do")
	public NexacroResult inqBatPgmChgHstList(@ParamDataSet(name = "ds_search", required = false) BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 변경이력 카운트
			int totalCount = boBaBatPgmChgHstService.inqBatPgmChgHstListCount(baBatPgmChgHstVo);
			// 배치프로그램 변경이력 리스트
			List<BaBatPgmChgHstVo> inqBatPgmChgHstList = boBaBatPgmChgHstService.inqBatPgmChgHstList(baBatPgmChgHstVo);
			
			ret.addDataSet("ds_list", inqBatPgmChgHstList);
			ret.addVariable("totalCount", totalCount);
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_CO_17", "배치프로그램 변경이력 조회" }, e);
			}
		}
	}
}
