<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

	<form id="frm">
		<input type="hidden" name="goPage" value="N"/>
		<input type="hidden" name="cPage" id="cPage" value="${paging.cPage }" />
		<input type="hidden" name="PRD_MST_CD" />
		<input type="hidden" name="PRD_MST_NM" />
		
		<input type="hidden" name="PRD_MST_SEL_STATE" />

		<div class="grid section-button-list">
			<div class="col-1-2 text-left">
				<span>
					(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
				</span>
			</div>
		</div>

		<table cellspacing="0" class="table-col table-b">
			<colgroup>
				<col style="width: 5%;" />
				<col style="width: 15%;" />
				<col style="width: 30%;" />
				<col style="width: 30%;" />
				<col style="width: 10%;" />
				<col style="width: 10%;" />
			</colgroup>
			<thead>
				<tr>
					<th>선택</th>
					<th>상품 ID</th>
					<th>상품명</th>
					<th>대표규격</th>
					<th>휴면화</th>
					<th>일시품절</th>
				</tr>
			</thead>
			<tbody>
				<c:choose>
					<c:when test="${paging.totalRecordCount > 0}">
						<c:forEach items="${list}" var="list" varStatus="status">
							<tr>
								<td>
									<input type="checkbox" class="checkbox checkRow" id="index${status.index }" name="chkIndex" data-prd_mst_cd="${list.PRD_MST_CD }" data-prd_mst_nm="${list.PRD_MST_NM }" data-prd_mst_sel_state="${list.PRD_MST_SEL_STATE }" >
								</td>
								<td>${list.PRD_MST_CD }</td>
								<td>${list.PRD_MST_NM }</td>
								<td></td>
								<td></td>
								<td>
									<c:if test="${list.PRD_MST_SEL_STATE eq Code.PRODUCT_SELL_STATE_ING}"><span class="history-condition success center" style="text-align: center;"><i class="fonti um-circle"></i>판매중</span></c:if>
									<c:if test="${list.PRD_MST_SEL_STATE eq Code.PRODUCT_SELL_STATE_OP_TEMPOUT}" ><span class="history-condition info center"><i class="fonti um-circle"></i>일시품절</span></c:if> 
									<c:if test="${list.PRD_MST_SEL_STATE eq Code.PRODUCT_SELL_STATE_TEMPOUT}" ><span class="history-condition info center"><i class="fonti um-circle"></i>품절상품</span></c:if> 
									<c:if test="${list.PRD_MST_SEL_STATE eq Code.PRODUCT_SELL_STATE_STOP}" ><span class="history-condition info center"><i class="fonti um-circle"></i>미판매</span></c:if>
								</td>
							</tr>
						</c:forEach>
					</c:when>
					<c:otherwise>
						<tr>
							<td colspan="6">조회된 결과가 없습니다.</td>
						</tr>
					</c:otherwise>
				</c:choose>
			</tbody>
		</table>
	</form>
	
	<div class="grid section-button-search">
		<a href="javascript:add();" class="button small primary"><span>추가</span></a>
	</div>

	<div class="section-pagination">
		<h4 class="sr-only">목록 페이징</h4>
		<div class="wrap">
			<ui:paging paging="${paging }" jsFunction="goPage" />
		</div>
	</div>