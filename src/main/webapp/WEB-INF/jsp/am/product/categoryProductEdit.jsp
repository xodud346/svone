<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<form id="frm" name="frm" method="post" action="">
<input type="hidden" id="PRD_CTG_IDX"    name="PRD_CTG_IDX"    value="${categoryProductView.PRD_CTG_IDX}" />
<input type="hidden" id="PRD_CTG_UP_IDX" name="PRD_CTG_UP_IDX" value="${categoryProductView.PRD_CTG_UP_IDX}" />
<input type="hidden" id="PRD_CTG_TOP_IDX" name="PRD_CTG_TOP_IDX" value="${categoryProductView.PRD_CTG_TOP_IDX}" />
<input type="hidden" id="PRD_CTG_LEVEL"  name="PRD_CTG_LEVEL"  value="${categoryProductView.PRD_CTG_LEVEL}" />
<input type="hidden" id="PRD_CTG_SORT"   name="PRD_CTG_SORT"   value="${categoryProductView.PRD_CTG_SORT}" />
<input type="hidden" id="CHILD_CODENAME"   name="CHILD_CODENAME"   value="" />
<input type="hidden" id="DSP_SPC_IDX" name="DSP_SPC_IDX" value ="" />
<input type="hidden" id="searchPrdCtgDepth3" name="searchPrdCtgDepth3" value ="" />
<input type="hidden" id="PRD_SPC_ENV"   name="PRD_SPC_ENV"   value="P" />
<c:choose>    
<c:when test="${categoryProductView.PRD_CTG_IDX > 0 }" >
<input type="hidden" id="PRD_CTG_ENV"   name="PRD_CTG_ENV"   value="${categoryProductView.PRD_CTG_ENV}" />
</c:when>
<c:otherwise>
<input type="hidden" id="PRD_CTG_ENV"   name="PRD_CTG_ENV"   value="${commandMap.PRD_CTG_ENV}" />
</c:otherwise>
</c:choose>

<h3 class="title"><span>카테고리 상세</span></h3>

<table cellspacing="0" class="table-row table-a"><!-- table -->
	<colgroup>
	    <col style="width: 20%;" />
	    <col style="width: auto;" />
	</colgroup>
	<tbody>
		<c:choose>    
			<c:when test="${categoryProductView.PRD_CTG_IDX > 0 }" >
			    <tr><!-- row -->
			        <th><span>카테고리ID</span></th>
			        <td>
			            <strong><c:out value="${categoryProductView.PRD_CTG_IDX}" /></strong>
			        </td>
			    </tr>
			    <tr><!-- row -->
			        <th><span>현재 위치</span></th>
			        <td>
			            <strong>${categoryProductView.PRD_CTG_LVL_NM}</strong>
			        </td>
			    </tr>
			    <tr><!-- row -->
		            <th><span>카테고리명</span></th>
		            <td>
		                <input type="text" id="PRD_CTG_NM" name="PRD_CTG_NM" class="text" value="${categoryProductView.PRD_CTG_NM}" />
		            </td>
		        </tr>
			    <tr><!-- row -->
		            <th><span>카테고리 사용여부</span></th>
		            <td>
		                <label><input type="radio" class="radio" id="PRD_CTG_USE_YN1" name="PRD_CTG_USE_YN" value="Y" <ui:select v="${categoryProductView.PRD_CTG_USE_YN }" t="Y" g="checked"/>/>사용</label>
		                <label><input type="radio" class="radio" id="PRD_CTG_USE_YN2" name="PRD_CTG_USE_YN" value="N" <ui:select v="${categoryProductView.PRD_CTG_USE_YN }" t="N" g="checked"/>/>미사용</label>
		            </td>
		        </tr>
			    <tr><!-- row -->
		            <th><span>프론트 노출여부</span></th>
		            <td>
		                <label><input type="radio" class="radio" id="PRD_CTG_DSP_YN1" name="PRD_CTG_DSP_YN" value="Y" <ui:select v="${categoryProductView.PRD_CTG_DSP_YN }" t="Y" g="checked"/>/>사용</label>
		                <label><input type="radio" class="radio" id="PRD_CTG_DSP_YN2" name="PRD_CTG_DSP_YN" value="N" <ui:select v="${categoryProductView.PRD_CTG_DSP_YN }" t="N" g="checked"/>/>미사용</label>
		            </td>
		        </tr>
			    <tr><!-- row -->
		            <th><span>하위 카테고리 수</span></th>
		            <td>
		                <strong><c:out value="${categoryProductView.CHILD_CNT}" /></strong>
		            </td>
		        </tr>
			</c:when>
			<c:otherwise>
				<tr><!-- row -->
		            <th><span>하위 카테고리 수</span></th>
		            <td>
		                <strong><c:out value="${fn:length(list)}" /></strong>
		            </td>
		        </tr>
			</c:otherwise>
		</c:choose>
		<tr><!-- row -->
            <th><span>하위 카테고리 정렬</span></th>
            <td id="tdSortHeight">
            	<small class="desc">* 하위카테고리를 순서를 변경하실 수 있습니다.</small>
            	<br/>
                <c:choose>
                    <c:when test="${not empty list}">
                        <ul style="width:300px;">
                        <c:forEach var="item" items="${list }" varStatus="status">
                            <li style="padding: 5px 10px;margin-top:2px;">
                                <a href="javascript:;" class="row-sort" data-sort_type="up">△</a>
                                <a href="javascript:;" class="row-sort" data-sort_type="down">▽</a>
                                ${item.PRD_CTG_NM }<c:if test="${item.PRD_CTG_USE_YN ne 'Y' }">[미사용]</c:if>
                                <input type="hidden" name="PRD_CTG_IDXs" value="${item.PRD_CTG_IDX }"/>
                            </li>
                        </c:forEach>
                        </ul>
                    </c:when>
                    <c:otherwise>
                           등록 된 하위 카테고리가 없습니다.
                    </c:otherwise>
                </c:choose>
            </td>
        </tr>		
    </tbody>
