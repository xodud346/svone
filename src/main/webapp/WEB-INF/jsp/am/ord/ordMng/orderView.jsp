<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<style type="text/css">
/* 테이블 스크롤*/
#tableDiv {
	width: 100%;
	overflow: auto;
}

#tableDiv .listTable {
	white-space: nowrap;
	border-collapse: collapse;
}
</style>
</head>
<!-- body class, 중요 -->
<body>
	<div id="header">
		<!-- header -->
		<%@ include file="/WEB-INF/jsp/am/include/top.jsp"%>
	</div>
	<!-- // header -->
	<div id="container">
		<!-- container -->
		<div id="aside" class="aside left">
			<!-- aside -->
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp"%>
		</div>
		<!-- // aside -->
		<div id="wrapper">
			<!-- wrapper -->
			<div id="breadcrumb"></div>
			<!-- breadcrumb -->

			<div id="contents">
				<!-- contents -->
				<div class="container">

					<h2 class="title">
						<span>주문관리</span>
					</h2>
						<!-- section-title -->
						<h3 class="title">
							<span>조회</span>
						</h3>

					<!-- // section-title -->
					<form id="searchForm" name="searchForm">
						<input type="hidden" name="searchYn" id="searchYn" value="${commandMap.searchYn }"/>
						<input type="hidden" id="cPage" name="cPage" value="${paging.cPage }"/>
						<input type="hidden" id="pageSize" name="pageSize" value="${paging.pageSize }"/>
						<table class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: auto;"/>
								<col style="width: 10%;" />
								<col style="width: auto;"/>
								<col style="width: 10%;" />
								<col style="width: auto;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>운영단위<i class="require"><em>필수입력</em></i></span></th>
									<td>
										<label><input type="text" class="text required" name="oprUntNm" id="oprUntNm" readonly value=""/></label>
										<input type="hidden" name="oprUntId" id="oprUntId" value="" /> 
										<a href="javascript:oprUntMultiPopup('searchForm');" class="icon search2"></a>
										<a href="javascript:multiTextPopup('oprUntId');" class="icon doc textPopup"></a>
									</td>
									<th><span>주문 번호<i class="require"><em>필수입력</em></i></span></th>
									<td>
										<label><input type="text" name="odrNo" id="odrNo" class="text required" value="" /></label>
										<!-- <a href="#" class="icon search2"></a> -->
										<a href="javascript:orderNumberPopupForm('searchForm');" class="icon search2"></a> 
										<a href="javascript:multiTextPopup('odrNo');" class="icon doc textPopup"></a>
									</td>
									<th><span>주문 상태</span></th>
									<td>
										<label><input type="text" name="odrStatsNm" id="odrStatsNm" class="text searchCode" value=""/></label>										<!-- show area -->
										<!-- <input type="text" name="dtlCdNm" class="text searchCode" value="" readonly /> -->
										<a href="javascript:fnOrdPopUp('ZSTATUS03','odrStats');" class="icon search2 codePopup"></a>
										<a href="javascript:multiTextPopup('odrStatsCd');" class="icon doc textPopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="odrStatsCd" id="odrStatsCd" class="text searchCode" />
									</td>
								</tr>
								<tr>
									<th><span>고객 유형</span></th>  <!-- id , name 임시값 -->
									<td>
										<select class="select" name="" id="">
                                            <option value=""selected="selected">전체</option>
                                            <option value="01">계약</option>
                                            <option value="02">일반</option>
										</select>
									</td>
									<th><span>Cat.Killer</span></th>  <!-- id , name 임시값 -->
									<td>
										<select class="select" name="cat" id="">
                                            <option value=""selected="selected">전체</option>
                     						<option value="01">SSP</option>
                                            <option value="02">R&D</option>
                                            <option value="03">판촉물</option>
                                            <option value="04">도면</option>
                                            <option value="05">가공</option>
                                            <option value="06">포장솔루션</option>
										</select>
									</td>
									<th><span>상품 ID</span></th>
									<td>
										<label><input type="text" name="prdId" id="prdId" value="" class="searchCode" /></label>
										<input type="hidden" name="prdNm" id="prdNm" class="text searchCode" value=""/>
										<a href="javascript:productPopup('searchForm');" class="icon search2"></a>
										<a href="javascript:multiTextPopup('prdId');" class="icon doc textPopup"></a>										
									</td>
								</tr>
								<tr>
									<th><span>발주 오류 대상</span></th> <!-- id , name 임시값 -->
									<td>
										<input type="radio" class="radio" name="bchDlvYn" id="bchDlvYn_A" value=""checked="checked"  />
										<label for="bchDlvYn_A">전체</label>
										<input type="radio" class="radio" name="bchDlvYn" id="bchDlvYn_Y" value="Y" />
										<label for="bchDlvYn_Y">사용</label>
										<input type="radio" class="radio" name="bchDlvYn" id="bchDlvYn_N" value="N"/>
										<label for="bchDlvYn_N">미사용</label>
									</td>
									<th><span>조회 기간</span></th>
	                                    <td colspan="3">
	                                          <select class="select " name="selDateSearch" id="selDateSearch">
	                                            <option value="odrReqDtm" >주문생성일</option>
	                                            <option value="salsDocCrtDtm">S/O생성일</option>
	                                            <option value="dlvCmplDtm">배송완료일</option>
	                                            <option value="isdOrdDcnDtm">발주완료일</option>
	                                        </select>
	                                        <a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a> 
	                                        <input type="text" class="text small" id="searchStartDate" name="searchStartDate" value="${commandMap.searchStartDate}" readonly="readonly" data-target-end="#searchEndDate" placeholder="YYYY-MM-DD" />
	                                        ~
	                                        <a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
	                                        <input type="text" class="text small" id="searchEndDate" name="searchEndDate" value="${commandMap.searchEndDate}" readonly="readonly" data-target-start="#searchStartDate" placeholder="YYYY-MM-DD"/>
	                                        <select id="dateSet" name="dateSet" class="select small">
	                                        	<option value="all" >전체</option>
	                                            <option value="1w" selected="selected">1주일</option>
	                                            <option value="2w">2주일</option>
	                                            <option value="1m">1개월</option>
	                                            <option value="3m">3개월</option>
	                                            <option value="6m">6개월</option>
	                                            <option value="1y">1년</option>
	                                        </select>
	                                    </td>
									</tr>
									</tbody>
									<!-- 상세조회  start -->
									<tbody id="orderSearchDetail" style="display: none;">
										<tr>
											<th><span>서비스팀</span></th>
											<td>
												<label><input type="text" name="serviceOrgNm" id="serviceOrgNm" class="text searchCode" value="" /></label>
												<a href="javascript:memOprtrOrgSinglePopup('searchForm','svcTeamCd');" class="icon search2 codePopup"></a>
												<!-- hidden area -->
												<!-- titleTxt value로 팝업 타이틀 설정(서비스, 운영...) // default: 부서/팀 -->
												<input type="hidden" name="titleTxt" value="서비스팀" class="searchCode" />
												<input type="hidden" name="coCd" value="1000" class="searchCode" />
												<input type="hidden" name="svcTeamCd" id="svcTeamCd" value="" class="searchCode" />
											</td>
											<th><span>영업 담당</span></th>
											<td>
												<label><input type="text" name="salsChrCd" id="salsChrCd" class="text searchCode" value=""/></label>
												<a href="javascript:commingSoon();" class="icon search2"></a>
												<input type="hidden" name="salsChrNm" value="" class="searchCode" />
											</td>
											<th><span>영업팀</span></th>
											<td>
												<label><input type="text" name="salsTeamCd" id="salsTeamCd" class="text searchCode" value=""/></label>
												<a href="javascript:commingSoon();" class="icon search2"></a>
												<input type="hidden" name="salsTeamNm" id="salsTeamNm" value="" class="searchCode" />
											</td>
										</tr>
										<tr>
											<th><span>부서 ID</span></th>
											<td>
												<label><input type="text" name="deptId" id="deptId" class="text searchCode" value=""/></label>
												<a href="javascript:commingSoon();" class="icon search2"></a>
												<a href="javascript:multiTextPopup('deptId');" class="icon doc textPopup"></a>
											</td>
											<th><span>배송 형태</span></th>
											<td>
			              						<select class="select " name="dlvFormSprCd" id="dlvFormSprCd">
                                                    <option value="" selected="selected">전체</option> 
                                                    <c:if test="${not empty dlvFormList}">
														<c:forEach var="list" items="${dlvFormList}" varStatus="status"> 
	                                                    	<option value="${list.dtlCd}">${list.dtlCdNm}</option>                               				
														</c:forEach>
													</c:if>                                  
												</select>
											</td>
											<th><span>거래명세서</span></th>
											<td>
												<label><input type="text" name="goTxnStmNo" id="goTxnStmNo" class="text" value=""/></label>
												<a href="javascript:multiTextPopup('goTxnStmNo');" class="icon doc textPopup"></a>												
											</td>
										</tr>
										<tr>
											<th><span>사업장</span></th>
											<td>
												<input type="hidden" name="bzplcId" value="" class="searchBzplc"  />
												<label><input type="text" name="bzplcNm" class="text searchBzplc" value="" /></label>
												<a href="javascript:fnOneBzplcResult('searchForm');" class="icon search2 bzplcPopup"></a>
											</td>
											<th><span>주문자</span></th>
											<td>
												<input type="hidden" name="odrpsnId" id="odrpsnId" value="" />
												<label><input type="text" name="odrpsnNm" id="odrpsnNm" class="text" value=""/></label>
												<!-- <a href="#" class="icon search2"></a> -->
												<a href="javascript:orderMemPopupForm('searchForm');" class="icon search2"></a>
												<a href="javascript:multiTextPopup('odrpsnNm');" class="icon doc textPopup"></a>												
											</td>
											<th><span>배송 완료 여부</span></th> <!-- 임시 하드코딩 -->
											<td>
			              						<select class="select " name="dlvComStatus" id="dlvComStatus">
                                                    <option value="">전체</option>
                                                    <option value="Y">완료</option>
                                                    <option value="E">주문 예외</option>
                                                    <option value="N">미 완료</option>
												</select>
											</td>
										</tr>
										<tr>
											<th><span>정산/반품 구분</span></th> 
											<td>
												<input type="radio" id="nrmlRtngdsSprCd_A" name="nrmlRtngdsSprCd" class="radio"  value="" checked="checked"  />
												<label for="nrmlRtngdsSprCd_A">전체</label>
												<input type="radio" id="nrmlRtngdsSprCd_Y" name="nrmlRtngdsSprCd" class="radio"value="N"/>
												<label for="nrmlRtngdsSprCd_Y">정상</label>
												<input type="radio" id="nrmlRtngdsSprCd_N" name="nrmlRtngdsSprCd" class="radio" value="R"/>
												<label for="nrmlRtngdsSprCd_N">반품</label>
											</td>
											<th><span>입고 플랜트</span></th>
											<td>
												<label><input type="text" name="giPlntNm" id="giPlntNm" class="text searchCode" value=""/></label>
												<a href="javascript:fnOrdPlanPopUp('giPlnt');" class="icon search2 codePopup" ></a>		
												<input type="hidden" name="giPlntId" value="" class="searchCode" />	
																																			
											</td>
											<th><span>출고 플랜트</span></th>
											<td>
												<label><input type="text" name="goPlntNm" id="goPlntNm" class="text searchCode" value=""/></label>
												<a href="javascript:fnOrdPlanPopUp('goPlnt');" class="icon search2 codePopup" ></a>
												<input type="hidden" name="goPlntId" value="" class="searchCode" />	
											</td>
										</tr>
										<tr>
											<th><span>정산 상태</span></th>
											<td>
												<input type="radio" id="adjStatNm_A" name="adjStatNm" class="radio"  value=""checked="checked"  />
												<label for="adjStatNm_A">전체</label>
												<input type="radio" id="adjStatNm_Y" name="adjStatNm" class="radio"value="Y"/>
												<label for="adjStatNm_Y">완료</label>
												<input type="radio" id="adjStatNm_N" name="adjStatNm" class="radio" value="N" />
												<label for="adjStatNm_N">미 완료</label>
											</td>
											<th><span>주문 Block</span></th>
											<td>
												<label><input type="text" name="odrTmpLockNm" id="odrTmpLockNm" class="text searchCode" value=""/></label>										<!-- show area -->
												<a href="javascript:fnOrdPopUp('ZDABGRU','odrTmpLock');" class="icon search2 codePopup"></a>
											<!-- 	<input type="text" name="dtlCdNm" class="text searchCode" value="" readonly /> -->
												<!-- hidden area -->
												<input type="hidden" name="langCd" value="KO" class="searchCode" />
												<input type="hidden" name="clsCd" id="odrKey" value="ZDABGRU" class="searchCode" />
												<input type="hidden" name="odrTmpLockCd" id="odrTmpLockCd" value="" class="searchCode" />
											</td>
											<th><span>결제 수단</span></th> 
											<td>
												<input type="radio" id="stlMeanCd_A" name="stlMeanCd" class="radio"  value="" checked="checked" />
												<label for="stlMeanCd_A">전체</label>
												<input type="radio" id="stlMeanCd_P012" name="stlMeanCd" class="radio"value="P012"/>
												<label for="stlMeanCd_P012">월 정산</label>
												<input type="radio" id="stlMeanCd_P005" name="stlMeanCd" class="radio" value="P005"/>
												<label for="stlMeanCd_P005">신용카드</label>
											</td>
										</tr>
										<tr>
											<th><span>협력사 ID</span></th>
											<td>
												<label><input type="text" name="cprtcpId" id="cprtcpId" class="text" value=""/></label>
												<!-- <a href="javascript:();" class="icon search2" ></a> -->
											</td>
											<th><span>발주 번호</span></th>
											<td>
												<label><input type="text" name="ordItmNo" id="ordItmNo" class="text" value=""/></label>
												<!-- <a href="#" class="icon search2" ></a> -->
												<a href="javascript:orderPlacingNumPopupForm('searchForm');" class="icon search2" ></a>
												<a href="javascript:multiTextPopup('ordItmNo');" class="icon doc textPopup"></a>															
											</td>
											<th><span>계정 ID</span></th>
											<td>
												<label><input type="text" name="acctId" id="acctId" class="text" value=""/></label>
												<!-- <a href="javascript:();" class="icon search2" ></a> -->
											</td>
										</tr>
										<tr>
											<th><span>비용 이체 부서</span></th>
											<td>
												<input type="hidden" name="expTrnsfDeptId" id="expTrnsfDeptId" value=""/>
												<label><input type="text" name="expTrnsfDeptNm" id="expTrnsfDeptNm" class="text" value="" /></label>
												<!-- <a href="javascript:();" class="icon search2"></a> -->
											</td>
											<th><span>Closing</span></th>
											<td>
												<input type="radio" id="saleCloseYn_A" name="saleCloseYn" class="radio" value="" checked="checked" />
												<label for="saleCloseYn_A">전체</label>
												<input type="radio" id="saleCloseYn_Y" name="saleCloseYn" class="radio" value="Y"/>
												<label for="saleCloseYn_Y">대상</label>
												<input type="radio" id="saleCloseYn_N" name="saleCloseYn" class="radio" value="N"/>
												<label for="saleCloseYn_N">제외</label>
											</td>
											<th><span>고객사 PO 번호</span></th>
											<td>
												<label><input type="text" name="custPurcOdrNo" id="custPurcOdrNo" class="text" value=""/></label>
												<a href="javascript:multiTextPopup('custPurcOdrNo');" class="icon doc textPopup"></a>	
											</td>
										</tr>
									<!-- 상세조회  end -->
								</tbody>
							</table>
						</form>
						<!-- 버튼 -->
					<div class="grid section-button-search">
						<div class="col- text-left">
							<a href="javascript:orderSearchDetailBtn()" class="button small"><span id="btnText">상세조회펼치기</span></a>
						</div>
							<a href="javascript:goReset();" class="button small"><span>초기화</span></a>
							<a href="javascript:goList();" class="button small primary" id=""><span>조회</span></a>
					</div>
						<br>
						<br>
						<!-- 목록 start -->
						<h3 class="title">
							<span>목록</span>
						</h3>
						<div id= "orderList">
							<%@ include file="/WEB-INF/jsp/am/ord/ordMng/orderList.jsp" %>
						</div>
				</div><!-- // container -->
			</div><!-- // contents -->
		</div><!-- // wrapper -->
	<!-- quickmenu-->
