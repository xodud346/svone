<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>사업장 조회</title>

<%@ include file="/WEB-INF/jsp/am/include/script.popup.jsp"%>

<script type="text/javascript">
$(window).load(function(){
	var alertMsg = "${alertMsg }";
	console.log("alertMsg",alertMsg);
	// 최초 접속시 alert처리
	if(alertMsg) {
		alert(alertMsg);
	}
});
$(function(){
	var fCnt = 0;
	var $frm = $("#frm");
	var fileMap = new Map();
	var updateTarget = null;

 	// 초기화 버튼 클릭
    formClear = function(frm) {
    	// form 초기화 (공통)
    	searchClear(frm);
    	// 파일 초기화
    	fileInit();
    	// 타입설정 (I)
    	$('input[name="_type"]').val("I");
    	// 수정대상 초기화
    	updateTarget = null;
    }

    // 유형명 클릭
    modifyData = function(obj) {
    	// 초기화
    	formClear('frm');
    	console.log('modifyData',obj,$(obj));

    	var target = $(obj).closest('tr');
    	updateTarget = target;

    	// 수정 플래그
    	$("#_type").val('U');
    	// 사용여부
    	if(target.find('td.cmnComUseYn').data('useYn') == 'Y'){
	    	$('#cmnComUseYn1').prop("checked", true);
    	} else {
    		$('#cmnComUseYn2').prop("checked", true);
    	}
    	// 유형명
    	$("#brdCmnComNm").val(target.find('td.cmnComNm a').text().trim());
    	// 파일정보
    	var fData = target.find('td.cmnComEtc a');
    	if(fData.length > 0){
    		var	fName = fData.text().trim()
        	,	fSize = fData.data('fileSz');
        	var po ='';
        	po += '<li>';
    		po += '	<i class="icon-file"></i>';
    		po += '	<span>'+fName+'</span>';
    		po += '	<span class="pull-right">'+(fSize / 1024).toFixed(2)+'KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>';
    		po += '</li>';

    		$("#fileView ul").append(po);
    	}
    };

 	// 유형추가 버튼 클릭
    addData = function(frm) {
//     	console.log('addData',$frm);
    	var sortNum = null
    	  , cmnComUseYn = $('input[name="cmnComUseYn"]:checked').val()
    	  , cmnComNm = $('input[name="brdCmnComNm"]').val().trim()
    	  , fileData = $('#fileView ul li')
    	  , $list = $("#_qnaTypList")
    	  , typ = $('input[name="_type"]').val();
    	console.log('cmnComNm, fileData, $list',cmnComNm, typeof cmnComNm, fileData, $list);

    	// 필수값 체크 (유형명)
    	if(cmnComNm == null || cmnComNm == '' || typeof cmnComNm == 'undefined') {
    		alert("유형명은 필수 입력항목입니다.");
    		return false;
    	}
    	// 유형명 중복 체크
    	var dupl = $list.find('tr').toArray().filter(function(target, index){
    		// 수정대상 != 입력정보 && 다른대상 == 입력정보  -> 중복인정
    		var flag = false;
    		if(updateTarget != null) {
    			flag = updateTarget.find("td.cmnComNm a").text().trim() != cmnComNm;
    		}
    		return flag && ($(target).find("td.cmnComNm a").text().trim() == cmnComNm);
    	});
    	if(dupl.length > 0) {
    		alert('중복된 유형이 존재합니다.');
    		return false;
    	}
    	// 필수값 체크 (아이콘)
    	if(fileData.length <= 0) {
    		alert("아이콘은 필수 입력항목입니다.");
    		return false;
    	}

    	// 첨부파일 저장(서버에 실제저장 && DB 저장)
    	// 파일 변경여부 확인
    	var fileChangeYn = $('input[name="_fileChangeYn"]').val();
    	if(fileChangeYn == 'Y'){
    		var files = $('input[name="files"]')[0].files[0];
        	var formData = new FormData();
        	formData.append("files",files);
        	console.log('uploadTst formData',formData);

    		callAjax({
    			type: "POST",
    			url: "/am/cnt/faqMng/saveTmpFileNew.json",
    			enctype: "multipart/form-data",
    			data: formData,
    			callback: function(res) {
    				console.log("res",res);
    				if(res.data != null) {
    					addTr(typ,cmnComUseYn,cmnComNm,res.data);
    				}
    			},
    			onError: function(err) {
    				console.log("err",err);
    			}
    		});

    	} else {
    		// 유형 목록 수정
    		addTr(typ,cmnComUseYn,cmnComNm,null);
    	}

    };

    // 유형 row 추가,수정
    addTr = function(typ,cmnComUseYn,cmnComNm,fileData) {
    	var $list = $("#_qnaTypList");

    	// I: 신규, U: 수정
    	if(typ == "I") {
    		var po = '';
    		sortNum = stringUtil.getInt($list.find('tr').last().find(".col-sort").text(),0) + 1;

    		po += '<tr>';
        	po += '  <td>';
        	po += '  	<a href="#none" class="row-sort" data-sort-type="up">△</a>';
        	po += '  	<a href="#none" class="row-sort" data-sort-type="down">▽</a>';
        	po += '  </td>';
        	po += '  <td class="col-sort" data-cmn-com-idx="">'+sortNum+'</td>';
        	po += '  <td class="cmnComUseYn" data-use-yn="Y">사용</td>';
        	po += '  <td class="cmnComNm"><a href="javascript:void(0);" onclick="modifyData(this);">'+cmnComNm+'</a></td>';
        	po += '  <td class="cmnComEtc" data-cmn-com-etc1="'+fileData.attachFileId+'">';
        	po += '  	<span>';
        	po += '			<a href="#" onclick="imageView(this);" data-file-idx="'+fileData.atflId+'" data-file-seq="'+fileData.fileSeq+'" data-file-sz="'+fileData.fileSz+'">'+fileData.orignlFileNm+'</a>';
        	po += '			<input type="hidden" name="attachFileSavePath" value="'+fileData.attachFileSavePath+'" />';
        	po += '			<input type="hidden" name="isChangeFile" value="Y" />';
        	po += '		</span>';
        	po += '  </td>';
        	po += '</tr>';

        	$list.append(po);

    	} else if (typ == 'U') {
			var target = updateTarget;
			console.log('updateTarget',updateTarget);
			// 수정여부
			target.find('td input[name=isChangeData]').val('Y');
			// 사용여부
			target.find('td.cmnComUseYn').data('useYn',cmnComUseYn);
			target.find('td.cmnComUseYn').html(cmnComUseYn=='Y'? '사용' : '미사용');
			// 유형명
			target.find('td.cmnComNm a').html(cmnComNm);
			// 파일정보
			if(fileData != null){
				var $fTarget = target.find('td.cmnComEtc');
				$fTarget.data('cmnComEtc1',fileData.atflId);

				var po = '';
				po += '  	<span>';
	        	po += ' 		<a href="#" onclick="imageView(this);" data-file-idx="'+fileData.atflId+'" data-file-seq="'+fileData.fileSeq+'" data-file-sz="'+fileData.fileSz+'">'+fileData.orignlFileNm+'</a>';
	        	po += '			<input type="hidden" name="attachFileSavePath" value="'+fileData.attachFileSavePath+'" />';
	        	po += '			<input type="hidden" name="isChangeFile" value="Y" />';
	        	po += '		</span>';

	        	$fTarget.empty();
	        	$fTarget.html(po);
			}
    	}

    	// 총 건수 변경 (전체 tr 갯수로 판단)
    	$(".totalCnt").html($list.find('tr').length);

    	// frm 초기화
    	formClear('frm');

    }

 	// 순서 변경 이벤트
    $(document).on("click", ".row-sort", function () {

        var $this = $(this);
        var $tr = $this.parent().parent();
        var type = $this.data("sortType");

        if(type == "up")
        {
            var $prevTr = $tr.prev();
            if($prevTr.length > 0)
            {
                var $trClone = $tr.clone();
                $prevTr.before($trClone);
                $tr.remove();
             	// 순서변경 여부
    			$trClone.find('td input[name=isChangeData]').val('Y');
                $prevTr.find('td input[name=isChangeData]').val('Y');
            }
            else
            {
                alert("최 상위 순서 입니다.");
                return;
            }
        }
        else
        {
            var $nextTr = $tr.next();
            if($nextTr.length > 0)
            {
                var $trClone = $tr.clone();
                $nextTr.after($trClone);
                $tr.remove();
             	// 순서변경 여부
    			$trClone.find('td input[name=isChangeData]').val('Y');
                $nextTr.find('td input[name=isChangeData]').val('Y');
            }
            else
            {
                alert("최 하위 순서 입니다.");
                return;
            }
        }

        $(".sort-target").find("tr").each(function (i) {
        	console.log('this',i,$(this));
            $(this).find(".col-sort").text(i+1);
        });
    });

 	// TODO: 첨부파일 공통 정리 이후 진행
    // 등록(저장) 버튼 클릭 이벤트
    $(document).on("click", "#goRegist", function () {
        if (confirm( "저장 하시겠습니까?")) {

			var params = [];
			$("#_qnaTypList").find("tr").each(function (i) {
				var param = {};
				param.cmnComIdx = $(this).find('td.cmnComSort').data('cmnComIdx');
				param.cmnComNm = $(this).find('td.cmnComNm a').text();
				param.cmnComSort = $(this).find('td.cmnComSort').text();
				param.cmnComUseYn = $(this).find('td.cmnComUseYn').data('useYn');
				param.atflId = $(this).find('td.cmnComEtc').data('cmnComEtc1');
				param.isChangeFile = $(this).find('input[name=isChangeFile]').val();
				param.isChangeData = $(this).find('input[name=isChangeData]').val();

				params.push(param);
			});

            var pars = {};
            pars.params = params;

            console.log('pars',pars);

            $.ajax ({
               async : false,
               contentType: "application/json;charset=UTF-8",
               type : "POST",
               url : "<c:out value="${serverDomain}" />/am/cnt/faqMng/saveFaqTypAjax.json",
               dataType: "json",
               data : JSON.stringify(pars),
               success : function (data) {
                  console.log('data',data);
                  alert( "저장되었습니다.");
	              self.close();
               },
               error : function () {
                   alert("오류가 발생하였습니다.\n다시 시도 해 주십시오.");
               }
            });
        }
    });

    // 취소버튼 클릭
    popupClose = function() {
    	if (confirm("취소하시겠습니까?")) {
			self.close();
		}
    };

	// 이미지 링크 클릭 시
	imageView = function(obj){
// 		var fileIdx = $(obj).data('fileIdx');
// 		var fileSn = $(obj).data('fileSn');

		var newForm = $('<form></form>');
        var inputs = $(obj).parent().find("input:hidden");
		for(var i = 0 ; i < inputs.length; i++){
			// attachFileSavePath 만 필요
			var po = '<input type="hidden" name="'+$(inputs[i]).attr("name")+'" value="'+$(inputs[i]).val()+'" />';
			newForm.append(po);
		}

		popup('', "600", "600", "yes","_imageView");
        newForm.attr({"action":"<c:out value="${serverDomain}" />/am/common/imageViewPopup.do", "target":"popup_imageView", "method":"post"});
		newForm.appendTo('body');
		newForm.submit();
	};

	/******************
	 * 첨부파일
	 ******************/
	// 파일 첨부 이벤트
	$("#file").off("change").on("change" , function(){
		// 첨부한 파일 데이터
		var fData = $(this)[0].files;

		// 파일 용량 및 수량 제한
		var oLen = $("#fileView ul li").length;
		var nLen = fData.length;
		if((oLen + nLen) > 1){
			alert("첨부파일 수량이 초과되었습니다.");
			$("#file").val("");
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
			$("#file").val("");
			return false;
		}

		// 파일리스트 추가
		Array.from(fData).forEach(function(data,idx){
			var po = '';
// 			console.log('idx_'+idx,data);
			var fSize = (data.size / 1024).toFixed(2);
			var fId = 'file['+fCnt+']';

			po += '<li>';
			po += '	<i class="icon-file"></i>';
			po += '	<span>'+data.name+'</span>';
			po += '	<input type="file" name="files" id="'+fId+'" class="hidden" />';
			po += '	<input type="hidden" name="fileSeq" value="" />';
			po += '	<span class="pull-right">'+fSize+'KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>';
			po += '</li>';

			$("#fileView ul").append(po);

			// 파일 데이터 전달
			var dataTransfer = new DataTransfer();
			dataTransfer.items.add(data);
			document.getElementById(fId).files = dataTransfer.files;

			// 전체 파일 수량 증가
			fCnt++;

			// 초기화
			$("#file").val("");
			// 파일 변경 플래그 설정
			$("#_fileChangeYn").val('Y');
		});
	});

	// 파일 삭제 클릭 이벤트
	fileDelete = function(obj){
		var target = $(obj).closest('li');
// 		console.log('li',target);
		// 파일리스트 삭제
		target.remove();
	};

	// 파일초기화
	fileInit = function() {
		$("#fileView ul").empty();
		$("#file").val();
		$("#_fileChangeYn").val('N');
	}

});

