(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFileUpDown");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"UP_FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"UP_FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FILE_GROUP\">NEW</Col><Col id=\"FILE_IMAGE\">theme://file_icon_XLS.png</Col><Col id=\"FILE_TYPE\">xlsx</Col><Col id=\"FILE_NAME\">aaaa.xlsx</Col><Col id=\"FILE_PATH\">E:\\\\</Col><Col id=\"FILE_SIZE\">660.503 KB</Col><Col id=\"UP_FILE_ID\">aaaa.xlsx</Col></Row><Row><Col id=\"FILE_GROUP\">NEW</Col><Col id=\"FILE_IMAGE\">theme://file_icon_IMG.png</Col><Col id=\"FILE_TYPE\">jpg</Col><Col id=\"FILE_NAME\">Chrysanthemum.jpg</Col><Col id=\"FILE_PATH\">E:\\\\</Col><Col id=\"FILE_SIZE\">858.783 KB</Col><Col id=\"UP_FILE_ID\">Chrysanthemum.jpg</Col></Row><Row><Col id=\"FILE_GROUP\">NEW</Col><Col id=\"FILE_IMAGE\">theme://file_icon_IMG.png</Col><Col id=\"FILE_TYPE\">jpg</Col><Col id=\"FILE_NAME\">expression_error.JPG</Col><Col id=\"FILE_PATH\">E:\\\\</Col><Col id=\"FILE_SIZE\">329.038 KB</Col><Col id=\"UP_FILE_ID\">expression_error.JPG</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fut_FileUpLoad", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fut_FileDownLoad", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_file","10","33",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_file");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"UPLOAD\"><Columns><Column size=\"24\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"340\"/><Column size=\"85\"/><Column size=\"24\" band=\"right\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:_CHK\" border=\"1px solid #e2e0df,0px solid #e2e0df\"/><Cell col=\"1\" displaytype=\"imagecontrol\" text=\"bind:FILE_IMAGE\" border=\"1px solid #e2e0df,0px solid #e2e0df\"/><Cell col=\"2\" text=\"bind:FILE_NAME\" border=\"1px solid #e2e0df,0px solid #e2e0df\"/><Cell col=\"3\" text=\"bind:FILE_SIZE\" textAlign=\"right\" border=\"1px solid #e2e0df,0px solid #e2e0df\"/><Cell col=\"4\" textAlign=\"center\" border=\"1px solid #e2e0df,0px solid #e2e0df\" text=\"X\"/></Band></Format><Format id=\"DOWNLOAD\"><Columns><Column size=\"24\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"340\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:_CHK\" border=\"1px solid #e2e0df,0px solid #e2e0df\"/><Cell col=\"1\" displaytype=\"imagecontrol\" text=\"bind:FILE_IMAGE\" border=\"1px solid #e2e0df,0px solid #e2e0df\"/><Cell col=\"2\" text=\"bind:FILE_NAME\" border=\"1px solid #e2e0df,0px solid #e2e0df\"/><Cell col=\"3\" text=\"bind:FILE_SIZE\" textAlign=\"right\" border=\"1px solid #e2e0df,0px solid #e2e0df\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileOpen","10","10","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("첨부");
            obj.set_cssclass("btn_WF_AddFile");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"9","85","21","174",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Delete All");
            obj.set_cssclass("btn_WF_DelAll");
            this.addChild(obj.name, obj);

            obj = new Button("btn_downLoad",null,"9","80","21","92",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Down");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upLoad",null,"9","80","21","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Upload");
            obj.set_cssclass("btn_WF_Save");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("pgb_file","80","101",null,"20","80",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleFileUpDown.xfdl", function() {
        /**
        *
        *  @MenuPath
        *  @FileName 	sampleFileUpDownTransfer.xfdl
        *  @Creator
        *  @CreateDate
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */
        this.vsFormFlag = "UPLOAD";  //UPLOAD, DOWNLOAD,""  조건별 환경
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        //아이콘별 확장자 목록.
        this.iconInfo = {
        		file_icon_ZIP: ["zip","rar","7z"],
        		file_icon_IMG: ["jpg", "jpeg", "gif", "png", "bmp"],
        		file_icon_TXT: ["txt", "xml"],
        		file_icon_DOC: ["doc", "docx"],
        		file_icon_XLS: ["xls", "xlsx"],
        		file_icon_PPT: ["ppt", "pptx"],
        		file_icon_PDF: ["pdf"],
        		file_icon_ETC: ["etc"] //위 확장자 목록에 일치하지 않을 경우. default icon
        	};

        this.vsFileGroup = null;

        this.vsServerUrl = "";
        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	this.fn_formInit();

        	if(this.gfn_isNull(this.vsFileGroup)) this.vs_FileGroup = "NEW";

        	this.vsServerUrl = "http://127.0.0.1:8017/nexacro/";
        };


        this.fn_formInit = function(){
        	switch (this.vsFormFlag){
        		case "UPLOAD":
        			this.btn_downLoad.set_visible(false);
        			this.btn_fileOpen.set_visible(true);
        			this.btn_delete.set_visible(true);

        			this.btn_delete.set_right(this.btn_downLoad.right);
        			this.btn_upLoad.set_visible(true);

        			this.grd_file.set_formatid("UPLOAD");
        		break;
        		case "DOWNLOAD":
        			this.btn_fileOpen.set_visible(false);
        			this.btn_delete.set_visible(false);
        			this.btn_upLoad.set_visible(false);
        			this.btn_downLoad.set_visible(true);
        			this.btn_downLoad.set_right(this.btn_upLoad.right);

        			this.grd_file.set_formatid("DOWNLOAD");

        			//임시 script
        			this.ds_file.copyData(this.ds_temp);

        		break;
        		default:
        			this.btn_fileOpen.set_visible(true);
        			this.btn_delete.set_visible(true);
        			this.btn_downLoad.set_visible(true);
        			this.btn_upLoad.set_visible(true);

        			this.grd_file.set_formatid("UPLOAD");
        		break;
        	}
        };
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        //file size를 return 해주는 함수
        this.fn_cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
        	for (nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };

        //file image 처리 함수
        this.fn_fileImage = function(sFileType){

        	var sRet = "";
        	var aType;
        	var sType="";
        	var nCount = 0;
        	for(var name in this.iconInfo){
        		aType = this.iconInfo[name];
        		nCount = aType.length;
        		for (var i=0; i< nCount; i++) {
        			if(aType[i] == sFileType){
        				sType = name;
        			}
        		}
        	}
        	sRet = "theme://" + sType + ".png";
        	return sRet;
        };

        // PlatformData 구성 : DataSet SSV
        this.fn_serializeSSV = function (arrDataset){
        	var _rs_ = String.fromCharCode(30);

        	var aList = [];
        		aList.push("SSV:utf-8" + _rs_);

        	// Dataset
        	for (var i = 0; i < arrDataset.length; i++) {
        		aList.push(arrDataset[i].saveSSV(arrDataset[i].name, "normal"));
        	}

        	var rtnVal = aList.join("");
        	return rtnVal;
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        //첨부 버튼 click 이벤트
        this.btn_fileOpen_onclick = function(obj,e)
        {
        	var strTitle = "FileLoad";
        	var constOpenMode = 3; 	// 1 : FileDialog.LOAD / 2 : FileDialog.SAVE / 3 : FileDialog.MULTILOAD / 4 : FileDialog.SELFOLDER
        	var rtn = this.FileDialog.open(strTitle, constOpenMode, "%UserApp%");
        };

        //upload 버튼 click 이벤트
        this.btn_upLoad_onclick = function(obj,e)
        {
        	var sUploadUrl = this.vsServerUrl + "file/uploadTransfer.jsp?path=nexacro";

        	// PostData : Dataset 전달 --------------------------------------- Start
        	// SSV 방식 만 쓰자 .........
        // 	var aListDs = [];
        // 		aListDs.push(this.ds_file);
        //
        // 	var sRetList = this.fn_serializeSSV(aListDs);
        //
        // 	this.fut_FileUpLoad.setPostData("inputDatasets", sRetList);
        	// PostData : Dataset 전달 --------------------------------------- End
        	//this.FileUpTransfer.removePostData("removeFile");		// removeFile 삭제

        	this.fut_FileUpLoad.upload(sUploadUrl);

        	this.pgb_file.set_visible(true);
        };

        //delete 버튼 click 이벤트
        this.btn_delete_onclick = function(obj,e)
        {
        	var sFileName = "";
        	for(var i =  this.ds_file.getRowCount() ; i >= 0  ; i--){
        		sFileName = this.ds_file.getColumn(i,"FILE_NAME");
        		this.fut_FileUpLoad.removeFile(sFileName);
        		this.ds_file.deleteRow(i);
        	}
        };

        this.btn_downLoad_onclick = function(obj,e)
        {
        	var aFileList = new Array();;
        	for(var i = 0 ; i < this.ds_file.getRowCount() ; i++){
        		aFileList[i] = this.ds_file.getColumn(i,"UP_FILE_ID")
        	}

        	var sDownLoadUrl = this.vsServerUrl + "file/downloadTransfer.jsp?path=nexacro";
        	this.fut_FileDownLoad.setPostData("filenamelist",aFileList);
        	this.fut_FileDownLoad.setPostData("fileName",this.vs_FileGroup);
        	this.fut_FileDownLoad.download(sDownLoadUrl,"D://"+this.vs_FileGroup+".zip");
        };

        //grid cell click 함수
        this.grd_file_oncellclick = function(obj,e)
        {
        	if(e.cell == 4){
        		if(this.vsFormFlag != "UPLOAD"){
        			//delete
        			sFileName = this.ds_file.getColumn(e.row,"FILE_NAME");
        			this.fut_FileUpLoad.removeFile(sFileName);
        			this.ds_file.deleteRow(e.row);
        		}
        	}
        };

        //grid double click시 활용
        this.grd_file_oncelldblclick = function(obj,e)
        {
        	if(e.cell == 2 || e.cell == 3){
        		//downLoad
        		var sFileName = this.ds_file.getColumn(e.row,"UP_FILE_ID");
        		if(!this.gfn_isNull(sFileName)){
        			var sDownLoadUrl = this.vsServerUrl + "file/downloadTransfer.jsp?path=nexacro";
        			this.fut_FileDownLoad.setPostData("filenamelist",sFileName);
        			this.fut_FileDownLoad.download(sDownLoadUrl,"D://"+sFileName);
        		}
        	}
        };

         //grid drop 이벤트 입니다.
        this.grd_file_ondrop = function(obj,e)
        {
        	var oFileList = e.filelist;
        	var oFile = null;
        	//drag 된 file 갯수 만큼 추가 하는 logic
        	for(var i = 0 ; i < oFileList.length ; i++){
        		oFile = oFileList[i];
        		oFile.addEventHandler("onsuccess", this.fn_File_onsuccess, this);
        		oFile.addEventHandler("onerror", this.fn_File_onerror , this);

        		oFile.open(null,1);
        	}
        };

        //virtualFile open시 success 발생시 타는 함수
        this.fn_File_onsuccess = function(obj, e){
        	switch(e.reason){
        		case 1:
        			obj.getFileSize();
        		break;
        		case 9:
        			//동일 file 검색
        			var bExist = this.fut_FileUpLoad.existFile(obj);
        			if (!bExist) {
        				 nfileIndex = this.fut_FileUpLoad.addFile(obj.filename, obj);

        				 if (nfileIndex > -1) {
        					nNewRow = this.ds_file.addRow();

        					sExptType = obj.filename.lastIndexOf(".")+1;
        					sFileType = obj.filename.substr(sExptType).toLowerCase();

        					this.ds_file.setColumn(nNewRow,"FILE_GROUP", this.vs_FileGroup);
        					this.ds_file.setColumn(nNewRow,"FILE_IMAGE",this.fn_fileImage(sFileType));
        					this.ds_file.setColumn(nNewRow,"FILE_TYPE",sFileType);
        					this.ds_file.setColumn(nNewRow,"FILE_NAME",obj.filename);
        					this.ds_file.setColumn(nNewRow,"FILE_PATH",obj.path);
        					this.ds_file.setColumn(nNewRow,"FILE_SIZE",this.fn_cutFileSize(e.filesize));
        				 }
        			}
        		break;
        	}
        };

        //virtualFile open시 error 발생시 타는 함수
        this.fn_File_onerror = function(obj, e){

        };

        //fileDialog close 이벤트
        this.FileDialog_onclose = function(obj,e)
        {
        	var oFileList = e.virtualfiles;
        	var oFile = null;
        	//drag 된 file 갯수 만큼 추가 하는 logic
        	for(var i = 0 ; i < oFileList.length ; i++){
        		oFile = oFileList[i];
        		oFile.addEventHandler("onsuccess", this.fn_File_onsuccess, this);
        		oFile.addEventHandler("onerror", this.fn_File_onerror , this);

        		oFile.open(null,1);
        	}
        };


        this.fut_FileUpLoad_onprogress = function(obj,e)
        {
        //	trace("FileUpTransfer00_onprogress >> e.total : " + e.total + " / e.loaded : " + e.loaded);
        	this.pgb_file.set_max(e.total);
        	this.pgb_file.set_pos(e.loaded);

        	if (e.total == e.loaded) {
        		this.pgb_file.set_pos(0);
        		this.pgb_file.set_visible(false);
        	}
        };


        //file upload 성공시에 발생하는 함수
        this.fut_FileUpLoad_onsuccess = function(obj,e)
        {
        	var oReturnDs = e.datasets[0];
        	var sFileName = "";
        	if (!this.gfn_isNull(oReturnDs) ) {
        		for(var i = 0 ; i < oReturnDs.getRowCount() ; i++){
        			sFileName = oReturnDs.getColumn(i,"fileName");
        			nFindRow = this.ds_file.findRow("FILE_NAME",sFileName);
        			if(nFindRow >= 0){
        				this.ds_file.setColumn(nFindRow,"UP_FILE_ID",oReturnDs.getColumn(i,"fileId"))
        			} else {
        				trace("sFileName ===> " + sFileName);
        			}
        		}
        	}
        	this.ds_file.applyChange();
        };

        this.fut_FileUpLoad_onerror = function(obj,e)
        {
        	trace("FileUpTransfer_onerror >> e.statuscode :" + e.statuscode + " / e.errormsg : " + e.errormsg);
        	trace("FileUpTransfer_onerror >> e.requesturi : " + e.requesturi);
        	this.pgb_file.set_pos(0);
        	this.pgb_file.set_visible(false);
        };

        this.fut_FileDownLoad_onerror = function(obj,e)
        {
        	trace("FileDownTransfer_onerror >>>> e.errortype : " + e.errortype);
        	trace("FileDownTransfer_onerror >>>> e.statuscode : " + e.statuscode);
        	trace("FileDownTransfer_onerror >>>> e.errormsg : " + e.errormsg);
        	trace("FileDownTransfer_onerror >>>> e.requesturi : " + e.requesturi);
        };

        this.fut_FileDownLoad_onsuccess = function(obj,e)
        {
        	trace("FileDownTransfer_onsuccess >>>> e.url : " + e.url);
        	trace("FileDownTransfer_onsuccess >>>> e.targetfullpath : " + e.targetfullpath);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.grd_file.addEventHandler("ondrop",this.grd_file_ondrop,this);
            this.grd_file.addEventHandler("oncelldblclick",this.grd_file_oncelldblclick,this);
            this.grd_file.addEventHandler("oncellclick",this.grd_file_oncellclick,this);
            this.btn_fileOpen.addEventHandler("onclick",this.btn_fileOpen_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_downLoad.addEventHandler("onclick",this.btn_downLoad_onclick,this);
            this.btn_upLoad.addEventHandler("onclick",this.btn_upLoad_onclick,this);
            this.fut_FileUpLoad.addEventHandler("onsuccess",this.fut_FileUpLoad_onsuccess,this);
            this.fut_FileUpLoad.addEventHandler("onprogress",this.fut_FileUpLoad_onprogress,this);
            this.fut_FileUpLoad.addEventHandler("onerror",this.fut_FileUpLoad_onerror,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.fut_FileDownLoad.addEventHandler("onerror",this.fut_FileDownLoad_onerror,this);
            this.fut_FileDownLoad.addEventHandler("onsuccess",this.fut_FileDownLoad_onsuccess,this);
        };
        this.loadIncludeScript("sampleFileUpDown.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