<div id="quickmenu" class="aside right"><%@ include file="/WEB-INF/jsp/am/include/quick.jsp"%></div><!-- // quickmenu -->
</div><!-- // container -->
<div id="footer"><%@ include file="/WEB-INF/jsp/am/include/footer.jsp"%></div><!-- footer-->
<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
<!--  스크립트 -->
<script>
	$(function(){

		var $frm = $("#frm");
		var $searchForm = $("#searchForm");

		// 주문조회 상세페이지 팝업
		orderDetail = function (){
			//popup('',"1200","800","no","_orderDetailPopup");
			//$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/ord/ordMng/orderDetailPopup.do", "target":"popup_orderDetailPopup", "method":"post"}).submit();
			alert("준비중 입니다."); 
		}

		// 주문번호 조회 팝업 폼
		orderNumberPopupForm = function (searchForm){
			popup('', "500", "700", "yes","_orderNumberPopupForm");
			$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/ord/ordMng/orderNumberPopupForm.do", "target":"popup_orderNumberPopupForm", "method":"post"}).submit();
		}
		
		// 주문자 조회 팝업 폼
		orderMemPopupForm = function (searchForm){
			//popup('', "600", "700", "yes","_orderMemPopupForm");
			//$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/ord/ordMng/orderMemPopupForm.do", "target":"popup_orderMemPopupForm", "method":"post"}).submit(); 
			alert("준비중 입니다."); 
		}
		
		// 발주 번호 조회 팝업 폼
		orderPlacingNumPopupForm = function (searchForm){
			//popup('', "800", "700", "yes","_orderPlacingNumPopupForm");
			//$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/ord/ordMng/orderPlacingNumPopupForm.do", "target":"popup_orderPlacingNumPopupForm", "method":"post"}).submit();
			alert("준비중 입니다."); 
		}

		// 멀티텍스트 팝업 
		fnResultText = function(data) {
			if(data){
				// 초기화
				$("#"+data.id).val("");

				// 값 설정
				$("#"+data.id).val(data.data);
			}
		}
		// 운영단위 조회 팝업 callback
		fnOprUntMultiCallback = function(eleId, params){
			// 초기화
			$("#oprUntId").val("");
			$("#oprUntNm").val("");

			var id = ''
			,	nm = '';

			$.each(params, function(idx, data){
				if(idx != 0){
					id += ',';
					nm += ',';
				}
				id += data.id;
				nm += data.nm;
			});
			// 값 설정
			$("#oprUntId").val(id);
			$("#oprUntNm").val(nm);
		}
		
		// 사업장 조회 팝업  callback
		fnOneBzplcResultCallback =  function(data) {
			console.log('data',data);
			// 초기화
			$searchForm.find("input[name=bzplcId]").val("");
			$searchForm.find("input[name=bzplcNm]").val("");

			// 값 설정
			if(data){
				$searchForm.find("input[name=bzplcId]").val(data.BZPLC_ID);
				$searchForm.find("input[name=bzplcNm]").val(data.BZPLC_NM);
			}
		}
		
		// 서비스팀 조회 팝업 callback
		fnMemOprtrOrgResultCallback = function(eleId,data) {
			console.log('fnMemOprtrOrgResultCallback',eleId,data);
			// 초기화
			$searchForm.find("input[name=svcTeamCd]").val("");
			$searchForm.find("input[name=serviceOrgNm]").val("");

			// 값 설정
			$searchForm.find("input[name=svcTeamCd]").val(data.ORG_CD);
			$searchForm.find("input[name=serviceOrgNm]").val(data.ORG_NM);
		}
		
		// 주문Block, 주문상태 조회 팝업 callback
		fnCommonCodeMultiCallback = function(eleId, data) {
			console.log('fnCommonCodeMultiCallback',eleId,data);
			var id = ''
			,	nm = '';
			$.each(data, function(idx, item){
				if(idx != 0){
					id += ',';
					nm += ',';
				}
				id += item.id;
				nm += item.nm;
			});
			
			// 값 설정
			$searchForm.find("input[name="+eleId+"Cd]").val(id);
			$searchForm.find("input[name="+eleId+"Nm]").val(nm);
		}
		
		// 입고, 출고 플랜트 조회 팝업 callback
		fnPlantResultCallback = function(eleId,data) {
			console.log('fnPlantResultCallback',eleId,data);
			// 초기화
			$searchForm.find("input[name="+eleId+"Cd]").val("");
			$searchForm.find("input[name="+eleId+"Nm]").val("");

			// 값 설정
			$searchForm.find("input[name="+eleId+"Cd]").val(data.PLNT_ID);
			$searchForm.find("input[name="+eleId+"Nm]").val(data.PLNT_NM);
		}
		
		// 주문상태 , 주문 Block 공통팝업 조회
		 fnOrdPopUp = function(key,eleId){
			$('#odrKey').val(key);
			commonCodeMultiPopup('searchForm',eleId)
			}
		
		// 입고, 출고 플랜트 공통팝업 조회
		fnOrdPlanPopUp = function(eleId){
			plantSinglePopup('searchForm',eleId);
			}
		
		//주문번호조회 팝업
		fnResultOdrNo = function(params){
			// 초기화
			$searchForm.find("input[name=odrNo]").val("");

			var no = '';

			$.each(params, function(idx, item){
				if(idx != 0){
					no += ',';
				}
				no += item.NO;
			});
			// 값 설정
			$("#searchForm").find("input[name=odrNo]").val(no);
			$("#odrNo").val(no);
		}
		
        // 주문 생성일 조회 날짜 스크립트
	   	fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -7, 0, 0, 0, '-');
        $("#dateSet").change(function(){
            var dateVal = $(this).val();
            
			if (dateVal == "all"){
				$("#searchStartDate").val("");
				$("#searchEndDate").val("");
        	}else if(dateVal == "1w"){
                fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -7, 0, 0, 0, '-');
            } else if(dateVal == "2w"){
                fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -14, 0, 0, 0, '-');
            } else if(dateVal == "1m"){
                fnDateSet('searchStartDate', 'searchEndDate', 0, -1, 0, 0, 0, 0, '-');
            } else if(dateVal == "3m"){
                fnDateSet('searchStartDate', 'searchEndDate', 0, -3, 0, 0, 0, 0, '-');
            } else if(dateVal == "6m"){
                fnDateSet('searchStartDate', 'searchEndDate', 0, -6, 0, 0, 0, 0, '-');
            } else if(dateVal == "1y"){
                fnDateSet('searchStartDate', 'searchEndDate', -1, 0, 0, 0, 0, 0, '-');
            }
        }); 
        
        // 준비중인 팝업 alert
        commingSoon = function(){
        	alert("준비중 입니다."); 
        }
       
        
		// 상세조회 펼치기/접기 버튼
		orderSearchDetailBtn = function(){
			if($("#orderSearchDetail").css("display") == "none"){
				$("#orderSearchDetail").show();
				$("#btnText").text('상세조회접기');
			}else{
				$("#orderSearchDetail").hide();
				$("#btnText").text('상세조회펼치기');
			}
		}
		
		// 체크박스 전체 선택
		checkAll = function(){
			var checkObjs = $("input[name='chkIndex']");
			var cnt = 0;
			
			checkObjs.each(function(){

				if($(this).prop("checked")){
					cnt++;
				};
			});
			
			if(checkObjs.length == cnt){
				checkObjs.prop("checked",false);
			}else{
				checkObjs.prop("checked",true);
			}
		}
		
		//페이징 처리
		goPage = function(cPage){
			$searchForm.find("input[name='pageSize']").val($("select[name='pageSize']").val());
			$("#cPage").val(cPage);
			goList();
		}
		
		// 초기화
		goReset = function(){
			searchClear('searchForm');
			$searchForm.find("input").val("");
			$searchForm.find('input[type=hidden]').val('');
			$searchForm.find("select[id=dateSet]").find("option:eq(1)").prop("selected", true);
			fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -7, 0, 0, 0, '-');
		}
			
		//조회 버튼 클릭시
		goList = function(){
			
			var startDate = new Date($("#searchStartDate").val());
			var endDate = new Date($("#searchEndDate").val());
			
			// 필수입력 항목 체크
            var valChk = 0;
            $(".required").each(function(){
                if($(this).val() == ""){
                valChk++;
                }
            });
            
            if(valChk > 1){
                alert("운영단위나 주문번호는 필수입력 입니다.");
                return false;
            }
			
		/* 	// 필수입력 항목 체크
			if($.trim($("#oprUntNm").val())=='' ){
				alert("운영단위는 필수 입력값 입니다.");
				return false;	
			}if($.trim($("#odrNo").val())==''){
				alert("주문번호는 필수 입력값 입니다.");
				return false;
			} */
		
			// 조회기간 체크
			if(startDate > endDate){
				alert("종료일이 시작일보다 작습니다.");
				return false;
			}
			$searchForm.find("input[name='searchYn']").val("Y");
			$("#orderList").load("/am/ord/ordMng/orderList.do", $searchForm.serialize());
		}
	
	});
</script>
</body>
</html>
