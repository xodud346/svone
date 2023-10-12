<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<style type="text/css">
</style>
<script src="/am/js/common/jquery.ajax.js"></script>
<script type="text/javascript">

/* $(document).on('click', '#btnSubmit', function(e) {	
	
    var form = {
        rqstNo : $('#rqstNo').val(),
        procStatsCd : $('#procStatsCd').val(),
        useYn : $('#useYn').val(),
        regDtm : $('#regDtm').val()
        regpsnId : $('#regpsnId').val(),
        reqrId : $('#reqrId').val(),
        chrpsnId : $('#chrpsnId').val(),
        dealrId : $('#dealrId').val()
    };

    $.ajax({
          type: "post", 
          url: "/insertProductNewView.do", 
          dataType: "json", 
          contentType : "application/x-www-form-urlencoded; charset=UTF-8",
          data: form
          
      }error : function(error) {
		console.log("error");
	  },
	   success : function(data) {
		console.log("success");
	  }
    
    );
}); */

function productPopup(frm){
	popup('', "1400", "700", "yes", "_productPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/prd/productPopupForm.do", "target":"popup_productPopup", "method":"post"}).submit();
}
function planProductPopup(frm){
	popup('', "1400", "700", "yes", "_productPopup");
	$('#'+frm).attr({"action":"/am/prm/plnMng/planProductPopup.do", "target":"popup_productPopup", "method":"post"}).submit();
}
function bzplcPopup(frm){
	popup('', "500", "700", "yes","_bzplcPopup");
	$('#'+frm).attr({"action":"/am/dsp/popMng/bzplcPopupForm.do", "target":"popup_bzplcPopup", "method":"post"}).submit();
}

function sspCategoryPopup(frm){
	popup('', "700", "500", "yes", "_sspCategoryPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/prd/sspCategoryPopupForm.do", "target":"popup_sspCategoryPopup", "method":"post"}).submit();
}

function manufacturerPopup(frm){
	popup('', "700", "500", "yes", "_manufacturerPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/prd/manufacturerPopupForm.do", "target":"popup_manufacturerPopup", "method":"post"}).submit();
}
function fnServiceResult(frm){
	popup('', "700", "700", "yes","_servicePopup");
	$('#'+frm).attr({"action":"/am/com/popUp/servicePopupForm.do", "target":"popup_servicePopup", "method":"post"}).submit();
} 
function countryCodeSinglePopup(frm,eleId){
	popup('', "500", "600", "yes", "_manufacturerPopup");
	if(eleId){
		$('#'+frm).attr({"action":"/am/com/popUp/prd/countryCodePopupForm.do?eleId="+eleId, "target":"popup_manufacturerPopup", "method":"post"}).submit();
	} else {
		$('#'+frm).attr({"action":"/am/com/popUp/prd/countryCodePopupForm.do", "target":"popup_manufacturerPopup", "method":"post"}).submit();
	}
}
function odrUntPopup(frm){
	popup('', "600", "700", "yes","_odrUntPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/odrUntPopupForm.do", "target":"popup_odrUntPopup", "method":"post"}).submit();
} 
function sMroCategoryPopup(frm){
	popup('', "700", "500", "yes", "_sMroCategoryPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/prd/sMroCategoryPopupForm.do", "target":"popup_sMroCategoryPopup", "method":"post"}).submit();
}


function fnResultCtryCdSingleCallback(eleId,obj) {
	$("#ctrySprCd").val(obj.ctrySprCd);
	$("#ctryNm").val(obj.ctryNm);
}
function fnSetProduct(params) {
	//console.log('params',params);
	$("#prdId").val(params.prdId);  //off
}
/* function sMroCategoryPopup(params) {
	//console.log('params',params);
	$("#prdClsCd").val(params.prdClsCd);  //off
	$("#prdClsLvlNm").val(params.prdClsLvlNm);  //off
} */
function fnPlanProductPopup(params){
	$("#rplcPrdId").val(params.PRD_MST_CD)
}
function fnResultBzplc(params) {
	$("#bzplcId").val(params.BZPLC_ID);
	$("#bzplcNm").val(params.BZPLC_NM);
}

