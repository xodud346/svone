<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"><!--<![endif]-->
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
</head>
<body class="page-popup">

<div class="modal">
	<div class="modal-wrapper">
		<div class="modal-inner">
			<div class="push-guide instant">
				<i class="icon"></i>
				<h3 class="title"><span>등록자 조회</span></h3>
			</div>

			<form id="searchForm" name="searchForm">
				<input type="hidden" name="searchYn" id="searchYn" value="${searchYn }"/>
				<input type="hidden" name="pageSize" value="10"/>
				<input type="hidden" name="cPage" value="<c:out value="${map.cPage}"/>"/>
				<input type="hidden" name="useYn" value="Y"/>
				<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
					<colgroup>
						<col style="width: 25%;" />
						<col style="width: auto;" />
					</colgroup>
					<tbody>
						<tr>
							<th><span>사번</span></th>
							<td>
								<input type="text" class="text large" id="empNo" name="empNo" value="" />
							</td>
						</tr>
						<tr>
							<th><span>이름</span></th>
							<td>
								<input type="text" class="text large" id="oprtrNm" name="oprtrNm" value="" />
							</td>
						</tr>
					</tbody>
				</table>
			</form>

			<div class="grid section-button-list">
				<div class="col-1-2 text-left">
					<span class="pages">
						(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
					</span>
				</div>
				<div class="col-1-2 text-right">
					<a href="javascript:searchClear('searchForm');" class="button small"><span>초기화</span></a>
					<a href="javascript:search();" id="_search" class="button small primary"><span>검색</span></a>
				</div>
			</div>

			<div id="popList">
				<table cellspacing="0" class="table-col table-b">
					<colgroup>
						<col style="width: 40%;" />
						<col style="width: 60%;" />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">사번</th>
							<th scope="col">이름</th>
						</tr>
					</thead>
					<tbody id="_select">
						<c:choose>
							<c:when test="${list ne null and list ne '' }">
								<c:forEach var="data" items="${list }" varStatus="status">
									<tr>
										<td>${data.EMP_NO }</td>
										<td>${data.OPRTR_NM }</td>
									</tr>
								</c:forEach>
							</c:when>
							<c:otherwise>
								<tr>
									<td colspan="2">조회된 결과가 없습니다.</td>
								</tr>
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
			</div>
		</div>
	</div>
</div>

<script src="<c:out value="${serverDomain}" />/am/js/vendor/jquery-1.11.2.min.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/plugins.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
<script type="text/javascript">
$(function () {

	var $searchForm = $("#searchForm");

	// 검색 엔터 이벤트
	$searchForm.find("input").not(".datepicker").keydown(function (e) {
		if(e.keyCode == 13) {
			search();
		}
	});

	// 조회 버튼 클릭 시
	search = function () {
		$('input[name="searchYn"]').val("Y");
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cnt/ntcMng/regSearchPopup.do", "target":"_self", "method":"post"}).submit();
	}

	// 페이지 이동
	goPage = function (cPage) {
		$searchForm.find("input[name='cPage']").val(cPage);
		search();
	};

	<%-- 선택된 데이터 바닥 페이지로 내리기 --%>
	$(document).on('click', '#_select tr', function(){

		var no = $(this).find('td').eq(0).text();
		var nm = $(this).find('td').eq(1).text();

		var params	= new Array();
		var obj		= new Object();

		obj.NO = no;
		obj.NM = nm;

		params.push(obj);

		window.opener.fnResultReg(params);
		self.close();
	})
});
</script>
</body>
</html>
