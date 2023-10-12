(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GO_STM_SINGLE_POPUP");
            this.set_titletext("출고거래명세서 검색 단일팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(780,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_goStmList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SALSPRC_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_ID\" type=\"STRING\" size=\"50\"/><Column id=\"RPT_NM\" type=\"STRING\" size=\"50\"/><Column id=\"SALSPRC_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NM\">전체</Col><Col id=\"CD\"/></Row><Row><Col id=\"NM\">유</Col><Col id=\"CD\">Y</Col></Row><Row><Col id=\"NM\">무</Col><Col id=\"CD\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","16","100",null,"480","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_binddataset("ds_goStmList");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_extendsizetype("none");
            obj.set_cellsizingtype("none");
            obj.set_showselection("false");
            obj.set_selecttype("row");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"156\"/><Column size=\"440\"/><Column size=\"79\"/><Column size=\"68\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"리포트ID\"/><Cell col=\"1\" text=\"리포트명\"/><Cell col=\"2\" text=\"판매가유무\"/><Cell col=\"3\" text=\"미리보기\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" text=\"bind:RPT_ID\"/><Cell col=\"1\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" text=\"bind:RPT_NM\" textAlign=\"left\"/><Cell col=\"2\" edittype=\"expr:currow == 0 ? &quot;combo&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;combocontrol&quot; : &quot;normal&quot;\" combodataset=\"ds_useYn\" combocodecol=\"CD\" combodatacol=\"NM\" comboautoselect=\"false\" text=\"bind:SALSPRC_YN\" expr=\"expr:currow == 0 ? SALSPRC_YN : SALSPRC_YN_NM\"/><Cell col=\"3\" displaytype=\"expr:currow == 0 ? &quot;none&quot; : &quot;buttoncontrol&quot;\" edittype=\"expr:currow == 0 ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:currow == 0 ? &quot;&quot; : &quot;미리보기&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","699","64",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","18","70","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","570","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("| 출고거래명세서 검색");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init","630","64","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","590","740","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page","519","63","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_page");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_acceptvaluetype("ignoreinvalid");
            obj.set_readonly("false");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",780,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbo_page","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_48.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_48.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_48.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        출고거래명세서 검색 팝업
        빅재광 2022.05.10
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;

        this.RPT_ID = this.parent.rptId;
        this.RPT_NM = this.parent.rptNm;
        this.SALSPRC_YN = this.parent.salsprcYn;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e) {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.ds_goStmList.setColumn(0, "RPT_ID", this.RPT_ID);
        	this.ds_goStmList.setColumn(0, "RPT_NM", this.RPT_NM);
        	this.ds_goStmList.setColumn(0, "SALSPRC_YN", this.SALSPRC_YN);

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function(bInit) {
            this.ds_search.setColumn(0, "RPT_ID", this.ds_goStmList.getColumn(0, "RPT_ID"));
        	this.ds_search.setColumn(0, "RPT_NM", this.ds_goStmList.getColumn(0, "RPT_NM"));
        	this.ds_search.setColumn(0, "SALSPRC_YN", this.ds_goStmList.getColumn(0, "SALSPRC_YN"));

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_page.value);
        	}

        	var sSvcId = "selectGoStmList";
        	var sUrl   = "/bo/cust/oprunit/popup/seletc-go-stm-list.do";
        	var inDs   = "ds_search=ds_search";
        	var outDs  = "ds_goStmList=ds_goStmList";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0) {
        		//this.alert(errorCode+"\n"+errorMsg);
        		alert(this.fn_getMessage("ERRC000058"));	//오류가 발생했습니다.
        		return;
        	}

        	if(svcID == "selectGoStmList"){
        		this.ds_goStmList.insertRow(0);
        		this.ds_goStmList.setColumn(0, "RPT_ID", this.ds_search.getColumn(0, "RPT_ID"));
        		this.ds_goStmList.setColumn(0, "RPT_NM", this.ds_search.getColumn(0, "RPT_NM"));
        		this.ds_goStmList.setColumn(0, "SALSPRC_YN", this.ds_search.getColumn(0, "SALSPRC_YN"));
        		this.ds_goStmList.set_rowposition(-1);
        		this.grd_list.setFixedRow(0);

        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.cbo_page.value, "fn_pageCallback");

        		if(this.ds_goStmList.getRowCount() > 0) {
        			//
        		} else {
        			alert(this.fn_getMessage("ERRN000035"));	//검색된 내용이 없습니다.
        		}
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.cbo_page.value);
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search();
        	}
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //초기화
        this.btn_clear_onclick = function(obj,e) {
        	this.ds_goStmList.setColumn(0, "RPT_ID", "");
        	this.ds_goStmList.setColumn(0, "RPT_NM", "");
        	this.ds_goStmList.setColumn(0, "SALSPRC_YN", "");
        };

        //조회버튼
        this.btn_search_onclick = function(obj,e) {
        	this.fn_search(true);
        };

        //검색조건 ROW에서 enter 클릭 시
        this.grd_list_onenterdown = function(obj,e) {
        	this.fn_search();
        };

        // 그리드 클릭시
        this.grd_list_oncellclick = function(obj,e) {
        	if(e.row == 0){	//검색조건 ROW의 CELL 클릭 시 글자 맨 끝으로 커서 가도록
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        	} else {
        		if(e.col == 3) {
        			//var sEditType = obj.getCellProperty("body",e.cell,"edittype");
        			//if(sEditType == "button"){
        			//
        			//}
        		}
        	}

        	obj.dropdownCombo(); // 셀렉트박스 원터치클릭
        };

        //그리드 셀 더블클릭
        this.grd_list_oncelldblclick = function(obj,e) {
        	if(e.row > 0) {
        		if(e.col < 3) {
        			var resData = {};
        			var resString = "";
        			resData.RPT_ID      = this.ds_goStmList.getColumn(this.ds_goStmList.rowposition, "RPT_ID");		//보고서ID
        			resData.RPT_NM      = this.ds_goStmList.getColumn(this.ds_goStmList.rowposition, "RPT_NM");		//보고서명
        			resData.RPT_URL     = this.ds_goStmList.getColumn(this.ds_goStmList.rowposition, "RPT_URL");	//보고서URL
        			resData.SALSPRC_YN	= this.ds_goStmList.getColumn(this.ds_goStmList.rowposition, "SALSPRC_YN");	//판매가여부
        			resString = JSON.stringify(resData);
        			this.close(resString);
        		}
        	}
        };

        //선택 클릭 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	if(this.ds_goStmList.rowposition < 1){
        		alert(this.fn_getMessage("ERRC000050", "데이터")); // 선택된 데이터가 없습니다.
        		return;
        	}

        	var resData = {};
        	var resString = "";
        	resData.RPT_ID      = this.ds_goStmList.getColumn(this.ds_goStmList.rowposition, "RPT_ID");		//보고서ID
        	resData.RPT_NM      = this.ds_goStmList.getColumn(this.ds_goStmList.rowposition, "RPT_NM");		//보고서명
        	resData.RPT_URL     = this.ds_goStmList.getColumn(this.ds_goStmList.rowposition, "RPT_URL");	//보고서URL
        	resData.SALSPRC_YN	= this.ds_goStmList.getColumn(this.ds_goStmList.rowposition, "SALSPRC_YN");	//판매가여부
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//grid 초기 설정
        	/*
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";
        	this.grd_list.uCellSizeType = "true";
        	*/

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;
        };

        // 창닫기
        this.fn_closeForm = function() {
        	this.close();
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        	this.fn_regMethodShiftENTER("btn_select_onclick");
        };

        this.GO_STM_SINGLE_POPUP_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.GO_STM_SINGLE_POPUP_onkeyup,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Static60_00.addEventHandler("onclick",this.Static60_00_onclick,this);
            this.btn_init.addEventHandler("onclick",this.btn_clear_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_48.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
