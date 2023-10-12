package com.ssp.bo.co.login;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;

import com.ssp.bo.co.login.service.LoginManagerService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.legacy.mall.model.Admin.ROLEADMIN;
import com.ssp.core.util.SspMap;


public class LoginSuccessHandler implements AuthenticationSuccessHandler {

	@Resource(name="loginManagerService")
	private LoginManagerService loginManagerService;

	private RequestCache requestCache = new HttpSessionRequestCache();
	private RedirectStrategy redirectStratgy = new DefaultRedirectStrategy();

	private String defaultUrl;

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		clearAuthenticationAttributes(request);
		String admMastLoginYn = null;
		
		// 로그인 성공 후 작업
//		Admin admin = new Admin();
//		Admin logAdmin = new Admin();
		Map<String, Object> userInfo = null;
		List<SspMap> authList = null;
		List<Map<String, Object>> menuList = null;
		SspMap chrpsn = null;
//		List<SspMap> chrpsnList = null;

		try {
			userInfo = loginManagerService.selectLoginManagerInfo(authentication.getName(), request.getServerName().toString());
		} catch (Exception e) {
			logger.error("onAuthenticationSuccess userInfo is null !!!!!!!!!!!!!!!");
		}

		if (userInfo != null) {
			// 로그인한 사용자 레벨을 사용자 정보에 저장하고 비밀번호를 삭제한다.
			userInfo.put("roleAdmin", ROLEADMIN.administrator);

			// 관리자 정보를 세션에 저장한다.
			SessionsAdmin.setSessionAdmin(request, userInfo);

			// 권한목록
			try {
				authList = loginManagerService.selectUserAuthList(authentication.getName());
			} catch (Exception e) {
				logger.error("onAuthenticationSuccess authList is null @@@@@@@@@@@@@@@@@@@@");
			}

			if (authList == null || authList.isEmpty()) {
				admMastLoginYn = "N";
			} else {
				SessionsAdmin.setSessionAdminAuthList(request, authList);

				List<String> authStringList = new ArrayList<>();
				for (SspMap auth : authList) {
					authStringList.add(auth.getString("autMstIdx"));
				}

				// 관리자 메뉴 리스트
				Map<String, Object> paramMap = new HashMap<>();
//				paramMap.put("AUT_MST_IDX", userInfo.get("AUT_MST_IDX"));
				paramMap.put("authStringList", authStringList);
				try {
					menuList = loginManagerService.selectAdminMenuList(paramMap);
				} catch (Exception e) {
					logger.error("onAuthenticationSuccess menuList is null @@@@@@@@@@@@@@@@@@@@");
				}
				// 관리자 메뉴를 세션에 저장한다.
				SessionsAdmin.setSessionAdminMenuList(request, menuList);

				// 상품담당자 목록 : TB_SG_PRD_USER_MAPP
				try {
					chrpsn = loginManagerService.selectUserChrpsn(authentication.getName());
				} catch (Exception e) {
					logger.error("onAuthenticationSuccess chrpsnList is null @@@@@@@@@@@@@@@@@@@@");
				}
				SessionsAdmin.setSessionAdminChrpsn(request, chrpsn);
//				SessionsAdmin.setSessionAdminChrpsnList(request, chrpsnList);

				// 로그인한 사용자 아이디, 초기메뉴, 레벨, 로그인 유무를 저장한다.
//				logAdmin.setADM_MST_ID(authentication.getName());
//				logAdmin.setRoleAdmin(null);
//				logAdmin.setLoginStateCode(Code.LOGIN_SUCCESS);
//				logAdmin.setADM_MST_LOGIN_YN("Y");
				admMastLoginYn = "Y";
			}
		} else {
//			logAdmin.setLoginStateCode(Code.LOGIN_ID_NULL);
//			logAdmin.setADM_MST_LOGIN_YN("N");
			admMastLoginYn = "N";
		}

		try {
			/*
			clearAuthenticationAttributes(request);
			HttpSession session = request.getSession();
			
			String sesId     = (String) session.getId();
			String brwrType  = "";
			String userAgent = request.getHeader("User-Agent");		
			
			if(userAgent.indexOf("Trident") > -1) {												// IE
				brwrType = "ie";
			} else if(userAgent.indexOf("Edge") > -1) {											// Edge
				brwrType = "edge";
			} else if(userAgent.indexOf("Whale") > -1) { 										// Naver Whale
				brwrType = "whale";
			} else if(userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) { 		// Opera
				brwrType = "opera";
			} else if(userAgent.indexOf("Firefox") > -1) { 										 // Firefox
				brwrType = "firefox";
			} else if(userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1 ) {	 // Safari
				brwrType = "safari";		
			} else if(userAgent.indexOf("Chrome") > -1) {										 // Chrome	
				brwrType = "chrome";
			}			
			
			Map<String, Object> paramMap = new HashMap<String, Object>();
			
			paramMap.put("iptPstTypeCd", "BO");
			userInfo.put("coCd"        , userInfo.get("CO_CD"));
			paramMap.put("bzplcId"     , "");
			paramMap.put("lognId"      , userInfo.get("WPTAL_ID"));
			paramMap.put("mbrId"       , "");
			paramMap.put("oprtrId"     , userInfo.get("OPRTR_ID"));
			paramMap.put("dlgteId"     , "");			
			paramMap.put("cnsolIpAddr" , request.getHeader("Proxy-Client-IP")==null ? request.getRemoteAddr(): request.getHeader("Proxy-Client-IP"));
			paramMap.put("sesId"       , sesId);
			paramMap.put("brwrType"    , brwrType);
			paramMap.put("lognMthd"    , "A0");
			
			this.loginManagerService.insertBoSysCnctLog(paramMap);
			*/
			loginManagerService.insertLoginManagerHistroy(authentication.getName(), request.getRemoteAddr(), admMastLoginYn);
		} catch (Exception e) {
			logger.error("onAuthenticationSuccess insert LoginManagerHistroy error ########################");
		}

		resultRedirectStrategy(request, response, authentication);

	}


	protected void clearAuthenticationAttributes(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if(session==null) return;
		session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
	}

	protected void resultRedirectStrategy(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {

		SavedRequest savedRequest = requestCache.getRequest(request, response);

		if(savedRequest!=null) {
			String targetUrl = savedRequest.getRedirectUrl();
			redirectStratgy.sendRedirect(request, response, targetUrl);
		} else {
			redirectStratgy.sendRedirect(request, response, defaultUrl);
		}

	}

	public String getDefaultUrl() {
		return defaultUrl;
	}


	public void setDefaultUrl(String defaultUrl) {
		this.defaultUrl = defaultUrl;
	}
}
