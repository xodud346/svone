<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>운영팀 조회</title>
</head>
<body class="page-popup">
	<div class="modal">
		<div class="modal-wrapper">
			<div class="modal-inner">
				<h3 class="title"><span>운영팀 조회</span></h3>
				<form id="frm" name="frm">
					<input type="hidden" id="cPage" name="cPage" value=""/>
					<input type="hidden" id="pageSize" name="pageSize" value="10" />
					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
						<colgroup>
							<col style="width: 30%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>운영팀ID</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="orgCd" name="orgCd" value="" />
								</td>
							</tr>
							<tr>
								<th><span>운영팀명</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="orgNm" name="orgNm" value="" />
								</td>
							</tr>
							<tr>
								<th><span>팀 속성</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="prdDispMngSbjCd" name="prdDispMngSbjCd" value="" />
								</td>
							</tr>
						</tbody>
					</table><!-- // table -->
				</form>
				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
					<a href="javascript:searchClear('frm');" id="searchClear" class="button small"><span>초기화</span></a>
					<a href="#none" onclick="search()" class="button small primary"><span>검색</span></a>
				</div>
				<!-- 조회 결과 영역 -->
				<div id="popList"></div>
				<!-- //조회 결과 영역 -->
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
		$("#popList").load("/am/dsp/popMng/oprTeamPopupList.do", $frm.serialize(), function(){
			$("#_selectedData tr").off().on("click" , function(){
				
				var inputs = $(this).find("input:hidden");
				
				var param = {};
				for(var i = 0 ; i < inputs.length; i++){
					param[$(inputs[i]).attr("name")] = $(inputs[i]).val();
				}
				
				// 부모창 함수 콜
				window.opener.fnOprTeamResultCallback(param);
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