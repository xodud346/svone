<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript">
$(document).ready(function(){
	if(${giLevelVal} == '1'){
		window.resizeTo(600, 350);
	}else{
		window.resizeTo(600, 700);
	}
	
});
</script>
<title><c:out value="${commandMap.title }"/> 입고 책임자 설정</title>
</head>
<body class="page-popup">
	<div class="modal">
		<div class="modal-wrapper">
			<div class="modal-inner">
				<h3 class="title"><span><c:out value="${commandMap.title }"/> 입고 책임자 설정</span></h3>
				<form id="frm" name="frm">
					<input type="hidden" id="cPage" name="cPage" value=""/>
					<input type="hidden" id="pageSize" name="pageSize" value="10" />
					<c:choose>
						<c:when test="${giLevelVal eq '1' }"> <!-- 운영단위 -->
							<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0; width: 100%;" id="giLevelVal1"><!-- table -->
								<colgroup>
									<col style="width: 30%;" />
									<col style="width: auto;"/>
								</colgroup>
								<tbody>
									<tr>
										<th><span>사업장</span></th>
										<td>
											<input type="hidden" name="bzplcId" value="" />
											<c:out value='${data.OPR_UNT_ID }'/> | <c:out value='${data.OPR_UNT_NM }'/>
										</td>
									</tr>
									<tr>
										<th><span>운영단위</span></th>
										<td>
											<input type="hidden" name="oprUntId" value="" />
											<c:out value='${data.BZPLC_ID }'/> | <c:out value='${data.BZPLC_NM }'/>
										</td>
									</tr>
									<tr>
										<th><span>입고 책임자</span></th>
										<td>
											<input type="text" class="text" style="width: 100%;" id="orgNm" name="orgNm" value="" />
										</td>
									</tr>
								</tbody>
							</table>
							<!-- // table -->
						</c:when>
						<c:when test="${giLevelVal eq '2' }"> <!-- 부서 -->
							<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
								<colgroup>
									<col style="width: 30%;" />
									<col style="width: auto;"/>
								</colgroup>
								<tbody>
									<tr>
										<th><span>사업장</span></th>
										<td>
											<input type="hidden" name="bzplcId" value="" />
											<c:out value='${data.OPR_UNT_ID }'/> | <c:out value='${data.OPR_UNT_NM }'/>
										</td>
									</tr>
									<tr>
										<th><span>운영단위</span></th>
										<td>
											<input type="hidden" name="oprUntId" value="" />
											<c:out value='${data.BZPLC_ID }'/> | <c:out value='${data.BZPLC_NM }'/>
										</td>
									</tr>
								</tbody>
							</table>
							<!-- // table -->
							<div class="grid section-button-list">
								<div class="col-1-2 text-left">
									<span class="pages">
										(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
									</span>
								</div>
							</div>
							<table cellspacing="0" class="table-col table-b">
								<colgroup>
									<col style="width: auto;" />
									<col style="width: auto;" />
									<col style="width: auto;" />
								</colgroup>
								<thead>
									<tr>
										<th>고객 구분</th>
										<th>사용 여부</th>
										<th>법인명</th>
									</tr>
								</thead>
								<tbody>
									<c:choose>
										<c:when test="${paging.totalRecordCount > 0}">
										<c:set var="listNum" value="${paging.listNum}" />
											<c:forEach var="list" items="${list }" varStatus="i" >
												<tr>
													<td>1</td>
													<td>2</td>
													<td>3</td>
												</tr>
												<c:set var="listNum" value="${listNum-1}" />
											</c:forEach>
										</c:when>
										<c:otherwise>
											<tr>
												<td colspan="3">조회 결과가 없습니다.</td>
											</tr>
										</c:otherwise>
									</c:choose>
								</tbody>
							</table>
						</c:when>
					</c:choose>
				</form>
				<div class="section-button" style="margin-bottom: 0;">
					<div class="wrap text-center">
						<a href="#none" onclick="fn_cancel()" class="button large"><span>취소</span></a>
						<a href="#none" onclick="fn_save()" class="button large primary"><span>저장</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>
<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>

<script type="text/javascript">
$(function(){
	var $frm = $("#frm");
	
	// 검색
	function search(){
		$("#popList").load("/am/dsp/popMng/svcTeamPopupList.do", $frm.serialize(), function(){
			$("#_selectedData tr").off().on("click" , function(){
				
				var inputs = $(this).find("input:hidden");
				
				var param = {};
				for(var i = 0 ; i < inputs.length; i++){
					param[$(inputs[i]).attr("name")] = $(inputs[i]).val();
				}
				
				// 부모창 함수 콜
				window.opener.fnSvcTeamResultCallback(param);
				self.close();
			});
		});
	}
	
	// 페이지 이동
	goPage = function (cPage) {
		$("#cPage").val(cPage);
		search();
	};
	
	search();
});
</script>
</body>
</html>