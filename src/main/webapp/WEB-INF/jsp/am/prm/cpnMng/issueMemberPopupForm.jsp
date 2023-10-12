<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>사업장 조회</title>
</head>
<body class="page-popup">
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
				<h3 class="title"><span>발행 대상 조회</span></h3>
                <form id="frm" name="frm">
                    <input type="hidden" id="cPage" name="cPage" value=""/>
                    <input type="hidden" id="pageSize" name="pageSize" value="10" />
                    <input type="hidden" id="formType" name="formType" value="regist" />
                    <input type="hidden" id="POP_MST_IDX" name="POP_MST_IDX" value="" />
	                <input type="hidden" id="LIMIT_YN" name="LIMIT_YN" value="${commandMap.LIMIT_YN}" />
	                
	                <table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
	                    <colgroup>
	                        <col style="width: 30%;" />
	                        <col style="width: auto;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                    		<th><span>사업장 ID/명</span></th> 
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="bzplcId" name="bzplcId" value="" />
	                            </td>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="bzplcNm" name="bzplcNm" value="" />
	                            </td>
	                    	</tr>
	                    	<tr>
	                    		<th><span>운영단위 ID/명</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="oprUntId" name="oprUntId" value="" />
	                            </td>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="oprUntNm" name="oprUntNm" value="" />
	                            </td>
	                    	</tr>
	                    	<tr>
	                    		<th><span>부서 ID/명</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="deptId" name="deptId" value="" />
	                            </td>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="deptNm" name="deptNm" value="" />
	                            </td>
	                    	</tr>
	                    	<tr>
	                    		<th><span>회원 ID/명</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="memId" name="memId" value="" />
	                            </td>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="memNm" name="memNm" value="" />
	                            </td>
	                    	</tr>
	                    </tbody>
	                </table><!-- // table -->
                </form>
                
                <div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:searchClear('frm');" id="searchClear" class="button small"><span>초기화</span></a>
                    <a href="javascript:goSearch();" class="button small primary"><span>검색</span></a>
                </div>
                
                <!-- 조회 결과 영역 -->
                <div id="popList">
                	
                </div>
                <!-- //조회 결과 영역 -->
                
                <!-- 선택 사업장 영역 -->
                <table cellspacing="0" class="table-col table-b" id="selTable">
					<colgroup>
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
					</colgroup>
					<thead>
						<tr>
							<th>선택</th>
							<th>사업장</th>
							<th>운영 단위</th>
							<th>부서</th>
							<th>회원</th>
						</tr>
					</thead>
					<tbody id="_selectedData">
					</tbody>
				</table>
				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:memberDel();" id="memberDel" class="button small"><span>삭제</span></a>
                </div>
				<!-- //선택 사업장 영역 -->
				
				<div class="section-button">
					<div class="wrap text-center">
						<a href="javascript:memberSel();" class="button primary"><span>선택</span></a>
					</div>
				</div> 
            </div>
        </div>
    </div>

<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>

<script type="text/javascript">
$(function(){
	var $frm = $("#frm");
	
	// 검색
    search = function() {
    	$frm.find("cPage").val("1");
		
		$("#popList").load("/am/prm/cpnMng/issueMemberPopupList.do", $frm.serialize(), function(){
			var $searchData	= $('input[name="CHK_MEM_IDs"]');
			var $selectedData	= $('input[name="SEL_MEM_IDs"]');
			
			// 선택 테이블에 담긴 데이터가 검색 테이블에 있을 경우 checked 속성 추가
			if( $selectedData.length > 0 ){
				$selectedData.each(function(idx, data){
					var id	= $(this).data('id');
					
					$searchData.each(function(){
						if(id == $(this).data('id')){
							$(this).prop('checked', true);
						}
					})
				})
			}
		});
    };
    
    // 페이지 이동
    goPage = function (cPage) {
    	$("#cPage").val(cPage);
        search();
    };
    
   // 검색
    goSearch = function (cPage) {
    	$("#cPage").val(1);
        search();
    };
    
    
    // 팝업 추가버튼
    memberAdd = function () {
    	var $checkData = $("input[name=CHK_MEM_IDs]:checked");
    	var $selectedData = $('input[name="SEL_MEM_IDs"]');
    	
    	if($checkData.length < 1) {
 			alert("선택된 데이터가 없습니다.");
 			return false;
 		}
    	
		var po = '';
    	$checkData.each(function(idx, data) {
    		var id		= $(this).data('id');
			var name	= $(this).data('nm');
			var useYn	= $(this).data('yn');
			var existYn	= true;

			if( $selectedData.length > 0 ){
				$selectedData.each(function(index, data){
					if( id == $(this).data('id') ) {
						existYn = false;
					}		
				})
			}
    		
    		if(existYn){
    			po += "<tr>"+$(this).parents("tr").html().replaceAll("CHK_MEM_ID","SEL_MEM_ID");+"</tr>"
    		}
    	});
    	
    	$("#_selectedData").append(po);
    };
    
    // 선택행 삭제
    memberDel = function () {
    	
    	if($("input[name=SEL_MEM_IDs]:checked").length < 1) {
 			alert("선택된 데이터가 없습니다.");
 			return false;
 		}
    	
    	$("input[name=SEL_MEM_IDs]:checked").each(function(idx, data) {
    		var row = $(this).parent().parent();
    		var id = $(this).data('id');
    		row.remove();
    	})
    }
    
    // 선택 data 부모창으로 return
    memberSel = function () {
		var $selectedData	= $('input[name="SEL_MEM_IDs"]');
    	
    	// data 없을경우 return
    	if($selectedData.length < 1 ) {
    		alert("선택된 데이터가 없습니다.")
    		return false;
    	}
    	
    	// 최대 선택 가능 갯수 체크
    	var limitYn = $("#LIMIT_YN").val();
    	
    	if("Y" == limitYn) {
    		if($selectedData.length > 1) {
        		alert("1건만 선택 가능합니다.");
     			return false;
        	}
    	}
    	
    	var params = new Array();
    	var obj;
    	
    	$selectedData.each(function(idx, data) {
    		
			obj = new Object();
    		obj.memId 			= $(this).data('id');
    		obj.memSpr 			= $(this).data('mem_spr');
    		obj.memNm 			= $(this).data('nm');
    		obj.loginId 		= $(this).data('login_id');
    		obj.bzplcId 		= $(this).data('bzplc_id');
    		obj.bzplcNm      	= $(this).data('bzplc_nm');
    		obj.oprUntId		= $(this).data('opr_unt_id');
    		obj.oprUntNm		= $(this).data('opr_unt_nm');
    		obj.deptId			= $(this).data('dept_id');
    		obj.deptNm			= $(this).data('dept_nm');
			
			params.push(obj);
    	});
    	
    	// 사업장 조회 팝업 return function
    	window.opener.fnResultMember(params);
		self.close();
    }
    
    search();
    
});
</script>
</body>
</html>
