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

                <h3 class="title"><span>조회</span></h3>

                <form id="searchForm" name="searchForm">
                    <input type="hidden" name="pageSize" value="<c:out value="${commandMap.pageSize }"/>" />
                    <table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
                        <colgroup>
                            <col style="width: 10%;" />
                            <col style="width: auto;"/>
                            <col style="width: 10%;" />
                            <col style="width: auto;"/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th><span>구분</span></th>
                                <td>
                                    <select class="select" name="searchType" id="searchType">
                                        <option value="">선택</option>
                                    </select>
                                </td>
                                <th><span>코드명</span></th>
                                <td>
									<input type="text" class="text logon" name="" id="" />
                                </td>
                                <th><span>코드ID</span></th>
                                <td>
									<input type="text" class="text logon" name="" id="" />
                                </td>
                            </tr>
                        </tbody>
                    </table><!-- // table -->

                </form>

                <div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:searchClear('searchForm');" class="button small"><span>초기화</span></a>
                    <a href="javascript:;" id="search" class="button small primary datepicker"><span>검색</span></a>
                </div><!-- // 검색 하단 버튼 -->

                <form id="frm" name="frm">
                    <input type="hidden" name="CMN_COM_IDX" value="" />
                    <input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/>
                    <input type="hidden" name="searchType" value="<c:out value="${commandMap.searchType }"/>"/>
                    <input type="hidden" name="searchWord" value="<c:out value="${commandMap.searchWord }"/>"/>
                    <input type="hidden" name="searchCmnComUseYn" value="<c:out value="${commandMap.searchCmnComUseYn }"/>"/>

                    <div class="grid section-button-list"><!-- 목록 상단 버튼 -->
                        <div class="col-1-2 text-left">
                            <h3 class="title"><span>목록</span></h3>

                            <span class="pages">(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)</span>
                        </div>
                        <div class="col-1-2 text-right">
                            <a href="#none" id="goForm" class="button small"><span>공통 코드생성</span></a>
                            <a href="#none" id="" class="button small primary datepicker"><span>저장</span></a>
                        	<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>
                        </div>
                    </div><!-- // 목록 상단 버튼 -->

                </form>

                <table cellspacing="0" class="table-col table-b"><!-- table -->
                    <colgroup>
                        <col style="width: 2%;" />
                        <col style="width: 8%;" />
                        <col style="width: auto;" />
                        <col style="width: auto;" />
                        <col style="width: auto;" />

                    </colgroup>
                    <thead>
                        <tr>
                            <th><input type="checkbox" id="allChk" name="allChk" class="checkbox checkRow"/></th>
							<th>구분</th>
							<th>코드명</th>
							<th>코드ID</th>
							<th>사용여부</th>

                        </tr>
                    </thead>
                    <tbody class="sort-target">
                        <c:choose>
                            <c:when test="${not empty list }">
                                <c:set var="listNum" value="${paging.listNum}" />
                            </c:when>
                            <c:otherwise>

                            </c:otherwise>
                        </c:choose>
                    </tbody>
                </table><!-- // table -->

                <div class="section-pagination"><!-- section pagination -->
                    <h4 class="sr-only">목록 페이징</h4>
                    <div class="wrap"><!-- 개발 시 wrap 이하 모듈 시작 -->
                        <ui:paging paging="${paging }" jsFunction="goPage" />
                    </div>
                </div><!-- // section pagination -->

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

<script>
$(function(){

	<!-- 생성 버튼 클릭 이벤트 -->
    $(document).on("click", "#goForm", function () {
        $("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/site/commonCodeManagerForm.do", "target":"_self", "method":"post"}).submit();
        return false;
    });

    <!-- 검색 엔터 이벤트 -->
    $(document).on("keydown", "#searchWord", function (e) {
        if(e.keyCode == 13){
            $("#search").trigger("click");
            return false;
        }
    });

    <!-- 검색 버튼 클릭 이벤트 -->
    $(document).on("click", "#search", function () {
        var $searchForm = $("#searchForm");

        $searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
        $searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/site/commonCodeManagerList.do", "target":"_self", "method":"post"}).submit();
    });

   <!--  페이지 사이즈 변경 이벤트 -->
    $(document).on("change", "select[name='pageSize']", function () {
        goPage(1);
    });

    <!-- 페이지 이동 -->
    goPage = function (cPage){
        var $frm = $("#frm");
        $frm.find("input[name='cPage']").val(cPage);
        $frm.attr({"action":"<c:out value="${serverDomain}" />/am/site/commonCodeManagerList.do", "target":"_self", "method":"post"}).submit();
    };




});
</script>

</body>
</html>
