<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- 
<div class="grid section-button-list">
	<div class="col-1-2 text-left">
		<span id="pages" class="pages">
			(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)
		</span>
	</div>
</div>
 -->
<div class="tableOut">
	<table cellspacing="0" class="table-col table-b" style="white-space:nowrap; border-collapse:collapse;">
		<thead>
			<tr>
				<th><span>상품ID</span></th>
				<th><span>요청번호</span></th>
				<th><span>처리상태</span></th>
				<th><span>대표상품그룹ID</span></th>
				<th><span>카테고리</span></th>
				<th><span>공용전용구분</span></th>
				<th><span>대표상품구분</span></th>
				<th><span>예외관리상품</span></th>
			</tr>
		</thead>
		<tbody>
			<c:choose>
				<c:when test="${not empty list }">
					<c:forEach items="${list }" var="item" varStatus="status">
						<tr>
							<td>
								<a href="javascript:goEdit('${item.prdId }');">${item.prdId }</a> 
							</td>
							<td>
								${item.rqstNo}
							</td>
							<td style="text-align:left;">
								${item.procStatsCd}
							</td>
							<td style="text-align:left;">
								${item.ingtPrdGrpId}
							</td>
							<td style="text-align:left;">
								${item.prdClsCd}
							</td>
							<td>
								${item.sspOnlySpr}								 
							</td>
							<td>
								${item.intgPrdSpr}								 
							</td>
						</tr>
					</c:forEach>
				</c:when>
			</c:choose>
		</tbody>
	</table>
</div>
<!-- 
<div class="section-pagination">
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap">
		<ui:paging paging="${paging }" jsFunction="goPage" />
	</div>
</div>
 -->
<script>
$(function(){
	
});
</script>