<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


<h3 class="title"><span>전체 참여 내역</span></h3>

<table cellspacing="0" class="table-col table-b">
	<colgroup>
		<col style="width: 25%;" />
		<col style="width: 75%;" />
	</colgroup>
	<thead>
		<tr>
			<th scope="col">No</th>
			<th scope="col">참여 일시</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${not empty list}">
				<c:forEach var="item" items="${list}" varStatus="status">
					<tr>
						<td class="text-center">${item.rnum }</td>
						<td class="text-center">
							<ui:formatDate value='${item.evtEtrRegDt }' pattern='yyyy-MM-dd HH:mm:ss'/>
						</td>
					</tr>
				</c:forEach>
			</c:when>
			<c:otherwise>
				<tr>
					<td class="td_no_result" colspan="2">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
				</tr>
			</c:otherwise>
		</c:choose>
	</tbody>
</table>
