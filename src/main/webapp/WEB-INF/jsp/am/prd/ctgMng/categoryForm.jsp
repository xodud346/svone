<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<form id="frm" name="frm" method="post" enctype="multipart/form-data">
	<input type="hidden" id="prdClsCd" name="prdClsCd" value="${categoryInfo.prdClsCd}" />
	<input type="hidden" id="prdClsLvlNm" name="prdClsLvlNm" value="${categoryInfo.prdClsLvlNm}" />
	<input type="hidden" id="hrnkPrdClsCd" name="hrnkPrdClsCd" value="${categoryInfo.hrnkPrdClsCd}" />
	<input type="hidden" id="lwstYn" name="lwstYn" value="${categoryInfo.lwstYn}" />
	
	<table class="table-row table-a">
		<colgroup>
		    <col style="width: 20%;" />
		    <col style="width: auto;" />
		</colgroup>
		<tbody>
			<c:if test="${not empty categoryInfo}">
			    <tr>
			        <th><span>카테고리ID</span></th>
			        <td>
			            <strong><c:out value="${categoryInfo.prdClsCd}" /></strong>
			        </td>
			    </tr>
		    </c:if>
		    
		    <tr>
		        <th><span>현재 위치</span></th>
		        <td>
		        	<c:choose>
		        		<c:when test="${not empty categoryInfo}">
		        			<strong>${categoryInfo.prdClsLvlNm}</strong>
		        		</c:when>
		        		<c:otherwise>
		        			<strong>메인</strong>
		        		</c:otherwise>
		        	</c:choose>
		        </td>
		    </tr>
		    <c:if test="${not empty categoryInfo}">
			    <tr>
		            <th><span>카테고리명</span></th>
		            <td>
		                <input type="text" id="prdClsNm" name="prdClsNm" class="text" value="${categoryInfo.prdClsNm}" />
		            </td>
		        </tr>
			    <tr>
		            <th><span>카테고리 사용여부</span></th>
		            <td>
		                <label><input type="radio" class="radio" id="useYn1" name="useYn" value="Y" <ui:select v="${categoryInfo.useYn }" t="Y" g="checked"/>/>사용</label>
		                <label><input type="radio" class="radio" id="useYn2" name="useYn" value="N" <ui:select v="${categoryInfo.useYn }" t="N" g="checked"/>/>미사용</label>
		            </td>
		        </tr>
			    <c:if test="${'Y' eq categoryInfo.lwstYn}">    
			        <tr>
			            <th><span>프론트 노출여부</span></th>
			            <td>
			                <label><input type="radio" class="radio" id="frtYn1" name="frtYn" value="Y" <ui:select v="${categoryInfo.frtYn}" t="Y" g="checked"/>/>사용</label>
			                <label><input type="radio" class="radio" id="frtYn2" name="frtYn" value="N" <ui:select v="${categoryInfo.frtYn}" t="N" g="checked"/>/>미사용</label>
			            </td>
			        </tr>
			        <tr>
			            <th><span>S-MRO카테고리 매핑</span></th>
			            <td>
			            	<input type="hidden" id="smroMappId" name="smroMappId" value="${categoryInfo.smroMappId}"/>
			            	<input type="hidden" id="smroMappNm" name="smroMappNm" value="${categoryInfo.smroMappNm}"/>
			                <input type="text" id="smroMappLvlNm" name="smroMappLvlNm" style="width:80%" class="text" <c:if test="${not empty categoryInfo.smroMappId}">value="(${categoryInfo.smroMappId})${categoryInfo.smroMappNm}"</c:if> readonly/>
			                <a href="javascript:sMroCategoryPopup('frm');" class="icon search2"></a>
			            </td>
			        </tr>
			        <tr>
			            <th><span>고시품목 매핑</span></th>
			            <td>
			            	<input type="hidden" id="nfiItmMpp" name="nfiItmMpp" value="${categoryInfo.nfiItmMpp}"/>
			                <input type="text" id="nfiItmMppInfo" name="nfiItmMppInfo" style="width:80%" class="text" <c:if test="${not empty categoryInfo.nfiItmMpp}">value="(${categoryInfo.nfiItmMpp})${categoryInfo.nfiItmMppNm}"</c:if> readonly/>
			                <a href="javascript:nfiPopup();" class="icon search2" id="nfiPop"></a>
			            </td>
			        </tr>
			        <tr>
			            <th><span>시황상품 여부</span></th>
			            <td>
			            	<input type="checkbox" id="mrktPrdChk" name="mrktPrdChk" class="checkbox" <ui:select v="${categoryInfo.mrktPrdYn}" t="Y" g="checked"/>>
			            	<input type="hidden" id="mrktPrdYn" name="mrktPrdYn" value="${categoryInfo.mrktPrdYn}"/>
							<label for="mrktPrdYn">시황상품</label>
			            </td>
			        </tr>
			        <tr>
			        	<th><span>선정방식</span></th>
			        	<td>
				        	<select name="intgMthdCd" id="intgMthdCd">
				        		<option value="">선택</option>
				        		<c:forEach var="item" items="${intgMthdCdList}" varStatus="status">
				        			<option value="${item.CMN_COM_IDX}" <c:if test="${item.CMN_COM_IDX eq categoryInfo.intgMthdCd}">selected</c:if>>${item.CMN_COM_NM}</option>
				        		</c:forEach>
				        	</select>
			        	</td>
			        </tr>
			        <tr id="imgRow" <c:if test="${'3051' ne categoryInfo.intgMthdCd}">style="display:none;"</c:if>>
			        	<th><span>전시상품군 이미지</span></th>
			        	<td>
			        		<div class="edit-product-image">
				        		<div class="grid img-list">
				        			<div class="col-1-4">
										<div class="module">
		                            		<div class="thumb">
		                            			<a href="javascript:removeImage();" class="delete" id="imgDel" <c:if test="${empty categoryImgInfo}">style="display:none;"</c:if>>
		                            				<img src="/am/img/ico_close.png" alt="">
		                            			</a>
		                            			<div>
		                            				<img id="categoryImg" <c:if test="${not empty categoryImgInfo}">src="${categoryImgInfo[0].fileStreCours}${categoryImgInfo[0].streFileNm}" class="pic"</c:if> alt="">
		                            			</div>
			                                     <p class="action">
			                                     	<a href="javascript:;" onclick="$('#file').click();" class="button small"><span>이미지 등록</span></a>
			                                     	<input type="hidden" id="attachFileId" name="attachFileId" value="${categoryImgInfo[0].attachFileId}" />
			                                     	<input type="hidden" id="fileSn" name="fileSn" value="" />
			                                     	<input type="file" name="file" id="file" class="file" accept="image/gif, image/jpeg, image/png" style="display: none;" data-sn="${categoryImgInfo[0].fileSn}">
			                                 	</p>
		                            		</div>
	                            		</div>
	                           		</div>
					        	</div>
				        	</div>
			        	</td>
			        </tr>
			        <tr>
			            <th><span>카테고리 상품 수</span></th>
			            <td>
			                <strong><c:out value="${categoryInfo.prdClsCnt}"/></strong>
			            </td>
			        </tr>
	        	</c:if>
				<tr>
		            <th><span>등록일</span></th>
		            <td>
		                <strong>${categoryInfo.regDtm}</strong>
		            </td>
		        </tr>
				<tr>
		            <th><span>등록자</span></th>
		            <td>
		                <strong>${categoryInfo.regpsn}</strong>
		            </td>
		        </tr>
				<tr>
		            <th><span>최종수정일</span></th>
		            <td>
		            	<strong>${categoryInfo.updDtm}</strong>
		            </td>
		        </tr>
		        <tr>
		            <th><span>최종수정자</span></th>
		            <td>
		            	<strong>${categoryInfo.updpsn}</strong>
		            </td>
		        </tr>
	        </c:if>
	        <c:choose>
		        <c:when test="${'Y' eq categoryInfo.lwstYn}">
		        	<tr>
			            <th style="height:150px;"><span>상품군 SSP속성</span></th>
			            <td style="vertical-align:top">
			            	<div style="position:relative; padding:50px 0;">
				            	<small class="desc" style="position:absolute; top:10px; right:10px;"><input type="button" class="button primary" name="attrBtn" value="속성 관리" onclick="attrPop();"/></small>
				            	<div id="attrData">
				            		<c:forEach var="item" items="${attrList}" varStatus="status">
					            		<input type="hidden" id="attrCd_${item.attrCd}" name="attrCds" value="${item.attrCd}"/>
										<input type="hidden" id="mandYN_${item.attrCd}" name="mandYNs" value="${item.mandYn}"/>
										<input type="hidden" id="attrNm_${item.attrCd}" name="attrNms" value="${item.attrNm}"/>
										${item.attrNm}<c:if test="${'Y' eq item.mandYn}"><i class="require"><em>*</em></i></c:if><c:if test="${!status.last}">,</c:if>
									</c:forEach>
				            	</div>
			            	</div>
			            </td>
					</tr>
		        </c:when>
		        <c:otherwise>
		        	<tr>
			            <th><span>하위 카테고리 수</span></th>
			            <td>
			                <strong><c:out value="${subList.size()}" /></strong>
			            </td>
			        </tr>
					<tr>
			            <th><span>하위 카테고리 정렬</span></th>
			            <td id="tdSortHeight">
			            	<small class="desc">* 하위카테고리를 순서를 변경하실 수 있습니다.</small>
			            	<br/>
			                <c:choose>
			                    <c:when test="${not empty subList}">
			                        <ul style="width:300px;">
			                        <c:forEach var="item" items="${subList}" varStatus="status">
			                            <li style="overflow:hidden; padding: 5px 10px;margin-top:2px;">	
			                                <a href="javascript:;" class="row-sort <c:if test="${status.last}">up</c:if>" data-sort_type="up" <c:if test="${status.first}">style="display:none;"</c:if>>△</a>
			                                <a href="javascript:;" class="row-sort <c:if test="${status.first}">down</c:if>" data-sort_type="down" <c:if test="${status.last}">style="display:none;"</c:if>>▽</a>
			                                ${item.prdClsNm}
			                                <input type="hidden" name="prdClsCds" value="${item.prdClsCd}"/>
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
		        </c:otherwise>
		    </c:choose>
	    </tbody>
	</table><!-- // table -->
	
	<div class="section-button"><!-- section-button -->
	    <div class="wrap text-right">
	    	<c:if test="${'Y' eq categoryInfo.lwstYn}">
	    		<a href="javascript:goDel('${categoryInfo.prdClsCnt}');" class="button"><span>삭제</span></a>
	        </c:if>
	        <a href="javascript:goSave();" class="button primary"><span>저장</span></a>
	    </div>
	</div>
