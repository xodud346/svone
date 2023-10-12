(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_05");
            this.set_titletext("btn");
            this.getSetter("classname").set("Guide_05");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,960);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
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

            obj = new Static("Static00","10","280","135","95",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("공통영역(CRUD)\r\nButton\r\n");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","655","414","135","125",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Grid내 Button");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","135","614",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","414","135","125",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Search Button");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","135","410",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","25","135","266",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Common Button\r\n");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","173","81","42","8",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_bottomGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","218","92","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","146","147","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("24");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","173","95","138","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","427","100","138","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","251","120","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("4");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","135","266",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","173","278","43","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","173","430","73","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","10","618","135","90",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("조회영역\r\nShow/Hide");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button26","171","667","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_extend");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","171","635","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Normal : Show");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Button("Button27","391","667","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_hidden");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","391","635","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Normal : Hide");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","135","703",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","792","430","73","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","959","430","63","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","173","507","41","8",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_bottomGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","217","464","8","41",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","282","487","21","8",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_bottomGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","305","464","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","247","289","2","18",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_bottomGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","252","300","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("4");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","854","495","20","8",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_bottomGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","877","471","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","886","476","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("24");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","839","506","31","14",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("가변");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","851","466","2","11",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_bottomGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","789","454","14","13",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","143","327","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("24");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","144","322","8","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","231","700","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("130");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","171","681","71","8",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_bottomGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","313","677","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("30");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","245","667","8","11",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button62","172","141","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("일괄수정");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","257","141","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("Button58","170","470","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Button("Button57","234","470","110","26",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("My상품 등록요청");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Button("Button57_00","348","470","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("등록요청");
            obj.set_cssclass("btn_WF_default");
            obj.set_enable("true");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button62_00","172","321","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("일괄수정");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","257","321","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("Button33_00","658","668","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button33_00_00","758","668","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("Button33_00_00_00_01","862","668","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Button("Button33_00_00_00_00_00","960","668","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_addfile");
            this.addChild(obj.name, obj);

            obj = new Button("Button62_00_00","792","471","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("Grid버튼");
            this.addChild(obj.name, obj);

            obj = new Button("Button62_00_00_00","959","471","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Grid버튼");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00","859","454","14","13",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("10");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_01","349","454","14","13",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("10");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00_00","406","454","14","13",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("10");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static51_00","426","475","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("24");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static52_00","389","505","31","14",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("가변");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button62_01","427","141","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("일괄수정");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00","621","635","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("검색");
            obj.set_cssclass("sta_guide_InstTxt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00_00","721","635","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("멀티검색");
            obj.set_cssclass("sta_guide_InstTxt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00_00_00_00","821","635","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("멀티메모입력");
            obj.set_cssclass("sta_guide_InstTxt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00_00_00_00_00","926","635","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_guide_InstTxt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static11_00","427","280","138","22",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Button("Button62_01_00","427","321","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("일괄수정");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1349","0","450",null,null,"-260",null,null,null,null,this);
            obj.set_taborder("68");
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

            obj = new Static("Static19_00_00_00","745","128","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("(normal)  font-color : #ffffff   line : #5f5f69   bg: #5f5f69");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01","745","152","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("(disabled,Readonly)  font-color : #aaaaaa   line : #d4d4d4   bg: #f8f8f8");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01_00","745","174","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("(엑셀 다운로드)  font-color : #333333   line : #b61539   bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01_00_00","185","539","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("(검색내 일반버튼)  font-color : #333333 bold   line : ##d4d4d4   bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01_00_00_00","185","559","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("(검색내 조회버튼)  font-color : #ffffff bold   line : #b61539   bg: #b61539");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00","755","528","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("(normal)  font-color : #ffffff   line : #5f5f69   bg: #5f5f69");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01_01","755","552","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("(disabled,Readonly)  font-color : #aaaaaa   line : #d4d4d4   bg: #f8f8f8");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00_00","175","728","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("(normal)  font-color : #000000   line : #d4d4d4   bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00_00_00","655","728","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("(검색)  line : #d4d4d4   bg: #f8f8f8");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","3","795","135","90",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("버튼 위로 아래로");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","172","828","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("btn_Move_Up");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","357","828","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("btn_Move_Down");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00_00_01","172","864","94","26",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("btn_Move_Down");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00_00_01_00","357","864","94","26",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("btn_Move_Up");
            this.addChild(obj.name, obj);

            obj = new Button("Button33_00_01","660","840","13","13",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("btn_Ascending");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00_00_01_00_00","621","867","94","26",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("btn_Ascending");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00_00_01_00_00_00","745","867","94","26",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("btn_Descending");
            this.addChild(obj.name, obj);

            obj = new Button("Button33_00_01_00","784","840","13","13",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("btn_Ascending");
            obj.set_text("");
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
        this.registerScript("Guide_05.xfdl", function() {

        this.Button62_00_00_onclick = function(obj,e)
        {

        };

        this.Static24_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static23.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static12.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static47.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static51.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static52.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static54.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static55.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static59.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static61.addEventHandler("onclick",this.Static107_onclick,this);
            this.Button58.addEventHandler("onclick",this.Button58_onclick,this);
            this.Button57.addEventHandler("onclick",this.Div00_Button57_onclick,this);
            this.Button57_00.addEventHandler("onclick",this.Div00_Button57_onclick,this);
            this.Button62_00_00.addEventHandler("onclick",this.Button62_00_00_onclick,this);
            this.Button62_00_00_00.addEventHandler("onclick",this.Button62_00_00_onclick,this);
            this.Static54_00.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static54_01.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static54_00_00.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static51_00.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static52_00.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static24_00.addEventHandler("onclick",this.Static24_00_onclick,this);
            this.Static24_00_00.addEventHandler("onclick",this.Static24_00_onclick,this);
            this.Static24_00_00_00_00.addEventHandler("onclick",this.Static24_00_onclick,this);
            this.Static24_00_00_00_00_00.addEventHandler("onclick",this.Static24_00_onclick,this);
            this.Div00.form.Static63_00.addEventHandler("onclick",this.Div00_Static63_00_onclick,this);
            this.Static19_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00_00_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00_00_01_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00_00_01_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00_00_01_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
        };
        this.loadIncludeScript("Guide_05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
