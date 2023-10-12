<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="tableOut">
<table cellspacing="0" class="table-col table-b" style="width:1500px;">
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
		<col style="width: auto;" />
		<col style="width: auto;" />
	</colgroup>
	<thead>
		<tr>
			<th>그룹ID</th>
			<th>그룹구분</th>
			<th>그룹명</th>
			<th>그룹상품수</th>
			<th>기준상품</th>
			<th>기준상품 대표규격</th>
			<th>사용여부</th>
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
				    	<c:set var="listNum" value="${paging.listNum}" />
				    	<c:forEach var="item" items="${list }" varStatus="status">
							<tr>
								<td>
									<a href="javascript:goForm('${item.prdGrpId}');">
										<c:out value="${item.prdGrpId}" />
									</a>
								</td>
								<td>
									<c:out value="${item.prdGrpSprNm}" />
								</td>
								<td class="left">
									<c:out value="${item.prdGrpNm}" />
								</td>
								<td>
									<c:out value="${item.prdGrpCnt}" />
								</td>
								<td>
									<c:out value="${item.prdNm}" />
								</td>
								<td>
									<c:out value="${item.attrVal}" />
								</td>
								<td>
									${item.useYn}
								</td>
								<td>${item.regDtm}</td>
								<td>${item.regpsn}</td>
								<td>${item.updDtm}</td>
								<td>${item.updpsn}</td>
							</tr>
							<c:set var="listNum" value="${listNum-1}" />
				    	</c:forEach>
				    </c:when>
				    <c:otherwise>
				    	<tr>
							<td class="td_no_result" colspan="11">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
						</tr>
				    </c:otherwise>
				</c:choose>
			</c:when>
			<c:otherwise>
				<tr>
					<td class="td_no_result" colspan="11">${Code.COMMON_MESSAGE_DO_SEARCH_}</td>
				</tr>
			</c:otherwise>
		</c:choose>
	</tbody>
</table>
</div>	
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