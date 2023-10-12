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
<script type="text/javascript">

$(function(){

	var index		= '${map.index}';

	<%-- 취소버튼 클릭 시 --%>
	$('#goList').on('click',function(){
		var newForm	= $('<form></form>');
		newForm.attr({"action":"<c:out value="${serverDomain}" />/am/cnt/hlpMng/helperList.do", "target":"_self", "method":"post"});
		newForm.appendTo('body');
		newForm.submit();
	});

});
</script>
</head>
<body>
	<div id="header">
		<%@ include file="/WEB-INF/jsp/am/include/top.jsp"%>
	</div>
	<!-- container -->
	<div id="container">
		<div id="aside" class="aside left">
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp"%>
		</div>
		<!-- wrapper -->
		<div id="wrapper">

			<div id="breadcrumb"></div>
			<!-- contents -->
			<div id="contents">

				<div class="container">

					<h2 class="title"><span>고객도우미관리</span></h2>
					<h3 class="title"><span>기본 정보</span></h3>
					<table cellspacing="0" class="table-row table-a">
<!-- 					<table cellspacing="0" class="table-col table-b" style="border-top: solid 1px #333;"> -->
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
						</colgroup>
						<tbody>
							<tr>
								<th scope="col"><label class="label"><span>운영단위</span></label></th>
								<td>
									${data.OPR_UNT_ID } | ${data.OPR_UNT_NM }
								</td>
								<th scope="col"><label class="label"><span>담당CS</span></label></th>
								<td>
									${data.CHR_CS_ORG_NM } | ${data.CHR_CS_NM }
								</td>
								<th scope="col"><label class="label"><span>상품등록CS</span></label></th>
								<td>
									<c:choose>
										<c:when test="${not empty data.MMID_ORG_NM}">
											${data.MMID_ORG_NM } | ${data.MMID_NM }
										</c:when>
										<c:otherwise>
											-
										</c:otherwise>
									</c:choose>
								</td>
							</tr>
							<tr>
								<th scope="col"><label class="label"><span>사용여부</span></label></th>
								<td colspan="5">
									<c:choose>
										<c:when test="${data.USE_YN eq 'Y'}">
											사용
										</c:when>
										<c:otherwise>
											미사용
										</c:otherwise>
									</c:choose>
								</td>
							</tr>
						</tbody>
					</table><!-- // table -->

					<h3 class="title"><span>고객 도우미</span></h3>
					<table cellspacing="0" class="table-row table-a">
<!-- 					<table cellspacing="0" class="table-col table-b" style="border-top: solid 1px #333;"> -->
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
						</colgroup>
						<tbody>
							<tr>
								<th scope="col"><label class="label"><span>Zendesk 그룹</span></label></th>
								<td>
									${data.ZENDESK } | ${data.ZENDESK_NM }
								</td>
								<th scope="col"><label class="label"><span>연락처구분</span></label></th>
								<td>
									${data.TEL_TYPE_NM }
								</td>
								<th scope="col"><label class="label"><span>Front 표시명</span></label></th>
								<td>
									${data.TEL_NM }
								</td>
							</tr>
							<tr>
								<th scope="col"><label class="label"><span>담당자 연락처</span></label></th>
								<td>
									${data.TEL_NO }
								</td>
								<th scope="col"><label class="label"><span>그룹인원</span></label></th>
								<td colspan="3">
									${data.ZEN_USERS }
								</td>
							</tr>
							<tr>
								<th scope="col"><label class="label"><span>발신 전용 이메일</span></label></th>
								<td>
									${data.EMAIL_ADDR }
								</td>
								<th scope="col"><label class="label"><span>URL</span></label></th>
								<td>
									${data.CAHT_URL }
								</td>
								<th scope="col"><label class="label"><span>채팅 사용 여부</span></label></th>
								<td>
									${data.CHAT_USE_YN }
								</td>
							</tr>
						</tbody>
					</table><!-- // table -->

					<h3 class="title"><span>채널별 이메일</span></h3>
					<table cellspacing="0" class="table-col table-b" style="border-top: solid 1px #333;">
						<colgroup>
							<col style="width: 20%;" />
							<col style="width: 20%;" />
							<col style="width: 20%;" />
							<col style="width: 20%;" />
							<col style="width: 20%;" />
						</colgroup>
						<tbody>
							<tr>
								<th scope="col"><label class="label"><span>전체</span></label></th>
								<th scope="col"><label class="label"><span>배송</span></label></th>
								<th scope="col"><label class="label"><span>주문</span></label></th>
								<th scope="col"><label class="label"><span>반품/교환/취소/AS</span></label></th>
								<th scope="col"><label class="label"><span>회원/정산/기타</span></label></th>
							</tr>
							<tr>
								<td>
									<c:choose>
										<c:when test="${not empty data.CH_EMAILS.CH_TYPE_10}">
											${data.CH_EMAILS.CH_TYPE_10 }
										</c:when>
										<c:otherwise>
											-
										</c:otherwise>
									</c:choose>
								</td>
								<td>
									<c:choose>
										<c:when test="${not empty data.CH_EMAILS.CH_TYPE_20}">
											${data.CH_EMAILS.CH_TYPE_20 }
										</c:when>
										<c:otherwise>
											-
										</c:otherwise>
									</c:choose>
								</td>
								<td>
									<c:choose>
										<c:when test="${not empty data.CH_EMAILS.CH_TYPE_30}">
											${data.CH_EMAILS.CH_TYPE_30 }
										</c:when>
										<c:otherwise>
											-
										</c:otherwise>
									</c:choose>
								</td>
								<td>
									<c:choose>
										<c:when test="${not empty data.CH_EMAILS.CH_TYPE_40}">
											${data.CH_EMAILS.CH_TYPE_40 }
										</c:when>
										<c:otherwise>
											-
										</c:otherwise>
									</c:choose>
								</td>
								<td>
									<c:choose>
										<c:when test="${not empty data.CH_EMAILS.CH_TYPE_50}">
											${data.CH_EMAILS.CH_TYPE_50 }
										</c:when>
										<c:otherwise>
											-
										</c:otherwise>
									</c:choose>
								</td>
							</tr>
						</tbody>
					</table><!-- // table -->

					<div class="section-button">
						<div class="wrap text-center">
							<a href="#none" id="goList" class="button large"><span>목록</span></a>
						</div>
					</div>
				</div>
			</div>
			<!-- // contents -->
		</div>
		<!-- // wrapper -->

		<div id="quickmenu" class="aside right">
			<%@ include file="/WEB-INF/jsp/am/include/quick.jsp"%>
		</div>
	</div>
	<!-- // container -->
	<div id="footer">
		<%@ include file="/WEB-INF/jsp/am/include/footer.jsp"%>
	</div>
	<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
</body>
</html>