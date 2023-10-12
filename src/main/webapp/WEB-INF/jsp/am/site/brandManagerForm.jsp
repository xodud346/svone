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

        <div id="breadcrumb"></div><!-- breadcrumb -->

        <div id="contents"><!-- contents -->

            <div class="container"><!-- container -->

                <h2 class="title"><span>브랜드 관리</span></h2>

                <h3 class="title"><span>등록</span></h3>
                
                <p>
                    <i class="require"><em>필수입력</em></i> 표시된 항목은 필수 입력 사항입니다.
                </p>

                <form id="searchForm">
                  	<input type="hidden" name="pageSize" value="<c:out value="${commandMap.pageSize }"/>" />
               		<input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/>
					<input type="hidden" name="searchBrandNm" value="<c:out value="${commandMap.searchBrandNm }"/>"/>
              		<input type="hidden" name="searchBrandUseYn" value="<c:out value="${commandMap.searchBrandUseYn }"/>"/>
              	</form>
 
                <form id="frm" name="frm" enctype="multipart/form-data">
                    <input type="hidden" id="brandCheckYn" value="" />
					<input type="hidden" id="checkBrand" value="" />
                    
                    <table cellspacing="0" class="table-row table-a"><!-- table -->
                        <colgroup>
                            <col style="width: 15%; min-width: 180px;" />
                            <col style="width: auto;" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th><span>브랜드코드 <i class="require"><em>필수입력</em></i></span></th>
                                <td>
                                	<small class="desc">시스템자동부여</small>    
                                </td>
                            </tr>  
                            <tr>
                                <th><span>브랜드명 <i class="require"><em>필수입력</em></i></span></th>
                                <td>
                                    <input type="text" name="BND_MST_BRAND_NM" id="BND_MST_BRAND_NM" class="text" maxlength="15"/>
		                            <a href="#none" id="brandCheck" class="button button-c small"><span>중복확인</span></a>
		                            <small style="margin-left:10px;">띄어쓰기를 삼가해주세요.</small>
                                </td>
                            </tr>
                            <tr>
                                <th><span>품질보증기준</span></th>
                                <td>
                                    <input type="text" name="BND_MST_QLY_ASR" id="BND_MST_QLY_ASR" class="text large" maxlength="80"/>
	                            	<small class="desc">ex) 공정거래위원회 고시 소비자 분쟁해결 기준에 준함</small> 
                                </td>
                            </tr>
                            <tr>
                                <th><span>서비스센터</span></th>
                                <td>
                                    <input type="text" name="BND_MST_SERV" id="BND_MST_SERV" class="text" maxlength="25"/>
	                            	<small style="margin-left:10px;">ex) XX서비스센터 (02-000-0000)</small>
                                </td>  
                            </tr>
                            <tr>
                                <th><span>브랜드소개<br/>(500자 이내)</span></th>
                                <td>
                                    <textarea name="BND_MST_DTL" id="BND_MST_DTL" style="height: 200px;" maxlength="500"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <th><span>브랜드이미지</span></th>
                                <td>
                                	<div id="defaultFileDiv">
	                                   	<input type="file" name="file" id="file" class="file" style="width:50%;"/>
	                                   	<input type="button" id="delFileData" value="파일 지우기"/>
	                               	</div>	
                                </td>
                            </tr>
                            <tr>
                                <th><span>상태 <i class="require"><em>필수입력</em></i></span></th>
                                <td>
                                    <input type="radio" name="BND_MST_USE_YN" id="stateA" value="Y" class="radio" checked="checked"/>
		                            <label for="stateA">사용</label>
		                            <input type="radio" name="BND_MST_USE_YN" id="stateB" value="N" class="radio" />
		                            <label for="stateB">미사용</label>
                                </td>
                            </tr>
                        </tbody>
                    </table><!-- // table -->
                </form>

                <div class="section-button"><!-- section-button -->
                    <div class="wrap text-center">
                        <a href="#none" id="goRegist" class="button large primary"><span>저장</span></a>
                        <a href="#none" id="goList" class="button large"><span>목록</span></a>
                    </div>
                </div><!-- // section-button -->
                
            </div><!-- // container -->

        </div><!-- // contents -->

    </div><!-- // wrapper -->  

    <div id="quickmenu" class="aside right"><!-- quickmenu-->
        <%@ include file="/WEB-INF/jsp/am/include/quick.jsp" %>
    </div><!-- // quickmenu -->

