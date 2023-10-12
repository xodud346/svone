package com.ssp.bo.co.login;

import java.io.IOException;
import java.util.Locale;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.CredentialsExpiredException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import com.ssp.bo.co.login.service.LoginManagerService;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.legacy.mall.model.Code;

public class LoginFailureHandler implements AuthenticationFailureHandler {

	private String loginidname;
	private String errormsgname;
	private String defaultFailureUrl;

	@Autowired
	MessageSource messageSource;

	@Resource(name="passwordEncoder")
	private PasswordEncoder passwordEncoder;

	@Resource(name="loginManagerService")
	private LoginManagerService loginManagerService;

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@SuppressWarnings("deprecation")
	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception)
			throws IOException, ServletException {

		Admin logAdmin = new Admin();
		String username = request.getParameter(loginidname);
		String password = exception.getAuthentication().getCredentials().toString();
		String errormsg = request.getParameter(errormsgname);
		logger.trace("onAuthenticationFailure password == {}", password);
		logger.trace("onAuthenticationFailure password Enc == {}", passwordEncoder.encode(password));

		if(exception instanceof BadCredentialsException) {
			errormsg = messageSource.getMessage("errors.login.BadCredentials", null, Locale.KOREAN);
			logAdmin.setLoginStateCode(Code.LOGIN_PW_INCORRECT);
		} else if(exception instanceof InternalAuthenticationServiceException) {
//            errormsg = MessageUtils.getMessage("errors.login.BadCredentials");
		} else if(exception instanceof DisabledException) {
			errormsg = messageSource.getMessage("errors.login.Disaled", null, Locale.KOREAN);
			logAdmin.setLoginStateCode(Code.LOGIN_ID_INVALID);

		} else if(exception instanceof CredentialsExpiredException) {
//            errormsg = MessageUtils.getMessage("errors.login.CredentialsExpired");
		} else {
			errormsg = messageSource.getMessage("errors.login.other", null, Locale.KOREAN);
			logAdmin.setLoginStateCode(Code.LOGIN_FAIL);
		}

		request.setAttribute(loginidname,  username);
		request.setAttribute(errormsgname, errormsg);

		// 로그인한 사용자 아이디, 초기메뉴, 레벨, 로그인 유무를 저장한다.
		logAdmin.setADM_MST_ID(username);
		logAdmin.setRoleAdmin(null);
		logAdmin.setADM_MST_LOGIN_YN("Y");

		try {
			loginManagerService.insertLoginManagerHistroy(logAdmin.getADM_MST_ID(), request.getRemoteAddr(), logAdmin.getADM_MST_ID());
		} catch (Exception e) {
			logger.error("onAuthenticationFailure insert LoginManagerHistroy error ########################");
		}

		request.getRequestDispatcher(defaultFailureUrl).forward(request, response);

	}

	public String getLoginidname() {
		return loginidname;
	}

	public void setLoginidname(String loginidname) {
		this.loginidname = loginidname;
	}

	public String getErrormsgname() {
		return errormsgname;
	}

	public void setErrormsgname(String errormsgname) {
		this.errormsgname = errormsgname;
	}

	public String getDefaultFailureUrl() {
		return defaultFailureUrl;
	}

	public void setDefaultFailureUrl(String defaultFailureUrl) {
		this.defaultFailureUrl = defaultFailureUrl;
	}

}
