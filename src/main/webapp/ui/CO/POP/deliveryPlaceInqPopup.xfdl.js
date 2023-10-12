(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("deliveryPlaceInqPopup");
            this.set_titletext("배송지 선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(930,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dlvplc", this);
            obj._setContents("<ColumnInfo><Column id=\"DLVPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"cPage\" type=\"INT\" size=\"256\"/><Column id=\"pagingSize\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"rcvrNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","18","57","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("수령인");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rcvrNm","117","57","793","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","18","211","892","389",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_dlvplc");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"112\"/><Column size=\"102\"/><Column size=\"150\"/><Column size=\"373\"/><Column size=\"153\"/><Column size=\"149\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"배송지 ID\"/><Cell col=\"1\" text=\"수령인\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"우편번호/주소\"/><Cell col=\"4\" text=\"휴대폰\"/><Cell col=\"5\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell text=\"bind:DLVPLC_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:RCVR_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:ADDR\"/><Cell col=\"4\" text=\"bind:MP_NO\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:TEL_NO\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","775","170","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","845","170","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","16","155","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("배송지 선택");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","18","186","84","18",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("총 0건");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","18","91","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("부서명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","117","91","793","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","18","125","84","29",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("우편번호/주소");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr","117","125","793","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",930,630,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_rcvrNm","value","ds_search","rcvrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_deptNm","value","ds_search","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_addr","value","ds_search","addr");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("deliveryPlaceInqPopup.xfdl", function() {
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
        	this.edt_addr.set_value(this.parent.addr);
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
        	var sSvcId = "deliveryPlaceList";
        	var sUrl = "/co/popUp/deliveryPlaceList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_dlvplc=ds_output1";
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
        	if(svcID == "deliveryPlaceList"){
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
        	this.edt_rcvrNm.set_value("");
        	this.edt_rcvrNm.set_value("");
        	this.edt_addr.set_value("");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(1);
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	resData.DLVPLC_ID = this.ds_dlvplc.getColumn(this.ds_dlvplc.rowposition, "DLVPLC_ID");
        	resData.ADDR = this.ds_dlvplc.getColumn(this.ds_dlvplc.rowposition, "ADDR");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_list.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("deliveryPlaceInqPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
