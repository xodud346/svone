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
				<form id="searchForm" name="searchForm">
					<input type="hidden" id="cPage" name="cPage" value="${commandMap.cPage}" /> 
					<input type="hidden" id="pageSize" name="pageSize" value="${commandMap.pageSize}" />
					<input type="hidden" id="chrpsnSeq" name="chrpsnSeq" value="" />
					<input type="hidden" id="chrpsnId" name="chrpsnId" value="" />
					<input type="hidden" id="sort" name="sort" value="" /> 
					
				<h2 class="title"><span>상품담당자 목록</span></h2>
				<h3 class="title"><span>조회</span></h3>
					<table class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 55%;" />
							<col style="width: 15%;" />
							<col style="width: 30%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>상품군</span></th>
								<td>
									<input type="hidden" id="prdClsCd" name="prdClsCd" value="${commandMap.prdClsCd}"/>
									<input type="text" class="text" style="width: 78%;" id="prdClsLvlNm" name="prdClsLvlNm" value="${commandMap.prdClsLvlNm}" readonly/>
									<a href="javascript:productGroupPopup('searchForm');" class="icon search2"></a>
								</td>
								<th><span>상품담당자 상태</span></th>
								<td>
									<input type="radio" id="searchUseYn2" class="radio" name="searchUseYn" value="Y" <c:if test="${'Y' eq commandMap.searchUseYn }"></c:if>checked="checked"/>
									<label for="searchUseYn2">사용</label>
									<input type="radio" id="searchUseYn3" class="radio" name="searchUseYn" value="N" <c:if test="${'N' eq commandMap.searchUseYn }"> </c:if>/>
									<label for="searchUseYn3">삭제</label>
								</td>
							</tr>
							<tr>
								<th><span>담당자</span></th>
								<td>
									<select name="personId" style="width:25%;" id="personId">
										<option value="productId" <c:if test="${'' eq commandMap.personId}">selected</c:if>>상품담당자</option>
										<option value="regpsnId" <c:if test="${'Y' eq commandMap.personId}">selected</c:if>>등록자</option>
										<option value="updpsnId" <c:if test="${'N' eq commandMap.personId}">selected</c:if>>수정자</option>
									</select> 
									<input type="text" class="text1" style="width: 25%;" id="searchChrpsnId" name="searchChrpsnId" value="${commandMap.searchChrpsnId}" readonly/> 
									<input type="text" class="text2" style="width: 25%;" id="searchChrpsnNm" name="searchChrpsnNm" value="${commandMap.searchChrpsnNm}" readonly/>
									<a href="javascript:fnPersonResult('searchForm');" class="icon search2"></a>
								</td>
								<th><span>상품담당자 구분</span></th>
								<td>
									<select name="chrpsnSprCd" id="chrpsnSprCd">
										<option value="" <c:if test="${'' eq commandMap.chrpsnSprCd}">selected</c:if>>전체</option>
										<option value="0" <c:if test="${'0' eq commandMap.chrpsnSprCd}">selected</c:if>>정</option>
										<option value="1" <c:if test="${'1' eq commandMap.chrpsnSprCd}">selected</c:if>>부</option>
									</select>
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
	                            <th><span>상품담당자 미등록</span></th>
	                            <td>
	                            	<input type="hidden" id="boss" name="boss"/>
	                               	<input type="checkbox" id="chkBoss" class="radio" name="chkBoss"/>
									<label for="chkBoss">정/부</label>
									<input type="hidden" id="load" name="load"/>
									<input type="checkbox" id="chkLoad" class="radio" name="chkLoad"/>
									<label for="chkLoad">부</label>
	                            </td>
	                        </tr>
						</tbody>
					</table>
				</form>
				<div class="grid section-button-search">
					<a href="javascript:searchClear('searchForm');" id="searchClear" class="button small"><span>초기화</span></a>
					<a href="javascript:search();" class="button small primary"><span>조회</span></a>
				</div>
				 <div class="grid section-button-list"><!-- 목록 상단 버튼 -->
              		<div class="col-1-4 text-left">
                       <span id="pages" class="pages">
                       	(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)
                       </span>
					</div>	

				 	<div class="col-3-4 text-right">
                    	<a href="javascript:goForm('');" class="button small primary"><span>등록</span></a>
                    	<a href="javascript:goBatch();" class="button small primary"><span>일괄등록</span></a>
                    	<a href="javascript:goRevise();" class="button small primary"><span>일괄수정</span></a>
                    	<a href="javascript:goExcelDown();" class="button small"><span>엑셀다운로드</span></a>
                    	<select class="select" name="selSort" id="selSort">
			                <option value="PRD_CLS_CD_DESC">상품군ID↓</option>
			                <option value="PRD_CLS_CD_ASC">상품군ID↑</option>
			                <option value="REG_DTM_DESC">등록일↓</option>
			                <option value="REG_DTM_ASC">등록일↑</option>
			                <option value="UPD_DTM_DESC">최종수정일↓</option>
			                <option value="UPD_DTM_ASC">최종수정일↑</option>
						</select>
						<ui:pageSizeBox value="${paging.pageSize}" name="pageSize" type="" jsFunction="goPage"/>
                   	</div>
             		</div>
				<!-- 상품담당자 리스트 영역 -->
				<div id="personList">
					<%@ include file="/WEB-INF/jsp/am/prd/prsMng/personList.jsp" %>
				</div>
				<!-- //상품담당자 리스트 영역 -->
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
	
	$("#chkBoss").click(function() {
		if($(this).is(":checked")) {
			$("#boss").val("Y");
		} else {
			$("#boss").val("");
		}
	})
	
	$("#chkLoad").click(function() {
		if($(this).is(":checked")) {
			$("#load").val("Y");
		} else {
			$("#load").val("");
		}
	})
	
	//조회 버튼
	search = function(){
		$("#personList").load("/am/prd/prsMng/personList.do", $searchForm.serialize());
		//$('#searchForm').attr({"action":"<c:out value="${serverDomain}" />/am/prd/prsMng/personList.do", "target":"_self", "method":"post"}).submit();
	}
	
	// 페이지 이동
    goPage = function (cPage) {
    	
    	$searchForm.find("input[name='pageSize']").val($("select[name='pageSize']").val());
    	$("#cPage").val(cPage);
        search();  
    };
    
 	// 등록 버튼
 	goForm = function (chrpsnSeq, chrpsnId) {
	 	var h = "";
		
	 	$("#chrpsnSeq").val(chrpsnSeq);
		$("#chrpsnId").val(chrpsnId);
		
		 if("" != chrpsnId) {
			h = "570";	
		} else {
			h = "450";
		} 
		 popup('', "600", h, "yes","_personCreate");
	     $searchForm.attr({"action":"/am/prd/prsMng/personCreate.do", "target":"popup_personCreate", "method":"post"}).submit();
		
	};
    
	//일괄등록
	goBatch = function () {
		alert("저장할 내역이 없습니다.");
		
	}
    
    //일괄수정
    goRevise = function () {
		alert("저장할 내역이 없습니다.");
		
	}
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
        
        $searchForm.attr({"action": "<c:out value="${serverDomain}" />/am/prd/prsMng/personListExcelDownload.do", "target":"_self", "method":"post"}).submit(); 
 	};

 	// 순서 정렬
    $("#selSort").change(function(){
    	$("#sort").val($(this).val());
    	
    	goPage($("#cPage").val());

    });
});

//담당자 팝업
function fnPersonResult(frm){
	popup('', "700", "700", "yes","_personPopup");
	$('#'+frm).attr({"action":"/am/prd/prsMng/personPopupForm.do", "target":"popup_personPopup", "method":"post"}).submit();
} 

//상품군ID 팝업
function productGroupPopup(frm){
	popup('', "700", "500", "yes", "_productGroupPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/prd/productGroupPopupForm.do", "target":"popup_productGroupPopup", "method":"post"}).submit();
}



//담당자 호출
function fnPersonResultCallback(inputArray) {
	$("#searchChrpsnId").val(inputArray.OPRTR_ID);
	$("#searchChrpsnNm").val(inputArray.OPRTR_NM);   //off
}

//상품ID 호출
function fnResultPrdGroupSingleCallback(eleId,data) {
	$("#prdClsLvlNm").val(data.prdClsLvlNm);
	$("#prdClsCd").val(data.prdClsCd);	
}

</script>
</body>
</html>