<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html class="no-js">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>
<script type="text/javascript" src="<c:out value="${cdnDomain}" />/pc/js/search/admin_ark/js/ark_manufacturer.js"></script>
<script type="text/javascript" src="<c:out value="${cdnDomain}" />/pc/js/search/js/search.js"></script>
</head>
<body class="page-popup">

<div class="modal">
	<div class="modal-wrapper">
	    <div class="modal-inner">
	   		<!-- push-guide start -->
            <div class="push-guide instant">
                <i class="icon"><!-- icon --></i>
                <h3 class="title"><span>주문 조회</span></h3>
            </div>
            <!-- push-guide end -->
            <h4 class="title"><span>기본정보</span></h4>
			<!-- 상세화면 네비게이터  start -->            
			<!-- 상세화면 네비게이터  end -->              
	        <form id="frm" name="frm">        
	        </form>
                    <table class="table-row table-a">
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
                                <th><span>주문 번호</span></th>
                                <td>${result.odrNo} | ${result.itmNo }</td>
                                <th><span>주문 상태</span></th>
                                <td>${result.odrStatsCd} | ${result.odrStatsNm}</td>
                                <th><span>채널 구분</span></th>
                                <td>${result.chSprCd} | </td>
                            </tr>
                            <tr>
                                <th><span>오더 유형</span></th>
                                <td> | ${result.zsysidNm }</td>
                                <th><span>배송 형태</span></th>
                                <td>${result.dlvFormSprCd} | ${result.dlvFormSprNm }</td>
                                <th><span>발주 번호</span></th>
                                <td> - | - </td>
                            </tr>
                           </tbody> 
                            <!-- 기본정보 접기/펼치기 -->
                           <tbody id="orderSearchDetail" style="display: none;" >
                            <tr>
                                <th><span>영업팀</span></th>
                                <td>${result.salsTeamNm}</td>
                                <th><span>영업 담당자</span></th>
                                <td>${result.salsTeamCd} | ${result.salsChrNm } </td>
                                <th><span>영업 CS</span></th>
                                <td> | </td>
                            </tr>
                            <tr>
                                <th><span>구매팀</span></th>
                                <td></td>
                                <th><span>구매 담당자</span></th>
                                <td> | </td>
                                <th><span>운영 담당자</span></th>
                                <td>${result.chrOpID } | </td>
                            </tr>
                        </tbody>
                    </table>
                <!-- 기본정보 접기/펼치기 , 배송희망일 변경 버튼 -->
                <div class="grid section-button-search">  
				<div class="col- text-left">  
					<a href="javascript:orderSearchDetailBtn()" class="button small"><span id="btnText">기본정보펼치기</span></a>
				</div>
					<a href="#" class="button small"><span>배송 희망일 변경</span></a>
			   </div>
			<br>
			<br>
	       
	  <!--  <div class="grid section-button-search">section button
				<a href="#none" id="closePopup" class="button small"><span>닫기</span></a>
			</div> -->
        </div>
        			<!-- tab-list -->
            <div class="tab-list justified"  id="menuViewTab">
                <ul>
                   <li class="in"><a href="#none" data-tab_no="tab1" >고객 정보 </a></li>
                   <li><a href="#none" data-tab_no="tab2" >결재/발주</a></li>
                   <li><a href="#none" data-tab_no="tab3" >영업 정보</a></li>
                   <li><a href="#none" data-tab_no="tab4" >배송 정보</a></li>
                   <li><a href="#none" data-tab_no="tab5" >정산 정보</a></li>
                   <li><a href="#none" data-tab_no="tab6" >변경 이력</a></li>
                   <li><a href="#none" data-tab_no="tab7" >주문 정보</a></li>
                   <li><a href="#none" data-tab_no="tab8" >연계 정보</a></li>
                   <li><a href="#none" data-tab_no="tab9" >물량 배분/분납</a></li>
                   <li><a href="#none" data-tab_no="tab10" >예외 처리</a></li>
                </ul>
            </div>
            <!--  tab-list -->
            
            <!-- 고객정보 tab start-->
            <div id="tab1">                     
