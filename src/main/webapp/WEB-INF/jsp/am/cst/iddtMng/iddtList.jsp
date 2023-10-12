<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<script type="text/javascript">

//조회 버튼 클릭 시
function _search(){
	var $searchForm = $("#searchForm"); 
	$('#searchYn').val('Y');
	//$searchForm.find("input[name='pageSize']").val($("#frm").find("select[name='pageSize']").val());
	$searchForm.attr({"action":"<c:out value="${serverDomain}" />/am/cst/iddtMng/iddtList.do", "target":"_self", "method":"post"}).submit();
}

//체크박스 전체 선택
function fn_chkAll(){
	$("input:checkbox[name=rowChk]").prop("checked",$("#chkAll").prop("checked"));
}

//신규 생성 버튼 클릭 시
function fn_addRow(){
	/* if(${fn:length(list) } >= 0){
		$("#noDataTr").hide();
	} */
	if($("#iddtTable tbody tr").children().length > 1){
		$("#iddtTable tbody tr:first-child").before('<tr>'+
				'<td style="display: none;"><input type="hidden" name="appendRow" value="Y"></td>'+
				'<td><input type="checkbox" class="checkbox" name="rowChk" checked="checked" /></td>'+
				'<td>'+
					'<select class="select" name="useYn" id="">'+
						'<option value="Y">사용</option>'+
						'<option value="N">미사용</option>'+
					'</select>'+
				'</td>'+
				'<td></td>'+
				'<td><input type="text" class="text" name="iddtNm" style="width: 100%;"/></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'</tr>');
	}else{
		$("#iddtTable tbody tr:first-child").before('<tr>'+
				'<td style="display: none;"><input type="hidden" name="appendRow" value="Y"></td>'+
				'<td><input type="checkbox" class="checkbox" name="rowChk"checked="checked" /></td>'+
				'<td>'+
					'<select class="select" name="useYn" id="">'+
						'<option value="Y">사용</option>'+
						'<option value="N">미사용</option>'+
					'</select>'+
				'</td>'+
				'<td></td>'+
				'<td><input type="text" class="text" name="iddtNm" value="산업군 미 지정" style="width: 100%;" readonly/></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'</tr>');
	}
}

//선택 삭제 버튼 클릭 시
function fn_delRow(){
	if(Number(checkboxChecked()) > 0){
		var dataArrayToSend = new Array();
		
		$("#iddtTable tbody tr").each(function(){
			var len 	= $(this).children().length;
			var td 		= $(this).children();
			
			var tdArr = new Array();
			
			for(var i=0; i<=$(this).length; i++){
				if($(this).eq(i).find('input[name="rowChk"]').is(":checked") === true){
					var apdRow = $(this).eq(i).find('input[name="appendRow"]').val();
					
					if(apdRow === "Y"){
						$(this).eq(i).closest('tr').remove();
					}else{
						var iddtId = $(this).eq(i).find('input[name="iddtId"]').val();
						
						if(!isNull(iddtId)){tdArr.push(iddtId);}
					}
				}
			}
			dataArrayToSend.push(tdArr);
		});
		
		if(confirm("삭제하시겠습니까?")){
			$.ajax ({
				async	: false,
				type	: "POST",
				url		: "<c:out value="${serverDomain}" />/am/cst/iddtMng/iddtListDelete.do",
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

//선택된 항목이 있는지 check
function checkboxChecked(){
	var checkedLength = $("input[name=rowChk]:checked").length;
	if(checkedLength <= 0){
		alert("선택된 항목이 없습니다.");
		return checkedLength;
	}
	return checkedLength;
}

//일괄상태변경 버튼 클릭 시
function fn_chgStat(){
	
	var idx = [];
	
	$("input:checkbox[name='rowChk']:checked").each(function(){
		var chk = $(this).val();
		if (chk != 'I000000000') {
			idx.push(chk);
		}
	})

	var useYnAll	= $("#frm").find("select[name='useYnAll']").val()

    if(idx.length > 0){
        if(useYnAll==""){
        	alert("변경할 상태를 선택해주세요.");
        	preventdefault();
        }else {
        	if(confirm("선택한 상태로 처리상태를 변경하시겠습니까?")){
			    $.ajax({
			        type : "POST",
			        async:true,
			        dataType :"html",
			        url : '<c:out value="${serverDomain}"/>/am/cst/iddtMng/iddtListUseYnModify.do',
			        data : {
			            'iddtId' : idx,
			            'useYnAll' : useYnAll
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
        _search();
    }else {
        alert("상태변경할 항목을 선택해 주세요.");
    }

}

//저장 버튼 클릭 시
function fn_save(){
	if(Number(checkboxChecked()) > 0){
		var dataArrayToSend = new Array();
		var newRow;
		
		$("#iddtTable tbody tr").each(function(){
			var len 	= $(this).children().length;
			var td 		= $(this).children();
			var newRow;
			
			var tdArr = new Array();
			var chkVal= false;
			
			for(var i=0; i<=len; i++){
				
				if($(this).eq(i).find('input[name="rowChk"]').is(":checked") == true){
					var apdRow = $(this).eq(i).find('input[name="appendRow"]').val();
					
					if(apdRow === "Y"){
						var rowChk = $(this).eq(i).find('select[name=useYn]').val();
						var iddtNm = $(this).eq(i).find('input[type="text"]').val();
		              /*  var focus1 = $(this).eq(i).find('input[type="text"]'); 
		                  if (iddtNm == "" || iddtNm == null || iddtNm == undefined) {
		                	alert('배지 산업군명을 반드시 입력해 주십시오.');
                            focus1.focus(); 
			                chkVal= true;
		                } */
						
						newRow = "Y";
						tdArr.push(newRow);
						if(!isUndefined(rowChk)){tdArr.push(rowChk);}
						if(!isUndefined(iddtNm)){tdArr.push(iddtNm);}
					}else{
						var rowChk = $(this).eq(i).find('select[name=useYn]').val();
						var iddtNm = $(this).eq(i).find('input[type="text"]').val();
						var iddtId = $(this).eq(i).find('input[name="iddtId"]').val();
						newRow = "N";
						
						tdArr.push(newRow);
						if(!isUndefined(rowChk)){tdArr.push(rowChk);}
						if(!isUndefined(iddtNm)){tdArr.push(iddtNm);}
						if(!isUndefined(iddtId)){tdArr.push(iddtId);}
					}
				}
			}
			dataArrayToSend.push(tdArr);
		});
		
		if(confirm("저장하시겠습니까?")){
			$.ajax ({
				async : false,
				type : "POST",
				url : "<c:out value="${serverDomain}" />/am/cst/iddtMng/iddtListModify.do", 
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

function fn_goExcelDown(){
	var totalRecordCount	= $("#total").val();
	if(totalRecordCount > 10000){
		alert("엑셀 다운로드는 10000건 이하만 가능합니다.");
		return;
	}else if(totalRecordCount == 0){
		alert("저장할 내역이 없습니다.");
		return;
	}
	$("#frm").attr({"action": "<c:out value="${serverDomain}" />/am/cst/iddtMng/iddtListExcel.do", "target":"_self", "method":"post"}).submit();
} 

// 페이지 이동
goPage = function (cPage) {
    $("#cPage").val(cPage);
    _search();
};
</script>
<style type="text/css">
<!--
-->
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
						<span>산업군 조회</span>
					</h2>
					<h3 class="title">
						<span>조회</span>
					</h3>
					<form id="searchForm" name="searchForm">
						<input type="hidden" name="searchYn" id="searchYn" value="${searchYn }"/>
                        <input type="hidden" id="pageSize" name="pageSize" value="" />
                        <input type="hidden" id="cPage" name="cPage" value=""/>
						<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
							<colgroup>
								<col style="width: 20%;" />
								<col style="width: auto;"/>
							</colgroup>
							<tbody>
								<tr> 
									<th><span>등록 상태</span></th>
									<td>
										<select class="select" name="useYnSearch" id="">
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
						<%-- <input type="hidden" id="total" name="total" value="<c:out value="${paging.totalRecordCount }" />" /> --%>
						<input type="hidden" id="total" name="total" value="<c:out value="${totalRecordCount }" />" />
						<div class="grid section-button-list">
							<div class="col-1-2 text-left">
								<span class="pages">
									(총 <strong class="em">${totalRecordCount}</strong>건<%-- , ${paging.cPage }/${paging.totalPageCount } --%>)
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
								<a href="#none" onclick="fn_goExcelDown()" class="button small"><span>엑셀 다운로드</span></a>
							</div>
						</div>
					
					<!-- table -->
					<table cellspacing="0" class="table-col table-b" id="iddtTable">
						<colgroup>
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
								<th><input type="checkbox" name="chkAll" id="chkAll" onclick="fn_chkAll();"></th>
								<th>상태</th>
								<th>산업군 ID</th>
								<th>산업군 명</th>
								<th>등록/수정자</th>
								<th>등록/수정 일시</th>
								<th>상태 변경 일시</th>
							</tr>
						</thead>
						<tbody>
							<c:choose>
								<c:when test="${totalRecordCount > 0}">
								<c:set var="listNum" value="${paging.listNum}" />
									<c:forEach var="list" items="${list}" varStatus="i" >
										<tr>
											<td style="display: none;"><input type="hidden" name="appendRow" value="N"></td>
											<td style="display: none;"><input type="hidden" name="iddtId" value="${list.IDDT_ID}"></td>
											<td><input type="checkbox" class="checkbox" name="rowChk" id="index${status.index}" value="${list.IDDT_ID}" <c:if test="${list.IDDT_ID == 'I000000000'}">disabled</c:if>/></td>
											<td>
												<select class="select" name="useYn" <c:if test="${list.IDDT_ID == 'I000000000'}">disabled</c:if>>
													<option value="Y" <c:if test="${list.USE_YN == 'Y' }">selected</c:if>>사용</option>
													<option value="N" <c:if test="${list.USE_YN == 'N' }">selected</c:if>>미사용</option>
												</select>
											</td>
											<td><c:out value="${list.IDDT_ID }"/></td>
											<td><input type="text" class="text" value="${list.IDDT_NM }" style="width: 100%;"/></td>
											<td>
												<c:if test="${empty list.UPDPSN_ID}"><c:out value="${list.REGPSN_ID }"/></c:if>
												<c:if test="${!empty list.UPDPSN_ID}"><c:out value="${list.UPDPSN_ID }"/></c:if>
											</td>
											<td>
												<c:if test="${empty list.UPDPSN_ID}"><c:out value="${list.REG_DTM }"/></c:if>
												<c:if test="${!empty list.UPDPSN_ID}"><c:out value="${list.UPD_DTM }"/></c:if>
											</td>
											<td><c:out value="${list.STATS_CHG_DTM }"/></td>
										</tr>
										<c:set var="listNum" value="${listNum-1}" />
									</c:forEach>
								</c:when>
								<c:otherwise>
									<tr>
										<td colspan="7">조회 결과가 없습니다.</td>
									</tr>
								</c:otherwise>
							</c:choose>
						</tbody>
					</table>
					</form>
	 				<!-- // table -->
					<div class="section-pagination">
						<h4 class="sr-only">목록 페이징</h4>
						<div class="wrap">
							<!-- 개발 시 wrap 이하 모듈 시작 -->
							<ui:paging paging="${paging}" jsFunction="goPage" />
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