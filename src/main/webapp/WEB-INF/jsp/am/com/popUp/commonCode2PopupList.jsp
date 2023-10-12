<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="col-1-2 text-left">
	<span id="pages" class="pages">
		(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" />/<c:out value="${paging.totalPageCount }" />)
	</span>
</div>

<table cellspacing="0" class="table-col table-b">
	<colgroup>
		<col style="width: 10%;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
	</colgroup>
	<thead>
		<tr>
			<th scope="col">선택</th>
			<th scope="col">코드</th>
			<th scope="col">코드 명</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${not empty list}">
				<c:forEach var="item" items="${list}" varStatus="status">
					<tr>
						<td>
							<input type="checkbox" id="CHK_DATA_ID_${item.dtlCd}" name="CHK_DATA_IDs" class="checkbox checkRow"
								data-id="${item.dtlCd}" data-nm="${item.dtlCdNm}" />
							<c:forEach var="i" items="${item}" varStatus="status">
								<input type="hidden" name="${i.key}" value="${i.value}"/>
							</c:forEach>
						</td>
						<td>${item.dtlCd}</td>
						<td class="text-center">${item.dtlCdNm}</td>
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
<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
	<a href="javascript:codeAdd();" class="button small primary"><span>추가</span></a>
</div>

<div class="section-pagination">
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap">
		<ui:paging paging="${paging}" jsFunction="goPage" />
	</div>
</div>