<!-- 	   		push-guide start
            <div class="push-guide instant">
			<i class="icon">icon</i>
                <h3 class="title"><span>고객 정보</span></h3> 
            </div>
            push-guide end -->
            <!-- 고객정보 table -->
            <h4 class="title"><span>고객정보</span></h4>
            	<table class="table-row table-a">
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
                                <th><span>사업장</span></th>
                                <td>${result.bzplcId} | ${result.bzplcNm}</td>
                                <th><span>운영 단위</span></th>
                                <td>${result.oprUntId } | ${result.oprUntNm }</td>
                                <th><span>주문부서</span></th>
                                <td>${result.deptId } | ${result.deptNm }</td>
                            </tr>
                            <tr>
                                <th><span>주문자</span></th>
                                <td>${result.memId} | ${result.memNm }</td>
                                <th><span>수령인</span></th>
                                <td colspan=3> | </td>
                            </tr>
                        </tbody>
                    </table>          
                     <h4 class="title"><span>배송지 정보</span></h4>      
                    <!-- 배송지 정보 table -->
                    <table class="table-row table-a">
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
                                <th><span>우편번호</span></th>
                                <td>${result.zpcd}</td>
                                <th><span>주소</span></th>
                                <td>${result.reprAddr }</td>
                                <th><span>상세 주소</span></th>
                                <td>${result.dtlAddr }</td>
                            </tr>
                        </tbody>
                   </table>
                   <!-- 기타정보 table-->
                   	<h4 class="title"><span>기타 정보</span></h4>   
                    <table class="table-row table-a">
                        <colgroup>
                            <col style="width: 10%;" />
                            <col style="width: 20%;" />
                            <col style="width: 10%;" />
                            <col style="width: 20%;" />
                            <col style="width: 10%;" />
                            <col style="width: 20%;" />
                            <col style="width: auto%;" />
                            <col style="width: auto%;" />
                            <col style="width: auto%;" />
                            <col style="width: auto%;" />
                            <col style="width: auto%;" />
                            <col style="width: auto%;" />
                        </colgroup>
                        <tbody>            
                            <tr>
                                <th><span>비용 이체 부서</span></th>
                                <td>
                                <input type="text" class="text" value="${result.expTrnsfDeptId} | ${result.expTrnsfDeptNm}" readonly="readonly"/>
                                <a href="" class="button button-a small"><span>변경</span></a>
                                </td>
                                <th><span>계정 ID</span></th>
                                <td>${result.acctId}</td>
                                <th><span>계정명</span></th>
                                <td colspan=5>${result.acctNm}</td>
                            </tr>
                            <tr>
                                <th><span>고객사 부서 ID</span></th>
                                <td>${result.blngDeptId }</td>
                                <th><span>귀속 부서</span></th>
                                <td colspan=5>
                                <input type="text" class="text" value="${result.blngDeptNm }" readonly="readonly"/>
                                <a href="" class="button button-a small"><span>변경</span></a>
                                </td>
                            </tr>
                            <tr>
                                <th><span>구매 사유</span></th>
                                <td colspan=5><input type="text" class="text xlarge" value="${result. purcRsnNm}"/></td>
                            </tr>
                            <tr>
                                <th><span>상품별 구매 사유</span></th>
                                <td colspan=5><input type="text" class="text xlarge" value="${result.byitmRsnMandNm}"/></td>
                            </tr>
                            <tr>
                                <th rowspan=5><span>고객사 참조 코드</span></th>
                                <td colspan=5>
                                <input type="text" class="text" readonly="readonly"/>
                                <a href="javascript:();" class="icon search2" id=""></a>
                                <input type="text" class="text small" readonly="readonly"/>
                                <input type="text" class="text large" readonly="readonly"/>
                                <input type="text" class="text small" readonly="readonly"/>
                                </td>
                            </tr>
                            <tr>
								<td colspan=5>
                                <input type="text" class="text" readonly="readonly"/>
                                <a href="javascript:();" class="icon search2" id=""></a>
                                <input type="text" class="text small" readonly="readonly"/>
                                <input type="text" class="text large" readonly="readonly"/>
                                <input type="text" class="text small" readonly="readonly"/>
								</td>
                            </tr>
                            <tr>
								<td colspan=5>
                                <input type="text" class="text" readonly="readonly"/>
                                <a href="javascript:();" class="icon search2" id=""></a>
                                <input type="text" class="text small" readonly="readonly"/>
                                <input type="text" class="text large" readonly="readonly"/>
                                <input type="text" class="text small" readonly="readonly"/>
								</td>
                            </tr>
                            <tr>
								<td colspan=5>
                                <input type="text" class="text" readonly="readonly"/>
                                <a href="javascript:();" class="icon search2" id=""></a>
                                <input type="text" class="text small" readonly="readonly"/>
                                <input type="text" class="text large" readonly="readonly"/>
                                <input type="text" class="text small" readonly="readonly"/>
								</td>
                            </tr>
                            <tr>
								<td colspan=5>
                                <input type="text" class="text" readonly="readonly"/>
                                <a href="javascript:();" class="icon search2" id=""></a>
                                <input type="text" class="text small" readonly="readonly"/>
                                <input type="text" class="text large" readonly="readonly"/>
                                <input type="text" class="text small" readonly="readonly"/>
								</td>
                            </tr>
                            <tr>
                                <th rowspan=5><span>일회성 코드</span></th>
								<td colspan=5><input type="text" class="text xlarge"  readonly="readonly" value=""/></td>
                            </tr>
                            <tr>
								<td colspan=5><input type="text" class="text xlarge"  readonly="readonly" value=""/></td>
                            </tr>
                            <tr>
								<td colspan=5><input type="text" class="text xlarge"  readonly="readonly" value=""/></td>
                            </tr>
                            <tr>
								<td colspan=5><input type="text" class="text xlarge"  readonly="readonly" value=""/></td>
                            </tr>
                            <tr>
								<td colspan=5><input type="text" class="text xlarge"  readonly="readonly" value=""/></td>
                            </tr>
                        </tbody>
                   </table>
                   <div class="wrap text-center">
                        <a href="javascript:closePopup();" id="goList" class="button "><span>취소</span></a>
                        <a href="javascript:;" id="goRegist" class="button primary"><span>저장</span></a>
                   </div>
	        </div>
            <!-- 고객정보 tab end-->
            
	        <!-- 결재/발주 tab start -->
	        <div id="tab2" style="display:none">
	        
              <h4 class="title"><span>결재 정보</span></h4>

             	<table class="table-col table-b">
					<colgroup>
						<col style="width: 3%;" />
						<col style="width: 5%;" />
						<col style="width: 13%;" />
						<col style="width: 10%;" />
						<col style="width: 10%;" />
						<col style="width: 10%;" />
						<col style="width: 10%;" />
						<col style="width: 6%;" />
						<col style="width: 10%;" />
						<col style="width: 10%;" />
						<col style="width: 6%;" />
					</colgroup>
					<thead>
						<tr>
							<th>선택</th>
							<th>단계</th>
							<th>회원 ID</th>
							<th>직급</th>
							<th>이름</th>
							<th>위임자 ID</th>
							<th>위임자 명</th>
							<th>상태</th>
							<th>승인 일시</th>
							<th>메모</th>
							<th>결재자 추가</th>
						</tr>
					</thead>
					<tbody>	
						<tr>
							<td>
								<input type="checkbox" class="checkbox"/>
							</td>
							<td>
		           				<select class="select small " name="" id="">
					                <option value="">1차</option>
					                <option value="">2차</option>
					                <option value="">3차</option>
								</select>								
							</td>
							<td>
								<input type="text" class="text small" value="${approvaList.aprvpsnId}" readonly="readonly"/> <a href="javascript:();" class="icon search2" id=""></a>
							</td>
							<td>
								<input type="text" class="text small" value="${approvaList.aprvpsnJbposNm }" readonly="readonly"/>
							</td>
							<td>
								<input type="text" class="text small" value="${approvaList.aprvpsnMemNm }" readonly="readonly"/>
							</td>
							<td>${approvaList.dlgrId}</td>
							<td>${approvaList.dlgrMemNm }</td>
							<td>${approvaList.aprvStatsNm }</td>
							<td>${approvaList.aprvDtm }</td>
							<td>${approvaList.aprvMmoCts }</td>
							<td>
								<a href="#none" class="button small" id=""><span>행 추가</span></a>
							</td>
						</tr>
					</tbody>
				</table> 
				<br>  	
              <h4 class="title"><span>발주 정보</span></h4>

             	<table cellspacing="0" class="table-col table-b">
					<colgroup>
						<col style="width: 10%;" />
						<col style="width: 13%;" />
						<col style="width: 10%;" />
						<col style="width: 10%;" />
						<col style="width: 6%;" />
						<col style="width: 10%;" />
						<col style="width: 20%;" />
						<col style="width: 6%;" />
					</colgroup>
					<thead>
						<tr>
							<th>단계</th>
							<th>회원 ID</th>
							<th>직급</th>
							<th>이름</th>
							<th>상태</th>
							<th>승인 일시</th>
							<th>메모</th>
							<th>결제자 추가</th>
						</tr>
					</thead>
					<tbody>	
						<tr>
							<td>
								<select class="select small " name="" id="">
					                <option value="">1차</option>
					                <option value="">2차</option>
					                <option value="">3차</option>
								</select>
							</td>
							<td>
								<input type="text" class="text small" value="${orderPlacingList.opsnId}" readonly="readonly"/> <a href="javascript:();" class="icon search2" id=""></a>						
							</td>
							<td></td>
							<td>
								<input type="text" class="text small" value="${orderPlacingLis.opsnNm}" readonly="readonly"/>
							</td>
							<td>
								<input type="text" class="text small" value="${orderPlacingList.qtyDstrStatsCd}" readonly="readonly"/>
							</td>
							<td></td>
							<td></td>
							<td>
								<a href="#none" class="button small" id=""><span>행 추가</span></a>
							</td>
						</tr>
					</tbody>
				</table>
				<br>
                <div class="wrap text-center">
                     <a href="javascript:closePopup();" id="goList" class="button "><span>취소</span></a>
                     <a href="javascript:;" id="goRegist" class="button primary"><span>저장</span></a>
                 </div>				          	              
	         </div>
	        <!-- 결재/발주 tab end -->
	              
	        <!-- 영업정보 tab start -->      
	        <div id="tab3" style="display:none">	        
              	<h4 class="title"><span>영업 정보</span></h4>	
            		<table class="table-row table-a">
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
                                <th><span>상품명</span></th>
                                <td>${salesList.prdId} | ${salesList.prdNm}</td>
                                <th><span>영문 상품명</span></th>
                                <td>${salesList.prdEngNm }</td>
                                <th><span>제조원</span></th>
                                <td>${salesList.mnfOriId} | ${salesList.cprtcpNm }</td>
                            </tr>
                            <tr>
                                <th><span>원산지</span></th>
                                <td>${salesList.orgplcCd} | ${salesList.orgplcNm}</td>
                                <th><span>대표 규격</span></th>
                                <td>${salesList.reprSpec}</td>
                                <th><span>Stock No</span></th>
                                <td>${salesList.stkNo }</td>
                            </tr>
                            <tr>
                                <th><span>추가 옵션</span></th>
                                <td colspan=5>
									<div>
										<input type="checkbox" name="shProcStats" id="" value="rfmkSgstn"  />
										<label for="ipt105">Hub 취급 가능여부</label> 
										<input type="checkbox" name="shProcStats" value="" id="transactions"/>
										<label for="ipt106" >단가 계약 여부</label>
										<input type="checkbox" name="shProcStats" value="" id="unableRegister"/>
										<label for="ipt107" >상품 옵션 <a href="javascript:();" class="icon search2" id=""></a></label>
										<input type="checkbox" name="shProcStats" value="" id="processingWait"/>
										<label for="ipt108" >명함 상품 여부 <a href="javascript:();" class="icon search2" id=""></a></label>
									</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>                                                    
              	<h4 class="title"><span>수량/가격 정보</span></h4>	
            		<table class="table-row table-a">
                        <colgroup>
                            <col style="width: 15%;" />
                            <col style="width: 20%;" />
                            <col style="width: 15%;" />
                            <col style="width: 20%;" />
                            <col style="width: 15%;" />
                            <col style="width: 20%;" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th><span>유통 경로</span></th>
                                <td>${salesList.dstrPathCd} | ${salesList.dstrPathNm}</td>
                                <th><span>매출세금코드</span></th>
                                <td>${salesList.txtnTpCd} | ${salesList.txtnTpNm }</td>
                                <th><span>가격 결정일</span></th>
                                <td>${salesList.prcDeciDt }</td>
                            </tr>
                            <tr>
                                <th><span>주문 수량</span></th>
                                <td>${salesList.odrQty }</td>
                                <th><span>원 주문 수량</span></th>
                                <td>${salesList.oriOdrQty }</td>
                                <th><span>최소/배수 수량단위</span></th>
                                <td>- | -</td>
                            </tr>
                            <tr>
                                <th><span>판매가(VAT 제외)</span></th>
                                <td>${salesList.selpr }</td>                           
                                <th><span>판매금액(VAT 제외)</span></th>
                                <td colspan=5>${salesList.saleAmt }</td>
                            </tr>
                            <tr>
                                <th><span>판매가(VAT 포함)</span></th>
                                <td>${salesList.selprVat}</td>                            
                                <th><span>판매금액(VAT 포함)</span></th>
                                <td colspan=5>${salesList.saleAmtVat }</td>
                            </tr>
                        </tbody>
                    </table>
                    <br>                                
	             	<table cellspacing="0" class="table-col table-b">
						<colgroup>
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 25%;" />
						</colgroup>
						<thead>
							<tr>
								<th>가격유형</th>
								<th>수량</th>
								<th>단가</th>
								<th>금액</th>
								<th>비고</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td>노출 판매가</td>
								<td>1</td>
								<td>1000</td>
								<td>1000</td>
								<td>신규가입쿠폰</td>
							</tr>
							<tr>
								<td>옵션</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>물량 할인</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>상품가</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>상품 금액</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>쿠폰 할인</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>상품별 배송비</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>주문 금액(VAT 제외)</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>VAT(매출 부가세)</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>주문 금액(VAT 포함)</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>단가</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>카트 별 배송비</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>총 주문 금액</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table> 
					<br>                   
	             	<table cellspacing="0" class="table-col table-b">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 8%;" />
							<col style="width: 8%;" />
							<col style="width: 8%;" />
							<col style="width: 8%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
						</colgroup>
						<thead>
							<tr>
								<th>주문번호</th>
								<th>상품명</th>
								<th>단가</th>
								<th>수량</th>
								<th>금액(VAT 제외)</th>
								<th>금액(VAT 포함)</th>
								<th>통화</th>
								<th>주문 상태</th>
								<th>반품 여부</th>
								<th>정산 여부</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
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
							</tr>
						</tbody>
					</table>
              	<h4 class="title"><span>매익 정보</span></h4>	
            		<table class="table-row table-a">
                        <colgroup>
                            <col style="width: 15%;" />
                            <col style="width: 20%;" />
                            <col style="width: 15%;" />
                            <col style="width: 20%;" />
                            <col style="width: 15%;" />
                            <col style="width: 20%;" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th><span>판매금액(VAT 제외)</span></th>
                                <td></td>
                                <th><span>현지 통화 금액(추정)</span></th>
                                <td></td>
                                <th><span>매출 환율(추정)</span></th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
	             	<table cellspacing="0" class="table-col table-b">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 5%;" />
							<col style="width: 10%;" />
							<col style="width: 5%;" />
							<col style="width: 7%;" />
							<col style="width: 10%;" />
							<col style="width: 15%;" />
						</colgroup>
						<thead>
							<tr>
								<th>매익율 기준</th>
								<th>금액</th>
								<th>통화</th>
								<th>현지 통화 기준</th>
								<th>통화</th>
								<th>적용 환율</th>
								<th>매익율(%)</th>
								<th>상태</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<!-- 유통경로 변경 (팝업) start-->  
					<div class="push-guide instant">
		                <i class="icon"><!-- icon --></i>
		                <h3 class="title"><span>유통 경로 변경</span></h3>
		            </div>
				       <h4 class="title"><span>기본정보 등록</span></h4>
		           		<table class="table-row table-a">
		                       <colgroup>
		                           <col style="width: 10%;" />
		                           <col style="width: 20%;" />
		                       </colgroup>
		                       <tbody>
		                           <tr>
		                               <th><span>주문자</span></th>
		                               <td>
		                             		<input type="text" class="text large" value=""/>
		                               </td>
		                               <th><span>변경 사유</span></th>
		                               <td>
		                             		<input type="text" class="text large" value=""/>
		                               </td>
		                           </tr>
		                       </tbody>
		                </table>               					                    
				       <h4 class="title"><span>주문 내역</span></h4>
		           		<table class="table-row table-a">
		                       <colgroup>
		                           <col style="width: 5%;" />
		                           <col style="width: 30%;" />
		                       </colgroup>
		                       <tbody>
		                           <tr>
		                              <th><span>유통 경로</span></th>
			                            <td colspan="7">
					           				<select class="select  " name="" id="">
								                <option value="">로컬수출</option>
								                <option value="">내수</option>
											</select>
											<a href="#none" class="button small"><span>적용</span></a>
										</td>
		                           </tr>
		                       </tbody>
		                </table>               					                    
					<!-- 유통경로 변경 (팝업) end -->                    					                    
        		</div>
	        <!-- 영업정보 tab end -->
	        <!-- 배송정보 tab start -->  	          	        
	        <div id="tab4" style="display:none">
              <h4 class="title"><span>배송 정보</span></h4>
           		<table class="table-row table-a">
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
                               <th><span>수령인 명</span></th>
                               <td></td>
                               <th><span>연락처1</span></th>
                               <td></td>
                               <th><span>연락처2</span></th>
                               <td></td>
                           </tr>
                           <tr>
                               <th><span>우편번호</span></th>
                               <td>
                               	<input type="text" class="text"  readonly="readonly" value=""/>
                               	<a href="javascript:();" class="icon search2" id=""></a>
                               </td>
                               <th><span>주소</span></th>
                               <td>
                         		<input type="text" class="text large"  readonly="readonly" value=""/>
                               </td>
                               <th><span>상세 주소</span></th>
                               <td>
                         		<input type="text" class="text large"  readonly="readonly" value=""/>                      			
                               </td>
                           </tr>
                       </tbody>
                </table>                   	      
              <h4 class="title"><span>배송 메모</span></h4>
           		<table class="table-row table-a">
                       <colgroup>
                           <col style="width: 15%;" />
                           <col style="width: auto%;" />
                       </colgroup>
                       <tbody>
                           <tr>
                               <th><span>주문 메모</span></th>
                               <td colspan=5>
								 <input type="text" class="text xlarge"/>                               
                               </td>
                           </tr>
                           <tr>
                               <th><span>배송 메모</span></th>
                               <td colspan=5>
								 <input type="text" class="text xlarge"/>                                    
                               </td>
                           </tr>
                           <tr>
                               <th><span>CS 메모</span></th>
                               <td colspan=5>
								 <input type="text" class="text xlarge" readonly="readonly"/>                                    
                               </td>
                           </tr>
                           <tr>
                               <th><span>협력사 메모</span></th>
                               <td colspan=5>
								 <input type="text" class="text xlarge" readonly="readonly"/>                                     
                               </td>
                           </tr>
 
                       </tbody>
                </table>
              <h4 class="title"><span>배송 기본 정보</span></h4>
           		<table class="table-row table-a">
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
                               <th><span>주문 Block</span></th>
                               <td></td>
                               <th><span>거래 명세표(출고)</span></th>
                               <td colspan="4"></td>
                           </tr>
                           <tr>
                               <th><span>성공 여부</span></th>
                               <td></td>
                               <th><span>SSP 배송 형태</span></th>
                               <td></td>
                               <th><span>SSP 협력사</span></th>
                               <td></td>
                           </tr>
                       </tbody>
                </table>                                         	      
              <h4 class="title"><span>상세 배송 정보</span></h4>
           		<table class="table-row table-a">
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
                               <th><span>배송 형태</span></th>
                               <td></td>
                               <th><span>협력사</span></th>
                               <td></td>
                               <th><span>출고거래명세서</span></th>
                               <td></td>
                           </tr>
                           <tr>
                               <th><span>유형</span></th>
                               <td></td>
                               <th><span>플랜트 ID</span></th>
                               <td></td>
                               <th><span>플랜트 명</span></th>
                               <td></td>
                           </tr>
                           <tr>
                               <th><span>유형</span></th>
                               <td></td>
                               <th><span>플랜트 ID</span></th>
                               <td></td>
                               <th><span>플랜트 명</span></th>
                               <td></td>
                           </tr>
                           <tr>
                               <th><span>배송 방식</span></th>
                               <td></td>
                               <th><span>송장 번호</span></th>
                               <td></td>
                               <th><span>배송 L/T</span></th>
                               <td></td>
                           </tr>
                           <tr>
                               <th><span>배송 희망일</span></th>
                               <td></td>
                               <th><span>납품 가능일</span></th>
                               <td></td>
                               <th><span>배송 예정일</span></th>
                               <td></td>
                           </tr>
                           <tr>
                               <th><span>배송 완료일</span></th>
                               <td></td>
                               <th><span>고객 수령일</span></th>
                               <td></td>
                               <th><span>배송 지연 사유</span></th>
                               <td></td>
                           </tr>
                       </tbody>
                </table>
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 15%;" />
							<col style="width: 20%;" />
							<col style="width: 25%;" />
						</colgroup>
						<thead>
							<tr>
								<th>업무 주체</th>
								<th>배송 관련일</th>
								<th>예정 일자</th>
								<th>처리 일시</th>
								<th>상태</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table> 
              <h4 class="title"><span>[배송방식명] 배송 현황 정보</span></h4>				                                                        	      
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 20%;" />
							<col style="width: 20%;" />
							<col style="width: 20%;" />
							<col style="width: 20%;" />
						</colgroup>
						<thead>
							<tr>
								<th>출발 일자</th>
								<th>배송 기사명</th>
								<th>기사 연락처</th>
								<th>운송 차량 번호</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table>                                                         	      
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 5%;" />
							<col style="width: 10%;" />
							<col style="width: 20%;" />
							<col style="width: 20%;" />
							<col style="width: 20%;" />
						</colgroup>
						<thead>
							<tr>
								<th>순번</th>
								<th>택배사 코드</th>
								<th>택배사 명</th>
								<th>송장 번호</th>
								<th>추적 정보</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table>                                                         	      
			</div>
	        <!-- 배송정보 tab end -->
	        <!-- 정산정보 tab start -->  	          			   
	        <div id="tab5" style="display:none">
              <h4 class="title"><span>기본 정보</span></h4>
           		<table class="table-row table-a">
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
                               <th><span>입고 상태</span></th>
                               <td></td>
                               <th><span>검수 상태</span></th>
                               <td></td>
                               <th><span>정산상태</span></th>
                               <td></td>
                           </tr>
                           <tr>
                               <th><span>정산일</span></th>
                               <td></td>
                               <th><span>결제수단</span></th>
                               <td></td>
                               <th><span>수금 조건</span></th>
                               <td></td>
                           </tr>
                           <tr>
                               <th><span>정산일</span></th>
                               <td colspan="7"></td>
                           </tr>
                       </tbody>
                </table>
              <h4 class="title"><span>고객 입고 현황</span></h4>
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 8%;" />
							<col style="width: 5%;" />
							<col style="width: 12%;" />
							<col style="width: 15%;" />
							<col style="width: 30%;" />
						</colgroup>
						<thead>
							<tr>
								<th>입고 처리자 ID</th>
								<th>입고 처리자</th>
								<th>입고 수량</th>
								<th>단위</th>
								<th>입고 확정일</th>
								<th>등록 일시</th>
								<th>입고 메모</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table>                   
              <h4 class="title"><span>고객 검수 현황</span></h4>
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 5%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
							<col style="width: 15%;" />
						</colgroup>
						<thead>
							<tr>
								<th>순번</th>
								<th>검수 월</th>
								<th>검수 수량</th>
								<th>단위</th>
								<th>검수 여부</th>
								<th>이월/전월 사유</th>
								<th>검수 처리자</th>
								<th>매출 정산 여부</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table>
              <h4 class="title"><span>제각 처리 현황</span></h4>
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 8%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 15%;" />
							<col style="width: 20%;" />
						</colgroup>
						<thead>
							<tr>
								<th>순번</th>
								<th>제각 수량</th>
								<th>단위</th>
								<th>제각 처리일</th>
								<th>제각 금액</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table>				                                                      	      
			</div>
	        <!-- 정산정보 tab end -->
	        <!-- 변경이력 tab start -->  	          			   
	        <div id="tab6" style="display:none">
              <h4 class="title"><span>변경 이력</span></h4>
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 8%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 15%;" />
							<col style="width: 15%;" />
							<col style="width: 15%;" />
							<col style="width: 8%;" />
							<col style="width: 15%;" />
						</colgroup>
						<thead>
							<tr>
								<th>채널 구분</th>
								<th>변경 항목</th>
								<th>변경 필드명</th>
								<th>변경 전 내용</th>
								<th>변경 후 내용</th>
								<th>변경 사유</th>
								<th>담당자</th>
								<th>변경 일시</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table>
              <h4 class="title"><span>납품 가능일 변경 정보</span></h4>
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 8%;" />
							<col style="width: 8%;" />
							<col style="width: 8%;" />
							<col style="width: 20%;" />
						</colgroup>
						<thead>
							<tr>
								<th>변경 요청일</th>
								<th>변경 완료일</th>
								<th>변경 납품 가능일</th>
								<th>지연 사유</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table>						      
			</div>
	        <!-- 변경이력 tab end -->  
	        <!-- 주문정보 tab start -->  			   
	        <div id="tab7" style="display:none">
              <h4 class="title"><span>첨부 파일</span></h4>
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 25%;" />
							<col style="width: 10%;" />
							<col style="width: 5%;" />
						</colgroup>
						<thead>
							<tr>
								<th>문서 유형</th>
								<th>파일명</th>
								<th>크기</th>
								<th></th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table>
              <h4 class="title"><span>주문 상태 정보</span></h4>
           		<table class="table-row table-a">
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
                               <th><span>시운전 여부</span></th>
                               <td></td>
                               <th><span>주문 Block</span></th>
                               <td></td>
                               <th><span>매출 정산 Block</span></th>
                               <td></td>
                           </tr>
                           <tr>
                               <th><span>정산처리 Block</span></th>
                               <td></td>
                               <th><span>주문 변경 Block</span></th>
                               <td colspan="5"></td>
                           </tr>
                           <tr>
                               <th><span>Closing</span></th>
                               <td></td>
                               <th><span>Closing 사유</span></th>
                               <td colspan="5"></td>
                           </tr>
                       </tbody>
                </table>						      
			</div>
	        <!-- 주문정보 tab end -->  
	        <!-- 연계정보 tab start -->  				   
	        <div id="tab8" style="display:none">
              <h4 class="title"><span>주문 상태 정보</span></h4>
           		<table class="table-row table-a">
                       <colgroup>
                           <col style="width: 2%;" />
                           <col style="width: 20%;" />
                       </colgroup>
                       <tbody>
                           <tr>
                               <th><span>P/O NO</span></th>
                               <td>
                             		<input type="text" class="text large" value=""/>
                               </td>
                           </tr>
                       </tbody>
                </table>
              <h4 class="title"><span>발주 송/수신 정보</span></h4>
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 15%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 5%;" />
							<col style="width: 20%;" />
							<col style="width: 10%;" />
						</colgroup>
						<thead>
							<tr>
								<th>구분</th>
								<th>이력 번호</th>
								<th>전송일</th>
								<th>수신일</th>
								<th>성공 여부</th>
								<th>메세지</th>
								<th>이력 파일</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td>
									<input type="text" class="text small" value="" readonly="readonly"/> - <input type="text" class="text xsmall" value="" readonly="readonly"/> 
								</td>
								<td>
									<input type="text" class="text small" value="" readonly="readonly"/>
								</td>
								<td>
									<input type="text" class="text small" value="" readonly="readonly"/>
								</td>
								<td>
									<input type="text" class="text small" value="" readonly="readonly"/>
								</td>
								<td>
									<input type="text" class="text xlarge" value="" readonly="readonly"/>
								</td>
								<td>
									<input type="text" class="text small" value="" readonly="readonly"/>									
								</td>
							</tr>
						</tbody>
				</table>
				<br>
				<br>
                 <div class="wrap text-center">
                      <a href="javascript:closePopup();" id="goList" class="button "><span>취소</span></a>
                      <a href="javascript:;" id="goRegist" class="button primary"><span>저장</span></a>
                 </div>				                
			</div> 
	        <!-- 연계정보 tab end -->  
	        <!-- 물량배분/분납 tab start -->  				  
	        <div id="tab9" style="display:none">
              <h4 class="title"><span>물량배분</span></h4>	
	            <table class="table-col table-b">
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
							<col style="width: 10%;" />
							<col style="width: 10%;" />
						</colgroup>
						<thead>
							<tr>
								<th>주문 번호</th>
								<th>원 품목</th>
								<th>원 주문 수량</th>
								<th>품목</th>
								<th>협력사 ID</th>
								<th>협력사 명</th>
								<th>수량</th>
								<th>배분비율</th>
								<th>생성일</th>
								<th>생성인</th>
								<th>생성인명</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
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
							</tr>
						</tbody>
				</table>        
              <h4 class="title"><span>분납 정보</span></h4>
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 25%;" />
							<col style="width: 10%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />

						</colgroup>
						<thead>
							<tr>
								<th>원 주문번호</th>
								<th>분납 주문 번호</th>
								<th>분납 전</th>
								<th>분납 후</th>
								<th>처리자 ID</th>
								<th>처리자 ID</th>
								<th>처리자 명</th>
								<th>처리 일시</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table>                 
			</div>
	        <!-- 물량배분/분납 tab end -->  
	        <!-- 예외처리 tab start -->  				   
	        <div id="tab10" style="display:none">
              <h4 class="title"><span>예외 처리</span></h4>
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 25%;" />
							<col style="width: 10%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />
							<col style="width: 5%;" />

						</colgroup>
						<thead>
							<tr>
								<th>VOC 유형</th>
								<th>VOC 번호</th>
								<th>VOC 상태</th>
								<th>수량</th>
								<th>단위</th>
								<th>처리 일시</th>
								<th>완료 일시</th>
								<th>반품 주문 번호</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table>
              <h4 class="title"><span>VOC 배송 정보</span></h4>				
           		<table class="table-row table-a">
                       <colgroup>
                           <col style="width: 10%;" />
                           <col style="width: 30%;" />
                           <col style="width: 10%;" />
                           <col style="width: 30%;" />
                       </colgroup>
                       <tbody>
                           <tr>
                               <th><span>배송 형태</span></th>
                               <td></td>
                               <th><span>협력사</span></th>
                               <td></td>
                           </tr>
                       </tbody>
                </table>
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
							<col style="width: 10%;" />
						</colgroup>
						<thead>
							<tr>
								<th>유형</th>
								<th>플랜트 ID</th>
								<th>플랜트 명</th>
								<th>시작일</th>
								<th>종료일</th>
								<th>처리 L/T</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table>                	                 	      
	            <table class="table-col table-b">
						<colgroup>
							<col style="width: 30%;" />
							<col style="width: 10%;" />
							<col style="width: 30%;" />
						</colgroup>
						<thead>
							<tr>
								<th>처리 상태</th>
								<th>업무 담당</th>
								<th>처리 일시</th>
							</tr>
						</thead>
						<tbody>	
							<tr>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
				</table>                	                 	      
			</div>
	        <!-- 예외처리 tab end -->			   
    </div>
</div>
<script src="<c:out value="${serverDomain}" />/am/js/vendor/jquery-1.11.2.min.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/plugins.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
<script type="text/javascript">
$(function (){
    $("#menuViewTab").on("click", "a", function () {
        var this_tab_no = $(this).data('tab_no');      
        $(this).parent().parent().find('a').each( function(i,item){
            if( this_tab_no == $(item).data("tab_no") ){
                $("#"+$(item).data("tab_no")).show();
                $(item).parent().attr("class","in");    
            }else{
                $("#"+$(item).data("tab_no")).hide();
                $(item).parent().attr("class","");
            }
        });
    });
    
	// 상세조회 펼치기/접기 버튼
	orderSearchDetailBtn = function(){
		if($("#orderSearchDetail").css("display") == "none"){
			$("#orderSearchDetail").show();
			$("#btnText").text('기본정보접기');
		}else{
			$("#orderSearchDetail").hide();
			$("#btnText").text('기본정보펼치기');
		}
	}
	
    closePopup = function(){
    	self.close();	
    };
});
</script>
</body>
</html>
