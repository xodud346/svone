<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<meta property="og:title" content="<spring:message code="brwj.title.name"/>">
<meta property="og:url" content="">
<meta property="og:image" content="">
<meta property="og:description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="content-language" content="kr" />
<meta http-equiv="imagetoolbar" content="no" />
<title><spring:message code="brwj.title.name"/></title>
<meta name="title" content="<spring:message code="brwj.title.name"/>" />
<meta name="description" content="SERVEONE" />
<meta name="copyright" content="SERVEONE" />
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
<link rel="author" href="http://mall.serveone.co.kr"/>
<link rel="publisher" href="http://mall.serveone.co.kr" />
<link rel="apple-touch-icon" href="/am/img/apple-touch-icon.png" />
<link rel="stylesheet" href="/am/css/normalize-3.0.2.css" />
<link rel="stylesheet" href="/am/css/fontium.css" /><!-- fontium css -->
<!--
<link rel="stylesheet" href="/am/css/epass.base-0.1.css" />
-->
<link rel="stylesheet" href="/am/css/style.css" /><!-- less compiled css -->
<style type="text/css">
<!--
-->
.td_ellipsis {
	overflow: hidden;
	text-overflow: ellipsis;
	-o-text-overflow: ellipsis;
	word-wrap: normal !important;
	word-break: keep-all;
	white-space: nowrap;
}
.file-list-title {
	cursor: pointer;
}
</style>
<script>document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,'js');</script>
<script src="/am/js/vendor/modernizr.custom.2.8.3.min.js"></script>
<!--[if (gte IE 6)&(lte IE 8)]>
	<script src="/am/js/vendor/jquery-1.11.2.min.js"></script>
<![endif]-->
<!--[if (gt IE 8)|!(IE)]> <!--> <script src="/am/js/vendor/jquery-2.1.3.min.js"></script> <!--<![endif]-->
<script>window.jQuery || document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"><\/script>')</script>

<script>

$(document).ready(function(){
	$(".loadingWrap").hide()
}).ajaxStart(function(){
	$(".loadingWrap").show();
}).ajaxStop(function(){
	$(".loadingWrap").hide();
});

$.ajaxSetup({
	beforeSend : function(xhr){
		xhr.setRequestHeader("AJAX" , true);
	},
	error : function(xhr , status , err){
		$(".loadingWrap").hide();
		console.log("ajax error 발생---------------");
		console.log(xhr.status);
		if(xhr.status == 401){
			console.log("401 error");
		}else if(xhr.status == 403){
			console.log("403 error");
		}else{
			//예외 발생
			console.log(xhr.status);
		}
		console.log(err);
		console.log(xhr.responseText);
		console.log("==================");
	}
});

</script>

<div class="loadingWrap">
	<div class="loadingDonut"></div>
</div>
