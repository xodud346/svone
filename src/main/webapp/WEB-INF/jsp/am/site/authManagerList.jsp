<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css">
<!--
-->
</style>
</head>
<body><!-- body class, 중요 -->

<div id="header"><!-- header -->
	<%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</div><!-- // header -->

<div id="container"><!-- container -->

	<div id="aside" class="aside left"><!-- aside -->
		<%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
	</div><!-- // aside -->

	<div id="wrapper"><!-- wrapper -->

		<div id="breadcrumb"></div><!-- breadcrumb -->

		<div id="contents"><!-- contents -->

			<div class="container">

				<h2 class="title"><span>권한관리</span></h2>

				<h3 class="title"><span>조회조건</span></h3>

				<form id="searchForm" name="searchForm">
					<input type="hidden" name="pageSize" value="<c:out value="${commandMap.pageSize }"/>" />

					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: auto;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr><!-- row -->
								<th><span>권한명</span></th>
								<td>
									<input type="text" class="text logon" name="autMstNm" id="autMstNm" value="<c:out value="${commandMap.autMstNm}"/>" />
								</td>
								<th><span>사번</span></th>
								<td>
									<input type="text" class="text logon" name="admMstErpNo" id="admMstErpNo" value="<c:out value="${commandMap.admMstErpNo}"/>"/>
								</td>
								<th><span>이름</span></th>
								<td>
									<input type="text" class="text logon" name="admMstNm" id="admMstNm" value="<c:out value="${commandMap.admMstNm}"/>"/>
								</td>
							</tr>
						</tbody>
					</table><!-- // table -->
				</form>

				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
					<a href="javascript:searchClear('searchForm');" class="button small"><span>검색 조건 초기화</span></a>
					<a href="javascript:;" id="search" class="button small primary"><span>검색</span></a>
				</div><!-- // 검색 하단 버튼 -->

				<h3 class="title"><span>목록</span></h3>

				<form id="frm" name="frm">
					<input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/>
					<input type="hidden" name="searchAutMstNm" value="<c:out value="${commandMap.searchAutMstNm }"/>"/>
					<input type="hidden" name="searchStartDate" value="<c:out value="${commandMap.searchStartDate }"/>"/>
					<input type="hidden" name="searchEndDate" value="<c:out value="${commandMap.searchEndDate }"/>"/>
					<input type="hidden" name="searchAutMstState" value="<c:out value="${commandMap.searchAutMstState }"/>"/>
					<!-- 상세보기 idx -->
					<input type="hidden" id="autMstIdx" name="autMstIdx" value="" />

					<div class="grid section-button-list">
						<div class="col-1-2 text-left">
							<span class="pages">
								(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
							</span>
						</div>
						<div class="col-1-2 text-right">
							<%--슈퍼관리자만 권한등록을 할 수 있음 --%>
							<c:if test="${isSuperAdmin}">
								<a href="#none;" id="goForm" class="button small primary"><span>권한생성</span></a>
							</c:if>
							<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>
						</div>
					</div>
				</form>

				<table cellspacing="0" class="table-col table-b"><!-- table -->
					<colgroup>
						<col style="width: 75px;" />
						<col style="width: auto;" />
						<col style="width: 150px;" />
						<col style="width: 100px;" />
						<col style="width: 150px;" />
						<col style="width: 150px;" />
						<col style="width: 90px;" />
					</colgroup>
					<thead>
						<tr>
							<th scope="row">NO</th>
							<th scope="row">권한명</th>
							<th scope="row">부서</th>
							<th scope="row">사번</th>
							<th scope="row">이름</th>
							<th scope="row">최종수정일</th>
							<th scope="row">상세보기</th>
						</tr>
					</thead>
					<tbody>
						<c:choose>
							<c:when test="${not empty list }">
								<c:set var="listNum" value="${paging.listNum}" />
								<c:forEach var="row" items="${list}" varStatus="i">
									<tr>
										<td><c:out value="${listNum}"/></td>
										<td class="text-left td_ellipsis"><c:out value="${row.autMstNm }"/></td>
										<td class="text-left td_ellipsis"><c:out value="${row.orgNm }"/></td>
										<td><c:out value="${row.admMstErpNo }"/></td>
										<td class="text-left td_ellipsis"><c:out value="${row.admMstNm }"/></td>
										<td><ui:formatDate value="${row.autMstRegDt }" pattern="yyyy.MM.dd HH:mm:ss"/></td>
										<td>
											<a href="javascript:void(0);" onclick="goEditPage(this);" data-idx='<c:out value="${row.autMstIdx}"/>' class="button large primary" ><span>상세보기</span></a>
										</td>
									</tr>
									<c:set var="listNum" value="${listNum-1}" />
								</c:forEach>
							</c:when>
							<c:otherwise>
								<tr>
									<td colspan="7" class="td_no_result">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
								</tr>
							</c:otherwise>
						</c:choose>
					</tbody>
				</table><!-- // table -->

				<div class="section-pagination"><!-- section pagination -->
					<h4 class="sr-only">목록 페이징</h4>
					<div class="wrap"><!-- 개발 시 wrap 이하 모듈 시작 -->
						<ui:paging paging="${paging }" jsFunction="goPage" />
					</div>
				</div><!-- // section pagination -->

			</div>

		</div><!-- // contents -->

	</div><!-- // wrapper -->

	<div id="quickmenu" class="aside right"><!-- quickmenu-->
		<%@ include file="/WEB-INF/jsp/am/include/quick.jsp" %>
	</div><!-- // quickmenu -->

</div><!-- // container -->

<div id="footer">
	<%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>

<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>
<script>
$(function(){
	// 등록 버튼 클릭 이벤트
	$(document).on("click", "#goForm", function () {
		$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/site/authManagerForm.do", "target":"_self", "method":"post"}).submit();
	});

	// 상세보기 이동
	goEditPage = function(obj) {
		console.log('goEdit',$(obj).data("idx"));
		$("#autMstIdx").val($(obj).data("idx"));
		$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/site/authManagerEdit.do", "target":"_self", "method":"post"}).submit();
	}

//     $(document).on("click", "#goEdit", function () {
//     	console.log('goEdit',$(this).data("idx"));
//     	#("#autMstIdx").val($(this).data("idx"));
//         $("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/site/authManagerEdit.do", "target":"_self", "method":"post"}).submit();
//     });


	// 검색 엔터 이벤트
	$(document).on("keydown", "#searchAutMstNm", function (e) {
		if(e.keyCode == 13){
			$("#search").trigger("click");
			return false;
		}
	});

	// 검색 버튼 클릭 이벤트
	$(document).on("click", "#search", function () {
		var $searchForm = $("#searchForm");

		$searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/site/authManagerList.do", "target":"_self", "method":"post"}).submit();
	});

	// 페이지 사이즈 변경 이벤트
	$(document).on("change", "select[name='pageSize']", function () {
		goPage(1);
	});

	// 페이지 이동
	goPage = function (cPage){
		var $frm = $("#frm");
		$frm.find("input[name='cPage']").val(cPage);
		$frm.attr({"action":"<c:out value="${serverDomain}" />/am/site/authManagerList.do", "target":"_self", "method":"post"}).submit();
	};


});
//-->
</script>

</body>
</html>
