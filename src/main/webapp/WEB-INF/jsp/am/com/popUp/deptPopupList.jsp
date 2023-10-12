<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<div class="col-1-2 text-left">
	<span id="pages" class="pages"> (총 <strong class="em"><c:out
				value="${paging.totalRecordCount }" /></strong>건, <c:out
			value="${paging.cPage }" />/<c:out value="${paging.totalPageCount }" />)
	</span>
</div>

<table cellspacing="0" class="table-col table-b">
	<colgroup>
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
	</colgroup>
	<thead>
		<tr>
			<th>선택</th>
			<th>부서 ID</th>
			<th>부서명</th>
			<th>부서코드</th>
			<th>사업장명</th>
			<th>운영단위명</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${not empty list}">
				<c:forEach var="list" items="${list}" varStatus="status">
					<tr>
						<td id="${list.RNUM}">
							<input type="checkbox"id="CHECK_DEPT_ID_${list.RNUM}" name="CHK_DEPT_IDs" class="checkbox checkRow"/> 
							<input type="hidden" name="CHECK_BZPLC_NM" value="${list.BZPLC_NM}"> 
							<input type="hidden" name="CHECK_CODE" value="${list.CODE}"> 
							<input type="hidden" name="CHECK_BZPLC_ID" value="${list.BZPLC_ID}"> 
							<input type="hidden" name="CHECK_DEPT_ID" value="${list.DEPT_ID}"> 
							<input type="hidden" name="CHECK_DEPT_NM" value="${list.DEPT_NM}"> 
							<input type="hidden" name="CHECK_CCO_DEPT_CD" value="${list.CCO_DEPT_CD}"> 
							<input type="hidden" name="CHECK_OPR_UNT_NM" value="${list.OPR_UNT_NM}"> 
							<input type="hidden" name="CHECK_OPR_UNT_ID" value="${list.OPR_UNT_ID}"> 
							<input type="hidden" name="CHECK_VALUE" value="${list.VALUE}">
						</td>
						<td>${list.DEPT_ID}</td>
						<td>${list.DEPT_NM}</td>
						<td>${list.CCO_DEPT_CD}</td>
						<td>${list.BZPLC_NM}</td>
						<td>${list.OPR_UNT_NM}</td>
					</tr>
				</c:forEach>

			</c:when>
			<c:otherwise>
				<tr>
					<td class="td_no_result" colspan="6">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
				</tr>
			</c:otherwise>
		</c:choose>
	</tbody>
</table>
<div class="grid section-button-search">
	<!-- 검색 하단 버튼 -->
	<a href="javascript:deptAdd();" class="button small primary"><span>추가</span></a>
</div>

<div class="section-pagination">
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap">
		<ui:paging paging="${paging}" jsFunction="goPage" />
	</div>
</div>