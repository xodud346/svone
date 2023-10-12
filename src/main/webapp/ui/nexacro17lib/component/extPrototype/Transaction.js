
var pForm = nexacro.Form.prototype;
/***********************************************************************************************
 * 변수 선언 영역
************************************************************************************************/
/**
 * @class 서비스 호출 공통함수 <br>
 * Dataset의 값을 갱신하기 위한 서비스를 호출하고, 트랜젝션이 완료되면 콜백함수을 수행하는 함수
 * @param {String} strSvcId - 서비스 ID
 * @param {String} strSvcUrl - 서비스 호출 URL 
 * @param {String} [inData]	- input Dataset list("입력ID=DataSet ID" 형식으로 설정하며 빈칸으로 구분)
 * @param {String} [outData] - output Dataset list("DataSet ID=출력ID" 형식으로 설정하며 빈칸으로 구분)
 * @param {String} [strArg]	- 서비스 호출시 Agrgument
 * @param {String} [callBackFnc] - 콜백 함수명
 * @param {Boolean} [isAsync] - 비동기통신 여부 
 * @return N/A
 * @example
 * var strSvcUrl = "transactionSaveTest.do";
 * var inData    = "dsList=dsList:U";
 * var outData   = "dsList=dsList";
 * var strArg    = "";
 * this.gfn_transaction("save", strSvcUrl, inData, outData, strArg, "fnCallback", true);
 */ 
pForm.gfn_transaction = function(sSvcId, sSvcUrl, sInData, sOutData, sArg, sCallBackFnc, bIsAsync)
{
	if (this.gfn_isNull(sSvcId) || this.gfn_isNull(sSvcUrl)) {
		trace("Error : gfnTransaction() 함수의 인자값이 부족합니다.");
		return false;
	}
	
	// fnCallback 함수 기본값 설정
	if (this.gfn_isNull(sCallBackFnc)) sCallBackFnc = "fnCallback";
	
	var oDate = new Date();
	var nStartTime = oDate.getTime();
    var sStartDate = oDate.getYear()
						+"-"+String(oDate.getMonth()).padLeft(2, '0')
						+"-"+String(oDate.getDate()).padLeft(2, '0')
						+" "+String(oDate.getHours()).padLeft(2, '0')
						+":"+String(oDate.getMinutes()).padLeft(2, '0')
						+":"+String(oDate.getSeconds()).padLeft(2, '0')
						+" "+oDate.getMilliseconds();

	// Async
	if ((bIsAsync != true) && (bIsAsync != false)) bIsAsync = true;	
	
	// 1. callback에서 처리할 서비스 정보 저장
	var oSvcId = { 
			svcId     : sSvcId,
			svcUrl    : sSvcUrl,
			callback  : sCallBackFnc,
			isAsync   : bIsAsync,
			startDate : sStartDate,
			startTime : nStartTime };
	
	// 2. strServiceUrl
	var sServiceUrl = "svcUrl::" + sSvcUrl;
	
	// 3. strArg
	var sArguments = "";
	if (this.gfn_isNull(sArg)) {
		sArguments = "";
	}
	else { 
		sArguments = sArg;
	}

	// 개발 및 개발서버 에는 xml, 운영서버는 SSV로 통신
	var nDataType;	
	if (nexacro.getEnvironmentVariable("evRunMode") == "R") {
		nDataType = 2;
	}
	else {
		nDataType = 0;
	}
	this.transaction( JSON.stringify(oSvcId)    //1.svcID
					, sServiceUrl               //2.strServiceUrl
					, sInData                   //3.inDataSet
					, sOutData                  //4.outDataSet
					, sArguments                //5.arguments
					, "gfn_callback"			//6.strCallbackFunc
					, bIsAsync                  //7.bAsync
					, nDataType                 //8.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
					, false);                   //9.bCompress ( default : false ) 
};

/**
 * @class 공통 Callback 함수 <br>
 * 이 함수가 먼저 수행되고 사용자지정Callback함수가 수행된다.
 * @param {String} svcID - 서비스 ID
 * @param {Number} errorCode - 에러코드(정상 0, 에러 음수값)
 * @param {String} [errorMsg] - 에러메시지
 * @return N/A
 */