</table><!-- // table -->

<div class="section-button"><!-- section-button -->
    <div class="wrap text-right">
        <a href="javascript:goDel();" class="button"><span>삭제</span></a>
        <a href="javascript:goProc();" class="button primary"><span>저장</span></a>
    </div>
</div><!-- // section-button -->
            
<c:if test="${not empty categoryProductView.PRD_CTG_IDX && categoryProductView.PRD_CTG_LEVEL == 3 }">
	<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
	    <a href="javascript:specRegistPopup();" class="button small"><span>스펙추가</span></a>
	</div><!-- // 검색 하단 버튼 -->
	
	<table cellspacing="0" class="table-row table-a"><!-- table -->
		<colgroup>
		    <col style="width: 90%;" />
		    <col style="width: auto;" />
		</colgroup>
		<thead>
	        <tr>
	            <th>스펙 카테고리</th>
	            <th>스펙삭제</th>
	        </tr>
	    </thead>
		<tbody>
			<c:choose>
			    <c:when test="${not empty specList}">
			    	<c:forEach var="specList" items="${specList }" varStatus="status">
			         <tr>
			             <td>
			                 <c:out value="${specList.PRD_CTG_LVL_NM}" />
			             </td>
			             <td><a href="javascript:goSpecDel(<c:out value="${specList.DSP_SPC_IDX}" />);" class="button button-c"><span>삭제</span></a></td>
			         </tr>
			        </c:forEach>
			    </c:when>
			    <c:otherwise>
			           <tr><td colspan="2" align="center">추가된 스펙이 없습니다.</td></tr>
			    </c:otherwise>
			</c:choose>		
	    </tbody>
	</table><!-- // table -->
