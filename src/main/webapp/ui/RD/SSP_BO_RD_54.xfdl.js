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
            this.set_titletext("R&D CMS오류 정비 상세");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PRPS_CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"32\"/><Column id=\"ATTR_VAL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_UNIT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HUB_HNL_DIS_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"TX_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRPS_CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_DIS_TP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CHEM_INFO_DTL_YN\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CHM_MTL_INFO_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"ODR_REQ_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_GB\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"CUST_PREQNO\"/><Col id=\"MAIN_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndEstmDtlStatsCdCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PERD_DC\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_DTL_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DC\" type=\"STRING\" size=\"32\"/><Column id=\"TB_PC_CPRTCP_PRD_PRC_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ESTM_DTL_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"MSDS_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_LT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"32\"/><Column id=\"ALIGN_REQ_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_VLD_TERM\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RSN_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PHBT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"CVW_FV_CHEM_RESTRICT_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MIN_CONTENT\" type=\"STRING\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"TOXIC_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCD_PSB_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"PERMIT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"MAX_CONTENT\" type=\"STRING\" size=\"16\"/><Column id=\"LMT_MTL1\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AVG_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlAddList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"C_LAW2_VAL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"D_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"D_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_NM\" type=\"STRING\" size=\"32\"/><Column id=\"LAW2_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"B_LAW2_VAL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"B_LAW2_NM\" type=\"STRING\" size=\"32\"/><Column id=\"A_LAW2_VAL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"C_LAW2_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlListTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOXIC_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"LMT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"ACCD_PSB_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PHBT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PERMIT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN_DUP_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlAddListTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PK_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"LAW2_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"B_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"B_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"C_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"D_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"D_LAW2_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_phaseSprCdCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_msdsMaster", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_FNL_CHG_DT\" type=\"STRING\" size=\"32\"/><Column id=\"DOC_ID2\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM2\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PHASE_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MTL_GRAVITY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORI_ATFL_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH2\" type=\"STRING\" size=\"32\"/><Column id=\"ORI_ATFL_NM2\" type=\"STRING\" size=\"32\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH1\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"32\"/><Column id=\"DOC_ID1\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATFL_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATFL_UPD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATTC_FILE_UPDPSN_IDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_UPD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_UPDPSN_IDNM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_ID3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","22",null,null,"0","-1070",null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","149",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","118",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","87",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","56",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround02","555","56","254","33",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","20","56","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClcdNm","20","87","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_attrValList","165","123","415","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_attrValList","20","118","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_hubHnlDisTpNm","20","149","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Hub취급가능여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_basisUnitNm","759","118","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_txClcdNm","759","149","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("과면세구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ctryNm","759","56","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNm","759","87","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","28","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("고객 요청 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcdNm","165","92","415","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","905","92","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitNm","905","123","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_txClcdNm","905","153","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hubHnlDisTpNm","165","153","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","165","60","415","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctryNm","905","60","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","179",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySprNm","20","179","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_purgChrpsnNm","759","179","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnNm","905","184","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pubOnlySprNm","165","184","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","261",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","45","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01","0","213","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","20","231","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("결정협력사 CMS 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","0","251","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_chmMtlPrdYn","390","149","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdChrpsnNm","390","179","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("상품담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdChrpsnNm","535","184","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chmMtlPrdYn","535","153","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","20","293",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_chmMtlInfoYn","20","293","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("화학물질정보");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chmMtlInfoYn","165","298","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_msdsYn","390","293","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("MSDS");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_msdsYn","535","298","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_chemInfoDtlYn","759","293","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("시약정보요약서");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chemInfoDtlYn","905","298","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prpsCprtcpNm","165","265","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prpsCprtcpNm","20","261","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","20","463","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("CMS 오류정비 요청정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","20","376",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_01","0","485","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00","0","328","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","20","346","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("요청 고객 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00","0","366","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","20","408",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bzplcNm","20","408","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","165","412","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_oprUnitNm","390","408","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitNm","535","412","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mbrNm","759","408","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("요청자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbrNm","905","412","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_odrReqDtm","905","380","295","23",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regDtm","535","380","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custPreqno","165","380","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_02_00","0","440","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_estmReqCnc",null,"460","110","24","20",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("정비요청 취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"981","67","24","20",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("- 삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","497",null,"200","20",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_binddataset("ds_detail");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"선택\" displaytype=\"normal\"/><Cell col=\"1\" colspan=\"2\" text=\"협력사\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"MSDS정보\"/><Cell col=\"5\" text=\"최소발주수량\"/><Cell col=\"6\" text=\"매입가\"/><Cell col=\"7\" text=\"배송비\"/><Cell col=\"8\" text=\"평균배송일\"/><Cell col=\"9\" text=\"구매정보 유효기간\"/><Cell col=\"10\" text=\"기간할인\"/><Cell col=\"11\" text=\"물량할인\"/><Cell col=\"12\" text=\"정비요청일\"/><Cell col=\"13\" text=\"회신일\"/></Band><Band id=\"body\"><Cell textDecoration=\"underline\" color=\"#235da8\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CPRTCP_ID\" displaytype=\"editcontrol\" combodataset=\"dsProcSt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" edittype=\"readonly\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"readonly\" expandshow=\"hide\" expandsize=\"25\" text=\"bind:CPRTCP_KOR_NM\"/><Cell col=\"3\" text=\"bind:ESTM_DTL_STATS_NM\" tooltiptext=\"expr:ESTM_DTL_STATS_CD == &quot;30&quot; ? RSN_TXT : &quot;&quot;\" subsumtext=\"상태\" displaytype=\"normal\" combodataset=\"dsReqDiv\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" cssclass=\"expr:ESTM_DTL_STATS_CD==&quot;30&quot;?&quot;grd_Txt_Red_UC&quot;:&quot;&quot;\"/><Cell col=\"4\" text=\"bind:MSDS_YN\"/><Cell col=\"5\" text=\"bind:MIN_ODR_QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:PRD_PRC\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:DLV_AMT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:DLV_LT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:PURG_VLD_TERM\"/><Cell col=\"10\" text=\"bind:PERD_DC\"/><Cell col=\"11\" text=\"bind:QTY_DC\"/><Cell col=\"12\" text=\"bind:ALIGN_REQ_DTM\"/><Cell col=\"13\" text=\"bind:ESTM_CMPL_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_02","20","970",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_custPreqno","20","376","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("정비요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_odrReqDtm","759","376","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("고객주문일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regulation",null,"1346","120","24","20",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("규제정보확인");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_estmReq",null,"460","80","24","btn_estmReqCnc:4",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("정비요청");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"981","67","24","btn_del:4",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("+ 추가");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","20","750",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00","0","698","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00","20","719","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("MSDS 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00_00","0","739","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00","20","781",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_01_01_00_00","20","781","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("MSDS 파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcpId","20","750","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_01_01_00_00_00","20","843","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround07_02_01_01_01_00_00","165","844","200","33",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00_00","20","843",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpId","157","755","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpKorNm","267","755","303","22",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName1","156","785","194","24",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file1","360","785","73","24",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("파일 등록");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00","20","936",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00","0","887","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_00","20","905","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("화학물질정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00_00_00","0","925","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround07_01_00_00_00_00_00_00_00_00","905","939","295","33",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mtlGravity","20","936","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("물질비중  <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_phaseSprCd","580","936","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("성상  <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_mtlGravity","159","940",null,"24","811",null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_format("###.####");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_phaseSprCd","720","941","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_innerdataset("ds_phaseSprCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_02_00","20","1007",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_chmMtlList","20","1018",null,"318","20",null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("화학물질 정보가 존재하지 않습니다.");
            obj.set_binddataset("ds_chmMtlList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"선택\"/><Cell col=\"1\" rowspan=\"2\" text=\"화학물질명\"/><Cell col=\"2\" rowspan=\"2\" text=\"CAS No.\"/><Cell col=\"3\" colspan=\"5\" text=\"유해화학물질구분\"/><Cell col=\"8\" colspan=\"3\" text=\"함량\"/><Cell row=\"1\" col=\"3\" text=\"유독물질\"/><Cell row=\"1\" col=\"4\" text=\"제한물질\"/><Cell row=\"1\" col=\"5\" text=\"사고대비물질\"/><Cell row=\"1\" col=\"6\" text=\"금지물질\"/><Cell row=\"1\" col=\"7\" text=\"허가물질\"/><Cell row=\"1\" col=\"8\" text=\"FROM\"/><Cell row=\"1\" col=\"9\" text=\"TO\"/><Cell row=\"1\" col=\"10\" text=\"AVG\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CHM_MTL_NM\"/><Cell col=\"2\" text=\"bind:CAS_NO\" displaytype=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;normal&quot; : &quot;none&quot;\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:TOXIC_MTL1\"/><Cell col=\"4\" text=\"bind:LMT_MTL1\"/><Cell col=\"5\" text=\"bind:ACCD_PSB_MTL1\"/><Cell col=\"6\" text=\"bind:PHBT_MTL1\"/><Cell col=\"7\" text=\"bind:PERMIT_MTL1\"/><Cell col=\"8\" text=\"bind:MIN_CONTENT\" displaytype=\"maskeditcontrol\" maskeditautoselect=\"true\" maskeditformat=\"###,###,###,###,##0.###\" maskeditlimitbymask=\"both\" textAlign=\"right\" edittype=\"mask\"/><Cell col=\"9\" text=\"bind:MAX_CONTENT\" displaytype=\"maskeditcontrol\" maskeditformat=\"###,###,###,###,##0.###\" maskeditlimitbymask=\"both\" maskeditautoselect=\"true\" textAlign=\"right\" edittype=\"mask\"/><Cell col=\"10\" text=\"bind:AVG_CONTENT\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_02_00_00","20","1336",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01_00","20","1380","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("추가규제정보 (<fc v=\'red\'><b v=\'true\'>*</b></fc>는 체크 시 취급불가)");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","555","1742","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","627","1742","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00_01","0","1402","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","20","1688",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_01","20","1688","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("시약정보요약서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_01","0","1667","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName2","153","1692","334","24",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("파일명");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00","0","1721","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file2","492","1692","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("파일 등록");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regDtm","390","376","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("정비요청일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_02_00_00_00","20","1370",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_chmMtlAddList","20","1412",null,"254","20",null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("추가규제 정보가 존재하지 않습니다.");
            obj.set_binddataset("ds_chmMtlAddList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"150\"/><Column size=\"15\"/><Column size=\"150\"/><Column size=\"15\"/><Column size=\"150\"/><Column size=\"15\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"화평/화관법\"/><Cell col=\"2\" colspan=\"2\" text=\"산업안전보건법\"/><Cell col=\"4\" colspan=\"2\" text=\"마약류관리법\"/><Cell col=\"6\" colspan=\"2\" text=\"위험물안전관리법\"/></Band><Band id=\"body\"><Cell text=\"bind:A_LAW2_VAL\" displaytype=\"expr:A_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"1\" text=\"bind:A_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"bind:B_LAW2_VAL\" displaytype=\"expr:B_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"3\" text=\"bind:B_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell col=\"4\" text=\"bind:C_LAW2_VAL\" displaytype=\"expr:C_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"5\" text=\"bind:C_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell col=\"6\" text=\"bind:D_LAW2_VAL\" displaytype=\"expr:D_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"7\" text=\"bind:D_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","160","16",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("R&D CMS오류정비 상세");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","830","718","290","19",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","1124","718","98","19",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rgntInfo","btn_file2:5","1692","86","24",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("시약정보 URL");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00_01","20","812",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_msdsFnlChgDtm","20","843","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("MSDS 최종개정일 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_msdsFnlChgDtm","156","847",null,"24","962",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName3","576","785","224","24",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textDecoration("underline");
            obj.set_color("royalblue");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file3","810","786","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_locFnlChgDt","575","816","105","24",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_svronCertFnlChgDt","1019","816","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locUpdDt","575","847","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_readonly("true");
            obj.set_value("2023-01-01 00:00:00");
            obj.set_text("2023-01-01 00:00:00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svronCertUpdDt","1019","847","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_svronCertYn","1019","787","144","22",null,null,null,null,null,null,this);
            obj.set_initvalueid("N");
            obj.set_taborder("125");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("0");
            var rdo_svronCertYn_innerdataset = new nexacro.NormalDataset("rdo_svronCertYn_innerdataset", obj);
            rdo_svronCertYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_svronCertYn_innerdataset);
            obj.set_text("미사용");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ltterFile","439","781","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("레터파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertYn","883","781","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("자체증빙여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_lttrFnlChgDt","439","812","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("레터파일 최종개정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertFnlChgDt","883","812","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("자체증빙일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertUpdDtPsn","883","843","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("자체증빙 수정일시");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ltterUpdDtPsn","439","843","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("레터파일 수정일시");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00_00_00","439","874",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svronCertUpdpsn","1019","878","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertUpdDtPsn00","883","874","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("자체증빙 수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ltterUpdDtPsn00","439","874","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("레터파일 수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locUpdpsn","575","878","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_01_01_00_00_01","20","812","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("MSDS 경로");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rndMsdsUrl","156","816","277","24",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,720,this,function(p){});
            obj.set_description("R&D CMS오류 정비 상세");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_prdNm","value","ds_master","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_ctryNm","value","ds_master","CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_mnfrNm","value","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_basisUnitNm","value","ds_master","BASIS_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_txClcdNm","value","ds_master","TX_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_purgChrpsnNm","value","ds_master","PURG_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_prdChrpsnNm","value","ds_master","PRD_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_chmMtlPrdYn","value","ds_master","CHM_MTL_PRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_attrValList","value","ds_master","ATTR_VAL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_prdClcdNm","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_hubHnlDisTpNm","value","ds_master","HUB_HNL_DIS_TP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_pubOnlySprNm","value","ds_master","PUB_ONLY_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_prpsCprtcpNm","value","ds_master","PRPS_CPRTCP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_chmMtlInfoYn","value","ds_master","CHM_MTL_INFO_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_custPreqno","value","ds_master","CUST_PREQNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_bzplcNm","value","ds_master","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_oprUnitNm","value","ds_master","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_regDtm","value","ds_master","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_msdsYn","value","ds_master","MSDS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edt_chemInfoDtlYn","value","ds_master","CHEM_INFO_DTL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edt_odrReqDtm","value","ds_master","ODR_REQ_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edt_mbrNm","value","ds_master","MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edt_cprtcpId","value","ds_msdsMaster","CPRTCP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edt_cprtcpKorNm","value","ds_msdsMaster","CPRTCP_KOR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","msk_mtlGravity","value","ds_msdsMaster","MTL_GRAVITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","cbo_phaseSprCd","value","ds_msdsMaster","PHASE_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","cal_msdsFnlChgDtm","value","ds_msdsMaster","MSDS_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edt_fileName3","value","ds_msdsMaster","LOC_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","cal_locFnlChgDt","value","ds_msdsMaster","LOC_ATFL_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","cal_svronCertFnlChgDt","value","ds_msdsMaster","SRVON_CERT_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edt_locUpdDt","value","ds_msdsMaster","LOC_ATFL_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edt_svronCertUpdDt","value","ds_msdsMaster","SRVON_CERT_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","rdo_svronCertYn","value","ds_msdsMaster","SRVON_CERT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","edt_svronCertUpdpsn","value","ds_msdsMaster","SRVON_CERT_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edt_locUpdpsn","value","ds_msdsMaster","LOC_ATTC_FILE_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edt_rndMsdsUrl","value","ds_msdsMaster","RND_MSDS_URL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_54.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_54.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_54.xfdl(R&D CMS오류정비 상세)
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/06/28
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
        this.fv_oApp        = nexacro.getApplication();	//application object
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd       = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lv_btnChkYn    = "";
        this.sOptinoArg1    = "";
        this.sOptinoArg2    = "";
        this.sParamArg1     = "";
        this.sParamArg2     = "";

        this.lvGetDate      = "";
        this.lvSaveMode     = "";
        this.imageViewerId  = "";								 // 이미지파일 뷰어 표시를 위한 변수 값
        this.fileIndex      = "";								 // 파일 index 값을 저장을 위한 변수 값
        this.lv_casNo       = "";
        this.lvchkColidDs   = "CAS_NO$MIN_CONTENT$MAX_CONTENT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "CAS_NO$함량 FROM$함량 TO";

        this.atflTpCd = ['','95', 'S2', '9A'];  // 95: MSDS, S2: 시양정보요약서, 9A: LOC
        this.upldAuthExts = [
        	  'PPTX', 'PPT', 'DOCX', 'DOC', 'XLSX', 'XLS', 'PDF', 'HWP'  // Office
        	, 'GIF', 'PNG' , 'JPG', 'JPEG'                               // Image
        	, 'TEXT', 'TXT', 'ZIP'                                       // Normal
        ];
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnLoad(this);

            // 사용자 화면  초기화 함수
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
        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp01))
        	{
        		 this.sOptinoArg1 = this.getOwnerFrame().pv_sOp01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp02))
        	{
        		 this.sOptinoArg2 = this.getOwnerFrame().pv_sOp02;
        	}

        	/******************* 넘어온 인자값 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal01))
        	{
        		 this.sParamArg1 = this.getOwnerFrame().pv_sVal01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal02))
        	{
        		 this.sParamArg2 = this.getOwnerFrame().pv_sVal02;
        	}

            var strDs    = "ds_rndEstmDtlStatsCdCombo|ds_phaseSprCdCombo|ds_rndPrdAuthCombo";        // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "RND_ESTM_DTL_STATS_CD|PHASE_SPR_CD|CHRPSN_TEAM_SPR_CD";                  // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "N|S|X"; 				                                                 // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                       					                             // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
            this.lvGetDate = this.fn_getSvrDate();                      // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.

        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow,"CO_CD",      this.sParamArg1);	     // 회사코드
        	this.ds_search.setColumn(nRow,"CUST_PREQNO",this.sParamArg2);        // 고객요청번호

        	this.fn_Ret();
        };

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
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "MRet":
        					this.fn_PostRetM();
        				break;
        		    case "CasNoCnfYn":
        					this.fn_PostCasNoCnfYn();
        				break;
                    case "Save_L":
                            this.fn_PostSave_L();
                        break;
                    case "Save":
        					this.fn_StatPiCall();
        					this.fn_PrdPiCall();
                            this.fn_PostSave();
                        break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
            switch(strId)
            {
        		// 협력사 조회팝업 후처리
        		case "SSP_BO_PP_41" :
        			 if(!this.gfn_isNull(strVal))
        			 {
        			     var jsonData = JSON.parse(strVal);
        				 this.ds_detail.setColumn(this.ds_detail.rowposition,"CPRTCP_ID",    jsonData.CPRTCP_ID.replace(/,\s*$/, ""));
        				 this.ds_detail.setColumn(this.ds_detail.rowposition,"CPRTCP_KOR_NM",jsonData.CPRTCP_KOR_NM.replace(/,\s*$/, ""));
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
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/rd/cms-err-repair/select-cms-err-repair-dtl-inq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master"
        	                + " ds_detail=ds_detail";
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
        	// 요청건 존재시 MSDS화학물질(조회만 수정 불가) & 정비요청 버튼 비활성화
        	if(this.ds_detail.getCaseCount("ESTM_DTL_STATS_CD == '10'") > 0)
        	{
        		this.btn_estmReq.set_enable(false);
        	}

        	var findRow = this.ds_detail.findRow("CHK","1");

        	if(findRow != -1)
        	{
        		// MSDS정보 호출
        		this.fn_RetM();
        	}
        	else
        	{
        		// MSDS정보화면제어 호출
        		this.fn_MsdsInfoUiCtl(true);
        	}

        	// RND화면권한제어
        	this.fn_setRndUiAuthCtl();
        };

        /**
         * 기능 : MSDS정보 조회 전 실행
         */
        this.fn_PreRetM = function()
        {
        	this.fn_saveMultiFileDelUpdate("");
        	this.edt_fileName1.set_value("");
        	this.edt_fileName_onchanged(this.edt_fileName1,new nexacro.ChangeEventInfo());
        	this.edt_fileName2.set_value("");
        	this.edt_fileName_onchanged(this.edt_fileName2,new nexacro.ChangeEventInfo());
        	// <!-- 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->
        	this.edt_fileName3.set_value("");
        	this.edt_fileName_onchanged(this.edt_fileName3,new nexacro.ChangeEventInfo());
        	// <!-- /2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->

        	this.ds_input.clearData();
        	var nRow    = this.ds_input.addRow();
        	var findRow = this.ds_detail.findRow("CHK","1");
        	this.ds_input.setColumn(nRow,"CO_CD",      this.ds_detail.getColumn(findRow,"CO_CD"));
        	this.ds_input.setColumn(nRow,"CUST_PREQNO",this.ds_detail.getColumn(findRow,"CUST_PREQNO"));
        	this.ds_input.setColumn(nRow,"CPRTCP_ID",  this.ds_detail.getColumn(findRow,"CPRTCP_ID"));
        	this.ds_input.setColumn(nRow,"PRD_ID",     this.ds_master.getColumn(0,      "PRD_ID"));

            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : MSDS정보 조회 실행
         */
        this.fn_RetM = function()
        {
            if(!this.fn_PreRetM())
            {
                return false;
            }
            var strSvc      = "MRet";
            var strUrl      = "/rd/cms-err-repair/select-msds-chm-mtl-info-inq.do";
            var strInDs     = "ds_search=ds_input";
            var strOutDs    = "ds_msdsMaster=ds_msdsMaster"
        	                + " ds_chmMtlList=ds_chmMtlList"
        					+ " ds_chmMtlAddList=ds_chmMtlAddList"
        					+ " ds_saveFileList=ds_saveFileList";
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
         * 기능 : MSDS정보 조회 후 실행
         */
        this.fn_PostRetM = function()
        {
        	// CMS정비상세코드 요청 or 제출 or 거부인 경우 MSDS정보 활성화, 완료인 경우 비활성화
        	var strFlag = this.ds_detail.getColumn(this.ds_detail.rowposition,"ESTM_DTL_STATS_CD") == "40" ? true : false;
        	// MSDS정보화면제어 호출
        	this.fn_MsdsInfoUiCtl(strFlag);

        	// MSDS첨부파일 or 시약요약정보 첨부파일 존재시
        	if(this.ds_saveFileList.getRowCount() > 0)
        	{
        		for(var idx=0; idx<this.ds_saveFileList.rowcount; idx++)
        		{
        			var filePath    = this.ds_saveFileList.getColumn(idx,"ATFL_STOR_PATH");
        			var fileName    = this.ds_saveFileList.getColumn(idx,"ORI_ATFL_NM");
        			var fileOrgName = this.ds_saveFileList.getColumn(idx,"ATFL_NM");
        			var strEtcFds2  = this.ds_saveFileList.getColumn(idx,"ETC_FDS_2");
        			var strAtflNm   = this.ds_saveFileList.getColumn(idx,"ATFL_NM");
        			var strCnt      = this.atflTpCd.indexOf(strEtcFds2);  // strEtcFds2 == "95" ? "1" : "2";


        			this["edt_fileName"+strCnt].set_value(fileOrgName);
        			this.edt_fileName_onchanged(this["edt_fileName"+strCnt],new nexacro.ChangeEventInfo());

        		}
        	}

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.fn_MsdsInfoUiCtl(true);
        	}

        	// 견적상태가 [40:처리완료,50:처리불가]인 경우 화면 제어 불가능
        	if(this.sOptinoArg2 == "R")
        	{
        		this.fn_compontAllControl();
        	}
        };

        /**
         * 규제정보 확인 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_regulation_onclick = function(obj,e)
        {
        	// 규제정보 확인 호출
        	this.fn_CasNoCnfYn();
        };

        /**
         * 기능 : 규제정보 조회 전 실행
         */
        this.fn_PreCasNoCnfYn = function()
        {
        	if(this.ds_chmMtlList.getRowCount() == 0)
        	{
        		this.fn_alert("화학물질 리스트 정보가 존재하지 않습니다.","규제정보","","warning"); // 선택된 값이 없습니다.
                return false;
        	}

        	for(var idx=0; idx<this.ds_chmMtlList.getRowCount(); idx++)
        	{
        		var strCasNo      = this.gfn_nvl(this.ds_chmMtlList.getColumn(idx,"CAS_NO"),      strChk);
        		var strMinContent = this.gfn_nvl(this.ds_chmMtlList.getColumn(idx,"MIN_CONTENT"), strChk);
        		var strMaxContent = this.gfn_nvl(this.ds_chmMtlList.getColumn(idx,"MAX_CONTENT"), strChk);

        		var strChk = "";

        		if (this.ds_chmMtlList.getCaseCount("CAS_NO == '" + strCasNo + "'") > 1)
        		{
        			this.fn_alert((idx+1) + "번째 화학물질 CAS_NO가 중복으로 존재 합니다.","규제정보","","question");
        			this.ds_chmMtlList.set_rowposition(idx);
        			this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","CAS_NO"));
        			this.grd_chmMtlList.showEditor();
        			return false;
        		}

        		if (strCasNo == "")
        		{
        			this.fn_alert((idx+1) + "번째 화학물질 CAS_NO를 입력 하셔야 합니다.","규제정보","","question");
        			this.ds_chmMtlList.set_rowposition(idx);
        			this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","CAS_NO"));
        			this.grd_chmMtlList.showEditor();
        			return false;
        		}

        		if (strMinContent == strChk)
        		{
        			this.fn_alert((idx+1) + "번째 화학물질 함량 FROM를 입력 하셔야 합니다.","규제정보","","question");
        			this.ds_chmMtlList.set_rowposition(idx);
        			this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","MIN_CONTENT"));
        			this.grd_chmMtlList.showEditor();
        			return false;
        		}

        		if (strMaxContent == strChk)
        		{
        			this.fn_alert((idx+1) + "번째 화학물질 함량 TO를 입력 하셔야 합니다.","규제정보","","question");
        			this.ds_chmMtlList.set_rowposition(idx);
        			this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","MAX_CONTENT"));
        			this.grd_chmMtlList.showEditor();
        			return false;
        		}
        	}

        	this.ds_chmMtlListTemp.copyData(this.ds_chmMtlList);

            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 규제정보 조회 실행
         */
        this.fn_CasNoCnfYn = function()
        {
            if(!this.fn_PreCasNoCnfYn())
            {
                return false;
            }
            var strSvc      = "CasNoCnfYn";
            var strUrl      = "/rd/chm-mtl-info-mng/select-regulation-info-cnf-yn.do";
            var strInDs     = "ds_chmMtlList=ds_chmMtlListTemp:a";
            var strOutDs    = "ds_chmMtlListTemp=ds_chmMtlList"
        	                + " ds_chmMtlAddListTemp=ds_chmMtlAddList";
            var strArg      = "PRD_ID="       + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"PRD_ID"))
        					+ " CO_CD="       + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"CO_CD"))
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        /**
         * 기능 : 규제정보 조회 후 실행
         */
        this.fn_PostCasNoCnfYn = function()
        {
        	if(this.gfn_nvl(this.lv_casNo,"") != "Y")
        	{
        		var findRow = this.ds_chmMtlList.findRow("CAS_NO",this.lv_casNo);
        		this.fn_alert((findRow+1) + "번째 화학물질 CAS_NO가 잘못 기재되었습니다.","규제정보","","question");
        		this.ds_chmMtlList.set_rowposition(findRow);
        		this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","CAS_NO"));
        		this.grd_chmMtlList.showEditor();
        		return false;
        	}
        	else
        	{
        		this.ds_chmMtlList.set_updatecontrol(false);
        		for(var idx=0; idx<this.ds_chmMtlListTemp.getRowCount(); idx++)
        		{
        			var strCasNo      = this.ds_chmMtlListTemp.getColumn(idx,"CAS_NO");
        			var strMinContent = this.ds_chmMtlListTemp.getColumn(idx,"MIN_CONTENT");
        			var strMaxContent = this.ds_chmMtlListTemp.getColumn(idx,"MAX_CONTENT");
        			var findRow       = this.ds_chmMtlList.findRowExpr("CAS_NO == '"+ strCasNo +"' && MIN_CONTENT == '" + strMinContent + "' && MAX_CONTENT == '" + strMaxContent + "'");

        			for(var jdx=0; jdx<this.ds_chmMtlListTemp.getColCount(); jdx++)
        			{
        				var colId  = this.ds_chmMtlListTemp.getColID(jdx);
        				var colVal = this.ds_chmMtlListTemp.getColumn(idx,colId);
        				this.ds_chmMtlList.setColumn(findRow,colId,colVal);
        			}
        		}
        		this.ds_chmMtlList.set_updatecontrol(true);
        		this.ds_chmMtlAddList.copyData(this.ds_chmMtlAddListTemp);
        		this.btn_rgntInfo.set_enable(true);
        		this.btn_save.set_enable(true);
        	}
        };
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 버튼 클릭시
         */
        this.btn_add_onclick = function(obj,e)
        {
            this.fn_New();
        };

        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }
            var nRow = this.ds_chmMtlList.addRow();
            this.ds_chmMtlList.setColumn(nRow,"CHK","0");           // 업체코드
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 클릭시
         */
        this.btn_del_onclick = function(obj,e)
        {
            this.fn_Del();
        };

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            // 멀티삭제용도
            if(this.ds_chmMtlList.rowcount < 1 || this.ds_chmMtlList.findRow("CHK",1) == -1)
            {
                this.fn_alert("ERRR000011","삭제정보","","warning"); // 선택된 값이 없습니다.
                return false;
            }

            var result = this.fn_confirm("현재선택행을 삭제하시겠습니까?", "삭제정보","","question" ); // 현재선택행을 삭제하시겠습니까?

            if(result == 0)
            {
                return false;
            }

            // 멀티 삭제 처리
            for(var i = this.ds_chmMtlList.rowcount-1; 0 <= i; i--)
            {
                if(this.ds_chmMtlList.getColumn(i,"CHK") == 1)
                {
                    this.ds_chmMtlList.deleteRow(i);
                }
            }

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }
        	this.btn_save.set_enable(true);
        };

        this.fn_PostDel = function()
        {

        };
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 견적요청 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_estmReq_onclick = function(obj,e)
        {
        	if(this.ds_detail.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	var strEstmDtlStatsCd = this.gfn_nvl(this.ds_detail.getColumn(this.ds_detail.findRow("CHK","1"),"ESTM_DTL_STATS_CD"),"");

        	if(strEstmDtlStatsCd != "")
        	{
        		this.fn_alert("ERRR000208","저장정보","","question"); // 이미 진행중인 건이 포함되어 있습니다.
        		return false;
        	}

        	var result = this.fn_confirm("ERRR000200", "저장정보","정비요청","question" );    // 선택한 건들을 모두 &1 처리 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	for(var idx=0; idx<this.ds_detail.getRowCount(); idx++)
        	{
        		var nRow = this.ds_input.addRow();
        		this.ds_input.setColumn(nRow,"CHK",        this.ds_detail.getColumn(idx,"CHK"));
        		this.ds_input.setColumn(nRow,"CO_CD",      this.ds_detail.getColumn(idx,"CO_CD"));
        		this.ds_input.setColumn(nRow,"CUST_PREQNO",this.ds_detail.getColumn(idx,"CUST_PREQNO"));
        		this.ds_input.setColumn(nRow,"CPRTCP_ID",  this.ds_detail.getColumn(idx,"CPRTCP_ID"));
        		this.ds_input.setColumn(nRow,"EXISTS_YN",  this.ds_detail.getColumn(idx,"EXISTS_YN"));
        		this.ds_input.setColumn(nRow,"CO_GB",      "10");
        	}

        	this.fn_Save_L();
        };

        /**
         * 견적요청취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_estmReqCnc_onclick = function(obj,e)
        {
        	if(this.ds_detail.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	for(var idx=0; idx<this.ds_detail.getRowCount(); idx++)
        	{
        		var strEstmDtlStatsCd = this.ds_detail.getColumn(idx,"ESTM_DTL_STATS_CD");

        		if (strEstmDtlStatsCd == undefined || strEstmDtlStatsCd == "") {
        			this.fn_alert("ERRR000213","저장정보","","question"); // 처리상태가 요청중 & 제출완료 & 제출거부 상태인 경우에만 요청취소를 진행하실 수 있습니다.
        			return false;
        		}
        	}

        	var result = this.fn_confirm("ERRR000200", "저장정보","정비요청 취소","question" );    // 선택한 건들을 모두 &1 처리 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	for(var idx=0; idx<this.ds_detail.getRowCount(); idx++)
        	{
        		var nRow = this.ds_input.addRow();
        		this.ds_input.setColumn(nRow,"CHK",        this.ds_detail.getColumn(idx,"CHK"));
        		this.ds_input.setColumn(nRow,"CO_CD",      this.ds_detail.getColumn(idx,"CO_CD"));
        		this.ds_input.setColumn(nRow,"CUST_PREQNO",this.ds_detail.getColumn(idx,"CUST_PREQNO"));
        		this.ds_input.setColumn(nRow,"CPRTCP_ID",  this.ds_detail.getColumn(idx,"CPRTCP_ID"));
        		this.ds_input.setColumn(nRow,"EXISTS_YN",  this.ds_detail.getColumn(idx,"EXISTS_YN"));
        		this.ds_input.setColumn(nRow,"CO_GB",      "20");
        	}

        	this.fn_Save_L();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave_L = function()
        {
        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save_L = function()
        {
            if(!this.fn_PreSave_L())
            {
                return false;
            }

            var strSvc      = "Save_L";
            var strUrl      = "/rd/cms-err-repair/save-cms-err-dtl-estm-stats-dtls-stor.do";
            var strInDs     = "ds_search=ds_search:a";
                strInDs    += " ds_input=ds_input:u"
        		strInDs    += " ds_delete=ds_delete:u";
            var strOutDs    = "ds_master=ds_master";
        	    strOutDs   += " ds_detail=ds_detail";
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
        this.fn_PostSave_L = function()
        {
        	this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다

        	this.lvSaveMode = "SAVE";

        	this.ds_saveFileList.clearData();

        	// 요청건 존재시 MSDS화학물질(조회만 수정 불가) & 정비요청 버튼 비활성화
        	if(this.ds_detail.getCaseCount("ESTM_DTL_STATS_CD == '10'") > 0)
        	{
        		this.btn_estmReq.set_enable(false);
        	}
        	else
        	{
        		this.btn_estmReq.set_enable(true);
        	}

        	this.fn_RetM();
        };

        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.btn_save_onclick = function(obj,e)
        {
            this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.fn_cmmnChkEssentialItem(this.ds_chmMtlList, this.lvchkColidDs, this.lvchkColNameDs, this.grd_chmMtlList, chkFocusFlg, this);

            if(result[0] != "success")
            {
                this.fn_alert(result[0],"저장정보","","question");
                this.ds_master.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	// CMS오류정비 요청건 존재시 저장 불가
        	if(this.ds_detail.getCaseCount("ESTM_DTL_STATS_CD == '10'") > 0)
        	{
        		this.fn_alert("ERRR000227","저장정보","","question");   // CMS오류정비 요청 진행건이 존재합니다.
        		return false;
        	}

        	// MSDS첨부파일 혹은 MSDS경로 모두 미존재시
        	if(this.gfn_isNull(this.edt_fileName1.value) && this.gfn_isNull(this.edt_rndMsdsUrl.value))
        	{
        		this.fn_alert("ERRR000160","저장정보","","question");   // MSDS 파일등록 또는 MSDS 경로 입력을 해주세요
        		this.edt_rndMsdsUrl.setFocus();
        		return false;
        	}

        	var regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        	// MSDS URL 경로 정합성 체크
        	if(!this.gfn_isNull(this.edt_rndMsdsUrl.value) && !regex.test(this.edt_rndMsdsUrl.value))
        	{
                this.fn_alert("ERRR000231","저장","MSDS 경로","question");      // &1 URL 주소가 잘못 입력 되었습니다. 해당 URL 주소를 확인 해주세요.
                this.edt_rndMsdsUrl.setFocus();
                return false;
        	}

        	// MSDS최종개정일 필수 입력 체크
        	if(this.gfn_isNull(this.cal_msdsFnlChgDtm.value))
        	{
        		this.fn_alert("ERRS000144","저장정보","MSDS최종개정일","question");   // &1은(는) 필수입력사항입니다.
        		this.cal_msdsFnlChgDtm.setFocus();
        		return false;
        	}

        	// 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리
        	// 레터파일(첨부파일 + 최종변경일), 자체증빙(여부 + 최종변경일)
        	var lns={
        		  todayYmd : this.gfn_getDate()
        		, msdsFile : { attcFl: this.ds_msdsMaster.getColumn(0, 'DOC_ID1'         ), fnlChgDt: this.ds_msdsMaster.getColumn(0, 'MSDS_FNL_CHG_DT'      ) , url: this.ds_msdsMaster.getColumn(0, 'RND_MSDS_URL') }
        		, locFile  : { attcFl: this.ds_msdsMaster.getColumn(0, 'LOC_ATTC_FILENM' ), fnlChgDt: this.ds_msdsMaster.getColumn(0, 'LOC_ATFL_FNL_CHG_DT'  ) }
        		, svronCert: { certYn: this.ds_msdsMaster.getColumn(0, 'SRVON_CERT_YN'   ), fnlChgDt: this.ds_msdsMaster.getColumn(0, 'SRVON_CERT_FNL_CHG_DT') }
        	};
        	// MSDS (첨부파일 + 최종변경일)
        	/*
        	if ( !this.gfn_isNull( lns.msdsFile.attcFl ) || !this.gfn_isNull( lns.msdsFile.fnlChgDt ) || !this.gfn_isNull( lns.msdsFile.url ) ) {
        		// 첨부파일 + Url
        		if (  this.gfn_isNull( lns.msdsFile.attcFl ) && this.gfn_isNull( lns.msdsFile.url ) ) {
        			this.fn_alert('ERRS000136', '저장', 'MSDS 파일, MSDS 경로', 'question');        // MSDS 파일,MSDS 경로 (&1 또는 &2 둘 중에 하나는 필수입니다)
        			return false;
        		}
        		if (  this.gfn_isNull( lns.msdsFile.fnlChgDt ) ) {
        			this.fn_alert('ERRS000144', '저장', 'MSDS 최종개정일 ', 'question');            // &1은(는) 필수입력사항입니다.
        			return false;
        		}
        		if ( !this.gfn_isNull( lns.msdsFile.fnlChgDt ) && lns.todayYmd < lns.msdsFile.fnlChgDt ) {
        			alert('MSDS 최종개정일은 미래날짜 입력이 불가능 합니다.');
        			return false;
        		}
        	}*/

        	// 레터(첨부파일 + 최종변경일)
        	if ( !this.gfn_isNull( lns.locFile.attcFl ) || !this.gfn_isNull( lns.locFile.fnlChgDt ) ) {

        		if (  this.gfn_isNull( lns.locFile.attcFl ) ) {
        			this.fn_alert('ERRS000144', '저장', '레터파일 ', 'question');
        			return false;
        		}
        		if (  this.gfn_isNull( lns.locFile.fnlChgDt ) ) {
        			this.fn_alert('ERRS000144', '저장', '레터파일 최종개정일 ', 'question');
        			return false;
        		}
        		if ( !this.gfn_isNull( lns.locFile.fnlChgDt ) && lns.todayYmd < lns.locFile.fnlChgDt ) {
        			alert('레터파일 최종개정일은 미래날짜 입력이 불가능 합니다.');
        			return false;
        		}
        	}

        	// 자체증빙(여부 + 최종변경일)
        	if ( (!this.gfn_isNull( lns.svronCert.certYn ) && 'Y' == lns.svronCert.certYn) || !this.gfn_isNull( lns.svronCert.fnlChgDt ) ) {

        		if (  this.gfn_isNull( lns.svronCert.certYn ) || 'Y' != lns.svronCert.certYn ) {
        			this.fn_alert('ERRS000144', '저장', '자체증빙여부 ', 'question');
        			return false;
        		}
        		if (  this.gfn_isNull( lns.svronCert.fnlChgDt ) ) {
        			this.fn_alert('ERRS000144', '저장', '자체증빙일 ', 'question');
        			return false;
        		}
        		if ( !this.gfn_isNull( lns.svronCert.fnlChgDt ) && lns.todayYmd < lns.svronCert.fnlChgDt ) {
        			alert('자체증빙일은 미래날짜 입력이 불가능 합니다.');
        			return false;
        		}
        	}
        	// /2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리


        	// 물질비중 필수 입력 체크
        	if(this.gfn_isNull(this.msk_mtlGravity.value))
        	{
        		this.fn_alert("ERRS000144","저장정보","물질비중","question"); // &1은(는) 필수입력사항입니다.
        		this.msk_mtlGravity.setFocus();
        		return false;
        	}

        	// 성상 필수 입력 체크
        	if(this.gfn_isNull(this.cbo_phaseSprCd.value))
        	{
        		this.fn_alert("ERRS000144","저장정보","성상","question"); // &1은(는) 필수입력사항입니다.
        		this.cbo_phaseSprCd.setFocus();
        		return false;
        	}

        	// 화학물질정보 필수 입력 체크
        	if(this.ds_chmMtlList.getRowCount() == 0)
        	{
        		this.fn_alert("ERRS000144","저장정보","화학물질정보","question"); // &1은(는) 필수입력사항입니다.
        		return false;
        	}

        	// 유해화학물질 존재시 시약정보요약서 파일 필수 체크
        	if(this.ds_chmMtlList.getCaseCount("TOXIC_MTL1 == 'Y'")    > 0       /*유독물질*/
        	|| this.ds_chmMtlList.getCaseCount("LMT_MTL1 == 'Y'")      > 0       /*제한물질*/
        	|| this.ds_chmMtlList.getCaseCount("ACCD_PSB_MTL1 == 'Y'") > 0       /*사고대비물질*/
        	|| this.ds_chmMtlList.getCaseCount("PHBT_MTL1 == 'Y'")     > 0       /*금지물질*/
        	|| this.ds_chmMtlList.getCaseCount("PERMIT_MTL1 == 'Y'")   > 0)      /*허가물질*/
        	{
        		if(this.gfn_isNull(this.edt_fileName2.value))
        		{
        			this.fn_alert("ERRR000206","저장정보","","question");   // 유해화학물질이 존재하여 시약정보요약서 파일은 필수로 등록 하셔야 합니다.
        			this.edt_fileName2.setFocus();
        			return false;
        		}
        	}

        	// 30 * 1,024 * 1,024 = 31,457,280 size
        	// 1 * 1,024 * 1,024  =  1,048,576 size
        	if(this.ds_saveFileList.getRowCount() > 0)
        	{
        		for(var idx=0; idx<this.ds_saveFileList.getRowCount(); idx++)
        		{
        			if(this.ds_saveFileList.getColumn(idx,"ETC_FDS_2") == "del")
        			{
        				continue;
        			}

        			if(this.ds_saveFileList.getColumn(idx,"ATFL_LEN") > 31457280)
        			{
        				this.fn_alert("해당 파일 사이즈가 30M를 초과 합니다.","저장정보","","question"); // 해당 파일 사이즈가 {#1}를 초과 합니다.
        				return false;
        			}
        		}
        	}

        	if(this.ds_chmMtlList.getRowCount() > 0)
        	{
        		// CAS_NO 변경된 이력이 없을 경우 강제로 'U' 모드로 변경
        		if(!this.gfn_dsIsUpdated(this.ds_chmMtlList))
        		{
        			this.ds_chmMtlList.set_updatecontrol(false);
        			for(var idx=0; idx<this.ds_chmMtlList.getRowCount(); idx++)
        			{
        				this.ds_chmMtlList.setRowType(idx,"U");
        			}
        			this.ds_chmMtlList.set_updatecontrol(true);
        		}
        	}

             var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?

             if(result == 0)
             {
                 return false;
             }
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
            var strUrl      = "/rd/cms-err-repair/save-cms-err-dtl-stor.do";
            var strInDs     = "ds_search=ds_search:a"
        	                + " ds_master=ds_msdsMaster:a"
                            + " ds_chmMtlList=ds_chmMtlList:u"
        		            + " ds_saveFileList=ds_saveFileList:u";
            var strOutDs    = "ds_chmMtlListTemp=ds_chmMtlList"
        	                + " ds_chmMtlAddListTemp=ds_chmMtlAddList";
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
        	this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다

        	this.close("SAVE");
        };
        /**********************************************************************
                 09. 초기화
        ***********************************************************************/
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
        		var strMnfrNo  = this.ds_master.getColumn(0,"MNFR_NO");
        		var strPrdClcd = this.ds_master.getColumn(0,"PRD_CLCD");

        		// RND상품권한조회 구매담당자 & 상품담당자 정/부 체크
        		this.fn_getRndPrdAuthInq(strMnfrNo,strPrdClcd);

        		if(!this.gfn_isNull(this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD")))
        		{
        			this.lv_btnChkYn = this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD") == "30" ? "Y" : "N";
        		}
        	}

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.fn_compontAllControl();
        	}
        };

        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_exit : this.btn_exit
        						  , btn_close  : this.btn_close
        	                      };
        	var btnVisibleFalse = {
        							btn_save  : this.btn_save
        						//  , btn_consn : this.btn_consn
        	                      };

        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        };

        /**
         * MSDS정보화면제어
         */
        this.fn_MsdsInfoUiCtl = function(sVal)
        {
        	var strFlag = sVal == true ? false : true;

        	this.cal_msdsFnlChgDtm.set_readonly(sVal);		// MSDS 최종개정일
        	this.btn_file1.set_enable(strFlag);				// MSDS 파일 등록 버튼
        	this.edt_rndMsdsUrl.set_readonly(sVal);			// MSDS 경로
        	this.msk_mtlGravity.set_readonly(sVal);			// 물질비중
        	this.cbo_phaseSprCd.set_readonly(sVal);			// 성상
        	this.btn_add.set_enable(strFlag);				// 추가 버튼
        	this.btn_del.set_enable(strFlag);				// 삭제 버튼
        	this.btn_regulation.set_enable(strFlag);		// 규제확인정보 버튼
        	this.btn_file2.set_enable(strFlag);				// 시약요약정보 파일 버튼
        	this.btn_save.set_enable(strFlag);				// 저장 파일 버튼
        	this.grd_chmMtlList.set_readonly(sVal);			// 화학물질정보 그리드

        	// <!-- 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->
        	this.btn_file3.set_enable(strFlag);				// 레터파일 버튼
        	this.cal_locFnlChgDt.set_enable(strFlag);       // 레터파일 최종변경일
        	this.rdo_svronCertYn.set_enable(strFlag);       // 서브원인증 여부
        	this.cal_svronCertFnlChgDt.set_enable(strFlag); // 서브원인증 최종변경일
        	// <!-- 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리 -->
        };
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/

        /**
         * CMS 오류정비 요청정보 | 그리드 셀 클릭시 oncellclick 이벤트 발생 처리
         */
        this.grd_list_oncellclick = function(obj,e) {

        	var strSubsumtext = this.gfn_nvl(obj.getCellProperty("body",e.cell,"subsumtext"),"");
        	var strEstmDtlStatsCd = this.gfn_nvl(this.ds_detail.getColumn(e.row,"ESTM_DTL_STATS_CD"),"");

        	if (strSubsumtext == "상태" && strEstmDtlStatsCd == '30') {
        		var param = {
        			READ_ONLY: 'Y'
        			, RSN_TXT: this.ds_detail.getColumn(e.row, 'RSN_TXT')
        		};

        		this.gfn_openPopup(
        			'SSP_BO_RD_54_01'
        			, 'RD_POP::SSP_BO_RD_54_01.xfdl'
        			, param
        		);
        	}
        }

        /**
         * CMS오류정보 요청정보 그리드 데이터셋 값 변경전 cancolumnchange 이벤트 발생 처리
         */
        this.ds_detail_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "CHK")
        	{
        		var strFindRow = this.ds_detail.findRowExpr("USE_YN == 'Y' && ESTM_DTL_STATS_CD == '10'");

        		if(strFindRow != -1)
        		{
        			if(e.row != strFindRow)
        			{
        				this.ds_detail.setColumn(e.row,"CHK","0");
        				return false;
        			}
        		}
        	}
        };

        /**
         * CMS오류정보 요청정보 그리드 데이터셋 값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_detail_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CHK")
        	{
        		obj.set_enableevent(false);
        		for(var idx=0; idx<obj.rowcount; idx++)
        		{
        			if(e.row == idx)
        			{
        				obj.setColumn(idx,"CHK","1");
        				this.fn_RetM();
        				continue;
        			}
        			obj.setColumn(idx,"CHK","0");
        		}
        		obj.set_enableevent(true);
        	}
        };

        /**
         * 상품정보 [상품ID & 물질비중 & 성상] 컬럼 값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_master_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "MTL_GRAVITY" || e.columnid == "PHASE_SPR_CD")
        	{
        		this.btn_save.set_enable(true);
        	}
        };

        /**
         * 화학물질정보 데이터셋 값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_chmMtlList_oncolumnchanged = function(obj,e)
        {
        	// CAS_NO or MIN_CONTENT or MAX_CONTENT
        	if(e.columnid == "CAS_NO" || e.columnid == "MIN_CONTENT" || e.columnid == "MAX_CONTENT")
        	{
        		this.btn_rgntInfo.set_enable(false);
        		this.btn_save.set_enable(false);
        	}
        };

        /**
         * 파일등록 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_file_onclick = function(obj,e)
        {
        	var atflTrgtId=obj.id, atflTyIdx=atflTrgtId.substr(atflTrgtId.length-1), atflTyColId='DOC_ID'+atflTyIdx;
        	this.fileIndex     = this.atflTpCd[atflTyIdx];
        	this.imageViewerId = this["edt_fileName"+atflTyIdx];
        	this.imageFileYn   = false;

        	if(obj.text == "파일 등록")
        	{
        		this.FileUploadSingle.deleteItem(0);
        		this.FileUploadSingle.appendItem();
        		this.FileUploadSingle.filefindbuttons[0].click();
        	}
        	else
        	{
        		var result = this.fn_confirm( "ERRR000134", "파일 삭제","", "question" ); // 등록된 파일을 삭제하시겠습니까?
        		if(result)
        		{
        			var delRow = this.ds_saveFileList.findRow("ETC_FDS_2",this.fileIndex);
        			this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        			this.imageViewerId.set_value("");
        			this.edt_fileName_onchanged(this.imageViewerId,new nexacro.ChangeEventInfo());
        		}
        	}
        };

        /**
         * 이미지등록 아이템 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.FileUploadSingle.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]

        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        // 	if(!(sCompValue.toUpperCase() == "PPTX" || sCompValue.toUpperCase() == "PPT"
        // 	  || sCompValue.toUpperCase() == "DOCX" || sCompValue.toUpperCase() == "DOC"
        // 	  || sCompValue.toUpperCase() == "XLS"  || sCompValue.toUpperCase() == "XLSX"
        // 	  || sCompValue.toUpperCase() == "TEXT" || sCompValue.toUpperCase() == "ZIP"
        // 	  || sCompValue.toUpperCase() == "TXT"  || sCompValue.toUpperCase() == "PDF"
        // 	  || sCompValue.toUpperCase() == "PNG"  || sCompValue.toUpperCase() == "JPG"
        // 	  || sCompValue.toUpperCase() == "GIF"  || sCompValue.toUpperCase() == "JPEG"
        // 	  || sCompValue.toUpperCase() == "HWP"))
        // 	{
        	if ( this.upldAuthExts.indexOf( sCompValue.toUpperCase() ) < 0 ) {
        		this.fn_alert("파일형식이 아닙니다.","파일 정보","","information");  // 파일형식이 아닙니다.
        		return false;
        	}

        	var sFilePath = this.FileUploadSingle.value; 						// 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명

        	//var docRegId  = this.fileIndex == "95" ? this.gfn_nvl(this.ds_msdsMaster.getColumn(0,"DOC_ID1"),"") : this.gfn_nvl(this.ds_msdsMaster.getColumn(0,"DOC_ID2"),"");
        	var atflTrgt  = this.imageViewerId, atflTyIdx = atflTrgt.id.substr(atflTrgt.id.length-1), atflTyColId = 'DOC_ID'+atflTyIdx;
        	var docRegId  = this.gfn_nvl(this.ds_msdsMaster.getColumn(0, ('3'==atflTyIdx ? 'DOC_ID1' : atflTyColId)), '');  // MSDS파일과 동일한 파일등록ID를 사용하게 변경

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=" + this.fileIndex;

        	var bSucc = this.FileUploadSingle.upload(strUrl);		 // 파일 업로드
        };

        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_saveFileList.findRow("ETC_FDS_2", this.fileIndex);
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");

        	var strAtflNm = this.ds_uploadResult.getColumn(0,"ATFL_NM");
        	var textArry  = "";

        	for(var idx=0; idx<strAtflNm.length; idx++)
        	{
        		if(strAtflNm.charCodeAt(idx) != "32")
        		{
        		    textArry += String.fromCharCode(strAtflNm.charCodeAt(idx));
        		}
        	}

        	if(!this.gfn_isNull(textArry))
        	{
        		this.ds_uploadResult.setColumn(0,"ATFL_NM",textArry);
        	}

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        // 	if(this.fileIndex == "95")
        // 	{
        // 		// 최초 파일 등록시 상품문서등록ID Set
        // 		if(this.gfn_nvl(this.ds_msdsMaster.getColumn(0,"DOC_ID1"),"") == "")
        // 		{
        // 			this.ds_msdsMaster.setColumn(0,"DOC_ID1",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        // 		}
        // 	}
        // 	else
        // 	{
        // 		// 최초 파일 등록시 상품문서등록ID Set
        // 		if(this.gfn_nvl(this.ds_msdsMaster.getColumn(0,"DOC_ID2"),"") == "")
        // 		{
        // 			this.ds_msdsMaster.setColumn(0,"DOC_ID2",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        // 		}
        // 	}
        	var atflTrgt  = this.imageViewerId, atflTyIdx = atflTrgt.id.substr(atflTrgt.id.length-1), atflTyColId='DOC_ID'+atflTyIdx;

        	// 최초 파일 등록시 상품문서등록ID Set
        	var sDocRegId = this.ds_uploadResult.getColumn(0, 'DOC_REG_ID');
        	if (this.gfn_nvl(this.ds_msdsMaster.getColumn(0, atflTyColId), '') == '') {
        		this.ds_msdsMaster.setColumn(0, atflTyColId, sDocRegId);
        	}
        	if ('3'==atflTyIdx) { this.ds_msdsMaster.setColumn(0, 'LOC_ATTC_FILEID', sDocRegId); }

        	this.imageViewerId.set_value(this.ds_saveFileList.getColumn(nRow,"ATFL_NM"));
        	this.edt_fileName_onchanged(this.imageViewerId,new nexacro.ChangeEventInfo());
        };

        /**
         * 첨부파일 다운로드 클릭시 oneditclick  이벤트 발생 처리
         */
        this.edt_fileName_oneditclick = function(obj,e)
        {
        	var atflTrgtId=obj.id, atflTyIdx=atflTrgtId.substr(atflTrgtId.length-1), atflTyColId='DOC_ID'+atflTyIdx;
        	this.imageViewerId = this['edt_fileName'+ atflTyIdx];
        	this.fileIndex     = this.atflTpCd[atflTyIdx];
        	var findRow        = this.ds_saveFileList.findRow("ETC_FDS_2", this.fileIndex);

        	if(this.gfn_nvl(this.imageViewerId.value, '') != '') {
        		this.ds_uploadResult.clearData();
        		var nRow = this.ds_uploadResult.addRow();
        		this.ds_uploadResult.copyRow(nRow, this.ds_saveFileList, findRow);

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.FileDownload);
        	}
        };

        /**
         * 파일 첨부파일 변경시 onchanged 이벤트 발생 처리
         */
        this.edt_fileName_onchanged = function(obj,e)
        {
        	var atflTrgtId=obj.id, atflTyIdx = atflTrgtId.substr(atflTrgtId.length-1);
        	var tBtn=this['btn_file'+atflTyIdx];

        	tBtn.set_text('파일 등록');
        	obj.set_cursor('');

        	if ( this.gfn_nvl(obj.value, '') != '') {
        		tBtn.set_text('삭제');
        		obj.set_cursor('pointer');
        	}
        };

        /**
         * 시약정보URL 버튼 클릭시 onclick  이벤트 발생 처리
         */
        this.btn_rgntInfo_onclick = function(obj,e)
        {
        	var strCasNo = "";
        	var strTo    = "";

        	for(var idx=0; idx<this.ds_chmMtlList.getRowCount(); idx++)
        	{
        		if(strCasNo != "")
        		{
        			strCasNo += ",";
        			strTo    += ",";
        		}

        		strCasNo += this.ds_chmMtlList.getColumn(idx,"CAS_NO");
        		strTo    += this.ds_chmMtlList.getColumn(idx,"MAX_CONTENT");
        	}

        	var objApp = nexacro.getApplication();
            var appUrl      = objApp.xadl;
            var appUrlSplit = appUrl.split("/");
        	var objEnv 		= nexacro.getEnvironment();
         	var service     = objEnv.services["svcurl"];	// TypeDefinition 접근하기위한객체
        	var protocol 	= appUrlSplit[0];   			// 프로토콜이 : RUNTIME(file:),WEB(http)
        	var url         = "http://121.50.29.169:18080";

            if(appUrlSplit[2] == "adminssp.serveone.co.kr")
            {
                // 운영 시약정보 Site
        		url = "https://cms.serveone.co.kr:18081";
            }

        	// 시약정보 Site
        	system.execBrowser(url+"/nextMsds/business/interface/reagentView?reagent_key=copa&cas_no="+strCasNo+"&cas_ratio="+strTo);
        };

        /**
         * 화면 닫기 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_close_onclick = function(obj,e)
        {
        	// ERRR000060 : 수정을 취소하고 목록으로 이동하시겠습니까?
        	// ERRC000087 : 취소하시겠습니까?
        	var strMsg = this.sOptinoArg2 == "U" ? "ERRR000060" : "ERRC000087";
        	var result = this.fn_confirm(strMsg, "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	var strClose = !this.gfn_isNull(this.lvSaveMode) ? this.lvSaveMode : "CLOSE";

        	this.fn_saveMultiFileDelUpdate(strClose);
        };

        /**
         * 화면 취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_exit_onclick = function(obj,e)
        {
        	// ERRR000060 : 수정을 취소하고 목록으로 이동하시겠습니까?
        	// ERRC000087 : 취소하시겠습니까?
        	var strMsg = this.sOptinoArg2 == "U" ? "ERRR000060" : "ERRC000087";
        	var result = this.fn_confirm(strMsg, "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	var strExit = !this.gfn_isNull(this.lvSaveMode) ? this.lvSaveMode : "EXIT";

        	this.fn_saveMultiFileDelUpdate(strExit);
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_StatPiCall = function()
        {
            var strSvc      = "PiStatCall";
            var strUrl      = "/rd/cms-err-repair/cms-pi-call-stat.do";
            var strInDs     = "ds_master=ds_master";
            var strOutDs    = "ds_chmMtlListTemp=ds_chmMtlList";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_PrdPiCall = function()
        {
            var strSvc      = "PiPrdCall";
            var strUrl      = "/rd/cms-err-repair/cms-pi-call-prd.do";
            var strInDs     = "ds_master=ds_master";
            var strOutDs    = "ds_chmMtlListTemp=ds_chmMtlList";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        // 서브원 인증여부
        this.rdo_svronCertYn_onitemchanged = function(obj,e)
        {
        	var ds=this.ds_msdsMaster, isYes = obj.value == 'Y';
        	if (!isYes) {
        		ds.setColumn(0, 'SRVON_CERT_FNL_CHG_DT' , null);
        // 		ds.setColumn(0, 'SRVON_CERT_UPD_DATE'   , null);
        // 		ds.setColumn(0, 'SRVON_CERT_UPDPSN_IDNM', null);
        	}

        	this.cal_svronCertFnlChgDt.visible = isYes;
        	//if (isYes) { this.cal_svronCertFnlChgDt.setFocus(); }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.stc_hubHnlDisTpNm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_pubOnlySprNm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_chmMtlPrdYn.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_prdChrpsnNm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_chmMtlInfoYn.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_msdsYn.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_bzplcNm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_oprUnitNm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.btn_estmReqCnc.addEventHandler("onclick",this.btn_estmReqCnc_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_regulation.addEventHandler("onclick",this.btn_regulation_onclick,this);
            this.btn_estmReq.addEventHandler("onclick",this.btn_estmReq_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.stcTitle09_01_01_00_00.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_01_01_00_00_00.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.edt_cprtcpId.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_cprtcpId.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.edt_fileName1.addEventHandler("oneditclick",this.edt_fileName_oneditclick,this);
            this.edt_fileName1.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.btn_file1.addEventHandler("onclick",this.btn_file_onclick,this);
            this.msk_mtlGravity.addEventHandler("oninput",this.edtCustNm_oninput,this);
            this.msk_mtlGravity.addEventHandler("onkeyup",this.edtCustNm_onkeyup,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.edt_fileName2.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName2.addEventHandler("oneditclick",this.edt_fileName_oneditclick,this);
            this.btn_file2.addEventHandler("onclick",this.btn_file_onclick,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.btn_rgntInfo.addEventHandler("onclick",this.btn_rgntInfo_onclick,this);
            this.edt_fileName3.addEventHandler("oneditclick",this.edt_fileName_oneditclick,this);
            this.edt_fileName3.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.btn_file3.addEventHandler("onclick",this.btn_file_onclick,this);
            this.rdo_svronCertYn.addEventHandler("onitemchanged",this.rdo_svronCertYn_onitemchanged,this);
            this.stcTitle09_01_01_00_00_01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.edt_rndMsdsUrl.addEventHandler("oninput",this.edtCustNm_oninput,this);
            this.edt_rndMsdsUrl.addEventHandler("onkeyup",this.edtCustNm_onkeyup,this);
            this.ds_detail.addEventHandler("oncolumnchanged",this.ds_detail_oncolumnchanged,this);
            this.ds_detail.addEventHandler("cancolumnchange",this.ds_detail_cancolumnchange,this);
            this.ds_chmMtlList.addEventHandler("oncolumnchanged",this.ds_chmMtlList_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_RD_54.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
