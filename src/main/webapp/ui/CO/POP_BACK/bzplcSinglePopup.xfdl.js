(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BzplcSinglePopup");
            this.set_titletext("사업장 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(580,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","22","65","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사업장ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","117","65","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","97","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사업자명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","117","97","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","181","526","270",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_bzplc");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"158\"/><Column size=\"288\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업장 ID\"/><Cell col=\"1\" text=\"사업장명\"/></Band><Band id=\"body\"><Cell text=\"bind:BZPLC_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BZPLC_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","413","136","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","481","136","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","16","155","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사업장 조회");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","465","526","38",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","155","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",580,540,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_bzplcNm","value","ds_search","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edt_bzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("bzplcSinglePopup.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.edt_bzplcId.set_value(this.parent.bzplcId);
        	this.edt_bzplcNm.set_value(this.parent.bzplcNm);

        	//조회
        	this.fn_search(true);
        };

        this.fn_onkeyup = function(obj,e){
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]" ) {
        		//조회
        		this.fn_search(true);
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){
        	var sSvcId = "search";
        	var sUrl = "/co/popUp/selectBzplcPopupList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_bzplc=ds_output1";
        	var arg = "";

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "search"){
        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search();
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//grid 초기 설정
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";
        	this.grd_list.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_clear_onclick = function(obj,e){
        	this.edt_bzplcId.set_value("");
        	this.edt_bzplcNm.set_value("");
        };

        this.btn_search_onclick = function(obj,e){
        	this.fn_search(true);
        };

        this.grd_list_oncelldblclick = function(obj,e){
        	var resData = {};
        	var resString = "";

        	resData.BZPLC_ID = this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "BZPLC_ID");
        	resData.BZPLC_NM = this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "BZPLC_NM");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("bzplcSinglePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
