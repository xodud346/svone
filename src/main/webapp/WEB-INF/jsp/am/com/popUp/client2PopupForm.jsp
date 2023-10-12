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
					<%-- <%@ include file="/WEB-INF/jsp/am/com/popUp/client2PopupList.jsp" %> --%>

				</div>
				<!-- //조회 결과 영역 -->

				<!-- 선택 영역 -->
				<table cellspacing="0" class="table-col table-b" id="selTable">
					<colgroup>
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">선택</th>
							<th scope="col">회원ID</th>
							<th scope="col">회원명</th>
							<th scope="col">로그인ID</th>
						</tr>
					</thead>
					<tbody id="_selectedData">
						<c:if test="${not empty selList}">
							<c:forEach var="item" items="${selList}" varStatus="status">
								<tr>
									<td>
										<input type="checkbox" id="SEL_DATA_ID_${item.MEM_ID}" name="SEL_DATA_IDs" class="checkbox checkRow" data-id="${item.MEM_ID}" data-nm="${item.MEM_NM}" />
										<c:forEach var="i" items="${item}" varStatus="status">
											<input type="hidden" name="${i.key}" value="${i.value}"/>
										</c:forEach>
									</td>
									<td>${item.MEM_ID}</td>
									<td>${item.MEM_NM}</td>
									<td>${item.LOGIN_ID}
									</td>
							</c:forEach>
						</c:if>
					</tbody>
				</table>
				<div class="grid section-button-search">
					<a href="javascript:dataDelFrSels();" id="dataDelFrSels" class="button small"><span>삭제</span></a>
				</div>
				<!-- //선택 영역 -->

				<div class="section-button">
					<div class="wrap text-center">
						<a href="javascript:dataSel();" class="button primary"><span>선택</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>

<%@ include file="/WEB-INF/jsp/am/include/script.popup.jsp"%>

<script type="text/javascript">
$(function(){
	var $frm = $("#frm");

	// 검색
	search = function(cPage) {
		if(cPage) {
			$("#cPage").val(cPage);
		} else {
			$("#cPage").val(1);
		}
		$("#popList").load("/am/com/popUp/client2PopupList.do", $frm.serialize(), function(){
			var $searchData	= $('input[name="CHK_DATA_IDs"]');
			var $selectedData	= $('input[name="SEL_DATA_IDs"]');

			// 선택 테이블에 담긴 데이터가 검색 테이블에 있을 경우 checked 속성 추가
			if( $selectedData.length > 0 ){
				$selectedData.each(function(idx, data){
					var id	= $(this).data('id');

					$searchData.each(function(){
						if(id == $(this).data('id')){
							$(this).prop('checked', true);
						}
					})
				})
			}
		});
	};

	$frm.find("input[type=text]").on('keyup', function(e){
		if(e.keyCode == '13'){
			search();
		}
	});

	// 페이지 이동
	goPage = function (cPage) {
		search(cPage);
	};

	// 추가버튼
	dataAddToSels = function () {
		var $checkData = $("input[name=CHK_DATA_IDs]:checked");
		var $selectedData = $('input[name="SEL_DATA_IDs"]');

		if($checkData.length < 1) {
			alert("<spring:message code='error.noDataSelected' />");
			return false;
		}

		var po = '';
		$checkData.each(function(idx, data) {
			var inputs = $(this).parent().find("input:hidden");
			var param = {};
			for(var i = 0 ; i < inputs.length; i++){
				param[$(inputs[i]).attr("name")] = $(inputs[i]).val();
			}
			var id		= $(this).data('id');
			var name	= $(this).data('nm');
			var existYn	= true;
			if( $selectedData.length > 0 ){
				$selectedData.each(function(index, data){
					if( id == $(this).data('id') ) {
						existYn = false;
					}
				})
			}

			if(existYn){
				po += '<tr>';
				po += '	<td><input type="checkbox" id="SEL_DATA_ID_'+id+'" name="SEL_DATA_IDs" class="checkbox checkRow" data-id="'+id+'" data-nm="'+name+'" />';
					$.each(param, function(key, val) {
				po += '<input type="hidden" name="'+key+'" value="'+val+'"/>';
					});
				po += '	</td>';
				po += '	<td>'+stringUtil.getString(param.MEM_ID, "")+'</td>';
				po += '	<td>'+stringUtil.getString(param.MEM_NM, "")+'</td>';
				po += '	<td>'+stringUtil.getString(param.LOGIN_ID, "")+'</td>';
				po += '</tr>';
			}
		});

		$("#_selectedData").append(po);
	};

	// 선택행 삭제
	dataDelFrSels = function () {

		if($("input[name=SEL_DATA_IDs]:checked").length < 1) {
			alert("<spring:message code='error.noDataSelected' />");
			return false;
		}

		$("input[name=SEL_DATA_IDs]:checked").each(function(idx, data) {
			var row = $(this).parent().parent();
			var id = $(this).data('id');
			row.remove();

			// 리스트에 선택표시 해제
			$("input[name=CHK_DATA_IDs]:checked").each(function(idx, data){
				if($(this).data('id') == id) {
					$(this).prop('checked',false);
				}
			});
		})
	}

	// 선택 data 부모창으로 return
	dataSel = function () {
		var $selectedData	= $('input[name="SEL_DATA_IDs"]');

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
			var inputs = $(this).parent().find("input:hidden");
			var param = $(this).data();
			for(var i = 0 ; i < inputs.length; i++){
				param[$(inputs[i]).attr("name")] = $(inputs[i]).val();
			}
			params.push(param);
		});

		// 팝업에서 선택된 데이터를 부모창으로 return function
		window.opener.fnClientMultiCallback("${commandMap.eleId}", params);
		self.close();
	}

	search();

});
</script>
</body>
</html>
