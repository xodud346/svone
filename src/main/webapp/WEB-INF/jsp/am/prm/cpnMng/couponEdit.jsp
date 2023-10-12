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
                    <input type="hidden" name="searchGb" value="Y" />  
                    <input type="hidden" name="cPage" value="<c:out value="${commandMap.cPage }"/>"/>  
					<input type="hidden" name="pageSize" value="<c:out value="${commandMap.pageSize }"/>"/>
					<input type="hidden" name="searchCnt" value="100"/>
                </form>
                
                <form id="frm" name="frm" enctype="multipart/form-data"> 
                	<input type="hidden" name="CPN_MST_ISU_ED_DT_ON" id="CPN_MST_ISU_ED_DT_ON" value=""/>
                    <input type="hidden" name="search_1" id="search_1" value=""/>
                    <input type="hidden" name="search_2" id="search_2" value=""/>
                    <input type="hidden" name="searchBnd_1" id="searchBnd_1" value=""/>
                    <input type="hidden" name="searchBnd_2" id="searchBnd_2" value=""/>
                    <input type="hidden" name="searchGb" value="Y" />
                    <input type="hidden" name="CPN_MST_IDX" value="${detail.CPN_MST_IDX}" />
                    
			  		<table cellspacing="0" class="table-row table-a"><!-- table -->
	                    <colgroup>
	                        <col style="width: 10%;" />
	                        <col style="width: 40%;" />
	                        <col style="width: 10%;" />
	                        <col style="width: 40%;" />
	                    </colgroup>
	                    <tbody>
	                        <tr>
	                    		<th><label class="label"><span>쿠폰종류<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td colspan="3">
	                    			<input type="radio" name="CPN_MST_GBN" id="cT1" class="radio" value="A" disabled="disabled" <c:if test="${detail.CPN_MST_GBN eq 'A' }">checked="checked"</c:if>/>
		                            <label for="cT1">일반</label>		
		                            <input type="radio" name="CPN_MST_GBN" id="cT6" class="radio" value="F" disabled="disabled" <c:if test="${detail.CPN_MST_GBN eq 'F' }">checked="checked"</c:if>/>
		                            <label for="cT6">배송비</label>                     
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>쿠폰명</span></label></th>
	                    		<td colspan="3">
	                    			<input type="text" name="CPN_MST_TITLE" id="CPN_MST_TITLE" class="text xlarge" maxlength="100" value="${detail.CPN_MST_TITLE}"/>
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>쿠폰설명</span></label></th>
	                    		<td colspan="3">
	                    			<input type="text" name="CPN_MST_ADM_TXT" id="CPN_MST_ADM_TXT" class="text xlarge" maxlength="100" value="${detail.CPN_MST_ADM_TXT}"/>
	                    		</td>
	                        </tr>
	                        <tr id="trTalGbn" <c:if test="${detail.CPN_MST_GBN eq 'F' }">style="display:none;"</c:if>>
	                    		<th><label class="label"><span>할인 구분<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                            <input type="radio" name="CPN_MST_SAL_GBN" id="cS1" class="radio" value="A" disabled="disabled" <c:if test="${detail.CPN_MST_SAL_GBN eq 'A' }">checked="checked"</c:if>/>
		                            <label for="cS1">정율 할인</label>		                           
		                            <input type="radio" name="CPN_MST_SAL_GBN" id="cS2" class="radio" value="B" disabled="disabled" <c:if test="${detail.CPN_MST_SAL_GBN eq 'B' }">checked="checked"</c:if>/>
		                            <label for="cS2">정액 할인</label>
	                    		</td>
	                    		<th><label class="label"><span>할인 금액/율<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                           	<input type="text" id="CPN_MST_SAL_PRC" name="CPN_MST_SAL_PRC" class="text number" maxlength="10" style="width: 110px;" value="${detail.CPN_MST_SAL_PRC}"/>
                                    <span>(%/원)</span>	
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>최소 구매금액<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                            <input type="text" id="CPN_MST_SML_PRC" name="CPN_MST_SML_PRC" class="text number" maxlength="10" style="width: 110px;" value="${detail.CPN_MST_SML_PRC}"/>
                                    <span>원 이상 구매 시 사용가능</span>
	                    		</td>
	                    		<th><label class="label"><span>최대 할인금액</span></label></th>
	                    		<td>
		                            <input type="text" id="CPN_MST_MXM_PRC" name="CPN_MST_MXM_PRC" class="text number" maxlength="10" style="width: 110px;" value="${detail.CPN_MST_MXM_PRC}" <c:if test="${detail.CPN_MST_SAL_GBN eq 'B' || detail.CPN_MST_GBN eq 'F'}">disabled="disabled"</c:if>/>
			                        <span id="CPN_MST_MXM_PRC_TX2" name="CPN_MST_MXM_PRC_TX2">원</span>	
	                    		</td>
	                        </tr>
	                        <tr>
	                            <th><label class="label"><span>발행기간<i class="require"><em>필수입력</em></i></span></label></th>
	                            <td colspan="3">
	                            	<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
	                               	<input type="text" class="text" id="CPN_MST_ISU_ST_DT" name="CPN_MST_ISU_ST_DT" value="<ui:formatDate value="${detail.CPN_MST_ISU_ST_DT}" pattern="yyyy-MM-dd"/>" readonly="readonly" data-target-end="#CPN_MST_ISU_ED_DT"/>
			                         <span class="auctionEventTime">
		                             ~
	                          		</span>    
		                          		  
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text" id="CPN_MST_ISU_ED_DT" name="CPN_MST_ISU_ED_DT" value="<ui:formatDate value="${detail.CPN_MST_ISU_ED_DT}" pattern="yyyy-MM-dd"/>"  readonly="readonly" data-target-start="#CPN_MST_ISU_ST_DT"/>
		                            
		                            <span id="offLine2">
			                            <a href="javascript:fnDateSet('CPN_MST_ISU_ST_DT', 'CPN_MST_ISU_ED_DT', 0, 0, 0, 0, 0, 0,  '-');" class="button button-a xsmall"><span>오늘</span></a>
                                		<a href="javascript:fnDateSet('CPN_MST_ISU_ST_DT', 'CPN_MST_ISU_ED_DT', 0, 0, 0, 0, 0, 7,  '-');" class="button button-a xsmall"><span>일주일</span></a>
                                		<a href="javascript:fnDateSet('CPN_MST_ISU_ST_DT', 'CPN_MST_ISU_ED_DT', 0, 0, 0, 0, 0, 15,  '-');" class="button button-a xsmall"><span>15일</span></a>
                                		<a href="javascript:fnDateSet('CPN_MST_ISU_ST_DT', 'CPN_MST_ISU_ED_DT', 0, 0, 0, 0, 1, 0,  '-');" class="button button-a xsmall"><span>한달</span></a>
                                		<a href="javascript:fnDateSet('CPN_MST_ISU_ST_DT', 'CPN_MST_ISU_ED_DT', 0, 0, 0, 0, 2, 0,  '-');" class="button button-a xsmall"><span>두달</span></a>
		                            </span>
		                            <input type="checkbox" name="CPN_MST_ISU_MU" id="CPN_MST_ISU_MU" class="checkbox"/>
		                        	<label for="CPN_MST_ISU_MU"><span class="auctionEventTime">종료일 없음</span></label>
	                            </td>
	                        </tr>
	                        
	                        <tr>
	                    		<th><label class="label"><span>발행수량<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
	                    			<input type="number" id="CPN_MST_ISU_CNT" name="CPN_MST_ISU_CNT" class="text short number" maxlength="10" value="${detail.CPN_MST_ISU_CNT}" <c:if test="${detail.CPN_MST_LMT_YN eq 'Y' }">disabled="disabled"</c:if>/>
		                            <input type="checkbox" name="CPN_MST_LMT_YN_CHK" id="CPN_MST_LMT_YN_CHK" <c:if test="${detail.CPN_MST_LMT_YN eq 'Y' }">checked="checked"</c:if>/>
		                            <label for="CPN_MST_LMT_YN_CHK"> 무제한 발행</label>
		                            <input type="hidden" name="CPN_MST_LMT_YN" id="CPN_MST_LMT_YN"/>
	                    		</td>
	                    		<th><label class="label"><span>발행방식<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                            <input type="radio" name="CPN_MST_ISU_GBN" id="cG3" class="radio" value="B" disabled="disabled" <c:if test="${detail.CPN_MST_ISU_GBN eq 'B' }">checked="checked"</c:if>/>
		                            <label for="cG3">대상자 지정 발행</label>
		                            <input type="radio" name="CPN_MST_ISU_GBN" id="cG4" class="radio" value="D" disabled="disabled" <c:if test="${detail.CPN_MST_ISU_GBN eq 'D' }">checked="checked"</c:if>/>
		                            <label for="cG4">회원가입</label>
		                            <input type="radio" name="CPN_MST_ISU_GBN" id="cG5" class="radio" value="C" disabled="disabled" <c:if test="${detail.CPN_MST_ISU_GBN eq 'C' }">checked="checked"</c:if>/>
		                            <label for="cG5">다운로드발급</label>	
		                            	
	                    		</td>
	                        </tr>
	                        
	                        <tr id="expsId" <c:if test="${detail.CPN_MST_ISU_GBN ne 'C' }">style="display:none;"</c:if>>
	                    		<th><label class="label"><span>쿠폰함 노출 여부</span></label></th>
	                    		<td colspan="3">
	                    			<input type="radio" name="CPN_MST_EXPS_YN" id="expsA" class="radio" value="Y" <c:if test="${detail.CPN_MST_EXPS_YN eq 'Y' }">checked="checked"</c:if>/>
		                            <label for="expsA">노출</label>
		                            <input type="radio" name="CPN_MST_EXPS_YN" id="expsB" class="radio" value="N" <c:if test="${detail.CPN_MST_EXPS_YN eq 'N' }">checked="checked"</c:if>/>
		                            <label for="expsB">비 노출</label>
	                    		</td>
	                        </tr>
	                        
	                        <tr>
	                    		<th><label class="label"><span>사용기간/일수<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td colspan="3">
	                    			<input type="radio" name="CPN_MST_ISU_DAY_GBN" id="cmidgA" class="radio" value="A" <c:if test="${detail.CPN_MST_ISU_DAY_GBN eq 'A' }">checked="checked"</c:if>/>
		                            <label for="cmidgA">고정기간</label>
		                            
		                            <span class="auctionEventTime">시작일 :</span>      
		                            <a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text" id="CPN_MST_USE_ST_DT" name="CPN_MST_USE_ST_DT"  readonly="readonly" value="<ui:formatDate value="${detail.CPN_MST_USE_ST_DT}" pattern="yyyy-MM-dd"/>" data-target-end="#CPN_MST_USE_ED_DT"/>
		                             ~
	                          		<span>종료일 : </span>
	                          		<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text" id="CPN_MST_USE_ED_DT" name="CPN_MST_USE_ED_DT"  readonly="readonly" value="<ui:formatDate value="${detail.CPN_MST_USE_ED_DT}" pattern="yyyy-MM-dd"/>" data-target-start="#CPN_MST_USE_ST_DT"/>      
	                          		<br/><br/>
	                          		<input type="radio" name=CPN_MST_ISU_DAY_GBN id="cmidgB" class="radio" value="B" <c:if test="${detail.CPN_MST_ISU_DAY_GBN eq 'B' }">checked="checked"</c:if>/>
		                            <span class="auctionEventTime"><label for="cmidgB">사용가능일수(<span id="CPN_MST_USE_DAY_NM">발행</span>일로부터 <input type="text" id="CPN_MST_USE_DAY" name="CPN_MST_USE_DAY" class="text short number" value="${detail.CPN_MST_USE_DAY}" maxlength="10" <c:if test="${detail.CPN_MST_ISU_DAY_GBN ne 'B' }">disabled="disabled"</c:if>/> 일)</label> (고객이 보유한 시점부터 사용가능)</span>
		                            <br/><br/>
		                            <input type="radio" name=CPN_MST_ISU_DAY_GBN id="cmidgM" class="radio" value="M" <c:if test="${detail.CPN_MST_ISU_DAY_GBN eq 'M' }">checked="checked"</c:if>/>
		                            <label for="cmidgM">발행 당월말까지 사용</label> 
	                    		</td>
	                        </tr>
	                        
	                        <tr>
	                    		<th><label class="label"><span>상태<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td colspan="3">
	                    			<input type="radio" name="CPN_MST_YN" id="cmyA" class="radio" value="Y" <c:if test="${detail.CPN_MST_YN eq 'Y' }">checked="checked"</c:if>/>
		                            <label for="cmyA">활성화</label>
		                            <input type="radio" name="CPN_MST_YN" id="cmyB" class="radio" value="N" <c:if test="${detail.CPN_MST_YN eq 'N' }">checked="checked"</c:if>/>
		                            <label for="cmyB">비 활성화</label>
	                    		</td>
	                        </tr>
	                    </tbody>
                	</table><!-- // table -->
                	
                	<!-- START 개별 발행 대상 -->
                	<span id="rowUnit" <c:if test="${detail.CPN_MST_ISU_GBN ne 'B'}">style="display:none;"</c:if>>
	                	<h3 class="title"><span>개별 발행 대상</span></h3>
		                
		                <div class="grid section-button-list"><!-- 목록 상단 버튼 -->
		                    <div class="col-1-2 text-left">
		                        <span class="pages ml0 pt10">(총 <strong id="memberCnt">${fn:length(listM)}</strong>건)</span>
		                    </div>
		                    <div class="col-1-2 text-right">
		                        <a href="javascript:;" id="goMemeberPopup" class="button small primary js-modal"><span>회원조회</span></a>
		                        <!-- <a href="#!" class="button small"><span>일괄등록</span></a> -->
		                        <a href="#!" class="button info small" id="memberDelete"><span>선택삭제</span></a>
		                    </div>
		                </div>
		                
		                <div class="tableOut" style=" overflow: auto;max-height: 600px;">
		                    <table cellspacing="0" class="table-col table-b" id="tableMember" ><!-- table -->
		                    <thead>
		                        <tr>
		                            <th><input type="checkbox" class="checkbox checkAll_M"></th>
		                            <th><span>고객 유형</span></th>
		                            <th><span>회원ID</span></th>
		                            <th><span>회원명</span></th>
		                            <th><span>로그인 ID</span></th>
		                            <th><span>사업장 ID</span></th>
		                            <th><span>사업장명</span></th>
		                            <th><span>운영단위 ID</span></th>
		                            <th><span>운영단위명</span></th>
		                            <th><span>부서ID</span></th>
		                            <th><span>부서명</span></th>
		                        </tr>
		                    </thead>
		                    <tbody id="applyMemberList">
		                    	<c:choose>
                                	<c:when test="${fn:length(listM) > 0}">
                                		<c:forEach var="row" items="${listM }" varStatus="i">
	                                		<tr>
												<td>
													<input type="checkbox" class="checkbox checkMember" name="MEM_ID_CHKECs" value="${row.memId}" data-id="${row.cpnMemIdx}"/>
												</td>
												<td>${row.memSprNm}</td>
												<td>${row.memId}</td>
												<td>${row.memNm}</td>
												<td>${row.loginId}</td>
												<td>${row.bzplcId}</td>
												<td>${row.bzplcNm}</td>
												<td>${row.oprUntId}</td>
												<td>${row.oprUntNm}</td>
												<td>${row.deptId}</td>
												<td>${row.deptNm}</td>
											</tr>
                                		</c:forEach>
                                	</c:when>
                                	<c:otherwise>
                                		 <tr id="memberNodata"><!-- row -->
				                            <td colspan="11">발행 대상이 없습니다.</td>
				                        </tr>
                                	</c:otherwise>
                               	</c:choose>
		                    </tbody>
		                    </table><!-- // table -->
		                </div>
                	</span>
                	
                	<!-- End 개별 발행 대상 -->
                	
                	<!-- Start 적용상품 -->
                	<h3 class="title"><span>적용상품</span></h3>
                	<table cellspacing="0" class="table-row table-a"><!-- table -->
	                    <colgroup>
	                        <col style="width: 15%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                        <tr>
	                    		<th><label class="label"><span>상품<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
	                    			<input type="radio" name="CPN_MST_TGT_GBN" id="cmtg2" class="radio" value="B" disabled="disabled" <c:if test="${detail.CPN_MST_TGT_GBN eq 'B' }">checked="checked"</c:if>/>
		                            <label for="cmtg2">전체상품</label>
		                            
	                    			<input type="radio" name="CPN_MST_TGT_GBN" id="cmtg1" class="radio" value="A" disabled="disabled" <c:if test="${detail.CPN_MST_TGT_GBN eq 'A' }">checked="checked"</c:if>/>
		                            <label for="cmtg1">개별상품</label>	
		                            
		                            <input type="radio" name="CPN_MST_TGT_GBN" id="cmtg5" class="radio" value="E" disabled="disabled" <c:if test="${detail.CPN_MST_TGT_GBN eq 'E' }">checked="checked"</c:if>/>
		                            <label for="cmtg5">카테고리</label>	                           
	                    		</td>
	                        </tr>
	                        <tr id="CPN_MST_PLN_TEX" <c:if test="${detail.CPN_MST_TGT_GBN eq 'B' }">style="display:none;"</c:if>>
	                    		<th><label class="label"><span>대상<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td id="divProduct" <c:if test="${detail.CPN_MST_TGT_GBN ne 'A' }">style="display:none"</c:if>>
	                    		  	<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
					                    <div class="text-right">
					                        <a href="#none" id="goProductAdd" class="button small primary" title="새 창 으로 열립니다."><span>상품검색</span></a>
					                       	<a href="#none" id="goProductDelete" class="button small"><span>선택삭제</span></a>
					                    </div>
                					</div><!-- // 목록 상단 버튼 -->
									<div class="tableOut" style=" overflow: auto;max-height: 600px;">
	                    			<table class="table-col table-b" id="tableProduct">
										<colgroup>
											<col style="width: 40px;" />
											<col style="width: 160px" />
											<col style="width: auto;"/>
										</colgroup>
										<thead>
											<tr>
												<th><input type="checkbox" class="checkbox checkAll" /></th>
												<th>상품코드</th>
												<th>상품명</th>
											</tr>
										</thead>
										<tbody id="applyProductList">
											<c:choose>
			                                	<c:when test="${fn:length(listT) > 0  && detail.CPN_MST_TGT_GBN eq 'A' }">
			                                		<c:forEach var="row" items="${listT}" varStatus="i">
				                                		<tr>
															<td><input type="checkbox" class="checkbox checkRow" name="PRD_MST_CDs" value="${row.prdId}" data-id="${row.cpnTgtIdx }"/></td>
															<td>${row.prdId}</a></td>
															<td>
																${row.prdNm}
															</td>
														</tr>
			                                		</c:forEach>
			                                	</c:when>
			                                	<c:otherwise>
			                                		<tr id="productNodata"><!-- row -->
					                                    <td colspan="7">상품을 검색해 주세요.</td>
					                                </tr>
			                                	</c:otherwise>
			                               	</c:choose>
										</tbody>
									</table>
									</div>
	                    		</td>
	                    		<td id="divCategoryTgt" <c:if test="${detail.CPN_MST_TGT_GBN ne 'E' }">style="display:none"</c:if>>
	                    			<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
					                    <div class="text-right">
					                       	<a href="javascript:registPopup('${Code.CATEGORY_TYPE_PC}');" id="goCategoryPopup" class="button small primary js-modal" title="새 창 으로 열립니다."><span>카테고리 추가</span></a>
											<a href="#none" id="goCategoryDelete" class="button small"><span>선택삭제</span></a>
											<input type="hidden" id="categoryTypePc" name="categoryTypePc" value="<c:out value="${Code.CATEGORY_TYPE_PC}" />">
					                    </div>
	               					</div><!-- // 목록 상단 버튼 -->
									<div class="tableOut" style=" overflow: auto;max-height: 600px;">
										<table class="table-col table-b" id="tableCategory">
											<colgroup>
												<col style="width: 40px;" />
												<col style="width: 80px;" />
												<col style="width: auto;" />
											</colgroup>
											<thead>
												<tr>
													<th><input type="checkbox" class="checkbox checkAll_${Code.CATEGORY_TYPE_PC}" /></th>
													<th>카테고리 ID</th>
													<th>카테고리 구분</th>
												</tr>
											</thead>
											<tbody id="applyCategoryList_category">
												<c:choose>
				                                	<c:when test="${fn:length(listT) > 0 && detail.CPN_MST_TGT_GBN eq 'E' }">
				                                		<c:forEach var="row" items="${listT}" varStatus="i">
					                                		<tr>
																<td><input type="checkbox" class="checkbox checkRow_category" name="PRD_CTG_IDXs_category" value="${row.prdClsCd}" data-id="${row.cpnTgtIdx }"/></td>
																<td class="left">${row.prdClsCd}</td>
																<td class="left">${row.prdLvlNm}</td>
															</tr>
				                                		</c:forEach>
				                                	</c:when>
				                                	<c:otherwise>
				                                		 <tr id="categoryNodata"><!-- row -->
															<td colspan="3">카테고리를 추가해 주세요.</td>
					       	    	                    </tr>
				                                	</c:otherwise>
				                               	</c:choose>
											</tbody>
										</table>
									</div>
	                    		</td>
	                        </tr>
	                    </tbody>
                	</table><!-- // table -->
                	<!-- End 적용상품 -->
                	
                	<!-- Start 적용제외상품 -->
                	<h3 class="title"><span>적용제외상품</span></h3>
                	<table cellspacing="0" class="table-row table-a"><!-- table -->
	                    <colgroup>
	                        <col style="width: 15%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                        <tr>
	                    		<th><label class="label"><span>상품</span></label></th>
	                    		<td>
	                    			<input type="radio" name="CPN_MST_ETC_GBN" id="cmeg5" class="radio" value="F" disabled="disabled" <c:if test="${detail.CPN_MST_ETC_GBN eq 'F' }">checked="checked"</c:if> />
		                            <label for="cmeg5">제외없음</label>
	                    			<input type="radio" name="CPN_MST_ETC_GBN" id="cmeg1" class="radio" value="A" disabled="disabled" <c:if test="${detail.CPN_MST_ETC_GBN eq 'A' }">checked="checked"</c:if> />
		                            <label for="cmeg1">개별상품</label>		                           
		                            <input type="radio" name="CPN_MST_ETC_GBN" id="cmeg2" class="radio" value="B" disabled="disabled" <c:if test="${detail.CPN_MST_ETC_GBN eq 'B' }">checked="checked"</c:if> />
		                            <label for="cmeg2">카테고리</label>
	                    		</td>
	                    	</tr> 
	                    	<tr id="CPN_MST_PLN_TEX_2" <c:if test="${detail.CPN_MST_ETC_GBN eq 'F' }">style="display:none;"</c:if> >
	                    		<th><label class="label"><span>대상<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td id="divCategory" <c:if test="${detail.CPN_MST_ETC_GBN ne 'B' }">style="display:none;"</c:if>>
	                    			<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
					                    <div class="text-right">
					                       	<a href="javascript:registPopup('${Code.CATEGORY_TYPE_PC}');" id="goCategoryPopup2" class="button small primary js-modal" title="새 창 으로 열립니다."><span>카테고리 추가</span></a>
											<a href="#none" id="goCategoryDelete2" class="button small"><span>선택삭제</span></a>
											<input type="hidden" id="categoryTypePc" name="categoryTypePc" value="<c:out value="${Code.CATEGORY_TYPE_PC}" />">
					                    </div>
	               					</div><!-- // 목록 상단 버튼 -->
									<div class="tableOut" style=" overflow: auto;max-height: 600px;">
										<table class="table-col table-b" id="tableCategory">
											<colgroup>
												<col style="width: 40px;" />
												<col style="width: 80px;" />
												<col style="width: auto;" />
											</colgroup>
											<thead>
												<tr>
													<th><input type="checkbox" class="checkbox checkAll2_${Code.CATEGORY_TYPE_PC}" /></th>
													<th>카테고리 ID</th>
													<th>카테고리 구분</th>
												</tr>
											</thead>
											<tbody id="applyCategoryList2_category">
												<c:choose>
				                                	<c:when test="${fn:length(listE) > 0  && detail.CPN_MST_ETC_GBN eq 'B' }">
				                                		<c:forEach var="row" items="${listE}" varStatus="i">
				                                			<tr>
																<td><input type="checkbox" class="checkbox checkRow2_category" name="PRD_CTG_IDXs2_category" value="${row.prdClsCd}" data-id="${row.cpnEtcIdx }"/></td>
																<td class="left">${row.prdClsCd}</td>
																<td class="left">${row.prdLvlNm}</td>
															</tr>
				                                		</c:forEach>
				                                	</c:when>
				                                	<c:otherwise>
				                                		<tr id="categoryNodata2"><!-- row -->
															<td colspan="3">카테고리를 추가해 주세요.</td>
					       	    	                    </tr>
				                                	</c:otherwise>
				                               	</c:choose>
				                            	
											</tbody>
										</table>
									</div>
	                    		</td>
	                    		<td id="divProduct2" <c:if test="${detail.CPN_MST_ETC_GBN ne 'A' }">style="display:none;"</c:if>>
	                    			<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
					                    <div class="text-right">
					                       	<a href="#none" id="goProductAdd2" class="button small primary js-modal" title="새 창 으로 열립니다."><span>상품검색</span></a>
											<a href="#none" id="goProductDelete2" class="button small"><span>선택삭제</span></a>
					                    </div>
	               					</div><!-- // 목록 상단 버튼 -->
									<div class="tableOut" style=" overflow: auto;max-height: 600px;">
		                    			<table class="table-col table-b" id="tableProduct2">
											<colgroup>
												<col style="width: 40px;" />
												<col style="width: 160px" />
												<col style="width: auto;"/>
											</colgroup>
											<thead>
												<tr>
													<th><input type="checkbox" class="checkbox checkAll2" /></th>
													<th>상품코드</th>
													<th>상품명</th>
												</tr>
											</thead>
											<tbody id="applyProductList2">
												<c:choose>
				                                	<c:when test="${fn:length(listE) > 0 && detail.CPN_MST_ETC_GBN eq 'A' }">
				                                		<c:forEach var="row" items="${listE}" varStatus="i">
					                                		<tr>
																<td><input type="checkbox" class="checkbox checkRow2" name="PRD_MST_CDs2" value="${row.prdId}" data-id="${row.cpnEtcIdx }"/></td>
																<td>${row.prdId}</td>
																<td>
																	${row.prdNm}
																</td>
															</tr>
				                                		</c:forEach>
				                                	</c:when>
				                                	<c:otherwise>
				                                		<tr id="productNodata2"><!-- row -->
						                                    <td colspan="7">상품을 검색해 주세요.</td>
						                                </tr>
				                                	</c:otherwise>
				                               	</c:choose>
											</tbody>
										</table>
									</div>
	                    		</td>
	                        </tr>
	                    </tbody>
	               	</table><!-- // table -->
	               	<!-- End 적용제외상품 -->
                	
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
<script src="<c:out value="${serverDomain}" />/am/js/vendor/jquery.tmpl.min.js"></script>
<!-- template -->
<script id="memberTemplate" type="text/x-jquery-tmpl">
<tr>
	<td>
		<input type="checkbox" class="checkbox checkMember" name="MEM_ID_CHKECs" value="\${memId}" data-state="new"/>
		<input type="hidden" name="MEM_IDs" value="\${memId}"/>
	</td>
	<td>\${memSprNm}</td>
	<td>\${memId}</td>
	<td>\${memNm}</td>
	<td>\${loginId}</td>
	<td>\${bzplcId}</td>
	<td>\${bzplcNm}</td>
	<td>\${oprUntId}</td>
	<td>\${oprUntNm}</td>
	<td>\${deptId}</td>
	<td>\${deptNm}</td>
