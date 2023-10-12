<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css">
</style>
</head>
<body>
<div id="header">
	<%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</div>

<div id="container">
	<div id="aside" class="aside left">
		<%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
	</div>

	<div id="wrapper">
		<div id="breadcrumb">
		</div>

		<div id="contents">
			<div id="container">
				<h2 class="title"><span>${commandMap.P_TITLE}</span></h2>
				
				<c:if test="${commandMap.MEM_EDIT eq 'E' || commandMap.MEM_EDIT eq 'D' }">
				<div class="tab-list" id="menuViewTab"><!-- tab-list -->                    <ul>
                        <li class="in"><a href="#none"  data-tab_no="tab1"><span>회원정보</span></a></li>
                        <li><a href="#none"  data-tab_no="tab2"><span>주문이력</span></a></li>
                        <li><a href="#none"  data-tab_no="tab3"><span>보유쿠폰</span></a></li>
                        <li><a href="#none"  data-tab_no="tab4"><span>이벤트</span></a></li>
                    </ul>
                </div>
				</c:if>
				<form id="frm" name="frm" enctype="multipart/form-data">
				<input type="hidden" name="MEM_EDIT" id="MEM_EDIT" value="${commandMap.MEM_EDIT}"/>
				<input type="hidden" name="MEM_ID"	id="MEM_ID"  value="${commandMap.SEL_MEM_ID}" />
				<input type="hidden" name="CO_CD"	id="CO_CD"  value="1000" />
				<div id="tab1">
				<c:if test="${commandMap.MEM_EDIT ne 'N'}">
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>등록정보</span></h3>
                     </div>
					<c:choose>
					<c:when test="${commandMap.MEM_EDIT eq 'E'}">
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 30%;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>상태</span></th>
								<td>
									<select name="USE_YN" id="USE_YN"  class="select">									
									<option value="Y" ${dtlData.USE_YN eq 'Y' ? 'selected="selected"' : ''}>사용</option>
									<option value="N" ${dtlData.USE_YN eq 'N' ? 'selected="selected"' : ''}>미사용</option>
								</select>
								</td>
								<th><span>회원ID</span></th>
								<td>
									${commandMap.SEL_MEM_ID}
								</td>
							</tr>							
						</tbody>
					</table>
					</c:when>
					<c:when test="${commandMap.MEM_EDIT eq 'D'}">
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 30%;" />
							<col style="width: 10%;" />
							<col style="width: 30%;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>상태</span></th>
								<td>
									장기미사용(휴면)
								</select>
								</td>
								<th><span>회원ID</span></th>
								<td>
									${commandMap.SEL_MEM_ID}
								</td>
								<th><span>휴면전환일</span></th>
								<td>
									${dtlData.UPD_DATE}
								</td>
							</tr>							
						</tbody>
					</table>
					</c:when>
					<c:otherwise>
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 30%;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>회원상태</span></th>
								<td>
									탈퇴
								</td>
								<th><span>회원ID</span></th>
								<td>
									${commandMap.SEL_MEM_ID}
								</td>
							</tr>							
						</tbody>
					</table>
					</c:otherwise>
					</c:choose>
				</c:if>
				
				<c:choose>
					<c:when test="${commandMap.MEM_EDIT eq 'E' || commandMap.MEM_EDIT eq 'N' }">
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>상위 정보</span></h3>
                    </div>
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>부서</span></th>
								<td>
									<input type="text" name="DEPT_NM" id="DEPT_NM" value="${dtlData.DEPT_NM}"/>
									<input type="hidden" name="DEPT_ID" id="DEPT_ID" value="${dtlData.DEPT_ID}"/>
									<a href="#" class="icon search2 bzplcPopup"></a>
								</td>
								<th><span>운영단위</span></th>
								<td>
									<input type="text" name="OPR_UNT_NM" id="OPR_UNT_NM" value="${dtlData.OPR_UNT_NM}" readonly />
									<input type="hidden" name="OPR_UNT_ID" id="OPR_UNT_ID"  value="${dtlData.OPR_UNT_ID}" />
								</td>
								<th><span>사업장</span></th>
								<td>
									<input type="text" name="BZPLC_NM" id="BZPLC_NM" value="${dtlData.BZPLC_NM}" readonly />
									<input type="hidden" name="BZPLC_ID"	id="BZPLC_ID"  value="${dtlData.BZPLC_ID}" />
								</td>
							</tr>							
						</tbody>
					</table>					
					</c:when>
					<c:otherwise>
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>상위 정보</span></h3>
                    </div>
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>부서</span></th>
								<td>
									${dtlData.DEPT_NM}
								</td>
								<th><span>운영단위</span></th>
								<td>
									${dtlData.OPR_UNT_NM}
								</td>
								<th><span>사업장</span></th>
								<td>
									${dtlData.BZPLC_NM}
								</td>
							</tr>							
						</tbody>
					</table>
					</c:otherwise>
				</c:choose>
					
				<c:choose>
					<c:when test="${commandMap.MEM_EDIT eq 'E' || commandMap.MEM_EDIT eq 'N'}">
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>기본 정보</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>로그인ID</span></th>
								<td colspan= "5">
								<c:choose>
								<c:when test="${not empty dtlData.UCESSDI_ID}">
									<input type="text" name="LOGIN_ID" id="LOGIN_ID" class="text" maxlength="10" value="${dtlData.LOGIN_ID}"  readonly />
                                    <a href="#none" id="idCheck" class="button button-c small" disabled="disabled"><span>중복확인</span></a>
									<input type="hidden" id="idCheckYn" value="" /> 
									<input type="hidden" id="checkId" value="" />
								</c:when>
								<c:otherwise>
									<input type="text" name="LOGIN_ID" id="LOGIN_ID" class="text" maxlength="10" value="${dtlData.LOGIN_ID}"/>
									<a href="#none" id="idCheck" class="button button-c small"><span>중복확인</span></a>
									<input type="hidden" id="idCheckYn" value="" /> 
									<input type="hidden" id="checkId" value="" />
								</c:otherwise>
								</c:choose>
								</td>
							</tr>	
							<tr>
								<th><span>회원명</span></th>
								<td>
									<input type="text" name="MEM_NM" id="MEM_NM" value="${dtlData.MEM_NM}"/>
								</td>
								<th><span>직급</span></th>
								<td>
									<input type="text" name="JBPOS_NM" id="JBPOS_NM" value="${dtlData.JBPOS_NM}" />
								</td>
								<th><span>고객유형</span></th>
								<td>
									<select class="select" name="CUST_TP_CD" id="CUST_TP_CD">
											<option value="">전체</option>
											<option value="20" ${dtlData.CUST_TP_CD eq '20' ? 'selected="selected"' : ''}>계약</option>
											<option value="30" ${dtlData.CUST_TP_CD eq '30' ? 'selected="selected"' : ''}>일반</option>
									</select>
								</td>
							</tr>	
							<tr>
								<th><span>약관 동의</span></th>
								<td>
								<c:if test="${commandMap.MEM_EDIT eq 'N'}">
									<input type="radio" id="MEM_AGRE_YN_Y" name="MEM_AGRE_YN" class="radio" value="Y" />
									<label for="MEM_AGRE_YN_Y">동의</label>
									<input type="radio" id="MEM_AGRE_YN_N" name="MEM_AGRE_YN" class="radio" value="N" />
									<label for="MEM_AGRE_YN_N">미 동의</label>
								</c:if>
								<c:if test="${commandMap.MEM_EDIT eq 'E'}">
								${dtlData.MEM_AGRE_NM}
								</c:if>
								</td>
								<th><span>개인정보사용 동의</span></th>
								<td>
								<c:if test="${commandMap.MEM_EDIT eq 'N'}">
									<input type="radio" id="MEM_CHO_AGRE_YN_Y" name="MEM_CHO_AGRE_YN" class="radio" value="Y" />
									<label for="MEM_CHO_AGRE_YN_Y">동의</label>
									<input type="radio" id="MEM_CHO_AGRE_YN_N" name="MEM_CHO_AGRE_YN" class="radio" value="N" />
									<label for="MEM_CHO_AGRE_YN_N">미 동의</label>
								</c:if>
								<c:if test="${commandMap.MEM_EDIT eq 'E'}">
								${dtlData.MEM_CHO_AGRE_NM}
								</c:if>
								</td>
								<th><span>마케팅수신 동의</span></th>
								<td>
								<c:if test="${commandMap.MEM_EDIT eq 'N'}">
									<input type="radio" id="MKTG_UTILIZE_AGRE_Y" name="MKTG_UTILIZE_AGRE" class="radio" value="Y" />
									<label for="MKTG_UTILIZE_AGRE_Y">동의</label>
									<input type="radio" id="MKTG_UTILIZE_AGRE_N" name="MKTG_UTILIZE_AGRE" class="radio" value="N" />
									<label for="MKTG_UTILIZE_AGRE_N">미 동의</label>
								</c:if>
								<c:if test="${commandMap.MEM_EDIT eq 'E'}">
								${dtlData.MKTG_UTILIZE_AGRE_NM}
								</c:if>
								</td>
							</tr>
							<tr>
								<th><span>업무문자/메일 수신</span></th>
								<td>
									<input type="checkbox" id="SMS_RCV_YN" name="SMS_RCV_YN" value="Y" class="radio" ${dtlData.SMS_RCV_YN eq 'Y' ? 'checked="checked"' : ''}>
                                        <label for="SMS_RCV_YN">문자허용</label>
									<input type="checkbox" id="EMAIL_RCV_YN" name="EMAIL_RCV_YN" value="Y" class="radio" ${dtlData.EMAIL_RCV_YN eq 'Y' ? 'checked="checked"' : ''}>
                                        <label for="EMAIL_RCV_YN">메일허용</label>
								</td>
								<th><span>가입경로</span></th>
								<td>
								<c:if test="${commandMap.MEM_EDIT eq 'N'}">
									<input type="radio" id="JN_CHR_CD40" name="JN_CHR_CD" class="radio" value="40" />
									<label for="JN_CHR_CD40">서브원</label>
									<input type="radio" id="JN_CHR_CD50" name="JN_CHR_CD" class="radio" value="50" />
									<label for="JN_CHR_CD50">고객</label>
								</c:if>
								<c:if test="${commandMap.MEM_EDIT eq 'E'}">
								${dtlData.JN_CHR_CD_NM}
								</c:if>
								</td>
								<th><span>S-MRO 회원정보</span></th>
								<td>
									<input type="text" name="MEM_NM" id="MEM_NM" value="${dtlData.MEM_NM}" readonly />
									<input type="hidden" name="MEM_ID"	id="MEM_ID"  value="${dtlData.MEM_ID}" />
									<a href="#" class="icon search2 bzplcPopup"></a>
								</td>
							</tr>							
						</tbody>
					</table>					
					</c:when>
					<c:when test="${commandMap.MEM_EDIT eq 'D'}">
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>기본 정보</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>로그인ID</span></th>
								<td colspan= "5">
									${dtlData.LOGIN_ID}
								</td>
							</tr>	
							<tr>
								<th><span>회원명</span></th>
								<td>
									${dtlData.MEM_NM}
								</td>
								<th><span>직급</span></th>
								<td>
									${dtlData.JBPOS_NM}
								</td>
								<th><span>고객유형</span></th>
								<td>
									${dtlData.CUST_TP_NM}
								</td>
							</tr>	
							<tr>
								<th><span>약관 동의</span></th>
								<td>
								${dtlData.MEM_AGRE_NM}
								</td>
								<th><span>개인정보사용 동의</span></th>
								<td>
								${dtlData.MEM_CHO_AGRE_NM}
								</td>
								<th><span>마케팅수신 동의</span></th>
								<td>
								${dtlData.MKTG_UTILIZE_AGRE_NM}
								</td>
							</tr>
							<tr>
								<th><span>업무문자/메일 수신</span></th>
								<td>
								${dtlData.SMS_RCV_YN eq 'Y' ? '문자허용' : ''} ${dtlData.EMAIL_RCV_YN eq 'Y' ? '메일허용' : ''}
								</td>
								<th><span>가입경로</span></th>
								<td>
								${dtlData.JN_CHR_CD_NM}
								</td>
								<th><span>S-MRO 회원정보</span></th>
								<td>
									${dtlData.MEM_NM}
								</td>
							</tr>							
						</tbody>
					</table>					
					</c:when>
					<c:otherwise>
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>기본 정보</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 40%;" />
							<col style="width: 10%;" />
							<col style="width: 40%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>로그인ID</span></th>
								<td colspan= "5">
									${dtlData.LOGIN_ID}
								</td>
								<th><span>고객유형</span></th>
								<td>
									${dtlData.CUST_TP_NM}
								</td>
							</tr>															
						</tbody>
					</table>
					</c:otherwise>
				</c:choose>	
					
					
				<c:if test="${commandMap.MEM_EDIT ne 'W'}">	
				<c:choose>
					<c:when test="${commandMap.MEM_EDIT eq 'E' || commandMap.MEM_EDIT eq 'N'}">				
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>주소 정보</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>우편번호</span></th>
								<td>
									<input type="text" name="WPLC_ZPCD" id="WPLC_ZPCD" class="text searchBzplc" value="${dtlData.WPLC_ZPCD}" readonly />
									<a href="javascript:searchZipCodeMem('WPLC_ZPCD', 'WPLC_REPR_ADDR', 'WPLC_DTL_ADDR', '')" class="icon search2 bzplcPopup"></a>
								</td>
								<th><span>주소</span></th>
								<td>
									<input type="text" name="WPLC_REPR_ADDR" id="WPLC_REPR_ADDR" class="text searchBzplc" value="${dtlData.WPLC_REPR_ADDR}" readonly />
								</td>
								<th><span>상세주소</span></th>
								<td>
									<input type="text" name="WPLC_DTL_ADDR" id="WPLC_DTL_ADDR" class="text searchBzplc" value="${dtlData.WPLC_DTL_ADDR}"  />
								</td>
							</tr>
							<tr>
								<th><span>연락처</span></th>
								<td>
								<c:choose>
								<c:when test="${commandMap.MEM_EDIT eq 'E' and not empty dtlData.MP_NO}">
								<c:set var="MP_NO" value="${fn:split(dtlData.MP_NO,'-')}"/>
									<select class="select" name="MP_NO1" id="MP_NO1">
                                        <option value="">선택</option>
                                        <option value="010" ${MP_NO[0] eq '010' ? 'selected="selected"' : ''}>010</option>
                                            <option value="011" ${MP_NO[0] eq '011' ? 'selected="selected"' : ''}>011</option>
                                            <option value="016" ${MP_NO[0] eq '016' ? 'selected="selected"' : ''}>016</option>
                                            <option value="017" ${MP_NO[0] eq '017' ? 'selected="selected"' : ''}>017</option>
                                            <option value="018" ${MP_NO[0] eq '018' ? 'selected="selected"' : ''}>018</option>
                                            <option value="019" ${MP_NO[0] eq '019' ? 'selected="selected"' : ''}>019</option>
                                            </select>
                                    <input type="text" name="MP_NO2" id="MP_NO2" class="text number" value="${MP_NO[1]}" maxlength="4"/> - 
                                    <input type="text" name="MP_NO3" id="MP_NO3" class="text number" value="${MP_NO[2]}" maxlength="4"/>
									</c:when>
									<c:otherwise>
									<select class="select" name="MP_NO1" id="MP_NO1">
                                        <option value="">선택</option>
                                        <option value="010">010</option>
                                            <option value="011">011</option>
                                            <option value="016">016</option>
                                            <option value="017">017</option>
                                            <option value="018" >018</option>
                                            <option value="019">019</option>
                                            </select>
                                    <input type="text" name="MP_NO2" id="MP_NO2" class="text number" value="" maxlength="4"/> - 
                                    <input type="text" name="MP_NO3" id="MP_NO3" class="text number" value="" maxlength="4"/>
									</c:otherwise>
									</c:choose>
								</td>
								<th><span>연락처2</span></th>
								<td>
								<c:choose>
								<c:when test="${commandMap.MEM_EDIT eq 'E' and not empty dtlData.TEL_NO }">
								<c:set var="TEL_NO" value="${fn:split(dtlData.TEL_NO,'-')}"/>
									<select class="select" name="TEL_NO1" id="TEL_NO1">
                                        <option value="">선택</option>
                                        <option value="02" ${TEL_NO[0] eq '02' ? 'selected="selected"' : ''}>02</option>
                                            <option value="031" ${TEL_NO[0] eq '031' ? 'selected="selected"' : ''}>031</option>
                                            <option value="042" ${TEL_NO[0] eq '042' ? 'selected="selected"' : ''}>042</option>
                                            <option value="053" ${TEL_NO[0] eq '053' ? 'selected="selected"' : ''}>053</option>
                                            <option value="062" ${TEL_NO[0] eq '062' ? 'selected="selected"' : ''}>062</option>
                                            <option value="053" ${TEL_NO[0] eq '053' ? 'selected="selected"' : ''}>053</option>
                                            <option value="051" ${TEL_NO[0] eq '051' ? 'selected="selected"' : ''}>051</option>
                                            <option value="033" ${TEL_NO[0] eq '033' ? 'selected="selected"' : ''}>033</option>
                                            <option value="032" ${TEL_NO[0] eq '032' ? 'selected="selected"' : ''}>032</option>
                                            <option value="064" ${TEL_NO[0] eq '064' ? 'selected="selected"' : ''}>064</option>
                                            <option value="041" ${TEL_NO[0] eq '041' ? 'selected="selected"' : ''}>041</option>
                                            <option value="043" ${TEL_NO[0] eq '043' ? 'selected="selected"' : ''}>043</option>
                                            <option value="054" ${TEL_NO[0] eq '054' ? 'selected="selected"' : ''}>054</option>
                                            <option value="055" ${TEL_NO[0] eq '055' ? 'selected="selected"' : ''}>055</option>
                                            <option value="063" ${TEL_NO[0] eq '063' ? 'selected="selected"' : ''}>063</option>
                                            <option value="061" ${TEL_NO[0] eq '061' ? 'selected="selected"' : ''}>061</option>
                                            </select>
                                    <input type="text" name="TEL_NO2" id="TEL_NO2" class="text number" value="${TEL_NO[1]}" maxlength="4" /> - 
                                    <input type="text" name="TEL_NO3" id="TEL_NO3" class="text number" value="${TEL_NO[2]}" maxlength="4"/>
									</c:when>
									<c:otherwise>
									<select class="select" name="TEL_NO1" id="TEL_NO1">
										<option value="">선택</option>
                                        <option value="02">02</option>
										<option value="031">031</option>
										<option value="042">042</option>
										<option value="053">053</option>
										<option value="062">062</option>
										<option value="053">053</option>
										<option value="051">051</option>
										<option value="033">033</option>
										<option value="032">032</option>
										<option value="064">064</option>
										<option value="041">041</option>
										<option value="043">043</option>
										<option value="054">054</option>
										<option value="055">055</option>
										<option value="063">063</option>
										<option value="061">061</option>
                                    </select>
                                    <input type="text" name="TEL_NO2" id="TEL_NO2" class="text number" maxlength="4" /> - 
                                    <input type="text" name="TEL_NO3" id="TEL_NO3" class="text number" maxlength="4"/>
									</c:otherwise>
								</c:choose>
								</td>
								<th><span>이메일</span></th>
								<td>
								<c:choose>
								<c:when test="${commandMap.MEM_EDIT eq 'E' and not empty dtlData.EMAIL_ADDR }">
								<c:set var="EMAIL_ADDR" value="${fn:split(dtlData.EMAIL_ADDR,'@')}"/>
									<input type="text" name="EMAIL_ID" id="EMAIL_ID" class="text" maxlength="15" value="${EMAIL_ADDR[0]}"/> @
                                    <input type="text" name="EMAIL_DOMAIN" id="EMAIL_DOMAIN" class="text" maxlength="15" value="${EMAIL_ADDR[1]}"/>
                                    <select class="select" name="emailDomain" id="emailDomain">
                                        <option value="">직접입력</option>
                                        <option value="naver.com">naver.com</option>
                                            <option value="hanmail.net">hanmail.net</option>
                                            <option value="daum.net">daum.net</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="nate.com">nate.com</option>
                                            <option value="hotmail.com">hotmail.com</option>
                                            <option value="yahoo.co.kr">yahoo.co.kr</option>
                                            <option value="yahoo.com">yahoo.com</option>
                                            <option value="dreamwiz.com">dreamwiz.com</option>
                                      </select>
									</c:when>
									<c:otherwise>
									<input type="text" name="EMAIL_ID" id="EMAIL_ID" class="text" maxlength="15" /> @
                                    <input type="text" name="EMAIL_DOMAIN" id="EMAIL_DOMAIN" class="text" maxlength="15"/>
                                    <select class="select" name="emailDomain" id="emailDomain">
                                        <option value="">직접입력</option>
                                        <option value="naver.com">naver.com</option>
                                            <option value="hanmail.net">hanmail.net</option>
                                            <option value="daum.net">daum.net</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="nate.com">nate.com</option>
                                            <option value="hotmail.com">hotmail.com</option>
                                            <option value="yahoo.co.kr">yahoo.co.kr</option>
                                            <option value="yahoo.com">yahoo.com</option>
                                            <option value="dreamwiz.com">dreamwiz.com</option>
                                      </select>
									</c:otherwise>
									</c:choose>
								</td>
							</tr>							
						</tbody>
					</table>
					
					
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>배송지 정보</span></h3>
                    </div>
					<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
							<div class="text-right">
                            <input type="checkbox" id="DLVPLC_SAME" name="DLVPLC_SAME" class="radio" >
							<input type="hidden" id="DLVPLC_ID" name="DLVPLC_ID" value="${dtlData.DLVPLC_ID}">
							<input type="hidden" id="BASIS_DLVPLC_YN" name="BASIS_DLVPLC_YN" value="Y">
							<input type="hidden" id="PRF_DLVPLC_YN" name="PRF_DLVPLC_YN" value="Y">
						</div>
					</div>
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>우편번호</span></th>
								<td>
									<input type="text" name="D_ZPCD" id="D_ZPCD" class="text searchBzplc" value="${dtlData.D_ZPCD}" readonly />
									<a href="javascript:searchZipCodeMem('D_ZPCD', 'D_REPR_ADDR', 'D_DTL_ADDR', '')" class="icon search2 bzplcPopup"></a>
								</td>
								<th><span>주소</span></th>
								<td>
									<input type="text" name="D_REPR_ADDR" id="D_REPR_ADDR" class="text searchBzplc" value="${dtlData.D_REPR_ADDR}" readonly />
								</td>
								<th><span>상세주소</span></th>
								<td>
									<input type="text" name="D_DTL_ADDR" id="D_DTL_ADDR" class="text searchBzplc" value="${dtlData.D_DTL_ADDR}"  />
								</td>
							</tr>
							<tr>
								<th><span>연락처</span></th>
								<td>
									<c:choose>
								<c:when test="${commandMap.MEM_EDIT eq 'E' and not empty dtlData.D_MP_NO }">
								<c:set var="D_MP_NO" value="${fn:split(dtlData.D_MP_NO,'-')}"/>
									<select class="select" name="D_MP_NO1" id="D_MP_NO1">
                                        <option value="">선택</option>
                                        <option value="010" ${D_MP_NO[0] eq '010' ? 'selected="selected"' : ''}>010</option>
                                            <option value="011" ${D_MP_NO[0] eq '011' ? 'selected="selected"' : ''}>011</option>
                                            <option value="016" ${D_MP_NO[0] eq '016' ? 'selected="selected"' : ''}>016</option>
                                            <option value="017" ${D_MP_NO[0] eq '017' ? 'selected="selected"' : ''}>017</option>
                                            <option value="018" ${D_MP_NO[0] eq '018' ? 'selected="selected"' : ''}>018</option>
                                            <option value="019" ${D_MP_NO[0] eq '019' ? 'selected="selected"' : ''}>019</option>
                                            </select>
                                    <input type="text" name="D_MP_NO2" id="D_MP_NO2" class="text number" value="${D_MP_NO[1]}" maxlength="4"/> - 
                                    <input type="text" name="D_MP_NO3" id="D_MP_NO3" class="text number" value="${D_MP_NO[2]}" maxlength="4"/>
									</c:when>
									<c:otherwise>
									<select class="select" name="D_MP_NO1" id="D_MP_NO1">
                                        <option value="">선택</option>
                                        <option value="010">010</option>
                                            <option value="011">011</option>
                                            <option value="016">016</option>
                                            <option value="017">017</option>
                                            <option value="018" >018</option>
                                            <option value="019">019</option>
                                            </select>
                                    <input type="text" name="D_MP_NO2" id="D_MP_NO2" class="text number" value="" maxlength="4"/> - 
                                    <input type="text" name="D_MP_NO3" id="D_MP_NO3" class="text number" value="" maxlength="4"/>
									</c:otherwise>
									</c:choose>
								</td>
								<th><span>연락처2</span></th>
								<td>
									<c:choose>
								<c:when test="${commandMap.MEM_EDIT eq 'E' and not empty dtlData.D_TEL_NO }">
								<c:set var="D_TEL_NO" value="${fn:split(dtlData.D_TEL_NO,'-')}"/>
									<select class="select" name="D_TEL_NO1" id="D_TEL_NO1"  >
                                        <option value="">선택</option>
                                        <option value="02" ${D_TEL_NO[0] eq '02' ? 'selected="selected"' : ''}>02</option>
                                            <option value="031" ${D_TEL_NO[0] eq '031' ? 'selected="selected"' : ''}>031</option>
                                            <option value="042" ${D_TEL_NO[0] eq '042' ? 'selected="selected"' : ''}>042</option>
                                            <option value="053" ${D_TEL_NO[0] eq '053' ? 'selected="selected"' : ''}>053</option>
                                            <option value="062" ${D_TEL_NO[0] eq '062' ? 'selected="selected"' : ''}>062</option>
                                            <option value="053" ${D_TEL_NO[0] eq '053' ? 'selected="selected"' : ''}>053</option>
                                            <option value="051" ${D_TEL_NO[0] eq '051' ? 'selected="selected"' : ''}>051</option>
                                            <option value="033" ${D_TEL_NO[0] eq '033' ? 'selected="selected"' : ''}>033</option>
                                            <option value="032" ${D_TEL_NO[0] eq '032' ? 'selected="selected"' : ''}>032</option>
                                            <option value="064" ${D_TEL_NO[0] eq '064' ? 'selected="selected"' : ''}>064</option>
                                            <option value="041" ${D_TEL_NO[0] eq '041' ? 'selected="selected"' : ''}>041</option>
                                            <option value="043" ${D_TEL_NO[0] eq '043' ? 'selected="selected"' : ''}>043</option>
                                            <option value="054" ${D_TEL_NO[0] eq '054' ? 'selected="selected"' : ''}>054</option>
                                            <option value="055" ${D_TEL_NO[0] eq '055' ? 'selected="selected"' : ''}>055</option>
                                            <option value="063" ${D_TEL_NO[0] eq '063' ? 'selected="selected"' : ''}>063</option>
                                            <option value="061" ${D_TEL_NO[0] eq '061' ? 'selected="selected"' : ''}>061</option>
                                            </select>
                                    <input type="text" name="D_TEL_NO2" id="D_TEL_NO2" class="text number" value="${D_TEL_NO[1]}" maxlength="4" /> - 
                                    <input type="text" name="D_TEL_NO3" id="D_TEL_NO3" class="text number" value="${D_TEL_NO[2]}" maxlength="4"/>
									</c:when>
									<c:otherwise>
									<select class="select" name="D_TEL_NO1" id="D_TEL_NO1"  >
										<option value="">선택</option>
                                        <option value="02">02</option>
										<option value="031">031</option>
										<option value="042">042</option>
										<option value="053">053</option>
										<option value="062">062</option>
										<option value="053">053</option>
										<option value="051">051</option>
										<option value="033">033</option>
										<option value="032">032</option>
										<option value="064">064</option>
										<option value="041">041</option>
										<option value="043">043</option>
										<option value="054">054</option>
										<option value="055">055</option>
										<option value="063">063</option>
										<option value="061">061</option>
                                     </select>
                                    <input type="text" name="D_TEL_NO2" id="D_TEL_NO2" class="text number" maxlength="4" /> - 
                                    <input type="text" name="D_TEL_NO3" id="D_TEL_NO3" class="text number" maxlength="4"/>
									</c:otherwise>
								</c:choose>
								</td>
								<th><span></span></th>
								<td>
								</td>
							</tr>							
						</tbody>
					</table>
					
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>제어 권한 관리</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 15%;" />
							<col style="width: 25%;" />
							<col style="width: 15%;" />
							<col style="width: 45%;" />
						</colgroup>
						<tbody>						
							<tr>
								<th><span>결제 권한</span></th>
								<td>
									<input type="radio" id="APRV_AUTH_USE_YN_Y" name="APRV_AUTH_USE_YN" class="radio" value="Y" ${dtlData.APRV_AUTH_USE_YN eq 'Y' ? 'checked="checked"' : ''}/>
									<label for="APRV_AUTH_USE_YN_Y">예</label>
									<input type="radio" id="APRV_AUTH_USE_YN_N" name="APRV_AUTH_USE_YN" class="radio" value="N" ${dtlData.APRV_AUTH_USE_YN eq 'N' ? 'checked="checked"' : ''}/>
									<label for="APRV_AUTH_USE_YN_N">아니오</label>
								</td>
								<th><span>발주 권한</span></th>
								<td>
									<input type="radio" id="ORD_AUTH_USE_YN_Y" name="ORD_AUTH_USE_YN" class="radio" value="Y" ${dtlData.ORD_AUTH_USE_YN eq 'Y' ? 'checked="checked"' : ''} />
									<label for="ORD_AUTH_USE_YN_Y">예</label>
									<input type="radio" id="ORD_AUTH_USE_YN_N" name="ORD_AUTH_USE_YN" class="radio" value="N" ${dtlData.ORD_AUTH_USE_YN eq 'N' ? 'checked="checked"' : ''} />
									<label for="ORD_AUTH_USE_YN_N">아니오</label>
								</td>
							</tr>
							<tr>
								<th><span>세금계산서 담당</span></th>
								<td>
									<input type="radio" id="TAXINV_AUTH_USE_YN_Y" name="TAXINV_AUTH_USE_YN" class="radio" value="Y"  ${dtlData.TAXINV_AUTH_USE_YN eq 'Y' ? 'checked="checked"' : ''}/>
									<label for="TAXINV_AUTH_USE_YN_Y">예</label>
									<input type="radio" id="TAXINV_AUTH_USE_YN_N" name="TAXINV_AUTH_USE_YN" class="radio" value="N"  ${dtlData.TAXINV_AUTH_USE_YN eq 'N' ? 'checked="checked"' : ''}/>
									<label for="TAXINV_AUTH_USE_YN_N">아니오</label>
								</td>
								<th><span>UCESSDI ID</span></th>
								<td>
									<input type="text" name="UCESSDI_ID" id="UCESSDI_ID" class="text" maxlength="10" value="${dtlData.UCESSDI_ID}" />
                                    <a href="#none" id="idCheck" class="button button-c small" disabled="disabled"><span>중복확인</span></a>
									<input type="hidden" id="ucessdiIdCheckYn" value="" /> 
									<input type="hidden" id="ucessdiId" value="" />
								</td>
							</tr>	
							<tr>
								<th><span>입고권한</span></th>
								<td colspan="3">
									<select class="select" name="GI_AUTH_USE_CD" id="GI_AUTH_USE_CD">
										<c:forEach var="giCodeListV" items="${giCodeList }" varStatus="cx">
											<option value="${giCodeListV.DTL_CD}" ${dtlData.GI_AUTH_USE_CD eq giCodeListV.DTL_CD ? 'selected="selected"' : ''}>${giCodeListV.DTL_CD_NM}</option>
										</c:forEach>
									</select>
								</td>
							</tr>		
							<tr>
								<th><span>관리권한</span></th>
								<td colspan="3">
									<select class="select" name="MNG_AUTH_USE_CD" id="MNG_AUTH_USE_CD">
										<c:forEach var="mngCodeListV" items="${mngCodeList }" varStatus="cx">
											<option value="${mngCodeListV.DTL_CD}" ${dtlData.MNG_AUTH_USE_CD eq mngCodeListV.DTL_CD ? 'selected="selected"' : ''}>${mngCodeListV.DTL_CD_NM}</option>
										</c:forEach>
									</select>
									<a href="javascript:oprUntMultiPopup('frm', 'mngOprUntId');" id="mngCheck" class="button button-c small"><span>운영단위설정</span></a>
										<a href="javascript:multiTextPopup('mngOprUntId');" class="icon doc textPopup"></a>
										<input type="text" id="mngOprUntId" name="mngOprUntId" class="text searchText" value="" />
								</td>
							</tr>
							<tr>
								<th><span>예산권한</span></th>
								<td colspan="3">
									<select class="select" name="BGT_AUTH_USE_CD" id="BGT_AUTH_USE_CD">
										<c:forEach var="bgtCodeListV" items="${bgtCodeList }" varStatus="cx">
											<option value="${bgtCodeListV.DTL_CD}" ${dtlData.MNG_AUTH_USE_CD eq bgtCodeListV.DTL_CD ? 'selected="selected"' : ''}>${bgtCodeListV.DTL_CD_NM}</option>
										</c:forEach>
									</select>
									<a href="javascript:oprUntMultiPopup('frm', 'bgtOprUntId');" id=bgtCheck" class="button button-c small"><span>운영단위설정</span></a>
										<a href="javascript:multiTextPopup('bgtOprUntId');" class="icon doc textPopup"></a>
										<input type="text" id="bgtOprUntId" name="bgtOprUntId" class="text searchText" value="" />
								</td>
							</tr>	
							<tr>
								<th><span>정산권한</span></th>
								<td colspan="3">
									<select class="select" name="ADJ_AUTH_USE_CD" id="ADJ_AUTH_USE_CD">
										<c:forEach var="adjCodeListV" items="${adjCodeList }" varStatus="cx">
											<option value="${adjCodeListV.DTL_CD}" ${dtlData.ADJ_AUTH_USE_CD eq adjCodeListV.DTL_CD ? 'selected="selected"' : ''}>${adjCodeListV.DTL_CD_NM}</option>
										</c:forEach>
									</select>
									<a href="javascript:oprUntMultiPopup('frm', 'adjOprUntId');" id="adjCheck" class="button button-c small"><span>운영단위설정</span></a>
									<a href="javascript:multiTextPopup('adjOprUntId');" class="icon doc textPopup"></a>
										<input type="text" id="adjOprUntId" name="adjOprUntId" class="text searchText" value="" />

								</td>
							</tr>					
						</tbody>
					</table>
					
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>결제자 관리</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-col table-b"><!-- table -->		
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
								<th>사업장 ID</th>
								<th>사업장 명</th>
								<th>부서 ID</th>
								<th>결재 차수</th>
								<th>회원 ID</th>
								<th>회원명</th>
								<th>결제자 추가</th>
							</tr>
						</thead>
						<tbody>
						<c:choose>
							<c:when test="${not empty aprvpsnList }">
								<c:forEach var="aprvpsnList" items="${aprvpsnList }" varStatus="cx">
							<tr>
								<td><input type="text" id="APRVPSN_BZPLC_ID${cx.index}" name="APRVPSN_BZPLC_ID" value="${aprvpsnList.APRVPSN_BZPLC_ID}"  readonly/></td>
								<td><input type="text" id="APRVPSN_BZPLC_NM${cx.index}" name="APRVPSN_BZPLC_NM" value="${aprvpsnList.APRVPSN_BZPLC_NM}" readonly/></td>
								<td><input type="text" id="APRVPSN_DEPT_ID${cx.index}" name="APRVPSN_DEPT_ID" value="${aprvpsnList.APRVPSN_DEPT_ID}" readonly/></td>
								<td>
								<input type="text" id="APRVPSN_APRV_STP_NM${cx.index}" name="APRVPSN_APRV_STP_NM" value="${aprvpsnList.APRVPSN_APRV_STP_NM}" readonly/>
								<input type="hidden" id="APRVPSN_APRV_STP_CD${cx.index}" name="APRVPSN_APRV_STP_CD" value="${aprvpsnList.APRVPSN_APRV_STP_CD}" readonly/>
								</td>
								<td><input type="text" id="APRVPSN_APRVPSN_ID${cx.index}" name="APRVPSN_APRVPSN_ID" value="${aprvpsnList.APRVPSN_APRVPSN_ID}" readonly/></td>
								<td><input type="text" id="APRVPSN_APRVPSN_NM${cx.index}" name="APRVPSN_APRVPSN_NM" value="${aprvpsnList.APRVPSN_APRVPSN_NM}" readonly/><a href="#" class="icon search2 bzplcPopup"></a></td>
								<c:if test="${cx.index == 0}">
								<td><a href="#none" id="addAprRow" class="button button-c small"><span>행추가</span></a></td>
								</c:if>
								<c:if test="${cx.index > 0}">
								<td><a href="#none" id="delAprRow" class="button button-c small"><span>행삭제</span></a></td>
								</c:if>
							</tr>
								</c:forEach>
							  </c:when>
						   <c:otherwise>
							<tr>
								<td><input type="text" id="APRVPSN_BZPLC_ID0" name="APRVPSN_BZPLC_ID" readonly/></td>
								<td><input type="text" id="APRVPSN_BZPLC_NM0" name="APRVPSN_BZPLC_NM" readonly/></td>
								<td><input type="text" id="APRVPSN_DEPT_ID0" name="APRVPSN_DEPT_ID" readonly/></td>
								<td>
								<input type="text" id="APRVPSN_APRV_STP_NM0" name="APRVPSN_APRV_STP_NM" readonly/>
								<input type="hidden" id="APRVPSN_APRV_STP_CD0" name="APRVPSN_APRV_STP_CD" readonly/>
								</td>
								<td><input type="text" id="APRVPSN_APRVPSN_ID0" name="APRVPSN_APRVPSN_ID" readonly/></td>
								<td><input type="text" id="APRVPSN_APRVPSN_NM0" name="APRVPSN_APRVPSN_NM" readonly/><a href="#" class="icon search2 bzplcPopup"></a></td>
								<td><a href="#none" id="addAprRow" class="button button-c small"><span>행추가</span></a></td>
							</tr>	
						   </c:otherwise>
					    </c:choose>
						</tbody>
					</table>
					

					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>발주자 관리</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-col table-b"><!-- table -->		
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
								<th>사업장 ID</th>
								<th>사업장 명</th>
								<th>부서 ID</th>
								<th>결재 차수</th>
								<th>회원 ID</th>
								<th>회원명</th>
								<th>결제자 추가</th>
							</tr>
						</thead>
						<tbody>
						<c:choose>
							<c:when test="${not empty oprUntOpsnList }">
								<c:forEach var="oprUntOpsnList" items="${oprUntOpsnList }" varStatus="cx">
							<tr>
								<td><input type="text" id="OPSN_BZPLC_ID${cx.index}" name="OPSN_BZPLC_ID" value="${oprUntOpsnList.OPSN_BZPLC_ID}"  readonly/></td>
								<td><input type="text" id="OPSN_BZPLC_NM${cx.index}" name="OPSN_BZPLC_NM" value="${oprUntOpsnList.OPSN_BZPLC_NM}" readonly/></td>
								<td><input type="text" id="OPSN_DEPT_ID${cx.index}" name="OPSN_DEPT_ID" value="${oprUntOpsnList.OPSN_DEPT_ID}" readonly/></td>
								<td>
									<select class="select" name="OPSN_APRV_STP_CD" id="OPSN_APRV_STP_CD${cx.index}">
                                        <option value="01" ${oprUntOpsnList.OPSN_APRV_STP_CD eq '01' ? 'selected="selected"' : ''}>1치</option>
										<option value="02" ${oprUntOpsnList.OPSN_APRV_STP_CD eq '02' ? 'selected="selected"' : ''}>2차</option>
										<option value="03" ${oprUntOpsnList.OPSN_APRV_STP_CD eq '03' ? 'selected="selected"' : ''}>3차</option>
										<option value="04" ${oprUntOpsnList.OPSN_APRV_STP_CD eq '04' ? 'selected="selected"' : ''}>4차</option>
										<option value="05" ${oprUntOpsnList.OPSN_APRV_STP_CD eq '05' ? 'selected="selected"' : ''}>5차</option>
                                    </select>
								</td>
								<td><input type="text" id="OPSN_OPSN_ID${cx.index}" name="OPSN_OPSN_ID" value="${oprUntOpsnList.OPSN_OPSN_ID}" readonly/></td>
								<td><input type="text" id="OPSN_OPSN_NM${cx.index}" name="OPSN_OPSN_NM" value="${oprUntOpsnList.OPSN_OPSN_NM}" readonly/><a href="#" class="icon search2 bzplcPopup"></a></td>
								
								<c:if test="${cx.index == 0}">
								<td><a href="#none" id="addOpsnRow" class="button button-c small"><span>행추가</span></a></td>
								</c:if>
								<c:if test="${cx.index > 0}">
								<td><a href="#none" id="delOpsnRow" class="button button-c small"><span>행삭제</span></a></td>
								</c:if>
							</tr>
								</c:forEach>
							  </c:when>
						   <c:otherwise>
							<tr>
								<td><input type="text" id="OPSN_BZPLC_ID0" name="OPSN_BZPLC_ID" readonly/></td>
								<td><input type="text" id="OPSN_BZPLC_NM0" name="OPSN_BZPLC_NM" readonly/></td>
								<td><input type="text" id="OPSN_DEPT_ID0" name="OPSN_DEPT_ID" readonly/></td>
								<td>
									<select class="select" name="OPSN_APRV_STP_CD" id="OPSN_APRV_STP_CD0">
                                        <option value="01">1치</option>
                                        <option value="02">2차</option>
										<option value="03">3차</option>
										<option value="04">4차</option>
										<option value="05">5차</option>
                                    </select>
								</td>
								<td><input type="text" id="OPSN_OPSN_ID0" name="OPSN_OPSN_ID" readonly/></td>
								<td><input type="text" id="OPSN_OPSN_NM0" name="OPSN_OPSN_NM" readonly/><a href="#" class="icon search2 bzplcPopup"></a></td>
								
								<td><a href="#none" id="addOpsnRow" class="button button-c small"><span>행추가</span></a></td>
							</tr>	
						   </c:otherwise>
					    </c:choose>
						</tbody>
					</table>
					

					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>첨부 파일</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 40%;" />
							<col style="width: 10%;" />
							<col style="width: 40%;" />
						</colgroup>
						<tbody>	
					<tr>
						<th scope="row"><label class="label"><span>첨부파일</span></label></th>
						<td colspan="3">
							<input type="file" name="file" class="file hide test001" data-view="fileView" data-type="NOR" multiple="multiple">
							<a href="javascript:void(0);" onclick="$(this).prev().click();" class="button small primary"><span>파일첨부(일반)</span></a>
							<small class="desc"><strong class="em warning">10MB</strong> 미만의 파일 최대 <strong class="em warning">10개</strong>까지 등록 할 수 있습니다.</small>

							<div id="fileView" class="mt10" style="border: solid 1px #d0d0d0; min-height: 50px;">
								<ul style="padding: 5px;">
									<c:choose>
										<c:when test="${not empty fileList }">
											<c:forEach items="${fileList }" var="fileRow" varStatus="i">
												<li data-file-sn="${fileRow.fileSeq }">
													<i class="icon-file" aria-hidden="true"></i>
													<span class="file-list-title"><c:out value="${fileRow.orignlFileNm }" />
														<input type="hidden" name="fileSeq" value="${fileRow.fileSeq }"/>
														<input type="hidden" name="orignlFileNm" value="${fileRow.orignlFileNm }" />
														<input type="hidden" name="attachFileSavePath" value="${fileRow.attachFileSavePath }" />
													</span>
													<span class="pull-right"><fmt:formatNumber value="${(fileRow.fileSz+0.01) div (1024+0.01)}" pattern=".00" />KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>
												</li>
											</c:forEach>
										</c:when>
										<c:otherwise>
										</c:otherwise>
									</c:choose>
								</ul>
							</div>
							<!-- hidden Area -->
							<input type="hidden" name="delFileSeq" value="" />
						</td>
					</tr>
					</tbody>
					</table>
					</c:when>
					<c:otherwise>
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>주소 정보</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>우편번호</span></th>
								<td>
									${dtlData.WPLC_ZPCD}
								</td>
								<th><span>주소</span></th>
								<td>
									${dtlData.WPLC_REPR_ADDR}
								</td>
								<th><span>상세주소</span></th>
								<td>
									${dtlData.WPLC_DTL_ADDR}
								</td>
							</tr>
							<tr>
								<th><span>연락처</span></th>
								<td>
								${dtlData.MP_NO}								
								</td>
								<th><span>연락처2</span></th>
								<td>
								${dtlData.TEL_NO}								
								</td>
								<th><span>이메일</span></th>
								<td>
								${dtlData.EMAIL_ADDR}								
								</td>
							</tr>							
						</tbody>
					</table>
					
					
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>배송지 정보</span></h3>
                    </div>

					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>우편번호</span></th>
								<td>
								${dtlData.D_ZPCD}
								</td>
								<th><span>주소</span></th>
								<td>
									${dtlData.D_REPR_ADDR}
								</td>
								<th><span>상세주소</span></th>
								<td>
									${dtlData.D_DTL_ADDR}
								</td>
							</tr>
							<tr>
								<th><span>연락처</span></th>
								<td>
								${dtlData.D_MP_NO}								
								</td>
								<th><span>연락처2</span></th>
								<td>
								${dtlData.D_TEL_NO}								
								</td>
								<th><span></span></th>
								<td>
								</td>
							</tr>							
						</tbody>
					</table>
					
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>제어 권한 관리</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 15%;" />
							<col style="width: 25%;" />
							<col style="width: 15%;" />
							<col style="width: 45%;" />
						</colgroup>
						<tbody>						
							<tr>
								<th><span>결제 권한</span></th>
								<td>
								${dtlData.APRV_AUTH_USE_YN eq 'Y' ? '예' : '아니오'}
								</td>
								<th><span>발주 권한</span></th>
								<td>
								${dtlData.ORD_AUTH_USE_YN eq 'Y' ? '예' : '아니오'}
								</td>
							</tr>
							<tr>
								<th><span>세금계산서 담당</span></th>
								<td>
								${dtlData.TAXINV_AUTH_USE_YN eq 'Y' ? '예' : '아니오'}
								</td>
								<th><span>UCESSDI ID</span></th>
								<td>
									${dtlData.UCESSDI_ID}
								</td>
							</tr>	
							<tr>
								<th><span>입고권한</span></th>
								<td colspan="3">
								${dtlData.GI_AUTH_USE_NM}
								</td>
							</tr>		
							<tr>
								<th><span>관리권한</span></th>
								<td colspan="3">
								${dtlData.MNG_AUTH_USE_NM} | 운영단위설정
								</td>
							</tr>
							<tr>
								<th><span>예산권한</span></th>
								<td colspan="3">
								${dtlData.BGT_AUTH_USE_NM} | 운영단위설정
								</td>
							</tr>	
							<tr>
								<th><span>정산권한</span></th>
								<td colspan="3">
								${dtlData.ADJ_AUTH_USE_NM} | 운영단위설정
								</td>
							</tr>					
						</tbody>
					</table>
					
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>결제자 관리</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-col table-b"><!-- table -->		
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
								<th>사업장 ID</th>
								<th>사업장 명</th>
								<th>부서 ID</th>
								<th>결재 차수</th>
								<th>회원 ID</th>
								<th>회원명</th>
							</tr>
						</thead>
						<tbody>
						<c:choose>
							<c:when test="${not empty aprvpsnList }">
								<c:forEach var="aprvpsnList" items="${aprvpsnList }" varStatus="cx">
							<tr>
								<td>${aprvpsnList.APRVPSN_BZPLC_ID}</td>
								<td>${aprvpsnList.APRVPSN_BZPLC_NM}</td>
								<td>${aprvpsnList.APRVPSN_DEPT_ID}</td>
								<td>${aprvpsnList.APRVPSN_APRV_STP_NM}</td>
								<td>${aprvpsnList.APRVPSN_APRVPSN_ID}</td>
								<td>${aprvpsnList.APRVPSN_APRVPSN_NM}</td>
							</tr>
								</c:forEach>
							  </c:when>
						   <c:otherwise>
							<tr>
								<td colspan="6"></td>
							</tr>	
						   </c:otherwise>
					    </c:choose>
						</tbody>
					</table>
					

					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>발주자 관리</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-col table-b" ><!-- table -->		
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
								<th>사업장 ID</th>
								<th>사업장 명</th>
								<th>부서 ID</th>
								<th>결재 차수</th>
								<th>회원 ID</th>
								<th>회원명</th>
							</tr>
						</thead>
						<tbody>
						<c:choose>
							<c:when test="${not empty oprUntOpsnList }">
								<c:forEach var="oprUntOpsnList" items="${oprUntOpsnList }" varStatus="cx">
							<tr>
								<td>${oprUntOpsnList.OPSN_BZPLC_ID}</td>
								<td>${oprUntOpsnList.OPSN_BZPLC_NM}</td>
								<td>${oprUntOpsnList.OPSN_DEPT_ID}</td>
								<td>${oprUntOpsnList.OPSN_APRV_STP_NM}</td>
								<td>${oprUntOpsnList.OPSN_OPSN_ID}</td>
								<td>${oprUntOpsnList.OPSN_OPSN_NM}</td>
							</tr>
								</c:forEach>
							  </c:when>
						   <c:otherwise>
							<tr>
								<td colspan="6"></td>
							</tr>	
						   </c:otherwise>
					    </c:choose>
						</tbody>
					</table>
					

					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>첨부 파일</span></h3>
                    </div>
					
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 40%;" />
							<col style="width: 10%;" />
							<col style="width: 40%;" />
						</colgroup>
						<tbody>	
					<tr>
						<th><label class="label"><span>첨부파일</span></label></th>
						<tr>
							<th scope="row"><label class="label"><span>첨부파일</span></label></th>
							<td colspan="3">
								<div id="fileView" class="mt10" style="border: solid 1px #d0d0d0; min-height: 50px;">
									<ul style="padding: 5px;">
										<c:choose>
											<c:when test="${not empty fileList }">
												<c:forEach items="${fileList }" var="fileRow" varStatus="i">
													<li data-file-sn="${fileRow.fileSeq }">
														<i class="icon-file" aria-hidden="true"></i>
														<span class="file-list-title"><c:out value="${fileRow.orignlFileNm }" />
															<input type="hidden" name="fileSeq" value="${fileRow.fileSeq }"/>
															<input type="hidden" name="orignlFileNm" value="${fileRow.orignlFileNm }" />
															<input type="hidden" name="attachFileSavePath" value="${fileRow.attachFileSavePath }" />
														</span>
														<span class="pull-right"><fmt:formatNumber value="${(fileRow.fileSz+0.01) div (1024+0.01)}" pattern=".00" />KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>
													</li>
												</c:forEach>
											</c:when>
											<c:otherwise>
											</c:otherwise>
										</c:choose>
									</ul>
								</div>
								<!-- hidden Area -->
								<input type="hidden" name="delFileSeq" value="" />
							</td>
						</tr>
					</tr>
					</tbody>
					</table>
					</c:otherwise>
				</c:choose>
				</c:if>
					
					<c:if test="${commandMap.MEM_EDIT ne 'N'}">
					<div class="section-title"><!-- section-title -->
                            <h3 class="title"><span>이력 정보</span></h3>
                    </div>
					<c:choose>						
						<c:when test="${ commandMap.MEM_EDIT eq 'E' || commandMap.MEM_EDIT eq 'D'}">
					<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
							<div class="text-right">
								<a href="#none" id="BTN_HIS" class="button small"><span>전체이력보기</span></a>                   
							</div>
					</div>
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 40%;" />
							<col style="width: 10%;" />
							<col style="width: 40%;" />
						</colgroup>
						<tbody>	
							<tr>
								<th><label class="label"><span>최초 등록</span></label></th>
								<td>
									${dtlData.REGPSN_ID}
								</td>
								<th><label class="label"><span>등록 일시</span></label></th>
								<td>
									${dtlData.REG_DTM}
								</td>
							</tr>
							<tr>
								<th><label class="label"><span>최종 수정</span></label></th>
								<td>
									${dtlData.UPDPSN_ID}
								</td>
								<th><label class="label"><span>수정 일시</span></label></th>
								<td>
									${dtlData.UPD_DTM}
								</td>
							</tr>
						</tbody>
					</table>					
						</c:when>
						<c:otherwise>
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 40%;" />
							<col style="width: 10%;" />
							<col style="width: 40%;" />
						</colgroup>
						<tbody>	
							<tr>
								<th><label class="label"><span>탈퇴 일시</span></label></th>
								<td>
									${dtlData.UPD_DTM}
								</td>
								<th><label class="label"><span>탈퇴 사유</span></label></th>
								<td>
									-
								</td>
							</tr>							
						</tbody>
					</table>
						</c:otherwise>
					</c:choose>				
					</c:if>
					
					<c:choose>
						<c:when test="${commandMap.MEM_EDIT eq 'N' || commandMap.MEM_EDIT eq 'E'}">
					<div class="section-button-list">
						<div class="wrap text-center">
							<a href="javascript:goMemList();" class="button large"><span>취소</span></a>
							<a href="javascript:goRegist1();" class="button large primary"><span>${commandMap.SAVE_BT_NM}</span></a>
						</div>
					</div>
						</c:when>
						<c:otherwise>
					<div class="section-button-list">
						<div class="wrap text-center">
							<a href="javascript:history.back();" class="button large"><span>목록</span></a>
						</div>
					</div>
						</c:otherwise>
					</c:choose>					
					</div>
					<c:if test="${commandMap.MEM_EDIT eq 'E' || commandMap.MEM_EDIT eq 'D' }">
					<!--##########################################주문이력 시작###########################################################-->
					<div id="tab2" style="display:none;">
					주문이력
					</div>
					<!--##########################################주문이력 끝###########################################################-->
					
					<!--##########################################보유쿠폰 시작###########################################################-->
					<div id="tab3" style="display:none;">
					보유쿠폰
					</div>
					<!--##########################################보유쿠폰 끝###########################################################-->
					
					<!--##########################################이벤트 시작###########################################################-->
					<div id="tab4" style="display:none;">
					이벤트
					</div>
					<!--##########################################이벤트 끝###########################################################-->
					</c:if>
				</form>

				
			</div>
		</div>
	</div>
