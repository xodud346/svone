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
            this.set_titletext("공용상품 기준판매가 상세");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,971);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dlcst", this);
            obj._setContents("<ColumnInfo><Column id=\"DLCST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DLCST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_ITV_STR\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_ITV_END\" type=\"STRING\" size=\"256\"/><Column id=\"EXTR_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"TONG\" type=\"STRING\" size=\"256\"/><Column id=\"DLCST_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DLCST_END_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dsplayStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prPrdInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CATG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"RND_USCUST_DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_PSB_YN \" type=\"STRING\" size=\"256\"/><Column id=\"DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"HRM_CHM_MTL_YN \" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"SAFT_INVN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATG_KILR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DP_PRD_DISP_STATS_INFO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PC_CPRTCP_PRD_INFO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MNF_ORI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REPR_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_REPR_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dpPrdStatsInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_BSS_SALSPRC_VLD_PERD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_VLD_PERD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"32\"/><Column id=\"RND_USCUST_DISP_STATS_CHGRSN\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_INFO_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"SAFT_INVN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_SPL_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PCPRC_INC_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispStats", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubOnlySpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_txClcd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispInfo", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"RND_USCUST_DISP_STATS_CHGRSN\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OLD_DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_RND_USCUST_DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdBasisInfo", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_STD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"32\"/><Column id=\"HUB_HNL_DIS_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BG_APLY_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REPR_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"TX_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BG_APLY_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_ATTR_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"MTL_GRAVITY\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"STPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"OLD_PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"32\"/><Column id=\"QCK_DLV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DTL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"32\"/><Column id=\"MULT_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NUSE_RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PHASE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HUB_HNL_DIS_TP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REPR_PRD_GRP_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdPrcInfo", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_LT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MIN_ODR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"COND\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_PSB_AREA\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_VLD_PERD_SPR_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdPrcCurAply", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRK_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_VLD_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_STD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_CURR_BSS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHRT_APLY_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PLN_PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_BSS_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BSS_SALSPRC_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"INTL_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALSPRC_CAL_BSS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_PCPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_CAL_BSS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dcrt", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/><Row><Col id=\"COM_DTL_CD_NM\">원</Col><Col id=\"COM_DTL_CD\">10</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">%</Col><Col id=\"COM_DTL_CD\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdPrcQtyDc", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_ITV_STR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_ITV_END\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DC_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdPrcDlcst", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_ITV_STR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EXTR_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"QTY_ITV_END\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DLCST_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"DLCST_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DLCST_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DLCST_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dlcstSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">20</Col><Col id=\"COM_DTL_CD_NM\">배수주문</Col></Row><Row><Col id=\"COM_DTL_CD\">10</Col><Col id=\"COM_DTL_CD_NM\">일반</Col></Row></Rows>");
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
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","22",null,null,"0","0",null,null,null,null,this);
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

            obj = new Div("Div01","22","32","750","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_main","0","10","181","16",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("공용상품 기준판매가 상세");
            obj.set_cssclass("sta_WF_title01");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_cancel","1113","42","65","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","973","42",null,"28","161",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("초기화");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update","btn_clear:4","42",null,"28","btn_cancel:4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("수정");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","80",null,"838","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("stc_displayStatus","0","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("진열상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_dispStatsChgrsn","0","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("진열상태변경사유");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_02_00_00","130","31",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_rndUscustDispStatsChgrsn","0","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("일시품절/단종사유");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_02_00_00_00","130","62",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","108","347","28",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("*일시품절/단종사유는 고객에게 노출되니 신중히 작성 바랍니다.\r\n");
            obj.set_color("red");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","155","130","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("■ 상품 기본 정보");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","0","212","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec2","0","274","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_txClcd","0","336","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("과면세구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hashTag","0","367","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("해시Tag");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_dispStatsChgrsn","137","35","800","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_rndUscustDispStatsChgrsn","137","66","800","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_02","130","0",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_orgplc","499","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_00","120","181",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_03","120","367",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_04","120","336",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_06","120","274",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_07","120","212",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_prdStats","373","181","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("R&D상품상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_orgplc3","744","181","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_mnfr2","744","212","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_odrUnit2","744","274","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_bgNm","744","336","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("배지명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_brndNm","744","367","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("브랜드명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_orgplc","636","4","380","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","128","185","240","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_brndNm","870","371",null,"24","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_orgplc2","870","185",null,"24","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("bind:ORGPLC_CTRY_CD");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","128","216","470","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_hashTag","128","371","470","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_odrUnit2","870","278",null,"24","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec2","128","278","470","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mnfr2","870","216",null,"24","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_dispStatHst","1010","106",null,"28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("진열상태 이력");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_displayStatus","143","6","280","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_innerdataset("ds_dsplayStatus");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("horizontal");
            obj.set_enable("false");
            obj.set_columncount("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_pubOnlySpr","499","338","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_innerdataset("ds_pubOnlySpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_columncount("2");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySpr","373","336","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","181","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_03_00","120","305",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hubYn","0","305","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_text("Hub취급가능여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_hrmChmYn","373","305","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_saftInvnYn","744","305","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("재고여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_saftInvnYn","870","309",null,"24","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_prdStats","499","190","220","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            obj.set_enable("false");
            var Div00_form_rdo_prdStats_innerdataset = new nexacro.NormalDataset("Div00_form_rdo_prdStats_innerdataset", obj);
            Div00_form_rdo_prdStats_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">미사용</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">종결</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_rdo_prdStats_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_hrmChmYn","499","314","130","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_enable("false");
            var Div00_form_rdo_hrmChmYn_innerdataset = new nexacro.NormalDataset("Div00_form_rdo_hrmChmYn_innerdataset", obj);
            Div00_form_rdo_hrmChmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_rdo_hrmChmYn_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00","0","95","100%","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_01","0","170","100%","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00","0","135","100.00%","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","398","100.00%","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bgNm","870","340",null,"24","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_dispStats","stc_displayStatus:7","1","347","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_innerdataset("ds_dispStats");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_hubYn","128","309","240","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_txClcd","131","345","130","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_innerdataset("ds_txClcd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_columncount("2");
            obj.set_enable("false");
            obj.set_direction("vertical");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_prdNm00","0","243","120","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_text("SSP상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_03_07_00","120","243",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","128","247","1002","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_clear:4","42",null,"28","btn_cancel:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02","0","69","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","20","498",null,"446","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabSub01",this.tabMain);
            obj.set_text("가격정보");
            this.tabMain.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","19","69","14",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("0");
            obj.set_text("■ 구매 정보");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Div("div_paging","0","212",null,"36","160",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","271","180","29",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("2");
            obj.set_text("■ 현재 적용 기준가격(VAT 제외)");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Grid("grid_price","0","309",null,"65","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_prdPrcCurAply");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("false");
            obj.set_cellclickbound("cell");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"48\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"10\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"10\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"CO_CD\"/><Cell col=\"1\" text=\"PRD_ID\"/><Cell col=\"2\" text=\"BZPLC_ID\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"최저매입가\"/><Cell col=\"5\" text=\"사전설정&#13;&#10;매익률\"/><Cell col=\"6\" text=\"R&amp;D기준가\"/><Cell col=\"7\" text=\"List Price\"/><Cell col=\"8\" text=\"기준판매가\"/><Cell col=\"9\" text=\"할인율적용&#13;&#10;판매가\"/><Cell col=\"10\" colspan=\"2\" text=\"기간할인금액\"/><Cell col=\"12\" colspan=\"3\" text=\"기간할인기간\"/><Cell col=\"15\" text=\"일반고객&#13;&#10;노출판매가\"/><Cell col=\"16\" colspan=\"3\" text=\"유효기간\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_CD\"/><Cell col=\"1\" text=\"bind:PRD_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_ID\"/><Cell col=\"3\" text=\"단가\"/><Cell col=\"4\" text=\"bind:BSS_PCPRC\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:PLN_PRFRT\"/><Cell col=\"6\" text=\"bind:STPRC\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:DSTRB_STD_PRC\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:SSP_BSS_SALSPRC\" displaytype=\"number\" edittype=\"none\" maskeditformat=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" text=\"bind:EXPS_SALSPRC\"/><Cell col=\"10\" text=\"bind:RND_DC_QTY\" displaytype=\"number\" edittype=\"mask\" maskeditclipmode=\"excludespace\" maskeditautoselect=\"false\" maskeditlimitbymask=\"both\" maskeditformat=\"expr:RND_DC_SPR_CD==&apos;10&apos;?&apos;!########&apos;:&apos;!#0.##&apos;\" textAlign=\"right\" maskeditmaskchar=\" \"/><Cell col=\"11\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_dcrt\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:RND_DC_SPR_CD\" comboautoselect=\"true\"/><Cell col=\"12\" text=\"bind:RND_DC_VLD_STR_DTM\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"13\" text=\"~\"/><Cell col=\"14\" text=\"bind:RND_DC_VLD_END_DTM\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"none\" text=\"bind:PRICE\"/><Cell col=\"16\" text=\"bind:BSS_SALSPRC_STR_DTM\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"17\" text=\"~\"/><Cell col=\"18\" text=\"bind:BSS_SALSPRC_END_DTM\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stc_bssSalsprc",null,"277","203","14","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("12");
            obj.set_text("기준판매가 적용일 :");
            obj.set_visible("false");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Button("btn_bssSalsprcCurst",null,"270","120","28","stc_bssSalsprc:5",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("4");
            obj.set_text("기준판매가변동현황");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("stc_ltsRenDtm","90","11","232","30",null,null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("5");
            obj.set_text("최근 갱신일시 :");
            obj.set_visible("false");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","43",null,"157","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_prdPrcInfo");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"115\"/><Column size=\"80\"/><Column size=\"98\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"90\"/><Column size=\"85\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"협력사ID\"/><Cell col=\"1\" text=\"협력사\"/><Cell col=\"2\" text=\"매입가\"/><Cell col=\"3\" text=\"매입통화\"/><Cell col=\"4\" text=\"공급가능 여부\"/><Cell col=\"5\" text=\"가격유효기간\"/><Cell col=\"6\" text=\"가격 유효 구분\"/><Cell col=\"7\" text=\"최소주문수량\"/><Cell col=\"8\" text=\"Condition\"/><Cell col=\"9\" text=\"배송가능지역\"/></Band><Band id=\"body\"><Cell text=\"bind:CPRTCP_ID\"/><Cell col=\"1\" text=\"bind:CPRTCP_NM\"/><Cell col=\"2\" text=\"bind:PRD_PRC\"/><Cell col=\"3\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"4\" text=\"bind:SPL_PSB_YN\"/><Cell col=\"5\" text=\"bind:VLD_STR_DT\" expr=\"VLD_STR_DT+&apos;~&apos;+VLD_END_DT\"/><Cell col=\"6\" text=\"bind:PRC_VLD_PERD_SPR_NM\"/><Cell col=\"7\" text=\"bind:MIN_ODR\"/><Cell col=\"8\" expandsize=\"32\" displaytype=\"imagecontrol\" expandshow=\"hide\" expr=\"&quot;theme::default/images/btn_WF_Grdexpand.png&quot;\" text=\"bind:COND\"/><Cell col=\"9\" displaytype=\"imagecontrol\" expandshow=\"hide\" expr=\"&quot;theme::default/images/btn_WF_Grdexpand.png&quot;\" text=\"bind:DLV_PSB_AREA\"/></Band></Format></Formats>");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","0",null,"20","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00","0","34",null,"10","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00","0","199",null,"10","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01","0","248",null,"20","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("10");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00","0","299",null,"10","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_02","0","377",null,"20","0",null,null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("13");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Tabpage("tabSub02",this.tabMain);
            obj.set_text("상품 Condition 정보");
            this.tabMain.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","0",null,"20","0",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("0");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Button("btn_condHst","0","21","141","28",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("1");
            obj.set_text("Condition 이력조회");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00","0","49",null,"10","0",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("2");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","71","65","14",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("3");
            obj.set_text("■ 물량할인");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Button("btn_del1",null,"Static01_00_01_02_00_00_00_00:0","70","28","0",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("5");
            obj.set_text("-전체삭제");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Button("btn_add1",null,"Static01_00_01_02_00_00_00_00:0","70","28","btn_del1:5",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("4");
            obj.set_text("+추가");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00","0","btn_add1:0",null,"10","0",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Div("div_paging","0","235",null,"36","160",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01","0","230",null,"20","0",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","Static01_00_01_02_00_00_00_01:10","65","14",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("9");
            obj.set_text("■ 배송비");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Button("btn_add2",null,"Static01_00_01_02_00_00_00_01:0","70","28","75",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("12");
            obj.set_text("+추가");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00_00_00","0","btn_add2:0",null,"10","0",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Grid("grid_dlcst","0","Static01_00_01_02_00_00_00_00_00_00_00_00:0",null,"125","0",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("10");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_prdPrcDlcst");
            obj.set_autoenter("key");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"87\"/><Column size=\"92\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"CO_CD\"/><Cell col=\"1\" text=\"PRD_ID\"/><Cell col=\"2\" text=\"BZPLC_ID\"/><Cell col=\"3\" text=\"DLCST_SEQ\"/><Cell col=\"4\" text=\"유형\"/><Cell col=\"5\" text=\"구분\"/><Cell col=\"6\" text=\"수량(From)\"/><Cell col=\"7\" text=\"수량(To)\"/><Cell col=\"8\" text=\"할증금액\"/><Cell col=\"9\" text=\"판매통화\"/><Cell col=\"10\" text=\"기간(From)\"/><Cell col=\"11\" text=\"기간(To)\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_CD\"/><Cell col=\"1\" text=\"bind:PRD_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_ID\"/><Cell col=\"3\" text=\"bind:DLCST_SEQ\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"bind:DLCST_SPR_CD\" displaytype=\"combocontrol\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"ds_dlcstSprCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"6\" text=\"bind:QTY_ITV_STR\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &quot;mask&quot; : &quot;none&quot;\" textAlign=\"right\" maskeditformat=\"+##########\" maskeditclipmode=\"excludespace\"/><Cell col=\"7\" text=\"bind:QTY_ITV_END\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:EXTR_AMT\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &quot;mask&quot; : &quot;none&quot;\" textAlign=\"right\" maskeditclipmode=\"excludespace\" maskeditformat=\"+##########\"/><Cell col=\"9\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"10\" text=\"bind:DLCST_STR_DTM\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"11\" text=\"bind:DLCST_END_DTM\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &quot;date&quot; : &quot;none&quot;\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Button("btn_del2",null,"Static01_00_01_02_00_00_00_01:0","70","28","0",null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("13");
            obj.set_text("-전체삭제");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Grid("grid_qty","0","98","1160","133",null,null,null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("14");
            obj.set_binddataset("ds_prdPrcQtyDc");
            obj.set_autofittype("col");
            obj.set_autoenter("key");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"CO_CD\"/><Cell col=\"1\" text=\"PRD_ID\"/><Cell col=\"2\" text=\"BZPLC_ID\"/><Cell col=\"3\" text=\"QTY_SEQ\"/><Cell col=\"4\" text=\"물량(From)\"/><Cell col=\"5\" text=\"물량(To)\"/><Cell col=\"6\" text=\"할인금액\"/><Cell col=\"7\" text=\"판매통화\"/><Cell col=\"8\" text=\"기간(From)\"/><Cell col=\"9\" text=\"기간(To)\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_CD\"/><Cell col=\"1\" text=\"bind:PRD_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_ID\"/><Cell col=\"3\" text=\"bind:QTY_SEQ\"/><Cell col=\"4\" text=\"bind:QTY_ITV_STR\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &quot;mask&quot; : &quot;none&quot;\" textAlign=\"right\" maskeditclipmode=\"excludespace\" maskeditformat=\"+##########\"/><Cell col=\"5\" text=\"bind:QTY_ITV_END\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:DC_AMT\" displaytype=\"number\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &quot;mask&quot; : &quot;none&quot;\" textAlign=\"right\" maskeditformat=\"+##########\" maskeditclipmode=\"excludespace\"/><Cell col=\"7\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"8\" text=\"bind:QTY_STR_DTM\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:QTY_END_DTM\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow) ==&apos;2&apos; ? &quot;date&quot; : &quot;none&quot;\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Tabpage("tabSub03",this.tabMain);
            obj.set_text("요청 상품 정보");
            this.tabMain.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","21","97","14",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("0");
            obj.set_text("■ 요청 상품 정보");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_00","0","46",null,"32","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_07","0","77",null,"32","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_06","0","108",null,"32","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_05","0","139",null,"32","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_04","0","170",null,"32","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_03","0","201",null,"32","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","460","47","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("7");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_mnfr","586","81","244","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_orgplc","837","77","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("9");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_orgplc","962","81",null,"24","10",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","460","77","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("11");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","585","50",null,"24","10",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_hpeUprc","962","112",null,"24","10",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_hpeUprc","837","108","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("14");
            obj.set_text("희망단가");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_hpeQty","962","143",null,"24","10",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_hpeQty","837","139","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("16");
            obj.set_text("희망수량");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySpr","837","170","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("17");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","125","112","705","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","125","143","705","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","125","50","328","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_prdId00","125","80","328","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_dispStatsChgrsn","125","205","704","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00_00_00","0","232",null,"166","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01","0","Static07_00_00_01_00_00_00_00_00:0",null,"20","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("32");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","Static01_00_01_02_00_00_00_01:5","97","14",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("23");
            obj.set_text("■ 요청 고객 정보");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","0",null,"20","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("24");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00","0","36",null,"10","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("25");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","46","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("26");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_03_01","0","77","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("27");
            obj.set_text("대표상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","0","108","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("28");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","0","139","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("29");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stc_hrmChmYn","0","170","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("30");
            obj.set_text("선택정보");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_02","0","201","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("31");
            obj.set_text("등록요청사유");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00","0","Static00_00_00_00:0",null,"10","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("33");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_02_00","0","447",null,"32","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static03_03_02_00_00","0","478",null,"32","0",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_01","0","447","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("36");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_prdId00_00","125","451","205","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("37");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_00_00_00","340","447","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("38");
            obj.set_text("요청일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_mnfr2_01","466","451","201","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("39");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_00_01_03","677","447","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_01_00","0","478","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("41");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_prdId00_00_00","125","482","205","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("42");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_00_00_00_00","340","478","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("43");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_mnfr2_01_00","466","482","201","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("44");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_00_01_03_00","677","478","120","32",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("45");
            obj.set_text("요청자");
            obj.set_cssclass("sta_cm_box01L");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Edit("edt_orgplc2_03_00","802","482",null,"24","170",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("46");
            obj.set_enable("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Radio("rdo_pubOnlySpr","963","175","130","24",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("47");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_enable("false");
            var tabMain_tabSub03_form_rdo_pubOnlySpr_innerdataset = new nexacro.NormalDataset("tabMain_tabSub03_form_rdo_pubOnlySpr_innerdataset", obj);
            tabMain_tabSub03_form_rdo_pubOnlySpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">공용</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">전용</Col></Row></Rows>");
            obj.set_innerdataset(tabMain_tabSub03_form_rdo_pubOnlySpr_innerdataset);
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new CheckBox("che_hrmChmYn","126","176","127","22",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("48");
            obj.set_text("화학물질여부");
            obj.set_readonly("true");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static20_001","126","236","649","124",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_image_bg");
            obj.set_text("");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00_01_00_00_00_00","0","232","120","167",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("51");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_1","138","245","100","100",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("52");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_2","268","245","100","100",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("53");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_3","398","245","100","100",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("54");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_4","528","245","100","100",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("55");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_5","658","245","100","100",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("56");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("stcTitle11_00_00_00_01","789","232","130","167",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("57");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Grid("grd_imageList","123","367","651","26",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("58");
            obj.set_binddataset("ds_imageList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:ATFL_NM_1\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"1\" text=\"bind:ATFL_NM_2\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:ATFL_NM_3\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"3\" text=\"bind:ATFL_NM_4\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/><Cell col=\"4\" text=\"bind:ATFL_NM_5\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" color=\"royalblue\" cursor=\"pointer\" textDecoration=\"underline\"/></Band></Format></Formats>");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Grid("grd_fileList","929","238",null,"163","9",null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("59");
            obj.set_binddataset("ds_gridFilelist");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"137\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:ATFL_NM\" font=\"bold 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은고딕&quot;,&quot;Apple SD Gothic Neo&quot;,&quot;dotum&quot;,&quot;돋움&quot;,&quot;arial&quot;,&quot;sans-serif&quot;\" cursor=\"pointer\" color=\"royalblue\" textDecoration=\"underline\"/></Band></Format></Formats>");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","837","207","98","19",null,null,null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("60");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00","20","951","96.67%","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00","0","20","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,971,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.rdo_displayStatus","value","ds_dpPrdStatsInfo","DISP_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_dispStatsChgrsn","value","ds_dispInfo","DISP_STATS_CHGRSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_rndUscustDispStatsChgrsn","value","ds_dispInfo","RND_USCUST_DISP_STATS_CHGRSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_prdId","value","ds_prdBasisInfo","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_prdNm","value","ds_prdBasisInfo","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_brndNm","value","ds_prdBasisInfo","BRND_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_hashTag","value","ds_prdBasisInfo","HASH_TAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.rdo_prdStats","value","ds_prdBasisInfo","MRO_PRD_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div00.form.edt_mnfr2","value","ds_prdBasisInfo","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div00.form.edt_reprSpec2","value","ds_prdBasisInfo","ATTR_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.edt_saftInvnYn","value","ds_prdBasisInfo","INVN_YN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div00.form.rdo_pubOnlySpr","value","ds_prdBasisInfo","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div00.form.edt_bgNm","value","ds_prdBasisInfo","BG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div00.form.rdo_hrmChmYn","value","ds_prdBasisInfo","CHM_MTL_PRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tabMain.tabSub03.form.edt_mnfr","value","ds_cprtcpReqInfoInq","MRO_MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tabMain.tabSub03.form.edt_orgplc","value","ds_cprtcpReqInfoInq","CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tabMain.tabSub03.form.edt_prdNm","value","ds_cprtcpReqInfoInq","REQ_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tabMain.tabSub03.form.edt_reprSpec","value","ds_cprtcpReqInfoInq","NEW_PRD_REQ_PRVL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tabMain.tabSub03.form.edt_prdClcd","value","ds_cprtcpReqInfoInq","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tabMain.tabSub03.form.edt_prdId","value","ds_cprtcpReqInfoInq","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tabMain.tabSub03.form.edt_dispStatsChgrsn","value","ds_cprtcpReqInfoInq","REQ_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edt_dispStatsChgrsn00","value","ds_prPrdInfo","ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tabMain.tabSub03.form.rdo_pubOnlySpr","value","ds_cprtcpReqInfoInq","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tabMain.tabSub03.form.che_hrmChmYn","value","ds_cprtcpReqInfoInq","CHM_MTL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.rdo_txClcd","value","ds_prdBasisInfo","TX_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","Div00.form.rdo_dispStats","value","ds_dispInfo","DISP_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","Div00.form.edt_orgplc","value","ds_dispInfo","NEW_PRD_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.edt_orgplc2","value","ds_prdBasisInfo","CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","Div00.form.edt_hubYn","value","ds_prdBasisInfo","HUB_HNL_DIS_TP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","Div00.form.edt_odrUnit2","value","ds_prdBasisInfo","BASIS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","tabMain.tabSub03.form.edt_hpeUprc","value","ds_cprtcpReqInfoInq","HPE_SELL_UPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","tabMain.tabSub03.form.edt_hpeQty","value","ds_cprtcpReqInfoInq","HPE_SELL_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tabMain.tabSub03.form.edt_prdId00_00","value","ds_cprtcpReqInfoInq","NEW_PRD_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","tabMain.tabSub03.form.edt_prdId00_00_00","value","ds_cprtcpReqInfoInq","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","tabMain.tabSub03.form.edt_mnfr2_01_00","value","ds_cprtcpReqInfoInq","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","tabMain.tabSub03.form.edt_mnfr2_01","value","ds_cprtcpReqInfoInq","NEW_PRD_REQ_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","tabMain.tabSub03.form.edt_orgplc2_03_00","value","ds_cprtcpReqInfoInq","NEW_PRD_REQPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","Div00.form.edt_sspPrdNm","value","ds_prdBasisInfo","SSP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
            this._addPreloadList("data","","ds_dispInfo");
            this._addPreloadList("data","","ds_prdBasisInfo");
            this._addPreloadList("data","","ds_prdPrcInfo");
            this._addPreloadList("data","","ds_prdPrcCurAply");
            this._addPreloadList("data","","ds_prdPrcQtyDc");
            this._addPreloadList("data","","ds_prdPrcDlcst");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_LA_04.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_LA_04.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_LA_04.xfdl(공용상품 기준판매가 상세 팝업)
        * 작 성			일 명: 손나라
        * 작 성	    	일 자: 2022/06/02
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
        this.fv_oApp                = nexacro.getApplication();	//application object
        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sParamArg1;
        this.sParamArg2;
        this.sParamArg3;
        this.sParamArg4;
        this.sParamArg5;
        this.mallSprCd 		= "20";
        this.totalCount 	= 0;
        this.strKeyValue 	= "";
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lvGetDate      = "";
        this.add1           = 0;
        this.add1Chg        = 0;
        this.add2           = 0;
        this.add2Chg        = 0;
        this.imageViewerId  = "";								 // 이미지파일 뷰어 표시를 위한 변수 값
        this.fileIndex      = "";								 // 파일 index 값을 저장을 위한 변수 값
        this.imageFileYn    = false;							 // 이미지 및 첨부파일 구분을 위한 변수 값
        this.oldRndDcSprCd  = "";
        this.oldRndDcQty    = "";
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

        	var strDs   = "ds_dispStats|ds_pubOnlySpr|ds_txClcd";		        // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "DISP_STATS_CD|PUB_ONLY_SPR_CD|TX_CLCD";       // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "X|X|X";   					// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";						// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
        							  , strLgcd
        							  , strComb
        							  , strOptn
        							  , svcId);
        };

        this.fn_PostformInit = function()
        {
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow,"CO_CD",this.sParamArg1);
        	this.ds_search.setColumn(nRow,"PRD_ID",this.sParamArg2);
        	this.flag = this.sParamArg3;

        	this.fn_setResetBtnCall();
        	this.fn_Ret();
        	if ( this.sParamArg4 == "Y" )
        	{
        		this.flag = "U";
        		this.fn_setResetBtnCall();
        	}
        	// 공용상품처리대기에서 호출했을 경우에만 요청번호값 노출
        	if ( this.sParamArg5 != "Y" )
        	{
        		this.Div00.form.stc_orgplc.set_visible(false);
        		this.Div00.form.edt_orgplc.set_visible(false)
        	}
        };

        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_exit        : this.btn_exit
        						  , btn_close       : this.btn_close
        						  , btn_update      : this.btn_update
        	                      };
        	var btnVisibleFalse = {
        							btn_add1 : this.tabMain.tabSub02.form.btn_add1
        							,btn_add2 : this.tabMain.tabSub02.form.btn_add2
        							,btn_del1 : this.tabMain.tabSub02.form.btn_del1
        							,btn_del2 : this.tabMain.tabSub02.form.btn_del2
        	                      };
        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        	this.tabMain.tabSub02.form.btn_add1.set_visible(false);

        };

        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
        	if ( this.gfn_isNull(this.sParamArg5) )
        	{
        		//this.div_form2.form.tabMain.tabSub03.set_tabbuttonwidth(0);
        	    this.tabMain.tabSub03.set_tabbuttonwidth(0);
        	}
        	//할인율 구분 초기값
        	this.ds_txClcd.filter("COM_DTL_CD=='0' || COM_DTL_CD=='1'");
        	if ( this.flag == "R" ) {
        //		this.fn_compontAllControl();
         		this.tabMain.tabSub02.form.btn_add1.set_visible(false);
         		this.tabMain.tabSub02.form.btn_del1.set_visible(false);
         		this.tabMain.tabSub02.form.btn_add2.set_visible(false);
         		this.tabMain.tabSub02.form.btn_del2.set_visible(false);
        		this.tabMain.tabSub02.form.grid_qty.set_readonly(true);
        		this.tabMain.tabSub02.form.grid_dlcst.set_readonly(true);
        		this.tabMain.tabSub01.form.grid_price.set_readonly(true);
        		//this.tabMain.tabSub03.set_tabbuttonwidth(0);

         		this.Div00.form.edt_dispStatsChgrsn.set_readonly(true);
         		this.Div00.form.edt_rndUscustDispStatsChgrsn.set_readonly(true);
         		this.Div00.form.rdo_dispStats.set_readonly(true);
         		this.btn_save.set_visible(false);
         		this.btn_clear.set_visible(false);
        		// 구매담당자여부
        		if ( this.sParamArg4 == "N" )
        		{
        			this.btn_update.set_visible(false);
        		} else
        		{
        			this.btn_update.set_visible(true);
        		}

        	} else if ( this.flag == "U" ) {
        		this.tabMain.tabSub02.form.btn_add1.set_visible(true);
        		this.tabMain.tabSub02.form.btn_del1.set_visible(true);
        		this.tabMain.tabSub02.form.btn_add2.set_visible(true);
        		this.tabMain.tabSub02.form.btn_del2.set_visible(true);
        		this.tabMain.tabSub02.form.grid_qty.set_readonly(false);
        		this.tabMain.tabSub02.form.grid_dlcst.set_readonly(false);
        		this.tabMain.tabSub01.form.grid_price.set_readonly(false);
        		this.Div00.form.edt_dispStatsChgrsn.set_readonly(false);
        		this.Div00.form.edt_rndUscustDispStatsChgrsn.set_readonly(false);
        		this.Div00.form.rdo_dispStats.set_readonly(false);
        		this.btn_save.set_visible(true);
        		this.btn_clear.set_visible(true);
        		this.btn_update.set_visible(false);
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

        			default:
        				break;
        		}
        	}
        };

        this.fn_popupCallback = function(strId, strVal)
        {
        	var strIdTemp = strId.split("|");
        	var nRow = strIdTemp[1];
            switch(strIdTemp[0])
            {
        		//제조원
        // 		case "MNFR_NM" :
        // 			if(!this.gfn_isNull(strVal))
        // 			{
        // 				var jsonData = JSON.parse(strVal);
        // 				this.ds_bfSetPrfrt.setColumn(nRow,"MNFR_NO",jsonData.MNFR_NO);
        // 				this.ds_bfSetPrfrt.setColumn(nRow,"MNFR_NM",jsonData.MNFR_NM);
        // 			}else
        // 			{
        // 			// 닫기 버튼 처리
        // 			}
        //             break;
        		//카테고리
        // 		case "PRD_CLCD" :
        // 			if(!this.gfn_isNull(strVal))
        // 			{
        // 				var jsonData = JSON.parse(strVal);
        // 				this.ds_bfSetPrfrt.setColumn(nRow,"PRD_CLCD",jsonData.PRD_CLCD);
        // 				this.ds_bfSetPrfrt.setColumn(nRow,"PRD_CLCD_NM",jsonData.FULL_PRD_CLSF_NM);
        // 			}else
        // 			{
        // 			// 닫기 버튼 처리
        // 			}
        //             break;
                default:
                    break;
            }
        };

        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/
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
            var strUrl      = "/rd/pub-prd-prc-mng/select-pub-prd-prc-mng-dtl.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_dispInfo=ds_dispInfo"
        	                + " ds_prdBasisInfo=ds_prdBasisInfo"
        					+ " ds_prdPrcInfo=ds_prdPrcInfo"
        					+ " ds_prdPrcCurAply=ds_prdPrcCurAply"
        					+ " ds_prdPrcQtyDc=ds_prdPrcQtyDc"
        					+ " ds_prdPrcDlcst=ds_prdPrcDlcst"
        					+ " ds_cprtcpReqInfoInq=ds_cprtcpReqInfoInq"
        					+ " ds_cprtcpReqAttcFile=ds_cprtcpReqAttcFile";
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
        	var reqNo = this.ds_dispInfo.getColumn(0,"NEW_PRD_REQ_NO");
        	if ( this.ds_prdPrcCurAply.getRowCount() > 0 )
        	{
        		this.oldRndDcQty = this.ds_prdPrcCurAply.getColumn(0,"RND_DC_QTY");
        		this.oldRndDcSprCd = this.ds_prdPrcCurAply.getColumn(0,"RND_DC_SPR_CD");
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

        						this.tabMain.tabSub03.form["ImageViewer_"+imgList[jdx][1]].set_image(this.fn_imageViewerUrl(filePath,fileOrgName,fileName));
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
        		this.tabMain.tabSub03.set_tabbuttonwidth(0);
        	}
        };
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 버튼 클릭시
         */
        this.btn_add1_onclick = function(obj,e)
        {
            this.fn_New1();
        };

        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew1 = function()
        {
         	if ( this.ds_prdPrcQtyDc.getRowCount() > 0 )
         	{
         		for ( var i=0; i<this.ds_prdPrcQtyDc.getRowCount(); i++)
         		{
         			if ( this.ds_prdPrcQtyDc.getRowType(i) == 2 )
         			{
         				 if ( this.gfn_isNull(this.ds_prdPrcQtyDc.getColumn(i,"QTY_ITV_STR")) )
         				 {
         					this.fn_alert("ERRS000144","저장","물량(From) ","information");
         					return false;
         				 }
         			}
         		}
         	}
        	this.add1 = 0;
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New1 = function()
        {
            if(!this.fn_PreNew1())
            {
                return false;
            }
            var nRow = this.ds_prdPrcQtyDc.addRow();

            //this.ds_prdPrcQtyDc.setColumn(nRow,"CHK","1");                                  // 체크
        	this.ds_prdPrcQtyDc.setColumn(nRow,"CO_CD",this.sParamArg1);
        	this.ds_prdPrcQtyDc.setColumn(nRow,"PRD_ID",this.sParamArg2);
        	this.ds_prdPrcQtyDc.setColumn(nRow,"BZPLC_ID","*");
        	this.ds_prdPrcQtyDc.setColumn(nRow,"QTY_ITV_END","999999999999");
        	this.ds_prdPrcQtyDc.setColumn(nRow,"CURR_UNIT_CD","KRW");
        	this.ds_prdPrcQtyDc.setColumn(nRow,"QTY_STR_DTM",this.lvGetDate);               // 99991231
        	this.ds_prdPrcQtyDc.setColumn(nRow,"QTY_END_DTM","99991231");                   // 99991231
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew1 = function()
        {

        };

        /**
         * 기능 : 추가 버튼 클릭시
         */
        this.btn_add2_onclick = function(obj,e)
        {
            this.fn_New2();
        };

        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew2 = function()
        {
        	if ( this.ds_prdPrcDlcst.getRowCount() > 0 )
         	{
        		if ( this.ds_prdPrcDlcst.getColumn(0,"DLCST_SPR_CD") == "10" ) // 일반
        		{
        			for ( var i=0; i<this.ds_prdPrcDlcst.getRowCount(); i++)
        			{
        				if ( this.ds_prdPrcDlcst.getRowType(i) == 2 )
        				{
        					 if ( this.gfn_isNull(this.ds_prdPrcDlcst.getColumn(i,"QTY_ITV_STR")) )
        					 {
        						this.fn_alert("ERRS000144","추가","수량(From) ","information");
        						return false;
        					 }
        				}
        			}

        		}
        		else
        		{
        			if ( this.ds_prdPrcDlcst.getRowCount() == 1 )
        			{
        				this.fn_alert("ERRR000197","추가","","information");
        				return false;
        			}
        		}
         	}
        	this.add2 = 0;
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New2 = function()
        {
            if(!this.fn_PreNew2())
            {
                return false;
            }
        	var rowCount = this.ds_prdPrcDlcst.getRowCount();
            var nRow = this.ds_prdPrcDlcst.addRow();

            //this.ds_prdPrcDlcst.setColumn(nRow,"CHK","1");                                  // 체크
        	this.ds_prdPrcDlcst.setColumn(nRow,"CO_CD",this.sParamArg1);                    // 회사코드
        	this.ds_prdPrcDlcst.setColumn(nRow,"PRD_ID",this.sParamArg2);                   // 상품ID
        	this.ds_prdPrcDlcst.setColumn(nRow,"DLCST_SPR_CD","10");                         // 배송비구분(10:일반 , 20:배수주문)
        	if ( rowCount == 0 )
        	{
        		this.ds_prdPrcDlcst.setColumn(nRow,"QTY_ITV_STR","1");                // 수량(To)
        		var idx = this.tabMain.tabSub02.form.grid_dlcst.getBindCellIndex("body","DLCST_SPR_CD");
        		this.tabMain.tabSub02.form.grid_dlcst.setCellProperty("body",idx,"edittype","combo");
        	}
        	else
        	{
        		var idx = this.tabMain.tabSub02.form.grid_dlcst.getBindCellIndex("body","DLCST_SPR_CD");
        		this.tabMain.tabSub02.form.grid_dlcst.setCellProperty("body",idx,"edittype","none");
        	}
        	this.ds_prdPrcDlcst.setColumn(nRow,"QTY_ITV_END","999999999999");                // 수량(To)
        	this.ds_prdPrcDlcst.setColumn(nRow,"CURR_UNIT_CD","KRW");                        // KRW
        	this.ds_prdPrcDlcst.setColumn(nRow,"DLCST_STR_DTM",this.lvGetDate);               // 오늘일자
        	this.ds_prdPrcDlcst.setColumn(nRow,"DLCST_END_DTM","99991231");                   // 99991231
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew2 = function()
        {

        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 클릭시
         */
        this.btn_del1_onclick = function(obj,e)
        {
            this.fn_Del1();
        };

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel1 = function()
        {
            var result = this.fn_confirm("ERRC000048", "삭제정보","","question" ); // 삭제하시겠습니까?

            if(result == 0)
            {
                return false;
            }

            // 멀티 삭제 처리
            for(var i = this.ds_prdPrcQtyDc.rowcount-1; 0 <= i; i--)
            {
        		this.ds_prdPrcQtyDc.setColumn(i,"QTY_END_DTM",this.lvGetDate-1);
        		this.ds_prdPrcQtyDc.set_updatecontrol(false);
        		this.ds_prdPrcQtyDc.setRowType(i,1);
        		this.ds_prdPrcQtyDc.set_updatecontrol(true);
        		this.ds_prdPrcQtyDc.deleteRow(i);
            }

        	return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del1 = function()
        {
            if(!this.fn_PreDel1())
            {
                return false;
            }
        	//this.btn_save.set_enable(true);
        };

        this.fn_PostDel1 = function()
        {

        };

        /**
         * 기능 : 삭제 버튼 클릭시
         */
        this.btn_del2_onclick = function(obj,e)
        {
            this.fn_Del2();
        };

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel2 = function()
        {
            var result = this.fn_confirm("ERRC000048", "삭제정보","","question" ); // 삭제하시겠습니까?

            if(result == 0)
            {
                return false;
            }

            // 멀티 삭제 처리
            for(var i = this.ds_prdPrcDlcst.rowcount-1; 0 <= i; i--)
            {
        		this.ds_prdPrcDlcst.setColumn(i,"DLCST_END_DTM",this.lvGetDate-1);
        		this.ds_prdPrcDlcst.set_updatecontrol(false);
        		this.ds_prdPrcDlcst.setRowType(i,1);
        		this.ds_prdPrcDlcst.set_updatecontrol(true);
        		this.ds_prdPrcDlcst.deleteRow(i);
            }

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del2 = function()
        {
            if(!this.fn_PreDel2())
            {
                return false;
            }
        	//this.btn_save.set_enable(true);
        };

        this.fn_PostDel2 = function()
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
        	// 기준할인금액 > 기준판매가 체크
        	if ( !this.gfn_isNull(this.ds_prdPrcCurAply.getColumn(0,"RND_DC_QTY")) && this.ds_prdPrcCurAply.getColumn(0,"RND_DC_QTY") > this.ds_prdPrcCurAply.getColumn(0,"SSP_BSS_SALSPRC") )
        	{
        		this.fn_alert("ERRR000235","저장","기준할인금액,기준판매가","information");      // 기준할인금액,기준판매가 (&1은(는) &2보다 클 수 없습니다.)
        		return false;
        	}
        	// 물량할인금액 > 기준판매가 체크
        	for( var i = 0; i < this.ds_prdPrcQtyDc.getRowCount(); i++ )
        	{
        		if ( this.ds_prdPrcQtyDc.getColumn(i,"DC_AMT") > this.ds_prdPrcCurAply.getColumn(0,"SSP_BSS_SALSPRC") )
        		{
        			this.fn_alert("ERRR000235","저장","물량할인금액,기준판매가","information");      // 물량할인금액,기준판매가 (&1은(는) &2보다 클 수 없습니다.)
        			return false;
        		}
        	}

            // 필수 입력사항 체크
        	if ( this.ds_dispInfo.getColumn(0,"DISP_STATS_CD") != this.ds_dispInfo.getColumn(0,"OLD_DISP_STATS_CD") )
        	{
        		if ( this.gfn_isNull(this.Div00.form.edt_dispStatsChgrsn.value) )
        		{
        			this.fn_alert("ERRS000144","저장","진열상태변경사유 ","information");      // 진열상태변경사유 (&1은(는) 필수입력사항입니다.)
        			this.Div00.form.edt_dispStatsChgrsn.setFocus();
        			return false;
        		}
        // 		if ( this.Div00.form.rdo_dispStats.value == "40")
        // 		{
        // 			if ( this.gfn_isNull(this.Div00.form.edt_rndUscustDispStatsChgrsn.value ) )
        // 			{
        // 				this.fn_alert("ERRS000144","저장","일시품절/단종사유 ","information");      // 일시품절/단종사유 (&1은(는) 필수입력사항입니다.)
        // 				this.Div00.form.edt_rndUscustDispStatsChgrsn.setFocus();
        // 				return false;
        // 			}
        // 		}
        	}
        	// 기간할인 일자 체크
            if ( this.ds_prdPrcCurAply.getRowType(0) == 4
        		&& ( !this.gfn_isNull(this.ds_prdPrcCurAply.getColumn(0,"RND_DC_SPR_CD"))
        		|| !this.gfn_isNull(this.ds_prdPrcCurAply.getColumn(0,"RND_DC_VLD_STR_DTM"))
        		|| !this.gfn_isNull(this.ds_prdPrcCurAply.getColumn(0,"RND_DC_VLD_END_DTM"))
        		|| !this.gfn_isNull(this.ds_prdPrcCurAply.getColumn(0,"RND_DC_QTY")) )
        		)
        	{
        		if ( this.gfn_isNull(this.ds_prdPrcCurAply.getColumn(0,"RND_DC_VLD_STR_DTM")) )
        		{
        			this.fn_alert("ERRS000144","저장","기간할인 시작일자 ","information");           // 기간할인 시작일자 (&1은(는) 필수입력사항입니다.)
        			return false;
        		}

        		if ( this.gfn_isNull(this.ds_prdPrcCurAply.getColumn(0,"RND_DC_VLD_END_DTM")) )
        		{
        			this.fn_alert("ERRS000144","저장","기간할인 종료일자 ","information");           // 기간할인 종료일자 (&1은(는) 필수입력사항입니다.)
        			return false;
        		}

        		if ( this.ds_prdPrcCurAply.getColumn(0,"RND_DC_VLD_STR_DTM") < this.lvGetDate )
        		{
        			this.fn_alert("ERRR000203","저장","기간할인 시작일자 ","information");           // 기간할인 시작일자 (&1은(는) 과거일자로 등록할수 없습니다.)
        			return false;
        		}

        		if ( this.ds_prdPrcCurAply.getColumn(0,"RND_DC_VLD_END_DTM") < this.lvGetDate )
        		{
        			this.fn_alert("ERRR000203","저장","기간할인 종료일자 ","information");           // 기간할인 종료일자 (&1은(는) 과거일자로 등록할수 없습니다.)
        			return false;
        		}

        		if ( this.gfn_isNull(this.ds_prdPrcCurAply.getColumn(0,"RND_DC_QTY")) )
        		{
        			this.fn_alert("ERRS000144","저장","기간할인 정보 입력 시 기간할인단위 ","information");           // 기간할인 정보 입력 시 기간할인단위 (&1은(는) 필수입력사항입니다.)
        			return false;
        		}
        	}

        	// 물량할인DataSet 필수 체크
        	for( var i = 0; i < this.ds_prdPrcQtyDc.getRowCount(); i++ )
        	{
        		//선택 정보만 체크
        // 		if ( this.ds_prdPrcQtyDc.getColumn(i,"CHK") == 1 )
        // 		{
        			if ( this.gfn_isNull(this.ds_prdPrcQtyDc.getColumn(i,"QTY_ITV_STR")) )
        			{
        				this.fn_alert("ERRS000144","저장","물량(From) ","information");      // 물량(From) (&1은(는) 필수입력사항입니다.)
        				return false;
        			}
        			if ( this.gfn_isNull(this.ds_prdPrcQtyDc.getColumn(i,"DC_AMT")) )
        			{
        				this.fn_alert("ERRS000144","저장","할인금액 ","information");      // 할인금액 (&1은(는) 필수입력사항입니다.)
        				return false;
        			}
        			if ( this.gfn_isNull(this.ds_prdPrcQtyDc.getColumn(i,"QTY_END_DTM")) )
        			{
        				this.fn_alert("ERRS000144","저장","기간(To) ","information");      // 기간(To) (&1은(는) 필수입력사항입니다.)
        				return false;
        			}
        //		}
        	}

        	// 물량할인DataSet 필수 체크
        	for( var i = 0; i < this.ds_prdPrcDlcst.getRowCount(); i++ )
        	{
        		//선택 정보만 체크
        // 		if ( this.ds_prdPrcDlcst.getColumn(i,"CHK") == 1 )
        // 		{
        			if ( this.gfn_isNull(this.ds_prdPrcDlcst.getColumn(i,"QTY_ITV_STR")) )
        			{
        				this.fn_alert("ERRS000144","저장","수량(From) ","information");      // 수량(From) (&1은(는) 필수입력사항입니다.)
        				return false;
        			}
        			if ( this.gfn_isNull(this.ds_prdPrcDlcst.getColumn(i,"EXTR_AMT")) )
        			{
        				this.fn_alert("ERRS000144","저장","할증금액 ","information");      // 할증금액 (&1은(는) 필수입력사항입니다.)
        				return false;
        			}
        			if ( this.gfn_isNull(this.ds_prdPrcDlcst.getColumn(i,"DLCST_END_DTM")) )
        			{
        				this.fn_alert("ERRS000144","저장","기간(To) ","information");      // 기간(To) (&1은(는) 필수입력사항입니다.)
        				return false;
        			}
        //		}
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
            var strUrl      = "/rd/pub-prd-prc-mng/save-pub-prd-prc-mng-dtl.do";
            var strInDs     = "ds_dispInfo=ds_dispInfo:u"
        	                + " ds_prdPrcQtyDc=ds_prdPrcQtyDc:u"
        					+ " ds_prdPrcDlcst=ds_prdPrcDlcst:u"
        					+ " ds_prdPrcCurAply=ds_prdPrcCurAply:u"
        	                + "";
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
         	var strCoCd             = this.ds_prdPrcInfo.getColumn(e.row,"CO_CD");
        	var strPrdId            = this.ds_prdPrcInfo.getColumn(e.row,"PRD_ID");
        	var strCprtcpId         = this.ds_prdPrcInfo.getColumn(e.row,"CPRTCP_ID");
        	var strCprtcpNm         = this.ds_prdPrcInfo.getColumn(e.row, "CPRTCP_KOR_NM");
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
        	var lv_sValue04 = "";		   		 // 부모에서 넘어가는 파라미터(폼경로)

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
          * 물량할인 물량(From) 변경시 이벤트
          */
        this.ds_prdPrcQtyDc_oncolumnchanged = function(obj,e)
        {
        	if ( e.columnid == "QTY_ITV_STR" )
        	{
         		if ( !this.gfn_isNull(this.ds_prdPrcQtyDc.getColumn(e.row,"QTY_ITV_STR")) && this.add1 == 0 )
         		{
         			if ( this.ds_prdPrcQtyDc.getRowCount() > 1 )
         			{
         				var i = 0;
         				if ( this.add1Chg == 0 )
         				{
         					i = this.getMaxRowIndex(this.ds_prdPrcQtyDc);
         				}
         				else
         				{
         					i = e.row-1;
         				}
         				var minQty 	= this.ds_prdPrcQtyDc.getColumn(i,"QTY_ITV_STR");
         				var maxQty 	= this.ds_prdPrcQtyDc.getColumn(i,"QTY_ITV_END");
        				var dcAmt 	= this.ds_prdPrcQtyDc.getColumn(i,"DC_AMT");
        				var inQty 	= this.ds_prdPrcQtyDc.getColumn(e.row,"QTY_ITV_STR");
        				var strDtm  = this.ds_prdPrcQtyDc.getColumn(e.row,"QTY_STR_DTM");
        				var endDtm  = this.ds_prdPrcQtyDc.getColumn(e.row,"QTY_END_DTM");
        				if(minQty > inQty || inQty > maxQty )
        				{
        					this.fn_alert("ERRR000196", "물량할인" ,"","information");
        					this.ds_prdPrcQtyDc.setColumn(e.row,"QTY_ITV_STR","");
        					return false;
        				}

        				if ( minQty <= inQty && inQty <= maxQty )
        				{
        					this.add1 	 = 1;
        					if ( this.add1Chg == 0 )
        					{
        						var strDtm 	= this.ds_prdPrcQtyDc.getColumn(e.row,"QTY_STR_DTM");
        						this.ds_prdPrcQtyDc.setColumn(i,"QTY_END_DTM",strDtm-1);
        						//this.ds_prdPrcQtyDc.setColumn(i,"CHK",1);
         						this.ds_prdPrcQtyDc.set_enableevent(false);
        						var nRow = this.ds_prdPrcQtyDc.insertRow(e.row);
        						//this.ds_prdPrcQtyDc.setColumn(nRow,"CHK","1");
        						this.ds_prdPrcQtyDc.setColumn(nRow,"CO_CD",this.sParamArg1);
        						this.ds_prdPrcQtyDc.setColumn(nRow,"PRD_ID",this.sParamArg2);
        						this.ds_prdPrcQtyDc.setColumn(nRow,"BZPLC_ID","*");
        						this.ds_prdPrcQtyDc.setColumn(nRow,"QTY_ITV_STR",minQty);
        						this.ds_prdPrcQtyDc.setColumn(nRow,"QTY_ITV_END",inQty-1);
        						this.ds_prdPrcQtyDc.setColumn(nRow,"DC_AMT",dcAmt);
        						this.ds_prdPrcQtyDc.setColumn(nRow,"CURR_UNIT_CD","KRW");
        						this.ds_prdPrcQtyDc.setColumn(nRow,"QTY_STR_DTM",strDtm);
        						this.ds_prdPrcQtyDc.setColumn(nRow,"QTY_END_DTM",endDtm);
        					    this.ds_prdPrcQtyDc.set_enableevent(true);
        						/*ROW삭제*/
        						this.ds_prdPrcQtyDc.set_updatecontrol(false);
        						this.ds_prdPrcQtyDc.setRowType(i,1);
        						this.ds_prdPrcQtyDc.set_updatecontrol(true);
        						this.ds_prdPrcQtyDc.deleteRow(i);
        					} else {
        						this.ds_prdPrcQtyDc.setColumn(i,"QTY_ITV_END",inQty-1);
        					}
        					this.add1Chg = 1;
        				}

         			}
         			else
         			{
         				this.add1Chg = 1;
         			}

         		}
        	}
        };

        this.getMaxRowIndex = function(ds)
        {
        	var maxQty  = 0;
        	var initQty = 0;
        	var indix   = -1;
        	for ( var i=0; i<ds.getRowCount(); i++)
        	{
        		if(ds.getRowType(i) != 1)
        		{
        			continue;
        		}
        		maxQty = ds.getColumn(i,"QTY_ITV_END");
        		endDtm = ds.getColumn(i,"QTY_END_DTM");
        		if ( maxQty > initQty && endDtm >= this.lvGetDate);
        		{
        			initQty = maxQty;
        			indix = i;
        		}
        	}
        	return indix;
        };

        /**
          * 배송비 수량(From) 변경시 이벤트
          */
        this.ds_prdPrcDlcst_oncolumnchanged = function(obj,e)
        {
        	if ( e.columnid == "QTY_ITV_STR" )
        	{
        		if ( this.ds_prdPrcDlcst.getColumn(e.row,"DLCST_SPR_CD") == "10") // 일반주문
        		{
        			if ( !this.gfn_isNull(this.ds_prdPrcDlcst.getColumn(e.row,"QTY_ITV_STR")) && this.add2 == 0 )
        			{
        				if ( this.ds_prdPrcDlcst.getRowCount() > 1 )
        				{
        					var i = 0;
        					if ( this.add2Chg == 0 )
        					{
        						i = this.getMaxRowIndex(this.ds_prdPrcDlcst);
        					}
        					else
        					{
        						i = e.row-1;
        					}
        					var minQty 	= this.ds_prdPrcDlcst.getColumn(i,"QTY_ITV_STR");
        					var maxQty 	= this.ds_prdPrcDlcst.getColumn(i,"QTY_ITV_END");
        					var extrAmt = this.ds_prdPrcDlcst.getColumn(i,"EXTR_AMT");
        					var inQty 	= this.ds_prdPrcDlcst.getColumn(e.row,"QTY_ITV_STR");
        					var strDtm  = this.ds_prdPrcDlcst.getColumn(e.row,"DLCST_STR_DTM");
        					var endDtm  = this.ds_prdPrcDlcst.getColumn(e.row,"DLCST_END_DTM");
        					if(minQty > inQty || inQty > maxQty )
        					{
        						this.fn_alert("ERRR000196", "배송비" ,"","information");
        						this.ds_prdPrcDlcst.setColumn(e.row,"QTY_ITV_STR","");
        						return false;
        					}

        					if ( minQty <= inQty && inQty <= maxQty )
        					{
        						this.add2 	 = 1;
        						if ( this.add2Chg == 0 )
        						{
        							var strDtm 	= this.ds_prdPrcDlcst.getColumn(e.row,"DLCST_STR_DTM");
        							this.ds_prdPrcDlcst.setColumn(i,"DLCST_END_DTM",strDtm-1);
        							//this.ds_prdPrcDlcst.setColumn(i,"CHK",1);
        							var nRow = this.ds_prdPrcDlcst.insertRow(e.row);
        							this.ds_prdPrcDlcst.set_enableevent(false);
        							//this.ds_prdPrcDlcst.setColumn(nRow,"CHK","1");
        							this.ds_prdPrcDlcst.setColumn(nRow,"CO_CD",this.sParamArg1);
        							this.ds_prdPrcDlcst.setColumn(nRow,"PRD_ID",this.sParamArg2);
        							this.ds_prdPrcDlcst.setColumn(nRow,"BZPLC_ID","*");
        							this.ds_prdPrcDlcst.setColumn(nRow,"DLCST_SPR_CD","10");                         // 배송비구분(10:일반 , 20:배수주문)
        							this.ds_prdPrcDlcst.setColumn(nRow,"QTY_ITV_STR",minQty);
        							this.ds_prdPrcDlcst.setColumn(nRow,"QTY_ITV_END",inQty-1);
        							this.ds_prdPrcDlcst.setColumn(nRow,"EXTR_AMT",extrAmt);
        							this.ds_prdPrcDlcst.setColumn(nRow,"CURR_UNIT_CD","KRW");
        							this.ds_prdPrcDlcst.setColumn(nRow,"DLCST_STR_DTM",strDtm);
        							this.ds_prdPrcDlcst.setColumn(nRow,"DLCST_END_DTM",endDtm);
        							this.ds_prdPrcDlcst.set_enableevent(true);
        							/*ROW삭제*/
        							this.ds_prdPrcDlcst.set_updatecontrol(false);
        							this.ds_prdPrcDlcst.setRowType(i,1);
        							this.ds_prdPrcDlcst.set_updatecontrol(true);
        							this.ds_prdPrcDlcst.deleteRow(i);
        						} else {
        							this.ds_prdPrcDlcst.setColumn(i,"QTY_ITV_END",inQty-1);
        						}
        						this.add2Chg = 1;
        					}

        				}
        				else
        				{
        					this.add2Chg = 1;
        				}

        			}
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

        	this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.tabMain.tabSub03.form.FileDownload);
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

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.tabMain.tabSub03.form.FileDownload);
        	}
        };
        this.btn_clear_onclick = function(obj,e)
        {
        	var result = this.fn_confirm("ERRR000001", "초기화","","question" ); // 현재 입력하는 내용을 초기화 합니다.

            if(result == 0)
            {
                return false;
            }
        	this.fn_Ret();
        };

        this.tabMain_tabSub01_btn_bssSalsprcCurst_onclick = function(obj,e)
        {
         	var strCoCd             = this.ds_dispInfo.getColumn(0,"CO_CD");
         	var strPrdId            = this.ds_dispInfo.getColumn(0,"PRD_ID");

        	var params = { reqGubun        : "20"    	          // 요청구분 [진열상태변경이력:10]
        				 , autoSearch      : "Y"                  // 팝업 오픈시 자동조회 여부
        				 , coCd            : strCoCd
        				 , prdId           : strPrdId
        				 };

        	this.fn_setCallPopup(params);
        };

        this.tabMain_tabSub01_grid_price_oncloseup = function(obj,e)
        {
        	if(e.cell == obj.getBindCellIndex("body","RND_DC_SPR_CD") )
         	{
        		obj.updateToDataset();
        		//기간할인단위 수정시 금액기본값 수정
        		if ( this.oldRndDcSprCd == this.ds_prdPrcCurAply.getColumn(0,"RND_DC_SPR_CD") )
        		{
        			this.ds_prdPrcCurAply.setColumn(0,"RND_DC_QTY",this.oldRndDcQty);
        		} else {
        			this.ds_prdPrcCurAply.setColumn(0,"RND_DC_QTY",0);
        		}

        		// 빈값으로 수정 시에
        		if(this.gfn_isNull(this.ds_prdPrcCurAply.getColumn(0,"RND_DC_SPR_CD")))
        		{
        			this.ds_prdPrcCurAply.setColumn(0,"RND_DC_QTY", null);
        			this.ds_prdPrcCurAply.setColumn(0,"RND_DC_VLD_STR_DTM", null);
        			this.ds_prdPrcCurAply.setColumn(0,"RND_DC_VLD_END_DTM", null);
        		}
        	}
        };

        // 음수 입력시 기존값으로 되돌리는 함수(기간할인금액)
        this.ds_prdPrcCurAply_cancolumnchange = function(obj,e)
        {
        	if ( e.columnid == "RND_DC_QTY" )
        	{
        		var rndDcQty = new nexacro.Decimal(e.newvalue);
        		// 기간할인단위값이 빈 값이 아닐 경우
        		if ( rndDcQty <= 0 && !this.gfn_isNull(this.ds_prdPrcCurAply.getColumn(0,"RND_DC_SPR_CD")))
        		{
        			return false;
        		}
        	}
        };

        // 음수 입력시 기존값으로 되돌리는 함수(물량할인금액)
        this.ds_prdPrcQtyDc_cancolumnchange = function(obj,e)
        {
        	if ( e.columnid == "DC_AMT" )
        	{
        		var dcAmt = new nexacro.Decimal(e.newvalue);
        		if ( dcAmt <= 0 )
        		{
        			return false;
        		}
        	}
        };

        // 음수 입력시 기존값으로 되돌리는 함수(배송비)
        this.ds_prdPrcDlcst_cancolumnchange = function(obj,e)
        {
        	if ( e.columnid == "EXTR_AMT" )
        	{
        		var extrAmt = new nexacro.Decimal(e.newvalue);
        		if ( extrAmt <= 0 )
        		{
        			return false;
        		}
        	}
        };

        this.Div00_rdo_dispStats_onitemchanged = function(obj,e)
        {
        	var mroPrdStatsCd = this.ds_prdBasisInfo.getColumn(0, "MRO_PRD_STATS_CD")

        	// 상품상태가 사용이 아닐때 진열상태로 변경 불가
        	if (mroPrdStatsCd != '00' && e.postvalue != '20')
        	{
        		this.fn_alert("ERRR000486", "저장정보", "", "information");	// 상품 상태가 사용인 경우에만 변경이 가능합니다.
        		this.Div00.form.rdo_dispStats.set_value(e.prevalue);

        		return;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_update.addEventHandler("onclick",this.btn_update_onclick,this);
            this.Div00.form.Static27_02_00_00.addEventHandler("onclick",this.Div00_Static27_02_00_00_onclick,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.stc_hashTag.addEventHandler("onclick",this.Div00_Static26_03_01_00_02_onclick,this);
            this.Div00.form.stc_bgNm.addEventHandler("onclick",this.Div00_Static26_03_01_00_01_01_onclick,this);
            this.Div00.form.btn_dispStatHst.addEventHandler("onclick",this.Div00_btn_dispStatHst_onclick,this);
            this.Div00.form.rdo_pubOnlySpr.addEventHandler("onitemchanged",this.Div00_rdo_pubOnlySpr_onitemchanged,this);
            this.Div00.form.rdo_prdStats.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
            this.Div00.form.rdo_hrmChmYn.addEventHandler("onitemchanged",this.Div00_rdo_hrmChmYn_onitemchanged,this);
            this.Div00.form.rdo_dispStats.addEventHandler("onitemchanged",this.Div00_rdo_dispStats_onitemchanged,this);
            this.Div00.form.rdo_txClcd.addEventHandler("onitemchanged",this.Div00_rdo_hrmChmYn_onitemchanged,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.tabMain.tabSub01.form.grid_price.addEventHandler("oncloseup",this.tabMain_tabSub01_grid_price_oncloseup,this);
            this.tabMain.tabSub01.form.grid_price.addEventHandler("onselectchanged",this.tabMain_tabSub01_grid_price_onselectchanged,this);
            this.tabMain.tabSub01.form.btn_bssSalsprcCurst.addEventHandler("onclick",this.tabMain_tabSub01_btn_bssSalsprcCurst_onclick,this);
            this.tabMain.tabSub01.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.tabMain.tabSub02.form.btn_condHst.addEventHandler("onclick",this.tabMain_tabSub02_btn_condHst_onclick,this);
            this.tabMain.tabSub02.form.btn_del1.addEventHandler("onclick",this.btn_del1_onclick,this);
            this.tabMain.tabSub02.form.btn_add1.addEventHandler("onclick",this.btn_add1_onclick,this);
            this.tabMain.tabSub02.form.btn_add2.addEventHandler("onclick",this.btn_add2_onclick,this);
            this.tabMain.tabSub02.form.btn_del2.addEventHandler("onclick",this.btn_del2_onclick,this);
            this.tabMain.tabSub03.form.grd_imageList.addEventHandler("oncelldblclick",this.grd_imageList_oncelldblclick,this);
            this.tabMain.tabSub03.form.grd_fileList.addEventHandler("oncelldblclick",this.grd_fileList_oncelldblclick,this);
            this.tabMain.tabSub03.form.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.tabMain.tabSub03.form.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.ds_dispInfo.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_prdBasisInfo.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_prdPrcInfo.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_prdPrcCurAply.addEventHandler("oncolumnchanged",this.ds_prdPrcCurAply_oncolumnchanged,this);
            this.ds_prdPrcCurAply.addEventHandler("cancolumnchange",this.ds_prdPrcCurAply_cancolumnchange,this);
            this.ds_prdPrcQtyDc.addEventHandler("oncolumnchanged",this.ds_prdPrcQtyDc_oncolumnchanged,this);
            this.ds_prdPrcQtyDc.addEventHandler("cancolumnchange",this.ds_prdPrcQtyDc_cancolumnchange,this);
            this.ds_prdPrcDlcst.addEventHandler("oncolumnchanged",this.ds_prdPrcDlcst_oncolumnchanged,this);
            this.ds_prdPrcDlcst.addEventHandler("cancolumnchange",this.ds_prdPrcDlcst_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_LA_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
