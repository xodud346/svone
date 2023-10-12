(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_56");
            this.set_titletext("귀속부서 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CCO_DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_subTitle01","20","64","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("■ 요청 정보");
            obj.set_cssclass("sta_WF_title01");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","94",null,"63","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","0","0",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_odrsnNo","0","0","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("주문자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00","0","31",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_odrsnNo00","0","31","100","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("변경 요청 사유");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_chgReqrRsn","110","36","440","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_mbrNm","100","0","80.36%","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("홍길동");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_subTitle02","20","177","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("■ 현 귀속 부서");
            obj.set_cssclass("sta_WF_title01");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","20","207",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"32","349",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("부서 ID");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00","210","0",null,"32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("부서 명");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07_01","0","30",null,"32","349",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","5","35","201","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","210","30",null,"32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm",null,"35","340","22","5",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta_subTitle03","20","291","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("■ 변경 귀속 부서");
            obj.set_cssclass("sta_WF_title01");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_list01","20",null,null,"190","20","60",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list01");
            obj.set_selecttype("row");
            obj.set_font("12px/normal \"맑은 고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"부서 ID\"/><Cell col=\"1\" text=\"부서 명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"286","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00",null,"286","60","28","188",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txtR");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_searchCount",null,"286","100","27","84",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm",null,null,"60","30","20","20",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20",null,"300","29",null,"20",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("총 124건이 검색되었습니다.");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("귀속부서 변경");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_56.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_56.xfdl", function() {
        // 귀속부서 팝업

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.totalCount = 0;
        this.fv_coCd = "";
        this.fv_mbrId = "";
        this.fv_mbrNm = "";
        this.fv_blngDeptId = "";
        this.fv_blngDeptNm = "";

        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_56_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.fn_initGrid();

        	this.fv_coCd = this.parent.pv1;
        	this.fv_mbrId = this.parent.pv2;
        	this.fv_mbrNm = this.parent.pv3;
        	this.fv_blngDeptId = this.parent.pv4;
        	this.fv_blngDeptNm = this.parent.pv5;

        	this.Div02.form.edt_deptId.set_value(this.fv_blngDeptId);
        	this.Div02.form.edt_deptNm.set_value(this.fv_blngDeptNm);

        	this.fn_searchMapSetting();
        	this.fn_search();

        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_56_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function() {
        	var sSvcId = "selectBlngDeptList";
        	var sUrl = "/od/odrPopup/selectBlngDeptList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "TOTAL_COUNT", -1);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "selectBlngDeptList"){
        		this.fn_initGrid();
        		// 조회조건 다시셋팅
        		this.fn_setSearchCondition();
        		this.sta_totcnt.set_text("(총 "+ this.gfn_appendComma(this.totalCount, 0) +"건)");
        		this.sta_totcnt.set_visible(true);
        	}
        };

        /***********************************************************************************************
        * POPUP CALLBACK 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        //그리드 첫번째 행 검색조건 설정
        this.fn_initGrid = function(){
        	this.ds_list01.insertRow(0);
        	this.ds_list01.setColumn(0, "DEPT_ID", "");
        	this.ds_list01.setColumn(0, "DEPT_NM", "");
        	this.ds_list01.set_rowposition(-1);
        	this.grid_list01.setFixedRow(0);
        };

        // 조회용 dataset 설정
        this.fn_searchMapSetting = function() {
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "MBR_ID", this.fv_mbrId);
        	this.ds_search.setColumn(0, "DEPT_ID", this.ds_list01.getColumn(0, "DEPT_ID"));
        	this.ds_search.setColumn(0, "DEPT_NM", this.ds_list01.getColumn(0, "DEPT_NM"));
        	this.ds_search.setColumn(0, "ROW_COUNT", this.msk_searchCount.text);
        };

        // 그리드 첫번째 행 조회조건 재설정
        this.fn_setSearchCondition = function() {
        	this.ds_list01.setColumn(0, "DEPT_ID", this.ds_search.getColumn(0, "DEPT_ID"));
        	this.ds_list01.setColumn(0, "DEPT_NM", this.ds_search.getColumn(0, "DEPT_NM"));
        };

        this.fn_closeForm = function(shouldReturn) {
        	if (shouldReturn) {
        		var resData = {};
        		var resString = "";
        		var row = this.ds_list01.rowposition;

        		resData.BLNG_DEPT_ID = this.ds_list01.getColumn(row, "DEPT_ID");
        		resData.BLNG_DEPT_NM = this.ds_list01.getColumn(row, "DEPT_NM");
        		resData.BLNG_DEPT_INFO = this.ds_list01.getColumn(row, "DEPT_ID") + "|" + this.ds_list01.getColumn(row, "DEPT_NM");
        		resData.REASON = this.Div00.form.edt_chgReqrRsn.text;
        		resString = JSON.stringify(resData);

        		this.close(resString);
        	}
        	else {
        		this.close(0);
        	}
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_esc");
        	this.fn_regMethodShiftENTER("btn_confirm_onclick");
        };

        this.fn_esc = function() {
        	this.close(0);
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 조회
        this.btn_search_onclick = function(obj,e)
        {
        	var deptId = this.ds_list01.getColumn(0, "DEPT_ID");
        	var deptNm = this.ds_list01.getColumn(0, "DEPT_NM");
        	var searchCount = this.msk_searchCount.text;

        	if (this.gfn_isNull(searchCount) || searchCount < 10) {
        		alert(this.fn_getMessage("ERRS000138","10"));
        		return;
        	}

        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        // 확인
        this.btn_confirm_onclick = function(obj,e)
        {
        	if (this.ds_list01.rowposition < 0) {
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}

        	this.fn_closeForm(true);
        };


        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/

        this.grid_list01_onenterdown = function(obj,e)
        {
        	if (e.row == 0) {
        		this.btn_search_onclick(null, null);
        	}
        };

        this.grid_list01_oncelldblclick = function(obj,e)
        {
        	this.fn_closeForm(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_56_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_56_onkeyup,this);
            this.Div00.form.sta_odrsnNo.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.sta_odrsnNo00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.sta_mbrNm.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.grid_list01.addEventHandler("oncelldblclick",this.grid_list01_oncelldblclick,this);
            this.grid_list01.addEventHandler("onenterdown",this.grid_list01_onenterdown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div00_sta_totcnt00_onclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_56.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
