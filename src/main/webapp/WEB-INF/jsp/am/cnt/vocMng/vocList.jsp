<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<style type="text/css">
<!--
-->
</style>
<script type="text/javascript">


$(function(){

	$frm = $("#frm");
	$searchForm = $("#searchForm");

	var searchYn = '${searchYn}';
	frmClear = function(){
		searchClear('searchForm');
		$("#searchForm").find("input[type=hidden]").val("");
	}



	
	





	//서비스담당자 팝업
	//fnServiceResult("searchForm")
	$("#searchServiceManagerNmIco").off().on("click" , function(){
		fnServiceResult("searchForm");
	});
	//서비스 담당팀
	$("#searchServiceTeamNmIco").off().on("click" , function(){
		memOprtrOrgSinglePopup("searchForm" , false);

	})


	//사용자
	$("#searchMemberNmIco").off().on("click" , function(){
		//requestPopup("searchForm");
		
		clientPopup("searchForm");
		
	})

	//VOC NO 조회 팝업 => 메모



	//주문 품목 조회 팝업 => 메모
	/* $("#searchOrdNoIco").off().on("click" , function(){
		odrNumberPopup();
	}); */






	//사업장 검색 팝업
	$("#searchBizPlaceNmIco").off().on("click" , function(){
		fnOneBzplcResult("searchForm");
	})
	//운영단위 검색 팝업
	$("#searchOprUntNmIco").off().on("click" , function(){
		oprUntSinglePopup("searchForm");
	});

	//회원명 팝업





	//조회 버튼 클릭시

	$('#_search').on('click',function(){
		var $searchForm = $("#searchForm");
		$('#searchYn').val('Y');
		$searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());

		$("#startDate").val(removeRegExp($("#searchStartDate").val()));
		$("#endDate").val(removeRegExp($("#searchEndDate").val()));



		$("#prdId").val($("#searchPrdId").val()); //상품 ID
		$("#vocGclsCd").val($("#searchVocGclsCd").val());
		$("#vocMclasCd").val($("#searchVocMclasCd").val());
		$("#vocSclsCd").val($("#searchVocSclsCd").val());
		$("#vocStatsCd").val($("#searchVocStatCd").val());
		$("#customerType").val($("input[name='searchCustomerType']:checked").val());

		$("#dateType").val($("#searchDateType").val());

		$("#bizPlaceId").val($("#searchBizPlaceId").val()); //사업장
		$("#oprUntId").val($("#searchOprUntId").val()); //운영단위
		$("#memId").val($("#searchMemId").val()); //멤버아이디


		$("#odrNo").val($("#searchOdrNo").val());//주문품목번호


		$("#vocNo").val($("#searchVocNo").val());

		$("#serviceManagerId").val($("#searchServiceManagerId").val());
		$("#serviceTeamId").val($("#searchServiceTeamId").val());



		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cnt/vocMng/vocList.do", "target":"_self", "method":"post"}).submit();
	});

});

console.log("본 페이지");
//서비스 담당자 컬백
fnServiceResultCallback = function(eleId,data){
// 	$("#searchServiceManagerNm").val(data.OPRTR_NM);
// 	$("#searchServiceManagerId").val(data.EMP_NO);
	console.log(data)
	
	
	$("#searchServiceManagerNm").val(data.OPRTR_NM);
	$("#searchServiceManagerId").val(data.EMP_NO);

}


fnOneBzplcResultCallback = function(data){
	console.log(data);
	if(data){
		$("#searchBizPlaceNm").val(data.BZPLC_NM);
		$("#searchBizPlaceId").val(data.BZPLC_ID);
	}

}


fnOprUntSingleCallback = function(eleId , data){
	console.log("eleId = " + eleId);
	console.log(data);
	//searchOprUntId
	//searchOprUntNm
	$("#searchOprUntId").val(data.OPR_UNT_ID);
	$("#searchOprUntNm").val(data.OPR_UNT_NM);


}

