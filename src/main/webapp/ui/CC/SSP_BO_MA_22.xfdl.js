(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_22");
            this.set_titletext("휴면회원관리 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_drmcMbr", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DRMC_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_BY\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eMBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eDEPT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"MBR_ID\"/><Col id=\"ORDER_BY\">DRMC_DTM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_returnMsg", this);
            obj._setContents("<ColumnInfo><Column id=\"SUCCESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">20</Col><Col id=\"COL_NM\">20개씩</Col></Row><Row><Col id=\"COL_VALUE\">50</Col><Col id=\"COL_NM\">50개씩</Col></Row><Row><Col id=\"COL_VALUE\">100</Col><Col id=\"COL_NM\">100개씩</Col></Row><Row><Col id=\"COL_VALUE\">10000</Col><Col id=\"COL_NM\">10,000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_orderBy", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">DRMC_DTM</Col><Col id=\"COL_NM\">휴면전환일순</Col></Row><Row><Col id=\"COL_VALUE\">MBR_NM</Col><Col id=\"COL_NM\">회원명순</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"130","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31","20","51",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","450","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","Static04_00:10","24","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzpMulti","edt_bzplcId:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzpMultiText","btn_bzpMulti:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","883","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("휴면전환일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","883","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08_00","450","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("회원");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitId","Static04:10","24","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mbrId","Static08_00:10","55","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprMulti","edt_oprUnitId:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprMultiText","btn_oprMulti:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_custSprCd","160","24","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_innerdataset("ds_custSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("13");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","Static06:10","55","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_deptMulti","edt_deptId:4","55","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_deptMultiText","btn_deptMulti:4","55","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_mbrMulti","edt_mbrId:4","55","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_mbrMultiText","btn_mbrMulti:4","55","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_fromDt","Static08:10","55","96","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_headformat("yyyy.MM.DD");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","1121","55","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_toDt","cal_fromDt:12","55","96","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_headformat("yyyy.MM.DD");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"Static31:10","60","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"Static31:10","60","28","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_inqPerdSprCd","cal_toDt:4","55","78","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            obj.set_value("2");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_allExcel",null,"Static31:10","100","28","btn_reset:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_default");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_page",null,"Div00:20","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_pageOpt");
            obj.set_codecolumn("COL_VALUE");
            obj.set_datacolumn("COL_NM");
            obj.set_text("");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"Div00:20","100","28","248",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_orderBy",null,"Div00:20","130","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_orderBy");
            obj.set_codecolumn("COL_VALUE");
            obj.set_datacolumn("COL_NM");
            obj.set_text("");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"Div00:20","110","28","cbo_orderBy:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","cbo_page:15",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","565",null,"38","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20",null,"120","28",null,"Div01:5",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","20","cbo_page:10",null,"540","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_drmcMbr");
            obj.set_visible("true");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_autosizingtype("none");
            obj.set_selecttype("area");
            obj.set_font("12px/normal \"Arial\",\"맑은고딕\"");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"73\"/><Column size=\"64\"/><Column size=\"80\"/><Column size=\"73\"/><Column size=\"128\"/><Column size=\"73\"/><Column size=\"128\"/><Column size=\"80\"/><Column size=\"128\"/><Column size=\"92\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"고객 유형\"/><Cell col=\"1\" text=\"회원ID\"/><Cell col=\"2\" text=\"회원명\"/><Cell col=\"3\" text=\"로그인ID\"/><Cell col=\"4\" text=\"사업장ID\"/><Cell col=\"5\" text=\"사업장명\"/><Cell col=\"6\" text=\"운영단위ID\"/><Cell col=\"7\" text=\"운영단위명\"/><Cell col=\"8\" text=\"부서ID\"/><Cell col=\"9\" text=\"부서명\"/><Cell col=\"10\" text=\"휴면전환일\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_SPR_CD\" displaytype=\"combotext\" combodataset=\"ds_custSprCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"1\" text=\"bind:MBR_ID\" textAlign=\"center\" textDecoration=\"underline\" color=\"blue\"/><Cell col=\"2\" text=\"bind:MBR_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LOGN_ID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:BZPLC_ID\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:OPR_UNIT_ID\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:DEPT_ID\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:DRMC_DTM\" textAlign=\"center\" edittype=\"none\" calendardisplaynulltype=\"none\" maskedittype=\"string\" maskeditformat=\"yyyy-MM-dd\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"Div00:20","110","28","cbo_page:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbo_page","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cbo_orderBy","value","ds_search","ORDER_BY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cal_fromDt","value","ds_search","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cal_toDt","value","ds_search","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_bzplcId","value","ds_search","eBZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_mbrId","value","ds_search","eMBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_oprUnitId","value","ds_search","eOPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_deptId","value","ds_search","eDEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.cbo_custSprCd","value","ds_search","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_22.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_22.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_22.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.preSelectRowPosition = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//검색 영역 최소size 적용
        	//this.Div00.set_height(this.Div00.uMinSize);
        	this.resetScroll();

        	this.copyPaste.addGrid(this.grd_mainList);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//공통코드 조회
        	this.fn_commonCodeSearch = function(){
        		this.ds_comCodeSearch.setColumn(0, "codeList", "CUST_SPR_CD,INQ_PERD_SPR_CD");
        		this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        		var sSvcId = "commonCodeSearch";
        		var sUrl = "/co/select-common-code-list.do";
        		var inDs = "ds_search=ds_comCodeSearch";
        		var outDs = "ds_custSprCd=ds_output1 ds_inqPerdSprCd=ds_output2";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	//조회
        	this.fn_search = function()	{
        		var sSvcId = "selectCustGrdList";
        		var sUrl = "/bo/cust/mbr/select-drmc-mbr-list.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_drmcMbr=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_received");
        	};
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "commonCodeSearch"){
        			this.ds_custSprCd.insertRow(0);
        			this.ds_custSprCd.setColumn(0,"COM_DTL_CD_NM","전체");
        		}
        	}

        	this.fn_callBackForSearch = function(){
        		this.fn_search();
        	}

        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		if( this.ds_drmcMbr.rowcount == 0 ) {
        			this.grd_mainList.set_nodatatext("조회 결과가 없습니다.");
        		}

        		this.totalCount = 0;
        		if(this.ds_drmcMbr.getRowCount() > 0) {
        			this.totalCount = this.ds_drmcMbr.getColumn(0,"TOT_CUNT");
        		}

        		//paging 처리
        		this.Div01.form.div_paging.form.cfn_createPage(this.Div01.form.div_paging, this.totalCount, this.cbo_page.value, "fn_pageCallback");
        	}

        	this.fn_pageCallback = function(sFlag){
        		var oPaging = this.Div01.form.div_paging;
        		if(sFlag){
        			this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        			this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_page.value);
        			this.fn_search();
        		}

        		var sTotText = "(<b v='true'>총 "+ this.gfn_appendComma(oPaging.uTotCount)+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        		this.sta_totCount.set_text(sTotText);
        	};

        	this.fn_sortCallback = function(sGridId){
        		var oGrid=null;
        		if(sGridId == "grd_mainList"){
        			oSortInfo = this.grd_mainList.uaSortInfo;
        			this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        			this.fn_search();
        		}
        	}

        	// 멀티팝업버튼 클릭 콜백
        	this.fn_popupCallback = function(sPopupId, sRetValue){
        		switch(sPopupId){
        			case "btn_deptMulti":
        				const deptObj = JSON.parse(sRetValue);

        				var sIdList = "";
        				var sNmList = "";
        				for(var i=0; i<deptObj.length; i++){
        					var rowData = JSON.parse(deptObj[i]);
        					sIdList += rowData.DEPT_ID +",";
        				}
        				this.ds_search.setColumn(0,"DEPT_ID", deptObj.length);
        				this.Div00.form.edt_deptId.set_value(sIdList.replace(/,\s*$/, ""));

        				break;

        			case "btn_bzpMulti":
        				const cmpObj = JSON.parse(sRetValue);

        				var sIdList = "";
        				var sNmList = "";
        				for(var i=0; i<cmpObj.length; i++){
        					var rowData = JSON.parse(cmpObj[i]);
        					sIdList += rowData.BZPLC_ID +",";
        				}
        				this.ds_search.setColumn(0,"BZPLC_ID", cmpObj.length);
        				this.Div00.form.edt_bzplcId.set_value(sIdList.replace(/,\s*$/, ""));
        				break;

        			case "btn_mbrMulti":
        				const mbrObj = JSON.parse(sRetValue);

        				var sIdList = "";
        				var sNmList = "";
        				for(var i=0; i<mbrObj.length; i++){
        					var rowData = JSON.parse(mbrObj[i]);
        					sIdList += rowData.MBR_ID +",";
        				}
        				this.ds_search.setColumn(0,"MBR_ID", mbrObj.length);
        				this.Div00.form.edt_mbrId.set_value(sIdList.replace(/,\s*$/, ""));
        				break;

        			case "btn_oprMulti":
        				const oprObj = JSON.parse(sRetValue);

        				var sIdList = "";
        				var sNmList = "";
        				for(var i=0; i<oprObj.length; i++){
        					var rowData = JSON.parse(oprObj[i]);
        					sIdList += rowData.OPR_UNIT_ID +",";
        				}
        				this.ds_search.setColumn(0,"OPR_UNIT_ID", oprObj.length);
        				this.Div00.form.edt_oprUnitId.set_value(sIdList.replace(/,\s*$/, ""));

        				break;

        			case "SSP_BO_MA_22;BZPLC_ID":
        				var resData = JSON.parse(sRetValue);
        				var rtnData = "";
        				var sIdList = "";
        				for(var i = 0; i < resData.length; i++) {
        					rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        				this.Div00.form.edt_bzplcId.set_value(sIdList);
        				this.fn_setMSearch(this.name,"BZPLC_ID",sIdList);
        				break;

        			case "SSP_BO_MA_22;DEPT_ID":
        				var resData = JSON.parse(sRetValue);
        				var rtnData = "";
        				var sIdList = "";
        				for(var i = 0; i < resData.length; i++) {
        					rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        				this.Div00.form.edt_deptId.set_value(sIdList);
        				this.fn_setMSearch(this.name,"DEPT_ID",sIdList);
        				break;

        			case "SSP_BO_MA_22;OPR_UNIT_ID":
        				var resData = JSON.parse(sRetValue);
        				var rtnData = "";
        				var sIdList = "";
        				for(var i = 0; i < resData.length; i++) {
        					rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        				this.Div00.form.edt_oprUnitId.set_value(sIdList);
        				this.fn_setMSearch(this.name,"OPR_UNIT_ID",sIdList);
        				break;

        			case "SSP_BO_MA_22;MBR_ID":
        				var resData = JSON.parse(sRetValue);
        				var rtnData = "";
        				var sIdList = "";
        				for(var i = 0; i < resData.length; i++) {
        					rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        				this.Div00.form.edt_mbrId.set_value(sIdList);
        				this.fn_setMSearch(this.name,"MBR_ID",sIdList);
        				break;
        		}
        	}

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//search div 초기 설정
        		this.Div00.uMinSize = 94;
        		this.Div00.uMaxSize = 157;

        		//grid 초기 설정
        		this.grd_mainList.uSortFlag = "false";
        		this.grd_mainList.uServerSortFlag = "true";
        		this.grd_mainList.uSortCallback = "fn_sortCallback";
        		this.grd_mainList.uCellSizeType = "true";

        		//페이징 초기 설정
        		this.Div01.form.div_paging.uPage = 1;
        		this.Div01.form.div_paging.uPageNum = 0;
        		this.Div01.form.div_paging.uPageRowCnt = 10;
        		this.Div01.form.div_paging.uPageCnt = 0;
        		this.Div01.form.div_paging.uTotCount = 0;

        		//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        		this.uGridList = "grd_mainList";
        		this.grd_mainList.uRightMouse = "true";
        		this.grd_mainList.uPersonalFlag = "true";
        		this.grd_mainList.uDefaultFormat = "CUST_SPR_CD,MBR_ID,MBR_NM,LOGN_ID,BZPLC_ID,BZPLC_NM,OPR_UNIT_ID,OPR_UNIT_NM,DEPT_ID,DEPT_NM,DRMC_DTM";

        		this.fn_setSearchDate();
        	}

        	this.cfn_personalPopupClose = function(sRet){
        		this.grd_mainList.set_formats(sRet);
        		this.pdiv_personal.closePopup();
        	};

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	this.fn_setSearchDate = function() {

        		var term = this.Div00.form.cbo_inqPerdSprCd.value;
        		var objDate = new Date();
        		var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        		/* 1 : 1일,    2 : 1주일,    3 : 2주일,    4 : 1개월,    5 : 3개월,    6 : 6개월,    7 : 1년 */
        		if( term == "1" ) {
        			objDate.setDate(objDate.getDate() -1);
        		} else if( term == "2" ) {
        			objDate.setDate(objDate.getDate() -7);
        		} else if( term == "3" ) {
        			objDate.setDate(objDate.getDate() -14);
        		} else if( term == "4" ) {
        			objDate.setMonth(objDate.getMonth() -1);
        		} else if( term == "5" ) {
        			objDate.setMonth(objDate.getMonth() -3);
        		} else if( term == "6" ) {
        			objDate.setMonth(objDate.getMonth() -6);
        		} else if( term == "7" ) {
        			objDate.setMonth(objDate.getMonth() -12);
        		}

        		this.Div00.form.cal_fromDt.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        		this.Div00.form.cal_toDt.set_value(sToday);
        	};
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//조회 버튼 click  이벤트
        	this.btn_search_onclick = function(obj,e)
        	{
        		// 화면ID set
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        		var bzplcStr = this.Div00.form.edt_bzplcId.value;
        		var oprUnitStr = this.Div00.form.edt_oprUnitId.value;
        		var deptStr = this.Div00.form.edt_deptId.value;
        		var mbrStr = this.Div00.form.edt_mbrId.value;

        		// edt 입력 기준으로 조회조건 다시 세팅
        		if(bzplcStr!="" && bzplcStr!=null){
        			this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr);
        		}else{
        			this.ds_search.setColumn(0, "BZPLC_ID", null);
        		}

        		if(oprUnitStr!="" && oprUnitStr!=null){
        			this.fn_setMSearch(this.name,"OPR_UNIT_ID",oprUnitStr);
        		}else{
        			this.ds_search.setColumn(0, "OPR_UNIT_ID", null);
        		}

        		if(deptStr!="" && deptStr!=null){
        			this.fn_setMSearch(this.name,"DEPT_ID",deptStr);
        		}else{
        			this.ds_search.setColumn(0, "DEPT_ID", null);
        		}

        		if(mbrStr!="" && mbrStr!=null){
        			this.fn_setMSearch(this.name,"MBR_ID",mbrStr);
        		}else{
        			this.ds_search.setColumn(0, "MBR_ID", null);
        		}

        		this.Div01.form.div_paging.uPage = 1;
        		this.ds_search.setColumn(0, "START_NUM", 0);

        		// 조회
        		if(this.ds_select.getRowCount() <= 0 ){
        			this.fn_search();
        		}
        		else{
        			this.fn_insertSelectedData("fn_callBackForSearch");
        		}
        	};

        	// 초기화 버튼
        	this.btn_reset_onclick = function(obj,e)
        	{
        		this.ds_search.setColumn(0, "BZPLC_ID", "");
        		this.ds_search.setColumn(0, "OPR_UNIT_ID", "");
        		this.ds_search.setColumn(0, "DEPT_ID", "");
        		this.ds_search.setColumn(0, "MBR_ID", "");
        		this.ds_search.setColumn(0, "eBZPLC_ID", "");
        		this.ds_search.setColumn(0, "eOPR_UNIT_ID", "");
        		this.ds_search.setColumn(0, "eDEPT_ID", "");
        		this.ds_search.setColumn(0, "eMBR_ID", "");
        		this.ds_search.setColumn(0, "FROM_DATE", "");
        		this.ds_search.setColumn(0, "TO_DATE", "");
        		this.ds_search.setColumn(0, "CUST_SPR_CD", null);

        		this.Div00.form.cbo_inqPerdSprCd.set_value("2");
        		this.fn_setSearchDate();
        	};

        	this.Button00_onclick = function(obj,e)
        	{
        		trace("Quick Frame ===>"+this.fv_oApp.agv_QuickFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_QuickFrame.getOffsetHeight());
        		trace("Left Frame ===>"+this.fv_oApp.agv_LeftFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_LeftFrame.getOffsetHeight());
        		trace("Main Frame ===>"+this.fv_oApp.agv_MainFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_MainFrame.getOffsetHeight());
        		trace("Mdi Frame ===>"+this.fv_oApp.agv_MdiFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_MdiFrame.getOffsetHeight());
        		trace("Work Frame Set===>"+this.fv_oApp.agv_WorkFrameSet.getOffsetWidth() + " : " +  this.fv_oApp.agv_WorkFrameSet.getOffsetHeight());
        	};

        	// 그리드 회원ID클릭 이벤트
        	this.Div01_grd_mainList_oncellclick = function(obj,e)
        	{
        		this.columnRow = e.row;
        		this.columnId = this.getBindColumnIDByIndex(obj, e.cell); // 클릭한 그리드 칼럼의 ID

        		if(this.columnId == "MBR_ID"){
        			var params = {
        				mbrId : this.ds_drmcMbr.getColumn(this.columnRow,"MBR_ID")
        				, coCd : this.ds_drmcMbr.getColumn(this.columnRow,"CO_CD")
        			};
        			var options = {};
        			options.title = "휴먼회원관리 상세/수정";
        			this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_MA_23.xfdl", params,  "fn_detailPopupCallback", options);
        		}

        	};

        	// 멀티 회원설정 팝업
        	this.multiPopOpen_onclick = function(obj,e)
        	{
        		var oArg = {
        			coCd : '1000'
        			, bzplcId : this.Div00.form.edt_bzplcId.value
        			, oprUnitId : this.Div00.form.edt_oprUnitId.value
        			, deptId : this.Div00.form.edt_deptId.value
        			, mbrId : this.Div00.form.edt_mbrId.value
        		};

        		var oOption = {};

        		if(e.fromobject.id == 'btn_bzpMulti'){
        			oOption.title = '사업장 조회';
        			this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        		if(e.fromobject.id == 'btn_oprMulti'){
        			oOption.title = '운영단위 조회';
        			this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        		if(e.fromobject.id == 'btn_deptMulti'){
        			oOption.title = '부서 조회';
        			this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_PP_37.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        		if(e.fromobject.id == 'btn_mbrMulti'){
        			oOption.title = '회원 조회';
        			this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_25.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        	};

        	// 멀티텍스트 팝업
        	this.multipleTextBtn_onclick = function(obj,e)
        	{
        		if(e.fromobject.id == 'btn_bzpMultiText'){
        			//사업장
        			this.fn_showTareaInput(this.name,"BZPLC_ID",this.Div00.form.edt_bzplcId.value, "fn_popupCallback",120,300);
        		}
        		if(e.fromobject.id == 'btn_oprMultiText'){
        			//운영단위
        			this.fn_showTareaInput(this.name,"OPR_UNIT_ID",this.Div00.form.edt_oprUnitId.value, "fn_popupCallback",160,300);
        		}
        		if(e.fromobject.id == 'btn_deptMultiText'){
        			//부서
        			this.fn_showTareaInput(this.name,"DEPT_ID",this.Div00.form.edt_deptId.value, "fn_popupCallback",120,300);
        		}
        		if(e.fromobject.id == 'btn_mbrMultiText'){
        			//회원
        			this.fn_showTareaInput(this.name,"MBR_ID",this.Div00.form.edt_mbrId.value, "fn_popupCallback",160,300);
        		}
        	};

        	// 정렬순서 콤보
        	this.cbo_orderBy_onitemchanged = function(obj,e)
        	{
        		this.fn_search();
        	};

        	// 페이징 건수 콤보
        	this.cbo_page_onitemchanged = function(obj,e)
        	{
        		this.fn_search();
        	};

        	// 시간조회 콤보
        	this.Div00_cbo_inqPerdSprCd_onitemchanged = function(obj,e)
        	{
        		this.fn_setSearchDate();
        	};

        	// 엑셀버튼
        	this.Button01_onclick = function(obj,e)
        	{
        		this.ofn_exportExcel({form:this, grid:this.grd_mainList, fileName:"휴면회원관리 목록"});
        	};

        	// 레이아웃 저장
        	this.btn_layoutSave_onclick = function(obj,e)
        	{
        		this.gfn_personalSave("grd_mainList", this.grd_mainList.getCurFormatString());
        	};

        	// 레이아웃 초기화
        	this.btn_layoutClear_onclick = function(obj,e)
        	{
        		//suOrgFormat
        		this.gfn_personalSave("grd_mainList", this.grd_mainList.uOrgFormat);
        		this.grd_mainList.set_formats(this.grd_mainList.uOrgFormat);
        	};

        	this.SSP_BO_MA_22_onkeyup = function(obj,e)
        	{
        		if(e.keycode == 13 && e.ctrlkey){
        			this.btn_search_onclick();
        		}
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_22_onkeyup,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.Div00.form.btn_bzpMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.btn_bzpMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div00.form.btn_oprMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.btn_oprMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div00.form.btn_deptMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.btn_deptMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div00.form.btn_mbrMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.btn_mbrMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.Div00.form.cbo_inqPerdSprCd.addEventHandler("onitemchanged",this.Div00_cbo_inqPerdSprCd_onitemchanged,this);
            this.Div00.form.btn_allExcel.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.cbo_page.addEventHandler("onitemchanged",this.cbo_page_onitemchanged,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.cbo_orderBy.addEventHandler("onitemchanged",this.cbo_orderBy_onitemchanged,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.grd_mainList.addEventHandler("onselectchanged",this.fn_editChg,this);
            this.grd_mainList.addEventHandler("oncellclick",this.Div01_grd_mainList_oncellclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.ds_drmcMbr.addEventHandler("oncolumnchanged",this.ds_custIddt_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_MA_22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
