<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<form id="frm" name="frm">
	<input type="hidden" name="iddtId" value="<c:out value="${commandMap.iddtId }" />" />
	<input type="hidden" name="useYn" value="<c:out value="${commandMap.useYn }" />" /> 
	<input type="hidden" name="searchStartDate" value="<c:out value="${commandMap.searchStartDate }" />" />
	<input type="hidden" name="searchEndDate" value="<c:out value="${commandMap.searchEndDate }" />" />
	<input type="hidden" name="prePkgId" value="<c:out value="${commandMap.prePkgId }" />" />
	<input type="hidden" name="prdId" value="<c:out value="${commandMap.prdId }" />" />
	<input type="hidden" name="regpsnId" value="<c:out value="${commandMap.regpsnId }" />" />
	<input type="hidden" name="updpsnId" value="<c:out value="${commandMap.updpsnId }" />" />
	<input type="hidden" name="searchYn" value="<c:out value="${searchYn }" />" />
	<input type="hidden" name="total" value="<c:out value="${paging.totalRecordCount }" />" />
	<div class="grid section-button-list">
		<div class="col-1-2 text-left">
			<span id="pages" class="pages">
				(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)
			</span>
		</div>
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
			<col style="width: auto;" />
			<col style="width: auto;" />
			<col style="width: auto;" />
		</colgroup>
		<thead>
			<tr>
				<th>NO</th>
				<th>패키지ID</th>
				<th>상태</th>
				<th>패키지명</th>
				<th>산업군</th>
				<th>대표상품ID</th>
				<th>등록일</th>
				<th>등록자</th>
				<th>수정일</th>
				<th>수정자</th>
			</tr>
		</thead>
		<tbody>
			<c:choose>
				<c:when test="${searchYn eq 'Y' }">
					<c:choose>
						<c:when test="${not empty list }">
							<c:set var="listNum" value="${paging.listNum}" />
							<c:forEach items="${list }" var="item" varStatus="status">
								<tr>
									<td>
										${status.index+1 }
									</td>
									<td>
										<a href="javascript:;" id="goRead" >${item.prePkgId }</a>
										<input type="hidden" name="prePkgId" value="${item.prePkgId }" />
									</td>
									<td>
										<c:if test="${item.useYn eq 'Y' }">사용</c:if>
										<c:if test="${item.useYn eq 'N' }">미사용</c:if>
									</td>
									<td>
										${item.prePkgNm }
									</td>
									<td>
										${item.listIddt.iddtNm }
										<c:if test="${not empty item.listIddt.iddtNm }"> 
											<c:if test="${item.listIddtCnt > 0 }"> 
											외 ${item.listIddtCnt }개
											</c:if>
										</c:if>
									</td>
									<td>
										${item.listPrd.prdId }
									</td>
									<td>
										<c:set var="regDtm" value="${item.regDtm }" />
										${fn:substring(regDtm, 0, 4)}-${fn:substring(regDtm, 5, 7)}-${fn:substring(regDtm, 8, 10)}
									</td>
									<td>
										${item.regpsnNm }
									</td>
									<td>
										<c:set var="updDtm" value="${item.updDtm }" />
										${fn:substring(updDtm, 0, 4)}-${fn:substring(updDtm, 5, 7)}-${fn:substring(updDtm, 8, 10)}
									</td>
									<td>
										${item.updpsnNm }
									</td>
							</c:forEach>
						</c:when>
						<c:otherwise>
							<tr>
								<td class="td_no_result" colspan="10">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
							</tr>
						</c:otherwise>
					</c:choose>
				</c:when>
				<c:otherwise>
					<tr>
						<td class="td_no_result" colspan="10">${Code.COMMON_MESSAGE_DO_SEARCH_}</td>
					</tr>
				</c:otherwise>
			</c:choose>
		</tbody>
	</table>
</form>

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
