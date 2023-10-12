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
				<h3 class="title"><span>상품등록</span></h3>
			</div>

			<form id="searchForm">
				<input type="hidden" name="pageSize" value="${paging.pageSize }"/>

				<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
					<colgroup>
						<col style="width: 20%;" />
						<col style="width: auto;" />
					</colgroup>
					<tbody>
						<tr>
							<th><span>상품 ID</span></th>
							<td>
								<input type="text" class="text-large" id="PRD_MST_CD" name="PRD_MST_CD" style="width:90%;" />
							</td>
						</tr>
						<tr>
							<th><span>상품명</span></th>
							<td>
								<input type="text" class="text-large" id="PRD_MST_NM" name="PRD_MST_NM" style="width:90%;" />
							</td>
						</tr>
						<tr>
							<th><span>대표규격</span></th>
							<td>
								<input type="text" class="text-large" id="" name="" style="width:90%;" />
							</td>
						</tr>
					</tbody>
				</table>
			</form>

			<div class="grid section-button-search">
				<a href="javascript:" class="button small"><span>초기화</span></a>
				<a href="javascript:search('search')" class="button small primary"><span>조회</span></a>
			</div>

			<div id="productList">
				<%@ include file="/WEB-INF/jsp/am/dsp/dspMng/displayProductPopupList.jsp" %>
			</div>

			<form id="tempFrm" name="tempFrm">
				<table cellspacing="0" class="table-col table-b">
					<colgroup>
						<col style="width: 5%;" />
						<col style="width: 15%;" />
						<col style="width: 30%;" />
						<col style="width: 30%;" />
						<col style="width: 10%;" />
						<col style="width: 10%;" />
					</colgroup>
					<thead>
						<tr>
							<th>선택</th>
							<th>상품 ID</th>
							<th>상품명</th>
							<th>대표규격</th>
							<th>휴면화</th>
							<th>일시품절</th>
						</tr>
					</thead>
					<tbody id="_selectedData">
						<c:if test="${!empty trgList}">
							<c:forEach items="${trgList }" var="list" varStatus="status">
								<tr>
									<td>
										<input type="checkbox" class="checkbox checkRow" id="slct${status.count }" name="slctData" data-prd_mst_cd="${list.PRD_MST_CD }" data-prd_mst_nm="${list.PRD_MST_NM }" data-prd_mst_sel_state="${list.PRD_MST_SEL_STATE }" >
									</td>
									<td>${list.PRD_MST_CD }</td>
									<td>${list.PRD_MST_NM }</td>
									<td></td>
									<td></td>
									<td>
										<c:if test="${list.PRD_MST_SEL_STATE eq Code.PRODUCT_SELL_STATE_ING}"><span class="history-condition success center"><i class="fonti um-circle"></i>판매중</span></c:if>
										<c:if test="${list.PRD_MST_SEL_STATE eq Code.PRODUCT_SELL_STATE_OP_TEMPOUT}" ><span class="history-condition info center"><i class="fonti um-circle"></i>일시품절</span></c:if> 
										<c:if test="${list.PRD_MST_SEL_STATE eq Code.PRODUCT_SELL_STATE_TEMPOUT}" ><span class="history-condition info center"><i class="fonti um-circle"></i>품절상품</span></c:if> 
										<c:if test="${list.PRD_MST_SEL_STATE eq Code.PRODUCT_SELL_STATE_STOP}" ><span class="history-condition info center"><i class="fonti um-circle"></i>미판매</span></c:if> 
									</td>
								</tr>
							</c:forEach>
						</c:if>
					</tbody>
				</table>
			</form>

			<div class="grid section-button-search">
				<a href="javascript:choiceDelete();" class="button small"><span>삭제</span></a>
			</div>
			
			<div class="grid section-button large wrap">
				<a href="javascript:choice();" class="button large"><span>선택</span></a>
			</div>
			
		</div>
	</div>
</div>

