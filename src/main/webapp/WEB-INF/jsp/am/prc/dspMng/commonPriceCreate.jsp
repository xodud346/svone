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
<body><!-- body class,d 중요 -->

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
            	<fmt:parseDate var="dateString" value="${currentDate.currentDate}" pattern="yyyyMMddHHmmss" />
                <h2 class="title"><span>공용상품 기준판매가 등록</span></h2>
                <form id="frm" name="frm" enctype="multipart/form-data"> 
                
				<input type="hidden" name="prdId" id="prdId" value="${commandMap.prdId}">
				<input type="hidden" name="coCd" id="coCd" value="${commandMap.coCd}">
				
                <table cellspacing="0" class="table-row table-a"><!-- table -->
                    <colgroup>
                        <col style="width: 15%; min-width:180px;"/>
                        <col style="width: auto;" />
                        <col style="width: 15%; min-width:180px;" />
                        <col style="width: auto;" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th><span>SSP진열상태</span></th>
                            <td>
                                <input type="radio" id="haazaChem1" name="dispStatsCd" value="01" class="radio" checked>
                                <label for="haazaChem1">진열</label>
                                <input type="radio" id="haazaChem2" name="dispStatsCd" value="02" class="radio">
                                <label for="haazaChem2">진열내림</label>
                                <input type="radio" id="haazaChem3" name="dispStatsCd" value="03" class="radio">
                                <label for="haazaChem3">일시품절</label>
                            </td>
                            <th><span>진열자동로직적용여부</span></th>
                            <td>
                                <input type="radio" id="haazaChem11" name="autoLogicAplYn" value="Y" class="radio" checked>
                                <label for="haazaChem11">적용(자동적용)</label>
                                <input type="radio" id="haazaChem21" name="autoLogicAplYn" value="N" class="radio">
                                <label for="haazaChem21">미적용(진열상태유지)</label>
                            </td>
                        </tr>
                        <tr>
                            <th><span>변경사유</span></th>
                            <td colspan="3"><input type="text" id="chgRsn" name="chgRsn" class="text" style="width:100%" value=""></td>                            
                        </tr>
                    </tbody>
                </table><!-- // table -->

                <div class="grid section-button-list mb0"><!-- 목록 상단 버튼 -->
                    <div class="col-1-2 text-left">
                        <h3 class="title"><span>구매 정보</span></h3>
                    </div>
                    <div class="col-1-2 text-right mt10">
                        <a href="javascript:;" onclick="partnerUpdate(this);" class="button primary small"><span>구매정보 업데이트</span></a>
						구매정보 업데이트 일시: <span id="partnerProductDt">${currentDate.currentDt}</span>
                    </div>
                </div>
				<div class="tableOut" style=" overflow: auto;max-height: 200px;">
	                <table cellspacing="0" class="table-col table-b"><!-- table -->
	                    <colgroup>
	                        <col style="width: auto;">
	                        <col style="width: 10%;">
	                        <col style="width: 10%;">
	                        <col style="width: 20%;">
	                        <col style="width: 10%;">
	                        <col style="width: 7%;">
	                        <col style="width: 7%;">
	                    </colgroup>
	                    <thead>
	                        <tr>
	                            <th>협력사</th>
	                            <th>기준매입가</th>
	                            <th>공급가능여부</th>
	                            <th>가격유효기간</th>
	                            <th>최소주문수량</th>
	                            <th>condition</th>
	                            <th>배송가능지역</th>
	                        </tr>
	                    </thead>
	                    <tbody id="partenerTbody">
	                    	<c:choose>
	                    		<c:when test="${fn:length(partnerProductList) > 0}">
	                    			<c:forEach var="item" items="${partnerProductList}" varStatus="status">
				                        <tr>
				                            <td class="text-left">(${item.cprtcpNo})${item.cprtcpHglNm}</td>
				                            <td class="text-right">${item.prdPrc}</td>
				                            <td>
				                            	${item.splPssYn}
			                            	</td>
				                            <td class="text-left">
												${item.contStrDt}~${item.contEndDt}
			                            	</td>
				                            <td class="text-right">${item.minOrdQty}</td>
				                            <td><a href="javascript:;" onclick="partnerCond(this);" data-id="${item.cprtcpNo}"><img src="/am/img/admin/search_off.png" alt="검색"></a></td>
				                            <td><a href="javascript:;" onclick="partnerPee(this);" data-id="${item.cprtcpNo}"><img src="/am/img/admin/search_off.png" alt="검색"></a></td>
				                        </tr>
			                        </c:forEach>
	                    		</c:when>
	                    		<c:otherwise>
	                    			<tr><td colspan="7">구매 정보가 없습니다.</td></tr>
	                    		</c:otherwise>
	                    	</c:choose>
	                    </tbody>
	                </table>
				</div>
                <div class="grid section-button-list mb0"><!-- 목록 상단 버튼 -->
                    <div class="col-1-2 text-left">
                        <h3 class="title"><span>현재 적용 기준가격 (VAT제외)</span></h3>
                    </div>
                    <div class="col-1-2 text-right mt10">
                        <a href="javascript:;" onclick="priceChangeUpdate();" class="button primary small"><span>가격변동현황</span></a>
                                                      기준판매가 적용일: <span>2021-08-25 14:00</span>
                    </div>
                </div>

                <table cellspacing="0" class="table-col table-b"><!-- table -->
                    <colgroup>
                        <col style="width: 6%;">
                        <col style="width: 11%;">
                        <col style="width: 11%;">
                        <col style="width: 11%;">
                        <col style="width: 11%;">
                        <col style="width: 11%;">
                        <col style="width: 11%;">
                        <col style="width: 13.5%;">
                        <col style="width: auto;">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>구분</th>
                            <th>기준매입가</th>
                            <th>계획매익률</th>
                            <th>SSP기준가</th>
                            <th>List Price</th>
                            <th>시장최저판매가</th>
                            <th>내부최저판매가</th>
                            <th>구매지정판매가</th>
                            <th>기준판매가</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>기능</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><a href="javascript:;" onclick="openPopupPrice();" class="button small"><span>입력</span></a></td>
                            <td><a href="javascript:;" onclick="openPopupPrice();" class="button small"><span>입력</span></a></td>
                            <td><a href="javascript:;" onclick="openPopupLowerPrice();" class="button small"><span>상세보기</span></a></td>
                            <td><a href="javascript:;" onclick="openPopupPrice();" class="button small"><span>입력</span></a></td>
                            <td><a href="javascript:;" onclick="calculationPrice()" class="button small"><span>판매가재계산</span></a></td>
                        </tr>
                        <tr>
                            <th>단가</th>
                            <td class="text-right" id="bssPcprcTxt">
                            	<!-- 기준매입가 -->
                            	<fmt:formatNumber value="${baseInfo.basePrice.bssPcprc}" pattern="#,###" />
                           	</td>
                            <td class="text-right" id="plnBuyrtTxt">
                            	<!-- 계획매입률 -->
                            	<c:if test="${baseInfo.basePrice.plnBuyrt > 0}">${baseInfo.basePrice.plnBuyrt}%</c:if>
                           	</td>
                            <td class="text-right" id="sspStprcTxt">
                            	<!-- ssp기준가 -->
                            	<fmt:formatNumber value="${baseInfo.basePrice.sspStprc}" pattern="#,###" />
                           	</td>
                            <td>
                            	<!--List Price-->
                            	<input type="text" id="lstPrc" name="lstPrc" class="text" style="width:100%" value="" readonly="readonly">
                           	</td>
                            <td>
                            	<!-- 시장최저판매가 -->
                            	<input type="text" id="mrkLwstSelpr" name="mrkLwstSelpr" class="text" style="width:100%" value="" readonly="readonly">
                           	</td>
                            <td id="isdLwstSelprTxt">
                            	<!-- 내부최저판매가 -->
                            	<fmt:formatNumber value="${baseInfo.basePrice.isdLwstSelpr}" pattern="#,###" />
                            </td>
                            <td>
                            	<!-- 구매지정판매가 -->
                            	<input type="text" id="purcDsgnSelpr" name="purcDsgnSelpr" class="text" style="width:100%" value="" readonly="readonly">
                            	
                            	<!--Start 진열테이블 저장 데이터 -->
                            	<input type="hidden" name="bssPcprc" id="bssPcprc" value="${baseInfo.basePrice.bssPcprc}"> <!-- 기준매입가 -->
                            	<input type="hidden" name="plnBuyrt" id="plnBuyrt" value="${baseInfo.basePrice.plnBuyrt}"> <!-- 계획매입률 -->
                            	<input type="hidden" name="sspStprc" id="sspStprc" value="${baseInfo.basePrice.sspStprc}"> <!-- ssp기준가 -->
                            	<input type="hidden" name="isdLwstSelpr" id="isdLwstSelpr" value="${baseInfo.basePrice.isdLwstSelpr}"> <!-- 내부 최저판매가 -->
                            	<input type="hidden" name="bssSelpr" id="bssSelpr" value=""> <!-- 기준판매가 -->
                            	<input type="hidden" name="purcInfoUpdDtm" id="purcInfoUpdDtm" value="${currentDate.currentDate}"> <!-- 구매정보업데이트 일시 -->
                            	<input type="hidden" name="bssSelprAplDtm" id="bssSelprAplDtm" value=""> <!-- 기준판매가 적용일시 -->
                            	<input type="hidden" name="bssPcprcChgDtm" id="bssPcprcChgDtm" value="${currentDate.currentDate}"> <!-- 기준매입가 변경일시 -->
                            	<input type="hidden" name="plnBuyrtChgDtm" id="plnBuyrtChgDtm" value="${baseInfo.basePrice.plnBuyrtChgDtm}"> <!-- 계획매입률 변경일시 -->
                            	<input type="hidden" name="sspStprcChgDtm" id="sspStprcChgDtm" value="${currentDate.currentDate}"> <!-- SSP기준가 변경일시 -->
                            	<input type="hidden" name="isdLwstSelprChgDtm" id="isdLwstSelprChgDtm" value="${baseInfo.basePrice.isdLwstSelprChgDtm}"> <!-- SSP기준가 변경일시 -->
                            	<input type="hidden" name="bssSelprChgDtm" id="bssSelprChgDtm" value=""> <!-- SSP기준가 변경일시 -->
                            	<!--End 진열테이블 저장 데이터 -->
                            	
                            	<!--Start 예외판매가 이력 저장 데이터 -->
                            	
                            	<!--End 예외판매가 이력 저장 데이터 -->
                           	</td>
                            <td class="text-right" id="bssSelprTxt">
                            	
                           	</td>
                        </tr>
                        <tr style="display:none;">
                            <th>변경일</th>
                            <td class="text-right">2021-03-05</td>
                            <td class="text-right">2021-01-01</td>
                            <td class="text-right">2021-03-05</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="7" class="text-right">기준판매가 유효기간</td>
                            <td colspan="2" class="text-left">
                                <a href="#!" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
                                <input type="text" class="text date small" title="날짜 입력" name="bssSelprStrDtm" value="<fmt:formatDate value="${dateString}" pattern="yyyy-MM-dd" />" placeholder="2021-01-01" min="2015-11-01" max="2011-01-01" data-min="2015-11-01" data-max="9999-12-31">
                                <em>~</em>             
                                <a href="#!" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>                   
                                <input type="text" class="text date small" title="날짜 입력" name="bssSelprEndDtm" value="9999-12-31" placeholder="2021-11-01" min="2015-11-01" max="2011-01-01" data-min="2015-11-01" data-max="9999-12-31">
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="section-title mt30"><!-- section-title -->
                    <h3 class="title"><span>기획전 대상 여부</span></h3>
                </div><!-- // section-title -->

                <table cellspacing="0" class="table-col table-b"><!-- table -->
                    <colgroup>
                        <col style="width: 40%;">
                        <col style="width: auto;">
                        <col style="width: 40%;">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>기획전명</th>
                            <th>기획전 기간</th>
                            <th>적용 쿠폰</th>
                        </tr>
                    </thead>
                    <tbody>
                    	<c:choose>
                    		<c:when test="${fn:length(planList) > 0}">
                    			<c:forEach var="item" items="${planList}" varStatus="status">
			                        <tr>
			                            <td class="text-left">${item.plnMstTitle }</td>
			                            <td>
			                            	<fmt:parseDate var="plnMstStDt2" value="${item.plnMstStDt}" pattern="yyyyMMdd" />
			                            	<fmt:parseDate var="plnMstEdDt3" value="${item.plnMstEdDt}" pattern="yyyyMMdd" />
			                            	<fmt:formatDate value="${plnMstStDt2}"  pattern="yyyy-MM-dd" /> ~ <fmt:formatDate value="${plnMstEdDt3}"  pattern="yyyy-MM-dd" />
		                            	</td>
			                            <td class="text-left">(${item.cpnMstIdx}) ${item.cpnMstTitle}</td>
			                        </tr>
		                        </c:forEach>
                    		</c:when>
                    		<c:otherwise>
                    			<tr><td colspan="7">대상 기획전이 없습니다.</td></tr>
                    		</c:otherwise>
                   		</c:choose>
                    </tbody>
                </table>     

                <div class="section-title mt30"><!-- section-title -->
                    <h3 class="title"><span>상품 Condition 정보</span></h3>
                </div><!-- // section-title -->

                <table cellspacing="0" class="table-row table-a mb30"><!-- table -->
                    <colgroup>
                        <col style="width: 15%; min-width:180px;"/>
                        <col style="width: 10%;" />
                        <col style="width: auto;" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th><span>Condition</span></th>
                            <td>
                                <select id="conditionOption" class="select">
                                    <option selected="selected" value="fee" >배송비</option>
                                    <option value="unit" >물량할인</option>
                                </select>
                            </td>
                            <td>
                                <a href="javascript:;" onclick="conditionAdd();" class="button small primary"><span>Condition 추가</span></a>
                                <a href="javascript:;" onclick="conditionHistory();" class="button small"><span>Condition 이력 조회</span></a>
                            </td>
                        </tr>
                    </tbody>
                </table><!-- // table -->
				
				<div class="feeSale" style="display:show;">
					배송비
	                <div class="grid section-button-list text-right"><!-- 목록 상단 버튼 -->
	                	<a href="javascript:;" onclick="feeDelete();" class="button warning small"><span>삭제</span></a>
	                    <a href="javascript:;" onclick="feeRowAdd();" class="button small"><span>+ Add Row</span></a>
	                </div>
	                <table cellspacing="0" class="table-col table-b"><!-- table -->
	                    <colgroup>
	                        <col style="width: 10%;">
	                        <col style="width: 10%;">
	                        <col style="width: 11%;">
	                        <col style="width: 11%;">
	                        <col style="width: 11%;">
	                        <col style="width: 6%;">
	                        <col style="width: 15%;">
	                        <col style="width: 15%;">
	                        <col style="width: auto;">
	                    </colgroup>
	                    <thead>
	                        <tr>
	                            <th>유형</th>
	                            <th>구분</th>
	                            <th>수량(From)</th>
	                            <th>수량(To)</th>
	                            <th>할증금액</th>
	                            <th>통화</th>
	                            <th>기간(From)</th>
	                            <th>기간(To)</th>
	                            <th>삭제</th>
	                        </tr>
	                    </thead>
	                    <tbody id="feeTbody">
	                        <tr>
	                            <td>수량</td>
	                            <td>
	                                <select name="sprCds" id="sprCds" title="" class="select" style="width:100%;">
	                                    <option selected="selected" value="3136">일반</option>
	                                    <option selected="selected" value="3137">배수주문</option>
	                                </select>
	                            </td>
	                            <td><input type="text" id="ipt301" name="feeStrQtys" class="text" style="width:100%" value=""></td>
	                            <td><input type="text" id="ipt302" name="feeEndQtys" class="text" style="width:100%" value=""></td>
	                            <td><input type="text" id="ipt303" name="feeExtrAmts" class="text" style="width:100%" value=""></td>
	                            <td>
	                            	KRW
	                            	<input type="hidden" name="prcCurUntCd" value="KRW">
                            	</td>
	                            <td>
	                                <a href="#!" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
	                                <input type="text" class="text date small" name="feeStrDtm" title="날짜 입력" value="<fmt:formatDate value="${dateString}" pattern="yyyy-MM-dd" />" placeholder="2021-01-01" min="2015-11-01" max="2011-01-01" data-min="2015-11-01" data-max="9999-12-31">
	                            </td>
	                            <td>
	                                <a href="#!" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>                   
	                                <input type="text" class="text date small" name="feeEndDtm" title="날짜 입력" value="9999-12-31" placeholder="2021-11-01" min="2015-11-01" max="2011-01-01" data-min="2015-11-01" data-max="9999-12-31">
	                            </td>
	                            <td><a href="javascript:;" onclick="rowDelete(this)" class="button small"><span>삭제</span></a></td>
	                        </tr>
	                    </tbody>
	                </table>
				</div>
				
				<div class="unitSale" style="display:show;">
					물량할인 
	                <div class="grid section-button-list text-right"><!-- 목록 상단 버튼 -->
	                	<a href="javascript:;" onclick="unitDelete()" class="button warning small"><span>삭제</span></a>
	                    <a href="javascript:;" onclick="unitRowAdd();" class="button small"><span>+ Add Row</span></a>
	                </div>
	                <table cellspacing="0" class="table-col table-b"><!-- table -->
	                    <colgroup>
	                        <col style="width: 15%;">
	                        <col style="width: 15%;">
	                        <col style="width: 15%;">
	                        <col style="width: 6%;">
	                        <col style="width: 15%;">
	                        <col style="width: 15%;">
	                        <col style="width: auto;">
	                    </colgroup>
	                    <thead>
	                        <tr>
	                            <th>물량(From)</th>
	                            <th>물량(To)</th>
	                            <th>할인금액</th>
	                            <th>통화</th>
	                            <th>기간(From)</th>
	                            <th>기간(To)</th>
	                            <th>삭제</th>
	                        </tr>
	                    </thead>
	                    <tbody id="unitTbody">
	                        <tr>
	                            <td><input type="text" id="ipt301" name="unitStrQtys" class="text" style="width:100%" value=""></td>
	                            <td><input type="text" id="ipt302" name="unitEndQtys" class="text" style="width:100%" value=""></td>
	                            <td><input type="text" id="ipt303" name="unitExtrAmts" class="text" style="width:100%" value=""></td>
	                            <td>
	                            	KRW
                            	</td>
	                            <td>
	                                <a href="#!" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
	                                <input type="text" class="text date small" title="날짜 입력" name="unitStrDtm" value="<fmt:formatDate value="${dateString}" pattern="yyyy-MM-dd" />" placeholder="2021-01-01" min="2015-11-01" max="2011-01-01" data-min="2015-11-01" data-max="9999-12-31"  value="9999-12-31">
	                            </td>
	                            <td>
	                                <a href="#!" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>                   
	                                <input type="text" class="text date small" title="날짜 입력" name="unitEndDtm" value="9999-12-31" placeholder="2021-11-01" min="2015-11-01" max="2011-01-01" data-min="2015-11-01" data-max="9999-12-31">
	                            </td>
	                            <td><a href="javascript:;" onclick="rowDelete(this)" class="button small"><span>삭제</span></a></td>
	                        </tr>
	                    </tbody>
	                </table>
				</div>
                <div class="section-button"><!-- section-button -->
                    <div class="wrap text-center">                        
                        <a href="javascript:;" class="button large"><span>취소</span></a>
                        <a href="javascript:;" class="button large primary"><span>등록</span></a>
                    </div>
                </div>
				
                </form>
                
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
<script src="<c:out value="${serverDomain}" />/am/js/vendor/jquery.tmpl.min.js"></script>
<script>

