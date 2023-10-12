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

            <div class="container">

                <h2 class="title"><span>전시상품관리</span></h2>

                <h3 class="title"><span>목록</span></h3>
				
				<form id="searchForm" name="searchForm">
					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
	                    <colgroup>
	                        <col style="width: 10%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                        <tr><!-- row -->
	                            <th><span>구분</span></th>
	                            <td>
	                              	<input type="radio" id="stateB" onclick="search();" name="searchGubun" class="radio" <c:if test="${empty commandMap.seachGubun or commandMap.searchGubun eq 'P' }">checked="checked"</c:if> value="P"/>
		                            <label for="stateB">PC</label>
		                            <input type="radio" id="stateC" onclick="search();" name="searchGubun" class="radio" <c:if test="${commandMap.searchGubun eq 'M' }">checked="checked"</c:if> value="M"/>
		                            <label for="stateC">MOBILE</label>
	                            </td>
	                        </tr>
	                    </tbody>
	                </table><!-- // table -->
                </form>
                <input type="hidden" name="PRD_CTG_ENV" id="PRD_CTG_ENV" value="<c:out value="${searchGubun}" />" />
                <br/>
                <div class="clearfix">

                    <!-- https://github.com/jzaefferer/jquery-treeview -->
                    <!-- http://bassistance.de/jquery-plugins/jquery-plugin-treeview/ -->
                    
                    
                   	<div class="grid">
                   		<div class="col" style="margin-right: 20px; padding: 10px; padding-right: 20px; border: solid 1px #ccc;">
                   			<ul id="browser" class="filetree treeview-famfamfam"><!-- tree --></ul>
                   		</div>
                   		<div class="col col-2-3">
                   			<div id="main_con"><!-- main_con --></div>
                   		</div>
                   	</div>

                </div>

                <p>
                    
                </p>
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

<script src="/am/js/plugins/jquery.cookie.js"></script> <!-- treeview -->
<script src="/am/js/plugins/jquery.treeview.js"></script> <!-- treeview -->
<script src="/am/js/common/jquery.ajax.js"></script>
<script>
$(function() {

    // 카테고리 구분 pc, mobile
    var PRD_CTG_ENV = "<c:out value="${commandMap.PRD_CTG_ENV}" />";
    
   /*  if(PRD_CTG_ENV == ""){
        PRD_CTG_ENV = "<c:out value="${Code.CATEGORY_TYPE_PC}" />";
    } */
	
    if("<c:out value="${commandMap.CMN_COM_IDX}"/>" != "" ){
    	categoryProductList(PRD_CTG_ENV);
    	 var idx = $(this).data("idx");
    }
    	
    
    search = function(){
 		var $searchForm = $("#searchForm"); 
        $searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/display/productDisplayView.do", "target":"_self", "method":"post"}).submit(); 
 	};
    
    // 상품 카테고리 조회
    categoryProductList(PRD_CTG_ENV);
    
    $(document).on("click", ".folder", function(){
        var idx = $(this).data("idx");
        $.ajax({
            type : "POST",
            async:true,
            dataType :"html",
            url : '<c:out value="${serverDomain}"/>/am/display/productDisplayList.do',
            data : {
                   'CMN_COM_IDX' : idx
                   },  
            success : function(data){
                $('#main_con').html(data);  
            }
        });
    });
});
function categoryProductList(PRD_CTG_ENV){
    $.postSyncJsonAjax("/am/display/productDisplayAjax.do", { PRODUCT_DISPLAY_ENV : PRD_CTG_ENV }, function(data){
        $("#browser").html(data.productList);
        $("#browser").treeview({
            toggle: function(){
                console.log("%s was toggled.", $(this).find(">span").text());
            }
        });
    });
}
//-->
</script>

</body>
</html>