</div>

<div id="footer">
	<%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>

<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>

<script src="/am/js/common/jquery.ajax.js"></script>
<script>
//*******************************************************************************************************//
$(function(){
	
	// tab 변경 
        $("#menuViewTab").on("click", "a", function () {
            
            var this_tab_no = $(this).data('tab_no');
            
            $(this).parent().parent().find('a').each( function(i,item){
                if( this_tab_no == $(item).data("tab_no") ){
                    $("#"+$(item).data("tab_no")).show();
                    $(item).parent().attr("class","in");    
                }   
                else{
                    $("#"+$(item).data("tab_no")).hide();
                    $(item).parent().attr("class","");
                }
            });
        });

		// 폼체크
    $("#frm").validate({
        rules: {
            LOGIN_ID:{required:true, engOrNum:true, minlength:4, maxlength:10 }, // 아이디
			/*
            ADM_MST_NM:{required:true}, // 관리자 명
            ADM_MST_PWD:{required:true, engOrNum:true, minlength:4, maxlength:10}, // 관리자 비밀번호
            AUT_MST_IDX:{required:true}, // 권한 Index
            ADM_MST_HP1:{required:true, number:true}, // 핸드폰 번호 앞 자리
            ADM_MST_HP2:{required:true, number:true, minlength:3, maxlength:4}, // 핸드폰 번호 중간 자리
            ADM_MST_HP3:{required:true, number:true, minlength:4, maxlength:4}, // 핸드폰 번호 끝 자리
            ADM_MST_TEL1:{required:false}, // 전화번호 앞 자리
            ADM_MST_TEL2:{required:false, number:true, minlength:3, maxlength:4}, // 전화번호 중간 자리
            ADM_MST_TEL3:{required:false, number:true, minlength:4, maxlength:4}, // 전화번호 끝 자리
            ADM_MST_EMAIL_ID:{required:true , emailId:true, maxlength:20}, // 이메일 아이디
            ADM_MST_EMAIL_DOMAIN:{required:true, emailDomain:true, maxlength:20}, // 이메일 도메인
            ADM_MST_ERP_NO:{required:true}  // 사번
			*/
        },
        messages :{
			
            LOGIN_ID : {engOrNum : "4~10자의 영문, 숫자만 사용할 수 있습니다."},
			/*
            ADM_MST_PWD : {engOrNum : "4~10자의 영문, 숫자만 사용할 수 있습니다."},
            ADM_MST_HP1 : {required:"첫 자리는 필수선택 사항입니다."},
            ADM_MST_HP2 : {required:"중간 자리는 필수입력 사항입니다.", number:"중간 자리는 숫자만 입력해 주십시오."},
            ADM_MST_HP3 : {required:"끝 자리는 필수입력 사항입니다.", number:"끝 자리는 숫자만 입력해 주십시오."},
            ADM_MST_TEL2 : {number:"중간 자리는 숫자만 입력해 주십시오."},
            ADM_MST_TEL3 : {number:"끝 자리는 숫자만 입력해 주십시오."},
            ADM_MST_EMAIL_ID : {required:"아이디는 필수입력 사항입니다.", emailId:"아이디의 형식에 맞게 입력해 주십시오."},
            ADM_MST_EMAIL_DOMAIN : {required:"도메인은 필수입력 사항입니다.", emailDomain:"도메인의 형식에 맞게 입력해 주십시오."},
            ADM_MST_ERP_NO:{required:"필수입력 사항입니다."}
			*/
        }
    });
	
	
	 // 아이디 중복 체크
    $(document).on("click", "#idCheck", function () {
        var $obj = $("#LOGIN_ID");
        var value = $obj.val();
        
        $("#checkId").val($obj.val());  // 중복체크한 id 
        
        if(value == "")
        {
            alert("[아이디]는 필수입력 사항입니다.");
            $obj.focus();
            return;
        }
        else
        {
            var pattern = /^[0-9a-zA-Z]{4,10}$/;
            if(!pattern.test(value))
            {
                alert("4~10자의 영문, 숫자만 사용할 수 있습니다.");
                $obj.focus();
                return;
            }
            else
            {
                $.ajax({
                    async : false,
                    type : "POST",
                    data : {"LOGIN_ID":$("#LOGIN_ID").val()},
                    url : "<c:out value="${serverDomain}" />/am/cst/mmbMng/idregcheck.json",
                    success : function (data) {
						console.log(JSON.stringify(data));
                        if(data.model.resultCheck.EXIST_YN != null && data.model.resultCheck.EXIST_YN != "" )
                        {
                            if(data.model.resultCheck.EXIST_YN == "N")
                            {
                                alert("이미 사용중인 아이디 입니다.");
								$obj.focus();
								$("#idCheckYn").val("N");
								return;
                            }
                            else
                            {
                                alert("사용가능한 아이디 입니다.");
								$obj.focus();
								$("#idCheckYn").val("Y");
								return;
                            }
                            
                            
                        }
                        else
                        {
                            alert("데이터 전송중 데이터가 누락 되었습니다.\n다시 시도해 주십시오.");
                            return;
                        }
                    },
                    error : function () {
                        alert("데이터 오류 입니다. 다시 시도 해 주십시오.");
                    }
                });
            }
        }
    });
	
	// 도메인 변경 이벤트
    $(document).on("change", "#emailDomain", function () {
        var $obj = $("#EMAIL_DOMAIN");
        var value = $(this).val();
        if(value == "") 
        {
            $obj.removeAttr("readonly");    
        }
        else
        {
            $obj.attr("readonly", "readonly");
        }
        
        $obj.val($(this).val());
        
    });
    
    // 등록 이벤트
    $(document).on("click", "#goRegist", function () {
        var $frm = $("#frm"); 
        
        if($frm.valid()){
            
            // 권한이 입점업체일 경우 상호/법인명을 선택하지 않은 경우
            if($("#AUT_MST_IDX").val() == "30"){
                if($("#ADM_MST_SUB_IDX").val() == ""){
                    alert("[입점업체]를 선택해 주십시오.");
                    $("#ADM_MST_SUB_IDX").focus();
                    return;
                }
            }
            //업무구분 
            if($("#ADM_MST_TYPE").val() == ""){
                alert("[업무구분]은 필수선택 사항입니다.");
                $("#ADM_MST_TYPE").focus();
                return;
            }
            
            var $chkObj = $("#idCheckYn");
            var $obj = $("#idCheck");
            if($chkObj.val() == "Y")
            {
                if($("#checkId").val() == $("#ADM_MST_ID").val()){
                    if (confirm( "저장 하시겠습니까?")) {
                        $("#frm").attr({"action":"http://localhost:8080/am/site/basicManagerRegist.do", "target":"_self", "method":"post"}).submit();
                    }                   
                }   
                else{
                    alert("아이디 중복을 확인해 주십시오.");
                    $obj.focus();
                    return;
                }
            }
            else if($chkObj.val() == "N")
            {
                if($("#checkId").val() == $("#ADM_MST_ID").val()){
                alert("이미 사용중인 아이디 입니다.");
                $obj.focus();
                return;
                }
                else{
                    alert("아이디 중복을 확인해 주십시오.");
                    $obj.focus();
                    return; 
                }
            }
            else
            {
                alert("아이디 중복을 확인해 주십시오.");
                $obj.focus();
                return;
            }
        }
    });
	
	
	/*********************************************************************************************************
	 * 첨부파일	START
	 *********************************************************************************************************/
	 var fCnt = 0;
	// 파일 첨부 이벤트
	$("input[type=file].test001").off("change").on("change" , function(){
		// 첨부한 파일 데이터
		var fData = $(this)[0].files;

		// 파일리스트 영역
		var fileView = $(this).data('view');
		var fileType = $(this).data('type');
		console.log('fileView,fileType\n',fileView,fileType);

		if(fileView == null && fileView == ''){
			console.log('target data-view Error');
			return;
		}

		// 파일 용량 및 수량 제한
		var oLen = $("#"+fileView+" ul li").length;
		var nLen = fData.length;
		if((oLen + nLen) > 10){
			alert("첨부파일 수량이 초과되었습니다.");
			return false;
		}
		var sizeFlag = false;
		Array.from(fData).forEach(function(data,idx){
			if(data.size > (10*1024*1024)){
				sizeFlag = true;
			}
		});
		if(sizeFlag){
			alert("첨부파일 용량이 초과되었습니다.");
			return false;
		}

		console.log('aa',$("#"+fileView+" ul"));

		// 파일리스트 추가
		Array.from(fData).forEach(function(data,idx){
			var po = '';
// 			console.log('idx_'+idx,data);
			var fSize = (data.size / 1024).toFixed(2);
			var fId = 'file['+fCnt+']';

			po += '<li data-file-sn="">';
			po += '	<i class="icon-file"></i>';
			po += '	<span>'+data.name+'</span>';
			po += '	<input type="file" name="files" id="'+fId+'" class="hidden" />';
			po += '	<input type="hidden" name="fileSeq" value="" />';
			po += '	<input type="hidden" name="fileCdId" value="'+fileType+'" />';
			po += '	<span class="pull-right">'+fSize+'KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>';
			po += '</li>';

			$("#"+fileView+" ul").append(po);

			// 파일 데이터 전달
			var dataTransfer = new DataTransfer();
			dataTransfer.items.add(data);
			document.getElementById(fId).files = dataTransfer.files;

			console.log('document.getElementById(fId).files',document.getElementById(fId).files);

			// 전체 파일 수량 증가
			fCnt++;

		});
		// 초기화
		$(this).val("");
	});

	// 파일 삭제 클릭 이벤트
	fileDelete = function(obj){
		var $target = $(obj).closest('li');
		var $targetFrm = $(obj).closest('form');
		var $delFileSeq = $targetFrm.find('input[name=delFileSeq]');

		console.log('targetFrm,delFileSeq',$targetFrm,$delFileSeq)

		// 삭제대상 파일ID 등록
		var delFileSeq = $target.data('fileSeq');
		if(delFileSeq != null && delFileSeq != ''){
			var fileSeq = $delFileSeq.val();
			if(fileSeq != ''){
				fileSeq += ',';
			}
			fileSeq += delFileSeq;
			$delFileSeq.val(fileSeq);
		}
		// 파일리스트 삭제
		$target.remove();
	};

	// 파일 다운로드
	$(document).on("click", "#fileView .file-list-title", function () {
		var newForm = $('<form></form>');

		var inputs = $(this).find("input:hidden");
		for(var i = 0 ; i < inputs.length; i++){
			var po = '<input type="hidden" name="'+$(inputs[i]).attr("name")+'" value="'+$(inputs[i]).val()+'" />';
			newForm.append(po);
		}
		console.log("newForm",newForm);

		newForm.attr({"action":"<c:out value="${serverDomain}" />/am/common/commonFileDownload.do", "target":"_self", "method":"post"});
		newForm.appendTo('body');
		newForm.submit();
	});
	/*********************************************************************************************************
	 * 첨부파일	END
	 *********************************************************************************************************/
//**************************************************************************************************************//		

//**************************************************************************************************************//
});

