<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"><!--<![endif]-->
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
</head>
<body class="page-popup">

<div class="modal">
	<div class="modal-wrapper">
		<div class="modal-inner">
			<div class="push-guide instant">
				<i class="icon"></i>
				<h3 class="title"><span>사용자 조회</span></h3>
			</div>

			<form id="searchForm" name="searchForm">
				<input type="hidden" name="searchYn" value="N">
				<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
					<colgroup>
						<col style="width: 25%;" />
						<col style="width: auto;" />
					</colgroup>
					<tbody>
						<tr>
							<th><span>사번</span></th>
							<td>
								<input type="text" class="text large" id="admMstErpNo" name="admMstErpNo" value="${commandMap.admMstErpNo}" />
							</td>
						</tr>
						<tr>
							<th><span>이름</span></th>
							<td>
								<input type="text" class="text large" id="admMstNm" name="admMstNm" value="${commandMap.admMstNm}" />
							</td>
						</tr>
					</tbody>
				</table>
			</form>

			<div class="grid section-button-search">
				<a href="javascript:searchClear('searchForm');" class="button small"><span>초기화</span></a>
				<a href="javascript:search('srch');" id="_search" class="button small primary"><span>검색</span></a>
			</div>

			<div id="popList">
				<form id="frm" name="frm">
					<input type="hidden" name="searchYn" 	value="N">

					<table cellspacing="0" class="table-col table-b">
						<colgroup>
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
						</colgroup>
						<thead>
							<tr>
								<th>사번</th>
								<th>이름</th>
								<th>부서</th>
							</tr>
						</thead>
						<tbody id="_select">
							<c:choose>
								<c:when test="${list ne null and list ne '' }">
									<c:forEach var="data" items="${list }" varStatus="status">
										<tr>
											<td>${data.admMstErpNo }</td>
											<td>${data.admMstNm }
												<c:forEach var="i" items="${data}" varStatus="status">
													<input type="hidden" name="${i.key}" value="${i.value}"/>
												</c:forEach>
											</td>
											<td>${data.orgNm }</td>
										</tr>
									</c:forEach>
								</c:when>
								<c:otherwise>
									<tr>
										<td colspan="2">조회된 결과가 없습니다.</td>
									</tr>
								</c:otherwise>
							</c:choose>
						</tbody>
					</table>
				</form>

				<div class="grid section-button-search">
					<a href="#none" class="button small primary"><span>선택</span></a>
				</div>

				<div class="section-pagination">
					<h4 class="sr-only">목록 페이징</h4>
					<div class="wrap">
						<ui:paging paging="${paging }" jsFunction="goPage" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script src="<c:out value="${serverDomain}" />/am/js/vendor/jquery-1.11.2.min.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/plugins.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
<script type="text/javascript">
$(function () {

	// 조회 버튼 클릭 시
	search = function (type) {

		var $subForm	= '';
		var admMstErpNo		= $('#admMstErpNo').val();
		var admMstNm	= $('#admMstNm').val();

		$('input[name="searchYn"]').val("Y");

		if( type == "srch" ){
			$subForm = $('#searchForm');
			$('#frm').find('input[name="admMstErpNo"]').val(admMstErpNo);
			$('#frm').find('input[name="admMstNm"]').val(admMstNm);
		} else {
			$subForm = $('#frm');
		}

		$subForm.attr({"action":"<c:out value="${serverDomain}" />/am/site/autoMangerPopup.do", "target":"_self", "method":"post"}).submit();
	}

	// 페이지 이동
	goPage = function (cPage) {
		$('#frm').find('#cPage').val(cPage);
		search('frm');
	};

	<%-- 선택된 데이터 바닥 페이지로 내리기 --%>
	$(document).on('click', '#_select tr', function(){

		var inputs = $(this).find("input:hidden");
		var param = {};
		for(var i = 0 ; i < inputs.length; i++){
			param[$(inputs[i]).attr("name")] = $(inputs[i]).val();
		}

		window.opener.fnResultReg(param);
		self.close();
	})
});
</script>
</body>
</html>
