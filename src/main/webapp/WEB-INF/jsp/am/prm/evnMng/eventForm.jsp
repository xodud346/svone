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
					<input type="hidden" id="_type" name="_type" value="I" />
					<h3 class="title"><span>이벤트 생성</span></h3>

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
								<th><label class="label"><span>이벤트 형태<i class="require"><em>필수입력</em></i></span></label></th>
								<td colspan="4">
									<input type="radio" id="evtMstType1" name="evtMstType" class="radio" onclick="javascript:setEvtMstType(this);" value="2929" checked="checked" />
									<label for="evtMstType1">일반형</label>
									<input type="radio" id="evtMstType2" name="evtMstType" class="radio" onclick="javascript:setEvtMstType(this);" value="710" />
									<label for="evtMstType2">응모형</label>
									<input type="radio" id="evtMstType3" name="evtMstType" class="radio" onclick="javascript:setEvtMstType(this);" value="708" />
									<label for="evtMstType3">스템프</label>
								</td>
							</tr>
							<tr>
								<th><label class="label"><span>전시 여부<i class="require"><em>필수입력</em></i></span></label></th>
								<td colspan="4">
									<input type="radio" id="evtMstDplYn1" name="evtMstDplYn" class="radio" value="Y" checked="checked" />
									<label for="evtMstDplYn1">전시</label>
									<input type="radio" id="evtMstDplYn2" name="evtMstDplYn" class="radio" value="N" />
									<label for="evtMstDplYn2">미전시</label>
								</td>
							</tr>
							<tr>
								<th><label class="label"><span>전시 기간<i class="require"><em>필수입력</em></i></span></label></th>
								<td colspan="4">
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="evtMstStDt" name="evtMstStDt" value="" readonly="readonly" data-target-end="#evtMstEdDt"/>
									~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="evtMstEdDt" name="evtMstEdDt" value="" readonly="readonly" data-target-start="#evtMstStDt"/>
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
									<input type="text" class="text" id="evtMstWinDt" name="evtMstWinDt" value="" readonly="readonly" data-target-end="" />
								</td>
							</tr>
							<tr>
								<th><label class="label"><span>이벤트 명<i class="require"><em>필수입력</em></i></span></label></th>
								<td colspan="4">
									<input type="text" class="text-xlarge" id="evtMstTitle" name="evtMstTitle" />
								</td>
							</tr>
							<!-- 이미지 영역 START -->
							<tr class="cpnSection" style="display: none;">
								<th rowspan="2" style="border-right:solid 1px #e9e9e9;"><span>쿠폰 설정<i class="require"><em>필수입력</em></i></span></th>
								<th><span>쿠폰 선택</span></th>
								<td colspan="3" class="cpnSection">
									<input type="hidden" id="cpnMstIdx" name="cpnMstIdx" />
									<input type="text" class="text-large" id="cpnMstNm" name="cpnMstNm" readonly="readonly" />
									<a href="javascript:couponPop();" class="icon search2"></a>
								</td>
							</tr>
							<tr class="cpnSection" style="display: none;">
								<th><span>쿠폰 이미지</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file1" data-view="fileView1" data-type="EVT_CPN" data-target-file-cts="fileCts1" accept="image/png" />
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

							<tr class="pcSection">
								<th rowspan="2" style="border-right:solid 1px #e9e9e9;"><span>[PC] 이미지<i class="require"><em>필수입력</em></i></span></th>
								<th><span>목록 이미지</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file1" data-view="fileView2" data-type="EVT_PC_LIST" data-target-file-cts="fileCts2" accept="image/png" />
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
							<tr class="pcSection">
								<th><span>상세 이미지</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file1" data-view="fileView3" data-type="EVT_PC_DTL" data-target-file-cts="fileCts3" accept="image/png" />
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
							<tr class="mobileSection">
								<th rowspan="2" style="border-right:solid 1px #e9e9e9;"><span>[Mobile] 이미지<i class="require"><em>필수입력</em></i></span></th>
								<th><span>목록 이미지</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file1" data-view="fileView4" data-type="EVT_MO_LIST" data-target-file-cts="fileCts4" accept="image/png" />
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
							<tr class="mobileSection">
								<th><span>상세 이미지</span></th>
								<td colspan="3">
									<input type="file" class="file hide" name="file1" data-view="fileView5" data-type="EVT_MO_DTL" data-target-file-cts="fileCts5" accept="image/png" />
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
							<!-- 이미지 영역 END -->
							<tr>
								<th><span>유의사항</span></th>
								<td colspan="4">
									<textarea rows="7" class="textarea xlarge" name="evtMstMemo" style="resize:none;"></textarea>
								</td>
							</tr>
						</tbody>
					</table>
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
	<div id="quickmenu" class="aside right">
		<%@ include file="/WEB-INF/jsp/am/include/quick.jsp" %>
	</div>
</div>

<div id="footer">
	<%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>

<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>

<script src="/am/js/common/jquery.ajax.js"></script>
<script>
$(window).load(function(){
	var alertMsg = '${alertMsg }';
	if(alertMsg){
		alert(alertMsg);
	}
});
$(function(){
	var $pre = "";
	var $frm = $("#frm");

	/* 쿠폰설정 show hide */
	setEvtMstType = function(obj){
		console.log('setEvtMstType', $(obj).val());
		var evtMstType = $(obj).val();
		if(evtMstType == '708')	{	// 708 스템프
			$(".cpnSection input").val('');
			$('.cpnSection input[name=fileCd]').val('EVT_CPN');
			$(".cpnSection").show();
		} else {
			$(".cpnSection").hide();
			$(".cpnSection input").val('');
		}
	}

	/* 당첨자 발표일 show hide */
	setWinDisplay = function(obj){
		console.log('setEvtMstType', $(obj).val());
		var evtMstWinUseYn = $(obj).val();
		if(evtMstWinUseYn == 'Y'){
			$("#evtMstWinDt").val('');
			$(".evtWinDate").show();
		} else {
			$(".evtWinDate").hide();
			$("#evtMstWinDt").val('');
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

	// 취소 버튼 클릭(목록이동)
	goList = function(){
		if(confirm("취소하시겠습니까?")){
			$frm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/evnMng/eventView.do", "target":"_self", "method":"post"}).submit();
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

			if (confirm( "저장 하시겠습니까?")) {
				$('#_type').val("I");
				$frm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/evnMng/eventCreate.do", "target":"_self", "method":"post"}).submit();
			}
		} else {
			console.log('validation error');
		}
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

		// 파일리스트 삭제
		$target.remove();
	};
	/*********************************
	 * 첨부파일(with 대체텍스트) END
	 ********************************/
});
</script>

</body>
</html>