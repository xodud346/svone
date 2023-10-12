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
				<h3 class="title"><span>운영단위조회</span></h3>
			</div>

			<form id="searchForm" name="searchForm">
				<input type="hidden"	name="pageSize"		value="${paging.pageSize }" />
								
				<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
					<colgroup>
						<col style="width: 25%;" />
						<col style="width: auto;" />
					</colgroup>
					<tbody>
						<tr>
							<th><span>운영단위ID</span></th>
							<td>
								<input type="text" class="text large" id="oprUntId" name="oprUntId" value="" />
							</td>
						</tr>
						<tr>
							<th><span>운영단위명</span></th>
							<td>
								<input type="text" class="text large" id="oprUntNm" name="oprUntNm" value="" />
							</td>
						</tr>
					</tbody>
				</table>
			</form>

			<div class="grid section-button-search">
				<a href="javascript:searchClear('searchForm');" class="button small"><span>초기화</span></a>
				<a href="javascript:search('srch');" id="_search" class="button small primary"><span>검색</span></a>
			</div>
			
			<!-- 운영단위 데이터 테이블 -->
			<div id="popList">
				<%@ include file="/WEB-INF/jsp/am/cst/oprUnt/operatingPopupAjax.jsp" %>
			</div>

			<form id="tempFrm" name="tempFrm">
				<table cellspacing="0" class="table-col table-b">
					<colgroup>
						<col style="width: 10%;" />
						<col style="width: auto;" />
						<col style="width: 50%;" />
						<col style="width: 15%;" />
					</colgroup>
					<thead>
						<tr>
							<th>선택</th>
							<th>운영 단위 ID</th>
							<th>운영 단위 명</th>
							<th>사용 여부</th>
						</tr>
					</thead>
					<tbody id="_selectedData">
						<c:if test="${trgtList ne null and trgtList ne '' }">
							<c:forEach var="data" items="${trgtList }" varStatus="status">
								<tr>
									<td>
										<input type="checkbox" class="checkbox checkRow" id="slct${status.count }" name="slctData" data-id="${data.NTS_BZPLC_ID }" data-nm="${data.OPR_UNT_NM }" data-use="${data.USE_YN }"/>
									</td>
									<td>${data.NTS_BZPLC_ID }</td>
									<td>${data.OPR_UNT_NM }</td>
									<td>${data.USE_YN }</td>
								</tr>
							</c:forEach>
						</c:if>
					</tbody>
				</table>
			</form>
			
			
			<div class="grid section-button-search">
				<a href="javascript:choiceDelete();" class="button small"><span>취소</span></a>
				<a href="javascript:choiceLast();" class="button small primary"><span>선택</span></a>
			</div>
			
		</div>
	</div>
</div>

<script src="<c:out value="${serverDomain}" />/am/js/vendor/jquery-1.11.2.min.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/plugins.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
<script type="text/javascript">
$(function () {
	
	<%-- 임시테이블에 담긴 데이터가 검색 테이블에 있을 경우 checked 속성 추가 --%>
	propChecked = function(){
		
		var $last	= $('input[name="slctData"]');
		var $chk	= $('input[name="chkIndex"]');

		if( $last.length > 0 ){
			
			$last.each(function(idx, data){
				
				var id		= $(this).data('id');
				
				$chk.each(function(){
					if(id == $(this).data('id'))	$(this).prop('checked', true);
				})
			})
		}
	}
	
	<%-- 첫번째 테이블에서 선택한 데이터 두번째 테이블(임시테이블)로 옮기기 --%>
	choice = function () {

		var $count = $('input[name="chkIndex"]:checked');
		
		if( $count.length > 0 ){
			
			var html	= '';
			
			$count.each(function(idx, data){
				
				var id		= $(this).data('id');
				var name	= $(this).data('nm');
				var use		= $(this).data('use');
				var existYn	= true;
				
				var $selectedData	= $('input[name="slctData"]');
				var lastIdx			= 0;		<%-- 미리 그려진 데이터가 있을 경우 --%>
				
				if( $selectedData.length > 0 ){
					
					var lastStr = $selectedData.last().attr('id');
					lastIdx = lastStr.substring(4);
					
					$selectedData.each(function(index, data){
						if( id == $(this).data('id') )		existYn = false;
					})
				}
				
				if (existYn) {
					
					var index = idx + (lastIdx*1) + 1;
					
					html +=	'<tr>';
					html +=		'<td>';
					html +=			'<input type="checkbox" class="checkbox checkRow" id="slct'+index+'" name="slctData" data-id="'+id+'" data-nm="'+name+'" data-use="'+use+'"/>';
					html +=		'</td>';
					html +=		'<td>'+id+'</td>';
					html +=		'<td>'+name+'</td>';
					html +=		'<td>'+use+'</td>';
					html +=	'</tr>';
				}
			})
			
			$('#_selectedData').append(html);
			
		} else {
			alert("<spring:message code='error.noDataSelected' />");
			return false;
		}
	}
	
	// 조회 버튼 클릭 시
	search = function (type) {
		
		var $subForm = '';
		var oprUntId = $('#oprUntId').val();
		var oprUntNm = $('#oprUntNm').val();
		
		if( type == "srch" ){
			$subForm = $('#searchForm');
			$('#frm').find('input[name="oprUntId"]').val(oprUntId);
			$('#frm').find('input[name="oprUntNm"]').val(oprUntNm);
		} else {
			$subForm = $('#frm');
		}
			
		
		$("#popList").load("<c:out value="${serverDomain}" />/am/cst/oprUnt/operatingPopupAjax.do", $subForm.serialize(), function(){
			propChecked();
		});
	}
	
	<%-- 임시테이블에서 데이터 삭제 --%>
	choiceDelete = function () {
		
		var $last = $('input[name="slctData"]:checked');
		
		if( $last.length > 0 ){
			$last.each(function(idx, data){
				$(this).parents('tr').remove();
			});
		}
	}

	<%-- 선택된 데이터들 바닥 페이지로 내리기 --%>
	choiceLast = function() {
		
		var $last = $('input[name="slctData"]:checked');
		
		if( $last.length > 0 ){
			
			var params = new Array();
	    	var obj;
	    	
			$last.each(function(idx, data){
				
				obj		= new Object();
				obj.ID	= $(this).data('id');
				obj.NM	= $(this).data('nm');
				obj.USE	= $(this).data('use');
				
				params.push(obj);
			});
			
			window.opener.fnResultOper(params);
			self.close();
			
		} else {
			alert("운영단위를 선택해 주세요.");
			return false;
		}
	}
    
	// 페이지 이동
	goPage = function (cPage) {
		$('#frm').find('#cPage').val(cPage);
		search('frm');
	};
	
	<%-- 페이지 진입 시 실행 --%>
	propChecked();
	
});
</script>
</body>
</html>
