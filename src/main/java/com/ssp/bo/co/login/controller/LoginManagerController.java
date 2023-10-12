package com.ssp.bo.co.login.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.initech.eam.nls.CookieManager;
import com.initech.eam.smartenforcer.SECode;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.controller.CoCommonController;
import com.ssp.bo.co.login.service.LoginManagerService;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.BaseController;
import com.ssp.core.common.annotations.RequestParams;
import com.ssp.core.common.exception.LoggingException;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.legacy.mall.common.annotations.AccessLevelAdmin;
import com.ssp.core.legacy.mall.model.Admin.ROLEADMIN;
import com.ssp.core.util.AesCrypto;
import com.ssp.core.util.StringUtil;

/**
 * @PackageName: com.ssp.core.legacy.mall.am.manager.controller
 * @FileName : LoginManagerController.java
 * @Date : 2019. 3. 21.
 * @프로그램 설명 : 관리자 로그인을 처리하는 Controller Class
 * @author jangsin
 */
@Controller
@AccessLevelAdmin(ROLEADMIN.guest)
public class LoginManagerController extends BaseController {
    private final Logger logger = LoggerFactory.getLogger(CoCommonController.class);
	
	@Resource(name="loginManagerService")
	LoginManagerService loginManagerService;

	@Resource(name = "propertiesService")
	protected SspPropertyService propertiesService;

	@Resource(name="userLoginService")
	private UserDetailsService userLoginService;

	@Resource(name="loginSuccessHandler")
	private AuthenticationSuccessHandler loginSuccessHandler;

