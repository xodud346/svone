<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html style="height:100%">
<head>
<script src="/pc/js/jquery-2.0.3.min.js"></script>
<script>
	$("document").ready(function() {
		$("#inform").submit();
	});
</script>
</head>
<body>
	<form name="inform" id="inform" method="POST" action="${hostSsp}/ssp/manager/dlgteLoginProcess.do">
		<input type="hidden" id="dlgteMbrId" name="dlgteMbrId" value="${dlgteMbrId}">
		<input type="hidden" id="loginMbrId" name="loginMbrId" value="${loginMbrId}">
	</form>
</body>
</html>
