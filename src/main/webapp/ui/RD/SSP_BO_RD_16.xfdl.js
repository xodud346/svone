(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("R&D 견적요청 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"ATTR_VAL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"REPLY_CPRTCP_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_REQ_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_CPRTCP_CNTA\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ESTM_CPRTCP_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"32\"/><Column id=\"POOL_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_GB\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_NM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_OPR_UNIT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_OPR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_STATS\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CUST_PREQNO\"/><Col id=\"PRD_ID\"/><Col id=\"PRD_NM\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"PSN_ID\"/><Col id=\"PSN_NM\"/><Col id=\"REQ_SBJ_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"CUST_PREQNO_CNT\"/><Col id=\"PRD_ID_CNT\"/><Col id=\"FULL_PRD_NM_YN\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"ESTM_INFO_STATS_CD\"/><Col id=\"ATTR_VAL_LIST\"/><Col id=\"MNFR_NO\"/><Col id=\"MNFR_NO_CNT\"/><Col id=\"MNFR_NM\"/><Col id=\"BZPLC_OPR_UNIT_SPR\"/><Col id=\"BZPLC_OPR_UNIT_CD\"/><Col id=\"BZPLC_OPR_UNIT_NM\"/><Col id=\"BZPLC_ID_CNT\"/><Col id=\"CUST_ID\"/><Col id=\"CUST_NM\"/><Col id=\"ESTM_STATS\"/><Col id=\"CPRTCP_CD\"/><Col id=\"CPRTCP_NM\"/><Col id=\"PSN_TYPE\"/><Col id=\"DT_SPR\"/><Col id=\"OPR_UNIT_ID_CNT\"/><Col id=\"CUST_ID_CNT\"/><Col id=\"MAIN_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageRowCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_NM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_OPR_UNIT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_OPR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_STATS\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CUST_PREQNO\"/><Col id=\"PRD_ID\"/><Col id=\"PRD_NM\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"PSN_ID\"/><Col id=\"PSN_NM\"/><Col id=\"REQ_SBJ_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"CUST_PREQNO_CNT\"/><Col id=\"PRD_ID_CNT\"/><Col id=\"FULL_PRD_NM_YN\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"ESTM_INFO_STATS_CD\"/><Col id=\"ATTR_VAL_LIST\"/><Col id=\"MNFR_NO\"/><Col id=\"MNFR_NO_CNT\"/><Col id=\"MNFR_NM\"/><Col id=\"BZPLC_OPR_UNIT_SPR\"/><Col id=\"BZPLC_OPR_UNIT_CD\"/><Col id=\"BZPLC_OPR_UNIT_NM\"/><Col id=\"BZPLC_ID_CNT\"/><Col id=\"CUST_ID\"/><Col id=\"CUST_NM\"/><Col id=\"ESTM_STATS\"/><Col id=\"CPRTCP_CD\"/><Col id=\"CPRTCP_NM\"/><Col id=\"PSN_TYPE\"/><Col id=\"DT_SPR\"/><Col id=\"OPR_UNIT_ID_CNT\"/><Col id=\"CUST_ID_CNT\"/><Col id=\"MAIN_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delete", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00_01","0","0",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","174",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","211",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","265",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","15",null,"197","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","62",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_02","0","93",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","0","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdId","430","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reqNo","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","0","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_bzplcOprUnit","0","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("사업장·운영단위");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle09","0","93","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("견적상태");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","570","4","232","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","805","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","832","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCd","1000","36","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1110","36","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPopup","1238","36","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_allChk","140","97","55","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("전체");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal1","200","98","51","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("접수");
            obj.set_value("true");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal2","256","98","61","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("견적중");
            obj.set_value("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reqr","860","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("요청자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","860","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","860","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqNo","140","4","262","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reqNoMultiInput","404","5","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","140","35","262","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_maxlength("10");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","430","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","570","35","262","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_maxlength("10");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","1000","5","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","1110","5","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPopup","1238","5","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdMultiInput","1264","5","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrMultiInput","1264","36","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_bzplcOprUnit","140","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("41");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_bzplcOprUnit_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_bzplcOprUnit_innerdataset", obj);
            div_search_form_cmb_bzplcOprUnit_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">사업장</Col><Col id=\"codecolumn\">BZPLC</Col></Row><Row><Col id=\"datacolumn\">운영단위</Col><Col id=\"codecolumn\">OPR_UNIT</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_bzplcOprUnit_innerdataset);
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcOprUnitCd","cmb_bzplcOprUnit:5","67","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcOprUnitNm","edt_bzplcOprUnitCd:5","67","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplcOprUnitPopup","edt_bzplcOprUnitNm:5","67","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","0","124",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00","0","124","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtSpr","140","129","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_dtSpr_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_dtSpr_innerdataset", obj);
            div_search_form_cmb_dtSpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ESTM_REQ_DT</Col><Col id=\"datacolumn\">견적요청일</Col></Row><Row><Col id=\"codecolumn\">FNL_PROC_DT</Col><Col id=\"datacolumn\">최종처리일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_dtSpr_innerdataset);
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","cmb_dtSpr:5","129","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("37");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","cal_reqDtFnlProcDtStr:5","129","10","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("38");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","Static00_02_00:5","129","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("39");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","cal_reqDtFnlProcDtEnd:5","129","96","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("40");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal4","524","98","71","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("42");
            obj.set_text("처리완료");
            obj.set_value("false");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal5","600","98","71","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("43");
            obj.set_text("처리불가");
            obj.set_value("false");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal3","322","98","71","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("44");
            obj.set_text("견적제출");
            obj.set_value("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqrId","1000","67","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("45");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqrNm","1109","67","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("46");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reqrPopup","1237","66","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_cprtcp","860","93","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("48");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpCd","1000","98","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("49");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","1109","98","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("50");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_cprtcpPopup","1237","98","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("51");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chrpsn","731","124","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("52");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_chrpsn","870","129","120","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("53");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_chrpsn_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_chrpsn_innerdataset", obj);
            div_search_form_cmb_chrpsn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">구매담당자</Col><Col id=\"codecolumn\">PURG_CHRPSN</Col></Row><Row><Col id=\"datacolumn\">처리자</Col><Col id=\"codecolumn\">DEALR</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_chrpsn_innerdataset);
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnId","1000","129","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("54");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnNm","1109","129","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("55");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_chrpsnPopup","1237","129","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("56");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"172","60","24","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("58");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"172","60","24","btn_search:4",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal6","398","98","121","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("59");
            obj.set_text("구매정보 등록완료");
            obj.set_value("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","20","795",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","20","733",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","763",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","250","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCont",null,"240","100","24","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"240","110","24","cbo_rowCont:4",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"240","100","24","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"240","100","24","btn_layoutInit:4",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pkgReg",null,"240","80","24","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_estmReqCnc",null,"240","100","24","btn_pkgReg:4",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("견적요청취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_estmReq",null,"240","70","24","btn_estmReqCnc:4",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("견적요청");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","275",null,null,"20","div_paging:33",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_master");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.getSetter("uSortFlag").set("false");
            obj.getSetter("uServerSortFlag").set("false");
            obj.getSetter("uSortCallback").set("fn_sortCallback");
            obj.getSetter("uCellSizeType").set("true");
            obj.set_selecttype("cell");
            obj.set_cellmovingtype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"선택\" displaytype=\"normal\"/><Cell col=\"1\" text=\"고객요청번호\"/><Cell col=\"2\" text=\"견적요청일\"/><Cell col=\"3\" text=\"견적상태\"/><Cell col=\"4\" text=\"상품ID\"/><Cell col=\"5\" text=\"상품명\"/><Cell col=\"6\" text=\"카테고리ID\"/><Cell col=\"7\" text=\"카테고리\" textAlign=\"center\"/><Cell col=\"8\" text=\"대표규격\"/><Cell col=\"9\" text=\"제조원ID\"/><Cell col=\"10\" text=\"제조원\"/><Cell col=\"11\" text=\"사업장ID\"/><Cell col=\"12\" text=\"사업장\"/><Cell col=\"13\" text=\"운영단위ID\"/><Cell col=\"14\" text=\"운영단위\"/><Cell col=\"15\" text=\"요청자ID\"/><Cell col=\"16\" text=\"요청자\"/><Cell col=\"17\" text=\"견적협력사\"/><Cell col=\"18\" text=\"회신협력사\"/><Cell col=\"19\" text=\"구매담당자ID\"/><Cell col=\"20\" text=\"구매담당자\"/><Cell col=\"21\" text=\"처리자ID\"/><Cell col=\"22\" text=\"처리자\"/><Cell col=\"23\" text=\"최종처리일\"/></Band><Band id=\"body\"><Cell textDecoration=\"underline\" color=\"#235da8\" displaytype=\"expr:ESTM_INFO_STATS_CD == &apos;40&apos; || ESTM_INFO_STATS_CD == &apos;50&apos; ? &quot;normal&quot; : &quot;checkboxcontrol&quot;\" text=\"bind:CHK\" edittype=\"expr:ESTM_INFO_STATS_CD == &apos;40&apos; || ESTM_INFO_STATS_CD == &apos;50&apos; ? &quot;none&quot; : &quot;checkbox&quot;\"/><Cell col=\"1\" text=\"bind:CUST_PREQNO\" displaytype=\"normal\" combodataset=\"dsProcSt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" color=\"#235da8\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:ODR_REQ_DTM\" displaytype=\"normal\" combodataset=\"dsReqDiv\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:ESTM_INFO_STATS_NM\"/><Cell col=\"4\" text=\"bind:PRD_ID\"/><Cell col=\"5\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRD_CLCD\"/><Cell col=\"7\" text=\"bind:PRD_CLCD_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:ATTR_VAL_LIST\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:MNFR_NO\"/><Cell col=\"10\" text=\"bind:MNFR_NM\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:BZPLC_ID\"/><Cell col=\"12\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"14\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:CUST_ID\"/><Cell col=\"16\" text=\"bind:MBR_NM\"/><Cell col=\"17\" text=\"bind:ESTM_CPRTCP_CNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:REPLY_CPRTCP_CNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:PURG_CHRPSN_ID\"/><Cell col=\"20\" text=\"bind:PURG_CHRPSN_NM\"/><Cell col=\"21\" text=\"bind:UPDPSN_ID\"/><Cell col=\"22\" text=\"bind:UPDPSN_NM\"/><Cell col=\"23\" text=\"bind:UPD_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_fullPrdNmYn","430","51","13","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,1260,this,function(p){});
            obj.set_description("R&D 견적요청 목록");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbo_rowCont","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_reqNo","value","ds_search","CUST_PREQNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_prdClNm","value","ds_search","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_reprSpec","value","ds_search","ATTR_VAL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.edt_mnfrCd","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.edt_mnfrNm","value","ds_search","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.cmb_bzplcOprUnit","value","ds_search","BZPLC_OPR_UNIT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.edt_bzplcOprUnitCd","value","ds_search","BZPLC_OPR_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.edt_bzplcOprUnitNm","value","ds_search","BZPLC_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.edt_reqrId","value","ds_search","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.edt_reqrNm","value","ds_search","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.edt_cprtcpCd","value","ds_search","CPRTCP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.edt_cprtcpNm","value","ds_search","CPRTCP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_search.form.cmb_dtSpr","value","ds_search","DT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.cmb_chrpsn","value","ds_search","PSN_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_search.form.edt_chrpsnId","value","ds_search","PSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_search.form.edt_chrpsnNm","value","ds_search","PSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","chk_fullPrdNmYn","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
            this._addPreloadList("data","","ds_master");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_16.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_16.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_16.xfdl(R&D 협력사 견적요청 관리)
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/06/16
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.fv_oApp                = nexacro.getApplication();	//application object
        this.lv_pageViewCnt 		= 10000;
        this.div_paging.uPage       = 1;
        this.div_paging.uPageNum    = 0;
        this.div_paging.uPageRowCnt = 10;
        this.div_paging.uPageCnt    = 0;
        this.div_paging.uTotCount   = 0;
        this.totalCount             = 0;
        this.formId                 = this.fn_getFormId(this);           // 등록한 폼의 아디을 기지고 오는 함수

        this.lv_coCd                = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lv_empNo               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"EMP_NO"),"");
        this.lv_empNm               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"OPRTR_NM"),"");
        this.lvchkColidDs           = "CLASS_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs         = "설명";
        this.strKeyValue            = "";
        this.lvGetDate              = "";
        this.lv_btnChkYn            = "";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            //개인화 함수처리
        	this.fn_setInitPersonalization(this,this.grd_list,"true","true");	//this.uGridList폼에사용자 함수/uRightMouse/uPersonalFlag
        	//폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnLoad(this);
            // 로컬 로그인 사용 않할시
        	this.fn_setLocalUserCreate(true);
        	//사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "ds_dateUnitCombo|ds_pageRowCd|ds_rndPrdAuthCombo";         // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "INQ_PERD_SPR_CD|PAGE_ROW_CD|CHRPSN_TEAM_SPR_CD";           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|X";  					                               // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                           					           // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // fn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

        this.fn_PostformInit = function()
        {
            this.lvGetDate = this.fn_getSvrDate();             // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.

        	// RND화면권한제어 호출
        	this.fn_setRndUiAuthCtl();

           	this.fn_setResetBtnCall();

        	this.fn_todoSearch();
        };
        this.fn_todoSearch = function() {
        	var oArgs = this.getOwnerFrame().arguments["oArgs"];
        	if (oArgs && oArgs.TODO === "Y") {
        		this.div_search.form["chkVal2"].set_value(true);
        		if (oArgs.ID) this.ds_search.setColumn(0, "PSN_ID", oArgs.ID);
        		if (oArgs.NN) this.div_search.form.edt_chrpsnNm.set_value(oArgs.NM);
        		if (oArgs.DTM) {

        			if(oArgs.DTM == 1) this.div_search.form.cmb_dtUnit.set_index(5); // 1: 3개월, 2: 전체
        			else this.div_search.form.cmb_dtUnit.set_index(0);

        			this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr
        			   ,this.div_search.form.cal_reqDtFnlProcDtEnd
        			   ,this.div_search.form.cmb_dtUnit);
        		}
        		this.div_search.form.btn_search.click();
        	}
        }
        /**
         * RND화면권한제어
         */
        this.fn_setRndUiAuthCtl = function()
        {
        	var strRndPrdAuth = this.ds_rndPrdAuthCombo.findRowExpr("COM_DTL_CD == '" + this.lv_orgCd + "' && USE_YN == 'Y'");

        	// RND상품담당권한 슈퍼 조직인 경우
        	if(strRndPrdAuth != -1 && this.ds_rndPrdAuthCombo.getColumn(strRndPrdAuth,"COM_USR_DEFN_NM_1") == "S")
        	{
        		this.lv_btnChkYn = "P";
        	}
        	else
        	{
        		// RND상품권한조회 구매담당자 정/부 체크
        		this.fn_getRndPrdAuthInq();

        		if(!this.gfn_isNull(this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD")))
        		{
        			this.lv_btnChkYn = this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD") == "30" ? "Y" : "N";
        		}
        	}

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.btn_estmReq.set_visible(false);	// 견적요청 버튼 숨김
        		this.btn_estmReqCnc.set_visible(false);	// 견적요청취소 버튼 숨김
        		this.btn_pkgReg.set_visible(false);		// 일괄등록
        	}
        };

        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
        	this.lv_pageViewCnt = this.fn_setInitPageCnt(this.ds_pageRowCd,this.lv_pageViewCnt);
        	this.ds_master.clearData();
            this.ds_search.clearData();
            var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow,"DT_SPR",            "ESTM_REQ_DT");        // 기간구분
        	this.ds_search.setColumn(nRow,"PSN_TYPE",          "PURG_CHRPSN");        // 담당자구분
            this.ds_search.setColumn(nRow,"BZPLC_OPR_UNIT_SPR","BZPLC");              // 사업장·운영단위 구분 초기화
            this.ds_search.setColumn(nRow,"PSN_ID",            this.lv_empNo);        // 로그인사번
            this.ds_search.setColumn(nRow,"PSN_NM",            this.lv_empNm);        // 로그인명
            this.ds_search.setColumn(nRow,"ROW_COUNT",         this.lv_pageViewCnt);  // 현재 레코드 초기화셋팅
            this.div_paging.reload();
        	this.fn_pageCallback();

        	// 견적상태 초기화 Set
        	for(var idx=1; idx<=6; idx++)
        	{
        		this.div_search.form["chkVal"+idx].set_value(false);

        // 		if(idx == 1)
        // 		{
        // 			this.div_search.form["chkVal"+idx].set_value(true);
        // 		}
        		this.div_search.form["chkVal1"].set_value(true);
        		this.div_search.form["chkVal3"].set_value(true);
        		this.div_search.form["chkVal6"].set_value(true);


        		this.div_search_chkVal_onchanged(this.div_search.form["chkVal"+idx],new nexacro.CheckBoxChangedEventInfo());
        	}

            // 일자 날짜 초기화 Setting
            this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr
                                   ,this.div_search.form.cal_reqDtFnlProcDtEnd
                                   ,this.div_search.form.cmb_dtUnit);

            // Multi검색조회 데이터 존재시 초기화
            this.fn_deleteMultiData("fn_callBack");
        }

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            if(nErrorCode != 0)
            {
                this.fn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }
        	else
            {
                switch(sSvcId)
                {
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "Save":
        					this.fn_PostSave();
        				break;
                    case "insertMultiData" :
                            this.fn_Ret(true);
                        break;
                    case "deleteMultiData" :
                            this.ds_select.deleteAll();
                        break;
                    default:
                        break;
                }
            }
        };

        /**
         * 기능 : 팝업 종료후 dsDummy Copy
         */
        this.fn_dsChildCopydsDummy = function(ds)
        {
            this.dsDummy.clearData();
            this.dsDummy.copyData(ds);
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
            switch(strId)
            {
                // 요청번호 멀티입력팝업 후처리
         		case "btn_reqNoMultiInput" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_reqNo.set_value(jsonData.textValue);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 상품ID 조회팝업 후처리
        		case "btn_prdIdMultiPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					var prdId = new Array();
        					for(var i=0; i<jsonData.length;i++)
        					{
        						var jsonSubData = JSON.parse(jsonData[i]);
        						prdId.push(jsonSubData.PRD_ID_VIEW.replace(/,\s*$/, ""));
        					}
        					this.div_search.form.edt_prdId.set_value(prdId);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 상품ID 멀티입력팝업 후처리
        		case "btn_prdIdMultiInput" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_prdId.set_value(jsonData.textValue);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			 break;
        		// 카테고리 조회팝업 후처리
        		case "btn_prdClcdPopup" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_prdClcd.set_value(jsonData.PRD_CLCD.replace(/,\s*$/, ""));
        				this.div_search.form.edt_prdClNm.set_value(jsonData.PRD_CLSF_NM.replace(/,\s*$/, ""));
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
         		// 카테고리 멀티입력팝업 후처리
         		case "btn_prdClcdMultiInput" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_prdClcd.set_value(jsonData.textValue);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 상품명 멀티입력팝업 후처리
         		case "btn_prdNmMultiInput" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_prdNm.set_value(jsonData.textValue);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 제조원 조회팝업 후처리
        		case "btn_mnfrPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_mnfrCd.set_value(jsonData.MNFR_NO.replace(/,\s*$/, ""));
        					this.div_search.form.edt_mnfrNm.set_value(jsonData.MNFR_NM.replace(/,\s*$/, ""));
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 제조원 멀티입력팝업 후처리
        		case "btn_mnfrMultiInput" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_mnfrCd.set_value(jsonData.textValue);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		case "btn_bzplcOprUnitPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					var bzplcOprUnitCd = new Array();
        					var bzplcOprUnitNm = new Array();
        					var bzplcOprUnit = this.div_search.form.cmb_bzplcOprUnit.value;
        					for(var i=0; i<jsonData.length;i++)
        					{
        						var jsonSubData = JSON.parse(jsonData[i]);
        						if ( bzplcOprUnit == "BZPLC" )
        						{
        							bzplcOprUnitCd.push(jsonSubData.BZPLC_ID.replace(/,\s*$/, ""));
        							bzplcOprUnitNm.push(jsonSubData.BZPLC_NM.replace(/,\s*$/, ""));
        						} else
        						{
        							bzplcOprUnitCd.push(jsonSubData.OPR_UNIT_ID.replace(/,\s*$/, ""));
        							bzplcOprUnitNm.push(jsonSubData.OPR_UNIT_NM.replace(/,\s*$/, ""));
        						}
        					}
        					this.div_search.form.edt_bzplcOprUnitCd.set_value(bzplcOprUnitCd);
        					this.div_search.form.edt_bzplcOprUnitNm.set_value(bzplcOprUnitNm);
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        			break;
        		// 요청자 멀티조회팝업 후처리
        		case "btn_reqrPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData 	= JSON.parse(strVal);
        					var reqrId 		= new Array();
        					var reqrNm 		= new Array();
        					for(var i=0; i<jsonData.length;i++)
        					{
        						var jsonSubData = JSON.parse(jsonData[i]);
        						reqrId.push(jsonSubData.MBR_ID.replace(/,\s*$/, ""))
        						reqrNm.push(jsonSubData.MBR_NM.replace(/,\s*$/, ""))
        					}
        					this.div_search.form.edt_reqrId.set_value(reqrId);
        					this.div_search.form.edt_reqrNm.set_value(reqrNm);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 협력사 조회팝업 후처리
        		case "btn_cprtcpPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_cprtcpCd.set_value(jsonData.CPRTCP_ID.replace(/,\s*$/, ""));
        					this.div_search.form.edt_cprtcpNm.set_value(jsonData.CPRTCP_KOR_NM.replace(/,\s*$/, ""));
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 담당자 조회팝업 후처리
        		case "btn_chrpsnPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_chrpsnId.set_value(jsonData.OPRTR_ID.replace(/,\s*$/, ""));
        					this.div_search.form.edt_chrpsnNm.set_value(jsonData.OPRTR_NM.replace(/,\s*$/, ""));
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// R&D협력사견적요청관리 상세 팝업 저장후 처리
        		case "SSP_BO_RD_17" :
        		     if(!this.gfn_isNull(strVal))
        			 {
        			     if(strVal == "SAVE")
        				 {
        				  	 // 저장후 리스트 재조회
        					 this.fn_Ret(true);
        				 }
        			 }
        		     break;
                default:
                    break;
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 버튼 클릭시
         */
        this.btn_search_onclick = function(obj,e)
        {
            // 멀티입력 검색조건 Set
        	this.fn_setMultiSearch(this.formId,"CUST_PREQNO",      this.ds_search.getColumn(0,"CUST_PREQNO"));              // 요청번호
        	this.fn_setMultiSearch(this.formId,"PRD_ID",           this.ds_search.getColumn(0,"PRD_ID"));                   // 상품ID
        	this.fn_setMultiSearch(this.formId,"PRD_CLCD",         this.ds_search.getColumn(0,"PRD_CLCD"));                 // 카테고리
        	this.fn_setMultiSearch(this.formId,"MNFR_NO",          this.ds_search.getColumn(0,"MNFR_NO"));                  // 제조원
        	this.fn_setMultiSearch(this.formId,"CUST_ID",          this.ds_search.getColumn(0,"CUST_ID"));                  // 요청자
        	var bzplcOprUnit = this.div_search.form.cmb_bzplcOprUnit.value;

        	if( bzplcOprUnit == "BZPLC" )
        	{
        		// 사업장
        	    this.fn_setMultiSearch(this.formId,"BZPLC_ID",   this.ds_search.getColumn(0,"BZPLC_OPR_UNIT_CD"));
        		this.fn_setMultiSearch(this.formId,"OPR_UNIT_ID","");
        	}
        	else
        	{
        		// 운영단위
        	    this.fn_setMultiSearch(this.formId,"OPR_UNIT_ID",this.ds_search.getColumn(0,"BZPLC_OPR_UNIT_CD"));
        		this.fn_setMultiSearch(this.formId,"BZPLC_ID",   "");
        	}

            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0)
            {
                this.fn_insertMultiData("fn_callBack");
            }else
            {
                this.fn_Ret(true);
            }
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function(page)
        {
        	// 일자 체크
        	if(!this.fn_getDefaultDateChk(this.div_search.form.cal_reqDtFnlProcDtStr
        	                             ,this.div_search.form.cal_reqDtFnlProcDtEnd
        								 ,this.div_search.form.cmb_dtSpr.text))
        	{
        		return false;
        	}

        	if(page)
        	{
                var oPaging = this.div_paging;
                oPaging.uPage    = 1;
                oPaging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM",    0);
                this.ds_search.setColumn(0,"SORT_TYPE",    "");
                this.ds_search.setColumn(0,"INQ_COND_DTLS",this.formId);
                this.ds_search.setColumn(0,"CO_CD",        this.lv_coCd);
                this.ds_search.setColumn(0,"TOTAL_COUNT",  this.totalCount);
        		this.lv_pageViewCnt = this.ds_search.getColumn(0,"ROW_COUNT");

        		// page 처리시 기존 조회조건 검색을 위한 데이터 카피
        		this.ds_searchTemp.copyData(this.ds_search);
            }

            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(page)
        {
            if(!this.fn_PreRet(page))
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/rd/cprtcp-estm-req-mng/select-cprtcp-estm-req-mng.do";
            var strInDs     = "ds_search=ds_searchTemp";
            var strOutDs    = "ds_master=ds_master";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.lv_pageViewCnt,"fn_pageCallback");
        };
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 견적요청 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_estmReq_onclick = function(obj,e)
        {
        	if (this.ds_master.findRow("CHK", "1") == -1) {
        		this.fn_alert("ERRR000011", "저장정보", "", "question"); // 선택된 값이 없습니다
        		return false;
        	}

        	for (var idx = 0; idx < this.ds_master.getRowCount(); idx++) {
        		var strChk             = this.ds_master.getColumn(idx, "CHK");					// 체크박스 선택 여부
        		var strEstmInfoStatsCd = this.ds_master.getColumn(idx,"ESTM_INFO_STATS_CD");	// 견적요청 상태 코드

        		if (strChk && strEstmInfoStatsCd != "10") {
        			this.fn_alert("ERRR000201","저장정보","","question"); // 견적상태가 접수 상태인 경우에만 견적요청을 진행 하실수 있습니다.
        			return false;
        		}

        		// sg.park SSP-1572 > SSP-1299 [BO 견적요청 목록] 협력사정보가 없이 견적요청이 가능한 오류
        		var iCPRTCP_CNT = this.ds_master.getColumn(idx, 'ESTM_CPRTCP_CNTA') + this.ds_master.getColumn(idx, 'REPLY_CPRTCP_CNT') + this.ds_master.getColumn(idx, 'POOL_CNT');  // 견적협력사 + 회신협력사
        		if (strChk == 1 && (iCPRTCP_CNT == undefined || iCPRTCP_CNT < 1)) {
        			alert('협력사가 확인되지 않아 견적요청이 불가 합니다.');
        			return false;
        		}
        	}

        	var result = this.fn_confirm("ERRR000200", "저장정보","견적요청","question" );    // 선택한 건들을 모두 &1 처리 하시겠습니까?
        	if (result == 0) {
        	   return false;
        	}

        	this.ds_input.clearData();

        	for (var idx = 0; idx < this.ds_master.getRowCount(); idx++) {
        		if (this.ds_master.getColumn(idx,"CHK") == "1") {
        			var nRow = this.ds_input.addRow();
        			this.ds_input.setColumn(nRow,"CHK",        this.ds_master.getColumn(idx, "CHK"));
        			this.ds_input.setColumn(nRow,"CO_CD",      this.ds_master.getColumn(idx, "CO_CD"));
        			this.ds_input.setColumn(nRow,"CUST_PREQNO",this.ds_master.getColumn(idx, "CUST_PREQNO"));
        			this.ds_input.setColumn(nRow,"CPRTCP_ID",  "*");
        			this.ds_input.setColumn(nRow,"EXISTS_YN",  "");
        			this.ds_input.setColumn(nRow,"CO_GB",      "10");
        		}
        	}

        	this.fn_Save();
        };

        /**
         * 견적요청취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_estmReqCnc_onclick = function(obj,e)
        {
        	if(this.ds_master.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	for(var idx=0; idx<this.ds_master.getRowCount(); idx++)
        	{
        		var strChk             = this.ds_master.getColumn(idx,"CHK");
        		var strEstmInfoStatsCd = this.ds_master.getColumn(idx,"ESTM_INFO_STATS_CD");

        		if(strChk && (strEstmInfoStatsCd != "20" && strEstmInfoStatsCd != "30"))
        		{
        			this.fn_alert("ERRR000202","저장정보","","question"); // 견적상태가 견적중 & 견적제출 상태인 경우에만 견적요청취소를 진행 하실수 있습니다.
        			return false;
        		}
        	}

        	var result = this.fn_confirm("ERRR000200", "저장정보","견적요청 취소","question" );    // 선택한 건들을 모두 &1 처리 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	for(var idx=0; idx<this.ds_master.getRowCount(); idx++)
        	{
        		if(this.ds_master.getColumn(idx,"CHK") == "1")
        		{
        			var nRow = this.ds_input.addRow();
        			this.ds_input.setColumn(nRow,"CHK",        this.ds_master.getColumn(idx,"CHK"));
        			this.ds_input.setColumn(nRow,"CO_CD",      this.ds_master.getColumn(idx,"CO_CD"));
        			this.ds_input.setColumn(nRow,"CUST_PREQNO",this.ds_master.getColumn(idx,"CUST_PREQNO"));
        			this.ds_input.setColumn(nRow,"CPRTCP_ID",  "*");
        			this.ds_input.setColumn(nRow,"EXISTS_YN",  "");
        			this.ds_input.setColumn(nRow,"CO_GB",      "20");
        		}
        	}

        	this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	this.ds_searchTemp.setColumn(0,"MAIN_GUBUN", "Y");
            return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/rd/cprtcp-estm-req-mng/save-cprtcp-estm-stats-dtls-stor.do";
            var strInDs     = "ds_search=ds_searchTemp:a";
                strInDs    += " ds_input=ds_input:u";
        		strInDs    += " ds_delete=ds_delete:u";
        		strInDs    += " ds_master=ds_master:u";
            var strOutDs    = "ds_master=ds_master";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.lv_pageViewCnt,"fn_pageCallback");
        };
        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**
        * 초기화 버튼 클릭시 onclick 이벤트 발생 처리
        */
        this.div_search_btn_init_onclick = function(obj,e)
        {
            // 초기화 호출
            this.fn_setResetBtnCall();
        };
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**
        * 엑셀다운로드 버튼 클릭시 onclick 이벤트 발생 처리
        */
        this.btn_excelDown_onclick = function(obj,e)
        {
            this.fn_Excel();
        };

        this.fn_Excel = function()
        {
            if(this.ds_master.rowcount < 1)
            {
                this.fn_alert("ERRS000202", "EXCEL 정보" ,"","information");              // 엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.
                return false;
            }

            var result = this.fn_confirm( "ERRR000168", "EXCEL 출력","EXCEL","question" );    // Excel를 출력하시겠습니까?

        	if(result == 0)
            {
               return false;
            }

            this.gfn_excelExport(this.grd_list, "R&D 협력사 견적요청 관리","R&D 협력사 견적요청 관리", null, null, "SSP_BO_RD_16_01");
        };
        /**********************************************************************
                12_1. 개인화 이벤트처리
        ***********************************************************************/
        /*
         * 헤드팝업 크로즈 할때 처리
         */
        this.cfn_personalPopupClose = function(sRet)
        {
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        /*
         * 개인화 저장처리
         */
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        /*
         * 개인화 초기화
         */
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         * 마스터 그리드 셀 클릭시 oncellclick 이벤트 발생 처리
         */
        this.grd_list_oncellclick = function(obj,e)
        {
        	if(obj.getBindCellIndex("body","CHK") == e.cell)
        	{
        		var strEstmInfoStatsCd = this.ds_master.getColumn(e.row,"ESTM_INFO_STATS_CD");

        		if(strEstmInfoStatsCd == "40" || strEstmInfoStatsCd == "50")
        		{
        			this.ds_master.setColumn(idx,"CHK","");
        			return false;
        		}
        	}
        };

        /**
         * 메인 그리드 셀 더블 클릭시 이벤트 발생 처리
         */
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var strCocd       = this.ds_master.getColumn(e.row,"CO_CD");
        	var strCustPreqno = this.ds_master.getColumn(e.row,"CUST_PREQNO");

        	// 고객요청번호 더블 클릭시 이벤트 발생 처리
        	if(e.cell == obj.getBindCellIndex("body","CUST_PREQNO"))
        	{
        		var params = { coCd       : strCocd           // 회사코드
        		             , custPreqno : strCustPreqno     // 고객요청번호
        					 , autoSearch : "Y"
        					 };

        		this.fn_setCallPopup(params);
        	}
        };

        /**
         * 그리드 상단 Sort 처리
         */
        this.fn_sortCallback = function(sGridId)
        {
            var oGrid = null;

            if(sGridId == "grd_list")
            {
        		if(this.ds_master.getRowCount() > 0)
        		{
        			var oSortInfo = this.grd_list.uaSortInfo;
        			this.ds_searchTemp.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.ds_searchTemp.setColumn(0,"SORT_TYPE",  oSortInfo.status);
        			this.fn_Ret(false);
        		}
            }
        };

        /**
         * 그리드 하단 페이지 처리
         */
        this.fn_pageCallback = function(sFlag)
        {
            var oPaging = this.div_paging;

            if(sFlag)
            {
                this.ds_searchTemp.setColumn(0,"START_NUM",oPaging.uPageNum);
                this.ds_searchTemp.setColumn(0,"ROW_COUNT",this.lv_pageViewCnt);
                this.fn_Ret(false);
            }

            var sTotText = "(<b v='true'>총 "+ oPaging.form.fv_nTotRowCount+"건 </b><fc v='red'>"+ (oPaging.form.fv_nPageCnt == 0 ? 0 : oPaging.form.fv_nPage) +"</fc> / "+ oPaging.form.fv_nPageCnt +")";
            this.totalPageCount.set_text(sTotText);
        };

        /**
         * 조회조건 요청번호 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_reqNoMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_reqNo };
            var options = { title  : this.div_search.form.stc_reqNo.text };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 상품ID 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdIdMultiPopup_onclick = function(obj,e)
        {
        	var params  = { pubOnlySprCd : "P", coCd : this.lv_coCd, mallSprCd: '20' }; // 2022.10.18 sg.park SSP-1572 > SSP-279 조회조건 상품ID 검색 팝업 오류
            var options = { title        : this.div_search.form.stc_prdId.text };

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 상품ID 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdIdMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdId };
            var options = { title  : this.div_search.form.stc_prdId.text };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 카테고리 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdClcdPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_prdClcd.value);
        	this.fn_setCallPopup1(sCodeId);
        };

        /**
         * 조회조건 카테고리 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdClcdMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdClcd };
            var options = { title  : this.div_search.form.stc_prdClcd.text };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 카테고리 Edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_prdClcd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_prdClNm.set_value("");
        	}
        };

        /**
         * 조회조건 카테고리 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_prdClcd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_prdClcd.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup1(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup1 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",      this.lv_coCd);
        		this.ds_input.setColumn(nRow,"PRD_CLCD",   sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD","20");
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-category-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=ds_list";                               // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    									// 공백일시 기본 fn_callBack
        		var strASync    = false;												// 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.div_search.form.edt_prdClcd.set_value(this.ds_popupList.getColumn(0,"PRD_CLCD"));
        		this.div_search.form.edt_prdClNm.set_value(this.ds_popupList.getColumn(0,"PRD_CLSF_NM"));
        	}
        	else
        	{
        		var params  = { mallSprCd : "20"
        					  , coCd      : this.lv_coCd
        					  , prdClcd   : sCodeId
        					  };

        		var options = { title  : this.div_search.form.stc_prdClcd.text };

        		this.gfn_openPopup("btn_prdClcdPopup", "PR_POP::SSP_BO_PP_10.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 상품명 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdNmMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdNm };
            var options = { title  : this.div_search.form.stc_prdNm.text };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 제조원 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_mnfrPopup_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_mnfrCd, coCd : this.lv_coCd };
        	var options = { title  : this.div_search.form.stc_mnfr.text };
        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_08.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 제조원 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_mnfrMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_mnfrCd };
        	var options = { title  : this.div_search.form.stc_mnfr.text };
        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 제조원 Edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_mnfrCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_mnfrNm.set_value("");
        	}
        };

        /**
         * 조회조건 제조원 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_mnfrCd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_mnfrCd.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup3(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup3 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",     this.lv_coCd);
        		this.ds_input.setColumn(nRow,"MNFR_NO",   sCodeId);
        		this.ds_input.setColumn(nRow,"START_NUM", "0");
        		this.ds_input.setColumn(nRow,"ROW_COUNT", 1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-manufacturer-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=manufacturerList";                      // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    									// 공백일시 기본 fn_callBack
        		var strASync    = false;												// 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.div_search.form.edt_mnfrCd.set_value(this.ds_popupList.getColumn(0,"MNFR_NO"));
        		this.div_search.form.edt_mnfrNm.set_value(this.ds_popupList.getColumn(0,"MNFR_NM"));
        	}
        	else
        	{
        		var params  = { mnfrNo : sCodeId, coCd : this.lv_coCd };
        		var options = { title  : this.div_search.form.stc_mnfr.text };

        		this.gfn_openPopup("btn_mnfrPopup", "PR_POP::SSP_BO_PP_08.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 사업장·운영단위 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_bzplcOprUnitPopup_onclick = function(obj,e)
        {
        	var params  = { coCd  : this.lv_coCd };
        	var options = { title : this.div_search.form.cmb_bzplcOprUnit.text };

        	var bzplcOprUnit = this.div_search.form.cmb_bzplcOprUnit.value;

        	if( bzplcOprUnit == "BZPLC" )
        	{
        		// 사업장
        	    this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", params, "fn_popupCallback", options);
        	}
        	else
        	{
        		// 운영단위
        	    this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 요청자 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_reqrPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_reqrId.value);
        	this.fn_setCallPopup5(sCodeId);
        };

        /**
         * 조회조건 요청자 Edit 값 변경시 이벤트 발생 처리
         */
        this.div_search_edt_reqrId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_reqrNm.set_value("");
        	}
        };

        /**
         * 조회조건 구매담당자 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_reqrId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_reqrId.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup5(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup5 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",     this.lv_coCd);
        		this.ds_input.setColumn(nRow,"MBR_ID",    sCodeId);
        		this.ds_input.setColumn(nRow,"START_NUM", "0");
        		this.ds_input.setColumn(nRow,"ROW_COUNT", 1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/co/popup/select-client-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=ds_output1";                            // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    									// 공백일시 기본 fn_callBack
        		var strASync    = false;												// 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.div_search.form.edt_reqrId.set_value(this.ds_popupList.getColumn(0,"MBR_ID"));
        		this.div_search.form.edt_reqrNm.set_value(this.ds_popupList.getColumn(0,"MBR_NM"));
        	}
        	else
        	{
        		var params  = { coCd  : this.lv_coCd };
        		var options = { title : this.div_search.form.stc_reqr.text };

        		this.gfn_openPopup("btn_reqrPopup", "CO_POP::SSP_BO_PP_25.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 협력사 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_cprtcpPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_cprtcpCd.value);
        	this.fn_setCallPopup4(sCodeId);
        };

        /**
         * 조회조건 협력사 Edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_cprtcpCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_cprtcpNm.set_value("");
        	}
        };

        /**
         * 조회조건 협력사 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_cprtcpCd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_cprtcpCd.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup4(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup4 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",     this.lv_coCd);
        		this.ds_input.setColumn(nRow,"CPRTCP_ID", sCodeId);
        		this.ds_input.setColumn(nRow,"START_NUM", "0");
        		this.ds_input.setColumn(nRow,"ROW_COUNT", 1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pp/ppcprtcpInqPopup/selectPpcprtcpInqPopuplst.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=manufacturerList";                      // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    									// 공백일시 기본 fn_callBack
        		var strASync    = false;												// 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.div_search.form.edt_cprtcpCd.set_value(this.ds_popupList.getColumn(0,"CPRTCP_ID"));
        		this.div_search.form.edt_cprtcpNm.set_value(this.ds_popupList.getColumn(0,"CPRTCP_KOR_NM"));
        	}
        	else
        	{
        		var params  = { cprtcpId : sCodeId, coCd : this.lv_coCd };
        		var options = { title  : this.div_search.form.stc_cprtcp.text };

        		this.gfn_openPopup("btn_cprtcpPopup", "PP_POP::SSP_BO_PP_41.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 담당자 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_chrpsnPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_chrpsnId.value);
        	this.fn_setCallPopup02(sCodeId);
        };

        /**
         * 조회조건 구매담당자 Edit 값 변경시 이벤트 발생 처리
         */
        this.div_search_edt_chrpsnId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_chrpsnNm.set_value("");
        	}
        };

        /**
         * 조회조건 구매담당자 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_chrpsnId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_chrpsnId.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup02(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup02 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"EMP_NO",   sCodeId);
        		this.ds_input.setColumn(nRow,"CO_CD",	 this.coCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/co/popup/select-operator-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                        // 물리적 생성 ds_search
        		var strOutDs 	= "ds_popupList=ds_output1";                   // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    					       // 공백일시 기본 fn_callBack
        		var strASync    = false;								       // 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.div_search.form.edt_chrpsnId.set_value(this.ds_popupList.getColumn(0,"EMP_NO"));
        		this.div_search.form.edt_chrpsnNm.set_value(this.ds_popupList.getColumn(0,"OPRTR_NM"));
        	}
        	else
        	{
        		var params  = { coCd  : this.lv_coCd, empNo : sCodeId };
        		var options = { title : this.div_search.form.cmb_chrpsn.text };

        		this.gfn_openPopup("btn_chrpsnPopup", "CO_POP::SSP_BO_PP_27.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 상태 전체 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_allChk_onclick = function(obj,e)
        {
        	var chkAllYn = 0;

        	for(var idx=1; idx<=6; idx++)
        	{
        		if(this.div_search.form["chkVal"+idx].value)
        		{
        			chkAllYn++;
        		}
        	}

        	for(var idx=1; idx<=6; idx++)
        	{
        		if(chkAllYn != 6)
        		{
        			this.div_search.form["chkVal"+idx].set_value(true);
        		}
        		else
        		{
        			this.div_search.form["chkVal"+idx].set_value(false);
        		}
        		this.div_search_chkVal_onchanged(this.div_search.form["chkVal"+idx],new nexacro.CheckBoxChangedEventInfo());
        	}
        };

        /**
         * 처리상태 체크박스 값 변경시 onchanged 이벤트 발생 처리
         */
        this.div_search_chkVal_onchanged = function(obj,e)
        {
        	// [접수:10,견적중:20,견적제출:30,처리완료:40,:처리불가:50,구매정보 등록완료:60]
        	var chkVal = ["10","20","30","40","50","60"];
        	var list   = "";

        	this.ds_search.setColumn(0,"ESTM_INFO_STATS_CD","");

        	for(var idx=1; idx<=6; idx++)
        	{
        		if(this.div_search.form["chkVal"+idx].value)
        		{
        			if(list != "")
        			{
        				list += ",";
        			}
        			list += chkVal[idx-1];
        		}
        	}

        	if(list == "")
        	{
        		list = null;
        	}

        	this.ds_search.setColumn(0,"ESTM_INFO_STATS_CD",list);
        };

        /**
         * 조회조건 조회기간구분코드 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.div_search_cmb_dtUnit_onitemchanged = function(obj,e)
        {
        	this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr
        	                      , this.div_search.form.cal_reqDtFnlProcDtEnd
        						  ,obj);
        };

        /**
         * 신규등록 및 목록상세 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	    = "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	    = params.autoSearch;		// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01     = params.coCd;		        // 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02     = params.custPreqno; 		// 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03     = "";		             	// 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04     = "";			            // 부모에서 넘어가는 파라미터(폼경로)
        	var sPopId 		    = "SSP_BO_RD_17";
        	var sUrl 		    = "RD::SSP_BO_RD_17.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03       // 파라미터3
        						  , pv_sVal04:lv_sValue04};     // 파라미터4
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };

        this.btn_pkgReg_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_BO_RD_16"};
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.div_search_btn_prdIdMultiPopup_onclick,this);
            this.div_search.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_search_btn_prdIdMultiInput_onclick,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("oninput",this.div_search_edt_mnfrCd_oninput,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("onkeyup",this.div_search_edt_mnfrCd_onkeyup,this);
            this.div_search.form.btn_mnfrPopup.addEventHandler("onclick",this.div_search_btn_mnfrPopup_onclick,this);
            this.div_search.form.btn_allChk.addEventHandler("onclick",this.div_search_btn_allChk_onclick,this);
            this.div_search.form.chkVal1.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal2.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.btn_reqNoMultiInput.addEventHandler("onclick",this.div_search_btn_reqNoMultiInput_onclick,this);
            this.div_search.form.edt_reprSpec.addEventHandler("oninput",this.edtCustNm_oninput,this);
            this.div_search.form.edt_reprSpec.addEventHandler("onkeyup",this.edtCustNm_onkeyup,this);
            this.div_search.form.edt_prdClcd.addEventHandler("oninput",this.div_search_edt_prdClcd_oninput,this);
            this.div_search.form.edt_prdClcd.addEventHandler("onkeyup",this.div_search_edt_prdClcd_onkeyup,this);
            this.div_search.form.btn_prdClcdPopup.addEventHandler("onclick",this.div_search_btn_prdClcdPopup_onclick,this);
            this.div_search.form.btn_prdClcdMultiInput.addEventHandler("onclick",this.div_search_btn_prdClcdMultiInput_onclick,this);
            this.div_search.form.btn_mnfrMultiInput.addEventHandler("onclick",this.div_search_btn_mnfrMultiInput_onclick,this);
            this.div_search.form.btn_bzplcOprUnitPopup.addEventHandler("onclick",this.div_search_btn_bzplcOprUnitPopup_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.chkVal4.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal5.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal3.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.edt_reqrId.addEventHandler("oninput",this.div_search_edt_reqrId_oninput,this);
            this.div_search.form.edt_reqrId.addEventHandler("onkeyup",this.div_search_edt_reqrId_onkeyup,this);
            this.div_search.form.btn_reqrPopup.addEventHandler("onclick",this.div_search_btn_reqrPopup_onclick,this);
            this.div_search.form.edt_cprtcpCd.addEventHandler("oninput",this.div_search_edt_cprtcpCd_oninput,this);
            this.div_search.form.edt_cprtcpCd.addEventHandler("onkeyup",this.div_search_edt_cprtcpCd_onkeyup,this);
            this.div_search.form.btn_cprtcpPopup.addEventHandler("onclick",this.div_search_btn_cprtcpPopup_onclick,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("oninput",this.div_search_edt_chrpsnId_oninput,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("onkeyup",this.div_search_edt_chrpsnId_onkeyup,this);
            this.div_search.form.btn_chrpsnPopup.addEventHandler("onclick",this.div_search_btn_chrpsnPopup_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.chkVal6.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_pkgReg.addEventHandler("onclick",this.btn_pkgReg_onclick,this);
            this.btn_estmReqCnc.addEventHandler("onclick",this.btn_estmReqCnc_onclick,this);
            this.btn_estmReq.addEventHandler("onclick",this.btn_estmReq_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_16.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
