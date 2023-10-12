(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("list01");
            this.set_titletext("List");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_paging","54","436","806","76",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","48","102","808",null,null,"div_paging:30",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_main");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"cell0\"/><Cell col=\"1\" text=\"cell1\"/><Cell col=\"2\" text=\"cell2\"/><Cell col=\"3\" text=\"cell3\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CO_CD\"/><Cell col=\"2\" text=\"bind:PRD_ID\"/><Cell col=\"3\" text=\"bind:PRD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","689","40","159","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","49","44","240","44",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page","318","48","136","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_page");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT");
            obj.set_displayrowcount("5");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","52","8","232","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("(총 0건 1/1)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("list01.xfdl","CO::coUtils.xjs");
        this.registerScript("list01.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : C:\Users\spaa\git\ssp-bo\src\main\ui\RD\list01.xfdl
        /* 작 성 일 자 : 2022/02/18
        /* 작  성   자 :
        /* 설       명 :
        /***********************************************************/
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	//this.fn_search(true);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(bInit){
        	var bReturn  = true;

        	if(bReturn == true){
        		var sSvcId = "search";
        		var sUrl = "/rd/pubPrdProcStb/selectList2.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_main=ds_main";
        		var arg;

        		if(bInit) {
        			var oPaging = this.div_paging;
        			oPaging.uPage = 1;
        			oPaging.uPageNum = 0;
        			this.ds_search.setColumn(0,"START_NUM",0);
        			this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_page.value);
        		}

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){
        		case "search":

        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cbo_page.value,"fn_pageCallback");

        			this.grd_list.setCellProperty("head", 0, "text", "0");

        			break;
        		default:
        			break;
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.cbo_page.value);
        		this.fn_search();
        	}
        	alert("총 "+oPaging.uTotCount+" / "+oPaging.uPage+" / "+oPaging.uPageCnt);
        	var sTotText = "(총 "+oPaging.uTotCount+" / "+oPaging.uPage+" / "+oPaging.uPageCnt + ")";
        	this.sta_totcnt.set_text(sTotText);
        };


        this.Button00_onclick = function(obj,e)
        {
        	this.fn_search(true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("list01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
