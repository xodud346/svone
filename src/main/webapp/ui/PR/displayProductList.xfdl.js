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
            this.set_titletext("전시상품관리-리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column5\">1</Col><Col id=\"Column6\">1</Col><Col id=\"Column7\">1</Col><Col id=\"Column8\">1</Col><Col id=\"Column9\">1</Col><Col id=\"Column12\">1</Col><Col id=\"Column13\">1</Col><Col id=\"Column14\">1</Col><Col id=\"Column15\">1</Col><Col id=\"Column16\">1</Col><Col id=\"Column17\">1</Col></Row><Row><Col id=\"Column17\">2</Col><Col id=\"Column16\">2</Col><Col id=\"Column15\">2</Col><Col id=\"Column14\">2</Col><Col id=\"Column13\">2</Col><Col id=\"Column12\">2</Col><Col id=\"Column11\">2</Col><Col id=\"Column10\">2</Col><Col id=\"Column9\">2</Col><Col id=\"Column8\">2</Col><Col id=\"Column7\">2</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">2</Col><Col id=\"Column4\">2</Col><Col id=\"Column3\">2</Col><Col id=\"Column2\">2</Col><Col id=\"Column1\">2</Col><Col id=\"Column0\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"USE_NAME\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/><Col id=\"USE_NAME\">전체</Col></Row><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_NAME\">사용</Col></Row><Row><Col id=\"USE_YN\">N</Col><Col id=\"USE_NAME\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateType", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE_TYPE\">등록일</Col><Col id=\"DATE_CODE\">REG_DT</Col></Row><Row><Col id=\"DATE_TYPE\">수정일</Col><Col id=\"DATE_CODE\">UPD_DT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_optnType", this);
            obj._setContents("<ColumnInfo><Column id=\"OPTN_TYPE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPTN_TYPE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"OPTN_TYPE_NAME\">선택</Col><Col id=\"OPTN_TYPE_CODE\"/></Row><Row><Col id=\"OPTN_TYPE_NAME\">일반</Col><Col id=\"OPTN_TYPE_CODE\">10</Col></Row><Row><Col id=\"OPTN_TYPE_NAME\">가이드</Col><Col id=\"OPTN_TYPE_CODE\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"SPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SPR_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SPR_NAME\">선택</Col><Col id=\"SPR_CODE\"/></Row><Row><Col id=\"SPR_NAME\">A</Col><Col id=\"SPR_CODE\">10</Col></Row><Row><Col id=\"SPR_NAME\">B</Col><Col id=\"SPR_CODE\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dateSet", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"NAME\">1일</Col><Col id=\"CODE\">1DAY</Col></Row><Row><Col id=\"NAME\">1주일</Col><Col id=\"CODE\">1WEEK</Col></Row><Row><Col id=\"NAME\">2주일</Col><Col id=\"CODE\">2WEEK</Col></Row><Row><Col id=\"NAME\">1개월</Col><Col id=\"CODE\">1MONTH</Col></Row><Row><Col id=\"NAME\">3개월</Col><Col id=\"CODE\">3MONTH</Col></Row><Row><Col id=\"NAME\">6개월</Col><Col id=\"CODE\">6MONTH</Col></Row><Row><Col id=\"NAME\">1년</Col><Col id=\"CODE\">1YEAR</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","0",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","35","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("대표상품ID");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","149","35","734","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","882","35","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("상품군");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","1011","35",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","64","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","149","64","734","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","882","64","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","1011","64",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","95","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","149","95","734","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","882","95","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("옵션타입");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","1011","95",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit32","159","39","295","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit34","1021","39","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo41","159","68","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_dateType");
            obj.set_codecolumn("DATE_CODE");
            obj.set_datacolumn("DATE_TYPE");
            obj.set_text("등록일");
            obj.set_value("REG_DT");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar42","314","68","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","458","68","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar43","471","68","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo44","616","68","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_dateSet");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("1주일");
            obj.set_value("1WEEK");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo49","1021","99","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_optnType");
            obj.set_codecolumn("OPTN_TYPE_CODE");
            obj.set_datacolumn("OPTN_TYPE_NAME");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button57",null,"200","65","25","85",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"200","60","25","20",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","20","290",null,"34","10",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("목록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","20","325","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("(총 0건 1/1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button62",null,"320","81","24","331",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("일괄등록/수정");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo65",null,"320","110","24","20",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("50개씩 보기");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","354",null,"350","20",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_binddataset("ds_search");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"순서변경\"/><Cell col=\"2\" text=\"SSP카테고리\"/><Cell col=\"3\" text=\"전시상품명\"/><Cell col=\"4\" text=\"대표상품ID\"/><Cell col=\"5\" text=\"상품명\"/><Cell col=\"6\" text=\"대표규격\"/><Cell col=\"7\" text=\"제조원\"/><Cell col=\"8\" text=\"원산지\"/><Cell col=\"9\" text=\"주문단위\"/><Cell col=\"10\" text=\"전시상품타입\"/><Cell col=\"11\" text=\"옵션타입\"/><Cell col=\"12\" text=\"추가정보수취\"/><Cell col=\"13\" text=\"담당팀\"/><Cell col=\"14\" text=\"담당자\"/><Cell col=\"15\" text=\"등록일\"/><Cell col=\"16\" text=\"변경일\"/><Cell col=\"17\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/><Cell col=\"12\" text=\"bind:Column12\"/><Cell col=\"13\" text=\"bind:Column13\"/><Cell col=\"14\" text=\"bind:Column14\"/><Cell col=\"15\" text=\"bind:Column15\"/><Cell col=\"16\" text=\"bind:Column16\"/><Cell col=\"17\" text=\"bind:Column17\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button33_00_00_00","458","39","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Div("div_page_wrap","20","734",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Button("btn_paging_first","339","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_taborder("90");
            obj.set_cssclass("btn_WF_paging_first");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_prev","373","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_taborder("91");
            obj.set_cssclass("btn_WF_paging_prev");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_01","407","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_text("1");
            obj.set_taborder("80");
            obj.set_cssclass("btn_WF_paging");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_02","441","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_text("2");
            obj.set_taborder("81");
            obj.set_cssclass("btn_WF_paging");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_03","475","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_text("3");
            obj.set_taborder("82");
            obj.set_cssclass("btn_WF_paging");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_04","509","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_text("4");
            obj.set_taborder("83");
            obj.set_cssclass("btn_WF_paging");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_05","543","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_text("5");
            obj.set_taborder("84");
            obj.set_cssclass("btn_WF_paging");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_06","577","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_text("6");
            obj.set_taborder("85");
            obj.set_cssclass("btn_WF_paging");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_07","611","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_text("7");
            obj.set_taborder("86");
            obj.set_cssclass("btn_WF_paging");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_08","645","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_text("8");
            obj.set_taborder("87");
            obj.set_cssclass("btn_WF_paging");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_09","679","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_text("9");
            obj.set_taborder("88");
            obj.set_cssclass("btn_WF_paging");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_10","713","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_text("1111");
            obj.set_taborder("89");
            obj.set_cssclass("btn_WF_paging");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_next","747","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_taborder("92");
            obj.set_cssclass("btn_WF_paging_next");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_last","781","0","30","30",null,null,null,null,null,null,this.div_page_wrap.form);
            obj.set_taborder("93");
            obj.set_cssclass("btn_WF_paging_last");
            this.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("Button47_00","1225","38","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00","148","157","734","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00","881","157","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00","1010","157",null,"32","21",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo50_00","158","161","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_innerdataset("ds_sprCd");
            obj.set_codecolumn("SPR_CODE");
            obj.set_datacolumn("SPR_NAME");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00","20","157","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("전시상품타입");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00","20","126","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("담당팀");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static13_00","148","126","734","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static66_00","881","126","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static11_00","1010","126",null,"32","21",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit45_00","1020","130","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit46_00","1096","130","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Button("Button47_01","1225","130","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Button("Button62_00",null,"320","81","24","415",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("Button62_01",null,"320","81","24","247",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("순서 저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"320","110","24","134",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo49_00","1020","68","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("USE_YN");
            obj.set_datacolumn("USE_NAME");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit45_00_00","159","130","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Button("Button47_01_00","365","130","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit46_00_00","236","130","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit45_00_00_00","159","99","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit46_00_00_00","236","99","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Button("Button47_01_00_00","364","99","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1340,990,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("displayProductList.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          CREATION DATES : 2022.02.08
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        	this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//조회
        	this.fn_search = function()	{
        		var sSvcId = "displayProductSelectList";
        		var sUrl = "/displayProductSelectList.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_dispProductList=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "sampleSelect"){
        			this.ds_sampleList.addColumn("_CHK","String");

        //			trace(this.ds_sampleList.getRowCount());
        			//paging 처리
        			this.div_paging.form.cfn_createPage(this.div_paging,1912,this.cbo_page.value,"fn_pageCallback");
        		}
        	}

        	this.fn_pageCallback = function(){
        		var oPaging = this.div_paging;
        		this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_page.value);
        		this.fn_search();
        	}
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		this.grd_mainList.uSortFlag = "true";
        		this.grd_mainList.uCellSizeType = "true";

        		this.div_paging.uPageNum=0;
        		this.div_paging.uPageRowCnt = 10;
        	}
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//조회 버튼 click  이벤트
        	this.btn_search_onclick = function(obj,e)
        	{
        		this.fn_search();
        	};

        this.Button00_onclick = function(obj,e)
        {
        	trace("Quick Frame ===>"+this.fv_oApp.agv_QuickFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_QuickFrame.getOffsetHeight());
        	trace("Left Frame ===>"+this.fv_oApp.agv_LeftFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_LeftFrame.getOffsetHeight());
        	trace("Main Frame ===>"+this.fv_oApp.agv_MainFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_MainFrame.getOffsetHeight());
        	trace("Mdi Frame ===>"+this.fv_oApp.agv_MdiFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_MdiFrame.getOffsetHeight());
        	trace("Work Frame Set===>"+this.fv_oApp.agv_WorkFrameSet.getOffsetWidth() + " : " +  this.fv_oApp.agv_WorkFrameSet.getOffsetHeight());
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static04.addEventHandler("onclick",this.Static04_onclick,this);
            this.Combo41.addEventHandler("onitemchanged",this.Combo41_onitemchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Grid00.addEventHandler("ondrag",this.Grid00_ondrag,this);
            this.div_page_wrap.form.btn_paging_prev.addEventHandler("onclick",this.div_page_wrap_btn_paging_prev_onclick,this);
        };
        this.loadIncludeScript("displayProductList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
