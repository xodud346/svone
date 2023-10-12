<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="contents-inner"><!-- contents-inner -->

	<h3 class="title"><span>${bnrCatList[1].TITLE } - ${bnrCatList[0].TITLE }</span></h3>

	<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
		<div class="text-left">
			배너사이즈 : ${bnrCatList[0].CMN_COM_ETC3 }
		</div>
		<div class="text-right">
			<a href="#none" id="modifySort" class="button small primary"><span>순서저장</span></a>
			<a href="javascript:goForm();" class="button small primary"><span>등록</span></a>
		</div>
	</div><!-- // 목록 상단 버튼 -->
		<table class="table-col table-b">
			<colgroup>
				<col style="width: 7%;" />
				<col style="width: 25%;" />
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
					<th>제목</th>
					<th>전시기간</th>
					<th>잔여기간</th>
					<th>등록일</th>
					<th>진행여부</th>
					<th>보기</th>
					<th>전시순서</th>
				</tr>
			</thead>
			<tbody class="sort-target">
			<c:choose>
			    <c:when test="${not empty list}">
			    	<c:forEach var="row" items="${list }" varStatus="i">
					<tr>
					    <td class="col-sort" data-bnr_dtl_idx="<c:out value="${row.BNR_MST_IDX }"/> ">${row.BNR_MST_SRT }</td>
					    <td>
						    <a href="javascript:goView('<c:out value="${row.BNR_MST_IDX }" />');">
						        <c:out value="${row.BNR_MST_TITLE }" />
						    </a>
					    </td>
					    <td>
						    <ui:formatDate value="${row.BNR_MST_ST_DT }" pattern="yyyy.MM.dd"/> ~ 
						    <ui:formatDate value="${row.BNR_MST_ED_DT }" pattern="yyyy.MM.dd"/>
					    </td>
					    <td><c:out value="${row.BNR_MST_MOD_DT < 1 ? 0 : row.BNR_MST_MOD_DT }" /></td>
					    <td><ui:formatDate value="${row.BNR_MST_REG_DT }" pattern="yyyy.MM.dd"/></td>
					    <td><c:out value="${row.BNR_MST_STATE }" /></td>
					    <td>
        					<a href="javascript:goShowImg(<c:out value="${row.BNR_MST_IDX }" />);" class="button button-b"><span>배너보기</span></a>
					    </td>
					    <td>
					    	<c:if test="${row.BNR_DTL_ORDER ne 1 }">	
					    	<a href="#none" class="row-sort" data-sort_type="up">△ </a>
					    	</c:if><c:if test="${row.BNR_DTL_ORDER ne fn:length(list) }">	
                            <a href="#none" class="row-sort" data-sort_type="down"> ▽</a>
                            </c:if>
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
	    <input type="text" name="BNR_MST_IDX" value="" />
		<input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/> 
		<input type="hidden" name="searchBnrMstTitle" value="<c:out value="${commandMap.searchBnrMstTitle }"/>"/>
		<input type="hidden" name="searchType" value="<c:out value="${commandMap.searchType }"/>"/>
		<input type="hidden" name="searchStartDate" value="<c:out value="${commandMap.searchStartDate }"/>"/>
		<input type="hidden" name="searchEndDate" value="<c:out value="${commandMap.searchEndDate }"/>"/>
		<input type="hidden" name="searchBnrMstUseYn" value="<c:out value="${commandMap.searchBnrMstUseYn }"/>"/>
        <input type="text" id="CMN_COM_IDX" name="CMN_COM_IDX" value="<c:out value="${commandMap.CMN_COM_IDX }"/>" />
        <input type="text" id="PRD_CTG_ENV" name="PRD_CTG_ENV" value="<c:out value="${commandMap.PRD_CTG_ENV }"/>" />
        <input type="hidden" id="BNR_MST_GBN" name="BNR_MST_GBN" value="<c:out value="${bnrCatList[0].CMN_COM_ETC1 }"/>" />
       
        <input type="text" id="searchGubun" name="searchGubun" value="<c:out value="${commandMap.searchGubun }"/>" />
        
    </form>
