<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<script type="text/javascript">
function fn_search(){
	var $searchForm = $("#searchForm");
	$('#searchYn').val('Y');
	$searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
	$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/oprUnt/operatingList.do", "target":"_self", "method":"post"}).submit();
}

//사업장 popup
function fnBzplcResult(frm){
	popup('', "500", "700", "yes","_bzplcPopup");
	$('#frm').attr({"action":"/am/dsp/popMng/bzplcPopupForm.do", "target":"popup_bzplcPopup", "method":"post"}).submit();
}

//운영단위
function fnOprUnt(frm){
	popup('', "500", "700", "yes","_oprUntPopupForm");
	$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/com/popUp/operate2PopupForm.do", "target":"popup_oprUntPopupForm", "method":"post"}).submit();
}

//영업팀 단건
function fnOneSalsTeam(frm){
	popup('', "500", "700", "yes","_salsTeamPopup");
	$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/dsp/popMng/salsTeamPopupForm.do", "target":"popup_salsTeamPopup", "method":"post"}).submit();
}

//서비스팀 단건
function fnSvcTeamPopup(frm){
	popup('', "500", "700", "yes","_svcTeamPopup");
	$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/dsp/popMng/svcTeamPopupForm.do", "target":"popup_svcTeamPopup", "method":"post"}).submit();
}

//서비스팀 단건
function fnOprTeamPopup(frm){
	popup('', "500", "700", "yes","_oprTeamPopup");
	$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/dsp/popMng/oprTeamPopupForm.do", "target":"popup_oprTeamPopup", "method":"post"}).submit();
}

//사업장
function fnResultBzplc(params){
	// 초기화
	$("#searchForm").find("input[name=bzplcId]").val("");
	$("#searchForm").find("input[name=bzplcNm]").val("");

	var id = ''
	,	nm = ''
	,	yn = '';

	$.each(params, function(idx, item){
		if(idx != 0){
			id += ',';
			nm += ',';
		}
		id += item.ID;
		nm += item.NM;
	});
	// 값 설정
	$("#searchForm").find("input[name=bzplcId]").val(id);
	//$("#searchForm").find("input[name=bzplcNm]").val(nm);
	$("#bzplcNm").val(nm);
}

//운영단위 대상설정 팝업 콜백함수
fnOprUntMultiCallback = function(eleId, params){
	// 초기화
	$("#oprUntId").val("");
	$("#oprUntNm").val("");

	var id = ''
	,	nm = '';

	$.each(params, function(idx, data){
		if(idx != 0){
			id += ',';
			nm += ',';
		}
		id += data.id;
		nm += data.nm;
	});
	// 값 설정
	$("#oprUntId").val(id);
	$("#oprUntNm").val(nm);
}

//영업팀 콜백
function fnSalTeamResultCallback(data){
	if(data){
		$("#salsTeamCd").val(data.SALS_TEAM_CD);
		$("#salsTeamNm").val(data.SALS_TEAM_NM);
	}
}

//서비스팀 콜백
function fnSvcTeamResultCallback(data){
	if(data){
		$("#orgCd").val(data.ORG_CD);
		$("#orgNm").val(data.ORG_NM);
	}
}

//운영팀 콜백
function fnOprTeamResultCallback(data){
	if(data){
		$("#opOrgCd").val(data.ORG_CD);
		$("#opOrgNm").val(data.ORG_NM);
	}
}

function resetBtn(){
	$("#searchForm")[0].reset();
	$("#searchForm input:hidden").val('');
	$("#searchForm select").val('');
}

function fn_detail(val){
	if (typeof jQuery != 'undefined') {
	    // jQuery is loaded => print the version
	    //alert(jQuery.fn.jquery);
	}
	$("#frm").find("input[name=OPR_UNT_ID]").val(val);
	$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/cst/oprUnt/operatingDetail.do", "target":"_self", "method":"post"}).submit();
}

function fn_goExcelDown(){
	var totalRecordCount	= $("#total").val();
	if(totalRecordCount > 10000){
		alert("엑셀 다운로드는 10000건 이하만 가능합니다.");
		return;
	}else if(totalRecordCount == 0){
		alert("저장할 내역이 없습니다.");
		return;
	}
	$("#frm").attr({"action": "<c:out value="${serverDomain}" />/am/cst/oprUnt/operatingListExcel.do", "target":"_self", "method":"post"}).submit();
}

