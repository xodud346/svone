<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>담당자 조회</title>
</head>
<body class="page-popup">
	<div class="modal">
		<div class="modal-wrapper">
			<div class="modal-inner">
				<h3 class="title"><span>담당자 조회</span></h3>
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
								<th scope="col"><span>사번</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="empNo" name="empNo" value="" />
								</td>
							</tr>
							<tr>
								<th scope="col"><span>담당자 명</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="oprtrNm" name="oprtrNm" value="" />
								</td>
							</tr>
							<tr>
								<th scope="col"><span>조직 코드</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="orgCd" name="orgCd" value="" />
								</td>
							</tr>
							<tr>
								<th scope="col"><span>조직 코드 명</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="orgNm" name="orgNm" value="" />
								</td>
							</tr>
							<tr>
								<th scope="col"><span>직급</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="jbposNm" name="jbposNm" value="" />
								</td>
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
					<%-- <%@ include file="/WEB-INF/jsp/am/com/popUp/service2PopupList.jsp" %> --%>
				</div>
				<!-- 조회 결과 영역 -->

				<!-- 선택 영역 -->
				<table cellspacing="0" class="table-col table-b" id="selTable">
					<colgroup>
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">선택</th>
							<th scope="col">사번</th>
							<th scope="col">담당자 명</th>
							<th scope="col">조직 코드</th>
							<th scope="col">조직 코드 명</th>
							<th scope="col">직위</th>
							<th scope="col">직무</th>
							<th scope="col">사용 여부</th>
						</tr>
					</thead>
					<tbody id="_selectedData">
						<c:if test="${not empty selList}">
							<c:forEach var="list" items="${selList}" varStatus="status">
								<tr>
									<td>
										<input type="checkbox" id="SEL_DATA_ID_${list.EMP_NO}" name="SEL_DATA_IDs" class="checkbox checkRow"
											data-id="${list.EMP_NO}" data-nm="${list.OPRTR_NM}" />
										<c:forEach var="i" items="${list}" varStatus="status">
											<input type="hidden" name="${i.key}" value="${i.value}"/>
										</c:forEach>
									</td>
									<td>${list.EMP_NO}</td>
									<td>${list.OPRTR_NM}</td>
									<td>${list.ORG_CD}</td>
									<td>${list.ORG_NM}</td>
									<td>${list.POS_NM}</td>
									<td>${list.JBNM}</td>
									<td><c:out value="${list.USE_YN eq 'Y'? '사용' : '미사용'}" /></td>
								</tr>
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

<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>

<script type="text/javascript">
$(function(){
	var $frm = $("#frm");

	// 검색
	search = function() {
		$("#popList").load("/am/com/popUp/service2PopupList.do", $frm.serialize(), function(){
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
		$("#cPage").val(cPage);
		search();
	};

	// 팝업 추가버튼
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
				po += '	<td>'+stringUtil.getString(param.EMP_NO, "")+'</td>';
				po += '	<td>'+stringUtil.getString(param.OPRTR_NM, "")+'</td>';
				po += '	<td>'+stringUtil.getString(param.ORG_CD, "")+'</td>';
				po += '	<td>'+stringUtil.getString(param.ORG_NM, "")+'</td>';
				po += '	<td>'+stringUtil.getString(param.POS_NM, "")+'</td>';
				po += '	<td>'+stringUtil.getString(param.JBNM, "")+'</td>';
				po += '	<td>'+(stringUtil.getString(param.USE_YN, "N")=='Y'? '사용' : '미사용')+'</td>';
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
		$selectedData.each(function(idx, data) {
			var inputs = $(this).parent().find("input:hidden");
			var param = $(this).data();
			for(var i = 0 ; i < inputs.length; i++){
				param[$(inputs[i]).attr("name")] = $(inputs[i]).val();
			}
			params.push(param);
		});

		// 팝업에서 선택된 데이터를 부모창으로 return function
		window.opener.fnServiceResultMultiCallback("${commandMap.eleId}", params);
		self.close();
	}

	search();

});
</script>
</body>
</html>
