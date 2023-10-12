(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BzplcMultiPopup");
            this.set_titletext("배지 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div","20","20","560",null,null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"40","60","28","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_rowCount",null,"40","100","28","btn_search:4",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_value("1000");
            obj.set_readonly("true");
            obj.set_text("1000");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00",null,"40","60","28","edt_rowCount:4",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txtR");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","155","21",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("배지 조회");
            obj.set_cssclass("sta_WF_title04");
            this.div.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","78",null,"373","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_autoenter("select");
            obj.set_scrollbartype("none fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"201\"/><Column size=\"174\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"배지ID\"/><Cell col=\"1\" text=\"배지명\"/></Band><Band id=\"body\"><Cell text=\"bind:BG_SEQ\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:BG_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_add",null,null,"60","30","250","0",null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","40","300","29",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_noData","30","170",null,"210","41",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.div.addChild(obj.name, obj);
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
        this.registerScript("SSP_BO_PA_51.xfdl", function() {
        /*******************************************************
        PROJECT NAME : MarketA
        CREATION DATES : 2021.01.19
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        	var bgSeq = this.parent.bgSeq;
        	var bgNm = this.parent.bgNm;
        	var coCd = this.parent.coCd;

        	if(this.gfn_isNull(coCd) || coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}else{
        		this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        	}

        	if(!this.gfn_isNull(bgSeq) || !this.gfn_isNull(bgNm)){
        		this.ds_search.setColumn(0, "BG_SEQ", bgSeq);
        		this.ds_search.setColumn(0, "BG_NM", bgNm);
        		this.fn_initGrid();
        		this.fn_search();
        	}else{
        		this.fn_initGrid();
        	}

        };

        this.fn_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){	//Ctrl+Enter : 선택기능
        		this.btn_add_onclick();
        	}else if(e.keycode == 27){	//ESC : 닫기기능
        		this.close();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit)
        {
            var sSvcId = "search";
            var sUrl = "/pr/prd-popup/select-bg-popup-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_listCopy=ds_list";
            var arg = "";

            this.ds_search.setColumn(0,"ROW_COUNT", this.div.form.edt_rowCount.value);

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "search" :
        			if(this.totalCount < 1){
        				this.div.form.sta_noData.bringToFront();
        			}else{
        				this.div.form.sta_noData.sendToBack();
        			}

                    this.ds_list.clearData();
        			this.fn_initGrid();
        			this.ds_list.appendData(this.ds_listCopy, true);
                    this.div.form.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건");
                    break;

            }
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_initGrid = function(){
        	this.ds_list.insertRow(0);
        	this.ds_list.setColumn(0, "BG_SEQ",  this.ds_search.getColumn(0, "BG_SEQ"));
        	this.ds_list.setColumn(0, "BG_NM",  this.ds_search.getColumn(0, "BG_NM"));
        	this.ds_list.set_rowposition(-1);
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "BG_SEQ", this.ds_list.getColumn(0, "BG_SEQ"));
        	this.ds_search.setColumn(0, "BG_NM", this.ds_list.getColumn(0, "BG_NM"));
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
        	var coCd = this.ds_search.getColumn(0, "CO_CD");
        	if(this.gfn_isNull(coCd) || coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}
        	this.fn_searchMapSetting();
            this.fn_search();
        };

        //검색조건 ROW에서 엔터
        this.grd_list_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0){
        		var resData = {};
        		var resString = "";
        		resData.BG_SEQ = this.ds_list.getColumn(this.ds_list.rowposition, "BG_SEQ");
        		resData.BG_NM = this.ds_list.getColumn(this.ds_list.rowposition, "BG_NM");
        		resString = JSON.stringify(resData);
        		this.close(resString);
        	}
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


        this.btn_add_onclick = function(obj,e)
        {
        	if(this.ds_list.rowposition < 1){
        		alert("선택된 데이터가 없습니다.");
        		return;
        	}

        	var resData = {};
        	var resString = "";
        	resData.BG_SEQ = this.ds_list.getColumn(this.ds_list.rowposition, "BG_SEQ");
        	resData.BG_NM = this.ds_list.getColumn(this.ds_list.rowposition, "BG_NM");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div.form.sta_totcnt00.addEventHandler("onclick",this.Div00_sta_totcnt00_onclick,this);
            this.div.form.Static01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
            this.div.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.div.form.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.div.form.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.div.form.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.div.form.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_51.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
