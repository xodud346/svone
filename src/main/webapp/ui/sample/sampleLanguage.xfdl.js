(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleLanguage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_language_KR", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_CODE\">01</Col><Col id=\"LANG_NAME\">상품·그룹ID</Col></Row><Row><Col id=\"LANG_CODE\">02</Col><Col id=\"LANG_NAME\">카테고리</Col></Row><Row><Col id=\"LANG_CODE\">03</Col><Col id=\"LANG_NAME\">일자</Col></Row><Row><Col id=\"LANG_CODE\">04</Col><Col id=\"LANG_NAME\">키워드</Col></Row><Row><Col id=\"LANG_CODE\">05</Col><Col id=\"LANG_NAME\">담당자</Col></Row><Row><Col id=\"LANG_CODE\">06</Col><Col id=\"LANG_NAME\">상품명</Col></Row><Row><Col id=\"LANG_CODE\">07</Col><Col id=\"LANG_NAME\">규격</Col></Row><Row><Col id=\"LANG_CODE\">08</Col><Col id=\"LANG_NAME\">제조원</Col></Row><Row><Col id=\"LANG_CODE\">09</Col><Col id=\"LANG_NAME\">대표삼품구분</Col></Row><Row><Col id=\"LANG_CODE\">10</Col><Col id=\"LANG_NAME\">공용전용구분</Col></Row><Row><Col id=\"LANG_CODE\">11</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_language_EN", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_CODE\">01</Col><Col id=\"LANG_NAME\">product·group ID</Col></Row><Row><Col id=\"LANG_CODE\">02</Col><Col id=\"LANG_NAME\">kategorie</Col></Row><Row><Col id=\"LANG_CODE\">03</Col><Col id=\"LANG_NAME\">date</Col></Row><Row><Col id=\"LANG_CODE\">04</Col><Col id=\"LANG_NAME\">keyword</Col></Row><Row><Col id=\"LANG_CODE\">05</Col><Col id=\"LANG_NAME\">user</Col></Row><Row><Col id=\"LANG_CODE\">06</Col><Col id=\"LANG_NAME\">product name</Col></Row><Row><Col id=\"LANG_CODE\">07</Col><Col id=\"LANG_NAME\">standard</Col></Row><Row><Col id=\"LANG_CODE\">08</Col><Col id=\"LANG_NAME\">a producer</Col></Row><Row><Col id=\"LANG_CODE\">09</Col><Col id=\"LANG_NAME\">representative product</Col></Row><Row><Col id=\"LANG_CODE\">10</Col><Col id=\"LANG_NAME\">공용전용구분</Col></Row><Row><Col id=\"LANG_CODE\">11</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_language", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","5",null,"157","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31","40","31",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_00","40","62",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_00_00","40","93",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_00_00_00","40","124",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("상품ㆍ그룹ID");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uLangKey").set("01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","20","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uLangKey").set("02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","20","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uLangKey").set("03");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","20","93","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("키워드");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uLangKey").set("04");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","20","124","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uLangKey").set("05");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","128","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo48","159","97","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo41","159","66","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo36","159","35","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit32","159","4","295","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33","460","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_00","488","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00","518","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_multi_off");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00_00","546","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00_00_00","575","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_addfile");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit37","314","35","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit38","459","35","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button39","604","35","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar42","314","66","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","458","66","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar43","471","66","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo44","616","66","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit69","314","97","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit70","459","97","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button71","604","97","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18","882","124","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uLangKey").set("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","882","93","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("대표상품구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uLangKey").set("09");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66","882","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uLangKey").set("08");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","882","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uLangKey").set("07");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","882","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.getSetter("uLangKey").set("06");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit34","1021","4","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox35","1226","4","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit40","1021","35","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit46","1096","66","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit45","1021","66","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button47","1226","66","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo49","1021","97","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("대표상품구분");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","128","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Extend",null,null,"30","30","20","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("↕");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear","Edit37:-22","38","18","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("X");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","314","128","96","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmCalMM.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_multiCombo","459","128","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_text("Div00");
            obj.set_url("COMM::cmmMultiCombo.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","461","165","66","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","701","128","79","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("dataset bind");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_language",null,"183","100","30","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("언어 변경");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","230",null,null,"20","410",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell calendardisplaynulltext=\"01\"/><Cell col=\"1\" calendardisplaynulltext=\"02\"/><Cell col=\"2\" calendardisplaynulltext=\"03\"/><Cell col=\"3\" calendardisplaynulltext=\"04\"/><Cell col=\"4\" calendardisplaynulltext=\"05\"/><Cell col=\"5\" calendardisplaynulltext=\"06\"/><Cell col=\"6\" calendardisplaynulltext=\"07\"/><Cell col=\"7\" calendardisplaynulltext=\"08\"/><Cell col=\"8\" calendardisplaynulltext=\"09\"/><Cell col=\"9\" calendardisplaynulltext=\"10\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","319",null,null,"20","138",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1. static에 다국어 적용을 위해서는 각 component 마다 \"uLangKey\"  User Properties를 추가해 주어야 한다.\n\n2. uLangKey에 해당 다국어 코드를 입력한다.\n\n3. grid에 다국어 척용을 위해서는 각 Head cell별로 \"calendardisplaynulltext\" Properties에 다국어 코드를 입력한다.");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            obj.set_font("16px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmCalMM.xfdl");
            this._addPreloadList("fdl","COMM::cmmMultiCombo.xfdl");
        };
        
        // User Script
        this.registerScript("sampleLanguage.xfdl", function() {
        this.fv_sLangKey = "EN";

        this.fn_onLoad = function(obj,e)
        {
        	//언어팩 구성
        	var oTargetDs = this["ds_language_"+this.fv_sLangKey];
        	this.ds_language.copyData(oTargetDs, true);

        	this.fn_languageChange(this);
        };

        this.btn_language_onclick = function(obj,e)
        {
        	//선택된 언어 값 세팅
        	if(this.fv_sLangKey == "KR"){
        		this.fv_sLangKey = "EN";
        	} else {
        		this.fv_sLangKey = "KR";
        	}

        	//언어팩 구성
        	var oTargetDs = this["ds_language_"+this.fv_sLangKey];
        	this.ds_language.copyData(oTargetDs, true);

        	this.fn_languageChange(this);

        };


        this.fn_languageChange = function(oForm){
        	var aComponent = oForm.components;
        	for(var i = 0 ; i < aComponent.length ; i++){
        		if(aComponent[i] instanceof Div){
        			if(!this.gfn_isNull(aComponent[i].url)){
        				continue;
        			} else {
        				this.fn_languageChange(aComponent[i].form);
        			}
        		} else if(aComponent[i] instanceof Grid){
        			this.fn_changeGridLabel(aComponent[i]);
        		} else if(aComponent[i] instanceof Static){
        			this.fn_changeLabel(aComponent[i]);
        		}
        	}
        };


        this.fn_changeLabel = function(oComp){
        	var sLabel = oComp.text;
        	var sLangKey = oComp.uLangKey;
        	if(!this.gfn_isNull(sLangKey)){
        		var nFindRow = this.ds_language.findRow("LANG_CODE",sLangKey);
        		sLabel = this.ds_language.getColumn(nFindRow, "LANG_NAME");
        	}
        	oComp.set_text(sLabel);
        };


        this.fn_changeGridLabel = function(oGrid){
        	var cnt = oGrid.getCellCount("head");
        	var sLabel = "";
        	for(var i = 0 ; i < cnt ; i++){
        		sLangKey = oGrid.getCellProperty("head", i, "calendardisplaynulltext");
        		sLabel = oGrid.getCellProperty("head", i, "text");
        		if(!this.gfn_isNull(sLangKey)){
        			var nFindRow = this.ds_language.findRow("LANG_CODE",sLangKey);
        			sLabel = this.ds_language.getColumn(nFindRow, "LANG_NAME");
        		}
        		oGrid.setCellProperty("head", i, "text", sLabel);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.Edit37.addEventHandler("oninput",this.Div00_Edit37_oninput,this);
            this.Div00.form.btn_Extend.addEventHandler("onclick",this.Div00_btn_Extend_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Div00.form.Button00_00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_language.addEventHandler("onclick",this.btn_language_onclick,this);
        };
        this.loadIncludeScript("sampleLanguage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
