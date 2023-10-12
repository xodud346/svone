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

                <h2 class="title"><span>시리즈그룹상품 목록</span></h2>
					 
                <h3 class="title"><span>조회</span></h3>
                
                <form id="searchForm" name="searchForm">
                	<input type="hidden" id="cPage" name="cPage" value="${commandMap.cPage}"/>
                    <input type="hidden" id="pageSize" name="pageSize" value="${commandMap.pageSize}" />
                    <input type="hidden" id="prdGrpId" name="prdGrpId" value="" />
                    <input type="hidden" id="sort" name="sort" value=""/>
                    
	                <table class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
	                    <colgroup>
	                        <col style="width: 10%;" />
	                        <col style="width: 60%;" />
	                        <col style="width: 10%;" />
	                        <col style="width: 20%;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                            <th><span>상품·그룹ID</span></th>
	                            <td>
	                                <input type="text" class="text" style="width:80%;" id="searchPrdGrpId" name="searchPrdGrpId" value="${commandMap.searchPrdGrpId}" />
	                                <a href="javascript:multiTextPopup('searchPrdGrpId');" class="icon doc"></a>
	                            </td>
	                            <th><span>그룹구분</span></th>
	                            <td>
	                                <select class="select" name="searchPrdGrpSprCd" id="searchPrdGrpSprCd">
						                <option value="">전체</option>
						                <option value="S">시리즈</option>
						                <option value="R">연관</option>
									</select>
	                            </td>
	                        </tr>
	                        <tr>
	                        	<th><span>키워드</span></th>
	                            <td>
	                            	<select class="select" name="searchPrdGrp" id="searchPrdGrp">
						                <option value="groupNm">그룹명</option>
						                <option value="productNm">상품명</option>
									</select>
									<input type="text" class="text" style="width:55%;" id="searchPrdGrpNm" name="searchPrdGrpNm" value=""/>
								</td>
								<th><span>사용여부</span></th>
	                            <td>
	                            	<select class="select" name="searchUseYn" id="searchUseYn">
						                <option value="">전체</option>
						                <option value="Y">사용</option>
						                <option value="N">미사용</option>
									</select>
								</td>
							</tr>
							<tr>
	                        	<th><span>담당자</span></th>
	                            <td>
	                            	<select class="select" name="selManagerType" id="selManagerType">
						                <option value="regpsnId">등록자</option>
						                <option value="updpsnId">수정자</option>
									</select>
									<input type="text" class="text" style="width:20%;" id="searchManagerId" name="searchManagerId" value="" readonly/>
									<input type="text" class="text" style="width:35%;" id="searchManagerNm" name="searchManagerNm" value="" readonly/>
									<a href="javascript:Popup();" class="icon search2" id="Popup"></a>
								</td>
								<th></th>
	                            <td></td>
							</tr>
	                        <tr>
	                        	<th><span>일자</span></th>
	                            <td>
	                            	<select class="select" name="selDateType" id="selDateType">
						                <option value="regDtm">등록일</option>
						                <option value="updDtm">최종수정일</option>
									</select>
	                            	<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
	                               	<input type="text" class="text" id="searchStartDate" name="searchStartDate" value="${commandMap.searchStartDate}" readonly="readonly" data-target-end="#searchEndDate"/> ~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text" id="searchEndDate" name="searchEndDate" value="${commandMap.searchEndDate}" readonly="readonly" data-target-start="#searchStartDate"/>
									<select name="selDateSet" id="selDateSet">
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
	                            <th></th>
	                            <td></td>
	                        </tr>
	                    </tbody>
	                </table>
                </form>
                <div class="grid section-button-search">
                    <a href="javascript:searchClear('searchForm');" id="searchClear" class="button small"><span>초기화</span></a>
                    <a href="javascript:search();" class="button small primary"><span>조회</span></a>
                </div>
                
                
                <h3 class="title"><span>목록</span></h3>
                <div class="grid section-button-list"><!-- 목록 상단 버튼 -->
               		<div class="col-1-4 text-left">
                        <span id="pages" class="pages">
                        	(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)
                        </span>
					</div>		
					
                    <div class="col-3-4 text-right">
                    	<a href="javascript:goForm('');" class="button small primary"><span>등록</span></a>
                    	<a href="javascript:excelUpload();" class="button small primary"><span>일괄등록</span></a>
                    	<a href="javascript:excelUpload();" class="button small primary"><span>일괄수정</span></a>
                    	<a href="javascript:goExcelDown();" class="button small"><span>엑셀다운로드</span></a>
                    	<select class="select" name="selSort" id="selSort">
			                <option value="PRD_GRP_ID_ASC">그룹ID↓</option>
			                <option value="PRD_GRP_ID_DESC">그룹ID↑</option>
			                <option value="REG_DTM_ASC">등록일↓</option>
			                <option value="REG_DTM_DESC">등록일↑</option>
			                <option value="UPD_DTM_ASC">최종수정일↓</option>
			                <option value="UPD_DTM_DESC">최종수정일↑</option>
						</select>
						<ui:pageSizeBox value="${paging.pageSize}" name="pageSize" type="" jsFunction="goPage"/>
                    </div>
               	</div>
				<!-- 상품속성 리스트 영역 -->
				<div id="productSeriesList">
					<%@ include file="/WEB-INF/jsp/am/prd/prdMng/productSeriesList.jsp" %>
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
	$("#selDateSet").change(function(){
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
	
	// 정렬 선택
	$("#selSort").change(function() {
		$("#sort").val($("#selSort").val());
		search();
	})
	
    // 검색
    search = function() {
		$("#productSeriesList").load("/am/prd/prdMng/productSeriesList.do", $searchForm.serialize());
    };
    
    // 페이지 이동
    goPage = function (cPage) {
    	
    	$searchForm.find("input[name='pageSize']").val($("select[name='pageSize']").val());
    	$("#cPage").val(cPage);
        search();
    };
    
	// 속성 등록/수정 페이지 이동
	goForm = function (prdGrpId) {
		$("#prdGrpId").val(prdGrpId);
		
		$searchForm.attr({"action":"/am/prd/prdMng/productSeriesForm.do","target":"_self", "method":"post"}).submit();
    };
    
    excelUpload = function() {
    	alert("2차");
    	return false;
    }
    
    popup = function() {
    	alert("....");
    	return false;
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
        
        $searchForm.attr({"action": "/am/prd/prdMng/productSeriesListExcelDownload.do", "target":"_self", "method":"post"}).submit(); 
    };
});

function fnResultText(params) {
	$("#"+params.id).val(params.data);
}

</script>

</body>
</html>
