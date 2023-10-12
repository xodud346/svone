(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_09");
            this.set_titletext("OGG로그조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ogg", this);
            obj._setContents("<ColumnInfo><Column id=\"EXCE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"OGG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRC_TBL\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_TBL\" type=\"STRING\" size=\"256\"/><Column id=\"SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"FORM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OGG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUCC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_success", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">성공</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">실패</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_clear", this);
            obj._setContents("<ColumnInfo><Column id=\"FORM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OGG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUCC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trem", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ogg_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"EXCE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"OGG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRC_TBL\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_TBL\" type=\"STRING\" size=\"256\"/><Column id=\"SUCC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_ogg","20","178",null,null,"20","96",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_positionstep("0");
            obj.set_binddataset("ds_ogg");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_cellsizingtype("both");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"141\"/><Column size=\"144\"/><Column size=\"156\"/><Column size=\"97\"/><Column size=\"221\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"실행일시\"/><Cell col=\"2\" text=\"OGG ID\"/><Cell col=\"3\" text=\"소스테이블\"/><Cell col=\"4\" text=\"대상테이블\"/><Cell col=\"5\" text=\"실행자료\"/><Cell col=\"6\" text=\"성공여부\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:EXCE_DTM\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:OGG_ID\"/><Cell col=\"3\" text=\"bind:SRC_TBL\"/><Cell col=\"4\" text=\"bind:TGT_TBL\"/><Cell col=\"5\" text=\"bind:EXCE_DATA\"/><Cell col=\"6\" text=\"bind:SUCC_YN\"/><Cell col=\"7\" text=\"bind:RMKS\"/></Band></Format></Formats>");
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

            obj = new Div("div_paging","20","grd_ogg:30",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","151","300","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"110","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"64","60","26","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","22","96","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("실행일자");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","115","22",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Static00");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("searchStartDate","Static02:10","26","181","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_calendar");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","searchStartDate:5","26","10","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("searchEndDate","Static02_00:5","26","181","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_positionstep("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_calendar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"64","60","26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01","658","22","70","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("OGG ID");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("OGG_ID","Static02_01:10","26",null,"24","416",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02","OGG_ID:10","22","96","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("성공여부");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("SUCC_YN","Static02_02:10","26","164","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_success");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("DATE_TERM","searchEndDate:4","26",null,"24","Static02_01:10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_trem");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnLayoutClear",null,null,"110","28","20","grd_ogg:10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutSave",null,"140","110","28","btnLayoutClear:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 저장");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"140","110","28","btnLayoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ogg_excel","54","960",null,null,"1006","-176",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_positionstep("0");
            obj.set_binddataset("ds_ogg_excel");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_cellsizingtype("both");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"141\"/><Column size=\"144\"/><Column size=\"156\"/><Column size=\"97\"/><Column size=\"221\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"실행일시\"/><Cell col=\"2\" text=\"OGG ID\"/><Cell col=\"3\" text=\"소스테이블\"/><Cell col=\"4\" text=\"대상테이블\"/><Cell col=\"5\" text=\"실행자료\"/><Cell col=\"6\" text=\"성공여부\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:EXCE_DTM\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:OGG_ID\"/><Cell col=\"3\" text=\"bind:SRC_TBL\"/><Cell col=\"4\" text=\"bind:TGT_TBL\"/><Cell col=\"5\" text=\"bind:EXCE_DATA\"/><Cell col=\"6\" text=\"bind:SUCC_YN\"/><Cell col=\"7\" text=\"bind:RMKS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.searchStartDate","value","ds_search","FORM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.searchEndDate","value","ds_search","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.OGG_ID","value","ds_search","OGG_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.SUCC_YN","value","ds_search","SUCC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_09.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_09.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_09
        /* 작 성 일 자 : 2022.03.23
        /* 작  성   자 : 이성민
        /* 설       명 : OGG 로그조회
        /***********************************************************/

        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.pageCount = 20;
        this.fv_oApp = nexacro.getApplication();	//application object

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        //onload
        this.fn_onload = function(obj,e)
        {
        	var objDate = new Date();
        	var sToday = objDate.getFullYear()
        			   + ((objDate.getMonth() + 1) + "").padLeft(2, '0')
        			   + (objDate.getDate() + "").padLeft(2, '0');

             this.Div00.form.searchStartDate.set_value(sToday.substring(0,6) + "01");
             this.Div00.form.searchEndDate.set_value(sToday);

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//초기 콤보
        	this.Div00.form.SUCC_YN.set_index(0);

        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_doSearch = function(page) {
        	 var sSvcId = "oggLogSearch";
             var sUrl = "/co/select-ogg-log-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_ogg=ds_output";
             var arg;
             var callback = "fn_callback";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {
        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.pageCount);
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
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        //엑셀 다운로드 조회
        this.fn_search_excel = function() {
        	var sSvcId = "oggLogSearchExcel";
            var sUrl = "/co/select-ogg-log-list.do";
        	var inDs = "ds_search=ds_search"
            var outDs = "ds_ogg_excel=ds_output1";
            var arg;
            var callback = "fn_callback";

        	this.ds_search.setColumn(0,"START_NUM", null);
        	this.ds_search.setColumn(0,"ROW_COUNT", null);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callback = function(svcID, errorCode, errorMsg) {

        	if( svcID == "oggLogSearch" ) {
        		//console.log(this.ds_ogg);
        		this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");

        	} else if( svcID == "commonCodeSearch" ) {
        		//초기 조회기간
        		this.Div00.form.DATE_TERM.set_index((this.ds_trem.rowcount-1));
        		this.fn_setSearchDate();

        		//초기 검색값
        		this.ds_search_clear.copyData(this.ds_search);
        	} else if( svcID == "oggLogSearchExcel" ) {
        		this.ofn_exportExcel({ form:this, grid:this.grd_ogg_excel, fileName:"OGG 로그조회" });
        	}


        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;
        	if(sFlag){
        		//this.ds_search.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.pageCount);
        		this.fn_doSearch();
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        //정렬 콜백
        /*
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_ogg"){
        		oSortInfo = this.grd_ogg.uaSortInfo;

        		this.ds_search.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_doSearch();
        	}
        };
        */
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	//this.grd_ogg.uSortFlag = "false";	//그리드 내 소팅
        	//this.grd_ogg.uServerSortFlag = "true";	// 쿼리 소팅
        	//this.grd_ogg.uSortCallback = "fn_sortCallback";

        	this.grd_ogg.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_ogg";
        	this.grd_ogg.uRightMouse = "true";
        	this.grd_ogg.uPersonalFlag = "true";
        	this.grd_ogg.uDefaultFormat = "";
        }


        this.cfn_personalPopupClose = function(sRet){
        	this.grd_ogg.set_formats(sRet);
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


        //조회기간 재설정
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
        	trace(term);
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

        //달력의 확인버튼
        this.PopupDiv3_btn_confirm_onclick = function(obj,e)
        {
        	var sFrom = this.PopupDiv3.form.searchStartDate.value;
        	var sTo = this.PopupDiv3.form.searchEndDate.value;

        	this.ds_search.setColumn(0, "FORM_DATE", sFrom);
        	this.ds_search.setColumn(0, "TO_DATE", sTo);

        	//this.searchStartDate.set_value(sFrom);
        	//this.searchEndDate.set_value(sTo);

        	this.PopupDiv3.closePopup();

        };


        //달력 취소버튼
        this.PopupDiv3_btn_cancel_onclick = function(obj,e)
        {
        	this.PopupDiv3.closePopup();
        };


        //달력 드롭다운 이벤트
        this.searchStartDate_ondropdown = function(obj,e)
        {
        	this.PopupDiv3.form.searchStartDate.set_value(this.ds_search.getColumn(0, "FORM_DATE"));
        	this.PopupDiv3.form.searchEndDate.set_value(this.ds_search.getColumn(0, "TO_DATE"));
        	this.PopupDiv3.trackPopupByComponent(this.Div00.form.searchStartDate, 0, obj.height);
        };


        //레이아웃 저장 버튼
        this.btnLayoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_ogg", this.grd_ogg.getCurFormatString());
        };

        //레이아웃 초기화
        this.btnLayoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalReset("grd_ogg");
        	this.grd_ogg.set_formats(this.grd_ogg.uOrgFormat);
        };

        //초기화
        this.Div00_btnClear_onclick = function(obj,e)
        {
        	this.ds_search.copyData(this.ds_search_clear);
        };

        //엔터이벤트
        this.SSP_BO_YA_09_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		if( e.fromobject.valueOf() == "[object Edit]" ) {
        			this.fn_search(0);
        		}
        	}
        };

        //검색버튼
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	this.fn_doSearch(0);
        };

        this.fn_date_oncloseup = function(obj,e)
        {
        	if(this.Div00.form.searchStartDate.value > this.Div00.form.searchEndDate.value){
        		alert(this.gfn_getMessage("ERRC000192")); //시작일이 종료일보다 클 수 없습니다.
        		this.Div00.form.searchStartDate.set_value(this.ds_search_clear.getColumn(0, "FORM_DATE"));
        		this.Div00.form.searchStartDate.dropdown();
        	}
        };

        this.Div00_DATE_TERM_onitemchanged = function(obj,e)
        {
        	this.fn_setSearchDate();
        };

        //엑셀 다운로드
        this.Button01_onclick = function(obj,e)
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
            this.addEventHandler("onload",this.fn_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_YA_09_onkeyup,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.searchStartDate.addEventHandler("oncloseup",this.fn_date_oncloseup,this);
            this.Div00.form.searchEndDate.addEventHandler("oncloseup",this.fn_date_oncloseup,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btnClear_onclick,this);
            this.Div00.form.DATE_TERM.addEventHandler("onitemchanged",this.Div00_DATE_TERM_onitemchanged,this);
            this.btnLayoutClear.addEventHandler("onclick",this.btnLayoutClear_onclick,this);
            this.btnLayoutSave.addEventHandler("onclick",this.btnLayoutSave_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