</script>
<style type="text/css">
/* 테이블 스크롤*/
#tableDiv {
	width: 100%;
	overflow: auto;
}

#tableDiv .listTable {
	white-space: nowrap;
	border-collapse: collapse;
}
</style>
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
						<span>운영단위조회</span>
					</h2>
					<h3 class="title">
						<span>조회</span>
					</h3>
					<form id="searchForm" name="searchForm">
						<input type="hidden" name="searchYn" id="searchYn" value="${searchYn }"/>
						<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
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
									<th><span>운영단위</span></th>
									<td>
										<label>
											<input type="hidden" id="oprUntId" name="oprUntId" value="${map.oprUntId}" />
											<input type="text" id="oprUntNm" name="oprUntNm" value="${map.oprUntNm }" style="width: 150px;" readonly="readonly"/>
											<a href="#none" onclick="fnOprUnt('frm')" class="icon search2"></a>
										</label>
									</td>
									<th><span>사업장</span></th>
									<td>
										<label>
											<input type="hidden" id="bzplcId" name="bzplcId" value="${map.bzplcId}" />
											<input type="text" id="bzplcNm" name="bzplcNm" value="${map.bzplcNm }" style="width: 150px;" readonly="readonly"/>
											<a href="#none" onclick="fnBzplcResult('frm')" class="icon search2"></a>
										</label>
									</td>
									<th><span>등록 상태</span></th>
									<td>
										<select class="select" name="regStatsList" id="regStatsList">
											<option value="">전체</option>
											<c:forEach var="regStatsList" items="${regStatsList }">
												<option value="${regStatsList.DTL_CD }" <c:if test="${map.regStatsList == regStatsList.DTL_CD }">selected</c:if>>${regStatsList.DTL_CD_NM }</option>
											</c:forEach>
										</select>
									</td>
								</tr>
								<tr>
									<th><span>영업팀</span></th>
									<td>
										<label>
											<input type="hidden" id="salsTeamCd" name="salsTeamCd" value="${map.salsTeamCd}" />
											<input type="text" id="salsTeamNm" name="salsTeamNm" value="${map.salsTeamNm }" style="width: 150px;" readonly="readonly"/>
											<a href="#none" onclick="fnOneSalsTeam('frm')" class="icon search2"></a>
										</label>
									</td>
									<th><span>서비스팀</span></th>
									<td>
										<label>
											<input type="hidden" id="orgCd" name="orgCd" value="${map.orgCd}" />
											<input type="text" id="orgNm" name="orgNm" value="${map.orgNm }" style="width: 150px;" readonly="readonly"/>
											<a href="#none" onclick="fnSvcTeamPopup('frm')" class="icon search2"></a>
										</label>
									</td>
									<th><span>운영팀</span></th>
									<td>
										<label>
											<input type="hidden" id="opOrgCd" name="opOrgCd" value="${map.opOrgCd}" />
											<input type="text" id="opOrgNm" name="opOrgNm" value="${map.opOrgNm }" style="width: 150px;" readonly="readonly"/>
											<a href="#none" onclick="fnOprTeamPopup('frm')" class="icon search2"></a>
										</label>
									</td>
								</tr>
								<tr>
									<th><span>고객 구분</span></th>
									<td>
										<select class="select" name="mmbSprList" id="mmbSprList">
											<option value="">전체</option>
											<c:forEach var="mmbSprList" items="${mmbSprList }">
												<option value="${mmbSprList.MMB_SPR_CD }" <c:if test="${map.mmbSprList == mmbSprList.MMB_SPR_CD }">selected</c:if>>${mmbSprList.MMB_SPR_NM }</option>
											</c:forEach>
										</select>
									</td>
									<th><span>자재 구분</span></th>
									<td>
										<select class="select" name="mroYnList" id="mroYnList">
											<option value="">전체</option>
											<c:forEach var="mroYnList" items="${mroYnList }">
												<option value="${mroYnList.DTL_CD }" <c:if test="${map.mroYnList == mroYnList.DTL_CD }">selected</c:if>>${mroYnList.DTL_CD_NM }</option>
											</c:forEach>
										</select>
									</td>
									<th><span>사용여부</span></th>
									<td>
										<select class="select" name="useYnSearch" id="useYnSearch">
											<option value=""  <c:if test="${useYnSearch == ''}">selected</c:if>>전체</option>
											<option value="Y" <c:if test="${useYnSearch == 'Y' || map.useYnSearch == 'Y'}">selected</c:if>>사용</option>
											<option value="N" <c:if test="${useYnSearch == 'N' }">selected</c:if>>미사용</option>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					<div class="grid section-button-search">
						<a href="#none" onclick="resetBtn()" class="button small"><span>초기화</span></a>
						<a href="#none" onclick="fn_search();" class="button small primary"><span>조회</span></a>
					</div>
					<h3 class="title">
						<span>목록</span>
					</h3>
					<form id="frm" name="frm">
						<input type="hidden" name="OPR_UNT_ID">
						<div class="grid section-button-list">
							<div class="col-1-2 text-left">
								<span class="pages">
									(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
								</span>
							</div>
							<div class="col-1-2 text-right">
								<a href="#none" onclick="fn_goExcelDown()" class="button small"><span>엑셀 다운로드</span></a>
								<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>
							</div>
						</div>
					</form>
					<!-- table -->
					<div id="tableDiv">
					<table cellspacing="0" class="table-col table-b listTable" >
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
								<th>고객 구분</th>
								<th>자재 구분</th>
								<th>사용 여부</th>
								<th>사업장 ID</th>
								<th>사업장 명</th>
								<th>운영단위 ID</th>
								<th>운영단위 명</th>
								<th>영업담당 ID</th>
								<th>영업담당 명</th>
								<th>영업팀 ID</th>
								<th>영업팀 명</th>
								<th>서비스팀 ID</th>
								<th>서비스팀 명</th>
								<th>운영팀 ID</th>
								<th>운영팀 명</th>
								<th>영업담당자 ID</th>
								<th>영업담당자 명</th>
								<th>CS담당 ID</th>
								<th>CS담당 명</th>
								<th>운영담당 ID</th>
								<th>운영담당 명</th>
							</tr>
						</thead>
						<tbody>
							<c:choose>
								<c:when test="${paging.totalRecordCount > 0}">
								<c:set var="listNum" value="${paging.listNum}" />
									<c:forEach var="list" items="${list }" varStatus="i" >
										<tr>
											<td><c:out value="${list.CUST_SPR_NM }"/></td>
											<td><c:out value="${list.MRO_YN_NM }"/></td>
											<td><c:out value="${list.USE_YN_NM }"/></td>
											<td><c:out value="${list.BZPLC_ID }"/></td>
											<td><c:out value="${list.BZPLC_NM }"/></td>
											<td><a href="#none" onclick="fn_detail('${list.OPR_UNT_ID }')" class="list-title"><c:out value="${list.OPR_UNT_ID }"/></a></td>
											<td style="text-align: left;"><c:out value="${list.OPR_UNT_NM }"/></td>
											<td><c:out value="${list.SALS_CHR_CD }"/></td>
											<td><c:out value="${list.SALS_CHR_NM }"/></td>
											<td><c:out value="${list.SALS_TEAM_CD }"/></td>
											<td><c:out value="${list.SALS_TEAM_NM }"/></td>
											<td><c:out value="${list.SVC_TEAM_CD }"/></td>
											<td><c:out value="${list.SVC_TEAM_NM }"/></td>
											<td><c:out value="${list.OP_ORG_CD }"/></td>
											<td><c:out value="${list.OP_ORG_NM }"/></td>
											<td><c:out value="${list.CHR_MD_ID }"/></td>
											<td><c:out value="${list.CHR_MD_NM }"/></td>
											<td><c:out value="${list.CHR_CS_ID }"/></td>
											<td><c:out value="${list.CHR_CS_NM }"/></td>
											<td><c:out value="${list.CHR_OP_ID }"/></td>
											<td><c:out value="${list.CHR_OP_NM }"/></td>
										</tr>
										<c:set var="listNum" value="${listNum-1}" />
									</c:forEach>
								</c:when>
								<c:otherwise>
									<tr>
										<td colspan="21">조회 결과가 없습니다.</td>
									</tr>
								</c:otherwise>
							</c:choose>
						</tbody>
					</table>
					</div>
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