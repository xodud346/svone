<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<body>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div style="width:100%; overflow:auto;">
	<div class="grid section-button-list">
		<div class="col-1-2 text-left">
			 <span id="pages" class="pages">
				(총 <strong class="em"><c:out value="${paging.totalRecordCount}" /></strong>건, <c:out value="${paging.cPage}" /> of <c:out value="${paging.totalPageCount}" /> page)
			</span> 
			</div>
			<div style = "float:right">
			    <a href="javascript:goExcelDown();" class="button small"><span>엑셀 다운로드</span></a>
				<select name="selSort" id="selSort" title="정렬" style="width:120px;">
			        <option value="rtDn" <c:if test="${commandMap.selSort == '' || commandMap.selSort == null || commandMap.selSort == 'rtDn'}"> selected </c:if>> 요청번호↓</option>
			        <option value="rtUp" <c:if test="${commandMap.selSort == 'rtUp'}"> selected </c:if>>요청번호↑</option>
			        <option value="rdtDn" <c:if test="${commandMap.selSort == 'rdtDn'}"> selected </c:if>>요청일↓</option>
			        <option value="rdtUp" <c:if test="${commandMap.selSort == 'rdtUp'}"> selected </c:if>>요청일↑</option>
			        <option value="cdtDn" <c:if test="${commandMap.selSort == 'cdtDn'}"> selected </c:if>>최종수정일↓</option>
			        <option value="cdtUp" <c:if test="${commandMap.selSort == 'cdtUp'}"> selected </c:if>>최종수정일↑</option>
			    </select>
			               
				<select name="pageSize" id="pageSize" title="출력 개수 선택" style="width:120px;">
					<option value="10" <c:if test="${commandMap.pageSize == '10'}"> selected </c:if>>10개</option>
					<option value="20" <c:if test="${commandMap.pageSize == '' || commandMap.pageSize == null || commandMap.pageSize == '20'}"> selected </c:if>>20개</option>
					<option value="30" <c:if test="${commandMap.pageSize == '30'}"> selected </c:if>>30개</option>
					<option value="50" <c:if test="${commandMap.pageSize == '50'}"> selected </c:if>>50개</option>
					<option value="100" <c:if test="${commandMap.pageSize == '100'}"> selected </c:if>>100개</option>
				</select> 
			</div>
	</div>
	
	<table cellspacing="0" class="table-row table-a" style="white-space:nowrap; border-collapse:collapse">
		<colgroup>
		</colgroup>
		<thead>
			<tr>
				<th>요청번호</th>
				<th>몰구분</th>
				<th>처리상태</th>
				<th>대표상품구분</th>
				<th>제안상태</th>
				<th>상품명</th>
				<th>카테고리</th>
				<th>요청규격</th>
				<th>제조원</th>
				<th>상품ID</th>
				<th>요청일</th>
				<th>사업장</th>
				<th>운영단위</th>
				<th>요청자</th>
				<th>담당자</th>
				<th>처리자</th>
				<th>최종처리일</th>
			</tr>
		</thead>
		<tbody>
			   <c:choose>
				<c:when test="${commandMap.searchYn eq 'Y' }"> 
					<c:choose>
						<c:when test="${not empty resultList}"> 
							<c:forEach items="${resultList}" var="list" varStatus="status">
								<tr>
									<td class="category"><a href="javascript:btnOnclickDetail('${list.RQST_NO}', '${list.PROC_STATS_SEQ}' );" class="subject">${list.RQST_NO}</a></td>
									<td>${list.MALL_SPR_CD}</td>
									<td>${list.PROC_STATS_NM}</td>
									<td>${list.REPR_PRD_SPR}</td>
									<td>${list.PRPS_STATS}</td>
									<td>${list.RQST_PRD_NM}</td>      
									
									<td>${list.PRD_CLS_NM}</td>
									<td>${list.RQST_ALL_ATTR}</td>
									<td>${list.MNFR_NM}</td>
									<td>${list.PRD_ID}</td>
									
									<td>${list.RQST_DTM}</td>
									<td>${list.BZPLC_NM}</td>
									<td>${list.OPR_UNT_NM}</td>
									<td>(${list.LOGIN_ID})${list.REQR_NM}</td>
									<td>${list.CHRPSN_ID}</td>
									
									<td>${list.DEALR_ID}</td>
									<td>${list.CMPL_DTM}</td>
								</tr>
							 </c:forEach>
					 	</c:when>
						<c:otherwise>
							<td class="td_no_result" colspan="15">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
						</c:otherwise>
					</c:choose>
				 </c:when> 
				<c:otherwise>
					<tr>
						<td class="td_no_result" colspan="15">${Code.COMMON_MESSAGE_DO_SEARCH_}</td>
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

</script>
</body>
</html>