function fnResultSspCategory(params) {
	$("#prdClsCd").val(params.prdClsCd);
	$("#prdClsNm").val(params.prdClsNm);
}
function fnResultSMroCategoryMapp(params) {
	$("#prdClsCd").val(params.prdClsCd);
	$("#prdClsNm").val(params.prdClsNm);
}

function fnResultManufacturerMapp(params) {
	$("#mnfrNo").val(params.mnfrNo);
	$("#mnfrNm").val(params.sgMnfrNm);
}
//담당자
function fnServiceResultCallback(inputArray) {
	//console.log('inputArray',inputArray);
	$("#chrpsnId").val(inputArray.EMP_NO);
	$("#chrpsnNm").val(inputArray.OPRTR_NM);   //off
}
function fnOdrUntResultCallback(inputArray) {
	//console.log('inputArray',inputArray);
	$("#odrUntQty").val(inputArray.UNT_NM);   //off
}

//상세보기
btnOnclickList = function() {
	var $frm = $("#frm");
	$frm.attr({
				"action" : "<c:out value="${serverDomain}" />/am/prd/prdNew/productNewView.do",
				"target" : "_self",
				"method" : "post"
			  }).submit();
}



</script>

</head>
<body>
<form id="frm" name="frm" action="" method="post">
	<input type="hidden" id="coCd" name="coCd" value="${commandMap.coCd}" />
	<input type="hidden" id="memId" name="memId" value="${commandMap.memId}">
	<input type="hidden" id="langCd" name="langCd" value="${commandMap.langCd}" />
	<input type="hidden" id="bzplcId" name="bzplcId" value="${commandMap.bzplcId}" />
	<input type="hidden" id="mallId" name="mallId" value="${commandMap.mallId}">
	<input type="hidden" id="curUntCd" name="curUntCd" value="${commandMap.curUntCd}"> 
	<input type="hidden" id="rqstNo" name="rqstNo" value="${detail.RQST_NO}"> 
	<input type="hidden" id="procStatsSeq" name="procStatsSeq" value="${detail.PROC_STATS_SEQ}">
	<input type="hidden" id="procStatsCd" name="procStatsCd" value="${detail.PROC_STATS_CD}">	
	<input type="hidden" id="regpsnId" name="regpsnId" value="${detail.REGPSN_ID}"> 
	<input type="hidden" id="reqrId" name="reqrId" value="${detail.REQR_ID}"> 
	<input type="hidden" id="dealrId" name="dealrId" value="${detail.DEALR_ID}"> 	
	<input type="hidden" id="atflId" name="atflId" value="${detail.ATFL_ID}"> 	

	<div id="header">
		<%@ include file="/WEB-INF/jsp/am/include/top.jsp"%>
	</div>

	<div id="container">
		<div id="aside" class="aside left">
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp"%>
		</div>

		<div id="wrapper">
			<div id="breadcrumb"></div>

			<div id="contents">
				<div id="container">
					<h2 class="title">
						<span>신규상품요청 상세</span>
					</h2>
					<h3 class="title">
						<span>요청 상품 정보</span>
					</h3>
						<table cellspacing="0" class="table-row table-a"
							style="margin-bottom: 0;">
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: 25%;" />
								<col style="width: 10%;" />
								<col style="width: 25%;" />
								<col style="width: 10%;" />
								<col style="width: 20%;" />
							</colgroup>
							<tbody>
								<tr>
									<th><span>상품ID</span></th>
									<td>${detail.PRD_ID}</td>
									<th><span>상품명</span></th>
									<td colspan ="3">${detail.RQST_PRD_NM}</td>
								</tr>
								<tr>
									<th><span>대표상품구분</span></th>
									<td>${detail.REPR_PRD_SPR}</td>
									<th><span>제조원</span></th>
									<td>${detail.MNFR_NM}</td>
									<th><span>원산지</span></th>
									<td>${detail.CTRY_SPR_CD}</td>
								</tr>
								<tr>
									<th><span>규격</span></th>
									<td colspan="3">${detail.RQST_ALL_ATTR}</td>
									<th><span>희망단가</span></th>
									<td>${detail.HPE_UPRC}</td>
								</tr>
								<tr>
									<th><span>카테고리</span></th>
									<td colspan="3">${detail.PRD_CLS_NM}</td>
									<th><span>희망수량</span></th>
									<td>${detail.HPE_QTY}</td>
								</tr>
								<tr>
									<th><span>선택정보</span></th>
									<td colspan="3"><input type="checkbox" id="" name="" checked="" />화학물질여부 <input type="checkbox" id="" name="" />주문제작/가공상품
									</td>
									<th><span>공용전용구분</span></th>
									<td>
										<c:if test="${detail.PUB_DVRS_SPR == '41'}"> 공용 </c:if>
										<c:if test="${detail.PUB_DVRS_SPR == '42'}"> 전용 </c:if>									
									</td>
								</tr>
								<tr>
									<th><span>등록요청사유</span></th>
									<td colspan="5">${detail.RQST_RSN}</td>
								</tr>
								<tr>
									<th><span>첨부파일</span></th>
									<td colspan="5">
									<c:choose>
							<c:when test="${not empty fileImage }">
									<c:forEach items="${fileImage }" var="fileImage" varStatus="i">
														<span class="txtInfomation">
													      <a href="/am/common/commonFileDownload.do?attachFileSavePath=${fileImage.FILE_IMAGE }&downloadFile=${fileImage.ORIGNL_FILE_NM}" >${fileImage.ORIGNL_FILE_NM}</a>
														</span>
												</c:forEach>
											</c:when>
										<c:otherwise>
									</c:otherwise>
							</c:choose></td>
								</tr>
								<tr>
									<th><span>이미지</span></th>
									<td colspan="5"><c:choose>
							<c:when test="${not empty fileImage }">
									<c:forEach items="${fileImage }" var="fileImage" varStatus="i">
															<img alt="" src='<c:url value="/am/common/diplay.do?&attachFileSavePath=${fileImage.FILE_IMAGE }" />' width="100" height="100" />
												</c:forEach>
											</c:when>
										<c:otherwise>
									</c:otherwise>
							</c:choose>
							</td>
								</tr>
							</tbody>
						</table>

						<table cellspacing="0" class="table-row table-a"
							style="margin-bottom: 0;">
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: 25%;" />
								<col style="width: 10%;" />
								<col style="width: 25%;" />
								<col style="width: 10%;" />
								<col style="width: 20%;" />
							</colgroup>
							<h3 class="title">
								<span>요청 고객 정보</span>
							</h3>
							<tr>
								<th><span>요청번호</span></th>
								<td>${detail.RQST_NO}</td>
								<th><span>요청일</span></th>
								<td>${detail.RQST_DTM}</td>
								<th><span></span></th>
								<td></td>
							</tr>
							<tr>
								<th><span>사업장</span></th>
								<td>${detail.BZPLC_NM}</td>
								<th><span>운영단위</span></th>
								<td>${detail.OPR_UNT_NM}</td>
								<th><span>요청자</span></th>
								<td>(${detail.LOGIN_ID})${detail.REQR_NM}</td>
							</tr>
						</table>
						<div class="grid section-button-search">
					<a href="#none" id="btn1" class="button small"><span>접수</span></a>
				</div>
				
			<div id="hide1">
						<hr>
						<table cellspacing="0" class="table-row table-a"
							style="margin-bottom: 0;">
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: 25%;" />
								<col style="width: 10%;" />
								<col style="width: 25%;" />
								<col style="width: 10%;" />
								<col style="width: 20%;" />
							</colgroup>
							<h3 class="title">
								<span>상품등록요청 처리</span>
							</h3>
							(요청상품이 R&D상품인 경우에는 카테고리만 선택해 주세요)
							<tr>
								<th><span>상품명</span></th>
								<td colspan="3"><input type="text" class="text" id="rqstPrdNm"	name="rqstPrdNm" value="${detail.RQST_PRD_NM}" /> 
					            <a href="javascript:sMroCategoryPopup('frm')" id="btn1" class="button small"><span>카테고리추천</span></a></td>
								<th><span>전용공용구분</span></th>
								<td>
									<select class="select" id="pubDvrsSpr" value="${detail.PUB_DVRS_SPR}" name="pubDvrsSpr" >
											<option value="">선택</option>
											<option value="41">공용</option>
											<option value="42">전용</option>
									</select>
								</td>
							</tr>
							<tr>
								<th><span>카테고리</span></th>
								<td colspan="3">
									<select class="select" id="selectSspRnd" name="selectSspRnd"  style="width: 100px;">
											<option value="1">SSP카테고리</option>
											<option value="2">R&D카테고리</option>
									</select> 
									<input type="text" id="prdClsCd" name="prdClsCd" value="${detail.PRD_CLS_CD}" style="width: 80px;" /> 
									<input type="text" id="prdClsNm" name="prdClsNm" value="${detail.PRD_CLS_NM}" style="width: 120px;" />
									<a href="javascript:sspCategoryPopup('frm');;" class="icon search2"></a>
								</td>
								<th><span>선정방식</span></th>
								<td><input type="text" id="intgMthdCd" name="intgMthdCd" value="${detail.INTG_MTHD_CD}" style="width: 180px;" readonly/>
								</td>
							</tr>
							<tr>
								<th><span>S-MRO카테고리</span></th>
								<td colspan="5">
									<input type="text" id="smroMappId" name="smroMappId" value="${detail.SMRO_MAPP_ID}" style="width: 100px;" readonly/> 
									<input type="text" id="smroMappNm" name="smroMappNm" value="${detail.SMRO_MAPP_NM}" style="width: 160px;" readonly/>
								</td>
							</tr>
							<tr>
								<th><span>규격</span></th>
								<td colspan="3">
									<input type="text" id="rqstAllAttr" name="rqstAllAttr" value="${detail.RQST_ALL_ATTR}" style="width: 300px;" readonly/>
								</td>
								<th><span>상품담당자</span></th>
								<td><input type="text" id="chrpsnId" name="chrpsnId" value="${detail.CHRPSN_ID}"   style="width: 70px;" readonly/>
									<input type="text" id="chrpsnNm" name="chrpsnNm" value="${detail.CHRPSN_NM}"   style="width: 130px;" readonly/>
								</td>
							</tr>
							<tr>
								<th><span>주문단위</span></th>
								<td colspan="1">
									<input type="text" id="basisUntQty" name="basisUntQty" value="${detail.BASIS_UNT_QTY}" style="width: 50px;" /> 
									<input type="text" id="basisUnt" name="basisUnt" value="${detail.BASIS_UNT}" style="width: 50px;" />
									 <a href="javascript:odrUntPopup('frm');" class="icon search2"></a> ~ 
									 <input type="text" id="odrUnt" name="odrUnt" value="${detail.ODR_UNT}" style="width: 50px;" /> 
									 <a href="javascript:odrUntPopup('frm');" class="icon search2"></a>
									 <input type="hidden" id="odrUntQty" name="odrUntQty" value="${detail.ODR_UNT_QTY}" />
								</td>
								<th><span>제조원</span></th>
								<td><input type="text" id="mnfrNo" name="mnfrNo" value="${detail.MNFR_NO}" style="width: 60px;" />
									<input type="text" id="mnfrNm" name="mnfrNm" value="${detail.MNFR_NM}" style="width: 110px;" />
									<a href="javascript:manufacturerPopup('frm');" class="icon search2"></a></td>
								<th><span>원산지</span></th>
								<td><input type="text" id="ctrySprCd" name="ctrySprCd" value="${detail.CTRY_SPR_CD}" style="width: 60px;" />
									<input type="text" id="ctryNm" name="ctryNm" value="${detail.CTRY_NM}" style="width: 110px;" /> 
									<a href="javascript:countryCodeSinglePopup('frm');" class="icon search2"></a>
								</td>
							</tr>
						</table>
						<div id="hide5">
						<div class="grid section-button-search">
					 <a href="#none" id="btn2" class="button small" ><span>등록요청생성</span></a>
				  </div>
				  </div>
				         <div id="hide6">
						<div class="grid section-button-search">
					 <a href="#none" id="btn5" class="button small" ><span>SSP등록완료</span></a>
				  </div>
			</div>
			<div id="hide4">
						<hr>
						<table cellspacing="0" class="table-row table-a"
							style="margin-bottom: 0;">
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: 25%;" />
								<col style="width: 10%;" />
								<col style="width: 25%;" />
								<col style="width: 10%;" />
								<col style="width: 20%;" />
							</colgroup>
							<h3 class="title">
								<span>S-MRO 처리정보</span>
							</h3>
							<tr>
								<th><span>S-MRO 요청번호</span></th>
								<td>${detail.SMRO_RQST_NO}</td>
								<th><span>최종처리상태</span></th>
								<td>${detail.PROC_STATS_NM}</td>
								<th><span>중복상품ID</span></th>
								<td>${detail.PREV_PRD_ID}</td>
							</tr>
							<tr>
								<th><span>예외종료사유</span></th>
								<td colspan="5">${detail.REG_DIS_RSN}</td>

							</tr>
						</table>

			</div>
			<div id="hide2">
						<hr>
						<table cellspacing="0" class="table-row table-a"
							style="margin-bottom: 0;">
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: 25%;" />
								<col style="width: 10%;" />
								<col style="width: 25%;" />
								<col style="width: 10%;" />
								<col style="width: 20%;" />
							</colgroup>
							<h3 class="title">
								<span>대표상품제안 중복상품처리</span>
							</h3>
							<tr>
								<th><span>제안구분</span></th>
								<td colspan="3">
									<input type="radio" id="prpsSpr" name="prpsSpr" value="1"> 대표상품제안
									<input type="radio" id="prpsSpr" name="prpsSpr" value="2"> 중복상품처리
								</td>
								<th><span>제안여부</span></th>
								<td>${detail.PRPS_YN}</td>
							</tr>
							<tr>
								<th><span>상품ID</span></th>
									<td><input type="text" id="rplcPrdId" name="rplcPrdId" value="${detail.RPLC_PRD_ID}" style="width: 200px;"/> 
										<a href="javascript:planProductPopup('frm');" class="icon search2"></a>
									</td>
								<th><span>제안상태</span></th>
								<td>N</td>
							</tr>
							<tr>
								<th><span>고객거부사유</span></th>
								<td colspan="5"><input type="text" maxlength="200" id="custRjtRsn" name="custRjtRsn" value="${detail.CUST_RJT_RSN}" style="width: 1000px; height: 70px;"></td>
							</tr>
						</table>
						<div class="grid section-button-search">
					<a href="javascript:goReset();" id="btn3" class="button small"><span>제안중복처리</span></a>
				</div>
			</div>	
			<div id="hide3">
					<hr>
					<table cellspacing="0" class="table-row table-a"
						style="margin-bottom: 0;">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 25%;" />
							<col style="width: 10%;" />
							<col style="width: 25%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
						</colgroup>
						<h3 class="title">
							<span>등록불가 처리</span>
						</h3>
						<tr>
							<th><span>등록불가유형</span></th>
							<td colspan="5"><select class="select" id="regDisTp" name="regDisTp"	style="width: 100px;">
									<option value="">선택</option>
									<option value="3086">취급불가상품</option>
							</select></td>
						</tr>
						<tr>
							<th><span>상세사유</span></th>
							<td colspan="5"><input type="text" maxlength="200" id="regDisRsn" name="regDisRsn" value="${detail.REG_DIS_RSN}"  style="width: 1000px; height: 70px;"></td>
						</tr>
					</table>
					* 상세사유는 고객에게 노출 되오니 신중하게 작성하시기 바랍니다
				<div class="grid section-button-search">
					<a href="javascript:goReset();" id="btn4" class="button small"><span>등록불가처리</span></a>
				</div>
				<div id="rqstProc">

				</div>		
				<div class="grid section-button-search">
					<a href="javascript:btnOnclickList();" class="button small"><span>목록</span></a>
					<a href="javascript:btnOnclickSave();" class="button small"><span>저장</span></a>
					<!-- 
					<a href="javascript:goSearch();" class="button small primary"><span>조회</span></a>
					 -->
				</div>				
			</div>

				
				</div>
			</div>
		</div>
	</div>

	<div id="quickmenu" class="aside right">
		<%@ include file="/WEB-INF/jsp/am/include/quick.jsp"%>
	</div>


	<div id="footer">
		<%@ include file="/WEB-INF/jsp/am/include/footer.jsp"%>
	</div>

	<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
