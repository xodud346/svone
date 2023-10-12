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
            this.set_titletext("R&D 구매정보 변경/이력 상세");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1210,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/><Column id=\"ELC_CONT_APPR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHGRQST_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO_0\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT_0\" type=\"STRING\" size=\"256\"/><Column id=\"ELC_CONT_APPR_STATS_CD_0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"CONT_NO\"/><Col id=\"CONT_CHG_DGRCNT\"/><Col id=\"ELC_CONT_APPR_STATS_CD\"/><Col id=\"CHGRQST_RSN\"/><Col id=\"PRD_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ATTR_VAL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"DSTRB_STD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ELC_CONT_APPR_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"REQ_SBJ_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TB_RD_REQ_CPRTCP_CONSN_STATS_DTLS_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SELL_UNIT\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"ELC_CONT_APPR_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"STPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PURC_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"32\"/><Column id=\"PI_EXCEPTION_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_VLD_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_FNL_CHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PC_PRC_COND_DTLS_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_GB_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_DIS_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_VLD_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_FNL_CHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PC_PRC_COND_DTLS_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_GB_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_DIS_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CHGRQST_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_reqProcDtlsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PROC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ELC_CONT_APPR_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PROC_SBJ_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PROC_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PROC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PROC_SBJ_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ELC_CONT_APPR_STATS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","22",null,null,"0","-450",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_01_00","700","647",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_02","20","647","680","32",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","149",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","118",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","87",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","56",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("12");
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

            obj = new Static("stc_prdClcd","20","87","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_attrValList","165","122","410","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_usecontextmenu("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_attrValList","20","118","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_stprc","20","149","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기준가");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_sellUnit","599","118","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dstrbStdPrc","599","149","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("List Price");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcpNm","599","56","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNm","599","87","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","20","313","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("구매 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","28","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("상품 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_consn","670","1259","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("합의");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updReq","586","1259","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("수정요청");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rjct","515","1259","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("반려");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","165","91","410","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_usecontextmenu("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","745","91",null,"24","55",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnit","745","122",null,"24","55",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_dstrbStdPrc","745","153",null,"24","55",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_format("###,###,###,###,###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_stprc","165","153","410","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_usecontextmenu("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_format("###,###,###,###,###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","466","680","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","20","435","680","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","20","404","680","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00","20","343","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("항목");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_minOdrQty_L","20","404","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("최소발주수량");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdPrc_L","20","435","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("매입가");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dlvAmt_L","20","466","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("배송비");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","20","496","680","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","20","526","680","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00","20","556","680","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dlvLt_L","20","496","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("평균배송일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00","20","526","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("가격유효기간");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00","20","556","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("KC인증대상여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00","20","586","680","32",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00","20","616","680","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_00","20","678","680","32",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_00_00","20","708","680","32",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_00_00_00","20","739","680","172",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_00","20","586","95","93",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("MSDS");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_00_00","115","586","95","32",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_00_00_00","115","616","95","32",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("URL");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_00_01","20","678","95","62",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("기간할인");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_00_00_01","115","678","95","32",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("기간");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_00_00_00_00","115","708","95","32",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("할인금액");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_01","20","739","190","172",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("물량할인");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qtyDcList_L","235","793",null,"109","516",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_qtyDcList_L");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 물량할인 데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"PRD_ATTR_CD\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"SRT_SO\"/><Cell col=\"4\" text=\"할인금액\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ATTR_CD\"/><Cell col=\"1\" cssclass=\"grd_WF_bg_image\" displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:STR_QTY_CNT\" displaytype=\"maskeditcontrol\" edittype=\"none\" textAlign=\"right\" editinputtype=\"number\" editmaxlength=\"15\" maskeditlimitbymask=\"both\" maskeditformat=\"!###,###,###,##0\" maskeditautoselect=\"true\"/><Cell col=\"3\" text=\"bind:SRT_SO\"/><Cell col=\"4\" displaytype=\"maskeditcontrol\" text=\"bind:QTY_DC_AMT\" edittype=\"none\" editinputtype=\"number\" textAlign=\"right\" editmaxlength=\"15\" maskeditautoselect=\"true\" maskeditformat=\"!###,###,###,###,###,##0\" maskeditlimitbymask=\"both\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00","700","374",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","20","374","680","32",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kcCertYnTemp_L","235","559","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var rdo_kcCertYnTemp_L_innerdataset = new nexacro.NormalDataset("rdo_kcCertYnTemp_L_innerdataset", obj);
            rdo_kcCertYnTemp_L_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(rdo_kcCertYnTemp_L_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName","235","590","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rndMsdsUrl_L","235","620","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","165","60","410","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_usecontextmenu("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","745","60",null,"24","55",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","179",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_purgChrpsnNm","20","179","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_updpsnNm","599","179","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("변경자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_updpsnNm","745","183",null,"24","55",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnNm","165","183","410","24",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_usecontextmenu("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_splPsbYn_L","235","378","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            var rdo_splPsbYn_L_innerdataset = new nexacro.NormalDataset("rdo_splPsbYn_L_innerdataset", obj);
            rdo_splPsbYn_L_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">불가</Col></Row></Rows>");
            obj.set_innerdataset(rdo_splPsbYn_L_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_01_00","700","343",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("변경 정보");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_01","210","343","490","32",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("현재정보");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_splPsbYn_L","20","374","190","32",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("공급가능상태");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_minOdrQty_L","235","408","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_format("!###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_prdPrc_L","235","439","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_format("!###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dlvAmt_L","235","470","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dlvLt_L","235","500","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_format("!###0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_rndDcQty_L","235","712","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_format("!###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_01","700","466",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00","700","435",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_01","700","404",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_01","700","496",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_01","700","526",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_01","700","556",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_01","700","586",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_01","700","616",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_00_01","700","678",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_00_00_01","700","708",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00_00_00_00_00_00","700","739",null,"172","20",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qtyDcList_R","720","790",null,"109","31",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_qtyDcList_R");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 물량할인 데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"PRD_ATTR_CD\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"SRT_SO\"/><Cell col=\"4\" text=\"할인금액\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ATTR_CD\"/><Cell col=\"1\" cssclass=\"grd_WF_bg_image\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:STR_QTY_CNT\" displaytype=\"maskeditcontrol\" edittype=\"mask\" textAlign=\"right\" editinputtype=\"number\" editmaxlength=\"15\" maskeditlimitbymask=\"both\" maskeditformat=\"!###,###,###,###,##0\" maskeditautoselect=\"true\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:SRT_SO\"/><Cell col=\"4\" displaytype=\"maskeditcontrol\" text=\"bind:QTY_DC_AMT\" edittype=\"mask\" editinputtype=\"number\" textAlign=\"right\" editmaxlength=\"15\" maskeditautoselect=\"true\" maskeditformat=\"!###,###,###,###,##0\" maskeditlimitbymask=\"both\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","261",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"755","67","24","30",null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("- 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"755","68","24","btn_del:4",null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("+ 추가");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_splPsbYn_R","720","378","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_splPsbYn_R_innerdataset = new nexacro.NormalDataset("rdo_splPsbYn_R_innerdataset", obj);
            rdo_splPsbYn_R_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">불가</Col></Row></Rows>");
            obj.set_innerdataset(rdo_splPsbYn_R_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_minOdrQty_R","720","408","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_format("!###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_prdPrc_R","720","439","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_format("!###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dlvAmt_R","720","470","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dlvLt_R","720","500","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_format("!###0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1022","500","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1022","470","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1022","439","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldStrDt_R","720","530","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","854","530","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldEndDt_R","870","530","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName_R","720","590","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_rndDcVldStrDtm_R","720","683","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","854","683","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_rndDcVldEndDtm_R","870","683","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rndMsdsUrl_R","720","620","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_rndDcQty_R","720","712","297","24",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            obj.set_format("!###,###,###,###,##0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","1022","712","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","45","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","295","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","333","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","1239","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01","0","213","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","20","231","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("합의 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","0","251","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_custPreqno","20","261","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("합의번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custPreqno","169","265","235","24",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reqSbjNm","415","261","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("요청주체");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reqSbjNm","559","265","235","24",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_elcContApprStatsNm","809","261","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("합의상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_elcContApprStatsNm","949","265",null,"24","60",null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","20","933","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("변경 이력");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","-4","912","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_01","0","952","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_reqProcDtlsList","20","962",null,"277","20",null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_reqProcDtlsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 변경이력 데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"350\"/><Column size=\"130\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"처리 주체\"/><Cell col=\"2\" text=\"합의 상태\"/><Cell col=\"3\" text=\"사유 작성\"/><Cell col=\"4\" text=\"처리 일시\"/><Cell col=\"5\" text=\"처리자\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:PROC_SBJ_NM\"/><Cell col=\"2\" text=\"bind:ELC_CONT_APPR_STATS_NM\"/><Cell col=\"3\" text=\"bind:REASON\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PROC_DTM\"/><Cell col=\"5\" text=\"bind:PROC_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldStrDt_L","235","531","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","366","531","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldEndDt_L","381","531","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_kcCertYnTemp_R","720","559","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("126");
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

            obj = new Static("Static00_00_01_00","537","712","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","537","500","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","537","470","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","580","153","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_rndDcVldStrDtm_L","235","683","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00","366","683","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_rndDcVldEndDtm_L","381","683","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","537","439","22","25",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01",null,"153","22","25","28",null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","215","16",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("R&D 구매정보 변경이력관리 상세");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("stc_vldGbNm","512","530","74","25",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00_00_00_00_00_00_01","115","647","95","32",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("최종개정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_msdsFnlChgDtm_L","235","651","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_msdsFnlChgDtm_R","720","651","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cnclReq","btn_updReq:4","1259","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("요청취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1210,846,this,function(p){});
            obj.set_description("R&D 구매정보 변경/이력 상세");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_prdNm","value","ds_master","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_cprtcpNm","value","ds_master","CPRTCP_KOR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_mnfrNm","value","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_sellUnit","value","ds_master","SELL_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_dstrbStdPrc","value","ds_master","DSTRB_STD_PRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_updpsnNm","value","ds_master","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_elcContApprStatsNm","value","ds_master","ELC_CONT_APPR_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_reqSbjNm","value","ds_master","REQ_SBJ_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_custPreqno","value","ds_master","CUST_PREQNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_purgChrpsnNm","value","ds_master","PURG_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_stprc","value","ds_master","STPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_attrValList","value","ds_master","ATTR_VAL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_prdClcd","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","stc_vldGbNm","text","ds_purgInfo_L","VLD_GB_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cal_msdsFnlChgDtm_L","value","ds_purgInfo_L","MSDS_FNL_CHG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cal_msdsFnlChgDtm_R","value","ds_purgInfo_R","MSDS_FNL_CHG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","rdo_splPsbYn_L","value","ds_purgInfo_L","SPL_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","msk_minOdrQty_L","value","ds_purgInfo_L","MIN_ODR_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","msk_prdPrc_L","value","ds_purgInfo_L","PRD_PRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","msk_dlvAmt_L","value","ds_purgInfo_L","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","msk_dlvLt_L","value","ds_purgInfo_L","DLV_LT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cal_vldStrDt_L","value","ds_purgInfo_L","VLD_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","cal_vldEndDt_L","value","ds_purgInfo_L","VLD_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","rdo_kcCertYnTemp_L","value","ds_purgInfo_L","KC_CERT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edt_rndMsdsUrl_L","value","ds_purgInfo_L","RND_MSDS_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","cal_rndDcVldStrDtm_L","value","ds_purgInfo_L","RND_DC_VLD_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","cal_rndDcVldEndDtm_L","value","ds_purgInfo_L","RND_DC_VLD_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","msk_rndDcQty_L","value","ds_purgInfo_L","RND_DC_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","rdo_splPsbYn_R","value","ds_purgInfo_R","SPL_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","msk_minOdrQty_R","value","ds_purgInfo_R","MIN_ODR_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","msk_prdPrc_R","value","ds_purgInfo_R","PRD_PRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","msk_dlvAmt_R","value","ds_purgInfo_R","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","msk_dlvLt_R","value","ds_purgInfo_R","DLV_LT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","cal_vldStrDt_R","value","ds_purgInfo_R","VLD_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","cal_vldEndDt_R","value","ds_purgInfo_R","VLD_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","rdo_kcCertYnTemp_R","value","ds_purgInfo_R","KC_CERT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","edt_fileName_R","value","ds_purgInfo_R","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","edt_rndMsdsUrl_R","value","ds_purgInfo_R","RND_MSDS_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","cal_rndDcVldStrDtm_R","value","ds_purgInfo_R","RND_DC_VLD_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","cal_rndDcVldEndDtm_R","value","ds_purgInfo_R","RND_DC_VLD_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","msk_rndDcQty_R","value","ds_purgInfo_R","RND_DC_QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_15.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_15.xfdl", function() {
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
        this.sParamArg5     = "";
        this.lvchkColidDs   = "PRD_PRC$DLV_LT$VLD_STR_DT$VLD_END_DT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "매입가$평균배송일$가격유효시작일$가격유효종료일";
        this.lvGetDate      = "";
        this.lvSaveMode     = "";
        this.lv_piCount     = "";
        this.lv_minOrdQty   = ""; // 최소발주수량 Set
        this.lv_avgDlcst    = ""; // 평균배송비 Set
        this.lv_saveMode    = ""; // 반려 or 수정 모드 Set
        this.lv_btnChkYn    = "";
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

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal05))
        	{
        		 this.sParamArg5 = this.getOwnerFrame().pv_sVal05;
        	}

            var strDs    = "ds_rndPrdAuthCombo";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "CHRPSN_TEAM_SPR_CD";                    // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X";    		                            // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	this.ds_search.setColumn(nRow,"CO_CD",          this.lv_coCd);	     // 회사코드
        	this.ds_search.setColumn(nRow,"CONT_NO",        this.sParamArg1);    // 계약번호
        	this.ds_search.setColumn(nRow,"CONT_CHG_DGRCNT",this.sParamArg2);    // 계약변경차수
        	this.ds_search.setColumn(nRow,"CPRTCP_ID",      this.sParamArg3);    // 협력사ID
        	this.ds_search.setColumn(nRow,"CPRTCP_NM",      this.sParamArg4);    // 협력사명
        	this.ds_search.setColumn(nRow,"REQ_REG_DTM",    this.sParamArg5);    // 요청일
        	this.ds_search.setColumn(nRow,"TO_DATE",        "TO_DATE");          // 현재 판매중 구매정보

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
        				var responseMessage = this.ds_master.getColumn(0, "PI_EXCEPTION_CODE");
        				if (responseMessage == "ERRR000490") {
        					var responce = this.fn_confirm(responseMessage, "일괄 처리", "PI_SYSTEM", "question");	// PI 시스템의 응답이 없습니다. 재시도하시겠습니까?
        					if (responce) {
        						var nRow = this.ds_input.addRow();
        						this.ds_input.setColumn(nRow, "CO_CD", this.ds_master.getColumn(0,"CO_CD"));
        						this.ds_input.setColumn(nRow, "CONT_NO", this.ds_master.getColumn(0,"CONT_NO"));
        						this.ds_input.setColumn(nRow, "CONT_CHG_DGRCNT", this.ds_master.getColumn(0,"CONT_CHG_DGRCNT"));
        						this.ds_input.setColumn(nRow, "PRD_ID", this.ds_master.getColumn(0,"PRD_ID"));
        						this.ds_input.setColumn(nRow, "ELC_CONT_APPR_STATS_CD", "50");

        						this.fn_Save_L();
        					} else {
        						this.close("CLOSE");
        					}
        				} else {
        					this.fn_PostSave_L();
        				}
                        break;
                    case "Save_R":
                            this.fn_PostSave_R();
                        break;
        			case "ReqCancel":
        				this.close("REQ_CANCEL," + reqCancelCustPreqNo);
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
        		// 사유등록처리
        		case "SSP_BO_RP_01":
        			 if(!this.gfn_isNull(strVal))
        			 {
        				 // 일반
        				 var sRtn = strVal.split(",");

        				 if(sRtn[0] == "SUCCESS")
        				 {
        					if(this.lv_saveMode == "반려")
        					{
        						this.fn_Save_L();
        					}
        					else
        					{
        						this.fn_Save_R();
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
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);

        	this.ds_input.setColumn(0,"CHGRQST_RSN",this.dsDummy.getColumn(0,"REASON"));
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
            var strUrl      = "/rd/purg-info-chg-hst-mng/select-purg-info-chg-dtl-inq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master"
        	                + " ds_purgInfo_L=ds_purgInfo_L"
        					+ " ds_qtyDcList_L=ds_qtyDcList_L"
        					+ " ds_kcCertInfoList=ds_kcCertInfoList"
        	                + " ds_purgInfo_R=ds_purgInfo_R"
        					+ " ds_qtyDcList_R=ds_qtyDcList_R"
        					+ " ds_kcCertInfoList_R=ds_kcCertInfoList_R"
        					+ " ds_saveFileList=ds_saveFileList"
        					+ " ds_saveFileList_R=ds_saveFileList_R"
        					+ " ds_reqProcDtlsList=ds_reqProcDtlsList";
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
        	// 요청주체가 자사인 경우 혹은 반려 & 합의완료 건은 수정 불가
        	if(this.ds_master.getColumn(0,"REQ_SBJ_CD") == "20"
        	|| (this.ds_master.getColumn(0,"ELC_CONT_APPR_STATS_CD") == "42" || this.ds_master.getColumn(0,"ELC_CONT_APPR_STATS_CD") == "52")
        	|| this.ds_purgInfo_R.getColumn(0,"CONT_CHG_DGRCNT") >= "3")
        	{
        		this.fn_compontAllControl();
        	}

        	// RND화면권한제어
        	this.fn_setRndUiAuthCtl();

        	this.btn_cnclReq.set_visible(
        		this.ds_master.getColumn(0,"REQ_SBJ_CD") === "20"
        		&& this.ds_master.getColumn(0,"ELC_CONT_APPR_STATS_CD") !== "42"
        		&& this.ds_master.getColumn(0,"ELC_CONT_APPR_STATS_CD") !== "52"
        	    && this.ds_master.getColumn(0,"ELC_CONT_APPR_STATS_CD") !== "37"
        	);

        	this.btn_cnclReq.set_enable(
        		this.btn_cnclReq.visible
        	);

        	// 가격유효기간 미래시작일로 변경시 기데이터로 되돌아가기위한 변수 값 Set
        	this.lv_minOrdQty = this.ds_purgInfo_R.getColumn(0,"MIN_ODR_QTY"); // 최소발주수량 Set
        	this.lv_avgDlcst  = this.ds_purgInfo_R.getColumn(0,"DLV_LT");      // 평균배송비 Set

        	this.ds_purgInfo_R.set_updatecontrol(false);
        	// 합의요청 발송 정보 Default 무조건 Y : 가능
        	this.rdo_splPsbYn_R.set_value("Y");
        	// 현재일자로부터 1년 Set
        	this.cal_vldStrDt_R.set_value(this.ds_purgInfo_R.getColumn(0,"VLD_STR_DT"));
        	this.cal_vldEndDt_R.set_value(this.ds_purgInfo_R.getColumn(0,"VLD_END_DT"));
        	this.ds_purgInfo_R.set_updatecontrol(true);

        	if(this.ds_purgInfo_L.getColumn(0,"SPL_PSB_YN") == "N")
        	{
        		// 협력사가 직접 공급가능상태 불가로 저장했을 경우에만
        		if(this.ds_purgInfo_L.getColumn(0,"SPL_DIS_SBJ_CD") == "30")
        		{
        			// 현재정보 공급가능상태여부 수정 불가
        			this.rdo_splPsbYn_L.set_readonly(true);
        		}
        	}

        	// MSDS첨부파일 존재시
        	if(this.ds_saveFileList.getRowCount() > 0)
        	{
        		// 현재정보 MSDS파일 Set
        		if(!this.gfn_isNull(this.ds_purgInfo_L.getColumn(0,"PRD_ATTC_FILEID")))
        		{
        			var findRow = this.ds_saveFileList.findRow("DOC_REG_ID",this.ds_purgInfo_L.getColumn(0,"PRD_ATTC_FILEID"));

        			if(findRow != -1)
        			{
        				this.edt_fileName.set_value(this.ds_saveFileList.getColumn(findRow,"ATFL_NM"));
        				this.edt_fileName_R.set_value(this.ds_saveFileList.getColumn(findRow,"ATFL_NM"));
        				this.edt_fileName_onchanged(this.edt_fileName,new nexacro.ChangeEventInfo());
        			}
        		}
        	}

        	// MSDS첨부파일 존재시
        	if(this.ds_saveFileList_R.getRowCount() > 0)
        	{
        		// 합의요청 발송 정보 MSDS파일 Set
        		if(!this.gfn_isNull(this.ds_purgInfo_R.getColumn(0,"PRD_ATTC_FILEID")))
        		{
        			var findRow = this.ds_saveFileList_R.findRow("DOC_REG_ID",this.ds_purgInfo_R.getColumn(0,"PRD_ATTC_FILEID"));

        			if(findRow != -1)
        			{
        				this.edt_fileName_R.set_value(this.ds_saveFileList_R.getColumn(findRow,"ATFL_NM"));
        			}
        		}
        	}
        };
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 합의 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_consn_onclick = function(obj,e)
        {
        	// 합의 시 현재 구매정보는 종료되고 변경 구매정보로 반영됩니다.\n합의 하시겠습니까?
        	var result = this.fn_confirm(this.gfn_getMessage("ERRR000143"), "저장정보","","question" );

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();
        	this.ds_input.setColumn(nRow,"CO_CD",                 this.ds_master.getColumn(0,"CO_CD"));
        	this.ds_input.setColumn(nRow,"CONT_NO",               this.ds_master.getColumn(0,"CONT_NO"));
        	this.ds_input.setColumn(nRow,"CONT_CHG_DGRCNT",       this.ds_master.getColumn(0,"CONT_CHG_DGRCNT"));
        	this.ds_input.setColumn(nRow,"PRD_ID",                this.ds_master.getColumn(0,"PRD_ID"));
        	this.ds_input.setColumn(nRow,"ELC_CONT_APPR_STATS_CD","50");

        	this.fn_Save_L();
        };

        /**
         * 반려 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_rjct_onclick = function(obj,e)
        {
        	// 반려 시 합의요청은 종료되고 기존 구매정보로 유지됩니다. 반려하시겠습니까?
        	var result = this.fn_confirm("ERRR000146", "저장정보","","question" );

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();
        	this.ds_input.setColumn(nRow,"CO_CD",                 this.ds_master.getColumn(0,"CO_CD"));
        	this.ds_input.setColumn(nRow,"CONT_NO",               this.ds_master.getColumn(0,"CONT_NO"));
        	this.ds_input.setColumn(nRow,"CONT_CHG_DGRCNT",       this.ds_master.getColumn(0,"CONT_CHG_DGRCNT"));
        	this.ds_input.setColumn(nRow,"ELC_CONT_APPR_STATS_CD","40");

        	this.lv_saveMode    = "반려";

        	var lv_sFlag01 		= "N";						    // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02		= "N";						    // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 	= "반려사유";	                // 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02 	= "반려사유";                  // 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03 	= "";  	                        // 부모에서 넘어가는 파라미터(폼이름)

        	var sPopId 			= "SSP_BO_RP_01";
        	var sUrl 			= "RD_POP::SSP_BO_RP_01.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03};     // 파라미터3
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave_L = function()
        {
        	this.ds_search.setColumn(0,"GUBUN","15");
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
            var strUrl      = "/rd/purg-info-pkg-chg/save-req-cprtcp-consn-stats-dtls-stor.do";
            var strInDs     = "ds_search=ds_search:a ";
                strInDs    += "ds_input=ds_input:u";
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
        this.fn_PostSave_L = function()
        {
        	this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다

        	this.close("SAVE");
        };

        /**
         * 기능 : 수정요청 버튼 클릭시
         */
        this.btn_updReq_onclick = function(obj,e)
        {
        	// 요청주체가 자사인 경우 혹은 반려:42 & 합의완료:52 건은 수정 불가인 경우
        	if (this.ds_master.getColumn(0,"REQ_SBJ_CD") == "20"
        		|| (this.ds_master.getColumn(0,"ELC_CONT_APPR_STATS_CD") == "42" || this.ds_master.getColumn(0,"ELC_CONT_APPR_STATS_CD") == "52")
        		|| this.gfn_isNull(this.lv_btnChkYn)
        	) {
        		var result = this.fn_confirm( "ERRC000087", "취소","", "question" ); // 취소하시겠습니까?
        		if (result == 0) {
        			return false;
        		}
        		this.close("EXIT");
        	} else {
        		if (!this.gfn_dsIsUpdated(this.ds_purgInfo_R) && !this.gfn_dsIsUpdated(this.ds_qtyDcList_R)) {
        			this.fn_alert("ERRC000035","저장정보","","question"); // 변경된 이력이 없습니다.
        			return false;
        		}

        		// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        		var chkFocusFlg = false;
        		var result      = this.fn_cmmnChkEssentialItem(this.ds_purgInfo_R, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this, true);

        		if (result[0] != "success") {
        			this.fn_alert(result[0],"저장정보","","question");
        			return false;
        		}

        		// 평균배송일 0일 불가능
        		if (nexacro.toNumber(this.ds_purgInfo_R.getColumn(0,"DLV_LT")) == 0) {
        			this.fn_alert("ERRR000230","저장정보","","question"); // 평균배송일은 최소 1일 이상 입력 하셔야 합니다.
        			this.msk_dlvLt_R.setFocus();
        			return false;
        		}

        		// 기간할인 금액 존재시 매입가보다 크면 안됨
        		if (!this.gfn_isNull(this.msk_rndDcQty_R.value)) {
        			if (nexacro.toNumber(this.msk_rndDcQty_R.value) >= nexacro.toNumber(this.msk_prdPrc_R.value)) {
        				this.fn_alert("ERRR000223","저장정보","","question"); // 기간할인 금액은 매입가 금액을 넘을수 없습니다.
        				this.msk_rndDcQty_R.setFocus();
        				return false;
        			}
        		}

        		// 가격유효기간 일자 체크
        		if (!this.fn_getDefaultDateChk(this.cal_vldStrDt_R ,this.cal_vldEndDt_R ,"가격유효기간")) {
        			return false;
        		}

        		// 할인금액 존재시 기간할인 필수 체크
        		if (!this.gfn_isNull(this.msk_rndDcQty_R.value) || nexacro.toNumber(this.msk_rndDcQty_R.value) > 0) {
        			// 기간할인 일자 체크
        			if (!this.fn_getDefaultDateChk(this.cal_rndDcVldStrDtm_R ,this.cal_rndDcVldEndDtm_R ,"기간할인")) {
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
        			var strPrdPrc    = this.msk_prdPrc_R.value;  // ds_purgInfo_R.get(0, 'PRD_PRC')
        			var strRandDcQty = this.msk_rndDcQty_R.value;

        // 			if(this.gfn_isNull(strRandDcQty))
        // 			{
        // 				this.fn_alert("ERRS000144","저장정보","물량할인 존재시 기간할인 금액","question"); //&1은(는) 필수입력사항입니다.
        // 				this.msk_rndDcQty_R.setFocus();
        // 				return false;
        // 			}
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

        		var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?
        		if(result == 0)
        		{
        			return false;
        		}

        		this.lv_saveMode    = "수정";
        		var lv_sFlag01 		= "N";						    // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02		= "N";						    // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sValue01 	= "수정사유";	                // 부모에서 넘어가는 파라미터(프로그래ID)
        		var lv_sValue02 	= "수정사유";                  // 부모에서 넘어가는 파라미터(폼ID)
        		var lv_sValue03 	= "";  	                        // 부모에서 넘어가는 파라미터(폼이름)

        		var sPopId 			= "SSP_BO_RP_01";
        		var sUrl 			= "RD_POP::SSP_BO_RP_01.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02       // 파라미터2
        							  , pv_sVal03:lv_sValue03};     // 파라미터3
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {titlebar:"false"};

        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);
        	}
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave_R = function()
        {
        	this.ds_purgInfo_R.setColumn(0,"CUST_PREQNO",    this.ds_master.getColumn(0,"CUST_PREQNO"));     // 합의번호
        	this.ds_purgInfo_R.setColumn(0,"CONT_NO",        this.ds_master.getColumn(0,"CONT_NO"));         // 계약번호
        	this.ds_purgInfo_R.setColumn(0,"CONT_CHG_DGRCNT",this.ds_master.getColumn(0,"CONT_CHG_DGRCNT")); // 계약변경차수
        	this.ds_purgInfo_R.setColumn(0,"MNFR_NO",        this.ds_master.getColumn(0,"MNFR_NO"));         // 제조원
         	this.ds_purgInfo_R.setColumn(0,"PRD_CLCD",       this.ds_master.getColumn(0,"PRD_CLCD"));        // 상품분류코드
        	this.ds_purgInfo_R.setColumn(0,"CHGRQST_RSN",    this.dsDummy.getColumn(0,"REASON"));            // 수정사유

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
            var strUrl      = "/rd/purg-info-chg-hst-mng/save-purg-info-mng.do";
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

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.fn_compontAllControl();
        	}

        	if (this.ds_master.getColumn(0,"ELC_CONT_APPR_STATS_CD") === "42"
        		|| this.ds_master.getColumn(0,"ELC_CONT_APPR_STATS_CD") === "52"
        	    || this.ds_master.getColumn(0,"ELC_CONT_APPR_STATS_CD") === "37")
        	{
        		this.fn_compontAllControl();
        	}

        };

        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_updReq : this.btn_updReq
        						  , btn_close  : this.btn_close
        	                      };
        	var btnVisibleFalse = {
        							btn_rjct  : this.btn_rjct
        						  , btn_consn : this.btn_consn
        	                      };

        	this.btn_updReq.set_text("취소");
        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        	var strContChgDgrCnt = this.ds_purgInfo_R.getColumn(0,"CONT_CHG_DGRCNT");
        	var contChgDgrCnt = isNaN(contChgDgrCnt) ? 0 : parseInt(contChgDgrCnt);

        	if(contChgDgrCnt >= 3)
        	{
        		this.btn_updReq.set_visible(false); //수정요청
        		this.btn_rjct.set_visible(true);  //반려
        		this.btn_rjct.set_left("555");
        		this.btn_consn.set_visible(true); //합의
        		this.btn_consn.set_left("625");
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
         * 화면 닫기 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_close_onclick = function(obj,e)
        {
        	var strMsg = "ERRR000060"; // 수정을 취소하고 목록으로 이동하시겠습니까?

        	// 요청주체가 자사인 경우 혹은 반려 & 합의완료 건은 수정 불가
        	if(this.ds_master.getColumn(0,"REQ_SBJ_CD") == "20"
        	|| (this.ds_master.getColumn(0,"ELC_CONT_APPR_STATS_CD") == "42" || this.ds_master.getColumn(0,"ELC_CONT_APPR_STATS_CD") == "52"))
        	{
        		strMsg = "ERRC000087"; // 취소하시겠습니까?
        	}

        	var result = this.fn_confirm(strMsg, "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	this.close("CLOSE");
        };

        /**
        	전자계약 요청 취소
        */
        this.reqCancelCustPreqNo = "";
        this.btn_cnclReq_onclick = function(obj,e)
        {
        	reqCancelCustPreqNo = this.ds_master.getColumn(0, "CUST_PREQNO");

        	if (this.fn_confirm("ERRR000195", "저장정보", "", "question")) {
        		this.ds_input.setColumn(0, "CO_CD", this.ds_master.getColumn(0,"CO_CD"));
        		this.ds_input.setColumn(0, "CONT_NO", this.ds_master.getColumn(0,"CONT_NO"));
        		this.ds_input.setColumn(0, "CONT_CHG_DGRCNT", this.ds_master.getColumn(0,"CONT_CHG_DGRCNT"));
        		this.ds_input.setColumn(0, "CPRTCP_ID", this.ds_master.getColumn(0,"CPRTCP_ID"));
        		this.ds_input.setColumn(0, "ELC_CONT_APPR_STATS_CD", "37");

        		var strSvc      = "ReqCancel";
        		var strUrl      = "/rd/purg-info-pkg-chg/save-req-cprtcp-consn-stats-dtls-stor.do";
        		var strInDs     = "ds_search=ds_search:a ";
        			strInDs    += "ds_input=ds_input:u";
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
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.stc_stprc.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.btn_consn.addEventHandler("onclick",this.btn_consn_onclick,this);
            this.btn_updReq.addEventHandler("onclick",this.btn_updReq_onclick,this);
            this.btn_rjct.addEventHandler("onclick",this.btn_rjct_onclick,this);
            this.stc_dlvAmt_L.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_dlvLt_L.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00_00.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00_00_00.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00_00_00_00.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00_00_01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00_00_00_01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stcTitle09_00_00_00_00_01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.stc_purgChrpsnNm.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.stcTitle09_00_00_00_00_00_00_00_01.addEventHandler("onclick",this.stcTitle09_onclick,this);
            this.btn_cnclReq.addEventHandler("onclick",this.btn_cnclReq_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
