(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_34");
            this.set_titletext("플랜트 조회  단일 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HUB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HUB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PLNT_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_list01","20","98",null,null,"20","59",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list01");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"123\"/><Column size=\"280\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"1\" text=\"플랜트 코드\"/><Cell col=\"2\" text=\"플랜트 명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PLNT_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:PLNT_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,null,"60","30","20","20",null,null,null,null,this);
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

            obj = new Static("sta_totcnt","20",null,"300","29",null,"25",null,null,null,null,this);
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

            obj = new Static("staticTitle","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("플랜트 조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_34.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_34.xfdl", function() {
        // 플랜트 조회

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

        this.SSP_BO_OA_34_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//검색 영역 최소size 적용
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.fn_initGrid();
        	this.fn_regShortCutMethod();

        	var type = this.parent.type;
        	if (type == "odrMngList") {
        		this.staticTitle.set_text(this.parent.title);
        		this.parentFormID = this.parent.formID;
        	}
        };

        this.SSP_BO_OA_34_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //
        this.fn_search = function() {
        	var sSvcId = "selectOdrPlntList";
        	var sUrl = "/od/odrPopup/selectOdrPlntList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "TOTAL_COUNT", -1);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_searchOdrPlntCount = function() {
        	var sSvcId = "selectOdrPlntCount";
        	var sUrl = "/od/odrPopup/selectOdrPlntCount.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectOdrPlntList"){
        		this.fn_initGrid();
        		// 조회조건 다시셋팅
        		this.fn_setSearchCondition();
        		this.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건 (최대 조회수 : " + this.gfn_appendComma(this.msk_searchCount.text, 0) + "건)");
        		this.sta_totcnt.set_visible(true);
        	}
        	else if(svcID == "selectOdrPlntCount"){
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
        	this.ds_list01.setColumn(0, "PLNT_ID", "");
        	this.ds_list01.setColumn(0, "BZ_DOMN_CD", "");
        	this.ds_list01.setColumn(0, "PLNT_NM", "");
        	this.ds_list01.setColumn(0, "CUST_HUB_YN", "");
        	this.ds_list01.setColumn(0, "PLNT_TP_CD", "");
        	this.ds_list01.set_rowposition(-1);
        	this.grid_list01.setFixedRow(0);
        };

        // 조회결과 체크박스 전체 해제
        this.fn_deselectAll = function() {
        	var nRowCount = this.ds_list01.getRowCount();
        	for (var i = 0; i < nRowCount; i++) {
        		this.ds_list01.setColumn(i, "CHK", "0");
        	}
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
        	this.ds_search.setColumn(0, "PLNT_ID", this.ds_list01.getColumn(0, "PLNT_ID"));
        	this.ds_search.setColumn(0, "PLNT_NM", this.ds_list01.getColumn(0, "PLNT_NM"));
        	this.ds_search.setColumn(0, "ROW_COUNT", this.msk_searchCount.text);
        };

        this.fn_setSearchCondition = function() {
        	this.ds_list01.setColumn(0, "PLNT_ID", this.ds_search.getColumn(0, "PLNT_ID"));
        	this.ds_list01.setColumn(0, "PLNT_NM", this.ds_search.getColumn(0, "PLNT_NM"));
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        	this.fn_regMethodShiftENTER("btn_add_onclick");
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
        	var plntId = this.ds_list01.getColumn(0, "PLNT_ID");
        	var plntNm = this.ds_list01.getColumn(0, "PLNT_NM");
        	var searchCount = this.msk_searchCount.text;

        	if (searchCount == undefined || searchCount < 10) {
        		alert(this.fn_getMessage("ERRS000138","10"));
        		return;
        	}

        	this.fn_searchMapSetting();
        	//this.fn_searchOdrPlntCount();
        	this.fn_search();
        };

        // 추가
        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_list02.clearData();
        	var nRow = 0;

        	if (this.ds_list01.rowposition < 0) {
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}

        	nRow = this.ds_list02.addRow();
        	this.ds_list02.copyRow(nRow, this.ds_list01, this.ds_list01.rowposition);

        	if (this.ds_list02.rowcount <= 0) {
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}

        	var resData = {};
        	var resString = "";

        	// 플랜트코드, 플랜트명
        	resData.PLNT_ID = this.ds_list02.getColumn(0, "PLNT_ID");
        	resData.PLNT_NM = this.ds_list02.getColumn(0, "PLNT_NM");
        	resString = JSON.stringify(resData);

        	// 등록할 때 사용한 Dataset 내용 삭제
        	this.ds_list02.clearData();

        	this.close(resString);
        };


        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/

        // 그리드 클릭시 체크박스 체크되도록
        this.grid_list01_oncellclick = function(obj,e) {
        	if (e.col > 0) {
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
        	var resData = {};
        	var resString = "";
        	var row = this.ds_list01.rowposition;
        	resData.PLNT_ID = this.ds_list01.getColumn(row, "PLNT_ID");
        	resData.PLNT_NM = this.ds_list01.getColumn(row, "PLNT_NM");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_34_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_34_onkeyup,this);
            this.grid_list01.addEventHandler("oncellclick",this.grid_list01_oncellclick,this);
            this.grid_list01.addEventHandler("oncelldblclick",this.grid_list01_oncelldblclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div00_sta_totcnt00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_34.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
