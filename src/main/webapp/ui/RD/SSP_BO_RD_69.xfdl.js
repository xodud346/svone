(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_RD_69");
            this.set_titletext("전시상품 견적요청 상세");
            this.set_scrollbartype("auto");
            this.set_scrolltype("vertical");
            this.set_color("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,853);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQDT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MULT_ODR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_MEMO\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_EPRC\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_PROC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PROC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_PRVL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PPI_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PRC_STPRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PSTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_op", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_ITM_SLT_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addOp", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_ITM_SLT_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_GRP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_procList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_history", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_filedown", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_supplier", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PERD_DC\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_INFO_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_DC\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PC_CPRTCP_PRD_PRC_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DTL_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DTL_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTS_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_VLD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_VLD_TERM\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSN_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POOL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delete", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PERD_DC\" type=\"STRING\" size=\"256\"/><Column id=\"PUGR_INFO_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_RECV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_DC\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PC_CPRTCP_PRD_PRC_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DTL_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTS_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_VLD_TERM\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reqProcDtls", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_INFO_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_REQ_NO\" type=\"STRING\" size=\"32\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_GB\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_INFO_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_DIS_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_GRP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_estmDisTpCdCombo", this);
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


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addOpFileInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"STRING\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_OPTN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cprtcpPrdInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ESTM_REQ_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ESTM_CMPL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PERD_DC\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"QTY_DC\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PC_CPRTCP_PRD_PRC_INFO_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ESTM_DTL_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXISTS_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_VLD_TERM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_INFO_REG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcBackGround12_00_02_00_00","669","453",null,"94","72",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_02","669","292",null,"162","72",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_00_00","60","354","600","193",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_00","60","323","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00","60","292","600","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","60","292","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("R&D카테고리 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_newPrdReqPrvlList","60","323","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("대표규격 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00","60","354","120","193",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("속성");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","60","266","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("R&D카테고리/속성 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","671","266","390","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("추가정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle01_00_00","669","292","120","162",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("등록파일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle06_00_00","669","453","120","94",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("요청사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","195","296","144","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsfNm","349","296","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_newPrdReqPrvlList","195","327","454","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mroAttr","196","360","454","179",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_op");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"decoratetext\" text=\"속성명 \"/><Cell col=\"1\" text=\"속성값\"/></Band><Band id=\"body\"><Cell text=\"bind:OPTN_NM\"/><Cell col=\"1\" text=\"bind:OPTN_ITM_SLT_CTS\" displaytype=\"text\" edittype=\"expr:dataset.parent.fn_chkEditType()\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title","60","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("R&D상품상세(고객)");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","60","176",null,"32","72",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","60","145",null,"32","72",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","60","114",null,"32","72",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","60","83",null,"32","72",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","60","52",null,"32","72",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_newPrdReqStatsNm","455","52","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_newPrdReqNo","60","52","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcTitle04","60","83","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("상품명 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround07","575","118","295","33",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ctrySprCd","455","114","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("원산지 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_basisUnitCd","60","114","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("주문단위 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_rndHubHnlDisTpCd","60","145","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Hub취급가능여부 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regpsnId","60","176","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("고객ID");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12","193","182","256","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_txClcd","849","114","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("과면세구분 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dispPrdNm","200","87","493","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_maxlength("60");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySprCd","849","52","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("공용전용구분 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfrNo","849","83","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("제조원 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","361","115","10","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("/");
            this.addChild(obj.name, obj);

            obj = new Static("stc_chmMtlYn","455","145","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("화학물질여부 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regDtm","849","145","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","989","87","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1087","87",null,"24","110",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mnfrNo",null,"87","24","24","81",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitQty","200","118","79","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_basisUnitCd","283","118","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_unitCd","332","118","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnitCd","376","118","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sellUnitCd","426","118","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrySprCd","595","118","73","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctryNm","673","118","139","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ctrySprCd","817","118","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_pubOnlySprCd","989","56","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_color("#555555");
            obj.set_enable("true");
            var rdo_pubOnlySprCd_innerdataset = new nexacro.NormalDataset("rdo_pubOnlySprCd_innerdataset", obj);
            rdo_pubOnlySprCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">공용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_pubOnlySprCd_innerdataset);
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_txClcd","989","118","142","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_color("#555555");
            obj.set_enable("true");
            var rdo_txClcd_innerdataset = new nexacro.NormalDataset("rdo_txClcd_innerdataset", obj);
            rdo_txClcd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">면세</Col></Row></Rows>");
            obj.set_innerdataset(rdo_txClcd_innerdataset);
            obj.set_text("과세");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_chmMtlYn","595","149","142","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_color("#555555");
            var rdo_chmMtlYn_innerdataset = new nexacro.NormalDataset("rdo_chmMtlYn_innerdataset", obj);
            rdo_chmMtlYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(rdo_chmMtlYn_innerdataset);
            obj.set_text("Y");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_01","60","28","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("상품 기본 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custId","198","180","251","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regDtm","989","149",null,"23","81",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_newPrdReqNo","200","56","249","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("R10168514");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_newPrdReqStatsNm","595","56","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_text("요청");
            this.addChild(obj.name, obj);

            obj = new TextArea("edit_reqRsnText","796","457","445","83",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mroAddAttr","797","300","443","147",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("grd_add_opt_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_binddataset("ds_addOp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"속성명\" controlautosizingtype=\"both\"/><Cell col=\"1\" text=\"속성값\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:ADD_OPTN_NM\" edittype=\"expr:dataset.parent.fn_chkEditType()\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:ADD_OPTN_ITM_SLT_CTS\" cssclass=\"expr:DOC_REG_ID == &apos;&apos; || DOC_REG_ID == null ? &apos;&apos; : &apos;grd_Txt_Blue_U&apos;\"/><Cell col=\"2\" text=\"bind:DOC_USE_YN\" displaytype=\"checkboxcontrol\" edittype=\"expr:dataset.parent.fn_chkEditBoxType()\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addFile","1147","265","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("추가 파일등록");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","60","585","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("견적 요청·회신");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01_00","60","1125","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("견적불가 처리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_00_00_00","60","1189",null,"100","72",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround12_00_01","60","1157",null,"32","72",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("tax_estmDisRsn","200","1194","1040","90",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_purgInfoReg",null,"575","110","24","72",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("구매정보 등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_estmReqCnc",null,"575","110","24","186",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("견적요청 취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_estmReq",null,"575","80","24","300",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("견적요청");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","60","819","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("+ 추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","131","819","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("- 삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_02","60","873","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("요청 처리 내역");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_reqProcDtls","60","905",null,"200","72",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("row");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_reqProcDtls");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"처리상태\"/><Cell col=\"2\" text=\"처리일\"/><Cell col=\"3\" text=\"처리자\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:ESTM_INFO_STATS_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:UPD_DTM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:UPDPSN_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_estmDisTpCd","60","1157","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("견적불가유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_estmDisRsn","60","1189","130","100",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("상세 사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_estmDisTpCd","200","1161","380","23",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_innerdataset("ds_estmDisTpCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_prdUseYn","592","1161","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("상품 미사용");
            obj.set_value("false");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new Button("btn_estmDisProc",null,"1299","120","24","72",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("견적불가처리");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_estmCmpl",null,"819","80","24","72",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("처리완료");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_regpsnNm","455","176","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("고객사명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","595","180","246","24",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","60","1351","1204","29",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rndHubHnlDisTpCd","200","149","249","24",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_innerdataset("ds_hubHnlDisTpCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_supplier_lst","60","609",null,"200","72",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_binddataset("ds_supplier");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_selecttype("cell");
            obj.set_cellclickbound("cell");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"225\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"선택\" displaytype=\"normal\"/><Cell col=\"1\" colspan=\"2\" text=\"협력사\"/><Cell col=\"3\" text=\"메모\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"최소발주수량\"/><Cell col=\"6\" text=\"평균배송일\"/><Cell col=\"7\" text=\"매입가\"/><Cell col=\"8\" text=\"배송비\"/><Cell col=\"9\" text=\"구매정보 유효기간\"/><Cell col=\"10\" text=\"화학물질정보\"/><Cell col=\"11\" text=\"KC인증정보\"/><Cell col=\"12\" text=\"기간할인\"/><Cell col=\"13\" text=\"물량할인\"/><Cell col=\"14\" text=\"견적요청일\"/><Cell col=\"15\" text=\"견적회신일\"/><Cell col=\"16\" text=\"구매정보등록일\"/></Band><Band id=\"body\"><Cell textDecoration=\"underline\" color=\"#235da8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"none\" textAlign=\"left\" editautoselect=\"true\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" text=\"bind:CPRTCP_ID\" textareascrolltype=\"none\" textareascrollbartype=\"none\"/><Cell col=\"2\" text=\"bind:CPRTCP_KOR_NM\" displaytype=\"editcontrol\" combodataset=\"dsProcSt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" expandshow=\"expr:EXISTS_YN == &apos;N&apos; ? &apos;show&apos; : &apos;hide&apos;\" expandsize=\"25\" textAlign=\"left\" editautoselect=\"true\" edittype=\"none\" textareascrolltype=\"none\" textareascrollbartype=\"none\"/><Cell col=\"3\" color=\"#235da8\" textDecoration=\"underline\" text=\"expr:dataset.getColumn(currow, &quot;POOL_YN&quot;) == &quot;Y&quot;  ?  &quot;참고사항&quot; : &quot;&quot; \"/><Cell col=\"4\" text=\"bind:ESTM_DTL_STATS_NM\" displaytype=\"normal\" comboautoselect=\"false\" tooltiptext=\"expr:ESTM_DTL_STATS_CD==&apos;40&apos;?RSN_TXT&apos;:&apos;&apos;\" subsumtext=\"상태\" cssclass=\"expr:ESTM_DTL_STATS_CD==&quot;40&quot;?&quot;grd_Txt_Red_UC&quot;:&quot;&quot;\" edittype=\"none\" suppressalign=\"last\"/><Cell col=\"5\" text=\"bind:MIN_ODR_QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:DLV_LT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:PRD_PRC\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:DLV_AMT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:PURG_VLD_TERM\"/><Cell col=\"10\" textAlign=\"center\" displaytype=\"imagecontrol\" edittype=\"none\" text=\"expr:ESTM_DTL_STATS_CD == null || ESTM_DTL_STATS_CD == &apos;&apos; || ESTM_DTL_STATS_CD == &apos;10&apos; ? &apos;&apos; : &apos; theme://images/btn_WF_search02.png&apos;\" subsumtext=\"화학물질정보\"/><Cell col=\"11\" displaytype=\"imagecontrol\" edittype=\"none\" text=\"expr:ESTM_DTL_STATS_CD == null || ESTM_DTL_STATS_CD == &apos;&apos; || ESTM_DTL_STATS_CD == &apos;10&apos; ? &apos;&apos; : &apos; theme://images/btn_WF_search02.png&apos;\" subsumtext=\"KC인증정보\"/><Cell col=\"12\" text=\"bind:PERD_DC\" wordWrap=\"char\"/><Cell col=\"13\" text=\"bind:QTY_DC\" wordWrap=\"char\"/><Cell col=\"14\" text=\"bind:ESTM_REQ_DTM\"/><Cell col=\"15\" text=\"bind:ESTM_CMPL_DTM\"/><Cell col=\"16\" text=\"bind:PUGR_INFO_REG_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","60","1304","405","16",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("* 상세사유는 고객/협력사에게 노출 되오니 신중하게 작성하시기 바랍니다.");
            obj.set_usedecorate("true");
            obj.set_color("#555555");
            this.addChild(obj.name, obj);

            obj = new Button("btn_receipt","1157","10","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("접수");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","735","268","290","19",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","1029","268","98","19",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,853,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_prdClcd","value","ds_detail","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_prdClsfNm","value","ds_detail","PRD_CLNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_dispPrdNm","value","ds_detail","DISP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_mnfrNo","value","ds_detail","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_mnfrNm","value","ds_detail","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_basisUnitQty","value","ds_detail","BASIS_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edt_basisUnitCd","value","ds_detail","BASIS_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edt_sellUnitCd","value","ds_detail","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edt_ctrySprCd","value","ds_detail","ORGPLC_CTRY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edt_ctryNm","value","ds_detail","CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","rdo_pubOnlySprCd","value","ds_detail","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","rdo_txClcd","value","ds_detail","TX_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","rdo_chmMtlYn","value","ds_detail","CHM_MTL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","edt_custId","value","ds_detail","MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","edt_regDtm","value","ds_detail","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","edt_newPrdReqNo","value","ds_detail","ESTM_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","edt_newPrdReqStatsNm","value","ds_detail","ESTM_INFO_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tax_estmDisRsn","value","ds_detail","ESTM_DIS_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cbo_estmDisTpCd","value","ds_detail","ESTM_DIS_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","chk_prdUseYn","value","ds_detail","PRD_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_bzplcNm","value","ds_detail","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cbo_rndHubHnlDisTpCd","value","ds_detail","HUB_HNL_DIS_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_newPrdReqPrvlList","value","ds_detail","NEW_PRD_REQ_PRVL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edit_reqRsnText","value","ds_detail","REQ_RSN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_69.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_69.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        this.return = {isProcessed : false};  // 데이터 처리 여부

        // 첨부파일
        this.fileType = ".pptx, .ppt, .docx, .doc, .xls, .xlsx, image/*, text/*, .zip"; //첨부파일 종류
        this.maxFileSize = 10; //MB단위

        this.lvchkColidDs   = "DISP_PRD_NM$MNFR_NO$BASIS_UNIT_QTY$BASIS_UNIT_CD$ORGPLC_CTRY_CD$RND_HUB_HNL_DIS_TP_CD$PRD_CLCD$NEW_PRD_REQ_PRVL_LIST";
        this.lvchkColNameDs = "상품명$제조원$기본단위수량$기본단위코드$원산지$Hub취급가능여부$R&D카테고리$속성";

        this.fv_oApp        = nexacro.getApplication();
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd       = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.coCd    		= "";
        this.estmReqNo    	= "";
        this.prdClcd    	= "";
        this.dispGrpId	    = "";
        this.estmReqProcStatCd = "";

        this.lvGetDate      = "";								 // 현재일자 가져오기 위한 변수 값
        this.imageViewerId  = "";								 // 이미지파일 뷰어 표시를 위한 변수 값
        this.fileIndex      = "";								 // 파일 index 값을 저장을 위한 변수 값
        this.imageFileYn    = false;							 // 이미지 및 첨부파일 구분을 위한 변수 값
        this.lv_ctryCdYn    = "";                                // 국가코드 정합성 여부
        this.lv_mnfrNoYn    = "";                                // 제조원코드 정합성 여부
        this.lv_btnChkYn	= "";

        /***********************************************************************************************
        * 초기화
        ************************************************************************************************/
        this.fn_compontAllControl = function ()
        {
        	var btnEnableTrue   = {
        							btn_exit : this.btn_exit
        						  , btn_close  : this.btn_close
        	                      };
        	var btnVisibleFalse = {};
        	this.chk_prdUseYn.set_readonly(true);
        	this.fn_componentInitViewControl(this, btnEnableTrue, btnVisibleFalse);
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
        		var strMnfrNo  = this.ds_detail.getColumn(0,"MNFR_NO");
        		var strPrdClcd = this.ds_detail.getColumn(0,"PRD_CLCD");

        		// RND상품권한조회 구매담당자 & 상품담당자 정/부 체크
        		this.fn_getRndPrdAuthInq(strMnfrNo, strPrdClcd);

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

        	this.fn_compCont();
        }

        this.fn_compCont = function() {
        	this.fn_false();

        	var statusCd = this.ds_detail.getColumn(0, "ESTM_REQ_PROC_STATS_CD");
        	var infoStat = this.ds_detail.getColumn(0, "ESTM_INFO_STATS_CD");
        	var mroStatusCd = this.ds_detail.getColumn(0, "MRO_PROC_STATS_CD");
        	var objDate = new nexacro.Date();

        	if(statusCd == "10"){			// 요청
        		this.btn_receipt.set_visible(true);
        		this.btn_addFile.set_visible(true);
        		this.btn_estmDisProc.set_visible(true);

        		var textLen = "";
        		for(var idx=0; idx<this.ds_op.getRowCount(); idx++)
        		{
        			var val = this.ds_op.getColumn(idx, "OPTN_ITM_SLT_CTS");

        			if(this.gfn_nvl(val,"") != "")
        			{
        				if(textLen != "")
        				{
        					textLen += ";";
        				}
        				textLen += val;
        			}
        		}
        	} else {
        		this.btn_estmReq.set_visible(true);
        		this.btn_estmReqCnc.set_visible(true);
        		this.btn_purgInfoReg.set_visible(true);
        		this.btn_add.set_visible(true);
        		this.btn_del.set_visible(true);
        		this.btn_estmCmpl.set_visible(true);
        		this.btn_estmDisProc.set_visible(true);

        		this.btn_mnfrNo.set_enable(false);
        		this.btn_unitCd.set_enable(false);
        		this.btn_sellUnitCd.set_enable(false);
        		this.btn_ctrySprCd.set_enable(false);

        		this.edt_dispPrdNm.set_readonly(true);
        		this.rdo_txClcd.set_readonly(true);
        		this.edt_mnfrNo.set_readonly(true);
        		this.edt_basisUnitQty.set_readonly(true);
        		this.edt_ctrySprCd.set_readonly(true);
        		this.cbo_rndHubHnlDisTpCd.set_readonly(true);
        		this.rdo_chmMtlYn.set_readonly(true);
        		this.edit_reqRsnText.set_readonly(true);
        		/*
        		if(infoStat == "10") { // 접수
        			this.btn_estmReq.set_visible(true);
        			this.btn_estmReqCnc.set_visible(true);
        			this.btn_purgInfoReg.set_visible(true);
        			this.btn_add.set_visible(true);
        			this.btn_del.set_visible(true);
        			this.btn_estmCmpl.set_visible(true);
        			this.btn_estmDisProc.set_visible(true);

        			this.btn_mnfrNo.set_enable(false);
        			this.btn_unitCd.set_enable(false);
        			this.btn_sellUnitCd.set_enable(false);
        			this.btn_ctrySprCd.set_enable(false);

        			this.edt_dispPrdNm.set_readonly(true);
        			this.rdo_txClcd.set_readonly(true);
        			this.edt_mnfrNo.set_readonly(true);
        			this.edt_basisUnitQty.set_readonly(true);
        			this.edt_ctrySprCd.set_readonly(true);
        			this.cbo_rndHubHnlDisTpCd.set_readonly(true);
        			this.rdo_chmMtlYn.set_readonly(true);
        			this.edit_reqRsnText.set_readonly(true);
        		} else if(infoStat == "20") { // 견적중
        			this.btn_estmReq.set_visible(true);
        			this.btn_estmReqCnc.set_visible(true);
        			this.btn_purgInfoReg.set_visible(true);
        			this.btn_add.set_visible(true);
        			this.btn_del.set_visible(true);
        			this.btn_estmCmpl.set_visible(true);
        			this.btn_estmDisProc.set_visible(true);

        			this.btn_mnfrNo.set_enable(false);
        			this.btn_unitCd.set_enable(false);
        			this.btn_sellUnitCd.set_enable(false);
        			this.btn_ctrySprCd.set_enable(false);

        			this.edt_dispPrdNm.set_readonly(true);
        			this.rdo_txClcd.set_readonly(true);
        			this.edt_mnfrNo.set_readonly(true);
        			this.edt_basisUnitQty.set_readonly(true);
        			this.edt_ctrySprCd.set_readonly(true);
        			this.cbo_rndHubHnlDisTpCd.set_readonly(true);
        			this.rdo_chmMtlYn.set_readonly(true);
        			this.edit_reqRsnText.set_readonly(true);
        		} else if(infoStat == "30" || infoStat == "60" || infoStat == "50") { // 견적완료 || 상품등록완료 || 처리불가

        		}
        		*/
        	}

        	if(infoStat == "10" || infoStat == "20"){

        	}
        }

        // button, edit disable
        this.fn_false = function() {
        	// button
        	this.btn_receipt.set_visible(false);
        	this.btn_estmReq.set_visible(false);
        	this.btn_estmReqCnc.set_visible(false);
        	this.btn_purgInfoReg.set_visible(false);
        	this.btn_addFile.set_visible(false);
        	this.btn_add.set_visible(false);
        	this.btn_del.set_visible(false);
        	this.btn_estmCmpl.set_visible(false);
        	this.btn_estmDisProc.set_visible(false);

        	// static
        	// this.sta_file.set_visible(false);
        }

        /***********************************************************************************************
        * 공통 코드 및 콤보 데이타 조회
        ************************************************************************************************/
        this.fn_init = function()
        {
        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().args.CO_CD))
        	{
        		 this.coCd = this.getOwnerFrame().CO_CD;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().args.ESTM_REQ_NO))
        	{
        		 this.estmReqNo = this.getOwnerFrame().ESTM_REQ_NO;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().args.PRD_CLCD))
        	{
        		 this.prdClcd = this.getOwnerFrame().PRD_CLCD;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().args.DISP_GRP_ID))
        	{
        		 this.dispGrpId = this.getOwnerFrame().DISP_GRP_ID;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().args.ESTM_REQ_PROC_STATS_CD))
        	{
        		 this.estmReqProcStatCd = this.getOwnerFrame().ESTM_REQ_PROC_STATS_CD;
        	}

        	this.lvGetDate = this.fn_getSvrDate(); // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.

        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	if(this.parent && this.parent.args) {
        		this.ds_search.setColumn(0, "CO_CD", this.parent.args.CO_CD);									// 회사코드
        		this.ds_search.setColumn(0, "ESTM_REQ_NO", this.parent.args.ESTM_REQ_NO);						// 견적요청번호
        		this.ds_search.setColumn(0, "PRD_CLCD", this.parent.args.PRD_CLCD);								// 상품분류코드
        		this.ds_search.setColumn(0, "DISP_GRP_ID", this.parent.args.DISP_GRP_ID);						// 전시그룹ID
        		this.ds_search.setColumn(0, "ESTM_REQ_PROC_STATS_CD", this.parent.args.ESTM_REQ_PROC_STATS_CD);	// 전시그룹ID
        		this.ds_search.setColumn(0, "MAIN_GUBUN", "N");													// 메인화면구분
        	}

            var strDs    = "ds_hubHnlDisTpCdCombo|ds_estmDisTpCdCombo|ds_rndEstmDtlStatsCdCombo|ds_rndPrdAuthCombo";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "HUB_HNL_DIS_TP_CD|ESTM_DIS_TP_CD|RND_ESTM_DTL_STATS_CD|CHRPSN_TEAM_SPR_CD";                	// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S|N|X";	// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";          // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // fn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);
        }

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            // 공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	this.fn_init();
        }

        // ESC를 이용한 팝업 닫기
        this.SSP_BO_RD_69_onkeyup = function(obj,e)
        {
        	// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		//this.btn_clear_onclick();
        		this.close();
        	}
        }

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // 조회
        this.fn_search = function (pgNo){
            var sSvcId = "Search";

            var sUrl   = "/rd/disp-prd-mng-estm-req-lst/select-product-estimate-detail.do";
            var inDs   = "ds_search=ds_search";
            var outDs  = "ds_detail=ds_detail ds_op=ds_op ds_addOp=ds_addOp ds_history=ds_history ds_supplier=ds_supplier ds_reqProcDtls=ds_reqProcDtls";
            var arg    = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }


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
            var strUrl      = "/rd/cprtcp-estm-req-mng/save-cprtcp-disp-estm-stats-dtls-stor.do";
            var strInDs     = "ds_search=ds_search:a";
                strInDs    += " ds_input=ds_input:u";
        		strInDs    += " ds_detail=ds_detail";
        		strInDs    += " ds_supplier=ds_supplier";
        		strInDs    += " ds_op=ds_op";
        		strInDs    += " ds_addOp=ds_addOp"
        		strInDs    += " ds_delete=ds_delete:u";
            var strOutDs    = "ds_detail=ds_detail";
        	    strOutDs   += " ds_supplier=ds_supplier";
        		strOutDs   += " ds_reqProcDtls=ds_reqProcDtls";
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

        // 상태변경
        this.fn_estiReq = function (statCd) {
        	this.ds_detail.setColumn(0, "ESTM_REQ_PROC_STATS_CD", statCd);

            var sSvcId = "updateEstimateStatus";
            var sUrl   = "/rd/disp-prd-mng-estm-req-lst/pr-product-estimate-status-list.do";
            var inDs   = "ds_list=ds_detail ds_addOp=ds_addOp ds_op=ds_op";
            var outDs  = "";
            var arg    = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        this.fn_addOpSave = function (pgNo){
            var sSvcId = "addOpSave";

            var sUrl   = "/rd/disp-prd-mng-estm-req-lst/save-rnd-disp-estm-add-options.do";
            var inDs   = "ds_addOpFileInfo=ds_addOpFileInfo";
            var outDs  = "ds_addOp=ds_addOp";
            var arg    = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        /**
         * 기능 : 협력사상품정보 조회 실행
         */
        this.fn_CprtcpRet = function(cprtcpId)
        {
            if(!this.fn_PreCprtcpRet(cprtcpId))
            {
                return false;
            }
            var strSvc      = "CprtcpRet";
            var strUrl      = "/rd/cprtcp-estm-req-mng/select-cprtcp-prd-info-inq.do";
            var strInDs     = "ds_search=ds_input";
            var strOutDs    = "ds_cprtcpPrdInfo=ds_cprtcpPrdInfo";
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
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave_L = function()
        {
        	return true;
        }

        /**
         * 기능 : 협력사상품정보 조회 전 실행
         */
        this.fn_PreCprtcpRet = function(cprtcpId)
        {
        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();
        	this.ds_input.setColumn(nRow,"CO_CD",      this.lv_coCd);
        	this.ds_input.setColumn(nRow,"ESTM_REQ_NO",this.edt_newPrdReqNo.value);
        	this.ds_input.setColumn(nRow,"CPRTCP_ID",  cprtcpId);
        	this.ds_input.setColumn(nRow,"PRD_ID",     this.ds_detail.getColumn(0,"NEW_PRD_ID"));
            // 조회조건 셋팅
            return true;
        }

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave_R = function()
        {
        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();

        	this.ds_input.setColumn(nRow, "CO_CD",             this.ds_detail.getColumn(0,"CO_CD"));                            	// 회사코드
        	this.ds_input.setColumn(nRow, "ESTM_REQ_NO",       this.ds_detail.getColumn(0,"ESTM_REQ_NO"));                      	// 고객요청번호
        	this.ds_input.setColumn(nRow, "ESTM_DIS_TP_CD",    this.ds_detail.getColumn(0,"ESTM_DIS_TP_CD"));                   	// 견적불가유형코드
        	this.ds_input.setColumn(nRow, "ESTM_DIS_RSN",      this.ds_detail.getColumn(0,"ESTM_DIS_RSN"));                     	// 견적불가상세사유
        	this.ds_input.setColumn(nRow, "DISP_GRP_ID",      this.ds_detail.getColumn(0,"DISP_GRP_ID"));                     	// 전시그룹ID
        	this.ds_input.setColumn(nRow, "CPRTCP_ID",         "*");
        	this.ds_input.setColumn(nRow, "CO_GB",             "50");
        	this.ds_input.setColumn(nRow, "ESTM_INFO_STATS_CD","50");                                                           	// 견적정보상태코드[50:처리불가]
        	this.ds_input.setColumn(nRow, "REQ_SBJ_CD",        "10");

        	// 2022.10.19 sg.park SSP-1265 [BO 견적요청 목록] 상품미사용 버튼 작동 오류
        	this.ds_input.setColumn(nRow, "PRD_ID",			   this.ds_detail.getColumn(0, "NEW_PRD_ID"));							// 상품 아이디
        	this.ds_input.setColumn(nRow, "PRD_USE_YN",        this.ds_detail.getColumn(0, "PRD_USE_YN") == "true" ? "N" : "Y");	// 상품미사용여부

        	return true;
        }

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
            var strUrl      = "/rd/cprtcp-estm-req-mng/save-disp-estm-dis-proc-stor.do";
            var strInDs     = "ds_input=ds_input:u";
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
        }

        /**
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave_R = function()
        {
        	this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다

        	this.close("SAVE");
        }

        /**
         * 기능 : 저장 실행
         */
        this.fn_StatPiCall = function()
        {
            var strSvc      = "PiCall";
            var strUrl      = "/rd/cprtcp-estm-req-mng/cms-pi-call-stat.do";
            var strInDs     = " ds_detail=ds_detail";
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
        }

        /**
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave_R = function()
        {
        	this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다

        	this.close("SAVE");
        }


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        // 서비스 콜백
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
        	    // 조회
                case "Init" :
        			this.fn_search();
                    break;

        		// 조회 후처리
                case "Search" :
        			this.fn_PostSearch();
                    break;

        		case "btn_receipt" :
        			if(errorCode){
        				this.fn_estiReq("20");						// 접수
        			}

                    break;

        		case "btn_esting" :
        			if(errorCode){
        				this.fn_estiReq("30");						// 견적중
        			}

                    break;

        		case "btn_estiComp" :
        			if(errorCode){
        				this.FileUpTransfer.setPostData("pgmId", "SSP_BO_NA_31");
        				this.FileUpTransfer.setPostData("mnuSeq", "1");
        				this.FileUpTransfer.upload("/co/file-upload.do");
        			}

                    break;

        		case "btn_reReq" :
        			if(errorCode){
        				this.fn_estiReq("50");						// 재요청
        			}

                    break;

                // 상태변경
                case "updateEstimateStatus" :
        			this.return.isProcessed = true;

        			if (this.ds_detail.getColumn(0, "ESTM_INFO_STATS_CD") == "50") {
        				if(this.ds_stat.getColumn(0, "RST_CD") != "E") {
        					this.gfn_popMessage("ERRP000131");
        					this.reload();
        				} else {
        					alert(this.ds_stat.getColumn(0, "RST_MSG"));
        				}
        			} else {
        				this.reload();
        			}

                    break;
        		case "CprtcpRet":
        				this.fn_PostCprtcpRet();
        			break;
        		case "Save_R":
        			if(this.gfn_isNull(errorMsg)) {
        				this.fn_StatPiCall();
        				this.fn_PostSave_R();
        			}
        			break;
        		case "Save_L":
        			if(this.gfn_isNull(errorMsg)) {
        				this.fn_PostSave_L();
        			}
        			break;
            }
        }

        // 팝업 콜백
        this.fn_popupCallback = function(svcID, args){
            switch(svcID)
        	{
        		// 카테고리 추천&조회 팝업 후처리
        		case "btn_catgRcmdInq" :
        				if(!this.gfn_isNull(args))
        				{
        					var jsonData = JSON.parse(args);
        					this.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        					this.edt_prdClsfNm.set_value(jsonData.FULL_PRD_CLSF_NM);
        					this.fn_CatgAttrInfo();
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// R&D카테고리 조회 팝업 후처리
        		case "btn_prdClPop" :
        				if(!this.gfn_isNull(args))
        				{
        					var jsonData = JSON.parse(args);
        					this.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        					this.edt_prdClsfNm.set_value(jsonData.FULL_PRD_CLSF_NM);
        					this.fn_CatgAttrInfo();
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        				break;
        		// 제조원 조회팝업 후처리
        		case "btn_mnfrNo" :
        				if(!this.gfn_isNull(args))
        				{
        					var jsonData = JSON.parse(args);
        					this.edt_mnfrNo.set_value(jsonData.MNFR_NO);
        					this.edt_mnfrNm.set_value(jsonData.MNFR_NM);
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        			break;
        		// 원산지 조회팝업 후처리
        		case "btn_ctrySprCd" :
        				if(!this.gfn_isNull(args))
        				{
        					var jsonData = JSON.parse(args);
        					this.edt_ctrySprCd.set_value(jsonData.CTRY_SPR_CD);
        					this.edt_ctryNm.set_value(jsonData.CTRY_NM);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 기본주문단위 조회팝업 후처리
        		case "btn_unitCd" :
        				if(!this.gfn_isNull(args))
        				{
        					var jsonData = JSON.parse(args);
        					this.edt_basisUnitCd.set_value(jsonData.UNIT_CD);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 판매주문단위 조회팝업 후처리
        		case "btn_sellUnitCd" :
        				if(!this.gfn_isNull(args))
        				{
        					var jsonData = JSON.parse(args);
        					this.edt_sellUnitCd.set_value(jsonData.UNIT_CD);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 상품고시 조회 팝업 후처리
        		case "btn_notiItmId" :
        				if(!this.gfn_isNull(args))
        				{
        					var jsonData = JSON.parse(args);
        					this.tabMain.tabSub03.form.edt_notiItmId.set_value(jsonData.NOTI_ITM_ID);
        					this.tabMain.tabSub03.form.edt_notiItmIdNm.set_value("("+jsonData.NOTI_ITM_ID + ") " + jsonData.NOTI_ITM_NM);
        					this.fn_PrdNotiPrdInq();
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
        		// 협력사 조회팝업 후처리
        		case "SSP_BO_PP_41" :
        			 if(!this.gfn_isNull(args))
        			 {
        			 	 var jsonData    = JSON.parse(args);
        				 var strCprtcpId = jsonData.CPRTCP_ID.replace(/,\s*$/,    "");
        				 var strCprtcpNm = jsonData.CPRTCP_KOR_NM.replace(/,\s*$/,"");
        				 var findRow     = this.ds_supplier.findRow("CPRTCP_ID",strCprtcpId);

        				 this.ds_supplier.setColumn(this.ds_supplier.rowposition, "POOL_YN", "N");
        				 this.ds_supplier.setColumn(this.ds_supplier.rowposition, "RMKS", "");


        				 if(findRow != -1)
        				 {
        					this.fn_alert("ERRR000229","추가정보","","question"); // 협력사가 중복되었습니다. 협력사ID를 확인해주세요.
        					this.ds_supplier.set_rowposition(findRow);
        					return false;
        				 }
        				 else
        				 {
        					 this.ds_supplier.setColumn(this.ds_supplier.rowposition,"CPRTCP_ID",    strCprtcpId);
        					 this.ds_supplier.setColumn(this.ds_supplier.rowposition,"CPRTCP_KOR_NM",strCprtcpNm);
        					 // 협력사상품정보 조회 호출
        					 this.fn_CprtcpRet(strCprtcpId);
        				 }
        			 }
        			 break;
        		default :
        			break;
            }
        }


        /***********************************************************************************************
        * 전/후 기능
        ************************************************************************************************/
        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostSearch = function()
        {
        	// 견적상태가 [40:처리완료,50:처리불가]인 경우 화면 제어 불가능
        	if(this.ds_detail.getColumn(0,"ESTM_INFO_STATS_CD") == "40" || this.ds_detail.getColumn(0,"ESTM_INFO_STATS_CD") == "50")
        	{
        		this.fn_compontAllControl();
        	}
        	// RND화면권한제어
        	this.fn_setRndUiAuthCtl();
        }

        /**
         * 기능 : 카테고리속성 조회 전 실행
         */
        this.fn_PreCatgAttrInfo = function()
        {
            // 조회조건 셋팅
            return true;
        }

        /**
         * 기능 : 카테고리속성 조회 후 실행
         */
        this.fn_PostCatgAttrInfo = function()
        {
        	this.edt_newPrdReqPrvlList.set_value("");

        	// 카테고리속성에 맵핑된 상품고시 존재시
        	if(this.ds_op.getRowCount() > 0)
        	{
        		var textLen = "";

        		for(var idx=0; idx<this.ds_op.getRowCount(); idx++)
        		{
        			var val = this.ds_op.getColumn(idx, "OPTN_ITM_SLT_CTS");

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
        		/*
        		var strNotiItmId = this.ds_catgRcmdInq.getColumn(0,"NOTI_ITM_ID");
        		var strNotiItmNm = this.ds_catgRcmdInq.getColumn(0,"NOTI_ITM_NM");

        		if(!this.gfn_isNull(strNotiItmId))
        		{
        			this.tabMain.tabSub03.form.edt_notiItmId.set_value(strNotiItmId);
        			this.tabMain.tabSub03.form.edt_notiItmIdNm.set_value(strNotiItmNm);
        			this.fn_PrdNotiPrdInq();
        		}
        		*/
        	}
        }

        /**
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave_L = function()
        {
        	this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다

        	this.lvSaveMode = "SAVE";

        	// 견적상태가 [40:처리완료,50:처리불가]인 경우 화면 제어 불가능
        	if(this.ds_detail.getColumn(0,"ESTM_INFO_STATS_CD") == "40" || this.ds_detail.getColumn(0,"ESTM_INFO_STATS_CD") == "50")
        	{
        		this.fn_compontAllControl();
        	}
        }

        /**
         * 기능 : 협력사상품정보 조회 후 실행
         */
        this.fn_PostCprtcpRet = function()
        {
        	if(this.ds_cprtcpPrdInfo.getRowCount() > 0)
        	{
        		for(var idx=0; idx<this.ds_cprtcpPrdInfo.getColCount(); idx++)
        		{
        			var colId = this.ds_cprtcpPrdInfo.getColID(idx);
        			var value = this.ds_cprtcpPrdInfo.getColumn(0, colId);
        			this.ds_supplier.setColumn(this.ds_supplier.rowposition, colId, value);
        		}
        	}
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_chkEditType = function() {
        	sTargetValue = this.ds_detail.getColumn(0, "ESTM_REQ_PROC_STATS_CD");

        	if (sTargetValue != "10") {
        		return "none";
        	} else {
        		return "text";
        	}
        }

        this.fn_chkEditBoxType = function() {
        	sTargetValue = this.ds_detail.getColumn(0, "ESTM_REQ_PROC_STATS_CD");

        	if (sTargetValue != "10") {
        		return "none";
        	} else {
        		return "checkbox";
        	}
        }

        /***********************************************************************************************
        *  팝업 영역
        ************************************************************************************************/
        /**
         * 신규등록 및 목록상세 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	    = "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	    = params.saveMode;			// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01     = params.key1;		        // 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02     = params.key2; 				// 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03     = params.key3;             	// 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04     = params.key4;			    // 부모에서 넘어가는 파라미터(폼경로)
        	var lv_sValue05     = params.key5;			    // 부모에서 넘어가는 파라미터(폼경로)
        	var sPopId 		    = params.popNm ;
        	var sUrl 		    = "RD::"+params.popNm+".xfdl";
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

        // 협력사 팝업
        this.div_info_btn_collab_onclick = function(obj,e)
        {
        	var params  = {
        					cprtcpId : this.edt_collabCd.value,
        					cprtcpKorNm : this.edt_collabNm.value
         				  };
         	var options = {};

        	this.gfn_openPopup(e.fromobject.id, "PP_POP::SSP_BO_PP_41.xfdl", params,  "fn_popupCallback", options);
        }

        // 기본단위 팝업
        this.btn_unitCd_onclick = function(obj,e)
        {
        	var params  = { unitCd : this.edt_basisUnitCd.value
        				  , coCd   : this.lv_coCd };

            var options = { title : "기본 주문단위 조회" };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_12.xfdl", params, "fn_popupCallback", options);
        }

        // 제조원 팝업
        this.btn_mnfrNo_onclick = function(obj,e)
        {
        	var params  = { mnfrNo : this.edt_mnfrNo.value
        	              , mnfrNm : this.edt_mnfrNm.value
        				  , coCd   : this.lv_coCd };

            var options = { title : "제조원" };

            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_08.xfdl", params, "fn_popupCallback", options);
        }

        /**
         * 판매주문단위 팝업 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_sellUnitCd_onclick = function(obj,e)
        {
        	var params  = { unitCd : this.edt_sellUnitCd.value
        				  , coCd   : this.lv_coCd };

            var options = { title : "판매 주문단위 조회" };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_12.xfdl", params, "fn_popupCallback", options);
        }


        // 닫기
        this.SSP_BO_RD_69_onclose = function(obj,e)
        {
        	this.close(JSON.stringify(this.return));
        }


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        /**
         * 견적요청 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_estmReq_onclick = function(obj,e)
        {
        	if(this.ds_supplier.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	// 협력사 정보 없을시
        	if(this.ds_supplier.findRowExpr("CHK == '1' && CPRTCP_ID == null") != -1)
        	{
        		this.fn_alert("ERRR000137","저장정보","","question"); // 협력사를 선택해 주세요
        		this.ds_supplier.set_rowposition(this.ds_supplier.findRowExpr("CHK == '1' && CPRTCP_ID == null"));
        		this.grd_supplier_lst.setCellPos(this.grd_supplier_lst.getBindCellIndex("body","CPRTCP_ID"));
        		this.grd_supplier_lst.showEditor();
        		return false;
        	}

        	for(var idx=0; idx<this.ds_supplier.getRowCount(); idx++)
        	{
        		var strChk            = this.ds_supplier.getColumn(idx,"CHK");
        		var strEstmDtlStatsCd = this.gfn_nvl(this.ds_supplier.getColumn(idx,"ESTM_DTL_STATS_CD"),"");

        		if(strChk == 1 && (strEstmDtlStatsCd != ""))
        		{
        			// 이미 진행중인 건이 포함되어 있습니다.
        			this.fn_alert("ERRR000208","저장정보","","question");
        			return false;
        		}
        	}

        	// 선택한 건들을 모두 &1 처리 하시겠습니까?
        	var result = this.fn_confirm("ERRR000200", "저장정보","견적요청","question" );

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	for(var idx=0; idx<this.ds_supplier.getRowCount(); idx++)
        	{
        		if(!this.gfn_isNull(this.ds_supplier.getColumn(idx,"CPRTCP_ID")))
        		{
        			var nRow = this.ds_input.addRow();
        			this.ds_input.setColumn(nRow,"CHK",        this.ds_supplier.getColumn(idx,"CHK"));
        			this.ds_input.setColumn(nRow,"CO_CD",      this.ds_supplier.getColumn(idx,"CO_CD"));
        			this.ds_input.setColumn(nRow,"ESTM_REQ_NO",this.ds_supplier.getColumn(idx,"ESTM_REQ_NO"));
        			this.ds_input.setColumn(nRow,"CPRTCP_ID",  this.ds_supplier.getColumn(idx,"CPRTCP_ID"));
        			this.ds_input.setColumn(nRow,"EXISTS_YN",  this.ds_supplier.getColumn(idx,"EXISTS_YN"));
        			this.ds_input.setColumn(nRow,"CO_GB",      "10");
        		}
        	}

        	this.fn_Save_L();
        }

        // 추가정보 그리드 셀 클릭
        this.grd_mroAddAttr_oncellclick = function(obj,e)
        {
        	// 파일 다운로드
        	if (e.col == this.grd_mroAddAttr.getBindCellIndex("body", "ADD_OPTN_ITM_SLT_CTS")) {
        		var docRegId = this.ds_addOp.getColumn(e.row, "DOC_REG_ID");
        		var docRegSeq = this.ds_addOp.getColumn(e.row, "DOC_REG_SEQ");
        		if (docRegId != '' && docRegId != null) {
        			this.addfileDown(docRegId, docRegSeq);
        		}
        	}
        	// 사용여부
        	else if (e.col == this.grd_mroAddAttr.getBindCellIndex("body", "DOC_USE_YN")) {
        	}
        }

        // 협력사 그리드
        this.grd_supplier_lst_oncellclick = function(obj,e)
        {
        	var strSubsumtext = this.gfn_nvl(obj.getCellProperty("body",e.cell,"subsumtext"),"");

        	// 참고사항 클릭시
        	if(e.col == 3 && this.ds_supplier.getColumn(this.ds_supplier.rowposition, "POOL_YN") == "Y") {
        		var param = { rmks:this.ds_supplier.getColumn(this.ds_supplier.rowposition, "RMKS")};
        		this.gfn_openPopup("SSP_BO_PP_36", "CO_POP::SSP_BO_PP_36.xfdl", param);
        	}

        	if(strSubsumtext != "")
        	{
        		var strEstmDtlStatsCd = this.gfn_nvl(this.ds_supplier.getColumn(e.row,"ESTM_DTL_STATS_CD"),"");

        		if(strEstmDtlStatsCd != "" && strEstmDtlStatsCd != "10" && strSubsumtext != "상태")
        		{
        			var params           = "";
        			var strCocd          = this.ds_supplier.getColumn(e.row,"CO_CD");
        			var strCustPreqno    = this.ds_supplier.getColumn(e.row,"ESTM_REQ_NO");
        			var strCprtcpId      = this.ds_supplier.getColumn(e.row,"CPRTCP_ID");
        			var strPrdId         = this.ds_supplier.getColumn(e.row,"PRD_ID");
        			var strContNo        = this.ds_supplier.getColumn(e.row,"CONT_NO");
        			var strContChgDgrCnt = this.ds_supplier.getColumn(e.row,"CONT_CHG_DGRCNT");
        			var strSaveMode      = "R";

        			// 협력사 회신 제출인 경우에만 수정 가능
        			if(strEstmDtlStatsCd == "20")
        			{
        				strSaveMode = "U";
        			}

        			if(strSubsumtext == "화학물질정보")
        			{
        				params = { key1     : strCocd           // 회사코드
        						 , key2     : strCustPreqno     // 고객요청번호
        						 , key3     : strCprtcpId       // 협력사ID
        						 , key4     : strPrdId          // 상품코드
        						 , key5     : ""                // null
        						 , popNm    : "SSP_BO_RD_70"    // 화학물질
        						 , saveMode : strSaveMode
        						 };
        			}
        			else if (strSubsumtext == 'KC인증정보')
        			{
        				params = { key1     : strCocd           // 회사코드
        						 , key2     : strContNo         // 계약번호
        						 , key3     : strCprtcpId       // 협력사ID
        						 , key4     : strPrdId          // 상품코드
        						 , key5     : strContChgDgrCnt  // 계약변경차수
        						 , popNm    : "SSP_BO_RD_55"
        						 , saveMode : strSaveMode
        						 };
        			}

        			this.fn_setCallPopup(params);
        		}
        		// 2022.10.20 sg.park SSP-1572 > SSP-1253 [BO 견적요청 목록] 협력사 견적거부 상태값 오류
        		else if (strSubsumtext == "상태" && strEstmDtlStatsCd == '40') {
        			var p={ READ_ONLY: 'Y', UPD_RSN: this.ds_supplier.getColumn(e.row, 'RSN_TXT') };
        			this.gfn_openPopup(
        				  'SSP_BO_RD_17_P01'
        				, 'RD::SSP_BO_RD_17_P01.xfdl'
        				, p
        			);
        		}
        		// /2022.10.20 sg.park SSP-1572 > SSP-1253 [BO 견적요청 목록] 협력사 견적거부 상태값 오류
        	}
        }

        /**
         * 협력사 팝업 버튼 클릭시 onexpandup 이벤트 발생 처리
         */
        this.grd_supplier_lst_onexpandup = function(obj,e)
        {
        	var params  = { coCd  : this.lv_coCd };
        	var options = { title : "협력사" };

        	this.gfn_openPopup("SSP_BO_PP_41", "PP_POP::SSP_BO_PP_41.xfdl", params, "fn_popupCallback", options);
        }


        /**
         * 견적요청 취소
         */
        this.btn_estmReqCnc_onclick = function(obj,e)
        {
        	if(this.ds_supplier.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	for(var idx=0; idx<this.ds_supplier.getRowCount(); idx++)
        	{
        		var strChk            = this.ds_supplier.getColumn(idx,"CHK");
        		var strEstmDtlStatsCd = this.ds_supplier.getColumn(idx,"ESTM_DTL_STATS_CD");

        		if(strChk == 1 && (strEstmDtlStatsCd != "10" && strEstmDtlStatsCd != "20" && strEstmDtlStatsCd != "40"))
        		{
        			this.fn_alert("ERRR000213","저장정보","","question"); // 견적상태가 요청 & 제출 & 거부 상태인 경우에만 견적요청취소를 진행 하실수 있습니다.
        			return false;
        		}
        	}

        	var result = this.fn_confirm("ERRR000200", "저장정보","견적요청 취소","question" );    // 선택한 건들을 모두 &1 처리 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	for(var idx=0; idx<this.ds_supplier.getRowCount(); idx++)
        	{
        		var nRow = this.ds_input.addRow();
        		this.ds_input.setColumn(nRow,"CHK",        this.ds_supplier.getColumn(idx,"CHK"));
        		this.ds_input.setColumn(nRow,"CO_CD",      this.ds_supplier.getColumn(idx,"CO_CD"));
        		this.ds_input.setColumn(nRow,"ESTM_REQ_NO",this.ds_supplier.getColumn(idx,"ESTM_REQ_NO"));
        		this.ds_input.setColumn(nRow,"CPRTCP_ID",  this.ds_supplier.getColumn(idx,"CPRTCP_ID"));
        		this.ds_input.setColumn(nRow,"EXISTS_YN",  this.ds_supplier.getColumn(idx,"EXISTS_YN"));
        		this.ds_input.setColumn(nRow,"CO_GB",      "20");
        	}

        	this.fn_Save_L();
        };

        /**
         * 구매정보 등록 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_purgInfoReg_onclick = function(obj,e)
        {
        	if(this.ds_supplier.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	for(var idx=0; idx<this.ds_supplier.getRowCount(); idx++)
        	{
        		var strChk            = this.ds_supplier.getColumn(idx,"CHK");
        		var strEstmDtlStatsCd = this.ds_supplier.getColumn(idx,"ESTM_DTL_STATS_CD");

        		if(strChk == 1 && (strEstmDtlStatsCd != "20"))
        		{
        			this.fn_alert("ERRR000209","저장정보","","question"); // 견적상태가 제출 상태인 경우에만 구매정보 등록을 진행 하실수 있습니다.
        			return false;
        		}
        	}

        	var result = this.fn_confirm("ERRR000200", "저장정보","구매정보 등록","question" );    // 선택한 건들을 모두 &1 처리 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	for(var idx=0; idx<this.ds_supplier.getRowCount(); idx++)
        	{
        		var nRow = this.ds_input.addRow();
        		this.ds_input.setColumn(nRow,"CHK",        this.ds_supplier.getColumn(idx,"CHK"));
        		this.ds_input.setColumn(nRow,"CO_CD",      this.ds_supplier.getColumn(idx,"CO_CD"));
        		this.ds_input.setColumn(nRow,"ESTM_REQ_NO",this.ds_supplier.getColumn(idx,"ESTM_REQ_NO"));
        		this.ds_input.setColumn(nRow,"CPRTCP_ID",  this.ds_supplier.getColumn(idx,"CPRTCP_ID"));
        		this.ds_input.setColumn(nRow,"EXISTS_YN",  this.ds_supplier.getColumn(idx,"EXISTS_YN"));
        		this.ds_input.setColumn(nRow,"CO_GB",      "30");
        	}

        	this.fn_Save_L();
        };

        /**
         * 견적완료 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_estmCmpl_onclick = function(obj,e)
        {
        	var prdPrcCunt = 0;
        	for (var idx = 0; idx < this.ds_supplier.getRowCount(); idx++) {
        		var sEstmInfoStatsCd = this.gfn_nvl(this.ds_supplier.getColumn(idx, 'ESTM_INFO_STATS_CD'), '');
        		var sPurgVldYn = this.gfn_nvl(this.ds_supplier.getColumn(idx, 'PURG_VLD_YN'), '');
        		var sPugrInfoRegDtm = this.gfn_nvl(this.ds_supplier.getColumn(idx, 'PURG_INFO_REG_DTM'), '');
        		var sPrdPrc = this.gfn_nvl(this.ds_supplier.getColumn(idx, 'PRD_PRC'), '');
        		// SSP-2618 구매정보 존재 시 처리완료 기능 오픈
        		var prdPrcStprcYn = this.gfn_nvl(this.ds_detail.getColumn(0, "PRD_PRC_STPRC_YN"), "");

        		// 상품 가격정보 존재 시 처리완료 진행
        		if (prdPrcStprcYn == 'Y') {
        			prdPrcCunt++;
        		} else {
        			// 견적요청 상태가 구매정보 등록완료 일때 처리
        			if (
        				(sEstmInfoStatsCd != '' || sEstmInfoStatsCd == '60')
        				&& (sPurgVldYn == 'Y' || sPugrInfoRegDtm != '') && sPrdPrc > '0'
        			) {
        				prdPrcCunt++;
        			}
        		}
        	}

        	if (1 > prdPrcCunt) {
        		this.fn_alert("ERRR000212","저장정보","","question"); // 최소 하나 이상의 구매정보 등록 완료가 필요 합니다.
        		return false;
        	}
        	// /2022.10.20 sg.park SSP-1572 > SSP-1268 [BO 견적요청 목록] 유효구매정보가 1건이상 존재 시 처리가능해야 함

            // 최소 하나 이상의 구매정보 등록 완료가 필요 합니다.
        	var result = this.fn_confirm("ERRR000210", "저장정보","","question" ); // 견적완료 처리를 진행 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();
        	this.ds_input.setColumn(nRow,"CHK",        1);
        	this.ds_input.setColumn(nRow,"CO_CD",      this.ds_supplier.getColumn(0,"CO_CD"));
        	this.ds_input.setColumn(nRow,"ESTM_REQ_NO",this.ds_supplier.getColumn(0,"ESTM_REQ_NO"));
        	this.ds_input.setColumn(nRow,"CPRTCP_ID",  "*");
        	this.ds_input.setColumn(nRow,"EXISTS_YN",  "Y");
        	this.ds_input.setColumn(nRow,"CO_GB",      "40");

        	this.fn_Save_L();
        };

        /**
         * 기능 : 추가 버튼 클릭시
         */
        this.btn_add_onclick = function(obj,e)
        {
            this.fn_New();
        }

        this.btn_del_onclick = function(obj,e)
        {
            this.fn_Del();
        }

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            var nRow = this.ds_supplier.addRow();
            this.ds_supplier.setColumn(nRow,"CHK",        "0");           					// CHK
        	this.ds_supplier.setColumn(nRow,"CO_CD",      this.parent.args.CO_CD);     		// 회사코드
        	this.ds_supplier.setColumn(nRow,"ESTM_REQ_NO",this.parent.args.ESTM_REQ_NO);	// 고객요청번호
        	this.ds_supplier.setColumn(nRow,"EXISTS_YN",  "N");	                			// 존재여부
        }

        this.fn_Del = function()
        {
            // 멀티삭제용도
            if(this.ds_supplier.rowcount < 1 || this.ds_supplier.findRow("CHK",1) == -1)
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
            for(var i = this.ds_supplier.rowcount-1; 0 <= i; i--)
            {
                if(this.ds_supplier.getColumn(i,"CHK") == 1)
                {
        			// 요청 및 빈값 데이터 삭제
        			if(this.ds_supplier.getColumn(i,"ESTM_DTL_STATS_CD") == "10" || this.gfn_isNull(this.ds_supplier.getColumn(i,"ESTM_DTL_STATS_CD")))
        			{
        				if(this.ds_supplier.getColumn(i,"EXISTS_YN") == "Y")
        				{
        					var nRow = this.ds_delete.addRow();
        					this.ds_delete.copyRow(nRow,this.ds_supplier,i);
        				}
        			}
                    this.ds_supplier.deleteRow(i);
                }
            }

            return true;
        }

        this.div_info_btn_receipt_onclick = function(obj,e)
        {
        	this.gfn_popMessage("COMS000013", ["접수"], obj.id, "fn_callBack");
        }

        // 날짜 형식 변경
        this.fn_conDt = function(day) {
        	if(Number(day) < 10){
        		return "0" + day;
        	}

        	return day + "";
        }


        // 견적가 변경
        this.div_info_msk_estiAmt_onchanged = function(obj,e)
        {
        	var amt = nexacro.toNumber(this.msk_estiAmt.value) + (nexacro.toNumber(this.msk_estiAmt.value) * nexacro.toNumber(this.ds_detail.getColumn(0, "PRFRT")) / 100);
        	this.ds_detail.setColumn(0, "ESTM_SBM_AMT", amt);
        }


        // 견적불가 버튼 클릭
        this.btn_estmDisProc_onclick = function(obj,e)
        {
        	// 요청건 진행시 견적불가처리 진행 못함
        	if(this.ds_supplier.getCaseCount("ESTM_DTL_STATS_CD == '10'") > 0)
        	{
        		this.fn_alert("ERRR000214","저장","견적불가유형","question"); // 	현재 요청건이 존재합니다. 요청취소 진행후 견적불가처리 진행을 하시길 바랍니다.
        		return false;
        	}

        	// 견적불가유형코드 필수입력 체크
        	if(this.gfn_isNull(this.cbo_estmDisTpCd.value))
        	{
        		this.fn_alert("ERRR000176","저장","견적불가유형","question"); // &1는(은) 필수 선택 입니다. 선택해 주세요.
        		this.cbo_estmDisTpCd.setFocus();
        		return false;
        	}

        	// 견적불가상세사유 필수 입력 체크
        	if(this.gfn_isNull(this.gfn_trim(this.tax_estmDisRsn.value)))
        	{
        		this.fn_alert("ERRR000199","저장","견적불가상세사유","question"); // &1 을(를) 입력해 주세요.
        		this.tax_estmDisRsn.setFocus();
        		return false;
        	}
        	else
        	{
        		var max 		= 500;
        		var totalByte 	= this.fn_lenChk(this.tax_estmDisRsn.value, max);

        		if (totalByte > max)
        		{
        			this.fn_alert("ERRR000489", "저장", "상세사유," + totalByte + "," + max, "question" ); //입력가능한  &1 길이가 초과되었습니다. (현재 : &2 byte, 입력가능 : &3 byte)

        			this.tax_estmDisRsn.setFocus();

        			return false;
        		}
        	}

        	var result = this.fn_confirm("ERRR000211", "저장정보","","question" ); // 견적불가 처리를 진행 하시겠습니까?

        	if(result == 0)
        	{
        	   return false;
        	}

        	this.fn_Save_R();
        }


        /***********************************************************************************************
        *  파일 관련 함수
        ************************************************************************************************/

        // 파일선택
        this.FileDialog_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles[0]);
        }

        // 파일 이벤트 생성
        this.addFileList = function(file)
        {
        	file.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        	file.open(null, 1);
        }

        // 파일 확장자 검증
        this.fn_fileCheck = function(obj, fileSize) {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1).toLowerCase(); // 맨 뒤 확장자만 자르기
        	var fileGbn = ".pptx, .ppt, .docx, .doc, .xls, .xlsx, .jpg, .png, .txt, .zip";

        	// 10485760 - 10메가
        	// 메가바이트 변환
        	var mbSize = fileSize / 1024 / 1024;

        	if( this.maxFileSize < mbSize ) {
        		this.gfn_popMessage("ERRS000255");
        		return false;
        	}

        	if( fileGbn.indexOf(extNm) == -1 ) {
        		this.gfn_popMessage("ERRN000040", [extNm]);
        		return false;
        	}

        	return true;
        }

        // 파일 추가
        this.btn_addFile_onclick = function(obj,e)
        {
        	var fileList       = ["","9A","9B","9C","9D","9E","9F","9G"];
        	this.fileIndex     = this.ds_addOp.rowcount + 1;
        	this.imageFileYn   = false;

        	this.FileUploadSingle.deleteItem(0);
        	this.FileUploadSingle.appendItem();
        	this.FileUploadSingle.filefindbuttons[0].click();
        }

        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.FileUploadSingle.value;	// 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");

        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        	if(this.imageFileYn)
        	{
        		if(!(sCompValue.toUpperCase() == "PNG" || sCompValue.toUpperCase() == "JPG"
        		  || sCompValue.toUpperCase() == "GIF" || sCompValue.toUpperCase() == "JPEG"))
        		{
        			this.fn_alert("ERRR000173","파일 정보","파일","information");  // &1 형식이 아닙니다.
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
        			this.fn_alert("ERRR000173","파일 정보","파일","information");  // &1 형식이 아닙니다.
        			return false;
        		}
        	}

        	var sFilePath = this.FileUploadSingle.value;  						// 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_addOp.getColumn(0, "DOC_REG_ID"), "");
        		docRegId  = docRegId != "" ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0, "DOC_REG_ID"), "");

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-add-optn-file-upload.do?";   // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds1=" + this.fileIndex;

        	var bSucc = this.FileUploadSingle.upload(strUrl); 		 // 파일 업로드
        }

        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.FileUploadSingle_onsuccess = function(obj, e)
        {
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var fileInfo = e.datasets[0];
        	this.ds_addOpFileInfo.deleteAll();
        	this.ds_addOpFileInfo.addRow();
        	this.ds_addOpFileInfo.setColumn(0, "CHK", fileInfo.getColumn(0, "CHK"));
        	this.ds_addOpFileInfo.setColumn(0, "DOC_REG_ID", fileInfo.getColumn(0, "DOC_REG_ID"));
        	this.ds_addOpFileInfo.setColumn(0, "DOC_REG_SEQ", fileInfo.getColumn(0, "DOC_REG_SEQ"));
        	this.ds_addOpFileInfo.setColumn(0, "ADD_OPTN_NM", "첨부파일");
        	this.ds_addOpFileInfo.setColumn(0, "ATFL_NM", fileInfo.getColumn(0, "ATFL_NM"));
        	this.ds_addOpFileInfo.setColumn(0, "ORI_ATFL_NM", fileInfo.getColumn(0, "ORI_ATFL_NM"));
        	this.ds_addOpFileInfo.setColumn(0, "ATFL_LEN", fileInfo.getColumn(0, "ATFL_LEN"));
        	this.ds_addOpFileInfo.setColumn(0, "ATFL_STOR_PATH", fileInfo.getColumn(0, "ATFL_STOR_PATH"));
        	this.ds_addOpFileInfo.setColumn(0, "FILE_TYPE", fileInfo.getColumn(0, "FILE_TYPE"));
        	this.ds_addOpFileInfo.setColumn(0, "ETC_FDS_1", fileInfo.getColumn(0, "ETC_FDS_1"));
        	this.ds_addOpFileInfo.setColumn(0, "DISP_GRP_ID", this.ds_detail.getColumn(0, "DISP_GRP_ID"));
        	this.ds_addOpFileInfo.setColumn(0, "ESTM_REQ_NO", this.ds_detail.getColumn(0, "ESTM_REQ_NO"));
        	this.ds_addOpFileInfo.setColumn(0, "CO_CD", this.ds_detail.getColumn(0, "CO_CD"));
        	this.ds_addOpFileInfo.setColumn(0, "PRD_CLCD", this.ds_detail.getColumn(0, "PRD_CLCD"));
        	this.ds_addOpFileInfo.setColumn(0, "ADD_OPTN_ITM_NO", this.ds_addOp.rowcount + 1);

        	var delRow = this.ds_saveFileList.findRow("ETC_FDS_1", this.fileIndex);
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_1", "del");

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow, this.ds_uploadResult);	// 싱글 파일 패스

        	this.edt_fileName_onchanged(new nexacro.ChangeEventInfo());
        }

        /**
         * 파일 첨부파일 변경시 onchanged 이벤트 발생 처리
         */
        this.edt_fileName_onchanged = function(e)
        {
        	this.fn_addOpSave();
        	// TODO. 추가옵션 다시 조회
        }

        // 파일 추가 성공
        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason){
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			//파일 검증
        			if(!this.fn_fileCheck(obj, e.filesize)){
        				return false;
        			}
        			this.ds_detail.setColumn(0, "FILE_NM", obj.filename);
        			this.ds_files.setColumn(0, "ATFL_NM", obj.filename);
        			this.ds_files.setColumn(0, "ATFL_LEN_NM", this.cutFileSize(e.filesize));
        			this.ds_files.set_rowposition(0);

        			this.FileUpTransfer.clearFileList();
        			this.FileUpTransfer.addFile(obj.filename, obj);
        			break;
        	}
        }

        // 파일 사이즈 가져오기
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	var fileSizeType = "";
        	var size = 0;
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        		fileSizeType = aMultiples[nMultiple];
        		size = nApprox;
        	}

        	return sOutput;
        }

        // 추가정보 파일 다운
        this.addfileDown = function(docRegId, docRegSeq)
        {
        	this.FileDownTransfer.clearPostDataList();
        	this.FileDownTransfer.setPostData("docRegId", docRegId);
        	this.FileDownTransfer.setPostData("docRegSeq", docRegSeq);
        	this.FileDownTransfer.download('/co/file-download.do');
        }

        this.FileUpTransfer_onprogress = function(obj,e)
        {
        	var rtnPercent = this.fnGetPercent(e.loaded, e.total);
        	this.ProgressBar.set_pos(rtnPercent);
        }

        // 퍼센트 계산
        this.fnGetPercent = function(nload, nTotal)
        {
        	var nCurPercent = (nload / nTotal) * 100;	//일부값 ÷ 전체값 X 100
        	return nCurPercent;
        }

        // 파일 전송 성공
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	this.FileUpTransfer.clearFileList();
        	var objCallDs = e.datasets[0];

        	if(objCallDs != undefined && objCallDs.getColumn(0, "result") == "success") {
        		this.ds_detail.setColumn(0, "DOC_REG_ID", objCallDs.getColumn(0, "docRegId"))

        		this.fn_estiReq("40"); // 견적완료 처리
        	}

        }

        // 파일전송 실패
        this.FileUpTransfer_onerror = function(obj,e)
        {
        	this.gfn_popMessage("ERRN000041");
        }

        /**
         * 기능 : 견적불가 상세사유 글자수 확인
         */
        this.fn_lenChk = function(b, max){
        	var totalByte = 0;
        	for (var i = 0; i < b.length; i++) {
        		var oneChar = b.charAt(i);
        		if (escape(oneChar).length > 4) {
        			totalByte = totalByte + 3;
        		} else {
        			totalByte = totalByte + 1;
        		}
        	}

        	return totalByte;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onclose",this.SSP_BO_NA_31_onclose,this);
            this.addEventHandler("onkeyup",this.SSP_BO_NA_31_onkeyup,this);
            this.stcTitle01_00_00.addEventHandler("onclick",this.stcTitle01_00_00_onclick,this);
            this.edt_prdClcd.addEventHandler("oninput",this.edt_prdClcd_oninput,this);
            this.edt_prdClcd.addEventHandler("onkeyup",this.edt_prdClcd_onkeyup,this);
            this.edt_dispPrdNm.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_dispPrdNm.addEventHandler("oninput",this.edtSizeCd_oninput,this);
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
            this.rdo_txClcd.addEventHandler("onitemchanged",this.rdo_txClcd_onitemchanged,this);
            this.rdo_chmMtlYn.addEventHandler("onitemchanged",this.rdo_chmMtlYn_onitemchanged,this);
            this.Static60_00_01.addEventHandler("onclick",this.Static60_00_01_onclick,this);
            this.edt_custId.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_custId.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.edt_newPrdReqNo.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_newPrdReqNo.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.edt_newPrdReqStatsNm.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_newPrdReqStatsNm.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.grd_mroAddAttr.addEventHandler("oncellclick",this.grd_mroAddAttr_oncellclick,this);
            this.btn_addFile.addEventHandler("onclick",this.btn_addFile_onclick,this);
            this.stc_09_00_01.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.btn_purgInfoReg.addEventHandler("onclick",this.btn_purgInfoReg_onclick,this);
            this.btn_estmReqCnc.addEventHandler("onclick",this.btn_estmReqCnc_onclick,this);
            this.btn_estmReq.addEventHandler("onclick",this.btn_estmReq_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_estmDisProc.addEventHandler("onclick",this.btn_estmDisProc_onclick,this);
            this.btn_estmCmpl.addEventHandler("onclick",this.btn_estmCmpl_onclick,this);
            this.edt_bzplcNm.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_bzplcNm.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.grd_supplier_lst.addEventHandler("onexpandup",this.grd_supplier_lst_onexpandup,this);
            this.grd_supplier_lst.addEventHandler("oncellclick",this.grd_supplier_lst_oncellclick,this);
            this.btn_receipt.addEventHandler("onclick",this.div_info_btn_receipt_onclick,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.ds_op.addEventHandler("oncolumnchanged",this.fn_PostCatgAttrInfo,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_RD_69.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
