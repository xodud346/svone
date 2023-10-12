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

				<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
					<colgroup>
						<col style="width: 20%;" />
						<col style="width: auto;" />
					</colgroup>
					<tbody>
						<tr>
							<th><span>상품 ID</span></th>
							<td>
								<input type="text" class="text-xlarge" id="prdMstCd" name="prdMstCd" value="${commandMap.prdMstCd}"/>
							</td>
						</tr>
					</tbody>
				</table>
			</form>

			<div class="grid section-button-search">
				<a href="javascript:" class="button small"><span>초기화</span></a>
				<a href="javascript:search();" class="button small primary"><span>조회</span></a>
			</div>

			<div class="grid section-button-list">
				<div class="wrap text-right">
					<ui:pageSizeBox value="${paging.pageSize}" name="pageSize" type="" jsFunction="goPage"/>
				</div>
			</div>

			<div id="productList">
				<%@ include file="/WEB-INF/jsp/am/prm/plnMng/planProductPopupList.jsp" %>
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

<script>
$(function(){
	var $searchForm = $("#searchForm");

	search = function(){
		$("#productList").load("<c:out value="${serverDomain}" />/am/prm/plnMng/planProductPopupList.do", $searchForm.serialize());
	}

	$searchForm.find($("input[name='PRD_MST_CD']")).keydown(function(e){
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
		var PRD_MST_CD = $("#PRD_MST_CD").val();
		if(PRD_MST_CD == ""){
			alert("상품 ID를 입력해주세요.");
			return;
		}
		window.opener.fnSetProduct(PRD_MST_CD);
		self.close();
	}
});
</script>
</body>
</html>