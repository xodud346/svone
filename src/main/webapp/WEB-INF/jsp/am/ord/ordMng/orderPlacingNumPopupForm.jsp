<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>발주 번호 조회</title>
</head>
<body class="page-popup">
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
				<h3 class="title"><span>발주 번호 조회</span></h3>
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
		                    		<th><span>발주번호<i class="require"><em>필수입력</em></i></span></th>
		                            <td>
		                            	<input type="text" class="text" style="width: 100%;" id="" name="" value="" />
		                            </td>
		                    	</tr>
		                    	<tr>
		                    		<th><span>상품명</span></th>
		                            <td>
		                            	<input type="text" class="text" style="width: 100%;" id="" name="" value="" />
		                            </td>
		                    	</tr>
		                    	<tr>
		                    		<th><span>주문 번호</span></th>
		                            <td>
		                            	<input type="text" class="text" style="width: 100%;" id="" name="" value="" />
		                            </td>
		                    	</tr>
		                    	<tr>
		                    		<th><span>사업장 ID</span></th>
		                            <td>
		                            	<input type="text" class="text" style="width: 100%;" id="" name="" value="" />
		                            </td>
		                    	</tr>
		                    	<tr>
		                    		<th><span>운영단위 ID</span></th>
		                            <td>
		                            	<input type="text" class="text" style="width: 100%;" id="" name="" value="" />
		                            </td>
		                    	</tr>
		                    </tbody>
		                </table><!-- // table -->
	                </form>
                <div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:searchClear('frm');" id="searchClear" class="button small"><span>초기화</span></a>
                    <a href="javascript:search();" class="button small primary"><span>조회</span></a>
                </div>
					<%--<div id="popList">
					<%@ include file="/WEB-INF/jsp/am/ord/ordMng/orderNumberPopupList.do" %>
       				</div> --%>
				<div class="col-1-2 text-left">
					<span id="pages" class="pages">
						(총 <strong class="em"><c:out value="${paging.totalRecordCount }" /></strong>건, <c:out value="${paging.cPage }" />/<c:out value="${paging.totalPageCount }" />)
					</span>
				</div>
				<br>
				<table cellspacing="0" class="table-col table-b">
					<colgroup>
						<col style="width: 5%;" />
						<col style="width: auto;" />
						<col style="width: 25%;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
					</colgroup>
					<thead>
						<tr>
							<th >선택</th>
							<th >발주 번호</th>
							<th >상품명</th>
							<th >주문 번호</th>
							<th >사업장 ID</th>
							<th >운영 단위 ID</th>
						</tr>
					</thead>
					<tbody id="">
							<tr>
								<td><input type="checkbox" class="checkbox"/></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
					</tbody>
				</table>
				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:;" class="button small primary"><span>추가</span></a>
                </div>				
				<div class="section-pagination">
					<h4 class="sr-only">목록 페이징</h4>
					<div class="wrap">
						<ui:paging paging="${paging}" jsFunction="goPage" />
					</div>
				</div>
				<br>
				<table cellspacing="0" class="table-col table-b">
					<colgroup>
						<col style="width: 5%;" />
						<col style="width: auto;" />
						<col style="width: 25%;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
						<col style="width: auto;" />
					</colgroup>
					<thead>
						<tr>
							<th >선택</th>
							<th >발주 번호</th>
							<th >상품명</th>
							<th >주문 번호</th>
							<th >사업장 ID</th>
							<th >운영 단위 ID</th>
						</tr>
					</thead>
					<tbody id="_selectedData">
							<tr>
								<td><input type="checkbox" class="checkbox"/></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
					</tbody>
				</table>
				<div class="grid section-button-search"><!-- 검색 하단 버튼 -->
                    <a href="javascript:;" class="button small primary"><span>삭제</span></a>
                </div>											
            </div>
        </div>
    </div>
<script src="<c:out value="${serverDomain}" />/am/js/ui.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>

<script type="text/javascript">
$(function(){
	
	var $frm = $("#frm");
   
});
</script>
</body>
</html>
