<%@page import="org.apache.poi.util.SystemOutLogger"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>
<html>
<body>
<h2>알수 없는 에러가 발생하였습니다. 시스템 관리자에게 문의하세요.</h2>
<%
	String errorMessage = "";
	System.out.println("=================ERROR PAGE START======================");
	System.out.println(exception.getMessage());
	System.out.println("=================ERROR PAGE END======================");
	exception.printStackTrace();

	if (exception.getMessage() != null && !exception.getMessage().isEmpty()) {
		errorMessage = exception.getMessage();
	}
%>
<h2><%=errorMessage%></h2>
</body>
</html>
