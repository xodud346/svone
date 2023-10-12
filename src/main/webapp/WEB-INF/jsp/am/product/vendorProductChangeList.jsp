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

                <h2 class="title"><span>입점업체 상품변경요청</span></h2>

                <div class="section-title"><!-- section-title -->
                    <h3 class="title"><span>목록</span></h3>
                </div><!-- // section-title -->
                
                <form id="searchForm" name="searchForm">
                    <input type="hidden" name="pageSize" value="<c:out value="${commandMap.pageSize }"/>" />
                    <input type="hidden" id="searchPrdCtgIdx" name="searchPrdCtgIdx" value="<c:out value="${commandMap.searchPrdCtgIdx }"/>" />
                    <input type="hidden" name="searchYn" value="Y" />
                    <input type="hidden" id="searchDetailY" name="searchDetailY" value="<c:out value="${commandMap.searchDetailY }"/>" />

	                <table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
	                    <colgroup>
	                        <col style="width: 10%;" />
	                        <col style="width: auto;" />
	                        <col style="width: 10%;" />
	                        <col style="width: auto;" />
	                        <col style="width: 10%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                        <tr><!-- row -->
	                            <th><span>상품코드</span></th>
	                            <td>
	                                <input type="text" class="text" id="searchPrdMstCd" name="searchPrdMstCd" value="<c:out value="${commandMap.searchPrdMstCd }"/>" />
	                            </td>
	                            <th><span>상품명</span></th>
	                            <td>
	                                <input type="text" class="text" id="searchPrdMstNm" name="searchPrdMstNm" value="<c:out value="${commandMap.searchPrdMstNm }"/>" />
	                            </td>
	                            <th><span>입점업체</span></th>
	                            <td>
	                                <select class="select" id="searchPrdMstVdrIdx" name="searchPrdMstVdrIdx" >
	    								<option value="">전체</option>
	    								<c:if test="${not empty vendorList }">
		                                    <c:forEach var="authRow" items="${vendorList }" varStatus="i">
		                                        <option value="<c:out value="${authRow.VDR_MST_IDX }"/>" <ui:select v="${commandMap.searchPrdMstVdrIdx}" t="${authRow.VDR_MST_IDX }" g="selected"/> ><c:out value="${authRow.VDR_MST_NM }"/></option>
		                                    </c:forEach>
		                                </c:if>
	    							</select>
	                            </td>
	                        </tr>
	                        <tr>
	                        	<th><span>등록일</span></th>
	                        	<td>
	                        		<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
	                       			<input type="text" name="searchStartDate" id="searchStartDate" class="text" value="<c:out value="${commandMap.searchStartDate }"/>" readonly="readonly" data-target-end="#searchEndDate"/> ~
	                       			<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
	                                <input type="text" name="searchEndDate" id="searchEndDate" class="text" value="<c:out value="${commandMap.searchEndDate }"/>" readonly="readonly" data-target-start="#searchStartDate"/>
	                        	</td>
	                        	<th><span>상태</span></th>
	                        	<td>
	                        		<select class="select" name="searchPrdMstSellState" id="searchPrdMstSellState">
										<option value="">전체</opton>
										<option value="<c:out value="${Code.PRODUCT_SELL_STATE_ING }" />" <ui:select v="${commandMap.searchPrdMstSellState}" t="${Code.PRODUCT_SELL_STATE_ING }" g="selected"/>>판매중</option>
										<option value="<c:out value="${Code.PRODUCT_SELL_STATE_OP_TEMPOUT }" />" <ui:select v="${commandMap.searchPrdMstSellState}" t="${Code.PRODUCT_SELL_STATE_OP_TEMPOUT }" g="selected"/> >일시품절</option>
										<option value="<c:out value="${Code.PRODUCT_SELL_STATE_TEMPOUT }" />" <ui:select v="${commandMap.searchPrdMstSellState}" t="${Code.PRODUCT_SELL_STATE_TEMPOUT }" g="selected"/> >품절상품</option>
										<option value="<c:out value="${Code.PRODUCT_SELL_STATE_STOP }" />" <ui:select v="${commandMap.searchPrdMstSellState}" t="${Code.PRODUCT_SELL_STATE_STOP }" g="selected"/>>미판매</option>
									</select>
	                        	</td>
	                        	<th><span>진열</span></th>
	                        	<td>
	                        		<select class="select" name="searchPrdMstDplState" id="searchPrdMstDplState">
										<option value="">전체</opton>
										<option value="Y" <ui:select v="${commandMap.searchPrdMstDplState}" t="Y" g="selected"/>>YES</option>
										<option value="N" <ui:select v="${commandMap.searchPrdMstDplState}" t="N" g="selected"/>>NO</option>
									</select>
	                        	</td>
	                        </tr>
	                        <tr>
	                        	<th><span>승인</span></th>
	                        	<td>
	                        		<select class="select" name="searchPrdMstApvState" id="searchPrdMstApvState">
										<option value="">전체</opton>
										<option value="D" <ui:select v="${commandMap.searchPrdMstApvState}" t="D" g="selected"/>>대기</option>
										<option value="A" <ui:select v="${commandMap.searchPrdMstApvState}" t="A" g="selected"/>>승인</option>
										<option value="C" <ui:select v="${commandMap.searchPrdMstApvState}" t="C" g="selected"/>>거절</option>
									</select>
	                        	</td>
	                        	<th><span>MD</span></th>
	                        	<td>
	                        		<select class="select" name="searchPrdMstMdId" id="searchPrdMstMdId">
										<option value="">전체</opton>
										<c:if test="${not empty basicMdList }">
		                                    <c:forEach var="authRow" items="${basicMdList }" varStatus="i">
		                                        <option value="<c:out value="${authRow.ADM_MST_ID }"/>" <ui:select v="${commandMap.searchPrdMstMdId}" t="${authRow.ADM_MST_ID }" g="selected"/> ><c:out value="${authRow.ADM_MST_NM }"/></option>
		                                    </c:forEach>
		                                </c:if>
									</select>
	                        	</td>
	                        	<th><span>브랜드</span></th>
	                        	<td>
	                        		<select class="select" name="searchPrdMstBrand" id="searchPrdMstBrand">
										<option value="">전체</opton>
										<c:choose>
											<c:when test="${not empty brandList}">
												<c:forEach var="brandList" items="${brandList }" varStatus="status">
													<option value="<c:out value="${brandList.BND_MST_IDX }" />" <ui:select v="${commandMap.searchPrdMstBrand }" t="${brandList.BND_MST_IDX }" g="selected"/>><c:out value="${brandList.BND_MST_BRAND_NM }" /></option>
												</c:forEach>
											</c:when>
										</c:choose>
									</select>
	                        	</td>
	                        </tr>
	                        <tr>
	                        	<th><span>카테고리</span></th>
	                       		<td colspan=5>
	                       			<select class="select" id="searchPrdCtgEnv" name="searchPrdCtgEnv" >
										<option value="" >미선택</option>
										<option value="<c:out value="${Code.CATEGORY_TYPE_PC }" />" <ui:select v="${commandMap.searchPrdCtgEnv }" t="${Code.CATEGORY_TYPE_PC }" g="selected"/>>PC</option>
										<option value="<c:out value="${Code.CATEGORY_TYPE_MOBILE }" />" <ui:select v="${commandMap.searchPrdCtgEnv }" t="${Code.CATEGORY_TYPE_MOBILE }" g="selected"/>>MOBILE</option>
									</select>
		
									<select class="select" id="searchPrdCtgDepth1" name="searchPrdCtgDepth1" >
										<option value="">대분류선택</option>
									</select>
									<select class="select" id="searchPrdCtgDepth2" name="searchPrdCtgDepth2" >
										<option value="">중분류선택</option>
									</select>
									<select class="select" id="searchPrdCtgDepth3" name="searchPrdCtgDepth3" >
										<option value="">소분류선택</option>
									</select>
									<select class="select" id="searchPrdCtgDepth4" name="searchPrdCtgDepth4" >
										<option value="">세분류선택</option>
									</select>
									<select class="select" id="searchPrdCtgDepth5" name="searchPrdCtgDepth5" >
										<option value="">세세분류선택</option>
									</select>
	                                <small class="desc"> * 카테고리 검색은 업체구분를 먼저 선택해주세요.</small>
	                       		</td>
	                        </tr>
	                    </tbody>
	                </table><!-- // table -->
	            </form>

                <div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:searchClear('searchForm');" class="button small"><span>검색 조건 초기화</span></a>
                    <a href="javascript:search();" class="button small primary"><span>검색</span></a>
                </div><!-- // 검색 하단 버튼 -->
				
				<form id="frm" name="frm">
	                <input type="hidden" name="searchErpPrdMstCd" value="<c:out value="${commandMap.searchErpPrdMstCd }"/>"/>
	                <input type="hidden" name="searchPrdMstCd" value="<c:out value="${commandMap.searchPrdMstCd }"/>"/>
	                <input type="hidden" name="searchPrdMstNm" value="<c:out value="${commandMap.searchPrdMstNm }"/>"/>
	                <input type="hidden" name="searchPrdCtgIdx" value="<c:out value="${commandMap.searchPrdCtgIdx }"/>" />
					<input type="hidden" name="searchPrdCtgEnv" value="<c:out value="${commandMap.searchPrdCtgEnv }"/>" />	                
	                <input type="hidden" name="searchPrdCtgDepth1" value="<c:out value="${commandMap.searchPrdCtgDepth1 }"/>" />
	                <input type="hidden" name="searchPrdCtgDepth2" value="<c:out value="${commandMap.searchPrdCtgDepth2 }"/>" />
	                <input type="hidden" name="searchPrdCtgDepth3" value="<c:out value="${commandMap.searchPrdCtgDepth3 }"/>" />
	                <input type="hidden" name="searchPrdCtgDepth4" value="<c:out value="${commandMap.searchPrdCtgDepth4 }"/>" />
	                <input type="hidden" name="searchPrdMstSellState" value="<c:out value="${commandMap.searchPrdMstSellState }"/>" />
	                <input type="hidden" name="searchPrdMstDplState" value="<c:out value="${commandMap.searchPrdMstDplState }"/>"/>
	                <input type="hidden" name="searchPrdMstApvState" value="<c:out value="${commandMap.searchPrdMstApvState }"/>" />
	                <input type="hidden" name="searchPrdMstMdId" value="<c:out value="${commandMap.searchPrdMstMdId }"/>" />
	                <input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/> 
	                <input type="hidden" id="PRD_MST_CD" name="PRD_MST_CD" value="" />
	                <input type="hidden" name="searchDetailY" value="<c:out value="${commandMap.searchDetailY }"/>" />
                    <input type="hidden" name="searchYn" value="<c:out value="${commandMap.searchYn }"/>" />
                
	                <div class="grid section-button-list"><!-- 목록 상단 버튼 -->
	                    <div class="col-1-2 text-left">
	                        <ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>
	                        <span class="pages">
	                        	(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" /> of <c:out value="${paging.totalPageCount }" /> page)
	                        </span>
	                    </div>
	                    <div class="col-1-2 text-right">
	                        <a href="#none" id="productApvState" class="button small primary"><span>승인</span></a>
							<a href="#none" id="excelDown" class="button small"><span>엑셀 내려받기</span></a>
	                    </div>
	                </div><!-- // 목록 상단 버튼 -->
	
	                <table cellspacing="0" class="table-col table-b"><!-- table -->
	                <colgroup>
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                    <col style="width: auto;" />
	                </colgroup>
	                <thead>
	                    <tr>
	                        <th><input type="checkbox" class="checkbox checkAll"/></th>
							<th>NO</th>
							<th>카테고리</th>
							<th>상품코드</th>
							<th>상품명</th>
							<th>입점업체</th>
							<th>ERP<br />상품등급</th>
							<th>판매가</th>
							<th>검색가</th>
							<th>배송비</th>
							<th>진열여부</th>
							<th>판매여부</th>
							<th>승인여부</th>
							<th>판매<br />가능수량</th>
							<th>즉시<br />쿠폰</th>
							<th>상품도입일</th>
							<th>등록일</th>
	                    </tr>
	                </thead>
	                <tbody>
	                    <c:choose>
						    <c:when test="${not empty list}">
						    	<c:set var="listNum" value="${paging.listNum}" />
						    	<c:forEach var="item" items="${list }" varStatus="status">
								<tr>
									<td>
										<input type="checkbox" name="PRD_MST_CDs" value="<c:out value="${item.PRD_MST_CD }" />" class="checkbox checkRow"/>
										<input type="hidden" id="VDR_APV_IDX_${item.PRD_MST_CD }" name="VDR_APV_IDX_${item.PRD_MST_CD }" value="<c:out value="${item.VDR_APV_IDX }"/>" />
									</td>
									<td><c:out value="${listNum }" /><br /><a href="javascript:goView('<c:out value="${item.PRD_MST_CD }" />');">[수정]</a></td>
									<td><c:out value="${item.PRD_CTG_LVL_NM}" /></td>
									<td>
										<a href="javascript:goDetail('<c:out value="${item.PRD_MST_CD }" />');"><c:out value="${item.PRD_MST_CD}"/>
										</a>
									</td>
									<td>
										<c:out value="${item.PRD_MST_NM}" /><br/>
										<a href="javascript:goPreview('<c:out value="${item.PRD_MST_CD }" />');">[→]</a>
									</td>
									<td><c:out value="${item.PRD_MST_VDR_NM}" /></td>		
									<td><c:out value="${item.ERP_MST_GRB}" /></td>
									<td>
										<input type="hidden" class="text short" name="VAV_PRD_MST_PRC_${item.PRD_MST_CD }" id="VAV_PRD_MST_PRC_${item.PRD_MST_CD }" value="<c:out value="${item.VAV_PRD_MST_PRC }" />" />
										<span style="color:blue;"><fmt:formatNumber value="${item.PRD_MST_PRC }" groupingUsed="true" /></span><br/>
										<span style="color:red;"><fmt:formatNumber value="${item.VAV_PRD_MST_PRC }" groupingUsed="true" /></span>
									</td>
									<td>
										<input type="hidden" class="text short" name="VAV_PRD_MST_SCH_PRC_${item.PRD_MST_CD }" id="VAV_PRD_MST_SCH_PRC_${item.PRD_MST_CD }" value="<c:out value="${item.VAV_PRD_MST_SCH_PRC }" />" />
										<span style="color:blue;"><fmt:formatNumber value="${item.PRD_MST_SCH_PRC }" groupingUsed="true" /></span><br/>
										<span style="color:red;"><fmt:formatNumber value="${item.VAV_PRD_MST_SCH_PRC }" groupingUsed="true" /></span>
									</td>
									<td><fmt:formatNumber value="${item.PRD_MST_DLV_FEE }" groupingUsed="true" /></td>
									<td>
										<c:out value="${item.PRD_MST_DPL_STATE eq 'Y' ? 'YES' : 'NO'}" />
									</td>
									<td>
										<c:out value="${item.PRD_MST_SEL_STATE_NM}"/>
									</td>
									<td>
										<c:out value="${item.PRD_MST_APV_STATE_NM}"/>
									</td>
									<td>
										<input type="hidden" class="text short" name="VAV_PRD_MST_SEL_CNT_${item.PRD_MST_CD }" id="VAV_PRD_MST_SEL_CNT_${item.PRD_MST_CD }" value="<c:out value="${item.VAV_PRD_MST_SEL_CNT }" />" />
										<span style="color:blue;"><fmt:formatNumber value="${item.PRD_MST_SEL_CNT }" groupingUsed="true" /></span><br/>
										<span style="color:red;"><fmt:formatNumber value="${item.VAV_PRD_MST_SEL_CNT }" groupingUsed="true" /></span>
									</td>
									<td>
										PC : <span style="color:blue;"><c:out value="${item.PRD_MST_PC_CPN_UNT eq 'R' ? '정율(%)' : '정액(원)' }" /></span>
										<span style="color:blue;"><c:out value="${item.PRD_MST_PC_CPN_PRC }" /><c:out value="${item.PRD_MST_PC_CPN_UNT eq 'R' ? '(%)' : '(원)' }" /></span><br>
										MB : <span style="color:blue;"><c:out value="${item.PRD_MST_MB_CPN_UNT eq 'R' ? '정율(%)' : '정액(원)' }" /></span>
										<span style="color:blue;"><c:out value="${item.PRD_MST_MB_CPN_PRC }" /><c:out value="${item.PRD_MST_PC_CPN_UNT eq 'R' ? '(%)' : '(원)' }" /></span><br>
										
										PC : <span style="color:red;"><c:out value="${item.VAV_PRD_MST_PC_CPN_UNT eq 'R' ? '정율(%)' : '정액(원)' }" /></span>
										<span style="color:red;"><c:out value="${item.VAV_PRD_MST_PC_CPN_PRC }" /><c:out value="${item.VAV_PRD_MST_PC_CPN_UNT eq 'R' ? '(%)' : '(원)' }" /></span>
										<input type="hidden" class="text short" name="VAV_PRD_MST_PC_CPN_UNT_${item.PRD_MST_CD }" id="VAV_PRD_MST_PC_CPN_UNT_${item.PRD_MST_CD }" value="<c:out value="${item.VAV_PRD_MST_PC_CPN_UNT }" />" />
										<input type="hidden" id="VAV_PRD_MST_PC_CPN_PRC_${item.PRD_MST_CD }" name="VAV_PRD_MST_PC_CPN_PRC_${item.PRD_MST_CD }" class="number text short" value="<c:out value="${item.VAV_PRD_MST_PC_CPN_PRC }" />"  maxlength=10 /><br />
										MB : <span style="color:red;"><c:out value="${item.VAV_PRD_MST_MB_CPN_UNT eq 'R' ? '정율(%)' : '정액(원)' }" /></span>
										<span style="color:red;"><c:out value="${item.VAV_PRD_MST_MB_CPN_PRC }" /><c:out value="${item.VAV_PRD_MST_MB_CPN_UNT eq 'R' ? '(%)' : '(원)' }" /></span>
										<input type="hidden" class="text short" name="VAV_PRD_MST_MB_CPN_UNT_${item.PRD_MST_CD }" id="VAV_PRD_MST_MB_CPN_UNT_${item.PRD_MST_CD }" value="<c:out value="${item.VAV_PRD_MST_MB_CPN_UNT }" />" />
										<input type="hidden" id="VAV_PRD_MST_MB_CPN_PRC_${item.PRD_MST_CD }" name="VAV_PRD_MST_MB_CPN_PRC_${item.PRD_MST_CD }" class="number text short" value="<c:out value="${item.VAV_PRD_MST_MB_CPN_PRC }" />"  maxlength=10 />
									</td>
									<td><ui:formatDate value="${item.ERP_MST_REG_DT }" pattern="yyyy.MM.dd"/></td>
									<td><ui:formatDate value="${item.PRD_MST_REG_DT }" pattern="yyyy.MM.dd"/></td>
								</tr>
								<c:set var="listNum" value="${listNum-1}" />
						    	</c:forEach>
						    </c:when>
						    <c:otherwise>
						    	<c:if test="${param.searchYn eq 'Y'}">
						    	<tr>
									<td class="td_no_result">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
								</tr>
						    	</c:if>
						    	<c:if test="${param.searchYn ne 'Y'}">
						    	<tr>
									<td class="td_no_result">${Code.COMMON_MESSAGE_DO_SEARCH_}</td>
								</tr>
						    	</c:if>
						    </c:otherwise>
						</c:choose>
	                </tbody>
	                </table><!-- // table -->
	            </form>

                <div class="section-pagination"><!-- section pagination -->
                    <h4 class="sr-only">목록 페이징</h4>
                    <div class="wrap"><!-- 개발 시 wrap 이하 모듈 시작 -->
                        <ui:paging paging="${paging }" jsFunction="goPage" />
                    </div>
                </div><!-- // section pagination -->
				
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
	//체크박스 전체 선택
    $.checkBoxSelect("checkAll", "checkRow");
  
    // 카테고리 설정
    if( $("#frm").find("input[name='searchPrdCtgEnv']").val() != ""){
    	getCategoryList("searchPrdCtgDepth1", "-1", "<c:out value="${commandMap.searchPrdCtgDepth1}" />", "<c:out value="${serverDomain}"/>", "<c:out value="${commandMap.searchPrdCtgEnv}" />");
    }
    
    if( $("#frm").find("input[name='searchPrdCtgIdx']").val() == "")
    {
//    	getCategoryList("searchPrdCtgDepth1", "-1", "<c:out value="${commandMap.searchPrdCtgDepth1}" />", "<c:out value="${serverDomain}"/>");
    }
    else
    {
    	getCategoryList("searchPrdCtgDepth1", "-1", "<c:out value="${commandMap.searchPrdCtgDepth1}" />", "<c:out value="${serverDomain}"/>", "<c:out value="${commandMap.searchPrdCtgEnv}" />");
    	getCategoryList("searchPrdCtgDepth2", "<c:out value="${commandMap.searchPrdCtgDepth1}" />", "<c:out value="${commandMap.searchPrdCtgDepth2}" />", "<c:out value="${serverDomain}"/>", "<c:out value="${commandMap.searchPrdCtgEnv}" />");
    	getCategoryList("searchPrdCtgDepth3", "<c:out value="${commandMap.searchPrdCtgDepth2}" />", "<c:out value="${commandMap.searchPrdCtgDepth3}" />", "<c:out value="${serverDomain}"/>", "<c:out value="${commandMap.searchPrdCtgEnv}" />");
    	getCategoryList("searchPrdCtgDepth4", "<c:out value="${commandMap.searchPrdCtgDepth3}" />", "<c:out value="${commandMap.searchPrdCtgDepth4}" />", "<c:out value="${serverDomain}"/>", "<c:out value="${commandMap.searchPrdCtgEnv}" />");
    	getCategoryList("searchPrdCtgDepth5", "<c:out value="${commandMap.searchPrdCtgDepth4}" />", "<c:out value="${commandMap.searchPrdCtgDepth5}" />", "<c:out value="${serverDomain}"/>", "<c:out value="${commandMap.searchPrdCtgEnv}" />");
    }

    $(document).on("change", "#searchPrdCtgEnv", function () 
    {
    	getCategoryList("searchPrdCtgDepth1", "-1", "<c:out value="${commandMap.searchPrdCtgDepth1}" />", "<c:out value="${serverDomain}"/>" , $("#searchPrdCtgEnv option:selected").val());
    	getCategoryList("searchPrdCtgDepth2", "<c:out value="${commandMap.searchPrdCtgDepth1}" />", "<c:out value="${commandMap.searchPrdCtgDepth2}" />", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
    	getCategoryList("searchPrdCtgDepth3", "<c:out value="${commandMap.searchPrdCtgDepth2}" />", "<c:out value="${commandMap.searchPrdCtgDepth3}" />", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
    	getCategoryList("searchPrdCtgDepth4", "<c:out value="${commandMap.searchPrdCtgDepth3}" />", "<c:out value="${commandMap.searchPrdCtgDepth4}" />", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
    	getCategoryList("searchPrdCtgDepth5", "<c:out value="${commandMap.searchPrdCtgDepth4}" />", "<c:out value="${commandMap.searchPrdCtgDepth5}" />", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
    });
    
    $(document).on("change", "#searchPrdCtgDepth1", function () 
    {
        getCategoryList("searchPrdCtgDepth2", $("#searchPrdCtgDepth1 option:selected").val(), "", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
        getCategoryList("searchPrdCtgDepth3", "", "", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
        getCategoryList("searchPrdCtgDepth4", "", "", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
        getCategoryList("searchPrdCtgDepth5", "", "", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
    });
    $(document).on("change", "#searchPrdCtgDepth2", function () 
    {
        getCategoryList("searchPrdCtgDepth3", $("#searchPrdCtgDepth2 option:selected").val(), "", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
        getCategoryList("searchPrdCtgDepth4", "", "", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
        getCategoryList("searchPrdCtgDepth5", "", "", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
    });
    $(document).on("change", "#searchPrdCtgDepth3", function () 
    {
        getCategoryList("searchPrdCtgDepth4", $("#searchPrdCtgDepth3 option:selected").val(), "", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
        getCategoryList("searchPrdCtgDepth5", "", "", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
    });
    $(document).on("change", "#searchPrdCtgDepth4", function () 
    {
        getCategoryList("searchPrdCtgDepth5", $("#searchPrdCtgDepth4 option:selected").val(), "", "<c:out value="${serverDomain}"/>", $("#searchPrdCtgEnv option:selected").val());
    });

    // 아이콘 전체선택
    $(document).on("click", "#searchPrdIcn1", function () 
    {
    	if($("input:checkbox[id=searchPrdIcn1]").is(":checked") == true) {
    		$("input:checkbox[name=searchPrdIcn]").attr("checked", true);	
    	}	
    });

    $(document).on("click", "input[name=searchPrdIcn]", function ()
    {
    	if( $(this).is(":checked") == false ) {
    		$("input:checkbox[id=searchPrdIcn1]").attr("checked", false);
    	}    		
    }); 
    
    
    // 검색 엔터 이벤트 
    $('#searchForm').find("input").not(".datepicker").keydown(function (e) 
    {
        if(e.keyCode == 13)
        {
            search();
        }
    });
	
    // 검색
    search = function() 
    {
        var $searchForm = $("#searchForm"); 
        
        // 상품 카테고리 검색 조건
        var searchCategoryIdx = "";
        var tempCategoryIdx = "";
        
        tempCategoryIdx = $searchForm.find("#searchPrdCtgDepth1 option:selected").val();
        if (tempCategoryIdx != '')
        {
        	searchCategoryIdx = tempCategoryIdx;
        }
        tempCategoryIdx = $searchForm.find("#searchPrdCtgDepth2 option:selected").val();
        if (tempCategoryIdx != '')
        {
        	searchCategoryIdx = tempCategoryIdx;
        }
        tempCategoryIdx = $searchForm.find("#searchPrdCtgDepth3 option:selected").val();
        if (tempCategoryIdx != '')
        {
        	searchCategoryIdx = tempCategoryIdx;
        }
        tempCategoryIdx = $searchForm.find("#searchPrdCtgDepth4 option:selected").val();
        if (tempCategoryIdx != '')
        {
        	searchCategoryIdx = tempCategoryIdx;
        }
        $searchForm.find("#searchPrdCtgIdx").val(searchCategoryIdx);
        
        // 구간 검색 값 체크 
        if($searchForm.find("#searchTextStart").val() != "" && $searchForm.find("#searchTextEnd").val() == "")
        {
        	alert("구간검색은 시작값과 종료값 모두를 입력하셔야 합니다.");
        	$searchForm.find("#searchTextEnd").focus();
        	return;
        }
        if($searchForm.find("#searchTextStart").val() == "" && $searchForm.find("#searchTextEnd").val() != "")
        {
        	alert("구간검색은 시작값과 종료값 모두를 입력하셔야 합니다.");
        	$searchForm.find("#searchTextStart").focus();
        	return;
        }

        
        $searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
        $searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/product/vendorProductChangeList.do", "target":"_self", "method":"post"}).submit(); 
    };
    
    // 상단 요약 클릭
    goProductList = function (prdSellState)
    {
        var $frm = $("#sumForm");
        $frm.find("#searchPrdMstSellState").val(prdSellState);
        $frm.attr({"action":"<c:out value="${serverDomain}"/>/am/product/vendorApprovalList.do", "target":"_self", "method":"post"}).submit();    	
    };
    
    // 페이지 이동
    goPage = function (cPage) 
    {
        var $frm = $("#frm");
        $frm.find("input[name='cPage']").val(cPage);
        $frm.attr({"action":"<c:out value="${serverDomain}"/>/am/product/vendorApprovalList.do", "target":"_self", "method":"post"}).submit();
    };
    
    // 상품 등록페이지 이동
    goForm = function ()
    {
        var $frm = $("#frm");

        $frm.attr({"action":"<c:out value="${serverDomain}"/>/am/product/vendorApprovalForm.do", "target":"_self", "method":"post"}).submit();
        
    };
    
    
    // 상품 상세페이지 이동
    goView = function (prdMstCd)
    {
        var $frm = $("#frm");
        $frm.find("#PRD_MST_CD").val(prdMstCd);
        $frm.attr({"action":"<c:out value="${serverDomain}"/>/am/product/vendorProductChangeEdit.do", "target":"_self", "method":"post"}).submit();
    };
    
    // 상품 상세페이지 이동 (프론트)
    goPreview = function (prdMstCd)
    {
        alert("프론트 상세페이지 새창 오픈");
    };
    
    //상품 상세페이지 팝업
    goDetail = function (prdMstCd)
    {
        var $frm = $("#frm");
        $frm.find("#PRD_MST_CD").val(prdMstCd);
        popup('',"1100","800","no","_ProductDetailPopup");
        $frm.attr({"action":"<c:out value="${serverDomain}"/>/am/product/vendorApprovalDetailPopup.do", "target":"popup_ProductDetailPopup", "method":"post"}).submit();
    };
    
    // 엑셀 다운로드
    $(document).on("click", "#excelDown", function () {
    	if("${paging.totalRecordCount}" > 10000){
    		alert("엑셀 다운로드는 10000건 이하만 가능합니다.");
    		return;
    	}else if("${paging.totalRecordCount}" == 0){
    		alert("저장할 내역이 없습니다.");
    		return;
    	}
    	if("${commandMap.searchYn }" != "Y"){
    		alert("검색을 해주시기 바랍니다.");
    		return;
    	}
        var $searchForm = $("#frm"); 
       	$searchForm.attr({"action": "<c:out value="${serverDomain}" />/am/product/vendorProductChangeListExcelDownload.do", "target":"_self", "method":"post"}).submit(); 
    });
    
  	// 팝업에서 선택한 매장 
    fnResultErpShop = function(obj)
    {
    	$("#searchStore").val(obj.SHOP_CD);
    	$("#searchStoreName").val(obj.SHOP_NM);
    	
    	return true;
    };
    
 	// 상품 수정
    $(document).on("click", "#productModify", function () {
    	if( $(".checkRow:checked").length == 0 ){
    		alert("수정 할 상품을 선택해 주십시오.");
    		return;
    	}
    	
    	var prdMstCd = "";
    	$(".checkRow:checked").each(function(){
    		prdMstCd = $(this).val();
    		if(prdMstCd != ""){
    			if($("input[name=PRD_MST_PRC_"+prdMstCd+"]").val() == ""){
    				alert("변경 할 판매가를 입력해주세요.");
    				$("input[name=PRD_MST_PRC_"+prdMstCd+"]").focus();
    				return false;
    			}
    			if(getInt($("input[name=PRD_MST_PRC_"+prdMstCd+"]").val()) < 0){
    				alert("변경 할 판매가를 정수로 입력해주세요.");
    				$("input[name=PRD_MST_PRC_"+prdMstCd+"]").focus();
    				return false;
    			}
    			if($("input[name=PRD_MST_SCH_PRC_"+prdMstCd+"]").val() == ""){
    				alert("변경 할 검색가를 입력해주세요.");
    				$("input[name=PRD_MST_SCH_PRC_"+prdMstCd+"]").focus();
    				return false;
    			}
    			if(getInt($("input[name=PRD_MST_SCH_PRC_"+prdMstCd+"]").val()) < 0){
    				alert("변경 할 검색가를 정수로 입력해주세요.");
    				$("input[name=PRD_MST_SCH_PRC_"+prdMstCd+"]").focus();
    				return false;
    			}
    			if($("input[name=PRD_MST_DLV_FEE_"+prdMstCd+"]").val() == ""){
    				alert("변경 할 배송비를 입력해주세요.");
    				$("input[name=PRD_MST_DLV_FEE_"+prdMstCd+"]").focus();
    				return false;
    			}
    			if(getInt($("input[name=PRD_MST_DLV_FEE_"+prdMstCd+"]").val()) < 0){
    				alert("변경 할 배송비를 정수로 입력해주세요.");
    				$("input[name=PRD_MST_DLV_FEE_"+prdMstCd+"]").focus();
    				return false;
    			}
    			if($("input[name=PRD_MST_SEL_CNT_"+prdMstCd+"]").val() == ""){
    				alert("변경 할 판매가능수량을 입력해주세요.");
    				$("input[name=PRD_MST_SEL_CNT_"+prdMstCd+"]").focus();
    				return false;
    			}
    			if(getInt($("input[name=PRD_MST_SEL_CNT_"+prdMstCd+"]").val()) < 0){
    				alert("변경 할 판매가능수량을 정수로 입력해주세요.");
    				$("input[name=PRD_MST_SEL_CNT_"+prdMstCd+"]").focus();
    				return false;
    			}
    		}
    	});
    	if (confirm( "수정 하시겠습니까?")) 
        {
	        //콤마제거
	        $(".checkRow:checked").each(function(){
	        	prdMstCd = $(this).val();
	        	$("input[name=PRD_MST_PRC_"+prdMstCd+"]").val(removeComma($("input[name=PRD_MST_PRC_"+prdMstCd+"]").val()));
	        	$("input[name=PRD_MST_SCH_PRC_"+prdMstCd+"]").val(removeComma($("input[name=PRD_MST_SCH_PRC_"+prdMstCd+"]").val()));
	        	$("input[name=PRD_MST_DLV_FEE_"+prdMstCd+"]").val(removeComma($("input[name=PRD_MST_DLV_FEE_"+prdMstCd+"]").val()));
	        	$("input[name=PRD_MST_SEL_CNT_"+prdMstCd+"]").val(removeComma($("input[name=PRD_MST_SEL_CNT_"+prdMstCd+"]").val()));
	        	$("input[name=PRD_MST_PC_CPN_PRC_"+prdMstCd+"]").val(removeComma($("input[name=PRD_MST_PC_CPN_PRC_"+prdMstCd+"]").val()));
	        	$("input[name=PRD_MST_MB_CPN_PRC_"+prdMstCd+"]").val(removeComma($("input[name=PRD_MST_MB_CPN_PRC_"+prdMstCd+"]").val()));
	        });
	        
    		var $frm = $("#frm"); 
	       	$frm.attr({"action": "<c:out value="${serverDomain}" />/am/product/vendorApprovalListModify.do", "target":"_self", "method":"post"}).submit(); 
        }
    });
 	
 	// 상품 삭제
    $(document).on("click", "#productDelete", function () {
    	if( $(".checkRow:checked").length == 0 ){
    		alert("삭제 할 상품을 선택해 주십시오.");
    		return;
    	}
    	
    	if (confirm( "삭제 하시겠습니까?")) 
        {
    		var $frm = $("#frm"); 
	       	$frm.attr({"action": "<c:out value="${serverDomain}" />/am/product/vendorApprovalDelete.do", "target":"_self", "method":"post"}).submit(); 
        }
    });
 	
 	// 상품 복사
    $(document).on("click", "#productApvState", function () {
    	if( $(".checkRow:checked").length == 0 ){
    		alert("승인 할 상품을 선택해 주십시오.");
    		return;
    	}
    	
    	
    	if (confirm("승인 하시겠습니까?")) 
        {
    		$("#PRD_MST_CD").val($(".checkRow:checked").val());
    		var $frm = $("#frm");
    		$frm.attr({"action":"<c:out value="${serverDomain}"/>/am/product/vendorProductChangeMulit.do", "target":"_self", "method":"post"}).submit();
        }
    });
});
//-->
</script>

</body>
</html>
