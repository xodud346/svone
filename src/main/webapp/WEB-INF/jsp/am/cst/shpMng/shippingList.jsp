<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<style type="text/css">
<!--
-->
</style>
<script type="text/javascript">

$(function(){
	
	//***********전체선택
	$("#chkAll").click(function(){
		//클릭되었으면
		if($("#chkAllV").val() == "Y"){
			$("input[type=checkbox]").prop('checked', false);
			$("#chkAllV").val("N");
		}else{ 
			$("input[type=checkbox]").prop('checked', true);
			$("#chkAllV").val("Y");
		}
	});
	
	//***********조회버튼 클릭 시 
	$('#_search').on('click',function(){
		var $searchForm = $("#searchForm"); 
		$('#searchYn').val('Y');
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/shpMng/shippingList.do", "target":"_self", "method":"post"}).submit();
	});
	



/*******************************
	 *  사업장(다중선택) SSP_BO_MA_40 팝업 Start
	 *******************************/
	fnResultBzplc = function(data) {
		console.log('data',data);

		// 초기화
		$("#searchForm").find("input[name=bzplcId]").val("");
		$("#searchForm").find("input[name=bzplcNm]").val("");

		var id = ''
		,	nm = ''
		,	yn = '';

		$.each(data, function(idx, item){
			if(idx != 0){
				id += ',';
				nm += ',';
			}
			id += item.ID;
			nm += item.NM;
		});
		// 값 설정
		$("#searchForm").find("input[name=bzplcId]").val(id);
		$("#searchForm").find("input[name=bzplcNm]").val(nm);
	}
	/*******************************
	 *  사업장(다중선택) 팝업 End
	 *******************************/
	 
	/*******************************
	 *  운영단위(다중선택) 팝업 Start
	 *******************************/
	// 대상(운영단위) 라디오 버튼 클릭 이벤트
	$("#searchForm").find("input:radio[name=searchOprUntYn]").click(function(){
		if($("#searchForm").find("#searchOprUntYn2").is(":checked")) {
			$("#searchForm").find(".searchOprUnt").show();
			$("#searchForm").find(".oprUntPopup").show();
		} else {
			$("#searchForm").find(".searchOprUnt").hide();
			$("#searchForm").find(".oprUntPopup").hide();
			$("#searchForm").find("[name=oprUntId]").val("");
			$("#searchForm").find("[name=oprUntNm]").val("");
		}
	});

	fnOprUntMultiCallback = function(eleId, data){
		// 초기화
		$("#searchForm").find("input[name=oprUntId]").val("");
		$("#searchForm").find("input[name=oprUntNm]").val("");

		var id = ''
		,	nm = '';

		$.each(data, function(idx, item){
			if(idx != 0){
				id += ',';
				nm += ',';
			}
			id += item.id;
			nm += item.nm;
		});
		// 값 설정
		$("#searchForm").find("input[name=oprUntId]").val(id);
		$("#searchForm").find("input[name=oprUntNm]").val(nm);
	}
	/*******************************
	 *  운영단위(다중선택) 팝업 End
	 *******************************/
	/*******************************
	 *  멀티텍스트검색 팝업 Start
	 *******************************/
	fnResultText = function(data) {
		console.log('data',data);
		if(data){
			// 초기화
			$("#"+data.id).val("");

			// 값 설정
			$("#"+data.id).val(data.data);
		}
	}
	/*******************************
	 *  멀티텍스트검색 팝업 End
	 *******************************/
	 
	 $(document).on("click", "#goView", function(){
		 var $frm = $("#frm");
		var idx = $(this).next().val();
		$("#MEM_EDIT").val("E");
		$("#SEL_MEM_ID").val(idx);
		$frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cst/mmbMng/memberEdit.do", "target":"_self", "method":"post"}).submit();
	});
	
	
	//***********************************************************************************************************//
	 //***********배송지삭제처리
	$(document).on("click", "#goDlvPlcDelete", function(){
		var iCnt = 0;
		iCnt = $("input:checked" ).length;
		if(iCnt > 0){
			if(confirm("선택한 상태로 처리상태를 변경하시겠습니까?")){
				var $frm = $("#frm");
				$.ajax({
					type    : "POST",
					url     : "<c:out value="${serverDomain}" />/am/cst/shpMng/updateDlvplcState.json",
					data    : $frm.serialize(),
					dataType : "json",
					async 	: false,
					success : function(data) {
						//console.log(JSON.stringify(data));
						if(data.model.resultMemState =="Y"){
							var $searchForm = $("#searchForm"); 
							$('#searchYn').val('Y');
							$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/shpMng/shippingList.do", "target":"_self", "method":"post"}).submit();
						}else{
							alert("상태변경 중 에러가 발생하였습니다.");	
						}
						
					},
					error   : function(xhr,status,error) {
						alert("상태변경 중 에러가 발생하였습니다.");	
					}
				});
				
			}
		}else{
			alert("선택된 항목이 없습니다.");
			return;
		}
	});

	
	
	//***********************************************************************************************************//

	 
	 
	 $(document).on("click", "#goExcelDown", function(){
		
		var $searchForm = $("#searchForm"); 
		var searchYn = $("input[name='searchYn']").val();
		var totalRecordCount = $("input[name='total']").val();
		if(totalRecordCount > 10000){
			alert("엑셀 다운로드는 10000건 이하만 가능합니다.");
			return;
		}else if(totalRecordCount == 0){
			alert("저장할 내역이 없습니다.");
			return;
		}
		if(searchYn != "Y"){
			alert("검색을 해주시기 바랍니다.");
			return;
		}
		$searchForm.attr({"action": "<c:out value="${serverDomain}" />/am/cst/shpMng/shippingExcelList.do", "target":"_self", "method":"post"}).submit();
	});


	//***********배송지신규생성
	$(document).on("click", "#goDlvPlcCreate", function(){
		var $frm = $("#frm");
		$("#MEM_EDIT").val("C");
		$("#SEL_MEM_ID").val("");
		$("#SEL_DLVPLC_ID").val("");
		popup('',"500","600","no","_shippingDetailPopup");
		$frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cst/shpMng/shippingEditPopup.do", "target":"popup_shippingDetailPopup", "method":"post"}).submit();
	});
	
});

