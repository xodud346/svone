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

                <h2 class="title"><span>제조원 목록</span></h2>
					 
                <h3 class="title"><span>조회</span></h3>
                
                <form id="searchForm" name="searchForm">
                	<input type="hidden" id="cPage" name="cPage" value="${commandMap.cPage}"/>
                    <input type="hidden" id="pageSize" name="pageSize" value="${commandMap.pageSize}" />
                    <input type="hidden" id="sort" name="sort" value=""/>
                    <input type="hidden" id="searchMnfrYn" name="searchMnfrYn" value=""/>
                    
	                <table class="table-row table-a" style="margin-bottom: 0;">
	                    <colgroup>
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                            <th><span>제조원</span></th>
	                            <td>
	                                <input type="text" class="text" style="width: 20%;" id="searchMnfrNo" name="searchMnfrNo" value="${commandMap.searchMnfrNo}" />
	                                <input type="text" class="text" style="width: 30%;" id="searchSgMnfrNm" name="searchSgMnfrNm" value="${commandMap.searchSgMnfrNm}" />
	                                <a href="javascript:manufacturerPop();" class="icon search2"></a>
	                            </td>
	                            
	                            <th><span>수정자</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 20%;" id="searchUpdpsnId" name="searchUpdpsnId" value="${commandMap.searchUpdpsnId}" />
	                                <input type="text" class="text" style="width: 30%;" id="searchUpdpsnNm" name="searchUpdpsnNm" value="${commandMap.searchUpdpsnNm}" />
	                                <a href="javascript:;" class="icon search2"></a>
	                            </td>
	                        </tr>
	                        <tr>
	                        	<th><span>수정일자</span></th>
	                            <td>
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
	                            <th><span>제조원명 상이여부</span></th>
	                            <td>
	                            	<input type="checkbox" id="diffNmChk" name="diffNmChk" class="checkbox">
			            			<input type="hidden" id="diffNm" name="diffNm" value=""/>
	                            </td>
	                        </tr>
	                    </tbody>
	                </table>
                </form>
                <div class="grid section-button-search">
                    <a href="javascript:searchClear('searchForm');" id="searchClear" class="button small"><span>초기화</span></a>
                    <a href="javascript:search('1');" class="button small primary"><span>검색</span></a>
                </div>
                
                <div class="grid section-button-list"><!-- 목록 상단 버튼 -->
               		<div class="col-1-4 text-left">
                        <span id="pages" class="pages">
                        	(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)
                        </span>
					</div>		
					
                    <div class="col-3-4 text-right">
                    	<a href="javascript:goSave();" class="button small primary"><span>저장</span></a>
                    	<a href="javascript:goSave();" class="button small primary"><span>일괄수정</span></a>
                    	<a href="javascript:goExcelDown();" class="button small"><span>엑셀 다운로드</span></a>
                    	<select class="select" name="selSort" id="selSort">
			                <option value="MNFR_NO_ASC">제조원ID↓</option>
			                <option value="MNFR_NO_DESC">제조원ID↑</option>
			                <option value="UPD_DTM_ASC">수정일↓</option>
			                <option value="UPD_DTM_DESC">수정일↑</option>
						</select>
						<ui:pageSizeBox value="${paging.pageSize}" name="pageSize" type="" jsFunction="goPage"/>
                    </div>
               	</div>
				<!-- 상품속성 리스트 영역 -->
				<div id="manufacturerList">
					<%@ include file="/WEB-INF/jsp/am/prd/ctgMng/manufacturerList.jsp" %>
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
	
	$("input[name=diffNmChk]").click(function() {
		if($(this).is(":checked")) {
			$("#diffNm").val("Y");
		} else {3
			$("#diffNm").val("N");
		}
	})
	
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
	
	// 제조원 검색 팝업
    manufacturerPop = function() {
    	manufacturerPopup('searchForm');
    }
	
    $("#searchMnfrNo").change(function(){
    	$("#searchMnfrYn").val("N");
    });
    
    $("#searchSgMnfrNm").change(function(){
    	$("#searchMnfrYn").val("N");
    });
	
    // 검색
    search = function(cPage) {
    	
    	if("Y" != $("#searchMnfrYn").val()) {
    		$("#searchMnfrNo").val("");
    		$("#searchSgMnfrNm").val("");
    	}
    	
    	$("#cPage").val(cPage);
		$("#manufacturerList").load("/am/prd/ctgMng/manufacturerList.do", $searchForm.serialize());
    };
    
    // 페이지 이동
    goPage = function (cPage) {
    	
    	$searchForm.find("input[name='pageSize']").val($("select[name='pageSize']").val());
        search(cPage);
    };
    
 	// 저장 버튼
    goSave = function () {
 		
 		if($("input[name=rowChk]:checked").length < 1) {
 			alert("<spring:message code='error.noDataSelected' />");
 			return false;
 		}
 		
    	var mnfrNoArr = new Array();
    	var sgMnfrNmArr = new Array();
 		
    	$("input[name=rowChk]:checked").each(function(idx, data) {
    		var mnfrNo = $(this).data("no");
    		var sgMnfrNm = $("#sgMnfrNm_"+mnfrNo).val();
    		
    		mnfrNoArr.push(mnfrNo);
    		sgMnfrNmArr.push(sgMnfrNm);
    	});
    	
    	if (confirm( "저장 하시겠습니까?")) {
			$.ajax({
                type:"post",
                url : "/am/prd/ctgMng/manufacturerSave.do",
                data : {"mnfrNoArr":mnfrNoArr, "sgMnfrNmArr":sgMnfrNmArr},
                dataType : "json",
                success : function(data){
                	if(data.result == 'success'){
                		alert("저장되었습니다.");
                		search('1');
                	}else{
                		alert("오류가 발생하였습니다.");
                	}
                },
                error : function(err){
                    alert("오류가 발생하였습니다.\n[" + err.status + "]");
                }
            });
    	}
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
        
        $searchForm.attr({"action": "<c:out value="${serverDomain}" />/am/prd/ctgMng/manufacturerListExcelDownload.do", "target":"_self", "method":"post"}).submit(); 
    };
    
 	// 순서 정렬
    $("#selSort").change(function(){
    	$("#sort").val($(this).val());
    	search('1');
    });
});

// 제조원팜업 return function
function fnResultManufacturerMapp(param) {
	$("#searchMnfrNo").val(param.mnfrNo);
	$("#searchSgMnfrNm").val(param.sgMnfrNm);
	$("#searchMnfrYn").val(param.searchMnfrYn);
}
</script>

</body>
</html>
