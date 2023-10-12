<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
    <%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
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
            <!-- container -->
            <div class="container">
                <h2 class="title"><span>Stock No 관리</span></h2>
                <h3 class="title"><span>조회</span></h3>
                <form id="dataForm"></form>
                <form id="searchForm"></form>
                <form id="pageForm">
                    <input type="hidden" name="cPage" id="cPage" value="1"/>
                    <input type="hidden" name="pageSize" id="pageSize" value="20"/>
                </form>
                <form id="inputForm">
                    <table class="table-row table-a" style="margin-bottom: 0;">
                        <colgroup>
                            <col style="width: 10%;"/>
                            <col style="width: auto;"/>
                            <col style="width: 10%;"/>
                            <col style="width: auto;"/>
                            <col style="width: 10%;"/>
                            <col style="width: 25%;"/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <th><span>사업장</span></th>
                            <td>
                                <input type="text" class="text" id="bzplcNm" readonly/>
                                <a href="javascript:bzplcPopup('inputForm');" class="icon search2"></a>
                                <a href="javascript:multiTextPopup('bzplcId');" class="icon doc textPopup"></a>
                                <input type="text" name="bzplcId" id="bzplcId" hidden/>
                            </td>
                            <th><span>상품</span></th>
                            <td>
                                <input type="text" class="text" id="prdNm" readonly/>
                                <a href="javascript:productMultiPopup('inputForm', 'prdId');" class="icon search2"></a>
                                <a href="javascript:multiTextPopup('prdId');" class="icon doc textPopup"></a>
                                <input type="text" name="prdId" id="prdId" hidden/>
                            </td>
                            <th><span>사용여부</span></th>
                            <td>
                                <select class="select" name="useYn">
                                    <option value="">전체</option>
                                    <option value="Y">사용</option>
                                    <option value="N">미사용</option>
                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                <a href="javascript:frmClear('inputForm');" class="button small"><span>초기화</span></a>
                <a href="javascript:void(0);" id="search" class="button small warning"><span>조회</span></a>
            </div>
            <h3 class="title"><span>목록</span></h3>
            <div id="stockNoResultRoot"></div>
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
    'use strict';
    $(document).ready(function () {
        const searchBtn = $('#search');
        searchBtn.on('click', function (e) {
            e.preventDefault();
            search();
        })
        searchBtn.trigger('click');
    });

    const frmClear = function () {
        searchClear('inputForm', {bzplcNm: '', bzplcId: '', prdNm: '', prdId: '', useYn: ''})
    };

    const search = function () {
        try {
            makeForm();
            goPage(1);
        } catch (error) {
            console.error(error);
        }
    }

    const changePageSize = function () {
        $('#pageSize').val($('#cntPerPage').val());
        goPage(1);
    }

    var fnResultBzplc = function (data) {
        // 초기화
        const bzplcId = document.querySelector('#bzplcId');
        const bzplcNm = document.querySelector('#bzplcNm');
        bzplcId.value = '';
        bzplcNm.value = '';
        var id = '', nm = '';

        $.each(data, function (idx, item) {
            id += (idx != 0 ? ',' : '') + item.ID;
            nm += (idx != 0 ? ',' : '') + item.NM;
        });
        // 값 설정
        bzplcId.value = id;
        bzplcNm.value = nm;
    }

    var fnProductMultiCallback = function (eleId, data) {
        // 초기화
        const prdId = document.querySelector('#prdId');
        const prdNm = document.querySelector('#prdNm');

        prdId.value = '';
        prdNm.value = '';

        var id = '', nm = '';
        $.each(data, function (idx, item) {
            id += (idx != 0 ? ',' : '') + item.id;
            nm += (idx != 0 ? ',' : '') + item.nm;
        });
        // 값 설정
        prdId.value = id;
        prdNm.value = nm;
    }

    const goPage = function (cPage) {
        $('#cPage').val(cPage);
        $.ajax({
            url: '<c:out value="${serverDomain}"/>/am/fnc/stkMng/stockNoListAjax.do',
            type: 'GET',
            data: makeJson()
        }).done(function (result) {
            const stockNoResultRoot = $('#stockNoResultRoot');
            stockNoResultRoot.empty();
            stockNoResultRoot.append(result);
        });
    };

    var fnResultText = function (data) {
        if (data) {
            // 초기화
            $("#" + data.id).val("");

            // 값 설정
            $("#" + data.id).val(data.data);
        }
    }

    const makeForm = function () {
        const inputForm = $('#inputForm').serializeObject();
        const dataForm = $('#dataForm');
        dataForm.empty();
        for (const inputKey in inputForm)
            dataForm.append($('<input/>', {type: 'hidden', class: 'form', name: inputKey, value: inputForm[inputKey]}));
    }

    const stockNoHst = function (coCd, bzplcId, prdId) {
        popup('', "1300", "300", "no", "_clientMultiPopup");
        const popupForm = $('#popupForm');
        popupForm.empty();
        const popupData = {
            coCd: coCd,
            bzplcId: bzplcId,
            prdId: prdId
        };
        for (const inputKey in popupData)
            popupForm.append($('<input/>', {
                type: 'hidden',
                class: 'form',
                name: inputKey,
                value: popupData[inputKey]
            }));

        popupForm.attr({
            "action": '<c:out value="${serverDomain}"/>/am/fnc/stkMng/stockNoHst.do',
            "target": "popup_clientMultiPopup",
            "method": "GET"
        }).submit();
        popupForm.empty();
    }

    const makeJson = function () {
        const json = $('#dataForm,#pageForm').serializeObject();
        json.uid = (new Date()).getTime();
        return json;
    }

    const stockNoExcelDown = function () {
        var totalRecordCount = $("#total").val();
        if (totalRecordCount > 10000) {
            alert("엑셀 다운로드는 10000건 이하만 가능합니다.");
            return;
        } else if (totalRecordCount == 0) {
            alert("저장할 내역이 없습니다.");
            return;
        }
        $("#dataForm").attr({
            "action": "<c:out value="${serverDomain}" />/am/fnc/stkMng/stockNoExcelDown.do",
            "target": "_self",
            "method": "POST"
        }).submit();
    }
</script>
</body>
</html>