//***********배송지추가생성
	function goDlvPlcAdd(idx) 
	{
		var $frm = $("#frm");
		$("#MEM_EDIT").val("A");
		$("#SEL_MEM_ID").val($("#MEM_ID"+idx).val());
		$("#SEL_DLVPLC_ID").val("");
		popup('',"500","600","no","_shippingDetailPopup");
		$frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cst/shpMng/shippingEditPopup.do", "target":"popup_shippingDetailPopup", "method":"post"}).submit();
	}
	//***********배송지변경
	function goDlvPlcEdit(idx) 
	{
		var $frm = $("#frm");
		$("#MEM_EDIT").val("E");
		$("#SEL_MEM_ID").val($("#MEM_ID"+idx).val());
		$("#SEL_DLVPLC_ID").val($("#DLVPLC_ID"+idx).val());
		popup('',"500","600","no","_shippingDetailPopup");
		$frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cst/shpMng/shippingEditPopup.do", "target":"popup_shippingDetailPopup", "method":"post"}).submit();
	}
	 //***********페이지 이동
	function goPage(cPage) 
	{
		var $searchForm = $("#searchForm");
		$searchForm.find("input[name='cPage']").val(cPage);
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/cst/shpMng/shippingList.do", "target":"_self", "method":"post"}).submit();
	}


