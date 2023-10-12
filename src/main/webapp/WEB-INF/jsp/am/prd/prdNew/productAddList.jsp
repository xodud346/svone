<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="grid section-button-list">
	<div class="col-1-2 text-left">
		<span id="pages" class="pages">
			(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)
		</span>
	</div>
</div>

<div class="tableOut">
	<table cellspacing="0" class="table-col table-b" style="white-space:nowrap; border-collapse:collapse;">
		<thead>
			<tr>
				<th><span>상품ID</span></th>
				<th><span>대표상품그룹ID</span></th>
				<th><span>대표상품ID</span></th>
				<th><span>공용전용구분</span></th>
				<th><span>대표상품구분</span></th>
				<th><span>S-MRO카테고리</span></th>
				<th><span>상품명</span></th>
				<th><span>대표규격</span></th>
				<th><span>대표상품그룹등록일</span></th>
				<th><span>요청자</span></th>
				<th><span>요청번호</span></th>
				<th><span>SSP등록처리</span></th>
				<th><span>등록자</span></th>
				<th><span>SSP등록일</span></th>
			</tr>
		</thead>
		<tbody>
			<c:choose>
				<c:when test="${not empty list }">
					<c:forEach items="${list }" var="item" varStatus="status">
						<tr>
							<td>
								<a href="javascript:goEdit('${item.coCd }','${item.prdId }');">${item.prdId }</a>
							</td>
							<td> 
								${item.ingtPrdGrpId }
							</td>
							<td>
								${item.intgPrdId }
							</td>
							<td>
								<c:if test="${item.sspOnlySpr eq 'P'}">공용</c:if>
								<c:if test="${item.sspOnlySpr eq 'E'}">전용</c:if>
							</td>
							<td>
								<c:if test="${item.intgPrdId ne '' and item.intgPrdId ne null }">
									<c:if test="${item.intgPrdSpr eq 1 }">통합_가격</c:if>
									<c:if test="${item.intgPrdSpr eq 2 }">통합_품질</c:if>
								</c:if>
								<c:if test="${item.intgPrdId eq '' or item.intgPrdId eq null }">피통합</c:if>
							</td>
							<td style="text-align:left;">
								(${item.prdClsCd })${item.prdClsLvlNm }
							</td>
							<td style="text-align:left;">
								${item.prdNm }
							</td>
							<td style="text-align:left;">
								${item.reprSpec }
							</td>
							<td>
								${fn:substring(item.regDtmIngt, 0, 19) }
							</td>
							<td>
								<c:if test="${item.regpsnIdIngt ne null }">
									(${item.regpsnIdIngt })${item.regpsnNmIngt }
								</c:if>
							</td>
							<td>
								${item.sspPrdRqstId }
							</td>
							<td>
								<c:if test="${item.sspRegYn eq 'N' }">요청</c:if>
								<c:if test="${item.sspRegYn eq 'Y' }">완료</c:if>
							</td>
							<td>
								<c:if test="${item.regpsnIdSsp ne null }">
									(${item.regpsnIdSsp })${item.regpsnNmSsp }
								</c:if>
							</td>
							<td>
								${fn:substring(item.regDtmSsp, 0, 19) }
							</td>
						</tr>
					</c:forEach>
				</c:when>
				<c:otherwise>
					<tr>
						<td class="td_no_result" colspan="14" style="text-align: center;">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
					</tr>
				</c:otherwise>
			</c:choose>
		</tbody>
	</table>
</div>

<div class="section-pagination">
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap">
		<ui:paging paging="${paging }" jsFunction="goPage" />
	</div>
</div>

<script>
$(function(){
	
});
</script>