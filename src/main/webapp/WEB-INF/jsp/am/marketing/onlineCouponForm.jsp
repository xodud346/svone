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
					<input type="hidden" id="PRD_CTG_ENV"  name="PRD_CTG_ENV" value="${commandMap.PRD_CTG_ENV}" />
                </form>
                
                <form id="frm" name="frm" enctype="multipart/form-data"> 
                	<input type="hidden" name="CPN_MST_ISU_ED_DT_ON" id="CPN_MST_ISU_ED_DT_ON" value=""/>
                    <input type="hidden" name="CPN_MST_ISU_ED_HH_ON" id="CPN_MST_ISU_ED_HH_ON" value=""/>
                    <input type="hidden" name="CPN_MST_ISU_ED_MM_ON" id="CPN_MST_ISU_ED_MM_ON" value=""/>
                    <input type="hidden" name="search_1" id="search_1" value=""/>
                    <input type="hidden" name="search_2" id="search_2" value=""/>
                    <input type="hidden" name="searchBnd_1" id="searchBnd_1" value=""/>
                    <input type="hidden" name="searchBnd_2" id="searchBnd_2" value=""/>
                    <input type="hidden" name="searchGb" value="Y" />
                    
			  		<table cellspacing="0" class="table-row table-a"><!-- table -->
	                    <colgroup>
	                        <col style="width: 15%;" />
	                        <col style="width: auto;" />
	                    </colgroup>
	                    <tbody>
	                        <tr>
	                    		<th><label class="label"><span>쿠폰번호<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
