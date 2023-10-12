<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>참여자 조회</title>
</head>
<body class="page-popup">
	<div class="modal">
		<div class="modal-wrapper">
			<div class="modal-inner">
				<h3 class="title"><span>참여자 조회</span></h3>
				<form id="frm" name="frm">
					<input type="hidden" id="cPage" name="cPage" value="${paging.pageSize }"/>
					<input type="hidden" id="pageSize" name="pageSize" value="${paging.pageSize }" />
					<input type="hidden" id="formType" name="formType" value="search" />
					<input type="hidden" id="POP_MST_IDX" name="POP_MST_IDX" value="" />
					<input type="hidden" id="LIMIT_YN" name="LIMIT_YN" value="${map.LIMIT_YN}" />
					<!-- 공통코드 기준 데이터 -->
					<input type="hidden" name="evtMstIdx" value="${map.evtMstIdx }" />

					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 35%;" />
							<col style="width: 15%;" />
							<col style="width: 40%;" />
						</colgroup>
						<tbody>
							<tr>
								<!-- 회원 -->
								<th scope="col"><span>회원</span></th>
								<td>
									<input type="text" class="text" name="memNms" id="memNms" value="" readonly />
									<a href="javascript:clientMultiPopup('frm', 'memIds');" class="icon search2"></a>
									<a href="javascript:multiTextPopup('memIds');" class="icon doc textPopup"></a>
									<!-- hidden area -->
									<input type="hidden" name="memIds" id="memIds" value=""/>
								</td>
								<!-- 댓글공개여부 -->
								<th scope="col"><span>댓글 공개 여부</span></th>
								<td>
									<input type="radio" class="radio" name="evtRplDplYn" id="evtRplDplYn_" value="" checked="checked"/>
									<label for="evtRplDplYn_">전체</label>
									<input type="radio" class="radio" name="evtRplDplYn" id="evtRplDplYn_Y" value="Y"/>
									<label for="evtRplDplYn_Y">공개</label>
									<input type="radio" class="radio" name="evtRplDplYn" id="evtRplDplYn_N" value="N"/>
									<label for="evtRplDplYn_N">비 공개</label>
								</td>
							</tr>

							<tr>
								<th scope="col"><span>참여 기간</span></th>
								<td colspan="3">
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchStrDt" name="searchStrDt" readonly="readonly" data-target-end="#searchEndDt" placeholder="YYYY-MM-DD" />
									~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchEndDt" name="searchEndDt" readonly="readonly" data-target-start="#searchStrDt" placeholder="YYYY-MM-DD" />
								</td>
							</tr>
						</tbody>
					</table><!-- // table -->
				</form>

				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
					<a href="javascript:frmClear();" id="searchClear" class="button small"><span>초기화</span></a>
					<a href="javascript:search();" class="button small primary"><span>검색</span></a>
				</div>

				<!-- 조회 결과 영역 -->
				<div id="popList">
					<%-- <%@ include file="/WEB-INF/jsp/am/prm/evnMng/rplEvtHistPopupList.jsp" %> --%>
				</div>
				<!-- //조회 결과 영역 -->

				<div class="section-button">
					<div class="wrap text-center">
						<a href="javascript:self.close();" class="button large"><span>취소</span></a>
						<a href="javascript:goRegist();" class="button large primary"><span>저장</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>

<%@ include file="/WEB-INF/jsp/am/include/script.popup.jsp"%>

<script type="text/javascript">
$(function(){
	var $frm = $("#frm");

	// 초기화
	frmClear = function(){
		searchClear('frm', {useYn: "Y"});
		$('input[name="memIds"]').val("");
	}

	// 검색
	search = function(cPage) {
		// 페이지 번호 설정
		if(cPage){
			$("#cPage").val(cPage);
		} else {
			$("#cPage").val(1);
		}
		// 페이지 사이즈 설정
		$frm.find("input[name='pageSize']").val($("select[name='pageSize']").val());

// 		console.log('frm',$frm.serialize());
		$("#popList").load("/am/prm/evnMng/rplEvtHistPopupList.do", $frm.serialize(), function(a,b,c){
		});
	};

	$frm.find("input[type=text]").on('keyup', function(e){
		if(e.keyCode == '13'){
			search();
		}
	});

	// 페이지 이동
	goPage = function (cPage) {
		search(cPage);
	};

	/*******************************
	 *  멀티텍스트검색 팝업 Start
	 *******************************/
	fnResultText = function(data) {
		console.log('data',data);
		if(data){
			// 초기화
			$("#"+data.id).val("");

			// 값 설정
			$("#"+data.id).val(data.data);
		}
	}
	/*******************************
	 *  멀티텍스트검색 팝업 End
	 *******************************/

	 /*******************************
	 *  회원(다중선택) 팝업 Start
	 *******************************/
	fnClientMultiCallback = function(eleId, data){
		// 초기화
		$("#frm").find("input[name=memIds]").val("");
		$("#frm").find("input[name=memNms]").val("");

		var id = ''
		,	nm = '';

		$.each(data, function(idx, item){
			if(idx != 0){
				id += ',';
				nm += ',';
			}
			id += item.MEM_ID;
			nm += item.MEM_NM;
		});
		// 값 설정
		$("#frm").find("input[name=memIds]").val(id);
		$("#frm").find("input[name=memNms]").val(nm);
	}
	/*******************************
	 *  회원(다중선택) 팝업 End
	 *******************************/

	/*********************************
	 * 엑셀 다운로드 Start
	 *********************************/
	excelDown = function() {
		var obj = {
				queryId: "Event.selectRplEvtHistList",
				columnInfoFile: "rplEvtHistListExcel",
				fileName: "응모형_이벤트_참여자내역",
				sheetName: "응모형_이벤트_참여자내역",
				param: $('#frm').serializeObject()
			}
		excelDownloadSvr(obj);
	}
	/*********************************
	 * 엑셀 다운로드 End
	 *********************************/

	search();

});
</script>
</body>
</html>