</form>
</body>

<script src="/am/js/common/jquery.ajax.js"></script>
<script>
var fnOnload = function() {
	fnTabSearch();

	
};
var procStatsCd = '${detail.PROC_STATS_CD}';
var XSTAT='';
$(function(){

	fnShowHide(procStatsCd);
	fnRqstProc();
	
	console.log("product add list jsp load");

	$(document).on('click', '#btn1', function() {

		fnInsertRqstProc($(this),'3038', '1'); //접수 생성
		procStatsCd = '3038';
		fnRqstProc();
		
		var $frm = $("#frm");
		$frm.attr({"action": "<c:out value="${serverDomain}" />/am/prd/prdNew/productNewView.do", "target":"_self", "method":"post"}).submit(); 
		
	});
	
	$(document).on('click', '#btn2', function() {
		
		fnUpdateRqstRegister($(this),'3041', '0'); //등록요청 정보 update 및 인터페이스

		//alert ('인터페이스 완료? ' + i);
		if (XSTAT=='S') {
			fnInsertRqstProc($(this),'3041', '0'); //처리중
			fnInsertRqstProc($(this),'', '1');     //somaru 입력 대기중
			procStatsCd = '3041';
			fnRqstProc();
			
			var $frm = $("#frm");
			$frm.attr({"action": "<c:out value="${serverDomain}" />/am/prd/prdNew/productNewView.do", "target":"_self", "method":"post"}).submit(); 
			
			XSTAT='';
		}
		
	});
	
	$(document).on('click', '#btn3', function() {
		
		var i = fnUpdateRqstRegister($(this),'3039','0'); //등록요청 정보 update 
		fnInsertRqstProc($(this),'3039','1'); //대표상품제안
		procStatsCd = '3039';	
		fnRqstProc();
		
		var $frm = $("#frm");
		$frm.attr({"action": "<c:out value="${serverDomain}" />/am/prd/prdNew/productNewView.do", "target":"_self", "method":"post"}).submit(); 
		
	});	
	
	$(document).on('click', '#btn4', function() {
		
		var i = fnUpdateRqstRegister($(this),'3043','0'); //등록요청 정보 update 
		fnInsertRqstProc($(this),'3043','1'); //등록불가 처리
		procStatsCd = '3043';	
		fnRqstProc();
		
		var $frm = $("#frm");
		$frm.attr({"action": "<c:out value="${serverDomain}" />/am/prd/prdNew/productNewView.do", "target":"_self", "method":"post"}).submit(); 
		
	});	
	
});

