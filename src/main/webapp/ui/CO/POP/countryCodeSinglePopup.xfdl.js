(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CountryCodeSinglePopup");
            this.set_titletext("원산지 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ctry", this);
            obj._setContents("<ColumnInfo><Column id=\"CTRY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ctrySprCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctryNm\" type=\"STRING\" size=\"256\"/><Column id=\"cPage\" type=\"INT\" size=\"256\"/><Column id=\"pagingSize\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","22","65","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("원산지ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrySprCd","117","65","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","97","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("원산지명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrySprNm","117","97","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","177","526","303",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_ctry");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"131\"/><Column size=\"276\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"원산지ID\"/><Cell col=\"1\" text=\"원산지명\"/></Band><Band id=\"body\"><Cell text=\"bind:CTRY_SPR_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CTRY_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","413","136","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","481","136","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","18","16","155","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_text("원산지 조회");
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
            obj = new BindItem("item0","edt_ctrySprCd","value","ds_search","ctrySprCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_ctrySprNm","value","ds_search","ctryNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("countryCodeSinglePopup.xfdl", function() {
        /*******************************************************
        PROJECT NAME : MarketA
        CREATION DATES : 2021.01.19
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
        	this.edt_ctrySprCd.set_value(this.parent.ctrySprCd);
        	this.edt_ctrySprNm.set_value(this.parent.ctrySprNm);

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
        	var sSvcId = "countryCodeSelect";
        	var sUrl = "/co/popUp/countryCodePopupList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_ctry=ds_output1";
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
        	if(svcID == "countryCodeSelect"){
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
        	this.edt_ctrySprCd.set_value("");
        	this.edt_ctrySprNm.set_value("");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(1);
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	resData.CTRY_SPR_CD = this.ds_ctry.getColumn(this.ds_ctry.rowposition, "CTRY_SPR_CD");
        	resData.CTRY_NM = this.ds_ctry.getColumn(this.ds_ctry.rowposition, "CTRY_NM");
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
        this.loadIncludeScript("countryCodeSinglePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
