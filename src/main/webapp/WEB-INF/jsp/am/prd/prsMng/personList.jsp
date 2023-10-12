<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<table class="table-col table-b">
	<colgroup>
		<col style="width: auto;" />
		<col style="width: auto;" />
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
			<th>상품군ID</th>
			<th>상품군</th>
			<th>상품담당자</th>
			<th>구분</th>
			<th>상태</th>
			<th>등록일</th>
			<th>등록자</th>
			<th>최종수정일</th>
			<th>최종수정자</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${'Y' eq searchYn}">
				<c:choose>
					<c:when test="${not empty list}">
						<c:forEach var="item" items="${list}" varStatus="status">
							<tr>
								<td>
									<a href="javascript:goForm('${item.chrpsnSeq}','${item.chrpsnId}');">
										<c:out value="${item.prdClsCd}" />
									</a>
								</td>
								<td class="left">
									<c:out value="${item.prdCtg}" /> 
								</td>
								<td>
									(${item.chrpsnId })${item.chrpsnNm } 
								</td>
								<td>
									${item.chrpsnSprCd}
								</td>
								<td>
									${item.chrpsnUseYn}
								</td>
								<td>${item.regDtm}</td>
								<td>${item.regpsn}</td>
								<td>${item.updDtm}</td>
								<td>${item.updpsn}</td>
							</tr>
						</c:forEach>
					</c:when>
					<c:otherwise>
				    	<tr>
							<td class="td_no_result" colspan="9">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
						</tr>
				    </c:otherwise>
				</c:choose>
			</c:when>
			<c:otherwise>
		    	<tr>
					<td class="td_no_result" colspan="9">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
				</tr>
		    </c:otherwise>
		</c:choose>
	</tbody>
</table>

	<!-- 페이징 부분 -->
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