<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html style="height:100%">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge; charset=UTF-8"/>
<script src="https://code.jquery.com/jquery-2.0.3.min.js"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" type="text/css"/>
<link rel="stylesheet" href="${hostOz}/oz80/ozhviewer/ui.dynatree.css" type="text/css"/>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<script type="text/javascript" src="${hostOz}/oz80/ozhviewer/jquery.dynatree.js" charset="utf-8"></script>
<script type="text/javascript" src="${hostOz}/oz80/ozhviewer/OZJSViewer.js" charset="utf-8"></script>
<script type="text/javascript">
//뷰어 패러미터, 함수, 이벤트 함수 관련 내용은 도움말("OZRV_ko_kr.chm")을 참고하시기 바랍니다.
/*
 보고서 저장 시 발생하는 이벤트입니다.
 code 저장 성공 여부(0 : 실패, 1 : 성공)
 path 파일 경로
 filename 파일 이름
 pagecount 저장된 페이지 수. 여러 페이지의 보고서를 한 페이지로 저장한 경우에는 1이 리턴됨
 filepaths 뷰어가 실제 저장한 모든 파일의 경로와 이름. 파일이 여러 개일 경우 "|"를 구분자로 하여 리턴됨
 */
function OZExportCommand_OZViewer(code, path, filename, pagecount, filepaths) {
	if(code=="1") {
	    alert("페이지 수 : " + pagecount);
	}
}
/*
 보고서 생성 단계별로 발생하는 이벤트입니다.
 step 보고서 생성 단계(0 : 뷰어 실행 옵션 설정, 1 : 보고서 파일 다운로드, 2 : 보고서 템플릿 생성, 3 : 데이터 다운로드, 4 : 보고서 바인딩)
 state 보고서 생성 상태(1 : 시작, 2 : 완료)
 reportname 보고서 이름
 */
function OZProgressCommand_OZViewer(step, state, reportname) {
	if(step == "4" && state == "2"){
    	alert("보고서 생성 단계 : " + step+" \n보고서 생성 상태 : " + state+"\n보고서 이름 : " + reportname);
	}
}

var reports = [
    {
            "REPORT_NAME": "견적서(상품상세)"
          , "REPORT_ID": "/QUO/QUO00001"
          , "PARAMETERS": ["CO_CD", "PRD_ID", "SELL_QTY", "MBR_ID", "BZPLC_ID", "OPR_UNIT_ID", "CUST_SPR_CD"]
    }
  , {
            "REPORT_NAME": "견적서(주문)"
          , "REPORT_ID": "/QUO/QUO00002"
          , "PARAMETERS": ["CO_CD", "ODRPSN_ID", "COND_DTLS", "SES_ID"]
    }
  , {
            "REPORT_NAME": "주문거래명세서"
          , "REPORT_ID": "/ORD/ORD00001"
          , "PARAMETERS": ["CO_CD", "BZPLC_ID", "COND_DTLS", "SES_ID"]
    }
  , {
            "REPORT_NAME": "출고거래명세서(공통, 판매가 유)"
          , "REPORT_ID": "/OUT_COM/OUT00000_1(price)"
          , "PARAMETERS": ["CO_CD", "BZPLC_ID", "GDOC_NO"]
    }
  , {
            "REPORT_NAME": "출고거래명세서(공통, 판매가 무)"
          , "REPORT_ID": "/OUT_COM/OUT00000_2(nonprice)"
          , "PARAMETERS": ["CO_CD", "BZPLC_ID", "GDOC_NO"]
    }
//   , {
//             "REPORT_NAME": "출고거래명세서(주문, 판매가 유)"
//           , "REPORT_ID": "/OUT_운영단위명/OUT00001(price)"
//           , "PARAMETERS": ["CO_CD", "BZPLC_ID", "GDOC_NO"]
//     }
//   , {
//            "REPORT_NAME": "출고거래명세서(주문, 판매가 무)"
//          , "REPORT_ID": "/OUT_운영단위명/OUT00002(nonprice)"
//          , "PARAMETERS": ["CO_CD", "BZPLC_ID", "GDOC_NO"]
//     }
  , {
           "REPORT_NAME": "품의서"
         , "REPORT_ID": "/APR/APR00001"
         , "PARAMETERS": ["CO_CD", "BZPLC_ID", "ODR_NO", "LANG_CD"]
    }
  , {
           "REPORT_NAME": "장바구니 인쇄"
         , "REPORT_ID": "/CAR/CAR00001"
         , "PARAMETERS": ["CO_CD", "MBR_ID", "COND_DTLS", "SES_ID"]
    }            
];


