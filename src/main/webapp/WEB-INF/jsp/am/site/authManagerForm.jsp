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

				<h2 class="title"><span>권한관리</span></h2>

				<div class="section-title"><!-- section-title -->
					<h3 class="title"><span>기본 정보</span></h3>
				</div><!-- // section-title -->

				<form id="frm" name="frm">
					<input type="hidden" id="autMstIdx" name="autMstIdx" value=" "/>
					<table cellspacing="0" class="table-row table-a"><!-- table -->
						<colgroup>
							<col style="width: 15%; min-width: 180px;" />
							<col style="width: 85%;" />
						</colgroup>
						<tbody>
							<tr><!-- row -->
								<th><span>권한명<i class="require"><em>필수입력</em></i></span></th>
								<td>
									<input type="text" class="text large" name="autMstNm" id="autMstNm" maxlength="40" style="width:80%"/>
								</td>
							</tr>
						</tbody>
					</table><!-- // table -->

					<div class="grid">
						<div class="col col-1-2">
							<div class="section-title"><!-- section-title -->
								<h3 class="title"><span>메뉴 정보</span></h3>
							</div><!-- // section-title -->

							<div class="mr10">
							<c:if test="${not empty menuList }">
								<table cellspacing="0" class="table-row table-a is-td-valign-top menuList"><!-- table -->
									<colgroup>
										<col style="width: 15%; min-width: 180px;" />
									</colgroup>
									<tbody id="menuCheckList">
										<c:set var="k" value="1"/>
											<c:forEach var="row" items="${menuList}" varStatus="i">
												<tr>
													<th>
														<span>
															<label>
																<input type="checkbox" name="admMnuIdx1" id="admMnuIdx1_<c:out value="${i.index}"/>" class="checkbox admin_mnu_depth1" value="<c:out value="${row.ADM_MNU_IDX }"/>" />
																<c:out value="${row.ADM_MNU_NM }"/>
																<a href="#none" class="row-sort" onclick="showWindow(this);"data-index="${row.ADM_MNU_IDX }" data-sort-type="down" data-sort-current="down" data-target="<c:out value="${i.index}"/>">▽</a>
															</label>
														</span>
													</th>
													<td>
														<span style="display:none;" name="subMenu_<c:out value="${i.index}"/>">
														<c:forEach var="subMenu1" items="${row.childMenuList }" varStatus="j">
															<input type="checkbox" name="admMnuIdx2" class="checkbox admin_mnu_depth2" value="<c:out value="${subMenu1.ADM_MNU_IDX}"/>" data-parent="<c:out value="${i.index}"/>" data-target="<c:out value="${i.index}"/>-<c:out value="${j.index}"/>"/>
															<c:out value="${subMenu1.ADM_MNU_NM}"/>
															<br>
														</c:forEach>
														</span>
													</td>
												</tr>
											</c:forEach>

									</tbody>
								</table><!-- // table -->
							</c:if>
						</div>
					</div>
					<div class="col col-1-2">
						<div class="section-title"><!-- section-title -->
							<h3 class="title"><span>사용자 정보</span></h3>
							<div class="more">
								<a href="#" id="_regSearch" class="button small"><span>담당자추가</span></a>
								<a href="javascript:memberDel();" id="memberDel" class="button small"><span>담당자삭제</span></a>
							</div>
						</div><!-- // section-title -->
						<table cellspacing="0" class="table-col table-b">
							<colgroup>
								<col style="width: 5%;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
								<col style="width: auto;" />
							</colgroup>
								<thead>
									<tr>
										<th scope="col">선택</th>
										<th scope="col">부서</th>
										<th scope="col">사번</th>
										<th scope="col">이름</th>
									</tr>
								</thead>
							<tbody id="selectData">
							</tbody>
							<tbody>
							<tr id="removeData">
								<td colspan="4">담당자를 추가해주세요.</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>

				</form>

				<div class="section-button"><!-- section-button -->
					<div class="wrap text-center">
						<a href="#" id="goList" class="button large"><span>취소</span></a>
						<a href="#" id="goRegist" class="button large primary"><span>저장</span></a>
					</div>
				</div><!-- // section-button -->


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
<script type="text/javascript">