fnRequestResultCallback = function(data){
	$("#searchMemberNm").val(data.REQR_ID);
	$("#searchMemberId").val(data.REQR_NM);
}

function fnMemOprtrOrgResultCallback(eleId , data){
	$("#searchServiceTeamNm").val(data.ORG_NM);
	$("#searchServiceTeamId").val(data.ORG_CD);
}


fnResultClient = function(data){
	$("#searchMemberNm").val(data.memMn);
	$("#searchMemberId").val(data.memId);
	
	
}

function vocDetail(vocNo,coCd,vocItmNo){
	var index1	= $('<input type="hidden" name="detailVocNo" value="'+vocNo+'"/>');
	var index2	= $('<input type="hidden" name="coCd" value="'+coCd+'"/>');
	var index3	= $('<input type="hidden" name="detailVocItmNo" value="'+vocItmNo+'"/>');
	var newForm	= $('<form></form>');
	newForm.append(index1);
	newForm.append(index2);
	newForm.append(index3);


	var $frm = $("#searchForm");
	var input = $frm.find("input[type='text']");
	var hidden = $frm.find("input[type='hidden']");
	var select = $frm.find("select");
	var radio = $frm.find("input[type='radio']:checked")

	for(var i = 0 ; i < input.length ; i ++) {
		newForm.append($("<input type='hidden' name='"+$(input[i]).attr("name")+"' value='"+$(input[i]).val()+"'/>"));
	}
	for(var i = 0 ; i < select.length ; i ++) {
		newForm.append($("<input type='hidden' name='"+$(select[i]).attr("name")+"' value='"+$(select[i]).val()+"'/>"));
	}
	for(var i = 0 ; i < hidden.length ; i ++) {
		newForm.append($("<input type='hidden' name='"+$(hidden[i]).attr("name")+"' value='"+$(hidden[i]).val()+"'/>"));
	}
	for(var i = 0 ; i < radio.length; i++){
		newForm.append($("<input type='hidden' name='"+$(radio[i]).attr("name")+"' value='"+$(radio[i]).val()+"'/>"));
	}


	newForm.attr({"action":"<c:out value="${serverDomain}"/>/am/cnt/vocMng/vocView.do", "target":"_self", "method":"post"});
	newForm.appendTo('body');
	newForm.submit();
}

function odrNoDetail(odrNo,bzplcId){
	//2 차 개발 거래명세서 SSP_BO_OA_14
}

function odrNumberPopup(odrNo){
	popup('', "500", "700", "yes","_orderNumberPopupForm");
	var newForm	= $('<form></form>');
	var index1 = $('<input name="odrNo" value="'+odrNo+'">');
	newForm.append(index1);

	//var index2 = $('<input name="bzplcId" value="'+bzplcId+'">');
	//newForm.append(index2);

	newForm.appendTo('body');
	newForm.attr({"action":"<c:out value="${serverDomain}"/>/am/ord/ordMng/orderNumberPopupForm.do", "target":"popup_orderNumberPopupForm", "method":"post"}).submit();
}

fnResultOdrNo = function(params){
	console.log(params)
}

function prdDetail(prdId){
	console.log(prdId);

	//popup('', "500", "700", "yes","_prdDetail");
	/* $('#'+form).attr({"action":"/am/com/popUp/onebzplcPopupForm.do", "target":"_prdDetail", "method":"post"}).submit(); */
	var prdTab = window.open("about:blank" , "_prdDetail");

	var index1	= $('<input type="hidden" name="searchPrdId" value="'+prdId+'"/>');
	var newForm	= $('<form></form>');
	newForm.append(index1);
	newForm.attr({"action":"<c:out value="${serverDomain}"/>/am/prd/prdMng/registProductRead.do", "target":"_prdDetail", "method":"post"});
	newForm.appendTo('body');
	newForm.submit();
}




