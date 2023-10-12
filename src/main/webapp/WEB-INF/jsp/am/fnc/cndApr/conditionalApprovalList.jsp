<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<style type="text/css">
<!--
-->
</style>
<script type="text/javascript">


$(function(){

	$frm = $("#frm");
	$searchForm = $("#searchForm");

	var searchYn = '${searchYn}';
	frmClear = function(){
		searchClear('searchForm');
		$("#searchForm").find("input[type=hidden]").val("");
	}




	$('#_search').on('click',function(){
		var $searchForm = $("#searchForm");
		$('#searchYn').val('Y');
		

		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/fnc/cndApr/conditionalApprovalList.do", "target":"_self", "method":"post"}).submit();
	});
	
	//사업장 검색 팝업
	$("#searchBizPlaceNmIco").off().on("click" , function(){
		fnOneBzplcResult("searchForm");
	});
	
	$("#searchDeptIdIco").off().on("click" , function(){
		deptPopup("frm");
	})
	
	
	

});

fnOneBzplcResultCallback = function(data){
	console.log(data);
	if(data){
		$("#searchBizPlaceNm").val(data.BZPLC_NM);
		$("#searchBizPlaceId").val(data.BZPLC_ID);
	}

}


goPage = function(cPage){
	var $frm = $("#searchForm");
	$frm.find("input[name='cPage']").val(cPage);
	$frm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
	$frm.attr({"action":"<c:out value="${serverDomain}"/>/am/fnc/cndApr/conditionalApprovalList.do", "target":"_self", "method":"post"}).submit();
}

fnResultDept = function(data){
	console.log(data);
	var deptIds = new Array();
	var deptNms = new Array();
	for(var i = 0 ; i < data.length ; i++){
		deptIds.push(data[i].DEPT_ID);
		deptNms.push(data[i].DEPT_NM);
		
	}
	$("#searchDeptNm").val(deptIds.join(','));
	$("#searchDeptId").val(deptNms.join(','));
}

//엑셀 다운로드
goExcelDown = function () {
	var totalCnt = $(".pages .em").html()
		
    if(totalCnt > 10000){
        alert("엑셀 다운로드는 10000건 이하만 가능합니다.");
        return;
    }else if(totalCnt == 0){
        alert("저장할 내역이 없습니다.");
        return;
    }
    
    
	//$("#searchForm").attr({"action": "<c:out value="${serverDomain}" />/am/cnt/vocMng/vocListExcelDownload.do", "target":"_self", "method":"post"}).submit();
};


