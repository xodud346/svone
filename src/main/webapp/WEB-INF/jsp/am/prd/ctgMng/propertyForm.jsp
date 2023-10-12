<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<c:choose>
		<c:when test="${not empty propertyInfo}">
			<title>SSP속성 상세</title>
		</c:when>
		<c:otherwise>
			<title>SSP속성 추가</title>
		</c:otherwise>
	</c:choose>
</head>
<body class="page-popup">
	<div class="modal">
		<div class="modal-wrapper">
			<div class="modal-inner">
				<c:choose>
					<c:when test="${not empty propertyInfo}">
						<h3 class="title"><span>SSP속성 상세</span></h3>
					</c:when>
					<c:otherwise>
						<h3 class="title"><span>SSP속성 추가</span></h3>
					</c:otherwise>
				</c:choose>
				<form id="frm" name="frm">
					<input type="hidden" id="attrCd" name="attrCd" value="${propertyInfo.attrCd}" />
					<input type="hidden" id="prdSprCd" name="prdSprCd" value="${commandMap.prdSprCd}" />
					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
							<col style="width: 30%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<c:if test="${not empty propertyInfo}">
								<tr>
									<th><span>SSP속성코드</span></th>
									<td>${propertyInfo.attrCd}</td>
								</tr>
							</c:if>
							<tr>
								<th><span>SSP속성명</span></th>
								<td>
									<input type="text" class="text" style="width: 100%;" id="attrNm" name="attrNm" value="${propertyInfo.attrNm}" />
								</td>
							</tr>
							<tr>
								<th><span>사용여부</span></th>
								<td>
									<input type="radio" id="useYn1" class="radio" name="useYn" value="Y" <c:if test="${'N' ne propertyInfo.useYn}">checked="checked" </c:if>/>
									<label for="useYn1">사용</label>
									<input type="radio" id="useYn2" class="radio" name="useYn" value="N" <c:if test="${'N' eq propertyInfo.useYn}">checked="checked" </c:if>/>
									<label for="useYn2">미사용</label>
								</td>
							</tr>
							<c:if test="${not empty propertyInfo}">
								<tr>
									<th><span>SSP속성사용 상품군 수</span></th>
									<td>${propertyInfo.attrCnt}</td>
								</tr>
								<tr>
									<th><span>등록일</span></th>
									<td>${propertyInfo.regDtm}</td>
								</tr>
								<tr>
									<th><span>최종수정일</span></th>
									<td>${propertyInfo.updDtm}</td>
								</tr>
							</c:if>
						</tbody>
					</table>
				</form>
				<div class="section-button-list pt30">
					<div class="wrap text-center">
					<c:choose>
						<c:when test="${not empty propertyInfo}">
							<a href="javascript:self.close();" class="button large"><span>닫기</span></a>
							<a href="javascript:goSave();" class="button large primary"><span>저장</span></a>
						</c:when>
						<c:otherwise>
							<a href="javascript:goList();" class="button large"><span>취소</span></a>
							<a href="javascript:goSave();" class="button large primary"><span>등록</span></a>
						</c:otherwise>
					</c:choose>
					</div>
				</div>
			</div>
		</div>
	</div>

<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>

<script type="text/javascript">
$(function(){
	
	var $frm = $("#frm");
	
	// 속성 valid체크
	attrNmValidation = function () {
		
		if("" == $("#attrNm").val()) {
			alert("SSP속성명을 입력해 주세요");
			$("#attrNm").focus();
			return false;
		}
		
		var result = true;
		
		$.ajax({
			type    : "POST",
			url     : "/am/prd/ctgMng/propertyChk.do",
			data    : $frm.serialize(),
			dataType : "json",
			async 	: false,
			success : function(data) {
				if("fail" == data.result) {
					alert(data.resultMsg);
					$("#attrNm").focus();
					result = false;
				}
			},
			error   : function(xhr,status,error) {
				alert("속성 체크 중 에러가 발생하였습니다.");	
			}
		});
		
		return result;
	}
	
	// 저장
	goSave = function () {
		
		var confirmMsg = "";
		var attrCnt = "${propertyInfo.attrCnt}";
		var oldUseYn = "${propertyInfo.useYn}";
		
		if(attrCnt > 0) {
			if(oldUseYn != $("input[name=useYn]:checked").val()) {
				alert("해당 속성을 사용하는 상품군이 있습니다.");
				return false;
			}
		}
		
		if(!attrNmValidation()) {
			return false;
		}
		
		if("" != $("#attrCd").val()) {
			confirmMsg = "수정된 내용으로 저장하시겠습니까?";
		} else {
			confirmMsg = "입력된 정보로 등록처리 하시겠습니까?";
		}
		
		if (confirm(confirmMsg)) {
			 $.ajax({
				type    : "POST",
				url     : "/am/prd/ctgMng/propertySave.do",
				data    :  $frm.serialize(),
				dataType : "json",
				success : function(data) {
					alert(data.resultMsg);
					self.close();
					window.opener.search();
				},
				error   : function(xhr,status,error) {
					alert("속성 등록/수정 중 에러가 발생하였습니다.");
				}
			});  
		}
	}
	
	// 취소
	goList = function () {
		if (confirm("등록을 취소하시겠습니까?")) {
			self.close();
		}
	}
});
</script>
</body>
</html>
