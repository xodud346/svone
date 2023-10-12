(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CouponSinglePopup");
            this.set_titletext("쿠폰 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cpn", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\"/><Column id=\"CPN_MST_IDX\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_MST_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_MST_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_MST_SAL_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_MST_SAL_GBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cpnGbn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"CODE_NM\">일반 쿠폰</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"CODE_NM\">배송비 쿠폰</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"cPage\" type=\"INT\" size=\"256\"/><Column id=\"pagingSize\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"couponNo\" type=\"STRING\" size=\"256\"/><Column id=\"couponNm\" type=\"STRING\" size=\"256\"/><Column id=\"couponGbn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","22","92","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("쿠폰 번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_couponNo","117","92","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","126","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("쿠폰명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_couponNm","117","126","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","207","526","353",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_cpn");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"89\"/><Column size=\"160\"/><Column size=\"182\"/></Columns><Rows><Row size=\"41\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"쿠폰 번호\"/><Cell col=\"1\" text=\"쿠폰 종류\"/><Cell col=\"2\" text=\"쿠폰 명\"/><Cell col=\"3\" text=\"할인 금액/율&#13;&#10;(최대 할인 금액)\"/></Band><Band id=\"body\"><Cell text=\"bind:CPN_MST_IDX\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cpnGbn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" text=\"bind:CPN_MST_GBN\"/><Cell col=\"2\" text=\"bind:CPN_MST_TITLE\"/><Cell col=\"3\" textAlign=\"center\" text=\"expr:CPN_MST_GBN ==&apos;A&apos; ? CPN_MST_SAL_GBN == &apos;A&apos; ? CPN_MST_SAL_PRC+&quot;%&quot; + String.fromCharCode(10) + &quot;(&quot;+CPN_MST_SAL_PRC+&quot;원)&quot; : CPN_MST_SAL_GBN == &apos;B&apos; ? CPN_MST_SAL_PRC+&quot;원&quot; : &quot;&quot;  : CPN_MST_GBN == &apos;F&apos; ?  &apos;-&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","413","166","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","481","166","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","18","16","155","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_text("쿠폰 조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","22","58","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("쿠폰종류");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_couponGbn","117","58","151","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_couponGbn_innerdataset = new nexacro.NormalDataset("cmb_couponGbn_innerdataset", obj);
            cmb_couponGbn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">일반 쿠폰</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">배송비 쿠폰</Col></Row></Rows>");
            obj.set_innerdataset(cmb_couponGbn_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","22","183","84","18",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("총 0건");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,580,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_couponGbn","value","ds_search","couponGbn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_couponNo","value","ds_search","couponNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_couponNm","value","ds_search","couponNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("couponSinglePopup.xfdl", function() {
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
        	this.edt_couponNo.set_value(this.parent.cpnMstIdx);
        	this.edt_couponNm.set_value(this.parent.cpnMstTitle);

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
        	var sSvcId = "couponSelect";
        	var sUrl = "/co/popUp/couponPopupList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_cpn=ds_output1";
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
        	if(svcID == "couponSelect"){
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
        	this.cmb_couponGbn.set_index(0);
        	this.edt_couponNo.set_value("");
        	this.edt_couponNm.set_value("");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(1);
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	resData.CPN_MST_IDX = this.ds_cpn.getColumn(this.ds_cpn.rowposition, "CPN_MST_IDX");
        	resData.CPN_MST_TITLE = this.ds_cpn.getColumn(this.ds_cpn.rowposition, "CPN_MST_TITLE");
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
        this.loadIncludeScript("couponSinglePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
