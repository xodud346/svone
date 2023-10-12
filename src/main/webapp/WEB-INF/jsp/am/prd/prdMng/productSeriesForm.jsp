<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
	<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
</head>
<body>
<div id="header">
    <%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</div>
<div id="container">
    <div id="aside" class="aside left"><!-- aside -->
        <%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
    </div>
    <div id="wrapper">
        <div id="breadcrumb"></div>

        <div id="contents">

            <div class="container">

                <h2 class="title"><span>시리즈그룹상품 생성</span></h2>
				
                <form id="frm" name="frm">
                    <input type="hidden" id="prdGrpId" name="prdGrpId" value="${seriesInfo.prdGrpId}" />
					<input type="hidden" name="prdClsCd" value="${seriesInfo.prdClsCd}"/>
					<input type="hidden" name="coCd" value="${seriesInfo.coCd}"/>
                    
	                <table class="table-row table-a" style="margin-bottom: 0;">
	                    <colgroup>
	                        <col style="width: 13%;" />
	                        <col style="width: auto;" />
	                        <c:if test="${not empty seriesInfo}">
		                        <col style="width: 13%;" />
		                        <col style="width: auto;" />
	                        </c:if>
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                            <th><span>그룹구분</span></th>
	                            <td>
	                            	<label><input type="radio" class="radio" id="prdGrpSprCd1" name="prdGrpSprCd" value="S" <c:if test="${'R' ne seriesInfo.prdGrpSprCd}">checked="checked"</c:if> <c:if test="${not empty seriesInfo.prdGrpSprCd}">disabled</c:if>/>시리즈</label>
		                			<label><input type="radio" class="radio" id="prdGrpSprCd2" name="prdGrpSprCd" value="R" <c:if test="${'R' eq seriesInfo.prdGrpSprCd}">checked="checked"</c:if> <c:if test="${not empty seriesInfo.prdGrpSprCd}">disabled</c:if>/>연관</label>
	                            </td>
	                            <c:if test="${not empty seriesInfo}">
		                            <th><span>사용여부</span></th>
		                            <td>
		                            	<label><input type="radio" class="radio" id="useYn1" name="useYn" value="Y" <c:if test="${'Y' eq seriesInfo.useYn}">checked="checked"</c:if>/>사용</label>
			                			<label><input type="radio" class="radio" id="useYn2" name="useYn" value="N" <c:if test="${'N' eq seriesInfo.useYn}">checked="checked"</c:if>/>미사용</label>
		                            </td>
								</c:if>
	                        </tr>
	                        <tr>
	                        	<th><span>그룹명</span></th>
	                            <td>
									<input type="text" class="text" style="width:55%;" id="prdGrpNm" name="prdGrpNm" value="${seriesInfo.prdGrpNm}"/>
								</td>
								<c:if test="${not empty seriesInfo}">
									<th><span>그룹ID</span></th>
		                            <td>
										${seriesInfo.prdGrpId}
									</td>
								</c:if>
							</tr>
							<c:if test="${not empty seriesInfo}">
								<tr>
		                        	<th><span>등록일</span></th>
		                            <td>
										${seriesInfo.regDtm}
									</td>
									<th><span>등록자</span></th>
		                            <td>
										${seriesInfo.regpsn}
									</td>
								</tr>
								<tr>
		                        	<th><span>최종수정일</span></th>
		                            <td>
										${seriesInfo.updDtm}
									</td>
									<th><span>최종수정자</span></th>
		                            <td>
										${seriesInfo.updpsn}
									</td>
								</tr>
							</c:if>
							<tr>
	                        	<th><span>그룹 상품 추가</span></th>
	                        	
	                            <td <c:if test="${not empty seriesInfo}">colspan="3"</c:if>>
	                            	<input type="checkbox" id="bssPrdChk" name="bssPrdChk" class="checkbox"  <c:if test="${empty seriesInfo}">checked="checked"</c:if> disabled/>
			            			<input type="hidden" id="bssPrdYn" name="bssPrdYn" <c:if test="${empty seriesInfo}">value="Y"</c:if>/>
	                            	기준상품
									<input type="text" class="text" style="width:15%;" id="prdId" name="prdId" value="" readonly/>
									<input type="text" class="text" style="width:20%;" id="prdNm" name="prdNm" value="" readonly/>
									<a href="javascript:productPopup('frm');" class="icon search2" id="Popup"></a>
									<a href="javascript:productAdd();" class="button small"><span>+추가</span></a>
								</td>
							</tr>
	                        <tr>
	                        	<th><span>그룹상품리스트</span></th>
	                            <td <c:if test="${not empty seriesInfo}">colspan="3"</c:if>>
	                            	<table id="seriesTable" class="table-col table-a" <c:if test="${'R' eq seriesInfo.prdGrpSprCd}">style="display:none;"</c:if>>
	                            		<colgroup>
											<col style="width: 9%;" />
											<col style="width: 10%;" />
											<col style="width: 10%;" />
											<col style="width: 29%;" />
											<col style="width: 29%;" />
											<col style="width: 8%;" />
											<col style="width: 6%;" />
										</colgroup>
										<thead>
											<tr>
												<th>번호</th>
												<th>상품ID</th>
												<th>상품명</th>
												<th>S-MRO속성</th>
												<th>SSP속성</th>
												<th>주문단위</th>
												<th>삭제</th>
											</tr>
										</thead>
										<tbody id="seriesTbody">
											<c:choose>
												<c:when test="${not empty productSeriesInfo and 'R' ne seriesInfo.prdGrpSprCd}">
													<c:forEach var="item" items="${productSeriesInfo}" varStatus="status">
														<tr>
															<td>
																${item.prdSeq}
																<c:if test="${'Y' ne item.bssPrdYn}">
																	<a href="#none" class="row-sort" data-sort_type="up">△ </a>
																	<a href="#none" class="row-sort" data-sort_type="down"> ▽</a>
																</c:if>
															</td>
															<td>
																<input type="hidden" id="series_${item.prdId}" name="prdIds" value="${item.prdId}"/>
																<input type="hidden" id="series_${item.prdId}_${item.bssPrdYn}" name="bssPrdYns" value="${item.bssPrdYn}"/>
																${item.prdId}
															</td>
															<td>${item.prdNm}</td>
															<td>
																<c:if test="${not empty item.fvAttr}">${item.fvAttr}</c:if>
															</td>
															<td>
																<c:if test="${'Y' eq item.bssPrdYn}">
																	<input type="hidden" name="bssPrdAttrCd" value="${item.bssPrdAttrCd}"/>
																</c:if>
																<c:if test="${not empty item.sgAttr}">${item.sgAttr}</c:if>
															</td>
															<td>${item.odrUnt}</td>
															<td>
																<c:if test="${'Y' ne item.bssPrdYn}">
																	<a href="javascript:;" onclick="prdDel(this);" class="button small"><span>- 삭제</span></a>
																</c:if>
															</td>
														</tr>
													</c:forEach>
												</c:when>
												<c:otherwise>
													<tr>
														<td class="td_no_result" colspan="7">${Code.COMMON_MESSAGE_GROUP_PRODUCT_ADD_}</td>
													</tr>
												</c:otherwise>
											</c:choose>
										</tbody>
	                            	</table>
	                            	<table id="relationTable" class="table-col table-a" <c:if test="${'R' ne seriesInfo.prdGrpSprCd}">style="display:none;"</c:if>>
	                            		<colgroup>
											<col style="width: 9%;" />
											<col style="width: 10%;" />
											<col style="width: 10%;" />
											<col style="width: 58%;" />
											<col style="width: 8%;" />
											<col style="width: 6%;" />
										</colgroup>
										<thead>
											<tr>
												<th>번호</th>
												<th>상품ID</th>
												<th>상품명</th>
												<th>대표규격</th>
												<th>주문단위</th>
												<th>삭제</th>
											</tr>
										</thead>
										<tbody id="relationTbody">
											<c:choose>
												<c:when test="${not empty productSeriesInfo and 'R' eq seriesInfo.prdGrpSprCd}">
													<c:forEach var="item" items="${productSeriesInfo}" varStatus="status">
														<tr>
															<td>
																${item.prdSeq}
																<a href="#none" class="row-sort" data-sort_type="up">△ </a>
																<a href="#none" class="row-sort" data-sort_type="down"> ▽</a>
															</td>
															<td>
																<input type="hidden" id="relation_${item.prdId}" name="prdIds" value="${item.prdId}"/>
																<input type="hidden" id="relation_${item.prdId}_${item.bssPrdYn}" name="bssPrdYns" value="${item.bssPrdYn}"/>
																${item.prdId}
															</td>
															<td>${item.prdNm}</td>
															<td>
																<c:if test="${not empty item.fvSgAttr}">${item.fvSgAttr}<c:if test="${status.last}">; </c:if></c:if>
															</td>
															<td>${item.odrUnt}</td>
															<td>
																<a href="javascript:;" onclick="prdDel(this);" class="button small"><span>- 삭제</span></a>
															</td>
														</tr>
													</c:forEach>
												</c:when>
												<c:otherwise>
													<tr>
														<td class="td_no_result" colspan="6">${Code.COMMON_MESSAGE_GROUP_PRODUCT_ADD_}</td>
													</tr>
												</c:otherwise>
											</c:choose>
										</tbody>
	                            	</table>
	                            </td>
	                        </tr>
	                    </tbody>
	                </table>
	                * 시리즈상품의 경우 그룹상품리스트에 새로 추가된 상품의 SSP속성은 기준상품의 SSP속성으로 동기화 됩니다. (옵션속성, 주문단위는 제외)
                </form>
                <div class="section-button-list pt30">
					<div class="wrap text-center">
						<c:choose>
							<c:when test="${not empty seriesInfo}">
								<a href="javascript:goList();" class="button large"><span>목록</span></a>
								<a href="javascript:goSave();" class="button large primary"><span>저장</span></a>
							</c:when>
							<c:otherwise>
								<a href="javascript:goList();" class="button large"><span>취소</span></a>
								<a href="javascript:goSave();" class="button large primary"><span>등록</span></a>
							</c:otherwise>
						</c:choose>
						
					</div>
				</div>
            </div>
        </div>

    </div>  

    <div id="quickmenu" class="aside right">
        <%@ include file="/WEB-INF/jsp/am/include/quick.jsp" %>
    </div>

