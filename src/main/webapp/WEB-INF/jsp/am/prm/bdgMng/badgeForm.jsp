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
				<h2 class="title"><span>배지 관리</span></h2>

				<form id="searchForm" name="searchForm" enctype="multipart/form-data">
					<input type="hidden" id="FILE_CHANGE_YN" name="FILE_CHANGE_YN" />
					<h3 class="title"><span>배지 생성</span></h3>

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
								<th><span>상태<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="4">
									<input type="radio" class="radio" id="useYn1" name="useYn" value="Y" checked="checked" />
									<label for="useYn1">사용</label>
									<input type="radio" class="radio" id="useYn2" name="useYn" value="N" />
									<label for="useYn2">미사용</label>
								</td>
							</tr>
							<tr>
								<th><span>배지 명<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="4">
									<input type="text" class="text-xlarge essential" id="prdBgNm" name="prdBgNm" />
								</td>
							</tr>
							<tr>
								<th><span>이미지<i class="require"><em>필수입력</em></i></span></th>
								<td colspan="4">
									<input type="file" class="file hide" name="file" data-view="fileView1" data-type="NOR" data-target-file-cts="fileCts1" accept="image/png" />
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

<!-- 									<a href="javascript:;" onclick="uploadFile(this)" class="button small"><span>파일첨부</span></a> -->
<!-- 									<input type="file" class="file" name="attachFileId" id="attachFileId" style="display:none;" /> -->
<!-- 									<span>용량 : 10M 미만 / 1개 파일 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span> -->
<!-- 									<br><br> -->
<!-- 									<input type="text" class="text-large" id="FILE_NM" readonly="readonly" /> -->
<!-- 									<br><br> -->
<!-- 									<span>대체 텍스트 : </span> -->
<!-- 									<input type="text" class="text-large" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" name="fileCn" maxByte="40" /> -->
<!-- 									<span id="nowByte">(0</span><span> / 40 Byte)</span> -->
								</td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="section-button-list">
					<div class="wrap text-center">
						<a href="javascript:goList();" class="button large"><span>취소</span></a>
						<a href="javascript:createSubmit();" class="button large primary"><span>등록</span></a>
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

// 	uploadFile = function(id){
// 		$(id).next().click();
// 	}

// 	$(".file").on("change", function(){
// 		var maxSize = 10 * 1024 * 1024;
// 		var fileSize = $(this)[0].files[0].size;

// 		if(maxSize < fileSize){
// 			alert("10MB 이내로 등록 가능합니다.");
// 			return;
// 		}

// 		var fileFullPathArr = $(this).val().split("\\");
// 		var fileName = fileFullPathArr[fileFullPathArr.length-1];
// 		$(this).nextAll("#FILE_NM").val(fileName);
// 		$("#FILE_CHANGE_YN").val("Y");
// 	});

// 	checkByte = function(id){
// 		const maxByte = 40;
// 		const textVal = id.value;
// 		const textLen = textVal.length;

// 		let totalByte = 0;

// 		for(let i = 0; i < textLen; i++){
// 			const eachChar = textVal.charAt(i);
// 			const uniChar = escape(eachChar);
// 			if(uniChar.length > 4){
// 				totalByte += 2;
// 			}else{
// 				totalByte += 1;
// 			}
// 		}

// 		if(totalByte > maxByte){
// 			$(id).next().html("(" + totalByte);
// 			$(id).nextAll("span").css("color", "red");
// 		}else{
// 			$(id).next().html("(" + totalByte);
// 			$(id).nextAll("span").css("color", "#333333");
// 		}
// 	}


	goList = function(){
		if(confirm("취소하시겠습니까?")){
			$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/bdgMng/badgeView.do", "target":"_self", "method":"post"}).submit();
		}
	}
	
	createSubmit = function(){

		// 폼체크
	    $searchForm.validate({
	        rules: {
	        	prdBgNm:{required:true},
	        	fileCts1:{required:true}
	        },
	        messages :{
	        	prdBgNm : {required:"배지 명을 반드시 입력해 주십시오."},
	        	fileCts1: {required:"대체 텍스트를 반드시 입력해 주십시오."}
			}
	    });
	    if($searchForm.valid()){ 
	    	
	    	if($("input[name=targetFileCts]").length <= 0){
	    		alert("이미지를 반드시 선택해 주십시오.");
	    		return;
	    	}
	    	
	    	if(confirm("등록 하시겠습니까?")){
				$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/bdgMng/badgeCreate.do", "target":"_self", "method":"post"}).submit();	
			
			}
	    }
	}

});
</script>

</body>
</html>