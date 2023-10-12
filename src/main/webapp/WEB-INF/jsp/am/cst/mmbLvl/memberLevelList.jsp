<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<script type="text/javascript">

//조회 버튼 클릭 시
function _search(){
	var $searchForm = $("#searchForm"); 
	$('#searchYn').val('Y');
	$searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
	$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/mmbLvl/memberLevelList.do", "target":"_self", "method":"post"}).submit();
}

//체크박스 전체 선택
function fn_chkAll(){
	$("input:checkbox[name=rowChk]").prop("checked",$("#chkAll").prop("checked"));
}

//신규 생성 버튼 클릭 시
function fn_addRow(){
	if(${fn:length(list) } >= 0){
		//최초 등록 일 시
		$("#memGrdTable tbody tr:first-child").before('<tr>'+
				'<td style="display: none;"><input type="hidden" name="appendRow" value="Y"></td>'+
				'<td><input type="checkbox" class="checkbox" name="rowChk"/></td>'+
				'<td>'+
					'<select class="select" name="useYn" id="">'+
						'<option value="Y">사용</option>'+
						'<option value="N">미사용</option>'+
					'</select>'+
				'</td>'+
				'<td></td>'+
				'<td><input type="text" class="text" name="grdNm" style="width: 100%;"/></td>'+
				'<td><input type="number" class="text" name="aplDcEssence" maxlength="3" oninput="maxLengthChk(this);" style="width: 25%;"/>.<input type="number" class="text" name="aplDcDecimal" maxlength="2" oninput="maxLengthChk(this);" style="width: 20%;"/> %</td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'</tr>');
	}else{
		$("#memGrdTable tbody tr:last-child").before('<tr>'+
				'<td style="display: none;"><input type="hidden" name="appendRow" value="Y"></td>'+
				'<td><input type="checkbox" class="checkbox" name="rowChk"/></td>'+
				'<td>'+
					'<select class="select" name="useYn" id="">'+
						'<option value="Y">사용</option>'+
						'<option value="N">미사용</option>'+
					'</select>'+
				'</td>'+
				'<td></td>'+
				'<td><input type="text" class="text" name="grdNm" style="width: 100%;"/></td>'+
				'<td><input type="number" class="text" name="aplDcEssence" maxlength="3" oninput="maxLengthChk(this);" style="width: 25%;"/>.<input type="number" class="text" name="aplDcDecimal" maxlength="2" oninput="maxLengthChk(this);" style="width: 20%;"/> %</td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'</tr>');
	}
	
	//$("input[name=aplDcEssence]").
}

//type number 일 떄 maxlength 가 안되기 때문에 함수로 만들어줌
function maxLengthChk(val){
	if(val.value.length > val.maxLength){
		val.value = val.value.slice(0, val.maxLength);
	}
}

//선택된 항목이 있는지 check
function checkboxChecked(){
	var checkedLength = $("input[name=rowChk]:checked").length;
	if(checkedLength <= 0){
		alert("선택된 항목이 없습니다.");
		return checkedLength;
	}
	return checkedLength;
}

//선택 삭제 버튼 클릭 시
function fn_delRow(){
	if(Number(checkboxChecked()) > 0){
		var dataArrayToSend = new Array();
		
		$("#memGrdTable tbody tr").each(function(){
			var len	= $(this).children().length;
			var td	= $(this).children();
			
			var tdArr = new Array();
			
			for(var i=0; i<=$(this).length; i++){
				if($(this).eq(i).find('input[name="rowChk"]').is(":checked") === true){
					var apdRow = $(this).eq(i).find('input[name="appendRow"]').val();
					
					if(apdRow === "Y"){
						$(this).eq(i).closest('tr').remove();
					}else{
						var grdId = $(this).eq(i).find('input[name="grdId"]').val();
						
						if(!isNull(grdId)){tdArr.push(grdId);}
					}
				}
			}
			dataArrayToSend.push(tdArr);
		});
		
		if(confirm("삭제하시겠습니까?")){
			$.ajax ({
				async	: false,
				type	: "POST",
				url		: "<c:out value="${serverDomain}" />/am/cst/mmbLvl/mmbLvlListDelete.do",
				data	: {	"dataArrayToSend"		: dataArrayToSend,
							"dataArrayToSendSize"	: dataArrayToSend.length
							},
				success : function (data) {
					alert(data.message);
					location.reload();
				},
				error : function (error) {
					alert(JSON.stringify(error));
				}
			});
		}
	}
}

//일괄상태변경 버튼 클릭 시
function fn_chgStat(){
	//checkboxChecked();
	
	var dataArrayToSend = new Array();
	
	$("#memGrdTable tbody tr").each(function(){
		var len	= $(this).children().length;
		var td	= $(this).children();
		
		var tdArr = new Array();
		for(var i=0; i<=len; i++){
			//if($(this).eq(i).find('input[name="rowChk"]').is(":checked") == true){
				var grdId		= $(this).eq(i).find('input[name="grdId"]').val();
				var useYnAll	= $("#frm").find("select[name='useYnAll']").val()
				
				tdArr.push(useYnAll);
				
				if(!isUndefined(grdId)){tdArr.push(grdId);}
			//}
		}
		dataArrayToSend.push(tdArr);
	});
	
	if(confirm("저장 하시겠습니까?")){
		$.ajax ({
			async : false,
			type : "POST",
			url : "<c:out value="${serverDomain}" />/am/cst/mmbLvl/mmbLvlListUseYnModify.do", 
			data : {"dataArrayToSend"		: dataArrayToSend,
					"dataArrayToSendSize"	: dataArrayToSend.length
					},
			success : function (data) {
				alert(data.message);
				location.reload();
			},
			error : function (data) {
				alert(data.message);
			}
		});
	}
}

function fn_save(){
	if(Number(checkboxChecked()) > 0){
		var dataArrayToSend = new Array();
		var newRow;
		
		//memGrdTable
		$("#memGrdTable tbody tr").each(function(){
			var len	= $(this).children().length;
			var td	= $(this).children();
			var newRow;
			
			var tdArr = new Array();
			
			for(var i=0; i<=len; i++){
				
				if($(this).eq(i).find('input[name="rowChk"]').is(":checked") == true){
					var apdRow = $(this).eq(i).find('input[name="appendRow"]').val();
					
					if(apdRow === "Y"){
						var rowChk	= $(this).eq(i).find('select[name=useYn]').val();
						var grdNm	= $(this).eq(i).find('input[type="text"]').val();
						var aplDc	= $(this).eq(i).find('input[name=aplDcEssence]').val()+"."+$(this).eq(i).find('input[name=aplDcDecimal]').val();
						
						newRow = "Y";
						tdArr.push(newRow);
						if(!isUndefined(rowChk)){tdArr.push(rowChk);}
						if(!isUndefined(grdNm)){tdArr.push(grdNm);}
						if(!isUndefined(aplDc)){tdArr.push(aplDc);}
						
						if(aplDc == '0.0'||aplDc == '0.00'){
							alert("적용 할인율이 '"+aplDc+"%'일 경우\n등급명은 '등급 미 지정' 으로 저장됩니다.");
						}
					}else{
						var rowChk	= $(this).eq(i).find('select[name=useYn]').val();
						var grdNm	= $(this).eq(i).find('input[type="text"]').val();
						var aplDc	= $(this).eq(i).find('input[name=aplDcEssence]').val()+"."+$(this).eq(i).find('input[name=aplDcDecimal]').val();
						var grdId	= $(this).eq(i).find('input[name="grdId"]').val();
						newRow = "N";
						
						tdArr.push(newRow);
						if(!isUndefined(rowChk)){tdArr.push(rowChk);}
						if(!isUndefined(grdNm)){tdArr.push(grdNm);}
						if(!isUndefined(aplDc)){tdArr.push(aplDc);}
						if(!isUndefined(grdId)){tdArr.push(grdId);}
					}
				}
			}
			dataArrayToSend.push(tdArr);
		});
		
		
		
		if(confirm("저장 하시겠습니까?")){
			$.ajax ({
				async : false,
				type : "POST",
				url : "<c:out value="${serverDomain}" />/am/cst/mmbLvl/mmbLvlListModify.do", 
				data : {"dataArrayToSend"		: dataArrayToSend,
						"dataArrayToSendSize"	: dataArrayToSend.length,
						"newRow"				: newRow
						},
				success : function (data) {
					alert(data.message);
					location.reload();
				},
				error : function (data) {
					alert(data.message);
				}
			});
		}
	}
}

function isUndefined(value){
	if(typeof(value)==undefined || typeof(value)=="undefined" || value=="undefined" || value==undefined) {return true;}
	return false;
}

function isNull(value){
	if(value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {return true;}
	return false;
}
</script>
<style type="text/css">
<!--
-->
input[type=number]{text-align: right;}
</style>
</head>
<body>
	<!-- body class, 중요 -->

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
		<!-- wrapper -->
		<div id="wrapper">
			<!-- breadcrumb -->
			<div id="breadcrumb"></div>
			<!-- contents -->
			<div id="contents">
				<div class="container">
					
					<h2 class="title">
						<span>고객 등급 관리</span>
					</h2>
					<h3 class="title">
						<span>조회</span>
					</h3>
					
					<form id="searchForm" name="searchForm">
						<input type="hidden" name="searchYn" id="searchYn" value="${searchYn }"/>
						<input type="hidden" name="pageSize" 	value="<c:out value="${map.pageSize }"/>" />
						<input type="hidden" name="cPage" 		value="<c:out value="${map.cPage}"/>"/>
						<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
							<colgroup>
								<col style="width: 20%;" />
								<col style="width: auto;"/>
							</colgroup>
							<tbody>
								<tr> 
									<th><span>등록 상태</span></th>
									<td>
										<select class="select" name="useYnSearch" id="useYnSearch">
											<option value="">전체</option>
											<option value="Y" <c:if test="${map.useYnSearch == 'Y' }">selected</c:if>>사용</option>
											<option value="N" <c:if test="${map.useYnSearch == 'N' }">selected</c:if>>미사용</option>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					<div class="grid section-button-search">
						<a href="javascript:searchClear('searchForm');" class="button small"><span>초기화</span></a>
						<a href="#none" onclick="_search()" class="button small primary"><span>조회</span></a>
					</div>
					<h3 class="title">
						<span>목록</span>
					</h3>
					<form id="frm" name="frm">
						<div class="grid section-button-list">
							<div class="col-1-2 text-left">
								<span class="pages">
									(총 <strong class="em">${paging.totalRecordCount }</strong>건, ${paging.cPage }/${paging.totalPageCount })
								</span>
							</div>		
							<div class="col-1-2 text-right">
								<select class="select" name="useYnAll" id="">
									<option value="Y">사용</option>
									<option value="N">미사용</option>
								</select>
								<a href="#none" onclick="fn_chgStat();" id="" class="button small primary"><span>일괄 상태 변경</span></a>
								<a href="#none" onclick="fn_save();" id="" class="button small primary"><span>저장</span></a>
								<a href="#none" onclick="fn_delRow();" class="button small primary"><span>선택 삭제</span></a>
								<a href="#none" onclick="fn_addRow();" class="button small primary"><span>신규 생성</span></a>
							</div>
						</div>
					</form>
					<!-- table -->
					<table cellspacing="0" class="table-col table-b" id="memGrdTable">
						<colgroup>
							<col style="width: 5%;" />
							<col style="width: 5%;" />
							<col style="width: 10%;" />
							<col style="width: 25%;" />
							<col style="width: 10%;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
						</colgroup>
						<thead>
							<tr>
								<th><input type="checkbox" name="chkAll" id="chkAll" onclick="fn_chkAll();"></th>
								<th>상태</th>
								<th>등급 ID</th>
								<th>등급명</th>
								<th>적용 할인율</th>
								<th>등록자</th>
								<th>등록일</th>
								<th>상태 변경일</th>
							</tr>
						</thead>
						<tbody>
							<c:choose>
								<c:when test="${paging.totalRecordCount > 0}">
								<c:set var="listNum" value="${paging.listNum}" />
									<c:forEach var="list" items="${list }" varStatus="i" >
										<tr>
											<td style="display: none;"><input type="hidden" name="appendRow" value="N"></td>
											<td style="display: none;"><input type="hidden" name="grdId" value="${list.GRD_ID }"></td>
											<td><input type="checkbox" class="checkbox" name="rowChk" <c:if test="${list.APL_DC_ESSENCE == '0' && list.APL_DC_DECIMAL == '00' && list.GRD_ID == 'G000000000'}">disabled</c:if>/></td>
											<td>
												<select class="select" name="useYn">
													<option value="Y" <c:if test="${list.USE_YN == 'Y' }">selected</c:if>>사용</option>
													<option value="N" <c:if test="${list.USE_YN == 'N' }">selected</c:if>>미사용</option>
												</select>
											</td>
											<td>${list.GRD_ID }</td>
											<td><input type="text" class="text" value="${list.GRD_NM }" style="width: 100%;"/></td>
											<td>
											<input type="number" class="text" name="aplDcEssence" value="${list.APL_DC_ESSENCE }" maxlength="3" oninput="maxLengthChk(this);" style="width: 25%;"/>.
											<input type="number" class="text" name="aplDcDecimal" value="${list.APL_DC_DECIMAL }" maxlength="2" oninput="maxLengthChk(this);" style="width: 20%;"/> %
											</td>
											<td>
												<c:if test="${empty list.UPDPSN_ID}">${list.REGPSN_ID }</c:if>
												<c:if test="${!empty list.UPDPSN_ID}">${list.UPDPSN_ID }</c:if>
											</td>
											<td>
												<c:if test="${empty list.UPDPSN_ID}">${list.REG_DTM }</c:if>
												<c:if test="${!empty list.UPDPSN_ID}">${list.UPD_DTM }</c:if>
											</td>
											<td>${list.STATS_CHG_DTM }</td>
										</tr>
										<c:set var="listNum" value="${listNum-1}" />
									</c:forEach>
								</c:when>
								<c:otherwise>
									<tr>
										<td colspan="8">조회 결과가 없습니다.</td>
									</tr>
								</c:otherwise>
							</c:choose>
						</tbody>
					</table>
					<!-- // table -->
					<div class="section-pagination">
						<h4 class="sr-only">목록 페이징</h4>
						<div class="wrap">
							<!-- 개발 시 wrap 이하 모듈 시작 -->
							<ui:paging paging="${paging }" jsFunction="goPage" />
						</div>
					</div>
				</div>
			</div>
			<!-- // contents -->
		</div>
		<!-- // wrapper -->
		<div id="quickmenu" class="aside right">
			<!-- quickmenu-->
			<%@ include file="/WEB-INF/jsp/am/include/quick.jsp"%>
		</div>
		<!-- // quickmenu -->
	</div>
	<!-- // container -->
	<div id="footer">
		<%@ include file="/WEB-INF/jsp/am/include/footer.jsp"%>
	</div>
	<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
</body>
</html>