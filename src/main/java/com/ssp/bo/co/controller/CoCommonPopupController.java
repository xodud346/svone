package com.ssp.bo.co.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.ssp.bo.co.service.CoOprtrUnitService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.core.co.service.CoCommonPopupService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title   
 * @package com.ssp.core.co.service.controller
 * <pre>
 * @author  
 * @since   2022. 01. 18.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.18		최초작성
 */
@Controller
@RequestMapping("/co/popup")
public class CoCommonPopupController {
	private Logger logger = LoggerFactory.getLogger(CoCommonPopupController.class);
	
	@Autowired
	private CoCommonPopupService commonPopupService;

	@Autowired
	private CoOprtrUnitService coOprtrUnitService;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBzplcPopupList
	 * 2. ClassName : CoCommonPopupController
	 * 3. Comment : 사업장 조회 
	 * 4. 작성자 : 
	 * 5. 작성일 : 
	 * </pre>
	 *
	 * 
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/select-bzplc-popup-list.do")
	public NexacroResult selectBzplcPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			//카멜 변환, 검색조건 setting
	        searchMap = CommonUtil.toCamelCaseMap(searchMap);
	        
	        Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
	        String coCd = StringUtil.getString(searchMap.get("coCd"));
			if(CommUtil.nvl(coCd).equals("")) {
				searchMap.put("coCd", admin.get("CO_CD"));
			}
			
	        searchMap.put("type", "BO");
			setRowCount(searchMap);
			List<Map<String,Object>> list = commonPopupService.selectBzplcPopupList(searchMap);
			
