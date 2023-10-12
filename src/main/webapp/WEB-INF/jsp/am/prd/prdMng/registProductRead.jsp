<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css">
	th, td {
		height:25px;
	}
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
				<h2 class="title"><span>등록상품 상세</span></h2>
				<h3 class="title"><span>상품 기본 정보</span></h3>
				
				<form id="searchForm">
					<input type="hidden" id="inputCoCd" name="inputCoCd" value="${info.coCd }" />
					<input type="hidden" id="inputPrdId" name="inputPrdId" value="${info.prdId }" />
					<input type="hidden" id="changeSpec" name="changeSpec" />
					<input type="hidden" id="changeNoti" name="changeNoti" />
					<input type="hidden" id="inputUseYn" name="inputUseYn" value="${info.useYn }" />
					<input type="hidden" id="inputAttrVal" name="inputAttrVal" value="${info.attrVal }" />

					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 25%;" />
							<col style="width: 10%;" />
							<col style="width: 25%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>상품ID</span></th>
								<td>
									${info.prdId }
								</td>
								<th><span>대표상품ID</span></th>
								<td>
									${info.intgPrdId }
								</td>
								<th><span>대표상품그룹ID</span></th>
								<td>
									${info.ingtPrdGrpId }
								</td>
							</tr>
							<tr>
								<th><span>상품명</span></th>
								<td colspan="3">
									${info.prdNm }
								</td>
								<th><span>S-MRO 상품상태</span></th>
								<td>
									<c:if test="${info.useStatsCd eq '00' }">사용</c:if>
									<c:if test="${info.useStatsCd eq '10' }">휴면화</c:if>
									<c:if test="${info.useStatsCd eq '20' }">종결</c:if>
								</td>
							</tr>
							<tr>
								<th><span>대표규격</span></th>
								<td colspan="3">
									${info.reprSpec },${info.attrVal }
								</td>
								<th><span>공용전용구분</span></th>
								<td>
									<c:if test="${info.sspOnlySpr eq '41' }">공용</c:if>
									<c:if test="${info.sspOnlySpr eq '42' }">전용</c:if>
								</td>
							</tr>
							<tr>
								<th><span>주문단위</span></th>
								<td>
									${info.odrUnt }
								</td>
								<th><span>제조원</span></th>
								<td>
									(${info.mnfrNo })${info.mnfrNm }
								</td>
								<th><span>원산지</span></th>
								<td>
									(${info.orgplcCd })${info.orgplcNm }
								</td>
							</tr>
							<tr>
								<th><span>배수주문수량</span></th>
								<td>
									${info.multiOdrUnt }
								</td>
								<th><span>SSP 상품상태</span></th>
								<td>
									<c:if test="${info.useStatsCd eq '10' or info.useStatsCd eq '20' }">
										<input type="radio" class="radio" id="inputUseYn1" name="inputUseYn" value="Y" disabled="disabled" />
										<label for="inputUseYn1">사용</label>
										<input type="radio" class="radio" id="inputUseYn2" name="inputUseYn" value="N" checked="checked" disabled="disabled" />
										<label for="inputUseYn2">미사용</label>
									</c:if>
									<c:if test="${info.useStatsCd eq '00' }">
										<input type="radio" class="radio" id="checkUseYn1" name="checkUseYn" onclick="javascript:checkUse(this);" value="Y" <c:if test="${info.useYn eq 'Y' }">checked="checked"</c:if> />
										<label for="checkUseYn1">사용</label>
										<input type="radio" class="radio" id="checkUseYn2" name="checkUseYn" onclick="javascript:checkUse(this);" value="N" <c:if test="${info.useYn eq 'N' }">checked="checked"</c:if>/>
										<label for="checkUseYn2">미사용</label>
									</c:if>
								</td>
								<%-- <td colspan="2" id="noUse" <c:if test="${info.useYn eq 'Y' }">style="display:none;"</c:if>>
										(미사용 사유
										<select class="select large" id="inputNoUseCd" name="inputNoUseCd">
											<option value="">선택</option>
											<c:if test="${not empty noUseCodeList }">
												<c:forEach items="${noUseCodeList }" var="item" varStatus="status">
													<option value="${item.cmnComIdx }" <c:if test="${info.nuseRsnCd eq item.cmnComIdx }">selected</c:if> >${item.cmnComNm }</option>
												</c:forEach>
											</c:if>
										</select>
										)
								</td> --%>
							</tr>
							<tr>
								<th><span>카테고리킬러구분</span></th>
								<td>
									SSP
								</td>
								<th><span>대표상품그룹등록일</span></th>
								<td>
									<c:set var="intgRegDtm" value="${info.intgRegDtm }" />
									<c:if test="${intgRegDtm ne '' and intgRegDtm ne null }">
										${fn:substring(intgRegDtm, 0, 4) }-${fn:substring(intgRegDtm, 4, 6) }-${fn:substring(intgRegDtm, 6, 8) }&nbsp;
										${fn:substring(intgRegDtm, 8, 10) }:${fn:substring(intgRegDtm, 10, 12) }:${fn:substring(intgRegDtm, 12, 14) }
									</c:if>
								</td>
								<th><span>SSP등록일</span></th>
								<td>
									<c:set var="sspRegDtm" value="${info.sspRegDtm }" />
									${fn:substring(sspRegDtm, 0, 4) }-${fn:substring(sspRegDtm, 4, 6) }-${fn:substring(sspRegDtm, 6, 8) }&nbsp;
									${fn:substring(sspRegDtm, 8, 10) }:${fn:substring(sspRegDtm, 10, 12) }:${fn:substring(sspRegDtm, 12, 14) }
								</td>
							</tr>
							<tr>
								<th><span>SSP최종수정일</span></th>
								<td>
									<c:set var="sspUpdDtm" value="${info.sspUpdDtm }" />
									<c:if test="${sspUpdDtm ne '' and sspUpdDtm ne null }">
										${fn:substring(sspUpdDtm, 0, 4) }-${fn:substring(sspUpdDtm, 4, 6) }-${fn:substring(sspUpdDtm, 6, 8) }&nbsp;
										${fn:substring(sspUpdDtm, 8, 10) }:${fn:substring(sspUpdDtm, 10, 12) }:${fn:substring(sspUpdDtm, 12, 14) }
									</c:if>
								</td>
								<th><span></span></th>
								<td></td>
								<th><span></span></th>
								<td></td>
							</tr>
						</tbody>
					</table>

					<div class="grid">
						<div class="col-1-2 text-left">
							<h3 class="title"><span>S-MRO 카테고리 / 속성 정보</span></h3>
							<table cellspacing="0" class="table-row table-a">
								<colgroup>
									<col style="width: 20%;" />
									<col style="width: 80%;" />
								</colgroup>
								<tbody>
									<tr>
										<th><span>카테고리</span></th>
										<td>
											(${info.prdClsCd })${info.prdClsLvlNmSmro }
										</td>
									</tr>
									<tr>
										<th><span>속성</span></th>
										<td>
											<table cellspacing="0" class="table-col table-a">
												<colgroup>
													<col style="width: 50%;" />
													<col style="width: 50%;" />
												</colgroup>
												<thead>
													<tr>
														<th><span>속성명</span></th>
														<th><span>속성값</span></th>
													</tr>
												</thead>
												<tbody>
													<c:forEach items="${smroSpecList }" var="item" varStatus="status">
														<tr>
															<td>
																${item.prnm }
															</td>
															<td>
																${item.prvl }
															</td>
														</tr>
													</c:forEach>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col-1-2 text-right">
							<h3 class="title" style="text-align: left !important;"><span>SSP 카테고리 / SSP 속성 정보</span></h3>
							<table cellspacing="0" class="table-row table-a">
								<colgroup>
									<col style="width: 20%;" />
									<col style="width: 80%;" />
								</colgroup>
								<tbody>
									<tr>
										<th><span>카테고리</span></th>
										<td>
											<select class="select xlarge" id="inputPrdClsCd" name="inputPrdClsCd">
												<c:forEach items="${sspCategoryList }" var="item" varStatus="status">
													<option value="${item.prdClsCd }" <c:if test="${item.prdClsCd eq info.prdClsCd }">selected</c:if>>(${item.prdClsCd })${item.prdClsLvlNm }</option>
												</c:forEach>
											</select>
										</td>
									</tr>
									<tr>
										<th><span>속성</span></th>
										<td>
											<table cellspacing="0" class="table-col table-a">
												<colgroup>
													<col style="width: 50%;" />
													<col style="width: 50%;" />
												</colgroup>
												<thead>
													<tr>
														<th><span>속성명(<i class="require"><em>필수입력</em></i>필수)</span></th>
														<th><span>속성값</span></th>
													</tr>
												</thead>
												<tbody id="sspSpec">
													<c:forEach items="${sspSpecList }" var="item" varStatus="status">
														<tr>
															<td>
																${item.attrNm }<c:if test="${item.mandYn eq 'Y' }"><i class="require"><em>필수입력</em></i></c:if>
															</td>
															<td>
																<input type="text" class="text xlarge" id="inputPrvl" name="inputPrvl" value="${item.prvl }" <c:if test="${item.mandYn eq 'Y' }">data-require="Y"</c:if> />
																<input type="hidden" id="inputAttrCd" name="inputAttrCd" value="${item.attrCd }" />
															</td>
														</tr>
													</c:forEach>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="grid">
						<div class="col-1-2 text-left">
							<h3 class="title"><span>S-MRO 부가 정보</span></h3>
							<table cellspacing="0" class="table-row table-a">
								<colgroup>
									<col style="width: 20%;" />
									<col style="width: 30%;" />
									<col style="width: 20%;" />
									<col style="width: 30%;" />
								</colgroup>
								<tbody>
									<tr>
										<th><span>Hub취급가능여부</span></th>
										<td>
										</td>
										<th><span>표준배송L/T</span></th>
										<td>
										</td>
									</tr>
									<tr>
										<th><span>화학물질여부</span></th>
										<td>
										</td>
										<th><span>자사허가여부</span></th>
										<td>
										</td>
									</tr>
									<tr>
										<th><span>유해화학물질여부</span></th>
										<td colspan="3">
											
										</td>
									</tr>
									<tr>
										<th><span>과면세구분</span></th>
										<td>
										</td>
										<th><span>재고여부</span></th>
										<td>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col-1-2 text-right">
							<h3 class="title" style="text-align: left !important;"><span>SSP 부가 정보</span></h3>
							<table cellspacing="0" class="table-row table-a">
								<colgroup>
									<col style="width: 20%;" />
									<col style="width: 15%;" />
									<col style="width: 65%;" />
								</colgroup>
								<tbody>
									<tr>
										<th><span>브랜드명</span></th>
										<td colspan="2">
											<input type="text" class="text xlarge" id="inputBrndNm" name="inputBrndNm" value="${info.brndNm }" />
										</td>
									</tr>
									<tr>
										<th><span>해시Tag</span></th>
										<td colspan="2">
											<input type="text" class="text xlarge" id="inputHashTag" name="inputHashTag" value="${info.hashTag }" />
										</td>
									</tr>
									<tr>
										<th><span>배지적용</span></th>
										<td id="badgeImage">
											<c:if test="${info.prdBgCd ne null }">
												<img alt="${info.fileCts }" src="<c:url value='/am/common/display.do?attachFileSavePath=${info.fileStorPath }${info.storFileNm }' />" />
											</c:if>
										</td>
										<td>
											<select class="select" id="inputPrdBgCd" name="inputPrdBgCd" >
												<option value="">선택</option>
												<c:forEach items="${badgeList }" var="item" varStatus="status">
													<option value="${item.prdBgCd }" data-fileCts="${item.fileCts }" data-fileStorPath="${item.fileStorPath }" data-storFileNm="${item.storFileNm }" <c:if test="${info.prdBgCd eq item.prdBgCd }">selected</c:if> >${item.prdBgNm }</option>
												</c:forEach>
											</select>
											<br><br>
											<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
											<input type="text" class="text small" id="searchStartDate" name="searchStartDate" value="${info.bgAplStrDtm }" readonly="readonly" data-target-end="#searchEndDate" />
											~
											<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
											<input type="text" class="text small" id="searchEndDate" name="searchEndDate" value="${info.bgAplEndDtm }" readonly="readonly" data-target-start="#searchStartDate" />
											
											&nbsp;&nbsp;
											<input type="checkbox" class="checkbox" id="noBadgeDate" name="noBadgeDate" />
											<label for="noBadgeDate">제한없음</label> 
										</td>
									</tr>
									<tr>
										<th><span>전시상품구분</span></th>
										<td colspan="2">
											
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="grid">
						<h3 class="title"><span>시리즈그룹 상품 정보</span></h3>
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: 10%;" />
								<col style="width: auto;" />
								<col style="width: 10%;" />
								<col style="width: auto;" />
								<col style="width: 10%;" />
								<col style="width: auto;" />
							</colgroup>
							<tbody>
								<tr>
									<th rowspan="2"><span>시리즈상품</span></th>
									<th><span>그룹ID</span></th>
									<td>
									</td>
									<th><span>그룹명</span></th>
									<td>
									</td>
									<th><span>그룹생성일</span></th>
									<td>
									</td>
								</tr>
								<tr>
									<td colspan="6">
										<table cellspacing="0" class="table-row table-a">
											<colgroup>
												<col style="width: 10%;" />
												<col style="width: 10%;" />
												<col style="width: 30%;" />
												<col style="width: 40%;" />
												<col style="width: 10%;" />
											</colgroup>
											<thead>
												<tr>
													<th><span>번호</span></th>
													<th><span>상품ID</span></th>
													<th><span>상품명</span></th>
													<th><span>대표규격</span></th>
													<th><span>주문단위</span></th>
												</tr>
											</thead>
											<tbody>
											
											</tbody>
										</table>
									</td>
								</tr>
								<tr>
									<th rowspan="2"><span>연관상품</span></th>
									<th><span>그룹ID</span></th>
									<td>
									</td>
									<th><span>그룹명</span></th>
									<td>
									</td>
									<th><span>그룹생성일</span></th>
									<td>
									</td>
								</tr>
								<tr>
									<td colspan="6">
										<table cellspacing="0" class="table-row table-a">
											<colgroup>
												<col style="width: 10%;" />
												<col style="width: 10%;" />
												<col style="width: 30%;" />
												<col style="width: 40%;" />
												<col style="width: 10%;" />
											</colgroup>
											<thead>
												<tr>
													<th><span>번호</span></th>
													<th><span>상품ID</span></th>
													<th><span>상품명</span></th>
													<th><span>대표규격</span></th>
													<th><span>주문단위</span></th>
												</tr>
											</thead>
											<tbody>
												
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<c:if test="${not empty imageList }">
						<div>
							<h3 class="title"><span>이미지 정보</span></h3>
							<div>
								<c:forEach items="${imageList }">
									<div>
										<img alt="" src="" />
									</div>
								</c:forEach>
							</div>
						</div>
					</c:if>

					<h3 class="title"><span>상품 상세 설명</span></h3>
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 100%;" />
						</colgroup>
						<tbody>
							<tr>
								<td>
									<textarea class="textarea" id="inputPrdDtlDesc" name="inputPrdDtlDesc"  style="height: 500px; width:80%;">${info.prdDtlDesc }</textarea>
								</td>
							</tr>
						</tbody>
					</table>

					<h3 class="title"><span>담당자 정보</span></h3>
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 40%;" />
							<col style="width: 10%;" />
							<col style="width: 40%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>상품정보담당자</span></th>
								<td>
									<c:if test="${info.chrpsnId ne null }">
										(${info.chrpsnId })${info.chrpsnNm }
									</c:if>
								</td>
								<th><span>구매담당자</span></th>
								<td>
									(${info.chrMdId })${info.chrMdNm }
								</td>
							</tr>
						</tbody>
					</table>

					<div class="tab-list" id="menuViewTab">
						<ul>
							<li class="in"><a href="#none" data-tab_no="tab4">가격정보</a></li>
							<li><a href="#none" data-tab_no="tab1">화학물질정보</a></li>
							<li><a href="#none" data-tab_no="tab2">상품인증정보</a></li>
							<li><a href="#none" data-tab_no="tab3">상품고시정보</a></li>
						</ul>
					</div>

					<div id="tab4">
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: %;" />
								<col style="width: %;" />
								<col style="width: %;" />
								<col style="width: %;" />
								<col style="width: %;" />
								<col style="width: %;" />
							</colgroup>
							<tbody>
								<tr>
									<th><span>SSP기준가</span></th>
									<td>
									</td>
									<th><span>시장최저판매가</span></th>
									<td>
									</td>
									<th><span>List Price</span></th>
									<td>
									</td>
								</tr>
								<tr>
									<th><span>가격대상</span></th>
									<td colspan="5">
										<select class="select" id="" name="">
											<option value="">선택</option>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div id="tab1" style="display:none;">
						<h3 class="title"><span>화학물질정보</span></h3>
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: %;" />
								<col style="width: %;" />
								<col style="width: %;" />
								<col style="width: %;" />
								<col style="width: %;" />
								<col style="width: %;" />
								<col style="width: %;" />
								<col style="width: %;" />
								<col style="width: %;" />
								<col style="width: %;" />
							</colgroup>
							<thead>
								<tr>
									<th rowspan="2" style="text-align:center;"><span>화학물질명</span></th>
									<th rowspan="2" style="text-align:center;"><span>CAS No.</span></th>
									<th colspan="5" style="text-align:center;"><span>유해하학물질여부</span></th>
									<th colspan="3" style="text-align:center;"><span>함량(%)</span></th>
								</tr>
								<tr>
									<th style="text-align:center;"><span>유독물질</span></th>
									<th style="text-align:center;"><span>제한물질</span></th>
									<th style="text-align:center;"><span>사고대비물질</span></th>
									<th style="text-align:center;"><span>금지물질</span></th>
									<th style="text-align:center;"><span>허가물질</span></th>
									<th style="text-align:center;"><span>From</span></th>
									<th style="text-align:center;"><span>To</span></th>
									<th style="text-align:center;"><span>평균</span></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>

					<div id="tab2" style="display:none;">
						<h3 class="title"><span>상품인증정보</span></h3>
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 20%;" />
								<col style="width: 20%;" />
								<col style="width: 20%;" />
								<col style="width: 20%;" />
								<col style="width: 20%;" />
							</colgroup>
							<tbody>
								<tr>
									<th rowspan="2"><span>인증정보(KC인증 등)</span></th>
									<th><span>인증마크</span></th>
									<th><span>인증구분</span></th>
									<th><span>인증번호</span></th>
									<th><span>첨부파일</span></th>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>

					<div id="tab3" style="display:none;">
						<h3 class="title"><span>상품정보제공 고시 품목</span></h3>
						<table class="table-row table-a">
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: 90%;" />
							</colgroup>
							<tbody>
								<tr>
									<th><span>품목</span></th>
									<td>
										<input type="text" class="text" id="noticeInfo" <c:if test="${info.notiId ne null }">value="(${info.notiId }) ${info.notiNm }"</c:if> />
										<input type="hidden" id="inputNotiId" name="inputNotiId" value="${info.notiId }" />
										<a href="javascript:openProductNoticePopup();" class="icon search2"></a>
									</td>
								</tr>
							</tbody>
						</table>
						
						<div id="productNoticeDetail" <c:if test="${empty notiList }">style="display:none;"</c:if>>
							<h3 class="title"><span>상품정보제공 고시 상세</span></h3>
							<table class="table-row table-a">
								<colgroup>
									<col style="width: 20%;" />
									<col style="width: 80%;" />
								</colgroup>
								<tbody id="noticeDetail">
									<c:if test="${not empty notiList }">
										<c:forEach items="${notiList }" var="item" varStatus="status">
											<tr>
												<th><span>${item.notiTtl }</span></th>
												<td>
													<input type="hidden" id="inputNotiInfoId" name="inputNotiInfoId" value="${item.notiInfoId }" />
													<input type="text" class="text" id="inputNotiCts" name="inputNotiCts" value="${item.notiCts }" />
												</td>
											</tr>
										</c:forEach>
									</c:if>
								</tbody>
							</table>
						</div>
					</div>
				</form>

				<div class="section-button-list">
					<div class="wrap text-center">
						<a href="javascript:goList();" class="button"><span>목록</span></a>
						<a href="javascript:goEdit();" class="button primary"><span>저장</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="quickmenu" class="aside right">
		<%@ include file="/WEB-INF/jsp/am/include/quick.jsp" %>
	</div>
