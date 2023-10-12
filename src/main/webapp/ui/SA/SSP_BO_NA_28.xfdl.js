(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_28");
            this.set_titletext("프로모션 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRM_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_STATS\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pmtPopupList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"URL_CNSOL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"URL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_PST\" type=\"STRING\" size=\"256\"/><Column id=\"LEFT_PST\" type=\"STRING\" size=\"256\"/><Column id=\"FLTG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NLOOK_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_PAGE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_PAGE_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCPT_PAGE_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRM_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_STATS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/><Col id=\"USE_YN_NM\">전체</Col></Row><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col></Row><Row><Col id=\"USE_YN_NM\">미 사용</Col><Col id=\"USE_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtnOprUnitCheckList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_expsNoticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_paging","7",null,null,"38","23","8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutReset",null,"232","100","28","21",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"232","100","28","125",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regist",null,"232","81","28","343",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_pmtPopupList","20","270",null,null,"20","56",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_pmtPopupList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순서\"/><Cell col=\"1\" text=\"사용여부\"/><Cell col=\"2\" text=\"팝업상태\"/><Cell col=\"3\" text=\"노출페이지\"/><Cell col=\"4\" text=\"외부인입\"/><Cell col=\"5\" text=\"프로모션 명\"/><Cell col=\"6\" text=\"전시시작일\"/><Cell col=\"7\" text=\"전시종료일\"/><Cell col=\"8\" text=\"등록일\"/><Cell col=\"9\" text=\"수정일\"/><Cell col=\"10\" text=\"등록자사번\"/><Cell col=\"11\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:DISP_SO\"/><Cell col=\"1\" text=\"bind:USE_YN\" expr=\"USE_YN == &apos;Y&apos; ? &apos; 사용&apos; : &apos;미사용&apos;\"/><Cell col=\"2\" text=\"bind:PMT_POPUP_STATS\" expr=\"PMT_POPUP_STATS == &apos;READY&apos; ? &apos;대기&apos; : PMT_POPUP_STATS == &apos;ING&apos; ? &apos;진행중&apos; : &apos;종료&apos;\"/><Cell col=\"3\" text=\"bind:EXPS_PAGE_SPR_CD_NM\"/><Cell col=\"4\" text=\"bind:PRM_SET_YN\" expr=\"PRM_SET_YN == &apos;Y&apos; ? &apos;사용&apos; : &apos;미사용&apos;\"/><Cell col=\"5\" text=\"bind:PMT_POPUP_NM\" displaytype=\"decoratetext\" expr=\"PMT_POPUP_NM  == &apos;&apos; ? PMT_POPUP_NM : &quot;&lt;u v=&apos;true&apos;&gt;&quot;+PMT_POPUP_NM+&quot;&lt;/u&gt;&quot;\" color=\"#290ccf\"/><Cell col=\"6\" text=\"bind:DISP_STR_DT\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:DISP_END_DT\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:REG_DTM\" displaytype=\"normal\" color=\"#000000\"/><Cell col=\"9\" text=\"bind:UPD_DTM\" displaytype=\"normal\" color=\"#000000\"/><Cell col=\"10\" text=\"bind:REGPSN_ID\"/><Cell col=\"11\" text=\"bind:REGPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","20",null,"300","20",null,"grd_pmtPopupList:4",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("(총 0건, 0 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"216","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-73","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-73","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","20","19",null,"156","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","20","19","433","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","20","50","433","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","20","81","433","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","20","112","433","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","371","117","71","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_toDate","272","117","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_fromDate","160","117","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_pmtPopupNm","160","148","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","20","19","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("팝업 상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","20","50","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","452","19","130","157",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("게시구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","20","112","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("기간");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","160","54","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbo_useYn_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_useYn_innerdataset", obj);
            div_search_form_cbo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_useYn_innerdataset);
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_expsNoticSprCd","587","24","153","150",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_expsNoticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("horizontal");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMulti","1281","24","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_oprUnitList","750","24","527","149",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_binddataset("ds_oprUnitList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/><Column size=\"260\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiText","1281","51","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","20","143","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("프로모션 명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_pmtPopupStats","160","23","265","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_search_form_rdo_pmtPopupStats_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_pmtPopupStats_innerdataset", obj);
            div_search_form_rdo_pmtPopupStats_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">대기</Col><Col id=\"codecolumn\">READY</Col></Row><Row><Col id=\"codecolumn\">ING</Col><Col id=\"datacolumn\">진행중</Col></Row><Row><Col id=\"codecolumn\">END</Col><Col id=\"datacolumn\">종료</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_pmtPopupStats_innerdataset);
            obj.set_text("A");
            obj.set_value("1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"189","60","26","84",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"189","60","26","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12","20","81","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_text("외부 인입");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_prmSetYn","160","85","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbo_prmSetYn_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_prmSetYn_innerdataset", obj);
            div_search_form_cbo_prmSetYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_prmSetYn_innerdataset);
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"232","110","28","229",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dispSave",null,"232","81","28","428",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("순서저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cal_toDate","value","ds_search","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_fromDate","value","ds_search","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_pmtPopupNm","value","ds_search","PMT_POPUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.cbo_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.rdo_expsNoticSprCd","value","ds_search","EXPS_NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.rdo_pmtPopupStats","value","ds_search","PMT_POPUP_STATS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cbo_prmSetYn","value","ds_search","PRM_SET_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_28.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_28.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_NA_28.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 프로모션 팝업 - 목록
        CREATION DATES : 2023.01.25
        CREATER        : 이민호
        *******************************************************/
        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;

        this.fv_oApp = nexacro.getApplication();
        this.fv_coCd = this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        };

        this.fn_onkeydown = function(obj,e)
        {
        	// CTRL+ENTER KEY
        	if(e.keycode == 13 && e.ctrlkey){
        		this.btn_search_onclick();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(page)
        {
        	var sSvcId = "selectPmtPopupList";
        	var sUrl = "/sa/pmtPopup/select-pmt-popup-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_pmtPopupList=ds_output1";
        	var arg;

        	// 조회버튼 클릭시 페이징 초기화 시킨다.
        	if( page == 0 ) {
        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.div_paging.uPageRowCnt);
        	}

        	this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_expsNoticSprCd=ds_output1 ds_inqPerdSprCd=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "EXPS_NOTIC_SPR_CD,INQ_PERD_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 운영단위ID 유효성 검사
        this.fn_oprUnitCheck = function() {
        	var sSvcId = "oprUnitCheck";
        	var sUrl = "/sa/com/select-opr-unit-check-list.do";
        	var inDs = "ds_searchOprUnitCheckList=ds_searchOprUnitCheckList:A"
        	var outDs = "ds_rtnOprUnitCheckList=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        this.fn_dispSave = function()
        {
        	var sSvcId = "updatePmtPopupDispSo";
        	var sUrl = "/sa/pmtPopup/update-pmt-popup-disp-so.do";
        	var inDs = "ds_save=ds_pmtPopupList:U";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //조회 트랜잭션 콜백함수
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch(svcID) {
        		case "commonCodeSearch" :

        			//게시구분코드에 All 추가
        			var nRow = this.ds_expsNoticSprCd.insertRow(0);
        			this.ds_expsNoticSprCd.setColumn(nRow, "COM_DTL_CD", "");
        			this.ds_expsNoticSprCd.setColumn(nRow, "COM_DTL_CD_NM", "ALL");

        			this.fn_reset();

        			break;

        		case "selectPmtPopupList" :

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        //      if( this.ds_pmtPopupList.rowcount == 0 ) {
        //          this.ds_pmtPopupList.copyData(this.ds_pmtPopupListCopy);
        //      }
        			//paging 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.div_paging.uPageRowCnt, "fn_pageCallback");

        			break;

        		case "insertOdrInqTgtDtls" :

        			this.fn_search(0);

        			break;

        		case "updatePmtPopupDispSo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.fn_search();
        			} else {
        				alert(errorMsg);
        			}
        			break;

        		case "oprUnitCheck" :

        			var tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm == "" || sOprUnitNm == undefined) {
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        				}
        			}

        			if (tempOprUnitId != "") {
        				alert(this.fn_getMessage("ERRN000023", tempOprUnitId)); // 없는 운영단위ID를 입력하였습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var totalCount2 = 0;
        			tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm != "" && sOprUnitNm != undefined) {
        					var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + sBzplcId + "' && OPR_UNIT_ID == '" + sOprUnitId + "'");

        					if(findRow < 0) {

        						var nRow = this.ds_oprUnitList.addRow();

        						this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", sOprUnitNm);
        					} else {
        						totalCount2 = totalCount2 + 1;

        						tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        					}
        				}
        			}

        			if (totalCount2 > 0) {
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			break;

        		default :

        			break;
        	}
        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){

        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.div_paging.uPageRowCnt);
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 "+ this.totalCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totalCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_pmtPopupList"){
        		oSortInfo = this.grd_pmtPopupList.uaSortInfo;

        		this.ds_search.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_search();
        	}
        };

        //팝업콜백
        this.fn_popupCallback = function(sPopupId, sRetValue) {

        	if(this.gfn_isNull(sRetValue)) {
        		return;
        	}
        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId) {
        		case "btn_oprUnitMulti" :
        			var totalCount2 = 0;
        			var tempOprUnitId = "";

        			for(var i=0; i < retObj.length; i++) {
        				var rowData = JSON.parse(retObj[i]);
        				var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + rowData.OPR_BZPLC_ID + "' && OPR_UNIT_ID == '" + rowData.OPR_UNIT_ID + "'");

        				if(findRow < 0) {
        					var nRow = this.ds_oprUnitList.addRow();
        					this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", rowData.OPR_BZPLC_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        				} else {
        					totalCount2 = totalCount2 + 1;
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + rowData.OPR_BZPLC_ID + " / 운영단위ID : " + rowData.OPR_UNIT_ID + "\n";
        				}
        			}

        			if (totalCount2 > 0) {
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			break;

        		case "btn_oprUnitMultiText" :
        			var retValue = retObj.textValue;

        			if (retValue != "") {
        				this.ds_searchOprUnitCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++) {
        					var sTempValueSplit = sTempValue[x].split("	");

        					var sBzplcId = sTempValueSplit[0];
        					var sOprUnitId = sTempValueSplit[1];

        					if (sBzplcId != "" && sBzplcId != undefined && sOprUnitId != "" && sOprUnitId != undefined) {
        						var nRow = this.ds_searchOprUnitCheckList.addRow();

        						this.ds_searchOprUnitCheckList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        					}
        				}

        				this.fn_oprUnitCheck();
        			}

        			break;

        		default :

        			break;
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function()
        {
        	//grid 초기 설정
        	this.grd_pmtPopupList.uSortFlag = "false";
        	this.grd_pmtPopupList.uServerSortFlag = "true";
        	this.grd_pmtPopupList.uSortCallback = "fn_sortCallback";
        	this.grd_pmtPopupList.uCellSizeType = "true";

        	// GIRD 정렬 초기화 설정 함수
        	this.fn_init_grid();

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 20;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_pmtPopupList";
        	this.grd_pmtPopupList.uRightMouse = "true";
        	this.grd_pmtPopupList.uPersonalFlag = "true";
        	this.grd_pmtPopupList.uDefaultFormat = "DISP_SO,USE_YN,PMT_POPUP_STATS,EXPS_PAGE_SPR_CD_NM,PRM_SET_YN,PMT_POPUP_NM,DISP_STR_DT,DISP_END_DT,REG_DTM,UPD_DTM,REGPSN_ID,REGPSN_NM";
        }

        this.cfn_personalPopupClose = function(sRet)
        {
        	this.grd_pmtPopupList.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }

        /**
         * GIRD 정렬 초기화 설정 함수
         */
        this.fn_init_grid = function()
        {
        	// grid 초기 설정
        	this.div_search.form.grd_oprUnitList.uSortFlag = "true";
        	this.div_search.form.grd_oprUnitList.uServerSortFlag = "false";
        	this.div_search.form.grd_oprUnitList.uCellSizeType = "true";
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //조회기간 재설정
        this.fn_setSearchDate = function(resetYn) {

        	var term = this.div_search.form.cmb_inqPerdSprCd.value;
        	if(resetYn == "Y") {
        		term = 2;
        	}
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

        	if( term == "1" ) {
        		objDate.setDate(objDate.getDate() );
        	} else if( term == "2" ) {
        		objDate.setDate(objDate.getDate() -6);
        	} else if( term == "3" ) {
        		objDate.setDate(objDate.getDate() -13);
        	} else if( term == "4" ) {
        		objDate.setMonth(objDate.getMonth() -1);
        		objDate.setDate(objDate.getDate() +1);
        	} else if( term == "5" ) {
        		objDate.setMonth(objDate.getMonth() -3);
        		objDate.setDate(objDate.getDate() +1);
        	} else if( term == "6" ) {
        		objDate.setMonth(objDate.getMonth() -6);
        		objDate.setDate(objDate.getDate() +1);
        	} else if( term == "7" ) {
        		objDate.setMonth(objDate.getMonth() -12);
        		objDate.setDate(objDate.getDate() +1);
        	}

        	this.div_search.form.cal_fromDate.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        	this.div_search.form.cal_toDate.set_value(sToday);
        }

        // 게시구분코드 변경
        this.fn_chgExpsNoticSprCd = function() {
        	// SSP-2971
        	if(this.div_search.form.rdo_expsNoticSprCd.value == "30" || this.div_search.form.rdo_expsNoticSprCd.value == "50"
        		|| this.div_search.form.rdo_expsNoticSprCd.value == "60" || this.div_search.form.rdo_expsNoticSprCd.value == "70") {
        		this.div_search.form.grd_oprUnitList.set_enable(true);
        		this.div_search.form.btn_oprUnitMulti.set_enable(true);
        		this.div_search.form.btn_oprUnitMultiText.set_enable(true);
        	} else {
        		this.div_search.form.grd_oprUnitList.set_enable(false);
        		this.div_search.form.btn_oprUnitMulti.set_enable(false);
        		this.div_search.form.btn_oprUnitMultiText.set_enable(false);
        	}
        }

        // 초기화
        this.fn_reset = function() {
        	this.ds_oprUnitList.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.fn_setSearchDate("Y");
        	this.div_search.form.rdo_pmtPopupStats.set_index(0);
        	this.div_search.form.cbo_useYn.set_index(0);
        	this.div_search.form.cbo_prmSetYn.set_index(0);
        	this.div_search.form.cmb_inqPerdSprCd.set_index(1);
        	this.div_search.form.rdo_expsNoticSprCd.set_index(0);

        	this.fn_chgExpsNoticSprCd();

        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //초기화 버튼
        this.btn_reset_onclick = function(obj,e)
        {
        	this.fn_reset();

        };

        //조회 버튼
        this.btn_search_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.div_search.form.cal_fromDate.value) && this.gfn_isNull(this.div_search.form.cal_toDate.value)) {
        		alert(this.fn_getMessage("ERRN000001", "시작일을 입력하면 종료일은")); // 시작일을 입력하면 종료일은 필수 입력항목입니다.
        		this.div_search.form.cal_toDate.setFocus();
        		return
        	}
        	if(this.gfn_isNull(this.div_search.form.cal_fromDate.value) && !this.gfn_isNull(this.div_search.form.cal_toDate.value)) {
        		alert(this.fn_getMessage("ERRN000001", "종료일을 입력하면 시작일은")); // 종료일을 입력하면 시작일은 필수 입력항목입니다.
        		this.div_search.form.cal_fromDate.setFocus();
        		return
        	}
        	if(this.div_search.form.cal_fromDate.value > this.div_search.form.cal_toDate.value) {
        			alert(this.fn_getMessage("ERRN000002", "종료일이 시작일보다")); // 종료일이 시작일보다 작습니다.
        			this.fn_setSearchDate();
        			return;
        	}

        	if (this.div_search.form.rdo_expsNoticSprCd.value != "30" && this.div_search.form.rdo_expsNoticSprCd.value != "50") {
        		var aDelArr = new Array();
        		for(var i = 0; i< this.ds_oprUnitList.rowcount; i++) {
        			aDelArr.push(i);
        		}
        		this.ds_oprUnitList.deleteMultiRows(aDelArr);
        	}

        	var sBzplcIdList = "";
        	var sOprUnitIdList = "";

        	for(var i = 0; i< this.ds_oprUnitList.rowcount; i++) {
        		var tempBzplcId = this.ds_oprUnitList.getColumn(i, "BZPLC_ID");
        		var tempOprUnitId = this.ds_oprUnitList.getColumn(i, "OPR_UNIT_ID");

        		sBzplcIdList += tempBzplcId + ",";
        		sOprUnitIdList += tempOprUnitId + ",";
        	}

        	this.fn_setMSearch(this.name,"BZPLC_ID",sBzplcIdList);
        	this.fn_setMSearch(this.name,"OPR_UNIT_ID",sOprUnitIdList);

        	if(this.gfn_isNull(sBzplcIdList) || this.gfn_isNull(sOprUnitIdList)) {
        		this.fn_search(0);
        	} else {
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        		this.fn_insertSelectedData("fn_callBack");
        	}

        };

        //등록버튼
        this.btn_regist_onclick = function(obj,e)
        {
        	var objParam = {
        			pageNum:this.div_paging.uPage
        			,coCd:this.fv_coCd
        		};
        	this.gfn_openPopup("pmtPopupRegistPop", "SA::SSP_BO_NA_30.xfdl", objParam);
        };

        //그리드 ONCLICK
        this.grd_pmtPopupList_oncellclick = function(obj,e)
        {
        	if(e.col == this.grd_pmtPopupList.getBindCellIndex("body", "PMT_POPUP_NM")) {

        		var objParam = {
        			coCd:this.ds_pmtPopupList.getColumn(e.row, "CO_CD")
        			, pmtPopupSeq:this.ds_pmtPopupList.getColumn(e.row, "PMT_POPUP_SEQ")
        		};

        		this.gfn_openPopup("btn_regist", "SA::SSP_BO_NA_30.xfdl", objParam, "fn_popupCallback");
        	}
        };

        //조회 기간 변경 이벤트
        this.cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setSearchDate();
        };

        //레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_pmtPopupList", this.grd_pmtPopupList.getCurFormatString());
        };

        //레이아웃 초기화
        this.btn_layoutReset_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_pmtPopupList");
        	this.grd_pmtPopupList.set_formats(this.grd_pmtPopupList.uOrgFormat);
        };

        //조회영역 엔터 칠 경우
        this.div_search_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			if( e.fromobject.id == "edt_pmtPopupNm") {
        				this.fn_search(0);
        			}
        		}
        	}
        };

        //게시구분변경
        this.rdo_expsNoticSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_chgExpsNoticSprCd();
        };

        //운영단위 멀티 팝업
        this.btn_oprUnitMulti_onclick = function(obj,e)
        {
        	var oArg = {coCd:this.fv_coCd
        			   };

        	var oOption = { top : "-1"
        				  , left : "-1"
        				  , width : "-1"
        				  , height : "-1"
        				  , popuptype : "modal" // modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        				  , layered : "false"
        				  , opacity : "100"
        				  , autosize : "true"
        				  , titlebar : "true"
        				  , title : "운영단위 조회"
        				  };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallback", oOption);
        };

        //운영단위 멀티텍스트팝업
        this.btn_oprUnitMultiText_onclick = function(obj,e)
        {
        	var params = { textId : this.div_search.form.btn_oprUnitMultiText };
        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_SA_MSEARCH.xfdl", params,  "fn_popupCallback", options);
        };

        // 운영단위 삭제
        this.grd_oprUnitList_oncellclick = function(obj,e)
        {
        	var sEditType = obj.getCellProperty("body", e.cell, "edittype");

        	if(sEditType == "button") {
        		if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        			this.ds_oprUnitList.deleteRow(e.row);
        		}
        	}
        };

        // 엑셀 다운로드
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	var sFileName = "프로모션팝업_EXCEL_EXPORT";
        	var aGrid = [this.grd_pmtPopupList];
        	var aSht  = ["프로모션팝업"];

        	var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        	this.gfn_exportExcel(oParam);
        };

        // 순서 저장
        this.btn_dispSave_onclick = function(obj,e)
        {
        	for(var i = 0; i< this.ds_pmtPopupList.rowcount; i++) {
        		this.ds_pmtPopupList.setColumn(i, "DISP_SO", i+1);
        	}

        	if(!this.fn_dataCheck(this.ds_pmtPopupList)) {
        		alert(this.fn_getMessage("ERRN000036")); // 변경된 내용이 없습니다.
        		return false;
        	}

        	this.fn_dispSave();
        };

        //drag 시작
        this.grd_pmtPopupList_ondrag = function(obj,e)
        {
        	var nRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	var sValue = oBindDs.getColumn(e.row,"PMT_POPUP_NM");

        	//static component check
        	var oStatic =  this["sta_drag"];
        	if(!this.gfn_isNull(oStatic)){
        		oStatic = this.removeChild("sta_drag");
        		oStatic.destroy();
        	}

        	//static component position 설정
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10;
        	var nTop  = e.clienty + obj.getOffsetTop();

        	//static component 생성
        	oStatic = new Static();
        	oStatic.init( "sta_drag", nLeft, nTop, 200,50);
        	this.addChild("sta_drag",oStatic);
        	oStatic.set_background("#bcbcbc");
        	oStatic.set_text(sValue);
        	oStatic.uAsRow = nRow;
        	oStatic.show();

        	return true;
        };

        //이동
        this.grd_pmtPopupList_ondragmove = function(obj,e)
        {
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10;
        	var nTop  = e.clienty + obj.getOffsetTop();
        	this.sta_drag.move(nLeft,nTop);
        };

        //row 변경
        this.grd_pmtPopupList_ondrop = function(obj,e)
        {
        	var nToRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	oBindDs.moveRow(this.sta_drag.uAsRow, nToRow)
        	var	oStatic = this.removeChild("sta_drag");
        	oStatic.destroy();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.btn_layoutReset.addEventHandler("onclick",this.btn_layoutReset_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_regist.addEventHandler("onclick",this.btn_regist_onclick,this);
            this.grd_pmtPopupList.addEventHandler("oncellclick",this.grd_pmtPopupList_oncellclick,this);
            this.grd_pmtPopupList.addEventHandler("ondrag",this.grd_pmtPopupList_ondrag,this);
            this.grd_pmtPopupList.addEventHandler("ondrop",this.grd_pmtPopupList_ondrop,this);
            this.grd_pmtPopupList.addEventHandler("ondragmove",this.grd_pmtPopupList_ondragmove,this);
            this.sta_totalCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.div_search.form.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd_onitemchanged,this);
            this.div_search.form.rdo_expsNoticSprCd.addEventHandler("onitemchanged",this.rdo_expsNoticSprCd_onitemchanged,this);
            this.div_search.form.btn_oprUnitMulti.addEventHandler("onclick",this.btn_oprUnitMulti_onclick,this);
            this.div_search.form.grd_oprUnitList.addEventHandler("oncellclick",this.grd_oprUnitList_oncellclick,this);
            this.div_search.form.btn_oprUnitMultiText.addEventHandler("onclick",this.btn_oprUnitMultiText_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.btn_dispSave.addEventHandler("onclick",this.btn_dispSave_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_NA_28.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
