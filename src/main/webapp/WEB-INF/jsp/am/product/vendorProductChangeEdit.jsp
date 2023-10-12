<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
</head>
<body class="basic">

<div id="skipNavigation"><!-- skipNavigation -->
	<a href="#contents" class="sr-only">본문으로 바로가기</a>
</div><!-- // skipNavigation -->

<header><!-- header -->
    <%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</header><!-- // header -->

<div id="container" class="st-container"><!-- container -->
<form id="frmMainLayout" name="frmMainLayout" method="post">
    <input type="hidden" id="selectMenuCode" name="selectMenuCode" value="<c:out value="${selectMenuCode }" />"/>
</form>

	<aside id="navigation"><!-- navigation -->
		<nav>
            <%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
		</nav>
	</aside><!-- // navigation -->

	<div id="body"><!-- body -->

		<section id="contents"><!-- contents -->

			<div id="breadcrumb"><!-- breadcrumb -->
				<a href="#none"><i class="icon-home em"></i> HOME</a>
				&gt;
				<a href="#none">상품관리</a>
				&gt;
				<span>입점업체 상품변경요청</span>
			</div><!-- // breadcrumb -->

			<div class="contents-inner"><!-- contents-inner -->

				<h3 class="title">입점업체 상품변경요청</h3>
				
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
	                <input type="hidden" id="PRD_MST_CD" name="PRD_MST_CD" value="<c:out value="${productChangeInfo.PRD_MST_CD }"/>" />
	                <input type="hidden" id="VDR_APV_IDX" name="VDR_APV_IDX" value="<c:out value="${productChangeInfo.VDR_APV_IDX }"/>" />
	                <input type="hidden" name="searchDetailY" value="<c:out value="${commandMap.searchDetailY }"/>" />
                    <input type="hidden" name="searchYn" value="<c:out value="${commandMap.searchYn }"/>" />
                    
                    <input type="hidden" name="VAV_PRD_MST_PRC" id="VAV_PRD_MST_PRC" value="<c:out value="${productChangeInfo.VAV_PRD_MST_PRC }"/>" />
                    <input type="hidden" name="VAV_PRD_MST_SCH_PRC" id="VAV_PRD_MST_SCH_PRC" value="<c:out value="${productChangeInfo.VAV_PRD_MST_SCH_PRC }"/>" />
                    <input type="hidden" name="VAV_PRD_MST_SEL_CNT" id="VAV_PRD_MST_SEL_CNT" value="<c:out value="${productChangeInfo.VAV_PRD_MST_SEL_CNT }"/>" />
                    <input type="hidden" name="VAV_PRD_MST_PC_CPN_UNT" id="VAV_PRD_MST_PC_CPN_UNT" value="<c:out value="${productChangeInfo.VAV_PRD_MST_PC_CPN_UNT }"/>" />
                    <input type="hidden" name="VAV_PRD_MST_PC_CPN_PRC" id="VAV_PRD_MST_PC_CPN_PRC" value="<c:out value="${productChangeInfo.VAV_PRD_MST_PC_CPN_PRC }"/>" />
                    <input type="hidden" name="VAV_PRD_MST_MB_CPN_UNT" id="VAV_PRD_MST_MB_CPN_UNT" value="<c:out value="${productChangeInfo.VAV_PRD_MST_MB_CPN_UNT }"/>" />
                    <input type="hidden" name="VAV_PRD_MST_MB_CPN_PRC" id="VAV_PRD_MST_MB_CPN_PRC" value="<c:out value="${productChangeInfo.VAV_PRD_MST_MB_CPN_PRC }"/>" />
                    <div class="title-box">
						<div class="right">
							<a href="#none" class="button button-b" id="goList" ><span>목록</span></a>
							<a href="#none" id="productChange" class="button button-a"><span>승인</span></a>
							<a href="#none" id="productDelete" class="button button-c"><span>승인거절</span></a>
						</div>
					</div>
					<!-- col list -->
					<div style="clear: both; display: table; *zoom: 1; overflow: hidden; width: 100%;">
		                <div style="float: left; width: 48%;">
		                	<div class="title-box">
				                <h4 class="title">수정 요청 전 내용</h4> 
				            </div>    
			                <div class="table-a"><!-- col list -->
			                    <table class="core">
			                        <colgroup>
			                            <col style="width: 30%;" />
			                            <col style="width: 30%;" />
			                        </colgroup>
			                        <tbody>
			                        	<tr>
			                        		<th>상품가격</th>
			                        		<td><fmt:formatNumber value="${productChangeInfo.PM_PRD_MST_PRC }" groupingUsed="true" />원</td>
			                        	</tr>
			                        	<tr>
			                        		<th>검색가</th>
			                        		<td><fmt:formatNumber value="${productChangeInfo.PM_PRD_MST_PRC }" groupingUsed="true" />원</td>
			                        	</tr>
			                        	<tr>
			                        		<th>판매상태</th>
			                        		<td><c:out value="${productChangeInfo.PM_PRD_MST_SEL_STATE_NM }" /></td>
			                        	</tr>
			                        	<tr>
			                        		<th>판매가능수량</th>
			                        		<td><fmt:formatNumber value="${productChangeInfo.PM_PRD_MST_SEL_CNT }" groupingUsed="true" />개</td>
			                        	</tr>
			                        	<tr>
			                        		<th>PC즉시쿠폰 정율/금액 여부</th>
			                        		<td><c:out value="${productChangeInfo.PM_PRD_MST_PC_CPN_UNT_NM }" /></td>
			                        	</tr>
			                        	<tr>
			                        		<th>PC즉시쿠폰 정율/금액</th>
			                        		<td><fmt:formatNumber value="${productChangeInfo.PM_PRD_MST_PC_CPN_PRC }" groupingUsed="true" /></td>
			                        	</tr>
			                        	<tr>
			                        		<th>Mobile즉시쿠폰 정율/금액 여부</th>
			                        		<td><c:out value="${productChangeInfo.PM_PRD_MST_MB_CPN_UNT_NM }" /></td>
			                        	</tr>
			                        	<tr>
			                        		<th>Mobile즉시쿠폰 정율/금액</th>
			                        		<td><fmt:formatNumber value="${productChangeInfo.PM_PRD_MST_MB_CPN_PRC }" groupingUsed="true" /></td>
			                        	</tr>
			                        </tbody>
			                    </table>
			                </div><!-- // col list -->
			             </div>
	                
		                <div style="float: right; width: 48%;">
		                	<div class="title-box">
				                <h4 class="title">수정 요청 후 내용</h4>
				            </div>    
			                <div class="table-a"><!-- col list -->
			                    <table class="core">
			                        <colgroup>
			                            <col style="width: 30%;" />
			                            <col style="width: 30%;" />
			                        </colgroup>
			                        <tbody>
			                        	<tr>
			                        		<th>상품가격</th>
			                        		<td><em class="strong"><fmt:formatNumber value="${productChangeInfo.VAV_PRD_MST_PRC }" groupingUsed="true" />원</em></td>
			                        	</tr>
			                        	<tr>
			                        		<th>검색가</th>
			                        		<td><em class="strong"><fmt:formatNumber value="${productChangeInfo.VAV_PRD_MST_PRC }" groupingUsed="true" />원</em></td>
			                        	</tr>
			                        	<tr>
			                        		<th>판매상태</th>
			                        		<td><em class="strong"><c:out value="${productChangeInfo.VAV_PRD_MST_SEL_STATE_NM }" /></em></td>
			                        	</tr>
			                        	<tr>
			                        		<th>판매가능수량</th>
			                        		<td><em class="strong"><fmt:formatNumber value="${productChangeInfo.VAV_PRD_MST_SEL_CNT }" groupingUsed="true" />개</em></td>
			                        	</tr>
			                        	<tr>
			                        		<th>PC즉시쿠폰 정율/금액 여부</th>
			                        		<td><em class="strong"><c:out value="${productChangeInfo.VAV_PRD_MST_PC_CPN_UNT_NM }" /></em></td>
			                        	</tr>
			                        	<tr>
			                        		<th>PC즉시쿠폰 정율/금액</th>
			                        		<td><em class="strong"><fmt:formatNumber value="${productChangeInfo.VAV_PRD_MST_PC_CPN_PRC }" groupingUsed="true" /></em></td>
			                        	</tr>
			                        	<tr>
			                        		<th>Mobile즉시쿠폰 정율/금액 여부</th>
			                        		<td><em class="strong"><c:out value="${productChangeInfo.VAV_PRD_MST_MB_CPN_UNT_NM }" /></em></td>
			                        	</tr>
			                        	<tr>
			                        		<th>Mobile즉시쿠폰 정율/금액</th>
			                        		<td><em class="strong"><fmt:formatNumber value="${productChangeInfo.VAV_PRD_MST_MB_CPN_PRC }" groupingUsed="true" /></em></td>
			                        	</tr>
			                        </tbody>
			                    </table>
			                </div><!-- // col list -->
			            </div>    
	                </div>
                </form>
                

			</div><!-- // contents-inner -->

		</section><!-- // contents -->
              
	</div><!-- // body -->

    <footer><!-- footer -->
        <%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
    </footer><!-- // footer -->

</div><!-- // container -->


<script src="<c:out value="${serverDomain}" />/am/js/plugins.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
<script type="text/javascript">
$(document).ready(function () {
	// 목록 이벤트
    $(document).on("click", "#goList", function () 
    {
    	var $frm = $("#frm"); 
    	$frm.attr({"action":"<c:out value="${serverDomain}" />/am/product/vendorProductChangeList.do", "target":"_self", "method":"post"}).submit();
    }); 
	
 	// 상품 삭제
    $(document).on("click", "#productDelete", function () {
    	if (confirm( "승인거절 하시겠습니까?")) 
        {
    		var $frm = $("#frm"); 
	       	$frm.attr({"action": "<c:out value="${serverDomain}" />/am/product/vendorProductChangeDelete.do", "target":"_self", "method":"post"}).submit(); 
        }
    });
 	
 	// 상품 삭제
    $(document).on("click", "#productChange", function () {
    	if (confirm( "승인 하시겠습니까?")) 
        {
    		var $frm = $("#frm"); 
	       	$frm.attr({"action": "<c:out value="${serverDomain}" />/am/product/vendorProductChange.do", "target":"_self", "method":"post"}).submit(); 
        }
    });
    
});

</script>
</body>
</html>