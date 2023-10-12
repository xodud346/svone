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
				<h2 class="title"><span>이벤트 관리</span></h2>
				<h3 class="title"><span>조회</span></h3>

				<form id="searchForm" name="searchForm">
					<input type="hidden" name="searchYn" id="searchYn" value="${searchYn }"/>
					<input type="hidden" id="pageSize" name="pageSize" value="20"/>
					<input type="hidden" id="cPage" name="cPage" value=""/>
					<input type="hidden" id="evtMstIdx" name="evtMstIdx" value=""/>

					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
							<col style="width: 8%;" />
							<col style="width: 22%;" />
							<col style="width: 8%;" />
							<col style="width: 32%;" />
							<col style="width: 8%;" />
							<col style="width: 22%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>이벤트 구분</span></th>
								<td>
									<input type="radio" id="evtMstGubun1" name="evtMstGubun" class="radio" value="" checked="checked" />
									<label for="evtMstGubun1">전체</label>
									<input type="radio" id="evtMstGubun2" name="evtMstGubun" class="radio" value="P" />
									<label for="evtMstGubun2">진행중</label>
									<input type="radio" id="evtMstGubun3" name="evtMstGubun" class="radio" value="E" />
									<label for="evtMstGubun3">종료</label>
								</td>
								<th><span>이벤트 형태</span></th>
								<td>
									<input type="radio" id="evtMstType1" name="evtMstType" class="radio" value="" checked="checked" />
									<label for="evtMstType1">전체</label>
									<input type="radio" id="evtMstType2" name="evtMstType" class="radio" value="2929" />
									<label for="evtMstType2">일반형</label>
									<input type="radio" id="evtMstType3" name="evtMstType" class="radio" value="710" />
									<label for="evtMstType3">응모형</label>
									<input type="radio" id="evtMstType4" name="evtMstType" class="radio" value="708" />
									<label for="evtMstType4">스템프</label>
								</td>
								<th><span>전시 여부</span></th>
								<td>
									<input type="radio" id="evtMstDplYn1" name="evtMstDplYn" class="radio" value="" checked="checked" />
									<label for="evtMstDplYn1">전체</label>
									<input type="radio" id="evtMstDplYn2" name="evtMstDplYn" class="radio" value="Y" />
									<label for="evtMstDplYn2">전시</label>
									<input type="radio" id="evtMstDplYn3" name="evtMstDplYn" class="radio" value="N" />
									<label for="evtMstDplYn3">미전시</label>
								</td>
							</tr>
							<tr>
								<th><span>조회 기간</span></th>
								<td colspan="3">
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchStrDt" name="searchStrDt" value="${commandMap.searchStrDt}" readonly="readonly" data-target-end="#searchEndDt" placeholder="YYYY-MM-DD"/>
									~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchEndDt" name="searchEndDt" value="${commandMap.searchEndDt}" readonly="readonly" data-target-start="#searchStrDt" placeholder="YYYY-MM-DD"/>
									<select id="inqTerm" name="inqTerm" class="select _inqTerm small">
										<option value="1w">1주일</option>
										<option value="2w">2주일</option>
										<option value="1m">1개월</option>
										<option value="3m">3개월</option>
										<option value="6m">6개월</option>
										<option value="1y">1년</option>
									</select>
								</td>
								<th><span>이벤트 명</span></th>
								<td>
									<input type="text" class="text-xlarge" id="searchText" name="searchText" value="" />
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="grid section-button-search">
					<a href="javascript:clearForm('searchForm');" id="" class="button small"><span>초기화</span></a>
					<a href="javascript:search();" class="button small primary"><span>검색</span></a>
				</div>

				<h3 class="title"><span>목록</span></h3>

				<div id="eventList">
<%-- 					<%@ include file="/WEB-INF/jsp/am/prm/evnMng/eventList.jsp" %> --%>
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
$(window).load(function(){
	var alertMsg = "${alertMsg}";
	if(alertMsg){
		alert(alertMsg);
	}
});
$(function(){
	var $searchForm = $("#searchForm");

	fnDateSet('searchStrDt', 'searchEndDt', 0, 0, -7, 0, 0, 0, '-');

	$("#inqTerm").change(function(){
		var dateVal = $(this).val();

		if(dateVal == "1w"){
			fnDateSet('searchStrDt', 'searchEndDt', 0, 0, -7, 0, 0, 0, '-');
		} else if(dateVal == "2w"){
			fnDateSet('searchStrDt', 'searchEndDt', 0, 0, -14, 0, 0, 0, '-');
		} else if(dateVal == "1m"){
			fnDateSet('searchStrDt', 'searchEndDt', 0, -1, 0, 0, 0, 0, '-');
		} else if(dateVal == "3m"){
			fnDateSet('searchStrDt', 'searchEndDt', 0, -3, 0, 0, 0, 0, '-');
		} else if(dateVal == "6m"){
			fnDateSet('searchStrDt', 'searchEndDt', 0, -6, 0, 0, 0, 0, '-');
		} else if(dateVal == "1y"){
			fnDateSet('searchStrDt', 'searchEndDt', -1, 0, 0, 0, 0, 0, '-');
		}
	});

	clearForm = function(frm) {
		searchClear(frm);
		fnDateSet('searchStrDt', 'searchEndDt', 0, 0, -7, 0, 0, 0, '-');
		$('select[name="inqTerm"]').val('1w');
	}

	search = function(cPage){
		if(cPage){
			$("#cPage").val(cPage);
		} else {
			$("#cPage").val(1);
		}
		var startDate = new Date($("#searchStrDt").val());
		var endDate = new Date($("#searchEndDt").val());

		if(startDate > endDate){
			alert("종료일이 시작일보다 작습니다.");
			return false;
		}

		$("#eventList").load("/am/prm/evnMng/eventList.do", $searchForm.serialize(), function(){
			$searchForm.find("input[name='cPage']").val($("#frm").find("input[name=cPage]").val());
		});
	}

	$searchForm.find("input").not(".datepicker").keydown(function(e){
		if(e.keyCode == 13){
			search();
		}
	});

	goPage = function(cPage){
		$searchForm.find("input[name='pageSize']").val($("select[name='pageSize']").val());
		search(cPage);
	}

	goForm = function(){
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/prm/evnMng/eventCreate.do", "target":"_self", "method":"post"}).submit();
	}

	goEdit = function(obj){
		$("#evtMstIdx").val($(obj).data('index'));
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/prm/evnMng/eventEdit.do", "target":"_self", "method":"post"}).submit();
	}

	// 이벤트 FO 화면 호출
	goEventPage = function(obj) {
		alert('FO 화면 호출 개발진행중...\n\n'+$(obj).data('idx'));
	}

	/*********************************
	 * 엑셀 다운로드 Start
	 *********************************/
	excelDown = function() {
		var obj = {
				queryId: "Event.selectEventList",
				columnInfoFile: "eventListExcel",
				fileName: "이벤트리스트",
				sheetName: "이벤트리스트",
				param: $searchForm.serializeObject()
			}
		excelDownloadSvr(obj);
	}
	/*********************************
	 * 엑셀 다운로드 End
	 *********************************/


	// page start
	search();
});
</script>

</body>
</html>