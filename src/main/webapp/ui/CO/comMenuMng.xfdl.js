(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comMenuMng");
            this.set_titletext("메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"1000\"/><Column id=\"HRNK_MNU_SEQ\" type=\"INT\" size=\"5\"/><Column id=\"HGST_MNU_SEQ\" type=\"INT\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mnu_tp_cd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menuCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"1000\"/><Column id=\"HRNK_MNU_SEQ\" type=\"INT\" size=\"5\"/><Column id=\"HGST_MNU_SEQ\" type=\"INT\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("mainDiv","21","11",null,null,"699","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_menu","9","69",null,null,"9","20",null,null,null,null,this.mainDiv.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_cellmovingtype("none");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"317\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"메뉴\"/><Cell col=\"1\" text=\"순번\"/></Band><Band id=\"body\"><Cell text=\"bind:MNU_NM\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:MNU_LVL\" tooltiptext=\"bind:MNU_NM\"/><Cell col=\"1\" text=\"expr:currow+1\" textAlign=\"center\"/></Band></Format></Formats>");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Edit("menuName","9","40",null,"24","40",null,null,null,null,null,this.mainDiv.form);
            obj.set_taborder("1");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Static("Static00_03","10","10","130","20",null,null,null,null,null,null,this.mainDiv.form);
            obj.set_taborder("2");
            obj.set_text("메뉴 구조");
            obj.set_cssclass("sta_WF_title01");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Button("btn_find",null,"40","24","24","10",null,null,null,null,null,this.mainDiv.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search02");
            this.mainDiv.addChild(obj.name, obj);

            obj = new Div("saveDiv",null,"11","667","278","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","39","136","35",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("6");
            obj.set_text("메뉴명");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_00","135","39",null,"35","1",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Edit("MNU_NM","140","44",null,"25","7",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("0");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","135","73",null,"35","1",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Edit("MNU_SEQ","141","78","225","25",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","73","136","35",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("11");
            obj.set_text("메뉴 순번");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("mnuLvl","370","73","104","35",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("12");
            obj.set_text("메뉴 레벨");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Combo("MNU_LVL","481","78",null,"25","7",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var saveDiv_form_MNU_LVL_innerdataset = new nexacro.NormalDataset("saveDiv_form_MNU_LVL_innerdataset", obj);
            saveDiv_form_MNU_LVL_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row></Rows>");
            obj.set_innerdataset(saveDiv_form_MNU_LVL_innerdataset);
            obj.set_text("Combo00");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","135","107",null,"35","1",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","107","136","35",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("14");
            obj.set_text("메뉴레벨 구분코드");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Edit("MNU_LVL_SPR_CD","141","112","225","25",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_maxlength("10");
            obj.set_inputtype("number");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("mnuTpCd","370","107","104","35",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("15");
            obj.set_text("메뉴 유형코드");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Combo("MNU_TP_CD","481","112",null,"25","7",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var saveDiv_form_MNU_TP_CD_innerdataset = new nexacro.NormalDataset("saveDiv_form_MNU_TP_CD_innerdataset", obj);
            saveDiv_form_MNU_TP_CD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row></Rows>");
            obj.set_innerdataset(saveDiv_form_MNU_TP_CD_innerdataset);
            obj.set_text("Combo00");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","243","136","35",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("16");
            obj.set_text("상위메뉴 순번");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            obj.set_cssclass("sta_cm_box01L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","135","243",null,"35","1",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("17");
            obj.set_visible("true");
            obj.set_cssclass("sta_cm_box02L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Edit("HRNK_MNU_SEQ","141","248","225","25",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_03","370","243","104","35",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("19");
            obj.set_text("최상위 메뉴순번");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            obj.set_cssclass("sta_cm_box01L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Edit("HGST_MNU_SEQ","481","248",null,"25","7",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","0","141","136","35",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("21");
            obj.set_text("프로그램 ID");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00","135","141",null,"35","1",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Edit("PGM_ID","141","146","201","25",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Button("btn_dept","346","146","25","25",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("7");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Edit("PGM_NM","375","146",null,"25","7",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00","135","175",null,"35","1",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","0","175","136","35",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("26");
            obj.set_text("정렬 순서");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Edit("SRT_SO","141","180","225","25",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("useYn","370","175","104","35",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("28");
            obj.set_text("사용 여부");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Radio("USE_YN","481","181",null,"25","18",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var saveDiv_form_USE_YN_innerdataset = new nexacro.NormalDataset("saveDiv_form_USE_YN_innerdataset", obj);
            saveDiv_form_USE_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미사용</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(saveDiv_form_USE_YN_innerdataset);
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_01","0","209","136","35",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("29");
            obj.set_text("비고 내용");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_cssclass("sta_cm_box01L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","135","209",null,"35","1",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Edit("RMKS_CTS","140","214",null,"25","7",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("4");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","10","130","20",null,null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("31");
            obj.set_text("메뉴 정보");
            obj.set_cssclass("sta_WF_title01");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","90","24","191",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("32");
            obj.set_text("추가");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"10","90","24","96",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("33");
            obj.set_text("삭제");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","90","24","1",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("34");
            obj.set_text("저장");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"10","90","24","388",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("35");
            obj.set_text("초기화");
            this.saveDiv.addChild(obj.name, obj);

            obj = new Button("btn_add_level",null,"10","97","24","286",null,null,null,null,null,this.saveDiv.form);
            obj.set_taborder("36");
            obj.set_text("하위메뉴 추가");
            this.saveDiv.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","saveDiv.form.MNU_NM","value","ds_menu","MNU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","saveDiv.form.MNU_SEQ","value","ds_menu","MNU_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","saveDiv.form.MNU_LVL","value","ds_menu","MNU_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","saveDiv.form.MNU_LVL_SPR_CD","value","ds_menu","MNU_LVL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","saveDiv.form.MNU_TP_CD","value","ds_menu","MNU_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","saveDiv.form.PGM_ID","value","ds_menu","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","saveDiv.form.PGM_NM","value","ds_menu","PGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","saveDiv.form.SRT_SO","value","ds_menu","SRT_SO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","saveDiv.form.USE_YN","value","ds_menu","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","saveDiv.form.RMKS_CTS","value","ds_menu","RMKS_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","saveDiv.form.HRNK_MNU_SEQ","value","ds_menu","HRNK_MNU_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","saveDiv.form.HGST_MNU_SEQ","value","ds_menu","HGST_MNU_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("comMenuMng.xfdl","CO::coUtils.xjs");
        this.registerScript("comMenuMng.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 메뉴관리
          CREATION DATES : 2022.01.26
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        // 필수값 체크를 위한 필드명 선언
        this.valiFormIds = [
        	  {"name" : "메뉴명", "id" : "MNU_NM"}
        	, {"name" : "메뉴레벨 구분코드", "id" : "MNU_LVL_SPR_CD"}
        	, {"name" : "메뉴 유형코드", "id" : "MNU_TP_CD"}
        ];

        //폼 영역
        var form = this.saveDiv.form;
        this.menuSeq = 0;	//채번용 메뉴 시퀀스값

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.comMenuMng_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	this.fn_codeSearch();
        	this.fn_menuSearch();
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_codeSearch = function() {

        	var sSvcId = "codeSelect";
        	var sUrl = "/co/select_common_code_list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_mnu_tp_cd=ds_output1";
        	var arg = "";

        	// 필드 설정
        	this.ds_search.addColumn("codeList", "String");
        	this.ds_search.addColumn("langCd", "String");
        	// 로우 추가
        	this.ds_search.addRow();
        	//조회 값 담기
        	this.ds_search.setColumn(0, "codeList", "MNU_TP_CD");
        	this.ds_search.setColumn(0, "langCd", "KO");
        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        }

        //조회
        this.fn_menuSearch = function() {
        	var sSvcId = "menuSelect";
        	var sUrl = "/co/Menu/select_mnu_mng_list.do";
        	var inDs = ""; //ds_search=ds_search
        	var outDs = "ds_menu=ds_output";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //저장
        this.fn_save = function() {
        	if( !this.fn_dataCheck(this.ds_menu) ) {
        		alert("변경된 내용이 없습니다.");
        		return false;
        	} else {

        		//폼 필수값 체크
        		var validation = this.fn_validationForm(this.saveDiv, this.valiFormIds, this.ds_menu);
        		if( validation ) {

        			var sSvcId = "menuSave";
        			var sUrl = "/co/Menu/com_menu_save.do";
        			var inDs = "ds_save=ds_menu:U"
        			var outDs = "";
        			var arg;
        			var callback = "fn_callBack";
        			//정렬 후 데이터셋 재 설정
        			this.fn_treeSort();

        			if( this.confirm("메뉴를 저장 하시겠습니까?") ) {
        				this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        			}

        			//this.gfn_alert("MSG0000000004","", "menuSave", "fn_messageCallback");	//메세지 정의되면?
        		}
        	}
        }

        // 메뉴순번 채번
        this.fn_getMnuSeq = function() {
        	var sSvcId = "selectMenuSeq";
        	var sUrl = "/co/Menu/select_menu_seq.do";
        	var inDs = ""
            var outDs = "";
            var arg;
            var callback = "fn_callBack";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback, false);
        }


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	if(svcID == "menuSelect"){
        		//set_rowposition 초기 클릭값을 갖지 못하게
        		//this.ds_menu.set_rowposition(-1);
        		if( this.ds_menu.rowcount == 0 ) this.ds_menu.copyData(this.ds_menuCopy);
        	} else if(svcID == "codeSelect"){
        		form.MNU_TP_CD.set_codecolumn("COM_DTL_CD");
        		form.MNU_TP_CD.set_datacolumn("COM_DTL_CD_NM");
        		form.MNU_TP_CD.set_innerdataset(this.ds_mnu_tp_cd);
        	} else if(svcID == "menuSave"){
        		if( errorCode == -1 ) {
        			alert("저장에 실패하였습니다. 관리자에게 문의하세요.");
        		} else {
        			alert("저장 되었습니다");
        			//this.fn_menuSearch();
        			this.fn_menuSearch();
        		}
        	} else if( svcID == "selectMenuSeq" ) {
        	}
        }

        //팝업 콜백
        this.fn_popupCallback = function(id, data) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

            if(data == undefined){
                return;
            }else{
        		resData = JSON.parse(data);
        	}

        	switch(id){
        		case "pgmMngSinglePop" :
        			this.saveDiv.form.PGM_ID.set_value(resData.PGM_ID);
        			form.PGM_NM.set_value(resData.PGM_NM);
        			break;

        		default :
        			break;
        	}
        }

        this.fn_messageCallback = function(sMsgId, sRetValue){

        	if( sRetValue == false ) return false;

        	if( sMsgId == "menuSave" ) {
        		var sSvcId = "menuSave";
        		var sUrl = "/co/Menu/com_menu_save.do";
        		var inDs = "ds_save=ds_menu:U"
        		var outDs = "";
        		var arg;
        		var callback = "fn_callBack";
        		//정렬 후 데이터셋 재 설정
        		this.fn_treeSort();
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	}

        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        //트리 셀 인덱스 가져온다.
        this.fnGetTreeCellIndex = function(objGrid)
        {
        	var nCellCount = objGrid.getCellCount("body");
        	var nCellType;
        	var nCol = 0;
        	for(nCol=0; nCol<nCellCount; nCol++)
        	{
        		nCellType = objGrid.getCellProperty("body",nCol,"displaytype");

        		//get first treecell num
        		if(nCellType = "treeitemcontrol")
        		{
        			break;
        		}
        	}
        	return nCol;
        }

        //입력값 찾기
        this.setFindeCodeRow = function (objForm) {
        	var edtValue = this.mainDiv.form.menuName.value;
        	var dsTree	 = this.ds_menu;
        	var grdTree	 = this.mainDiv.form.grd_menu;

        	var nTreeCellIndex = this.fnGetTreeCellIndex(grdTree);
        	var nStartLvl = grdTree.getCellProperty("body",nTreeCellIndex,"treestartlevel");
        	var nCellIndex = this.fnGetTreeCellIndex(grdTree);

        	var nRowPos	 = dsTree.rowposition;

        	if(!this.gfn_isNull(edtValue)) {
        		var strSearchId = "MNU_NM";
        		var sFilterstr = strSearchId +".indexOf('"+edtValue+"') > -1";

        		var findRow = 0;
        		if(nRowPos > -1){
        			nRowPos++;
        			findRow = dsTree.findRowExpr(sFilterstr,nRowPos);
        		}
        	} else {
        		alert("검색어");
        		return false;
        	}

        	//parent row tree status update -> parent tree status "expand"
        	var nTreeRow = 0;
        	var nStartLvl = grdTree.getCellProperty("body",nCellIndex,"treestartlevel");
        	var nEndLvl = 0;

        	var arrRoot = new Array();
        	grdTree.set_enableevent(false);
        	if(!grdTree.isTreeRootRow(findRow,true))
        	{
        		nEndLvl = grdTree.getCellPropertyValue(findRow,nCellIndex,"treelevel");

        		var parentsRow = 0;
        		var nRowFindRow = findRow;
        		for(var i=nStartLvl; i<nEndLvl; i++)
        		{
        			parentsRow = grdTree.getTreeParentRow(nRowFindRow);

        			if (parentsRow>-1)
        			{
        				//Array.prototype.push()
        				arrRoot.push(parentsRow);
        				nRowFindRow = parentsRow;
        			}
        			else
        			{
        				break;
        			}
        		}
        	}
        	grdTree.set_enableevent(true);

        	for(var i=arrRoot.length; i>-1; i--)
        	{
        		grdTree.setTreeStatus(grdTree.getTreeRow(arrRoot[i]),true);
        	}

        	if( findRow == -1 ) {
        		alert("마지막까지 찾았습니다.");
        		findRow = 0;
        		//this.gfn_alert("MSG0000000003","", "menu_search", "fn_messageCallback");
        		//return false;
        	}

        	//set_rowposition
        	dsTree.set_rowposition(findRow);

        };

        // 프로그램 ID조회 팝업
        this.fn_progrimListPopup = function() {
        	var objParam = {
        		pgmId : form.PGM_ID.value,
        		pgmNm : form.PGM_NM.value
        	};
        	this.gfn_openPopup("pgmMngSinglePop", "CO_POP::pgmMngSinglePopup.xfdl", objParam, this.fn_popupCallback);
        }


        // 현재 선택된 트리가 닫혀있다면 펼치기
        this.fn_treeOpen = function(idx, type) {

        	var gridObj = this.mainDiv.form.grd_menu;
        	var nGridRow = gridObj.getTreeRow(idx);
        	var nStatus  = gridObj.getTreeStatus(nGridRow);

        	if(nStatus == 3) return;

        	if( type == "add" ) {
        		nStatus = (nStatus == 0 ? 1 : 1);
        	} else {
        		nStatus = (nStatus == 0 ? 1 : 0);
        	}

        	gridObj.setTreeStatus(nGridRow, nStatus);
        }

        // 트리 정렬기능
        this.fn_treeSort = function () {
        	var menuDs = this.ds_menu;
        	var dataList = menuDs._rawRecords;
        	for( var idx in dataList ) {
        		var newIndex = dataList[idx]._rawidx;
        		menuDs.setColumn(idx, "SRT_SO", newIndex+1);	//정렬 순서
        	}
        };


        //트리 삭제 (하위포함)
        this.deleteTree = function(menuDs, grid) {
        	var nRow = menuDs.rowposition;
        	var cnt = grid.getTreeChildCount(nRow,false);

        	grid.set_enableredraw(false);
        	menuDs.set_enableevent(false);
        	for(var i = nRow+cnt; i>=nRow; i--){
        		if( grid.getTreeChildCount(i,false) > 0 ){
        		   this.deleteTree(i);
        		} else {
        			menuDs.deleteRow(i);
        		}
        	}
        	menuDs.set_enableevent(true);
        	grid.set_enableredraw(true);


        }


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 조회버튼 이벤트
        this.mainDiv_btn_find_onclick = function(obj,e)
        {
        	var objForm = obj.parent;
        	this.setFindeCodeRow(objForm);
        };

        //검색 input
        this.mainDiv_menuName_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		this.mainDiv.form.btn_find.click();
        	}
        };



        // 트리 추가
        this.fn_treeAdd = function(idx, menuDs, type) {

        	// 추가 시 닫혀있다면 펼치기
        	this.fn_treeOpen(idx, "add");

        	//채번
        	this.fn_getMnuSeq();
        	var menuSeq = this.menuSeq;


        	// 메뉴 선택 시 추가할 경우 하위 레벨로
        	//adx = menuDs.addRow();
        	var mnuTPCd = menuDs.getColumn(idx, "MNU_TP_CD");	// 메뉴 유형코드
        	var level = menuDs.getColumn(idx, "MNU_LVL");	//선택 셀 레벨값
        	var mnuSeq = menuDs.getColumn(idx, "MNU_SEQ"); //선택 순번(SEQ)
        	var mnuLvlSprCd = menuDs.getColumn(idx, "MNU_LVL_SPR_CD"); //선택 메뉴레벨 구분코드
        	var ChildCount = this.mainDiv.form.grd_menu.getTreeChildCount(idx); //그리드 하위 자식 개수

        	// 하위메뉴 생성은 최대 5
        	if( type == "L" && level == 5 ) {
        		alert("더이상 하위메뉴를 추가할 수 없습니다");
        		return false;
        	}

        	//자식 개수 더하기.
        	idx += ChildCount;

        	// 선택 위치에 따라서 삽입 방법을바꾼다.
        	var adx = 0;
        	if( idx != -1 ) {
        		if( level == 1 ) {
        			adx = menuDs.addRow();
        		} else {
        			adx = menuDs.insertRow(idx + 1);
        		}
        	} else {
        		adx = menuDs.addRow();
        	}

        	//타입 구분으로 레벨값 변경.
        	var hrnkMnuSeq = "";
        	if( type == "S" ) {
        		hrnkMnuSeq = menuDs.getColumn(idx, "HRNK_MNU_SEQ");
        	} else if( type == "L" ) {
        		level = level + 1;
        		hrnkMnuSeq = mnuSeq;
        	}

        	/*
        	레벨 별 메뉴레벨 구분코드 값을 지정한다.
        	최대 10자리 레벨별 2자리씩 넣어줌.
        	*/
        	if( level == 0 ) {
        		mnuLvlSprCd = "";
        	} else if( level == 1 ) {
        		mnuLvlSprCd = "";
        	} else if( level == 2 ) {
        		mnuLvlSprCd = mnuLvlSprCd.substr(0, 4);
        	} else if( level == 3 ) {
        		mnuLvlSprCd = mnuLvlSprCd.substr(0, 6);
        	} else if( level == 4 ) {
        		mnuLvlSprCd = mnuLvlSprCd.substr(0, 8);
        	}


        	//set dataset
        	menuDs.setColumn(adx, "MNU_LVL", idx == -1 ? "1" : level);	//메뉴 레벨
        	menuDs.setColumn(adx, "MNU_SEQ", menuSeq);	//메뉴 시퀀스
        	menuDs.setColumn(adx, "MNU_LVL_SPR_CD", mnuLvlSprCd);	//메뉴레벨 구분코드
        	menuDs.setColumn(adx, "MNU_TP_CD", idx == -1 ? "01" : (level == 5 ? "02" : mnuTPCd));	//메뉴유형코드
        	menuDs.setColumn(adx, "HRNK_MNU_SEQ", idx == -1 ? "0" : hrnkMnuSeq);	//상위메뉴 순번
        	menuDs.setColumn(adx, "HGST_MNU_SEQ", 0);	//최상위메뉴 순번
        	menuDs.setColumn(adx, "SRT_SO", menuDs.rowposition+1);	//정렬 순서
        	menuDs.setColumn(adx, "USE_YN", "Y");	//사용 여부
        	menuDs.setColumn(adx, "LANG_CD", "KO");	// 언어

        	//console.log(this.ds_menu._rawRecords[idx]);
        	//console.log(this.mainDiv.form.grd_menu);

        	// 정렬
        	//this.fn_treeSort();
        }


        //추가버튼
        this.btn_add_onclick = function(obj,e)
        {
        	var menuDs = this.ds_menu;	//바인딩된 데이터셋
        	var idx = menuDs.rowposition;	//선택한 셀 위치

        	//row 추가기능
        	this.fn_treeAdd(idx, menuDs, "S");

        };

        //삭제버튼
        this.btn_del_onclick = function(obj,e)
        {
        	var menuDs = this.ds_menu;	//바인딩된 데이터셋
        	//menuDs.deleteRow(menuDs.rowposition);
        	this.deleteTree(this.ds_menu, this.mainDiv.form.grd_menu);
        };


        //리셋버튼
        this.btn_reset_onclick = function(obj,e)
        {
        	this.ds_menu.reset();
        };


        //트리메뉴 클릭
        this.mainDiv_grd_menu_oncellclick = function(obj,e)
        {
        // 	var gridObj = this.mainDiv.form.grd_menu;
        // 	var nGridRow = gridObj.getTreeRow(e.row);
        // 	var nStatus  = gridObj.getTreeStatus(nGridRow);
        //
        // 	if(nStatus == 3) return;
        // 	nStatus = (nStatus == 0 ? 1 : 0);
        //
        // 	gridObj.setTreeStatus(nGridRow, nStatus);
        };

        //트리 더블클릭 이벤트
        this.mainDiv_grd_menu_oncelldblclick = function(obj,e)
        {
        	/*
        	var gridObj = this.mainDiv.form.grd_menu;
        	var nGridRow = gridObj.getTreeRow(e.row);
        	var nStatus  = gridObj.getTreeStatus(nGridRow);

        	if(nStatus == 3) return;
        	nStatus = (nStatus == 0 ? 1 : 0);

        	gridObj.setTreeStatus(nGridRow, nStatus);
        	*/
        	this.fn_treeOpen(e.row);
        };

        //저장버튼
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_save();
        };

        //프로그램 목록조회 팝업
        this.div_search_btn_dept_onclick = function(obj,e)
        {
        	//this.gfn_alert("MSG0000000003","", "menu_search", "fn_messageCallback");
        	if( this.ds_menu.getColumn(this.ds_menu.rowposition, "MNU_TP_CD") == "02" ) {
        		this.fn_progrimListPopup();
        	} else {
        		alert("메뉴유형이 폴더일 경우 프로그램ID 조회를 할 수 없습니다.");
        	}
        };

        // 메뉴레벨 구분코드 변경 이벤트
        this.saveDiv_MNU_LVL_SPR_CD_onchanged = function(obj,e)
        {
        	// 정렬
        	this.ds_menu.set_keystring("S:MNU_LVL_SPR_CD, S:MNU_LVL");

        	//정렬 후 데이터셋 재 설정
        	//this.fn_treeSort();
        };

        // 하위레벨 추가버튼
        this.btn_add_level_onclick = function(obj,e)
        {
        	var menuDs = this.ds_menu;	//바인딩된 데이터셋
        	var idx = menuDs.rowposition;	//선택한 셀 위치

        	if( this.ds_menu.getColumn(idx, "MNU_TP_CD") == "02" ) {
        		alert("메뉴 유형이 프로그램은 하위 레벨을 지정 할 수 없습니다.");
        		return false;
        	} else {
        		//row 추가기능
        		this.fn_treeAdd(idx, menuDs, "L");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comMenuMng_onload,this);
            this.mainDiv.form.grd_menu.addEventHandler("oncellclick",this.mainDiv_grd_menu_oncellclick,this);
            this.mainDiv.form.grd_menu.addEventHandler("oncelldblclick",this.mainDiv_grd_menu_oncelldblclick,this);
            this.mainDiv.form.menuName.addEventHandler("onkeyup",this.mainDiv_menuName_onkeyup,this);
            this.mainDiv.form.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.mainDiv.form.btn_find.addEventHandler("onclick",this.mainDiv_btn_find_onclick,this);
            this.saveDiv.form.MNU_LVL.addEventHandler("onitemchanged",this.saveDiv_MNU_LVL_onitemchanged,this);
            this.saveDiv.form.MNU_LVL_SPR_CD.addEventHandler("onchanged",this.saveDiv_MNU_LVL_SPR_CD_onchanged,this);
            this.saveDiv.form.Static00_02.addEventHandler("onclick",this.searchDiv00_00_Static00_onclick,this);
            this.saveDiv.form.Static00_02_00.addEventHandler("onclick",this.searchDiv00_00_Static00_onclick,this);
            this.saveDiv.form.btn_dept.addEventHandler("onclick",this.div_search_btn_dept_onclick,this);
            this.saveDiv.form.Static00_02_00_00.addEventHandler("onclick",this.searchDiv00_00_Static00_onclick,this);
            this.saveDiv.form.useYn.addEventHandler("onclick",this.searchDiv00_00_Static00_onclick,this);
            this.saveDiv.form.Static00_02_00_00_01.addEventHandler("onclick",this.searchDiv00_00_Static00_onclick,this);
            this.saveDiv.form.Static00_03.addEventHandler("onclick",this.Static00_onclick,this);
            this.saveDiv.form.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.saveDiv.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.saveDiv.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.saveDiv.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.saveDiv.form.btn_add_level.addEventHandler("onclick",this.btn_add_level_onclick,this);
        };
        this.loadIncludeScript("comMenuMng.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
