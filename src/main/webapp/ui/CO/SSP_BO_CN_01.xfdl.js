(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_01");
            this.set_titletext("공지사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(1338,843);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_NOTC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"POPUP_YN\">ALL</Col><Col id=\"DATE_TYPE\">REG</Col><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"DATE_TERM\">1</Col><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTCC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_NOTC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTCC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ALL</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trem", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_origin", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"POPUP_YN\">ALL</Col><Col id=\"DATE_TYPE\">REG</Col><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"DATE_TERM\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_optr_info", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_list", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTCC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PopupDiv("PopupDiv3","364","905","315","220",null,null,null,null,null,null,this);
            obj.getSetter("positionstep").set("0");
            obj.set_background("#fffff");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("searchStartDate","1","2","150","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_value("");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Calendar("searchEndDate","searchStartDate:14","2","150","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_confirm","93","192","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("3");
            obj.set_text("Confirm");
            obj.getSetter("uWord").set("popup.ok");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_cancel","163","192","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.getSetter("uWord").set("popup.cancel");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"170","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","20",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04_00","0","20","90","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("팝업여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("POPUP_YN","Static04_00:10","24","252","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_popupYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","0","82",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06_00","702","20","100","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("대상");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("TGT_SET_YN","Static06_00:10","24","120","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_TGT_SET_YN_innerdataset = new nexacro.NormalDataset("div_search_form_TGT_SET_YN_innerdataset", obj);
            div_search_form_TGT_SET_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ALL</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">로그인전</Col><Col id=\"codecolumn\">P</Col></Row><Row><Col id=\"datacolumn\">로그인후(전체)</Col><Col id=\"codecolumn\">A</Col></Row><Row><Col id=\"datacolumn\">고객</Col><Col id=\"codecolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_TGT_SET_YN_innerdataset);
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("TARGET_ID","TGT_SET_YN:4","24","107","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("TARGET_VALUE","TARGET_ID:5","24","239","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnTarget","1291","24","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_multi");
            obj.set_enable("false");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"123","60","26","64",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"123","60","26","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","365","20","125","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("상단공지 여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("TOP_NOTC_YN","Static04_00_00:10","24",null,"24","Static06_00:10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_TOP_NOTC_YN_innerdataset = new nexacro.NormalDataset("div_search_form_TOP_NOTC_YN_innerdataset", obj);
            div_search_form_TOP_NOTC_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_TOP_NOTC_YN_innerdataset);
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","51",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0","51","90","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("REGPSN_ID","Static02:10","55","96","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("REGPSN_NM","REGPSN_ID:4","55","124","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button39","REGPSN_NM:4","55","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","702","51","100","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("DATE_TYPE","Static06:10","55","120","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_DATE_TYPE_innerdataset = new nexacro.NormalDataset("div_search_form_DATE_TYPE_innerdataset", obj);
            div_search_form_DATE_TYPE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REG</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">STR</Col><Col id=\"datacolumn\">게시일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_DATE_TYPE_innerdataset);
            obj.set_text("등록일");
            obj.set_value("REG");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("FROM_DATE","DATE_TYPE:4","55","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_calendar");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02_00","FROM_DATE:4","55","10","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("~");
            obj.set_positionstep("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("TO_DATE","Static02_00:2","55","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("DATE_TERM","TO_DATE:4","55","82","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_trem");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","365","51","125","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_text("검색어(제목,내용)");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("SEARCH_WORD","Static04:10","55",null,"24","Static06:10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04_01","0","82","90","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("USE_YN","Static04_01:10","86","252","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_notice","0","236",null,null,"0","54",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"252\"/><Column size=\"181\"/><Column size=\"109\"/><Column size=\"105\"/><Column size=\"103\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"71\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"공지대상\"/><Cell col=\"3\" text=\"게시 시작일\"/><Cell col=\"4\" text=\"게시 종료일\"/><Cell col=\"5\" text=\"등록일\"/><Cell col=\"6\" text=\"조회수\"/><Cell col=\"7\" text=\"등록자\"/><Cell col=\"8\" text=\"팝업여부\"/><Cell col=\"9\" text=\"상단공지여부\"/><Cell col=\"10\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:NOTCC_SEQ\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:NOTCC_TTL\" textDecoration=\"underline\" cursor=\"pointer\" textAlign=\"left\" cssclass=\"grid_active\"/><Cell col=\"2\" text=\"bind:NOTCC_NOTIC_SPR_CD\"/><Cell col=\"3\" text=\"bind:NOTIC_STR_DT\" maskedittrimtype=\"none\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:NOTIC_END_DT\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"5\" text=\"bind:REG_DTM\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"6\" text=\"bind:NOTCC_INQ_CNT\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"8\" text=\"expr:POPUP_YN == &apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\" textAlign=\"center\"/><Cell col=\"9\" text=\"expr:TOP_NOTC_YN == &apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\"/><Cell col=\"10\" text=\"expr:USE_YN == &apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","0",null,null,"24","1068","grd_notice:10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutClear",null,"div_search:30","99","28","1",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutSave",null,"div_search:30","99","28","btnLayoutClear:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"div_search:30","110","28","btnLayoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btnRegist",null,"div_search:30","81","28","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등 록");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_notice:10",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_notice_excel","20","1273",null,null,"228","-497",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_excel_list");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"252\"/><Column size=\"181\"/><Column size=\"109\"/><Column size=\"105\"/><Column size=\"103\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"71\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"공지대상\"/><Cell col=\"3\" text=\"게시 시작일\"/><Cell col=\"4\" text=\"게시 종료일\"/><Cell col=\"5\" text=\"등록일\"/><Cell col=\"6\" text=\"조회수\"/><Cell col=\"7\" text=\"등록자\"/><Cell col=\"8\" text=\"팝업여부\"/><Cell col=\"9\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:NOTCC_SEQ\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:NOTCC_TTL\" textDecoration=\"underline\" cursor=\"pointer\" textAlign=\"left\" cssclass=\"grid_active\"/><Cell col=\"2\" text=\"bind:NOTCC_NOTIC_SPR_CD\"/><Cell col=\"3\" text=\"bind:NOTIC_STR_DT\" maskedittrimtype=\"none\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:NOTIC_END_DT\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"5\" text=\"bind:REG_DTM\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"6\" text=\"bind:NOTCC_INQ_CNT\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"8\" text=\"expr:POPUP_YN == &apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\" textAlign=\"center\"/><Cell col=\"9\" text=\"expr:USE_YN == &apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_multiText","1314","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1338,843,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","div_search.form.TARGET_VALUE","value","ds_search","TARGET_VALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.POPUP_YN","value","ds_search","POPUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.TARGET_ID","value","ds_search","TARGET_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_search.form.TOP_NOTC_YN","value","ds_search","TOP_NOTC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.REGPSN_ID","value","ds_search","REGPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.REGPSN_NM","value","ds_search","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.DATE_TYPE","value","ds_search","DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.FROM_DATE","value","ds_search","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.TO_DATE","value","ds_search","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.DATE_TERM","value","ds_search","DATE_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.SEARCH_WORD","value","ds_search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.USE_YN","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_search.form.TGT_SET_YN","value","ds_search","TGT_SET_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_01.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CN_01.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_CN_01
        /* 작 성 일 자 : 2022/02/15
        /* 작  성   자 : 이성민
        /* 설       명 : 공지사항
        /***********************************************************/

        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;	//전체 카운트
        this.noticeForm = this.div_search.form;	//검색영역 div

        //등록자 자동조회 위한 변후
        this.oprtrInfoCount = 0;
        this.selectRegpsnId = "";
        this.selectRegpsnNm = "";

        this.gds_userInfo = this.fv_oApp.gds_userInfo;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//콤보박스 기본값 초기화
        	//this.noticeForm.DATE_TYPE.set_index(0);


        	//라디오 초기값 설정.
        	//this.ds_popupYN.setColumn(0, "CODE", "ALL");

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//초기값
        	this.grd_notice.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");

        	//조회
        	//this.fn_search(0);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "div_search_btnSearch_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "Tab00_Tabpage1_btnRegist_onclick",
        	});
        };



        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function(page) {
        	 var sSvcId = "selectNotice";
             var sUrl = "/co/select-notice-list.do";
        	 var inDs = "ds_search=ds_search ds_oprUnit=ds_oprUnit"
             var outDs = "ds_list=ds_output";
             var arg;
             var callback = "fn_callBack";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {

        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);

        		oSortInfo = this.grd_notice.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN", "");
        		this.ds_search.setColumn(0,"SORT_TYPE", "");
        	 }

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //엑셀 다운로드용
        this.fn_search_excel = function() {
        	var sSvcId = "selectNoticeExcel";
             var sUrl = "/co/select-notice-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_excel_list=ds_output";
             var arg;
             var callback = "fn_callBack";

        	 this.ds_search.setColumn(0,"START_NUM", null);
        	 this.ds_search.setColumn(0,"ROW_COUNT", null);

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }


        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_trem=ds_output1 ds_useYn=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,USE_YN");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg){
        	if(svcID == "selectNotice"){
        		//trace(this.ds_sampleList.saveXML());

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        		if( this.ds_list.rowcount == 0 ) {
        			//조회결과 없을 시 메세지
        			this.grd_notice.set_nodatatext("조회 결과가 없습니다.");
        			this.ds_list.copyData(this.ds_list_copy);
        		}

        		//paging 처리
        		//this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");	// this.fv_oApp.gv_pageViewCnt <- 페이지당 보여줄 카운트로 따로 지정해야 할 듯.
        		//this.div_paging.form.cfn_createPage(this.div_paging,1912,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        	} else if( svcID == "commonCodeSearch" ) {

        		//기간 초기값 설정.
        		this.noticeForm.DATE_TERM.set_index(6);

        		//사용여부 전체값 추가
        		this.ds_useYn.insertRow(0);
        		this.ds_useYn.setColumn(0, "COM_DTL_CD", "");
        		this.ds_useYn.setColumn(0, "COM_DTL_CD_NM", "전체");
        		this.noticeForm.USE_YN.set_index(1);

        		//상단 여부
        		this.div_search.form.TOP_NOTC_YN.set_index(0);

        		//대상
        		this.div_search.form.TGT_SET_YN.set_index(0);

        		//초기 조회기간
        		this.fn_setSearchDate();

        		//검색 초기값 설정
        		this.ds_search_origin.copyData(this.ds_search);

        	} else if( svcID == "selectMbrOprtrInfoList" ) {
        		if( this.oprtrInfoCount > 1 ) {
        			this.fn_popup("OPRTR_INFO");
        		} else if( this.oprtrInfoCount == 1 ) {
        			this.ds_search.setColumn(0, "REGPSN_ID", this.selectRegpsnId);
        			this.ds_search.setColumn(0, "REGPSN_NM", this.selectRegpsnNm);
        		} else {
        			alert(this.gfn_getMessage("ERRN000035")); //검색된 내용이 없습니다
        		}

        	} else  if( svcID == "selectNoticeExcel" ) {
        		this.ofn_exportExcel({ form:this, grid:this.grd_notice_excel, fileName:"공지사항" });

        	}

        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		//this.ds_search.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_search();
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_notice"){
        		oSortInfo = this.grd_notice.uaSortInfo;

        		this.ds_search.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_search();
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

        	//대상조회 팝업
        	if( sPopupId == "oprUntMultiPop" ){

        		this.ds_oprUnit.clearData();

        		for(var i = 0; i < resData.length; i++){
        			var rtnData = JSON.parse(resData[i]);
        			sNmList += rtnData.OPR_UNIT_NM +",";
        			sIdList += rtnData.OPR_UNIT_ID +",";

        			//데이터셋 별도 지정.
        			var row = this.ds_oprUnit.addRow();
        			this.ds_oprUnit.setColumn(row, "OPR_UNIT_ID", rtnData.OPR_UNIT_ID);
        			this.ds_oprUnit.setColumn(row, "OPR_UNIT_NM", rtnData.OPR_UNIT_NM);
        			this.ds_oprUnit.setColumn(row, "CO_CD", rtnData.CO_CD);
        			this.ds_oprUnit.setColumn(row, "BZPLC_ID", rtnData.BZPLC_ID);
        		}

        		this.ds_search.setColumn(0, "TARGET_ID", sIdList.replace(/,\s*$/, ""));
        		this.ds_search.setColumn(0, "TARGET_VALUE", sNmList.replace(/,\s*$/, ""));

        	} else if( sPopupId == "oprtrInfoPop" ){
        		this.ds_search.setColumn(0, "REGPSN_ID", resData.OPRTR_ID);
        		this.ds_search.setColumn(0, "REGPSN_NM", resData.OPRTR_NM);

        	} else if( sPopupId == "multiTextPopup" ) {
        		this.div_search.form.TARGET_ID.set_value(resData.textValue);

        		var oprUnitList = resData.textValue.split(",");

        		this.ds_oprUnit.clearData();
        		for(var i = 0; i < oprUnitList.length; i++){
        			//데이터셋 별도 지정.
        			var row = this.ds_oprUnit.addRow();
        			this.ds_oprUnit.setColumn(row, "OPR_UNIT_ID", oprUnitList[i]);
        		}

        	}

        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.grd_notice.uSortFlag = "false";
        	this.grd_notice.uServerSortFlag = "true";
        	this.grd_notice.uSortCallback = "fn_sortCallback";

        	this.grd_notice.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid cell size 변경
        	this.grd_notice.uCellSizeType = "true";

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_notice";
        	this.grd_notice.uRightMouse = "true";
        	this.grd_notice.uPersonalFlag = "true";
        	this.grd_notice.uDefaultFormat = "NOTCC_TTL,DOC_REG_ID,NOTIC_STR_DT,NOTIC_END_DT,REG_DTM,NOTCC_INQ_CNT,REGPSN_ID,POPUP_YN,USE_YN";

        };

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_notice.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 검색영역 초기화
        this.clear = function() {
        	this.ds_search.copyData(this.ds_search_origin);
        	this.fn_setSearchDate();
        };

        //달력 close  이벤트
        this.PopupDiv3_oncloseup = function(obj,e)
        {
        	if(this.PopupDiv3.form.searchStartDate.value > this.PopupDiv3.form.searchEndDate.value){
        		alert(this.gfn_getMessage("ERRC000192")); //시작일이 종료일보다 클 수 없습니다.
        		this.Tab00.Tabpage1.form.div_search.form.TO_DATE.set_value("");
        	}
        };


        //조회기간 재설정
        this.fn_setSearchDate = function() {

        	var term = this.noticeForm.DATE_TERM.value;
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
        	//console.log(objDate + "/" + objDate.getFullYear() + "/" + (objDate.getMonth() +1) + "/" + objDate.getDate());

            this.noticeForm.FROM_DATE.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
            this.noticeForm.TO_DATE.set_value(sToday);

        }

        //상세 팝업 클릭 이벤트
        this.fn_noticeDetailPopup = function(type) {

        	var dataset = this.ds_list;
        	var objParam = {};
        	var popupPage = "CO_POP::SSP_BO_CN_02.xfdl";

        	objParam.type = type;
        	if( type == "U" ) {
        		var noticeSeq = dataset.getColumn(dataset.rowposition, "NOTCC_SEQ");
        		//set params
        		objParam.noticeSeq = noticeSeq;

        		popupPage = "CO_POP::SSP_BO_CN_03.xfdl";
        	}

        	this.gfn_openPopup("SSP_BO_CN_02", popupPage, objParam, "fn_popupCallback");
        }

        //팝업호출
        this.fn_popup = function(type) {
        	var objParam = {
        		coCd : this.gds_userInfo.getColumn(0, "CO_CD")
        	};


        	if( type == "TARGET" ){
        		//운영단위 조회 팝업
        		this.gfn_openPopup("oprUntMultiPop", "CO_POP::SSP_BO_PP_23.xfdl", objParam, "fn_popupCallback");

        	} else if( type == "OPRTR_INFO" ){
        		// 등록자 조회 팝업
        		objParam.empNp = this.ds_search.getColumn(0, "REGPSN_ID");
        		objParam.oprtrNm = this.ds_search.getColumn(0, "REGPSN_NM");
        		this.gfn_openPopup("oprtrInfoPop", "CO_POP::SSP_BO_CN_26.xfdl", objParam, "fn_popupCallback");

        	}
        }

        // 상세화면에서 호출하는 닫기 이벤트 함수
        this.fn_detailClose = function(type) {
        	if( type == "save" ) {
        		alert(this.gfn_getMessage("ERRC000079")); //저장되었습니다
        		this.fn_search(0);
        	}
        }

        //팝업 입력창에 입력 후 엔터 칠 경우.
        this.fn_popupAutoSearch = function(id, url) {
        	if( "selectMbrOprtrInfoList" == id ) {
        		var sSvcId = id;
        		var sUrl = url;
        		var inDs = "ds_search=ds_optr_info";
        		var outDs = "";
        		var arg = "";

        		this.ds_optr_info.setColumn(0, "LANG_CD", "KO");
        		this.ds_optr_info.setColumn(0, "EMP_NO", this.ds_search.getColumn(0, "REGPSN_ID"));
        		this.ds_optr_info.setColumn(0, "OPRTR_NM", this.ds_search.getColumn(0, "REGPSN_NM"));

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        }


        //콤보박스 변경 이벤트
        this.fn_comboChange = function(objId) {
        	if( "TGT_SET_YN" == objId ) {
        		//초기화
        		this.ds_oprUnit.clearData();
        		this.div_search.form.TARGET_ID.set_value("");
        		this.div_search.form.TARGET_VALUE.set_value("");

        		if( this.noticeForm[objId].value == "Y" ) {
        			this.noticeForm.TARGET_ID.set_enable(true);
        			this.noticeForm.TARGET_VALUE.set_enable(true);
        			this.noticeForm.btnTarget.set_enable(true);
        		} else {
        			this.noticeForm.TARGET_ID.set_enable(false);
        			this.noticeForm.TARGET_VALUE.set_enable(false);
        			this.noticeForm.btnTarget.set_enable(false);
        			//this.ds_search.setColumn(0, "TGT_SET_YN", "");
        		}
        	}
        }
        //검색어 특수문자 이벤트
        this.fn_searchWord = function() {
         	 var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;	//정규식 구문
 	 var searchWord = this.div_search.form.SEARCH_WORD.value;

         	    if(regExp.test(searchWord)){
         	       alert("특수문자는 입력하실수 없습니다.");
         	      return false;
        	   }
        	 return true;
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //달력 드롭다운
        this.DATE_ondropdown = function(obj,e) {
        	this.PopupDiv3.form.searchStartDate.set_value(this.ds_search.getColumn(0, "FROM_DATE"));
        	this.PopupDiv3.form.searchEndDate.set_value(this.ds_search.getColumn(0, "TO_DATE"));
        	this.PopupDiv3.trackPopupByComponent(this.noticeForm.FROM_DATE, 0, obj.height);
        };


        //달력의 확인버튼
        this.PopupDiv3_btn_confirm_onclick = function(obj,e) {

        	var sFrom = this.PopupDiv3.form.searchStartDate.value;
        	var sTo = this.PopupDiv3.form.searchEndDate.value;

        	this.ds_search.setColumn(0, "FROM_DATE", sFrom);
        	this.ds_search.setColumn(0, "TO_DATE", sTo);

        	this.PopupDiv3.closePopup();

        };


        //달력 취소버튼
        this.PopupDiv3_btn_cancel_onclick = function(obj,e)
        {
        	this.PopupDiv3.closePopup();
        };

        //초기화
        this.div_search_btnClear_onclick = function(obj,e)
        {
        	this.clear();
        };

        //조회
        this.div_search_btnSearch_onclick = function(obj,e)
        {
        	if(this.fn_searchWord()){
        	if( this.ds_search.getColumn(0, "TGT_SET_YN") == "Y" ) {
        		if( this.gfn_isNull(this.ds_search.getColumn(0, "TARGET_ID")) ) {
        			alert("대상을 설정해 주십시오.");
        			this.div_search.form.btnTarget.click();
        			return false;
        		}
        	}
        	this.fn_search(0);
        	}
        };

        //조회기간 변경 시 달력 날짜 세팅.
        this.Tab00_Tabpage1_div_search_DATE_TERM_onitemchanged = function(obj,e)
        {
        	this.fn_setSearchDate();
        };

        // 그리드 더블클릭
        this.Tab00_Tabpage1_grd_notice_oncelldblclick = function(obj,e)
        {

        };

        // 대상 팝업조회
        this.Tab00_Tabpage1_div_search_btnTarget_onclick = function(obj,e)
        {
        	this.fn_popup("TARGET");
        };

        // 그리드 클릭
        this.Tab00_Tabpage1_grd_notice_oncellclick = function(obj,e)
        {
        	this.fn_noticeDetailPopup("U");
        };

        //등록버튼
        this.Tab00_Tabpage1_btnRegist_onclick = function(obj,e)
        {
        	this.fn_noticeDetailPopup("N");
        };

        //등록자 조회 팝업
        this.Tab00_Tabpage1_div_search_Button39_onclick = function(obj,e)
        {
        	this.fn_popup("OPRTR_INFO");
        };

        //키업 이벤트
        /*this.div_search_onkeyup = function(obj:nexacro.Div,e:nexacro.KeyEventInfo)
        {
        	if( e.keycode == 13 ) {
        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			if( e.fromobject.id == "REGPSN_ID" || e.fromobject.id == "REGPSN_NM") {
        				this.fn_popupAutoSearch("selectMbrOprtrInfoList", "/co/popup/select-mbr-oprtr-info-list.do");
        			} else {
        				this.fn_search(0);
        			}
        		}
        	}
        };*/

        this.div_search_TGT_SET_YN_onitemchanged = function(obj,e)
        {
        	this.fn_comboChange("TGT_SET_YN");
        };


        //레이아웃 저장 버튼
        this.btnLayoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_notice", this.grd_notice.getCurFormatString());
        };

        //레이아웃 초기화
        this.btnLayoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalReset("grd_notice");
        	this.grd_notice.set_formats(this.grd_notice.uOrgFormat);
        };


        this.fn_date_oncloseup = function(obj,e)
        {
        	if(this.div_search.form.FROM_DATE.value > this.div_search.form.TO_DATE.value){
        		alert(this.gfn_getMessage("ERRC000192")); //시작일이 종료일보다 클 수 없습니다.
        		//this.div_search.form.FROM_DATE.set_value(this.ds_regsdate.setColumn(0,"FROM_DATE",regsdate));
        		// dropdown 실행 시 모든 버튼 비활성화 되는 오류 발생
        		//this.div_search.form.FROM_DATE.dropdown();
        		return ;
        	}
        };

        //엑셀 다운로드
        this.btn_excelDown_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert(this.gfn_getMessage("COMS000007")); //조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.
        		return false;
        	}
        	this.fn_search_excel();
        };

        //멀티
        this.btn_multiText_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.div_search.form.TARGET_ID
        	};

        	this.gfn_openPopup("multiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
            this.div_search.form.TGT_SET_YN.addEventHandler("onitemchanged",this.div_search_TGT_SET_YN_onitemchanged,this);
            this.div_search.form.btnTarget.addEventHandler("onclick",this.Tab00_Tabpage1_div_search_btnTarget_onclick,this);
            this.div_search.form.btnClear.addEventHandler("onclick",this.div_search_btnClear_onclick,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.div_search_btnSearch_onclick,this);
            this.div_search.form.Button39.addEventHandler("onclick",this.Tab00_Tabpage1_div_search_Button39_onclick,this);
            this.div_search.form.FROM_DATE.addEventHandler("oncloseup",this.fn_date_oncloseup,this);
            this.div_search.form.TO_DATE.addEventHandler("onchanged",this.fn_date_oncloseup,this);
            this.div_search.form.DATE_TERM.addEventHandler("onitemchanged",this.Tab00_Tabpage1_div_search_DATE_TERM_onitemchanged,this);
            this.div_search.form.SEARCH_WORD.addEventHandler("onchanged",this.Div00_Edit38_onchanged,this);
            this.grd_notice.addEventHandler("oncellclick",this.Tab00_Tabpage1_grd_notice_oncellclick,this);
            this.btnLayoutClear.addEventHandler("onclick",this.btnLayoutClear_onclick,this);
            this.btnLayoutSave.addEventHandler("onclick",this.btnLayoutSave_onclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btnRegist.addEventHandler("onclick",this.Tab00_Tabpage1_btnRegist_onclick,this);
            this.grd_notice_excel.addEventHandler("oncellclick",this.Tab00_Tabpage1_grd_notice_oncellclick,this);
            this.btn_multiText.addEventHandler("onclick",this.btn_multiText_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
