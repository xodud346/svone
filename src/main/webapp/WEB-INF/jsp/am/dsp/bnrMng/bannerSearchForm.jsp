<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<h3 class="title"><span>조회</span></h3>
<form id="searchForm2" name="searchForm2">
	<input type="hidden" id="BNR_MST_ENV" name="BNR_MST_ENV" value="<c:out value="${commandMap.BNR_MST_ENV }"/>" />
	<input type="hidden" id="BNR_MST_IDX" name="BNR_MST_IDX" value="<c:out value="${commandMap.BNR_MST_IDX }"/>" />
	<input type="hidden" id="CMN_COM_IDX" name="CMN_COM_IDX" value="<c:out value="${commandMap.CMN_COM_IDX }"/>" />
	<input type="hidden" id="BNR_MST_GBN" name="BNR_MST_GBN" value="<c:out value="${commandMap.BNR_MST_GBN }"/>" />
	<input type="hidden" id="BNR_MST_CLS" name="bnrMstCls" value="<c:out value="${commandMap.bnrMstCls }"/>" />
	<input type="hidden" id="CATEGORY_NAME" name="CATEGORY_NAME" value="<c:out value="${commandMap.CATEGORY_NAME }"/>" />
	<input type="hidden" id="BZPLC_ID" name="BZPLC_ID" value="${commandMap.BZPLC_ID}" />
	<input type="hidden" id="BZMN_REG_NO" name="BZMN_REG_NO" value="${commandMap.BZMN_REG_NO}" />
	<input type="hidden" id="LIMIT_YN" name="LIMIT_YN" value="Y" />
	<input type="hidden" id="ATTACH_FILE_ID" name="ATTACH_FILE_ID" value="${commandMap.ATTACH_FILE_ID }"/>
	<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
		<colgroup>
			<col style="width: 15%;" />
			<col style="width: 85%;" />
		</colgroup>
		<tbody>
			<tr>
				<th><span>구분</span></th>
				<td>
					<input type="radio" id="searchBnrMstLoginYn1" name="searchBnrMstLoginYn" class="radio" value="N" <c:if test="${'Y' ne commandMap.searchBnrMstLoginYn }">checked="checked" </c:if>/>
					<label for="searchBnrMstLoginYn1">로그인전</label>
					<input type="radio" id="searchBnrMstLoginYn2" name="searchBnrMstLoginYn" class="radio" value="Y" <c:if test="${'Y' eq commandMap.searchBnrMstLoginYn }">checked="checked" </c:if>/>
					<label for="searchBnrMstLoginYn2">로그인후</label>
				</td>
			</tr>
			<tr id="bzplcTab" <c:if test="${'Y' ne commandMap.searchBnrMstBzplcYn }">style="display:none;"</c:if>>
				<th><span>사업장</span></th>
				<td>
					<input type="radio" id="searchBnrMstBzplcYn1" name="searchBnrMstBzplcYn" class="radio" value="N" <c:if test="${'Y' ne commandMap.searchBnrMstBzplcYn }">checked="checked" </c:if>/>
					<label for="searchBnrMstBzplcYn1">전체</label>
					<input type="radio" id="searchBnrMstBzplcYn2" name="searchBnrMstBzplcYn" class="radio" value="Y" <c:if test="${'Y' eq commandMap.searchBnrMstBzplcYn }">checked="checked" </c:if>/>
					<label for="searchBnrMstBzplcYn2">사업장별</label>
					<input type="text" class="text" name="BZPLC_NM" id="BZPLC_NM" value="${commandMap.BZPLC_NM}" readonly <c:if test="${'Y' ne commandMap.searchBnrMstBzplcYn }">style="display:none;"</c:if>/>
					<a href="javascript:bzplcPopup('searchForm2');" class="icon search2" id="bzplcPopup" <c:if test="${'Y' ne commandMap.searchBnrMstBzplcYn }">style="display:none;"</c:if>></a>
				</td>			       
			</tr>
			<tr>
				<th><span>FO노출여부</span></th>
				<td>
					<input type="radio" id="searchBnrMstDisplayYn1" name="searchBnrMstDisplayYn" class="radio" value="Y" <c:if test="${'N' ne commandMap.searchBnrMstDisplayYn }">checked="checked" </c:if>/>
					<label for="searchBnrMstDisplayYn1">노출중</label>
					<input type="radio" id="searchBnrMstDisplayYn2" name="searchBnrMstDisplayYn" class="radio" value="N" <c:if test="${'N' eq commandMap.searchBnrMstDisplayYn }">checked="checked" </c:if>/>
					<label for="searchBnrMstDisplayYn2">비노출중</label>
				</td>
			</tr>
		</tbody>
	</table>
