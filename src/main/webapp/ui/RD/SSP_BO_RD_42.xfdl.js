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
            this.set_titletext("R&D 화학물질정보관리");
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
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"C7_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C16_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C13_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CAS_RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"TOXIC_MTL13\" type=\"STRING\" size=\"32\"/><Column id=\"C26_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C30_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN_DUP_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C1_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C10_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C20_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C2_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C19_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PSM_TGT_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"C23_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C4_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"SPCL_MNG_TGT_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"C1_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C3_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C5_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C6_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C7_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C8_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C9_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C15_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C25_MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C26_MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C6_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C14_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C16_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SPC_HLTH_TGT_HRM_ARG2\" type=\"STRING\" size=\"32\"/><Column id=\"C7_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C10_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C9_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C21_MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C29_MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C8_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C10_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C18_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C11_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C13_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C17_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C20_MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C27_MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C28_MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"ACCD_PSB_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"C12_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MTL_GRAVITY\" type=\"STRING\" size=\"256\"/><Column id=\"C15_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C17_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C19_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REG_TGT_EXST_CHM_MTL\" type=\"STRING\" size=\"32\"/><Column id=\"C14_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C18_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C11_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C22_MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C12_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C13_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C23_MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C24_MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C16_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C29_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MNG_TGT_HRM_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"C12_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C11_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C15_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL33\" type=\"STRING\" size=\"32\"/><Column id=\"C27_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PHASE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"C17_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C16_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C14_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"C30_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_ENV_TGT_HRM_ARG2\" type=\"STRING\" size=\"32\"/><Column id=\"C9_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_CHM_MTL\" type=\"STRING\" size=\"32\"/><Column id=\"C30_MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C5_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C4_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C3_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C1_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C24_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C2_MIN_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C19_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL23\" type=\"STRING\" size=\"32\"/><Column id=\"C15_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C25_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C20_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"C21_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOXIC_MTL53\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"C25_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"C23_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"C27_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"C24_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"C26_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"C28_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"C22_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"C29_CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"C18_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C21_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_BSS_SET_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"C20_MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"B1_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C11_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"C21_MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C8_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C22_MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C24_MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C30_MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"TOXIC_MTL43\" type=\"STRING\" size=\"32\"/><Column id=\"C28_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C23_MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C12_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C22_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C26_MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"C28_MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"PERMIT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"C29_MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"PERMIT_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"C25_MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C27_MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"C10_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C3_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C13_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C14_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C19_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C5_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C6_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C6_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C17_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C18_CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"C7_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"LMT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"PRT_INV_TGT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"C9_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C8_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"C2_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C5_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PHBT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"PHBT_MTL2\" type=\"STRING\" size=\"32\"/><Column id=\"C4_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C3_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C4_CHM_MTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"C1_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C2_MAX_CONTENT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VAL_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_BSS\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"DT_SPR\">REG_DTM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReqDiv", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">PRD_ID</Col><Col id=\"CODE_NM\">상품ID</Col></Row><Row><Col id=\"CODE\">CAS_NO</Col><Col id=\"CODE_NM\">CAS No.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_BSS\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/></Row></Rows>");
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


            obj = new Dataset("ds_popupList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","20","15",null,"135","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","0","62",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","5","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle04","0","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_inqBss","0","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("조회기준");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","850","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","850","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_casNo","440","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("CAS No.");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_inqBss","140","67","310","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsReqDiv");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_direction("vertical");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCd","988","5","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1098","5","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPopup","1226","5","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrMultiInput","1252","5","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdMultiInput","1252","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPopup","1226","35","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","1098","35","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","988","35","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","140","5","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","250","5","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","378","5","22","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","btn_prdIdMultiPopup:4","5","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_casNo","580","5","223","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_casNoMultiInput","edt_casNo:4","5","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dateType","140","36","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_dateType_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_dateType_innerdataset", obj);
            div_search_form_cmb_dateType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REG_DTM</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">UPD_DTM</Col><Col id=\"datacolumn\">수정일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_dateType_innerdataset);
            obj.set_text("등록일");
            obj.set_value("REG_DTM");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","270","36","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","420","36","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","404","36","10","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","555","36","96","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"105","60","28","65",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"105","60","28","1",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_largeExcel",null,"105","118","28","btn_init:5",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","212",null,null,"20","111",null,null,null,null,this);
            obj.set_taborder("0");
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
            obj.set_formatid("format01");
            obj._setContents("<Formats><Format id=\"format01\"><Columns><Column size=\"90\"/><Column size=\"166\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"177\"/><Column size=\"80\"/><Column size=\"191\"/><Column size=\"56\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"71\"/><Column size=\"120\"/><Column size=\"135\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"165\"/><Column size=\"165\"/><Column size=\"129\"/><Column size=\"120\"/><Column size=\"117\"/><Column size=\"117\"/><Column size=\"117\"/><Column size=\"117\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품ID\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"대표규격\"/><Cell col=\"3\" text=\"제조원ID\"/><Cell col=\"4\" text=\"제조원\"/><Cell col=\"5\" text=\"카테고리ID\"/><Cell col=\"6\" text=\"카테고리\"/><Cell col=\"7\" text=\"비중\"/><Cell col=\"8\" text=\"성상\"/><Cell col=\"9\" text=\"등록일\"/><Cell col=\"10\" text=\"수정일\"/><Cell col=\"11\" text=\"수정자\"/><Cell col=\"12\" text=\"신규화학물질\"/><Cell col=\"13\" text=\"등록대상기존화학물질\"/><Cell col=\"14\" text=\"유독물질\"/><Cell col=\"15\" text=\"허가물질 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" displaytype=\"decoratetext\"/><Cell col=\"16\" text=\"제한물질\"/><Cell col=\"17\" text=\"금지물질 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" displaytype=\"decoratetext\"/><Cell col=\"18\" text=\"사고대비물질\"/><Cell col=\"19\" text=\"배출량조사대상물질\"/><Cell col=\"20\" text=\"작업환경측정대상유해인자\"/><Cell col=\"21\" text=\"특수건강진단대상유해인자\"/><Cell col=\"22\" text=\"노출기준설정물질\"/><Cell col=\"23\" text=\"관리대상유해물질\"/><Cell col=\"24\" text=\"허가물질\"/><Cell col=\"25\" text=\"금지물질 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" displaytype=\"decoratetext\"/><Cell col=\"26\" text=\"특별관리대상물질\"/><Cell col=\"27\" text=\"PSM 대상물질\"/><Cell col=\"28\" text=\"마약 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" displaytype=\"decoratetext\"/><Cell col=\"29\" text=\"향정신성의약품 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" displaytype=\"decoratetext\"/><Cell col=\"30\" text=\"화학적합성품\"/><Cell col=\"31\" text=\"마약류원료물질\"/><Cell col=\"32\" text=\"임시마약류 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" displaytype=\"decoratetext\"/><Cell col=\"33\" text=\"CAS No.\"/><Cell col=\"34\" text=\"화학물질명\"/><Cell col=\"35\" text=\"함량 From\"/><Cell col=\"36\" text=\"함량 To\"/><Cell col=\"37\" text=\"CAS No.\"/><Cell col=\"38\" text=\"화학물질명\"/><Cell col=\"39\" text=\"함량 From\"/><Cell col=\"40\" text=\"함량 To\"/><Cell col=\"41\" text=\"CAS No.\"/><Cell col=\"42\" text=\"화학물질명\"/><Cell col=\"43\" text=\"함량 From\"/><Cell col=\"44\" text=\"함량 To\"/><Cell col=\"45\" text=\"CAS No.\"/><Cell col=\"46\" text=\"화학물질명\"/><Cell col=\"47\" text=\"함량 From\"/><Cell col=\"48\" text=\"함량 To\"/><Cell col=\"49\" text=\"CAS No.\"/><Cell col=\"50\" text=\"화학물질명\"/><Cell col=\"51\" text=\"함량 From\"/><Cell col=\"52\" text=\"함량 To\"/><Cell col=\"53\" text=\"CAS No.\"/><Cell col=\"54\" text=\"화학물질명\"/><Cell col=\"55\" text=\"함량 From\"/><Cell col=\"56\" text=\"함량 To\"/><Cell col=\"57\" text=\"CAS No.\"/><Cell col=\"58\" text=\"화학물질명\"/><Cell col=\"59\" text=\"함량 From\"/><Cell col=\"60\" text=\"함량 To\"/><Cell col=\"61\" text=\"CAS No.\"/><Cell col=\"62\" text=\"화학물질명\"/><Cell col=\"63\" text=\"함량 From\"/><Cell col=\"64\" text=\"함량 To\"/><Cell col=\"65\" text=\"CAS No.\"/><Cell col=\"66\" text=\"화학물질명\"/><Cell col=\"67\" text=\"함량 From\"/><Cell col=\"68\" text=\"함량 To\"/><Cell col=\"69\" text=\"CAS No.\"/><Cell col=\"70\" text=\"화학물질명\"/><Cell col=\"71\" text=\"함량 From\"/><Cell col=\"72\" text=\"함량 To\"/><Cell col=\"73\" text=\"CAS No.\"/><Cell col=\"74\" text=\"화학물질명\"/><Cell col=\"75\" text=\"함량 From\"/><Cell col=\"76\" text=\"함량 To\"/><Cell col=\"77\" text=\"CAS No.\"/><Cell col=\"78\" text=\"화학물질명\"/><Cell col=\"79\" text=\"함량 From\"/><Cell col=\"80\" text=\"함량 To\"/><Cell col=\"81\" text=\"CAS No.\"/><Cell col=\"82\" text=\"화학물질명\"/><Cell col=\"83\" text=\"함량 From\"/><Cell col=\"84\" text=\"함량 To\"/><Cell col=\"85\" text=\"CAS No.\"/><Cell col=\"86\" text=\"화학물질명\"/><Cell col=\"87\" text=\"함량 From\"/><Cell col=\"88\" text=\"함량 To\"/><Cell col=\"89\" text=\"CAS No.\"/><Cell col=\"90\" text=\"화학물질명\"/><Cell col=\"91\" text=\"함량 From\"/><Cell col=\"92\" text=\"함량 To\"/><Cell col=\"93\" text=\"CAS No.\"/><Cell col=\"94\" text=\"화학물질명\"/><Cell col=\"95\" text=\"함량 From\"/><Cell col=\"96\" text=\"함량 To\"/><Cell col=\"97\" text=\"CAS No.\"/><Cell col=\"98\" text=\"화학물질명\"/><Cell col=\"99\" text=\"함량 From\"/><Cell col=\"100\" text=\"함량 To\"/><Cell col=\"101\" text=\"CAS No.\"/><Cell col=\"102\" text=\"화학물질명\"/><Cell col=\"103\" text=\"함량 From\"/><Cell col=\"104\" text=\"함량 To\"/><Cell col=\"105\" text=\"CAS No.\"/><Cell col=\"106\" text=\"화학물질명\"/><Cell col=\"107\" text=\"함량 From\"/><Cell col=\"108\" text=\"함량 To\"/><Cell col=\"109\" text=\"CAS No.\"/><Cell col=\"110\" text=\"화학물질명\"/><Cell col=\"111\" text=\"함량 From\"/><Cell col=\"112\" text=\"함량 To\"/><Cell col=\"113\" text=\"CAS No.\"/><Cell col=\"114\" text=\"화학물질명\"/><Cell col=\"115\" text=\"함량 From\"/><Cell col=\"116\" text=\"함량 To\"/><Cell col=\"117\" text=\"CAS No.\"/><Cell col=\"118\" text=\"화학물질명\"/><Cell col=\"119\" text=\"함량 From\"/><Cell col=\"120\" text=\"함량 To\"/><Cell col=\"121\" text=\"CAS No.\"/><Cell col=\"122\" text=\"화학물질명\"/><Cell col=\"123\" text=\"함량 From\"/><Cell col=\"124\" text=\"함량 To\"/><Cell col=\"125\" text=\"CAS No.\"/><Cell col=\"126\" text=\"화학물질명\"/><Cell col=\"127\" text=\"함량 From\"/><Cell col=\"128\" text=\"함량 To\"/><Cell col=\"129\" text=\"CAS No.\"/><Cell col=\"130\" text=\"화학물질명\"/><Cell col=\"131\" text=\"함량 From\"/><Cell col=\"132\" text=\"함량 To\"/><Cell col=\"133\" text=\"CAS No.\"/><Cell col=\"134\" text=\"화학물질명\"/><Cell col=\"135\" text=\"함량 From\"/><Cell col=\"136\" text=\"함량 To\"/><Cell col=\"137\" text=\"CAS No.\"/><Cell col=\"138\" text=\"화학물질명\"/><Cell col=\"139\" text=\"함량 From\"/><Cell col=\"140\" text=\"함량 To\"/><Cell col=\"141\" text=\"CAS No.\"/><Cell col=\"142\" text=\"화학물질명\"/><Cell col=\"143\" text=\"함량 From\"/><Cell col=\"144\" text=\"함량 To\"/><Cell col=\"145\" text=\"CAS No.\"/><Cell col=\"146\" text=\"화학물질명\"/><Cell col=\"147\" text=\"함량 From\"/><Cell col=\"148\" text=\"함량 To\"/><Cell col=\"149\" text=\"CAS No.\"/><Cell col=\"150\" text=\"화학물질명\"/><Cell col=\"151\" text=\"함량 From\"/><Cell col=\"152\" text=\"함량 To\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ID\" textDecoration=\"underline\" color=\"#235da8\"/><Cell col=\"1\" text=\"bind:PRD_NM\" displaytype=\"normal\" combodataset=\"dsProcSt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:VAL_LIST\" displaytype=\"normal\" combodataset=\"dsReqDiv\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:MNFR_NO\"/><Cell col=\"4\" text=\"bind:MNFR_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRD_CLCD\"/><Cell col=\"6\" text=\"bind:PRD_CLSF_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MTL_GRAVITY\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:PHASE_SPR_CD\"/><Cell col=\"9\" text=\"bind:REG_DTM\"/><Cell col=\"10\" text=\"bind:UPD_DTM\"/><Cell col=\"11\" text=\"bind:UPDPSN_ID\"/><Cell col=\"12\" text=\"bind:NEW_CHM_MTL\" background=\"#e08e7f\" cssclass=\"expr:NEW_CHM_MTL== &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"13\" text=\"bind:REG_TGT_EXST_CHM_MTL\" background=\"#e08e7f\" cssclass=\"expr:REG_TGT_EXST_CHM_MTL == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"14\" text=\"bind:TOXIC_MTL1\" cssclass=\"expr:TOXIC_MTL1 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\" background=\"#e08e7f\"/><Cell col=\"15\" text=\"bind:PERMIT_MTL1\" background=\"#e08e7f\" cssclass=\"expr:PERMIT_MTL1 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"16\" text=\"bind:LMT_MTL1\" background=\"#e08e7f\" cssclass=\"expr:LMT_MTL1 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"17\" text=\"bind:PHBT_MTL1\" background=\"#e08e7f\" cssclass=\"expr:PHBT_MTL1 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"18\" text=\"bind:ACCD_PSB_MTL1\" background=\"#e08e7f\" cssclass=\"expr:ACCD_PSB_MTL1 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"19\" text=\"bind:PRT_INV_TGT_MTL1\" background=\"#e08e7f\" cssclass=\"expr:PRT_INV_TGT_MTL1 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"20\" text=\"bind:WRK_ENV_TGT_HRM_ARG2\" background=\"#d1d599\" cssclass=\"expr:WRK_ENV_TGT_HRM_ARG2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"21\" text=\"bind:SPC_HLTH_TGT_HRM_ARG2\" background=\"#d1d599\" cssclass=\"expr:SPC_HLTH_TGT_HRM_ARG2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"22\" text=\"bind:EXPS_BSS_SET_MTL2\" background=\"#d1d599\" cssclass=\"expr:EXPS_BSS_SET_MTL2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"23\" text=\"bind:MNG_TGT_HRM_MTL2\" background=\"#d1d599\" cssclass=\"expr:MNG_TGT_HRM_MTL2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"24\" text=\"bind:PERMIT_MTL2\" background=\"#d1d599\" cssclass=\"expr:PERMIT_MTL2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"25\" text=\"bind:PHBT_MTL2\" background=\"#d1d599\" cssclass=\"expr:PHBT_MTL2 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"26\" text=\"bind:SPCL_MNG_TGT_MTL2\" background=\"#d1d599\" cssclass=\"expr:SPCL_MNG_TGT_MTL2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"27\" text=\"bind:PSM_TGT_MTL2\" background=\"#d1d599\" cssclass=\"expr:PSM_TGT_MTL2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"28\" text=\"bind:TOXIC_MTL13\" background=\"#91be94\" cssclass=\"expr:TOXIC_MTL13 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"29\" text=\"bind:TOXIC_MTL23\" background=\"#91be94\" cssclass=\"expr:TOXIC_MTL23 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"30\" text=\"bind:TOXIC_MTL33\" background=\"#91be94\" cssclass=\"expr:TOXIC_MTL33 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"31\" text=\"bind:TOXIC_MTL43\" background=\"#91be94\" cssclass=\"expr:TOXIC_MTL43 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"32\" text=\"bind:TOXIC_MTL53\" background=\"#91be94\" cssclass=\"expr:TOXIC_MTL53 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"33\" text=\"bind:C1_CAS_NO\"/><Cell col=\"34\" text=\"bind:C1_CHM_MTL_NM\"/><Cell col=\"35\" text=\"bind:C1_MIN_CONTENT\"/><Cell col=\"36\" text=\"bind:C1_MAX_CONTENT\"/><Cell col=\"37\" text=\"bind:C2_CAS_NO\"/><Cell col=\"38\" text=\"bind:C2_CHM_MTL_NM\"/><Cell col=\"39\" text=\"bind:C2_MIN_CONTENT\"/><Cell col=\"40\" text=\"bind:C2_MAX_CONTENT\"/><Cell col=\"41\" text=\"bind:C3_CAS_NO\"/><Cell col=\"42\" text=\"bind:C3_CHM_MTL_NM\"/><Cell col=\"43\" text=\"bind:C3_MIN_CONTENT\"/><Cell col=\"44\" text=\"bind:C3_MAX_CONTENT\"/><Cell col=\"45\" text=\"bind:C4_CAS_NO\"/><Cell col=\"46\" text=\"bind:C4_CHM_MTL_NM\"/><Cell col=\"47\" text=\"bind:C4_MIN_CONTENT\"/><Cell col=\"48\" text=\"bind:C4_MAX_CONTENT\"/><Cell col=\"49\" text=\"bind:C5_CAS_NO\"/><Cell col=\"50\" text=\"bind:C5_CHM_MTL_NM\"/><Cell col=\"51\" text=\"bind:C5_MIN_CONTENT\"/><Cell col=\"52\" text=\"bind:C5_MAX_CONTENT\"/><Cell col=\"53\" text=\"bind:C6_CAS_NO\"/><Cell col=\"54\" text=\"bind:C6_CHM_MTL_NM\"/><Cell col=\"55\" text=\"bind:C6_MIN_CONTENT\"/><Cell col=\"56\" text=\"bind:C6_MAX_CONTENT\"/><Cell col=\"57\" text=\"bind:C7_CAS_NO\"/><Cell col=\"58\" text=\"bind:C7_CHM_MTL_NM\"/><Cell col=\"59\" text=\"bind:C7_MIN_CONTENT\"/><Cell col=\"60\" text=\"bind:C7_MAX_CONTENT\"/><Cell col=\"61\" text=\"bind:C8_CAS_NO\"/><Cell col=\"62\" text=\"bind:C8_CHM_MTL_NM\"/><Cell col=\"63\" text=\"bind:C8_MIN_CONTENT\"/><Cell col=\"64\" text=\"bind:C8_MAX_CONTENT\"/><Cell col=\"65\" text=\"bind:C9_CAS_NO\"/><Cell col=\"66\" text=\"bind:C9_CHM_MTL_NM\"/><Cell col=\"67\" text=\"bind:C9_MIN_CONTENT\"/><Cell col=\"68\" text=\"bind:C9_MAX_CONTENT\"/><Cell col=\"69\" text=\"bind:C10_CAS_NO\"/><Cell col=\"70\" text=\"bind:C10_CHM_MTL_NM\"/><Cell col=\"71\" text=\"bind:C10_MIN_CONTENT\"/><Cell col=\"72\" text=\"bind:C10_MAX_CONTENT\"/><Cell col=\"73\" text=\"bind:C11_CAS_NO\"/><Cell col=\"74\" text=\"bind:C11_CHM_MTL_NM\"/><Cell col=\"75\" text=\"bind:C11_MIN_CONTENT\"/><Cell col=\"76\" text=\"bind:C11_MAX_CONTENT\"/><Cell col=\"77\" text=\"bind:C12_CAS_NO\"/><Cell col=\"78\" text=\"bind:C12_CHM_MTL_NM\"/><Cell col=\"79\" text=\"bind:C12_MIN_CONTENT\"/><Cell col=\"80\" text=\"bind:C12_MAX_CONTENT\"/><Cell col=\"81\" text=\"bind:C13_CAS_NO\"/><Cell col=\"82\" text=\"bind:C13_CHM_MTL_NM\"/><Cell col=\"83\" text=\"bind:C13_MIN_CONTENT\"/><Cell col=\"84\" text=\"bind:C13_MAX_CONTENT\"/><Cell col=\"85\" text=\"bind:C14_CAS_NO\"/><Cell col=\"86\" text=\"bind:C14_CHM_MTL_NM\"/><Cell col=\"87\" text=\"bind:C14_MIN_CONTENT\"/><Cell col=\"88\" text=\"bind:C14_MAX_CONTENT\"/><Cell col=\"89\" text=\"bind:C15_CAS_NO\"/><Cell col=\"90\" text=\"bind:C15_CHM_MTL_NM\"/><Cell col=\"91\" text=\"bind:C15_MIN_CONTENT\"/><Cell col=\"92\" text=\"bind:C15_MAX_CONTENT\"/><Cell col=\"93\" text=\"bind:C16_CAS_NO\"/><Cell col=\"94\" text=\"bind:C16_CHM_MTL_NM\"/><Cell col=\"95\" text=\"bind:C16_MIN_CONTENT\"/><Cell col=\"96\" text=\"bind:C16_MAX_CONTENT\"/><Cell col=\"97\" text=\"bind:C17_CAS_NO\"/><Cell col=\"98\" text=\"bind:C17_CHM_MTL_NM\"/><Cell col=\"99\" text=\"bind:C17_MIN_CONTENT\"/><Cell col=\"100\" text=\"bind:C17_MAX_CONTENT\"/><Cell col=\"101\" text=\"bind:C18_CAS_NO\"/><Cell col=\"102\" text=\"bind:C18_CHM_MTL_NM\"/><Cell col=\"103\" text=\"bind:C18_MIN_CONTENT\"/><Cell col=\"104\" text=\"bind:C18_MAX_CONTENT\"/><Cell col=\"105\" text=\"bind:C19_CAS_NO\"/><Cell col=\"106\" text=\"bind:C19_CHM_MTL_NM\"/><Cell col=\"107\" text=\"bind:C19_MIN_CONTENT\"/><Cell col=\"108\" text=\"bind:C19_MAX_CONTENT\"/><Cell col=\"109\" text=\"bind:C20_CAS_NO\"/><Cell col=\"110\" text=\"bind:C20_CHM_MTL_NM\"/><Cell col=\"111\" text=\"bind:C20_MIN_CONTENT\"/><Cell col=\"112\" text=\"bind:C20_MAX_CONTENT\"/><Cell col=\"113\" text=\"bind:C21_CAS_NO\"/><Cell col=\"114\" text=\"bind:C21_CHM_MTL_NM\"/><Cell col=\"115\" text=\"bind:C21_MIN_CONTENT\"/><Cell col=\"116\" text=\"bind:C21_MAX_CONTENT\"/><Cell col=\"117\" text=\"bind:C22_CAS_NO\"/><Cell col=\"118\" text=\"bind:C22_CHM_MTL_NM\"/><Cell col=\"119\" text=\"bind:C22_MIN_CONTENT\"/><Cell col=\"120\" text=\"bind:C22_MAX_CONTENT\"/><Cell col=\"121\" text=\"bind:C23_CAS_NO\"/><Cell col=\"122\" text=\"bind:C23_CHM_MTL_NM\"/><Cell col=\"123\" text=\"bind:C23_MIN_CONTENT\"/><Cell col=\"124\" text=\"bind:C23_MAX_CONTENT\"/><Cell col=\"125\" text=\"bind:C24_CAS_NO\"/><Cell col=\"126\" text=\"bind:C24_CHM_MTL_NM\"/><Cell col=\"127\" text=\"bind:C24_MIN_CONTENT\"/><Cell col=\"128\" text=\"bind:C24_MAX_CONTENT\"/><Cell col=\"129\" text=\"bind:C25_CAS_NO\"/><Cell col=\"130\" text=\"bind:C25_CHM_MTL_NM\"/><Cell col=\"131\" text=\"bind:C25_MIN_CONTENT\"/><Cell col=\"132\" text=\"bind:C25_MAX_CONTENT\"/><Cell col=\"133\" text=\"bind:C26_CAS_NO\"/><Cell col=\"134\" text=\"bind:C26_CHM_MTL_NM\"/><Cell col=\"135\" text=\"bind:C26_MIN_CONTENT\"/><Cell col=\"136\" text=\"bind:C26_MAX_CONTENT\"/><Cell col=\"137\" text=\"bind:C27_CAS_NO\"/><Cell col=\"138\" text=\"bind:C27_CHM_MTL_NM\"/><Cell col=\"139\" text=\"bind:C27_MIN_CONTENT\"/><Cell col=\"140\" text=\"bind:C27_MAX_CONTENT\"/><Cell col=\"141\" text=\"bind:C28_CAS_NO\"/><Cell col=\"142\" text=\"bind:C28_CHM_MTL_NM\"/><Cell col=\"143\" text=\"bind:C28_MIN_CONTENT\"/><Cell col=\"144\" text=\"bind:C28_MAX_CONTENT\"/><Cell col=\"145\" text=\"bind:C29_CAS_NO\"/><Cell col=\"146\" text=\"bind:C29_CHM_MTL_NM\"/><Cell col=\"147\" text=\"bind:C29_MIN_CONTENT\"/><Cell col=\"148\" text=\"bind:C29_MAX_CONTENT\"/><Cell col=\"149\" text=\"bind:C30_CAS_NO\"/><Cell col=\"150\" text=\"bind:C30_CHM_MTL_NM\"/><Cell col=\"151\" text=\"bind:C30_MIN_CONTENT\"/><Cell col=\"152\" text=\"bind:C30_MAX_CONTENT\"/></Band></Format><Format id=\"format02\"><Columns><Column size=\"90\"/><Column size=\"89\"/><Column size=\"180\"/><Column size=\"71\"/><Column size=\"71\"/><Column size=\"71\"/><Column size=\"113\"/><Column size=\"110\"/><Column size=\"139\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"135\"/><Column size=\"165\"/><Column size=\"151\"/><Column size=\"123\"/><Column size=\"118\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품ID\"/><Cell col=\"1\" text=\"CAS No.\"/><Cell col=\"2\" text=\"화학물질명\"/><Cell col=\"3\" text=\"함량 From\"/><Cell col=\"4\" text=\"함량 To\"/><Cell col=\"5\" text=\"함량 평균\"/><Cell col=\"6\" text=\"비고\"/><Cell col=\"7\" text=\"신규화학물질\"/><Cell col=\"8\" text=\"등록대상기존화학물질\"/><Cell col=\"9\" text=\"유독물질\"/><Cell col=\"10\" text=\"허가물질 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" displaytype=\"decoratetext\"/><Cell col=\"11\" text=\"제한물질\"/><Cell col=\"12\" text=\"금지물질 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" displaytype=\"decoratetext\"/><Cell col=\"13\" text=\"사고대비물질\"/><Cell col=\"14\" text=\"배출량조사대상물질\"/><Cell col=\"15\" text=\"작업환경측정대상유해인자\"/><Cell col=\"16\" text=\"특수건강진단대상유해인자\"/><Cell col=\"17\" text=\"노출기준설정물질\"/><Cell col=\"18\" text=\"관리대상유해물질\"/><Cell col=\"19\" text=\"허가물질\"/><Cell col=\"20\" text=\"금지물질 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" displaytype=\"decoratetext\"/><Cell col=\"21\" text=\"특별관리대상물질\"/><Cell col=\"22\" text=\"PSM 대상물질\"/><Cell col=\"23\" text=\"마약 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" displaytype=\"decoratetext\"/><Cell col=\"24\" text=\"향정신성의약품 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" displaytype=\"decoratetext\"/><Cell col=\"25\" text=\"화학적합성품\"/><Cell col=\"26\" text=\"마약류원료물질\"/><Cell col=\"27\" text=\"임시마약류 &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;\" displaytype=\"decoratetext\"/><Cell col=\"28\" text=\"등록일\"/><Cell col=\"29\" text=\"수정일\"/><Cell col=\"30\" text=\"수정자ID\"/><Cell col=\"31\" text=\"수정자명\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ID\" color=\"#235da8\" textDecoration=\"underline\"/><Cell col=\"1\" text=\"bind:CAS_NO\"/><Cell col=\"2\" text=\"bind:CHM_MTL_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:MIN_CONTENT\"/><Cell col=\"4\" text=\"bind:MAX_CONTENT\"/><Cell col=\"5\" text=\"bind:AVG_CONTENT\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"bind:NEW_CHM_MTL\" background=\"#e08e7f\" cssclass=\"expr:NEW_CHM_MTL == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:REG_TGT_EXST_CHM_MTL\" background=\"#e08e7f\" cssclass=\"expr:REG_TGT_EXST_CHM_MTL == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:TOXIC_MTL1\" background=\"#e08e7f\" cssclass=\"expr:TOXIC_MTL1 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:PERMIT_MTL1\" background=\"#e08e7f\" cssclass=\"expr:PERMIT_MTL1 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:LMT_MTL1\" background=\"#e08e7f\" cssclass=\"expr:LMT_MTL1 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"12\" text=\"bind:PHBT_MTL1\" background=\"#e08e7f\" cssclass=\"expr:PHBT_MTL1 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"13\" text=\"bind:ACCD_PSB_MTL1\" background=\"#e08e7f\" cssclass=\"expr:ACCD_PSB_MTL1 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"14\" text=\"bind:PRT_INV_TGT_MTL1\" background=\"#e08e7f\" cssclass=\"expr:PRT_INV_TGT_MTL1 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"15\" text=\"bind:WRK_ENV_TGT_HRM_ARG2\" background=\"#d1d599\" cssclass=\"expr:WRK_ENV_TGT_HRM_ARG2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"16\" text=\"bind:SPC_HLTH_TGT_HRM_ARG2\" background=\"#d1d599\" cssclass=\"expr:SPC_HLTH_TGT_HRM_ARG2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"17\" text=\"bind:EXPS_BSS_SET_MTL2\" background=\"#d1d599\" cssclass=\"expr:EXPS_BSS_SET_MTL2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"18\" text=\"bind:MNG_TGT_HRM_MTL2\" background=\"#d1d599\" cssclass=\"expr:MNG_TGT_HRM_MTL2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"19\" text=\"bind:PERMIT_MTL2\" background=\"#d1d599\" cssclass=\"expr:PERMIT_MTL2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"20\" text=\"bind:PHBT_MTL2\" background=\"#d1d599\" cssclass=\"expr:PHBT_MTL2 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"21\" text=\"bind:SPCL_MNG_TGT_MTL2\" background=\"#d1d599\" cssclass=\"expr:SPCL_MNG_TGT_MTL2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"22\" text=\"bind:PSM_TGT_MTL2\" background=\"#d1d599\" cssclass=\"expr:PSM_TGT_MTL2 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"23\" text=\"bind:TOXIC_MTL13\" background=\"#91be94\" cssclass=\"expr:TOXIC_MTL13 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"24\" text=\"bind:TOXIC_MTL23\" background=\"#91be94\" cssclass=\"expr:TOXIC_MTL23 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"25\" text=\"bind:TOXIC_MTL33\" background=\"#91be94\" cssclass=\"expr:TOXIC_MTL33 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"26\" text=\"bind:TOXIC_MTL43\" background=\"#91be94\" cssclass=\"expr:TOXIC_MTL43 == &quot;Y&quot; ? &apos;grd_TxtBlue&apos;:&apos;&apos;\"/><Cell col=\"27\" text=\"bind:TOXIC_MTL53\" background=\"#91be94\" cssclass=\"expr:TOXIC_MTL53 == &quot;Y&quot; ? &apos;grd_TxtRed&apos;:&apos;&apos;\"/><Cell col=\"28\" text=\"bind:REG_DTM\"/><Cell col=\"29\" text=\"bind:UPD_DTM\"/><Cell col=\"30\" text=\"bind:UPDPSN_ID\"/><Cell col=\"31\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"178","100","24","238",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","202","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","grd_list:0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","Static01_00_01_00_00:0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","div_paging:0","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"110","1336","10","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","188","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","148","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"178","100","24","btn_layoutInit:4",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create",null,"178","140","24","btn_layoutSave:5",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("일괄등록·일괄수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg",null,"178","80","24","btn_create:4",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("등록·수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"178","110","24","124",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCont",null,"178","100","24","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chgHist",null,"178","90","24","btn_reg:5",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("변경이력관리");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_description("R&D 화학물질정보관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item11","div_search.form.chk_newPrdProcStats4","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.chk_newPrdProcStats5","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.chk_newPrdProcStats6","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_search.form.chk_newPrdProcStats7","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_search.form.chk_newPrdProcStats8","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.chk_newPrdProcStats9","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_casNo","value","ds_search","CAS_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_mnfrCd","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_mnfrNm","value","ds_search","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cmb_dateType","value","ds_search","DT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.edt_prdClNm","value","ds_search","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.rdo_inqBss","value","ds_search","INQ_BSS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cbo_rowCont","value","ds_search","ROW_COUNT");
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
        this.addIncludeScript("SSP_BO_RD_42.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_42.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_42.xfdl(R&D 화학물질정보관리)
        * 작 성         일 명: 손나라
        * 작 성         일 자: 2022/05/06
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
        this.mallSprCd              = "20";
        this.formId                 = this.fn_getFormId(this);           // 등록한 폼의 아디을 기지고 오는 함수

        this.lv_coCd                = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd               = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lvchkColidDs           = "CLASS_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs         = "설명";
        this.strKeyValue            = "";
        this.lvGetDate              = "";
        this.lvKeyCode              = "";
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
            var strDs    = "ds_dateUnitCombo|ds_pageRowCd|ds_rndPrdAuthCombo";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "INQ_PERD_SPR_CD|PAGE_ROW_CD|CHRPSN_TEAM_SPR_CD";                      // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|X";                                 							  // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                     								  // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
        		this.btn_reg.set_visible(false);	  // 일괄수정 버튼 숨김
        		this.btn_create.set_visible(false);   // IMG일괄업로드 버튼 숨김
        		this.btn_chgHist.set_left(1007);
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
        	this.ds_search.setColumn(nRow,"PRD_ID",         	null);                // 상품ID
        	this.ds_search.setColumn(nRow,"PRD_ID_CNT",         null);                // 상품ID선택갯수
        	this.ds_search.setColumn(nRow,"PRD_NM",         	null);                // 상품명
        	this.ds_search.setColumn(nRow,"CAS_NO",         	null);                // CAS NO
        	this.ds_search.setColumn(nRow,"CAS_NO_CNT",         null);                // CAS NO선택갯수
        	this.ds_search.setColumn(nRow,"PRD_CLCD",         	null);                // 카테고리CD
        	this.ds_search.setColumn(nRow,"PRD_CLCD_CNT",       null);                // 카테고리선택갯수
        	this.ds_search.setColumn(nRow,"PRD_CLCD_NM",        null);                // 카테고리명
        	this.ds_search.setColumn(nRow,"MNFR_NO",         	null);                // 제조원
        	this.ds_search.setColumn(nRow,"MNFR_NO_CNT",        null);                // 제조원선택갯수
        	this.ds_search.setColumn(nRow,"MNFR_NM",         	null);                // 제조원명
        	this.ds_search.setColumn(nRow,"DT_SPR",         	"REG_DTM");           // 일자구분
        	this.ds_search.setColumn(nRow,"INQ_BSS",         	"PRD_ID");            // 조회조건
        	this.ds_search.setColumn(nRow,"ROW_COUNT",          this.lv_pageViewCnt); //현재 레코드 초기화셋팅
        	this.div_paging.reload();
        	this.fn_pageCallback();

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
            }else
            {
                /*sSvcId (Transaction Id)*/
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
        /**
         * 기능 : 팝업 종료후 dsDummy Copy
         */
        this.fn_setGridCellPos = function(strKeyCode)
        {
        	this.lvKeyCode              = strKeyCode;
        };


        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
            switch(strId)
            {
        		// 상품ID 멀티조회팝업 후처리
        		case "btn_prdIdMultiPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData 	= JSON.parse(strVal);
        					var prdId 		= new Array();
        					var prdNm 		= new Array();
        					for(var i=0; i<jsonData.length;i++)
        					{
        						var jsonSubData = JSON.parse(jsonData[i]);
        						prdId.push(jsonSubData.PRD_ID_VIEW.replace(/,\s*$/, ""));
        						prdNm.push(jsonSubData.PRD_NM.replace(/,\s*$/, ""));
        					}
        					this.div_search.form.edt_prdId.set_value(prdId);
        					this.div_search.form.edt_prdNm.set_value(prdNm);
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
        		// CAS NO 멀티입력팝업 후처리
        	    case "btn_casNoMultiInput" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_casNo.set_value(jsonData.textValue);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 제조원 조회팝업 후처리
        		case "SSP_BO_PP_08" :
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
                // 카테고리 조회팝업 후처리
        		case "SSP_BO_PP_10" :
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
        		// 등록/수정
         		case "SSP_BO_RD_45" :
        				if(!this.gfn_isNull(strVal))
        				{
        					if(strVal == "SAVE")
        					{
        						this.fn_Ret(true);
        					}
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		case "SSP_BO_RD_61" :                         // CLOB상세변경시 콜빽함수
                    if(!this.gfn_isNull(strVal))
                    {
                        //일반
                        var sRtn = strVal.split(",");
        				if(sRtn[0] == "CLOSE")
                        {
                        }else if(sRtn[0] == "EXIT")
                        {
                        }else
        				{

        				}
                    }
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
        this.div_search_btn_search_onclick = function(obj,e)
        {

        	// 멀티입력 검색조건 Set
            this.fn_setMultiSearch(this.formId,"PRD_ID",	this.ds_search.getColumn(0,"PRD_ID"));    // 상품ID
        	this.fn_setMultiSearch(this.formId,"CAS_NO",	this.ds_search.getColumn(0,"CAS_NO"));    // CAS NO
        	this.fn_setMultiSearch(this.formId,"MNFR_NO",	this.ds_search.getColumn(0,"MNFR_NO"));   // 제조원
        	this.fn_setMultiSearch(this.formId,"PRD_CLCD",	this.ds_search.getColumn(0,"PRD_CLCD"));  // 카테고리


            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0)
            {
                this.fn_insertMultiData("fn_callBack");
            } else
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
        								 ,this.div_search.form.cmb_dateType.text))
        	{
        		return false;
        	}

        	if(page)
        	{
                var oPaging = this.div_paging;
                oPaging.uPage    = 1;
                oPaging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM",    0);
                this.ds_search.setColumn(0,"SORT_COLUMN",  "");
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
            var strUrl      = "/rd/chm-mtl-info-mng/select-chm-mtl-info-mng.do";
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

        	if(!this.gfn_isNull(this.lvKeyCode))
            {
        		var strPkCode = this.lvKeyCode.split("|");
        		var strCoCd   = strPkCode[0];
        		var strPrId   = strPkCode[1];

        		var strExpr            = "CO_CD == '" + strCoCd + "' && PRD_ID == '" + strPrId + "'";

        		var nRow = this.ds_master.findRowExpr(strExpr);
        		if(nRow > -1)
        		{
        			this.ds_master.set_rowposition(nRow);
        			this.lvKeyCode = "";
        		}
            }
        	//trace(this.ds_master.saveXML());
            this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.lv_pageViewCnt,"fn_pageCallback");
        };


        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 등록·수정 버튼 클릭시
         */
        this.btn_reg_onclick = function(obj,e)
        {
        	var params  = { prdId    : ""
        				  , coCd     : this.lv_coCd
        				  , popId    : "SSP_BO_RD_42"
        				  , saveMode : "I"
        				  };

        	this.fn_setCallPopup(params);
        };
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
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
                this.fn_alert("ERRS000202", "EXCEL 정보" ,"","information"); // 출력할 엑셀데이타가 없습니다.!
                return false;
            }

            var result = this.fn_confirm( "ERRR000168", "EXCEL 출력","Excel","question" ); // Excel를 출력하시겠습니까?

            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grd_list, "R&D 화학물질정보관리","R&D 화학물질정보관리");
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
                this.ds_searchTemp.setColumn(0,"ROW_COUNT",this.lv_pageViewCnt);
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
        	var params  = { pubOnlySprCd : "P" , coCd : this.lv_coCd, mallSprCd : this.mallSprCd ,prdId : this.div_search.form.edt_prdId.value };
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
         * 조회조건 CasNo 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_casNoMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_casNo };
        	var options = { title  : this.div_search.form.stc_casNo.text };
        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
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
        /***********************************************************************************************
        *  카테고리 조회팝업 시작
        /***********************************************************************************************/
        /**
         * 조회조건 카테고리 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdClcdPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_prdClcd.value);
        	this.fn_setCallPopup01(sCodeId);

        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edt_prdClcd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_prdClNm.set_value("");
        	}
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edt_prdClcd_onkeyup = function(obj,e)
        {
        	var sCodeId =  this.gfn_trim(this.div_search.form.edt_prdClcd.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup01(sCodeId);
        		}
        	}
        };
        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup01 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",      this.lv_coCd);
        		this.ds_input.setColumn(nRow,"PRD_CLCD",   sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD",this.mallSprCd);
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"PRD_CLCD",		this.ds_popupList.getColumn(0,"PRD_CLCD"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"PRD_CLCD_NM",	this.ds_popupList.getColumn(0,"PRD_CLSF_NM"));
        	} else
        	{
        		var params  = { mallSprCd : this.mallSprCd
        					  , coCd      : this.lv_coCd
        					  , prdClcd   : sCodeId};
        		var options = { title     : this.div_search.form.stc_prdClcd.text };

        		this.gfn_openPopup( "SSP_BO_PP_10"
        						  , "PR_POP::SSP_BO_PP_10.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);
        	}
        };

        /**
         * 조회조건 카테고리 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdClcdMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdClcd };
            var options = { title  : this.div_search.form.stc_prdClcd.text };

            this.gfn_openPopup(e.fromobject.id
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };
        /***********************************************************************************************
        *  카테고리 조회팝업 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  제조원 조회팝업 시작
        /***********************************************************************************************/
        /**
         * 조회조건 제조원 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_mnfrPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_mnfrCd.value);
        	this.fn_setCallPopup02(sCodeId);
        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edt_mnfrCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_mnfrNm.set_value("");
        	}
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edt_mnfrCd_onkeyup = function(obj,e)
        {
        	var sCodeId =  this.gfn_trim(this.div_search.form.edt_mnfrCd.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
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
        		this.ds_input.setColumn(nRow,"CO_CD",      this.lv_coCd);
        		this.ds_input.setColumn(nRow,"MNFR_NO",   sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD",this.mallSprCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);
        		this.ds_input.setColumn(nRow,"START_NUM",  0);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-manufacturer-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=manufacturerList";                               // 물리적 생성 ds_popupList
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"MNFR_NO",	this.ds_popupList.getColumn(0,"MNFR_NO"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"MNFR_NM",	this.ds_popupList.getColumn(0,"MNFR_NM"));
        	} else
        	{
        		var params  = { mnfrNo : sCodeId
        					  , coCd   : this.lv_coCd};
        		var options = { title  : this.div_search.form.stc_mnfr.text };
        		this.gfn_openPopup( "SSP_BO_PP_08"
        						  , "PR_POP::SSP_BO_PP_08.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);
        	}
        };

        /**
         * 조회조건 제조원 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_mnfrMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_mnfrCd };
        	var options = { title  : this.div_search.form.stc_mnfr.text };
        	this.gfn_openPopup( e.fromobject.id
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };

        /***********************************************************************************************
        *  제조원 조회팝업 종료
        /***********************************************************************************************/

        /**
         * 조회조건 조회기간구분코드 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.div_search_cmb_dtUnit_onitemchanged = function(obj,e)
        {
        	this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr,this.div_search.form.cal_reqDtFnlProcDtEnd,obj);
        };

        /**
         * 메인 그리드 셀 더블 클릭시 oncelldblclick 이벤트 발생 처리
         */
        this.grd_list_oncelldblclick = function(obj,e)
        {
          	if(e.cell == obj.getBindCellIndex("body","PRD_ID"))
        	{
        		var strCoCd               = this.ds_master.getColumn(e.row,"CO_CD");
        		var strPrdId              = this.ds_master.getColumn(e.row,"PRD_ID");

        		var params  = { prdId    : strPrdId
        					  , coCd     : strCoCd
        					  , popId    : "SSP_BO_RD_42"
        					  , saveMode : "U"
        					  };

        		this.fn_setCallPopup(params);
        	}
        };

        this.div_search_rdo_inqBss_onitemchanged = function(obj,e)
        {
        	var searchType = obj.value;
        	this.ds_master.clearData();
        	if ( searchType == "CAS_NO" )
        	{
        		this.grd_list.set_formatid("format02");
        	} else
        	{
        		this.grd_list.set_formatid("format01");
        	}
        };

        /**
         * 신규등록 및 목록상세 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	    = "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	    = params.saveMode;	    	// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01     = params.prdId;				// 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02     = params.coCd;				// 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03     = params.popId;	  		    // 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04     = "";						// 부모에서 넘어가는 파라미터(폼경로)
        	var sPopId 		    = "SSP_BO_RD_45";
        	var sUrl 		    = "RD::SSP_BO_RD_45.xfdl";
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
        /*
         * 변경이력관리
         */
        this.btn_chgHist_onclick = function(obj,e)
        {
        	var lv_sFlag01 			= "FORMAT02";						                     // GRID(그리드)에 formatid:포멧ID
        	var lv_sFlag02			= "TB_PR_PRD_CHM_MTL_DTLS_HST";			                 // 테이블 이름(화학물질 테이블 )
        	var lv_sFlag03			= "M";			                                         // 상세화면에서 조회:S/메인화면 조회:M
        	var lv_sFlag04			= "N";			                                         // 화면로드시 자동조회:Y,미자동조회/N
        	var lv_sValue01 		= "";	                                                 // 상품코드
        	var lv_sValue02 		= "";                                                    // 상품명
        	var lv_sValue03 		= "";                                                    // 제조원ID
        	var lv_sValue04 		= "";                                                    // 제조원명
        	var lv_sValue05		    = "";                                                    // 카테고리ID
        	var lv_sValue06 	    = "";                                                    // 카네고리명

        	var sPopId 			= "SSP_BO_RD_61";
        	var sUrl 			= "RD::SSP_BO_RD_61.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	  // GRID(그리드)에 formatid:포멧ID
        						  , pv_sOp02:lv_sFlag02       	  // 로그테이블 이름
        						  , pv_sOp03:lv_sFlag03       	  // 상세화면에서 조회:S/메인화면 조회:M
        						  , pv_sOp04:lv_sFlag04       	  // 화면로드시 자동조회:Y,미자동조회/N
        						  , pv_sVal01:lv_sValue01         // 상품코드
        						  , pv_sVal02:lv_sValue02         // 상품명
        						  , pv_sVal03:lv_sValue03         // 제조원ID
        						  , pv_sVal04:lv_sValue04         // 제조원명
        						  , pv_sVal05:lv_sValue05         // 카테고리ID
        						  , pv_sVal06:lv_sValue06};       // 카네고리명
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };


        // 대용량다운로드
        this.fn_largeFileDown = function(page)
        {
            if(!this.fn_PreRet(page)){
                return false;
            }

        	var sSvcId = "largeFileDown";
        	var sUrl = "/rd/rdExcelDown/chm-mtl-info-mng.do";
        	var inDs = "ds_search=ds_searchTemp";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");
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



        /**
         * 일반 엑셀 대용량 다운로드
         */
        this.fn_excelDownload = function ()
        {
        	// 멀티입력 검색조건 Set
            this.fn_setMultiSearch(this.formId,"PRD_ID",	this.ds_search.getColumn(0,"PRD_ID"));    // 상품ID
        	this.fn_setMultiSearch(this.formId,"CAS_NO",	this.ds_search.getColumn(0,"CAS_NO"));    // CAS NO
        	this.fn_setMultiSearch(this.formId,"MNFR_NO",	this.ds_search.getColumn(0,"MNFR_NO"));   // 제조원
        	this.fn_setMultiSearch(this.formId,"PRD_CLCD",	this.ds_search.getColumn(0,"PRD_CLCD"));  // 카테고리

            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0){
                this.fn_insertMultiData("fn_callBackForLargeFileDown");
            } else{
                this.fn_largeFileDown(true);
            }
        };

        this.fn_callBackForLargeFileDown = function()
        {
        	this.fn_largeFileDown(true);
        }

        this.Button01_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_XL_RD_12"};
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.rdo_inqBss.addEventHandler("onitemchanged",this.div_search_rdo_inqBss_onitemchanged,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("oninput",this.div_search_edt_mnfrCd_oninput,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("onkeyup",this.div_search_edt_mnfrCd_onkeyup,this);
            this.div_search.form.btn_mnfrPopup.addEventHandler("onclick",this.div_search_btn_mnfrPopup_onclick,this);
            this.div_search.form.btn_mnfrMultiInput.addEventHandler("onclick",this.div_search_btn_mnfrMultiInput_onclick,this);
            this.div_search.form.btn_prdClcdMultiInput.addEventHandler("onclick",this.div_search_btn_prdClcdMultiInput_onclick,this);
            this.div_search.form.btn_prdClcdPopup.addEventHandler("onclick",this.div_search_btn_prdClcdPopup_onclick,this);
            this.div_search.form.edt_prdClcd.addEventHandler("oninput",this.div_search_edt_prdClcd_oninput,this);
            this.div_search.form.edt_prdClcd.addEventHandler("onkeyup",this.div_search_edt_prdClcd_onkeyup,this);
            this.div_search.form.edt_prdId.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.div_search.form.edt_prdId.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.div_search.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.div_search_btn_prdIdMultiPopup_onclick,this);
            this.div_search.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_search_btn_prdIdMultiInput_onclick,this);
            this.div_search.form.edt_casNo.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.div_search.form.edt_casNo.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.div_search.form.btn_casNoMultiInput.addEventHandler("onclick",this.div_search_btn_casNoMultiInput_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.btn_largeExcel.addEventHandler("onclick",this.div_search_btn_largeExcel_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_create.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_chgHist.addEventHandler("onclick",this.btn_chgHist_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_42.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