goPage = function(cPage){
	var $frm = $("#searchForm");
	$frm.find("input[name='cPage']").val(cPage);
	$frm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
	$frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cnt/vocMng/vocList.do", "target":"_self", "method":"post"}).submit();
}

var changeVocList = function(obj){

	var id = $(obj).attr("id");
	var url = "/am/cnt/vocMng";
	var param = {};
	var callBack = null;
	if(id == "searchVocGclsCd"){
		// 대분류 변경시 중분류 호출
		url +="/selectMclsList.json";
		param["searchVocGclsCd"] = $(obj).val();

		callBack = function(data){
			console.log(data);
			//mclasNm
			//vocMclasCd
			var html = "<option value=''>전체</option>"
			for(var i = 0 ; i < data.length; i++){

				html += "<option value='"
				html += data[i].vocMclasCd
				html += "'>"
				html += data[i].mclasNm
				html += "</option>"
			}

			$("#searchVocMclasCd").html(html);
		}
	}else if(id == "searchVocMclasCd"){
		//중분류 호출시 소분류 호출
		url +="/selectSclsList.json";
		param['searchVocGclsCd'] = $("#searchVocGclsCd").val()
		param['searchVocMclasCd'] = $(obj).val();

		callBack = function(data){
			console.log(data);

			//sclsNm
			//vocSclsCd
			var html = "<option value=''>전체</option>"
				for(var i = 0 ; i < data.length; i++){

					html += "<option value='"
					html += data[i].vocSclsCd
					html += "'>"
					html += data[i].sclsNm
					html += "</option>"
				}

				$("#searchVocSclsCd").html(html);


			//$("#searchVocSclsCd")
		}
	}
	if($(obj).val() != ""){
		param['langCd'] = 'KO';
		getVocClsList(url , param , callBack);
	}else{
		var html = "<option>전체</option>";
		if(id == "searchVocGclsCd"){
			$("#searchVocMclasCd").html(html);
			$("#searchVocSclsCd").html(html);
		}else{
			$("#searchVocSclsCd").html(html);
		}
	}
}

function getVocClsList(url , param , callback){

	$.ajax({
		async : false,
		type : "POST",
		data : param,
		url : "<c:out value="${serverDomain}" />"+url,
		success : function (data)
		{
			callback(data);
		},
		error : function (err)
		{
			alert("오류가 발생하였습니다.\n[" + err.status + "]");
		}
	});

}


//상품 ID 조회 팝업
function searchProductPopup(){
	productSinglePopup("searchForm", "searchPrdId");
}

fnProductSingleCallback = function(eleId, data) {
	// 초기화
	$("#searchForm").find("input[name=searchPrdId]").val("");

	if(data){
		// 값 설정
		$("#searchForm").find("input[name=searchPrdId]").val(data.prdId);
	}
}

openMultiTextPopup = function(id){
	multiTextPopup(id);
}

fnResultText = function(object){
	$("#searchForm").find("#"+object.id).val(object.data);
}

orderSearchDetailBtn = function(){
	if($("#vocSearchDetail").css("display") == "none"){
		$("#vocSearchDetail").show();
		$("#btnText").text('상세조회접기');
	}else{
		$("#vocSearchDetail").hide();
		$("#btnText").text('상세조회펼치기');
	}
}

//엑셀 다운로드
goExcelDown = function () {
	var totalCnt = $(".pages .em").html()

	if(totalCnt > 10000){
		alert("엑셀 다운로드는 10000건 이하만 가능합니다.");
		return;
	}else if(totalCnt == 0){
		alert("저장할 내역이 없습니다.");
		return;
	}

	//$searchForm.attr({"action": "<c:out value="${serverDomain}" />/am/prd/ctgMng/manufacturerListExcelDownload.do", "target":"_self", "method":"post"}).submit();
	$("#searchForm").attr({"action": "<c:out value="${serverDomain}" />/am/cnt/vocMng/vocListExcelDownload.do", "target":"_self", "method":"post"}).submit();
};

