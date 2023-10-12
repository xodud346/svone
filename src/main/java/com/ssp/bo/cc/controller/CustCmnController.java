package com.ssp.bo.cc.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.service.CustCmnService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  고객 공통 팝업 컨트롤러
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 02. 22.
 * @version 1.0
 * @see CustCmnController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.22		최초작성
 */
@Controller
@RequestMapping("/bo/cust/cmn/popup")
public class CustCmnController {
	private final Logger log = LoggerFactory.getLogger(CustCmnController.class);
		
	@Resource(name="custCmnService") 
	private CustCmnService custCmnService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectIddtMultiPop
	 * 2. ClassName  : CustCmnController.java
	 * 3. Comment    : 산업군 멀티조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-iddt-multi-pop.do")
	public NexacroResult selectIddtMultiPop(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custCmnService.selectIddtMultiPop(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_PP_30", "산업군 멀티조회" }, e) {
			};
		}

		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : selectUsdIddtMultiPop
	 * 2. ClassName  : CustCmnController.java
	 * 3. Comment    : 사용중 산업군 멀티조회
	 * 4. 작성자       : 김영남
	 * 5. 작성일       : 2023. 05. 30.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-use-iddt-multi-pop.do")
	public NexacroResult selectUsdIddtMultiPop(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			result = custCmnService.selectUsdIddtMultiPop(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_PP_30", "산업군 멀티조회" }, e) {
			};
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectDeptMultiPop
	 * 2. ClassName  : CustCmnController.java
	 * 3. Comment    : 부서 멀티조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-dept-multi-pop.do")
	public NexacroResult selectDeptMultiPop(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custCmnService.selectDeptMultiPop(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_PP_37", "부서 멀티조회" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectMbrOprtrOrgInfoList
	 * 2. ClassName  : CustCmnController.java
	 * 3. Comment    : [팝업]팀 조회 옵션 설정
	 * 4. 작성자       : ych10
	 * 5. 작성일       : 2022. 03. 17.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-mbr-oprtr-org-info-list.do")
	public NexacroResult selectMbrOprtrOrgInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custCmnService.selectMbrOprtrOrgInfoList(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectMbrOprtrOrgInfoList", "[팝업]팀 조회 옵션 설정" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectSvcOprtrMbr
	 * 2. ClassName  : CustCmnController.java
	 * 3. Comment    : [팝업] 서비스담당자 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 25.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-svc-oprtr-mbr.do")
	public NexacroResult selectSvcOprtrMbr(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{	
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", custCmnService.selectSvcOprtrMbr(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_CN_30", "[팝업] 서비스담당자 조회" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCaddrRegNum
	 * 2. ClassName  : CustCmnController.java
	 * 3. Comment    : [팝업] 연락처 등록번호 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 25.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-caddr-reg-num.do")
	public NexacroResult selectCaddrRegNum(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{	
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("ds_output1", custCmnService.selectCaddrRegNum(searchMap));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_PP_20", "[팝업] 연락처 등록번호 조회" }, e) {
			};
		}

		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectCaddrRegNum
	 * 2. ClassName  : CustCmnController.java
	 * 3. Comment    : [팝업] 회원멀티조회 SSP_BO_PP_25_1
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 04. 25.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-client-popup-list.do")
	public NexacroResult selectClientPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{	
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		    String coCd = StringUtil.getString(searchMap.get("coCd"));
			if(CommUtil.nvl(coCd).equals("")) {
				searchMap.put("coCd", admin.get("CO_CD"));
			}
			searchMap.put("type", "BO");
			setRowCount(searchMap);	
			List<Map<String,Object>> list = custCmnService.selectClientPopupList(searchMap);   	
			
			int totalCount = list.size();
			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("clientCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchMbrId", list.get(0).get("MBR_ID"));
				result.addVariable("searchMbrNm", list.get(0).get("MBR_NM"));
			}
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_PP_25_1", "[팝업] 회원멀티조회" }, e) {
			};
		}
		
		return result;
    }
	
	/**
	 * 중복코드 병합.
	 * @param searchMap
	 */
	private void setRowCount(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) {
		searchMap.put("startNum", "0");
		String rowCount = StringUtil.getString(searchMap.get("rowCount"));
		if(!CommUtil.nvl(rowCount).equals("")) {
			searchMap.put("rowCount", rowCount.replace(",", ""));
		}else {
			//값이 없다면 1000으로 고정
			searchMap.put("rowCount", "1000");
		}
	}
	
}
