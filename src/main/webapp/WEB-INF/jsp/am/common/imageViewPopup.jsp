<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Image Viewer</title>
</head>
<body class="page-popup">
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
<!-- 				<h2 class="title"><span>Image Viewer</span></h2> -->
                <!-- 이미지 영역 -->
                <div id="imageView">
                	<img alt="" src='<c:url value="/common/display.do?attachFileId=${attachFileId }&fileSn=${attachFileSn }&attachFileSavePath=${attachFileSavePath }" />' width="100%" height="100%" />
                </div>
            </div>
        </div>
    </div>

<script src="/am/js/ui.js"></script>
<script src="/am/js/common.js"></script>

<script type="text/javascript">
$(function(){
// 	console.log('img_domain','${img_domain }');
});
</script>
</body>
</html>
