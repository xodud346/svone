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

                <h2 class="title"><span>전시카테고리관리</span></h2>

                <h3 class="title"><span>목록</span></h3>
                
                <table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
                    <colgroup>
                        <col style="width: 10%;" />
                        <col style="width: auto;" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th><span>구분</span></th>
                            <td>
                                <input type="radio" id="stateB" onclick="categoryProductEnv('${Code.CATEGORY_TYPE_PC }');" name="searchGubun" class="radio" <c:if test="${empty commandMap.PRD_CTG_ENV or commandMap.PRD_CTG_ENV eq 'P' }">checked="checked"</c:if> value="P"/>
                                <label for="stateB">PC</label>
                                <input type="radio" id="stateC" onclick="categoryProductEnv('${Code.CATEGORY_TYPE_MOBILE }');" name="searchGubun" class="radio" <c:if test="${commandMap.PRD_CTG_ENV eq 'M' }">checked="checked"</c:if> value="M"/>
                                <label for="stateC">MOBILE</label>
                            </td>
                        </tr>
                    </tbody>
                </table><!-- // table -->
                
                <input type="hidden" name="PRD_CTG_ENV" id="PRD_CTG_ENV" value="${commandMap.PRD_CTG_ENV }" />
                </br>
                  
                <div class="clearfix">
                
                    <!-- https://github.com/jzaefferer/jquery-treeview -->
                    <!-- http://bassistance.de/jquery-plugins/jquery-plugin-treeview/ -->
                    <div style="float:left; width: 20%;">
                        <div style="margin-right: 5px; padding: 10px 20px 10px 10px; border: solid 1px #ccc; min-height: 600px; margin-bottom: 20px;">
                            <a href="javascript:;" id="rootCategory" class="button small primary"><span>카테고리관리</span></a>
                            <ul id="browser" class="filetree treeview-famfamfam">
    
                            </ul>
                        </div>  
                          
                        <p style="float:left;">
                            <a href="javascript:registPopup();" id="categoryAdd" class="button small primary" title="팝업으로 열립니다."><span>하위 카테고리추가</span></a>
                        </p>
                    </div>  
    
                    <div id="main_con" style="float: right; margin-top: 20px; width: 76%; min-height: 600px;">
                        &nbsp; 
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

<script src="/am/js/plugins/jquery.cookie.js"></script> <!-- treeview -->
<script src="/am/js/plugins/jquery.treeview.js"></script> <!-- treeview -->
<script src="/am/js/common/jquery.ajax.js"></script>

