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

	var searchYn = '${searchYn}';
	var $searchForm = $("#searchForm");

	// 검색 엔터 이벤트
	$searchForm.find("input").not(".datepicker").keydown(function (e) {
		if(e.keyCode == 13) {
			search();
		}
	});

	// form 초기화
	frmClear = function(){
		searchClear('searchForm');
		$("#regId").val('');
		$("#oprUntId").val('');
		$("#oprUntUseYn").val("");
		$(".searchOprUnt").hide();
		$('select[name="inqTerm"]').val('W1').prop("selected", true);
		fnDateSet('searchEndDt', 'searchStrDt', 0, 0, 0, 0, 0, -7, '-');

	}

	if(searchYn == 'Y'){

		var popUpYn	= '${map.popUpYn}';		<%-- 팝업 여부 --%>
		var sort	= '${map.sort}';		<%-- 조회 기준 --%>
		var inqTerm	= '${map.inqTerm}';		<%-- 조회 기간 --%>
		var searchOprUntYn = '${map.searchOprUntYn}'; <%-- 대상 --%>
		var oprUntIds = '${map.oprUntIds}';	<%-- 대상 아이디 --%>
		var oprUntNms = '${map.oprUntNms}';	<%-- 대상 이름 --%>

		$('input[name="popUpYn"]').prop("checked", false);
		$('#popUpYn_'+popUpYn).prop("checked", true);

		$('select[name="sort"]').val(sort).prop("selected", true);
		$('select[name="inqTerm"]').val(inqTerm).prop("selected", true);

		if (UTIL.isEmpty(searchOprUntYn)) searchOprUntYn = "N";
		$('input[name="searchOprUntYn"]').prop("checked", false);
		$('#searchOprUntYn_'+searchOprUntYn).prop("checked", true);

		// 대상
		if(searchOprUntYn != "N"){
			$("#searchOprUntYn_Y").trigger('click');
			$(".searchOprUnt").show();
			$("#oprUntId").val(oprUntIds);
			$("#oprUntNm").val(oprUntNms);
		}
		console.log('oprUntIds,oprUntNms',oprUntIds,oprUntNms);


	} else {

		<%-- 기본 조회기간 --%>
		fnDateSet('searchEndDt', 'searchStrDt', 0, 0, 0, 0, 0, -7, '-');
		frmClear();
	}

	<%-- 등록자 조회 버튼 클릭 시 --%>
	$('#_regSearch').on('click',function(){
		popup('', "500", "600", "yes","_RegSearchPopup");
		$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/cnt/ntcMng/regSearchPopup.do", "target":"popup_RegSearchPopup", "method":"post"}).submit();
	});

	<%-- 조회버튼 클릭 시 --%>
	$('#_search').on('click',function(){
		search();
	});

	<%-- 등록버튼 클릭 시 --%>
	$('#_create').on('click',function(){
		$('#frm').attr({"action":"<c:out value="${serverDomain}" />/am/cnt/ntcMng/noticeCreate.do", "target":"_self", "method":"post"}).submit();
	});


	<%-- 상세보기 (제목 클릭 시) --%>
	$('.detailNotice').on('click', function(){

		var idx		= $(this).data('index');
		var index	= $('<input type="hidden" name="index" value="'+idx+'"/>');

		<%-- 동적 form생성 후 index만 담음. --%>
		var newForm	= $('<form></form>');
		newForm.append(index);
		newForm.attr({"action":"<c:out value="${serverDomain}" />/am/cnt/ntcMng/noticeEdit.do", "target":"_self", "method":"post"});
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

	// 조회 버튼 클릭 시
	search = function () {
		$('input[name="searchYn"]').val("Y");
		$('#searchYn').val('Y');
		$searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cnt/ntcMng/noticeList.do", "target":"_self", "method":"post"}).submit();
	}

	// 페이지 이동
	goPage = function (cPage)
	{
		$searchForm.find("input[name='cPage']").val(cPage);
		$searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/cnt/ntcMng/noticeList.do", "target":"_self", "method":"post"}).submit();
	};

	fnResultReg = function(params){

		$('#regNm').val('');
		$('#regId').val('');

		var id = '';
		var nm = '';

		$.each(params, function(idx, data){
			id = data.NO;
			nm = data.NM;
		})

		$('#regNm').val(nm);
		$('#regId').val(id);
	}

	// 대상(운영단위) 라디오 버튼 클릭 이벤트
	$("input:radio[name=searchOprUntYn]").click(function(){
		if($("#searchOprUntYn_Y").is(":checked")) {
			$(".searchOprUnt").show();
			$("#ntsBzplcPopup").show();
		} else {
			$(".searchOprUnt").hide();
			$("#ntsBzplcPopup").hide();
			$("#oprUntId").val("");
			$("#oprUntNm").val("");
			$("#oprUntUseYn").val("");
		}
	});

// 	oprUntPopup = function(){
// 		popup('', "500", "700", "yes","_oprUntPopupForm");
// 		console.log('searchForm',$("#searchForm"));
// 		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/com/popUp/operate2PopupForm.do", "target":"popup_oprUntPopupForm", "method":"post"}).submit();
// 	}

	fnOprUntMultiCallback = function(eleId, params){
		// 초기화
		$("#oprUntId").val("");
		$("#oprUntNm").val("");
		$("#oprUntUseYn").val("");

		var id = ''
		,	nm = '';

		$.each(params, function(idx, data){
			if(idx != 0){
				id += ',';
				nm += ',';
			}
			id += data.id;
			nm += data.nm;
		});
		// 값 설정
		$("#oprUntId").val(id);
		$("#oprUntNm").val(nm);
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

					<h2 class="title"><span>공지사항</span></h2>
					<h3 class="title"><span>조회조건</span></h3>

					<form id="searchForm" name="searchForm">
						<input type="hidden" name="searchYn" id="searchYn" value="${searchYn }"/>
						<input type="hidden" name="pageSize" value="<c:out value="${map.pageSize }"/>" />
						<input type="hidden" name="cPage" value="<c:out value="${map.cPage}"/>"/>
						<input type="hidden" id="oprUntId" name="oprUntId" value="" />
						<input type="hidden" id="oprUntUseYn" name="oprUntUseYn" value="" />
						<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
							<colgroup>
								<col style="width: 145px;" />
								<col />
								<col style="width: 145px;" />
								<col />
								<col style="width: 145px;" />
								<col />
							</colgroup>
							<tbody>
								<tr>
									<th scope="row"><span>등록자</span></th>
									<td>
										<input type="text" class="text" name="regNm" id="regNm" value="${map.regNm }" readonly />
										<a href="#" id="_regSearch" class="icon search2"></a>
										<input type="hidden" name="regId" id="regId" value="${map.regId }"/>
									</td>
									<th scope="row"><span>팝업 여부</span></th>
									<td>
										<input type="radio" class="radio" name="popUpYn" id="popUpYn_" value="" checked="checked"/>
										<label for="popUpYn_">전체</label>
										<input type="radio" class="radio" name="popUpYn" id="popUpYn_Y" value="Y"/>
										<label for="popUpYn_Y">사용</label>
										<input type="radio" class="radio" name="popUpYn" id="popUpYn_N" value="N"/>
										<label for="popUpYn_N">미사용</label>
									</td>
									<th scope="row"><span>검색어</span></th>
									<td>
										<input type="text" class="text" name="searchText" id="searchText" value="${map.searchText }" width="100%" />
									</td>
								</tr>
								<tr>
									<th scope="row"><span>조회기간</span></th>
									<td colspan="3">
										<select class="select" name="sort" id="sort">
											<option value="reg" selected="selected">등록일</option>
											<option value="post">게시일</option>
										</select>
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
									<th scope="row"><span>대상</span></th>
									<td>
										<input type="radio" id="searchOprUntYn_N" name="searchOprUntYn" class="radio" value="N" checked="checked" />
										<label for="searchOprUntYn_N">전체</label>
										<input type="radio" id="searchOprUntYn_Y" name="searchOprUntYn" class="radio" value="Y" />
										<label for="searchOprUntYn_Y">대상 설정</label>
										<input type="text" class="text searchOprUnt" name="oprUntNm" id="oprUntNm" value="" readonly style="display:none;" />
										<a href="javascript:oprUntMultiPopup('searchForm','oprUntId');" class="icon search2 searchOprUnt" id="ntsBzplcPopup" style="display:none;"></a>
									</td>
								</tr>
							</tbody>
						</table>
					</form>

					<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
						<a href="javascript:frmClear('searchForm');" class="button small"><span>검색 조건 초기화</span></a>
						<a href="#none" id="_search" class="button small primary"><span>검색</span></a>
					</div>

					<h3 class="title"><span>목록</span></h3>

					<form id="frm" name="frm">
						<div class="grid section-button-list">
							<div class="col-1-2 text-left">
								<span class="pages">
									(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
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
							<col style="width: auto;" />
							<col style="width: 6%;" />
							<col style="width: 9%;" />
							<col style="width: 9%;" />
							<col style="width: 6%;" />
							<col style="width: 12%;" />
							<col style="width: 9%;" />
							<col style="width: 6%;" />
						</colgroup>
						<thead>
							<tr>
								<th scope="col">번호</th>
								<th scope="col">제목</th>
								<th scope="col">첨부파일</th>
								<th scope="col">게시 시작일</th>
								<th scope="col">게시 종료일</th>
								<th scope="col">조회수</th>
								<th scope="col">등록자</th>
								<th scope="col">등록일</th>
								<th scope="col">팝업 여부</th>
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
													<td>
														<c:choose>
															<c:when test="${list.BRD_NTS_TOP_YN eq 'Y' }">
																고정
															</c:when>
															<c:otherwise>
																<c:out value="${listNum }"/>
															</c:otherwise>
														</c:choose>
													</td>
													<td class="left">
														<a href="#none" class="list-title detailNotice" data-index="${list.BRD_NTS_IDX }">
															${list.BRD_NTS_TITLE }
														</a>
													</td>
													<td>
														<c:if test="${list.FILE_YN eq 'Y' }">
															<img src="/am/img/admin/icon_file.png"/>
														</c:if>
													</td>
													<td>${list.STR_DT }</td>
													<td>${list.END_DT }</td>
													<td>${list.BRD_NTS_READ_CNT }</td>
													<td>${list.BRD_NTS_REG_NM } (${list.BRD_NTS_REG_EMP_NO })</td>
													<td><ui:formatDate value='${list.BRD_NTS_REG_DT }' pattern='yyyy-MM-dd'/></td>
													<td>
														<c:choose>
															<c:when test="${list.BRD_NTS_POP_YN eq 'Y'}">
																사용
															</c:when>
															<c:otherwise>
																미사용
															</c:otherwise>
														</c:choose>
													</td>
												</tr>
												<c:set var="listNum" value="${listNum-1}" />
											</c:forEach>
										</c:when>
										<c:otherwise>
											<tr>
												<td colspan="9"><spring:message code="list.empty" /></td>
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