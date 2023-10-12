<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css">
<!--
-->
</style>
</head>
<body><!-- body class, 중요 -->

<div id="header"><!-- header -->
	<%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</div><!-- // header -->

<div id="container"><!-- container -->

	<div id="aside" class="aside left"><!-- aside -->
		<%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
	</div><!-- // aside -->

	<div id="wrapper"><!-- wrapper -->
		<div id="breadcrumb"></div>
		<div id="contents">
			<div class="container">
				<h2 class="title"><span>팝업관리</span></h2>
				<c:choose>
					<c:when test="${'edit' eq commandMap.formType}">
						<h3 class="title"><span>수정</span></h3>
					</c:when>
					<c:otherwise>
						<h3 class="title"><span>등록</span></h3>
					</c:otherwise>
				</c:choose>
				<p>
				<span><i class="require"><em>필수입력</em></i></span> 표시된 항목은 필수 입력 사항입니다.
				</p>
				<form id="searchForm" name="searchForm">
					<input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/>
					<input type="hidden" name="pageSize" value="<c:out value="${commandMap.pageSize }"/>"/>
					<input type="hidden" name="searchPopMstChnGbn" value="<c:out value="${commandMap.searchPopMstChnGbn }"/>"/>
					<input type="hidden" name="searchPopMstLoginYn" value="<c:out value="${commandMap.searchPopMstLoginYn }"/>"/>
					<input type="hidden" name="searchPopMstBzplcYn" value="<c:out value="${commandMap.searchPopMstBzplcYn}"/>"/>
					<input type="hidden" name="BZPLC_ID" value="<c:out value="${commandMap.BZPLC_ID}"/>"/>
					<input type="hidden" name="BZPLC_NM" value="<c:out value="${commandMap.BZPLC_NM}"/>"/>
					<input type="hidden" name="BZMN_REG_NO" value="<c:out value="${commandMap.BZMN_REG_NO}"/>"/>
					<input type="hidden" name="searchTxt" value="<c:out value="${commandMap.searchTxt }"/>" />
					<input type="hidden" name="searchStartDate" value="<c:out value="${commandMap.searchStartDate }"/>"/>
					<input type="hidden" name="searchEndDate" value="<c:out value="${commandMap.searchEndDate }"/>" />
					<input type="hidden" name="searchPopMstUseYn" value="<c:out value="${commandMap.searchPopMstUseYn }"/>"/>
					<input type="hidden" name="listBack" value="Y"/>
				</form>

				<form id="frm" name="frm" enctype="multipart/form-data">
					<input type="hidden" id="formType" name="formType" value="${commandMap.formType}" />
					<input type="hidden" id="POP_MST_IDX" name="POP_MST_IDX" value="${commandMap.POP_MST_IDX}" />
					<input type="hidden" id="BZPLC_ID" name="BZPLC_ID" value="${popInfo.BZPLC_ID}" />
					<input type="hidden" id="BZMN_REG_NO" name="BZMN_REG_NO" value="${popInfo.BZMN_REG_NO}" />

					<table cellspacing="0" class="table-row table-a"><!-- table -->
						<colgroup>
							<col style="width: auto;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><label class="label"><span>전시채널</span></label></th>
								<td>
									<input type="radio" id="POP_MST_CHN_GBN0" class="radio" name="POP_MST_CHN_GBN" value="A" <c:if test="${'A' eq popInfo.POP_MST_CHN_GBN or (empty popInfo.POP_MST_CHN_GBN)}">checked="checked" </c:if>/>
									<label for="POP_MST_CHN_GBN0">전체</label>
									<input type="radio" id="POP_MST_CHN_GBN1" class="radio" name="POP_MST_CHN_GBN" value="P" <c:if test="${'P' eq popInfo.POP_MST_CHN_GBN }">checked="checked" </c:if>/>
									<label for="POP_MST_CHN_GBN1">PC</label>
									<input type="radio" id="POP_MST_CHN_GBN2" class="radio" name="POP_MST_CHN_GBN" value="M" <c:if test="${'M' eq popInfo.POP_MST_CHN_GBN }">checked="checked" </c:if>/>
									<label for="POP_MST_CHN_GBN2">MOBILE</label>
								</td>
							</tr>
							<tr>
								<th><label class="label"><span>구분</span></label></th>
								<td>
									<input type="radio" id="POP_MST_LOGIN_YN1" class="radio" name="POP_MST_LOGIN_YN" value="N" <c:if test="${'Y' ne popInfo.POP_MST_LOGIN_YN }">checked="checked" </c:if>/>
									<label for="POP_MST_LOGIN_YN1">로그인전</label>
									<input type="radio" id="POP_MST_LOGIN_YN2" class="radio" name="POP_MST_LOGIN_YN" value="Y" <c:if test="${'Y' eq popInfo.POP_MST_LOGIN_YN }">checked="checked" </c:if>/>
									<label for="POP_MST_LOGIN_YN2">로그인후</label>
								</td>
							</tr>
							<tr id="bzplcTab1" <c:if test="${'Y' ne popInfo.POP_MST_LOGIN_YN }">style="display:none;" </c:if>>
								<th <c:if test="${'Y' eq popInfo.POP_MST_BZPLC_YN }">rowspan="2"</c:if>><span>사업장</span></th>
								<td>
									<input type="radio" id="POP_MST_BZPLC_YN1" class="radio" name="POP_MST_BZPLC_YN" value="N" <c:if test="${'Y' ne popInfo.POP_MST_BZPLC_YN }">checked="checked" </c:if>/>
									<label for="POP_MST_BZPLC_YN1">전체</label>
									<input type="radio" id="POP_MST_BZPLC_YN2" class="radio" name="POP_MST_BZPLC_YN" value="Y" <c:if test="${'Y' eq popInfo.POP_MST_BZPLC_YN }">checked="checked" </c:if>/>
									<label for="POP_MST_BZPLC_YN2">사업장별</label>
									<input type="text" class="text" id="BZPLC_NM" name="BZPLC_NM" value="${popInfo.BZPLC_NM}" readonly="readonly" <c:if test="${'Y' ne popInfo.POP_MST_BZPLC_YN }">style="display:none;"</c:if>/>
									<a href="javascript:bzplcPopup('frm');" class="icon search2" id="bzplcPopup" <c:if test="${'Y' ne popInfo.POP_MST_BZPLC_YN }">style="display:none;"</c:if>></a>
								</td>
							</tr>
							<tr id="bzplcTab2" <c:if test="${'Y' ne popInfo.POP_MST_BZPLC_YN }">style="display:none;"</c:if>>
								<td>
									<!-- <a href="javascript:;" onclick="bzplcDel(this);" id="bzplcId_'+id+'" class="button small btnDelete" data-id="'+id+'" data-nm="'+nm+'" data-no="'+no+'"><span>'+nm+'</span></a> -->
								</td>
							</tr>
							<tr>
								<th><label class="label"><span>제목<i class="require"><em>필수입력</em></i></span></label></th>
								<td>
									<input type="text" class="text xlarge POP_MST_TITLE" id="POP_MST_TITLE" name="POP_MST_TITLE" value="${popInfo.POP_MST_TITLE}" style="width:80%;" />
									(<span id="msgbyte1">0</span><span id="trMsgMaxByte">/150</span>&nbsp;byte)
								</td>
							</tr>
							<tr><!-- row -->
								<th><label class="label"><span>노출기간<i class="require"><em>필수입력</em></i></span></label></th>
								<td>
									<div class="datepickerWrap">
										<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text" id="POP_MST_ST_DT" name="POP_MST_ST_DT" readonly="readonly" placeholder="YYYY-MM-DD" data-target-end="#POP_MST_ED_DT" value='<ui:formatDate value="${popInfo.POP_MST_ST_DT}" pattern="yyyy-MM-dd"/>' />
										~
										<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text" id="POP_MST_ED_DT" name="POP_MST_ED_DT" readonly="readonly" placeholder="YYYY-MM-DD" data-target-start="#POP_MST_ST_DT" value='<ui:formatDate value="${popInfo.POP_MST_ED_DT}" pattern="yyyy-MM-dd"/>' />
										<select name="dateSet" id="dateSet" class="_inqTerm">
											<option value="7">1주일</option>
											<option value="15">15일</option>
											<option value="30">1개월</option>
										</select>
										<input type="checkbox" class="checkbox" name="postNotEnd" id="postNotEnd" data-not-end="Y" value="Y"/>
										<label for="postNotEnd">종료일 없음</label>
									</div>
								</td>
							</tr>
							<tr>
								<th><label class="label"><span>사용상태<i class="require"><em>필수입력</em></i></span></label></th>
								<td>
									<input type="radio" id="POP_MST_DPL_YN1" class="radio" name="POP_MST_DPL_YN" value="Y" <c:if test="${'N' ne popInfo.POP_MST_DPL_YN }">checked="checked" </c:if>/>
									<label for="POP_MST_DPL_YN1">사용</label>
									<input type="radio" id="POP_MST_DPL_YN2" class="radio" name="POP_MST_DPL_YN" value="N" <c:if test="${'N' eq popInfo.POP_MST_DPL_YN }">checked="checked" </c:if>/>
									<label for="POP_MST_DPL_YN2">미사용</label>
								</td>
							</tr>
							<tr>
								<th><label class="label"><span>내용<i class="require"><em>필수입력</em></i></span></label></th>
								<td>
									<textarea class="textarea" name="POP_MST_IMG_TXT" id="POP_MST_IMG_TXT" style="height: 500px; width:80%;">${popInfo.POP_MST_IMG_TXT}</textarea>
								</td>
							</tr>
						</tbody>
					</table><!-- // table -->
				</form>
				<div class="section-button"><!-- section-button -->
					<div class="wrap text-center">
						<c:if test="${'edit' eq commandMap.formType}">
							<a href="javascript:goDelete()" id="goDelete" class="button large primary"><span>삭제</span></a>
						</c:if>
						<a href="javascript:goList();" id="goList" class="button large"><span>목록</span></a>
						<a href="javascript:goSave()" id="goSave" class="button large primary"><span>저장</span></a>
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
<ui:editor objId="#POP_MST_IMG_TXT"/>
<script>
$(function(){

	// 초기 세팅
	if("regist" == $("#formType").val()) {	// 등록
		// 날짜
		fnDateSet('POP_MST_ST_DT', 'POP_MST_ED_DT', 0, 0, 0, 0, 0, 7,  '-');	// 노출기간(1주일)
	} else {	// 수정

		if("Y" == "${popInfo.POP_MST_BZPLC_YN}") {
			// 사업장 세팅
			var params = new Array();
			var $bzplcIds = "${popInfo.BZPLC_ID}".split(",");
			var $bzplcNms = "${popInfo.BZPLC_NM}".split(",");
			var $bzplcRegNos = "${popInfo.BZMN_REG_NO}".split(",");

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

	// 제목 바이트 체크 이벤트
	$(document).on("keyup","#POP_MST_TITLE",function(){
		getStrByte(this,'#msgbyte1', 150, 2);
	});

	// 구분 라디오 버튼 클릭 이벤트
	$("input:radio[name=POP_MST_LOGIN_YN]").click(function(){
		if($("#POP_MST_LOGIN_YN2").is(":checked")) {
			$("#bzplcTab1").show();
		} else {
			$("#bzplcTab1").hide();
			$("#POP_MST_BZPLC_YN1").prop('checked', true);
			bzplcReset();
		}
	});

	// 사업장 라디오 버튼 클릭 이벤트
	$("input:radio[name=POP_MST_BZPLC_YN]").click(function(){
		if($("#POP_MST_BZPLC_YN2").is(":checked")) {
			$("#BZPLC_NM").show();
			$("#bzplcPopup").show();
		} else {
			bzplcReset();
		}
	});

	// 노출기간 옵션선택
	$("#dateSet").change(function(){
		var dateVal = $(this).val();

		if("7" == dateVal) {	// 1주일
			fnDateSet('POP_MST_ST_DT', 'POP_MST_ED_DT', 0, 0, 0, 0, 0, 7,  '-');
		} else if("15" == dateVal) {	// 15일
			fnDateSet('POP_MST_ST_DT', 'POP_MST_ED_DT', 0, 0, 0, 0, 0, 15,  '-');
		} else if("30" == dateVal) {	// 1개월
			fnDateSet('POP_MST_ST_DT', 'POP_MST_ED_DT', 0, 0, 0, 0, 1, 0,  '-');
		}

		// 종료일 없음 초기화
		$('#postNotEnd').prop('checked',false);

	});

	<%-- 종료일 없음 체크박스 클릭 시 --%>
	$('#postNotEnd').on('click', function(){
		$('#POP_MST_ED_DT').val("");
	});

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

	// 저장 이벤트
	goSave = function (){
		//editor 내용을 POP_MST_IMG_TXT TEXTAREA의 VALUE 값으로 만든다.
		try { oEditors.getById["POP_MST_IMG_TXT"].exec("UPDATE_CONTENTS_FIELD", []);    } catch(e){ }

		if(!validate()) {
			return false;
		}

		var $frm = $("#frm");
		var $formType = $("#formType").val();

		if (confirm( "저장 하시겠습니까?")) {
			$.ajax({
				type    : "POST",
				url     : "/am/dsp/popMng/popupSave.do",
				data    :  $frm.serialize(),
				dataType : "json",
				success : function(data) {
					alert(data.resultMsg);
					$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/dsp/popMng/popupView.do", "target":"_self", "method":"post"}).submit();
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
	}

	// 삭제 이벤트
	goDelete = function () {
		var $frm = $("#frm");

		if (confirm( "해당 팝업을 삭제하시겠습니까?")) {
			$.ajax({
				type    : "POST",
				url     : "/am/dsp/popMng/popupDelete.do",
				data    :  $frm.serialize(),
				dataType : "json",
				success : function(data) {
					alert(data.resultMsg);
					$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/dsp/popMng/popupView.do", "target":"_self", "method":"post"}).submit();
				},
				error   : function(xhr,status,error) {
					alert("팝업 삭제 중 에러가 발생하였습니다.");
				}
			});
		}
	}

	// 필수 체크
	validate = function () {

		if($("#POP_MST_BZPLC_YN2").is(":checked")) {
			if("" == $("#BZPLC_NM").val().trim()) {
				alert("사업장을 등록해주세요.");
				return false;
			}
		}

		if("" == $("#POP_MST_TITLE").val().trim()) {
			alert("제목을 입력해주세요.");
			$("#POP_MST_TITLE").focus();
			return false;
		}

		var CONTENTS = stringUtil.getString($.trim($("#POP_MST_IMG_TXT").val()), "");
		if (CONTENTS == "" || CONTENTS == "<p>&nbsp;</p>" ){
			alert("내용을 입력해주십시오.");
			return false;
		}

		return true;
	}

	// 목록 이벤트
	goList = function () {
		var $searchForm = $("#searchForm");
		if (confirm( "입력한 내용은 저장되지 않습니다. 목록으로 이동하시겠습니까?")) {
			$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/dsp/popMng/popupView.do", "target":"_self", "method":"post"}).submit();
		}
	}
});

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

		innerHtml += '<a href="javascript:;" onclick="bzplcDel(this);" id="bzplcId_'+id+'" class="button small btnDelete" style="margin-right: 1px;" data-id="'+id+'" data-nm="'+nm+'" data-no="'+no+'"><span>'+nm+'</span></a>';

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

// 사업장 영역 초기화
function bzplcReset() {
	$("#bzplcTab1").find("th").attr("rowspan",1);
	$("#bzplcTab2").hide();
	$("#frm").find("#BZPLC_NM").val("");
	$("#frm").find("#BZPLC_NM").hide();
	$("#frm").find("#BZPLC_ID").val("");
	$("#frm").find("#BZMN_REG_NO").val("");
	$("#bzplcPopup").hide();
}


</script>

</body>
</html>
