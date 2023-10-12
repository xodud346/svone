<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>부서 조회</title>
</head>
<body class="page-popup">
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
				<h3 class="title"><span>사업장 조회</span></h3>
                <form id="frm" name="frm">
                    <input type="hidden" id="cPage" name="cPage" value=""/>
                    <input type="hidden" id="pageSize" name="pageSize" value="10" />
                    <input type="hidden" id="formType" name="formType" value="regist" />
                    <input type="hidden" id="POP_MST_IDX" name="POP_MST_IDX" value="" />
	                <input type="hidden" id="LIMIT_YN" name="LIMIT_YN" value="${commandMap.LIMIT_YN}" />
	                
	                <table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
	                    <colgroup>
	                        <col style="width: 30%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                    		<th><span>부서 ID</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="deptId" name="deptId" value="" />
	                            </td>
	                    	</tr>
	                    	<tr>
	                    		<th><span>부서명</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="deptNm" name="deptNm" value="" />
	                            </td>
	                    	</tr>
	                    	<tr>
	                    		<th><span>부서코드</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="bzplceId" name="bzplceId" value="" />
	                            </td>
	                    	</tr>
	                    	<tr>
	                    		<th><span>사업장명</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="bzplaceNm" name="bzplaceNm" value="" />
	                            </td>
	                    	</tr>
	                    	<tr>
	                    		<th><span>운영단위명</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="oprUntNm" name="oprUntNm" value="" />
	                            </td>
	                    	</tr>
	                    </tbody>
	                </table><!-- // table -->
                </form>
                
                <div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:searchClear('frm');" id="searchClear" class="button small"><span>초기화</span></a>
                    <a href="javascript:search();" class="button small primary"><span>검색</span></a>
                </div>
                
                <!-- 조회 결과 영역 -->
                <div id="popList">
                	
                </div>
                <!-- //조회 결과 영역 -->
                
                <!-- 선택 사업장 영역 -->
                <table cellspacing="0" class="table-col table-b" id="selTable">
					<colgroup>
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
					</colgroup>
					<thead>
						<tr>
							<th>선택</th>
							<th>부서 ID</th>
							<th>부서명</th>
							<th>부서코드</th>
							<th>사업장명</th>
							<th>운영단위명</th>
						</tr>
					</thead>
					<tbody id="_selectedData">
						<c:if test="${not empty selList}">
					    	<c:forEach var="list" items="${selList}" varStatus="status">
								<tr>
									<td><input type="checkbox" id="SEL_DEPT_ID_${list.DEPT_ID}" name="SEL_DEPT_IDs" class="checkbox checkRow"/>
										<input type="hidden" name="SEL_BZPLC_NM" value="${list.BZPLC_NM}">
										<input type="hidden" name="SEL_CODE"value="${list.CODE}">
										<input type="hidden" name="SEL_BZPLC_ID"value="${list.BZPLC_ID}">
										<input type="hidden" name="SEL_DEPT_ID"value="${list.DEPT_ID}">
										<input type="hidden" name="SEL_DEPT_NM"value="${list.DEPT_NM}">
										<input type="hidden" name="SEL_CCO_DEPT_CD"value="${list.CCO_DEPT_CD}">
										<input type="hidden" name="SEL_OPR_UNT_NM"value="${list.OPR_UNT_NM}">
										<input type="hidden" name="SEL_OPR_UNT_ID"value="${list.OPR_UNT_ID}">
										<input type="hidden" name="SEL_VALUE"value="${list.VALUE}">
									</td>
									<td>${list.DEPT_ID}</td>
									<td>${list.DEPT_NM}</td>
									<td>${list.CCO_DEPT_CD}</td>
									<td>${list.BZPLC_NM}</td>
									<td>${list.OPR_UNT_NM}</td>
								</tr>
					    	</c:forEach>
					    </c:if>
					</tbody>
				</table>
				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:deptDel();" id="bzplcDel" class="button small"><span>삭제</span></a>
                    <a href="javascript:deptSel();" class="button small primary"><span>선택</span></a>
                </div>
				<!-- //선택 사업장 영역 -->
            </div>
        </div>
    </div>

