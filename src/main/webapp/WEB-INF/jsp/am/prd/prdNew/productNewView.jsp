<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
</head>
<style type="text/css">
</style>
<script src="/am/js/common/jquery.ajax.js"></script>

<script type="text/javascript">
var $frm = $("#frm");

	jQuery(document).ready(function($) {

		/** 리스트 조회 **/
		//goPage($('#cPage').val());
	});
	$(function() {

		fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -7, 0, 0, 0, '-');
		$("#dateSet").change(
				function() {
					var dateVal = $(this).val();

					if (dateVal == "1d") {
						fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -1,
								0, 0, 0, '-');
					} else if (dateVal == "1w") {
						fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -7,
								0, 0, 0, '-');
					} else if (dateVal == "2w") {
						fnDateSet('searchStartDate', 'searchEndDate', 0, 0,
								-14, 0, 0, 0, '-');
					} else if (dateVal == "1m") {
						fnDateSet('searchStartDate', 'searchEndDate', 0, -1, 0,
								0, 0, 0, '-');
					} else if (dateVal == "3m") {
						fnDateSet('searchStartDate', 'searchEndDate', 0, -3, 0,
								0, 0, 0, '-');
					} else if (dateVal == "6m") {
						fnDateSet('searchStartDate', 'searchEndDate', 0, -6, 0,
								0, 0, 0, '-');
					} else if (dateVal == "1y") {
						fnDateSet('searchStartDate', 'searchEndDate', -1, 0, 0,
								0, 0, 0, '-');
					}

				});
	$(document).on('change', '#pageSize', function() {
			var pageSize = $(this).val();

			$('#pageSize').val(pageSize);
			goPage();
		});

		$(document).on('click', '#btnSearch', function() {
			goPage($('#cPage').val());
		});

		$(document).on('click', '#chk_all', function() {
			$("input[name=shProcStats]:checkbox").prop('checked', true);
		});
		
		$(document).on('change', '#selSort', function() {
		    var selSort =  $(this).val();
		    
		    $('#selSort').val(selSort);
		    goPage();
		})
		/**
		$("#chk_all").click(function() {
			$("input[name=shProcStats]:checkbox").attr("checked", true);
		});
		 **/
		
	});
	/**
	goSearch = function(){
		var $frm = $("#frm");
		$frm.find("input[name='searchYn']").val("Y");
		$("#productNewList").load("/am/prd/prdNew/ProductNewViewAjax.do", $frm.serialize());
	} 
	 **/
	/* 조회, 목록, 페이징 display 같이씀 */
	goPage = function(cPage) {
			// 출력 개수 선택
		//$listForm.find().val();
		var $frm = $("#frm");
		$frm.find("input[name='searchYn']").val("Y");
		$("#cPage").val(cPage);
		// 체크여부 확인
		if ($("input:checkbox[name=rqstPrdNmChk]").is(":checked") == false) {
			$('#rqstPrdNmChk').val('N');
		}
		$("#productNewList").load("/am/prd/prdNew/productNewViewAjax.json", $frm.serialize());
		
	}
	//상세보기
	btnOnclickDetail = function(rqstNo, procStatsSeq) {
		var $frm = $("#frm");
		$('#rqstNo').val(rqstNo);
		$('#procStatsSeq').val(procStatsSeq);
		$frm.attr({
							"action" : "<c:out value="${serverDomain}" />/am/prd/prdNew/productNewViewDetail.do",
							"target" : "_self",
							"method" : "post"
				  }).submit();
	}
	goReset = function() {

		$("#contents").find("input,select").val("");
		$("input[name=shProcStats]:checkbox").prop('checked', false);

		//$("#contents").find("checkbox").removeAttr('checked');   

		$("#chk_all").val("전체");
		$("#selSort").val("rtDn");
		$("#pageSize").val("20");
	}
	
	//팝업
	
	function multiTextPopup(frm){
		
		//$('#id').val('multiId');
		popup('', "500", "700", "yes","_multiTextPopup");
		$('#'+frm).attr({"action":"/am/prd/ctgMng/multiTextPopup.do", "target":"popup_multiTextPopup", "method":"post"}).submit();
	} 
	
	function productPopup(frm){
		popup('', "1400", "700", "yes", "_productPopup");
		$('#'+frm).attr({"action":"/am/com/popUp/prd/productPopupForm.do", "target":"popup_productPopup", "method":"post"}).submit();
	}
	
	function fnOneBzplcResult(frm){
		popup('', "500", "700", "yes","_bzplcPopup");
		$('#'+frm).attr({"action":"/am/com/popUp/onebzplcPopupForm.do", "target":"popup_onebzplcPopup", "method":"post"}).submit();
	}
	
	function sspCategoryPopup(frm){
		popup('', "700", "500", "yes", "_sspCategoryPopup");
		$('#'+frm).attr({"action":"/am/com/popUp/prd/sspCategoryPopupForm.do", "target":"popup_sspCategoryPopup", "method":"post"}).submit();
	}

	function manufacturerPopup(frm){
		popup('', "700", "500", "yes", "_manufacturerPopup");
		$('#'+frm).attr({"action":"/am/com/popUp/prd/manufacturerPopupForm.do", "target":"popup_manufacturerPopup", "method":"post"}).submit();
	}

	function fnService3Result(frm){
		popup('', "500", "700", "yes","_service3Popup");
		$('#'+frm).attr({"action":"/am/com/popUp/service3PopupForm.do", "target":"popup_service3Popup", "method":"post"}).submit();
	} 
	
	function employee2Popup(frm){
		popup('', "500", "700", "yes","_employee2Popup");
		$('#'+frm).attr({"action":"/am/com/popUp/employee2PopupForm.do", "target":"popup_employee2Popup", "method":"post"}).submit();
	 
	}
	
	function requestPopup(frm){
		popup('', "500", "700", "yes","_requestPopup");
		$('#'+frm).attr({"action":"/am/com/popUp/requestPopupForm.do", "target":"popup_requestPopup", "method":"post"}).submit();
	 
	}
	
	function fn_mallSpr() {
		
	}
	
