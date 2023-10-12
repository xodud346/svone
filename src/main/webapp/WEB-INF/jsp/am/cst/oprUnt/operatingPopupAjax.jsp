<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
		<form id="frm" name="frm">
			<input type="hidden" name="goPage"			value="N" />
			<input type="hidden" name="oprUntId"		value="${oprUntId }" />
			<input type="hidden" name="oprUntNm"		value="${oprUntNm }" />
			<input type="hidden" name="cPage" id="cPage"value="${paging.cPage }"/>
			
			<div class="grid section-button-list">
				<div class="col-1-2 text-left">
					<span>
						(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
					</span>
				</div>
			</div>
		
			
			<table cellspacing="0" class="table-col table-b">
				<colgroup>
					<col style="width: 10%;" />
					<col style="width: auto;" />
					<col style="width: 50%;" />
					<col style="width: 15%;" />
				</colgroup>
				<thead>
					<tr>
						<th>선택</th>
						<th>운영 단위 ID</th>
						<th>운영 단위 명</th>
						<th>사용 여부</th>
					</tr>
				</thead>
				<tbody>
					<c:choose>
						<c:when test="${paging.totalRecordCount > 0}">
							<c:forEach var="list" items="${list }" varStatus="status">
								<tr>
									<td>
										<input type="checkbox" class="checkbox checkRow" id="index${status.index }" name="chkIndex" data-id="${list.OPR_UNT_ID }" data-nm="${list.OPR_UNT_NM }" data-use="${list.USE_YN }"/>
									</td>
									<td>${list.OPR_UNT_ID }</td>
									<td>${list.OPR_UNT_NM }</td>
									<td>${list.USE_YN }</td>
								</tr>
							</c:forEach>
						</c:when>
						<c:otherwise>
							<tr>
								<td colspan="4">검색 결과가 없습니다.</td>
							</tr>
						</c:otherwise>
					</c:choose>
				</tbody>
			</table>
		</form>
		
		<div class="grid section-button-search">
			<a href="javascript:choice();" class="button small primary"><span>선택</span></a>
		</div>
	
		<div class="section-pagination">
			<h4 class="sr-only">목록 페이징</h4>
			<div class="wrap">
				<ui:paging paging="${paging }" jsFunction="goPage" />
			</div>
		</div>
