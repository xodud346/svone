<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css">
<!--
-->
</style>
</head>
<body class="page-login"><!-- body class, 중요 -->

<div class="bg css-bg-slideshow"><!-- background slideshow -->
	<div class="item"><span></span></div>
	<div class="item"><span></span></div>
	<div class="item"><span></span></div>
	<div class="item"><span></span></div>
	<div class="item"><span></span></div>
	<div class="item"><span></span></div>
</div><!-- // background slideshow -->

<div class="container">
	<div class="body">
		<div class="inner">
			<div class="logo">
				<img src="<c:out value="${adminLoginLogo}" />" alt="DingDong" />
			</div>
			<form id="frm" name="frm" method="post">
				<fieldset>
					<legend>로그인 폼</legend>
					<p>
						<input type="text" name="ADM_MST_ID" id="ADM_MST_ID" placeholder="아이디" maxlength="30" value=""/>
					</p>
					<p>
						<input type="password" name="ADM_MST_PWD" id="ADM_MST_PWD" placeholder="비밀번호" maxlength="10" value=""/>
					</p>
					<p>
						<a href="javascript:goLogin();" class="button primary block"><span>로그인</span></a>
					</p>
				</fieldset>
			</form>				
		</div>
	</div>
	<div class="foot">
		<div class="inner">
			<p>
				COPYRIGHT © MarketPlant All Rights Reserved.
			</p>
		</div>
	</div>
		
	<!-- <div class="page-popup">
		<div class="inner">	
			<div class="innerWrapper ">
				<h2 class="tit03">&nbsp;</h2>
				<h2 class="tit03">&nbsp;</h2>
				<h2 class="tit01 txtCenter">서버 빌드 시간</h2>
				<div class="tableScrWrap mb24">
					<table class="dataTable txtLeft">
						<colgroup>
							<col style="width:60px;">
							<col style="width:130px;">
							<col style="width:130px;">
							<col style="width:60px;">
							<col style="width:60px;">
						</colgroup>
						<thead>
						<tr>
							<th scope="col" rowspan="2">차수</th>
							<th scope="col" rowspan="2">FO 빌드시간</th>
							<th scope="col" colspan="3">BO</th>
						</tr>
						<tr>
							<th scope="col">빌드시간</th>
							<th scope="col">서버기동</th>
							<th scope="col">UI빌드</th>
						</tr>
						</thead>
						<tbody>
							<tr>								
								<td>1차</td>
								<td>7시</td>
								<td>9시30분(UI 빌드)</td>
								<td>O</td>
								<td>O</td>
							</tr>
							<tr>
								<td>2차</td>
								<td>12시</td>
								<td>12시30</td>
								<td>O</td>
								<td></td>
							</tr>
							<tr>
								<td>3차</td>
								<td>오후 3시/6시/9시</td>
								<td>오후 6시30분(UI 빌드)</td>								
								<td>O</td>
								<td>O</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>	
		</div>
	</div>	 -->
	<!-- <div class="page-popup">
		<div class="inner">	
			<div class="innerWrapper ">
				<h2 class="tit03">&nbsp;</h2>
				<h2 class="tit03">&nbsp;</h2>
				<h2 class="tit01 txtCenter">권한별 아이디</h2>
				<div class="tableScrWrap mb24">
					<table class="table txtLeft">
						<colgroup>
							<col style="width:100px;">
							<col style="width:100px;">
							<col style="width:300px;">
						</colgroup>
						<thead>
						<tr>
							<th scope="col">아이디</th>
							<th scope="col">성명</th>
							<th scope="col">권한</th>
						</tr>
						</thead>
						<tbody>
							<tr>								
								<td>admin</td>
								<td>SM</td>
								<td>전체권한</td>
							</tr>
							<tr>
								<td>01200016</td>
								<td>김두환</td>
								<td>마케팅</td>
							</tr>
							<tr>
								<td>01100676</td>
								<td>박혜림</td>
								<td>상품</td>
							</tr>
							<tr>
								<td>01400208</td>
								<td>김범준</td>
								<td>영업</td>
							</tr>
							<tr>
								<td>00400050</td>
								<td>홍정기</td>
								<td>구매</td>
							</tr>
							<tr>
								<td>01400130</td>
								<td>김미정</td>
								<td>MD</td>
							</tr>
							<tr>
								<td>00400014</td>
								<td>민경준</td>
								<td>SSP기획팀</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>	
		</div>
	</div>		 -->
	
	
	
		
</div>
<script src="/am/js/common/jquery.validate.js"></script>
<script>
$(function(){

	$frm = $("#frm");

	// 폼체크
	$frm.validate({
		rules: {
			ADM_MST_ID:{required:true}, // 관리자 아이디
			ADM_MST_PWD:{required:true}, // 관리자 비밀번호
		},
		messages :{
			ADM_MST_ID:{required:"아이디를 입력해주시기 바랍니다." }, // 아이디
			ADM_MST_PWD : {required:"비밀번호를 입력해주시기 바랍니다."} // 비밀번호
		}
	});

	// 아이디 엔터 이벤트
	$("#ADM_MST_ID").on("keydown", function (e) {
		if(e.keyCode == 13){
			goLogin();
			return false;
		}
	});

	// 비밀번호 엔터 이벤트
	$("#ADM_MST_PWD").on("keydown", function (e) {
		if(e.keyCode == 13){
			goLogin();
			return false;
		}
	});

	goLogin = function(){
		if($frm.valid()){
			<c:if test="${actionUrl==null || empty actionUrl}">
			$frm.attr({"action":"<c:out value="${serverDomain}" />/am/manager/loginProcess", "target":"_self", "method":"post"}).submit();
			</c:if>
			
			<c:if test="${actionUrl!=null && not empty actionUrl}">
			$frm.attr({"action": "<c:out value="${actionUrl}" />", "target":"_self", "method":"post"}).submit();
			</c:if>
		}
	};
});
//-->
</script>
</body>
</html>