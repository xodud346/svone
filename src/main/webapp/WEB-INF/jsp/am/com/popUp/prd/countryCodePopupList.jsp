<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="col-1-2 text-left">
	<span id="pages" class="pages">
		(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" />/<c:out value="${paging.totalPageCount }" />)
	</span>
</div>

<table cellspacing="0" class="table-col table-b">
	<colgroup>
		<col style="width: 30%;" />
		<col style="width: 70%;" />
	</colgroup>
	<thead>
		<tr>
			<th scope="col">원산지ID</th>
			<th scope="col">원산지명</th>
		</tr>
	</thead>
	<tbody id="_selectedData">
		<c:choose>
			<c:when test="${not empty list }">
				<c:forEach var="item" items="${list }" varStatus="status">
					<tr>
						<td>${item.ctrySprCd}</td>
						<td class="text-left">${item.ctryNm }
							<c:forEach var="i" items="${item}" varStatus="status">
								<input type="hidden" name="${i.key }" value="${i.value }" />
							</c:forEach>
						</td>
					</tr>
				</c:forEach>
			</c:when>
			<c:otherwise>
				<tr>
					<td class="td_no_result" colspan="2">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
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

<script type="text/javascript">
$(document).ready(function (){
	// mouse hover
	$('#_selectedData tr').hover(function(){
		$(this).css("background-color","#f4f4f4");
	}, function(){
		$(this).css("background-color","white");
	});
});
</script>