var $frm = $("#frm");

<!-- ▽클릭 이벤트 -->
function showWindow(obj){

	var currentState = $(obj).data("sort-current");

	var idx = $(obj).data("target");

	var nextState = (currentState == "down" ? "up" :  "down");

	$(obj).data("sort-current" , nextState);

	$(obj).text(nextState == "down" ? "▽" : "△");

	<!-- 열기/닫기  -->
	if(nextState == "up"){
		$("span[name='subMenu_"+idx+"']").show();
	}else{
		$("span[name='subMenu_"+idx+"']").hide();
	}
}

<!-- 클릭 -->
$(function() {



	<!-- 등록자 추가 버튼 클릭 시 -->
	$('#_regSearch').on('click',function(){
		popup('', "400", "500", "yes","_RegSearchPopup");
		$("#frm").attr({"action":"/am/site/autoMangerPopup.do", "target":"popup_RegSearchPopup", "method":"post"}).submit();
	});

	<!-- 목록 버튼 클릭 이벤트 -->
	$("#goList").on("click", function () {
	$("#searchForm").attr({"action":"/am/site/authManagerList.do", "target":"_self", "method":"post"}).submit();
	});

	<!-- 등록 버튼 클릭 이벤트 -->
	$("#goRegist").on("click", function () {
		var memberCnt = $("#selectData").find("tr");
		console.log("memberCnt :::",memberCnt);

		if($frm.valid()){
			if($("input[name=admMnuIdx1]:checked").length < 1) {
				alert("하나의 권한을 선택 하세요.");
				return false;
			}
			if($("#autMstNm").val()==""){
				alert("권한명 입력해주세요.");
				$("#autMstNm").focus();
				return false;
			}

			if(memberCnt.length < 1){
				alert("담당자 추가해주세요.");
				return false;
			}
			if (confirm( "저장 하시겠습니까?")) {
				$frm.attr({"action":"/am/site/authManagerRegist.do", "target":"_self", "method":"post"}).submit();
			}
		}
	});
	<!-- 담당자 결과값 -->
	fnResultReg = function(params){
		console.log('params',params);
		$("#removeData").remove();

		var po = '';
		po += '<tr>';
		po += 	'<td>';
		po += 		'<input type="checkbox" name="admMstId" class="checkbox checkRow" value="<c:out value="'+params.admMstId+'"/>"/>';
		po += 	'</td>';
		po += 	'<td>';
		po += 	'부서';
		po += 	'</td>';
		po +=	'<td>';
		po +=		+ params.admMstErpNo ;
		po += 	'</td>';
		po +=	'<td>';
		po +=	 	params.admMstNm;
		po +=	"	<input type='hidden' name='admMstId'  value='"+ params.admMstId +"'>";
		po +=	"	<input type='hidden' name='admMstErpNo'  value='"+ params.admMstErpNo +"'>";
		po += 	"	<input type='hidden' name='admMstNm'  value='"+ params.admMstNm +"'>";
		po += 	'</td>';
		po += '</tr>';

		$("#selectData").append(po);

	}
	<!-- 담당자 삭제 버튼 -->
	memberDel = function (){
		if($("input[name=admMstId]:checked").length < 1) {
			alert("선택된 데이터가 없습니다.")
			return false;
		}
		$("input[name=admMstId]:checked").each(function(idx, data) {
			var row = $(this).parent().parent();
// 			var id = $(this).data(id);
			row.remove();
		});
	}

	$("#menuCheckList").find("input[type=checkbox]").on("click",function(){
			var thisClass = $(this).attr("class");
			var checkYn	  = $(this).is(":checked");
			if(thisClass.indexOf("admin_mnu_depth1") != -1){
				var targetTh = $(this).parent().parent().parent();
				var targetTd = $(targetTh).next();
				$(targetTd).find("input[type=checkbox]").prop("checked" ,checkYn);
			}else if(thisClass.indexOf("admin_mnu_depth2") != -1){
				//2depth click => ? parents Detph = what is 1Depth
				var target = $(this).data("parent");
				$("#admMnuIdx1_"+target).prop("checked" , checkYn);

			}
	});

});
</script>
</body>
</html>