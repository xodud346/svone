<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>법인 조회</title>
</head>
<body class="page-popup">
	<div class="modal">
		<div class="modal-wrapper">
			<div class="modal-inner">
				<h3 class="title"><span>법인 조회</span></h3>
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
								<th><span>회사</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="coCd" name="coCd" value="" />
								</td>
							</tr>
							<tr>
								<th><span>법인 ID</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="corpId" name="corpId" value="" />
								</td>
							</tr>
							<tr>
								<th><span>법인 명</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="corpNm" name="corpNm" value="" />
								</td>
							</tr>
						</tbody>
					</table><!-- // table -->
				</form>
				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
					<a href="javascript:searchClear('frm');" id="searchClear" class="button small"><span>초기화</span></a>
					<a href="#none" onclick="search()" class="button small primary"><span>검색</span></a>
				</div>
				
				<!-- 조회 결과 영역 -->
				<div id="popList"></div>
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
							<th>회사</th>
							<th>법인 ID</th>
							<th>법인명</th>
						</tr>
					</thead>
					<tbody id="_selectedData">
						<c:if test="${not empty selList}">
							<c:forEach var="list" items="${selList}" varStatus="status">
								<tr>
									<td><input type="checkbox" id="CHK_IDDT_ID_${item.IDDT_ID}" name="CHK_BZPLC_CORP_IDs" class="checkbox checkRow" data-cd="${item.CO_CD}" data-id="${item.CORP_ID}" data-nm="${item.CORP_NM}"/></td>
									<td>${item.CO_CD}</td>
									<td>${item.CORP_ID}</td>
									<td>${item.CORP_NM}</td>
								</tr>
							</c:forEach>
						</c:if>
					</tbody>
				</table>
				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
					<a href="#none" onclick="fn_iddtDel()" class="button small"><span>삭제</span></a>
					<a href="#none" onclick="fn_iddtSel()" class="button small primary"><span>선택</span></a>
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
	
	// 검색
	function search(){
		$("#popList").load("/am/dsp/popMng/bzplcCorpPopupList.do", $frm.serialize(), function(){
			var $searchData		= $('input[name="CHK_BZPLC_CORP_IDs"]');
			var $selectedData	= $('input[name="SEL_BZPLC_CORP_IDs"]');
			
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
	
	// 페이지 이동
	goPage = function (cPage) {
		$("#cPage").val(cPage);
		search();
	};
	
	// 팝업 추가버튼
	bzplcAdd = function () {
		var $checkData = $("input[name=CHK_BZPLC_CORP_IDs]:checked");
		var $selectedData	= $('input[name="SEL_BZPLC_CORP_IDs"]');
		
		if($checkData.length < 1) {
 			alert("<spring:message code='error.noDataSelected' />");
 			return false;
 		}
		
		var innerHtml = '';
		
		$checkData.each(function(idx, data) {
			var cd		= $(this).data('cd');
			var id		= $(this).data('id');
			var name	= $(this).data('nm');
			var existYn	= true;

			if( $selectedData.length > 0 ){
				$selectedData.each(function(index, data){
					if( id == $(this).data('cd') )		existYn = false;
				})
			}
			
			if(existYn){
				innerHtml += '<tr>';
				innerHtml += '	<td><input type="checkbox" id="SEL_BZPLC_ID_'+cd+'" name="SEL_BZPLC_CORP_IDs" class="checkbox checkRow"  data-id="'+id+'" data-nm="'+name+'"/></td>';
				innerHtml += '	<td>'+cd+'</td>';
				innerHtml += '	<td>'+id+'</td>';
				innerHtml += '	<td>'+name+'</td>';
				innerHtml += '</tr>';
			}
		});
		
		$("#_selectedData").append(innerHtml);
	};
	
	// 선택 data 부모창으로 return
	fn_iddtSel = function () {
		var $selectedData	= $('input[name="SEL_BZPLC_CORP_IDs"]');
		
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
			obj.CD	= $(this).data('cd');
			obj.ID	= $(this).data('id');
			obj.NM	= $(this).data('nm');
			
			params.push(obj);
		});
		
		// 사업장 조회 팝업 return function
		window.opener.fnResultBzplcCorp(params);
		self.close();
	}
	
	search();
});

//선택행 삭제
function fn_iddtDel(){
	if($("input[name=SEL_BZPLC_CORP_IDs]:checked").length < 1) {
		alert("<spring:message code='error.noDataSelected' />");
		return false;
	}
	
	$("input[name=SEL_BZPLC_CORP_IDs]:checked").each(function(idx, data) {
		var row = $(this).parent().parent();
		var id = $(this).data('id');
		row.remove();
	})
}
</script>
</body>
</html>