<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>


<script type="text/javascript">
$(function(){
	var $frm = $("#frm");
	
	search = function(){
		$("#popList").load("/am/com/popUp/deptPopupList.do", $frm.serialize(), function(){
			var $searchData	= $('input[name="CHK_DEPT_IDs"]');
			var $selectedData	= $('input[name="SEL_DEPT_IDs"]');
			
			if( $selectedData.length > 0 ){
				$selectedData.each(function(idx, data){
					var id		= $(this).data('id');
					
					$searchData.each(function(){
						if(id == $(this).data('id')) $(this).prop('checked', true);
					})
				})
			} 
		});
	}
	goPage = function(cPage){
		$("#cPage").val(cPage);
	    search();
	}
	deptAdd = function(){
		var $checkData = $("input[name=CHK_DEPT_IDs]:checked");
    	var $selectedData	= $('input[name="SEL_DEPT_IDs"]');
    	
    	if($checkData.length < 1) {
 			alert("<spring:message code='error.noDataSelected' />");
 			return false;
 		}
    	
    	var innerHtml = '';
    	
    	$checkData.each(function(idx, data) {
    		var $hiddens = $(this).parent().find("input[type=hidden]");
    		
    		//CHECK_BZPLC_NM
    		//CHECK_CODE
    		//CHECK_BZPLC_ID
    		//CHECK_DEPT_ID
    		//CHECK_DEPT_NM
    		//CHECK_CCO_DEPT_CD
    		//CHECK_OPR_UNT_NM
    		//CHECK_OPR_UNT_ID
    		//CHECK_VALUE
    		var CHECK_BZPLC_NM = $(this).parent().find("input[name='CHECK_BZPLC_NM']").val();
    		var CHECK_CODE = $(this).parent().find("input[name='CHECK_CODE']").val();
    		var CHECK_BZPLC_ID = $(this).parent().find("input[name='CHECK_BZPLC_ID']").val();
    		var CHECK_DEPT_ID = $(this).parent().find("input[name='CHECK_DEPT_ID']").val();
    		var CHECK_DEPT_NM = $(this).parent().find("input[name='CHECK_DEPT_NM']").val();
    		var CHECK_CCO_DEPT_CD = $(this).parent().find("input[name='CHECK_CCO_DEPT_CD']").val();
    		var CHECK_OPR_UNT_NM = $(this).parent().find("input[name='CHECK_OPR_UNT_NM']").val();
    		var CHECK_OPR_UNT_ID = $(this).parent().find("input[name='CHECK_OPR_UNT_ID']").val();
    		var CHECK_VALUE = $(this).parent().find("input[name='CHECK_VALUE']").val();
    		
    		
    		var id		= $(this).data('id');
			var name	= $(this).data('nm');
			var no		= $(this).data('no');
			var existYn	= true;

			if( $selectedData.length > 0 ){
				$selectedData.each(function(index, data){
					if( id == $(this).data('id') )		existYn = false;
				})
			}
    		
    		if(existYn){
    			innerHtml += '<tr>';
        		innerHtml += '	<td><input type="checkbox" id="SEL_DEPT_ID_'+CHECK_DEPT_ID+'" name="SEL_DEPT_IDs" class="checkbox checkRow" data-id="'+id+'" data-nm="'+name+'" data-no="'+no+'"/>';
        		innerHtml += '		<input type="hidden" name="SEL_BZPLC_NM" value="'+CHECK_BZPLC_NM+'"/>'
        		innerHtml += '		<input type="hidden" name="SEL_CODE" value="'+CHECK_CODE+'"/>'
        		innerHtml += '		<input type="hidden" name="SEL_BZPLC_ID" value="'+CHECK_BZPLC_ID+'"/>'
        		innerHtml += '		<input type="hidden" name="SEL_DEPT_ID" value="'+CHECK_DEPT_ID+'"/>'
        		innerHtml += '		<input type="hidden" name="SEL_DEPT_NM" value="'+CHECK_DEPT_NM+'"/>'
        		innerHtml += '		<input type="hidden" name="SEL_CCO_DEPT_CD" value="'+CHECK_CCO_DEPT_CD+'"/>'
        		innerHtml += '		<input type="hidden" name="SEL_OPR_UNT_NM" value="'+CHECK_OPR_UNT_NM+'"/>'
        		innerHtml += '		<input type="hidden" name="SEL_OPR_UNT_ID" value="'+CHECK_OPR_UNT_ID+'"/>'
        		innerHtml += '		<input type="hidden" name="SEL_VALUE" value="'+CHECK_VALUE+'"/>'
        		innerHtml += '	</td>';
        		
        		innerHtml += '	<td>'+CHECK_DEPT_ID+'</td>';
        		innerHtml += '	<td>'+CHECK_DEPT_NM+'</td>';
        		innerHtml += '	<td>'+CHECK_CCO_DEPT_CD+'</td>';
        		innerHtml += '	<td>'+CHECK_BZPLC_NM+'</td>';
        		innerHtml += '	<td>'+CHECK_OPR_UNT_NM+'</td>';
        		innerHtml += '</tr>';
    		}
    	});
    	
    	$("#_selectedData").append(innerHtml);
    	
    	
	}

	deptDel = function(){
		if($("input[name=SEL_DEPT_IDs]:checked").length < 1) {
 			alert("<spring:message code='error.noDataSelected' />");
 			return false;
 		}
    	
    	$("input[name=SEL_DEPT_IDs]:checked").each(function(idx, data) {
    		var row = $(this).parent().parent();
    		var id = $(this).data('id');
    		row.remove();
    	})
	}
	deptSel = function(){
		var $selectedData	= $('input[name="SEL_DEPT_IDs"]');
    	
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
    	
    	
    	$selectedData.each(function(idx, data) {
    		
    		var $hiddens = $(this).parent().find("input[type=hidden]");
    		
    		var CHECK_BZPLC_NM = $(this).parent().find("input[name='SEL_BZPLC_NM']").val();
    		var CHECK_CODE = $(this).parent().find("input[name='SEL_CODE']").val();
    		var CHECK_BZPLC_ID = $(this).parent().find("input[name='SEL_BZPLC_ID']").val();
    		var CHECK_DEPT_ID = $(this).parent().find("input[name='SEL_DEPT_ID']").val();
    		var CHECK_DEPT_NM = $(this).parent().find("input[name='SEL_DEPT_NM']").val();
    		var CHECK_CCO_DEPT_CD = $(this).parent().find("input[name='SEL_CCO_DEPT_CD']").val();
    		var CHECK_OPR_UNT_NM = $(this).parent().find("input[name='SEL_OPR_UNT_NM']").val();
    		var CHECK_OPR_UNT_ID = $(this).parent().find("input[name='SEL_OPR_UNT_ID']").val();
    		var CHECK_VALUE = $(this).parent().find("input[name='SEL_VALUE']").val();
    		
    		var obj = {
    				BZPLC_NM : CHECK_BZPLC_NM,
    				CODE : CHECK_CODE,
    				BZPLC_ID : CHECK_BZPLC_ID,
    				DEPT_ID : CHECK_DEPT_ID,
    				DEPT_NM : CHECK_DEPT_NM,
    				CCO_DEPT_CD : CHECK_CCO_DEPT_CD,
    				OPR_UNT_NM : CHECK_OPR_UNT_NM,
    				OPR_UNT_ID : CHECK_OPR_UNT_ID,
    				VALUE : CHECK_VALUE
    		}
			
			params.push(obj);
    	});
    	
    	// 사업장 조회 팝업 return function
    	window.opener.fnResultDept(params);
		self.close();
	}
	search();
});


function searchStand(){
	//deptId
	//deptNm
	//cco
	//oprUntNm
}



</script>

</body>
</html>

