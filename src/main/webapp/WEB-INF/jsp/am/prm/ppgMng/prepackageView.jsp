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
				<h2 class="title"><span>프리패키지</span></h2>
				<h3 class="title"><span>조회</span></h3>

				<form id="searchForm" name="searchForm">
					<input type="hidden" id="cPage" name="cPage" value="${paging.cPage }"/>
					<input type="hidden" id="pageSize" name="pageSize" value="${paging.pageSize }"/>
					<input type="hidden" id="pkgId" name="pkgId" />
					<input type="hidden" id="searchCnt" name="searchCnt" value="3" />
					
					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 40%;" />
							<col style="width: 10%;" />
							<col style="width: 40%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>산업군</span></th>
								<td>
									<select id="iddtId" name="iddtId" class="select xlarge">
										<option value="">전체</option>
										<c:forEach items="${allIddt }" var="item" varStatus="status">
											<option value="${item.iddtId }">${item.iddtNm }</option>
										</c:forEach>
										<c:forEach items="${prepackageIddt }" var="item" varStatus="status">
											<option value="${item.iddtId }">${item.iddtNm }</option>
										</c:forEach>
									</select>
								</td>
								<th><span>사용 상태</span></th>
								<td>
									<input type="radio" id="useYn1" name="useYn" class="radio" value="" checked="checked" />
									<label for="useYn">전체</label>
									<input type="radio" id="useYn2" name="useYn" class="radio" value="Y" />
									<label for="useYn">사용</label>
									<input type="radio" id="useYn3" name="useYn" class="radio" value="N" />
									<label for="useYn">미사용</label>
								</td>
							</tr>
							<tr>
								<th><span>날짜검색</span></th>
								<td>
									<select id="dateType" name="dateType" class="select">
										<option value="regDtm">등록일</option>
										<option value="updDtm">수정일</option>
									</select>
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
								<th><span>패키지ID</span></th>
								<td>
									<input type="text" class="text-xlarge" name="prePkgId" value="" />
								</td>
							</tr>
							<tr>
								<th><span>대표상품ID</span></th>
								<td>
									<input type="text" class="text-xlarge" id="prdId" name="prdId" value="" />
									<a href="javascript:openSearchProductPopup(this);" class="icon search2"></a>
								</td>
								<th><span>등록자</span></th>
								<td>
									<input type="text" class="text-xlarge" name="regpsnNm" id="regpsnNm" value="" readonly="readonly"/>
									<a href="javascript:fnServiceResult('searchForm', 'regpsnId');" class="icon search2" id="searchServiceManagerNmIco"></a>
									<input type="text" class="text-large" name="regpsnId" id="regpsnId" value="" style="display: none;"/>
								</td>
							</tr>
							<tr>
								<th><span>수정자</span></th>
								<td>
									<input type="text" class="text-xlarge" name="updpsnId" value="" />
									<a href="javascript:couponPop();" class="icon search2"></a>
								</td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="grid section-button-search">
					<a href="javascript:searchClear('searchForm');" class="button small"><span>초기화</span></a>
					<a href="javascript:search();" class="button small primary"><span>조회</span></a>
				</div>

				<h3 class="title"><span>목록</span></h3>

				<div class="grid section-button-list">
					<div class="wrap text-right">
						<a href="javascript:goForm();" class="button small"><span>생성</span></a>
						&nbsp;
						<a href="javascript:goExcelDown();" class="button small"><span>엑셀다운로드</span></a>
						&nbsp;
						<ui:pageSizeBox value="${paging.pageSize}" name="pageSize" type="" jsFunction="goPage"/>
					</div>
				</div>

 				<div id= "prepackageList">
					<%@ include file="/WEB-INF/jsp/am/prm/ppgMng/prepackageList.jsp" %>
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


	search = function(){
		var startDate = new Date($("#searchStartDate").val());
		var endDate = new Date($("#searchEndDate").val());

		if(startDate > endDate){
			alert("종료일이 시작일보다 작습니다.");
			return false;
		}

		$("#prepackageList").load("/am/prm/ppgMng/prepackageList.do", $searchForm.serialize());
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
 
	goForm = function(cPage){
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/prm/ppgMng/prepackageForm.do", "target":"_self", "method":"post"}).submit();
	}
	
	$(document).on("click", "#goRead", function(){
		var idx = $(this).next().val();
		$("#pkgId").val(idx);
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/prm/ppgMng/prepackageRead.do", "target":"_self", "method":"post"}).submit();
	});
	
	$("#searchServiceManagerNmIco").off().on("click" , function(){
		fnServiceResult("searchForm");
	});
	
	//담당자
	fnServiceResultCallback = function(eleId,data){
		// 값 설정
		$("#regpsnId").val(data.EMP_NO);
		$("#regpsnNm").val(data.OPRTR_NM);
	}
	
	openSearchProductPopup = function(id){
		$pre = $(id).prev();
		productPopup("searchForm");
	}
	
 	fnSetProduct = function(params) {
		
 		var prdId = "";
		
		$.each(params, function(index,item){
			if(index < 1) {
				prdId += item.prdId;
   			} else {
				prdId += ","+item.prdId;
			}
			console.log(prdId);
		});
		$("#prdId").val(prdId);
	}

	
 	// 엑셀 다운로드
    goExcelDown = function () {
		var searchYn = $("input[name='searchYn']").val();
		var totalRecordCount = $("input[name='total']").val();
 		
		if(searchYn != "Y"){
			alert("검색을 해주시기 바랍니다.");
			return;
		}
		
        if(totalRecordCount > 10000){
            alert("엑셀 다운로드는 10000건 이하만 가능합니다.");
            return;
        }else if(totalRecordCount == 0){
			alert("저장할 내역이 없습니다.");
			return;
		}
		
 		$("#searchForm").attr({"action": "<c:out value="${serverDomain}" />/am/prm/ppgMng/prepackageExcelDownload.do", "target":"_self", "method":"post"}).submit(); 
    }
});
</script>

</body>
</html>