<script>
$(document).ready(function(){

    // 카테고리 구분 pc, mobile
    var PRD_CTG_ENV = "<c:out value="${commandMap.PRD_CTG_ENV}" />";
    
    if(PRD_CTG_ENV == ""){
        PRD_CTG_ENV = "<c:out value="${Code.CATEGORY_TYPE_PC}" />";
    }

    // 상품 카테고리 조회
    categoryProductList(PRD_CTG_ENV);
    
    // 상품카테고리 상세정보 노출 이벤트
    goForm = function(id){
        $.ajax({
            type : "POST",
            async:true,
            dataType :"html",
            url : '<c:out value="${serverDomain}"/>/am/product/categoryProductEdit.do',
            data : {
                   'PRD_CTG_IDX' : id
                   },
            success : function(data){
                $('#main_con').html(data);
            }
        });
    };
    
    // 카테고리 상세 저장 후 카테고리 목록과 해당 페이지 유지
    var PRD_CTB_IDX = "<c:out value="${commandMap.PRD_CTG_IDX}"/>";
    if(PRD_CTB_IDX!=""){
    	$(".folder").each(function () {
    		if($(this).data("idx")==PRD_CTB_IDX){
    			$(this).parents("ul").show();
				$(this).parents("li").children("div").removeClass("expandable-hitarea");
				$(this).parents("li").children("div").addClass("collapsable-hitarea");
    			
				if($(this).closest("li").attr("class")!="closed last" && $(this).closest("li").attr("class")!="closed expandable"){
	    			$(this).parents("li").removeClass("expandable lastExpandable");
	    			$(this).parents("li").addClass("collapsable lastCollapsable");
	    			$(this).closest("li").removeClass("collapsable lastCollapsable");
	    			$(this).closest("li").addClass("expandable lastExpandable");
	    		}else if( $(this).closest("li").attr("class")=="closed expandable"){
	    			$(this).closest("li").children("div").removeClass("collapsable-hitarea");
					$(this).closest("li").children("div").addClass("expandable-hitarea");	
	    		}else{
	    			$(this).parents("li").removeClass("expandable lastExpandable");
	    			$(this).parents("li").addClass("collapsable lastCollapsable");
	    			$(this).closest("li").attr("class", "closed last");
	    		}
    			goForm(PRD_CTB_IDX);
    		}
    	});
    }

    // 카테고리추가 버튼 상태 변경 이벤트, 5레벨은 수정안됨
    setButtonCategoryRegist = function(level){     
        if( level==1 || level==2 || level==3){
            $("#categoryAdd").attr("class","button small primary");
            $("#categoryAdd").attr("href","javascript:registPopup();");
        }
        else{
            $("#categoryAdd").attr("class","button small");
            $("#categoryAdd").attr("href","javascript:alert('3레벨 이상 추가가 불가능합니다.');");
        }
    };
    
    // 상품카테고리 등록 팝업창 호출
    registPopup = function(){
        popup('',"400","300","no","_registPopup");
        $("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/product/categoryProductFormPopup.do", "target":"popup_registPopup", "method":"post"}).submit();
    };
    
    // root카테고리관리 생성 버튼 클릭 이벤트
    $(document).on("click", "#rootCategory", function () {
        $.ajax({
           type : "POST",
           async:true,
           dataType :"html",
           url : '<c:out value="${serverDomain}"/>/am/product/categoryProductRootEdit.do',
           data : {
                   'PRD_CTG_IDX': -1,
                   'PRD_CTG_ENV': $("#PRD_CTG_ENV").val()
                  },
           success : function(data){
               $('#main_con').html(data);
           }
       });
    });  

    // PC / MOBILE 라디오박스 선택 변경 이벤트
    categoryProductEnv = function(env)
    {
    	$("#PRD_CTG_ENV").val(env);
    	
        categoryProductList(env); 
    };
    
  	//상품카테고리 저장 처리
    goRegist = function(params){
            $("#CHILD_CODENAME").val(params.CHILD_CODENAME);
            $("#PRD_CTG_LEVEL").val(params.PRD_CTG_LEVEL);
            $("#PRD_CTG_IDX").val(params.PRD_CTG_IDX);
            $("#PRD_CTG_TOP_IDX").val(params.PRD_CTG_TOP_IDX);
            $("#PRD_CTG_USE_YN").val("Y");
            $("#PRD_CTG_DSP_YN").val("Y"); 
             
            $("#frm").attr({"action":"<c:out value="${serverDomain}"/>/am/product/categoryProductRegist.do", "target":"_self", "method":"post"}).submit();
            
     };
 
});
function categoryProductList(PRD_CTG_ENV){  
    $.postSyncJsonAjax("/am/product/categoryProductAjax.do", { PRD_CTG_ENV : PRD_CTG_ENV }, function(data){
        $("#browser").html(data.categoryList);
          
        $("#browser").treeview({
            toggle: function(){
                console.log("%s was toggled.", $(this).find(">span").text());
            }
        });
        
        $(".folder").on("click",function(){
        	var $this = $(this);
        	// 카테고리 버튼 상태 변경 이벤트 호출
            setButtonCategoryRegist($(this).data("level"));
            // 상품카테고리 상세정보 노출 이벤트
        	goForm($this.data("idx"));
        });

    });
}
</script>

</body>
</html>
