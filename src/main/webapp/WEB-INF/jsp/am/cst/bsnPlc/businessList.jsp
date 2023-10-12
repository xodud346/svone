<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<script type="text/javascript">
//조회 버튼 클릭 시
function _search(){
	var $searchForm = $("#searchForm");
	$('#searchYn').val('Y');
	//$searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
	$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/bsnPlc/businessList.do", "target":"_self", "method":"post"}).submit();
}

//페이지 이동
function goPage(cPage){
	var $searchForm = $("#searchForm");
	$searchForm.find("input[name='pageSize']").val($("select[name='pagingSize']").val());
    $("#cPage").val(cPage);
    _search();
	/* var $frm = $("#frm");
	$frm.find("input[name='cPage']").val(cPage);
	$frm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/bsnPlc/businessList.do", "target":"_self", "method":"post"}).submit();
 */
};

//사업장 popup
function fnBzplcResult(frm){
	popup('', "500", "700", "yes","_bzplcPopup");
	$('#'+frm).attr({"action":"/am/dsp/popMng/bzplcPopupForm.do", "target":"popup_bzplcPopup", "method":"post"}).submit();
}

//산업군 popup
function fnIddtResult(frm){
	popup('', "500", "700", "yes","_IddtPopup");
	$('#'+frm).attr({"action":"/am/dsp/popMng/iddtPopupForm.do", "target":"popup_IddtPopup", "method":"post"}).submit();
}

//법인 popup
function fnBzplcCorpResult(frm){
	popup('', "500", "700", "yes","_bzplcCorpPopup");
	$('#'+frm).attr({"action":"/am/dsp/popMng/bzplcCorpPopupForm.do", "target":"popup_bzplcCorpPopup", "method":"post"}).submit();
}

