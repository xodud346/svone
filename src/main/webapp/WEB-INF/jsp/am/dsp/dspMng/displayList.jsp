<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="contents-inner">
	<div class="grid section-button-list">
		<div class="col-1-2 text-left">
			<span>※ 사용 상태 상품 8배수로 등록 필수</span>
		</div>

		<div class="col-1-2 text-right">
			<a href="javascript:deleteDisplayProduct();" class="button small"><span>상품삭제</span></a>
			<a href="javascript:openSearchProductPopup();" class="button small" "title="새 창 으로 열립니다."><span>상품등록</span></a>
			<a href="javascript:;" id="modifySort" class="button small primary"><span>저장</span></a>
		</div>
	</div>

	<form id="frm" name="frm">
	<input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/> 
	<input type="hidden" name="searchBnrMstTitle" value="<c:out value="${commandMap.searchBnrMstTitle }"/>"/>
	<input type="hidden" name="searchType" value="<c:out value="${commandMap.searchType }"/>"/>
	<input type="hidden" name="searchStartDate" value="<c:out value="${commandMap.searchStartDate }"/>"/>
	<input type="hidden" name="searchEndDate" value="<c:out value="${commandMap.searchEndDate }"/>"/>
	<input type="hidden" name="searchBnrMstUseYn" value="<c:out value="${commandMap.searchBnrMstUseYn }"/>"/>
	<input type="hidden" id="CMN_COM_IDX" name="CMN_COM_IDX" value="<c:out value="${commandMap.CMN_COM_IDX }"/>" />
	<input type="hidden" id="PRD_CTG_ENV" name="PRD_CTG_ENV" value="<c:out value="${commandMap.PRD_CTG_ENV }"/>" />
	<input type="hidden" id="searchGubun" name="searchGubun" value="<c:out value="${commandMap.searchGubun }"/>" />
	<input type="hidden" id="searchPrdType" name="searchPrdType" value="banner" />
	<input type="hidden" id="searchYn" name="searchYn" value="Y" />
	<input type="hidden" id="searchPrdCtgEnv" name="searchPrdCtgEnv" value="<c:out value="${commandMap.PRD_CTG_ENV }"/>" />
	<input type="hidden" id="searchPrdMstChannelType" name="searchPrdMstChannelType" value="<c:out value="${commandMap.PRD_CTG_ENV }"/>" />

		<div class="table-a">
			<table class="table-col table-b">
				<colgroup>
					<col style="width: 5%;" />
					<col style="width: 10%;" />
					<col style="width: auto;" />
					<col style="width: 20%;" />
					<col style="width: 10%;" />
					<col style="width: 10%;" />
					<col style="width: 10%;" />
				</colgroup>
				<thead>
					<tr>
						<th><input type="checkbox" class="checkbox checkAll" /></th>
						<th>상품코드</th>
						<th>상품명</th>
						<th>구분</th>
						<th>판매상태</th>
						<th>등록일</th>
						<th>전시순서</th>
					</tr>
				</thead>
				<tbody class="sort-target">
				<c:choose>
					<c:when test="${searchYn eq 'Y' }">
						<c:choose>
							<c:when test="${not empty list}">
							<c:forEach var="row" items="${list }" varStatus="i">
								<tr>
									<td class="list-sort" data-dsp_detail_idx="<c:out value="${row.DSP_DETAIL_IDX }"/>" data-dsp_mst_idx="<c:out value="${row.DSP_MST_IDX }"/>" data-dsp_mst_txt="<c:out value="${row.DSP_MST_TXT }" />">
										<input type="checkbox"  class="checkbox checkRow" id="DSP_DETAIL_IDX_${row.DSP_DETAIL_IDX}" name="DSP_DETAIL_IDX" value="${row.DSP_DETAIL_IDX}" />
										<input type="hidden" class="PRD_MST_CDs" name="PRD_MST_CDs" value="${row.PRD_MST_CD }" />
										<input type="hidden" name="DSP_BZPLC_ID" value="${row.DSP_BZPLC_ID }" />
									</td>
									<td>
										<a href="<c:out value="${serverDomain}" />/am/product/basicProductEdit.do?PRD_MST_CD=<c:out value="${row.PRD_MST_CD }" />" target="_blank" title="새 창 으로 열립니다.">
											<c:out value="${row.PRD_MST_CD }" />
										</a>
									</td>
									<td>
										<c:out value="${row.DSP_MST_TXT }" />
									</td>
									<td>
										<c:if test="${row.DSP_MST_LOGIN_YN eq 'N'}">로그인전</c:if>
										<c:if test="${row.DSP_MST_LOGIN_YN eq 'Y' and row.DSP_MST_BZPLC_YN eq 'N'}">로그인후 전체</c:if>
										<c:if test="${row.DSP_MST_LOGIN_YN eq 'Y' and row.DSP_MST_BZPLC_YN eq 'Y'}">${row.DSP_BZPLC_NM }</c:if>
									</td>
									<td>
										<c:if test="${row.PRD_MST_SEL_STATE eq Code.PRODUCT_SELL_STATE_ING}"><span class="history-condition success center" ><i class="fonti um-circle"></i>판매중</span></c:if>
										<c:if test="${row.PRD_MST_SEL_STATE eq Code.PRODUCT_SELL_STATE_OP_TEMPOUT}" ><span class="history-condition info center"><i class="fonti um-circle"></i>일시품절</span></c:if> 
										<c:if test="${row.PRD_MST_SEL_STATE eq Code.PRODUCT_SELL_STATE_TEMPOUT}" ><span class="history-condition info center"><i class="fonti um-circle"></i>품절상품</span></c:if> 
										<c:if test="${row.PRD_MST_SEL_STATE eq Code.PRODUCT_SELL_STATE_STOP}" ><span class="history-condition info center"><i class="fonti um-circle"></i>미판매</span></c:if> 
									</td>
									<td>
										<ui:formatDate value="${row.DSP_MST_REG_DT }" pattern="yyyy.MM.dd"/>
									</td>
									<td>
										<a href="#none" class="row-sort" data-sort_type="up">△ </a>
										<a href="#none" class="row-sort" data-sort_type="down"> ▽</a>
									</td>
								</tr>
							</c:forEach>
							</c:when>
							<c:otherwise>
								<tr>
									<td class="td_no_result" colspan="7">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
								</tr>
							</c:otherwise>
						</c:choose>
					</c:when>
					<c:otherwise>
						<tr>
							<td class="td_no_result" colspan="7">${Code.COMMON_MESSAGE_DO_SEARCH_}</td>
						</tr>
					</c:otherwise>
				</c:choose>
				</tbody>
			</table>
		</div>	
	</form>
