<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="contents-inner">
	<div class="grid section-button-list">
		<div class="text-right">
			<a href="javascript:goForm('');" class="button small"  id="bannerSaveButton"><span>배너등록</span></a>
			<c:if test="${'A' ne commandMap.BNR_MST_GBN or '2988' eq commandMap.CMN_COM_IDX or '2995' eq commandMap.CMN_COM_IDX
						 or '3060' eq commandMap.CMN_COM_IDX or '3066' eq commandMap.CMN_COM_IDX}">
				<c:if test="${'D' ne commandMap.BNR_MST_GBN or '2996' eq commandMap.CMN_COM_IDX }">
					<c:if test="${'C' ne commandMap.BNR_MST_GBN }">
						<a href="#none" id="modifySort" class="button small"><span>순서저장</span></a>
					</c:if>
				</c:if>
			</c:if>
		</div>
	</div>
	<div class="grid">
		<div class="col is-lg lg-col-1-10">
			<table class="table-col table-b" style="border-right: solid 1px #e9e9e9;">
				<colgroup>
					<col style="width: auto; height: auto;" />
				</colgroup>
				<thead>
					<tr>
						<th>NO</th>
					</tr>
				</thead>
				<tbody>
					<c:if test="${not empty list}">
					    <c:forEach var="row" items="${list }" varStatus="i">
							<tr>
				    			<td>${row.RNUM }</td>
				    		</tr>
						</c:forEach>
					</c:if>
				</tbody>
			</table>
		</div>
		<div class="col is-lg lg-col-9-10">
			<table class="table-col table-b">
				<colgroup>
					<col style="width: auto; display: none;"  />
					<col style="width: auto;" />
					<col style="width: auto;" />
					<col style="width: auto;" />
					<col style="width: auto;" />
					<col style="width: auto;" />
					<c:if test="${'B' eq commandMap.BNR_MST_GBN}">
						<col style="width: auto;" />
					</c:if>
					<c:if test="${'A' ne commandMap.BNR_MST_GBN or '2988' eq commandMap.CMN_COM_IDX or 
								'2995' eq commandMap.CMN_COM_IDX or '3060' eq commandMap.CMN_COM_IDX or '3066' eq commandMap.CMN_COM_IDX}">
						<c:if test="${'D' ne commandMap.BNR_MST_GBN or '2996' eq commandMap.CMN_COM_IDX }">
							<c:if test="${'C' ne commandMap.BNR_MST_GBN }">
								<col style="width: auto;"/>
							</c:if>
						</c:if>
					</c:if>
				</colgroup>
				<thead>
					<tr>
						<th style="display: none">NO</th>
						<th>
							<c:choose>
								<c:when test="${'B' eq commandMap.BNR_MST_GBN}">
									탭명
								</c:when>
								<c:otherwise>
									제목
								</c:otherwise>
							</c:choose>
						</th>
						<th>구분</th>
						<th>전시기간</th>
						<th>등록일</th>
						<c:if test="${'B' eq commandMap.BNR_MST_GBN}">
							<th>유형</th>
						</c:if>
						<th>사용여부</th>
						<c:if test="${'A' ne commandMap.BNR_MST_GBN or '2988' eq commandMap.CMN_COM_IDX or '2995' eq commandMap.CMN_COM_IDX
									 or '3060' eq commandMap.CMN_COM_IDX or '3066' eq commandMap.CMN_COM_IDX}" >
							<c:if test="${'D' ne commandMap.BNR_MST_GBN or '2996' eq commandMap.CMN_COM_IDX }">
								<c:if test="${'C' ne commandMap.BNR_MST_GBN }">
									<th>전시순서</th>
								</c:if>
							</c:if>
						</c:if>
					</tr>
				</thead>
				<tbody class="sort-target">
					<c:choose>
					    <c:when test="${not empty list}">
					    	<c:forEach var="row" items="${list }" varStatus="i">
								<tr>
			    					<td style="display: none" id="rowNum" class="list-sort" data-bnr_detail_idx="<c:out value="${row.BNR_DETAIL_IDX }"/>" data-bnr_mst_idx="<c:out value="${row.BNR_MST_IDX }"/>">
				   					<td>
									    <a href="javascript:goForm('${row.BNR_MST_IDX }');">