</div>

<div id="footer">
    <%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>

<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>
<script type="text/javascript">
$(function(){
	// 변수
	var $frm = $("#frm");
	
	// 그룹구분 변경 시
	$("input[name=prdGrpSprCd]").change(function() {
		var prdGrpSprCd = $(this).val();
		
		if("S" == prdGrpSprCd) {
			$("#relationTable").hide();
			$("#relationTbody").html('<td class="td_no_result" colspan="6">${Code.COMMON_MESSAGE_GROUP_PRODUCT_ADD_}</td>');
			$("#seriesTable").show();
			$("#bssPrdChk").prop("checked",true);
		} else if("R" == prdGrpSprCd) {
			$("#seriesTable").hide();
			$("#seriesTbody").html('<td class="td_no_result" colspan="7">${Code.COMMON_MESSAGE_GROUP_PRODUCT_ADD_}</td>');
			$("#relationTable").show();
			$("#bssPrdChk").prop("checked",false);
		} else {
			$("#seriesTable").hide();
			$("#seriesTbody").html('<td class="td_no_result" colspan="7">${Code.COMMON_MESSAGE_GROUP_PRODUCT_ADD_}</td>');
			$("#relationTable").hide();
			$("#bssPrdChk").prop("checked",false);
		}
	});
	
	seqSet = function() {
		
		var $prdGrpSprCd = $("input[name=prdGrpSprCd]:checked").val();
		
		if("R" == $prdGrpSprCd) {
			$("#relationTbody tr").each(function(idx) {
				$(this).find("td").eq(0).html(idx+1);
				
				if("" != $("#prdGrpId").val()) {
					$(this).find("td").eq(0).append('<a href="#none" class="row-sort" data-sort_type="up">△ </a>');
					$(this).find("td").eq(0).append('<a href="#none" class="row-sort" data-sort_type="down"> ▽</a>');
				}
			})
		} else {
			$("#seriesTbody tr").each(function(idx) {
				if(idx > 0) {
					$(this).find("td").eq(0).html(idx);
					
					if("" != $("#prdGrpId").val()) {
						$(this).find("td").eq(0).append('<a href="#none" class="row-sort" data-sort_type="up">△ </a>');
						$(this).find("td").eq(0).append('<a href="#none" class="row-sort" data-sort_type="down"> ▽</a>');
					}
				}
			})
		}
	}
	
	// 추가 버튼
	productAdd = function() {
		
		// 기준상품여부
		if($("#bssPrdChk").is(":checked")) {
			$("#bssPrdYn").val("Y");
		} else {
			$("#bssPrdYn").val("N");
		}
		
		// 추가할 상품 데이터 없는경우
		if("" == $("#prdId").val()) {
			alert("상품을 선택해주세요.");
			return false;
		}
		
		// 이미 추가된 상품의 경우
		var prdChk = true;
		$("input[name=prdIds]").each(function() {
			if($(this).val() == $("#prdId").val()) {
				alert("그룹 상품 리스트에 중복된 상품이 있습니다. 확인해 주세요.");
				prdChk = false;
				return false;
			}
		})
		
		if(prdChk) {
			var $prdGrpSprCd = $("input[name=prdGrpSprCd]:checked").val();
			
			var $bssPrdYn = $("#bssPrdYn").val();
			var html = '';
			
			if("" != $("#prdGrpId").val()) {
				$("input[name=prdGrpSprCd]").attr("disabled",false);
			}
			$.ajax({
				url : "/am/prd/prdMng/productSeriesAdd.json",
				type : "post",
				dataType : "json",
				data : $frm.serialize(),
				success : function(data){
					
					if("" != $("#prdGrpId").val()) {
						$("input[name=prdGrpSprCd]").attr("disabled",true);
					}
					
					if("fail" == data.result) {
						alert(data.resultMsg);
						return false;
					}
					var productInfo = data.productInfo;
					var mroAttrInfo = data.productMroAttrInfo;
					var sspAttrInfo = data.productSspAttrInfo;
					
					// SSP 속성
					var mroAttrHtml = "";
					var sspAttrHtml = "";
					
					var $tbody = "";
					html += '<tr>';
					// 시리즈그룹
					if("S" == $prdGrpSprCd) {
						$tbody = $("#seriesTbody");
						
						// SSP 상품 속성
						for(var j=0; j<mroAttrInfo.length; j++) {
							mroAttrHtml += '{'+mroAttrInfo[j].fvAttr+'}; ';
						}
						
						if("Y" == $("#bssPrdYn").val()) {
							$("input[name=prdClsCd]").val(productInfo.prdClsCd);
							
							for(var i=0; i<sspAttrInfo.length; i++) {
								sspAttrHtml += '<input type="checkbox" name="sspAttrCd" value="'+sspAttrInfo[i].attrCd+'"/>';
								sspAttrHtml += '{'+sspAttrInfo[i].sgAttr+'}; ';
							}
							
							html += '	<td>기준상품</td>';
						} else {
							
							for(var i=0; i<sspAttrInfo.length; i++) {
								sspAttrHtml += '{'+sspAttrInfo[i].sgAttr+'}; ';
							}
							
							html += '	<td></td>';
						}
						
						html += '	<td>';
						html += '		<input type="hidden" id="series_'+productInfo.prdId+'" name="prdIds" value="'+productInfo.prdId+'"/>';
						html += '		<input type="hidden" id="series_'+productInfo.prdId+'_'+$bssPrdYn+'" name="bssPrdYns" value="'+$bssPrdYn+'"/>';
						html += 		productInfo.prdId;
						html +=	'	</td>';
						html += '	<td>'+productInfo.prdNm+'</td>';
						html += '	<td>'+mroAttrHtml+'</td>';
						html += '	<td>';
						
						if("Y" == $("#bssPrdYn").val()) {
							html += '<input type="hidden" name="bssPrdAttrCd" value=""/>';
						}
						
						html += sspAttrHtml+'</td>';
						html += '	<td>'+productInfo.odrUnt+'</td>';
						html += '	<td><a href="javascript:;" onclick="prdDel(this);" class="button small"><span>-삭제</span></a></td>';
					}
					
					// 연관 그룹
					if("R" == $prdGrpSprCd) {
						// MRO 상품 속성
						for(var i=0; i<mroAttrInfo.length; i++) {
							var mroAttrNm = mroAttrInfo[i].prnm;
							var mrossp = true;
							for(var j=0; j<sspAttrInfo.length; j++) {
								if(mroAttrNm == sspAttrInfo[j].attrNm) {
									mrossp = false;
								}
							}
							if(mrossp) {
								mroAttrHtml += '{'+mroAttrInfo[i].fvAttr+'}; ';
							}
						}
						
						// SSP 상품 속성
						for(var j=0; j<sspAttrInfo.length; j++) {
							sspAttrHtml += '{'+sspAttrInfo[j].sgAttr+'}; ';
						}
						
						$tbody = $("#relationTbody");
						
						html += '	<td></td>';	
						html += '	<td>';
						html += '		<input type="hidden" id="relation_'+productInfo.prdId+'" name="prdIds" value="'+productInfo.prdId+'"/>';
						html += '		<input type="hidden" id="relation_'+productInfo.prdId+'_'+$bssPrdYn+'" name="bssPrdYns" value="'+$bssPrdYn+'"/>';
						html += 		productInfo.prdId;
						html +=	'	</td>';
						html += '	<td>'+productInfo.prdNm+'</td>';
						html += '	<td>'+mroAttrHtml+sspAttrHtml+'</td>';
						html += '	<td>'+productInfo.odrUnt+'</td>';
						html += '	<td><a href="javascript:;" onclick="prdDel(this);" class="button small"><span>-삭제</span></a></td>';
					}
					html += '</tr>';
					
					if($("input[name=prdIds]").length > 0) {
						if("Y" == $("#bssPrdYn").val()) {
							$tbody.prepend(html);
						} else {
							$tbody.append(html);
						}
					} else {
						$tbody.html(html);
					}
					
					$("#prdId").val("");
					$("#prdNm").val("");
					$("input[name=bssPrdChk]").prop("checked",false);
					seqSet();
				},
				error : function(){
					
				}
			});
		}
	}
	
	// 삭제 버튼
	prdDel = function(thisData) {
		var $tr = thisData.parentElement.parentElement;
		var $prdGrpSprCd = $("input[name=prdGrpSprCd]:checked").val();
		var bssPrdYn = false;
		
		$tr.remove();
		
		if("S" == $prdGrpSprCd) {
			if($("#seriesTbody tr").length < 1) {
				$("#seriesTbody").html('<td class="td_no_result" colspan="7">${Code.COMMON_MESSAGE_GROUP_PRODUCT_ADD_}</td>');
				$("#bssPrdChk").prop("checked",true);
			}
			
			$("input[name=bssPrdYns]").each(function() {
				if("Y" == $(this).val()) {
					bssPrdYn = true;
					return false;
				}
				
			})
			
			if(!bssPrdYn) {
				$("#bssPrdChk").prop("checked",true);
			}
		}
		
		if("R" == $prdGrpSprCd) {
			if($("#relationTbody tr").length < 1) {
				$("#relationTbody").html('<td class="td_no_result" colspan="6">${Code.COMMON_MESSAGE_GROUP_PRODUCT_ADD_}</td>');
				$("#bssPrdChk").prop("checked",false);
			}
		}
		
		seqSet();
	}
	
	// 취소/목록 버튼
	goList = function() {
		
		var msg = "";
		
		if("" != $("#prdGrpId").val()) {
			msg = "수정을 취소하고 목록으로 이동하시겠습니까?";
		} else {
			msg = "등록을 취소하고 목록으로 이동하시겠습니까?";
		}
		
		if (confirm(msg)) {
			$frm.attr({"action":"/am/prd/prdMng/productSeriesView.do", "target":"_self", "method":"post"}).submit();
		}
	}
	
	// 유효성 검사
	validCheck = function() {
		var $prdGrpNm = $("#prdGrpNm").val();
		
		if("" == $prdGrpNm) {
			alert("그룹명을 입력해주세요.");
			return false;
		}
		
		if($("input[name=prdIds]").length < 2) {
			alert("그룹 상품 리스트에 2개 이상의 상품을 구성해주세요.");
			return false;
		}
		
		return true
	}
	
	// 등록
	goSave = function() {
		
		var confirmMsg = ""
		var prdGrpId = $("#prdGrpId").val();
		
		if("" != prdGrpId) {
			confirmMsg = "수정된 내용으로 저장하시겠습니까?";
		} else {
			confirmMsg = "입력된 정보로 그룹ID를 생성하시겠습니까?";
		}
		
		if(!validCheck()) {
			return false;
		}
		
		var bbsYn = false;
		if("" == prdGrpId) {
			$("input[name=bssPrdYns]").each(function() {
				if("Y" == $(this).val()) {
					var bssPrdAttrCd = "";
					$("input[name=sspAttrCd]:checked").each(function(idx){
						if(idx > 0) {
							bssPrdAttrCd += ",";
						}
						
						bssPrdAttrCd += $(this).val();
					})
					
					$("input[name=bssPrdAttrCd]").val(bssPrdAttrCd);
					
					bbsYn = true;
					return;
				}
			})
		} else {
			bbsYn = true;
		}
		
		if("R" == $("input[name=prdGrpSprCd]:checked").val()) {
			bbsYn = true;
		}
		
		if(bbsYn) {
			if (confirm(confirmMsg)) {
				$("input[name=prdGrpSprCd]").attr("disabled",false);
				
				$.ajax({
	 	            type    : "POST",
	 	            url     : "/am/prd/prdMng/productSeriesSave.json",
	 	            data    :  $frm.serialize(),
	 	            dataType : "json",
	 	            success : function(data) {
	 	            	$("input[name=prdGrpSprCd]").attr("disabled",true);
						alert(data.resultMsg);
						$frm.attr({"action":"/am/prd/prdMng/productSeriesView.do", "target":"_self", "method":"post"}).submit();
	 	            },
	 	            error   : function(xhr,status,error) {
	 	            	alert("시리즈그룹 등록 중 에러가 발생하였습니다.");
	 	            }
	 	        });  
			}
		} else {
			alert("기준상품을 추가해야만 시리즈그룹을 만들 수 있습니다.");
			return false;
		}
		
	}
	
	
	// 순서 제어
	$(document).off("click", ".row-sort");
	$(document).on("click", ".row-sort", function(){
		var $this = $(this);
		var $tr = $this.parent().parent();
		var type = $this.data("sort_type");
		
		if(type == "up"){
			var $prevTr = $tr.prev();
			
			if("S" == $("input[name=prdGrpSprCd]:checked").val()) {
				if($prevTr.prev().length > 0) {
					var $trClone = $tr.clone();
					$prevTr.before($trClone);
					$tr.remove();
				} else{
					alert("최 상위 순서 입니다.");
					return;
				}
			} else {
				if($prevTr.length > 0){
					var $trClone = $tr.clone();
					$prevTr.before($trClone);
					$tr.remove();
				}else{
					alert("최 상위 순서 입니다.");
					return;
				}
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
		seqSet();
	});
	
});

function nullCheck(data) {
	var val = '';
	if(typeof(data) === 'undefined'){
		val = '';
	} else {
		val = data
	}
	return val;
}

function fnSetProduct(params) {
	$.each(params, function(idx, data){
		var prdId		= data.prdId;
		var prdNm		= data.prdNm;
		
		$("#prdId").val(prdId);
		$("#prdNm").val(prdNm);
	})	
}
</script>


</body>
</html>
