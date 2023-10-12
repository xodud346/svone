(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_30");
            this.set_titletext("매뉴얼등록");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1338,843);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"DATE_TERM\">1</Col><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"MANUAL_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_REG_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_REG_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTCC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTCC_INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trem", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_origin", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_WORD\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TERM\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"POPUP_YN\">ALL</Col><Col id=\"DATE_TYPE\">REG</Col><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"DATE_TERM\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_optr_info", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_manual_list", this);
            obj._setContents("<ColumnInfo><Column id=\"MANUAL_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_REG_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_REG_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","-1","20",null,"32","1",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0","20","100","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","432","20","78","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("REGPSN_NM","212","24","185","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button39","REGPSN_NM:3","24","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("REGPSN_ID","109","24","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("SEARCH_WORD","519","24","191","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","930","20","98","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("FROM_DATE","1039","24","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02_00","1144","24","10","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_positionstep("0");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("DATE_TERM","1260","24","68","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_trem");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("TO_DATE","1157","24","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","720","20","103","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("strUseYn","Static04_00_00:5","24","100","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_strUseYn_innerdataset = new nexacro.NormalDataset("div_search_form_strUseYn_innerdataset", obj);
            div_search_form_strUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_strUseYn_innerdataset);
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"63","60","26","64",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"63","60","26","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_manual","0","177",null,null,"0","53",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\"/><Column size=\"368\"/><Column size=\"102\"/><Column size=\"77\"/><Column size=\"99\"/><Column size=\"101\"/><Column size=\"99\"/><Column size=\"98\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"다운로드 수\"/><Cell col=\"3\" text=\"사용여부\"/><Cell col=\"4\" text=\"최초등록일\"/><Cell col=\"5\" text=\"등록자\"/><Cell col=\"6\" text=\"최종수정일\"/><Cell col=\"7\" text=\"최총수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:MANUAL_REG_SEQ\"/><Cell col=\"1\" text=\"bind:MANUAL_REG_TTL\" textAlign=\"left\" cssclass=\"grid_active\"/><Cell col=\"2\" text=\"bind:DOWN_CNT\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_DTM\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"date\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:REGPSN_ID\"/><Cell col=\"6\" text=\"bind:UPD_DTM\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:UPDPSN_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","0",null,"270","27",null,"grd_manual:-1",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","grd_manual:10",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutClear",null,"139","99","28","1",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutSave",null,"139","100","28","btnLayoutClear:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"139","110","28","btnLayoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btnRegist",null,"139","81","28","btn_excelDown:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등 록");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv3","364","905","386","230",null,null,null,null,null,null,this);
            obj.getSetter("positionstep").set("0");
            obj.set_background("#fffff");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("searchStartDate","0","2","181","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_value("");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Calendar("searchEndDate",null,"2","181","172","7",null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_confirm","124","191","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("3");
            obj.set_text("Confirm");
            obj.getSetter("uWord").set("popup.ok");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_cancel","194","191","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.getSetter("uWord").set("popup.cancel");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Grid("grd_manual_excel","22","1180",null,null,"-72","-423",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_manual_list");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"345\"/><Column size=\"74\"/><Column size=\"61\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"86\"/><Column size=\"89\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"다운로드 수\"/><Cell col=\"3\" text=\"사용여부\"/><Cell col=\"4\" text=\"최초등록일\"/><Cell col=\"5\" text=\"등록자\"/><Cell col=\"6\" text=\"최종수정일\"/><Cell col=\"7\" text=\"최총수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:MANUAL_REG_SEQ\"/><Cell col=\"1\" text=\"bind:MANUAL_REG_TTL\" textAlign=\"left\" cssclass=\"grid_active\"/><Cell col=\"2\" text=\"bind:DOWN_CNT\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_DTM\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"date\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:REGPSN_ID\"/><Cell col=\"6\" text=\"bind:UPD_DTM\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:UPDPSN_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1338,843,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.SEARCH_WORD","value","ds_search","SEARCH_WORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.FROM_DATE","value","ds_search","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.TO_DATE","value","ds_search","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.DATE_TERM","value","ds_search","DATE_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.REGPSN_ID","value","ds_search","REGPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.REGPSN_NM","value","ds_search","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.strUseYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_30.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CN_30.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_CN_01
        /* 작 성 일 자 : 2022/02/15
        /* 작  성   자 : 이성민
        /* 설       명 : 공지사항
        /***********************************************************/

        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;	//전체 카운트
        this.searchForm = this.div_search.form;	//검색영역 div

        //등록자 자동조회 위한 변후
        this.oprtrInfoCount = 0;
        this.selectRegpsnId = "";
        this.selectRegpsnNm = "";

        this.gds_userInfo = this.fv_oApp.gds_userInfo;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//라디오 초기값 설정.
        	//this.ds_popupYN.setColumn(0, "CODE", "ALL");

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//조회
        	//this.fn_search(0);
        	this.grd_manual.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "div_search_btnSearch_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "Tab00_Tabpage2_btnRegist_onclick",
        	});
        };



        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function(page) {
        	 var sSvcId = "selectManual";
             var sUrl = "/co/select-manual-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_list=ds_output";
             var arg;
             var callback = "fn_callBack";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {

        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);

        		oSortInfo = this.grd_manual.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN", "");
        		this.ds_search.setColumn(0,"SORT_TYPE", "");
        	 }

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }


        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_trem=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        //엑셀 다운로드용
        this.fn_search_excel = function() {
        	var sSvcId = "selectManualExcel";
             var sUrl = "/co/select-manual-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_manual_list=ds_output";
             var arg;
             var callback = "fn_callBack";

        	 this.ds_search.setColumn(0,"START_NUM", null);
        	 this.ds_search.setColumn(0,"ROW_COUNT", null);

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg){
        	if(svcID == "selectManual"){
        		//trace(this.ds_sampleList.saveXML());

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        		if( this.ds_list.rowcount == 0 ) {
        			this.grd_manual.set_nodatatext("조회 결과가 없습니다.");
        			this.ds_list.copyData(this.ds_list_copy);
        		}

        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        	} else if( svcID == "commonCodeSearch" ) {
        		//this.searchForm.DATE_TERM.set_index((this.ds_trem.rowcount-1));

        		//초기 조회기간
        		//this.fn_setSearchDate();

        		//검색 초기값 설정
        		this.ds_search_origin.copyData(this.ds_search);

        	} else if( svcID == "selectMbrOprtrInfoList" ) {
        		if( this.oprtrInfoCount > 1 ) {
        			this.fn_popup("OPRTR_INFO");
        		} else if( this.oprtrInfoCount == 1 ) {
        			this.ds_search.setColumn(0, "REGPSN_ID", this.selectRegpsnId);
        			this.ds_search.setColumn(0, "REGPSN_NM", this.selectRegpsnNm);
        		} else {
        			alert(this.gfn_getMessage("ERRN000035")); //검색된 내용이 없습니다
        		}

        	} else if( svcID == "selectManualExcel" ) {
        		this.ofn_exportExcel({ form:this, grid:this.grd_manual_excel, fileName:"매뉴얼 등록" });
        	}


        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		//this.ds_search.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_search();
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_manual"){
        		oSortInfo = this.grd_manual.uaSortInfo;

        		this.ds_search.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_search();
        	}
        };

        //팝업콜백
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	if( sPopupId == "oprtrInfoPop" ){
        		this.ds_search.setColumn(0, "REGPSN_ID", resData.OPRTR_ID);
        		this.ds_search.setColumn(0, "REGPSN_NM", resData.OPRTR_NM);
        	}

        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.grd_manual.uSortFlag = "false";
        	this.grd_manual.uServerSortFlag = "true";
        	this.grd_manual.uSortCallback = "fn_sortCallback";

        	this.grd_manual.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid cell size 변경
        	this.grd_manual.uCellSizeType = "true";

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_manual";
        	this.grd_manual.uRightMouse = "true";
        	this.grd_manual.uPersonalFlag = "true";
        	this.grd_manual.uDefaultFormat = "MANUAL_REG_SEQ,MANUAL_REG_TTL,DOWN_CNT,USE_YN,REG_DTM,REGPSN_ID,UPD_DTM,UPDPSN_ID";

        }

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_manual.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 검색영역 초기화
        this.clear = function() {
        	this.ds_search.copyData(this.ds_search_origin);
        	//this.fn_setSearchDate();
        }

        //달력 close  이벤트
        this.PopupDiv3_oncloseup = function(obj,e)
        {
        	if(this.PopupDiv3.form.searchStartDate.value > this.PopupDiv3.form.searchEndDate.value){
        		alert(this.gfn_getMessage("ERRC000192")); //시작일이 종료일보다 클 수 없습니다.
        		this.div_search.form.TO_DATE.set_value("");
        	}
        };

        //조회기간 재설정
        /*
        this.fn_setSearchDate = function() {

        	var term = this.searchForm.DATE_TERM.value;
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');


        	//1	1일
        	//2	1주일
        	//3	2주일
        	//4	1개월
        	//5	3개월
        	//6	6개월
        	//7	1년

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

            this.searchForm.FROM_DATE.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
            this.searchForm.TO_DATE.set_value(sToday);
        }
        */

        //라디오 변경 이벤트
        this.fn_radioChage = function(objId) {

        }

        //그리드 클릭 이벤트
        this.fn_DetailPopup = function(type) {

        	var dataset = this.ds_list;
        	var objParam = {};
        	var popupPage = "CO_POP::SSP_BO_CN_31.xfdl";

        	objParam.type = type;
        	if( type == "U" ) {
        		var manualRegSeq = dataset.getColumn(dataset.rowposition, "MANUAL_REG_SEQ");
        		//set params
        		objParam.manualRegSeq = manualRegSeq;

        		popupPage = "CO_POP::SSP_BO_CN_32.xfdl";
        	}

        	this.gfn_openPopup("detailPop", popupPage, objParam, "fn_popupCallback");
        }

        //팝업호출
        this.fn_popup = function(type) {
        	var objParam = {
        		coCd : this.gds_userInfo.getColumn(0, "CO_CD")
        	};

        	if( type == "OPRTR_INFO" ){
        		objParam.empNp = this.ds_search.getColumn(0, "REGPSN_ID");
        		objParam.oprtrNm = this.ds_search.getColumn(0, "REGPSN_NM");
        		this.gfn_openPopup("oprtrInfoPop", "CO_POP::SSP_BO_CN_26.xfdl", objParam, "fn_popupCallback");
        	}
        }

        this.fn_popupClose = function(type) {
        	if( type == "saveManual" ) {
        		alert(this.gfn_getMessage("ERRC000079")); //저장되었습니다
        		this.fn_search(0);
        	}
        }


        //팝업 입력창에 입력 후 엔터 칠 경우.
        this.fn_popupAutoSearch = function(id, url) {
        	if( "selectMbrOprtrInfoList" == id ) {
        		var sSvcId = id;
        		var sUrl = url;
        		var inDs = "ds_search=ds_optr_info";
        		var outDs = "";
        		var arg = "";

        		this.ds_optr_info.setColumn(0, "LANG_CD", "KO");
        		this.ds_optr_info.setColumn(0, "EMP_NO", this.ds_search.getColumn(0, "REGPSN_ID"));
        		this.ds_optr_info.setColumn(0, "OPRTR_NM", this.ds_search.getColumn(0, "REGPSN_NM"));

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //달력 드롭다운
        // this.DATE_ondropdown = function(obj:nexacro.Calendar,e:nexacro.EventInfo) {
        // 	this.PopupDiv3.form.searchStartDate.set_value(this.ds_search.getColumn(0, "FROM_DATE"));
        // 	this.PopupDiv3.form.searchEndDate.set_value(this.ds_search.getColumn(0, "TO_DATE"));
        // 	this.PopupDiv3.trackPopupByComponent(this.searchForm.FROM_DATE, 0, obj.height);
        // };


        //달력의 확인버튼
        // this.PopupDiv3_btn_confirm_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        //
        // 	var sFrom = this.PopupDiv3.form.searchStartDate.value;
        // 	var sTo = this.PopupDiv3.form.searchEndDate.value;
        //
        // 	this.ds_search.setColumn(0, "FROM_DATE", sFrom);
        // 	this.ds_search.setColumn(0, "TO_DATE", sTo);
        //
        // 	this.PopupDiv3.closePopup();
        //
        // };


        //달력 취소버튼
        this.PopupDiv3_btn_cancel_onclick = function(obj,e)
        {
        	this.PopupDiv3.closePopup();
        };

        //초기화
        this.div_search_btnClear_onclick = function(obj,e)
        {
        	this.clear();
        };

        //조회
        this.div_search_btnSearch_onclick = function(obj,e)
        {
        	this.fn_search(0);
        };

        //조회기간 변경 시 달력 날짜 세팅.
        this.Tab00_Tabpage2_div_search_DATE_TERM_onitemchanged = function(obj,e)
        {
        	//this.fn_setSearchDate();
        };


        // 그리드 더블클릭
        this.Tab00_Tabpage2_grd_manual_oncelldblclick = function(obj,e)
        {

        };

        // 그리드 클릭
        this.Tab00_Tabpage2_grd_manual_oncellclick = function(obj,e)
        {
        	this.fn_DetailPopup("U");
        };

        //등록버튼
        this.Tab00_Tabpage2_btnRegist_onclick = function(obj,e)
        {
        	this.fn_DetailPopup("N");
        };

        //등록자 조회 팝업
        this.div_search_Button39_onclick = function(obj,e)
        {
        	this.fn_popup("OPRTR_INFO");
        };

        //키업 이벤트
        /*this.div_search_onkeyup = function(obj:nexacro.Div,e:nexacro.KeyEventInfo)
        {
        	if( e.keycode == 13 ) {
        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			if( e.fromobject.id == "REGPSN_ID" || e.fromobject.id == "REGPSN_NM") {
        				this.fn_popupAutoSearch("selectMbrOprtrInfoList", "/co/popup/select-mbr-oprtr-info-list.do");
        			} else {
        				this.fn_search(0);
        			}
        		}
        	}
        };*/

        //레이아웃 저장 버튼
        this.btnLayoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_manual", this.grd_manual.getCurFormatString());
        };

        //레이아웃 초기화
        this.btnLayoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalReset("grd_manual");
        	this.grd_manual.set_formats(this.grd_manual.uOrgFormat);
        };

        // this.fn_date_oncloseup = function(obj:nexacro.Calendar,e:nexacro.CalendarCloseUpEventInfo)
        // {
        // 	if(this.div_search.form.FROM_DATE.value > this.div_search.form.TO_DATE.value){
        // 		alert(this.gfn_getMessage("ERRC000192")); //시작일이 종료일보다 클 수 없습니다.
        // 		this.div_search.form.FROM_DATE.set_value(this.ds_search_origin.getColumn(0, "FROM_DATE"));
        // 		this.div_search.form.FROM_DATE.dropdown();
        // 	}
        // };

        //엑셀 다운로드
        this.btn_excelDown_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert(this.gfn_getMessage("COMS000007")); //조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.
        		return false;
        	}
        	this.fn_search_excel();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.div_search.form.Button39.addEventHandler("onclick",this.div_search_Button39_onclick,this);
            this.div_search.form.REGPSN_ID.addEventHandler("onchanged",this.Div00_Edit38_onchanged,this);
            this.div_search.form.SEARCH_WORD.addEventHandler("onchanged",this.Div00_Edit38_onchanged,this);
            this.div_search.form.FROM_DATE.addEventHandler("oncloseup",this.fn_date_oncloseup,this);
            this.div_search.form.DATE_TERM.addEventHandler("onitemchanged",this.Tab00_Tabpage2_div_search_DATE_TERM_onitemchanged,this);
            this.div_search.form.TO_DATE.addEventHandler("oncloseup",this.fn_date_oncloseup,this);
            this.div_search.form.Static04_00_00.addEventHandler("onclick",this.div_search_Static04_00_00_onclick,this);
            this.div_search.form.strUseYn.addEventHandler("onitemchanged",this.div_search_USE_YN_onitemchanged,this);
            this.div_search.form.btnClear.addEventHandler("onclick",this.div_search_btnClear_onclick,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.div_search_btnSearch_onclick,this);
            this.grd_manual.addEventHandler("oncellclick",this.Tab00_Tabpage2_grd_manual_oncellclick,this);
            this.btnLayoutClear.addEventHandler("onclick",this.btnLayoutClear_onclick,this);
            this.btnLayoutSave.addEventHandler("onclick",this.btnLayoutSave_onclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.btnRegist.addEventHandler("onclick",this.Tab00_Tabpage2_btnRegist_onclick,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
            this.grd_manual_excel.addEventHandler("oncellclick",this.Tab00_Tabpage2_grd_manual_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_30.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