pForm.gfn_callback = function(svcId,errorCode,errorMsg)
{
	var oSvcId = JSON.parse(svcId);

	// 서비스 실행결과 출력
	var sStartDate = oSvcId.startDate;
	var nStartTime = oSvcId.startTime;
	
	var oDate = new Date();
	var sEndDate = oDate.getYear()
					+"-"+String(oDate.getMonth()).padLeft(2, '0')
					+"-"+String(oDate.getDate()).padLeft(2, '0')
					+" "+String(oDate.getHours()).padLeft(2, '0')
					+":"+String(oDate.getMinutes()).padLeft(2, '0')
					+":"+String(oDate.getSeconds()).padLeft(2, '0')
					+" "+oDate.getMilliseconds();
	var nElapseTime = (oDate.getTime() - nStartTime)/1000;
	
	var sMsg = "";
	
	// studio 실행시에만 transaction 실행 log 표시
	if (nexacro.getEnvironmentVariable("evRunMode") == "S") {
		if (errorCode == 0) {
			sMsg = "gfnCallback : svcID>>"+oSvcId.svcId+ ",  svcUrl>>"+oSvcId.svcUrl+ ",  errorCode>>"+errorCode + ", errorMsg>>"+errorMsg + ", isAsync>>" + oSvcId.isAsync + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
			//trace(sMsg);
		} else {
			sMsg = "gfnCallback : svcID>>"+oSvcId.svcId+ ",  svcUrl>>"+oSvcId.svcUrl+ ",  errorCode>>"+errorCode + ", isAsync>>" + oSvcId.isAsync + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
			sMsg += "\n==================== errorMsg =======================\n"+errorMsg+"\n==================================================";
			//trace(sMsg);
		}
	}
	
	// 에러 공통 처리
	if (errorCode != 0) {
		switch(errorCode) {
			case 0:
				break;
			case -1 :
				// 서버 오류입니다.\n관리자에게 문의하세요.
				this.alert(errorMsg);
				break;
			case -100:	
				this.alert(errorMsg);
				window.location.href = "/am/manager/login.do";
				break;
			default:
				if (typeof errorMsg !== "undefined" && errorMsg !== "") {
					this.alert(errorMsg);				
				}
				break;

		}
	}

	// 화면의 callBack 함수 실행
	if(!this.gfn_isNull(oSvcId.svcId)) {
		// form에 callback 함수가 있을때
		if (this[oSvcId.callback]) this.lookupFunc(oSvcId.callback).call(oSvcId.svcId, errorCode, errorMsg);
	}
};

pForm.gfn_commonCodeSearch = function(sCode){
	var oApp = nexacro.getApplication();
	var oDsParam = oApp.gdsParam;
	oDsParam.clear();
	oDsParam.addColumn("DETAIL_CODE_ID","string");
	var nNewRow = oDsParam.addRow();
	oDsParam.setColumn(nNewRow, "DETAIL_CODE_ID", sCode);
	
	var sSvcId = "commDetailSearch";
	var sUrl = "commDetailSelectMap.do";
	var inDs = "ds_search=gdsParam";
	var outDs = "gdsCommList=ds_output1";
	var arg = "";
	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "gfn_commCallBack");
};

pForm.gfn_commCallBack = function(svcId,errorCode,errorMsg){
	var oApp = nexacro.getApplication();
//trace(oApp.gdsCommList.saveXML());	
	if(!this.gfn_isNull(this.aComCodeDs)){
		var oDsList = this.aComCodeDs;
		var oCommDs = null;
		for(var key in oDsList){
			oCommDs = oDsList[key];
			this.gfn_copyDataset(oApp.gdsCommList,oCommDs,key);
		}
	}
};

pForm.gfn_copyDataset = function(oGds,oCommDs,key){
	var sFilter = "PARENT_ID=='"+key+"'";
	oGds.filter(sFilter);
	oCommDs.copyData(oGds,true);
	oGds.filter("");
	
	//공백 Row 추가 Logic
	if(!this.gfn_isNull(oCommDs.uSpaceFlag)){
		if(oCommDs.uSpaceFlag == "true"){
			oCommDs.insertRow(0);
		}
	}
//trace(oCommDs.saveXML());	
};

pForm.gfn_personalSearch = function(oGrid){
	var oApp = nexacro.getApplication();
	oApp.gds_personalSearch.clearData();
	
	//수정 필요
	var nNewRow = oApp.gds_personalSearch.addRow();
	oApp.gds_personalSearch.setColumn(nNewRow,"CO_CD",oApp.gds_userInfo.getColumn(0, "CO_CD"));
	oApp.gds_personalSearch.setColumn(nNewRow,"OPRTR_ID",oApp.gds_userInfo.getColumn(0, "OPRTR_ID"));
	
	//menu Id 는 수정 불필요
	var nMnuSeq = this.gfn_getMnuSeq(this.gfn_getPageInfo("menuId"));
	oApp.gds_personalSearch.setColumn(nNewRow,"MNU_SEQ",nMnuSeq);
	
	//grid 명 변경
	if(!this.gfn_isNull(oGrid))	oApp.gds_personalSearch.setColumn(nNewRow,"GRID_NM",oGrid.name);

	var sSvcId = "selectScrnPrsnList";    
	var sUrl = "/co/Prsn/selectScrnPrsnList.do";  
	var inDs = "ds_search=gds_personalSearch";
	var outDs = "gds_personal=ds_output";
	var arg = "";
	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "gfn_personalCallBack");
};

