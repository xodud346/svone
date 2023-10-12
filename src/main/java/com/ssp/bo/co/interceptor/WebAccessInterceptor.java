package com.ssp.bo.co.interceptor;

import java.lang.reflect.Method;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.ssp.bo.co.login.service.LoginManagerService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.annotations.UtilInterceptor;
import com.ssp.core.common.exception.AccessMypageDeniedException;
import com.ssp.core.common.exception.AmAuthenticationException;
import com.ssp.core.common.exception.SessionException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.legacy.mall.common.SessionsUser;
import com.ssp.core.legacy.mall.model.Code;
import com.ssp.core.util.AesCrypto;
import com.ssp.core.util.MobileUrlConvertor;
import com.ssp.core.util.RequestUtil;
import com.ssp.core.util.StringUtil;

public class WebAccessInterceptor implements HandlerInterceptor{
	@Resource(name="propertiesService") protected SspPropertyService propertiesService;
	@Resource(name="loginManagerService") LoginManagerService loginManagerService;

	private static final Logger LOGGER = LoggerFactory.getLogger(WebAccessInterceptor.class);

	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{
		String requestUri = request.getRequestURI().toString();
		String requestURL = request.getRequestURL().toString();
		Class<?> thisClass = handler.getClass();
		Method thisMethod = UtilInterceptor.getMethod(thisClass, requestUri);

		RequestUtil.setCurrentRequest(request);

		/******************************************************************************* ADMIN */
		/* 권한 체크 */
		String isMobileChk = "N";
		if(!MobileUrlConvertor.isMobile(request)){ // 모바일이면 권한체크 안함
			isMobileChk = "N";
		}else{
			isMobileChk = "Y";
		}

		this.adminAuthorityCheck(request, response, requestUri, thisClass, thisMethod);
		request.setAttribute("isMobileChk", isMobileChk);

		/* 로고 */
		//request.setAttribute("logoUrl", this.selectlogoUrl(request, Code.LOGO_TYPE_ADMIN));

		String protocol = request.isSecure()?"https://":"http://";
		request.setAttribute("protocol", protocol);

		String ssl = request.isSecure()?"ssl.":"";
		String serverDomain = "";
		String serverSslDomain = "";

		if(requestUri.indexOf("/pc/") >= 0){
			serverDomain = propertiesService.getString("front.domain");
			serverSslDomain = propertiesService.getString("front.ssl.domain");
		}else if(requestUri.indexOf("/mobile/") >= 0){
			serverDomain = propertiesService.getString("mobile.domain");
			serverSslDomain = propertiesService.getString("mobile.ssl.domain");
		}else{
			serverDomain = propertiesService.getString("server.domain");
			serverSslDomain = propertiesService.getString("server.ssl.domain");
		}

		String mobileSslDomain = propertiesService.getString("mobile.ssl.domain");
		request.setAttribute("mobileSslDomain", mobileSslDomain);

		String frontDomain = propertiesService.getString("front.domain");
		request.setAttribute("frontDomain", frontDomain);

		String mobileDomain = propertiesService.getString("mobile.domain");
		request.setAttribute("mobileDomain", mobileDomain);

		request.setAttribute("serverDomain", serverDomain);
		request.setAttribute("serverSslDomain", serverSslDomain);
		request.setAttribute("cdnDomain", protocol+propertiesService.getString("cdn."+ ssl +"domain"));
		request.setAttribute("img_domain", protocol+propertiesService.getString("cdn.domain"));
		request.setAttribute("requestUrl", request.getRequestURI());
		request.setAttribute("locationProtocol", request.getScheme());

		//multiPartRequest로 넘어온 파라미터를 request.getParameter 로 가능하게 하도록 설정
		if (request instanceof MultipartHttpServletRequest) {
			RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));
		}

		return true;
	}

	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws AmAuthenticationException{
		//today
		request.setAttribute("today", new SimpleDateFormat("yyyy.MM.dd",Locale.KOREA).format(new Date()));
		
		if (modelAndView != null) {
			modelAndView.addObject("STATIC_RESOURCE_ROOT", propertiesService.getString("static.resource.root"));
		}
	}

	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception{
		//empty
	}

	private void setCookie(String loginId, HttpServletRequest request, HttpServletResponse response) throws Exception {
		 // cookie setup
		  String authinfo = loginId;
	      authinfo += "|";
	      authinfo += "|" + request.getRemoteAddr();

	      authinfo = AesCrypto.encrypt(authinfo);

	      Cookie authinfo_cookie = new Cookie("authinfo", authinfo);
	      authinfo_cookie.setPath("/");
	      response.addCookie(authinfo_cookie);
		}
	

	// 관리자 권한 체크
	public void adminAuthorityCheck(HttpServletRequest request, HttpServletResponse response, String requestUri, Class<?> thisClass, Method thisMethod) throws Exception{
		String[] ex = new String[] {
				  "/am/manager/login-proc.do"
				, "/am/manager/login.do"
				, "/nls/clientLogin.do"
				, "/nls/proc-login.do"
				, "/co/oz/st-trans.do"
				, "/co/oz/st-trans-le.do"
				, "/co/st-trans.do"
				, "/co/st-trans-le.do"
				, "/co/save-open-text.do"
				, "/co/get-open-text.do"
				, "/co/del-open-text.do"
		};
		
		if (Arrays.asList(ex).indexOf(request.getRequestURI()) < 0) { 
			Map<String, Object> admn = SessionsAdmin.getSessionAdmn();
			
 			if (admn == null) {
//				boolean encryted = propertiesService.getBoolean("sso.cookie.encrypted");
//				CookieManager.setEncStatus(encryted);
//				String loginId = CookieManager.getCookieValue(SECode.USER_ID, request);
//				
//				if (loginId == null || Strings.isEmpty(loginId)) {
//					return;
//				} else {
//					// 로그인 처리
//					Map<String, Object> userInfo = loginManagerService.loginProc(loginId, request.getServerName().toString());
//					//setCookie(loginId, request, response);
//					SessionsAdmin.setSessionAdmin(request, userInfo); // 관리자 정보를 세션에 저장한다.
//					
//					if (userInfo != null) {
//						// 관리자 로그인 이력 저장
//						this.loginManagerService.insertLoginManagerHistroy(loginId, request.getRemoteAddr(), "Y");
//					} else {
//					    throw new LoggingException(new String[] { "CO", "BO", "login-proc.do", "로그인 처리" }, new RuntimeException("Invalid wptal ID"));
//					}				
//				}
				if (propertiesService.getBoolean("proc.session.expired")) {
					throw new SessionException();
				}
			}
		}
	}


	// SNS 회원 MyPage 접근 체크
	public void accessMyPageSNSCheck(HttpServletRequest request, String requestUri, String deviceType) throws Exception{

		if(SessionsUser.isLogin(request)){
			// 회원 구분값
			int memGbn = StringUtil.getInt(SessionsUser.getSessionUserValue(request, "MEM_MST_MEM_GBN"), 0);

			if(requestUri.indexOf("mypage") > 0 && memGbn == Code.MEMBER_TYPE_SNS){
				throw new AccessMypageDeniedException(deviceType);
			}
		}
	}
}
