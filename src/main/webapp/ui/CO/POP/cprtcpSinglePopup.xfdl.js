(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cprtcpSinglePopup");
            this.set_titletext("협력사ID 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cprtcp", this);
            obj._setContents("<ColumnInfo><Column id=\"CPRTCP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZMN_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZCAT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"cprtcpNo\" type=\"STRING\" size=\"256\"/><Column id=\"cprtcpNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzmnRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzcatNm\" type=\"STRING\" size=\"256\"/><Column id=\"cPage\" type=\"INT\" size=\"256\"/><Column id=\"pagingSize\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","22","65","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("협력사코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNo","117","65","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","97","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("협력사명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","117","97","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","238","526","270",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_cprtcp");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"142\"/><Column size=\"133\"/><Column size=\"119\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"협력사코드\"/><Cell col=\"1\" text=\"협력사명\"/><Cell col=\"2\" text=\"사업자번호\"/><Cell col=\"3\" text=\"업종\"/></Band><Band id=\"body\"><Cell text=\"bind:CPRTCP_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CPRTCP_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:BZMN_REG_NO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BZCAT_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","413","199","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","481","199","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","16","155","37",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("협력사ID 조회");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","22","129","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("사업자번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzmnRegNo","117","129","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","22","161","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("업종");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzcatNm","117","161","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","22","213","84","18",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("총 0건");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,590,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_cprtcpNo","value","ds_search","cprtcpNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_cprtcpNm","value","ds_search","cprtcpNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_bzmnRegNo","value","ds_search","bzmnRegNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_bzcatNm","value","ds_search","bzcatNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cprtcpSinglePopup.xfdl", function() {
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
        	this.edt_cprtcpNo.set_value(this.parent.cprtcpNo);
        	this.edt_cprtcpNm.set_value(this.parent.cprtcpNm);

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
        	var sSvcId = "cprtcpSelect";
        	var sUrl = "/co/popUp/cprtcpPopupList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_cprtcp=ds_output1";
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
        	if(svcID == "cprtcpSelect"){
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
        	this.edt_cprtcpNo.set_value("");
        	this.edt_cprtcpNm.set_value("");
        	this.edt_bzmnRegNo.set_value("");
        	this.edt_bzcatNm.set_value("");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(1);
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	resData.CPRTCP_NO = this.ds_cprtcp.getColumn(this.ds_cprtcp.rowposition, "CPRTCP_NO");
        	resData.CPRTCP_NM = this.ds_cprtcp.getColumn(this.ds_cprtcp.rowposition, "CPRTCP_NM");
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
        this.loadIncludeScript("cprtcpSinglePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
