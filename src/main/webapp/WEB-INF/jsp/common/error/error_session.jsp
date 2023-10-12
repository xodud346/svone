<%@ page language="java" contentType="text/html; charset=euc-kr" pageEncoding="euc-kr"%>
<html>
<head><title><spring:message code="brwj.title.name"/></title></head>
<body>
<script type="text/javascript">
    alert("세션이 만료되었습니다.");
    location.href='/secure/login.do';
</script>
</body>
</html>
