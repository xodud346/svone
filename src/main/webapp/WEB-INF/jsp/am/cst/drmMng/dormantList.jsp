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

	<%-- 조회버튼 클릭 시 --%>
	$('#_search').on('click',function(){
		var $searchForm = $("#searchForm"); 
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/drmMng/dormantList.do", "target":"_self", "method":"post"}).submit();
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
		$searchForm.attr({"action": "<c:out value="${serverDomain}" />/am/cst/drmMng/dormantExcelList.do", "target":"_self", "method":"post"}).submit();
	});
	
});


//***********************************************************************************************************************//
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
//**********************************************************************************************************************//
	 // 페이지 이동
    goPage = function (cPage) 
    {
		 
		 console.log('cPage '+cPage);
        var $frm = $("#frm");
        $frm.find("input[name='cPage']").val(cPage);
        $frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cst/drmMng/dormantList.do", "target":"_self", "method":"post"}).submit();
    };
	
	 
	 
	function goMemView(idx) 
	{	var $frm = $("#frm");
		$("#MEM_EDIT").val("D");
		$("#SEL_MEM_ID").val($("#MEM_ID"+idx).val());
		$frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cst/mmbMng/memberEdit.do", "target":"_self", "method":"post"}).submit();
	};
	

</script>
</head>
<body>
	<!-- body class, 중요 -->

	<div id="header">
		<%@ include file="/WEB-INF/jsp/am/include/top.jsp"%>
	</div>
	<div id="container">
		<!-- container -->
		<div id="aside" class="aside left">
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp"%>
		</div>
		<div id="wrapper">
			<div id="breadcrumb"></div>
			<!-- contents -->
			<div id="contents">
				<div class="container">
					
					<h2 class="title">
						<span>휴면회원관리</span>
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
							</colgroup>
							<tbody>
								<tr>
									<th><span>회원</span></th>
									<td>
										<label><input type="text" name="memNm" id="memNm" class="text" value="${commandMap.memNm}"/></label>
										<a href="#" class="icon search2 bzplcPopup"></a>
										<a href="javascript:multiTextPopup('memId');" class="icon doc textPopup"></a>
										<input type="hidden" name="memId" id="memId" class="text" value="${commandMap.memId}"/>
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
								&nbsp;
								<a href="javascript:;" id="goExcelDown" class="button small"><span>엑셀 다운로드</span></a>
								&nbsp;
								<select class="" name="sort" id="sort">
									<option value="dt" ${commandMap.sort eq 'dt' ? 'selected="selected"' : ''}>휴면전환일</option>
									<option value="nm" ${commandMap.sort eq 'nm' ? 'selected="selected"' : ''}>회원명</option>
								</select>
								<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>                        
							</div>
						</div><!-- // 목록 상단 버튼 -->
					
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
							<col style="width: auto;" />
							<col style="width: auto;" />
						</colgroup>
						<thead>
							<tr>
								<th>고객 유형</th>
								<th>회원ID</th>
								<th>회원명</th>
								<th>로그인ID</th>
								<th>사업장ID</th>
								<th>사업장명</th>
								<th>운영단위ID</th>
								<th>운영단위명</th>
								<th>부서ID</th>
								<th>부서명</th>
								<th>휴면 전환일</th>
							</tr>
						</thead>
						<tbody>
							<c:choose>
								<c:when test="${searchYn eq null }">
									<tr><td colspan="11">조회조건을 선택 하신 후, 조회해 주세요.</td></tr>
								</c:when>
								<c:otherwise>
									<c:choose>
										<c:when test="${paging.totalRecordCount > 0 }">
											<c:forEach var="list" items="${list }" varStatus="cx">
												<tr>
													<td>${list.CUST_TP_NM }</td>
													<td><a href="javascript:goMemView(${cx.index});" id="goMemView${cx.index}" >${list.MEM_ID }</a>
													<input type="hidden" name="MEM_ID" id="MEM_ID${cx.index}" value="${list.MEM_ID }" /></td>
													<td>${list.MEM_NM }</td>
													<td>${list.LOGIN_ID }</td>
													<td>${list.BZPLC_ID }</td>
													<td>${list.BZPLC_NM }</td>
													<td>${list.OPR_UNT_ID }</td>
													<td>${list.OPR_UNT_NM }</td>
													<td>${list.DEPT_ID }</td>
													<td>${list.DEPT_NM }</td>													
													<td>${list.DORMANT_DATE }</td>
												</tr>
											</c:forEach>
										</c:when>
										<c:otherwise>
											<tr><td colspan="11">조회 결과가 없습니다.</td></tr>
										</c:otherwise>
									</c:choose>
								</c:otherwise>
							</c:choose>	
						</tbody>
					</table>
					</div>
					</form>
					
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
		<div id="quickmenu" class="aside right">
			<%@ include file="/WEB-INF/jsp/am/include/quick.jsp"%>
		</div>
	</div>
	<!-- // container -->
	<div id="footer">
		<%@ include file="/WEB-INF/jsp/am/include/footer.jsp"%>
	</div>

	<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
</body>
</html>