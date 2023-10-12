(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_SN_07");
            this.set_titletext("고객사 입고 처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_resList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GI_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"GI_STATS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"GI_CMPL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"GI_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"GI_PRCS_PRSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"GI_CONFIRM_YN\" type=\"STRING\" size=\"32\"/><Column id=\"ADJ_YM\" type=\"STRING\" size=\"32\"/><Column id=\"GDOC_NO\" type=\"STRING\" size=\"32\"/><Column id=\"CATG_KILR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CATG_KILR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ODR_NO_N_ITM_NO\" type=\"STRING\" size=\"32\"/><Column id=\"ODR_REQ_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"DLV_CMPL_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REPR_SPEC\" type=\"STRING\" size=\"32\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"ODRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_STATS_SEL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_DTM_SEL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_DTM_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_DTM_TO\" type=\"STRING\" size=\"256\"/><Column id=\"GDOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eOPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"eODR_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"GI_STATS_SEL_CD\"/><Col id=\"INQ_DTM_SEL_CD\"/><Col id=\"INQ_DTM_FROM\"/><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">20</Col><Col id=\"COL_NM\">20개씩</Col></Row><Row><Col id=\"COL_VALUE\">50</Col><Col id=\"COL_NM\">50개씩</Col></Row><Row><Col id=\"COL_VALUE\">100</Col><Col id=\"COL_NM\">100개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCom", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"COM_CLSF_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_giStatsSel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_CD\">00</Col><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE_CD\">01</Col><Col id=\"CODE_NM\">완료</Col></Row><Row><Col id=\"CODE_CD\">02</Col><Col id=\"CODE_NM\">미완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqDtmSel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_CD\">01</Col><Col id=\"CODE_NM\">주문 생성일</Col></Row><Row><Col id=\"CODE_CD\">02</Col><Col id=\"CODE_NM\">배송 완료일</Col></Row><Row><Col id=\"CODE_CD\">03</Col><Col id=\"CODE_NM\">입고 처리일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chkList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GI_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_DCN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\"/><Col id=\"CO_CD\"/><Col id=\"BZPLC_ID\"/><Col id=\"ODR_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","47",null,"157","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_color("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31","40","31",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_oprUnit","20","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("운영 단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_inqPeriod","20","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("조회 기간");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_ordNumPopup","829","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_ordNumMemo","852","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","461","165","66","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_ordNum","462","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("주문 번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_ordNum","599","4","226","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_inqPeriod","159","35","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_inqDtmSel");
            obj.set_codecolumn("CODE_CD");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_inqPeriodFrom","303","35","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_trdState","882","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("거래 명세서");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_whClass","882","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("입고 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_trdState","1022","35","283","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_whClass","1022","4","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_giStatsSel");
            obj.set_codecolumn("CODE_CD");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_fromTo","446","36","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_inqPeriodTo","457","35","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnit","159","4","246","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitPopup","409","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMemo","432","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"429","104","28","510",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("dropdown");
            var Div00_form_cmb_viewCount_innerdataset = new nexacro.NormalDataset("Div00_form_cmb_viewCount_innerdataset", obj);
            Div00_form_cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb_viewCount_innerdataset);
            obj.set_text("1000개씩");
            obj.set_value("1000");
            obj.set_index("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_resList","20","218",null,null,"20","116",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_fillareatype("none");
            obj.set_cellmovingtype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_resList");
            obj.set_autoenter("none");
            obj.set_selecttype("area");
            obj.set_font("12px/normal \"Arial\",\"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"124\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"77\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"105\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"400\"/><Column size=\"82\"/><Column size=\"64\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell color=\"blue\" textDecoration=\"underline\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"입고 현황\"/><Cell col=\"2\" text=\"입고 처리일\"/><Cell col=\"3\" text=\"입고 처리자\"/><Cell col=\"4\" text=\"검수 여부\"/><Cell col=\"5\" text=\"정산 대상 월\"/><Cell col=\"6\" text=\"거래명세서\"/><Cell col=\"7\" text=\"카테고리킬러\"/><Cell col=\"8\" text=\"사업장ID\"/><Cell col=\"9\" text=\"주문 품목 번호\"/><Cell col=\"10\" text=\"주문 생성일\"/><Cell col=\"11\" text=\"배송 완료일\"/><Cell col=\"12\" text=\"상품ID\"/><Cell col=\"13\" text=\"상품명\"/><Cell col=\"14\" text=\"규격\"/><Cell col=\"15\" text=\"주문수량\"/><Cell col=\"16\" text=\"주문단위\"/><Cell col=\"17\" text=\"운영단위ID\"/><Cell col=\"18\" text=\"운영단위명\"/><Cell col=\"19\" text=\"부서ID\"/><Cell col=\"20\" text=\"부서명\"/><Cell col=\"21\" text=\"주문자 ID\"/><Cell col=\"22\" text=\"주문자명\"/><Cell col=\"23\" text=\"수령자\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:[GI_CMPL_NM] == &quot;완료&quot; ? &quot;none&quot; : &quot;checkboxcontrol&quot;\" edittype=\"expr:[GI_CMPL_NM] == &quot;완료&quot; ? &quot;none&quot; : &quot;checkbox&quot;\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:GI_CMPL_NM\"/><Cell col=\"2\" text=\"bind:GI_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtext=\" \" calendardisplayinvalidtype=\"none\" calendardisplaynulltext=\" \" calendardisplaynulltype=\"none\"/><Cell col=\"3\" text=\"bind:GI_PRCS_PRSN_NM\"/><Cell col=\"4\" text=\"bind:GI_CONFIRM_YN\"/><Cell col=\"5\" text=\"bind:ADJ_YM\" displaytype=\"date\" calendardateformat=\"yyyy-MM\"/><Cell col=\"6\" text=\"bind:GDOC_NO\"/><Cell col=\"7\" text=\"bind:CATG_KILR_NM\"/><Cell col=\"8\" text=\"bind:BZPLC_ID\"/><Cell col=\"9\" text=\"bind:ODR_NO_N_ITM_NO\"/><Cell col=\"10\" text=\"bind:ODR_REQ_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"11\" text=\"bind:DLV_CMPL_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"12\" text=\"bind:PRD_ID\"/><Cell col=\"13\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:REPR_SPEC\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:ODR_QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:SELL_UNIT_CD\"/><Cell col=\"17\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"18\" text=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:DEPT_ID\"/><Cell col=\"20\" text=\"bind:DEPT_NM\"/><Cell col=\"21\" text=\"bind:ODRPSN_ID\"/><Cell col=\"22\" text=\"expr:comp.parent.fn_secureName(currow, &quot;ODRPSN_NM&quot;, dataset)\"/><Cell col=\"23\" text=\"expr:comp.parent.fn_secureName(currow, &quot;RCVR_NM&quot;, dataset)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"38","20","50",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20","190","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title1_1","20","20","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("■  조회");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"120","60","30","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title1_2","21","169","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("■  목록");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00",null,"180","100","28","337",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("다운로드(P)");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"120","60","30","btn_search:4",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_active",null,"120","60","30","btn_reset:4",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("활성화");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selRcpPrc",null,"180","110","28","btn_excel00:5",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("선택입고처리");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"186","30","10","1280",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","1305","79","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_00","739","79","4","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("4");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00",null,"208","30","10","174",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_00_00",null,"730","30","30","699",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_00_00_00",null,"150","30","30","86",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"180","104","28","228",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("dropdown");
            var cmb_viewCount_innerdataset = new nexacro.NormalDataset("cmb_viewCount_innerdataset", obj);
            cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(cmb_viewCount_innerdataset);
            obj.set_text("1000개씩");
            obj.set_value("1000");
            obj.set_index("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"180","100","28","125",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("레이아웃 저장");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"180","100","28","21",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("레이아웃 초기화");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.cbo_whClass","value","ds_search","GI_STATS_SEL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.cbo_inqPeriod","value","ds_search","INQ_DTM_SEL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cal_inqPeriodFrom","value","ds_search","INQ_DTM_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cal_inqPeriodTo","value","ds_search","INQ_DTM_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_trdState","value","ds_search","GDOC_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_oprUnit","value","ds_search","eOPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_ordNum","value","ds_search","eODR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_SN_07.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_SN_07.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 정산 관리 - 고객사 입고 처리 목록
          CREATION DATES :
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;
        this.rtn = 0;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//달력 현재날짜 디폴트설정
        	this.Div00.form.cal_inqPeriodFrom.set_value(this.gfn_getDate("date"));
        	this.Div00.form.cal_inqPeriodTo.set_value(this.gfn_getDate("date"));
        	this.copyPaste.addGrid(this.grd_resList);
        	//콤보박스 디폴트값 설정
        	this.Div00.form.cbo_whClass.set_index(0);
        	this.Div00.form.cbo_inqPeriod.set_index(0);

        	this.fn_odCommLoading(); //공통메세지코드 로딩
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_SN_07_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        //조회
        this.fn_search = function(page)	{
        	var sSvcId = "selectWarehousingList";
        	var sUrl = "/ad/wh/select-warehousing-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_resList=ds_output1 ds_search=ds_output2";
        	var arg = "";

        	if( page ) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.cmb_viewCount.value);
        		this.ds_search.setColumn(0,"SORT_COLUMN", "");
        		this.ds_search.setColumn(0,"SORT_TYPE", "");
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);
        		this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);
        		this.ds_search.setColumn(0,"TOTAL_COUNT", -1);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectWarehousingList"){
        		trace("### ds_resList.getRowCount() : " + this.ds_resList.getRowCount());

        		this.Div00.form.set_enable(false);
        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cmb_viewCount.value,"fn_pageCallback");
        		this.cmb_viewCount.set_enable(false);
        	}
        	else if(svcID == "insertOdrInqTgtDtls"){
        		trace("### insertOdrInqTgtDtls - insert count : " + this.insertCount);
        		this.fn_search(true);
        	}
        	else if(svcID == "deleteOdrInqTgtDtls"){
        		this.ds_select.deleteAll();
        		trace("### deleteOdrInqTgtDtls");
        	}
        	else if (svcID == "updateWarehousingFinish") {
        		if (errorCode == "0") {
        			trace("=========================== rtn: " + this.rtn);
        			if (this.rtn > 0)
        			{
        				var msg = this.fn_getMessage("IFMS000001","","");
        				var objParam = {paramContents:msg};

        				this.alert(msg);
        				this.fn_search(true);
        			} else {
        				var msg = this.fn_getMessage("ERRS000227","","");

        				if (errorMsg == "")	this.alert(msg);
        				else	this.alert(msg + "\n" + errorMsg);
        			}
        		}
        	}
        };

        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;
        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.cmb_viewCount.value);
        		this.fn_search(false);
        	}

        	if( this.gfn_isNull(oPaging.uPageCnt) || oPaging.uPageCnt == 'undefined' || isNaN(oPaging.uPageCnt) ) {
        		oPaging.uPageCnt = 0;
        	}

        	var sTotText = "(<b v='true'>총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totCount.set_text(sTotText);
        };

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_resList"){
        		oSortInfo = this.grd_resList.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        	}
        };

        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	trace("sRetValue: " + sRetValue);

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	trace("resData: " + resData);

        	if( sPopupId == "oprUnitMultiPopup" ){  //운영단위 멀티 팝업

        		for(var i = 0; i < resData.length; i++) {
        			var rtnData = JSON.parse(resData[i]);
        			sIdList += rtnData.OPR_UNIT_ID +",";
        			sNmList += rtnData.OPR_UNIT_NM +",";
        		}
        		this.Div00.form.edt_oprUnit.set_value(sIdList);
        		this.fn_setMSearch(this.name,"OPR_UNIT_ID",sIdList);

        	}else if( sPopupId == "SSP_BO_SN_07;OPR_UNIT_ID" ){  //운영단위 멀티 인풋

        		sIdList = "";

        		if(resData.length > 0){
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        		}

        		trace("sIdList : " + sIdList);

        		this.Div00.form.edt_oprUnit.set_value(sIdList);
        		this.fn_setMSearch(this.name,"OPR_UNIT_ID",sIdList);

        	}else if( sPopupId == "odrNoMultiPopup" ){  //주문번호 멀티 팝업

        		for(var i = 0; i < resData.length; i++) {
        			var rtnData = JSON.parse(resData[i]);
        			sIdList += rtnData.ODR_NO +",";
        		}
        		this.Div00.form.edt_ordNum.set_value(sIdList);
        		this.fn_setMSearch(this.name,"ODR_NO",sIdList);

        	}else if( sPopupId == "SSP_BO_SN_07;ODR_NO" ){  //주문번호 멀티 인풋

        		sIdList = "";

        		if(resData.length > 0){
        			for(var i = 0; i < resData.length; i++) {
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        		}

        		trace("sIdList : " + sIdList);

        		this.Div00.form.edt_ordNum.set_value(sIdList);
        		this.fn_setMSearch(this.name,"ODR_NO",sIdList);
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//search static 초기 설정
        	this.Div00.form.sta_oprUnit.uEssentiel = "true"; //필수값 표시
        	this.Div00.form.sta_inqPeriod.uEssentiel = "true";

        	//grid 초기 설정
        	//sort
        	this.grd_resList.uSortFlag = "false";
        	this.grd_resList.uServerSortFlag = "true";
        	this.grd_resList.uSortCallback = "fn_sortCallback";

        	//grid cell size 변경
        	this.grd_resList.uCellSizeType = "true";

        	this.uGridList = "grd_resList";
        	this.grd_resList.uRightMouse = "true";
        	this.grd_resList.uPersonalFlag = "true";
        };

        this.cfn_personalPopupClose = function(sRet) {
        	this.grd_resList.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_todoSearch = function() {
        	var oArgs = this.getOwnerFrame().arguments["oArgs"];
        	if (oArgs && oArgs.TODO === "Y") {
        		if (oArgs.STATUS) this.ds_search.setColumn(0, "GI_STATS_SEL_CD", oArgs.STATUS); //  00 : 전체, 01 : 완료, 02 : 미완료
        		if (oArgs.STATUS2) this.ds_search.setColumn(0, "eOPR_UNIT_ID", oArgs.STATUS2);
        		if (oArgs.DTM) {
        			if (oArgs.DTM == 2) this.ds_search.setColumn(0, "INQ_DTM_FROM", "19000101");
        			else {
        				var dt = new nexacro.Date();
        				dt.setMonth(dt.getMonth() - 3);
        				this.Div00.form.cal_inqPeriodFrom.set_value(dt);
        			}
        		}
        		this.ds_search.setColumn(0, "INQ_DTM_SEL_CD", "02");
        		this.btn_search.click();
        	}
        }
        this.clickHeadCheckBox = function (obj, strColName)
        {
        	var headerCell = obj.getBindCellIndex("body", strColName);

        	var checkValue = "1";

        	if(obj.getCellProperty("Head", headerCell, "displaytype") == "checkboxcontrol") {
        		if (obj.getCellProperty("Head", headerCell, "text") == "1") { //현재 체크박스 값과 반대되게
        			checkValue = "0";
        		} else {
        			checkValue = "1";
        		}
        	}

        	obj.setCellProperty("Head", headerCell, "text", checkValue); //헤더 체크박스 값 변경

        	var objDataset = obj.getBindDataset(); //그리드에 바인드되어있는 dataset 가져옴
        	if(objDataset.getRowCount() > 0) {
        		objDataset.set_enableevent(false); //이벤트 비활성화
        		for (var i=0; i<objDataset.getRowCount(); i++) {
        		    objDataset.setColumn(i, strColName, checkValue); //체크박스를 checkValue로 설정
        		}
        		objDataset.set_enableevent(true); //이벤트 활성화
        	}
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodCtrlENTER("btn_search_onclick");
        	//this.fn_regMethodSave("");
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //조회 버튼 click  이벤트
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_setMSearch(this.name,"OPR_UNIT_ID",this.Div00.form.edt_oprUnit.value);
        	this.fn_setMSearch(this.name,"ODR_NO",this.Div00.form.edt_ordNum.value);

        	var nCount = this.ds_select.getRowCount();
        	var arrOprUnitid = this.ds_select.extractRowsNF("COL_ITM =='OPR_UNIT_ID'");

        	if( nCount == 0 || arrOprUnitid.length == 0 )
        	{
        		var msg = this.fn_getMessage("ERRS000144","운영단위");

        		var objParam = {paramContents:msg};
        		//this.gfn_openPopup("cmmAlert", "COMM::cmmAlert.xfdl", objParam);
        		this.alert(msg);
        		return;
        	}else if ( this.gfn_isNull(this.Div00.form.cal_inqPeriodFrom.value) || this.Div00.form.cal_inqPeriodFrom.value == '' || this.Div00.form.cal_inqPeriodFrom.value == '    -  -  '
        				|| this.gfn_isNull(this.Div00.form.cal_inqPeriodTo.value) || this.Div00.form.cal_inqPeriodTo.value == '' || this.Div00.form.cal_inqPeriodTo.value == '    -  -  ' )
        	{
        		var msg = this.fn_getMessage("ERRS000144","조회기간");

        		var objParam = {paramContents:msg};
        		//this.gfn_openPopup("cmmAlert", "COMM::cmmAlert.xfdl", objParam);
        		this.alert(msg);
        		return;
        	}else if ( this.Div00.form.cal_inqPeriodTo.value < this.Div00.form.cal_inqPeriodFrom.value ) {
        		var msg = this.fn_getMessage("IFMS000002","","");

        		var objParam = {paramContents:msg};
        		//this.gfn_openPopup("cmmAlert", "COMM::cmmAlert.xfdl", objParam);
        		this.alert(msg);
        		return;
        	}

        	this.ds_search.setColumn(0, "LANG_CD", "KO"); //
        	this.fn_insertSelectedData("fn_callBack");
        };


        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.ds_resList.getRowCount() == 0){
        		this.alert(this.fn_getMessage("ERRP000205")); // '다운로드 가능한 데이터가 없습니다.'
        	}else{
        		// 20230503_박철희_엑셀다운로드수정
        		// this.gfn_openPopup("pwdSetPopup", "CO_POP::pwdSetPopup.xfdl", null, "fn_excelDownload");
        		this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownload");
        	}
        };

        this.fn_excelDownload = function(objId, ret) {
        	// 20230503_박철희_엑셀다운로드수정
        	// if(!pwd) return; //취소(undefined)
        	// this.ofn_exportExcel({form:this, grid:this.grd_resList, fileName:"고객사입고처리", password: pwd, dbWrk: "dbWrk", pgmId: "SSP_BO_SN_07_02"});
        	var answr = ret.split("||||");

        	if(this.gfn_isNull(answr)) { return; }
        	this.ofn_exportExcel({form:this, grid:this.grd_resList, fileName:"고객사입고처리", password: answr[0], downRsn: answr[1], dbWrk: "DOWNLOAD", pgmId: "SSP_BO_SN_07_02"});
        };


        this.btn_reset_onclick = function(obj,e)
        {
        	this.Div00.form.set_enable(true);
        	this.cmb_viewCount.set_enable(true);
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.Div00.form.edt_oprUnit.set_value("");
        	this.Div00.form.edt_ordNum.set_value("");
        	this.Div00.form.cbo_whClass.set_index(0);
        	this.Div00.form.cbo_inqPeriod.set_index(0);
        	this.Div00.form.cal_inqPeriodFrom.set_value(new nexacro.Date());
        	this.Div00.form.cal_inqPeriodTo.set_value(new nexacro.Date());
        	this.Div00.form.edt_trdState.set_value("");

        	if(this.ds_select.getRowCount() != 0 )
        		this.fn_deleteSelectedData("fn_callBack");
        };

        this.btn_active_onclick = function(obj,e)
        {
        	this.Div00.form.set_enable(true);
        	this.cmb_viewCount.set_enable(true);
        };

        this.Div00_btn_oprUnitPopup_onclick = function(obj,e)
        {
        	var objParam = { coCd: this.fv_coCd };  //gds_userInfo 사용여부 확인필요
        	this.gfn_openPopup("oprUnitMultiPopup", "CO_POP::SSP_BO_PP_23.xfdl", objParam, "fn_popupCallback");
        };

        this.Div00_btn_oprUnitMemo_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"OPR_UNIT_ID",this.Div00.form.edt_oprUnit.value,
        	"fn_popupCallback",120,300);
        };

        this.Div00_btn_ordNumPopup_onclick = function(obj,e)
        {
        	var objParam = {};
        	this.gfn_openPopup("odrNoMultiPopup", "OD::SSP_BO_OA_28.xfdl", objParam, "fn_popupCallback");
        };

        this.Div00_btn_ordNumMemo_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name,"ODR_NO",this.Div00.form.edt_ordNum.value,
        	"fn_popupCallback",130,300);
        };

        this.btn_selRcpPrc_onclick = function(obj,e)
        {
        	// 입고처리 완료 저장
        	// 그리드 필터 사용시 깜빡임 증상 대처
        	this.grd_resList.set_binddataset(); // 그리드 바인드 비우기

        	this.ds_resList.filter("CHK == '1' && GI_CMPL_NM != '완료'");
        	this.ds_chkList.deleteAll();

        	trace("========================= ds_resList Cnt: " + this.ds_resList.getCount());
        	for ( var i=0; i<this.ds_resList.getCount(); i++ ) {
        		var nRow = this.ds_chkList.addRow();
        		trace("========================= nRow: " + nRow);
        		//trace("========================= CHK: " + this.ds_resList.getColumn(i, "CHK"));
        		//this.ds_chkList.copyRow(i, this.ds_resList, i);
        		this.ds_chkList.setColumn(nRow, "CO_CD", this.fv_coCd);	// 회사코드
        		this.ds_chkList.setColumn(nRow, "BZPLC_ID", this.ds_resList.getColumn(i, "BZPLC_ID"));
        		this.ds_chkList.setColumn(nRow, "ODR_NO", this.ds_resList.getColumn(i, "ODR_NO"));
        		this.ds_chkList.setColumn(nRow, "ODR_ITM_NO", this.ds_resList.getColumn(i, "ODR_ITM_NO"));
        		this.ds_chkList.setColumn(nRow, "ODRPSN_ID", this.ds_resList.getColumn(i, "ODRPSN_ID"));
        		this.ds_chkList.setColumn(nRow, "GI_STATS_CD", "01");	// 01 : 완료, 10 : 입고대기
        		this.ds_chkList.setColumn(nRow, "GI_DCN_DT", this.gfn_getDate("date"));	// 입고확정일
        		this.ds_chkList.setColumn(nRow, "ODR_QTY", this.ds_resList.getColumn(i, "ODR_QTY"));
        		trace("========================= ODR_NO: " + this.ds_chkList.getColumn(i, "ODR_NO"));
        		trace("========================= ODR_ITM_NO: " + this.ds_chkList.getColumn(i, "ODR_ITM_NO"));
        		trace("========================= ODR_QTY: " + this.ds_chkList.getColumn(i, "ODR_QTY"));
        	}

        	this.ds_resList.filter(""); // 체크데이터 초기화

        	this.grd_resList.set_binddataset(this.ds_resList); // 그리드 바인드 채우기

        	var sSvcId = "updateWarehousingFinish";
        	var sUrl = "/ad/wh/update-warehousing-finish.do";
        	var inDs = "ds_chkList=ds_chkList";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };



        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_resList", this.grd_resList.getCurFormatString());
        };
        // 레이아웃 초기화
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_resList");
        	this.grd_resList.set_formats(this.grd_resList.uOrgFormat);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_SN_07_onkeyup,this);
            this.Div00.form.btn_ordNumPopup.addEventHandler("onclick",this.Div00_btn_ordNumPopup_onclick,this);
            this.Div00.form.btn_ordNumMemo.addEventHandler("onclick",this.Div00_btn_ordNumMemo_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Div00.form.cbo_inqPeriod.addEventHandler("onitemchanged",this.Div00_cbo_inqPeriod_onitemchanged,this);
            this.Div00.form.cal_inqPeriodFrom.addEventHandler("oncloseup",this.Div00_cal_baseDate_oncloseup,this);
            this.Div00.form.cal_inqPeriodTo.addEventHandler("oncloseup",this.Div00_cal_baseDate_oncloseup,this);
            this.Div00.form.btn_oprUnitPopup.addEventHandler("onclick",this.Div00_btn_oprUnitPopup_onclick,this);
            this.Div00.form.btn_oprUnitMemo.addEventHandler("onclick",this.Div00_btn_oprUnitMemo_onclick,this);
            this.sta_title1_1.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.sta_title1_2.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_excel00.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.btn_active.addEventHandler("onclick",this.btn_active_onclick,this);
            this.btn_selRcpPrc.addEventHandler("onclick",this.btn_selRcpPrc_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_SN_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