</c:if>
</form>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
<script type="text/javascript">
$(function() {
	
	// 전시카테고리추가 시 사용
	var level = "<c:out value="${categoryProductView.PRD_CTG_LEVEL}" />";
	
	// 전시카테고리 순서 변경 이벤트
    $(document).off("click", ".row-sort");
    $(document).on("click", ".row-sort", function () {
         
        var $this = $(this);  
        var $li = $this.parent();
        
        var type = $this.data("sort_type");
        if(type == "up")
        {
            var $prevLi = $li.prev(); 
            if($prevLi.length > 0)
            {  
                var $liClone = $li.clone();  // 우선 this TR 복사   
                $prevLi.before($liClone);    // prev 상단에 this li를 생성  
                $li.remove();                // 해당 this 삭제
            }  
            else
            { 
                alert("최 상위 순서 입니다.");
                return;
            } 
        }
        else
        {
            var $nextLi = $li.next();
            if($nextLi.length > 0)
            {  
                var $liClone = $li.clone();  // 우선 this TR 복사   
                $nextLi.after($liClone);     // next 하단에 this li를 생성  
                $li.remove();                // 해당 this 삭제
            } 
            else
            {
                alert("최 하위 순서 입니다.");
                return;
            }
        }  
    });
    
    //상품카테고리 순서 저장 이벤트
    goProc = function(){
    	var useYn = $(":input:radio[name=PRD_CTG_USE_YN]:checked").val();
    	var state = "Y";
    	if(useYn=="Y"){
    		$.ajax({
                type:"post",
                url : "<c:out value="${serverDomain}" />/am/product/categoryParentUseProductAjax.do",
                data : {"PRD_CTG_IDX": $("#PRD_CTG_IDX").val() },
                dataType : "json",
                async : false,
                success : function(data){
                   if(data.PRD_CTG_USE_YN=="N"){
                	   alert("상위 카테고리의 사용여부가 미사용으로 설정되어있습니다.");
                	   state = "N";
                   }
                },
                error : function(err){
                    alert("오류가 발생하였습니다.\n[" + err.status + "]");
                }
            });
    	}
		if(state=="N"){
			return;
		}
		if (confirm( "저장 하시겠습니까?")) {
        	$("#frm").attr({"action":"<c:out value="${serverDomain}"/>/am/product/categoryProductModify.do", "target":"_self", "method":"post"}).submit();
        }	
    };
    
   	//상품카테고리 삭제 처리
    goDel = function(){
        if (confirm( "선택한 내용을 삭제 하시겠습니까?"))
 		{
         	$("#frm").attr({"action":"<c:out value="${serverDomain}"/>/am/product/categoryProductDelete.do", "target":"_self", "method":"post"}).submit();
        }	
    };
     
  	// 스팩추가 팝업창 호출
  	specRegistPopup = function ()
  	{ 		
  		popup('',"800","300","no","_SpecCategoryPopup");
  		$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/product/searchSpecCategoryPopup.do", "target":"popup_SpecCategoryPopup", "method":"post"}).submit();
    };
     
    // 스펙추가 팝업창 > 스펙 추가 이벤트
    fnResultSpecCategory = function(params){
    	
    	if(params.SPC_IDX == ""){
    	    alert("스펙을 선택 해주세요.");
   		    return;
    	}else{
    	 	$("#searchPrdCtgDepth3").val(params.SPC_IDX);
        }
    	goSpecProc();
    };
     
    //스펙 저장 처리
    goSpecProc = function(){
 		if (confirm( "추가 하시겠습니까?"))
 		{
 			$("#PRD_CTG_LEVEL").val(level);
         	//현재코드 수정시 
         	$("#frm").attr({"action":"<c:out value="${serverDomain}"/>/am/product/categoryProductSpecRegist.do", "target":"_self", "method":"post"}).submit();
        }	
    };
     
    //스펙 삭제 처리
    goSpecDel = function(spc_Idx){
    	if(spc_Idx != "" && spc_Idx > 0){
    		$("#DSP_SPC_IDX").val(spc_Idx);
    		if (confirm( "선택한 스펙을 삭제 하시겠습니까?"))
     		{
    			$("#PRD_CTG_LEVEL").val(level);
    			//현재코드 수정시 
             	$("#frm").attr({"action":"<c:out value="${serverDomain}"/>/am/product/categoryProductSpecDelete.do", "target":"_self", "method":"post"}).submit();
            }		
    	}
    };
    
});
</script>