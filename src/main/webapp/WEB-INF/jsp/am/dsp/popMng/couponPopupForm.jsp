<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>쿠폰 조회</title>
</head>
<body class="page-popup">
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
				<h3 class="title"><span>쿠폰 조회</span></h3>
                <form id="frm" name="frm">
                    <input type="hidden" id="cPage" name="cPage" value=""/>
                    <input type="hidden" id="pageSize" name="pageSize" value="10" />
                    <input type="hidden" id="POP_MST_IDX" name="CPN_MST_IDX" value="" />
	       
	                <table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
	                    <colgroup>
	                        <col style="width: 30%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                    		<th><span>쿠폰종휴</span></th>
	                            <td>
	                            	<select name="couponGbn" id="couponGbn">
	                            		<option value="">전체</option>
						                <option value="A">일반 쿠폰</option>
						                <option value="F">배송비 쿠폰</option>
									</select>
	                            </td>
	                    	</tr>
	                    	<tr>
	                    		<th><span>쿠폰 번호</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="couponNo" name="couponNo" value="" />
	                            </td>
	                    	</tr>
	                    	<tr>
	                    		<th><span>쿠폰명</span></th>
	                            <td>
	                            	<input type="text" class="text" style="width: 100%;" id="couponNm" name="couponNm" value="" />
	                            </td>
	                    	</tr>
	                    </tbody>
	                </table><!-- // table -->
                </form>
                
                <div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:searchClear('frm');" id="searchClear" class="button small"><span>초기화</span></a>
                    <a href="javascript:search();" class="button small primary"><span>검색</span></a>
                </div>
                
                <!-- 조회 결과 영역 -->
                <div id="popList">
                	<%-- <%@ include file="/WEB-INF/jsp/am/dsp/popMng/couponPopupList.jsp" %> --%>
                </div>
                <!-- //조회 결과 영역 -->
                
				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:bzplcSel();" class="button small primary"><span>선택</span></a>
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
		$("#popList").load("/am/dsp/popMng/couponPopupList.do", $frm.serialize(), function(){
			/* var $searchData	= $('input[name="CHK_BZPLC_IDs"]');
			var $selectedData	= $('input[name="SEL_BZPLC_IDs"]');
			
			if( $selectedData.length > 0 ){
				$selectedData.each(function(idx, data){
					var id		= $(this).data('id');
					
					$searchData.each(function(){
						if(id == $(this).data('id')) $(this).prop('checked', true);
					})
				})
			} */
		});
    };
    
    // 페이지 이동
    goPage = function (cPage) {
    	$("#cPage").val(cPage);
        search();
    };
    
    // 선택 data 부모창으로 return
    bzplcSel = function () {
    	
    	var $selectedData = $("input[name='COUPON_IDs']:checked");
    	
    	// data 없을경우 return
    	if($selectedData.length < 1 ) {
    		alert("<spring:message code='error.noDataSelected' />");
    		return false;
    	} else if($selectedData.length > 1){
    		alert("<spring:message code='error.onlyOneSelect' />");
 			return false;
    	}
    	
    	//var params = new Array();
    	var obj;
    	
    	$selectedData.each(function(idx, data) {
    		obj		= new Object();
			obj.ID	= $(this).data('id');
			obj.NM	= $(this).data('nm');
			
			//params.push(obj);
    	});
    	
    	// 사업장 조회 팝업 return function
    	window.opener.fnResultCoupon(obj);
		self.close();
    }
    
    search();
    
});
</script>
</body>
</html>
