//XJS=prUtils.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.fv_strCallback ="";
        this.fv_isMsgLoaded = false;
        this.fv_coCd = "1000";

        this.objEditCd;
        this.objEditName;
        this.ds_nameSearch;// = new Dataset();
        this.ds_nameResult;// = new Dataset();
        this.ds_msgSearch;
        this.ds_msgResult;
        this.fnname_dSearch;
        this.fv_app = nexacro.getApplication();
        this.fv_frm;
        this.fv_grdAutoAddrow;
        this.fn_callback;

        this.fn_getEditValue= function(obj)
        {
        	if(obj == undefined)	return "";
        	return obj.value;
        };

        this.fn_getDSValue= function(val)
        {
        	if(val == undefined)	return "";
        	return val;
        };

        this.fn_odCommLoading= function(fn_delayedSearch)
        {
        	if(this.fv_isMsgLoaded == true)	return;

        	this.ds_msgSearch = new Dataset();
        	this.ds_msgSearch.addColumn("SEARCH_GB","string");
        	var nRow = this.ds_msgSearch.addRow();
        	this.ds_msgSearch.setColumn(nRow, "SEARCH_GB", "BO");
        	this.ds_msgResult = new Dataset();
        	this.ds_msgSearch.addColumn("MSG_CD","string");
        	this.ds_msgSearch.addColumn("MSG_CTS","string");

        	if(fn_delayedSearch != undefined)	this.fnname_dSearch = fn_delayedSearch;

        	var sSvcId = "selectCommonMessage";
        	var sUrl = "/od/orderChange/selectCommonMessage.do";
        	var inDs = "ds_search=ds_msgSearch";
        	//var outDs = "ds_msgResult=ds_output1";
        	var outDs = "gds_message=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_getMsgList");
        };

        this.fn_getMsgList = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectCommonMessage") {
        		this.fv_isMsgLoaded = true;
        		//trace("selectCommonMessage is " + this.ds_msgResult.getRowCount());
        		trace("selectCommonMessage is " + this.fv_app.gds_message.getRowCount());

        		if(this.fnname_dSearch != undefined)	{
        			eval("this." + this.fnname_dSearch + "();");
        		}
        	}
        };

        this.fn_getMessage= function(strId)
        {
        	/*if(this.ds_msgResult == null || this.ds_msgResult == undefined || this.ds_msgResult.getRowCount() == 0 )
        		return "MsgList Error";

        	var nRow = this.ds_msgResult.findRow("MSG_CD",strId);
        	if(nRow == -1)	return "Message가 없습니다. TB_CO_SYS_MSG_INFO 에 등록하세요";
        	var strMsgCts = this.ds_msgResult.getColumn(nRow,"MSG_CTS");
        	*/
        	if(this.fv_app.gds_message == null || this.fv_app.gds_message == undefined || this.fv_app.gds_message.getRowCount() == 0 )
        		return "MsgList Error";

        	var nRow = this.fv_app.gds_message.findRow("MSG_CD",strId);
        	if(nRow == -1)	return "Message가 없습니다. TB_CO_SYS_MSG_INFO 에 등록하세요";
        	var strMsgCts = this.fv_app.gds_message.getColumn(nRow,"MSG_CTS");

        	var arrArg = [];
        	for(var i= arguments.length-1; i >= 0 ; i--)
        	{
        		trace("arg " + i + " , " + arguments[i].toString());
        		arrArg.push(arguments[i].toString());
        	}
        	return this.fn_getMessageCts(strMsgCts,arrArg);
        };

        this.fn_getMessageCts= function(strMsg, arrArg)
        {
        	for(var i = 1; i <= arrArg.length; i++) {
        		strMsg = strMsg.replace('&'+i.toString(),arrArg[arrArg.length-i-1]);
        	}
        	return strMsg;
        }

        this.fn_setCodeNameDataset= function(strTag)
        {
        	this.ds_nameSearch = new Dataset();
        	this.ds_nameSearch.addColumn("CO_CD","string");
        	this.ds_nameSearch.addColumn("CD","string");
        	this.ds_nameSearch.addColumn("SEARCH_GB","string");
        	this.ds_nameSearch.addColumn("USE_YN","string");

        	var nRow = this.ds_nameSearch.addRow();
        	this.ds_nameSearch.setColumn(nRow, "CO_CD", this.fv_coCd);
        	this.ds_nameSearch.setColumn(nRow, "CD", this.objEditCd.value);
        	var val = strTag.split('-');
        	if(val[0] != undefined)
        		this.ds_nameSearch.setColumn(nRow, "SEARCH_GB", val[0]);
        	if(val[1] != undefined)
        		this.ds_nameSearch.setColumn(nRow, "USE_YN", val[1]);
        	else
        		this.ds_nameSearch.setColumn(nRow, "USE_YN", "");

        	this.ds_nameResult = new Dataset();
        	this.ds_nameResult.addColumn("NM","string");
        };
        //callback 제공
        this.fn_getCodeName= function(objCD,objName,strTag,strCallback)
        {
        	if(objCD == undefined || objName == undefined || strTag == undefined)	return false;
        	if(objCD.value == "" || objCD.value == null)	{
        		objName.set_value("");
        		return false;
        	}
        	this.objEditCd   = objCD;
        	this.objEditName = objName;

        	this.fn_setCodeNameDataset(strTag);

        	var sSvcId = "selectCommonCodeName";
        	var sUrl = "/od/orderChange/selectCommonCodeName.do";
        	var inDs = "ds_search=ds_nameSearch";
        	var outDs = "ds_nameResult=ds_output1";
        	var arg = "";
        	if(strCallback != undefined)	this.fn_callback = strCallback;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_getCodeNameCB");
        	return true;
        };

        this.fn_getCodeNameCB = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectCommonCodeName") {
        		if(this.objEditName == undefined)	return;
        		if(this.ds_nameResult.getRowCount() == 0)	{
        			this.objEditCd.set_value("");
        			this.objEditCd.setFocus();
        		}
        		else	{
        			this.objEditName.set_value(this.ds_nameResult.getColumn(0, "NM"));
        		}
        		if(this.fn_callback != undefined)	//this.fn_callback
        			eval("this." + this.fn_callback + "();");
        	}
        };

        this.fn_getStrFromDataset = function(ds,nRow) {
        	var strReturn ="";
        	for(var i=0; i< ds.colcount; i++)
        	{
        		strReturn = strReturn + ds.colinfos[i].name + " : " + ds.getColumn(nRow,ds.colinfos[i].name) + ", ";
        	}
        	return strReturn;
        }

        this.fn_setMSearch = function(ingCondDtls,colItm,sList,dsSearch)
        {
        	var arrRows;
        	var strExpr = "COL_ITM =='" + colItm + "'";
        	if(sList == undefined)	return;

        	arrRows = this.ds_select.extractRows(strExpr);
        	this.ds_select.deleteMultiRows( arrRows );

        	sList = sList.replace(/[ ]/g,"");
        	var val = sList.split(',');
        	var nRow ;
        	var strValue ;
        	for(var i=0; i < val.length; i++)
        	{
        		strValue = val[i];
        		if(strValue.length != 0  &&  this.ds_select.findRowExpr("COL_ITM=='"+ colItm + "' && COND_DATA_VAL=='" + strValue + "'") == -1)
        		{
        			nRow = this.ds_select.addRow();
        			this.ds_select.setColumn(nRow, "SES_ID", "");
        			this.ds_select.setColumn(nRow, "INQ_COND_DTLS", ingCondDtls);
        			this.ds_select.setColumn(nRow, "COL_ITM", colItm);
        			this.ds_select.setColumn(nRow, "COND_DATA_VAL", strValue);
        		}
        		/*
        			this.ds_list02.filter("BZPLC_ID=='" + bzplcId + "' && ODR_NO=='" + odrNo + "'");

        			if (this.ds_list02.rowcount == 0) {
        				nRow = this.ds_list02.addRow();
        				this.ds_list02.copyRow(nRow, this.ds_list01, i);
        				this.ds_list02.setColumn(nRow, "CHK", 0);
        			}
        			this.ds_list02.filter("");
        		*/
        	}
        	this.ds_select.filter("COL_ITM=='"+ colItm + "'");
        	var totRowCount = this.ds_select.getRowCount();
        	this.ds_select.filter("");
        	trace("### ds count is " + totRowCount + ", " + colItm );
        	if(dsSearch == undefined)
        		this.ds_search.setColumn(0,colItm,totRowCount);
        	else
        		this[dsSearch].setColumn(0,colItm,totRowCount);
        	//trace("### ds count2 is " + this.ds_search.getColumn(0,colItm) );
        }


        // Multi검색조건 저장
        this.fn_insertSelectedData = function(strCallback) {
        	if(this.ds_select.getRowCount() <= 0 )	return;
        	var sSvcId = "insertOdrInqTgtDtls";
        	var sUrl = "/od/odrPopup/insertOdrInqTgtDtls.do";
        	var inDs = "ds_search=ds_select";
        	var outDs = "";
        	var arg = "";
        	this.fv_strCallback = strCallback;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, strCallback);// "fn_commcallBack");
        };

        // Multi검색조건 삭제
        this.fn_deleteSelectedData = function(strCallback) {
        	var sSvcId = "deleteOdrInqTgtDtls";
        	var sUrl = "/od/odrPopup/deleteOdrInqTgtDtls.do";
        	var inDs = "ds_search=ds_select";
        	var outDs = "";
        	var arg = "";
        	this.fv_strCallback = strCallback;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, strCallback);// "fn_commcallBack");
        };

        this.fn_showTareaInput = function(strFrame,subId,subValue,strCallbackFunc,nWidth,nHeight) {
        	var varPv1 = strFrame;
        	var varPv2 = subId;
        	var frameLeft =0;
        	var frameTop =0;

        	if(this.fv_app.agv_LeftFrame != "")	frameLeft = this.fv_app.agv_LeftFrame.width + this.fv_app.agv_QuickFrame.width;
        	if(this.fv_app.agv_TopFrame != "")	frameTop = this.fv_app.agv_TopFrame.height + this.fv_app.agv_MdiFrame.height;
        	//this.fv_app.agv_LeftFrame.form
        	trace("frameLeft is " + frameLeft);
        	trace("frameTop is " + frameTop);
        	var varX = system.screenToClientX(this,nexacro.toNumber(system.getCursorX())) + 10 + frameLeft;
        	var varY =  system.screenToClientY(this,nexacro.toNumber(system.getCursorY())) + 10 + frameTop;

        	var objChildFrame = new ChildFrame();
        	//var varPv5 = "";

        	objChildFrame.init(varPv1+";"+varPv2, varX, varY, null, null, null, null, "OD::SSP_BO_OA_MSEARCH.xfdl");

        	//if(nexacro..length != 0)	varPv5 = subValue;
        	var objParam = {pv1:varPv1, pv2:varPv2, pv3:nWidth, pv4:nHeight, pv5:subValue};
            objChildFrame.showModal(this.getOwnerFrame(), objParam, this, strCallbackFunc);
        };

        // 컬럼조회 화면 표시
        this.fn_showColSearch = function(tableOwner, tableName, strCallbackFunc, nWidth, nHeight, parent) {
        	var varPv1 = tableOwner;
        	var varPv2 = tableName;
        	var frameLeft =0;
        	var frameTop =0;
        	var isExisted = false;

            //isExisted = this.fn_checkView(tableName);

        	if(this.fv_app.agv_LeftFrame != "")	frameLeft = this.fv_app.agv_LeftFrame.width + this.fv_app.agv_QuickFrame.width;
        	if(this.fv_app.agv_TopFrame != "")	frameTop = this.fv_app.agv_TopFrame.height + this.fv_app.agv_MdiFrame.height;
        	//this.fv_app.agv_LeftFrame.form
        	trace("frameLeft is " + frameLeft + ", getCursorX() : " + system.getCursorX());
        	trace("frameTop is " + frameTop + ", getCursorY() : " + system.getCursorY());

        	var objMainFrame = this.fv_app.mainframe;

        	var varX = system.screenToClientX(this, nexacro.toNumber(system.getCursorX())) - 40 - nWidth + frameLeft;
        	var varY =  system.screenToClientY(this, nexacro.toNumber(system.getCursorY())) + frameTop;

        	if (varX <= nWidth) {
        		varX = system.screenToClientX(this, nexacro.toNumber(system.getCursorX())) + 40 + nWidth + frameLeft;
        	}

        	if ((varY + nHeight) > objMainFrame.getOffsetHeight()) {
        		varY = objMainFrame.getOffsetHeight() - nHeight;
        	}

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(varPv1+";"+varPv2, varX, varY, null, null, null, null, "OD::SSP_BO_OA_COL_SEARCH.xfdl");

        	var objParam = {pv1:varPv1, pv2:varPv2, pv3:nWidth, pv4:nHeight};
            objChildFrame.showModal(this.getOwnerFrame(), objParam, this, strCallbackFunc);

        	/*
        	if (!isExisted) {
        		var objParam = {pv1:varPv1, pv2:varPv2, pv3:nWidth, pv4:nHeight};
        		var sOpenStyle = "dragmovetype=all resizable=true showtitlebar=true showstatusbar=false";
        		nexacro.open(tableName, "OD::SSP_BO_OA_COL_SEARCH.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, varX, varY, nWidth, nHeight, this);
        		//nexacro.open(tableName, "OD::SSP_BO_OA_COL_SEARCH.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, varX, varY, nWidth, nHeight, parent);
        	}
        	*/
        };

        this.fn_checkView = function(sObjectId) {
            if(sObjectId == undefined)  return false;
            var arrPopFrame = nexacro.getPopupFrames( this.getOwnerFrame() ) ;
            for(var i = 0; i < arrPopFrame.length; i++) {
                if(sObjectId == arrPopFrame[i].id )
                    return true;
            }
            return false;
        };

        this.fn_CalDate = function(strVal,objCurr)
        {
        	trace("strVal is " + strVal);
        	if (strVal == "1") {
        		objCurr.setDate(objCurr.getDate() -1);
        	}
        	// 1주일
        	else if (strVal == "2") {
        		objCurr.setDate(objCurr.getDate() -7);
        	}
        	// 2주일
        	else if (strVal == "3") {
        		objCurr.setDate(objCurr.getDate() -14);
        	}
        	// 1개월
        	else if (strVal == "4") {
        		objCurr.setMonth(objCurr.getMonth() -1);
        		objCurr.setDate(objCurr.getDate() +1);
        	}
        	// 3개월
        	else if (strVal == "5") {
        		objCurr.setMonth(objCurr.getMonth() -3);
        		objCurr.setDate(objCurr.getDate() +1);
        	}
        	// 6개월
        	else if (strVal == "6") {
        		objCurr.setMonth(objCurr.getMonth() -6);
        		objCurr.setDate(objCurr.getDate() +1);
        	}
        	// 1년
        	else if (strVal == "7") {
        		objCurr.setMonth(objCurr.getMonth() -12);
        		objCurr.setDate(objCurr.getDate() +1);
        	}
        	var sFrom = objCurr.getFullYear() + ((objCurr.getMonth() + 1) + "").padLeft(2, '0') + (objCurr.getDate() + "").padLeft(2, '0');
        	return sFrom;
        };

        this.copyPaste = {

            addGrid: function(grid,frm,addRow)
            {
                if (system.navigatorname == "nexacro" || system.navigatorname == "IE" )
                {
                    grid.setEventHandler("onkeydown", this.copyGridCellData1(this), this);
                }
                else
                {
                    var objTA = document.createElement("textarea");
                    document.body.appendChild(objTA);
                    grid.setEventHandler("onkeydown", this.copyGridCellData2(this, objTA), this);
                }
        		if(frm != undefined)	this.fv_frm = frm;
        		if(addRow != undefined) this.fv_grdAutoAddrow = addRow;
        		else					this.fv_grdAutoAddrow = false;
            },

            makeData: function(obj)
            {
                var sBody = "";
                var sSpr = "    ";    //Tab 값 입력
                var nStartrow = obj.selectstartrow;
                var nEndrow = obj.selectendrow;
                var nStartCol = obj.selectstartcol;
                var nEndCol = obj.selectendcol;

                var nLoop = nStartrow.length;
                if(nStartCol == -1 && nEndCol == -1)
                {
                    nStartCol = 0;
                    nEndCol = obj.getFormatColCount()-1;
                }
                for(var k=0; k < nLoop; k++)
                {
                    for (var i = nStartrow[k]; i <= nEndrow[k]; i++)
                    {
                        for (var j = nStartCol; j <= nEndCol; j++)
                        {
                            if (j < nEndCol)
                            {
                                sBody += obj.getCellText(i, j) + sSpr;
                            }
                            else
                            {
                                sBody += obj.getCellText(i, j) + "\r\n";
                            }
                        }
                    }
                }
                return sBody.substring(0, sBody.indexOf("<", 0));
            },
        	pasteData: function(obj,copyData,e)
            {
                var colSeperator = "\t";
        		var rowData ="";
        		if( system.navigatorname == "nexacro" || system.navigatorname =="IE"){
        			rowData = copyData.split("\r\n");
        		}
        		else{
        			rowData = copyData.split(/[\n\f\r]/);
        		}
        		var rowDataCount = rowData.length - 1;

        		trace("okey1 is " + copyData);
        		trace("okey2 is " + rowDataCount);

        		obj.set_enableevent(false);
        		obj.set_enableredraw(false);

        		var datasetName = obj.binddataset;
        		var ds = obj.getBindDataset();

        		ds.set_enableevent(false);

        		var grdCellCount = obj.getCellCount("body");
        		var rowCount = ds.getRowCount();

        		var startrow = nexacro.toNumber(obj.selectstartrow);
        		if( startrow == -9) return;

        		var endrow   = nexacro.toNumber(obj.selectendrow);
        		if( endrow == -9) return;

        		var startcol = 0;
        		var endcol = 0;

        		if( obj.selecttype == "row" || obj.selecttype == "multirow")	{
        			//startcol = 0;
        			//endcol = obj.getCellCount("body")-1;
        			e.stopPropagation();
        			return;
        		}
        		else{
        			startcol = nexacro.toNumber(obj.selectstartcol);
        			endcol   = nexacro.toNumber(obj.selectendcol);
        		}

        		var currRow = startrow;
        		var cellIndex = startcol;
        		var maxColumnCount = 0;
        		var checkIndex = {};
        		var colid = new Array();

        		for (var i = 0; i < rowDataCount; i++)
        		{
        			if(rowCount <= currRow && this.fv_grdAutoAddrow == true)
        				ds.addRow();

        			if( rowCount > currRow || (rowCount <= currRow && this.fv_grdAutoAddrow == true) )
        			{
        				var columnData = rowData[i].split(colSeperator);
        				var columnLoopCount = cellIndex + columnData.length;

        				if(columnLoopCount > grdCellCount) {
        					columnLoopCount = grdCellCount;
        				}

        				if(maxColumnCount < columnLoopCount) {
        					maxColumnCount = columnLoopCount;
        				}

        				var k = 0;
        				for(var j = cellIndex; j < columnLoopCount; j++)
        				{
        					if(i==0)	colid[j] = obj.getCellProperty("body", j, "text").substr(5);  //bind: 제거
        					ds.setColumn(currRow, colid[j], columnData[k]);
        					k++;
        				}
        				currRow++;
        			}
        		}

        		ds.rowposition = currRow;
        //		endrow = endrow + rowDataCount - 1;
        //		endcol = maxColumnCount - 1;
        		//system.clearClipboard();

        		obj.set_enableredraw(true);
        		obj.set_enableevent(true);
        		ds.set_enableevent(true);

        		//obj.selectArea(startrow, startcol, endrow, endcol);
        		//var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
        		e.stopPropagation();
        		//e.preventDefault();
            },
            copyGridCellData1: function(pThis)
            {
                return function(obj, e)
                {
                    if (e.ctrlkey && !e.shiftkey && !e.altkey)
                    {
                        if (e.keycode == 67)      //'c'
                        {
                            var rtnStr = pThis.makeData(obj);
                            system.clearClipboard();
                            system.setClipboard("CF_TEXT", rtnStr);
                        }
        				else if (e.keycode == 86) //'v'
                        {
        //alert("Event Raised 1");
        //alert("string is " + system.getClipboard("CF_TEXT"));
        					if(this.fv_frm == undefined)	return;
        					var pastedData = system.getClipboard("CF_TEXT");
        					pThis.pasteData(obj,pastedData,e);
                        }
                    }
                }
            },
            copyGridCellData2: function(pThis, objTA)
            {
                return function(obj, e)
                {
                    if (e.ctrlkey && !e.shiftkey && !e.altkey)
                    {
                        if (e.keycode == 67)      //'c'
                        {
                            var rtnStr = pThis.makeData(obj);
                            objTA.value = rtnStr;
                            objTA.select();
                        }
        				else if (e.keycode == 86) //'v'
                        {
        					if(this.fv_frm == undefined)	return;
        					var pastedData;
        					objTA.value = "";
        					objTA.select();
        					document.execCommand("copy");
        					nexacro._OnceCallbackTimer.callonce(this.fv_frm, function() {
        						pastedData = objTA.value;
        					//trace("1111 is " + pastedData);
        					pThis.pasteData(obj,pastedData,e);
        					}, 100);
                        }
                    }
                }
            }
        };

        this.ofn_exportExcel = function(oParam)
        {
        	var oForm = oParam.form;   //form
        	var aGrid = oParam.grid;   // 대상 그리드
        	var sFileNm = oParam.fileName +"_"+this.gfn_getDate("time");
        	var sSheetName = oParam.sheetName;
        	var oOwnerForm = oForm.getOwnerFrame().form;
        	var oCallBack = oParam.callBackFunc;
        	var totalCount = oParam.form.totalCount;
        	if(totalCount == undefined) {
        		totalCount = 10000;
        	}
        	var oReturn;
        	var oDs = null;
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

        	var sSvcUrl = nexacro.getEnvironment().services["svcUrl"].url + "/XExportImport.do";
        	var sContRow = 1;

        	var oExport = oForm.objects["commExcelExport"];

        	if (oExport == null || oExport == undefined) {
        		oExport = new ExcelExportObject();
        		this.addChild("commExcelExport", oExport);
        		oExport.set_name("commExcelExport");
        		oExport.addEventHandler("onsuccess", this.ofn_exportExcelSuccess,  this);
        		oExport.addEventHandler("onerror", this.ofn_exportExcelError, this);
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

        	//var selType = 	aGrid.selecttype;
        	//aGrid.set_selecttype("row");
        	if (aGrid instanceof Array)
        	{
        		var selType = new Array();
        		for(var i=0; i<aGrid.length; i++) {
        			var oGrid = aGrid[i];

        			if (!oForm.gfn_isNull(sSheetName))
        			{
        				if (sSheetName instanceof Array)
        					sSheetNameTemp = sSheetName[i];
        				else
        					sSheetNameTemp = sSheetName + (i+1);
        			}
        			else {
        				sSheetNameTemp = "sheet" + (i+1);
        			}
        			selType.push(oGrid.selecttype);
        			aGrid[i].set_selecttype("row");
        			oExport.addExportItem(nexacro.ExportItemTypes.GRID, oGrid, sSheetNameTemp + "!A1","allband","allrecord","suppress","allstyle","image","", "both","cellline");
        		}
        		oReturn = oExport.exportData();
        		for(var i=0; i<aGrid.length; i++) {
        			aGrid[i].set_selecttype(selType[i]);
        		}
        	} else {
        		var selType = 	aGrid.selecttype;
        		aGrid.set_selecttype("row");
        		if (oForm.gfn_isNull(sSheetName))	sSheetName = "sheet";
        		oReturn = oExport.addExportItem(nexacro.ExportItemTypes.GRID, aGrid, sSheetName + "!A1","allband","allrecord","suppress","allstyle","image","", "both","cellline");
        		oReturn = oExport.exportData();
        		aGrid.set_selecttype(selType);
        	}
        };


        // 엑셀 익스포트 성공 callback 함수
        this.ofn_exportExcelSuccess = function(oGrid,e)
        {
        	var sCallback = oGrid.user_callback;
            //화면의 callback 함수 호출
        	if (!this.gfn_isNull(sCallback)) {
        		if (this[sCallback]) this.lookupFunc(sCallback).call("EXPORT",0);
        	}
        };

        // 엑셀 익스포트 실패 callback 함수
        this.ofn_exportExcelError = function(oGrid,e)
        {
        	var sCallback = oGrid.user_callback;
            //화면의 callback 함수 호출
        	if (!this.gfn_isNull(sCallback)) {
        		if (this[sCallback]) this.lookupFunc(sCallback).call("EXPORT",-1);
        	}
        };

        this.fn_didChange = function(dataset) {
        	if(dataset == undefined || dataset == null)	return false;
        	var deletedCount = dataset.getDeletedRowCount();
        	if (deletedCount > 0)	return true;

        	var rowType = "";

        	for (var i = 0; i < dataset.rowcount; i++) {
        		var rowType = dataset.getRowType(i);
        		if (rowType == Dataset.ROWTYPE_NORMAL)	continue;
        		if (rowType == Dataset.ROWTYPE_INSERT || rowType == Dataset.ROWTYPE_UPDATE)	return true;
        	}

        	return false;
        };

        this.fn_getSaveDataset = function(dsSource, dsTarget) {
        	if(dsTarget != undefined && dsTarget.rowcount != 0 )
        		dsTarget.clearData();

        	var deletedCount = dsSource.getDeletedRowCount();
        	var colInfos = dsSource.colinfos;
        	var colInfosTarget = dsTarget.colinfos;
        	var found = false;
        	var foundIudGb = false;

        	for (var i = 0; i < colInfos.length; i++) {
        		found = false;
        		for (var j = 0; j < colInfosTarget.length; j++) {
        			if (colInfosTarget[j].name == colInfos[i].name) {
        				found = true;
        				break;
        			}
        		}

        		if (!found) {
        			dsTarget.addColumn(colInfos[i].name, colInfos[i].type, colInfos[i].size);
        		}
        	}

        	for (var i = 0; i < colInfosTarget.length; i++) {
        		if (colInfosTarget[j].name == "IUD_GB") {
        			foundIudGb = true;
        			break;
        		}
        	}

        	if (!foundIudGb)	dsTarget.addColumn("IUD_GB", "STRING", 256);

        	var nRow = -1;
        	var rowType = "";
        	for (var i = 0; i < dsSource.rowcount; i++) {
        		rowType = dsSource.getRowType(i);
        		if (rowType == Dataset.ROWTYPE_NORMAL)	continue;

        		nRow = dsTarget.addRow();
        		for (var j = 0; j < colInfos.length; j++) {
        			dsTarget.setColumn(nRow, colInfos[j].name, dsSource.getColumn(i, colInfos[j].name));
        		}
        		if (rowType == Dataset.ROWTYPE_INSERT)	dsTarget.setColumn(nRow, "IUD_GB", "I");
        		else	dsTarget.setColumn(nRow, "IUD_GB", "U");
        	}

        	if (deletedCount <= 0)	return dsTarget;

        	var deletedArray = dsSource.getDeletedRowset();
        	dsTarget = this.fn_setDeletedDataToServerSet(deletedArray, dsTarget);
        	return dsTarget;
        };

        this.fn_setDeletedDataToServerSet = function(deletedArray, dsTarget) {
        	if (deletedArray.length <= 0) {
        		trace("### fn_setDeletedDataToServerSet - There is no deleted data.");
        		return dsTarget;
        	}

        	var colInfosTarget = dsTarget.colinfos;
        	var nRow = -1;
        	var data = "";
        	for (var i = 0; i < deletedArray.length; i++) {
        		data = deletedArray[i];
        		if (dsTarget.rowcount > 0)	nRow = dsTarget.insertRow(0);
        		else	nRow = dsTarget.addRow();

        		for (var j = 0; j < colInfosTarget.length; j++) {
        			if (colInfosTarget[j].name == "IUD_GB") {
        				dsTarget.setColumn(nRow, "IUD_GB", "D");
        				continue;
        			}
        			dsTarget.setColumn(nRow, colInfosTarget[j].name, data[j]);
        		}
        	}

        	return dsTarget;
        };

        this.fn_lpad = function(str, padLen, padStr) {
            while (str.length < padLen)
                str = padStr + str;
            return str;
        };

        this.fn_rpad = function(str, padLen, padStr) {
            while (str.length < padLen)
                str += padStr;
            return str;
        };

        this.fn_today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth() + 1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        };

        // "년월일시분초" 반환
        this.fn_todayTime = function() {
        	var objDate = new Date();
        	var sTodayTime  = objDate.getFullYear().toString();
        	    sTodayTime += (objDate.getMonth() + 1).toString().padLeft(2, "0");
        	    sTodayTime += objDate.getDate().toString().padLeft(2, "0");
        		sTodayTime += objDate.getHours().toString().padLeft(2, "0");
        		sTodayTime += objDate.getMinutes().toString().padLeft(2, "0");
        		sTodayTime += objDate.getSeconds().toString().padLeft(2, "0");

        	return sTodayTime;
        };

        this.fn_calcToday = function(diffDay, diffHours, diffMinutes, diffSeconds) {
        	var objCurr = new nexacro.Date();

        	if (!this.gfn_isNull(diffDay))		objCurr.setDate(objCurr.getDate() + diffDay);
        	if (!this.gfn_isNull(diffHours))	objCurr.setHours(objCurr.getHours() + diffHours);
        	if (!this.gfn_isNull(diffMinutes))	objCurr.setMinutes(objCurr.getMinutes() + diffMinutes);
        	if (!this.gfn_isNull(diffSeconds))	objCurr.setSeconds(objCurr.getSeconds() + diffSeconds);

        	var sDate = objCurr.getFullYear() + ((objCurr.getMonth() + 1) + "").padLeft(2, "0") + (objCurr.getDate() + "").padLeft(2, "0");
        	//sDate += (objCurr.getHours() + "").padLeft(2, "0") + (objCurr.getMinutes() + "").padLeft(2, "0") + (objCurr.getSeconds() + "").padLeft(2, "0");
        	// 초단위는 "00"으로 처리요청.
        	sDate += (objCurr.getHours() + "").padLeft(2, "0") + (objCurr.getMinutes() + "").padLeft(2, "0") + "00";
        	return sDate;
        };

        this.fn_getPreDay = function(standardDay) {
        	var objCurr = new nexacro.Date();
        	var year = standardDay.substr(0, 4);
        	var month = standardDay.substr(4, 2);
        	var day = standardDay.substr(6, 2);

        	objCurr.setYear(year);
        	objCurr.setMonth(month);
        	objCurr.setDate(day);
        	objCurr.setDate(objCurr.getDate() - 1);

        	var sDate = objCurr.getFullYear() + (objCurr.getMonth() + "").padLeft(2, '0') + (objCurr.getDate() + "").padLeft(2, '0');
        	return sDate;
        };

        // 개인정보 마스크 요청
        this.fn_secureInfo = function(row, columnId, countOfNormal, dataset) {
        	if (row < 0 || this.gfn_isNull(columnId) || countOfNormal < 1)	return "";

        	var orgValue = dataset.getColumn(row, columnId);

        	if (this.gfn_isNull(orgValue) || orgValue.length <= 0)	return "";
        	if (orgValue.length <= countOfNormal)	return orgValue;

        	var countValue = orgValue.substr(0, countOfNormal);
        	// "*" 개수는 고정으로...
        	var maskValue = "***"

        	return countValue + maskValue;
        };

        this.fn_secureInfoRange = function(row, columnId, maskStartIndex, maskLength, dataset) {
        	if (row < 0 || this.gfn_isNull(columnId) || maskStartIndex < 0 || maskLength <= 0)	return "";

        	var orgValue = dataset.getColumn(row, columnId);

        	if (this.gfn_isNull(orgValue) || orgValue.length <= (maskStartIndex + maskLength))	return "";

        	var strFirst = orgValue.substr(0, maskStartIndex);
        	var strMiddle = "";
        	var strLast = orgValue.substr(maskStartIndex + maskLength, orgValue.length - (maskStartIndex + maskLength));

        	for (i = 0; i < maskLength; i++)	strMiddle += "*";

        	return strFirst + strMiddle + strLast;
        };

        this.fn_secureForIP = function(row, columnId, posIndex, dataset, delimiter, secureChar) {
        	if (row < 0 || this.gfn_isNull(columnId) || posIndex < 0 || posIndex > 3)	return "";

        	if (this.gfn_isNull(delimiter))	delimiter = ".";
        	if (this.gfn_isNull(secureChar))	secureChar = "*";

        	var orgValue = dataset.getColumn(row, columnId);

        	if (this.gfn_isNull(orgValue) || orgValue.length <= 0)	return "";

        	//var ips = orgValue.split(".");
        	var ips = orgValue.split(delimiter);
        	var secureTarget = ips[posIndex];
        	var secureResult = "";
        	var rtnValue = "";

        	for (i = 0; i < secureTarget.length; i++)	secureResult += secureChar;

        	for (i = 0; i < ips.length; i++) {
        		if (i == posIndex)	rtnValue += secureResult;
        		else	rtnValue += ips[i];

        		if ((i + 1) != ips.length)	rtnValue += delimiter;
        	}

        	return rtnValue;
        };

        // 이름 마스크
        this.fn_secureName = function(row, columnId, dataset) {
        	if (row < 0 || this.gfn_isNull(columnId))	return "";

        	var orgValue = dataset.getColumn(row, columnId);

        	if (this.gfn_isNull(orgValue) || orgValue.length <= 0)	return "";

        	var lengthOfName = orgValue.length;
        	var rtnValue = "";

        	if (lengthOfName == 1)	return "*";
        	else if (lengthOfName == 2)		rtnValue = orgValue.substr(0, 1) + "*";
        	else if (lengthOfName == 3)		rtnValue = orgValue.substr(0, 1) + "*" + orgValue.substr(2, 1);
        	else							rtnValue = orgValue.substr(0, 2) + "**";

        	return rtnValue;
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