</form>
<div id="searchForm2Btn" class="grid section-button-search"><!-- 검색 하단 버튼 -->
	<a href="javascript:searchClearForm('searchForm2');" class="button small"><span>초기화</span></a>
	<a href="javascript:search();" class="button small primary"><span>조회</span></a>
</div>
<h3 class="title"><span id="categoryTitle"></span></h3>

<script>
$(function() {
	// 구분 라디오 버튼 클릭 이벤트
	$("input:radio[name=searchBnrMstLoginYn]").click(function(){
		if($("#searchBnrMstLoginYn2").is(":checked")) {
			$("#bzplcTab").show();
		} else {
			$("#bzplcTab").hide();
			$("#searchBnrMstBzplcYn1").prop('checked', true);
			$("#BZPLC_NM").hide();
			$("#bzplcPopup").hide();
			$("#BZPLC_ID").val("");
			$("#BZPLC_NM").val("");
			$("#BZMN_REG_NO").val("");
		}
	});
	
	// 사업장 라디오 버튼 클릭 이벤트
	$("input:radio[name=searchBnrMstBzplcYn]").click(function(){
		if($("#searchBnrMstBzplcYn2").is(":checked")) {
			$("#BZPLC_NM").show();
			$("#bzplcPopup").show();
		} else {
			$("#BZPLC_NM").hide();
			$("#bzplcPopup").hide();
			$("#BZPLC_ID").val("");
			$("#BZPLC_NM").val("");
			$("#BZMN_REG_NO").val("");
		}
	});
 	
	// 조회 버튼 클릭
    search = function(){
 		var $formId = $("#searchForm2").serialize();
 		var idx = $("#CMN_COM_IDX").val();
 		
 		if($("#searchBnrMstBzplcYn2").is(":checked")) {
    		if("" == $("#BZPLC_NM").val()) {
    			alert("사업장을 등록해주세요.");
    			return false;
    		}
    	}
 		
		if(idx != "") {
			$.ajax({
				type : "POST",
				async : true,
				dataType : "html",
				url : '<c:out value="${serverDomain}"/>/am/dsp/bnrMng/bannerList.do',
				data : $formId,
				success : function(data){
					$('#bannerList').html(data);
				}
			});
		} else {
			alert("카테고리를 클릭해 주세요.");
		}
		
// 		if(idx == 2989 )
	}
 	
 	// 사업장 조회 팝업 return function
	fnResultBzplc = function(params){
		var gubun		= ',';
		var bzplcId		= '';
		var bzplcNm		= '';
		var bzplcNo		= '';
		
		$.each(params, function(idx, data){
			var id = data.ID;
			var nm = data.NM;
			var no	= data.NO;
			
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
		
		$("#BZPLC_ID").val(bzplcId);
		$("#BZPLC_NM").val(bzplcNm);
		$("#BZMN_REG_NO").val(bzplcNo);
	}
 	
	
})

// 초기화
function searchClearForm(formId){
	// 구분 라디오버튼
    $("#"+formId).find("input[name=searchBnrMstLoginYn]:eq(0)").prop("checked", true);
 	// 시압징 라디오버튼
	$("#"+formId).find("input[name=searchBnrMstBzplcYn]:eq(0)").prop("checked", true);
	// FO노출여부 라디오버튼
 	$("#"+formId).find("input[name=searchBnrMstDisplayYn]:eq(0)").prop("checked", true);
	
	// 사업장 영역 숨기기
	$("#bzplcTab").hide();
	// 사업장 팝업 버튼
	$("#bzplcPopup").hide();
	// 사업장명 노출 영역
	$("#BZPLC_NM").hide();
	$("#BZPLC_NM").val("");
	// 사업장ID
	$("#BZPLC_ID").val("");
	// 사업자번호
	$("#BZMN_REG_NO").val("");
}

</script>
