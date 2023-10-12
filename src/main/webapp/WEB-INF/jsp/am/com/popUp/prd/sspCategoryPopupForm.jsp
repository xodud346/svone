<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>S-MRO 카테고리관리</title>
</head>
<body class="page-popup">
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
				<h2 class="title"><span>SSP 카테고리 검색</span></h2>
				
				 <form id="frm" name="frm">
                    <input type="hidden" id="cPage" name="cPage" value=""/>
                    <input type="hidden" id="pageSize" name="pageSize" value="10" />
                    <input type="hidden" id="searchLwstYn" name="searchLwstYn" value="${commandMap.searchLwstYn }" />
	                
	                <table class="table-row table-a" style="margin-bottom: 0;">
	                    <colgroup>
	                        <col style="width: 30%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                    		<th><span>카테고리ID</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="searchPrdClsCd" name="searchPrdClsCd" value="${commandMap.prdClsCd}" />
	                            </td>
	                    	</tr>
	                    	<tr>
	                    		<th><span>카테고리명</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="searchPrdClsNm" name="searchPrdClsNm" value="${commandMap.prdClsNm}" />
	                            </td>
	                    	</tr>
	                    </tbody>
	                </table>
                </form>
                
                <div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:searchClear('frm');" id="searchClear" class="button small"><span>초기화</span></a>
                    <a href="javascript:search('1');" class="button small primary"><span>검색</span></a>
                </div>
                
                <!-- 조회 결과 영역 -->
                <div id="categoryList"></div>
                
				<div class="grid text-center"><!-- 검색 하단 버튼 -->
                    <a href="javascript:categorySel();" class="button small"><span>선택</span></a>
                </div>
            </div>
        </div>
    </div>

<script src="/am/js/ui.js"></script>
<script src="/am/js/common.js"></script>

<script type="text/javascript">
$(function(){
	var $frm = $("#frm");
	
	// 조회
	search = function(cPage) {
		$("#cPage").val(cPage);
		
		$("#categoryList").load("/am/com/popUp/prd/sspCategoryPopupList.do", $frm.serialize(), function(){})
	}
	
    // 페이지 이동
    goPage = function (cPage) {
        search(cPage);
    };
	
    // 선택 data 부모창으로 return
    categorySel = function () {
    	
		var $rowChk = $("input[name='rowChk']:checked");
    	
    	if($rowChk.length < 1) {
    		alert("카테고리를 선택해주세요.");
    		return false;
    	}
    	
    	var obj	= new Object();
		
    	obj.prdClsCd = $("input[name='rowChk']:checked").data('id');
    	obj.prdClsNm = $("input[name='rowChk']:checked").data('nm');
    	obj.prdLvlNm = $("input[name='rowChk']:checked").data('lvlnm');
		
    	// 사업장 조회 팝업 return function
    	window.opener.fnResultSspCategory(obj);
		self.close();
    }
    
    search('1');
});
</script>
</body>
</html>
