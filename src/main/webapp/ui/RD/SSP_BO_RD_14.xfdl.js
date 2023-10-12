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
            this.set_titletext("R&D 구매정보 관리 상세");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,726);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"DSTRB_STD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TB_PC_PRD_PRC_DTLS_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"VAL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"STPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_PULL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_CRT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PI_EXCEPTION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_purgInfo_L", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_VLD_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_FNL_CHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PC_PRC_COND_DTLS_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_GB_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_DIS_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_FNL_CHGD\" type=\"INT\" size=\"1\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"LOC_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATFL_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATFL_UPD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATTC_FILE_UPDPSN_IDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_UPD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_UPDPSN_IDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MSDS_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"MSDS_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"PI_EXCEPTION_RETRY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qtyDcList_L", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_COND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"STR_QTY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_purgInfo_R", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_VLD_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_FNL_CHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PC_PRC_COND_DTLS_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_GB_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_DIS_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"CONSN_REQ_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATFL_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATFL_UPD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATTC_FILE_UPDPSN_IDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_UPD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_UPDPSN_IDNM\" type=\"STRING\" size=\"256\"/><Column id=\"PI_EXCEPTION_RETRY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qtyDcList_R", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_COND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"STR_QTY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kcCertInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kcCertInfoList_R", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdPurgInfoSync", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INDV_PKG_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"INDV_PKG_SPR_CD\">10</Col><Col id=\"PRD_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveFileList_R", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delKcCertInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","22",null,null,"0","-284",null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_background("white");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","143",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","112",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","81",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","50",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround02","555","50","254","33",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","20","50","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","20","81","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_attrValList","165","116","410","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_attrValList","20","112","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_stprc","20","143","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기준가");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_basisUnitCd","599","112","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dstrbStdPrc","599","143","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("List Price");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcpNm","599","50","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNm","599","81","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","20","210","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("구매 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","28","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("상품 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save_L","398","953","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save_R","945","953","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("합의요청");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","165","86","410","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","745","84","410","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitCd","745","116","410","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dstrbStdPrc","745","147","410","23",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_stprc","165","148","410","23",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L04","20","360","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L03","20","329","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L02","20","298","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00","20","237","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("항목");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_minOdrQty_L","20","298","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("최소발주수량");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdPrc_L","20","329","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("매입가");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dlvAmt_L","20","360","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("배송비");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L05","20","390","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L06","20","420","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L07","20","450","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dlvLt_L","20","390","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("평균배송일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00","20","420","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("가격유효기간");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_kcCertYnTemp_L","20","450","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("KC인증대상여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L08","20","480","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L09","20","510","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L16","20","726","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L17","20","756","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L18","20","786","630","157",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_msds_R10","89","480","121","32",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_msds_R12","89","510","121","32",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("URL");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_dtdc_R01","20","726","70","62",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("기간할인");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_dtdc_R11","89","726","121","32",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("기간");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_dtdc_R12","89","756","121","32",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("할인금액");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_qtydc_R01","20","786","190","157",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("물량할인");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qtyDcList_L","219","824","404","109",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_qtyDcList_L");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("물량할인이 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"PRD_ATTR_CD\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"SRT_SO\"/><Cell col=\"4\" text=\"할인금액\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ATTR_CD\"/><Cell col=\"1\" cssclass=\"grd_WF_bg_image\" displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:STR_QTY_CNT\" displaytype=\"maskeditcontrol\" edittype=\"none\" textAlign=\"right\" editinputtype=\"number\" editmaxlength=\"15\" maskeditlimitbymask=\"both\" maskeditformat=\"!###,###,###,##0\" maskeditautoselect=\"true\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:SRT_SO\"/><Cell col=\"4\" displaytype=\"maskeditcontrol\" text=\"bind:QTY_DC_AMT\" edittype=\"none\" editinputtype=\"number\" textAlign=\"right\" editmaxlength=\"15\" maskeditautoselect=\"true\" maskeditformat=\"!###,###,###,###,###,##0\" maskeditlimitbymask=\"both\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L01","20","268","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kcCertYnTemp_L","218","453","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_kcCertYnTemp_L_innerdataset = new nexacro.NormalDataset("rdo_kcCertYnTemp_L_innerdataset", obj);
            rdo_kcCertYnTemp_L_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(rdo_kcCertYnTemp_L_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_L1","548","484","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName_L1","218","484","325","23",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","165","54","410","23",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","745","54","410","23",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","173",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_purgChrpsnNm","20","173","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_updpsnNm","599","173","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_updpsnNm","745","177","410","23",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnNm","165","178","410","23",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_splPsbYn_L","218","272","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_splPsbYn_L_innerdataset = new nexacro.NormalDataset("rdo_splPsbYn_L_innerdataset", obj);
            rdo_splPsbYn_L_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">불가</Col></Row></Rows>");
            obj.set_innerdataset(rdo_splPsbYn_L_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_01","210","237","440","32",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("현재정보");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_splPsbYn_L","20","268","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("공급가능상태");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_minOdrQty_L","218","303","325","23",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("!###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_prdPrc_L","218","334","325","23",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("!###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dlvAmt_L","218","364","325","23",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dlvLt_L","218","394","325","23",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("!###0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_rndDcQty_L","218","760","325","23",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_autoselect("true");
            obj.set_format("!###,###,###,###,##0");
            obj.set_limitbymask("both");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R02","690","299",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R18","690","786",null,"157","20",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qtyDcList_R","706","824",null,"109","134",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_qtyDcList_R");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("물량할인이 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"PRD_ATTR_CD\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"SRT_SO\"/><Cell col=\"4\" text=\"할인금액\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ATTR_CD\"/><Cell col=\"1\" cssclass=\"grd_WF_bg_image\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:STR_QTY_CNT\" displaytype=\"maskeditcontrol\" edittype=\"mask\" textAlign=\"right\" editinputtype=\"number\" editmaxlength=\"15\" maskeditlimitbymask=\"both\" maskeditformat=\"!###,###,###,##0\" maskeditautoselect=\"true\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:SRT_SO\"/><Cell col=\"4\" displaytype=\"maskeditcontrol\" text=\"bind:QTY_DC_AMT\" edittype=\"mask\" editinputtype=\"number\" textAlign=\"right\" editmaxlength=\"15\" maskeditautoselect=\"true\" maskeditformat=\"!###,###,###,###,##0\" maskeditlimitbymask=\"both\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R01","690","268",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"794","67","24","135",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("- 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"794","68","24","btn_del:4",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("+ 추가");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_splPsbYn_R","705","272","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var rdo_splPsbYn_R_innerdataset = new nexacro.NormalDataset("rdo_splPsbYn_R_innerdataset", obj);
            rdo_splPsbYn_R_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">불가</Col></Row></Rows>");
            obj.set_innerdataset(rdo_splPsbYn_R_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_01_00","690","237",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("합의요청 발송 정보");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_minOdrQty_R","703","303","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_format("!###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","45","100.00%","5",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","205","100.00%","5",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","232","100.00%","5",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","939","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mro_save","669","965","87","24",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("S-MRO I/F");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","599","965",null,"24","btn_mro_save:4",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L10","20","540","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_msds_R13","89","540","121","32",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("최종개정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_msds_R01","20","480","70","92",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("MSDS");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rndMsdsUrl_L","218","514","325","23",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","160","16",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("R&D 구매정보 상세");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","221","797","290","19",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","515","797","98","19",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_msdsFnlChgDtm_L","218","544","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","580","147","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_02_00","1160","147","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","548","332","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_03","548","362","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","548","392","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_rndDcVldStrDtm_L","218","731","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00","349","731","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_rndDcVldEndDtm_L","364","731","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldStrDt_L","218","425","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","349","425","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldEndDt_L","364","425","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_vldGbNm","500","424","74","25",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_03_00","548","759","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L11","20","571","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L12","20","602","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L13","20","633","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L14","20","664","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_loc_R01","20","571","70","94",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("레터");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_loc_R11","89","571","121","32",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_loc_R12","89","602","121","32",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("최종개정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_loc_R13","89","633","121","32",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("수정일시");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_loc_R14","366","633","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_L3","548","576","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_locFnlChgDt_L","218","606","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locUpdDt_L","218","637","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_readonly("true");
            obj.set_value("2023-01-01 00:00:00");
            obj.set_text("2023-01-01 00:00:00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName_L3","218","575","325","24",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textDecoration("underline");
            obj.set_color("royalblue");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locUpdpsn_L","472","637","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("BG_L15","20","695","630","32",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_svron_R01","20","664","70","63",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("자체증빙");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_svron_R11","89","664","121","32",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("증빙여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_svronCertYn_L","218","670","144","22",null,null,null,null,null,null,this);
            obj.set_initvalueid("N");
            obj.set_taborder("122");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("0");
            var rdo_svronCertYn_L_innerdataset = new nexacro.NormalDataset("rdo_svronCertYn_L_innerdataset", obj);
            rdo_svronCertYn_L_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_svronCertYn_L_innerdataset);
            obj.set_text("미사용");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_svronCertFnlChgDt_L","472","668","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_svron_R12","366","664","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("자체증빙일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svronCertUpdDt_L","218","699","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_svron_R13","89","695","121","32",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("수정일시");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_svron_R14","366","695","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svronCertUpdpsn_L","472","699","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R04","690","360",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R03","690","329",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R05","690","390",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R06","690","420",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R07","690","450",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround07_02_00_00_00_00_00_00_00","785","419","325","33",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_prdPrc_R","703","333","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_limitbymask("both");
            obj.set_format("!###,###,###,###,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dlvAmt_R","703","363","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dlvLt_R","703","393","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_format("!###0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1005","391","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1005","361","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1005","331","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldStrDt_R","703","424","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","837","424","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldEndDt_R","853","424","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kcCertYnTemp_R","703","452","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var rdo_kcCertYnTemp_R_innerdataset = new nexacro.NormalDataset("rdo_kcCertYnTemp_R_innerdataset", obj);
            rdo_kcCertYnTemp_R_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(rdo_kcCertYnTemp_R_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R08","690","480",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R09","690","510",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R16","690","726",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R17","690","756",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround07_02_00_01_00","785","735","325","33",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_rndDcVldStrDtm_R","703","731","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","837","731","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_rndDcVldEndDtm_R","853","731","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_rndDcQty_R","703","760","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_limitbymask("both");
            obj.set_format("!###,###,###,###,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","1005","758","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R10","690","540",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName_R1","703","484","325","23",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rndMsdsUrl_R","703","514","325","23",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_msdsFnlChgDtm_R","703","544","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R11","690","571",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R15","690","695",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R14","690","664",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R13","690","633",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("BG_R12","690","602",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locUpdDt_R","703","637","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_readonly("true");
            obj.set_value("2023-01-01 00:00:00");
            obj.set_visible("true");
            obj.set_text("2023-01-01 00:00:00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locUpdpsn_R","957","637","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_svronCertYn_R","703","670","144","22",null,null,null,null,null,null,this);
            obj.set_initvalueid("N");
            obj.set_taborder("166");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("0");
            obj.set_visible("true");
            obj.set_readonly("true");
            var rdo_svronCertYn_R_innerdataset = new nexacro.NormalDataset("rdo_svronCertYn_R_innerdataset", obj);
            rdo_svronCertYn_R_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_svronCertYn_R_innerdataset);
            obj.set_text("미사용");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_svronCertFnlChgDt_R","957","668","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svronCertUpdDt_R","703","699","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svronCertUpdpsn_R","957","699","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName_R3","703","575","325","24",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_locFnlChgDt_R","703","606","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_R","1033","484","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("파일 등록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_R3","1033","576","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("파일 등록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_loc_R14_00","851","633","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_svron_R12_00","851","664","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("자체증빙일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("ttl_svron_R14_00","851","695","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_text("수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,726,this,function(p){});
            obj.set_description("R&D 구매정보 관리 상세");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cal_msdsFnlChgDtm_L","value","ds_purgInfo_L","MSDS_FNL_CHG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_prdNm","value","ds_master","PRD_PULL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_cprtcpNm","value","ds_master","CPRTCP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_prdClcd","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_mnfrNm","value","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_attrValList","value","ds_master","VAL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_basisUnitCd","value","ds_master","BASIS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","msk_stprc","value","ds_master","STPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","msk_dstrbStdPrc","value","ds_master","DSTRB_STD_PRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_purgChrpsnNm","value","ds_master","PURG_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_updpsnNm","value","ds_master","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","rdo_splPsbYn_L","value","ds_purgInfo_L","SPL_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","msk_minOdrQty_L","value","ds_purgInfo_L","MIN_ODR_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","msk_prdPrc_L","value","ds_purgInfo_L","PRD_PRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","msk_dlvLt_L","value","ds_purgInfo_L","DLV_LT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","rdo_kcCertYnTemp_L","value","ds_purgInfo_L","KC_CERT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_rndMsdsUrl_L","value","ds_purgInfo_L","RND_MSDS_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cal_rndDcVldStrDtm_L","value","ds_purgInfo_L","RND_DC_VLD_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","cal_rndDcVldEndDtm_L","value","ds_purgInfo_L","RND_DC_VLD_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","msk_rndDcQty_L","value","ds_purgInfo_L","RND_DC_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cal_vldStrDt_L","value","ds_purgInfo_L","VLD_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","cal_vldEndDt_L","value","ds_purgInfo_L","VLD_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","rdo_splPsbYn_R","value","ds_purgInfo_R","SPL_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","msk_minOdrQty_R","value","ds_purgInfo_R","MIN_ODR_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","stc_vldGbNm","text","ds_purgInfo_L","VLD_GB_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","cal_locFnlChgDt_L","value","ds_purgInfo_L","LOC_ATFL_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","edt_locUpdDt_L","value","ds_purgInfo_L","LOC_ATFL_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","edt_fileName_L3","value","ds_purgInfo_L","LOC_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","edt_locUpdpsn_L","value","ds_purgInfo_L","LOC_ATTC_FILE_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","rdo_svronCertYn_L","value","ds_purgInfo_L","SRVON_CERT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","cal_svronCertFnlChgDt_L","value","ds_purgInfo_L","SRVON_CERT_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","edt_svronCertUpdDt_L","value","ds_purgInfo_L","SRVON_CERT_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","edt_svronCertUpdpsn_L","value","ds_purgInfo_L","SRVON_CERT_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","msk_prdPrc_R","value","ds_purgInfo_R","PRD_PRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","msk_dlvLt_R","value","ds_purgInfo_R","DLV_LT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","cal_vldStrDt_R","value","ds_purgInfo_R","VLD_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","cal_vldEndDt_R","value","ds_purgInfo_R","VLD_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","rdo_kcCertYnTemp_R","value","ds_purgInfo_R","KC_CERT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cal_rndDcVldStrDtm_R","value","ds_purgInfo_R","RND_DC_VLD_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","cal_rndDcVldEndDtm_R","value","ds_purgInfo_R","RND_DC_VLD_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","msk_rndDcQty_R","value","ds_purgInfo_R","RND_DC_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edt_fileName_R3","value","ds_purgInfo_R","LOC_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edt_rndMsdsUrl_R","value","ds_purgInfo_R","RND_MSDS_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","cal_msdsFnlChgDtm_R","value","ds_purgInfo_R","MSDS_FNL_CHG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","edt_locUpdDt_R","value","ds_purgInfo_R","LOC_ATFL_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","edt_locUpdpsn_R","value","ds_purgInfo_R","LOC_ATTC_FILE_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","rdo_svronCertYn_R","value","ds_purgInfo_R","SRVON_CERT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","cal_svronCertFnlChgDt_R","value","ds_purgInfo_R","SRVON_CERT_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","edt_svronCertUpdDt_R","value","ds_purgInfo_R","SRVON_CERT_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","edt_svronCertUpdpsn_R","value","ds_purgInfo_R","SRVON_CERT_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","cal_locFnlChgDt_R","value","ds_purgInfo_R","LOC_ATFL_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","edt_svronCertUpdpsn_L","tooltiptext","ds_purgInfo_L","SRVON_CERT_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","cal_svronCertFnlChgDt_L","tooltiptext","ds_purgInfo_L","SRVON_CERT_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","edt_svronCertUpdDt_L","tooltiptext","ds_purgInfo_L","SRVON_CERT_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","edt_locUpdpsn_L","tooltiptext","ds_purgInfo_L","LOC_ATTC_FILE_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","edt_locUpdDt_L","tooltiptext","ds_purgInfo_L","LOC_ATFL_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","cal_locFnlChgDt_L","tooltiptext","ds_purgInfo_L","LOC_ATFL_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","edt_fileName_L3","tooltiptext","ds_purgInfo_L","LOC_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","edt_fileName_L1","tooltiptext","ds_purgInfo_L","MSDS_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","edt_fileName_L1","value","ds_purgInfo_L","MSDS_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","edt_fileName_R1","value","ds_purgInfo_R","MSDS_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","edt_fileName_R1","tooltiptext","ds_purgInfo_R","MSDS_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_14.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_14.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_14.xfdl(R&D 구매정보 관리 상세/수정)
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/05/24
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
        this.sOptinoArg1    = "";
        this.sOptinoArg2    = "";
        this.sParamArg1     = "";
        this.sParamArg2     = "";
        this.sParamArg3     = "";
        this.sParamArg4     = "";
        this.lvchkColidDs   = "PRD_PRC$DLV_LT$VLD_STR_DT$VLD_END_DT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "매입가$평균배송일$가격유효시작일$가격유효종료일";
        this.lvGetDate      = "";
        this.lvSaveMode     = "";
        this.lv_piCount     = "";
        this.lv_minOrdQty   = ""; // 최소발주수량 Set
        this.lv_avgDlcst    = ""; // 평균배송비 Set
        this.lv_btnChkYn    = "";

        this.atflTpCd  = ['','95', 'S2', '9A'];  // 95: MSDS, S2: 시양정보요약서, 9A: LOC
        this.atflColId = ['','PRD_ATTC_FILEID', '', 'LOC_ATTC_FILEID'];
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

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal03))
        	{
        		 this.sParamArg3 = this.getOwnerFrame().pv_sVal03;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal04))
        	{
        		 this.sParamArg4 = this.getOwnerFrame().pv_sVal04;
        	}

            var strDs    = "ds_rndPrdAuthCombo";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "CHRPSN_TEAM_SPR_CD";                    // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X";                                   	// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
        	this.ds_search.setColumn(nRow,"CO_CD",    this.lv_coCd);	   // 회사코드
        	this.ds_search.setColumn(nRow,"PRD_ID",   this.sParamArg1);    // 상품ID
        	this.ds_search.setColumn(nRow,"PRD_NM",   this.sParamArg2);    // 상품명
        	this.ds_search.setColumn(nRow,"CPRTCP_ID",this.sParamArg3);    // 협력사ID
        	this.ds_search.setColumn(nRow,"CPRTCP_NM",this.sParamArg4);    // 협력사명
        	this.ds_search.setColumn(nRow,"TO_DATE",  "TO_DATE");          // 현재 판매중 구매정보

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
                    case "Save_L":
                            this.fn_PostSave_L();
                        break;
                    case "Save_R":
        				var responseMessage = this.ds_master.getColumn(0, "PI_EXCEPTION_CODE");
        				if (responseMessage == "ERRR000490") {
        					var responce = this.fn_confirm("ERRR000490", "일괄 처리", "PI_SYSTEM", "question");	// PI 시스템의 응답이 없습니다. 재시도하시겠습니까?
        					if (responce) {
        						this.ds_purgInfo_R.setColumn(0, "PI_EXCEPTION_RETRY", "Y");
        						this.fn_Save_R();
        					} else {
        						this.fn_saveMultiFileDelUpdate("EXIT");
        					}
        				} else {
        					this.fn_PostSave_R();
        				}
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
        		case "SSP_BO_RD_55":
        			 if(!this.gfn_isNull(strVal))
        			 {
        				 // 일반
        				 var sRtn = strVal.split(",");

        				 if(sRtn[0] == "EXIT" || sRtn[0] == "CLOSE")
        				 {
        				     // KC인증대상 리스트 미존재시 'N' 으로 Set
        					 if(this.ds_kcCertInfoList.getRowCount() == 0)
        					 {
        					     this.rdo_kcCertYnTemp_L.set_value("N");
        					 }
        				 }
        			 }
        			 break;
                default:
                    break;
            }
        };

        /**
         * KC인증정보 등록/변경 팝업에선 저장후 넘어온 데이터셋
         */
        this.fn_dsChildCopydsDummy = function(dsKcCertInfoList,dsUploadResult,delKcCertInfoList)
        {
        	this.lvSaveMode = "U";

        	// KC인증대상 리스트 Copy
        	this.ds_kcCertInfoList.clearData();
        	this.ds_kcCertInfoList.copyData(dsKcCertInfoList);

        	// KC인증대상 리스트 미존재시 'N' Set
        	if(this.ds_kcCertInfoList.getRowCount() == 0)
        	{
        		this.rdo_kcCertYnTemp_L.set_value("N");
        	}

        	// KC인증대상여부 삭제 리스트 Copy
        	this.ds_delKcCertInfoList.clearData();
        	this.ds_delKcCertInfoList.copyData(delKcCertInfoList);

        	// 첨부파일 리스트 Copy
        	this.ds_saveFileList.clearData();
        	this.ds_saveFileList.copyData(dsUploadResult);
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
            var strUrl      = "/rd/purg-info-mng/select-purg-info-dtl-inq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master"
        	                + " ds_purgInfo_L=ds_purgInfo_L"
        					+ " ds_qtyDcList_L=ds_qtyDcList_L"
        					+ " ds_kcCertInfoList=ds_kcCertInfoList"
        	                + " ds_purgInfo_R=ds_purgInfo_R"
        					+ " ds_qtyDcList_R=ds_qtyDcList_R"
        					+ " ds_kcCertInfoList_R=ds_kcCertInfoList_R"
        					+ " ds_saveFileList=ds_saveFileList"
        					+ " ds_saveFileList_R=ds_saveFileList_R";
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
        	// MRO생성여부가 미존재시 S-MRO I/F 버튼 활성화
        // 	if(this.ds_master.getColumn(0,"MRO_CRT_YN") == "N")
        // 	{
        // 		this.btn_mro_save.set_enable(true);
        // 	}

        	// 최초 합의요청 발송 정보가 없을시 좌측 현재정보 초기 데이터를 Set
        	if(this.ds_purgInfo_R.getRowCount() == 0)
        	{
        		this.ds_purgInfo_R.copyData(this.ds_purgInfo_L);
        		this.ds_qtyDcList_R.copyData(this.ds_qtyDcList_L);
        		this.ds_saveFileList_R.copyData(this.ds_saveFileList);
        	}
        	else
        	{
        		this.btn_save_R.set_enable(false);
        	}

        	// 가격유효기간 미래시작일로 변경시 기데이터로 되돌아가기위한 변수 값 Set
        	this.lv_minOrdQty = this.ds_purgInfo_R.getColumn(0,"MIN_ODR_QTY"); // 최소발주수량 Set
        	this.lv_avgDlcst  = this.ds_purgInfo_R.getColumn(0,"DLV_LT");      // 평균배송비 Set

        	// 합의요청 발송 정보 Default 무조건 Y : 가능
        	this.rdo_splPsbYn_R.set_value("Y");

        	// 현재일자로부터 1년 Set
        	var sVldStrDt = this.cal_vldStrDt_R.value;
        	var sVldEndDt = this.cal_vldEndDt_R.value;

        	if (undefined == sVldStrDt || '' == sVldStrDt) { this.cal_vldStrDt_R.set_value(this.lvGetDate); }
        	if (undefined == sVldEndDt || '' == sVldEndDt) { this.cal_vldEndDt_R.set_value(this.gfn_addDate(this.gfn_addMonth(this.lvGetDate,12), -1)); }

        	if (this.ds_purgInfo_L.getColumn(0,"SPL_PSB_YN") == "N") {
        		// 협력사가 직접 공급가능상태 불가로 저장했을 경우에만
        		if(this.ds_purgInfo_L.getColumn(0,"SPL_DIS_SBJ_CD") == "30") {
        			// 현재정보 공급가능상태여부 수정 불가
        			this.rdo_splPsbYn_L.set_readonly(true);
        		}
        	}

        	// MSDS첨부파일 존재시
        	if (this.ds_saveFileList.getRowCount() > 0) {
        		// 현재정보 MSDS파일 Set
        		var msdsAttcFileidL=this.ds_purgInfo_L.getColumn(0, 'MSDS_ATTC_FILEID'), msdsAttcFilenmL=this.ds_purgInfo_L.getColumn(0, 'MSDS_ATTC_FILENM');
        		if (!this.gfn_isNull(msdsAttcFileidL) && !this.gfn_isNull(msdsAttcFilenmL)) {
        			var findRow = this.ds_saveFileList.findRow("DOC_REG_ID", msdsAttcFileidL);
        			if(findRow != -1) {
        				//this.edt_fileName_L1.set_value(this.ds_saveFileList.getColumn(findRow, "ATFL_NM"));
        				this.edt_fileName_onchanged(this.edt_fileName_L1,new nexacro.ChangeEventInfo());
        			}
        		}

        		// 현재정보 LOC 파일 Set
        		var locAttcFileidL=this.ds_purgInfo_L.getColumn(0, 'LOC_ATTC_FILEID'), locAttcFilenmL=this.ds_purgInfo_L.getColumn(0, 'LOC_ATTC_FILENM');
        		if (!this.gfn_isNull(locAttcFileidL) && !this.gfn_isNull(locAttcFilenmL)) {
        			var findRow = this.ds_saveFileList.findRow("DOC_REG_ID", locAttcFileidL);
        			if(findRow != -1) {
        				//this.edt_fileName_L3.set_value(this.ds_saveFileList.getColumn(findRow, "ATFL_NM"));
        				this.edt_fileName_onchanged(this.edt_fileName_L3,new nexacro.ChangeEventInfo());
        			}
        		}
        	}

        	// MSDS첨부파일 존재시
        	if (this.ds_saveFileList_R.getRowCount() > 0) {
        		// 합의요청 발송 정보 MSDS파일 Set
        		var msdsAttcFileidR=this.ds_purgInfo_R.getColumn(0, 'PRD_ATTC_FILEID');
        		if (!this.gfn_isNull(msdsAttcFileidR)) {
        			var findRow = this.ds_saveFileList_R.findRow("DOC_REG_ID", msdsAttcFileidR);
        			if(findRow != -1) {
        				//this.edt_fileName_R1.set_value(this.ds_saveFileList_R.getColumn(findRow,"ATFL_NM"));
        			}
        		}

        		// 현재정보 LOC 파일 Set
        		var locAttcFileidR=this.ds_purgInfo_R.getColumn(0, 'LOC_ATTC_FILEID');
        		if (!this.gfn_isNull(locAttcFileidR)) {
        			var findRow = this.ds_saveFileList_R.findRow("DOC_REG_ID", locAttcFileidR );
        			if(findRow != -1) {
        				//this.edt_fileName_R3.set_value(this.ds_saveFileList_R.getColumn(findRow, 'ATFL_NM'));
        			}
        		}
        	}

        	// RND화면권한제어 호출
        	this.fn_setRndUiAuthCtl();
        };
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.btn_save_L_onclick = function(obj,e)
        {
            this.fn_Save_L();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave_L = function()
        {
            if(!this.gfn_dsIsUpdated(this.ds_purgInfo_L) && !this.gfn_dsIsUpdated(this.ds_kcCertInfoList) && this.gfn_isNull(this.lvSaveMode))
            {
                this.fn_alert("ERRC000035","저장정보","","question"); // 변경된 이력이 없습니다.
                return false;
            }

        	// 최종개정일 일자 체크
        	if(!this.fn_getDefaultDateChk(this.cal_msdsFnlChgDtm_L
        	                             ,this.cal_msdsFnlChgDtm_L
        								 ,"최종개정일"
        								 ,true))
        	{
        		return false;
        	}

        	var regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        	// MSDS URL 경로 정합성 체크
        	if(!this.gfn_isNull(this.edt_rndMsdsUrl_L.value) && !regex.test(this.edt_rndMsdsUrl_L.value))
        	{
                this.fn_alert("ERRR000231","저장","MSDS 경로","question");      // &1 URL 주소가 잘못 입력 되었습니다. 해당 URL 주소를 확인 해주세요.
                this.edt_rndMsdsUrl_L.setFocus();
                return false;
        	}

        	// 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리
        	// 레터파일(첨부파일 + 최종변경일), 자체증빙(여부 + 최종변경일)
        	var lns={
        		  todayYmd : this.gfn_getDate()
        		, msdsFile : { attcFl: this.ds_purgInfo_L.getColumn(0, 'MSDS_ATTC_FILENM'), fnlChgDt: this.ds_purgInfo_L.getColumn(0, 'MSDS_FNL_CHG_DTM'     ) , url: this.ds_purgInfo_L.getColumn(0, 'RND_MSDS_URL') }
        		, locFile  : { attcFl: this.ds_purgInfo_L.getColumn(0, 'LOC_ATTC_FILENM' ), fnlChgDt: this.ds_purgInfo_L.getColumn(0, 'LOC_ATFL_FNL_CHG_DT'  ) }
        		, svronCert: { certYn: this.ds_purgInfo_L.getColumn(0, 'SRVON_CERT_YN'   ), fnlChgDt: this.ds_purgInfo_L.getColumn(0, 'SRVON_CERT_FNL_CHG_DT') }
        	};
        	// MSDS (첨부파일 + 최종변경일)
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
        	}

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
        				this.fn_alert("ERRR000172","저장정보","30M","question"); // 해당 파일 사이즈가 &1를 초과 합니다.
        				return false;
        			}
        		}
        	}

            var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?

            if(result == 0)
            {
                return false;
            }

        	// KC인증대상여부가 'N' 이면 KC인증대상 리스트 모두 삭제
        	if(this.rdo_kcCertYnTemp_L.value == "N")
        	{
        		if(this.ds_kcCertInfoList.getRowCount() > 0)
        		{
        			// KC인증 삭제 리스트 Copy
        			for(var idx=0; idx<this.ds_kcCertInfoList.getRowCount(); idx++)
        			{
        				var nRow = this.ds_delKcCertInfoList.addRow();
        				this.ds_delKcCertInfoList.copyRow(nRow,this.ds_kcCertInfoList,idx);
        			}
        		}

        		// KC인증대상 리스트 초기화
        		this.ds_kcCertInfoList.clearData();

        		// KC인증대상 첨부파일 삭제
        		for(var idx=0; idx<this.ds_saveFileList.getRowCount(); idx++)
        		{
        			var strEtcFds2  = this.ds_saveFileList.getColumn(idx, 'ETC_FDS_2');
        			if (this.atflTpCd.indexOf(strEtcFds2) > -1) { continue; }  //  == "95"

        			this.ds_saveFileList.setColumn(idx, 'ETC_FDS_2', 'del');
        		}
        	}

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
            var strUrl      = "/rd/purg-info-mng/save-purg-info-upd.do";
            var strInDs     = "ds_purgInfo=ds_purgInfo_L:a"
        					+ " ds_saveFileList=ds_saveFileList:a"
        					+ " ds_kcCertInfoList=ds_kcCertInfoList:a"
        				    + " ds_delKcCertInfoList=ds_delKcCertInfoList:a";
            var strOutDs    = "";
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

        	this.close("SAVE");
        };

        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.btn_save_R_onclick = function(obj,e)
        {
            this.fn_Save_R();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave_R = function()
        {

        	console.log("this.ds_purgInfo_R :: ", this.ds_purgInfo_R);

            if(!this.gfn_dsIsUpdated(this.ds_purgInfo_R) && !this.gfn_dsIsUpdated(this.ds_qtyDcList_R))
            {
                this.fn_alert("ERRC000035","저장정보","","question"); // 변경된 이력이 없습니다.
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.fn_cmmnChkEssentialItem(this.ds_purgInfo_R, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this, true);

            if (result[0] != "success")
            {
                this.fn_alert(result[0],"저장정보","","question");
                return false;
            }

        	// 평균배송일 0일 불가능
        	if(nexacro.toNumber(this.ds_purgInfo_R.getColumn(0,"DLV_LT")) == 0)
        	{
                this.fn_alert("ERRR000230","저장정보","","question"); // 평균배송일은 최소 1일 이상 입력 하셔야 합니다.
        		this.msk_dlvLt_R.setFocus();
                return false;
        	}

        	// 기간할인 금액 존재시 매입가보다 크면 안됨
        	if(!this.gfn_isNull(this.msk_rndDcQty_R.value))
        	{
        		if(nexacro.toNumber(this.msk_rndDcQty_R.value) >= nexacro.toNumber(this.msk_prdPrc_R.value))
        		{
        			this.fn_alert("ERRR000223","저장정보","","question"); // 기간할인 금액은 매입가 금액을 넘을수 없습니다.
        			this.msk_rndDcQty_R.setFocus();
        			return false;
        		}
        	}

        	// 가격유효기간 일자 체크
        	if(!this.fn_getDefaultDateChk(this.cal_vldStrDt_R, this.cal_vldEndDt_R, "가격유효기간"))
        	{
        		return false;
        	}

        	// 구매정보 유효기간 시작일자 체크
        	if (this.cal_vldStrDt_R.value < this.lvGetDate)
        	{
        		this.fn_alert("ERRR000485","저장정보","","question"); // 유효기간 시작일자는 과거로 지정할 수 없습니다.
        		this.cal_vldStrDt_R.setFocus();
        		return false;
        	}

        	// 할인금액 존재시 기간할인 필수 체크
        	if(!this.gfn_isNull(this.msk_rndDcQty_R.value) || nexacro.toNumber(this.msk_rndDcQty_R.value) > 0)
        	{
        		// 기간할인 일자 체크
        		if(!this.fn_getDefaultDateChk(this.cal_rndDcVldStrDtm_R
        									 ,this.cal_rndDcVldEndDtm_R
        									 ,"기간할인"))
        		{
        			return false;
        		}
        	}

        	// 가격유효기간내에 기간할인 범위가 넘어 갔을 경우엔 체크
        	if(!this.gfn_isNull(this.cal_rndDcVldStrDtm_R.value) && !this.gfn_isNull(this.cal_rndDcVldEndDtm_R.value))
        	{
        		if(nexacro.toNumber(this.cal_rndDcVldStrDtm_R.value) < nexacro.toNumber(this.cal_vldStrDt_R.value))
        		{
        			this.fn_alert("ERRR000175","날짜체크","기간할인 시작날짜,가격유효 기간","information"); //	&1는(은) &2보다 작거나 같아야 합니다.
        			this.cal_rndDcVldStrDtm_R.setFocus();
        			return false;
        		}
        		if(nexacro.toNumber(this.cal_rndDcVldEndDtm_R.value) > nexacro.toNumber(this.cal_vldEndDt_R.value))
        		{
        			this.fn_alert("ERRR000175","날짜체크","기간할인 종료날짜,가격유효 기간","information"); //	&1는(은) &2보다 작거나 같아야 합니다.
        			this.cal_rndDcVldEndDtm_R.setFocus();
        			return false;
        		}
        	}

        	// 물량할인 수량 2이상이여야 함.
        	if(this.ds_qtyDcList_R.getRowCount() > 0)
        	{
        		var strRandDcQty = this.msk_rndDcQty_R.value;
        		var strPrdPrc    = this.msk_prdPrc_R.value;

        // 		if(this.gfn_isNull(strRandDcQty))
        // 		{
        // 			this.fn_alert("ERRS000144","저장정보","물량할인 존재시 기간할인 금액","question"); //&1은(는) 필수입력사항입니다.
        // 			this.msk_rndDcQty_R.setFocus();
        // 			return false;
        // 		}

        		// 기간할인금액이 매입가 보다 클 경우
        		if(nexacro.toNumber(strQtyDcAmt) >= nexacro.toNumber(strPrdPrc))
        		{
        			this.fn_alert("ERRR000223","저장정보","","question");
        			this.msk_rndDcQty_R.setFocus();
        			return false;
        		}

        		for(var idx=0; idx<this.ds_qtyDcList_R.getRowCount(); idx++)
        		{
        			var strQtyCnt   = this.ds_qtyDcList_R.getColumn(idx,"STR_QTY_CNT");
        			var strQtyDcAmt = this.ds_qtyDcList_R.getColumn(idx,"QTY_DC_AMT");

        			if(!this.gfn_isNull(strQtyCnt) && strQtyCnt < 2)
        			{
        				this.fn_alert("ERRR000222","저장정보","","question"); // 물량할인 수량은 2이상이여야 합니다.
        				this.ds_qtyDcList_R.set_rowposition(idx);
        				this.grd_qtyDcList_R.setCellPos(this.grd_qtyDcList_R.getBindCellIndex("body","STR_QTY_CNT"));
        				this.grd_qtyDcList_R.showEditor();
        				return false;
        			}


        			// 물량할인금액이 매입가 보다 클 경우
        			if(nexacro.toNumber(strQtyDcAmt) >= nexacro.toNumber(strPrdPrc))
        			{
        				this.fn_alert("ERRR000224","저장정보","","question");
        				this.ds_qtyDcList_R.set_rowposition(idx);
        				this.grd_qtyDcList_R.setCellPos(this.grd_qtyDcList_R.getBindCellIndex("body","QTY_DC_AMT"));
        				this.grd_qtyDcList_R.showEditor();
        				return false;
        			}
        		}
        	}


        	if ("Y" != this.ds_purgInfo_R.getColumn(0, "PI_EXCEPTION_RETRY")) {
        		var result = this.fn_confirm("ERRR000098", "저장", "", "question");	// 저장 하시겠습니까?
        		if (result == 0) {
        			return false;
        		}
        	}

        	this.ds_purgInfo_R.setColumn(0, "MNFR_NO", this.ds_master.getColumn(0,"MNFR_NO"));
         	this.ds_purgInfo_R.setColumn(0, "PRD_CLCD", this.ds_master.getColumn(0,"PRD_CLCD"));
        	this.ds_purgInfo_R.setColumn(0, "CONSN_REQ_SPR", "U");

            return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save_R = function()
        {
            if(!this.fn_PreSave_R())
            {
                return false;
            }

            var strSvc      = "Save_R";
            var strUrl      = "/rd/purg-info-mng/save-purg-info-mng.do";
            var strInDs     = "ds_purgInfo=ds_purgInfo_R:a"
        					+ " ds_qtyDcList=ds_qtyDcList_R:a"
        					+ " ds_saveFileList=ds_saveFileList_R:a"
        					+ " ds_kcCertInfoList=ds_kcCertInfoList_R:a";
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
        this.fn_PostSave_R = function()
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

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자는 수정만 가능 등록은 불가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.fn_compontAllControl();
        	}
        };

        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_exit        : this.btn_exit
        						  , btn_close       : this.btn_close
        						  , btn_prdIdPopup  : this.btn_prdIdPopup
        						  , btn_cprtcpPopup : this.btn_cprtcpPopup
        	                      };
        	var btnVisibleFalse = {
        							btn_save : this.btn_save
        	                      };
        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        };

        /**
         * 화면 최초 초기화 작업 함수
         */
        this.fn_setResetBtnCall = function()
        {
        	this.ds_purgInfo.clearData();
        	this.ds_purgInfo.set_updatecontrol(false);
        	var nRow = this.ds_purgInfo.addRow();
        	this.ds_purgInfo.setColumn(nRow,"CO_CD",     this.lv_coCd);
        	this.ds_purgInfo.setColumn(nRow,"PRD_ID",    this.ds_search.getColumn(0,"PRD_ID"));
        	this.ds_purgInfo.setColumn(nRow,"CPRTCP_ID", this.ds_search.getColumn(0,"CPRTCP_ID"));
        	this.ds_purgInfo.setColumn(nRow,"SPL_PSB_YN","Y");
        	this.ds_purgInfo.setColumn(nRow,"MIN_ODR_QTY","1");
        	this.ds_purgInfo.setColumn(nRow,"VLD_STR_DT",this.lvGetDate);
        	this.ds_purgInfo.setColumn(nRow,"VLD_END_DT",this.gfn_addDate(this.gfn_addMonth(this.lvGetDate,12), -1));
        	this.ds_purgInfo.set_updatecontrol(true);
        	this.btn_exit.set_left("543");
        	this.btn_save.set_visible(true);

        	var btnList = ["btn_file","btn_add","btn_del","btn_save"];

        	for(var idx=0; idx<btnList.length; idx++)
        	{
        		this[btnList[idx]].set_enable(true);
        	}

        	var arryList = ["rdo_splPsbYn","msk_minOdrQty","edt_prdPrc","msk_dlvLt","cal_vldStrDt","cal_vldEndDt","rdo_kcCertYn","edt_rndMsdsUrl"
        	               ,"cal_msdsFnlChgDtm","cal_rndDcVldStrDtm","cal_rndDcVldEndDtm","msk_rndDcQty","grd_qtyDcList"];

        	for(var idx=0; idx<arryList.length; idx++)
        	{
        		this[arryList[idx]].set_readonly(false);
        	}
        }
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

            var nRow = this.ds_qtyDcList_R.addRow();
            this.ds_qtyDcList_R.setColumn(nRow,"CHK",   "0");           						// CHK
        	this.ds_qtyDcList_R.setColumn(nRow,"CO_CD", this.lv_coCd);           				// 업체코드
        	this.ds_qtyDcList_R.setColumn(nRow,"PRD_ID",this.ds_master.getColumn(0,"PRD_ID"));	// 상품ID
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
            if(this.ds_qtyDcList_R.rowcount < 1 || this.ds_qtyDcList_R.findRow("CHK",1) == -1)
            {
                this.fn_alert("ERRR000188","삭제정보","","warning"); // 삭제할 데이타가 없습니다.
                return false;
            }

            var result = this.fn_confirm( "ERRR000179", "삭제정보","","question" ); // 현재선택행을 삭제하시겠습니까?

            if(result == 0)
            {
                return false;
            }

            // 멀티 삭제 처리
            for(var i = this.ds_qtyDcList_R.rowcount-1; 0 <= i; i--)
            {
                if(this.ds_qtyDcList_R.getColumn(i,"CHK") == 1)
                {
                    this.ds_qtyDcList_R.deleteRow(i);
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

        };

        this.fn_PostDel = function()
        {
        };
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         * 가격유효기간 시작일자 값 변경시 onchanged 이벤트 발생 처리
         */
        this.cal_vldStrDt_R_onchanged = function(obj,e)
        {
        	if(!this.gfn_isNull(e.postvalue))
        	{
        		if(e.postvalue > this.lvGetDate)
        		{
        			this.msk_minOdrQty_R.set_value(this.lv_minOrdQty);	// 최소발주수량 기존값 Set
        			this.msk_dlvLt_R.set_value(this.lv_avgDlcst);		// 평균배송일 기존값 Set
        		}
        	}
        };

        /**
         * 파일 첨부파일 업로드 버튼 클릭시 이벤트 발생 처리
         */
        this.actvEdt_fileName=null;
        this.btn_file_onclick = function(obj,e)
        {
        	var atflTrgtId=obj.id, atflTyIdx=atflTrgtId.substr(atflTrgtId.length-1), atflTyColId='DOC_ID'+atflTyIdx, atflLRId=atflTrgtId.substr(atflTrgtId.length-3);
        	this.actvEdt_fileName = this['edt_fileName'+ atflLRId];
        	this.fileIndex        = this.atflTpCd[atflTyIdx];

        	if (obj.text == "파일 등록") {
        		this.FileUploadSingle.deleteItem(0);
        		this.FileUploadSingle.appendItem();
        		this.FileUploadSingle.filefindbuttons[0].click();
        	} else {
        		var result = this.fn_confirm( "ERRR000134", "파일 삭제","", "question" ); // 등록된 파일을 삭제하시겠습니까?
        		if (result) {
        			var delRow = this.ds_saveFileList.findRow('ETC_FDS_2', this.fileIndex);
        			this.ds_saveFileList.setColumn(delRow,    'ETC_FDS_2', 'del'         );
        			this.actvEdt_fileName.set_value('');
        			this.edt_fileName_onchanged(this.actvEdt_fileName,new nexacro.ChangeEventInfo());
        		}
        	}
        };

        /**
         * 첨부파일 다운로드 클릭시 oneditclick  이벤트 발생 처리
         */
        this.fileName_oneditclick = function(obj,e)
        {
        	var atflTrgtId=obj.id, atflTyIdx=atflTrgtId.substr(atflTrgtId.length-1), atflTyColId='DOC_ID'+atflTyIdx, atflLRId=atflTrgtId.substr(atflTrgtId.length-3);
        	this.actvEdt_fileName = this['edt_fileName'+ atflLRId];
        	this.fileIndex        = this.atflTpCd[atflTyIdx];

        	if(this.gfn_nvl(obj.value,"") != "")
        	{
        		this.ds_uploadResult.clearData();
        		var nRow    = this.ds_uploadResult.addRow();
        		var findRow = this.ds_saveFileList.findRow("ETC_FDS_2", this.fileIndex);
        		this.ds_uploadResult.copyRow(nRow,this.ds_saveFileList, findRow);

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.FileDownload);
        	}
        };

        /**
         * 파일 첨부파일 변경시 onchanged 이벤트 발생 처리
         */
        this.edt_fileName_onchanged = function(obj,e) {

        	var atflTrgtId=obj.id, atflTyIdx=atflTrgtId.substr(atflTrgtId.length-1), atflTyColId='DOC_ID'+atflTyIdx
        	var atflLRIdx=atflTrgtId.substr(atflTrgtId.length-3), tBtn=this['btn_file'+atflLRIdx];

        	tBtn.set_text('파일 등록');
        	obj.set_cursor("");

        	if ( this.gfn_nvl(obj.value, '') != '') {
        		tBtn.set_text('삭제');
        		obj.set_cursor("pointer");
        	}

        	if (atflTyIdx == 1) {
        		this.ds_purgInfo_L.setColumn(0, "MSDS_FNL_CHGD", 1);
        	}
        };

        /**
         * 이미지등록 아이템 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var atflTrgtId = this.actvEdt_fileName.id, atflTyIdx=atflTrgtId.substr(atflTrgtId.length-1), atflTyColId='DOC_ID'+atflTyIdx, atflLRId=atflTrgtId.substr(atflTrgtId.length-3);
        	this.fileIndex = this.atflTpCd[atflTyIdx];
        	this.fileColId = this.atflColId[1]; // [2023-02-20] sg.park - 상품첨부파일ID로 통일 : this.atflColId[atflTyIdx];

        	var sCompValue = this.FileUploadSingle.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]

        	if( start > -1) {
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
        		this.fn_alert("ERRR000173","파일 정보","파일","information");  // &1 형식이 아닙니다.
        		return false;
        	}

        	var sFilePath = this.FileUploadSingle.value;  						// 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_purgInfo_L.getColumn(0, this.fileColId),"");
        		docRegId  = docRegId != '' ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0, 'DOC_REG_ID'), '');

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += '&etcFds2=' + this.fileIndex;

        	var bSucc = this.FileUploadSingle.upload(strUrl); 		 // 파일 업로드
        };

        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	var atflTrgtId = this.actvEdt_fileName.id, atflTyIdx=atflTrgtId.substr(atflTrgtId.length-1), atflTyColId='DOC_ID'+atflTyIdx, atflLRId=atflTrgtId.substr(atflTrgtId.length-3);
        	this.fileIndex = this.atflTpCd[atflTyIdx];
        	this.fileColId = this.atflColId[atflTyIdx];

        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_saveFileList.findRow('ETC_FDS_2', this.fileIndex);
        	this.ds_saveFileList.setColumn(delRow,    'ETC_FDS_2', 'del'         );

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        	// 최초 파일 등록시 상품문서등록ID Set
        	var attcFileId = this.ds_purgInfo_L.getColumn(0, this.fileColId);
        	if(this.gfn_nvl(attcFileId,'') == '') {
        		this.ds_purgInfo_L.setColumn(0, this.fileColId, this.ds_uploadResult.getColumn(0, 'DOC_REG_ID'));
        	}

        	var findRow = this.ds_saveFileList.findRow("ETC_FDS_2", this.fileIndex);
        	this.actvEdt_fileName.set_value(this.ds_saveFileList.getColumn(findRow, 'ATFL_NM'));
        	this.edt_fileName_onchanged(this.actvEdt_fileName,new nexacro.ChangeEventInfo());
        };

        /**
         * KC인증대상여부 Radio 클릭시 onitemclick 이벤트 발생 처리
         */
        this.rdo_kcCertYn_onitemclick = function(obj,e)
        {
        	if(e.index == 0)
        	{
        		var params  = { prdId    : this.ds_master.getColumn(0,"PRD_ID")
        					  , cprtcpId : this.ds_master.getColumn(0,"CPRTCP_ID")
        					  , coCd     : this.lv_coCd
        					  , saveMode : "I"
        					  , popId    : "SSP_BO_RD_14"
        					  };

        		this.fn_setCallPopup(params);
        	}
        };

        /**
         * 신규등록 및 목록상세 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	    = "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	    = params.saveMode;	    	// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01     = params.coCd;				// 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02     = params.prdId;				// 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03     = params.cprtcpId;	    	// 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04     = params.popId;				// 부모에서 넘어가는 파라미터(폼경로)
        	var sPopId 		    = "SSP_BO_RD_55";
        	var sUrl 		    = "RD::SSP_BO_RD_55.xfdl";
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

        /**
         * S-MRO I/F 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_mro_save_onclick = function(obj,e)
        {
        	this.ds_prdPurgInfoSync.setColumn(0,"PRD_ID",this.ds_master.getColumn(0,"PRD_ID"));

            var strSvc      = "Ret";
            var strUrl      = "/rd/purg-info-mng/save-prd-purg-info-sync.do";
            var strInDs     = "ds_prdPurgInfoSync=ds_prdPurgInfoSync";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        	if(this.lv_piCount == 0)
        	{
        		this.fn_alert("ERRR000218","저장정보","","question"); // 처리 중 에러가 발생했습니다.
        	}
        	else if(this.lv_piCount == 1)
        	{
        		this.fn_alert("ERRC000121","저장정보","","question"); // 정상적으로 처리되었습니다.

        		this.fn_saveMultiFileDelUpdate("SAVE");
        	}
        	else if(this.lv_piCount == 2)
        	{
        		this.fn_alert("ERRR000219","저장정보","","question"); // 이미 동기화 중인 상품 입니다.
        	}
        	else if(this.lv_piCount == 3)
        	{
        		this.fn_alert("ERRR000226","저장정보","","question"); // 이미 동기화가 완료 된 상품입니다.
        	}


        };

        /**
         * 화면 닫기 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_close_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRR000060", "취소","", "question" ); // 수정을 취소하고 목록으로 이동하시겠습니까?

            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("CLOSE");
        };

        /**
         * 취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_exit_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRR000060", "취소","", "question" ); // 수정을 취소하고 목록으로 이동하시겠습니까?

            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("EXIT");
        };

        /**
         * 첨부파일 다운로드 클릭시 oneditclick  이벤트 발생 처리
         */
        this.edt_fileName_oneditclick = function(obj,e)
        {
        	var atflTrgtId=obj.id, atflTyIdx=atflTrgtId.substr(atflTrgtId.length-1), atflTyColId='DOC_ID'+atflTyIdx, atflLRId=atflTrgtId.substr(atflTrgtId.length-3);
        	this.imageViewerId = this['edt_fileName'+ atflLRId];
        	this.fileIndex     = this.atflTpCd[atflTyIdx];
        	var findRow        = this.ds_saveFileList.findRow("ETC_FDS_2", this.fileIndex);

        	if(this.gfn_nvl(this.imageViewerId.value, '') != '') {
        		this.ds_uploadResult.clearData();
        		var nRow = this.ds_uploadResult.addRow();
        		this.ds_uploadResult.copyRow(nRow, this.ds_saveFileList, findRow);

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.FileDownload);
        	}
        };

        // 서브원 인증여부
        this.rdo_svronCertYn_onitemchanged = function(obj,e)
        {
        	var ds=this.ds_purgInfo_L, isYes = obj.value == 'Y';
        	if (!isYes) {
        //		ds.setColumn(0, 'SRVON_CERT_FNL_CHG_DT' , null);
        // 		ds.setColumn(0, 'SRVON_CERT_UPD_DATE'   , null);
        // 		ds.setColumn(0, 'SRVON_CERT_UPDPSN_IDNM', null);
        	}

        	this.cal_svronCertFnlChgDt_L.visible = isYes;
        	//if (isYes) { this.cal_svronCertFnlChgDt.setFocus(); }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.stc_stprc.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.btn_save_L.addEventHandler("onclick",this.btn_save_L_onclick,this);
            this.btn_save_R.addEventHandler("onclick",this.btn_save_R_onclick,this);
            this.stc_dlvAmt_L.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_dlvLt_L.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_kcCertYnTemp_L.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.ttl_msds_R10.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.ttl_msds_R12.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.ttl_dtdc_R01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.ttl_dtdc_R11.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.ttl_dtdc_R12.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.ttl_qtydc_R01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.rdo_kcCertYnTemp_L.addEventHandler("onitemclick",this.rdo_kcCertYn_onitemclick,this);
            this.btn_file_L1.addEventHandler("onclick",this.btn_file_onclick,this);
            this.edt_fileName_L1.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName_L1.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.stc_purgChrpsnNm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_mro_save.addEventHandler("onclick",this.btn_mro_save_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.ttl_msds_R13.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.ttl_msds_R01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.ttl_loc_R01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.btn_file_L3.addEventHandler("onclick",this.btn_file_onclick,this);
            this.edt_fileName_L3.addEventHandler("oneditclick",this.edt_fileName_oneditclick,this);
            this.edt_fileName_L3.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.ttl_svron_R01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.rdo_svronCertYn_L.addEventHandler("onitemchanged",this.rdo_svronCertYn_onitemchanged,this);
            this.cal_vldStrDt_R.addEventHandler("onchanged",this.cal_vldStrDt_R_onchanged,this);
            this.rdo_svronCertYn_R.addEventHandler("onitemchanged",this.rdo_svronCertYn_onitemchanged,this);
            this.edt_fileName_R3.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.btn_file_R.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_file_R3.addEventHandler("onclick",this.btn_file_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_14.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
