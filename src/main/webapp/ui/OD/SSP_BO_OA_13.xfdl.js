(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_13");
            this.set_titletext("비용이체계정 단일팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_list01","20","60",null,null,"20","59",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list01");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"110\"/><Column size=\"180\"/><Column size=\"110\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"1\" text=\"계정 ID\"/><Cell col=\"2\" text=\"계정 명\"/><Cell col=\"3\" text=\"계정 CD\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ACCT_ID\"/><Cell col=\"2\" text=\"bind:ACCT_NM\"/><Cell col=\"3\" text=\"bind:ACCT_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm",null,null,"60","30","20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20",null,"300","29",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("총 124건이 검색되었습니다.");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("비용 이체 부서 계정");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_13.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_13.xfdl", function() {
        // 비용이체부서 변경

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.totalCount = 0;
        this.fv_coCd = "";
        this.fv_mbrId = "";
        this.fv_deptId = "";

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/

        this.SSP_BO_OA_13_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.fv_coCd = this.parent.pv1;
            this.fv_mbrId = this.parent.pv2;
        	this.fv_deptId = this.parent.pv3;

        	this.fn_searchMapSetting();
        	this.fn_search();

        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_13_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {
        	var sSvcId = "selectCostTrnsfDeptAcctList";
        	var sUrl = "/od/odrPopup/selectCostTrnsfDeptAcctList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "TOTAL_COUNT", -1);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectCostTrnsfDeptAcctList"){
        		this.sta_totcnt.set_text("(총 "+ this.gfn_appendComma(this.totalCount, 0) +"건)");
        		this.sta_totcnt.set_visible(true);
        	}
        };

        /***********************************************************************************************
        * POPUP CALLBACK 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_searchMapSetting = function() {
        	this.ds_search.setColumn(0, "START_NUM", 0);
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "MBR_ID", this.fv_mbrId);
        	this.ds_search.setColumn(0, "DEPT_ID", this.fv_deptId);
        };

        this.fn_closeForm = function(shouldReturn) {
        	if (shouldReturn) {
        		var resData = {};
        		var resString = "";
        		var row = this.ds_list01.rowposition;
        		resData.ACCT_ID = this.ds_list01.getColumn(row, "ACCT_ID");
        		resData.ACCT_NM = this.ds_list01.getColumn(row, "ACCT_NM");
        		resData.ACCT_CD = this.ds_list01.getColumn(row, "ACCT_CD");
        		resString = JSON.stringify(resData);
        		this.close(resString);
        	}
        	else {
        		this.close(0);
        	}
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	//this.fn_regMethodENTER("fn_search");
        	this.fn_regMethodESC("fn_esc");
        	this.fn_regMethodShiftENTER("btn_confirm_onclick");
        };

        this.fn_esc = function() {
        	this.close(0);
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        this.btn_confirm_onclick = function(obj,e)
        {
        	if (this.ds_list01.rowposition < 0) {
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}

        	this.fn_closeForm(true);
        };

        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/

        this.grid_list01_oncelldblclick = function(obj,e)
        {
        	this.fn_closeForm(true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_13_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_13_onkeyup,this);
            this.grid_list01.addEventHandler("oncelldblclick",this.grid_list01_oncelldblclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
