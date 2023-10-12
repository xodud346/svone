(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_27");
            this.set_titletext("담당자 단일 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(690,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_oprtr", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WPTAL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WPTAL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprtrCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WPTAL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20","650",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"41","60","28","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("| 구매 담당자 조회");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","51","170","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","79",null,"489","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_oprtr");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_autoenter("select");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"93\"/><Column size=\"124\"/><Column size=\"92\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"담당자명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"W/P ID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow == 0 ? &quot;theme::default/images/grd_WF_search.png&quot; : &quot;&quot;\" displaytype=\"expr:currow == 0 ? &quot;imagecontrol&quot; : &quot;normal&quot;\"/><Cell col=\"1\" text=\"bind:EMP_NO\" textAlign=\"center\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"2\" text=\"bind:OPRTR_NM\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"3\" text=\"bind:ORG_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"4\" text=\"bind:WPTAL_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","293","578","65","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","155",null,"354","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",690,650,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_KA_04.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 재고 관리 - 구매 담당자 조회 팝업
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.empNo = "";
        this.oprtrNm = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        	this.empNo = this.parent.empNo;
        	this.oprtrNm = this.parent.oprtrNm;
        	this.ds_oprtrCopy.copyData(this.ds_oprtr);

        	if (!this.gfn_isNull(this.empNo) || !this.gfn_isNull(this.oprtrNm)) {
        		this.ds_search.setColumn(0, "EMP_NO", this.empNo);
        		this.ds_search.setColumn(0, "OPRTR_NM", this.oprtrNm);
        		this.fn_search();
        	}
        	else {
        		this.fn_initGrid();
        	}

        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_PP_27_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function()
        {
        	var sSvcId = "search";
        	var sUrl = "/iv/popup/select-operator-popup-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_oprtr=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "search"){
        		if(this.totalCount < 1){
        			this.ds_oprtr.copyData(this.ds_oprtrCopy);
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
        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "EMP_NO", this.ds_oprtr.getColumn(0, "EMP_NO"));
        	this.ds_search.setColumn(0, "OPRTR_NM", this.ds_oprtr.getColumn(0, "OPRTR_NM"));
        	//this.ds_search.setColumn(0, "ORG_CD", this.ds_oprtr.getColumn(0, "ORG_CD"));
        	this.ds_search.setColumn(0, "ORG_NM", this.ds_oprtr.getColumn(0, "ORG_NM"));
        	//this.ds_search.setColumn(0, "SALS_TEAM_CD", this.ds_oprtr.getColumn(0, "SALS_TEAM_CD"));
        	//this.ds_search.setColumn(0, "SALS_TEAM_NM", this.ds_oprtr.getColumn(0, "SALS_TEAM_NM"));
        	this.ds_search.setColumn(0, "WPTAL_ID", this.ds_oprtr.getColumn(0, "WPTAL_ID"));
        };

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_oprtr.insertRow(0);
        	this.ds_oprtr.setColumn(0, "EMP_NO",  this.ds_search.getColumn(0, "EMP_NO"));
        	this.ds_oprtr.setColumn(0, "OPRTR_NM",  this.ds_search.getColumn(0, "OPRTR_NM"));
        	//this.ds_oprtr.setColumn(0, "ORG_CD",  this.ds_search.getColumn(0, "ORG_CD"));
        	this.ds_oprtr.setColumn(0, "ORG_NM",  this.ds_search.getColumn(0, "ORG_NM"));
        	//this.ds_oprtr.setColumn(0, "SALS_TEAM_CD",  this.ds_search.getColumn(0, "SALS_TEAM_CD"));
        	//this.ds_oprtr.setColumn(0, "SALS_TEAM_NM",  this.ds_search.getColumn(0, "SALS_TEAM_NM"));
        	this.ds_oprtr.setColumn(0, "WPTAL_ID",  this.ds_search.getColumn(0, "WPTAL_ID"));
        	this.ds_oprtr.set_rowposition(-1);
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        	this.fn_regMethodShiftENTER("btn_select_onclick");
        };

        this.fn_closeForm = function() {
        	this.close(0);
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0 ){
        		var resData = {};
        		var resString = "";

        		resData.EMP_NO = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "EMP_NO");
        		resData.OPRTR_NM = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "OPRTR_NM");
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

        	if (this.ds_oprtr.rowposition < 1) {
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}

        	resData.EMP_NO = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "EMP_NO");
        	resData.OPRTR_NM = this.ds_oprtr.getColumn(this.ds_oprtr.rowposition, "OPRTR_NM");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_PP_27_onkeyup,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.Div00.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div00.form.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.Div00.form.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.Div00.form.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_KA_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
