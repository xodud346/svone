<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css">
</style>
</head>
<body>
<div id="header">
	<%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</div>

<div id="container">
	<div id="aside" class="aside left">
		<%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
	</div>

	<div id="wrapper">
		<div id="breadcrumb">
		</div>

		<div id="contents">
			<div class="container">
				<h2 class="title"><span>기획전 관리</span></h2>
				<h3 class="title"><span>조회</span></h3>

				<form id="searchForm" name="searchForm">
					<input type="hidden" id="cPage" name="cPage" value="${paging.cPage }"/>
					<input type="hidden" id="pageSize" name="pageSize" value="${paging.pageSize }"/>
					<input type="hidden" id="PLN_MST_IDX" name="PLN_MST_IDX" />

					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 40%;" />
							<col style="width: 10%;" />
							<col style="width: 40%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>전시 여부</span></th>
								<td>
									<input type="radio" id="PLN_MST_USE_YN1" name="PLN_MST_USE_YN" class="radio" value="ALL" checked="checked" />
									<label for="PLN_MST_USE_YN1">전체</label>
									<input type="radio" id="PLN_MST_USE_YN2" name="PLN_MST_USE_YN" class="radio" value="Y" />
									<label for="PLN_MST_USE_YN2">전시</label>
									<input type="radio" id="PLN_MST_USE_YN3" name="PLN_MST_USE_YN" class="radio" value="N" />
									<label for="PLN_MST_USE_YN3">미전시</label>
								</td>
								<th><span>기획전 명</span></th>
								<td>
									<input type="text" class="text-xlarge" id="PLN_MST_TITLE" name="PLN_MST_TITLE" value="" />
								</td>
							</tr>
							<tr>
								<th><span>조회 기간</span></th>
								<td>
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchStartDate" name="searchStartDate" value="${commandMap.searchStartDate}" readonly="readonly" data-target-end="#searchEndDate"/>
									~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchEndDate" name="searchEndDate" value="${commandMap.searchEndDate}" readonly="readonly" data-target-start="#searchStartDate"/>
									<select id="dateSet" name="dateSet" class="select small">
										<option value="1w">1주일</option>
										<option value="2w">2주일</option>
										<option value="1m">1개월</option>
										<option value="3m">3개월</option>
										<option value="6m">6개월</option>
										<option value="1y">1년</option>
									</select>
								</td>
								<th><span>대상</span></th>
								<td>
									<input type="radio" class="radio" id="PLN_MST_OPR_YN1" onclick="setTarget(this)" name="PLN_MST_OPR_YN" value="N" checked="checked" />
									<label for="PLN_MST_OPR_YN1">전체</label>
									<input type="radio" class="radio" id="PLN_MST_OPR_YN2" onclick="setTarget(this)" name="PLN_MST_OPR_YN" value="Y" />
									<label for="PLN_MST_OPR_YN2">운영단위 설정</label>
									
									<input type="hidden" id="PLN_MST_OPR_ID" name="PLN_MST_OPR_ID">
									<input type="text" class="text" id="PLN_MST_OPR_NM" name="PLN_MST_OPR_NM" style="display:none;" readonly="readonly" />
									<a href="javascript:operationPopup();" class="icon search2" style="display:none;"></a>
								</td>
							</tr>
							<tr>
								<th><span>카테고리 킬러</span></th>
								<td colspan="3">
									<select name="PLN_MST_CAT_KILLER" class="select large">
										<option value="">전체</option>
										<c:forEach items="${catKillerList }" var="item" varStatus="status">
											<option value="${item.CMN_COM_IDX }">${item.CMN_COM_NM }</option>
										</c:forEach>
									</select>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="grid section-button-search">
					<a href="javascript:searchClear('searchForm');" id="" class="button small"><span>초기화</span></a>
					<a href="javascript:search();" class="button small primary"><span>검색</span></a>
				</div>

				<h3 class="title"><span>목록</span></h3>

				<div class="grid section-button-list">
					<div class="wrap text-right">
						<a href="javascript:goForm();" class="button small primary"><span>등록</span></a>
						&nbsp;
						<a href="javascript:;" id="goExcelDown" class="button small"><span>엑셀 다운로드</span></a>
						&nbsp;
						<ui:pageSizeBox value="${paging.pageSize}" name="pageSize" type="" jsFunction="goPage"/>
					</div>
				</div>

				<div id="planList">
					<%@ include file="/WEB-INF/jsp/am/prm/plnMng/planList.jsp" %>
				</div>
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

