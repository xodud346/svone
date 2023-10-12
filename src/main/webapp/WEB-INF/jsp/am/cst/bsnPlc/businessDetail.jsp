<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css"></style>
<script type="text/javascript">
function fn_cancel(){
	if(confirm("취소하시겠습니까?")){
		$('#searchForm').attr({"action":"<c:out value="${serverDomain}" />/am/cst/bsnPlc/businessList.do", "target":"_self", "method":"post"}).submit();
	}
}

function fn_save(){
	if(confirm("저장 하시겠습니까?")){
		$.ajax ({
			async : false,
			type : "POST",
			url : "<c:out value="${serverDomain}" />/am/cst/bsnPlc/businessDetailModify.do", 
			data : {"iddtId"		: $("#iddtList").val(),
					"custMngSprCd"	: $("#custMngSprList").val(),
					"grdId"			: $("#mmbLvlList").val(),
					"bzplcId"		: $("#bzplcId").val()
				},
			success : function (data) {
				alert(data.message);
				location.reload();
			},
			error : function (data) {
				alert(data.message);
			}
		});
	}
}

function fn_chgMmbLvl(){
	$("#selectedAplDc").text($("#mmbLvlList").find('option:selected').attr('id')+"%");
}
</script>
</head>
<body><!-- body class, 중요 -->
	<div id="header"><!-- header -->
		<%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
	</div><!-- // header -->
	<!-- container -->
	<div id="container">
		<!-- aside -->
		<div id="aside" class="aside left">
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
		</div>
		<!-- // aside -->
		<!-- wrapper -->
		<div id="wrapper">
			<!-- breadcrumb -->
			<div id="breadcrumb"></div>
			<!-- contents -->
			<div id="contents">
				<!-- container -->
				<div class="container">
					<h2 class="title"><span>사업장 상세</span></h2>
					<form id="searchForm"></form>
					<form id="frm" name="frm">
						<input type="hidden" name="bzplcId" id="bzplcId" value="${data.BZPLC_ID }" />
						<h3 class="title"><span>기본정보</span></h3>
						<!-- table -->
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 20%;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>등록 상태</span></th>
									<td><c:out value="${data.REG_STATS_NM }" /></td>
									<th><span>사용 여부</span></th>
									<td><c:out value="${data.USE_YN_NM }" /></td>
									<th><span>고객 구분</span></th>
									<td><c:out value="${data.CUST_SPR_NM }" /></td>
								</tr>
								<tr>
									<th><span>그룹</span></th>
									<td><c:out value="${data.GRP_ID }" /> | <c:out value="${data.GRP_NM }" /></td>
									<th><span>법인</span></th>
									<td><c:out value="${data.CORP_ID }" /> | <c:out value="${data.CORP_NM }" /></td>
									<th><span>법인 번호</span></th>
									<td><c:out value="${data.CORP_NO }" /></td>
								</tr>
								<tr>
									<th><span>사업장</span></th>
									<td><c:out value="${data.BZPLC_ID }" /> | <c:out value="${data.BZPLC_NM }" /></td>
									<th><span>사업자등록번호</span></th>
									<td><c:out value="${data.BZMN_REG_NO }" /></td>
									<th><span>대표자명</span></th>
									<td><c:out value="${data.RDRTR_NM }" /></td>
								</tr>
								<tr>
									<th><span>업종</span></th>
									<td><c:out value="${data.BZCAT_NM }" /></td>
									<th><span>업태</span></th>
									<td><c:out value="${data.BZTP_NM }" /></td>
									<th><span>계약관리명</span></th>
									<td><c:out value="${data.CONT_MNG_NM }" /></td>
								</tr>
								<tr>
									<th><span>계약 시작일</span></th>
									<td><c:out value="${data.CONT_STR_DT }" /></td>
									<th><span>계약 종료일</span></th>
									<td><c:out value="${data.IF_RCV_DTM }" /></td>
									<th><span>영업 담당자</span></th>
									<td><c:out value="${data.CHR_MD_NM }" /></td>
								</tr>
							</tbody>
						</table>
						<!-- // table -->
						<h3 class="title"><span>주소 정보</span></h3>
						<!-- table -->
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 20%;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>우편번호</span></th>
									<td><c:out value="${data.ZPCD }" /></td>
									<th><span>주소</span></th>
									<td><c:out value="${data.REPR_ADDR }" /></td>
									<th><span>상세 주소</span></th>
									<td><c:out value="${data.DTL_ADDR }" /></td>
								</tr>
							</tbody>
						</table>
						<!-- // table -->
						<h3 class="title"><span>회계</span></h3>
						<!-- table -->
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 20%;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>수금 조건</span></th>
									<td colspan="3">
									<%-- <c:out value="${data.BILCLT_COND_CD }" /> | <c:out value="${data.BILCLT_COND_NM }" /> --%>
									<c:forEach var="totBilcltCond" items="${totBilcltCond}">
                                        ${totBilcltCond}</br>
									</c:forEach>
									</td>
									<th><span>결재 수단</span></th>
									<td>
									<%-- <c:out value="${data.STL_MEAN_NM }" /> --%>
									<c:forEach var="stlMean" items="${stlMean}">
                                        ${stlMean}</br>
									</c:forEach>
									</td>
								</tr>
							</tbody>
						</table>
						<!-- // table -->
						<h3 class="title"><span>제어 권한</span></h3>
						<!-- table -->
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 20%;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>주문 대행</span></th>
									<td><c:out value="${data.ODR_AGNC_USE_YN_NM }" /></td>
									<th><span>그룹 결재</span></th>
									<td><c:out value="${data.GRP_APRV_USE_YN_NM }" /></td>
									<th><span>법인 결재</span></th>
									<td><c:out value="${data.CORP_APRV_USE_YN_NM }" /></td>
								</tr>
								<tr>
									<th><span>그룹 발주</span></th>
									<td><c:out value="${data.GRP_ORD_USE_YN_NM }" /></td>
									<th><span>법인 발주</span></th>
									<td colspan="3"><c:out value="${data.CORP_ORD_USE_YN_NM }" /></td>
								</tr>
							</tbody>
						</table>
						<!-- // table -->
						<h3 class="title"><span>추가 정보</span></h3>
						<!-- table -->
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 20%;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>산업군</span></th>
									<td>
										<select class="select" name="iddtList" id="iddtList">
											<option value="">선택</option>
											<c:forEach var="iddtList" items="${iddtList }">
												<option value="${iddtList.IDDT_ID }" <c:if test="${data.IDDT_ID == iddtList.IDDT_ID }">selected</c:if>>${iddtList.IDDT_NM }</option>
											</c:forEach>
										</select>
									</td>
									<th><span>고객 관리 구분</span></th>
									<td colspan="3">
										<select class="select" name="custMngSprList" id="custMngSprList">
											<option value="">전체</option>
											<c:forEach var="custMngSprList" items="${custMngSprList }">
												<option value="${custMngSprList.CUST_MNG_SPR_CD }" <c:if test="${data.CUST_MNG_SPR_CD == custMngSprList.CUST_MNG_SPR_CD }">selected</c:if>>${custMngSprList.CUST_MNG_SPR_NM }</option>
											</c:forEach>
										</select>
									</td>
								</tr>
								<tr>
									<th><span>고객 등급</span></th>
									<td>
										<select class="select" name="mmbLvlList" id="mmbLvlList" onchange="fn_chgMmbLvl()">
											<option value="">선택</option>
											<c:forEach var="mmbLvlList" items="${mmbLvlList }">
												<option value="${mmbLvlList.GRD_ID }" id="${mmbLvlList.APL_DC_ESSENCE }.${mmbLvlList.APL_DC_DECIMAL }" <c:if test="${data.GRD_ID == mmbLvlList.GRD_ID }">selected</c:if>>${mmbLvlList.GRD_NM }</option>
											</c:forEach>
										</select>
									</td>
									<th><span>판매가 할인율</span></th>
									<td colspan="3">
										<c:choose>
											<c:when test="${data.APL_DC_ESSENCE eq null || data.APL_DC_DECIMAL eq null }"><span id="selectedAplDc"></span></c:when>
											<c:when test="${data.APL_DC_ESSENCE ne null || data.APL_DC_DECIMAL ne null }">
												<c:out value="${data.APL_DC_ESSENCE }" />.<c:out value="${data.APL_DC_DECIMAL }" />%
											</c:when>
										</c:choose>
									</td>
								</tr>
							</tbody>
						</table>
						<!-- // table -->
						<h3 class="title"><span>첨부 파일</span></h3>
						<!-- table -->
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 20%;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>사업자등록증</span></th>
									<td></td>
									<th><span>고객사 CI</span></th>
									<td colspan="3"></td>
								</tr>
							</tbody>
						</table>
						<!-- // table -->
					</form>
					<!-- section-button -->
					<div class="section-button">
						<div class="wrap text-center">
							<a href="#none" onclick="fn_cancel()" class="button large"><span>취소</span></a>
							<a href="#none" onclick="fn_save()" class="button large primary"><span>저장</span></a>
						</div>
					</div>
					<!-- // section-button -->
				</div>
				<!-- // container -->
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