<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<c:choose>
	<c:when test="${empty commandMap.BNR_MST_IDX}">
		<h3 class="title">배너 등록</h3>
	</c:when>
	<c:otherwise>
		<h3 class="title">배너 수정</h3>
	</c:otherwise>
</c:choose>

<p><i class="require"><em>필수입력</em></i> 표시된 항목은 필수 입력 사항입니다.</p>

<form id="goListForm" name="goListForm">
	<input type="hidden" id="CMN_COM_IDX" name="CMN_COM_IDX" value="<c:out value="${commandMap.CMN_COM_IDX }"/>" />
	<input type="hidden" id="BNR_MST_GBN" name="BNR_MST_GBN" value="<c:out value="${commandMap.BNR_MST_GBN }"/>" />
	<input type="hidden" name="searchBnrMstDisplayYn" value="<c:out value="${commandMap.searchBnrMstDisplayYn }"/>"/>
	<input type="hidden" name="searchBnrMstLoginYn" value="<c:out value="${commandMap.searchBnrMstLoginYn }"/>"/>
	<input type="hidden" name="searchBnrMstBzplcYn" value="<c:out value="${commandMap.searchBnrMstBzplcYn}"/>"/>
	<input type="hidden" name="BZPLC_ID" value="<c:out value="${commandMap.BZPLC_ID}"/>"/>
	<input type="hidden" name="BZPLC_NM" value="<c:out value="${commandMap.BZPLC_NM}"/>"/>
	<input type="hidden" name="BZMN_REG_NO" value="<c:out value="${commandMap.BZMN_REG_NO}"/>"/>
	<input type="hidden" name="CATEGORY_NAME" value="<c:out value="${commandMap.CATEGORY_NAME }"/>" />
</form>

