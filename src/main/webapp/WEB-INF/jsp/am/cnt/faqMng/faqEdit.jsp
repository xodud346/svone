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

	var faqTyp = '${map.BRD_CMN_COM_IDX}';	<%-- 유형 --%>
	$('select[name="BRD_CMN_COM_IDX"]').val(faqTyp).prop("selected", true);

	<%-- 취소버튼 클릭 시 --%>
	$('#goList').on('click',function(){
		if(confirm("취소하시겠습니까?")){
			$('#frm').attr({"action":"<c:out value="${serverDomain}" />/am/cnt/faqMng/faqList.do", "target":"_self", "method":"post"}).submit();
		}
	});

	<%-- 삭제버튼 클릭 시 --%>
	$('#goDelete').on('click',function(){
		if(confirm("삭제하시겠습니까?")){
			$('#frm').attr({"action":"<c:out value="${serverDomain}" />/am/cnt/faqMng/faqDelete.do", "target":"_self", "method":"post"}).submit();
		}
	});


	<%-- 등록버튼 클릭 시 --%>
	$('#goRegist').on('click',function(){

		var brdCmnComIdx = $('#BRD_CMN_COM_IDX').val();

		if(brdCmnComIdx == ""){
			alert("유형은 필수 입력항목입니다.");
			$("#BRD_CMN_COM_IDX").focus();
			return false;
		}


		if($.trim($("#BRD_FAQ_TITLE").val()) == "")
        {
            alert("제목은 필수 입력항목입니다.");
            $("#BRD_FAQ_TITLE").focus();
            return false;
        }

		//editor 내용을 BRD_NTS_CONTENTS TEXTAREA의 VALUE 값으로 만든다.
    	try {
    		oEditors.getById["BRD_FAQ_CONTENTS"].exec("UPDATE_CONTENTS_FIELD", []);
    	} catch(e){

    	}

        var CONTENTS = stringUtil.getString($.trim($("#BRD_FAQ_CONTENTS").val()), "");

        if (CONTENTS == "" || CONTENTS == "<p>&nbsp;</p>" ){
        	 alert("내용은 필수 입력항목입니다.");
            $("#BRD_FAQ_CONTENTS").focus();
            return false;
        }

        $('#_type').val("M");

        $("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/cnt/faqMng/faqEdit.do", "target":"_self", "method":"post"}).submit();
	});
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

					<h2 class="title"><span>자주하는 질문</span></h2>
					<h3 class="title"><span>등록</span></h3>
					<p>
					   <span><i class="require"><em>필수입력</em></i></span> 표시된 항목은 필수 입력 사항입니다.
					</p>

					<form id="frm" name="frm" enctype="multipart/form-data">
						<input type="hidden" name="_type"			id="_type"			value=""/>
						<input type="hidden" name="BRD_FAQ_IDX"		id="BRD_FAQ_IDX"	value="${map.BRD_FAQ_IDX }"/>
						<table cellspacing="0" class="table-row table-a"><!-- table -->
							<colgroup>
								<col style="width: auto;" />
								<col style="width: 40%" />
								<col style="width: auto;" />
								<col style="width: 40%" />
							</colgroup>
							<tbody>
								<tr>
									<th><label class="label"><span>유형<i class="require"><em>필수입력</em></i></span></label></th>
									<td colspan="3">
										<select class="select" name="BRD_CMN_COM_IDX" id="BRD_CMN_COM_IDX">
											<option value="">선택</option>
											<c:if test="${not empty codes.FAQ_INQUIRY_TYPE_CODE }">
												<c:forEach var="qnaRow" items="${codes.FAQ_INQUIRY_TYPE_CODE }" varStatus="i">
													<option value="<c:out value="${qnaRow.CMN_COM_IDX }"/>" <c:if test="${commandMap.saerchBrdCmnComIdx eq qnaRow.CMN_COM_IDX}">selected="selected"</c:if>>
														<c:out value="${qnaRow.CMN_COM_NM }"/>
													</option>
												</c:forEach>
											</c:if>
										</select>
									</td>
								</tr>
								<tr>
									<th><label class="label"><span>제목<i class="require"><em>필수입력</em></i></span></label></th>
									<td colspan="3">
										<input type="text" name="BRD_FAQ_TITLE" id="BRD_FAQ_TITLE" class="text xlarge" placeholder="최대 40자까지 입력하실 수 있습니다." style="width:80%;" maxlength="40" value="${map.BRD_FAQ_TITLE }"/>
									</td>
								</tr>
								<tr>
									<th><label class="label"><span>내용<i class="require"><em>필수입력</em></i></span></label></th>
									<td colspan="3">
										<textarea class="textarea" name="BRD_FAQ_CONTENTS" id="BRD_FAQ_CONTENTS" style="height: 500px; width:80%;">${map.BRD_FAQ_CONTENTS }</textarea>
									</td>
								</tr>
								<tr>
									<th><label class="label"><span>최초 등록</span></label></th>
									<td>
										<c:out value="${map.BRD_FAQ_REG_NM }"/>(<c:out value="${map.BRD_FAQ_REG_ID }"/>)
									</td>
									<th><label class="label"><span>등록 일시</span></label></th>
									<td>
										<ui:formatDate value="${map.BRD_FAQ_REG_DT }" pattern="yyyy.MM.dd HH:mm:ss"/>
									</td>
								</tr>
								<tr>
									<th><label class="label"><span>최종 수정</span></label></th>
									<td>
										<c:choose>
											<c:when test="${not empty map.BRD_FAQ_UPD_ID }">
												<c:out value="${map.BRD_FAQ_UPD_NM }"/>(<c:out value="${map.BRD_FAQ_UPD_ID }"/>)
											</c:when>
											<c:otherwise>-</c:otherwise>
										</c:choose>
									</td>
									<th><label class="label"><span>수정 일시</span></label></th>
									<td>
										<ui:formatDate value="${map.BRD_FAQ_UPD_DT }" pattern="yyyy.MM.dd HH:mm:ss"/>
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
	<ui:editor objId="#BRD_FAQ_CONTENTS"/>
</body>
</html>