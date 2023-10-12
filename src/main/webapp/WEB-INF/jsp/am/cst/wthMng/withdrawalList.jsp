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
	
	fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -7, 0, 0, 0, '-');
	
	//***********조회버튼 클릭 시 
	$('#_search').on('click',function(){
		var $searchForm = $("#searchForm"); 
		
		var startDate = new Date($("#searchStartDate").val());
		var endDate = new Date($("#searchEndDate").val());

		if(startDate > endDate){
			alert("종료일이 시작일보다 작습니다.");
			return false;
		}
		
		$('#searchYn').val('Y');
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/wthMng/withdrawalList.do", "target":"_self", "method":"post"}).submit();
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
	 

	
});


	 //***********페이지 이동
	function goPage(cPage) 
	{
		var $searchForm = $("#searchForm");
		$searchForm.find("input[name='cPage']").val(cPage);
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/cst/wthMng/withdrawalList.do", "target":"_self", "method":"post"}).submit();
	};

	function goMemView(idx) 
	{	var $frm = $("#frm");
		$("#MEM_EDIT").val("W");
		$("#SEL_MEM_ID").val($("#MEM_ID"+idx).val());
		$frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cst/mmbMng/memberEdit.do", "target":"_self", "method":"post"}).submit();
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
						<span>탈퇴회원관리</span>
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
									<th><span>운영 단위</span></th>
									<td>
										<!-- show area -->
										<input type="text" name="oprUntNm" class="text searchOprUnt" value="${commandMap.oprUntNm}" readonly />
										<a href="javascript:oprUntMultiPopup('searchForm', 'oprUntId');" class="icon search2 oprUntPopup"></a>
										<a href="javascript:multiTextPopup('oprUntId');" class="icon doc textPopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="oprUntId"  id="oprUntId"  value="${commandMap.oprUntId}" class="searchOprUnt" />
									</td>
									<th><span>부서</span></th>
									<td>
										<label><input type="text" name="deptNm" id="deptNm" class="text" value="${commandMap.deptNm}"/></label>
										<a href="#" class="icon search2 bzplcPopup"></a>
										<a href="javascript:multiTextPopup('deptId');" class="icon doc textPopup"></a>
										<input type="hidden" name="deptId" id="deptId" class="text" value="${commandMap.deptId}"/>
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
								<th><span>기간</span></th>
								<td>
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchStartDate" name="searchStartDate" value="${commandMap.searchStartDate}" readonly="readonly" data-target-end="#searchEndDate"/>
									~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchEndDate" name="searchEndDate" value="${commandMap.searchEndDate}" readonly="readonly" data-target-start="#searchStartDate"/>
								</td>
									<th><span>고객 유형</span></th>  
									<td>  
										<select class="select" name="custTpCd" id="custTpCd">
											<option value="">전체</option>
											<option value="20" ${commandMap.custTpCd eq '20' ? 'selected="selected"' : ''}>계약</option>
											<option value="30" ${commandMap.custTpCd eq '30' ? 'selected="selected"' : ''}>일반</option>
										</select>
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
								<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>                        
							</div>
						</div><!-- // 목록 상단 버튼 -->

					<!-- table -->
					<div class="tableOut">
					<table cellspacing="0" class="table-col table-b">
						<colgroup>
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
								<th>고객 유형</th>
								<th>회원ID</th>
								<th>사업장ID</th>
								<th>사업장명</th>
								<th>운영단위ID</th>
								<th>운영단위명</th>
								<th>부서ID</th>
								<th>부서명</th>
								<th>탈퇴일</th>
							</tr>
						</thead>
						<tbody>
						<c:choose>
								<c:when test="${searchYn eq null }">
									<tr><td colspan="9">조회조건을 선택 하신 후, 조회해 주세요.</td></tr>
								</c:when>
								<c:otherwise>
									<c:choose>
										<c:when test="${paging.totalRecordCount > 0 }">
											<c:forEach var="list" items="${list }" varStatus="cx">
												<tr>
													<td>${list.CUST_TP_NM }</td>
													<td><a href="javascript:goMemView(${cx.index});" id="goMemView${cx.index}" >${list.MEM_ID }</a>
													<input type="hidden" name="MEM_ID" id="MEM_ID${cx.index}" value="${list.MEM_ID }" /></td>
													<td>${list.BZPLC_ID }</td>
													<td>${list.BZPLC_NM }</td>
													<td>${list.OPR_UNT_ID }</td>
													<td>${list.OPR_UNT_NM }</td>
													<td>${list.DEPT_ID }</td>
													<td>${list.DEPT_NM }</td>													
													<td>${list.WITHDRAW_DATE }</td>
												</tr>
											</c:forEach>
										</c:when>
										<c:otherwise>
											<tr><td colspan="9">조회 결과가 없습니다.</td></tr>
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