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

                <h2 class="title"><span>배너관리</span></h2>

                <h3 class="title"><span>목록</span></h3>
				<!-- 채널 -->
				<form id="searchForm1" name="searchForm1" style="margin-bottom: 0;">
					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
	                    <colgroup>
	                        <col style="width: 10%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                        <tr>
	                            <th><span>채널</span></th>
	                            <td>
	                              	<input type="radio" id="stateB" name="searchGubun" class="radio" checked="checked" value="P"/>
		                        	<label for="stateB">PC</label>
		                        	<input type="radio" id="stateC" name="searchGubun" class="radio" value="M"/>
		                        	<label for="stateC">MOBILE</label>
	                            </td>
	                        </tr>
	                    </tbody>
	                </table>
                </form>
                <!-- //채널 -->
                <br/>
                
                <div class="clearfix">
					<div class="grid">
						<!-- 카테고리 리스트 -->
						<div class="col" style="margin-right: 20px; padding: 10px; padding-right: 20px; border: solid 1px #ccc;">
							<ul id="browser" class="filetree treeview-famfamfam"></ul>
						</div>
						
                    	<!-- //카테고리 리스트 -->
                    	<!-- 조회 영역 -->
	                    <div class="col-2" style="width:79%;">
	                    		<div class="col-2" style="width:100%; display:none;" id="searchSection">
		                    	<%@ include file="/WEB-INF/jsp/am/dsp/bnrMng/bannerSearchForm.jsp" %>
		                    </div>
							<!-- //조회 영역 -->
							<!-- 배너 리스트 -->
		                    	<div id="bannerList" class="col-2" style="width:100%;"></div>
		                    <!-- //배너 리스트 -->
	                    </div>
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

var commandMap = '${commandMap}';
var commandMapLoYn = '${commandMap.searchBnrMstLoginYn}';
var commandMapJson = JSON.stringify(commandMap);

var pageParam = {};

<c:forEach var="i" items="${commandMap}" >
	pageParam['<c:out value="${i.key}"/>'] = '<c:out value="${i.value}"/>'
</c:forEach>


$(function() {
	//카테고리 리스트 조회
    categoryList($("input[name=searchGubun]").val());
    
	// 채널 라디오 버튼 변경시
 	$("input:radio[name=searchGubun]").click(function(){
		categoryList($(this).val());
 	});
    // 폴더 클릭시
    $(document).on("click", ".folder", function(){
    	var idx = $(this).data("idx");
    	var name = $(this).data("name");
    	var type = $(this).data("type");
    	var type2 = $(this).data("type2");
    	var level = $(this).data("level");
    	
    	if("" != type){	// SSP몰, R&D몰, 마이페이지가 아닌경우 
    		if($("#CMN_COM_IDX").val() != idx) {	// 동일카테고리 클릭 시 미동작 
    			$("#searchSection").load("/am/dsp/bnrMng/bannerSearchForm.do", $("#searchForm1").serialize(), function(){
        			$("#CMN_COM_IDX").val(idx);
        			$("#BNR_MST_GBN").val(type);
        			$("#BNR_MST_CLS").val(type2);
        			$("#CATEGORY_NAME").val(name);
        			$("#categoryTitle").html(name);
        			$("#searchSection").show();
        			$("#bannerList").show();
        			$("#bannerList").empty();
        		});
    		}
    	}
    });

    if(commandMapLoYn == 'N' || commandMapLoYn == 'Y') {
    	console.log('commandMapLoYn',commandMapLoYn);
    	backPosion();
    }
});

// 카테고리 리스트 조회
function categoryList(searchGubun){

	
	pageParam["CHANNEL_TYPE"] = searchGubun;
		
    $.postSyncJsonAjax("/am/dsp/bnrMng/bannerAjax.do", pageParam, function(data){
//     $.postSyncJsonAjax("/am/dsp/bnrMng/bannerAjax.do", { CHANNEL_TYPE : searchGubun }, function(data){
    	$("#searchSection").hide();
 		$("#categoryTitle").html("");
 		$("#bannerList").empty();
        $("#browser").html(data.bannerList);
        $("#browser").treeview({
            toggle: function(){
                //console.log("%s was toggled.", $(this).find(">span").text());
            }
        });
    });
}

// 등록 후 조회했던 위치로 돌아가기
function backPosion() { 
	//var commandMap = '${commandMap}';
    var commandMapLoYn = '${commandMap.searchBnrMstLoginYn}';
    //var commandMapJson = JSON.stringify(commandMap);
    //console.log("commandMap : " + commandMapJson);
    

    if(commandMapLoYn != null && commandMapLoYn != ''){	
    	
    	$("#searchSection").load("/am/dsp/bnrMng/bannerSearchForm.do", pageParam, function(){
    		$("searchGubun").val('${commandMap.BNR_MST_ENV}');
    		$("#searchBnrMstLoginYn").val('${commandMap.searchBnrMstLoginYn}');
    		if(commandMapLoYn == 'Y'){
    			$("#bzplcTab").show();
    		}
    		if('${commandMap.searchBzplcNm}' != null && '${commandMap.searchBzplcNm}' != '' && 
    				'${commandMap.searchBzplcId}' != null && '${commandMap.searchBzplcId}' != '') {
    			$("#BZPLC_NM").val('${commandMap.searchBzplcNm}');
	    		$("#BZPLC_ID").val('${commandMap.searchBzplcId}');
    		}
    		$("#searchBnrMstBzplcYn").val('${commandMap.searchBnrMstBzplcYn}');
    		$("#searchBnrMstDisplayYn").val('${commandMap.searchBnrMstDisplayYn}');
    		$("#categoryTitle").html('${commandMap.CATEGORY_NAME}');
    		$("#CMN_COM_IDX").val('${commandMap.CMN_COM_IDX}');
    		$("#searchSection").show();
    		$("#bannerList").show();
    		search();
    		
    		$("span.folder").data('idx');
    		var currentSpan = null;
    		var lis = $("#browser").find("li");
    		for(var i = 0 ; i < lis.length ; i++){
    			var ul = $(lis[i]).find("ul");
    			var ulLi = $(ul).find("li");
    			for(var j = 0 ; j < ulLi.length;j++){
    				var span = $(ulLi[j]).find("span");
    				console.log("dataidx = " +$(span).data("idx"));
    				var idx = $(span).data("idx")
    				if('${commandMap.CMN_COM_IDX}' == idx){
    					currentSpan = span;
    					//$(currentSpan).parent().parent().css("display" , "block");
    					$(currentSpan).parents("ul").css("display" , "block");
    					break;
    				}
    			}
    			if(currentSpan != null){
    				break;
    			}
    		}
    	});
    };
};


</script>

</body>
</html>
