(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MemOprtrOrgSinglePopup");
            this.set_titletext("부서 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_oprtrOrg", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DISP_MNG_SBJ_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"orgCd\" type=\"STRING\" size=\"256\"/><Column id=\"orgNm\" type=\"STRING\" size=\"256\"/><Column id=\"prdDispMngSbjCd\" type=\"STRING\" size=\"256\"/><Column id=\"cPage\" type=\"INT\" size=\"256\"/><Column id=\"pagingSize\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","22","65","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부서 ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orgCd","117","65","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","97","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("부서명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orgNm","117","97","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","207","526","270",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_oprtrOrg");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"99\"/><Column size=\"158\"/><Column size=\"222\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"팀 ID\"/><Cell col=\"1\" text=\"팀 명\"/><Cell col=\"2\" text=\"팀 속성(상품진열관리주체)\"/></Band><Band id=\"body\"><Cell text=\"bind:ORG_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ORG_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRD_DISP_MNG_SBJ_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","413","166","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","481","166","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","18","16","382","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_text("부서 조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","22","129","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("팀 속성");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdDispMngSbjCd","117","129","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","22","183","84","18",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("총 0건");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,540,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_orgCd","value","ds_search","orgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_orgNm","value","ds_search","orgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_prdDispMngSbjCd","value","ds_search","prdDispMngSbjCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("memOprtrOrgSinglePopup.xfdl", function() {
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
        	this.edt_orgCd.set_value(this.parent.orgCd);
        	this.edt_orgNm.set_value(this.parent.orgNm);

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
        	//TODO transac 구현(통신)
        	var sSvcId = "memOprtrOrgSelect";
        	var sUrl = "/co/popUp/memOprtrOrgPopupList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_oprtrOrg=ds_output1";
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
        	if(svcID == "memOprtrOrgSelect"){
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
        	this.edt_orgCd.set_value("");
        	this.edt_orgNm.set_value("");
        	this.edt_prdDispMngSbjCd.set_value("");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(1);
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	resData.ORG_CD = this.ds_oprtrOrg.getColumn(this.ds_oprtrOrg.rowposition, "ORG_CD");
        	resData.ORG_NM = this.ds_oprtrOrg.getColumn(this.ds_oprtrOrg.rowposition, "ORG_NM");
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
        this.loadIncludeScript("memOprtrOrgSinglePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