</form>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
<script src="/am/js/common/jquery.form.js"></script>
<script type="text/javascript">
$(function() {
	var $frm = $("#frm");
	
	// 전시카테고리 순서 변경 이벤트
    $(document).off("click", ".row-sort");
    $(document).on("click", ".row-sort", function () {
        var $this = $(this);  
        var $li = $this.parent();
        
        var type = $this.data("sort_type");
        if(type == "up") {
        	var $prevLi = $li.prev();
        	var $prevLiLi = $prevLi.prev();
        	
        	if($prevLiLi.length < 1) {
        		$this.hide();
        		$this.next().addClass("down");
        		
        		$prevLi.children("a").first().show();
        		$prevLi.children("a").last().removeClass("down");
        	}
        	
        	if($this.hasClass("up")) {
        		$this.removeClass("up");
        		$this.next().show();
        		
        		$prevLi.children("a").first().addClass("up");
        		$prevLi.children("a").last().hide();
        	}
        	
        	var $liClone = $li.clone();  // 우선 this TR 복사   
            $prevLi.before($liClone);    // prev 상단에 this li를 생성  
            $li.remove();                // 해당 this 삭제
            
        } else {
            var $nextLi = $li.next();
            var $nexLiLi = $nextLi.next();
            
            if($nexLiLi.length < 1) {
            	$this.hide();
            	$this.prev().addClass("up");
        		
        		$nextLi.children("a").first().removeClass("up");
        		$nextLi.children("a").last().show();
        	}
            
            if($this.hasClass("down")) {
        		$this.removeClass("down");
        		$this.prev().show();
        		
        		$nextLi.children("a").first().hide();
        		$nextLi.children("a").last().addClass("down");
        	}
            
            var $liClone = $li.clone();  // 우선 this TR 복사   
            $nextLi.after($liClone);     // next 하단에 this li를 생성  
            $li.remove();                // 해당 this 삭제
            
        }  
    });
    
    // 시황상품 여부 클릭
    $("input[name=mrktPrdChk]").click(function() {
    	if($("input[name=mrktPrdChk]").is(":checked")) {
        	$("#mrktPrdYn").val("Y");
        } else {
        	$("#mrktPrdYn").val("N");
        }
    });
    
    // 통합 방식
    $("#intgMthdCd").change(function() {
    	if("3051" == $(this).val()) {
    		$("#imgRow").show();
    	} else {
    		$("#imgRow").hide();
    	}
    })
    
    // 파일첨부
    var sn = $("#file").data("sn")+"";
    $("#file").off().on("change" , function(){
    	var reader = new FileReader();

    	$("#fileSn").val(sn);
    	
    	reader.onload = function(event) {
    		$("#imgDel").show();
    		$("#categoryImg").addClass("pic");
    		$("#categoryImg").attr("src", event.target.result);
    	}
    	
    	reader.readAsDataURL(event.target.files[0]);
    })
    
    // 파일 지우기
    removeImage = function() {
    	$("#imgDel").hide();
		$("#categoryImg").removeClass("pic");
		$("#categoryImg").removeAttr("src");
		$("input[name=file]").val("");
		$("#fileSn").val(sn);
    }
    
 	// 카테고리명 유효성 검사
	prdClsNmvalid = function() {
		var $prdClsNm = $("#prdClsNm");
		
		if("" == $prdClsNm.val()) {
			alert("카테고리명을 입력해 주세요.");
			$prdClsNm.focus();
			return false;
		}
		
		if($prdClsNm.val().indexOf("기타") > -1) {
			alert("'기타'는 카테고리명으로 사용할 수 없습니다.");
			$prdClsNm.focus();
			return false;
		}
		
		var result = true;
		
		if("${categoryInfo.prdClsNm}" != $prdClsNm.val()) {
			$.ajax({
	            type    : "POST",
	            url     : "/am/prd/ctgMng/categoryNameChk.do",
	            data    : {prdClsNm : $prdClsNm.val()},
	            dataType : "json",
	            async 	: false,
	            success : function(data) {
					if("fail" == data.result) {
						alert(data.resultMsg);
						$prdClsNm.focus();
						result = false;
					}
	            },
	            error   : function(xhr,status,error) {
	            	alert("카테고리명 체크 중 에러가 발생하였습니다.");
	            	result = false;
	            }
	        });
		}
		
		return result;
	}
    
    //상품카테고리 순서 저장 이벤트
    goSave = function() {
		if("" != $("#prdClsCd").val()) {
			if(!prdClsNmvalid()){
				return false;
			}
		}
		
		if("3051" != $("#intgMthdCd").val()) {
			if("" != sn) {
				$("#fileSn").val(sn);
			} else {
				$("#file").val("");
			}
		} else {
			if("" == $("#file").val() &&  "" == $("#attachFileId").val()) {
				alert("전시상품군 이미지를 등록해주세요.");
				return false;
			}
		}
		
		if (confirm( "저장 하시겠습니까?")) {
			
			$("#frm").ajaxForm({
                dataType : "json",
                url : '/am/prd/ctgMng/categoryInfoUpdate.do',
                success : function(result){
                	alert("저장되었습니다.");   
                	categoryList("",$("#prdClsCd").val());
                },
                error : function(err){
                    alert("오류가 발생하였습니다.\n[" + err.status + "]");
                }
                
            });
			
			$("#frm").submit();
        }	
    };
    
    // 고시품목 매필 팝업 호출
    nfiPopup = function() {
    	productNoticePopup('frm');
    }
    
    // 속성 조회 팝업 호출
    attrPop = function(){
    	attrPopup('frm');
    }
    
    //상품카테고리 삭제 처리
    goDel = function(prdClsCnt){
    	
    	if(prdClsCnt > 0) {
    		alert("삭제할 수 없습니다. 카테고리에 등록된 상품이 있습니다.");
    		return false;
    	}
    	
        if (confirm( "해당 카테고리를 삭제하시겠습니까?")) {
        	$.ajax({
                type:"post",
                url : "/am/prd/ctgMng/categoryDelete.do",
                data : $frm.serialize(),
                dataType : "json",
                success : function(data){
                	if("success" == data.result) {
                		alert("삭제되었습니다.");
                		categoryList("","");
                	}
                },
                error : function(err){
                    alert("오류가 발생하였습니다.\n[" + err.status + "]");
                }
            });
        }	
    };
    
});

