(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_03");
            this.set_titletext("Tab, PopM, Menu, FileUpload");
            this.getSetter("classname").set("Guide_03");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,811);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">인사관리</Col><Col id=\"Caption\">인사관리</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1000</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"UserData\">15321</Col><Col id=\"Caption\">123</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"UserData\">123</Col><Col id=\"Caption\">123</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">인사마스터생성</Col><Col id=\"Caption\">인사마스터생성</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1001</Col><Col id=\"hotkey\"/></Row><Row><Col id=\"UserData\">인적사항</Col><Col id=\"Caption\">인적사항</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\"/><Col id=\"idx\">1002</Col></Row><Row><Col id=\"UserData\">개인사진등록 신청</Col><Col id=\"Caption\">개인사진등록 신청</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1003</Col></Row><Row><Col id=\"UserData\">개인사진등록 관리(승인 )</Col><Col id=\"Caption\">개인사진등록 관리</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1004</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">인사관리</Col><Col id=\"Caption\">인사관리</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1000</Col></Row><Row><Col id=\"UserData\">인사마스터생성</Col><Col id=\"Caption\">인사마스터생성</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1001</Col><Col id=\"hotkey\">Ctrl+F2</Col></Row><Row><Col id=\"UserData\">인적사항</Col><Col id=\"Caption\">인적사항</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\">Alt+K</Col><Col id=\"idx\">1002</Col></Row><Row><Col id=\"UserData\">개인사진등록 신청</Col><Col id=\"Caption\">개인사진등록 신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1003</Col></Row><Row><Col id=\"UserData\">개인사진등록 관리(승인 )</Col><Col id=\"Caption\">개인사진등록 관리</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1004</Col></Row><Row><Col id=\"UserData\">보훈자 관리</Col><Col id=\"Caption\">보훈자 관리</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1005</Col></Row><Row><Col id=\"UserData\">징계 관리</Col><Col id=\"Caption\">징계 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1006</Col></Row><Row><Col id=\"UserData\">포상 등록 신청</Col><Col id=\"Caption\">포상 등록 신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1007</Col></Row><Row><Col id=\"UserData\">포상 관리(승인 )</Col><Col id=\"Caption\">포상 관리(승인 )</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1008</Col></Row><Row><Col id=\"UserData\">신원보증관리</Col><Col id=\"Caption\">신원보증관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1009</Col></Row><Row><Col id=\"UserData\">증명서 관리</Col><Col id=\"Caption\">증명서 관리</Col><Col id=\"lev\">2</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1010</Col></Row><Row><Col id=\"UserData\">개인정보(특이사항) 관리</Col><Col id=\"Caption\">개인정보(특이사항) 관리</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1011</Col></Row><Row><Col id=\"UserData\">인원현황</Col><Col id=\"Caption\">인원현황</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1012</Col></Row><Row><Col id=\"UserData\">인원현황 보고서</Col><Col id=\"Caption\">인원현황 보고서</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1013</Col></Row><Row><Col id=\"UserData\">재고용대상자</Col><Col id=\"Caption\">재고용대상자</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1014</Col></Row><Row><Col id=\"UserData\">연령별인원현황</Col><Col id=\"Caption\">연령별인원현황</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1015</Col></Row><Row><Col id=\"UserData\">인사기록카드 출력</Col><Col id=\"Caption\">인사기록카드 출력</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1016</Col></Row><Row><Col id=\"UserData\">기념일 조회</Col><Col id=\"Caption\">기념일 조회</Col><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1017</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">인사관리(개인)</Col><Col id=\"Caption\">인사관리(개인)</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1100</Col></Row><Row><Col id=\"UserData\">인적사항(개인)</Col><Col id=\"Caption\">인적사항(개인)</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1101</Col></Row><Row><Col id=\"UserData\">증명서인쇄</Col><Col id=\"Caption\">증명서인쇄</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1102</Col></Row><Row><Col id=\"UserData\">재고용신청서</Col><Col id=\"Caption\">재고용신청서</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1103</Col></Row><Row><Col id=\"UserData\">조직 및 사원조회</Col><Col id=\"Caption\">조직 및 사원조회</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1104</Col></Row><Row><Col id=\"UserData\">개인사진등록 신청</Col><Col id=\"Caption\">개인사진등록 신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1105</Col></Row><Row><Col id=\"UserData\">포상 등록 신청</Col><Col id=\"Caption\">포상 등록 신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1106</Col></Row><Row><Col id=\"UserData\">인사정보조회</Col><Col id=\"Caption\">인사정보조회</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1200</Col></Row><Row><Col id=\"UserData\">인적사항(인사위)</Col><Col id=\"Caption\">인적사항(인사위)</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1201</Col></Row><Row><Col id=\"UserData\">발령관리</Col><Col id=\"Caption\">발령관리</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1300</Col></Row><Row><Col id=\"UserData\">발령코드관리</Col><Col id=\"Caption\">발령코드관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1301</Col></Row><Row><Col id=\"UserData\">일괄발령 관리</Col><Col id=\"Caption\">일괄발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1302</Col></Row><Row><Col id=\"UserData\">연례호봉발령 관리</Col><Col id=\"Caption\">연례호봉발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1303</Col></Row><Row><Col id=\"UserData\">승진발령 관리</Col><Col id=\"Caption\">승진발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1304</Col></Row><Row><Col id=\"UserData\">승진자 DM주소 출력</Col><Col id=\"Caption\">승진자 DM주소 출력</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\">Alt+O</Col><Col id=\"idx\">1305</Col></Row><Row><Col id=\"UserData\">특별호봉승급 관리</Col><Col id=\"Caption\">특별호봉승급 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1306</Col></Row><Row><Col id=\"UserData\">재계약 대상자 관리</Col><Col id=\"Caption\">재계약 대상자 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1307</Col></Row><Row><Col id=\"UserData\">발령 추천서 작성</Col><Col id=\"Caption\">발령 추천서 작성</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1308</Col></Row><Row><Col id=\"UserData\">발령 추천자 지정</Col><Col id=\"Caption\">발령 추천자 지정</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1309</Col></Row><Row><Col id=\"UserData\">발령 추천서 승인</Col><Col id=\"Caption\">발령 추천서 승인</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1310</Col></Row><Row><Col id=\"UserData\">재고용추천</Col><Col id=\"Caption\">재고용추천</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1311</Col></Row><Row><Col id=\"UserData\">개별발령 관리</Col><Col id=\"Caption\">개별발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1312</Col></Row><Row><Col id=\"UserData\">자매사 발령 관리</Col><Col id=\"Caption\">자매사 발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1313</Col></Row><Row><Col id=\"UserData\">발령조회(전사원)</Col><Col id=\"Caption\">발령조회(전사원)</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1314</Col></Row><Row><Col id=\"UserData\">사외파견</Col><Col id=\"Caption\">사외파견</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1400</Col></Row><Row><Col id=\"UserData\">사외파견 인력관리</Col><Col id=\"Caption\">사외파견 인력관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1401</Col></Row><Row><Col id=\"UserData\">노조관리</Col><Col id=\"Caption\">노조관리</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1500</Col></Row><Row><Col id=\"UserData\">인적사항(노조)</Col><Col id=\"Caption\">인적사항(노조)</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1501</Col></Row><Row><Col id=\"UserData\">노조원 관리</Col><Col id=\"Caption\">노조원 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1502</Col></Row><Row><Col id=\"UserData\">노조원직책 관리</Col><Col id=\"Caption\">노조원직책 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1503</Col></Row><Row><Col id=\"UserData\">노조비공제 현황</Col><Col id=\"Caption\">노조비공제 현황</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1504</Col></Row><Row><Col id=\"UserData\">노조원 현황</Col><Col id=\"Caption\">노조원 현황</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1505</Col></Row><Row><Col id=\"UserData\">사내공모</Col><Col id=\"Caption\">사내공모</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1600</Col></Row><Row><Col id=\"UserData\">사내공모 공고 관리</Col><Col id=\"Caption\">사내공모 공고 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1601</Col></Row><Row><Col id=\"UserData\">사내공모  신청</Col><Col id=\"Caption\">사내공모  신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1602</Col></Row><Row><Col id=\"UserData\">사내공모  관리</Col><Col id=\"Caption\">사내공모  관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1603</Col></Row><Row><Col id=\"UserData\">사내공모 이력 조회</Col><Col id=\"Caption\">사내공모 이력 조회</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1604</Col></Row><Row><Col id=\"UserData\">통계정보</Col><Col id=\"Caption\">통계정보</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1700</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","10","0","135","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Name");
            obj.set_cssclass("sta_guide_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","144","0",null,"26","-10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Component View");
            obj.set_cssclass("sta_guide_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","65","135","95",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Tab");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","10","621","135","95",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Menu");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","145","757",null,"5","-10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","145","651",null,"5","-10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","150","56","434","134",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_cssclass("tab_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button36","212","294","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_shuttleL_on");
            this.addChild(obj.name, obj);

            obj = new Button("Button37","273","294","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_shuttleL");
            obj.set_enable("false");
            obj.set_escapebutton("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button40","212","330","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_shuttleR_on");
            this.addChild(obj.name, obj);

            obj = new Button("Button41","273","330","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_shuttleR");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","285","135","110",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Suttle Button");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnHome","150","655","38","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_MDI_Home");
            obj.set_tooltiptext("Home");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_mdi","189","655",null,"35","67",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_tabbuttonheight("35");
            obj.set_cssclass("tab_MDI_Tab");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_mdi);
            obj.set_text("Tabpage2");
            this.tab_mdi.addChild(obj.name, obj);

            obj = new Button("btn_closeAll",null,"660","28","28","39",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_tooltiptext("Close All");
            obj.set_cssclass("btn_MDI_Allx");
            this.addChild(obj.name, obj);

            obj = new Static("sta_MDI_Line_01","150","688",null,"2","39",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Static00");
            obj.set_cssclass("sta_MDI_Line");
            this.addChild(obj.name, obj);

            obj = new Button("Button36_01","150","539","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_help");
            this.addChild(obj.name, obj);

            obj = new Button("Button40_01","212","539","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_help_on");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","10","485","135","110",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Help Button");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button40_02","212","366","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_shuttleLall_on");
            this.addChild(obj.name, obj);

            obj = new Button("Button41_02","273","366","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_shuttleLall");
            this.addChild(obj.name, obj);

            obj = new Button("Button40_02_00","212","402","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_shuttleRall_on");
            this.addChild(obj.name, obj);

            obj = new Button("Button41_02_00","273","402","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_shuttleRall");
            this.addChild(obj.name, obj);

            obj = new Button("Button36_00","151","294","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_shuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("Button40_00","151","330","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_shuttleR");
            this.addChild(obj.name, obj);

            obj = new Button("Button40_02_01","151","366","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_shuttleLall");
            this.addChild(obj.name, obj);

            obj = new Button("Button40_02_00_00","151","402","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_shuttleRall");
            this.addChild(obj.name, obj);

            obj = new Button("Button40_01_00","272","539","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_help");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","140","252","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","206","252","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Hover");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static77","265","252","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static78_00","140","512","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00","206","512","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Hover");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static77_00","265","512","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1349","0","450",null,null,"-244",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","0","0",null,"21","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("< 변경이력 >");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static63_00","0","30",null,"21","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("220308   color값 기표");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00","805","58","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("(normal) font-color : ##c7c7c7  line :  #c7c7c7   bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00","805","80","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("(hover) font-color : #4b597a    line :  #4b597a    bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01","805","102","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("(visited)  font-color : #4b597a    line :  #4b597a    bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02","805","288","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("(normal) font-color : #000000   line :  #d4d4d4   bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00_00","805","310","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("(hover) font-color : #4b597a    line :  #c1ceed    bg: #c1ceed");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01_01","805","332","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("(disabled) font-color : #aaaaaa   line :  #d4d4d4 bg: #c1ceed");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_00","805","478","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("(normal) font-color : #ffffff    bg: #5f5f69");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00_00_00","805","500","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("(hover) font-color : #ffffff    bg: #4b597a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01_01_00","805","522","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("(disabled) font-color : #ffffff    bg: #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_01","805","-72","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("(normal) font-color : #000000   line :  #d4d4d4   bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00_00_01","805","-50","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("(hover) font-color : #000000    line :  #4b597a    bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01_01_01","805","-28","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("(disabled,Readonly) font-color : #aaaaaa   line :  #d4d4d4 bg: #f8f8f8");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_00_00","805","578","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("(normal) font-color : #666666   line :  #d4d4d4   bg: #f1f1f1");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00_00_00_00","805","600","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("(hover) font-color : #ffffff   bold   line :  #384564   bg: #4b597a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01_01_00_00","805","622","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("(disabled,Readonly) font-color : #aaaaaa   line :  #d4d4d4   bg: #f8f8f8");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_03.xfdl", function() {
        /*function Button00_onclick(obj:Button,  e:ClickEventInfo)
        {
        	var nX   = system.clientToScreenX(obj, 0);
            var nY   = system.clientToScreenY(obj, obj.position.height);
        	this.pMenu.trackPopup(nX, nY);
        }*/

        this.Button00_onclick = function(obj,  e)
        {
        	var nX   = system.clientToScreenX(obj, 0);
            var nY   = system.clientToScreenY(obj, obj.position.height);
        	this.pMenu.trackPopup(nX, nY);
        }
        this.Tab00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.btnHome.addEventHandler("onclick",this.btnhome_onclick,this);
            this.tab_mdi.addEventHandler("onextrabuttonclick",this.tab_mdi_onextrabuttonclick,this);
            this.tab_mdi.addEventHandler("onchanged",this.tab_mdi_onchanged,this);
            this.tab_mdi.addEventHandler("onsetfocus",this.tab_mdi_onsetfocus,this);
            this.btn_closeAll.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.Div00.form.Static63_00.addEventHandler("onclick",this.Div00_Static63_00_onclick,this);
            this.Static19_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01_01_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00_00_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01_01_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01_01_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
        };
        this.loadIncludeScript("Guide_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
