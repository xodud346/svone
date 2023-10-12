(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SspCategorySinglePopup");
            this.set_titletext("카테고리 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_prdCls", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"prdClsCd\" type=\"STRING\" size=\"256\"/><Column id=\"prdClsLvlNm\" type=\"STRING\" size=\"256\"/><Column id=\"cPage\" type=\"INT\" size=\"256\"/><Column id=\"pagingSize\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","22","65","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("카테고리ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsCd","117","65","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","97","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("카테고리명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsNm","117","97","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","177","526","303",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_prdCls");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"131\"/><Column size=\"276\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"카테고리ID\"/><Cell col=\"1\" text=\"카테고리명\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_CLS_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PRD_CLS_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","413","136","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","481","136","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","18","16","155","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_text("카테고리 조회");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","22","153","84","18",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("총 0건");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,540,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_prdClsCd","value","ds_search","prdClsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_prdClsNm","value","ds_search","prdClsLvlNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sspCategorySinglePopup.xfdl", function() {
        /*******************************************************
        PROJECT NAME : MarketA
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totRowCnt = 0;
        this.pagingSize = 10;
        this.pageSize = 20;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.edt_prdClsCd.set_value(this.parent.prdClsCd);
        	this.edt_prdClsNm.set_value(this.parent.prdClsNm);

        	//조회
        	this.fn_search(1);
        };

        this.fn_onkeyup = function(obj,e)
        {
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]" ) {
        		//조회
        		this.fn_search(1);
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (cPage)
        {
        	var sSvcId = "sspCategorySelect";
        	var sUrl = "/co/popUp/sspCategoryPopupList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_prdCls=ds_output1";
        	var arg = "";

        	if( undefined == cPage ) {
        		cPage = 1;
        	}

        	// 페이징 정보 세팅.
        	this.ds_search.setColumn(0, "cPage", cPage);
        	this.ds_search.setColumn(0, "pagingSize", this.pagingSize);
        	this.ds_search.setColumn(0, "pageSize", this.pageSize);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "sspCategorySelect"){
        		this.sta_totcnt.set_text("총 "+this.totRowCnt+"건");
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_clear_onclick = function(obj,e)
        {
        	this.edt_prdClsCd.set_value("");
        	this.edt_prdClsNm.set_value("");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(1);
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	resData.PRD_CLS_CD = this.ds_prdCls.getColumn(this.ds_prdCls.rowposition, "PRD_CLS_CD");
        	resData.PRD_CLS_NM = this.ds_prdCls.getColumn(this.ds_prdCls.rowposition, "PRD_CLS_NM");
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
        this.loadIncludeScript("sspCategorySinglePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
