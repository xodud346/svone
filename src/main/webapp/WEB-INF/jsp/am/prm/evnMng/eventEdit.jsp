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
				<h2 class="title"><span>이벤트 관리</span></h2>

				<form id="frm" name="frm" enctype="multipart/form-data">
					<input type="hidden" id="_type" name="_type" value="" />
					<input type="hidden" id="evtMstIdx" name="evtMstIdx" value="${map.evtMstIdx }" />
					<input type="hidden" id="atflId" name="atflId" value="${map.atflId }" />
					<input type="hidden" id="delFileSeq" name="delFileSeq" value="" />

					<h3 class="title"><span>이벤트 상세</span></h3>

					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 30%;" />
							<col style="width: 10%;" />
							<col style="width: 40%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>이벤트 형태<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="4">
									<input type="radio" id="evtMstType1" name="evtMstType" class="radio" onclick="javascript:setEvtMstType(this);" value="2929" />
									<label for="evtMstType1">일반형</label>
									<input type="radio" id="evtMstType2" name="evtMstType" class="radio" onclick="javascript:setEvtMstType(this);" value="710" />
									<label for="evtMstType2">응모형</label>
									<input type="radio" id="evtMstType3" name="evtMstType" class="radio" onclick="javascript:setEvtMstType(this);" value="708" />
									<label for="evtMstType3">스템프</label>
								</td>
							</tr>
							<tr>
								<th><span>전시 여부<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="4">
									<input type="radio" id="evtMstDplYn1" name="evtMstDplYn" class="radio" value="Y" />
									<label for="evtMstDplYn1">전시</label>
									<input type="radio" id="evtMstDplYn2" name="evtMstDplYn" class="radio" value="N" />
									<label for="evtMstDplYn2">미전시</label>
								</td>
							</tr>
							<tr>
								<th><span>전시 기간<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="4">
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="evtMstStDt" name="evtMstStDt" readonly="readonly" data-target-end="#evtMstEdDt" placeholder="YYYY-MM-DD" value='<ui:formatDate value="${map.evtMstStDt }" pattern="yyyy-MM-dd" />' />
									~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="evtMstEdDt" name="evtMstEdDt" readonly="readonly" data-target-start="#evtMstStDt" placeholder="YYYY-MM-DD" value='<ui:formatDate value="${map.evtMstEdDt }" pattern="yyyy-MM-dd" />' />
								</td>
							</tr>
							<tr>
								<th><span>당첨자 발표</span></th>
								<td colspan="2">
									<input type="radio" class="radio" onclick="javascript:setWinDisplay(this);" id="evtMstWinUseYn1" name="evtMstWinUseYn" value="Y" checked="checked" />
									<label for="evtMstWinUseYn1">발표</label>
									<input type="radio" class="radio" onclick="javascript:setWinDisplay(this);" id="evtMstWinUseYn2" name="evtMstWinUseYn" value="N" />
									<label for="evtMstWinUseYn2">미 발표</label>
								</td>
								<th class="evtWinDate"><span>당첨자 발표일</span></th>
								<td class="evtWinDate">
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text" id="evtMstWinDt" name="evtMstWinDt" readonly="readonly" data-target-end="" placeholder="YYYY-MM-DD" value='<ui:formatDate value="${map.evtMstWinDt }" pattern="yyyy-MM-dd" />' />
								</td>
							</tr>
							<tr>
								<th><span>이벤트 명<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="4">
									<input type="text" class="text-xlarge" id="evtMstTitle" name="evtMstTitle" value="${map.evtMstTitle }" />
								</td>
							</tr>
							<tr>
								<th><span>URL</span></th>
								<td>
									<a href="javascript:void(0);" onclick="goEventPage(this);" data-idx="${map.evtMstIdx }">http://www.xxx.xxx</a>
								</td>
							</tr>
							<!-- 첨부파일 변수 할당(hidden area) -->
							<c:if test="${not empty fileList }">
								<c:forEach var="fileInfo" items="${fileList }" varStatus="status">
									<c:choose>
										<c:when test="${fileInfo.fileCdId eq 'EVT_CPN'}">
											<c:set var="fileEvtCpn" value="${fileInfo }" />
										</c:when>
										<c:when test="${fileInfo.fileCdId eq 'EVT_PC_LIST' }">
											<c:set var="fileEvtPcList" value="${fileInfo }" />
										</c:when>
										<c:when test="${fileInfo.fileCdId eq 'EVT_PC_DTL' }">
											<c:set var="fileEvtPcDtl" value="${fileInfo }" />
										</c:when>
										<c:when test="${fileInfo.fileCdId eq 'EVT_MO_LIST' }">
											<c:set var="fileEvtMoList" value="${fileInfo }" />
										</c:when>
										<c:when test="${fileInfo.fileCdId eq 'EVT_MO_DTL' }">
											<c:set var="fileEvtMoDtl" value="${fileInfo }" />
										</c:when>
										<c:otherwise></c:otherwise>
									</c:choose>
								</c:forEach>
							</c:if>
							<!-- 이미지 영역 START -->
							<tr class="cpnSection" style="display: none;">
								<th rowspan="2" style="border-right:solid 1px #e9e9e9;"><span>쿠폰 설정<i class="require"><em>필수입력</em></i></span></th>
								<th><span>쿠폰 선택</span></th>
								<td colspan="3" class="cpnSection">
									<input type="hidden" id="cpnMstIdx" name="cpnMstIdx" value="${map.cpnMstIdx }" />
									<input type="text" class="text-large" id="cpnMstNm" name="cpnMstNm" readonly="readonly" value="${map.cpnMstTitle }"/>
									<a href="javascript:couponPop();" class="icon search2"></a>
								</td>
							</tr>
							<tr class="cpnSection" style="display: none;">
								<th><span>쿠폰 이미지</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file" data-view="fileView1" data-type="EVT_CPN" data-target-file-cts="fileCts1" accept="image/png" />
									<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부</span></a>
									<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
									<br>
									<div id="fileView1" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
										<ul style="padding: 5px;">
											<c:if test="${not empty fileEvtCpn }">
												<li data-file-seq="${fileEvtCpn.fileSeq }">
													<i class="icon-file" aria-hidden="true"></i>
													<span class="file-list-title"><c:out value="${fileEvtCpn.orignlFileNm }" />
														<input type="hidden" name="fileSeq" value="${fileEvtCpn.fileSeq }"/>
														<input type="hidden" name="fileCdId" value="${fileEvtCpn.fileCdId }"/>
														<input type="hidden" name="targetFileCts" value="fileCts1"/>
														<input type="hidden" name="orignlFileNm" value="${fileEvtCpn.orignlFileNm }" />
														<input type="hidden" name="attachFileSavePath" value="${fileEvtCpn.attachFileSavePath }" />
													</span>
													<span class="pull-right"><fmt:formatNumber value="${(fileEvtCpn.fileSz+0.01) div (1024+0.01)}" pattern=".00" />KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>
												</li>
											</c:if>
										</ul>
									</div>
									<br>
									<span class="mr10">대체 텍스트 : </span>
									<input type="text" name="fileCts1" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" <c:if test="${not empty fileEvtCpn }">value="${fileEvtCpn.fileCts }"</c:if> />
									<span class="nowByte">(0</span><span> / 40 Byte)</span>
								</td>
							</tr>

							<tr class="pcSection">
								<th rowspan="2" style="border-right:solid 1px #e9e9e9;"><span>[PC] 이미지<i class="require"><em>필수입력</em></i></span></th>
								<th><span>목록 이미지</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file" data-view="fileView2" data-type="EVT_PC_LIST" data-target-file-cts="fileCts2" accept="image/png" />
									<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부</span></a>
									<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
									<br>
									<div id="fileView2" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
										<ul style="padding: 5px;">
											<c:if test="${not empty fileEvtPcList}">
												<li data-file-seq="${fileEvtPcList.fileSeq }">
													<i class="icon-file" aria-hidden="true"></i>
													<span class="file-list-title"><c:out value="${fileEvtPcList.orignlFileNm }" />
														<input type="hidden" name="fileSeq" value="${fileEvtPcList.fileSeq }"/>
														<input type="hidden" name="fileCdId" value="${fileEvtPcList.fileCdId }"/>
														<input type="hidden" name="targetFileCts" value="fileCts2"/>
														<input type="hidden" name="orignlFileNm" value="${fileEvtPcList.orignlFileNm }" />
														<input type="hidden" name="attachFileSavePath" value="${fileEvtPcList.attachFileSavePath }" />
													</span>
													<span class="pull-right"><fmt:formatNumber value="${(fileEvtPcList.fileSz+0.01) div (1024+0.01)}" pattern=".00" />KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>
												</li>
											</c:if>
										</ul>
									</div>
									<br>
									<span class="mr10">대체 텍스트 : </span>
									<input type="text" name="fileCts2" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" <c:if test="${not empty fileEvtPcList }">value="${fileEvtPcList.fileCts }"</c:if> />
									<span class="nowByte">(0</span><span> / 40 Byte)</span>
								</td>
							</tr>
							<tr class="pcSection">
								<th><span>상세 이미지</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file" data-view="fileView3" data-type="EVT_PC_DTL" data-target-file-cts="fileCts3" accept="image/png" />
									<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부</span></a>
									<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
									<br>
									<div id="fileView3" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
										<ul style="padding: 5px;">
											<c:if test="${not empty fileEvtPcDtl}">
												<li data-file-seq="${fileEvtPcDtl.fileSeq }">
													<i class="icon-file" aria-hidden="true"></i>
													<span class="file-list-title"><c:out value="${fileEvtPcDtl.orignlFileNm }" />
														<input type="hidden" name="fileSeq" value="${fileEvtPcDtl.fileSeq }"/>
														<input type="hidden" name="fileCdId" value="${fileEvtPcDtl.fileCdId }"/>
														<input type="hidden" name="targetFileCts" value="fileCts2"/>
														<input type="hidden" name="orignlFileNm" value="${fileEvtPcDtl.orignlFileNm }" />
														<input type="hidden" name="attachFileSavePath" value="${fileEvtPcDtl.attachFileSavePath }" />
													</span>
													<span class="pull-right"><fmt:formatNumber value="${(fileEvtPcDtl.fileSz+0.01) div (1024+0.01)}" pattern=".00" />KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>
												</li>
											</c:if>
										</ul>
									</div>
									<br>
									<span class="mr10">대체 텍스트 : </span>
									<input type="text" name="fileCts3" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" <c:if test="${not empty fileEvtPcDtl }">value="${fileEvtPcDtl.fileCts }"</c:if> />
									<span class="nowByte">(0</span><span> / 40 Byte)</span>
								</td>
							</tr>
							<tr class="mobileSection">
								<th rowspan="2" style="border-right:solid 1px #e9e9e9;"><span>[Mobile] 이미지<i class="require"><em>필수입력</em></i></span></th>
								<th><span>목록 이미지</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file" data-view="fileView4" data-type="EVT_MO_LIST" data-target-file-cts="fileCts4" accept="image/png" />
									<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부</span></a>
									<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
									<br>
									<div id="fileView4" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
										<ul style="padding: 5px;">
											<c:if test="${not empty fileEvtMoList}">
												<li data-file-seq="${fileEvtMoList.fileSeq }">
													<i class="icon-file" aria-hidden="true"></i>
													<span class="file-list-title"><c:out value="${fileEvtMoList.orignlFileNm }" />
														<input type="hidden" name="fileSeq" value="${fileEvtMoList.fileSeq }"/>
														<input type="hidden" name="fileCdId" value="${fileEvtMoList.fileCdId }"/>
														<input type="hidden" name="targetFileCts" value="fileCts2"/>
														<input type="hidden" name="orignlFileNm" value="${fileEvtMoList.orignlFileNm }" />
														<input type="hidden" name="attachFileSavePath" value="${fileEvtMoList.attachFileSavePath }" />
													</span>
													<span class="pull-right"><fmt:formatNumber value="${(fileEvtMoList.fileSz+0.01) div (1024+0.01)}" pattern=".00" />KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>
												</li>
											</c:if>
										</ul>
									</div>
									<br>
									<span class="mr10">대체 텍스트 : </span>
									<input type="text" name="fileCts4" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" <c:if test="${not empty fileEvtMoList }">value="${fileEvtMoList.fileCts }"</c:if> />
									<span class="nowByte">(0</span><span> / 40 Byte)</span>
								</td>
							</tr>
							<tr class="mobileSection">
								<th><span>상세 이미지</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file" data-view="fileView5" data-type="EVT_MO_DTL" data-target-file-cts="fileCts5" accept="image/png" />
									<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부</span></a>
									<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
									<br>
									<div id="fileView5" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
										<ul style="padding: 5px;">
											<c:if test="${not empty fileEvtMoDtl}">
												<li data-file-seq="${fileEvtMoDtl.fileSeq }">
													<i class="icon-file" aria-hidden="true"></i>
													<span class="file-list-title"><c:out value="${fileEvtMoDtl.orignlFileNm }" />
														<input type="hidden" name="fileSeq" value="${fileEvtMoDtl.fileSeq }"/>
														<input type="hidden" name="fileCdId" value="${fileEvtMoDtl.fileCdId }"/>
														<input type="hidden" name="targetFileCts" value="fileCts2"/>
														<input type="hidden" name="orignlFileNm" value="${fileEvtMoDtl.orignlFileNm }" />
														<input type="hidden" name="attachFileSavePath" value="${fileEvtMoDtl.attachFileSavePath }" />
													</span>
													<span class="pull-right"><fmt:formatNumber value="${(fileEvtMoDtl.fileSz+0.01) div (1024+0.01)}" pattern=".00" />KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>
												</li>
											</c:if>
										</ul>
									</div>
									<br>
									<span class="mr10">대체 텍스트 : </span>
									<input type="text" name="fileCts5" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" <c:if test="${not empty fileEvtMoDtl }">value="${fileEvtMoDtl.fileCts }"</c:if> />
									<span class="nowByte">(0</span><span> / 40 Byte)</span>
								</td>
							</tr>
							<!-- 이미지 영역 END -->
							<tr>
								<th><span>유의사항</span></th>
								<td colspan="4">
									<textarea rows="7" class="textarea xlarge" name="evtMstMemo" style="resize:none;" >${map.evtMstMemo }</textarea>
								</td>
							</tr>
						</tbody>
					</table>

					<!-- 당첨자 발표 영역(class=evtWinArea) -->
					<div class="evtWinArea mt30">
						<div class="grid">
							<!-- 타이틀 -->
							<div class="col-1-2 text-left">
								<h3 class="title"><span>당첨자 발표</span></h3>
							</div>
							<!-- 버튼 -->
							<div class="col-1-2 text-right">
								<a href="javascript:etrBtn();" class="button small etrPopupBtn"><span>참여내역 조회</span></a>
							</div>
						</div>
						<!-- 당첨자 발표내용 -->
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: 90%;" />
							</colgroup>
							<tbody>
								<tr>
									<th><span>당첨자 발표</span></th>
									<td>
										<textarea class="textarea" name="evtMstWinContents" id="evtMstWinContents" style="height: 500px; width:80%;">${map.evtMstWinContents }</textarea>
									</td>
								</tr>
							</tbody>
						</table>
					</div>


					<!-- 등록자 정보 영역 -->
					<h3 class="title mt30"><span>등록 정보</span></h3>

					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 40%;" />
							<col style="width: 10%;" />
							<col style="width: 40%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>최초 등록</span></th>
								<td>
									<c:out value="${map.evtMstRegNm } | ${map.evtMstRegId }" />
								</td>
								<th><span>등록 일시</span></th>
								<td>
									<ui:formatDate value='${map.evtMstRegDt }' pattern='yyyy-MM-dd HH:mm:ss'/>
								</td>
							</tr>
							<tr>
								<th><span>최종 수정</span></th>
								<td>
									<c:choose>
										<c:when test="${map.evtMstUpdId ne null and map.evtMstUpdId ne '' }">
											<c:out value="${map.evtMstUpdNm } | ${map.evtMstUpdId }" />
										</c:when>
										<c:otherwise>-</c:otherwise>
									</c:choose>

								</td>
								<th><span>수정 일시</span></th>
								<td>
									<c:choose>
										<c:when test="${map.evtMstUpdId ne null and map.evtMstUpdId ne '' }">
											<ui:formatDate value='${map.evtMstUpdDt }' pattern='yyyy-MM-dd HH:mm:ss'/>
										</c:when>
										<c:otherwise>-</c:otherwise>
									</c:choose>
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="section-button-list">
					<div class="wrap text-center">
						<a href="javascript:goList();" class="button large"><span>취소</span></a>
						<a href="javascript:goDelete();" class="button large primary"><span>삭제</span></a>
						<a href="javascript:goRegist();" class="button large primary"><span>저장</span></a>
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
<ui:editor objId="#evtMstWinContents" />

