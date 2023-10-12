(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_07");
            this.set_titletext("로그인이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BZCAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CEO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_REG_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_MNG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LGGRP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OSD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POSD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_GRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIZDOC_ATFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTCI_ATFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRWR_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"POPUP_YN\">ALL</Col><Col id=\"DATE_TYPE\">REG</Col><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"USE_YN\">Y</Col><Col id=\"SEARCH_WORD\"/><Col id=\"IPT_PST_TYPE_CD\"/><Col id=\"LOGN_MTHD_CD\"/><Col id=\"DATE_TERM\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_term", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_origin", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"POPUP_YN\">ALL</Col><Col id=\"DATE_TYPE\">REG</Col><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"DATE_TERM\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_log", this);
            obj._setContents("<ColumnInfo><Column id=\"CNCT_LOG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_ODR_DLGTE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_IP_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRWR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_MTHD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_log_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CNCT_LOG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_ODR_DLGTE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_IP_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRWR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_MTHD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ipt", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_brwr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ses", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"CNCT_LOG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_ODR_DLGTE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_IP_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRWR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_MTHD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSrch","0","0",null,"141","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","20","20",null,"32","0",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static21_00","20","51",null,"32","0",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblIddt","530","20","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("0");
            obj.set_text("입력 위치");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblCUST_SPR_CD","20","51","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("1");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblIddt00","lblCUST_SPR_CD:380","51","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("2");
            obj.set_text("로그인ID");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("iptType","lblIddt:10","24","170","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_ipt");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnSrch",null,"93","60","28","0",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"93","60","28","btnSrch:4",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("LOGN_ID","lblIddt00:10","55","171","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("6");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static02_00","264","24","0","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_positionstep("0");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("DATE_TERM","381","25","140","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_term");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblIddt01","lblIddt:191","20","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("9");
            obj.set_text("로그인방식");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("mthdType","lblIddt01:10","24","170","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_type");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_enable("true");
            obj.set_text("");
            obj.set_index("-1");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","160","55","135","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","edt_bzplcId:4","55","194","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("lblBizplc","20","20","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("15");
            obj.set_text("로그인일자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_click1","497","55","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_search02");
            this.divSrch.addChild(obj.name, obj);

            obj = new Calendar("TO_DATE","277","25","100","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("18");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static59_00","264","25",null,"24","TO_DATE:4",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("19");
            obj.set_text("~");
            this.divSrch.addChild(obj.name, obj);

            obj = new Calendar("FROM_DATE","160","25","100","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("17");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.divSrch.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv3","257","965","330","230",null,null,null,null,null,null,this);
            obj.getSetter("positionstep").set("0");
            obj.set_background("#fffff");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("searchStartDate","12","12","149","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_value("");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Calendar("searchEndDate",null,"12","149","172","12",null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_confirm","101",null,"60","24",null,"12",null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("3");
            obj.set_text("Confirm");
            obj.getSetter("uWord").set("popup.ok");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_cancel","169","194","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.getSetter("uWord").set("popup.cancel");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","180","270","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutSave",null,"171","110","28","134",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execl",null,"171","110","28","btnLayoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutClear",null,"171","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","209",null,null,"20","96",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_log");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_cssclass("grd_WF_list");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"350\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"150\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\" autosizecol=\"none\"/><Cell col=\"1\" text=\"입력위치\"/><Cell col=\"2\" text=\"사업장\"/><Cell col=\"3\" text=\"회원ID\"/><Cell col=\"4\" text=\"운영자ID\"/><Cell col=\"5\" text=\"수정자ID\"/><Cell col=\"6\" text=\"세션ID\"/><Cell col=\"7\" text=\"브라우저타입\"/><Cell col=\"8\" text=\"접속자IP\"/><Cell col=\"9\" text=\"로그인방식\"/><Cell col=\"10\" text=\"로그인일시\"/></Band><Band id=\"body\"><Cell text=\"bind:CNCT_LOG_SEQ\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:IPT_PST_TYPE_CD\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:BZPLC_ID\" autosizecol=\"none\"/><Cell col=\"3\" text=\"bind:MBR_ID\" autosizecol=\"none\"/><Cell col=\"4\" text=\"bind:OPRTR_ID\" autosizecol=\"none\"/><Cell col=\"5\" text=\"bind:UPDPSN_ID\" autosizecol=\"none\"/><Cell col=\"6\" text=\"bind:SES_ID\"/><Cell col=\"7\" text=\"bind:BRWR_TYPE\" autosizecol=\"none\"/><Cell col=\"8\" text=\"bind:CNSOL_IP_ADDR\" autosizecol=\"none\"/><Cell col=\"9\" text=\"bind:LOGN_MTHD_NM\" autosizecol=\"none\"/><Cell col=\"10\" text=\"bind:LOGN_DTM\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grdList:30",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel","20","1019",null,null,"20","-374",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_excel");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_cssclass("grd_WF_list");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"입력위치\"/><Cell col=\"2\" text=\"사업장\"/><Cell col=\"3\" text=\"회원ID\"/><Cell col=\"4\" text=\"운영자ID\"/><Cell col=\"5\" text=\"수정자ID\"/><Cell col=\"6\" text=\"세션ID\"/><Cell col=\"7\" text=\"브라우저타입\"/><Cell col=\"8\" text=\"연결IP주소\"/><Cell col=\"9\" text=\"로그인방식\"/><Cell col=\"10\" text=\"로그인일시\"/></Band><Band id=\"body\"><Cell text=\"bind:CNCT_LOG_SEQ\"/><Cell col=\"1\" text=\"bind:IPT_PST_TYPE_CD\"/><Cell col=\"2\" text=\"bind:BZPLC_ID\"/><Cell col=\"3\" text=\"bind:MBR_ID\"/><Cell col=\"4\" text=\"bind:OPRTR_ID\"/><Cell col=\"5\" text=\"bind:UPDPSN_ID\"/><Cell col=\"6\" text=\"bind:SES_ID\"/><Cell col=\"7\" text=\"bind:BRWR_TYPE\"/><Cell col=\"8\" text=\"bind:CNSOL_IP_ADDR\"/><Cell col=\"9\" text=\"bind:LOGN_MTHD_NM\"/><Cell col=\"10\" text=\"bind:LOGN_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSrch.form.LOGN_ID","value","ds_search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSrch.form.DATE_TERM","value","ds_search","DATE_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSrch.form.iptType","value","ds_search","IPT_PST_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSrch.form.edt_bzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSrch.form.edt_bzplcNm","value","ds_search","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSrch.form.mthdType","value","ds_search","LOGN_MTHD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSrch.form.FROM_DATE","value","ds_search","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSrch.form.TO_DATE","value","ds_search","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_07.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_07.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_07.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES : 2022-03-25
        *******************************************************/

        //공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();		// application object
        this.totalCount = 0;							// 전체 카운트
        this.srchForm = this.divSrch.form;	    	// 검색영역 div

        //사업장 관련
        this.searchBzplcId = "";
        this.searchBzplcNm = "";
        this.bzplcCount = 0;
        this.currentBzplcId = "";

        this.oArgs = null;
        var bzplcId = null;
        var bzplcNm = null;

        this.coCd = this.gfn_isNull(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"))?"1000":this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD");
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e) {

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//공통 코드 조회
        	this.fn_commonCodeSearch();
        	//초기 조회기간
        	this.fn_setSearchDate();

        	oArgs = this.getOwnerFrame().arguments["oArgs"];

        	if(oArgs != null)
        	{
        		bzplcId = oArgs.bzplcId;
        		bzplcNm = oArgs.bzplcNm;
        	}

        	if(bzplcId != null && bzplcNm != null){

        	    this.divSrch.form.FROM_DATE.set_enable(false);
        		this.divSrch.form.TO_DATE.set_enable(false);
        		this.divSrch.form.DATE_TERM.set_enable(false);

        	    this.divSrch.form.FROM_DATE.set_value("20220801");
        		this.divSrch.form.edt_bzplcId.set_value(bzplcId);
        		this.divSrch.form.edt_bzplcNm.set_value(bzplcNm);
        	}

        	this.fnSearch(true);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "btnSrch_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});

        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        //조회
        this.fnSearch = function(bInit)	{
        	if(this.divSrch.form.FROM_DATE.value > this.divSrch.form.TO_DATE.value){
        		alert("로그인일자의 종료일이 시작일보다 작습니다.");
        		this.divSrch.form.TO_DATE.setFocus();
        		return;
        	}

        	if(bzplcId != null && bzplcNm != null){
        		this.divSrch.form.mthdType.set_index(2);
        		this.divSrch.form.mthdType.set_value("B0");
        	}

        	var sSvcId = "selectLog";
        	var sUrl   = "/co/select-CoMbrSysCnctLog-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs  = "ds_log=ds_output";
        	var arg;

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0, "START_NUM", 0);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드 조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_term=ds_output1 ds_ipt=ds_output2 ds_type=ds_output3";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,IPT_PST_TYPE_CD,LOGIN_MTHD_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        //엑셀다운로드 데이터 조회
        this.fn_excelSearch = function(){
        	var sSvcId = "excelSearch";
        	var sUrl   = "/co/select-CoMbrSysCnctLog-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_excel=ds_output";
        	var arg;

        	this.ds_search.setColumn(0,"START_NUM", null);
        	this.ds_search.setColumn(0,"ROW_COUNT", null);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg){
        	if(svcID == "selectLog"){
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");	// this.fv_oApp.gv_pageViewCnt <- 페이지당 보여줄 카운트로 따로 지정해야 할 듯.
        	} else if( svcID == "commonCodeSearch" ) {
        		//기간 초기값 설정.
        		this.divSrch.form.DATE_TERM.set_index(1);

        		//로그인 방식 전체값 추가
        		this.ds_type.insertRow(0);
        		this.ds_type.setColumn(0, "COM_DTL_CD", "");
        		this.ds_type.setColumn(0, "COM_DTL_CD_NM", "전체");
        		this.divSrch.form.mthdType.set_index(0);

        		//입력 위치 전체값 추가
        		this.ds_ipt.insertRow(0);
        		this.ds_ipt.setColumn(0, "COM_DTL_CD", "");
        		this.ds_ipt.setColumn(0, "COM_DTL_CD_NM", "전체");
        		this.divSrch.form.iptType.set_index(0);

        		//검색 초기값 설정
        		this.ds_search_origin.copyData(this.ds_search);

        		if(bzplcId != null && bzplcNm != null){
        			this.divSrch.form.mthdType.set_index(2);
        			this.divSrch.form.mthdType.set_enable(false);
        			this.divSrch.form.DATE_TERM.set_index(-1);
        		}

        	}else if( svcID == "excelSearch"){
        		console.log();
        		this.ofn_exportExcel({form:this, grid:this.grd_excel, fileName:"로그인이력조회"});
        	}

        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fnSearch();
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid = null;
        	if(sGridId == "grdList"){
        		oSortInfo = this.grdList.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE", oSortInfo.status);
        		this.fnSearch();
        	}
        };

        //팝업콜백
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	if( sPopupId == "bzplcSinglePop" ){
        		this.ds_search.setColumn(0, "BZPLC_ID", resData.BZPLC_ID);
        		this.ds_search.setColumn(0, "BZPLC_NM", resData.BZPLC_NM);
        	}

        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.grdList.uSortFlag = "false";
        	this.grdList.uServerSortFlag = "true";
        	this.grdList.uSortCallback = "fn_sortCallback";
        	this.grdList.uCellSizeType = "true";

        	// 페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid cell size 변경
        	this.grdList.uCellSizeType = "true";

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grdList";
        	this.grdList.uRightMouse = "true";
        	this.grdList.uPersonalFlag = "true";
        	this.grdList.uDefaultFormat = "CNCT_LOG_SEQ, BZPLC_ID, MBR_ID, OPRTR_ID, UPDPSN_ID, CNSOL_IP_ADDR, LOGN_MTHD_CD, LOGN_DTM, SES_ID, BRWR_TYPE";

        };

        this.cfn_personalPopupClose = function(sRet){
        	this.grdList.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };


        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        //팝업호출
        this.fn_popup = function(type) {
        	 var objParam = {};

        	 if( type == "BZPLC_INFO" ){
        		//사업장 조회 팝업
        		objParam.bzplcId = this.ds_search.getColumn(0, "BZPLC_ID");
        		objParam.bzplcNm = this.ds_search.getColumn(0, "BZPLC_NM");
        		objParam.coCd = this.coCd;
        		this.gfn_openPopup("bzplcSinglePop", "CO_POP::SSP_BO_PP_22.xfdl", objParam, "fn_popupCallback");
        	}
        }

        //조회기간 재설정
        this.fn_setSearchDate = function() {
        	var term = this.divSrch.form.DATE_TERM.value;
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        	/*
        	1	1일
        	2	1주일
        	3	2주일
        	4	1개월
        	5	3개월
        	6	6개월
        	7	1년
        	*/
        	if( term == undefined ) term = "2";

        	objDate.setDate(objDate.getDate()+1);

        	if( term == "1" ) {
        		objDate.setDate(objDate.getDate() -1);
        	} else if( term == "2" ) {
        		objDate.setDate(objDate.getDate() -7);
        	} else if( term == "3" ) {
        		objDate.setDate(objDate.getDate() -14);
        	} else if( term == "4" ) {
        		objDate.setMonth(objDate.getMonth() -1);
        	} else if( term == "5" ) {
        		objDate.setMonth(objDate.getMonth() -3);
        	} else if( term == "6" ) {
        		objDate.setMonth(objDate.getMonth() -6);
        	} else if( term == "7" ) {
        		objDate.setMonth(objDate.getMonth() -12);
        	}

            this.divSrch.form.FROM_DATE.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
            this.divSrch.form.TO_DATE.set_value(sToday);
        }

        //검색영역 초기화
        this.clear = function() {
        	this.ds_search.copyData(this.ds_search_origin);
        	this.fn_setSearchDate();
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //사업장 단일 팝업 호출
        this.btn_click1_onclick = function(obj,e)
        {
        	this.fn_popup("BZPLC_INFO");
        };

        //초기화
        this.divSrch_btnClear_onclick = function(obj,e)
        {
        	this.clear();
        };

        //조회기간 변경 시 달력 날짜 세팅.
        this.Tab00_Tabpage1_div_search_DATE_TERM_onitemchanged = function(obj,e)
        {
        	this.fn_setSearchDate();
        };

        //레이아웃 저장 버튼
        this.btnLayoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grdList", this.grdList.getCurFormatString());

        };

        //레이아웃 초기화
        this.btnLayoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalSave("grdList", this.grdList.uOrgFormat);
        	this.grdList.set_formats(this.grdList.uOrgFormat);
        };

        //초기화 버튼 클릭
        this.divSrch_btnInitSrchForm_onclick = function(obj,e) {
        	this.fnInitSrchForm();
        };
        //조회 버튼 클릭
        this.btnSrch_onclick = function(obj,e) {
        	this.fnSearch(true);
        };

        //엑셀 버튼 클릭
        this.divRslt_btn_execl_onclick = function(obj,e)
        {
        	var listCnt = this.ds_log.getRowCount();
        		if (listCnt == 0)
        		{
        			alert('조회결과가 없습니다.')
        			return;
        		}
        		if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert('조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.');
        		return;
        		}
        	this.fn_excelSearch();
        };

        //조회 영역 엔터키 사용
        this.divSrch_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			if( e.fromobject.id == "edt_bzplcId" || e.fromobject.id == "edt_bzplcNm") {
        				this.fn_popup();
        			} else {
        				this.fnSearch(0);
        			}
        		}
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.divSrch.addEventHandler("onclick",this.divSrch_onclick,this);
            this.divSrch.addEventHandler("onkeyup",this.divSrch_onkeyup,this);
            this.divSrch.form.lblIddt.addEventHandler("onclick",this.divSrch_lblIddt_onclick,this);
            this.divSrch.form.btnSrch.addEventHandler("onclick",this.btnSrch_onclick,this);
            this.divSrch.form.btnClear.addEventHandler("onclick",this.divSrch_btnClear_onclick,this);
            this.divSrch.form.LOGN_ID.addEventHandler("onchanged",this.Div00_Edit38_onchanged,this);
            this.divSrch.form.DATE_TERM.addEventHandler("onitemchanged",this.Tab00_Tabpage1_div_search_DATE_TERM_onitemchanged,this);
            this.divSrch.form.lblBizplc.addEventHandler("onclick",this.divSrch_lblBizplc_onclick,this);
            this.divSrch.form.btn_click1.addEventHandler("onclick",this.btn_click1_onclick,this);
            this.divSrch.form.FROM_DATE.addEventHandler("ondropdown",this.cal_regStartDate_ondropdown,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
            this.btnLayoutSave.addEventHandler("onclick",this.btnLayoutSave_onclick,this);
            this.btn_execl.addEventHandler("onclick",this.divRslt_btn_execl_onclick,this);
            this.btnLayoutClear.addEventHandler("onclick",this.btnLayoutClear_onclick,this);
            this.grdList.addEventHandler("onkeyup",this.grd_list_onkeyup,this);
            this.grdList.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.grd_excel.addEventHandler("onkeyup",this.grd_list_onkeyup,this);
            this.grd_excel.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
