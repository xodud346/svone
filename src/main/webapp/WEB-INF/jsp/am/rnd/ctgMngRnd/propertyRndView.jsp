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
				<h2 class="title"><span>R&D속성 목록</span></h2>
				<h3 class="title"><span>조회</span></h3>
				<form id="searchForm" name="searchForm">
					<input type="hidden" id="cPage" name="cPage" value="${commandMap.cPage}"/>
					<input type="hidden" id="pageSize" name="pageSize" value="${commandMap.pageSize}" />
					<input type="hidden" id="prdSprCd" name="prdSprCd" value="20"/>
					<input type="hidden" id="attrCd" name="attrCd" value="" />
					<input type="hidden" id="sort" name="sort" value=""/>
					
					<table class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: auto;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>R&D속성명</span></th>
								<td>
									<input type="text" class="text" style="width: 80%;" id="searchAttrNms" name="searchAttrNms" value="${commandMap.searchAttrNms}" />
									<a href="javascript:multiText('searchAttrNms');" class="icon doc"></a>
								</td>
								<th><span>R&D속성코드</span></th>
								<td>
									<input type="text" class="text" style="width: 80%;" id="searchAttrCds" name="searchAttrCds" value="${commandMap.searchAttrCds}" />
									<a href="javascript:multiText('searchAttrCds');" class="icon doc"></a>
								</td>
							</tr>
							<tr>
								<th><span>일자</span></th>
								<td>
									<select name="dateType" id="dateType">
										<option value="searchRegDate">등록일</option>
										<option value="searchUpdateDate">최종수정일</option>
									</select>
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text" id="searchStartDate" name="searchStartDate" value="${commandMap.searchStartDate}" readonly="readonly" data-target-end="#searchEndDate"/> ~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text" id="searchEndDate" name="searchEndDate" value="${commandMap.searchEndDate}" readonly="readonly" data-target-start="#searchStartDate"/>
									<select name="dateSet" id="dateSet">
										<option value="">전체</option>
										<option value="DAY_1">1일</option>
										<option value="DAY_7">1주일</option>
										<option value="DAY_14">2주일</option>
										<option value="WEEK_1">1개월</option>
										<option value="WEEK_3">3개월</option>
										<option value="WEEK_6">6개월</option>
										<option value="YEAR_1">1년</option>
									</select>
								</td>
								<th><span>사용여부</span></th>
								<td>
									<select name="searchUseYn" id="searchUseYn">
										<option value="" <c:if test="${'' eq commandMap.searchUseYn }">selected</c:if>>전체</option>
										<option value="Y" <c:if test="${'Y' eq commandMap.searchUseYn }">selected</c:if>>사용</option>
										<option value="N" <c:if test="${'N' eq commandMap.searchUseYn }">selected</c:if>>미사용</option>
									</select>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
				<div class="grid section-button-search">
					<a href="javascript:searchClear('searchForm');" id="searchClear" class="button small"><span>초기화</span></a>
					<a href="javascript:search();" class="button small primary"><span>검색</span></a>
				</div>
				<div class="grid section-button-list">
					<div class="col-1-2 text-left">
						<span id="pages" class="pages">
							(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)
						</span>
					</div>
					<div class="col-1-2 text-right">
						<a href="javascript:goForm('');" class="button small primary"><span>등록</span></a>
						<a href="javascript:goExcelDown();" class="button small"><span>엑셀 다운로드</span></a>
						<select class="select" name="selSort" id="selSort">
							<option value="ATTR_CD_ASC">R&D속성명↓</option>
							<option value="ATTR_CD_DESC">R&D속성명↑</option>
							<option value="ATTR_NM_ASC">R&D속성코드↓</option>
							<option value="ATTR_NM_DESC">R&D속성코드↑</option>
							<option value="ATTR_CNT_ASC">R&D속성사용상품군수↓</option>
							<option value="ATTR_CNT_DESC">R&D속성사용상품군수↑</option>
							<option value="REG_DTM_ASC">등록일↓</option>
							<option value="REG_DTM_DESC">등록일↑</option>
							<option value="UPD_DTM_ASC">최종수정일↓</option>
							<option value="UPD_DTM_DESC">최종수정일↑</option>
						</select>
						<ui:pageSizeBox value="${paging.pageSize}" name="pageSize" type="" jsFunction="goPage"/>
					</div>
				</div>
				<!-- 상품속성 리스트 영역 -->
				<div id="propertyList">
					<%@ include file="/WEB-INF/jsp/am/rnd/ctgMngRnd/propertyRndList.jsp" %>
				</div>
				<!-- //상품속성 리스트 영역 -->
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
	
	// 노출기간 옵션선택
	$("#dateSet").change(function(){
		var arrayDate = $(this).val().split('_');
		var dateType = arrayDate[0];
		var dateVal = parseInt(arrayDate[1]);
		
		if("DAY" == dateType) {	// 일
			fnDateSet('searchStartDate', 'searchEndDate', 0, 0, 0, 0, 0, dateVal,  '-');
		} else if("WEEK" == dateType) {	// 월
			fnDateSet('searchStartDate', 'searchEndDate', 0, 0, 0, 0, dateVal, 0,  '-');
		} else if("YEAR" == dateType) {	// 년
			fnDateSet('searchStartDate', 'searchEndDate', 0, 0, 0, dateVal, 0, 0,  '-');
		} else {
			$("#searchStartDate").val("");
			$("#searchEndDate").val("");
		}
	});
	
	// 멀티팝업 호출
	multiText = function(id) {
		multiTextPopup(id);
	}
	
	// 검색
	search = function() {
		$("#propertyList").load("/am/rnd/ctgMngRnd/propertyRndList.do", $searchForm.serialize());
	};
	
	// 페이지 이동
	goPage = function (cPage) {
		$searchForm.find("input[name='pageSize']").val($("select[name='pageSize']").val());
		$("#cPage").val(cPage);
		search();
	};
	
	// 속성 등록/수정 페이지 이동
	goForm = function (attrCd) {
		var h = "";
		
		$("#attrCd").val(attrCd);
		
		if("" != attrCd) {
			h = "370";	
		} else {
			h = "260";
		}
		
		popup('', "700", h, "yes","_propertEditPopup");
		$searchForm.attr({"action":"/am/rnd/ctgMngRnd/propertyRndForm.do", "target":"popup_propertEditPopup", "method":"post"}).submit();
	};
	
	// 엑셀 다운로드
	goExcelDown = function () {
 		var totalCnt = $("#pages .em").html()
 		
		if(totalCnt > 10000){
			alert("엑셀 다운로드는 10000건 이하만 가능합니다.");
			return;
		}else if(totalCnt == 0){
			alert("저장할 내역이 없습니다.");
			return;
		}
		
		$searchForm.attr({"action": "/am/rnd/ctgMngRnd/propertyRndListExcelDownload.do", "target":"_self", "method":"post"}).submit(); 
	};
	
	// 순서 정렬
	$("#selSort").change(function(){
		$("#sort").val($(this).val());
		search();
	});
});

function fnResultText(params) {
	$("#"+params.id).val(params.data);
}


</script>

</body>
</html>
