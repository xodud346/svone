(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("errorLogList");
            this.set_titletext("에러내용 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("searchDs", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FORM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ExceptionDs", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"2\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"2\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_CRT_CLASS\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_CRT_METHOD\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_MSG\" type=\"STRING\" size=\"2000\"/><Column id=\"EXCEPT_DTLS\" type=\"STRING\" size=\"0\"/><Column id=\"THME_DOMN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ExceptionDsCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"2\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"2\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_CRT_CLASS\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_CRT_METHOD\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_MSG\" type=\"STRING\" size=\"2000\"/><Column id=\"EXCEPT_DTLS\" type=\"STRING\" size=\"0\"/><Column id=\"THME_DOMN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_thmeDownCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("searchDsOrigin", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FORM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_iptPstType", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trem", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ExceptionDsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"2\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"2\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_CRT_CLASS\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_CRT_METHOD\" type=\"STRING\" size=\"100\"/><Column id=\"LOG_MSG\" type=\"STRING\" size=\"2000\"/><Column id=\"EXCEPT_DTLS\" type=\"STRING\" size=\"0\"/><Column id=\"THME_DOMN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_exceptionList","20","238",null,null,"20","96",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_positionstep("0");
            obj.set_binddataset("ExceptionDs");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_cellsizingtype("both");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"90\"/><Column size=\"112\"/><Column size=\"101\"/><Column size=\"106\"/><Column size=\"184\"/><Column size=\"194\"/><Column size=\"126\"/><Column size=\"365\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"발생일시\"/><Cell col=\"1\" text=\"주제영역코드\"/><Cell col=\"2\" text=\"주제영역명\"/><Cell col=\"3\" text=\"입력위치타입코드\"/><Cell col=\"4\" text=\"화면ID\"/><Cell col=\"5\" text=\"화면명\"/><Cell col=\"6\" text=\"로그생성클래스\"/><Cell col=\"7\" text=\"로그생성메소드\"/><Cell col=\"8\" text=\"로그메시지\"/><Cell col=\"9\" text=\"예외내역\"/></Band><Band id=\"body\"><Cell text=\"bind:REG_DTM\" autosizecol=\"none\" displaytype=\"expr:REG_DTM!=undefined?&apos;date&apos;:&apos;&apos;\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:THME_DOMN_CD\" autosizecol=\"none\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:THME_DOMN_NM\"/><Cell col=\"3\" text=\"bind:IPT_PST_TYPE_CD\" autosizecol=\"none\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:UI_ID\" autosizecol=\"default\" controlautosizingtype=\"width\"/><Cell col=\"5\" text=\"bind:UI_NM\" autosizecol=\"default\" controlautosizingtype=\"width\"/><Cell col=\"6\" text=\"bind:LOG_CRT_CLASS\" edittype=\"none\" controlautosizingtype=\"both\"/><Cell col=\"7\" text=\"bind:LOG_CRT_METHOD\" controlautosizingtype=\"both\" autosizecol=\"none\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:LOG_MSG\" controlautosizingtype=\"both\" autosizecol=\"default\"/><Cell col=\"9\" text=\"상세보기\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv3","610","975","330","230",null,null,null,null,null,null,this);
            obj.getSetter("positionstep").set("0");
            obj.set_background("#fffff");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("searchStartDate","6","10","149","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_value("");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Calendar("searchEndDate","165","10","149","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_confirm","99","192","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("3");
            obj.set_text("Confirm");
            obj.getSetter("uWord").set("popup.ok");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_cancel","169","192","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.getSetter("uWord").set("popup.cancel");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Div("div_paging","14","grd_exceptionList:30",null,"38","13",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20",null,"300","25",null,"grd_exceptionList:3",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"170","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Button("btnExSearch",null,"124","60","26","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","96","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("주제영역");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20","51","96","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("화면ID");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","82","96","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("발생일자");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","115","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Static00");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","591","20","116","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("입력위치타입");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_thmeDownCd","Static01:10","24",null,"24","Static01_00:10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_thmeDownCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","115","51",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Static00");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","115","82",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Static00");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","591","51","116","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("화면 명");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("uiId","Static01_00_00:10","55",null,"24","Static01_00_01:10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("uiNm","Static01_00_01:10","55",null,"24","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("searchStartDate","Static02:10","86","181","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","searchStartDate:5","86","10","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("searchEndDate","Static02_00:5","86","181","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_calendar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"124","60","26","btnExSearch:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("iptPstTypeCd","Static01_00:10","24",null,"24","30",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_iptPstType");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("DATE_TERM","searchEndDate:4","86","134","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_trem");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnLayoutClear",null,"200","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutSave",null,"200","110","28","btnLayoutClear:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 저장");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"200","110","28","btnLayoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_exceptionList_excel","20","1225",null,null,"-84","-529",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_positionstep("0");
            obj.set_binddataset("ExceptionDsExcel");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_cellsizingtype("both");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"90\"/><Column size=\"112\"/><Column size=\"101\"/><Column size=\"106\"/><Column size=\"184\"/><Column size=\"194\"/><Column size=\"126\"/><Column size=\"365\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"발생일시\"/><Cell col=\"1\" text=\"주제영역코드\"/><Cell col=\"2\" text=\"주제영역명\"/><Cell col=\"3\" text=\"입력위치타입코드\"/><Cell col=\"4\" text=\"화면ID\"/><Cell col=\"5\" text=\"화면명\"/><Cell col=\"6\" text=\"로그생성클래스\"/><Cell col=\"7\" text=\"로그생성메소드\"/><Cell col=\"8\" text=\"로그메시지\"/><Cell col=\"9\" text=\"예외내역\"/></Band><Band id=\"body\"><Cell text=\"bind:REG_DTM\" autosizecol=\"default\" displaytype=\"date\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:THME_DOMN_CD\" autosizecol=\"none\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:THME_DOMN_NM\"/><Cell col=\"3\" text=\"bind:IPT_PST_TYPE_CD\" autosizecol=\"none\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:UI_ID\" autosizecol=\"default\" controlautosizingtype=\"width\"/><Cell col=\"5\" text=\"bind:UI_NM\" autosizecol=\"default\" controlautosizingtype=\"width\"/><Cell col=\"6\" text=\"bind:LOG_CRT_CLASS\" edittype=\"none\" controlautosizingtype=\"both\"/><Cell col=\"7\" text=\"bind:LOG_CRT_METHOD\" controlautosizingtype=\"both\" autosizecol=\"none\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:LOG_MSG\" controlautosizingtype=\"both\" autosizecol=\"default\"/><Cell col=\"9\" text=\"상세보기\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.cmb_thmeDownCd","value","searchDs","THME_DOMN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.uiId","value","searchDs","UI_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.uiNm","value","searchDs","UI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.searchStartDate","value","searchDs","FORM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.searchEndDate","value","searchDs","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.iptPstTypeCd","value","searchDs","IPT_PST_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_08.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_08.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_08
        /* 작 성 일 자 : 2022.01.18
        /* 작  성   자 : 이성민
        /* 설       명 : 에러로그 조회
        /***********************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.pageCount = 1000;
        this.fv_oApp = nexacro.getApplication();	//application object

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        //onload
        this.errorLogList_onload = function(obj,e)
        {
        	var objDate = new Date();
        	var sToday = objDate.getFullYear()
        			   + ((objDate.getMonth() + 1) + "").padLeft(2, '0')
        			   + (objDate.getDate() + "").padLeft(2, '0');

             this.Div00.form.searchStartDate.set_value(sToday.substring(0,6) + "01");
             this.Div00.form.searchEndDate.set_value(sToday);

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.fn_commonCodeSearch();

        	//this.fn_doSearch(0);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "btnExSearch_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };


        //폼 keyup 이벤트
        /*this.errorLogList_onkeyup = function(obj:nexacro.Form,e:nexacro.KeyEventInfo)
        {
        	if( e.keycode == 13 ) {
        		this.fn_doSearch(0);
        	}
        };*/



        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_doSearch = function(page) {
        	 var sSvcId = "exceptionSearch";
             var sUrl = "/co/select-exception-info-list.do";
        	 var inDs = "ds_search=searchDs"
             var outDs = "ExceptionDs=ds_output1";
             var arg;
             var callback = "fn_received";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {

        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.searchDs.setColumn(0,"START_NUM", 0);
        		this.searchDs.setColumn(0,"ROW_COUNT",this.pageCount);

        		oSortInfo = this.grd_exceptionList.uaSortInfo;
        		this.searchDs.setColumn(0,"SORT_COLUMN", "");
        		this.searchDs.setColumn(0,"SORT_TYPE", "");
        	 }

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //공통코드조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=searchDs";
        	var outDs = "ds_thmeDownCd=ds_output1 ds_iptPstType=ds_output2 ds_trem=ds_output3";
        	var arg = "";

        	this.searchDs.setColumn(0, "codeList", "THME_DOMN_CD,IPT_PST_TYPE_CD,INQ_PERD_SPR_CD");
        	this.searchDs.setColumn(0, "langCd", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_received");
        };

        this.fn_search_excel = function() {
        	var sSvcId = "exceptionSearchExcel";
            var sUrl = "/co/select-exception-info-list.do";
        	var inDs = "ds_search=searchDs"
            var outDs = "ExceptionDsExcel=ds_output1";
            var arg;
            var callback = "fn_received";

        	this.searchDs.setColumn(0,"START_NUM", null);
        	this.searchDs.setColumn(0,"ROW_COUNT", null);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_received = function(svcID, errorCode, errorMsg) {
        	if(svcID == "exceptionSearch"){
        		//trace(this.ds_sampleList.saveXML());

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        		if( this.ExceptionDs.rowcount == 0 ) {
        			this.ExceptionDs.copyData(this.ExceptionDsCopy);
        		}

        		//paging 처리  this.fv_oApp.gv_pageViewCnt
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.pageCount, "fn_pageCallback");
        		//this.div_paging.form.cfn_createPage(this.div_paging,1912,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");

        	} else if(svcID == "commonCodeSearch"){
        		this.ds_thmeDownCd.insertRow(0);
        		this.ds_thmeDownCd.setColumn(0,"COM_DTL_CD_NM","전체");

        		this.ds_iptPstType.insertRow(0);
        		this.ds_iptPstType.setColumn(0,"COM_DTL_CD_NM","전체");

        		this.searchDsOrigin.copyData(this.searchDs);

        		//초기 조회기간
        		this.Div00.form.DATE_TERM.set_index(1);
        		this.fn_setSearchDate();
        	} else if( svcID == "exceptionSearchExcel" ) {
        		this.ofn_exportExcel({ form:this, grid:this.grd_exceptionList_excel, fileName:"에러로그" });
        	}
        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;
        	if(sFlag){
        		//this.searchDs.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.searchDs.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.searchDs.setColumn(0,"ROW_COUNT", this.pageCount);
        		this.fn_doSearch();
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_exceptionList"){
        		oSortInfo = this.grd_exceptionList.uaSortInfo;

        		this.searchDs.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.searchDs.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_doSearch();
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.grd_exceptionList.uSortFlag = "false";
        	this.grd_exceptionList.uServerSortFlag = "true";
        	this.grd_exceptionList.uSortCallback = "fn_sortCallback";

        	this.grd_exceptionList.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_exceptionList";
        	this.grd_exceptionList.uRightMouse = "true";
        	this.grd_exceptionList.uPersonalFlag = "true";
        	this.grd_exceptionList.uDefaultFormat = "REG_DTM,THME_DOMN_CD,THME_DOMN_NM,IPT_PST_TYPE_CD,UI_ID,UI_NM,LOG_CRT_CLASS,LOG_CRT_METHOD,LOG_MSG";
        }


        this.cfn_personalPopupClose = function(sRet){
        	this.grd_exceptionList.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        this.PopupDiv3_oncloseup = function(obj,e)
        {
        	if(this.PopupDiv3.form.searchStartDate.value > this.PopupDiv3.form.searchEndDate.value){
        		alert(this.gfn_getMessage("ERRC000192")); //시작일이 종료일보다 클 수 없습니다.
        		this.Div00.form.searchEndDate.set_value("");
        	}
        };


        this.fn_setSearchDate = function() {

        	var term = this.Div00.form.DATE_TERM.value;
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        	/*
        	1	1일
        	2	1주일
        	3	2주일
        	4	1개월
        	5	3개월
        	6	6개월
        	7	1년
        	*/
        	if( term == undefined ) term = "2";

        	objDate.setDate(objDate.getDate()+1);

        	if( term == "1" ) {
        		objDate.setDate(objDate.getDate() -1);
        	} else if( term == "2" ) {
        		objDate.setDate(objDate.getDate() -7);
        	} else if( term == "3" ) {
        		objDate.setDate(objDate.getDate() -14);
        	} else if( term == "4" ) {
        		objDate.setMonth(objDate.getMonth() -1);
        	} else if( term == "5" ) {
        		objDate.setMonth(objDate.getMonth() -3);
        	} else if( term == "6" ) {
        		objDate.setMonth(objDate.getMonth() -6);
        	} else if( term == "7" ) {
        		objDate.setMonth(objDate.getMonth() -12);
        	}
        	//console.log(objDate + "/" + objDate.getFullYear() + "/" + (objDate.getMonth() +1) + "/" + objDate.getDate());

            this.Div00.form.searchStartDate.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
            this.Div00.form.searchEndDate.set_value(sToday);
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //검색버튼
        this.btnExSearch_onclick = function(obj,e)
        {
        	 this.fn_doSearch(0);
        };

        //달력의 확인버튼
        this.PopupDiv3_btn_confirm_onclick = function(obj,e)
        {
        	var sFrom = this.PopupDiv3.form.searchStartDate.value;
        	var sTo = this.PopupDiv3.form.searchEndDate.value;


        	this.searchDs.setColumn(0, "FORM_DATE", sFrom);
        	this.searchDs.setColumn(0, "TO_DATE", sTo);

        	//this.searchStartDate.set_value(sFrom);
        	//this.searchEndDate.set_value(sTo);

        	this.PopupDiv3.closePopup();

        };


        //달력 취소버튼
        this.PopupDiv3_btn_cancel_onclick = function(obj,e)
        {
        	this.PopupDiv3.closePopup();
        };

        //그리드 셀 클릭 이벤트
        this.grd_exceptionList_oncellclick = function(obj,e)
        {
        	// 상세조회 팝업 호출
        	var dataSet = obj.getBindDataset();
        	if( e.col == 9 ) {
        		var params = {
        			detailMsg : dataSet.getColumn(e.row, "EXCEPT_DTLS")
        		};

        		var options = {};
        		options.title = "Exception 상세 내역";

        		this.gfn_openPopup("oprUntSinglePop", "CO_POP::exceptionDtsPopup.xfdl", params,  "", options);
        	}

        };

        //달력 드롭다운 이벤트
        this.searchStartDate_ondropdown = function(obj,e)
        {
        	this.PopupDiv3.form.searchStartDate.set_value(this.searchDs.getColumn(0, "FORM_DATE"));
        	this.PopupDiv3.form.searchEndDate.set_value(this.searchDs.getColumn(0, "TO_DATE"));
        	this.PopupDiv3.trackPopupByComponent(this.Div00.form.searchStartDate, 0, obj.height);
        };


        //레이아웃 저장 버튼
        this.btnLayoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_exceptionList", this.grd_exceptionList.getCurFormatString());
        };

        //레이아웃 초기화
        this.btnLayoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalReset("grd_exceptionList");
        	this.grd_exceptionList.set_formats(this.grd_exceptionList.uOrgFormat);
        };

        //초기화
        this.Div00_btnClear_onclick = function(obj,e)
        {
        	this.searchDs.copyData(this.searchDsOrigin);
        };

        this.Div00_DATE_TERM_oninnerdatachanged = function(obj,e)
        {
        	this.fn_setSearchDate();
        };

        this.Div00_DATE_TERM_onitemchanged = function(obj,e)
        {
        	this.fn_setSearchDate();
        };

        this.fn_date_oncloseup = function(obj,e)
        {
        	if(this.Div00.form.searchStartDate.value > this.Div00.form.searchEndDate.value){
        		alert(this.gfn_getMessage("ERRC000192")); //시작일이 종료일보다 클 수 없습니다.

        		this.Div00.form.searchStartDate.set_value(this.searchDsOrigin.getColumn(0, "FORM_DATE"));
        		this.Div00.form.searchStartDate.dropdown();
        	}
        };

        //엑셀 다운로드
        this.btn_excelDown_onclick = function(obj,e)
        {
        	var listCnt = this.ExceptionDs.getRowCount();
        		if (listCnt == 0)
        		{
        			alert('조회결과가 없습니다.')
        			return;
        		}
        	if(this.searchDs.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert(this.gfn_getMessage("COMS000007")); //조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.
        		return false;
        	}

        	this.fn_search_excel();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.errorLogList_onload,this);
            this.grd_exceptionList.addEventHandler("oncellclick",this.grd_exceptionList_oncellclick,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
            this.Div00.form.btnExSearch.addEventHandler("onclick",this.btnExSearch_onclick,this);
            this.Div00.form.Static00_01_00_00.addEventHandler("onclick",this.Static00_01_00_00_onclick,this);
            this.Div00.form.Static01_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.Div00.form.searchStartDate.addEventHandler("oncloseup",this.fn_date_oncloseup,this);
            this.Div00.form.searchEndDate.addEventHandler("oncloseup",this.fn_date_oncloseup,this);
            this.Div00.form.btnClear.addEventHandler("onclick",this.Div00_btnClear_onclick,this);
            this.Div00.form.DATE_TERM.addEventHandler("onitemchanged",this.Div00_DATE_TERM_onitemchanged,this);
            this.btnLayoutClear.addEventHandler("onclick",this.btnLayoutClear_onclick,this);
            this.btnLayoutSave.addEventHandler("onclick",this.btnLayoutSave_onclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.grd_exceptionList_excel.addEventHandler("oncellclick",this.grd_exceptionList_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