<form name="frm" id="frm" enctype="multipart/form-data">
    <input type="hidden" name="CMN_COM_IDX" value="<c:out value="${commandMap.CMN_COM_IDX }"/>" />
    <input type="hidden" id="BNR_MST_ENV" name="BNR_MST_ENV" value="<c:out value="${commandMap.BNR_MST_ENV }"/>" />
    <input type="hidden" id="BNR_MST_IDX" name="BNR_MST_IDX" value="<c:out value="${commandMap.BNR_MST_IDX }"/>" />
    <input type="hidden" id="BNR_MST_GBN" name="BNR_MST_GBN" value="<c:out value="${commandMap.BNR_MST_GBN }"/>" />
    <input type="hidden" id="BZPLC_ID" name="BZPLC_ID" value="${bnrInfo.BZPLC_ID}" />
    <input type="hidden" id="BZMN_REG_NO" name="BZMN_REG_NO" value="<c:out value="${commandMap.BZMN_REG_NO}"/>"/>
    <input type="hidden" id="ATTACH_FILE_ID" name="attachFileId" value="${commandMap.atflId }"/>
    <input type="hidden" id="USE_YN" name="USE_YN" value="${commandMap.USE_YN }" />
    <input type="hidden" id="searchCnt" name="searchCnt" value="3" />
    <input type="hidden" id="delFileSeq" name="delFileSeq" value="" />
    <input type="hidden" id="CATEGORY_NAME" name="CATEGORY_NAME" value="<c:out value="${commandMap.CATEGORY_NAME }"/>" />
    <input type="hidden" id="searchBnrMstDisplayYn" name="searchBnrMstDisplayYn" value="<c:out value="${commandMap.searchBnrMstDisplayYn }"/>"/>
	<input type="hidden" id="searchBnrMstLoginYn" name="searchBnrMstLoginYn" value="<c:out value="${commandMap.searchBnrMstLoginYn }"/>"/>
	<input type="hidden" id="searchBnrMstBzplcYn" name="searchBnrMstBzplcYn" value="<c:out value="${commandMap.searchBnrMstBzplcYn}"/>"/>
	<input type="hidden" id="searchBzplcNm" name="searchBzplcNm" value="<c:out value="${commandMap.BZPLC_NM}"/>"/>
    <input type="hidden" id="searchBzplcId" name="searchBzplcId" value="<c:out value="${commandMap.BZPLC_ID}"/>"/>
    
	<table cellspacing="0" class="table-row table-a"><!-- table -->
		<colgroup>
			<col style="width: auto;" />
			<col style="width: auto;" />
		</colgroup>
		<tbody>
			<tr>
				<th><label class="label"><span>사용여부<i class="require"><em>필수입력</em></i></span></label></th>
				<td>
					<input type="radio" name="BNR_MST_USE_YN" id="BNR_MST_USE_YN1" class="radio" value="Y" <c:if test="${'N' ne bnrInfo.BNR_MST_USE_YN }">checked="checked" </c:if>/>
		            <label for="BNR_MST_USE_YN1">사용</label>
		            <input type="radio" name="BNR_MST_USE_YN" id="BNR_MST_USE_YN2" class="radio" value="N" <c:if test="${'N' eq bnrInfo.BNR_MST_USE_YN }">checked="checked" </c:if>/>
		            <label for="BNR_MST_USE_YN2">미사용</label>
				</td>
			</tr>
			<tr>
				<th><label class="label"><span>구분</span></label></th>
				<td>
					<input type="radio" name="BNR_MST_LOGIN_YN" id="BNR_MST_LOGIN_YN1" class="radio" value="N" <c:if test="${'Y' ne bnrInfo.BNR_MST_LOGIN_YN }">checked="checked" </c:if>/>
		            <label for="BNR_MST_LOGIN_YN1">로그인전</label>
		            <input type="radio" name="BNR_MST_LOGIN_YN" id="BNR_MST_LOGIN_YN2" class="radio" value="Y" <c:if test="${'Y' eq bnrInfo.BNR_MST_LOGIN_YN }">checked="checked" </c:if>/>
		            <label for="BNR_MST_LOGIN_YN2">로그인후</label>
				</td>
			</tr>
			<tr id="bzplcTab1" <c:if test="${'Y' ne bnrInfo.BNR_MST_LOGIN_YN }">style="display:none;"</c:if>>
				<th <c:if test="${'Y' eq bnrInfo.BNR_MST_BZPLC_YN }">rowspan="2"</c:if>><label class="label"><span>대상</i></span></label></th>
				<td>
					<input type="radio" name="BNR_MST_BZPLC_YN" id="BNR_MST_BZPLC_YN1" class="radio" value="N" <c:if test="${'Y' ne bnrInfo.BNR_MST_BZPLC_YN }">checked="checked" </c:if>/>
		            <label for="BNR_MST_BZPLC_YN1">전체</label>
		            <input type="radio" name="BNR_MST_BZPLC_YN" id="BNR_MST_BZPLC_YN2" class="radio" value="Y" <c:if test="${'Y' eq bnrInfo.BNR_MST_BZPLC_YN }">checked="checked" </c:if>/>
		            <label for="BNR_MST_BZPLC_YN2">사업장별</label>
		            <input type="text" class="text" id="BZPLC_NM" name="BZPLC_NM" value="${bnrInfo.BZPLC_NM}" readonly="readonly" <c:if test="${'Y' ne bnrInfo.BNR_MST_BZPLC_YN }">style="display:none;"</c:if>/>
					<a href="javascript:bzplcPopup('frm');" class="icon search2" id="bzplcPopup" <c:if test="${'Y' ne bnrInfo.BNR_MST_BZPLC_YN }">style="display:none;"</c:if>></a>
				</td>
			</tr>
			<tr id="bzplcTab2" <c:if test="${'Y' ne bnrInfo.BNR_MST_BZPLC_YN }">style="display:none;"</c:if>>
           		<td>
           			<!-- 사업장 리스트 -->
           		</td>
           	</tr>
           	
           	
           	<tr>
           		<th><label class="label"><span>유형</span></label></th>
           		<td>
					<input type="radio" name="BNR_MST_PRD_YN" id="BNR_MST_PRD_YN1" class="radio" value="Y" <c:if test="${'N' ne bnrInfo.BNR_MST_PRD_YN }">checked="checked" </c:if>/>
		            <label for="BNR_MST_PRD_YN1">상품포함</label>
		            <input type="radio" name="BNR_MST_PRD_YN" id="BNR_MST_PRD_YN2" class="radio" value="N" <c:if test="${'N' eq bnrInfo.BNR_MST_PRD_YN }">checked="checked" </c:if>/>
		            <label for="BNR_MST_PRD_YN2">상품미포함</label>
				</td>
           	</tr>
           	<tr id="productTab" <c:if test="${'N' eq bnrInfo.BNR_MST_PRD_YN }">style="display:none;"</c:if>>
           		<th><label class="label"><span>상품(3개만가능)</span></label></th>
           		<td>
           			<input type="text" class="text" style="width: 50%;" id="prdId" name="prdId" value="${bnrInfo.BNR_PRD_CD}"/>
           			<a href="javascript:productPopup('frm');" class="icon search2" id="prdArea"></a>
           		</td>
           	</tr>
           	
           	
           	
			<tr>
				<th><label class="label"><span>탭명<i class="require"><em>필수입력</em></i></span></label></th>
				<td>
					<input type="text" name="BNR_MST_TITLE" id="BNR_MST_TITLE" class="text xlarge" style="width: 80%;" maxlength="150" value="<c:out value="${bnrInfo.BNR_MST_TITLE }"/>"/>
				</td>
			</tr>
			<tr>
				<th><label class="label"><span>전시기간<i class="require"><em>필수입력</em></i></span></label></th>
				<td>
					<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
					<input type="text" class="text" id="BNR_MST_ST_DT" name="BNR_MST_ST_DT" readonly="readonly" value='<ui:formatDate value="${bnrInfo.BNR_MST_ST_DT}" pattern="yyyy-MM-dd"/>' data-target-end="#BNR_MST_ED_DT"/>
					~
					<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
					<input type="text" class="text" id="BNR_MST_ED_DT" name="BNR_MST_ED_DT"  readonly="readonly" value='<ui:formatDate value="${bnrInfo.BNR_MST_ED_DT}" pattern="yyyy-MM-dd"/>' data-target-start="#BNR_MST_ST_DT"/>
					
					<select name="fnDateSelect" id="fnDateSelect">
						<option value="1week">1주일</option>
						<option value="15th">15일</option>
						<option value="1month">1개월</option>
						<option value="noEndDate">종료일 없음</option>
					</select>
				</td>
			</tr>
			<tr>
				<th><label class="label"><span>이미지 <i class="require"><em>필수입력</em></i></span></label></th>
				<td>
					<input type="file" class="file hide fileOneDepth" name="file" data-view="fileView1" data-type="" data-target-file-cts="fileCts" accept="image/png" />
					<a href="javascript:;" onclick="$(this).prev().click();" class="button small"><span>파일첨부(일반)</span></a>
					<span>용량 : 10M 미만 / 형식 : PNG (최적 사이즈 : 0,000 * 0,000)</span>
					<br>
					
					<div id="fileView1" class="mt10" style="border: solid 1px #d0d0d0; min-height: 30px;">
						<ul style="padding: 5px;">
							<c:forEach items="${fileList }" var="fileRow" varStatus="i">
							<c:choose>
								<c:when test="${not empty fileRow }">
									<li data-file-seq="${fileRow.fileSeq }">
										<i class="icon-file"></i>
										<span class="file-list-title"><c:out value="${fileRow.orignlFileNm }" />
											<input id="fileSeq" type="hidden" name="fileSeq" value="${fileRow.fileSeq }"/>
											<input type="hidden" name="orignlFileNm" value="${fileRow.orignlFileNm }"/>
											<input type="hidden" name="attachFileSavePath" value="${fileRow.attachFileSavePath }"/>
											<input type="hidden" name="fileCdId" value="${fileRow.fileCdId }"/>
											<input type="hidden" name="targetFileCts" value="fileCts" />
										</span>
										<span class="pull-right"><fmt:formatNumber value="${(fileRow.fileSz+0.01) div (1024+0.01)}" pattern=".00" />KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>
									</li>
								</c:when>
								<c:otherwise></c:otherwise>
							</c:choose>
							</c:forEach>	
						</ul>
					</div>
				</td>
			</tr>
			<tr>
				<th><label class="label"><span>URL <i class="require"><em>필수입력</em></i></span></label></th>
				<td>
					<input type="radio" name="BNR_MST_TGT" id="BNR_MST_TGT1" value="D" <c:if test="${'D' eq bnrInfo.BNR_MST_TGT or null eq bnrInfo.BNR_MST_TGT}">checked="checked" </c:if>><label for="BNR_MST_TGT1">링크없음</label>
		        	<input type="radio" name="BNR_MST_TGT" id="BNR_MST_TGT2" value="S" <c:if test="${'S' eq bnrInfo.BNR_MST_TGT }">checked="checked" </c:if>><label for="BNR_MST_TGT2">현재창</label>
		        	<input type="radio" name="BNR_MST_TGT" id="BNR_MST_TGT3" value="N" <c:if test="${'N' eq bnrInfo.BNR_MST_TGT }">checked="checked" </c:if>><label for="BNR_MST_TGT3">새창열림</label>
		        	<br />
		            <input type="text" name="BNR_MST_URL" id="BNR_MST_URL" class="text" value="<c:out value="${bnrInfo.BNR_MST_URL }"/>" style="width: 80%;" maxlength="200"/>
				</td>
			</tr>
			
			<tr>
				<th><label class="label"><span>대체 텍스트<i class="require"><em>필수입력</em></i></span></label></th>
				<td>
					<input type="text" name="fileCts" class="text-large" value="${fileList[0].fileCts }" placeholder="40 Byte 이내로 입력해 주세요." onkeyup="checkByte(this)" /> -->
					<span class="nowByte">(0</span><span> / 40 Byte)</span>
				</td>
			</tr>
			
		</tbody>
	</table>
