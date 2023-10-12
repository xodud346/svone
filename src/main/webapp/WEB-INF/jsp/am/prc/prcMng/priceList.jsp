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
				<h2 class="title"><span>가격조회</span></h2>
				<h3 class="title"><span>조회</span></h3>

				<form id="searchForm">
					<input type="hidden" id="searchYn" name="searchYn" />
					<input type="hidden" id="searchPrdId" name="searchPrdId" />
					<input type="hidden" name="selectSort" />

					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
								<col style="width:8%;" />
								<col style="width:25%;" />
								<col style="width:8%;" />
								<col style="width:20%;" />		
								<col style="width:8%;" />
								<col style="width:31%;" />														
						</colgroup>
						<tbody>
							<tr>						
								<th><span>사업장</span></th>							
								<td>
									<label>
										<input type="hidden" id="bzplcId" name="bzplcId" value="${map.bzplcId}" />
										<input type="text" id="bzplcNm" name="bzplcNm" value="${map.bzplcNm }" style="width: 150px;" readonly="readonly"/>
										<a href="#none" onclick="fnBzplcResult('frm')" class="icon search2"></a>
									</label>
								</td>
								<th><span>운영단위</span></th>
								<td>
								<input type="text" id="bzplcId" name="bzplcId" style="width: 80px;" />
									 <input type="text" id="bzplcNm" name="bzplcNm" style="width: 120px;" /> 
									 <a href="javascript:fnOneBzplcResult('frm');" class="icon search2"></a>
								</td>															
								<th><span>상품.그룹ID</span></th>
								<td>
									<input type="text" class="text-large" id="searchId" name="searchId" />
									<a href="javascript:openMultiTextPopup('searchId');" class="icon doc"></a>
								</td>
								<!-- <th><span>상품명</span></th>
								<td>
									<input type="text" class="text" id="searchPrdNm" name="searchPrdNm" />
									<input type="checkbox" class="checkbox" id="total" name="total" onclick="javascript:checkTotal(this);" />
									<label for="total">상품명 전체일지</label>
									<input type="hidden" id="searchFullname" name="searchFullname" value="N" />
								</td>  -->
							</tr>
							<tr>
								<th><span>카테고리</span></th>
								<td>
									<input type="text" class="text" id="searchPrdClsCd" name="searchPrdClsCd" readonly="readonly" />
									<input type="text" class="text" id="searchPrdClsNm" name="searchPrdClsNm" readonly="readonly" />
									<a href="javascript:openCategoryPopup();" class="icon search2"></a>
								</td>
								<th><span>공용전용구분</span></th>
								<td>
									<select class="select" id="selectCategory" name="selectCategory">
										<option value="" selected>공용</option>
										<option value="">전용</option>
									</select>
								</td>
								<th><span>대표상품구분</span></th>
								<td>
									<select class="select" id="selectCategory" name="selectCategory">
										<option value="" selected>대표상품1</option>
										<option value="">대표상품2</option>
									</select>
								</td>								
							</tr>
							<tr>
								<th><span>예외관리상품</span></th>
								<td>
									<select class="select" id="selectCategory" name="selectCategory">
										<option value="" selected>예외관리상품1</option>
										<option value="">예외관리상품2</option>
									</select>
								</td>
								<th><span>SSP상품상태</span></th>
								<td>
									<select class="select" id="selectCategory" name="selectCategory">
										<option value="" selected>SSP상품상태1</option>
										<option value="">SSP상품상태2</option>
									</select>
								</td>
								<th><span>SSP진열상태</span></th>
								<td>
									<select class="select" id="selectCategory" name="selectCategory">
										<option value="" selected>SSP진열상태1</option>
										<option value="">SSP진열상태2</option>
									</select>
								</td>								
							</tr>							
							<tr>
								<th><span>일자</span></th>
								<td colspan="3">
									<select class="select" id="searchDate" name="searchDate">
										<option value="" selected>SSP등록일</option>
										<option value="smro">S-MRO등록일</option>
										<option value="modify">최종수정일</option>
									</select>
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchStartDate" name="searchStartDate" value="${commandMap.searchStartDate}" readonly="readonly" data-target-end="#searchEndDate"/>
									~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchEndDate" name="searchEndDate" value="${commandMap.searchEndDate}" readonly="readonly" data-target-start="#searchStartDate"/>
									<select id="selectDate" name="selectDate" class="select">
										<option value="all">전체</option>
										<option value="1d">1일</option>
										<option value="" selected>1주일</option>
										<option value="2w">2주일</option>
										<option value="1m">1개월</option>
										<option value="3m">3개월</option>
										<option value="6m">6개월</option>
										<option value="1y">1년</option>
									</select>
								</td>
								<th><span>영업담당자</span></th>
								<td>
									<input type="text" class="text" id="searchManagerId" name="searchManagerId" readonly="readonly" />
									<input type="text" class="text" id="searchManagerNm" name="searchManagerNm" readonly="readonly" />
									<a href="javascript:openManagerPopup();" class="icon search2"></a>
								</td>
							</tr>
							<!-- 
							<tr>
								<th><span>키워드</span></th>
								<td colspan="3">
									<select class="select" id="selectKeyword" name="selectKeyword">
										<option value="">브랜드명</option>
										<option value="hashtag">해시Tag</option>
									</select>
									<input type="text" class="text" id="searchKeyword" name="searchKeyword" />
								</td>
								<th><span>대표상품구분</span></th>
								<td>
									<select class="select" id="searchIntgPrdSpr" name="searchIntgPrdSpr">
										<option value="">전체</option>
										<option value="1">통합_가격</option>
										<option value="2">통합_품질</option>
									</select>
								</td>
							</tr>
							<tr>
								<th><span>담당자</span></th>
								<td colspan="3">
									<select class="select" id="selectManager" name="selectManager">
										<option value="">선택</option>
										<option value="chrpsnId">상품담당자</option>
										<option value="chrMdId">구매담당자</option>
										<option value="regpsnId">SSP등록자</option>
										<option value="updpsnId">SSP최종수정자</option>
									</select>
									<input type="text" class="text" id="searchManagerId" name="searchManagerId" readonly="readonly" />
									<input type="text" class="text" id="searchManagerNm" name="searchManagerNm" readonly="readonly" />
									<a href="javascript:openManagerPopup();" class="icon search2"></a>
								</td>
								<th><span>공용전용구분</span></th>
								<td>
									<select class="select" id="searchSspOnlySpr" name="searchSspOnlySpr">
										<option value="">전체</option>
										<option value="41">공용</option>
										<option value="42">전용</option>
									</select>
								</td>
							</tr>
							<tr>
								<th><span>SSP상품상태</span></th>
								<td>
									<select class="select" id="searchUseYn" name="searchUseYn">
										<option value="">전체</option>
										<option value="Y">사용</option>
										<option value="N">미사용</option>
									</select>
								</td>
								<th><span>S-MRO상품상태</span></th>
								<td>
									<select class="select" id="searchUseStatsCd" name="searchUseStatsCd">
										<option value="">전체</option>
										<option value="00">사용</option>
										<option value="10">휴면화</option>
										<option value="20">종결</option>
									</select>
								</td>
								<th><span>가격대상</span></th>
								<td>
									<select class="select" id="searchPrice" name="searchPrice">
										<option value="">전체</option>
										<option value="">해당없음</option>
										<option value="">시황자재</option>
										<option value="">미끼상품</option>
									</select>
								</td>
							</tr>
							<tr>
								<th><span>상품배지</span></th>
								<td>
									<select class="select" id="searchBadge" name="searchBadge">
										<option value="">전체</option>
										<c:forEach items="${badgeList }" var="item" varStatus="status">
											<option value="${item.prdBgCd }">${item.prdBgNm }</option>
										</c:forEach>
									</select>
								</td>
								<th><span>전시상품구분</span></th>
								<td>
									<select class="select" id="searchDisplay" name="searchDisplay">
										<option value="">전체</option>
										<option value="">A타입</option>
										<option value="">B타입</option>
										<option value="">미해당</option>
									</select>
								</td>
								<th><span></span></th>
								<td></td>
							</tr>
							 -->
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
					<input type="hidden" name="searchPrdNm" />
					<input type="hidden" name="searchFullname" />
					<input type="hidden" name="selectCategory" />
					<input type="hidden" name="searchPrdClsCd" />
					<input type="hidden" name="searchSpec" />
					<input type="hidden" name="searchDate" />
					<input type="hidden" name="searchStartDate" />
					<input type="hidden" name="searchEndDate" />
					<input type="hidden" name="searchMnfrNo" />
					<input type="hidden" name="selectKeyword" />
					<input type="hidden" name="searchKeyword" />
					<input type="hidden" name="searchIntgPrdSpr" />
					<input type="hidden" name="selectManager" />
					<input type="hidden" name="searchManagerId" />
					<input type="hidden" name="searchSspOnlySpr" />
					<input type="hidden" name="searchUseYn" />
					<input type="hidden" name="searchUseStatsCd" />
					<input type="hidden" name="searchPrice" />
					<input type="hidden" name="searchBadge" />
					<input type="hidden" name="searchDisplay" />

					<div class="grid section-button-list">
						<div class="wrap text-right">
							<a href="javascript:goExcelDown();" class="button small"><span>엑셀다운로드</span></a>
							<select class="select medium" id="selectSort" name="selectSort">
								<option value="prdIdAsc" selected>상품ID↑</option>		
								<option value="prdIdDesc">상품ID↓</option>
								<option value="prdIdDesc">가격정보갱신일↓</option>
								<option value="prdIdDesc">가격정보갱신일↑</option>	
								<option value="prdNmDesc">상품명↓</option>
								<option value="prdNmAsc">상품명↑</option>			
								<option value="prdNmDesc">사업장ID↑</option>
								<option value="prdNmAsc">사업장ID↓</option>	
								<option value="smroDtmDesc">운영단위ID↑</option>
								<option value="smroDtmAsc">운영단위ID↓</option>
							</select>
							<ui:pageSizeBox type="" name="pagingSize" value="${paging.pageSize }" jsFunction="goPage" />
						</div>
					</div>

					<div id="productList">
						<%@ include file="/WEB-INF/jsp/am/prc/prcMng/priceSubList.jsp" %>
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

	checkTotal = function(id){
		if($(id).is(":checked")){
			$("#searchFullname").val("Y");
		}else{
			$("#searchFullname").val("N");
		}
	}

	openCategoryPopup = function(){
		if($("#selectCategory").val() == ""){
			sspCategoryPopup("searchForm");
		}else{
			sMroCategoryPopup("searchForm");
		}
	}

	fnResultSspCategory = function(object){
		$("#searchPrdClsCd").val(object.prdClsCd);
		$("#searchPrdClsNm").val(object.prdClsNm);
	}

	fnResultSMroCategoryMapp = function(object){
		$("#searchPrdClsCd").val(object.prdClsCd);
		$("#searchPrdClsNm").val(object.prdClsNm);
	}

	fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -7, 0, 0, 0, '-');

	$("#selectDate").change(function(){
		var dateVal = $(this).val();

		if(dateVal == "all"){
			$("#searchStartDate").val("");
			$("#searchEndDate").val("");
		} else if(dateVal == "1d") {
			fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -1, 0, 0, 0, '-');
		} else if(dateVal == ""){
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

	openManufacturerPopup = function(){
		manufacturerPopup("searchForm");
	}

	fnResultManufacturerMapp = function(object){
		$("#searchMnfrNo").val(object.mnfrNo);
		$("#searchMnfrNm").val(object.sgMnfrNm);
	}

	openManagerPopup = function(){
		popup('', "500", "700", "yes","_service3Popup");
		$searchForm.attr({"action":"/am/com/popUp/service3PopupForm.do", "target":"popup_service3Popup", "method":"post"}).submit();
		/* fnService3Result("searchForm"); */
	}

	fnServiceResultCallback = function(object){
		$("#searchManagerId").val(object.CHRPSN_ID);
		$("#searchManagerNm").val(object.CHRPSN_NM);
	}

	goReset = function(){
		$searchForm.find("input").val("");
		$searchForm.find("select").val("");
		fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -7, 0, 0, 0, '-');
	}

	goSearch = function(){
		$("#productList").load("<c:out value="${serverDomain}" />/am/prc/prcMng/priceSubList.do", $searchForm.serialize());
	}

	goExcelDown = function(){
		var searchYn = $("#searchYn").val();
		if(searchYn != "Y"){
			alert("목록 조회 후 다운로드 가능합니다.");
			return;
		}
		var toalCount = $("input[name='total']").val();
		if(toalCount > 10000){
			alert("엑셀 다운로드는 10000건 이하만 가능합니다.");
			return;
		}else if(toalCount == 0){
			alert("저장할 내역이 없습니다.");
			return;
		}
		$listForm.attr({"action": "<c:out value="${serverDomain}" />/am/prd/prdMng/registProductListExcel.do", "target":"_self", "method":"post"}).submit();
	}

	$("#selectSort").change(function(){
		goPage($("#cPage").val());
	});

	goPage = function(cPage){
		$listForm.find("input[name='pageSize']").val($("select[name='pagingSize']").val());
		$("#cPage").val(cPage);
		$("#productList").load("<c:out value="${serverDomain}" />/am/prd/prdMng/registProductList.do", $listForm.serialize());
	}

	goEdit = function(id){
		$("#searchPrdId").val(id);
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/prd/prdMng/registProductRead.do", "target":"_self", "method":"post"}).submit();
	}
});
</script>
</body>
</html>