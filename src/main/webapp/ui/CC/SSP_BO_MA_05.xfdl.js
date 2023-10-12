(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_05");
            this.set_titletext("운영단위조회 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_oprUnitList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MAT_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"100\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHR_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SVC_TEAM_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SVC_TEAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"OPR_TEAM_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_TEAM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SALS_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SVC_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SVC_CHRPSN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"OPR_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_CHRPSN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_STATS\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_TEAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_TEAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSN_CUST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MEDI_SELL_PERMIT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"OPR_UNIT_ID\"/><Col id=\"BZPLC_ID\"/><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_regStats", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">20</Col><Col id=\"COL_NM\">20개씩</Col></Row><Row><Col id=\"COL_VALUE\">50</Col><Col id=\"COL_NM\">50개씩</Col></Row><Row><Col id=\"COL_VALUE\">100</Col><Col id=\"COL_NM\">100개씩</Col></Row><Row><Col id=\"COL_VALUE\">10000</Col><Col id=\"COL_NM\">10,000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_matSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"160","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31","20","51",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_00","20","82",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("영업팀");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","20","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("고객구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_custSprCd","Static10:10","86","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_innerdataset("ds_custSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("7");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitId","Static02:10","24","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprMulti","edt_oprUnitId:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprMultiText","btn_oprMulti:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66","883","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","883","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("운영팀");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","883","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("등록상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprTeamId","Static08:10","55","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprTeamNm","edt_oprTeamId:4","55","137","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprTeamPop","edt_oprTeamNm:4","55","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66_00","450","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("자재 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08_00","450","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("서비스팀");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","450","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","Static04_00:10","24","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_svcTeamId","Static08_00:10","55","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_svcTeamNm","edt_svcTeamId:4","55","137","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_svcTeamPop","edt_svcTeamNm:4","55","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_salsTeamId","Static06:10","55","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_salsTeamNm","edt_salsTeamId:4","55","137","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_salsTeamPop","edt_salsTeamNm:4","55","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzpMulti","edt_bzplcId:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzpMultiText","btn_bzpMulti:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_regStats","Static04:10","24","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_innerdataset("ds_regStats");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("24");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","Static66:10","86","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("25");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_matSprCd","Static66_00:10","86","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_innerdataset("ds_matSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("27");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"Static31_00:10","60","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"Static31_00:10","60","28","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_allExcel",null,"Static31_00:10","100","28","btn_reset:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_default");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_allExcel2",null,"Static31_00:10","120","28","btn_allExcel:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("제어권한 다운로드");
            obj.set_cssclass("btn_WF_default");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmbCONSN_CUST_YN","315","86","129","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_visible("false");
            obj.set_tooltiptext("특약고객여부");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cmbCONSN_CUST_YN_innerdataset = new nexacro.NormalDataset("Div00_form_cmbCONSN_CUST_YN_innerdataset", obj);
            Div00_form_cmbCONSN_CUST_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\"> 전체</Col></Row><Row><Col id=\"datacolumn\">특약고객</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">특약고객 외</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmbCONSN_CUST_YN_innerdataset);
            obj.set_text(" 전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_page",null,"Div00:20","110","28","20",null,null,null,null,null,this);
            obj.set_innerdataset("ds_pageOpt");
            obj.set_datacolumn("COL_NM");
            obj.set_codecolumn("COL_VALUE");
            obj.set_taborder("1");
            obj.set_displayrowcount("5");
            obj.set_text("20");
            obj.set_value("20");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20","193","180","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","218",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","540",null,"38","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"Div00:20","100","28","248",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"Div00:20","110","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","20","cbo_page:10",null,"510","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_oprUnitList");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_selecttype("area");
            obj.set_font("12px/normal \"Arial\",\"맑은고딕\"");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"89\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"164\"/><Column size=\"80\"/><Column size=\"195\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"84\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"84\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"고객 구분\"/><Cell col=\"2\" text=\"자재 구분\"/><Cell col=\"3\" text=\"사용 여부\"/><Cell col=\"4\" text=\"사업장ID\"/><Cell col=\"5\" text=\"사업장명\"/><Cell col=\"6\" text=\"운영단위ID\"/><Cell col=\"7\" text=\"운영단위명\"/><Cell col=\"8\" text=\"영업담당ID\"/><Cell col=\"9\" text=\"영업 담당명\"/><Cell col=\"10\" text=\"영업팀ID\"/><Cell col=\"11\" text=\"영업팀명\"/><Cell col=\"12\" text=\"서비스팀ID\"/><Cell col=\"13\" text=\"서비스팀명\"/><Cell col=\"14\" text=\"운영팀ID\"/><Cell col=\"15\" text=\"운영팀명\"/><Cell col=\"16\" text=\"영업담당자ID\"/><Cell col=\"17\" text=\"영업담당자명\"/><Cell col=\"18\" text=\"서비스담당자ID\"/><Cell col=\"19\" text=\"서비스담당자명\"/><Cell col=\"20\" text=\"운영담당ID\"/><Cell col=\"21\" text=\"운영담당명\"/><Cell col=\"22\" text=\"특약고객\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CUST_SPR_CD\" displaytype=\"combotext\" combodataset=\"ds_custSprCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"2\" text=\"bind:MAT_SPR_CD\" displaytype=\"combotext\" combodataset=\"ds_matSprCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"3\" text=\"bind:USE_YN\" combodataset=\"ds_useYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:BZPLC_ID\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:OPR_UNIT_ID\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"7\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:SALS_CHR_CD\"/><Cell col=\"9\" text=\"bind:SALS_CHR_NM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:SALS_TEAM_CD\"/><Cell col=\"11\" text=\"bind:SALS_TEAM_NM\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:SVC_TEAM_CD\"/><Cell col=\"13\" text=\"bind:SVC_TEAM_NM\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:OPR_TEAM_CD\"/><Cell col=\"15\" text=\"bind:OPR_TEAM_NM\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:SALS_CHRPSN_ID\"/><Cell col=\"17\" text=\"bind:SALS_CHRPSN_NM\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:SVC_CHRPSN_ID\"/><Cell col=\"19\" text=\"bind:SVC_CHRPSN_NM\" textAlign=\"center\"/><Cell col=\"20\" text=\"bind:OPR_CHRPSN_ID\"/><Cell col=\"21\" text=\"bind:OPR_CHRPSN_NM\" textAlign=\"center\"/><Cell col=\"22\" text=\"bind:CONSN_CUST_YNNM\"/></Band></Format></Formats>");
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

            obj = new BindItem("item1","Div00.form.edt_salsTeamId","value","ds_search","SALS_TEAM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_svcTeamId","value","ds_search","SVC_TEAM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_oprTeamId","value","ds_search","OPR_TEAM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.cbo_regStats","value","ds_search","REG_STATS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_bzplcId","value","ds_search","eBZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_oprUnitId","value","ds_search","eOPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.cbo_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.cbo_matSprCd","value","ds_search","MAT_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.cbo_custSprCd","value","ds_search","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.cmbCONSN_CUST_YN","value","ds_search","CONSN_CUST_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_05.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_05.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_05.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_05.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES :
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
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
        		this.ds_comCodeSearch.setColumn(0, "codeList", "OPR_UNIT_REG_STATS_CD,CUST_SPR_CD,MAT_SPR_CD,USE_YN");
        		this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        		var sSvcId = "commonCodeSearch";
        		var sUrl = "/co/select-common-code-list.do";
        		var inDs = "ds_search=ds_comCodeSearch";
        		var outDs = "ds_regStats=ds_output1 ds_custSprCd=ds_output2 ds_matSprCd=ds_output3 ds_useYn=ds_output4";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	//조회
        	this.fn_search = function(page)	{
        			var sSvcId = "sampleSelect";
        			var sUrl = "/bo/cust/oprunit/select-cust-opr-unit.do";
        			var inDs = "ds_search=ds_search";
        			var outDs = "ds_oprUnitList=ds_output1";
        			var arg = "";
        			var callback = "fn_received";

        			this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	};

        	// 대용량다운로드
        	this.fn_allExcelDownload = function(){
        		var sSvcId = "allExcelDownload";
        		var sUrl = "/bo/cust/oprunit/select-all-excel-download.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");
        	};

        	// 대용량다운로드
        	this.fn_allExcelDownload2 = function(){
        		var sSvcId = "allExcelDownload2";
        		var sUrl = "/bo/cust/oprunit/select-auth-all-excel-download.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");
        	};
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		this.ds_regStats.insertRow(0);
        		this.ds_regStats.setColumn(0,"COM_DTL_CD_NM","전체");
        		this.ds_custSprCd.insertRow(0);
        		this.ds_custSprCd.setColumn(0,"COM_DTL_CD_NM","전체");
        		this.ds_matSprCd.insertRow(0);
        		this.ds_matSprCd.setColumn(0,"COM_DTL_CD_NM","전체");
        		this.ds_useYn.insertRow(0);
        		this.ds_useYn.setColumn(0,"COM_DTL_CD_NM","전체");
        	};

        	this.fn_callBackForSearch = function(){
        		this.fn_search();
        	}

        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		if( this.ds_oprUnitList.rowcount == 0 ) {
        			this.grd_mainList.set_nodatatext("조회 결과가 없습니다.");
        		}

        		this.totalCount = 0;
        		if(this.ds_oprUnitList.getRowCount() > 0) {
        			this.totalCount = this.ds_oprUnitList.getColumn(0,"TOT_CUNT");
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
        	};

        	// 멀티팝업버튼 클릭 콜백
        	this.fn_popupCallback = function(sPopupId, sRetValue){
        		switch(sPopupId){
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

        			case "SSP_BO_MA_05;BZPLC_ID":
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

        			case "SSP_BO_MA_05;OPR_UNIT_ID":
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

        			case "btn_salsTeamPop" :
        				const teamObj1 = JSON.parse(sRetValue);
        				this.ds_search.setColumn(0, "SALS_TEAM_ID", teamObj1.SALS_TEAM_CD);
        				this.Div00.form.edt_salsTeamNm.set_value(teamObj1.TEAM_NM);
        				break;

        			case "btn_svcTeamPop" :
        				const teamObj2 = JSON.parse(sRetValue);
        				this.ds_search.setColumn(0, "SVC_TEAM_ID", teamObj2.TEAM_CD);
        				this.Div00.form.edt_svcTeamNm.set_value(teamObj2.TEAM_NM);
        				break;

        			case "btn_oprTeamPop" :
        				const teamObj3 = JSON.parse(sRetValue);
        				this.ds_search.setColumn(0, "OPR_TEAM_ID", teamObj3.TEAM_CD);
        				this.Div00.form.edt_oprTeamNm.set_value(teamObj3.TEAM_NM);
        				break;
        		}
        	}

        	//멀티텍스트팝업 콜백함수
        	this.fn_multiTextPopupCallback = function(objID, rtnValue)
        	{
        		var resParam = JSON.parse(rtnValue);
        		if(objID == 'btn_bzpMultiText'){
        			this.Div00.form.edt_bzplcNm.set_value(resParam.textValue);
        			this.ds_search.setColumn(0,"BZPLC_ID", resParam.textValue);
        		}
        		if(objID == 'btn_oprMultiText'){
        			this.Div00.form.edt_oprUnitNm.set_value(resParam.textValue);
        			this.ds_search.setColumn(0,"OPR_UNIT_ID", resParam.textValue);
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
        		this.grd_mainList.uDefaultFormat = "CHK,CUST_SPR_CD,MAT_SPR_CD,USE_YN,BZPLC_ID,BZPLC_NM,OPR_UNIT_ID,OPR_UNIT_NM,SALS_CHR_CD,SALS_CHR_NM,SALS_TEAM_CD,SALS_TEAM_NM,SVC_TEAM_CD,SVC_TEAM_NM,OPR_TEAM_CD,OPR_TEAM_NM,SALS_CHRPSN_ID,SALS_CHRPSN_NM,SVC_CHRPSN_ID,SVC_CHRPSN_NM,OPR_CHRPSN_ID,OPR_CHRPSN_NM";
        	};

        	this.cfn_personalPopupClose = function(sRet){
        		this.grd_mainList.set_formats(sRet);
        		this.pdiv_personal.closePopup();
        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

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


        	this.btn_excel_onclick = function(obj,e)
        	{
        		this.ofn_exportExcel({form:this, grid:this.grd_mainList, fileName:"운영단위 목록"});
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

        	this.multiPopOpen_onclick = function(obj,e)
        	{
        		var oArg = {
        			coCd : '1000'
        			, bzplcId : this.Div00.form.edt_bzplcId.value
        			, oprUnitId : this.Div00.form.edt_oprUnitId.value
        		};
        		var oOption = { titlebar: 'true', autosize: 'false' };

        		if(e.fromobject.id == 'btn_bzpMulti'){
        			oOption.title = '사업장 조회';
        			this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        		if(e.fromobject.id == 'btn_oprMulti'){
        			oOption.title = '운영단위 조회';
        			this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        	};

        	this.multipleTextBtn_onclick = function(obj,e)
        	{
        		if(e.fromobject.id == 'btn_bzpMultiText'){
        			//사업장
        			this.fn_showTareaInput(this.name,"BZPLC_ID",this.Div00.form.edt_bzplcId.value, "fn_popupCallback",150,300);
        		}
        		if(e.fromobject.id == 'btn_oprMultiText'){
        			//운영단위
        			this.fn_showTareaInput(this.name,"OPR_UNIT_ID",this.Div00.form.edt_oprUnitId.value, "fn_popupCallback",150,300);
        		}
        	};

        	this.popOpen_onclick = function(obj,e)
        	{
        		if(e.fromobject.id == 'btn_salsTeamPop'){
        			//영업팀
        			var args = {
        				coCd: '1000'
        				, searchType : '1'
        				, salsTeamCd: this.ds_search.getColumn(0, "SALS_TEAM_ID")
        			};
        			var opts = { title: '영업팀 조회', titlebar: 'true', autosize: 'false' }
        		}
        		if(e.fromobject.id == 'btn_svcTeamPop'){
        			//서비스팀
        			var args = {
        				coCd: '1000'
        				, searchType : '2'
        				, teamCd: this.ds_search.getColumn(0, "SVC_TEAM_ID")
        			};
        			var opts = { title: '서비스팀 조회', titlebar: 'true', autosize: 'false' }
        		}
        		if(e.fromobject.id == 'btn_oprTeamPop'){
        			//운영팀
        			var args = {
        				coCd: '1000'
        				, searchType : '5'
        				, teamCd: this.ds_search.getColumn(0, "OPR_TEAM_ID")
        			};
        			var opts = { title: '운영팀 조회', titlebar: 'true', autosize: 'false' }
        		}
        		this.gfn_openPopup(e.fromobject.id, 'CC::SSP_BO_PP_26.xfdl', args, 'fn_popupCallback', opts);
        	};

        	this.btn_reset_onclick = function(obj,e)
        	{
        		this.Div00.form.edt_salsTeamId.set_value('');
        		this.Div00.form.edt_svcTeamId.set_value('');
        		this.Div00.form.edt_oprTeamId.set_value('');

        		this.Div00.form.cbo_regStats.set_value(null);
        		this.Div00.form.cbo_custSprCd.set_value(null);
        		this.Div00.form.cbo_matSprCd.set_value(null);
        		this.Div00.form.cbo_useYn.set_value('Y');

        		this.Div00.form.edt_salsTeamNm.set_value('');
        		this.Div00.form.edt_oprTeamNm.set_value('');
        		this.Div00.form.edt_svcTeamNm.set_value('');

        		this.ds_search.setColumn(0,"BZPLC_ID", '');
        		this.ds_search.setColumn(0,"OPR_UNIT_ID", '');
        		this.ds_search.setColumn(0, "eBZPLC_ID", "");
        		this.ds_search.setColumn(0, "eOPR_UNIT_ID", "");
        	};

        	this.grd_mainList_oncellclick = function(obj,e)
        	{
        		var evtColID = this.getBindColumnIDByIndex(obj, e.cell), rRix = e.row;  // trace('[evtColID:'+ evtColID +']');
        		var ds = obj.getBindDataset();

        		if ('OPR_UNIT_ID' == evtColID) {
        			var args = { coCd: ds.getColumn(rRix, 'CO_CD'), bzplcId: ds.getColumn(rRix, 'BZPLC_ID'), oprUnitId: ds.getColumn(rRix, 'OPR_UNIT_ID') };
        			this.gfn_openPopup('oprunitPop', 'CC::SSP_BO_MA_06.xfdl', args, '', { title: '운영단위 상세정보', titlebar: 'true', autosize: 'false' });
        		}

        	};

        	this.cbo_page_onitemchanged = function(obj,e)
        	{
        		// 리스트옵션 변경시 자동조회
        		this.fn_search();
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

        	// 대용량 엑셀
        	this.btn_allExcel_onclick = function(obj,e)
        	{
        		if(!confirm(this.fn_getMessage("ERRC000181", "대용량 엑셀을 다운로드"))) {
        			// 대용량 엑셀을 다운로드 하시겠습니까?
        			return;
        		}

        		// 화면ID set
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        		var bzplcStr = this.Div00.form.edt_bzplcId.value;
        		var oprUnitStr = this.Div00.form.edt_oprUnitId.value;

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

        		this.fn_allExcelDownload();
        	};

        	this.btn_allExcel2_onclick = function(obj,e)
        	{
        		if(!confirm(this.fn_getMessage("ERRC000181", "대용량 엑셀을 다운로드"))) {
        			// 대용량 엑셀을 다운로드 하시겠습니까?
        			return;
        		}

        		// 화면ID set
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        		var bzplcStr = this.Div00.form.edt_bzplcId.value;
        		var oprUnitStr = this.Div00.form.edt_oprUnitId.value;

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

        		this.fn_allExcelDownload2();
        	};

        	this.SSP_BO_MA_05_onkeyup = function(obj,e)
        	{
        		if(e.keycode == 13 && e.ctrlkey){
        			this.btn_search_onclick();
        		}
        	};

        this.ds_search_onvaluechanged = function(obj,e)
        {
        	var custSprCd=this[e.fromobject.id].getColumn(0, 'CUST_SPR_CD');
        	this.Div00.form.cmbCONSN_CUST_YN.set_visible('20'==custSprCd);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_05_onkeyup,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.Div00.form.btn_oprMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.btn_oprMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div00.form.btn_oprTeamPop.addEventHandler("onclick",this.popOpen_onclick,this);
            this.Div00.form.btn_svcTeamPop.addEventHandler("onclick",this.popOpen_onclick,this);
            this.Div00.form.btn_salsTeamPop.addEventHandler("onclick",this.popOpen_onclick,this);
            this.Div00.form.btn_bzpMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.btn_bzpMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.Div00.form.btn_allExcel.addEventHandler("onclick",this.btn_allExcel_onclick,this);
            this.Div00.form.btn_allExcel2.addEventHandler("onclick",this.btn_allExcel2_onclick,this);
            this.cbo_page.addEventHandler("onitemchanged",this.cbo_page_onitemchanged,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.grd_mainList.addEventHandler("oncellclick",this.grd_mainList_oncellclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.ds_search.addEventHandler("onvaluechanged",this.ds_search_onvaluechanged,this);
        };
        this.loadIncludeScript("SSP_BO_MA_05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
