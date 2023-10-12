<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="${hostOz}/oz80/ozexe/ozws.js" language="javascript"></script>
<script language="JavaScript">

var OZUtil = start_OZUtil;
var namespace = "Test";
var OZViewerID = "OZViewer";

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

var params = [];

function fn_setParam(p) {
	params = p
}

function fn_findReport(reportId) {
	for (var i=0; i < reports.length; i++) {
		if (reports[i].REPORT_ID === reportId) {
			return reports[i];
		}
	}
	
	return null;
}

OZViewerLoaded = function()
{
}

createOZViewer = function()
{
	    var childCnt = params.length - 1;              //cihld 보고서 count
	    var rprt1 = fn_findReport(params[0].REPORT_ID);
	    var tmp1 = rprt1.REPORT_ID.split("/");

        OZUtil.setParameter("connection.servlet","${hostOz}/oz80/server");
        OZUtil.setParameter("connection.reportname", rprt1.REPORT_ID + ".ozr");
        OZUtil.setParameter("information.debug", "true");
	    OZUtil.setParameter("viewer.mode", "print"); // 미리보기 없이 보고서 인쇄
	    OZUtil.setParameter("print.mode", "silent");  // 인쇄 모드를 인쇄다이얼로그를 표시하지않고 인쇄합니다.
	    OZUtil.setParameter("print.copies", "1");  // 인쇄 매수 설정
	    OZUtil.setParameter("print.printername", "DEFAULT_PRINTER"); // 인쇄할 프린터 이름
	    OZUtil.setParameter("odi." + tmp1[tmp1.length - 1] + ".pcount", rprt1.PARAMETERS.length.toString());
	    
		for (var i=0; i < rprt1.PARAMETERS.length; i++) {
			OZUtil.setParameter("odi." + tmp1[tmp1.length - 1] + ".args" + (i + 1), rprt1.PARAMETERS[i] + "=" + params[0].VALUES[i]);	
		}
		
		for (i=1; i <= childCnt; i++) {
 			var rprt2 = fn_findReport(params[i].REPORT_ID);
 			var tmp2 = rprt2.REPORT_ID.split("/");

 			OZUtil.setParameter("child" + i + ".connection.reportname", rprt2.REPORT_ID + ".ozr");
 			OZUtil.setParameter("child" + i + ".odi.odinames", tmp2[tmp2.length - 1]);
 			OZUtil.setParameter("child" + i + ".odi." + tmp2[tmp2.length - 1] + ".pcount", rprt2.PARAMETERS.length.toString());

 			for (var j=0; j < rprt2.PARAMETERS.length; j++) {
 				OZUtil.setParameter("child" + i + ".odi." + tmp2[tmp2.length - 1] + ".args" + (j + 1), rprt2.PARAMETERS[j] + "=" + params[i].VALUES[j]);	
 			}
		}
		
		if(childCnt > 0){ //child 가 있을 경우
			OZUtil.setParameter('viewer.childcount', parseInt(childCnt)); //child 보고서의 수를 count함.
			OZUtil.setParameter('global.inheritparameter', 'true'); //child에 패러미터 상속
			OZUtil.setParameter('global.concatpage', 'true');	      //child 보고서 페이지를 연결함.
		}

        var options = {};
        options['namespace'] = namespace;
        OZUtil.setOption(options);
        OZUtil.createViewer(OZViewerID, OZViewerLoaded);
}

installOZWebLauncher = function()
{
    if(confirm("설치가 필요 합니다. 프로그램 설치 후 다시 시도 하십시오."))
        {
                downExe('${hostOz}/oz80/ozexe/OffLine_Install_Dialog_UI_SSL.exe');
        }
}

OZCall = function()
{
	var temp = "${hostOz}".split(":");
    var protocolversion = 1037;
    var ztParam = new Object();
    ztParam.InstallBase = "<PROGRAMS>/Forcs";
    ztParam.InstallNamespace = namespace;
    ztParam.DownloadServer = temp[1].replace("//", "") + "/oz80/ozexe/viewer/";
    ztParam.DownloadPort = typeof temp[2] === "undefined" ? (temp[0] === "https" ? "443" : "80") : temp[2];
    ztParam.DownloadInstruction = "ozrviewer.idf";

    OZUtil.installViewer(protocolversion, ztParam, installOZWebLauncher, createOZViewer);
}

downExe = function(url)
{
        document.getElementById('downfrm').src = url;
}
OZProgressCommand_OZViewer = function (step, state, reportname) {
        if(step == 4 && state == 2) {
           //alert("보고서 이름 : " + reportname);
        }
}

OZPrintCommand_OZViewer = function (msg, code, reportname, printername, printcopy, printpages, printrange, username, printerdrivername, printpagesrange) {
        if(code==0) {
           alert("프린트 결과 메시지 : " + msg);
           alert("보고서 이름 : " + reportname);
           alert("프린터 이름 : " + printername);
           alert("인쇄 매수 : " + printcopy);
           alert("인쇄된 용지 매수 : " + printpages);
           alert("인쇄 범위 : " + printrange);
           alert("사용자 이름 : " + username);
           alert("프린터 드라이버 이름 : " + printerdrivername);
           alert("인쇄된 페이지 범위 : " + printpagesrange);
        }
}

OZExportCommand_OZViewer = function (code, path, filename, pagecount, filepaths) {

        if(code==0) {
                alert("파일 경로 : " + path);
                alert("파일 이름 : " + filename);
                alert("페이지 수 : " + pagecount);

                var arr = filepaths.split('|');

                for(i=0; i<arr.length; i++) {
                        alert("저장된 파일의 경로와 이름 - " + (i + 1) + "번째 파일 : " + arr[i]);
                }

        }
}

OZExitCommand_OZViewer = function(){
  //deleteViewerList(OZViewerID);
  OZUtil.removeViewerID(OZViewerID);
  console.log("뷰어삭제");
  //alert("뷰어삭제");
}

fn_EmptyCallBack = function (sResult){

};

EndViewer = function()
{
        OZUtil.CloseEXEViewer(OZViewerID);
}
</script>
</head>
<body>
<iframe id="downfrm" style="display:none;"></iframe>

<!-- <input type=button value="RunViewer" onclick="OZCall();"> -->

<!-- <br>OZ Viewer EXE WS Version  테스트 페이지 입니다.<br/> -->
<!-- <br>1. 상단의 [RunViewer] 버튼을 클릭하세요. <br/> -->
<!-- <br>2. 최초 실행 시 [설치가 필요 합니다. 프로그램 설치 후 다시 시도 하십시오.] 라는 메시지가 나오면 프로그램을 설치 합니다.  <br/> -->
<!-- <br>  방화벽 메시지가 나오면 허용 합니다.  <br/> -->

<!-- <br>3. 프로그램 설치가 완료된 후 다시 1번을 실행합니다.  <br/> -->
<!-- <br>4. 오즈 뷰어가 실행 됩니다. <br/> -->
<!-- <br>5. 뷰어의 저장 버튼을 눌러서 아무 파일이나 저장합니다. [export 완료.] 라는 메시지가 표시됩니다. <br/> -->
<!-- <br>6. 뷰어 와 브라우저를 닫은 후 다른 브라우저 로 다시 페이지를 엽니다.(Chrome,FireFox,Opera,Edge,IE 본인 pc에 설치된 모든 브라우져) 2,3번 과정 없이 1->4,5 과정으로 실행되면 정상입니다. <br/> -->

</body>

