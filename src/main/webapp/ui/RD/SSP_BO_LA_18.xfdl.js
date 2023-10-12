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
            this.set_titletext("공용상품 영업지정판매가");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,990);
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_ATTR_CLCD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"PRD_CLCD\"/><Col id=\"ROW_COUNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateUnitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_APLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_NM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BZPLC_ID\"/><Col id=\"PRD_ID\"/><Col id=\"SALS_TEAM_CD\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"REQ_SBJ_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_UNIT\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"BZPLC_ID_CNT\"/><Col id=\"PRD_ID_CNT\"/><Col id=\"SALS_TEAM_CD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispStats", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdStats", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PERD_DC_SALSPRC_VLD_PERD\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REG_UPD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PERD_DC_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRC_APLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RND_DC_VLD_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_VLD_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_EXPS_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"STPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"LIST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REG_UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"REG_UPD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_BUY_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DCRT_APLY_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_BUY_CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"RND_DC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_BSS_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DLV_LT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REPR_PRD_GRP_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_QTY_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DLCST_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_BASIS\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_searchTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHRPSN_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_APLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PASSWD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BZPLC_ID\"/><Col id=\"PRD_ID\"/><Col id=\"SALS_TEAM_CD\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"REQ_SBJ_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_UNIT\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"BZPLC_ID_CNT\"/><Col id=\"PRD_ID_CNT\"/><Col id=\"SALS_TEAM_CD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salsChrpsnYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00_01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","216",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCont",null,"246","100","24","21",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"246","110","24","cbo_rowCont:4",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"246","100","24","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"246","100","24","btn_layoutInit:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_allReg",null,"246","100","24","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg",null,"246","100","24","btn_allReg:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("개별등록");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","256","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20","272",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","283",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_master");
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
            obj.set_cellmovingtype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"154\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"20\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품ID\"/><Cell col=\"1\" text=\"사업장ID\"/><Cell col=\"2\" text=\"사업장\"/><Cell col=\"3\" text=\"카테고리\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"SSP상품명\"/><Cell col=\"6\" text=\"상품상태\"/><Cell col=\"7\" text=\"진열상태\"/><Cell col=\"8\" text=\"대표규격\"/><Cell col=\"9\" text=\"제조원ID\"/><Cell col=\"10\" text=\"제조원\"/><Cell col=\"11\" text=\"주문단위\"/><Cell col=\"12\" text=\"최저매입가\"/><Cell col=\"13\" text=\"협력사ID\"/><Cell col=\"14\" text=\"최저매입가&#13;&#10;협력사\"/><Cell col=\"15\" text=\"RD기준가\"/><Cell col=\"16\" text=\"List Price\"/><Cell col=\"17\" text=\"기준판매가\"/><Cell col=\"18\" text=\"영업지정판매가\"/><Cell col=\"19\" colspan=\"2\" text=\"기간할인금액\"/><Cell col=\"21\" text=\"기간할인판매가&#13;&#10;유효기간\"/><Cell col=\"22\" text=\"산출근거\"/><Cell col=\"23\" text=\"고객노출판매가\"/><Cell col=\"24\" text=\"기준판매가&#13;&#10;적용여부\"/><Cell col=\"25\" text=\"물량할인\"/><Cell col=\"26\" text=\"배송비\"/><Cell col=\"27\" text=\"최소주문수량\"/><Cell col=\"28\" text=\"재고&#13;&#10;여부\"/><Cell col=\"29\" text=\"평균&#13;&#10;배송일\"/><Cell col=\"30\" text=\"영업팀\"/><Cell col=\"31\" text=\"영업담당자ID\"/><Cell col=\"32\" text=\"영업담당자\"/><Cell col=\"33\" text=\"영업지정판매가&#13;&#10;갱신자ID\"/><Cell col=\"34\" text=\"영업지정판매가&#13;&#10;갱신자\"/><Cell col=\"35\" text=\"영업지정판매가&#13;&#10;갱신일\"/><Cell col=\"36\" text=\"구매담당자ID\"/><Cell col=\"37\" text=\"구매담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ID_VIEW\" textDecoration=\"underline\" color=\"#235da8\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\" displaytype=\"text\" combodataset=\"dsProcSt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\" displaytype=\"text\" combodataset=\"dsReqDiv\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRD_CLCD\" expr=\"PRD_CLCD == null ? &apos;&apos; : &apos;(&apos; + PRD_CLCD + &apos;) &apos; + PRD_CLCD_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:SSP_PRD_NM\"/><Cell col=\"6\" text=\"bind:PRD_STATS_CD\"/><Cell col=\"7\" text=\"bind:DISP_STATS_NM\"/><Cell col=\"8\" text=\"bind:ATTR_VAL\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:MNFR_NO\"/><Cell col=\"10\" text=\"bind:MNFR_NM\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:SELL_UNIT_CD\"/><Cell col=\"12\" text=\"bind:LWST_BUY_PRC\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:LWST_BUY_CPRTCP_ID\"/><Cell col=\"14\" text=\"bind:CPRTCP_KOR_NM\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:STPRC\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:LIST_PRICE\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:SSP_BSS_SALSPRC\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:SALS_DSGN_SALSPRC\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:RND_DC_QTY\" textAlign=\"right\" displaytype=\"number\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"20\" text=\"bind:RND_DC_SPR_CD\" expr=\"RND_DC_SPR_CD == null ? &apos;&apos; : RND_DC_SPR_CD == &apos;10&apos; ? &apos;원&apos; : &apos;%&apos;\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\"/><Cell col=\"21\" text=\"bind:RND_DC_VLD_STR_DTM\" expr=\"RND_DC_VLD_STR_DTM == null || RND_DC_VLD_END_DTM == null ? &apos;&apos; : RND_DC_VLD_STR_DTM + &apos;~&apos; + RND_DC_VLD_END_DTM\"/><Cell col=\"22\" text=\"bind:CAL_BASIS\"/><Cell col=\"23\" text=\"bind:PRICE\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:BSS_SALSPRC_USEYN\" expr=\"BSS_SALSPRC_USEYN==&apos;Y&apos;?&apos;사용&apos;:&apos;미사용&apos;\"/><Cell col=\"25\" text=\"bind:PRD_QTY_INFO\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:PRD_DLCST_INFO\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:MIN_ODR_QTY\"/><Cell col=\"28\" text=\"bind:SPL_PSB_YN\"/><Cell col=\"29\" text=\"bind:DLV_LT\"/><Cell col=\"30\" text=\"bind:ORG_NM\"/><Cell col=\"31\" text=\"bind:SALS_CHRPSN_ID\"/><Cell col=\"32\" text=\"bind:SALS_CHRPSN_NM\"/><Cell col=\"33\" text=\"bind:REG_UPD_ID\"/><Cell col=\"34\" text=\"bind:REG_UPD_NM\"/><Cell col=\"35\" text=\"bind:REG_UPD_DTM\"/><Cell col=\"36\" text=\"bind:PURG_CHRPSN_ID\"/><Cell col=\"37\" text=\"bind:PURG_CHRPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","20","grd_list:0",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","Static01_00_01_00_00:0",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","20","div_paging:0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","85.45%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1320","0","20","84.95%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","20",null,"197","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("lblRow01","0","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_bzplc","0","0","140","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","233","4","124","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplcPopup","edt_bzplcNm:4","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdId","415","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","555","4","230","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lblCorp","845","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","edt_prdId:6","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lblRow01_00","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_salsChrpsn","0","31","140","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("영업담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_salsTeam","415","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("영업팀");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_bssSalsprcAplyYn","845","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("기준판매가적용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_bssSalsprcAplyYn","985","35","235","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_bssSalsprcAplyYn_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_bssSalsprcAplyYn_innerdataset", obj);
            div_search_form_cmb_bssSalsprcAplyYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_bssSalsprcAplyYn_innerdataset);
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lblRow01_00_00","0","62",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","0","62","140","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lblRow01_00_00_00","0","93",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdNm","0","93","140","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_dispStats","845","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("진열상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","415","93","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","845","93","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dispStats","985","65","235","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_dispStats");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdStats","415","62","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_text("상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lblRow01_00_00_00_00","0","124",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_salsDsgnPrcSellRenDt","0","124","140","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("영업지정판매가갱신일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_salsChrpsnNm","233","35","124","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_salsChrpsnMultiPopup","edt_salsChrpsnNm:4","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_salsTeamMultiPopup","791","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","233","66","149","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPopup","edt_prdClNm:6","66","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","150","66","79","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_prdStats","555","66","230","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_prdStats_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_prdStats_innerdataset", obj);
            div_search_form_cmb_prdStats_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">미사용</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">종결</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_prdStats_innerdataset);
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPopup","1224","97","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","1068","97","151","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCd","985","97","79","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","555","97","230","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplcMultiInput","btn_bzplcPopup:4","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","btn_prdIdMultiPopup:4","4","20","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_salsChrpsnMultiInput","btn_salsChrpsnMultiPopup:4","35","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_salsTeamMultiInput","btn_salsTeamMultiPopup:4","35","20","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","150","97","232","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_salsTeamCd","555","35","79","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("40");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_salsTeamNm","638","35","147","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","157",null,"10","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("42");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_download",null,"167","118","28","128",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("43");
            obj.set_text("대용량다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"167","60","28","64",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("44");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"167","60","28","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("45");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","150","128","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59","298","128","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("47");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","312","128","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("48");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","457","128","156","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("49");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","150","4","79","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("50");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_salsChrpsnId","150","35","79","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("51");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_fullPrdNmYn","410","118","13","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1340,990,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbo_rowCont","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_bzplcNm","value","ds_search","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_salsChrpsnNm","value","ds_search","CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_salsTeamCd","value","ds_search","SALS_TEAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_salsTeamNm","value","ds_search","SALS_TEAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cmb_bssSalsprcAplyYn","value","ds_search","BSS_SALSPRC_APLY_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.edt_prdClNm","value","ds_search","PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.cmb_prdStats","value","ds_search","MRO_PRD_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cmb_dispStats","value","ds_search","DISP_STATS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.edt_reprSpec","value","ds_search","PRVL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.edt_mnfrCd","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.edt_mnfrNm","value","ds_search","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.edt_bzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_search.form.edt_salsChrpsnId","value","ds_search","CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","chk_fullPrdNmYn","value","ds_search","FULL_PRD_NM_YN");
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
        this.addIncludeScript("SSP_BO_LA_18.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_LA_18.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_LA_18.xfdl(공용상품영업지정판매가관리)
        * 작 성         일 명: 나용철
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
            var strDs    = "ds_dateUnitCombo|ds_dispStats|ds_prdStats|ds_pageRowCd|ds_rndPrdAuthCombo";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "INQ_PERD_SPR_CD|DISP_STATS_CD|MRO_PRD_STATS_CD|PAGE_ROW_CD|CHRPSN_TEAM_SPR_CD1";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
            this.lvGetDate = this.fn_getSvrDate();             // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.
            this.fn_setResetBtnCall();
        	// RND화면권한제어 호출
        	this.fn_setRndUiAuthCtl();

        };

        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
        	this.lv_pageViewCnt = this.fn_setInitPageCnt(this.ds_pageRowCd,this.lv_pageViewCnt);
            this.ds_search.clearData();
            var nRow = this.ds_search.addRow();
        	var orgCd = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        	var orgNm = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_NM"),"");
        	var oprtrId = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"OPRTR_ID"),"");
        	var oprtrNm = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"OPRTR_NM"),"");
        	this.ds_search.setColumn(nRow,"BZPLC_ID",                   null); // 사업장ID
        	this.ds_search.setColumn(nRow,"PRD_ID",                     null); // 상품ID
        	this.ds_search.setColumn(nRow,"CHRPSN_ID",                  oprtrId); // 담당자ID
        	this.ds_search.setColumn(nRow,"CHRPSN_NM",                  oprtrNm); // 담당자
        	this.ds_search.setColumn(nRow,"SALS_TEAM_CD",               orgCd); // 영업팀CD
        	this.ds_search.setColumn(nRow,"SALS_TEAM_NM",               orgNm); // 영업팀
        	this.ds_search.setColumn(nRow,"BSS_SALSPRC_APLY_YN",        null); // 기준판매가적용여부
        	this.ds_search.setColumn(nRow,"PRD_CLCD",                   null); // 카테고리CD
        	this.ds_search.setColumn(nRow,"PRD_CLSF_NM",                null); // 카테고리명
        	this.ds_search.setColumn(nRow,"MRO_PRD_STATS_CD",           null); // 상품상태
        	this.ds_search.setColumn(nRow,"DISP_STATS_CD",              null); // 진열상태
        	this.ds_search.setColumn(nRow,"PRD_NM",                     null); // 상품명
        	this.ds_search.setColumn(nRow,"PRVL_LIST",                  null); // 대표규격
        	this.ds_search.setColumn(nRow,"MNFR_NO",                    null); // 제조원NO
        	this.ds_search.setColumn(nRow,"MNFR_NM",                    null); // 제조원
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
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "insertMultiData" :
                            this.fn_Ret(true);
                        break;
                    case "deleteMultiData" :
                            this.ds_select.deleteAll();
                        break;
        			case "SalsChrpsnYn" :
        					this.fn_PostSalsChrpsnYn();
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
        		case "SSP_BO_LA_20" :
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
        		// 사업장 멀티조회팝업 후처리
                case "btn_bzplcPopup" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				var bzplcCd = new Array();
        				var bzplcNm = new Array();
        				for(var i=0; i<jsonData.length;i++) {
        					var jsonSubData = JSON.parse(jsonData[i]);
        					bzplcCd.push(jsonSubData.BZPLC_ID.replace(/,\s*$/, ""));
        					bzplcNm.push(jsonSubData.BZPLC_NM.replace(/,\s*$/, ""));
        				}
        				this.div_search.form.edt_bzplcId.set_value(bzplcCd);
        				this.div_search.form.edt_bzplcNm.set_value(bzplcNm);
        			}else{
        			// 닫기 버튼 처리
        			}
                    break;
        		// 사업장 멀티입력팝업 후처리
        		case "btn_bzplcMultiInput" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_bzplc.set_value(jsonData.textValue);
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
        		// 상품ID 멀티조회팝업 후처리
        		case "btn_prdIdMultiPopup" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				var prdId = new Array();
        				for(var i=0; i<jsonData.length;i++) {
        					var jsonSubData = JSON.parse(jsonData[i]);
        					prdId.push(jsonSubData.PRD_ID_VIEW.replace(/,\s*$/, ""));
        				}
        				this.div_search.form.edt_prdId.set_value(prdId);
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
        		// 영업담당자 멀티조회팝업 후처리
        		case "SSP_BO_PP_27" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_salsChrpsnId.set_value(jsonData.OPRTR_ID.replace(/,\s*$/, ""));
        				this.div_search.form.edt_salsChrpsnNm.set_value(jsonData.OPRTR_NM.replace(/,\s*$/, ""));
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
        		case "btn_salsChrpsnMultiInput":
        			if(!this.gfn_isNull(strVal))
        			{
        				//trace(strVal);
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_salsChrpsnId.set_value(jsonData.textValue);
        				this.div_search.form.edt_salsChrpsnNm.set_value("");
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        		    break;
        		// 영업팀 멀티조회팝업 후처리
        		case "SSP_BO_PP_26" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_salsTeamCd.set_value(jsonData.TEAM_CD.replace(/,\s*$/, ""));
        				this.div_search.form.edt_salsTeamNm.set_value(jsonData.TEAM_NM.replace(/,\s*$/, ""));
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        			break;
        		// 영업팀 멀티입력팝업 후처리
        		case "btn_salsTeamMultiInput" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_salsTeamCd.set_value(jsonData.textValue);
        				this.div_search.form.edt_salsTeamNm.set_value("");
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
        				this.div_search.form.edt_prdClNm.set_value("");
        			}else
        			{
        			// 닫기 버튼 처리
        			}
         			break;
        		// 상품명 멀티입력팝업 후처리
         		case "btn_prdNmMultiInput" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.div_search.form.edt_prdNm.set_value(jsonData.textValue);
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
        				this.div_search.form.edt_mnfrCd.set_value(jsonData.MNFR_NO.replace(/,\s*$/, ""));
        				this.div_search.form.edt_mnfrNm.set_value(jsonData.MNFR_NM.replace(/,\s*$/, ""));
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
        	this.fn_setMultiSearch(this.formId,"BZPLC_ID",this.ds_search.getColumn(0,"BZPLC_ID"));          // 사업장ID
        	this.fn_setMultiSearch(this.formId,"PRD_ID",this.ds_search.getColumn(0,"PRD_ID"));              // 상품ID
        	this.fn_setMultiSearch(this.formId,"CHRPSN_ID",this.ds_search.getColumn(0,"CHRPSN_ID"));        // 담당자ID
        	this.fn_setMultiSearch(this.formId,"SALS_TEAM_CD",this.ds_search.getColumn(0,"SALS_TEAM_CD"));  // 영업팀CD

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
        								 ,this.div_search.form.stc_salsDsgnPrcSellRenDt.text))
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
            var strUrl      = "/rd/pub-prd-sals-dsgn-salsprc-mng/select-pub-prd-sals-dsgn-salsprc-mng.do";
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
        this.btn_reg_onclick = function(obj,e)
        {
        	var params = { reqGubun    : "20"     // 요청구분 [등록/상세:20]통합
        				 , autoSearch  : "N"      // 팝업 오픈시 자동조회 여부
        				 , flag        : "I"
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
        		this.btn_allReg.set_visible(false);
          		this.btn_reg.set_visible(false);
        	} else
        	{
        		var orgCd = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        		var orgNm = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_NM"),"");
        		var oprtrId = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"OPRTR_ID"),"");
        		var oprtrNm = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"OPRTR_NM"),"");

        		this.div_search.form.edt_salsTeamCd.set_value(orgCd);
        		this.div_search.form.edt_salsTeamNm.set_value(orgNm);
        		this.div_search.form.edt_salsChrpsnId.set_value(oprtrId);
        		this.div_search.form.edt_salsChrpsnNm.set_value(oprtrNm);
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
               return false
        	}
            this.gfn_excelExport(this.grd_list, "공용상품 영업지정판매가","공용상품 영업지정판매가");
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
            this.totalPageCount.set_text(sTotText);
        };

        /**
         * 조회조건 사업장 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_bzplcPopup_onclick = function(obj,e)
        {
        	var params  = { coCd   : this.lv_coCd };
        	var options = { title  : this.div_search.form.stc_bzplc.text };

        	// 사업장
        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 사업장 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_bzplcMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_bzplcId };
        	var options = { title  : this.div_search.form.stc_bzplc.text };
        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };

        /**
         * 조회조건 상품ID 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdIdMultiPopup_onclick = function(obj,e)
        {
        	var params  = { pubOnlySprCd : "P", coCd : this.lv_coCd, mallSprCd : this.mallSprCd, prdId : this.div_search.form.edt_prdId.value };
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

        /***********************************************************************************************
        *  영업담당자 시작
        /***********************************************************************************************/
        /**
         * 조회조건 영업담당자 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_salsChrpsnMultiPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_salsChrpsnId.value);
        	this.fn_setCallPopup03(sCodeId);

        };

        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edt_salsChrpsnId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_salsChrpsnNm.set_value("");
        	}
        };

        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edt_salsChrpsnId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_salsChrpsnId.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup03(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup03 = function(sCodeId)
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
        		var params  = {empNo  : sCodeId
        	                  , coCd  : this.lv_coCd};
        		var options = { title : this.div_search.form.stc_salsChrpsn.text };

        		this.gfn_openPopup( "SSP_BO_PP_27"
        		                  , "CO_POP::SSP_BO_PP_27.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);

        	}
        };
        /**
         * 조회조건 영업담당자 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_salsChrpsnMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_salsChrpsnId };
            var options = { title  : this.div_search.form.stc_salsChrpsn.text };

            this.gfn_openPopup(e.fromobject.id
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };
        /***********************************************************************************************
        *  영업담당자 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  영업팀 시작
        /***********************************************************************************************/

        /**
         * 조회조건 영업팀 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
         * searchType 영업팀[1], 서비스팀[2], MD팀[3], 구매팀[4], 운영팀[5], 영업담당[6] 조회
         */
        this.div_search_btn_salsTeamMultiPopup_onclick = function(obj,e)
        {

        	var sCodeId = this.gfn_trim(this.div_search.form.edt_salsTeamCd.value);
        	this.fn_setCallPopup04(sCodeId);
        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edt_salsTeamCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_salsTeamNm.set_value("");
        	}
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edt_salsTeamCd_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_salsTeamCd.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
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
        		this.ds_input.setColumn(nRow,"TEAM_CD",    			sCodeId);
        		this.ds_input.setColumn(nRow,"CO_CD",	  			this.lv_coCd);
        		this.ds_input.setColumn(nRow,"TYPE",       		   "1");
        		this.ds_input.setColumn(nRow,"TEAM_ATTR_CLCD_NM",  "1");
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);

        		var strSvc 		= "Search";
        		var strUrl 		= "/bo/cust/cmn/popup/select-mbr-oprtr-org-info-list.do";
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"SALS_TEAM_CD", this.ds_popupList.getColumn(0,"TEAM_CD"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"SALS_TEAM_NM", this.ds_popupList.getColumn(0,"TEAM_NM"));
        	} else
        	{

        		var params  = { coCd  		: this.lv_coCd
        		              , searchType 	: "1"
        					  , teamCd 		: this.div_search.form.edt_salsTeamCd.value };
        		var options = { title 		: this.div_search.form.stc_salsTeam.text };

        		this.gfn_openPopup( "SSP_BO_PP_26"
        		                  , "CC::SSP_BO_PP_26.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);

        	}
        };

        /**
         * 조회조건 영업팀 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_salsTeamMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_salsTeamCd };
            var options = { title  : this.div_search.form.stc_salsTeam.text };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };
        /***********************************************************************************************
        *  영업팀 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  카테고리 시작
        /***********************************************************************************************/
        /**
         * 조회조건 카테고리 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdClcdPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_prdClcd.value);
        	this.fn_setCallPopup1(sCodeId);
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
        /***********************************************************************************************
        *  카테고리 종료
        /***********************************************************************************************/

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
         * 조회조건 상품명 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdNmMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdNm };
            var options = { title  : this.div_search.form.stc_prdNm.text };

            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };
        /***********************************************************************************************
        *  제조원 조회팝업 시작
        /***********************************************************************************************/
        /**
         * 조회조건 제조원 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_mnfrPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_mnfrCd.value);
        	this.fn_setCallPopup2(sCodeId);
        };

        /**
         * 제조원 edit 값 변경시 oninput 이벤트 발생 처리
         */
        this.edt_mnfrNo_oninput = function(obj,e)
        {
        	if(this.gfn_nvl(obj.value,"") == "")
        	{
        		this.div_search.form.edt_mnfrNm.set_value("");
        	}
        };

        /**
         * 조회조건 제조원 Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.edt_mnfrNo_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_mnfrCd.value);

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
        		this.div_search.form.edt_mnfrCd.set_value(this.ds_popupList.getColumn(0,"MNFR_NO"));
        		this.div_search.form.edt_mnfrNm.set_value(this.ds_popupList.getColumn(0,"MNFR_NM"));
        	}
        	else
        	{
        		var params  = { mnfrNo : sCodeId, coCd : this.lv_coCd };
        		var options = { title  : "제조원" };

        		this.gfn_openPopup("btn_mnfrPopup", "PR_POP::SSP_BO_PP_08.xfdl", params, "fn_popupCallback", options);
        	}
        };
        /***********************************************************************************************
        *  제조원 조회팝업 종료
        /***********************************************************************************************/

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
         * 조회조건 조회기간구분코드 콤보값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.div_search_cmb_dtUnit_onitemchanged = function(obj,e)
        {
        	this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr,this.div_search.form.cal_reqDtFnlProcDtEnd,obj);
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

        	var sPopId 		= "";
        	var sUrl 		= "";

        	// 요청구분 [등록:10,상세:20]
        	switch(params.reqGubun)
        	{
        		case "10" :
        		     sPopId = "SSP_BO_LA_19";
        		     sUrl 	= "RD::SSP_BO_LA_19.xfdl";
        		     break;
        		case "20" :
        		     sPopId = "SSP_BO_LA_20";
        		     sUrl 	= "RD::SSP_BO_LA_20.xfdl";
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
         * 메인 그리드 셀 더블 클릭시 oncelldblclick 이벤트 발생 처리
         */
        this.grd_list_oncelldblclick = function(obj,e)
        {
         	//var strCoCd               = this.ds_master.getColumn(e.row,"CO_CD");
        	var strBzplcId           = this.ds_master.getColumn(e.row,"BZPLC_ID");
         	var strPrdId              = this.ds_master.getColumn(e.row,"PRD_ID");
        	var strSalsChrpsnYn       = "N";
        	// 슈퍼권한 혹은 영업담당자가 아닐 경우 등록 불가 조회만 가능
        	if(this.lv_btnChkYn != "P")
        	{
        		strSalsChrpsnYn       = "N";
        	} else
        	{
        		strSalsChrpsnYn       = "Y";
        	}
        	//var strSalsChrpsnYn       = this.ds_salsChrpsnYn.getColumn(0,"SALS_CHRPSN_YN");


         	// 담당자ID, 담당자 더블 클릭시 이벤트 발생 처리
         	if(e.cell == obj.getBindCellIndex("body","PRD_ID_VIEW") )
         	{
         		var params = { prdId           : strPrdId             // 상품ID
        					 , bzplcId         : strBzplcId            // 사업장ID
        					 , flag            : "U"
        					 , salsChrpsnYn    : strSalsChrpsnYn         // 영업담당자 여부
         		             , reqGubun        : "20"    	          // 요청구분 [등록:10,상세:20]
         					 , autoSearch      : "Y"                  // 팝업 오픈시 자동조회 여부
         					 };

         		this.fn_setCallPopup(params);
         	}
        };



        this.div_search_edt_bzplcId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_bzplcNm.set_value("");
        	}
        };

        this.btn_allReg_onclick = function(obj,e)
        {
         	var param = {pgmId : "SSP_BO_LA_18"}; //프로그램 ID ex) CO_SA_01
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
            var strUrl      = "/rd/rd-xlsx-down/excel-sals-prd-prc.do";
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
        	var sReturn = this.confirm(this.fn_getMessage("ERRR000234"));
        	if(sReturn == true){
        		// 멀티입력 검색조건 Set
        		this.fn_setMultiSearch(this.formId,"BZPLC_ID",this.ds_search.getColumn(0,"BZPLC_ID"));          // 사업장ID
        		this.fn_setMultiSearch(this.formId,"PRD_ID",this.ds_search.getColumn(0,"PRD_ID"));              // 상품ID
        		this.fn_setMultiSearch(this.formId,"CHRPSN_ID",this.ds_search.getColumn(0,"CHRPSN_ID"));        // 담당자ID
        		this.fn_setMultiSearch(this.formId,"SALS_TEAM_CD",this.ds_search.getColumn(0,"SALS_TEAM_CD"));  // 영업팀CD
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
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.div_search.form.lblRow01.addEventHandler("onclick",this.div_search_lblRow01_onclick,this);
            this.div_search.form.btn_bzplcPopup.addEventHandler("onclick",this.div_search_btn_bzplcPopup_onclick,this);
            this.div_search.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.div_search_btn_prdIdMultiPopup_onclick,this);
            this.div_search.form.btn_salsChrpsnMultiPopup.addEventHandler("onclick",this.div_search_btn_salsChrpsnMultiPopup_onclick,this);
            this.div_search.form.btn_salsTeamMultiPopup.addEventHandler("onclick",this.div_search_btn_salsTeamMultiPopup_onclick,this);
            this.div_search.form.btn_prdClcdPopup.addEventHandler("onclick",this.div_search_btn_prdClcdPopup_onclick,this);
            this.div_search.form.edt_prdClcd.addEventHandler("oninput",this.div_search_edt_prdClcd_oninput,this);
            this.div_search.form.edt_prdClcd.addEventHandler("onkeyup",this.div_search_edt_prdClcd_onkeyup,this);
            this.div_search.form.btn_mnfrPopup.addEventHandler("onclick",this.div_search_btn_mnfrPopup_onclick,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("oninput",this.edt_mnfrNo_oninput,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("onkeyup",this.edt_mnfrNo_onkeyup,this);
            this.div_search.form.btn_bzplcMultiInput.addEventHandler("onclick",this.div_search_btn_bzplcMultiInput_onclick,this);
            this.div_search.form.btn_prdIdMultiInput.addEventHandler("onclick",this.div_search_btn_prdIdMultiInput_onclick,this);
            this.div_search.form.btn_salsChrpsnMultiInput.addEventHandler("onclick",this.div_search_btn_salsChrpsnMultiInput_onclick,this);
            this.div_search.form.btn_salsTeamMultiInput.addEventHandler("onclick",this.div_search_btn_salsTeamMultiInput_onclick,this);
            this.div_search.form.edt_salsTeamCd.addEventHandler("onkeyup",this.div_search_edt_salsTeamCd_onkeyup,this);
            this.div_search.form.edt_salsTeamCd.addEventHandler("oninput",this.div_search_edt_salsTeamCd_oninput,this);
            this.div_search.form.btn_download.addEventHandler("onclick",this.Button00_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.edt_bzplcId.addEventHandler("oninput",this.div_search_edt_bzplcId_oninput,this);
            this.div_search.form.edt_salsChrpsnId.addEventHandler("onkeyup",this.div_search_edt_salsChrpsnId_onkeyup,this);
            this.div_search.form.edt_salsChrpsnId.addEventHandler("oninput",this.div_search_edt_salsChrpsnId_oninput,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_LA_18.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