</div><!-- // container -->

<div id="footer">
    <%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>  

<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>
<script src="<c:out value="${serverDomain}" />/am/js/webtoolkit.base64.js" charset="utf-8"></script>

<script>    
$(function(){  
        
	// 폼체크
    $("#frm").validate({
        rules: {
            BND_MST_BRAND_NM:{required:true} // 브랜드명
        }
    });
	
	// 목록 버튼 클릭 이벤트 
    $(document).on("click", "#goList", function () {
       $("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/site/brandManagerList.do", "target":"_self", "method":"post"}).submit(); 
    });
    
    // 브랜드명 중복 체크
    $(document).on("click", "#brandCheck", function () {
        var $obj = $("#BND_MST_BRAND_NM");
        var value = $.trim($obj.val());
        
        $("#checkBrand").val(value);	// 중복체크한 brand 
        
        if(value == "")
        {
            alert("[브랜드명] 필수입력 사항입니다.");
            $obj.focus();
            return;
        }
        else
        {
            
	        $.ajax({
	            async : false,
	            type : "POST",
	            data : {"BND_MST_BRAND_NM":$.trim($("#BND_MST_BRAND_NM").val())},
	            url : "<c:out value="${serverDomain}" />/am/site/brandManagerNmCheckAjax.do",
	            success : function (data) {
	                if(data.successYn == "Y")
	                {
	                    if(data.resultYn == "N")
	                    {
	                        alert("이미 사용중인 브랜드 입니다.");
	                    }
	                    else
	                    {
	                        alert("사용가능한 브랜드 입니다.");
	                    }
	                    
	                    $obj.focus();
	                    $("#brandCheckYn").val(data.resultYn);
	                    return;
	                }
	                else
	                {
	                    alert("데이터 전송중 데이터가 누락 되었습니다./n다시 시도해 주십시오.");
	                    return;
	                }
	            },
	            error : function () {
	                alert("데이터 오류 입니다. 다시 시도 해 주십시오.");
	            }
	        });
        }
    });
    
 	// 고정 첨부 행 파일 지우기
    $(document).on("click", "#delFileData", function (e) {
    	e.preventDefault();    	
    	$("#defaultFileDiv").find("input").remove();
    	$("#defaultFileDiv").append('<input type="file" name="file" id="file" class="file" style="width:50%;"/> <input type="button" id="delFileData" value="파일 지우기"/>');
 	});
    
    // 등록 이벤트
    $(document).on("click", "#goRegist", function () {
    	
    	$("#BND_MST_BRAND_NM").val($.trim($("#BND_MST_BRAND_NM").val()));

    	var $frm = $("#frm"); 
        
        if($frm.valid()){
        	
        	var $chkObj = $("#brandCheckYn");
            var $obj = $("#brandCheck");
            if($chkObj.val() == "Y")
            {
            	if($("#checkBrand").val() == $("#BND_MST_BRAND_NM").val()){
            				
            		if (confirm( "저장 하시겠습니까?")) {
                    	$frm.attr({"action":"<c:out value="${serverDomain}" />/am/site/brandManagerRegist.do", "target":"_self", "method":"post"}).submit();
                    }            		
            	}
            	else{
            		alert("브랜드 중복을 확인해 주십시오.");
                    $obj.focus();
                    return;
            	}
            }
            else if($chkObj.val() == "N")
            {
            	if($("#checkBrand").val() == $("#BND_MST_BRAND_NM").val()){
	            	alert("이미 사용중인 브랜드 입니다.");
		            $obj.focus();
		            return;
            	}
            	else{
            		alert("브랜드 중복을 확인해 주십시오.");
                    $obj.focus();
                    return;	
            	}
            }
            else
            {
                alert("브랜드 중복을 확인해 주십시오.");
                $obj.focus();
                return;
            }
        }
    });
    
});
</script>

</body>
</html>
