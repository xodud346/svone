<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<form id="frm" name="frm">
    <input type="hidden" name="searchStartDate"   value="<c:out value="${commandMap.searchStartDate }"/>"/>
    <input type="hidden" name="searchEndDate"     value="<c:out value="${commandMap.searchEndDate }"/>"/>
	<input type="hidden" name="searchYn" value="<c:out value="${searchYn }" />" />
	<input type="hidden" name="total" value="${paging.totalRecordCount }" />
	<input type="hidden" id="odrNo" name="odrNo" value="" />
	
	<!-- 페이징 / 버튼 -->
	<div class="grid section-button-search">
		<div class="col- text-left">
			<span class="pages">
				(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage } of ${paging.totalPageCount } page)
			</span>
		</div>
			<a href="javascript:commingSoon();" id="" class="button small"><span>출고 거래명세서</span></a>
			<a href="javascript:commingSoon();" id="" class="button small"><span>주문 거래명세서</span></a>
			<a href="javascript:commingSoon();" id="" class="button small"><span>엑셀다운로드</span></a>
            <ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>
	</div>

	<!-- tableDiv -->
	<div id="tableDiv">
		<table cellspacing="0" class="table-col table-b listTable" >
			<colgroup>
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	       			 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
	                 <col style="width: auto;" />
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
					<th><a href="javascript:checkAll()">선택</a></th>
					<th>채널 구분</th>
					<th>CAT.Killer</th>
					<th>사업장 ID</th>
					<th>주문 상태</th>
					<th>주문 품목 번호</th>
					<th>주문 번호</th>
					<th>품목 번호</th>
					<th>제조원</th>
					<th>상품 분류명</th>
					<th>상품명</th>
					<th>대표 규격</th>
					<th>주문 수량</th>
					<th>판매 단위</th>
					<th>부가세액</th>
					<th>판매 단가(VAT 제외)</th>
					<th>매출금액(VAT 제외)</th>
					<th>판매 단가(VAT 포함)</th>
					<th>매출 금액(VAT 포함)</th>
					<th>배송형태</th>
					<th>주문 생성일</th>
					<th>고객사 발주 완료일</th>
					<th>S/O 생성일</th>
					<th>고객 배송 예정일</th>
					<th>배송 완료일</th>
					<th>운영 단위 ID</th>
					<th>운영 단위명</th>
					<th>부서 ID</th>
					<th>부서 명</th>
					<th>주문자 ID</th>
					<th>주문자 명</th>
					<th>결재 수단</th>
					<th>수령자</th>
				</tr>
			</thead>
			<tbody>
			<!-- 리스트가 있을 경우  -->
				<c:choose>
					<c:when test="${searchYn eq 'Y' }">		
						<c:choose>
							<c:when test="${not empty list}">
							<c:set var="listNum" value="${paging.listNum}" />
								<c:forEach var="list" items="${list}" varStatus="i">
									<tr>
										<td><input type="checkbox" class="checkbox checkRow" id="index${status.index }" name="chkIndex"/></td>
										<td>${list.chSprNm}</td>
										<td>${list.catKilrCd}</td>
										<td>${list.bzplcId}</td>
										<td>${list.odrStatsCd} &nbsp${list.odrStatsNm}</td>	
										<td><a href="javascript:orderDetail();" class="list-title" >${list.odrNo}-${list.itmNo}</a></td>
										<td>${list.odrNo}</td>
										<td>${list.itmNo}</td>
										<td>${list.mnfOriNm }</td>
										<td>${list.prdClsNm}</td>
										<td>${list.prdNm}</td>
										<td>${list.reprSpec}</td>
										<td>${list.odrQty}</td>
										<td>${list.salsUntCd}</td>
										<td>${list.vatxAmt}</td>
										<td>${list.selpr}</td>
										<td>${list.saleAmt}</td>
										<td>${list.selprIncVat}</td>
										<td>${list.saleAmtIncVat}</td>
										<td>(${list.dlvFormSprCd}) ${list.dlvFormSprNm}</td>
										<td>${list.odrDt}</td>
										<td>${list.ordCmplDtm}</td>
										<td>${list.salsDocCrtDtm}</td>
										<td>${list.dlvPssDtm}</td>
										<td>${list.dlvCmplDtm}</td>
										<td>${list.oprUntId}</td>
										<td>${list.oprUntNm}</td>
										<td>${list.deptId}</td>
										<td>${list.deptNm}</td>
										<td>${list.odrpsnId}</td>
										<td>${list.odrpsnNm}</td>
										<td>${list.stlMeanCd}</td>
										<td>${list.rcvrNm}</td>
									</tr>
								</c:forEach>
							</c:when>
						<c:otherwise>
							<tr>
								<td class="td_no_result" colspan="33">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
							</tr>
						</c:otherwise>
					</c:choose>
				</c:when>
					<c:otherwise>
						<tr>
							<td class="td_no_result" colspan="33">${Code.COMMON_MESSAGE_DO_SEARCH_}</td>
						</tr>
					</c:otherwise>
				</c:choose>
			</tbody>
		</table><!-- // table -->
	</div><!-- // tableDiv -->
<!-- 목록 end -->
</form><!-- // form -->
<div class="section-pagination"><!-- section pagination -->
	<h4 class="sr-only">목록 페이징</h4>
	<div class="wrap"><!-- 개발 시 wrap 이하 모듈 시작 -->
		<ui:paging paging="${paging }" jsFunction="goPage" />
	</div>
</div><!-- // section pagination -->
<script>
$(function(){
	
});
</script>
