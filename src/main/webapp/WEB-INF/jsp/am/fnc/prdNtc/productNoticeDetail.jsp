<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<form id="frmList" name="frmList" method="post" >
	<input type="hidden" id="notiId" name="notiId" value="" />
</form>
<form id="frm" name="frm" method="post" >
	<input type="hidden" id="writeMode"    name="writeMode"    value="${commandMap.writeMode}" />
	<input type="hidden" id="notiId" name="notiId" value="${commandMap.notiId}" />
	
	<div class="section-title" style="margin: 0 0 20px;"><!-- section-title -->
	    <h3 class="title"><span>품목정보 (<i class="require"><em>필수입력</em></i> 필수항목)</span></h3>
	</div><!-- // section-title -->
	
	<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
        <div class="text-right">
        	<a href="javascript:deleteRow();" id="delete" class="button small"><span>삭제</span></a>
            <a href="javascript:addRow();" id="modifySort" class="button small"><span>추가</span></a>
            <a href="javascript:goProc();" class="button small primary"><span>저장</span></a>
        </div>
    </div>

	<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;" id="notiTb"><!-- table -->
	    <colgroup>
	        <col style="width: 15%;" />
	        <col style="width: 5%;" />
	        <col style="width: auto;" />
	    </colgroup>
	    <tbody>
		    <tr>
		    	<th colspan="2"><span>품목명 <i class="require"><em>필수입력</em></i></span></th>
		    	<td><input type="text" name="notiNm" id="notiNm" class="text xlarge" value="<c:out value='${detail.notiNm }' />" maxlength="100"/></td>
		    </tr>
		    <c:if test="${commandMap.writeMode eq 'M' }">
			    <tr>
			    	<th colspan="2"><span>품목 ID</span></th>
			    	<td>${detail.notiId}</td>
			    </tr>
		    </c:if>
		    <tr>
		    	<th colspan="2"><span>품목 사용여부</span></th>
		    	<td>
		    		<input type="radio" class="radio" name="useYn" id="PRD_NFI_USE_YN1" value="Y" <c:if test="${detail.useYn eq 'Y' || commandMap.writeMode eq 'W' }">checked=true</c:if> />
		       	<label for="PRD_NFI_USE_YN1">사용</label>
		       	<input type="radio" class="radio" name="useYn" id="PRD_NFI_USE_YN2" value="N" <c:if test="${detail.useYn eq 'N' }">checked=true</c:if> />
		       	<label for="PRD_NFI_USE_YN2">미사용</label><br />
		       	<span>※ 미사용으로 체크하면 상품관리에서 표시되지 않습니다.</span>
		    	</td>
		    </tr>
		    <c:choose>
		    	<c:when test="${commandMap.writeMode eq 'M' }">
		    		<c:set var="num" value="1" />
		    		<c:choose>
						<c:when test="${not empty rowSub}">
            					<c:forEach var="rowSub" items="${rowSub}" varStatus="status">
								<tr class="rowCnt">
									<th><span>고시항목<c:out value="${num}" /></span></th>
									<th><input type="checkbox" name="checkBox" class="checkbox" data-id="${rowSub.notiInfoId }"></th>
						          	<td>
						          		<input type="text" name="notiTtlArr" id="notiTtl<c:out value="${num}" />" class="text" maxlength="100" value="<c:out value='${rowSub.notiTtl }' />" style="width:30%;" />
						          		<input type="hidden" name="notiInfoIdArr" id="notiInfoId<c:out value="${num}" />" value="<c:out value='${rowSub.notiInfoId }' />" />
						          		<input type="text" name="notiCtsArr" id="notiCts<c:out value="${i}" />" value="<c:out value='${rowSub.notiCts }' />" class="text xlarge" maxlength="100" style="width:69%;" />
						          		<input type="hidden" name="statusArr"  value="U" />
						          	</td>
					         	</tr>
								<c:set var="num" value="${num + 1 }" />
							</c:forEach>
						</c:when>
					</c:choose>
				</c:when>
				<c:otherwise>
					<c:forEach var="i" begin="1" end="1" step="1">
						<tr class="rowCnt">
							<th><span>고시항목<c:out value="${i}" /></span></th>
							<th><input type="checkbox" name="checkBox" class="checkbox"></th>
							<td>
				        		<input type="text" name="notiTtlArr" id="notiTtl_<c:out value="${i}" />" class="text large" maxlength="100" style="width:30%;"  />
				        		<input type="hidden" name="notiInfoIdArr" id="notiInfoId_<c:out value="${i}" />" />
				        		<span id="PRD_NFI_AUTO_TXT_<c:out value="${i}" />"></span>
				        		<input type="text" name="notiCtsArr" id="notiCts_<c:out value="${i}" />" class="text" maxlength="100" style="width:69%"  />
				        		<input type="hidden" name="statusArr"  value="I" />
							</td>
						</tr>
					</c:forEach>
				</c:otherwise>
			</c:choose>
		</tbody>
	</table><!-- // table -->
