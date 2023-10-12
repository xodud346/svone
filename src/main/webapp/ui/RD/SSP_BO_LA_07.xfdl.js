(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_LA_06");
            this.set_titletext("전용상품 노출판매가 상세/등록");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dispStats", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubOnlySpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_txClcd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID_VIEW\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BSS_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"LWST_BUY_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"EXPT_PRFRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DTL_ORD\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"OLD_SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_SALSPRC_ATFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SALSPRC_DSGN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"RND_USCUST_DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_RND_USCUST_DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD3\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD4\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prcInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MRK_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"32\"/><Column id=\"DSTRB_STD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_CURR_BSS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHRT_APLY_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PLN_PRFRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SSP_BSS_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BSS_SALSPRC_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"STPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PURG_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"INTL_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALSPRC_CAL_BSS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_PCPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SALSPRC_CAL_BSS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"EXPS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_SALSPRC2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdBasisInfo", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_OPRTR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MD_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_STD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BG_APLY_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"REPR_PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REPR_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"TX_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BG_APLY_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"OLD_ATTR_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_GRAVITY\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"STPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"OLD_PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"32\"/><Column id=\"QCK_DLV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"32\"/><Column id=\"MULT_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NUSE_RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PHASE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_OPRTR_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HUB_HNL_DIS_TP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DISP_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REPR_PRD_GRP_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hubHnlDisTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cprtcpReqInfoInq", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_PRVL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID_VIEW\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"TRSF_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_SELL_UPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CUST_RJT_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PR_NEW_PRD_REQ_PROC_ATTR_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRPS_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TRSF_PSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HPE_BASIS_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"HPE_BASIS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CHM_MTL_YN\" type=\"STRING\" size=\"32\"/><Column id=\"HPE_SELL_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HPE_SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REQ_RSN\" type=\"STRING\" size=\"32\"/><Column id=\"ALT_PRPS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"TRSF_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRPS_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TRSF_PSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_PRPS_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_RSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_imageList", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ATFL_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH_1\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH_2\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH_3\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH_4\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH_5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATFL_NM_1\"/><Col id=\"ORI_ATFL_NM_1\"/><Col id=\"ATFL_STOR_PATH_1\"/><Col id=\"ATFL_NM_2\"/><Col id=\"ORI_ATFL_NM_2\"/><Col id=\"ATFL_STOR_PATH_2\"/><Col id=\"ATFL_NM_3\"/><Col id=\"ORI_ATFL_NM_3\"/><Col id=\"ATFL_STOR_PATH_3\"/><Col id=\"ATFL_NM_4\"/><Col id=\"ORI_ATFL_NM_4\"/><Col id=\"ATFL_STOR_PATH_4\"/><Col id=\"ATFL_NM_5\"/><Col id=\"ORI_ATFL_NM_5\"/><Col id=\"ATFL_STOR_PATH_5\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salsDsgnSalsprcHst", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CAL_STD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"CAL_STD\" type=\"STRING\" size=\"32\"/><Column id=\"LWST_BUY_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"EXPT_PRFRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_purcInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"VLD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INTG_CPRTCP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COND\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_PSB_AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo><ColumnInfo><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DATE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"INTG_CPRTCP_YN\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BG_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BG_IMG\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_catgRcmdInq", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRNM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","22",null,null,"0","-565",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("stc_main","19","26","164","16",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("전용상품 노출판매가 상세");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","778","22","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update","btn_clear:4","22","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("수정");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","btn_update:4","22","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02","0","50","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_form1","20","67","960","480",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","31",null,"32","0",null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","31","130","32",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("1");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.div_form1.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","136","35","103","23",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","243","35","216","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","93",null,"32","0",null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form1.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","136","97","323","23",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","155",null,"140","0",null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","0","294",null,"32","0",null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static03_00_02","0","325",null,"32","0",null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static26_02_06","313","294","130","32",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("9");
            obj.set_text("판매통화");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static26_02_07","628","294","130","32",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("10");
            obj.set_text("예상매익률");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form1.addChild(obj.name, obj);

            obj = new Button("btn_prdIdPopup","463","35","24","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_form1.addChild(obj.name, obj);

            obj = new CheckBox("chk_bssSalsprc","450","331","128","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("12");
            obj.set_text("기준판매가 적용");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static59","280","329","9","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("13");
            obj.set_text("~");
            this.div_form1.addChild(obj.name, obj);

            obj = new Calendar("cal_vldPerdDtStr","136","329","140","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Calendar("cal_vldPerdDtEnd","293","329","140","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","3","130","14",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("16");
            obj.set_text("■ 영업지정가격 정보");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","0","93","130","32",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("17");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("stc_oprUnitNm","0","155","130","140",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("18");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","294","130","32",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("19");
            obj.set_text("영업지정판매가");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","325","130","32",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("20");
            obj.set_text("영업지정판매가\r\n유효기간");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_form1.addChild(obj.name, obj);

            obj = new Grid("grid_oprUnitNm","136","161",null,"128","10",null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("21");
            obj.set_binddataset("ds_oprUnitInfo");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"110\"/><Column size=\"20\"/><Column size=\"50\"/><Column size=\"20\"/><Column size=\"50\"/><Column size=\"20\"/><Column size=\"50\"/><Column size=\"20\"/><Column size=\"50\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"운영단위\"/><Cell col=\"2\" colspan=\"8\" text=\"진열상태\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:DISP_STATS_CD1\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" subsumtext=\"1\"/><Cell col=\"3\" text=\"진열\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" textAlign=\"left\" subsumtext=\"1\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" border=\"1px solid #d4d4d4,00px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" text=\"bind:DISP_STATS_CD2\" subsumtext=\"2\"/><Cell col=\"5\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" text=\"미진열\" textAlign=\"left\" subsumtext=\"2\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" text=\"bind:DISP_STATS_CD3\" subsumtext=\"3\"/><Cell col=\"7\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" text=\"일시품절\" textAlign=\"left\" subsumtext=\"3\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" text=\"bind:DISP_STATS_CD4\" subsumtext=\"4\"/><Cell col=\"9\" text=\"단종\" textAlign=\"left\" subsumtext=\"4\"/></Band></Format></Formats>");
            this.div_form1.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","449","298","172","23",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_value("KRW");
            obj.set_autoselect("true");
            obj.set_text("KRW");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_01","0","20","100%","10",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("23");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static03_00_05_00","0","356",null,null,"0","-62",null,null,null,null,this.div_form1.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form1.addChild(obj.name, obj);

            obj = new Button("btn_extend","110","337","20","20",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_default");
            obj.set_text("∨");
            this.div_form1.addChild(obj.name, obj);

            obj = new Grid("grd_list","136","363","808",null,null,"-23",null,null,null,null,this.div_form1.form);
            obj.set_taborder("26");
            obj.set_binddataset("ds_salsDsgnSalsprcHst");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.getSetter("tFlag").set("false");
            obj.getSetter("uServerSortFlag").set("true");
            obj.getSetter("uSortCallback").set("fn_sortCallback");
            obj.getSetter("uCellSizeType").set("true");
            obj.set_selecttype("cell");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"적용기준\"/><Cell col=\"2\" text=\"판매가\"/><Cell col=\"3\" text=\"최저매입가\"/><Cell col=\"4\" text=\"예상매익률(%)\"/><Cell col=\"5\" text=\"유효기간(From)\"/><Cell col=\"6\" text=\"유효기간(To)\"/><Cell col=\"7\" text=\"변경담당자ID\"/><Cell col=\"8\" text=\"변경담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\" color=\"#000000\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:CAL_STD_NM\"/><Cell col=\"2\" text=\"bind:SALS_DSGN_SALSPRC\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:LWST_BUY_PRC\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:EXPT_PRFRT\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:SALS_DSGN_SALSPRC_STR_DTM\" calendareditformat=\"yyyy-MM-dd\" displaytype=\"normal\" maskeditclipmode=\"excludespace\" maskeditformat=\"####-##-## ##:##:##\" calendardateformat=\"yyyy-MM-dd ddd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:SALS_DSGN_SALSPRC_END_DTM\"/><Cell col=\"7\" text=\"bind:UPDPSN_ID\"/><Cell col=\"8\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("stc_salsprcDsgnRsn00","0","356","130",null,null,"-62",null,null,null,null,this.div_form1.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form1.addChild(obj.name, obj);

            obj = new MaskEdit("edt_salsDsgnSalsprc","136","298","174","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("28");
            obj.set_limitbymask("both");
            obj.set_format("!###,###,###,###,###,###.##");
            obj.set_clipmode("excludespace");
            obj.set_type("number");
            obj.set_displaynulltext("0");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","492","31","130","32",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("29");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_form1.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","626","35","103","23",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcdNm","733","35","216","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","492","93","130","32",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("32");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form1.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","626","97","103","23",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","733","97","216","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("stc_bzplcId00","0","124","130","32",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("35");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static03_00_03","0","124",null,"32","0",null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form1.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","136","128","103","23",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","243","128","126","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Button("btn_bzplcPopup","374","128","24","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("stc_odrUnit","492","124","130","32",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("40");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form1.addChild(obj.name, obj);

            obj = new Edit("edt_odrUnit","626","128","103","23",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("stc_bzplcId","0","124","130","32",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("42");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_form1.addChild(obj.name, obj);

            obj = new Button("btn_dispStatHst","5","260","120","28",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("43");
            obj.set_text("진열상태 이력");
            this.div_form1.addChild(obj.name, obj);

            obj = new MaskEdit("edt_exptPrfrt","763","298","164","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("44");
            obj.set_limitbymask("both");
            obj.set_format("#0.##");
            obj.set_clipmode("excludespace");
            obj.set_type("number");
            obj.set_displaynulltext("0");
            obj.set_readonly("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static00","930","298","23","22",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("45");
            obj.set_text("%");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("Static03_01","0","62",null,"32","0",null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form1.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","136","66","813","24",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form1.addChild(obj.name, obj);

            obj = new Static("stc_prdId00","0","62","130","32",null,null,null,null,null,null,this.div_form1.form);
            obj.set_taborder("48");
            obj.set_text("SSP상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form1.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_clear:4","22","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_form1_00","20","578","960","104",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_03","0","0",null,"32","0",null,null,null,null,null,this.div_form1_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form1_00.addChild(obj.name, obj);

            obj = new Static("Static03_00_04","0","31",null,"32","0",null,null,null,null,null,this.div_form1_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form1_00.addChild(obj.name, obj);

            obj = new Edit("edt_dispStatsChgrsn","136","4","600","24",null,null,null,null,null,null,this.div_form1_00.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_form1_00.addChild(obj.name, obj);

            obj = new Edit("edt_rndUscustDispStatsChgrsn","136","35","600","24",null,null,null,null,null,null,this.div_form1_00.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_form1_00.addChild(obj.name, obj);

            obj = new Static("stc_dispStatsChgrsn","0","0","130","32",null,null,null,null,null,null,this.div_form1_00.form);
            obj.set_taborder("4");
            obj.set_text("진열상태변경사유");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form1_00.addChild(obj.name, obj);

            obj = new Static("stc_rndUscustDispStatsChgrsn","0","31","130","32",null,null,null,null,null,null,this.div_form1_00.form);
            obj.set_taborder("5");
            obj.set_text("일시품절/단종사유");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form1_00.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","76","347","28",null,null,null,null,null,null,this.div_form1_00.form);
            obj.set_taborder("6");
            obj.set_text("*일시품절/단종사유는 고객에게 노출되니 신중히 작성 바랍니다.\r\n");
            obj.set_color("red");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.div_form1_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00","0","63","100.00%","10",null,null,null,null,null,null,this.div_form1_00.form);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_form1_00.addChild(obj.name, obj);

            obj = new Div("div_form2","20","682","960","563",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","0","100.00%","20",null,null,null,null,null,null,this.div_form2.form);
            obj.set_taborder("0");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.div_form2.addChild(obj.name, obj);

            obj = new Tab("tabMain","0","20",null,"540","0",null,null,null,null,null,this.div_form2.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.div_form2.addChild(obj.name, obj);

            obj = new Tabpage("tabSub01",this.div_form2.form.tabMain);
            obj.set_text("구매정보");
            this.div_form2.form.tabMain.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","149","69","14",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("0");
            obj.set_text("■ 구매 정보");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Div("div_paging","0","252",null,"36","160",null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stc_ltsRenDtm","90","141","232","30",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("2");
            obj.set_text("최근 갱신일시 : 2021.08.25 14:20");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","175",null,"156","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_purcInfo");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"101\"/><Column size=\"48\"/><Column size=\"103\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"협력사ID\"/><Cell col=\"1\" text=\"협력사명\"/><Cell col=\"2\" text=\"매입가\"/><Cell col=\"3\" text=\"공급가능&#13;&#10;여부\"/><Cell col=\"4\" text=\"가격유효기간(From)\"/><Cell col=\"5\" text=\"가격유효기간(To)\"/><Cell col=\"6\" text=\"최소주문수량\"/><Cell col=\"7\" text=\"Condition\"/><Cell col=\"8\" text=\"배송가능지역\"/></Band><Band id=\"body\"><Cell text=\"bind:CPRTCP_ID_VIEW\"/><Cell col=\"1\" text=\"bind:CPRTCP_KOR_NM\" maskeditclipmode=\"excludespace\"/><Cell col=\"2\" text=\"bind:PRD_PRC\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:SPL_PSB_YN_NM\"/><Cell col=\"4\" text=\"bind:VLD_STR_DT\" displaytype=\"date\" maskeditclipmode=\"excludespace\" maskeditformat=\"####.##.##\" calendardateformat=\"yyyy.MM.dd\"/><Cell col=\"5\" text=\"bind:VLD_END_DT\" maskeditformat=\"####.##.##\" displaytype=\"date\" calendardateformat=\"yyyy.MM.dd\"/><Cell col=\"6\" text=\"bind:MIN_ODR_QTY\"/><Cell col=\"7\" expr=\"&quot;theme::default/images/btn_WF_Grdexpand.png&quot;\" displaytype=\"imagecontrol\" text=\"bind:COND\"/><Cell col=\"8\" displaytype=\"imagecontrol\" expandshow=\"hide\" expr=\"&quot;theme::default/images/btn_WF_Grdexpand.png&quot;\" text=\"bind:DLV_PSB_AREA\"/></Band></Format></Formats>");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","130",null,"20","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("4");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00","0","164",null,"10","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00","0","331",null,"10","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01","0","0",null,"20","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","28","159","14",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("8");
            obj.set_text("■ 기준판매가 산정 기준");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stc_aplyDt","199","28","135","14",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("9");
            obj.set_text("적용일: 2021.08.25 14:20");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_bssSalsprcCurst","820","20",null,"28","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("10");
            obj.set_text("기준판매가변동현황");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00","0","49","100.00%","10",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Grid("grid_price","0","60",null,"65","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub01.form);
            obj.set_taborder("12");
            obj.set_binddataset("ds_prcInfo");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"117\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"10\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"최저매입가\"/><Cell col=\"1\" text=\"사전설정매익률\"/><Cell col=\"2\" text=\"R&amp;D기준가\"/><Cell col=\"3\" text=\"List Price\"/><Cell col=\"4\" text=\"기준판매가\"/><Cell col=\"5\" text=\"일반고객\"/><Cell col=\"6\" text=\"계약고객\"/><Cell col=\"7\" colspan=\"3\" text=\"유효기간\"/></Band><Band id=\"body\"><Cell text=\"bind:BSS_PCPRC\"/><Cell col=\"1\" text=\"bind:PLN_PRFRT\" displaytype=\"normal\" maskeditclipmode=\"excludespace\" maskeditformat=\"#0.##\"/><Cell col=\"2\" text=\"bind:STPRC\"/><Cell col=\"3\" text=\"bind:DSTRB_STD_PRC\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:SSP_BSS_SALSPRC\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"5\" text=\"bind:EXPS_SALSPRC\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:EXPS_SALSPRC2\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:BSS_SALSPRC_STR_DTM\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd \" calendareditformat=\"yyyy-MM-dd\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"8\" text=\"~\"/><Cell col=\"9\" text=\"bind:BSS_SALSPRC_END_DTM\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\"/></Band></Format></Formats>");
            this.div_form2.form.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Tabpage("tabSub02",this.div_form2.form.tabMain);
            obj.set_text("등록상품정보");
            this.div_form2.form.tabMain.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02_00_00","459","360",null,"64","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02_00_00_00","459","423",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02_00","459","329",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02","459","299",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_00_00","0","361","450","149",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_00","0","330","450","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00","0","299","450","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","0","198",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","0","167",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","136",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static07","0","74",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static03","0","43",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcBackGround02","535","43","254","33",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_mroPrdStatsCd","285","43","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("13");
            obj.set_text("R&D 상품상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","140","47","140","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","43","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("15");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_reqPrdNm","0","74","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("16");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","140","140","470","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("17");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","0","136","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("18");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_rndHubHnlDisTpCd","0","167","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("19");
            obj.set_text("Hub취급가능여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_txClcd","0","198","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("20");
            obj.set_text("과면세구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcBackGround12","140","203","256","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("sta_basisUnitCd","619","136","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("22");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_invnYn","619","167","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("23");
            obj.set_text("재고여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_reqPrdNm","140","78","471","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("24");
            obj.set_autoselect("true");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_ctrySprCd","619","43","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("25");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNo","619","74","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("26");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","0","299","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("27");
            obj.set_text("R&D카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_newPrdReqPrvlList","0","330","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("28");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00","0","361","120","149",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("29");
            obj.set_text("속성");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","893","140","10","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("30");
            obj.set_text("/");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Combo("cbo_rndHubHnlDisTpCd","140","171","126","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_hubHnlDisTpCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_chmMtlYn","285","167","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("32");
            obj.set_text("화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySprCd","285","198","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("33");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_invnYn","755","171",null,"24","7",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("34");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("재고");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","755","78","63","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("35");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","823","78",null,"24","8",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new MaskEdit("edt_basisUnitQty","756","140","79","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("37");
            obj.set_autoselect("true");
            obj.getSetter("maxlength").set("10");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitCd","839","140","45","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnitCd","908","140",null,"24","7",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_ctrySprCd","755","48","63","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("40");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_ctryNm","823","48",null,"24","8",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Radio("rdo_pubOnlySprCd","425","202","142","25",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("42");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var div_form2_form_tabMain_tabSub02_form_rdo_pubOnlySprCd_innerdataset = new nexacro.NormalDataset("div_form2_form_tabMain_tabSub02_form_rdo_pubOnlySprCd_innerdataset", obj);
            div_form2_form_tabMain_tabSub02_form_rdo_pubOnlySprCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">공용</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">전용</Col></Row></Rows>");
            obj.set_innerdataset(div_form2_form_tabMain_tabSub02_form_rdo_pubOnlySprCd_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Radio("rdo_txClcd","142","202","142","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("43");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var div_form2_form_tabMain_tabSub02_form_rdo_txClcd_innerdataset = new nexacro.NormalDataset("div_form2_form_tabMain_tabSub02_form_rdo_txClcd_innerdataset", obj);
            div_form2_form_tabMain_tabSub02_form_rdo_txClcd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">면세</Col></Row></Rows>");
            obj.set_innerdataset(div_form2_form_tabMain_tabSub02_form_rdo_txClcd_innerdataset);
            obj.set_text("과세");
            obj.set_value("1");
            obj.set_index("0");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Radio("rdo_chmMtlYn","425","171","142","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("44");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var div_form2_form_tabMain_tabSub02_form_rdo_chmMtlYn_innerdataset = new nexacro.NormalDataset("div_form2_form_tabMain_tabSub02_form_rdo_chmMtlYn_innerdataset", obj);
            div_form2_form_tabMain_tabSub02_form_rdo_chmMtlYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_form2_form_tabMain_tabSub02_form_rdo_chmMtlYn_innerdataset);
            obj.set_text("Y");
            obj.set_value("1");
            obj.set_index("0");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_brndNm","459","299","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("45");
            obj.set_text("브랜드명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_hashTag","459","330","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("46");
            obj.set_text("해시Tag");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00_00","459","361","120","63",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("47");
            obj.set_text("배지적용");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_dispPrdSpr","459","423","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("48");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_dispPrdSpr","589","427",null,"24","5",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","135","303","113","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("50");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsfNm","253","303","187","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("51");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_newPrdReqPrvlList","135","334","304","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("52");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_brndNm","589","303",null,"24","7",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("53");
            obj.set_enable("true");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_hashTag","589","333",null,"24","7",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("54");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Combo("cbo_sbiDocRegId","647","366","146","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("55");
            obj.set_innerdataset("ds_bgList");
            obj.set_codecolumn("BG_SEQ");
            obj.set_datacolumn("BG_NM");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Calendar("cal_bgAplyStrDtm","647","395","104","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("56");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","757","393","10","23",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("57");
            obj.set_text("~");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Calendar("cal_bgAplyEndDtm","773","393","104","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("58");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new CheckBox("chk_lmt","883","392","71","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("59");
            obj.set_text("제한없음");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Grid("grd_mroAttr","136","367","304","135",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("60");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_catgRcmdInq");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("카테고리를 선택하세요");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"131\"/><Column size=\"58\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"decoratetext\" text=\"속성명 \"/><Cell col=\"1\" text=\"속성값\"/><Cell col=\"2\" text=\"노출여부\"/></Band><Band id=\"body\"><Cell cssclass=\"grd_WF_bg_image\" displaytype=\"decoratetext\" text=\"bind:PRNM\" textAlign=\"left\" expr=\"CHK_YN == 0 ? &quot;(미맵핑) &quot; + PRNM : MAND_YN == &quot;Y&quot; ? PRNM +&quot; &lt;fc v=&apos;red&apos;&gt;&lt;b v=&apos;true&apos;&gt;* &lt;/b&gt;&lt;/fc&gt;&quot; : PRNM\"/><Cell col=\"1\" text=\"bind:PRVL\" displaytype=\"expr:CHK_YN == 1 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:CHK_YN == 1 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:EXPS_YN\"/></Band></Format></Formats>");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Radio("rdo_mroPrdStatsCd","425","47","202","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("61");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var div_form2_form_tabMain_tabSub02_form_rdo_mroPrdStatsCd_innerdataset = new nexacro.NormalDataset("div_form2_form_tabMain_tabSub02_form_rdo_mroPrdStatsCd_innerdataset", obj);
            div_form2_form_tabMain_tabSub02_form_rdo_mroPrdStatsCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">미사용</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">종결</Col></Row></Rows>");
            obj.set_innerdataset(div_form2_form_tabMain_tabSub02_form_rdo_mroPrdStatsCd_innerdataset);
            obj.set_text("Y");
            obj.set_value("1");
            obj.set_index("0");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","0","229",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_regpsn","0","229","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("63");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_fnlUpdr","619","229","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("64");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_fnlUpdDd","285","229","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("65");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_fnlUpdr","755","233",null,"24","7",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("66");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_regDd","619","198","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("67");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_regDd","755","202",null,"24","7",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("68");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("2021-04-29 13:54:04");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_fnlUpdDd","429","233","171","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("69");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_regpsn","140","233","140","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("70");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer","589","366","54","53",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("71");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","0",null,"20","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("72");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","21","97","14",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("73");
            obj.set_text("■ 상품 기본 정보");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","277","157","14",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("74");
            obj.set_text("■ R&D카테고리/속성 정보");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","460","277","97","14",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("75");
            obj.set_text("■ R&D 부가정보");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static07_01","0","105",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","140","109",null,"24","7",null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("77");
            obj.set_autoselect("true");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("stc_reqPrdNm00","0","105","130","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub02.form);
            obj.set_taborder("78");
            obj.set_text("SSP상품명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.div_form2.form.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Tabpage("tabSub03",this.div_form2.form.tabMain);
            obj.set_text("요청상품정보");
            this.div_form2.form.tabMain.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","21","97","14",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("0");
            obj.set_text("■ 요청 상품 정보");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_00","0","46",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_07","0","77",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_06","0","108",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_05","0","139",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_04","0","170",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_03","0","201",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","305","47","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("7");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_mnfr","430","81","175","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_orgplc","610","77","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("9");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_orgplc","735","81",null,"24","10",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","305","77","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("11");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","430","50",null,"24","10",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_hpeUprc","735","112",null,"24","10",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_hpeUprc","610","108","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("14");
            obj.set_text("희망단가");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_hpeQty","735","143",null,"24","10",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_hpeQty","610","139","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("16");
            obj.set_text("희망수량");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySpr","610","170","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("17");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","125","112","481","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","125","143","481","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","125","50","175","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_prdId00","125","80","175","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_dispStatsChgrsn","125","205","542","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","422","97","14",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("23");
            obj.set_text("■ 요청 고객 정보");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","0",null,"20","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("24");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00","0","36",null,"10","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("25");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","46","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("26");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_03_01","0","77","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("27");
            obj.set_text("대표상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","0","108","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("28");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","0","139","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("29");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_hrmChmYn","0","170","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("30");
            obj.set_text("선택정보");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_02","0","201","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("31");
            obj.set_text("등록요청사유");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00_00_00","0","232",null,"166","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01","0","398",null,"20","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("33");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00","0","436",null,"10","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("34");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_02_00","0","448",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_02_00_00","0","479",null,"32","0",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_01","0","448","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("37");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_prdId00_00","125","452","175","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("38");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_00_00_00","305","448","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("39");
            obj.set_text("요청일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_mnfr2_01","430","452","175","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("40");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_00_01_03","610","448","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_01_00","0","479","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("42");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_prdId00_00_00","125","483","175","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("43");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_00_00_00_00","305","479","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("44");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_mnfr2_01_00","430","483","175","24",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("45");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_00_01_03_00","610","479","120","32",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("46");
            obj.set_text("요청자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_orgplc2_03_00","735","483",null,"24","10",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("47");
            obj.set_enable("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Radio("rdo_pubOnlySpr","735","175",null,"24","70",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_enable("false");
            var div_form2_form_tabMain_tabSub03_form_rdo_pubOnlySpr_innerdataset = new nexacro.NormalDataset("div_form2_form_tabMain_tabSub03_form_rdo_pubOnlySpr_innerdataset", obj);
            div_form2_form_tabMain_tabSub03_form_rdo_pubOnlySpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">공용</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">전용</Col></Row></Rows>");
            obj.set_innerdataset(div_form2_form_tabMain_tabSub03_form_rdo_pubOnlySpr_innerdataset);
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new CheckBox("che_hrmChmYn","126","176","127","22",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("49");
            obj.set_text("화학물질여부");
            obj.set_readonly("true");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static20_001","126","236","549","124",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_image_bg");
            obj.set_text("");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_01_00_00_00_00","0","232","120","167",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("51");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_1","138","245","90","100",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("52");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_2","245","245","90","100",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("53");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_3","355","245","90","100",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("54");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_4","464","245","90","100",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("55");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_5","571","245","90","100",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("56");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stcTitle11_00_00_00_01","679","232","130","166",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("57");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Grid("grd_imageList","123","367","551","26",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("58");
            obj.set_binddataset("ds_imageList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:ATFL_NM_1\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"1\" text=\"bind:ATFL_NM_2\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:ATFL_NM_3\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"3\" text=\"bind:ATFL_NM_4\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"4\" text=\"bind:ATFL_NM_5\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/></Band></Format></Formats>");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Grid("grd_fileList","819","238",null,"153","9",null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("59");
            obj.set_binddataset("ds_gridFilelist");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"137\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:ATFL_NM\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" cursor=\"pointer\" color=\"royalblue\" textDecoration=\"underline\"/></Band></Format></Formats>");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","786","206","98","19",null,null,null,null,null,null,this.div_form2.form.tabMain.tabSub03.form);
            obj.set_taborder("60");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.div_form2.form.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00","20","div_form2:0",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_form1.form.edt_prdNm","value","ds_master","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtBizplc00","value","ds_search","pgmId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_form1.form.edt_prdId","value","ds_master","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_form1.form.edt_reprSpec","value","ds_master","ATTR_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edt_dispStatsChgrsn00","value","ds_prPrdInfo","ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_form1.form.cal_vldPerdDtStr","value","ds_master","SALS_DSGN_SALSPRC_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_form1.form.cal_vldPerdDtEnd","value","ds_master","SALS_DSGN_SALSPRC_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_form1_00.form.edt_dispStatsChgrsn","value","ds_master","DISP_STATS_CHGRSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_form1_00.form.edt_rndUscustDispStatsChgrsn","value","ds_master","RND_USCUST_DISP_STATS_CHGRSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_form1.form.edt_salsDsgnSalsprc","value","ds_master","SALS_DSGN_SALSPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_form1.form.edt_prdClcd","value","ds_master","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_form1.form.edt_prdClcdNm","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_form1.form.edt_mnfrNo","value","ds_master","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_form1.form.edt_mnfrNm","value","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_form1.form.edt_bzplcId","value","ds_master","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_form1.form.edt_odrUnit","value","ds_master","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_form2.form.tabMain.tabSub03.form.edt_mnfr","value","ds_cprtcpReqInfoInq","MRO_MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_form2.form.tabMain.tabSub02.form.edt_mnfr2_01","value","ds_cprtcpReqInfoInq","NEW_PRD_REQ_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_form2.form.tabMain.tabSub02.form.edt_mnfr2_01_00","value","ds_cprtcpReqInfoInq","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_form2.form.tabMain.tabSub03.form.edt_orgplc","value","ds_cprtcpReqInfoInq","CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_form2.form.tabMain.tabSub02.form.edt_orgplc2_03_00","value","ds_cprtcpReqInfoInq","NEW_PRD_REQPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_form2.form.tabMain.tabSub03.form.edt_prdNm","value","ds_cprtcpReqInfoInq","REQ_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_form2.form.tabMain.tabSub03.form.edt_hpeUprc","value","ds_cprtcpReqInfoInq","HPE_SELL_UPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_form2.form.tabMain.tabSub03.form.edt_hpeQty","value","ds_cprtcpReqInfoInq","HPE_SELL_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_form2.form.tabMain.tabSub03.form.edt_reprSpec","value","ds_cprtcpReqInfoInq","NEW_PRD_REQ_PRVL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_form2.form.tabMain.tabSub03.form.edt_prdClcd","value","ds_cprtcpReqInfoInq","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_form2.form.tabMain.tabSub03.form.edt_prdId","value","ds_cprtcpReqInfoInq","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_form2.form.tabMain.tabSub02.form.edt_prdId00","value","ds_cprtcpReqInfoInq","REPR_PRD_SPR_RSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_form2.form.tabMain.tabSub02.form.edt_prdId00_00","value","ds_cprtcpReqInfoInq","NEW_PRD_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_form2.form.tabMain.tabSub02.form.edt_prdId00_00_00","value","ds_cprtcpReqInfoInq","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_form2.form.tabMain.tabSub03.form.edt_prdId00","value","ds_cprtcpReqInfoInq","REPR_PRD_SPR_RSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_form2.form.tabMain.tabSub03.form.edt_dispStatsChgrsn","value","ds_cprtcpReqInfoInq","REQ_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_form2.form.tabMain.tabSub03.form.edt_prdId00_00","value","ds_cprtcpReqInfoInq","NEW_PRD_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_form2.form.tabMain.tabSub03.form.edt_mnfr2_01","value","ds_cprtcpReqInfoInq","NEW_PRD_REQ_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_form2.form.tabMain.tabSub03.form.edt_prdId00_00_00","value","ds_cprtcpReqInfoInq","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_form2.form.tabMain.tabSub03.form.edt_mnfr2_01_00","value","ds_cprtcpReqInfoInq","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_form2.form.tabMain.tabSub03.form.edt_orgplc2_03_00","value","ds_cprtcpReqInfoInq","NEW_PRD_REQPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_form2.form.tabMain.tabSub03.form.rdo_pubOnlySpr","value","ds_cprtcpReqInfoInq","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_form2.form.tabMain.tabSub03.form.che_hrmChmYn","value","ds_cprtcpReqInfoInq","CHM_MTL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_form2.form.tabMain.tabSub02.form.edt_prdId","value","ds_prdBasisInfo","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_form2.form.tabMain.tabSub02.form.edt_reprSpec","value","ds_prdBasisInfo","OLD_ATTR_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_form2.form.tabMain.tabSub02.form.edt_reqPrdNm","value","ds_prdBasisInfo","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_form2.form.tabMain.tabSub02.form.cbo_rndHubHnlDisTpCd","value","ds_prdBasisInfo","HUB_HNL_DIS_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_form2.form.tabMain.tabSub02.form.edt_invnYn","value","ds_prdBasisInfo","INVN_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_form2.form.tabMain.tabSub02.form.edt_mnfrNo","value","ds_master","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_form2.form.tabMain.tabSub02.form.edt_mnfrNm","value","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_form2.form.tabMain.tabSub02.form.edt_basisUnitQty","value","ds_prdBasisInfo","BASIS_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_form2.form.tabMain.tabSub02.form.edt_basisUnitCd","value","ds_prdBasisInfo","BASIS_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_form2.form.tabMain.tabSub02.form.edt_sellUnitCd","value","ds_prdBasisInfo","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_form2.form.tabMain.tabSub02.form.edt_ctrySprCd","value","ds_prdBasisInfo","ORGPLC_CTRY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_form2.form.tabMain.tabSub02.form.edt_ctryNm","value","ds_prdBasisInfo","ORGPLC_CTRY_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_form2.form.tabMain.tabSub02.form.rdo_pubOnlySprCd","value","ds_prdBasisInfo","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_form2.form.tabMain.tabSub02.form.rdo_txClcd","value","ds_prdBasisInfo","TX_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_form2.form.tabMain.tabSub02.form.rdo_chmMtlYn","value","ds_prdBasisInfo","CHM_MTL_PRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_form2.form.tabMain.tabSub02.form.edt_dispPrdSpr","value","ds_prdBasisInfo","DISP_PRD_SPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_form2.form.tabMain.tabSub02.form.edt_prdClcd","value","ds_master","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_form2.form.tabMain.tabSub02.form.edt_prdClsfNm","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_form2.form.tabMain.tabSub02.form.edt_newPrdReqPrvlList","value","ds_prdBasisInfo","ATTR_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_form2.form.tabMain.tabSub02.form.edt_brndNm","value","ds_prdBasisInfo","BRND_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_form2.form.tabMain.tabSub02.form.edt_hashTag","value","ds_prdBasisInfo","HASH_TAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_form2.form.tabMain.tabSub02.form.cbo_sbiDocRegId","value","ds_prdBasisInfo","BG_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_form2.form.tabMain.tabSub02.form.cal_bgAplyStrDtm","value","ds_prdBasisInfo","BG_APLY_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_form2.form.tabMain.tabSub02.form.cal_bgAplyEndDtm","value","ds_prdBasisInfo","BG_APLY_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_form2.form.tabMain.tabSub02.form.rdo_mroPrdStatsCd","value","ds_prdBasisInfo","MRO_PRD_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_form2.form.tabMain.tabSub02.form.edt_fnlUpdr","value","ds_prdBasisInfo","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_form2.form.tabMain.tabSub02.form.edt_regDd","value","ds_prdBasisInfo","SSP_REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_form2.form.tabMain.tabSub02.form.edt_fnlUpdDd","value","ds_prdBasisInfo","SSP_UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_form2.form.tabMain.tabSub02.form.edt_regpsn","value","ds_prdBasisInfo","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_form1.form.edt_bzplcNm","value","ds_master","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_form1.form.edt_exptPrfrt","value","ds_master","EXPT_PRFRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_form1.form.edt_sspPrdNm","value","ds_master","SSP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_form2.form.tabMain.tabSub02.form.edt_sspPrdNm","value","ds_prdBasisInfo","SSP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
            this._addPreloadList("data","","ds_master");
            this._addPreloadList("data","","ds_prdBasisInfo");
            this._addPreloadList("data","","ds_salsDsgnSalsprcHst");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_LA_07.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_LA_07.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_LA_06.xfdl(전용상품 노출판매가 등록/상세)
        * 작 성			일 명: 손나라
        * 작 성	    	일 자: 2022/06/13
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sParamArg1;
        this.sParamArg2;
        this.sParamArg3;
        this.sParamArg4;
        this.sParamArg5;
        this.sParamArg6;
        this.mallSprCd = "20";
        this.totalCount = 0;
        this.strKeyValue = "";
        this.bExtend = false;
        this.lv_coCd = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lvGetDate = "";
        this.div_form1.uMinSize = 385;
        this.div_form1.uMaxSize = 530;
        this.div_form2.uMinSize = 0;
        this.div_form2.uMaxSize = 550;
        this.duplCount = 0;

        this.imageViewerId  = "";			// 이미지파일 뷰어 표시를 위한 변수 값
        this.fileIndex = "";				// 파일 index 값을 저장을 위한 변수 값
        this.imageFileYn = false;			// 이미지 및 첨부파일 구분을 위한 변수 값
        this.lvGetDateTime = "";
        this.toggFlag = true;
        this.oldBssSalsprcUseYn = "";
        this.oldSalsDsgnSalsprc = "";
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
        	// 로컬 로그인 사용 않할시 false
        	this.fn_setLocalUserCreate(true);
        	//사용자 초기화 함수
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
        	this.lvGetDate = this.fn_getSvrDate();             // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.
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

        	if (!this.gfn_isNull(this.getOwnerFrame().pv_sVal06)) {
        		 this.sParamArg6 = this.getOwnerFrame().pv_sVal06;
        	}

        	var strDs   = "ds_dispStats|ds_pubOnlySpr|ds_txClcd|ds_hubHnlDisTpCd";		// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "DISP_STATS_CD|PUB_ONLY_SPR_CD|TX_CLCD|HUB_HNL_DIS_TP_CD";	// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "X|X|X|X";													// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";															// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드, 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);
        };

        this.fn_PostformInit = function()
        {
        	this.lvGetDateTime = new nexacro.Date() + "";
        	this.fn_changeSearchArea(true);
        	var nRow1 = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow1,"CO_CD",this.lv_coCd);
        	this.ds_search.setColumn(nRow1,"MALL_SPR_CD",this.mallSprCd);
         	this.flag = this.sParamArg3;
         	this.fn_setResetBtnCall();
        	this.fn_BgList();

        	if (this.sParamArg3 == "R") {
        		this.ds_search.setColumn(nRow1, "PRD_ID", this.sParamArg1);
        		this.ds_search.setColumn(nRow1, "BZPLC_ID", this.sParamArg2);
        		this.ds_search.setColumn(nRow1, "NEW_PRD_REQ_NO", this.sParamArg6);
        		this.fn_Ret();
        	}

        	if ( this.sParamArg3 == "I" )
        	{
        		this.oldBssSalsprcUseYn="N";
        	}
        	if ( this.sParamArg4 == "Y" )
        	{
        		this.flag = "U";
        		this.fn_setResetBtnCall();
        	}
        };

        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
        	if ( this.gfn_isNull(this.sParamArg5) )
        	{
        		this.div_form2.form.tabMain.tabSub03.set_tabbuttonwidth(0);
        	}

        	//할인율 구분 초기값
        	this.ds_txClcd.filter("COM_DTL_CD=='0' || COM_DTL_CD=='1'");
        	if ( this.flag == "R" ) {
        //		this.fn_compontAllControl();
        		//상세조회 시 readonly 처리
        		this.stc_main.set_text("전용상품 노출판매가 상세");
         		this.div_form1.form.edt_prdId.set_readonly(true);
        		this.div_form1.form.edt_bzplcId.set_readonly(true);
        		this.div_form1.form.edt_salsDsgnSalsprc.set_readonly(true);
        		this.div_form1.form.cal_vldPerdDtStr.set_readonly(true);
        		this.div_form1.form.cal_vldPerdDtEnd.set_readonly(true);
        		this.div_form1.form.chk_bssSalsprc.set_readonly(true);
        		this.div_form1_00.form.edt_dispStatsChgrsn.set_readonly(true);
        		this.div_form1_00.form.edt_rndUscustDispStatsChgrsn.set_readonly(true);
        		this.div_form1.form.grid_oprUnitNm.set_readonly(true);
        		//상세조회 시 버튼 visible 처리
        		this.div_form1.form.btn_prdIdPopup.set_visible(false);
        		this.div_form1.form.btn_bzplcPopup.set_visible(false);
         		this.btn_save.set_visible(false);
         		this.btn_clear.set_visible(false);
        		//this.div_form2.form.tabMain.tabSub01.form.grid_price.set_readonly(true);
        		// 구매담당자여부
        		if ( this.sParamArg4 == "N" )
        		{
        			this.btn_update.set_visible(false);
        		} else
        		{
        			this.btn_update.set_visible(true);
        		}

        		//alert(this.div_form2.height);
        // 		this.div_form1.set_height(this.div_form1.uMinSize);
        // 		this.div_form2.set_height(this.div_form2.uMaxSize);
        		//this.sta_bg.set_bottom(-360);
        //		this.set_height(720);
        		//this.resetScroll();
        		this.fn_changeSearchArea(true);
        	} else if ( this.flag == "U" ) {
        		this.stc_main.set_text("전용상품 노출판매가 상세");
        		this.div_form1.form.edt_salsDsgnSalsprc.set_readonly(false);
        		this.div_form1.form.cal_vldPerdDtStr.set_readonly(false);
        		//this.div_form1.form.cal_vldPerdDtEnd.set_readonly(false);
        		this.div_form1.form.chk_bssSalsprc.set_readonly(false);
        		this.div_form1_00.form.edt_dispStatsChgrsn.set_readonly(false);
        		this.div_form1_00.form.edt_rndUscustDispStatsChgrsn.set_readonly(false);
        		this.div_form1.form.grid_oprUnitNm.set_readonly(false);

        		this.btn_save.set_visible(true);
        		this.btn_clear.set_visible(true);
        		this.btn_update.set_visible(false);

        		//this.div_form2.form.tabMain.tabSub01.form.grid_price.set_readonly(false);

        		//this.resetScroll();
        		this.fn_changeSearchArea(true);
        	} else if ( this.flag == "I") {
        		this.stc_main.set_text("전용상품 노출판매가 등록");
        		var nRow = this.ds_master.addRow();
        		this.ds_master.setColumn(nRow,"CO_CD",this.lv_coCd);
        		//this.div_form2.set_visible(false);
        		//this.div_form1.form.cal_vldPerdDtStr.set_value(this.lvGetDateTime);
        		this.ds_master.setColumn(0,"SALS_DSGN_SALSPRC_STR_DTM",this.lvGetDateTime);
        		this.ds_search.setColumn(0,"STR_DTM",this.lvGetDateTime);
        		this.ds_master.setColumn(0,"SALS_DSGN_SALSPRC_END_DTM","99991231235959");
        		this.ds_master.setColumn(0,"BSS_SALSPRC_USEYN","N");
        		this.div_form1.form.edt_prdId.set_readonly(false);
        		this.div_form1.form.edt_bzplcId.set_readonly(false);
        		this.div_form1.form.edt_salsDsgnSalsprc.set_readonly(false);
        		//this.div_form1.form.edt_exptPrfrt.set_readonly(false);
        		this.div_form1.form.cal_vldPerdDtStr.set_readonly(false);
        		//this.div_form1.form.cal_vldPerdDtEnd.set_readonly(false);
        		this.div_form1.form.chk_bssSalsprc.set_readonly(false);
        		this.div_form1_00.form.edt_dispStatsChgrsn.set_readonly(false);
        		this.div_form1_00.form.edt_rndUscustDispStatsChgrsn.set_readonly(false);
        // 		this.div_form1.set_height(this.div_form1.uMinSize);
        // 		this.div_form2.set_height(this.div_form2.uMinSize);
        // 		this.set_scrolltype('none');
        // 		this.sta_bg.set_bottom(-17);
        // 		this.set_height(790-290);
        // 		this.resetScroll();
        		this.fn_changeSearchArea(true);
        	}
        }


        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.fn_alert(sErrorMsg,"에러정보","","error");
        		if(nErrorCode == -100)
        		{
        			//this.div.form.PRNM.setFocus();
        		}
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
        			    this.fn_postRet();
        				break;
        			case "Save":
        			    this.fn_PostSave();
        				break;
        			case "OprUnitInfo":
        			    this.fn_PostOprUnitInfo();
        			    break;
        			case "OnlyPrdPrcMngDtl":
        				this.fn_PostOnlyPrdPrcMngDtl();
        			    break;
        			case "OnlyPrdPrcMngDupl":
        			    this.fn_PostOnlyPrdPrcMngDupl();
        				break;
        			default:
        				break;
        		}
        	}
        };

        this.fn_popupCallback = function(strId, strVal)
        {
            switch(strId)
            {
        		//상품ID
        		case "btn_prdIdPopup" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.ds_master.setColumn(0,"PRD_ID",jsonData.PRD_ID);
        				this.ds_master.setColumn(0,"PRD_ID_VIEW",jsonData.PRD_ID_VIEW);
        				this.ds_master.setColumn(0,"PRD_NM",jsonData.PRD_NM);
        				this.ds_master.setColumn(0,"PRD_CLCD",jsonData.PRD_CLCD);
        				this.ds_master.setColumn(0,"PRD_CLCD_NM",jsonData.FULL_PRD_CLSF_NM);
        				this.ds_master.setColumn(0,"ATTR_VAL",jsonData.ATTR_VAL);
        				this.ds_master.setColumn(0,"MNFR_NO",jsonData.MNFR_NO);
        				this.ds_master.setColumn(0,"MNFR_NM",jsonData.MNFR_NM);
        				this.ds_search.setColumn(0,"PRD_ID",jsonData.PRD_ID);

        				this.fn_OnlyPrdPrcMngDupl();
        			}else
        			{
        			// 닫기 버튼 처리
        			}
                    break;
        		//카테고리
        		case "btn_bzplcPopup" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.ds_master.setColumn(0,"BZPLC_ID",jsonData.BZPLC_ID);
        				this.ds_master.setColumn(0,"BZPLC_NM",jsonData.BZPLC_NM);
        				this.ds_search.setColumn(0,"BZPLC_ID",jsonData.BZPLC_ID);
        				this.fn_OnlyPrdPrcMngDupl();
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
        	05. 조회 함수 선언
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
            var strASync    = true;              //생략이나 공백일시에는 ASync=true,싱크시는 false로
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
        };
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_preRet = function()
        {
        	// 조회조건 셋팅
        	return true;
        };
        /**
         * 기능 : 화면조회 전 실행
         */
        this.fn_Ret = function()
        {
        	if(!this.fn_preRet())
        	{
        		return false;
        	}
        	var strSvc      = "Ret";
            var strUrl      = "/rd/only-prd-prc-mng/select-only-prd-prc-mng-dtl.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master";
        	    strOutDs   += " ds_prcInfo=ds_prcInfo";
        	    strOutDs   += " ds_prdBasisInfo=ds_prdBasisInfo";
        		strOutDs   += " ds_cprtcpReqInfoInq=ds_cprtcpReqInfoInq";
        		strOutDs   += " ds_cprtcpReqAttcFile=ds_cprtcpReqAttcFile";
        		strOutDs   += " ds_salsDsgnSalsprcHst=ds_salsDsgnSalsprcHst";
        		strOutDs   += " ds_purcInfo=ds_purcInfo";
        		strOutDs   += " ds_oprUnitInfo=ds_oprUnitInfo";
        		strOutDs   += " ds_catgRcmdInq=ds_catgRcmdInq";
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

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_postRet = function()
        {
        	if ( this.ds_master.rowcount > 0 )
        	{
        		var bssUseYn = this.ds_master.getColumn(0,"BSS_SALSPRC_USEYN");
        		this.oldBssSalsprcUseYn = bssUseYn;
        		this.oldSalsDsgnSalsprc = this.ds_master.getColumn(0,"SALS_DSGN_SALSPRC");

        		this.ds_master.setColumn(0,"OLD_DISP_STATS_CHGRSN",this.ds_master.getColumn(0,"DISP_STATS_CHGRSN"));
        		trace(this.ds_master.getColumn(0,"DISP_STATS_CHGRSN"));
        		var gb = this.ds_master.getColumn(0,"GB");
        		if ( gb == "10" )
        		{
        			this.ds_master.setColumn(0,"CO_CD",this.lv_coCd);
        			this.ds_master.setColumn(0,"SALS_DSGN_SALSPRC_STR_DTM",this.lvGetDateTime);
        			this.ds_search.setColumn(0,"STR_DTM",this.lvGetDateTime);
        			this.ds_master.setColumn(0,"SALS_DSGN_SALSPRC_END_DTM","99991231235959");
        			this.ds_master.setColumn(0,"BSS_SALSPRC_USEYN","N");
        			//trace(this.ds_master.saveXML());
        			if (this.ds_oprUnitInfo.getRowCount() > 0 )
        			{
        				for ( var i =0; i<this.ds_oprUnitInfo.getRowCount(); i++)
        				{
        					this.ds_oprUnitInfo.setColumn(i,"DISP_STATS_CD1",1);
        					this.ds_oprUnitInfo.setColumn(i,"DISP_STATS_CD","10");
        					this.ds_oprUnitInfo.set_updatecontrol(false);
        					this.ds_oprUnitInfo.setRowType(i,2);
        					this.ds_oprUnitInfo.set_updatecontrol(true);
        				}
        			}
        			if ( this.sParamArg4 == "Y" )
        			{
        				this.flag = "U";
        				this.fn_setResetBtnCall();
        			}
        		}
        		if ( bssUseYn == "Y" )
        		{
        			this.div_form1.form.chk_bssSalsprc.set_value(1);
        			this.div_form1.form.edt_salsDsgnSalsprc.set_readonly(true);
        		}
        	}

        	var reqNo = this.ds_cprtcpReqInfoInq.getColumn(0,"NEW_PRD_REQ_NO");

        	if ( reqNo != null && reqNo != "" )
        	{
        	// 상단 이미지 & 첨부파일 존재시
        		if(this.ds_cprtcpReqAttcFile.getRowCount() > 0)
        		{
        			var imgList = [["60","1"],["61","2"],["62","3"],["63","4"],["80","5"]];

        			for(var idx=0; idx<this.ds_cprtcpReqAttcFile.getRowCount(); idx++)
        			{
        				var filePath    = this.ds_cprtcpReqAttcFile.getColumn(idx,"ATFL_STOR_PATH");
        				var fileName    = this.ds_cprtcpReqAttcFile.getColumn(idx,"ORI_ATFL_NM");
        				var fileOrgName = this.ds_cprtcpReqAttcFile.getColumn(idx,"ATFL_NM");
        				var strEtcFds2  = this.ds_cprtcpReqAttcFile.getColumn(idx,"ETC_FDS_2");
        				var strAtflNm   = this.ds_cprtcpReqAttcFile.getColumn(idx,"ATFL_NM");
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

        						this.div_form2.form.tabMain.tabSub03.form["ImageViewer_"+imgList[jdx][1]].set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
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
        	}
        	else
        	{
        		this.div_form2.form.tabMain.tabSub03.set_tabbuttonwidth(0);
        	}

        	// 배지 이미지 조회
        	if(this.gfn_nvl(this.ds_prdBasisInfo.getColumn(0,"BG_SEQ"),"") != "")
        	{
        		var findRow     = this.ds_bgList.findRow("BG_SEQ",this.ds_prdBasisInfo.getColumn(0,"BG_SEQ"))
        		var filePath 	= this.ds_bgList.getColumn(findRow,"ATFL_STOR_PATH");
        		var fileOrgName = this.ds_bgList.getColumn(findRow,"ATFL_NM");
        		var fileName    = this.ds_bgList.getColumn(findRow,"ORI_ATFL_NM");

        		this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyStrDtm.set_readonly(false);			// 배지 적용시작일자 활성화
        		this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyEndDtm.set_readonly(false);			// 배지 적용종료일자 활성화
        		this.div_form2.form.tabMain.tabSub02.form.chk_lmt.set_enable(true);						// 배지 제한없음 체크박스 활성화

        		// 제한없음 체크
        		if(this.gfn_nvl(this.ds_prdBasisInfo.getColumn(0,"BG_APLY_END_DTM"),"").indexOf("99991231") != -1)
        		{
        			this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyStrDtm.set_readonly(true);			// 배지 적용시작일자 비활성화
        			this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyEndDtm.set_readonly(true);			// 배지 적용종료일자 비활성화
        			this.div_form2.form.tabMain.tabSub02.form.chk_lmt.set_value(true);
        		}

        		this.div_form2.form.tabMain.tabSub02.form.ImageViewer.set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
        	}
        	else
        	{
        		this.ds_prdBasisInfo.setColumn(0,"BG_SEQ",null);
        	}
        };

        this.fn_PreOprUnitInfo = function()
        {
        	// 조회조건 셋팅
        	return true;
        }

        /**
          * 사업장 조회 후 운영단위 자동 조회
          */
        this.fn_OprUnitInfo = function()
        {
        	if(!this.fn_PreOprUnitInfo())
        	{
        		return false;
        	}
        	var strSvc      = "OprUnitInfo";
            var strUrl      = "/rd/only-prd-prc-mng/select-opr-unit-info.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_oprUnitInfo=ds_oprUnitInfo";
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

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostOprUnitInfo = function()
        {
        	if (this.flag == "I" || this.flag == "A" )
        	{
        		if (this.ds_oprUnitInfo.getRowCount() > 0 )
        		{
        			for ( var i =0; i<this.ds_oprUnitInfo.getRowCount(); i++)
        			{
        				this.ds_oprUnitInfo.setColumn(i,"DISP_STATS_CD1",1);
        				this.ds_oprUnitInfo.setColumn(i,"DISP_STATS_CD","10");
        				this.ds_oprUnitInfo.set_updatecontrol(false);
        				this.ds_oprUnitInfo.setRowType(i,2);
        				this.ds_oprUnitInfo.set_updatecontrol(true);
        			}
        		}
        	}
        }

        this.fn_PreOnlyPrdPrcMngDtl = function()
        {
        	if ( this.gfn_isNull(this.div_form1.form.edt_prdId.value) || this.gfn_isNull(this.div_form1.form.edt_bzplcId.value) )
        	{
        		return false;
        	}
        	// 조회조건 셋팅
        	return true;
        }

        /**
          * 사업장 조회 후 운영단위 자동 조회
          */
        this.fn_OnlyPrdPrcMngDtl = function()
        {
        	if(!this.fn_PreOnlyPrdPrcMngDtl())
        	{
        		return false;
        	}
        	var strSvc      = "OnlyPrdPrcMngDtl";
            var strUrl      = "/rd/only-prd-prc-mng/select-only-prd-prc-mng-dtl-reg.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_prcInfo=ds_prcInfo";
        	    strOutDs   += " ds_prdBasisInfo=ds_prdBasisInfo";
        		strOutDs   += " ds_cprtcpReqInfoInq=ds_cprtcpReqInfoInq";
        		strOutDs   += " ds_cprtcpReqAttcFile=ds_cprtcpReqAttcFile";
        		strOutDs   += " ds_purcInfo=ds_purcInfo";
        		strOutDs   += " ds_catgRcmdInq=ds_catgRcmdInq";
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

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostOnlyPrdPrcMngDtl = function()
        {
        	var aplyDt = this.ds_prcInfo.getColumn(0,"APLY_DT");
        	//this.div_form2.form.stc_aplyDt.set_text("적용일:"+aplyDt);
        	var reqNo = this.ds_cprtcpReqInfoInq.getColumn(0,"NEW_PRD_REQ_NO");

        	//등록시 주문단위 셋팅
        	if ( this.ds_prdBasisInfo.getRowCount() > 0 )
        	{
        		var strBasisNm = this.ds_prdBasisInfo.getColumn(0,"BASIS_NM");
        		this.ds_master.setColumn(0,"SELL_UNIT_CD",strBasisNm);
        	}
        	if ( reqNo != null && reqNo != "" )
        	{
        	// 상단 이미지 & 첨부파일 존재시
        		if(this.ds_cprtcpReqAttcFile.getRowCount() > 0)
        		{
        			var imgList = [["60","1"],["61","2"],["62","3"],["63","4"],["80","5"]];

        			for(var idx=0; idx<this.ds_cprtcpReqAttcFile.getRowCount(); idx++)
        			{
        				var filePath    = this.ds_cprtcpReqAttcFile.getColumn(idx,"ATFL_STOR_PATH");
        				var fileName    = this.ds_cprtcpReqAttcFile.getColumn(idx,"ORI_ATFL_NM");
        				var fileOrgName = this.ds_cprtcpReqAttcFile.getColumn(idx,"ATFL_NM");
        				var strEtcFds2  = this.ds_cprtcpReqAttcFile.getColumn(idx,"ETC_FDS_2");
        				var strAtflNm   = this.ds_cprtcpReqAttcFile.getColumn(idx,"ATFL_NM");
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

        						this.div_form2.form.tabMain.tabSub03.form["ImageViewer_"+imgList[jdx][1]].set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
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
        	}
        	else
        	{
        		this.div_form2.form.tabMain.tabSub03.set_tabbuttonwidth(0);
        	}

        	// 배지 이미지 조회
        	if(this.gfn_nvl(this.ds_prdBasisInfo.getColumn(0,"BG_SEQ"),"") != "")
        	{
        		var findRow     = this.ds_bgList.findRow("BG_SEQ",this.ds_prdBasisInfo.getColumn(0,"BG_SEQ"))
        		var filePath 	= this.ds_bgList.getColumn(findRow,"ATFL_STOR_PATH");
        		var fileOrgName = this.ds_bgList.getColumn(findRow,"ATFL_NM");
        		var fileName    = this.ds_bgList.getColumn(findRow,"ORI_ATFL_NM");

        		this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyStrDtm.set_readonly(false);			// 배지 적용시작일자 활성화
        		this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyEndDtm.set_readonly(false);			// 배지 적용종료일자 활성화
        		this.div_form2.form.tabMain.tabSub02.form.chk_lmt.set_enable(true);						// 배지 제한없음 체크박스 활성화

        		// 제한없음 체크
        		if(this.gfn_nvl(this.ds_prdBasisInfo.getColumn(0,"BG_APLY_END_DTM"),"").indexOf("99991231") != -1)
        		{
        			this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyStrDtm.set_readonly(true);			// 배지 적용시작일자 비활성화
        			this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyEndDtm.set_readonly(true);			// 배지 적용종료일자 비활성화
        			this.div_form2.form.tabMain.tabSub02.form.chk_lmt.set_value(true);
        		}

        		this.div_form2.form.tabMain.tabSub02.form.ImageViewer.set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
        	}
        	else
        	{
        		this.ds_prdBasisInfo.setColumn(0,"BG_SEQ",null);
        	}

        // 	this.div_form2.set_height(this.div_form2.uMaxSize);
        // 	this.set_height(760);
        // 	this.sta_bg.set_bottom(-360);
        // 	this.set_scrolltype('both');
        // 	this.resetScroll();

        }

        this.fn_PreOnlyPrdPrcMngDupl = function()
        {
        	if ( this.gfn_isNull(this.div_form1.form.edt_prdId.value) || this.gfn_isNull(this.div_form1.form.edt_bzplcId.value) )
        	{
        		return false;
        	}
        	this.ds_master.setColumn(0,"SALS_DSGN_SALSPRC_STR_DTM",this.lvGetDateTime);
        	this.ds_master.setColumn(0,"SALS_DSGN_SALSPRC_END_DTM","99991231235959");
        	this.ds_master.setColumn(0,"BSS_SALSPRC_USEYN","N");
        	this.ds_master.setColumn(0,"EXPT_PRFRT","0");
        	this.div_form1.form.chk_bssSalsprc.set_value(0);
        	this.ds_master.setColumn(0,"DISP_STATS_CHGRSN",null);
        	this.ds_master.setColumn(0,"RND_USCUST_DISP_STATS_CHGRSN",null);
        	return true;
        }
        /**
          * 상품ID, 사업장 선택 후 기등록여부 체크
          */
        this.fn_OnlyPrdPrcMngDupl = function()
        {
        	if(!this.fn_PreOnlyPrdPrcMngDupl())
        	{
        		return false;
        	}
        	var strSvc      = "OnlyPrdPrcMngDupl";
            var strUrl      = "/rd/only-prd-prc-mng/select-only-prd-prc-mng-dupl.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_prcInfo=ds_prcInfo";
        	    strOutDs   += " ds_prdBasisInfo=ds_prdBasisInfo";
        		strOutDs   += " ds_cprtcpReqInfoInq=ds_cprtcpReqInfoInq";
        		strOutDs   += " ds_cprtcpReqAttcFile=ds_cprtcpReqAttcFile";
        		strOutDs   += " ds_purcInfo=ds_purcInfo";
        		strOutDs   += " ds_catgRcmdInq=ds_catgRcmdInq";
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

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostOnlyPrdPrcMngDupl = function()
        {
        	if ( this.duplCount > 0 )
        	{
        		this.flag = "U";
        // 		this.div_form2.set_height(this.div_form2.uMaxSize);
        // 		this.set_height(760);
        // 		this.sta_bg.set_bottom(-360);
        // 		this.set_scrolltype('both');
        // 		this.resetScroll();
        		this.fn_setResetBtnCall();
        		this.fn_Ret();
        	} else
        	{
        		this.flag = "A";
        		this.fn_OprUnitInfo();
        		this.fn_OnlyPrdPrcMngDtl();
        		this.fn_changeSearchArea(toggFlag);
        	}
        }

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
        	var dispChk = false;
        	var oldDispChk = false;
        	if ( this.gfn_isNull(this.ds_master.getColumn(0,"PRD_ID")) )
        	{
        		this.fn_alert("ERRS000144","저장","상품ID ","information");      // 상품ID (&1은(는) 필수입력사항입니다.)
        		return false;
        	}
        	if ( this.gfn_isNull(this.ds_master.getColumn(0,"BZPLC_ID")) )
        	{
        		this.fn_alert("ERRS000144","저장","사업장 ","information");      // 상품ID (&1은(는) 필수입력사항입니다.)
        		return false;
        	}

        	if ( this.ds_oprUnitInfo.rowcount == 0 )
        	{
        		this.fn_alert("ERRR000198","저장","운영단위 ","information"); // 운영단위 (&1 정보가 없습니다.)
        		return false;
        	}
        	if ( this.ds_oprUnitInfo.rowcount > 0 )
        	{
        		for ( var i=0; i<this.ds_oprUnitInfo.rowcount; i++)
        		{
        			if( this.gfn_isNull(this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CD")) )
        			{
        				this.fn_alert("ERRS000144","저장","진열상태 ","information");      // 진열상태 (&1은(는) 필수입력사항입니다.)
        				var nRow = this.ds_oprUnitInfo.findRow("OPR_UNIT_ID",this.ds_oprUnitInfo.getColumn(i,"OPR_UNIT_ID"));
        				if(nRow > -1)
        				{
        					this.ds_oprUnitInfo.set_rowposition(nRow);
        				}
        				// 진열상태 로우찾기
        				return false;
        			}
        			if (this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CD") == "40")
        			{
        				dispChk = true;
        			}
        			/**
        			 *진열상태변경사유는 최초등록시는 체크 하지 않음
        			 *진열상태 변경시 진열상태변경사유 등록 필수 체크
        			 */
        			if ( !this.gfn_isNull(this.ds_oprUnitInfo.getColumn(i,"OLD_DISP_STATS_CD")) && this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CD") != this.ds_oprUnitInfo.getColumn(i,"OLD_DISP_STATS_CD") )
        			{
        				oldDispChk = true;
        			}
        		}
        	}
        	if ( !this.div_form1.form.chk_bssSalsprc.value )
        	{
        		if ( this.gfn_isNull(this.div_form1.form.edt_salsDsgnSalsprc.value) )
        		{
        			this.fn_alert("ERRS000144","저장","영업지정판매가 ","information");      // 영업지정판매가 (&1은(는) 필수입력사항입니다.)
        			return false;
        		}
        	}
        	// 영업지정판매가 시작유효기간 필수체크
        	if(this.gfn_isNull(this.div_form1.form.cal_vldPerdDtStr.value))
        	{
        		this.fn_alert("ERRS000144","저장","영업지정판매가 ","information");      // 영업지정판매가 (&1은(는) 필수입력사항입니다.)
        		this.div_form1.form.cal_vldPerdDtStr.setFocus();
        		return false;
        	} else
        	{
         		var vldPerdDtStr = this.ds_master.getColumn("0","SALS_DSGN_SALSPRC_STR_DTM");
         		var oldVldPerdDtStr = this.ds_master.getColumn("0","OLD_SALS_DSGN_SALSPRC_STR_DTM");
         		if ( this.gfn_isNull(oldVldPerdDtStr) || vldPerdDtStr.substr(0,14) != oldVldPerdDtStr.substr(0,14) )
         		{
         			if ( vldPerdDtStr.substr(0,14) < this.lvGetDateTime.substr(0,14) )
         			{
         				this.fn_alert("ERRR000203","저장","영업지정판매가 시작유효기간 ","information");
        				return false;
         			}
         		} else if ( vldPerdDtStr.substr(0,14) == oldVldPerdDtStr.substr(0,14) )
        		{
        			// 기준판매가 여부가 변경되었을경우 현재시간 셋팅
        			if ( this.oldBssSalsprcUseYn != this.ds_master.getColumn(0,"BSS_SALSPRC_USEYN") )
        			{
        				this.ds_master.setColumn(0,"SALS_DSGN_SALSPRC_STR_DTM",this.lvGetDateTime.substr(0,14));
        			}
        			// 기준판매가여부N이고 영업지정판매가 변경되었을경우
        			if ( this.ds_master.getColumn(0,"BSS_SALSPRC_USEYN") == "N" && ( parseInt(this.oldSalsDsgnSalsprc,10) != parseInt(this.ds_master.getColumn(0,"SALS_DSGN_SALSPRC")) ) )
        			{
        				this.ds_master.setColumn(0,"SALS_DSGN_SALSPRC_STR_DTM",this.lvGetDateTime.substr(0,14));
        			}
        		}
        	}
        	// 영업지정판매가 유효기간 일자 체크
        	if(!this.fn_getDefaultDateTimeChk(this.div_form1.form.cal_vldPerdDtStr
        							 ,this.div_form1.form.cal_vldPerdDtEnd
        							 ,"영업지정판매가 유효기간"
        							 ,false))
        	{
        		return false;
        	}
        	if ( oldDispChk && this.gfn_isNull(this.div_form1_00.form.edt_dispStatsChgrsn.value) )
        	{
        		this.fn_alert("ERRS000144","저장","진열상태변경사유 ","information");      // 진열상태변경사유 (&1은(는) 필수입력사항입니다.)
        		return false;
        	}
        // 	if ( dispChk )
        // 	{
        // 		if ( this.gfn_isNull(this.div_form1_00.form.edt_rndUscustDispStatsChgrsn.value) )
        // 		{
        // 			this.fn_alert("ERRR000199","저장","일시품절/단종사유 ","information");      // 일시품절/단종사유 (&1 을(를) 입력해 주세요.)
        // 			return false;
        // 		}
        // 	}
        	if (this.ds_oprUnitInfo.getRowCount() > 0 )
        	{
        		for ( var i =0; i<this.ds_oprUnitInfo.getRowCount(); i++)
        		{
        			if ( this.ds_oprUnitInfo.getRowType(i) == 4 || this.ds_oprUnitInfo.getRowType(i) == 2 )
        			{
        				this.ds_oprUnitInfo.setColumn(i,"PRD_ID", this.ds_master.getColumn(0, "PRD_ID"));
        				this.ds_oprUnitInfo.setColumn(i,"NEW_PRD_REQ_NO", this.ds_search.getColumn(0, "NEW_PRD_REQ_NO"));
        			}
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
            var strUrl      = "/rd/only-prd-prc-mng/save-only-prd-prc-mng-dtl.do";
            var strInDs     = "ds_master=ds_master:u";
        	    strInDs    += " ds_oprUnitInfo=ds_oprUnitInfo:u";
        		strInDs    += " ds_prcInfo=ds_prcInfo:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로

        	this.gfn_transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
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
        	09. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRN000053", "취소","", "question" ); // 취소 하시겠습니까?
            if(result == 1)
            {
        		this.close("CLOSE");
        	}
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRN000053", "취소","", "question" ); // 취소 하시겠습니까?
            if(result == 1)
            {
        		this.close("EXIT");
        	}
        };

        /**********************************************************************
        	08.Get, Set Method
        ***********************************************************************/
         /**********************************************************************
        	09.기타 Control Event
        ***********************************************************************/

        this.grd_list_oncellclick = function(obj,e)
        {
         	var strCoCd             = this.ds_purcInfo.getColumn(e.row,"CO_CD");
        	var strPrdId            = this.ds_purcInfo.getColumn(e.row,"PRD_ID");
        	var strCprtcpId         = this.ds_purcInfo.getColumn(e.row,"CPRTCP_ID");
        	var strCprtcpNm         = this.ds_purcInfo.getColumn(e.row, "CPRTCP_KOR_NM");
        	if(e.cell == obj.getBindCellIndex("body","COND") )
         	{
         		var params  = { coCd : strCoCd, prdId : strPrdId, cprtcpId:strCprtcpId };
        		var options = { title  : "Condition" };
        		this.gfn_openPopup("COND", "PC::SSP_BO_CA_25.xfdl", params, "fn_popupCallback", options);
         	} else if( e.cell == obj.getBindCellIndex("body","DLV_PSB_AREA") )
        	{
        		var params  = { cprtcpId : strCprtcpId, cprtcpNm : strCprtcpNm };
        		var options = { title  : "배송가능지역" };
        		this.gfn_openPopup("COND", "PC::SSP_BO_CA_26.xfdl", params, "fn_popupCallback", options);

        	}

        };

        // 수정 버튼 클릭 이벤트
        this.btn_update_onclick = function(obj,e)
        {
        	this.flag = "U";
        	this.fn_setResetBtnCall();
        	this.fn_Ret();
        };

        this.Div00_btn_dispStatHst_onclick = function(obj,e)
        {
        	var strCoCd             = this.ds_dispInfo.getColumn(0,"CO_CD");
        	var strPrdId            = this.ds_dispInfo.getColumn(0,"PRD_ID");
        	var strBzplcId          = this.ds_dispInfo.getColumn(0,"BZPLC_ID");

        	var params = { coCd           : strCoCd             // 회사코드
        				 , prdId          : strPrdId            // 상품ID
        				 , reqGubun        : "10"    	          // 요청구분 [진열상태변경이력:10]
        				 , autoSearch      : "Y"                  // 팝업 오픈시 자동조회 여부
        				 };

        	this.fn_setCallPopup(params);
        };

        this.tabMain_tabSub02_btn_condHst_onclick = function(obj,e)
        {
        	var strPrdId = this.ds_prdBasisInfo.getColumn(0,"PRD_ID");
        	var strBzplcId = "*";
        	var params  = { prdId : this.ds_prdBasisInfo.getColumn(0,"PRD_ID")
        					,bzplcId:strBzplcId };
        	var options = { title  : "Condition 이력조회" };
        	this.gfn_openPopup("SSP_BO_CA_29", "PC::SSP_BO_CA_29.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 상단 협력사 파일첨부 더블 클릭시 oncelldblclick 이벤트 발생 처리
         */
        this.grd_fileList_oncelldblclick = function(obj,e)
        {
        	this.ds_uploadResult.clearData();
        	var nRow = this.ds_uploadResult.addRow();
        	this.ds_uploadResult.copyRow(nRow,this.ds_gridFilelist,e.row);

        	this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.tabMain.tabSub01.form.FileDownload);
        };

        /**
         * 상단 협력사 이미지 파일 더블 클릭시 oncelldblclick 이벤트 발생 처리
         */
        this.grd_imageList_oncelldblclick = function(obj,e)
        {
        	if(this.gfn_nvl(this.ds_imageList.getColumn(e.row,"ATFL_NM_"+(e.cell+1)),"") != "")
        	{
        		this.ds_uploadResult.clearData();
        		var nRow = this.ds_uploadResult.addRow();
        		this.ds_uploadResult.setColumn(nRow,"ATFL_NM",       this.ds_imageList.getColumn(e.row,"ATFL_NM_"+(e.cell+1)));
        		this.ds_uploadResult.setColumn(nRow,"ORI_ATFL_NM",   this.ds_imageList.getColumn(e.row,"ORI_ATFL_NM_"+(e.cell+1)));
        		this.ds_uploadResult.setColumn(nRow,"ATFL_STOR_PATH",this.ds_imageList.getColumn(e.row,"ATFL_STOR_PATH_"+(e.cell+1)));

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.div_form2.form.tabMain.tabSub03.form.FileDownload);
        	}
        };
        this.btn_clear_onclick = function(obj,e)
        {
        	var result = this.fn_confirm("ERRR000001", "초기화","","question" ); // 현재 입력하는 내용을 초기화 합니다.

            if(result == 0)
            {
                return false;
            }
        	if ( this.flag == "I" || this.flag == "A" )
        	{
        		this.flag = "I";
        		this.ds_master.clearData();
        		this.ds_oprUnitInfo.clearData();
        		this.ds_prcInfo.clearData();
        		this.ds_prdBasisInfo.clearData();
        		this.ds_cprtcpReqInfoInq.clearData();
        		this.ds_cprtcpReqAttcFile.clearData();
        		this.ds_purcInfo.clearData();
        		this.ds_catgRcmdInq.clearData();
        		this.fn_setResetBtnCall();
        	} else
        	{
        		this.fn_Ret();
        	}
        };

        /**
         * 상품ID 단일조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_form1_btn_prdIdPopup_onclick = function(obj,e)
        {
        	var params  = { pubOnlySprCd : "E" , coCd : this.lv_coCd, mallSprCd : this.mallSprCd ,prdId : this.div_form1.form.edt_prdId.value };
            var options = { title        : this.div_form1.form.stc_prdId.text };

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_38.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 사업장 단일조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_form1_btn_bzplcPopup_onclick = function(obj,e)
        {
        	var params  = { coCd : this.lv_coCd };
        	var options = { title  : this.div_form1.form.stc_bzplcId.text };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_22.xfdl", params, "fn_popupCallback", options);
        };

        this.div_form1_grid_oprUnitNm_oncellclick = function(obj,e)
        {
        	// 진열상태 체크박스 값 변경시 이벤트 발생
        	if(this.flag != "R")
        	{
        		if(obj.getCellProperty("body",e.cell,"subsumtext") != null)
        		{
        			// 진열상태코드[10:진열,20:미진열,30:일시품절,40:단종]
        			var arrayList = [['1','10'],['2','20'],['3','30'],['4','40']];
        			var len       = obj.getCellProperty("body",e.cell,"subsumtext");

        			for(var idx=0; idx<arrayList.length; idx++)
        			{
        				var nRow   = arrayList[idx][0];
        				var nValue = arrayList[idx][1];

        				if(nRow == len)
        				{
        					this.ds_oprUnitInfo.setColumn(e.row,"DISP_STATS_CD",nValue);
        					this.ds_oprUnitInfo.setColumn(e.row,"DISP_STATS_CD"+len,1);
        				}
        				else
        				{
        					this.ds_oprUnitInfo.setColumn(e.row,"DISP_STATS_CD"+nRow,"");
        				}
        			}
        		}
        	}
        };

        /**
         * 운영단위 그리드 컬럼값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_oprUnitInfo_oncolumnchanged = function(obj,e)
        {
        	if(this.flag != "R")
        	{
        		// 진열상태 체크박스 값 변경시 이벤트 발생
        		if(e.columnid.indexOf("DISP_STATS_CD") != -1)
        		{
        			// 진열상태코드[10:진열,20:미진열,30:일시품절,40:단종]
        			var arrayList = [['1','10'],['2','20'],['3','30'],['4','40']];
        			var len       = e.columnid.substr(e.columnid.length-1);

        			for(var idx=0; idx<arrayList.length; idx++)
        			{
        				var nRow   = arrayList[idx][0];
        				var nValue = arrayList[idx][1];

        				if(nRow == len)
        				{
        					obj.setColumn(e.row,"DISP_STATS_CD",nValue);
        					obj.setColumn(e.row,"DISP_STATS_CD"+len,1);
        				}
        				else
        				{
        					obj.setColumn(e.row,"DISP_STATS_CD"+nRow,"");
        				}
        			}
        		}
        	}
        };
        //기준판매가 사용여부
        this.div_form1_chk_bssSalsprc_onchanged = function(obj,e)
        {
        	var lwstBuyPrc = this.ds_prcInfo.getColumn(0,"BSS_PCPRC");  // 최저매입가
        	var salsprc = null;
        	if ( this.div_form1.form.chk_bssSalsprc.value) {
        		this.ds_master.setColumn(0,"BSS_SALSPRC_USEYN","Y");
        		this.div_form1.form.edt_salsDsgnSalsprc.set_readonly(true);
        		var salsprc = this.ds_prcInfo.getColumn(0,"SSP_BSS_SALSPRC"); // 기준판매가
        	} else {
        		this.ds_master.setColumn(0,"BSS_SALSPRC_USEYN","N");
        		this.div_form1.form.edt_salsDsgnSalsprc.set_readonly(false);
        		var salsprc = this.ds_master.getColumn(0,"SALS_DSGN_SALSPRC"); // 영업지정판매가
        	}
        	if ( this.gfn_isNull(lwstBuyPrc) ) {
        		this.ds_master.setColumn(0,"EXPT_PRFRT",0);
        	} else {
        		this.ds_master.setColumn(0,"EXPT_PRFRT",nexacro.round((1-(lwstBuyPrc/salsprc))*100, 2));
        	}
        };

        // 버튼(확장.접기)
        this.btn_extend_onclick = function(obj,e)
        {
        	if(this.bExtend == false)   this.setExtend(true);
            else                        this.setExtend(false);
        };

        this.setExtend = function(bVal)
        {
        	if( this.ds_oprUnitInfo.rowcount == 0 )
        	{
        		return false;
        	}
            if(bVal)
            {
        		this.div_form1.form.btn_extend.set_text("∧");
                this.bExtend = true;
                this.fn_changeSearchArea(false);
            }
            else
            {
        		this.div_form1.form.btn_extend.set_text("∨");
                this.bExtend = false;
                this.fn_changeSearchArea(true);
            }
        };

        // this.fn_changeSearchArea = function(flag) {
        //     // 접기
        // 	if( this.ds_oprUnitInfo.rowcount == 0 && flag == false )
        // 	{
        // 		return false;
        // 	}
        // 	// 접기
        //     if (flag == true) {
        // 		this.div_form1.set_height(this.div_form1.uMinSize);
        // 		this.div_form1_00.set_top(392);
        // 		this.div_form2.set_top(496);
        // 	}
        //     // 펼치기
        //     else	{
        // 		this.div_form1.set_height(this.div_form1.uMaxSize);
        // 		this.div_form1_00.set_top(487);
        // 		this.div_form2.set_top(591);
        // 	}
        // 	//this.resetScroll();
        // };

        this.fn_changeSearchArea = function(flag) {
                    // 접기
                    if (flag == true) {
                		toggFlag = true;

                		this.div_form1.set_height(this.div_form1.uMinSize);
                		this.div_form1_00.set_top(422);
                		this.div_form2.set_top(526);
                		if(this.flag == "I"){
                			this.div_form2.set_height(this.div_form2.uMinSize);
                			this.set_height(530);
                			this.set_scrolltype('none');
                		}else{
                			this.div_form2.set_height(this.div_form2.uMaxSize);
                			this.set_height(730);
                			this.set_scrolltype('both');
                		}
                	}
                    // 펼치기
                    else	{
                		toggFlag = false;

                		this.div_form1.set_height(this.div_form1.uMaxSize);
                		this.div_form1_00.set_top(560);
                		this.div_form2.set_top(656);

                		if(this.flag == "I"){
                			this.div_form2.set_height(this.div_form2.uMinSize);
                			this.set_height(630);
                			this.set_scrolltype('none');
                		}else{
                			this.div_form2.set_height(this.div_form2.uMaxSize);
                			this.set_height(730);
                			this.set_scrolltype('both');
                		}
                	}
                };

        /**
         * 상단 협력사 파일첨부 더블 클릭시 oncelldblclick 이벤트 발생 처리
         */
        this.grd_fileList_oncelldblclick = function(obj,e)
        {
        	this.ds_uploadResult.clearData();
        	var nRow = this.ds_uploadResult.addRow();
        	this.ds_uploadResult.copyRow(nRow,this.ds_gridFilelist,e.row);

        	this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.div_form2.form.tabMain.tabSub03.form.FileDownload);
        };

        /**
         * 상단 협력사 이미지 파일 더블 클릭시 oncelldblclick 이벤트 발생 처리
         */
        this.grd_imageList_oncelldblclick = function(obj,e)
        {
        	if(this.gfn_nvl(this.ds_imageList.getColumn(e.row,"ATFL_NM_"+(e.cell+1)),"") != "")
        	{
        		this.ds_uploadResult.clearData();
        		var nRow = this.ds_uploadResult.addRow();
        		this.ds_uploadResult.setColumn(nRow,"ATFL_NM",       this.ds_imageList.getColumn(e.row,"ATFL_NM_"+(e.cell+1)));
        		this.ds_uploadResult.setColumn(nRow,"ORI_ATFL_NM",   this.ds_imageList.getColumn(e.row,"ORI_ATFL_NM_"+(e.cell+1)));
        		this.ds_uploadResult.setColumn(nRow,"ATFL_STOR_PATH",this.ds_imageList.getColumn(e.row,"ATFL_STOR_PATH_"+(e.cell+1)));

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.div_form2.form.tabMain.tabSub03.form.FileDownload);
        	}
        };

        /**
         * 배지 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.cbo_sbiDocRegId_onitemchanged = function(obj,e)
        {
        	var nRow     = this.ds_bgList.findRow("BG_SEQ",e.postvalue);
        	var imageUrl = "";

        	this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyStrDtm.set_readonly(true);	// 배지 적용시작일자 비활성화
        	this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyEndDtm.set_readonly(true);	// 배지 적용종료일자 비활성화
        	this.div_form2.form.tabMain.tabSub02.form.chk_lmt.set_enable(false);				// 배지 제한없음 체크박스 비활성화

        	if(nRow > 0)
        	{
        		var filePath 	= this.ds_bgList.getColumn(nRow,"ATFL_STOR_PATH");
        		var fileOrgName = this.ds_bgList.getColumn(nRow,"ATFL_NM");
        		var fileName    = this.ds_bgList.getColumn(nRow,"ORI_ATFL_NM");

        		imageUrl = this.fn_imageViewerUrl(filePath,fileOrgName,fileName);

        		this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyStrDtm.set_value(this.lvGetDate);	// 배지 적용시작일자 오늘 날짜 기본 Set
        		this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyStrDtm.set_readonly(false);			// 배지 적용시작일자 활성화
        		this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyEndDtm.set_value(this.lvGetDate);	// 배지 적용종료일자 오늘 날짜 기본 Set
        		this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyEndDtm.set_readonly(false);			// 배지 적용종료일자 활성화
        		this.div_form2.form.tabMain.tabSub02.form.chk_lmt.set_value(false);						// 배지 제한없음 체크박스 값 초기화
        		this.div_form2.form.tabMain.tabSub02.form.chk_lmt.set_enable(true);						// 배지 제한없음 체크박스 활성화
        	}

        	this.div_form2.form.tabMain.tabSub02.form.ImageViewer.set_image(imageUrl);
        };

        /**
         * 배지 [제한없음] 체크박스 값 변경시 onchanged 이벤트 발생 처리
         */
        this.chk_lmt_onchanged = function(obj,e)
        {
        	this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyStrDtm.set_readonly(false);	// 배지 적용시작일자 활성화
        	this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyEndDtm.set_readonly(false);	// 배지 적용종료일자 활성화

        	if(e.postvalue)
        	{
        		this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyStrDtm.set_value(this.lvGetDate);	// 배지 적용시작일자 오늘 날짜 기본 Set
        		this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyStrDtm.set_readonly(true);			// 배지 적용시작일자 비활성화
        		this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyEndDtm.set_value("99991231");		// 배지 적용종료일자 99991231 기본 Set
        		this.div_form2.form.tabMain.tabSub02.form.cal_bgAplyEndDtm.set_readonly(true);			// 배지 적용종료일자 비활성화
        	}
        };
        this.div_form1_btn_dispStatHst_onclick = function(obj,e)
        {
        	var strCoCd             = this.ds_master.getColumn(0,"CO_CD");
        	var strPrdId            = this.ds_master.getColumn(0,"PRD_ID");
        	var strBzplcId          = this.ds_master.getColumn(0,"BZPLC_ID");

        	if ( this.gfn_isNull(strPrdId) || this.gfn_isNull(strBzplcId) )
        	{
        		return false;
        	}

        	var params = { coCd           : strCoCd             // 회사코드
        				 , prdId          : strPrdId            // 상품ID
        				 , bzplcId        : strBzplcId          // 사업장ID
        				 , reqGubun        : "10"    	          // 요청구분 [진열상태변경이력:10]
        				 , autoSearch      : "Y"                  // 팝업 오픈시 자동조회 여부
        				 };

        	this.fn_setCallPopup(params);
        };

        /*
         * 이력 팝업
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	= "Y";						         // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	= params.autoSearch;		         // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 = params.coCd;		                 // 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02 = params.prdId;		             // 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03 = params.bzplcId;		        		 // 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04 = "E";		   		 // 부모에서 넘어가는 파라미터(폼경로)

        	var sPopId 		= "";
        	var sUrl 		= "";

        	// 요청구분 [등록:10,상세:20]
        	switch(params.reqGubun)
        	{
        		case "10" :
        		     sPopId = "SSP_BO_LA_30";
        		     sUrl 	= "RD::SSP_BO_LA_30.xfdl";
        		     break;
        		case "20" :
        		     sPopId = "SSP_BO_LA_27";
        		     sUrl 	= "RD::SSP_BO_LA_27.xfdl";
        		     break;
        		default : break;
        	}

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
         *  진열상태 변경사유가 변경 되었을경우
         */
        this.div_form1_00_edt_dispStatsChgrsn_onchanged = function(obj,e)
        {
        	if ( this.ds_oprUnitInfo.rowcount > 0 )
        	{
        		for ( var i=0; i<this.ds_oprUnitInfo.rowcount; i++ )
        		{
        			if ( this.ds_oprUnitInfo.getRowType(i) != 2 )
        			{
        				this.ds_oprUnitInfo.set_updatecontrol(false);
        				this.ds_oprUnitInfo.setRowType(i,4);
        				this.ds_oprUnitInfo.set_updatecontrol(true);
        			}
        		}
        	}
        };

        /**
         *  일시품절/단종사유가 변경 되었을 경우
         */
        this.div_form1_00_edt_rndUscustDispStatsChgrsn_onchanged = function(obj,e)
        {
        	if ( this.ds_oprUnitInfo.rowcount > 0 )
        	{
        		for ( var i=0; i<this.ds_oprUnitInfo.rowcount; i++ )
        		{
        			if ( this.ds_oprUnitInfo.getRowType(i) != 2 &&this.ds_oprUnitInfo.getColumn(i,"DISP_STATS_CD") == "40" )
        			{
        			this.ds_oprUnitInfo.set_updatecontrol(false);
        			this.ds_oprUnitInfo.setRowType(i,4);
        			this.ds_oprUnitInfo.set_updatecontrol(true);
        			}
        		}
        	}
        };

        /**
         * 가격변동이력 팝업
         */
        this.div_form2_tabMain_tabSub01_btn_bssSalsprcCurst_onclick = function(obj,e)
        {
        	var strCoCd             = this.ds_master.getColumn(0,"CO_CD");
         	var strPrdId            = this.ds_master.getColumn(0,"PRD_ID");

        	var params = { reqGubun        : "20"    	          // 요청구분 [진열상태변경이력:10]
        				 , autoSearch      : "Y"                  // 팝업 오픈시 자동조회 여부
        				 , coCd            : strCoCd
        				 , prdId           : strPrdId
        				 };

        	this.fn_setCallPopup(params);
        };
        /*
         * 영업지정판매가 변경시 예상매익률 변경
         */
        this.edt_salsDsgnSalsprc_onchanged = function(obj,e)
        {
        	var lwstBuyPrc = this.ds_prcInfo.getColumn(0,"BSS_PCPRC");
        	var salsprc = obj.value;
        	if ( this.gfn_isNull(lwstBuyPrc) ) {
        		this.ds_master.setColumn(0,"EXPT_PRFRT",0);
        	} else {
        		this.ds_master.setColumn(0,"EXPT_PRFRT",nexacro.round((1-(lwstBuyPrc/salsprc))*100, 2));
        	}
        };

        /**
         * 상품ID Edit 키 값 변경시 이벤트 발생 처리
         */
        this.div_form1_edt_prdId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_form1.form.edt_prdNm.set_value("");
        		this.div_form1.form.edt_prdClcd.set_value("");
        		this.div_form1.form.edt_prdClcdNm.set_value("");
        		this.div_form1.form.edt_reprSpec.set_value("");
        		this.div_form1.form.edt_mnfrNo.set_value("");
        		this.div_form1.form.edt_mnfrNm.set_value("");
        		this.div_form1.form.edt_odrUnit.set_value("");
        		this.div_form1_00.form.edt_dispStatsChgrsn.set_value("");
        		this.div_form1_00.form.edt_rndUscustDispStatsChgrsn.set_value("");
        		this.ds_oprUnitInfo.clearData();
        		this.ds_prcInfo.clearData();
        		this.ds_purcInfo.clearData();
        		this.ds_prdBasisInfo.clearData();
        		this.ds_catgRcmdInq.clearData();
        		this.ds_cprtcpReqInfoInq.clearData();
        		this.ds_cprtcpReqAttcFile.clearData();
        		this.div_form2.set_height(this.div_form2.uMinSize);
        		this.set_height(500);
        		this.set_scrolltype('none');
        	}
        };

        /**
         * 상품ID Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_form1_edt_prdId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_form1.form.edt_prdId.value);

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
        		this.ds_input.setColumn(nRow,"PRD_ID",     sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD","20");
        		this.ds_input.setColumn(nRow,"PUB_ONLY_SPR_CD", "E");
        		this.ds_input.setColumn(nRow,"START_NUM",  "0");
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-product-popup-list.do";
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
        		this.div_form1.form.edt_prdId.set_value(this.ds_popupList.getColumn(0,"PRD_ID_VIEW"));
        		this.div_form1.form.edt_prdNm.set_value(this.ds_popupList.getColumn(0,"PRD_NM"));
         		this.ds_master.setColumn(0,"PRD_ID",this.ds_popupList.getColumn(0,"PRD_ID"));
        		this.ds_master.setColumn(0,"PRD_CLCD",this.ds_popupList.getColumn(0,"PRD_CLCD"));
        		this.ds_master.setColumn(0,"PRD_CLCD_NM",this.ds_popupList.getColumn(0,"FULL_PRD_CLSF_NM"));
        		this.ds_master.setColumn(0,"MNFR_NO",this.ds_popupList.getColumn(0,"MNFR_NO"));
        		this.ds_master.setColumn(0,"MNFR_NM",this.ds_popupList.getColumn(0,"MNFR_NM"));
        		this.ds_master.setColumn(0,"ATTR_VAL",this.ds_popupList.getColumn(0,"ATTR_VAL"));
        		this.ds_search.setColumn(0,"PRD_ID",this.ds_popupList.getColumn(0,"PRD_ID"));

         		this.fn_OnlyPrdPrcMngDupl();
        	}
        	else
        	{
        		var params  = { prdId : sCodeId, coCd : this.lv_coCd , mallSprCd : this.mallSprCd, pubOnlySprCd : "E" };
        		var options = { title  : "상품ID 단일조회" };
        		this.gfn_openPopup("btn_prdIdPopup", "PR_POP::SSP_BO_PP_38.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 사업장 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_form1_edt_bzplcId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_form1.form.edt_bzplcNm.set_value("");
        		this.div_form1_00.form.edt_dispStatsChgrsn.set_value("");
        		this.div_form1_00.form.edt_rndUscustDispStatsChgrsn.set_value("");
        		this.ds_oprUnitInfo.clearData();
        		this.ds_prcInfo.clearData();
        		this.ds_purcInfo.clearData();
        		this.ds_prdBasisInfo.clearData();
        		this.ds_catgRcmdInq.clearData();
        		this.ds_cprtcpReqInfoInq.clearData();
        		this.ds_cprtcpReqAttcFile.clearData();
        		this.div_form2.set_height(this.div_form2.uMinSize);
        		this.set_height(500);
        		this.set_scrolltype('none');
        	}
        };
        /**
         * 조회조건 사업장 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_form1_edt_bzplcId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_form1.form.edt_bzplcId.value);
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
        		this.ds_input.setColumn(nRow,"CO_CD",      this.lv_coCd);
        		this.ds_input.setColumn(nRow,"BZPLC_ID",   sCodeId);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/co/popup/select-bzplc-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=ds_output1";                               // 물리적 생성 ds_popupList
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
        		this.div_form1.form.edt_bzplcId.set_value(this.ds_popupList.getColumn(0,"BZPLC_ID"));
        		this.div_form1.form.edt_bzplcNm.set_value(this.ds_popupList.getColumn(0,"BZPLC_NM"));
        		this.ds_search.setColumn(0,"BZPLC_ID",this.ds_popupList.getColumn(0,"BZPLC_ID"));
        		this.fn_OnlyPrdPrcMngDupl();

        	} else
        	{
        		var params  = { coCd  : this.lv_coCd};
        		var options = { title : "사업장" };

        		this.gfn_openPopup( "SSP_BO_PP_22"
        		                  , "CO_POP::SSP_BO_PP_22.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);

        	}
        };

        this.div_form1_edt_salsDsgnSalsprc_canchange = function(obj,e)
        {
        	var salsDsgnSalsprc = new nexacro.Decimal(obj.value);
        	if (salsDsgnSalsprc <= 0 )
        	{
        		return false;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_update.addEventHandler("onclick",this.btn_update_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_close_onclick,this);
            this.div_form1.form.edt_prdId.addEventHandler("oninput",this.div_form1_edt_prdId_oninput,this);
            this.div_form1.form.edt_prdId.addEventHandler("onkeyup",this.div_form1_edt_prdId_onkeyup,this);
            this.div_form1.form.btn_prdIdPopup.addEventHandler("onclick",this.div_form1_btn_prdIdPopup_onclick,this);
            this.div_form1.form.chk_bssSalsprc.addEventHandler("onchanged",this.div_form1_chk_bssSalsprc_onchanged,this);
            this.div_form1.form.grid_oprUnitNm.addEventHandler("oncellclick",this.div_form1_grid_oprUnitNm_oncellclick,this);
            this.div_form1.form.btn_extend.addEventHandler("onclick",this.btn_extend_onclick,this);
            this.div_form1.form.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.div_form1.form.edt_salsDsgnSalsprc.addEventHandler("onchanged",this.edt_salsDsgnSalsprc_onchanged,this);
            this.div_form1.form.edt_salsDsgnSalsprc.addEventHandler("canchange",this.div_form1_edt_salsDsgnSalsprc_canchange,this);
            this.div_form1.form.edt_bzplcId.addEventHandler("oninput",this.div_form1_edt_bzplcId_oninput,this);
            this.div_form1.form.edt_bzplcId.addEventHandler("onkeyup",this.div_form1_edt_bzplcId_onkeyup,this);
            this.div_form1.form.btn_bzplcPopup.addEventHandler("onclick",this.div_form1_btn_bzplcPopup_onclick,this);
            this.div_form1.form.btn_dispStatHst.addEventHandler("onclick",this.div_form1_btn_dispStatHst_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.div_form1_00.form.edt_dispStatsChgrsn.addEventHandler("onchanged",this.div_form1_00_edt_dispStatsChgrsn_onchanged,this);
            this.div_form1_00.form.edt_rndUscustDispStatsChgrsn.addEventHandler("onchanged",this.div_form1_00_edt_rndUscustDispStatsChgrsn_onchanged,this);
            this.div_form2.form.tabMain.tabSub01.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.div_form2.form.tabMain.tabSub01.form.btn_bssSalsprcCurst.addEventHandler("onclick",this.div_form2_tabMain_tabSub01_btn_bssSalsprcCurst_onclick,this);
            this.div_form2.form.tabMain.tabSub02.form.edt_reqPrdNm.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.div_form2.form.tabMain.tabSub02.form.edt_reqPrdNm.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.div_form2.form.tabMain.tabSub02.form.edt_mnfrNo.addEventHandler("oninput",this.edt_mnfrNo_oninput,this);
            this.div_form2.form.tabMain.tabSub02.form.edt_mnfrNo.addEventHandler("onkeyup",this.edt_mnfrNo_onkeyup,this);
            this.div_form2.form.tabMain.tabSub02.form.edt_basisUnitQty.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.div_form2.form.tabMain.tabSub02.form.edt_basisUnitQty.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.div_form2.form.tabMain.tabSub02.form.edt_ctrySprCd.addEventHandler("oninput",this.edt_ctrySprCd_oninput,this);
            this.div_form2.form.tabMain.tabSub02.form.edt_ctrySprCd.addEventHandler("onkeyup",this.edt_ctrySprCd_onkeyup,this);
            this.div_form2.form.tabMain.tabSub02.form.edt_prdClcd.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.div_form2.form.tabMain.tabSub02.form.edt_prdClcd.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.div_form2.form.tabMain.tabSub02.form.cbo_sbiDocRegId.addEventHandler("onitemchanged",this.cbo_sbiDocRegId_onitemchanged,this);
            this.div_form2.form.tabMain.tabSub02.form.chk_lmt.addEventHandler("onchanged",this.chk_lmt_onchanged,this);
            this.div_form2.form.tabMain.tabSub02.form.edt_sspPrdNm.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.div_form2.form.tabMain.tabSub02.form.edt_sspPrdNm.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.div_form2.form.tabMain.tabSub03.form.grd_imageList.addEventHandler("oncelldblclick",this.grd_imageList_oncelldblclick,this);
            this.div_form2.form.tabMain.tabSub03.form.grd_fileList.addEventHandler("oncelldblclick",this.grd_fileList_oncelldblclick,this);
            this.div_form2.form.tabMain.tabSub03.form.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.div_form2.form.tabMain.tabSub03.form.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_oprUnitInfo.addEventHandler("oncolumnchanged",this.ds_oprUnitInfo_oncolumnchanged,this);
            this.ds_prcInfo.addEventHandler("oncolumnchanged",this.ds_oprUnitInfo_oncolumnchanged,this);
            this.ds_prdBasisInfo.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_salsDsgnSalsprcHst.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_catgRcmdInq.addEventHandler("oncolumnchanged",this.ds_catgRcmdInq_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_LA_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