<%-- 			                        	<input type="hidden" name="CPN_MST_IDX" id="CPN_MST_IDX" value="<c:out value="${commandMap.CPN_MST_IDX }"/>"/> --%>
<%-- 			                            <span><c:out value="${commandMap.CPN_MST_IDX }"/></span> --%>
										시스템 자동발급
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>쿠폰종류<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
	                    			<input type="radio" name="CPN_MST_GBN" id="cT1" class="radio" value="A" checked="checked"/>
		                            <label for="cT1">일반</label>		                           
		                            <input type="radio" name="CPN_MST_GBN" id="cT2" class="radio" value="B"/>
		                            <label for="cT2">생일</label>
		                            <input type="radio" name="CPN_MST_GBN" id="cT3" class="radio" value="C"/>
		                            <label for="cT3">첫구매</label>
		                            <input type="radio" name="CPN_MST_GBN" id="cT4" class="radio" value="D"/>
		                            <label for="cT4">회원등급</label>
		                            <input type="radio" name="CPN_MST_GBN" id="cT5" class="radio" value="E"/>
		                            <label for="cT5">회원가입</label>
		                            <input type="radio" name="CPN_MST_GBN" id="cT6" class="radio" value="F"/>
		                            <label for="cT6">배송비무료</label>		    
		                            <input type="radio" name="CPN_MST_GBN" id="cT7" class="radio" value="G"/>
		                            <label for="cT7">제휴</label>
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>고객쿠폰명</span></label></th>
	                    		<td>
	                    			<input type="text" name="CPN_MST_TITLE" id="CPN_MST_TITLE" class="text xlarge" maxlength="100"/>
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>관리자설명</span></label></th>
	                    		<td>
	                    			<input type="text" name="CPN_MST_ADM_TXT" id="CPN_MST_ADM_TXT" class="text xlarge" maxlength="100"/>
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>할인구분<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                            <input type="radio" name="CPN_MST_SAL_GBN" id="cS1" class="radio" value="A" checked="checked"/>
		                            <label for="cS1">정율</label>		                           
		                            <input type="radio" name="CPN_MST_SAL_GBN" id="cS2" class="radio" value="B"/>
		                            <label for="cS2">정액</label>
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>할인금액/율<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                           	<input type="text" id="CPN_MST_SAL_PRC" name="CPN_MST_SAL_PRC" class="text number" maxlength="10" style="width: 110px;" />
                                    <span>(%/원)</span>	
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>최소구매금액<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
		                            <input type="text" id="CPN_MST_SML_PRC" name="CPN_MST_SML_PRC" class="text number" maxlength="10" style="width: 110px;" />
                                    <span>원 이상 구매 시 사용가능</span>
	                    		</td>
	                        </tr>
	                        <tr>
	                    		<th><label class="label"><span>최대할인금액</span></label></th>
	                    		<td>
		                            <input type="text" id="CPN_MST_MXM_PRC" name="CPN_MST_MXM_PRC" class="text number" maxlength="10" style="width: 110px;" />
			                        <span id="CPN_MST_MXM_PRC_TX2" name="CPN_MST_MXM_PRC_TX2">원 (정율일 때만 사용)</span>	
	                    		</td>
	                        </tr>
	                        
	                        <tr>
	                            <th><label class="label"><span>발급기간<i class="require"><em>필수입력</em></i></span></label></th>
	                            <td>
	                            	<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
	                               	<input type="text" class="text" id="CPN_MST_ISU_ST_DT" name="CPN_MST_ISU_ST_DT" readonly="readonly" data-target-end="#CPN_MST_ISU_ED_DT"/>
	                               	<select id="CPN_MST_ISU_ST_HH" name="CPN_MST_ISU_ST_HH" class="auctionEventTime">
	                       	  			<option value="">선택</option>
			                        	<c:forEach begin="0" end="23" step="1" varStatus="i">
			                        		<c:set var="hh" value="${i.index}"/>
			                        		<c:if test="${i.index < 10}">
			                        			<c:set var="hh" value="0${i.index}"/>
			                        		</c:if>
			                        		<option value="${hh}" <c:if test="${hh eq '00' }">selected</c:if> >${hh}</option>
			                        	</c:forEach>
                        			</select>
                        			<select id="CPN_MST_ISU_ST_MM" name="CPN_MST_ISU_ST_MM" class="auctionEventTime">
			                        	<option value="">선택</option>
			                        	<c:forEach begin="0" end="59" step="1" varStatus="i">
			                        		<c:set var="mm" value="${i.index}"/>
			                        		<c:if test="${i.index < 10}">
			                        			<c:set var="mm" value="0${i.index}"/>
			                        		</c:if>
			                        		<option value="${mm}" <c:if test="${mm eq '00' }">selected</c:if>>${mm}</option>
			                        	</c:forEach>
			                         </select>
			                         <span class="auctionEventTime">
		                             ~
	                          		</span>    
		                          		  
									<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text" id="CPN_MST_ISU_ED_DT" name="CPN_MST_ISU_ED_DT"  readonly="readonly" data-target-start="#CPN_MST_ISU_ST_DT"/>
									<select id="CPN_MST_ISU_ED_HH" name="CPN_MST_ISU_ED_HH" class="auctionEventTime">
		                            	<option value="">선택</option>
		                            	<c:forEach begin="0" end="23" step="1" varStatus="i">
		                            		<c:set var="hh" value="${i.index}"/>
		                            		<c:if test="${i.index < 10}">
		                            			<c:set var="hh" value="0${i.index}"/>
		                            		</c:if>
		                            		<option value="${hh}" <c:if test="${hh eq '23' }">selected</c:if>>${hh}</option>
		                            	</c:forEach>
		                            </select>
		                            
		                            <select id="CPN_MST_ISU_ED_MM" name="CPN_MST_ISU_ED_MM" class="auctionEventTime">
		                            	<option value="">선택</option>
		                            	<c:forEach begin="0" end="59" step="1" varStatus="i">
		                            		<c:set var="mm" value="${i.index}"/>
		                            		<c:if test="${i.index < 10}">
		                            			<c:set var="mm" value="0${i.index}"/>
		                            		</c:if>
		                            		<option value="${mm}" <c:if test="${mm eq '59'}">selected</c:if>>${mm}</option>
		                            	</c:forEach>
		                            </select>
		                            <span id="offLine2">
			                            <a href="javascript:fnDateSet('CPN_MST_ISU_ST_DT', 'CPN_MST_ISU_ED_DT', 0, 0, 0, 0, 0, 0,  '-');" class="button button-a xsmall"><span>오늘</span></a>
                                		<a href="javascript:fnDateSet('CPN_MST_ISU_ST_DT', 'CPN_MST_ISU_ED_DT', 0, 0, 0, 0, 0, 7,  '-');" class="button button-a xsmall"><span>일주일</span></a>
                                		<a href="javascript:fnDateSet('CPN_MST_ISU_ST_DT', 'CPN_MST_ISU_ED_DT', 0, 0, 0, 0, 0, 15,  '-');" class="button button-a xsmall"><span>15일</span></a>
                                		<a href="javascript:fnDateSet('CPN_MST_ISU_ST_DT', 'CPN_MST_ISU_ED_DT', 0, 0, 0, 0, 1, 0,  '-');" class="button button-a xsmall"><span>한달</span></a>
                                		<a href="javascript:fnDateSet('CPN_MST_ISU_ST_DT', 'CPN_MST_ISU_ED_DT', 0, 0, 0, 0, 2, 0,  '-');" class="button button-a xsmall"><span>두달</span></a>
		                            </span>
		                            <input type="checkbox" name="CPN_MST_ISU_MU" id="CPN_MST_ISU_MU" class="checkbox" />
		                        	<label for="CPN_MST_ISU_MU"><span class="auctionEventTime">종료일 무한</span></label>
	                            </td>
	                        </tr>
	                        
	                        <tr id="onLine1">
	                    		<th><label class="label"><span>발급수량<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
	                    			<input type="number" id="CPN_MST_ISU_CNT" name="CPN_MST_ISU_CNT" class="text short number" maxlength="10" value="0" />
		                            <input type="checkbox" name="CPN_MST_LMT_YN_CHK" id="CPN_MST_LMT_YN_CHK"/>
		                            <label for="CPN_MST_LMT_YN_CHK">무제한</label>
		                            <input type="hidden" name="CPN_MST_LMT_YN" id="CPN_MST_LMT_YN"/>
	                    		</td>
	                        </tr>
	                        
	                        <tr id="offLine1">
	                    		<th><label class="label"><span>발급수량<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
	                    			<div style="margin-bottom:10px;">
			                        	<input type="radio" name="CPN_MST_PTN_SHP_GBN" id="CPN_MST_PTN_SHP_GBN1" class="radio" value="F" checked="checked"/>
			                            <label for="CPN_MST_PTN_SHP_GBN1">고정</label>         (1개의 쿠폰번호생성)
		                            </div>
		                            <div>                    
		                            	<input type="radio" name="CPN_MST_PTN_SHP_GBN" id="CPN_MST_PTN_SHP_GBN2" class="radio" value="R"/>
		                            	<label for="CPN_MST_PTN_SHP_GBN2">난수</label>
		                            	<input type="text" id="CPN_MST_PTN_SHP_RND" name="CPN_MST_PTN_SHP_RND" class="text short number" maxlength="10"/>개    (입력된 숫자만큼 쿠폰번호 생성)
		                            </div>
	                    		</td>
	                        </tr>
	                        
	                        <tr id="onLine2">
	                    		<th><label class="label"><span>발급방식<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
	                    			<input type="radio" name="CPN_MST_ISU_GBN" id="cG1" class="radio" value="A" checked="checked"/>
		                            <label for="cG1">자동발급</label>		                           
		                            <input type="radio" name="CPN_MST_ISU_GBN" id="cG3" class="radio" value="B"/>
		                            <label for="cG3">운영자수동발급</label>
		                            <input type="radio" name="CPN_MST_ISU_GBN" id="cG4" class="radio" value="C"/>
		                            <label for="cG4">다운로드발급</label>	
	                    		</td>
	                        </tr>
	                        
	                        <tr>
	                    		<th><label class="label"><span>사용기간/일수<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
	                    			<input type="radio" name="CPN_MST_ISU_DAY_GBN" id="cmidgA" class="radio" value="A"checked="checked"/>
		                            <label for="cmidgA">고정기간</label>
		                            
		                            <span class="auctionEventTime">시작일 :</span>      
		                            <a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text" id="CPN_MST_USE_ST_DT" name="CPN_MST_USE_ST_DT"  readonly="readonly" data-target-end="#CPN_MST_USE_ED_DT"/>
		                             ~
	                          		<span>종료일 : </span>
	                          		<a href="javascript:;" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
									<input type="text" class="text" id="CPN_MST_USE_ED_DT" name="CPN_MST_USE_ED_DT"  readonly="readonly" data-target-start="#CPN_MST_USE_ST_DT"/>      
	                          		<br/><br/>
	                          		<input type="radio" name=CPN_MST_ISU_DAY_GBN id="cmidgB" class="radio" value="B"/>
		                            <span class="auctionEventTime"><label for="cmidgB">사용가능일수(<span id="CPN_MST_USE_DAY_NM">발행</span>일로부터 <input type="text" id="CPN_MST_USE_DAY" name="CPN_MST_USE_DAY" class="text short number" maxlength="10" /> 일)</label> (고객이 보유한 시점부터 사용가능)</span>
		                            <br/><br/>
		                            <input type="radio" name=CPN_MST_ISU_DAY_GBN id="cmidgM" class="radio" value="M"/>
		                            <label for="cmidgM">발행 당월말까지 사용</label> 
	                    		</td>
	                        </tr>
	                        
	                        <tr>
	                    		<th><label class="label"><span>상태<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
	                    			<input type="radio" name="CPN_MST_YN" id="cmyA" class="radio" value="Y"/>
		                            <label for="cmyA">사용</label>
		                            <input type="radio" name="CPN_MST_YN" id="cmyB" class="radio" value="N" checked="checked"/>
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
	                    			<input type="checkbox" class="checkbox" name="CPN_MST_PC_YN" id="CPN_MST_PC_YN" value="Y" /><label for="CPN_MST_PC_YN" > PC</label>
									<input type="checkbox" class="checkbox" name="CPN_MST_MB_YN" id="CPN_MST_MB_YN" value="Y" /><label for="CPN_MST_MB_YN" > MOBILE</label>
	                    		</td>
	                        </tr>
	                        <tr id="onLine3">
	                    		<th><label class="label"><span>회원<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td>
	                    			<table style="border:0px">
                                      	<tr style="border-bottom: 0px none"> 
                                      		<td>
                                                <input type="radio" name="CPN_MST_MBR_GBN" id="cmmgA" class="radio" value="A"/>
                                                <label for="cmmgA">회원구분/회원등급</label>
                                            </td>
                                            <td>
                                                <input type="checkbox" class="checkbox" name="CPN_MST_NML_YN" id="CPN_MST_NML_YN" value="Y" />
                                                <label for="CPN_MST_NML_YN">일반회원</label>
                                            </td>
                                            <td>    
                                                <select id="CPN_MST_MEM_GRD" name="CPN_MST_MEM_GRD" class="select" title="일반회원">
                                                    <option value="">전체</option>
                                                    <c:if test="${not empty cpnMemGradeList }">
					                                    <c:forEach var="cpnTypeRow" items="${cpnMemGradeList }" varStatus="i">                                  	
					                                        <option value="<c:out value="${cpnTypeRow.CMN_COM_IDX }"/>" ><c:out value="${cpnTypeRow.CMN_COM_NM }"/></option>
					                                    </c:forEach>
					                                </c:if>
                                                </select>
                                            </td>
                                        </tr>    
                                        <tr >
                                        	<td></td>
                                        	<td>
                                                <input type="checkbox" class="checkbox" name="CPN_MST_SMP_YN" id="CPN_MST_SMP_YN" value="Y" />
                                                <label for="CPN_MST_SMP_YN" >간편회원</label>
                                            </td>
                                            <td></td>
                                        </tr>
                                       
                                       	<tr>
                           					<td>
                                            	<input type="radio" name="CPN_MST_MBR_GBN" id="cmmgB" class="radio" value="B"/>
                                            	<label for="cmmgB">개별회원 (쿠폰을 등록한 후, 관리자 발급화면에서 발급 받을 회원을 수동 지정)</label>
                                            </td>
                                            <td></td>
                                            <td></td>
                                       	</tr>
                                	</table>
	                    		</td>
	                        </tr>
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
	                    			<input type="radio" name="CPN_MST_TGT_GBN" id="cmtg1" class="radio" value="A"/>
		                            <label for="cmtg1">개별상품</label>		                           
		                            <input type="radio" name="CPN_MST_TGT_GBN" id="cmtg2" class="radio" value="B"/>
		                            <label for="cmtg2">전체상품</label>
		                            <input type="radio" name="CPN_MST_TGT_GBN" id="cmtg3" class="radio" value="C"/>
		                            <label for="cmtg3">브랜드</label>
		                            <input type="radio" name="CPN_MST_TGT_GBN" id="cmtg4" class="radio" value="D"/>
		                            <label for="cmtg4">기획전</label>
	                    		</td>
	                        </tr>
	                        <tr id="CPN_MST_PLN_TEX">
	                    		<th><label class="label"><span>대상<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td style="display:block">
	                    			<select name="CPN_MST_PLN_IDX" id="CPN_MST_PLN_IDX" class="select" style="display:none">
										<option value="">기획전 상품 선택</option>
										<c:choose>
											<c:when test="${not empty planList}">
			    	                            <c:forEach var="planList" items="${planList}" varStatus="status">
													<option value="<c:out value="${planList.PLN_MST_IDX}" />">
														<c:choose>
															<c:when test="${planList.PLN_MST_CHANNEL_MOBILE_YN eq 'Y' and planList.PLN_MST_CHANNEL_PC_YN eq 'Y'}">[PC+MOBILE]
															</c:when>
															<c:otherwise>
																<c:if test="${planList.PLN_MST_CHANNEL_PC_YN eq 'Y'}" >[PC]</c:if>
																<c:if test="${planList.PLN_MST_CHANNEL_MOBILE_YN eq 'Y'}" >[MOBILE]</c:if>
															</c:otherwise>
														</c:choose>
														<c:out value="${planList.PLN_MST_TITLE}" />
													</option>
			                        		    </c:forEach>
		                       	    		</c:when>
		                       	    	</c:choose>
									</select>
	                    		</td>
	                    		<td id="divProduct" style="display:block">
	                    		  	<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
					                    <div class="text-right">
					                        <a href="#none" id="goProductAdd" class="button small primary" title="새 창 으로 열립니다."><span>상품검색</span></a>
					                       	<a href="#none" id="goProductDelete" class="button small"><span>선택삭제</span></a>
					                    </div>
                					</div><!-- // 목록 상단 버튼 -->
									
	                    			<table class="table-row table-a" id="tableProduct">
										<colgroup>
											<col style="width: 40px;" />
											<col style="width: 160px" />
											<col style="width: auto;"/>
											<col style="width: 100px"/>
											<col style="width: 100px"/>
											<col style="width: 80px"/>
											<col style="width: 80px"/>
										</colgroup>
										<thead>
											<tr>
												<th><input type="checkbox" class="checkbox checkAll" /></th>
												<th>상품코드</th>
												<th>상품명</th>
												<th>정상가</th>
												<th>판매가</th>
												<th>판매상태</th>
												<th>쇼핑채널</th>
											</tr>
										</thead>
										<tbody id="applyProductList">
			                                <tr id="productNodata"><!-- row -->
			                                    <td colspan="7">상품을 검색해 주세요.</td>
			                                </tr>
										</tbody>
									</table>
	                    		</td>
	                    		<td id="divBrand2" style="display:block">
		                    		<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
					                    <div class="text-right">
					                       <a href="#none" id="goBrandAdd2" class="button small primary js-modal" title="새 창 으로 열립니다."><span>브랜드검색</span></a>
											<a href="#none" id="goBrandDelete2" class="button small"><span>선택삭제</span></a>
					                    </div>
	               					</div><!-- // 목록 상단 버튼 -->
									
	                    			<table class="table-row table-a" id="tableBrand2">
										<colgroup>
											<col style="width: auto;" />
											<col style="width: auto" />
										</colgroup>
										<thead>
											<tr>
												<th><input type="checkbox" class="checkbox checkAll_Brand2" /></th>
												<th>브랜드코드</th>
												<th>브랜드명</th>
											</tr>
										</thead>
										<tbody id="applyBrandList2">
			                                <tr id="brandNodata2"><!-- row -->
			                                    <td colspan="3">브랜드를 검색해 주세요.</td>
			                                </tr>
										</tbody>
									</table>
	                    		</td>
	                        </tr>
	                    </tbody>
                	</table><!-- // table -->
                	
                	<h3 class="title"><span>적용제외상품</span></h3>
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
	                    		<th><label class="label"><span>상품</span></label></th>
	                    		<td>
	                    			<input type="radio" name="CPN_MST_ETC_GBN" id="cmeg1" class="radio" value="A"/>
		                            <label for="cmeg1">상품</label>		                           
		                            <input type="radio" name="CPN_MST_ETC_GBN" id="cmeg2" class="radio" value="B"/>
		                            <label for="cmeg2">카테고리</label>
		                            <input type="radio" name="CPN_MST_ETC_GBN" id="cmeg3" class="radio" value="C"/>
		                            <label for="cmeg3">브랜드</label>
		                            <input type="radio" name="CPN_MST_ETC_GBN" id="cmeg4" class="radio" value="D"/>
		                            <label for="cmeg4">협력업체</label>
	                    		</td>
	                    	</tr>
	                    	<tr id="CPN_MST_PLN_TEX_2">
	                    		<th><label class="label"><span>대상<i class="require"><em>필수입력</em></i></span></label></th>
	                    		<td id="divCategory" style="display:block">
	                    			<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
					                    <div class="text-right">
					                       	<a href="javascript:registPopup('${Code.CATEGORY_TYPE_PC}');" id="goCategoryPopup" class="button small primary js-modal" title="새 창 으로 열립니다."><span>카테고리 추가</span></a>
											<a href="#none" id="goCategoryDelete_${Code.CATEGORY_TYPE_PC}" class="button small"><span>선택삭제</span></a>
											<input type="hidden" id="categoryTypePc" name="categoryTypePc" value="<c:out value="${Code.CATEGORY_TYPE_PC}" />">
					                    </div>
	               					</div><!-- // 목록 상단 버튼 -->
									
									<table class="table-row table-a" id="tableCategory">
										<colgroup>
											<col style="width: 40px;" />
											<col style="width: auto;" />
										</colgroup>
										<thead>
											<tr>
												<th><input type="checkbox" class="checkbox checkAll_${Code.CATEGORY_TYPE_PC}" /></th>
												<th>카테고리 경로</th>
											</tr>
										</thead>
										<tbody id="applyCategoryList_${Code.CATEGORY_TYPE_PC}">
			                            <c:choose>
			                            <c:when test="${not empty categoryListP}">
	    	                            <c:forEach var="item" items="${categoryListP }" varStatus="status">
										<tr>
											<td class="center">
											    <input type="checkbox" class="checkbox checkRow_${Code.CATEGORY_TYPE_PC}" id="PRD_CTG_IDX_${item.DSP_CTG_IDX}" name="PRD_CTG_IDXs_${Code.CATEGORY_TYPE_PC}" value="${item.DSP_PRD_CTG_IDX}" />
											    <input type="hidden" name="PRD_CTG_IDXs" value="${item.DSP_PRD_CTG_IDX}" />
											</td>
											<td class="left"><label for="PRD_CTG_IDX_${item.DSP_CTG_IDX}"><c:out value="${item.PRD_CTG_PATH }" /></label></td>
										</tr>
	                        		    </c:forEach>
	                        	    	</c:when>
		                	            <c:otherwise>
	   	        	                    <tr id="categoryNodata_${Code.CATEGORY_TYPE_PC}"><!-- row -->
											<td colspan="2">카테고리를 추가해 주세요.</td>
	       	    	                    </tr>
    		            	            </c:otherwise>
    	    	            	        </c:choose>
										</tbody>
									</table>
	                    		</td>
	                    		<td id="divProduct2" style="display:block">
	                    			<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
					                    <div class="text-right">
					                       	<a href="#none" id="goProductAdd2" class="button small primary js-modal" title="새 창 으로 열립니다."><span>상품검색</span></a>
											<a href="#none" id="goProductDelete2" class="button small"><span>선택삭제</span></a>
					                    </div>
	               					</div><!-- // 목록 상단 버튼 -->
									
	                    			<table class="table-row table-a" id="tableProduct2">
										<colgroup>
											<col style="width: 40px;" />
											<col style="width: 160px" />
											<col style="width: auto;"/>
											<col style="width: 100px"/>
											<col style="width: 100px"/>
											<col style="width: 80px"/>
											<col style="width: 60px"/>
										</colgroup>
										<thead>
											<tr>
												<th><input type="checkbox" class="checkbox checkAll2" /></th>
												<th>상품코드</th>
												<th>상품명</th>
												<th>정상가</th>
												<th>판매가</th>
												<th>판매상태</th>
												<th>쇼핑채널</th>
											</tr>
										</thead>
										<tbody id="applyProductList2">
			                                <tr id="productNodata2"><!-- row -->
			                                    <td colspan="7">상품을 검색해 주세요.</td>
			                                </tr>
										</tbody>
									</table>
	                    		</td>
	                    		<td id="divVendor" style="display:block">
	                    			<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
					                    <div class="text-right">
					                       	<a href="#none" id="goVendorAdd" class="button small primary js-modal" title="새 창 으로 열립니다."><span>협력업체검색</span></a>
											<a href="#none" id="goVendorDelete" class="button small"><span>선택삭제</span></a>
					                    </div>
	               					</div><!-- // 목록 상단 버튼 -->
									
	                    			<table class="table-row table-a" id="tableVendor">
										<colgroup>
											<col style="width: 40px;" />
											<col style="width: 160px" />
										</colgroup>
										<thead>
											<tr>
												<th><input type="checkbox" class="checkbox checkAll_Vendor" /></th>
												<th>업체코드</th>
												<th>업체명</th>
											</tr>
										</thead>
										<tbody id="applyVendorList">
			                                <tr id="vendorNodata"><!-- row -->
			                                    <td colspan="3">협력업체를 검색해 주세요.</td>
			                                </tr>
										</tbody>
									</table>
	                    		</td>
	                    		<td id="divBrand" style="display:block">
	                    			<div class="grid section-button-list"><!-- 목록 상단 버튼 -->
					                    <div class="text-right">
					                       	<a href="#none" id="goBrandAdd" class="button small primary js-modal" title="새 창 으로 열립니다."><span>브랜드검색</span></a>
											<a href="#none" id="goBrandDelete" class="button small"><span>선택삭제</span></a>
					                    </div>
	               					</div><!-- // 목록 상단 버튼 -->
									
	                    			<table class="table-row table-a" id="tableBrand">
										<colgroup>
											<col style="width: 40px;" />
											<col style="width: 160px" />
										</colgroup>
										<thead>
											<tr>
												<th><input type="checkbox" class="checkbox checkAll_Brand" /></th>
												<th>브랜드코드</th>
												<th>브랜드명</th>
											</tr>
										</thead>
										<tbody id="applyBrandList">
			                                <tr id="brandNodata"><!-- row -->
			                                    <td colspan="3">브랜드를 검색해 주세요.</td>
			                                </tr>
										</tbody>
									</table>
	                    		</td>
	                        </tr>
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
<script src="<c:out value="${serverDomain}" />/am/js/vendor/jquery.tmpl.min.js"></script>
<!-- template -->
<script id="productTemplate" type="text/x-jquery-tmpl">
<tr>
	<td><input type="checkbox" class="checkbox checkRow" name="PRD_MST_CDs" value="\${PRD_MST_CD}"/></td>
	<td><a href="\${serverDomain}/am/product/basicProductEdit.do?PRD_MST_CD=\${PRD_MST_CD}" target="_blank" title="새 창 으로 열립니다.">\${PRD_MST_CD}</a><input type="hidden" name="APPLY_IDXs" value="\${PRD_MST_CD}"/></td>
	<td>
		\${PRD_MST_NM}
	</td>
	<td>\${PRD_MST_PRC}</td>
	<td>\${PRD_MST_SCH_PRC}</td>
	<td>\${PRD_MST_SEL_STATE}</td>
	<td>\${PRD_MST_CHANNEL_TYPE}</td>