<script src="/am/js/common/jquery.ajax.js"></script>
<script>
$(function(){
	var $pre = "";
	var $frm = $("#frm");

	pageInit = function() {
		var evtMstType = "${map.evtMstType }";				// 이벤트 유형
		var evtMstDplYn = "${map.evtMstDplYn }";			// 이벤트 전시여부
		var evtMstWinUseYn = "${map.evtMstWinUseYn }";		// 이벤트 당첨자발표여부

		// 이벤트유형 체크
		console.log("evtMstType",$('input[type=radio][name=evtMstType][value="'+evtMstType+'"]'));
		$('input[type=radio][name=evtMstType][value="'+evtMstType+'"]').prop("checked",true);
		// 쿠폰영역 & 참여내역 버튼 show hide
		if(evtMstType == '708')	{	// 708 스템프
			$(".cpnSection").show();
			$(".etrPopupBtn").show();
		} else if (evtMstType == '710') {	// 710 응모형
			$(".cpnSection").hide();
			$(".etrPopupBtn").show();
		} else {
			$(".cpnSection").hide();
			$(".etrPopupBtn").hide();
		}

		// 전시여부 체크
		console.log("evtMstDplYn",$('input[type=radio][name=evtMstDplYn][value="'+evtMstDplYn+'"]'));
		$('input[type=radio][name=evtMstDplYn][value="'+evtMstDplYn+'"]').prop("checked",true);

		// 당첨자발표 체크
		console.log("evtMstWinUseYn",$('input[type=radio][name=evtMstWinUseYn][value="'+evtMstWinUseYn+'"]'));
		$('input[type=radio][name=evtMstWinUseYn][value="'+evtMstWinUseYn+'"]').prop("checked",true);
		if(evtMstWinUseYn == 'Y') {
			// 당첨발표일
			$('.evtWinDate').show();
			// 당첨자발표Editor
			$('.evtWinArea').show();
		} else {
			// 당첨발표일
			$('.evtWinDate').hide();
			// 당첨자발표Editor
			$('.evtWinArea').hide();
		}
	}


	/* 쿠폰설정 show hide */
	setEvtMstType = function(obj){
		console.log('setEvtMstType', $(obj).val());
		var evtMstType = $(obj).val();
		if(evtMstType == '708')	{	// 708 스템프
			$(".cpnSection input").val('');
			$('.cpnSection input[name=fileCd]').val('EVT_CPN');
			$(".cpnSection").show();
		} else if (evtMstType == '710') {	// 710 응모형
			$(".cpnSection").hide();
			$(".cpnSection input").val('');
			$(".etrPopupBtn").show();
		} else {
			$(".cpnSection").hide();
			$(".cpnSection input").val('');
			$(".etrPopupBtn").hide();
		}
	}

	/* 당첨자 발표일 show hide */
	setWinDisplay = function(obj){
		console.log('setEvtMstType', $(obj).val());
		var evtMstWinUseYn = $(obj).val();
		if(evtMstWinUseYn == 'Y'){
			$(".evtWinDate").show();
			$('.evtWinArea').show();
			$("#evtMstWinDt").val('');
			// 에디터 새로고침 및 초기화
			showSmartEditor('evtMstWinContents', 0);
			oEditors.getById["evtMstWinContents"].exec("SET_IR", ['']); // 에디터 초기화
		} else {
			$(".evtWinDate").hide();
			$('.evtWinArea').hide();
			$("#evtMstWinDt").val('');
			oEditors.getById["evtMstWinContents"].exec("SET_IR", ['']); // 에디터 초기화
		}
	}

	// 쿠폰 팝업
	couponPop = function(){
		$("#cpnMstIdx").val("");
		$("#cpnMstNm").val("");
		couponPopup('frm');
	}

	// 쿠폰 팝업 리턴
	fnResultCoupon = function(object){
		$("#cpnMstIdx").val(object.ID);
		$("#cpnMstNm").val(object.NM);
	}

	// 참여내역 팝업
	etrBtn = function() {
		// 현재 선택된 이벤트 형태 값
		var evtMstType = $('input[name=evtMstType]:checked').val();
		console.log('evtMstType',evtMstType);

		if(evtMstType == '708') {	// 스템프형
			console.log('스템프형',evtMstType);
			etrEvtHistPopup('frm');

		} else if(evtMstType == '710') { // 응모형
			console.log('응모형',evtMstType);
			rplEvtHistPopup('frm');

		} else {	// nothing
			console.log('err evtMstType',evtMstType);
		}
	}

	// TODO 공통으로 이동
	// 응모형(덧글) 참여내역 팝업
	rplEvtHistPopup = function(frm) {
		// evtMstIdx 전달
		popup('', "1200", "800", "yes", "_rplEvtHistPopup");
		$('#'+frm).attr({"action":"/am/prm/evnMng/rplEvtHistPopupForm.do", "target":"popup_rplEvtHistPopup", "method":"post"}).submit();
	}
	// 스템프형 참여내역 팜업
	etrEvtHistPopup = function(frm) {
		// evtMstIdx 전달
		popup('', "1200", "800", "yes", "_etrEvtHistPopup");
		$('#'+frm).attr({"action":"/am/prm/evnMng/etrEvtHistPopupForm.do", "target":"popup_etrEvtHistPopup", "method":"post"}).submit();
	}

	// 취소 버튼 클릭(목록이동)
	goList = function(){
		if(confirm("취소하시겠습니까?")){
			$frm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/evnMng/eventView.do", "target":"_self", "method":"post"}).submit();
		}
	}

	// 삭제 버튼 클릭(목록이동)
	goDelete = function(){
		if(confirm("삭제하시겠습니까?")){
			$frm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/evnMng/eventDelete.do", "target":"_self", "method":"post"}).submit();
		}
	}

	// 저장 버튼 클릭
	goRegist = function(){
		console.log('goRegist');

		// 폼체크
	    $frm.validate({
	        rules: {
	        	evtMstType:{required:true}, 	// 이벤트 형태
	        	evtMstDplYn:{required:true},	// 전시여부
	        	evtMstStDt:{required:true}, 	// 전시기간(시작)
	            evtMstEdDt:{required:true}, 	// 전시기간(종료)
	            evtMstTitle:{required:true}, 	// 이벤트명
	            fileCts2:{required:true}, 		// 대체 텍스트 (pc 리스트)
	            fileCts3:{required:true}, 		// 대체 텍스트 (pc 상세)
	            fileCts4:{required:true}, 		// 대체 텍스트 (mo 리스트)
	            fileCts5:{required:true}, 		// 대체 텍스트 (mo 상세)

	        },
	        messages :{
	        	evtMstType : {required:"이벤트 형태는 필수 입력항목입니다."},
	        	evtMstDplYn : {required:"전시 여부는 필수 입력항목입니다."},
	        	evtMstStDt : {required:"전시기간(시작일)은 필수 입력항목입니다."},
	        	evtMstEdDt : {required:"전시기간(종료일)은 필수 입력항목입니다."},
	        	evtMstTitle : {required:"이벤트 명은 필수 입력항목입니다."},
	        	fileCts2 : {required:"대체 텍스트는 필수 입력항목입니다."},
	        	fileCts3 : {required:"대체 텍스트는 필수 입력항목입니다."},
	        	fileCts4 : {required:"대체 텍스트는 필수 입력항목입니다."},
	        	fileCts5 : {required:"대체 텍스트는 필수 입력항목입니다."},
	        }
	    });

		if($frm.valid()){
			// 쿠폰설정 별도처리
			var evtMstType = $('input[name=evtMstType]:checked').val();		// 이벤트 형태
			if(evtMstType == '708'){	// 스템프형
				// 쿠폰 idx
				if($('#cpnMstIdx').val() == ''){
					alert("쿠폰 선택은 필수 입력항목입니다.");
					$('#cpnMstNm').focus();
					return false;
				}
				// 쿠폰 이미지
				if($('#fileView1 ul li').length == 0){
					alert("쿠폰 이미지는 필수 입력항목입니다.");
					$('#fileView1').focus();
					return false;
				}
				// 대체 텍스트
				if($('input[name=fileCts1]').val() == ''){
					alert("대체 텍스트는 필수 입력항목입니다.");
					$('input[name=fileCts1]').focus();
					return false;
				}
			}
			// 각 이미지
			if($('#fileView2 ul li').length == 0){
				alert("[PC] 목록 이미지는 필수 입력항목입니다.");
				$('#fileView2').focus();
				return false;
			}
			if($('#fileView3 ul li').length == 0){
				alert("[PC] 상세 이미지는 필수 입력항목입니다.");
				$('#fileView3').focus();
				return false;
			}
			if($('#fileView4 ul li').length == 0){
				alert("[MO] 목록 이미지는 필수 입력항목입니다.");
				$('#fileView4').focus();
				return false;
			}
			if($('#fileView5 ul li').length == 0){
				alert("[MO] 상세 이미지는 필수 입력항목입니다.");
				$('#fileView5').focus();
				return false;
			}


			try { oEditors.getById["evtMstWinContents"].exec("UPDATE_CONTENTS_FIELD", []);	 } catch(e){ console.log('err',e); }

			if (confirm( "저장 하시겠습니까?")) {
				$('#_type').val("M");
				$frm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/evnMng/eventEdit.do", "target":"_self", "method":"post"}).submit();
			}
		} else {
			console.log('validation error!');
		}
	}

	// 이벤트 FO 화면 호출
	goEventPage = function(obj) {
		alert('FO 화면 호출 개발진행중...\n\n'+$(obj).data('idx'));
	}

	/*********************************
	 * 첨부파일(with 대체텍스트) START
	 ********************************/
	var fCnt = 0;
	// 파일 첨부 이벤트
	$("input[type=file]").off("change").on("change" , function(){
		// 첨부한 파일 데이터
		var fData = $(this)[0].files;

		// 파일리스트 영역
		var fileView = $(this).data('view');
		var fileType = $(this).data('type');
		var targetFileCts = $(this).data('targetFileCts');
		console.log('fileView,fileType,targetFileCts\n',fileView,fileType,targetFileCts);

		if(fileView == null && fileView == ''){
			console.log('target data-view Error');
			$(this).val("");
			return;
		}

		// 파일 용량 및 수량 제한
		var oLen = $("#"+fileView+" ul li").length;
		var nLen = fData.length;
		if((oLen + nLen) > 1){
			alert("첨부파일 수량이 초과되었습니다.");
			$(this).val("");
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
			$(this).val("");
			return false;
		}

		// 파일리스트 추가
		Array.from(fData).forEach(function(data,idx){
			var po = '';
			var fSize = (data.size / 1024).toFixed(2);
			var fId = 'file['+fCnt+']';

			po += '<li data-file-sn="">';
			po += '	<i class="icon-file"></i>';
			po += '	<span>'+data.name+'</span>';
			po += '	<input type="file" name="files" id="'+fId+'" class="hidden" />';
			po += '	<input type="hidden" name="fileSeq" value="" />';
			po += '	<input type="hidden" name="targetFileCts" value="'+targetFileCts+'" />';
			po += '	<input type="hidden" name="fileCdId" value="'+fileType+'" />';
			po += '	<span class="pull-right">'+fSize+'KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>';
			po += '</li>';

			$("#"+fileView+" ul").append(po);

			// 파일 데이터 전달
			var dataTransfer = new DataTransfer();
			dataTransfer.items.add(data);
			document.getElementById(fId).files = dataTransfer.files;

			// 전체 파일 수량 증가
			fCnt++;
		});
		// 초기화
		$(this).val("");
	});

	/* 대체 텍스트 입력 제한 */
	checkByte = function(obj){
		const maxByte = 40;
		const textVal = obj.value;
		const textLen = textVal.length;
		var textTmp = '';

		let totalByte = 0;

		for(let i = 0; i < textLen; i++){
			const eachChar = textVal.charAt(i);
			const uniChar = escape(eachChar);
			if(uniChar.length > 4){
				totalByte += 2;
			}else{
				totalByte += 1;
			}
			if(totalByte <= maxByte) {
				textTmp += eachChar;
			}
		}

		if(totalByte > maxByte){
			$(obj).val(textTmp);
		}else{
			$(obj).next("span.nowByte").html("(" + totalByte);
		}
	}

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
	/*********************************
	 * 첨부파일(with 대체텍스트) END
	 ********************************/

	// 페이지 초기설정
	pageInit();
});
</script>

</body>
</html>