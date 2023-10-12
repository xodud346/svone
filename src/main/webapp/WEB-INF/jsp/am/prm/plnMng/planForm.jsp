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
				<h2 class="title"><span>기획전 관리</span></h2>

				<form id="popupForm">
					<input type="hidden" id="searchCnt" name="searchCnt" value="100" />
					<input type="hidden" id="prdId" name="prdId" value="${commandMap.searchCnt}" />
				</form>

				<form id="searchForm" name="searchForm" enctype="multipart/form-data">
					<input type="hidden" id="FILE_CHANGE_YN" name="FILE_CHANGE_YN" />
					<input type="hidden" class="file" name="fileCdTable" value="T_PLN_MST" />
					<input type="hidden" id="searchCnt" name="searchCnt" value="100" />

					<h3 class="title"><span>기획전 생성</span></h3>

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
								<th><span>게시 구분<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="4">
									<input type="radio" class="radio" onclick="javascript:setLogin(this);" id="PLN_MST_LOGIN_YN1" name="PLN_MST_LOGIN_YN" value="N" checked="checked" />
									<label for="PLN_MST_LOGIN_YN1">로그인 전</label>
									<input type="radio" class="radio" onclick="javascript:setLogin(this);" id="PLN_MST_LOGIN_YN2" name="PLN_MST_LOGIN_YN" value="Y" />
									<label for="PLN_MST_LOGIN_YN2">로그인 후</label>
								</td>
							</tr>
							<tr id="operationSection" style="display:none;">
								<th><span>대상<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="4" id="targetSection">
									<input type="radio" class="radio" onclick="javascript:setOperation(this);" id="PLN_MST_OPR_YN1" name="PLN_MST_OPR_YN" value="N" checked="checked" />
									<label for="PLN_MST_OPR_YN1">전체</label>
									<input type="radio" class="radio" onclick="javascript:setOperation(this);" id="PLN_MST_OPR_YN2" name="PLN_MST_OPR_YN" value="Y" />
									<label for="PLN_MST_OPR_YN2">대상 설정</label>
								</td>
								<th style="display:none;"><span>운영단위 설정</span></th>
								<td style="display:none;">
									<input type="hidden" id="PLN_MST_OPR_ID" name="PLN_MST_OPR_ID" />
									<input type="text" class="text-large" id="PLN_MST_OPR_NM" name="PLN_MST_OPR_NM" readonly="readonly" />
									<a href="javascript:operationPopup();" class="icon search2"></a>
									<a href="javascript:multiTextPopup('PLN_MST_OPR_ID');" class="icon doc textPopup"></a>
								</td>
							</tr>
							<tr>
								<th><span>전시 여부<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="2" id="displaySection">
									<input type="radio" class="radio" onclick="javascript:setDisplay(this);" id="PLN_MST_USE_YN1" name="PLN_MST_USE_YN" value="Y" checked="checked" />
									<label for="PLN_MST_USE_YN1">전시</label>
									<input type="radio" class="radio" onclick="javascript:setDisplay(this);" id="PLN_MST_USE_YN2" name="PLN_MST_USE_YN" value="N" />
									<label for="PLN_MST_USE_YN2">미전시</label>
								</td>
								<th class="mainTable"><span>메인 노출 여부</span></th>
								<td class="mainTable">
									<input type="radio" class="radio" onclick="javascript:setMain(this);" id="PLN_MST_MAIN_YN1" name="PLN_MST_MAIN_YN" value="Y" />
									<label for="PLN_MST_MAIN_YN1">노출</label>
									<input type="radio" class="radio" onclick="javascript:setMain(this);" id="PLN_MST_MAIN_YN2" name="PLN_MST_MAIN_YN" value="N" checked="checked" />
									<label for="PLN_MST_MAIN_YN2">미노출</label>
								</td>
							</tr>
							<tr>
								<th><span>전시 기간<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="4">
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text essential" id="PLN_MST_ST_DT" name="PLN_MST_ST_DT" value="" readonly="readonly" data-target-end="#PLN_MST_ED_DT"/>
									~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text essential" id="PLN_MST_ED_DT" name="PLN_MST_ED_DT" value="" readonly="readonly" data-target-start="#PLN_MST_ST_DT"/>
								</td>
							</tr>
							<tr>
								<th><span>카테고리 킬러<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="4">
									<select class="select large essential" id="PLN_MST_CAT_KILLER" name="PLN_MST_CAT_KILLER">
										<option value="">선택</option>
										<c:forEach items="${catKillerList }" var="item" varStatus="status">
											<option value="${item.CMN_COM_IDX }">${item.CMN_COM_NM }</option>
										</c:forEach>
									</select>
								</td>
							</tr>
							<tr>
								<th><span>기획전 명<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="4">
									<input type="text" class="text-xlarge essential" id="PLN_MST_TITLE" name="PLN_MST_TITLE" />
								</td>
							</tr>
							<tr>
								<th rowspan="2" style="border-right:solid 1px #e9e9e9;"><span>쿠폰 설정<i class="require"><em>필수입력</em></i></span></th>
								<th><span>쿠폰 선택</span></th>
								<td colspan="3">
									<input type="hidden" id="PLN_MST_CPN_ID" name="PLN_MST_CPN_ID" />
									<input type="text" class="text-large essential" id="PLN_MST_CPN_NM" name="PLN_MST_CPN_NM" readonly="readonly" />
									<a href="javascript:couponPop();" class="icon search2"></a>
								</td>
							</tr>
							<tr>
								<th><span>쿠폰 이미지</span></th>
								<td colspan="3">
									<!-- TODO: data-type 수정 필요!! fileCdId 값 할당 (변경된 부분 전부다 바꿔주세요) 주석처리해둔거 필요없으면 삭제 부탁드립니다. -->
									<input type="file" class="file hide" name="file" data-view="fileView1" data-type="CPN" data-target-file-cts="fileCts1" accept="image/png" />
									<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부</span></a>
									<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
									<br>
									<div id="fileView1" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
										<ul style="padding: 5px;">
										</ul>
									</div>
									<br>
									<span class="mr10">대체 텍스트 : </span>
									<input type="text" name="fileCts1" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" />
									<span class="nowByte">(0</span><span> / 40 Byte)</span>
								</td>
							</tr>
							<tr id="pcMainImage" style="display:none;">
								<th rowspan="2" style="border-right:solid 1px #e9e9e9;"><span>메인 이미지<i class="require"><em>필수입력</em></i></span></th>
								<th><span>PC</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file" data-view="fileView2" data-type="MAIN_PC" data-target-file-cts="fileCts2" accept="image/png" />
									<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부</span></a>
									<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
									<br>
									<div id="fileView2" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
										<ul style="padding: 5px;">
										</ul>
									</div>
									<br>
									<span class="mr10">대체 텍스트 : </span>
									<input type="text" name="fileCts2" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" />
									<span class="nowByte">(0</span><span> / 40 Byte)</span>
								</td>
							</tr>
							<tr id="mobileMainImage" style="display:none;">
								<th><span>모바일</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file" data-view="fileView3" data-type="MAIN_MO" data-target-file-cts="fileCts3" accept="image/png" />
									<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부</span></a>
									<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
									<br>
									<div id="fileView3" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
										<ul style="padding: 5px;">
										</ul>
									</div>
									<br>
									<span class="mr10">대체 텍스트 : </span>
									<input type="text" name="fileCts3" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" />
									<span class="nowByte">(0</span><span> / 40 Byte)</span>
								</td>
							</tr>
							<tr>
								<th rowspan="2" style="border-right:solid 1px #e9e9e9;"><span>배너 이미지<i class="require"><em>필수입력</em></i></span></th>
								<th><span>PC</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file" data-view="fileView4" data-type="BN_PC" data-target-file-cts="fileCts4" accept="image/png" />
									<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부</span></a>
									<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
									<br>
									<div id="fileView4" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
										<ul style="padding: 5px;">
										</ul>
									</div>
									<br>
									<span class="mr10">대체 텍스트 : </span>
									<input type="text" name="fileCts4" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" />
									<span class="nowByte">(0</span><span> / 40 Byte)</span>
								</td>
							</tr>
							<tr>
								<th><span>모바일</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file" data-view="fileView5" data-type="BN_MO" data-target-file-cts="fileCts5" accept="image/png" />
									<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부</span></a>
									<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
									<br>
									<div id="fileView5" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
										<ul style="padding: 5px;">
										</ul>
									</div>
									<br>
									<span class="mr10">대체 텍스트 : </span>
									<input type="text" name="fileCts5" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" />
									<span class="nowByte">(0</span><span> / 40 Byte)</span>
								</td>
							</tr>
							<tr>
								<th rowspan="2" style="border-right:solid 1px #e9e9e9;"><span>LP 이미지<i class="require"><em>필수입력</em></i></span></th>
								<th><span>PC</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file" data-view="fileView6" data-type="LP_PC" data-target-file-cts="fileCts6" accept="image/png" />
									<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부</span></a>
									<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
									<br>
									<div id="fileView6" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
										<ul style="padding: 5px;">
										</ul>
									</div>
									<br>
									<span class="mr10">대체 텍스트 : </span>
									<input type="text" name="fileCts6" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" />
									<span class="nowByte">(0</span><span> / 40 Byte)</span>
								</td>
							</tr>
							<tr>
								<th><span>모바일</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file" data-view="fileView7" data-type="LP_MO" data-target-file-cts="fileCts7" accept="image/png" />
									<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부</span></a>
									<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
									<br>
									<div id="fileView7" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
										<ul style="padding: 5px;">
										</ul>
									</div>
									<br>
									<span class="mr10">대체 텍스트 : </span>
									<input type="text" name="fileCts7" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" />
									<span class="nowByte">(0</span><span> / 40 Byte)</span>
								</td>
							</tr>
							<tr>
								<th><span>기획전 설명</span></th>
								<td colspan="4">
									<textarea rows="7" class="textarea xlarge" name="PLN_MST_MEMO" style="resize:none;"></textarea>
								</td>
							</tr>
						</tbody>
					</table>

					<div id="mainProductGroup" style="display:none;">
						<h3 class="title"><span>메인 상품 구성</span></h3>

						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 15%;" />
								<col style="width: 85%;" />
							</colgroup>
							<tbody>
								<tr>
									<th><span>메인 노출 상품<i class="require"><em>필수입력</em></i></span></th>
									<td>
										<input type="text" class="text-xlarge" id="PLN_MAIN_PRD_MST_CD" name="PLN_MAIN_PRD_MST_CD" readonly="readonly" />
										<a href="javascript:;" onclick="openSearchProductPopup(this)" class="icon search2"></a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<h3 class="title"><span>기본 상품 구성</span></h3>

					<div id="basicProductGroup">
						<table cellspacing="0" class="table-row table-a">
							<colgroup>
								<col style="width: 15%;" />
								<col style="width: 35%;" />
								<col style="width: 15%;" />
								<col style="width: 35%;" />
							</colgroup>
							<tbody>
								<tr>
									<th><span>카테고리 명<i class="require"><em>필수입력</em></i></span></th>
									<td>
										<input type="text" class="text-large essential" id="PLN_GRP_TITLE" name="PLN_GRP_TITLE" maxlength="10" />
									</td>
									<th><span>카테고리 전시 순서<i class="require"><em>필수입력</em></i></span></th>
									<td>
										<input type="text" class="text-large essential" id="PLN_GRP_SORT" name="PLN_GRP_SORT" />
										<input type="hidden" id="PLN_MAIN_YN" name="PLN_MAIN_YN" value="N" />
									</td>
								</tr>
								<tr>
									<th><span>등록 상품<i class="require"><em>필수입력</em></i></span></th>
									<td colspan="3">
										<input type="text" class="text-xlarge essential" id="PLN_PRD_MST_CD" name="PLN_PRD_MST_CD" readonly="readonly" />
										<a href="javascript:;" onclick="openSearchProductPopup(this);" class="icon search2"></a>
									</td>
								</tr>
							</tbody>
						</table>

						<div class="section-button-list">
							<div class="wrap text-right">
								<a href="javascript:;" id="addProductGroupButton" class="button small primary"><span>상품 그룹 추가</span></a>
							</div>
						</div>
					</div>
				</form>

				<div class="section-button-list">
					<div class="wrap text-center">
						<a href="javascript:goList();" class="button large"><span>취소</span></a>
						<a href="javascript:goRegist();" class="button large primary"><span>등록</span></a>
					</div>
				</div>
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
$(function(){
	var $pre = "";
	var $searchForm = $("#searchForm");
	var $popupForm = $("#popupForm");

	setLogin = function(id){
		if($(id).val() == "Y"){
			$("#operationSection").show();
			$(".mainTable").hide();
			$("#displaySection").attr("colspan", 4);
			$("#pcMainImage, #mobileMainImage, #mainProductGroup").hide();
			$("#PLN_MAIN_PRD_MST_CD").removeClass("essential");
			$("#PLN_MAIN_PRD_MST_CD").val("");
			$("input[name='PLN_MST_MAIN_YN']").prop("checked", "N");
		}else{
			if($("input[name='PLN_MST_USE_YN']:checked").val() == "Y" ){
				$(".mainTable").show();
				$("#displaySection").attr("colspan", 2);
			}
			$("#operationSection").hide();
			$("#PLN_MST_OPR_YN1").click();
			$("#PLN_MST_OPR_ID").val("");
			$("#PLN_MST_OPR_NM").val("");
		}
	}

	setOperation = function(id){
		if($(id).val() == "Y"){
			$("#targetSection").nextAll().show();
			$("#targetSection").attr("colspan", 2);
		}else{
			$("#targetSection").nextAll().hide();
			$("#targetSection").attr("colspan", 4);
			$("#PLN_MST_OPR_ID").val("");
			$("#PLN_MST_OPR_NM").val("");
		}
	}

	setDisplay = function(id){
		if($(id).val() == "Y"){
			if($("input[name='PLN_MST_LOGIN_YN']:checked").val() == "N"){
				$("#displaySection").nextAll().show();
				$("#displaySection").attr("colspan", 2);
			}
		}else{
			$("#displaySection").nextAll().hide();
			$("#displaySection").attr("colspan", 4);
			$("#PLN_MST_MAIN_YN2").click();
		}
	}

	setMain = function(id){
		if($(id).val() == "Y"){
			$("#pcMainImage, #mobileMainImage, #mainProductGroup").show();
			$("#PLN_MAIN_PRD_MST_CD").addClass("essential");
		}else{
			$("#pcMainImage, #mobileMainImage, #mainProductGroup").hide();
			$("#PLN_MAIN_PRD_MST_CD").removeClass("essential");
			$("#PLN_MAIN_PRD_MST_CD").val("");
		}
	}

	// 파일 삭제 클릭 이벤트
	fileDelete = function(obj){
		$fileNmPre = $(obj).prev();

		$fileNmPre.val("");
	};

	operationPopup = function(){
		$("#PLN_MST_OPR_ID").val("");
		$("#PLN_MST_OPR_NM").val("");
		popup('', "500", "700", "yes","_OperatingPopup");
		$popupForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/oprUnt/operatingPopup.do", "target":"popup_OperatingPopup", "method":"post"}).submit();
	}

	fnResultOper = function(params){
		var id = "";
		var nm = "";

		$.each(params, function(index, item){
			if(index != 0){
				id += ", ";
				nm += ", ";
			}
			id += item.ID;
			nm += item.NM;
		});

		$("#PLN_MST_OPR_ID").val(id);
		$("#PLN_MST_OPR_NM").val(nm);
	}
	couponPop = function(){
		$("#PLN_MST_CPN_ID").val("");
		$("#PLN_MST_CPN_NM").val("");
		couponPopup('popupForm');
	}

	fnResultCoupon = function(object){
		$("#PLN_MST_CPN_ID").val(object.ID);
		$("#PLN_MST_CPN_NM").val(object.NM);
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

		console.log('aa',$("#"+fileView+" ul"));

		// 파일리스트 추가
		Array.from(fData).forEach(function(data,idx){
			var po = '';
			var fSize = (data.size / 1024).toFixed(2);
			var fId = 'file['+fCnt+']';

			po += '<li data-file-seq="">';
			po += '	<i class="icon-file"></i>';
			po += '	<span id="'+fileType+'FileNm">'+data.name+'</span>';
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

	// 파일 삭제 클릭 이벤트
	fileDelete = function(obj){
		var $target = $(obj).closest('li');

		// 파일리스트 삭제
		$target.remove();
	};

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
	/*********************************
	 * 첨부파일(with 대체텍스트) END
	 ********************************/

	$(document).on("click", "#addProductGroupButton", function(){
		var html = '';

		html += '<div>';
		html += 	'<table cellspacing="0" class="table-row table-a" style="margin-bottom:0;">';
		html += 		'<colgroup>';
		html += 			'<col style="width: 15%;" /><col style="width: 35%;" /><col style="width: 15%;" /><col style="width: 35%;" />';
		html += 		'</colgroup>';
		html += 		'<tbody>';
		html += 			'<tr>';
		html += 				'<th><span>카테고리 명<i class="require"><em>필수입력</em></i></span></th>';
		html += 				'<td>';
		html += 					'<input type="text" class="text-large essential" id="PLN_GRP_TITLE" name="PLN_GRP_TITLE" maxlength="10" />';
		html += 				'</td>';
		html += 				'<th><span>카테고리 전시 순서<i class="require"><em>필수입력</em></i></span></th>';
		html += 				'<td>';
		html += 					'<input type="text" class="text-large essential" id="PLN_GRP_SORT" name="PLN_GRP_SORT" />';
		html += 					'<input type="hidden" id="PLN_MAIN_YN" name="PLN_MAIN_YN" value="N" />';
		html += 				'</td>';
		html += 			'</tr>';
		html += 			'<tr>';
		html += 				'<th><span>등록 상품<i class="require"><em>필수입력</em></i></span></th>';
		html += 				'<td colspan="3">';
		html += 					'<input type="text" class="text-xlarge essential" id="PLN_PRD_MST_CD" name="PLN_PRD_MST_CD" readonly="readonly" />';
		html += 					'<a href="javascript:;" onclick="openSearchProductPopup(this)" class="icon search2"></a>';
		html += 				'</td>';
		html += 			'</tr>';
		html += 		'</tbody>';
		html += 	'</table>';
		html += 	'<div class="section-button-list">';
		html += 		'<div class="wrap text-right">';
		html += 			'<a href="javascript:;" id="removeProductGroupButton" class="button small"><span>상품 그룹 삭제</span></a>&nbsp;&nbsp;&nbsp;';
		html += 			'<a href="javascript:;" id="addProductGroupButton" class="button small primary"><span>상품 그룹 추가</span></a>';
		html += 		'</div>';
		html += 	'</div>';
		html += '</div>';

		$("#basicProductGroup").append(html);
	});

	$(document).on("click", "#removeProductGroupButton", function(){
		if(confirm("삭제하시겠습니까?")){
			$(this).parent().parent().parent().remove();
		}
	});

 	openSearchProductPopup = function(id){
		$pre = $(id).prev();
		productPopup("popupForm");
	}

 	fnSetProduct = function(params){

 		var PRD_MST_CD = "";

 		$.each(params, function(index,item){
 			if(index < 1) {
 				PRD_MST_CD += item.prdId;
 	   		} else {
 	   			PRD_MST_CD += ","+item.prdId;
 			}
 		});

		$.ajax({
			url : "/am/prm/plnMng/planProductAjax.do",
			type : "post",
			dataType : "json",
			data : {"PRD_MST_CD" : PRD_MST_CD},
			success : function(data){
				if(data.result == "Y"){
					if($pre.attr("id") == "PLN_MAIN_PRD_MST_CD"){
						var cd = PRD_MST_CD.replace(" ", "");
						var arr = cd.split(",");

						if(arr.length > 3){
							alert("메인 노출 상품은 최대 3개까지 등록 가능합니다.");
							PRD_MST_CD = "";
							return false;
						}

						$pre.val(PRD_MST_CD);
					}else{
						$pre.val(PRD_MST_CD);
					}
				}else{
					alert("유효하지 않은 상품 ID");
					return false;
				}
			},
			error : function(){
				alert("");
			}
		});
	}

	goList = function(){
		if(confirm("취소하시겠습니까?")){
			$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/plnMng/planView.do", "target":"_self", "method":"post"}).submit();
		}
	}

	goRegist = function(){
		var err = 0;
		var main = $("input[name='PLN_MST_MAIN_YN']:checked").val();
		var startDate = new Date($("#PLN_MST_ST_DT").val());
		var endDate = new Date($("#PLN_MST_ED_DT").val());
		var today = new Date();
		var errName = "";

		$("#nowByte").each(function(i, item){
			console.log($(this).css("color"));
		});
		$("input[name='PLN_GRP_SORT']").each(function(i, item){
			var sort = $(this).val();
			$("input[name='PLN_GRP_SORT']").each(function(j, item){
				if(i != j) {
					if(sort == $(this).val()){
						err++;
					}
				}
			});
		});
		if(err != 0){
			alert("동일한 순서가 있습니다. 확인 후 재 입력해 주시기 바랍니다.");
			return false;
		}
		err = 0;

 		// 폼체크
	    $searchForm.validate({
	        rules: {
	        	PLN_MST_ST_DT:{required:true},
	        	PLN_MST_ED_DT:{required:true},
	        	PLN_MST_CAT_KILLER:{required:true},
	        	PLN_MST_TITLE:{required:true},
	        	PLN_MST_CPN_NM:{required:true},
	        	fileCts1:{required:true},
	        	fileCts4:{required:true},
	        	fileCts5:{required:true},
	        	fileCts6:{required:true},
	        	fileCts7:{required:true},
	        	PLN_GRP_TITLE:{required:true},
	        	PLN_GRP_SORT:{required:true, number:true},
	        	PLN_PRD_MST_CD:{required:true}
	        },
	        messages :{
	        	PLN_MST_ST_DT : {required:"전시기간 시작일을 반드시 입력해 주십시오."},
	        	PLN_MST_ED_DT : {required:"전시기간 종료일을 반드시 입력해 주십시오."},
	        	PLN_MST_CAT_KILLER : {required:"카테고리 킬러를 반드시 입력해 주십시오."},
	        	PLN_MST_TITLE : {required:"기획전 명을 반드시 입력해 주십시오."},
	        	PLN_MST_CPN_NM : {required:"쿠폰을 반드시 입력해 주십시오."},
	        	fileCts1 : {required:"쿠폰 이미지 대체 텍스트를 반드시 선택해 주십시오."},
	        	fileCts4 : {required:"배너 PC 이미지 대체 텍스트를 반드시 선택해 주십시오."},
	        	fileCts5 : {required:"배너 모바일 이미지 대체 텍스트를 반드시 선택해 주십시오."},
	        	fileCts6 : {required:"LP PC 이미지 대체 텍스트를 반드시 선택해 주십시오."},
	        	fileCts7 : {required:"LP 모바일 이미지 대체 텍스트를 반드시 선택해 주십시오."},
	        	PLN_GRP_TITLE : {required:"카테고리 명을 반드시 입력해 주십시오."},
	        	PLN_GRP_SORT : {required:"카테고리 전시 순서를 반드시 입력해 주십시오."},
	        	PLN_PRD_MST_CD : {required:"등록 상품을 반드시 입력해 주십시오."}
			}
	    });

/*  		$searchForm.find(".essential").each(function(){
			if($(this).val() == ""){
				alert($(this).attr('name')+"을(를) 반드시 입력해 주십시오.");
				return false;
			}
		}); */
		/* if(err != 0){
			alert("필수 입력");
			return false;
		} */
		if(startDate > endDate){
			alert("종료일이 시작일보다 작습니다.");
			return false;
		}
		
		// null 체크
		if(main == "Y"){
			if($("#CPNFileNm").text() == ""){
				alert("쿠폰 이미지를 반드시 선택해 주십시오.");
				return false;
			} else if($("#MAIN_PCFileNm").text() == "") {
				alert("메인 PC 이미지를 반드시 선택해 주십시오.");
				return false;
			} else if($("#MAIN_MOFileNm").text() == "") {
				alert("메인 모바일 이미지를 반드시 선택해 주십시오.");
				return false;
			} else if($("#BN_PCFileNm").text() == "") {
				alert("배너 PC 이미지를 반드시 선택해 주십시오.");
				return false;
			} else if($("#BN_MOFileNm").text() == "") {
				alert("배너 모바일 이미지를 반드시 선택해 주십시오.");
				return false;
			} else if($("#LP_PCFileNm").text() == "") {
				alert("LP PC 이미지를 반드시 선택해 주십시오.");
				return false;
			} else if($("#LP_MOFileNm").text() == "") {
				alert("LP 모바일 이미지를 반드시 선택해 주십시오.");
				return false;
			}
			
			if($("input[name='fileCts2']").val() == ""){
				alert("메인 PC 이미지 대체 텍스트를 반드시 선택해 주십시오.");
				return false;
			}else if($("input[name='fileCts3']").val() == ""){
				alert("메인 모바일 이미지 대체 텍스트를 반드시 선택해 주십시오.");
				return false;
			}

			if($("#PLN_MAIN_PRD_MST_CD").val() == ""){
				alert("메인 노출 상품을 입력해 주세요.");
				return false;
			}
		} else {
			if($("#CPNFileNm").text() == ""){
				alert("쿠폰 이미지를 반드시 선택해 주십시오.");
				return false;
			} else if($("#BN_PCFileNm").text() == "") {
				alert("배너 PC 이미지를 반드시 선택해 주십시오.");
				return false;
			} else if($("#BN_MOFileNm").text() == "") {
				alert("배너 모바일 이미지를 반드시 선택해 주십시오.");
				return false;
			} else if($("#LP_PCFileNm").text() == "") {
				alert("LP PC 이미지를 반드시 선택해 주십시오.");
				return false;
			} else if($("#LP_MOFileNm").text() == "") {
				alert("LP 모바일 이미지를 반드시 선택해 주십시오.");
				return false;
			}
		}

		if(main == "Y"){
			$.ajax({
				url : "<c:out value="${serverDomain}" />/am/prm/plnMng/planMainAjax.do",
				type : "post",
				dataType : "json",
				data : {"PLN_MST_CAT_KILLER" : $("#PLN_MST_CAT_KILLER").val()},
				success : function(data){
					if(data.idx != ""){
						if(confirm("메인 노출 기획전은 최대3개 설정 가능합니다.\n기존 메인 노출 기획전을 변경하시겠습니까?")){
							$searchForm.append('<input type="hidden" name="CHANGE_MAIN_IDX" value="' + data.idx + '" />');
							$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/plnMng/planRegist.do", "target":"_self", "method":"post"}).submit();
						}
					}else{
						if(today < endDate){
							$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/plnMng/planRegist.do", "target":"_self", "method":"post"}).submit();
						}else {
							alert("종료일이 오늘날짜보다 이전입니다.");
						}
					}
				},
				error : function(){
					alert("");
				}
			});
		}else{
			$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/plnMng/planRegist.do", "target":"_self", "method":"post"}).submit();
		}
	}
});
</script>

</body>
</html>