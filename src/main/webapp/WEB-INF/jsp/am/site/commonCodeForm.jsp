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

                <h2 class="title"><span>공통코드 관리</span></h2>

                <h3 class="title"><span>등록</span></h3>



               <form id="searchForm">
                    <input type="hidden" name="CMN_COM_IDX" value="${row.CMN_COM_IDX }" />
                    <input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/>
                    <input type="hidden" name="searchType" value="<c:out value="${commandMap.searchType }"/>"/>
                    <input type="hidden" name="searchWord" value="<c:out value="${commandMap.searchWord }"/>"/>
                    <input type="hidden" name="searchCmnComUseYn" value="<c:out value="${commandMap.searchCmnComUseYn }"/>"/>
                    <input type="hidden" name="pageSize" value="<c:out value="${commandMap.pageSize }"/>" />
                </form>

                <form id="frm" name="frm">
                    <table cellspacing="0" class="table-row table-a"><!-- table -->
                        <colgroup>
                            <col style="width: 15%; min-width: 180px;" />
                            <col style="width: auto;" />
                        </colgroup>
                        <tbody>
                        	<tr>
                                <th><span>구분 <i class="require"><em>필수입력</em></i></span></th>
	                            	<td>
	                            		<select class="select" name="searchType" id="searchType">
	                                        <option value="">선택</option>
	                                    </select>
                            		</td>
                            </tr>
                 			<tr>
                                <th><span>코드명 <i class="require"><em>필수입력</em></i></span></th>
                                <td>
                                    <input type="text" name="CMN_COM_NM" id="CMN_COM_NM" class="text" maxlength="40" />
                                </td>
                            </tr>
                            <tr>
                                <th><span>코드ID</span></th>
                                <td>
                                    <input type="text" name="" id="" class="text" maxlength="50"/>
                                </td>
                            </tr>

                        </tbody>
                    </table><!-- // table -->
                    <p>
                    	<i class="require"><em>필수입력</em>※ 코드명은 한글, 숫자, 영어만 입력 가능합니다</i>
                	</p>
                </form>

                <div class="section-button"><!-- section-button -->
                    <div class="wrap text-center">
                        <c:if test="${not empty row }">
                            <a href="#none" id="goEdit" class="button large"><span>상위 코드 목록</span></a>
                        </c:if>
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
            CMN_COM_NM:{required:true}, // 코드 명
            CMN_COM_USE_YN:{required:true} // 상태
        }
    });


    // 목록 버튼 클릭 이벤트
    $(document).on("click", "#goList", function () {
       $("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/site/commonCodeManagerList.do", "target":"_self", "method":"post"}).submit();
    });

    // 등록 이벤트
    $(document).on("click", "#goRegist", function () {
        var $frm = $("#frm");
        if($frm.valid()){
            if (confirm( "저장 하시겠습니까?")) {
                $("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/site/commonCodeManagerRegist.do", "target":"_self", "method":"post"}).submit();
            }
        }
    });

});
</script>

</body>
</html>
