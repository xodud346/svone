<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<form id="frm" name="frm">
	<input type="hidden" name="pageSize" value="<c:out value="${paging.pageSize }" />" />
	<input type="hidden" name="cPage" value="<c:out value="${paging.cPage }" />" />


	<div class="grid section-button-list">
		<div class="col-1-2 text-left">
			<span id="pages" class="pages">
				(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)
			</span>
		</div>
		<div class="col-1-2 text-right">
			<a href="javascript:goForm();" class="button small primary"><span>등록</span></a>
			&nbsp;
			<a href="javascript:excelDown();" class="button small"><span>엑셀 다운로드</span></a>
			&nbsp;
			<ui:pageSizeBox value="${paging.pageSize}" name="pageSize" type="" jsFunction="goPage"/>
		</div>
	</div>

	<table cellspacing="0" class="table-col table-b">
		<colgroup>
			<col style="width: 5%;" />
			<col style="width: 6%;" />
			<col style="width: 23%;" />
			<col style="width: 8%;" />
			<col style="width: 8%;" />
			<col style="width: 8%;" />
			<col style="width: 8%;" />
			<col style="width: 8%;" />
			<col style="width: 8%;" />
			<col style="width: 8%;" />
			<col style="width: 5%;" />
			<col style="width: 5%;" />
		</colgroup>
		<thead>
			<tr>
				<th>번호</th>
				<th>이벤트 구분</th>
				<th>이벤트 명</th>
				<th>전시 시작일</th>
				<th>전시 종료일</th>
				<th>이벤트 형태</th>
				<th>응모자</th>
				<th>당첨자발표일</th>
				<th>등록일</th>
				<th>등록자</th>
				<th>전시 여부</th>
				<th>조회</th>
			</tr>
		</thead>
		<tbody>
			<c:choose>
				<c:when test="${not empty list }">
					<c:set var="listNum" value="${paging.listNum}" />
					<c:forEach items="${list }" var="item" varStatus="status">
						<tr>
							<td>
<%-- 										<input type="hidden" name="PLN_MST_IDXs" value="${item.PLN_MST_IDX }"/> --%>
								${listNum}
							</td>
							<td>
								<c:set var="now" value="<%=new java.util.Date()%>" />
								<c:set var="today"><fmt:formatDate value="${now}" pattern="yyyyMMdd" /></c:set>
								<c:choose>
									<c:when test="${today < item.evtMstStDt }">준비</c:when>
									<c:when test="${today > item.evtMstEdDt }">종료</c:when>
									<c:otherwise>진행 중</c:otherwise>
								</c:choose>
							</td>
							<td class="text-left"><a href="javascript:void(0);" onclick="goEdit(this);" data-index="${item.evtMstIdx }">${item.evtMstTitle }</a></td>
							<td><ui:formatDate value="${item.evtMstStDt }" pattern="yyyy.MM.dd"/></td>
							<td><ui:formatDate value="${item.evtMstEdDt }" pattern="yyyy.MM.dd"/></td>
							<td>${item.evtMstTypeNm }</td>
							<td>
								<c:choose>
									<c:when test="${item.evtMstType == '710' or item.evtMstType == '708' }">
										<fmt:formatNumber type="number" maxFractionDigits="3" value="${item.evtMstEntCnt }" />
									</c:when>
									<c:otherwise>-</c:otherwise>
								</c:choose>
							</td>
							<td><ui:formatDate value="${item.evtMstWinDt }" pattern="yyyy.MM.dd"/></td>
							<td><ui:formatDate value="${item.evtMstRegDt }" pattern="yyyy.MM.dd"/></td>
							<td>${item.evtMstRegNm }<br>(${item.evtMstRegId })</td>
							<td>
								<c:if test="${item.evtMstDplYn == 'Y' }">전시</c:if>
								<c:if test="${item.evtMstDplYn == 'N' }">미 전시</c:if>
							</td>
							<td><a href="javascript:void(0);" onclick="goEventPage(this);" data-idx="${item.evtMstIdx }">조회</a></td>
						</tr>
						<c:set var="listNum" value="${listNum-1}" />
					</c:forEach>
				</c:when>
				<c:otherwise>
					<tr>
						<td class="td_no_result" colspan="9">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
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