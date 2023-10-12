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
<body><!-- body class,d 중요 -->

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

            <div class="container">

                <h2 class="title"><span>절사관리</span></h2>
				
				<table cellspacing="0" class="table-col table-b"><!-- table -->
                    <colgroup>
                        <col style="width: auto;">
                        <col style="width: 15%;">
                        <col style="width: 15%;">
                        <col style="width: 15%;">
                        <col style="width: 15%;">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>가격구간</th>
                            <th>절사기준</th>
                            <th>절사방식</th>
                            <th>최근수정일</th>
                            <th>수정자</th>
                        </tr>
                    </thead>
                    <tbody>
                    	<form id="frm" name="frm" method="post" >
                    	<input type="hidden" id="prdSprCd" name="prdSprCd" value="${commandMap.prdSprCd}" />
                    	<c:forEach var="list" items="${list}" varStatus="i" >
                    		<tr>
	                            <td class="text-right">
	                            	${list.detrUntNm}
	                            	<input type="hidden" id="detrUntIds" name="detrUntIds" value="${list.detrUntId}" />
                            	</td>
	                            <td>
	                            	
	                                <select name="uprcBssCds" id="uprcBssCds" title="" class="select uprcBssCds">
	                                	<option value="">선택해주세요</option>
	                                	<c:forEach var="listSub" items="${uprcBssCdList}" varStatus="i" >
	                                		<c:if test="${list.maxPrcLength > (listSub.CMN_COM_ETC1*-1)+1}">
												<option value="${listSub.CMN_COM_IDX}" <c:if test="${list.uprcBssCd eq listSub.CMN_COM_IDX}">selected="selected"</c:if>>${listSub.CMN_COM_NM}</option>
											</c:if>
	                                    </c:forEach>
	                                </select>
	                            </td>
	                            <td>
	                                <select name="rnofRuleCds" id="rnofRuleCds" title="" class="select rnofRuleCds">
	                                	<option value="">선택해주세요</option>
	                                    <c:forEach var="listSub" items="${rnofRuleCdList}" varStatus="i" >
											<option value="${listSub.CMN_COM_IDX}" <c:if test="${list.rnofRuleCd eq listSub.CMN_COM_IDX}">selected="selected"</c:if>>${listSub.CMN_COM_NM}</option>
	                                    </c:forEach>
	                                </select>
	                            </td>
	                            <td class="text">
	                            	<fmt:formatDate value="${list.updDtm}"  pattern="yyyy.MM.dd HH:mm:ss" />
                            	</td>
	                            <td>${list.regpsn}</td>
	                        </tr>
                    	</c:forEach>
                    	</form>
                    </tbody>
                </table>
                
                <div class="section-button"><!-- section-button -->
                    <div class="wrap text-center">                        
                        <a href="javascript:goProc();" class="button large primary"><span>저장</span></a>
                    </div>
                </div>
                
                
            </div>
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
<script>
$(function(){
	
	// 등록 버튼 클릭 이벤트
    goProc = function () {
        var $frm = $("#frm");
        var isValidate = true;
        var validateMsg = "";
        
        $(".uprcBssCds").each(function(){
           if($(this).val() == ""){
        	   validateMsg = "절사기준을 선택해주세요.";
        	   isValidate = false;
        	   return;
        	   
           } 
        });
        
        $(".rnofRuleCds").each(function(){
            if($(this).val() == ""){
				validateMsg = "절사방식을 선택해주세요.";
				isValidate = false;
         	    return;
            } 
         });
        
        if(!isValidate){
        	alert(validateMsg);
        	return;
        }
        
        if(isValidate){
        	if (confirm( "수정된 내용으로 저장하시겠습니까?")) {
    			$.ajax({
                    type:"post",
                    url : "/am/prc/rfrMng/updateAjax.json",
                    data : $frm.serialize(),
                    dataType : "json",
                    success : function(data){
                    	if(data.result == 'success'){
                    		alert("저장되었습니다.");
                    		 //location.href='/am/prc/rfrMng/truncateList.do';
                    		location.reload();
                    	}else{
                    		alert("오류가 발생하였습니다.");
                    	}
                    },
                    error : function(err){
                        alert("오류가 발생하였습니다.\n[" + err.status + "]");
                    }
                });
        	}
        }
		
    };
});
//-->
</script>

</body>
</html>