//팝업 호출
	//multi 팝업
	function fnResultText(params) {
	//alert (params.id);
		$("#multiId").val(params.data);
	}


    //상품ID
	function fnSetProduct(params) {
		//console.log('params',params);
		$("#prdId").val(params.prdId);  //off
	}
	
	//카테고리
	function fnResultSspCategory(params) {
		$("#prdClsCd").val(params.prdClsCd);
		$("#prdClsNm").val(params.prdClsNm); //on
	}
    //제조원
	function fnResultManufacturerMapp(obj) {
		$("#mnfrId").val(obj.mnfrNo);
		$("#mnfrNm").val(obj.sgMnfrNm);      //on
	}
	//담당자
	function fnServiceResultCallback(inputArray) {
		//console.log('inputArray',inputArray);
		$("#chrpsnId").val(inputArray.CHRPSN_ID);
		$("#chrpsnNm").val(inputArray.CHRPSN_NM);   //off
	}
	//처리자
	function fnEmployeeSingleCallback(inputArray) {
    	console.log('inputArray',inputArray);
    	$("#dealrId").val(inputArray.DEALR_ID);
    	$("#dealrNm").val(inputArray.DEALR_NM);  //off
    }
	//사업장
	function fnOneBzplcResultCallback(inputArray) {
    	console.log('inputArray',inputArray);
    	$("#bzplcId").val(inputArray.BZPLC_ID);
    	$("#bzplcNm").val(inputArray.BZPLC_NM);    //off
    } 
	function fnRequestResultCallback(inputArray) {
    	console.log('inputArray',inputArray);
    	$("#reqrId").val(inputArray.REQR_ID);
    	$("#reqrNm").val(inputArray.REQR_NM);    //off
    } 
	//엑셀 다운로드
	function goExcelDown() {
		debugger;
		var totalCnt = $("#pages .em").html()

		if (totalCnt > 30000) {
			alert("엑셀 다운로드는 30000건 이하만 a.");
			return;
		} else if (totalCnt == 0) {
			alert("저장할 내역이 없습니다."); 
			return;
		}
		var $frm = $("#frm");
		$frm.attr({"action": "<c:out value="${serverDomain}" />/am/prd/prdNew/selectProductListExcel.do", "target":"_self", "method":"post"}).submit(); 
		
	};
