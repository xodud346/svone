
<%@page import="org.apache.poi.util.SystemOutLogger"%>
<%@ page language ="java"  pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>

<%@ page import="java.util.*" %>
<%@ page import="com.initech.eam.nls.*" %>
<%@ page import="com.initech.eam.nls.command.*" %>
<%@ page import="com.initech.eam.smartenforcer.*" %>

<%@ page import="java.io.*, java.util.*" %>

<%@ include file="config.jsp" %>
<%
	String sso_id = null;
	String uurl = null;

	//1.SSO ID 수신
	sso_id = getSsoId(request);
	//2.UURL 수신
	//uurl = request.getParameter("uurl");
	uurl = request.getParameter("uurl") != null ? request.getParameter("uurl") : "" ;
	System.out.println("sso_id="+sso_id);


	if (sso_id == null ) {
		System.out.println("*================== [login_exec.jsp]  로그인 페이지 이동");
		//3.SSO ID 가 없다면 로그인 페이지로 이동
		if (uurl == null || "".equals(uurl) )	uurl = ASCP_URL; //
		System.out.println("uurl="+uurl);
		goLoginPage(response, uurl);

		return;
	} else {
		//4.쿠키 유효성 확인 :0(정상)
		String retCode = getEamSessionCheck(request,response);
		System.out.println("*================== [login_exec.jsp]  retCode : [" + retCode + "]");
		if(!retCode.equals("0")){
			goErrorPage(response, Integer.parseInt(retCode));
			return;
		}
		//5.업무시스템에 읽을 사용자 아이디를 세션으로 생성
		String EAM_ID = (String)session.getAttribute("SSO_ID");
		//out.println("*================== [login_exec.jsp]  EAM_ID : [" + EAM_ID + "]");
		if(EAM_ID == null || EAM_ID.equals("")) {
			session.setAttribute("SSO_ID", sso_id);
		}
		//out.println("*================== [SSO_ID] : [" + sso_id + "]");
		System.out.println("*================== [SSO_ID] : [" + sso_id + "]");

		//업무시스템 로직 수행 start
		request.setAttribute("ADM_MST_ID", sso_id);
// 		request.setAttribute("ADM_MST_ID", "admin");
// 		request.setAttribute("ADM_MST_PWD", "admin1216");
		pageContext.forward("/am/manager/ssoLogin.do");
		//업무시스템 로직 수행 end
	}

%>
