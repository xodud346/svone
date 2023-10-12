<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<script type="text/javascript">

$(function(){

	var $searchForm = $("#searchForm");
	var searchYn = '${searchYn}';

	// form 초기화
	frmClear = function() {
		searchClear('searchForm', {
			telType : "",
			useYn : ""
		});
		$searchForm.find('input[type=hidden]').val('');
	}

	if (searchYn == 'Y') {

		var oprUntId = '${map.oprUntId}'; <%-- 운영단위 아이디 --%>
		var oprUntNm = '${map.oprUntNm}';	<%-- 운영단위 이름 --%>
		var chrCsId = '${map.chrCsId}';	<%-- 담당CS 아이디 --%>
		var chrCsNm = '${map.chrCsNm}';	<%-- 담당CS 이름 --%>
		var useYn = '${map.useYn}';	<%-- 사용여부 이름 --%>
		var telType = '${map.telType}';	<%-- 연락처구분 이름 --%>
		var telNm = '${map.telNm}';	<%-- FRONT 표시명 --%>

		$('input[name="useYn"]').prop("checked", false);
		$('#useYn_'+useYn).prop("checked", true);
		$('select[name="telType"]').val(telType).prop("selected", true);

		// 운영단위
		if(oprUntId != ""){
			$("#oprUntId").val(oprUntId);
			$("#oprUntNm").val(oprUntNm);
		}

		// 담당CS
		if(chrCsId != ""){
			$("#chrCsId").val(chrCsId);
			$("#chrCsNm").val(chrCsNm);
		}

		$("#telNm").val(telNm);

	} else {

		frmClear();
	}

	// 검색 엔터 이벤트
	$searchForm.find("input").not(".datepicker").keydown(function (e) {
		if(e.keyCode == 13) {
			search();
		}
	});

	// 검색
	search = function() {
		$('#searchYn').val('Y');
		$searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cnt/hlpMng/helperList.do", "target":"_self", "method":"post"}).submit();
	};

	// 페이지 이동
	goPage = function (cPage)
	{
		$searchForm.find("input[name='cPage']").val(cPage);
		$searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/cnt/hlpMng/helperList.do", "target":"_self", "method":"post"}).submit();
	};

	<%-- 상세보기 (제목 클릭 시) --%>
	$('.detailHelper').on('click', function(){
		var idx		= $(this).data('index');
		var index	= $('<input type="hidden" name="index" value="'+idx+'"/>');

		<%-- 동적 form생성 후 index만 담음. --%>
		var newForm	= $('<form></form>');
		newForm.append(index);
		newForm.attr({"action":"<c:out value="${serverDomain}" />/am/cnt/hlpMng/helperView.do", "target":"_self", "method":"post"});
		newForm.appendTo('body');
		newForm.submit();
	});

	// 운영단위 팝업 Callback
	fnOprUntMultiCallback = function(eleId, params){
		// 초기화
		$("#oprUntId").val("");
		$("#oprUntNm").val("");

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

	// 담당CS 팝업 Callback
	fnServiceResultMultiCallback = function(eleId, params) {
		var id = ''
		,	nm = '';
		console.log("fnServiceResultMultiCallback", eleId, params);
		$.each(params, function(idx, data){
			if(idx != 0){
				id += ',';
				nm += ',';
			}
			id += data.OPRTR_ID;
			nm += data.OPRTR_NM;
		});
		// 값 설정
		$("#chrCsId").val(id);
		$("#chrCsNm").val(nm);
	}

	excelDown = function() {
		var obj = {
				queryId: "Helper.selectHelperList",
				columnInfoFile: "helperListExcel",
				fileName: "고객도우미관리",
				sheetName: "고객도우미관리",
				param: $searchForm.serializeObject()
			}
		excelDownloadSvr(obj);
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

					<h2 class="title"><span>고객도우미관리</span></h2>
					<h3 class="title"><span>조회</span></h3>

					<form id="searchForm" name="searchForm">
						<input type="hidden" name="searchYn" id="searchYn" value="${searchYn }"/>
						<input type="hidden" name="pageSize" value="<c:out value="${map.pageSize }"/>" />
						<input type="hidden" name="cPage" value="<c:out value="${map.cPage}"/>"/>
						<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: auto;" />
								<col style="width: 10%;" />
								<col style="width: auto;" />
								<col style="width: 10%;" />
								<col style="width: auto;" />
							</colgroup>
							<tbody>
								<tr>
									<th scope="col"><span>운영단위</span></th>
									<td>
										<input type="text" class="text" style="width:80%;" name="oprUntNm" id="oprUntNm" value="${map.oprUntNm }" readonly />
										<a href="javascript:oprUntMultiPopup('searchForm', 'oprUntId');" class="icon search2"></a>
										<input type="hidden" name="oprUntId" id="oprUntId" value="${map.oprUntId }"/>
										<input type="hidden" id="oprUntUseYn" name="oprUntUseYn" value="${map.oprUntUseYn }" />
									</td>
									<th scope="col"><span>담당CS명</span></th>
									<td>
										<input type="text" class="text" style="width:80%;" name="chrCsNm" id="chrCsNm" value="${map.chrCsNm }" readonly />
										<a href="javascript:fnServiceResultMulti('searchForm', 'chrCsId');" class="icon search2"></a>
										<input type="hidden" name="chrCsId" id="chrCsId" value="${map.chrCsId }"/>
									</td>
									<th scope="col"><span>FRONT 표시명</span></th>
									<td>
										<input type="text" class="text" style="width:100%;" name="telNm" id="telNm" value="${map.telNm }"/>
									</td>
								</tr>
								<tr>
									<th scope="col"><span>연락처구분</span></th>
									<td>
										<select class="select _telType" name="telType">
											<option value="" selected="selected">전체</option>
											<option value="10">공용</option>
											<option value="20">전담</option>
											<option value="30">상주</option>
										</select>
									</td>
									<th scope="col"><span>사용여부</span></th>
									<td colspan="3">
										<input type="radio" class="radio" name="useYn" id="useYn_" value="" checked="checked" />
										<label for="useYn_">전체</label>
										<input type="radio" class="radio" name="useYn" id="useYn_Y" value="Y" />
										<label for="useYn_Y">사용</label>
										<input type="radio" class="radio" name="useYn" id="useYn_N" value="N"/>
										<label for="useYn_N">미사용</label>
									</td>
								</tr>
							</tbody>
						</table>
					</form>

					<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
						<a href="javascript:excelDown();" class="button small primary"><span>Excel 다운로드</span></a>
						<a href="javascript:frmClear('searchForm');" class="button small"><span>검색 조건 초기화</span></a>
						<a href="javascript:search();" class="button small primary"><span>검색</span></a>
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
							<col style="width: 90px;" />
							<col style="width: 220px;" />
							<col style="width: 100px;" />
							<col style="width: 110px;" />
							<col style="width: auto;" />
							<col style="width: 80px;" />
							<col style="width: 120px;" />
							<col style="width: 200px;" />
							<col style="width: 6%;" />
							<col style="width: 6%;" />
						</colgroup>
						<thead>
							<tr>
								<th scope="col">운영단위ID</th>
								<th scope="col">운영단위</th>
								<th scope="col">Zendesk 그룹ID</th>
								<th scope="col">Zendesk 그룹명</th>
								<th scope="col">FRONT 표시명</th>
								<th scope="col">연락처구분</th>
								<th scope="col">담당자 연락처</th>
								<th scope="col">그룹인원</th>
								<th scope="col">담당 CS</th>
								<th scope="col">사용 여부</th>
							</tr>
						</thead>
						<tbody>

<%-- 							<c:choose> --%>
<%-- 								<c:when test="${searchYn eq null }"> --%>
<!-- 									<tr> -->
<%-- 										<td colspan="10"><spring:message code="list.beforeSearch" /></td> --%>
<!-- 									</tr> -->
<%-- 								</c:when> --%>
<%-- 								<c:otherwise> --%>
									<c:choose>
										<c:when test="${paging.totalRecordCount > 0}">
										<c:set var="listNum" value="${paging.listNum}" />
											<c:forEach var="list" items="${list }" varStatus="i" >
												<tr>
													<td>${list.OPR_UNT_ID }</td>
													<td class="td_ellipsis" style="max-width: 220px;">${list.OPR_UNT_NM }</td>
													<td>${list.ZENDESK }</td>
													<td>
														<a href="#none" class="list-title detailHelper" data-index="${list.OPR_UNT_ID }">
															${list.ZENDESK_NM }
														</a>
													</td>
													<td class="text-left td_ellipsis">${list.TEL_NM }</td>
													<td>${list.TEL_TYPE_NM }</td>
													<td>${list.TEL_NO }</td>
													<td class="text-left td_ellipsis" style="max-width: 200px;">${list.ZEN_USERS }</td>
													<td>${list.CHR_CS_NM }</td>
													<td>
														<c:choose>
															<c:when test="${list.USE_YN eq 'Y'}">
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
												<td colspan="10"><spring:message code="list.empty" /></td>
											</tr>
										</c:otherwise>
									</c:choose>
<%-- 								</c:otherwise> --%>
<%-- 							</c:choose> --%>

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