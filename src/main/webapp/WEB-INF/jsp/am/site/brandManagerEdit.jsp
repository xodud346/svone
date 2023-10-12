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

                <h3 class="title"><span>수정</span></h3>
                
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
                	<input type="hidden" name="BND_MST_IDX" value="<c:out value="${row.BND_MST_IDX }"/>"/>
                	<input type="hidden" name="pageSize" value="<c:out value="${commandMap.pageSize }"/>" />
                    <input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/>
                    <input type="hidden" name="searchBrandNm" value="<c:out value="${commandMap.searchBrandNm }"/>"/>
                	<input type="hidden" name="searchBrandUseYn" value="<c:out value="${commandMap.searchBrandUseYn }"/>"/>
                    
                    <table cellspacing="0" class="table-row table-a"><!-- table -->
                        <colgroup>
                            <col style="width: 15%; min-width: 180px;" />
                            <col style="width: auto;" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th><span>브랜드코드 <i class="require"><em>필수입력</em></i></span></th>
                                <td>
                                	<c:out value="${row.BND_MST_IDX }"/>    
                                </td>
                            </tr>  
                            <tr>
                                <th><span>브랜드명 <i class="require"><em>필수입력</em></i></span></th>
                                <td>
                                    <c:out value="${row.BND_MST_BRAND_NM }"/>
                                </td>
                            </tr>
                            <tr>
                                <th><span>품질보증기준</span></th>
                                <td>
                                    <input type="text" name="BND_MST_QLY_ASR" id="BND_MST_QLY_ASR" class="text large" maxlength="80" value="<c:out value="${row.BND_MST_QLY_ASR }"/>"/>
	                            	<small class="desc">ex) 공정거래위원회 고시 소비자 분쟁해결 기준에 준함</small>
                                </td>
                            </tr>
                            <tr>
                                <th><span>서비스센터</span></th>
                                <td>
                                    <input type="text" name="BND_MST_SERV" id="BND_MST_SERV" class="text" maxlength="25" value="<c:out value="${row.BND_MST_SERV }"/>"/>
	                            	<small style="margin-left:10px;">ex) XX서비스센터 (02-000-0000)</small>
                                </td>  
                            </tr>
                            <tr>
                                <th><span>브랜드소개<br/>(500자 이내)</span></th>
                                <td>
                                    <textarea name="BND_MST_DTL" id="BND_MST_DTL" style="height: 200px;" maxlength="500"><c:out value="${row.BND_MST_DTL }"/></textarea>
                                </td>
                            </tr>
                            <tr>
                                <th><span>브랜드이미지</span></th>
                                <td>
                                	<div <c:if test="${empty fileList }">id="defaultFileDiv"</c:if>>
	                                   	<c:choose>
	                                   		<c:when test="${not empty fileList }">
	                                   			<c:forEach var="fileRow" items="${fileList }" varStatus="i">
	                                   				<a href="javascript:;" id="fileIdx_<c:out value="${fileRow.CMM_FLE_IDX }"/>" class="file-list-title" data-cmm_fle_idx="<c:out value="${fileRow.CMM_FLE_IDX }"/>" data-cmm_fle_save_path="<c:out value="${fileRow.CMM_FLE_SAVE_PATH }"/>">
	                                   					<c:out value="${fileRow.CMM_FLE_ORG_NM }"/> 
	                                   				</a>
	                                   				<input type="checkbox" class="checkbox cmmFleIdx" id="CMM_FLE_IDX" name="CMM_FLE_IDX" data-file_name="file" value="<c:out value="${fileRow.CMM_FLE_IDX }"/>" /> 
		                         					<label for="CMM_FLE_IDX">삭제</label> 
	                                   			</c:forEach>
	                                   			<div id="defaultFileDiv" style="padding-top:5px;">
													<input type="file" name="file" id="file" class="file" style="width:50%;"/>
	                                   				<input type="button" id="delFileData" value="파일 지우기"/>											
												</div>
	                                   		</c:when>
	                                   		<c:otherwise>
	                                   			<input type="file" name="file" id="file" class="file" style="width:50%;"/>
	                                   			<input type="button" id="delFileData" value="파일 지우기"/>
	                                   		</c:otherwise>
	                                   </c:choose>
	                               	</div>	
                                </td>
                            </tr>
                            <tr>
                                <th><span>상태 <i class="require"><em>필수입력</em></i></span></th>
                                <td>
                                    <input type="radio" name="BND_MST_USE_YN" id="stateA" value="Y" class="radio" <c:if test="${row.BND_MST_USE_YN eq 'Y' }">checked="checked"</c:if>/>
		                            <label for="stateA">사용</label>
		                            <input type="radio" name="BND_MST_USE_YN" id="stateB" value="N" class="radio" <c:if test="${row.BND_MST_USE_YN eq 'N' }">checked="checked"</c:if>/>
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

