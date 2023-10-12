<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
</head>
<body class="popup">
<div class="modal">
    <div class="modal-wrapper">
        <div class="modal-inner">
            <h3 class="title">
                <div class="grid section-button-search">
                    <div class="col-text-left">
                        <span>변경 이력</span>
                    </div>
                    <button class="button small" onclick="self.close();">X</button>
                </div>
            </h3>

            <table class="table-col table-b" id="selTable">
                <colgroup>
                    <col style="width: auto;"/>
                    <col style="width: auto;"/>
                    <col style="width: auto;"/>
                    <col style="width: auto;"/>
                    <col style="width: auto;"/>
                    <col style="width: auto;"/>
                    <col style="width: auto;"/>
                    <col style="width: auto;"/>
                    <col style="width: auto;"/>
                </colgroup>
                <thead>
                <tr>
                    <th>사업장ID</th>
                    <th>사업장</th>
                    <th>상품ID</th>
                    <th>상품명</th>
                    <th>대표규격</th>
                    <th>변경내용</th>
                    <th>변경 전</th>
                    <th>변경 후</th>
                    <th>요청자 ID</th>
                    <th>요청자 명</th>
                    <th>변경일시</th>
                </tr>
                </thead>
                <tbody>
                <c:set var="existStatus" value="${fn:length(stockNoHstSearchResult) gt 0}"/>
                <c:choose>
                    <c:when test="${!existStatus}">
                        <tr>
                            <td colspan="11"><span>변경 이력이 없습니다.</span></td>
                        </tr>
                    </c:when>
                    <c:otherwise>
                        <tr>
                            <td>
                                    ${stockNoHstSearchResult.bzplcId}
                            </td>
                            <td>
                                    ${stockNoHstSearchResult.bzplcNm}
                            </td>
                            <td>
                                    ${stockNoHstSearchResult.prdId}
                            </td>
                            <td>
                                    ${stockNoHstSearchResult.prdNm}
                            </td>
                            <td>
                                    ${stockNoHstSearchResult.reprSpec}
                            </td>
                            <td>
                                ???
                            </td>
                            <td>
                                    ${stockNoHstSearchResult.reprSpec}
                            </td>
                            <td>
                                    ${stockNoHstSearchResult.reprSpec}
                            </td>
                            <td>
                                    ${stockNoHstSearchResult.latestId}
                            </td>
                            <td>
                                    ${stockNoHstSearchResult.latestNm}
                            </td>
                            <td>
                                <fmt:formatDate value="${stockNoHstSearchResult.latestDtm}" pattern="yyyy-MM-dd HH:mm"/>
                            </td>
                        </tr>
                    </c:otherwise>
                </c:choose>
                </tbody>
            </table>
            <div class="section-button">
                <div class="wrap text-center">
                    <a href="javascript:self.close();" class="button"><span>확인</span></a>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="<c:out value="${serverDomain}" />/am/js/plugins.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/jquery.validate.js"></script>
</body>
</html>