</form>

<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>
<script>
$(function(){
	// 폼체크
    $("#frm").validate({
        rules: {
        	notiNm:{required:true} // 품목명
        }
    });
	
 	// 등록 버튼 클릭 이벤트
    goProc = function () {
		var $frm = $("#frm"); 
        var writeMode = $("#writeMode").val();
        var isValid = false;
        var msg = "";
        
        if($frm.valid()){
        	
        	var cnt = $(".rowCnt").length;
       	    
        	if(cnt < 1){
        		msg = "고시항목을 입력해주세요.";
        		isValid = true;
        	}
        	
        	$("input[name=notiTtlArr]").each(function(index){
        		if($(this).val() == ""){
        			msg = "고시항목"+((index*1)+1)+"의 타이틀은 필수입니다.";
        			isValid = true;
        		}
        	});
        	
        	if(isValid){
        		alert(msg);
        		return false;
        	}
        	
			var $frm = $("#frm");
    		if (confirm( "저장 하시겠습니까?")) {
    			$.ajax({
                    type:"post",
                    url : "/am/fnc/prdNtc/update.do",
                    data : $frm.serialize(),
                    dataType : "json",
                    success : function(data){
                    	if(data.result == 'success'){
                    		alert("저장되었습니다.");
                    		$("#frmList").find("#notiId").val(data.commandMap.notiId);
                    		$('#frmList').attr({"action":"<c:out value="${serverDomain}" />/am/fnc/prdNtc/productNoticeList.do", "target":"_self", "method":"post"}).submit();
                    	}else{
                    		alert("오류가 발생하였습니다.");
                    	}
                    },
                    error : function(err){
                        alert("오류가 발생하였습니다.\n[" + err.status + "]");
                    }
                });
        	}
        }
    };
    
    
    deleteRow = function(){
    	var checkBox = $("input:checkbox[name=checkBox]:checked");
    	var checkCnt = checkBox.length;
    	if(checkCnt > 0){
    		checkBox.each(function(){
    			var notiInfoId =  $(this).data("id");
    			if(notiInfoId != undefined){
    				console.log("!!!" + $(this).data("id"));   
    				var delHtml = '<input type="hidden" name="deleteIdArr" value="'+$(this).data("id")+'" />';
    				$("#frm").append(delHtml);
    			}
    			
    			$(this).parents("tr").remove();
    			
    		})
    	}else{
    		alert("삭제할 고시항목을 선택해 주세요.")
    	}
    };
    
    addRow = function(){
    	
    	var cnt = $(".rowCnt").length+1;
    	
    	var html = "";
			html+=	    '<tr class="rowCnt">'
			html+=	        '<th><span>고시항목'+cnt+' </span></th>'
			html+=	        '<th><input type="checkbox" name="checkBox" class="checkbox"></th>'
			html+=	        '<td>'
			html+=	        	'<input type="text" name="notiTtlArr" id="notiTtl_<c:out value="${i}" />" class="text large" maxlength="100" style="width:30%;"  />'
			html+=	        	'<input type="hidden" name="notiInfoIdArr" id="notiInfoId_<c:out value="${i}" />" />'
			html+=	        	' <input type="text" name="notiCtsArr" id="notiCts_'+cnt+'" class="text" maxlength="100" style="width:69%"  />'
			html+=	        	' <input type="hidden" name="statusArr"  value="I" />'
			html+=	        '</td>'
			html+=		'</tr>'
    	
		$("#notiTb").append(html);
    	
    };
});
//-->
</script>

