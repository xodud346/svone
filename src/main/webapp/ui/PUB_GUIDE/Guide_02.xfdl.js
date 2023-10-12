(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_02");
            this.set_titletext("Cal, chk, rdo, grb, pgb, img");
            this.getSetter("classname").set("Guide_02");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,1003);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("radio", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">남</Col></Row><Row><Col id=\"data\">여</Col><Col id=\"code\">2</Col></Row></Rows>");
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

            obj = new Static("Static00","10","25","135","138",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","190","135","105",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","10","381","135","170",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("GroupBox");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","10","295","135","105",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Radio");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","10","600","135","137",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("ProgressBar");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","145","287",null,"5","-10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","145","382",null,"5","-10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","145","596",null,"5","-11",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","145","426",null,"5","-10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","160","78","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("20150629");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","574","172","156","186",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","330","78","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("20150629");
            obj.set_enable("false");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","460","78","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("20150629");
            obj.set_readonly("true");
            obj.set_cssclass("readonly");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","590","77","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("20150629");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","273","78","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_visible("false");
            obj.set_cssclass("sta_leftGuide");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","595","57","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Hover");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","460","58","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Readonly");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","335","58","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","160","58","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","602","145","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("type=\"monthonly\"");
            obj.set_cssclass("sta_guide_InstTxt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","171","79","5","19",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","170","458","160","95",null,null,null,null,null,null,this);
            obj.set_text("GroupBox00");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","354","458","160","95",null,null,null,null,null,null,this);
            obj.set_text("GroupBox00");
            obj.set_taborder("24");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","170","437","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","354","437","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Button("btntest","631","682","97","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Progress Test");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("Pbr00","170","688","436","10",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_blocksize("15");
            obj.set_pos("30");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar02","415","649","190","10",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.set_pos("65");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","170","649","190","10",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_pos("65");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","170","621","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","415","621","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","370","647","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("34%");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","615","647","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("34%");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","185","239","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("체크박스");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","330","239","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("체크박스");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","175","373","8","13",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_visible("false");
            obj.set_cssclass("sta_leftGuide");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","185","387","13","8",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_visible("false");
            obj.set_cssclass("sta_bottomGuide");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","198","373","5","13",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_visible("false");
            obj.set_cssclass("sta_guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","340","207","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","185","207","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","340","316","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","185","316","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","185","347","81","21",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_columncount("2");
            obj.set_innerdataset("radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","330","347","81","21",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_columncount("2");
            obj.set_innerdataset("radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_enable("false");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","175","341","8","13",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_visible("false");
            obj.set_cssclass("sta_leftGuide");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","185","335","13","8",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_visible("false");
            obj.set_cssclass("sta_bottomGuide");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","198","341","7","13",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","10","766","135","157",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","145","752",null,"5","-11",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","290","788","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("Disabled");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","170","788","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","170","811","110","95",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","290","811","110","95",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("ImageViewer00");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","736","173","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","736","194","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","562","172","8","186",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","574","362","156","8",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_bottomGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","200","339","5","13",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","725","57","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Error");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","725","107","110","15",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("class : cal_WF_error");
            obj.set_cssclass("sta_WF_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar07","720","77","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_value("20150629");
            obj.set_cssclass("cal_WF_error");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","271","75","32","28",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","164","104","32","28",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("100");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1349","0","450",null,null,"-52",null,null,null,null,this);
            obj.set_taborder("65");
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

            obj = new Static("Static19_00_00_00","885","38","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("(normal) font-color : #000000   line :  #d4d4d4   bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00","885","60","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("(hover) font-color : #000000    line :  #4b597a    bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01","885","82","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("(disabled,Readonly) font-color : #aaaaaa   line :  #d4d4d4 bg: #f8f8f8");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01_00","885","103","445","26",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("(Error) font-color : #000000   line :  #b61539 bg: #f5dee3");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_00","885","655","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("(progress bar) color : #125dae");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_03","885","631","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("(normal) font-color : #000000   line :  #d4d4d4   bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_00_00","885","677","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("(button) color : #ffffff    bg : #5f5f69");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02","785","290","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("(주중요일)  font-color : #333333   bg: #e7595c");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_01","785","310","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("(일요일)  font-color : #ff4c5e   bg: #e7595c");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_01_00","785","330","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("(토요일)  font-color : #269bee   bg: #e7595c");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_02","785","180","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("(제목) font-color : #ffffff   line :  #4b597a   bg: #4b597a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_02_00","785","200","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("(내용) font-color : #333333   bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_02_00_00","785","220","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("(hover)  font-color : #ffffff   bg: #8da3c7");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_02_00_00_00","785","240","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("(visited)  font-color : #ffffff   bg: #125dae");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_02_00_00_00_00","785","260","425","26",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("(오늘날짜)  font-color : #ffffff   bg: #e7595c");
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
        this.registerScript("Guide_02.xfdl", function() {
        /*
        this.btntest_onclick = function(obj:Button,  e:nexacro.ClickEventInfo){
        	this.c.set_pos(0);

        	this.setTimer(0, 50);
        }

        this.Guide_02_ontimer = function(obj:Form, e:nexacro.TimerEventInfo)
        {
        	if(e.timerid == 0)
        	{
        		if(this.Pbr00.pos == 100)
        		{
        			this.killTimer(0);
        		}
        		this.Pbr00.getNumSetter("pos").postInc();

        	}
        }
        */

        this.btntest_onclick = function(obj,  e)
        {
        	var i, j;
        	this.Pbr00.pos = 0;
        	for( i = 0 ; i < 200 ; i+=2 )
        	{
        		this.Pbr00.stepIt();
        		this.updateWindow();
        	}
        }


        this.Static39_00_onclick = function(obj,e)
        {

        };

        this.Static39_onclick = function(obj,e)
        {

        };

        this.Calendar00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static41.addEventHandler("onclick",this.Static41_onclick,this);
            this.Calendar00.addEventHandler("onchanged",this.Calendar00_onchanged,this);
            this.btntest.addEventHandler("onclick",this.btntest_onclick,this);
            this.Static23.addEventHandler("onclick",this.Static41_onclick,this);
            this.Static39.addEventHandler("onclick",this.Static39_onclick,this);
            this.Div00.form.Static63_00.addEventHandler("onclick",this.Div00_Static63_00_onclick,this);
            this.Static19_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_03.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_01_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_02.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_02_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_02_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_02_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_02_00_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
        };
        this.loadIncludeScript("Guide_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
