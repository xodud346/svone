package com.ssp.bo.cc.controller;

import static com.ssp.bo.cc.CCUtils.cnvtMap2NexaRslt;
import static com.ssp.bo.cc.CCUtils.prefixSession;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.ssp.bo.sa.service.SaComService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cc.service.CustOprunitService;
import com.ssp.core.cc.CcPiUtils;
import com.ssp.core.common.exception.LoggingException;

/**
 * <pre>
 * @title  부서조회 목록
 * @package com.ssp.bo.cc.controller
 * <pre>
 * @author  moonjooh
 * @since   2022. 02. 11.
 * @version 1.0
 * @see CustOprunitController
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.16		최초작성
 */
@Controller
@RequestMapping("/bo/cust/oprunit")
public class CustOprunitController {
	private final Logger log = LoggerFactory.getLogger(CustOprunitController.class);
		
	@Autowired
	private CustOprunitService custOprunitService;

	@Autowired
	private SaComService saComService;
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustOprunit
	 * 2. ClassName  : selectCustOprunit.java
	 * 3. Comment    : 운영단위조회 목록
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-cust-opr-unit.do", method = RequestMethod.POST)
	public NexacroResult selectCustOprunit(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result = cnvtMap2NexaRslt( custOprunitService.selectCustOprunit(searchMap, new CCUtils(session)) );
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_05", "운영단위조회 목록" }, e) {
			};
		}
		return result;
    }
	
	
	
	
	
	/**
	 * <pre>
	 * 1. MethodName : selectBzplcOprunitDept
	 * 2. ClassName  : CustOprunitController.java
	 * 3. Comment    : 사업장+운영단위+부서 목록
	 * 4. 작성자     : moonjooh
	 * 5. 작성일     : 2022. 03. 28.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/list-bzplc-oprunit-dept.do", method = RequestMethod.POST)
	public NexacroResult selectBzplcOprunitDept(@ParamDataSet(name="dsParam", required=false) Map<String, Object> param, HttpSession session) throws Exception{
		NexacroResult result = null;
		try {
			result = CCUtils.cnvtMap2NexaRslt( custOprunitService.selectBzplcOprunitDept(param) );
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectCustOprunit", "사업장+운영단위+부서 목록" }, e) {};
		}
		return result;
	}
	
	
	/**
	 * <pre>
	 * 1. MethodName : selectOprunitDetail
	 * 2. ClassName  : selectCustOprunit.java
	 * 3. Comment    : 운영단위 상세정보 조회
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/basis.do", method = RequestMethod.POST)
	public NexacroResult selectOprunitBasis(@ParamDataSet(name = "dsParam", required = false) Map<String, Object> param, HttpSession session) throws Exception{
		NexacroResult result = null;
		try {
			log.debug("dsParam > " + param.toString());
			prefixSession(param, session);
			result = cnvtMap2NexaRslt( custOprunitService.selectOprunitBasis(param) );
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectOprunitDetail", "운영단위 상세정보 조회" }, e) {};
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : logoFileUpload
	 * 2. ClassName  : selectCustOprunit.java
	 * 3. Comment    : 운영단위 로고 이미지 업로드
	 * 4. 작성자       : 김상열
	 * 5. 작성일       : 2023. 03. 24.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping("/logo-file-upload.do")
	public NexacroResult logoFileUpload(HttpServletRequest request) throws Exception{
		NexacroResult result = new NexacroResult();

		try
		{
			result = saComService.fileUpload(request);

		} catch(Exception e ) {
			String message = "로고 파일 업로드 에러";
			log.error(message, e);
			throw new LoggingException(new String[]{"CC", "BO", "logoFileUpload", message}, e) {};
		}

		return result;
	}
	
	
	/**
	 * <pre>
	 * 1. MethodName : saveOprunitDetail
	 * 2. ClassName  : selectCustOprunit.java
	 * 3. Comment    : 운영단위 상세정보 저장
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/basis/save.do", method = RequestMethod.POST)
	public NexacroResult saveOprunitBasis(
			@ParamDataSet(name = "dsOprunitBasis", required = false)      Map<String,Object>   dsOprunitBasis,
			@ParamDataSet(name = "dsRefCdGrp"    , required = false) List<Map<String, Object>> dsRefCdGrp    ,
			@ParamDataSet(name = "dsOshtCd"      , required = false) List<Map<String, Object>> dsOshtCd      ,
			HttpSession session
	) throws Exception {
		NexacroResult result = null;
		
		try {
			prefixSession(dsOprunitBasis, session);
			log.info(CcPiUtils.toJsonString(dsOprunitBasis));
			
			result = cnvtMap2NexaRslt( custOprunitService.saveOprunitBasis(dsOprunitBasis, dsRefCdGrp, dsOshtCd) );
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectOprunitDetail", "운영단위 상세정보 저장" }, e) {};
		}
		
		return result;
	}
	
	
	/**
	 * <pre>
	 * 1. MethodName : listRefCdDtl
	 * 2. ClassName  : selectCustOprunit.java
	 * 3. Comment    : 운영단위 참조코드 상세리스트 조회
	 * 4. 작성자     : moonjooh
	 * 5. 작성일     : 2022. 02. 11.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/ref-cd/list.do", method = RequestMethod.POST)
	public NexacroResult selectRefCd(@ParamDataSet(name = "dsParam", required = false) Map<String, Object> param, HttpSession session) throws Exception {
		NexacroResult result = null;
		try {
			prefixSession(param, session);
			result = cnvtMap2NexaRslt( custOprunitService.selectRefCd(param) );
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectRefCdDtl", "운영단위 참조코드 상세리스트 조회" }, e) {};
		}
		return result;
	}
	
	
	@RequestMapping(value = "/ref-cd/save.do", method = RequestMethod.POST)
	public NexacroResult saveRefCd(
			  @ParamDataSet(name = "dsParam"    , required = false) Map<String, Object> param
			, @ParamDataSet(name = "dsSaveRefCd", required = false) List<Map<String, Object>> dsSaveRefCd
			, HttpSession session
	) throws Exception {
		NexacroResult result = null;
		try {
			prefixSession(param, session);
			param.put("REF_CD", dsSaveRefCd);
			
			result = cnvtMap2NexaRslt( custOprunitService.saveRefCd(param) );
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "saveRefCd", "운영단위 참조코드 저장" }, e) {};
		}
		return result;
	}
	
	
	// 제어권한
	@RequestMapping(value = "/ctl/auth/detail.do", method = RequestMethod.POST)
	public NexacroResult selectCtlAuthDtl(@ParamDataSet(name = "dsParam", required = false) Map<String, Object> param, HttpSession session) throws Exception {
		NexacroResult result = null;
		try {
			prefixSession(param, session);
			result = cnvtMap2NexaRslt( custOprunitService.selectCtlAuthInfo(param) );
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectCtlAuthDtl", "운영단위 제어권한 조회" }, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/ctl/auth/save.do", method = RequestMethod.POST)
	public NexacroResult saveCtlAuthDtl(@ParamDataSet(name = "dsCtlAuthInfo", required = false) Map<String, Object> param, HttpSession session) throws Exception {
		NexacroResult result = null;
		try {
			prefixSession(param, session);
			result = custOprunitService.saveCtlAuthInfo(param);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "saveCtlAuthDtl", "운영단위 제어권한 저장" }, e) {};
		}
		return result;
	}
	
	// 입고 책임자
	@RequestMapping(value = "/gi/chrpsn.do", method = RequestMethod.POST)
	public NexacroResult selectGiChrpsnInfo(@ParamDataSet(name = "dsParam", required = false) Map<String, Object> param, HttpSession session) throws Exception {
		NexacroResult result = null;
		try {
			prefixSession(param, session);
			result = CCUtils.cnvtMap2NexaRslt( custOprunitService.selectGiChrpsnInfo(param) );
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectGiChrpsnInfo", "입고책임자 조회" }, e) {};
		}
		return result;
	}
	
	@RequestMapping(value = "/gi/chrpsn/save.do", method = RequestMethod.POST)
	public NexacroResult saveCtlAuthDtl(
			@ParamDataSet(name = "dsParam"            , required = false)      Map<String, Object>  param              ,
			@ParamDataSet(name = "dsByoprunitGiChrpsn", required = false) List<Map<String, Object>> dsByoprunitGiChrpsn,
			@ParamDataSet(name = "dsBydeptGiChrpsn"   , required = false) List<Map<String, Object>> dsBydeptGiChrpsn   ,
			HttpSession session
	) throws Exception {
		NexacroResult result = null;
		try {
			prefixSession(param, session);
			
			param.put("CO_CD"              , param.get("coCd"     ));
			param.put("BZPLC_ID"           , param.get("bzplcId"  ));
			param.put("OPR_UNIT_ID"        , param.get("oprUnitId"));
			
			param.put("BYOPRUNIT_GI_CHRPSN", dsByoprunitGiChrpsn   );
			param.put("BYDEPT_GI_CHRPSN"   , dsBydeptGiChrpsn      );
			
			result = cnvtMap2NexaRslt( custOprunitService.saveGiChrpsnInfo(param) );
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "saveCtlAuthDtl", "입고책임자 저장" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectGoStmList
	 * 2. ClassName  : CustOprunitController.java
	 * 3. Comment    : 출고명세서 목록 팝업
	 * 4. 작성자     : 박재광
	 * 5. 작성일     : 2022. 05. 10.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/popup/seletc-go-stm-list.do", method = RequestMethod.POST)
	public NexacroResult selectGoStmList(@ParamDataSet(name="ds_search", required=false) Map<String, Object> param, HttpSession session) throws Exception{
		log.debug(param.toString());
		NexacroResult result = new NexacroResult();
		try {
			result = custOprunitService.selectGoStmList(param);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "selectGoStmList", "출고명세서 목록 팝업" }, e) {};
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectAllExcelDownload
	 * 2. ClassName  : CustOprunitController.java
	 * 3. Comment    : 운영단위목록 대용량다운로드
	 * 4. 작성자     : 문주환
	 * 5. 작성일     : 2022. 06. 02.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-all-excel-download.do")
	public NexacroResult selectAllExcelDownload(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result = custOprunitService.selectAllExcelDownload(searchMap, new CCUtils(session));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_05", "대용량엑셀 다운로드" }, e) {
			};
		}
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : selectAllExcelDownload
	 * 2. ClassName  : CustOprunitController.java
	 * 3. Comment    : 제어권한 대용량다운로드
	 * 4. 작성자     : 문주환
	 * 5. 작성일     : 2022. 06. 02.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/select-auth-all-excel-download.do")
	public NexacroResult selectAuthAllExcelDownload(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap, HttpSession session) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			//CCUtils.initSession(session);
			result = custOprunitService.selectAuthAllExcelDownload(searchMap, new CCUtils(session));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_47", "대용량엑셀 다운로드" }, e) {
			};
		}
		return result;
    }
	
	
	/**
	 * <pre>
	 * 1. MethodName : selectCustSpr
	 * 2. ClassName  : CustOprunitController.java
	 * 3. Comment    : 운영단위 참조코드 저장 시 해더가 존재하는데 디테일이 없는경우 체크
	 * 4. 작성자       : moonjooh
	 * 5. 작성일       : 2022. 07. 22.
	 * </pre>
	 *
	 * @return NexacroResult
	 * @throws Exception Exception
	 */
	@RequestMapping(value = "/basis/selectChkCcoDetail.do")
	public NexacroResult selectChkCcoDetail(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		try {
			result = custOprunitService.selectChkCcoDetail(searchMap);
		} catch(Exception e) {
			throw new LoggingException(new String[] { "CC", "BO", "SSP_BO_MA_06", "운영단위 참조코드 저장 시 해더가 존재하는데 디테일이 없는경우 체크" }, e) {
			};
		}

		return result;
    }
		
}