</div>

<script type="text/javascript">
$(document).ready(function () {
	
	$.checkBoxSelect("checkAll", "checkRow");

	/*
	// 페이지 이동
	goPage = function (cPage){
		var $frm = $("#frm");
		var url = "<c:out value="${serverDomain}"/>/am/display/productDisplayList.do";
		$frm.find("input[name='searchBnrMstTitle']").val(Base64.encode($frm.find("input[name='searchBnrMstTitle']").val()));
		$frm.find("input[name='cPage']").val(cPage);
		callPageLoad(url, param);
	};

	// 페이지 로드
	callPageLoad = function (url, param){
		$("#main_con").empty();
		$("#main_con").load(url, param, function (){
			treePageSetting();
		});
	};
	*/

	fnRegistProduct = function(params, object){
		var frm = $("#frm");
		$.each(params, function(index, item){
			frm.append('<input type="hidden" name="PRD_MST_CD" value="' + item.PRD_MST_CD + '" />');
			frm.append('<input type="hidden" name="PRD_MST_NM" value="' + item.PRD_MST_NM + '" />');
		});
		frm.append('<input type="hidden" name="DSP_MST_LOGIN_YN" value="' + object.DSP_MST_LOGIN_YN + '"/>');
		frm.append('<input type="hidden" name="DSP_MST_BZPLC_YN" value="' + object.DSP_MST_BZPLC_YN + '"/>');
		frm.append('<input type="hidden" name="BZPLC_ID" value="' + object.DSP_BZPLC_ID + '"/>');
		frm.attr({"action":"<c:out value="${serverDomain}" />/am/dsp/dspMng/displayRegist.do", "target":"_self", "method":"post"}).submit();
	}

	// 선택 항목 삭제
	deleteDisplayProduct = function(){
		if( $(".checkRow:checked").length == 0 ){
			alert("삭제할 상품을 선택하여 주십시오.");
			return;
		}
		if(!confirm('체크된 항목을 삭제하시겠습니까?')){
			return;
		}
		$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/dsp/dspMng/displayRemove.do", "target":"_self", "method":"post"}).submit();
	};

	//상품 중복체크
	fnDuplicationChk = function(selectObj){
		var bReturn = true;
		var $obj = $("#frm").find(".PRD_MST_CDs");
		$.each($obj, function(){
			if(selectObj == $(this).val()){
				bReturn = false;
				return false;
			}
		});
		return bReturn;
	};

	// 상품선택 팝업
	openSearchProductPopup = function(){
		popup('',"1400","300","no","_DisplayPopup");
		$("#frm").attr({"action":"<c:out value="${serverDomain}" />/am/dsp/dspMng/displayPopup.do", "target":"popup_DisplayPopup", "method":"post"}).submit();
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

			$(".sort-target").find("tr").each(function(i){
				var $tr = $(this).find(".list-sort");
				idxArray.push($tr.data("dsp_detail_idx"));
			});

			$.ajax({
				async : false,
				type : "POST",
				url : "<c:out value="${serverDomain}" />/am/dsp/dspMng/displaySort.do", 
				data : {"DSP_MST_IDX" : idxArray},
				success : function(data){
					alert(data.message);
				},
				error : function(){
					alert("오류가 발생하였습니다.\n다시 시도 해 주십시오.");   
				}
			});
		}
	});
});
</script>