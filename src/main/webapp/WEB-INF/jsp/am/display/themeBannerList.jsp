<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="contents-inner"><!-- contents-inner -->

	<h3 class="title"><span>${bnrCatList[1].TITLE } - ${bnrCatList[0].TITLE }</span></h3>

	<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
		<div class="text-left">
			<c:if test="${not empty bnrCatList[0].CMN_COM_ETC1}"> 최대 ${bnrCatList[0].CMN_COM_ETC1 }개의 배너가 롤링하며 나타남 /</c:if>
			배너사이즈 :  ${bnrCatList[0].CMN_COM_ETC3 }
			<c:if test="${not empty bnrCatList[0].CMN_COM_ETC2  }" >		
				<br />배너 롤링시간 : <input type="text" name="ROLLING_TERM_SEC" id="ROLLING_TERM_SEC" class="text right" style="width:15px" maxlength="2" value="${bnrCatList[0].CMN_COM_ETC2 }" />초
			</c:if>
		</div>
		<div class="text-right">
			<a href="javascript:goForm();" class="button small primary"><span>등록</span></a>
		</div>
	</div><!-- // 목록 상단 버튼 -->
		<table class="table-col table-b">
			<colgroup>
				<col style="width: 7%;" />
				<col style="width: auto;" />
				<col style="width: 20%;" />
				<col style="width: 10%;" />
				<col style="width: 10%;" />
				<col style="width: 10%;" />
				<col style="width: 10%;" />
				<col style="width: 10%;" />
			</colgroup>
			<thead>
				<tr>
					<th>NO</th>
					<th>타이틀</th>
					<th>전시기간</th>
					<th>포인트</th>
					<th>상품권</th>
					<th>등록일</th>
					<th>진행여부</th>
					<th>보기</th>
				</tr>
			</thead>
			<tbody class="sort-target">
			<c:choose>
			    <c:when test="${not empty list}">
			    	<c:forEach var="row" items="${list }" varStatus="i">
					<tr>
					    <td><c:out value="${row.RNUM }" /></td>
					    <td>
						    <a href="javascript:goView('<c:out value="${row.BNR_MST_IDX }" />');">
						        <c:out value="${row.BNR_MST_TITLE }" />
						    </a>
					    </td>
					    <td>
						    <ui:formatDate value="${row.BNR_MST_ST_DT }" pattern="yyyy.MM.dd"/> <c:out value="${row.BNR_MST_ST_HH }" />:<c:out value="${row.BNR_MST_ST_MM }" /> ~ <br/>
						    <ui:formatDate value="${row.BNR_MST_ED_DT }" pattern="yyyy.MM.dd"/> <c:out value="${row.BNR_MST_ED_HH }" />:<c:out value="${row.BNR_MST_ED_MM }" />
					    </td>
					    <td><fmt:formatNumber value="${row.BNR_MST_MIL_ADD }" groupingUsed="true" /></td>
					    <td><fmt:formatNumber value="${row.BNR_MST_GFT }" groupingUsed="true" /></td>
					    <td><ui:formatDate value="${row.BNR_MST_REG_DT }" pattern="yyyy.MM.dd"/></td>
					    <td><c:out value="${row.BNR_PROGRESS }" /></td>
					    <td>
        					<a href="<c:out value="${img_domain}${row.CMM_FLE_ATT_PATH}${row.CMM_FLE_SYS_NM }"/>" class="button small" data-width="600" data-height="700" data-scroll="true" target="_blank" title="새 창 으로 열립니다."><span>배너보기</span></a>
					    </td>
					</tr>
			    	</c:forEach>
			    </c:when>
			    <c:otherwise>
					<tr>
						<td colspan="8">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
					</tr>
			    </c:otherwise>
			</c:choose>
			</tbody>
		</table>
	
	<form id="frm" name="frm">
	    <input type="hidden" name="BNR_MST_IDX" value="" />
		<input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/> 
		<input type="hidden" name="searchBnrMstTitle" value="<c:out value="${commandMap.searchBnrMstTitle }"/>"/>
		<input type="hidden" name="searchType" value="<c:out value="${commandMap.searchType }"/>"/>
		<input type="hidden" name="searchStartDate" value="<c:out value="${commandMap.searchStartDate }"/>"/>
		<input type="hidden" name="searchEndDate" value="<c:out value="${commandMap.searchEndDate }"/>"/>
		<input type="hidden" name="searchBnrMstUseYn" value="<c:out value="${commandMap.searchBnrMstUseYn }"/>"/>
        <input type="hidden" id="CMN_COM_IDX" name="CMN_COM_IDX" value="<c:out value="${commandMap.CMN_COM_IDX }"/>" />
        <input type="hidden" id="PRD_CTG_ENV" name="PRD_CTG_ENV" value="<c:out value="${commandMap.PRD_CTG_ENV }"/>" />
        
        <input type="hidden" id="searchGubun" name="searchGubun" value="<c:out value="${commandMap.searchGubun }"/>" />
        
    </form>
</div><!-- // contents-inner -->
<script type="text/javascript">
$(document).ready(function () {
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
        var url = "<c:out value="${serverDomain}" />/am/display/themeBannerList.do";
        $searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
        var param = $searchForm.serialize();
        callPageLoad(url, param);
    };


    // 전시배너관리 등록페이지 이동
    goForm = function (){
        var $frm = $("#frm");
        var url = "<c:out value="${serverDomain}"/>/am/display/themeBannerForm.do";
        var param = $frm.serialize();
        callPageLoad(url, param);
    };
    
    // 전시배너관리 상세페이지 이동
    goView = function (bnrMstIdx)
    {
        var $frm = $("#frm");
        var url = "<c:out value="${serverDomain}"/>/am/display/themeBannerEdit.do"; 
        $frm.find("input[name='BNR_MST_IDX']").val(bnrMstIdx);
        var param = $frm.serialize();
        callPageLoad(url, param);
    };
    
    // 페이지 로드
    callPageLoad = function (url, param) 
    {
        $("#main_con").empty();
        $("#main_con").load(url, param, function () {
            treePageSetting();
        });
    };
    
 	
});

</script>