<!-- 파일 다운로드용 폼 -->
<form name="fileForm" id="fileForm">
     <input type="hidden" name="CMM_FLE_IDX" value=""/>
     <input type="hidden" name="CMM_FLE_SAVE_PATH" value="" />
     <input type="hidden" name="CMM_FLE_ORG_NM" value="" />
</form>
<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>
<script src="<c:out value="${serverDomain}" />/am/js/webtoolkit.base64.js" charset="utf-8"></script>

<script>    
$(function(){  
        
	//최초 페이지 로딩시 FILE 있는 경우 FILE DISABLEE 처리
	$(".cmmFleIdx").each(function(){
        var fileName = $(this).data("file_name");
        $("input[name='"+ fileName +"']").prop("disabled", true);
	});
	
	// 목록 버튼 클릭 이벤트 
    $(document).on("click", "#goList", function () {
       $("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/site/brandManagerList.do", "target":"_self", "method":"post"}).submit(); 
    });
    
 	// 고정 첨부 행 파일 지우기
    $(document).on("click", "#delFileData", function (e) {
    	e.preventDefault();    	
    	$("#defaultFileDiv").find("input").remove();
    	$("#defaultFileDiv").append('<input type="file" name="file" id="file" class="file" style="width:50%;"/> <input type="button" id="delFileData" value="파일 지우기"/>');
 	});
 	
  	//파일 삭제를 위한 체크박스 클릭 이벤트
	$(".cmmFleIdx").click(function(){
		var cmmFleIdx = "";
		$("input[name='CMM_FLE_IDX']:checked").each(function(){
			cmmFleIdx = cmmFleIdx + $(this).val() + ",";
		});
		$("input[name='cmmFleIdx']").val(cmmFleIdx);		
	});
  	
	// 파일 삭제 check box 변경 이벤트
    $(document).on("change", ".cmmFleIdx", function () {
        var $this = $(this);
        var fileName = $(this).data("file_name");
        
        if($this.is(":checked"))
        {
            $("input[name='"+ fileName +"']").prop("disabled", false);    
        }
        else
        {
        	$("input[name='"+ fileName +"']").val("");
            $("input[name='"+ fileName +"']").prop("disabled", true);
        }
    }); 
  	
	// 파일 다운로드
    $(document).on("click", ".file-list-title", function () {
        var $fileForm = $("#fileForm");
        var $this = $(this);
        $fileForm.find("input[name='CMM_FLE_IDX']").val($this.data("cmm_fle_idx"));
        $fileForm.find("input[name='CMM_FLE_SAVE_PATH']").val($this.data("cmm_fle_save_path"));
        $fileForm.find("input[name='CMM_FLE_ORG_NM']").val($.trim($this.text()));
        $fileForm.attr({"action":"<c:out value="${serverDomain}"/>/am/common/commonFileDownload.do", "target":"_self", "method":"post"}).submit();
    });
    
    // 수정 이벤트
    $(document).on("click", "#goRegist", function () {
        var $frm = $("#frm"); 
        
        if (confirm( "저장 하시겠습니까?")) {
            $("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/site/brandManagerModify.do", "target":"_self", "method":"post"}).submit();
        }
    });
    
});
</script>

</body>
</html>
