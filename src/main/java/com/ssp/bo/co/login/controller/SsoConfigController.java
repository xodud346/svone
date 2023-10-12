package com.ssp.bo.co.login.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.initech.eam.api.NXContext;
import com.initech.eam.api.NXNLSAPI;
import com.initech.eam.nls.CookieManager;
import com.initech.eam.smartenforcer.SECode;
import com.ssp.core.common.property.SspPropertyService;

@Controller
public class SsoConfigController {
  private final Logger logger = LoggerFactory.getLogger(SsoConfigController.class);  
    
  @Autowired
  private SspPropertyService propertiesService;
  
  
  
  private String toa = "1";
  
    
  private NXContext getContext() {
    NXContext context = null;
    
    try {
      String ndUrl1 = propertiesService.getString("sso.nd.url1");
      String ndUrl2 = propertiesService.getString("sso.nd.url2");
        
      List<String> serverurlList = new ArrayList<String>();
      serverurlList.add(ndUrl1); 
      serverurlList.add(ndUrl2);
          
      context = new NXContext(serverurlList);
    } catch (Exception e) {
      e.printStackTrace();
    }

    return context;
  }

  /**
   * 통합 SSO 로그인페이지 이동
   * @param response
   * @param uurl
   * @throws Exception
   */
  private void goLoginPage(HttpServletResponse response, String uurl) throws Exception {
    String nlsUrl = propertiesService.getString("sso.nls.url");
    String nlsLoginUrl = propertiesService.getString("sso.nls.login.url");
    String ssoDomain = propertiesService.getString("sso.domain");
    
    CookieManager.addCookie(SECode.USER_URL, uurl, ssoDomain, response);
    CookieManager.addCookie(SECode.R_TOA, toa, ssoDomain, response);
    response.sendRedirect(nlsUrl + nlsLoginUrl);
  }

  /**
   * SSO 에러페이지 URL
   * @param response
   * @param errorCode
   * @throws Exception
   */
  private void goErrorPage(HttpServletResponse response, int errorCode) throws Exception {
    String nlsUrl = propertiesService.getString("sso.nls.url");
    String nlsErrorUrl = propertiesService.getString("sso.nls.error.url");
    String ssoDomain = propertiesService.getString("sso.domain");
      
    CookieManager.removeNexessCookie(ssoDomain, response);
    response.sendRedirect(nlsUrl + nlsErrorUrl + "?errorCode=" + errorCode);
  }

  /**
   * 통합 SSO ID 조회 SSOTEST
   * @param request
   * @return
   */
  private String getSsoId(HttpServletRequest request) {
    String ssoId = null;
    CookieManager.setEncStatus(propertiesService.getBoolean("sso.cookie.encrypted"));  //추가
    ssoId = CookieManager.getCookieValue(SECode.USER_ID, request); // SSOTEST
    
    return ssoId;
  }
  
  /**
   * 통합인증 세션을 체크 하기 위하여 사용되는 API
   * @param request
   * @param response
   * @return
   */
  private String getEamSessionCheck(HttpServletRequest request, HttpServletResponse response) {
    String retCode = "";
    NXContext context = null;
    
    try {
      context = getContext();
      NXNLSAPI nxnlsapi = new NXNLSAPI(context);
      retCode = nxnlsapi.readNexessCookie(request, response, 0, 0);
    } catch (Exception npe) {
      npe.printStackTrace();
    }
      
    return retCode;
  }
  
  @RequestMapping("/sso/login-exec.do")
  public void loginExec(HttpServletRequest request, HttpServletResponse response) throws Exception {
    String ssoId = null;
    String uurl = null;
    
    String serverUrl = propertiesService.getString("sso.server.url");
    String ascpUrl = propertiesService.getString("sso.ascp.url");
    
    try {
      ssoId = getSsoId(request); //1.SSO ID 수신
      uurl = request.getParameter("uurl"); //2.UURL 수신
      uurl = request.getParameter("uurl") != null ? request.getParameter("uurl") : "";
      
      if (ssoId == null ) {
        logger.info("로그인 페이지 이동");
        //3.SSO ID 가 없다면 로그인 페이지로 이동
        goLoginPage(response, serverUrl + ((uurl == null || "".equals(uurl)) ? ascpUrl : uurl));                
        return;
      } else {
        //4.쿠키 유효성 확인 :0(정상)
        String retCode = getEamSessionCheck(request, response);
        logger.info("retCode : [{}]", retCode);
        
        if (!retCode.equals("0")) {
          goErrorPage(response, Integer.parseInt(retCode));
          return;
        }
        
        //5.업무시스템에 읽을 사용자 아이디를 세션으로 생성
        String eamId = (String) request.getSession(false).getAttribute("SSO_ID");
        
        if (eamId == null || eamId.equals("")) {
          request.getSession(false).setAttribute("SSO_ID", ssoId);
        }
        
        logger.info("[SSO_ID] : [{}]", ssoId);
      }
    } catch (Exception e) {
      throw e;
    }
  }
}
