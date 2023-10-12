<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>회원 조회</title>
</head>
<body class="page-popup">
	<div class="modal">
		<div class="modal-wrapper">
			<div class="modal-inner">
				<h3 class="title"><span>회원 조회</span></h3>
				<form id="frm" name="frm">
					<input type="hidden" id="cPage" name="cPage" value=""/>
					<input type="hidden" id="pageSize" name="pageSize" value="10" />
					<input type="hidden" id="formType" name="formType" value="regist" />
					<input type="hidden" id="POP_MST_IDX" name="POP_MST_IDX" value="" />
					<input type="hidden" id="LIMIT_YN" name="LIMIT_YN" value="${commandMap.LIMIT_YN}" />

					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
						<colgroup>
							<col style="width: 30%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>회원ID</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="memId" name="memId" value="" />
								</td>
							</tr>
							<tr>
								<th><span>회원명</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="memNm" name="memNm" value="" />
								</td>
							</tr>
							<tr>
								<th><span>로그인ID</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="loginId" name="loginId" value="" />
							</tr>
						</tbody>
					</table><!-- // table -->
				</form>

				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
					<a href="javascript:searchClear('frm');" id="searchClear" class="button small"><span>초기화</span></a>
					<a href="javascript:search();" class="button small primary"><span>검색</span></a>
				</div>

				<!-- 조회 결과 영역 -->
				<div id="popList">
					<%-- <%@ include file="/WEB-INF/jsp/am/com/popUp/clientPopupList.jsp" %> --%>

				</div>
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
	search = function() {
		$("#popList").load("/am/com/popUp/clientPopupList.do", $frm.serialize(), function(){
			var $searchData	= $('input[name="CHK_BZPLC_IDs"]');
			var $selectedData	= $('input[name="SEL_BZPLC_IDs"]');

			if( $selectedData.length > 0 ){
				$selectedData.each(function(idx, data){
					var id		= $(this).data('id');

					$searchData.each(function(){
						if(id == $(this).data('id')) $(this).prop('checked', true);
					})
				})
			}
			
			//TR 클릭시 실행
			$("#_selectedData").find("tr").off().on("click" , function(){
				var memId = $(this).find("input[name='MEM_ID']").val();
				var deptId = $(this).find("input[name='DEPT_ID']").val();
				var loginId = $(this).find("input[name='LOGIN_ID']").val();
				var memMn = $(this).find("input[name='MEM_NM']").val();
				var data = {
						memId : memId,
						deptId : deptId,
						loginId : loginId,
						memMn : memMn
				}
				
				window.opener.fnResultClient(data);
				self.close();
				
				
			})
		});
	};

	// 페이지 이동
	goPage = function (cPage) {
		$("#cPage").val(cPage);
		search();
	};

	// 팝업 추가버튼
	bzplcAdd = function () {
		var $checkData = $("input[name=CHK_BZPLC_IDs]:checked");
		var $selectedData	= $('input[name="SEL_BZPLC_IDs"]');

		if($checkData.length < 1) {
			alert("<spring:message code='error.noDataSelected' />");
			return false;
		}

		var innerHtml = '';

		$checkData.each(function(idx, data) {
			var id		= $(this).data('id');
			var name	= $(this).data('nm');
			var no		= $(this).data('no');
			var existYn	= true;

			if( $selectedData.length > 0 ){
				$selectedData.each(function(index, data){
					if( id == $(this).data('id') )		existYn = false;
				})
			}

			if(existYn){
				innerHtml += '<tr>';
				innerHtml += '	<td><input type="checkbox" id="SEL_BZPLC_ID_'+id+'" name="SEL_BZPLC_IDs" class="checkbox checkRow" data-id="'+id+'" data-nm="'+name+'" data-no="'+no+'"/></td>';
				innerHtml += '	<td>'+id+'</td>';
				innerHtml += '	<td>'+name+'</td>';
				innerHtml += '	<td>'+no+'</td>';
				innerHtml += '</tr>';
			}
		});

		$("#_selectedData").append(innerHtml);
	};

	// 선택행 삭제
	bzplcDel = function () {

		if($("input[name=SEL_BZPLC_IDs]:checked").length < 1) {
			alert("<spring:message code='error.noDataSelected' />");
			return false;
		}

		$("input[name=SEL_BZPLC_IDs]:checked").each(function(idx, data) {
			var row = $(this).parent().parent();
			var id = $(this).data('id');
			row.remove();
		})
	}

	// 선택 data 부모창으로 return
	bzplcSel = function () {
		var $selectedData	= $('input[name="SEL_BZPLC_IDs"]');

		// data 없을경우 return
		if($selectedData.length < 1 ) {
			alert("<spring:message code='error.noDataSelected' />");
			return false;
		}

		// 최대 선택 가능 갯수 체크
		var limitYn = $("#LIMIT_YN").val();

		if("Y" == limitYn) {
			if($selectedData.length > 1) {
				alert("<spring:message code='error.onlyOneSelect' />");
				 return false;
			}
		}

		var params = new Array();
		var obj;

		$selectedData.each(function(idx, data) {
			obj		= new Object();
			obj.ID	= $(this).data('id');
			obj.NM	= $(this).data('nm');
			obj.NO	= $(this).data('no');

			params.push(obj);
		});

		// 사업장 조회 팝업 return function
		window.opener.fnResultClient(params);
		self.close();
	}

	search();

});
</script>
</body>
</html>
