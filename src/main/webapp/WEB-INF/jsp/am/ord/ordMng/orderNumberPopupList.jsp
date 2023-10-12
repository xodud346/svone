<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<form id="frm" name="frm">
<div class="col-1-2 text-left">
	<span id="pages" class="pages">
		(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" />/<c:out value="${paging.totalPageCount }" />)
	</span>
</div>
<table cellspacing="0" class="table-col table-b">
	<colgroup>
		<col style="width: auto;" />
		<col style="width: auto;" />
	</colgroup>
	<thead>
		<tr>
			<th>선택</th>
			<th>사업장 ID</th>
			<th>주문 번호</th>
		</tr>
	</thead>
	<tbody>
	<c:choose>
		<c:when test="${not empty list }">
			<c:forEach var="list" items="${list }" varStatus="status">
				<tr>
					<td><input type="checkbox" class="checkbox checkRow" id="CHK_ODR_NO_${list.odrNo}" name="CHK_ODR_NOs"  data-id="${list.bzplcId}" data-no="${list.odrNo}"/></td>
					<td>${list.bzplcId }</td>
					<td>${list.odrNo }</td>
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
</form>
<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
    <a href="javascript:odrNoAdd();" class="button small primary"><span>추가</span></a>
</div>
<div class="section-pagination">
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap">
		<ui:paging paging="${paging}" jsFunction="goPage" />
	</div>
</div>
