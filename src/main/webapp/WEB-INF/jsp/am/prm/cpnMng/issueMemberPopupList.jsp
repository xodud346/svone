<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="col-1-2 text-left">
	<span id="pages" class="pages">
		(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" />/<c:out value="${paging.totalPageCount }" />)
	</span>
</div>		

<table cellspacing="0" class="table-col table-b">
	<colgroup>
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
	</colgroup>
	<thead>
		<tr>
			<th>선택</th>
			<th>사업장</th>
			<th>운영 단위</th>
			<th>부서</th>
			<th>회원</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${not empty list}">
		    	<c:forEach var="item" items="${list}" varStatus="status">
					<tr>
						<td><input type="checkbox" id="CHK_MEM_ID_${item.OPR_UNT_ID}" name="CHK_MEM_IDs" class="checkbox checkRow" data-id="${item.MEM_ID}" data-nm="${item.MEM_NM}" data-BZPLC_NM="${item.BZPLC_NM }" data-BZPLC_ID="${item.BZPLC_ID }" data-OPR_UNT_NM="${item.OPR_UNT_NM }" data-OPR_UNT_ID="${item.OPR_UNT_ID }"	data-DEPT_NM="${item.DEPT_NM }"	data-DEPT_ID="${item.DEPT_ID }" data-MEM_SPR="${item.MEM_SPR }"	data-LOGIN_ID="${item.LOGIN_ID }"/></td>
						<td>${item.BZPLC_NM} <br/> (${item.BZPLC_ID})</td>
						<td>${item.OPR_UNT_NM} <br/> (${item.OPR_UNT_ID})</td>
						<td>${item.DEPT_NM} <br/> (${item.DEPT_ID})</td>
						<td>${item.MEM_NM} <br/> (${item.MEM_ID})</td>
					</tr>	
		    	</c:forEach>
		    </c:when>
		    <c:otherwise>
		    	<tr>
					<td class="td_no_result" colspan="5">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
				</tr>
		    </c:otherwise>
		</c:choose>
	</tbody>
</table>
<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
    <a href="javascript:memberAdd();" class="button small primary"><span>추가</span></a>
</div>
	
<div class="section-pagination">
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap">
		<ui:paging paging="${paging}" jsFunction="goPage" />
	</div>
</div>