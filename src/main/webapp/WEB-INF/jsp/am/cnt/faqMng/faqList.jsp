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

$(window).load(function(){
	var alertMsg = "${alertMsg}";
	if(alertMsg){
		alert(alertMsg);
	}
});

$(function(){

	var searchYn = '${searchYn}';

	if(searchYn == 'Y'){

		var inqTerm	= '${map.inqTerm}';		<%-- 조회 기간 --%>
		var faqTyp = '${map.searchBrdCmnComIdx}';	<%-- 유형 --%>

		$('select[name="inqTerm"]').val(inqTerm).prop("selected", true);
		$('select[name="searchBrdCmnComIdx"]').val(faqTyp).prop("selected", true);

	} else {

		<%-- 기본 조회기간 --%>
		$('select[name="inqTerm"]').val('W1').prop("selected", true);
		fnDateSet('searchEndDt', 'searchStrDt', 0, 0, 0, 0, 0, -7, '-');
	}

	clearForm = function(frm) {
		searchClear(frm);
		$('select[name="inqTerm"]').val('W1').prop("selected", true);
		fnDateSet('searchEndDt', 'searchStrDt', 0, 0, 0, 0, 0, -7, '-');
	}

	<%-- 유형관리 클릭 시 --%>
	$('#brdCmnComMng').on('click',function(){
		console.log('faqTypPopupForm click');
		popup('', "700", "700", "yes","_faqTypPopup");
		$('#frm').attr({"action":"<c:out value="${serverDomain}" />/am/cnt/faqMng/faqTypPopupForm.do", "target":"popup_faqTypPopup", "method":"post"}).submit();
	});


	<%-- 조회버튼 클릭 시 --%>
	$('#_search').on('click',function(){
		var $searchForm = $("#searchForm");
		$('#searchYn').val('Y');
		$searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cnt/faqMng/faqList.do", "target":"_self", "method":"post"}).submit();
	});


	<%-- 등록버튼 클릭 시 --%>
	$('#_create').on('click',function(){
		$('#frm').attr({"action":"<c:out value="${serverDomain}" />/am/cnt/faqMng/faqCreate.do", "target":"_self", "method":"post"}).submit();
	});


	<%-- 상세보기 (제목 클릭 시) --%>
	$('.detailQna').on('click', function(){
		var idx		= $(this).data('index');
		var index	= $('<input type="hidden" name="BRD_FAQ_IDX" value="'+idx+'"/>');

		<%-- 동적 form생성 후 index만 담음. --%>
		var newForm	= $('<form></form>');
		newForm.append(index);
		newForm.attr({"action":"<c:out value="${serverDomain}" />/am/cnt/faqMng/faqEdit.do", "target":"_self", "method":"post"});
		newForm.appendTo('body');
		newForm.submit();
	});


	<%-- 조회기간 변경 시 --%>
	$('select[name="inqTerm"]').on('change', function(){

		var term = $(this).val();

		if(term == 'AL')			fnDateReset('searchEndDt', 'searchStrDt');
		else if (term == 'W1')		fnDateSet('searchEndDt', 'searchStrDt', 0, 0, 0, 0, 0, -7, '-');
		else if (term == 'W2')		fnDateSet('searchEndDt', 'searchStrDt', 0, 0, 0, 0, 0, -14, '-');
		else if (term == 'M1')		fnDateSet('searchEndDt', 'searchStrDt', 0, 0, 0, 0, -1, 0, '-');
		else if (term == 'M3')		fnDateSet('searchEndDt', 'searchStrDt', 0, 0, 0, 0, -3, 0, '-');
		else if (term == 'M6')		fnDateSet('searchEndDt', 'searchStrDt', 0, 0, 0, 0, -6, 0, '-');
		else if (term == 'Y1')		fnDateSet('searchEndDt', 'searchStrDt', 0, 0, 0, -1, 0, 0, '-');
	});

	 // 페이지 이동
    goPage = function (cPage)
    {
        var $frm = $("#searchForm");
        $frm.find("input[name='cPage']").val(cPage);
        $frm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
        $frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cnt/faqMng/faqList.do", "target":"_self", "method":"post"}).submit();
    };

    fnEmployeeSingleCallback = function(inputArray) {
    	console.log('params',inputArray);
    }

});
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

					<h2 class="title"><span>자주하는 질문</span></h2>
					<h3 class="title"><span>목록</span></h3>

					<form id="searchForm" name="searchForm">
						<input type="hidden" name="searchYn" id="searchYn" value="${searchYn }"/>
						<input type="hidden" name="pageSize" value="<c:out value="${map.pageSize }"/>" />
						<input type="hidden" name="cPage" value="<c:out value="${map.cPage}"/>"/>
						<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
							<colgroup>
								<col style="width: auto;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
							</colgroup>
							<tbody>
								<tr>
									<th><span>조회기간</span></th>
									<td colspan="2">
										<a href="#none" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text small" id="searchStrDt" name="searchStrDt" readonly="readonly" data-target-end="#searchEndDt" placeholder="YYYY-MM-DD" value="<ui:formatDate value='${map.searchStrDt }' pattern='yyyy-MM-dd'/>"/>
										~
										<a href="#none" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text small" id="searchEndDt" name="searchEndDt" readonly="readonly" data-target-start="#searchStrDt" placeholder="YYYY-MM-DD" value="<ui:formatDate value='${map.searchEndDt }' pattern='yyyy-MM-dd'/>"/>
										<select class="select _inqTerm small" name="inqTerm">
											<option value="AL">전체</option>
											<option value="W1" selected="selected">1주일</option>
											<option value="W2">2주일</option>
											<option value="M1">1개월</option>
											<option value="M3">3개월</option>
											<option value="M6">6개월</option>
											<option value="Y1">1년</option>
										</select>
									</td>
									<th><span>유형</span></th>
									<td>
										<select class="select" name="searchBrdCmnComIdx" id="searchBrdCmnComIdx">
											<option value="">전체</option>
											<c:if test="${not empty codes.FAQ_INQUIRY_TYPE_CODE }">
												<c:forEach var="qnaRow" items="${codes.FAQ_INQUIRY_TYPE_CODE }" varStatus="i">
													<option value="<c:out value="${qnaRow.CMN_COM_IDX }"/>" <c:if test="${map.searchBrdCmnComIdx eq qnaRow.CMN_COM_IDX}">selected="selected"</c:if>>
														<c:out value="${qnaRow.CMN_COM_NM }"/>
													</option>
												</c:forEach>
											</c:if>
										</select>