$(function(){
	
	partnerCond = function(param){
		alert("파트너 COND 팝업준비중" + $(param).data("id"))
	};
	
	partnerPee = function(param){
		alert("파트너 배송비 팝업준비중" + $(param).data("id"))
	};
	
	partnerUpdate = function(){
		//alert("구매정보 업데이트");
		var prdId = $("#frm").find("#prdId").val();
		$.ajax({
			async : false,
			type : "POST",
			 data : { "prdId": prdId },
			url : "<c:out value="${serverDomain}" />"+"/am/prc/dspMng/selectPartnerProductList.json",
			success : function (data)
			{
				console.log("성공!!" + data.partnerProductList.length);
				$("#partenerTbody").empty();
				$("#partnerProductTemplate").tmpl(data.partnerProductList).appendTo("#partenerTbody");
				
				//구매정보 업데이트 일시 변경
				$("#partnerProductDt").html(data.currentDate.currentDt);
				$("#purcInfoUpdDtm").val(data.currentDate.currentDate);
				
			},
			error : function (err)
			{
				alert("오류가 발생하였습니다.\n[" + err.status + "]");
			}
		});
		
	};
	
	priceChangeUpdate = function(){
		alert("가격변동현황 업데이트");
	};
	
	conditionAdd = function(){
		//Condition 추가
		var option = $("#conditionOption").val();
		
		if(option == "fee"){
			//배송비 선택
			$(".feeSale").show();
			if($("#feeTbody").find("tr").length < 1){
				$("#feeTemplate").tmpl().appendTo("#feeTbody");				
			}
			
		}else if(option == "unit"){
			//물량할인 선택
			$(".unitSale").show();
			if($("#unitTbody").find("tr").length < 1){
				$("#unitTemplate").tmpl().appendTo("#unitTbody");
			}
		}
		
	};
	
	//배송비, 물량할인 row삭제
	rowDelete = function(param){
		$(param).parents("tr").remove();
	};
	
	conditionHistory = function(){
		alert("컨디션 히스토리 테이블");
	};
	
	feeRowAdd = function(){
		$("#feeTemplate").tmpl().appendTo("#feeTbody");
	};
	
	unitRowAdd = function(){
		$("#unitTemplate").tmpl().appendTo("#unitTbody");
	};
	
	feeDelete = function(){
		if(confirm("배송비를 삭제 하시겠습니까?")){
			$(".feeSale").hide();
			$("#feeTbody").empty();;
		};
	};
	
	unitDelete = function(){
		if(confirm("물량할인을 삭제 하시겠습니까?")){
			$(".unitSale").hide();
			$("#unitTbody").empty();;
		};
	};
	
	//List Price, 시장최저가, 구매지정판매가 선택팝업
	openPopupPrice = function(param){
		alert("가격입력 팝업")
		
	};
	
	//기준판매가 계산 버튼
	calculationPrice = function(param){
		if(confirm("반드시 구매정보 업데이트 후 실행하시기 바랍니다. 기준판매가를 재계산 하시겠습니까?")){
			
		}
	};
	
	//내부 최저 판매가
	openPopupLowerPrice = function(param){
		alert("내부최저판매가 팝업")
	};
	
});

