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

	var fCnt = 0;
	var lognYn		= '${map.BRD_NTS_LOGN_YN}';			<%-- 로그인 여부 --%>
	var trgtBzplcYn	= '${map.BRD_NTS_TRGT_BZPLC_YN}';	<%-- 운영단위 대상 --%>
	var postEndDt	= '${map.BRD_NTS_END_DT}';			<%-- 게시 종료일 --%>
	var popUpYn		= '${map.BRD_NTS_POP_YN}';			<%-- 팝업 여부 --%>
	var topYn		= '${map.BRD_NTS_TOP_YN}';			<%-- 상단 공지 여부 --%>


	$('#pop'+popUpYn).prop("checked", true);
	$('#logn'+lognYn).prop("checked", true);

	if(lognYn == "Y") {
		$('#_trgt').show();
		$('._trgtSet').hide();
	}

	if(trgtBzplcYn == "Y") {
		$('#trgtBzplcYn2').prop("checked", true);
		$('._trgtSet').show();
	} else {
		$('#trgtBzplcYn1').prop("checked", true);
	}

	if(postEndDt == null && postEndDt == "")	$('#postNotEnd').prop('checked', true);
	if(popUpYn == "Y")	$('._popSet').show();
	if(topYn == "Y")	$('#topYn').prop("checked", true);



	<%-- 게시 구분 (로그인 전/후) --%>
	$(':radio[name="lognYn"]').on('click', function(){
		if($(this).val() == "N"){
			$('#_trgt').hide();
			$('input:radio[name="oprUntYn"]').prop("checked", false);
			$('#oprUntNm').val('');
			$('#oprUntId').val('');
			$('#oprUntUseYn').val('');
		} else {
			$('input:radio[name="oprUntYn1"]').prop("checked", true);
			$('#_trgt').show();
			$('._trgtSet').hide();
		}
	});

	// 대상(운영단위) 라디오 버튼 클릭 이벤트
	$("input:radio[name=trgtBzplcYn]").click(function(){
		if($("#trgtBzplcYn2").is(":checked")) {
			$('._trgtSet').show();
		} else {
			$('._trgtSet').hide();
			$('#oprUntNm').val('');
			$('#oprUntId').val('');
		}
	});
	// 운영단위 대상설정 팝업 오픈
	oprUntPopup = function(){
		popup('', "500", "700", "yes","_oprUntPopupForm");
		$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/com/popUp/operate2PopupForm.do", "target":"popup_oprUntPopupForm", "method":"post"}).submit();
	}
	// 운영단위 대상설정 팝업 콜백함수
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

	<%-- 팝업 여부 --%>
	$(':radio[name="popYn"]').on('click', function(){
		if($(this).val() == "N"){
			$('._popSet').hide();
			$('#popupStrDt').val('');
			$('#popupEndDt').val('');
		} else {
			$('._popSet').show();
		}
	});

	<%-- 종료일 없음 체크박스 클릭 시 --%>
	$('#postNotEnd').on('click', function(){
		$('#postEndDt').val("");
	});

	<%-- 팝업 미사용 시 --%>
	$('#POP_N').on('click', function(){
		$('#popupStrDt').val("");
		$('#popupEndDt').val("");
	});

	<%-- 취소버튼 클릭 시 --%>
	$('#goList').on('click',function(){
		if (confirm( "<spring:message code='common.msg.alert.cancel' />")) {
			$('#frm').attr({"action":"<c:out value="${serverDomain}" />/am/cnt/ntcMng/noticeList.do", "target":"_self", "method":"post"}).submit();
		}
	});

	<%-- 삭제버튼 클릭 시 --%>
	$('#goDelete').on('click',function(){
		if (confirm( "<spring:message code='common.msg.alert.delete' />")) {
			$('#frm').attr({"action":"<c:out value="${serverDomain}" />/am/cnt/ntcMng/noticeDelete.do", "target":"_self", "method":"post"}).submit();
		}
	});

	<%-- 저장버튼 클릭 시 --%>
	$('#goRegist').on('click',function(){
		//editor 내용을 BRD_NTS_CONTENTS TEXTAREA의 VALUE 값으로 만든다.
		try { oEditors.getById["brdNtsContents"].exec("UPDATE_CONTENTS_FIELD", []);	 } catch(e){ }

		if(!validate()) {
			return false;
		}

		if (confirm( "<spring:message code='common.msg.alert.save' />")) {
			$('#_type').val("M");

			$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/cnt/ntcMng/noticeEdit.do", "target":"_self", "method":"post"}).submit();
		}
	});

	// 필수 체크
	validate = function () {

		var lognYn 		= $('input[name="lognYn"]:checked').val();
		var oprUntYn	= $('input[name="oprUntYn"]:checked').val();
		var postStrDt	= $('#postStrDt').val();
		var postNotEnd	= $('input[name="postNotEnd"]').is(":checked");
		var popupYn		= $('input[name="popYn"]:checked').val();
		var popupStrDt	= $('#popupStrDt').val();
		var popupEndDt	= $('#popupEndDt').val();

		if(lognYn == "Y" && oprUntYn == "Y"){
			// 공지 대상 설정 시
			if($('#oprUntId').val() == ""){
				alert("<spring:message code='errors.required' arguments='대상' />");
				return false;
			}
		}

		if(postStrDt == ""){
			alert("<spring:message code='errors.required' arguments='게시 시작일' />");
			return false;
		}

		if(!postNotEnd){
			if($('#postEndDt').val() == ""){
				alert("<spring:message code='errors.required' arguments='게시 종료일' />");
				return false;
			}
		}

		if(popupYn == "Y"){
			if(popupStrDt == "" || popupEndDt == ""){
				alert("<spring:message code='errors.required' arguments='팝업기간' />");
				return false;
			}
		}

		if($.trim($("#brdNtsTitle").val()) == "")
		{
			alert("<spring:message code='errors.required' arguments='제목' />");
			$("#brdNtsTitle").focus();
			return false;
		}

		var CONTENTS = stringUtil.getString($.trim($("#brdNtsContents").val()), "");
		if (CONTENTS == "" || CONTENTS == "<p>&nbsp;</p>" ){
			alert("<spring:message code='errors.required' arguments='내용' />");
			$("#brdNtsContents").focus();
			return false;
		}

		return true;
	}


	/******************
	 * 첨부파일
	 ******************/
	// 파일 첨부 이벤트
