<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<input type="hidden" name="total" value="<c:out value="${paging.totalRecordCount }" />" />
<div class="grid section-button-list">
	<div class="col-1-2 text-left">
		<span>
			(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
		</span>
	</div>
</div>

<table cellspacing="0" class="table-col table-b" style="table-layout:fixed;">
	<colgroup>
		<col style="width: 10%;" />
		<col style="width: 15%;" />
		<col style="width: 25%;" />
		<col style="width: 25%;" />
		<col style="width: 10%;" />
		<col style="width: 5%;" />
		<col style="width: 5%;" />
		<col style="width: 5%;" />
	</colgroup>
	<thead>
		<tr>
			<th>상품ID</th>
			<th>카테고리</th>
			<th>상품명</th>
			<th>대표 규격</th>
			<th>제조원</th>
			<th>주문단위</th>
			<th>SSP상품 상태</th>
			<th>공용/전용 구분</th>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${searchYn eq 'Y' }">
				<c:choose>
					<c:when test="${not empty list }">
						<c:forEach items="${list }" var="item" varStatus="status">
							<tr>
								<td style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${item.PRD_ID }</td>
								<td></td>
								<td style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${item.PRD_NM }</td>
								<td style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${item.REPR_SPEC }</td>
								<td></td>
								<td style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${item.ODR_UNT }</td>
								<td></td>
								<td></td>
							</tr>
						</c:forEach>
					</c:when>
					<c:otherwise>
						<tr>
							<td class="td_no_result" colspan="8">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
						</tr>
					</c:otherwise>
				</c:choose>
			</c:when>
			<c:otherwise>
				<tr>
					<td class="td_no_result" colspan="8">${Code.COMMON_MESSAGE_DO_SEARCH_}</td>
				</tr>
			</c:otherwise>
		</c:choose>
	</tbody>
</table>

<div class="section-pagination">
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap">
		<ui:paging paging="${paging }" jsFunction="goPage" />
	</div>
</div>