</tr>
</script>

<script id="productTemplate2" type="text/x-jquery-tmpl">
<tr>
	<td><input type="checkbox" class="checkbox checkRow2" name="PRD_MST_CDs2" value="\${PRD_MST_CD}"/></td>
	<td><a href="\${serverDomain}/am/product/basicProductEdit.do?PRD_MST_CD=\${PRD_MST_CD}" target="_blank" title="새 창 으로 열립니다.">\${PRD_MST_CD}</a><input type="hidden" name="APPLY_IDXs2" value="\${PRD_MST_CD}"/></td>
	<td>
		\${PRD_MST_NM}
	</td>
	<td>\${PRD_MST_PRC}</td>
	<td>\${PRD_MST_SCH_PRC}</td>
	<td>\${PRD_MST_SEL_STATE}</span></td>
	<td>\${PRD_MST_CHANNEL_TYPE}</td>
</tr>
</script>

<script id="categoryTemplate" type="text/x-jquery-tmpl">
<tr>
	<td><input type="checkbox" class="checkbox checkRow_\${PRD_CTG_ENV}" name="PRD_CTG_IDXs_\${PRD_CTG_ENV}" value="\${CTG_IDX}"/></td>
	<td class="left">\${CTG_PATH}<input type="hidden" name="PRD_CTG_IDXs" value="\${CTG_IDX}"/></td>