// 	$("input[type=file].test001").off("change").on("change" , function(){
// 		// 첨부한 파일 데이터
// 		var fData = $(this)[0].files;

// 		// 파일리스트 영역
// 		var fileView = $(this).data('view');
// 		var fileType = $(this).data('type');
// 		console.log('fileView,fileType\n',fileView,fileType);

// 		if(fileView == null && fileView == ''){
// 			console.log('target data-view Error');
// 			return;
// 		}

// 		// 파일 용량 및 수량 제한
// 		var oLen = $("#"+fileView+" ul li").length;
// 		var nLen = fData.length;
// 		if((oLen + nLen) > 10){
// 			alert("첨부파일 수량이 초과되었습니다.");
// 			return false;
// 		}
// 		var sizeFlag = false;
// 		Array.from(fData).forEach(function(data,idx){
// 			if(data.size > (10*1024*1024)){
// 				sizeFlag = true;
// 			}
// 		});
// 		if(sizeFlag){
// 			alert("첨부파일 용량이 초과되었습니다.");
// 			return false;
// 		}

// 		console.log('aa',$("#"+fileView+" ul"));

// 		// 파일리스트 추가
// 		Array.from(fData).forEach(function(data,idx){
// 			var po = '';
// // 			console.log('idx_'+idx,data);
// 			var fSize = (data.size / 1024).toFixed(2);
// 			var fId = 'file['+fCnt+']';

// 			po += '<li data-file-sn="">';
// 			po += '	<i class="icon-file"></i>';
// 			po += '	<span>'+data.name+'</span>';
// 			po += '	<input type="file" name="files" id="'+fId+'" class="hidden" />';
// 			po += '	<input type="hidden" name="fileSeq" value="" />';
// 			po += '	<input type="hidden" name="fileCdId" value="'+fileType+'" />';
// 			po += '	<span class="pull-right">'+fSize+'KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>';
// 			po += '</li>';

// 			$("#"+fileView+" ul").append(po);

// 			// 파일 데이터 전달
// 			var dataTransfer = new DataTransfer();
// 			dataTransfer.items.add(data);
// 			document.getElementById(fId).files = dataTransfer.files;

// 			console.log('document.getElementById(fId).files',document.getElementById(fId).files);

