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
            this.set_titletext("R&D상품담당자 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dateUnitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdClsfChrpsnSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"string\" size=\"32\"/><Column id=\"REG_DTM\" type=\"string\" size=\"32\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_USEYN\" type=\"string\" size=\"32\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"string\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SEQ\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_GB_NM\" type=\"string\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"string\" size=\"32\"/><Column id=\"REGPSN_NM\" type=\"string\" size=\"32\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_USEYN_NM\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_CLCD\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"DT_SPR\">REG_DTM</Col><Col id=\"PSN_TYPE\">PRD_CLSF_CHRPSN_ID</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_CLCD\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"DT_SPR\">REG_DTM</Col><Col id=\"PSN_TYPE\">PRD_CLSF_CHRPSN_ID</Col></Row></Rows>");
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


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","20","0",null,"160","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","20",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65","0","51",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdGrp","0","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","762","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chrpsn","0","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-93","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-93","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"129","60","28","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"129","60","28","btn_search:4",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65_00","0","82",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_prdClsfChrpsnSpr","762","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("정/부 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_chrpsnStats","762","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("담당자 상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_chrpsn","140","55","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_chrpsn_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_chrpsn_innerdataset", obj);
            div_search_form_cmb_chrpsn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">PRD_CLSF_CHRPSN_ID</Col><Col id=\"datacolumn\">상품담당자</Col></Row><Row><Col id=\"codecolumn\">REGPSN_ID</Col><Col id=\"datacolumn\">등록자</Col></Row><Row><Col id=\"codecolumn\">UPDPSN_ID</Col><Col id=\"datacolumn\">수정자</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_chrpsn_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnId","cmb_chrpsn:5","55","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_chrpsnNm","edt_chrpsnId:5","55","184","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_chrpsnPopup","edt_chrpsnNm:5","55","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_prdClsfChrpsnSpr","stc_prdClsfChrpsnSpr:10","55","200","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_prdClsfChrpsnSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10_01_00","0","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dateType","140","86","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var div_search_form_cmb_dateType_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_dateType_innerdataset", obj);
            div_search_form_cmb_dateType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REG_DTM</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">UPD_DTM</Col><Col id=\"datacolumn\">최종수정일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cmb_dateType_innerdataset);
            obj.set_text("등록일");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtStr","274","86","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59_00","418","86","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDtFnlProcDtEnd","431","86","140","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dtUnit","575","86","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_dateUnitCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCd","stc_mnfr:10","25","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","edt_mnfrCd:5","25","184","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPopup","edt_mnfrNm:5","25","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdGrpCd","140","25","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prdGrpNm","edt_prdGrpCd:5","25","184","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdGrpPopup","edt_prdGrpNm:5","25","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prdGrpMultiInput","btn_prdGrpPopup:5","25","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_mnfrMultiInput","btn_mnfrPopup:5","25","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","232",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_master");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.getSetter("uSortFlag").set("false");
            obj.getSetter("uServerSortFlag").set("false");
            obj.getSetter("uSortCallback").set("fn_sortCallback");
            obj.getSetter("uCellSizeType").set("true");
            obj.set_cellmovingtype("col");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"담당자ID\"/><Cell col=\"1\" text=\"담당자\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"상품군ID\"/><Cell col=\"5\" text=\"상품군\"/><Cell col=\"6\" text=\"제조원ID\"/><Cell col=\"7\" text=\"제조원\"/><Cell col=\"8\" text=\"등록일\"/><Cell col=\"9\" text=\"등록자ID\"/><Cell col=\"10\" text=\"등록자\"/><Cell col=\"11\" text=\"최종수정일\"/><Cell col=\"12\" text=\"최종수정자ID\"/><Cell col=\"13\" text=\"최종수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_CLSF_CHRPSN_ID\" color=\"#235da8\" textDecoration=\"underline\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:PRD_CLSF_CHRPSN_NM\" color=\"#235da8\" textDecoration=\"underline\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:PRD_CLSF_CHRPSN_GB_NM\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:PRD_CLSF_CHRPSN_USEYN_NM\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRD_CLCD\" expr=\"PRD_CLCD ==&apos;*&apos; || PRD_CLCD == null ? &apos;&apos; : PRD_CLCD\" textAlign=\"center\" wordWrap=\"none\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:PRD_CLCD_NM\" expr=\"PRD_CLCD ==&apos;*&apos; || PRD_CLCD == null ? &apos;&apos; : PRD_CLCD_NM\" textAlign=\"left\" wordWrap=\"char\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:MNFR_NO\" expr=\"MNFR_NO ==&apos;*&apos; || MNFR_NO == null ? &apos;&apos; : MNFR_NO\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:MNFR_NM\" expr=\"MNFR_NO ==&apos;*&apos; || MNFR_NO == null ? &apos;&apos; : MNFR_NM\" textAlign=\"left\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:REG_DTM\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:REGPSN_ID\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:REGPSN_NM\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:UPD_DTM\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"12\" text=\"bind:UPDPSN_ID\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/><Cell col=\"13\" text=\"bind:UPDPSN_NM\" cssclass=\"expr:PRD_CLSF_CHRPSN_USEYN_NM == &apos;삭제&apos; ? &apos;grd_bgPink&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:30","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","204","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_chrpsnStats","922","85","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            var cmb_chrpsnStats_innerdataset = new nexacro.NormalDataset("cmb_chrpsnStats_innerdataset", obj);
            cmb_chrpsnStats_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">삭제</Col></Row></Rows>");
            obj.set_innerdataset(cmb_chrpsnStats_innerdataset);
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","117",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","159","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCont",null,"189","100","28","26",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"190","110","28","cbo_rowCont:4",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"190","100","28","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"190","100","28","btn_layoutInit:4",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload",null,"190","81","28","452",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("일괄수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_saveall",null,"190","81","28","btn_upload:4",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg",null,"190","81","28","btn_saveall:4",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","220","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","grd_list:0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","div_paging:0","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","Div00.form.cmb_psnType","value","ds_search","PSN_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_psnId","value","ds_search","PSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_psnNm","value","ds_search","PSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.cmb_orgCd","value","ds_search","ORG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.cmb_prdClsfChrpsnSprCd","value","ds_search","PRD_CLSF_CHRPSN_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_mnfrNo","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_mnfrNm","value","ds_search","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_mnfrNo00","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_mnfrNm00","value","ds_search","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cmb_chrpsnStats","value","ds_search","PRD_CLSF_CHRPSN_USEYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.edt_mnfrCd","value","ds_search","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.edt_mnfrNm","value","ds_search","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_search.form.edt_prdGrpCd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_search.form.edt_prdGrpNm","value","ds_search","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_search.form.cmb_prdClsfChrpsnSpr","value","ds_search","PRD_CLSF_CHRPSN_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_search.form.cal_reqDtFnlProcDtStr","value","ds_search","DATE_FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_search.form.cal_reqDtFnlProcDtEnd","value","ds_search","DATE_TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_search.form.cmb_dateType","value","ds_search","DT_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.cmb_chrpsn","value","ds_search","PSN_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_search.form.edt_chrpsnId","value","ds_search","PSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.edt_chrpsnNm","value","ds_search","PSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cbo_rowCont","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_search.form.cmb_dtUnit","value","ds_search","REQ_DT_FNL_PROC_DT_UNIT");
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
        this.addIncludeScript("SSP_BO_RD_37.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_37.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_37.xfdl(R&D상품담당자 목록)
        * 작 성         일 명: 홍길동
        * 작 성         일 자: 2022/04/28
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
        this.lvKeyCode              = "";
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
            var strDs    = "ds_dateUnitCombo|ds_chrTeam|ds_prdClsfChrpsnSpr|ds_pageRowCd|ds_rndPrdAuthCombo";                   // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "INQ_PERD_SPR_CD|TEAM_ATTR_CLCD|PRD_CLSF_CHRPSN_SPR_CD|PAGE_ROW_CD|CHRPSN_TEAM_SPR_CD";              // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|X|X";							                                                                // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                    								                                // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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

        	this.fn_setResetBtnCall();
        };

        /**
         * RND화면권한제어
         */
        this.fn_setRndUiAuthCtl = function()
        {
        	var strRndPrdAuth = this.ds_rndPrdAuthCombo.findRowExpr("COM_DTL_CD == '" + this.lv_orgCd + "' && USE_YN == 'Y'");

        	// RND상품담당권한 조직인 경우
        	if(strRndPrdAuth != -1)
        	{
        		this.lv_btnChkYn = "P";
        	}

        	// 화면권한 자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.btn_reg.set_visible(false);	   // 등록 버튼 숨김
        		this.btn_saveall.set_visible(false);   // 일괄등록 버튼 숨김
        		this.btn_upload.set_visible(false);    // 일괄수정 버튼 숨김
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
            this.ds_search.setColumn(nRow,"PRD_CLCD",         		null);                   	// 상품군CD
        	this.ds_search.setColumn(nRow,"PRD_CLCD_CNT",         	null);               		// 상품군선택갯수
        	this.ds_search.setColumn(nRow,"PRD_CLCD_NM",         	null);                		// 상품군명
        	this.ds_search.setColumn(nRow,"MNFR_NO",         		null);                    	// 제조원
        	this.ds_search.setColumn(nRow,"MNFR_NO_CNT",         	null);                		// 제조원선택갯수
        	this.ds_search.setColumn(nRow,"MNFR_NM",         		null);                    	// 제조원명
        	this.ds_search.setColumn(nRow,"PSN_TYPE",         		"PRD_CLSF_CHRPSN_ID");   	// 구분
        	this.ds_search.setColumn(nRow,"PSN_ID",         		null);                     	// 담당자ID
        	this.ds_search.setColumn(nRow,"PSN_NM",         		null);                     	// 담당자명
        	this.ds_search.setColumn(nRow,"DT_SPR",         		"REG_DTM");                	// 일자구분
        	this.ds_search.setColumn(nRow,"PRD_CLSF_CHRPSN_SPR_CD", null);      				// 정/부 구분
        	this.ds_search.setColumn(nRow,"PRD_CLSF_CHRPSN_USEYN",  "");      					// 담당자상태
        	this.ds_search.setColumn(nRow,"ROW_COUNT",              this.lv_pageViewCnt); 	//현재 레코드 초기화셋팅
        	this.div_paging.reload();
        	this.fn_pageCallback();

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
        		//R&D 구매담당자 등록 팝업
        		case "SSP_BO_RD_40" :
                    if(!this.gfn_isNull(strVal))
                    {
                        //일반
                        var sRtn = strVal.split(",");
        				if(sRtn[0] == "CLOSE")
                        {
                        }else if(sRtn[0] == "EXIT")
                        {
                        }else
        				{
        					this.lvKeyCode  = sRtn[1];
        					this.fn_Ret(true);
        				}
                    }
        		     break;
        		//R&D 구매담당자 상세 팝업
        		case "SSP_BO_RD_41" :
                    if(!this.gfn_isNull(strVal))
                    {
                        //일반
                        var sRtn = strVal.split(",");
        				if(sRtn[0] == "CLOSE")
                        {
                        }else if(sRtn[0] == "EXIT")
                        {
                        }else
        				{
        					this.lvKeyCode  = sRtn[1];
        					this.fn_Ret(true);
        				}
                    }
        		     break;
                // 상품군 조회팝업 후처리
        		case "SSP_BO_PP_10" :
        				if(!this.gfn_isNull(strVal))
        				{
        					 var jsonData = JSON.parse(strVal);
        					 this.div_search.form.edt_prdGrpCd.set_value(jsonData.PRD_CLCD.replace(/,\s*$/, ""));
        					 this.div_search.form.edt_prdGrpNm.set_value(jsonData.PRD_CLSF_NM.replace(/,\s*$/, ""));
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        			break;
        		// 상품군 멀티입력팝업 후처리
        		case "btn_prdGrpMultiInput" :
        				if(!this.gfn_isNull(strVal))
        				{
        					 var jsonData = JSON.parse(strVal);
        					 this.div_search.form.edt_prdGrpCd.set_value(jsonData.textValue);
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        			 break;
        		// 제조원 조회팝업 후처리
        		case "SSP_BO_PP_08" :
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
        		// 제조원 멀티입력팝업 후처리
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
        		// 담당자 조회팝업 후처리
        		case "SSP_BO_PP_27" :
        			if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.div_search.form.edt_chrpsnId.set_value(jsonData.OPRTR_ID.replace(/,\s*$/, ""));
        					this.div_search.form.edt_chrpsnNm.set_value(jsonData.OPRTR_NM.replace(/,\s*$/, ""));
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
        	this.fn_setMultiSearch(this.formId,"PRD_CLCD",this.ds_search.getColumn(0,"PRD_CLCD"));  // 상품군CD
        	this.fn_setMultiSearch(this.formId,"MNFR_NO",this.ds_search.getColumn(0,"MNFR_NO"));  // 제조원NO

            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0)
            {
                this.fn_insertMultiData("fn_callBack");
            }
            else
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
        								 ,this.div_search.form.cmb_dateType.text))
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
            var strUrl      = "/rd/prd-chrpsn-mng/select-prd-chrpsn-mng.do";
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
           if(!this.gfn_isNull(this.lvKeyCode))
            {
        		var strPkCode          = this.lvKeyCode.split("|");
        		var strCoCd            = strPkCode[0];
        		var strPrdClsfChrpsnId = strPkCode[1];
        		var strPrdClcd         = this.gfn_isNull(strPkCode[2]) ? "*" : strPkCode[2];
        		var strMnfrNo          = this.gfn_isNull(strPkCode[3]) ? "*" : strPkCode[3];
        		var strExpr            = "CO_CD=='" + strCoCd + "' && PRD_CLSF_CHRPSN_ID == '" + strPrdClsfChrpsnId + "' && PRD_CLCD == '" + strPrdClcd + "' && MNFR_NO == '" + strMnfrNo + "'";

        		var nRow = this.ds_master.findRowExpr(strExpr);

        		if(nRow > -1)
        		{
        			this.ds_master.set_rowposition(nRow);
        			this.lvKeyCode = "";
        		}
            }

           this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.lv_pageViewCnt,"fn_pageCallback");
        };


        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 신규 등록 버튼 클릭시
         */
        this.btn_reg_onclick = function(obj,e)
        {
        	var params = { newprdReqNo : ""       // 요청번호
        				 , reqGubun    : "10"     // 요청구분 [고객:10,자사:20,협력사:30]
        				 , autoSearch  : "N"      // 팝업 오픈시 자동조회 여부
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
                this.fn_alert("ERRS000202", "EXCEL 정보" ,"","information"); // 출력할 엑셀데이타가 없습니다.!
                return false;
            }

            var result = this.fn_confirm( "ERRR000168", "EXCEL 출력","Excel","question" ); // Excel를 출력하시겠습니까?

            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grd_list, "R&D상품담당자 목록","R&D상품담당자 목록");
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
            this.totalPageCount.set_text(sTotText);
        };

        /***********************************************************************************************
        *  상품 조회팝업 시작
        /***********************************************************************************************/
        /**
         * 조회조건 상품군 멀티조회팝업 클릭시 onclick 이벤트 발생 처리
           몰구분코드	: MALL_SPR_CD   ( 10	SSP Mall , 20	R&D Mall )
         */
        this.div_search_btn_prdGrpPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_prdGrpCd.value);
        	this.fn_setCallPopup01(sCodeId);
        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edt_prdGrpCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_prdGrpNm.set_value("");
        	}
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edt_prdGrpCd_onkeyup = function(obj,e)
        {
        	var sCodeId =  this.gfn_trim(this.div_search.form.edt_prdGrpCd.value);

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
        		this.ds_input.setColumn(nRow,"PRD_CLCD",  sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD",this.mallSprCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);
        		this.ds_input.setColumn(nRow,"START_NUM",  0);

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
        		this.ds_search.setColumn(this.ds_search.rowposition,"PRD_CLCD",    this.ds_popupList.getColumn(0,"PRD_CLCD"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"PRD_CLCD_NM", this.ds_popupList.getColumn(0,"PRD_CLSF_NM"));
        	} else
        	{

        		var params  = { mallSprCd : this.mallSprCd
        					  , coCd      : this.lv_coCd
        					  , prdClcd   : sCodeId };
        		var options = { title     : this.div_search.form.stc_prdGrp.text };

        		this.gfn_openPopup( "SSP_BO_PP_10"
        						  , "PR_POP::SSP_BO_PP_10.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);
        	}
        };
        /**
         * 조회조건 상품군 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_prdGrpMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_prdGrpCd };
            var options = { title  : this.div_search.form.stc_prdGrp.text };

            this.gfn_openPopup(e.fromobject.id
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };

        /***********************************************************************************************
        *  상품 조회팝업 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  제조원 조회팝업 시작
        /***********************************************************************************************/
        /**
         * 조회조건 제조원 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_mnfrPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edt_mnfrCd.value);
        	this.fn_setCallPopup03(sCodeId);
        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edt_mnfrCd_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edt_mnfrNm.set_value("");
        	}
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edt_mnfrCd_onkeyup = function(obj,e)
        {
        	var sCodeId =  this.gfn_trim(this.div_search.form.edt_mnfrCd.value);

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
        		this.ds_input.setColumn(nRow,"CO_CD",      this.lv_coCd);
        		this.ds_input.setColumn(nRow,"MNFR_NO",   sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD",this.mallSprCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);
        		this.ds_input.setColumn(nRow,"START_NUM",  0);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-manufacturer-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=manufacturerList";                               // 물리적 생성 ds_popupList
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"MNFR_NO",	this.ds_popupList.getColumn(0,"MNFR_NO"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"MNFR_NM",	this.ds_popupList.getColumn(0,"MNFR_NM"));
        	} else
        	{
        		var params  = { mnfrNo : sCodeId
        					  , coCd   : this.lv_coCd};
        		var options = { title  : this.div_search.form.stc_mnfr.text };
        		this.gfn_openPopup( "SSP_BO_PP_08"
        						  , "PR_POP::SSP_BO_PP_08.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);

        	}
        };

        /**
         * 조회조건 제조원 멀티입력팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.div_search_btn_mnfrMultiInput_onclick = function(obj,e)
        {
        	var params  = { textId : this.div_search.form.edt_mnfrCd };
        	var options = { title  : this.div_search.form.stc_mnfr.text };
        	this.gfn_openPopup( e.fromobject.id
        	                  , "CO_POP::SSP_BO_PP_13.xfdl"
        					  , params
        					  , "fn_popupCallback"
        					  , options);
        };
        /***********************************************************************************************
        *  제조원 조회팝업 종료
        /***********************************************************************************************/
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
        		this.ds_search.setColumn(this.ds_search.rowposition,"PSN_ID", this.ds_popupList.getColumn(0,"OPRTR_ID"));
        		this.ds_search.setColumn(this.ds_search.rowposition,"PSN_NM", this.ds_popupList.getColumn(0,"OPRTR_NM"));
        	} else
        	{

        		var params  = { empNo : sCodeId
        		              , coCd  : this.lv_coCd };
        		var options = { title : this.div_search.form.stc_chrpsn.text };
        		this.gfn_openPopup( "SSP_BO_PP_27"
        						  , "CO_POP::SSP_BO_PP_27.xfdl"
        						  , params
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
         	var strCoCd               = this.ds_master.getColumn(e.row,"CO_CD");
         	var strPrdClsfChrpsnId    = this.ds_master.getColumn(e.row,"PRD_CLSF_CHRPSN_ID");
        	var strPrdClcd            = this.ds_master.getColumn(e.row,"PRD_CLCD");
        	var strMnfrNo             = this.ds_master.getColumn(e.row,"MNFR_NO");

         	// 담당자ID, 담당자 더블 클릭시 이벤트 발생 처리
         	if(e.cell == obj.getBindCellIndex("body","PRD_CLSF_CHRPSN_ID") || e.cell == obj.getBindCellIndex("body","PRD_CLSF_CHRPSN_NM") )
         	{
         		var params = { coCd            : strCoCd               // CO_CD
        		             , prdClsfChrpsnId : strPrdClsfChrpsnId    // 담당자ID
        					 , prdClcd         : strPrdClcd            // 상품군
        					 , mnfrNo          : strMnfrNo             // 제조사
         		             , reqGubun        : "20"    	 // 요청구분 [자사,협력사,고객]
         					 , autoSearch      : "Y"                 // 팝업 오픈시 자동조회 여부
         					 };

         		this.fn_setCallPopup(params);
         	}
        };

        /**
         * 신규등록 및 목록상세 팝업 호출
         */
        this.fn_setCallPopup = function(params)
        {
        	var lv_sFlag01 	= "Y";						         // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	= params.autoSearch;		         // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 = params.coCd;		             // 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02 = params.prdClsfChrpsnId;		 // 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03 = params.prdClcd;				 // 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04 = params.mnfrNo;					 // 부모에서 넘어가는 파라미터(폼경로)

        	var sPopId 		= "";
        	var sUrl 		= "";
            var sTitle      = "";

        	// 요청구분 [등록:10,상세:20]
        	switch(params.reqGubun)
        	{
        		case "10" :
        		     sPopId = "SSP_BO_RD_40";
        		     sUrl 	= "RD::SSP_BO_RD_40.xfdl";
        			 sTitle = "등록";
        		     break;
        		case "20" :
        		     sPopId = "SSP_BO_RD_41";
        		     sUrl 	= "RD::SSP_BO_RD_41.xfdl";
        			 sTitle = "수정";
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
        	var oOption 		= {titlebar:"false", title : sTitle};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("onkeyup",this.div_search_edt_chrpsnId_onkeyup,this);
            this.div_search.form.edt_chrpsnId.addEventHandler("oninput",this.div_search_edt_chrpsnId_oninput,this);
            this.div_search.form.btn_chrpsnPopup.addEventHandler("onclick",this.div_search_btn_chrpsnPopup_onclick,this);
            this.div_search.form.cmb_dtUnit.addEventHandler("onitemchanged",this.div_search_cmb_dtUnit_onitemchanged,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("onkeyup",this.div_search_edt_mnfrCd_onkeyup,this);
            this.div_search.form.edt_mnfrCd.addEventHandler("oninput",this.div_search_edt_mnfrCd_oninput,this);
            this.div_search.form.btn_mnfrPopup.addEventHandler("onclick",this.div_search_btn_mnfrPopup_onclick,this);
            this.div_search.form.edt_prdGrpCd.addEventHandler("onkeyup",this.div_search_edt_prdGrpCd_onkeyup,this);
            this.div_search.form.edt_prdGrpCd.addEventHandler("oninput",this.div_search_edt_prdGrpCd_oninput,this);
            this.div_search.form.btn_prdGrpPopup.addEventHandler("onclick",this.div_search_btn_prdGrpPopup_onclick,this);
            this.div_search.form.btn_prdGrpMultiInput.addEventHandler("onclick",this.div_search_btn_prdGrpMultiInput_onclick,this);
            this.div_search.form.btn_mnfrMultiInput.addEventHandler("onclick",this.div_search_btn_mnfrMultiInput_onclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.cmb_chrpsnStats.addEventHandler("onitemchanged",this.cmb_chrpsnStats_onitemchanged,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.btn_saveall.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_RD_37.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
