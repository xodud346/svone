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
			<div id="container">
				<h2 class="title"><span>SSP 상품추가 목록</span></h2>
				<h3 class="title"><span>조회</span></h3>

				<form id="searchForm">
					<input type="hidden" id="searchYn" name="searchYn" />
					<input type="hidden" id="searchCoCd" name="searchCoCd" />
					<input type="hidden" id="searchPrdId" name="searchPrdId" />
					<input type="hidden" name="selectSort" />

					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
							<col style="width:10%;" />
							<col style="width:60%;" /> 
							<col style="width:10%;" />
							<col style="width:20%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>상품.대표상품그룹ID</span></th>
								<td>
									<input type="text" class="text-large" id="searchId" name="searchId" placeholder="상품ID, 대표상품그룹ID, 요청번호" />
									<a href="javascript:openMultiTextPopup('searchId');" class="icon doc"></a>
								</td>
								<th><span>공용전용구분</span></th>
								<td>
									<select class="select" name="searchSspSpr">
										<option value="">전체</option>
										<option value="41">공용</option>
										<option value="42">전용</option>
									</select>
								</td>
							</tr>
							<tr>
								<th><span>S-MRO카테고리</span></th>
								<td>
									<input type="text" class="text-medium" id="searchPrdClsCd" name="searchPrdClsCd" readonly="readonly" />
									<input type="text" class="text-medium" id="searchPrdClsNm" name="searchPrdClsNm" readonly="readonly" />
									<a href="javascript:openSMroCategoryPopup();" class="icon search2"></a>
								</td>
								<th><span>대표상품구분</span></th>
								<td>
									<select class="select" name="searchPrdGrp">
										<option value="">전체</option>
										<option value="1">통합_가격</option>
										<option value="2">통합_품질</option>
										<option value="N">피통합</option>
									</select>
								</td>
							</tr>
							<tr>
								<th><span>일자</span></th>
								<td>
									<select class="select" name="searchDate">
										<option value="">대표상품그룹등록일</option>
										<option value="ssp">SSP등록일</option>
									</select>

									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchStartDate" name="searchStartDate" value="${commandMap.searchStartDate}" readonly="readonly" data-target-end="#searchEndDate" />
									~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchEndDate" name="searchEndDate" value="${commandMap.searchEndDate}" readonly="readonly" data-target-start="#searchStartDate" />

									<select id="selectDate" name="selectDate" class="select small">
										<option value="">전체</option>
										<option value="1w">1주일</option>
										<option value="2w">2주일</option>
										<option value="1m">1개월</option>
										<option value="3m">3개월</option>
										<option value="6m">6개월</option>
										<option value="1y">1년</option>
									</select>
								</td>
								<th><span>SSP등록처리</span></th>
								<td>
									<select class="select" id="searchSspReg" name="searchSspReg">
										<option value="N">요청</option>
										<option value="Y">완료</option>
										<option value="">전체</option>
									</select>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="grid section-button-search">
					<a href="javascript:goReset();" class="button small"><span>초기화</span></a>
					<a href="javascript:goSearch();" class="button small primary"><span>조회</span></a>
				</div>

				<h3 class="title"><span>목록</span></h3>

				<form id="listForm">
					<input type="hidden" id="cPage" name="cPage" value="${paging.cPage }" />
					<input type="hidden" id="pageSize" name="pageSize" value="${paging.pageSize }" />
					<input type="hidden" name="searchYn" value="Y" />
					<input type="hidden" name="searchId" />
					<input type="hidden" name="searchSspSpr" />
					<input type="hidden" name="searchPrdClsCd" />
					<input type="hidden" name="searchPrdGrp" />
					<input type="hidden" name="searchDate" />
					<input type="hidden" name="searchStartDate" />
					<input type="hidden" name="searchEndDate" />
					<input type="hidden" name="searchSspReg" />
					<input type="hidden" name="searchSort" />

					<div class="grid section-button-list">
						<div class="wrap text-right">
							<a href="javascript:;" class="button small primary"><span>일괄등록</span></a>
							<a href="javascript:goExcelDown();" class="button small"><span>엑셀다운로드</span></a>
							<select class="select medium" id="selectSort" name="selectSort">
								<option value="">대표상품그룹등록일↓</option>
								<option value="intgDtmAsc">대표상품그룹등록일↑</option>
								<option value="sspDtmDesc">SSP등록일↓</option>
								<option value="sspDtmAsc">SSP등록일↑</option>
								<option value="intgIdDesc">대표상품그룹ID↓</option>
								<option value="intgIdAsc">대표상품그룹ID↑</option>
							</select>
							<ui:pageSizeBox type="" name="pagingSize" value="${paging.pageSize }" jsFunction="goPage" />
						</div>
					</div>

					<div id="productList">
						<%@ include file="/WEB-INF/jsp/am/prd/prdNew/productAddList.jsp" %>
					</div>
				</form>
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
	var $listForm = $("#listForm");

	openMultiTextPopup = function(id){
		multiTextPopup(id);
	}

	fnResultText = function(object){
		$searchForm.find("input[name='searchId']").val(object.data);
	}

	openSMroCategoryPopup = function(){
		sMroCategoryPopup('searchForm');
	}

	fnResultSMroCategoryMapp = function(object){
		$("#searchPrdClsCd").val(object.prdClsCd);
		$("#searchPrdClsNm").val(object.prdClsNm);
	}

	$("#selectDate").change(function(){
		var dateVal = $(this).val();
		if(dateVal == ""){
			$("#searchStartDate").val("");
			$("#searchEndDate").val("");
		} else if(dateVal == "1w"){
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

	goReset = function(){
		$searchForm.find("input").val("");
		$searchForm.find("select").val("");
	}

	goSearch = function(){
		$searchForm.find("input[name='searchYn']").val("Y");
		$searchForm.find("select[name='selectSort']").val($("#selectSort").val());
		$listForm.find("input[name='searchId']").val($("#searchId").val());
		$listForm.find("input[name='searchSspSpr']").val($("#searchSspSpr").val());
		$listForm.find("input[name='searchPrdClsCd']").val($("#searchPrdClsCd").val());
		$listForm.find("input[name='searchPrdGrp']").val($("#searchPrdGrp").val());
		$listForm.find("input[name='searchDate']").val($("#searchDate").val());
		$listForm.find("input[name='searchStartDate']").val($("#searchStartDate").val());
		$listForm.find("input[name='searchEndDate']").val($("#searchEndDate").val());
		$listForm.find("input[name='searchSspReg']").val($("#searchSspReg").val());

		$("#productList").load("<c:out value="${serverDomain}" />/am/prd/prdNew/productAddList.do", $searchForm.serialize());
	}

	goSearch();

	goExcelDown = function(){
		var toalCount = $("input[name='total']").val();
		if(toalCount > 10000){
			alert("엑셀 다운로드는 10000건 이하만 가능합니다.");
			return;
		}else if(toalCount == 0){
			alert("저장할 내역이 없습니다.");
			return;
		}
		$listForm.attr({"action": "<c:out value="${serverDomain}" />/am/prd/prdNew/productAddListExcel.do", "target":"_self", "method":"post"}).submit();
	}

	$("#selectSort").change(function(){
		goPage($("#cPage").val());
	});

	goPage = function(cPage){
		$listForm.find("input[name='pageSize']").val($("select[name='pagingSize']").val());
		$("#cPage").val(cPage);
		$("#productList").load("<c:out value="${serverDomain}" />/am/prd/prdNew/productAddList.do", $listForm.serialize());
	}

	goEdit = function(cd, id){
		console.log(cd);
		$("#searchCoCd").val(cd);
		$("#searchPrdId").val(id);

		$.ajax({
			url : "<c:out value="${serverDomain}" />/am/prd/prdNew/productCheck.json",
			type : "post",
			dataType : "json",
			data : { "searchCoCd" : cd, "searchPrdId" : id },
			success : function(data){
				console.log(data);
				if(data > 0){
					$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/prd/prdMng/registProductRead.do", "target":"_self", "method":"post"}).submit();
				}else{
					$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/prd/prdNew/productAddRead.do", "target":"_self", "method":"post"}).submit();
				}
			},
			error : function(){
				console.log("ajax error");
			}
		});
	}
});
</script>
</body>
</html>
