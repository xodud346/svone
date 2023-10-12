(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_01");
            this.set_titletext("기획전 - 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"EXHBN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_STATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DOWNLOAD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchExhbnOprUnitList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchComCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboInqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboMallSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboExhbnSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboNoticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exhbnOprUnitList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridExhbnInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LPAGE_MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_EXPS_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_STATE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SEQ_STR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridExhbnInfoExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"EXHBN_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"263","0",null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Static("Static03","20","20",null,"187","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00","20","51","433","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00_01","20","82","433","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00_01_00","20","113","433","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00_01_00_00","20","144","433","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00_01_00_00_00","20","175","433","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02","150","145","302","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","0","207","1336","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03","150","176","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","581","203","723","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22","20","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("기획전명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","1336","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","582","21","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","1305","21","10","61",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_01","442","145","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchMallSprCd","160","148","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_comboMallSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchTermType","371","117","71","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_comboInqPerdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_searchEndDate","272","117","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59","259","117","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_searchStartDate","160","117","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","255","114","5","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","267","114","5","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchExhbnNm","160","86","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"217","60","26","84",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"217","60","26","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","20","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","20","144","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_text("몰 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","20","113","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_text("기간");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","452","20","130","187",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_text("게시구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","20","175","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_text("기획전 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchUseYn","160","55","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbx_searchUseYn_innerdataset = new nexacro.NormalDataset("div_search_form_cbx_searchUseYn_innerdataset", obj);
            div_search_form_cbx_searchUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbx_searchUseYn_innerdataset);
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_03_01","150","52","301","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_03","1014","17","301","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_searchNoticSprCd","592","24","138","169",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_comboNoticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("horizontal");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","582","48","723","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("36");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_01","692","24","10","58",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("37");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_searchOprUnit","1281","24","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grid_oprUnit","750","24","527","179",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("39");
            obj.set_binddataset("ds_exhbnOprUnitList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/><Column size=\"260\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchExhbnSprCd","160","179","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("40");
            obj.set_innerdataset("ds_comboExhbnSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_searchOprUnitMulText","1281","51","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("42");
            obj.set_text("기획전 상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_searchExhbnStateCd","160","24","265","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_search_form_rdo_searchExhbnStateCd_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_searchExhbnStateCd_innerdataset", obj);
            div_search_form_rdo_searchExhbnStateCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">대기</Col><Col id=\"codecolumn\">READY</Col></Row><Row><Col id=\"codecolumn\">ING</Col><Col id=\"datacolumn\">진행중</Col></Row><Row><Col id=\"codecolumn\">END</Col><Col id=\"datacolumn\">종료</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_searchExhbnStateCd_innerdataset);
            obj.set_text("A");
            obj.set_value("1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_largeExcel",null,"217","118","26","148",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("44");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","20","303","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write",null,"293","81","28","342",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"293","110","28","228",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_exhbnInfo","20","331",null,null,"20","106",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridExhbnInfo");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"275\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"사용여부\"/><Cell col=\"2\" text=\"기획전상태\"/><Cell col=\"3\" text=\"몰 구분\"/><Cell col=\"4\" text=\"메인노출\"/><Cell col=\"5\" text=\"대상\"/><Cell col=\"6\" text=\"기획전구분\"/><Cell col=\"7\" text=\"기획전 명\"/><Cell col=\"8\" text=\"전시시작일\"/><Cell col=\"9\" text=\"전시종료일\"/><Cell col=\"10\" text=\"등록일\"/><Cell col=\"11\" text=\"수정일\"/><Cell col=\"12\" text=\"등록자사번\"/><Cell col=\"13\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:DISP_SO\" textAlign=\"center\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"number\" editmaxlength=\"10\"/><Cell col=\"1\" text=\"bind:USE_YN_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:EXHBN_STATE_CD_NM\"/><Cell col=\"3\" text=\"bind:MALL_SPR_CD_NM\"/><Cell col=\"4\" text=\"bind:MAIN_EXPS_YN_NM\"/><Cell col=\"5\" text=\"bind:EXPS_NOTIC_SPR_CD_NM\"/><Cell col=\"6\" text=\"bind:EXHBN_SPR_CD_NM\"/><Cell col=\"7\" text=\"bind:EXHBN_NM\" textAlign=\"left\" expr=\"EXHBN_NM  == &apos;&apos; ? EXHBN_NM : &quot;&lt;u v=&apos;true&apos;&gt;&quot; + EXHBN_NM + &quot;&lt;/u&gt;&quot;\" displaytype=\"decoratetext\"/><Cell col=\"8\" text=\"bind:DISP_STR_DT\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:DISP_END_DT\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:REG_DTM\"/><Cell col=\"11\" text=\"bind:UPD_DTM\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:REGPSN_ID_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","20","846",null,null,null,null,null,null,this);
            obj.set_taborder("5");
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

            obj = new Static("Static00_02_00","0","263","1336","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","243","1336","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01","0","321","1336","10",null,null,null,null,null,null,this);
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

            obj = new Button("btn_layoutSave",null,"293","100","28","124",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"293","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_orderSave",null,"293","81","28","427",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("순서 저장");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_exhbnInfoExcel","22","950",null,null,"18","-304",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridExhbnInfoExcel");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"79\"/><Column size=\"119\"/><Column size=\"77\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"77\"/><Column size=\"135\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"118\"/><Column size=\"94\"/><Column size=\"97\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"기획전구분\"/><Cell col=\"1\" text=\"기획전 명\"/><Cell col=\"2\" text=\"전시시작일\"/><Cell col=\"3\" text=\"전시종료일\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"수정일\"/><Cell col=\"6\" text=\"카테고리명\"/><Cell col=\"7\" text=\"순서\"/><Cell col=\"8\" text=\"상품ID\"/><Cell col=\"9\" text=\"상품명\"/><Cell col=\"10\" text=\"규격\"/><Cell col=\"11\" text=\"공용전용구분\"/><Cell col=\"12\" text=\"대표상품구분\"/><Cell col=\"13\" text=\"SSP상품상태\"/><Cell col=\"14\" text=\"SSP진열상태\"/></Band><Band id=\"body\"><Cell text=\"bind:EXHBN_SPR_CD_NM\"/><Cell col=\"1\" text=\"bind:EXHBN_NM\" textAlign=\"left\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:DISP_STR_DT\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:DISP_END_DT\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:REG_DTM\"/><Cell col=\"5\" text=\"bind:UPD_DTM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:CATG_NM\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:DISP_SO\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:PRD_ID\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:PRD_NM\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:ATTR_VAL\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:PUB_ONLY_SPR_NM\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:REPR_PRD_SPR_NM\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:PRD_USE_YN_NM\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:DISP_STATS_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cbx_searchMallSprCd","value","ds_search","MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_searchEndDate","value","ds_search","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_searchStartDate","value","ds_search","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_searchExhbnNm","value","ds_search","EXHBN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cbx_searchUseYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.rdo_searchNoticSprCd","value","ds_search","EXPS_NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cbx_searchExhbnSprCd","value","ds_search","EXHBN_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.rdo_searchExhbnStateCd","value","ds_search","EXHBN_STATE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_01.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_01.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_NA_01.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 기획전 - 목록
          CREATION DATES : 2022.03.04
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

        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */
        this.SSP_BO_NA_01_onload = function(obj, e)
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
         * 공통코드 값 조회
         */
        this.fn_comCdList = function()
        {
        	this.ds_searchComCd.clearData();
        	var nRow = this.ds_searchComCd.addRow();

        	this.ds_searchComCd.setColumn(nRow, "CODE_LIST", "MALL_SPR_CD,EXHBN_SPR_CD,EXPS_NOTIC_SPR_CD,INQ_PERD_SPR_CD");
        	this.ds_searchComCd.setColumn(nRow, "LANG_CD", "KO");

        	var sSvcId = "comCdList";
        	var sUrl = "/co/select-common-code-list.do";
        	var sInData = "ds_search=ds_searchComCd"
        	var sOutData = "ds_comboMallSprCd=ds_output1 ds_comboExhbnSprCd=ds_output2 ds_comboNoticSprCd=ds_output3 ds_comboInqPerdSprCd=ds_output4";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 운영단위ID 유효성 검사
         */
        this.fn_oprUnitCheck = function()
        {
        	var sSvcId = "oprUnitCheck";
        	var sUrl = "/sa/com/select-opr-unit-check-list.do";
        	var sInData = "ds_searchOprUnitCheckList=ds_searchOprUnitCheckList:A"
        	var sOutData = "ds_oprUnitList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /**
         * 기획전 grid 값 조회
         */
        this.fn_gridExhbnInfoList = function (sPage)
        {
        	if (sPage == 0)
        	{
        		// 페이징 초기화
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;

        		this.ds_search.setColumn(0, "START_NUM", 0);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);
        	}

        	var sSvcId = "gridExhbnInfoList";
        	var sUrl = "/sa/exhbn/select-exhbn-info-list.do";
        	var sInData = "ds_search=ds_search ds_searchExhbnOprUnitList=ds_searchExhbnOprUnitList"
        	var sOutData = "ds_gridExhbnInfo=ds_output1 ds_gridExhbnInfoExcel=ds_output2";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 기획전 전시순서 순서 저장
         */
        this.fn_saveExhbnInfoOrder = function()
        {
        	if ( confirm(this.fn_getMessage("ERRN000045"))) // 전시순서를 저장하시겠습니까?
        	{
        		var sSvcId = "saveExhbnInfoOrder";
        		var sUrl = "/sa/exhbn/save-exhbn-info-order.do";
        		var sInData = "ds_save=ds_gridExhbnInfo:A"
        		var sOutData = "";
        		var sArg = "";
        		var sCallback = "fn_callbackFunction";

        		this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        	}
        }

        /**
         * 기획전 엑셀 grid 값 조회
         */
        this.fn_gridExhbnInfoListExcel = function ()
        {
        	var sSvcId = "gridExhbnInfoListExcel";
        	var sUrl = "/sa/exhbn/select-exhbn-info-list.do";
        	var sInData = "ds_search=ds_search ds_searchExhbnOprUnitList=ds_searchExhbnOprUnitList"
        	var sOutData = "ds_gridExhbnInfoExcel=ds_output1";
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
        	var sUrl = "/sa/excelDown/large/exhbnInfo.do";
        	var inDs = "ds_save=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");

        };








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
        		case "comCdList" :

        			this.div_search.form.cbx_searchTermType.set_index(1);

        			var nRow = this.ds_comboMallSprCd.insertRow(0);

        			this.ds_comboMallSprCd.setColumn(nRow, "COM_DTL_CD", "");
        			this.ds_comboMallSprCd.setColumn(nRow, "COM_DTL_CD_NM", "전체");

        			this.div_search.form.cbx_searchMallSprCd.set_index(0);

        			var nRow = this.ds_comboExhbnSprCd.insertRow(0);

        			this.ds_comboExhbnSprCd.setColumn(nRow, "COM_DTL_CD", "");
        			this.ds_comboExhbnSprCd.setColumn(nRow, "COM_DTL_CD_NM", "전체");

        			this.div_search.form.cbx_searchExhbnSprCd.set_index(0);

        			var nRow = this.ds_comboNoticSprCd.insertRow(0);

        			this.ds_comboNoticSprCd.setColumn(nRow, "COM_DTL_CD", "");
        			this.ds_comboNoticSprCd.setColumn(nRow, "COM_DTL_CD_NM", "ALL");

        			this.div_search.form.rdo_searchNoticSprCd.set_index(0);

        			break;

        		case "oprUnitCheck" :

        			var tempOprUnitId = "";

        			for (var x = 0; x < this.ds_oprUnitList.getRowCount(); x++)
        			{
        				var sBzplcId = this.ds_oprUnitList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_oprUnitList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_oprUnitList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm == "" || sOprUnitNm == undefined)
        				{
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        				}
        			}

        			if (tempOprUnitId != "")
        			{
        				alert(this.fn_getMessage("ERRN000023", tempOprUnitId)); // 없는 운영단위ID를 입력하였습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var totalCount2 = 0;
        			tempOprUnitId = "";

        			for (var x = 0; x < this.ds_oprUnitList.getRowCount(); x++)
        			{
        				var sBzplcId = this.ds_oprUnitList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_oprUnitList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_oprUnitList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm != "" && sOprUnitNm != undefined)
        				{
        					var findRow = this.ds_exhbnOprUnitList.findRowExpr("BZPLC_ID == '" + sBzplcId + "' && OPR_UNIT_ID == '" + sOprUnitId + "'");

        					if(findRow < 0)
        					{
        						var nRow = this.ds_exhbnOprUnitList.addRow();

        						this.ds_exhbnOprUnitList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_exhbnOprUnitList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        						this.ds_exhbnOprUnitList.setColumn(nRow, "OPR_UNIT_NM", sOprUnitNm);
        					}
        					else
        					{
        						totalCount2 = totalCount2 + 1;

        						tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        					}
        				}
        			}

        			if (totalCount2 > 0)
        			{
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			break;

        		case "insertOdrInqTgtDtls" :

        			var sExcelDownloadYn = this.ds_search.getColumn(0, "EXCEL_DOWNLOAD_YN");

        			if (sExcelDownloadYn == "N")
        			{
        				this.fn_gridExhbnInfoList(0);
        			}
        			else
        			{
        				this.fn_gridExhbnInfoListExcel();
        			}

        			break;

        		case "gridExhbnInfoList" :

        			//paging 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.div_paging.uPageRowCnt, "fn_pageCallbackFunction");

        			break;

        		case "saveExhbnInfoOrder" :

        			if( errorCode == -1 || errorCode == -100)
        			{
        				//사용자 지정 에러코드 -100
        				alert(errorMsg);
        			}
        			else
        			{
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.

        				this.fn_gridExhbnInfoList();
        			}

        			break;

        		case "gridExhbnInfoListExcel" :

        			//trace(this.ds_gridExhbnInfoExcel.saveXML());

        			var sFileName = "기획전_EXCEL_EXPORT";			// file Name
        			var aGrid = [this.grid_exhbnInfoExcel];
        			var aSht  = ["기획전"];

        			var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        			this.gfn_exportExcel(oParam);

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
        		case "btn_searchOprUnit" :

        			var totalCount2 = 0;
        			var tempOprUnitId = "";

        			for(var i=0; i<retObj.length; i++)
        			{
        				var rowData = JSON.parse(retObj[i]);

        				var findRow = this.ds_exhbnOprUnitList.findRowExpr("BZPLC_ID == '" + rowData.OPR_BZPLC_ID + "' && OPR_UNIT_ID == '" + rowData.OPR_UNIT_ID + "'");

        				if(findRow < 0)
        				{
        					var nRow = this.ds_exhbnOprUnitList.addRow();

        					this.ds_exhbnOprUnitList.setColumn(nRow, "BZPLC_ID", rowData.OPR_BZPLC_ID);
        					this.ds_exhbnOprUnitList.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_exhbnOprUnitList.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        				}
        				else
        				{
        					totalCount2 = totalCount2 + 1;

        					tempOprUnitId = tempOprUnitId + "사업장ID : " + rowData.OPR_BZPLC_ID + " / 운영단위ID : " + rowData.OPR_UNIT_ID + "\n";
        				}
        			}

        			if (totalCount2 > 0)
        			{
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			break;

        		case "btn_searchOprUnitMulText" :

        			var retValue = retObj.textValue;

        			if (retValue != "")
        			{
        				this.ds_searchOprUnitCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++)
        				{
        					var sTempValueSplit = sTempValue[x].split("	");

        					var sBzplcId = sTempValueSplit[0];
        					var sOprUnitId = sTempValueSplit[1];

        					if (sBzplcId != "" && sBzplcId != undefined && sOprUnitId != "" && sOprUnitId != undefined)
        					{
        						var nRow = this.ds_searchOprUnitCheckList.addRow();

        						this.ds_searchOprUnitCheckList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        					}
        				}

        				this.fn_oprUnitCheck();
        			}

        			break;

        		case "btn_write" :

        			if (retObj.RETURN_YN == "Y")
        			{
        				this.fn_gridExhbnInfoList(0);
        			}

        			break;

        		case "btn_edit" :

        			if (retObj.RETURN_YN == "Y")
        			{
        				this.fn_gridExhbnInfoList();
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
        		this.fn_gridExhbnInfoList();
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

        	if(sGridId == "grid_exhbnInfo")
        	{
        		oSortInfo = this.grid_exhbnInfo.uaSortInfo;

        		this.ds_search.setColumn(0, "SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0, "SORT_TYPE", oSortInfo.status);

        		this.fn_gridExhbnInfoList();
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
        	this.grid_exhbnInfo.uSortFlag = "false";
        	this.grid_exhbnInfo.uServerSortFlag = "true";
        	this.grid_exhbnInfo.uSortCallback = "fn_sortCallbackFunction";
        	this.grid_exhbnInfo.uCellSizeType = "true";

        	// GIRD 정렬 초기화 설정 함수
        	this.fn_init_grid();

        	// 페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 20;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grid_exhbnInfo";
        	this.grid_exhbnInfo.uRightMouse = "true";
        	this.grid_exhbnInfo.uPersonalFlag = "true";
        	this.grid_exhbnInfo.uDefaultFormat = "DISP_SO,USE_YN_NM,EXHBN_STATE_CD_NM,MALL_SPR_CD_NM,MAIN_EXPS_YN_NM,NOTIC_SPR_CD_NM,EXHBN_SPR_CD_NM,EXHBN_NM,DISP_STR_DT,DISP_END_DT,REG_DTM,UPD_DTM,REGPSN_ID,REGPSN_ID_NM";
        }

        this.cfn_personalPopupClose = function(sRet)
        {
        	this.grid_exhbnInfo.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }


        /**
         * GIRD 정렬 초기화 설정 함수
         */
        this.fn_init_grid = function()
        {
        	// grid 초기 설정
        	this.div_search.form.grid_oprUnit.uSortFlag = "true";
        	this.div_search.form.grid_oprUnit.uServerSortFlag = "false";
        	this.div_search.form.grid_oprUnit.uCellSizeType = "true";
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
         * 게시구분 값 변경 시
         */
        this.div_search_rdo_searchNoticSprCd_onitemchanged = function(obj,e)
        {
        	if (this.div_search.form.rdo_searchNoticSprCd.value == "30" || this.div_search.form.rdo_searchNoticSprCd.value == "50"
        		|| this.div_search.form.rdo_searchNoticSprCd.value == "60" || this.div_search.form.rdo_searchNoticSprCd.value == "70")
        	{
        		this.div_search.form.grid_oprUnit.set_enable(true);

        		// 로그인운영단위 검색 아이콘
        		this.div_search.form.btn_searchOprUnit.set_enable(true);
        		this.div_search.form.btn_searchOprUnitMulText.set_enable(true);
        	}
        	else
        	{
        		this.div_search.form.grid_oprUnit.set_enable(false);

        		// 로그인운영단위 검색 아이콘
        		this.div_search.form.btn_searchOprUnit.set_enable(false);
        		this.div_search.form.btn_searchOprUnitMulText.set_enable(false);
        	}
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.div_search_grid_oprUnit_oncellclick = function(obj,e)
        {
        	var sEditType = obj.getCellProperty("body", e.cell, "edittype");

        	if(sEditType == "button")
        	{
        		if ( confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        		{
        			this.ds_exhbnOprUnitList.deleteRow(e.row);
        		}
        	}
        };

        /**
         * 로그인운영단위 검색 아이콘 클릭 시
         */
        this.div_search_btn_searchOprUnit_onclick = function(obj,e)
        {
        	var oArg = { coCd : this.fv_coCd
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
        	              , title : "운영단위 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 로그인운영단위 멀티텍스트 아이콘 클릭 시
         */
        this.div_search_btn_searchOprUnitMulText_onclick = function(obj,e)
        {
        	var oArg = { coCd : this.fv_coCd
        	           , textId : this.div_search.form.btn_searchOprUnitMulText
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
        	              , title : "멀티 텍스트"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_SA_MSEARCH.xfdl", oArg, "fn_popupCallbackFunction", oOption);
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

        	if (this.div_search.form.rdo_searchNoticSprCd.value == "30")
        	{
        		/*
        		if (this.ds_exhbnOprUnitList.rowcount == 0)
        		{
        			alert(this.fn_getMessage("ERRN000001", "게시구분(로그인운영단위)을 선택하면 운영단위는")); // 게시구분(로그인운영단위)을 선택하면 운영단위는 필수 입력항목입니다.
        			return;
        		}
        		*/
        	}

        	// 게시구분코드가 운영단위가 아니면 아니면 운영단위 정보 삭제
        	// SSP-2971
        	if(this.div_search.form.rdo_searchNoticSprCd.value != "30" && this.div_search.form.rdo_searchNoticSprCd.value != "50"
        		&& this.div_search.form.rdo_searchNoticSprCd.value != "60" && this.div_search.form.rdo_searchNoticSprCd.value != "70") {
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_exhbnOprUnitList.rowcount; i++)
        		{
        			aDelArr.push(i);
        		}

        		this.ds_exhbnOprUnitList.deleteMultiRows(aDelArr);
        	}



        	this.ds_searchExhbnOprUnitList.clearData();

        	var sBzplcIdList = "";
        	var sOprUnitIdList = "";

        	for(var i = 0; i< this.ds_exhbnOprUnitList.rowcount; i++)
        	{
        		var tempBzplcId = this.ds_exhbnOprUnitList.getColumn(i, "BZPLC_ID");
        		var tempOprUnitId = this.ds_exhbnOprUnitList.getColumn(i, "OPR_UNIT_ID");

        		var nRow = this.ds_searchExhbnOprUnitList.addRow();

        		this.ds_searchExhbnOprUnitList.setColumn(nRow, "BZPLC_ID", tempBzplcId);
        		this.ds_searchExhbnOprUnitList.setColumn(nRow, "OPR_UNIT_ID", tempOprUnitId);

        		sBzplcIdList += tempBzplcId + ",";
        		sOprUnitIdList += tempOprUnitId + ",";
        	}

        	this.fn_setMSearch(this.name, "BZPLC_ID", sBzplcIdList);
        	this.fn_setMSearch(this.name, "OPR_UNIT_ID", sOprUnitIdList);

        	if((sBzplcIdList == "" || sBzplcIdList == undefined) && (sOprUnitIdList == "" || sOprUnitIdList == undefined))
        	{
        		this.ds_search.setColumn(0, "EXCEL_DOWNLOAD_YN", "N");

        		this.fn_gridExhbnInfoList(0);
        	}
        	else
        	{
        		this.ds_search.setColumn(0, "INQ_COND_DTLS", this.name);

        		this.fn_insertSelectedData("fn_callbackFunction");
        	}
        };

        /**
         * 순서저장 버튼 클릭 시
         */
        this.btn_orderSave_onclick = function(obj,e)
        {
        	this.fn_saveExhbnInfoOrder();
        };

        /**
         * 등록 버튼 클릭 시
         */
        this.btn_write_onclick = function(obj,e)
        {
        	var oArg = {
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
        	              , title : "기획전 등록"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_NA_02.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 엑셀다운로드 버튼 클릭 시
         */
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	// 현재 페이지 data
        	var sFileName = "기획전_EXCEL_EXPORT";			// file Name
        	var aGrid = [this.grid_exhbnInfoExcel];
        	var aSht  = ["기획전"];

        	var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        	this.gfn_exportExcel(oParam);

        	return;

        	// 전체 data
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

        	if (this.div_search.form.rdo_searchNoticSprCd.value == "30")
        	{
        		/*
        		if (this.ds_exhbnOprUnitList.rowcount == 0)
        		{
        			alert(this.fn_getMessage("ERRN000001", "게시구분(로그인운영단위)을 선택하면 운영단위는")); // 게시구분(로그인운영단위)을 선택하면 운영단위는 필수 입력항목입니다.
        			return;
        		}
        		*/
        	}
        	else
        	{
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_exhbnOprUnitList.rowcount; i++)
        		{
        			aDelArr.push(i);
        		}

        		this.ds_exhbnOprUnitList.deleteMultiRows(aDelArr);
        	}

        	this.ds_searchExhbnOprUnitList.clearData();

        	var sBzplcIdList = "";
        	var sOprUnitIdList = "";

        	for(var i = 0; i< this.ds_exhbnOprUnitList.rowcount; i++)
        	{
        		var tempBzplcId = this.ds_exhbnOprUnitList.getColumn(i, "BZPLC_ID");
        		var tempOprUnitId = this.ds_exhbnOprUnitList.getColumn(i, "OPR_UNIT_ID");

        		var nRow = this.ds_searchExhbnOprUnitList.addRow();

        		this.ds_searchExhbnOprUnitList.setColumn(nRow, "BZPLC_ID", tempBzplcId);
        		this.ds_searchExhbnOprUnitList.setColumn(nRow, "OPR_UNIT_ID", tempOprUnitId);

        		sBzplcIdList += tempBzplcId + ",";
        		sOprUnitIdList += tempOprUnitId + ",";
        	}

        	this.fn_setMSearch(this.name, "BZPLC_ID", sBzplcIdList);
        	this.fn_setMSearch(this.name, "OPR_UNIT_ID", sOprUnitIdList);

        	if((sBzplcIdList == "" || sBzplcIdList == undefined) && (sOprUnitIdList == "" || sOprUnitIdList == undefined))
        	{
        		this.ds_search.setColumn(0, "EXCEL_DOWNLOAD_YN", "Y");

        		this.fn_gridExhbnInfoListExcel();
        	}
        	else
        	{
        		this.ds_search.setColumn(0, "INQ_COND_DTLS", this.name);

        		this.fn_insertSelectedData("fn_callbackFunction");
        	}
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
        	this.gfn_personalSave("grid_exhbnInfo", this.grid_exhbnInfo.getCurFormatString());
        };

        /**
         * 레이아웃 초기화 버튼 클릭 시
         */
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grid_exhbnInfo");
        	this.grid_exhbnInfo.set_formats(this.grid_exhbnInfo.uOrgFormat);
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grid_exhbnInfo_oncellclick = function(obj,e)
        {
        	if(e.col == this.grid_exhbnInfo.getBindCellIndex("body", "EXHBN_NM"))
        	{
        		var objDs = obj.getBindDataset();
        		var nRow = objDs.rowposition;

        		//alert(e.col + " / " + this.gridPrePkgInfo.getBindCellIndex("body", "PRE_PKG_NM") + " / " + objDs + " / " + nRow);

        		var oArg = { sCoCd : objDs.getColumn(nRow, "CO_CD")
        				   , sExhbnSeq : objDs.getColumn(nRow, "EXHBN_SEQ")
        			       , sPageNum : this.div_paging.uPage
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
        					  , title : "기획전 상세/수정"
        					  };

        		this.gfn_openPopup("btn_edit", "SA::SSP_BO_NA_03.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        	}
        };

        /**
         * 그리드 입력을 시도할 때
         */
        this.grid_exhbnInfo_oninput = function(obj,e)
        {
        	obj.setEditingValue(fn_selectNumber(obj.getEditingValue()));
        };

        this.ds_gridExhbnInfo_oncolumnchanged = function(obj,e)
        {
        	var nRow = obj.rowposition;
        	var currDispSo = obj.getColumn(nRow, "DISP_SO");

        	for(var i = 0; i< obj.rowcount; i++)
        	{
        		var dispSo = obj.getColumn(i, "DISP_SO");

        		if (nRow != i)
        		{
        			if (parseInt(currDispSo) == parseInt(dispSo))
        			{
        				alert(this.fn_getMessage("ERRN000005"));	// 동일한 순서가 있습니다. 확인 후 재 입력해 주시기 바랍니다.
        				obj.setColumn(nRow, "DISP_SO", "");
        				break;
        			}
        		}
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
         * 숫자만 돌려주는 함수
         */
        function fn_selectNumber(strValue)
        {
        	var re;

        	re = /[^0-9]/gi;

        	return strValue.replace(re,"");
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
        			this.ds_searchOprUnitCheckList.clearData();
        			this.ds_oprUnitList.clearData();

        			this.ds_search.clearData();
        			var nRow = this.ds_search.addRow();

        			this.ds_search.setColumn(nRow, "SORT_COLUMN", "");
        			this.ds_search.setColumn(nRow, "SORT_TYPE", "");
        			this.ds_search.setColumn(nRow, "EXCEL_DOWNLOAD_YN", "N");

        			// 입력 항목 영역
        			this.div_search.form.rdo_searchExhbnStateCd.set_index(0);
        			this.div_search.form.cbx_searchUseYn.set_index(0);
        			this.div_search.form.edt_searchExhbnNm.set_value("");
        			this.div_search.form.cal_searchStartDate.set_value("");
        			this.div_search.form.cal_searchEndDate.set_value("");
        			this.div_search.form.cbx_searchTermType.set_index(1);
        			this.div_search.form.cbx_searchMallSprCd.set_index(0);
        			this.div_search.form.cbx_searchExhbnSprCd.set_index(0);
        			this.div_search.form.rdo_searchNoticSprCd.set_index(0);

        			// 게시구분 로그인운영단위 grid 설정
        			this.ds_exhbnOprUnitList.clearData();
        			this.div_search.form.grid_oprUnit.nodatatext = "선택한 항목이 없습니다.";

        			// 게시구분 로그인운영단위 grid 항목 비활성화
        			this.div_search.form.grid_oprUnit.set_enable(false);

        			// 버튼 영역

        			// 로그인운영단위 검색, 로그인운영단위 멀티텍스트 아이콘
        			this.div_search.form.btn_searchOprUnit.set_enable(false);
        			this.div_search.form.btn_searchOprUnitMulText.set_enable(false);

        			// 초기화, 조회
        			this.div_search.form.btn_init.set_enable(true);
        			this.div_search.form.btn_search.set_enable(true);

        			// 순서저장, 등록, 엑셀다운로드, 레이아웃 저장, 레이아웃 초기화
        			this.btn_orderSave.set_enable(true);
        			this.btn_write.set_enable(true);
        			this.btn_excelDownload.set_enable(true);
        			this.btn_layoutSave.set_enable(true);
        			this.btn_layoutInit.set_enable(true);

        			// 검색기간 설정
        			this.fn_searchDateSet("2");

        			// 페이징 초기화
        			this.ds_search.setColumn(0, "START_NUM", 0);
        			this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);

        			break;

        		case "CODE_INIT" :

        			// 코드 초기화

        			// 공통코드 값 조회
        			this.fn_comCdList();

        			break;

        		case "GRID_INIT" :

        			// grid 초기화

        			this.sta_totalCount.set_text("(<b v='true'>총 0건 </b><fc v='red'>0</fc> / 0)");

        			// dataset 영역
        			this.ds_gridExhbnInfo.clearData();
        			this.ds_gridExhbnInfoExcel.clearData();

        			this.grid_exhbnInfo.clearSelect();
        			this.grid_exhbnInfoExcel.clearSelect();

        			this.grid_exhbnInfo.nodatatext = "조회 결과가 없습니다.";
        			this.grid_exhbnInfoExcel.nodatatext = "조회 결과가 없습니다.";

        			// 기획전 조회
        			//this.fn_gridExhbnInfoList(0);

        			break;

        		default :

        			//alert("작업구분이 없습니다.");

        			break;
        	}
        }












        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_NA_01_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div_search.form.cbx_searchTermType.addEventHandler("onitemchanged",this.div_search_cbx_searchTermType_onitemchanged,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.rdo_searchNoticSprCd.addEventHandler("onitemchanged",this.div_search_rdo_searchNoticSprCd_onitemchanged,this);
            this.div_search.form.btn_searchOprUnit.addEventHandler("onclick",this.div_search_btn_searchOprUnit_onclick,this);
            this.div_search.form.grid_oprUnit.addEventHandler("oncellclick",this.div_search_grid_oprUnit_oncellclick,this);
            this.div_search.form.btn_searchOprUnitMulText.addEventHandler("onclick",this.div_search_btn_searchOprUnitMulText_onclick,this);
            this.div_search.form.rdo_searchExhbnStateCd.addEventHandler("onitemchanged",this.Div_top_info_Radio00_onitemchanged,this);
            this.div_search.form.btn_largeExcel.addEventHandler("onclick",this.div_search_btn_largeExcel_onclick,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.grid_exhbnInfo.addEventHandler("oncellclick",this.grid_exhbnInfo_oncellclick,this);
            this.grid_exhbnInfo.addEventHandler("oninput",this.grid_exhbnInfo_oninput,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_orderSave.addEventHandler("onclick",this.btn_orderSave_onclick,this);
            this.grid_exhbnInfoExcel.addEventHandler("oncellclick",this.grid_exhbnInfo_oncellclick,this);
            this.ds_gridExhbnInfo.addEventHandler("oncolumnchanged",this.ds_gridExhbnInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_NA_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