	@Resource(name="loginFailureHandler")
	private AuthenticationFailureHandler loginFailureHandler;
	
	
	/**
	* <pre>
	* 1. MethodName : login
	* 2. ClassName  : LoginManagerController.java
	* 3. Comment    : 관리자 로그인 페이지로 이동한다.
	* 4. 작성자       : jangsin
	* 5. 작성일       : 2019. 3. 21.
	* </pre>
	*
	* @param request
	* @param commandMap
	* @return
	* @throws Exception
	*/
	@RequestMapping("/am/manager/login")
	public ModelAndView login (HttpServletRequest request, HttpServletResponse response, Map<String, Object> commandMap) throws Exception{
      String ssoId = null;
	  boolean encryted = propertiesService.getBoolean("sso.cookie.encrypted");
	  String nlsUrl = propertiesService.getString("sso.nls.url");
	  String loginUrl = propertiesService.getString("sso.nls.login.url");
	  String menuId = StringUtil.getString(request.getParameter("menuId"));
      String queryStr = "";
      
      CookieManager.setEncStatus(encryted);
      ssoId = CookieManager.getCookieValue(SECode.USER_ID, request);

      if (ssoId == null || StringUtils.isEmpty(ssoId)) {
          response.sendRedirect(nlsUrl + loginUrl);   
          return null;
      } else {     
      	    
          ModelAndView mv = new ModelAndView();
    
          if(SessionsAdmin.isLoginAdmin(request)){
      		if(!"".equals(menuId)) {
      			queryStr = "?menuId="+menuId;
      		}
      		
        	mv.addObject("returnUrl", "/ui/index.html"+queryStr);
  			mv.setViewName("/am/common/result");
          } else {
              response.sendRedirect(nlsUrl + loginUrl);
          }
    
       
          return mv;
      }
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
	
	/**
	* <pre>
	* 1. MethodName : loginProc
	* 2. ClassName  : LoginManagerController.java
	* 3. Comment    : 관리자 로그인을 처리한다.
	* 4. 작성자       : jangsin
	* 5. 작성일       : 2019. 3. 21.
	* </pre>
	*
	* @param request
	* @param commandMap
	* @return
	* @throws Exception
	*/
	@RequestMapping(value="/am/manager/login-proc", method = RequestMethod.GET)
	public void loginProc (HttpServletRequest request, HttpServletResponse response, @RequestParams Map<String, Object> commandMap) throws Exception{
      String loginId = null;
      boolean encryted = propertiesService.getBoolean("sso.cookie.encrypted");
      String nlsUrl = propertiesService.getString("sso.nls.url");
      String loginUrl = propertiesService.getString("sso.nls.login.url");
      String queryStr = StringUtil.getString(request.getQueryString());
      
      CookieManager.setEncStatus(encryted);
      loginId = CookieManager.getCookieValue(SECode.USER_ID, request);

      if (StringUtils.isEmpty(loginId)) {
        response.sendRedirect(nlsUrl + loginUrl);   
      }  
	    
	    ModelAndView mv = new ModelAndView();

		boolean loginCheck = false;

		if("".equals(loginId)){
		    throw new LoggingException(new String[] { "CO", "BO", "login-proc.do", "로그인 처리" }, new RuntimeException("Empty wptal ID"));
		} else {
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
			
			// 로그인 처리
			Map<String, Object> userInfo = loginManagerService.loginProc(loginId, request.getServerName().toString());
			setCookie(loginId, request, response);
			SessionsAdmin.setSessionAdmin(request, userInfo); // 관리자 정보를 세션에 저장한다.
			
			logger.debug("userInfo :{}", userInfo);
			
			if (userInfo != null){
				// 관리자 로그인 이력 저장
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
				
				//this.loginManagerService.insertLoginManagerHistroy(loginId, request.getRemoteAddr(), "Y");
			} else {
			    throw new LoggingException(new String[] { "CO", "BO", "login-proc.do", "로그인 처리" }, new RuntimeException("Invalid wptal ID"));
			}
		}
		
		if(!"".equals(queryStr)) {
			queryStr = "?"+queryStr;
		} else {
			queryStr = "";
		}
		response.sendRedirect("/am/manager/login.do"+queryStr);
	}

	/**
	* <pre>
	* 1. MethodName : logout
	* 2. ClassName  : LoginManagerController.java
	* 3. Comment    : 관리자 로그아웃을 처리한다.
	* 4. 작성자       : jangsin
	* 5. 작성일       : 2019. 4. 1.
	* </pre>
	*
	* @param request
	* @param commandMap
	* @return
	*/
	@RequestMapping("/am/manager/logout")
	public ModelAndView logout(HttpServletRequest request, HttpServletResponse response, @RequestParams Map<String, Object> commandMap){
		ModelAndView mv = new ModelAndView();
		// 세션을 삭제한다.
		SessionsAdmin.setSessionAdminClear(request);

		mv.addObject("returnUrl", request.getAttribute("serverDomain") + "/am/manager/login.do");
		mv.setViewName("/am/common/result");

		// 쿠키 삭제
		Cookie authinfo_cookie = new Cookie("authinfo", "");
		authinfo_cookie.setPath("/");
		response.addCookie(authinfo_cookie);
		
		String ssoDomain = propertiesService.getString("sso.domain");
		boolean encryted = propertiesService.getBoolean("sso.cookie.encrypted");
	    
	    CookieManager.setEncStatus(encryted);
		CookieManager.removeCookie(SECode.USER_ID, ssoDomain, response);

		return mv;
	}
	
	@RequestMapping("/am/manager/login-info")
    public NexacroResult loginInfo(HttpServletRequest request, HttpServletResponse response) throws Exception {
	    NexacroResult ret = new NexacroResult();
	    
	    try {
            Map<String, Object> sysDateList = this.loginManagerService.selectSystemDateList();
	    	
	    	ret.addDataSet("ds_output" , SessionsAdmin.getSessionAdmn());
	    	ret.addDataSet("ds_output1", sysDateList);

			if( SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean("ssp.run.develop") ) {
				SessionsAdmin.setSessionAdminLocal();
			}
	    } catch (Exception e){
	        throw new LoggingException(new String[] { "CO", "BO", "login-info", "로그인 사용자 정보 조회" }, e);
	    }
	    
	    return ret;
	}
}
