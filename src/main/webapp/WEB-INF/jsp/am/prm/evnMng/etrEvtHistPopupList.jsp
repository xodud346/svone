<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="grid section-button-list mt30">
	<div class="col-1-2 text-left">
		<span id="pages" class="pages">
			(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" />/<c:out value="${paging.totalPageCount }" />)
		</span>
	</div>
	<div class="col-1-2 text-right">
		<a href="javascript:excelDown();" class="button small"><span>엑셀다운로드</span></a>
		<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>
	</div>
</div>

<form id="histfrm" name="histfrm">
	<input type="hidden" name="evtMstIdx" value="" />
	<input type="hidden" name="evtEtrRegId" value="" />
</form>

<table cellspacing="0" class="table-col table-b">
	<colgroup>
		<col style="width: 15%;" />
		<col style="width: 15%;" />
		<col style="width: 15%;" />
		<col style="width: 25%;" />
		<col style="width: 10%;" />
		<col style="width: 10%;" />
		<col style="width: 10%;" />
	</colgroup>
	<thead>
		<tr>
			<th scope="col">회원 ID</th>
			<th scope="col">회원명</th>
			<th scope="col">로그인 ID</th>
			<th scope="col">최종 완료 일시</th>
			<th scope="col">참여 횟수</th>
			<th scope="col">이벤트 완료</th>
			<th scope="col">쿠폰 다운로드</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${not empty list}">
				<c:forEach var="item" items="${list}" varStatus="status">
					<tr>
						<td class="text-center">${item.evtEtrRegId}</td>
						<td class="text-center">${item.evtEtrRegNm}</td>
						<td class="text-center">${item.loginId}</td>
						<td class="text-center">
							<c:choose>
								<c:when test="${item.evtEtrEdYn eq 'Y' }"><ui:formatDate value='${item.evtEtrRegDt }' pattern='yyyy-MM-dd HH:mm:ss'/></c:when>
								<c:otherwise>-</c:otherwise>
							</c:choose>
							<c:if test="${item.evtEtrEdYn eq 'Y' }">
							</c:if>

						</td>
						<td class="text-center">
							<a href="javascript:searchMemHist('${item.evtMstIdx }','${item.evtEtrRegId }');">${item.evtEtrRegCnt }</a>
						</td>
						<td class="text-center">
							<c:choose>
								<c:when test="${item.evtEtrEdYn eq 'Y' }">완료</c:when>
								<c:otherwise>미 완료</c:otherwise>
							</c:choose>
							<c:if test="${item.evtEtrEdYn eq 'Y' }">
							</c:if>
						</td>
						<td class="text-center">${item.cpnIsuYn }</td>
					</tr>
				</c:forEach>
			</c:when>
			<c:otherwise>
				<tr>
					<td class="td_no_result" colspan="7">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
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

	// 전체 선택,해제
	chkDataAll = function(){
		var chkType = false;
		$targetData = $('input[name=chkDataIds]');

		$targetData.each(function(idx, data){
			console.log('idx_'+idx, $(this).is(':checked'), $(this));
			if($(this).is(':checked') == false) {
				chkType = true;
			}
		});

		$targetData.each(function(idx, data){
			if(chkType == true){
				$(this).prop('checked',true);
			} else {
				$(this).prop('checked',false);
			}
		});
	}

	// 일괄미노출 버튼
	chkDataDisable = function() {
		$selectData = $('input[name=chkDataIds]:checked');

		$selectData.each(function(idx, data){
			$(this).closest('tr').find('input[name=chkDplIds]').prop('checked',true);
		});

	}
});
</script>