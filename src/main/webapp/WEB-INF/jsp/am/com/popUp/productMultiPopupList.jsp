<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="grid section-button-list">
	<div class="col-1-2 text-left">
		<span class="pages">
			(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
		</span>
	</div>
	<div class="col-1-2 text-right">
	</div>
</div>

<table cellspacing="0" class="table-col table-b">
	<colgroup>
		<col style="width: 40px;" />
		<col style="width: 135px;" />
		<col style="width: 200px;" />
		<col style="width: 200px;" />
		<col style="width: auto;" />
	</colgroup>
	<thead>
		<tr>
			<th scope="col">선택</th>
			<th scope="col">상품 ID</th>
			<th scope="col">상품 명</th>
			<th scope="col">규격</th>
			<th scope="col">제조사 명</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${not empty list}">
				<c:forEach var="item" items="${list}" varStatus="status">
					<tr>
						<td>
							<input type="checkbox" id="CHK_DATA_ID_${item.prdId}" name="CHK_DATA_IDs" class="checkbox checkRow"
								data-id="${item.prdId}" data-nm="${item.prdNm}" />
							<c:forEach var="i" items="${item}" varStatus="status">
								<input type="hidden" name="${i.key}" value="${i.value}"/>
							</c:forEach>
						</td>
						<td>${item.prdId}</td>
						<td class="text-left">${item.prdNm}</td>
						<td class="td_ellipsis" style="max-width: 200px;">${item.attrVal}</td>
						<td class="td_ellipsis" style="max-width: 200px;">${item.mnfr}</td>
					</tr>
				</c:forEach>
			</c:when>
			<c:otherwise>
				<tr>
					<td class="td_no_result" colspan="4"><spring:message code="list.empty" /></td>
				</tr>
			</c:otherwise>
		</c:choose>
	</tbody>
</table>
<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
	<a href="javascript:dataAddToSels();" class="button small primary"><span>추가</span></a>
</div>

<div class="section-pagination">
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap">
		<ui:paging paging="${paging}" jsFunction="goPage" />
	</div>
</div>