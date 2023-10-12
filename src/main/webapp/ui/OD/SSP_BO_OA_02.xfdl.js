(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_02");
            this.set_titletext("주문상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_CRT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_FORM_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ORD_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM_01\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM_02\" type=\"STRING\" size=\"256\"/><Column id=\"DLGTE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DLGTE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DLGTE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DCN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_CRT_TP_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_FORM_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CHRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_CHRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_CHRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_DLGTE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"210","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","54",null,"156","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_background("transparent");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static65","0","62",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static13","0","93",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static17","0","124",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","862","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("채널 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","0","62","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("영업팀");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12","0","93","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("23");
            obj.set_text("MD 담당");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static16","0","124","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("24");
            obj.set_text("주문 대행");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_dlvForm","430","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("25");
            obj.set_text("배송 형태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static10_00","430","62","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("영업 담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12_00","430","93","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("27");
            obj.set_text("구매 담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static16_00","430","124","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("28");
            obj.set_text("대행 일시");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00","862","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("29");
            obj.set_text("발주 번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00","862","93","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("30");
            obj.set_text("운영 담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","862","124","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("31");
            obj.set_text("서브원 주문대행자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("32");
            obj.set_text("주문 번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","430","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("33");
            obj.set_text("주문 상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("34");
            obj.set_text("오더 유형");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","0","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","0","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","992","1","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","862","62","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("38");
            obj.set_text("영업 CS");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_odrNo","140","4","280","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_text("2008401698 | 10");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","420","1","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_odrStats","570","4","282","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("A31 | 결재 완료");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","852","0","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_chnSpr","1002","4","283","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("04 | SSP");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","1285","0","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_odrTp","140","35","280","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("Y110 | 일반주문");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salsTeam","140","66","280","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_text("경남영업1팀(마감)");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_purgTeam","140","97","280","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("MD 담당");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_odrDlgteYn","140","128","280","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_text("공기구/동력팀");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_dlvFormNm","570","35","282","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_text("04 | VMI");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salsChrpsn","570","66","282","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("01800057 | 허지혜");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsn","570","97","282","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_text("01300142 | 윤진석");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_ordNo","1002","35","283","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("- | -");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salsCS","1002","66","283","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("01200003 | 김지원");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_oprChrpsn","1002","97","283","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_text("12345678 | 홍길동");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_dlgteId","1002","128","78","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_text("12345678");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_dlgteNm","1084","128","201","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_text("이순신");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("medt_dlgteDtm","570","128","282","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("13");
            obj.set_type("string");
            obj.set_format("####-##-## ##:##:##");
            obj.set_readonly("true");
            obj.set_maskchar("#");
            obj.set_displaynulltext(" ");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_refresh",null,"20","80","30","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("새로고침");
            obj.set_cssclass("btn_WF_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_paging_last",null,"20","30","30","106",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_paging_last");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_paging_next",null,"20","30","30","140",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_paging_next");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_paging_01",null,"20","40","30","174",null,null,null,null,null,this.Div00.form);
            obj.set_text("10");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_paging");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_paging_prev",null,"20","30","30","218",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_paging_prev");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_paging_first",null,"20","30","30","252",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_paging_first");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:0",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colExt","20","-1","100","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("상세 정보  ∨");
            obj.set_cssclass("btn_WF_default");
            this.Div01.addChild(obj.name, obj);

            obj = new Tab("tab_main","20","Div01:30",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_basic");
            obj.set_preload("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_main);
            obj.set_text("고객 정보");
            obj.set_url("OD::SSP_BO_OA_02_01.xfdl");
            this.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_main);
            obj.set_text("결재/발주");
            obj.set_url("OD::SSP_BO_OA_15.xfdl");
            this.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab_main);
            obj.set_text("영업 정보");
            obj.set_url("OD::SSP_BO_OA_17.xfdl");
            this.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tab_main);
            obj.set_text("배송 정보");
            obj.set_url("OD::SSP_BO_OA_19.xfdl");
            this.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.tab_main);
            obj.set_text("정산 정보");
            obj.set_url("OD::SSP_BO_OA_22.xfdl");
            this.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.tab_main);
            obj.set_text("변경 이력");
            obj.set_url("OD::SSP_BO_OA_23.xfdl");
            this.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.tab_main);
            obj.set_text("주문 정보");
            obj.set_url("OD::SSP_BO_OA_24.xfdl");
            this.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.tab_main);
            obj.set_text("연계 정보");
            obj.set_url("OD::SSP_BO_OA_25.xfdl");
            this.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage9",this.tab_main);
            obj.set_text("물량 배분/분납");
            obj.set_url("OD::SSP_BO_OA_26.xfdl");
            this.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage10",this.tab_main);
            obj.set_text("VOC 현황");
            obj.set_url("OD::SSP_BO_OA_27.xfdl");
            this.tab_main.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item13","Div00.form.Div01.form.edt_odrNo","value","ds_list01","JNT_ODR_ITM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Div01.form.edt_odrStats","value","ds_list01","ODR_STATS_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.Div01.form.edt_chnSpr","value","ds_list01","CHN_SPR_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Div01.form.edt_odrTp","value","ds_list01","ODR_CRT_TP_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Div01.form.edt_salsTeam","value","ds_list01","SALS_TEAM_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.Div01.form.edt_purgTeam","value","ds_list01","MD_CHRPSN_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.Div01.form.edt_odrDlgteYn","value","ds_list01","JNT_DLGTE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.Div01.form.edt_dlvFormNm","value","ds_list01","DLV_FORM_SPR_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Div01.form.edt_salsChrpsn","value","ds_list01","SALS_CHR_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.Div01.form.edt_purgChrpsn","value","ds_list01","PURG_CHRPSN_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.Div01.form.edt_ordNo","value","ds_list01","ORD_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.Div01.form.edt_salsCS","value","ds_list01","SVC_CHRPSN_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.Div01.form.edt_oprChrpsn","value","ds_list01","OPR_CHRPSN_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.Div01.form.edt_dlgteId","value","ds_list01","ODR_DLGTE_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.Div01.form.edt_dlgteNm","value","ds_list01","ODR_DLGTE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div00.form.Div01.form.medt_dlgteDtm","value","ds_list01","ODR_DCN_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","OD::SSP_BO_OA_02_01.xfdl");
            this._addPreloadList("fdl","OD::SSP_BO_OA_15.xfdl");
            this._addPreloadList("fdl","OD::SSP_BO_OA_17.xfdl");
            this._addPreloadList("fdl","OD::SSP_BO_OA_19.xfdl");
            this._addPreloadList("fdl","OD::SSP_BO_OA_22.xfdl");
            this._addPreloadList("fdl","OD::SSP_BO_OA_23.xfdl");
            this._addPreloadList("fdl","OD::SSP_BO_OA_24.xfdl");
            this._addPreloadList("fdl","OD::SSP_BO_OA_25.xfdl");
            this._addPreloadList("fdl","OD::SSP_BO_OA_26.xfdl");
            this._addPreloadList("fdl","OD::SSP_BO_OA_27.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_02.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_02.xfdl", function() {
        // 주문관리 상세

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.odrNo = "";	// 주문 번호
        this.odrItmNo = "";	// 주문항목 번호
        this.bzplcId = "";	// 사업장 ID
        this.odrpsnId = "";	// 주문자id

        this.childForm;	// 하위 폼
        this.tabMainPostIndex = -1;		// 탭 - 이동할 인덱스
        this.moveType = {UNKNOWN:-1, FIRST:0, PREVIEW:1, NEXT:2, LAST:3, PREVIEW_TAB:10, NEXT_TAB:11};

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/

        this.SSP_BO_OA_02_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();
        	this.childForm = this.tab_main.tabpages[0].form;
        	this.fn_changeSearchArea(true);
        	this.fn_regShortCutMethod();

        	this.fn_onReload(true, this.parent.param1, this.parent.param2, this.parent.param3, this.parent.param4);
        };

        this.SSP_BO_OA_02_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {
        	var sSvcId = "selectOderDetailList";
        	var sUrl = "/od/oderlist/selectOderDetailList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectOderDetailList"){
        		// 지정된 ODR_ITM_NO로 이동
        		this.fn_setOdrItmNo(this.odrItmNo);
        		this.fn_showOrderDelegate();

        		// 탭화면 조회 처리
        		this.childForm.fn_searchOdrInfo(this.odrNo, this.odrItmNo, this.bzplcId, this.odrpsnId);
        	}
        	else if(svcID == "selectOdrNumberCount"){
        		if (this.totalCount > 0) {
        			this.fn_search();
        		}
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function() {
        	//search div 초기 설정
        	this.Div00.uMinSize = 117;
         	this.Div00.uMaxSize = 210;
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_changeSearchArea = function(flag) {
        	// 접기
        	if (flag == true) {
        		this.Div00.set_height(this.Div00.uMinSize);
        	}
        	// 펼치기
        	else {
        		this.Div00.set_height(this.Div00.uMaxSize);
        	}
        	this.resetScroll();
        };

        // 화면 초기화
        this.fn_initAndRequest = function() {
        	var jntOdrItmNo = this.parent.JNT_ODR_ITM_NO;
        };

        this.fn_searchMapSetting = function(odrNo, odrItmNo, bzplcId) {
        	this.ds_search.setColumn(0, "BZPLC_ID", bzplcId);
        	this.ds_search.setColumn(0, "ODR_NO", odrNo);
        	this.ds_search.setColumn(0, "ODR_ITM_NO", odrItmNo);
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);

        	trace(this.fn_getStrFromDataset(this.ds_search, 0));
        };

        this.fn_setOdrItmNo = function(odrItmNo) {
        	var odrItmNoIndex = this.fn_findOdrItmNo(odrItmNo);

        	if (odrItmNoIndex < 0) {
        		 return false;
        	}

        	this.ds_list01.set_rowposition(odrItmNoIndex);
        	this.fn_showSelectedIndexInPaging();
        	return true;
        };

        this.fn_findOdrItmNo = function(odrItmNo) {

        	if (this.ds_list01.rowcount <= 0) return -1;

        	for (var i = 0; i < this.ds_list01.rowcount; i++) {
        		if (this.ds_list01.getColumn(i, "ODR_ITM_NO") == odrItmNo) {
        			return i;
        		}
        	}

        	return -1;
        };

        this.fn_setFormVariables = function() {
        	this.odrNo = this.ds_list01.getColumn(this.ds_list01.rowposition, "ODR_NO");	// 주문 번호
        	this.odrItmNo = this.ds_list01.getColumn(this.ds_list01.rowposition, "ODR_ITM_NO");	// 주문항목 번호
        	//this.bzplcId = this.ds_list01.getColumn(this.ds_list01.rowposition, "BZPLC_ID");	// 사업장 ID
        };

        this.fn_movePrePosition = function() {
        	var nRow = this.ds_list01.rowposition;
        	if (nRow <= 0) {
        		return false;
        	}

        	this.ds_list01.set_rowposition(nRow - 1);
        	this.fn_showSelectedIndexInPaging();
        	this.fn_setFormVariables();
        	return true;
        };

        this.fn_moveNextPosition = function() {
        	var nRow = this.ds_list01.rowposition;
        	if (nRow >= this.ds_list01.rowcount - 1) {
        		return false;
        	}

        	this.ds_list01.set_rowposition(nRow + 1);
        	this.fn_showSelectedIndexInPaging();
        	this.fn_setFormVariables();
        	return true;
        };

        this.fn_moveLastPosition = function() {
        	this.ds_list01.set_rowposition(this.ds_list01.rowcount - 1);
        	this.fn_showSelectedIndexInPaging();
        	this.fn_setFormVariables();
        	return true;
        };

        this.fn_moveFirstPosition = function() {
        	this.ds_list01.set_rowposition(0);
        	this.fn_showSelectedIndexInPaging();
        	this.fn_setFormVariables();
        	return true;
        };

        this.fn_showSelectedIndexInPaging = function() {
        	this.Div00.form.btn_paging_01.set_text(this.ds_list01.getColumn(this.ds_list01.rowposition, "ODR_ITM_NO"));
        };

        this.fn_changeChildFormDataByOdrItmNo = function() {
        	this.childForm.fn_searchOdrInfo(this.odrNo, this.odrItmNo, this.bzplcId, this.odrpsnId);
        };

        this.fn_checkChildFormShouldSave = function() {
        	if (this.childForm.fn_shouldSave() == true) {
        		//trace("### 저장해야 됩니다.....");
        		return true;
        	}
        	else {
        		//trace("### 저장안해도 됩니다......");
        		return false;
        	}
        };

        this.fn_askingIgnoreSavingData = function() {
        	var rtn = this.confirm(this.fn_getMessage("ERRS000162"));
        	if (rtn) {
        		// "확인"
        		return false;
        	}
        	else {
        		// "취소"
        		return true;
        	}
        };

        //
        this.fn_showOrderDelegate = function() {
        	var delegateYn = this.ds_list01.getColumn(this.ds_list01.rowposition, "DLGTE_YN");
        	if (delegateYn == "Y") {
        		var delegateDtn = this.ds_list01.getColumn(this.ds_list01.rowposition, "ODR_DCN_DTM");
        		var delegateId = this.ds_list01.getColumn(this.ds_list01.rowposition, "ODR_DLGTE_ID");
        		var delegateNm = this.ds_list01.getColumn(this.ds_list01.rowposition, "ODR_DLGTE_NM");

        		this.Div00.form.Div01.form.medt_dlgteDtm.set_value(delegateDtn);
        		this.Div00.form.Div01.form.edt_dlgteId.set_value(delegateId);
        		this.Div00.form.Div01.form.edt_dlgteNm.set_value(delegateNm);
        	}
        	else {
        		//this.Div00.form.Div01.form.medt_dlgteDtm.set_value("");
        		this.Div00.form.Div01.form.edt_dlgteId.set_value("");
        		this.Div00.form.Div01.form.edt_dlgteNm.set_value("");
        	}
        };

        this.fn_afterFormLoad = function(obj, e) {
        	this.childForm.fn_searchOdrInfo(this.ds_list01.getColumn(this.ds_list01.rowposition, "ODR_NO"),
        									this.ds_list01.getColumn(this.ds_list01.rowposition, "ODR_ITM_NO"),
        									this.bzplcId,
        									this.odrpsnId);

        };

        // 페이지 이동시 하위 폼 저장작업 후 처리작업
        this.fn_afterSaveChildForm = function(moveStep, result) {
        	// 저장 성공
        	if(result == "S") {
        		if (moveStep == this.moveType.FIRST) {
        			if (this.fn_moveFirstPosition())	this.fn_changeChildFormDataByOdrItmNo();
        		}
        		else if (moveStep == this.moveType.PREVIEW) {
        			if (this.fn_movePrePosition())		this.fn_changeChildFormDataByOdrItmNo();
        		}
        		else if (moveStep == this.moveType.NEXT) {
        			if (this.fn_moveNextPosition())		this.fn_changeChildFormDataByOdrItmNo();
        		}
        		else if (moveStep == this.moveType.LAST) {
        			if (this.fn_moveLastPosition())		this.fn_changeChildFormDataByOdrItmNo();
        		}
        		else if (moveStep == this.moveType.PREVIEW_TAB || moveStep == this.moveType.NEXT_TAB) {
        			//trace("### fn_afterSaveChildForm - now tab index : " + this.tab_main.tabindex);
        			//this.tab_main.set_tabindex(this.tab_main.tabindex - 1);
        			trace("### fn_afterSaveChildForm(PREVIEW_TAB) - now this.tabMainPostIndex : " + this.tabMainPostIndex);
        			this.tab_main.set_tabindex(this.tabMainPostIndex);
        		}
        	}
        	else {

        	}
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodCtrlENTER("btn_refresh_onclick");
        	//this.fn_regMethodCtrlS("");
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 새로고침
        this.btn_refresh_onclick = function(obj,e)
        {
        	// 탭화면 수정내역 있음
        	if (this.childForm.fn_shouldSave()) {
        		trace("### btn_refresh_onclick 001 - 수정내역 있음");
        		if (this.fn_askingIgnoreSavingData()) {
        			this.fn_onReload(true, this.odrNo, this.odrItmNo, this.bzplcId, this.odrpsnId);
        		}
        		else {	// 저장해야됨
        			this.childForm.fn_saveChangedDataByParent();
        		}
        	}
        	else {
        		trace("### btn_refresh_onclick 002 - odrNo : " + this.odrNo + ", odrItmNo : " + this.odrItmNo + ", bzplcId : " + this.bzplcId + ", odrpsnId : " + this.odrpsnId);
        		this.fn_onReload(true, this.odrNo, this.odrItmNo, this.bzplcId, this.odrpsnId);
        	}
        };

        // 확장 조회 ∨  <--> 간편 조회 ∧
        this.btn_colExt = function(obj,e)
        {
        	// 접기
        	if (this.Div01.form.btn_colExt.text == "기본 정보 ∧") {
        		this.fn_changeSearchArea(true);
        		this.Div01.form.btn_colExt.set_text("상세 정보 ∨");
        	}
        	// 펼치기
        	else {
        		this.fn_changeSearchArea(false);
        		this.Div01.form.btn_colExt.set_text("기본 정보 ∧");
        	}
        };

        // 페이징 - 이전 버튼
        this.btn_paging_prev_onclick = function(obj,e)
        {
        	if (this.fn_checkChildFormShouldSave() == true) {
        		if (this.fn_askingIgnoreSavingData() == false) {
        			this.childForm.fn_saveChangedDataByParent(this.moveType.PREVIEW);
        			return;
        		}
        	}

        	if (this.fn_movePrePosition()) {
        		this.fn_changeChildFormDataByOdrItmNo();
        	}
        };

        // 페이징 - 다음 버튼
        this.btn_paging_next_onclick = function(obj,e)
        {
        	if (this.fn_checkChildFormShouldSave() == true) {
        		if (this.fn_askingIgnoreSavingData() == false) {
        			this.childForm.fn_saveChangedDataByParent(this.moveType.NEXT);
        			return;
        		}
        	}

        	if (this.fn_moveNextPosition()) {
        		this.fn_changeChildFormDataByOdrItmNo();
        	}
        };

        // 첫 페이지로
        this.btn_paging_first_onclick = function(obj,e)
        {
        	if (this.fn_checkChildFormShouldSave() == true) {
        		if (this.fn_askingIgnoreSavingData() == false) {
        			this.childForm.fn_saveChangedDataByParent(this.moveType.FIRST);
        			return;
        		}
        	}

        	if (this.fn_moveFirstPosition()) {
        		this.fn_changeChildFormDataByOdrItmNo();
        	}
        };

        // 마지막 페이지로
        this.btn_paging_last_onclick = function(obj,e)
        {
        	if (this.fn_checkChildFormShouldSave() == true) {
        		if (this.fn_askingIgnoreSavingData() == false) {
        			this.childForm.fn_saveChangedDataByParent(this.moveType.LAST);
        			return;
        		}
        	}

        	if (this.fn_moveLastPosition()) {
        		this.fn_changeChildFormDataByOdrItmNo();
        	}
        };

        /***********************************************************************************************
        * TAB EVENT 영역
        ************************************************************************************************/
        this.tab_main_canchange = function(obj,e)
        {
        	if (this.fn_checkChildFormShouldSave() == true) {
        		//trace("### tab_main_canchange - fn_checkChildFormShouldSave - true");
        		if (this.fn_askingIgnoreSavingData() == false) {

        			if ((e.preindex - e.postindex) < 0)	this.childForm.fn_saveChangedDataByParent(this.moveType.NEXT_TAB);
        			else	this.childForm.fn_saveChangedDataByParent(this.moveType.PREVIEW_TAB);
        			this.tabMainPostIndex = e.postindex;
        			return false;
        		}
        	}
        	return true;
        };
        // 탭변경
        this.tab_main_onchanged = function(obj,e)
        {
        	trace("### tab_main_onchanged - postindex : " + e.postindex);
        	this.childForm = this.tab_main.tabpages[e.postindex].form;

        	if (this.childForm.name != "form") {
        		this.childForm.fn_searchOdrInfo(this.ds_list01.getColumn(this.ds_list01.rowposition, "ODR_NO"),
        									this.ds_list01.getColumn(this.ds_list01.rowposition, "ODR_ITM_NO"),
        									this.bzplcId,
        									this.odrpsnId);
        	}
        };

        this.fn_onReload = function(bReload, strOdrNo, strOdrItmNo, strBzplcId, strOdrpsnId)
        {
        	// 전달인자
        	var bload = false;
        	if (bReload == true ) {
        		if(strOdrNo != undefined)		this.odrNo = strOdrNo;
        		if(strBzplcId != undefined)		this.bzplcId = strBzplcId;
        		if(strOdrItmNo != undefined)	this.odrItmNo = strOdrItmNo;
        		if(strOdrpsnId != undefined)	this.odrpsnId = strOdrpsnId;

        		trace("### odrNo : " + this.odrNo + ", odrItmNo : " + this.odrItmNo + ", bzplcId : " + this.bzplcId);
        		// 현재화면 조회 처리
        		this.set_titletext("주문상세-"+this.odrNo);
        		this.fn_searchMapSetting(this.odrNo, this.odrItmNo, this.bzplcId);
        		this.fn_search();
        	}
        	else {
        		if(strOdrItmNo != undefined) {
        			if( this.odrItmNo != strOdrItmNo ) {
        				this.odrItmNo = strOdrItmNo;
        				this.fn_searchMapSetting(this.odrNo, this.odrItmNo, this.bzplcId);
        				this.fn_search();
        			}
        		}
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_02_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_02_onkeyup,this);
            this.Div00.form.Div01.form.sta_dlvForm.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.btn_refresh.addEventHandler("onclick",this.btn_refresh_onclick,this);
            this.Div00.form.btn_paging_last.addEventHandler("onclick",this.btn_paging_last_onclick,this);
            this.Div00.form.btn_paging_next.addEventHandler("onclick",this.btn_paging_next_onclick,this);
            this.Div00.form.btn_paging_prev.addEventHandler("onclick",this.btn_paging_prev_onclick,this);
            this.Div00.form.btn_paging_first.addEventHandler("onclick",this.btn_paging_first_onclick,this);
            this.Div01.form.btn_colExt.addEventHandler("onclick",this.btn_colExt,this);
            this.tab_main.addEventHandler("onchanged",this.tab_main_onchanged,this);
            this.tab_main.addEventHandler("canchange",this.tab_main_canchange,this);
        };
        this.loadIncludeScript("SSP_BO_OA_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
