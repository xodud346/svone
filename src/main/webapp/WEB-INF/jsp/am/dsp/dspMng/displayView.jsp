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
<body><!-- body class, 중요 -->

<div id="header">
	<%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</div>

<div id="container">
	<div id="aside" class="aside left">
		<%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
	</div>

	<div id="wrapper">
		<div id="breadcrumb">
		</div>

		<div id="contents">
			<div class="container">
				<h2 class="title"><span>메인상품관리</span></h2>
				<h3 class="title"><span>채널</span></h3>

				<form id="searchForm" name="searchForm">
					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: auto;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>채널</span></th>
								<td>
									<input type="radio" id="stateB" onclick="search();" name="searchGubun" class="radio" <c:if test="${empty commandMap.seachGubun or commandMap.searchGubun eq 'P' }">checked="checked"</c:if> value="P"/>
									<label for="stateB">PC</label>
									<input type="radio" id="stateC" onclick="search();" name="searchGubun" class="radio" <c:if test="${commandMap.searchGubun eq 'M' }">checked="checked"</c:if> value="M"/>
									<label for="stateC">MOBILE</label>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
				<input type="hidden" name="PRD_CTG_ENV" id="PRD_CTG_ENV" value="<c:out value="${searchGubun}" />" />
				<br/>
				<div class="clearfix">
					<div class="grid">
						<div class="col" style="margin-right: 20px; padding: 10px; padding-right: 20px; border: solid 1px #ccc;">
							<ul id="browser" class="filetree treeview-famfamfam"></ul>
						</div>

						<div class="col-2" style="width:80%; display:none;" id="searchSection">
							<h3 class="title"><span>조회</span></h3>

							<form id="searchForm2" name="searchForm2">
								<input type="hidden" id="CMN_COM_IDX" name="CMN_COM_IDX" value="" />
								<input type="hidden" id="PRD_CLS_CD" name="PRD_CLS_CD" value="" />
								<input type="hidden" id="LIMIT_YN" name="LIMIT_YN" value="Y" />

								<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
									<colgroup>
										<col style="width: 15%;" />
										<col style="width: 85%;" />
									</colgroup>
									<tbody>
										<tr>
											<th><span>구분</span></th>
											<td>
												<input type="radio" id="DSP_MST_LOGIN_YN1" onclick="setLogin(this);" name="DSP_MST_LOGIN_YN" class="radio" value="N" checked="checked" />
												<label for="DSP_MST_LOGIN_YN1">로그인전</label>
												<input type="radio" id="DSP_MST_LOGIN_YN2" onclick="setLogin(this);" name="DSP_MST_LOGIN_YN" class="radio" value="Y" />
												<label for="DSP_MST_LOGIN_YN2">로그인후</label>
											</td>
										</tr>
										<tr id="searchVendorArea" style="display:none;">
											<th><span>사업장</span></th>
											<td>
												<input type="radio" id="DSP_MST_BZPLC_YN1" onclick="setVendor(this)" name="DSP_MST_BZPLC_YN" class="radio" value="N" checked="checked" />
												<label for="DSP_MST_BZPLC_YN1">전체</label>
												<input type="radio" id="DSP_MST_BZPLC_YN2" onclick="setVendor(this)" name="DSP_MST_BZPLC_YN" class="radio" value="Y" />
												<label for="DSP_MST_BZPLC_YN2">사업장별</label>

												<input type="hidden" id="DSP_BZPLC_ID" name=DSP_BZPLC_ID />
												<input type="text" id="DSP_BZPLC_NM" name="DSP_BZPLC_NM" class="text-large" readonly="readonly" style="display:none;" />
												<a href="javascript:bzplcPopup('searchForm2');" class="icon search2" style="display:none;"></a>
											</td>
									</tbody>
								</table>
							</form>

							<div class="grid section-button-search">
								<a href="javascript:reset();" class="button small"><span>초기화</span></a>
								<a href="javascript:searchProductList();" class="button small primary"><span>조회</span></a>
							</div>

							<h3 class="title"><span id="categoryTitle"></span></h3>

							<div id="displayList">
								<%@ include file="/WEB-INF/jsp/am/dsp/dspMng/displayList.jsp" %>
							</div>
						</div>
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

