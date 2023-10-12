/**
*  엑셀관련함수
*  @FileName 		Excel.js 
*  @Creator 			jgj
*  @CreateDate 	2017.11.01
*  @Desction   
************** 소스 수정 이력 ***************************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.11.01     	    jgj 	                최초 생성 
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;
/**
 * @class excel export <br>
 * @param {Object} objGrid - Grid Object	
 * @param {String} [sSheetName]	- sheet name
 * @param {String} [sFileName]	- file name
 * @param {Object} objCondition - Grid Object
 * @param {Object} arrExceptcolumns - 제외할 컬럼
 * @return N/A
 * @example
 * this.gfn_excelExport(this.grid_export, "SheetName","");
 */
pForm.gfn_excelExport = function(objGrid,  sSheetName, sFileName, objCondition, arrExceptcolumns, pgmId, downRsn)
{
	this.setWaitCursor(true);
	var objGrid_excel;
		
	var regExp = /[?*:\/\[\]]/g;  				            //(엑셀에서 지원하지않는 모든 문자)
	if(!this.gfn_isNull(sFileName))
	{
		sFileName  = sFileName.toString().replace(regExp,"");	//파일명에 특수문자 제거
	}

	if(!this.gfn_isNull(sSheetName))
	{
		sSheetName = sSheetName.toString().replace(regExp,"");  //시트명에 특수문자 제거
	}
	
	//fileName nullcheck
	sFileName = this.gfn_isNull(sFileName) ? "ExcelExport_"+this.gfn_getDate("time") : sFileName+"_"+this.gfn_getDate("time");
	
	//sheetName nullcheck
	sSheetName = this.gfn_isNull(sSheetName) ? "Sheet1" : sSheetName;
	
	//sheetName 30이상일경우 기본시트명
	if( String(sSheetName).length > 30 )
	{
		sSheetName =  "Sheet1";
	}
	
	//var svcUrl = "svcUrl::XExportImport";
	var svcUrl 	= nexacro.getEnvironment().services["svcUrl"].url+"/XExportImport.do";
	    svcUrl += (pgmId === null || pgmId === undefined) ? "" : "?dbWrk=&pgmId=" + pgmId + "&downRsn=" + downRsn ;
	this.objExport = null;
	this.objExport = new ExcelExportObject();
	
	this.objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
 	this.objExport.set_exporteventtype("itemrecord");
 	this.objExport.set_exportuitype("none"); //exportprogress
 	this.objExport.set_exportmessageprocess("");
	//this.objExport.set_exportmessageprocess("%d Item, %d Recrod, %d Total"); //"%d[%d/%d]"
	
	this.objExport.addEventHandler("onsuccess", this.gfn_exportOnsuccess, this);
	this.objExport.addEventHandler("onerror", this.gfn_exportOnerror, this);
	this.objExport.addEventHandler("onprogress", this.gfn_exporOnprogress, this);
	
	this.objExport.set_exporturl(svcUrl);
	this.objExport.set_exportfilename(sFileName);

	//특정컬럼제거
	if(!this.gfn_isNull(arrExceptcolumns)){
		var oCopyGrid = this.gfn_ckGrdObj("_grd_excel", objGrid);
		oCopyGrid.set_visible(false);
		oCopyGrid.set_formats(objGrid.getCurFormatString());
		oCopyGrid.setBindDataset(objGrid.getBindDataset());
		
		oCopyGrid.set_enableredraw(false);
		for (var i=arrExceptcolumns.length-1; i >= 0; i--) 
		{
			oCopyGrid.deleteContentsCol(arrExceptcolumns[i]);
		}		
		oCopyGrid.set_enableredraw(true);
		
		var strType = oCopyGrid.toString().toUpperCase();
		objGrid_excel = oCopyGrid;			
	}
	else {
		objGrid_excel = objGrid;
	}

	//export grid 지정
	this.objExport.objgrid = objGrid_excel;
	
	//조회조건 배열
	if(objCondition instanceof  Array){ 
		condType = objCondition;
		
		var objCondGrid = "";
		
		if(!this.isValidObject("condGrid")){		
			objCondGrid = new Grid();
			objCondGrid.init("condGrid", 37, 100, 367, 48, null, null);
			this.addChild("condGrid", objCondGrid); 
			objCondGrid.set_visible(false);
			objCondGrid.show();		
			objCondGrid.appendContentsRow("head");
			objCondGrid.appendContentsRow("body");
			
			var oDs = new Dataset;
			this.addChild("_ds_export", oDs);
			oDs.addColumn( "column00", "string" );
			oDs.addRow();			
			
			objCondGrid.set_binddataset("_ds_export");	
			
		}else{
			objCondGrid = this["condGrid"];			
		}
				
		for(var ii=0; ii<condType.length; ii++){
			
			if(ii != 0 && objCondGrid.getFormatColCount() != condType.length){
				objCondGrid.appendContentsCol();
			}
			
			v_condType = condType[ii].split("^$");
			objCondGrid.setCellProperty("head", ii , "text", v_condType[0]);
			objCondGrid.setCellProperty("body", ii , "text", v_condType[1]);			
		}
		
		objCondition = objCondGrid;		
	}
	
	var strType = objGrid_excel.toString().toUpperCase();
	
	if (strType == "[OBJECT GRID]"){	
		if(!this.gfn_isNull(objCondition)){
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objCondition,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","none","font", "both");
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel,  sSheetName + "!A4","allband","allrecord","suppress","allstyle","none","font", "both");
			
		}else{			
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","none","font", "both");//,"font", "both");
			//this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","","","","","","","cellline" );//,"font", "both");
	    }		
	}
	
	var result = this.objExport.exportData();
};

