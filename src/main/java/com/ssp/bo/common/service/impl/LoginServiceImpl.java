package com.ssp.bo.common.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.ssp.bo.co.login.service.LoginManagerService;
import com.ssp.core.co.dao.CommonDAO;

public class LoginServiceImpl implements UserDetailsService {

	@Resource(name="commonDAO")
	private CommonDAO commonDAO;

	@Resource(name="loginManagerService")
	LoginManagerService loginManagerService;

	@Resource(name="passwordEncoder")
	private PasswordEncoder passwordEncoder;

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Map<String, Object> admin = new HashMap<>();
		admin.put("username", username);

		logger.trace("loadUserByUsername password == {}", passwordEncoder.encode("admin1216"));
		logger.trace("loadUserByUsername password =={}", passwordEncoder.encode("manager1216"));

		UserDetails userInfo = null;
		try {
			userInfo = (UserDetails)commonDAO.select("LoginManager.selectLoginManagerInfoForSec", (Object)admin);
			// XXX 임시처리 - OGG를 통해 수신된 운영자(BO사용자) 정보에는 패스워드가 존재하지 않음.
			if (userInfo != null && userInfo.isEnabled() && (userInfo.getPassword() == null || userInfo.getPassword().isEmpty())) {
				admin.put("ADM_MST_ID", username);
				Map<String, Object> usrOrignInfo = (Map<String, Object>) commonDAO.select("com.ssp.bo.co.LoginManager.selectLoginManagerInfo", (Object)admin);
				String newEncPwd = passwordEncoder.encode((String) usrOrignInfo.get("ADM_MST_PWD"));
				admin.put("password", newEncPwd);
				commonDAO.update("LoginManager.updateEncPwd", (Object)admin);

				userInfo = (UserDetails)commonDAO.select("LoginManager.selectLoginManagerInfoForSec", (Object)admin);
			}

		} catch (Exception e) {
			throw new UsernameNotFoundException(username);
		}

		return userInfo;
	}

}
