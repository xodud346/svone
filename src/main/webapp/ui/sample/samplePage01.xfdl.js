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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sampleList", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PG_TP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_PGM_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_GRP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PG_TP_DTLS\" type=\"STRING\" size=\"32\"/><Column id=\"HRNK_PGM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_MNU_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"PGM_NM_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PG_CALL_ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"QCK_MNU_USE_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_multiCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_CD\">1</Col><Col id=\"CODE_NM\">A</Col></Row><Row><Col id=\"CODE_CD\">2</Col><Col id=\"CODE_NM\">B</Col></Row><Row><Col id=\"CODE_CD\">3</Col><Col id=\"CODE_NM\">C</Col></Row><Row><Col id=\"CODE_CD\">4</Col><Col id=\"CODE_NM\">D</Col></Row><Row><Col id=\"CODE_CD\">5</Col><Col id=\"CODE_NM\">E</Col></Row><Row><Col id=\"CODE_CD\">6</Col><Col id=\"CODE_NM\">F</Col></Row><Row><Col id=\"CODE_CD\">7</Col><Col id=\"CODE_NM\">G</Col></Row><Row><Col id=\"CODE_CD\">8</Col><Col id=\"CODE_NM\">H</Col></Row><Row><Col id=\"CODE_CD\">9</Col><Col id=\"CODE_NM\">I</Col></Row><Row><Col id=\"CODE_CD\">10</Col><Col id=\"CODE_NM\">J</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","5",null,"157","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31","40","31",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_00","40","62",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_00_00","40","93",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_00_00_00","40","124",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("상품ㆍ그룹ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","20","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","20","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","20","93","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("키워드");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","20","124","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","128","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo48","159","97","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo41","159","66","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo36","159","35","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit32","159","4","295","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33","460","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_00","488","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00","518","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_multi_off");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00_00","546","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00_00_00","575","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_addfile");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit37","314","35","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit38","459","35","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button39","604","35","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar42","314","66","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","458","66","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar43","471","66","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo44","616","66","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit69","314","97","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit70","459","97","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button71","604","97","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18","882","124","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","882","93","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("대표상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66","882","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","882","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","882","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit34","1021","4","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox35","1226","4","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit40","1021","35","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit46","1096","66","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit45","1021","66","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button47","1226","66","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo49","1021","97","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("대표상품구분");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","128","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Extend",null,null,"30","30","20","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("↕");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear","Edit37:-22","38","18","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("X");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","314","128","96","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmCalMM.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_multiCombo","459","128","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmMultiCombo.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","461","165","66","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","701","128","79","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("dataset bind");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"Div00:10","60","30","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","20","btn_search:5",null,null,"20","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_sampleList");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"가_REG_DTM\"/><Cell col=\"2\" text=\"나_UPDPSN_ID\"/><Cell col=\"3\" text=\"다_CO_CD\"/><Cell col=\"4\" text=\"라_MNU_SPR_CD\"/><Cell col=\"5\" text=\"마_SRT_SO\"/><Cell col=\"6\" text=\"바_PG_TP_ID\"/><Cell col=\"7\" text=\"사_BASIS_PGM_YN\"/><Cell col=\"8\" text=\"아_MALL_SPR_CD\"/><Cell col=\"9\" text=\"자_REGPSN_ID\"/><Cell col=\"10\" text=\"차_USE_YN\"/><Cell col=\"11\" text=\"카_PGM_ID\"/><Cell col=\"12\" text=\"타_PGM_GRP_ID\"/><Cell col=\"13\" text=\"파_PG_TP_DTLS\"/><Cell col=\"14\" text=\"하_HRNK_PGM_ID\"/><Cell col=\"15\" text=\"A_PGM_MNU_SPR_CD\"/><Cell col=\"16\" text=\"B_UPD_DTM\"/><Cell col=\"17\" text=\"C_PGM_NM_CD\"/><Cell col=\"18\" text=\"D_PG_CALL_ADDR\"/><Cell col=\"19\" text=\"E_QCK_MNU_USE_YN\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:_CHK\"/><Cell col=\"1\" text=\"bind:REG_DTM\" displaytype=\"calendarcontrol\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltext=\" \" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:UPDPSN_ID\"/><Cell col=\"3\" text=\"bind:CO_CD\"/><Cell col=\"4\" text=\"bind:MNU_SPR_CD\"/><Cell col=\"5\" text=\"bind:SRT_SO\"/><Cell col=\"6\" text=\"bind:PG_TP_ID\"/><Cell col=\"7\" text=\"bind:BASIS_PGM_YN\"/><Cell col=\"8\" text=\"bind:MALL_SPR_CD\"/><Cell col=\"9\" text=\"bind:REGPSN_ID\"/><Cell col=\"10\" text=\"bind:USE_YN\"/><Cell col=\"11\" text=\"bind:PGM_ID\"/><Cell col=\"12\" text=\"bind:PGM_GRP_ID\"/><Cell col=\"13\" text=\"bind:PG_TP_DTLS\"/><Cell col=\"14\" text=\"bind:HRNK_PGM_ID\"/><Cell col=\"15\" text=\"bind:PGM_MNU_SPR_CD\"/><Cell col=\"16\" text=\"bind:UPD_DTM\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" text=\"bind:PGM_NM_CD\"/><Cell col=\"18\" text=\"bind:PG_CALL_ADDR\"/><Cell col=\"19\" text=\"bind:QCK_MNU_USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"38","20","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"Div00:10","60","30","83",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20","Div00:20","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_open",null,"Div00:10","60","30","183",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("화면");
            this.addChild(obj.name, obj);

            obj = new Button("btn_multiSelect",null,"Div00:10","60","30","253",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("멀티 선택");
            this.addChild(obj.name, obj);

            obj = new Button("btn_personal",null,"Div00:10","60","30","323",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("개인화 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_menuInfo","316","Div00:10","95","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("menu_info");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmCalMM.xfdl");
            this._addPreloadList("fdl","COMM::cmmMultiCombo.xfdl");
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("samplePage01.xfdl", function() {
        /*******************************************************
          PROJECT NAME : MarketA
          CREATION DATES :
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        	this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//개인화 조회 함수
        	//this.fn_personalSearch();

        	//검색 영역 최소size 적용
        	this.Div00.set_height(this.Div00.uMinSize);
        	this.resetScroll();
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//조회
        	this.fn_search = function()	{
        		var sSvcId = "sampleSelect";
        		var sUrl = "/sampleSelectMap.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_sampleList=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};
        /*
        	//grid 개인화 조회
        	this.fn_personalSearch = function(){
        		this.ds_personalSearch.clearData();

        		//수정 필요
        		var nNewRow = this.ds_personalSearch.addRow();
        		this.ds_personalSearch.setColumn(nNewRow,"CO_CD","1000");
        		this.ds_personalSearch.setColumn(nNewRow,"OPRTR_ID","ouser");

        		//menu Id 는 수정 불필요
        		var nMnuSeq = this.gfn_getMnuSeq(this.gfn_getPageInfo("menuId"));
        		this.ds_personalSearch.setColumn(nNewRow,"MNU_SEQ",nMnuSeq);

        		//grid 명 변경
        		this.ds_personalSearch.setColumn(nNewRow,"GRID_NM","grd_mainList");

        		var sSvcId = "selectScrnPrsnList";
        		var sUrl = "/co/Prsn/selectScrnPrsnList.do";
        		var inDs = "ds_search=ds_personalSearch";
        		var outDs = "ds_personal=ds_output";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        		//this.fn_callBack("selectScrnPrsnList", 0, "");
        	};

        	//grid 개인화 저장
        	this.fn_personalSave = function(sGridId, sFormat){
        		var nFindRow = this.ds_personal.findRow("GRID_NM",sGridId);
        		var nRow;
        		if(nFindRow < 0){
        			nRow = this.ds_personal.addRow();
        		} else {
        			nRow = nFindRow;
        		}
        		//수정 필요
        		this.ds_personal.setColumn(nRow,"CO_CD","1000");
        		this.ds_personal.setColumn(nRow,"OPRTR_ID","ouser");

        		//수정 필요 없어
        		var nMnuSeq = this.gfn_getMnuSeq(this.gfn_getPageInfo("menuId"));

        		this.ds_personal.setColumn(nRow,"MNU_SEQ",nMnuSeq);
        		this.ds_personal.setColumn(nRow,"GRID_NM",sGridId);
        		this.ds_personal.setColumn(nRow,"FMT_TP","");
        		this.ds_personal.setColumn(nRow,"GRID_FMT",sFormat);

        		var sSvcId = "saveScrnPrsn";
        		var sUrl = "/co/Prsn/saveScrnPrsn.do";
        		var inDs = "ds_save=ds_personal:U";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};
        */
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "sampleSelect"){
        			this.ds_sampleList.addColumn("_CHK","String");

        //			trace(this.ds_sampleList.getRowCount());
        			//paging 처리
        			this.div_paging.form.cfn_createPage(this.div_paging,1912,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        /*		} else if(svcID == "selectScrnPrsnList"){
        			this.gfn_gridPersonalInit(this.grd_mainList, this.ds_personal);

        		} else if(svcID == "saveScrnPrsn"){
        			this.alert("grid 개인화가 저장 되었습니다.");
        */
        		}

        	};

        	this.fn_pageCallback = function(sFlag){
        		var oPaging = this.div_paging;
        		if(sFlag){
        			this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        			this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        			this.fn_search();
        		}

        		var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
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
        	};
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){

        		//search div 초기 설정
        		this.Div00.uMinSize = 94;
        		this.Div00.uMaxSize = 157;

        		//search static 초기 설정
        		this.Div00.form.Static02.uEssentiel = "true";
        		this.Div00.form.Static06.uEssentiel = "true";

        		//grid 초기 설정
        		//sort
        		this.grd_mainList.uSortFlag = "false";
        		this.grd_mainList.uServerSortFlag = "true";
        		this.grd_mainList.uSortCallback = "fn_sortCallback";

        		//grid cell size 변경
        		this.grd_mainList.uCellSizeType = "true";

        		//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        		this.uGridList = "grd_mainList";
        		this.grd_mainList.uRightMouse = "true";
        		this.grd_mainList.uPersonalFlag = "true";
        		this.grd_mainList.uDefaultFormat = "REG_DTM,UPDPSN_ID,CO_CD,MNU_SPR_CD,SRT_SO,PG_TP_ID,BASIS_PGM_YN,MALL_SPR_CD,REGPSN_ID,USE_YN";

        		//페이징 초기 설정
        		this.div_paging.uPage = 1;
        		this.div_paging.uPageNum = 0;
        		this.div_paging.uPageRowCnt = 10;
        		this.div_paging.uPageCnt = 0;
        		this.div_paging.uTotCount = 0;

        		//multi combo 초기 설정
        		this.Div00.form.div_multiCombo.uComboInnerDataset 	= "ds_multiCombo";
        		this.Div00.form.div_multiCombo.uComboCodeColumn 	= "CODE_CD";
        		this.Div00.form.div_multiCombo.uComboDataColumn		= "CODE_NM";
        		this.Div00.form.div_multiCombo.uAllcheck 			= false;
        		this.Div00.form.div_multiCombo.uCallbackFunc 		= "fn_multiComboCallback";
        		this.Div00.form.div_multiCombo.uViewCount           = 5;
        		this.Div00.form.div_multiCombo.form.cfn_setMultiCombo(this);
        	};

        	this.cfn_personalPopupClose = function(sRet){
        		this.grd_mainList.set_formats(sRet);
        		this.pdiv_personal.closePopup();
        	}
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//조회 버튼 click  이벤트
        	this.btn_search_onclick = function(obj,e)
        	{
        		var oPaging = this.div_paging;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);

        		this.fn_search();
        	};


        	this.btn_excel_onclick = function(obj,e)
        	{
        		var sFileName = "EXCEPL_EXPORT"; //file Name
        		var aGrid = [this.grd_mainList];
        		var aSht  = ["main_list"];

        		var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        		this.gfn_exportExcel(oParam);
        	};

        	//조회 조건 확장 버튼 이벤트
        	this.Div00_btn_Extend_onclick = function(obj,e)
        	{
        		var nSize = this.Div00.getOffsetHeight();
        		if(nSize  == this.Div00.uMinSize){
        			this.Div00.set_height(this.Div00.uMaxSize);
        		} else {
        			this.Div00.set_height(this.Div00.uMinSize);
        		}
        		this.resetScroll();
        	};

        	this.Div00_Edit37_oninput = function(obj,e)
        	{
        		if(this.gfn_isNull(obj.value)){
        			//데이터가 빈값이면
        			this.Div00.form.btn_clear.set_visible(false);
        		} else {
        			this.Div00.form.btn_clear.set_visible(true);
        		}
        	};

        	this.btn_clear_onclick = function(obj,e)
        	{
        		this.Div00.form.Edit37.set_value("");
        		this.Div00.form.btn_clear.set_visible(false);
        	};

        	this.btn_open_onclick = function(obj,e)
        	{
        		var oArg = {aaa:"param1"}
        		this.gfn_menuOpen("9199020000",oArg);
        	};

        	//multicombo callback
        	this.fn_multiComboCallback = function(sId, sRet){
        		trace("fn_multiComboCallback");
        	}



        this.Button00_onclick = function(obj,e)
        {
        	this.Div00.form.div_multiCombo.form.cfn_setDataset(this);
        };

        this.btn_multiSelect_onclick = function(obj,e)
        {
        	var sPopId = "multi_select";
        	var sUrl ="sample::samplePage03.xfdl";
        	var oArg = {};
        	var sCallback = "fn_popupCallback";
        	var oOption = {titlebar:"true", title:"멀티 선택"};

        	this.gfn_openPopup(sPopId,sUrl,oArg,sCallback,oOption);
        };


        //개인화 저장 버튼 이벤트
        this.btn_personal_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_mainList",this.grd_mainList.getCurFormatString());
        };


        //menu_info
        this.btn_menuInfo_onclick = function(obj,e)
        {
        	var sMenuInfo = "menuId"; //menuId,menuNm,pageUrl,oArgs
        	this.alert(this.gfn_getPageInfo(sMenuInfo));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.Edit37.addEventHandler("oninput",this.Div00_Edit37_oninput,this);
            this.Div00.form.btn_Extend.addEventHandler("onclick",this.Div00_btn_Extend_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Div00.form.Button00_00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_open.addEventHandler("onclick",this.btn_open_onclick,this);
            this.btn_multiSelect.addEventHandler("onclick",this.btn_multiSelect_onclick,this);
            this.btn_personal.addEventHandler("onclick",this.btn_personal_onclick,this);
            this.btn_menuInfo.addEventHandler("onclick",this.btn_menuInfo_onclick,this);
        };
        this.loadIncludeScript("samplePage01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
