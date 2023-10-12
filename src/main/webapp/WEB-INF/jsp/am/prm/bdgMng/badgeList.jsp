<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<form id="frm" name="frm">
	<input type="hidden" name="useYn" value="<c:out value="${commandMap.useYn }" />" />
	<input type="hidden" name="prdBgNm" value="<c:out value="${commandMap.prdBgNm }" />" />
	<input type="hidden" name="searchStartDate" value="<c:out value="${commandMap.searchStartDate }" />" />
	<input type="hidden" name="searchEndDate" value="<c:out value="${commandMap.searchEndDate }" />" />
	<input type="hidden" name="regpsnId" value="<c:out value="${commandMap.regpsnId }" />" />
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
			<col style="width: 5%;" />
			<col style="width: 20%;" />
			<col style="width: 30%;" />
			<col style="width: 15%;" />
			<col style="width: 15%;" />
			<col style="width: 10%;" />
		</colgroup>
		<thead>
			<tr>

				<th><a href="javascript:checkAll()">선택</a></th>
				<th>배지 이미지</th>
				<th>배지 명</th>
				<th>등록자</th>
				<th>등록일</th>
				<th>상태</th>
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
										<input type="checkbox" class="checkbox checkRow" id="index${status.index }" name="chkIndex" value="${item.prdBgCd }"/>
									</td>
									<td>
										<img alt="${item.fileCts }" src='<c:url value="/common/display.do?attachFileSavePath=${item.fileStorPath }${item.storFileNm}" />'/>
									</td>
									<td>
										<a href="javascript:;" id="goRead" >${item.prdBgNm }</a>
										<input type="hidden" name="prdBgCd" value="${item.prdBgCd }" />
									</td>
									<td>
										<c:if test="${not empty item.regpsnNm }">
											${item.regpsnNm } (${item.regpsnId })
										</c:if>
										<c:if test="${empty item.regpsnNm }">
											${item.regpsnId }
										</c:if>
									</td>
									<td>
										<c:set var="regDtm" value="${item.regDtm }" />
										${fn:substring(regDtm, 0, 4)}-${fn:substring(regDtm, 5, 7)}-${fn:substring(regDtm, 8, 10)}
									</td>
									<td>
										<c:if test="${item.useYn eq 'Y' }">사용</c:if>
										<c:if test="${item.useYn eq 'N' }">미사용</c:if>
									</td>
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
						<td class="td_no_result" colspan="9">${Code.COMMON_MESSAGE_DO_SEARCH_}</td>
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
