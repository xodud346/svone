package com.ssp.bo.co.login.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.initech.eam.nls.CookieManager;
import com.initech.eam.smartenforcer.SECode;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.legacy.mall.common.annotations.AccessLevelAdmin;
import com.ssp.core.legacy.mall.model.Admin.ROLEADMIN;

@Controller
@AccessLevelAdmin(ROLEADMIN.administrator)
public class SsoEmulController {
  @Autowired
  private SspPropertyService propertiesService;
    
    
  @RequestMapping("/nls/clientLogin")
  public ModelAndView clientLogin(HttpServletRequest request, HttpServletResponse response) {
    ModelAndView mv = new ModelAndView();
    mv.addObject("actionUrl", "/nls/proc-login.do");
    mv.setViewName("/am/manager/login");

    return mv;
  }
  
  @RequestMapping("/nls/proc-login")
  public void procLogin(HttpServletRequest request, HttpServletResponse response) throws IOException {
      String ssoDomain = propertiesService.getString("sso.domain");
      String ssoServerUrl = propertiesService.getString("sso.service.url");
      String ascpUrl = propertiesService.getString("sso.ascp.url");
      String loginId = request.getParameter("ADM_MST_ID");
      boolean encryted = propertiesService.getBoolean("sso.cookie.encrypted");
      
      CookieManager.setEncStatus(encryted);
      CookieManager.addCookie(SECode.USER_ID, loginId, ssoDomain, response);
      
      request.getSession().setAttribute("sso", "sso");
      response.sendRedirect(ssoServerUrl + ascpUrl);   
  }
}
