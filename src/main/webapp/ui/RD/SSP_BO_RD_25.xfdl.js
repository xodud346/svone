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
            this.set_titletext("R&D상품 등록(고객)");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_PRVL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"SBI_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DTL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_SELL_UPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RND_HUB_HNL_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RND_HUB_HNL_DIS_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"DSTRB_STD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"REQ_SBJ_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TB_PR_NEW_PRD_REQ_PROC_ATTR_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PR_NEW_PRD_REQ_STATS_DTLS_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BG_APLY_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PPI_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"TX_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_API_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hubHnlDisTpCdCombo", this);
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


            obj = new Dataset("ds_bgList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BG_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BG_IMG\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubOnlySprCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_catgRcmdInq", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_notiItmList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_DTL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_DTL_NO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_DTL_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NOTI_ITM_MAPP_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reqProcDtlsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PROC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PROC_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REG_DIS_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cprtcpReqInfoInq", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_PRVL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TRSF_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_SELL_UPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_RJT_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PR_NEW_PRD_REQ_PROC_ATTR_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRPS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_PRPS_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"TRSF_PSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_BASIS_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CHM_MTL_YN\" type=\"STRING\" size=\"32\"/><Column id=\"HPE_SELL_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HPE_SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REQ_RSN\" type=\"STRING\" size=\"32\"/><Column id=\"ALT_PRPS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"TRSF_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"TRSF_PSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_PRPS_SPR_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cprtcpReqAttcFile", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridFilelist", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_imageList", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ATFL_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH_1\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID_1\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ_1\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH_2\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID_2\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ_2\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH_3\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID_3\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ_3\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH_4\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID_4\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ_4\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH_5\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID_5\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ_5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATFL_NM_1\"/><Col id=\"ORI_ATFL_NM_1\"/><Col id=\"ATFL_STOR_PATH_1\"/><Col id=\"ATFL_NM_2\"/><Col id=\"ORI_ATFL_NM_2\"/><Col id=\"ATFL_STOR_PATH_2\"/><Col id=\"ATFL_NM_3\"/><Col id=\"ORI_ATFL_NM_3\"/><Col id=\"ATFL_STOR_PATH_3\"/><Col id=\"ATFL_NM_4\"/><Col id=\"ORI_ATFL_NM_4\"/><Col id=\"ATFL_STOR_PATH_4\"/><Col id=\"ATFL_NM_5\"/><Col id=\"ORI_ATFL_NM_5\"/><Col id=\"ATFL_STOR_PATH_5\"/><Col id=\"DOC_REG_ID_1\"/><Col id=\"DOC_REG_SEQ_1\"/><Col id=\"DOC_REG_ID_2\"/><Col id=\"DOC_REG_SEQ_2\"/><Col id=\"DOC_REG_ID_3\"/><Col id=\"DOC_REG_SEQ_3\"/><Col id=\"DOC_REG_ID_4\"/><Col id=\"DOC_REG_SEQ_4\"/><Col id=\"DOC_REG_ID_5\"/><Col id=\"DOC_REG_SEQ_5\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_newPrdCustReqInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_FNL_CHG_DT\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_VLD_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"HPE_SELL_UPRC\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MIN_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_DT_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"32\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_newPrdPurgQtyDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_ITV_STR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DC_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NEW_PRD_REQ_NO\"/><Col id=\"CO_CD\"/><Col id=\"REQ_SBJ_CD\"/><Col id=\"RND_REQ_PRD_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lmtOldCur", this);
            obj._setContents("<ColumnInfo><Column id=\"LMT_OLD_CUR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LMT_OLD_CUR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custSaveDto", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRSF_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ALT_PRPS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_res", this);
            obj._setContents("<ColumnInfo><Column id=\"SUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_apiUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">-- 선택 --</Col><Col id=\"COM_DTL_CD\">%</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">사용</Col><Col id=\"COM_DTL_CD\">Y</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">미사용</Col><Col id=\"COM_DTL_CD\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","20",null,null,"0","-1280",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("white");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02_00_00","629","1083",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02_00_00_00","629","1146",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02_00","629","1052",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02","629","1022",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_00_00","20","1084","600","193",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_00","20","1053","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00","20","1022","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","52",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_oprUnitNm","415","52","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bzplcNm","20","52","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcpKorNm","809","52","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("요청자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","20","1022","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("R&D카테고리 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_newPrdReqPrvlList","20","1053","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("대표규격 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00","20","1084","120","193",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("속성");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","20","996","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("R&D카테고리/속성 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","631","996","390","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("R&D 부가정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_00","629","1022","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("브랜드명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle04_00_00","629","1053","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("해시Tag");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00_00","629","1084","120","63",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("배지적용");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00","629","1146","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dispPrdSpr","759","1150",null,"24","31",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("A타입");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","155","1026","113","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsfNm","273","1026","219","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_newPrdReqPrvlList","155","1057","454","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_brndNm","759","1026",null,"24","31",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hashTag","759","1056",null,"24","31",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_sbiDocRegId","817","1089","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_bgList");
            obj.set_codecolumn("BG_SEQ");
            obj.set_datacolumn("BG_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_bgAplyStrDtm","817","1118","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","950","1116","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_bgAplyEndDtm","966","1116","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_lmt","1099","1115","81","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("제한없음");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mroAttr","156","1090","454","179",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_catgRcmdInq");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("카테고리를 선택하세요");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"decoratetext\" text=\"속성명 (&lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;*&lt;/b&gt;&lt;/fc&gt;필수)\"/><Cell col=\"1\" text=\"속성값\"/></Band><Band id=\"body\"><Cell cssclass=\"grd_WF_bg_image\" displaytype=\"decoratetext\" text=\"bind:PRNM\" textAlign=\"left\" expr=\"CHK_YN == 0 ? &quot;(미맵핑) &quot; + PRNM : MAND_YN == &quot;Y&quot; ? PRNM +&quot; &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;* &lt;/b&gt;&lt;/fc&gt;&quot; : PRNM\"/><Cell col=\"1\" text=\"bind:NEW_PRD_REQ_PRVL\" displaytype=\"expr:CHK_YN == 1 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:CHK_YN == 1 ? &quot;text&quot; : &quot;none&quot;\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","28","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("요청자 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("R&D상품상세(고객)");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00_00_00","20","308",null,"167","20",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_001","156","312","649","124",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_image_bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","20","122",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_custNewPrdReqNo","20","122","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_custMroMnfrNm","809","122","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_01_00","22","98","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("요청상품 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","153",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc__custPrdClcdNm","20","153","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_custCtryNm","809","153","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00","20","277",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_01_00_00","20","277","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("등록요청사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_01_00_00_00_00","20","308","130","167",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_1","168","321","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("productImage");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_2","298","321","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("productImage");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_3","428","321","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("productImage");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_4","558","321","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("productImage");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_5","688","321","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("productImage");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_imageList","153","444","651","26",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_binddataset("ds_imageList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:ATFL_NM_1\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"1\" text=\"bind:ATFL_NM_2\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:ATFL_NM_3\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"3\" text=\"bind:ATFL_NM_4\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"4\" text=\"bind:ATFL_NM_5\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","20","184",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_custNewPrdReqPrvlList","20","184","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_custHpeSellUprc","809","184","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("희망단가");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_01","20","215",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_02","20","215","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_custHpeSellUnitQty","809","215","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("희망수량");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","20","246",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_01_00","20","246","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("선택정보");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle11_00_00_00","809","246","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_custChmMtlYn","160","250","256","24",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("화학물질여부");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","20","520",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_trsfPsnNm","20","520","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("false");
            obj.set_text("담당자");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_01_01","22","496","195","16",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("R&D 이관 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00","20","551",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_trsfRsn","20","551","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("false");
            obj.set_text("R&D이관사유");
            this.addChild(obj.name, obj);

            obj = new Static("stc_trsfDtm","809","520","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("R&D이관일자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_01","20","630",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_lmtOldCur","20","630","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            obj.set_text("제한구현 <fc v=\"red\"><b v=\"true\">* </b></fc>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_01_01_00","22","606","195","16",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("대체상품•제안중복상품처리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00_00","20","661",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdUniInq","20","661","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("상품ID <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_lmtOldCur","160","634","262","24",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_lmtOldCur_innerdataset = new nexacro.NormalDataset("rdo_lmtOldCur_innerdataset", obj);
            rdo_lmtOldCur_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">대체상품제안</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">중복상품처리</Col></Row></Rows>");
            obj.set_innerdataset(rdo_lmtOldCur_innerdataset);
            obj.set_text("중복상품제안");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdUniInq","159","665","325","24",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdPrpsSprNm","809","630","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("제안여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdPrpsStatsNm","809","661","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("제안상태");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00_00_00","20","723",null,"62","20",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_custRjtRsn","20","723","130","62",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("고객거부사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdUniInq","488","665","85","24",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("상품조회");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_custRjtRsn","159","727",null,"53","158",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_enable("true");
            obj.set_acceptstab("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prpsDupProc",null,"754","102","24","29",null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("제안중복처리");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","946",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","915",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","884",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","853",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","822",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_newPrdReqStatsNm","415","822","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_newPrdReqNo","20","822","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle04","20","853","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("상품명 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround07","535","888","295","33",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ctrySprCd","415","884","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("원산지 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_basisUnitCd","20","884","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("주문단위 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_rndHubHnlDisTpCd","20","915","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("Hub취급가능여부 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regpsnNm","20","946","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12","160","951","256","24",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_txClcd","809","884","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("과면세구분 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reqSbjNm","809","915","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("요청구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reqPrdNm","160","857","493","24",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_autoselect("true");
            obj.set_maxlength("60");
            this.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySprCd","809","822","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("공용전용구분 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNo","809","853","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("제조원 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","321","885","10","24",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("/");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rndHubHnlDisTpCd","160","919","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_innerdataset("ds_hubHnlDisTpCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_chmMtlYn","415","915","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("화학물질여부 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regDtm","415","946","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_01","555","951",null,"24","30",null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reqSbjNm","949","919",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Button("btn_catgRcmdInq","658","857","142","24",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("카테고리 추천&조회");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","949","857","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1047","857",null,"24","58",null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrNo",null,"857","24","24","29",null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitQty","160","888","79","24",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitCd","243","888","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_unitCd","292","888","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnitCd","336","888","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sellUnitCd","386","888","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrySprCd","555","888","73","24",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctryNm","633","888","139","24",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ctrySprCd","777","888","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_pubOnlySprCd","949","826","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_pubOnlySprCd_innerdataset = new nexacro.NormalDataset("rdo_pubOnlySprCd_innerdataset", obj);
            rdo_pubOnlySprCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">공용</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">전용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_pubOnlySprCd_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_txClcd","949","888","142","24",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_txClcd_innerdataset = new nexacro.NormalDataset("rdo_txClcd_innerdataset", obj);
            rdo_txClcd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">면세</Col></Row></Rows>");
            obj.set_innerdataset(rdo_txClcd_innerdataset);
            obj.set_text("과세");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_chmMtlYn","555","919","142","24",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_chmMtlYn_innerdataset = new nexacro.NormalDataset("rdo_chmMtlYn_innerdataset", obj);
            rdo_chmMtlYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(rdo_chmMtlYn_innerdataset);
            obj.set_text("Y");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_01","20","798","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("상품 기본 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_api_00","633","1193","390","22",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("API 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_api_bg_01","631","1214",null,"32","18",null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_apiUseYn","631","1214","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("API연동여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_apiUseYn","761","1217","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_innerdataset("ds_apiUseYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcpId","895","1214","94","31",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("API연동업체");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpId","995","1218","76","24",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","1077","1218",null,"24","59",null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cprtcpId",null,"1218","24","24","30",null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_api_bg_02","631","1244",null,"32","18",null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcpPrdId","631","1244","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_text("협력사SKU");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpPrdId","761","1248",null,"24","29",null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","20","1302",null,"518","20",null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabSub01",this.tabMain);
            obj.set_text("상품 부가정보");
            obj.set_background("white");
            this.tabMain.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00","0","944",null,"32","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","0","913",null,"32","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","0","882",null,"32","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","0","851",null,"32","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static20_001","0","32",null,"248","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_image_bg");
            obj.set_text("");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer1","41","68","150","150",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("0");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_image1","69","244","87","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("1");
            obj.set_text("이미지등록");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("staHelp02_00","12","296","478","19",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("2");
            obj.set_text("* 상품이미지 사이즈 (1000px * 1000px)");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer2","281","68","150","150",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("3");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_image2","313","244","87","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("4");
            obj.set_text("이미지등록");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer3","524","68","150","150",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("5");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer4","767","68","150","150",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("6");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_image3","557","244","87","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("7");
            obj.set_text("이미지등록");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_image4","801","244","87","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("8");
            obj.set_text("이미지등록");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer5","995","68","150","150",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("9");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_image5","1030","244","87","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("10");
            obj.set_text("이미지등록");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("staHelp02_00_00","12","316","478","19",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("11");
            obj.set_text("* 상품이미지 등록 시 PC와 Mobile에 상세, 목록, 축소 이미지에 자동 리사이징이 적용됩니다");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("staHelp02_00_00_00","12","336","478","19",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("12");
            obj.set_text("* 비율이 맞지 않는 이미지를 등록하면, 이미지가 일부 잘리거나 왜곡될 수 있습니다");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("staHelp02_00_00_00_00","12","356","478","19",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("13");
            obj.set_text("* 등록 가능 이미지: 용량 1M 이하 / 확장자: gif, png. jpg(jpeg)");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("staHelp02_00_00_00_00_00","12","376","478","19",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("14");
            obj.set_text("* 새로운 이미지를 등록할 경우 기존에 등록된 이미지는 자동 삭제됩니다 ");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01_00","3","822","330","22",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("15");
            obj.set_text("파일 첨부");
            obj.set_cssclass("sta_WF_title02");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_00","0","851","180","32",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("16");
            obj.set_text("LOC");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stcTitle04_00_00","0","882","180","32",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("17");
            obj.set_text("CAO");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00_00","0","913","180","32",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("18");
            obj.set_text("화학물질확인명세서");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_00","0","944","180","32",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("19");
            obj.set_text("등록결과(면제확인)통지서");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Edit("edt_fileName1","190","855","303","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            obj.set_autoselect("true");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Edit("edt_fileName2","190","886","303","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_textDecoration("underline");
            obj.set_color("royalblue");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("COA파일이름.pdf");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_00_00","596","851","170","32",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("22");
            obj.set_text("비공개물질확인서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stcTitle04_00_00_00","596","882","170","32",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("23");
            obj.set_text("비공개물질체크시트");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00_00_00","596","913","170","32",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("24");
            obj.set_text("등록결정통지서");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Edit("edt_fileName5","772","855","313","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Edit("edt_fileName6","772","886","313","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Edit("edt_fileName3","190","917","303","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            obj.set_autoselect("true");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Edit("edt_fileName4","190","948","303","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            obj.set_autoselect("true");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_file1","504","855","87","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("29");
            obj.set_text("파일 등록");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Edit("edt_fileName7","772","917","313","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_file2","504","886","87","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("31");
            obj.set_text("파일 등록");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_file3","504","917","87","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("32");
            obj.set_text("파일 등록");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_file4","504","948","87","24",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("33");
            obj.set_text("파일 등록");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_file5",null,"855","87","24","13",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("34");
            obj.set_text("파일 등록");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_file6",null,"886","87","24","13",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("35");
            obj.set_text("파일 등록");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_file7",null,"917","87","24","13",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("36");
            obj.set_text("파일 등록");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","4","300","30",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("38");
            obj.set_text("이미지 정보");
            obj.set_cssclass("sta_WF_title02");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static60_00_01","0","395","300","30",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("39");
            obj.set_text("상품 상세 설명");
            obj.set_cssclass("sta_WF_title02");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new WebBrowser("wbs_prdDetail","0","420",null,"399","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("40");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static00","281","39","12.32%","20",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("41");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static00_00","995","39","12.08%","20",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("42");
            obj.set_text("상세이미지");
            obj.set_textAlign("center");
            obj.set_color("blue");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static00_01","524","39","12.32%","20",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("43");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static00_02","767","39","12.32%","20",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("44");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static00_03","41","39","11.79%","20",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("45");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_clear1","196","68","18","18",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("46");
            obj.set_text("X");
            obj.set_visible("true");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_clear2","436","68","18","18",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("47");
            obj.set_text("X");
            obj.set_visible("true");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_clear3","679","68","18","18",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("48");
            obj.set_text("X");
            obj.set_visible("true");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_clear4","922","68","18","18",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("49");
            obj.set_text("X");
            obj.set_visible("true");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_clear5","1150","68","18","18",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("50");
            obj.set_text("X");
            obj.set_visible("true");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","330","6","290","19",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("55");
            obj.set_visible("false");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","624","6","98","19",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("56");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Tabpage("tabSub02",this.tabMain);
            obj.set_text("가격정보");
            this.tabMain.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","0","13",null,"32","0",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_00","0","13","180","32",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("0");
            obj.set_text("기준가");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_00_00","612","13","170","32",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("1");
            obj.set_text("List Price");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dstrbStdPrc",null,"17","299","24","26",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("2");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_autoselect("true");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","591","19","20","24",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("3");
            obj.set_text("원");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00",null,"18","20","24","0",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("4");
            obj.set_text("원");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcBackGround01","330","20","256","23",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new MaskEdit("msk_hpeSellUprc","319","17","260","24",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_autoselect("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Tabpage("tabSub03",this.tabMain);
            obj.set_text("상품고시정보 ");
            this.tabMain.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_01_00","0","31",null,"32","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01_00","10","-28","330","22",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("0");
            obj.set_text("파일 첨부");
            obj.set_cssclass("sta_WF_Title01");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_09_00","6","84","330","22",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("1");
            obj.set_text("상품정보제공 고시 상세");
            obj.set_cssclass("sta_WF_title02");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_notiItmId","0","31","180","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("2");
            obj.set_text("품목");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_notiItmIdNm","193","35","313","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","6","4","330","22",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("5");
            obj.set_text("상품정보제공 고시 품목");
            obj.set_cssclass("sta_WF_title02");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Button("btn_notiItmId","510","35","24","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Grid("grd_notiItmList","0","110",null,"280","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("7");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("카테고리를 선택하세요");
            obj.set_binddataset("ds_notiItmList");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/><Column size=\"480\"/></Columns><Rows><Row size=\"31\"/></Rows><Band id=\"body\"><Cell text=\"bind:NOTI_ITM_DTL_NM\" background=\"#ebebee\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PRD_NOTI_ITM_MAPP_CTS\" displaytype=\"editcontrol\" edittype=\"text\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_notiItmId","539","35","313","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_visible("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Grid("grd_reqProcDtlsList","20","1830","1206","240",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_reqProcDtlsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"500\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"처리상태\"/><Cell col=\"1\" text=\"처리일\"/><Cell col=\"2\" text=\"처리자\"/><Cell col=\"3\" text=\"반려유형\"/><Cell col=\"4\" text=\"사유\"/></Band><Band id=\"body\"><Cell text=\"bind:NEW_PRD_REQ_STATS_NM\"/><Cell col=\"1\" text=\"bind:PROC_DTM\"/><Cell col=\"2\" text=\"bind:PROC_NM\"/><Cell col=\"3\" text=\"bind:PRD_REG_DIS_TP_NM\"/><Cell col=\"4\" text=\"bind:REASON\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sspSend","524","1026","82","24",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("SSP이관");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00_01","20","692",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_altPrpsRsn","20","692","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            obj.set_text("대체제안사유");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_altPrpsRsn","159","696",null,"24","28",null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","160","56","245","24",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("(210245)르네상스");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitNm","555","56","245","24",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("(325784)르네상스Z");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpKorNm","949","56",null,"24","28",null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("(member)최요청");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custNewPrdReqNo","160","126","245","24",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("R10168514");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custReqPrdNm","160","157","245","24",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("스크류바이알");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custNewPrdReqPrvlList","160","188","245","24",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("불투명;6mm;8mm;100m");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custPrdClcdNm","160","219","642","24",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("시약>비표준시약>유기/무기합성시약");
            this.addChild(obj.name, obj);

            obj = new Edit("stcBackGround01_00_01_02_03","160","281",null,"24","28",null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_value("온 사방을 돌아 댕겨도 못구하겠네요. 서브원만 믿습니다");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("온 사방을 돌아 댕겨도 못구하겠네요. 서브원만 믿습니다");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custMroMnfrNm","949","126",null,"24","28",null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("월플러스엠");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custCtryNm","949","157",null,"24","28",null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("(VT)베트남");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_custHpeSellUprc","949","188",null,"24","28",null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("90,000원");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_type("number");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_custHpeSellUnitQty","949","219",null,"24","28",null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("20EA");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Edit("stcBackGround01_00_01_02_01_00_00","949","250",null,"24","29",null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("공용");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_trsfPsnNm","160","524","245","24",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_value("(019364)박등록");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("(019364)박등록");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_trsfRsn","160","555",null,"24","28",null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_value("고객이 요청한 상품은 R&D상품으로 보입니다.");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("고객이 요청한 상품은 R&D상품으로 보입니다.");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_trsfDtm","949","524",null,"24","28",null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_value("2021.09.03 09:12:32");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("2021.09.03 09:12:32");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdPrpsSprYn","949","634",null,"24","28",null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_value("N");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("N");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdPrpsStatsNm","949","665",null,"24","28",null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("불투명;6mm;8mm;100m");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnNm","160","950","251","24",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regDtm","555","950",null,"23","25",null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_newPrdReqNo","160","826","249","24",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("R10168514");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_newPrdReqStatsNm","555","826","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("요청");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","497","2087","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","569","2087","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rjct","641","2087","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_fileList","949","314",null,"154","29",null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_binddataset("ds_gridFilelist");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"137\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:ATFL_NM\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" cursor=\"pointer\" color=\"royalblue\" textDecoration=\"underline\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle11_00_00_00_01","809","308","130","167",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer","759","1090","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","278","1309","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdClPop","496","1026","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save2",null,"25","67","24","20",null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_download","1350","164","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,846,this,function(p){});
            obj.set_description("R&D상품 등록(고객)");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cal_bgAplyStrDtm","value","ds_master","BG_APLY_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cal_bgAplyEndDtm","value","ds_master","BG_APLY_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_reqPrdNm","value","ds_master","REQ_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_regpsnNm","value","ds_master","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_newPrdReqNo","value","ds_master","NEW_PRD_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_newPrdReqStatsNm","value","ds_master","NEW_PRD_REQ_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_dispPrdSpr","value","ds_master","DISP_PRD_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tabMain.tabSub02.form.msk_hpeSellUprc","value","ds_master","HPE_SELL_UPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tabMain.tabSub02.form.msk_dstrbStdPrc","value","ds_master","DSTRB_STD_PRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tabMain.tabSub03.form.edt_notiItmIdNm","value","ds_master","NOTI_ITM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tabMain.tabSub03.form.edt_notiItmId","value","ds_master","NOTI_ITM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_newPrdReqPrvlList","value","ds_master","NEW_PRD_REQ_PRVL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_prdClcd","value","ds_master","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_prdClsfNm","value","ds_master","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_brndNm","value","ds_master","BRND_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_hashTag","value","ds_master","HASH_TAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","cbo_sbiDocRegId","value","ds_master","BG_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","rdo_pubOnlySprCd","value","ds_master","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_mnfrNm","value","ds_master","MRO_MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edt_mnfrNo","value","ds_master","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","rdo_txClcd","value","ds_master","TX_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edt_ctrySprCd","value","ds_master","ORGPLC_CTRY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edt_ctryNm","value","ds_master","CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edt_sellUnitCd","value","ds_master","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edt_basisUnitCd","value","ds_master","BASIS_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edt_basisUnitQty","value","ds_master","BASIS_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","cbo_rndHubHnlDisTpCd","value","ds_master","RND_HUB_HNL_DIS_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","rdo_chmMtlYn","value","ds_master","CHM_MTL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","edt_reqSbjNm","value","ds_master","REQ_SBJ_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","edt_regDtm","value","ds_master","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edt_bzplcNm","value","ds_cprtcpReqInfoInq","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edt_oprUnitNm","value","ds_cprtcpReqInfoInq","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edt_cprtcpKorNm","value","ds_cprtcpReqInfoInq","CPRTCP_KOR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edt_custNewPrdReqNo","value","ds_cprtcpReqInfoInq","NEW_PRD_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","edt_custMroMnfrNm","value","ds_cprtcpReqInfoInq","MRO_MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edt_custReqPrdNm","value","ds_cprtcpReqInfoInq","REQ_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","edt_custCtryNm","value","ds_cprtcpReqInfoInq","CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","msk_custHpeSellUprc","value","ds_cprtcpReqInfoInq","HPE_SELL_UPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","msk_custHpeSellUnitQty","value","ds_cprtcpReqInfoInq","HPE_SELL_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","stcBackGround01_00_01_02_01_00_00","value","ds_cprtcpReqInfoInq","PUB_ONLY_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","stcBackGround01_00_01_02_03","value","ds_cprtcpReqInfoInq","REQ_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","edt_custPrdClcdNm","value","ds_cprtcpReqInfoInq","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","edt_custNewPrdReqPrvlList","value","ds_cprtcpReqInfoInq","NEW_PRD_REQ_PRVL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","chk_custChmMtlYn","value","ds_cprtcpReqInfoInq","CHM_MTL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","edt_trsfPsnNm","value","ds_cprtcpReqInfoInq","TRSF_PSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","edt_trsfDtm","value","ds_cprtcpReqInfoInq","TRSF_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","edt_trsfRsn","value","ds_cprtcpReqInfoInq","TRSF_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","edt_altPrpsRsn","value","ds_cprtcpReqInfoInq","ALT_PRPS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","txa_custRjtRsn","value","ds_cprtcpReqInfoInq","CUST_RJT_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","edt_prdPrpsSprYn","value","ds_cprtcpReqInfoInq","PRD_PRPS_SPR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","edt_prdPrpsStatsNm","value","ds_cprtcpReqInfoInq","PRD_PRPS_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","edt_prdUniInq","value","ds_master","RND_REQ_PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","rdo_lmtOldCur","value","ds_lmtOldCur","LMT_OLD_CUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","cbo_apiUseYn","value","ds_master","INVN_API_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","edt_cprtcpId","value","ds_master","CPRTCP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","edt_cprtcpNm","value","ds_master","CPRTCP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","edt_cprtcpPrdId","value","ds_master","CPRTCP_PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_25.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_25.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_25.xfdl(R&D상품등록(고객))
        * 작 성         일 명: 오왕표
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
        this.fv_oApp        = nexacro.getApplication();
        this.lvchkColidDs   = "PUB_ONLY_SPR_CD$REQ_PRD_NM$MNFR_NO$BASIS_UNIT_QTY$BASIS_UNIT_CD$ORGPLC_CTRY_CD$TX_CLCD$RND_HUB_HNL_DIS_TP_CD$CHM_MTL_YN$PRD_CLCD$NEW_PRD_REQ_PRVL_LIST"
        this.lvchkColNameDs = "공용전용구분$상품명$제조원$주문단위 기본수량$주문단위 기본단위$원산지$과세면세구분$Hub취급가능여부$화학물질여부$카테고리$속성";

        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sParamArg1;
        this.sParamArg2;
        this.sParamArg3;

        this.lv_PrdIdExstYn  = "";
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.webEdit        = "";
        this.lvGetDate      = "";								 // 현재일자 가져오기 위한 변수 값
        this.imageViewerId  = "";								 // 이미지파일 뷰어 표시를 위한 변수 값
        this.fileIndex      = "";								 // 파일 index 값을 저장을 위한 변수 값
        this.imageFileYn    = false;							 // 이미지 및 첨부파일 구분을 위한 변수 값
        this.lv_ctryCdYn    = "";                                // 국가코드 정합성 여부
        this.lv_mnfrNoYn    = "";                                // 제조원코드 정합성 여부
        this.lv_prdIdYn     = "N";                               // 대체상품•제안중복상품처리 상품ID  조회시
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

        	if(this.getOwnerFrame().pv_sOp02 == "N")
        	{
        		this.stc_title.set_text("R&D상품등록(고객)");
        	}

        	// 웹에디터.초기세팅 - 뷰어
        	var URL = nexacro.getEnvironment().services["svcUrl"].url + "toastEditor/index.html";
            this.tabMain.tabSub01.form.wbs_prdDetail.set_url(URL);
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

            var strDs    = "ds_hubHnlDisTpCdCombo";            // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "HUB_HNL_DIS_TP_CD";                // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S";                                // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                 // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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

        	this.ds_search.setColumn(0,"CO_CD",this.lv_coCd);

        	// API 사용 콤보박스 기본값 설정 : -- 선택 --
        	this.cbo_apiUseYn.set_index(0);

        	// 스마트 에디터 웹로딩후 조회 처리
        	this.fn_BgList();
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
        			case "selectBgList" :
        					this.fn_PostBgList();
        					break;
        			case "CatgAttrInfo" :
        					this.fn_PostCatgAttrInfo();
        					break;
        			case "PrdNotiPrdInq" :
        					this.fn_PostPrdNotiPrdInq();
        					break;
                    case "Save":
                            this.fn_PostSave();
                        break;
        			case "SavePrpsDupPro":
        					this.fn_PostPrpsDupPro();
        				break;
                    default:
                        break;
                }
            }
        };
        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 배지 이미지 조회 후 실행
         */
        this.fn_PreBgList = function()
        {
        	return true;
        }

        /**
         * 기능 : 배지 이미지 조회 후 실행
         */
        this.fn_BgList = function()
        {
            if(!this.fn_PreBgList())
            {
                return false;
            }

            var strSvc      = "selectBgList";
            var strUrl      = "/rd/new-prd-req-lst/select-bg-list-info-inq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_bgList=ds_bgList";
            var strArg      = "";
            var strCallBack = "fn_callBack";     //공백일시 기본 fn_callBack
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
         * 기능 : 배지 이미지 조회 후 실행
         */
        this.fn_PostBgList = function()
        {
        	var nRow = this.ds_bgList.insertRow(0);
        	this.ds_bgList.setColumn(nRow,"BG_SEQ",null);
        	this.ds_bgList.setColumn(nRow,"BG_NM", "선택");

        	this.ds_search.setColumn(0,"NEW_PRD_REQ_NO",this.sParamArg1);
        	this.ds_search.setColumn(0,"REQ_SBJ_CD",    this.sParamArg2);

        	// 조회 호출
        	this.fn_Ret();
        };

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
            var strUrl      = "/rd/new-prd-req-lst/select-prd-reg-ocorp-inq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master"
        		            + " ds_catgRcmdInq=ds_catgRcmdInq"
        		            + " ds_notiItmList=ds_notiItmList"
        		            + " ds_saveFileList=ds_saveFileList"
        					+ " ds_reqProcDtlsList=ds_reqProcDtlsList"
        					+ " ds_cprtcpReqInfoInq=ds_cprtcpReqInfoInq"
        					+ " ds_cprtcpReqAttcFile=ds_cprtcpReqAttcFile"
        					+ " ds_newPrdCustReqInfo=ds_newPrdCustReqInfo"
        					+ " ds_newPrdPurgQtyDtls=ds_newPrdPurgQtyDtls";
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
        	// 판매주문단위 존재시
        	if(!this.gfn_isNull(this.edt_sellUnitCd.value) || nexacro.toNumber(this.edt_basisUnitQty.value) > 1)
        	{
        		this.btn_sellUnitCd.set_enable(true);
        	}

        	// 상세 모드로 불러온 케이스
        	if(this.sOptinoArg2 == "Y" && this.ds_master.getColumn(0,"NEW_PRD_REQ_STATS_CD") != "34")
        	{
        		this.fn_compontAllControl();
        	}

        	// 화학물질여부 값 존재시
        	if(this.gfn_nvl(this.ds_cprtcpReqInfoInq.getColumn(0,"CHM_MTL_YN"),"") == "Y")
        	{
        		this.chk_custChmMtlYn.set_value(true);
        	}

        	// 대체상품제안 존재시
        	if(this.ds_reqProcDtlsList.findRow("NEW_PRD_REQ_STATS_CD","30") != -1)
        	{
        		this.ds_lmtOldCur.setColumn(0,"LMT_OLD_CUR",0);
        	}
        	// 중복상품제안 존재시
        	else if(this.ds_reqProcDtlsList.findRow("NEW_PRD_REQ_STATS_CD","56") != -1)
        	{
        		this.ds_lmtOldCur.setColumn(0,"LMT_OLD_CUR",1);
        	}
        	else
        	{
        		// 대체상품•제안중복상품처리 상품ID 조회가 아닐 경우
        		if(this.lv_prdIdYn == "N")
        		{
        			this.ds_master.setColumn(0,"RND_REQ_PRD_ID","");
        		}
        	}

        	var contents = "";
        		contents = this.gfn_nvl(this.ds_master.getColumn(0,"PRD_DTL_DESC"),"");
        		contents = this.fn_getDecodeString(contents);

        	//에디터의 editorData textarea에 세팅한다.
        	this.webEdit.getProperty("editorData").setProperty("value",this.gfn_nvl(contents,""));
        	//에디터 내의 이벤트 강제 호출로 에디터 안으로 값 넣는다.
        	this.webEdit.getProperty("setData").callMethod("click");

        	// 배지 이미지 조회
        	if(this.gfn_nvl(this.ds_master.getColumn(0,"BG_SEQ"),"") != "")
        	{
        		var findRow     = this.ds_bgList.findRow("BG_SEQ",this.ds_master.getColumn(0,"BG_SEQ"))
        		var filePath 	= this.ds_bgList.getColumn(findRow,"ATFL_STOR_PATH");
        		var fileOrgName = this.ds_bgList.getColumn(findRow,"ATFL_NM");
        		var fileName    = this.ds_bgList.getColumn(findRow,"ORI_ATFL_NM");

        		// 제한없음 체크
        		if(this.gfn_nvl(this.ds_master.getColumn(0,"BG_APLY_END_DTM"),"").indexOf("9999-12-31") != -1)
        		{
        			this.chk_lmt.set_value(true);
        		}

        		this.ImageViewer.set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
        	}

        	// 상단 이미지 & 첨부파일 존재시
        	if(this.ds_cprtcpReqAttcFile.getRowCount() > 0)
        	{
        		var imgList = [["60","1"],["61","2"],["62","3"],["63","4"],["80","5"]];

        		for(var idx=0; idx<this.ds_cprtcpReqAttcFile.getRowCount(); idx++)
        		{
        			var filePath     = this.ds_cprtcpReqAttcFile.getColumn(idx,"ATFL_STOR_PATH");
        			var fileName     = this.ds_cprtcpReqAttcFile.getColumn(idx,"ORI_ATFL_NM");
        			var fileOrgName  = this.ds_cprtcpReqAttcFile.getColumn(idx,"ATFL_NM");
        			var strEtcFds2   = this.ds_cprtcpReqAttcFile.getColumn(idx,"ETC_FDS_2");
        			var strAtflNm    = this.ds_cprtcpReqAttcFile.getColumn(idx,"ATFL_NM");
        			var strDocRegId  = this.ds_cprtcpReqAttcFile.getColumn(idx,"DOC_REG_ID");
        			var strDocRegSeq = this.ds_cprtcpReqAttcFile.getColumn(idx,"DOC_REG_SEQ");
        			var imageYn     = "N";

        			// 이미지 파일 Set
        			for(var jdx=0; jdx<imgList.length; jdx++)
        			{
        				if(strEtcFds2 == imgList[jdx][0])
        				{
        					imageYn = "Y";
        					this.ds_imageList.setColumn(0,"ATFL_NM_"        + imgList[jdx][1],fileOrgName);
        					this.ds_imageList.setColumn(0,"ORI_ATFL_NM_"    + imgList[jdx][1],fileName);
        					this.ds_imageList.setColumn(0,"ATFL_STOR_PATH_" + imgList[jdx][1],filePath);
        					this.ds_imageList.setColumn(0,"DOC_REG_ID_"     + imgList[jdx][1],strDocRegId);
        					this.ds_imageList.setColumn(0,"DOC_REG_SEQ_"    + imgList[jdx][1],strDocRegSeq);

        					this["ImageViewer_"+imgList[jdx][1]].set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
        				}
        			}
        			// 첨부파일 Set
        			if(imageYn == "N")
        			{
        				var nRow = this.ds_gridFilelist.addRow();
        				this.ds_gridFilelist.copyRow(nRow,this.ds_cprtcpReqAttcFile,idx);
        			}
        		}
        	}

        	// 하단 이미지 & 첨부파일 존재시
        	if(this.ds_saveFileList.getRowCount() > 0)
        	{
        		var imgList  = [["60","1"],["61","2"],["62","3"],["63","4"],["80","5"]];
        		var fileList = [["9A","1"],["9B","2"],["9C","3"],["9D","4"],["9E","5"],["9F","6"],["9G","7"]];

        		for(var idx=0; idx<this.ds_saveFileList.rowcount; idx++)
        		{
        			var filePath    = this.ds_saveFileList.getColumn(idx,"ATFL_STOR_PATH");
        			var fileName    = this.ds_saveFileList.getColumn(idx,"ORI_ATFL_NM");
        			var fileOrgName = this.ds_saveFileList.getColumn(idx,"ATFL_NM");
        			var strEtcFds2  = this.ds_saveFileList.getColumn(idx,"ETC_FDS_2");
        			var strAtflNm   = this.ds_saveFileList.getColumn(idx,"ATFL_NM");

        			// 이미지 파일 Set
        			for(var jdx=0; jdx<imgList.length; jdx++)
        			{
        				if(strEtcFds2 == imgList[jdx][0])
        				{
        					this.tabMain.tabSub01.form["ImageViewer"+imgList[jdx][1]].set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
        				}
        			}
        			// 첨부파일 Set
        			for(var kdx=0; kdx<fileList.length; kdx++)
        			{
        				if(strEtcFds2 == fileList[kdx][0])
        				{
        					this.tabMain.tabSub01.form["edt_fileName"+fileList[kdx][1]].set_value(fileOrgName);
        					this.tabMain_tabSub01_edt_fileName_onchanged(this.tabMain.tabSub01.form["edt_fileName"+fileList[kdx][1]],new nexacro.ChangeEventInfo());
        				}
        			}
        		}
        	}
        };

        /**
         * 기능 : 카테고리속성 조회 전 실행
         */
        this.fn_PreCatgAttrInfo = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 카테고리속성 조회 실행
         */
        this.fn_CatgAttrInfo = function()
        {
            if(!this.fn_PreCatgAttrInfo())
            {
                return false;
            }
            var strSvc      = "CatgAttrInfo";
            var strUrl      = "/rd/new-prd-req-lst/select-catg-attr-info.do";
            var strInDs     = "";
            var strOutDs    = "ds_catgRcmdInq=ds_catgRcmdInq";
            var strArg      = "NEW_PRD_REQ_NO=" + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"NEW_PRD_REQ_NO"))
        	                + " PRD_CLCD="      + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"PRD_CLCD"))
        	                + " OLD_PRD_CLCD="  + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"OLD_PRD_CLCD"))
        	                + " CO_CD="         + nexacro.wrapQuote(this.ds_search.getColumn(this.ds_search.rowposition,"CO_CD"));
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
         * 기능 : 카테고리속성 조회 후 실행
         */
        this.fn_PostCatgAttrInfo = function()
        {
        	this.edt_newPrdReqPrvlList.set_value("");

        	// 카테고리속성에 맵핑된 상품고시 존재시
        	if(this.ds_catgRcmdInq.getRowCount() > 0)
        	{
        		var textLen = "";

        		for(var idx=0; idx<this.ds_catgRcmdInq.getRowCount(); idx++)
        		{
        			var val      = this.ds_catgRcmdInq.getColumn(idx,"PRVL");
        			var strChkYn = this.ds_catgRcmdInq.getColumn(idx,"CHK_YN");

        			if(this.gfn_nvl(val,"") != "" && strChkYn == 1)
        			{
        				if(textLen != "")
        				{
        					textLen += ";";
        				}
        				textLen += val;
        			}
        		}

        		this.edt_newPrdReqPrvlList.set_value(textLen);

        		var strNotiItmId = this.ds_catgRcmdInq.getColumn(0,"NOTI_ITM_ID");
        		var strNotiItmNm = this.ds_catgRcmdInq.getColumn(0,"NOTI_ITM_NM");

        		if(!this.gfn_isNull(strNotiItmId))
        		{
        			this.tabMain.tabSub03.form.edt_notiItmId.set_value(strNotiItmId);
        			this.tabMain.tabSub03.form.edt_notiItmIdNm.set_value(strNotiItmNm);
        			this.fn_PrdNotiPrdInq();
        		}
        	}
        };

        /**
         * 기능 : 상품고시정보 조회 전 실행
         */
        this.fn_PrePrdNotiPrdInq = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 상품고시정보 조회 실행
         */
        this.fn_PrdNotiPrdInq = function()
        {
            if(!this.fn_PrePrdNotiPrdInq())
            {
                return false;
            }
            var strSvc      = "PrdNotiPrdInq";
            var strUrl      = "/rd/new-prd-req-lst/select-prd-noti-prd-inq.do";
            var strInDs     = "";
            var strOutDs    = "ds_notiItmList=ds_notiItmList";
            var strArg      = "PRD_ID="       + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"RND_REQ_PRD_ID"))
        					+ " CO_CD="       + nexacro.wrapQuote(this.ds_search.getColumn(this.ds_search.rowposition,"CO_CD"))
        	                + " NOTI_ITM_ID=" + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"NOTI_ITM_ID"));
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
         * 기능 : 상품고시정보 조회 후 실행
         */
        this.fn_PostPrdNotiPrdInq = function()
        {

        };
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
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
        	// 웹에디터.변경전 값과 변경 후 값을 세팅
        	this.webEdit.getProperty("getData").callMethod("click");
            var isUpdateEditor = this.gfn_nvl(this.webEdit.getProperty("editorData").getProperty("value"),"");
        	var strPrdDtlDesc  = this.gfn_nvl(this.ds_master.getColumn(0,"PRD_DTL_DESC"),"");

            if(!this.gfn_dsIsUpdated(this.ds_master) && !this.gfn_dsIsUpdated(this.ds_saveFileList)
        	&& !this.gfn_dsIsUpdated(this.ds_catgRcmdInq) && !this.gfn_dsIsUpdated(this.ds_notiItmList)
        	&& (isUpdateEditor == strPrdDtlDesc))
            {
                this.fn_alert("ERRC000035","저장정보","","question"); // 변경된 이력이 없습니다.!
                return false;
            }

        	// SSP-2632_LGH_RD_20230306 | 상품명 자릿수 체크
        	var reqPrdNmLength = this.gfn_lengthByte(this.edt_reqPrdNm.value);
        	if (reqPrdNmLength > 50) {
        		this.fn_alert(this.fn_getMessage("ERRD000001", "50", reqPrdNmLength));
        		return false;
        	}

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.fn_cmmnChkEssentialItem(this.ds_master, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this, true);


            if (result[0] != "success")
            {
                this.fn_alert(result[0],"저장정보","","question");
                this.ds_master.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	// 주문단위 기본단위코드 & 판매단위코드가 같으면 안됨!!
        	if(this.edt_basisUnitCd.value == this.edt_sellUnitCd.value)
        	{
        		this.fn_alert("ERRR000207","저장정보","","question"); // 기본주문단위와 판매주문단위를 동일하게 입력을 하실수 없습니다.
        		this.edt_sellUnitCd.setFocus();
        		return false;
        	}

        	// 주문단위 수량이 2이상인 경우, 판매단위 필수 입력 체크
        	if(this.edt_basisUnitQty.value > 1)
        	{
        		if(this.gfn_isNull(this.edt_sellUnitCd.value))
        		{
        			this.fn_alert("ERRR000221","저장정보","","question"); // 기본주문단위 수량이 2 이상인 경우 판매주문단위를 필수로 입력 하셔야 합니다.
        			this.edt_sellUnitCd.setFocus();
        			return false;
        		}
        	}

        	if(this.ds_catgRcmdInq.getRowCount() == 0)
        	{
        		this.fn_alert("ERRS000144","저장정보","R&D카테고리속성","question");
        		this.scrollTo(620,720);
        		this.grd_mroAttr.setFocus();
        		return false;
        	}

        	for(var idx=0; idx<this.ds_catgRcmdInq.getRowCount(); idx++)
        	{
        		var strPrnm          = this.ds_catgRcmdInq.getColumn(idx,"PRNM");
        		var strMandYn        = this.ds_catgRcmdInq.getColumn(idx,"MAND_YN");
        		var strNewPrdReqPrvl = this.gfn_trim(this.gfn_nvl(this.ds_catgRcmdInq.getColumn(idx,"NEW_PRD_REQ_PRVL"),""));
        		var strAttrLength = this.fn_getLengthB(strNewPrdReqPrvl, 3);

        		if(strMandYn == "Y")
        		{
        			if(strNewPrdReqPrvl == "")
        			{
        				this.fn_alert("ERRR000170","저장정보",strPrnm,"question"); //카테고리 필수입력 &1 속성값을 입력 하셔야 합니다.
        				this.scrollTo(620,720);
        				this.grd_mroAttr.setFocus();
        				this.ds_catgRcmdInq.set_rowposition(idx);
        				this.grd_mroAttr.setCellPos(this.grd_mroAttr.getBindCellIndex("body","NEW_PRD_REQ_PRVL"));
        				this.grd_mroAttr.showEditor();
        				return false;
        			}
        		}

        		// 속성명 길이 체크
        		if (strAttrLength > 30) {
        			this.fn_alert(this.fn_getMessage("ERRP000308", "30", strAttrLength));
        			return false;
        		}
        	}

        	// 상품고시정보 미입력시 필수 사항 체크
        	if(this.gfn_nvl(this.ds_master.getColumn(0,"NOTI_ITM_NM"),"") == "")
        	{
        		this.fn_alert("ERRS000144","저장정보","상품고시정보","question");
        		this.tabMain.set_tabindex(2);
        		return false;
        	}
        	/* 2022-07-07 고시상품품목 필수 체크 해지 요청 나중에 혹시 몰라 주석으로 막아둡니다.
        	else
        	{
        		for(var idx=0; idx<this.ds_notiItmList.getRowCount(); idx++)
        		{
        			var strNotiItmDtlNm      = this.ds_notiItmList.getColumn(idx,"NOTI_ITM_DTL_NM");
        			var strPrdNotiItmMappCts = this.ds_notiItmList.getColumn(idx,"PRD_NOTI_ITM_MAPP_CTS");

        			if(this.gfn_nvl(strPrdNotiItmMappCts,"") == "")
        			{
        				this.fn_alert("ERRR000171","저장정보",(idx+1) + "," + strNotiItmDtlNm,"question");   //상품고시정보 &1번째 &2 고시 상세를 입력 하셔야 합니다.
        				this.tabMain.set_tabindex(2);
        				this.ds_notiItmList.set_rowposition(idx);
        				this.tabMain.tabSub03.form.grd_notiItmList.setCellPos(this.tabMain.tabSub03.form.grd_notiItmList.getBindCellIndex("body","PRD_NOTI_ITM_MAPP_CTS"));
        				this.tabMain.tabSub03.form.grd_notiItmList.showEditor();
        				return false;
        			}
        		}
        	}
        	*/

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

        			if(this.ds_saveFileList.getColumn(idx,"ETC_FDS_2").substr(0,1) == "9")
        			{
        				if(this.ds_saveFileList.getColumn(idx,"ATFL_LEN") > 31457280)
        				{
        					this.fn_alert("ERRR000172","저장정보","30M","question"); // 해당 파일 사이즈가 &1를 초과 합니다.
        					return false;
        				}
        			}
        			else
        			{
        				// 상세이미지는 용량 제한 해제
        				if(this.ds_saveFileList.getColumn(idx,"ETC_FDS_2") == "80")
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
        	}

        	// 배지적용일자 같은날은 등록 불가 체크
        	if(!this.gfn_isNull(this.cbo_sbiDocRegId.value))
        	{
        		if(this.cal_bgAplyStrDtm.value == this.cal_bgAplyEndDtm.value)
        		{
        			this.fn_alert("ERRR000228","저장정보","","question"); // 배지적용 시작일자와 종료일자가 동일 하면 안됩니다.
        			this.cal_bgAplyEndDtm.setFocus();
        			return false;
        		}
        	}

        	// 배지적용일자 체크
        	if(!this.fn_getDefaultDateChk(this.cal_bgAplyStrDtm
        	                             ,this.cal_bgAplyEndDtm
        								 ,"배지적용"
        								 ,true))
        	{
        		return false;
        	}

         	// 웹에디터 변경전, 후 값 세팅
        	this.webEdit.getProperty("getData").callMethod("click");
            this.ds_master.setColumn(0,"PRD_DTL_DESC", this.webEdit.getProperty("editorData").getProperty("value"));

        	// 국가코드 & 제조원 정합성 체크
        	if(!this.fn_codeChkYn())
        	{
        		return false;
        	}

        	// API연동여부 = 'Y'일 떄, API연동업체와 협력사SKU 필수선택 정합성확인
        	if(this.cbo_apiUseYn.value == "Y"  )
        	{
        		if(this.edt_cprtcpNm.value == null || this.edt_cprtcpNm.value == '' || this.edt_cprtcpId.value == null || this.edt_cprtcpId.value == '')
        		{
        			this.fn_alert("ERRP000314","저장정보","","question"); // API연동업체를 선택해주세요.
        			this.edt_cprtcpId.setFocus();
        			return false;
        		}

        		if(this.edt_cprtcpPrdId.value == null || this.edt_cprtcpPrdId.value == '')
        		{
        			this.fn_alert("ERRP000315","저장정보","","question"); // 협력사SKU를 입력해주세요.
        			this.edt_cprtcpPrdId.setFocus();
        			return false;
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
            var strUrl      = "/rd/new-prd-req-lst/save-cprtcp-reg-stor.do";
            var strInDs     = "ds_master=ds_master:u"
        		            + " ds_catgRcmdInq=ds_catgRcmdInq:A"
        		            + " ds_notiItmList=ds_notiItmList:u"
        		            + " ds_saveFileList=ds_saveFileList:u"
        					+ " ds_newPrdCustReqInfo=ds_newPrdCustReqInfo:a"
        					+ " ds_newPrdPurgQtyDtls=ds_newPrdPurgQtyDtls:a";
            var strOutDs    = "ds_res=ds_output";
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
        	if (this.ds_res.getColumn(0, "SUCCESS") == "Y") {
        		this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다
        		this.close("SAVE");
        	} else {
        		alert(this.ds_res.getColumn(0, "MESSAGE"));	// 중복처리 안내
        		this.close("SAVE");
        	}
        };

        /**
         * 제안중복처리 버튼 클릭시 onclick  이벤트 발생 처리
         */
        this.btn_prpsDupProc_onclick = function(obj,e)
        {
        	this.fn_SavePrpsDupPro();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PrePrpsDupPro = function()
        {
        	if(this.gfn_nvl(this.edt_prdUniInq.value,"") == "")
        	{
        		this.fn_alert("ERRS000144","저장정보","상품ID","question"); // &1은(는) 필수입력사항입니다.
        		this.edt_prdUniInq.setFocus();
        		return false;
        	}

        	var strSvc      = "PrdIdExstYn";
            var strUrl      = "/rd/new-prd-req-lst/select-prd-id-exst-yn.do";
            var strInDs     = "";
        	var strOutDs    = "";

            var strArg      = "PRD_ID="       + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"RND_REQ_PRD_ID"))
        					+ " CO_CD="       + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"CO_CD"));
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        	 if(this.lv_PrdIdExstYn == "N")
        	 {
                 this.fn_alert("ERRR000174","저장정보","상품ID","question"); // 존재하지 않는 &1 입니다.
        		 return false;
        	 }
        	 else if(this.lv_PrdIdExstYn == "I")  // SSP-2623
         	 {	var result = this.fn_confirm("ERRP000312", "취소","", "question" ); // 미진열상태의 상품입니다. 계속 진행하시겠습니까.

        		if(result == 0)
        		{
        			return false;
        		}
         	 }

        	// 대체상품제안인 경우 대체제안사유 필수 입력 체크
        	if (
        		this.ds_lmtOldCur.getColumn(0,"LMT_OLD_CUR") == 0
        		&& this.gfn_nvl(this.edt_altPrpsRsn.value,"") == ""
        	) {
        		this.fn_alert("ERRS000144","저장정보","대체제안사유","question"); // &1은(는) 필수입력사항입니다.
        		this.edt_altPrpsRsn.setFocus();
        		return false;
        	}

        	 this.ds_custSaveDto.clearData();
        	 var nRow = this.ds_custSaveDto.addRow();
        	 this.ds_custSaveDto.setColumn(nRow,"CO_CD",               this.ds_master.getColumn(this.ds_master.rowposition,"CO_CD"));
        	 this.ds_custSaveDto.setColumn(nRow,"NEW_PRD_REQ_NO",      this.ds_master.getColumn(this.ds_master.rowposition,"NEW_PRD_REQ_NO"));
        	 this.ds_custSaveDto.setColumn(nRow,"RND_REQ_PRD_ID",      this.ds_master.getColumn(this.ds_master.rowposition,"RND_REQ_PRD_ID"));
        	 this.ds_custSaveDto.setColumn(nRow,"MALL_SPR_CD",         "20");
        	 this.ds_custSaveDto.setColumn(nRow,"NEW_PRD_REQ_STATS_CD","56"); // 중복상품처리 : 56

        	 // SSP-2623 | 공용전용구분코드, 사업장ID, 운영단위ID 추가
        	 this.ds_custSaveDto.setColumn(nRow,"PUB_ONLY_SPR_CD",     this.ds_master.getColumn(this.ds_master.rowposition,"PUB_ONLY_SPR_CD"));
        	 this.ds_custSaveDto.setColumn(nRow,"BZPLC_ID",            this.ds_cprtcpReqInfoInq.getColumn(this.ds_cprtcpReqInfoInq.rowposition,"BZPLC_ID"));
        	 this.ds_custSaveDto.setColumn(nRow,"OPR_UNIT_ID",         this.ds_cprtcpReqInfoInq.getColumn(this.ds_cprtcpReqInfoInq.rowposition,"OPR_UNIT_ID"));

        	// 대체상품제안인 경우 아래 값 Set
        	if (this.ds_lmtOldCur.getColumn(0,"LMT_OLD_CUR") == 0) {
        		this.ds_custSaveDto.setColumn(nRow,"PRD_PRPS_SPR_CD",     "10");
        		this.ds_custSaveDto.setColumn(nRow,"PRD_PRPS_STATS_CD",   "10");
        		this.ds_custSaveDto.setColumn(nRow,"ALT_PRPS_RSN",        this.edt_altPrpsRsn.value);
        		this.ds_custSaveDto.setColumn(nRow,"NEW_PRD_REQ_STATS_CD","30"); // 대표상품제안 : 30
        	}

        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_SavePrpsDupPro = function()
        {
            if(!this.fn_PrePrpsDupPro())
            {
                return false;
            }

            var strSvc      = "SavePrpsDupPro";
            var strUrl      = "/rd/new-prd-req-lst/save-cust-req-proc.do";
            var strInDs     = "ds_master=ds_custSaveDto:u";
        	var strOutDs    = "ds_res=ds_output";
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
        this.fn_PostPrpsDupPro = function() {
        	if (this.ds_res.getColumn(0, "SUCCESS") == "Y") {
        		this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다

        		// 이미지 & 첨부파일 저장전 상태 0인것 체크
        		this.fn_saveMultiFileDelUpdate("SAVE");
        	} else {
        		alert(this.ds_res.getColumn(0, "MESSAGE"));	// 중복처리 안내

        		// 팝업창 닫기전 이미지 & 첨부파일 가비지 데이터 삭제
        		this.fn_saveMultiFileDelUpdate("SAVE");
        	}
        };

        /**********************************************************************
                 09. 초기화
        ***********************************************************************/
        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_exit  : this.btn_exit
        						  , btn_close : this.btn_close

        	                      };
        	var btnVisibleFalse = {
        							btn_save  : this.btn_save
        						  , btn_save2 : this.btn_save2
        						  , btn_rjct  : this.btn_rjct
        	                      };
        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        };
        // /**********************************************************************
        //         14. 기타 Control Event
        // ***********************************************************************/
        // 팝업 콜백
        this.fn_popupCallback = function(svcID, strVal)
        {
            switch(svcID)
        	{
        		// 중복상품처리 팝업 후 처리
        		case "btn_prdUniInq" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_prdUniInq.set_value(jsonData.PRD_ID_VIEW);
        					this.ds_search.setColumn(0,"RND_REQ_PRD_ID",jsonData.PRD_ID_VIEW);
        					// 이미지 & 첨부파일 저장전 상태 0인것 체크
        					this.fn_saveMultiFileDelUpdate();
        					this.ds_gridFilelist.clearData();
        					this.lv_prdIdYn = "Y";
        					this.fn_Ret();
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 카테고리 추천&조회 팝업 후처리
        		case "btn_catgRcmdInq" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        					this.edt_prdClsfNm.set_value(jsonData.PRD_CLSF_NM);
        					this.fn_CatgAttrInfo();
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// R&D카테고리 조회 팝업 후처리
        		case "btn_prdClPop" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        					this.edt_prdClsfNm.set_value(jsonData.PRD_CLSF_NM);
        					this.fn_CatgAttrInfo();
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			 break;
        		// 제조원 조회팝업 후처리
        		case "btn_mnfrNo" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_mnfrNo.set_value(jsonData.MNFR_NO);
        					this.edt_mnfrNm.set_value(jsonData.MNFR_NM);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 원산지 조회팝업 후처리
        		case "btn_ctrySprCd" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_ctrySprCd.set_value(jsonData.CTRY_SPR_CD);
        					this.edt_ctryNm.set_value(jsonData.CTRY_NM);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        				break;
        		// 기본주문단위 조회팝업 후처리
        		case "btn_unitCd" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_basisUnitCd.set_value(jsonData.UNIT_CD);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 판매주문단위 조회팝업 후처리
        		case "btn_sellUnitCd" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_sellUnitCd.set_value(jsonData.UNIT_CD);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 상품고시 조회 팝업 후처리
        		case "btn_notiItmId" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.tabMain.tabSub03.form.edt_notiItmId.set_value(jsonData.NOTI_ITM_ID);
        					this.tabMain.tabSub03.form.edt_notiItmIdNm.set_value("("+jsonData.NOTI_ITM_ID + ") " + jsonData.NOTI_ITM_NM);
        					this.fn_PrdNotiPrdInq();
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// API협력업체 조회팝업 후처리
        		case "btn_cprtcpId" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(JSON.parse(strVal))

        					this.edt_cprtcpId.set_value(jsonData.COM_DTL_CD);
        					this.edt_cprtcpNm.set_value(jsonData.COM_DTL_CD_NM);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		case "SSP_BO_RD_21" :
        				// 반려처리
        				if(!this.gfn_isNull(strVal))
        				{
        					//일반
        					var sRtn = strVal.split(",");

        					if(sRtn[0] == "CLOSE")
        					{
        						//trace(sRtn[0]);

        					} else if(sRtn[0] == "EXIT")
        					{

        					} else if(sRtn[0] == "SAVE")
        					{
        						 // 이미지 & 첨부파일 저장전 상태 0인것 체크
        						 this.fn_saveMultiFileDelUpdate("SAVE");
        					}
        				}
        			break;
        		case "SSP_BO_RD_64" :
        				// SSP이관처리
        				if(!this.gfn_isNull(strVal))
        				{
        					//일반
        					var sRtn = strVal.split(",");

        					if(sRtn[0] == "CLOSE")
        					{

        					} else if(sRtn[0] == "EXIT")
        					{

        					} else if(sRtn[0] == "SAVE")
        					{
        						 // 이미지 & 첨부파일 저장전 상태 0인것 체크
        						 this.fn_saveMultiFileDelUpdate("SAVE");
        					}
        				}
        			break;
        		default : break;
        	}
        }

        /**
         * 중복상품처리 상품ID 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_prdUniInq_onclick = function(obj,e)
        {
        	var params  = { prdId     : this.edt_prdUniInq.value
        				  , coCd      : this.lv_coCd
        				  , mallSprCd : "20"
        				  };

            var options = { title : "상품ID 단일조회" };

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_38.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 카테고리 추천&조회 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_catgRcmdInq_onclick = function(obj,e)
        {
        	var params  = { mnfrNo    : this.edt_mnfrNo.value
        	              , mnfrNm    : this.edt_mnfrNm.value
        				  , prdNm     : this.edt_reqPrdNm.value
        				  , coCd      : this.lv_coCd
        				  , mallSprCd : "20" };

            var options = { title : "카테고리 추천&조회" };

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_49.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 제조원 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.edt_mnfrNo_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
        	{
        		this.edt_mnfrNm.set_value("");
        	}
        };

        /**
         * 조회조건 제조원 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.edt_mnfrNo_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_mnfrNo.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup2(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup2 = function(sCodeId)
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
        		this.edt_mnfrNo.set_value(this.ds_popupList.getColumn(0,"MNFR_NO"));
        		this.edt_mnfrNm.set_value(this.ds_popupList.getColumn(0,"MNFR_NM"));
        	}
        	else
        	{
        		var params  = { mnfrNo : sCodeId, coCd : this.lv_coCd };
        		var options = { title  : "제조원" };

        		this.gfn_openPopup("btn_mnfrNo", "PR_POP::SSP_BO_PP_08.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 제조원 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_mnfrNo_onclick = function(obj,e)
        {
        	var params  = { mnfrNo : this.edt_mnfrNo.value
        	              , mnfrNm : this.edt_mnfrNm.value
        				  , coCd   : this.lv_coCd };

            var options = { title : "제조원" };

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_08.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 원산지 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.edt_ctrySprCd_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
        	{
        		this.edt_ctryNm.set_value("");
        	}
        };

        /**
         * 원산지 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.edt_ctrySprCd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_ctrySprCd.value);

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
        		this.ds_input.setColumn(nRow,"CTRY_SPR_CD",sCodeId);
        		this.ds_input.setColumn(nRow,"START_NUM", "0");
        		this.ds_input.setColumn(nRow,"ROW_COUNT", 1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-ctry-popup-list.do";
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
        		this.edt_ctrySprCd.set_value(this.ds_popupList.getColumn(0,"CTRY_SPR_CD"));
        		this.edt_ctryNm.set_value(this.ds_popupList.getColumn(0,"CTRY_NM"));
        	}
        	else
        	{
        		var params  = { ctrySprCd : sCodeId
        					  , coCd      : this.lv_coCd };

        		var options = { title : "원산지" };

        		this.gfn_openPopup("btn_ctrySprCd", "PR_POP::SSP_BO_PP_09.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 원산지 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_ctrySprCd_onclick = function(obj,e)
        {
        	var params  = { ctrySprCd : this.edt_ctrySprCd.value
        	              , ctryNm    : this.edt_ctryNm.value
        				  , coCd      : this.lv_coCd };

            var options = { title : "원산지" };

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_09.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 기본주문단위 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_unitCd_onclick = function(obj,e)
        {
        	var params  = { unitCd : this.edt_basisUnitCd.value
        				  , coCd   : this.lv_coCd };

            var options = { title : "기본 주문단위 조회" };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_12.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 판매주문단위 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_sellUnitCd_onclick = function(obj,e)
        {
        	var params  = { unitCd : this.edt_sellUnitCd.value
        				  , coCd   : this.lv_coCd };

            var options = { title : "판매 주문단위 조회" };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_12.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 배지 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.cbo_sbiDocRegId_onitemchanged = function(obj,e)
        {
        	var nRow     = this.ds_bgList.findRow("BG_SEQ",e.postvalue);
        	var imageUrl = "";

        	this.cal_bgAplyStrDtm.set_readonly(true);	// 배지 적용시작일자 비활성화
        	this.cal_bgAplyEndDtm.set_readonly(true);	// 배지 적용종료일자 비활성화
        	this.chk_lmt.set_enable(false);				// 배지 제한없음 체크박스 비활성화

        	if(nRow > 0)
        	{
        		var filePath 	= this.ds_bgList.getColumn(nRow,"ATFL_STOR_PATH");
        		var fileOrgName = this.ds_bgList.getColumn(nRow,"ATFL_NM");
        		var fileName    = this.ds_bgList.getColumn(nRow,"ORI_ATFL_NM");

        		imageUrl = this.fn_imageViewerUrl(filePath,fileOrgName,fileName);

        		this.cal_bgAplyStrDtm.set_value(this.lvGetDate);	// 배지 적용시작일자 오늘 날짜 기본 Set
        		this.cal_bgAplyStrDtm.set_readonly(false);			// 배지 적용시작일자 활성화

        		var date 	= new Date();
        	    var iYear 	= parseInt(this.lvGetDate.substr(0, 4));
                var iMonth 	= parseInt(this.lvGetDate.substr(4, 2) - 1);
                var iDate 	= parseInt(this.lvGetDate.substr(6, 2)-(1*-1));
                date.setFullYear(iYear,iMonth,iDate);

        		this.cal_bgAplyEndDtm.set_value(date);	            // 배지 적용종료일자 오늘 날짜 기본 Set
        		this.cal_bgAplyEndDtm.set_readonly(false);			// 배지 적용종료일자 활성화
        		this.chk_lmt.set_value(false);						// 배지 제한없음 체크박스 값 초기화
        		this.chk_lmt.set_enable(true);						// 배지 제한없음 체크박스 활성화
        	}

        	this.ImageViewer.set_image(imageUrl);
        };

        /**
         * 배지 [제한없음] 체크박스 값 변경시 onchanged 이벤트 발생 처리
         */
        this.chk_lmt_onchanged = function(obj,e)
        {
        	this.cal_bgAplyStrDtm.set_enable(true);	// 배지 적용시작일자 활성화
        	this.cal_bgAplyEndDtm.set_enable(true);	// 배지 적용종료일자 활성화

        	if(e.postvalue)
        	{
        		this.cal_bgAplyStrDtm.set_value(this.lvGetDate);	// 배지 적용시작일자 오늘 날짜 기본 Set
        		this.cal_bgAplyStrDtm.set_enable(false);			// 배지 적용시작일자 비활성화
        		this.cal_bgAplyEndDtm.set_value("99991231");		// 배지 적용종료일자 99991231 기본 Set
        		this.cal_bgAplyEndDtm.set_enable(false);			// 배지 적용종료일자 비활성화
        	}
        };

        /**
         * 상품고시정보 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.tabMain_tabSub03_btn_notiItmId_onclick = function(obj,e)
        {
        	var params  = { notiItmId : this.tabMain.tabSub03.form.edt_notiItmId.value
        				  , notiItmNm : ""
        				  , coCd      : this.lv_coCd};

            var options = { title : this.tabMain.tabSub03.form.stc_notiItmId.text };

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_47.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 상단 협력사 파일첨부 더블 클릭시 oncelldblclick 이벤트 발생 처리
         */
        this.grd_fileList_oncelldblclick = function(obj,e)
        {
        	var strUrl = nexacro.getApplication().gds_sspHosts.getColumn(0,"HOST_SSP")
        			   + "/co/file-download.do?"
        		       + "docRegId="   + this.ds_gridFilelist.getColumn(e.row,"DOC_REG_ID")
        		       + "&docRegSeq=" + this.ds_gridFilelist.getColumn(e.row,"DOC_REG_SEQ");

            this.web_download.set_url(strUrl);

        };

        /**
         * 상단 협력사 이미지 파일 더블 클릭시 oncelldblclick 이벤트 발생 처리
         */
        this.grd_imageList_oncelldblclick = function(obj,e)
        {
        	if(this.gfn_nvl(this.ds_imageList.getColumn(e.row,"ATFL_NM_"+(e.cell+1)),"") != "")
        	{
        		var strUrl = nexacro.getApplication().gds_sspHosts.getColumn(0,"HOST_SSP")
        				   + "/co/file-download.do?"
        			       + "docRegId="   + this.ds_imageList.getColumn(e.row,"DOC_REG_ID_"+(e.cell+1))
        			       + "&docRegSeq=" + this.ds_imageList.getColumn(e.row,"DOC_REG_SEQ_"+(e.cell+1));

                this.web_download.set_url(strUrl);
        	}
        };

        /**
         * 이미지취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_clear_onclick = function(obj,e)
        {
        	var fileList       = ["","60","61","62","63","80"];
        	this.imageViewerId = this.tabMain.tabSub01.form["ImageViewer"+obj.name.substr(obj.name.length-1,obj.name.length)];
        	this.fileIndex     = fileList[obj.name.substr(obj.name.length-1,obj.name.length)];

            var result = this.fn_confirm( "ERRR000132", "이미지 삭제","", "question" ); // 등록된 이미지를 삭제하시겠습니까?

            if(result == 1)
            {
                var delRow = this.ds_saveFileList.findRow("ETC_FDS_2",this.fileIndex);
        		this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        		this.imageViewerId.set_image("");
            }
        };

        /**
         * 이미지등록 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.tabMain_tabSub01_btn_image_onclick = function(obj,e)
        {
        	var fileList       = ["","60","61","62","63","80"];
        	this.imageViewerId = this.tabMain.tabSub01.form["ImageViewer"+obj.name.substr(obj.name.length-1,obj.name.length)];
        	this.fileIndex     = fileList[obj.name.substr(obj.name.length-1,obj.name.length)];
        	this.imageFileYn   = true;

        	this.tabMain.tabSub01.form.FileUploadSingle.deleteItem(0);
        	this.tabMain.tabSub01.form.FileUploadSingle.appendItem();
        	this.tabMain.tabSub01.form.FileUploadSingle.filefindbuttons[0].click();
        };

        /**
         * 이미지등록 아이템 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.tabMain_tabSub01_FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.tabMain.tabSub01.form.FileUploadSingle.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]

        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        	if(this.imageFileYn)
        	{
        		if(!(sCompValue.toUpperCase() == "PNG" || sCompValue.toUpperCase() == "JPG"
        		  || sCompValue.toUpperCase() == "GIF" || sCompValue.toUpperCase() == "JPEG"))
        		{
        			this.fn_alert("ERRR000173","파일 정보","파일","information");  // 파일형식이 아닙니다.
        			return false;
        		}
        	}
        	else
        	{
        		if(!(sCompValue.toUpperCase() == "PPTX" || sCompValue.toUpperCase() == "PPT"
        		  || sCompValue.toUpperCase() == "DOCX" || sCompValue.toUpperCase() == "DOC"
        		  || sCompValue.toUpperCase() == "XLS"  || sCompValue.toUpperCase() == "XLSX"
        		  || sCompValue.toUpperCase() == "TEXT" || sCompValue.toUpperCase() == "ZIP"
        		  || sCompValue.toUpperCase() == "TXT"  || sCompValue.toUpperCase() == "PDF"
        		  || sCompValue.toUpperCase() == "PNG"  || sCompValue.toUpperCase() == "JPG"
        		  || sCompValue.toUpperCase() == "GIF"  || sCompValue.toUpperCase() == "JPEG"
        		  || sCompValue.toUpperCase() == "HWP"))
        		{
        			this.fn_alert("ERRR000173","파일 정보","파일","information");  // 파일형식이 아닙니다.
        			return false;
        		}
        	}

        	var sFilePath = this.tabMain.tabSub01.form.FileUploadSingle.value;  // 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_master.getColumn(0,"PPI_DOC_REG_ID"),"");
        		docRegId  = docRegId != "" ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0,"DOC_REG_ID"),"");

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=" + this.fileIndex;

        	var bSucc = this.tabMain.tabSub01.form.FileUploadSingle.upload(strUrl); 		 // 파일 업로드
        };

        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.tabMain_tabSub01_FileUploadSingle_onsuccess = function(obj,e)
        {
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_saveFileList.findRow("ETC_FDS_2",this.fileIndex);
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        	// 최초 파일 등록시 상품문서등록ID Set
        	if(this.gfn_nvl(this.ds_master.getColumn(0,"PPI_DOC_REG_ID"),"") == "")
        	{
        		this.ds_master.setColumn(0,"PPI_DOC_REG_ID",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        	}

        	if(this.imageFileYn)
        	{
        		this.fn_setFileImageUpload(this.ds_uploadResult,this.ds_downLoad,this.imageViewerId);
        	}
        	else
        	{
        		this.imageViewerId.set_value(this.ds_saveFileList.getColumn(nRow,"ATFL_NM"));
        		this.tabMain_tabSub01_edt_fileName_onchanged(this.imageViewerId,new nexacro.ChangeEventInfo());
        	}
        };

        this.FileUploadSingle_onerror = function(obj,e)
        {
        	var msg = ">>>>>>>>> 파일 업로드 에러 발생 >>>>>>>>\n";
        	msg += "error type : " + e.errortype + "\n";
        	msg += "error message : " + e.errormsg + "\n";
        	msg += "status code : " + e.statuscode;

        	this.nRow = -1;

        	this.alert(msg);
        };

        /**
         * 파일 첨부파일 업로드 버튼 클릭시 이벤트 발생 처리
         */
        this.tabMain_tabSub01_btn_file_onclick = function(obj,e)
        {
        	var fileList       = ["","9A","9B","9C","9D","9E","9F","9G"];
        	this.imageViewerId = this.tabMain.tabSub01.form["edt_fileName"+obj.name.substr(obj.name.length-1,obj.name.length)];
        	this.fileIndex     = fileList[obj.name.substr(obj.name.length-1,obj.name.length)];
        	this.imageFileYn   = false;

        	if(obj.text == "파일 등록")
        	{
        		this.tabMain.tabSub01.form.FileUploadSingle.deleteItem(0);
        		this.tabMain.tabSub01.form.FileUploadSingle.appendItem();
        		this.tabMain.tabSub01.form.FileUploadSingle.filefindbuttons[0].click();
        	}
        	else
        	{
        		var result = this.fn_confirm( "ERRR000134", "파일 삭제","", "question" ); // 등록된 파일을 삭제하시겠습니까?

        		if(result == 1)
        		{
        			var delRow = this.ds_saveFileList.findRow("ETC_FDS_2",this.fileIndex);
        			this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        			this.imageViewerId.set_value("");
        			this.tabMain_tabSub01_edt_fileName_onchanged(this.imageViewerId,new nexacro.ChangeEventInfo());
        		}
        	}
        };

        /**
         * 첨부파일 다운로드 클릭시 oneditclick  이벤트 발생 처리
         */
        this.tabMain_tabSub01_edt_fileName_oneditclick = function(obj,e)
        {
        	var fileList       = ["","9A","9B","9C","9D","9E","9F","9G"];
        	this.imageViewerId = this.tabMain.tabSub01.form["edt_fileName"+obj.name.substr(obj.name.length-1,obj.name.length)];
        	this.fileIndex     = fileList[obj.name.substr(obj.name.length-1,obj.name.length)];
        	var findRow        = this.ds_saveFileList.findRow("ETC_FDS_2",this.fileIndex);

        	if(this.gfn_nvl(this.imageViewerId.value,"") != "")
        	{
        		this.ds_uploadResult.clearData();
        		var nRow = this.ds_uploadResult.addRow();
        		this.ds_uploadResult.copyRow(nRow,this.ds_saveFileList,findRow);

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.tabMain.tabSub01.form.FileDownload);
        	}
        };

        /**
         * 파일 첨부파일 변경시 onchanged 이벤트 발생 처리
         */
        this.tabMain_tabSub01_edt_fileName_onchanged = function(obj,e)
        {
        	this.tabMain.tabSub01.form["btn_file"+obj.name.substr(obj.name.length-1,obj.name.length)].set_text("파일 등록");
        	obj.set_cursor("");

        	if(obj.value != "")
        	{
        		obj.set_cursor("pointer");
        		this.tabMain.tabSub01.form["btn_file"+obj.name.substr(obj.name.length-1,obj.name.length)].set_text("삭제");
        	}
        };

        /**
         * 에디터 뷰어 웹페이지 활성화 후 onloadcompleted 이벤트 발생 처리
         */
        this.webEditor_onloadcompleted = function(obj,e)
        {
        	this.webEdit = this.tabMain.tabSub01.form.wbs_prdDetail.getProperty("document").getProperty("all");

        	this.fn_formInit();
        };

        /**
         * 카테고리속성 속성값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_catgRcmdInq_oncolumnchanged = function(obj,e)
        {
        	var textLen = "";
        	this.edt_newPrdReqPrvlList.set_value("");

        	for(var idx=0; idx<obj.getRowCount(); idx++)
        	{
        		var val = obj.getColumn(idx,"NEW_PRD_REQ_PRVL");

        		if(this.gfn_nvl(val,"") != "")
        		{
        			if(textLen != "")
        			{
        				textLen += ";";
        			}
        			textLen += val;
        		}
        	}

        	this.edt_newPrdReqPrvlList.set_value(textLen);
        };

        /**
         * 닫기 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_close_onclick = function(obj,e)
        {
        	 this.fn_saveMultiFileDelUpdate("CLOSE");
        };

        /**
         * 취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_exit_onclick = function(obj,e)
        {
        	this.fn_saveMultiFileDelUpdate("EXIT");
        };

        /*
         * 로드스 뷰로 만들어지는 로직
         */
        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_exit  : this.btn_exit
        						  , btn_close : this.btn_close
        	                      };
        	var btnVisibleFalse = {
        							btn_save  : this.btn_save
        						  , btn_save2 : this.btn_save2
        						  , btn_rjct  : this.btn_rjct
        	                      };
        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        };
        /**********************************************************************
        	06. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	// ERRR000076 : 등록을 취소하고 목록으로 이동하시겠습니까?
        	// ERRC000087 : 취소하시겠습니까?
        	var strMsg = this.sOptinoArg2 == "N" ? "ERRR000076" : "ERRC000087";
        	var result = this.fn_confirm(strMsg, "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("CLOSE");
        };

        this.btn_exit_onclick = function(obj,e)
        {
        	// ERRR000076 : 등록을 취소하고 목록으로 이동하시겠습니까?
        	// ERRC000087 : 취소하시겠습니까?
        	var strMsg = this.sOptinoArg2 == "N" ? "ERRR000076" : "ERRC000087";
        	var result = this.fn_confirm(strMsg, "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("EXIT");
        };

        /*
         * 고객신청서 반려
         */
        this.btn_rjct_onclick = function(obj,e)
        {
        	var lv_sFlag01 		= "N";						                                    // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02		= "N";						                                    // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 	= this.ds_master.getColumn(0,"NEW_PRD_REQ_NO");	                // 부모에서 넘어가는 파라미터(신규상품 요청번호)
        	var lv_sValue02 	= this.lv_coCd;                                                 // 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03 	= "20";  	                                                    // 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04 	= "10";  	                                                    // 요청주체코드[10:고객,20:자사,30:협력사]
        	var lv_sValue05 	= this.ds_master.getColumn(0,"NEW_PRD_REQ_STATS_CD");           // 부모에서 넘어가는 파라미터(신규상품 처리 상태코드)

        	var sPopId 			= "SSP_BO_RD_21";
        	var sUrl 			= "RD::SSP_BO_RD_21.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03       // 파라미터3
        						  , pv_sVal04:lv_sValue04       // 파라미터4
        						  , pv_sVal05:lv_sValue05};     // 파라미터5
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);

        };
        /*
         * 고객요청재이관사유등록
         */
        this.btn_sspSend_onclick = function(obj,e)
        {
        	var lv_sFlag01 		= "N";						                // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02		= "N";						                // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 	= this.ds_master.getColumn(0,"NEW_PRD_REQ_NO");	                        // 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02 	= this.lv_coCd;                 // 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03 	= "10";  	                        // 부모에서 넘어가는 파라미터(폼이름)

        	var sPopId 			= "SSP_BO_RD_64";
        	var sUrl 			= "RD::SSP_BO_RD_64.xfdl";
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
         * 제한구현 라디오 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.rdo_lmtOldCur_onitemchanged = function(obj,e)
        {
        	this.btn_prpsDupProc.set_enable(true);

        	// 대체상품제안인 경우
        	if(e.postvalue == 0)
        	{
        		this.edt_altPrpsRsn.set_readonly(false);
        		this.stc_altPrpsRsn.set_text("대체제안사유 <fc v='red'><b v='true'>* </b></fc>");
        	}
        	else
        	{
        		this.edt_altPrpsRsn.set_readonly(true);
        		this.stc_altPrpsRsn.set_text("대체제안사유");
        	}
        };


        /**
         * 국가코드 or 제조원코드 정합성 체크
         */
        this.fn_codeChkYn = function()
        {
        	// 국가코드 & 제조원 정합성 체크
        	var strSvc      = "CodeYn";
            var strUrl      = "/rd/new-prd-req-lst/select-cd-chk-yn-inq.do";
            var strInDs     = "";
            var strOutDs    = "";
            var strArg      = "CO_CD="           + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"CO_CD"))
        	                + " ORGPLC_CTRY_CD=" + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"ORGPLC_CTRY_CD"))
        					+ " MNFR_NO="        + nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"MNFR_NO"));
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        	// 제조원코드 정합성 불일치시
        	if(this.lv_mnfrNoYn == "N")
        	{
        		this.fn_alert("ERRR000174","저장정보","제조원 코드","question"); // 존재하지 않는 &1 입니다.
        		this.edt_mnfrNo.setFocus();
        		return false;
        	}
        	// 국가코드 정합성 불일치시
        	if(this.lv_ctryCdYn == "N")
        	{
        		this.fn_alert("ERRR000174","저장정보","원산지 코드","question"); // 존재하지 않는 &1 입니다.
        		this.edt_ctrySprCd.setFocus();
        		return false;
        	}

        	return true;
        };

        /**
         * R&D카테고리 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_prdClPop_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_prdClcd.value);
        	this.fn_setCallPopup3(sCodeId);
        };

        /**
         * R&D카테고리 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.edt_prdClcd_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
        	{
        		this.edt_prdClsfNm.set_value("");
        	}
        };

        /**
         * R&D카테고리 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.edt_prdClcd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_prdClcd.value);

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
        		this.ds_input.setColumn(nRow,"PRD_CLCD",  sCodeId);
        		this.ds_input.setColumn(nRow,"START_NUM", "0");
        		this.ds_input.setColumn(nRow,"ROW_COUNT", 1000);

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
        		this.edt_prdClcd.set_value(this.ds_popupList.getColumn(0,"PRD_CLCD"));
        		this.edt_prdClsfNm.set_value(this.ds_popupList.getColumn(0,"PRD_CLSF_NM"));
        		this.fn_CatgAttrInfo();
        	}
        	else
        	{
        		var params  = { coCd      : this.lv_coCd
        				      , mallSprCd : "20"
        				      , prdClcd   : sCodeId
        				      , prdClsfNm : this.ds_master.getColumn(0,"PRD_CLCD_NM")
        					  }

        		var options = { title : "카테고리" };

        		this.gfn_openPopup("btn_prdClPop", "PR_POP::SSP_BO_PP_10.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * R&D카테고리 값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_master_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "PRD_CLCD")
        	{
        		if(!this.gfn_isNull(e.newvalue))
        		{
        			obj.set_enableevent(false);
        			this.fn_setCallPopup3(e.newvalue);
        			obj.set_enableevent(true);
        		}
        	}
        	else if(e.columnid == "BASIS_UNIT_QTY")
        	{
        		this.btn_sellUnitCd.set_enable(false);
        		if(e.newvalue > 1)
        		{
        			this.btn_sellUnitCd.set_enable(true);
        		}
        		else
        		{
        			this.edt_sellUnitCd.set_value("");
        		}
        	}
        };


        /**
         * API 연동업체 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.edt_cprtcpId_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
        	{
        		this.edt_cprtcpNm.set_value("");
        	}
        };

        /**
         * API 연동업체 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.edt_cprtcpId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_cprtcpId.value);

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
         * API 연동업체 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_cprtcpId_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_cprtcpId.value);
        	this.fn_setCallPopup4(sCodeId);
        };

        /**
         * API 연동업체 팝업오픈 함수
         */
        this.fn_setCallPopup4 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();
        	var xComClsfCd = "API_CPRTCP_ID";

        	var params  = { comClsfCd : xComClsfCd, comCdDtl : sCodeId, coCd : this.lv_coCd };
        	var options = { title  : "API연동업체" };
        	this.gfn_openPopup("btn_cprtcpId", "CO_POP::SSP_BO_PP_45.xfdl", params, "fn_popupCallback", options);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.edt_prdClcd.addEventHandler("oninput",this.edt_prdClcd_oninput,this);
            this.edt_prdClcd.addEventHandler("onkeyup",this.edt_prdClcd_onkeyup,this);
            this.cbo_sbiDocRegId.addEventHandler("onitemchanged",this.cbo_sbiDocRegId_onitemchanged,this);
            this.chk_lmt.addEventHandler("onchanged",this.chk_lmt_onchanged,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_imageList.addEventHandler("oncelldblclick",this.grd_imageList_oncelldblclick,this);
            this.rdo_lmtOldCur.addEventHandler("onitemchanged",this.rdo_lmtOldCur_onitemchanged,this);
            this.btn_prdUniInq.addEventHandler("onclick",this.btn_prdUniInq_onclick,this);
            this.btn_prpsDupProc.addEventHandler("onclick",this.btn_prpsDupProc_onclick,this);
            this.edt_reqPrdNm.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_reqPrdNm.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.btn_catgRcmdInq.addEventHandler("onclick",this.btn_catgRcmdInq_onclick,this);
            this.edt_mnfrNo.addEventHandler("oninput",this.edt_mnfrNo_oninput,this);
            this.edt_mnfrNo.addEventHandler("onkeyup",this.edt_mnfrNo_onkeyup,this);
            this.btn_mnfrNo.addEventHandler("onclick",this.btn_mnfrNo_onclick,this);
            this.edt_basisUnitQty.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_basisUnitQty.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.btn_unitCd.addEventHandler("onclick",this.btn_unitCd_onclick,this);
            this.btn_sellUnitCd.addEventHandler("onclick",this.btn_sellUnitCd_onclick,this);
            this.edt_ctrySprCd.addEventHandler("oninput",this.edt_ctrySprCd_oninput,this);
            this.edt_ctrySprCd.addEventHandler("onkeyup",this.edt_ctrySprCd_onkeyup,this);
            this.btn_ctrySprCd.addEventHandler("onclick",this.btn_ctrySprCd_onclick,this);
            this.cbo_apiUseYn.addEventHandler("canitemchange",this.cbo_apiUseYn_itemchange,this);
            this.edt_cprtcpId.addEventHandler("oninput",this.edt_cprtcpId_oninput,this);
            this.edt_cprtcpId.addEventHandler("onkeyup",this.edt_cprtcpId_onkeyup,this);
            this.btn_cprtcpId.addEventHandler("onclick",this.btn_cprtcpId_onclick,this);
            this.tabMain.tabSub01.form.btn_image1.addEventHandler("onclick",this.tabMain_tabSub01_btn_image_onclick,this);
            this.tabMain.tabSub01.form.btn_image2.addEventHandler("onclick",this.tabMain_tabSub01_btn_image_onclick,this);
            this.tabMain.tabSub01.form.btn_image3.addEventHandler("onclick",this.tabMain_tabSub01_btn_image_onclick,this);
            this.tabMain.tabSub01.form.btn_image4.addEventHandler("onclick",this.tabMain_tabSub01_btn_image_onclick,this);
            this.tabMain.tabSub01.form.btn_image5.addEventHandler("onclick",this.tabMain_tabSub01_btn_image_onclick,this);
            this.tabMain.tabSub01.form.stcTitle01_00_00.addEventHandler("onclick",this.tabMain_tabSub01_stcTitle01_00_00_onclick,this);
            this.tabMain.tabSub01.form.edt_fileName1.addEventHandler("onchanged",this.tabMain_tabSub01_edt_fileName_onchanged,this);
            this.tabMain.tabSub01.form.edt_fileName1.addEventHandler("oneditclick",this.tabMain_tabSub01_edt_fileName_oneditclick,this);
            this.tabMain.tabSub01.form.edt_fileName2.addEventHandler("onchanged",this.tabMain_tabSub01_edt_fileName_onchanged,this);
            this.tabMain.tabSub01.form.edt_fileName2.addEventHandler("oneditclick",this.tabMain_tabSub01_edt_fileName_oneditclick,this);
            this.tabMain.tabSub01.form.edt_fileName5.addEventHandler("onchanged",this.tabMain_tabSub01_edt_fileName_onchanged,this);
            this.tabMain.tabSub01.form.edt_fileName5.addEventHandler("oneditclick",this.tabMain_tabSub01_edt_fileName_oneditclick,this);
            this.tabMain.tabSub01.form.edt_fileName6.addEventHandler("onchanged",this.tabMain_tabSub01_edt_fileName_onchanged,this);
            this.tabMain.tabSub01.form.edt_fileName6.addEventHandler("oneditclick",this.tabMain_tabSub01_edt_fileName_oneditclick,this);
            this.tabMain.tabSub01.form.edt_fileName3.addEventHandler("onchanged",this.tabMain_tabSub01_edt_fileName_onchanged,this);
            this.tabMain.tabSub01.form.edt_fileName3.addEventHandler("oneditclick",this.tabMain_tabSub01_edt_fileName_oneditclick,this);
            this.tabMain.tabSub01.form.edt_fileName4.addEventHandler("onchanged",this.tabMain_tabSub01_edt_fileName_onchanged,this);
            this.tabMain.tabSub01.form.edt_fileName4.addEventHandler("oneditclick",this.tabMain_tabSub01_edt_fileName_oneditclick,this);
            this.tabMain.tabSub01.form.btn_file1.addEventHandler("onclick",this.tabMain_tabSub01_btn_file_onclick,this);
            this.tabMain.tabSub01.form.edt_fileName7.addEventHandler("onchanged",this.tabMain_tabSub01_edt_fileName_onchanged,this);
            this.tabMain.tabSub01.form.edt_fileName7.addEventHandler("oneditclick",this.tabMain_tabSub01_edt_fileName_oneditclick,this);
            this.tabMain.tabSub01.form.btn_file2.addEventHandler("onclick",this.tabMain_tabSub01_btn_file_onclick,this);
            this.tabMain.tabSub01.form.btn_file3.addEventHandler("onclick",this.tabMain_tabSub01_btn_file_onclick,this);
            this.tabMain.tabSub01.form.btn_file4.addEventHandler("onclick",this.tabMain_tabSub01_btn_file_onclick,this);
            this.tabMain.tabSub01.form.btn_file5.addEventHandler("onclick",this.tabMain_tabSub01_btn_file_onclick,this);
            this.tabMain.tabSub01.form.btn_file6.addEventHandler("onclick",this.tabMain_tabSub01_btn_file_onclick,this);
            this.tabMain.tabSub01.form.btn_file7.addEventHandler("onclick",this.tabMain_tabSub01_btn_file_onclick,this);
            this.tabMain.tabSub01.form.wbs_prdDetail.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.tabMain.tabSub01.form.wbs_prdDetail.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.tabMain.tabSub01.form.wbs_prdDetail.addEventHandler("onsize",this.div_prdDetail_wbs_prdDetail_onsize,this);
            this.tabMain.tabSub01.form.btn_clear1.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.tabMain.tabSub01.form.btn_clear2.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.tabMain.tabSub01.form.btn_clear3.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.tabMain.tabSub01.form.btn_clear4.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.tabMain.tabSub01.form.btn_clear5.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.tabMain.tabSub01.form.FileUploadSingle.addEventHandler("onitemchanged",this.tabMain_tabSub01_FileUploadSingle_onitemchanged,this);
            this.tabMain.tabSub01.form.FileUploadSingle.addEventHandler("onsuccess",this.tabMain_tabSub01_FileUploadSingle_onsuccess,this);
            this.tabMain.tabSub01.form.FileUploadSingle.addEventHandler("onerror",this.FileUploadSingle_onerror,this);
            this.tabMain.tabSub01.form.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.tabMain.tabSub01.form.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.tabMain.tabSub02.form.stcTitle01_00_00.addEventHandler("onclick",this.tabMain_tabSub01_stcTitle01_00_00_onclick,this);
            this.tabMain.tabSub03.form.stc_notiItmId.addEventHandler("onclick",this.tabMain_tabSub01_stcTitle01_00_00_onclick,this);
            this.tabMain.tabSub03.form.btn_notiItmId.addEventHandler("onclick",this.tabMain_tabSub03_btn_notiItmId_onclick,this);
            this.btn_sspSend.addEventHandler("onclick",this.btn_sspSend_onclick,this);
            this.edt_regpsnNm.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_regpsnNm.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.edt_newPrdReqNo.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_newPrdReqNo.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.edt_newPrdReqStatsNm.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_newPrdReqStatsNm.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_rjct.addEventHandler("onclick",this.btn_rjct_onclick,this);
            this.grd_fileList.addEventHandler("oncelldblclick",this.grd_fileList_oncelldblclick,this);
            this.btn_prdClPop.addEventHandler("onclick",this.btn_prdClPop_onclick,this);
            this.btn_save2.addEventHandler("onclick",this.btn_save_onclick,this);
            this.ds_master.addEventHandler("oncolumnchanged",this.ds_master_oncolumnchanged,this);
            this.ds_catgRcmdInq.addEventHandler("oncolumnchanged",this.ds_catgRcmdInq_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_RD_25.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