</tr>
</script>
<script id="productTemplate" type="text/x-jquery-tmpl">
<tr>
	<td><input type="checkbox" class="checkbox checkRow" name="PRD_MST_CDs" value="\${prdId}" data-state="new"/></td>
	<td>\${prdId}<input type="hidden" name="APPLY_IDXs" value="\${prdId}"/></td>
	<td>
		\${prdNm}
	</td>
</tr>
</script>

<script id="productTemplate2" type="text/x-jquery-tmpl">
<tr>
	<td><input type="checkbox" class="checkbox checkRow2" name="PRD_MST_CDs2" value="\${prdId}" data-state="new"/></td>
	<td>\${prdId}<input type="hidden" name="APPLY_IDXs2" value="\${prdId}"/></td>
	<td>
		\${prdNm}
	</td>
</tr>
</script>

<script id="categoryTemplate" type="text/x-jquery-tmpl">
<tr>
	<td><input type="checkbox" class="checkbox checkRow_category" name="PRD_CTG_IDXs_category" value="\${prdClsCd}" data-state="new"/></td>
	<td class="left">\${prdClsCd}</td>
	<td class="left">\${prdLvlNm}<input type="hidden" name="PRD_CTG_IDXs" value="\${prdClsCd}"/></td>
</tr>
</script>

