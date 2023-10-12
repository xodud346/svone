(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Kupload");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new RaonkUpload("RaonkUpload00","40","132","1184","378",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_FolderTransfer("1");
            obj.set_text("");
            obj.set_UseTrace("true");
            obj.set_RunTimes("agent");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","42","46","148","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Kupload.xfdl", function() {
        var trId = "";

        this.RaonkUpload00_RAONKUPLOAD_UploadingCancel = function(obj, paramObj)
        {
        	console.log('전송 취소 이벤트 : ' + obj.id);
            console.log(paramObj);
        	console.log(paramObj.arrUploadedFileList);


        	if (paramObj.userdata.arrUploadedFileList != null && paramObj.userdata.arrUploadedFileList != '') {
        		console.log('업로드 된 파일 리스트 -');

        		var uploadedFileLen = paramObj.userdata.arrUploadedFileList.length;
        			for (var i = 0; i < uploadedFileLen; i++) {
        				console.log(paramObj.userdata.arrUploadedFileList[i].uploadName + ', ' + paramObj.userdata.arrUploadedFileList[i].uploadPath);
                    }
                }
        };

        this.RaonkUpload00_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
                    console.log('Error : ' + paramObj.userdata.strCode + ', ' + paramObj.userdata.strMessage);

                    if (paramObj.userdata.arrUploadedFileList != null && paramObj.userdata.arrUploadedFileList != '') {
                        console.log('업로드 된 파일 리스트');
                        var uploadedFileLen = paramObj.userdata.arrUploadedFileList.length;
                        for (var i = 0; i < uploadedFileLen; i++) {
                            console.log(paramObj.userdata.arrUploadedFileList[i].uploadName + ', ' + paramObj.userdata.arrUploadedFileList[i].uploadPath);
                        }
                    }

        };

        function uuidv4() {
          return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
          );
        }

        function fn_delArrayToString(arrayDel) {
            var str = '-- 삭제된 파일 정보 --\n';
            str += fn_RPAD('Key', ' ', 8) + ' : {0}\n';
            str += fn_RPAD('FileName', ' ', 8) + ' : {1}\n';
            str += fn_RPAD('Size', ' ', 8) + ' : {2}\n';
            str += '-- 삭제된 파일 정보 끝 --\n';

            var sUniqKey = '';
            var sOriginalName = '';
            var sSize = '';

            var filesArrLen = arrayDel.length;
            for (var i = 0; i < filesArrLen; i++) {
                sUniqKey += arrayDel[i].uniqKey;
                sOriginalName += arrayDel[i].originalName;
                sSize += arrayDel[i].size;

                if (i != filesArrLen - 1) {
                    sUniqKey += ',';
                    sOriginalName += ',';
                    sSize += ',';
                }
            }

            str = str.replace('{0}', sUniqKey);
            str = str.replace('{1}', sOriginalName);
            str = str.replace('{2}', sSize);

            console.log(str);
        }


        function fn_newArrayToString(arrayNew) {
            var str = '-- 업로드 파일 정보 시작 --\n';
            str += fn_RPAD('RealFileName', ' ', 20) + ' : {0}\n';
            str += fn_RPAD('ServerFileName', ' ', 20) + ' : {1}\n';
            str += fn_RPAD('IsLargeFile', ' ', 20) + ' : {2}\n';
            str += fn_RPAD('Size', ' ', 20) + ' : {3}\n';
            str += fn_RPAD('UploadPath', ' ', 20) + ' : {4}\n';
            str += fn_RPAD('LogicalPath', ' ', 20) + ' : {5}\n';
            str += fn_RPAD('fileExtention', ' ', 20) + ' : {6}\n';
            str += fn_RPAD('LocalPath', ' ', 20) + ' : {7}\n';
            str += fn_RPAD('CustomValue', ' ', 20) + ' : {8}\n';
            str += fn_RPAD('ResponseCustomValue', ' ', 20) + ' : {9}\n';
            str += fn_RPAD('Order', ' ', 20) + ' : {10}\n';
            str += '-- 업로드 파일 정보 끝 --\n';

            var originalName = '';
            var uploadName = '';
            var size = '';
            var uploadPath = '';
            var logicalPath = '';
            var fileExtension = '';
            var localPath = '';
            var customValue = '';
            var responseCustomValue = '';
            var order = '';
            var isLargeFile = '';

            var fileLen = arrayNew.length;
            for (var i = 0; i < fileLen; i++){

                originalName += arrayNew[i].originalName;
                uploadName += arrayNew[i].uploadName;
                isLargeFile += arrayNew[i].isLargeFile;
                size += arrayNew[i].size;
                uploadPath += arrayNew[i].uploadPath;
                logicalPath += arrayNew[i].logicalPath;
                fileExtension += arrayNew[i].extension;
                localPath += arrayNew[i].localPath;
                customValue += arrayNew[i].customValue;
                responseCustomValue += arrayNew[i].responseCustomValue;
                order += arrayNew[i].order;

                if (i != fileLen - 1) {
                    originalName += ',';
                    uploadName += ',';
                    size += ',';
                    uploadPath += ',';
                    logicalPath += ',';
                    fileExtension += ',';
                    localPath += ',';
                    customValue += ',';
                    responseCustomValue += ',';
                    order += ',';
                    isLargeFile += ',';
                }
            }

            str = str.replace('{0}', originalName);
            str = str.replace('{1}', uploadName);
            str = str.replace('{2}', isLargeFile);
            str = str.replace('{3}', size);
            str = str.replace('{4}', uploadPath);
            str = str.replace('{5}', logicalPath);
            str = str.replace('{6}', fileExtension);
            str = str.replace('{7}', localPath);
            str = str.replace('{8}', customValue);
            str = str.replace('{9}', responseCustomValue);
            str = str.replace('{10}', order);

        	console.log(str);
        }


        function fn_RPAD(s, c, n) {
            if (!s || !c || s.length >= n) {
                return s;
            }

            var max = (n - s.length) / c.length;
            for (var i = 0; i < max; i++) {
                s += c;
            }

            return s;
        }

        this.RaonkUpload00_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
                    // K Upload는 array, json, xml, text delimit 방식으로 결과값을 제공합니다.
                    // 파일에 대한 정보 중 업로드가 완료된 파일의 정보(업로드 된 파일경로,업로드 된 파일명)는
                    // RAONKUPLOAD_UploadComplete 이벤트 안에서만 추출이 가능합니다.

                    var dataArray = RAONKUPLOAD.GetListInfo();
                    //var dataJson = RAONKUPLOAD.GetListInfo('json', uploadID);
                    //var dataText = RAONKUPLOAD.GetListInfo('text', uploadID);
                    //var dataXml = RAONKUPLOAD.GetListInfo('xml', uploadID);

                    // 신규 업로드된 파일
                    var arrayNew = dataArray.newFile;
                    if (arrayNew) fn_newArrayToString(arrayNew);
                    //var jsonNew = dataJson.newFile;
                    //if (jsonNew) fn_newJsonToString(jsonNew);
                    //var xmlNew = dataXml.newFile;
                    //if (xmlNew) fn_newXmlToString(xmlNew);
                    //var textNew = dataText.newFile;
                    //if (textNew) fn_newTextToString(textNew, uploadID);

                    // 삭제된 파일
                    var arrayDel = dataArray.deleteFile;
                    if (arrayDel) fn_delArrayToString(arrayDel);
                    //var jsonDel = dataJson.deleteFile;
                    //if (jsonDel) fn_delJsonToString(jsonDel);
                    //var xmlDel = dataXml.deleteFile;
                    //if (xmlDel) fn_delXmlToString(xmlDel);
                    //var textDel = dataText.deleteFile;
                    //if (textDel) fn_delTextToString(textDel, uploadID);

                    console.log('업로드 완료 : ' + obj.id);
        			trId = uuidv4();

        };

        this.RaonkUpload00_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
                    console.log('업로드 생성 완료 : ' + obj.id);
        			console.log(paramObj);

        };

        this.RaonkUpload00_RAONKUPLOAD_BeforeUpload = function(obj, paramObj)
        {
        			for (var i=0; i < sheets.length; i++) {
        				var cv = trId + "|" + sheets[i].productId + "|"
        					 + sheets[i].partnerId + "|"
        					 + sheets[i].modDate + "|"
        					 + sheets[i].msdsUrl + "|"
        					 + sheets[i].msdsFile;
        				this.RaonkUpload00.SetFileCustomValue(i, cv);
        			}

        			console.log('업로드 시작 : ' + obj.id);
        			console.log(paramObj);
        };


        var sheets = [];

        this.RaonkUpload00_RAONKUPLOAD_OnExcelLoadedWithOnlyData = function(obj, paramObj)
        {
        		/*
        	GetExcelData CallBack Event
        	paramObj.userdata.resultMsg : "OK" or "FAIL"
        	paramObj.userdata.resultData : object or null
        	paramObj.userdata.errorMsg : resultMsg 값이 "FAIL" 인 경우에 string 값이 있음
        	paramObj.userdata.uploadID : 업로드 ID
        	*/

        	console.log(paramObj.userdata);
        	var resultData = "resultMsg : " + paramObj.userdata.resultMsg + "\n"
        	+ "errorMsg : " + paramObj.userdata.errorMsg + "\n"
        	+ "-------------------- resultData --------------------\n" ;

        	console.log(paramObj);

        	if(paramObj.userdata.resultData && paramObj.userdata.resultData.Sheets){
        	  var arrayFileList = [];
        		for(var i = 0; i < paramObj.userdata.resultData.Sheets.length; i++){
        			var sheet = paramObj.userdata.resultData.Sheets[i];
        				resultData += "-------------------- sheetName : " + sheet.sheet_name + " --------------------\n";
        				for(var j = 0; j < sheet.Data.length; j++){
        // 					resultData += sheet.data_title_A1 + " : " // GetExcelData API 호출 시 data_title로 지정한 cell
        // 					+  sheet.Data[j].datacell_01 + "\n";	  // GetExcelData API 호출 시 return_name로 지정한 cell
        //
        // 					resultData += sheet.data_title_B1 + " : " // GetExcelData API 호출 시 data_title로 지정한 cell
        // 					+  sheet.Data[j].datacell_02 + "\n";	  // GetExcelData API 호출 시 return_name로 지정한 cell
        //
        // 					resultData += sheet.data_title_C1 + " : " // GetExcelData API 호출 시 data_title로 지정한 cell
        // 					+  sheet.Data[j].datacell_03 + "\n\n";	  // GetExcelData API 호출 시 return_name로 지정한 cell

        					arrayFileList.push({
        						path: sheet.Data[j].msdsFile
        					});

        					sheets.push(sheet.Data[j]);
        				}
        		}

        		// 업로드 컴포넌트에 파일 추가
        		this.RaonkUpload00.AddLocalFileDirectlyEx(arrayFileList);
        	}

        	console.log(resultData);
        };


        this.Button00_onclick = function(obj,e)
        {
        	var excelOptions = {
                        "LoadKindOfType": 1,
        	            "data_sheets" : [
        	                {
        						// 엑셀 시트
        		                "sheet_data_name":  "MSDS",
        		                "data" : [
        			                    {
        			                    "data_start": "A2",
        			                    "data_title": "A1",
        			                    "return_name": "productId"
        		                    },
        		                    {
        			                    "data_start": "B2",
        			                    "data_title": "B1",
        			                    "return_name": "partnerId"
        		                    },
        		                    {
        			                    "data_start": "C2",
        			                    "data_title": "C1",
        			                    "return_name": "modDate"
        		                    },
        		                    {
        			                    "data_start": "D2",
        			                    "data_title": "D1",
        			                    "return_name": "msdsUrl"
        		                    },
        		                    {
        			                    "data_start": "E2",
        			                    "data_title": "E1",
        			                    "return_name": "msdsFile"
        		                    }
        		                ]
        	                }
        	            ]
                    }

                    var param = {
                        options: excelOptions
                    };

                    this.RaonkUpload00.GetExcelData(param);
        };

        this.RaonkUpload00_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        };

        this.Kupload_onload = function(obj,e)
        {
        		trId = uuidv4();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Kupload_onload,this);
            this.RaonkUpload00.addEventHandler("RAONKUPLOAD_UploadingCancel",this.RaonkUpload00_RAONKUPLOAD_UploadingCancel,this);
            this.RaonkUpload00.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload00_RAONKUPLOAD_OnError,this);
            this.RaonkUpload00.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload00_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload00.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload00_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload00.addEventHandler("RAONKUPLOAD_BeforeUpload",this.RaonkUpload00_RAONKUPLOAD_BeforeUpload,this);
            this.RaonkUpload00.addEventHandler("RAONKUPLOAD_OnExcelLoadedWithOnlyData",this.RaonkUpload00_RAONKUPLOAD_OnExcelLoadedWithOnlyData,this);
            this.RaonkUpload00.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload00_RAONKUPLOAD_AfterAddAllFile,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Kupload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