//grid 개인화 저장
pForm.gfn_personalSave = function(sGridId, sFormat){
	var oApp = nexacro.getApplication();
	var nMnuSeq = this.gfn_getMnuSeq(this.gfn_getPageInfo("menuId"));
	var nMnuNm = this.gfn_getPageInfo("menuNm");
	var nPgmPath = this.gfn_getPageInfo("pageUrl");
	var findRowExpr = new Array(nMnuSeq, sGridId);
	var nFindRow = oApp.gds_personal.findRowExpr("MNU_SEQ.toString() == $0 && GRID_NM == $1", 0, -1, findRowExpr);
	var nRow;
	
	// 조회 데이터가 없을 때 데이터셋 헤더가 날라감
	if( oApp.gds_personal.colcount == 0 ) {
		oApp.gds_personal.addColumn("CO_CD", "string");
		oApp.gds_personal.addColumn("OPRTR_ID", "string");
		oApp.gds_personal.addColumn("MNU_SEQ", "string");
		oApp.gds_personal.addColumn("GRID_NM", "string");
		oApp.gds_personal.addColumn("FMT_TP", "string");
		oApp.gds_personal.addColumn("GRID_FMT", "string");
		oApp.gds_personal.addColumn("MNU_NM", "string");
		oApp.gds_personal.addColumn("PGM_PATH", "string");
		oApp.gds_personal.set_enableevent(true);
	}
	
	if(nFindRow < 0){
		nRow = oApp.gds_personal.addRow();
	} else {
		nRow = nFindRow;
	}

	//수정 필요 세션값을 넣어주어야 함.
	oApp.gds_personal.setColumn(nRow,"CO_CD",oApp.gds_userInfo.getColumn(0, "CO_CD"));
	oApp.gds_personal.setColumn(nRow,"OPRTR_ID",oApp.gds_userInfo.getColumn(0, "OPRTR_ID"));
	
	oApp.gds_personal.setColumn(nRow,"MNU_SEQ",nMnuSeq);
	oApp.gds_personal.setColumn(nRow,"GRID_NM",sGridId);
	oApp.gds_personal.setColumn(nRow,"FMT_TP","");
	oApp.gds_personal.setColumn(nRow,"GRID_FMT",sFormat);
	
	oApp.gds_personal.setColumn(nRow,"MNU_NM",nMnuNm);
	oApp.gds_personal.setColumn(nRow,"PGM_PATH",nPgmPath);
	
	var sSvcId = "saveScrnPrsn";    
	var sUrl = "/co/Prsn/saveScrnPrsn.do";  
	var inDs = "ds_save=gds_personal:U";
	var outDs = "";
	var arg = "";
	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "gfn_personalCallBack");
};

//grid 개인화 초기화
pForm.gfn_personalReset = function(sGridId){
	var oApp = nexacro.getApplication();
	var nMnuSeq = this.gfn_getMnuSeq(this.gfn_getPageInfo("menuId"));
	var findRowExpr = new Array(nMnuSeq, sGridId);
	var nFindRow = oApp.gds_personal.findRowExpr("MNU_SEQ.toString() == $0 && GRID_NM == $1", 0, -1, findRowExpr);
	oApp.gds_personal.deleteRow(nFindRow);

	var sSvcId = "deleteScrnPrsn";
	var sUrl = "/co/Prsn/saveScrnPrsn.do";
	var inDs = "ds_save=gds_personal:U";
	var outDs = "";
	var arg = "";
	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "gfn_personalCallBack");
}

pForm.gfn_personalCallBack = function(svcId,errorCode,errorMsg){
	var oApp = nexacro.getApplication();
	if(svcId == "selectScrnPrsnList"){
		this.gfn_gridPersonalInit(oApp.gds_personal);
	} else if(svcId == "saveScrnPrsn"){
		if(errorCode == 0)	this.alert("레이아웃 개인화가 저장 되었습니다.");
		this.gfn_personalSearch();
	} else if(svcId == "deleteScrnPrsn"){
		if(errorCode == 0)	this.alert("레이아웃 개인화가 초기화 되었습니다.");
		this.gfn_personalSearch();
	}
}