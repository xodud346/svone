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
	var faqTyp = '${map.BRD_AGR_TYPE}';	<%-- 유형 --%>
	$('select[name="BRD_AGR_TYPE"]').val(faqTyp).prop("selected", true);
	
	<%-- 취소버튼 클릭 시 --%>
	$('#goList').on('click',function(){
		if(confirm('취소하시겠습니까?')){
			$('#frm').attr({"action":"<c:out value="${serverDomain}" />/am/cnt/trmMng/useTermList.do", "target":"_self", "method":"post"}).submit();	
		}
	});
	
	<%-- 게시 종료일 있을 경우 종료일 없음 체크해제 --%>
	if($('#searchEndDt').val() != null && $('#searchEndDt').val() != ""){
		$('#postNotEnd').prop("checked", false);
	}
	
	<%-- 종료일 없음 클릭시 게시 종료일 공백으로--%>
	$('#postNotEnd').on('click', function(){
		$('#searchEndDt').val("");
	});
	
	<%-- 날짜선택시 종료일 없음 체크해제--%>
	$('#js-datepickr-end').on('click', function(){
		$('#postNotEnd').prop("checked", false);
	});

	<%-- 저장버튼 클릭 시 --%>
	$('#goRegist').on('click',function(){
		
		var searchStrDt 			= $('input[name="searchStrDt"]').val();
		var searchEndDt 			= $('input[name="searchEndDt"]').val();
		var postNotEnd 				= $('input[name="postNotEnd"]').is(":checked");
		var BRD_AGR_CONTENTS 		= $('input[name="BRD_AGR_CONTENTS"]').val();
		
 		var brdCmnComIdx = $('#BRD_AGR_TYPE').val();
		
		if(brdCmnComIdx == ""){
			alert("유형은 필수 입력항목입니다.");
			$("#BRD_AGR_TYPE").focus();
			return false;
		}
		
		if(searchStrDt == ""){
			alert("게시 시작일은 필수 입력항목입니다.");
			return false;
		}
		
		if(!postNotEnd){		
			if(searchEndDt == ""){
				alert("게시 종료일은 필수 입력항목입니다.");
				return false;
			}
		}
		
		if($.trim($("#BRD_AGR_TITLE").val()) == "")
        {
			alert("개정 이력은 필수 입력항목입니다.");
            $("#BRD_FAQ_TITLE").focus();
            return false;
        }
		
		//editor 내용을 BRD_NTS_CONTENTS TEXTAREA의 VALUE 값으로 만든다.
    	try { 
    		oEditors.getById["BRD_AGR_CONTENTS"].exec("UPDATE_CONTENTS_FIELD", []);	 
    	} catch(e){ 
    		
    	}
    	
        var CONTENTS = stringUtil.getString($.trim($("#BRD_AGR_CONTENTS").val()), "");
        
        if (CONTENTS == "" || CONTENTS == "<p>&nbsp;</p>" ){
        	alert("내용은 필수 입력항목입니다.");
            $("#BRD_AGR_CONTENTS").focus();
            return false;
        } 

        $('#_type').val("M");
        
        $("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/cnt/trmMng/useTermEdit.do", "target":"_self", "method":"post"}).submit();
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
				
					<h2 class="title"><span>이용약관</span></h2>
					<p>
					   <span><i class="require"><em>필수입력</em></i></span> 표시된 항목은 필수 입력 사항입니다.
					</p>
	
					<form id="frm" name="frm" enctype="multipart/form-data"> 
						<input type="hidden" name="_type"			id="_type"			value=""/>
						<input type="hidden" name="BRD_AGR_IDX"		id="BRD_AGR_IDX"	value="${map.BRD_AGR_IDX }"/>
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
										<select class="select" name="BRD_AGR_TYPE" id="BRD_AGR_TYPE">
											<option value="">전체</option>
											<c:if test="${not empty codes.AGREEMENT_BOARD_TYPE_CODE }">
											<c:forEach var="TrmRow" items="${codes.AGREEMENT_BOARD_TYPE_CODE }" varStatus="i">
											<option value="<c:out value="${TrmRow.CMN_COM_IDX }"/>" <c:if test="${map.searchBrdCmnComIdx eq TrmRow.CMN_COM_IDX}">selected="selected"</c:if>>
												<c:out value="${TrmRow.CMN_COM_NM }"/>
											</c:forEach>
											</c:if>
									</select>
									</td>
								</tr>
								<tr>
									<th><span>상태</span></th>
										<td colspan="3">
											<input type="radio" name="brdAgrUseYn" id="brdAgrUseY" value="Y" class="radio" <c:if test="${'Y' eq map.BRD_AGR_USE_YN}" >checked="checked" </c:if>/>
											<label for="brdAgrUseY">사용</label>
											<input type="radio" name="brdAgrUseYn" id="brdAgrUseN" value="N" class="radio" <c:if test="${'N' eq map.BRD_AGR_USE_YN}" >checked="checked" </c:if>/>
											<label for="brdAgrUseN">미사용</label>
										</td>
								</tr>
								<tr>
									<th><span>게시일</span></th>
									<td colspan="3">
										<a href="#none" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text" id="searchStrDt" name="searchStrDt" readonly="readonly" data-target-end="#searchEndDt" placeholder="YYYY-MM-DD" value="<ui:formatDate value='${map.BRD_AGR_ST_DT}' pattern='yyyy-MM-dd'/>"/>
										~
										<a href="#none" id ="js-datepickr-end" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text" id="searchEndDt" name="searchEndDt" readonly="readonly" data-target-start="#searchStrDt" placeholder="YYYY-MM-DD" value="<ui:formatDate value='${map.BRD_AGR_ED_DT}' pattern='yyyy-MM-dd'/>"/>
										<input type="checkbox" class="checkbox" name="postNotEnd" id="postNotEnd" value="Y" <c:if test="${map.BRD_AGR_ED_DT == null}" >checked="checked" </c:if>/>
										<label for="postNotEnd">종료일 없음</label>
									</td>
								</tr>
								<tr>
									<th><label class="label"><span>개정 이력<i class="require"><em>필수입력</em></i></span></label></th>
									<td colspan="3">
										<input type="text" name="BRD_AGR_TITLE" id="BRD_AGR_TITLE" class="text xlarge" placeholder="최대 40자까지 입력하실 수 있습니다." style="width:80%;" maxlength="40" value="${map.BRD_AGR_TITLE }"/>
									</td>
								</tr>
								<tr>
									<th><label class="label"><span>내용<i class="require"><em>필수입력</em></i></span></label></th>
									<td colspan="3">
										<textarea class="textarea" name="BRD_AGR_CONTENTS" id="BRD_AGR_CONTENTS" style="height: 500px; width:80%;">${map.BRD_AGR_CONTENTS }</textarea>
									</td>
								</tr>
								<tr>
									<th><label class="label"><span>최초 등록</span></label></th>
									<td>
										<c:out value="${map.BRD_AGR_REG_NM }"/>(<c:out value="${map.BRD_FAQ_REG_ERP }"/>)
									</td>
									<th><label class="label"><span>등록 일시</span></label></th>
									<td>
										<ui:formatDate value="${map.BRD_AGR_REG_DT}" pattern="yyyy-MM-dd HH:mm:ss"/>
									</td>
								</tr>
								<tr>
									<th><label class="label"><span>최종 수정</span></label></th>
									<td>
										<c:out value="${map.BRD_AGR_UPD_NM }"/>(<c:out value="${map.BRD_FAQ_UPD_ERP }"/>)
									</td>
									<th><label class="label"><span>수정 일시</span></label></th>
									<td>
										<ui:formatDate value="${map.BRD_AGR_UPD_DT }" pattern="yyyy-MM-dd HH:mm:ss"/>
									</td>
								</tr>
							</tbody>
						</table><!-- // table -->
					</form>
	
					<div class="section-button">
						<div class="wrap text-center">
							<a href="#none" id="goList" class="button large"><span>취소</span></a>
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
	<ui:editor objId="#BRD_AGR_CONTENTS"/>
</body>
</html>