function fnResultExceptPrice(param){
	alert("예외판매가 팝업");
}
//-->
</script>
<!-- Condition 배송비 -->
<script id="feeTemplate" type="text/x-jquery-tmpl">
<tr>
    <td>수량</td>
    <td>
        <select name="sprCds" id="sprCds" title="" class="select" style="width:100%;">
            <option value="3136" selected="selected" >일반</option>
            <option value="3137">배수주문</option>
        </select>
    </td>
    <td><input type="text" id="ipt301" name="feeStrQtys" class="text" style="width:100%" value=""></td>
    <td><input type="text" id="ipt302" name="feeEndQtys" class="text" style="width:100%" value=""></td>
    <td><input type="text" id="ipt303" name="feeExtrAmts" class="text" style="width:100%" value=""></td>
    <td>
    	KRW
    	<input type="hidden" name="prcCurUntCd" value="KRW">
	</td>
    <td>
        <a href="#!" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
        <input type="text" class="text date small" name="feeStrDtm" title="날짜 입력" value="<fmt:formatDate value="${dateString}" pattern="yyyy-MM-dd" />" placeholder="2021-01-01" min="2015-11-01" max="2011-01-01" data-min="2015-11-01" data-max="9999-12-31">
    </td>
    <td>
        <a href="#!" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>                   
        <input type="text" class="text date small" name="feeEndDtm" value="9999-12-31" title="날짜 입력" placeholder="2021-11-01" min="2015-11-01" max="2011-01-01" data-min="2015-11-01" data-max="9999-12-31">
    </td>
    <td><a href="javascript:;" onclick="rowDelete(this)" class="button small"><span>삭제</span></a></td>