<script id="categoryTemplate2" type="text/x-jquery-tmpl">
<tr>
	<td><input type="checkbox" class="checkbox checkRow2_category" name="PRD_CTG_IDXs2_category" value="\${prdClsCd}" data-state="new"/></td>
	<td class="left">\${prdClsCd}</td>
	<td class="left">\${prdLvlNm}<input type="hidden" name="PRD_CTG_IDXs" value="\${prdClsCd}"/></td>
</tr>
</script>


<script>


$(function(){
	
	//체크박스 전체 선택
  	$.checkBoxSelect("checkAll_${Code.CATEGORY_TYPE_PC}", "checkRow_category");
  	$.checkBoxSelect("checkAll2_${Code.CATEGORY_TYPE_PC}", "checkRow2_category");
    $.checkBoxSelect("checkAll", "checkRow");
    $.checkBoxSelect("checkAll_M", "checkMember");
    $.checkBoxSelect("checkAll2", "checkRow2");
	
	
	$(document).on("click", "input:radio[name=CPN_MST_GBN]", function(){
			
		//배송비일경우
		if($(":radio[name=CPN_MST_GBN]:checked").val() == "F"){
			$("#trTalGbn").hide();
			
			$("#CPN_MST_MXM_PRC_TX2").hide();
			$("#CPN_MST_MXM_PRC").hide();
			$("#CPN_MST_SAL_PRC").val('');
			$("#CPN_MST_MXM_PRC").val('');
		}else{
			$("#trTalGbn").show();
			
		 	$("#CPN_MST_MXM_PRC_TX2").show();
		 	$("#CPN_MST_MXM_PRC").show();
		}
    });
	
	$(document).on("click", "input:radio[name=CPN_MST_ISU_GBN]", function(){
			
		//대상자 지정일경우
		if($(":radio[name=CPN_MST_ISU_GBN]:checked").val() == "B"){
			//개별대상 발행 
			$("#rowUnit").show();
			//쿠폰함 노출여부			
			$("#expsId").hide();
		}else if($(":radio[name=CPN_MST_ISU_GBN]:checked").val() == "C"){
			$("#rowUnit").hide();
			$("#expsId").show();
		}else{
			$("#rowUnit").hide();			
			$("#expsId").hide();
		}
    });
	
	
	//항인구분 정율 일때 최대할인금액 사용
	$(document).on("click", "input:radio[name=CPN_MST_SAL_GBN]", function () 
	{
		if($(":radio[name=CPN_MST_SAL_GBN]:checked").val() == "A"){			
			$("#CPN_MST_MXM_PRC").prop("disabled",false);
		}else{
			$("#CPN_MST_MXM_PRC").prop("disabled",true);
			$("#CPN_MST_MXM_PRC").val('');
		}
	});

	
	// 종료일 무한
    $(document).on("click", "#CPN_MST_ISU_MU", function () 
    {
    	if($(this).is(":checked") == true) 
    	{
    		$("#CPN_MST_ISU_MU").val('Y');
    		$("#CPN_MST_ISU_ED_DT").val('9999-12-31');
    		
    		$("#CPN_MST_ISU_ED_DT_ON").val($("#CPN_MST_ISU_ED_DT").val());

    		$("#CPN_MST_ISU_ED_DT").prop("disabled",true);
    	}
    	else
    	{
    		$("#CPN_MST_ISU_ED_DT").prop("disabled",false);
    		$("#CPN_MST_ISU_MU").val('N');
    		$("#CPN_MST_ISU_ED_DT").val('');
    		//alert($("#CPN_MST_ISU_MU").val());
    	}
    });   
	
	
	//사용기간/일수 처리
	$(document).on("click", "input:radio[name=CPN_MST_ISU_DAY_GBN]", function () 
	{
		if($(":radio[name=CPN_MST_ISU_DAY_GBN]:checked").val() == "A"){			
			$("input[name='CPN_MST_USE_ST_DT']").prop("disabled",false);
			$("input[name='CPN_MST_USE_ED_DT']").prop("disabled",false);
			$("#CPN_MST_USE_DAY").val('');
			$("#CPN_MST_USE_DAY").prop("disabled",true);
		}else if($(":radio[name=CPN_MST_ISU_DAY_GBN]:checked").val() == "B"){
			$("input[name='CPN_MST_USE_ST_DT']").prop("disabled",true);
			$("input[name='CPN_MST_USE_ED_DT']").prop("disabled",true);			
			$("input[name='CPN_MST_USE_DAY']").prop("disabled",false);			
			$("#CPN_MST_USE_ST_DT").val('');
			$("#CPN_MST_USE_ED_DT").val('');
		}else
		{
			$("#CPN_MST_USE_DAY").val('');
			$("#CPN_MST_USE_DAY").prop("disabled",true);
			$("input[name='CPN_MST_USE_ST_DT']").prop("disabled",true);
			$("input[name='CPN_MST_USE_ED_DT']").prop("disabled",true);			
			$("#CPN_MST_USE_ST_DT").val('');
			$("#CPN_MST_USE_ED_DT").val('');
		}
	});
	
	// 구분 라디오 클릭 금액 비 활성화 
    $(document).on("click", "input[name=CPN_MST_TGT_GBN]", function () {
    	    	
	       if($(this).val() == "A"){
	    	   $("#CPN_MST_PLN_TEX").show();
	    	   $("#divProduct").show();
	    	   $("#divCategoryTgt").hide();
	    	   
	       }else if($(this).val() == "B"){
	    	   $("#CPN_MST_PLN_TEX").hide();
	    	   $("#divProduct").hide();
	    	   $("#divCategoryTgt").hide();
	    	   
	       }else if($(this).val() == "E"){
	    	   $("#CPN_MST_PLN_TEX").show();
	    	   $("#divProduct").hide();
	    	   $("#divCategoryTgt").show();
	    	   
	       }       
	       else{
	    	   $("#CPN_MST_PLN_TEX").hide();
	    	   $("#divProduct").hide();
	    	   $("#divCategoryTgt").hide();
	    	   
	       }
    });
	
    $(document).on("click", "input[name=CPN_MST_ETC_GBN]", function () {
        if($(this).val() == "A"){
     	   $("#CPN_MST_PLN_TEX_2").show();
     	   $("#divProduct2").show();
     	   $("#divCategory").hide();
        }else if($(this).val() == "B"){
           $("#CPN_MST_PLN_TEX_2").show();
           $("#divCategory").show();
      	   $("#divProduct2").hide();
        }else if($(this).val() == "F"){
           $("#CPN_MST_PLN_TEX_2").hide();
           $("#divCategory").hide();
      	   $("#divProduct2").hide();
        }else{
           $("#CPN_MST_PLN_TEX_2").hide();
           $("#divCategory").hide();
      	   $("#divProduct2").hide();
        }
     });
	
    /*--------------상품검색--------------------------*/ 
    fnSetProduct = function(params){
    	//alert($("#search_1").val());
    	if($("#search_1").val() == "Y"){
    		fnResultProduct1(params);
    	}
    	
    	if($("#search_2").val() == "Y"){
    		fnResultProduct2(params);
    	}
    	
    }
    
 	
 	// 상품검색 
    $(document).on("click", "#goProductAdd", function () 
    {	
    	$("#search_1").val("Y");
    	$("#search_2").val("");
    	//alert($("#search_1").val());
   		popup('',"1100","700","no","_ProductPopup");
   		$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/com/popUp/prd/productPopupForm.do", "target":"popup_ProductPopup", "method":"post"}).submit();

    });	

    //상품 중복체크
    fnDuplicationChk = function( selectObj ){
		var bReturn = true;
    	var $obj = $("#applyProductList input[name='PRD_MST_CDs']");
    	$.each($obj, function(){
    		if( selectObj == $(this).val() ){
    			bReturn = false;
    			return false;
    		}
    	});
    	return bReturn;
    };
    
    //상품팝업 상품선택시 호출되는 메소드
    fnResultProduct1 = function(params){
    	var bCheck = true;
    	var deleteObj = new Array();
    	//상품중복체크
    	$.each( params, function( index, el ){
    		if(el.SEARCH_THPE != "D"){
	    		if( !fnDuplicationChk( el.prdId )){
	    			deleteObj.push(index);
					bCheck = false;
	    		}
    		}
    	});
    	
    	//중복 제거
    	if( !bCheck ){
        	$.each(deleteObj, function(index,item){
        		params.splice(item-index,1);        		
        	});
    	}
    	
       	//배열재정의
       	var arrayObj = new Array();
   		var obj;
   		var searchType = "";
   		$.each(params, function(index,item){
       		obj = new Object();
       		obj.prdId 				= item.prdId;
       		obj.prdNm 			= item.prdNm;
       		obj.prdClsNm 			= item.prdClsNm;
       		arrayObj.push(obj); //만들어진  object를 배열에 추가
       	});
   		
  			//기본TR삭제
          	$("#productNodata").remove();
  			$( "#productTemplate" ).tmpl( arrayObj ).appendTo( "#applyProductList" );
   		return true;
    };
    
  	//회원팝업 회원선택시 호출되는 메소드
    fnResultMember = function(params){
    	var bCheck = true;
    	var deleteObj = new Array();
    	//상품중복체크
    	$.each( params, function( index, el ){
    		if( !fnDuplicationMemberChk( el.memId )){
    			deleteObj.push(index);
				bCheck = false;
    		}
    	});
    	if( !bCheck ){
        	$.each(deleteObj, function(index,item){
        		params.splice(item-index,1);        		
        	});
    	}
    	
    	if( true ){
        	
        	//배열재정의
        	var arrayObj = new Array();
    		var obj;
    		var searchType = "";
    		$.each(params, function(index,item){
        		obj = new Object();
        		obj.memId 			= item.memId;
        		obj.memSpr 			= item.memSpr;
        		obj.memNm 			= item.memNm;
        		obj.loginId 		= item.loginId;
        		obj.bzplcId 		= item.bzplcId;
        		obj.bzplcNm      	= item.bzplcNm;
        		obj.oprUntId		= item.oprUntId;
        		obj.oprUntNm		= item.oprUntNm;
        		obj.deptId			= item.deptId;
        		obj.deptNm			= item.deptNm;
        		
        		if ( item.memSpr == '' )
        		{
        			obj.memSprNm = "계약";
        		}
        		else
        		{
        			obj.memSprNm = "일반";
        		}
    			searchType		        = item.SEARCH_THPE;
        		arrayObj.push(obj); //만들어진  object를 배열에 추가
        	});
    		
    		if(searchType == "D"){
    			$("#GFT_MST_PRD_CD").val(obj.PRD_MST_CD);
    		}else{
    			//기본TR삭제
            	$("#memberNodata").remove();
    			$( "#memberTemplate" ).tmpl( arrayObj ).appendTo( "#applyMemberList" );
    			$("#memberCnt").text($("#applyMemberList").find("tr").length);
    		}
    		return true;
    	}
    };
    
  	//상품 중복체크
    fnDuplicationMemberChk = function( selectObj ){
		var bReturn = true;
    	var $obj = $("#applyMemberList input[name='MEM_ID_CHKECs']");
    	$.each($obj, function(){
    		if( selectObj == $(this).val() ){
    			bReturn = false;
    			return false;
    		}
    	});
    	return bReturn;
    };
    
 	// 회원 선택삭제 
    $(document).on("click", "#memberDelete", function () 
    {	

		if( $(".checkMember:checked").length == 0 ){
    		alert("삭제할 회원을 선택하여 주십시오.");
    		return;
    	}
        
    	$(".checkMember:checked").each(function(){
			
    		if($(this).data("state") != 'new'){
    			var html = '<input type="hidden" name="deleteMemIds" value="'+$(this).data("id")+'"/>';
    			$("#frm").append(html);
    		}
    		
    		$(this).parents("tr").remove();
    	});
    	
    	$("#memberCnt").text($("#applyMemberList").find("tr").length);
    	
    	if ( $(".checkMember").length == 0 ){
			$("#applyMemberList").append('<tr id="memberNodata"><td colspan="11">발행 대상이 없습니다.</td></tr>');
        }
    	 


    });	
 	
    // 사용상품 상품 선택삭제 이벤트
    $(document).on("click", "#goProductDelete", function () 
    {
    	if( $(".checkRow:checked").length == 0 ){
    		alert("삭제할 상품을 선택하여 주십시오.");
    		return;
    	}
        $("#applyProductList").children("tr").each(function()
        {
        	if ( $(this).find("input[name='PRD_MST_CDs']").is(":checked") ){
        		var _this = $(this).find("input[name='PRD_MST_CDs']");
        		if(_this.data("state") != 'new'){
        			var html = '<input type="hidden" name="deleteTgtIds" value="'+_this.data("id")+'"/>';
        			$("#frm").append(html);
        		}
        		
        		$(this).remove();
        	}
        });
        
        if ( $("#applyProductList").children("tr").length == 0 )
        {
        	$("#applyProductList").append('<tr id="productNodata"><td colspan="7">상품을 검색해 주세요.</td></tr>');
        }
        //체크박스 전체 선택
        $(".checkAll").prop("checked", false);
        
    });
    
    /*--------------쿠폰적용제외상품--------------------------*/ 	
	
 	// 상품검색 
    $(document).on("click", "#goProductAdd2", function () 
    {	
    	$("#search_1").val("");
    	$("#search_2").val("Y");
   		popup('',"1100","700","no","_ProductPopup");
   		$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/com/popUp/prd/productPopupForm.do", "target":"popup_ProductPopup", "method":"post"}).submit();

    });	
 	
    //상품 중복체크
    fnDuplicationChk2 = function( selectObj ){
		var bReturn = true;
    	var $obj = $("#applyProductList2 input[name='PRD_MST_CDs2']");
    	$.each($obj, function(){
    		if( selectObj == $(this).val() ){
    			bReturn = false;
    			return false;
    		}
    	});
    	return bReturn;
    };
    
    //상품팝업 상품선택시 호출되는 메소드
    fnResultProduct2 = function(params){
    	var bCheck = true;
    	var deleteObj = new Array();
    	//상품중복체크
    	$.each( params, function( index, el ){
    		if(el.SEARCH_THPE != "D"){
	    		if( !fnDuplicationChk2( el.prdId )){
	    			deleteObj.push(index);
					bCheck = false;
	    		}
    		}
    	});
    	if( !bCheck ){
        	$.each(deleteObj, function(index,item){
        		params.splice(item-index,1);        		
        	});
    	}
        	
       	//배열재정의
       	var arrayObj = new Array();
   		var obj;
   		var searchType = "";
   		$.each(params, function(index,item){
       		obj = new Object();
       		obj.prdId 				= item.prdId;
       		obj.prdNm 			= item.prdNm;
       		obj.prdClsNm 			= item.prdClsNm;
       		
       		arrayObj.push(obj); //만들어진  object를 배열에 추가
       	});
   		
		//기본TR삭제
		$("#productNodata2").remove();
		$( "#productTemplate2" ).tmpl( arrayObj ).appendTo( "#applyProductList2" );
		return true;
    };

    // 사용상품 상품 선택삭제 이벤트
    $(document).on("click", "#goProductDelete2", function () 
    {
    	if( $(".checkRow2:checked").length == 0 ){
    		alert("삭제할 상품을 선택하여 주십시오.");
    		return;
    	}
        $("#applyProductList2").children("tr").each(function()
        {
        	if ( $(this).find("input[name='PRD_MST_CDs2']").is(":checked") )
        	{
        		var _this = $(this).find("input[name='PRD_MST_CDs2']");
        		if(_this.data("state") != 'new'){
        			var html = '<input type="hidden" name="deleteEctIds" value="'+_this.data("id")+'"/>';
        			$("#frm").append(html);
        		}
        		
        		$(this).remove();
        	}
        });
        
        if ( $("#applyProductList2").children("tr").length == 0 )
        {
        	$("#applyProductList2").append('<tr id="productNodata2"><td colspan="7">상품을 검색해 주세요.</td></tr>');
        }
        //체크박스 전체 선택
        $(".checkAll2").prop("checked", false);
        
    });
    /*--------------상품검색 끝--------------------------*/ 
    
    /*--------------카테고리 --------------------------*/ 
    
    // 카테고리팝업호출
	$(document).on("click", "#goCategoryPopup", function () 
    {
		
		$("#search_1").val("Y");
    	$("#search_2").val("");
		
 		popup('',"1000","500","no","_CategoryPopup");
 		$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/com/popUp/prd/sspCategoryPopupForm.do", "target":"popup_CategoryPopup", "method":"post"}).submit();
    });
    
	 // 카테고리팝업호출
	$(document).on("click", "#goCategoryPopup2", function () 
    {
		$("#search_1").val("");
    	$("#search_2").val("Y");
		
 		popup('',"1000","500","no","_CategoryPopup");
 		$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/com/popUp/prd/sspCategoryPopupForm.do", "target":"popup_CategoryPopup", "method":"post"}).submit();
    });
	 
	 //회원 팝업
	$(document).on("click", "#goMemeberPopup", function () 
    {
 		popup('',"1000","700","no","_clientPopupForm");
 		$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/prm/cpnMng/issueMemberPopupForm.do", "target":"popup_clientPopupForm", "method":"post"}).submit();
 		
    });
 	
  	//카테고리 검색 결과
    fnResultSspCategory = function(params)
    {
    	if($("#search_1").val() == "Y"){
    		fnResultCategory1(params);
    	}
    	
    	if($("#search_2").val() == "Y"){
    		fnResultCategory2(params);
    	}
    };
    
  	//카테고리 검색 결과
    fnResultCategory1 = function(params)
    {
    	var bCheck = true;
    	var $obj = $("#applyCategoryList_category input[name='PRD_CTG_IDXs_category']");
    	$.each($obj, function(){
    		if( params.prdClsCd == $(this).val() ){
    			alert("["+params.prdClsNm+"] 이미 선택된 카테고리입니다.");
    			bCheck = false;
    			return false;
    		}
    	});
    	
    	if( bCheck )
    	{
    		//기본TR삭제 
        	$("#categoryNodata").remove();
    		
    		var idx = $("#applyCategoryList_category").find("tr").length;
        	params.IDX = ++idx;
        	
    	    $("#categoryTemplate").tmpl(params).appendTo("#applyCategoryList_category");
    	}
    	return true;
    };
    
 	 //카테고리 검색 결과
    fnResultCategory2 = function(params)
    {
    	var bCheck = true;
    	var $obj = $("#applyCategoryList2_category input[name='PRD_CTG_IDXs2_category']");
    	$.each($obj, function(){
    		if( params.prdClsCd == $(this).val() ){
    			alert("["+params.CTG_PATH+"] 이미 선택된 카테고리입니다.");
    			bCheck = false;
    			return false;
    		}
    	});
    	
    	if( bCheck )
    	{
    		//기본TR삭제 
        	$("#categoryNodata2").remove();
    		
    		var idx = $("#applyCategoryList2_category").find("tr").length;
        	params.IDX = ++idx;
        	
    	    $("#categoryTemplate2").tmpl(params).appendTo("#applyCategoryList2_category");
    	}
    	return true;
    };
    
 	// 사용상품 카테고리 선택삭제 이벤트
    $(document).on("click", "a[id=goCategoryDelete]", function () 
    {
    	var strArray = $(this).attr("id").split('_');
		
    	if( $(".checkRow_category:checked").length == 0 ){
    		alert("삭제할 카테고리를 선택하여 주십시오.");
    		return;
    	}
    	
    	$(".checkRow_category:checked").each(function(i,item){
    		var _this = $(this);    		
    		if(_this.data("state") != 'new'){
    			var html = '<input type="hidden" name="deleteTgtIds" value="'+_this.data("id")+'"/>';
    			$("#frm").append(html);
    		}
    		
    		$(item).parentsUntil("tbody").remove();
    	});
        
        if ( $("#applyCategoryList_category").children("tr").length == 0 )
        {
        	$("#applyCategoryList_category").append('<tr id="categoryNodata"><td colspan="2">카테고리를 검색해 주세요.</td></tr>');
        }
        
        //체크박스 전체 선택
        $(".checkAll_category").prop("checked", false);        
    });
 
    // 사용상품 카테고리 선택삭제 이벤트
    $(document).on("click", "a[id=goCategoryDelete2]", function () 
    {
    	var strArray = $(this).attr("id").split('_');
		
    	if( $(".checkRow2_category:checked").length == 0 ){
    		alert("삭제할 카테고리를 선택하여 주십시오.");
    		return;
    	}
    	
    	$(".checkRow2_category:checked").each(function(i,item){
    		
    		var _this = $(this);    		
    		if(_this.data("state") != 'new'){
    			var html = '<input type="hidden" name="deleteEctIds" value="'+_this.data("id")+'"/>';
    			$("#frm").append(html);
    		}
    		
    		$(item).parentsUntil("tbody").remove();
    	});
        
        if ( $("#applyCategoryList2_category").children("tr").length == 0 )
        {
        	$("#applyCategoryList2_category").append('<tr id="categoryNodata2"><td colspan="2">카테고리를 검색해 주세요.</td></tr>');
        }
        
        //체크박스 전체 선택
        $(".checkAll_category").prop("checked", false);        
    });
    /*--------------카테고리 끝--------------------------*/ 
    
    //무제한 발행 체크 클릭
    $(document).on("click", "#CPN_MST_LMT_YN_CHK", function () 
   	{
    	if($(this).is(":checked") == true) 
    	{
    		$("#CPN_MST_ISU_CNT").prop("disabled", true);
    		$("#CPN_MST_ISU_CNT").val("");
    		
    	}else
    	{
    		$("#CPN_MST_ISU_CNT").prop("disabled", false);
    		$("#CPN_MST_ISU_CNT").val("0");
    	}
   	});
    
    
 
    // 등록 이벤트
    $(document).on("click", "#goRegist", function() {
    	
    	var CPN_MST_GBN = $("input[name=CPN_MST_GBN]:checked").val();
    	var CPN_MST_PTN_SHP_GBN = $("input[name=CPN_MST_PTN_SHP_GBN]:checked").val();
    	
    	if($("#CPN_MST_ISU_MU").val() != "Y"){
    		$("#CPN_MST_ISU_ED_DT_ON").val($("#CPN_MST_ISU_ED_DT").val());
		}
  
    	if($("input[name=CPN_MST_GBN]:checked").val() != "F")
       	{ 
    		if($.trim($("#CPN_MST_SAL_PRC").val()) == ""){
    			alert("[할인금액/율] 반드시 입력해 주십시오.");
    			$("#CPN_MST_SAL_PRC").focus();
    			return;
    		}
       	}
    	
    	if($.trim($("#CPN_MST_SML_PRC").val()) == ""){
			alert("[최소구매금액] 반드시 입력해 주십시오.");
			$("#CPN_MST_SML_PRC").focus();
			return;
		}
    	
    	if($.trim($("#CPN_MST_ISU_ST_DT").val()) == ""){
    		if(CPN_MST_GBN=="G")alert("등록 시작일을 입력해 주십시오.");
    		if(CPN_MST_GBN!="G")alert("발급 시작일을 입력해 주십시오.");
			$("#CPN_MST_ISU_ST_DT").focus();
			return;
		}
    	
    	if($.trim($("#CPN_MST_ISU_ED_DT").val()) == ""){
    		if(CPN_MST_GBN=="G")alert("등록 종료일을 입력해 주십시오.");
    		if(CPN_MST_GBN!="G")alert("발급 종료일을 입력해 주십시오.");
			$("#CPN_MST_ISU_ED_DT").focus();
			return;
		}
    	
    	if($.trim($("#CPN_MST_ISU_ED_DT_ON").val()) == ""){
			alert("발급 종료일을 입력해 주십시오2.");
			$("#CPN_MST_ISU_ED_DT").focus();
			return;
		}
    	
    	if(CPN_MST_GBN == "G")
    	{
    	}	
	    else
    	{
    		var CPN_MST_ISU_CNT = $.trim($("#CPN_MST_ISU_CNT").val());
    		
    		if($("#CPN_MST_LMT_YN_CHK").is(":checked") == true) 
        	{
    			$("#CPN_MST_LMT_YN").val("Y");
        	}else
        	{
        		$("#CPN_MST_LMT_YN").val("N");
        		if(CPN_MST_ISU_CNT==""||CPN_MST_ISU_CNT=="0")
        		{
        			alert("[발급수량]을 입력해 주십시오.");
           			$("#CPN_MST_ISU_CNT").focus();
           			return;
        		}
        		
        	}
    	}
    	
    	if($("input[name=CPN_MST_ISU_DAY_GBN]:checked").val() == "A")
       	{     
    		if($.trim($("#CPN_MST_USE_ST_DT").val()) == "")
       		{
       			alert("[고정기간 시작일]을 입력해 주십시오.");
       			$("#CPN_MST_USE_ST_DT").focus();
       			return;
       		}
    		if($.trim($("#CPN_MST_USE_ED_DT").val()) == "")
       		{
       			alert("[고정기간 종료일]을 입력해 주십시오.");
       			$("#CPN_MST_USE_ED_DT").focus();
       			return;
       		}
       	}else if($("input[name=CPN_MST_ISU_DAY_GBN]:checked").val() == "B"){
       		if($.trim($("#CPN_MST_USE_DAY").val()) == "")
       		{
       			alert("[사용가능일수]을 입력해 주십시오.");
       			$("#CPN_MST_USE_DAY").focus();
       			return;
       		}
       	}
 	
    	
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

</script>

</body>
</html>
