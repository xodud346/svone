<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
	<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
</head>
<body>
<div id="header">
	<%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</div>
<div id="container">
	<div id="aside" class="aside left"><!-- aside -->
		<%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
	</div>
	<div id="wrapper">
		<div id="breadcrumb"></div>

		<div id="contents">

			<div class="container">

				<h2 class="title"><span>팝업관리</span></h2>

				<h3 class="title"><span>목록</span></h3>

				<form id="searchForm" name="searchForm">
					<input type="hidden" id="cPage" name="cPage" value="${commandMap.cPage}"/>
					<input type="hidden" id="pageSize" name="pageSize" value="${commandMap.pageSize}" />
					<input type="hidden" id="formType" name="formType" value="${commandMap.formType}" />
					<input type="hidden" id="BZPLC_ID" name="BZPLC_ID" value="${commandMap.BZPLC_ID}" />
					<input type="hidden" id="BZMN_REG_NO" name="BZMN_REG_NO" value="${commandMap.BZMN_REG_NO}" />
					<input type="hidden" id="POP_MST_IDX" name="POP_MST_IDX" value="${commandMap.POP_MST_IDX}" />

					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th scope="row"><span>전시채널</span></th>
								<td>
									<input type="radio" id="searchPopMstChnGbn0" name="searchPopMstChnGbn" class="checkbox channelType" value="" <c:if test="${'A' ne commandMap.searchPopMstChnGbn and 'P' ne commandMap.searchPopMstChnGbn and 'M' ne commandMap.searchPopMstChnGbn}">checked="checked" </c:if>/>
									<label for="searchPopMstChnGbn0">ALL</label>
									<input type="radio" id="searchPopMstChnGbn1" name="searchPopMstChnGbn" class="checkbox channelType" value="A" <c:if test="${'A' eq commandMap.searchPopMstChnGbn }">checked="checked" </c:if>/>
									<label for="searchPopMstChnGbn1">전체</label>
									<input type="radio" id="searchPopMstChnGbn2" name="searchPopMstChnGbn" class="checkbox channelType" value="${Code.USER_ENV_TYPE_PC}" <c:if test="${'P' eq commandMap.searchPopMstChnGbn }">checked="checked" </c:if>/>
									<label for="searchPopMstChnGbn2">PC</label>
									<input type="radio" id="searchPopMstChnGbn3" name="searchPopMstChnGbn" class="checkbox channelType" value="${Code.USER_ENV_TYPE_MOBILE}" <c:if test="${'M' eq commandMap.searchPopMstChnGbn }">checked="checked" </c:if>/>
									<label for="searchPopMstChnGbn3">MOBILE</label>
								</td>
							</tr>
							<tr>
								<th scope="row"><span>구분</span></th>
								<td>
									<input type="radio" id="searchPopMstLoginYn1" name="searchPopMstLoginYn" class="checkbox channelType" value="" <c:if test="${'N' ne commandMap.searchPopMstLoginYn and 'Y' ne commandMap.searchPopMstLoginYn }">checked="checked" </c:if>/>
									<label for="searchPopMstLoginYn1">전체</label>
									<input type="radio" id="searchPopMstLoginYn2" name="searchPopMstLoginYn" class="checkbox channelType" value="N" <c:if test="${'N' eq commandMap.searchPopMstLoginYn }">checked="checked" </c:if>/>
									<label for="searchPopMstLoginYn2">로그인전</label>
									<input type="radio" id="searchPopMstLoginYn3" name="searchPopMstLoginYn" class="checkbox channelType" value="Y" <c:if test="${'Y' eq commandMap.searchPopMstLoginYn }">checked="checked" </c:if>/>
									<label for="searchPopMstLoginYn3">로그인후</label>
								</td>
							</tr>
							<tr id="bzplcTab" <c:if test="${'Y' ne commandMap.searchPopMstBzplcYn }">style="display:none;"</c:if>>
								<th scope="row"><span>사업장</span></th>
								<td>
									<input type="radio" id="searchPopMstBzplcYn1" class="radio" name="searchPopMstBzplcYn" value="N" <c:if test="${'Y' ne commandMap.searchPopMstBzplcYn }">checked="checked" </c:if>/>
									<label for="searchPopMstBzplcYn1">전체</label>
									<input type="radio" id="searchPopMstBzplcYn2" class="radio" name="searchPopMstBzplcYn" value="Y" <c:if test="${'Y' eq commandMap.searchPopMstBzplcYn }">checked="checked" </c:if>/>
									<label for="searchPopMstBzplcYn2">사업장별</label>
									<input type="text" class="text" id="BZPLC_NM" name="BZPLC_NM" value="${commandMap.BZPLC_NM}" readonly="readonly" <c:if test="${'Y' ne commandMap.searchPopMstBzplcYn }">style="display:none;"</c:if>/>
									<a href="javascript:bzplcPopup('searchForm');" class="icon search2" id="bzplcPopup" <c:if test="${'Y' ne commandMap.searchPopMstBzplcYn }">style="display:none;"</c:if>></a>
									<a href="javascript:multiTextPopup('BZPLC_ID');" class="icon doc textPopup" id="textPopup" <c:if test="${'Y' ne commandMap.searchPopMstBzplcYn }">style="display:none;"</c:if>></a>
								</td>
							</tr>
							<tr>
								<th scope="row"><span>제목</span></th>
								<td>
									<input type="text" class="text" style="width: 80%;" id="searchTxt" name="searchTxt" value="${commandMap.searchTxt}" />
								</td>
							</tr>
							<!-- 기획서에 없으므로 반영X -->
