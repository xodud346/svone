<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>주문 번호 조회</title>
</head>
<body class="page-popup">
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
				<h3 class="title"><span>주문 번호 조회</span></h3>
                <form id="searchFrom" name="searchFrom">
                    <input type="hidden" id="cPage" name="cPage" value=""/>
                    <input type="hidden" id="pageSize" name="pageSize" value="10" />
                    <input type="hidden" id="POP_MST_IDX" name="POP_MST_IDX" value="" />
                    <input type="hidden" id="LIMIT_YN" name="LIMIT_YN" value="${commandMap.LIMIT_YN}" />
                    <input type="hidden" name="total" value="<c:out value="${paging.totalRecordCount }" />" />
                    
	       
	                <table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
	                    <colgroup>
	                        <col style="width: 30%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                    		<th><span>사업장ID</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="bzplcId" name="bzplcId" value="" />
	                            </td>
	                    	</tr>
	                    	<tr>
	                    		<th><span>주문 번호</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="odrNo" name="odrNo" value="" />
	                            </td>
	                    	</tr>
	                    </tbody>
	                </table><!-- // table -->
                </form>
                
                <div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:searchClear('searchFrom');" id="searchClear" class="button small"><span>초기화</span></a>
                    <a href="javascript:search();" class="button small primary"><span>조회</span></a>
                </div>
               	<!-- 조회 결과 리스트 -->
				<div id="orderNumList"></div>
				<!-- 선택 주문번호 리스트 -->
				<br>
				<table cellspacing="0" class="table-col table-b" id="selectTable">
					<colgroup>
						<col style="width: auto;" />
						<col style="width: auto;" />
					</colgroup>
					<thead>
						<tr>
							<th >선택</th>
							<th >사업장 ID</th>
							<th >주문 번호</th>
						</tr>
					</thead>
					<tbody id="selectList">
						<c:if test="${not empty resultList }">
							<c:forEach var="list" items="${resultList }" varStatus="status">
								<tr>
									<td><input type="checkbox" class="checkbox checkRow" id="SEL_ODR_NO_${list.odrNo}" name="SEL_ODR_NOs"  data-id="${list.bzplcId}" data-no="${list.odrNo}"/></td>
									<td>${list.bzplcId }</td>
									<td>${list.odrNo }</td>
								</tr>
							</c:forEach>
						</c:if>
					</tbody>
				</table>
				<div class="grid section-button-search">
					<a href="javascript:odrNoDel();" id="oprUntDel" class="button small"><span>삭제</span></a>
				</div>
				<div class="section-button">
					<div class="wrap text-center">
						<a href="javascript:odrNoSel();" class="button primary"><span>선택</span></a>
					</div>
				</div>								
            </div>
        </div>
    </div>
<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>

<script type="text/javascript">
$(function(){
	
	var $searchFrom = $("#searchFrom");
   
	// 검색
    search = function(cPage) {
		$("#orderNumList").load("/am/ord/ordMng/orderNumberPopupList.do", $searchFrom.serialize(), function(){
			var $searchData		= $('input[name="CHK_ODR_NOs"]');
			var $selectedData	= $('input[name="SEL_ODR_NOs"]');
			
			if( $selectedData.length > 0 ){
				$selectedData.each(function(idx, data){
					var no = $(this).data('no');
					
 					$searchData.each(function(){
						if(no == $(this).data('no')) $(this).prop('checked', true);
					}) 
				})
			}
		});
		$("#cPage").val(cPage);

    };
  
    // 팝업 추가버튼
    odrNoAdd = function () {
    	var $checkData = $("input[name=CHK_ODR_NOs]:checked");
    	var $selectedData	= $('input[name="SEL_ODR_NOs"]');
    	
    	if($checkData.length < 1) {
 			alert("<spring:message code='error.noDataSelected' />");
 			return false;
 		}
    	
		var innerHtml = '';
    	
    	$checkData.each(function(idx, data) {
    		var id		= $(this).data('id');
			var no		= $(this).data('no');
			var existYn	= true;

			if( $selectedData.length > 0 ){
				$selectedData.each(function(index, data){
					if( no == $(this).data('no') )		existYn = false;
				})
			}
    		
    		if(existYn){
    			innerHtml += '<tr>';
        		innerHtml += '	<td><input type="checkbox" id="SEL_ODR_NO_'+no+'" name="SEL_ODR_NOs" class="checkbox checkRow" data-id="'+id+'" data-no="'+no+'"/></td>';
        		innerHtml += '	<td>'+id+'</td>';
        		innerHtml += '	<td>'+no+'</td>';
        		innerHtml += '</tr>';
    		}
    	});
    	
    	$("#selectList").append(innerHtml);
    };
    
    
    // 페이지 이동
    goPage = function (cPage) {
    	$("#cPage").val(cPage);
        search();
    };
    
    // 선택 data 부모창으로 return
    odrNoSel = function () {
		var $selectedData	= $('input[name="SEL_ODR_NOs"]');
    	
    	// data 없을경우 return
    	if($selectedData.length < 1 ) {
    		alert("<spring:message code='error.noDataSelected' />");
    		return false;
    	}
    	
    	// 최대 선택 가능 갯수 체크
    	var limitYn = $("#LIMIT_YN").val();
    	
    	if("Y" == limitYn) {
    		if($selectedData.length > 1) {
        		alert("<spring:message code='error.onlyOneSelect' />");
     			return false;
        	}
    	}
    	
    	var params = new Array();
    	var obj;
    	
    	$selectedData.each(function(idx, data) {
    		obj		= new Object();
			obj.ID	= $(this).data('id');
			obj.NO	= $(this).data('no');
			
			params.push(obj);
    	});
    	
    	//조회 팝업 return function
    	window.opener.fnResultOdrNo(params);
		self.close(); 
    }
    
    // 선택행 삭제
    odrNoDel = function () {
    	
    	if($("input[name=SEL_ODR_NOs]:checked").length < 1) {
 			alert("<spring:message code='error.noDataSelected' />");
 			return false;
 		}
    	
    	$("input[name=SEL_ODR_NOs]:checked").each(function(idx, data) {
    		var row = $(this).parent().parent();
    		var no = $(this).data('no');
    		row.remove();
    	})
    }

    search();
});
</script>
</body>
</html>
