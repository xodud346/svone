(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("FILE(UPLOAD/DOWNLOAD)");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fileSingle", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_lageCdNm","68","424","145","26",null,null,null,null,null,"26",this);
            obj.set_taborder("0");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileSearch","222","345","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","222","315","348","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","9",null,"31","270",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            obj.set_text("업로드 & 다운로드 공통모듈은 업무별로 따로 생성하여 사용하세요.");
            obj.set_font("bold 18px/normal \"Malgun Gothic\",\"굴림체\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_01","20","40",null,"31","270",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_box03");
            obj.set_wordWrap("char");
            obj.set_text("파일업로드 성공시에 Dataset으로 리턴합니다.");
            obj.set_font("bold 18px/normal \"Malgun Gothic\",\"굴림체\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgViewer","70","276","143","142",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","220","377",null,"129","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_downLoad");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\"/><Cell col=\"1\" text=\"DOC_REG_ID\"/><Cell col=\"2\" text=\"DOC_REG_SEQ\"/><Cell col=\"3\" text=\"ATFL_NM\"/><Cell col=\"4\" text=\"ORI_ATFL_NM\"/><Cell col=\"5\" text=\"ATFL_LEN\"/><Cell col=\"6\" text=\"ATFL_STOR_PATH\"/><Cell col=\"7\" text=\"FILE_TYPE\"/><Cell col=\"8\" text=\"ETC_FDS_1\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:DOC_REG_ID\"/><Cell col=\"2\" text=\"bind:DOC_REG_SEQ\"/><Cell col=\"3\" text=\"bind:ATFL_NM\"/><Cell col=\"4\" text=\"bind:ORI_ATFL_NM\"/><Cell col=\"5\" text=\"bind:ATFL_LEN\"/><Cell col=\"6\" text=\"bind:ATFL_STOR_PATH\"/><Cell col=\"7\" text=\"bind:FILE_TYPE\"/><Cell col=\"8\" text=\"bind:ETC_FDS_1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",850,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_lageCdNm","value","ds_fileSingle","ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CO_09.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_CO_09.xfdl", function() {
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/
        this.init_file_path = "upload";
        this.lv_save_path   = "RD";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	// 파일업로드 확장자 필터기능
        	this.FileUploadSingle.set_filefilter("Image Files |*.jpg;*.jpeg;*.png;*.gif;*.ico|JPEG(*.jpg,jpeg)|*.jpg;*.jpeg|PNG(*.png)|*.png|GIF(*.gif)|*.gif|ICO(*.ico)|*.ico|");
        };
        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
        // 한개파일찾기
        this.btn_fileSearch_onclick = function(obj,e)
        {
        	//this.edt_lageCdNm.set_value("");                 // 파일명 초기화
        	this.FileUploadSingle.deleteItem(0);               // FileUpload 0번째 삭제
        	this.FileUploadSingle.appendItem();                // FileUpload 0번째 추가
        	this.FileUploadSingle.filefindbuttons[0].click();  // 파일 선택 다일로그박스 활성화
        };

         /************************************************************************************************
         * 업로드
         * 화면에 fileupload 컴포넌트를 사이즈 0 으로 생성합니다.
         ************************************************************************************************/

        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.FileUploadSingle.value;   					// 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]
        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        	if(!(sCompValue.toUpperCase() == "PNG" || sCompValue.toUpperCase() == "JPG"))
        	{
        		this.gfn_alert("MSG00046","파일 정보","","information");  // 파일형식이 아닙니다.
        		return false;
        	}
        	var sFilePath = this.FileUploadSingle.value;                        // 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명

        	this.ds_fileSingle.clearData();
        	var nRow      = this.ds_fileSingle.addRow();
        	this.ds_fileSingle.setColumn(nRow, "ATFL_STOR_PATH", sFilePath);         // 싱글 파일 패스
        	this.ds_fileSingle.setColumn(nRow, "ATFL_NM",        sFileName);         // 싱글 파일 명

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			// web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        	    strUrl += "savePath=" + this.init_file_path;               		// 메인폴더 경로

        	if(!this.gfn_isNull(this.lv_save_path))
        	{
        		strUrl += "/" + this.lv_save_path;                              // 서브폴더 경로
        	}

        	strUrl += "&docRegId="    + this.gfn_nvl(this.ds_uploadResult.getColumn(0,"DOC_REG_ID"),"");
        	strUrl += "&etcFds2='1'";

        	var bSucc = this.FileUploadSingle.upload(strUrl); 					// 파일 업로드
        };

        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	/**
        		e.datasets[0] 를 이용하여 서버에 업로드된 파일의 정보를 DB에 저장합니다.
        		파일업로드 성공시에 Dataset으로 리턴합니다.
        	*/
        	//trace("fileUpload_onsuccess >> " + e.datasets[0].saveXML());
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	this.fn_setFileImageUpload(this.ds_uploadResult,this.ds_downLoad,this.imgViewer);
        };

        this.FileUploadSingle_onerror = function(obj,e)
        {
        	alert("fileUpload_onerror >> " + e.errormsg);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_fileSearch.addEventHandler("onclick",this.btn_fileSearch_onclick,this);
            this.FileUploadSingle.addEventHandler("onerror",this.FileUploadSingle_onerror,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
        };
        this.loadIncludeScript("SSP_BO_CO_09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
