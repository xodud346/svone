<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<div class="col-1-2 text-left">
<span id="pages" class="pages">
	(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" />/<c:out value="${paging.totalPageCount }" />)
	</span>
</div>	

<table class="table-col table-b">
	<colgroup>
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
	</colgroup>
	<thead>
		<tr>
			<th>카테고리ID</th>
			<th>카테고리명</th>
			<!-- <th>사용여부</th>
			<th>등록자</th>
			<th>등록일</th> -->
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${not empty list}">
				<c:forEach var="row" items="${list}" varStatus="status">
					<tr id="row_${row.prdClsCd }">
						<td style="display:none;"><input type="checkbox" name="rowChk" class="checkbox" data-id="${row.prdClsCd}" data-nm="${row.prdClsNm}" data-lvlnm="${row.prdClsLvlNm}"></td>
						<td><c:out value="${row.prdClsCd }" /></td>
						<td><c:out value="${row.prdClsNm }" /></td>
						<%-- <td><c:out value="${row.useYn }" /></td>
						<td><c:out value="${row.regpsn }" /></td>
						<td><c:out value="${row.regDtm }" /></td> --%>
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

<div class="section-pagination">
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap">
		<ui:paging paging="${paging}" jsFunction="goPage" />
	</div>
</div>

<script type="text/javascript">
$(function(){
	$("tr").click(function() {
		$("input[name=rowChk]").prop("checked",false);
		$(this).find('input').prop("checked",true);
		$(this).siblings().css( "background-color", "white" );
		$(this).css( "background-color", "#f4f4f4" );
	});
});
</script>