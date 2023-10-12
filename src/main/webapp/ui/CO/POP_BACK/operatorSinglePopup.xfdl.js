(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OperatorSinglePopup");
            this.set_titletext("담당자 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_oprtr", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBNM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"oprtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"orgCd\" type=\"STRING\" size=\"256\"/><Column id=\"orgNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbnm\" type=\"STRING\" size=\"256\"/><Column id=\"cPage\" type=\"INT\" size=\"256\"/><Column id=\"pagingSize\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","22","65","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사번");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empNo","117","65","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","97","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("담당자 명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","117","97","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","268","526","270",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_oprtr");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"93\"/><Column size=\"68\"/><Column size=\"87\"/><Column size=\"71\"/><Column size=\"51\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"담당자 명\"/><Cell col=\"2\" text=\"조직 코드\"/><Cell col=\"3\" text=\"조직 코드 명\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"직무\"/><Cell col=\"6\" text=\"사용 여부\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:OPRTR_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ORG_CD\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ORG_NM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:POS_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:JBNM\" textAlign=\"center\"/><Cell col=\"6\" text=\"expr:USE_YN == &quot;Y&quot; ? &quot;사용&quot; :  &quot;미사용&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","413","229","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","481","229","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","16","155","37",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("담당자 조회");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","22","129","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조직 코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orgCd","117","129","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","22","161","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("조직 코드 명");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orgNm","117","161","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","22","193","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("직무");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_jbNm","117","193","429","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","22","243","84","18",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("총 0건");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,590,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_empNo","value","ds_search","empNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_oprtrNm","value","ds_search","oprtrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_orgCd","value","ds_search","orgCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_orgNm","value","ds_search","orgNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_jbNm","value","ds_search","jbnm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("operatorSinglePopup.xfdl", function() {
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
        	this.edt_empNo.set_value(this.parent.empNo);
        	this.edt_oprtrNm.set_value(this.parent.oprtrNm);

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
        	var sSvcId = "operatorSelect";
        	var sUrl = "/co/popUp/operatorPopupList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_oprtr=ds_output1";
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
        	if(svcID == "operatorSelect"){
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
        	this.edt_empNo.set_value("");
        	this.edt_oprtrNm.set_value("");
        	this.edt_orgCd.set_value("");
        	this.edt_orgNm.set_value("");
        	this.edt_jbNm.set_value("");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(1);
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	resData.EMP_NO = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "EMP_NO");
        	resData.OPRTR_NM = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "OPRTR_NM");
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
        this.loadIncludeScript("operatorSinglePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
