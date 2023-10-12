<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<form id="frm" name="frm">
	<input type="hidden" name="PLN_MST_USE_YN" value="<c:out value="${commandMap.PLN_MST_USE_YN }" />" />
	<input type="hidden" name="PLN_MST_TITLE" value="<c:out value="${commandMap.PLN_MST_TITLE }" />" />
	<input type="hidden" name="SEARCH_START_DT" value="<c:out value="${commandMap.SEARCH_START_DT }" />" />
	<input type="hidden" name="SEARCH_END_DT" value="<c:out value="${commandMap.SEARCH_END_DT }" />" />
	<input type="hidden" name="PLN_MST_OPR_YN" value="<c:out value="${commandMap.PLN_MST_OPR_YN }" />" />
	<input type="hidden" name="PLN_MST_OPR_ID" value="<c:out value="${commandMap.PLN_MST_OPR_ID }" />" />
	<input type="hidden" name="PLN_MST_CAT_KILLER" value="<c:out value="${commandMap.PLN_MST_CAT_KILLER }" />" />
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
			<col style="width: 5%;" />
			<col style="width: 6%;" />
			<col style="width: 5%;" />
			<col style="width: 45%;" />
			<col style="width: 8%;" />
			<col style="width: 8%;" />
			<col style="width: 8%;" />
			<col style="width: 10%;" />
		</colgroup>
		<thead>
			<tr>
				<th>번호</th>
				<th>전시 여부</th>
				<th>Cat.Killer</th>
				<th>메인 노출</th>
				<th>기획전 명</th>
				<th>전시 시작일</th>
				<th>전시 종료일</th>
				<th>등록일</th>
				<th>등록자</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${mainList }" var="item" varStatus="status">
				<c:if test="${paging.cPage eq 1}">
					<c:if test="${commandMap.PLN_MST_USE_YN ne 'N' }">
						<c:if test="${commandMap.PLN_MST_OPR_YN ne 'Y' }">
							<tr>
								<td>-</td>
								<td>
									<c:if test="${item.PLN_MST_USE_YN eq 'Y' }">전시</c:if>
									<c:if test="${item.PLN_MST_USE_YN eq 'N' }">미전시</c:if>
								</td>
								<td>
									<c:if test="${item.PLN_MST_CAT_KILLER eq '3045' }">SSP</c:if>
									<c:if test="${item.PLN_MST_CAT_KILLER eq '3046' }">R&D</c:if>
								</td>
								<td>
									<c:if test="${item.PLN_MST_MAIN_YN eq 'Y' }">
										노출
									</c:if>
									<c:if test="${item.PLN_MST_MAIN_YN ne 'Y' }">
										미노출
									</c:if>
								</td>
								<td style="text-align: left;">
									<a href="javascript:;" id="goEdit" >${item.PLN_MST_TITLE }</a>
									<input type="hidden" name="PLN_MST_IDX" value="${item.PLN_MST_IDX }" />
								</td>
								<td>
									<c:set var="ST_DT" value="${item.PLN_MST_ST_DT }"/>
									${fn:substring(ST_DT, 0, 4)}-${fn:substring(ST_DT, 4, 6)}-${fn:substring(ST_DT, 6, 8)}
								</td>
								<td>
										<c:set var="ED_DT" value="${item.PLN_MST_ED_DT }" />
									${fn:substring(ED_DT, 0, 4)}-${fn:substring(ED_DT, 4, 6)}-${fn:substring(ED_DT, 6, 8)}
								</td>
								<td>
									<c:set var="REG_DT" value="${item.PLN_MST_REG_DT }" />
									${fn:substring(REG_DT, 0, 4)}-${fn:substring(REG_DT, 4, 6)}-${fn:substring(REG_DT, 6, 8)}
								</td>
								<td>
									${item.PLN_MST_REG_NM }
								</td>
							</tr>
						</c:if>
					</c:if>
				</c:if>
			</c:forEach>
		
		
			<c:choose>
				<c:when test="${searchYn eq 'Y' }">
					<c:choose>
						<c:when test="${not empty list }">
							<c:set var="listNum" value="${paging.listNum}" />
							<c:forEach items="${list }" var="item" varStatus="status">
								<tr>
									<td>
										<input type="hidden" name="PLN_MST_IDXs" value="${item.PLN_MST_IDX }"/>