</script>
</head>
<body class="page-popup">
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
				<h3 class="title"><span>FAQ 유형 관리</span></h3>
                <form id="frm" name="frm">
                	<input type="hidden" id="_type" name="_type" value="I" />
                	<input type="hidden" id="_fileChangeYn" name="_fileChangeYn" value="N" />
                	<input type="hidden" id="cmnComSort" name="cmnComSort" value="" />
<!--                 	<input type="hidden" id="attachFileId" name="attachFileId" value="" /> -->
<!--                 	<input type="hidden" id="attachFileSn" name="attachFileSn" value="" /> -->
	                <table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
	                    <colgroup>
	                        <col style="width: 30%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
								<th><label class="label"><span>상태</span></label></th>
								<td>
									<input type="radio" name="cmnComUseYn" id="cmnComUseYn1" class="radio" value="Y" checked="checked" />
						            <label for="cmnComUseYn1">사용</label>
						            <input type="radio" name="cmnComUseYn" id="cmnComUseYn2" class="radio" value="N" />
						            <label for="cmnComUseYn2">미사용</label>
								</td>
							</tr>
	                    	<tr>
	                    		<th><label class="label"><span>유형명 <i class="require"><em>필수입력</em></i></span></label></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="brdCmnComNm" name="brdCmnComNm" value="" />
	                            </td>
	                    	</tr>
	                    	<tr>
								<th><label class="label"><span>아이콘 <i class="require"><em>필수입력</em></i></span></label></th>
								<td>
									<input type="file" name="file" id="file" class="file hide" accept="image/gif, image/jpeg, image/png">
									<a href="javascript:void(0);" onclick="$('#file').click();" class="button small primary"><span>파일첨부</span></a>
									<small class="desc"><strong class="em warning">10MB</strong> 미만의 파일 최대 <strong class="em warning">1개</strong>까지 등록 할 수 있습니다.</small>

									<div id="fileView" class="mt10" style="border: solid 1px #d0d0d0; min-height: 50px;">
										<ul style="padding: 5px;">
										</ul>
									</div>
								</td>
							</tr>
	                    </tbody>
	                </table><!-- // table -->
                </form>

                <div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:formClear('frm');" id="searchClear" class="button small"><span>초기화</span></a>
                    <a href="javascript:addData('frm');" class="button small primary"><span>유형 추가</span></a>
                </div>

                <!-- 조회 결과 영역 -->
               	<div class="grid section-button-list mt60">
                	<div class="col-1-3 text-left">
						<span id="pages" class="pages">
							(총 <strong class="em totalCnt"><c:out value="${fn:length(list) }" /></strong>건)
						</span>
					</div>
					<div class="col-2-3 text-right">
						<span style="color: red;">
							<strong class="em">※ 유형의 상태를 미사용으로 변경 시 종속된 FAQ는 노출되지 않습니다.</strong>
						</span>
					</div>
               	</div>

				<table cellspacing="0" class="table-col table-b">
					<colgroup>
						<col style="width: 8%;" />
						<col style="width: 8%;" />
						<col style="width: 12%;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
					</colgroup>
					<thead>
						<tr>
							<th colspan="2">노출순서</th>
							<th>상태</th>
							<th>유형 명</th>
							<th>아이콘 이미지</th>
						</tr>
					</thead>
					<tbody id="_qnaTypList" class="sort-target">
						<c:choose>
							<c:when test="${not empty list }">
						    	<c:forEach var="row" items="${list }" varStatus="status">
									<tr>
										<td>
											<a href="#none" class="row-sort" data-sort-type="up">△</a>
											<a href="#none" class="row-sort" data-sort-type="down">▽</a>
											<input type="hidden" name="isChangeData" value="N" />
										</td>
										<td class="col-sort cmnComSort" data-cmn-com-idx="<c:out value="${row.CMN_COM_IDX }"/>"><c:out value="${row.CMN_COM_SORT }"/></td>
										<td class="cmnComUseYn" data-use-yn="${row.CMN_COM_USE_YN }"><c:out value="${row.CMN_COM_USE_YN eq 'Y'? '사용' : '미사용'}" /></td>
										<td class="cmnComNm"><a href="javascript:void(0);" onclick="modifyData(this);">${row.CMN_COM_NM }</a></td>
										<td class="cmnComEtc" data-cmn-com-etc1="${row.ATFL_ID }">
											<c:if test="${!empty row.ATFL_ID }">
												<span>
													<a href="#" onclick="javascript:imageView(this);" data-file-idx="${row.ATFL_ID }" data-file-seq="${row.FILE_SEQ }" data-file-sz="${row.FILE_SZ }">${row.ORIGNL_FILE_NM }</a>
													<input type="hidden" name="attachFileSavePath" value="${row.ATTACH_FILE_SAVE_PATH }" />
													<input type="hidden" name="isChangeFile" value="N" />

												</span>
											</c:if>
										</td>
									</tr>
						    	</c:forEach>
						    </c:when>
						    <c:otherwise>
						    	<tr>
									<td class="td_no_result" colspan="5">등록된 유형이 없습니다.</td>
								</tr>
						    </c:otherwise>
						</c:choose>
					</tbody>
				</table>
                <!-- 조회 결과 영역 -->

                <div class="section-button">
					<div class="wrap text-center">
						<a href="javascript:popupClose();" id="goList" class="button large"><span>취소</span></a>
						<a href="#none" id="goRegist" class="button large primary"><span>등록</span></a>
					</div>
				</div>
            </div>
        </div>
    </div>
</body>
</html>
