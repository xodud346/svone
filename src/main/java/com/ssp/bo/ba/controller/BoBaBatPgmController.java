package com.ssp.bo.ba.controller;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.ba.service.BoBaBatPgmService;
import com.ssp.bo.cc.CCUtils;
import com.ssp.core.ba.service.CoreBaBatPgmService;
import com.ssp.core.ba.vo.BaBatPgmVo;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.exception.MessageException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/ba/bat-adm")
public class BoBaBatPgmController {

	@Autowired
	private CoreBaBatPgmService coreBaBatPgmService;
	
	@Autowired
	private BoBaBatPgmService boBaBatPgmService;
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : inqBatPgmList
	 * 2. ClassName : BoBaBatPgmController
	 * 3. Comment : 배치프로그램 목록
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-15
	 * </pre>
	 */
	@RequestMapping(value = "/bat-pgm-list.do")
	public NexacroResult inqBatPgmList(@ParamDataSet(name = "ds_search", required = false) BaBatPgmVo baBatPgmVo) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 목록
			List<BaBatPgmVo> inqBatPgmList = coreBaBatPgmService.inqBatPgmList(baBatPgmVo);
			
			ret.addDataSet("ds_list", inqBatPgmList);
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_01", "배치프로그램 목록" }, e);
			}
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBatPgm
	 * 2. ClassName : BoBaBatPgmController
	 * 3. Comment : 배치프로그램 ID 중복확인
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-26
	 * </pre>
	 */
	@RequestMapping(value = "/chk-id-dup.do")
	public NexacroResult chkIdDup(@ParamDataSet(name = "ds_bat_pgm", required = false) BaBatPgmVo baBatPgmVo) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 중복된 아이디
			BaBatPgmVo selectBatPgm = boBaBatPgmService.selectBatPgm(baBatPgmVo);
			ret.addDataSet("ds_dupInfo", selectBatPgm);
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_CO_09", "배치프로그램 ID 중복확인" }, e);
			}
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : regBatPgm
	 * 2. ClassName : BoBaBatPgmController
	 * 3. Comment : 배치프로그램 등록
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-26
	 * </pre>
	 */
	@RequestMapping(value = "/reg-bat-pgm.do")
	public NexacroResult regBatPgm(@ParamDataSet(name = "ds_bat_pgm", required = false) BaBatPgmVo baBatPgmVo, HttpSession session) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 등록처리
			ret.addDataSet("ds_output", boBaBatPgmService.insertBatPgm(baBatPgmVo, new CCUtils(session)));
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_CO_07", "배치프로그램 등록" }, e);
			}
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : inqBatPgm
	 * 2. ClassName : BoBaBatPgmController
	 * 3. Comment : 배치프로그램 단건 조회
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-26
	 * </pre>
	 */
	@RequestMapping(value = "/bat-pgm.do")
	public NexacroResult inqBatPgm(@ParamDataSet(name = "ds_search", required = false) BaBatPgmVo baBatPgmVo) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 목록
			List<BaBatPgmVo> inqBatPgmList = coreBaBatPgmService.inqBatPgmSearchList(baBatPgmVo);
			
			ret.addDataSet("ds_bat_pgm", inqBatPgmList);
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_CO_08", "배치프로그램 단건 조회" }, e);
			}
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : updtBatPgm
	 * 2. ClassName : BoBaBatPgmController
	 * 3. Comment : 배치프로그램 갱신
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-28
	 * </pre>
	 */
	@RequestMapping(value = "/updt-bat-pgm.do")
	public NexacroResult updtBatPgm(@ParamDataSet(name = "ds_bat_pgm", required = false) BaBatPgmVo baBatPgmVo, HttpSession session) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 등록처리
			ret.addDataSet("ds_output", boBaBatPgmService.updateBatPgm(baBatPgmVo, new CCUtils(session)));
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_CO_10", "배치프로그램 갱신" }, e);
			}
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : batSvrBatPgmUpdt
	 * 2. ClassName : BoBaBatPgmController
	 * 3. Comment : 배치서버 배치프로그램목록(static) 갱신
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-02-10
	 * </pre>
	 */
	@RequestMapping(value = "/batSvr-bat-pgm-updt.do")
	public NexacroResult batSvrBatPgmUpdt(@ParamDataSet(name = "ds_bat_pgm", required = false) BaBatPgmVo baBatPgmVo) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치서버 배치프로그램목록(static) 갱신
			ret.addDataSet("ds_output", boBaBatPgmService.batSvrBatPgmUpdt(baBatPgmVo));
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_CO_16", "배치서버 배치프로그램목록(static) 갱신" }, e);
			}
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : dltBatPgm
	 * 2. ClassName : BoBaBatPgmController
	 * 3. Comment : 배치프로그램 삭제
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-01-05
	 * </pre>
	 */
	@RequestMapping(value = "/dlt-bat-pgm.do")
	public NexacroResult dltBatPgm(@ParamDataSet(name = "ds_bat_pgm", required = false) BaBatPgmVo baBatPgmVo) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 등록처리
			ret.addDataSet("ds_output", boBaBatPgmService.deleteBatPgm(baBatPgmVo));
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_CO_11", "배치프로그램 삭제" }, e);
			}
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : batPgmTimeCalc
	 * 2. ClassName : BoBaBatPgmController
	 * 3. Comment : 배치프로그램 예약일정에 따른 시간 계산
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-01-04
	 * </pre>
	 */
	@RequestMapping(value = "/bat-pgm-time-calc.do")
	public NexacroResult batPgmTimeCalc(@ParamDataSet(name = "ds_bat_pgm", required = false) BaBatPgmVo baBatPgmVo) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 등록처리
			ret.addDataSet("ds_output", coreBaBatPgmService.batPgmTimeCalc(baBatPgmVo));
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_CO_10", "배치프로그램 등록" }, e);
			}
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : runBatPgm
	 * 2. ClassName : BoBaBatPgmController
	 * 3. Comment : 배치프로그램 실행
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-02-13
	 * </pre>
	 */
	@RequestMapping(value = "/run-bat-pgm.do")
	NexacroResult runBatPgm(@ParamDataSet(name = "ds_bat_pgm") BaBatPgmVo baBatPgmVo) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 등록처리
			ret.addDataSet("ds_output", boBaBatPgmService.runBatPgm(baBatPgmVo));
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_CO_05", "배치프로그램 실행" }, e);
			}
		}
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : endBatPgm
	 * 2. ClassName : BoBaBatPgmController
	 * 3. Comment : 배치프로그램 강제종료
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-02-15
	 * </pre>
	 */
	@RequestMapping(value = "/end-bat-pgm.do")
	NexacroResult endBatPgm(@ParamDataSet(name = "ds_bat_pgm") BaBatPgmVo baBatPgmVo) throws Exception {
		NexacroResult ret = new NexacroResult();
		try {
			// 배치프로그램 등록처리
			ret.addDataSet("ds_output", boBaBatPgmService.endBatPgm(baBatPgmVo));
			
			return ret;
		} catch (MessageException e){
			if( e.getCode() == -100){
				ret.setErrorCode(e.getCode());
				ret.setErrorMsg(e.getMessage());
				return ret;
			}else {
				 throw new LoggingException(new String[] { "BA", "AJ", "SSP_BA_AJ_CO_06", "배치프로그램 강제종료" }, e);
			}
		}
	}
}
