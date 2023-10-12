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
			<div id="container">
				<h2 class="title"><span>신규상품요청 목록</span></h2>
				<h3 class="title"><span>조회</span></h3>

				<form id="searchForm">
					<input type="hidden" id="" name="" />
					
					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;">
						<colgroup>
							<col style="width:10%;" />
							<col style="width:25%;" />
							<col style="width:10%;" />
							<col style="width:25%;" />
							<col style="width:10%;" />
							<col style="width:20%;" />
						</colgroup>
						<tbody>
							<tr>
								<th><span>요청번호.상품ID</span></th>
								<td>
									<input type="text" class="text" id="" name="" placeholder="" />
									<a href="javascript:;" class=""></a>
								</td>
								<th><span>몰구분</span></th>
								<td>
									<select class="select" name="">
										<option value="">전체</option>
									</select>
								</td>
								<th><span>공용전용구분</span></th>
								<td>
									<select class="select" name="">
										<option value="">전체</option>
									</select>
								</td>
							</tr>
							<tr>
								<th><span>사업장/운영단위</span></th>
								<td colspan="3">
									<select class="select" name="">
										<option value="">사업장</option>
										<option value="">운영단위</option>
									</select>
									<input type="text" class="text" id="" name="" />
									<input type="text" class="text" id="" name="" />
									<a href="javascript:;" class="icon search2"></a>
								</td>
								<th><span>카테고리</span></th>
								<td>
									<input type="text" class="text" id="" name="" />
									<input type="text" class="text" id="" name="" />
									<a href="javascript:;" class="icon search2"></a>
								</td>
							</tr>
							<tr>
								<th><span>일자</span></th>
								<td colspan="3">
									<select class="select" name="">
										<option value="">요청일</option>
										<option value="">최종처리일</option>
									</select>
								</td>
								<th><span>대표상품구분</span></th>
								<td>
									<select class="select" name="">
										
									</select>
								</td>
							</tr>
							<tr>
								<th><span>처리상태</span></th>
								<td colspan="3">
								
								</td>
								<th><span>제안상태</span></th>
								<td>
								
								</td>
							</tr>
							<tr>
								<th><span>담당자</span></th>
								<td>
									
								</td>
								<th><span>처리자</span></th>
								<td>
								
								</td>
								<th><span>요청자</span></th>
								<td>
								
								</td>
							</tr>
							<tr>
								<th><span>상품명</span></th>
								<td>
								
								</td>
								<th><span>규격</span></th>
								<td>
								
								</td>
								<th><span>제조원</span></th>
								<td>
								
								</td>
							</tr>
						</tbody>
					</table>
				</form>
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
	console.log("product add list jsp load");
});
</script>