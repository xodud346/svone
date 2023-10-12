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
	
	<%-- 날짜선택시 종료일 없음 체크해제--%>
	$('#js-datepickr-end').on('click', function(){
		$('#postNotEnd').prop("checked", false);
	});
	
	<%-- 종료일 없음 체크박스 클릭 시 --%>
	$('#postNotEnd').on('click', function(){
		$('#brdAgrEdDt').val("");
	});
	
	<%-- 등록버튼 클릭 시 --%>
	$('#goRegist').on('click',function(){
		
		var brdAgrStDt 			= $('input[name="brdAgrStDt"]').val();
		var brdAgrEdDt 			= $('input[name="brdAgrEdDt"]').val();
		var postNotEnd 			= $('input[name="postNotEnd"]').is(":checked");
		var brdAgrContents 		= $('input[name="brdAgrContents"]').val();
		var searchBrdCmnComIdx 	= $('#searchBrdCmnComIdx').val();
		
		if(searchBrdCmnComIdx == ""){
			alert("유형은 필수 입력항목입니다.");
			$("#searchBrdCmnComIdx").focus();
			return false;
		}		
		
		if(brdAgrStDt == ""){
			alert("게시 시작일은 필수 입력항목입니다.");
			return false;
		}
		
		if(!postNotEnd){		
			if(brdAgrEdDt == ""){
				alert("게시 종료일은 필수 입력항목입니다.");
				return false;
			}
		}
		if($.trim($("#brdAgrTitle").val()) == ""){
			alert("개정 이력은 필수 입력항목입니다.");
			$("#brdAgrTitle").focus();
			return false;
		}
		
		//editor 내용을 BRD_NTS_CONTENTS TEXTAREA의 VALUE 값으로 만든다.
    	try { 
    		oEditors.getById["brdAgrContents"].exec("UPDATE_CONTENTS_FIELD", []);	 
    	} catch(e){ 
    		
    	}
    	
        var CONTENTS = stringUtil.getString($.trim($("#brdAgrContents").val()), "");
        
        if (CONTENTS == "" || CONTENTS == "<p>&nbsp;</p>" ){
        	 alert("내용은 필수 입력항목입니다.");
            $("#brdAgrContents").focus();
            return false;
        }
		
        $('#_type').val("I");
        
        $("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/cnt/trmMng/useTermCreate.do", "target":"_self", "method":"post"}).submit();
        
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
				
					<h2 class="title"><span>이용 약관</span></h2>
					<h3 class="title"><span>등록</span></h3>
					<p>
					   <span><i class="require"><em>필수입력</em></i></span> 표시된 항목은 필수 입력 사항입니다.
					</p>
	
					<form id="frm" name="frm" enctype="multipart/form-data"> 
						<input type="hidden" id="_type" name="_type" value=""/>
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
									<select class="select" name="searchBrdCmnComIdx" id="searchBrdCmnComIdx">
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
									<th><label class="label"><span>상태</span></label></th>
									<td colspan="3">
										<input type="radio" name="brdAgrUseYn" id="brdAgrUseY" value="Y" class="radio" checked ="checked" />
										<label for="brdAgrUseY">사용</label>
										<input type="radio" name="brdAgrUseYn" id="brdAgrUseN" value="N" class="radio" />
										<label for="brdAgrUseN">미사용</label>
									</td>
								</tr>
								<tr>
									<th><label class="label"><span>게시 일자<i class="require"><em>필수입력</em></i></span></label></th>
									<td colspan="3">
										<a href="#none" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text" id="brdAgrStDt" name="brdAgrStDt" readonly="readonly" data-target-end="#brdAgrEdDt" placeholder="YYYY-MM-DD" />
										~
										<a href="#none" id="#js-datepickr-end" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text" id="brdAgrEdDt" name="brdAgrEdDt" readonly="readonly" data-target-start="#brdAgrStDt" placeholder="YYYY-MM-DD"/>
										<input type="checkbox" class="checkbox" name="postNotEnd" id="postNotEnd" data-not-end="Y" value="Y"/>
										<label for="postNotEnd">종료일 없음</label>
									</td>
								</tr>
								<tr>
									<th><label class="label"><span>개정 이력<i class="require"><em>필수입력</em></i></span></label></th>
									<td colspan="3">
										<input type="text" name="brdAgrTitle" id="brdAgrTitle" class="text xlarge" placeholder="최대 40자까지 입력하실 수 있습니다." style="width:80%;" maxlength="40"/>
									</td>
								</tr>
								<tr>
									<th><label class="label"><span>내용<i class="require"><em>필수입력</em></i></span></label></th>
									<td colspan="3">
										<textarea class="textarea" name="brdAgrContents" id="brdAgrContents" style="height: 500px; width:80%;"></textarea>
									</td>
								</tr>
							</tbody>
						</table><!-- // table -->
					</form>
	
					<div class="section-button">
						<div class="wrap text-center">
							<a href="#none" id="goList" class="button large"><span>취소</span></a>
							<a href="#none" id="goRegist" class="button large primary"><span>등록</span></a>
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
	<ui:editor objId="#brdAgrContents"/>
</body>
</html>