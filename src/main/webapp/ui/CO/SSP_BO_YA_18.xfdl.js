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
            this.set_titletext("시스템 메세지 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"BO_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FO_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lang", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">KO</Col><Col id=\"COM_DTL_CD_NM\">한국어</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_origin", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"BO_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FO_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"109","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","20","21",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","20","21","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("메시지코드");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","419","21","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("메시지 내용");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static24","1028","21","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-73","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-73","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("USE_YN","1167","25",null,"24","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"63","60","26","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ORG_CD","159","25","251","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("ORG_NM","559","25","460","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"63","60","26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","176",null,null,"20","96",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"103\"/><Column size=\"338\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"73\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"메시지코드\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" text=\"메시지 내용\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"4\" text=\"BO사용여부\"/><Cell col=\"5\" text=\"FO사용여부\"/><Cell col=\"6\" text=\"서버사용여부\"/><Cell col=\"7\" text=\"사용여부\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"8\" text=\"언어\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"9\" text=\"등록일시\"/><Cell col=\"10\" text=\"등록자ID\"/><Cell col=\"11\" text=\"등록자\"/><Cell col=\"12\" text=\"수정일시\"/><Cell col=\"13\" text=\"수정자ID\"/><Cell col=\"14\" text=\"수정자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"bind:RNUM\"/><Cell col=\"2\" text=\"bind:MSG_CD\" displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &quot;text&quot; : &quot;none&quot;\" editmaxlength=\"10\" editimemode=\"none\" maskeditlimitbymask=\"none\" maskedittype=\"string\" editinputmode=\"upper\"/><Cell col=\"3\" text=\"bind:MSG_CTS\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:BO_USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_useYn_grd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"5\" text=\"bind:FO_USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_useYn_grd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"6\" text=\"bind:SERVER_USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_useYn_grd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"7\" text=\"bind:USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_useYn_grd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"8\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_lang\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:LANG_CD\"/><Cell col=\"9\" text=\"bind:REG_DTM\" displaytype=\"normal\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" combodisplaynulltype=\"none\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:REGPSN_ID\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"11\" text=\"bind:REGPSN_NM\"/><Cell col=\"12\" text=\"bind:UPD_DTM\" displaytype=\"normal\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" text=\"bind:UPDPSN_ID\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"14\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20",null,"270","25",null,"grd_list:5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutSave",null,"139","110","28","134",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("레이아웃 저장");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"139","110","28","btnLayoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"139","81","28","btnExcel:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"139","81","28","btnSave:4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"139","81","28","btnDel:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutClear",null,"139","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("레이아웃 초기화");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list_excel","-20","1155",null,null,"-104","-364",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_list_excel");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_selecttype("cell");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"103\"/><Column size=\"338\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"73\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"메시지코드\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"2\" text=\"메시지 내용\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" text=\"BO사용여부\"/><Cell col=\"4\" text=\"FO사용여부\"/><Cell col=\"5\" text=\"서버사용여부\"/><Cell col=\"6\" text=\"사용여부\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"7\" text=\"언어\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"8\" text=\"등록일시\"/><Cell col=\"9\" text=\"등록자ID\"/><Cell col=\"10\" text=\"등록자\"/><Cell col=\"11\" text=\"수정일시\"/><Cell col=\"12\" text=\"수정자ID\"/><Cell col=\"13\" text=\"수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\"/><Cell col=\"1\" text=\"bind:MSG_CD\" displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &quot;text&quot; : &quot;none&quot;\" editmaxlength=\"10\" editimemode=\"none\" maskeditlimitbymask=\"none\" maskedittype=\"string\" editinputmode=\"upper\"/><Cell col=\"2\" text=\"bind:MSG_CTS\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:BO_USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_useYn_grd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"4\" text=\"bind:FO_USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_useYn_grd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"5\" text=\"bind:SERVER_USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_useYn_grd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"6\" text=\"bind:USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_useYn_grd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"7\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_lang\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" text=\"bind:LANG_CD\"/><Cell col=\"8\" text=\"bind:REG_DTM\" displaytype=\"normal\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" combodisplaynulltype=\"none\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:REGPSN_ID\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:REGPSN_NM\"/><Cell col=\"11\" text=\"bind:UPD_DTM\" displaytype=\"normal\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" text=\"bind:UPDPSN_ID\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"13\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.ORG_CD","value","ds_search","MSG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.ORG_NM","value","ds_search","MSG_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.USE_YN","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_18.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_18.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_18.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_18
        /* 작 성 일 자 : 2022/03/08
        /* 작  성   자 : 이성민
        /* 설       명 : 시스템관리 > 시스템 메시지관리
        /***********************************************************/


        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0; //토탈카운트
        this.pageViewCnt = 20; //페이지당 보여줄 목록 개수

        //필수값 체크
        this.valiGridIds = [
        	  {"name" : "메시지코드", "id" : "MSG_CD"}
        	, {"name" : "메시지 내용", "id" : "MSG_CTS"}
        	, {"name" : "사용여부", "id" : "USE_YN"}
        ];

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//메뉴에서 호출과 업무화면간 연동으로 화면 오픈 구분
        	var oForm = this.getOwnerFrame();
        	var oArgs = oForm.arguments["oArgs"];
        	if(this.gfn_isNull(oArgs)){
        		//alert("메뉴에서 OPEN");
        	} else {
        		//trace("oArgs===>" + oArgs["aaa"]);
        		//alert(oArgs);
        		//alert("업무화면에서 OPEN");
        	}

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "Div00_btn_search_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "btnSave_onclick",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };


        /*this.fn_onkeyup = function(obj:nexacro.Form,e:nexacro.KeyEventInfo){
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]" ) {
        		//조회
        		this.fn_search(1);
        	}
        };*/

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_useYn=ds_output1 ds_lang=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "USE_YN,LANG_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function(page) {
        	 var sSvcId = "selectSystemMessageMng";
             var sUrl = "/co/select-system-message-mng-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_list=ds_output";
             var arg;
             var callback = "fn_callBack";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {
        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.pageViewCnt);
        	 }

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        this.fn_excel_download = function() {
        	 var sSvcId = "selectSystemMessageMngExcel";
             var sUrl = "/co/select-system-message-mng-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_list_excel=ds_output";
             var arg;
             var callback = "fn_callBack";

        	this.ds_search.setColumn(0,"START_NUM", null);
        	this.ds_search.setColumn(0,"ROW_COUNT", null);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }


        //저장
        this.fn_save = function() {
        	var sSvcId = "saveSysMessageMng";
        	var sUrl = "/co/save-sys-message-mng.do";
        	var inDs = "ds_save=ds_list:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch(svcID) {
        		case "commonCodeSearch" :

        			//그리드용
        			this.ds_useYn_grd.copyData(this.ds_useYn);

        			//사용여부 전체값 추가
        			this.ds_useYn.insertRow(0);
        			this.ds_useYn.setColumn(0, "COM_DTL_CD", "");
        			this.ds_useYn.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.Div00.form.USE_YN.set_index(1);

        			//검색 초기값 설정
        			this.ds_search_origin.copyData(this.ds_search);

        			break;

        		case "selectSystemMessageMng" :

        			//페이징 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.pageViewCnt, "fn_pageCallback");
        			break;

        		case "selectSystemMessageMngExcel" :
        			this.ofn_exportExcel({ form:this, grid:this.grd_list_excel, fileName:"시스템 메세지 관리" });
        			break;

        		case "saveSysMessageMng" :
        			if( errorCode == 0 ) {
        				alert(this.gfn_getMessage("ERRC000121")); //정상적으로 처리되었습니다.
        				this.fn_search(0);
        			}else{
        			var nRow = this.grd_list.rowposition;//추가하려던 행
        			this.grd_list.setCellPos(2,nRow);//커서를 코드입력 셀에 위치
        			}
        			break;

        		default : "";
        	}

        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		//this.ds_search.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.pageViewCnt);
        		this.fn_search();
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;

        		this.ds_search.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_search();
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";

        	this.grd_list.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_list";
        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        	this.grd_list.uDefaultFormat = "MSG_CD,MSG_CTS,USE_YN,REG_DTM,REGPSN_ID,REGPSN_NM,UPD_DTM,UPDPSN_ID,UPDPSN_NM,RNUM,LANG_CD,COL_CHK";
        }

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 검색영역 초기화
        this.clear = function() {
        	this.ds_search.copyData(this.ds_search_origin);
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //조회버튼
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	this.fn_search(0);
        };

        //추가버튼
        this.btnAdd_onclick = function(obj,e)
        {
        	var idx = this.ds_list.insertRow(0);
        	this.ds_list.setColumn(idx, "USE_YN", "Y");
        	this.ds_list.setColumn(idx, "LANG_CD", "KO");

        	this.grd_list.setCellPos(2);
        	this.grd_list.showEditor(true);
        };

        //삭제버튼
        this.btnDel_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_list.getCaseCount("COL_CHK==1");

        	if( chkCnt == 0 ) {
        		alert(this.gfn_getMessage("COMS000008", ["선택", "행"])); //선택된 행이 없습니다.
        		return false;
        	}

        	var delArr = [];
        	for(var i=0; i < this.ds_list.rowcount; i++){
        		var checkbox = this.ds_list.getColumn(i, "COL_CHK");
        		if( checkbox == 1 ) {
        			delArr.push(i);
        			//this.ds_comCdList.deleteRow(i);
        		}
        	}
        	this.ds_list.deleteMultiRows(delArr);


        	var sReturn = this.confirm("삭제하시겠습니까?");

        	if(sReturn == true){
        		//this.fn_save();
        	}

        };

        //저장버튼
        this.btnSave_onclick = function(obj,e)
        {
        	var chkDsChange = this.fn_dataChangeCheck(this.ds_list);
        	if( !chkDsChange ) {
        		alert(this.gfn_getMessage("COMS000008", ["수정", "내용"])); //수정된 내용이 없습니다
        		return false;
        	} else {
        		//그리드 필수값 체크
        		var validation = this.fn_validationGrid(this.grd_list, this.valiGridIds, this.ds_list);

        		if(validation){
        			var sReturn = this.confirm(this.gfn_getMessage("COMS000013", ["저장"])); //저장 하시겠습니까?
        			if(sReturn == true){
        				this.fn_save();
        			}
        		}
        	}
        };


        this.ds_list_cancolumnchange = function(obj,e)
        {
        	if( e.columnid == "MSG_CD" ) {
        		var engNum = /^[a-zA-Z0-9]*$/gi;

        		if(e.newvalue != "")
        		{
        			var objResult = engNum.test(e.newvalue);
        			if(!objResult) {
        				alert(this.gfn_getMessage("COMS000017", ["메시지 코드", "영문/숫자만"]));
        				return false;
        			}
        		}
        	}
        };

        //레이아웃 저장 버튼
        this.btnLayoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        //레이아웃 초기화
        this.btnLayoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        //초기화
        this.Div00_btnClear_onclick = function(obj,e)
        {
        	this.clear();
        };


        this.btnExcel_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert(this.gfn_getMessage("COMS000007")); //조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.
        		return false;
        	}

        	this.fn_excel_download();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.addEventHandler("onkeyup",this.Div00_onkeyup,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btnClear.addEventHandler("onclick",this.Div00_btnClear_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btnLayoutSave.addEventHandler("onclick",this.btnLayoutSave_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnLayoutClear.addEventHandler("onclick",this.btnLayoutClear_onclick,this);
            this.grd_list_excel.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.ds_list.addEventHandler("cancolumnchange",this.ds_list_cancolumnchange,this);
            this.ds_list_excel.addEventHandler("cancolumnchange",this.ds_list_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_YA_18.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