</form>
<div class="section-button">
	<div class="wrap text-right">
		<a href="javascript:goList();" class="button large"><span>목록</span></a>
		<a href="javascript:doSave();" class="button large primary"><span>저장</span></a>
	</div>
</div>
<script type="text/javascript">
$(function () {
	
	// 초기 세팅 
	if("" == $("#BNR_MST_IDX").val()) {	// 등록
		// 날짜
		fnDateSet('BNR_MST_ST_DT', 'BNR_MST_ED_DT', 0, 0, 0, 0, 0, 7,  '-');	// 노출기간(1주일)
	} else {	// 수정
		if("Y" == "${bnrInfo.BNR_MST_BZPLC_YN}") {
			// 사업장 세팅
			var params = new Array();
			var $bzplcIds = "${bnrInfo.BZPLC_ID}".split(",");
			var $bzplcNms = "${bnrInfo.BZPLC_NM}".split(",");
			var $bzplcRegNos = "${bnrInfo.BZMN_REG_NO}".split(",");
	
			$.each($bzplcIds, function (index) {
				obj		= new Object();
				obj.ID	= $bzplcIds[index];
				obj.NM	= $bzplcNms[index];
				obj.NO	= $bzplcRegNos[index];
				
				params.push(obj);
			})
			
			fnResultBzplc(params);
		}
	}
	
	// 구분 라디오 버튼 클릭 이벤트
	$("input:radio[name=BNR_MST_LOGIN_YN]").click(function(){
		if($("#BNR_MST_LOGIN_YN2").is(":checked")) {
			$("#bzplcTab1").show();
		} else {
			$("#bzplcTab1").hide();
			$("#BNR_MST_BZPLC_YN1").prop('checked', true);
			bzplcReset();
		}
	});
	
	// 사업장 라디오 버튼 클릭 이벤트
	$("input:radio[name=BNR_MST_BZPLC_YN]").click(function(){
		if($("#BNR_MST_BZPLC_YN2").is(":checked")) {
			$("#BZPLC_NM").show();
			$("#bzplcPopup").show();
		} else {
			bzplcReset();
		}
	});
	
	// 상품적용여부 라디오 버튼 클릭 이벤트
	$("input:radio[name=BNR_MST_PRD_YN]").click(function(){
		if($("#BNR_MST_PRD_YN1").is(":checked")) {
			$("#productTab").show();
		} else {
			$("#productTab").hide();
		}
	});
	
	// 노출기간 옵션선택
    $('#fnDateSelect').change(function(){
    	var date = $(this).val();
    	
    	if(date == "1week") {
    		fnDateSet('BNR_MST_ST_DT', 'BNR_MST_ED_DT', 0, 0, 0, 0, 0, 7,  '-');
    	} else if(date == "15th") {
    		fnDateSet('BNR_MST_ST_DT', 'BNR_MST_ED_DT', 0, 0, 0, 0, 0, 15,  '-');
    	} else if(date == "1month") {
    		fnDateSet('BNR_MST_ST_DT', 'BNR_MST_ED_DT', 0, 0, 0, 0, 1, 0,  '-');
    	} else {
    		$("#BNR_MST_ED_DT").val("2099-12-31");
    	}
    });
	
	
	// 필수 체크
	validate = function () {
		if($("#BNR_MST_BZPLC_YN2").is(":checked")) {
			if("" == $("#BZPLC_NM").val()) {
				alert("사업장을 등록해주세요.");
				return false;
			}
		}
 		
		if("" == $("#BNR_MST_TITLE").val().trim()) {
			alert("탭명을 입력해주세요.");
			$("#BNR_MST_TITLE").focus();
			return false;
		}
		
		if($("#fileView1 > ul > li").length == 0) {
			alert("이미지를 등록해주세요.");
			return false;
		}
		
		if(!$("#BNR_MST_TGT1").is(":checked")) {
			if("" == $("#BNR_MST_URL").val().trim()) {
				alert("URL을 입력해주세요.");
				$("#BNR_MST_URL").focus();
				return false;
			}
		}
		
		if("" == $("input[name=fileCts]").val()) {
			alert("대체텍스트를 입력해주세요.");
			$("input[name=fileCts]").focus();
			return false;
		}
		
		if($("#BNR_MST_PRD_YN1").is(":checked")) {
			var arrBNR_PRD_CD = $("#prdId").val().split(",");
			
			if("" == arrBNR_PRD_CD) {
				alert("상품을 등록해주세요.");
				$("#prdId").focus();
				return false;
			}
			
			if(arrBNR_PRD_CD.length > 3) {
				alert("상품은 3개까지 등록 가능합니다.");
				$("#prdId").focus();
				return false;
			}
			if(productCheck(arrBNR_PRD_CD) == 0){
				return false;
			}
		}
		
		return true;
	}
	
	// 등록/수정
	doSave = function () {
		
		var $frm = $("#frm");
		if(!validate()) {
  			return false;
  		}
		// 상품 미적용시 상품 input 빈값처리
		if($("#BNR_MST_PRD_YN2").is(":checked")) {
			$("#prdId").val("");
		}
		console.log($("#prdId").val());
		
		// 링크없음 인경우 url 빈값처리
		if($("#BNR_MST_TGT1").is(":checked")) {
			$("#BNR_MST_URL").val("");
		}
		$frm.attr({"action":"/am/dsp/bnrMng/bannerSave.do", "target":"_self", "method":"post"}).submit();
	};
	
	// 삭제	
    /*goDelete = function () {
		
		var fileSeq = $("#fileSeq").val();
    	
		var delFileSeq = $("#delFileSeq").val();
		var delFileSeqArray = new Array();
		if(delFileSeq != ""){
			delFileSeqArray = delFileSeq.split(",");	
		}
		 
		
		if(delFileSeqArray.indexOf(fileSeq) == -1){
			//없으니까
			delFileSeqArray.push(fileSeq);
		 	$("#delFileSeq").val(delFileSeqArray.join(","));
		}
		
        var $frm = $("#frm");

        if (confirm( "이 배너를 삭제 하시겠습니까?")) {
            $("#frm").attr({"action":"/am/dsp/bnrMng/bannerDelete.do", "target":"_self", "method":"post"}).submit();
        }
    };*/
	
	// 목록 이동 함수
    goList = function () {
        var $frm = $("#goListForm");
        
        if (confirm("입력한 내용은 저장되지 않습니다. 목록으로 이동하시겠습니까?")) {
        	$("#searchSection").load("/am/dsp/bnrMng/bannerSearchForm.do", $frm.serialize() , function () {
    			$("#categoryTitle").html($("#CATEGORY_NAME").val());
    			$("#bannerList").show();
    		});
        }
    };
    
    // 사업장 삭제
	bzplcDel = function(thisData) {
		
		thisData.remove();
		
		var params = new Array();
		
		$("#bzplcTab2 > td > a").each(function(idx, data) {
    		obj		= new Object();
			obj.ID	= $(this).data('id');
			obj.NM	= $(this).data('nm');
			obj.NO	= $(this).data('no');
			
			params.push(obj);
    	});
		
		fnResultBzplc(params);
	}
});
// 상품 체크
function productCheck(arrBNR_PRD_CD) {
	var result = 0;
	$.ajax({
         type    : "POST",
         url     : "/am/dsp/bnrMng/productCheck.do",
         data    :  {"arrBNR_PRD_CD" : arrBNR_PRD_CD},
         dataType : "json",
         success : function(data) {
        	 if("fail" == data.resultCode) {
				return result;
        	 } else {
        		result = 1;
 				return result;
        	 }
        	 
         },
         error   : function(xhr,status,error) {
         	if("edit" == $formType) {
         		alert("팝업 수정 중 에러가 발생하였습니다.");	
         	} else {
         		alert("팝업 등록 중 에러가 발생하였습니다.");
         	}
              
         }
     });
}

