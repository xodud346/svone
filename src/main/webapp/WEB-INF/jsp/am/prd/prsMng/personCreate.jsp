<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<c:choose>
		<c:when test="${not empty personInfo}">
			<title>상품담당자 상세</title>
		</c:when>
		<c:otherwise>
			<title>상품담당자 등록</title>
		</c:otherwise>
	</c:choose>
</head>
<body class="page-popup">
	 <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
	            <c:choose>
					<c:when test="${not empty personInfo}">
						<h3 class="title"><span>상품담당자 상세</span></h3>
					</c:when>
					<c:otherwise>
						<h3 class="title"><span>상품담당자 등록</span></h3>
					</c:otherwise>
				</c:choose>
                <form id="frm" name="frm">
					<input type="hidden" id="chrpsnSeq" name="chrpsnSeq" value="${personInfo.chrpsnSeq}" />
					<input type="hidden" id="chrpsnSprCd" name="chrpsnSprCd" value="${personInfo.chrpsnSprCd}" /> 
					<table class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
							<col style="width: 30%;" />
							<col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                    		<th><span>상품군</span></th>
	                    		<td>
	                    			<input type="hidden" id="prdClsCd" name="prdClsCd" value="${commandMap.prdClsCd}"/> 
	                    			<input type="text" id="prdClsLvlNm" name="prdClsLvlNm" style="width:80%" value="${personInfo.prdCtg}" readonly/>
	                    			<c:if test="${empty personInfo}">
	                    				<a href="javascript:productGroupPopup('frm');" class="icon search2"></a>
	                    			</c:if>
	                    		</td>
	                    	</tr>
		                    <c:if test="${not empty personInfo}">
		                    	<tr>
		                    		<th><span>상태</span></th>
		                    		<td>
		                    			<input type="radio" id="chrYn1" class="radio" name="chrpsnUseYn" value="Y" <c:if test="${'N' ne personInfo.chrpsnUseYn}">checked="checked"</c:if> <c:if test="${'N' eq personInfo.chrpsnUseYn }">disabled</c:if>/>
										<label for="chrYn1">사용</label>
										<input type="radio" id="chrYn2" class="radio" name="chrpsnUseYn" value="N" <c:if test="${'N' eq personInfo.chrpsnUseYn }">checked="checked"</c:if> <c:if test="${'N' eq personInfo.chrpsnUseYn }">disabled</c:if>/>
										<label for="chrYn2">삭제</label>
		                    		</td>
		                    	</tr>
		                    </c:if>
		                    <c:if test="${not empty personInfo}">
		                    	<tr>
		                    		<th><span>담당자</span></th>
		                    		<td>
		                    			<input type="text" class="text" style="width:30%" id="oldChrpsnId" name="oldChrpsnId" value="${personInfo.chrpsnId}" readonly/>
		                    			<input type="text" class="text" style="width:30%" id="oldChrpsnNm" name="oldChrpsnNm" value="${personInfo.chrpsnNm}"  readonly/>
		                    		</td>
		                    	</tr>
		                    </c:if>
	                    	<tr id="person">
	                    		<th>
	                    			<c:choose>
	                    				<c:when test="${not empty personInfo}">
	                    					<span>신규 담당자</span>
	                    				</c:when>
	                    				<c:otherwise>
	                    					<span>담당자</span>
	                    				</c:otherwise>
	                    			</c:choose>
	                    		</th>
	                    		<td>
	                    			<input type="text" class="text" style="width:30%" id="chrpsnId" name="chrpsnId" value="" readonly/>
	                    			<input type="text" class="text" style="width:30%" id="chrpsnNm" name="chrpsnNm" value="" readonly/>
	                    			<a href="javascript:fnPersonResult('frm');" class="icon search2"></a>
	                    		</td>
	                    	</tr>
	                    	<tr>
	                    		<th><span>담당자 구분</span></th>
	                    		<td id="chrpsnGubun"> 
	                    			${personInfo.chrpsnSpr}
	                    		</td>
	                    	</tr>
							<c:if test="${not empty personInfo}">
		                    	<tr>
		                    		<th><span>등록일</span></th>
		                    		<td>${personInfo.regDtm}</td>
		                    	</tr>
		                    	<tr>
		                    		<th><span>등록자</span></th>
		                    		<td>${personInfo.regpsn}</td>
		                    	</tr>
		                    	<tr>
		                    		<th><span>최종수정일</span></th>
		                    		<td>${personInfo.updDtm}</td>
		                    	</tr>
		                    	<tr>
		                    		<th><span>최종수정자</span></th>
		                    		<td>${personInfo.updpsn}</td>
		                    	</tr>
		                    	
			                    <tr id="reasonTr" <c:if test="${'N' ne personInfo.chrpsnUseYn }">style="display:none;"</c:if>>
		                    		<th><span>변경사유<i class="require"><em>*</em></i></span></th>
		                    		<td>
		                    			<textarea name="updRsn" id="updRsn" style="height: 100px;" maxlength="100" value="${personInfo.updRsn}"></textarea>
		                    		</td>
		                    	</tr>
	                    	 </c:if>
	                    	<c:if test="${empty personInfo}">
			                    <tr>
			                   		<td colspan="9">* 정담당자는 1명만 등록 가능하며, 부담당자는 1명 이상 등록할 수 있습니다</td>
			                    </tr>
		                   </c:if>
	                    </tbody>
	                 </table>
	             </form>
	             <div class="section-button-list pt30">
					<div class="wrap text-center">
					<c:choose>
						<c:when test="${not empty personInfo}">
							<a href="javascript:self.close();" class="button large"><span>닫기</span></a>
							<a href="javascript:goSave();" class="button large primary"><span>저장</span></a>
						</c:when>
						<c:otherwise>
							<a href="javascript:goClear();" class="button large"><span>취소</span></a>
							<a href="javascript:goSave();" class="button large primary"><span>등록</span></a>
						</c:otherwise>
					</c:choose>
					</div>
				</div>
			</div>
		</div>
	</div>
	