<script src="/am/js/plugins/jquery.cookie.js"></script> <!-- treeview -->
<script src="/am/js/plugins/jquery.treeview.js"></script> <!-- treeview -->
<script src="/am/js/common/jquery.ajax.js"></script>
<script>
$(function() {

	// 카테고리 구분 pc, mobile
	var PRD_CTG_ENV = "<c:out value="${commandMap.PRD_CTG_ENV}" />";

	var idx = "";
   /*  if(PRD_CTG_ENV == ""){
        PRD_CTG_ENV = "<c:out value="${Code.CATEGORY_TYPE_PC}" />";
    } */

	if("<c:out value="${commandMap.CMN_COM_IDX}"/>" != "" ){
		categoryProductList(PRD_CTG_ENV);
		 var idx = $(this).data("idx");
	}

	search = function(){
		var $searchForm = $("#searchForm"); 
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/dsp/dspMng/displayView.do", "target":"_self", "method":"post"}).submit(); 
	};

	reset = function(){
		var $searchForm = $("#searchForm"); 
		$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/dsp/dspMng/displayView.do", "target":"_self", "method":"post"}).submit();
	}

	setLogin = function(id){
		$(id).val() == "Y" ? $("#searchVendorArea").show() : $("#searchVendorArea").hide();
	}

	setVendor = function(id){
		$(id).val() == "Y" ? $("#DSP_BZPLC_ID").nextAll().show() : $("#DSP_BZPLC_ID").nextAll().hide(), $("#DSP_BZPLC_ID").val(""), $("#DSP_BZPLC_NM").val(""); 
	}

	// 상품 카테고리 조회
	categoryProductList(PRD_CTG_ENV);

	$(".folder").hover(function(){
		$(this).addClass("hover");
	}, function(){
		$(this).removeClass("hover");
	});

	$(document).on("click", ".folder", function(){
		idx = $(this).data("idx");
		name = $(this).data("name");
		var categoryId = $(this).data("category");
		var upIdx = $(this).data("upidx");
		if(typeof categoryId != 'undefined'){
			name = $(this).parent().parent().parent().find(".folder").data("name") + " - " + name;
			$("#PRD_CLS_CD").val($(this).data("category"));
		}else{
			$("#PRD_CLS_CD").val("");
		}
		
		if(typeof upIdx != 'undefined' && upIdx == "2991"){
			idx = upIdx;
		}
		$("#CMN_COM_IDX").val(idx);
		$("#categoryTitle").html(name);
		$("#searchSection").show();
		$("#displayList").empty();
		$("#DSP_MST_LOGIN_YN1").click();
		$("#DSP_MST_BZPLC_YN1").click();
	});

	searchProductList = function(){
		var DSP_MST_LOGIN_YN = $("input[name='DSP_MST_LOGIN_YN']:checked").val();
		var DSP_MST_BZPLC_YN = $("input[name='DSP_MST_BZPLC_YN']:checked").val();
		var DSP_BZPLC_ID = $("#DSP_BZPLC_ID").val();

		if(DSP_MST_LOGIN_YN == "Y" && DSP_MST_BZPLC_YN == "Y" && DSP_BZPLC_ID == ""){
			alert("사업장을 선택해주세요.");
			return false;
		}

		var $searchForm = $("#searchForm2");

		$("#displayList").load("/am/dsp/dspMng/displayList.do", $searchForm.serialize());

		/* if(idx != "") {
			$.ajax({
				type : "POST",
				async : true,
				dataType : "html",
				url : '<c:out value="${serverDomain}"/>/am/dsp/dspMng/displayList.do',
				data : {
						'CMN_COM_IDX' : idx,
						'DSP_MST_LOGIN_YN' : DSP_MST_LOGIN_YN,
						'DSP_MST_BZPLC_YN' : DSP_MST_BZPLC_YN,
						'DSP_BZPLC_ID' : DSP_BZPLC_ID
						},
				success : function(data){
					$('#displayList').html(data);  
				}
			});
		} */
	}

	fnResultBzplc = function(params){
		// 초기화
		$("#DSP_BZPLC_ID").val("");
		$("#DSP_BZPLC_NM").val("");

		var id = ''
		,	nm = ''
		,	yn = '';

		$.each(params, function(idx, item){
			if(idx != 0){
				id += ',';
				nm += ',';
			}
			id += item.ID;
			nm += item.NM;
		});
		$("#DSP_BZPLC_ID").val(id);
		$("#DSP_BZPLC_NM").val(nm);
	}

});
function categoryProductList(PRD_CTG_ENV){
	$.postSyncJsonAjax("/am/dsp/dspMng/displayAjax.do", { PRODUCT_DISPLAY_ENV : PRD_CTG_ENV }, function(data){
		$("#browser").html(data.productList);
		$("#browser").treeview({
			toggle: function(){
				console.log("%s was toggled.", $(this).find(">span").text());
			}
		});
	});
}
//-->
</script>

</body>
</html>
