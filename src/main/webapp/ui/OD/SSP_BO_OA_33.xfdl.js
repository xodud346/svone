(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_33");
            this.set_titletext("주문자 조회 멀티 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DRMC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_USE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DRMC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_list01","20","98",null,"373","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list01");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"170\"/><Column size=\"142\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"운영단위ID\"/><Cell col=\"2\" text=\"주문자ID\"/><Cell col=\"3\" text=\"주문자명\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == 0 ? &quot;none&quot; : &quot;checkboxcontrol&quot;\" edittype=\"none\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:MBR_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"3\" text=\"bind:MBR_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm","45%",null,"60","30",null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"60","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00",null,"60","60","28","188",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txtR");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","61","300","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("총 124건이 검색되었습니다.");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_searchCount",null,"60","100","27","84",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("1000");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list02","20","521",null,null,"20","100",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list02");
            obj.set_selecttype("multiarea");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"170\"/><Column size=\"148\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"운영단위ID\"/><Cell col=\"2\" text=\"주문자ID\"/><Cell col=\"3\" text=\"주문자명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"2\" text=\"bind:MBR_ID\"/><Cell col=\"3\" text=\"bind:MBR_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,null,"65","30","20","60",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00",null,"700","30","10","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_00",null,null,"30","10","67","50",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_01",null,"510","30","10","23",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_addedTotcnt","20","491","300","29",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("총 0건이 추가되었습니다.");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"481","65","30","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주문자 조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_33.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_33.xfdl", function() {
        // 주문자 조회

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.insertCount = 0;

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/

        this.SSP_BO_OA_33_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.fn_initGrid();
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_33_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //
        this.fn_search = function() {
        	var sSvcId = "selectOdrPsnList";
        	var sUrl = "/od/odrPopup/selectOdrPsnList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "TOTAL_COUNT", -1);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_searchOdrPsnCount = function() {
        	var sSvcId = "selectOdrPsnCount";
        	var sUrl = "/od/odrPopup/selectOdrPsnCount.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectOdrPsnList") {
        		this.fn_initGrid();
        		// 조회조건 다시셋팅
        		this.fn_setSearchCondition();
        		this.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건 (최대 조회수 : " + this.gfn_appendComma(this.msk_searchCount.text, 0) + "건)");
        		this.sta_totcnt.set_visible(true);
        	}
        	else if (svcID == "selectOdrPsnCount") {
        		if (this.totalCount > 0) {
        			this.fn_search();
        		}
        	}
        };

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grid_list01"){
        		oSortInfo = this.grd_mainList.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search();
        	}
        };


        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_list01.insertRow(0);
        	this.ds_list01.setColumn(0, "CO_CD", "");
        	this.ds_list01.setColumn(0, "MBR_ID", "");
        	this.ds_list01.setColumn(0, "OPR_UNIT_ID", "");
        	this.ds_list01.setColumn(0, "OPR_UNIT_NM", "");
        	this.ds_list01.setColumn(0, "BZPLC_ID", "");
        	this.ds_list01.setColumn(0, "DEPT_ID", "");
        	this.ds_list01.setColumn(0, "MBR_NM", "");
        	this.ds_list01.setColumn(0, "EMAIL_ADDR", "");
        	this.ds_list01.setColumn(0, "MBR_USE_CD", "");
        	this.ds_list01.setColumn(0, "DRMC_YN", "");
        	this.ds_list01.set_rowposition(-1);
        	this.grid_list01.setFixedRow(0);
        };

        this.fn_validationCheck = function(dataSet) {
        	var chkCnt = dataSet.getCaseCount("CHK == 1");
        	if (chkCnt == 0) {
        		alert(this.fn_getMessage("ERRS000137"));
        		return false;
        	}
        	return true;
        };

        this.fn_searchMapSetting = function() {
        	this.ds_search.setColumn(0, "OPR_UNIT_ID", this.ds_list01.getColumn(0, "OPR_UNIT_ID"));
        	this.ds_search.setColumn(0, "MBR_ID", this.ds_list01.getColumn(0, "MBR_ID"));
        	this.ds_search.setColumn(0, "MBR_NM", this.ds_list01.getColumn(0, "MBR_NM"));
        	this.ds_search.setColumn(0, "ROW_COUNT", this.msk_searchCount.text);
        };

        this.fn_setSearchCondition = function() {
        	//this.ds_list01.setColumn(0, "CO_CD", this.ds_search.getColumn(0, "CO_CD"));
        	this.ds_list01.setColumn(0, "MBR_ID", this.ds_search.getColumn(0, "MBR_ID"));
        	this.ds_list01.setColumn(0, "OPR_UNIT_ID", this.ds_search.getColumn(0, "OPR_UNIT_ID"));
        	this.ds_list01.setColumn(0, "MBR_NM", this.ds_search.getColumn(0, "MBR_NM"));
        };

        // 추가기능(특정 데이터만 하단 그리드에 데이터 추가)
        this.fn_addSelectedData = function(selectedRowPosition) {
        	if (this.ds_list01.getColumn(selectedRowPosition, "CHK") == "1") {
        		var oprUnid = this.ds_list01.getColumn(selectedRowPosition, "OPR_UNIT_ID");
        		var mbrId = this.ds_list01.getColumn(selectedRowPosition, "MBR_ID");

        		this.ds_list02.filter("OPR_UNIT_ID=='" + oprUnid + "' && MBR_ID=='" + mbrId + "'");

        		if (this.ds_list02.rowcount == 0) {
        			nRow = this.ds_list02.addRow();
        			this.ds_list02.copyRow(nRow, this.ds_list01, selectedRowPosition);
        			this.ds_list02.setColumn(nRow, "CHK", "0");
        		}
        		this.ds_list02.filter("");
        	}

        	this.fn_showAddedCount();
        };

        // 추가기능(전체 데이터 중에 선택된 것만 하단 그리드에 데이터 추가)
        this.fn_addCheckedData = function() {
        	var nRow = 0;
        	this.ds_list01.setColumn(0, "CHK", "0");

        	if (this.fn_validationCheck(this.ds_list01)) {
        		this.grid_list01.set_binddataset();
        		this.grid_list02.set_binddataset();
        		this.ds_list01.filter("CHK=='1'");

        		for(var i = 0; i < this.ds_list01.rowcount; i++) {
        			var oprUnitId = this.ds_list01.getColumn(i, "OPR_UNIT_ID");
        			var mbrId = this.ds_list01.getColumn(i, "MBR_ID");

        			this.ds_list02.filter("OPR_UNIT_ID=='" + oprUnitId + "' && MBR_ID=='" + mbrId + "'");

        			if (this.ds_list02.rowcount == 0) {
        				nRow = this.ds_list02.addRow();
        				this.ds_list02.copyRow(nRow, this.ds_list01, i);
        				this.ds_list02.setColumn(nRow, "CHK", "0");
        			}
        			this.ds_list02.filter("");
        		}

        		this.ds_list01.filter("");
        		this.grid_list01.set_binddataset(this.ds_list01);
        		this.grid_list02.set_binddataset(this.ds_list02);
        	}

        	this.fn_showAddedCount();
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
        	this.fn_regMethodShiftENTER("btn_confirm_onclick");
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
        	var oprUnitId = this.ds_list01.getColumn(0, "OPR_UNIT_ID");
        	var mbrId = this.ds_list01.getColumn(0, "MBR_ID");
        	var mbrNm = this.ds_list01.getColumn(0, "MBR_NM");
        	var searchCount = this.msk_searchCount.text;

        	if ((oprUnitId == undefined || oprUnitId == "") &&
        	    (mbrId == undefined || mbrId == "") &&
        		(mbrNm == undefined || mbrNm == "")) {
        		alert(this.fn_getMessage("ERRS000134"));
        		return;
        	}

        	if (searchCount == undefined || searchCount < 10) {
        		alert(this.fn_getMessage("ERRS000138","10"));
        		return;
        	}

        	this.fn_releaseCheckInHead(true);
        	this.fn_searchMapSetting();
        	this.fn_showAddedCount();
        	//this.fn_searchOdrPsnCount();
        	this.fn_search();
        };

        // 추가
        this.btn_add_onclick = function(obj,e)
        {
        	this.fn_addCheckedData();
        };

        // 삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	var delArr = new Array();
        	var delIdArr = new Array();
        	var delMbrArr = new Array();

        	if(this.fn_validationCheck(this.ds_list02)) {
        		for(var i = 0; i < this.ds_list02.rowcount; i++) {
        			if(this.ds_list02.getColumn(i, "CHK") == "1") {
        				delArr.push(i);
        				delIdArr.push(this.ds_list02.getColumn(i, "OPR_UNIT_ID"));
        				delMbrArr.push(this.ds_list02.getColumn(i, "MBR_ID"));
        			}
        		}
        	}

        	this.ds_list02.deleteMultiRows(delArr);

        	for(var i = 0; i< delIdArr.length; i++) {
        		var findRow = this.ds_list01.findRowExpr("OPR_UNIT_ID == '" + delIdArr[i] + "'");

        		if(findRow >= 0) {
        			findRow = this.ds_list01.findRowExpr("MBR_ID == '" + delMbrArr[i] + "'");

        			if (findRow >= 0) {
        				this.ds_list01.setColumn(findRow, "CHK", "0");
        			}
        		}
        	}

        	this.fn_showAddedCount();
        };

        // 확인
        this.btn_confirm_onclick = function(obj,e)
        {
        	var resData = {};
        	var resList = [];

        	for (var i = 0; i < this.ds_list02.rowcount; i++) {
        		resData.OPR_UNIT_ID = this.ds_list02.getColumn(i, "OPR_UNIT_ID");
        		resData.MBR_ID = this.ds_list02.getColumn(i, "MBR_ID");
        		resList.push(JSON.stringify(resData));
        	}

        	trace("### return data : " + JSON.stringify(resList));
        	this.close(JSON.stringify(resList));
        };

        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/

        // 그리드 클릭시 체크박스 체크되도록
        this.grid_list01_oncellclick = function(obj,e){
        	var dataSet = obj.getBindDataset();
        	var chkValue = obj.getCellText(e.row, 0);

        	if(e.row > 0) {
        		chkValue = (chkValue == "1" ? "0" : "1");
        		dataSet.setColumn(e.row, "CHK", chkValue);
        	}
        	else if (e.col > 0) {
        		var cellText = obj.getCellText(e.row, e.cell);

        		if (cellText == undefined) {
        			trace("### cellText : " + cellText);
        			return;
        		}
        		//this.grid_list01.setEditSelect(cellText.length, cellText.length);
        		this.grid_list01.setEditSelect(0, cellText.length);
        	}
        };

        this.grid_list01_oncelldblclick = function(obj,e)
        {
        	var dataSet = obj.getBindDataset();
        	var chkValue = obj.getCellText(e.row, 0);

        	if (e.row > 0) {
        		dataSet.setColumn(e.row, "CHK", "1");
        		this.fn_addSelectedData(dataSet.rowposition);
        	}
        };

        this.grid_list02_oncellclick = function(obj,e)
        {
        	var dataSet = obj.getBindDataset();
        	var chkValue = obj.getCellText(e.row, 0);

        	//if(e.col != 0 && e.row > 0) {
        	if(e.row >= 0) {
        		chkValue = (chkValue == "1" ? "0" : "1");
        		dataSet.setColumn(e.row, "CHK", chkValue);
        		if (chkValue == "0")	this.fn_releaseCheckInHead(false);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_33_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_33_onkeyup,this);
            this.grid_list01.addEventHandler("oncellclick",this.grid_list01_oncellclick,this);
            this.grid_list01.addEventHandler("oncelldblclick",this.grid_list01_oncelldblclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div00_sta_totcnt00_onclick,this);
            this.grid_list02.addEventHandler("oncellclick",this.grid_list02_oncellclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_33.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
