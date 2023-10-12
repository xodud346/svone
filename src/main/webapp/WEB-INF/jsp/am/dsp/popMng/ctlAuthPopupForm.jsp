<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript">
$(document).ready(function(){
	$("input[type=radio]").prop('disabled',true);
	$("select option").prop('disabled',true);
});

//상세관리
function fn_giLevelDetail(frm,val,oprUntId,bzplcId){
	$("#frm").find("input[name=giLevelVal]").val(val);				//입고레벨 값
	$("#frm").find("input[name=OPR_UNT_ID]").val(oprUntId);			//운영단위ID
	$("#frm").find("input[name=BZPLC_ID]").val(bzplcId);			//사업장ID
	popup('', "860", "510", "yes","_giLevelPopup");
	$('#frm').attr({"action":"/am/dsp/popMng/giLevelPopupForm.do", "target":"popup_giLevelPopup", "method":"post"}).submit();
}
</script>
<style type="text/css">
.spanRight{float: right;font-size: 10px;}
</style>
<title>제어 권한 설정</title>
</head>
<body class="page-popup">
	<div class="modal">
		<div class="modal-wrapper">
			<div class="modal-inner">
				<h2 class="title"><span>제어 권한 설정</span></h2>
					<form id="frm" name="frm">
						<input type="hidden" name="giLevelVal" />
						<input type="hidden" name="OPR_UNT_ID" />
						<input type="hidden" name="BZPLC_ID" />
						<h3 class="title" style="margin: 10px 0;font-size: 15px;font-weight: 400; padding: 0;"><span>Mall 정보 관리</span></h3>
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
									<th><span>회원가입 지정 승인자</span></th>
									<td colspan="5">
										<input type="radio" class="radio" name="memAprvUseYnY" id="memAprvUseYnY" value="Y" <c:if test="${data.MEM_APRV_USE_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="memAprvUseYnY">사용</label>
										<input type="radio" class="radio" name="memAprvUseYnN" id="memAprvUseYnN" value="N" <c:if test="${data.MEM_APRV_USE_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="memAprvUseYnN">미사용</label>
									</td>
								</tr>
							</tbody>
						</table>
						<h3 class="title"><span>예산 관리</span></h3>
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
									<th><span>예산 관리</span></th>
									<td colspan="5">
										<input type="radio" class="radio" name="bgtAuthUseYnY" id="bgtAuthUseYnY" value="Y" <c:if test="${data.BGT_AUTH_USE_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="bgtAuthUseYnY">사용</label>
										<input type="radio" class="radio" name="bgtAuthUseYnN" id="bgtAuthUseYnN" value="N" <c:if test="${data.BGT_AUTH_USE_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="bgtAuthUseYnN">미사용</label>
									</td>
								</tr>
								<tr>
									<th><span>상위 계정 예산 사용</span></th>
									<td>
										<input type="radio" class="radio" name="hrnkBgtUseYnY" id="hrnkBgtUseYnY" value="Y" <c:if test="${data.HRNK_BGT_USE_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="hrnkBgtUseYnY">사용</label>
										<input type="radio" class="radio" name="hrnkBgtUseYnN" id="hrnkBgtUseYnN" value="N" <c:if test="${data.HRNK_BGT_USE_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="hrnkBgtUseYnN">미사용</label>
									</td>
									<th><span>예산 초과 허용</span></th>
									<td>
										<input type="radio" class="radio" name="bgtOverAgdYnY" id="bgtOverAgdYnY" value="Y" <c:if test="${data.BGT_OVER_AGD_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="bgtOverAgdYnY">사용</label>
										<input type="radio" class="radio" name="bgtOverAgdYnN" id="bgtOverAgdYnN" value="N" <c:if test="${data.BGT_OVER_AGD_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="bgtOverAgdYnN">미사용</label>
									</td>
									<th><span>예산 이월 구분</span></th>
									<td>
										<select class="select" name="bgtFwSprCdList" id="bgtFwSprCdList">
											<option value="">전체</option>
											<c:forEach var="bgtFwSprCdList" items="${bgtFwSprCdList }">
												<option value="${bgtFwSprCdList.BGT_FW_SPR_CD }" <c:if test="${data.BGT_FW_SPR_CD == bgtFwSprCdList.BGT_FW_SPR_CD }">selected</c:if>>${bgtFwSprCdList.BGT_FW_SPR_NM }</option>
											</c:forEach>
										</select>
									</td>
								</tr>
								<tr>
									<th><span>예산 분기별 관리 사용</span></th>
									<td>
										<input type="radio" class="radio" name="qrtBgtUseYnY" id="qrtBgtUseYnY" value="Y" <c:if test="${data.QRT_BGT_USE_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="qrtBgtUseYnY">사용</label>
										<input type="radio" class="radio" name="qrtBgtUseYnN" id="qrtBgtUseYnN" value="N" <c:if test="${data.QRT_BGT_USE_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="qrtBgtUseYnN">미사용</label>
									</td>
									<th><span>이체 부서 및 계정 사용</span></th>
									<td>
										<input type="radio" class="radio" name="expTrnsfDeptAcctUseYnY" id="expTrnsfDeptAcctUseYnY" value="Y" <c:if test="${data.EXP_TRNSF_DEPT_ACCT_USE_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="expTrnsfDeptAcctUseYnY">사용</label>
										<input type="radio" class="radio" name="expTrnsfDeptAcctUseYnN" id="expTrnsfDeptAcctUseYnN" value="N" <c:if test="${data.EXP_TRNSF_DEPT_ACCT_USE_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="expTrnsfDeptAcctUseYnN">미사용</label>
									</td>
									<th><span>예산 결제일</span></th>
									<td>
										<select class="select">
											<option value="00" <c:if test="${data.BGT_APRV_DD == '00'}">selected="selected"</c:if>>말일</option>
											<c:forEach var="i" begin="1" end="30">
												<option value='<c:out value="${i}"/>' <c:if test="${i == data.BGT_APRV_DD}">selected="selected"</c:if>><c:out value="${i}"/>일</option>
											</c:forEach>
										</select>
									</td>
								</tr>
								<tr>
									<th><span>비용 부서 변경가능</span></th>
									<td>
										<input type="radio" class="radio" name="expDeptChgPssYnY" id="expDeptChgPssYnY" value="Y" <c:if test="${data.EXP_DEPT_CHG_PSS_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="expDeptChgPssYnY">사용</label>
										<input type="radio" class="radio" name="expDeptChgPssYnN" id="expDeptChgPssYnN" value="N" <c:if test="${data.EXP_DEPT_CHG_PSS_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="expDeptChgPssYnN">미사용</label>
									</td>
									<th><span>귀속 부서 사용</span></th>
									<td colspan="3">
										<select class="select" name="blngDeptUseSprCdList" id="blngDeptUseSprCdList">
											<option value="">전체</option>
											<c:forEach var="blngDeptUseSprCdList" items="${blngDeptUseSprCdList }">
												<option value="${blngDeptUseSprCdList.BLNG_DEPT_USE_SPR_CD }" <c:if test="${data.BLNG_DEPT_USE_SPR_CD == blngDeptUseSprCdList.BLNG_DEPT_USE_SPR_CD }">selected</c:if>>${blngDeptUseSprCdList.BLNG_DEPT_USE_SPR_NM }</option>
											</c:forEach>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
						<h3 class="title"><span>발주, 정산 및 세금계산서 발행 관리</span></h3>
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
									<th><span>결재 사용</span></th>
									<td>
										<input type="radio" class="radio" name="aprvAuthUseYnY" id="aprvAuthUseYnY" value="Y" <c:if test="${data.APRV_AUTH_USE_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="aprvAuthUseYnY">사용</label>
										<input type="radio" class="radio" name="aprvAuthUseYnN" id="aprvAuthUseYnN" value="N" <c:if test="${data.APRV_AUTH_USE_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="aprvAuthUseYnN">미사용</label>
									</td>
									<th><span>주문 기본 결재 변경</span></th>
									<td>
										<input type="radio" class="radio" name="basisAprvChgPssYnY" id="basisAprvChgPssYnY" value="Y" <c:if test="${data.BASIS_APRV_CHG_PSS_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="basisAprvChgPssYnY">사용</label>
										<input type="radio" class="radio" name="basisAprvChgPssYnN" id="basisAprvChgPssYnN" value="N" <c:if test="${data.BASIS_APRV_CHG_PSS_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="basisAprvChgPssYnN">미사용</label>
									</td>
									<th><span>기본 발주 필수</span></th>
									<td>
										<input type="radio" class="radio" name="basisOrdMandYnY" id="basisOrdMandYnY" value="Y" <c:if test="${data.BASIS_ORD_MAND_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="basisOrdMandYnY">사용</label>
										<input type="radio" class="radio" name="basisOrdMandYnN" id="basisOrdMandYnN" value="N" <c:if test="${data.BASIS_ORD_MAND_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="basisOrdMandYnN">미사용</label>
									</td>
								</tr>
								<tr>
									<th><span>발주 사용</span></th>
									<td colspan="5">
										<input type="radio" class="radio" name="ordAuthUseYnY" id="ordAuthUseYnY" value="Y" <c:if test="${data.ORD_AUTH_USE_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="ordAuthUseYnY">사용</label>
										<input type="radio" class="radio" name="ordAuthUseYnN" id="ordAuthUseYnN" value="N" <c:if test="${data.ORD_AUTH_USE_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="ordAuthUseYnN">미사용</label>
									</td>
								</tr>
							</tbody>
						</table>
						<h3 class="title"><span>상품 및  고객사 정보 관리</span></h3>
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
									<th><span>고객사 PO 사용<br>(주문카트등록)</span></th>
									<td>
										<input type="radio" class="radio" name="ccoBypoOdrCrtYnY" id="ccoBypoOdrCrtYnY" value="Y" <c:if test="${data.CCO_BYPO_ODR_CRT_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="ccoBypoOdrCrtYnY">사용</label>
										<input type="radio" class="radio" name="ccoBypoOdrCrtYnN" id="ccoBypoOdrCrtYnN" value="N" <c:if test="${data.CCO_BYPO_ODR_CRT_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="ccoBypoOdrCrtYnN">미사용</label>
									</td>
									<th><span>신규 상품 요청</span></th>
									<td colspan="3">
										<input type="radio" class="radio" name="zmainnewprdDisYnY" id="zmainnewprdDisYnY" value="Y" <c:if test="${data.ZMAINNEWPRD_DIS_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="zmainnewprdDisYnY">사용</label>
										<input type="radio" class="radio" name="zmainnewprdDisYnN" id="zmainnewprdDisYnN" value="N" <c:if test="${data.ZMAINNEWPRD_DIS_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="zmainnewprdDisYnN">미사용</label>
									</td>
								</tr>
							</tbody>
						</table>
						<h3 class="title"><span>입고 및 재고 관리, 화학물질 관리</span></h3>
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
									<th><span>자동 입고 검수</span></th>
									<td>
										<select class="select" name="giVerfProcCdList" id="giVerfProcCdList" style="width: 100%;">
											<option value="">전체</option>
											<c:forEach var="giVerfProcCdList" items="${giVerfProcCdList }">
												<option value="${giVerfProcCdList.GI_VERF_PROC_CD }" <c:if test="${data.GI_VERF_PROC_CD == giVerfProcCdList.GI_VERF_PROC_CD }">selected</c:if>>${giVerfProcCdList.GI_VERF_PROC_NM }</option>
											</c:forEach>
										</select>
									</td>
									<th><span>입고 레벨</span></th>
									<td colspan="3">
										<select class="select" name="giProcStpCdList" id="giProcStpCdList">
											<option value="">전체</option>
											<c:forEach var="giProcStpCdList" items="${giProcStpCdList }">
												<option value="${giProcStpCdList.GI_PROC_STP_CD }" <c:if test="${data.GI_PROC_STP_CD == giProcStpCdList.GI_PROC_STP_CD }">selected</c:if>>${giProcStpCdList.GI_PROC_STP_NM }</option>
											</c:forEach>
										</select>
										<c:if test="${data.GI_PROC_STP_CD == '1' || data.GI_PROC_STP_CD == '2'}"> <!-- 운영단위, 부서일시만 show -->
											<a href="#none" onclick="fn_giLevelDetail('frm','<c:out value="${data.GI_PROC_STP_CD }"/>','<c:out value="${data.OPR_UNT_ID }"/>','<c:out value="${data.BZPLC_ID }"/>')" class="button small primary"><span>상세관리</span></a>
										</c:if>
									</td>
								</tr>
							</tbody>
						</table>
						<h3 class="title"><span>카트 관리</span></h3>
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
									<th><span>상품별 구매 사유 필수</span></th>
									<td>
										<select class="select" name="ordCartPurcRsnMandYnList" id="ordCartPurcRsnMandYnList" style="width: 100%;">
											<option value="">전체</option>
											<c:forEach var="ordCartPurcRsnMandYnList" items="${ordCartPurcRsnMandYnList }">
												<option value="${ordCartPurcRsnMandYnList.ODR_CART_PURC_RSN_MAND_YN }" <c:if test="${data.ODR_CART_PURC_RSN_MAND_YN == ordCartPurcRsnMandYnList.ODR_CART_PURC_RSN_MAND_YN }">selected</c:if>>${ordCartPurcRsnMandYnList.ODR_CART_PURC_RSN_MAND_YN_NM }</option>
											</c:forEach>
										</select>
									</td>
									<th><span>주문카트 주문 대행자 사용</span></th>
									<td>
										<input type="radio" class="radio" name="ordrPrxyUseYnY" id="ordrPrxyUseYnY" value="Y" <c:if test="${data.ODR_PRXY_USE_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="ordrPrxyUseYnY">사용</label>
										<input type="radio" class="radio" name="ordrPrxyUseYnN" id="ordrPrxyUseYnN" value="N" <c:if test="${data.ODR_PRXY_USE_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="ordrPrxyUseYnN">미사용</label>
									</td>
									<th><span>주문카트 참조자 사용</span></th>
									<td>
										<input type="radio" class="radio" name="refpsnUseYnY" id="refpsnUseYnY" value="Y" <c:if test="${data.REFPSN_USE_YN eq 'Y' }">checked="checked"</c:if>/>
										<label for="refpsnUseYnY">사용</label>
										<input type="radio" class="radio" name="refpsnUseYnN" id="refpsnUseYnN" value="N" <c:if test="${data.REFPSN_USE_YN eq 'N' }">checked="checked"</c:if>/>
										<label for="refpsnUseYnN">미사용</label>
									</td>
								</tr>
							</tbody>
						</table>
						<h3 class="title">
							<span>카트 주문 불가 관리</span>
							<span class="spanRight" style="border-left: none;">※ 설정 당월에만 주문 불가 처리되며, 반복 여부를 체크 시 매 월 동일 설정이 적용됩니다.</span>
						</h3>
						<table cellspacing="0" class="table-col table-b">
							<colgroup>
								<col style="width: auto;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
							</colgroup>
							<thead>
								<tr>
									<th>구분</th>
									<th>반복 여부</th>
									<th>시작일</th>
									<th>종료일</th>
									<th>카트 주문 불가 금액</th>
									<th>사용 여부</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input type="checkbox" class="checkbox" name="" id="" value="Y"/>
										<label for="">기간</label>
										<input type="checkbox" class="checkbox" name="" id="" value="N"/>
										<label for="">금액</label>
									</td>
									<td>
										<input type="checkbox" class="checkbox" name="" id="" value="N"/>
										<label for="">반복 적용</label>
									</td>
									<td>
										<select class="select">
											<option value="">선택</option>
											<option value="">1</option>
											<option value="">2</option>
										</select>
									</td>
									<td>
										<select class="select">
											<option value="">선택</option>
											<option value="">1</option>
											<option value="">2</option>
										</select>
									</td>
									<td>
										<input type="text" class="text"/> ~ <input type="text" class="text"/>
									</td>
									<td>
										<input type="radio" class="radio" name="" id="" value="Y"/>
										<label for="">사용</label>
										<input type="radio" class="radio" name="" id="" value="N"/>
										<label for="">미사용</label>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
				<!-- tab1 end -->
				<div class="section-button" style="margin-bottom: 0;">
					<div class="wrap text-center">
						<a href="#none" onclick="fn_cancel()" class="button large"><span>취소</span></a>
						<a href="#none" onclick="fn_save()" class="button large primary"><span>저장</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>
<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
</body>
</html>