</tr>
</script>
<!-- Condition 물량할인 -->
<script id="unitTemplate" type="text/x-jquery-tmpl">
<tr>
    <td><input type="text" id="ipt301" name="unitStrQtys" class="text" style="width:100%" value=""></td>
    <td><input type="text" id="ipt302" name="unitEndQtys" class="text" style="width:100%" value=""></td>
    <td><input type="text" id="ipt303" name="unitExtrAmts" class="text" style="width:100%" value=""></td>
    <td>
    	KRW
	</td>
    <td>
        <a href="#!" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
        <input type="text" class="text date small" title="날짜 입력" name="unitStrDtm" value="<fmt:formatDate value="${dateString}" pattern="yyyy-MM-dd" />" placeholder="2021-01-01" min="2015-11-01" max="2011-01-01" data-min="2015-11-01" data-max="9999-12-31">
    </td>
    <td>
        <a href="#!" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>                   
        <input type="text" class="text date small" title="날짜 입력" name="unitEndDtm" value="9999-12-31" placeholder="2021-11-01" min="2015-11-01" max="2011-01-01" data-min="2015-11-01" data-max="9999-12-31">
    </td>
    <td><a href="javascript:;" onclick="rowDelete(this)" class="button small"><span>삭제</span></a></td>
</tr>
</script>

<script id="partnerProductTemplate" type="text/x-jquery-tmpl">
 <tr>
    <td class="text-left">(\${cprtcpNo})\${cprtcpHglNm}</td>
    <td class="text-right">
		\${prdPrc}
	</td>
    <td>
    	\${splPssYn}  
	</td>
    <td class="text-left">
    	\${contStrDt}~\${contEndDt}
	</td>
    <td class="text-right">\${minOrdQty}</td>
    <td><a href="javascript:;" onclick="partnerCond(this);" data-id="\${cprtcpNo}"><img src="/am/img/admin/search_off.png" alt="검색"></a></td>
    <td><a href="javascript:;" onclick="partnerPee(this);" data-id="\${cprtcpNo}"><img src="/am/img/admin/search_off.png" alt="검색"></a></td>
</tr>
</script>

</body>
</html>