//담당자 popup
function fnSalsChrpsnPop(frm){
	popup('', "500", "700", "yes","_servicePopup");
	$('#'+frm).attr({"action":"/am/com/popUp/salsChrpsnPopupForm.do", "target":"popup_servicePopup", "method":"post"}).submit();
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

//산업군
function fnResultIddt(params){
	// 초기화
	$("#searchForm").find("input[name=iddtId]").val("");
	$("#searchForm").find("input[name=iddtNm]").val("");

	var id = ''
	,	nm = '';

	$.each(params, function(idx, item){
		if(idx != 0){
			id += ',';
			nm += ',';
		}
		id += item.ID;
		nm += item.NM;
	});
	// 값 설정
	$("#searchForm").find("input[name=iddtId]").val(id);
	$("#searchForm").find("input[name=iddtNm]").val(nm);
	$("#iddtNm").val(nm);
}

//법인
function fnResultBzplcCorp(params){
	// 초기화
	$("#searchForm").find("input[name=corpId]").val("");
	$("#searchForm").find("input[name=corpNm]").val("");

	var id = ''
	,	nm = '';

	$.each(params, function(idx, item){
		if(idx != 0){
			id += ',';
			nm += ',';
		}
		id += item.ID;
		nm += item.NM;
	});
	// 값 설정
	$("#searchForm").find("input[name=corpId]").val(id);
	$("#searchForm").find("input[name=corpNm]").val(nm);
	$("#corpNm").val(nm);
}

//담당자
function fnSalsChrpsnCallback(eleId, inputArray){
	$("#searchForm").find("input[name=oprtrId]").val(inputArray.OPRTR_ID);
	$("#searchForm").find("input[name=oprtrNm]").val(inputArray.OPRTR_NM);
}

function fn_detail(val){
	if (typeof jQuery != 'undefined') {  
	    // jQuery is loaded => print the version
	    //alert(jQuery.fn.jquery);
	}
	$("#frm").find("input[name=BZPLC_ID]").val(val);
	$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/cst/bsnPlc/businessDetail.do", "target":"_self", "method":"post"}).submit();
}

function resetBtn(){
	$("#searchForm")[0].reset();
	$("#searchForm input:hidden").val('');
	$("#searchForm input:text").val('');
	$("#searchForm select").val('');
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
	$("#frm").attr({"action": "<c:out value="${serverDomain}" />/am/cst/bsnPlc/businessListExcel.do", "target":"_self", "method":"post"}).submit();
}
</script>
<style type="text/css">
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
						<span>사업장 조회</span>
					</h2>
					<h3 class="title">
						<span>조회</span>
					</h3>
					<form id="searchForm" name="searchForm">
						<input type="hidden" name="searchYn" id="searchYn" value="${searchYn }"/>
						<%-- <input type="hidden" name="pageSize" 	value="<c:out value="${map.pageSize }"/>" />
						<input type="hidden" name="cPage" 		value="<c:out value="${map.cPage}"/>"/>
 --%>                   
                        <input type="hidden" id="pageSize" name="pageSize" value="" />
                        <input type="hidden" id="cPage" name="cPage" value=""/>
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
										<label>
											<input type="hidden" id="bzplcId" name="bzplcId" value="${map.bzplcId}" />
											<input type="text" id="bzplcNm" name="bzplcNm" value="${map.bzplcNm }" style="width: 150px;" readonly="readonly"/>
											<a href="#none" onclick="fnBzplcResult('frm')" class="icon search2"></a>
										</label>
									</td>
									<th><span>산업군</span></th>
									<td>
										<label>
											
											<input type="hidden" id="iddtId" name="iddtId" value="${map.iddtId}" />
											<input type="text" id="iddtNm" name="iddtNm" value="${map.iddtNm }" style="width: 150px;" readonly="readonly"/>
											<a href="#none" onclick="fnIddtResult('frm')" class="icon search2"></a>
										</label>
									</td>
									<th><span>법인</span></th>
									<td>
										<label>
											<input type="hidden" id="corpId" name="corpId" value="${map.corpId}" />
											<input type="text" id="corpNm" name="corpNm" value="${map.corpNm }" style="width: 150px;" readonly="readonly"/>
											<a href="#none" onclick="fnBzplcCorpResult('frm')" class="icon search2"></a>
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
									<th><span>등록 상태</span></th>
									<td>
										<select class="select" name="regStatsList" id="regStatsList">
											<option value="">전체</option>
											<c:forEach var="regStatsList" items="${regStatsList }">
												<option value="${regStatsList.DTL_CD }" <c:if test="${map.regStatsList == regStatsList.DTL_CD }">selected</c:if>>${regStatsList.DTL_CD_NM }</option>
											</c:forEach>
										</select>
									</td>
									<th><span>사용 여부</span></th>
									<td>
										<select class="select" name="useYnSearch" id="useYnSearch">
											<option value=""  <c:if test="${useYnSearch == ''}">selected</c:if>>전체</option>
											<option value="Y" <c:if test="${useYnSearch == 'Y' || map.useYnSearch == 'Y'}">selected</c:if>>사용</option>
											<option value="N" <c:if test="${useYnSearch == 'N' }">selected</c:if>>미사용</option>
										</select>
									</td>
								</tr>
								<tr>
									<th><span>고객 등급</span></th>
									<td>
										<select class="select" name="mmbLvlList" id="mmbLvlList">
											<option value="">전체</option>
											<c:forEach var="mmbLvlList" items="${mmbLvlList }">
												<option value="${mmbLvlList.GRD_ID }" <c:if test="${map.mmbLvlList == mmbLvlList.GRD_ID }">selected</c:if>>${mmbLvlList.GRD_NM }</option>
											</c:forEach>
										</select>
									</td>
									<th><span>고객 관리 구분</span></th>
									<td>
										<select class="select" name="custMngSprList" id="custMngSprList">
											<option value="">전체</option>
											<c:forEach var="custMngSprList" items="${custMngSprList }">
												<option value="${custMngSprList.CUST_MNG_SPR_CD }" <c:if test="${map.custMngSprList == custMngSprList.CUST_MNG_SPR_CD }">selected</c:if>>${custMngSprList.CUST_MNG_SPR_NM }</option>
											</c:forEach>
										</select>
									</td>
									<th><span>영업 담당자</span></th>
									<td>
										<label>
											<input type="hidden" id="oprtrId" name="oprtrId" value="${map.oprtrId}" />
											<input type="text" id="oprtrNm" name="oprtrNm" value="${map.oprtrNm }" style="width: 150px;" readonly="readonly"/>
											<a href="#none" onclick="fnSalsChrpsnPop('frm')" class="icon search2"></a>
										</label>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					<div class="grid section-button-search">
						<a href="#none" onclick="resetBtn();" class="button small"><span>초기화</span></a>
						<a href="#none" onclick="_search()" class="button small primary"><span>조회</span></a>
					</div>
					<h3 class="title">
						<span>목록</span>
					</h3>
					<form id="frm" name="frm">
						<input type="hidden" name="BZPLC_ID">
						<div class="grid section-button-list">
							<div class="col-1-2 text-left">
								<span class="pages">
									(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
								</span>
							</div>
							<div class="col-1-2 text-right">
								<a href="#none" onclick="fn_goExcelDown()" class="button small"><span>엑셀 다운로드</span></a>
								<ui:pageSizeBox value="${paging.pageSize }" name="pagingSize" type="" jsFunction="goPage"/>
							</div>
						</div>
					</form>
					<!-- table -->
					<table cellspacing="0" class="table-col table-b">
						<colgroup>
							<col style="width: auto;"/>
							<col style="width: auto;"/>
							<col style="width: auto;"/>
							<col style="width: auto;"/>
							<col style="width: auto;"/>
							<col style="width: auto;"/>
							<col style="width: auto;"/>
							<col style="width: auto;"/>
							<col style="width: auto;"/>
							<col style="width: auto;"/>
							<col style="width: auto;"/>
							<col style="width: auto;"/>
						</colgroup>
						<thead>
							<tr>
								<th>고객 구분</th>
								<th>사용 여부</th>
								<th>법인명</th>
								<th>산업군명</th>
								<th>사업장 ID</th>
								<th>사업장 명</th>
								<th>고객 등급</th>
								<th>고객 관리 구분</th>
								<th>계약 관리명</th>
								<th>영업 담당자 ID</th>
								<th>영업 담당자 명</th>
								<th>등록 상태</th>
							</tr>
						</thead>
						<tbody>
							<c:choose>
								<c:when test="${paging.totalRecordCount > 0}">
								<c:set var="listNum" value="${paging.listNum}" />
									<c:forEach var="list" items="${list }" varStatus="i" >
										<tr>
											<td><c:out value="${list.CUST_SPR_NM }"/></td>
											<td><c:out value="${list.USE_YN_NM }"/></td>
											<td style="text-align: left;"><c:out value="${list.CORP_NM }"/></td>
											<td><c:out value="${list.IDDT_NM }"/></td>
											<td><a href="#none" onclick="fn_detail('${list.BZPLC_ID }')" class="list-title"><c:out value="${list.BZPLC_ID }"/></a></td>
											<td style="text-align: left;"><c:out value="${list.BZPLC_NM }"/></td>
											<td><c:out value="${list.GRD_NM }"/></td>
											<td><c:out value="${list.CUST_MNG_SPR_NM }"/></td>
											<td style="text-align: left;"><c:out value="${list.CONT_MNG_NM }"/></td>
											<td><c:out value="${list.CHR_MD_ID }"/></td>
											<td><c:out value="${list.CHR_MD_NM }"/></td>
											<td><c:out value="${list.REG_STATS_NM }"/></td>
										</tr>
										<c:set var="listNum" value="${listNum-1}" />
									</c:forEach>
								</c:when>
								<c:otherwise>
									<tr>
										<td colspan="12">조회 결과가 없습니다.</td>
									</tr>
								</c:otherwise>
							</c:choose>
						</tbody>
					</table>
					<!-- // table -->
				 	<div class="section-pagination">
						<h4 class="sr-only">목록 페이징</h4>
						<div class="wrap">
							<!-- 개발 시 wrap 이하 모듈 시작 -->
							<ui:paging paging="${paging}" jsFunction="goPage" />
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