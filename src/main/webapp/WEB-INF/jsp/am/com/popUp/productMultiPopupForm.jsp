<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>상품ID 조회</title>
</head>
<body class="page-popup">
	<div class="modal">
		<div class="modal-wrapper">
			<div class="modal-inner">
				<h3 class="title"><span>상품정보 조회</span></h3>
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
								<th scope="col"><span>상품ID</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="prdId" name="prdId" value="" />
								</td>
							</tr>
							<tr>
								<th scope="col"><span>상품명</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="prdNm" name="prdNm" value="" />
								</td>
							</tr>
							<tr>
								<th scope="col"><span>규격</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="attrVal" name="attrVal" value="" />
								</td>
							</tr>
							<tr>
								<th scope="col"><span>제조사명</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="mnfr" name="mnfr" value="" />
								</td>
							</tr>
						</tbody>
					</table><!-- // table -->
				</form>

				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
					<a href="javascript:frmClear();" id="searchClear" class="button small"><span>초기화</span></a>
					<a href="javascript:search();" class="button small primary"><span>검색</span></a>
				</div>

				<!-- 조회 결과 영역 -->
				<div id="popList">
					<%-- <%@ include file="/WEB-INF/jsp/am/dsp/popMng/bzplcPopupList.jsp" %> --%>
				</div>
				<!-- //조회 결과 영역 -->

				<!-- 선택 영역 -->
				<table cellspacing="0" class="table-col table-b" id="selTable">
					<colgroup>
						<col style="width: 40px;" />
						<col style="width: 135px;" />
						<col style="width: 200px;" />
						<col style="width: 200px;" />
						<col style="width: auto;" />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">선택</th>
							<th scope="col">상품 ID</th>
							<th scope="col">상품 명</th>
							<th scope="col">규격</th>
							<th scope="col">제조사 명</th>
						</tr>
					</thead>
					<tbody id="_selectedData">
						<c:if test="${not empty selList}">
							<c:forEach var="list" items="${selList}" varStatus="status">
								<tr>
									<td>
										<input type="checkbox" id="SEL_DATA_ID_${list.prdId}" name="SEL_DATA_IDs" class="checkbox checkRow"
											data-id="${list.prdId}" data-nm="${list.prdNm}" />
										<c:forEach var="i" items="${list}" varStatus="status">
											<input type="hidden" name="${i.key}" value="${i.value}"/>
										</c:forEach>
									</td>
									<td>${list.prdId}</td>
									<td class="text-left">${list.prdNm}</td>
									<td class="td_ellipsis" style="max-width: 200px;">${list.attrVal}</td>
									<td class="td_ellipsis" style="max-width: 200px;">${list.mnfr}</td>
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

	// 초기화
	frmClear = function(){
		searchClear('frm', {useYn: "Y"});
	}

	// 검색
	search = function() {
		$("#popList").load("/am/com/popUp/productMultiPopupList.do", $frm.serialize(), function(){
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
				po += '	<td>'+stringUtil.getString(param.prdId, "")+'</td>';
				po += '	<td class="text-left">'+stringUtil.getString(param.prdNm, "")+'</td>';
				po += '	<td class="td_ellipsis">'+stringUtil.getString(param.attrVal, "")+'</td>';
				po += '	<td class="td_ellipsis">'+stringUtil.getString(param.mnfr, "")+'</td>';
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
		window.opener.fnProductMultiCallback("${commandMap.eleId}", params);
		self.close();
	}

	search();

});
</script>
</body>
</html>
