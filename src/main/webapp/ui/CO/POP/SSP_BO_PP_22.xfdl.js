(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_22");
            this.set_titletext("사업장 단일 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,599);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bzplcCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","530",null,null,"20",null,null,null,null,this);
            obj.set_text("Div00");
            obj.set_positionstep("0");
            obj.set_enableevent("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","155",null,"354","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"41","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("사업장 조회");
            obj.set_cssclass("sta_WF_title04");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","40","180","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","77",null,"442","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_bzplc");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("body");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"96\"/><Column size=\"292\"/><Column size=\"123\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"사업장ID\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"사업자번호\"/></Band><Band id=\"body\"><Cell text=\"bind:BZPLC_ID\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:BZPLC_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" cssclass=\"grd_WF_left\"/><Cell col=\"2\" text=\"bind:BIZNO\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","235","grd_list:10","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_maxCnt","400","41",null,"26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_text("1,000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","336","40",null,"25","edt_maxCnt:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,599,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_maxCnt","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PP_22.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PP_22.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.bzplcId = "";
        this.bzplcNm = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.ds_bzplcCopy.copyData(this.ds_bzplc);
        	this.Div00.form.edt_maxCnt.set_value("1,000"); //초기 1000으로 셋팅
        	this.fn_paramSetting(this.parent);

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };

        this.fn_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (){
        	var sSvcId = "search";
        	var sUrl = "/co/popup/select-bzplc-popup-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_bzplc=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "search"){
        		if(this.totalCount < 1){
        			this.ds_bzplc.copyData(this.ds_bzplcCopy);
        			this.Div00.form.sta_noData.bringToFront();
        		}else{
        			this.Div00.form.sta_noData.sendToBack();
        		}

        		this.fn_initGrid();
        		this.Div00.form.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건");
        		this.Div00.form.grd_list.setFixedRow(0);

        		//그리드에 포커스
        		this.Div00.form.grd_list.setFocus();
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_paramSetting = function (param){
        	if(this.gfn_isNull(param.coCd) || param.coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}


        	this.ds_search.setColumn(0, "CO_CD"		, param.coCd);
        	this.ds_search.setColumn(0, "APRVL_YN"	, param.aprvl); // 고객-결재선 사용

        	if (!this.gfn_isNull(param.custSprCd)) { this.ds_search.setColumn(0, "CUST_SPR_CD"	, param.custSprCd); }  // 고객구분코드

        	this.fn_initGrid();

        	/*
        	this.bzplcId = param.bzplcId;
        	this.bzplcNm = param.bzplcNm;

        	this.ds_search.setColumn(0, "BZPLC_ID", this.bzplcId);
        	this.ds_search.setColumn(0, "BZPLC_NM", this.bzplcNm);

        	if(!this.gfn_isNull(this.bzplcId) || !this.gfn_isNull(this.bzplcNm)){
        		this.fn_search();
        	}else{
        		this.fn_initGrid();

        		//팝업창으로 넘어온 값이 ''면 sta_noData 안보이도록 처리
        		this.Div00.form.sta_noData.sendToBack();
        	}
        	*/
        };

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_bzplc.insertRow(0);
        	this.ds_bzplc.setColumn(0, "BZPLC_ID",  this.ds_search.getColumn(0, "BZPLC_ID"));
        	this.ds_bzplc.setColumn(0, "BZPLC_NM",  this.ds_search.getColumn(0, "BZPLC_NM"));
        	this.ds_bzplc.setColumn(0, "BIZNO",  this.ds_search.getColumn(0, "BIZ_NO"));
        	this.ds_bzplc.set_rowposition(-1);
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "BZPLC_ID", this.ds_bzplc.getColumn(0, "BZPLC_ID"));
        	this.ds_search.setColumn(0, "BZPLC_NM", this.ds_bzplc.getColumn(0, "BZPLC_NM"));
        	this.ds_search.setColumn(0, "BIZ_NO", this.ds_bzplc.getColumn(0, "BIZNO"));
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
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_search_onclick = function(obj,e){
        	var coCd = this.ds_search.getColumn(0, "CO_CD");
        	if(this.gfn_isNull(coCd) || coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
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

        		resData.BZPLC_ID = this.ds_bzplc.getColumn(e.row, "BZPLC_ID");
        		resData.BZPLC_NM = this.ds_bzplc.getColumn(e.row, "BZPLC_NM");
        		resData.BIZNO = this.ds_bzplc.getColumn(e.row, "BIZNO");
        		resData.CO_CD = this.ds_bzplc.getColumn(e.row, "CO_CD");
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

        //선택 클릭 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	if(this.ds_bzplc.rowposition < 1){
        		alert("선택된 데이터가 없습니다.");
        		this.Div00.form.grd_list.setFocus();
        		return;
        	}

        	resData.BZPLC_ID = this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "BZPLC_ID");
        	resData.BZPLC_NM = this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "BZPLC_NM");
        	resData.BIZNO = this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "BIZNO");
        	resData.CO_CD = this.ds_bzplc.getColumn(this.ds_bzplc.rowposition, "CO_CD");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        //최대 조회수 KEYUP 이벤트
        this.Div00_edt_maxCnt_onkeyup = function(obj,e)
        {
        	var cntValue = this.gfn_removeComma(this.Div00.form.edt_maxCnt.value);

        	if(!this.gfn_isNull(cntValue)){
        		this.Div00.form.edt_maxCnt.set_value(this.gfn_appendComma(cntValue, 0));
        	}else{
        		this.Div00.form.edt_maxCnt.set_value("0");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Div00.form.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.Div00.form.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.Div00.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div00.form.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.Div00.form.edt_maxCnt.addEventHandler("onkeyup",this.Div00_edt_maxCnt_onkeyup,this);
        };
        this.loadIncludeScript("SSP_BO_PP_22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
