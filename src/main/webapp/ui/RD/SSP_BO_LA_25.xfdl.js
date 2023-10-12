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
            this.set_titletext("전용상품 처리대기");
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
            obj._setContents("<ColumnInfo><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID_NUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SALES_TEAM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DSTRB_STD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_APLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DIS_RSN\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OPRTR_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MEM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"INVN_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EXHBN_CNT\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPRTR_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_STATE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_REG_DIS_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MEM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"EXPS_SAL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"LWST_BUY_CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_CURR_BSS_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SEL_MTHD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_REG_DIS_TP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_BSS_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRC_STATE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_LT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_REG_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"EXPS_SAL2\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_SAL3\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_BASIS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prcProcStatsCdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bssDoSprCdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chrpsSprCdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageRowCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">1000</Col><Col id=\"COM_DTL_CD_NM\">1000개씩</Col></Row><Row><Col id=\"COM_DTL_CD\">5000</Col><Col id=\"COM_DTL_CD_NM\">5000개씩</Col></Row><Row><Col id=\"COM_DTL_CD\">10000</Col><Col id=\"COM_DTL_CD_NM\">10000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_BZPLC_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_OPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_OPR_UNIT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WRK\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"REQ_BZPLC\"/><Col id=\"REQ_BZPLC_CNT\"/><Col id=\"REQ_OPR_UNIT\"/><Col id=\"REQ_OPR_UNIT_CNT\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"REQ_DT_FNL_PROC_DT_UNIT\"/><Col id=\"CHRPSN_ID\"/><Col id=\"CHRPSN_NM\"/><Col id=\"PRC_PROC_STATS_CD\"/><Col id=\"CHRPSN_SPR_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_BZPLC_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_OPR_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_OPR_UNIT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"REQ_BZPLC\"/><Col id=\"REQ_BZPLC_CNT\"/><Col id=\"REQ_OPR_UNIT\"/><Col id=\"REQ_OPR_UNIT_CNT\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"REQ_DT_FNL_PROC_DT_UNIT\"/><Col id=\"CHRPSN_ID\"/><Col id=\"CHRPSN_NM\"/><Col id=\"PRC_PROC_STATS_CD\"/><Col id=\"CHRPSN_SPR_CD\"/></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salsChrpsnYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_totcnt","20","177","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","765","86.53%","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","147","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","201","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","733","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","796","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCont",null,"177","100","24","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"177","110","24","cbo_rowCont:3",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"177","100","24","btn_excelDown:3",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"177","100","24","btn_layoutInit:4",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_allReg",null,"177","82","24","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bssSalsprcProc",null,"177","110","24","btn_allReg:4",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("기준판매가처리");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","20",null,"134","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","94","100.08%","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"104","60","28","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"104","60","28","btn_search:4",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","695","798","10","15",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary2");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_download",null,"104","118","28","btn_init:4",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","0","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_procStats","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05_02","0","62",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reqNo","0","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_bssDd","0","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("기준일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdId","430","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reqBzplc","430","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("요청사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","860","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reqOprUnit","860","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("요청운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_prcProcStatsCd","140","4","230","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_prcProcStatsCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가격등록요청");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","1000","4","64","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","1068","4","156","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPopup","1229","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chrpsn","730","62","131","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnId","1000","66","64","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnNm","1068","66","156","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_chrpsnPopup","1229","66","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_chrpsn","871","66","119","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_chrpsSprCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","570","4","74","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","833","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","804","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqNo","140","35","230","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqBzplc","570","35","230","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reqBzplcMultiInput","834","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reqBzplcMultiPopup","805","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reqOprUnit","1000","35","224","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reqOprUnitMultiInput","1258","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reqOprUnitMultiPopup","1229","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reqNoMultiInput","374","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","648","4","151","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_ReqDtFnlProcDtSpr","140","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("36");
            obj.set_innerdataset("ds_bssDoSprCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","275","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("37");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_cssclass("cal_WF_calendar");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","413","67","10","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("38");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","430","67","126","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("39");
            obj.set_text("15:24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            obj.set_cssclass("cal_WF_calendar");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","562","67","96","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("40");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("가입");
            obj.set_value("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","209",null,null,"20","113",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_master");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.getSetter("uSortFlag").set("false");
            obj.getSetter("uServerSortFlag").set("true");
            obj.getSetter("uSortCallback").set("fn_sortCallback");
            obj.getSetter("uCellSizeType").set("true");
            obj.set_selecttype("cell");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"요청번호\"/><Cell col=\"3\" text=\"처리상태\"/><Cell col=\"4\" text=\"사업장ID\"/><Cell col=\"5\" text=\"사업장\"/><Cell col=\"6\" text=\"운영단위ID\"/><Cell col=\"7\" text=\"운영단위\"/><Cell col=\"8\" text=\"부서명\"/><Cell col=\"9\" text=\"요청자ID\"/><Cell col=\"10\" text=\"요청자\"/><Cell col=\"11\" text=\"카테고리ID\"/><Cell col=\"12\" text=\"카테고리\"/><Cell col=\"13\" text=\"공용전용구분\"/><Cell col=\"14\" text=\"상품상태\"/><Cell col=\"15\" text=\"진열상태\"/><Cell col=\"16\" text=\"상품명\"/><Cell col=\"17\" text=\"대표규격\"/><Cell col=\"18\" text=\"제조원ID\"/><Cell col=\"19\" text=\"제조원명\"/><Cell col=\"20\" text=\"주문단위\"/><Cell col=\"21\" text=\"원산지\"/><Cell col=\"22\" text=\"최저매입가\"/><Cell col=\"23\" text=\"매입유효기간(From)\"/><Cell col=\"24\" text=\"매입유효기간(To)\"/><Cell col=\"25\" text=\"협력사ID\"/><Cell col=\"26\" text=\"최저매입협력사\"/><Cell col=\"27\" text=\"R&amp;D기준가\"/><Cell col=\"28\" text=\"ListPrice\"/><Cell col=\"29\" text=\"기준판매가\"/><Cell col=\"30\" text=\"영업지정판매가\"/><Cell col=\"31\" text=\"산출근거\"/><Cell col=\"32\" text=\"고객노출판매가\"/><Cell col=\"33\" text=\"기준판매가사용여부\"/><Cell col=\"34\" text=\"최소주문수량\"/><Cell col=\"35\" text=\"재고여부\"/><Cell col=\"36\" text=\"평균배송일\"/><Cell col=\"37\" text=\"영업팀\"/><Cell col=\"38\" text=\"영업담당자ID\"/><Cell col=\"39\" text=\"영업담당자\"/><Cell col=\"40\" text=\"구매담당자ID\"/><Cell col=\"41\" text=\"구매담당자\"/><Cell col=\"42\" text=\"가격등록요청일\"/><Cell col=\"43\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" editmaxlength=\"1\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:PRD_ID_NUM\" color=\"#235da8\" cursor=\"pointer\" textDecoration=\"underline\" displaytype=\"text\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:NEW_PRD_REQ_NO\" textDecoration=\"underline\" color=\"#235da8\" cursor=\"pointer\"/><Cell col=\"3\" text=\"bind:PRC_STATE_NM\" displaytype=\"normal\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" comboautoselect=\"true\" combotype=\"search\"/><Cell col=\"4\" text=\"bind:BZPLC_ID\"/><Cell col=\"5\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"7\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:MEM_ID\"/><Cell col=\"10\" text=\"bind:MEM_NM\"/><Cell col=\"11\" text=\"bind:PRD_CLCD\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"12\" text=\"bind:PRD_CLCD_NM\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:PUB_ONLY_SPR_NM\" displaytype=\"normal\" edittype=\"none\" combodataset=\"dsGUseYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"14\" text=\"bind:MRO_PRD_STATS_NM\" displaytype=\"normal\"/><Cell col=\"15\" text=\"bind:DISP_STATS_NM\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" text=\"bind:PRD_NM\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:ATTR_VAL\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:MNFR_NO\"/><Cell col=\"19\" text=\"bind:MNFR_NM\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:SELL_UNIT_CD\"/><Cell col=\"21\" text=\"bind:ORGPLC_CTRY_NM\"/><Cell col=\"22\" text=\"bind:SSP_CURR_BSS_SALSPRC\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:BSS_SALSPRC_STR_DTM\"/><Cell col=\"24\" text=\"bind:BSS_SALSPRC_END_DTM\"/><Cell col=\"25\" text=\"bind:LWST_BUY_CPRTCP_ID\"/><Cell col=\"26\" text=\"bind:CPRTCP_NM\" textAlign=\"left\"/><Cell col=\"27\" text=\"bind:STPRC\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:DSTRB_STD_PRC\" textAlign=\"right\"/><Cell col=\"29\" text=\"bind:SSP_BSS_SALSPRC\" textAlign=\"right\"/><Cell col=\"30\" text=\"bind:SALS_DSGN_SALSPRC\" textAlign=\"right\"/><Cell col=\"31\" text=\"bind:CAL_BASIS\"/><Cell col=\"32\" text=\"bind:EXPS_SAL3\" textAlign=\"right\"/><Cell col=\"33\" text=\"bind:BSS_SALSPRC_USEYN\" expr=\"BSS_SALSPRC_USEYN==null?&apos;&apos;:BSS_SALSPRC_USEYN==&apos;Y&apos;?&apos;사용&apos;:&apos;미사용&apos;\"/><Cell col=\"34\" text=\"bind:MIN_ODR_QTY\" textAlign=\"right\"/><Cell col=\"35\" text=\"bind:INVN_STATS_NM\"/><Cell col=\"36\" text=\"bind:DLV_LT\"/><Cell col=\"37\" text=\"bind:SALES_TEAM_NM\"/><Cell col=\"38\" text=\"bind:OPRTR_ID\"/><Cell col=\"39\" text=\"bind:OPRTR_NM\"/><Cell col=\"40\" text=\"bind:OPRTR_ID1\"/><Cell col=\"41\" text=\"bind:OPRTR_NM1\"/><Cell col=\"42\" text=\"bind:PRD_REG_DTM\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"43\" text=\"bind:PRC_REG_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("전용상품 처리대기");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.chk_newPrdProcStats4","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.chk_newPrdProcStats5","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.chk_newPrdProcStats6","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.chk_newPrdProcStats7","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.chk_newPrdProcStats8","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.chk_newPrdProcStats9","value","ds_search","FULL_PRD_NM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cmb_ReqDtFnlProcDtSpr","value","ds_search","REQ_DT_FNL_PROC_DT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cmb_prcProcStatsCd","value","ds_search","PRC_PROC_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.edt_prdClNm","value","ds_search","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.edt_reqNo","value","ds_search","REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_search.form.edt_reqBzplc","value","ds_search","REQ_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_search.form.edt_reqOprUnit","value","ds_search","REQ_OPR_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.cmb_chrpsn","value","ds_search","CHRPSN_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_search.form.edt_chrpsnId","value","ds_search","CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.edt_chrpsnNm","value","ds_search","CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cbo_rowCont","value","ds_search","ROW_COUNT");
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
        this.addIncludeScript("SSP_BO_LA_25.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_LA_25.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_LA_25.xfdl(전용상품 처리대기)
        * 작 성         일 명: 나용철
        * 작 성         일 자: 2022/05/03
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
        this.mallSprCd              = "20";
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
        	// 로컬 로그인 사용 않할시 false
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
            var strDs    = "ds_prcProcStatsCdCombo|ds_bssDoSprCdCombo|ds_dateUnitCombo|ds_chrpsSprCdCombo|ds_pageRowCd|ds_rndPrdAuthCombo";     // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "PRC_PROC_STATS_CD|BSS_DD_SPR_CD|INQ_PERD_SPR_CD|CHRPSN_SPR_CD|PAGE_ROW_CD|CHRPSN_TEAM_SPR_CD1";                      // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|T|X|X|X";                                                                                      // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                                                                               // 조건문 "";
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
        	this.fn_setResetBtnCall();
        	// RND화면권한제어 호출
        	this.fn_setRndUiAuthCtl();

        	this.fn_todoSearch();
        };
        this.fn_todoSearch = function() {
        	var oArgs = this.getOwnerFrame().arguments["oArgs"];
        	if (oArgs && oArgs.TODO === "Y") {
        		if (oArgs.STATUS) this.ds_search.setColumn(0, "PRC_PROC_STATS_CD", oArgs.STATUS); //  10 : 가격등록요청, 20 : 가격등록완료
        		if (oArgs.ID) {
        			this.ds_search.setColumn(0, "CHRPSN_SPR_CD", "10");  // 10 : 영업담당자
        			this.ds_search.setColumn(0, "CHRPSN_ID", oArgs.ID);
        		}
        		if (oArgs.NN) this.div_search.form.edt_chrpsnNm.set_value(oArgs.NM);
        		if (oArgs.DTM) {
        			this.div_search.form.cmb_ReqDtFnlProcDtSpr.set_index(0);

        			if(oArgs.DTM == 1) this.div_search.form.cmb_dtUnit.set_index(5); // 1: 3개월, 2: 전체
        			else this.div_search.form.cmb_dtUnit.set_index(0);

        			this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr
        			   ,this.div_search.form.cal_reqDtFnlProcDtEnd
        			   ,this.div_search.form.cmb_dtUnit);
        		}
        		this.div_search.form.btn_search.click();
        	}
        }
        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
        	this.lv_pageViewCnt = this.fn_setInitPageCnt(this.ds_pageRowCd,this.lv_pageViewCnt);
            this.lvGetDate = this.fn_getSvrDate();
        	this.ds_search.clearData();
            var nRow = this.ds_search.addRow();
        	this.ds_prcProcStatsCdCombo.filter("COM_DTL_CD==null || COM_DTL_CD=='10' || COM_DTL_CD=='20'");
        	var oprtrId = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"OPRTR_ID"),"");
        	var oprtrNm = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"OPRTR_NM"),"");

        	this.ds_search.setColumn(nRow,"PRD_ID",                  null);                //상품ID
        	this.ds_search.setColumn(nRow,"PRD_NM",                  null);                //상품명
        	this.ds_search.setColumn(nRow,"PRD_CLCD",                null);                //카테고리CD
        	this.ds_search.setColumn(nRow,"PRD_CLSF_NM",             null);                //카테고리명
        	this.ds_search.setColumn(nRow,"REQ_NO",                  null);                //요청번호
        	this.ds_search.setColumn(nRow,"REQ_BZPLC",               null);                //요청사업장
        	this.ds_search.setColumn(nRow,"REQ_OPR_UNIT",            null);                //요청운영단위
        	this.ds_search.setColumn(nRow,"CHRPSN_ID",               oprtrId);                //담당자ID
        	this.ds_search.setColumn(nRow,"CHRPSN_NM",               oprtrNm);                //담당자명

            this.ds_search.setColumn(nRow,"PRC_PROC_STATS_CD",       "10");                //처리상태 ( df:가격등록요청 )
        	this.ds_search.setColumn(nRow,"REQ_DT_FNL_PROC_DT_SPR",  "10");                //일자구분 ( df:가격등록요청일 )
        	this.ds_search.setColumn(nRow,"REQ_DT_FNL_PROC_DT_UNIT", null);                //일자기간구분 ( df:전체 )
        	this.ds_search.setColumn(nRow,"CHRPSN_SPR_CD",           "10");                //담당자구분 ( df:영업담당자 )
        	this.ds_search.setColumn(nRow,"ROW_COUNT",               this.lv_pageViewCnt); //현재 레코드 초기화셋팅

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
                    case "singleInit":
                            this.fn_PostSingleInt();
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
        			case "bssSalsprcProcSave" :
                            this.fn_bssSalsprcProc_PostSave();
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
        		case "SSP_BO_LA_07" :
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
                case "SSP_BO_CO_03" :

        				//중분류팝업조회
        				if(!this.gfn_isNull(strVal))
        				{
        					//일반
        					var sRtn = strVal.split(",");

        					if(sRtn[0] == "CLOSE")
        					{
        					}else
        					{
        						//this.dsDummy.loadXML(sRtn[2]);
        						//trace(this.dsDummy.saveXML());
        					}
        				}
        			break;
        			// 상품ID 멀티입력팝업 후처리
        		case "SSP_BO_PP_16" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				var prdStr   = "";
        				var prdNm    = "";

        				if(jsonData.length > 0)
        				{
        					for(var i = 0; i<jsonData.length; i++)
        					{
        						var rtnData = JSON.parse(jsonData[i]);
        							prdStr += rtnData.PRD_ID_VIEW + ",";
        							prdNm  += rtnData.PRD_NM + ",";
        					}
        					this.div_search.form.edt_prdId.set_value(prdStr.substring(0, prdStr.length-1));
        					this.div_search.form.edt_prdNm.set_value(prdNm.substring(0, prdNm.length-1));
        				}
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
        		case "SSP_BO_PP_13_01" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_prdId.set_value(jsonData.textValue);
        				this.div_search.form.edt_prdNm.set_value("");
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
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
        		case "SSP_BO_PP_13_02" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_prdClcd.set_value(jsonData.textValue);
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
        		case "SSP_BO_PP_13_03" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_reqNo.set_value(jsonData.textValue);
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
        		case "SSP_BO_PP_14" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var cmpObj = JSON.parse(strVal);
        				var sIdList = "";
        				var sNmList = "";
        				for(var i=0; i<cmpObj.length; i++)
        				{
        					var rowData = JSON.parse(cmpObj[i]);
        					sIdList += rowData.BZPLC_ID +",";
        				}
        				this.div_search.form.edt_reqBzplc.set_value(sIdList.replace(/,\s*$/, ""));
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
        		case "SSP_BO_PP_13_04" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_reqBzplc.set_value(jsonData.textValue);
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
        		case "SSP_BO_PP_23" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var cmpObj = JSON.parse(strVal);
        				var sIdList = "";
        				var sNmList = "";
        				for(var i=0; i<cmpObj.length; i++)
        				{
        					var rowData = JSON.parse(cmpObj[i]);
        					sIdList += rowData.OPR_UNIT_ID +",";
        				}
        				this.div_search.form.edt_reqOprUnit.set_value(sIdList.replace(/,\s*$/, ""));
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
        		case "SSP_BO_PP_13_05" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_reqOprUnit.set_value(jsonData.textValue);
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
        		case "SSP_BO_PP_27" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData  = JSON.parse(strVal);
        				var EmpNo     = jsonData.EMP_NO;
        				var sOprtrNm  = jsonData.OPRTR_NM;
        				this.div_search.form.edt_chrpsnId.set_value(EmpNo);
        				this.div_search.form.edt_chrpsnNm.set_value(sOprtrNm);
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
            this.fn_setMultiSearch(this.formId,"PRD_ID",this.ds_search.getColumn(0,"PRD_ID"));              // 상품ID
        	this.fn_setMultiSearch(this.formId,"PRD_CLCD",this.ds_search.getColumn(0,"PRD_CLCD"));          // 카테고리
        	this.fn_setMultiSearch(this.formId,"REQ_NO",this.ds_search.getColumn(0,"REQ_NO"));              // 요청번호
        	this.fn_setMultiSearch(this.formId,"REQ_BZPLC",this.ds_search.getColumn(0,"REQ_BZPLC"));        // 요청사업장
        	this.fn_setMultiSearch(this.formId,"REQ_OPR_UNIT",this.ds_search.getColumn(0,"REQ_OPR_UNIT"));  // 요청운영단위

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
        								 ,this.div_search.form.cmb_ReqDtFnlProcDtSpr.text))
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
            var strUrl      = "/rd/only-prd-proc-stb/select-only-prd-proc-stb.do";
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
        	//trace(this.ds_master.saveXML());
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

        /**
         * 기능 : 기준판매가 버튼 클릭시
         */
        this.btn_bssSalsprcProc_onclick = function(obj,e)
        {
        	this.fn_bssSalsprcProc_Save();
        };

        /**
         * 기능 : 기준판매가 저장 전 실행
         */
        this.fn_bssSalsprcProc_PreSave = function()
        {
        	var chkCnt = this.ds_master.getCaseCount("CHK > 0");
        	var prcStatCnt = this.ds_master.getCaseCount("CHK > 0 && PRC_STATE_CD == '20'"); // 가격등록완료상태

        	if(chkCnt < 1){
        		this.fn_alert("ERRR000011", "저장", "", "information");      // 선택된 값이 없습니다.
        		return false;
        	}

        	if(prcStatCnt > 0){
        		this.fn_alert("ERRR000236", "저장", "가격등록완료상태인 요청은 기준판매가 처리", "information");      // 가격등록완료상태인 요청은 기준판매가 처리 (&1할 수 없습니다.)
        		return false;
        	}

            var result = this.fn_confirm( "ERRC000144", "저장","선택한 항목을 기준판매가 처리 ", "question" ); // 선택한 항목을 기준판매가 처리 (&1하시겠습니까?)

            if(result == 0)
            {
                return false;
            }

            return true;
        };

        /**
         * 기능 : 기준판매가 저장 실행
         */
        this.fn_bssSalsprcProc_Save = function()
        {
            if(!this.fn_bssSalsprcProc_PreSave())
            {
                return false;
            }

            var strSvc      = "bssSalsprcProcSave";
        	var strUrl      = "/rd/only-prd-proc-stb/save-only-prd-bss-salsprc-proc.do";
            var strInDs     = "ds_master=ds_master:u";
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
         * 기능 : 기준판매가 저장시 후처리
         */
        this.fn_bssSalsprcProc_PostSave = function()
        {
        	this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다
        	this.fn_Ret(true);
        };


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
        	// 슈퍼권한 혹은 영업담당자가 아닐 경우 등록 불가 조회만 가능
        	if(this.lv_btnChkYn != "P")
        	{
        		this.btn_bssSalsprcProc.set_visible(false);
         		this.btn_allReg.set_visible(false);
        	}

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
            //this.fn_Excel();
        	var result = this.fn_confirm( "ERRR000168", "EXCEL 출력","EXCEL","question" );    // Excel를 출력하시겠습니까?

        	if (result != true)
        	{
        		return false;
        	}
        	this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_Excel");

        };

        this.fn_Excel = function(objId, ret)
        {
            if(this.ds_master.rowcount < 1)
            {
                this.fn_alert("ERRS000202", "EXCEL 정보" ,"","information");              // 엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.
                return false;
            }
        	var answr = ret.split("||||");

        	if(this.gfn_isNull(answr)) return;

        	this.gfn_exportExcel({form:this, grid:this.grd_list, fileName:"전용상품 처리대기", password: answr[0], downRsn: answr[1], pgmId: "SSP_BO_LA_25_01", dbWrk: "DOWNLOAD"});
            //this.gfn_excelExport(this.grd_list, "전용상품 처리대기","전용상품 처리대기");
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
                var oSortInfo = this.grd_list.uaSortInfo;
                this.ds_searchTemp.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
                this.ds_searchTemp.setColumn(0,"SORT_TYPE",  oSortInfo.status);
                this.fn_Ret(false);
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

            var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
            this.sta_totcnt.set_text(sTotText);
        };

        /**
         * 조회조건 상품ID 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdIdMultiPopup_onclick = function(obj,e)
        {
        	var params  = { pubOnlySprCd : "E"
        	              , mallSprCd : "20"
        	              , coCd         : this.lv_coCd };
            var options = { title        : this.div_search.form.stc_prdId.text };

            this.gfn_openPopup( "SSP_BO_PP_16"
        	                  , "PR_POP::SSP_BO_PP_16.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };

        /**
         * 조회조건 상품ID 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdIdMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdId };
            var options = { title  : this.div_search.form.stc_prdId.text };

            this.gfn_openPopup( "SSP_BO_PP_13_01"
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"PRD_CLSF_NM",	this.ds_popupList.getColumn(0,"PRD_CLSF_NM"));
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

        /***********************************************************************************************
        *  카테고리 조회팝업 종료
        /***********************************************************************************************/
        /**
         * 조회조건 카테고리 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdClcdMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdClcd };
            var options = { title  : this.div_search.form.stc_prdClcd.text };

            this.gfn_openPopup( "SSP_BO_PP_13_02"
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };

        /**
         * 조회조건 요청번호 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_reqNoMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_reqNo };
            var options = { title  : this.div_search.form.stc_reqNo.text };

            this.gfn_openPopup( "SSP_BO_PP_13_03"
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };

        /**
         * 조회조건 요청사업장 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_reqBzplcMultiPopup_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_reqBzplc
        	              , coCd   : this.lv_coCd };
            var options = { title  : this.div_search.form.stc_reqBzplc.text };

            this.gfn_openPopup( "SSP_BO_PP_14"
        	                  , "CO_POP::SSP_BO_PP_14.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);

        };

        /**
         * 조회조건 요청사업장 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_reqBzplcMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_reqBzplc };
            var options = { title  : this.div_search.form.stc_reqBzplc.text };

            this.gfn_openPopup("SSP_BO_PP_13_04"
        	                 , "CO_POP::SSP_BO_PP_13.xfdl"
        					 , params
        					 , "fn_popupCallback"
        					 , options);
        };

        /**
         * 조회조건 요청운영단위 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_reqOprUnitMultiPopup_onclick = function(obj,e)
        {
            var params  = { textId : this.div_search.form.edt_reqOprUnit
        	              , coCd   : this.lv_coCd };
            var options = { title  : this.div_search.form.stc_reqOprUnit.text };

            this.gfn_openPopup( "SSP_BO_PP_23"
        	                  , "CO_POP::SSP_BO_PP_23.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };

        /**
         * 조회조건 요청운영단위 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_reqOprUnitMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_reqOprUnit };
            var options = { title  : this.div_search.form.stc_reqOprUnit.text };

            this.gfn_openPopup( "SSP_BO_PP_13_05"
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };

        /***********************************************************************************************
        *  담당자 시작
        /***********************************************************************************************/
        /**
         * 조회조건 담당자 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_chrpsnPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_chrpsnId.value);
        	this.fn_setCallPopup02(sCodeId);
        };

        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edt_chrpsnId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_chrpsnNm.set_value("");
        	}
        };

        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edt_chrpsnId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_chrpsnId.value);

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
        		this.ds_input.setColumn(nRow,"EMP_NO",     sCodeId);
        		this.ds_input.setColumn(nRow,"CO_CD",	   this.lv_coCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);

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
        		this.ds_search.setColumn(this.ds_search.rowposition,"CHRPSN_ID", this.ds_popupList.getColumn(0,"OPRTR_ID"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"CHRPSN_NM", this.ds_popupList.getColumn(0,"OPRTR_NM"));


        	} else
        	{
        		var objParam = { empNo : sCodeId
        	                   , coCd  : this.lv_coCd };
        		var options  = { title : this.div_search.form.stc_chrpsn.text };
        		this.gfn_openPopup( "SSP_BO_PP_27"
        						  , "CO_POP::SSP_BO_PP_27.xfdl"
        						  , objParam
        						  , "fn_popupCallback"
        						  , options);

        	}
        };
        /***********************************************************************************************
        *  담당자 종료
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
        	var strBzplcId           = this.ds_master.getColumn(e.row,"BZPLC_ID");
         	var strPrdId             = this.ds_master.getColumn(e.row,"PRD_ID");
        	var strNewPrdReqNo       = this.ds_master.getColumn(e.row,"NEW_PRD_REQ_NO");
        	var strSalsChrpsnYn      = "N";

        	// 슈퍼권한 혹은 영업담당자가 아닐 경우 등록 불가 조회만 가능
        	if(this.lv_btnChkYn != "P")
        	{
        		strSalsChrpsnYn = "N";
        	} else
        	{
        		strSalsChrpsnYn = "Y";
        	}

        	// 상품ID 더블 클릭시 이벤트 발생 처리
         	if(e.cell == obj.getBindCellIndex("body", "PRD_ID_NUM") || e.cell == obj.getBindCellIndex("body", "NEW_PRD_REQ_NO"))
         	{
         		var params = {
        			prdId : strPrdId					// 상품ID
        			, bzplcId : strBzplcId				// 사업장ID
        			, strNewPrdReqNo : strNewPrdReqNo	// 신규상품 요청번호
        			, flag : "R"
        			, salsChrpsnYn : strSalsChrpsnYn	// 영업담당자 여부
        			, reqGubun : "10"					// 요청구분 [등록/상세:10]
        			, autoSearch : "Y"					// 팝업 오픈시 자동조회 여부
        		};

         		this.fn_setCallPopup(params);
         	}
        };

        /**
         * 신규등록/상세 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	= "Y";						         // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	= params.autoSearch;		         // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 = params.prdId;		                 // 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02 = params.bzplcId;		             // 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03 = params.flag;		        		 // 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04 = params.salsChrpsnYn;		   		 // 부모에서 넘어가는 파라미터(폼경로)
        	var lv_sValue05 = "Y";		   		 			// 부모에서 넘어가는 파라미터(폼경로)
        	var lv_sValue06 = params.strNewPrdReqNo;		// 부모에서 넘어가는 파라미터(신규상품 요청번호)

        	var sPopId 		= "";
        	var sUrl 		= "";

        	// 요청구분 [등록:10,상세:20]
        	switch(params.reqGubun)
        	{
        		case "10" :
        		     sPopId = "SSP_BO_LA_07";
        		     sUrl 	= "RD::SSP_BO_LA_07.xfdl";
        		     break;
        		default : break;
        	}

        	var oArg = {
        		pv_sOp01:lv_sFlag01			// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        		, pv_sOp02:lv_sFlag02       // 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        		, pv_sVal01:lv_sValue01
        		, pv_sVal02:lv_sValue02
        		, pv_sVal03:lv_sValue03
        		, pv_sVal04:lv_sValue04
        		, pv_sVal05:lv_sValue05
        		, pv_sVal06:lv_sValue06
        	};

        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };
        this.div_search_edt_prdId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_prdNm.set_value("");
        	}
        };

        this.btn_allReg_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_BO_LA_25"}; //프로그램 ID ex) CO_SA_01
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };



        /***********************************************************************************************
        *  대용량다운로드
        /***********************************************************************************************/
        this.fn_largeFileDown = function(page)
        {
            if(!this.fn_PreRet(page))
            {
                return false;
            }
            var strSvc      = "largeFileDown";
            var strUrl      = "/rd/rd-xlsx-down/excel-ex-prd-prc-stb.do";
            var strInDs     = "ds_search=ds_searchTemp";
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

        this.Button00_onclick = function(obj,e)
        {


        	this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_callBackForPwdSet");

        };

        this.fn_callBackForPwdSet = function(objId, ret){

        	var answr = ret.split("||||");

        	if(!this.gfn_isNull(answr)){
        		// 멀티입력 검색조건 Set
        		this.fn_setMultiSearch(this.formId,"PRD_ID",this.ds_search.getColumn(0,"PRD_ID"));              // 상품ID
        		this.fn_setMultiSearch(this.formId,"PRD_CLCD",this.ds_search.getColumn(0,"PRD_CLCD"));          // 카테고리
        		this.fn_setMultiSearch(this.formId,"REQ_NO",this.ds_search.getColumn(0,"REQ_NO"));              // 요청번호
        		this.fn_setMultiSearch(this.formId,"REQ_BZPLC",this.ds_search.getColumn(0,"REQ_BZPLC"));        // 요청사업장
        		this.fn_setMultiSearch(this.formId,"REQ_OPR_UNIT",this.ds_search.getColumn(0,"REQ_OPR_UNIT"));  // 요청운영단위

        		this.ds_search.setColumn(0, "EXCEL_PASSWD", answr[0]);
        		this.ds_search.setColumn(0, "DOWN_RSN", answr[1]);
        		this.ds_search.setColumn(0, "DB_WRK", "BIGDOWNLOAD");
        		this.ds_search.setColumn(0, "PGM_ID", "SSP_BO_LA_25_01");
        		// 멀티입력조건 임시 테이블 저장 서비스 호출
        		if(this.ds_select.getRowCount() > 0)
        		{
        			this.fn_insertMultiData("fn_callBackForLargeFileDown");
        		} else
        		{
        			this.fn_largeFileDown(true);
        		}
        	}
        };

        this.fn_callBackForLargeFileDown = function(){
        	this.fn_largeFileDown(true);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_allReg.addEventHandler("onclick",this.btn_allReg_onclick,this);
            this.btn_bssSalsprcProc.addEventHandler("onclick",this.btn_bssSalsprcProc_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_download.addEventHandler("onclick",this.Button00_onclick,this);
            this.div_search.form.edt_prdClcd.addEventHandler("onkeyup",this.div_search_edt_prdClcd_onkeyup,this);
            this.div_search.form.edt_prdClcd.addEventHandler("oninput",this.div_search_edt_prdClcd_oninput,this);
            this.div_search.form.btn_prdClcdPopup.addEventHandler("onclick",this.div_search_btn_prdClcdPopup_onclick,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("onkeyup",this.div_search_edt_chrpsnId_onkeyup,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("oninput",this.div_search_edt_chrpsnId_oninput,this);
            this.div_search.form.btn_chrpsnPopup.addEventHandler("onclick",this.div_search_btn_chrpsnPopup_onclick,this);
            this.div_search.form.edt_prdId.addEventHandler("oninput",this.div_search_edt_prdId_oninput,this);
            this.div_search.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_search_btn_prdIdMultiInput_onclick,this);
            this.div_search.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.div_search_btn_prdIdMultiPopup_onclick,this);
            this.div_search.form.btn_reqBzplcMultiInput.addEventHandler("onclick",this.div_search_btn_reqBzplcMultiInput_onclick,this);
            this.div_search.form.btn_reqBzplcMultiPopup.addEventHandler("onclick",this.div_search_btn_reqBzplcMultiPopup_onclick,this);
            this.div_search.form.btn_reqOprUnitMultiInput.addEventHandler("onclick",this.div_search_btn_reqOprUnitMultiInput_onclick,this);
            this.div_search.form.btn_reqOprUnitMultiPopup.addEventHandler("onclick",this.div_search_btn_reqOprUnitMultiPopup_onclick,this);
            this.div_search.form.btn_reqNoMultiInput.addEventHandler("onclick",this.div_search_btn_reqNoMultiInput_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_LA_25.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
