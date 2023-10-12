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
            this.set_titletext("R&D 상품정보 관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LIST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TB_PR_PRD_GRP_DTL_ORDER\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"256\"/><Column id=\"PURGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"HUB_HNL_DIS_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"STOCK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"TX_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRVL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PURGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_DIS_TP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ODR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_NM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PURGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_OR_HASH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_ID\"/><Col id=\"PRD_ID_CNT\"/><Col id=\"PRD_GRP_ID\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"PRD_NM\"/><Col id=\"FULL_PRD_NM_YN\"/><Col id=\"PRVL_LIST\"/><Col id=\"MNFR_NO\"/><Col id=\"MNFR_NO_CNT\"/><Col id=\"MRO_PRD_STATS_CD\"/><Col id=\"PRDPSN_ID\"/><Col id=\"PURGPSN_ID\"/><Col id=\"PUB_ONLY_SPR_CD\"/><Col id=\"DISP_PRD_SPR_CD\"/><Col id=\"BG_SEQ\"/><Col id=\"HUB_HNL_DIS_TP_CD\"/><Col id=\"CHM_MTL_PRD_YN\"/><Col id=\"TX_CLCD\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"GUBUN\"/><Col id=\"PRD_CLCD_NM\"/><Col id=\"MNFR_NO_NM\"/><Col id=\"BRND_OR_HASH_NM\"/><Col id=\"PRDPSN_NM\"/><Col id=\"PURGPSN_NM\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\"/><Col id=\"REQ_DT_FNL_PROC_DT_UNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubOnlySprCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubdispPrdSprCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hubHnlPsbYnCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_bgList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BG_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BG_IMG\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtSprCdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchTemp", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_NM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PURGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_OR_HASH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_DIS_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_imgFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ATFL_LEN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new RaonkUpload("Raonkupload","53","337","1184","43",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_FolderTransfer("1");
            obj.getSetter("RAONKUPLOAD_OnExcelLoadedWithOnlyData").set("Raonkupload_RAONKUPLOAD_OnExcelLoadedWithOnlyData");
            obj.set_text("");
            obj.set_UseTrace("true");
            obj.set_RunTimes("agent");
            obj.set_DisableDeleteConfirm("1");
            obj.set_HandlerUrl("/raonkupload/handler/raonkhandler_img.jsp");
            obj.set_AllowDuplicationFile("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","15",null,"225","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","0","124",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","62",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_02","0","93",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","0","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_grpId","430","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("39");
            obj.set_text("그룹ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("38");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","0","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("41");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdStats","0","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("43");
            obj.set_text("상품상태");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdChrpsn","430","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("42");
            obj.set_text("상품담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySpr","0","93","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("44");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle12","0","124","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("45");
            obj.set_text("키워드");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_grpId","570","4","284","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCd","1000","35","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1110","35","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPopup","1238","35","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_prdBg","1000","97","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_bgList");
            obj.set_codecolumn("BG_SEQ");
            obj.set_datacolumn("BG_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_chmMtlYn","1000","128","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_chmMtlYn_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_chmMtlYn_innerdataset", obj);
            div_search_form_cmb_chmMtlYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_chmMtlYn_innerdataset);
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_allChk","140","66","55","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("전체");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal1","200","66","51","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("사용");
            obj.set_value("true");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal2","260","66","61","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("미사용");
            obj.set_value("true");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chkVal3","330","66","71","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("종결");
            obj.set_value("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_purgChrpsn","860","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("46");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdBg","860","93","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("48");
            obj.set_text("상품배지");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chmMtlYn","860","124","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("49");
            obj.set_text("화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","860","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("40");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","860","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("53");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","140","4","263","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","404","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","140","35","263","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","430","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("55");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","570","35","284","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","1000","4","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","1110","4","122","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPopup","1238","4","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdMultiInput","1264","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrMultiInput","1264","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdChrpsnId","570","67","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdChrpsnNm","680","67","149","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdChrpsnPopup","833","67","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnId","1000","67","103","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnNm","1110","67","149","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_purgChrpsnPopup","1263","67","22","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cboProgressDiv00_00_01","140","128","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_autoselect("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cboProgressDiv00_00_01_innerdataset = new nexacro.NormalDataset("div_search_form_cboProgressDiv00_00_01_innerdataset", obj);
            div_search_form_cboProgressDiv00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">BRND_NM</Col><Col id=\"datacolumn\">브랜드명</Col></Row><Row><Col id=\"codecolumn\">HASH_TAG</Col><Col id=\"datacolumn\">해시Tag</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cboProgressDiv00_00_01_innerdataset);
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_dispPrdSpr","430","93","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("56");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dispPrdSpr","570","97","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_pubdispPrdSprCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","0","155",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stcTitle09_00","0","155","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("58");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_txtnOftaxSpr","1000","159","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_autoselect("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_txtnOftaxSpr_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_txtnOftaxSpr_innerdataset", obj);
            div_search_form_cmb_txtnOftaxSpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">면세</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_txtnOftaxSpr_innerdataset);
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_txtnOftaxSpr","860","155","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("59");
            obj.set_text("과면세구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_hubHnlPsbYn","430","124","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("60");
            obj.set_text("Hub취급가능여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_hubHnlPsbYn","570","128","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_innerdataset("ds_hubHnlPsbYnCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_dateTitle","140","159","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_dtSprCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","270","159","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","404","159","10","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("61");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","420","159","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","555","159","96","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_pubOnlySpr","140","97","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_pubOnlySprCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtSizeCd00_01_01","270","128","154","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"200","60","24","1",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("37");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"200","60","24","btn_search:4",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("36");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_fullPrdNmYn","410","36","13","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_largeExcel",null,"200","118","24","btn_init:5",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("62");
            obj.set_text("대용량다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","305",null,null,"20","113",null,null,null,null,this);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"147\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"시리즈그룹ID\"/><Cell col=\"3\" text=\"카테고리ID\"/><Cell col=\"4\" text=\"카테고리명\"/><Cell col=\"5\" text=\"상품명\"/><Cell col=\"6\" text=\"SSP상품명\"/><Cell col=\"7\" text=\"대표규격\"/><Cell col=\"8\" text=\"제조원ID\"/><Cell col=\"9\" text=\"제조원명\"/><Cell col=\"10\" text=\"주문단위\"/><Cell col=\"11\" text=\"List Price\"/><Cell col=\"12\" text=\"Hub취급\"/><Cell col=\"13\" text=\"재고여부\"/><Cell col=\"14\" text=\"상품상태\"/><Cell col=\"15\" text=\"화학물질\"/><Cell col=\"16\" text=\"공용전용\"/><Cell col=\"17\" text=\"전시상품\"/><Cell col=\"18\" text=\"과면세구분\"/><Cell col=\"19\" text=\"상품배지\"/><Cell col=\"20\" text=\"상품담당자ID\"/><Cell col=\"21\" text=\"상품담당자명\"/><Cell col=\"22\" text=\"구매담당자ID\"/><Cell col=\"23\" text=\"구매담당자명\"/><Cell col=\"24\" text=\"등록일\"/><Cell col=\"25\" text=\"등록자ID\"/><Cell col=\"26\" text=\"등록자명\"/><Cell col=\"27\" text=\"최종수정일\"/><Cell col=\"28\" text=\"수정자ID\"/><Cell col=\"29\" text=\"수정자명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PRD_ID\" textDecoration=\"underline\" color=\"#235da8\"/><Cell col=\"2\" text=\"bind:PRD_GRP_ID\" displaytype=\"normal\" combodataset=\"dsProcSt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:PRD_CLCD\" displaytype=\"normal\" combodataset=\"dsReqDiv\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:PRD_CLCD_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:SSP_PRD_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PRVL_LIST\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:MNFR_NO\"/><Cell col=\"9\" text=\"bind:MNFR_NM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:ODR_UNIT_NM\"/><Cell col=\"11\" text=\"bind:LIST_PRICE\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:HUB_HNL_DIS_TP_NM\"/><Cell col=\"13\" text=\"bind:STOCK_YN\"/><Cell col=\"14\" text=\"bind:PRD_USE_YN_NM\"/><Cell col=\"15\" text=\"bind:CHM_MTL_PRD_YN\"/><Cell col=\"16\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"17\" text=\"bind:DISP_PRD_SPR_NM\"/><Cell col=\"18\" text=\"bind:TX_CLCD_NM\"/><Cell col=\"19\" text=\"bind:BG_NM\"/><Cell col=\"20\" text=\"bind:PRDPSN_ID\"/><Cell col=\"21\" text=\"bind:PRDPSN_NM\"/><Cell col=\"22\" text=\"bind:PURGPSN_ID\"/><Cell col=\"23\" text=\"bind:PURGPSN_NM\"/><Cell col=\"24\" text=\"bind:REG_DTM\"/><Cell col=\"25\" text=\"bind:REGPSN_ID\"/><Cell col=\"26\" text=\"bind:REGPSN_NM\"/><Cell col=\"27\" text=\"bind:UPD_DTM\"/><Cell col=\"28\" text=\"bind:UPDPSN_ID\"/><Cell col=\"29\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","204","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","241","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","295","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCont",null,"270","100","24","17",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"270","110","24","cbo_rowCont:4",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"270","100","24","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","20","793",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","20","733","97.01%","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","280","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"270","100","24","btn_layoutInit:4",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_imgPkgDown",null,"270","112","24","btn_layoutSave:3",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("IMG 일괄다운로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_imgPkgDownRegUpd",null,"270","107","24","btn_imgPkgDown:3",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("IMG일괄업로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pkgUpd",null,"270","82","24","btn_imgPkgDownRegUpd:3",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("일괄수정");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_description("R&D 상품정보관리 목록");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","edtCustNm00_01","value","dsMaster","고객명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","calProcComplete","value","dsMaster","처리완료일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","calProcComplete00","value","dsMaster","처리완료일");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cbo_rowCont","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_grpId","value","ds_search","PRD_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.edt_prdClNm","value","ds_search","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.chk_fullPrdNmYn","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.edt_reprSpec","value","ds_search","PRVL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.edt_mnfrCd","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.edt_mnfrNm","value","ds_search","MNFR_NO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.edt_prdChrpsnId","value","ds_search","PRDPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.edt_prdChrpsnNm","value","ds_search","PRDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.edt_purgChrpsnId","value","ds_search","PURGPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_search.form.edt_purgChrpsnNm","value","ds_search","PURGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_search.form.cmb_pubOnlySpr","value","ds_search","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.cmb_dispPrdSpr","value","ds_search","DISP_PRD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_search.form.cmb_prdBg","value","ds_search","BG_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.cboProgressDiv00_00_01","value","ds_search","GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_search.form.edtSizeCd00_01_01","value","ds_search","BRND_OR_HASH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_search.form.cmb_hubHnlPsbYn","value","ds_search","HUB_HNL_DIS_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_search.form.cmb_chmMtlYn","value","ds_search","CHM_MTL_PRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_search.form.cmb_txtnOftaxSpr","value","ds_search","TX_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_search.form.cbo_dateTitle","value","ds_search","REQ_DT_FNL_PROC_DT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_UNIT");
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
        this.addIncludeScript("SSP_BO_RD_01.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_01.xfdl(R&D 상품정보관리 목록)
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
        this.lvchkColidDs           = "CLASS_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs         = "설명";
        this.strKeyValue            = "";
        this.lvGetDate              = "";
        this.trId                   = "";
        this.sheets                 = [];
        this.lv_btnChkYn            = "";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	var navigatorName = system.navigatorname;            // Browser명("nexacro","IE","Chrome","Gecko")

        	if(navigatorName != "nexacro")
        	{
        		this.trId = this.uuidv4();
        	}

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
            var strDs    = "ds_dateUnitCombo|ds_pubOnlySprCombo|ds_pubdispPrdSprCombo|ds_hubHnlPsbYnCombo|ds_pageRowCd|ds_dtSprCdCombo|ds_rndPrdAuthCombo";      // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "INQ_PERD_SPR_CD|PUB_ONLY_SPR_CD|DISP_PRD_SPR_CD|HUB_HNL_DIS_TP_CD|PAGE_ROW_CD|DT_SPR_CD|CHRPSN_TEAM_SPR_CD";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|T|X|X|X";                                                                                                     // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                                                                                                // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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

        	this.ds_search.setColumn(0,"CO_CD",this.lv_coCd);

        	// 상품배지 조회
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
        			case "selectBgList" :
        					this.fn_PostBgList();
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
        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 배지 이미지 조회 전 실행
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
        	this.ds_bgList.setColumn(nRow,"BG_NM", "전체");

        	this.fn_setResetBtnCall();
        };
        /**
         * 기능 : 조회 버튼 클릭시
         */
        this.btn_search_onclick = function(obj,e)
        {
            // 멀티입력 검색조건 Set
        	this.fn_setMultiSearch(this.formId,"PRD_ID",  this.ds_search.getColumn(0,"PRD_ID"));         // 상품ID
        	this.fn_setMultiSearch(this.formId,"PRD_CLCD",this.ds_search.getColumn(0,"PRD_CLCD"));       // 카테고리
        	this.fn_setMultiSearch(this.formId,"MNFR_NO", this.ds_search.getColumn(0,"MNFR_NO"));        // 제조원

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
        								 ,this.div_search.form.cbo_dateTitle.text))
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
            var strUrl      = "/rd/prd-info-mng/select-prd-info-mng.do";
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
        		this.btn_pkgUpd.set_visible(false);				// 일괄수정 버튼 숨김
        		this.btn_imgPkgDownRegUpd.set_visible(false);   // IMG일괄업로드 버튼 숨김
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
            this.ds_search.setColumn(nRow,"PUB_ONLY_SPR_CD",        null);      // 공용전용구분 초기화 Set
        	this.ds_search.setColumn(nRow,"DISP_PRD_SPR_CD",        null);      // 전시상품구분 초기화 Set
        	this.ds_search.setColumn(nRow,"BG_SEQ",                 null);      // 배지상품 초기화 Set
        	this.ds_search.setColumn(nRow,"GUBUN",                  "BRND_NM"); // 키워드 초기화 Set
        	this.ds_search.setColumn(nRow,"HUB_HNL_DIS_TP_CD",      null);      // Hub취급가능여부 초기화 Set
        	this.ds_search.setColumn(nRow,"CHM_MTL_PRD_YN",         "");        // 화학물질여부 초기화 Set
        	this.ds_search.setColumn(nRow,"TX_CLCD",                "");        // 과면세구분 초기화 Set
        	this.ds_search.setColumn(nRow,"REQ_DT_FNL_PROC_DT_SPR", "10");      // 일자구분 초기화 Set
        	this.ds_search.setColumn(nRow,"REQ_DT_FNL_PROC_DT_UNIT",null);      // 일자 초기화 Set
        	this.ds_search.setColumn(nRow,"ROW_COUNT",              this.lv_pageViewCnt); //현재 레코드 초기화셋팅 Set
            this.div_paging.reload();
        	this.fn_pageCallback();

        	// 상품상태 초기화 Set
        	for(var idx=1; idx<=3; idx++)
        	{
        		this.div_search.form["chkVal"+idx].set_value(true);
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

            this.gfn_excelExport(this.grd_list, "R&D 상품정보관리 목록","R&D 상품정보관리 목록");
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
            this.sta_totcnt.set_text(sTotText);
        };

        /**
         * 그리드 셀 더블 클릭시 이벤트 발생 처리
         */
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var strPrdId = this.ds_master.getColumn(e.row,"PRD_ID");

        	// 요청번호 더블 클릭시 이벤트 발생 처리
        	if(e.cell == obj.getBindCellIndex("body","PRD_ID"))
        	{
        		var params = { prdId : strPrdId };

        		this.fn_setCallPopup(params);
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
        		// 구매담당자 조회팝업 후처리
        		case "btn_purgChrpsnPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData  = JSON.parse(strVal);
        					this.div_search.form.edt_purgChrpsnId.set_value(jsonData.EMP_NO);
        					this.div_search.form.edt_purgChrpsnNm.set_value(jsonData.OPRTR_NM);
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        		     break;
        		// 상품담당자 조회팝업 후처리
        		case "btn_prdChrpsnPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData  = JSON.parse(strVal);
        					this.div_search.form.edt_prdChrpsnId.set_value(jsonData.EMP_NO);
        					this.div_search.form.edt_prdChrpsnNm.set_value(jsonData.OPRTR_NM);
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
        		// 제조원 조회팝업 후처리
        		case "btn_mnfrPopup" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_mnfrCd.set_value(jsonData.MNFR_NO);
        					this.div_search.form.edt_mnfrNm.set_value(jsonData.MNFR_NM);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			 break;
        		// 제조원 멀티조회팝업 후처리
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
        		// 상품등록수정 팝업 후처리
                case "SSP_BO_RD_03" :
        				if(!this.gfn_isNull(strVal))
        				{
        					if(strVal == "SAVE")
        					{
        						// 저장후 리스트 재조회
        						this.fn_Ret(true);
        					}
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			break;
                default:
                    break;
            }
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
         * 조회조건 카테고리 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_prdClcd_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
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
        	var params  = { textId : this.div_search.form.edt_prdNm.value };
            var options = { title  : this.div_search.form.stc_prdNm.text };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
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
         * 조회조건 제조원 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_mnfrCd_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
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
        		var params  = { textId : this.div_search.form.edt_mnfrCd.value, coCd : this.lv_coCd };
        		var options = { title  : this.div_search.form.stc_mnfr.text };

        		this.gfn_openPopup("btn_mnfrPopup", "PR_POP::SSP_BO_PP_08.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 상품담당자 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.div_search_btn_prdChrpsnPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_prdChrpsnId.value);
        	this.fn_setCallPopup04(sCodeId);
        };

        /**
         * 조회조건 상품담당자 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_prdChrpsnId_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
        	{
        		this.div_search.form.edt_prdChrpsnNm.set_value("");
        	}
        };

        /**
         * 조회조건 상품담당자 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_prdChrpsnId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_prdChrpsnId.value);

        	// 13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup04(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup04 = function(sCodeId)
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
        		this.div_search.form.edt_prdChrpsnId.set_value(this.ds_popupList.getColumn(0,"EMP_NO"));
        		this.div_search.form.edt_prdChrpsnNm.set_value(this.ds_popupList.getColumn(0,"OPRTR_NM"));
        	}
        	else
        	{
        		var params  = { coCd  : this.lv_coCd, empNo : sCodeId };
        		var options = { title : this.div_search.form.stc_prdChrpsn.text };

        		this.gfn_openPopup("btn_prdChrpsnPopup", "CO_POP::SSP_BO_PP_27.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 구매담당자 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.div_search_btn_purgChrpsnPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_purgChrpsnId.value);
        	this.fn_setCallPopup02(sCodeId);
        };

        /**
         * 조회조건 구매담당자 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.div_search_edt_purgChrpsnId_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
        	{
        		this.div_search.form.edt_purgChrpsnNm.set_value("");
        	}
        };

        /**
         * 조회조건 구매담당자 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.div_search_edt_purgChrpsnId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_purgChrpsnId.value);

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
        		this.div_search.form.edt_purgChrpsnId.set_value(this.ds_popupList.getColumn(0,"EMP_NO"));
        		this.div_search.form.edt_purgChrpsnNm.set_value(this.ds_popupList.getColumn(0,"OPRTR_NM"));
        	}
        	else
        	{
        		var params  = { coCd  : this.lv_coCd, empNo : sCodeId };
        		var options = { title : this.div_search.form.stc_purgChrpsn.text };

        		this.gfn_openPopup("btn_purgChrpsnPopup", "CO_POP::SSP_BO_PP_27.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 조회조건 조회기간구분코드 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.div_search_cmb_dtUnit_onitemchanged = function(obj,e)
        {
        	this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr,this.div_search.form.cal_reqDtFnlProcDtEnd,obj);
        };

        /**
         * 상태 전체 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_allChk_onclick = function(obj,e)
        {
        	var chkAllYn = 0;

        	for(var idx=1; idx<=3; idx++)
        	{
        		if(this.div_search.form["chkVal"+idx].value)
        		{
        			chkAllYn++;
        		}
        	}

        	for(var idx=1; idx<=3; idx++)
        	{
        		if(chkAllYn != 3)
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
        	// [00 : 사용, 10 : 휴면화, 20 : 종결]
        	var chkVal = ["00","10","20"];
        	var list   = "";

        	this.ds_search.setColumn(0,"MRO_PRD_STATS_CD","");

        	for(var idx=1; idx<=3; idx++)
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

        	this.ds_search.setColumn(0,"MRO_PRD_STATS_CD",list);
        };

        /**
         * 신규등록 및 목록상세 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	= "";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 = params.prdId;				// 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02 = "";						// 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03 = "";						// 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04 = "";						// 부모에서 넘어가는 파라미터(폼경로)
        	var sPopId 		= "SSP_BO_RD_03";
        	var sUrl 		= "RD::SSP_BO_RD_03.xfdl";
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
        /***********************************************************************************************
        *  Kupload
        /***********************************************************************************************/
        this.uuidv4 = function()
        {
        	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
        };

        this.fn_delArrayToString = function(arrayDel)
        {
            var str = "-- 삭제된 파일 정보 --\n";
            str += this.fn_RPAD("Key", " ", 8) + " : {0}\n";
            str += this.fn_RPAD("FileName", " ", 8) + " : {1}\n";
            str += this.fn_RPAD("Size", " ", 8) + " : {2}\n";
            str += "-- 삭제된 파일 정보 끝 --\n";

            var sUniqKey      = "";
            var sOriginalName = "";
            var sSize         = "";

            var filesArrLen = arrayDel.length;

            for(var idx=0; idx<filesArrLen; idx++)
        	{
                sUniqKey      += arrayDel[idx].uniqKey;
                sOriginalName += arrayDel[idx].originalName;
                sSize         += arrayDel[idx].size;

                if(idx != (filesArrLen-1))
        		{
                    sUniqKey      += ",";
                    sOriginalName += ",";
                    sSize         += ",";
                }
            }

            str = str.replace("{0}", sUniqKey);
            str = str.replace("{1}", sOriginalName);
            str = str.replace("{2}", sSize);

            console.log(str);
        };

        this.fn_newArrayToString = function(arrayNew)
        {
            var str = "-- 업로드 파일 정보 시작 --\n";
            str += this.fn_RPAD("RealFileName",        " ", 20) + " : {0}\n";
            str += this.fn_RPAD("ServerFileName",      " ", 20) + " : {1}\n";
            str += this.fn_RPAD("IsLargeFile",         " ", 20) + " : {2}\n";
            str += this.fn_RPAD("Size",                " ", 20) + " : {3}\n";
            str += this.fn_RPAD("UploadPath",          " ", 20) + " : {4}\n";
            str += this.fn_RPAD("LogicalPath",         " ", 20) + " : {5}\n";
            str += this.fn_RPAD("fileExtention",       " ", 20) + " : {6}\n";
            str += this.fn_RPAD("LocalPath",           " ", 20) + " : {7}\n";
            str += this.fn_RPAD("CustomValue",         " ", 20) + " : {8}\n";
            str += this.fn_RPAD("ResponseCustomValue", " ", 20) + " : {9}\n";
            str += this.fn_RPAD("Order",               " ", 20) + " : {10}\n";
            str += "-- 업로드 파일 정보 끝 --\n";

            var originalName        = "";
            var uploadName          = "";
            var size                = "";
            var uploadPath          = "";
            var logicalPath         = "";
            var fileExtension       = "";
            var localPath           = "";
            var customValue         = "";
            var responseCustomValue = "";
            var order               = "";
            var isLargeFile         = "";

            var fileLen = arrayNew.length;

            for(var idx=0; idx<fileLen; idx++)
        	{
                originalName        += arrayNew[idx].originalName;
                uploadName          += arrayNew[idx].uploadName;
                isLargeFile         += arrayNew[idx].isLargeFile;
                size                += arrayNew[idx].size;
                uploadPath          += arrayNew[idx].uploadPath;
                logicalPath         += arrayNew[idx].logicalPath;
                fileExtension       += arrayNew[idx].extension;
                localPath           += arrayNew[idx].localPath;
                customValue         += arrayNew[idx].customValue;
                responseCustomValue += arrayNew[idx].responseCustomValue;
                order               += arrayNew[idx].order;

                if(idx != (fileLen-1))
        		{
                    originalName        += ",";
                    uploadName          += ",";
                    size                += ",";
                    uploadPath          += ",";
                    logicalPath         += ",";
                    fileExtension       += ",";
                    localPath           += ",";
                    customValue         += ",";
                    responseCustomValue += ",";
                    order               += ",";
                    isLargeFile         += ",";
                }
            }

            str = str.replace("{0}",  originalName);
            str = str.replace("{1}",  uploadName);
            str = str.replace("{2}",  isLargeFile);
            str = str.replace("{3}",  size);
            str = str.replace("{4}",  uploadPath);
            str = str.replace("{5}",  logicalPath);
            str = str.replace("{6}",  fileExtension);
            str = str.replace("{7}",  localPath);
            str = str.replace("{8}",  customValue);
            str = str.replace("{9}",  responseCustomValue);
            str = str.replace("{10}", order);

        	console.log(str);
        };

        this.fn_RPAD = function(s, c, n)
        {
            if(!s || !c || s.length >= n)
        	{
                return s;
            }

            var max = (n-s.length)/c.length;

            for(var idx=0; idx<max; idx++)
        	{
                s += c;
            }

            return s;
        };

        /**
         * K-Upload 업로드 취소시 발생하는 UploadingCancel 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_UploadingCancel = function(obj, paramObj)
        {
        	console.log("전송 취소 이벤트 : " + obj.id);
            console.log(paramObj);
        	console.log(paramObj.arrUploadedFileList);

        	if(paramObj.userdata.arrUploadedFileList != null && paramObj.userdata.arrUploadedFileList != '')
        	{
        		console.log("업로드 된 파일 리스트 -");
        		var uploadedFileLen = paramObj.userdata.arrUploadedFileList.length;

        		for(var idx=0; idx<uploadedFileLen; idx++)
        		{
        			console.log(paramObj.userdata.arrUploadedFileList[i].uploadName + ", " + paramObj.userdata.arrUploadedFileList[i].uploadPath);
                }
            }
        };

        /**
         * [ K-UPLOAD ] OnError 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	console.log("RAONKUPLOAD_OnError :: " + paramObj.userdata.strCode + ", " + paramObj.userdata.strMessage);
        	console.log("업로드 된 파일 리스트");

        	if (paramObj.userdata.arrUploadedFileList != null && paramObj.userdata.arrUploadedFileList != "") {
        		var uploadedFileLen = paramObj.userdata.arrUploadedFileList.length;

        		for (var idx = 0; idx < uploadedFileLen; idx++) {
        			console.log(paramObj.userdata.arrUploadedFileList[idx].uploadName + ", " + paramObj.userdata.arrUploadedFileList[idx].uploadPath);
        		}
        	}

        	if (paramObj.arrErrorFileList != null && paramObj.arrErrorFileList != undefined) {
        		var errorFileLen = paramObj.arrErrorFileList.length;
        		for (var i = 0; i < errorFileLen; i++) {
        			// Excel의 row : (paramObj.arrErrorFileList[i].index + 1 + (Title row 까지의 row 수))
        			// 파일 경로 : paramObj.arrErrorFileList[i].path
        			// 기타 추가 정보 : paramObj.arrErrorFileList[i].customValue
        			console.log("@@@ Excel의 row :: " + paramObj.arrErrorFileList[i].index + 1);
        			console.log("@@@ 파일 경로 :: " + paramObj.arrErrorFileList[i].path);
        			console.log("@@@ 기타 추가 정보 :: " + paramObj.arrErrorFileList[i].customValue);
        		}
        	}

        	//this.Raonkupload.DeleteAllFile();
        	this.Raonkupload.ResetUpload();
        	this.sheets = [];
        };

        /**
         * K-Upload 업로드 완료시 발생하는 UploadComplete 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	// K Upload는 array, json, xml, text delimit 방식으로 결과값을 제공합니다.
        	// 파일에 대한 정보 중 업로드가 완료된 파일의 정보(업로드 된 파일경로,업로드 된 파일명)는
        	// RAONKUPLOAD_UploadComplete 이벤트 안에서만 추출이 가능합니다.
        	var dataArray = this.Raonkupload.GetListInfo();

        	// 신규 업로드된 파일
        	var arrayNew = dataArray.newFile;

        	if(arrayNew)
        	{
        		this.fn_newArrayToString(arrayNew);
        	}

        	// 삭제된 파일
        	var arrayDel = dataArray.deleteFile;

        	if(arrayDel)
        	{
        		this.fn_delArrayToString(arrayDel);
        	}

        	//this.Raonkupload.DeleteAllFile();
        	this.Raonkupload.ResetUpload();
        	this.sheets = [];
        	this.trId = this.uuidv4();
        };

        /**
         * K-Upload 객체 생성이 완료 되었을때 발생하는 CreationComplete 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	console.log("업로드 생성 완료 : " + obj.id);
        	console.log(paramObj);
        };

        /**
         * K-Upload 전송 시작전 발생하는 파일전송 여부 BeforeUpload 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_BeforeUpload = function(obj, paramObj)
        {
        	for(var idx=0; idx<this.sheets.length; idx++)
        	{
        		var cv = this.trId
        		         + "|" + this.sheets[idx].cocd
        		         + "|" + this.sheets[idx].productId
        			     + "|" + this.sheets[idx].etcFds
        				 + "|" + this.sheets[idx].imgFile;
        		this.Raonkupload.SetFileCustomValue(idx,cv);
        	}
        };


        /**
         * K-Upload에 파일이 모두 추가 완료 되었을때 발생되는 AfterAddAllFile 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	this.Raonkupload.Transfer(obj.id);
        };

        /**
         * [ K-UPLOAD ] IMG 일괄업로드 onclick 이벤트 발생 처리
         */
        this.btn_imgPkgDownRegUpd_onclick = function(obj,e)
        {
        	var excelOptions = {
        		"LoadKindOfType" : 1
        		, "data_sheets" : [
        			{
        				"sheet_data_name" : "Image"
        				, "data" : [
        					{"data_start" : "A2" , "data_title" : "A1" , "return_name" : "cocd"}
        					, {"data_start" : "B2" , "data_title" : "B1" , "return_name" : "productId"}
        					, {"data_start" : "C2" , "data_title" : "C1" , "return_name" : "etcFds"}
        					, {"data_start" : "D2" , "data_title" : "D1" , "return_name" : "imgFile"}
        				]
        			}
        		]
        	}

         	var param = {
         		options : excelOptions
         	};
        // 	var param = {
        // 		options: excelOptions
        // 		, callback : function(param) {
        // 			var arrFileInfo = [];
        // 			arrFileInfo.push({
        // 				path: (Excel에서 추출된 파일 경로),
        // 				customValue: (Excel에서 추출된 기타 추가 정보)
        // 			});
        // 			this.RaonkUpload.AddLocalFileDirectlyEx(arrFileInfo, callback);
        // 		}
        // 	};

        	this.Raonkupload.GetExcelData(param);
        };

        /**
         * IMG 일괄다운로드 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_imgPkgDown_onclick = function(obj,e)
        {
        	if(this.ds_master.findRow("CHK","1") == -1)
        	{
        		this.fn_alert("ERRR000011","저장정보","","question"); // 선택된 값이 없습니다
        		return false;
        	}

        	var arrRows = this.ds_select.extractRows("COL_ITM == 'IMG_PRD_ID'");
        	this.ds_select.deleteMultiRows(arrRows);

        	var strValue = "";

        	for(var idx=0; idx<this.ds_master.getRowCount(); idx++)
        	{
        		if(this.ds_master.getColumn(idx,"CHK") == 1)
        		{
        			var nRow = this.ds_select.addRow();
        			this.ds_select.setColumn(nRow,"SES_ID",       "");
        			this.ds_select.setColumn(nRow,"INQ_COND_DTLS",this.formId);
        			this.ds_select.setColumn(nRow,"COL_ITM",      "IMG_PRD_ID");
        			this.ds_select.setColumn(nRow,"COND_DATA_VAL",this.ds_master.getColumn(idx,"PRD_ID"));
        		}
        	}

        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();
        	this.ds_input.setColumn(nRow,"INQ_COND_DTLS",this.formId);

        	var sSvcId      = "imgPkgDown";
        	var sUrl        = "/rd/prd-info-mng/select-prd-img-list-down-inq.do";
        	var inDs        = "ds_search=ds_select"
        	                + " ds_input=ds_input";
        	var outDs       = "ds_imgFileList=ds_imgFileList";
        	var arg         = "";
        	var strCallBack = "fn_callBack"; // 공백일시 기본 fn_callBack
        	var strASync    = false;         // 생략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_transaction(sSvcId
        	                   , sUrl
        					   , inDs
        					   , outDs
        					   , arg
        					   , strCallBack
        					   , strASync);

        	if(this.ds_imgFileList.getRowCount() == 0)
        	{
        		this.fn_alert("ERRR000217","저장정보","","question"); // IMG 일괄다운로드할 대상 이미지가 한건도 존재하질 않습니다.
        		return false;
        	}

        	this.fn_addFile();
        };

        this.fn_addFile = function()
        {
        	this.Raonkupload.ResetUpload();
        	var strCnt  = 0;
        	var strTemp = "";

        	for(var idx=0; idx<this.ds_imgFileList.getRowCount(); idx++)
        	{
        		var strAtflNm    = this.ds_imgFileList.getColumn(idx,"ATFL_NM");
        		var strfilePath  = this.ds_imgFileList.getColumn(idx,"FILE_PATH");
        		var strOriAtflNm = this.ds_imgFileList.getColumn(idx,"ORI_ATFL_NM");
        		var strAtflLen   = this.ds_imgFileList.getColumn(idx,"ATFL_LEN");
        		var strPrdId     = this.ds_imgFileList.getColumn(idx,"PRD_ID");

        		if(strPrdId != strTemp)
        		{
        			strCnt  = 0;
        			strTemp = strPrdId;
        		}

        		strCnt++;
        		var strFileNm    = strPrdId + "_" + strCnt + "_" + strAtflNm;
        		var strFilePath  = strfilePath + strOriAtflNm;

        		console.log("#################");
        		console.log(strFilePath);

        		this.Raonkupload.AddUploadedFile(idx,strFileNm,strFilePath,strAtflLen,"");
        	}

        	this.Raonkupload.DownloadAllFile();
        };
        this.Raonkupload_RAONKUPLOAD_BeforeCreation = function(obj)
        {
        		this.Raonkupload.set_MassFileMode(1);
        };

        this.Raonkupload_RAONKUPLOAD_GetExcelData = function(obj, paramObj)
        {
        	/*
        		GetExcelData CallBack Event
        		paramObj.userdata.resultMsg  : "OK" or "FAIL"
        		paramObj.userdata.resultData : object or null
        		paramObj.userdata.errorMsg   : resultMsg 값이 "FAIL" 인 경우에 string 값이 있음
        		paramObj.userdata.uploadID   : 업로드 ID
        	*/
        	var resultData = "resultMsg : " + paramObj.userdata.resultMsg + "\n"
        	+ "errorMsg : " + paramObj.userdata.errorMsg + "\n"
        	+ "-------------------- resultData --------------------\n" ;

        	if (paramObj.userdata.resultData && paramObj.userdata.resultData.Sheets) {
        		var arrayFileList = [];

        		for (var idx = 0; idx < paramObj.userdata.resultData.Sheets.length; idx++) {
        			var sheet = paramObj.userdata.resultData.Sheets[idx];
        			resultData += "-------------------- sheetName : " + sheet.sheet_name + " --------------------\n";

        			for (var jdx = 0; jdx < sheet.Data.length; jdx++) {
        				arrayFileList.push({
        					path : sheet.Data[jdx].imgFile
        				});

        				this.sheets.push(sheet.Data[jdx]);
        			}
        		}

        		console.log(resultData);

        		// 업로드 컴포넌트에 파일 추가
        		this.Raonkupload.AddLocalFileDirectlyEx(arrayFileList);
        	}
        };


        /**
         * 대용량다운로드
         */
        this.fn_largeFileDown = function(page){

            if(!this.fn_PreRet(page))
            {
                return false;
            }

        	var sSvcId = "largeFileDown";
        	var sUrl = "/rd/rdExcelDown/product-info.do";
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
        	this.fn_setMultiSearch(this.formId, "PRD_ID",  this.ds_search.getColumn(0,"PRD_ID"));      // 상품ID
        	this.fn_setMultiSearch(this.formId, "PRD_CLCD", this.ds_search.getColumn(0,"PRD_CLCD"));   // 카테고리
        	this.fn_setMultiSearch(this.formId, "MNFR_NO", this.ds_search.getColumn(0,"MNFR_NO"));     // 제조원

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


        // 일괄엑셀업로드 > 엑셀업로드_R&D01_등록상품 등록수정
        this.btn_pkgUpd_onclick = function(obj,e) {
        	var prms = { pgmId : 'SSP_BO_RD_01' }, opts = { title : '상품정보 일괄수정' };
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", prms, "fnPkgUpdClbk", opts);
        };
        // /일괄엑셀업로드 > 엑셀업로드_R&D01_등록상품 등록수정


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_UploadingCancel",this.Raonkupload_RAONKUPLOAD_UploadingCancel,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_OnError",this.Raonkupload_RAONKUPLOAD_OnError,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_UploadComplete",this.Raonkupload_RAONKUPLOAD_UploadComplete,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_CreationComplete",this.Raonkupload_RAONKUPLOAD_CreationComplete,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_BeforeUpload",this.Raonkupload_RAONKUPLOAD_BeforeUpload,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.Raonkupload_RAONKUPLOAD_AfterAddAllFile,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_BeforeCreation",this.Raonkupload_RAONKUPLOAD_BeforeCreation,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_GetExcelData",this.Raonkupload_RAONKUPLOAD_GetExcelData,this);
            this.div_search.form.edt_grpId.addEventHandler("oninput",this.edtCustNm_oninput,this);
            this.div_search.form.edt_grpId.addEventHandler("onkeyup",this.edtCustNm_onkeyup,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("oninput",this.div_search_edt_mnfrCd_oninput,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("onkeyup",this.div_search_edt_mnfrCd_onkeyup,this);
            this.div_search.form.btn_mnfrPopup.addEventHandler("onclick",this.div_search_btn_mnfrPopup_onclick,this);
            this.div_search.form.btn_allChk.addEventHandler("onclick",this.div_search_btn_allChk_onclick,this);
            this.div_search.form.chkVal1.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal2.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.chkVal3.addEventHandler("onchanged",this.div_search_chkVal_onchanged,this);
            this.div_search.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_search_btn_prdIdMultiInput_onclick,this);
            this.div_search.form.edt_prdNm.addEventHandler("oninput",this.edtCustNm_oninput,this);
            this.div_search.form.edt_prdNm.addEventHandler("onkeyup",this.edtCustNm_onkeyup,this);
            this.div_search.form.edt_reprSpec.addEventHandler("oninput",this.edtCustNm_oninput,this);
            this.div_search.form.edt_reprSpec.addEventHandler("onkeyup",this.edtCustNm_onkeyup,this);
            this.div_search.form.edt_prdClcd.addEventHandler("oninput",this.div_search_edt_prdClcd_oninput,this);
            this.div_search.form.edt_prdClcd.addEventHandler("onkeyup",this.div_search_edt_prdClcd_onkeyup,this);
            this.div_search.form.btn_prdClcdPopup.addEventHandler("onclick",this.div_search_btn_prdClcdPopup_onclick,this);
            this.div_search.form.btn_prdClcdMultiInput.addEventHandler("onclick",this.div_search_btn_prdClcdMultiInput_onclick,this);
            this.div_search.form.btn_mnfrMultiInput.addEventHandler("onclick",this.div_search_btn_mnfrMultiInput_onclick,this);
            this.div_search.form.edt_prdChrpsnId.addEventHandler("oninput",this.div_search_edt_prdChrpsnId_oninput,this);
            this.div_search.form.edt_prdChrpsnId.addEventHandler("onkeyup",this.div_search_edt_prdChrpsnId_onkeyup,this);
            this.div_search.form.btn_prdChrpsnPopup.addEventHandler("onclick",this.div_search_btn_prdChrpsnPopup_onclick,this);
            this.div_search.form.edt_purgChrpsnId.addEventHandler("oninput",this.div_search_edt_purgChrpsnId_oninput,this);
            this.div_search.form.edt_purgChrpsnId.addEventHandler("onkeyup",this.div_search_edt_purgChrpsnId_onkeyup,this);
            this.div_search.form.btn_purgChrpsnPopup.addEventHandler("onclick",this.div_search_btn_purgChrpsnPopup_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.edtSizeCd00_01_01.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.div_search.form.edtSizeCd00_01_01.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_largeExcel.addEventHandler("onclick",this.div_search_btn_largeExcel_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_imgPkgDown.addEventHandler("onclick",this.btn_imgPkgDown_onclick,this);
            this.btn_imgPkgDownRegUpd.addEventHandler("onclick",this.btn_imgPkgDownRegUpd_onclick,this);
            this.btn_pkgUpd.addEventHandler("onclick",this.btn_pkgUpd_onclick,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_RD_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
