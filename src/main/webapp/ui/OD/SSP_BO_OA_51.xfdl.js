(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_51");
            this.set_titletext("배송지 조회 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(880,660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_DLVPLC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SELECTED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_DLVPLC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SELECTED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_list01","20","95",null,"115","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list01");
            obj.set_selecttype("row");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"71\"/><Column size=\"218\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주문자 ID\"/><Cell col=\"1\" text=\"배송지 ID\"/><Cell col=\"2\" text=\"수령인 명\"/><Cell col=\"3\" text=\"우편번호\"/><Cell col=\"4\" text=\"주소\"/><Cell col=\"5\" text=\"상세주소\"/><Cell col=\"6\" text=\"전화번호\"/><Cell col=\"7\" text=\"휴대폰번호\"/></Band><Band id=\"body\"><Cell text=\"bind:MBR_ID\"/><Cell col=\"1\" text=\"bind:DLVPLC_ID\"/><Cell col=\"2\" text=\"bind:RCVR_NM\"/><Cell col=\"3\" text=\"bind:ZPCD\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:REPR_ADDR\"/><Cell col=\"5\" text=\"bind:DTL_ADDR\"/><Cell col=\"6\" text=\"bind:HP_NO\"/><Cell col=\"7\" text=\"bind:TEL_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"60","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20",null,"300","29",null,"565",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("총 124건이 검색되었습니다.");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list02","20","230",null,"371","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_nodatatext("선택된 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list02");
            obj.set_selecttype("row");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"53\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"71\"/><Column size=\"218\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"배송지 ID\"/><Cell col=\"2\" text=\"수령인 명\"/><Cell col=\"3\" text=\"우편번호\"/><Cell col=\"4\" text=\"주소\"/><Cell col=\"5\" text=\"상세주소\"/><Cell col=\"6\" text=\"전화번호\"/><Cell col=\"7\" text=\"휴대폰번호\"/></Band><Band id=\"body\"><Cell text=\"bind:IS_SELECTED\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"expr:1\" checkboxfalsevalue=\"expr:0\" combotype=\"dropdown\"/><Cell col=\"1\" text=\"bind:DLVPLC_ID\"/><Cell col=\"2\" text=\"bind:RCVR_NM\"/><Cell col=\"3\" text=\"bind:ZPCD\"/><Cell col=\"4\" text=\"bind:REPR_ADDR\"/><Cell col=\"5\" text=\"bind:DTL_ADDR\"/><Cell col=\"6\" text=\"bind:HP_NO\"/><Cell col=\"7\" text=\"bind:TEL_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select",null,null,"81","28","400","22",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("배송지변경 조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",880,660,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_51.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_51.xfdl", function() {
        // 플랜트 조회

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;
        this.parentFormID = "";
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/

        this.fv_mbrId ="";
        this.fv_dlvplcId ="";

        this.SSP_BO_OA_51_onload = function(obj,e)
        {
        	this.fv_mbrId = this.parent.pv1;
            this.fv_dlvplcId = this.parent.pv2;

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//검색 영역 최소size 적용
        	this.resetScroll();
        	this.fn_searchMapSetting();
        	this.fn_search();

        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_51_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        this.fn_search = function() {
        	var sSvcId = "selectDlvplcList";
        	var sUrl = "/od/odrPopup/selectDlvplcList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list02=ds_output2";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectDlvplcList"){
        		this.sta_totcnt.set_text("(총 "+ this.gfn_appendComma(this.totalCount, 0) +"건)");
        		this.sta_totcnt.set_visible(true);
        		this.fn_setDsList01();
        	}
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_searchMapSetting = function() {

        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "MBR_ID", this.fv_mbrId);
        	this.ds_search.setColumn(0, "DLVPLC_ID", this.fv_dlvplcId);
        	this.ds_search.setColumn(0, "ROW_COUNT", "10000");
        	this.ds_list01.clearData();
        	this.ds_list02.clearData();
        };

        this.fn_setDsList01 = function() {

        	var selectedRow = this.ds_list02.filter("IS_SELECTED=='1'");
        	if( selectedRow == -1 )	return;

        	this.ds_list01.clearData();
        	this.ds_list01.addRow();
        	this.ds_list01.copyRow(0, this.ds_list02, selectedRow);
        	this.ds_list02.filter("");
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_esc");
        	this.fn_regMethodShiftENTER("btn_select_onclick");
        };

        this.fn_esc = function() {
        	this.close(0);
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        this.btn_select_onclick = function(obj,e)
        {
        	var resData = {};
        	var selectedRow = this.ds_list02.filter("IS_SELECTED=='1'");
        	if( selectedRow == -1 )
        	{
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}

        	resData.DLVPLC_ID = this.ds_list02.getColumn(selectedRow, "DLVPLC_ID");
        	resData.RCVR_NM = this.ds_list02.getColumn(selectedRow, "RCVR_NM");
        	resData.ZPCD = this.ds_list02.getColumn(selectedRow, "ZPCD");
        	resData.REPR_ADDR = this.ds_list02.getColumn(selectedRow, "REPR_ADDR");
        	resData.DTL_ADDR = this.ds_list02.getColumn(selectedRow, "DTL_ADDR");
        	resData.HP_NO = this.ds_list02.getColumn(selectedRow, "HP_NO");
        	resData.TEL_NO = this.ds_list02.getColumn(selectedRow, "TEL_NO");

        	this.ds_list02.filter("");
        	this.close(JSON.stringify(resData));
        };

        this.grid_list02_oncellclick = function(obj,e)
        {
        	if(e.col != 0 ) return;
        	if(e.row != -1) {
        		for(var i=0;i < this.ds_list02.getRowCount(); i++)
        		{
        			this.ds_list02.setColumn(i, "IS_SELECTED", "0");
        		}
        		this.ds_list02.setColumn(e.row,"IS_SELECTED", "1");
        	}
        };

        this.grid_list02_oncelldblclick = function(obj,e)
        {
        	var resData = {};
        	var selectedRow = e.row;
        	if( selectedRow == -1 )
        		return;

        	resData.DLVPLC_ID = this.ds_list02.getColumn(selectedRow, "DLVPLC_ID");
        	resData.RCVR_NM = this.ds_list02.getColumn(selectedRow, "RCVR_NM");
        	resData.ZPCD = this.ds_list02.getColumn(selectedRow, "ZPCD");
        	resData.REPR_ADDR = this.ds_list02.getColumn(selectedRow, "REPR_ADDR");
        	resData.DTL_ADDR = this.ds_list02.getColumn(selectedRow, "DTL_ADDR");
        	resData.HP_NO = this.ds_list02.getColumn(selectedRow, "HP_NO");
        	resData.TEL_NO = this.ds_list02.getColumn(selectedRow, "TEL_NO");

        	this.ds_list02.filter("");
        	this.close(JSON.stringify(resData));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_51_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_51_onkeyup,this);
            this.grid_list01.addEventHandler("oncelldblclick",this.grid_list01_oncelldblclick,this);
            this.grid_list01.addEventHandler("onenterdown",this.grid_list01_onenterdown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grid_list02.addEventHandler("oncellclick",this.grid_list02_oncellclick,this);
            this.grid_list02.addEventHandler("oncelldblclick",this.grid_list02_oncelldblclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_51.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