// 			// 전체 파일 수량 증가
// 			fCnt++;

// 		});
// 		// 초기화
// 		$(this).val("");
// 	});

// 	// 파일 삭제 클릭 이벤트
// 	fileDelete = function(obj){
// 		var $target = $(obj).closest('li');
// 		var $targetFrm = $(obj).closest('form');
// 		var $delFileSeq = $targetFrm.find('input[name=delFileSeq]');

// 		console.log('targetFrm,delFileSeq',$targetFrm,$delFileSeq)

// 		// 삭제대상 파일ID 등록
// 		var delFileSeq = $target.data('fileSeq');
// 		if(delFileSeq != null && delFileSeq != ''){
// 			var fileSeq = $delFileSeq.val();
// 			if(fileSeq != ''){
// 				fileSeq += ',';
// 			}
// 			fileSeq += delFileSeq;
// 			$delFileSeq.val(fileSeq);
// 		}
// 		// 파일리스트 삭제
// 		$target.remove();
// 	};

	// 파일 다운로드
// 	$(document).on("click", ".file-list-title", function () {
//         var $fileForm = $("#fileForm");
//         var $this = $(this);
//         $fileForm.find("input[name='CMM_FLE_IDX']").val($this.data("cmm_fle_idx"));
//         $fileForm.find("input[name='CMM_FLE_SAVE_PATH']").val($this.data("cmm_fle_save_path"));
//         $fileForm.find("input[name='CMM_FLE_ORG_NM']").val($.trim($this.text()));
//         $fileForm.attr({"action":"<c:out value="${serverDomain}"/>/am/common/commonFileDownload.do", "target":"_self", "method":"post"}).submit();
// 	});
	// 파일 다운로드
// 	$(document).on("click", "#fileView .file-list-title", function () {
// 		var newForm = $('<form></form>');

// 		var inputs = $(this).find("input:hidden");
// 		for(var i = 0 ; i < inputs.length; i++){
// 			var po = '<input type="hidden" name="'+$(inputs[i]).attr("name")+'" value="'+$(inputs[i]).val()+'" />';
// 			newForm.append(po);
// 		}
// 		console.log("newForm",newForm);

