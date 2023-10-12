<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>상품군 SSP속성 관리</title>
</head>
<body class="page-popup">
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
				<h2 class="title"><span>상품군 SSP속성 관리</span></h2>
                <h3 class="title">상품군 사용 SSP속성 (<i class="require"><em>*</em></i>는 필수항목)</h3>
                <div id="selAttr" class="selAttrInner">
                	<c:forEach var="item" items="${selList}" varStatus="status">
                		<a href="javascript:;" onclick="attrDel(this);" id="attr_${item.id}" class="button small btnDelete" data-id="${item.id}" data-nm="${item.nm}" data-mand="${item.mand}"><span>${item.nm}</span><c:if test="${'Y' eq item.mand}"><i class="require"></i></c:if></a>
                	</c:forEach>
                </div>
                
                <div class="grid section-button-search">
                	<form id="frm" name="frm">
                		<input type="hidden" id="searchYN" name="searchYN" value=""/>
                		<input type="hidden" id="prdClsCd" name="prdClsCd" value=""/>
	                	<input type="text" class="text" id="searchTxt" name="searchTxt" value="" />
	                	<a href="javascript:search();" class="button small primary"><span>조회</span></a>
	                </form>
                </div>
                <!-- 조회 결과 영역 -->
                <div id="attrList">
                	<%@ include file="/WEB-INF/jsp/am/com/popUp/prd/attrPopupList.jsp" %>
                </div>
				<div class="grid text-center"><!-- 검색 하단 버튼 -->
                    <a href="javascript:self.close();" class="button small"><span>취소</span></a>
                    <a href="javascript:attrSel();" class="button small primary"><span>저장</span></a>
                </div>
            </div>
        </div>
    </div>

<script src="/am/js/ui.js"></script>
<script src="/am/js/common.js"></script>

<script type="text/javascript">
$(function(){
	var $frm = $("#frm");
	
	// 검색
    search = function() {
		$("#searchYN").val("Y");
		
		$("#attrList").load("/am/com/popUp/prd/attrPopupList.do", $frm.serialize(), function(){
			
		});
    };
    
    attrAdd = function (id, nm) {
    	var existYn = true;
    	
    	if( $("#selAttr a").length > 0 ){
    		$("#selAttr a").each(function(index, data){
				if( id == $(this).data('id')) {
					existYn = false;
				}
			})
		}
    	
    	var mand = $("#mandYN_"+id).is(":checked") ? 'Y' : 'N';
    	
    	var innerHtml = "";
    	
    	if(existYn) {
    		innerHtml += '<a href="javascript:;" onclick="attrDel(this);" id="attr_'+id+'" class="button small btnDelete" data-id="'+id+'" data-nm="'+nm+'" data-mand="'+mand+'"><span>'+nm+'</span>';
        	if('Y' == mand) {
        		innerHtml += '<i class="require"></i>';
        	}
        	innerHtml += '</a>';
        	
        	$("#selAttr").append(innerHtml);
    	}
    };
    
 	// 삭제
    attrDel = function (thisData) {
    	thisData.remove();
    }
    
    // 선택 data 부모창으로 return
    attrSel = function () {
    	
		// data 없을경우 return
    	if($("#selAttr a").length < 1 ) {
    		alert("선택된 속성 데이터가 없습니다.")
    		return false;
    	}
    	
    	var params = new Array();
    	var obj;
    	
    	$("#selAttr a").each(function(idx, data) {
    		obj			= new Object();
			obj.ID		= $(this).data('id');
			obj.NM		= $(this).data('nm');
			obj.MAND	= $(this).data('mand');
			
			params.push(obj);
    	});
    	
    	// 사업장 조회 팝업 return function
    	window.opener.fnResultAttr(params);
		self.close();
    }
});
</script>
</body>
</html>