<%-- 										<c:if test="${item.PLN_MST_MAIN_YN eq 'Y' }">
											-
										</c:if> --%>
										<%-- <c:if test="${item.PLN_MST_MAIN_YN ne 'Y' }">${paging.totalRecordCount - (paging.pageSize * (paging.cPage - 1)) - status.index }</c:if> --%>
										<%-- <c:if test="${item.PLN_MST_MAIN_YN ne 'Y' }">${listNum}</c:if> --%>
										<%-- ${paging.pageSize * (paging.cPage - 1) + status.index + 1} --%>
										${listNum}
									</td>
									<td>
										<c:if test="${item.PLN_MST_USE_YN eq 'Y' }">전시</c:if>
										<c:if test="${item.PLN_MST_USE_YN eq 'N' }">미전시</c:if>
									</td>
									<td>
										<c:if test="${item.PLN_MST_CAT_KILLER eq '3045' }">SSP</c:if>
										<c:if test="${item.PLN_MST_CAT_KILLER eq '3046' }">R&D</c:if>
									</td>
									<td>
										<c:set var="now" value="<%=new java.util.Date()%>" />
										<c:set var="today"><fmt:formatDate value="${now}" pattern="yyyyMMdd" /></c:set> 
										<c:if test="${item.PLN_MST_MAIN_YN eq 'Y' }">
											<c:if test="${today <= item.PLN_MST_ED_DT }">
												노출
											</c:if>
											<c:if test="${today > item.PLN_MST_ED_DT }">
												NO출
											</c:if>
										</c:if>
										<c:if test="${item.PLN_MST_MAIN_YN ne 'Y' }">
											미노출
										</c:if>
									</td>
									<td style="text-align: left;">
										<a href="javascript:;" id="goEdit" >${item.PLN_MST_TITLE }</a>
										<input type="hidden" name="PLN_MST_IDX" value="${item.PLN_MST_IDX }" />
									</td>
									<td>
										<c:set var="ST_DT" value="${item.PLN_MST_ST_DT }"/>
										${fn:substring(ST_DT, 0, 4)}-${fn:substring(ST_DT, 4, 6)}-${fn:substring(ST_DT, 6, 8)}
									</td>
									<td>
										<c:set var="ED_DT" value="${item.PLN_MST_ED_DT }" />
										${fn:substring(ED_DT, 0, 4)}-${fn:substring(ED_DT, 4, 6)}-${fn:substring(ED_DT, 6, 8)}
									</td>
									<td>
										<c:set var="REG_DT" value="${item.PLN_MST_REG_DT }" />
										${fn:substring(REG_DT, 0, 4)}-${fn:substring(REG_DT, 4, 6)}-${fn:substring(REG_DT, 6, 8)}
									</td>
									<td>${item.PLN_MST_REG_NM }</td>
								</tr>
								<%-- <c:if test="${item.PLN_MST_MAIN_YN ne 'Y' }"> --%>
									<c:set var="listNum" value="${listNum-1}" />
								<%-- </c:if> --%>
							</c:forEach>
						</c:when>
						<c:otherwise>
							<c:if test="${commandMap.PLN_MST_USE_YN ne 'N' }">
								<c:if test="${empty mainList }">
									<tr>
										<td class="td_no_result" colspan="9">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
									</tr>
								</c:if>
							</c:if>
							<c:if test="${commandMap.PLN_MST_USE_YN eq 'N' }">
								<tr>
									<td class="td_no_result" colspan="9">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
								</tr>
							</c:if>
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