<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
	<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
</head>
<body>
<div id="header">
    <%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</div>
<div id="container">
	<div id="aside" class="aside left"><!-- aside -->
        <%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
    </div>
    <div id="wrapper">
        <div id="breadcrumb"></div>
        
        <div id="contents">
            <div class="container">
                <h2 class="title"><span>전시카테고리관리</span></h2>
                <div class="grid">
	                <div class="col col-1-5">
	                	<h3 class="title"><span>목록</span></h3>
                         
                        <div style="margin-right: 5px; padding: 10px 20px 10px 10px; border: solid 1px #ccc; min-height: 600px; margin-bottom: 20px;">
	                        <div class="categorySearchWrap">
								<div class="inner01">
									<div class="srchArea">
										<input type="text" class="text small" id="searchPrdClsNm" style="width:80%;">
										<a href="javascript:categoryListSearch();" class="icon search2" alt="검색"></a>
									</div>
								</div>
								<ul class="inner02 filetree treeview-famfamfam" id="browser"></ul>
							</div>
                        </div>  
                        
                        <p style="float:left;">
                        	<a href="javascript:registPopup();" id="categoryAdd" class="button small primary" title="팝업으로 열립니다."><span>대카테고리 추가</span></a>
                        </p>
	                </div>
	                <div class="col col-3-4">
	                	<h3 class="title"><span>카테고리 상세</span></h3>
	                	<div id="main_con">
	                        
	                    </div>    
	                </div>
                </div>
                
                
            </div>  
        </div>
    </div>  

    <div id="quickmenu" class="aside right"><!-- quickmenu-->
        <%@ include file="/WEB-INF/jsp/am/include/quick.jsp" %>
    </div>

</div>

<div id="footer">
    <%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>

<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>

<script src="/am/js/plugins/jquery.cookie.js"></script> 
<script src="/am/js/plugins/jquery.treeview.js"></script> 
<script src="/am/js/common/jquery.ajax.js"></script>

<script>
$(document).ready(function(){
	
    // 상품 카테고리 조회
    categoryList("", "");
    
    // 카테고리리스트 조회
	categoryListSearch = function() {
    	$searchPrdClsNm = $("#searchPrdClsNm").val();
		categoryList($searchPrdClsNm, "");
	}
    
    // 카테고리추가 버튼 상태 변경 이벤트
    setButtonCategoryRegist = function(level, lastYN){
    	if(level >= 1 && level < 7) {
    		if("Y" == lastYN) {
    			$("#categoryAdd").hide();
    		} else {
    			$("#categoryAdd").show();
        		$("#categoryAdd").html("<span>하위 카테고리추가</span>");
    		}
    	} else {
    		$("#categoryAdd").hide();
    	} 
    };
    
    // 상품카테고리 등록 팝업창 호출
    registPopup = function(){
        popup('',"700","350","no","_registPopup");
        $("#frm").attr({"action":"/am/prd/ctgMng/categoryFormPopup.do", "target":"popup_registPopup", "method":"post"}).submit();
    };
});

// 카테고리 리스트
function categoryList(prdClsNm, prdClsCd){  
    $.postSyncJsonAjax("/am/prd/ctgMng/categoryAjax.do", {prdClsNm : prdClsNm}, function(data){
    	var html = '';
    	
    	if("fail" == data.result) {
    		
    	} else {
    		if("" != prdClsNm) {
        		var list = data.categoryList;
        		for(var i=0; i<list.length; i++) {
        			html += '<li>';
                	html += '<span class="folder" data-idx="' + list[i].PRD_CLS_CD + '" data-level="' + list[i].PRD_CLS_LVL + '" data-name="' + list[i].PRD_CLS_NM + '" data-lastyn="' + list[i].LWST_YN + '">' + list[i].PRD_CLS_NM + '</span>';
                	html += '<li>';
        		}
        	} else {
        		html = data.categoryList;
        	}
    		
            $("#browser").html(html);
            
            $("#browser").treeview({
                toggle: function(){
                    console.log("%s was toggled.", $(this).find(">span").text());
                }
            });
    		
    		if("" != prdClsCd) {
    			$(".folder").each(function () {
        			if($(this).data("idx") == prdClsCd){
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
        				goForm(prdClsCd, $(this).data("lastyn"));
        			}
        		});
    		} else {
    			goForm("", "N");
    		}
            
            $(".folder").on("click",function(){
            	var $this = $(this);
            	// 카테고리 버튼 상태 변경 이벤트 호출
                setButtonCategoryRegist($this.data("level"), $this.data("lastyn"));
                // 상품카테고리 상세정보 노출 이벤트
            	goForm($this.data("idx"), $this.data("lastyn"));
            });

    	}
    });
}

//상품카테고리 상세정보 노출 이벤트
function goForm(id, lwstYn) {
	$("#main_con").load("/am/prd/ctgMng/categoryForm.do", {prdClsCd : id, lwstYn : lwstYn}, function(data){
		
	});
}
</script>

</body>
</html>