<!-- 							<tr> -->
<!-- 								<th scope="row"><span>노출기간</span></th> -->
<!-- 								<td colspan=3> -->
<!-- 									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a> -->
<%-- 									<input type="text" class="text" id="searchStartDate" name="searchStartDate" value="${commandMap.searchStartDate}" readonly="readonly" data-target-end="#searchEndDate"/> ~ --%>
<!-- 									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a> -->
<%-- 									<input type="text" class="text" id="searchEndDate" name="searchEndDate" value="${commandMap.searchEndDate}" readonly="readonly" data-target-start="#searchStartDate"/> --%>
<!-- 									<select name="dateSet" id="dateSet"> -->
<!-- 										<option value="7">1주일</option> -->
<!-- 										<option value="15">15일</option> -->
<!-- 										<option value="30">1개월</option> -->
<!-- 										<option value="noEndDt">종료일없음</option> -->
<!-- 									</select> -->
<!-- 								</td> -->
<!-- 							</tr> -->
							<tr>
								<th scope="row"><span>사용상태</span></th>
								<td>
									<input type="radio" id="searchPopMstDplYn1" class="radio" name="searchPopMstDplYn" value="" <c:if test="${'Y' ne commandMap.searchPopMstDplYn and 'N' ne commandMap.searchPopMstDplYn }">checked="checked" </c:if>/>
									<label for="searchPopMstDplYn1">전체</label>
									<input type="radio" id="searchPopMstDplYn2" class="radio" name="searchPopMstDplYn" value="Y" <c:if test="${'Y' eq commandMap.searchPopMstDplYn }">checked="checked" </c:if>/>
									<label for="searchPopMstDplYn2">사용</label>
									<input type="radio" id="searchPopMstDplYn3" class="radio" name="searchPopMstDplYn" value="N" <c:if test="${'N' eq commandMap.searchPopMstDplYn }">checked="checked" </c:if>/>
									<label for="searchPopMstDplYn3">미사용</label>
								</td>
							</tr>
						</tbody>
					</table><!-- // table -->
				</form>

				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
					<a href="javascript:searchFormClear('searchForm');" id="searchClear" class="button small"><span>초기화</span></a>
					<a href="javascript:search();" class="button small primary"><span>검색</span></a>
				</div>

				<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
					<div class="col-1-2 text-left">
						<span id="pages" class="pages">
							(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)
						</span>
					</div>

					<div class="col-1-2 text-right">
						<a href="javascript:goForm('regist', '');" class="button small primary"><span>팝업등록</span></a>
						<ui:pageSizeBox value="${paging.pageSize}" name="pageSize" type="" jsFunction="goPage"/>
					</div>
				</div>
				<!-- 팝업 리스트 영역 -->
				<div id="popList">
					<%@ include file="/WEB-INF/jsp/am/dsp/popMng/popupList.jsp" %>
				</div>
				<!-- //팝업 리스트 영역 -->
			</div>

		</div>

	</div>

	<div id="quickmenu" class="aside right">
		<%@ include file="/WEB-INF/jsp/am/include/quick.jsp" %>
	</div>

</div>

<div id="footer">
	<%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>