</tr>
</script>

<script id="vendorTemplate" type="text/x-jquery-tmpl">
<tr>
	<td><input type="checkbox" class="checkbox checkRowVendor" name="PRD_VEN_CDs" value="\${VDR_MST_ERP_ID}"/></td>
	<td>\${VDR_MST_ERP_ID}<input type="hidden" name="APPLY_VDR_IDXs" value="\${VDR_MST_ERP_ID}"/></td>
	<td>\${VDR_MST_NM}</td>
</tr>
</script>

<script id="brandTemplate" type="text/x-jquery-tmpl">
<tr>
	<td><input type="checkbox" class="checkbox checkRowBrand" name="PRD_BND_CDs" value="\${BND_MST_IDX}"/></td>
	<td>\${BND_MST_IDX}<input type="hidden" name="APPLY_BND_IDXs" value="\${BND_MST_IDX}"/></td>
	<td>\${BND_MST_BRAND_NM}</td>
	
</tr>
</script>

<script id="brandTemplate2" type="text/x-jquery-tmpl">
<tr>
	<td><input type="checkbox" class="checkbox checkRowBrand2" name="PRD_BND_CDs2" value="\${BND_MST_IDX}"/></td>
	<td>\${BND_MST_IDX}<input type="hidden" name="APPLY_BND_IDXs2" value="\${BND_MST_IDX}"/></td>
	<td>\${BND_MST_BRAND_NM}</td>
	
</tr>
</script>

<script>


