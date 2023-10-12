<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript">
function _search(val){
	if(val === "tab1"){
		var $searchForm = $("#searchFormTab1");
		$('#searchYn').val('Y');
		$searchForm.find("input[name='pageSize']").val(10);
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/oprUnt/oprUntCodeList.do", "target":"_self", "method":"post"}).submit();
	}else{
		
	}
}

function resetBtn(val){
	if(val === "tab1"){
		$("#searchFormTab1")[0].reset();
		$("#searchFormTab1 input:hidden").val('');
		$("#searchFormTab1 select").val('');
	}else{
		$("#searchFormTab2")[0].reset();
		$("#searchFormTab2 input:hidden").val('');
		$("#searchFormTab2 select").val('');
	}
}


$(function(){
	
	
	$("#menuViewTab").on("click", "a", function(){
		var this_tab_no = $(this).data('tab_no');

		$(this).parent().parent().find('a').each(function(i, item){
			if( this_tab_no == $(item).data("tab_no") ){
				$("#" + $(item).data("tab_no")).show();
				$(item).parent().attr("class","in");
			}else{
				$("#" + $(item).data("tab_no")).hide();
				$(item).parent().attr("class","");
			}
		});
	});
	
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
<title>참조코드</title>
</head>
<body class="page-popup">
	<div class="modal">
		<div class="modal-wrapper">
			<div class="modal-inner">
				<h3 class="title"><span>참조코드 명</span></h3>
				<div class="tab-list" id="menuViewTab">
					<ul>
						<li class="in"><a href="#none" data-tab_no="tab1">운영단위 코드 관리</a></li>
						<li><a href="#none" data-tab_no="tab2">부서코드 관리</a></li>
					</ul>
				</div>
				<div id="tab1">
					<form id="searchFormTab1" name="searchFormTab1">
						<input type="hidden" name="searchYn" id="searchYn" value="${searchYn }"/>
						<input type="hidden" name="pageSize"	value="<c:out value="${map.pageSize }"/>" />
						<input type="hidden" name="cPage"		value="<c:out value="${map.cPage}"/>"/>
						<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
							<colgroup>
								<col style="width: 30%;" />
								<col style="width: auto;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>상태</span></th>
									<td>
										<input type="radio" class="radio" name="" id="" value=""/>
										<label for="">전체</label>
										<input type="radio" class="radio" name="" id="" value="Y"/>
										<label for="">사용</label>
										<input type="radio" class="radio" name="" id="" value="N"/>
										<label for="">미사용</label>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					<div class="grid section-button-search">
						<a href="#none" onclick="resetBtn(tab1);" class="button small"><span>초기화</span></a>
						<a href="#none" onclick="_search(tab1)" class="button small primary"><span>조회</span></a>
					</div>
					<form id="frmTab1" name="frmTab1">
						<div class="grid section-button-list">
							<div class="col-1-2 text-left">
								<span class="pages">
									(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
								</span>
							</div>
							<div class="col-1-2 text-right">
								<a href="#none" onclick="fn_goExcelDown(tab1)" class="button small"><span>엑셀 다운로드</span></a>
								<a href="#none" onclick="fn_chgStat(tab1);" class="button small primary"><span>일괄 등록</span></a>
								<a href="#none" onclick="fn_addRow(tab1);" class="button small primary"><span>추가</span></a>
							</div>
						</div>
						<table cellspacing="0" class="table-col table-b">
							<colgroup>
								<col style="width: auto;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
							</colgroup>
							<thead>
								<tr>
									<th>No</th>
									<th>상세 관리 코드 ID</th>
									<th>상세 코드</th>
									<th>상세 코드 명</th>
									<th>상태</th>
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
												<td>4</td>
												<td>5</td>
											</tr>
											<c:set var="listNum" value="${listNum-1}" />
										</c:forEach>
									</c:when>
									<c:otherwise>
										<tr>
											<td colspan="5">조회 결과가 없습니다.</td>
										</tr>
									</c:otherwise>
								</c:choose>
							</tbody>
						</table>
						<!-- // table -->
					</form>
				</div>
				<!-- tab1 end -->
				<div id="tab2" style="display:none;">
					<form id="searchFormTab2" name="searchFormTab2">
						<input type="hidden" name="searchYn" id="searchYn" value="${searchYn }"/>
						<input type="hidden" name="pageSize"	value="<c:out value="${map.pageSize }"/>" />
						<input type="hidden" name="cPage"		value="<c:out value="${map.cPage}"/>"/>
						<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
							<colgroup>
								<col style="width: 30%;" />
								<col style="width: auto;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>부서</span></th>
									<td>
										<select class="select">
											<option value="">선택</option>
											<option value="">1</option>
											<option value="">2</option>
										</select>
									</td>
								</tr>
								<tr>
									<th><span>상태</span></th>
									<td>
										<input type="radio" class="radio" name="" id="" value=""/>
										<label for="">전체</label>
										<input type="radio" class="radio" name="" id="" value="Y"/>
										<label for="">사용</label>
										<input type="radio" class="radio" name="" id="" value="N"/>
										<label for="">미사용</label>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					<div class="grid section-button-search">
						<a href="#none" onclick="resetBtn(tab2);" class="button small"><span>초기화</span></a>
						<a href="#none" onclick="_search(tab2)" class="button small primary"><span>조회</span></a>
					</div>
					<form id="frmTab2" name="frmTab2">
						<div class="grid section-button-list">
							<div class="col-1-2 text-left">
								<span class="pages">
									(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
								</span>
							</div>
							<div class="col-1-2 text-right">
								<a href="#none" onclick="fn_goExcelDown(tab2)" class="button small"><span>엑셀 다운로드</span></a>
								<a href="#none" onclick="fn_chgStat(tab2);" class="button small primary"><span>일괄 등록</span></a>
								<a href="#none" onclick="fn_addRow(tab2);" class="button small primary"><span>추가</span></a>
							</div>
						</div>
						<table cellspacing="0" class="table-col table-b">
							<colgroup>
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
									<th>No</th>
									<th>부서 ID</th>
									<th>부서명</th>
									<th>상세 코드 ID</th>
									<th>상세 코드</th>
									<th>상세 코드 명</th>
									<th>상태</th>
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
												<td>4</td>
												<td>5</td>
												<td>6</td>
												<td>7</td>
											</tr>
											<c:set var="listNum" value="${listNum-1}" />
										</c:forEach>
									</c:when>
									<c:otherwise>
										<tr>
											<td colspan="7">조회 결과가 없습니다.</td>
										</tr>
									</c:otherwise>
								</c:choose>
							</tbody>
						</table>
						<!-- // table -->
					</form>
				</div>
			</div>
		</div>
	</div>
<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
</body>
</html>