<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>
<script>
$(function(){
	// 변수
	var $searchForm = $("#searchForm");

	if("Y" == "${commandMap.listBack}") {
		// 등록/수정페이지에서 목록버튼 클릭시
	} else {
		// 페이지 최초 진입시
		fnDateSet('searchStartDate', 'searchEndDate', 0, 0, 0, 0, 0, 7,  '-');
	}

	// 구분 라디오 버튼 클릭 이벤트
	$("input:radio[name=searchPopMstLoginYn]").click(function(){
		if($("#searchPopMstLoginYn3").is(":checked")) {
			$("#bzplcTab").show();
		} else {
			$("#bzplcTab").hide();
			$("#searchPopMstBzplcYn1").prop('checked', true);
			$("#BZPLC_NM").hide();
			$("#textPopup").hide();
			$("#bzplcPopup").hide();
			$("#BZPLC_ID").val("");
			$("#BZPLC_NM").val("");
			$("#BZMN_REG_NO").val("");
		}
	});

	// 사업장 라디오 버튼 클릭 이벤트
	$("input:radio[name=searchPopMstBzplcYn]").click(function(){
		if($("#searchPopMstBzplcYn2").is(":checked")) {
			$("#BZPLC_NM").show();
			$("#bzplcPopup").show();
			$("#textPopup").show();
		} else {
			$("#BZPLC_NM").hide();
			$("#textPopup").hide();
			$("#bzplcPopup").hide();
			$("#BZPLC_ID").val("");
			$("#BZPLC_NM").val("");
			$("#BZMN_REG_NO").val("");
		}
	});

	// 노출기간 옵션선택
	$("#dateSet").change(function(){
		var dateVal = $(this).val();

		if("7" == dateVal) {	// 1주일
			fnDateSet('searchStartDate', 'searchEndDate', 0, 0, 0, 0, 0, 7,  '-');
		} else if("15" == dateVal) {	// 15일
			fnDateSet('searchStartDate', 'searchEndDate', 0, 0, 0, 0, 0, 15,  '-');
		} else if("30" == dateVal) {	// 1개월
			fnDateSet('searchStartDate', 'searchEndDate', 0, 0, 0, 0, 1, 0,  '-');
		} else if("noEndDt" == dateVal) {
			$("#searchEndDate").val("");
		}
	});

	// 사업장 조회 팝업 return function
	fnResultBzplc = function(params){
		var gubun		= ',';
		var bzplcId		= '';
		var bzplcNm		= '';
		var bzplcNo		= '';

		$.each(params, function(idx, data){
			var id = data.ID;
			var nm = data.NM;
			var no	= data.NO;

			if(idx > 0) {
				bzplcId		= bzplcId+gubun+id;
				bzplcNm		= bzplcNm+gubun+nm;
				bzplcNo		= bzplcNo+gubun+no;
			} else {
				bzplcId		= id;
				bzplcNm		= nm;
				bzplcNo		= no;
			}
		})

		$("#BZPLC_ID").val(bzplcId);
		$("#BZPLC_NM").val(bzplcNm);
		$("#BZMN_REG_NO").val(bzplcNo);
	}

	/*******************************
	 *  멀티텍스트검색 팝업 Start
	 *******************************/
	fnResultText = function(data) {
		console.log('data',data);
		if(data){
			// 초기화
			$("#"+data.id).val("");

			// 값 설정
			$("#"+data.id).val(data.data);
		}
	}
	/*******************************
	 *  멀티텍스트검색 팝업 End
	 *******************************/

	// 검색폼 초기화
	searchFormClear = function (formId){
		searchClear(formId, {
			telType : "",
			useYn : "Y"
		});
		// 사업장 영역 숨기기
		$("#bzplcTab").hide();
		// 사업장 팝업 버튼
		$("#bzplcPopup").hide();
		// 사업장명 노출 영역
		$("#BZPLC_NM").hide();
		// 날짜
		fnDateSet('searchStartDate', 'searchEndDate', 0, 0, 0, 0, 0, 7,  '-');
	}

	// 검색 엔터 이벤트
	$searchForm.find("input").not(".datepicker").keydown(function (e) {
		if(e.keyCode == 13) {
			search();
		}
	});

	// 검색
	search = function() {
		if($("#searchPopMstBzplcYn2").is(":checked")) {
			if("" == $("#BZPLC_NM").val()) {
				alert("사업장을 등록해주세요.");
				return false;
			}
		}

		$("#popList").load("/am/dsp/popMng/popupList.do", $searchForm.serialize());
	};

	// 페이지 이동
	goPage = function (cPage) {
		$searchForm.find("input[name='pageSize']").val($("select[name='pageSize']").val());
		$("#cPage").val(cPage);
		search();
	};

	// 팝업관리 등록/수정 페이지 이동
	goForm = function (formType, popMstIdx) {
		$("#formType").val(formType);

		if('edit' == formType) {
			$("#POP_MST_IDX").val(popMstIdx);
		}

		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/dsp/popMng/popupForm.do", "target":"_self", "method":"post"}).submit();
	};
});
</script>

</body>
</html>
