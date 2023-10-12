<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css">
<!--
-->
</style>
</head>
<body><!-- body class, 중요 -->

<div id="header"><!-- header -->
    <%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</div><!-- // header -->

<div id="container"><!-- container -->

    <div id="aside" class="aside left"><!-- aside -->
        <%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
    </div><!-- // aside -->

    <div id="wrapper"><!-- wrapper -->

        <div id="breadcrumb"></div><!-- breadcrumb -->

        <div id="contents"><!-- contents -->

            <div class="container">

                <h2 class="title"><span>대시보드</span></h2>

                <h3 class="title">
                	<span>
                		<a href="<c:out value="${serverDomain}"/>/am/order/orderList.do?searchYn=Y&searchStartDate=<ui:formatDate value="${commandMap.searchStartDate}" pattern="yyyy-MM-dd"/>&searchEndDate=<ui:formatDate value="${commandMap.searchEndDate}" pattern="yyyy-MM-dd"/>">주문/배송 현황</a>(접속 당일을 포함한 최근30일 기준)
                	</span>
                </h3>
                
                <table cellspacing="0" class="table-col table-b"><!-- table -->
	                <colgroup>
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                </colgroup>
	                <thead>
	                    <tr>
	                        <th>주문접수</th>
	                        <th>결제완료</th>
	                        <th>배송준비중</th>
	                        <th>배송중</th>
	                        <th>배송완료</th>	                        
	                    </tr>
	                </thead>
	                <tbody>
	                	<tr>
	                		<td><fmt:formatNumber value="${orderSummary.PAY_READY_CNT}" type="number"/></td>
	                		<td><fmt:formatNumber value="${orderSummary.PAY_CNT}" type="number"/></td>
	                		<td><span class="strong"><fmt:formatNumber value="${orderSummary.PRD_SEND_READY_CNT}" type="number"/></span></td>
	                		<td><span class="strong"><fmt:formatNumber value="${orderSummary.PRD_SEND_CNT}" type="number"/></span></td>
	                		<td><span class="strong"><fmt:formatNumber value="${orderSummary.PRD_SEND_END_CNT}" type="number"/></span></td>
	                	</tr>	                
	                </tbody>
                </table><!-- // table -->    
                
                <h3 class="title">
                	<span>클레임 현황(접속 당일 누적 주문상태 기준)</span>
                </h3>             
                
                <table cellspacing="0" class="table-col table-b"><!-- table -->
	                <colgroup>
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                </colgroup>
	                <thead>
	                    <tr>
	                        <th>취소접수</th>
	                        <th>교환접수</th>
	                        <th>반품접수</th>
	                        <th>환불접수</th>
	                        <th>업체 취소요청</th>
	                        <th>업체 반품요청</th>
	                        <th>업체 교환요청</th>	                        
	                    </tr>
	                </thead>
	                <tbody>
	                	<tr>
	                		<td><fmt:formatNumber value="${orderClaim.CANCEL_CNT}" type="number"/></td>
	                		<td><span class="strong"><fmt:formatNumber value="${orderClaim.PRD_SWAP_CNT}" type="number"/></span></td>
	                		<td><span class="strong"><fmt:formatNumber value="${orderClaim.PRD_BACK_CNT}" type="number"/></span></td>
	                		<td><fmt:formatNumber value="${orderClaim.REFUND_CNT}" type="number"/></td>
	                		<td><fmt:formatNumber value="${orderClaim.SCM_CNL_Y_CNT}" type="number"/></td>
	                		<td><fmt:formatNumber value="${orderClaim.SCM_CNL_D_CNT}" type="number"/></td>
	                		<td><fmt:formatNumber value="${orderClaim.SCM_CNL_C_CNT}" type="number"/></td>
	                	</tr>	                
	                </tbody>
                </table><!-- // table -->
                
                <h3 class="title">
                	<span><a href="<c:out value="${serverDomain}"/>/am/product/basicProductList.do">상품판매상태 현황</a>(접속 당일 기준)</span>
                </h3>                 
                
                <table cellspacing="0" class="table-col table-b"><!-- table -->
	                <colgroup>
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                </colgroup>
	                <thead>
	                    <tr>
	                        <th>구분</th>
	                        <th>판매중</th>
	                        <th>일시품절</th>
	                        <th>품절</th>
	                        <th>전체</th>	                        	                       
	                    </tr>
	                </thead>
	                <tbody>
	                	<c:choose>
                       		<c:when test="${not empty selectProductSelSummaryList }">
                       			<c:forEach var="row" items="${selectProductSelSummaryList }" varStatus="i">
                       				<tr>
										<td><c:out value="${row.PRD_MST_TITLE }" /></td>
										<td><fmt:formatNumber value="${row.SEL_CNT }" groupingUsed="true" /></td>
										<td><fmt:formatNumber value="${row.NOT_SEL_CNT }" groupingUsed="true" /></td>
										<td><fmt:formatNumber value="${row.OUT_CNT }" groupingUsed="true" /></td>
										<td><fmt:formatNumber value="${row.TOT_CNT }" groupingUsed="true" /></td>
									</tr>
                       			</c:forEach>
                       		</c:when>
                       		<c:otherwise>
                       			<tr><td colspan=5>등록된 상품판매상태가 없습니다.</td></tr>
                       		</c:otherwise>
                       	</c:choose>                
	                </tbody>
                </table><!-- // table -->
                
                <h3 class="title">
                	<span><a href="<c:out value="${serverDomain}"/>/am/member/infoMemberList.do">회원현황</a>(접속 당일 기준)</span>
                </h3> 
                
                <table cellspacing="0" class="table-col table-b"><!-- table -->
	                <colgroup>
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                </colgroup>
	                <thead>
	                    <tr>
	                        <th>구분</th>
	                        <th>통합</th>
	                        <th>간편</th>
	                        <th>기업</th>
	                        <th>탈퇴</th>
	                        <th>휴면</th>	                        	                        	                      
	                    </tr>
	                </thead>
	                <tbody>
	                	<tr>
                            <td>신규</td>
                            <td><fmt:formatNumber value="${memberSummary.BASIC_NEW_CNT }" groupingUsed="true"/></td>
                            <td><fmt:formatNumber value="${memberSummary.SIMPLE_NEW_CNT }" groupingUsed="true"/></td>
                            <td><fmt:formatNumber value="${memberSummary.COMP_NEW_CNT }" groupingUsed="true"/></td>
                            <td><fmt:formatNumber value="${memberSummary.OUT_NEW_CNT }" groupingUsed="true"/></td>
                            <td><fmt:formatNumber value="${memberSummary.REST_NEW_CNT }" groupingUsed="true"/></td>
                        </tr>
                        <tr>
                            <td>월누적</td>
                            <td><fmt:formatNumber value="${memberSummary.BASIC_MONTH_CNT }" groupingUsed="true"/></td>
                            <td><fmt:formatNumber value="${memberSummary.SIMPLE_MONTH_CNT }" groupingUsed="true"/></td>
                            <td><fmt:formatNumber value="${memberSummary.COMP_MONTH_CNT }" groupingUsed="true"/></td>
                            <td><fmt:formatNumber value="${memberSummary.OUT_MONTH_CNT }" groupingUsed="true"/></td>
                            <td><fmt:formatNumber value="${memberSummary.REST_MONTH_CNT }" groupingUsed="true"/></td>
                        </tr>
                        <tr>
                            <td>총누적</td>
                            <td><fmt:formatNumber value="${memberSummary.BASIC_TOTAL_CNT }" groupingUsed="true"/></td>
                            <td><fmt:formatNumber value="${memberSummary.SIMPLE_TOTAL_CNT }" groupingUsed="true"/></td>
                            <td><fmt:formatNumber value="${memberSummary.COMP_TOTAL_CNT }" groupingUsed="true"/></td>
                            <td><fmt:formatNumber value="${memberSummary.OUT_TOTAL_CNT }" groupingUsed="true"/></td>
                            <td><fmt:formatNumber value="${memberSummary.REST_TOTAL_CNT }" groupingUsed="true"/></td>
                        </tr>       
	                </tbody>
                </table><!-- // table -->
                
                <h3 class="title">
                	<span>최근 등록한 상품Q&A</span>
                </h3>     
                
                <table cellspacing="0" class="table-col table-b"><!-- table -->
	                <colgroup>
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                </colgroup>
	                <thead>
	                    <tr>
	                        <th>상품코드</th>
	                        <th>상품명</th>
	                        <th>내용</th>	                        	                        	                      
	                    </tr>
	                </thead>
	                <tbody>
	                	<c:choose>
							<c:when test="${not empty scmProductInquiryList }">
								<c:forEach var="scmProductInquiryRow" items="${scmProductInquiryList }" varStatus="i">
									<tr>
										<td><c:out value="${scmProductInquiryRow.BRD_PRD_MST_CD }" /></td>
										<td><c:out value="${scmProductInquiryRow.BRD_PRD_MST_NM }"/></td>
										<td><c:out value="${scmProductInquiryRow.BRD_INQ_CONTENTS }"/></td>
									</tr>
								</c:forEach>
							</c:when>
							<c:otherwise>
								<tr><td class="td_no_result">등록된 상품Q&A가 없습니다.</td></tr>
							</c:otherwise>
						</c:choose>         
	                </tbody>
                </table><!-- // table -->
                
                <h3 class="title">
                	<span>최근 등록한 상품평</span>
                </h3> 
                
                <table cellspacing="0" class="table-col table-b"><!-- table -->
	                <colgroup>
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                </colgroup>
	                <thead>
	                    <tr>
	                        <th>상품코드</th>
	                        <th>상품명</th>
	                        <th>내용</th>	                        	                        	                      
	                    </tr>
	                </thead>
	                <tbody>
	                	<c:choose>
                       		<c:when test="${not empty scmProductCommentList }">
                       			<c:forEach var="scmProductCommentRow" items="${scmProductCommentList }" varStatus="i">
                       				<tr>
										<td><c:out value="${scmProductCommentRow.PRD_PRD_MST_CD }" /></td>
										<td><c:out value="${scmProductCommentRow.PRD_MST_NM }" /></td>
										<td><c:out value="${scmProductCommentRow.PRD_REV_TITLE }"/></td>
									</tr>
                       			</c:forEach>
                       		</c:when>
                       		<c:otherwise>
                       			<tr><td class="td_no_result">등록된 상품평이 없습니다.</td></tr>
                       		</c:otherwise>
                       	</c:choose>     
	                </tbody>
                </table><!-- // table -->
            </div>

        </div><!-- // contents -->

    </div><!-- // wrapper -->  

    <div id="quickmenu" class="aside right"><!-- quickmenu-->
        <%@ include file="/WEB-INF/jsp/am/include/quick.jsp" %>
    </div><!-- // quickmenu -->

</div><!-- // container -->

<div id="footer">
    <%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>

<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>
<script>
$(function(){

});
//-->
</script>

</body>
</html>
