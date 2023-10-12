<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<table cellspacing="0" class="table-col table-b">
	<colgroup>
		<col style="width: 30px;" />
		<col style="width: 70px;" />
		<col style="width: 70px;" />
		<col style="width: 250px;" />
		<col />
		<col style="width: 200px;" />
		<col style="width: 70px;" />
		<col style="width: 80px;" />
	</colgroup>
	<thead>
		<tr>
			<th scope="col">NO</th>
			<th scope="col">전시채널</th>
			<th scope="col">구분</th>
			<th scope="col">대상</th>
			<th scope="col">제목</th>
			<th scope="col">노출기간</th>
			<th scope="col">상태</th>
			<th scope="col">등록일</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${'Y' eq searchYn}">
				<c:choose>
					<c:when test="${not empty list}">
						<c:set var="listNum" value="${paging.listNum}" />
						<c:forEach var="item" items="${list }" varStatus="status">
							<tr>
								<td><c:out value="${listNum }" /></td>
								<td>
									<c:choose>
										<c:when test="${'A' eq item.POP_MST_CHN_GBN}">
											전체
										</c:when>
										<c:when test="${item.POP_MST_CHN_GBN eq Code.USER_ENV_TYPE_PC}">
											PC
										</c:when>
										<c:when test="${item.POP_MST_CHN_GBN eq Code.USER_ENV_TYPE_MOBILE}">
											MOBILE
										</c:when>
										<c:otherwise>
											전체
										</c:otherwise>
									</c:choose>
								</td>
								<td>
									<c:choose>
										<c:when test="${'Y' eq item.POP_MST_LOGIN_YN}">
											로그인후
										</c:when>
										<c:otherwise>
											로그인전
										</c:otherwise>
									</c:choose>
								</td>
								<td class="td_ellipsis" style="width: 250px;max-width: 250px;">
									<c:choose>
										<c:when test="${empty item.POP_BZPLC_ID}">
											전체
										</c:when>
										<c:otherwise>
											${item.BZPLC_NM}
										</c:otherwise>
									</c:choose>
								</td>
								<td class="left">
									<a href="javascript:goForm('edit', '${item.POP_MST_IDX }');">
										<c:out value="${item.POP_MST_TITLE }" />
									</a>
								</td>
								<td>
									<c:choose>
										<c:when test="${not empty item.POP_MST_ST_DT and '' ne item.POP_MST_ST_DT}">
											<ui:formatDate value="${item.POP_MST_ST_DT }" pattern="yyyy.MM.dd"/> ~ <ui:formatDate value="${item.POP_MST_ED_DT }" pattern="yyyy.MM.dd"/>
										</c:when>
										<c:otherwise></c:otherwise>
									</c:choose>
								</td>
								<td>
									<c:choose>
										<c:when test="${'Y' eq item.POP_MST_DPL_YN}">
											사용
										</c:when>
										<c:otherwise>
											미사용
										</c:otherwise>
									</c:choose>
								</td>
								<td>
									<ui:formatDate value="${item.POP_MST_REG_DT }" pattern="yyyy.MM.dd"/>
								</td>
							</tr>
							<c:set var="listNum" value="${listNum-1}" />
						</c:forEach>
					</c:when>
					<c:otherwise>
						<tr>
							<td class="td_no_result" colspan="8">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
						</tr>
					</c:otherwise>
				</c:choose>
			</c:when>
			<c:otherwise>
				<tr>
					<td class="td_no_result" colspan="8">${Code.COMMON_MESSAGE_DO_SEARCH_}</td>
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
});
</script>