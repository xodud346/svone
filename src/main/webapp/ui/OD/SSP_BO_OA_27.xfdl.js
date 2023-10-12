(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_02_10");
            this.set_titletext("VOC 현황");
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
            obj._setContents("<ColumnInfo><Column id=\"VOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_SCLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCLS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_VOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_EXCEPT_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GCLS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DLV_FORM_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_FORM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCLS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_HUB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LEAD_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list03", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EXCEPT_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPT_PROC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","20",null,"30%","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("■ VOC 현황");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grid_list01","0","30",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list01");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"행선택\" displaytype=\"normal\"/><Cell col=\"1\" text=\"대분류\"/><Cell col=\"2\" text=\"VOC 유형\"/><Cell col=\"3\" text=\"VOC 번호\"/><Cell col=\"4\" text=\"VOC 상태\"/><Cell col=\"5\" text=\"주문수량\"/><Cell col=\"6\" text=\"주문단위\"/><Cell col=\"7\" text=\"처리 일시\"/><Cell col=\"8\" text=\"완료 일시\"/><Cell col=\"9\" text=\"반품 주문 번호\"/></Band><Band id=\"body\"><Cell text=\"expr:comp.parent.parent.parent.fn_isSelectedRow(currow, comp.currentcell) == true ? &quot;url(&apos;theme://images/btn_WF_page_last.png&apos;)&quot; : &quot;&quot;\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:GCLS_NM\"/><Cell col=\"2\" text=\"bind:SCLS_NM\"/><Cell col=\"3\" text=\"bind:JNT_VOC_NO\"/><Cell col=\"4\" text=\"bind:VOC_STATS_NM\"/><Cell col=\"5\" text=\"bind:ODR_QTY\" displaytype=\"mask\" maskeditmaskchar=\"#\" maskeditformat=\"###,###,###\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:SELL_UNIT_CD\"/><Cell col=\"7\" displaytype=\"date\" maskeditmaskchar=\"#\" maskedittype=\"string\" text=\"bind:PROC_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplayinvalidtext=\" \" calendardisplaynulltype=\"none\" maskeditformat=\"####-##-## ##:##:##\" maskeditlimitbymask=\"decimal\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"8\" text=\"bind:CMPL_DTM\" displaytype=\"date\" maskeditmaskchar=\"#\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:JNT_EXCEPT_ODR_NO\" displaytype=\"normal\" calendardateformat=\"yyyy.MM.dd\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:30",null,"72","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","10","200","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("■ VOC 배송 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","0","39",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","39","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("배송 형태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","430","39","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","39","10","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","39","10","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00",null,"30","30","10","1296",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_dlvForm","140","43","280","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("무재고");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","420","39","10","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcp","570","43",null,"24","11",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("422328 | 유한회사 수호테크놀로지");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","0","Div01:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div02");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list02","0","0",null,"80","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("area");
            obj.set_binddataset("ds_list02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"VOC 유형\"/><Cell col=\"1\" text=\"플랜트 ID\"/><Cell col=\"2\" text=\"플랜트 명\"/><Cell col=\"3\" text=\"시작일\"/><Cell col=\"4\" text=\"종료일\"/><Cell col=\"5\" text=\"처리 L/T\"/></Band><Band id=\"body\"><Cell text=\"bind:SCLS_NM\"/><Cell col=\"1\" text=\"bind:GI_HUB_CD\"/><Cell col=\"2\" text=\"bind:PLNT_NM\"/><Cell col=\"3\" text=\"bind:PROC_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:CMPL_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:LEAD_TIME\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("grid_list03","0","grid_list02:10",null,null,"0","0",null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_selecttype("area");
            obj.set_binddataset("ds_list03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"처리 상태\"/><Cell col=\"1\" text=\"업무 담당\"/><Cell col=\"2\" text=\"처리 일시\"/></Band><Band id=\"body\"><Cell text=\"bind:EXCEPT_PROC_STATS_NM\"/><Cell col=\"1\" text=\"bind:REGPSN_ID\"/><Cell col=\"2\" text=\"bind:PROC_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div01.form.edt_dlvForm","value","ds_list02","DLV_FORM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div01.form.edt_cprtcp","value","ds_list02","CPRTCP_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_27.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_27.xfdl", function() {
        // 주문관리 상세 - 예외처리

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object

        this.odrNo = "";
        this.odrItmNo = "";
        this.bzplcId = "";
        this.odrpsnId = "";
        this.selectedRow = -1;

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_02_10_oninit = function(obj,e)
        {
        	var nIndex = this.addEventHandlerLookup( "onload", "fn_afterFormLoad", this.parent.parent.parent);
        };

        this.SSP_BO_OA_02_10_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.copyPaste.addGrid(this.Div00.form.grid_list01);
        	this.copyPaste.addGrid(this.Div02.form.grid_list02);
        	this.copyPaste.addGrid(this.Div02.form.grid_list03);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {
        	var sSvcId = "selectExcProcList";
        	var sUrl = "/od/oderlist/selectExcProcList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_searchVocDlvInfo = function() {
        	var sSvcId = "selectExcProcVocDlvInfo";
        	var sUrl = "/od/oderlist/selectExcProcVocDlvInfo.do";
        	var inDs = "ds_search=ds_search02";
        	var outDs = "ds_list02=ds_output1 ds_list03=ds_output2";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectExcProcList") {
        		trace("### selectExcProcList - ds_list01.rowcount : " + this.ds_list01.rowcount);
        		this.fn_resetSubGrid();
        	}
        	else if (svcID == "selectExcProcVocDlvInfo") {
        		trace("### selectExcProcVocDlvInfo - ds_list02.rowcount : " + this.ds_list02.rowcount);
        	}
        };


        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        // 조회 함수(모든 탭 폼에 있어야되는 함수)
        this.fn_searchOdrInfo = function(odrNo, odrItmNo, bzplcId, odrpsnId) {
        	trace("### SSP_BO_OA_27 - fn_searchOdrInfo");
        	this.odrNo = odrNo;
        	this.odrItmNo = odrItmNo;
        	this.bzplcId = bzplcId;
        	this.odrpsnId = odrpsnId;

        	this.ds_search.setColumn(0, "ODR_NO", this.odrNo);
        	this.ds_search.setColumn(0, "ODR_ITM_NO", this.odrItmNo);
        	this.ds_search.setColumn(0, "BZPLC_ID", this.bzplcId);
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);

        	this.ds_list02.clearData();
        	this.ds_list03.clearData();

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

        // 행선택
        this.fn_isSelectedRow = function(currow, cellPos) {
        	if (cellPos == 0) {
        		if (currow == this.ds_list01.rowposition)	return true;
        		return false;
        	}

        	if (currow == this.selectedRow) {
        		return true;
        	}

        	return false;
        };

        this.fn_resetSubGrid = function() {
        	this.selectedRow = -1;
        	this.Div00.form.grid_list01.redrawExprCell("body");
        	this.ds_list02.clearData();
        	this.ds_list03.clearData();
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/



        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/
        this.grid_list01_oncellposchanged = function(obj,e)
        {
        	if (e.col != 0 || e.row < 0) return;

        	this.selectedRow = e.row;

        	this.ds_search02.clearData();
        	var nRow = this.ds_search02.addRow();

        	var vocNo = this.ds_list01.getColumn(e.row, "VOC_NO");
        	var vocItmNo = this.ds_list01.getColumn(e.row, "VOC_ITM_NO");

        	this.ds_search02.setColumn(0, "VOC_NO", vocNo);
        	this.ds_search02.setColumn(0, "VOC_ITM_NO", vocItmNo);
        	this.ds_search02.setColumn(0, "CO_CD", this.fv_coCd);

        	this.fn_searchVocDlvInfo();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.SSP_BO_OA_02_10_oninit,this);
            this.addEventHandler("onload",this.SSP_BO_OA_02_10_onload,this);
            this.Div00.form.grid_list01.addEventHandler("oncellposchanged",this.grid_list01_oncellposchanged,this);
        };
        this.loadIncludeScript("SSP_BO_OA_27.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