			int totalCount = list.size();
			
			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("bzplcCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchBzplcId", list.get(0).get("BZPLC_ID"));
				result.addVariable("searchBzplcNm", list.get(0).get("BZPLC_NM"));
			}
			
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "사업장 팝업 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_PP_14", message}, ne);
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectOperatePopupList
	 * 2. ClassName  : CoCommonPopupController.java
	 * 3. Comment    : 운영단위 조회 팝업 리스트 (공통)
	 * 4. 작성자       : 
	 * 5. 작성일       :
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/select-operate-popup-list.do")
	public NexacroResult selectOperatePopupList(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
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
			List<Map<String,Object>> list = commonPopupService.selectOperatePopupList(searchMap);
			
			int totalCount = list.size();
			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("oprUnitCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchOprUnitId", list.get(0).get("OPR_UNIT_ID"));
				result.addVariable("searchOprUnitNm", list.get(0).get("OPR_UNIT_NM"));
				result.addVariable("searchOprBzplcId", list.get(0).get("BZPLC_ID"));
			}
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "운영단위 조회 팝업";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_PP_23", message}, ne);
		}
		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : odrUntPopupForm
	 * 2. ClassName  : CoCommonPopupController.java
	 * 3. Comment    : 주문단위 팝업 리스트
	 * 4. 작성자       : 권순호
	 * 5. 작성일       : 2021. 10. 14.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/select-odr-unt-popup-list.do")
	public NexacroResult selectOdrUntPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
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
			List<Map<String,Object>> list = commonPopupService.selectOdrUntPopupList(searchMap);    	
			
			int totalCount = list.size();
			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("unitCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchUnitCd", list.get(0).get("UNIT_CD"));
				result.addVariable("searchUnitNm", list.get(0).get("UNIT_NM"));
			}
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "주문단위 팝업 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_PP_12", message}, ne);
		}
		return result;
	}
	

	/**
	 * <pre>
	 * 1. MethodName : selectOperatorPopupList
	 * 2. ClassName  : CoCommonPopupController.java
	 * 3. Comment    : 담당자 조회 팝업 리스트 (공통)
	 * 4. 작성자       : java_01
	 * 5. 작성일       : 2021. 09. 07.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/select-operator-popup-list.do")
	public NexacroResult selectOperatorPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		String useyn = (String)searchMap.get("USE_Y");
		try {
			if (useyn == null || useyn == "") {
				searchMap.put("USE_YN", "Y");
			}
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		    String coCd = StringUtil.getString(searchMap.get("coCd"));
			if(CommUtil.nvl(coCd).equals("")) {
				searchMap.put("coCd", admin.get("CO_CD"));
			}
			
			searchMap.put("type", "BO");
			setRowCount(searchMap);
			List<Map<String,Object>> list = commonPopupService.selectOperatorPopupList(searchMap);
			
			int totalCount = list.size();
			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("oprtrCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchEmpNo", list.get(0).get("EMP_NO"));
				result.addVariable("searchOprtrNm", list.get(0).get("OPRTR_NM"));
			}
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "담당자 팝업 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_PP_27", message}, ne);
		}
		return result;
	}
	
	
	/**
	 * <pre>
	 * 1. MethodName : selectClientPopupList
	 * 2. ClassName  : CoCommonPopupController.java
	 * 3. Comment    : 회원 팝업 리스트 (공통)
	 * 4. 작성자       : 
	 * 5. 작성일       : 2021. 01. 24.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/select-client-popup-list.do")
	public NexacroResult selectClientPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
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
			List<Map<String,Object>> list = commonPopupService.selectClientPopupList(searchMap);   	
			
			int totalCount = list.size();
			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("clientCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchMbrId", list.get(0).get("MBR_ID"));
				result.addVariable("searchMbrNm", list.get(0).get("MBR_NM"));
			}
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "회원 팝업 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_PP_25", message}, ne);
		}
		
		return result;
	}


	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMbrOprtrInfoList
	 * 2. ClassName : CoCommonPopupController
	 * 3. Comment : 등록자(사용자) 조회 팝업
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-02-17
	 * </pre>
	 *
	 */
	@RequestMapping("/select-mbr-oprtr-info-list.do")
	public NexacroResult selectMbrOprtrInfoList(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {
			Map<String, Object> map = CommonUtil.toCamelCaseMap(searchMap);

			// 검색 로우카운트
			setRowCount(map);

			//전체 카운트
			int totalCount = commonPopupService.selectMbrOprtrInfoListCount(map);

			//목록
			List<Map<String,Object>> list = new ArrayList<>();
			if( totalCount > 0 ) {
				list = commonPopupService.selectMbrOprtrInfoList(map);
			}

			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);

			// 자동완성용 기능 추가.
			result.addVariable("oprtrInfoCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("selectRegpsnId", list.get(0).get("OPRTR_ID"));
				result.addVariable("selectRegpsnNm", list.get(0).get("OPRTR_NM"));
			}

		} catch ( Exception ne ) {
			String message = "등록자(사용자) 조회 팝업 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "saveNotice", message}, ne);
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

	/**
	 * <pre>
	 * 1. MethodName : selectComDtlCdPopupList
	 * 2. ClassName  : CoCommonPopupController.java
	 * 3. Comment    : 공통코드 멀티 팝업 리스트 (공통)
	 * 4. 작성자       : 
	 * 5. 작성일       : 2022.03.11
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/select-com-dtl-cd-popup-list.do")
	public NexacroResult selectComDtlCdPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();
		try {
			searchMap = CommonUtil.toCamelCaseMap(searchMap);
			searchMap.put("type", "BO");
			 //최대건수 1000건 고정
	        searchMap.put("startNum", "0");
	        searchMap.put("rowCount", "1000");
			String langCd = StringUtil.getString(searchMap.get("langCd"));
			if(CommUtil.nvl(langCd).equals("")) {
				searchMap.put("langCd", "KO");
			}
			
			List<Map<String,Object>> list = commonPopupService.selectComDtlCdPopupList(searchMap); 
			Map<String,Object> rtnMap = commonPopupService.selectComCdMstInfo(searchMap); 
			
			int totalCount = list.size();
			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("comDtlCdCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchComDtlCd", list.get(0).get("COM_DTL_CD"));
				result.addVariable("searchComDtlCdNm", list.get(0).get("COM_DTL_CD_NM"));
			}
			result.addVariable("comClsfCdNm", rtnMap.get("COM_CLSF_CD_NM")); //분류코드명 
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "공통코드 멀티 팝업 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_PP_42", message}, ne);
		}
		
		return result;
	}



	/**
	 *
	 * <pre>
	 * 1. MethodName : selectOprtrUnitListAjax
	 * 2. ClassName : CoCommonPopupController
	 * 3. Comment : 대상 멀티 조회
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-24
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return NexacroResult
	 * @throws Exception e
	 */
	@RequestMapping("/select-oprtr-Unit-list-ajax.do")
	public NexacroResult selectOprtrUnitListAjax(@ParamDataSet(name = "ds_search", required = false) List<Map<String,Object>> searchMap) throws Exception{
		NexacroResult result = new NexacroResult();

		try {

			List<Map<String,Object>> list = coOprtrUnitService.selectOprtrUnitListAjax(searchMap);
			result.addDataSet("ds_output", list);

		} catch (Exception ne) {
			String message = "대상 멀티 조회";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_CN_02", message}, ne);
		}

		return result;
	}
	
	/**
	 * <pre>
	 * 1. MethodName : selectOrgcdPopupList
	 * 2. ClassName  : CoCommonPopupController.java
	 * 3. Comment    : 부서 조회 팝업 리스트 (공통)
	 * 4. 작성자       : 이상민
	 * 5. 작성일       : 2023. 07. 25.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/select-orgcd-popup-list.do")
	public NexacroResult selectOrgcdPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
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
			List<Map<String,Object>> list = commonPopupService.selectOrgCdPopupList(searchMap);
			
			int totalCount = list.size();
			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("OrgCdCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchOrgCd", list.get(0).get("ORG_CD"));
				result.addVariable("searchOrgNm", list.get(0).get("ORG_NM"));
			}
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "부서 팝업 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_PP_46", message}, ne);
		}
		return result;
	}

	/**
	 * <pre>
	 * 1. MethodName : selectOprtrdPopupList
	 * 2. ClassName  : CoCommonPopupController.java
	 * 3. Comment    : 사용자 조회 팝업 리스트 (공통)
	 * 4. 작성자       : 이상민
	 * 5. 작성일       : 2023. 07. 25.
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/select-oprtr-popup-list.do")
	public NexacroResult selectOprtrPopupList(@ParamDataSet(name = "ds_search", required = false) Map<String,Object> searchMap) throws Exception{
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
			List<Map<String,Object>> list = commonPopupService.selectOprtrPopupList(searchMap);
			
			int totalCount = list.size();
			//조회한 데이터가 1개인지 여부 확인
			result.addVariable("OprtrIdCount", totalCount);
			if( totalCount == 1 && list.size() > 0 ) {
				result.addVariable("searchOprtrId", list.get(0).get("OPRTR_ID"));
				result.addVariable("searchOprtrNm", list.get(0).get("OPRTR_NM"));
			}
			result.addDataSet("ds_output1", list);
			result.addVariable("totalCount", totalCount);
		} catch (Exception ne) {
			String message = "사용자 팝업 조회 에러";
			logger.error(message);
			throw new LoggingException(new String[]{"CO", "BO", "SSP_BO_PP_47", message}, ne);
		}
		return result;
	}
	//
}
