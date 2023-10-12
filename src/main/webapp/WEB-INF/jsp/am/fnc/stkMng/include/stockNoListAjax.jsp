<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<form id="popupForm"></form>
<div class="grid section-button-search">
    <c:set var="totalRecordCount" value="${paging.totalRecordCount}"/>
    <c:set var="existStatus" value="${totalRecordCount gt 0}"/>
    <c:if test="${existStatus}">
        <div class="col- text-left">
                <span class="pages">
                    (총 <strong
                        class="em">${totalRecordCount}</strong>건, ${paging.cPage} of ${paging.totalPageCount} page)
                </span>
        </div>
    </c:if>
    <input type="hidden" id="totalCount" value="${totalRecordCount}">
    <a href="javascript:stockNoExcelDown();" class="button small primary"><span>엑셀다운로드</span></a>
    <a href="javascript:alert('미구현 기능');" class="button small"><span>일괄등록/변경</span></a>
    <a href="<c:out value="${serverDomain}"/>/am/fnc/stkMng/stockNoCreate.do" class="button small"><span>등록</span></a>
    <ui:pageSizeBox value="${paging.pageSize}" name="cntPerPage" type="" jsFunction="changePageSize"/>
</div>
<table class="table-col table-b">
    <colgroup>
        <col style="width: 8%;"/>
        <col style="width: 8%;"/>
        <col style="width: 8%;"/>
        <col style="width: 8%;"/>
        <col style="width: 8%;"/>
        <col style="width: 8%;"/>
        <col style="width: 8%;"/>
        <col style="width: 8%;"/>
        <col style="width: 8%;"/>
        <col style="width: 8%;"/>
        <col style="width: 8%;"/>
        <col style="width: 8%;"/>
    </colgroup>
    <thead>
    <tr>
        <th>사업장 ID</th>
        <th>사업장 명</th>
        <th>상품 ID</th>
        <th>상품명</th>
        <th>대표규격</th>
        <th>제조원</th>
        <th>Stock No</th>
        <th>사용/미사용</th>
        <th>최종변경자</th>
        <th>최종변경일시</th>
        <th>상세보기</th>
        <th>변경이력</th>
    </tr>
    </thead>
    <tbody>
    <c:choose>
        <c:when test="${!existStatus}">
            <tr>
                <td colspan="12"><span>조회 된 값이 없습니다.</span></td>
            </tr>
        </c:when>
        <c:otherwise>
            <c:forEach items="${stockNoSearchResult}" var="stockNoItem">
                <c:set var="coCd" value="${stockNoItem.coCd}"/>
                <c:set var="bzplcId" value="${stockNoItem.bzplcId}"/>
                <c:set var="prdId" value="${stockNoItem.prdId}"/>
                <tr>
                    <td>${bzplcId}</td>
                    <td>${stockNoItem.bzplcNm}</td>
                    <td>${prdId}</td>
                    <td>${stockNoItem.prdNm}</td>
                    <td>${stockNoItem.reprSpec}</td>
                    <td>${stockNoItem.mnfrNm}</td>
                    <td>${stockNoItem.stkNo}</td>
                    <td>${stockNoItem.useYn eq 'Y' ? '사용' : '미사용'}</td>
                    <td>${stockNoItem.latestNm}</td>
                    <td><fmt:formatDate value="${stockNoItem.latestDtm}" pattern="yyyy-MM-dd HH:mm"/></td>
                    <td>
                        <a href="<c:out value="${serverDomain}"/>/am/fnc/stkMng/stockNoRead.do?coCd=${coCd}&bzplcId=${bzplcId}&prdId=${prdId}"
                           class="button small">
                            <span>상세보기</span>
                        </a>
                    </td>
                    <td>
                        <a href="javascript:stockNoHst('${coCd}','${bzplcId}','${prdId}');" class="button small"><span>이력보기</span></a>
                    </td>
                </tr>
            </c:forEach>
        </c:otherwise>
    </c:choose>
    </tbody>
</table>
<c:if test="${existStatus}">
    <div class="section-pagination">
        <h4 class="sr-only">목록 페이징</h4>
        <div class="wrap">
            <ui:paging paging="${paging}" jsFunction="goPage"/>
        </div>
    </div>
</c:if>
