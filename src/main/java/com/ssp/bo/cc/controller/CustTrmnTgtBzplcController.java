package com.ssp.bo.cc.controller;

import com.ssp.bo.ba.service.BoBaBatPgmService;
import com.ssp.bo.cc.CCUtils;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import com.ssp.core.ba.service.CoreBaBatPgmService;
import com.ssp.core.ba.vo.BaBatPgmVo;
import com.ssp.core.ba.vo.BaBatStat;
import com.ssp.core.common.exception.BizRuntimeException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.service.CustTrmnTgtBzplcService;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  일반고객 종결대상 사업장 목록
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 05. 09.
 * @version 1.0
 * @see CustTrmnTgtBzplcController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.05.09		최초작성
 */
@Controller
@RequestMapping("/bo/cust/trmn/bzplc")
public class CustTrmnTgtBzplcController {
	private final Logger log = LoggerFactory.getLogger(CustTrmnTgtBzplcController.class);
		
	@Resource(name="custTrmnTgtBzplcService") 
	private CustTrmnTgtBzplcService custTrmnTgtBzplcService;

	@Autowired
	private CoreBaBatPgmService coreBaBatPgmService;

	@Autowired
	private BoBaBatPgmService boBaBatPgmService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustTrmnTgtBzplc
	 * 2. ClassName  : CustTrmnTgtBzplcController.java
	 * 3. Comment    : 일반고객 종결대상 사업장 목록 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 05. 09.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-trmn-tgt-bzplc.do", method = RequestMethod.POST)
	public NexacroResult selectCustTrmnTgtBzplc(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result.addDataSet("ds_output1", custTrmnTgtBzplcService.selectCustTrmnTgtBzplc(searchMap, new CCUtils(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_90", "일반고객 종결대상 사업장 목록 조회" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : updateCustTrmnTgtBzplc
	 * 2. ClassName  : CustTrmnTgtBzplcController.java
	 * 3. Comment    : 일반고객 종결대상 사업장 종결처리
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 05. 09.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/update-cust-trmn-tgt-bzplc.do", method = RequestMethod.POST)
	public NexacroResult updateCustTrmnTgtBzplc(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> input, HttpSession session) throws Exception{	
		NexacroResult result = new NexacroResult();
		try {
			input = CCUtils.prefixSessionList(input, session);
			result = custTrmnTgtBzplcService.updateCustTrmnTgtBzplc(input);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_90", "일반고객 종결대상 사업장 종결처리" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustTrmnTgtBzplc
	 * 2. ClassName  : CustTrmnTgtBzplcController.java
	 * 3. Comment    : pen order, Open VOC 체크
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 05. 09.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-check-open-voc.do", method = RequestMethod.POST)
	public NexacroResult selectChkOpenVoc(@ParamDataSet(name = "ds_save", required = false) List<Map<String, Object>> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result = custTrmnTgtBzplcService.selectChkOpenVoc(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_90", "pen order, Open VOC 체크" }, e) {
			};
		}
		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : executeBatch
	 * 2. ClassName  : CustTrmnTgtBzplcController.java
	 * 3. Comment    : 수동 배치 실행
	 * 4. 작성자       : 김상열
	 * 5. 작성일       : 2023. 04. 25
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/execute-batch.do", method = RequestMethod.POST)
	public NexacroResult executeBatch() throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			BaBatPgmVo baBatPgmVo = new BaBatPgmVo();
			baBatPgmVo.setBatPgmId("SSP_BA_CC_01");		// 사업자등록번호 확인 후 종결처리
			List<BaBatPgmVo> inqBatPgmList = coreBaBatPgmService.inqBatPgmList(baBatPgmVo);

			// 조회된 배치 목록이 없을 경우 오류 발생
			if(Objects.isNull(inqBatPgmList) || inqBatPgmList.isEmpty() || inqBatPgmList.size() > 1) {
				StringBuffer sb = new StringBuffer();
				throw new BizRuntimeException(
						sb.append("종결대상사업장 수동 배치 실행 요청 중 오류 발생 ").append(System.lineSeparator())
								.append("Objects.isNull(inqBatPgmList) : ").append(Objects.isNull(inqBatPgmList)).append(System.lineSeparator())
								.append("inqBatPgmList.isEmpty() : ").append(inqBatPgmList.isEmpty()).append(System.lineSeparator())
								.append("inqBatPgmList.size() > 1 : ").append(inqBatPgmList.size() > 1).append(System.lineSeparator())
								.toString()
				);
			}

			BaBatPgmVo inqBatPgm = inqBatPgmList.get(0);

			// 현재 실행 상태인 경우 오류 발생
			if(Objects.equals("30", inqBatPgm.getExceStatsCd())) {
				result.setErrorCode(30);	// 해당 배치는 현재 수행 중 입니다.
				return result;
			}

			// 배치 실행
			BaBatPgmVo runBatPgm = boBaBatPgmService.runBatPgm(inqBatPgm);

			// 실행 요청 중 오류 발생
			if(Objects.equals(BaBatStat.SERVER_ERROR, runBatPgm.getStatCode()) || Objects.equals(BaBatStat.ERROR, runBatPgm.getStatCode())) {
				StringBuffer sb = new StringBuffer();
				throw new BizRuntimeException(
						sb.append("종결대상사업장 수동 배치 실행 요청 중 오류 발생 ").append(System.lineSeparator())
								.append(runBatPgm.getStatMsg())
								.toString()
				);
			}

		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_90", "수동 배치 실행" }, e) {};
		}
		return result;
	}
	
}
