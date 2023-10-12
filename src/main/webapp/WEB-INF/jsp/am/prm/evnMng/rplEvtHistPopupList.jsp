<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="grid section-button-list mt30">
	<div class="col-1-2 text-left">
		<span id="pages" class="pages">
			(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" />/<c:out value="${paging.totalPageCount }" />)
		</span>
	</div>
	<div class="col-1-2 text-right">
		<a href="javascript:chkDataDisable();" class="button small"><span>일괄미노출변경</span></a>
		<a href="javascript:excelDown();" class="button small"><span>엑셀다운로드</span></a>
		<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>
	</div>
</div>

<table cellspacing="0" class="table-col table-b">
	<colgroup>
		<col style="width: 5%;" />
		<col style="width: 10%;" />
		<col style="width: 10%;" />
		<col style="width: 10%;" />
		<col style="width: 12%;" />
		<col style="width: 43%;" />
		<col style="width: 10%;" />
	</colgroup>
	<thead>
		<tr>
			<th scope="col">
				<a href="javascript:chkDataAll();">선택</a>
			</th>
			<th scope="col">회원 ID</th>
			<th scope="col">회원명</th>
			<th scope="col">로그인 ID</th>
			<th scope="col">참여 일시</th>
			<th scope="col">참여 내용</th>
			<th scope="col">댓글 공개 여부</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${not empty list}">
				<c:forEach var="item" items="${list}" varStatus="status">
					<tr>
						<td>
							<input type="checkbox" id="chkDataId${item.evtRplIdx}" name="chkDataIds" class="checkbox checkRow" data-id="${item.evtRplIdx}" />
							<c:forEach var="i" items="${item}" varStatus="status">
								<input type="hidden" name="${i.key}" value="${i.value}"/>
							</c:forEach>
						</td>
						<td class="text-center">${item.evtRplRegId}</td>
						<td class="text-center">${item.evtRplRegNm}</td>
						<td class="text-center">${item.loginId}</td>
						<td class="text-center">
							<ui:formatDate value='${item.evtRplRegDt }' pattern='yyyy-MM-dd HH:mm:ss'/>
						</td>
						<td class="text-left">${item.evtRplCts }</td>
						<td>
							<input type="checkbox" id="chkDplId${item.evtRplIdx}" name="chkDplIds" class="checkbox checkRow" data-id="${item.evtRplIdx}" <c:if test="${item.evtRplDplYn == 'N' }">checked</c:if> />
							<label for="chkDplId${item.evtRplIdx}">비 공개</label>
						</td>
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