function fn_findReport(reportId) {
	for (var i=0; i < reports.length; i++) {
		if (reports[i].REPORT_ID === reportId) {
			return reports[i];
		}
	}
	
	return null;
}

function fn_ozStart()
{
	var params = [];
	<c:forEach var="gdoc" items="${gdocs}" varStatus="status">
		params.push({
			  "REPORT_ID": "${gdoc.RPT_URL}"
			, "VALUES": ["${gdoc.CO_CD}", "${gdoc.BZPLC_ID}", "${gdoc.GDOC_NO}"]
		});
	</c:forEach>
	
	//오즈뷰어 패러미터 설정
	SetOZParamters_OZViewer = function(){
		
		var oz = document.getElementById("OZViewer");
		var childCnt = params.length - 1;              //cihld 보고서 count
		var rprt1 = fn_findReport(params[0].REPORT_ID);
		var tmp1 = rprt1.REPORT_ID.split("/");
		
		oz.sendToActionScript("viewer.childcount", childCnt.toString()); 	     // 멀티보고서의 child 개수 (전체개수-1)
		oz.sendToActionScript("viewer.focus_doc_index","0");     // 처음 보여지는 보고서 번호(0부터 시작)
		oz.sendToActionScript("viewer.showtree","false");         // 트리창 표시
		oz.sendToActionScript("print.alldocument","true");       // 멀티 보고서 한번에 인쇄
		oz.sendToActionScript("global.concatpage","true");       // 멀티 보고서를 하나의 보고서처럼 보여줌. 페이지 이어짐
		oz.sendToActionScript("global.inheritparameter","true"); // 첫번째 보고서의 파라미터 값을 상속 받음
		
		oz.sendToActionScript("toolbar.pdf", "true"); //pdf 저장버튼 생성
		oz.sendToActionScript("toolbar.excel", "true"); //excel 저장버튼 생성
		oz.sendToActionScript("toolbar.hml", "true"); //한글 저장버튼 생성
		
		oz.sendToActionScript("connection.servlet","${hostOz}/oz80/server");
		oz.sendToActionScript("connection.reportname", rprt1.REPORT_ID + ".ozr");
	
		oz.sendToActionScript("odi.odinames", tmp1[tmp1.length - 1]);
		oz.sendToActionScript("odi." + tmp1[tmp1.length - 1] + ".pcount", rprt1.PARAMETERS.length.toString());
		for (var i=0; i < rprt1.PARAMETERS.length; i++) {
			oz.sendToActionScript("odi." + tmp1[tmp1.length - 1] + ".args" + (i + 1), rprt1.PARAMETERS[i] + "=" + params[0].VALUES[i]);	
		}
		
		for (i=1; i <= childCnt; i++) {
 			var rprt2 = fn_findReport(params[i].REPORT_ID);
 			var tmp2 = rprt2.REPORT_ID.split("/");

 			oz.sendToActionScript("child" + i + ".connection.reportname", rprt2.REPORT_ID + ".ozr");
 			oz.sendToActionScript("child" + i + ".odi.odinames", tmp2[tmp2.length - 1]);
 			oz.sendToActionScript("child" + i + ".odi." + tmp2[tmp2.length - 1] + ".pcount", rprt2.PARAMETERS.length.toString());

 			for (var j=0; j < rprt2.PARAMETERS.length; j++) {
 				oz.sendToActionScript("child" + i + ".odi." + tmp2[tmp2.length - 1] + ".args" + (j + 1), rprt2.PARAMETERS[j] + "=" + params[i].VALUES[j]);	
 			}
		}
		
		if(childCnt > 0){ //child 가 있을 경우
			oz.sendToActionScript('viewer.childcount', parseInt(childCnt)); //child 보고서의 수를 count함.
			oz.sendToActionScript('global.inheritparameter', 'true'); //child에 패러미터 상속
			oz.sendToActionScript('global.concatpage', 'true');	      //child 보고서 페이지를 연결함.
		}
	    
		return true;
	}
	
	//HTML5뷰어 실행
	start_ozjs("OZViewer", "${hostOz}/oz80/ozhviewer/");
	
}

$(document).ready(function() {
	fn_ozStart();
})
</script>
</head>
<body style="width:98%;height:98%">
<div id="OZViewer" style="width:98%;height:98%"></div>
</body>
</html>