</script>
</head>
<body>
	<div id="header">
		<%@ include file="/WEB-INF/jsp/am/include/top.jsp"%>
	</div>
	<div id="container">
		<!-- container -->
		<div id="aside" class="aside left">
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp"%>
		</div>
		<!-- wrapper -->
		<div id="wrapper">

			<div id="breadcrumb"></div>

			<div id="contents">
				<!-- container -->
				<div class="container">
					<h2 class="title"><span>VOC 현황조회</span></h2>
					<h3 class="title"><span>목록</span></h3>


					<form id="searchForm" name="searchForm">
							<input type="hidden" name="searchYn" id="searchYn" value="${map.searchYn }"/>
							<input type="hidden" name="pageSize" value="<c:out value="${map.pageSize }"/>" />
							<input type="hidden" name="cPage" value="<c:out value="${map.cPage}"/>"/>

							<!-- 서비스 담당자 -->
							<input type="hidden" id="serviceManagerId" name="serviceManagerId" value="${map.serviceManagerId}"/>
							<!-- 서비스 담당팀 -->
							<input type="hidden" id="serviceTeamId" name="serviceTeamId" value="${map.serviceTeamId}"/>
							<!--VOC NO -->
							<input type="hidden" id="vocNo" name="vocNo" value="${map.vocNo}"/>



							<!-- 주문품목번호  -->
							<input type="hidden" id="odrNo" name="odrNo" value="${map.odrNo}">
							<!-- 상품 ID -->
							<input type="hidden" id="prdId" name="prdId" value="${map.prdId}">
							<!-- 조회기간 -->
							<input type="hidden" id="startDate" name="startDate" value="${map.startDate}">
							<input type="hidden" id="endDate" name="endDate" value="${map.endDate}">
							<!-- VOC 대분류 -->
							<input type="hidden" id="vocGclsCd" name="vocGclsCd" value="${map.vocGclsCd}"/>
							<!-- VOC 중분류 -->
							<input type="hidden" id="vocMclasCd" name="vocMclasCd" value="${map.vocMclasCd}"/>
							<!-- VOC 소분류 -->
							<input type="hidden" id="vocSclsCd" name="vocSclsCd" value="${map.vocSclsCd}"/>
							<!-- VOC 상태 -->
							<input type="hidden" id="vocStatsCd" name="vocStatsCd" value="${map.vocStatsCd}"/>
							<!--  고객유형 -->
							<input type="hidden" id="customerType" name="customerType" value="${map.customerType}"/>

							<!-- 사업장 -->
							<input type="hidden" id="bizPlaceId" name="bizPlaceId" value="${map.bizPlaceId}"/>

							<!-- 운영단위 -->
							<input type="hidden" id="oprUntId" name="oprUntId" value="${map.oprUntId }"/>

							<!-- 회원명-->
							<input type="hidden" id="memId" name="memId" value="${map.memId}"/>

							<!-- 날짜 검색 타입 -->
							<input type="hidden" id="dateType" name="dateType" value="${map.dateType}"/>


					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
								<col style="width: 10%;" />
								<col style="width: auto;" />
								<col style="width: 10%;" />
								<col style="width: auto;" />
								<col style="width: 10%;" />
								<col style="width: 25%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>서비스 담당자</span></th>
								<td>
									<input type="text" class="text" name="searchServiceManagerNm" id="searchServiceManagerNm" value="${map.searchServiceManagerNm}" readonly />
									<a href="#" id="searchServiceManagerNmIco" class="icon search2"></a>
									<input type="hidden" name="searchServiceManagerId" id="searchServiceManagerId" value="${map.searchServiceManagerId}"/>
								</td>

								<th><span>서비스 담당팀</span></th>
								<td>
									<input type="text" class="text" name="searchServiceTeamNm" id="searchServiceTeamNm" value="${map.searchServiceTeamNm}" readonly />
									<a href="#" id="searchServiceTeamNmIco" class="icon search2"></a>
									<input type="hidden" name="searchServiceTeamId" id="searchServiceTeamId"  value="${map.searchServiceTeamId}"/>

								</td>

								<th><span>VOC NO</span></th>
								<td>
									<input type="text" class="text" name="searchVocNo" id="searchVocNo" value="${map.searchVocNo}"/>
									<!-- <a href="#" id="" class="icon search2"></a> -->
									<a href="javascript:openMultiTextPopup('searchVocNo');" class="icon doc"></a>
								</td>

							</tr>

							<tr>
								<th><span>주문 품목 번호</span></th>
								<td>
									<input type="text" class="text" name="searchOdrNo" id="searchOdrNo" value="${map.searchOdrNo}" readonly />
									<!-- <a href="#" id="searchOrdNoIco" class="icon search2"></a> -->
									<a href="javascript:openMultiTextPopup('searchOdrNo');" class="icon doc"></a>

								</td>

								<th><span>상품 ID</span></th>
								<td>
									<input type="text" class="text" name="searchPrdId" id="searchPrdId" value="${map.searchPrdId}" readonly />
									<a href="javascript:searchProductPopup()" id="" class="icon search2"></a>

								</td>

								<th><span>조회 기간</span></th>
								<td>
									<select class="select small" id="searchDateType" name="searchDateType">
										<option value="RQST_DTM"	<c:if test="${map.searchDateType eq 'RQST_DTM' or map.searchDateType == null}">selected</c:if>	>요청일</option>
										<option value="ACP_DTM" <c:if test="${map.searchDateType eq 'ACP_DTM'}">selected</c:if>	>접수일</option>
										<option value="PROC_STR_DTM" <c:if test="${map.searchDateType eq 'PROC_STR_DTM'}">selected</c:if>	>처리 시작 일시</option>
										<option value="PROC_DTM" <c:if test="${map.searchDateType eq 'PROC_DTM'}">selected</c:if>	>처리 완료 일시</option>
										<option value="CMPL_DTM" <c:if test="${map.searchDateType eq 'CMPL_DTM'}">selected</c:if>	>완료 일시</option>
									</select>
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" style="width:100px"class="text" id="searchStartDate" name="searchStartDate" value="${map.searchStartDate}" readonly="readonly" data-target-end="#searchEndDate"/> ~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" style="width:100px" class="text" id="searchEndDate" name="searchEndDate" value="${map.searchEndDate}"  readonly="readonly" data-target-start="#searchStartDate"/>

								</td>
							</tr>

							<tr>
								<th><span>VOC 분류</span></th>
								<td>
									<select id="searchVocGclsCd" name="searchVocGclsCd" class="select small"  onChange="changeVocList(this)">
										<option value="">전체</option>
										<c:if test="${not empty searchGclsList }">
											<c:forEach var="list" items="${searchGclsList }" varStatus="i">
												<option value="<c:out value="${list.vocGclsCd }"/>" <ui:select v="${map.searchVocGclsCd}" t="${list.vocGclsCd }" g="selected"/> ><c:out value="${list.gclsNm }"/></option>
											</c:forEach>
										</c:if>
									</select>
									<select id="searchVocMclasCd" name="searchVocMclasCd" class="select small" onChange="changeVocList(this)">
										<option value="">전체</option>
										<c:if test="${not empty searchMclsList }">
											<c:forEach var="list" items="${searchMclsList }" varStatus="i">
												<option value="<c:out value="${list.vocMclasCd }"/>" <ui:select v="${map.searchVocMclasCd}" t="${list.vocMclasCd }" g="selected"/> ><c:out value="${list.mclasNm }"/></option>
											</c:forEach>
										</c:if>
									</select>
									<select id="searchVocSclsCd" name="searchVocSclsCd" class="select small" >
										<option value="">전체</option>
										<c:if test="${not empty searchSclsList }">
											<c:forEach var="list" items="${searchSclsList }" varStatus="i">
												<option value="<c:out value="${list.vocSclsCd }"/>" <ui:select v="${map.searchVocSclsCd}" t="${list.vocSclsCd }" g="selected"/> ><c:out value="${list.sclsNm }"/></option>
											</c:forEach>
										</c:if>
									</select>
								</td>

								<th><span>VOC 상태</span></th>
								<td>
									<select class="select small" id="searchVocStatCd" name="searchVocStatCd">
										<option value="">전체</option>
										<c:if test="${not empty searchVocStatsList }">
											<c:forEach var="list" items="${searchVocStatsList }" varStatus="i">
												<option value="<c:out value="${list.dtlCd }"/>" <ui:select v="${map.searchVocStatCd}" t="${list.dtlCd }" g="selected"/> ><c:out value="${list.dtlCdNm }"/></option>
											</c:forEach>
										</c:if>

									</select>
								</td>

								<th><span>고객 유형</span></th>
								<td>
									<input type="radio" id="searchAllCustomer" name="searchCustomerType" value="" class="radio"  <c:if test="${map.searchCustomerType eq'' or map.searchCustomerType  == null}">checked</c:if> /> <label for="allCustomer">전체</label>
									<input type="radio" id="searchContractCustomer" name="searchCustomerType" value="30"class="radio"  value="30" <c:if test="${map.searchCustomerType eq '30'}">checked</c:if>/> <label for="contractCustomer">계약</label>
									<input type="radio" id="searchNormalCustomer" name="searchCustomerType" value="10"class="radio"  value="10" <c:if test="${map.searchCustomerType eq'10'}">checked</c:if>/> <label for="normalCustomer">일반</label>
								</td>
							</tr>

							<tr id="vocSearchDetail" style="display:none;">
								<th><span>사업장</span></th>
								<td>

									<input type="text" class="text" name="searchBizPlaceId" id="searchBizPlaceId" value="${map.searchBizPlaceId}" readonly />
									<input type="hidden" class="text" name="searchBizPlaceNm" id="searchBizPlaceNm" value="${map.searchBizPlaceNm}" readonly />
									<a href="#" id="searchBizPlaceNmIco" class="icon search2"></a>
									<a href="javascript:openMultiTextPopup('searchBizPlaceId');" class="icon doc"></a>

								</td>

								<th><span>운영 단위</span></th>
								<td>
									<input type="text" class="text" name="searchOprUntId" id="searchOprUntId" value="${map.searchOprUntId}" readonly />
									<input type="hidden" class="text" name="searchOprUntNm" id="searchOprUntNm" value="${map.searchOprUntNm}" readonly />
									<a href="#" id="searchOprUntNmIco" class="icon search2"></a>
									<a href="javascript:openMultiTextPopup('searchOprUntId');" class="icon doc"></a>

								</td>

								<th><span>회원명</span></th>
								<td>
									<input type="text" class="text" name="searchMemberNm" id="searchMemberNm" value="${map.searchMemberNm}" readonly />
									<a href="#" id="searchMemberNmIco" class="icon search2"></a>
									<input type="hidden" class="text" name="searchMemberId" id="searchMemberId" value="${map.searchMemberId}" readonly />
								</td>
							</tr>



						</tbody>
					</table>


					</form>
				</div>

				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
						<div class="col- text-left">
							<a href="javascript:orderSearchDetailBtn()" class="button small"><span id="btnText">상세조회펼치기</span></a>
						</div>
						<a href="javascript:frmClear('searchForm');" class="button small"><span>검색 조건 초기화</span></a>
						<a href="#none" id="_search" class="button small primary"><span>검색</span></a>
				</div>

				<form id="frm" name="frm">
					<div class="grid section-button-list">
							<div class="col-1-2 text-left">
								<span class="pages">
									<c:if test="${!map.searchYn ne null }">
										(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
									</c:if>

								</span>
							</div>
							<div class="col-1-2 text-right">
								<a href="javascript:goExcelDown();" id="goExcelDown" class="button small"><span>엑셀 다운로드</span></a>
								<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>
								<%-- <ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/> --%>
							</div>
						</div>
				</form>

				<table cellspacing="0" class="table-col table-b">
						<colgroup>
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
						</colgroup>
						<thead>
							<tr>
								<th>VOC No</th>
								<th>대분류</th>
								<th>중뷴류</th>
								<th>소분류</th>
								<th>주문 품목 번호</th>
								<th>상품 ID</th>
								<th>상품명</th>
								<th>회원명</th>
								<th>완료 예정일</th>
								<th>VOC 상태</th>
								<th>요청 일시</th>
								<th>접수 일시</th>
								<th>처리 시작 일시</th>
								<th>처리 완료 일시</th>
								<th>완료 일시</th>
							</tr>
						</thead>
						<tbody>


							<c:choose>
								<c:when test="${map.searchYn eq null }">
									<tr>
											<td colspan="15">조회 조건을 선택 하신 후, 조회해 주세요.</td>
									</tr>
								</c:when>
								<c:when test="${paging.totalRecordCount == 0}">
									<tr>
											<td colspan="15"><spring:message code="list.empty" /></td>
									</tr>
								</c:when>
								<c:otherwise>
										<c:forEach var="list" items="${list }" varStatus="i" >
												<tr>
												<td><a href="javascript:vocDetail('${list.vocNo}' , '${list.coCd}' ,'${list.vocItmNo}' )" class="list-title detailHelper" >${list.vocNo}-${list.vocItmNo}</a></td><!-- VOC 상세보기 -->
												<td>${list.vocGclsNm}</td>
												<td>${list.vocMclasNm}</td>
												<td>${list.vocSclsNm}</td>
												<td><a href="javascript:odrNoDetail('${list.odrNo}' , '${list.reqrBzplcId}')" class="list-title detailHelper" >${list.odrNo}</a></td><!-- 주문 품목번호 상세보기 팝업 -->
												<td><a href="javascript:prdDetail('${list.prdId}')" class="list-title detailHelper" >${list.prdId}</a></td> <!-- 상품상세 보기 팝업 -->
												<td>${list.prdNm}</td>
												<td>${list.reqrNm}</td>
												<td>
													<fmt:parseDate value="${list.vocCmplHpeDtm}" var="dateFmt" pattern="yyyy-MM-dd"/>
													<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
												</td>

												<td>${list.vocStatsNm}</td>
												<td>
													<fmt:parseDate value="${list.rqstDtm}" var="dateFmt" pattern="yyyy-MM-dd"/>
													<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
												</td>
												<td>

													<fmt:parseDate value="${list.acpDtm}" var="dateFmt" pattern="yyyy-MM-dd"/>
													<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
												</td>
												<td>

													<fmt:parseDate value="${list.procStrDtm}" var="dateFmt" pattern="yyyy-MM-dd"/>
													<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
												</td>
												<td>
													<fmt:parseDate value="${list.procDtm}" var="dateFmt" pattern="yyyy-MM-dd"/>
													<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
												</td>
												<td>
													<fmt:parseDate value="${list.cmplDtm}" var="dateFmt" pattern="yyyy-MM-dd"/>
													<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
												</td>
												</tr>
										</c:forEach>
								</c:otherwise>
								</c:choose>
						</tbody>
				</table>

				<div class="section-pagination">
						<h4 class="sr-only">목록 페이징</h4>
						<div class="wrap">
							<ui:paging paging="${paging }" jsFunction="goPage" />
						</div>
				</div>


				<!-- // container -->
			</div>
		</div>
		<!-- // wrapper -->

		<div id="quickmenu" class="aside right">
			<%@ include file="/WEB-INF/jsp/am/include/quick.jsp"%>
		</div>
	</div>
	<!-- // container -->
	<div id="footer">
		<%@ include file="/WEB-INF/jsp/am/include/footer.jsp"%>
	</div>
	<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
</body>
</html>