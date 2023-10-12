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
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/mmbMng/memberList.do", "target":"_self", "method":"post"}).submit();
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
	 //***********************************************************************************************//

	
	$(document).on("click", "#goMemState", function(){
		var iCnt = 0;
		iCnt = $("input:checked" ).length;
		if($("#useYn").val() == null || $("#useYn").val() == ""){
			alert("변경할 싱태를 선택해 주세요.")
			return;
		}
		if(iCnt > 0){
			if(confirm("선택한 상태로 처리상태를 변경하시겠습니까?")){
				var $frm = $("#frm");
				$.ajax({
					type    : "POST",
					url     : "<c:out value="${serverDomain}" />/am/cst/mmbMng/updateMemState.json",
					data    : $frm.serialize(),
					dataType : "json",
					async 	: false,
					success : function(data) {
						//console.log(JSON.stringify(data));
						if(data.model.resultMemState =="Y"){
							var $searchForm = $("#searchForm"); 
							$('#searchYn').val('Y');
							$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/mmbMng/memberList.do", "target":"_self", "method":"post"}).submit();
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
	
	$(document).on("click", "#goMemCopy", function(){
		alert("준비중");
	});
	
	$(document).on("click", "#goMemFileAdd", function(){
		alert("준비중");
	});
	
	$(document).on("click", "#goMemCreate", function(){
		var $frm = $("#frm");
		$("#MEM_EDIT").val("N");
		$("#SEL_MEM_ID").val("X");
		$frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cst/mmbMng/memberEdit.do", "target":"_self", "method":"post"}).submit();
	});
	 
	 
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
		$searchForm.attr({"action": "<c:out value="${serverDomain}" />/am/cst/mmbMng/memberExcelList.do", "target":"_self", "method":"post"}).submit();
	});

	
});

	 function goMemView(idx) 
	{	
		var $frm = $("#frm");
		//$("#MEM_EDIT").val("E");
		$("#MEM_EDIT").val($("#TAR_MEM_EDIT"+idx).val());
		$("#SEL_MEM_ID").val($("#MEM_ID"+idx).val());
		$frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cst/mmbMng/memberEdit.do", "target":"_self", "method":"post"}).submit();
	};

	 //***********페이지 이동
	function goPage(cPage) 
	{
		var $searchForm = $("#searchForm");
		$searchForm.find("input[name='cPage']").val(cPage);
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/cst/mmbMng/memberList.do", "target":"_self", "method":"post"}).submit();
	};


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
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp"%>
		</div>
		<!-- wrapper -->
		<div id="wrapper">
		
			<div id="breadcrumb"></div>
			<!-- contents -->
			<div id="contents">
				<div class="container">
					
					<h2 class="title">
						<span>회원관리</span>
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
									<th><span>상태</span></th>  
									<td>  
										<select class="select" name="state" id="state">
											<option value="00" ${commandMap.state eq '00' ? 'selected="selected"' : ''}>전체</option>
											<option value="01" ${commandMap.state eq '01' ? 'selected="selected"' : ''}>사용</option>
											<option value="02" ${commandMap.state eq '02' ? 'selected="selected"' : ''}>미사용</option>
											<option value="03" ${commandMap.state eq '03' ? 'selected="selected"' : ''}>휴면</option>
											<option value="04" ${commandMap.state eq '04' ? 'selected="selected"' : ''}>탈퇴</option>
										</select>
									</td>
									<th><span>고객 유형</span></th>  
									<td>  
										<select class="select" name="custTpCd" id="custTpCd">
											<option value="">전체</option>
											<option value="20" ${commandMap.custTpCd eq '20' ? 'selected="selected"' : ''}>계약</option>
											<option value="30" ${commandMap.custTpCd eq '30' ? 'selected="selected"' : ''}>일반</option>
										</select>
									</td>
									<th><span>사업장</span></th>
									<td>
										<!-- show area -->
										<input type="text" name="bzplcNm" class="text searchBzplc" value="${commandMap.bzplcNm}" readonly />
										<a href="javascript:bzplcPopup('searchForm');" class="icon search2 bzplcPopup"></a>
										<a href="javascript:multiTextPopup('bzplcId');" class="icon doc textPopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="bzplcId" id="bzplcId" value="${commandMap.bzplcId}" class="text" />
									</td>
								</tr>
								<tr> 
									<th><span>운영 단위</span></th>
									<td>
										<!-- show area -->
										<input type="text" name="oprUntNm" class="text searchOprUnt" value="${commandMap.oprUntNm}" readonly />
										<a href="javascript:oprUntMultiPopup('searchForm', 'oprUntId');" class="icon search2 oprUntPopup"></a>
										<a href="javascript:multiTextPopup('oprUntId');" class="icon doc textPopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="oprUntId"  id="oprUntId"  value="${commandMap.oprUntId}" class="text" />
									</td>
									<th><span>부서</span></th>
									<td>
										<label><input type="text" name="deptNm" id="deptNm" class="text" value="${commandMap.deptNm}"/></label>
										<a href="#" class="icon search2 bzplcPopup"></a>
										<a href="javascript:multiTextPopup('deptId');" class="icon doc textPopup"></a>
										<input type="hidden" name="deptId" id="deptId" class="text" value="${commandMap.deptId}"/>
									</td>
									<th><span>회원</span></th>
									<td>
										<label><input type="text" name="memNm" id="memNm" class="text" value="${commandMap.memNm}"/></label>
										<a href="#" class="icon search2 bzplcPopup"></a>
										<a href="javascript:multiTextPopup('memId');" class="icon doc textPopup"></a>
										<input type="hidden" name="memId" id="memId" class="text" value="${commandMap.memId}"/>
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
							<select name="useYn" id="useYn">
								<option value="">선택</option>
								<option value="Y">사용</option>
								<option value="N">미사용</option>
							</select>
							<a href="#none" id="goMemState" class="button small"><span>일괄상태변경</span></a>
							<a href="#none" id="goMemCreate" class="button small"><span>회원생성</span></a>
							<a href="#none" id="goMemCopy" class="button small"><span>회원복사</span></a>
							<a href="#none" id="goMemFileAdd" class="button small"><span>일괄등록</span></a>
							<a href="javascript:;" id="goExcelDown" class="button small"><span>엑셀 다운로드</span></a>
							<select name="sort" id="sort">
								<option value="reg" ${commandMap.sort eq 'reg' ? 'selected="selected"' : ''}>등록일 순</option>
								<option value="upd" ${commandMap.sort eq 'upd' ? 'selected="selected"' : ''}>수정일 순</option>
							</select>
							<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>                        
						</div>
					</div><!-- // 목록 상단 버튼 -->

					<!-- table -->
					<div class="tableOut">
					<table cellspacing="0" class="table-col table-b" ><!-- table -->		
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
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
						</colgroup>					
						<thead>
							<tr>
								<th><a href="#none" id="chkAll" class="button small">선택</a><input type="hidden" name="chkAllV" id="chkAllV" value="N"/></th>
								<th>고객 유형</th>
								<th>상태</th>
								<th>회원ID</th>
								<th>회원명</th>
								<th>로그인ID</th>
								<th>사업장ID</th>
								<th>사업장명</th>
								<th>운영단위ID</th>
								<th>운영단위명</th>
								<th>부서ID</th>
								<th>부서명</th>								
								<th>결제권한</th>
								<th>발주권한</th>
								<th>입고권한</th>
								<th>세금계산서담당</th>
								<th>UCESSDI ID</th>
								<th>관리권한</th>
								<th>예산권한</th>
								<th>정산권한</th>
							</tr>
						</thead>
						<tbody>
							<c:choose>
								<c:when test="${searchYn eq null }">
									<tr><td colspan="20">조회조건을 선택 하신 후, 조회해 주세요.</td></tr>
								</c:when>
								<c:otherwise>
									<c:choose>
										<c:when test="${paging.totalRecordCount > 0 }">
											<c:forEach var="list" items="${list }" varStatus="cx">
												<tr>
													<td><input type="checkbox" class="checkbox" name="chkS" id="chkS${cx.index}" value="${list.MEM_ID }"/></td>
													<td>${list.CUST_TP_NM }</td>
													<td>${list.STATE_NM }</td>
													<td>
													<a href="javascript:goMemView(${cx.index});" id="goMemView${cx.index}" >${list.MEM_ID }</a>
													<input type="hidden" name="MEM_ID" id="MEM_ID${cx.index}" value="${list.MEM_ID }" />
													<c:choose>
														<c:when test="${list.USE_YN eq 'Q'}">
															<input type="hidden" name="TAR_MEM_EDIT" id="TAR_MEM_EDIT${cx.index}" value="W" />														
														</c:when>
														<c:when test="${list.USE_YN ne 'Q' && list.DRMC_YN eq 'Y'}">
															<input type="hidden" name="TAR_MEM_EDIT" id="TAR_MEM_EDIT${cx.index}" value="D" />														
														</c:when>
														<c:otherwise>
														<input type="hidden" name="TAR_MEM_EDIT" id="TAR_MEM_EDIT${cx.index}" value="E" />
														</c:otherwise>
													</c:choose>
													</td>
													<td>${list.MEM_NM }</td>
													<td>${list.LOGIN_ID }</td>
													<td>${list.BZPLC_ID }</td>
													<td>${list.BZPLC_NM }</td>
													<td>${list.OPR_UNT_ID }</td>
													<td>${list.OPR_UNT_NM }</td>
													<td>${list.DEPT_ID }</td>
													<td>${list.DEPT_NM }</td>													
													<td>${list.APRV_AUTH_USE_YN }</td>
													<td>${list.ORD_AUTH_USE_YN }</td>
													<td>${list.GI_AUTH_USE_NM }</td>
													<td>${list.TAXINV_AUTH_USE_YN }</td>
													<td>${list.UCESSDI_ID }</td>
													<td>${list.MNG_AUTH_USE_NM }</td>
													<td>${list.BGT_AUTH_USE_NM }</td>
													<td>${list.ADJ_AUTH_USE_NM }</td>
												</tr>
											</c:forEach>
										</c:when>
										<c:otherwise>
											<tr><td colspan="20">조회 결과가 없습니다.</td></tr>
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