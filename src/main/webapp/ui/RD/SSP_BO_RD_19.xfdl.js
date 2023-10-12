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
            this.set_titletext("R&D 협력사 견적요청 관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"STATE\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_STB_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_STB_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_ESTM_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_NM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_OPR_UNIT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_OPR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_STATS\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_STB_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CUST_PREQNO\"/><Col id=\"PRD_ID\"/><Col id=\"PRD_NM\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"PSN_ID\"/><Col id=\"PSN_NM\"/><Col id=\"REQ_SBJ_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"CUST_PREQNO_CNT\"/><Col id=\"PRD_ID_CNT\"/><Col id=\"FULL_PRD_NM_YN\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"CPRTCP_TP_CD\"/><Col id=\"ATTR_VAL_LIST\"/><Col id=\"MNFR_NO\"/><Col id=\"MNFR_NO_CNT\"/><Col id=\"MNFR_NM\"/><Col id=\"BZPLC_OPR_UNIT_SPR\"/><Col id=\"BZPLC_OPR_UNIT_CD\"/><Col id=\"BZPLC_OPR_UNIT_NM\"/><Col id=\"BZPLC_ID_CNT\"/><Col id=\"CUST_ID\"/><Col id=\"CUST_NM\"/><Col id=\"ESTM_STATS\"/><Col id=\"CPRTCP_ID\"/><Col id=\"CPRTCP_NM\"/><Col id=\"PSN_TYPE\"/><Col id=\"DT_SPR\"/><Col id=\"OPR_UNIT_ID_CNT\"/><Col id=\"CUST_ID_CNT\"/><Col id=\"MAIN_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_NM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_OPR_UNIT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_OPR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_STATS\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_STB_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CUST_PREQNO\"/><Col id=\"PRD_ID\"/><Col id=\"PRD_NM\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"PSN_ID\"/><Col id=\"PSN_NM\"/><Col id=\"REQ_SBJ_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"CUST_PREQNO_CNT\"/><Col id=\"PRD_ID_CNT\"/><Col id=\"FULL_PRD_NM_YN\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"CPRTCP_TP_CD\"/><Col id=\"ATTR_VAL_LIST\"/><Col id=\"MNFR_NO\"/><Col id=\"MNFR_NO_CNT\"/><Col id=\"MNFR_NM\"/><Col id=\"BZPLC_OPR_UNIT_SPR\"/><Col id=\"BZPLC_OPR_UNIT_CD\"/><Col id=\"BZPLC_OPR_UNIT_NM\"/><Col id=\"BZPLC_ID_CNT\"/><Col id=\"CUST_ID\"/><Col id=\"CUST_NM\"/><Col id=\"ESTM_STATS\"/><Col id=\"CPRTCP_CD\"/><Col id=\"CPRTCP_NM\"/><Col id=\"PSN_TYPE\"/><Col id=\"DT_SPR\"/><Col id=\"OPR_UNIT_ID_CNT\"/><Col id=\"CUST_ID_CNT\"/><Col id=\"MAIN_GUBUN\"/></Row></Rows>");
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


            obj = new Dataset("ds_excelData", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"STATE\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_STB_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_STB_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_ESTM_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static01_00_01_00_00_00","10","215",null,"30","10",null,null,null,null,null,this);
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

            obj = new Static("Static01_00_01_00","20","795",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","15",null,"164","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","0","93",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","62",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","0","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdId","430","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","0","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("POOL 유형");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_bzplcOprUnit","0","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("협력사 유형");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdMultiInput","832","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpCd","1000","36","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","1110","36","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","860","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_cprtcp","860","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrMultiInput","403","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_document");
            obj.getSetter("onchanged").set("div_search_btn_mnfrMultiInput_onchanged");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcOprUnitCd","1000","5","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcOprUnitNm","1110","5","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplcOprUnitPopup","1238","5","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplcOprUnitMultiInput","1264","5","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_cprtcpMultiInput","1264","36","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00","0","93","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("등록일/수정일자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","140","98","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","274","98","10","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","290","98","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","425","98","96","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chrpsn","860","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnId","1000","67","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnNm","1109","67","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_chrpsnPopup","1237","67","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"132","60","24","1",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"132","60","24","btn_search:5",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPopup","381","4","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_allChk_P","140","35","55","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_text("전체");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkValP1","210","36","60","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_text("제조원");
            obj.set_value("false");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkValP2","302","36","61","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_text("상품군");
            obj.set_value("false");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkValP3","401","36","71","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_text("운영단위");
            obj.set_value("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_allChk_C","140","65","55","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_text("전체");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkValC1","210","66","76","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_text("MAKER");
            obj.set_value("false");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkValC2","301","66","86","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("36");
            obj.set_text("총판/대리점");
            obj.set_value("false");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkValC3","402","66","88","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("37");
            obj.set_text("통합협력사");
            obj.set_value("false");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkValC4","505","66","118","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("38");
            obj.set_text("SOLE VENDER");
            obj.set_value("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPopup","809","4","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","570","5","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("41");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","680","5","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_cprtcpPopup","1238","35","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkValC5","638","66","118","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("44");
            obj.set_text("권역지정 대리점");
            obj.set_value("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","253","5","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCd","140","5","103",null,null,"137",null,null,null,null,this.div_search.form);
            obj.set_taborder("46");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_largeExcel",null,"131","118","26","132",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("47");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.div_search.addChild(obj.name, obj);

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
            obj.set_taborder("15");
            obj.set_displayrowcount("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbo_rowCont_innerdataset = new nexacro.NormalDataset("cbo_rowCont_innerdataset", obj);
            cbo_rowCont_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10개씩</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row></Rows>");
            obj.set_innerdataset(cbo_rowCont_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"240","110","24","cbo_rowCont:4",null,null,null,null,null,this);
            obj.set_taborder("14");
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
            obj.set_taborder("13");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","21","276",null,null,"19","div_paging:32",null,null,null,null,this);
            obj.set_taborder("16");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"POOL 유형\"/><Cell col=\"2\" text=\"협력사 유형\"/><Cell col=\"3\" text=\"제조원ID\"/><Cell col=\"4\" text=\"제조원명\"/><Cell col=\"5\" text=\"상품군ID\"/><Cell col=\"6\" text=\"상품군명\"/><Cell col=\"7\" text=\"운영단위ID\"/><Cell col=\"8\" text=\"운영단위명\"/><Cell col=\"9\" text=\"협력사ID\" textAlign=\"center\"/><Cell col=\"10\" text=\"협력사명\"/><Cell col=\"11\" text=\"자동 견적\"/><Cell col=\"12\" text=\"구매담당자ID\"/><Cell col=\"13\" text=\"구매담당자명\"/><Cell col=\"14\" text=\"등록일자\"/><Cell col=\"15\" text=\"등록자ID\"/><Cell col=\"16\" text=\"최종처리ID\"/><Cell col=\"17\" text=\"최종처리자명\"/><Cell col=\"18\" text=\"최종수정일\"/><Cell col=\"19\" text=\"견적조건 참고사항\"/><Cell col=\"20\" text=\"등록/변경 사유\"/><Cell col=\"21\" text=\"이력 조회\" color=\"black\"/></Band><Band id=\"body\"><Cell text=\"bind:STATE\" expr=\"dataset.getColumn(currow, &quot;STATE&quot;) == &quot;C&quot; ? &quot;등록&quot; : dataset.getColumn(currow, &quot;STATE&quot;) == &quot;U&quot;  ? &quot;수정&quot; : &quot;삭제&quot;\"/><Cell col=\"1\" text=\"bind:CPRTCP_TP_NM\" displaytype=\"normal\" combodataset=\"dsReqDiv\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:ESTM_STB_TP_NM\"/><Cell col=\"3\" text=\"bind:MNFR_NO\"/><Cell col=\"4\" text=\"bind:MRO_MNFR_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRD_CLCD\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PRD_CLSF_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"8\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:CPRTCP_ID\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:CPRTCP_KOR_NM\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:AUTO_ESTM_YN\" textAlign=\"center\" expr=\"AUTO_ESTM_YN == &apos;Y&apos; ? &quot;Y&quot; : &quot;N&quot;\"/><Cell col=\"12\" text=\"bind:PURG_CHRPSN_ID\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:OPRTR_NM\"/><Cell col=\"14\" text=\"bind:REG_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"normal\"/><Cell col=\"15\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:UPDPSN_ID\"/><Cell col=\"17\" text=\"bind:UPDPSN_NM\"/><Cell col=\"18\" text=\"bind:UPD_DTM\" textAlign=\"center\" edittype=\"none\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"19\" text=\"bind:RMKS\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:CHG_RSN\" textAlign=\"left\"/><Cell col=\"21\" color=\"#235da8\" textDecoration=\"underline\" text=\"이력\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,1260,this,function(p){});
            obj.set_description("R&D 협력사 견적요청 관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_chrpsnNm","value","ds_search","PSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_chrpsnId","value","ds_search","PSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_cprtcpNm","value","ds_search","CPRTCP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_cprtcpCd","value","ds_search","CPRTCP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_prdClNm","value","ds_search","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.edt_bzplcOprUnitNm","value","ds_search","BZPLC_OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.edt_bzplcOprUnitCd","value","ds_search","BZPLC_OPR_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_mnfrNm","value","ds_search","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_mnfrCd","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cbo_rowCont","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
            this._addPreloadList("data","","ds_master");
            this._addPreloadList("data","","dsDummy");
            this._addPreloadList("data","","ds_excelData");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_19.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_19.xfdl", function() {
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
        this.fn_formInit = function()
        {
        	var strDs    = "ds_dateUnitCombo|ds_rndPrdAuthCombo";         // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd  = "INQ_PERD_SPR_CD|CHRPSN_TEAM_SPR_CD";           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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

        	// 화면 초기화 상태 작업
        	this.fn_setResetBtnCall();
        };


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
        		this.btn_pkgReg.set_visible(false);   // 일괄등록 버튼 숨김
        	}
        };


        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
        	this.ds_master.clearData();
            this.ds_search.clearData();
            var nRow = this.ds_search.addRow();
            this.ds_search.setColumn(nRow,"PSN_ID",            this.lv_empNo);        // 로그인사번
            this.ds_search.setColumn(nRow,"PSN_NM",            this.lv_empNm);        // 로그인명
        	this.ds_search.setColumn(nRow,"ROW_COUNT",        "50");
            this.div_paging.reload();
        	this.fn_pageCallback();


        	// Check박스 초기화
        	for(var idx=1; idx<=3; idx++) this.div_search.form["chkValP"+idx].set_value(false);
        	for(var idx=1; idx<=5; idx++) this.div_search.form["chkValC"+idx].set_value(false);



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
        		// 협력사 조회 팝업 처리
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
        		// 협력사 멀티입력팝업 후처리
        		case "btn_cprtcpMultiInput" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_cprtcpCd.set_value(jsonData.textValue);
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
        		// 제조원 조회 팝업 후 처리
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
        		// 운영단위 팝업 후 처리
        		case "btn_bzplcOprUnitPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					var bzplcOprUnitCd = new Array();
        					var bzplcOprUnitNm = new Array();

        					for(var i=0; i<jsonData.length;i++)
        					{
        						var jsonSubData = JSON.parse(jsonData[i]);
        						bzplcOprUnitCd.push(jsonSubData.OPR_UNIT_ID.replace(/,\s*$/, ""));
        						bzplcOprUnitNm.push(jsonSubData.OPR_UNIT_NM.replace(/,\s*$/, ""));

        					}
        					this.div_search.form.edt_bzplcOprUnitCd.set_value(bzplcOprUnitCd);
        					this.div_search.form.edt_bzplcOprUnitNm.set_value(bzplcOprUnitNm);
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        			break;
        		// 운영단위 멀티입력팝업 후처리
        		case "btn_bzplcOprUnitMultiInput" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_bzplcOprUnitCd.set_value(jsonData.textValue);
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
        	this.fn_setMultiSearch(this.formId,"MNFR_NO",          this.ds_search.getColumn(0,"MNFR_NO"));                  // 제조원ID
        	this.fn_setMultiSearch(this.formId,"PRD_CLCD",         this.ds_search.getColumn(0,"PRD_CLCD"));                 // 상품군ID
        	this.fn_setMultiSearch(this.formId,"OPR_UNIT_ID",	   this.ds_search.getColumn(0,"BZPLC_OPR_UNIT_CD"));		// 운영단위ID
        	this.fn_setMultiSearch(this.formId,"CPRTCP_ID",        this.ds_search.getColumn(0,"CPRTCP_ID"));              	// 협력사ID
        	this.fn_setMultiSearch(this.formId,"PSN_ID",           this.ds_search.getColumn(0,"PSN_ID"));                   // 담당자ID




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
        								 ,"요청일자"))
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
            var strUrl      = "/rd/select-pool-mng/select-pool-mng.do";
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
            this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cbo_rowCont.value,"fn_pageCallback");
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
        * 초기화 버튼 클릭시 onclick 이벤트 발생 처리
        */
        this.div_search_btn_init_onclick = function(obj,e)
        {
            // 초기화 호출
            this.fn_setResetBtnCall();
        };

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


            this.gfn_excelExport(this.grd_list, "R&D 협력사 POOL 견적 관리","R&D 협력사 POOL 견적 관리", null, null, "SSP_BO_RD_16_01");
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
                this.ds_searchTemp.setColumn(0,"ROW_COUNT", this.cbo_rowCont.value);
                this.fn_Ret(false);
            }

            var sTotText = "(<b v='true'>총 "+ oPaging.form.fv_nTotRowCount+"건 </b><fc v='red'>"+ (oPaging.form.fv_nPageCnt == 0 ? 0 : oPaging.form.fv_nPage) +"</fc> / "+ oPaging.form.fv_nPageCnt +")";
            this.totalPageCount.set_text(sTotText);
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
         * 조회조건 상품군 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdClcdPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_prdClcd.value);
        	this.fn_setCallPopup1(sCodeId);
        };

        /**
         * 조회조건 상품군 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdClcdMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdClcd };
            var options = { title  : this.div_search.form.stc_prdId.text };

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
        					  , lwstCdYn  : ""
        					  };

        		var options = { title  : this.div_search.form.stc_prdId.text };

        		this.gfn_openPopup("btn_prdClcdPopup", "PR_POP::SSP_BO_PP_10.xfdl", params, "fn_popupCallback", options);
        	}
        };


        /**
         * 조회조건 제조원 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_mnfrPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_mnfrCd.value);
        	this.fn_setCallPopup3(sCodeId);
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
         * 조회조건 운영단위 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_bzplcOprUnitPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_bzplcOprUnitCd.value);
        	var params  = { coCd  : this.lv_coCd, bzplcId:sCodeId };
        	var options = { title : this.div_search.form.stc_prdClcd.text };


        	// 운영단위
        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", params, "fn_popupCallback", options);

        };
        /**
         *  조회조건 운영단위 Edit 값 변경시 이벤트 발생 처리
         */
        this.div_search_edt_bzplcOprUnitCd_oninput = function(obj,e)
        {
        		if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_bzplcOprUnitNm.set_value("");
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
        		var options = { title : this.div_search.form.stc_chrpsn.text };

        		this.gfn_openPopup("btn_chrpsnPopup", "CO_POP::SSP_BO_PP_27.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 상태 전체 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_allChk_onclick = function(obj,e)
        {
        	var btnNm = "";
        	var maxIdx = 0;
        	var chkAllYn = 0;

        	if (obj.id == "btn_allChk_P") {
        		// POOL 조건 Chk
        		btnNm = "chkValP";
        		maxIdx = 3;

        	} else {
        		// 협력사 유형 Chk
        		btnNm = "chkValC";
        		maxIdx = 5;
        	}


        	for(var idx=1; idx<=maxIdx; idx++)
        	{
        		if(this.div_search.form[btnNm+idx].value)
        		{
        			chkAllYn++;
        		}
        	}

        	for(var idx=1; idx<=maxIdx; idx++)
        	{
        		if(chkAllYn != maxIdx)
        		{
        			this.div_search.form[btnNm+idx].set_value(true);
        		}
        		else
        		{
        			this.div_search.form[btnNm+idx].set_value(false);
        		}
        		if(btnNm == "chkValP") this.div_search_poolChk_onchanged(this.div_search.form[btnNm+idx],new nexacro.CheckBoxChangedEventInfo());
        		else this.div_search_chkVal_onchanged(this.div_search.form[btnNm+idx],new nexacro.CheckBoxChangedEventInfo());
        	}
        };

        /**
         * POOL조건 체크박스 값 변경시 onchanged 이벤트 발생 처리
         */
        this.div_search_poolChk_onchanged = function(obj,e)
        {
        	var chkMap = new Map([
        							[9, "01"], [5, "02"], [6, "03"],
        							[2, "04"], [7, "05"], [3, "06"],
        							[4, "00"]
        						]);

        	var btnNm = "chkValP";
        	var maxIdx = 3;
        	var sumIdx = 0;
        	var sum   = 0;

        	for(var idx=1; idx<=maxIdx; idx++)
        	{
        		if(this.div_search.form[btnNm+idx].value)
        		{
        			sum += idx+1;
        		}
        	}

        	this.ds_search.setColumn(0,"ESTM_STB_TP_CD", sum ? chkMap.get(sum) : "");
        };

        /*
        	협력사 유형 체크박스 값 변경시 onchanged 이벤트 발생 처리
        */
        this.div_search_chkVal_onchanged = function(obj,e)
        {
        	// [MAKER:01, 총판/대리:02, 통합협력사:03, SOLE VENDER:04, 권역지정:05]
        	var chkVal = ["01","02","03","04","05","06"];
        	var list   = "";
        	var btnNm = "chkValC";
        	var maxIdx = 5;

        	this.ds_search.setColumn(0,"CPRTCP_TP_CD","");

        	for(var idx=1; idx<=maxIdx; idx++)
        	{
        		if(this.div_search.form[btnNm+idx].value)
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

        	this.ds_search.setColumn(0,"CPRTCP_TP_CD",list);
        };

        this.btn_pkgReg_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_BO_RD_19"};
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };

        /**
         * 조회조건 운영단위 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_bzplcOprUnitMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_bzplcOprUnitCd };
            var options = { title  : this.div_search.form.stc_prdClcd.text };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 협력사 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_cprtcpMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_cprtcpCd };
            var options = { title  : this.div_search.form.stc_cprtcp.text };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };


        this.grd_list_oncellclick = function(obj,e)
        {

         	if(e.col == 21) {
        		var oApp  = nexacro.getApplication()
        		var oGdsOpen = oApp.gds_openMenu;
        		var oGdsMenu = oApp.gds_menu;
        		var sWinId = "";
        		var sMenuId = "2002070001";
        		var nFindRow = oGdsOpen.findRow("MNU_LVL_SPR_CD",sMenuId);
        		var param = {
        			"CPRTCP_ID" : this.ds_master.getColumn(this.ds_master.rowposition, 		"CPRTCP_ID"),
        			"ESTM_STB_TP_CD" : this.ds_master.getColumn(this.ds_master.rowposition, "ESTM_STB_TP_CD"),
        			"CPRTCP_TP_CD" : this.ds_master.getColumn(this.ds_master.rowposition,	"CPRTCP_TP_CD"),
        			"MNFR_NO" : this.ds_master.getColumn(this.ds_master.rowposition,		"MNFR_NO"),
        			"OPR_UNIT_ID" : this.ds_master.getColumn(this.ds_master.rowposition,	"OPR_UNIT_ID"),
        			"PRD_CLCD" : this.ds_master.getColumn(this.ds_master.rowposition,		"PRD_CLCD"),
        			"PURG_CHRPSN_ID" : this.ds_master.getColumn(this.ds_master.rowposition,	"PURG_CHRPSN_ID") ? this.ds_master.getColumn(this.ds_master.rowposition,	"PURG_CHRPSN_ID") : "",
        			"DATE_FR_DT" : this.ds_search.getColumn(0,		"DATE_FR_DT"),
        			"DATE_TO_DT" : this.ds_search.getColumn(0,		"DATE_TO_DT")
        		};

        		if(nFindRow >= 0) {
        			var oFrame = this.fv_oApp.agv_WorkFrameSet.frames;
        			sWinId = oGdsOpen.getColumn(nFindRow,"WIN_ID");
        			//탭 삭제
        			var nRow = oGdsOpen.findRow("WIN_ID", sWinId);
        			var nCloseIdx = nRow;
        			var bSucc  = oGdsOpen.deleteRow(nRow);

        			// MDI 탭버튼 삭제
        			if(!this.gfn_isNull(oFrame[sWinId]) && nRow > -1) {
        				var oReturn = this.fv_oApp.agv_WorkFrameSet.removeChild(sWinId);
        				oReturn.destroy();
        				oReturn = null;
        				oApp.agv_MdiFrame.form.tab_mdi.removeTabpage(nCloseIdx)
        			}
        		}
        		this.gfn_menuOpen(sMenuId, param);
         	}
        };

        /**
         * 엑셀 대용량 다운로드 버튼 클릭 시
         */
        this.div_search_btn_largeExcel_onclick = function(obj,e)
        {
        	if(this.confirm('대용량 다운로드를 실행하시겠습니까?')){
        		this.fn_excelDownload();
        	}
        };
        //일반 엑셀 대용량 다운로드
        this.fn_excelDownload = function ()
        {
        	// 멀티입력 검색조건 Set

        	this.fn_setMultiSearch(this.formId, "PRD_CLCD", this.ds_search.getColumn(0,"PRD_CLCD"));    // 상품군
        	this.fn_setMultiSearch(this.formId, "CPRTCP_ID", this.ds_search.getColumn(0,"CPRTCP_ID"));  // 협력사
        	this.fn_setMultiSearch(this.formId, "MNFR_NO", this.ds_search.getColumn(0,"MNFR_NO"));      // 제조원
        	this.fn_setMultiSearch(this.formId, "PSN_ID", this.ds_search.getColumn(0,"PSN_ID"));        // 담당자ID
        	this.fn_setMultiSearch(this.formId, "BZPLC_OPR_UNIT_CD", this.ds_search.getColumn(0,"BZPLC_OPR_UNIT_CD"));  // 운영단위ID
        	this.fn_setMultiSearch(this.formId, "CPRTCP_TP_CD", this.ds_search.getColumn(0,"CPRTCP_TP_CD"));  		// 협력사 유형
        	this.fn_setMultiSearch(this.formId, "ESTM_STB_TP_CD", this.ds_search.getColumn(0,"ESTM_STB_TP_CD"));  	// POOL조건


            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0)
            {
                this.fn_insertMultiData("fn_callBackForLargeFileDown");
            } else
            {
                this.fn_largeFileDown(true);
            }
        };
        this.fn_callBackForLargeFileDown = function()
        {
        	this.fn_largeFileDown(true);
        }

        // 대용량다운로드
        this.fn_largeFileDown = function(page){

            if(!this.fn_PreRet(page))
            {
                return false;
            }

        	var sSvcId = "largeFileDown";
        	var sUrl = "/rd/rdExcelDown/cprtcp-pool-info-mng.do";
        	var inDs = "ds_search=ds_searchTemp";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.Static05.addEventHandler("onclick",this.div_search_Static05_onclick,this);
            this.div_search.form.stc_prdNm.addEventHandler("onclick",this.div_search_stc_prdNm_onclick,this);
            this.div_search.form.btn_prdClcdMultiInput.addEventHandler("onclick",this.div_search_btn_prdClcdMultiInput_onclick,this);
            this.div_search.form.edt_cprtcpCd.addEventHandler("oninput",this.div_search_edt_cprtcpCd_oninput,this);
            this.div_search.form.edt_cprtcpCd.addEventHandler("onkeyup",this.div_search_edt_cprtcpCd_onkeyup,this);
            this.div_search.form.stc_prdClcd.addEventHandler("onclick",this.div_search_stc_prdClcd_onclick,this);
            this.div_search.form.stc_cprtcp.addEventHandler("onclick",this.div_search_stc_mnfr_onclick,this);
            this.div_search.form.btn_mnfrMultiInput.addEventHandler("onclick",this.div_search_btn_mnfrMultiInput_onclick,this);
            this.div_search.form.edt_bzplcOprUnitCd.addEventHandler("oninput",this.div_search_edt_bzplcOprUnitCd_oninput,this);
            this.div_search.form.btn_bzplcOprUnitPopup.addEventHandler("onclick",this.div_search_btn_bzplcOprUnitPopup_onclick,this);
            this.div_search.form.btn_bzplcOprUnitMultiInput.addEventHandler("onclick",this.div_search_btn_bzplcOprUnitMultiInput_onclick,this);
            this.div_search.form.btn_cprtcpMultiInput.addEventHandler("onclick",this.div_search_btn_cprtcpMultiInput_onclick,this);
            this.div_search.form.cal_reqDtFnlProcDtStr.addEventHandler("onchanged",this.div_search_cal_reqDtFnlProcDtStr_onchanged,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("oninput",this.div_search_edt_chrpsnId_oninput,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("onkeyup",this.div_search_edt_chrpsnId_onkeyup,this);
            this.div_search.form.btn_chrpsnPopup.addEventHandler("onclick",this.div_search_btn_chrpsnPopup_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_mnfrPopup.addEventHandler("onclick",this.div_search_btn_mnfrPopup_onclick,this);
            this.div_search.form.btn_allChk_P.addEventHandler("onclick",this.div_search_btn_allChk_onclick,this);
            this.div_search.form.chkValP1.addEventHandler("onchanged",this.div_search_poolChk_onchanged,this);
            this.div_search.form.chkValP2.addEventHandler("onchanged",this.div_search_poolChk_onchanged,this);
            this.div_search.form.chkValP3.addEventHandler("onchanged",this.div_search_poolChk_onchanged,this);
            this.div_search.form.btn_allChk_C.addEventHandler("onclick",this.div_search_btn_allChk_onclick,this);
            this.div_search.form.chkValC1.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkValC2.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkValC3.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkValC4.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.btn_prdClcdPopup.addEventHandler("onclick",this.div_search_btn_prdClcdPopup_onclick,this);
            this.div_search.form.edt_prdClcd.addEventHandler("oninput",this.div_search_edt_prdClcd_oninput,this);
            this.div_search.form.edt_prdClcd.addEventHandler("onkeyup",this.div_search_edt_prdClcd_onkeyup,this);
            this.div_search.form.edt_prdClcd.addEventHandler("onchanged",this.div_search_edt_prdClcd_onchanged,this);
            this.div_search.form.btn_cprtcpPopup.addEventHandler("onclick",this.div_search_btn_cprtcpPopup_onclick,this);
            this.div_search.form.chkValC5.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("oninput",this.div_search_edt_mnfrCd_oninput,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("onkeyup",this.div_search_edt_mnfrCd_onkeyup,this);
            this.div_search.form.btn_largeExcel.addEventHandler("onclick",this.div_search_btn_largeExcel_onclick,this);
            this.cbo_rowCont.addEventHandler("onitemchanged",this.cbo_rowCont_onitemchanged,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_pkgReg.addEventHandler("onclick",this.btn_pkgReg_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_19.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
