(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CLIENT_SINGLE_POPUP");
            this.set_titletext("회원 단일조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(580,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","22","65","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회원ID");
            this.addChild(obj.name, obj);

            obj = new Edit("MBR_ID","117","65","443","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","97","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("회원명");
            this.addChild(obj.name, obj);

            obj = new Edit("MBR_NM","117","97","443","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","216","540","270",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_bzplc");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회원ID\"/><Cell col=\"1\" text=\"회원명\"/><Cell col=\"2\" text=\"사업장\"/><Cell col=\"3\" text=\"운영단위\"/><Cell col=\"4\" text=\"부서\"/></Band><Band id=\"body\"><Cell text=\"bind:MBR_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MBR_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\"/><Cell col=\"3\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"4\" text=\"bind:DEPT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","427","164","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","495","164","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","16","155","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("회원 조회");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page","459","33","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_page");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","500","526","38",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","190","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","22","129","70","29",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("로그인ID");
            this.addChild(obj.name, obj);

            obj = new Edit("LOGIN_ID","117","129","443","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",580,590,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","MBR_NM","value","ds_search","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","MBR_ID","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cbo_page","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","LOGIN_ID","value","ds_search","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("clientSinglePopup.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	/*
        	this.edt_bzplcId.set_value(this.parent.bzplcId);
        	this.edt_bzplcNm.set_value(this.parent.bzplcNm);
        	*/

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
        	var sUrl = "/cc/dvlplc/selectMbrBasicInfoList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_bzplc=ds_output1";
        	var arg = "";

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_page.value);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "search"){
        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.cbo_page.value, "fn_pageCallback");
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
        	/*
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";
        	this.grd_list.uCellSizeType = "true";
        	*/

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
        //초기화
        this.btn_clear_onclick = function(obj,e){
        	this.MBR_ID.set_value("");
        	this.MBR_NM.set_value("");
        	this.LOGIN_ID.set_value("");
        };
        //조회버튼
        this.btn_search_onclick = function(obj,e){
        	this.fn_search(true);
        };
        //그리드 셀 온클릭이벤트
        this.grd_list_oncelldblclick = function(obj,e){
        	var resData = {};
        	var resString = "";

        	resData.MBR_ID 			= this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "MBR_ID");
        	resData.MBR_NM 			= this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "MBR_NM");
        	resData.BZPLC_ID 		= this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "BZPLC_ID");
        	resData.BZPLC_NM 		= this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "BZPLC_NM");
        	resData.OPR_UNIT_ID 	= this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "OPR_UNIT_ID");
        	resData.OPR_UNIT_NM 	= this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "OPR_UNIT_NM");
        	resData.DEPT_ID 		= this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "DEPT_ID");
        	resData.DEPT_NM 		= this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "DEPT_NM");

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
        this.loadIncludeScript("clientSinglePopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