$(function(){
	//$("#CPN_MST_MXM_PRC_TX1").hide();
	//$("#CPN_MST_MXM_PRC_TX2").hide();
	//$("#CPN_MST_MXM_PRC").hide();
	//$("#CPN_MST_MXM_PRC").prop("disabled",true);
	$("input[name='CPN_MST_NML_YN']").prop("disabled",true);
	$("input[name='CPN_MST_SMP_YN']").prop("disabled",true);
	$("#CPN_MST_MEM_GRD").prop("disabled",true);
	$("#CPN_MST_USE_DAY").prop("disabled",true);
	
	$("#divProduct").hide();
	$("#CPN_MST_PLN_TEX").hide();
	$("#CPN_MST_PLN_TEX_2").hide();
	$("#divProduct2").hide();
	
	$("#offLine1").hide();
	$("#offLine2").hide();
	$("#CPN_MST_PTN_SHP_RND").prop("disabled",true);
	
	$(document).on("click", "input:radio[name=CPN_MST_PTN_SHP_GBN]", function () 
	{
		if($(":radio[name=CPN_MST_PTN_SHP_GBN]:checked").val() == "F"){
			$("#CPN_MST_PTN_SHP_RND").val("");  
			$("#CPN_MST_PTN_SHP_RND").prop("disabled",true);
		}else
		{
			$("#CPN_MST_PTN_SHP_RND").prop("disabled",false);
		}
	
	});
	
	$(document).on("click", "input:radio[name=CPN_MST_GBN]", function () 
    {
		//제휴쿠폰인경우
		if($(":radio[name=CPN_MST_GBN]:checked").val() == "G"){
			$("#CPN_MST_DT_NM").html("<span>쿠폰등록기간<em class=\"strong\">*</em></span>");
			$("#CPN_MST_USE_DAY_NM").text("등록");
			
			$("#offLine1").show();
			$("#offLine2").show();
			$("#onLine1").hide();
			$("#onLine2").hide();
			$("#onLine3").hide();
			$("#CPN_MST_ISU_ST_HH").hide();
			$("#CPN_MST_ISU_ST_MM").hide();
			$("#CPN_MST_ISU_ED_HH").hide();
			$("#CPN_MST_ISU_ED_MM").hide();
		}  
		else
		{
			$("#CPN_MST_DT_NM").html("<span>발급기간<em class=\"strong\">*</em></span>");
			$("#CPN_MST_USE_DAY_NM").text("발행");
			$("#offLine1").hide();
			$("#offLine2").hide();
			$("#onLine1").show();
			$("#onLine2").show();
			$("#onLine3").show();
			$("#CPN_MST_ISU_ST_HH").show();
			$("#CPN_MST_ISU_ST_MM").show();
			$("#CPN_MST_ISU_ED_HH").show();
			$("#CPN_MST_ISU_ED_MM").show();

    	}
		
		if($(":radio[name=CPN_MST_GBN]:checked").val() == "F"){
			$("#CPN_MST_MXM_PRC_TX1").hide();
			$("#CPN_MST_MXM_PRC_TX2").hide();
			$("#CPN_MST_MXM_PRC").hide();
			$("#CPN_MST_SAL_GBN_DIV").hide();
			$("#CPN_MST_SAL_PRC").val('');
			$("#CPN_MST_MXM_PRC").val('');
		}else{
		    $("#CPN_MST_MXM_PRC_TX1").show();
		 	$("#CPN_MST_MXM_PRC_TX2").show();
		 	$("#CPN_MST_MXM_PRC").show();
		 	$("#CPN_MST_SAL_GBN_DIV").show();
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
    		$("#CPN_MST_ISU_ED_HH").val('23');
    		$("#CPN_MST_ISU_ED_MM").val('59');
    		
    		$("#CPN_MST_ISU_ED_DT_ON").val($("#CPN_MST_ISU_ED_DT").val());
        	$("#CPN_MST_ISU_ED_HH_ON").val($("#CPN_MST_ISU_ED_HH").val());
        	$("#CPN_MST_ISU_ED_MM_ON").val($("#CPN_MST_ISU_ED_MM").val());

    		$("#CPN_MST_ISU_ED_DT").prop("disabled",true);
    		$("#CPN_MST_ISU_ED_HH").prop("disabled",true);
    		$("#CPN_MST_ISU_ED_MM").prop("disabled",true);
    	}
    	else
    	{
    		$("#CPN_MST_ISU_ED_DT").prop("disabled",false);
    		$("#CPN_MST_ISU_ED_HH").prop("disabled",false);
    		$("#CPN_MST_ISU_ED_MM").prop("disabled",false);
    		$("#CPN_MST_ISU_MU").val('N');
    		$("#CPN_MST_ISU_ED_DT").val('');
    		$("#CPN_MST_ISU_ED_HH").val('');
    		$("#CPN_MST_ISU_ED_MM").val('');
    		//alert($("#CPN_MST_ISU_MU").val());
    	}
    });   
	
	//회원->일반회원,간편회원처리
	$(document).on("click", "input:radio[name=CPN_MST_MBR_GBN]", function () 
	{
		if($(":radio[name=CPN_MST_MBR_GBN]:checked").val() == "A"){			
			$("input[name='CPN_MST_NML_YN']").prop("disabled",false);
			$("input[name='CPN_MST_SMP_YN']").prop("disabled",false);
		}else{
			$("input[name='CPN_MST_NML_YN']").prop("disabled",true);
			$("input[name='CPN_MST_SMP_YN']").prop("disabled",true);
			$("input[name='CPN_MST_NML_YN']").prop("checked", false);
			$("input[name='CPN_MST_SMP_YN']").prop("checked", false);
			
			$("#CPN_MST_MEM_GRD").val('');
    		$("#CPN_MST_MEM_GRD").prop("disabled",true);
		}
	});
	
	//일반회원 select box 처리
	$(document).on("click", "#CPN_MST_NML_YN", function () 
    {
    	if($(this).is(":checked") == true) 
    	{
    		$("#CPN_MST_MEM_GRD").prop("disabled",false);
    	}
    	else
    	{
    		$("#CPN_MST_MEM_GRD").val('');
    		$("#CPN_MST_MEM_GRD").prop("disabled",true);
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
    	    	
    	if($("#CPN_MST_PC_YN").is(":checked") == false && $("#CPN_MST_MB_YN").is(":checked") == false){
    		alert("쿠폰대상정보의 채널을 먼저 선택하세요.");
    		$(this).attr("checked", false);
    		return;
    	}else{
	    	
	       if($(this).val() == "A"){
	    	   $("#CPN_MST_PLN_TEX").show();
	    	   $("#CPN_MST_PLN_IDX").hide();
	    	   $("#divProduct").show();
	    	   $("#divBrand2").hide();
	       }else if($(this).val() == "B"){
	    	   $("#CPN_MST_PLN_TEX").hide();
	    	   $("#CPN_MST_PLN_IDX").hide();
	    	   $("#divProduct").hide();
	    	   $("#divBrand2").hide();
	       }else if($(this).val() == "C"){
	    	   $("#CPN_MST_PLN_TEX").show();
	    	   $("#CPN_MST_PLN_IDX").hide();
	    	   $("#divProduct").hide();
	    	   $("#divBrand2").show();
	       }
	       else if($(this).val() == "D"){
	    	   $("#CPN_MST_PLN_TEX").show();
	    	   $("#CPN_MST_PLN_IDX").show();
	    	   $("#divProduct").hide();
	    	   $("#divBrand2").hide();
	       }       
	       else{
	    	   $("#CPN_MST_PLN_TEX").hide();
	    	   $("#CPN_MST_PLN_IDX").hide();
	    	   $("#divProduct").hide();
	    	   $("#divBrand2").hide();
	       }
    	}
    });
	
    $(document).on("click", "input[name=CPN_MST_ETC_GBN]", function () {
        if($(this).val() == "A"){
     	   $("#CPN_MST_PLN_TEX_2").show();
     	   $("#divProduct2").show();
     	   $("#divCategory").hide();
     	   $("#divVendor").hide();
     	   $("#divBrand").hide();
        }else if($(this).val() == "B"){
           $("#CPN_MST_PLN_TEX_2").show();
           $("#divCategory").show();
      	   $("#divProduct2").hide();
      	   $("#divVendor").hide();
      	   $("#divBrand").hide();
        }else if($(this).val() == "C"){
           $("#CPN_MST_PLN_TEX_2").show();
           $("#divCategory").hide();
      	   $("#divProduct2").hide();
      	   $("#divVendor").hide();
      	   $("#divBrand").show();
        }
        else if($(this).val() == "D"){
           $("#CPN_MST_PLN_TEX_2").show();           
           $("#divCategory").hide();
      	   $("#divProduct2").hide();
      	   $("#divVendor").show();
      	   $("#divBrand").hide();
        }       
        else{
           $("#CPN_MST_PLN_TEX_2").hide();
           $("#divCategory").hide();
      	   $("#divProduct2").hide();
      	   $("#divVendor").hide();
      	   $("#divBrand").hide();
        }
     });
	
    /*--------------상품검색--------------------------*/ 
    fnResultProduct = function(params){
    	//alert($("#search_1").val());
    	if($("#search_1").val() == "Y"){
    		fnResultProduct1(params);
    	}
    	
    	if($("#search_2").val() == "Y"){
    		fnResultProduct2(params);
    	}
    	
    }
	
    //체크박스 전체 선택
    $.checkBoxSelect("checkAll", "checkRow");
 	
 	// 상품검색 
    $(document).on("click", "#goProductAdd", function () 
    {	
    	$("#search_1").val("Y");
    	$("#search_2").val("");
    	//alert($("#search_1").val());
   		popup('',"1100","700","no","_ProductPopup");
   		$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/product/searchProductPopup.do", "target":"popup_ProductPopup", "method":"post"}).submit();

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
    	//상품중복체크
    	$.each( params, function( index, el ){
    		if(el.SEARCH_THPE != "D"){
	    		if( !fnDuplicationChk( el.PRD_MST_CD )){
	    			alert("["+el.PRD_MST_CD+"] 이미 선택된 상품입니다.");
					bCheck = false;
	    			return false;
	    		}
    		}
    	});
    	if( bCheck ){
        	
        	//배열재정의
        	var arrayObj = new Array();
    		var obj;
    		var searchType = "";
    		$.each(params, function(index,item){
        		obj = new Object();
        		obj.PRD_MST_CD 				= item.PRD_MST_CD;
        		obj.PRD_MST_NM 			= item.PRD_MST_NM;
        		obj.PRD_CTG_PATH 			= item.PRD_CTG_PATH;
        		obj.CMN_BRD_NM 				= item.CMN_BRD_NM;
        		obj.PRD_MST_PRC 	= setComma(item.PRD_MST_PRC);
        		obj.PRD_MST_SCH_PRC      = setComma(item.PRD_MST_SCH_PRC);
        		obj.PRD_MST_SEL_STATE 		= item.PRD_MST_SEL_STATE;
        		if(item.PRD_MST_CNL_PC_YN == "Y" && item.PRD_MST_CNL_MB_YN == "Y")
        		{
        			obj.PRD_MST_CHANNEL_TYPE ="전체";
        		}
        		else if(item.PRD_MST_CNL_PC_YN == "Y")
        		{
        			obj.PRD_MST_CHANNEL_TYPE="PC";	
        		}
        		else if(item.PRD_MST_CNL_MB_YN == "Y")
        		{
        			obj.PRD_MST_CHANNEL_TYPE="MOBILE";	
        		}
        		
				obj.FRONT_URL = '<c:out value="${frontDomain}" />';
        		
        		obj.serverDomain 			= '<c:out value="${serverDomain}" />';
        		if ( item.PRD_MST_SEL_STATE_CODE == '<c:out value="${Code.PRODUCT_SELL_STATE_ING}" />' )
        		{
        		    obj.PRD_MST_SEL_STATE_CLASS = "b";
        		}
        		else
        		{
        		    obj.PRD_MST_SEL_STATE_CLASS = "a";
        		}
        		obj.imgpath 		        = item.PRD_IMG_THUM_URL;
				searchType		        = item.SEARCH_THPE;
        		arrayObj.push(obj); //만들어진  object를 배열에 추가
        	});
    		
    		if(searchType == "D"){
    			$("#GFT_MST_PRD_CD").val(obj.PRD_MST_CD);
    		}else{
    			//기본TR삭제
            	$("#productNodata").remove();
    			$( "#productTemplate" ).tmpl( arrayObj ).appendTo( "#applyProductList" );
    		}
    		return true;
    	}
    };

    // 사용상품 상품 선택삭제 이벤트
    $(document).on("click", "#goProductDelete", function () 
    {
    	if( $(".checkRow:checked").length == 0 ){
    		alert("삭제할 상품을 선택하여 주십시오.");
    		return;
    	}
        $("#applyProductList").children("tr").each(function()
        {
        	if ( $(this).find("input[name='PRD_MST_CDs']").is(":checked") )
        	{
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
	
    //체크박스 전체 선택
    $.checkBoxSelect("checkAll2", "checkRow2");
 	
 	// 상품검색 
    $(document).on("click", "#goProductAdd2", function () 
    {	
    	$("#search_1").val("");
    	$("#search_2").val("Y");
   		popup('',"1100","700","no","_ProductPopup");
   		$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/product/searchProductPopup.do", "target":"popup_ProductPopup", "method":"post"}).submit();

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
    	//상품중복체크
    	$.each( params, function( index, el ){
    		if(el.SEARCH_THPE != "D"){
	    		if( !fnDuplicationChk2( el.PRD_MST_CD )){
	    			alert("["+el.PRD_MST_CD+"] 이미 선택된 상품입니다.");
					bCheck = false;
	    			return false;
	    		}
    		}
    	});
    	if( bCheck ){
        	
        	//배열재정의
        	var arrayObj = new Array();
    		var obj;
    		var searchType = "";
    		$.each(params, function(index,item){
        		obj = new Object();
        		obj.PRD_MST_CD 				= item.PRD_MST_CD;
        		obj.PRD_MST_NM 			= item.PRD_MST_NM;
        		obj.PRD_CTG_PATH 			= item.PRD_CTG_PATH;
        		obj.CMN_BRD_NM 				= item.CMN_BRD_NM;
        		obj.PRD_MST_PRC 	= setComma(item.PRD_MST_PRC);
        		obj.PRD_MST_SCH_PRC      = setComma(item.PRD_MST_SCH_PRC);
        		obj.PRD_MST_SEL_STATE 		= item.PRD_MST_SEL_STATE;
        		if(item.PRD_MST_CNL_PC_YN == "Y" && item.PRD_MST_CNL_MB_YN == "Y")
        		{
        			obj.PRD_MST_CHANNEL_TYPE ="전체";
        		}
        		else if(item.PRD_MST_CNL_PC_YN == "Y")
        		{
        			obj.PRD_MST_CHANNEL_TYPE="PC";	
        		}
        		else if(item.PRD_MST_CNL_MB_YN == "Y")
        		{
        			obj.PRD_MST_CHANNEL_TYPE="MOBILE";	
        		}
        		
				obj.FRONT_URL = '<c:out value="${frontDomain}" />';
        		
        		obj.serverDomain 			= '<c:out value="${serverDomain}" />';
        		if ( item.PRD_MST_SEL_STATE_CODE == '<c:out value="${Code.PRODUCT_SELL_STATE_ING}" />' )
        		{
        		    obj.PRD_MST_SEL_STATE_CLASS = "b";
        		}
        		else
        		{
        		    obj.PRD_MST_SEL_STATE_CLASS = "a";
        		}
        		obj.imgpath 		        = item.PRD_IMG_THUM_URL;
				searchType		        = item.SEARCH_THPE;
        		arrayObj.push(obj); //만들어진  object를 배열에 추가
        	});
    		
    		if(searchType == "D"){
    			$("#GFT_MST_PRD_CD").val(obj.PRD_MST_CD);
    		}else{
    			//기본TR삭제
            	$("#productNodata2").remove();
    			$( "#productTemplate2" ).tmpl( arrayObj ).appendTo( "#applyProductList2" );
    		}
    		return true;
    	}
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
    //체크박스 전체 선택
  	$.checkBoxSelect("checkAll_${Code.CATEGORY_TYPE_PC}", "checkRow_${Code.CATEGORY_TYPE_PC}");
    
    // 카테고리팝업호출
	$(document).on("click", "#goCategoryPopup", function () 
    {
		var brandCd = $("#PRD_MST_BRAND_CD").val();
		var env = $("#categoryTypePc").val();		
 		popup('',"1000","300","no","_CategoryPopup");
 		$("#PRD_CTG_ENV").val( env );
 		$("#PRD_CTG_BRAND").val( brandCd );
 		$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/product/searchCategoryPopup.do", "target":"popup_CategoryPopup", "method":"post"}).submit();
    });
	
 	
  	//카테고리 검색 결과
    fnResultCategory = function(params)
    {
    	var bCheck = true;
    	var $obj = $("#applyCategoryList_"+params.PRD_CTG_ENV+" input[name='PRD_CTG_IDXs_"+params.PRD_CTG_ENV+"']");
    	$.each($obj, function(){
    		if( params.CTG_IDX == $(this).val() ){
    			alert("["+params.CTG_PATH+"] 이미 선택된 카테고리입니다.");
    			bCheck = false;
    			return false;
    		}
    	});
    	
    	if( bCheck )
    	{
    		//기본TR삭제 
        	$("#categoryNodata_"+params.PRD_CTG_ENV).remove();
    		
    		var idx = $("#applyCategoryList_"+params.PRD_CTG_ENV).find("tr").length;
        	params.IDX = ++idx;
        	
    	    $("#categoryTemplate").tmpl(params).appendTo("#applyCategoryList_"+params.PRD_CTG_ENV);
    	}
    	return true;
    };
    
 // 사용상품 카테고리 선택삭제 이벤트
    $(document).on("click", "a[id^=goCategoryDelete]", function () 
    {
    	var strArray = $(this).attr("id").split('_');
		var env = strArray[strArray.length-1];
		
    	if( $(".checkRow_"+env+":checked").length == 0 ){
    		alert("삭제할 카테고리를 선택하여 주십시오.");
    		return;
    	}
    	
    	$(".checkRow_"+env+":checked").each(function(i,item){
    		$(item).parentsUntil("tbody").remove();
    	});
        
        if ( $("#applyCategoryList_"+env).children("tr").length == 0 )
        {
        	$("#applyCategoryList_"+env).append('<tr id="categoryNodata_'+env+'"><td colspan="2">카테고리를 검색해 주세요.</td></tr>');
        }
        
        //체크박스 전체 선택
        $(".checkAll_"+env).prop("checked", false);        
    });
    /*--------------카테고리 끝--------------------------*/ 
    
    /*--------------협력업체 --------------------------*/     

    //체크박스 전체 선택
    $.checkBoxSelect("checkAll_Vendor", "checkRowVendor");
    
    // 협력업체검색     
    $(document).on("click", "#goVendorAdd", function () 
    {	
    	//window.open("<c:out value="${serverDomain}"/>/am/site/searchVendorMultiPopup.do","searchVendorMultiPopup","width=800,height=700,scrollbars=yes,target=_blank");
    	popup('',"800","700","no","_searchVendorMultiPopup");
   		$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/site/searchVendorMultiPopup.do", "target":"popup_searchVendorMultiPopup", "method":"post"}).submit();

    });	
    
  //협력업체 중복체크
    fnDuplicationChkVendor = function( selectObj ){
		var bReturn = true;
    	var $obj = $("#applyVendorList input[name='PRD_VEN_CDs']");
    	
    	$.each($obj, function(){
    		if( selectObj == $(this).val() ){
    			bReturn = false;
    			return false;
    		}
    	});
    	return bReturn;
    };
    
    //협력업체선택시 호출되는 메소드
    fnResultVendor = function(params){
    	var bCheck = true;
    	//협력업체중복체크
    	$.each( params, function( index, el ){
    		
	    		if( !fnDuplicationChkVendor( el.VDR_MST_ERP_ID )){
	    			alert("["+el.VDR_MST_ERP_ID+"] 이미 선택된 협력업체입니다.");
					bCheck = false;
	    			return false;
	    		}
    		
    	});
    	if( bCheck ){
        	
        	//배열재정의
        	var arrayObj = new Array();
    		var obj;
    		var searchType = "";
    		$.each(params, function(index,item){
        		obj = new Object();
        		obj.VDR_MST_ERP_ID 		= item.VDR_MST_ERP_ID;
        		obj.VDR_MST_NM 			= item.VDR_MST_NM;
        		obj.VDR_MST_USE_YN 		= item.VDR_MST_USE_YN;
      
        		arrayObj.push(obj); //만들어진  object를 배열에 추가
        	});
    		
    		
            	$("#vendorNodata").remove();
    			$( "#vendorTemplate" ).tmpl( arrayObj ).appendTo( "#applyVendorList" );
    		
    		return true;
    	}
    };

    // 협력업체 선택삭제 이벤트
    $(document).on("click", "#goVendorDelete", function () 
    {
    	if( $(".checkRowVendor:checked").length == 0 ){
    		alert("삭제할 협력업체를 선택하여 주십시오.");
    		return;
    	}
        $("#applyVendorList").children("tr").each(function()
        {
        	if ( $(this).find("input[name='PRD_VEN_CDs']").is(":checked") )
        	{
        		$(this).remove();
        	}
        });
        
        if ( $("#applyVendorList").children("tr").length == 0 )
        {
        	$("#applyVendorList").append('<tr id="vendorNodata"><td colspan="3">협력업체를 검색해 주세요.</td></tr>');
        }
        //체크박스 전체 선택
        $(".checkAll_Vendor").prop("checked", false);
        
    });
    
    
    /*--------------협력업체 끝--------------------------*/ 
    
    /*--------------브랜드 --------------------------*/     
    
    fnResultBrand = function(params){
    	//alert($("#search_1").val());
    	if($("#searchBnd_1").val() == "Y"){
    		fnResultBrand1(params);
    		return true;
    	}
    	
    	if($("#searchBnd_2").val() == "Y"){
    		fnResultBrand2(params);
    		return true;
    	}
    	
    }

    //체크박스 전체 선택
    $.checkBoxSelect("checkAll_Brand", "checkRowBrand");
    
    // 브랜드검색     
    $(document).on("click", "#goBrandAdd", function () 
    {	
    	$("#searchBnd_1").val("Y");
    	$("#searchBnd_2").val("");
    	window.open("<c:out value="${serverDomain}"/>/am/site/searchBrandMultiPopup.do","searchBrandMultiPopup","width=800,height=700,scrollbars=yes,target=_blank");

    });	
    
  //브랜드 중복체크
    fnDuplicationChkBrand = function( selectObj ){
		var bReturn = true;
    	var $obj = $("#applyBrandList input[name='PRD_BND_CDs']");
    	$.each($obj, function(){
    		if( selectObj == $(this).val() ){
    			bReturn = false;
    			return false;
    		}
    	});
    	return bReturn;
    };
    
    //브랜드선택시 호출되는 메소드
    fnResultBrand1 = function(params){
    	var bCheck = true;
    	//브랜드중복체크
    	$.each( params, function( index, el ){
    		
	    		if( !fnDuplicationChkBrand( el.BND_MST_IDX )){
	    			alert("["+el.BND_MST_IDX+"] 이미 선택된 브랜드입니다.");
					bCheck = false;
	    			return false;
	    		}
    		
    	});
    	if( bCheck ){
        	
        	//배열재정의
        	var arrayObj = new Array();
    		var obj;
    		var searchType = "";
    		$.each(params, function(index,item){
        		obj = new Object();
        		obj.BND_MST_IDX 		= item.BND_MST_IDX;
        		obj.BND_MST_BRAND_NM 	= item.BND_MST_BRAND_NM;
        		obj.BND_MST_USE_YN 		= item.BND_MST_USE_YN;
      
        		arrayObj.push(obj); //만들어진  object를 배열에 추가
        	});
    		
    		
            	$("#brandNodata").remove();
    			$( "#brandTemplate" ).tmpl( arrayObj ).appendTo( "#applyBrandList" );
    		
    		return true;
    	}
    };

    // 브랜드 선택삭제 이벤트
    $(document).on("click", "#goBrandDelete", function () 
    {
    	if( $(".checkRowBrand:checked").length == 0 ){
    		alert("삭제할 브랜드를 선택하여 주십시오.");
    		return;
    	}
        $("#applyBrandList").children("tr").each(function()
        {
        	if ( $(this).find("input[name='PRD_BND_CDs']").is(":checked") )
        	{
        		$(this).remove();
        	}
        });
        
        if ( $("#applyBrandList").children("tr").length == 0 )
        {
        	$("#applyBrandList").append('<tr id="brandNodata"><td colspan="3">브랜드를 검색해 주세요.</td></tr>');
        }
        //체크박스 전체 선택
        $(".checkAll_Brand").prop("checked", false);
        
    });
    
    
    
    
    /*--------------쿠폰적용상품 --------------------------*/     

    //체크박스 전체 선택
    $.checkBoxSelect("checkAll_Brand2", "checkRowBrand2");
    
    // 브랜드검색     
    $(document).on("click", "#goBrandAdd2", function () 
    {	
    	$("#searchBnd_1").val("");
    	$("#searchBnd_2").val("Y");
    	window.open("<c:out value="${serverDomain}"/>/am/site/searchBrandMultiPopup.do","searchBrandMultiPopup","width=800,height=700,scrollbars=yes,target=_blank");

    });	
    
  //브랜드 중복체크
    fnDuplicationChkBrand2 = function( selectObj ){
		var bReturn = true;
    	var $obj = $("#applyBrandList2 input[name='PRD_BND_CDs2']");
    	$.each($obj, function(){
    		if( selectObj == $(this).val() ){
    			bReturn = false;
    			return false;
    		}
    	});
    	return bReturn;
    };
    
    //브랜드선택시 호출되는 메소드
    fnResultBrand2 = function(params){
    	var bCheck = true;
    	//브랜드중복체크
    	$.each( params, function( index, el ){
    		
	    		if( !fnDuplicationChkBrand2( el.BND_MST_IDX )){
	    			alert("["+el.BND_MST_IDX+"] 이미 선택된 브랜드입니다.");
					bCheck = false;
	    			return false;
	    		}
    		
    	});
    	if( bCheck ){
        	
        	//배열재정의
        	var arrayObj = new Array();
    		var obj;
    		var searchType = "";
    		$.each(params, function(index,item){
        		obj = new Object();
        		obj.BND_MST_IDX 		= item.BND_MST_IDX;
        		obj.BND_MST_BRAND_NM 	= item.BND_MST_BRAND_NM;
        		obj.BND_MST_USE_YN 		= item.BND_MST_USE_YN;
      
        		arrayObj.push(obj); //만들어진  object를 배열에 추가
        	});
    		
    		
            	$("#brandNodata2").remove();
    			$( "#brandTemplate2" ).tmpl( arrayObj ).appendTo( "#applyBrandList2" );
    		
    		return true;
    	}
    };

    // 브랜드 선택삭제 이벤트
    $(document).on("click", "#goBrandDelete2", function () 
    {
    	if( $(".checkRowBrand2:checked").length == 0 ){
    		alert("삭제할 브랜드를 선택하여 주십시오.");
    		return;
    	}
        $("#applyBrandList2").children("tr").each(function()
        {
        	if ( $(this).find("input[name='PRD_BND_CDs2']").is(":checked") )
        	{
        		$(this).remove();
        	}
        });
        
        if ( $("#applyBrandList2").children("tr").length == 0 )
        {
        	$("#applyBrandList2").append('<tr id="brandNodata2"><td colspan="3">브랜드를 검색해 주세요.</td></tr>');
        }
        //체크박스 전체 선택
        $(".checkAll_Brand2").prop("checked", false);
        
    });
    
    $(document).on("click", "#CPN_MST_LMT_YN_CHK", function () 
   	{
    	if($(this).is(":checked") == true) 
    	{
    		$("#CPN_MST_ISU_CNT").prop("disabled", true);
    		$("#CPN_MST_ISU_CNT").val("");
    		
    	}else
    	{
    		$("#CPN_MST_ISU_CNT").prop("disabled", false);
    	}
   	});
    /*--------------브랜드 끝--------------------------*/ 
    
    
    // 목록 버튼 클릭 이벤트 
    // $(document).on("click", "#goList", function() {
    //    $("#searchForm").attr({"action" : "<c:out value="${serverDomain}" />/am/marketing/eventList.do", "target" : "_self", "method" : "post"}).submit();
    // });
	
    $(document).on("click", "#CPN_MST_PC_YN", function(){
    	
   		if($("#CPN_MST_PC_YN").is(":checked") == false){
   			$("#productNodata").remove();
   			$("#applyProductList").html('<tr id="productNodata"><td colspan="7">상품을 검색해 주세요.</td></tr>');
   			$("#brandNodata2").remove();
   			$("#applyBrandList2").html('<tr id="brandNodata2"><td colspan="3">브랜드를 검색해 주세요.</td></tr>');
   			$("#CPN_MST_PLN_IDX").val('');
   			
   			$("input:radio[name='CPN_MST_TGT_GBN']").attr("checked", false);
   			$("#CPN_MST_PLN_TEX").hide();
   		}
   	});
    
    
 	$(document).on("click", "#CPN_MST_MB_YN", function(){
    	
   		if($("#CPN_MST_MB_YN").is(":checked") == false){
   			$("#productNodata").remove();
   			$("#applyProductList").html('<tr id="productNodata"><td colspan="7">상품을 검색해 주세요.</td></tr>');
   			$("#brandNodata2").remove();
   			$("#applyBrandList2").html('<tr id="brandNodata2"><td colspan="3">브랜드를 검색해 주세요.</td></tr>');
   			$("#CPN_MST_PLN_IDX").val('');
   			
   			$("input:radio[name='CPN_MST_TGT_GBN']").attr("checked", false);
   			$("#CPN_MST_PLN_TEX").hide();
   		}
   	});
 
    // 등록 이벤트
    $(document).on("click", "#goRegist", function() {
    	//alert($("#CPN_MST_MEM_GRD").val());
    	
    	var CPN_MST_GBN = $("input[name=CPN_MST_GBN]:checked").val();
    	var CPN_MST_PTN_SHP_GBN = $("input[name=CPN_MST_PTN_SHP_GBN]:checked").val();
    	
    	if($("#CPN_MST_ISU_MU").val() != "Y"){
    		$("#CPN_MST_ISU_ED_DT_ON").val($("#CPN_MST_ISU_ED_DT").val());
        	$("#CPN_MST_ISU_ED_HH_ON").val($("#CPN_MST_ISU_ED_HH").val());
        	$("#CPN_MST_ISU_ED_MM_ON").val($("#CPN_MST_ISU_ED_MM").val());
		}
  
//     	if($("#CPN_MST_ISU_CNT").val() == "0"){
//     		$("#CPN_MST_LMT_YN").val("Y");
// 		}
    	
    	//alert($("#CPN_MST_ISU_MU").val());
    	//alert($("#CPN_MST_ISU_ED_DT").val());
    	//alert($("#CPN_MST_ISU_ED_DT_ON").val());
    	
//     	if($.trim($("#CPN_MST_IDX").val()) == ""){
// 			alert("쿠폰번호가 없습니다. 관리자에게 문의바랍니다.");
// 			return;
// 		}
    	/*
    	if($.trim($("#CPN_MST_TITLE").val()) == ""){
			alert("고객쿠폰명을 입력해주세요.");
			$("#CPN_MST_TITLE").focus();
			return;
		}
    	if($.trim($("#CPN_MST_ADM_TXT").val()) == ""){
			alert("관리자설명을 입력해주세요.");
			$("#CPN_MST_ADM_TXT").focus();
			return;
		}
    	*/
    
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
    	if(CPN_MST_GBN != "G")
    	{	
	    	if(($("#CPN_MST_ISU_ST_HH").val() == "") || ($("#CPN_MST_ISU_ST_MM").val() == ""))
	    	{
	    		alert("[발급시작시간]을 입력해 주십시오.");
	    		$("#CPN_MST_ISU_ST_HH").focus();
	    		return;
	    	}    	
	    	
	    	if(($("#CPN_MST_ISU_ED_HH").val() == "") || ($("#CPN_MST_ISU_ED_MM").val() == ""))
	    	{
	    		alert("[발급종료시간]을 입력해 주십시오.");
	    		$("#CPN_MST_ISU_ED_HH").focus();
	    		return;
	    	}   
	    	
	    	if($.trim($("#CPN_MST_ISU_ST_DT").val()) == $.trim($("#CPN_MST_ISU_ED_DT").val()))
	    	{
	    		var $stime = parseInt($("#CPN_MST_ISU_ST_HH").val()+$("#CPN_MST_ISU_ST_MM").val());
	        	var $etime = parseInt($("#CPN_MST_ISU_ED_HH").val()+$("#CPN_MST_ISU_ED_MM").val());
	    		if($stime > $etime)
	        	{
	        		alert("[발급시간]이 잘못 입력되었습니다. \n 다시 입력해 주십시오.");
	        		$("#CPN_MST_ISU_ST_HH").focus();
	        		return;
	        	}	
	    	} 	
    	}
    	
    	if(CPN_MST_GBN == "G")
    	{
	    	if(CPN_MST_PTN_SHP_GBN == "R")
	    	{
	    		if($.trim($("#CPN_MST_PTN_SHP_RND").val()) == "")
	       		{
	       			alert("[발급수량]을 입력해 주십시오.");
	       			$("#CPN_MST_PTN_SHP_RND").focus();
	       			return;
	       		}
	    	}
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
    	 
    	if(($("input:checkbox[id=CPN_MST_PC_YN]").is(":checked") == false) && ($("input:checkbox[id=CPN_MST_MB_YN]").is(":checked") == false))
    	{
    		alert("[채널] 반드시 선택해 주십시오.");
    		return;
    	}
    	if(CPN_MST_GBN!="G")
    	{
	    	if($(":radio[name=CPN_MST_MBR_GBN]:checked").length == 0) {
	   		 alert("[회원]을 선택해 주십시오.");
	            return ;
	        }else{
	       	 if($(":radio[name=CPN_MST_MBR_GBN]:checked").val() == "A"){			
	       		 if(($("input:checkbox[id=CPN_MST_NML_YN]").is(":checked") == false) && ($("input:checkbox[id=CPN_MST_SMP_YN]").is(":checked") == false))
	       	    	{
	       	    		alert("[일반/간편회원] 반드시 선택해 주십시오.");
	       	    		return;
	       	    	}
	       	 	}
        	}
    	}
    	
    	if($(":radio[name=CPN_MST_TGT_GBN]:checked").length == 0) {
      		 alert("[쿠폰적용상품]을 선택해 주십시오.");
               return ;           
           }
    	
    	
    	if (confirm("저장 하시겠습니까?")) 
  		{
            $("#frm").attr({"action" : "<c:out value="${serverDomain}" />/am/marketing/onlineCouponFormRegist.do", "target" : "_self", "method" : "post"}).submit();
        }	
      
    });
    
 	// 목록 이벤트
    $(document).on("click", "#goList", function () 
    {
        var $frm = $("#searchForm"); 
        $frm.attr({"action":"<c:out value="${serverDomain}" />/am/marketing/onlineCouponList.do", "target":"_self", "method":"post"}).submit();
    });
});
// 카테고리팝업호출
/* 	registPopup = function ( env )
	{ 	
	alert(env);
	var brandCd = $("#PRD_MST_BRAND_CD").val();
	
		popup('',"700","300","no","_CategoryPopup");
		$("#PRD_CTG_ENV").val( env );
		$("#PRD_CTG_BRAND").val( brandCd );
		$("#searchForm").attr({"action":"<c:out value="${serverDomain}" />/am/product/searchCategoryPopup.do", "target":"popup_CategoryPopup", "method":"post"}).submit();
}; */
//-->
</script>

</body>
</html>
