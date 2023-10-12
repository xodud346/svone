<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"><!--<![endif]-->
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
</head>
<body class="page-popup">

<div class="modal">
	<div class="modal-wrapper">
		<div class="modal-inner">

			<div class="push-guide instant">
				<i class="icon"></i>
				<h3 class="title"><span>상품등록</span></h3>
			</div>

			<form id="searchForm">
				<input type="hidden" name="searchCnt" value="100"/>
				<input type="hidden" id="PRD_MST_CD" name="PRD_MST_CD" />
				<input type="hidden" id="PRD_MST_NM" name="PRD_MST_NM" />
				<input type="hidden" id="params" name="params" />
				
				<input type="hidden" id="PRD_MST_SEL_STATE" name="PRD_MST_SEL_STATE" />

				<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
					<colgroup>
						<col style="width: 15%;" />
						<col style="width: auto;" />
					</colgroup>
					<tbody>
						<tr>
							<th><span>구분</span></th>
							<td>
								<input type="radio" id="stateB" onclick="setLogin(this)" name="checkLogin" class="radio" value="N" checked="checked" />
								<label for="stateB">로그인전</label>
								<input type="radio" id="stateC" onclick="setLogin(this)" name="checkLogin" class="radio" value="Y" />
								<label for="stateC">로그인후</label>
							</td>
						</tr>
						<tr id="bzplcTab1" style="display:none;">
							<th><span>대상</span></th>
							<td>
								<input type="radio" id="stateD" onclick="setVendor(this)" name="checkVendor" class="radio" value="N" checked="checked" />
								<label for="stateD">전체</label>
								<input type="radio" id="stateE" onclick="setVendor(this)" name="checkVendor" class="radio" value="Y" />
								<label for="stateE">사업장별</label>

								<input type="hidden" id="DSP_BZPLC_NO" name="DSP_BZPLC_NO" />
								<input type="hidden" id="DSP_BZPLC_ID" name="DSP_BZPLC_ID" />
								<input type="text" id="DSP_BZPLC_NM" name="DSP_BZPLC_NM" class="text-large" readonly="readonly" style="display:none;" />
								<a href="javascript:bzplcPopup('searchForm');" class="icon search2" style="display:none;"></a>
							</td>
						</tr>
						<tr id="bzplcTab2" style="display:none;">
							<td>
								
							</td>
						</tr>
						<tr>
							<th><span>상품ID</span></th>
							<td>
								<input type="text" id="PRD_CD" class="text-xlarge" />
								<a href="javascript:openDisplayProductPopup();" class="icon search2"></a>
								<br>
								<span>상품ID는 쉼표 “,”로 구분하여 입력해주세요.</span>
							</td>
						</tr>
					</tbody>
				</table>
			</form>

			<div class="grid section-button-search">
				<div class="wrap text-center">
					<a href="#none" id="closePopup" class="button large"><span>취소</span></a>
					<a href="javascript:;" id="applyProduct" class="button large primary"><span>저장</span></a>
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
$(document).ready(function (){
	
	var array;
	
	$(document).on("click", "#closePopup", function(){
		if(confirm("입력한 내용은 저장되지 않습니다. 목록으로 이동하시겠습니까?")) self.close();
	});

	$(document).on("click", "#applyProduct", function(){
		var obj = new Object();
		var DSP_MST_LOGIN_YN = $("input[name='checkLogin']:checked").val();
		var DSP_MST_BZPLC_YN = $("input[name='checkVendor']:checked").val();
		var DSP_BZPLC_ID = $("#DSP_BZPLC_ID").val();

		obj.DSP_MST_LOGIN_YN = DSP_MST_LOGIN_YN;
		obj.DSP_MST_BZPLC_YN = DSP_MST_BZPLC_YN;
		obj.DSP_BZPLC_ID = DSP_BZPLC_ID;

		if(DSP_MST_LOGIN_YN == "Y" && DSP_MST_BZPLC_YN == "Y" && DSP_BZPLC_ID == ""){
			alert("사업장을 선택해주세요.");
			return false;
		}
		if(PRD_MST_CD == ""){
			alert("상품ID를 입력해주세요");
			return false;
		}else{
			
			$.ajax({
				url : '<c:out value="${serverDomain}" />/am/dsp/dspMng/displayPopupAjax.do',
				type : 'POST',
				dataType : 'json',
				data : {PRD_MST_CD : $("#PRD_CD").val()},
				success : function(data){
					if(data.result == "N"){
						alert("없는 상품ID가 있습니다. 상품ID를 확인해주세요.");
						return false;
					} else if(data.result == "Y"){
						window.opener.fnRegistProduct(array, obj);
						self.close();
					}
				}
			});
		}
	});

	setLogin = function(id){
		$(id).val() == "Y" ? $("#bzplcTab1").show() : $("#bzplcTab1").hide();
	}

	setVendor = function(id){
		$(id).val() == "Y" ? $("#DSP_BZPLC_ID").nextAll().show() : $("#DSP_BZPLC_ID").nextAll().hide();
	}

	openDisplayProductPopup = function(){
		popup('', "900", "700", "yes", "_DisplayProductPopup");
		//$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/dsp/dspMng/displayProductPopup.do", "target":"popup_DisplayProductPopup", "method":"post"}).submit();
		$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/com/popUp/prd/productPopupForm.do", "target":"popup_DisplayProductPopup", "method":"post"}).submit();
	}

	bzplcDel = function(id){
		id.remove();

		var params = new Array();

		$("#bzplcTab2 > td > a").each(function(index, item){
			obj = new Object();
			obj.ID = $(this).data('id');
			obj.NM = $(this).data('nm');
			obj.NO = $(this).data('no');

			params.push(obj);
		});

		fnResultBzplc(params);
	}

	fnResultBzplc = function(params){
		var id = "";
		var nm = "";
		var no = "";
		var html = "";

		$.each(params, function(index, item){
			html += '<span>' + item.NM +'</span>&nbsp;';
			html += '<a href="javascript:;" onclick="bzplcDel(this);" id="bzplcId_' + item.ID + '" data-id="' + item.ID +'" data-nm="' + item.NM +'" data-no="' + item.NO + '"><span>X</span></a>&nbsp;&nbsp;&nbsp;&nbsp;';
			if(index != 0){
				id += ",";
				nm += ", ";
				no += ", ";
			}
			id += item.ID;
			nm += item.NM;
			no += item.NO;
		});

		if(params.length < 1){
			$("#bzplcTab1").find("th").attr("rowspan", 1);
			$("#bzplcTab2").hide();
		} else {
			$("#bzplcTab1").find("th").attr("rowspan", 2);
			$("#bzplcTab2").show();
			$("#bzplcTab2").find("td").html(html);
		}

		$("#DSP_BZPLC_ID").val(id);
		$("#DSP_BZPLC_NM").val(nm);
		$("#DSP_BZPLC_NO").val(no);
	}

	fnSetProduct = function(params){
		var cd = "";
		var nm = "";
		var state = "";
		var id = "";
    	var obj;
    	array = new Array();

		$.each(params, function(index, item){
			if(index != 0){
				cd += ",";
				nm += ",";
				state += ",";
				id += ", ";
			}
			cd += item.prdId;
			nm += item.prdNm;
			state += item.PRD_MST_SEL_STATE;
			id += item.prdId;
			
			obj			= new Object();
			obj.PRD_MST_NM	= item.prdNm;
			obj.PRD_MST_CD	= item.prdId;
			obj.PRD_CD	= item.prdId;
			
			array.push(obj);
		});

		$("#PRD_MST_CD").val(cd);
		$("#PRD_MST_NM").val(nm);
		$("#PRD_MST_SEL_STATE").val(state);
		$("#PRD_CD").val(id);
	}
});
</script>
<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
</body>
</html>