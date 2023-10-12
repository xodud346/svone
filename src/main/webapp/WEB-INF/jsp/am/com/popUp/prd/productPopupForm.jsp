<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css">
</style>
</head>
<body class="page-popup">
<div class="modal">
	<div class="modal-wrapper">
		<div class="modal-inner">

			<div class="push-guide instant">
				<i class="icon"></i>
				<h3 class="title"><span>상품 검색</span></h3>
			</div>

			<form id="searchForm">
				<input type="hidden" id="cPage" name="cPage" value="${paging.cPage }" />
				<input type="hidden" id="pageSize" name="pageSize" value="${paging.pageSize }" />
				<input type="hidden" id="searchCnt" name="searchCnt" value="${commandMap.searchCnt}" />
				<input type="hidden" id="searchSspOnlySpr" name="searchSspOnlySpr" value="${commandMap.searchSspOnlySpr}" />
				
				<table class="table-row table-a" style="margin-bottom: 0;">
					<colgroup>
						<col style="width: 20%;" />
						<col style="width: auto;" />
					</colgroup>
					<tbody>
						<tr>
							<th><span>상품 ID</span></th>
							<td>
								<input type="text" class="text-xlarge" id="searchPrdId" name="searchPrdId" value="${commandMap.prdId}"/>
								<a href="javascript:multiTextPopup('searchPrdId');" class="icon doc"></a>
							</td>
						</tr>
					</tbody>
				</table>
			</form>

			<div class="grid section-button-search">
				<a href="javascript:searchClear('searchForm')" class="button small"><span>초기화</span></a>
				<a href="javascript:search();" class="button small primary"><span>조회</span></a>
			</div>

			<div class="grid section-button-list">
				<div class="wrap text-right">
					<ui:pageSizeBox value="${paging.pageSize}" name="pageSize" type="" jsFunction="goPage"/>
				</div>
			</div>

			<div id="productList">
				
			</div>

			<div class="section-button-list">
				<div class="wrap text-center">
					<a href="javascript:goList();" class="button large"><span>취소</span></a>
					<a href="javascript:goSave();" class="button large primary"><span>확인</span></a>
				</div>
			</div>
		</div>
	</div>
</div>
<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>
<script>
$(function(){
	var $searchForm = $("#searchForm");
	var $searchCnt = "";
	
	if("" == $("#searchCnt").val()) {
		$("#searchCnt").val("1");
	}

	search = function(){
		$("#productList").load("<c:out value="${serverDomain}" />/am/com/popUp/prd/productPopupList.do", $searchForm.serialize());
	}

	$searchForm.find($("input[name='searchPrdId']")).keydown(function(e){
		if(e.keyCode == 13){
			e.preventDefault();
			search();
		}
	});

	goPage = function(cPage){
		$searchForm.find("input[name='pageSize']").val($("select[name='pageSize']").val());
		$("#cPage").val(cPage);
		search();
	}

	goList = function(){
		self.close();
	}

	goSave = function(){
		
		if(!$("input[name=selProduct]").is(":checked")) {
			alert("상품을 선택해주세요.");
			return false;
		}
		
		var $selProductCnt = $("input[name=selProduct]:checked").length;
		
		$searchCnt = $("#searchCnt").val();
		
		if($selProductCnt > $searchCnt) {
			alert("상품은 "+$searchCnt+"건만 선택할 수 있습니다.");
			return false;
		}
			
		var params = new Array();
    	var obj;
    	
    	$("input[name=selProduct]:checked").each(function(idx, data) {
    		obj			= new Object();
			obj.prdId	= $(this).data('id');
			obj.prdNm	= $(this).data('nm');
			
			params.push(obj);
    	});
		
		window.opener.fnSetProduct(params);
		self.close();
	}
	
	search();
});

function fnResultText(params) {
	$("#"+params.id).val(params.data);
}

</script>
</body>
</html>