<%@ page language ="java"  pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>
<%
	request.setAttribute("ADM_MST_ID", "admin");
	request.setAttribute("ADM_MST_PWD", "admin1216");
	pageContext.forward("/am/manager/ssoLogin.do");
// 	pageContext.forward("/am/manager/loginProcess.do");
%>
<!-- <html> -->
<!-- 	<head> -->
<!-- 		<script type="text/javascript"> -->
// 			window.onload=function(){
// 				frm.submit();
// 			}
<!-- 		</script> -->
<!-- 	</head> -->
<!-- 	<body> -->
<!-- 		<form id="frm" name="frm" method="post" action="/am/manager/loginProcess"> -->
<!-- 			<input type="hidden" name="ADM_MST_ID" id="ADM_MST_ID" placeholder="아이디" maxlength="10" value="admin"/> -->
<!-- 			<input type="hidden" name="ADM_MST_PWD" id="ADM_MST_PWD" placeholder="비밀번호" maxlength="10" value="admin1216"/> -->
<!-- 		</form> -->
<!-- 	</body> -->
<!-- </html> -->