<script src="/am/js/common/jquery.ajax.js"></script>
<script>
$(function(){
	var $searchForm = $("#searchForm");
	
	$("#planList").load("/am/prm/plnMng/planList.do", $searchForm.serialize());

	fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -7, 0, 0, 0, '-');

	$("#dateSet").change(function(){
		var dateVal = $(this).val();

		if(dateVal == "1w"){
			fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -7, 0, 0, 0, '-');
		} else if(dateVal == "2w"){
			fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -14, 0, 0, 0, '-');
		} else if(dateVal == "1m"){
			fnDateSet('searchStartDate', 'searchEndDate', 0, -1, 0, 0, 0, 0, '-');
		} else if(dateVal == "3m"){
			fnDateSet('searchStartDate', 'searchEndDate', 0, -3, 0, 0, 0, 0, '-');
		} else if(dateVal == "6m"){
			fnDateSet('searchStartDate', 'searchEndDate', 0, -6, 0, 0, 0, 0, '-');
		} else if(dateVal == "1y"){
			fnDateSet('searchStartDate', 'searchEndDate', -1, 0, 0, 0, 0, 0, '-');
		}
	});

	setTarget = function(id){
		$(id).val() == "Y" ? $("#PLN_MST_OPR_ID").nextAll().show() : $("#PLN_MST_OPR_ID").nextAll().hide();
	}

	operationPopup = function(){
		popup('', "500", "700", "yes","_OperatingPopup");
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/oprUnt/operatingPopup.do", "target":"popup_OperatingPopup", "method":"post"}).submit();
	}

	fnResultOper = function(params){
		var id = "";
		var nm = "";

		$.each(params, function(index, item){
			if(index != 0){
				id += ", ";
				nm += ", ";
			}
			id += item.ID;
			nm += item.NM;
		});

		$("#PLN_MST_OPR_ID").val(id);
		$("#PLN_MST_OPR_NM").val(nm);
	}

	search = function(){
		var startDate = new Date($("#searchStartDate").val());
		var endDate = new Date($("#searchEndDate").val());

		if(startDate > endDate){
			alert("종료일이 시작일보다 작습니다.");
			return false;
		}

		$("#planList").load("/am/prm/plnMng/planList.do", $searchForm.serialize());
	}

	$searchForm.find("input").not(".datepicker").keydown(function(e){
		if(e.keyCode == 13){
			search();
		}
	});

	goPage = function(cPage){
		$searchForm.find("input[name='pageSize']").val($("select[name='pageSize']").val());
		$("#cPage").val(cPage);
		search();
	}

	goForm = function(){
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/prm/plnMng/planForm.do", "target":"_self", "method":"post"}).submit();
	}

	$(document).on("click", "#goEdit", function(){
		var idx = $(this).next().val();
		$("#PLN_MST_IDX").val(idx);
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/prm/plnMng/planEdit.do", "target":"_self", "method":"post"}).submit();
	});

	$(document).on("click", "#goExcelDown", function(){
		
		var searchYn = $("input[name='searchYn']").val();
		var totalRecordCount = $("input[name='total']").val();
		if(totalRecordCount > 10000){
			alert("엑셀 다운로드는 10000건 이하만 가능합니다.");
			return;
		}else if(totalRecordCount == 0){
			alert("저장할 내역이 없습니다.");
			return;
		}
		if(searchYn != "Y"){
			alert("검색을 해주시기 바랍니다.");
			return;
		}
		$("#frm").attr({"action": "<c:out value="${serverDomain}" />/am/prm/plnMng/planListExcel.do", "target":"_self", "method":"post"}).submit();
	});
});
</script>

</body>
</html>