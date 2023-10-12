package com.ssp.bo.ba.controller;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.ba.service.BoBaBatSvrService;
import com.ssp.core.ba.service.CoreBaBatSvrService;
import com.ssp.core.ba.vo.BaBatSvrVo;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/ba/bat-adm")
public class BoBaBatSvrController {

	@Autowired
	private BoBaBatSvrService boBaBatSvrService;
	
	@Autowired
	private CoreBaBatSvrService coreBaBatSvrService;
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBaBatSvrList
	 * 2. ClassName : BoBaBatSvrController
	 * 3. Comment : 배치서버 목록
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-15
	 * </pre>
	 */
	@RequestMapping(value = "/bat-svr-list.do")
	public NexacroResult inqBatSvrList(@ParamDataSet(name = "ds_search", required = false) BaBatSvrVo baBatSvrVo) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 목록
			List<BaBatSvrVo> selectBaBatSvrList = coreBaBatSvrService.inqBatSvrList(baBatSvrVo);
			
			ret.addDataSet("ds_list", selectBaBatSvrList);
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_13", "배치서버 목록" }, e);
			}
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBaBatSvrList
	 * 2. ClassName : BoBaBatSvrController
	 * 3. Comment : 배치서버 목록 저장
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-30
	 * </pre>
	 */
	@RequestMapping(value = "/save-bat-svr-list.do")
	public NexacroResult saveBatSvrList(@ParamDataSet(name = "ds_bat_svr_list", required = false) List<BaBatSvrVo> baBatSvrVoList) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 목록
			List<BaBatSvrVo> selectBaBatSvrList = boBaBatSvrService.saveBatSvrStatList(baBatSvrVoList);
			
			ret.addDataSet("ds_output", selectBaBatSvrList);
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_13", "배치서버 목록" }, e);
			}
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : batSvrBatSvrUpdt
	 * 2. ClassName : BoBaBatPgmController
	 * 3. Comment : 배치서버 배치서버목록(static) 갱신
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-03-07
	 * </pre>
	 */
	@RequestMapping(value = "/batSvr-bat-svr-updt.do")
	public NexacroResult batSvrBatPgmUpdt(@ParamDataSet(name = "ds_bat_svr", required = false) BaBatSvrVo baBatSvrVo) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치서버 배치프로그램목록(static) 갱신
			ret.addDataSet("ds_output", boBaBatSvrService.batSvrBatSvrUpdt(baBatSvrVo));
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_CO_18", "배치서버 배치서버목록(static) 갱신" }, e);
			}
		}
	}
}