/**
 * @class Grid별 Sheet excel export <br>
 * @param {Array} objGrid - Grid Object	
 * @param {Array} [sSheetName]	- sheet name
 * @param {Array} [sFileName]	- file name
 * @param {Object} objCondition - Grid Object
 * @param {Array} arrExceptcolumns - 제외할 컬럼
 * @return N/A
 * @example
 * this.gfn_gfn_excelExportSheet(this.grid_export, "SheetName","");
 */
pForm.gfn_excelExportSheet = function(arrjGrid, arrSheet, sFileName, objCondition, arrExceptcolumns)
{
	if(this.gfn_isNull(arrjGrid)) return;
	
	var arrsht = arrSheet;
	
	if(this.gfn_isNull(arrsht)){
	
		arrsht = new Array();
		
		for(var i=0; i<arrjGrid.length;i++){
			arrsht[i] = "Sheet"+i;
		}
	}
		
	//this.setWaitCursor(true);
	
	var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)	
	
	//fileName nullcheck
	sFileName = this.gfn_isNull(sFileName) ? "ExcelExport_"+this.gfn_getDate("time") : sFileName+"_"+this.gfn_getDate("time");
	sFileName  = sFileName.toString().replace(regExp,"");	//파일명에 특수문자 제거
	
	//var svcUrl = "svcUrl::XExportImport";
	var svcUrl 	= nexacro.getEnvironment().services["svcUrl"].url+"/XExportImport";
	this.objExport = null;
	this.objExport = new ExcelExportObject();
	
	//this.objExport.objgrid = objGrid_excel;
	this.objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
 	this.objExport.set_exporteventtype("itemrecord");
 	this.objExport.set_exportuitype("none"); //exportprogress
 	this.objExport.set_exportmessageprocess("");
	//this.objExport.set_exportmessageprocess("%d Item, %d Recrod, %d Total"); //"%d[%d/%d]"
	
	this.objExport.addEventHandler("onsuccess", this.gfn_exportOnsuccess, this);	
	this.objExport.addEventHandler("onerror", this.gfn_exportOnerror, this);
	this.objExport.addEventHandler("onprogress", this.gfn_exporOnprogress, this);
	
	this.objExport.set_exporturl(svcUrl);
	this.objExport.set_exportfilename(sFileName);
	
	var objGrid_excel = "";

	for (var j=0; j<arrjGrid.length; j++){	
		//특정컬럼제거
		if(!this.gfn_isNull(arrExceptcolumns)){
			var oCopyGrid = this.gfn_ckGrdObj("_grd_excel_"+j, arrjGrid[j]);		
			oCopyGrid.set_visible(false);	
			oCopyGrid.set_formats(arrjGrid[j].formats);
			oCopyGrid.set_formatid(arrjGrid[j].formatid);
			//oCopyGrid.set_formats(arrjGrid[j].getCurFormatString());
			oCopyGrid.setBindDataset(arrjGrid[j].getBindDataset());
			oCopyGrid.set_enableredraw(false);
		
			for (var y=arrExceptcolumns[j].length-1; y >= 0; y--) {
				oCopyGrid.deleteContentsCol(arrExceptcolumns[j][y]);
			}		
			oCopyGrid.set_enableredraw(true);	
			objGrid_excel = oCopyGrid;
		}else{		
			objGrid_excel = arrjGrid[j];
		}
		var objCond = "";
		
		if(!this.gfn_isNull(objCondition)){
			//조회조건 배열
			if(objCondition[j] instanceof Array){
				condType = objCondition;			
				var objCondGrid = new Array;
							
				if(!this.isValidObject("condGrid"+j)){
				
					objCondGrid[j] = new Grid();
					objCondGrid[j].init("condGrid"+j, 37, 100, 367, 48, null, null);
					this.addChild("condGrid"+j, objCondGrid[j]);
					objCondGrid[j].set_visible(false);
					objCondGrid[j].show();
					objCondGrid[j].appendContentsRow("head");
					objCondGrid[j].appendContentsRow("body");
					
					var oDs = new Dataset;
					this.addChild("_ds_export_"+j, oDs);
					oDs.addColumn( "column00", "string" );
					oDs.addRow();			
					
					objCondGrid[j].set_binddataset("_ds_export_"+j);			
				}else{
					objCondGrid[j] = this["condGrid"+j];
				}
					
				for(var ii=0; ii<condType[j].length; ii++){
					
					if(ii != 0 && objCondGrid[j].getFormatColCount() != condType[j].length){
						objCondGrid[j].appendContentsCol();
					}
					
					v_condType = condType[j][ii].split("^$");
					
					objCondGrid[j].setCellProperty("head", ii , "text", v_condType[0]);
					objCondGrid[j].setCellProperty("body", ii , "text", v_condType[1]);			
				}			
				
				objCond = objCondGrid[j];
				
			}else{		
				if(!this.gfn_isNull(objCondition)){
					objCond = objCondition[j];
				}
			}
		}

		if(!this.gfn_isNull(objCond)){
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objCond,  arrsht[j] + "!A1","allband","allrecord","suppress","allstyle","none","font", "both");
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, arrsht[j] + "!A3","allband","allrecord","suppress","allstyle","none","font", "both");			
		}else{
	        //this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, arrsht[j] + "!A1","allrecord","suppress","allstyle","none","font", "both");
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel,  arrsht[j] + "!A1","allband","allrecord","suppress","allstyle","none","font","both" );//,"font", "both");
		}
	}

	var result = this.objExport.exportData();
};

