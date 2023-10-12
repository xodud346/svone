(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_09");
            this.set_titletext("원산지 검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ctry", this);
            obj._setContents("<ColumnInfo><Column id=\"CTRY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CTRY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ctryCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CTRY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"43","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("| 원산지 검색");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","50","170","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","78",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_ctry");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_autoenter("select");
            obj.set_scrollbartype("auto fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"300\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"원산지 ID\"/><Cell col=\"1\" text=\"원산지명\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" text=\"bind:CTRY_SPR_CD\"/><Cell col=\"1\" text=\"bind:CTRY_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" cssclass=\"grd_WF_left\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","146",null,"314","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","367","42",null,"25","133",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("medt_maxCnt","431","43","65","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_format("#,#");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","270","Div00:10","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,610,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.medt_maxCnt","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PP_09.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.ctrySprCd = "";
        this.ctryNm = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.ctrySprCd = this.parent.ctrySprCd;
        	this.ctryNm = this.parent.ctryNm;
        	this.ds_ctryCopy.copyData(this.ds_ctry);
        	this.Div00.form.medt_maxCnt.set_value("1000"); //초기 1000으로 셋팅

        	if(this.gfn_isNull(this.parent.coCd)){
        		this.alert(this.fn_getMessage("ERRS000001"));
        		return;
        	}else{
        		this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        	}

        	if(!this.gfn_isNull(this.ctrySprCd) || !this.gfn_isNull(this.ctryNm)){
        		this.ds_search.setColumn(0, "CTRY_SPR_CD", this.ctrySprCd);
        		this.ds_search.setColumn(0, "CTRY_NM", this.ctryNm);

        		this.fn_search();
        	}else{
        		this.fn_initGrid();
        	}
        };

        this.fn_onkeyup = function(obj,e)
        {
        	// ENTER
        	if (e.keycode == 13) {
        		// 조회
        		this.fn_search();
        	}

        	// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		this.close();
        	}

        	// CTRL + ENTER
        	if (e.keycode == 13 && e.ctrlkey == true) {
        		// 선택
        		this.btn_select_onclick();
        	}

        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (){
        	var sSvcId = "search";
        	var sUrl = "/pr/prd-popup/select-ctry-popup-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_ctry=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "search"){
        		if(this.totalCount < 1){
        			this.ds_ctry.copyData(this.ds_ctryCopy);
        			this.Div00.form.sta_noData.bringToFront();
        		}else{
        			this.Div00.form.sta_noData.sendToBack();
        		}

        		this.fn_initGrid();
        		this.Div00.form.sta_totcnt.set_text("(총 "+ this.gfn_appendComma(this.totalCount, 0) +"건)");
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_ctry.insertRow(0);
        	this.ds_ctry.setColumn(0, "CTRY_SPR_CD",  this.ds_search.getColumn(0, "CTRY_SPR_CD"));
        	this.ds_ctry.setColumn(0, "CTRY_NM",  this.ds_search.getColumn(0, "CTRY_NM"));
        	this.ds_ctry.set_rowposition(-1);
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "CTRY_SPR_CD", this.ds_ctry.getColumn(0, "CTRY_SPR_CD"));
        	this.ds_search.setColumn(0, "CTRY_NM", this.ds_ctry.getColumn(0, "CTRY_NM"));
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_search_onclick = function(obj,e){
        	var coCd = this.ds_search.getColumn(0, "CO_CD");
        	if(this.gfn_isNull(coCd) || coCd ==  undefined){
        		this.alert(this.fn_getMessage("ERRS000001"));
        		return;
        	}
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        //그리드 셀 더블클릭
        this.grd_list_oncelldblclick = function(obj,e){
        	if(e.row != 0){
        		var resData = {};
        		var resString = "";

        		resData.CTRY_SPR_CD = this.ds_ctry.getColumn(this.ds_ctry.rowposition, "CTRY_SPR_CD");
        		resData.CTRY_NM = this.ds_ctry.getColumn(this.ds_ctry.rowposition, "CTRY_NM");
        		resString = JSON.stringify(resData);
        		this.close(resString);
        	}
        };

        //검색조건 ROW에서 enter 클릭 시
        this.grd_list_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        //검색조건 ROW의 CELL 클릭 시 글자 맨 끝으로 커서 가도록
        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.row == 0){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        	}
        };

        this.btn_select_onclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	if(this.ds_ctry.rowposition < 1){
        		this.alert(this.fn_getMessage("ERRS000137"));
        		this.Div00.form.grd_list.setFocus();
        		return;
        	}

        	resData.CTRY_SPR_CD = this.ds_ctry.getColumn(this.ds_ctry.rowposition, "CTRY_SPR_CD");
        	resData.CTRY_NM = this.ds_ctry.getColumn(this.ds_ctry.rowposition, "CTRY_NM");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.Div00.form.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.Div00.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div00.form.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PP_09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
