<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<style type="text/css">
<!--
-->
</style>
</head>
<body><!-- body class, 중요 -->

<div id="header"><!-- header -->
    <%@ include file="/WEB-INF/jsp/am/include/top.jsp" %>
</div><!-- // header -->

<div id="container"><!-- container -->

    <div id="aside" class="aside left"><!-- aside -->
        <%@ include file="/WEB-INF/jsp/am/include/left.jsp" %>
    </div><!-- // aside -->

    <div id="wrapper"><!-- wrapper -->

        <div id="breadcrumb"></div><!-- breadcrumb -->

        <div id="contents"><!-- contents -->

            <div class="container">

                <h2 class="title"><span>쿠폰생성</span></h2>

                <h3 class="title"><span>기본정보</span></h3>
                
                <p>
                   <span><i class="require"><em>필수입력</em></i></span> 표시된 항목은 필수 입력 사항입니다.
                </p>
                
                <form id="searchForm" name="searchForm">
                	<input type="hidden" name="searchCpnMstGbn" value="<c:out value="${commandMap.searchCpnMstGbn }"/>"/>
                    <input type="hidden" name="searchCpnMstTitle" value="<c:out value="${commandMap.searchCpnMstTitle }"/>"/>
                    <input type="hidden" name="searchCpnMstIdx" value="<c:out value="${commandMap.searchCpnMstIdx }"/>"/>
                    <input type="hidden" name="searchCpnMstIsuGbn" value="<c:out value="${commandMap.searchCpnMstIsuGbn }"/>"/>
                    <input type="hidden" name="searchCpnMstShopType" value="<c:out value="${commandMap.searchCpnMstShopType }"/>"/>
                    <input type="hidden" name="searchCpnMstUseYn" value="<c:out value="${commandMap.searchCpnMstUseYn }"/>"/>
                    <input type="hidden" name="searchCpnMstSeDt" value="<c:out value="${commandMap.searchCpnMstSeDt }"/>"/>
                    <input type="hidden" name="searchCpnMstStDt" value="<c:out value="${commandMap.searchCpnMstStDt }"/>"/>
                    <input type="hidden" name="searchCpnMstEdDt" value="<c:out value="${commandMap.searchCpnMstEdDt }"/>"/>
                    <input type="hidden" name="searchGb" value="<c:out value="${commandMap.searchGb }" />" />  
                    <input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/>  
					<input type="hidden" name="pageSize" value="<c:out value="${commandMap.pageSize }"/>"/>
                </form>
               
                <form id="frm" name="frm" enctype="multipart/form-data"> 
                	<double-submit:preventer/>
			  		<table cellspacing="0" class="table-row table-a"><!-- table -->
	                    <colgroup>
	                        <col style="width: 15%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                    		<th><label class="label"><span>쿠폰번호<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                    		<input type="hidden" name="CPN_MST_IDX" id="CPN_MST_IDX" value="<c:out value="${row.CPN_MST_IDX }"/>"/>
		                            <span><c:out value="${row.CPN_MST_IDX }"/></span>
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>쿠폰종류<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                    		<c:choose>
										<c:when test="${row.CPN_MST_GBN eq 'A'}"><span>일반</span>
										</c:when>
										<c:when test="${row.CPN_MST_GBN eq 'B'}"><span>생일</span>
										</c:when>
										<c:when test="${row.CPN_MST_GBN eq 'C'}"><span>첫구매</span>
										</c:when>
										<c:when test="${row.CPN_MST_GBN eq 'D'}"><span>회원등급</span>
										</c:when>
										<c:when test="${row.CPN_MST_GBN eq 'E'}"><span>회원가입</span>
										</c:when>
										<c:when test="${row.CPN_MST_GBN eq 'F'}"><span>배송비무료</span>
										</c:when>
										<c:when test="${row.CPN_MST_GBN eq 'G'}"><span>제휴</span>
										</c:when>
										<c:otherwise>
											<span>-</span>
										</c:otherwise>
									</c:choose>         
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>고객쿠폰명</span></label></th>
	                    		<td>
		                    		 <input type="text" name="CPN_MST_TITLE" id="CPN_MST_TITLE" value="<c:out value="${row.CPN_MST_TITLE }"/>" class="text xlarge" maxlength="100"/>
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>관리자설명</span></label></th>
	                    		<td>
		                    		<input type="text" name="CPN_MST_ADM_TXT" id="CPN_MST_ADM_TXT" value="<c:out value="${row.CPN_MST_ADM_TXT }"/>" class="text xlarge" maxlength="100"/>
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>할인구분<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                    		<c:choose>
										<c:when test="${row.CPN_MST_SAL_GBN eq 'A'}"><span>정율</span>
										</c:when>
										<c:when test="${row.CPN_MST_SAL_GBN eq 'B'}"><span>정액</span>
										</c:when>											
										<c:otherwise>
											<span>-</span>
										</c:otherwise>
									</c:choose>
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>할인금액/율<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                    		<span><fmt:formatNumber value="${row.CPN_MST_SAL_PRC}" type="number"/>&nbsp;(%/원)</span>  
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>최소구매금액<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                    		<span><fmt:formatNumber value="${row.CPN_MST_SML_PRC}" type="number"/>&nbsp;원 이상 구매 시 사용가능</span>
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>최대할인금액<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                    		<label class="label" id="CPN_MST_MXM_PRC_TX1" name="CPN_MST_MXM_PRC_TX1"><span>최대할인금액</span></label>
			                        <span><fmt:formatNumber value="${not empty row.CPN_MST_MXM_PRC ? row.CPN_MST_MXM_PRC : '0'}" type="number"/>&nbsp;원</span>
	                    		</td>
	                        </tr>
	                        <tr>
	                            <th><label class="label"><span>
	                          	<c:if test="${row.CPN_MST_GBN eq 'G'}">쿠폰등록기간</c:if><c:if test="${row.CPN_MST_GBN ne 'G'}">발급기간</c:if> 
	                            <i class="require"><em>필수입력</em></i></span></label></th>
	                            <td>
	                            	&nbsp;<span><ui:formatDate value="${row.CPN_MST_ISU_ST_DT }" pattern="yyyy.MM.dd"/></span>
									&nbsp;<span><c:out value="${row.CPN_MST_ISU_ST_HH }"/></span>
                        			<span class="auctionEventTime">시</span>
                        			&nbsp;<span><c:out value="${row.CPN_MST_ISU_ST_MM }"/></span>				                        
			                        <span class="auctionEventTime">분                        		
		                             ~
	                          		</span>      
	                          		&nbsp;<span><ui:formatDate value="${row.CPN_MST_ISU_ED_DT }" pattern="yyyy.MM.dd"/></span>
	                          		&nbsp;<span><c:out value="${row.CPN_MST_ISU_ED_HH }"/></span>		                          		
		                            <span class="auctionEventTime">시</span>
		                            &nbsp;<span><c:out value="${row.CPN_MST_ISU_ED_MM }"/></span>	
		                            <span class="auctionEventTime">분</span>
		                        	&nbsp;
		                        	<c:choose>
										<c:when test="${row.CPN_MST_ISU_ED_DT eq '99991231'}"><span>(종료일 무한)</span>
										</c:when>																					
										<c:otherwise>
										</c:otherwise>
									</c:choose>    		
	                            </td>
	                        </tr>
	                        <c:if test="${row.CPN_MST_GBN eq 'G'}">
		                        <tr>
		                    		<th><label class="label"><span>발급수량</span></label></th>
		                    		<td>
		                    			<c:if test="${row.CPN_MST_PTN_SHP_GBN eq 'F'}">
			                        		고정  (1개의 쿠폰번호 생성)                       	
			                        	</c:if>
			                            <c:if test="${row.CPN_MST_PTN_SHP_GBN eq 'R'}">
			                        		난수       <c:out value="${row.CPN_MST_PTN_SHP_RND }"/> 개                       	
			                        	</c:if>
		                    		</td>
		                        </tr>
	                        </c:if>
	                        
                         	<c:if test="${row.CPN_MST_GBN ne 'G'}">
		                        <tr>
		                    		<th><label class="label"><span>발급수량<i class="require"><em>필수입력</em></i></span></label></th>
		                    		<td>
		                    			<c:if test="${row.CPN_MST_LMT_YN eq 'Y'}">
				                        	<span>무제한</span>
			                    	    </c:if>
				                        <c:if test="${row.CPN_MST_LMT_YN ne 'Y'}">
				                            <span><c:out value="${row.CPN_MST_ISU_CNT }"/></span>
				                        </c:if>
		                    		</td>
		                        </tr>
		                        
		                        <tr>
		                    		<th><label class="label"><span>발급방식<i class="require"><em>필수입력</em></i></span></label></th>
		                    		<td>
		                    			<c:choose>
											<c:when test="${row.CPN_MST_ISU_GBN eq 'A'}"><span>자동발급</span>
											</c:when>
											<c:when test="${row.CPN_MST_ISU_GBN eq 'B'}"><span>대상자 지정 발행</span>
											</c:when>				
											<c:when test="${row.CPN_MST_ISU_GBN eq 'C'}"><span>다운로드발급</span>
											</c:when>									
											<c:otherwise>
												<span>-</span>
											</c:otherwise>
										</c:choose>    
		                    		</td>
		                        </tr>
	                        </c:if>
	                        
	                        <tr>
	                    		<th><label class="label"><span>사용기간/일수<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
	                    			<c:choose>
										<c:when test="${row.CPN_MST_ISU_DAY_GBN eq 'A'}"><span>고정기간</span>&nbsp;
				                            &nbsp;<span><ui:formatDate value="${row.CPN_MST_USE_ST_DT }" pattern="yyyy.MM.dd"/></span> 										
				                             ~
			                          		   
			                          		&nbsp;<span><ui:formatDate value="${row.CPN_MST_USE_ED_DT }" pattern="yyyy.MM.dd"/></span> 										
			                          		</br>
	                          			</c:when>
									</c:choose>
	                          		<c:choose>
										<c:when test="${row.CPN_MST_ISU_DAY_GBN eq 'B'}"><span>사용가능일수(<c:if test="${row.CPN_MST_GBN eq 'G'}">등록일</c:if><c:if test="${row.CPN_MST_GBN ne 'G'}">발행일</c:if>로부터&nbsp;<c:out value="${row.CPN_MST_USE_DAY }"/>&nbsp;일)</span>
										</c:when>
									</c:choose>  
									<c:choose>
										<c:when test="${row.CPN_MST_ISU_DAY_GBN eq 'M'}"><span>발행 당월말까지 사용</span>
										</c:when>
									</c:choose>    
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>상태<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
	                    			<input type="radio" name="CPN_MST_YN" id="cmyA" class="radio" <c:if test="${row.CPN_MST_YN eq 'Y' }">checked="checked"</c:if> value="Y"/>
		                            <label for="cmyA">사용</label>
		                            <input type="radio" name="CPN_MST_YN" id="cmyB" class="radio" <c:if test="${row.CPN_MST_YN eq 'N' }">checked="checked"</c:if> value="N"/>
		                            <label for="cmyB">미사용</label>
	                    		</td>
	                        </tr>
	                    </tbody>
                	</table><!-- // table -->
                	
                	<h3 class="title"><span>대상정보</span></h3>
	                <p>
	                   <span><i class="require"><em>필수입력</em></i></span> 표시된 항목은 필수 입력 사항입니다.
	                </p>
	                
	                <table cellspacing="0" class="table-row table-a"><!-- table -->
	                    <colgroup>
	                        <col style="width: 15%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                    		<th><label class="label"><span>채널<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                    		<c:choose>
										<c:when test="${row.CPN_MST_MB_YN eq 'Y' and row.CPN_MST_PC_YN eq 'Y'}"><span>PC+MOBILE</span>
										</c:when>
										<c:otherwise>
											<c:if test="${row.CPN_MST_PC_YN eq 'Y'}" ><span>PC</span></c:if>
											<c:if test="${row.CPN_MST_MB_YN eq 'Y'}" ><span>MOBILE</span></c:if>
										</c:otherwise>
									</c:choose>    
	                    		</td>
	                        </tr>
	                        <c:if test="${row.CPN_MST_GBN ne 'G'}"> 
		                        <tr>
		                    		<th><label class="label"><span>회원<i class="require"><em>필수입력</em></i></span></label></th>
		                    		<td>
		                    			<!-- 전체/개별 -->
									 	<c:choose>
											<c:when test="${row.CPN_MST_MBR_GBN eq 'B' }">
												<span>개별회원</span>
											</c:when>
											<c:otherwise>
												<!-- 간편회원/ 일반회원 -->
												<c:if test="${row.CPN_MST_SMP_YN eq 'Y' }"> 
													<span>간편회원</span>
												</c:if>
												<c:if test="${row.CPN_MST_SMP_YN eq 'Y' && row.CPN_MST_NML_YN eq 'Y' }">
													,
												</c:if>
												<c:if test="${row.CPN_MST_NML_YN eq 'Y' }">
													<span>일반회원</span>&nbsp;
													<c:choose>													
														<c:when test="${row.CPN_MST_MEM_GRD eq Code.PRI_MEMBER_PLATINUM_GRADE}">
															<span>PLATINUM</span>
														</c:when>	
														<c:when test="${row.CPN_MST_MEM_GRD eq Code.PRI_MEMBER_VIP_GRADE}">
															<span>VIP</span>
														</c:when>	
														<c:when test="${row.CPN_MST_MEM_GRD eq Code.PRI_MEMBER_GOLD_GRADE}">
															<span>GOLD</span>
														</c:when>	
														<c:when test="${row.CPN_MST_MEM_GRD eq Code.PRI_MEMBER_SILVER_GRADE}">
															<span>SILVER</span>
														</c:when>	
														<c:when test="${row.CPN_MST_MEM_GRD eq Code.PRI_MEMBER_RED_GRADE}">
															<span>RED</span>
														</c:when>																			
														<c:otherwise>
															<c:if test="${row.CPN_MST_NML_YN eq 'Y'}" ><span>전체</span></c:if>
														</c:otherwise>
													</c:choose>    
												</c:if>
											</c:otherwise>
										</c:choose>                                                       
		                    		</td>
		                        </tr>
	                        </c:if>
	                    </tbody>
                	</table><!-- // table -->
                	
                	<h3 class="title"><span>적용상품</span></h3>
	                <p>
	                   <span><i class="require"><em>필수입력</em></i></span> 표시된 항목은 필수 입력 사항입니다.
	                </p>
                	
                	<table cellspacing="0" class="table-row table-a"><!-- table -->
	                    <colgroup>
	                        <col style="width: 15%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                    		<th><label class="label"><span>상품<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                    		<input type="hidden" name="CPN_MST_TGT_GBN" id="CPN_MST_TGT_GBN" value="<c:out value="${row.CPN_MST_TGT_GBN }"/>"/>
		                            <c:choose>
										<c:when test="${row.CPN_MST_TGT_GBN eq 'A'}"><span>개별상품</span>&nbsp;
										</c:when>	
										<c:when test="${row.CPN_MST_TGT_GBN eq 'B'}"><span>전체상품</span>&nbsp;
										</c:when>	
										<c:when test="${row.CPN_MST_TGT_GBN eq 'C'}"><span>브랜드</span>&nbsp;
										</c:when>	
										<c:when test="${row.CPN_MST_TGT_GBN eq 'D'}"><span>기획전</span>&nbsp;
										</c:when>	
										<c:otherwise>
											<span>-</span>
										</c:otherwise>
									</c:choose>     
	                    		</td>
	                        </tr>
	                        
	                        <c:choose>
							<c:when test="${row.CPN_MST_TGT_GBN eq 'A'}">		  
		                        <tr>
		                    		<th><label class="label"><span>대상<i class="require"><em>필수입력</em></i></span></label></th>
		                    		<td>
			                    		<table class="table-row table-a" id="tableProduct">
											<colgroup>
												<col style="width: 160px" />
												<col style="width: auto;"/>
												<col style="width: 100px"/>
												<col style="width: 100px"/>
												<col style="width: 80px"/>
												<col style="width: 80px"/>
											</colgroup>
											<thead>
												<tr>
													<th>상품코드</th>
													<th>상품명</th>
													<th>정상가</th>
													<th>판매가</th>
													<th>판매상태</th>
													<th>쇼핑채널</th>
												</tr>
											</thead>
											
											<tbody id="list-field">
					                            <c:choose>
					                                <c:when test="${not empty listY }">
					                                    
					                                    <c:forEach var="rowlistY" items="${listY }" varStatus="i">
					                                        <tr>
								                                <td><c:out value="${rowlistY.PRD_MST_CD }"/></td>		                               		
								                                <td><c:out value="${rowlistY.PRD_MST_NM }"/></td>	
								                                <td><c:out value="${rowlistY.PRD_MST_PRC }"/></td>		          
								                                <td><c:out value="${rowlistY.PRD_MST_SCH_PRC }"/></td>		          
								                                <td>
								                                	<c:if test="${rowlistY.PRD_MST_DPL_STATE eq 'Y' }"><span class="history-condition success"><i class="fonti um-circle"></i>판매중</span></c:if>
																	<c:if test="${rowlistY.PRD_MST_DPL_STATE eq 'N' }"><span class="history-condition info"><i class="fonti um-circle"></i>미판매</span></c:if> 
					                                            </td>        
								                                <td>
								                                	<c:choose>
																		<c:when test="${rowlistY.PRD_MST_CNL_MB_YN eq 'Y' and rowlistY.PRD_MST_CNL_PC_YN eq 'Y'}">PC+MOBILE
																		</c:when>
																		<c:otherwise>
																			<c:if test="${rowlistY.PRD_MST_CNL_PC_YN eq 'Y'}" >PC</c:if>
																			<c:if test="${rowlistY.PRD_MST_CNL_MB_YN eq 'Y'}" >MOBILE</c:if>
																		</c:otherwise>
																	</c:choose>
								                                </td>         	          
								                            </tr>
					                                
					                                    </c:forEach>
					                                </c:when>
					                                <c:otherwise>
					                                    <tr>
					                                        <td class="td_no_result">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
					                                    </tr>
					                                </c:otherwise>
					                            </c:choose>
					                        </tbody>		
										</table>
		                    		</td>
		                        </tr>
	                        </c:when>
							</c:choose>
							
							<!-- 브랜드 -->
							<c:choose>
							<c:when test="${row.CPN_MST_TGT_GBN eq 'C'}">  
		                        <tr>
		                    		<th><label class="label"><span>대상<i class="require"><em>필수입력</em></i></span></label></th>
		                    		<td>
			                    		<table class="table-row table-a" id="tableBrand2">
											<colgroup>
												<col style="width: 40px;" />
												<col style="width: 160px" />
											</colgroup>
											<thead>
												<tr>													
													<th>브랜드코드</th>
													<th>브랜드명</th>
												</tr>
											</thead>
											<tbody id="list-field">
					                            <c:choose>
					                                <c:when test="${not empty listY }">
					                                    <c:forEach var="rowlistY" items="${listY }" varStatus="i">
					                                        <tr>
								                                <td><c:out value="${rowlistY.BND_MST_IDX }"/></td>		                               		
								                                <td><c:out value="${rowlistY.BND_MST_BRAND_NM }"/></td>	
								                            </tr>					                                
					                                    </c:forEach>
					                                </c:when>
					                                <c:otherwise>
					                                    <tr>
					                                        <td class="td_no_result">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
					                                    </tr>
					                                </c:otherwise>
					                            </c:choose>
					                        </tbody>		
										</table>
		                    		</td>
		                        </tr>
	                        </c:when>
							</c:choose>
							
							<!--협력업체 -->
							<c:choose>
							<c:when test="${row.CPN_MST_TGT_GBN eq 'D'}"> 
		                        <tr>
		                    		<th><label class="label"><span>대상<i class="require"><em>필수입력</em></i></span></label></th>
		                    		<td>
			                    		<c:choose>
							           	<c:when test="${not empty listY }">
							           	<c:forEach var="rowlistY" items="${listY }" varStatus="i">
											<td>[
										    	<c:choose>
													<c:when test="${rowlistY.PLN_MST_CHANNEL_MOBILE_YN eq 'Y' and rowlistY.PLN_MST_CHANNEL_PC_YN eq 'Y'}">PC+MOBILE
													</c:when>
													<c:otherwise>
														<c:if test="${rowlistY.PLN_MST_CHANNEL_PC_YN eq 'Y'}" >PC</c:if>
														<c:if test="${rowlistY.PLN_MST_CHANNEL_MOBILE_YN eq 'Y'}" >MOBILE</c:if>
													</c:otherwise>
												</c:choose>
												]
										   </td>
										   <td><c:out value="${rowlistY.PLN_MST_TITLE }"/></td>	       	 
										   </c:forEach>								   
										</c:when>
										</c:choose>
		                    		</td>
		                        </tr>
	                        </c:when>
							</c:choose>
							
							
	                    </tbody>
                	</table><!-- // table -->
                	
                	<h3 class="title"><span>쿠폰적용제외상품</span></h3>
	                <p>
	                   <span><i class="require"><em>필수입력</em></i></span> 표시된 항목은 필수 입력 사항입니다.
	                </p>
                	
                	<table cellspacing="0" class="table-row table-a"><!-- table -->
	                    <colgroup>
	                        <col style="width: 15%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                    	<tr>
	                    		<th><label class="label"><span>상품<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                    		<input type="hidden" name="CPN_MST_ETC_GBN" id="CPN_MST_ETC_GBN" value="<c:out value="${row.CPN_MST_ETC_GBN }"/>"/>			                            
		                            <c:choose>
										<c:when test="${row.CPN_MST_ETC_GBN eq 'A'}"><span>상품</span>&nbsp;
										</c:when>	
										<c:when test="${row.CPN_MST_ETC_GBN eq 'B'}"><span>카테고리</span>&nbsp;
										</c:when>	
										<c:when test="${row.CPN_MST_ETC_GBN eq 'C'}"><span>브랜드</span>&nbsp;
										</c:when>	
										<c:when test="${row.CPN_MST_ETC_GBN eq 'D'}"><span>협력업체</span>&nbsp;
										</c:when>	
										<c:otherwise>
											<span>-</span>
										</c:otherwise>
									</c:choose>    
	                    		</td>
	                        </tr>
	                        
	                        <!-- 상품 -->
	                        <c:choose>
							<c:when test="${row.CPN_MST_TGT_GBN eq 'A'}">		  
		                        <tr>
		                    		<th><label class="label"><span>대상<i class="require"><em>필수입력</em></i></span></label></th>
		                    		<td>
			                    		<table class="table-row table-a" id="tableProduct">
											<colgroup>
												<col style="width: 160px" />
												<col style="width: auto;"/>
												<col style="width: 100px"/>
												<col style="width: 100px"/>
												<col style="width: 80px"/>
												<col style="width: 80px"/>
											</colgroup>
											<thead>
												<tr>
													<th>상품코드</th>
													<th>상품명</th>
													<th>정상가</th>
													<th>판매가</th>
													<th>판매상태</th>
													<th>쇼핑채널</th>
												</tr>
											</thead>
											
											<tbody id="list-field">
					                            <c:choose>
					                                <c:when test="${not empty listN }">
					                                    
					                                    <c:forEach var="rowlistN" items="${listN }" varStatus="i">
					                                        <tr>
								                                <td><c:out value="${rowlistN.PRD_MST_CD }"/></td>		                               		
								                                <td><c:out value="${rowlistN.PRD_MST_NM }"/></td>	
								                                <td><c:out value="${rowlistN.PRD_MST_PRC }"/></td>		          
								                                <td><c:out value="${rowlistN.PRD_MST_SCH_PRC }"/></td>		          
								                                <td>
								                                	<c:if test="${rowlistN.PRD_MST_DPL_STATE eq 'Y' }"><span class="history-condition success"><i class="fonti um-circle"></i>판매중</span></c:if>
																	<c:if test="${rowlistN.PRD_MST_DPL_STATE eq 'N' }"><span class="history-condition info"><i class="fonti um-circle"></i>미판매</span></c:if> 
					                                            </td>        
								                                <td>
								                                	<c:choose>
																		<c:when test="${rowlistN.PRD_MST_CNL_MB_YN eq 'Y' and rowlistN.PRD_MST_CNL_PC_YN eq 'Y'}">PC+MOBILE
																		</c:when>
																		<c:otherwise>
																			<c:if test="${rowlistN.PRD_MST_CNL_PC_YN eq 'Y'}" >PC</c:if>
																			<c:if test="${rowlistN.PRD_MST_CNL_MB_YN eq 'Y'}" >MOBILE</c:if>
																		</c:otherwise>
																	</c:choose>
								                                </td>         	          
								                            </tr>
					                                    </c:forEach>
					                                </c:when>
					                                <c:otherwise>
					                                    <tr>
					                                        <td class="td_no_result">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
					                                    </tr>
					                                </c:otherwise>
					                            </c:choose>
					                        </tbody>		
										</table>
		                    		</td>
		                        </tr>
	                        </c:when>
							</c:choose>
							
							<!-- 카테고리 -->
							<c:choose>
							<c:when test="${row.CPN_MST_ETC_GBN eq 'B'}">		  
		                        <tr>
		                    		<th><label class="label"><span>대상<i class="require"><em>필수입력</em></i></span></label></th>
		                    		<td>
			                    		<table class="table-row table-a" id="tableProduct">
											<colgroup>
												<col style="width: auto;"/>
												
											</colgroup>
											<thead>
												<tr>
													<th>카테고리 경로</th>
												</tr>
											</thead>
											
											<tbody id="list-field">
					                            <c:choose>
					                                <c:when test="${not empty listN }">
					                                    
					                                    <c:forEach var="rowlistN" items="${listN }" varStatus="i">
					                                        <tr>
								                                <td><c:out value="${rowlistN.PRD_CTG_LVL_NM }"/></td>		     
								                            </tr>
					                                
					                                    </c:forEach>
					                                </c:when>
					                                <c:otherwise>
					                                    <tr>
					                                        <td class="td_no_result">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
					                                    </tr>
					                                </c:otherwise>
					                            </c:choose>
					                        </tbody>		
										</table>
		                    		</td>
		                        </tr>
	                        </c:when>
							</c:choose>
							
							<!-- 브랜드 -->
							<c:choose>
							<c:when test="${row.CPN_MST_TGT_GBN eq 'C'}">  
		                        <tr>
		                    		<th><label class="label"><span>대상<i class="require"><em>필수입력</em></i></span></label></th>
		                    		<td>
			                    		<table class="table-row table-a" id="tableBrand2">
											<colgroup>
												<col style="width: 40px;" />
												<col style="width: 160px" />
											</colgroup>
											<thead>
												<tr>													
													<th>브랜드코드</th>
													<th>브랜드명</th>
												</tr>
											</thead>
											<tbody id="list-field">
					                            <c:choose>
					                                <c:when test="${not empty listY }">
					                                    <c:forEach var="rowlistY" items="${listY }" varStatus="i">
					                                        <tr>
								                                <td><c:out value="${rowlistY.BND_MST_IDX }"/></td>		                               		
								                                <td><c:out value="${rowlistY.BND_MST_BRAND_NM }"/></td>	
								                            </tr>					                                
					                                    </c:forEach>
					                                </c:when>
					                                <c:otherwise>
					                                    <tr>
					                                        <td class="td_no_result">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
					                                    </tr>
					                                </c:otherwise>
					                            </c:choose>
					                        </tbody>		
										</table>
		                    		</td>
		                        </tr>
	                        </c:when>
							</c:choose>
							
							<!-- 협력업체 -->
							<c:choose>
							<c:when test="${row.CPN_MST_TGT_GBN eq 'D'}"> 
		                        <tr>
		                    		<th><label class="label"><span>대상<i class="require"><em>필수입력</em></i></span></label></th>
		                    		<td>
			                    		<table class="table-row table-a" id="tableBrand2">
											<colgroup>
												<col style="width: 50px;" />
												<col style="width: auto;"/>
											</colgroup>
											<thead>
												<tr>													
													<th>업체코드</th>
													<th>업체명</th>
												</tr>
											</thead>
											<tbody id="list-field">
					                            <c:choose>
					                                <c:when test="${not empty listN }">
					                                    
					                                    <c:forEach var="rowlistN" items="${listN }" varStatus="i">
					                                        <tr>
								                                <td><c:out value="${rowlistN.VDR_MST_ERP_ID }"/></td>		                               		
								                                <td><c:out value="${rowlistN.VDR_MST_NM }"/></td>	
								                            </tr>					                                
					                                    </c:forEach>
					                                </c:when>
					                                <c:otherwise>
					                                    <tr>
					                                        <td class="td_no_result">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
					                                    </tr>
					                                </c:otherwise>
					                            </c:choose>
					                        </tbody>		
										</table>
		                    		</td>
		                        </tr>
	                        </c:when>
							</c:choose>
							
							
	                    </tbody>
                	</table><!-- // table -->
                	
                	
                </form>
               	<div class="section-button"><!-- section-button -->
                    <div class="wrap text-center">
                        <a href="#none" id="goRegist" class="button large primary"><span>저장</span></a>
                        <a href="#none" id="goList" class="button large"><span>목록</span></a>
                    </div>
                </div><!-- // section-button --> 

            </div>

        </div><!-- // contents -->

    </div><!-- // wrapper -->  

    <div id="quickmenu" class="aside right"><!-- quickmenu-->
        <%@ include file="/WEB-INF/jsp/am/include/quick.jsp" %>
    </div><!-- // quickmenu -->

</div><!-- // container -->

<div id="footer">
    <%@ include file="/WEB-INF/jsp/am/include/footer.jsp" %>
</div>

<%@ include file="/WEB-INF/jsp/am/include/script.jsp" %>
<script>
$(function(){
	
	// 수정 이벤트
    $(document).on("click", "#goRegist", function() {
    	
    	if (confirm("저장 하시겠습니까?")) 
  		{
            $("#frm").attr({"action" : "<c:out value="${serverDomain}" />/am/prm/cpnMng/couponFormModify.do", "target" : "_self", "method" : "post"}).submit();
        }	
      
    });
	  
    // 목록 이벤트
    $(document).on("click", "#goList", function () 
    {
        var $frm = $("#searchForm"); 
        $frm.attr({"action":"<c:out value="${serverDomain}" />/am/prm/cpnMng/couponList.do", "target":"_self", "method":"post"}).submit();
    });
});
//-->
</script>

</body>
</html>