/**
 * @class excel export on sucess <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfn_exportOnsuccess = function(obj, e)
{		
	/*
	if (this._grd_excel != null) {
		this._grd_excel.destroy();
	}	
	*/
	this.setWaitCursor(false);
};

/**
 * @class  excel export on error <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfn_exportOnerror = function(obj,  e)
{
	trace( "\n=========== onerror event start===================");
	trace("\ne.eventid 				:"+e.eventid 				);
	trace( "\ne.id 					:"+e.id 					);
	trace( "\ne.fromobject 			:"+e.fromobject 			);
	trace( "\ne.fromreferenceobject 	:"+e.fromreferenceobject 	);
	trace ("\ne.errorcode 			:"+e.errorcode 				);
	trace("\ne.errormsg 			:"+e.errormsg 				);
	
	/*
	if (this._grd_excel != null) {
		this._grd_excel.destroy();
	}
	*/
	
	this.setWaitCursor(false);
};

/**
 * @class  excel export on progress <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfn_exporOnprogress = function(obj,  e)
{
	/*
	trace( "\n=========== onprogress event start================");
	trace( "\ne.eventid 				:"+e.eventid 			 );
	trace( "\ne.id 					:"+e.id 					 );
	trace( "\ne.fromobject 			:"+e.fromobject 			 );
	trace( "\ne.fromreferenceobject 	:"+e.fromreferenceobject );
	trace( "\ne.itemindex 			:"+e.itemindex 				 );
	trace( "\ne.itemtype 			:"+e.itemtype 				 );
	trace( "\ne.recordindex 			:"+e.recordindex  		 );	
	*/
}