function btnOnclickSave() {
	fnUpdateRqstRegister($(this),'3038','0');
	alert ("저장되었습니다.");
	
	var $frm = $("#frm");
	$frm.attr({"action": "<c:out value="${serverDomain}" />/am/prd/prdNew/productNewView.do", "target":"_self", "method":"post"}).submit(); 
	
}

function fnShowHide(procStatsCd) {

	//alert (procStatsCd);
	if (procStatsCd == '3037') {  // 요청
		$("#hide1").hide();
		$("#hide2").hide();
		$("#hide3").hide();
		$("#hide4").hide();
	}else if (procStatsCd == '3038') { // 접수
		$("#hide1").show();
		$("#hide2").show();
		$("#hide3").show();
		$("#hide4").hide();		
		$("#hide6").hide();		
		$('#btn1').attr("disabled", true);		
	}else if (procStatsCd == '3041') { //처리중
		$("#hide1").show();
		$("#hide2").show();
		$("#hide3").show();
		$("#hide4").show();
		$("#hide5").hide();
		$("#hide6").show();
		$('#btn1').attr("disabled", true);	
		$('#btn2').attr("disabled", true); //임시수정	
		$('#btn3').attr("disabled", true);	
		$('#btn4').attr("disabled", true);
		$('#btn5').attr("disabled", true);
	}else if (procStatsCd == '3042' || procStatsCd == '3039' || procStatsCd == '3043' ) { // 처리완료, 대체상품제안, 등록불가
		$("#hide1").show();
		$("#hide2").show();
		$("#hide3").show();
		$("#hide6").hide();
		if (procStatsCd== '3042') {
			$("#hide4").show();	
		}else {
			$("#hide4").hide();	
		}
		$('#btn1').attr("disabled", true);	
		$('#btn2').attr("disabled", true);	
		$('#btn3').attr("disabled", true);	
		$('#btn4').attr("disabled", true);	
	}else if (procStatsCd == '3068' || procStatsCd == '3069') { //예외종료 중복처리
		$("#hide1").show();
		$("#hide2").show();
		$("#hide3").show();
		$("#hide4").show();	
		$("#hide6").hide();
		$('#btn1').attr("disabled", true);	
		$('#btn2').attr("disabled", false);	
		$('#btn3').attr("disabled", true);	
		$('#btn4').attr("disabled", false);		
		
		
	}else {
		$("#hide1").show();
		$("#hide2").show();
		$("#hide3").show();
		$("#hide4").hide();	
		$('#btn1').attr("disabled", true);	
		$('#btn2').attr("disabled", true);	
		$('#btn3').attr("disabled", true);	
		$('#btn4').attr("disabled", true);			
	}
	
	
	/* 임시
	$('#btn1').attr("disabled", false);	
	$('#btn2').attr("disabled", false);	
	$('#btn3').attr("disabled", true);	
	$('#btn4').attr("disabled", false);	
	*/
}

