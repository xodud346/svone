<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="grid section-button-list">
	<div class="col-1-2 text-left">
		<span id="pages" class="pages">
			(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)
		</span>
	</div>
</div>

<div class="tableOut">
	<table cellspacing="0" class="table-col table-b" style="white-space:nowrap; border-collapse:collapse;">
		<thead>
			<tr>
				<th><span>상품ID</span></th>
				<th><span>시리즈그룹ID</span></th>
				<th><span>카테고리</span></th>
				<th><span>상품명</span></th>
				<th><span>대표규격</span></th>
				<th><span>제조원</span></th>
				<th><span>주문단위</span></th>
				<th><span>SSP상품상태</span></th>
				<th><span>S-MRO상품상태</span></th>
				<th><span>대표상품그룹ID</span></th>
				<th><span>대표상품구분</span></th>
				<th><span>대표상품ID</span></th>
				<th><span>공용전용구분</span></th>
				<th><span>가격대상</span></th>
				<th><span>SSP등록일</span></th>
			</tr>
		</thead>
		<tbody>
			<c:choose>
				<c:when test="${searchYn eq 'Y' }">
					<c:choose>
						<c:when test="${not empty list }">
							<c:forEach items="${list }" var="item" varStatus="status">
								<tr>
									<td>
										<a href="javascript:goEdit('${item.prdId }');">${item.prdId }</a> 
									</td>
									<td>
										${item.prdGrpId }
									</td>
									<td style="text-align:left;">
										(${item.prdClsCdSsp })${item.prdClsLvlNmSsp }
									</td>
									<td style="text-align:left;">
 										${item.prdNm }
									</td>
									<td style="text-align:left;">
										${item.attrVal }
									</td>
									<td>
										(${item.mnfrNo })${item.mnfrNm}
									</td>
									<td>
										${item.odrUnt }
									</td>
									<td>
										<c:if test="${item.useYn eq 'Y' }">사용</c:if>
										<c:if test="${item.useYn ne 'Y' }">미사용</c:if>
									</td>
									<td>
										<c:if test="${item.useStatsCd eq '00' }">사용</c:if>
										<c:if test="${item.useStatsCd eq '10' }">휴면화</c:if>
										<c:if test="${item.useStatsCd eq '20' }">종결</c:if>
									</td>
									<td>
										${item.ingtPrdGrpId }
									</td>
									<td>
										<c:if test="${item.intgPrdSpr eq '1' }">통합_가격</c:if>
										<c:if test="${item.intgPrdSpr eq '2' }">통합_품질</c:if>
									</td>
									<td>
										${item.intgPrdId }
									</td>
									<td>
										<c:if test="${item.sspOnlySpr eq 'P'}">공용</c:if>
										<c:if test="${item.sspOnlySpr eq 'E'}">전용</c:if>
									</td>
									<td>
										가격대상
									</td>
									<td>
										${fn:substring(item.regDtmSsp, 0, 19) }
									</td>
								</tr>
							</c:forEach>
						</c:when>
						<c:otherwise>
							<td class="td_no_result" colspan="15" style="text-align: center;">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
						</c:otherwise>
					</c:choose>
				</c:when>
				<c:otherwise>
					<tr>
						<td class="td_no_result" colspan="15" style="text-align: center;">${Code.COMMON_MESSAGE_DO_SEARCH_}</td>
					</tr>
				</c:otherwise>
			</c:choose>
		</tbody>
	</table>
</div>

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