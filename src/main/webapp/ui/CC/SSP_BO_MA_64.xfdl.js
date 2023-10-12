(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_64");
            this.set_titletext("예산변경이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcNm\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitId\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"acctId\" type=\"STRING\" size=\"256\"/><Column id=\"acctNm\" type=\"STRING\" size=\"256\"/><Column id=\"strDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"bgtChgSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"srtTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"startNum\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eDEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"sortColumn\" type=\"STRING\" size=\"256\"/><Column id=\"sortType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"srtTypeCd\">SR01</Col><Col id=\"rowCount\">20</Col><Col id=\"startNum\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComBGT_CHG_SPR_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComUSE_YN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComPAGE_SIZE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">20</Col><Col id=\"NM\">20개씩</Col></Row><Row><Col id=\"CD\">30</Col><Col id=\"NM\">30개씩</Col></Row><Row><Col id=\"CD\">50</Col><Col id=\"NM\">50개씩</Col></Row><Row><Col id=\"CD\">100</Col><Col id=\"NM\">100개씩</Col></Row><Row><Col id=\"CD\">10000</Col><Col id=\"NM\">10000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSrch","0","0",null,"129","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","20",null,"32","20",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static31","20","51",null,"32","20",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("staBzplc","20","20","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("2");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblAcct","20","51","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("3");
            obj.set_text("계정");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtBZPLC_ID","staBzplc:10","24","221","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnBzplcMlt","edtBZPLC_ID:4","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_multi");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnBzplcTxt","btnBzplcMlt:4","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_document");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static08","882","51","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("7");
            obj.set_text("변경유형");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static08_00","451","51","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("8");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("staOprUnit","451","20","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("9");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_ID","1022","24","221","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnDeptMlt","edtDEPT_ID:4","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_multi");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnDeptTxt","btnDeptMlt:4","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_document");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","882","20","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("18");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboBGT_CHG_SPR_CD","Static08:10","55","221","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_innerdataset("dsComBGT_CHG_SPR_CD");
            obj.set_datacolumn("NM");
            obj.set_codecolumn("CD");
            obj.set_taborder("13");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnSrch",null,"Static31:10","60","28","20",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("14");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtOPR_UNIT_ID","staOprUnit:10","24","221","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnOpruMlt","edtOPR_UNIT_ID:4","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnOpruTxt","btnOpruMlt:4","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_document");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnAcctMlt","385","55","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_multi");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnAcctTxt","btnAcctMlt:4","55","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_document");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtACCT_ID","lblAcct:10","55","221","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Calendar("calStrDt","Static08_00:10","55","100","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.divSrch.addChild(obj.name, obj);

            obj = new Calendar("calEndDt","712","55","100","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static00","687","55","27","25",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("24");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnRset",null,"Static31:10","60","28","btnSrch:4",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("25");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboPageSize",null,"divSrch:20","90","28","20",null,null,null,null,null,this);
            obj.set_innerdataset("dsComPAGE_SIZE");
            obj.set_datacolumn("NM");
            obj.set_codecolumn("CD");
            obj.set_taborder("3");
            obj.set_displayrowcount("5");
            obj.set_text("20");
            obj.set_value("20");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","cboPageSize:10",null,"558","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj.set_binddataset("dsList");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_cellmovingtype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"94\"/><Column size=\"180\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"변경유형\"/><Cell col=\"1\" text=\"사업장ID\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"운영단위ID\"/><Cell col=\"4\" text=\"운영단위명\"/><Cell col=\"5\" text=\"부서ID\"/><Cell col=\"6\" text=\"부서명\"/><Cell col=\"7\" text=\"계정ID\"/><Cell col=\"8\" text=\"계정명\"/><Cell col=\"9\" text=\"예산 년/월\"/><Cell col=\"10\" text=\"발신 부서ID\"/><Cell col=\"11\" text=\"발신 부서명\"/><Cell col=\"12\" text=\"발신 계정ID\"/><Cell col=\"13\" text=\"발신 계정명\"/><Cell col=\"14\" text=\"발신 년/월\"/><Cell col=\"15\" text=\"수신 부서ID\"/><Cell col=\"16\" text=\"수신 부서명\"/><Cell col=\"17\" text=\"수신 계정ID\"/><Cell col=\"18\" text=\"수신 계정명\"/><Cell col=\"19\" text=\"수신 년/월\"/><Cell col=\"20\" text=\"이월/이체 금액\"/><Cell col=\"21\" text=\"예산 액\"/><Cell col=\"22\" text=\"등록/변경 일시\"/><Cell col=\"23\" text=\"최종변경자ID\"/><Cell col=\"24\" text=\"최종변경자 명\"/><Cell col=\"25\" text=\"사유\"/></Band><Band id=\"body\"><Cell text=\"bind:BGT_CHG_SPR_NM\" tooltiptext=\"bind:BGT_CHG_SPR_NM\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\" tooltiptext=\"bind:BZPLC_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\" tooltiptext=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:OPR_UNIT_ID\" tooltiptext=\"bind:OPR_UNIT_ID\"/><Cell col=\"4\" text=\"bind:OPR_UNIT_NM\" tooltiptext=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:DEPT_ID\" tooltiptext=\"bind:DEPT_ID\"/><Cell col=\"6\" text=\"bind:DEPT_NM\" tooltiptext=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ACCT_ID\" tooltiptext=\"bind:ACCT_ID\"/><Cell col=\"8\" text=\"bind:ACCT_NM\" tooltiptext=\"bind:ACCT_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:BGT_APLY_PERD_NM\" tooltiptext=\"bind:BGT_APLY_PERD_NM\"/><Cell col=\"10\" text=\"bind:BFCHG_DEPT_ID\" tooltiptext=\"bind:BFCHG_DEPT_ID\"/><Cell col=\"11\" text=\"bind:BFCHG_DEPT_NM\" tooltiptext=\"bind:BFCHG_DEPT_NM\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:BFCHG_ACCT_ID\" tooltiptext=\"bind:BFCHG_ACCT_ID\"/><Cell col=\"13\" text=\"bind:BFCHG_ACCT_NM\" tooltiptext=\"bind:BFCHG_ACCT_NM\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:BFCHG_BGT_YY_APLY_PERD_NM\" tooltiptext=\"bind:BFCHG_BGT_YY_APLY_PERD_NM\"/><Cell col=\"15\" text=\"bind:AFCHG_DEPT_ID\" tooltiptext=\"bind:AFCHG_DEPT_ID\"/><Cell col=\"16\" text=\"bind:AFCHG_DEPT_NM\" tooltiptext=\"bind:AFCHG_DEPT_NM\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:AFCHG_ACCT_ID\" tooltiptext=\"bind:AFCHG_ACCT_ID\"/><Cell col=\"18\" text=\"bind:AFCHG_ACCT_NM\" tooltiptext=\"bind:AFCHG_ACCT_NM\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:AFCHG_BGT_YY_APLY_PERD_NM\" tooltiptext=\"bind:AFCHG_BGT_YY_APLY_PERD_NM\"/><Cell col=\"20\" text=\"bind:CHG_BGT_AMT\" textAlign=\"right\" tooltiptext=\"bind:CHG_BGT_AMT\" displaytype=\"number\" maskeditformat=\"###,###,###,###\"/><Cell col=\"21\" textAlign=\"right\" text=\"bind:BGT_AMT\" tooltiptext=\"bind:BGT_AMT\" displaytype=\"number\" maskeditformat=\"###,###,###,###\"/><Cell col=\"22\" text=\"bind:UPD_REG_DTM\" tooltiptext=\"bind:UPD_REG_DTM\"/><Cell col=\"23\" text=\"bind:UPD_REG_ID\" tooltiptext=\"bind:UPD_REG_ID\" textAlign=\"center\"/><Cell col=\"24\" text=\"bind:UPD_REG_NM\" tooltiptext=\"bind:UPD_REG_NM\"/><Cell col=\"25\" text=\"bind:CHG_RSN\" textAlign=\"left\" tooltiptext=\"bind:CHG_RSN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSRT_TYPE_CD",null,"divSrch:20","130","28","114",null,null,null,null,null,this);
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_taborder("5");
            obj.set_tooltiptext("정렬 옵션");
            obj.set_autoselect("true");
            var cboSRT_TYPE_CD_innerdataset = new nexacro.NormalDataset("cboSRT_TYPE_CD_innerdataset", obj);
            cboSRT_TYPE_CD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SR01</Col><Col id=\"datacolumn\">등록/변경 일시</Col></Row><Row><Col id=\"datacolumn\">예산 년/월</Col><Col id=\"codecolumn\">SR02</Col></Row><Row><Col id=\"datacolumn\">부서ID</Col><Col id=\"codecolumn\">SR03</Col></Row></Rows>");
            obj.set_innerdataset(cboSRT_TYPE_CD_innerdataset);
            obj.set_text("등록/변경 일시");
            obj.set_value("SRT_01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"149","100","28","362",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"divSrch:20","110","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","20","divSrch:636",null,"38","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("lblPageInfo","20","divSrch:31","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("(총 0건 1/1)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"149","110","28","cboSRT_TYPE_CD:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboPageSize","value","ds_search","rowCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboSRT_TYPE_CD","value","ds_search","srtTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSrch.form.cboBGT_CHG_SPR_CD","value","ds_search","bgtChgSprCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSrch.form.edtDEPT_ID","value","ds_search","deptId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSrch.form.edtOPR_UNIT_ID","value","ds_search","oprUnitId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSrch.form.edtACCT_ID","value","ds_search","acctId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSrch.form.calStrDt","value","ds_search","strDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSrch.form.calEndDt","value","ds_search","endDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSrch.form.edtBZPLC_ID","value","ds_search","bzplcId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_64.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_64.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_64.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_64.xfdl", function() {
        /*******************************************************
          PROJECT NAME : ServeONE SSP
          CREATION DATES :
        *******************************************************/

        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        // page 처리를 위한 정의 (cfn_formInit 함수에서 사용) - this.$page.init(this.$p);
        this.$p = {
        	  grid : this.grdList
        	, size : this.cboPageSize
        	, div  : this.divPaging
        	, label: this.lblPageInfo
        	, dflt : { page: 1, startNum: 0, rowCount: 20 }
        	, param: this.ds_search
        	, fSrch: this.fnSearch
        };

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e) {
        	this.gfn_formOnLoad(this);  // 공통 함수 호출(필수)
        	this.copyPaste.addGrid(this.grdList);
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function() {
        	trace("this.cfn_formInit");

        	this.btn_reset_onclick();  // 검색조건 초기화
        	this.fnCcComCodes();       // 공통코드 호출
        	this.$page.init(this.$p);  // 초기화 Grid & Paging

        // 	this.$p.grid.uSortFlag     = "true";
        // 	this.$p.grid.uCellSizeType = "true";
        // 	this.$p.pgDv.uPageNum      = this.$p.pgDflt.startNum;
        // 	this.$p.pgDv.uPageRowCnt   = this.$p.pgDflt.rowCount;

        	//search static 초기 설정
        	this.divSrch.form.staBzplc.uEssentiel = "true";
        	this.divSrch.form.Static08_00.uEssentiel = "true";

        	//grid 초기 설정
        	this.grdList.uSortFlag = "false";
        	this.grdList.uServerSortFlag = "true";
        	this.grdList.uSortCallback = "fn_sortCallback";
        	this.grdList.uCellSizeType = "true";

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grdList";
        	this.grdList.uRightMouse = "true";
        	this.grdList.uPersonalFlag = "true";
        	this.grdList.uDefaultFormat = "BGT_CHG_SPR_NM,BZPLC_ID,BZPLC_NM,OPR_UNIT_ID,OPR_UNIT_NM,DEPT_ID,DEPT_NM,ACCT_ID,ACCT_NM,BGT_APLY_PERD_NM,BFCHG_DEPT_ID,BFCHG_DEPT_NM,BFCHG_ACCT_ID,BFCHG_ACCT_NM,BFCHG_BGT_YY_APLY_PERD_NM,AFCHG_DEPT_ID,AFCHG_DEPT_NM,AFCHG_ACCT_ID,AFCHG_ACCT_NM,AFCHG_BGT_YY_APLY_PERD_NM,CHG_BGT_AMT,BGT_AMT,UPD_REG_DTM,UPD_REG_ID,UPD_REG_NM,CHG_RSN";
        }

        this.cfn_personalPopupClose = function(sRet){
        	this.grdList.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fnCcComCodes=function() {
        	this.ccComCodes([ '전체:BGT_CHG_SPR_CD', '전체:USE_YN'  ], 'fnCcComCodesClbk');
        }

        this.fnSearch = function(page, isBypass)	{
        	if (!isBypass) {
        		var bzplcId=this.ds_search.getColumn(0, 'bzplcId'),
        			bzplcNm=this.ds_search.getColumn(0, 'bzplcNm'),

        			strDt=this.ds_search.getColumn(0, 'strDt'),
        			endDt=this.ds_search.getColumn(0, 'endDt')
        		;

        		if (this.$page.isNull(bzplcId) && this.$page.isNull(bzplcNm)) { alert('사업장은 필수입력 입니다.'  ); trace('[bzplcId:'+ bzplcId +'][bzplcNm:'+ bzplcNm +']'); return; }
        		if (this.$page.isNull(strDt  ) && this.$page.isNull(endDt  )) { alert('조회기간은 필수입력 입니다.'); return; }  // this.gfn_isNull(
        	}

        	//	this.$page.preSearch(page);  // Paging
         	if( page==0 || page==undefined ) {
         		this.$p.div.uPage    = 1 ;
         		this.$p.div.uPageNum = 0 ;
         		this.ds_search.setColumn (0, 'startNum', this.$p.div.uPageNum);
         		this.ds_search.setColumn (0, 'rowCount', this.$p.size.value   );
         	}

        	var coCd=this.ds_search.getColumn(0, 'coCd');
        	coCd = (coCd!=null && coCd!=undefined) ? coCd : this.getSession().coCd;
        	coCd = (coCd!=null && coCd!=undefined) ? coCd : '1000';
        	this.ds_search.setColumn(0, 'coCd', coCd);

        	oSortInfo = this.grdList.uaSortInfo;
        	if(oSortInfo != null){
        		this.ds_search.setColumn(0,"sortColumn",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"sortType",oSortInfo.status);
        	}

        	trace("======= ds_search =============");
        	trace(this.ds_search.saveXML());

        	var sSvcId = 'listBgtHst'              ;
        	var sUrl   = '/bo/cust/bgt/hst/list.do';
        	var inDs   = 'dsParam=ds_search'       ;
        	var outDs  = 'dsList=dsList'           ;
        	var arg    = '';
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, 'fnSearchClbk');
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fnCcComCodesClbk=function(rCodes, rCode, rMesg)	{
        	trace('this.fnCcComCodesClbk() >>' + rCodes);
        }
        // 조회 트랜잭션 콜백함수
        this.fnSearchClbk = function(svcID, rCode, rMesg)	{
        	var totCunt = this.dsList.getColumn(0, 'TOT_CUNT');

         	this.$p.div.uTotCunt = totCunt           == undefined ? 0 : totCunt;
        	this.$p.div.uPage    = this.$p.div.uPage == undefined ? 1 : this.$p.div.uPage;
         	this.$p.div.form.cfn_createPage(this.$p.div, this.$p.div.uTotCunt, this.$p.size.value, 'fnPageClbk');
        //	this.$page.postSearch(totCunt);
        }
        // Page Callback
        this.fnPageClbk = function(flg){
        	trace("<flg:"+ flg +"/>");
         	if (flg) {
        		var startNum=this.$p.div.uPageNum, rowCount=this.$p.size.value;
         		this.ds_search.setColumn(0, "START_NUM", startNum);  this.ds_search.setColumn(0, "startNum", startNum);
         		this.ds_search.setColumn(0, "ROW_COUNT", rowCount);  this.ds_search.setColumn(0, "rowCount", rowCount);
         		this.fnSearch(this.$p.div.uPageNum);
         	}

         	this.$p.label.set_text("(총 "+ this.$p.div.uTotCunt +"건 "+ this.$p.div.uPage +" / "+ this.$p.div.uPageCnt +")");
        //	this.$page.pageClbk(flg);
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // this.getDsParam
        this.multiPopOpen_onclick = function(obj,e)
        {
        	var oArg = {
        		  coCd      : this.getSession().coCd
        		, bzplcId   : this.divSrch.form.edtBZPLC_ID.value
        		, oprUnitId : this.divSrch.form.edtOPR_UNIT_ID.value
        	};
        	var oOption = { titlebar: 'true', autosize: 'false' };

        	switch (e.fromobject.id) {
        		case 'btnBzplcMlt':
        			oOption.title = '사업장 조회';
        			this.gfn_openPopup(e.fromobject.id, 'CO_POP::SSP_BO_PP_14.xfdl', oArg, 'fn_popupCallback', oOption);
        			break;

        		case 'btnOpruMlt':
        			oOption.title = '운영단위 조회';
        			this.gfn_openPopup(e.fromobject.id, 'CO_POP::SSP_BO_PP_23.xfdl', oArg, 'fn_popupCallback', oOption);
        			break;

        		case 'btnDeptMlt':
        			oOption.title = '부서 조회';
        			this.gfn_openPopup(e.fromobject.id, 'CC::SSP_BO_PP_37.xfdl'    , oArg,  'fn_popupCallback', oOption);
        			break;

        		case 'btnAcctMlt':
        			oOption.title = '계정 조회';
        			this.gfn_openPopup(e.fromobject.id, 'CC::SSP_BO_PP_31.xfdl'    , oArg,  'fn_popupCallback', oOption);
        			break;
        	}

        };

        this.multipleTextBtn_onclick = function(obj,e)
        {
        	switch (e.fromobject.id) {
        		case 'btnBzplcTxt':  //사업장
        			this.fn_showTareaInput(this.name,'BZPLC_ID'   , this.divSrch.form.edtBZPLC_ID   .value, 'fn_popupCallback',150,300);
        			break;

        		case 'btnOpruTxt':  //운영단위
        			this.fn_showTareaInput(this.name,'OPR_UNIT_ID', this.divSrch.form.edtOPR_UNIT_ID.value, 'fn_popupCallback',150,300);
        			break;

        		case 'btnDeptTxt':  //부서
        			this.fn_showTareaInput(this.name,'DEPT_ID'    , this.divSrch.form.edtDEPT_ID.value    , 'fn_popupCallback',150,300);
        			break;

        		case 'btnAcctTxt':  //계정
        			this.fn_showTareaInput(this.name,'ACCT_ID'    , this.divSrch.form.edtACCT_ID.value    , 'fn_popupCallback',150,300);
        			break;
        	}

        };

        // 멀티팝업버튼 클릭 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var sIdList='', sNmList='', oRows=JSON.parse(sRetValue);
        	switch(sPopupId){
        		case 'btnBzplcMlt':
        			for(var i=0; i<oRows.length; i++){
        				var row = JSON.parse(oRows[i]);  trace('[row:'+ oRows[i] +']');
        				sIdList += row.BZPLC_ID +',';
        				sNmList += row.BZPLC_NM +',';
        			}
        			this.ds_search.setColumn(0, 'BZPLC_ID', oRows.length);
        			this.divSrch.form.edtBZPLC_ID.set_value(sIdList.replace(/,\s*$/, ""));
        			//this.divSrch.form.edtBZPLC_NM.set_value(sNmList.replace(/,\s*$/, ""));
        			break;

        		case 'btnOpruMlt':
        			for(var i=0; i<oRows.length; i++){
        				var row = JSON.parse(oRows[i]);  trace('[row:'+ oRows[i] +']');
        				sIdList += row.OPR_UNIT_ID +',';
        				sNmList += row.OPR_UNIT_NM +',';
        			}
        			this.ds_search.setColumn(0, 'OPR_UNIT_ID', oRows.length);
        			this.divSrch.form.edtOPR_UNIT_ID.set_value(sIdList.replace(/,\s*$/, ""));
        			//this.divSrch.form.edtOPR_UNIT_NM.set_value(sNmList.replace(/,\s*$/, ""));
        			break;

        		case 'btnDeptMlt':
        			for(var i=0; i<oRows.length; i++){
        				var row = JSON.parse(oRows[i]);  trace('[row:'+ oRows[i] +']');
        				sIdList += row.DEPT_ID +",";
        				sNmList += row.DEPT_NM +',';
        			}
        			this.ds_search.setColumn(0, "DEPT_ID", oRows.length);
        			this.divSrch.form.edtDEPT_ID.set_value(sIdList.replace(/,\s*$/, ""));
        			//this.divSrch.form.edtDEPT_NM.set_value(sNmList.replace(/,\s*$/, ""));
        			break;

        		case 'btnAcctMlt':
        			for(var i=0; i<oRows.length; i++){
        				var row = JSON.parse(oRows[i]);  trace('[row:'+ oRows[i] +']');
        				sIdList += row.ACCT_ID +",";
        				sNmList += row.ACCT_NM +',';
        			}
        			this.ds_search.setColumn(0,"ACCT_ID", oRows.length);
        			this.divSrch.form.edtACCT_ID.set_value(sIdList.replace(/,\s*$/, ""));
        			//this.divSrch.form.edtACCT_NM.set_value(sNmList.replace(/,\s*$/, ""));
        			break;



        		case 'SSP_BO_MA_64;BZPLC_ID':
        			for(var i = 0; i < oRows.length; i++) {
        				var row = JSON.parse(oRows[i]);
        				sIdList += row.VALUE +',';
        			}
        			this.divSrch.form.edtBZPLC_ID.set_value(sIdList);
        			this.fn_setMSearch(this.name, 'BZPLC_ID', sIdList);
        			break;

        		case 'SSP_BO_MA_64;OPR_UNIT_ID':
        			for(var i = 0; i < oRows.length; i++) {
        				var row = JSON.parse(oRows[i]);
        				sIdList += row.VALUE +",";
        			}
        			this.divSrch.form.edtOPR_UNIT_ID.set_value(sIdList);
        			this.fn_setMSearch(this.name, 'OPR_UNIT_ID', sIdList);
        			break;

        		case 'SSP_BO_MA_64;DEPT_ID':
        			for(var i = 0; i < oRows.length; i++) {
        				var row = JSON.parse(oRows[i]);
        				sIdList += row.VALUE +",";
        			}
        			this.divSrch.form.edtDEPT_ID.set_value(sIdList);
        			this.fn_setMSearch(this.name, 'DEPT_ID', sIdList);
        			break;

        		case 'SSP_BO_MA_64;ACCT_ID':
        			for(var i = 0; i < oRows.length; i++) {
        				var row = JSON.parse(oRows[i]);
        				sIdList += row.VALUE +",";
        			}
        			this.divSrch.form.edtACCT_ID.set_value(sIdList);
        			this.fn_setMSearch(this.name, 'ACCT_ID', sIdList);
        			break;
        	}

        	trace('[id:'+ sPopupId +'][sIdList:'+ sIdList +'][sNmList:'+ sNmList +'][sRetValue:'+ sRetValue +']');
        }

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grdList"){
        		this.btnSrch_onclick();
        	}
        };

        // 엑셀다운로드
        	this.fn_excelDownload = function(objId, ret) {
        		var answr = ret.split("||||");

        		if(this.gfn_isNull(answr)) { return; }
        		this.ofn_exportExcel({form:this, grid:this.grdList, fileName:"예산변경이력목록", password: answr[0], downRsn: answr[1], dbWrk: "DOWNLOAD", pgmId: "SSP_BO_MA_64"});

        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_reset_onclick = function(obj,e) {
        	trace('btn_reset_onclick > '+ this.ds_search.saveXML());


        	this.ds_search.reset();
        	this.ds_search.deleteRow(0);
        	this.ds_search.insertRow(0);

        	var nowObj = new nexacro.Date();
        	this.ds_search.setColumn(0, 'endDt'    , nowObj.toString().substr(0,8));

        	nowObj.addMonth(-3);
        	this.ds_search.setColumn(0, 'strDt'    , nowObj.toString().substr(0,8));

        	this.ds_search.setColumn(0, 'srtTypeCd', 'SR01'  );
        	this.ds_search.setColumn(0, 'startNum' , this.$p.dflt.startNum);
        	this.ds_search.setColumn(0, 'rowCount' , this.$p.dflt.rowCount);
        }

        this.cboPageSize_onitemchanged = function(obj,e) {
        	// trace('cboPageSize_onitemchanged');
        	this.fnSearch();
        };

        this.btnSrch_onclick = function(obj, e) {
        	//var isBypass = e.ctrlkey;  trace('[e.ctrlKey:'+ e.ctrlKey +']');
        	this.fnSearch(1, false);
        }

        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grdList", this.grdList.getCurFormatString());
        };

        // 레이아웃 초기화
        this.btn_layoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalSave("grdList", this.grdList.uOrgFormat);
        	this.grdList.set_formats(this.grdList.uOrgFormat);
        };

        this.btn_excel_onclick = function(obj,e)
        {
        	this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownload");
        };

        this.SSP_BO_MA_64_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){
        		this.btnSrch_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_64_onkeyup,this);
            this.divSrch.form.staBzplc.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.divSrch.form.btnBzplcMlt.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.divSrch.form.btnBzplcTxt.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.divSrch.form.btnDeptMlt.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.divSrch.form.btnDeptTxt.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.divSrch.form.btnSrch.addEventHandler("onclick",this.btnSrch_onclick,this);
            this.divSrch.form.btnOpruMlt.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.divSrch.form.btnOpruTxt.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.divSrch.form.btnAcctMlt.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.divSrch.form.btnAcctTxt.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.divSrch.form.calStrDt.addEventHandler("onchanged",this.Calendar00_onchanged,this);
            this.divSrch.form.calEndDt.addEventHandler("onchanged",this.Calendar00_onchanged,this);
            this.divSrch.form.btnRset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.cboPageSize.addEventHandler("onitemchanged",this.cboPageSize_onitemchanged,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_64.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