// 속성 조회 팝업
function fnResultAttr(params) {
	var gubun		= ', ';
	var attrNm 		= '';
	var innerHtml	= '';
	var require		= '';
	
	$.each(params, function(idx, data){
		var id		= data.ID;
		var nm		= data.NM;
		var mand	= data.MAND;
		
		innerHtml += '<input type="hidden" id="attrCd_'+id+'" name="attrCds" value="'+id+'"/>';
		innerHtml += '<input type="hidden" id="mandYN_'+id+'" name="mandYNs" value="'+mand+'"/>';
		innerHtml += '<input type="hidden" id="attrNm_'+id+'" name="attrNms" value="'+nm+'"/>';
		
		require = 'Y'==mand ? '<i class="require"><em>*</em></i>' : '';
		
		if(idx > 0) {
			attrNM		= attrNM+gubun+nm+require;
		} else {
			attrNM		= nm+require;
		}
	});
	
	innerHtml += attrNM;
	
	$("#attrData").html(innerHtml);
}

//S-MRO 카테고리 매핑
function fnResultSMroCategoryMapp(obj) {
	$("#smroMappId").val(obj.prdClsCd);
	$("#smroMappNm").val(obj.prdClsNm);
	$("#smroMappLvlNm").val("("+obj.prdClsCd+")" + obj.prdClsLvlNm);
}

//고시품목 매핑
function fnResultNotice(params) {
	$("#nfiItmMpp").val(params.notiId);
	$("#nfiItmMppInfo").val("("+params.notiId+")" + params.notiNm);
}
</script>