// 		newForm.attr({"action":"<c:out value="${serverDomain}" />/am/common/commonFileDownload.do", "target":"_self", "method":"post"});
// 		newForm.appendTo('body');
// 		newForm.submit();
// 	});

});
</script>
</head>
<body>
	<div id="header">
		<%@ include file="/WEB-INF/jsp/am/include/top.jsp"%>
	</div>
	<!-- container -->
	<div id="container">
		<div id="aside" class="aside left">
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp"%>
		</div>
		<!-- wrapper -->
		<div id="wrapper">

			<div id="breadcrumb"></div>
			<!-- contents -->
			<div id="contents">

				<div class="container">

					<h2 class="title"><span>공지사항</span></h2>
					<h3 class="title"><span>등록</span></h3>
					<p>
					<span><i class="require" aria-hidden="true"><em>필수입력</em></i></span> 표시된 항목은 필수 입력 사항입니다.
					</p>

					<form id="frm" name="frm" enctype="multipart/form-data">
						<input type="hidden" name="_type"			id="_type"			value=""/>
						<input type="hidden" name="brdNtsIdx"		id="brdNtsIdx"		value="${map.BRD_NTS_IDX }"/>
						<input type="hidden" name="atflId"			id="atflId" 		value="${map.ATFL_ID }"/>

						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: 40%;" />
								<col style="width: 10%;" />
								<col style="width: auto;" />
							</colgroup>
							<tbody>
								<tr>
									<th scope="row"><label class="label"><span>게시 구분<i class="require" aria-hidden="true"><em>필수입력</em></i></span></label></th>
									<td colspan="3">
										<input type="radio" name="lognYn" id="lognN" value="N" class="radio" />
										<label for="lognN">로그인 전</label>
										<input type="radio" name="lognYn" id="lognY" value="Y" class="radio" />
										<label for="lognY">로그인 후</label>
									</td>
								</tr>
								<tr id="_trgt" style="display: none;">
									<th scope="row"><label class="label"><span>공지 대상<i class="require" aria-hidden="true"><em>필수입력</em></i></span></label></th>
									<td>
										<input type="radio" id="trgtBzplcYn1" name="trgtBzplcYn" class="radio" value="N" />
										<label for="trgtBzplcYn1">전체</label>
										<input type="radio" id="trgtBzplcYn2" name="trgtBzplcYn" class="radio" value="Y" />
										<label for="trgtBzplcYn2">대상 설정</label>

									</td>
									<th scope="row" class="_trgtSet" style="display: none;"><label class="label"><span>대상 설정</span></label></th>
									<td class="_trgtSet" style="display: none;">
										<input type="hidden" name="oprUntId"		id="oprUntId"		value="${map.TRGT_BZPLC_ID }"/>
										<input type="text" class="text searchOprUnt" name="oprUntNm" id="oprUntNm" value="${map.TRGT_BZPLC_NM }" readonly />
										<a href="javascript:oprUntPopup();" class="icon search2 searchOprUnt" id="ntsBzplcPopup"></a>
									</td>
								</tr>
								<tr>
									<th scope="row"><label class="label"><span>게시 기간<i class="require" aria-hidden="true"><em>필수입력</em></i></span></label></th>
									<td colspan="3">
										<a href="#none" class="js-datepickr" id="inq01"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text" id="postStrDt" name="postStrDt" readonly="readonly" data-target-end="#postEndDt" placeholder="YYYY-MM-DD" value="<ui:formatDate value='${map.BRD_NTS_STR_DT }' pattern='yyyy-MM-dd'/>"/>
										~
										<a href="#none" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text" id="postEndDt" name="postEndDt" readonly="readonly" data-target-start="#postStrDt" placeholder="YYYY-MM-DD" value="<ui:formatDate value='${map.BRD_NTS_END_DT }' pattern='yyyy-MM-dd'/>"/>
										<input type="checkbox" class="checkbox" name="postNotEnd" id="postNotEnd" value="Y" data-not-end="Y" <c:if test="${empty map.BRD_NTS_END_DT}">checked</c:if> />
										<label for="postNotEnd">종료일 없음</label>
									</td>
								</tr>
								<tr>
									<th scope="row"><label class="label"><span>팝업 여부</span></label></th>
									<td>
										<input type="radio" name="popYn" id="popY" value="Y" class="radio" />
										<label for="popY">사용</label>
										<input type="radio" name="popYn" id="popN" value="N" class="radio" />
										<label for="popN">미사용</label>
									</td>
									<th scope="row" class="_popSet" style="display: none;"><label class="label"><span>팝업 기간</span></label></th>
									<td class="_popSet" style="display: none;">
										<a href="#none" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text" id="popupStrDt" name="popupStrDt" readonly="readonly" data-target-end="#popupEndDt" placeholder="YYYY-MM-DD" value="<ui:formatDate value='${map.BRD_NTS_POP_STR_DT }' pattern='yyyy-MM-dd'/>"/>
										~
										<a href="#none" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text" id="popupEndDt" name="popupEndDt" readonly="readonly" data-target-start="#popupStrDt" placeholder="YYYY-MM-DD" value="<ui:formatDate value='${map.BRD_NTS_POP_END_DT }' pattern='yyyy-MM-dd'/>"/>
									</td>
								</tr>
								<tr>
									<th scope="row"><label class="label"><span>상단 공지</span></label></th>
									<td colspan="3">
										<input type="checkbox" name="topYn" id="topYn" value="Y" class="checkbox" <c:if test="${map.BRD_NTS_TOP_YN eq 'Y'}">checked</c:if> />
										<label for="topYn">상단공지</label>
									</td>
								</tr>
								<tr>
									<th scope="row"><label class="label"><span>제목<i class="require" aria-hidden="true"><em>필수입력</em></i></span></label></th>
									<td colspan="3">
										<input type="text" name="brdNtsTitle" id="brdNtsTitle" class="text xlarge" placeholder="최대 40자까지 입력하실 수 있습니다." style="width:80%;" maxlength="40" value="${map.BRD_NTS_TITLE }"/>
									</td>
								</tr>
								<tr>
									<th scope="row"><label class="label"><span>내용<i class="require" aria-hidden="true"><em>필수입력</em></i></span></label></th>
									<td colspan="3">
										<textarea class="textarea" name="brdNtsContents" id="brdNtsContents" style="height: 500px; width:80%;">${map.BRD_NTS_CONTENTS }</textarea>
									</td>
								</tr>
								<tr>
									<th scope="row"><label class="label"><span>첨부파일</span></label></th>
									<td colspan="3">
										<ui:fileUpload formId="frm" view="fileView" typeCd="NOR" btnLabel="파일첨부" btnCss="primary"
											fileCountLimit="10" fileSizeLimit="10" fileAcceptLabel=""  multiple="true" uploadedList="${fileList }" />

