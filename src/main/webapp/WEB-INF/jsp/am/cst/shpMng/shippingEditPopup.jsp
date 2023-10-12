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
                <h3 class="title"><span>배송지 관리</span></h3>
            </div>
            <!-- push-guide end -->
            <!-- <h4 class="title"><span>기본정보</span></h4> -->         
	        <form id="frm" name="frm">
				<input type="hidden" name="MEM_EDIT"	id="MEM_EDIT"  value="${commandMap.MEM_EDIT}" />
				<input type="hidden" id="useYn" name="useYn" value="Y"/>
				<c:choose>
					<c:when test="${commandMap.MEM_EDIT eq 'A'}"><!-- 배송지 추가--> 
					<table class="table-row table-a">
						<colgroup>
							<col style="width: 30%;" />
							<col style="width: 70%;" />
						</colgroup>
						<tbody>					
						<tr>
							<th><span>사업장</span></th>
							<td>
								${dtlData.BZPLC_NM}
								<input type="hidden" name="BZPLC_ID"	id="BZPLC_ID"  value="${dtlData.BZPLC_ID}" />
								<input type="hidden" name="DLVPLC_ID"	id="DLVPLC_ID"  value="X" />
								<input type="hidden" name="BASIS_DLVPLC_YN"	id="BASIS_DLVPLC_YN"  value="N" />    
							</td>
						</tr>
						<tr>						
						<th><span>운영단위</span></th>
							<td>
								${dtlData.OPR_UNT_NM}
								<input type="hidden" name="OPR_UNT_ID" id="OPR_UNT_ID"  value="${dtlData.OPR_UNT_ID}" />
							</td>
						</tr>
						<tr>
							<th><span>부서</span></th>
							<td>
								${dtlData.DEPT_NM}
								<input type="hidden" name="DEPT_ID" id="DEPT_ID" value="${dtlData.DEPT_ID}"/>
							</td>
						</tr>
						<tr>
							<th><span>회원</span></th>
							<td>
								${dtlData.MEM_NM}
								<input type="hidden" name="MEM_ID" id="MEM_ID" value="${dtlData.MEM_ID }" />
							</td>
						</tr>
						<tr>
							<th><span>배송지 유형</span></th>
							<td>
								<input type="radio" id="MOD_BASIS_DLVPLC_YN_Y" name="MOD_BASIS_DLVPLC_YN" value="Y" class="radio" checked="checked">
								<label for="MOD_BASIS_DLVPLC_YN_Y">기본배송지</label>
								<input type="radio" id="MOD_BASIS_DLVPLC_YN_N" name="MOD_BASIS_DLVPLC_YN" value="N" class="radio">
								<label for="MOD_BASIS_DLVPLC_YN_N">추가배송지</label>
							</td>
						</tr>
						<tr>
							<th><span>수령인명</span></th>
							<td>
								<input type="text" name="RCVR_NM" id="RCVR_NM" value="${dtlData.MEM_NM}"/>
							</td>
						</tr>
						<tr>
							<th><span>우편번호<i class="require"><em>필수입력</em></i></span></th>
							<td>
								<input type="text" name="D_ZPCD" id="D_ZPCD" class="text searchBzplc" value="" readonly />
								<a href="javascript:searchZipCodeMem('D_ZPCD', 'D_REPR_ADDR', 'D_DTL_ADDR', '')" class="icon search2 bzplcPopup"></a>
							</td>
						</tr>
						<tr>
							<th><span>주소</span></th>
							<td>
								<input type="text" name="D_REPR_ADDR" id="D_REPR_ADDR" class="text searchBzplc" value="" readonly />
							</td>
						</tr>
						<tr>
							<th><span>상세주소<i class="require"><em>필수입력</em></i></span></th>
							<td>
								<input type="text" name="D_DTL_ADDR" id="D_DTL_ADDR" class="text searchBzplc" value=""  />
							</td>
						</tr>
						<tr>
							<th><span>전화번호<i class="require"><em>필수입력</em></i></span></th>
							<td>
								<select class="select" name="D_MP_NO1" id="D_MP_NO1">
									<option value="">선택</option>
									<option value="010">010</option>
										<option value="011">011</option>
										<option value="016">016</option>
										<option value="017">017</option>
										<option value="018" >018</option>
										<option value="019">019</option>
										</select>
								<input type="text" name="D_MP_NO2" id="D_MP_NO2" class="text number" value="" maxlength="4"/> - 
								<input type="text" name="D_MP_NO3" id="D_MP_NO3" class="text number" value="" maxlength="4"/>
							</td>
						</tr>
						<tr>
							<th><span>휴대폰번호</span></th>
							<td>
								<select class="select" name="D_TEL_NO1" id="D_TEL_NO1"  >
									<option value="">선택</option>
									<option value="02">02</option>
									<option value="031">031</option>
									<option value="042">042</option>
									<option value="053">053</option>
									<option value="062">062</option>
									<option value="053">053</option>
									<option value="051">051</option>
									<option value="033">033</option>
									<option value="032">032</option>
									<option value="064">064</option>
									<option value="041">041</option>
									<option value="043">043</option>
									<option value="054">054</option>
									<option value="055">055</option>
									<option value="063">063</option>
									<option value="061">061</option>
								 </select>
								<input type="text" name="D_TEL_NO2" id="D_TEL_NO2" class="text number" maxlength="4" /> - 
								<input type="text" name="D_TEL_NO3" id="D_TEL_NO3" class="text number" maxlength="4"/>
							</td>
						</tr>							
					</tbody>
				</table>
			   <div class="wrap text-center">
					<a href="javascript:closePopup();" id="goList" class="button "><span>취소</span></a>
					<a href="javascript:;" id="goDlvPlcRegist" class="button primary"><span>${commandMap.SAVE_BT_NM}</span></a>
			   </div>
				</c:when>
				<c:when test="${commandMap.MEM_EDIT eq 'E'}"><!-- 배송지 수정 -->  
				<table class="table-row table-a">
							<colgroup>
								<col style="width: 30%;" />
								<col style="width: 70%;" />
							</colgroup>
							<tbody>					
							<tr>
								<th><span>사업장</span></th>
								<td>
									${dtlData.BZPLC_NM}
									<input type="hidden" name="BZPLC_ID"	id="BZPLC_ID"  value="${dtlData.BZPLC_ID}" />
									<input type="hidden" name="DLVPLC_ID"	id="DLVPLC_ID"  value="${dtlData.DLVPLC_ID}" />
									<input type="hidden" name="BASIS_DLVPLC_YN"	id="BASIS_DLVPLC_YN"  value="${dtlData.BASIS_DLVPLC_YN}" />    
								</td>
							</tr>
							<tr>						
							<th><span>운영단위</span></th>
								<td>
									${dtlData.OPR_UNT_NM}
									<input type="hidden" name="OPR_UNT_ID" id="OPR_UNT_ID"  value="${dtlData.OPR_UNT_ID}" />
								</td>
							</tr>
							<tr>
								<th><span>부서</span></th>
								<td>
									${dtlData.DEPT_NM}
									<input type="hidden" name="DEPT_ID" id="DEPT_ID" value="${dtlData.DEPT_ID}" />
								</td>
							</tr>
							<tr>
								<th><span>회원</span></th>
								<td>
									${dtlData.MEM_NM}
									<input type="hidden" name="MEM_ID" id="MEM_ID" value="${dtlData.MEM_ID }" />
								</td>
							</tr>
							<tr>
								<th><span>배송지 유형</span></th>
								<td>
									<input type="radio" id="MOD_BASIS_DLVPLC_YN_Y" name="MOD_BASIS_DLVPLC_YN" value="Y" class="radio" ${dtlData.BASIS_DLVPLC_YN eq 'Y' ? 'checked="checked"' : ''}>
									<label for="MOD_BASIS_DLVPLC_YN_Y">기본배송지</label>
									<input type="radio" id="MOD_BASIS_DLVPLC_YN_N" name="MOD_BASIS_DLVPLC_YN" value="N" class="radio" ${dtlData.BASIS_DLVPLC_YN eq 'N' ? 'checked="checked"' : ''}>
									<label for="MOD_BASIS_DLVPLC_YN_N">추가배송지</label>
								</td>
							</tr>
							<tr>
								<th><span>수령인명</span></th>
								<td>
									<input type="text" name="RCVR_NM" id="RCVR_NM" value="${dtlData.RCVR_NM}"/>
								</td>
							</tr>
							<tr>
								<th><span>우편번호<i class="require"><em>필수입력</em></i></span></th>
								<td>
									<input type="text" name="D_ZPCD" id="D_ZPCD" class="text searchBzplc" value="${dtlData.D_ZPCD}" readonly />
									<a href="javascript:searchZipCodeMem('D_ZPCD', 'D_REPR_ADDR', 'D_DTL_ADDR', '')" class="icon search2 bzplcPopup"></a>
								</td>
							</tr>
							<tr>
								<th><span>주소</span></th>
								<td>
									<input type="text" name="D_REPR_ADDR" id="D_REPR_ADDR" class="text searchBzplc" value="${dtlData.D_REPR_ADDR}" readonly />
								</td>
							</tr>
							<tr>
								<th><span>상세주소<i class="require"><em>필수입력</em></i></span></th>
								<td>
									<input type="text" name="D_DTL_ADDR" id="D_DTL_ADDR" class="text searchBzplc" value="${dtlData.D_DTL_ADDR}"  />
								</td>
							</tr>
							<tr>
								<th><span>전화번호<i class="require"><em>필수입력</em></i></span></th>
								<td>
								<c:choose>
								<c:when test="${not empty dtlData.D_MP_NO }">
								<c:set var="D_MP_NO" value="${fn:split(dtlData.D_MP_NO,'-')}"/>
									<select class="select" name="D_MP_NO1" id="D_MP_NO1">
										<option value="">선택</option>
										<option value="010" ${D_MP_NO[0] eq '010' ? 'selected="selected"' : ''}>010</option>
											<option value="011" ${D_MP_NO[0] eq '011' ? 'selected="selected"' : ''}>011</option>
											<option value="016" ${D_MP_NO[0] eq '016' ? 'selected="selected"' : ''}>016</option>
											<option value="017" ${D_MP_NO[0] eq '017' ? 'selected="selected"' : ''}>017</option>
											<option value="018" ${D_MP_NO[0] eq '018' ? 'selected="selected"' : ''}>018</option>
											<option value="019" ${D_MP_NO[0] eq '019' ? 'selected="selected"' : ''}>019</option>
											</select>
									<input type="text" name="D_MP_NO2" id="D_MP_NO2" class="text number" value="${D_MP_NO[1]}" maxlength="4"/> - 
									<input type="text" name="D_MP_NO3" id="D_MP_NO3" class="text number" value="${D_MP_NO[2]}" maxlength="4"/>
									</c:when>
									<c:otherwise>
									<select class="select" name="D_MP_NO1" id="D_MP_NO1">
										<option value="">선택</option>
										<option value="010">010</option>
											<option value="011">011</option>
											<option value="016">016</option>
											<option value="017">017</option>
											<option value="018" >018</option>
											<option value="019">019</option>
											</select>
									<input type="text" name="D_MP_NO2" id="D_MP_NO2" class="text number" value="" maxlength="4"/> - 
									<input type="text" name="D_MP_NO3" id="D_MP_NO3" class="text number" value="" maxlength="4"/>
									</c:otherwise>
									</c:choose>
								</td>
							</tr>
							<tr>
								<th><span>휴대폰번호</span></th>
								<td>
									<c:choose>
								<c:when test="${not empty dtlData.D_TEL_NO }">
								<c:set var="D_TEL_NO" value="${fn:split(dtlData.D_TEL_NO,'-')}"/>
									<select class="select" name="D_TEL_NO1" id="D_TEL_NO1"  >
										<option value="">선택</option>
										<option value="02" ${D_TEL_NO[0] eq '02' ? 'selected="selected"' : ''}>02</option>
											<option value="031" ${D_TEL_NO[0] eq '031' ? 'selected="selected"' : ''}>031</option>
											<option value="042" ${D_TEL_NO[0] eq '042' ? 'selected="selected"' : ''}>042</option>
											<option value="053" ${D_TEL_NO[0] eq '053' ? 'selected="selected"' : ''}>053</option>
											<option value="062" ${D_TEL_NO[0] eq '062' ? 'selected="selected"' : ''}>062</option>
											<option value="053" ${D_TEL_NO[0] eq '053' ? 'selected="selected"' : ''}>053</option>
											<option value="051" ${D_TEL_NO[0] eq '051' ? 'selected="selected"' : ''}>051</option>
											<option value="033" ${D_TEL_NO[0] eq '033' ? 'selected="selected"' : ''}>033</option>
											<option value="032" ${D_TEL_NO[0] eq '032' ? 'selected="selected"' : ''}>032</option>
											<option value="064" ${D_TEL_NO[0] eq '064' ? 'selected="selected"' : ''}>064</option>
											<option value="041" ${D_TEL_NO[0] eq '041' ? 'selected="selected"' : ''}>041</option>
											<option value="043" ${D_TEL_NO[0] eq '043' ? 'selected="selected"' : ''}>043</option>
											<option value="054" ${D_TEL_NO[0] eq '054' ? 'selected="selected"' : ''}>054</option>
											<option value="055" ${D_TEL_NO[0] eq '055' ? 'selected="selected"' : ''}>055</option>
											<option value="063" ${D_TEL_NO[0] eq '063' ? 'selected="selected"' : ''}>063</option>
											<option value="061" ${D_TEL_NO[0] eq '061' ? 'selected="selected"' : ''}>061</option>
											</select>
									<input type="text" name="D_TEL_NO2" id="D_TEL_NO2" class="text number" value="${D_TEL_NO[1]}" maxlength="4" /> - 
									<input type="text" name="D_TEL_NO3" id="D_TEL_NO3" class="text number" value="${D_TEL_NO[2]}" maxlength="4"/>
									</c:when>
									<c:otherwise>
									<select class="select" name="D_TEL_NO1" id="D_TEL_NO1"  >
										<option value="">선택</option>
										<option value="02">02</option>
										<option value="031">031</option>
										<option value="042">042</option>
										<option value="053">053</option>
										<option value="062">062</option>
										<option value="053">053</option>
										<option value="051">051</option>
										<option value="033">033</option>
										<option value="032">032</option>
										<option value="064">064</option>
										<option value="041">041</option>
										<option value="043">043</option>
										<option value="054">054</option>
										<option value="055">055</option>
										<option value="063">063</option>
										<option value="061">061</option>
									 </select>
									<input type="text" name="D_TEL_NO2" id="D_TEL_NO2" class="text number" maxlength="4" /> - 
									<input type="text" name="D_TEL_NO3" id="D_TEL_NO3" class="text number" maxlength="4"/>
									</c:otherwise>
								</c:choose>
								</td>
							</tr>							
						</tbody>
					</table>
				   <div class="wrap text-center">
						<a href="javascript:closePopup();" id="goList" class="button "><span>취소</span></a>
						<a href="javascript:" id="goDlvPlcDelete" class="button "><span>삭제</span></a>
						<a href="javascript:;" id="goDlvPlcRegist" class="button primary"><span>${commandMap.SAVE_BT_NM}</span></a>
				   </div>
					</c:when>
					<c:otherwise><!-- 배송지 생성 --> 
				<table class="table-row table-a">
					<colgroup>
						<col style="width: 30%;" />
						<col style="width: 70%;" />
					</colgroup>
					<tbody>					
					<tr>
						<th><span>사업장</span></th>
						<td>
							<input type="text" name="BZPLC_NM" id="BZPLC_NM" value="" readonly />
							<input type="hidden" name="BZPLC_ID"	id="BZPLC_ID"  value="" />
							<input type="hidden" name="DLVPLC_ID"	id="DLVPLC_ID"  value="X" />
							<input type="hidden" name="BASIS_DLVPLC_YN"	id="BASIS_DLVPLC_YN"  value="N" />    
						</td>
					</tr>
					<tr>						
					<th><span>운영단위</span></th>
						<td>
							<input type="text" name="OPR_UNT_NM" id="OPR_UNT_NM" value="" readonly />
							<input type="hidden" name="OPR_UNT_ID" id="OPR_UNT_ID"  value="" />
						</td>
					</tr>
					<tr>
						<th><span>부서</span></th>
						<td>
							<input type="text" name="DEPT_NM" id="DEPT_NM" value="" readonly/>
							<input type="hidden" name="DEPT_ID" id="DEPT_ID" value=""/>
						</td>
					</tr>
					<tr>
						<th><span>회원<i class="require"><em>필수입력</em></i></span></th>
						<td>
							<input type="text" name="MEM_NM" id="MEM_NM" value="" readonly/>
							<input type="hidden" name="MEM_ID" id="MEM_ID" value="" />
							<a href="#" class="icon search2 bzplcPopup"></a>
						</td>
					</tr>
					<tr>
						<th><span>배송지 유형</span></th>
						<td>
							<input type="radio" id="MOD_BASIS_DLVPLC_YN_Y" name="MOD_BASIS_DLVPLC_YN" value="Y" class="radio"  checked="checked">
							<label for="MOD_BASIS_DLVPLC_YN_Y">기본배송지</label>
							<input type="radio" id="MOD_BASIS_DLVPLC_YN_N" name="MOD_BASIS_DLVPLC_YN" value="N" class="radio">
							<label for="MOD_BASIS_DLVPLC_YN_N">추가배송지</label>
						</td>
					</tr>
					<tr>
						<th><span>수령인명</span></th>
						<td>
							<input type="text" name="RCVR_NM" id="RCVR_NM" value=""/>
						</td>
					</tr>
					<tr>
						<th><span>우편번호<i class="require"><em>필수입력</em></i></span></th>
						<td>
							<input type="text" name="D_ZPCD" id="D_ZPCD" class="text searchBzplc" value="" readonly />
							<a href="javascript:searchZipCodeMem('D_ZPCD', 'D_REPR_ADDR', 'D_DTL_ADDR', '')" class="icon search2 bzplcPopup"></a>
						</td>
					</tr>
					<tr>
						<th><span>주소</span></th>
						<td>
							<input type="text" name="D_REPR_ADDR" id="D_REPR_ADDR" class="text searchBzplc" value="" readonly />
						</td>
					</tr>
					<tr>
						<th><span>상세주소<i class="require"><em>필수입력</em></i></span></th>
						<td>
							<input type="text" name="D_DTL_ADDR" id="D_DTL_ADDR" class="text searchBzplc" value=""  />
						</td>
					</tr>
					<tr>
						<th><span>전화번호<i class="require"><em>필수입력</em></i></span></th>
						<td>
							<select class="select" name="D_MP_NO1" id="D_MP_NO1">
								<option value="">선택</option>
								<option value="010">010</option>
									<option value="011">011</option>
									<option value="016">016</option>
									<option value="017">017</option>
									<option value="018" >018</option>
									<option value="019">019</option>
									</select>
							<input type="text" name="D_MP_NO2" id="D_MP_NO2" class="text number" value="" maxlength="4"/> - 
							<input type="text" name="D_MP_NO3" id="D_MP_NO3" class="text number" value="" maxlength="4"/>
						</td>
					</tr>
					<tr>
						<th><span>휴대폰번호</span></th>
						<td>
							<select class="select" name="D_TEL_NO1" id="D_TEL_NO1"  >
								<option value="">선택</option>
								<option value="02">02</option>
								<option value="031">031</option>
								<option value="042">042</option>
								<option value="053">053</option>
								<option value="062">062</option>
								<option value="053">053</option>
								<option value="051">051</option>
								<option value="033">033</option>
								<option value="032">032</option>
								<option value="064">064</option>
								<option value="041">041</option>
								<option value="043">043</option>
								<option value="054">054</option>
								<option value="055">055</option>
								<option value="063">063</option>
								<option value="061">061</option>
							 </select>
							<input type="text" name="D_TEL_NO2" id="D_TEL_NO2" class="text number" maxlength="4" /> - 
							<input type="text" name="D_TEL_NO3" id="D_TEL_NO3" class="text number" maxlength="4"/>
						</td>
					</tr>							
				</tbody>
			</table>
		   <div class="wrap text-center">
				<a href="javascript:closePopup();" id="goList" class="button "><span>취소</span></a>
				<a href="javascript:;" id="goDlvPlcRegist" class="button primary"><span>${commandMap.SAVE_BT_NM}</span></a>
		   </div>
			</c:otherwise>
		</c:choose>
		</form>	
		</div>   
    </div>
