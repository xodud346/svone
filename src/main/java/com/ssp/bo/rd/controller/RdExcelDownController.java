package com.ssp.bo.rd.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;
import com.ssp.bo.rd.service.RdExcelDownService;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

@Controller
@RequestMapping(value = "/rd/rdExcelDown")
public class RdExcelDownController {
	private final Logger log = LoggerFactory.getLogger(RdExcelDownController.class);

	@Autowired
	protected SspPropertyService propertiesService;
	
	@Autowired
	private RdExcelDownService rdExcelDownService;
	
	
	/**
	 * <pre>
	 * 1. MethodName : newProductRegist
	 * 2. ClassName  : RdExcelDownController.java
	 * 3. Comment    : R&D 신규 상품등록 요청목록 대용량 엑셀 다운로드
	 * 4. 작성자       : 박성진
	 * 5. 작성일       : 2022.09.02
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/new-product-regist.do")
	public NexacroResult newProductRegist(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		searchMap.put("SES_ID", session.getId());
		
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}
		
		try {
			result.addDataSet("ds_output", rdExcelDownService.newProductRegist(searchMap, new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_18", "신규 상품등록 요청목록 대용량엑셀 등록 실패" }, e) {
			};
		} 
		return result;
    }
	
	/**
	 * <pre>
	 * 1. MethodName : newProductMultiRegist
	 * 2. ClassName  : RdExcelDownController.java
	 * 3. Comment    : R&D 신규 상품일괄등록 요청목록 대용량 엑셀 다운로드
	 * 4. 작성자       : 김완수 
	 * 5. 작성일       : 2023.07.13
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/new-product-multi-regist.do")
	public NexacroResult newProductMultiRegist(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		searchMap.put("SES_ID", session.getId());
		
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));
		
		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}
		
		try {
			result.addDataSet("ds_output", rdExcelDownService.newProductMultiRegist(searchMap, new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_71", "신규 상품일괄등록 요청목록 대용량엑셀 등록 실패" }, e) {
			};
		} 
		return result;
	}
	
	
	/**
	 * <pre>
	 * 1. MethodName : productInfo
	 * 2. ClassName  : RdExcelDownController.java
	 * 3. Comment    : R&D 상품정보 관리 대용량 엑셀 다운로드
	 * 4. 작성자       : 박성진
	 * 5. 작성일       : 2022.09.02
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/product-info.do")
	public NexacroResult productInfo(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}
		
		try {
			result.addDataSet("ds_output", rdExcelDownService.productInfo(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_01", "상품정보 관리 대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	
	/**
	 * <pre>
	 * 1. MethodName : purchaseInfo
	 * 2. ClassName  : RdExcelDownController.java
	 * 3. Comment    : R&D 구매정보 관리 대용량 엑셀 다운로드
	 * 4. 작성자       : 박성진
	 * 5. 작성일       : 2022.09.02
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/purchase-info.do")
	public NexacroResult purchaseInfo(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if(SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) 
		{
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}
		
		try {
			result.addDataSet("ds_output", rdExcelDownService.purchaseInfo(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_09", "구매정보 관리 대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }

	
	/**
	 * <pre>
	 * 1. MethodName : groupProduct
	 * 2. ClassName  : RdExcelDownController.java
	 * 3. Comment    : R&D 시리즈 그룹 상품 관리
	 * 4. 작성자       : 박성진
	 * 5. 작성일       : 2022.09.07
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/srs-grp-prd-mng.do")
	public NexacroResult groupProduct(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		searchMap.put("SES_ID", session.getId());
		
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("coCd"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}
		
		try {
			result.addDataSet("ds_output", rdExcelDownService.groupProduct(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_04", "시리즈 그룹 상품 관리 대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	
	/**
	 * <pre>
	 * 1. MethodName : chemicalMeterialInfo
	 * 2. ClassName  : RdExcelDownController.java
	 * 3. Comment    : R&D 화학물질 정보 관리
	 * 4. 작성자       : 박성진
	 * 5. 작성일       : 2022.09.07
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/chm-mtl-info-mng.do")
	public NexacroResult chemicalMeterialInfo(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		searchMap.put("SES_ID", session.getId());
		
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && userInfo != null)
		{
			searchMap.put("CO_CD", userInfo.get("CO_CD"));
		}
		
		try {
			result.addDataSet("ds_output", rdExcelDownService.chemicalMeterialInfo(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_42", "화학물질 정보 관리 대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	

	/**
	 * <pre>
	 * 1. MethodName : purchaseInfoChangeHistory
	 * 2. ClassName  : RdExcelDownController.java
	 * 3. Comment    : R&D 구매정보 변경이력 관리
	 * 4. 작성자       : 박성진
	 * 5. 작성일       : 2022.09.07
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/purg-info-chg-hst-mng.do")
	public NexacroResult purchaseInfoChangeHistory(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		searchMap.put("SES_ID", session.getId());
		
		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}
		if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
			SessionsAdmin.setSessionAdminLocal();
		}
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}

		searchMap.put("SES_ID", session.getId());
		
		try {
			result.addDataSet("ds_output", rdExcelDownService.purchaseInfoChangeHistory(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_10", "구매정보 변경이력 관리 대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
	
	
	/**
	 * <pre>
	 * 1. MethodName : cprtcpPoolInfoMng
	 * 2. ClassName  : RdExcelDownController.java
	 * 3. Comment    : R&D 협력사 POOL 관리 대용량 엑셀 다운로드
	 * 4. 작성자       : 강일빈
	 * 5. 작성일       : 2023.07.19
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/cprtcp-pool-info-mng.do")
	public NexacroResult cprtcpPoolInfoMng(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if(SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) 
		{
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}
		
		try {
			result.addDataSet("ds_output", rdExcelDownService.cprtcpPoolInfoMng(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_19", "협력사 견적 POOL 관리 대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }

	/**
	 * <pre>
	 * 1. MethodName : cprtcpPoolInfoMngHstr
	 * 2. ClassName  : RdExcelDownController.java
	 * 3. Comment    : R&D 협력사 POOL 이력 조회 대용량 엑셀 다운로드
	 * 4. 작성자       : 강일빈
	 * 5. 작성일       : 2023.07.19
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/cprtcp-pool-info-mng-hstr.do")
	public NexacroResult cprtcpPoolInfoMngHstr(HttpSession session, @ParamDataSet(name = "ds_search", required = false) Map<String, Object> searchMap) throws Exception{		
		NexacroResult result = new NexacroResult();
		
		searchMap.put("SES_ID", session.getId());

		String langCd = StringUtil.getString(searchMap.get("LANG_CD"));

		if(CommUtil.nvl(langCd).equals(""))
		{
			searchMap.put("LANG_CD", "KO");
		}

		if(SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop")) 
		{
			SessionsAdmin.setSessionAdminLocal();
		}

		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

		String coCd = StringUtil.getString(searchMap.get("CO_CD"));

		if(CommUtil.nvl(coCd).equals("") && admin != null)
		{
			searchMap.put("CO_CD", admin.get("CO_CD"));
		}
		
		try {
			result.addDataSet("ds_output", rdExcelDownService.cprtcpPoolInfoMngHstr(searchMap,new OdOrderComm(session)));
		} catch(Exception e) {
			throw new LoggingException(new String[] { "RD", "BO", "SSP_BO_RD_19", "협력사 견적 POOL 이력조회 대용량엑셀 등록 실패" }, e) {
			};
		}
		return result;
    }
}