</script>
<body >
	<form id="frm" name="frm">
		<input type="hidden" id="coCd" name="coCd" value="${commandMap.coCd}" />
		<input type="hidden" id="memId" name="memId" value="${commandMap.memId}">
		<input type="hidden" id="langCd" name="langCd" value="${commandMap.langCd}" />

		<input type="hidden" id="mallId" name="mallId" value="${commandMap.mallId}">
		<input type="hidden" id="curUntCd" name="curUntCd" value="${commandMap.curUntCd}"> 
		<input type="hidden" id="rqstNo" name="rqstNo" value=""> 
		<input type="hidden" id="procStatsSeq" name="procStatsSeq" value="">
		<input type="hidden" id="procStatsCd" name="procStatsCd" value="">		
		
		<input type="hidden" id="cPage" name="cPage" value="1" /> 
		<input type="hidden" id="searchYn" name="searchYn" value="Y" />
		<input type="hidden" id="id" name="id" value="" />
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
							<span>신규상품요청 목록</span>
						</h2>
						<h3 class="title">
							<span>조회</span>
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
									<th><span>요청번호.상품ID</span></th>
									<td><input type="text" id="multiId" name="multiId" style="width: 200px;" placeholder='요청번호, 상품ID,   상품ID만 검색 가능' />
									    <a href="javascript:multiTextPopup('frm');" class="icon doc"></a>
									</td>
									<th><span>몰구분</span></th>
									<td><select class="select" id="mallSprCd" name="mallSprCd" style="width: 70px;" onclick="javascript:fn_mallSpr();">
											<!-- <option value="">전체</option>  -->
											<option value="10">SSP</option>
											<option value="20">R&D</option>
									</select></td>
									<th><span>공용전용구분</span></th>
									<td><select class="select" name="pubDvrsSpr">
											<option value="">전체</option>
											<option value="41">공용</option>
											<option value="42">전용</option>
									</select></td>
								</tr>
								<tr>
									<th><span>사업장/운영단위</span></th>
									<td colspan="3"><select class="select" id="selBzpOpr"
										name="selBzpOpr" style="width: 100px;">
											<option value="bzplc">사업장</option>
											<option value="oprUnt">운영단위</option>
									</select> 
									<input type="text" id="bzplcId" name="bzplcId" style="width: 80px;" />
										 <input type="text" id="bzplcNm" name="bzplcNm" style="width: 120px;" /> 
										 <a href="javascript:fnOneBzplcResult('frm');" class="icon search2"></a>
									</td>
									<th><span>카테고리</span></th>
									<td><input type="text" id="prdClsCd" name="prdClsCd"
										style="width: 80px;" /> <input type="text" id="prdClsNm" name="prdClsNm" style="width: 120px;" />
										 <a href="javascript:sspCategoryPopup('frm');" class="icon search2"></a></td>
								</tr>
								<tr>
									<th><span>일자</span></th>
									<td colspan="3">
									<select class="select" id="selRqstCmpl"	name="selRqstCmpl" style="width: 100px;">
											<option value="">전체</option>
											<option value="rqstDtm">요청일</option>
											<option value="cmplDtm">최종처리일</option>
									</select> 
									<a href="javascript:;" class="js-datepickr">
									<span class="icon datepickr"><em>날짜선택</em></span></a>
									 <input type="text" class="text small" id="searchStartDate" name="searchStartDate" value="${commandMap.searchStartDate}" readonly="readonly" data-target-end="#searchEndDate" /> ~ 
									 <a href="javascript:;" class="js-datepickr">
									 <span class="icon datepickr"><em>날짜선택</em></span></a> 
									 <input type="text" class="text small" id="searchEndDate" name="searchEndDate" value="${commandMap.searchEndDate}" readonly="readonly" data-target-start="#searchStartDate" /> 
									 <select id="dateSet" name="dateSet" class="select small">
											<option value="">전체</option>
											<option value="1w">1주일</option>
											<option value="2w">2주일</option>
											<option value="1m">1개월</option>
											<option value="3m">3개월</option>
											<option value="6m">6개월</option>
											<option value="1y">1년</option>
									</select></td>
									<th><span>대표상품구분</span></th>
									<td><select class="select" name="reprPrdSpr" id="reprPrdSpr">
											<option value="">전체</option>
										<c:forEach var="list" items="${reprPrdSpr}" varStatus="status">
		                                	<option value="${list.CMN_COM_IDX}">${list.CMN_COM_NM}</option>
		                                </c:forEach>
										</select>
									</td>
								</tr>
								<tr>
									<th><span>처리상태</span></th>
									<td colspan="3">
										<div>
											<input type="button" name="chk_all" id="chk_all" value="전체" />
											<input type="checkbox" name="shProcStats" id="shProcStats1" value="" checked /> 
											<label for="shProcStats1">요청</label> 
											<input type="checkbox" name="shProcStats" value="" id="register" />
											<label for="ipt102">접수</label> 
											<input type="checkbox" name="shProcStats" value="" id="processing" /> 
											<label for="ipt103">처리중</label>
											<input type="checkbox" name="shProcStats" value="" id="rprsnPrdpr" />
											<label for="ipt104">대표상품제안</label> 
											<input type="checkbox" name="shProcStats" id="" value="rfmkSgstn" /> 
											<label for="ipt105">제안거부</label> 
											<input type="checkbox" name="shProcStats" value="" id="transactions" /> 
											<label for="ipt106">처리완료</label> 
											<input type="checkbox" name="shProcStats" value="" id="unableRegister" />
											<label for="ipt107">등록불가</label> 
											<input type="checkbox" name="shProcStats" value="" id="processingWait" /> 
											<label for="ipt108">처리대기</label>
										</div>
									</td>
									<th><span>제안상태</span></th>
									<td><select class="select" name="prpsStats" id="prpsStats">
											<option value="">전체</option>
											<option value="proposed">제안중</option>
											<option value="success">성공</option>
											<option value="refusal">거부</option>
									</select></td>
								</tr>
								<tr>
									<th><span>담당자</span></th>
									<td>
									<input type="text" id="chrpsnId" name="" style="width: 80px;" /> <input type="text" id="chrpsnNm" name="" style="width: 150px;" />
									<a href="javascript:fnService3Result('frm');" class="icon search2"></a></td>
									<th>
									<span>처리자</span></th>
									<td>
									<input type="text" id="dealrId" name="dealrId" style="width: 80px;" /> 
									<input type="text" id="dealrNm" name="dealrNm" style="width: 150px;" /> <a href="javascript:employee2Popup('frm');"
										class="icon search2"></a></td>
									<th><span>요청자</span></th>
									<td><input type="text" id="reqrId" name="reqrId" style="width: 80px;" /> 
									<input type="text" id="reqrNm" name="reqrNm" style="width: 120px;" /> 
									<a href="javascript:requestPopup('frm');" class="icon search2"></a></td>
								</tr>
								<tr>
								<th>
									<span>상품명</span></th>
								<td>
									<input type="text" id="rqstPrdNm" name="rqstPrdNm" style="width: 235px;" placeholder='검색 가능'/>
								    <a href="javascript:;" class=""></a>
										<input type="checkbox" id="rqstPrdNmChk" name="rqstPrdNmChk" value="Y" /> 
										<label for="ipt109"></label></td>
								<th>
									<span>규격</span></th>
								<td>
									<input type="text" id="rqstAllAttr" name="rqstAllAttr" style="width: 235px;" placeholder='검색 가능'/> <a href="javascript:;" class=""></a>
								</td>
								<th>
									<span>제조원</span>
								</th>
								<td>
									<input type="text" id="mnfrId" name="mnfrId" style="width: 80px;" placeholder='검색 가능'/> 
									<input type="text" id="mnfrNm" name="mnfrNm" style="width: 120px;" /> 
									<a href="javascript:manufacturerPopup('frm');" class="icon search2"></a></td>
								</tr>
							</tbody>
						</table>


						<div class="grid section-button-search">
							<a href="javascript:goReset();" class="button small"><span>초기화</span></a>
							<a href="#none" id="btnSearch" class="button small primary"><span>조회</span></a>
						</div>
						
						

						<h3 class="title">
							<span>목록</span>
						</h3>
						
						<div id="productNewList">
						</div>
						
					</div>
				</div>
			</div>

			<div id="quickmenu" class="aside right">
				<%@ include file="/WEB-INF/jsp/am/include/quick.jsp"%>
			</div>
		</div>

		<div id="footer">
			<%@ include file="/WEB-INF/jsp/am/include/footer.jsp"%>
		</div>

		<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
	</form>
</body>

</html>