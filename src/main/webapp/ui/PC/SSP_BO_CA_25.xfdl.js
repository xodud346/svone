(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePage01");
            this.set_titletext("협력사 Condition");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PERD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_COND_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DC_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"STR_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PERD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AREA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DCRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"END_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MBR_ID\"/><Col id=\"PRD_ID\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list03", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PERD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_COND_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DC_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"STR_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PERD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AREA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DCRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"END_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list04", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PERD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_COND_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DC_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"STR_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PERD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AREA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DCRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"END_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list05", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PERD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_COND_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DC_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"STR_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PERD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AREA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DCRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"END_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list06", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PERD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_COND_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DC_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"STR_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PERD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AREA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DCRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"END_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PERD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_COND_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DC_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"STR_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PERD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AREA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DCRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"END_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PERD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_COND_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DC_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"STR_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PERD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"APLY_BSS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AREA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DCRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"END_QTY_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title1","20","15","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","sta_title1:20",null,"185","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","0","30",null,null,"0","30",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list01");
            obj.set_nodatatext("조회 결과가 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"122\"/><Column size=\"122\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"98\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"유효기간(From)\"/><Cell col=\"1\" text=\"유효기간(To)\"/><Cell col=\"2\" text=\"물량(From)\"/><Cell col=\"3\" text=\"물량(To)\"/><Cell col=\"4\" text=\"할인금액\"/><Cell col=\"5\" text=\"통화\"/></Band><Band id=\"body\"><Cell text=\"bind:PERD_STR_DT\"/><Cell col=\"1\" text=\"bind:PERD_END_DT\"/><Cell col=\"2\" text=\"bind:STR_QTY_CNT\"/><Cell col=\"3\" text=\"bind:END_QTY_CNT\"/><Cell col=\"4\" text=\"bind:DC_AMT\"/><Cell col=\"5\" text=\"bind:CURR_UNIT_CD\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","0","0","200","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("■ 물량 할인");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","20","Div00:15",null,"185","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","0","30",null,null,"0","30",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list03");
            obj.set_nodatatext("조회 결과가 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"122\"/><Column size=\"122\"/><Column size=\"86\"/><Column size=\"138\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"98\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"유효기간(From)\"/><Cell col=\"1\" text=\"유효기간(To)\"/><Cell col=\"2\" text=\"지역코드\"/><Cell col=\"3\" text=\"지역명\"/><Cell col=\"4\" text=\"물량(From)\"/><Cell col=\"5\" text=\"물량(To)\"/><Cell col=\"6\" text=\"할인금액\"/><Cell col=\"7\" text=\"통화\"/></Band><Band id=\"body\"><Cell text=\"bind:PERD_STR_DT\"/><Cell col=\"1\" text=\"bind:PERD_END_DT\"/><Cell col=\"2\" text=\"bind:AREA_CD\"/><Cell col=\"3\" text=\"bind:AREA_NM\"/><Cell col=\"4\" text=\"bind:STR_QTY_CNT\"/><Cell col=\"5\" text=\"bind:END_QTY_CNT\"/><Cell col=\"6\" text=\"bind:DC_AMT\"/><Cell col=\"7\" text=\"bind:CURR_UNIT_CD\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","0","0","200","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("■ 배송비 할증");
            obj.set_cssclass("sta_WF_title01");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","20","Div01:15",null,"185","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","0","30",null,null,"0","30",null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list05");
            obj.set_nodatatext("조회 결과가 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"86\"/><Column size=\"120\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"70\"/><Column size=\"48\"/><Column size=\"98\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"유효기간(From)\"/><Cell col=\"1\" text=\"유효기간(To)\"/><Cell col=\"2\" text=\"제조원ID\"/><Cell col=\"3\" text=\"제조원명\"/><Cell col=\"4\" text=\"사업장ID\"/><Cell col=\"5\" text=\"사업장명\"/><Cell col=\"6\" text=\"적용기준\"/><Cell col=\"7\" text=\"할인율\"/><Cell col=\"8\" text=\"할인금액\"/><Cell col=\"9\" text=\"통화\"/></Band><Band id=\"body\"><Cell text=\"bind:PERD_STR_DT\"/><Cell col=\"1\" text=\"bind:PERD_END_DT\"/><Cell col=\"2\" text=\"bind:MNFR_NO\"/><Cell col=\"3\" text=\"bind:MNFR_NM\"/><Cell col=\"4\" text=\"bind:BZPLC_ID\"/><Cell col=\"5\" text=\"bind:BZPLC_NM\"/><Cell col=\"6\" text=\"bind:APLY_BSS_NM\"/><Cell col=\"7\" text=\"bind:DCRT\"/><Cell col=\"8\" text=\"bind:DC_AMT\"/><Cell col=\"9\" text=\"bind:CURR_UNIT_CD\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","0","0","200","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("■ 사업장별 특별할인");
            obj.set_cssclass("sta_WF_title01");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","20","Div02:15",null,"185","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","0","30",null,null,"0","30",null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list02");
            obj.set_nodatatext("조회 결과가 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"98\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"유효기간(From)\"/><Cell col=\"1\" text=\"유효기간(To)\"/><Cell col=\"2\" text=\"할인금액\"/><Cell col=\"3\" text=\"통화\"/></Band><Band id=\"body\"><Cell text=\"bind:PERD_STR_DT\"/><Cell col=\"1\" text=\"bind:PERD_END_DT\"/><Cell col=\"2\" text=\"bind:DC_AMT\"/><Cell col=\"3\" text=\"bind:CURR_UNIT_CD\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","0","0","200","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("■ 일정기간 특가할인");
            obj.set_cssclass("sta_WF_title01");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("btn_close","555",null,"70","30",null,"20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","155","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("협력사 Condition");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_25.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_25.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP_BO
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//부모창 데이터 처리
        	this.fn_checkData();

        	this.resetScroll();

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	// 조회
        	this.fn_search = function()	{
        		var sSvcId = "selectPrcCondPop";
        		var sUrl = "/pc/popup/selectPrcCondList.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_list=ds_output";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_received");
        	}
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		this.ds_list01.copyData(this.ds_list);
        		this.ds_list02.copyData(this.ds_list);
        		this.ds_list03.copyData(this.ds_list);
        		this.ds_list04.copyData(this.ds_list);
        		this.ds_list05.copyData(this.ds_list);
        		this.ds_list06.copyData(this.ds_list);

        		this.ds_list01.filter("PRC_COND_SPR_CD=='ZM01'");
        		this.ds_list02.filter("PRC_COND_SPR_CD=='ZM02'");
        		this.ds_list03.filter("PRC_COND_SPR_CD=='ZM03'");
        		this.ds_list04.filter("PRC_COND_SPR_CD=='ZM05'");
        		this.ds_list05.filter("PRC_COND_SPR_CD=='ZM04'");
        		this.ds_list06.filter("PRC_COND_SPR_CD=='ZM06'");
        	}


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//grid 초기 설정
        		this.Div00.form.grd_mainList.uSortFlag = "false";
        		this.Div00.form.grd_mainList.uServerSortFlag = "true";
        		//this.Div00.form.grd_mainList.uSortCallback = "fn_sortCallback";
        		this.Div00.form.grd_mainList.uCellSizeType = "true";

        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	this.fn_checkData = function(){
        		var coCd = this.fv_coCd;
        		var prdId = this.parent.prdId;
        		var cprtcpId = this.parent.cprtcpId;

        		coCd = this.fv_coCd;
        		//prd_id = '000000000006831126';
        		//cprtcpId = '0000011816';


        		// 파라미터 값 ds setcolumn
        		this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        		this.ds_search.setColumn(0, "PRD_ID", prdId);
        		this.ds_search.setColumn(0, "CPRTCP_ID", cprtcpId);

        		// 조회
        		this.fn_search();
        	}

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("btn_close_onclick");
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        this.samplePage01_onkeyup = function(obj,e)
        {
        		// 단축키 등록
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.samplePage01_onkeyup,this);
            this.sta_title1.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.grd_mainList.addEventHandler("oncellclick",this.grd_mainList_oncellclick,this);
            this.Div00.form.grd_mainList.addEventHandler("oncelldblclick",this.Div01_grd_mainList_oncelldblclick,this);
            this.Div01.form.grd_mainList.addEventHandler("oncellclick",this.grd_mainList_oncellclick,this);
            this.Div01.form.grd_mainList.addEventHandler("oncelldblclick",this.Div01_grd_mainList_oncelldblclick,this);
            this.Div02.form.grd_mainList.addEventHandler("oncellclick",this.grd_mainList_oncellclick,this);
            this.Div02.form.grd_mainList.addEventHandler("oncelldblclick",this.Div01_grd_mainList_oncelldblclick,this);
            this.Div03.form.grd_mainList.addEventHandler("oncellclick",this.grd_mainList_oncellclick,this);
            this.Div03.form.grd_mainList.addEventHandler("oncelldblclick",this.Div01_grd_mainList_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_25.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