//사업장 조회 팝업 return function
function fnResultBzplc(params){
	var gubun		= ',';
	var bzplcId		= '';
	var bzplcNm		= '';
	var bzplcNo		= '';
	var innerHtml = '';
	
	$.each(params, function(idx, data){
		var id = data.ID;
		var nm = data.NM;
		var no	= data.NO;
		
		innerHtml += '<a href="javascript:;" onclick="bzplcDel(this);" id="bzplcId_'+id+'" class="button small btnDelete" data-id="'+id+'" data-nm="'+nm+'" data-no="'+no+'"><span>'+nm+'</span></a>';
		
		if(idx > 0) {
			bzplcId		= bzplcId+gubun+id;
			bzplcNm		= bzplcNm+gubun+nm;
			bzplcNo		= bzplcNo+gubun+no;
		} else {
			bzplcId		= id;
			bzplcNm		= nm;
			bzplcNo		= no;
		}
	})
	
	if(params.length < 1) {
		$("#bzplcTab1").find("th").attr("rowspan",1);
		$("#bzplcTab2").hide();
	} else {
		$("#bzplcTab1").find("th").attr("rowspan",2);
		$("#bzplcTab2").show();
		$("#bzplcTab2").find("td").html(innerHtml);
	}
	
	$("#frm").find("#BZPLC_ID").val(bzplcId);
	$("#frm").find("#BZPLC_NM").val(bzplcNm);
	$("#frm").find("#BZMN_REG_NO").val(bzplcNo);
}

