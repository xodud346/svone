<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>멀티 텍스트 팝업</title>
</head>
<body class="page-popup">
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
				<h3 class="title"></h3>
				<textarea class="textarea" name="textContents" id="textContents" style="height: 350px; width:100%;"></textarea>
                <div class="mt10">
                	※ 입력한 데이터가 검색조건에 적용됩니다.<br>
                	S-MRO 조회 기능과 동일하게 사용하실 수 있습니다.
                </div>
                <div class="wrap text-center mt30">
					<a href="javascript:apply();" class="button large primary"><span>적용</span></a>
				</div>
            </div>
        </div>
    </div>
<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>

<script type="text/javascript">
$(function(){
	var $idVal = "${commandMap.idVal}";
	var $id = "${commandMap.id}";
	
	if("" != $idVal) {
		$("#textContents").val($idVal.replaceAll(",", "\n"));
	}
	 
    // 선택 data 부모창으로 return
	apply = function () {
    	var $textContents = $("#textContents").val();
    	
    	if("" == $textContents.trim()) {
    		alert("적용할 내용이 없습니다.");
 			return false;
    	}
    	
    	var obj		= new Object();
		obj.id		= $id;
		obj.data	= $textContents.replaceAll("\n", ",");
    	
    	// 사업장 조회 팝업 return function
    	window.opener.fnResultText(obj);
		self.close();
    }
    
});
</script>
</body>
</html>