function goMemList()	{	
	if(confirm("취소하시겠습니까?")){
			history.back();
	}
};

//**************************************************************************************************************//
//******************************우편번호찾기 시작************************************************//
//**************************************************************************************************************//
function searchZipCodeMem(postCode, address, detailAddress, extraAddress) {
	jQuery.ajax({
		url: "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",
		type: "get",
		dataType: "script",
		cache: true,
		success: function() {
			execPostCodeMem(postCode, address, detailAddress, extraAddress);
		}
	});
}

function execPostCodeMem(postCode, address, detailAddress, extraAddress) {
	new daum.Postcode({
        oncomplete: function(data) {	// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            var addr = '';		// 주소 변수
            var extraAddr = ''; // 참고항목 변수
			
            // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            // R : 도로명주소, J : 지번주소
            if (data.userSelectedType === 'R') {
                addr = data.roadAddress;
            } else {
                addr = data.jibunAddress;
            }
            
            // 참고항목 정보
            if("" != extraAddress) {
            	// 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
	            if(data.userSelectedType === 'R'){
	                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
	                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
	                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
	                    extraAddr += data.bname;
	                }
	                // 건물명이 있고, 공동주택일 경우 추가한다.
	                if(data.buildingName !== '' && data.apartment === 'Y'){
	                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
	                }
	                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
	                if(extraAddr !== ''){
	                    extraAddr = ' (' + extraAddr + ')';
	                }
	                // 조합된 참고항목을 해당 필드에 넣는다.
	                document.getElementById(extraAddress).value = extraAddr;
	            } else {
	                document.getElementById(extraAddress).value = '';
	            }
            }
            
            // 우편번호 정보를 해당 필드에 넣는다.
            if("" != postCode) {
            	document.getElementById(postCode).value = data.zonecode;
            }
            
            // 주소 정보를 해당 필드에 넣는다.
            if("" != address) {
            	document.getElementById(address).value = addr;
            }
            
           	if("" != detailAddress) {
           		// 커서를 상세주소 필드로 이동한다.
            	document.getElementById(detailAddress).focus();
           	}
        }
    }).open();
}    

//**************************************************************************************************************//
//******************************우편번호찾기 끝************************************************//
//**************************************************************************************************************//
</script>

</body>
</html>