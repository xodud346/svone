(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_01");
            this.set_titletext("Sta, Edi, Msk, Txt, Cmb, Lst, Spn");
            this.getSetter("classname").set("Guide_01");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,1055);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">Option 1</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">Option 2</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">Option 3</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">Option 4</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">Option 5</Col></Row></Rows>");
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

            obj = new Static("Static00","10","25","135","290",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","264","135","105",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Edit");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","10","482","135","170",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","10","378","135","105",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","399","66","255","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("※ Static의 기본 높이를 24로 지정");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","170","154","551","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("12px \"Malgun Gothic\", \"맑은고딕\", \"Apple SD Gothic Neo\", \"dotum\", \"돋움\", \"arial\", \"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","160","40","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","275","40","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","160","62","71","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Serveone");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","275","62","71","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Serveone");
            obj.set_enable("false");
            obj.set_color("#aaaaaa");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","170","313","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("TOBESOFT");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","335","290","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","170","290","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","335","313","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("TOBESOFT");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","465","313","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("TOBESOFT");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","465","290","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","595","290","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Hover");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static107","280","318","15","14",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("24");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide_size");
            this.addChild(obj.name, obj);

            obj = new Static("Static108","273","313","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_visible("false");
            obj.set_cssclass("sta_leftGuide");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","171","314","5","19",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","140","293","894","1",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","335","401","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","170","401","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","465","401","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","595","401","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Hover");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","170","424","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_value("123456");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","335","424","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_value("123456");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","465","424","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("123456");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","595","424","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_value("123456");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","171","524","100","90",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_value("Normal Normal Normal Normal Normal\r\nNormal Normal Normal Normal Normal\r\nNormal Normal Normal Normal Normal\r\nNormal Normal Normal Normal Normal\r\nNormal Normal Normal Normal Normal\r\nNormal Normal Normal Normal Normal");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","336","524","100","90",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_value("Disabled");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","465","524","100","90",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_value("Readonly");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","595","524","100","90",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_value("Hover");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","273","424","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_visible("false");
            obj.set_cssclass("sta_leftGuide");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","264","425","5","19",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","172","525","5","88",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","172","525","98","5",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","335","501","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","170","501","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","465","501","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","595","501","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Hover");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","171","686","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("TOBESOFT");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","336","686","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_innerdataset("ds1_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_enable("false");
            obj.set_text("Option 1");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","465","686","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_cssclass("readonly");
            obj.set_text("Option 1");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","595","686","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_cssclass("essential");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","274","686","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_visible("false");
            obj.set_cssclass("sta_leftGuide");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","172","687","5","19",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","595","666","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("Hover");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","465","666","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","336","666","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","170","666","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","10","651","135","102",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Combo");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","363","65","15","14",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("24");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide_size");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","346","62","28","21",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_visible("false");
            obj.set_cssclass("sta_leftGuide");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","145","270",null,"5","-11",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","145","364",null,"5","-11",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","145","647",null,"5","-11",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","145","478",null,"5","-11",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","172","525","98","5",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","145","748",null,"5","-11",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","10","752","135","163",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","10","914","135","100",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("Spin");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","134","1065","694","5",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","170","790","115","94",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","335","790","115","94",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","171","791","5","92",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","595","932","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("Hover");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static76","465","932","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static77","335","932","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","170","932","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","170","771","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static80","335","771","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","170","955","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_value("50");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01","335","955","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_enable("false");
            obj.set_value("50");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02","465","955","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            obj.set_value("50");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin03","595","955","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            obj.set_accessibilityenable("true");
            obj.set_value("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static81","281","960","15","14",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("24");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide_size");
            this.addChild(obj.name, obj);

            obj = new Static("Static82","273","955","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_visible("false");
            obj.set_cssclass("sta_leftGuide");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","145","910",null,"5","-11",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","170","115","188","21",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("서브 타이틀1");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","725","290","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("Error");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static85","725","343","110","15",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("class : edi_WF_error");
            obj.set_cssclass("sta_WF_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","725","313","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_value("TOBESOFT");
            obj.set_cssclass("edi_WF_error");
            this.addChild(obj.name, obj);

            obj = new Static("Static86","725","401","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("Error");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static87","725","454","125","15",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("class : msk_WF_error");
            obj.set_cssclass("sta_WF_InstTxt");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05","725","424","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_value("123456");
            obj.set_cssclass("msk_WF_error");
            this.addChild(obj.name, obj);

            obj = new Static("Static88","725","620","110","15",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("class : cbo_WF_error");
            obj.set_cssclass("sta_WF_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static89","725","501","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("Error");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea05","725","524","100","90",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_value("Error");
            obj.set_cssclass("txt_WF_error");
            this.addChild(obj.name, obj);

            obj = new Static("Static90","725","716","110","15",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("class : cbo_WF_error");
            obj.set_cssclass("sta_WF_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static91","725","666","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("Error");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05","725","686","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_cssclass("cbo_WF_error");
            obj.set_text("Option 1");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static92","725","986","110","15",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("class : spn_WF_error");
            this.addChild(obj.name, obj);

            obj = new Static("Static93","725","932","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("Error");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin05","725","955","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("spn_WF_error");
            obj.set_value("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00","172","189","551","26",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("Static의 기본 높이를 24로 지정");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00","173","219","551","26",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("color : #000000;");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit40","595","312","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_value("TOBESOFT");
            obj.set_text("TOBESOFT");
            this.addChild(obj.name, obj);

            obj = new Static("Static81_00","281","690","15","14",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("24");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide_size");
            this.addChild(obj.name, obj);

            obj = new Static("Static107_00","280","428","15","14",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("24");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide_size");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1349","0","450",null,null,"0",null,null,null,null,this);
            obj.set_taborder("102");
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

            obj = new Static("Static19_00_00_00","835","148","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("(normal) font-color : #000000   line :  #d4d4d4   bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00","835","170","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("(hover) font-color : #000000    line :  #4b597a    bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01","835","192","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("(disabled,Readonly) font-color : #aaaaaa   line :  #d4d4d4 bg: #f8f8f8");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01_00","835","213","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("(Error) font-color : #000000   line :  #b61539 bg: #f5dee3");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","850","686","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_cssclass("comboTextRight");
            obj.set_text("TOBESOFT");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static51_00","850","663","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("TextRight");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","984","686","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_innerdataset("ds_list");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_cssclass("comboTextCenter");
            obj.set_text("TOBESOFT");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static51_00_00","984","663","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("TextCenter");
            obj.set_cssclass("sta_guide_InstTxt");
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
        this.registerScript("Guide_01.xfdl", function() {

        this.Static07_onclick = function(obj,e)
        {

        };

        this.Static19_onclick = function(obj,e)
        {

        };

        this.Static13_onclick = function(obj,e)
        {

        };

        this.Static62_onclick = function(obj,e)
        {

        };

        this.TextArea03_onchanged = function(obj,e)
        {

        };

        this.Div00_Static63_00_onclick = function(obj,e)
        {

        };

        this.Div00_TextArea00_onchanged = function(obj,e)
        {

        };

        this.Static19_00_00_00_onclick = function(obj,e)
        {

        };

        this.Static51_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static07.addEventHandler("onclick",this.Static07_onclick,this);
            this.Static13.addEventHandler("onclick",this.Static13_onclick,this);
            this.Static107.addEventHandler("onclick",this.Static107_onclick,this);
            this.TextArea03.addEventHandler("onchanged",this.TextArea03_onchanged,this);
            this.Static66.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static81.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static81_00.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static107_00.addEventHandler("onclick",this.Static107_onclick,this);
            this.Div00.form.Static63_00.addEventHandler("onclick",this.Div00_Static63_00_onclick,this);
            this.Static19_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static51_00.addEventHandler("onclick",this.Static51_00_onclick,this);
            this.Static51_00_00.addEventHandler("onclick",this.Static51_00_onclick,this);
        };
        this.loadIncludeScript("Guide_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