</div>
<script src="<c:out value="${serverDomain}" />/am/js/vendor/jquery-1.11.2.min.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/plugins.js"></script>
<script src="<c:out value="${serverDomain}" />/am/js/common.js"></script>
<script type="text/javascript">
$(function (){

	//***********************************************************************************************************//
	 //***********배송지삭제처리
	$(document).on("click", "#goDlvPlcDelete", function(){
		
		var isBasic = $("#BASIS_DLVPLC_YN").val();
		if(isBasic == "Y" ){
			alert("기본배송지는 삭제할 수 없습니다.");
			return;
		}
		


			if(confirm("삭제 하시겠습니까?")){
				$("#useYn").val("N");
				var $frm = $("#frm");
				$.ajax({
					type    : "POST",
					url     : "<c:out value="${serverDomain}" />/am/cst/shpMng/saveDlvplc.json",
					data    : $frm.serialize(),
					dataType : "json",
					async 	: false,
					success : function(data) {
						//console.log(JSON.stringify(data));
						if(data.model.resultMemState =="Y"){
							alert("삭제되었습니다.");	
							opener.document.location.reload();
							self.close();

						}else{
							alert("삭제 중 에러가 발생하였습니다.");	
						}
						
					},
					error   : function(xhr,status,error) {
						alert("삭제 중 에러가 발생하였습니다.");	
					}
				});
				
			}

	});

	//***********배송지등록처리
	$(document).on("click", "#goDlvPlcRegist", function(){

		var isBasic = $("#BASIS_DLVPLC_YN").val();
		var sMOD_BASIS_DLVPLC_YN = $("input[name = 'MOD_BASIS_DLVPLC_YN']:checked").val();
		var sMEM_ID = $("#MEM_ID").val();
		var sD_ZPCD = $("#D_ZPCD").val();
		var sD_DTL_ADDR = $("#D_DTL_ADDR").val();
		var sD_MP_NO1 = $("#D_MP_NO1 option:selected").val();
		var sD_MP_NO2 = $.trim($("#D_MP_NO2").val());	
		var sD_MP_NO3 = $.trim($("#D_MP_NO3").val());


		if(isBasic == "Y" && sMOD_BASIS_DLVPLC_YN == "N"){
			alert("기본배송지를 추가배송지로 변경할 수 없습니다.");
			return;
		}
		
		if(sMEM_ID == ""){
			alert("회원은 필수 입력항목입니다.");
			return;
		}

		if(sD_ZPCD == ""){
			alert("우편번호는 필수 입력항목입니다.");
			return;
		}

		if(sD_DTL_ADDR == ""){
			alert("상세주소는 필수 입력항목입니다.");
			return;
		}

		if(sD_MP_NO1 == "" || sD_MP_NO2 == "" || sD_MP_NO3 == "" ){
			alert("전화번호은 필수 입력항목입니다.");
			return;
		}





			if(confirm("등록 하시겠습니까?")){
				$("#useYn").val("Y");
				var $frm = $("#frm");
				$.ajax({
					type    : "POST",
					url     : "<c:out value="${serverDomain}" />/am/cst/shpMng/saveDlvplc.json",
					data    : $frm.serialize(),
					dataType : "json",
					async 	: false,
					success : function(data) {
						//console.log(JSON.stringify(data));
						if(data.model.resultMemState =="Y"){
							alert("등록되었습니다.");	
							opener.document.location.reload();
							self.close();
						}else{
							alert("등록 중 에러가 발생하였습니다.");	
						}
						
					},
					error   : function(xhr,status,error) {
						alert("등록 중 에러가 발생하였습니다.");	
					}
				});
				
			}

	});
	
	//***********************************************************************************************************//
    closePopup = function(){
		if(confirm("취소 하시겠습니까?")){
			self.close();	
		}    	
    };
});