<!-- 										<input type="file" name="file" class="file hide test001" data-view="fileView" data-type="NOR" multiple="multiple"> -->
<!-- 										<a href="javascript:void(0);" onclick="$(this).prev().click();" class="button small primary"><span>파일첨부(일반)</span></a> -->
<!-- 										<small class="desc"><strong class="em warning">10MB</strong> 미만의 파일 최대 <strong class="em warning">10개</strong>까지 등록 할 수 있습니다.</small> -->

<!-- 										<div id="fileView" class="mt10" style="border: solid 1px #d0d0d0; min-height: 50px;"> -->
<!-- 											<ul style="padding: 5px;"> -->
<%-- 												<c:choose> --%>
<%-- 													<c:when test="${not empty fileList }"> --%>
<%-- 														<c:forEach items="${fileList }" var="fileRow" varStatus="i"> --%>
<%-- 															<li data-file-sn="${fileRow.fileSeq }"> --%>
<!-- 																<i class="icon-file" aria-hidden="true"></i> -->
<%-- 																<span class="file-list-title"><c:out value="${fileRow.orignlFileNm }" /> --%>
<%-- 																	<input type="hidden" name="fileSeq" value="${fileRow.fileSeq }"/> --%>
<%-- 																	<input type="hidden" name="orignlFileNm" value="${fileRow.orignlFileNm }" /> --%>
<%-- 																	<input type="hidden" name="attachFileSavePath" value="${fileRow.attachFileSavePath }" /> --%>
<!-- 																</span> -->
<%-- 																<span class="pull-right"><fmt:formatNumber value="${(fileRow.fileSz+0.01) div (1024+0.01)}" pattern=".00" />KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span> --%>
<!-- 															</li> -->
<%-- 														</c:forEach> --%>
<%-- 													</c:when> --%>
<%-- 													<c:otherwise> --%>
<%-- 													</c:otherwise> --%>
<%-- 												</c:choose> --%>
<!-- 											</ul> -->
<!-- 										</div> -->
										<!-- hidden Area -->
										<input type="hidden" name="delFileSeq" value="" />
									</td>
								</tr>
								<tr>
									<th scope="row"><label class="label"><span>최초 등록</span></label></th>
									<td>
										${map.BRD_NTS_REG_NM } (${map.BRD_NTS_REG_EMP_NO })
									</td>
									<th scope="row"><label class="label"><span>등록 일시</span></label></th>
									<td>
										<ui:formatDate value='${map.BRD_NTS_REG_DT }' pattern='yyyy-MM-dd HH:mm:ss'/>
									</td>
								</tr>
								<tr>
									<th scope="row"><label class="label"><span>최종 수정</span></label></th>
									<td>
										${map.BRD_NTS_UPD_NM } (${map.BRD_NTS_UPD_EMP_NO })
									</td>
									<th scope="row"><label class="label"><span>수정 일시</span></label></th>
									<td>
										<ui:formatDate value='${map.BRD_NTS_UPD_DT }' pattern='yyyy-MM-dd HH:mm:ss'/>
									</td>
								</tr>
							</tbody>
						</table><!-- // table -->
					</form>

					<div class="section-button">
						<div class="wrap text-center">
							<a href="#none" id="goList" class="button large"><span>취소</span></a>
							<a href="#none" id="goDelete" class="button large primary"><span>삭제</span></a>
							<a href="#none" id="goRegist" class="button large primary"><span>저장</span></a>
						</div>
					</div>
				</div>
			</div>
			<!-- // contents -->
		</div>
		<!-- // wrapper -->

		<div id="quickmenu" class="aside right">
			<%@ include file="/WEB-INF/jsp/am/include/quick.jsp"%>
		</div>
	</div>
	<!-- // container -->
	<div id="footer">
		<%@ include file="/WEB-INF/jsp/am/include/footer.jsp"%>
	</div>
	<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
	<ui:editor objId="#brdNtsContents"/>
</body>
</html>