<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>CAMPAIGN PUSH ADMIN</title>
</head>
<body class="page-popup">
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
				<h3 class="title"><span>SSP카테고리 추가</span></h3>
				<form id="frm" name="frm" method="post" enctype="multipart/form-data">
					<input type="hidden" id="hrnkPrdClsCd" name="hrnkPrdClsCd" value="${commandMap.prdClsCd}" />
					
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 25%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>위치</span></th>
								<c:choose>
									<c:when test="${not empty commandMap.prdClsLvlNm}">
										<td>${commandMap.prdClsLvlNm}</td>
									</c:when>
									<c:otherwise>
										<td>메인</td>
									</c:otherwise>
								</c:choose>
							</tr>
							<tr>
								<th><span>카테고리명<i class="require"><em>필수입력</em></i></span></th>
								<td><input type="text" id="prdClsNm" name="prdClsNm" class="text" placeholder="카테고리명을 입력하세요."/></td>
							</tr>
							<tr>
								<th><span>상품군 여부</span></th>
								<td>
									<label><input type="radio" class="radio" id="lwstYn1" name="lwstYn" value="Y"/>사용</label>
				                	<label><input type="radio" class="radio" id="lwstYn2" name="lwstYn" value="N" checked/>미사용</label>
			                	</td>
							</tr>
							
							<tr id="smroMappRow" style="display:none;">
					            <th><span>S-MRO카테고리 매핑<i class="require"><em>필수입력</em></i></span></th>
					            <td>
					            	<input type="hidden" id="smroMappId" name="smroMappId" value=""/>
					            	<input type="hidden" id="smroMappNm" name="smroMappNm" value=""/>
					                <input type="text" id="smroMappLvlNm" name="smroMappLvlNm" style="width:95%" class="text" readonly/>
					                <a href="javascript:sMroCategoryPopup('frm');" class="icon search2"></a>
					            </td>
					        </tr>
					        <tr id="intgMthdRow" style="display:none;">
					        	<th><span>선정방식</span></th>
					        	<td>
						        	<select name="intgMthdCd" id="intgMthdCd">
						        		<option value="">선택</option>
						        		<c:forEach var="item" items="${intgMthdCdList}" varStatus="status">
						        			<option value="${item.CMN_COM_IDX}">${item.CMN_COM_NM}</option>
						        		</c:forEach>
						        	</select>
					        	</td>
					        </tr>
					        <tr id="imgRow" style="display:none;">
					        	<th><span>전시상품군 이미지</span></th>
					        	<td>
					        		<div class="edit-product-image">
						        		<div class="grid img-list">
						        			<div class="col-1-4">
												<div class="module">
				                            		<div class="thumb">
				                            			<a href="javascript:removeImage();" class="delete" id="imgDel" style="display:none;">>
				                            				<img src="/am/img/ico_close.png" alt="">
				                            			</a>
				                            			<div>
				                            				<img id="categoryImg" alt="">
				                            			</div>
					                                     <p class="action">
					                                     	<a href="javascript:;" onclick="$('#file').click();" class="button small"><span>이미지 등록</span></a>
					                                     	<input type="file" name="file" id="file" class="file" accept="image/gif, image/jpeg, image/png" style="display: none;">
					                                 	</p>
				                            		</div>
			                            		</div>
			                           		</div>
							        	</div>
						        	</div>
					        	</td>
					        </tr>
					        
						</tbody>
					</table>
					<div class="text-right">
						<a href="javascript:;" id="goRegist" class="button"><span>저장</span></a>
					</div>
	            </form>
            </div>
        </div>
    </div>

<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
<script src="/am/js/common/jquery.form.js"></script>


<script type="text/javascript">
$(function(){
	var $frm = $("#frm");
	
	$("input[name=lwstYn]").change(function() {
		if("Y" == $(this).val()) {
			$("#smroMappRow").show();
			$("#intgMthdRow").show();
		} else {
			$("#smroMappRow").hide();
			$("#intgMthdRow").hide();
		}
	})
	
	 // 통합 방식
    $("#intgMthdCd").change(function() {
    	if("3051" == $(this).val()) {
    		$("#imgRow").show();
    	} else {
    		$("#imgRow").hide();
    	}
    })
    
    // 파일첨부
    $("#file").off().on("change" , function(){
    	var reader = new FileReader();
    	
    	reader.onload = function(event) {
    		$("#imgDel").show();
    		$("#categoryImg").addClass("pic");
    		$("#categoryImg").attr("src", event.target.result);
    	}
    	
    	reader.readAsDataURL(event.target.files[0]);
    })
    
    // 파일 지우기
    removeImage = function() {
    	$("#imgDel").hide();
		$("#categoryImg").removeClass("pic");
		$("#categoryImg").removeAttr("src");
		$("input[name=file]").val("");
    }
	
	// 카테고리명 유효성 검사
	prdClsNmvalid = function() {
		var $prdClsNm = $("#prdClsNm");
		
		if("" == $prdClsNm.val()) {
			alert("카테고리명을 입력해 주세요.");
			$prdClsNm.focus();
			return false;
		}
		
		if($prdClsNm.val().indexOf("기타") > -1) {
			alert("'기타'는 카테고리명으로 사용할 수 없습니다.");
			$prdClsNm.focus();
			return false;
		}
		
		var result = true;
		
		$.ajax({
            type    : "POST",
            url     : "/am/prd/ctgMng/categoryNameChk.do",
            data    : $frm.serialize(),
            dataType : "json",
            async 	: false,
            success : function(data) {
				if("fail" == data.result) {
					alert(data.resultMsg);
					$prdClsNm.focus();
					result = false;
				}
            },
            error   : function(xhr,status,error) {
            	alert("카테고리명 체크 중 에러가 발생하였습니다.");
            	result = false;
            }
        });
		
		return result;
		
	}
	
    //상품카테고리 저장 처리
    $(document).on("click", "#goRegist", function(){

		if(!prdClsNmvalid()){
			return false;
		}
		
		if("Y" == $("input[name=lwstYn]:checked").val()) {
			if("" == $("#smroMappId").val()) {
    			alert("S-MRO카테고리 매핑을 입력해 주세요.");
    			return false;
    		}
		}
		
		if("3051" != $("#intgMthdCd").val()) {
			$("#file").val("");
		} else {
			if("" == $("#file").val()) {
				alert("전시상품군 이미지를 등록해주세요.");
				return false;
			}
		}
		
		var prdClsCd = "";
		
        if ( confirm( "입력된 정보로 등록처리 하시겠습니까??" ) )  {            	
        	$frm.ajaxForm({
                dataType : "json",
                url : '/am/prd/ctgMng/insertCategory.do',
                success : function(data){
                	alert(data.resultMsg);
                	
                	if("" != $("#hrnkPrdClsCd").val()) {
                		prdClsCd = data.prdClsCd;
                	}
                	
                	window.opener.categoryList("", prdClsCd);
                	self.close();           		
                },
                error : function(err){
                    alert("오류가 발생하였습니다.\n[" + err.status + "]");
                }
                
            });
			
        	$frm.submit();
        }
    });
});

function fnResultSMroCategoryMapp(obj) {
	$("#smroMappId").val(obj.prdClsCd);
	$("#smroMappNm").val(obj.prdClsNm);
	$("#smroMappLvlNm").val("("+obj.prdClsCd+")" + obj.prdClsLvlNm);
}

</script>
</body>
</html>
