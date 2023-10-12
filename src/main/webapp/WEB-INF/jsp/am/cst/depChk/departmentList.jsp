<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
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
						<span>부서조회</span>
					</h2>
					<h3 class="title">
						<span>조회</span>
					</h3>
					
					<form id="searchForm" name="searchForm">
						<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
							<colgroup>
								<col style="width: 10%;" />
								<col style="width: auto;"/>
								<col style="width: 10%;" />
								<col style="width: auto;"/>
								<col style="width: 10%;" />  
								<col style="width: auto;"/>
							</colgroup>
							<tbody>
								<tr>
									<th><span>부서</span></th>  
									<td>  
										<label><input type="text" name="" id="" class="text"/></label>
									</td>
									<th><span>사업장</span></th>  
									<td>  
										<label><input type="text" name="" id="" class="text"/></label>
									</td>
									<th><span>운영단위</span></th>
									<td>
										<label><input type="text" name="" id="" class="text"/></label>
									</td>
								</tr>
								<tr> 
									<th><span>상태</span></th>
									<td colspan="5">
										<select class="select" name="" id="">
											<option value="">전체</option>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
					</form>

					<div class="grid section-button-search">  
						<a href="#none" class="button small"><span>초기화</span></a>
						<a href="#none" class="button small primary"><span>조회</span></a>
					</div>
	                
					<h3 class="title">
						<span>목록</span>
					</h3>

					<form id="frm" name="frm">
						<div class="grid section-button-list">
							<div class="col- text-left">  
								<span class="pages">
									(총 <strong class="em">N</strong>건, 1/N)
								</span>
								<select class="" name="" id="">
									<option value="">선택</option>
								</select>
								<a href="#none" id="" class="button small"><span>상태변경</span></a>
								<a href="#none" id="" class="button small"><span>부서생성</span></a>
								<a href="#none" id="" class="button small"><span>부서복사</span></a>
								<a href="#none" id="" class="button small"><span>일괄등록</span></a>
								<a href="#none" id="" class="button small"><span>엑셀다운로드</span></a>
								<ui:pageSizeBox value="${paging.pageSize }" name="pageSize" type="" jsFunction="goPage"/>
							</div>
						</div>
					</form>

					<!-- table -->
					<table cellspacing="0" class="table-col table-b">
						<colgroup>
							<col style="width: 5%;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
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
								<th>선택</th>
								<th>상태</th>
								<th>고객 구분</th>
								<th>부서 레벨</th>
								<th>부서 코드</th>
								<th>부서ID</th>
								<th>부서명</th>
								<th>상위 부서 ID</th>
								<th>상위 부서 명</th>
								<th>운영단위 ID</th>
								<th>운영 단위 명</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colspan="11">조회조건을 선택 하신 후, 조회해 주세요.</td>
							<!--
								<td colspan="11">조회 결과가 없습니다.</td>
							-->
								
							<!-- 
								<td><input type="checkbox" class="checkbox"/></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td> 
							-->
							</tr>
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