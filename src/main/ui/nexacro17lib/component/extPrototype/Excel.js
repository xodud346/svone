var pForm  = nexacro.Form.prototype;

/* 함수 리스트

 - "_"로 시작하는 함수는 공통개발자 외의 개발자가 직접호출 하지 않아야 한다.

●gfn_exportExcel        	- Grid를 Excel로 Export하는 함수
●_gfn_exportExcelSuccess 	- 엑셀 익스포트 성공 callback 함수()
●_gfn_exportExcelError		- 엑셀 익스포트 실패 callback 함수()
●gfn_importExcel	      	- Excel을 데이타셋으로 Import 하는 함수
●_gfn_importEnd_onsuccess	- 엑셀 임포트 성공 callback 함수
●_gfn_importEnd_onerror	- 엑셀 임포트 실패 callback 함수
*/

pForm.fv_importObjForm;
/********************************************************************************
 * Function Name	: gfn_exportExcel
 * Desc				: Grid를 Excel로 Export하는 함수
 * Parameter		: obj = 단일Export -  Grid Object  , 다수Export - Array Objec[Grid Object,Grid Object]							*
 *					  sFileName - Export될 파일명									*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfn_exportExcel = function(oParam)
{
	var oForm = oParam.form;   //form
	var aGrid = oParam.grid;   // 대상 그리드
	var sFileNm = oParam.fileName;
	var sSheetName = oParam.sheetName;
	var oOwnerForm = oForm.getOwnerFrame().form;
	var oCallBack = oParam.callBackFunc;
	var oReturn;
	var oDs = null;
	var dbWrk = oParam.dbWrk;
	var pgmId = oParam.pgmId;
	var downRsn = oParam.downRsn;
	var totalCount = oParam.form.totalCount;
	if(totalCount == undefined) {
		totalCount = 10000;
	}
	
	if (aGrid instanceof Array)
	{
		for(var i=0; i<aGrid.length; i++) {
			var oGrid = aGrid[i];
			oDs = oGrid.getBindDataset();
			if (this.gfn_isNull(oDs)) {
				this.alert("grid에 binding 된 Dataset이 없습니다.");
				return;
			}
		}
	} else {
		oDs = aGrid.getBindDataset();
		if (this.gfn_isNull(oDs)) {
			this.alert("grid에 binding 된 Dataset이 없습니다.");
			return;
		}	
    }			
	
	if (oForm.gfn_isNull(sFileNm)){
		sFileNm = this.getOwnerFrame().arguments["menuNm"];
	}
		
	//sFileNm = this.gfn_getRawData(sFileNm);	
	
	//윈도우에서 사용 불가능한 파일명 문자 제거 (\ / : * ? < > | ")
	
	
	if (oForm.gfn_isNull(sSheetName))
		sSheetName = "sheet1";
   
	var sSvcUrl = nexacro.getEnvironment().services["svcUrl"].url + "/XExportImport.do";
	    sSvcUrl += (dbWrk === null || dbWrk === undefined) ? "" : "?dbWrk=" + dbWrk + "&pgmId=" + pgmId + "&downRsn=" + downRsn ;
	
	var sContRow = 1;
	
	var oExport = oForm.objects["commExcelExport"];
	
	if (oExport == null || oExport == undefined) {
		oExport = new ExcelExportObject();			
		this.addChild("commExcelExport", oExport);
		oExport.set_name("commExcelExport");
		oExport.addEventHandler("onsuccess", this._gfn_exportExcelSuccess,  this);
		oExport.addEventHandler("onerror", this._gfn_exportExcelError, this);
	}
	
	oExport.clear();	
	oExport.set_commcompress("compress");
	oExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	oExport.set_exportmessageprocess("%d [%d/%d]");
	oExport.set_exportuitype("exportprogress");
	oExport.set_transferrowcount(totalCount);
	
	if (typeof oParam.password != "undefined" && oParam.password != "") {
		oExport.set_exportfilepassword(oParam.password);
	}
		
	oExport.set_exporturl(sSvcUrl);
	oExport.set_exportfilename(sFileNm);
	oExport.user_form = oForm;
	oExport.user_callback = oCallBack;
	
	//여러개의 그리드를 여러개의 Sheet로 출력 시 처리
	if (aGrid instanceof Array)
	{
		for(var i=0; i<aGrid.length; i++) {
			var oGrid = aGrid[i];
			
			if (!oForm.gfn_isNull(sSheetName))
			{
				if (sSheetName instanceof Array)
					sSheetNameTemp = sSheetName[i];
				else
					sSheetNameTemp = sSheetName + i;
			} else {
				sSheetNameTemp = "sheet" + i;
			}
			
			oExport.addExportItem(nexacro.ExportItemTypes.GRID, oGrid, sSheetNameTemp + "!A1","allband","allrecord","suppress","allstyle","image","", "both","cellline");
			
		}
		
		oReturn = oExport.exportData();
		
	} else {
	    var iChkCell = aGrid.getBindCellIndex( "body", "CHK");
		var iFirstColSize = aGrid.getFormatColProperty(0, "size");
		
		if (iChkCell == 0) {
			aGrid.setFormatColProperty(0, "size",  0);
		}
		
		oReturn = oExport.addExportItem(nexacro.ExportItemTypes.GRID, aGrid, sSheetName + "!A1","allband","allrecord","suppress","allstyle","image","", "both","cellline");
		oReturn = oExport.exportData();
		if (iChkCell == 0) {
			aGrid.setFormatColProperty(0, "size",  iFirstColSize);
		}
	} 
	
};

// 엑셀 익스포트 성공 callback 함수
pForm._gfn_exportExcelSuccess = function(oGrid,e)
{
	var sCallback = oGrid.user_callback;
    
	//화면의 callback 함수 호출
	if (!this.gfn_isNull(sCallback)) {
		if (this[sCallback]) this.lookupFunc(sCallback).call("EXPORT",0);
	}
};

// 엑셀 익스포트 실패 callback 함수
pForm._gfn_exportExcelError = function(oGrid,e)
{
	var sCallback = oGrid.user_callback;
    
	//화면의 callback 함수 호출
	if (!this.gfn_isNull(sCallback)) {
		if (this[sCallback]) this.lookupFunc(sCallback).call("EXPORT",-1);
	}
};
/********************************************************************************
 * Function Name	: gfn_importExcel										*
 * Desc				: Excel을 데이타셋으로 Import 하는 함수
 * Parameter		: obj = 단일Export -  Grid Object  , 다수Export - Array Objec[Grid Object,Grid Object]							*
 *					  sFileName - Export될 파일명									*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfn_importExcel = function(oParam)
{
    var oForm 	= oParam.form;
    var sSheet 	= oParam.sheet;
    var oFunc 	= oParam.callBackFunc;

	this.fv_importObjForm = this;
	var sSvcUrl = nexacro.getEnvironment().services["svcurl"].url + "/XImport.do";
	
	var oImport = new nexacro.ExcelImportObject("importExcel",this);
	oImport.set_importurl(sSvcUrl);
	oImport.set_importtype(nexacro.ImportTypes.EXCEL);
	//importObj.set_userawnumbervalue(true); // set 

	//this.fv_importObjForm.user_callBack = oFunc;
	oImport.sCallBack = oFunc;
	oImport.importid = "import";
	oImport.outDs = oParam.ds;
	
	//out dataset 생성(차후 onsucess 함수에서 헤더생성하기 위한)
	var sOutDsName = oParam.ds+"_outds";	
	if(this.isValidObject(sOutDsName)) this.removeChild(sOutDsName);			
	var oOutDs = new Dataset();
	oOutDs.name = sOutDsName;
	this.addChild(oOutDs.name, oOutDs);
	
	oImport.addEventHandler("onsuccess"	, this._gfn_importEnd_onsuccess	,  this	);
	oImport.addEventHandler("onerror"	, this._gfn_importEnd_onerror	, this	);
		
	oImport.importData(oParam.path, "[command=getsheetdata;output=outDs;" + sSheet +"]", "["+sOutDsName+"=outDs]");
	oImport = null;
};

// 엑셀 임포트 성공 callback 함수
pForm._gfn_importEnd_onsuccess = function(oGrid, e)
{
	var oOutDs = this.objects[oGrid.outDs+"_outds"];
	var oOrgDs = this.objects[oGrid.outDs];
	var sCallback = oGrid.sCallBack;
	var sImportId = oGrid.importid;
	var sColumnId;
	

	//기존 데이터셋의 내용으로 헤더복사
	for (var i=0; i<oOrgDs.getColCount(); i++)
	{
		sColumnId = "Column"+i;
		if (sColumnId != oOrgDs.getColID(i))
		{
			oOutDs.updateColID(sColumnId, oOrgDs.getColID(i))
		}
	}
	oOrgDs.clearData();
	oOrgDs.copyData(oOutDs);
	
	//화면의 callback 함수 호출
	if (!this.gfn_isNull(sCallback)) {
		if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId,0);
	}
};

// 엑셀 임포트 실패 callback 함수
pForm._gfn_importEnd_onerror = function(oGrid, e)
{
	var sCallback = oGrid.sCallBack;
    
	//화면의 callback 함수 호출
	if (!this.gfn_isNull(sCallback)) {
		if (this[sCallback]) this.lookupFunc(sCallback).call(sImportId,-1);
	}
};