function fnInsertRqstProc(obj, procStatsCd, alertGubun) {
	$('#procStatsCd').val(procStatsCd);
	var $frm = $("#frm");
	
	$.ajax({
		async : false,
		type  : "POST",
		data : $frm.serialize(),	
		dataType : "json",
		url   : "<c:out value='${serverDomain}'/>/am/prd/prdNew/insertRqstProcAjax.json", 
		success : function (data)
		{
			fnShowHide(procStatsCd);
			if (procStatsCd != '') {
				$('#procStatsSeq').val(data);
			}
			if (alertGubun == '1') {
				alert ('처리되었습니다.')
			}
			
			//console.log(JSON.stringify(data));
		},
		
		error : function (err)
		{
			alert("오류가 발생하였습니다.\n[" + err.status + "]");
		}
		
	});	
	
}

function fnUpdateRqstRegister(obj, procStatsCd, alertGubun) {
	$('#procStatsCd').val(procStatsCd);
	var $frm = $("#frm");
	
	$.ajax({
		async : false,
		type  : "POST",
		data : $frm.serialize(),	
		dataType : "json",
		url   : "<c:out value='${serverDomain}'/>/am/prd/prdNew/updateRqstRegisterAjax.json", 
		success : function (data)
		{
			//fnShowHide(procStatsCd);
			if (procStatsCd != '3041') {
				if (alertGubun == '1') {
					alert ('처리되었습니다.');
					return 1;
				}

			}else {
				alert (data.XSTAT);
				if (data.XSTAT=='S') {
					XSTAT= data.XSTAT;
				}else {
					alert (data.XMSGS);
					XSTAT= data.XSTAT;
				}
			}
		},
		error : function (err)
		{
			alert("오류가 발생하였습니다.\n[" + err.status + "]");
			return 0;
		}
		
	});	
	
}

function fnRqstProc() {
	
	//$listForm.find().val();
	var $frm = $("#frm");
	$("#rqstProc").load("/am/prd/prdNew/productRqstProcAjax.json", $frm.serialize());
	
}


//버튼 클릭 시 비활성화
/**
function btn_off() {
	  btn = document.getElementById('btn');
	  btn.disabled = 'disabled';
	 }
	 
	//하단 정보
	$("#hide1").hide();
	$("#hide2").hide();
	$("#hide3").hide();
	$("#hide4").hide();
	
	$(document).on('click', '#btn1', function() {
		$("#hide1").show();
});
	$(document).on('click', '#btn2', function() {
		$("#hide2").show();
});
	$(document).on('click', '#btn3', function() {
		$("#hide3").show();
});
	$(document).on('click', '#btn4', function() {
		$("#hide4").show();
});
	**/
	
</script>
</html>