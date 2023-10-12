<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css">
<!--
-->
</style>
<script type="text/javascript">
$(function(){

	var searchYn = '${searchYn}';

	if(searchYn == 'Y'){

		var inqTerm	= '${map.inqTerm}';		<%-- 조회 기간 --%>
		var faqTyp = '${map.searchBrdCmnComIdx}';	<%-- 유형 --%>

		$('select[name="inqTerm"]').val(inqTerm).prop("selected", true);
// 		$('select[name="searchBrdCmnComIdx"]').val(faqTyp).prop("selected", true);

	} else {

		<%-- 기본 조회기간 --%>
		$('select[name="inqTerm"]').val('W1').prop("selected", true);
		fnDateSet('searchEndDt', 'searchStrDt', 0, 0, 0, 0, 0, -7, '-');
	}

	<%-- 사용 여부--%>
// 	$("input:radio[name=brdAgrUseYn]").click(function(){

// 		$(this).prop('checked', true);
// 	});


	<%-- 조회버튼 클릭 시 --%>
	$('#_search').on('click',function(){
		var $searchForm = $("#searchForm");
		$('#searchYn').val('Y');
		$searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cnt/trmMng/useTermList.do", "target":"_self", "method":"post"}).submit();
	});


	<%-- 등록버튼 클릭 시 --%>
	$('#_create').on('click',function(){
		$('#frm').attr({"action":"<c:out value="${serverDomain}" />/am/cnt/trmMng/useTermCreate.do", "target":"_self", "method":"post"}).submit();

	});

	<%-- 상세보기 (제목 클릭 시) --%>
	$('.detailAgr').on('click', function(){
		var idx		= $(this).data('index');
		var index	= $('<input type="hidden" name="BRD_AGR_IDX" value="'+idx+'"/>');

		<%-- 동적 form생성 후 index만 담음. --%>
		var newForm	= $('<form></form>');
		newForm.append(index);
		newForm.attr({"action":"<c:out value="${serverDomain}" />/am/cnt/trmMng/useTermEdit.do", "target":"_self", "method":"post"});
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
        $frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cnt/trmMng/useTermList.do", "target":"_self", "method":"post"}).submit();
    };



});
//form 초기화
frmClear = function(){
	searchClear('searchForm');
	fnDateSet('searchEndDt', 'searchStrDt', 0, 0, 0, 0, 0, -7, '-');
	$('select[name="inqTerm"]').val('W1').prop("selected", true);
	$('select[name="searchBrdCmnComIdx"]').val('').prop("selected", true);
// 	$("#brdAgrUseAll").val("").prop("checked", true);
}
</script>

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

                <h2 class="title"><span>이용약관</span></h2>
                <h3 class="title"><span>조회</span></h3>

                <form id="searchForm" name="searchForm">
                	<input type="hidden" name="searchYn" id="searchYn" value="${searchYn }"/>
					<input type="hidden" name="pageSize" value="<c:out value="${map.pageSize }"/>" />
					<input type="hidden" name="cPage" value="<c:out value="${map.cPage}"/>"/>
                	<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
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
									<th><span>등록일</span></th>
									<td colspan="2">
										<a href="#none" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text small" id="searchStrDt" name="searchStrDt" readonly="readonly" data-target-end="#searchEndDt" placeholder="YYYY-MM-DD" value="<ui:formatDate value='${map.searchStrDt }' pattern='yyyy-MM-dd'/>"/>
										~
										<a href="#none" id="js-datepickr-end" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
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
									<td colspan="1">
									<select class="select" name="searchBrdCmnComIdx" id="searchBrdCmnComIdx">
										<option value="">전체</option>
										<c:if test="${not empty codes.AGREEMENT_BOARD_TYPE_CODE }">
										<c:forEach var="TrmRow" items="${codes.AGREEMENT_BOARD_TYPE_CODE }" varStatus="i">
										<option value="<c:out value="${TrmRow.CMN_COM_IDX }"/>" <c:if test="${map.searchBrdCmnComIdx eq TrmRow.CMN_COM_IDX}">selected="selected"</c:if>>
											<c:out value="${TrmRow.CMN_COM_NM }"/>
										</c:forEach>
										</c:if>
									</select>
									</td>
									<th><span>상태</span></th>
									<td>
										<input type="radio" name="brdAgrUseYn" id="brdAgrUseAll" value="" class="radio" <c:if test="${'Y' ne commandMap.brdAgrUseYn or 'N' ne commandMap.brdAgrUseYn}">checked="checked" </c:if>/>
										<label for="brdAgrUseAll">전체</label>
										<input type="radio" name="brdAgrUseYn" id="brdAgrUseY" value="Y" class="radio" <c:if test="${'Y' eq commandMap.brdAgrUseYn }">checked="checked" </c:if>/>
										<label for="brdAgrUseY">사용</label>
										<input type="radio" name="brdAgrUseYn" id="brdAgrUseN" value="N" class="radio" <c:if test="${'N' eq commandMap.brdAgrUseYn }">checked="checked" </c:if>/>
										<label for="brdAgrUseN">미사용</label>
									</td>
								</tr>
								<tr>
								<th><span>검색어</span></th>
									<td>
										<input type="text" class="text xlarge" name="searchText" id="searchText" value="${map.searchText}"  />
									</td>
								</tr>
							</tbody>
                	</table><!-- table -->
                </form>
                <div class="grid section-button-search"><!-- 검색 하단 버튼 -->
					<a href="javascript:frmClear();"  class="button small"><span>초기화</span></a>
					<a href="#none" id="_search" class="button small primary"><span>검색</span></a>
				</div>
                <h3 class="title"><span>목록</span></h3>

				     <form id="frm" name="frm">
				     	<div class="grid section-button-list">
							<div class="col-1-2 text-left">
								<span class="pages">
						    		<c:if test="${not empty list}">
						    			<td>
						    				(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
						    			</td>
						    		</c:if>
						    		<c:if test="${empty list }">
						    			<td>
						    				(총 <strong class="em">0</strong>건, 0/0)
						    			</td>
						    		</c:if>
								</span>
							</div>
							<div class="col-1-2 text-right">
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
							<col style="width: 9%;" />
							<col style="width: 9%;" />
							<col style="width: 9%;" />
						</colgroup>
						<thead>
							<tr>
								<th>번호</th>
								<th>유형</th>
								<th>개정이력</th>
								<th>게시일</th>
								<th>등록일</th>
								<th>등록자</th>
								<th>상태</th>
							</tr>
						</thead>
						<tbody>

							<c:choose>
								<c:when test="${searchYn eq null}">
									<tr>
										<td colspan="9">조회 조건을 선택 하신 후, 조회해 주세요.</td>
									</tr>
								</c:when>
								<c:otherwise>
									<c:choose>
										<c:when test="${paging.totalRecordCount > 0}">
										<c:set var="listNum" value="${paging.listNum}" />
											<c:forEach var="list" items="${list}" varStatus="i" >
												<tr>
													<td>${listNum}</td>
													<td>${list.BRD_CMN_COM_NM }</td>
													<td>
														<a href="#none" class="list-title detailAgr" data-index="${list.BRD_AGR_IDX }">
															${list.BRD_AGR_TITLE }
														</a>
													</td>
													<td><ui:formatDate value="${list.BRD_AGR_ST_DT}" pattern="yyyy-MM-dd"/></td>
													<td><ui:formatDate value="${list.BRD_AGR_REG_DT}" pattern="yyyy-MM-dd"/></td>
													<td>
													<c:out value="${list.BRD_FAQ_REG_NM }"/>(<c:out value="${list.BRD_FAQ_REG_ERP }"/>)
													</td>
													<td>${list.BRD_AGR_USE_YN1}</td>
												</tr>
												<c:set var="listNum" value="${listNum-1}" />
											</c:forEach>
										</c:when>
										<c:otherwise>
											<tr>
												<td colspan="9">조회 결과가 없습니다.</td>
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

            </div> <!-- container -->

        </div><!-- contents -->

    </div><!-- wrapper -->

    <div id="quickmenu" class="aside right"><!-- quickmenu-->
        <%@ include file="/WEB-INF/jsp/am/include/quick.jsp" %>
    </div><!-- quickmenu -->

</div><!-- container -->

<div id="footer">
    <%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>


<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>


</body>
</html>