<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>        
<script type="text/javascript">
$(function () {
	var $frm = $("#frm");

	// 사용 라디오버튼 누르면 활성 / 비활성 
	$("input:radio[name=chrpsnUseYn]").click(function() {	
		if($("input[name=chrpsnUseYn]:checked").val() =="Y"){
			$("#person").show();
			$("#reasonTr").hide();
		} else{
			
			if($("#chrpsnSprCd").val() =="0"){
				alert("정 담당자는 삭제하실수 없습니다.");
				return false;
			}
			
			$("#chrpsnId").val("");
			$("#chrpsnNm").val("");
			$("#person").hide();
			$("#reasonTr").show();
		}
	});
	
	//취소 누를시
	goClear = function() {
		if (confirm("등록을 취소하시겠습니까?")) {
			self.close();
		}
	}
	
	// 등록/수정
	goSave = function() {
		var $chrpsnSeq = $("#chrpsnSeq").val();
		var msg = "";
		
		if("" != $chrpsnSeq) {	// 수정
			
			if($("#oldChrpsnId").val() == $("#chrpsnId").val()){
				alert("신규 담당자와 원래 담당자가 동일합니다.");
				return false;
			}
			
			if("" != $("#chrpsnId").val() || "N" == $("input[name=chrpsnUseYn]:checked").val()){
				if("" == $("#updRsn").val()){
					alert("변경사유를 입력해 주세요");
					return false;
				}
			}
			
			msg = "수정된 내용으로 저장하시겠습니까?";
		} else { // 등록
			if("" == $("#prdClsCd").val()) {
				alert("상품군을 선택해주세요.");
				return false;
			}
			
			if ("" == $("#chrpsnNm").val()){
				alert("담당자를 지정해주세요.");
				return false;
			}
			
			msg = "입력된 정보로 등록처리 하시겠습니까?";
		}
		
		if(confirm(msg)){
			$.ajax({
				type : "POST",
				url  : "/am/prd/prsMng/personRead.do",
				data : $frm.serialize(),
				dataType  : "json",
				success : function (data) {
					alert(data.resultMsg);
					
					if("success" == data.result) {
						self.close();
					}
				},
				error  : function (xhr,status,error) {
					alert("상품담당자 등록/수정 중 에러가 발생하였습니다.");	
				}
			});
		};
	}
		
});
//담당자 팝업
function fnPersonResult(frm){
	popup('', "700", "700", "yes","_personPopup");
	$('#'+frm).attr({"action":"/am/prd/prsMng/personPopupForm.do", "target":"popup_personPopup", "method":"post"}).submit();
} 
	
	//상품군ID 팝업
function productGroupPopup(frm){
		
	popup('', "700", "500", "yes", "_productGroupPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/prd/productGroupPopupForm.do", "target":"popup_productGroupPopup", "method":"post"}).submit();
}

	
//상품ID 호출
function fnResultPrdGroupSingleCallback(eleId,data) {
	
	$("#prdClsLvlNm").val(data.prdClsLvlNm);
	$("#prdClsCd").val(data.prdClsCd);
	
	// 상품군 카테고리의 담당자 체크
	$.ajax({
		type : "POST",
		url  : "/am/prd/prsMng/categoryPersonChk.do",
		data : {"type" : "category", "prdClsCd" : data.prdClsCd},
		dataType  : "json",
		async  : false,
		success : function (result) {
			var person = result.resultCnt < 1 ? "정" : "부";
			
			$("#chrpsnSprCd").val(result.resultCnt);
			$("#chrpsnGubun").html(person);
		},
		error  : function (xhr,status,error) {
			alert("카테고리 체크 중 에러가 발생하였습니다.");	
		}
	});
}

//담당자
function fnPersonResultCallback(inputArray) {

	$("#chrpsnId").val(inputArray.OPRTR_ID);
	$("#chrpsnNm").val(inputArray.OPRTR_NM);
	
	if("" != $("#chrpsnSeq").val()) {
		$("#reasonTr").show();
	}
}
	

</script>               
</body>
</html>