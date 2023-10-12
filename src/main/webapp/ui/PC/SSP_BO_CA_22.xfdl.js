(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CA_22");
            this.set_titletext("공용상품 기준판매가 개별등록");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,822);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_ID\"/><Col id=\"PRD_NM\"/><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispStatsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dpDispInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SAFT_INVN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_GB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_GB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_DSGN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_TASK_SPR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"EXP_PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCd", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitInfoOrg", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_savePcPrdPrcDtl", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_savePcPrdQty", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_savePcPrdDlcstDtls", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveReturn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rtnCd\" type=\"STRING\" size=\"256\"/><Column id=\"rtnMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServerOprUnitInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispHist", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveNewPrdReq", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","22","12","750","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_main","0","10","181","16",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("공용상품 기준판매가 등록");
            obj.set_cssclass("sta_WF_title04");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"21","65","28","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update",null,"21","69","28","btn_close:4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("수정");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","60",null,"742","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("stc_category","0","31","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("카테고리ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec2","0","62","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_disRsn","0","124","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("진열자동로직적용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hashTag","0","155","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("진열상태변경사유");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","277",null,"465","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_preload("true");
            obj.set_visible("false");
            obj.set_cssclass("tab_WF_basic");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab00);
            obj.set_text("가격 정보");
            obj.set_url("PC::SSP_BO_CA_22_1.xfdl");
            obj.set_async("false");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab00);
            obj.set_text("상품 Condition 정보");
            obj.set_url("PC::SSP_BO_CA_22_2.xfdl");
            obj.set_async("false");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div00.form.Tab00);
            obj.set_text("등록 상품 정보");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_url("PC::SSP_BO_CA_22_3.xfdl");
            obj.set_async("false");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div00.form.Tab00);
            obj.set_text("요청 상품 정보");
            obj.set_enable("true");
            obj.set_url("PC::SSP_BO_CA_22_4.xfdl");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Static("Static03_03_00","140","0",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_03","140","155",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_04","140","124",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_06","140","62",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_07","140","31",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_mnfr2","583","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("제조원ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_odrUnit2","583","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_bgNm","583","124","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("안전재고 상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_hashTag","148","159","802","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_enableevent("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_autoLogic","148","128","280","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_enable("true");
            var Div00_form_rdo_autoLogic_innerdataset = new nexacro.NormalDataset("Div00_form_rdo_autoLogic_innerdataset", obj);
            Div00_form_rdo_autoLogic_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">적용(자동적용)</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미적용(진열상태유지)</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_rdo_autoLogic_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","0","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_03_00","140","93",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hubYn","0","93","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("SSP진열상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_saftInvnYn","583","93","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("S-MRO상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","257","100.00%","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00","0","305","100.00%","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_mnfr2_00","873","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_mnfr2_00_00","873","93","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("SSP상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdIdView","148","4","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("000000000004823858");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","edt_prdIdView:4","4","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_prdIdPopup","edt_prdNm:4","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_dispStats","148","97","400","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_dispStatsCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_columncount("3");
            obj.set_enable("true");
            obj.set_direction("horizontal");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_dispStatsSelect",null,"197","120","28","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("진열상태이력");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_categoryId","148","35","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_categoryNm","302","35","269","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrId","718","35","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","872","35","275","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_attrVal","148","66","423","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnit","718","66","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCountry","1007","66","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mroStats","718","97","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_sspStats","1007","97","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_safInvn","718","128","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","460","4","697","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"21","68","28","btn_close:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"21","66","28","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1180","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","802","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02","0","49","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00","0","278","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_newPrdPrcPrcess",null,"21","66","28","btn_clear:4",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("예외종료");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,822,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item18","Div00.form.rdo_autoLogic","value","ds_oprUnitInfo","AUTO_LOGIC_EM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.rdo_dispStats","value","ds_oprUnitInfo","DISP_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.edt_hashTag","value","ds_oprUnitInfo","DISP_STATS_CHGRSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_categoryId","value","ds_dpDispInfo","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_categoryNm","value","ds_dpDispInfo","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_mnfrId","value","ds_dpDispInfo","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.edt_mnfrNm","value","ds_dpDispInfo","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_attrVal","value","ds_dpDispInfo","ATTR_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_sellUnit","value","ds_dpDispInfo","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.edt_mnfrCountry","value","ds_dpDispInfo","ORGPLC_CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_mroStats","value","ds_dpDispInfo","MRO_PRD_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_sspStats","value","ds_dpDispInfo","PRD_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_safInvn","value","ds_dpDispInfo","INVN_STATS_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.edt_prdIdView","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.edt_sspPrdNm","value","ds_dpDispInfo","SSP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","PC::SSP_BO_CA_22_1.xfdl");
            this._addPreloadList("fdl","PC::SSP_BO_CA_22_2.xfdl");
            this._addPreloadList("fdl","PC::SSP_BO_CA_22_3.xfdl");
            this._addPreloadList("fdl","PC::SSP_BO_CA_22_4.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_22.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_22.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_22.xfdl", function() {
        /******************************************************************************
        PROJECT NAME :
        CREATION DATES :
        CREATER :
        *******************************************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        // 필수값 체크를 위한 필드명 선언

        this.tab_pos = 0;
        this.childForm ="";
        this.bExtend = false;
        this.displayGubun = 2;
        this.strAuth = "";
        this.strIsNew = "Y";
        this.isParent = false;
        this.newPrdReqNo ="";
        this.bzplcId = "*";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){


        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//요청상품정보 탭 숨김처리
        	this.Div00.form.Tab00.Tabpage4.set_tabbuttonwidth(-1);

        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();

        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회(진열상태)
        this.fn_commonCodeSearch = function(){
        	this.ds_searchCd.setColumn(0, "CODE_LIST", "DISP_STATS_CD");
        	this.ds_searchCd.setColumn(0, "LANG_CD", "KO");

        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_searchCd";
        	var outDs = "ds_dispStatsCd=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //조회(등록된 전용상품정보 - 상세)
        this.fn_searchExItemInfo = function() {
        	//ds_dpDispInfo
        	var sSvcId = "getNewExItemInfo";
        	var sUrl = "/pc/pc-prc-mng/get-new-item-info.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_dpDispInfo=dpDispInfo ds_oprUnitInfo=oprUnitInfo";
        	var arg;
        	var callback = "fn_callBack"
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        //상품ID 입력창에 입력 후 엔터 칠 경우.
        this.fn_searchPrdIdInfo = function() {
        	var sSvcId = "getPrdIdInfo";
        	var sUrl = "/pr/prd-popup/select-product-popup-list.do";
        	var inDs = "ds_search=ds_searchEnter";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //저장
        this.fn_save = function(inDs) {
        	var sSvcId = "savePrcMngInfo";
        	var sUrl = "/pc/pc-ex-prc-mng/savePrcMngInfo.do";
        	var outDs = "ds_saveReturn=ds_output1";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };



        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){

        		case "commonCodeSearch":
        				this.ds_dispStatsCd.deleteRow(3);
        			break;
        		case "getNewExItemInfo" :
        			//
        			var pubOnlySprCd = this.ds_dpDispInfo.getColumn(0,"PUB_ONLY_SPR_CD");
        			var prdSprCd = this.ds_dpDispInfo.getColumn(0,"REPR_PRD_SPR_CD");
        			var isNew = this.ds_oprUnitInfo.getColumn(0,"IS_NEW");
        			if(pubOnlySprCd == "E"){
        				this.clearInit();
        				//alert("전용상품은 선택할수 없습니다.");
        				this.alert(this.fn_getMessage("ERRP000213"));
        				return false;
        			}

        			if(prdSprCd == "3"){
        				this.clearInit();
        				//alert("피통합상품은 선택할 수 없습니다.");
        				this.alert(this.fn_getMessage("ERRP000214"));
        				return false;
        			}

        			//Tab활성화
        			this.Div00.form.Tab00.set_visible(true);

        			this.ds_oprUnitInfoOrg.copyData(this.ds_oprUnitInfo,true);

        			trace(isNew + "|||" + this.displayGubun);
        			if(isNew == 'Y' && (this.displayGubun == '2' || this.displayGubun == '3')){
        				//등록모드
        				this.fn_displayGubun(2);
        				this.strIsNew = "Y";
        			}else if(this.displayGubun == '3' || this.displayGubun == '2'){
        				//수정모드
        				this.fn_displayGubun(3);
        				this.strIsNew = "N";
        			}else if(this.displayGubun == '1'){
        				//상세모드
        				this.fn_displayGubun(1);
        				this.strIsNew = "N";
        			}

        			this.fn_searchDetail();

        			break;
        		case "savePrcMngInfo" :
        			var  strRtnCd  = this.fn_getDSValue(this.ds_saveReturn.getColumn(0,"rtnCd"));
        			var  strRtnMsg = this.fn_getDSValue(this.ds_saveReturn.getColumn(0,"rtnMsg"));

        			if( strRtnCd == "S") {
        				alert(this.fn_getMessage("ERRS000156"));

        				if(this.ds_forServerOprUnitInfo != undefined && this.ds_forServerOprUnitInfo.rowcount != 0 )
        					this.ds_forServerOprUnitInfo.clearData();
        				if(this.ds_savePcPrdPrcDtl != undefined && this.ds_savePcPrdPrcDtl.rowcount != 0 )
        					this.ds_savePcPrdPrcDtl.clearData();
        				if(this.ds_savePcPrdQty != undefined && this.ds_savePcPrdQty.rowcount != 0 )
        					this.ds_savePcPrdQty.clearData();
        				if(this.ds_savePcPrdDlcstDtls != undefined && this.ds_savePcPrdDlcstDtls.rowcount != 0 )
        					this.ds_savePcPrdDlcstDtls.clearData();
        				if(this.ds_saveNewPrdReq != undefined && this.ds_saveNewPrdReq.rowcount != 0 )
        					this.ds_saveNewPrdReq.clearData();
        				if(this.ds_dispHist != undefined && this.ds_dispHist.rowcount != 0 )
        					this.ds_dispHist.clearData();

        				if(this.newPrdReqNo != null && this.newPrdReqNo != ""){
        					this.parent.parent.opener.fn_callBackForSearch();
        					this.parent.parent.close(true);
        					return;
        				}

        				this.newPrdReqNo = "";
        				this.btn_newPrdPrcPrcess.set_visible(false);
        				this.fn_searchExItemInfo();
        			}
        			else {
        				alert(strRtnMsg);
        			}
        			break;
        	}
        };

        this.fn_popupCallback = function(sPopupId, args){
        		trace("버튼을 누른 객체 : " + sPopupId);
        		switch(sPopupId) {
        			case "btn_prdIdPopup" :
        				var jsonData = JSON.parse(args);

        				this.Div00.form.edt_prdIdView.set_value(jsonData.PRD_ID_VIEW);
        				this.Div00.form.edt_prdNm.set_value(jsonData.PRD_NM);
        				this.prdId = jsonData.PRD_ID;
        				this.prdNm = jsonData.PRD_NM;

        				//상세조회
        				this.fn_searchExItemInfo();

        				break;
        			case "btn_newPrdPrcPrcess" :
        				//예외종료처리 콜백
        				if(args){
        					this.parent.parent.opener.fn_callBackForSearch();
        					this.parent.parent.close(true);
        				}
        			break;

        		}
        }


        this.fn_getPrdNameCB = function()	{
        	if(this.ds_search.getColumn(0,"PRD_NM") != ""){
        		this.prdId = this.ds_search.getColumn(0,"PRD_ID");
        		this.prdNm = this.ds_search.getColumn(0,"PRD_NM");
        		this.fn_searchExItemInfo();
        	}
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("btn_close_onclick");
        };

        this.fn_shouldSave = function() {

        	var oprUnitInfo = this.fn_didChange(this.ds_oprUnitInfo);
        	var dispInfo = this.fn_didChange(this.ds_dpDispInfo);
        	var tabInfo_1 = this.Div00.form.Tab00.Tabpage1.form.fn_shouldSave();
        	var tabInfo_2 = this.Div00.form.Tab00.Tabpage2.form.fn_shouldSave();

        	if (oprUnitInfo || dispInfo  || tabInfo_1 || tabInfo_2)	return true;

        	return false;
        };
        this.clearInit = function(){
        	//전용상품 선택시 화면초기화
        	this.ds_search.setColumn(0,"PRD_ID","");
        	this.ds_search.setColumn(0,"PRD_NM","");
        	if(this.ds_dpDispInfo != null){
        		this.ds_dpDispInfo.clearData();
        	}
        	if(this.ds_oprUnitInfo != null){
        		this.ds_oprUnitInfo.clearData();
        	}

        	this.Div00.form.Tab00.set_visible(false);
        }
        this.add_dispHistData = function()
        {
        	if(this.ds_dispHist != null) this.ds_dispHist.clearData();
        	this.ds_dispHist.addRow();
        	this.ds_dispHist.setColumn(0,"CO_CD",this.ds_search.getColumn(0,"CO_CD"));
        	this.ds_dispHist.setColumn(0,"PRD_ID",this.ds_search.getColumn(0,"PRD_ID"));
        	this.ds_dispHist.setColumn(0,"BZPLC_ID",'*');
        	trace("data is " + this.fn_getStrFromDataset(this.ds_dispHist,0));
        };
        // 사용자 초기화
        //this.fn_userInit = function(prdId, prdNm, bzplcId, bzplcNm, auth, isNew) {
        this.fn_userInit = function(prdId, prdNm, bzplcId, bzplcNm, auth, isNew, newPrdReqNo) {
        	this.prdId = prdId;
        	this.prdNm = prdNm;
        	this.bzplcId = bzplcId;
        	this.bzplcNm = bzplcNm;
        	this.strAuth = auth;
        	this.strIsNew = isNew;
        	this.newPrdReqNo = newPrdReqNo;


        	this.tab_pos = 0;
        	this.childForm = this.Div00.form.Tab00.tabpages[this.tab_pos].form;
        	//auth = 1 (등록), 2(수정), 3(조회)
        	if(auth == 1){
        		this.displayGubun = 3;
        	}else{
        		this.displayGubun = 1;
        	}

        	this.isParent = true;

        	this.Div00.form.edt_prdIdView.set_value(prdId);
        	this.Div00.form.edt_prdNm.set_value(prdNm);
        	this.fn_searchExItemInfo();


        };

        this.fn_makeForServerOprUnitInfo = function() {

        	if(this.ds_forServerOprUnitInfo != null){
        		this.ds_forServerOprUnitInfo.clearData();
        	}

        	if(this.ds_forServerOprUnitInfo != null){
        		this.ds_forServerOprUnitInfo.clearData();
        	}
        	if(this.strIsNew == "Y")
        	{
        		for(var i=0; i< this.ds_oprUnitInfo.rowcount; i++)
        		{
        			this.ds_oprUnitInfo.setColumn(i,"RIGHT_NOW",'1');
        		}
        	}

        	if (!this.fn_didChange(this.ds_oprUnitInfo)) {
        		//trace("변경안됨 ");
        		return this.ds_forServerOprUnitInfo;
        	}


        	return this.fn_getSaveDataset(this.ds_oprUnitInfo, this.ds_forServerOprUnitInfo);
        };


        this.fn_searchDetail = function()
        {
        	this.Div00.form.Tab00.tabpages[0].form.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm);
        	this.Div00.form.Tab00.tabpages[1].form.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm);
        	this.Div00.form.Tab00.tabpages[2].form.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm);
        	if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != ""){
        		this.Div00.form.Tab00.tabpages[3].form.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm);
        	}

        	this.Div00.form.Tab00.tabpages[0].form.fn_search("1");
        	this.Div00.form.Tab00.tabpages[1].form.fn_searchPcPrdQtyDlcstDtls();
        	this.Div00.form.Tab00.tabpages[2].form.fn_getBasicInfo(true);

        	if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != ""){
        		this.Div00.form.Tab00.tabpages[3].form.fn_searchPcPrdReq();
        	}


        };

        /*
         * 조회/수정 visible/enable 관리
         * arg : 1(조회화면), 2(저장화면), 3(수정화면)
         */
        this.fn_displayGubun =  function(arg)
        {
        	if (arg=="1"){
        		this.displayGubun = 1;
        		this.Div01.form.stc_main.set_text("공용상품 기준판매가 상세");
        		this.btn_clear.set_visible(false);
        		this.btn_save.set_visible(false);
        		//this.btn_update.set_visible(true);
        		this.btn_close.set_visible(true);
        		this.Div00.form.btn_dispStatsSelect.set_visible(true);
        		this.Div00.form.btn_prdIdPopup.set_enable(false);
        		this.Div00.form.edt_prdIdView.set_readonly(true);
        		this.Div00.form.rdo_dispStats.set_enable(false);
        		this.Div00.form.rdo_autoLogic.set_enable(false);
        		this.Div00.form.edt_hashTag.set_enable(false);

        		this.Div00.form.Tab00.Tabpage1.form.fn_setDisplay(false);

        		//탭2 변경사항
        		this.Div00.form.Tab00.Tabpage2.form.btn_conditionSelct.set_visible(true);
        		this.Div00.form.Tab00.Tabpage2.form.btn_add1.set_enable(false);
        		this.Div00.form.Tab00.Tabpage2.form.btn_add2.set_enable(false);
        		this.Div00.form.Tab00.Tabpage2.form.btn_addHistory.set_enable(false);
        		this.Div00.form.Tab00.Tabpage2.form.btn_addHistory2.set_enable(false);
        		this.Div00.form.Tab00.Tabpage2.form.btn_del1.set_enable(false);
        		this.Div00.form.Tab00.Tabpage2.form.btn_del2.set_enable(false);

        		this.Div00.form.Tab00.Tabpage2.form.grid_qty.set_readonly(true);
        		this.Div00.form.Tab00.Tabpage2.form.grid_dlcst.set_readonly(true);

        		if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != ""){
        			this.Div00.form.Tab00.Tabpage4.set_tabbuttonwidth(110);
        			this.Div00.form.btn_prdIdPopup.set_enable(false);
        			this.Div00.form.edt_prdIdView.set_readonly(true);

        			//신규상품요청 상세일때 등록되지않은것들은 진열상태외 자동로직여부 null처리
        			var dispStatsCd = this.ds_dpDispInfo.getColumn(0,"DISP_STATS_CD")
        			if(typeof(dispStatsCd) == 'undefined'){
        				this.ds_oprUnitInfo.setColumn(0,"DISP_STATS_CD",null);
        				this.ds_oprUnitInfo.setColumn(0,"AUTO_LOGIC_EM_YN",null);
        			}

        		}


        	}else if(arg=="2"){
        		this.displayGubun = 2;
        		this.Div01.form.stc_main.set_text("공용상품 기준판매가 등록");
        		this.Div00.form.btn_dispStatsSelect.set_visible(false);
        		this.btn_clear.set_visible(true);
        		this.btn_save.set_visible(true);
        		//this.btn_update.set_visible(false);
        		this.btn_close.set_visible(true);
        		this.Div00.form.edt_prdIdView.set_readonly(false);
        		if(typeof(this.parent.prdId) != "undefined" && typeof(this.parent.prdNm) != "undefined" && typeof(this.parent.prdIdView) != "undefined"){
        			this.Div00.form.edt_prdIdView.set_readonly(true);
        			this.Div00.form.btn_prdIdPopup.set_enable(false);
        		}else {
        			this.Div00.form.edt_prdIdView.set_readonly(false);
        			this.Div00.form.btn_prdIdPopup.set_enable(true);
        		}
        		this.Div00.form.Tab00.Tabpage2.form.btn_conditionSelct.set_visible(false);

        		this.Div00.form.Tab00.Tabpage1.form.fn_setDisplay(true);

        		if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != ""){
        			this.Div00.form.Tab00.Tabpage4.set_tabbuttonwidth(110);
        			this.btn_newPrdPrcPrcess.set_visible(true);
        			this.Div00.form.btn_prdIdPopup.set_enable(false);
        			this.Div00.form.edt_prdIdView.set_readonly(true);
        		}

        	}else if(arg=="3"){

        		this.displayGubun = 3;
        		this.Div01.form.stc_main.set_text("공용상품 기준판매가 수정");
        		this.Div00.form.btn_dispStatsSelect.set_visible(true);
        		this.btn_clear.set_visible(true);
        		this.btn_save.set_visible(true);
        		//this.btn_update.set_visible(false);
        		this.btn_close.set_visible(true);
        		this.Div00.form.edt_prdIdView.set_readonly(true);
        		this.Div00.form.btn_prdIdPopup.set_enable(false);


        		//메인 수정가능
        		this.Div00.form.rdo_dispStats.set_enable(true);
        		this.Div00.form.rdo_autoLogic.set_enable(true);
        		this.Div00.form.edt_hashTag.set_enable(true);


        		//탭1 변경사항
        		this.Div00.form.Tab00.Tabpage1.form.fn_setDisplay(true);


        		//탭2 변경사항
        		this.Div00.form.Tab00.Tabpage2.form.btn_conditionSelct.set_visible(true);
        		this.Div00.form.Tab00.Tabpage2.form.btn_add1.set_enable(true);
        		this.Div00.form.Tab00.Tabpage2.form.btn_add2.set_enable(true);
        		this.Div00.form.Tab00.Tabpage2.form.btn_del1.set_enable(true);
        		this.Div00.form.Tab00.Tabpage2.form.btn_del2.set_enable(true);
        		this.Div00.form.Tab00.Tabpage2.form.btn_addHistory.set_enable(true);
        		this.Div00.form.Tab00.Tabpage2.form.btn_addHistory2.set_enable(true);

        		this.Div00.form.Tab00.Tabpage2.form.grid_qty.set_readonly(false);
        		this.Div00.form.Tab00.Tabpage2.form.grid_dlcst.set_readonly(false);

        		if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != ""){
        			this.Div00.form.Tab00.Tabpage4.set_tabbuttonwidth(110);
        			this.btn_newPrdPrcPrcess.set_visible(true);
        			this.Div00.form.btn_prdIdPopup.set_enable(false);
        			this.Div00.form.edt_prdIdView.set_readonly(true);
        		}


        	}

        }

        this.Div00_btn_prdIdPopup_onclick = function(obj,e)
        {
        	var params = {coCd:this.fv_coCd, pubOnlySprCd:'P'};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_38.xfdl", params,  "fn_popupCallback", options);
        };


        this.Div00_Tab00_onchanged = function(obj,e)
        {
        	//trace("### Div00_Tab00_onchanged - tab_pos : " + e.postindex);

        	this.tab_pos = e.postindex;

        	this.childForm = this.Div00.form.Tab00.tabpages[e.postindex].form;
        	this.childForm.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm, this.strIsNew);

        	//this.fn_searchDetail();
        };

        this.btn_save_onclick = function(obj,e)
        {

        	if (this.ds_search.getColumn(0,"PRD_ID") == '') {
        		//alert("상품ID가 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000215"));
        		return false;
        	}


        	if(this.displayGubun == "2" && this.Div00.form.Tab00.Tabpage1.form.ds_pcPrdPrcDtl.rowcount == 0){
        		//alert("유효한 구매정보가 존재하지 않습니다.");
        		this.alert(this.fn_getMessage("ERRP000216"));
        		return false;
        	}

        	if((this.ds_oprUnitInfoOrg.getColumn(0,"DISP_STATS_CD")=="10" && (this.ds_oprUnitInfo.getColumn(0,"DISP_STATS_CD") == "20" || this.ds_oprUnitInfo.getColumn(0,"DISP_STATS_CD") == "30")) ||
        		(this.ds_oprUnitInfoOrg.getColumn(0,"DISP_STATS_CD")=="20" && this.ds_oprUnitInfo.getColumn(0,"DISP_STATS_CD") == "30") ||
        		(this.ds_oprUnitInfoOrg.getColumn(0,"DISP_STATS_CD")=="30" && this.ds_oprUnitInfo.getColumn(0,"DISP_STATS_CD") == "20") ||
        		(this.displayGubun == 2 && (this.ds_oprUnitInfo.getColumn(0,"DISP_STATS_CD") == "20" || this.ds_oprUnitInfo.getColumn(0,"DISP_STATS_CD") == "30"))
        		){
        		if(this.Div00.form.edt_hashTag.value==null || this.Div00.form.edt_hashTag.value=='' ){
        			//alert("진열상태 변경사유를 입력해주세요.");
        			this.alert(this.fn_getMessage("ERRP000217"));
        			return false;
        		}else if(this.Div00.form.edt_hashTag.value.length < 5){
        			//alert("진열상태 변경사유는 5글자 이상이어야합니다.");
        			this.alert(this.fn_getMessage("ERRP000218"));
        			return false;
        		}
        	}

        	this.sspBssSalsprc = 0;
        	if(this.Div00.form.Tab00.Tabpage1.form.ds_pcPrdPrcDtl.rowcount == 1 ){
        		this.sspBssSalsprc = this.Div00.form.Tab00.Tabpage1.form.ds_pcPrdPrcDtl.getColumn(0,"SSP_BSS_SALSPRC");
        	}else if(this.Div00.form.Tab00.Tabpage1.form.ds_pcPrdPrcDtl.rowcount == 2 ){
        		this.sspBssSalsprc = this.Div00.form.Tab00.Tabpage1.form.ds_pcPrdPrcDtl.getColumn(1,"SSP_BSS_SALSPRC");
        	}

        	//Tab1 저장 기준가
        	//this.sspBssSalsprc = this.Div00.form.Tab00.Tabpage1.form.ds_pcPrdPrcDtl.getColumn(0,"SSP_BSS_SALSPRC");

        	//Tab2 저장(물량할인 / 배송비)
        	this.pcPrdQty = this.Div00.form.Tab00.Tabpage2.form.ds_pcPrdQty;
        	this.pcPrdDlcstDtls = this.Div00.form.Tab00.Tabpage2.form.ds_pcPrdDlcstDtls;

        	//수정여부 확인 컬럼
        	var qtyQtyFlag = true;
        	var dlcstDtlsQtyFlag = true;
        	var qtyAmtFlag = true;
        	var dlcstDtlsAmtFlag = true;
        	var qtyAmtSalsprcFlag = true;
        	var dlcstDtlsAmtSalsprcFlag = true;


        	if(this.pcPrdQty != null){
        		for (var i = 0; i < this.pcPrdQty.rowcount; i++) {
        			if (this.pcPrdQty.getColumn(i,"QTY_ITV_STR") == '' || this.pcPrdQty.getColumn(i,"QTY_ITV_STR") == null ||
        				this.pcPrdQty.getColumn(i,"QTY_ITV_END") == '' || this.pcPrdQty.getColumn(i,"QTY_ITV_END") == null) {
        				qtyQtyFlag = false;
        			}
        			if ((this.pcPrdQty.getColumn(i,"DC_AMT") == '' || this.pcPrdQty.getColumn(i,"DC_AMT") == null) &&
        				this.pcPrdQty.getColumn(i,"DC_AMT") != '0') {
        				qtyAmtFlag = false;
        			}
        			if (this.pcPrdQty.getColumn(i,"DC_AMT") >= this.sspBssSalsprc) {
        				qtyAmtSalsprcFlag = false;
        			}
        		}
        	}

        	if(this.pcPrdDlcstDtls != null){
        		for (var i = 0; i < this.pcPrdDlcstDtls.rowcount; i++) {
        			if (this.pcPrdDlcstDtls.getColumn(i,"QTY_ITV_STR") == ''||this.pcPrdDlcstDtls.getColumn(i,"QTY_ITV_STR") == null ||
        				this.pcPrdDlcstDtls.getColumn(i,"QTY_ITV_END") == ''||this.pcPrdDlcstDtls.getColumn(i,"QTY_ITV_END") == null) {
        				dlcstDtlsQtyFlag = false;
        			}
        			if ((this.pcPrdDlcstDtls.getColumn(i,"EXTR_AMT") == ''||this.pcPrdDlcstDtls.getColumn(i,"EXTR_AMT") == null) &&
        				 this.pcPrdDlcstDtls.getColumn(i,"EXTR_AMT") != '0') {
        				dlcstDtlsAmtFlag = false;
        			}
        			if (this.pcPrdDlcstDtls.getColumn(i,"EXTR_AMT") >= this.sspBssSalsprc) {
        				//dlcstDtlsAmtSalsprcFlag = false;
        			}
        		}
        	}


        	if (qtyQtyFlag == false) {
        		//alert("상품 Condition 물량할인 - 물량정보를 확인해주세요.");
        		this.alert(this.fn_getMessage("ERRP000219"));
        		return false;
        	}
        	else if (qtyAmtFlag == false) {
        		//alert("상품 Condition 물량할인 - 할인금액 입력이 누락되었습니다.");
        		this.alert(this.fn_getMessage("ERRP000220"));
        		return false;
        	}
        	else if (dlcstDtlsQtyFlag == false) {
        		//alert("상품 Condtion 배송비 - 물량정보를 확인해주세요.");
        		this.alert(this.fn_getMessage("ERRP000221"));
        		return false;
        	}
        	else if (dlcstDtlsAmtFlag == false) {
        		//alert("상품 Condtion 배송비 - 할증금액 입력이 누락되었습니다.");
        		this.alert(this.fn_getMessage("ERRP000222"));
        		return false;
        	}
        	else if (qtyAmtSalsprcFlag == false) {
        		//alert("상품 Condtion 물량할인 - 할인금액이 SSP기준판매가보다 큽니다.");
        		this.alert(this.fn_getMessage("ERRP000223"));
        		return false;
        	}
        	else if (dlcstDtlsAmtSalsprcFlag == false) {
        		//alert("상품 Condtion 배송비 - 할증금액이 SSP기준판매가보다 큽니다.");
        		this.alert(this.fn_getMessage("ERRP000224"));
        		return false;
        	}
        	//변경된 데이터 확인
        	//메인
        	//진열 저장

        	this.ds_forServerOprUnitInfo = this.fn_makeForServerOprUnitInfo(); //진열정보

        	//탭1 그리드2
        	this.ds_savePcPrdPrcDtl = this.Div00.form.Tab00.Tabpage1.form.fn_getSaveDataset01();		// SSP기준가

        	this.ds_savePcPrdQty = this.Div00.form.Tab00.Tabpage2.form.fn_getSaveDataset01();		// 물량배분

        	this.ds_savePcPrdDlcstDtls = this.Div00.form.Tab00.Tabpage2.form.fn_getSaveDataset02();	// 배송비할증



        	var nRowCount = 0;
        	var  strSave = "";

        	if(this.ds_forServerOprUnitInfo != null){
        		nRowCount += this.ds_forServerOprUnitInfo.rowcount;
        		if(this.ds_forServerOprUnitInfo.rowcount > 0 ) strSave =strSave+ " ds_save1=ds_forServerOprUnitInfo";
        	}

        	if(this.ds_savePcPrdPrcDtl != null){
        		nRowCount += this.ds_savePcPrdPrcDtl.rowcount;
        		if(this.ds_savePcPrdPrcDtl.rowcount > 0 ) strSave =strSave+ " ds_save2=ds_savePcPrdPrcDtl";
        	}
        	if(this.ds_savePcPrdQty != null){
        		nRowCount += this.ds_savePcPrdQty.rowcount;
        		if(this.ds_savePcPrdQty.rowcount > 0 ) strSave =strSave+ " ds_save3=ds_savePcPrdQty";
        	}
        	if(this.ds_savePcPrdDlcstDtls != null){
        		nRowCount += this.ds_savePcPrdDlcstDtls.rowcount;
        		if(this.ds_savePcPrdDlcstDtls.rowcount > 0 ) strSave =strSave+ " ds_save4=ds_savePcPrdDlcstDtls";
        	}

        	if(typeof(this.newPrdReqNo) != "undefined" && this.newPrdReqNo != ""){
        		if(this.ds_saveNewPrdReq != null) this.ds_saveNewPrdReq.clearData();
        		this.ds_saveNewPrdReq.addRow();
        		this.ds_saveNewPrdReq.setColumn(0, "CO_CD", this.fv_coCd);
        		this.ds_saveNewPrdReq.setColumn(0, "NEW_PRD_REQ_NO", this.newPrdReqNo);
        		this.ds_saveNewPrdReq.setColumn(0, "PRD_ID", this.prdId);
        		this.ds_saveNewPrdReq.setColumn(0, "PRC_PROC_STATS_CD", "20");
        		if(this.ds_saveNewPrdReq.rowcount > 0 ) strSave =strSave+ " ds_save8=ds_saveNewPrdReq";
        		nRowCount += this.ds_saveNewPrdReq.rowcount;
        	}

        	if((typeof(this.newPrdReqNo) == "undefined" || this.newPrdReqNo == "") && this.strIsNew == 'Y'){
                		if(this.ds_dpDispInfo.getColumn(0, "NEW_PRD_REQ_NO") != null && this.ds_dpDispInfo.getColumn(0, "NEW_PRD_REQ_NO")!= undefined) {
                			if(this.ds_saveNewPrdReq != null) this.ds_saveNewPrdReq.clearData();
                			this.ds_saveNewPrdReq.addRow();
                			this.ds_saveNewPrdReq.setColumn(0, "CO_CD", this.fv_coCd);
                			this.ds_saveNewPrdReq.setColumn(0, "NEW_PRD_REQ_NO", this.ds_dpDispInfo.getColumn(0, "NEW_PRD_REQ_NO"));
                			this.ds_saveNewPrdReq.setColumn(0, "PRD_ID", this.prdId);
                			this.ds_saveNewPrdReq.setColumn(0, "PRC_PROC_STATS_CD", "20");
                			if(this.ds_saveNewPrdReq.rowcount > 0 ) strSave =strSave+ " ds_save8=ds_saveNewPrdReq";
                			nRowCount += this.ds_saveNewPrdReq.rowcount;
                		}
                	}

        	if(this.displayGubun == "3"){
        		if(nRowCount == 0)	{
        			alert(this.fn_getMessage("ERRS000155"));
        			return;
        		}
        	}



        	//var sReturn = this.confirm("입력된 내용을 저장하시겠습니까?");
        	var sReturn = this.confirm(this.fn_getMessage("ERRP000225"));
        	if (sReturn) {
        		if((this.ds_forServerOprUnitInfo != null && this.ds_forServerOprUnitInfo.rowcount > 0 )){
        			this.add_dispHistData();
        			strSave += " ds_save7=ds_dispHist";
        		}
        		this.fn_save(strSave);
        	}

        };

        this.btn_update_onclick = function(obj,e)
        {
        	this.fn_displayGubun("3");
        };

        this.btn_close_onclick = function(obj,e)
        {
        	if(!this.isParent){
        		if(this.fn_shouldSave() == false )	{
        			this.close(false);
        			return false;
        		}
        		var	sReturn;
        		if(this.displayGubun == 3) //sReturn = this.confirm("수정을 취소하시겠습니까?");
        			sReturn = this.confirm(this.fn_getMessage("ERRP000226"));
        		else //sReturn = this.confirm("등록을 취소하시겠습니까?");
        			sReturn = this.confirm(this.fn_getMessage("ERRP000013"));
        		if(!sReturn){
        			return false;
        		}
        		else{
        			this.close();
        		}
        	}
        	else{
        		if(this.fn_shouldSave() == false )	{
        			this.parent.parent.close();
        			return false;
        		}
        		//var sReturn = this.confirm("수정을 취소하시겠습니까?");
        		var sReturn = this.confirm(this.fn_getMessage("ERRP000226"));
        		if(!sReturn){
        			return false;
        		}else{
        			this.parent.parent.close();
        		}
        	}
        };

        this.Div00_btn_dispStatsSelect_onclick = function(obj,e)
        {
        	var objParam = {
        			coCd:this.fv_coCd
        			, prdId:this.prdId
        		};

        	this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_31.xfdl", objParam);
        };



        this.Div00_edt_prdIdView_onchanged = function(obj,e)
        {
        	this.fn_getCodeName(obj,this.Div00.form.edt_prdNm,"PRD","fn_getPrdNameCB");
        };

        this.btn_newPrdPrcPrcess_onclick = function(obj,e)
        {
        	//예외종료처리
        	var resArray = [];

        	var resData = {};
        	resData.PRD_ID = this.prdId
        	resData.NEW_PRD_REQ_NO = this.newPrdReqNo;

        	resArray.push(resData);

        	var params = {data : resArray};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_12.xfdl", params,  "fn_popupCallback", options);
        };

        this.btn_clear_onclick = function(obj,e)
        {
        	//var sReturn = this.confirm("초기화 하시겠습니까?");
        	var sReturn = this.confirm(this.fn_getMessage("ERRP000227"));
        	if (sReturn) {
        		this.Div00.form.Tab00.tabpages[1].form.fn_searchPcPrdQtyDlcstDtls();
        		this.fn_searchExItemInfo();
        	}
        };

        this.fn_onkeyup = function(obj,e)
        {
        	// 단축키 등록
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_update.addEventHandler("onclick",this.btn_update_onclick,this);
            this.Div00.form.stc_category.addEventHandler("onclick",this.Div00_stc_category_onclick,this);
            this.Div00.form.stc_hashTag.addEventHandler("onclick",this.Div00_Static26_03_01_00_02_onclick,this);
            this.Div00.form.Tab00.addEventHandler("onchanged",this.Div00_Tab00_onchanged,this);
            this.Div00.form.stc_bgNm.addEventHandler("onclick",this.Div00_Static26_03_01_00_01_01_onclick,this);
            this.Div00.form.rdo_autoLogic.addEventHandler("onitemchanged",this.Div00_rdo_pubOnlySpr_onitemchanged,this);
            this.Div00.form.Static01_00_01_02_00_00_00_00.addEventHandler("onclick",this.Div00_Static01_00_01_02_00_00_00_00_onclick,this);
            this.Div00.form.edt_prdIdView.addEventHandler("onkeyup",this.Div00_edt_prdIdView_onkeyup,this);
            this.Div00.form.edt_prdIdView.addEventHandler("onchanged",this.Div00_edt_prdIdView_onchanged,this);
            this.Div00.form.btn_prdIdPopup.addEventHandler("onclick",this.Div00_btn_prdIdPopup_onclick,this);
            this.Div00.form.rdo_dispStats.addEventHandler("onitemchanged",this.Div00_rdo_dispStats_onitemchanged,this);
            this.Div00.form.btn_dispStatsSelect.addEventHandler("onclick",this.Div00_btn_dispStatsSelect_onclick,this);
            this.Div00.form.edt_attrVal.addEventHandler("onchanged",this.Div00_edt_attrVal_onchanged,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_newPrdPrcPrcess.addEventHandler("onclick",this.btn_newPrdPrcPrcess_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
