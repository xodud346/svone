<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<table class="table-col table-b">
	<colgroup>
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
			<th><input type="checkbox" id="rowChkAll" name="rowChkAll" class="checkbox"></th>
			<th>제조원ID</th>
			<th>S-MRO 제조원명</th>
			<th>SSP 제조원명</th>
			<th>제조원명 상이여부</th>
			<th>제조원명 수정일</th>
			<th>제조원명 수정자</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${'Y' eq searchYn}">
				<c:choose>
					<c:when test="${not empty list}">
				    	<c:forEach var="item" items="${list }" varStatus="status">
							<tr>
								<td>
									<input type="checkbox" id="rowChk_${item.mnfrNo}" name="rowChk" class="checkbox" data-no="${item.mnfrNo}">
								</td>
								<td>
									<c:out value="${item.mnfrNo}" />
								</td>
								<td class="left">
									<c:out value="${item.mnfrNm}" />
								</td>
								<td class="left">
									<input type="text" id="sgMnfrNm_${item.mnfrNo}" name="sgMnfrNm" class="text" value="${item.sgMnfrNm}" readonly/>
								</td>
								<td>
									<c:out value="${item.differentMnfrNm}" />
								</td>
								<td>
									<c:out value="${item.updDtm}" />
								</td>
								<td>
									<c:out value="${item.updpsn}"/>
								</td>
							</tr>
				    	</c:forEach>
				    </c:when>
				    <c:otherwise>
				    	<tr>
							<td class="td_no_result" colspan="9">${Code.COMMON_MESSAGE_GROUP_PRODUCT_ADD_}</td>
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
	
	// 전체 체크박스 제어
	$("#rowChkAll").click(function() {
		if($(this).is(":checked")) {
			$("input[name=rowChk]").prop("checked", true);
			$("input[name=sgMnfrNm]").attr("readonly",false);
		} else {
			$("input[name=rowChk]").prop("checked", false);
			$("input[name=sgMnfrNm]").attr("readonly",true);
		}
	});
	
	// 체크박스 제어
	$("input[name=rowChk]").click(function() {
		var no = $(this).data("no");
		
		if($(this).is(":checked")) {
			$("#sgMnfrNm_"+no).attr("readonly",false);
		} else {
			$("#sgMnfrNm_"+no).attr("readonly",true);
		}
	});
	
});


</script>