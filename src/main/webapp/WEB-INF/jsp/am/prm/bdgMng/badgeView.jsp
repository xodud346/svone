<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css">
</style>
</head>
<body>
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
				<h2 class="title"><span>배지 관리</span></h2>
				<h3 class="title"><span>조회</span></h3>

				<form id="searchForm" name="searchForm">
					<input type="hidden" id="cPage" name="cPage" value="${paging.cPage }"/>
					<input type="hidden" id="pageSize" name="pageSize" value="${paging.pageSize }"/>
					<input type="hidden" id="prdBgCd" name="prdBgCd" />

					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 30%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>상태</span></th>
								<td>
									<input type="radio" id="useYn1" name="useYn" class="radio" value="" checked="checked" />
									<label for="useYn">전체</label>
									<input type="radio" id="useYn2" name="useYn" class="radio" value="Y" />
									<label for="useYn">사용</label>
									<input type="radio" id="useYn3" name="useYn" class="radio" value="N" />
									<label for="useYn">미사용</label>
								</td>
								<th><span>배지 명</span></th>
								<td>
									<input type="text" class="text-xlarge" name="prdBgNm" value="" />
								</td>
								<th><span>등록자</span></th>
								<td>
									<input type="text" class="text-large" name="regpsnNm" id="regpsnNm" value="" readonly="readonly" />
									<a href="javascript:fnServiceResult('searchForm', 'regpsnId');" class="icon search2" id="searchServiceManagerNmIco"></a>
									<input type="text" class="text-large" name="regpsnId" id="regpsnId" value="" style="display: none;"/>
								</td>
							</tr>
							<tr>
								<th><span>조회 기간</span></th>
								<td>
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchStartDate" name="searchStartDate" value="${commandMap.searchStartDate}" readonly="readonly" data-target-end="#searchEndDate"/>
									~
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text small" id="searchEndDate" name="searchEndDate" value="${commandMap.searchEndDate}" readonly="readonly" data-target-start="#searchStartDate"/>
									<select id="dateSet" name="dateSet" class="select small">
										<option value="1w">1주일</option>
										<option value="2w">2주일</option>
										<option value="1m">1개월</option>
										<option value="3m">3개월</option>
										<option value="6m">6개월</option>
										<option value="1y">1년</option>
									</select>
								</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</form>

				<div class="grid section-button-search">
					<a href="javascript:searchClear('searchForm');" class="button small"><span>초기화</span></a>
					<a href="javascript:search();" class="button small primary"><span>조회</span></a>
				</div>

				<h3 class="title"><span>목록</span></h3>

				<div class="grid section-button-list">
					<div class="wrap text-right">
						<select name="useYn" class="select" id="selectUseYn">
							<option value="">선택</option>
							<option value="Y">사용</option>
							<option value="N">미사용</option>
						</select>
						<a href="javascript:goChangeStatus();" class="button small"><span>상태변경</span></a>
						&nbsp;
						<a href="javascript:goForm();" class="button small"><span>생성</span></a>
						&nbsp;
						<ui:pageSizeBox value="${paging.pageSize}" name="pageSize" type="" jsFunction="goPage"/>
					</div>
				</div>

				<div id= "badgeList">
					<%@ include file="/WEB-INF/jsp/am/prm/bdgMng/badgeList.jsp" %>
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

<script src="/am/js/common/jquery.ajax.js"></script>
<script>
$(function(){
	var $searchForm = $("#searchForm");
	
	fnDateSet('searchStartDate', 'searchEndDate', 0, 0, -7, 0, 0, 0, '-');

	$("#dateSet").change(function(){
		var dateVal = $(this).val();

		if(dateVal == "1w"){
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

	search = function(){
		var startDate = new Date($("#searchStartDate").val());
		var endDate = new Date($("#searchEndDate").val());

		if(startDate > endDate){
			alert("종료일이 시작일보다 작습니다.");
			return false;
		}

		$("#badgeList").load("/am/prm/bdgMng/badgeList.do", $searchForm.serialize());
	}

	$searchForm.find("input").not(".datepicker").keydown(function(e){
		if(e.keyCode == 13){
			search();
		}
	});
	
	$("#searchServiceManagerNmIco").off().on("click" , function(){
		fnServiceResult("searchForm");
	});
	
	//담당자
	fnServiceResultCallback = function(eleId,data){
		// 값 설정
		$("#regpsnId").val(data.EMP_NO);
		$("#regpsnNm").val(data.OPRTR_NM);
	}
 
	goPage = function(cPage){
		$searchForm.find("input[name='pageSize']").val($("select[name='pageSize']").val());
		$("#cPage").val(cPage);
		search();
	}
 
	goForm = function(cPage){
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/prm/bdgMng/badgeForm.do", "target":"_self", "method":"post"}).submit();
	}
	
	$(document).on("click", "#goRead", function(){
		var idx = $(this).next().val();
		$("#prdBgCd").val(idx);
		$searchForm.attr({"action":"<c:out value="${serverDomain}"/>/am/prm/bdgMng/badgeRead.do", "target":"_self", "method":"post"}).submit();
	});
	

	goChangeStatus = function(){
		var idx = [];
		
		$("input:checkbox[name='chkIndex']:checked").each(function(){
			var chk = $(this).val();
			idx.push(chk);
		})
        var searchGubun = $('#selectUseYn option:selected').val();
		
        if(idx.length > 0){
        	if($("#selectUseYn").val()==""){
        		alert("변경할 상태를 선택해주세요.");
        		preventdefault();
        	}else {
        		if(confirm("선택한 상태로 처리상태를 변경하시겠습니까?")){
			      	$.ajax({
			            type : "POST",
			            async:true,
			            dataType :"html",
			            url : '<c:out value="${serverDomain}"/>/am/prm/bdgMng/badgeStatusAjax.json',
			            data : {
			                   'prdBgCd' : idx,
			                   'useYn' : searchGubun
			                   },
			            error : function(error) {
							alert("변경이 실패하였습니다.");
						},
			            success : function(data){
			            	alert("변경이 완료되었습니다.");
			            }
			        });
        		}
        	}
      	$("#badgeList").load("/am/prm/bdgMng/badgeList.do", $searchForm.serialize());
        }else {
        	alert("상태변경할 항목을 선택해 주세요.");
        }
	}
	
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
	
	$("#badgeList").load("/am/prm/bdgMng/badgeList.do", $searchForm.serialize());

});
</script>

</body>
</html>