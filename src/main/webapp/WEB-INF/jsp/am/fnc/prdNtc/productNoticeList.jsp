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

                <h2 class="title"><span>상품고시관리</span></h2>
				
				<div class="grid">
					
				
					<div class="col col-1-3">
						<div class="action text-right">
		                	<a href="javascript:goForm('','W');" class="button button-b small" ><span>신규품목추가</span></a>
		                </div>
		                <br/><br/>
						<div class="module" style="margin-right: 10px;">
			                <table cellspacing="0" class="table-row table-a"><!-- table -->
			                    <colgroup>
			                    	<col style="width: 10%;" />
			                        <col style="width: auto;" />
			                        <col style="width: 20%;" />
			                    </colgroup>
			                    <thead>
			                        <tr>
			                        	<th>No</th>
			                            <th>품목</th>
			                            <th><center>사용여부</center></th>
			                        </tr>
			                    </thead>
			                    <tbody>
			                        <c:choose>
			                           	<c:when test="${not empty list }">
			                           		<c:forEach var="row" items="${list}" varStatus="status">
					                            <tr>
					                            	<td><center>${status.index+1}</center></td>
					                            	<td>
					                            		<a href="javascript:goForm('<c:out value="${row.notiId }" />','M');">
					                            			<c:out value="${row.notiNm }" />
					                            		</a>
					                            	</td>
					                            	<td class="text-center"><center><c:out value="${row.useYn eq 'Y' ? '사용':'미사용' }" /></center></td>
					                            </tr>
					                        </c:forEach>
					                    </c:when>
					               </c:choose>
			                    </tbody>
			                </table><!-- // table -->
		                </div>
	                </div>
	                <div class="col col-2-3">
	                	<div class="module" id="main_con" style="margin-left: 10px;">
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
<script>
$(function(){
	
	// 품목정보 등록/수정 폼
	goForm = function (id, mode) {
		$.ajax({
	        type : "POST",
	        async:true,
	        dataType :"html",
	        url : '<c:out value="${serverDomain}"/>/am/fnc/prdNtc/productNoticeDetail.do',
	        data : {
	            'notiId'       : id,
	            'writeMode'		: mode
	        },
	        success : function(data){
	            $('#main_con').html(data);
	        }
	    });
	};
	
	var notiId = "<c:out value='${commandMap.notiId}' />";
	console.log("!!!!" + notiId)
	if(!notiId == ""){
		goForm(notiId,"M");
	}
});
//-->
</script>

</body>
</html>