</div><!-- // contents-inner -->
<script type="text/javascript">
$(document).ready(function () {
    // 검색 엔터 이벤트 
    /* $('#searchForm').find("input").not(".datepicker").keydown(function (e) 
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
        var url = "<c:out value="${serverDomain}" />/am/display/bannerDisplayList.do";
        $searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
        $("#searchBnrMstTitle").val(Base64.encode($("#searchBnrMstTitle").val()));
        var param = $searchForm.serialize();
        callPageLoad(url, param);
    }; */

    // 페이지 이동
    goPage = function (cPage){
        var $frm = $("#frm");
        var url = "<c:out value="${serverDomain}"/>/am/display/bannerDisplayList.do";
        $frm.find("input[name='searchBnrMstTitle']").val(($frm.find("input[name='searchBnrMstTitle']").val()));
        $frm.find("input[name='cPage']").val(cPage);
        callPageLoad(url, param);
    };
    
    // 전시배너관리 등록페이지 이동
    goForm = function (){
        var $frm = $("#frm");
        var url = "<c:out value="${serverDomain}"/>/am/display/bannerDisplayForm.do";
        $frm.find("input[name='searchBnrMstTitle']").val(($frm.find("input[name='searchBnrMstTitle']").val()));
        var param = $frm.serialize();
        callPageLoad(url, param);
    };
    
    // 전시배너관리 상세페이지 이동
    goView = function (bnrMstIdx)
    {
        var $frm = $("#frm");
        var url = "<c:out value="${serverDomain}"/>/am/display/bannerDisplayEdit.do"; 
        $frm.find("input[name='BNR_MST_IDX']").val(bnrMstIdx);
        $frm.find("input[name='searchBnrMstTitle']").val(($frm.find("input[name='searchBnrMstTitle']").val()));
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
    
    
 	// 배너 순서 변경 이벤트
 	$(document).off("click", ".row-sort");
    $(document).on("click", ".row-sort", function () {
        
        var $this = $(this);
        var $tr = $this.parent().parent();
        var type = $this.data("sort_type");
        
        if(type == "up")
        {
            var $prevTr = $tr.prev(); 
            if($prevTr.length > 0)
            {                
                var $trClone = $tr.clone();
                $prevTr.before($trClone);
                $tr.remove();  
                
                // 최상위 또는 최하위가 포함된 경우 이동마크 변경
                var $newTr = $prevTr.prev();
                if($newTr.prev().length == 0 || $prevTr.next().length==0 ){
                	var newTrHtml = $newTr.find('[data-sort_type="up"]').parent().html();
                	var nextTrHtml = $prevTr.find('[data-sort_type="down"]').parent().html();
                	
                	$prevTr.find('[data-sort_type="down"]').parent().html(newTrHtml);
                	$newTr.find('[data-sort_type="up"]').parent().html(nextTrHtml);
                }
                
            }
            else
            {
                alert("최 상위 순서 입니다.");
                return;
            } 
        }
        else
        {
            var $nextTr = $tr.next();
            if($nextTr.length > 0)
            {
            	var $trClone = $tr.clone();
                $tr.next().after($trClone);
                $tr.remove();
                
             	// 최상위 또는 최하위가 포함된 경우 이동마크 변경
                var $newTr = $nextTr.next();
                if($newTr.next().length == 0 || $nextTr.prev().length==0 ){
                	var newTrHtml = $newTr.find('[data-sort_type="down"]').parent().html();
                	var nextTrHtml = $nextTr.find('[data-sort_type="up"]').parent().html();
                	
                	$nextTr.find('[data-sort_type="up"]').parent().html(newTrHtml);
                	$newTr.find('[data-sort_type="down"]').parent().html(nextTrHtml);
                }                
            }
            else
            {
                alert("최 하위 순서 입니다.");
                return;
            }
        }
        
    });
 	
 	// 배너 순서 저장 버튼 클릭 이벤트
 	$(document).off("click", "#modifySort");
    $(document).on("click", "#modifySort", function () {
        if (confirm( "저장 하시겠습니까?")) {
	        var idxArray = new Array();
	        var sortArray = new Array();
	        
	        if( $(".sort-target").find("tr").length > 1 ){
		        $(".sort-target").find("tr").each(function (i) {
		            var $tr = $(this).find(".col-sort");
		            idxArray.push($tr.data("bnr_dtl_idx"));
		            sortArray.push($tr.text());
		        });
	        }
	        

	        $.ajax ({
	           async : false,
	           type : "POST",
	           url : "<c:out value="${serverDomain}" />/am/display/bannerDisplaySortArrayAjax.do", 
	           data : {"BNR_MST_IDX":idxArray, 
	        	   		"BNR_MST_SRT":sortArray, 
	        	   		"CMN_COM_IDX":"${commandMap.CMN_COM_IDX }" },
	           success : function (data) {
	        	   if( $(".sort-target").find("tr").length > 1 ){
		        	   $(".sort-target").find("tr").each(function (i) {
		                   $(this).find(".col-sort").text(i+1);	
		               });
	        	   }
	               alert(data.message); 	
	           },
	           error : function () {
	               alert("오류가 발생하였습니다.\n다시 시도 해 주십시오.");   
	           }
	        });
        }
    });
    
 	// 전시배너관리 이미지 미리보기
    goShowImg = function (bnrMstIdx)
    {
        var $frm = $("#frm");
        $frm.find("input[name='BNR_MST_IDX']").val(bnrMstIdx);
        popup('',"1925","600","no","_BannerShowImagePopup");
    	$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/display/bannerDisplayImagePopup.do", "target":"popup_BannerShowImagePopup", "method":"post"}).submit();
    };

});

</script>