</div>

<div id="footer">
	<%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>

<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>

<script src="/am/js/common/jquery.ajax.js"></script>
<ui:editor objId="#inputPrdDtlDesc"/>
<script>
$(function(){
	var $searchForm = $("#searchForm");

	$(document).on("input", "input[name='inputPrvl']", function(){
		console.log("spec change");
		$("#changeSpec").val("Y");
	});

	$(document).on("input", "input[name='inputNotiCts']", function(){
		console.log("noti change");
		$("#changeNoti").val("Y");
	});

	checkUse = function(id){
		$("#inputUseYn").val($(id).val());
		if($(id).val() == "Y"){
			console.log("use");
			$("#noUse").hide();
			$("#inputNoUseCd").val("");
		}else{
			console.log("no use");
			$("#noUse").show();
		}
	}

	$("#inputPrdClsCd").on("change", function(){
		var ssp = $(this).val();
		if(ssp != ""){
			$.ajax({
				url : "<c:out value="${serverDomain}" />/am/prd/prdNew/sspSpecList.json",
				type : "post",
				dataType : "json",
				data : { "searchPrdClsCd" : ssp },
				success : function(list){
					var html = '';
					$.each(list, function(index, item){
						html += '<tr>';
						html += '<td>' + item.attrNm;
						if(item.mandYn == "Y"){
							html += '<i class="require"><em>필수입력</em></i>';
						}
						html += '</td>';
						html += '<td>';
						html += '<input type="text" class="text xlarge" id="inputPrvl" name="inputPrvl"';
						if(item.mandYn == "Y"){
							html += 'data-require="Y"';
						}
						html += ' />';
						html += '<input type="hidden" id="inputAttrCd" name="inputAttrCd" value="' + item.attrCd + '" />';
						html += '<input type="hidden" id="inputAttrSeq" name="inputAttrSeq" value="' + index + 1 + '" />';
						html += '</td>';
						html += '</tr>';
					});
					$("#sspSpec").html(html);
					$("#changeSpec").val("Y");
				},
				error : function(){
					
				}
			});
		} else {
			alert("");
		}
	});

	$("#inputPrdBgCd").on("change", function(){
		var html = '';
		var fileCts = $(this).find("option:selected").data("filects");
		var fileStorPath = $(this).find("option:selected").data("filestorpath");
		var storFileNm = $(this).find("option:selected").data("storfilenm");

		console.log(fileCts);
		console.log(fileStorPath);
		console.log(storFileNm);
		if($(this).val() != ""){
			html = '<img alt="' + fileCts + '" src="/am/common/display.do?attachFileSavePath=' + fileStorPath + storFileNm + '" />';
		}

		$("#badgeImage").html(html);
	});

	$("#menuViewTab").on("click", "a", function(){
		var this_tab_no = $(this).data('tab_no');

		$(this).parent().parent().find('a').each(function(i, item){
			if( this_tab_no == $(item).data("tab_no") ){
				$("#" + $(item).data("tab_no")).show();
				$(item).parent().attr("class","in");    
			}else{
				$("#" + $(item).data("tab_no")).hide();
				$(item).parent().attr("class","");
			}
		});
	});

	openProductNoticePopup = function(){
		productNoticePopup('searchForm');
	}

	fnResultNotice = function(object){
		$("#noticeInfo").val("(" + object.notiId + ") " + object.notiNm);
		$("#inputNotiId").val(object.notiId);

		$.ajax({
			url : "<c:out value="${serverDomain}" />/am/prd/prdNew/productNoticeInfoList.json",
			type : "post",
			dataType : "json",
			data : {"notiId" : object.notiId},
			success : function(list){
				var html = '';
				$.each(list, function(index, item){
					html += '<tr>';
					html += '<th><span>' + item.notiTtl + '</span></th>';
					html += '<td>';
					html += '<input type="hidden" id="inputNotiInfoId" name="inputNotiInfoId" value="' + item.notiInfoId + '" />';
					html += '<input type="text" class="text xlarge" id="inputNotiCts" name="inputNotiCts" />';
					html += '</td>';
					html += '</tr>';
				});
				$("#productNoticeDetail").show();
				$("#noticeDetail").html(html);
				$("#changeNoti").val("Y");
			},
			error : function(){
				
			}
		});
	}

	goEdit = function(){
		console.log("update");
		var attrVal = "";
		var miss = 0;

		$("input[name='inputPrvl']").each(function(index){
			if($(this).val() != ""){
				attrVal += $(this).val() + ";";
			}else{
				if($(this).data("require") == "Y"){
					miss++;
				}
			}
		});

		if(miss > 0){
			alert("필수 정보 미입력");
			return;
		}

		attrVal = attrVal.slice(0,-1);
		$("#inputAttrVal").val(attrVal);

		if($("#noBadgeDate").is(":checked")){
			$("#searchStartDate").val("");
			$("#searchEndDate").val("");
		}

		try { oEditors.getById["inputPrdDtlDesc"].exec("UPDATE_CONTENTS_FIELD", []);	 } catch(e){ }

		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/prd/prdMng/registProductEdit.do", "target":"_self", "method":"post"}).submit();
	}
});
</script>
</body>
</html>
