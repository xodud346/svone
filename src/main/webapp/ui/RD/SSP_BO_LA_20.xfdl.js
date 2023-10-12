(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_LA_19");
            this.set_titletext("공용상품 영업지정판매가 등록/상세");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(930,710);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID_VIEW\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BSS_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_SALSPRC_ATFL_ID\" type=\"STRING\" size=\"32\"/><Column id=\"LWST_BUY_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"EXPT_PRFRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SALSPRC_DSGN_RSN\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OLD_SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"OLD_SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN_VIEW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"LWST_BUY_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EXPT_PRFRT\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALSPRC_DSGN_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRY_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID_VIEW\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SALS_DSGN_SALSPRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BSS_SALSPRC_USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC_END_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_DSGN_SALSPRC_STR_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_SALSPRC_ATFL_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SALSPRC_DSGN_RSN\" type=\"STRING\" size=\"32\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_viewFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN_VIEW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","22",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title","20","20","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("공용상품 영업지정판매가 상세");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","50",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chgHist",null,"61","160","24","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("영업지정판매가 변경이력");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","86",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","Static01_01_00:0",null,"379","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","161","0",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_prdId","0","0","162","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.getSetter("uEssentiel").set("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","0","62","162","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","161","62",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_lwstPcprc","0","124","162","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("최저매입가");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_salsDsgnSalsprc","0","155","162","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("영업지정판매가");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_vldPerd","0","186","162","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("영업지정판매가\r\n유효기간");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_salsprcDsgnRsn00","0","217","162",null,null,"1",null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_bzplc","0","93","162","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","161","93",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_02","161","124",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_03","161","155",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_04","161","186",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00_05_00","161","217",null,null,"0","1",null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_exptPrfrt","458","124","170","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("예상매익률");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_bssSalsprc","458","155","170","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("기준판매가");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_salsDsgnSalsprc","166","159","174","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_limitbymask("both");
            obj.set_format("!###,###,###,###,###,###.##");
            obj.set_clipmode("excludespace");
            obj.set_type("number");
            obj.set_displaynulltext("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","344","164","26","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("KRW");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chk_bssSalsprc","750","161","128","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("기준판매가 적용");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_vldPerdDtStr","166","190","180","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","cal_vldPerdDtStr:5","190","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_vldPerdDtEnd","Static59:5","190","180","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","458","0","170","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","458","62","170","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_odrUnit","458","93","170","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","166","224",null,null,"6","7",null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"적용기준\"/><Cell col=\"2\" text=\"판매가\"/><Cell col=\"3\" text=\"최저매입가\"/><Cell col=\"4\" text=\"예상매익률(%)\"/><Cell col=\"5\" text=\"유효기간(From)\"/><Cell col=\"6\" text=\"유효기간(To)\"/><Cell col=\"7\" text=\"판매가지정사유\"/><Cell col=\"8\" text=\"변경담당자ID\"/><Cell col=\"9\" text=\"변경담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\" color=\"#000000\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:BSS_SALSPRC_USEYN\" expr=\"BSS_SALSPRC_USEYN==&apos;Y&apos;?&apos;기준판매가&apos;:&apos;영업지정판매가&apos;\"/><Cell col=\"2\" text=\"bind:SALS_DSGN_SALSPRC\" expr=\"BSS_SALSPRC_USEYN==&apos;Y&apos;?SSP_BSS_SALSPRC:SALS_DSGN_SALSPRC\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:LWST_BUY_PRC\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:EXPT_PRFRT\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:SALS_DSGN_SALSPRC_STR_DTM\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:SALS_DSGN_SALSPRC_END_DTM\"/><Cell col=\"7\" text=\"bind:SALSPRC_DSGN_RSN\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:UPDPSN_ID\"/><Cell col=\"9\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","167","4","99","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_readonly("false");
            obj.set_maxlength("18");
            obj.set_text("r");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","271","4","154","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_prdIdPopup","430","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","633","4","79","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcdNm","717","4","164","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","633","66","79","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","717","66","164","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_odrUnit","633","97","79","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","167","66","287","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","167","97","99","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_maxlength("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","271","97","154","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzplcPopup","430","97","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","750","128","23","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("%");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_extend","142","198","20","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_default");
            obj.set_text("∨");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_lwstBuyPrc","166","128","174","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###,###.##");
            obj.set_clipmode("excludespace");
            obj.set_type("number");
            obj.set_displaynulltext("구매정보가 없습니다");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_bssSalsprc","633","159","114","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###,###.##");
            obj.set_clipmode("excludespace");
            obj.set_type("number");
            obj.set_displaynulltext("0");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_exptPrfrt","633","128","114","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_limitbymask("both");
            obj.set_format("#0.##");
            obj.set_clipmode("excludespace");
            obj.set_type("number");
            obj.set_displaynulltext("0");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_sspPrdNm","0","31","162","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("SSP상품명");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_01","161","31",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","167","35","714","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","20","Div00:0",null,"176","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_salsprcDsgnRsn","0","-1","162","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("판매가 지정사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_04","0","30","162","142",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("첨부서류");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03_00_05","161","-1",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03_00_06","161","30",null,"142","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salsprcDsgnRsn","167","3","586","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_maxlength("50");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_fileName","669","38","207","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_file","167","36","77","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("파일 첨부");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_list00","167","65",null,null,"13","36",null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_viewFileList");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"540\"/><Column size=\"100\"/><Column size=\"50\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"bind:ATFL_NM\" textDecoration=\"underline\" color=\"#235da8\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:ATFL_LEN_VIEW\" textAlign=\"right\"/><Cell col=\"2\" displaytype=\"imagecontrol\" background=\"url(&apos;theme://images/btn_WF_close_small.png&apos;) no-repeat center center #B61539\" text=\"bind:ETC_FDS_2\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("stc_file1","249","36","33","23",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("10M");
            obj.set_color("red");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("stc_file","282","36","378","23",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("미만의 파일 업로드 가능");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_fileId","190","140","207","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","Div01:-4",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","480","Static01_00_00_00:0","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","410","Static01_00_00_00:0",null,"32","454",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","0","btn_cancel:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","552","630","290","19",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","846","629","98","19",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",930,710,this,function(p){});
            obj.set_description("공용상품 영업지정판매가 등록/상세");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.edt_salsDsgnSalsprc","value","ds_master","SALS_DSGN_SALSPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cal_vldPerdDtStr","value","ds_master","SALS_DSGN_SALSPRC_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cal_vldPerdDtEnd","value","ds_master","SALS_DSGN_SALSPRC_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_prdId","value","ds_master","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.edt_prdNm","value","ds_master","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_prdClcd","value","ds_master","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_prdClcdNm","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_prdClcdNm","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.edt_mnfrNo","value","ds_master","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.edt_mnfrNm","value","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.edt_odrUnit","value","ds_master","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.edt_reprSpec","value","ds_master","ATTR_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div00.form.edt_bzplcId","value","ds_master","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div00.form.edt_bzplcNm","value","ds_master","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div01.form.edt_salsprcDsgnRsn","value","ds_master","SALSPRC_DSGN_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div01.form.edt_fileId","value","ds_master","SALS_SALSPRC_ATFL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div00.form.chk_bssSalsprc","truevalue","Y","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div00.form.chk_bssSalsprc","falsevalue","N","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.edt_lwstBuyPrc","value","ds_master","LWST_BUY_PRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.edt_bssSalsprc","value","ds_master","BSS_SALSPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div00.form.edt_exptPrfrt","value","ds_master","EXPT_PRFRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div00.form.edt_sspPrdNm","value","ds_master","SSP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
            this._addPreloadList("data","","ds_salsDsgnSalsprcHst");
            this._addPreloadList("data","","ds_detail");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_LA_20.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_LA_20.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_LA_20.xfdl(R&D 공용상품 영업지정판매가 상세)
        * 작 성			일 명: 손나라
        * 작 성	    	일 자: 2022/05/24
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
        this.mallSprCd 		= "20";
        this.totalCount 	= 0;
        this.strKeyValue 	= "";
        this.bExtend        = false;
        this.Div00.uMinSize = 218;
        this.Div00.uMaxSize = 379;
        this.flag           = "";
        this.maxFileSize    = 10; //MB단위
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lvGetDate              = "";
        this.lvGetDateTime  = "";
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
        	// 로컬 로그인 사용 않할시
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
        	this.lvGetDate = this.fn_getSvrDate();
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

        	this.fn_PostformInit();

        };

        this.fn_PostformInit = function()
        {
        	this.flag = this.sParamArg3;
        	var nRow1 = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow1,"CO_CD",this.lv_coCd);
        	if ( this.sParamArg4 == 'N' ) {
        		this.btn_save.set_visible(false);
        		this.Div01.form.btn_file.set_visible(false);
        		this.Div01.form.stc_file.set_visible(false);
        		this.Div01.form.stc_file1.set_visible(false);
        	}

        	if ( this.flag == "U" ) {
        		this.ds_search.setColumn(nRow1,"PRD_ID",this.sParamArg1);
        		this.ds_search.setColumn(nRow1,"BZPLC_ID",this.sParamArg2);
        		this.fn_Ret();
        	} else if ( this.flag == "I" ) {
        		var nRow = this.ds_master.addRow();
        		this.ds_master.setColumn(nRow,"CO_CD",this.lv_coCd);
        		this.ds_master.setColumn(nRow,"BSS_SALSPRC_USEYN","N");
        		this.oldBssSalsprcUseYn="N";
        	}

        	this.fn_setResetBtnCall(this.flag);
        };

        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function(flag)
        {
        	//이력영역 hide
        	this.Div00.set_height(this.Div00.uMinSize);
        	this.set_height(712-161);
        	this.resetScroll();
        	this.lvGetDateTime = new nexacro.Date()+"";
        	//상세
        	if ( flag == "U" )
        	{
        		this.stc_title.set_text("공용상품 영업지정판매가 상세");
         		this.Div00.form.edt_prdId.set_readonly(true);
         		this.Div00.form.btn_prdIdPopup.set_visible(false);
         		this.Div00.form.edt_bzplcId.set_readonly(true);
         		this.Div00.form.btn_bzplcPopup.set_visible(false);
        	}
        	//등록
        	else if ( flag == "I" )
        	{
        		this.stc_title.set_text("공용상품 영업지정판매가 등록");
        		this.btn_chgHist.set_visible(false);
        		// 일자 날짜 초기화 Setting
        		//this.Div00.form.cal_vldPerdDtStr.set_value(this.lvGetDateTime);
        		//trace("======time : " + this.lvGetDateTime);
        		this.ds_master.setColumn(0,"SALS_DSGN_SALSPRC_STR_DTM",this.lvGetDateTime);
        		this.ds_master.setColumn(0,"SALS_DSGN_SALSPRC_END_DTM","99991231235959");

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
        			this.edt_prdViewId.setFocus();
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
        			case "Save2":
        			    this.fn_PostSave2();
        				break;
        			case "PrdDetail" :
        				this.fn_postPrdDetail();
        			    break;
        			case "SaveYn" :
        			    this.fn_postSaveYn();
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
                // 사업장 조회팝업 후처리
        		case "btn_bzplcPopup" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.Div00.form.edt_bzplcId.set_value(jsonData.BZPLC_ID);
        				this.Div00.form.edt_bzplcNm.set_value(jsonData.BZPLC_NM);
        				this.ds_search.setColumn(0,"BZPLC_ID",jsonData.BZPLC_ID);
        				this.fn_SaveYn();
        			}else
        			{
        			// 닫기 버튼 처리
        			}
        		  	break;
        		// 상품 조회팝업 후처리
        		case "btn_prdIdPopup" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.Div00.form.edt_prdId.set_value(jsonData.PRD_ID_VIEW);
        				this.ds_search.setColumn(0,"PRD_ID",jsonData.PRD_ID);
        				this.ds_master.setColumn(0,"PRD_ID",jsonData.PRD_ID);
        				this.Div00.form.edt_prdNm.set_value(jsonData.PRD_NM);
        				this.Div00.form.edt_reprSpec.set_value(jsonData.ATTR_VAL);
        				this.Div00.form.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        				this.Div00.form.edt_prdClcdNm.set_value(jsonData.FULL_PRD_CLSF_NM);
        				this.Div00.form.edt_mnfrNo.set_value(jsonData.MNFR_NO);
        				this.Div00.form.edt_mnfrNm.set_value(jsonData.MNFR_NM);
        				this.Div00.form.edt_sspPrdNm.set_value(jsonData.SSP_PRD_NM);
        				this.fn_SaveYn();
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
            var strUrl      = "/rd/pub-prd-sals-dsgn-salsprc-mng/select-pub-prd-sals-dsgn-salsprc-mng-dtl.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master"
        	                + " ds_saveFileList=ds_saveFileList"
        					+ " ds_salsDsgnSalsprcHst=ds_salsDsgnSalsprcHst";
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
        	//trace(this.ds_salsDsgnSalsprcHst.saveXML());
        	var useYn = this.ds_master.getColumn(0,"BSS_SALSPRC_USEYN");
        	this.oldBssSalsprcUseYn = useYn;
        	this.oldSalsDsgnSalsprc = this.ds_master.getColumn(0,"SALS_DSGN_SALSPRC");
        	if ( useYn == 'Y' )  {
        		this.Div00.form.chk_bssSalsprc.set_value(true);
        		this.chk_bssSalsprc_onchanged(this.chk_bssSalsprc,new nexacro.ChangeEventInfo());
        	} else {
        		this.Div00.form.chk_bssSalsprc.set_value(false);
        		this.chk_bssSalsprc_onchanged(this.chk_bssSalsprc,new nexacro.ChangeEventInfo());
        	}
        	if ( this.ds_saveFileList.getRowCount() > 0 ) {
        		var nRow1 = this.ds_viewFileList.addRow();
        		this.ds_viewFileList.copyRow(nRow1,this.ds_saveFileList);
        		this.ds_viewFileList.setColumn(nRow1,"ATFL_LEN_VIEW", this.cutFileSize(this.ds_saveFileList.getColumn(0,"ATFL_LEN")) );
        	}
        };

        /**
         * 기능 : 상품정보 조회 전 실행
         */
        this.fn_prePrdDetail = function()
        {
        	// 조회조건 셋팅
        	return true;
        }

        /**
         * 기능 : 상품정보 조회
         */
        this.fn_prdDetail = function()
        {
        	if(!this.fn_prePrdDetail())
        	{
        		return false;
        	}
        	var strSvc      = "PrdDetail";
            var strUrl      = "/rd/pub-prd-sals-dsgn-salsprc-mng/select-pub-prd-sals-dsgn-salsprc-mng-prd-dtl.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_detail=ds_detail";
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
         * 기능 : 상품정보조회 후 실행
         */
        this.fn_postPrdDetail = function()
        {
        	//trace(this.ds_detail.saveXML());
        	this.ds_master.setColumn(0,"SELL_UNIT_CD",this.ds_detail.getColumn(0,"SELL_UNIT_CD"));
        	this.ds_master.setColumn(0,"BSS_SALSPRC",this.ds_detail.getColumn(0,"BSS_SALSPRC"));
        	this.ds_master.setColumn(0,"LWST_BUY_PRC",this.ds_detail.getColumn(0,"LWST_BUY_PRC"));
        	this.ds_master.setColumn(0,"EXPT_PRFRT",this.ds_detail.getColumn(0,"EXPT_PRFRT"));
        };

        /**
         * 기능 : 저장여부 조회 전 실행
         */
        this.fn_preSaveYn = function()
        {
        	if ( this.gfn_isNull(this.ds_master.getColumn(0,"PRD_ID")) ) {
        		return false;
        	}
        	if ( this.gfn_isNull(this.ds_master.getColumn(0,"BZPLC_ID")) ) {
        		return false;
        	}
        	// 조회조건 셋팅
        	return true;
        }

        /**
         * 기능 : 저장여부 조회
         */
        this.fn_SaveYn = function()
        {
        	if(!this.fn_preSaveYn())
        	{
        		return false;
        	}
        	var strSvc      = "SaveYn";
            var strUrl      = "/rd/pub-prd-sals-dsgn-salsprc-mng/select-pub-prd-sals-dsgn-salsprc-mng-prd-save-yn.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master"
        	                + " ds_saveFileList=ds_saveFileList"
        					+ " ds_salsDsgnSalsprcHst=ds_salsDsgnSalsprcHst"
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
        }

        /**
         * 기능 : 저장여부 조회 후 실행
         */
        this.fn_postSaveYn = function()
        {
        	if ( this.ds_master.getCount() > 0 && this.ds_detail.getCount() == 0 ) {
        		this.flag = "U";
        		this.fn_setResetBtnCall("U");
        		var useYn = this.ds_master.getColumn(0,"BSS_SALSPRC_USEYN");
        		if ( useYn == 'Y' )  {
        			this.Div00.form.chk_bssSalsprc.set_value(true);
        			this.chk_bssSalsprc_onchanged(this.chk_bssSalsprc,new nexacro.ChangeEventInfo());
        		} else {
        			this.Div00.form.chk_bssSalsprc.set_value(false);
        			this.chk_bssSalsprc_onchanged(this.chk_bssSalsprc,new nexacro.ChangeEventInfo());
        		}
        	}
        	if ( this.ds_saveFileList.getRowCount() > 0 ) {
        		var nRow1 = this.ds_viewFileList.addRow();
        		this.ds_viewFileList.copyRow(nRow1,this.ds_saveFileList);
        		this.ds_viewFileList.setColumn(nRow1,"ATFL_LEN_VIEW", this.cutFileSize(this.ds_saveFileList.getColumn(0,"ATFL_LEN")) );
        	}
        	if ( this.ds_detail.getRowCount() > 0 ) {
        		var lwstBuyPrc = this.ds_detail.getColumn(0,"LWST_BUY_PRC");
        		this.ds_master.setColumn(0,"LWST_BUY_PRC",lwstBuyPrc);
        		this.ds_master.setColumn(0,"SELL_UNIT_CD",this.ds_detail.getColumn(0,"SELL_UNIT_CD"));
        		this.ds_master.setColumn(0,"BSS_SALSPRC",this.ds_detail.getColumn(0,"BSS_SALSPRC"));
        		if ( this.gfn_isNull(lwstBuyPrc) ) {
        			this.ds_master.setColumn(0,"EXPT_PRFRT",0);
        		} else {
        			this.ds_master.setColumn(0,"EXPT_PRFRT",nexacro.round((1-(lwstBuyPrc/salsprc))*100, 2));
        		}

        	}
        }

        /**********************************************************************
                06. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.btn_save_onclick = function(obj,e)
        {
        	if ( this.flag == "U" ) {
        		this.fn_Save2();
        	} else {
        		this.fn_Save();
        	}
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	// 상품 필수 체크
        	if (this.gfn_isNull(this.Div00.form.edt_prdId.value)) {
        		this.fn_alert("ERRS000144","저장","상품 ","question");      // 상품 (&1은(는) 필수입력사항입니다.)
        		return false;
        	}

        	// 사업장 필수 체크
         	if (this.gfn_isNull(this.Div00.form.edt_bzplcId.value)) {
        		this.fn_alert("ERRS000144","저장","사업장 ","question");      // 사업장 (&1은(는) 필수입력사항입니다.)
        		return false;
        	}

        	// 사업장 검색 여부 체크
        	if (this.gfn_isNull(this.ds_master.getColumn(0, "BZPLC_NM"))) {
        		this.fn_alert("사업장 검색 후 진행해 주세요.", "저장", "사업장 ID", "question");      // 사업장 검색 후 진행해 주세요.
        		return false;
        	} else if (this.ds_master.getColumn(0, "BZPLC_ID") != this.ds_search.getColumn(0, "BZPLC_ID")) {
        		this.fn_alert("사업장 검색 후 진행해 주세요.", "저장", "사업장 ID", "question");      // 사업장 검색 후 진행해 주세요.
        		return false;
        	}

        	 // 기준판매가 적용 체크 해제일 경우
        	 if (!this.Div00.form.chk_bssSalsprc.value) {
        		// 영업지정판매가 필수 체크
        		if (this.gfn_isNull(this.Div00.form.edt_salsDsgnSalsprc.value)) {
        			this.fn_alert("ERRS000144","저장","영업지정판매가 ","question");      // 영업지정판매가 (&1은(는) 필수입력사항입니다.)
        			return false;
        		}
        	}

        	// 영업지정판매가 유효기간 일자 체크
        	if (!this.fn_getDefaultDateTimeChk(this.Div00.form.cal_vldPerdDtStr, this.Div00.form.cal_vldPerdDtEnd, "영업지정판매가 유효기간", false)) {
        		return false;
        	}
        	// 판매가 지정사유 필수 체크
        	 if(this.gfn_isNull(this.Div01.form.edt_salsprcDsgnRsn.value) )
         	 {
        		this.fn_alert("ERRS000144","저장","판매가 지정사유 ","question");      // 판매가 지정사유 (&1은(는) 필수입력사항입니다.)
          		return false;
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
            var strUrl      = "/rd/pub-prd-sals-dsgn-salsprc-mng/insert-pub-prd-sals-dsgn-salsprc-mng.do";
            var strInDs     = "ds_master=ds_master:u"
        	                + " ds_saveFileList=ds_saveFileList:u"
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

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave2 = function()
        {
        	// 기준판매가 적용 체크 해제일 경우
        	if ( !this.Div00.form.chk_bssSalsprc.value ) {
        		// 영업지정판매가 필수 체크
        		if(this.gfn_isNull(this.Div00.form.edt_salsDsgnSalsprc.value) )
        		{
        			this.fn_alert("ERRS000144","저장","영업지정판매가 ","information");      // 영업지정판매가 (&1은(는) 필수입력사항입니다.)
        			return false;
        		}
        	}
        	// 영업지정판매가 시작유효기간 필수체크
        	if(this.gfn_isNull(this.Div00.form.cal_vldPerdDtStr.value))
        	{
        		this.fn_alert("ERRS000144","저장","영업지정판매가 ","information");      // 영업지정판매가 (&1은(는) 필수입력사항입니다.)
        		this.Div00.form.cal_vldPerdDtStr.setFocus();
        		return false;
        	} else
        	{
         		var vldPerdDtStr = this.ds_master.getColumn("0","SALS_DSGN_SALSPRC_STR_DTM");
         		var oldVldPerdDtStr = this.ds_master.getColumn("0","OLD_SALS_DSGN_SALSPRC_STR_DTM");
        		//수동으로 일자 변경이 있을경우 과거일자 등록 불가
         		if ( vldPerdDtStr.substr(0,14) != oldVldPerdDtStr.substr(0,14) )
         		{
         			if ( vldPerdDtStr.substr(0,14) < this.lvGetDateTime.substr(0,14) )
         			{
         				this.fn_alert("ERRR000203","저장","영업지정판매가 시작유효기간 ","information");
        				return false;
         			}
        		// 일자 변경이 없을경우
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

        	//this.oldBssSalsprcUseYn
        	// 영업지정판매가 종료유효기간 필수체크
        	if(this.gfn_isNull(this.Div00.form.cal_vldPerdDtEnd.value))
        	{
        		this.fn_alert("ERRS000144","저장","영업지정판매가 ","information");      // 영업지정판매가 (&1은(는) 필수입력사항입니다.)
        		this.Div00.form.cal_vldPerdDtEnd.setFocus();
        		return false;
        	}
        	// 영업지정판매가 유효기간 일자 체크
        	if(!this.fn_getDefaultDateTimeChk(this.Div00.form.cal_vldPerdDtStr
        							 ,this.Div00.form.cal_vldPerdDtEnd
        							 ,"영업지정판매가 유효기간"
        							 ,false))
        	{
        		return false;
        	}
        	// 판매가 지정사유 필수 체크
        	if(this.gfn_isNull(this.Div01.form.edt_salsprcDsgnRsn.value) )
         	{
        		this.fn_alert("ERRS000144","저장","판매가 지정사유 ","question");      // 판매가 지정사유 (&1은(는) 필수입력사항입니다.)
          		return false;
         	}

        	//trace(this.ds_master.saveXML());
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
        this.fn_Save2 = function()
        {
            if(!this.fn_PreSave2())
            {
                return false;
            }

            var strSvc      = "Save2";
            var strUrl      = "/rd/pub-prd-sals-dsgn-salsprc-mng/update-pub-prd-sals-dsgn-salsprc-mng.do";
            var strInDs     = "ds_master=ds_master:u"
        	                + " ds_saveFileList=ds_saveFileList:u"
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
        this.fn_PostSave2 = function()
        {
            this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다
        	this.close("SAVE");
        };
        /**********************************************************************
        	07. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRN000053", "취소","", "question" ); // 취소 하시겠습니까?
            if(result == 1)
            {
        		this.fn_saveMultiFileDelUpdate("CLOSE");
        	}
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRN000053", "취소","", "question" ); // 취소 하시겠습니까?
            if(result == 1)
            {
        		this.fn_saveMultiFileDelUpdate("EXIT");
        	}
        };

        /**********************************************************************
        	08.Get, Set Method
        ***********************************************************************/
         /**********************************************************************
        	09.기타 Control Event
        ***********************************************************************/
        /**
         * 파일 첨부파일 업로드 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_file_onclick = function(obj,e)
        {

        	if(obj.text == "파일 첨부")
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
        			var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","90");
        			this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        		}
        	}
        };

        /**
         * 이미지등록 아이템 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	if ( this.ds_viewFileList.getRowCount() > 0 ) {
        			this.fn_alert("ERRC000196","파일","1개","information");
        			return false;
        	}
        	var sCompValue = this.FileUploadSingle.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]

        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        	if(!(sCompValue.toUpperCase() == "PPTX" || sCompValue.toUpperCase() == "PPT"
        	  || sCompValue.toUpperCase() == "DOCX" || sCompValue.toUpperCase() == "DOC"
        	  || sCompValue.toUpperCase() == "XLS"  || sCompValue.toUpperCase() == "XLSX"
        	  || sCompValue.toUpperCase() == "TEXT" || sCompValue.toUpperCase() == "ZIP"
        	  || sCompValue.toUpperCase() == "TXT"))
        	{
        		this.fn_alert("파일형식이 아닙니다.","파일 정보","","information");  // 파일형식이 아닙니다.
        		return false;
        	}

        	var sFilePath = this.FileUploadSingle.value;  // 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_master.getColumn(0,"SALS_SALSPRC_ATFL_ID"),"");
        		docRegId  = docRegId != "" ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0,"DOC_REG_ID"),"");

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=" + "90";

        	var bSucc = this.FileUploadSingle.upload(strUrl); 		 // 파일 업로드
        };

        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","90");
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스
        	var nRow1 = this.ds_viewFileList.addRow();
        	this.ds_viewFileList.copyRow(nRow1,this.ds_uploadResult);
        	this.ds_viewFileList.setColumn(nRow1,"ATFL_LEN_VIEW", this.cutFileSize(this.ds_uploadResult.getColumn(0,"ATFL_LEN")) );

        	// 최초 파일 등록시 상품문서등록ID Set
        	if(this.gfn_nvl(this.ds_master.getColumn(0,"SALS_SALSPRC_ATFL_ID"),"") == "")
        	{
        		this.ds_master.setColumn(0,"SALS_SALSPRC_ATFL_ID",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        	}

        	//this.edt_fileName_onchanged(this.edt_fileName,new nexacro.ChangeEventInfo());

        };

        //파일 사이즈.
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
        };

        /**
         * 첨부파일 다운로드 클릭시 oneditclick  이벤트 발생 처리
         */
        this.fileName_oneditclick = function(obj,e)
        {
        	if(this.gfn_nvl(this.edt_fileId.value,"") != "")
        	{
        		this.ds_uploadResult.clearData();
        		var nRow = this.ds_uploadResult.addRow();
        		this.ds_uploadResult.copyRow(nRow,this.ds_saveFileList,0);

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.FileDownload);
        	}
        };

        this.chk_bssSalsprc_onchanged = function(obj,e)
        {
        	var lwstBuyPrc = this.ds_master.getColumn(0,"LWST_BUY_PRC");
        	var salsprc = null;
        	if ( this.Div00.form.chk_bssSalsprc.value) {
        		this.ds_master.setColumn(0,"BSS_SALSPRC_USEYN","Y");
        		this.Div00.form.edt_salsDsgnSalsprc.set_readonly(true);
        // 		this.Div00.form.cal_vldPerdDtStr.set_readonly(true);
        // 		this.Div00.form.cal_vldPerdDtEnd.set_readonly(true);
        		var salsprc = this.ds_master.getColumn(0,"BSS_SALSPRC");


        	} else {
        		this.ds_master.setColumn(0,"BSS_SALSPRC_USEYN","N");
        		this.Div00.form.edt_salsDsgnSalsprc.set_readonly(false);
        // 		this.Div00.form.cal_vldPerdDtStr.set_readonly(false);
        // 		this.Div00.form.cal_vldPerdDtEnd.set_readonly(false);
        		var salsprc = this.ds_master.getColumn(0,"SALS_DSGN_SALSPRC");
        		//this.ds_master.setColumn(0,"EXPT_PRFRT",1-(lwstBuyPrc/salsDsgnSalsprc));
        	}
        	if ( this.gfn_isNull(lwstBuyPrc) ) {
        		this.ds_master.setColumn(0,"EXPT_PRFRT",0);
        	} else {
        		this.ds_master.setColumn(0,"EXPT_PRFRT",(1-(lwstBuyPrc/salsprc))*100);
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
            if(bVal)
            {
        		this.Div00.form.btn_extend.set_text("∧");
                this.bExtend = true;
                this.fn_changeSearchArea(false);
            }
            else
            {
        		this.Div00.form.btn_extend.set_text("∨");
                this.bExtend = false;
                this.fn_changeSearchArea(true);
            }
        };

        this.fn_changeSearchArea = function(flag) {
            // 접기
            if (flag == true) {
        		this.Div00.set_height(this.Div00.uMinSize);
        		this.set_height(712-161);
        	}
            // 펼치기
            else	{
        		this.Div00.set_height(this.Div00.uMaxSize);
        		this.set_height(712);
        	}
            this.resetScroll();
        };

        /**
         * 조회조건 상품 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.Div00_btn_prdIdPopup_onclick = function(obj,e)
        {
        	var params  = { coCd : this.lv_coCd,prdId : this.Div00.form.edt_prdId.value, mallSprCd : this.mallSprCd, pubOnlySprCd : "P" };
        	var options = { title  : "상품" };
        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_38.xfdl", params, "fn_popupCallback", options);

        };

        /**
         * 조회조건 사업장 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.Div00_btn_bzplcPopup_onclick = function(obj,e)
        {
        	var params  = { coCd : this.lv_coCd };
        	var options = { title  : "사업장" };

        	// 사업장
        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_22.xfdl", params, "fn_popupCallback", options);
        };
        /**
         * 메인 그리드 셀 더블 클릭시 oncelldblclick 이벤트 발생 처리
         */
        this.grd_list_oncellclick = function(obj,e)
        {
        	// 파일명 더블클릭 시 파일 다운로드
         	if ( e.cell == obj.getBindCellIndex("body","ATFL_NM") )
        	{
        		var strFileId = this.ds_saveFileList.getColumn(e.row,"DOC_REG_ID");
        		var strAtflStorPath = this.ds_saveFileList.getColumn(e.row,"ATFL_STOR_PATH");
        		var strAtflNm = this.ds_saveFileList.getColumn(e.row,"ATFL_NM");
        		var strOriAtflNm = this.ds_saveFileList.getColumn(e.row,"ORI_ATFL_NM");
        		if(this.gfn_nvl(strFileId,"") != "")
        		{
        			this.ds_uploadResult.clearData();
        			var nRow = this.ds_uploadResult.addRow();
        			this.ds_uploadResult.setColumn(nRow,"ATFL_STOR_PATH",strAtflStorPath);
        			this.ds_uploadResult.setColumn(nRow,"ATFL_NM",strAtflNm);
        			this.ds_uploadResult.setColumn(nRow,"ORI_ATFL_NM",strOriAtflNm);

        			this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.FileDownload);
        		}
        	}
        	else if ( e.cell == obj.getBindCellIndex("body","ETC_FDS_2") )
        	{
        		this.ds_saveFileList.setColumn(e.row,"ETC_FDS_2","del");
        		this.ds_master.setColumn(0,"SALS_SALSPRC_ATFL_ID",null);
        		this.ds_viewFileList.clearData();
        		//this.ds_saveFileList.deleteRow(e.row);
        	}
        };

        /*
         * 영업지정판매가 변경시 예상매익률 변경
         */
        this.edt_salsDsgnSalsprc_onchanged = function(obj,e)
        {
        	var lwstBuyPrc = this.ds_master.getColumn(0,"LWST_BUY_PRC");
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
        this.Div00_edt_prdId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.Div00.form.edt_prdNm.set_value("");
        		this.Div00.form.edt_prdClcd.set_value("");
        		this.Div00.form.edt_prdClcdNm.set_value("");
        		this.Div00.form.edt_mnfrNo.set_value("");
        		this.Div00.form.edt_mnfrNm.set_value("");
        		this.Div00.form.edt_reprSpec.set_value("");
        		this.Div00.form.edt_odrUnit.set_value("");
        	}
        };

        /**
         * 상품ID Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.Div00_edt_prdId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.Div00.form.edt_prdId.value);

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
        		this.ds_input.setColumn(nRow,"START_NUM",  "0");
        		this.ds_input.setColumn(nRow,"PUB_ONLY_SPR_CD", "P");
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
        		this.Div00.form.edt_prdId.set_value(this.ds_popupList.getColumn(0,"PRD_ID_VIEW"));
        		this.Div00.form.edt_prdNm.set_value(this.ds_popupList.getColumn(0,"PRD_NM"));
         		this.ds_master.setColumn(0,"PRD_ID",this.ds_popupList.getColumn(0,"PRD_ID"));
        		this.ds_master.setColumn(0,"PRD_CLCD",this.ds_popupList.getColumn(0,"PRD_CLCD"));
        		this.ds_master.setColumn(0,"PRD_CLCD_NM",this.ds_popupList.getColumn(0,"FULL_PRD_CLSF_NM"));
        		this.ds_master.setColumn(0,"MNFR_NO",this.ds_popupList.getColumn(0,"MNFR_NO"));
        		this.ds_master.setColumn(0,"MNFR_NM",this.ds_popupList.getColumn(0,"MNFR_NM"));
        		this.ds_master.setColumn(0,"ATTR_VAL",this.ds_popupList.getColumn(0,"ATTR_VAL"));
        		this.ds_search.setColumn(0,"PRD_ID",this.ds_popupList.getColumn(0,"PRD_ID"));

        		this.fn_SaveYn();
        	}
        	else
        	{
        		var params  = { prdId : sCodeId, coCd : this.lv_coCd , mallSprCd : this.mallSprCd, pubOnlySprCd : "P" };
        		var options = { title  : "상품ID 단일조회" };
        		this.gfn_openPopup("btn_prdIdPopup", "PR_POP::SSP_BO_PP_38.xfdl", params, "fn_popupCallback", options);
        	}
        };

        /**
         * 사업장ID Edit 키 값 변경시 이벤트 발생 처리
         */
        this.Div00_edt_bzplcId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.Div00.form.edt_bzplcNm.set_value("");
        	}
        };

        /**
         * 사업장ID Enter Key 입력시 onkeyup 이벤트 발생 처리
         */
        this.Div00_edt_bzplcId_onkeyup = function(obj,e)
        {
        	// 13(Enter) 누르면 조회
        	if (e.keycode == 13) {
        		if (!this.gfn_isNull(bzplcId)) {
        			this.fn_setCallPopup2(bzplcId);
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
        		this.Div00.form.edt_bzplcId.set_value(this.ds_popupList.getColumn(0,"BZPLC_ID"));
        		this.Div00.form.edt_bzplcNm.set_value(this.ds_popupList.getColumn(0,"BZPLC_NM"));
        		this.ds_search.setColumn(0,"BZPLC_ID",this.ds_popupList.getColumn(0,"BZPLC_ID"));
        		this.fn_SaveYn();

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
        this.Div00_edt_salsDsgnSalsprc_canchange = function(obj,e)
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
            this.Div00.form.edt_salsDsgnSalsprc.addEventHandler("onchanged",this.edt_salsDsgnSalsprc_onchanged,this);
            this.Div00.form.edt_salsDsgnSalsprc.addEventHandler("canchange",this.Div00_edt_salsDsgnSalsprc_canchange,this);
            this.Div00.form.chk_bssSalsprc.addEventHandler("onchanged",this.chk_bssSalsprc_onchanged,this);
            this.Div00.form.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.Div00.form.edt_prdId.addEventHandler("oninput",this.Div00_edt_prdId_oninput,this);
            this.Div00.form.edt_prdId.addEventHandler("onkeyup",this.Div00_edt_prdId_onkeyup,this);
            this.Div00.form.btn_prdIdPopup.addEventHandler("onclick",this.Div00_btn_prdIdPopup_onclick,this);
            this.Div00.form.edt_bzplcId.addEventHandler("oninput",this.Div00_edt_bzplcId_oninput,this);
            this.Div00.form.edt_bzplcId.addEventHandler("onkeyup",this.Div00_edt_bzplcId_onkeyup,this);
            this.Div00.form.btn_bzplcPopup.addEventHandler("onclick",this.Div00_btn_bzplcPopup_onclick,this);
            this.Div00.form.btn_extend.addEventHandler("onclick",this.btn_extend_onclick,this);
            this.Div01.form.edt_fileName.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.Div01.form.edt_fileName.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.Div01.form.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.Div01.form.grd_list00.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div01.form.stc_file1.addEventHandler("onclick",this.div_top_info_Static01_00_onclick,this);
            this.Div01.form.stc_file.addEventHandler("onclick",this.div_top_info_Static01_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_salsDsgnSalsprcHst.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_detail.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_LA_20.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
