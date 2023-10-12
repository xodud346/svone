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
	</colgroup>
	<thead>
		<tr>
			<th>회원ID</th>
			<th>회원명</th>
			<th>로그인ID</th>
		</tr>
	</thead>
	<tbody id="_selectedData">
		<c:choose>
			<c:when test="${not empty list}">
		    	<c:forEach var="item" items="${list}" varStatus="status">
					<tr>
						<td>${item.MEM_ID}</td>
						<td>${item.MEM_NM}</td>
						<td>${item.LOGIN_ID}
						<c:forEach var="i" items="${item}" varStatus="status">
							<input type="hidden" name="${i.key}" value="${i.value}"/>
						</c:forEach>
						</td>
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
<div class="section-pagination">
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap">
		<ui:paging paging="${paging}" jsFunction="goPage" />
	</div>
</div>