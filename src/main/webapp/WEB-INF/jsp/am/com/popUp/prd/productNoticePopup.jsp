<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="/WEB-INF/jsp/am/include/head.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="/am/css/style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>상품고시 관리</title>
</head>
<body class="page-popup">
    <div class="modal">
        <div class="modal-wrapper">
            <div class="modal-inner">
				<h2 class="title"><span>상품고시 관리</span></h2>
                
                <!-- 조회 결과 영역 -->
                <div id="attrList">
                	<table cellspacing="0" class="table-col table-b">
						<colgroup>
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
							<col style="width: auto;" />
						</colgroup>
						<thead>
							<tr>
								<th>SSP속성코드</th>
								<th>SSP속성명</th>
								<th>사용 추가</th>
							</tr>
						</thead>
						<tbody>
							<c:choose>
								<c:when test="${not empty list}">
									<c:forEach var="row" items="${list}" varStatus="status">
										<tr>
											<td><c:out value="${row.notiId }" /></td>
											<td><c:out value="${row.notiNm }" /></td>
											<td><a href="javascript:attrSel('${row.notiId}','${row.notiNm}');" class="button small primary"><span>선택</span></a></td>
										</tr>	
							    	</c:forEach>
							    </c:when>
							    <c:otherwise>
							    	<tr>
										<td class="td_no_result" colspan="4">${Code.COMMON_MESSAGE_SEARCH_RESULT_NONE_}</td>
									</tr>
							    </c:otherwise>
							</c:choose>
						</tbody>
					</table>
                </div>
				<div class="grid text-center"><!-- 검색 하단 버튼 -->
                    <a href="javascript:self.close();" class="button small"><span>취소</span></a>
                </div>
            </div>
        </div>
    </div>

<script src="/am/js/ui.js"></script>
<script src="/am/js/common.js"></script>

<script type="text/javascript">
$(function(){
	
    // 선택 data 부모창으로 return
    attrSel = function (notiId, notiNm) {
    	
    	var params = new Array();
    	var obj	= new Object(); 
    	
    	obj.notiId = notiId;
    	obj.notiNm = notiNm;
    	
    	// 사업장 조회 팝업 return function
    	window.opener.fnResultNotice(obj);
		self.close();
    }
});
</script>
</body>
</html>
