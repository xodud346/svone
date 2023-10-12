(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_COL_SEARCH");
            this.set_titletext("컬럼정보");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj._setContents("<ColumnInfo><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_tableName","10","10",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list01","10","10",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"0\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"Column ID\"/><Cell col=\"1\" text=\"Comment\"/></Band><Band id=\"body\"><Cell text=\"bind:COLUMN_NAME\"/><Cell col=\"1\" text=\"bind:COMMENTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","10",null,null,"30","10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_COL_SEARCH.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_COL_SEARCH.xfdl", function() {
        // 컬럼조회
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object

        this.owner = "";
        this.tableName ="";

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_COL_SEARCH_onload = function(obj,e)
        {
        	this.owner = this.parent.pv1;
            this.tableName = this.parent.pv2;
        	trace("### owner : " + this.owner + ", tableName : " + this.tableName);
        	if (this.gfn_isNull(this.tableName) == false) {
        		this.edt_tableName.set_value(this.tableName);
        		this.fn_search();
        	}
        };

        this.SSP_BO_OA_COL_SEARCH_oninit = function(obj,e)
        {
        	this.getOwnerFrame().set_resizable(true);
        	this.getOwnerFrame().set_width(this.parent.pv3);
        	this.getOwnerFrame().set_height(this.parent.pv4);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {
        	var sSvcId = "selectColumnList";
        	var sUrl = "/od/odrPopup/selectColumnList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.fn_searchMapSetting();

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectColumnList") {
        		trace("### selectColumnList - ds_list01.rowcount : " + this.ds_list01.rowcount);
        	}
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_searchMapSetting = function() {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.tableName = this.edt_tableName.value;
        	this.ds_search.setColumn(0, "OWNER", this.owner);
        	this.ds_search.setColumn(0, "TABLE_NAME", this.tableName);
        };


        /***********************************************************************************************
        * COMPONENT EVENT 영역
        ************************************************************************************************/
        // 에디트 키다운
        this.edt_tableName_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13 && this.gfn_isNull(this.edt_tableName.value) == false) {
        		this.fn_search();
        	}
        };

        // 닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close(null);
        };

        // 그리드 더블클릭
        this.grid_list01_oncelldblclick = function(obj,e)
        {
        	trace("### 그리드 더블클릭");
        	var resData = {};
        	var resString = "";
        	var row = this.ds_list01.rowposition;
        	resData.COLUMN_NAME = this.ds_list01.getColumn(row, "COLUMN_NAME");
        	resData.COMMENTS = this.ds_list01.getColumn(row, "COMMENTS");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_COL_SEARCH_onload,this);
            this.addEventHandler("oninit",this.SSP_BO_OA_COL_SEARCH_oninit,this);
            this.edt_tableName.addEventHandler("onkeydown",this.edt_tableName_onkeydown,this);
            this.grid_list01.addEventHandler("oncelldblclick",this.grid_list01_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_COL_SEARCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
