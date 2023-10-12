(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CA_33");
            this.set_titletext("공용상품 영업지정판매가 개별등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,710);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_ID\"/><Col id=\"PRD_NM\"/><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file_list", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delete_files", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resMap", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salsPrcInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_STD\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_STD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_BUY_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"EXP_PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_BSS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_SALSPRC_ATFL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dpDispInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SAFT_INVN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_GB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_GB_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"14\"/><Column id=\"SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"14\"/><Column id=\"SALSPRC_DSGN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_SALSPRC_ATFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_TASK_SPR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"EXP_PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_NOW\" type=\"STRING\" size=\"256\"/><Column id=\"FST_HST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_BSS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_BUY_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServerExItemInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServerDpDispInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveReturn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rtnCd\" type=\"STRING\" size=\"256\"/><Column id=\"rtnMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchInit", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_ID\"/><Col id=\"PRD_NM\"/><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","22","12","750","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_main","0","10","211","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("공용상품 영업지정판매가 등록");
            obj.set_cssclass("sta_WF_title04");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","20","60",null,"544","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_category","0","31","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("카테고리ID/명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_00","140","0",null,"32","1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_03","140","186",null,"32","1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_06","140","124",null,"32","1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_07","140","31",null,"32","1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_03_00","140","155",null,"32","1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdIdView","148","4","160","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("000000000004823858");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","edt_prdIdView:4","4","302","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_prdIdPopup","edt_prdNm:4","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_07_00","140","62",null,"32","1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_category00","648","124","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_07_01","140","217",null,"32","1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hashTag00","0","217","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("판매가지정사유");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","799","4","160","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("000000000004823858");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","964","4","238","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzplcIdPopup","1206","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_rsn","148","221","1140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_enableevent("true");
            obj.set_maxlength("100");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_disRsn00","0","155","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("SSP상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_disRsn00_00","0","186","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("영업지정판매가");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_sspStats","148","159","278","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_salsprc","148","190","278","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_format("+###,###,0.999999999");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_saftInvnYn00","433","155","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("S-MRO상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_saftInvnYn00_00","433","186","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("판매통화");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mroStats","582","159","282","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_currUnit","582","190","282","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_safInvn","1019","159","268","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_saftInvnYn01","870","155","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("안전재고상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_saftInvnYn00_00_00","870","186","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("예상매익율");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_prfrt","1019","190","268","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_format("0.99");
            obj.set_postfixtext("%");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_odrUnit2_00","0","124","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_odrUnit2","969","124","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_categoryId","148","35","160","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_text("000000000004823858");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_categoryNm","312","35","330","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_orgPlcCtryCd","1118","128","170","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_text("000000000004823858");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdIdView00_00_01","799","128","163","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_text("000000000004823858");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdIdView00_00_01_00","148","127","494","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_text("000000000004823858");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","0","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec2","648","31","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("제조원ID/명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hubYn","0","62","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("최저매입가");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_saftInvnYn","648","62","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("SSP기준판매가");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_pcprc","148","66","494","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.set_format(",");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_bssSalsprc","799","66","489","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_format(",");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search","1235","2","53","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","0","248",null,"201","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_disRsn00_00_00","0","0","141","48",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("영업지정판매가입력");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_extend","121","28","20","20",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_default");
            obj.set_text("∨");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hashTag01","0","47","141","154",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("영업지정판매가\r\n유효기간");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_07_01_01_00","140","0",null,"48","1",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_07_01_01_00_00","140","47",null,"154","1",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chk_bssSalsprcUse","148","12","118","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("기준판매가 적용");
            obj.set_enable("true");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_visible("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chk_bssSalsprcRightNow","295","12","58","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("즉시");
            obj.set_enable("true");
            obj.set_value("false");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_salsprcStrDtm","376","12","148","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            obj.set_headformat("yyyy-MM-dd");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","530","12","9","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("~");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_salsprcEndDtm","543","12","148","24",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_headformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            obj.set_readonly("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add1","1150","10","66","28",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("+가격추가");
            obj.set_visible("true");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del1","1220","10","66","28",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("-삭제");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","148","62",null,"128","8",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_salsPrcInfo");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"71\"/><Column size=\"119\"/><Column size=\"107\"/><Column size=\"89\"/><Column size=\"102\"/><Column size=\"98\"/><Column size=\"120\"/><Column size=\"132\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"산출기준\"/><Cell col=\"2\" text=\"영업지정판매가\"/><Cell col=\"3\" text=\"판매통화\"/><Cell col=\"4\" text=\"최저매입가\"/><Cell col=\"5\" text=\"예상매익율\"/><Cell col=\"6\" text=\"유효기간(FROM)\"/><Cell col=\"7\" text=\"유효기간(TO)\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:CAL_STD_NM\"/><Cell col=\"2\" text=\"bind:SALS_DSGN_SALSPRC\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"4\" text=\"bind:MIN_BUY_PRC\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:EXP_PRFRT\" displaytype=\"mask\" maskeditformat=\"#,0.00\" maskeditpostfixtext=\"%\"/><Cell col=\"6\" text=\"bind:SALS_DSGN_SALSPRC_STR_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"7\" text=\"bind:SALS_DSGN_SALSPRC_END_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hashTag00_00","0","448","141","96",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("첨부서류");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_07_01_00","stc_hashTag00_00:-1","448",null,"96","1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","148","457",null,"78","8",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_url("CO::fileUploadSingle.xfdl");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_odrUnit2_01","648","0","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrId","799","35","160","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","964","35","324","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hubYn00","0","93","141","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_text("SSP상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_07_00_00","140","93",null,"32","1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","148","97","1139","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.set_text("샘플백");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02","0","49","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_salsprcSelect",null,"20","150","28","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("영업지정판매가 변경이력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","44.54%","Div00:46","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_close:4","Div00:46","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_salsprcSelect00",null,"20","66","28","btn_salsprcSelect:4",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,710,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","Div00.form.edt_bzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_categoryId","value","ds_dpDispInfo","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_categoryNm","value","ds_dpDispInfo","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_pcprc","value","ds_dpDispInfo","MIN_BUY_PRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_prdIdView","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_bssSalsprc","value","ds_dpDispInfo","SSP_BSS_SALSPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_prdIdView00_00_01","value","ds_dpDispInfo","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_orgPlcCtryCd","value","ds_dpDispInfo","ORGPLC_CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.edt_prdIdView00_00_01_00","value","ds_dpDispInfo","ATTR_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.edt_sspStats","value","ds_dpDispInfo","PRD_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.edt_mroStats","value","ds_dpDispInfo","MRO_PRD_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.edt_safInvn","value","ds_dpDispInfo","INVN_STATS_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.edt_currUnit","value","ds_dpDispInfo","CURR_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.edt_salsprc","value","ds_dpDispInfo","SALS_DSGN_SALSPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div00.form.edt_prfrt","value","ds_dpDispInfo","EXP_PRFRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div00.form.edt_rsn","value","ds_dpDispInfo","SALSPRC_DSGN_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.Div00.form.chk_bssSalsprcRightNow","value","ds_dpDispInfo","RIGHT_NOW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div00.form.Div00.form.cal_salsprcStrDtm","value","ds_dpDispInfo","SALS_DSGN_SALSPRC_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div00.form.Div00.form.cal_salsprcEndDtm","value","ds_dpDispInfo","SALS_DSGN_SALSPRC_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div00.form.Div00.form.chk_bssSalsprcUse","value","ds_dpDispInfo","BSS_SALSPRC_USEYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_mnfrId","value","ds_dpDispInfo","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div00.form.edt_mnfrNm","value","ds_dpDispInfo","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Div00.form.edt_sspPrdNm","value","ds_dpDispInfo","SSP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CO::fileUploadSingle.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_33.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_33.xfdl","PC::pcUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_33.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_CA_33.xfdl", function() {
        /*******************************************************
          PROJECT NAME : MarketA
          CREATION DATES :
        *******************************************************/

        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("PC::pcUtils.xjs"); /*include "PC::pcUtils.xjs"*/;
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/

         this.prdId = '';
         this.bzplcId = '';
         this.checkResult = '';
         this.validResult = '';
         this.totalCount = 0;
         this.saveResult = '';
         this.displayGubun = 2;
         this.auth = 0;
         this.isParent = false;

         this.searchPrdCount = 0;
         this.searchPrdId = '';
         this.searchPrdNm = '';

         this.bzplcCount = 0;
         this.searchBzplcId = '';
         this.searchBzplcNm = '';

         this.bExtend = false;
         this.strIsNew = "Y";

         this.preSalsDsgnSalsprcStrDtm = "";

        /***********************************************************************************************
         * 파일첨부 변수 선언 영역
        ************************************************************************************************/

        this.valiFormIds = [
        	  { "id" : "PRD_ID", "name" : "상품" }
        	, { "id" : "BZPLC_ID", "name" : "사업장" }
        	, { "id" : "SALS_DSGN_SALSPRC", "name" : "영업지정판매가" }
            , { "id" : "DOC_REG_ID", "name" : "첨부파일"}
        ];

        this.fileDs = "";
        this.fileUpTransfer = "";
        //전달받은 문서번호
        this.docRegId = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.SSP_BO_CA_33_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//공통코드 조회
        	//this.fn_commonCodeSearch();
        	this.initSetValue();
        	this.fn_changeSearchArea(true);
        	this.fn_changeFileAttachArea(true);

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//공통코드 조회
        	this.fn_commonCodeSearch = function(){

        		var sSvcId = "commonCodeSearch";
        		var sUrl = "/co/select-common-code-list.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_reprPrdSprCd=ds_output1 ds_prcAplySprCd=ds_output2 ds_inqPerdSpr=ds_output3 ds_procStatsCd=ds_output4";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	//조회
        	this.fn_search = function(page)	{
        		var sSvcId = "getNewExItemInfo";
        		var sUrl = "/pc/pc-prc-sals-dsgn-mng/get-salsprc-item-info.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_salsPrcInfo=exItemInfo ds_dpDispInfo=dpDispInfo";
        		var arg;
        		var callback = "fn_callBack"
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	};

        	//첨부파일 저장
        	this.fn_saveFile = function(){

        		var sSvcId = "saveFile";
        		//var sUrl = "/pc/pc-prc-sals-dsgn-mng/save-file.do";
        		var sUrl = "/co/file-upload.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_resMap=resMap";
        		var arg;

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

        //트랜잭션 콜백
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){

        		case "commonCodeSearch":
        				this.ds_dispStatsCd.deleteRow(3);
        			break;
        		case "getNewExItemInfo" : //checkResult에 따른 alert 출력
        			var prdSprCd = this.ds_dpDispInfo.getColumn(0,"REPR_PRD_SPR_CD");
        			var bssSalsprc = this.ds_dpDispInfo.getColumn(0,"SSP_BSS_SALSPRC");
        			 if(typeof(bssSalsprc) == "undefined"){

        				//alert("선택한 상품은 기준판매가가 등록되지않은 상품입니다.");
        				this.alert(this.fn_getMessage("ERRP000250"));
        				this.fn_displayInit();

        			}else if(this.ds_dpDispInfo.getColumn(0,"PUB_ONLY_SPR_CD") == 'E'){//전용일 경우

        				//alert("전용상품ID는 입력할 수 없습니다.");
        				this.alert(this.fn_getMessage("ERRP000213"));
        				this.fn_displayInit();

        			}else if(this.ds_dpDispInfo.getColumn(0,"CUST_SPR_CD") != '20'){//전용일 경우

        				//alert("등록할수 없는 사업장입니다.");
        				this.alert(this.fn_getMessage("ERRP000251"));
        				this.fn_displayInit();
        			}else if(prdSprCd == "3"){

        				//alert("피통합상품은 선택할 수 없습니다.");
        				this.alert(this.fn_getMessage("ERRP000214"));
        				this.fn_displayInit();
        			}else{//체크조건 PASS할 경우
        				//값 넣기
        					if(this.ds_salsPrcInfo != null && this.ds_salsPrcInfo.rowcount >0){
        						this.fn_displayGubun(3);
        					}

        			}

        			break;
        		case "savePrcMngInfo" :
        			var  strRtnCd  = this.fn_getDSValue(this.ds_saveReturn.getColumn(0,"rtnCd"));
        			var  strRtnMsg = this.fn_getDSValue(this.ds_saveReturn.getColumn(0,"rtnMsg"));

        			if( strRtnCd == "S") {
        				alert(this.fn_getMessage("ERRS000156"));
        				if(this.ds_forServerOprUnitInfo != undefined && this.ds_forServerOprUnitInfo.rowcount != 0 )
        					this.ds_forServerOprUnitInfo.clearData();
        				if(this.ds_forServerDpDispInfo != undefined && this.ds_forServerDpDispInfo.rowcount != 0 )
        					this.ds_forServerDpDispInfo.clearData();
        				if(this.ds_forServerExItemInfo != undefined && this.ds_forServerExItemInfo.rowcount != 0 )
        					this.ds_forServerExItemInfo.clearData();
        				if(this.ds_savePcPrdPrcDtl != undefined && this.ds_savePcPrdPrcDtl.rowcount != 0 )
        					this.ds_savePcPrdPrcDtl.clearData();
        				if(this.ds_savePcPrdQty != undefined && this.ds_savePcPrdQty.rowcount != 0 )
        					this.ds_savePcPrdQty.clearData();
        				if(this.ds_savePcPrdDlcstDtls != undefined && this.ds_savePcPrdDlcstDtls.rowcount != 0 )
        					this.ds_savePcPrdDlcstDtls.clearData();
        				if(this.ds_saveNewPrdReq != undefined && this.ds_saveNewPrdReq.rowcount != 0 )
        					this.ds_saveNewPrdReq.clearData();

        				//파일삭제
        				if(this.fileDs != null){
        					if(this.fileDs.rowcount > 0) this.fileDs.clearData();
        				}

        				this.strIsNew = "N";
        				this.fn_displayGubun("3");

        				this.fn_showInfo();
        			}
        			else {
        				alert(strRtnMsg);
        				//this.canChangeTabIndex = -1;
        			}
        			break;

        		default:
        			break;
        	}

        };

        //팝업 콜백
        this.fn_popupCallback = function(sPopupId, args){
        		switch(sPopupId) {
        			case "btn_prdIdPopup" :
        				var jsonData = JSON.parse(args);

        				this.Div00.form.edt_prdIdView.set_value(jsonData.PRD_ID_VIEW);
        				//this.Div00.form.edt_prdId.set_value(jsonData.PRD_ID);
        				this.Div00.form.edt_prdNm.set_value(jsonData.PRD_NM);
        				this.prdId = jsonData.PRD_ID;

        				//this.ds_itemInfo.copyData(this.ds_itemInfoInit,true);
        				//transaction해서 DataSet에 데이터 넣기
        				this.checkResult = 'fail';

        				//한번에 정보 출력
        				//this.fn_showInfo();

        				break;
        			case "btn_bzplcIdPopup" :
        				var jsonData = JSON.parse(args);
        				this.Div00.form.edt_bzplcId.set_value(jsonData.BZPLC_ID);
        				this.Div00.form.edt_bzplcNm.set_value(jsonData.BZPLC_NM);

        				//정보 출력목록 초기화
        				//this.ds_dpDispInfo.clearData();

        				//한번에 정보 출력
        				//this.fn_showInfo();

        				break;
        		}
        }

        //파일 업로드 콜백.
        this.fn_fileUploadCallback = function(result) {

        	if( result.code == "success" ) {
        		//문서번호 설정.
        		this.docRegId = result.docRegId;
        		this.ds_dpDispInfo.setColumn(0, "SALS_SALSPRC_ATFL_ID", this.docRegId);
        	}
        	// 수정함수 호출
        	this.fn_saveEvent();
        }



        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("btn_close_onclick");
        	this.fn_regMethodCtrlENTER("fn_showInfo");
        };

        this.fn_makeForServerDpDispInfo = function() {
        	if (!this.fn_didChange(this.ds_dpDispInfo)) {
        		return this.ds_forServerDpDispInfo;
        	}
        	if (this.ds_salsPrcInfo == undefined || this.ds_salsPrcInfo.rowcount == 0)
        	{
        		//this.ds_dpDispInfo.setColumn(0, "RIGHT_NOW", "1");
        	}

        	// 날짜 14자리로 정리함.(이동작 안하면 17자리의 값이 설정됨)
        	if (this.ds_dpDispInfo.rowcount > 0) {
        		var strDtm = this.ds_dpDispInfo.getColumn(0, "SALS_DSGN_SALSPRC_STR_DTM");
        		var endDtm = this.ds_dpDispInfo.getColumn(0, "SALS_DSGN_SALSPRC_END_DTM");
        		strDtm = strDtm.substr(0, 14);
        		endDtm = endDtm.substr(0, 14);
        		this.ds_dpDispInfo.setColumn(0, "SALS_DSGN_SALSPRC_STR_DTM", strDtm);
        		this.ds_dpDispInfo.setColumn(0, "SALS_DSGN_SALSPRC_END_DTM", endDtm);
        	}

        	return this.fn_getSaveDataset(this.ds_dpDispInfo, this.ds_forServerDpDispInfo);
        };

        this.fn_makeForServerExItemInfo = function() {
        	if (!this.fn_didChange(this.ds_salsPrcInfo)) {
        		return this.ds_forServerExItemInfo;
        	}
        	return this.fn_getSaveDataset(this.ds_salsPrcInfo, this.ds_forServerExItemInfo);
        };


        this.fn_saveEvent = function()
        {

        	this.ds_forServerDpDispInfo = this.fn_makeForServerDpDispInfo();
        	this.ds_forServerExItemInfo = this.fn_makeForServerExItemInfo();

        	var  strSave = "";

        	if(this.ds_forServerDpDispInfo != null && this.ds_forServerDpDispInfo.rowcount > 0)
        		strSave =strSave+ " ds_save5=ds_forServerDpDispInfo";
        	if(this.ds_forServerExItemInfo != null && this.ds_forServerExItemInfo.rowcount > 0)
        		strSave =strSave+ " ds_save6=ds_forServerExItemInfo";

        	strSave = nexacro.trim(strSave);
        	//alert("babo is " + strSave);
        	this.fn_save(strSave);
        };

        this.fn_shouldSave = function() {

        	var exItemInfo = this.fn_didChange(this.ds_salsPrcInfo);
        	var dispInfo = this.fn_didChange(this.ds_dpDispInfo);

        	if (exItemInfo || dispInfo)	return true;

        	return false;
        };

        this.fn_displayGubun = function(arg) {
        	if (arg=="1"){ //상세

        		this.displayGubun = 1;

        		this.Div01.form.stc_main.set_text("공용상품 영업지정판매가 상세");
        		this.btn_save.set_visible(false);
        		this.btn_close.set_visible(true);
        		//this.btn_close.set_left(514);
        		this.Div00.form.Div00.form.chk_bssSalsprcRightNow.set_readonly(true);
        		this.Div00.form.btn_prdIdPopup.set_enable(false);
        		this.Div00.form.btn_bzplcIdPopup.set_enable(false);
        		this.Div00.form.btn_search.set_enable(false);
        		this.Div00.form.edt_prdIdView.set_readonly(true);
        		this.Div00.form.edt_bzplcId.set_readonly(true);
        		this.Div00.form.edt_salsprc.set_readonly(true);
        		this.Div00.form.Div00.form.cal_salsprcStrDtm.set_readonly(true);
        		this.Div00.form.edt_rsn.set_readonly(true);
        		this.Div00.form.Div00.form.btn_add1.set_enable(false);
        		this.Div00.form.Div00.form.btn_del1.set_enable(false);




        		this.Div00.form.Div00.form.chk_bssSalsprcUse.set_visible(true);
        		this.Div00.form.Div00.form.chk_bssSalsprcUse.set_readonly(true);
        		this.Div00.form.Div01.form.Button00.set_enable(false);
        		this.Div00.form.Div01.form.grd_file.setFormatColProperty(2,"size",0);

        	}else if(arg == "2"){//등록
        		this.displayGubun = 2;

        	}else if(arg == "3"){//수정
        		this.displayGubun = 3;

        		this.Div01.form.stc_main.set_text("공용상품 영업지정판매가 상세");

        		this.btn_save.set_text("저장");
        		this.btn_save.set_visible(true);
        		this.btn_close.set_visible(true);
        		this.Div00.form.btn_prdIdPopup.set_enable(false);
        		this.Div00.form.btn_bzplcIdPopup.set_enable(false);
        		this.Div00.form.btn_search.set_enable(false);
        		this.Div00.form.edt_prdIdView.set_readonly(true);
        		this.Div00.form.edt_bzplcId.set_readonly(true);
        		this.Div00.form.edt_salsprc.set_readonly(true);
        		this.Div00.form.Div00.form.cal_salsprcStrDtm.set_readonly(true);
        		this.Div00.form.edt_rsn.set_readonly(false);
        		this.Div00.form.Div00.form.chk_bssSalsprcUse.set_readonly(true);
        		this.Div00.form.Div00.form.chk_bssSalsprcRightNow.set_readonly(true);
        		this.Div00.form.edt_rsn.set_readonly(true);
        		this.Div00.form.Div01.form.Button00.set_enable(true);

        		this.Div00.form.Div00.form.chk_bssSalsprcUse.set_visible(true);
        		this.Div00.form.Div00.form.chk_bssSalsprcUse.set_readonly(true);
        		this.Div00.form.Div01.form.Button00.set_enable(false);
        		this.Div00.form.Div01.form.grd_file.setFormatColProperty(2,"size",0);
        	}

        }

        this.fn_userInit = function(prdId, prdNm, bzplcId, bzplcNm, auth, isNew) {
        	this.prdId = prdId;
        	this.prdNm = prdNm;
        	this.bzplcId = bzplcId;
        	this.bzplcNm = bzplcNm;
        	this.strAuth = auth;
        	this.strIsNew = isNew;

        	//auth = 1 (등록), 2(수정), 3(조회)
        	if(auth == 2){
        		this.displayGubun = 3;
        	}else{
        		this.displayGubun = 1;
        	}

        	this.isParent = true;

        	this.Div00.form.edt_prdIdView.set_value(prdId);
        	this.Div00.form.edt_prdNm.set_value(prdNm);
        	this.Div00.form.edt_bzplcId.set_value(bzplcId);
        	this.Div00.form.edt_bzplcNm.set_value(bzplcNm);
        	this.fn_displayGubun(this.displayGubun);
        	this.fn_showInfo();
        	//this.fn_searchExItemInfo();


        };

        this.fn_displayInit = function(){
        	this.ds_search.copyData(this.ds_searchInit);
        	this.ds_dpDispInfo.clearData();
        	this.ds_salsPrcInfo.clearData();
        	this.Div00.form.Div00.form.cal_salsprcStrDtm.set_value(this.fn_today());
        	this.Div00.form.Div00.form.cal_salsprcEndDtm.set_value(99991231);
        	this.Div00.form.edt_pcprc.set_value("");
        	this.Div00.form.edt_prdIdView.set_value("");
        	this.Div00.form.edt_salsprc.set_value("0");
        	this.Div00.form.edt_bzplcNm.set_value("");
        	this.Div00.form.edt_prdNm.set_value("");
        }

        this.fn_today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        }

        this.fn_showInfo = function(){ //사업장, 상품 모두 조회시에만 정보 출력

        	if(this.fn_getDSValue(this.ds_search.getColumn(0,"PRD_ID")) == ""){
        		//alert("상품ID가 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000215"));
        	return false;
        	}
        	if(this.fn_getDSValue(this.ds_search.getColumn(0,"BZPLC_ID")) == ""){
        		//alert("사업장ID가 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000252"));
        		return false;
        	}
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.prdId = this.ds_search.getColumn(0,"PRD_ID");
        	this.prdNm = this.ds_search.getColumn(0,"PRD_NM");
        	this.bzplcId = this.ds_search.getColumn(0,"BZPLC_ID");
        	this.bzplcNm = this.ds_search.getColumn(0,"BZPLC_NM");

        	//조회 transaction
        	this.fn_search();

        }

        this.fn_calcProfit = function(){ // 예상매익율 계산

        	var salsprcVal = this.Div00.form.edt_salsprc.value;
        	var prdPrcVal = this.ds_dpDispInfo.getColumn(0,"MIN_BUY_PRC");
        	var calcResult = 0;
        	if(typeof(salsprcVal) != "undefined" && typeof(prdPrcVal) != "undefined" && salsprcVal != 0){
        		calcResult = (1-(prdPrcVal/salsprcVal))*100
        		this.Div00.form.edt_prfrt.set_value(calcResult.toFixed(2));

        	} else{
        		this.Div00.form.edt_prfrt.set_value(0);
        	}
        }

        this.fn_AmountCommas = function(val){ //세자리마다',' 적용
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
        }


        // 버튼(확장.접기)
        this.btn_extend_onclick = function(obj,e)
        {
        	if(this.bExtend == false)   this.setExtend(true);
            else                        this.setExtend(false);
        };

        this.setExtend = function(bVal)
        {
            if(bVal)
            {
        		this.Div00.form.Div00.form.btn_extend.set_text("∧");
                this.bExtend = true;
                this.fn_changeSearchArea(false);
        		this.fn_changeFileAttachArea(false);
            }
            else
            {
        		this.Div00.form.Div00.form.btn_extend.set_text("∨");
                this.bExtend = false;
                this.fn_changeSearchArea(true);
        		this.fn_changeFileAttachArea(true);
            }
        };

        this.fn_changeSearchArea = function(flag) {
            // 접기
            if (flag == true)	this.Div00.form.Div00.set_height(this.Div00.form.Div00.uMinSize);
            // 펼치기
            else	this.Div00.form.Div00.set_height(this.Div00.form.Div00.uMaxSize);
            this.resetScroll();
        };
        this.fn_changeFileAttachArea = function(flag){

        	if (flag == true){
        		this.Div00.form.stc_hashTag00_00.set_top(294);
        		this.Div00.form.Static03_03_07_01_00.set_top(294);
        		this.Div00.form.Div01.set_top(303);
        	} else {
        		this.Div00.form.stc_hashTag00_00.set_top(447);
        		this.Div00.form.Static03_03_07_01_00.set_top(447);
        		this.Div00.form.Div01.set_top(456);
        	}
            this.resetScroll();
        }

        // 영업지정판매가와 기준판매가 체크박스 관계 검사(기준판매가를 적용하거나, 영업지정판매가를 입력하세요)
        this.fn_checkSalsprcUseAndSalsprc = function() {
        	var checkValue = this.Div00.form.Div00.form.chk_bssSalsprcUse.value;
        	var salsPrc = this.Div00.form.edt_salsprc.value;

        	if (checkValue == "N" && salsPrc <= 0) {
        		return false;
        	}
        	return true;
        };

        this.btn_del1_onclick = function(obj,e)
        {
        	if(this.ds_salsPrcInfo.rowposition == 0) {
        		if (this.ds_salsPrcInfo.getRowType(this.ds_salsPrcInfo.rowposition) != Dataset.ROWTYPE_INSERT &&
        			this.ds_salsPrcInfo.getColumn(this.ds_salsPrcInfo.rowposition, "SALS_DSGN_SALSPRC_STR_DTM") <= this.fn_todayTime()) {
        			//alert("과거이력은 삭제할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000235"));
        			return;
        		}
        		this.ds_salsPrcInfo.deleteRow(this.ds_salsPrcInfo.rowposition);
        	}
        	else {
        		//alert("첫번째 열만 삭제할 수 있습니다.");
        		this.alert(this.fn_getMessage("ERRP000253"));
        	}
        };

        // 영업지정판매가 추가버튼
        this.btn_add1_onclick = function(obj,e)
        {
        	this.fn_enableComponentByAdding(true);
        	this.Div00.form.Div00.form.cal_salsprcStrDtm.set_value(this.fn_todayTime());
        	this.Div00.form.Div00.form.cal_salsprcEndDtm.set_value("99991231235959");
        };

        // 추가버튼 클릭시 컴포넌트 활성화
        this.fn_enableComponentByAdding = function(flag) {
        	if (flag) {

        		this.Div00.form.Div00.form.chk_bssSalsprcUse.set_readonly(false);
        		this.Div00.form.Div00.form.chk_bssSalsprcRightNow.set_readonly(false);
        		this.Div00.form.Div00.form.cal_salsprcStrDtm.set_readonly(false);

        		this.Div00.form.edt_rsn.set_readonly(false);
        		this.Div00.form.Div00.form.chk_bssSalsprcUse.set_value("N");
        		this.Div00.form.Div00.form.chk_bssSalsprcRightNow.set_value("1");
        		this.Div00.form.edt_salsprc.set_value("0");
        		this.Div00.form.edt_salsprc.set_readonly(false);

        		this.Div00.form.Div00.form.chk_bssSalsprcUse.set_readonly(false);
        		this.Div00.form.Div01.form.Button00.set_enable(true);
        		this.Div00.form.Div01.form.grd_file.setFormatColProperty(2,"size",70);
        		this.Div00.form.Div00.form.cal_salsprcStrDtm.set_readonly(true);
        	}

        };

        // ds_dpDispInfo 데이터셋 첫번째 ROW의 상태가 업데이트 상태인지 체크
        this.fn_isRowTypeUpdate = function() {
        	if (this.ds_dpDispInfo.rowcount <= 0)	return false;
        	var rowType = this.ds_dpDispInfo.getRowType(0);

        	if (rowType == Dataset.ROWTYPE_UPDATE)	return true;
        	return false;
        };

        // 저장할 때 "추가"할 데이터의 시작일자(SALS_DSGN_SALSPRC_STR_DTM) 검사
        this.fn_checkSalsprcStrDtm = function() {
        	if (this.strIsNew == "Y")	return true;	// 개별등록인 경우 ds_dpDispInfo에 데이터가 없기 때문에 무조건 true.
        	if (this.ds_salsPrcInfo.rowcount <= 0){

        	}else{

        		// SALS_DSGN_SALSPRC_STR_DTM
        		var strDtm = this.ds_salsPrcInfo.getColumn(0, "SALS_DSGN_SALSPRC_STR_DTM").substr(0, 14);
        		var calSalsprcStrDtm = this.Div00.form.Div00.form.cal_salsprcStrDtm.value.substr(0, 14);

        		if (calSalsprcStrDtm <= strDtm)	return false;
        	}

        	return true;
        };


        this.Div00_btn_bzplcIdPopup_onclick = function(obj,e) //사업장 팝업
        {
        	var params = {coCd : this.fv_coCd};
        	var option = {};
        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_22.xfdl", params, "fn_popupCallback", option);
        };
        this.Div00_btn_prdIdPopup_onclick = function(obj,e) //상품 팝업
        {
        	var params = {coCd : this.fv_coCd, pubOnlySprCd:'P'};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_38.xfdl", params,  "fn_popupCallback", options);
        };

        this.Div00_edt_prdIdView_onkeyup = function(obj,e) // 상품 입력
        {
        	if( e.keycode == 13 ) {
        		this.fn_getCodeName(obj,this.Div00.form.edt_prdNm,"PRD");
        	}
        };

        this.Div00_edt_bzplcId_onkeyup = function(obj,e) // 사업장 입력
        {
        	if( e.keycode == 13 ) {
        		this.fn_getCodeName(obj,this.Div00.form.edt_bzplcNm,"BZPLC");
        	}
        };




        this.btn_close_onclick = function(obj,e) //닫기 버튼
        {
        	if(this.displayGubun == 2){
        		if(this.fn_shouldSave() == false )	{
        			this.close(false);
        			return false;
        		}
        		//var	sReturn = this.confirm("등록을 취소하시겠습니까?");
        		var sReturn = this.confirm(this.fn_getMessage("ERRP000013"));
        		if(!sReturn){
        			return false;
        		}
        		else{
        			this.close(false);
        		}
        	}
        	else{
        		if(this.isParent == false){
        			this.close(false);
        			return false;
        		}
        		if(this.fn_shouldSave() == false )	{
        			this.parent.parent.close(false);
        			return false;
        		}
        		if(this.displayGubun == 3){
        			//var sReturn = this.confirm("수정을 취소하시겠습니까?");
        			var sReturn = this.confirm(this.fn_getMessage("ERRP000226"));
        			if(!sReturn){
        				return false;
        			}
        		}
        		this.parent.parent.close(false);
        	}




        };

        this.btn_save_onclick = function(obj,e) //등록 버튼
        {
        	if(this.ds_search.getColumn(0,"BZPLC_ID") == '' || this.ds_search.getColumn(0,"BZPLC_ID") == undefined){
        		//alert("사업장을 선택해주세요.");
        		this.alert(this.fn_getMessage("ERRP000113"));
        		return false;
        	}
        	if(this.ds_search.getColumn(0,"PRD_ID") == ''){
        		//alert("상품을 선택해주세요.");
        		this.alert(this.fn_getMessage("ERRP000025"));
        		return false;
        	}

        	if (!this.fn_checkSalsprcUseAndSalsprc()) {
        		//alert("기준판매가를 적용하거나, 영업지정판매가를 입력하세요.");
        		this.alert(this.fn_getMessage("ERRP000257"));
        		return;
        	}

        	if(this.fn_shouldSave() == false )	{
        		alert(this.fn_getMessage("ERRS000155"));
        		return;
        	}

        	if (this.fn_isRowTypeUpdate()) {
        		if (!this.fn_checkSalsprcStrDtm()) {
        			//alert("기등록된 이력의 시작일자보다 과거시점을 등록할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000254"));
        			return;
        		}

        		if(this.Div00.form.edt_rsn.value==null || this.Div00.form.edt_rsn.value=='' ){
        			//alert("판매가지정사유를 입력해주세요.");
        			this.alert(this.fn_getMessage("ERRP000117"));
        			return false;
        		}else if(this.Div00.form.edt_rsn.value.length < 5){
        			//alert("판매가지정사유는 5글자 이상이어야합니다.");
        			this.alert(this.fn_getMessage("ERRP000255"));
        			return false;
        		}
        	}

        	if (this.fn_didChange(this.ds_dpDispInfo)) {

        		if (this.ds_dpDispInfo.getColumn(0, "RIGHT_NOW") == "0" &&
        			this.ds_dpDispInfo.getColumn(0, "SALS_DSGN_SALSPRC_STR_DTM").substr(0, 14) <= this.fn_calcToday())
        		{
        			//alert("과거시점을 등록할 수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000256"));
        			return;
        		}

        		var salsPrcValue = this.fn_getDSValue(this.ds_dpDispInfo.getColumn(0, "SALS_DSGN_SALSPRC"));
        		var salsPrcUseYn = this.fn_getDSValue(this.ds_dpDispInfo.getColumn(0, "BSS_SALSPRC_USEYN"));

        		if((salsPrcUseYn == "N" || salsPrcUseYn == "") && (salsPrcValue == "0" || salsPrcValue == ""))
        		{
        			//alert("기준판매가를 적용하거나, 영업지정판매가를 입력하세요.");
        			this.alert(this.fn_getMessage("ERRP000257"));
        			return;
        		}
        	}

        	if(this.ds_salsPrcInfo != null && this.ds_salsPrcInfo.rowcount == 0 && this.strIsNew != "Y" && !this.fn_didChange(this.ds_dpDispInfo)){
        		//alert("영업지정판매가는 최소 1개의 기간은 필수입니다.");
        		this.alert(this.fn_getMessage("ERRP000258"));
        		return;
        	}

        	//이력 모두 삭제후 다시등록시 최초여부 설정
        	if(this.ds_salsPrcInfo.rowcount == 0 && this.fn_didChange(this.ds_dpDispInfo)){
        		this.ds_dpDispInfo.setColumn(0,"FST_HST_YN","Y");
        	}


        	//if( this.confirm("입력된 정보로 등록처리 하시겠습니까?") ){
        	if( this.confirm(this.fn_getMessage("ERRP000032"))){

        		//첨부파일 갯수 체크
        		if( this.fileDs.rowcount > 0 ) {
        			this.fileUpTransfer.upload('/co/file-upload.do');
        		} else {
        			this.fn_saveEvent();
        		}
        	}
        };

        this.Div00_cal_salsprcStrDtm_onchanged = function(obj,e)
        {

        		//시작날짜를 마지막날짜 이후로 선택시 마지막날짜 변경
        		if(e.postvalue > this.Div00.form.Div00.form.cal_salsprcEndDtm.value){
        			this.Div00.form.Div00.form.cal_salsprcEndDtm.set_value(e.postvalue);
        			return true;
        		}
        		//시작날짜를 오늘날짜 이전으로 선택 불가
        		if(e.postvalue < this.fn_today()){
        			this.Div00.form.Div00.form.cal_salsprcStrDtm.set_value(e.prevalue);
        			return true;
        		}
        		if(this.Div00.form.Div00.form.cal_salsprcStrDtm.value > this.fn_calcToday(60, 0, 0)){
        			//alert("영업지정판매가는 60일이후로는 선택할수 없습니다.");
        			this.alert(this.fn_getMessage("ERRP000259"));
        			this.Div00.form.Div00.form.cal_salsprcStrDtm.set_value(e.prevalue);

        			return true;
        		}
        };

        this.Div00_cal_salsprcEndDtm_onchanged = function(obj,e)
        {
        	//마지막날짜를 시작날짜와 오늘날짜 이전으로 선택 불가,
        		if(e.postvalue < this.Div00.form.Div00.form.cal_salsprcStrDtm.value || e.postvalue < this.fn_today()){
        			this.Div00.form.Div00.form.cal_salsprcEndDtm.set_value(e.prevalue);
        			return true;
        		}

        };

        this.Div00_chk_bssSalsprcUse_onchanged = function(obj,e)
        {
        	if(e.postvalue == "Y"){
        		//alert("기준판매가로 가격을 적용합니다.");
        		this.alert(this.fn_getMessage("ERRP000260"));
        		this.Div00.form.edt_salsprc.set_value("0");
        		this.Div00.form.edt_prfrt.set_value(0);
        		this.Div00.form.edt_salsprc.set_readonly(true);
        	} else{
        		this.Div00.form.edt_salsprc.set_readonly(false);

        	}
        };

        this.Div00_btn_salsprcSelect_onclick = function(obj,e)
        {
        	var objParam = {
        			prdId:this.prdId,
        			bzplcId:this.bzplcId
        	};
        	this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_36.xfdl", objParam);
        };


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        //화면 설정 함수
        this.cfn_formInit = function() {
            //search div 초기 설정
        	this.Div00.form.Div00.uMinSize = 48;
        	this.Div00.form.Div00.uMaxSize = 201;
        };



        /***********************************************************************************************
        *  파일첨부 함수 영역
        ************************************************************************************************/




        //초기값 설정
        this.initSetValue = function() {

        	// include ds get
        	this.fileDs = this.Div00.form.Div01.form.ds_files;

        	//파일 트랜스퍼 연결
        	this.fileUpTransfer = this.Div00.form.Div01.form.FileUpTransfer;

        	//부모창 최상위값 연결
        	this.Div00.form.Div01.form.parentForm = this;


        }

        this.Div00_edt_rsn_onkeyup = function(obj,e)
        {
        	//trace("변경사유 문자열길이 : "+obj.getLength());
        };

        this.chk_bssSalsprcRightNow_onchanged = function(obj,e)
        {

        	if (e.postvalue == "1") {
        		this.preSalsDsgnSalsprcStrDtm = this.Div00.form.Div00.form.cal_salsprcStrDtm.value.substr(0, 14);
        		this.Div00.form.Div00.form.cal_salsprcStrDtm.set_value(this.fn_todayTime());
        		this.Div00.form.Div00.form.cal_salsprcStrDtm.set_readonly(true);
        	}
        	else {
        		this.Div00.form.Div00.form.cal_salsprcStrDtm.set_readonly(false);
        		if (!this.gfn_isNull(this.preSalsDsgnSalsprcStrDtm)) {
        			this.Div00.form.Div00.form.cal_salsprcStrDtm.set_value(this.preSalsDsgnSalsprcStrDtm);
        		}
        	}
        };

        this.Div00_edt_prdIdView_onchanged = function(obj,e)
        {
        	this.fn_getCodeName(obj,this.Div00.form.edt_prdNm,"PRD");
        };

        this.Div00_edt_bzplcId_onchanged = function(obj,e)
        {
        	this.fn_getCodeName(obj,this.Div00.form.edt_bzplcNm,"BZPLC");
        };

        this.btn_salsprcSelect00_onclick = function(obj,e)
        {
        	//var sReturn = this.confirm("초기화 하시겠습니까?");
        	var sReturn = this.confirm(this.fn_getMessage("ERRP000227"));
        	if (sReturn) {
        		this.fn_search();
        	}
        };

        this.Div00_edt_salsprc_onchanged = function(obj,e)
        {
        	var splitVal = e.postvalue.split('.');
        	if (splitVal.length == 2) {
        		if (splitVal[1].length > 4) {
        			//alert("올바른 입력방식이 아닙니다.");
        			this.alert(this.fn_getMessage("ERRP000261"));
        			this.Div00.form.edt_salsprc.set_value(splitVal[0]+"."+splitVal[1].substr(0,4));
        			return false;
        		}
        	}
        	if (this.Div00.form.edt_salsprc.set_value < 0) {
        		//alert("음수를 입력할 수 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000238"));
        		this.Div00.form.edt_salsprc.set_value = e.prevalue;
        		return;
        	}
        	//예상매입가 계산
        	//영업지정판매가 변경시
        	this.fn_calcProfit(false);
        };

        this.SSP_BO_CA_33_onkeyup = function(obj,e)
        {
        	// 단축키 등록
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_CA_33_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_CA_33_onkeyup,this);
            this.Div00.form.stc_category.addEventHandler("onclick",this.Div00_stc_category_onclick,this);
            this.Div00.form.edt_prdIdView.addEventHandler("onkeyup",this.Div00_edt_prdIdView_onkeyup,this);
            this.Div00.form.edt_prdIdView.addEventHandler("onchanged",this.Div00_edt_prdIdView_onchanged,this);
            this.Div00.form.btn_prdIdPopup.addEventHandler("onclick",this.Div00_btn_prdIdPopup_onclick,this);
            this.Div00.form.stc_category00.addEventHandler("onclick",this.Div00_stc_category_onclick,this);
            this.Div00.form.stc_hashTag00.addEventHandler("onclick",this.Div00_Static26_03_01_00_02_onclick,this);
            this.Div00.form.edt_bzplcId.addEventHandler("onkeyup",this.Div00_edt_bzplcId_onkeyup,this);
            this.Div00.form.edt_bzplcId.addEventHandler("onchanged",this.Div00_edt_bzplcId_onchanged,this);
            this.Div00.form.btn_bzplcIdPopup.addEventHandler("onclick",this.Div00_btn_bzplcIdPopup_onclick,this);
            this.Div00.form.edt_rsn.addEventHandler("onkeyup",this.Div00_edt_rsn_onkeyup,this);
            this.Div00.form.stc_disRsn00.addEventHandler("onclick",this.Div00_stc_disRsn_onclick,this);
            this.Div00.form.stc_disRsn00_00.addEventHandler("onclick",this.Div00_stc_disRsn00_00_onclick,this);
            this.Div00.form.edt_salsprc.addEventHandler("onchanged",this.Div00_edt_salsprc_onchanged,this);
            this.Div00.form.stc_saftInvnYn00_00.addEventHandler("onclick",this.Div00_stc_saftInvnYn00_onclick,this);
            this.Div00.form.stc_saftInvnYn00_00_00.addEventHandler("onclick",this.Div00_stc_saftInvnYn00_onclick,this);
            this.Div00.form.edt_categoryId.addEventHandler("onkeyup",this.Div00_edt_prdIdView_onkeyup,this);
            this.Div00.form.edt_orgPlcCtryCd.addEventHandler("onkeyup",this.Div00_edt_prdIdView_onkeyup,this);
            this.Div00.form.edt_prdIdView00_00_01.addEventHandler("onkeyup",this.Div00_edt_prdIdView_onkeyup,this);
            this.Div00.form.edt_prdIdView00_00_01_00.addEventHandler("onkeyup",this.Div00_edt_prdIdView_onkeyup,this);
            this.Div00.form.stc_saftInvnYn.addEventHandler("onclick",this.Div00_stc_saftInvnYn_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.fn_showInfo,this);
            this.Div00.form.Div00.form.btn_extend.addEventHandler("onclick",this.btn_extend_onclick,this);
            this.Div00.form.Div00.form.chk_bssSalsprcUse.addEventHandler("onchanged",this.Div00_chk_bssSalsprcUse_onchanged,this);
            this.Div00.form.Div00.form.chk_bssSalsprcUse.addEventHandler("onclick",this.Div00_Div00_chk_bssSalsprcUse_onclick,this);
            this.Div00.form.Div00.form.chk_bssSalsprcRightNow.addEventHandler("onchanged",this.chk_bssSalsprcRightNow_onchanged,this);
            this.Div00.form.Div00.form.cal_salsprcStrDtm.addEventHandler("onchanged",this.Div00_cal_salsprcStrDtm_onchanged,this);
            this.Div00.form.Div00.form.cal_salsprcEndDtm.addEventHandler("onchanged",this.Div00_cal_salsprcEndDtm_onchanged,this);
            this.Div00.form.Div00.form.btn_add1.addEventHandler("onclick",this.btn_add1_onclick,this);
            this.Div00.form.Div00.form.btn_del1.addEventHandler("onclick",this.btn_del1_onclick,this);
            this.Div00.form.stc_hashTag00_00.addEventHandler("onclick",this.Div00_Static26_03_01_00_02_onclick,this);
            this.btn_salsprcSelect.addEventHandler("onclick",this.Div00_btn_salsprcSelect_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_salsprcSelect00.addEventHandler("onclick",this.btn_salsprcSelect00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_33.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
