<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<table class="table-col table-b">
	<colgroup>
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
	</colgroup>
	<thead>
		<tr>
			<th>R&D속성코드</th>
			<th>R&D속성명</th>
			<th>R&D속성사용 상품군 수</th>
			<th>사용여부</th>
			<th>등록일</th>
			<th>최종수정일</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${'Y' eq searchYn}">
				<c:choose>
					<c:when test="${not empty list}">
						<c:forEach var="item" items="${list }" varStatus="status">
							<tr>
								<td>
									<a href="javascript:goForm('${item.attrCd}');">
										<c:out value="${item.attrCd}" />
									</a>
								</td>
								<td class="left">
									<c:out value="${item.attrNm}" />
								</td>
								<td>
									<c:out value="${item.attrCnt}" />
								</td>
								<td>
									${item.useYn}
								</td>
								<td>${item.regDtm}</td>
								<td>${item.updDtm}</td>
							</tr>
						</c:forEach>
					</c:when>
					<c:otherwise>
						<tr>
							<td class="td_no_result" colspan="9">${Code.COMMON_MESSAGE_GROUP_PRODUCT_ADD_}</td>
						</tr>
					</c:otherwise>
				</c:choose>
			</c:when>
			<c:otherwise>
				<tr>
					<td class="td_no_result" colspan="9">${Code.COMMON_MESSAGE_DO_SEARCH_}</td>
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

<script>
$(function(){
	// 총 카운트 변경
	$("#pages").html("(총 <strong class='em'>${paging.totalRecordCount}</strong>건, ${paging.cPage} of ${paging.totalPageCount} page)");
	$("#cPage").val("${paging.cPage}");
});


</script>