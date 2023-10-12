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
			<th>상태</th>
			<th>산업군 명</th>
			<th>수정일</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${not empty list}">
				<c:forEach var="item" items="${list}" varStatus="status">
					<tr>
						<td><input type="checkbox" id="CHK_IDDT_ID_${item.IDDT_ID}" name="CHK_IDDT_IDs" class="checkbox checkRow" data-yn="${item.USE_YN_NM}" data-id="${item.IDDT_ID}" data-nm="${item.IDDT_NM}" data-dt="${item.STATS_CHG_DTM}" <%-- data-no="${item.BZMN_REG_NO}" --%>/></td>
						<td>${item.USE_YN_NM}</td>
						<td>${item.IDDT_NM}</td>
						<td>${item.STATS_CHG_DTM}</td>
					</tr>	
				</c:forEach>
			</c:when>
			<c:otherwise>
				<tr>
					<td class="td_no_result" colspan="4">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
				</tr>
			</c:otherwise>
		</c:choose>
	</tbody>
</table>
<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
	<a href="javascript:bzplcAdd();" class="button small primary"><span>추가</span></a>
</div>
<div class="section-pagination">
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap">
		<ui:paging paging="${paging}" jsFunction="goPage" />
	</div>
</div>