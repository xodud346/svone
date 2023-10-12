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
                    <a class="button small" href="javascript:handleSave()">저장</a>
                </div>
                <form id="popupForm"></form>
                <form id="createForm">
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
                                <input type="text" id="bzplcId" name="bzplcId" readonly>
                                <a href="javascript:fnOneBzplcResult('popupForm');"
                                   class="icon search2"></a>
                            </td>
                            <th><span>사업장명</span></th>
                            <td><input type="text" id="bzplcNm" readonly></td>
                        </tr>
                        <tr>
                            <th><span>상품 ID</span></th>
                            <td><input type="text" id="prdId" name="prdId" readonly>
                                <a href="javascript:productPopup('popupForm');"
                                   class="icon search2"></a>
                            </td>
                            <th><span>상품명</span></th>
                            <td><input type="text" id="prdNm" readonly></td>
                        </tr>
                        <tr>
                            <th><span>대표규격</span></th>
                            <td><input type="text" id="reprSpec" readonly></td>
                            <th><span>상품분류</span></th>
                            <td><input type="text" id="prdClsNm" readonly></td>
                        </tr>
                        <tr>
                            <th><span>제조원</span></th>
                            <td><input type="text" id="mnfrNm" readonly></td>
                            <th><span>원산지</span></th>
                            <td><input type="text" id="ctryNm" readonly></td>
                        </tr>
                        <tr>
                            <th><span>Stock #</span></th>
                            <td><input type="text" name="stkNo"></td>
                            <th><span>사용여부</span></th>
                            <td>
                                <select name="useYn">
                                    <option value="Y">사용</option>
                                    <option value="N">미사용</option>
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

    var fnOneBzplcResultCallback = function (data) {
        // 초기화
        const bzplcId = document.querySelector('#bzplcId');
        const bzplcNm = document.querySelector('#bzplcNm');
        bzplcId.value = '';
        bzplcNm.value = '';

        // 값 설정
        if (data) {
            bzplcId.value = data.BZPLC_ID;
            bzplcNm.value = data.BZPLC_NM;
        }
    }

    var fnSetProduct = function (params) {
        const prdId = document.querySelector('#prdId');
        const prdNm = document.querySelector('#prdNm');
        prdId.value = '';
        prdNm.value = '';
        var id = '', nm = '';
        $.each(params, function (index, item) {
            if (index < 1) {
                id += item.prdId;
                nm += item.prdNm;
            } else {
                id += "," + item.prdId;
                nm += "," + item.prdNm;
            }
            console.log(item.prdId);
            console.log(item.prdNm);
        });
        prdId.value = id;
        prdNm.value = nm;
    }

    const handleSave = function () {
        const createForm = $('#createForm');

        createForm.validate({
            rules: {
                prdId: {required: true},
                bzplcId: {required: true},
                stkNo: {required: true}
            },
            messages: {
                prdId: {required: "상품을 선택하세요."},
                bzplcId: {required: "사업장을 선택하세요."},
                stkNo: {required: "Stock#을 입력하세요."}
            }
        });

        if (createForm.valid()) {
            if (confirm('등록하시겠습니까?'))
                createForm.attr({
                    "action": "<c:out value="${serverDomain}" />/am/fnc/stkMng/stockNo.do",
                    "target": "_self",
                    "method": "POST"
                }).submit();
            else alert('취소되었습니다.')
        }
    };
</script>
</body>
</html>
