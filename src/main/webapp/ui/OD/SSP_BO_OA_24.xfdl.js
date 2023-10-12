(function() 
{ 
    return function() 
    { 
        if (!this._is_form) 
            return; 
         
        var obj = null; 
         
        this.on_create = function() 
        { 
            this.set_name("SSP_BO_OA_02_07"); 
            this.set_titletext("주문 정보"); 
            if (Form == this.constructor) 
            { 
                this._setFormPosition(1336,846); 
            } 
             
            // Object(Dataset, ExcelExportObject) Initialize 
            obj = new Dataset("ds_search", this); 
            obj.set_useclientlayout("true"); 
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>"); 
            this.addChild(obj.name, obj); 
 
 
            obj = new Dataset("ds_list01", this); 
            obj.set_useclientlayout("true"); 
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_DELAY_LOCK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_LOCK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_LOCK_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_TRMN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_TRMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_TRMN_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_HLD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>"); 
            this.addChild(obj.name, obj); 
 
 
            obj = new Dataset("ds_list02", this); 
            obj.set_useclientlayout("true"); 
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>"); 
            this.addChild(obj.name, obj); 
 
 
            obj = new Dataset("ds_downLoad", this); 
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>"); 
            this.addChild(obj.name, obj); 
 
 
            obj = new FileDownTransfer("FileDownload", this); 
            this.addChild(obj.name, obj); 
             
            // UI Components Initialize 
            obj = new Div("Div00","0","20",null,"124","0",null,null,null,null,null,this); 
            obj.set_taborder("1"); 
            obj.set_text("Div00"); 
            obj.set_background("transparent"); 
            obj.set_formscrolltype("none"); 
            this.addChild(obj.name, obj); 
 
            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("5"); 
            obj.set_text("■ 주문 상태 정보"); 
            obj.set_cssclass("sta_WF_title01"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static03","0","30",null,"32","0",null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("6"); 
            obj.set_cssclass("sta_cm_box02L_tdt"); 
            obj.set_text(""); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static07","0","61",null,"32","0",null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("7"); 
            obj.set_cssclass("sta_cm_box02L"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static65","0","92",null,"32","0",null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("8"); 
            obj.set_cssclass("sta_cm_box02L"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static10","0","92","130","32",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("9"); 
            obj.set_text("주문변경 Block 여부"); 
            obj.set_cssclass("sta_cm_box01L"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static06_00","649","61","130","32",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("10"); 
            obj.set_text("주문 종결 사유"); 
            obj.set_cssclass("sta_cm_box01L"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02","0","30","130","32",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("11"); 
            obj.set_text("정산처리 Block 여부"); 
            obj.set_cssclass("sta_cm_box01L_tdt"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static22","649","30","130","32",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("12"); 
            obj.set_text("정산처리 Block 사유"); 
            obj.set_cssclass("sta_cm_box01L_tdt"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static06_01","0","61","130","32",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("13"); 
            obj.set_text("주문 종결 여부"); 
            obj.set_cssclass("sta_cm_box01L"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02_01_00_00_01_01","130","30","10","30",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("14"); 
            obj.set_text("10"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02_01_00_00_01_01_00","779","30","10","30",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("15"); 
            obj.set_text("10"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static06_00_00","649","92","130","32",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("16"); 
            obj.set_cssclass("sta_cm_box01L"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02_00_01_00_00_01_00","0","20","30","10",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("17"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            obj.set_text("10"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_adjProcBlockYn","140","34","499","24",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("0"); 
            obj.set_readonly("true"); 
            obj.set_text("예/아니오"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02_01_00_00_01_01_01","639","30","10","30",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("18"); 
            obj.set_text("10"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_adjProcBlockRsn","789","34",null,"24","11",null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("1"); 
            obj.set_readonly("true"); 
            obj.set_text("B2 | 제각요청"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","1325","31","10","30",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("19"); 
            obj.set_text("10"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_odrTrmnYn","140","65","499","24",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("2"); 
            obj.set_readonly("true"); 
            obj.set_text("예/아니오"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_odrChgBlockYn","140","96","499","24",null,null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("4"); 
            obj.set_readonly("true"); 
            obj.set_text("예/아니오"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_odrTrmnRsn","789","65",null,"24","11",null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("3"); 
            obj.set_readonly("true"); 
            obj.set_text("C2 | 종결"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Div("Div01","0","Div00:30",null,null,"0","0",null,null,null,null,this); 
            obj.set_taborder("1"); 
            obj.set_text("Div00"); 
            this.addChild(obj.name, obj); 
 
            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div01.form); 
            obj.set_taborder("0"); 
            obj.set_text("■ 첨부 파일"); 
            obj.set_cssclass("sta_WF_title01"); 
            this.Div01.addChild(obj.name, obj); 
 
            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div01.form); 
            obj.set_taborder("1"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            obj.set_text("10"); 
            this.Div01.addChild(obj.name, obj); 
 
            obj = new Grid("grid_list01","0","30",null,null,"0","0",null,null,null,null,this.Div01.form); 
            obj.set_taborder("2"); 
            obj.set_autofittype("col"); 
            obj.set_nodatatext("조회된 결과가 없습니다."); 
            obj.set_binddataset("ds_list02"); 
            obj.set_cellsizingtype("col"); 
            obj.set_selecttype("area"); 
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"문서 유형\"/><Cell col=\"1\" text=\"파일 명\"/><Cell col=\"2\" text=\"크기\"/></Band><Band id=\"body\"><Cell text=\"bind:DOC_TYPE\"/><Cell col=\"1\" text=\"bind:ATFL_NM\"/><Cell col=\"2\" text=\"bind:ATFL_LEN\"/></Band></Format></Formats>"); 
            this.Div01.addChild(obj.name, obj); 
            // Layout Functions 
            //-- Default Layout : this 
            obj = new Layout("default","",1336,846,this,function(p){}); 
            this.addLayout(obj.name, obj); 
             
            // BindItem Information 
            obj = new BindItem("item0","Div01.form.sta_prdIdNm","text","ds_list01","PRD_ID_NM"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item1","Div01.form.sta_mnfIdNm","text","ds_list01","MNFR_NO_NM"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item2","Div01.form.sta_orgplcCdNm","text","ds_list01","ORGPLC_CTRY_CD_NM"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item3","Div01.form.sta_spec","text","ds_list01","REPR_SPEC_ATTR"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item4","Div01.form.sta_stockNo","text","ds_list01","STOCK_NO"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item5","Div01.form.sta_catKiller","text","ds_list01","CATG_KILR_CD"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item6","Div01.form.chk_hubYn","value","ds_list01","HUB_HNL_PSB_YN"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item7","Div01.form.chk_fastDlvYn","value","ds_list01","QCK_DLV_YN"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item8","Div01.form.chk_bzCrdPrd","value","ds_list01","BZCRD_YN"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item9","Div00.form.edt_adjProcBlockYn","value","ds_list01","ADJ_DELAY_LOCK_YN"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item10","Div00.form.edt_adjProcBlockRsn","value","ds_list01","ADJ_LOCK_CD_NM"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item11","Div00.form.edt_odrTrmnYn","value","ds_list01","ODR_TRMN_YN"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item12","Div00.form.edt_odrTrmnRsn","value","ds_list01","ODR_TRMN_CD_NM"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item13","Div00.form.edt_odrChgBlockYn","value","ds_list01","CHG_HLD_YN"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
             
            // TriggerItem Information 
 
        }; 
         
        this.loadPreloadList = function() 
        { 
 
        }; 
         
        // User Script 
        this.addIncludeScript("SSP_BO_OA_24.xfdl","OD::odUtils.xjs"); 
        this.registerScript("SSP_BO_OA_24.xfdl", function() { 
        // 주문관리 상세 - 주문정보 
 
        /*********************************************************************************************** 
         * Form 변수 선언 영역 
        ************************************************************************************************/ 
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/; 
 
        this.fv_oApp = nexacro.getApplication();	//application object 
 
        this.odrNo = ""; 
        this.odrItmNo = ""; 
        this.bzplcId = ""; 
        this.odrpsnId = ""; 
 
        /*********************************************************************************************** 
        * FORM EVENT 영역 
        ************************************************************************************************/ 
 
        this.SSP_BO_OA_02_07_oninit = function(obj,e) 
        { 
        	var nIndex = this.addEventHandlerLookup( "onload", "fn_afterFormLoad", this.parent.parent.parent); 
        }; 
 
        this.SSP_BO_OA_02_07_onload = function(obj,e) 
        { 
        	//공통 함수 호출(필수) 
        	this.gfn_formOnLoad(this); 
        	this.resetScroll(); 
        	this.fn_odCommLoading(); 
 
        	this.copyPaste.addGrid(this.Div01.form.grid_list01); 
        }; 
 
        /*********************************************************************************************** 
        * Transaction 서비스 호출 영역 
        ************************************************************************************************/ 
        this.fn_search = function() { 
        	var sSvcId = "selectOdrInfo"; 
        	var sUrl = "/od/oderlist/selectOdrInfo.do"; 
        	var inDs = "ds_search=ds_search"; 
        	var outDs = "ds_list01=ds_output1 ds_list02=ds_output2"; 
        	var arg = ""; 
 
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack"); 
        }; 
 
        /*********************************************************************************************** 
        * Callback 처리 영역 
        ************************************************************************************************/ 
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{ 
        	if (svcID == "selectOdrInfo") { 
        		trace("### selectOdrInfo - ds_list01.rowcount : " + this.ds_list01.rowcount); 
        	} 
        }; 
 
        /*********************************************************************************************** 
        * 외부 호출 FUNCTION 영역 
        ************************************************************************************************/ 
 
 
        /*********************************************************************************************** 
        * 사용자 함수 영역 
        ************************************************************************************************/ 
        // 조회 함수(모든 탭 폼에 있어야되는 함수) 
        this.fn_searchOdrInfo = function(odrNo, odrItmNo, bzplcId, odrpsnId) { 
        	this.odrNo = odrNo; 
        	this.odrItmNo = odrItmNo; 
        	this.bzplcId = bzplcId; 
        	this.odrpsnId = odrpsnId; 
 
        	this.ds_search.setColumn(0, "ODR_NO", this.odrNo); 
        	this.ds_search.setColumn(0, "ODR_ITM_NO", this.odrItmNo); 
        	this.ds_search.setColumn(0, "BZPLC_ID", this.bzplcId); 
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd); 
 
        	this.fn_search(); 
        }; 
        // 데이터 변경내역 유무 조회(모든 탭 폼에 있어야되는 함수) 
        this.fn_shouldSave = function() { 
        /*	var rowType = ""; 
        	var deletedCount = 0; 
        	// ds_list01 
        	for (var i = 0; i < this.ds_list01.rowcount; i++) { 
        		rowType = this.ds_list01.getRowType(i); 
        		deletedCount = this.ds_list01.getDeletedRowCount(); 
 
        		if (rowType == Dataset.ROWTYPE_UPDATE || 
        			rowType == Dataset.ROWTYPE_INSERT || 
        			deletedCount > 0) { 
        			return true; 
        		} 
        	} 
        */ 
        	return false; 
        }; 
 
        /*********************************************************************************************** 
        * FileDownload EVENT 영역 
        ************************************************************************************************/ 
 
        this.FileDownload_onerror = function(obj,e) 
        { 
        	//alert("errormsg : " + e.errormsg + ", errortype : " + e.errortype + ", requesturi : " + e.requesturi + ", statuscode : " + e.statuscode); 
        }; 
 
        this.FileDownload_onsuccess = function(obj,e) 
        { 
        	//alert("파일 다운로드 완료"); 
        }; 
 
        /*********************************************************************************************** 
        * GRID EVENT 영역 
        ************************************************************************************************/ 
        this.grid_list01_oncellclick = function(obj,e) 
        { 
        	// 첨부파일 다운로드 
        	if (e.col == 1) { 
        		var atflNm = this.ds_list02.getColumn(e.row, "ATFL_NM"); 
 
        		if (this.gfn_isNull(atflNm) == false) { 
        			this.FileDownload.clearPostDataList(); 
        			this.FileDownload.set_downloadfilename(this.ds_list02.getColumn(e.row, "ATFL_NM"));	//runtime 전용 프로퍼티 
        			this.FileDownload.setPostData("filePath",this.ds_list02.getColumn(e.row, "ATFL_STOR_PATH")); 
        			this.FileDownload.setPostData("fileOrgName",this.ds_list02.getColumn(e.row, "ORI_ATFL_NM")); 
        			this.FileDownload.setPostData("fileName",this.ds_list02.getColumn(e.row, "ATFL_NM")); 
 
        			this.FileDownload.setPostData("docRegId",this.ds_list02.getColumn(e.row, "DOC_REG_ID")); 
        			this.FileDownload.setPostData("docRegSeq",this.ds_list02.getColumn(e.row, "DOC_REG_SEQ")); 
 
        			this.FileDownload.download('/co/file-download.do'); 
        		} 
        	} 
        }; 
 
        }); 
         
        // Regist UI Components Event 
        this.on_initEvent = function() 
        { 
            this.addEventHandler("oninit",this.SSP_BO_OA_02_07_oninit,this); 
            this.addEventHandler("onload",this.SSP_BO_OA_02_07_onload,this); 
            this.Div00.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this); 
            this.Div00.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this); 
            this.Div00.form.Static06_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this); 
            this.Div01.form.grid_list01.addEventHandler("oncellclick",this.grid_list01_oncellclick,this); 
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this); 
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this); 
        }; 
        this.loadIncludeScript("SSP_BO_OA_24.xfdl"); 
        this.loadPreloadList(); 
         
        // Remove Reference 
        obj = null; 
    }; 
} 
)(); 