<script src="<c:out value="${serverDomain}" />/am/js/vendor/jquery-1.11.2.min.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/plugins.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
<script type="text/javascript">
$(function(){
	search = function(type){
		var $form = "";
		var PRD_MST_CD = $("#PRD_MST_CD").val();
		var PRD_MST_NM = $("#PRD_MST_NM").val();

		if(type == "search"){
			$form = $("#searchForm");
			$("#frm").find("input[name='PRD_MST_CD']").val(PRD_MST_CD);
			$("#frm").find("input[name='PRD_MST_NM']").val(PRD_MST_NM);
		} else {
			$form = $("#frm");
		}

		$("#productList").load("<c:out value="${serverDomain}" />/am/dsp/dspMng/displayProductPopupList.do", $form.serialize(), function(){
			propChecked();
		});
	}

	goPage = function(cPage){
		$("#frm").find("#cPage").val(cPage);
		search('page');
	}

	propChecked = function(){
		var $last = $('input[name="slctData"]');
		var $chk = $('input[name="chkIndex"]');
		
		if($last.length > 0){
			$last.each(function(index, item){
				var id = $(this).data('prd_mst_cd');
				
				$chk.each(function(){
					if(id == $(this).data('prd_mst_cd')){
						$(this).prop('checked', true);
					}
				});
			});
		}
	}

	choiceDelete = function(){
		var $last = $('input[name="slctData"]:checked');
		var $chk = $('input[name="chkIndex"]');

		if($last.length > 0){
			$last.each(function(index, item){
				$(this).parents('tr').remove();

				var id = $(this).data('prd_mst_cd');

				$chk.each(function(){
					if(id == $(this).data('prd_mst_cd')){
						$(this).prop('checked', false);
					}
				});
			});
		}
	}

	add = function(){
		var $count = $("input[name='chkIndex']:checked");

		if($count.length > 0){
			var html = '';

			$count.each(function(index, item){
				var PRD_MST_CD = $(this).data('prd_mst_cd');
				var PRD_MST_NM = $(this).data('prd_mst_nm');
				var PRD_MST_SEL_STATE = $(this).data('prd_mst_sel_state');
				var existYn = true;
				
				var $selectedData = $('input[name="slctData"]');
				var lastIdx = 0;
				
				if($selectedData.length > 0){
					var lastStr = $selectedData.last().attr('id');
					lastIdx = lastStr.substring(4);
					
					$selectedData.each(function(index, item){
						if(PRD_MST_CD == $(this).data('prd_mst_cd')){
							existYn = false;
						}
					});
				}

				if(existYn){
					var idx = index + (lastIdx * 1) + 1;
					
					html += '<tr>';
					html += 	'<td>';
					html += 		'<input type="checkbox" class="checkbox checkRow" id="slct'+index+'" name="slctData" data-prd_mst_cd="'+PRD_MST_CD+'" data-prd_mst_nm="'+PRD_MST_NM+'" data-prd_mst_sel_state="'+PRD_MST_SEL_STATE+'"/>';
					html += 	'</td>';
					html += 	'<td>' + PRD_MST_CD + '</td>';
					html += 	'<td>' + PRD_MST_NM + '</td>';
					html += 	'<td></td>';
					html += 	'<td></td>';
					html += 	'<td>';
					if(PRD_MST_SEL_STATE == "I"){
						html += '<span class="history-condition success center"><i class="fonti um-circle"></i>판매중</span>';
					}else if(PRD_MST_SEL_STATE == "T"){
						html += '<span class="history-condition info center"><i class="fonti um-circle"></i>품절상품</span>';
					}else if(PRD_MST_SEL_STATE == "S"){
						html += '<span class="history-condition info center"><i class="fonti um-circle"></i>미판매</span>';
					}else if(PRD_MST_SEL_STATE == "O"){
						html += '<span class="history-condition info center"><i class="fonti um-circle"></i>일시품절</span>';
					}
					html += 	'</td>';
					html += '</tr>';
				}
			});
			
			$("#_selectedData").append(html);
		} else {
			alert("<spring:message code='error.noDataSelected' />");
			return false;
		}
	}
	
	choice = function(){
		var $last = $('input[name="slctData"]');

		if($last.length > 0){
			var params = new Array();
			var obj;

			$last.each(function(index, item){
				obj = new Object();
				obj.PRD_MST_CD = $(this).data('prd_mst_cd');
				obj.PRD_MST_NM = $(this).data('prd_mst_nm');
				obj.PRD_MST_SEL_STATE = $(this).data('prd_mst_sel_state');

				params.push(obj);
			});

			window.opener.fnResult(params);
			self.close();
		}else{
			alert("상품을 선택해주세요.");
			return false;
		}
	}
});
</script>
</body>
</html>