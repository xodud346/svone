(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work04");
            this.set_titletext("메뉴권한변경이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_origin", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chgItm", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chgSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_authGrpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_authRoleCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_coMnuAuthChghstList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RSN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"CHG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RSN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"COUNT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">20</Col><Col id=\"COUNT_NM\">20개씩</Col></Row><Row><Col id=\"COUNT\">50</Col><Col id=\"COUNT_NM\">50개씩</Col></Row><Row><Col id=\"COUNT\">100</Col><Col id=\"COUNT_NM\">100개씩</Col></Row><Row><Col id=\"COUNT\">1000</Col><Col id=\"COUNT_NM\">1000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("static01","20","21",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_transDtm","20","21","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("처리일자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_sendStrDate","125","25","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_between","254","24","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_sendEndDate","265","25","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","395","25","107","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("선택");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_authGrpCd","510","21","70","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("권한그룹");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_authGrpCd","586","25","294","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_authGrpCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_visible("true");
            obj.set_value("0");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_authRoleCd","890","21","70","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("권한역할");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_authRoleCd","970","24","330","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_authRoleCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_visible("true");
            obj.set_value("0");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("static02","20","52",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_chgItmSpr","20","52","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("변경항목/구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_chgItm","125","56","185","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_chgItm");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_visible("true");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_slash","314","53","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("/");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_chgSpr","322","56","180","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_chgSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_visible("true");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_orgCd","510","52","70","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_orgCd","586","56","244","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_orgMltPop00","834",null,"24","24",null,"69",null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_orgTxt00","856",null,"24","24",null,"69",null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_oprtr","890","52","70","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("사용자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprtr","970","56","285","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprtrMltPop","1258",null,"24","24",null,"70",null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprtrTxt","1280",null,"24","24",null,"70",null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("static03","20","83",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_rsn","20","83","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("사유");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_rsn","125","87","755","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"124","60","26","85",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"124","60","26","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","204",null,null,"20","99",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_coMnuAuthChghstList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj.set_positionstep("0");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"120\"/><Column size=\"113\"/><Column size=\"125\"/><Column size=\"116\"/><Column size=\"100\"/><Column size=\"125\"/><Column size=\"182\"/><Column size=\"105\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"항목\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"권한그룹\"/><Cell col=\"4\" text=\"권한역할\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"사용자\"/><Cell col=\"7\" text=\"사유\"/><Cell col=\"8\" text=\"처리자\"/><Cell col=\"9\" text=\"처리일자\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CHG_SEQ\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CHG_ITM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CHG_SPR\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:AUTH_GRP_CD\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:AUTH_ROLE_CD\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:ORG_CD\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:OPRTR_ID\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:RSN\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:REG_DTM\"/><Cell col=\"10\" text=\"bind:BIGO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","179","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutClear",null,"171","110","28","251",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutSave",null,"171","110","28","365",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 저장");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"170","110","28","btnLayoutSave:-339",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page","btnExcel:5","170","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_page");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT_NM");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel","20","1019",null,null,"20","-294",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj.set_positionstep("0");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("none");
            obj.set_autoenter("select");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"120\"/><Column size=\"113\"/><Column size=\"125\"/><Column size=\"116\"/><Column size=\"100\"/><Column size=\"125\"/><Column size=\"182\"/><Column size=\"105\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"항목\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"권한그룹\"/><Cell col=\"4\" text=\"권한역할\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"사용자\"/><Cell col=\"7\" text=\"사유\"/><Cell col=\"8\" text=\"처리자\"/><Cell col=\"9\" text=\"처리일자\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CHG_SEQ\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CHG_ITM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CHG_SPR\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:AUTH_GRP_CD\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:AUTH_ROLE_CD\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:ORG_CD\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:OPRTR_ID\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:RSN\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:REG_DTM\"/><Cell col=\"10\" text=\"bind:BIGO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","form.cbo_page","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.cal_sendStrDate","value","ds_search","STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cal_sendEndDate","value","ds_search","END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cmb_authGrpCd","value","ds_search","AUTH_GRP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.cmb_authRoleCd","value","ds_search","AUTH_ROLE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.cmb_chgItm","value","ds_search","CHG_ITM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.cmb_chgSpr","value","ds_search","CHG_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_orgCd","value","ds_search","ORG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_oprtr","value","ds_search","OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.edt_rsn","value","ds_search","RSN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_39.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_39.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_39.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_39.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_YA_39.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_21
        /* 작 성 일 자 : 2023/06/02
        /* 작  성   자 : 이상민민
        /* 설       명 : 시스템관리 > SMS발송이력조회
        /***********************************************************/


        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp 			= nexacro.getApplication();		//application object
        this.fv_sessionData 	= this.getSession(); 			//session object
        this.totalCount 		= 0; 							//토탈카운트
        this.pageViewCnt		= 50; 							//페이지당 보여줄 목록 개수
        this.check 				= 0;							//초기 checkbox 셋팅값
        this.formId             = this.fn_getFormId(this);      // 등록한 폼의 아디을 기지고 오는 함수


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회(조회기간구분코드)
        	this.fn_commonCodeSearch();

        	// 그리드 헤드클릭이벤트 내부함수 : (헤드클릭시 체크 무력화)
        	this._gfnHeadCheckSelectAll = function(){};

        	//회사코드 설정
        	this.ds_search.setColumn(0,"CO_CD",this.fv_sessionData.coCd);

        	//검색 초기값 설정
        	this.ds_search_origin.copyData(this.ds_search);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "Div00_btn_search_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_inqPerdSprCd=ds_output1 ds_authGrpCd=ds_output2 ds_authRoleCd=ds_output3 ds_chgItm=ds_output4 ds_chgSpr=ds_output5";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,AUTH_GRP_CD,AUTH_ROLE_CD,CHG_ITM,CHG_SPR");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function(page) {
        	var sSvcId = "selectMenuAuthChgHstList";
            var sUrl = "/co/mnu-auth-chg-hst/select-mnu-auth-chg-hst-list.do";
        	var inDs = "ds_search=ds_search"
            var outDs = "ds_coMnuAuthChghstList=ds_output1";
            var arg;
            var callback = "fn_callBack";

        	// 멀티입력 검색조건 Set
        	this.fn_setMultiSearch(this.formId,"ORG_CD", this.ds_search.getColumn(0,"ORG_CD"));       		// 부서
        	this.fn_setMultiSearch(this.formId,"OPRTR_ID", this.ds_search.getColumn(0,"OPRTR_ID"));  	    // 사용자

            // 멀티입력조건 임시 테이블 저장 서비스 호출
            if(this.ds_select.getRowCount() > 0)
            {
        		this.fn_insertMultiData("fn_callBack");
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.formId);
            };

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 this.ds_search.setColumn(0,"ROW_COUNT", this.cbo_page.value);

        	 // 최초 조회일 경우,
        	 if( page == 0 ) {
        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        	 }
        	 // 페이지 전환일 경우
        	 else{
        		 this.ds_search.setColumn(0,"START_NUM", this.div_paging.uPageNum);
        	 }

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //엑셀다운로드
        this.fn_excel_download = function() {
        	 var sSvcId = "selectMenuAuthChgHstExcel";
             var sUrl = "/co/mnu-auth-chg-hst/select-mnu-auth-chg-hst-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_excel=ds_output1";
             var arg;
             var callback = "fn_callBack";

        	this.ds_search.setColumn(0,"START_NUM", null);
        	this.ds_search.setColumn(0,"ROW_COUNT", null);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);

        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch(svcID) {
        		case "commonCodeSearch" :

        			// 조회조건(기간) 기본값 셋팅
        			this.Div00.form.cmb_inqPerdSprCd.set_index(1);
        			this.fn_setPeriodDate();

        			// 권한그룹 기본값 셋팅
        			this.ds_authGrpCd.insertRow(0);
        			this.ds_authGrpCd.setColumn(0, "COM_DTL_CD", "%");
        			this.ds_authGrpCd.setColumn(0, "COM_DTL_CD_NM", "-- 전체 --");
        			this.Div00.form.cmb_authGrpCd.set_index(0);

        			// 권한역할 기본값 셋팅
        			this.ds_authRoleCd.insertRow(0);
        			this.ds_authRoleCd.setColumn(0, "COM_DTL_CD", "%");
        			this.ds_authRoleCd.setColumn(0, "COM_DTL_CD_NM", "-- 전체 --");
        			this.Div00.form.cmb_authRoleCd.set_index(0);

        			// 변경항목 기본값 셋팅
        			this.ds_chgItm.insertRow(0);
        			this.ds_chgItm.setColumn(0, "COM_DTL_CD", "%");
        			this.ds_chgItm.setColumn(0, "COM_DTL_CD_NM", "-- 전체 --");
        			this.Div00.form.cmb_chgItm.set_index(0);

        			// 변경구분 기본값 셋팅
        			this.ds_chgSpr.insertRow(0);
        			this.ds_chgSpr.setColumn(0, "COM_DTL_CD", "%");
        			this.ds_chgSpr.setColumn(0, "COM_DTL_CD_NM", "-- 전체 --");
        			this.Div00.form.cmb_chgSpr.set_index(0);

        			// 조회결과 갯수 셋팅
        			this.cbo_page.set_index(1)

        			break;

        		case "selectMenuAuthChgHstList" :

        			this.div_paging.set_visible(this.totalCount > 0);

        			//페이징 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.cbo_page.value, "fn_pageCallback");
        			// Multi검색조회 데이터 존재시 초기화
        			this.fn_deleteMultiData("fn_callBack");

        			break;

        		case "selectMenuAuthChgHstExcel" :
        			this.ofn_exportExcel({ form:this, grid:this.grd_excel, fileName:"메뉴권한변경이력조회" });
        			break;

        		default : "";
        	}

        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		//this.ds_search.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.div_paging.uPageNum);
        		this.fn_search();
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;

        		this.ds_search.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_search();
        	}
        };

        //조건 팝업 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	switch(sPopupId){

        		case "orgMultiPop":
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.ORG_CD + ",";
        				sNmList += rtnData.ORG_NM + ",";
        			}
        			this.ds_search.setColumn(0,"ORG_CD",sIdList.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"ORG_NM",sNmList.replace(/,\s*$/, ""));
        			break;

        		case "oprtrMultiPop":
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.OPRTR_ID + ",";
        				sNmList += rtnData.OPRTR_NM + ",";
        			}
        			this.ds_search.setColumn(0,"OPRTR_ID",sIdList.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"OPRTR_NM",sNmList.replace(/,\s*$/, ""));
        			break;

        		default :
        			break;
        	}
        };

        //조건 멀티 텍스트 팝업 콜백
        this.fn_multiTextPopupCallback = function(objID, rtnValue) {
        	var resParam = JSON.parse(rtnValue);
        	var splitedStringArr = resParam.textValue.split(",");

        	switch(objID){

        		case "orgMultiTextPopup":
        			this.ds_search.setColumn(0,"ORG_CD",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"ORG_NM",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			break;

        		case "oprtrMultiTextPopup":
        			this.ds_search.setColumn(0,"OPRTR_ID",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			break;

        		default :
        			break;
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";
        	this.grd_list.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_list";
        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        	this.grd_list.uDefaultFormat = "ROW_NO,CHG_ITM,CHG_SPR,AUTH_GRP_CD,AUTH_ROLE_CD,ORG_CD,OPRTR_NM,RSN,REGPSN_ID,REGPSN_DTM,BIGO";

        }

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 검색영역 초기화
        this.clear = function() {
        	//검색 초기값 설정
        	this.ds_search.copyData(this.ds_search_origin);

        	// 발송일자 설정
        	this.Div00.form.cmb_inqPerdSprCd.set_index(1);
        	this.fn_setPeriodDate();

        	// 권한그룹 기본값 셋팅
        	this.Div00.form.cmb_authGrpCd.set_index(0);

        	// 권한역할 기본값 셋팅
        	this.Div00.form.cmb_authRoleCd.set_index(0);

        	// 변경항목 기본값 셋팅
        	this.Div00.form.cmb_chgItm.set_index(0);

        	// 변경구분 기본값 셋팅
        	this.Div00.form.cmb_chgSpr.set_index(0);

        	// Multi검색조회 데이터 존재시 초기화
            this.fn_deleteMultiData("fn_callBack");

        	// 조회결과 갯수 셋팅
        	this.cbo_page.set_index(1);
        };

        //조회기간 설정
        this.fn_setPeriodDate = function(){
        	var term = this.Div00.form.cmb_inqPerdSprCd.value;

        	if(term == "1") { this.Div00.form.cal_sendStrDate.set_value(this.gfn_addDate(this.gfn_getDate(),0)); } //1일
        	else if(term == "2") {this.Div00.form.cal_sendStrDate.set_value(this.gfn_addDate(this.gfn_getDate(),-6)) } //1주
        	else if(term == "3") {this.Div00.form.cal_sendStrDate.set_value(this.gfn_addDate(this.gfn_getDate(),-13)); } //2주
        	else if(term == "4") {this.Div00.form.cal_sendStrDate.set_value(this.gfn_addMonth(this.gfn_addDate(this.gfn_getDate(),+1),-1)); } //1개월
        	else if(term == "5") {this.Div00.form.cal_sendStrDate.set_value(this.gfn_addMonth(this.gfn_addDate(this.gfn_getDate(),+1),-3)); } //3개월
        	else if(term == "6") {this.Div00.form.cal_sendStrDate.set_value(this.gfn_addMonth(this.gfn_addDate(this.gfn_getDate(),+1),-6)); } //6개월
        	else if(term == "7") {this.Div00.form.cal_sendStrDate.set_value(this.gfn_addMonth(this.gfn_addDate(this.gfn_getDate(),+1),-12)); } //1년

        	this.Div00.form.cal_sendEndDate.set_value(this.gfn_getDate());
        }


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //조회버튼
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	this.fn_search(0);
        };

        //레이아웃 저장 버튼
        this.btnLayoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        //레이아웃 초기화
        this.btnLayoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        //초기화
        this.Div00_btnClear_onclick = function(obj,e)
        {
        	this.clear();
        };

        // 엑셀추출버튼
        this.btnExcel_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert(this.gfn_getMessage("COMS000007")); //조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.
        		return false;
        	}

        	this.fn_excel_download();
        };

        // 발송일자 기간 설정
        this.cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setPeriodDate();
        };

        //페이징 갯수 목록 변경시
        this.cbo_page_onitemchaged = function(obj,e)
        {
        	this.Div00_btn_search_onclick();
        };

        //부서 조건 팝업
        this.Div00_btn_orgMltPop_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var objParam = {
        		coCd : this.fv_sessionData.coCd,
        		orgId: this.Div00.form.edt_orgCd.value,
        		orgNm: ""
        	};
        	this.gfn_openPopup("orgMultiPop", "CO_POP::SSP_BO_PP_46.xfdl", objParam);
        };

        //부서 조건 텍스트 입력 팝업
        this.Div00_btn_orgTxt_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.Div00.form.edt_orgCd
        	};

        	var options = {};
        	options.title = "부서";

        	this.gfn_openPopup("orgMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };

        //사용자 조건 팝업
        this.Div00_btn_oprtrMltPop_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var objParam = {
        		coCd : this.fv_sessionData.coCd,
        		orgId: this.Div00.form.edt_oprtr.value,
        		orgNm: ""
        	};
        	this.gfn_openPopup("oprtrMultiPop", "CO_POP::SSP_BO_PP_47.xfdl", objParam);
        };

        //사용자 조건 텍스트 입력 팝업
        this.Div00_btn_oprtrTxt_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.Div00.form.edt_oprtr
        	};

        	var options = {};
        	options.title = "사용자";

        	this.gfn_openPopup("oprtrMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.addEventHandler("onkeyup",this.Div00_onkeyup,this);
            this.Div00.form.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd_onitemchanged,this);
            this.Div00.form.edt_orgCd.addEventHandler("onchanged",this.div00_edt_orgCd_onchanged,this);
            this.Div00.form.btn_orgMltPop00.addEventHandler("onclick",this.Div00_btn_orgMltPop_onclick,this);
            this.Div00.form.btn_orgTxt00.addEventHandler("onclick",this.Div00_btn_orgTxt_onclick,this);
            this.Div00.form.btn_oprtrMltPop.addEventHandler("onclick",this.Div00_btn_oprtrMltPop_onclick,this);
            this.Div00.form.btn_oprtrTxt.addEventHandler("onclick",this.Div00_btn_oprtrTxt_onclick,this);
            this.Div00.form.edt_rsn.addEventHandler("onchanged",this.Div00_edt_rsns_onchanged,this);
            this.Div00.form.btnClear.addEventHandler("onclick",this.Div00_btnClear_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.btnLayoutClear.addEventHandler("onclick",this.btnLayoutClear_onclick,this);
            this.btnLayoutSave.addEventHandler("onclick",this.btnLayoutSave_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.cbo_page.addEventHandler("onitemchanged",this.cbo_page_onitemchaged,this);
        };
        this.loadIncludeScript("SSP_BO_YA_39.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
