<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="col-1-2 text-left">
	<span id="pages" class="pages">
		(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" />/<c:out value="${paging.totalPageCount }" />)
	</span>
</div>		

<table cellspacing="0" class="table-col table-b">
	<colgroup>
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
	</colgroup>
	<thead>
		<tr>
			<th>선택</th>
			<th>쿠폰 번호</th>
			<th>쿠폰 종류</th>
			<th>쿠폰 명</th>
			<th>할인 금액/율<br>(최대 할인 금액)</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${not empty list}">
		    	<c:forEach var="item" items="${list}" varStatus="status">
					<tr>
						<td><input type="checkbox" id="COUPON_ID_${item.CPN_MST_IDX}" name="COUPON_IDs" class="checkbox checkRow" data-id="${item.CPN_MST_IDX}" data-nm="${item.CPN_MST_TITLE}"/></td>
						<td>${item.CPN_MST_IDX}</td>
						<td>
							<c:choose>
								<c:when test="${item.CPN_MST_GBN eq 'A'}">일반</c:when>
								<c:when test="${item.CPN_MST_GBN eq 'F'}">배송비</c:when>								
							</c:choose>
						</td>
						<td>${item.CPN_MST_TITLE}</td>
						<td>
							<c:choose>
								<c:when test="${item.CPN_MST_GBN eq 'A'}">
									<c:if test="${item.CPN_MST_SAL_GBN eq 'A'}">
										${item.CPN_MST_SAL_PRC}%<br>(${item.CPN_MST_SAL_PRC}원)										
									</c:if>
									<c:if test="${item.CPN_MST_SAL_GBN eq 'B'}">
										${item.CPN_MST_SAL_PRC}원
									</c:if>
								</c:when>
								<c:when test="${item.CPN_MST_GBN eq 'F'}">-</c:when>								
							</c:choose>
						</td>
					</tr>	
		    	</c:forEach>
		    </c:when>
		    <c:otherwise>
		    	<tr>
					<td class="td_no_result" colspan="5">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
				</tr>
		    </c:otherwise>
		</c:choose>
	</tbody>
</table>
<div class="section-pagination">
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap">
		<ui:paging paging="${paging}" jsFunction="goPage" />
	</div>
</div>