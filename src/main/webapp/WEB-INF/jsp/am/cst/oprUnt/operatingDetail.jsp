<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css"></style>
<script type="text/javascript">
	//상세관리
	function fn_codeDetail(frm){
		popup('', "860", "510", "yes","_refCodePopup");
		$('#frm').attr({"action":"/am/dsp/popMng/refCodePopupForm.do", "target":"popup_refCodePopup", "method":"post"}).submit();
	}
	
	//제어권한설정
	function fn_ctlAuthPop(frm,id){
		$("#frm").find("input[name=OPR_UNT_ID]").val(id);
		popup('', "999", "940", "yes","_ctlAuthPop");
		$('#frm').attr({"action":"/am/dsp/popMng/ctlAuthPopupForm.do", "target":"popup_ctlAuthPop", "method":"post"}).submit();
	}
	
	function fn_cancel(){
		if(confirm("취소하시겠습니까?")){
			$('#searchForm').attr({"action":"<c:out value="${serverDomain}" />/am/cst/oprUnt/operatingList.do", "target":"_self", "method":"post"}).submit();
		}
	}
	
</script>
<style type="text/css">
.spanRight{float: right;font-size: 10px;}
</style>
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
					<h2 class="title"><span>운영 단위 상세</span></h2>
					<form id="searchForm"></form>
					<form id="frm" name="frm">
						<input type="hidden" name="OPR_UNT_ID" />
						<h3 class="title"><span>기본정보</span></h3>
						<c:if test="${data.CUST_SPR_CD == '10' }"><!-- 일반일 시 비노출 -->
							<div class="text-right">
								<a href="#none" onclick="fn_ctlAuthPop('frm','<c:out value="${data.OPR_UNT_ID }" />');" class="button small primary"><span>제어 권한 설정</span></a>
							</div>
						</c:if>
						<!-- table -->
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 10%;"/>
								<col style="width: 20%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 20%;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>사용 여부</span></th>
									<td><c:out value="${data.USE_YN_NM }" /></td>
									<th><span>등록 상태</span></th>
									<td><c:out value="${data.REG_STATS_NM }" /></td>
									<th><span>고객 구분</span></th>
									<td><c:out value="${data.CUST_SPR_NM }" /></td>
								</tr>
								<tr>
									<th><span>자재 구분</span></th>
									<td><c:out value="${data.MRO_YN_NM }" /></td>
									<th><span>사업장</span></th>
									<td><c:out value="${data.BZPLC_ID }" /> | <c:out value="${data.BZPLC_NM }" /></td>
									<th><span>운영 단위</span></th>
									<td><c:out value="${data.OPR_UNT_ID }" /> | <c:out value="${data.OPR_UNT_NM }" /></td>
								</tr>
								<tr>
									
									<th><span>영업팀</span></th>
									<td><c:out value="${data.SALS_TEAM_CD }" /> | <c:out value="${data.SALS_TEAM_NM }" /></td>
									<th><span>서비스팀</span></th>
									<td><c:out value="${data.SVC_TEAM_CD }" /> | <c:out value="${data.SVC_TEAM_NM }" /></td>
									<th><span>운영팀</span></th>
									<td><c:out value="${data.OP_ORG_CD }" /> | <c:out value="${data.OP_ORG_NM }" /></td>
								</tr>
								<tr>
									<th><span>영업 담당자</span></th>
									<td><c:out value="${data.CHR_MD_ID }" /> | <c:out value="${data.CHR_MD_NM }" /></td>
									<th><span>CS 담당자</span></th>
									<td><c:out value="${data.CHR_CS_ID }" /> | <c:out value="${data.CHR_CS_NM }" /></td>
									<th><span>운영 담당자</span></th>
									<td><c:out value="${data.CHR_OP_ID }" /> | <c:out value="${data.CHR_OP_NM }" /></td>
								</tr>
								<tr>
									<th><span>유통경로</span></th>
									<td colspan="5"><c:out value="${data.DSTR_PATH_NM }" /></td>
								</tr>
							</tbody>
						</table>
						<!-- // table -->
						<h3 class="title"><span>주소 정보</span></h3>
						<!-- table -->
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 10%;"/>
								<col style="width: 20%;"/>
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
								<col style="width: 10%;"/>
								<col style="width: 20%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 20%;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>정산 구분</span></th>
									<td><c:out value="${data.ADJ_SPR_NM }" /></td>
									<th><span>정산일</span></th>
									<td><c:out value="${data.ADJ_DD }" /></td>
									<th><span>세금계산서 발행 구분</span></th>
									<td><c:out value="${data.TAXINV_PUBC_SPR_NM }" /></td>
								</tr>
								<tr>
									<th><span>수금 조건</span></th>
									<td><c:out value="${data.BILCLT_COND_CD }" /> | <c:out value="${data.BILCLT_COND_NM }" /></td>
									<th><span>결제 수단</span></th>
									<td><c:out value="${data.STL_MEAN_NM }" /></td>
									<th><span>세금계산서 발행 시스템</span></th>
									<td><c:out value="${data.TAXINV_PUBC_SYS_NM }" /></td>
								</tr>
							</tbody>
						</table>
						<!-- // table -->
						<h3 class="title"><span>운영 정보</span></h3>
						<!-- table -->
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 10%;"/>
								<col style="width: 20%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 20%;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>Only Serveone 자차 배송</span></th>
									<td>
										<input type="radio" class="radio" name="srvonOcarUtYnY" id="srvonOcarUtYnY" value="Y" <c:if test="${data.SRVON_OCAR_UT_YN == 'Y'}">checked="checked"</c:if>/>
										<label for="srvonOcarUtYnY">허용</label>
										<input type="radio" class="radio" name="srvonOcarUtYnN" id="srvonOcarUtYnN" value="N" <c:if test="${data.SRVON_OCAR_UT_YN == 'N'}">checked="checked"</c:if>/>
										<label for="srvonOcarUtYnN">미 허용</label>
									</td>
									<th><span>택배배송불가</span></th>
									<td>
										<input type="radio" class="radio" name="hdvDlvUseYnY" id="hdvDlvUseYnY" value="Y" <c:if test="${data.HDV_DLV_USE_YN == 'Y'}">checked="checked"</c:if>/>
										<label for="hdvDlvUseYnY">허용</label>
										<input type="radio" class="radio" name="hdvDlvUseYnN" id="hdvDlvUseYnN" value="N" <c:if test="${data.HDV_DLV_USE_YN == 'N'}">checked="checked"</c:if>/>
										<label for="hdvDlvUseYnN">미 허용</label>
									</td>
									<th><span>이관 고객</span></th>
									<td>
										<input type="checkbox" class="checkbox" name="trnfYn" id="trnfYn" <c:if test="${data.TRSF_YN == 'Y'}">checked="checked"</c:if> disabled="disabled"/>
									</td>
								</tr>
							</tbody>
						</table>
						<!-- // table -->
						<h3 class="title">
						<span>장바구니 문구</span>
						<span class="spanRight" style="border-left: none; color: red;">※ 등록된 메시지가 주문 카트에서 고정 출력됩니다.</span>
						</h3>
						<!-- table -->
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 10%;"/>
								<col style="width: 20%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 15%;"/>
								<col style="width: 20%;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>장바구니 문구</span></th>
									<td colspan="5">
										<input type="text" class="text" style="width: 100%;" name="" id="" value=""/>
									</td>
								</tr>
							</tbody>
						</table>
						<!-- // table -->
						<h3 class="title"><span>참조 코드 관리</span></h3>
						<!-- table -->
						<table cellspacing="0" class="table-col table-b">
							<colgroup>
								<col style="width: 3%;" >
								<col style="width: 15%;">
								<col style="width: 15%;">
								<col style="width: 10%;">
								<col style="width: 15%;">
								<col style="width: 15%;">
								<col style="width: 5%;" >
								<col style="width: 5%;" >
								<col style="width: 10%;">
								<col style="width: 7%;" >
							</colgroup>
							<thead>
								<tr>
									<th rowspan="2">No</th>
									<th rowspan="2">참조 코드명</th>
									<th rowspan="2">사용여부</th>
									<th rowspan="2">필수여부</th>
									<th rowspan="2">변경여부</th>
									<th rowspan="2">노출방식</th>
									<th colspan="3">최종 수정 이력</th>
									<th rowspan="2">상세보기</th>
								</tr>
								<tr>
									<th>수정자 ID</th>
									<th>수정자명</th>
									<th style="border-right: 1px solid #e9e9e9">수정 일시</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>
										<label><input type="text" name="" id="" class="text" placeholder="코드명을 입력해주세요" style="width: 100%"/></label>
									</td>
									<td>
										<input type="radio" class="radio" name="" id="" value="Y"/>
										<label for="bchDlvYn_Y">사용</label>
										<input type="radio" class="radio" name="" id="" value="N"/>
										<label for="bchDlvYn_N">미사용</label>
									</td>
									<td>
										<input type="radio" class="radio" name="" id="" value="Y"/>
										<label for="bchDlvYn_Y">예</label>
										<input type="radio" class="radio" name="" id="" value="N"/>
										<label for="bchDlvYn_N">아니오</label>
									</td>
									<td>
										<input type="radio" class="radio" name="" id="" value="Y"/>
										<label for="bchDlvYn_Y">법인만</label>
										<input type="radio" class="radio" name="" id="" value="N"/>
										<label for="bchDlvYn_N">주문자포함</label>
									</td>
									<td>
										<input type="radio" class="radio" name="" id="" value="Y"/>
										<label for="bchDlvYn_Y">셀렉트</label>
										<input type="radio" class="radio" name="" id="" value="N"/>
										<label for="bchDlvYn_N">검색</label>
									</td>
									<td>M123456789</td>
									<td>홍길동</td>
									<td>2021.07.31 HH:MM:SS</td>
									<td>
										<a href="#none" onclick="fn_codeDetail('frm')" class="button small primary"><span>상세관리</span></a>
									</td>
								</tr>
							</tbody>
						</table>
						<!-- // table -->
						<h3 class="title"><span>일회성 코드 관리</span></h3>
						<!-- table -->
						<table cellspacing="0" class="table-col table-b">
							<colgroup>
								<col style="width: auto;" >
								<col style="width: auto;" >
								<col style="width: auto;" >
								<col style="width: auto;" >
								<col style="width: 15%;" >
								<col style="width: auto;" >
								<col style="width: auto;" >
								<col style="width: auto;" >
								<col style="width: auto;" >
							</colgroup>
							<thead>
								<tr>
									<th rowspan="2">No</th>
									<th rowspan="2">일회성 코드명</th>
									<th rowspan="2">사용여부</th>
									<th rowspan="2">필수여부</th>
									<th rowspan="2">최대 입력 문자(Byte)</th>
									<th rowspan="2">숫자/문자 구분</th>
									<th colspan="3">최종 수정 이력</th>
								</tr>
								<tr>
									<th>수정자 ID</th>
									<th>수정자명</th>
									<th style="border-right: 1px solid #e9e9e9">수정 일시</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>
										<label><input type="text" name="" id="" class="text" placeholder="코드명을 입력해주세요" style="width: 100%"/></label>
									</td>
									<td>
										<input type="radio" class="radio" name="" id="" value="Y"/>
										<label for="bchDlvYn_Y">사용</label>
										<input type="radio" class="radio" name="" id="" value="N"/>
										<label for="bchDlvYn_N">미사용</label>
									</td>
									<td>
										<input type="radio" class="radio" name="" id="" value="Y"/>
										<label for="bchDlvYn_Y">예</label>
										<input type="radio" class="radio" name="" id="" value="N"/>
										<label for="bchDlvYn_N">아니오</label>
									</td>
									<td>
										<label><input type="text" name="" id="" class="text" style="width: 85%"/></label><c:out value=" Byte"/>
									</td>
									<td>
										<input type="radio" class="radio" name="" id="" value="Y"/>
										<label for="bchDlvYn_Y">숫자만</label>
										<input type="radio" class="radio" name="" id="" value="N"/>
										<label for="bchDlvYn_N">문자만</label>
										<input type="radio" class="radio" name="" id="" value="N"/>
										<label for="bchDlvYn_N">혼용</label>
									</td>
									<td>M123456789</td>
									<td>홍길동</td>
									<td>2021.07.31 HH:MM:SS</td>
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