<%-- 										<input type="checkbox" id="searchBrdFaqOftenYn" name="searchBrdFaqOftenYn" <c:if test="${commandMap.searchBrdFaqOftenYn eq 'Y' }">checked="checked"</c:if> value="Y"/><label for="searchBrdFaqOftenYn"> FAQ TOP5 조회</label> --%>
									</td>
									<th><span>검색어</span></th>
									<td>
										<input type="text" class="text" name="searchText" id="searchText" value="${map.searchText }"/>
									</td>
								</tr>
								<tr>
								</tr>
							</tbody>
						</table>
					</form>

					<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
						<a href="javascript:clearForm('searchForm');" class="button small"><span>검색 조건 초기화</span></a>
						<a href="#none" id="_search" class="button small primary"><span>검색</span></a>
					</div>

					 <form id="frm" name="frm">
						 <div class="grid section-button-list">
							<div class="col-1-2 text-left">
								<span class="pages">
									(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
								</span>
							</div>
							<div class="col-1-2 text-right">
								<a href="#none" id="brdCmnComMng" class="button small primary"><span>유형관리</span></a>
								<a href="#none" id="_create" class="button small primary"><span>등록</span></a>
								<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>
							</div>
						</div>
					</form>

					<table cellspacing="0" class="table-col table-b"><!-- table -->
						<colgroup>
							<col style="width: 5%;" />
							<col style="width: 9%;" />
							<col style="width: auto;" />
							<col style="width: 9%;" />
							<col style="width: 6%;" />
							<col style="width: 12%;" />
						</colgroup>
						<thead>
							<tr>
								<th>번호</th>
								<th>유형</th>
								<th>제목</th>
								<th>등록일</th>
								<th>조회수</th>
								<th>등록자</th>
							</tr>
						</thead>
						<tbody>

							<c:choose>
								<c:when test="${searchYn eq null }">
									<tr>
										<td colspan="9"><spring:message code="list.beforeSearch" /></td>
									</tr>
								</c:when>
								<c:otherwise>
									<c:choose>
										<c:when test="${paging.totalRecordCount > 0}">
										<c:set var="listNum" value="${paging.listNum}" />
											<c:forEach var="list" items="${list }" varStatus="i" >
												<tr>
													<td>${listNum }</td>
													<td>${list.BRD_CMN_COM_NM }</td>
													<td class="left">
														<a href="#none" class="list-title detailQna" data-index="${list.BRD_FAQ_IDX }">
															${list.BRD_FAQ_TITLE }
														</a>
													</td>
													<td><ui:formatDate value="${list.BRD_FAQ_REG_DT }" pattern="yyyy-MM-dd"/></td>
													<td>${list.BRD_FAQ_READ_CNT }</td>
													<td>
														<c:out value="${list.BRD_FAQ_REG_NM }"/>(<c:out value="${list.BRD_FAQ_REG_ID }"/>)
													</td>
												</tr>
												<c:set var="listNum" value="${listNum-1}" />
											</c:forEach>
										</c:when>
										<c:otherwise>
											<tr>
												<td class="td_no_result" colspan="9">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
											</tr>
										</c:otherwise>
									</c:choose>
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