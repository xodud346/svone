(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_62");
            this.set_titletext("배송비 변경이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"255\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CART_DLCST_NO\" type=\"STRING\" size=\"8\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CART_DLCST_NO\" type=\"STRING\" size=\"8\"/><Column id=\"APLY_STR_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CART_DLCST_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CART_DLCST_SPR_CD\" type=\"BIGDECIMAL\" size=\"1\"/><Column id=\"DLCST_AMT\" type=\"STRING\" size=\"22\"/><Column id=\"DLCST_CURR_UNIT_CD\" type=\"STRING\" size=\"5\"/><Column id=\"APLY_END_DT\" type=\"STRING\" size=\"8\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_totCount","20","83","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("(총 0건, 1/N)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list","20","100",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"117\"/><Column size=\"110\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"배송비\"/><Cell col=\"1\" text=\"시작일\"/><Cell col=\"2\" text=\"종료일\"/><Cell col=\"3\" text=\"최종수정일\"/><Cell col=\"4\" text=\"최종수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:DLCST_AMT\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"###,###,###\"/><Cell col=\"1\" text=\"bind:APLY_STR_DT\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:APLY_END_DT\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:UPD_DTM\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:UPDPSN_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grid_list:10",null,"38","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("배송비 변경이력조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","20","60","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("일반배송비");
            obj.set_cssclass("sta_WF_title03");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_62.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_62.xfdl", function() {

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.cartDlcstNo = "";
        this.totalCount = 0;

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/

        this.SSP_BO_OA_62_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//검색 영역 최소size 적용
        	this.resetScroll();

        	this.div_paging.uPage = 1;

        	var type = this.parent.type;
        	if (type == "history") {
        		this.sta_subtitle.set_text(this.parent.subTitle);
        		this.cartDlcstNo = this.parent.cartDlcstNo;
        		trace("subtitle : " + this.parent.subTitle + ", cartDlcstNo : " + this.cartDlcstNo);

        		this.ds_search.setColumn(0, "CART_DLCST_NO", this.cartDlcstNo);
        		this.fn_searchHistoryCount();
        	}
        	else {
        		this.ds_search.setColumn(0, "CART_DLCST_NO", "100003");
        		this.fn_searchHistoryCount();
        	}

        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_62_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        // 배송비구분 이력조회
        this.fn_search = function() {
        	var sSvcId = "selectCartDlcstPopupList";
        	var sUrl = "/od/basisDlcstZpcd/selectCartDlcstPopupList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 배송비구분 이력 Count
        this.fn_searchHistoryCount = function() {
        	var sSvcId = "selectBasisDlcstHistoryCount";
        	var sUrl = "/od/basisDlcstZpcd/selectBasisDlcstHistoryCount.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectCartDlcstPopupList") {
        		trace("### selectCartDlcstPopupList, ds_list : " + this.ds_list.getRowCount());

        		//paging 처리

        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        	}
        	else if (svcID == "selectBasisDlcstHistoryCount") {
        		trace("### totalCount : " + this.totalCount);

        		if (this.totalCount > 0) {
        			this.fn_search();
        		}
        	}
        };

        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;
        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 "+ this.totalCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	trace("sTotText : " + sTotText);
        	this.sta_totCount.set_text(sTotText);
        };


        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	//this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_esc");
        	//this.fn_regMethodShiftENTER("btn_confirm_onclick");
        };

        this.fn_esc = function() {
        	this.close(0);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_62_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_62_onkeyup,this);
            this.sta_totCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_62.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
