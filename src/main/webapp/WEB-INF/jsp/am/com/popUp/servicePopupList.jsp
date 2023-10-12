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
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
	</colgroup>
	<thead>
		<tr>
			<th scope="col">사번</th>
			<th scope="col">담당자 명</th>
			<th scope="col">조직 코드</th>
			<th scope="col">조직 코드 명</th>
			<th scope="col">직위</th>
			<th scope="col">직급</th>
			<th scope="col">사용 여부</th>
		</tr>
	</thead>
	<tbody id="_selectedData">
		<c:choose>
			<c:when test="${not empty list}">
				<c:forEach var="item" items="${list}" varStatus="status">
					<tr>
						<td>${item.EMP_NO}</td>
						<td>${item.OPRTR_NM}</td>
						<td>${item.ORG_CD}</td>
						<td>${item.ORG_NM}</td>
						<td>${item.POS_NM}</td>
						<td>${item.JBNM}
							<c:forEach var="i" items="${item}" varStatus="status">
								<input type="hidden" name="${i.key}" value="${i.value}"/>
							</c:forEach>
						</td>
						<td><c:out value="${item.USE_YN eq 'Y'? '사용' : '미사용'}" /></td>
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
<script type="text/javascript">

</script>

