<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<style type="text/css">
<!--
-->
</style>
<script type="text/javascript">
	sysCnctLogList = function() {
		callAjax({
			type : "POST",
			url : "/am/log/sysCnctLogList.json",
			contentType : "application/x-www-form-urlencoded",
			data : {},
			callback : function(data) {
				console.log("callback", data);
				$("#div1").text("FO 회원 접속 로그 LIST : " + JSON.stringify(data));
			},
		
			onError : function(err) {
				alert("실패");
			}
		});
	}
	
	sysFailLogList = function() {
		callAjax({
			type : "POST",
			url : "/am/log/sysFailLogList.json",
			contentType : "application/x-www-form-urlencoded",
			data : {},
			callback : function(data) {
				console.log("callback", data);
				$("#div2").text("FO 회원 접속실패 로그 LIST : " + JSON.stringify(data));
			},
		
			onError : function(err) {
				alert("실패");
			}
		});
	}
</script>
</head>
<body>
	<!-- body class, 중요 -->

	<div id="header">
		<!-- header -->
		<%@ include file="/WEB-INF/jsp/am/include/top.jsp"%>
	</div>
	<!-- // header -->
	<div id="container">
		<!-- container -->
		<div id="aside" class="aside left">
			<!-- aside -->
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp"%>
		</div>
		<!-- // aside -->
		<!-- wrapper -->
		<div id="wrapper">
			<!-- breadcrumb -->
			<div id="breadcrumb"></div>
			<!-- contents -->
			<div id="contents">
				<div class="container">
					
					<h2 class="title">
						<span>로그인로그조회</span>
					</h2>
				
					<a href="#none" onclick="sysCnctLogList();" id="btnSysCnctLog" class="button small primary">
						<span>FO 회원 접속 로그</span>
					</a> 
					<a href="#none" onclick="sysFailLogList();" id="btnSysFailLog" class="button small primary">
						<span>FO 회원 접속실패 로그</span>
					</a>
					
					<div id="div1" style="padding-top: 20px;"> </div>
					<div id="div2" style="padding-top: 20px;"> </div>
				</div>
			</div>
			<!-- // contents -->
		</div>
		<!-- // wrapper -->
		<div id="quickmenu" class="aside right">
			<!-- quickmenu-->
			<%@ include file="/WEB-INF/jsp/am/include/quick.jsp"%>
		</div>
		<!-- // quickmenu -->
	</div>
	<!-- // container -->
	<div id="footer">
		<%@ include file="/WEB-INF/jsp/am/include/footer.jsp"%>
	</div>

	<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
</body>
</html>