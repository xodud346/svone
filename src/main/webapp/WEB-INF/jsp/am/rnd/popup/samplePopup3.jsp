<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>상품등록요청 목록 | SERVEONE 협력사사이트</title>
    

</head>

<body>

    <div id="wrap">
        <!-- EOD : skip navigation -->
        <header>
       		<%//@ include file="/WEB-INF/jsp/ssp/partners/include/inc_sticky.jsp" %>
        </header>
        <!-- ## EOD : inc_header.html ## -->

        <div id="container" class="container">
            <div id="contents" class="contents">
                
					<h1>Sample 3</h1>
					<div>
						<a href="javascript:;" onclick="fncTest()">button</a>
					</div>

            </div>
            <!-- EOD : contents -->
        </div>
        <!-- EOD : container -->

    </div>
    <!-- EOD : wrap -->

<script>
function fncTest(){
	window.parent.postMessage({ childData : 'test data' }, '*');
	//targetWindow.postMessage(message, targetOrigin, [transfer]);
	//alert("popup test");
	//window.top.windowClose("1111");
	//parent.windowClose("1111");
	//parent.top.windowClose("1111"); 
	//window.opener.agreeNext("2222");
}

</script>   
    

</body>

</html>