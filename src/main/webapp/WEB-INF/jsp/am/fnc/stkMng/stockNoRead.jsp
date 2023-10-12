<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
    <%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
</head>
<body><!-- body class, 중요 -->
<div id="header"><!-- header -->
    <%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</div><!-- // header -->
<!-- container -->
<div id="container">
    <!-- aside -->
    <div id="aside" class="aside left">
        <%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
    </div>
    <!-- // aside -->
    <!-- wrapper -->
    <div id="wrapper">
        <!-- breadcrumb -->
        <div id="breadcrumb"></div>
        <!-- contents -->
        <div id="contents">
            <!-- container -->
            <div class="container">
                <h2 class="title"><span>Stock No 관리</span></h2>
                <div class="grid section-button-search">
                    <a class="button small" href="javascript:handleSave()">수정</a>
                </div>
                <form id="editForm">
                    <input type="hidden" name="coCd" value="${stockNoRead.coCd}">
                    <!-- table -->
                    <table class="table-row table-a">
                        <colgroup>
                            <col style="width: 20%;"/>
                            <col style="width: 30%;"/>
                            <col style="width: 20%;"/>
                            <col style="width: 30%;"/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <th><span>사업장 ID</span></th>
                            <td>
                                <input type="text" name="bzplcId" readonly value="${stockNoRead.bzplcId}">
                            </td>
                            <th><span>사업장명</span></th>
                            <td><input type="text" readonly value="${stockNoRead.bzplcNm}"></td>
                        </tr>
                        <tr>
                            <th><span>상품 ID</span></th>
                            <td><input type="text" name="prdId" readonly value="${stockNoRead.prdId}"></td>
                            <th><span>상품명</span></th>
                            <td><input type="text" readonly value="${stockNoRead.prdNm}"></td>
                        </tr>
                        <tr>
                            <th><span>대표규격</span></th>
                            <td><input type="text" readonly value="${stockNoRead.reprSpec}"></td>
                            <th><span>상품분류</span></th>
                            <td><input type="text" readonly value="${stockNoRead.prdClsNm}"></td>
                        </tr>
                        <tr>
                            <th><span>제조원</span></th>
                            <td><input type="text" readonly value="${stockNoRead.mnfrNm}"></td>
                            <th><span>원산지</span></th>
                            <td><input type="text" readonly value="${stockNoRead.ctryNm}"></td>
                        </tr>
                        <tr>
                            <th><span>Stock #</span></th>
                            <td><input type="text" id="stkNo" name="stkNo" value="${stockNoRead.stkNo}"></td>
                            <th><span>사용여부</span></th>
                            <td>
                                <c:set var="useYn" value="${stockNoRead.useYn eq 'Y'}"/>
                                <select name="useYn">
                                    <option value="Y" ${useYn ? 'selected' : ''}>사용</option>
                                    <option value="N" ${!useYn ? 'selected' : ''}>미사용</option>
                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <!-- // table -->
                </form>
            </div>
            <!-- // container -->
        </div>
        <!-- // contents -->
    </div>
    <!-- // wrapper -->
    <div id="quickmenu" class="aside right">
        <!-- quickmenu-->
        <%@ include file="/WEB-INF/jsp/am/include/quick.jsp" %>
    </div>
    <!-- // quickmenu -->
</div>
<!-- // container -->
<div id="footer">
    <%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>
<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>
<script>
    'use strict';
    const makeJson = function () {
        const json = $('#editForm').serializeObject();
        json.uid = (new Date()).getTime();
        return json;
    }

    const handleSave = function () {
        const stkStatus = document.querySelector('#stkNo').value.trim() === '';
        if (confirm((stkStatus ? '삭제' : '수정') + '하시겠습니까?')) {
            const editForm = $('#editForm');

            editForm.validate({
                rules: {
                    prdId: {required: true},
                    bzplcId: {required: true},
                    stkNo: {required: false}
                },
                messages: {
                    prdId: {required: "상품을 선택하세요."},
                    bzplcId: {required: "사업장을 선택하세요."},
                    stkNo: {required: "Stock#을 입력하세요."}
                }
            });

            if (editForm.valid())
                editForm.attr({
                    "action": "<c:out value="${serverDomain}" />/am/fnc/stkMng/stockNo" + (stkStatus ? 'Delete' : 'Edit') + ".do",
                    "target": "_self",
                    "method": "POST"
                }).submit();
        }
    };
</script>
</body>
</html>
