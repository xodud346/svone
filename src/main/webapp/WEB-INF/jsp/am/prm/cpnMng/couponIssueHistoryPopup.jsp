<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"><!--<![endif]-->
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
</head>
<body class="page-popup">

<div class="modal">
	<div class="modal-wrapper">
	    <div class="modal-inner">
<!-- 	    	<h2 class="title"><span>상품 상세보기</span></h2> -->
	    	
            <div class="push-guide instant"><!-- push-guide -->
                <i class="icon"><!-- icon --></i>
                <h3 class="title"><span>쿠폰발행내역조회</span></h3>
            </div><!-- // push-guide -->
            
            <form id="frm" name="frm">
	            <div class="grid section-button-list"><!-- 목록 상단 버튼 -->
	                <div class="col-1-2 text-left">
	                    <span class="pages">
	                    	(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)
	                    </span>
	                </div>
	                <div class="col-1-2 text-right">
	                	<a href="javascript:goExcelDown();" class="button small"><span>엑셀다운로드</span></a>
	                    <ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>
	                </div>
	            </div><!-- // 목록 상단 버튼 -->
        	
	        	<table cellspacing="0" class="table-col table-b"><!-- table -->
	                <colgroup>
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                </colgroup>
	                <thead>
	                    <tr>
							<th>No</th>
							<th>고객유형</th>
							<th>회원ID</th>
							<th>회원명</th>
							<th>로그인ID</th>
							<th>운영단위ID</th>
							<th>운영단위명</th>
							<th>쿠폰사용여부</th>
							<th>사용일시</th>
	                    </tr>
	                </thead>
	                <tbody id="tbodyProductList">
	                    <c:choose>
						    <c:when test="${not empty list}">
						    	<c:set var="listNum" value="${paging.listNum}" />
						    	<c:forEach var="item" items="${list }" varStatus="status">
								<tr>
									<td>
										<c:out value="${item.rnum }" />
									</td>
									<td>
										계약
									</td>
									<td>
										<c:out value="${item.memId }" />
									</td>								
									<td>
										<c:out value="${item.memNm }" />
									</td>								
									<td>
									    <c:out value="${item.loginId }" />
									</td>
									<td>
									    <c:out value="${item.oprUntId }" />
									</td>
									<td>
									    <c:out value="${item.oprUntNm }" />
									</td>
									<td>
										<c:choose>
											<c:when test="${item.cpnMemUseYn eq 'Y' }">사용</c:when>
											<c:otherwise>미사용</c:otherwise>
										</c:choose>
									</td>
									<td>
										<c:choose>
											<c:when test="${item.cpnMemUseYn eq 'Y' }"><ui:formatDate value="${item.cpnMemUseDt }" pattern="yyyy.MM.dd HH:mm:ss"/><br/></c:when>
											<c:otherwise>-</c:otherwise>
										</c:choose>
										
									</td>
									
								</tr>
								<c:set var="listNum" value="${listNum-1}" />
						    	</c:forEach>
						    </c:when>
						    <c:otherwise>
						    	<tr>
									<td colspan="9">발행 대상이 없습니다.</td>
								</tr>
						    </c:otherwise>
						</c:choose>
	                </tbody>
	            </table><!-- // table -->
            
				<input type="hidden" name="searchPrdMstCd" value="<c:out value="${commandMap.searchPrdMstCd }"/>"/>
			    <input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/>
			    <input type="hidden" name="CPN_MST_IDX" value="<c:out value="${commandMap.CPN_MST_IDX }"/>"/> 
		    
		    </form>

            <div class="section-pagination"><!-- section pagination -->
                <h4 class="sr-only">목록 페이징</h4>
                <div class="wrap"><!-- 개발 시 wrap 이하 모듈 시작 -->
                    <ui:paging paging="${paging }" jsFunction="goPage" />
                </div>
            </div><!-- // section pagination -->
	        
			<div class="grid section-button-search"><!-- section button -->
				<a href="#none" id="closePopup" class="button small"><span>닫기</span></a>
			</div>
        </div>
    </div>
</div>

<script src="<c:out value="${serverDomain}" />/am/js/vendor/jquery-1.11.2.min.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/plugins.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
<script type="text/javascript">
$(document).ready(function () 
{
	
	//체크박스 전체 선택
    $.checkBoxSelect("checkAll", "checkRow");

    // 검색
    search = function() 
    {
        var $searchForm = $("#searchForm"); 

        $searchForm.find("input[name='cPage']").val("1");
        $searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
        $searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/cpnMng/couponIssueHistoryPopup.do", "target":"_self", "method":"post"}).submit(); 
    };
    
    // 페이지 이동
    goPage = function (cPage) 
    {
        var $frm = $("#frm");
        $frm.find("input[name='cPage']").val(cPage);
        $frm.attr({"action":"<c:out value="${serverDomain}"/>/am/prm/cpnMng/couponIssueHistoryPopup.do", "target":"_self", "method":"post"}).submit();
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
 		var $frm = $("#frm");
        $frm.attr({"action": "<c:out value="${serverDomain}" />/am/prm/cpnMng/couponIssueHistoryExcelDownload.do", "target":"_self", "method":"post"}).submit(); 
    };
    
    
 	$(document).on("click","#closePopup",function()
 	{
 		self.close();
 	});    
 	
});
</script>
</body>
</html>
