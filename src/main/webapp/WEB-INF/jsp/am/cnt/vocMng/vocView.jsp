<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<%@page isELIgnored="false" %>
<style type="text/css">
<!--
-->
</style>
<script type="text/javascript">
$(function(){

	

	<%-- 목록 클릭 시 --%>
	$('#goList').on('click',function(){
		var $frm = $("#goListForm");
		$frm.attr({"action":"<c:out value="${serverDomain}"/>/am/cnt/vocMng/vocList.do", "target":"_self", "method":"post"}).submit();
		
	});

});
</script>
</head>
<body>
	<div id="header">
		<%@ include file="/WEB-INF/jsp/am/include/top.jsp"%>
	</div>
	<div id="container">
		<!-- container -->
		<div id="aside" class="aside left">
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp"%>
		</div>
		<!-- wrapper -->
		<div id="wrapper">
			<div id="breadcrumb"></div>
			
			<div id="contents">
				<div class="container">
					<h2 class="title"><span>VOC 현황조회</span></h2>
					
					<h3 class="title"><span>VOC 정보</span></h3>
					<table cellspacing="0" class="table-row table-a">
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
								<th scope="col"><label class="label"><span>VOC 상태</span></label></th>
								<td><c:out value="${vocDetail.vocStatsNm}"/></td>
								<th scope="col"><label class="label"><span>VOC 분류</span></label></th>
								<td><c:out value="${vocDetail.vocGclsNm}"/></td>
								<th scope="col"><label class="label"><span>VOC No</span></label></th>
								<td><c:out value="${vocDetail.vocNo}"/>-<c:out value="${vocDetail.vocItmNo}"/></td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>접수 채널</span></label></th>
								<td><c:out value="${vocDetail.pathCd}"/></td>
								<th scope="col"><label class="label"><span>요청일</span></label></th>
								<td>
									<fmt:parseDate value="${vocDetail.rqstDtm}" var="dateFmt" pattern="yyyy-MM-dd"/>
									<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
								</td>
									
								<th scope="col"><label class="label"><span>완료 예정일</span></label></th>
								<td>
									<fmt:parseDate value="${vocDetail.vocCmplHpeDtm}" var="dateFmt" pattern="yyyy-MM-dd"/>
									<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
								</td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>처리 가능 여부</span></label></th>
								<td colspan="5">
									<c:if test="${vocDetail.pssYn == 'Y'}">
										반품/교환/취소/AS 가능
									</c:if>
									
								</td>
							</tr>
						</tbody>
					</table>
					
					
					<h3 class="title"><span>요청자 정보</span></h3>
					<table cellspacing="0" class="table-row table-a">
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
								<th scope="col"><label class="label"><span>사업장</span></label></th>
								<td><c:out value="${vocDetail.reqrBzplc}"/></td>
								<th scope="col"><label class="label"><span>운영단위</span></label></th>
								<td><c:out value="${vocDetail.reqrUntNm}"/></td>
								<th scope="col"><label class="label"><span>부서</span></label></th>
								<td><c:out value="${vocDetail.reqrDeptNm}"/></td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>회원명</span></label></th>
								<td><c:out value="${vocDetail.reqrNm}"/></td>
								<th scope="col"><label class="label"><span>연락처</span></label></th>
								<td><c:out value="${vocDetail.reqrTel}"/></td>
								<th scope="col"><label class="label"><span>이메일</span></label></th>
								<td><c:out value="${vocDetail.reqrMail}"/></td>
							</tr>
						</tbody>
					</table>
					
					<h3 class="title"><span>주문 정보</span></h3>
					<table cellspacing="0" class="table-row table-a">
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
								<th scope="col"><label class="label"><span>주문 품목 번호</span></label></th>
								<td><c:out value="${vocOrderInfo.odrNo}"/></td>
								<th scope="col"><label class="label"><span>주문 상태</span></label></th>
								<td><c:out value="${vocOrderInfo.orderStatNm}"/></td>
								<th scope="col"><label class="label"><span>상품 ID</span></label></th>
								<td><c:out value="${vocOrderInfo.prdId}"/></td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>상품명</span></label></th>
								<td><c:out value="${vocDetail.prdIdNm}"/></td>
								<th scope="col"><label class="label"><span>대표 규격</span></label></th>
								<td colspan="3"><c:out value="${vocDetail.reprSpec}"/></td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>반품 수량</span></label></th>
								<td>
									<c:out value="${vocDetail.rtnOdrQty}"/>
									<%-- <c:out value="${vocDetail.rtngdsQty}"/> --%>
								</td>
								<th scope="col"><label class="label"><span>주문 수량</span></label></th>
								<td><c:out value="${vocOrderInfo.odrQty}"/></td>
								<th scope="col"><label class="label"><span>현 주문 금액</span></label></th>
								<td><c:out value="${vocOrderInfo.totalSelpr}"/></td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>협력사</span></label></th>
								<td><c:out value="${vocOrderInfo.cprtcpHglNm}"/></td>
								<th scope="col"><label class="label"><span>원주문 수량</span></label></th>
								<td><c:out value="${vocOrderInfo.oriOdrQty}"/></td>
								<th scope="col"><label class="label"><span>원 주문 금액</span></label></th>
								<td><c:out value="${vocOrderInfo.totalOriSelpr}"/></td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>단위</span></label></th>
								<td><c:out value="${vocOrderInfo.salsUntCd}"/></td>
								<th scope="col"><label class="label"><span>요청 수량</span></label></th>
								<td colspan="3">
									<!-- 반품/교환/취소/AS인 경우에만 요청 수량 컬럼 출력 -->
									<c:if test="${vocDetail.pssYn == 'Y'}">
										<c:out value="${vocDetail.odrQty}"/>
									</c:if>
								</td>
							</tr>
						</tbody>
					</table>
					
					
					<h3 class="title"><span>요청 내역</span></h3>
					<table cellspacing="0" class="table-row table-a">
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
								<th scope="col"><label class="label"><span>VOC Title</span></label></th>
								<td colspan="5">
									<c:out value="${vocDetail.regRqstTtl}"/>
								</td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>VOC 상세내역</span></label></th>
								<td colspan="5">
									<c:out value="${vocDetail.vocDtlCts}"/>
								</td>
							</tr>
							
						</tbody>
					</table>
					
					
					
					
					
					<h3 class="title"><span>VOC 처리 내역</span></h3>
					
					<table cellspacing="0" class="table-row table-a">
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
								<th scope="col"><label class="label"><span>VOC 처리 결과</span></label></th>
								<td colspan="5">
									<c:out value="${vocDetail.vocProcRsltCts}"/>
								</td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>담당자</span></label></th>
								<td>
									<c:out value="${vocDetail.oprtrNm}"/>
								</td>
								<th scope="col"><label class="label"><span>부서명</span></label></th>
								<td>
									<c:out value="${vocDetail.orgNm}"/>
								</td>
								<th scope="col"><label class="label"><span>연락처</span></label></th>
								<td>
									<c:out value="${vocDetail.telNo}"/>
								</td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>담당자 메모</span></label></th>
								<td colspan="5">
									<c:out value="${vocDetail.mmoCts}"/>
								</td>
							</tr>
						</tbody>
					</table>
					
					
					
					<h3 class="title"><span>VOC 처리 현황</span></h3>
					
					<table cellspacing="0" class="table-row table-a">
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
								<th scope="col"><label class="label"><span>접수 채널</span></label></th>
								<td>
									<!-- 컬럼 정의 필요 -->
								</td>
								<th scope="col"><label class="label"><span>담당자</span></label></th>
								<td>
									<c:out value="${vocDetail.oprtrNm}"/>
								</td>
								<th scope="col"><label class="label"><span>부서명</span></label></th>
								<td>
									<c:out value="${vocDetail.orgNm}"/>
								</td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>처리 현황</span></label></th>
								<td colspan="5">
									<table cellspacing="0" class="table-row table-a">
										<colgroup>
											<col style="width: 10%;" />
											<col style="width: 20%;" />
											<col style="width: 10%;" />
											<col style="width: 20%;" />
											<col style="width: 10%;" />
											<col style="width: 20%;" />
										</colgroup>
										<tbody>
										
											<c:if test="${vocReqHst ne null }">
												<thead>
													<tr>
														<th>VOC 처리상태</th>
														<th>실 처리자</th>
														<th>처리 일시</th>
														<th colspan="3">메모</th>
													</tr>
												</thead>
											</c:if>
											<c:forEach var="list" items="${vocProcList }" varStatus="i" >
												<tr>
													<td>${list.vocStatsNm}</td>
													<td>${list.vocRealDealrNm}</td>
													<td>
														<fmt:parseDate value="${list.vocProcDtm}" var="dateFmt" pattern="yyyy-MM-dd"/>
														<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
													</td>
													<td colspan="3">
														${list.vocCts}
													</td>
												</tr>
											</c:forEach>
										</tbody>
									</table>
								</td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>완료 알림 여부</span></label></th>
								<td colspan="5">
									<!-- CMPL_NOTI_SPR_CD 완료공지구분코드 -->
									<c:out value="${vocDetail.cmplNoti}"/>
									
								</td>
							</tr>
							
							<tr>
								<th scope="col"><label class="label"><span>첨부 파일</span></label></th>
								<td colspan="5">
								</td>
							</tr>
							
						
						</tbody>
						
					</table>
					
					<h3 class="title"><span>작업 요청 이력</span></h3>
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 5%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
						</colgroup>
						<thead>
							<tr>
								<th>순번</th>
								<th>작업 요청 번호</th>
								<th>요청 부서</th>
								<th>요청자</th>
								<th>수신 부서</th>
								<th>수신자/처리자</th>
								<th>상태</th>
								<th>일시</th>
								<th>메모</th>
							</tr>
						</thead>
						<tbody>
						
						<c:forEach var="list" items="${vocReqHst }" varStatus="i" >
							<tr>
								<td>${i.index+1}</td>
								<td>${list.jrId}</td>
								<td>${list.reqDp}</td>
								<td>${list.reqNm}</td>
								<td>
									${list.orgNm}
								</td>
								<td>
									${list.oprtrNm} 
								</td>
								<td>
									${list.jrStatsNm}
								</td>
								<td>
									<fmt:parseDate value="${list.dtm}" var="dateFmt" pattern="yyyy-MM-dd"/>
									<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
								</td>
								<td>
									${list.jrpsnMmo}
								</td>
							</tr>
						</c:forEach>
											
						</tbody>
					</table>
					
					
					<h3 class="title"><span>반품/교환/AS 진행상태</span></h3>
					<table cellspacing="0" class="table-row table-a">
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
								<th scope="col"><label class="label"><span>배송 형태</span></label></th>
								<td>
									<c:if test="${rtnGdsInfo.dlvFormSprCd != null}">
										<c:out value="${rtnGdsInfo.dlvFormSprCd}"/>|<c:out value="${rtnGdsInfo.dlvFormSprNm}"/>
									</c:if>
									
								</td>
								<th scope="col"><label class="label"><span>협력사</span></label></th>
								<td colspan="3">
									<c:if test="${vocOrderInfo.cprtcpId != null}">
										<c:out value="${vocOrderInfo.cprtcpId}"/>|<c:out value="${vocOrderInfo.cprtcpHglNm}"/>
									</c:if>
								</td>
								
							</tr>
							<tr>
								<th scope="col"><label class="label"><span>유형</span></label></th>
								<td>
									입고 플랜트
								</td>
								<th scope="col"><label class="label"><span>플랜트 ID</span></label></th>
								<td>
									<c:out value="${rtnGdsInfo.giPlntId}"/>
								</td>
								<th scope="col"><label class="label"><span>플랜트 명</span></label></th>
								<td colspan="3">
									<c:out value="${rtnGdsInfo.giPlntNm}"/>
								</td>
							</tr>
							<tr>
								<th scope="col"><label class="label"><span>유형</span></label></th>
								<td>
									출고 플랜트
								</td>
								<th scope="col"><label class="label"><span>플랜트 ID</span></label></th>
								<td>
									<c:out value="${rtnGdsInfo.goPlntId}"/>
								</td>
								<th scope="col"><label class="label"><span>플랜트 명</span></label></th>
								<td colspan="3">
									<c:out value="${rtnGdsInfo.goPlntNm}"/>
								</td>
							</tr>
						</tbody>
					</table>
					
					
					
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							
						</colgroup>
						<thead>
							<tr>
								<th colspan="3">처리 상태</th>
								<th colspan="3">업무 담당</th>
								<th colspan="3">처리 일시</th>
							</tr>
						</thead>
						
						<tbody>
							<c:forEach var="list" items="${rtnGdsProcList }" varStatus="i" >
								<tr>
									<td colspan="3">
										${list.exceptProcStatsNm}
									</td>
									<td colspan="3">
										${list.dlvRelTaskSbjNm}
									</td>
									<td colspan="3">
										<fmt:parseDate value="${list.procDtm}" var="dateFmt" pattern="yyyy-MM-dd"/>
										<fmt:formatDate value="${dateFmt}"  pattern="yyyy-MM-dd"/>
									</td>
									
								</tr>
							</c:forEach>
						</tbody>
					</table>
					
					
					<table cellspacing="0" class="table-row table-a">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
						</colgroup>
						<thead>
							<tr>
								<th colspan="2">유형</th>
								<th colspan="2">시작일</th>
								<th colspan="2">종료일</th>
								<th colspan="2">처리/LT</th>
							</tr>
						</thead>
						
						<tbody>
							<c:forEach var="list" items="${rtnLtProcList }" varStatus="i" >
								<tr>
									<td colspan="2">
										${list.dlvLtTpNm} 
									</td>
									
									<td colspan="2">
										<fmt:parseDate value="${list.strProcDtm}" var="strProcDtm" pattern="yyyy-MM-dd"/>
										<fmt:formatDate value="${strProcDtm}"  pattern="yyyy-MM-dd"/>
									</td colspan="2">
									
									<td colspan="2">
										<fmt:parseDate value="${list.endProcDtm}" var="endProcDtm" pattern="yyyy-MM-dd"/>
										<fmt:formatDate value="${endProcDtm}"  pattern="yyyy-MM-dd"/>
									</td>
									
									<td colspan="2">
										<%--
										<fmt:parseDate value="${list.strProcDtm }" var="strPlanDate" pattern="yyyy-MM-dd"/>
										<fmt:parseNumber value="${strPlanDate.time / (1000*60*60*24)}" integerOnly="true" var="strDate"></fmt:parseNumber>
										<fmt:parseDate value="${list.endProcDtm }" var="endPlanDate" pattern="yyyy-MM-dd"/>
										<fmt:parseNumber value="${endPlanDate.time / (1000*60*60*24)}" integerOnly="true" var="endDate"></fmt:parseNumber>
										${endDate - strDate }
										 --%>
										 <c:out value="${list.leadTime}"/>
									</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
					
					<form id="goListForm" name="goListForm">
						<c:forEach var="entry" items="${goList}">
         					<%-- <c:out value="${entry.key}"/> = <c:out value="${entry.value}"/> --%>
         					<input type="hidden" name="<c:out value="${entry.key}"/>" value="<c:out value="${entry.value}"/>"/>
						</c:forEach>


					</form>
					<div class="section-button">
						<div class="wrap text-center">
							<a href="#none" id="goList" class="button large"><span>목록</span></a>
						</div>
					</div>			
					
				</div>
			</div>
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