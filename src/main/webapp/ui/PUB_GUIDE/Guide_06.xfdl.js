(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_06");
            this.set_titletext("Search, Input");
            this.getSetter("classname").set("Guide_06");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,1015);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static34","180","676","1008","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WFDA_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","135","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Name");
            obj.set_cssclass("sta_guide_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","134","0",null,"26","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Component View");
            obj.set_cssclass("sta_guide_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","210","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Search Area");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","589","135","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Detail Area");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","135","50","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Search 기본");
            obj.set_cssclass("sta_WF_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","175","75","1008","42",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WFSA_Area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","57","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WFSA_Label01");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","77","10","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_value("가나다라마");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_01_00","223","10","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static29","164","75","8","41",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_cssclass("sta_leftGuide");
            this.addChild(obj.name, obj);

            obj = new Static("Static92","189","133","635","52",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("※ 1줄 추가시 Height 30px씩 증가함\r\n※ 좌우 들여쓰기 10px로 간격을 지정한다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","180","704","1008","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WFDA_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","243","76","10","14",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_topGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","241","66","16","13",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","353","76","40","14",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_topGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","489","76","8","10",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static93","389","65","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static109","398","118","54","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("140");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static110","1142","118","41","8",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_bottomGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static111","1188","75","8","41",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static112","436","85","14","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("24");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","240",null,"330","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","56",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static07","20","87",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static65","20","118",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static13","20","149",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static17","20","180",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static21","20","211",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27","20","242",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","20","56","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("상품ㆍ그룹ID");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04","882","56","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static06","20","87","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static08","882","87","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_text("규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static10","20","118","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static66","882","118","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static12","20","149","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_text("키워드");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static14","882","149","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("대표상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static16","20","180","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static18","882","180","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static20","20","211","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("17");
            obj.set_text("SSP상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static22","451","211","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_text("S-MRO상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static24","882","211","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_text("가격대상");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26","20","242","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("20");
            obj.set_text("상품배지");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static28","451","242","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static30","882","242","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit32","159","60","295","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("23");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button33","Edit32:4","60","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit34","1021","60","200","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("25");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox35","1230","60","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("26");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo36","159","91","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("27");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit37","Combo36:4","91","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit38","Edit37:4","91","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button39","Edit38:4","91","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_search02");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit40","1021","91","200","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("31");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo41","159","122","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("32");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar42","Combo41:4","122","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("33");
            obj.set_cssclass("cal_WF_calendar");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static59","457","122","9","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("34");
            obj.set_text("~");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar43","470","122","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("35");
            obj.set_cssclass("cal_WF_calendar");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo44","Calendar43:4","122","130","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("36");
            obj.set_text("Combo00");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit45","1021","122","70","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit46","Edit45:4","122","125","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button47","Edit46:4","122","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_search02");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo48","159","153","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("40");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo49","1021","153","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("41");
            obj.set_text("대표상품구분");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit69","313","153","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit70","Edit69:4","153","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button71","Edit70:4","153","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_search02");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-73","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("45");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-73","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("46");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo52","159","215","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("47");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo53","590","215","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("48");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo54","1021","215","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("49");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo55","159","246","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo56","590","246","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("51");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button33_00","Button33:4","60","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_multi");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00","Button33_00:4","60","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_multi_off");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00_00","Button33_00_00:4","60","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("54");
            obj.set_cssclass("btn_WF_document");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00_00_00","Button33_00_00_00:4","60","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("55");
            obj.set_cssclass("btn_WF_addfile");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button58","20","20","60","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("56");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button57","84","20","110","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("57");
            obj.set_text("My상품 등록요청");
            obj.set_cssclass("btn_WF_default");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_Extend","20","273","130","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("58");
            obj.set_text("확장조회");
            obj.set_cssclass("btn_WF_extend");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button57_00","198","20","70","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("59");
            obj.set_text("등록요청");
            obj.set_cssclass("btn_WF_default");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div_top_info","20","627",null,"290","20",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00","0","251",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("(019364)박등록");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static27","0","220",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("재고");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static21","0","189",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static17_00","0","158",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static17","0","127",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static23_01","0","96",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static65","0","65",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static07","0","34",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static03","0","3",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static02","0","3","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("0");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22_00","431","3","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("2");
            obj.set_text("대표상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04","862","3","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("4");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static06","0","34","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("6");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static08","862","34","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("8");
            obj.set_text("브랜드명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static10","0","65","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("10");
            obj.set_text("해시Tag");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static66","862","65","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("12");
            obj.set_text("R&D 상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static12","0","96","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("14");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22_01","431","96","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("21");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static14","862","96","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("25");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16","0","127","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("29");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static18","862","127","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("31");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static19","991","127",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16_00","0","158","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("33");
            obj.set_text("Hub취급가능여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static18_00","862","158","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("37");
            obj.set_text("화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("false");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static20","0","189","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("39");
            obj.set_text("배수주문수량");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22","431","189","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("41");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static24","862","189","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("42");
            obj.set_text("요청구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static25","991","189",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("자사");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static26","0","220","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("44");
            obj.set_text("재고여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static28","431","220","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("46");
            obj.set_text("카테고리킬러구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static29","560","220","303","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("R&D");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static30","862","220","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("48");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static31","991","220",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("2021-04-29 13:54:04");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static26_00","0","251","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("50");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static28_00","431","251","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("52");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static29_00","560","251","303","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("2021-04-29 13:54:04");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static30_00","862","251","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("55");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static31_00","991","251",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("(019364)박수정");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio00","570","8","285","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div_top_info_form_Radio00_innerdataset = new nexacro.NormalDataset("Div_top_info_form_Radio00_innerdataset", obj);
            Div_top_info_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Aa</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Bb</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Cc</Col></Row></Rows>");
            obj.set_innerdataset(Div_top_info_form_Radio00_innerdataset);
            obj.set_text("A");
            obj.set_value("1");
            obj.set_index("0");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("rdo_sangpum","1002","7","285","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div_top_info_form_rdo_sangpum_innerdataset = new nexacro.NormalDataset("Div_top_info_form_rdo_sangpum_innerdataset", obj);
            Div_top_info_form_rdo_sangpum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">B</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">C</Col></Row></Rows>");
            obj.set_innerdataset(Div_top_info_form_rdo_sangpum_innerdataset);
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit01","140","38","701","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("7");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit02","1002","38","283","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("9");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit03","140","69","701","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("11");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio02","1002","69","200","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("13");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit04","140","100","80","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit05","Edit04:4","100","50","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01","Edit05:4","100","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static59_00","307","100","9","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("18");
            obj.set_text("/");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit06","317","100","50","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("Button02","Edit06:4","100","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit07","570","100","120","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit08","Edit07:4","100","119","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("Button03","Edit08:4","100","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit09","1002","100","120","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit10","Edit09:4","100","119","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_searchWon","Edit10:4","100","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_search02");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio04","140","162","140","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("34");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static32","431","158","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("35");
            obj.set_text("불가사유");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo36_00","570","162","150","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_top_info_form_Combo36_00_innerdataset = new nexacro.NormalDataset("Div_top_info_form_Combo36_00_innerdataset", obj);
            Div_top_info_form_Combo36_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">BA</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">CA</Col></Row></Rows>");
            obj.set_innerdataset(Div_top_info_form_Combo36_00_innerdataset);
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio03","1002","131","140","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("32");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio05","1002","162","140","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("38");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit11","140","193","135","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("40");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-135","150","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("63");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-135","150","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("64");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio04_00","140","131","140","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("30");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","129","4","303","31",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("0000000000");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit11_00","140","224","135","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("45");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit11_00_00","140","255","135","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("51");
            obj.set_cssclass("edi_WF_error");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Spin("Spin00","570","194","60","23",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("69");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("Button02_00","725","162","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("68");
            obj.set_cssclass("btn_WF_multiCombo");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("Button03_00","100","224","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("70");
            obj.set_cssclass("btn_WF_help");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static92_00","159","910","635","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("※ 입력에러시 사용");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","1349","0","450",null,null,"-40",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","0","0",null,"21","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("0");
            obj.set_text("< 변경이력 >");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            obj.set_textAlign("center");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static63_00","0","30",null,"21","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("220308   color값 기표");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00","795","68","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("(normal) font-color : #000000   line :  #d4d4d4   bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00","795","90","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("(hover) font-color : #000000    line :  #4b597a    bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01","795","112","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("(disabled,Readonly) font-color : #aaaaaa   line :  #d4d4d4 bg: #f8f8f8");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01_00","795","133","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("(Error) font-color : #000000   line :  #b61539 bg: #f5dee3");
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
        this.registerScript("Guide_06.xfdl", function() {

        this.Static92_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static92.addEventHandler("onclick",this.Static92_onclick,this);
            this.Static78.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static93.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static109.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static112.addEventHandler("onclick",this.Static107_onclick,this);
            this.Div00_00.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00_00.form.Edit38.addEventHandler("onchanged",this.Div00_Edit38_onchanged,this);
            this.Div00_00.form.Button58.addEventHandler("onclick",this.Button58_onclick,this);
            this.Div00_00.form.Button57.addEventHandler("onclick",this.Div00_Button57_onclick,this);
            this.Div00_00.form.btn_Extend.addEventHandler("onclick",this.Div00_btn_Extend_onclick,this);
            this.Div00_00.form.Button57_00.addEventHandler("onclick",this.Div00_Button57_onclick,this);
            this.Div_top_info.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.Div_top_info.form.Radio00.addEventHandler("onitemchanged",this.Div_top_info_Radio00_onitemchanged,this);
            this.Div_top_info.form.Edit01.addEventHandler("onchanged",this.Div_top_info_Edit01_onchanged,this);
            this.Div_top_info.form.Edit06.addEventHandler("onchanged",this.Div_top_info_Edit06_onchanged,this);
            this.Div_top_info.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.Static92_00.addEventHandler("onclick",this.Static92_onclick,this);
            this.Div00_01.form.Static63_00.addEventHandler("onclick",this.Div00_Static63_00_onclick,this);
            this.Static19_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
        };
        this.loadIncludeScript("Guide_06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
