<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<table class="table-col table-b">
	<colgroup>
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
		<col style="width: auto;" />
	</colgroup>
	<thead>
		<tr>
			<th>SSP속성코드</th>
			<th>SSP속성명</th>
			<th>필수 항목</th>
			<th>사용 추가</th>
		</tr>
	</thead>
	<tbody>
		<c:choose>
			<c:when test="${'Y' eq commandMap.searchYN}">
				<c:choose>
					<c:when test="${not empty list}">
				    	<c:forEach var="item" items="${list}" varStatus="status">
							<tr>
								<td>${item.attrCd}</td>
								<td>${item.attrNm}</td>
								<td><input type="checkbox" id="mandYN_${item.attrCd}" name="mandYNs" class="checkbox checkRow" <c:if test="${'Y' eq item.mandYn}">checked</c:if>/></td>
								<td><a href="javascript:attrAdd('${item.attrCd}','${item.attrNm}');" class="button small primary"><span>+ 추가</span></a></td>
							</tr>	
				    	</c:forEach>
				    </c:when>
				    <c:otherwise>
				    	<tr>
							<td class="td_no_result" colspan="4">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
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