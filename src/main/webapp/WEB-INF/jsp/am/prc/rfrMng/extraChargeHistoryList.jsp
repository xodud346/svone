<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<table cellspacing="0" class="table-col table-b">
	<colgroup>
		<col style="width: 10%;">
		<col style="width: 10%;">
		<col style="width: 12%;">
		<col style="width: auto;">
		<col style="width: 12%;">
	</colgroup>
	<thead>
		<tr>
			<th>사용상태</th>
			<th>일반고객할증률</th>
			<th>등록담당자</th>
			<th>등록사유</th>
			<th>변경일</th>
		</tr>
	</thead>
	<tbody>
		<c:if test="${not empty list }">
			<c:forEach items="${list }" var="item" varStatus="status">
				<tr>
					<td>
						<c:if test="${item.useYn eq 'N' }">
							미사용
						</c:if>
					</td>
					<td>
						${item.premrt }%
					</td>
					<td>
						(${item.regpsnId })${item.regpsnNm }
					</td>
					<td>
						${item.regRsn }
					</td>
					<td>
						${fn:substring(item.regDtm, 0, 19) }
					</td>
				</tr>
			</c:forEach>
		</c:if>
	</tbody>
</table>

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