<%-- 										<input type="text" id="bnrMstIdx" name="bnrMstIdx" value="<c:out value="${row.BNR_MST_IDX }"/>"> --%>
<%-- 										<input type="text" id="atflId" name="atflId" value="<c:out value="${row.ATFL_ID }"/>"> --%>
<!-- 									    <a href="#none" onclick="getAttachFileList(this);"> -->
									        <c:out value="${row.BNR_MST_TITLE }" />
									    </a>
								    </td>
								    <td>
								    	<c:choose>
								    		<c:when test="${row.BNR_MST_LOGIN_YN eq 'Y'}">
								    			<c:choose>
								    				<c:when test="${row.BNR_MST_BZPLC_YN eq 'Y'}">
								    					<c:out value="${row.BZPLC_NM }"/>
								    				</c:when>
								    				<c:otherwise>
								    					로그인후 전체
								    				</c:otherwise> 
								    			</c:choose>
								    		</c:when>
								    		<c:otherwise>
								    			로그인전
								    		</c:otherwise>
								    	</c:choose>
								    </td>
								    <td>
									    <ui:formatDate value="${row.BNR_MST_ST_DT }" pattern="yyyy.MM.dd"/> ~ 
									    <ui:formatDate value="${row.BNR_MST_ED_DT }" pattern="yyyy.MM.dd"/>
								    </td>
								    <td>
								    	<ui:formatDate value="${row.BNR_MST_REG_DT }" pattern="yyyy.MM.dd"/>
								    </td>
								    <td id="prdType" <c:if test="${empty row.BNR_MST_PRD_YN }">style="display:none;"</c:if>>
								    	<c:choose>
								    		<c:when test="${row.BNR_MST_PRD_YN eq 'Y' }">
								    			상품
								    		</c:when>
								    		<c:otherwise>
								    			이미지
								    		</c:otherwise>
								    	</c:choose>
								    </td>
								    <td>
								    	<c:choose>
								    		<c:when test="${row.BNR_MST_USE_YN eq 'Y'}">
								    			사용
								    		</c:when>
								    		<c:otherwise>
								    			미사용
								    		</c:otherwise>
								    	</c:choose>
								    </td>
								    <c:if test="${'A' ne commandMap.BNR_MST_GBN or '2988' eq commandMap.CMN_COM_IDX or '2995' eq commandMap.CMN_COM_IDX
								    			or '3060' eq commandMap.CMN_COM_IDX or '3066' eq commandMap.CMN_COM_IDX}">
										<c:if test="${'D' ne commandMap.BNR_MST_GBN or '2996' eq commandMap.CMN_COM_IDX }">							    			
									    	<c:if test="${'C' ne commandMap.BNR_MST_GBN }">
												<td>
													<a href="#none" class="row-sort" data-sort_type="up">△ </a>
													<a href="#none" class="row-sort" data-sort_type="down"> ▽</a>
												</td>
											</c:if>
										</c:if>
									</c:if>
								</tr>
					    	</c:forEach>
					    </c:when>
					    <c:otherwise>
					    	<c:choose>
					    		<c:when test="${'B' eq commandMap.BNR_MST_GBN}">
					    			<td class="td_no_result" colspan="8">
					    				${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}
					    			</td>
					    		</c:when>
					    		<c:otherwise>
					    			<c:choose>
					    				<c:when test="${'A' ne commandMap.BNR_MST_GBN or '2988' eq commandMap.CMN_COM_IDX or '2995' eq commandMap.CMN_COM_IDX
					    							 	or '3060' eq commandMap.CMN_COM_IDX or '3066' eq commandMap.CMN_COM_IDX}" >
							    			<td class="td_no_result" colspan="7">
							    				${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}
							    			</td>
							    		</c:when>
							    		<c:otherwise>
								    			<td class="td_no_result" colspan="6">
								    				${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}
								    			</td>
							    		</c:otherwise>
					    			</c:choose>
					    		</c:otherwise>
					    	</c:choose>
					    </c:otherwise>
					</c:choose>
				</tbody>
			</table>
		</div>
	</div>
</div>

<script type="text/javascript">
$(document).ready(function () {
	var $CMN_COM_IDX = $("#CMN_COM_IDX").val();
	
	if($CMN_COM_IDX == 2989) {
		$("#bannerSaveButton").hide();
	} else{
		$("#bannerSaveButton").show();
	}
	
	//팝업관리 등록/수정 페이지 이동
	goForm = function (bnrMstIdx) {
		if("${commandMap}" != null)
		
		var $searchForm = $("#searchForm2");
		
	    if('' != bnrMstIdx) {
	    	$("#BNR_MST_IDX").val(bnrMstIdx);
	    }
	    
	    $("#searchSection").load("/am/dsp/bnrMng/bannerForm.do", $searchForm.serialize(), function(){
	    	$("#bannerList").hide();
	    });
	};
	
	
 // 공통코드 순서 변경 이벤트
	$(document).off("click", ".row-sort");
	$(document).on("click", ".row-sort", function(){
		var $this = $(this);
		var $tr = $this.parent().parent();
		var type = $this.data("sort_type");

		if(type == "up"){
			var $prevTr = $tr.prev(); 
			if($prevTr.length > 0){
				var $trClone = $tr.clone();
				$prevTr.before($trClone);
				$tr.remove();
			}else{
				alert("최 상위 순서 입니다.");
				return;
			}
		}else{
			var $nextTr = $tr.next();
			if($nextTr.length > 0){
				var $trClone = $tr.clone();
				$tr.next().after($trClone);
				$tr.remove();
			}else{
				alert("최 하위 순서 입니다.");
				return;
			}
		}
	});

	// 배너 순서 저장 버튼 클릭 이벤트
	$(document).off("click", "#modifySort");
	$(document).on("click", "#modifySort", function(){
		if(confirm( "저장 하시겠습니까?")){
			var idxArray = new Array();
			var CMN_COM_IDX = $("#CMN_COM_IDX").val();
			
			$(".sort-target").find("tr").each(function(i){
				var $tr = $(this).find(".list-sort");
				idxArray.push($tr.data("bnr_detail_idx"));
			});
			$.ajax({
				async : false,
				type : "POST",
				url : "<c:out value="${serverDomain}" />/am/dsp/bnrMng/bannerSort.do", 
				data : {"BNR_DETAIL_IDX" : idxArray},
				success : function(data){
					alert(data.message);
					search();
				},
				error : function(){
					alert("오류가 발생하였습니다.\n다시 시도 해 주십시오.");   
				}
			});
		}
	});
    
});

</script>