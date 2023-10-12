<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css">
</style>
</head>
<body>
<div id="header">
	<%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</div>

<div id="container">
	<div id="aside" class="aside left">
		<%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
	</div>

	<div id="wrapper">
		<div id="breadcrumb">
		</div>

		<div id="contents">
			<div id="container">
				<h2 class="title"><span>일반고객할증률</span></h2>
				
				<div class="section-title">
					<h3 class="title"><span>현재 정보</span></h3>
				</div>

				<form id="form">
					<input type="hidden" id="coCd" name="coCd" value="${info.coCd }" />
					<input type="hidden" id="premrtId" name="premrtId" value="${info.premrtId }" />
					<input type="hidden" id="preMrt" name="preMrt" value="${info.premrt }" />
					<input type="hidden" id="regRsn" name="regRsn" value="${info.regRsn }" />
					<input type="hidden" id="regpsnId" name="regpsnId" value="${info.regpsnId }" />
					<input type="hidden" id="regpsnNm" name="regpsnNm" value="${info.regpsnNm }" />

					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 15%; min-width:180px;"/>
							<col style="width: auto;" />
							<col style="width: 15%; min-width:180px;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>일반고객할증률</span></th>
								<td>
									${info.premrt }
								</td>
								<th><span>등록사유</span></th>
								<td>
									${info.regRsn }
								</td>
							</tr>
							<tr>
								<th><span>등록일</span></th>
								<td>
									${fn:substring(info.regDtm, 0, 19) }
								</td>
								<th><span>등록담당자</span></th>
								<td>
									<c:if test="${info.regpsnId ne null }">
										(${info.regpsnId })${info.regpsnNm }
									</c:if>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="section-title">
						<h3 class="title"><span>신규 정보</span></h3>
					</div>

					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 15%; min-width:180px;"/>
							<col style="width: auto;" />
							<col style="width: 15%; min-width:180px;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>일반고객할증률</span></th>
								<td>
									<input type="text" class="text large" id="inputPremrt" name="inputPremrt" /> %
								</td>
								<th><span>등록사유</span></th>
								<td>
									<input type="text" class="text xlarge" id="inputRegRsn" name="inputRegRsn" />
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>

			<div class="grid section-button-search">
				<a href="javascript:goSave();" class="button small primary">저장</a>
			</div>

			<div class="section-title">
				<h3 class="title"><span>변경 이력</span></h3>
			</div>

			<form id="listForm">
				<input type="hidden" id="cPage" name="cPage" />
				<input type="hidden" id="pageSize" name="pageSize" value="20" />

				<div id="historyList">
					<%-- <%@ include file="/WEB-INF/jsp/am/prc/rfrMng/extraChargeHistoryList.jsp" %> --%>
				</div>
			</form>
		</div>
	</div>

	<div id="quickmenu" class="aside right">
		<%@ include file="/WEB-INF/jsp/am/include/quick.jsp" %>
	</div>
</div>

<div id="footer">
	<%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>

<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>

<script src="/am/js/common/jquery.ajax.js"></script>
<script>
$(function(){
	var $form = $("#form");
	var $listForm = $("#listForm");

	$("#historyList").load("<c:out value="${serverDomain}" />/am/prc/rfrMng/extraChargeHistoryList.do", $listForm.serialize());

	goSave = function(){
		$form.attr({"action": "<c:out value="${serverDomain}" />/am/prc/rfrMng/extraChargeCreate.do", "target":"_self", "method":"post"}).submit();
	}

	goPage = function(cPage){
		$("#cPage").val(cPage);
		$("#historyList").load("<c:out value="${serverDomain}" />/am/prc/rfrMng/extraChargeHistoryList.do", $listForm.serialize());
	}
});
</script>
</body>
</html>