function fnSetProduct(params) {
	
	var prdId = "";
	var gubun = ",";
	$.each(params, function(idx, data){
		if(idx < 1) {
			prdId += data.prdId; 
		} else {
			prdId += gubun+data.prdId;
		}
	});
	
	$("#prdId").val(prdId);
}

//사업장 영역 초기화
function bzplcReset() {
	$("#bzplcTab1").find("th").attr("rowspan",1);
	$("#bzplcTab2").hide();
	$("#frm").find("#BZPLC_NM").val("");
	$("#frm").find("#BZPLC_NM").hide();
	$("#frm").find("#BZPLC_ID").val("");
	$("#frm").find("#BZMN_REG_NO").val("");
	$("#bzplcPopup").hide();
}


/*********************************
 * 첨부파일(with 대체텍스트) START
 ********************************/
 var fCnt = 0;
// 파일 첨부 이벤트
$("input[type=file].fileOneDepth").off("change").on("change" , function(){
	// 첨부한 파일 데이터
	var fData = $(this)[0].files;

	// 파일리스트 영역
	var fileView = $(this).data('view');
	var fileType = $(this).data('type');
	var targetFileCts = $(this).data('targetFileCts');
	console.log('fileType,targetFileCts\n',fileType,targetFileCts);

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

//파일 삭제 클릭 이벤트
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
</script>
</body>
</html>