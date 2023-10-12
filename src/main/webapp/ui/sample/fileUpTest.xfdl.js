(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fileUpTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_META_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PGM_ID\">SSP_PW_MS_03</Col><Col id=\"MNU_SEQ\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file2", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_META_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ProgressBar("ProgressBar","550","10","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","483","10","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","13","44","727","106",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_file");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"142\"/><Column size=\"148\"/><Column size=\"141\"/><Column size=\"162\"/><Column size=\"136\"/><Column size=\"116\"/><Column size=\"184\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DOC_REG_ID\"/><Cell col=\"1\" text=\"DOC_REG_SEQ\"/><Cell col=\"2\" text=\"ATFL_NM\"/><Cell col=\"3\" text=\"ATFL_LEN\"/><Cell col=\"4\" text=\"ATFL_LEN_NM\"/><Cell col=\"5\" text=\"ATFL_STOR_PATH\"/><Cell col=\"6\" text=\"ORI_ATFL_NM\"/><Cell col=\"7\" text=\"SAP_DOC_ID\"/><Cell col=\"8\" text=\"ATFL_META_SEQ\"/></Band><Band id=\"body\"><Cell text=\"bind:DOC_REG_ID\"/><Cell col=\"1\" text=\"bind:DOC_REG_SEQ\"/><Cell col=\"2\" text=\"bind:ATFL_NM\"/><Cell col=\"3\" text=\"bind:ATFL_LEN\"/><Cell col=\"4\" text=\"bind:ATFL_LEN_NM\"/><Cell col=\"5\" text=\"bind:ATFL_STOR_PATH\"/><Cell col=\"6\" text=\"bind:ORI_ATFL_NM\"/><Cell col=\"7\" text=\"bind:SAP_DOC_ID\"/><Cell col=\"8\" text=\"bind:ATFL_META_SEQ\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload","13","247","460","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_buttonsize("80");
            obj.set_itemheight("24");
            obj.set_buttontext("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_search","397","10","79","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Edit("FILE_NAME","13","10","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("pgmId","810","10","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("SSP_PW_MS_03");
            obj.set_text("SSP_PW_MS_03");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","750","10","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("PGM_ID");
            this.addChild(obj.name, obj);

            obj = new Edit("mnuSeq","925","10","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("1");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch00","483","247","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","13","277","727","106",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_file2");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"127\"/><Column size=\"142\"/><Column size=\"148\"/><Column size=\"141\"/><Column size=\"162\"/><Column size=\"136\"/><Column size=\"116\"/><Column size=\"184\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DOC_REG_ID\"/><Cell col=\"1\" text=\"DOC_REG_SEQ\"/><Cell col=\"2\" text=\"ATFL_NM\"/><Cell col=\"3\" text=\"ATFL_LEN\"/><Cell col=\"4\" text=\"ATFL_LEN_NM\"/><Cell col=\"5\" text=\"ATFL_STOR_PATH\"/><Cell col=\"6\" text=\"ORI_ATFL_NM\"/><Cell col=\"7\" text=\"SAP_DOC_ID\"/><Cell col=\"8\" text=\"ATFL_META_SEQ\"/></Band><Band id=\"body\"><Cell text=\"bind:DOC_REG_ID\"/><Cell col=\"1\" text=\"bind:DOC_REG_SEQ\"/><Cell col=\"2\" text=\"bind:ATFL_NM\"/><Cell col=\"3\" text=\"bind:ATFL_LEN\"/><Cell col=\"4\" text=\"bind:ATFL_LEN_NM\"/><Cell col=\"5\" text=\"bind:ATFL_STOR_PATH\"/><Cell col=\"6\" text=\"bind:ORI_ATFL_NM\"/><Cell col=\"7\" text=\"bind:SAP_DOC_ID\"/><Cell col=\"8\" text=\"bind:ATFL_META_SEQ\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","763","77","135","57",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("FileUploadTransfer");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","770","300","135","57",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("FileUpload");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","pgmId","value","ds_search","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","mnuSeq","value","ds_search","MNU_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("fileUpTest.xfdl", function() {

        this.svcUrl  = nexacro.getEnvironment().services["svcUrl"].url;               			// web서버 URL ex)http://localhost:8080/
        this.fileType = ".pptx, .ppt, .docx, .doc, .xls, .xlsx, image/*, text/*, .zip"; //첨부파일 종류

        this.checkList = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel"];

        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	// 파일업로드 확장자 필터기능 크롬에서안됨
        	this.FileUpload.set_filefilter( "Excel Files(*.xlsx)|*.xls;*.xlsx|Word Files(*.docx)|*.doc;*.docx|ALL Files(*.*)|*.*|" );
        }


        this.btn_file_search_onclick = function(obj,e)
        {
        	this.FileDialog.set_accept(this.fileType);
        	this.FileDialog.open('nexacro17', FileDialog.LOAD);
        };


        this.btnSearch_onclick = function(obj,e)
        {
        	if( this.confirm("첨부한 파일을 저장 하시겠습니까?") ) {
        		this.searFlag = false;

        		this.FileUpTransfer.setPostData("pgmId", this.pgmId.value);
        		this.FileUpTransfer.setPostData("mnuSeq", this.mnuSeq.value);
        		this.FileUpTransfer.upload("/co/file-upload.do");
        	}
        };


        this.fn_search = function() {
        	var sSvcId = "selectFileList";
        	var sUrl = this.svcUrl + "co/select-file-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_file=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }


        this.fn_callback = function() {
        	console.log("aaaa");
        	console.log(this.ds_file);
        }


        this.FileDialog_onclose = function(obj,e)
        {
        	if(this.gfn_isNull(e.virtualfiles)){
        		return;
        	}

        	var vFile = e.virtualfiles[0];
        	var file_type = vFile._handle.type;

        	if( this.checkList.indexOf(file_type) == -1 ) {
        		alert("허용되는 파일이 아닙니다.");
        		this.FileDialog.open('nexacro17', FileDialog.LOAD);
        		return false;
        	}

        	//VirtualFile 이벤트 생성
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, 1);

        };

        //파일 추가 성공
        this.fileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			//파일리스트 초기화
        			this.FileUpTransfer.clearFileList();

        			this.FILE_NAME.set_value(obj.filename);
        			this.FileUpTransfer.addFile(obj.filename, obj);

        			break;
        	}
        }


        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];
        	var docRegId = objCallDs.getColumn(0, "docRegId");

        	this.ds_search.setColumn(0, "DOC_REG_ID", docRegId);

        	this.fn_search();

        };

        this.FileUpTransfer_onprogress = function(obj,e)
        {
        	var rtnPercent = this.fnGetPercent(e.loaded, e.total);
        	this.ProgressBar.set_pos(rtnPercent);
        };

        this.FileUpTransfer_onerror = function(obj,e)
        {
        	console.log(obj);
        	console.log(e);
        };


        this.fnGetPercent = function(nload,nTotal)
        {
        	//일부값 ÷ 전체값 X 100
        	var nCurPercent = (nload / nTotal) * 100;
        	return nCurPercent;
        };














        this.FileUpload_onitemchanged = function(obj,e)
        {
        	var file_type = obj.filelist[0]._handle.type;
        	if( this.checkList.indexOf(file_type) == -1 ) {
        		alert("허용되는 파일이 아닙니다.");
        		this.FileUpload.deleteItem(0);
        		this.FileUpload.appendItem();
        		//this.FileUpload.filefindbuttons[0].click();
        		return false;
        	}
        };

        this.FileUpload_onerror = function(obj,e)
        {
        	console.log(obj);
        	console.log(e);
        };

        this.FileUpload_onsuccess = function(obj,e)
        {
        	alert("업로드 완료");
        	//바인딩
        	this.ds_file2.copyData(e.datasets[0]);

        	/*
        	var objCallDs = e.datasets[0];
        	var docRegId = objCallDs.getColumn(0, "docRegId");

        	this.ds_search.setColumn(0, "DOC_REG_ID", docRegId);

        	this.fn_search();
        	*/

        };


        this.btnSearch00_onclick = function(obj,e)
        {
        	if( this.confirm("첨부한 파일을 저장 하시겠습니까?") ) {
        		this.FileUpload.upload(this.svcUrl + "co/file-upload-component.do?pgmId=" + this.pgmId.value + "&mnuSeq=" + this.mnuSeq.value);
        	}
        };



        this.FileUpload_ondeleteitem = function(obj,e)
        {
        	console.log(this.FileUpload);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.FileUpload.addEventHandler("onerror",this.FileUpload_onerror,this);
            this.FileUpload.addEventHandler("onsuccess",this.FileUpload_onsuccess,this);
            this.FileUpload.addEventHandler("onitemchanged",this.FileUpload_onitemchanged,this);
            this.FileUpload.addEventHandler("ondeleteitem",this.FileUpload_ondeleteitem,this);
            this.btn_file_search.addEventHandler("onclick",this.btn_file_search_onclick,this);
            this.btnSearch00.addEventHandler("onclick",this.btnSearch00_onclick,this);
            this.Static01_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
        };
        this.loadIncludeScript("fileUpTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