</script>
</head>
<body>
	<div id="header">
		<%@ include file="/WEB-INF/jsp/am/include/top.jsp"%>
	</div>
	<div id="container">
		<!-- container -->
		<div id="aside" class="aside left">
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp"%>
		</div>
		<!-- wrapper -->
		<div id="wrapper">

			<div id="breadcrumb"></div>

			<div id="contents">
				<!-- container -->
				<div class="container">
					<h2 class="title"><span>조건부 결재선</span></h2>
					<h3 class="title"><span>목록</span></h3>


					<form id="searchForm" name="searchForm">
							<input type="hidden" name="searchYn" id="searchYn" value="${map.searchYn }"/>
							<input type="hidden" name="pageSize" value="<c:out value="${map.pageSize }"/>" />
							<input type="hidden" name="cPage" value="<c:out value="${map.cPage}"/>"/>
							
							<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
								<colgroup>
									<col style="width: 10%;" />
									<col style="width: auto;" />
									<col style="width: 10%;" />
									<col style="width: auto;" />
									<col style="width: 10%;" />
									<col style="width: 25%;" />
								</colgroup>
								
								<tbody>
									<tr>
										<th><span>사업장</span></th>
										<td>
											<input type="text" class="text" name="searchBizPlaceNm" id="searchBzPsearchBzPlcNmlcId" value="${map.searchBzPlcNm}" readonly />
											<a href="#" id="searchBizPlaceNmIco" class="icon search2"></a>
											<input type="hidden" name="searchBizPlaceId" id="searchBzPlcId" value="${map.searchBzPlcId}"/>
										</td>
										<th><span>상품</span></th>
										<td>
											<input type="text" class="text" name="searchPrdNm" id="searchPrdNm" value="${map.searchPrdNm}" readonly />
											<a href="#" id="searchPrdIdIco" class="icon search2"></a>
											<input type="hidden" name="searchPrdId" id="searchPrdId" value="${map.searchPrdId}"/>
										</td>
										<th><span>결재자</span></th>
										<td>
											<input type="text" class="text" name="searchAprvSprNm" id="searchAprvSprNm" value="${map.searchAprvSprNm}" readonly />
											<a href="#" id="searchAprvSprIdIco" class="icon search2"></a>
											<input type="hidden" name="searchAprvSprId" id="searchAprvSprId" value="${map.searchAprvSprId}"/>
										</td>
									</tr>
									<tr>
										<th><span>부서</span></th>
										<td>
											<input type="text" class="text" name="searchDeptNm" id="searchDeptNm" value="${map.searchDeptId}" readonly />
											<a href="#" id="searchDeptIdIco" class="icon search2"></a>
											<input type="hidden" name="searchDeptId" id="searchDeptId" value="${map.searchDeptId}"/>
										</td>
										<th><span></span></th>
										<td></td>
										<th><span></span></th>
										<td></td>
									</tr>
								</tbody>
							
							
							
							</table>
						</form>
				</div>

				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
						<!-- <div class="col- text-left">
							<a href="javascript:orderSearchDetailBtn()" class="button small"><span id="btnText">상세조회펼치기</span></a>
						</div> -->
						<a href="javascript:frmClear('searchForm');" class="button small"><span>검색 조건 초기화</span></a>
						<a href="#none" id="_search" class="button small primary"><span>검색</span></a>
				</div>

				<form id="frm" name="frm">
					<div class="grid section-button-list">
							<div class="col-1-2 text-left">
								<span class="pages">
									<c:if test="${!map.searchYn ne null }">
										(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
									</c:if>
									
								</span>
							</div>
							<div class="col-1-2 text-right">
								<a href="javascript:goExcelDown();" id="goExcelDown" class="button small"><span>엑셀 다운로드</span></a>
								<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>
								
							</div>
						</div>
				</form>

				<table cellspacing="0" class="table-col table-b">
						<colgroup>
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
						</colgroup>
						<thead>
							<tr>
								<th>사업장 ID</th>
								<th>사업장 명</th>
								<th>부서 ID</th>
								<th>부서 명</th>
								<th>결재구분</th>
								<th>주문금액</th>
								<th>상품단가</th>
								<th>결재차수</th>
								<th>결재자</th>
								<th>최초/최종</th>
							</tr>
						</thead>
						<tbody>


							<c:choose>
								<c:when test="${map.searchYn eq null }">
									<tr>
											<td colspan="10">조회 조건을 선택 하신 후, 조회해 주세요.</td>
									</tr>
								</c:when>
								<c:otherwise>
										<c:forEach var="list" items="${list }" varStatus="i" >
												<tr>
													<td>${list.bzplcId}</td>
													<td>${list.bzplcNm}</td>
													<td>${list.deptId}</td>
													<td>${list.deptNm}</td>
													<td>${list.cndlAprvSprNm}</td>
													<td>${list.aprvCondTotAmt}</td>
													<td>${list.aprvCondAmt}</td>
													<td>${list.aprvStpCd}차</td>
													<td>${list.aprvpsnNm}</td>
													<td>${list.locNm}</td>
												</tr>
										</c:forEach>
								</c:otherwise>
								</c:choose>
						</tbody>
				</table>

				<div class="section-pagination">
						<h4 class="sr-only">목록 페이징</h4>
						<div class="wrap">
							<ui:paging paging="${paging }" jsFunction="goPage" />
						</div>
				</div>


				<!-- // container -->
			</div>
		</div>
		<!-- // wrapper -->

		<div id="quickmenu" class="aside right">
			<%@ include file="/WEB-INF/jsp/am/include/quick.jsp"%>
		</div>
	</div>
	<!-- // container -->
	<div id="footer">
		<%@ include file="/WEB-INF/jsp/am/include/footer.jsp"%>
	</div>
	<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
</body>
</html>