(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_54");
            this.set_titletext("회원 조회 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(880,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"TOTAL_COUNT\">2000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MBR_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_search",null,"60","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20",null,"300","29",null,"30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("총 124건이 검색되었습니다.");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list01","20","98",null,"492","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_nodatatext("선택된 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list01");
            obj.set_selecttype("row");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"90\"/><Column size=\"85\"/><Column size=\"160\"/><Column size=\"85\"/><Column size=\"160\"/><Column size=\"85\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사업장ID\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"운영단위ID\"/><Cell col=\"3\" text=\"운영단위명\"/><Cell col=\"4\" text=\"부서ID\"/><Cell col=\"5\" text=\"부서명\"/><Cell col=\"6\" text=\"회원ID\"/><Cell col=\"7\" text=\"회원명\"/></Band><Band id=\"body\"><Cell text=\"bind:MBR_BZPLC_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:MBR_BZPLC_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:OPR_UNIT_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"3\" text=\"bind:OPR_UNIT_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"4\" text=\"bind:DEPT_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"5\" text=\"bind:DEPT_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"6\" text=\"bind:MBR_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"7\" text=\"bind:MBR_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select",null,null,"81","28","400","22",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00",null,"60","60","28","252",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txtR");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_searchCount",null,"60","100","27","148",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("1000");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"60","60","28","85",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("회원 조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",880,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_54.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_54.xfdl", function() {
        // 플랜트 조회

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/

        this.fv_GB ="";
        this.fv_oriBzplcId ="";

        this.SSP_BO_OA_51_onload = function(obj,e)
        {
            this.fv_GB = this.parent.pv1;
        	this.fv_oriBzplcId = this.parent.pv2;

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//검색 영역 최소size 적용
        	this.resetScroll();

        	this.fn_initGrid();
        	if(this.fv_GB == undefined )   this.fv_GB = "0";

        	this.fn_odCommLoading();
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_54_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {

        	if ( this.ds_list01.getColumn(0, "MBR_BZPLC_ID") == "" &&
        	    this.ds_list01.getColumn(0, "MBR_BZPLC_NM") == "" &&
        	    this.ds_list01.getColumn(0, "OPR_UNIT_ID") == "" &&
        	    this.ds_list01.getColumn(0, "OPR_UNIT_NM") == "" &&
        	    this.ds_list01.getColumn(0, "DEPT_ID") == "" &&
        	    this.ds_list01.getColumn(0, "DEPT_NM") == "" &&
        	    this.ds_list01.getColumn(0, "MBR_ID") == "" &&
        	    this.ds_list01.getColumn(0, "MBR_NM") == "") {
        		alert(this.fn_getMessage("ERRS000134"));
        		return;
        	}
        	this.fn_searchMapSetting();

        	var sSvcId = "selectMbrPopupMbrList";
        	var sUrl = "/od/orderChange/selectMbrPopupMbrList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectMbrPopupMbrList"){
        		this.sta_totcnt.set_text("(총 "+ this.gfn_appendComma(this.ds_search.getColumn(0, "TOTAL_COUNT"), 0) +"건)");
        		this.sta_totcnt.set_visible(true);
        		this.fn_initGrid();
        		this.fn_setSearchCondition();
        	}
        };
        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_initGrid = function() {
        	this.ds_list01.insertRow(0);
        	this.ds_list01.setColumn(0, "MBR_BZPLC_ID","");
        	this.ds_list01.setColumn(0, "MBR_BZPLC_NM", "");
        	this.ds_list01.setColumn(0, "OPR_UNIT_ID", "");
        	this.ds_list01.setColumn(0, "OPR_UNIT_NM", "");
        	this.ds_list01.setColumn(0, "DEPT_ID", "");
        	this.ds_list01.setColumn(0, "DEPT_NM", "");
        	this.ds_list01.setColumn(0, "MBR_ID", "");
        	this.ds_list01.setColumn(0, "MBR_NM", "");
        	this.ds_list01.set_rowposition(-1);
        	this.grid_list01.setFixedRow(0);
        };

        this.fn_searchMapSetting = function() {
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "GB", this.fv_GB);
        	this.ds_search.setColumn(0, "TOTAL_COUNT",1000);
        	this.ds_search.setColumn(0, "ORI_BZPLC_ID", this.fv_oriBzplcId);
        	this.ds_search.setColumn(0, "MBR_BZPLC_ID", this.ds_list01.getColumn(0, "MBR_BZPLC_ID"));
        	this.ds_search.setColumn(0, "MBR_BZPLC_NM", this.ds_list01.getColumn(0, "MBR_BZPLC_NM"));
        	this.ds_search.setColumn(0, "OPR_UNIT_ID", this.ds_list01.getColumn(0, "OPR_UNIT_ID"));
        	this.ds_search.setColumn(0, "OPR_UNIT_NM", this.ds_list01.getColumn(0, "OPR_UNIT_NM"));
        	this.ds_search.setColumn(0, "DEPT_ID", this.ds_list01.getColumn(0, "DEPT_ID"));
        	this.ds_search.setColumn(0, "DEPT_NM", this.ds_list01.getColumn(0, "DEPT_NM"));
        	this.ds_search.setColumn(0, "MBR_ID", this.ds_list01.getColumn(0, "MBR_ID"));
        	this.ds_search.setColumn(0, "MBR_NM", this.ds_list01.getColumn(0, "MBR_NM"));
        	this.ds_search.setColumn(0, "ROW_COUNT", this.msk_searchCount.text);
        };

        this.fn_setSearchCondition = function() {
        	this.ds_list01.setColumn(0, "MBR_BZPLC_ID", this.ds_search.getColumn(0, "MBR_BZPLC_ID"));
        	this.ds_list01.setColumn(0, "MBR_BZPLC_NM", this.ds_search.getColumn(0, "MBR_BZPLC_NM"));
        	this.ds_list01.setColumn(0, "OPR_UNIT_ID", this.ds_search.getColumn(0, "OPR_UNIT_ID"));
        	this.ds_list01.setColumn(0, "OPR_UNIT_NM", this.ds_search.getColumn(0, "OPR_UNIT_NM"));
        	this.ds_list01.setColumn(0, "DEPT_ID", this.ds_search.getColumn(0, "DEPT_ID"));
        	this.ds_list01.setColumn(0, "DEPT_NM", this.ds_search.getColumn(0, "DEPT_NM"));
        	this.ds_list01.setColumn(0, "MBR_ID", this.ds_search.getColumn(0, "MBR_ID"));
        	this.ds_list01.setColumn(0, "MBR_NM", this.ds_search.getColumn(0, "MBR_NM"));
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
        	this.fn_search();
        };

        this.btn_select_onclick = function(obj,e)
        {
        	var resData = {};
        	var selectedRow = this.ds_list01.rowposition;
        	if( selectedRow == -1 )
        	{
        		alert(this.fn_getMessage("ERRS000134","회원"));
        		return;
        	}

        	resData.MBR_ID = this.ds_list01.getColumn(selectedRow, "MBR_ID");
        	resData.MBR_NM = this.ds_list01.getColumn(selectedRow, "MBR_NM");
        	this.close(JSON.stringify(resData));
        };
        this.btn_clear_onclick = function(obj,e)
        {
        	this.ds_list01.clearData();
        	this.ds_list01.set_rowposition(-1);
        	this.fn_initGrid();
        };

        this.grid_list01_onenterdown = function(obj,e)
        {
        	this.fn_search();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_51_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_54_onkeyup,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grid_list01.addEventHandler("oncelldblclick",this.btn_select_onclick,this);
            this.grid_list01.addEventHandler("onenterdown",this.grid_list01_onenterdown,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div00_sta_totcnt00_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_54.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
