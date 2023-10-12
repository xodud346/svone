(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_21");
            this.set_titletext("프리패키지 - 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_DSGN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_INC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TERM_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DOWNLOAD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchComCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchIddtBasis", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchEmpNoOprtrNm", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboIddtBasis", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CHR_MD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CHR_CS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_MD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_CS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_OP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REG_CS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboInqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridPrePkgInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_DSGN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_INC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_DSGN_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_INC_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_SO\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridPrePkgInfoExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"ALL_INC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_PKG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboMallSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"170","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-73","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-73","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","20","51",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65","20","82",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02","150","83","302","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_searchRegpsnId","850","86","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchRegpsnIdNm","716","86","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03","150","83","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","150","110","302","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22","452","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","442","83","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_03","582","110","302","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","582","83","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_03_00","1014","79","301","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","1014","52","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_03_00_00","1014","52","301","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","1305","52","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_01","874","83","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_03_01","582","83","302","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchIddtId","160","24","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_comboIddtBasis");
            obj.set_codecolumn("IDDT_ID");
            obj.set_datacolumn("IDDT_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchReprPrdId","160","86","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchTermType","485","55","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_comboInqPerdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_value("2");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_searchEndDate","371","55","110","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59","358","55","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_searchStartDate","244","55","110","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","354","52","5","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","366","52","5","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00_00","1277","83","4","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchPrePkgNm","1024","55","281","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_searchUpdpsnId","1281","86","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchUpdpsnIdNm","1148","86","129","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchTermSpr","160","55","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbx_searchTermSpr_innerdataset = new nexacro.NormalDataset("div_search_form_cbx_searchTermSpr_innerdataset", obj);
            div_search_form_cbx_searchTermSpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REG_DTM</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">UPD_DTM</Col><Col id=\"datacolumn\">수정일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbx_searchTermSpr_innerdataset);
            obj.set_text("등록일");
            obj.set_value("REG_DTM");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"124","60","26","84",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"124","60","26","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_text("산업군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","20","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("36");
            obj.set_text("기간");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","884","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("37");
            obj.set_text("패키지명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static66","884","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("38");
            obj.set_text("수정자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","20","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("39");
            obj.set_text("대표상품ID");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static23","452","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("40");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchRegpsnId","592","86","120","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("41");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchUpdpsnId","1024","86","120","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("42");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchUseYn","592","24","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbx_searchUseYn_innerdataset = new nexacro.NormalDataset("div_search_form_cbx_searchUseYn_innerdataset", obj);
            div_search_form_cbx_searchUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbx_searchUseYn_innerdataset);
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static32","884","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("44");
            obj.set_text("몰 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_mallSprCd","1024","24","281","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("45");
            obj.set_innerdataset("ds_comboMallSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","0","114","1336","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("46");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","20","210","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write",null,"200","81","28","340",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_prePkgInfo","20","238",null,null,"20","105",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridPrePkgInfo");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"70\"/><Column size=\"105\"/><Column size=\"415\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"노출순서\"/><Cell col=\"1\" text=\"사용여부\"/><Cell col=\"2\" text=\"패키지구분\"/><Cell col=\"3\" text=\"패키지명\"/><Cell col=\"4\" text=\"산업군\"/><Cell col=\"5\" text=\"등록일\"/><Cell col=\"6\" text=\"등록자사번\"/><Cell col=\"7\" text=\"등록자\"/><Cell col=\"8\" text=\"수정일\"/><Cell col=\"9\" text=\"수정자사번\"/><Cell col=\"10\" text=\"수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:EXPS_SO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USE_YN_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MALL_SPR_CD_NM\"/><Cell col=\"3\" text=\"bind:PRE_PKG_NM\" textAlign=\"left\" expr=\"PRE_PKG_NM  == &apos;&apos; ? PRE_PKG_NM : &quot;&lt;u v=&apos;true&apos;&gt;&quot; + PRE_PKG_NM + &quot;&lt;/u&gt;&quot;\" displaytype=\"decoratetext\"/><Cell col=\"4\" text=\"bind:IDDT_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:REG_DTM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:REGPSN_ID_NM\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:UPD_DTM\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:UPDPSN_ID\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:UPDPSN_ID_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","20","846",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1316","0","20","846",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","826","1336","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","0","170","1336","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","-6","160","1336","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","1336","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01","0","228","1336","10",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","0","740","1336","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"55","20","20",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"200","100","28","124",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"200","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_prePkgInfoExcel","19","960",null,null,"21","-244",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridPrePkgInfoExcel");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"152\"/><Column size=\"129\"/><Column size=\"80\"/><Column size=\"82\"/><Column size=\"108\"/><Column size=\"101\"/><Column size=\"144\"/><Column size=\"81\"/><Column size=\"90\"/><Column size=\"83\"/><Column size=\"99\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"패키지명\"/><Cell col=\"1\" text=\"MRO 패키지명\"/><Cell col=\"2\" text=\"산업군\"/><Cell col=\"3\" text=\"등록일\"/><Cell col=\"4\" text=\"수정일\"/><Cell col=\"5\" text=\"상품ID\"/><Cell col=\"6\" text=\"상품명\"/><Cell col=\"7\" text=\"규격\"/><Cell col=\"8\" text=\"공용전용구분\"/><Cell col=\"9\" text=\"대표상품구분\"/><Cell col=\"10\" text=\"SSP상품상태\"/><Cell col=\"11\" text=\"SSP진열상태\"/></Band><Band id=\"body\"><Cell text=\"bind:PRE_PKG_NM\" textAlign=\"left\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:FRT_PKG_NM\"/><Cell col=\"2\" text=\"bind:IDDT_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:REG_DTM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:UPD_DTM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PRD_ID\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PRD_NM\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:ATTR_VAL\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:PUB_ONLY_SPR_NM\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:REPR_PRD_SPR_NM\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:PRD_USE_YN_NM\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:DISP_STATS_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_largeExcel",null,"124","118","26","147",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"200","110","28","226",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dispSave",null,"200","81","28","426",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("순서저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_searchRegpsnIdNm","value","ds_search","REGPSN_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cbx_searchIddtId","value","ds_search","IDDT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_searchReprPrdId","value","ds_search","REPR_PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_searchEndDate","value","ds_search","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cal_searchStartDate","value","ds_search","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_searchPrePkgNm","value","ds_search","PRE_PKG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_searchUpdpsnIdNm","value","ds_search","UPDPSN_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cbx_searchTermSpr","value","ds_search","TERM_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.edt_searchRegpsnId","value","ds_search","REGPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_searchRegpsnIdNm","value","ds_search","REGPSN_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.edt_searchUpdpsnId","value","ds_search","UPDPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_searchUpdpsnIdNm","value","ds_search","UPDPSN_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.cbx_searchUseYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.cbx_mallSprCd","value","ds_search","MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_21.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_21.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_NA_21.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 프리패키지 - 목록
          CREATION DATES : 2022.02.25
        *******************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /* ===============================================================
         * 0. Form Variable
         *  - Form 변수 영역
         * ===============================================================
         */
        //var fv_변수명;
        this.fv_oApp = nexacro.getApplication();
        var fv_coCd = "";

        this.totalCount = 0;

        //등록자/수정자 자동조회 위한 변수
        this.oprtrInfoCount = 0;
        this.selectRegpsnId = "";
        this.selectRegpsnNm = "";

        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */
        this.SSP_BO_NA_21_onload = function(obj, e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 초기화
        	this.fn_init("VAL_INIT");
        	this.fn_init("SEARCH_INIT");
        	this.fn_init("CODE_INIT");
        	this.fn_init("GRID_INIT");
        }

        this.fn_onkeyup = function(obj,e)
        {
        	// CTRL+ENTER KEY
        	if(e.keycode == 13 && e.ctrlkey){
        		this.div_search_btn_search_onclick();
        	}
        };








        /* ===============================================================
         * 2. transaction
         *  - transaction 영역
         * ===============================================================
         */

        /**
         * 산업군 combo 값 조회
         */
        this.fn_comCdCustIddtList = function()
        {
        	var sSvcId = "comCdCustIddtList";
        	var sUrl = "/bo/cust/iddt/select-cust-iddt-list.do";
        	var sInData = "ds_search=ds_searchIddtBasis"
        	var sOutData = "ds_comboIddtBasis=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 공통코드 조회
         */
        this.fn_commonCodeSearch = function()
        {
        	this.ds_searchComCd.clearData();
        	var nRow = this.ds_searchComCd.addRow();

        	this.ds_searchComCd.setColumn(nRow, "CODE_LIST", "INQ_PERD_SPR_CD,MALL_SPR_CD");
        	this.ds_searchComCd.setColumn(nRow, "LANG_CD", "KO");

        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_searchComCd";
        	var outDs = "ds_comboInqPerdSprCd=ds_output1 ds_comboMallSprCd=ds_output2";
        	var arg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, sCallback);
        }

        /**
         * 등록자/수정자 조회
         */

        this.fn_searchEmpNoOprtrNm = function(svcId)
        {
        	this.ds_searchEmpNoOprtrNm.clearData();
        	var nRow = this.ds_searchEmpNoOprtrNm.addRow();

        	this.ds_searchEmpNoOprtrNm.setColumn(0, "LANG_CD", "KO");

        	if (svcId == "edt_searchRegpsnId")
        	{
        		this.ds_searchEmpNoOprtrNm.setColumn(0, "EMP_NO", this.div_search.form.edt_searchRegpsnId.value);
        		this.ds_searchEmpNoOprtrNm.setColumn(0, "OPRTR_NM", this.div_search.form.edt_searchRegpsnIdNm.value);
        	}
        	else if (svcId == "edt_searchUpdpsnId")
        	{
        		this.ds_searchEmpNoOprtrNm.setColumn(0, "EMP_NO", this.div_search.form.edt_searchUpdpsnId.value);
        		this.ds_searchEmpNoOprtrNm.setColumn(0, "OPRTR_NM", this.div_search.form.edt_searchUpdpsnIdNm.value);
        	}

        	var sSvcId = svcId;
        	var sUrl = "/co/popup/select-mbr-oprtr-info-list.do";
        	var sInData = "ds_search=ds_searchEmpNoOprtrNm"
        	var sOutData = "";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /**
         * 프리패키지 grid 값 조회
         */
        this.fn_gridPrePkgInfoList = function (sPage)
        {
        	/*
        	if (this.div_search.form.cal_searchStartDate.value == "" || this.div_search.form.cal_searchStartDate.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "시작일은")); // 시작일은 필수 입력항목입니다.
        		return
        	}

        	if (this.div_search.form.cal_searchEndDate.value == "" || this.div_search.form.cal_searchEndDate.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "종료일은")); // 종료일은 필수 입력항목입니다.
        		return
        	}
        	*/

        	if (this.div_search.form.cal_searchStartDate.value != "" && this.div_search.form.cal_searchStartDate.value != undefined && (this.div_search.form.cal_searchEndDate.value == "" || this.div_search.form.cal_searchEndDate.value == undefined))
        	{
        		alert(this.fn_getMessage("ERRN000001", "시작일을 입력하면 종료일은")); // 시작일을 입력하면 종료일은 필수 입력항목입니다.
        		this.div_search.form.cal_searchEndDate.setFocus();
        		return
        	}

        	if ((this.div_search.form.cal_searchStartDate.value == "" || this.div_search.form.cal_searchStartDate.value == undefined) && this.div_search.form.cal_searchEndDate.value != "" && this.div_search.form.cal_searchEndDate.value != undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "종료일을 입력하면 시작일은")); // 종료일을 입력하면 시작일은 필수 입력항목입니다.
        		this.div_search.form.cal_searchStartDate.setFocus();
        		return
        	}

        	if (this.div_search.form.cal_searchStartDate.value > this.div_search.form.cal_searchEndDate.value)
        	{
        		alert(this.fn_getMessage("ERRN000002", "종료일이 시작일보다")); // 종료일이 시작일보다 작습니다.
        		return
        	}

        	if (sPage == 0)
        	{
        		// 페이징 초기화
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;

        		this.ds_search.setColumn(0, "START_NUM", 0);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);
        	}

        	var sSvcId = "gridPrePkgInfoList";
        	var sUrl = "/sa/pre-pkg/select-pre-pkg-info-list.do";
        	var sInData = "ds_search=ds_search"
        	var sOutData = "ds_gridPrePkgInfo=ds_output1 ds_gridPrePkgInfoExcel=ds_output2";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 프리패키지 엑셀 grid 값 조회
         */
        this.fn_gridPrePkgInfoListExcel = function (sPage)
        {
        	/*
        	if (this.div_search.form.cal_searchStartDate.value == "" || this.div_search.form.cal_searchStartDate.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "시작일은")); // 시작일은 필수 입력항목입니다.
        		return
        	}

        	if (this.div_search.form.cal_searchEndDate.value == "" || this.div_search.form.cal_searchEndDate.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "종료일은")); // 종료일은 필수 입력항목입니다.
        		return
        	}
        	*/

        	if (this.div_search.form.cal_searchStartDate.value != "" && this.div_search.form.cal_searchStartDate.value != undefined && (this.div_search.form.cal_searchEndDate.value == "" || this.div_search.form.cal_searchEndDate.value == undefined))
        	{
        		alert(this.fn_getMessage("ERRN000001", "시작일을 입력하면 종료일은")); // 시작일을 입력하면 종료일은 필수 입력항목입니다.
        		this.div_search.form.cal_searchEndDate.setFocus();
        		return
        	}

        	if ((this.div_search.form.cal_searchStartDate.value == "" || this.div_search.form.cal_searchStartDate.value == undefined) && this.div_search.form.cal_searchEndDate.value != "" && this.div_search.form.cal_searchEndDate.value != undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "종료일을 입력하면 시작일은")); // 종료일을 입력하면 시작일은 필수 입력항목입니다.
        		this.div_search.form.cal_searchStartDate.setFocus();
        		return
        	}

        	if (this.div_search.form.cal_searchStartDate.value > this.div_search.form.cal_searchEndDate.value)
        	{
        		alert(this.fn_getMessage("ERRN000002", "종료일이 시작일보다")); // 종료일이 시작일보다 작습니다.
        		return
        	}

        	var sSvcId = "gridPrePkgInfoListExcel";
        	var sUrl = "/sa/pre-pkg/select-pre-pkg-excel-list.do";
        	var sInData = "ds_search=ds_search"
        	var sOutData = "ds_gridPrePkgInfoExcel=ds_output2";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /** SSP-2369
         * 대용량엑셀다운로드
        */
        this.fn_largeExcelDownload = function(){

        	this.ds_search.setColumn(0, "EXCEL_DOWNLOAD_YN", "Y");

        	var sSvcId = "largeExcelDown";
        	var sUrl = "/sa/excelDown/large/prePkgInfo.do";
        	var inDs = "ds_save=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");

        };

        // 목록 순서 저장
        this.fn_dispSave = function()
        {
        	this.ds_type.setColumn(0, "TYPE_NM", "prePkgList");

        	var sSvcId = "updatePrePkgExpsSo";
        	var sUrl = "/sa/pre-pkg/update-exps-so.do";
        	var inDs = "ds_save1=ds_gridPrePkgInfo:U ds_save2=ds_type";
        	var outDs = "";
        	var arg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, sCallback);
        }


        /* ===============================================================
         * 3. CallBack
         *  - transaction 후 처리 영역
         * ===============================================================
         */

        /**
         * 공통 callback
         */
        this.fn_callbackFunction = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0)
        	{
        		alert(errorMsg);
        		return;
        	}

        	switch (svcID)
        	{
        		case "comCdCustIddtList" :

        			var nRow = this.ds_comboIddtBasis.insertRow(0);
        			this.ds_comboIddtBasis.setColumn(nRow, "IDDT_ID", "all");
        			this.ds_comboIddtBasis.setColumn(nRow, "IDDT_NM", "전체");

        			var lastRow = this.ds_comboIddtBasis.insertRow(99);
        			this.ds_comboIddtBasis.setColumn(lastRow, "IDDT_ID","unused");
        			this.ds_comboIddtBasis.setColumn(lastRow, "IDDT_NM","미사용");

        			this.div_search.form.cbx_searchIddtId.set_index(0);

        			this.fn_commonCodeSearch();

        			break;

        		case "commonCodeSearch" :

        			// 기간
        			var nRow = this.ds_comboInqPerdSprCd.insertRow(0);
        			this.ds_comboInqPerdSprCd.setColumn(nRow,"COM_DTL_CD_NM","전체");
        			this.ds_comboInqPerdSprCd.setColumn(nRow,"COM_DTL_CD","");
        			this.div_search.form.cal_searchStartDate.set_value("");
        		    this.div_search.form.cal_searchEndDate.set_value("");
        			this.div_search.form.cbx_searchTermType.set_index(0);

        			// 몰구분
        			var nRow2 = this.ds_comboMallSprCd.insertRow(0);
        			this.ds_comboMallSprCd.setColumn(nRow2, "COM_DTL_CD_NM","전체");
        			this.ds_comboMallSprCd.setColumn(nRow2, "COM_DTL_CD","");
        			this.div_search.form.cbx_mallSprCd.set_index(0);

        			break;

        		case "edt_searchRegpsnId" :

        			if( this.oprtrInfoCount > 1 )
        			{
        				this.fn_searchRegpsnId();
        			}
        			else if( this.oprtrInfoCount == 1 )
        			{
        				this.div_search.form.edt_searchRegpsnId.set_value(this.selectRegpsnId);
        				this.div_search.form.edt_searchRegpsnIdNm.set_value(this.selectRegpsnNm);
        			}
        			else
        			{
        				alert(this.fn_getMessage("ERRN000035")); // 검색된 내용이 없습니다.
        			}

        			break;

        		case "edt_searchUpdpsnId" :

        			if( this.oprtrInfoCount > 1 )
        			{
        				this.fn_searchUpdpsnId();
        			}
        			else if( this.oprtrInfoCount == 1 )
        			{
        				this.div_search.form.edt_searchUpdpsnId.set_value(this.selectRegpsnId);
        				this.div_search.form.edt_searchUpdpsnIdNm.set_value(this.selectRegpsnNm);
        			}
        			else
        			{
        				alert(this.fn_getMessage("ERRN000035")); // 검색된 내용이 없습니다.
        			}

        			break;

        		case "gridPrePkgInfoList" :

        			//paging 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.div_paging.uPageRowCnt, "fn_pageCallbackFunction");

        			break;

        		case "gridPrePkgInfoListExcel" :

        			//trace(this.ds_gridPrePkgInfoExcel.saveXML());

        			var sFileName = "프리패키지_EXCEL_EXPORT";			// file Name
        			var aGrid = [this.grd_prePkgInfoExcel];
        			var aSht  = ["프리패키지"];

        			var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        			this.gfn_exportExcel(oParam);

        			break;

        		case "updatePrePkgExpsSo" :

        			alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        			this.fn_gridPrePkgInfoList();

        			break;

        		default :

        			break;
        	}
        }

        /**
         * 싱글/멀티 팝업 공통 callback
         */
        this.fn_popupCallbackFunction = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue))
        	{
        		return;
        	}

        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId)
        	{
        		case "btn_searchRegpsnId" :

        			this.div_search.form.edt_searchRegpsnId.set_value(retObj.EMP_NO);
        			this.div_search.form.edt_searchRegpsnIdNm.set_value(retObj.OPRTR_NM);

        			break;

        		case "btn_searchUpdpsnId" :

        			this.div_search.form.edt_searchUpdpsnId.set_value(retObj.EMP_NO);
        			this.div_search.form.edt_searchUpdpsnIdNm.set_value(retObj.OPRTR_NM);

        			break;

        		case "btn_write" :

        			if (retObj.RETURN_YN == "Y")
        			{
        				this.fn_gridPrePkgInfoList(0);
        			}

        			break;

        		case "btn_edit" :

        			if (retObj.RETURN_YN == "Y")
        			{
        				this.fn_gridPrePkgInfoList();
        			}

        			break;

        		default :

        			break;
        	}
        }

        /**
         * 페이징 공통 callback
         */
        this.fn_pageCallbackFunction = function(sFlag)
        {
        	var oPaging = this.div_paging;

        	if(sFlag)
        	{
        		this.ds_search.setColumn(0, "START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);
        		this.fn_gridPrePkgInfoList();
        	}

        	var sTotText = "(<b v='true'>총 " + oPaging.uTotCount + "건 </b><fc v='red'>" + oPaging.uPage + "</fc> / " + oPaging.uPageCnt + ")";

        	this.sta_totalCount.set_text(sTotText);
        };

        /**
         * 정렬 공통 callback
         */
        this.fn_sortCallbackFunction = function(sGridId)
        {
        	var oGrid = null;

        	if(sGridId == "grd_prePkgInfo")
        	{
        		oSortInfo = this.grd_prePkgInfo.uaSortInfo;

        		this.ds_search.setColumn(0, "SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0, "SORT_TYPE", oSortInfo.status);

        		this.fn_gridPrePkgInfoList();
        	}
        };










        /* ===============================================================
         * 4. 외부 호출 FUNCTION 영역
         * ===============================================================
         */

        /**
         * 화면 설정 함수
         */
        this.cfn_formInit = function()
        {
        	// grid 초기 설정
        	this.grd_prePkgInfo.uSortFlag = "false";
        	this.grd_prePkgInfo.uServerSortFlag = "true";
        	this.grd_prePkgInfo.uSortCallback = "fn_sortCallbackFunction";
        	this.grd_prePkgInfo.uCellSizeType = "true";

        	// 페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 20;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_prePkgInfo";
        	this.grd_prePkgInfo.uRightMouse = "true";
        	this.grd_prePkgInfo.uPersonalFlag = "true";
        	this.grd_prePkgInfo.uDefaultFormat = "PRE_PKG_SEQ,USE_YN_NM,ALL_INC_YN_NM,PRE_PKG_NM,IDDT_NM,REG_DTM,REGPSN_ID,REGPSN_ID_NM,UPD_DTM,UPDPSN_ID,UPDPSN_ID_NM";
        }

        this.cfn_personalPopupClose = function(sRet)
        {
        	this.grd_prePkgInfo.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }










        /* ===============================================================
         * 5. event action
         *  - dataset 및 component 이벤트 영역
         * ===============================================================
         */

        /**
         * 기간 유형의 combo 값을 변경 시
         */
        this.div_search_cbx_searchTermType_onitemchanged = function(obj,e)
        {
        	this.fn_changeTermType();
        };

        /**
         * 기간 유형의 combo 값 변경 이벤트
         */
        this.fn_changeTermType = function()
        {
        	if (this.div_search.form.cbx_searchTermType.value == "")
        	{
        		this.div_search.form.cal_searchStartDate.set_value("");
        		this.div_search.form.cal_searchEndDate.set_value("");
        	}
        	else
        	{
        		// 검색기간 설정
        		this.fn_searchDateSet(this.div_search.form.cbx_searchTermType.value);
        	}
        };

        /**
         * 등록자 사번 항목에서 ENTER 시
         */
        this.div_search_edt_searchRegpsnId_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 )
        	{
        		this.fn_searchEmpNoOprtrNm("edt_searchRegpsnId");
        	}
        };

        /**
         * 등록자 명 항목에서 ENTER 시
         */
        this.div_search_edt_searchRegpsnIdNm_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 )
        	{
        		this.fn_searchEmpNoOprtrNm("edt_searchRegpsnId");
        	}
        };

        /**
         * 등록자 검색 아이콘 클릭 시
         */
        this.div_search_btn_searchRegpsnId_onclick = function(obj,e)
        {
        	this.fn_searchRegpsnId();
        };

        /**
         * 수정자 사번 항목에서 ENTER 시
         */
        this.div_search_edt_searchUpdpsnId_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 )
        	{
        		this.fn_searchEmpNoOprtrNm("edt_searchUpdpsnId");
        	}
        };

        /**
         * 수정자 명 항목에서 ENTER 시
         */
        this.div_search_edt_searchUpdpsnIdNm_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 )
        	{
        		this.fn_searchEmpNoOprtrNm("edt_searchUpdpsnId");
        	}
        };

        /**
         * 수정자 검색 아이콘 클릭 시
         */
        this.div_search_btn_searchUpdpsnId_onclick = function(obj,e)
        {
        	this.fn_searchUpdpsnId();
        };

        /**
         * 초기화 버튼 클릭 시
         */
        this.div_search_btn_init_onclick = function(obj,e)
        {
        	this.fn_init("SEARCH_INIT");
        };

        /**
         * 조회 버튼 클릭 시
         */
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "EXCEL_DOWNLOAD_YN", "N");

        	this.fn_gridPrePkgInfoList(0);
        };

        /**
         * 등록 버튼 클릭 시
         */
        this.btn_write_onclick = function(obj,e)
        {
        	var oArg = {coCd : this.fv_coCd
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "프리패키지 등록/상세/수정"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_NA_23.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 엑셀다운로드 버튼 클릭 시
         */
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	// 전체 data
        //	this.ds_search.setColumn(0, "EXCEL_DOWNLOAD_YN", "Y");
        	this.fn_gridPrePkgInfoListExcel(this.div_paging.uPage);

        // 	// 현재 페이지 data
        // 	var sFileName = "프리패키지_EXCEL_EXPORT";			// file Name
        // 	var aGrid = [this.grd_prePkgInfoExcel];
        // 	var aSht  = ["프리패키지"];
        //
        // 	var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        // 	this.gfn_exportExcel(oParam);


        };





        /** SSP-2369
         * 대용량 엑셀다운로드 버튼 클릭 시
         */
        this.div_search_btn_largeExcel_onclick = function(obj,e)
        {
        	if(this.confirm('대용량 다운로드를 실행하시겠습니까?')){
        		this.fn_largeExcelDownload();
        	}
        };

        /**
         * 레이아웃 저장 버튼 클릭 시
         */
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_prePkgInfo", this.grd_prePkgInfo.getCurFormatString());
        };

        /**
         * 레이아웃 초기화 버튼 클릭 시
         */
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_prePkgInfo");
        	this.grd_prePkgInfo.set_formats(this.grd_prePkgInfo.uOrgFormat);
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grd_prePkgInfo_oncellclick = function(obj,e)
        {
        	if(e.col == this.grd_prePkgInfo.getBindCellIndex("body", "PRE_PKG_NM"))
        	{
        		var objDs = obj.getBindDataset();
        		var nRow = objDs.rowposition;

        		var oArg = { coCd : objDs.getColumn(nRow, "CO_CD")
        				   , prePkgSeq : objDs.getColumn(nRow, "PRE_PKG_SEQ")
        			       , pageNum : this.div_paging.uPage
        				   };

        		var oOption = { top : "-1"
        					  , left : "-1"
        					  , width : "-1"
        					  , height : "-1"
        					  , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        					  , layered : "false"
        					  , opacity : "100"
        					  , autosize : "true"
        					  , titlebar : "true"
        					  , title : "프리패키지 등록/상세/수정"
        					  };

        		this.gfn_openPopup("btn_edit", "SA::SSP_BO_NA_23.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        	}
        };










        /* ===============================================================
         * 6. User Function
         *  - 사용자 구현 함수 영역
         * =============================================================== */

        /**
         * 검색영역의 기간 combo 선택 시 값이 변경되었을 경우 - 공통
         *	- 검색영역의 기간 값을 변경해 줌
         */
        this.fn_searchDateSet = function(sVal)
        {
        	var sNowDate;	// 날짜 object
        	var sYearSt;	// 시작 년
        	var sMonthSt;	// 시작 월
        	var sDaySt;		// 시작 일
        	var sYearEnd;	// 종료 년
        	var sMonthEnd;	// 종료 월
        	var sDayEnd;	// 종료 일

        	sNowDate = new Date();

        	//sNowDate.setYear( sNowDate.getFullYear());

        	if (sVal == "1")
        	{
        		// 당일

        		sNowDate.setMonth(sNowDate.getMonth());
        		sNowDate.setDate(sNowDate.getDate());
        	}
        	else if (sVal == "-1")
        	{
        		// 어제

        		sNowDate.setMonth( sNowDate.getMonth());
        		sNowDate.setDate( sNowDate.getDate() - 1);
        	}
        	else if (sVal == "2")
        	{
        		// 1주일

        		sNowDate.setMonth( sNowDate.getMonth());
        		sNowDate.setDate( sNowDate.getDate() - 6);
        	}
        	else if (sVal == "3")
        	{
        		// 2주일

        		sNowDate.setMonth( sNowDate.getMonth());
        		sNowDate.setDate( sNowDate.getDate() - 13);
        	}
        	else if (sVal == "4")
        	{
        		// 1개월

        		sNowDate.setMonth( sNowDate.getMonth() - 1);
        		sNowDate.setDate( sNowDate.getDate() + 1);
        	}
        	else if (sVal == "5")
        	{
        		// 3개월

        		sNowDate.setMonth( sNowDate.getMonth() - 3);
        		sNowDate.setDate( sNowDate.getDate() + 1);
        	}
        	else if (sVal == "6")
        	{
        		// 6개월

        		sNowDate.setMonth( sNowDate.getMonth() - 6);
        		sNowDate.setDate( sNowDate.getDate() + 1);
        	}
        	else if (sVal == "7")
        	{
        		// 1년

        		sNowDate.setMonth( sNowDate.getMonth() - 12);
        		sNowDate.setDate( sNowDate.getDate() + 1);
        	}

        	sYearSt = sNowDate.getFullYear();
        	sMonthSt = sNowDate.getMonth()+1;
        	sDaySt = sNowDate.getDate();

        	if ( sMonthSt < 10 )
        	{
        		sMonthSt = "0" + sMonthSt;
        	}
        	if ( sDaySt < 10 )
        	{
        		sDaySt = "0" + sDaySt;
        	}

        	sNowDate = new Date();

        	sYearEnd = sNowDate.getFullYear();
        	sMonthEnd = sNowDate.getMonth()+1;
        	sDayEnd = sNowDate.getDate();

        	if ( sMonthEnd < 10 )
        	{
        		sMonthEnd = "0" + sMonthEnd;
        	}
        	if ( sDayEnd < 10 )
        	{
        		sDayEnd = "0" + sDayEnd;
        	}

        	// 검색의 기간
        	this.div_search.form.cal_searchStartDate.set_value(sYearSt + "-" + sMonthSt + "-" + sDaySt);
        	this.div_search.form.cal_searchEndDate.set_value(sYearEnd + "-" + sMonthEnd + "-" + sDayEnd);
        }

        /**
         * 등록자 검색 팝업
         */
        this.fn_searchRegpsnId = function()
        {
        	var oArg = { coCd : this.fv_coCd
        	           , empNo : this.div_search.form.edt_searchRegpsnId.value
        			   , oprtrNm : this.div_search.form.edt_searchRegpsnIdNm.value
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "담당자 조회"
        	              };

        	this.gfn_openPopup("btn_searchRegpsnId", "CO_POP::SSP_BO_PP_27.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        }

        /**
         * 수정자 검색 팝업
         */
        this.fn_searchUpdpsnId = function()
        {
        	var oArg = { coCd : this.fv_coCd
        	           , empNo : this.div_search.form.edt_searchUpdpsnId.value
        			   , oprtrNm : this.div_search.form.edt_searchUpdpsnIdNm.value
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "담당자 조회"
        	              };

        	this.gfn_openPopup("btn_searchUpdpsnId", "CO_POP::SSP_BO_PP_27.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        }

        /**
         * 화면 초기화 함수
         */
        this.fn_init = function(sVal)
        {
        	switch (sVal)
        	{
        		case "VAL_INIT" :

        			// 변수 초기화

        			this.fv_coCd = this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");

        			this.totalCount = 0;

        			break;

        		case "SEARCH_INIT" :

        			// 검색 항목 초기화

        			this.ds_search.clearData();
        			var nRow = this.ds_search.addRow();

        			this.ds_search.setColumn(nRow, "SORT_COLUMN", "");
        			this.ds_search.setColumn(nRow, "SORT_TYPE", "");
        			this.ds_search.setColumn(nRow, "EXCEL_DOWNLOAD_YN", "N");

        			// 입력 항목 영역
        			this.div_search.form.cbx_searchIddtId.set_index(0);
        			this.div_search.form.cbx_searchUseYn.set_index(0);

        			this.div_search.form.cbx_mallSprCd.set_index(0);

        			this.div_search.form.cbx_searchTermSpr.set_index(0);
        			this.div_search.form.cbx_searchTermType.set_index(0);
        			this.div_search.form.cal_searchStartDate.set_value("");
        			this.div_search.form.cal_searchEndDate.set_value("");

        			this.div_search.form.edt_searchPrePkgNm.set_value("");
        			this.div_search.form.edt_searchReprPrdId.set_value("");
        			this.div_search.form.edt_searchRegpsnId.set_value("");
        			this.div_search.form.edt_searchRegpsnIdNm.set_value("");
        			this.div_search.form.edt_searchUpdpsnId.set_value("");
        			this.div_search.form.edt_searchUpdpsnIdNm.set_value("");

        			// 등록자 검색 아이콘, 수정자 검색 아이콘
        			this.div_search.form.btn_searchRegpsnId.set_enable(true);
        			this.div_search.form.btn_searchUpdpsnId.set_enable(true);

        			// 초기화, 조회
        			this.div_search.form.btn_init.set_enable(true);
        			this.div_search.form.btn_search.set_enable(true);

        			// 등록, 엑셀다운로드, 레이아웃 저장, 레이아웃 초기화
        			this.btn_write.set_enable(true);
        			this.btn_excelDownload.set_enable(true);
        			this.btn_layoutSave.set_enable(true);
        			this.btn_layoutInit.set_enable(true);

        			// 검색기간 설정
        			this.fn_searchDateSet(0);

        			// 페이징 초기화
        			this.ds_search.setColumn(0, "START_NUM", 0);
        			this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);

        			break;

        		case "CODE_INIT" :

        			// 코드 초기화

        			this.ds_searchIddtBasis.clearData();
        			var nRow = this.ds_searchIddtBasis.addRow();
        			//SSP-2568
        			this.ds_searchIddtBasis.setColumn(nRow, "USE_YN", "Y");
        			this.ds_searchIddtBasis.setColumn(nRow, "SORT_COLUMN", "IDDT_NM");
        			this.ds_searchIddtBasis.setColumn(nRow, "SORT_TYPE", "ASC");

        			// 산업군 combo 값 조회
        			this.fn_comCdCustIddtList();

        			break;

        		case "GRID_INIT" :

        			// grid 초기화

        			this.sta_totalCount.set_text("(<b v='true'>총 0건 </b><fc v='red'>0</fc> / 0)");

        			// dataset 영역
        			this.ds_gridPrePkgInfo.clearData();
        			this.ds_gridPrePkgInfoExcel.clearData();

        			this.grd_prePkgInfo.clearSelect();
        			this.grd_prePkgInfoExcel.clearSelect();

        			this.grd_prePkgInfo.nodatatext = "조회 결과가 없습니다.";
        			this.grd_prePkgInfoExcel.nodatatext = "조회 결과가 없습니다.";

        			// 프리패키지 조회
        			//this.fn_gridPrePkgInfoList(0);

        			break;

        		default :

        			//alert("작업구분이 없습니다.");

        			break;
        	}
        }




        // 드래그 이벤트 시작
        this.grd_prePkgInfo_ondrag = function(obj,e)
        {
        	var nRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	var sValue = oBindDs.getColumn(e.row,"PRE_PKG_NM");

        	//static component check
        	var oStatic =  this["sta_drag"];
        	if(!this.gfn_isNull(oStatic)){
        		oStatic = this.removeChild("sta_drag");
        		oStatic.destroy();
        	}

        	//static component position 설정
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10;
        	var nTop  = e.clienty + obj.getOffsetTop();

        	//static component 생성
        	oStatic = new Static();
        	oStatic.init( "sta_drag", nLeft, nTop, 200,50);
        	this.addChild("sta_drag",oStatic);
        	oStatic.set_background("#bcbcbc");
        	oStatic.set_text(sValue);
        	oStatic.uAsRow = nRow;
        	oStatic.show();

        	return true;
        };

        // 그리드 드래그 이동
        this.grd_prePkgInfo_ondragmove = function(obj,e)
        {
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10;
        	var nTop  = e.clienty + obj.getOffsetTop();
        	this.sta_drag.move(nLeft,nTop);
        };

        // 그리드 드래그 드랍
        this.grd_prePkgInfo_ondrop = function(obj,e)
        {
        	var nToRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	oBindDs.moveRow(this.sta_drag.uAsRow, nToRow)
        	var	oStatic = this.removeChild("sta_drag");
        	oStatic.destroy();
        };

        // 순서 저장
        this.btn_dispSave_onclick = function(obj,e)
        {
        	if(!confirm(this.fn_getMessage("ERRN000045"))) { // 전시순서를 저장하시겠습니까?
        		return false;
        	}

        	for(var i = 0; i< this.ds_gridPrePkgInfo.rowcount; i++) {
        		this.ds_gridPrePkgInfo.setColumn(i, "EXPS_SO", i+1);
        	}

        	if(!this.fn_dataCheck(this.ds_gridPrePkgInfo)) {
        		alert(this.fn_getMessage("ERRN000036")); // 변경된 내용이 없습니다.
        		return false;
        	}

        	this.fn_dispSave();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_NA_21_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div_search.form.btn_searchRegpsnId.addEventHandler("onclick",this.div_search_btn_searchRegpsnId_onclick,this);
            this.div_search.form.edt_searchRegpsnIdNm.addEventHandler("onkeyup",this.div_search_edt_searchRegpsnIdNm_onkeyup,this);
            this.div_search.form.cbx_searchTermType.addEventHandler("onitemchanged",this.div_search_cbx_searchTermType_onitemchanged,this);
            this.div_search.form.btn_searchUpdpsnId.addEventHandler("onclick",this.div_search_btn_searchUpdpsnId_onclick,this);
            this.div_search.form.edt_searchUpdpsnIdNm.addEventHandler("onkeyup",this.div_search_edt_searchUpdpsnIdNm_onkeyup,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.edt_searchRegpsnId.addEventHandler("onkeyup",this.div_search_edt_searchRegpsnId_onkeyup,this);
            this.div_search.form.edt_searchUpdpsnId.addEventHandler("onkeyup",this.div_search_edt_searchUpdpsnId_onkeyup,this);
            this.div_search.form.cbx_searchUseYn.addEventHandler("onitemchanged",this.cbx_searchTermType_onitemchanged,this);
            this.div_search.form.cbx_mallSprCd.addEventHandler("onitemchanged",this.cbx_searchTermType_onitemchanged,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
            this.grd_prePkgInfo.addEventHandler("oncellclick",this.grd_prePkgInfo_oncellclick,this);
            this.grd_prePkgInfo.addEventHandler("ondrag",this.grd_prePkgInfo_ondrag,this);
            this.grd_prePkgInfo.addEventHandler("ondragmove",this.grd_prePkgInfo_ondragmove,this);
            this.grd_prePkgInfo.addEventHandler("ondrop",this.grd_prePkgInfo_ondrop,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.grd_prePkgInfoExcel.addEventHandler("oncellclick",this.grd_prePkgInfo_oncellclick,this);
            this.btn_largeExcel.addEventHandler("onclick",this.div_search_btn_largeExcel_onclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.btn_dispSave.addEventHandler("onclick",this.btn_dispSave_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_NA_21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