//**************************************************************************************************************//
//******************************우편번호찾기 시작************************************************//
//**************************************************************************************************************//
function searchZipCodeMem(postCode, address, detailAddress, extraAddress) {
	jQuery.ajax({
		url: "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",
		type: "get",
		dataType: "script",
		cache: true,
		success: function() {
			execPostCodeMem(postCode, address, detailAddress, extraAddress);
		}
	});
}

function execPostCodeMem(postCode, address, detailAddress, extraAddress) {
	new daum.Postcode({
        oncomplete: function(data) {	// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            var addr = '';		// 주소 변수
            var extraAddr = ''; // 참고항목 변수
			
            // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            // R : 도로명주소, J : 지번주소
            if (data.userSelectedType === 'R') {
                addr = data.roadAddress;
            } else {
                addr = data.jibunAddress;
            }
            
            // 참고항목 정보
            if("" != extraAddress) {
            	// 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
	            if(data.userSelectedType === 'R'){
	                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
	                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
	                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
	                    extraAddr += data.bname;
	                }
	                // 건물명이 있고, 공동주택일 경우 추가한다.
	                if(data.buildingName !== '' && data.apartment === 'Y'){
	                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
	                }
	                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
	                if(extraAddr !== ''){
	                    extraAddr = ' (' + extraAddr + ')';
	                }
	                // 조합된 참고항목을 해당 필드에 넣는다.
	                document.getElementById(extraAddress).value = extraAddr;
	            } else {
	                document.getElementById(extraAddress).value = '';
	            }
            }
            
            // 우편번호 정보를 해당 필드에 넣는다.
            if("" != postCode) {
            	document.getElementById(postCode).value = data.zonecode;
            }
            
            // 주소 정보를 해당 필드에 넣는다.
            if("" != address) {
            	document.getElementById(address).value = addr;
            }
            
           	if("" != detailAddress) {
           		// 커서를 상세주소 필드로 이동한다.
            	document.getElementById(detailAddress).focus();
           	}
        }
    }).open();
}    

//**************************************************************************************************************//
//******************************우편번호찾기 끝************************************************//
//**************************************************************************************************************//
</script>
</body>
</html>