/**
 * @class  excel import( 데이터 헤더포함 ) <br>
 * @param {String} objDs - dataset	
 * @param {String} [sSheet]	- sheet name(default:Sheet1)
 * @param {String} sHead - Head 영역지정	
 * @param {String} [sBody] - body 영역지정(default A2)	
 * @param {String} [sCallback]	- callback 함수
 * @param {String} [sImportId] - import id(callback호출시 필수)	
 * @param {Object} [objForm] - form object(callback호출시 필수)
 * @return N/A
 * @example
 * this.gfn_excelImportAll("dsList","SheetName","A1:G1","A2","fnImportCallback","import",this);
 */
pForm.gfn_excelImportAll = function(objDs,sSheet,sHead,sBody,sCallback,sImportId,objForm)
{	
	//this.setWaitCursor(true);    	
	
	if(this.gfn_isNull(sSheet)) sSheet = "sheet1";
	if(this.gfn_isNull(sBody)) sBody = "A2";
	if(this.gfn_isNull(sHead)) return false;
	
	//var svcUrl = "svcUrl::XExportImport.do";
	//var svcUrl = "svcUrl::XImport";
	var svcUrl 	= nexacro.getEnvironment().services["svcUrl"].url+"/XImport";
	var objImport ;	
	
	objImport = new nexacro.ExcelImportObject(objDs+"_ExcelImport"+this.gfn_rand(0,1000),this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);	
	objImport.oDs = objDs;
	
	if (!this.gfn_isNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	
	objImport.addEventHandler("onsuccess", this.gfn_importAllOnsuccess, this);
	objImport.addEventHandler("onerror", this.gfn_importAllOnerror, this);	
	var sParam1 = "[Command=getsheetdata;Output=outds;Head="+sSheet+"!"+sHead+";Body="+sSheet+"!"+sBody+"]";	
	var sParam2 = "["+objDs+"=outds]";
	objImport.importData("", sParam1, sParam2);		
	this.addChild(objDs+"_ExcelImport"+this.gfn_rand(0,1000), objImport); 
	objImport = null;	 
};

//sheet명 무시하고 첫번째Sheet import
pForm.gfn_excelImportNsheet = function(objDs,sHead,sBody,sCallback,sImportId,objForm)
{	
	//this.setWaitCursor(true);    	
	/*
	if(this.gfn_isNull(sBody)) 
	{
		sBody = "A2";
	}
	*/
	/*
	if(this.gfn_isNull(sHead)) 
	{
		return false;
	}
	*/

	//var svcUrl = "svcUrl::XExportImport.do";
	//var svcUrl = "svcUrl::XImport";
	var svcUrl 	= nexacro.getEnvironment().services["svcUrl"].url+"/XImport";
	var objImport ;	
	
	objImport = new nexacro.ExcelImportObject(objDs+"_ExcelImport"+this.gfn_rand(0,1000),this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);
	objImport.oDs = objDs;
	
	if (!this.gfn_isNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form     = objForm;
	}
	
	objImport.addEventHandler("onsuccess", 	this.gfn_importAllOnsuccess, this);
	objImport.addEventHandler("onerror", 	this.gfn_importAllOnerror, this);	
	var sParam1 = "";
	if(this.gfn_isNull(sHead) && this.gfn_isNull(sBody))  
	{
		sParam1 = "[Command=getsheetdata;Output=outds]";
	
	}else if(this.gfn_isNull(sHead) && !this.gfn_isNull(sBody))  
	{
		sParam1 = "[Command=getsheetdata;Output=outds;Body=!"+sBody+"]";
	
	}else if(!this.gfn_isNull(sHead) && this.gfn_isNull(sBody))  
	{
		sParam1 = "[Command=getsheetdata;Output=outds;Head=!"+sHead+"]";
	}else
	{
		sParam1 = "[Command=getsheetdata;Output=outds;Head=!"+sHead+";Body=!"+sBody+"]";
	}
	
	var sParam2 = "["+objDs+"=outds]";

	objImport.importData("", sParam1, sParam2);		
	this.addChild(objDs+"_ExcelImport"+this.gfn_rand(0,1000), objImport); 
	objImport = null;	 
};

/**
 * @class excel import on success <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfn_importAllOnsuccess = function(obj,  e)
{
	trace("=========== onsuccess event start============");
	trace("e.eventid:"+e.eventid);
	trace("e.fromobject:"+e.fromobject);
	trace("e.fromreferenceobject:"+e.fromreferenceobject);
	trace("e.url:"+e.url);

	this.setWaitCursor(false);
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var oDs       = obj.oDs;
	
	//빈 값 제거
	this.gfn_emptyRowDel(this.objects[oDs]);
	
	//화면의 callback 함수 호출
	if (!this.gfn_isNull(sCallback)) 
	{
		this.lookupFunc(sCallback).call(this,sImportId);
	}

};

/**
 * @class  excel import( 데이터 헤더제외 ) <br>
 * @param {String} sDataset - dataset	
 * @param {String} [sSheet]	- sheet name
 * @param {String} [sBody] - body 영역지정	
 * @param {String} [sCallback] - callback 함수	
 * @param {String} [sImportId] - import id(callback호출시 필수)	
 * @param {Object} [objForm] - form object(callback호출시 필수)	
 * @return N/A
 * @example
 * this.gfn_excelImport("dsList","SheetName","A2","fnImportCallback","import",this);
 */
pForm.gfn_excelImport = function(sDataset,sSheet,sBody,sCallback, sImportId, objForm)
{
	this.setWaitCursor(true);    	
	
	if(this.gfn_isNull(sSheet)) sSheet = "sheet1";
	if(this.gfn_isNull(sBody)) sBody = "A2";
	
	//var svcUrl = "SVC::XExportImport.do";
	//var svcUrl = "svcUrl::XExportImport.do";
	var svcUrl 	= nexacro.getEnvironment().services["svcUrl"].url+"/XExportImport.do";
	
	var objImport ;	
	objImport = new nexacro.ExcelImportObject(sDataset+"_ExcelImport"+this.gfn_rand(0,1000),this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);			
	objImport.outds = sDataset;
	
	if (!this.gfn_isNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	
	//out dataset 생성(차후 onsucess 함수에서 헤더생성하기 위한)
	var sOutDsName = sDataset+"_outds";	
	if(this.isValidObject(sOutDsName)) 
	{
		this.removeChild(sOutDsName);	
		this.objects[sOutDsName].destroy();
		this.objects[sOutDsName] = null; 
	}
	var objOutDs = new Dataset();
	objOutDs.name = sOutDsName;
	this.addChild(objOutDs.name, objOutDs);
	
	objImport.addEventHandler("onsuccess", this.gfn_importOnsuccess, this);
	objImport.addEventHandler("onerror", this.gfn_importAllOnerror, this);	
	var sParam = "[command=getsheetdata;output=outDs;body=" + sSheet + "!" + sBody +";]";
 	var sParam2 = "[" + sOutDsName + "=outDs]";
 	
	objImport.importData("", sParam, sParam2);						
	objImport = null;	
};

/**
 * @class excel import on success <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfn_importOnsuccess = function(obj,  e)
{		
	trace("=========== onsuccess event start============");
	trace("e.eventid:"+e.eventid);
	trace("e.fromobject:"+e.fromobject);
	trace("e.fromreferenceobject:"+e.fromreferenceobject);
	trace("e.url:"+e.url);

	this.setWaitCursor(false);
	var objOutDs = this.objects[obj.outds+"_outds"];
	var objOrgDs = this.objects[obj.outds];
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var objForm = obj.form;
	var sColumnId;
	
	//빈 값 제거
	this.gfn_emptyRowDel(objOutDs);
		
	//기존 데이터셋의 내용으로 헤더복사
	for (var i=0; i<objOrgDs.getColCount(); i++)
	{
		sColumnId = "Column"+i;
		if (sColumnId != objOrgDs.getColID(i))
		{
			objOutDs.updateColID(sColumnId, objOrgDs.getColID(i))
		}
	}
	
	//objOrgDs.clearData();
	objOrgDs.copyData(objOutDs);

	if (!this.gfn_isNull(sCallback)) this.lookupFunc(sCallback).call(this,sImportId);
};

/**
 * @class  excel import on error <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfn_importAllOnerror = function(obj,  e)
{
	trace("=========== onerror event start============");
	trace("e.eventid:"+e.eventid);
	trace("e.fromobject:"+e.fromobject);
	trace("e.fromreferenceobject:"+e.fromreferenceobject);
	trace("e.errorcode:"+e.errorcode);
	trace("e.errormsg:"+e.errormsg);
	
	this.setWaitCursor(false);	
	this.alert(e.errormsg);
};
 /**
 * @class    정수인 nStart ~ nEnd의 범위에 있는 숫자에 대하여 random값을 return한다.<br>
  * [주의사항]<br>
 *  1. nStart, nEnd는 정수임에 주의
 * @param {Number} nStart - 시작숫자 ( 단, 정수, 만일 정수가 아니면 Math.floor(nStart)를 적용함)
 * @param {Number} nEnd - 끝숫자 ( 단, 정수, 만일 정수가 아니면 Math.floor(nStart)를 적용함)
 * @return  {Number} nRtn - nStart ~ nEnd범위 중 random숫자 (단, nStart, nEnd도 포함됨)
 * @example
 * this.gfn_rand(0,123456);	
 */
pForm.gfn_rand = function(nStart, nEnd) 
{
	var range_unit, rand, tmp;

	nStart = Math.floor(nStart);
	nEnd = Math.floor(nEnd);
	if( nStart > nEnd ) 
	{
		tmp = nStart;
		nStart = nEnd;
		nEnd = tmp;
	}
	range_unit = nEnd-nStart+1;
	rand = Math.random();
	rand = Math.random();
	return Math.floor(rand*range_unit)+nStart;
};

/**********************************************************************************
 * Function Name: gfn_ckGrdObj(sGrdName, objGrid)
 * Description  : 그리드 obj 체크하고 반환한다.
 * Arguments    : sGrdName 대상 그리드 명
                : objGrid  그리드 object
 * Return       : grid obj
 **********************************************************************************/ 
pForm.gfn_ckGrdObj = function(sGrdName, objGrid)
{
	var _cnt = 0;
	var _objGrd;
	var _formObj = this.components;
	
	//_cnt 존재여부만 확인
	_cnt = this.gfn_isComp(_formObj, sGrdName);

	if(_cnt > 0)
	{ 
		var oParent = this.gfn_path(objGrid);
		
		if(!this.gfn_isNull(oParent))
		{
			_objGrd = this.gfn_objComp(oParent, sGrdName);			
		} else 
		{
			_objGrd = eval("this."+sGrdName);
		}	
	
	} else
	{
		_objGrd = new Grid();
		_objGrd.init(sGrdName, 0, 0, 0, 0);

		//부모에 생성하면 innerDataset을 참조할 수 없음. 그래서 해당화면 생성을 해야함.
		var oParent = this.gfn_path(objGrid);

		if(!this.gfn_isNull(oParent))
		{
			oParent.addChild(sGrdName, _objGrd); 
		}else
		{
			this.addChild(sGrdName, _objGrd); 
		}	
		//_objGrd.createFormat();
		_objGrd.show();
	}
	
	return _objGrd;
};
/**********************************************************************************
 * Function Name: gfn_objComp(oParent, sCompName)
 * Description  : 컴포넌트 존재여부 확인
 * Arguments    : _formObj : 대상 object
                  sGrdName : 컴포넌트 명칭
				  count    : (초기값 0)
 * Return       : _cnt값이 1이상이면 컴포넌트 존재
 **********************************************************************************/   
pForm.gfn_isComp = function(_formObj, sCompName, _cnt)
{
	if (this.gfn_isNull(_cnt)) _cnt = 0;
	if (_cnt > 0) return _cnt;
	
	var complist = _formObj;
	
	for(var idx = 0; idx < complist.length; idx++)
	{	
		if( (complist[idx] instanceof Grid) && complist[idx].name == sCompName)
		{				
			_cnt++;				
			return _cnt;
		}else if (complist[idx] instanceof Tab) 
		{		
			for (var i=0; i<complist[idx].tabpages.length; ++i) 
			{			
				var nRtn = this.gfn_isComp(complist[idx].tabpages[i], sCompName, _cnt);							
				if (nRtn > 0) return nRtn;
			}
		
		}else if ( (complist[idx] instanceof Div) || (complist[idx] instanceof Tabpage)) 
		{	
			var nRtn = this.gfn_isComp(complist[idx].form.components, sCompName, _cnt);						
			if (nRtn > 0) return nRtn;
		}
	}
	return _cnt;
};	

 /**********************************************************************************
 * Function Name: gfn_path(o, p)
 * Description  : 부모 오브젝트를 리턴한다.
 * Arguments    : o : 각종 obj componernt 
                  p : 부모 component 
 * Return       : 부모컴포넌트를 리턴한다. 
 **********************************************************************************/ 
pForm.gfn_path = function(o, p)
{
	var sPath = "";
	var nCnt = 0;
	
	try {
		if (o && this.gfn_typeof(o) != "form")
		{
			for (o=o.parent; o!=p; o=o.parent)
			{			
				if(nCnt == 1)
				{
					sPath = o;
					break;
				}
				
				if (this.gfn_typeof(o) == "form")
				{
					nCnt = 1;
				}	
				
			}
		}
	}
	catch(e)
	{
		 trace(e);                // [object Error]
		 trace(e.message);       // 'b'은(는) 선언되지 않은 식별자입니다. (행: 75)
	}

	return sPath;
};

 /**********************************************************************************
 * Function Name: gfn_typeof(obj)
 * Description  : object 받아 어떤 오브젝트 인지 알수있는 함수 
 * Arguments    : obj : 각종 object
 * Return       : object 유형을 알수 있다 예) grid,button,dataset,form 등등
 **********************************************************************************/ 
pForm.gfn_typeof = function(obj) 
{
	if( obj === null ) 
	{
		return 'null'; 
	}
	var typename = typeof(obj);
	if( typename === "object") 
	{
		if( obj instanceof Array) 
		{
			typename = "array";
		} else if( obj instanceof Date) 
		{
			typename = "date"
		} else 
		{
			var tmp = new String(obj);
			var start = tmp.indexOf("[object ");	// [object Grid]
			var end   = tmp.indexOf("]", start);	
			if( start > -1 && end > -1) 
			{
				typename = tmp.substr(8, end-8);
			}
		}
	}
	return typename.toLowerCase();
};

 /**********************************************************************************
 * Function Name: gfn_objComp(oParent, sCompName)
 * Description  : oParent form 경로의 sCompName object 반환
 * Arguments    : oParent	: 대상 object
                  sCompName : 컴포넌트 명칭
 * Return       : object
 **********************************************************************************/  
pForm.gfn_objComp = function(oParent, sCompName)
{	
	var objComp = oParent.form.components;
	var objCompLen = objComp.length;
	for (var i=0; i<objCompLen; i++)
	{
		if (objComp[i].id == sCompName) 
		{
			return objComp[i];
		}
	}
	return null;
};
/**********************************************************************************
 * Function Name: fn_emptyRowDel
 * Description  : 데이터셋의 empty row는 삭제.
 * Arguments    : obj    => objDs(데이터셋명)
 * Return       : N/A
 **********************************************************************************/   
pForm.gfn_emptyRowDel = function(objDs)
{
	var sColNm = objDs.getColID(0);
	var nStrRow = 0;
	var nEndRow = objDs.rowcount-1;
	var nFlag;
	
	objDs.set_enableevent(false);
	objDs.filter(sColNm +"== '' || "+sColNm+"== null", nEndRow, nStrRow);	
	nEndRow = objDs.rowcount-1;
	nColCnt = objDs.colcount;
	
	for (var i=nEndRow; i>=0; i--)                                 //빈Row
	{    	
		nFlag = true;
		for (var j=0; j<nColCnt; j++) 
		{                                                          //컬럼
			if (!this.gfn_isNull(objDs.getColumn(i, j)) ) 
			{
				nFlag = false;
				break;
			}
		}
		
		if (nFlag) 
		{ 
			objDs.deleteRow(i); 
		}		
	}
	
	objDs.filter("");
	objDs.set_enableevent(true);
};
pForm = null;