</script>
</head>
<body>
	<!-- body class, 중요 -->

	<div id="header">
		<!-- header -->
		<%@ include file="/WEB-INF/jsp/am/include/top.jsp"%>
	</div>
	<!-- // header -->
	<div id="container">
		<!-- container -->
		<div id="aside" class="aside left">
			<!-- aside -->
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp"%>
		</div>
		<!-- // aside -->
		<!-- wrapper -->
		<div id="wrapper">
			<!-- breadcrumb -->
			<div id="breadcrumb"></div>
			<!-- contents -->
			<div id="contents">
				<div class="container">
					
					<h2 class="title">
						<span>배송지관리</span>
					</h2>
					<h3 class="title">
						<span>조회</span>
					</h3>
					
					<form id="searchForm" name="searchForm">
					<input type="hidden" id="cPage" name="cPage" value="${paging.cPage }"/>
					<input type="hidden" name="total" value="<c:out value="${paging.totalRecordCount }" />" />
					<input type="hidden" name="searchYn" id="searchYn" value="<c:out value="${searchYn }" />"/>
						<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: auto;"/>
								<col style="width: 10%;" />
								<col style="width: auto;"/>
								<col style="width: 10%;" />  
								<col style="width: auto;"/>
							</colgroup>
							<tbody>
								<tr> 
									<th><span>사업장</span></th>
									<td>
										<!-- show area -->
										<input type="text" name="bzplcNm" class="text searchBzplc" value="${commandMap.bzplcNm}" readonly />
										<a href="javascript:bzplcPopup('searchForm');" class="icon search2 bzplcPopup"></a>
										<a href="javascript:multiTextPopup('bzplcId');" class="icon doc textPopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="bzplcId" id="bzplcId" value="${commandMap.bzplcId}" class="searchBzplc" />
									</td>
									<th><span>부서</span></th>
									<td>
										<label><input type="text" name="deptNm" id="deptNm" class="text" value="${commandMap.deptNm}"/></label>
										<a href="#" class="icon search2 bzplcPopup"></a>
										<a href="javascript:multiTextPopup('deptId');" class="icon doc textPopup"></a>
										<input type="hidden" name="deptId" id="deptId" class="text" value="${commandMap.deptId}"/>
									</td>
									<th><span>운영 단위</span></th>
									<td>
										<!-- show area -->
										<input type="text" name="oprUntNm" class="text searchOprUnt" value="${commandMap.oprUntNm}" readonly />
										<a href="javascript:oprUntMultiPopup('searchForm', 'oprUntId');" class="icon search2 oprUntPopup"></a>
										<a href="javascript:multiTextPopup('oprUntId');" class="icon doc textPopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="oprUntId"  id="oprUntId"  value="${commandMap.oprUntId}" class="searchOprUnt" />
									</td>									
								</tr>
								<tr>
									<th><span>회원</span></th>
									<td>
										<label><input type="text" name="memNm" id="memNm" class="text" value="${commandMap.memNm}"/></label>
										<a href="#" class="icon search2 bzplcPopup"></a>
										<a href="javascript:multiTextPopup('memId');" class="icon doc textPopup"></a>
										<input type="hidden" name="memId" id="memId" class="text" value="${commandMap.memId}"/>
									</td>
									<th><span>배송지 유형</span></th>  
									<td>  
										<select class="select" name="basisDlvplcYn" id="basisDlvplcYn">
											<option value="">전체</option>
											<option value="Y" ${commandMap.basisDlvplcYn eq 'Y' ? 'selected="selected"' : ''}>기본배송지</option>
											<option value="N" ${commandMap.basisDlvplcYn eq 'N' ? 'selected="selected"' : ''}>추가배송지</option>
										</select>
									</td>
									<th><span>배송지 ID</span></th>  
									<td>  
										<label><input type="text" name="dlvplcId" id="dlvplcId" class="text" value="${commandMap.dlvplcId}"/></label>
									</td>
								</tr>
							</tbody>
						</table>
					</form>

					<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
						<a href="javascript:searchClear('searchForm');" class="button small"><span>초기화</span></a>
						<a href="#none" class="button small primary" id="_search"><span>조회</span></a>
					</div><!-- // 검색 하단 버튼 -->


					<form id="frm" name="frm">
					<input type="hidden" id="MEM_EDIT" name="MEM_EDIT" />
					<input type="hidden" id="SEL_MEM_ID" name="SEL_MEM_ID" />
					<input type="hidden" id="SEL_DLVPLC_ID" name="SEL_DLVPLC_ID" />
					<input type="hidden" id="useYn" name="useYn" value="N"/>
					
					<div class="section-title"><!-- section-title -->
						<h3 class="title"><span>목록</span></h3>
					</div><!-- // section-title -->
					
					<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
						<div class="col-1-2 text-left">
							<span class="pages ml0 pt10">
							(총 <strong>${paging.totalRecordCount }</strong>건 <em>${paging.cPage }</em>/<em>${paging.totalPageCount }</em>)
							</span>
						</div>
						<div class="col-1-2 text-right">

							<a href="#none" id="goDlvPlcCreate" class="button small"><span>배송지 생성</span></a>
							<a href="#none" id="goDlvPlcDelete" class="button small"><span>선택삭제</span></a>
							<a href="#" id="goExcelDown" class="button small"><span>엑셀 다운로드</span></a>
							<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>                        
						</div>
					</div><!-- // 목록 상단 버튼 -->

					

					<!-- table -->
					<div class="tableOut">
					<table cellspacing="0" class="table-col table-b"><!-- table -->		
						<colgroup>
							<col style="width: 5%;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
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
								<th><a href="#none" id="chkAll" class="button small">선택</a><input type="hidden" name="chkAllV" id="chkAllV" value="N"/></th>
								<th>회원ID</th>
								<th>회원명</th>
								<th>배송지유형</th>
								<th>배송지ID</th>
								<th>수령인명</th>
								<th>우편번호</th>
								<th>주소</th>
								<th>상세주소</th>
								<th>전화번호</th>
								<th>휴대폰번호</th>
								<th>사업장ID</th>
								<th>사업장명</th>
								<th>운영단위ID</th>
								<th>운영단위명</th>
								<th>부서ID</th>
								<th>부서명</th>								
							</tr>
						</thead>
						<tbody>
							<c:choose>
								<c:when test="${searchYn eq null }">
									<tr><td colspan="17">조회조건을 선택 하신 후, 조회해 주세요.</td></tr>
								</c:when>
								<c:otherwise>
									<c:choose>
										<c:when test="${paging.totalRecordCount > 0 }">
											<c:forEach var="list" items="${list }" varStatus="cx">
												<tr>
													<td><input type="checkbox" class="checkbox" name="chkS" id="chkS${cx.index}" value="${list.DLVPLC_ID }" ${ list.CAN_CHANGE eq 'N' ? 'disabled="disabled"' : ''} /></td>
													<td><a href="javascript:goDlvPlcAdd(${cx.index});" id="goDlvPlcAdd" >${list.MEM_ID }</a>
													<input type="hidden" name="MEM_ID" id="MEM_ID${cx.index}" value="${list.MEM_ID }" /></td>											
													<td>${list.MEM_NM }</td>
													<td>${list.DLVPLC_NM }</td>													
													<td><a href="javascript:goDlvPlcEdit(${cx.index});" id="goDlvPlcEdit" >${list.DLVPLC_ID }</a>
													<input type="hidden" name="DLVPLC_ID" id="DLVPLC_ID${cx.index}" value="${list.DLVPLC_ID }" /></td>
													<td>${list.RCVR_NM }</td>
													<td>${list.ZPCD }</td>
													<td>${list.REPR_ADDR }</td>
													<td>${list.DTL_ADDR }</td>
													<td>${list.MP_NO }</td>
													<td>${list.TEL_NO }</td>
													<td>${list.BZPLC_ID }</td>													
													<td>${list.BZPLC_NM }</td>
													<td>${list.OPR_UNT_ID }</td>
													<td>${list.OPR_UNT_NM }</td>
													<td>${list.DEPT_ID }</td>
													<td>${list.DEPT_NM }</td>
												</tr>
											</c:forEach>
										</c:when>
										<c:otherwise>
											<tr><td colspan="17">조회 결과가 없습니다.</td></tr>
										</c:otherwise>
									</c:choose>
								</c:otherwise>
							</c:choose>
						</tbody>
					</table>
					</div>
					</form>
					<!-- // table -->
					
					<div class="section-pagination">
						<h4 class="sr-only">목록 페이징</h4>
						<div class="wrap">
							<!-- 개발 시 wrap 이하 모듈 시작 -->
							<ui:paging paging="${paging }" jsFunction="goPage" />
						</div>
					</div>
				</div>
			</div>
			<!-- // contents -->
		</div>
		<!-- // wrapper -->
		<div id="quickmenu" class="aside right">
			<!-- quickmenu-->
			<%@ include file="/WEB-INF/jsp/am/include/quick.jsp"%>
		</div>
		<!-- // quickmenu -->
	</div>
	<!-- // container -->
	<div id="footer">
		<%@ include file="/WEB-INF/jsp/am/include/footer.jsp"%>
	</div>

	<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
</body>
</html>