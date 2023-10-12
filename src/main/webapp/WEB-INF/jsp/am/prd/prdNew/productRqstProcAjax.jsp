<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<body>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

		<hr>
		<table cellspacing="0" class="table-row table-a"
			style="margin-bottom: 0;">
			<colgroup>
				<col style="width: 10%;" />
				<col style="width: 25%;" />
				<col style="width: 10%;" />
				<col style="width: 25%;" />
				<col style="width: 10%;" />
				<col style="width: 20%;" />
			</colgroup>
			<h3 class="title">
				<span>요청 처리 내역</span>
			</h3>
		<c:forEach var="rqstProc" items="${rqstProc}" varStatus="status">
			<tr>
		     	<td colspan ="2">${rqstProc.PROC_STATS_NM}</td>
				<c:if test="${rqstProc.PROC_STATS_CD == '3037'}"> 
					<th>요청일</th>
				</c:if>
				<c:if test="${rqstProc.PROC_STATS_CD != '3037'}"> 
					<th>처리일</th>
				</c:if>				
				<td>${rqstProc.REG_DTM}</td>
				<c:if test="${rqstProc.PROC_STATS_CD == '3037'}"> 
					<th>요청자</th>
					<td>${rqstProc.REQR_ID}</td>
				</c:if>
				<c:if test="${rqstProc.PROC_STATS_CD != '3037'}"> 
					<th>처리자</th>
					<td>${rqstProc.DEALR_ID}</td>
				</c:if>					
				
			</tr>
		</c:forEach>
		</table>

</body>
</html>