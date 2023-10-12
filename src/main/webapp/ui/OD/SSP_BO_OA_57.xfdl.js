(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_57");
            this.set_titletext("변경항목 조회 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_list01","20","95",null,"260","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list01");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"0\"/><Column size=\"123\"/><Column size=\"280\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"2\" text=\"변경항목 코드\"/><Cell col=\"3\" text=\"변경항목 명\"/></Band><Band id=\"body\"><Cell edittype=\"none\" displaytype=\"expr:currow == 0 ? &quot;none&quot; : &quot;checkboxcontrol&quot;\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CHG_ITM_GRP_CD\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"3\" text=\"bind:CHG_ITM_GRP_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"60","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00",null,"60","60","28","252",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txtR");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","59","268","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("총 124건이 검색되었습니다.");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_searchCount",null,"60","100","27","148",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("1000");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"362","65","24","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list02","20","395",null,null,"20","59",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_nodatatext("선택된 결과가 없습니다.");
            obj.set_binddataset("ds_list02");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"0\"/><Column size=\"123\"/><Column size=\"280\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"2\" text=\"변경항목 코드\"/><Cell col=\"3\" text=\"변경항목 명\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CHG_ITM_GRP_CD\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:CHG_ITM_GRP_NM\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","45%",null,"81","28",null,"17",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("선택");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"60","60","28","85",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("변경항목 조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("sta_addedTotcnt","20","362","300","29",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("총 0건이 추가되었습니다.");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,660,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_57.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_57.xfdl", function() {
        // 변경항목 조회

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;
        this.parentFormID = "";
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/

        this.SSP_BO_OA_57_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//검색 영역 최소size 적용
        	this.resetScroll();
        	this.fn_initGrid();
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_57_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        this.fn_search = function() {
        	var sSvcId = "selectChgItmGrpList";
        	var sUrl = "/od/odrPopup/selectChgItmGrpList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_searchOdrPlntCount = function() {
        	var sSvcId = "selectChgItmGrpCount";
        	var sUrl = "/od/odrPopup/selectChgItmGrpCount.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectChgItmGrpList"){
        		//this.ds_list01.addColumn("CHK","N");

        		this.fn_initGrid();
        		// 조회조건 다시셋팅
        		this.fn_setSearchCondition();
        		this.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건 (최대 조회수 : " + this.msk_searchCount.text + "건)");
        		this.sta_totcnt.set_visible(true);
        	}
        	else if(svcID == "selectChgItmGrpCount"){
        		if (this.totalCount > 0) {
        			this.fn_search();
        		}
        	}
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_list01.insertRow(0);
        	this.ds_list01.setColumn(0, "CHG_ITM_GRP_CD", "");
        	this.ds_list01.setColumn(0, "CHG_ITM_GRP_NM", "");
        	this.ds_list01.setColumn(0, "CHK", "");
        	this.ds_list01.set_rowposition(-1);
        	this.grid_list01.setFixedRow(0);
        };

        this.fn_searchMapSetting = function() {
        	this.ds_search.setColumn(0, "CHG_ITM_GRP_CD", this.ds_list01.getColumn(0, "CHG_ITM_GRP_CD"));
        	this.ds_search.setColumn(0, "CHG_ITM_GRP_NM", this.ds_list01.getColumn(0, "CHG_ITM_GRP_NM"));
        	//this.ds_search.setColumn(0, "ROW_COUNT", this.msk_searchCount.text);
        	this.ds_search.setColumn(0, "ROW_COUNT", this.msk_searchCount.value);
        	this.ds_list02.clearData();
        };

        this.fn_setSearchCondition = function() {
        	this.ds_list01.setColumn(0, "CHG_ITM_GRP_CD", this.ds_search.getColumn(0, "CHG_ITM_GRP_CD"));
        	this.ds_list01.setColumn(0, "CHG_ITM_GRP_NM", this.ds_search.getColumn(0, "CHG_ITM_GRP_NM"));
        };

        this.fn_validationCheck = function(dataSet) {
        	var chkCnt = dataSet.getCaseCount("CHK == 1");
        	if (chkCnt == 0) {
        		alert("선택된 데이터가 없습니다.");
        		return false;
        	}
        	return true;
        };

        this.fn_showAddedCount = function() {
        	if (this.ds_list02.rowcount > 0) {
        		this.sta_addedTotcnt.set_text("선택건수 : "+ this.gfn_appendComma(this.ds_list02.rowcount, 0) +"건");
        		this.sta_addedTotcnt.set_visible(true);
        	}
        	else {
        		this.sta_addedTotcnt.set_visible(false);
        	}
        };

        // 그리드 헤더 체크박스 해제(true : 상단 그리드, false : 하단 그리드)
        this.fn_releaseCheckInHead = function(isUp) {
        	if (isUp)	this.grid_list01.setCellProperty("head", 0, "text", "0");
        	else		this.grid_list02.setCellProperty("head", 0, "text", "0");
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        	this.fn_regMethodShiftENTER("btn_select_onclick");
        };

        //
        this.fn_closeForm = function() {
        	this.close(0);
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_searchOdrPlntCount();
        	this.fn_showAddedCount();
        };

        // 추가
        this.btn_add_onclick = function(obj,e)
        {
        	var nRow = 0;
        	this.ds_list01.setColumn(0, "CHK", "0");
        	if (this.fn_validationCheck(this.ds_list01)) {
        		this.grid_list01.set_binddataset();
        		this.grid_list02.set_binddataset();
        		this.ds_list01.filter("CHK=='1'");

        		for(var i = 0; i < this.ds_list01.rowcount; i++) {
        			var chgItem = this.ds_list01.getColumn(i, "CHG_ITM_GRP_CD");

        			this.ds_list02.filter("CHG_ITM_GRP_CD=='" + chgItem + "'");

        			if (this.ds_list02.rowcount == 0) {
        				nRow = this.ds_list02.addRow();
        				this.ds_list02.copyRow(nRow, this.ds_list01, i);
        				this.ds_list02.setColumn(nRow, "CHK", "1");
        			}
        			this.ds_list02.filter("");
        		}

        		this.ds_list01.filter("");
        		this.grid_list01.set_binddataset(this.ds_list01);
        		this.grid_list02.set_binddataset(this.ds_list02);
        	}
        	this.fn_showAddedCount();
        };

        this.btn_select_onclick = function(obj,e)
        {
        	var resData = {};
        	var resList = [];
        	var nRowCount = this.ds_list02.getRowCount() ;

        	for (var i = 0; i < nRowCount; i++) {
        		resData.CHG_ITM_GRP_CD = this.ds_list02.getColumn(i, "CHG_ITM_GRP_CD");
        		resData.CHG_ITM_GRP_NM = this.ds_list02.getColumn(i, "CHG_ITM_GRP_NM");
        		resList.push(JSON.stringify(resData));
        	}
        	this.close(JSON.stringify(resList));
        };

        this.btn_clear_onclick = function(obj,e)
        {
        	this.ds_list01.clearData();
        	this.ds_list01.insertRow(0);
        	this.ds_list01.setColumn(0, "CHG_ITM_GRP_CD", "");
        	this.ds_list01.setColumn(0, "CHG_ITM_GRP_NM", "");
        	this.ds_list01.setColumn(0, "CHK", "");
        	this.ds_list01.set_rowposition(-1);
        	this.ds_list02.clearData();
        };

        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/
        this.grid_list01_oncellclick = function(obj,e)
        {
        	var dataSet = obj.getBindDataset();
        	var chkValue = obj.getCellText(e.row, 0);

        	if(e.row > 0) {
        		chkValue = (chkValue == "1" ? "0" : "1");
        		dataSet.setColumn(e.row, "CHK", chkValue);
        		if (chkValue == "0")	this.fn_releaseCheckInHead(true);
        	}
        	else if (e.col > 0) {
        		var cellText = obj.getCellText(e.row, e.cell);

        		if (cellText == undefined) {
        			trace("### cellText : " + cellText);
        			return;
        		}
        		this.grid_list01.setEditSelect(0, cellText.length);
        	}
        };

        this.grid_list01_oncelldblclick = function(obj,e)
        {
        	//그리드1 더블클릭
        	var nRow = this.ds_list01.rowposition ;
        	trace(" nRow is " + nRow);
        	if(nRow >= 1) {
        		var findRow = this.ds_list02.findRowExpr("CHG_ITM_GRP_CD == '" + this.ds_list01.getColumn(nRow, "CHG_ITM_GRP_CD") + "'");
        		if(findRow == -1) {
        			var nAddedRow = this.ds_list02.addRow();
        			this.ds_list02.setColumn(nAddedRow, "CHK", "1");
        			this.ds_list02.setColumn(nAddedRow, "CHG_ITM_GRP_CD", this.ds_list01.getColumn(nRow,"CHG_ITM_GRP_CD"));
        			this.ds_list02.setColumn(nAddedRow, "CHG_ITM_GRP_NM", this.ds_list01.getColumn(nRow,"CHG_ITM_GRP_NM"));
        			this.ds_list01.setColumn(nRow, "CHK", "1");
        		}
        		this.fn_showAddedCount();
        	}
        };

        this.grid_list01_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_searchOdrPlntCount();
        };

        this.grid_list02_oncellclick = function(obj,e)
        {
        	var dataSet = obj.getBindDataset();
        	var chkValue = obj.getCellText(e.row, 0);

        	if(e.row >= 0) {
        		chkValue = (chkValue == "1" ? "0" : "1");
        		dataSet.setColumn(e.row, "CHK", chkValue);
        		if (chkValue == "0")	this.fn_releaseCheckInHead(false);
        	}
        };


        this.grid_list02_oncelldblclick = function(obj,e)
        {
        	var nRow = this.ds_list02.rowposition ;
        	if(nRow != -1) {
        		this.ds_list02.deleteRow(nRow);
        		var findRow = this.ds_list01.findRowExpr("CHG_ITM_GRP_CD == '" + this.ds_list02.getColumn(nRow, "CHG_ITM_GRP_CD") + "'");
        		if(findRow == -1) {
        			this.ds_list01.setColumn(findRow, "CHK", "1");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_57_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_57_onkeyup,this);
            this.grid_list01.addEventHandler("oncelldblclick",this.grid_list01_oncelldblclick,this);
            this.grid_list01.addEventHandler("onenterdown",this.grid_list01_onenterdown,this);
            this.grid_list01.addEventHandler("oncellclick",this.grid_list01_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div00_sta_totcnt00_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.grid_list02.addEventHandler("oncelldblclick",this.grid_list02_oncelldblclick,this);
            this.grid_list02.addEventHandler("oncellclick",this.grid_list02_oncellclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_57.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
