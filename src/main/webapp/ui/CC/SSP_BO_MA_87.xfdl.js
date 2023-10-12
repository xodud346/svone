(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_87");
            this.set_titletext("일반 예산 이월");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_REG_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"TO_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qrtBgtUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"QRT_BGT_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_CLOS_DD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_FW_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromMonth", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toMonth", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"26\"/><Column id=\"BGT_YY\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_YY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_YYMM\" type=\"STRING\" size=\"16\"/><Column id=\"BGT_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"TRANS_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_ADD_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"BGT_DEC_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"TOT_ODR_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"CHG_BGT_AMT_10\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"CHG_BGT_AMT_20\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"CHG_BGT_AMT_30\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"CHG_BGT_AMT_40\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"ODR_AVIL_AMT\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"BGT_AMT_TO\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"ORG_BGT_AMT_TO\" type=\"BIGDECIMAL\" size=\"32\"/><Column id=\"CHG_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_APLY_PERD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_APLY_PERD_CD_TO\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_REG_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("title01","0",null,"130","20",null,"121",null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("sta_WF_title01");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","80","34",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","389","34","108","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","797","34","108","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplc","354","38","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtBzplcNm","220","38","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtOprUnitNm","608","38","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03_00","80","64",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22_00_00","389","64","108","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("예산년월(From)");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","1018","38","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_deptMemo","1174","38","30","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"Static03_00:8","60","28","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"104","70","28","btn_search:5",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_dept","1153","38","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtBzplcId","115","38","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtOprUnitId","504","38","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtDeptId","914","38","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0","34","108","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","64","108","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("예산마감일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprUnit","743","38","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_00","797","64","108","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("예산년월(To)");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_fromYear","504","68","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_innerdataset("ds_fromYear");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("계정/부서");
            obj.set_value("1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_fromMonth","608","68","70","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_innerdataset("ds_fromMonth");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("계정/부서");
            obj.set_value("1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_toYear","914","68","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_enable("false");
            obj.set_innerdataset("ds_toYear");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("계정/부서");
            obj.set_value("1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_toMonth","1018","68","70","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_innerdataset("ds_toMonth");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("계정/부서");
            obj.set_value("1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_bgtClosDdCd","120","68","50","27",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","190",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"180\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"부서ID\"/><Cell col=\"1\" text=\"부서계정\"/><Cell col=\"2\" text=\"계정ID\"/><Cell col=\"3\" text=\"계정명\"/><Cell col=\"4\" text=\"계정코드\"/><Cell col=\"5\" text=\"계정레벨\"/><Cell col=\"6\" text=\"상위계정ID\"/><Cell col=\"7\" text=\"상위계정명\"/><Cell col=\"8\" text=\"상위계정코드\"/><Cell col=\"9\" text=\"이월가능금액\"/><Cell col=\"10\" text=\"이월금액\"/><Cell col=\"11\" text=\"이월후 합산금액\"/><Cell col=\"12\" text=\"사유\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_ID\"/><Cell col=\"1\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" text=\"bind:ACCT_ID\" textAlign=\"center\" suppress=\"0\"/><Cell col=\"3\" text=\"bind:ACCT_NM\" suppress=\"0\"/><Cell col=\"4\" text=\"bind:ACCT_CD\" textAlign=\"center\" suppress=\"0\"/><Cell col=\"5\" text=\"bind:ACCT_LVL\" suppress=\"0\"/><Cell col=\"6\" textAlign=\"center\" text=\"bind:HRNK_ACCT_ID\"/><Cell col=\"7\" text=\"bind:HRNK_ACCT_NM\"/><Cell col=\"8\" text=\"bind:HRNK_ACCT_CD\"/><Cell col=\"9\" text=\"bind:ODR_AVIL_AMT\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:TRANS_AMT\" displaytype=\"maskeditcontrol\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"##,##0\"/><Cell col=\"11\" text=\"bind:BGT_AMT_TO\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:CHG_RSN\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"157","110","28","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"157","100","28","btn_layoutClear:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"157","60","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdReset",null,"157","70","28","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.addChild(obj.name, obj);

            obj = new Static("title01","0",null,"130","20",null,"grd_list:5",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이월정보");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,680,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item15","div_deliver.form.cbo_bgtYyStrMm00","value","ds_dtl","DLV_HP_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.edtBzplcNm","value","ds_search","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edtOprUnitNm","value","ds_search","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edtDeptNm","value","ds_search","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edtBzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edtOprUnitId","value","ds_search","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.edtDeptId","value","ds_search","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cbo_fromYear","value","ds_search","FROM_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cbo_fromMonth","value","ds_search","FROM_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.cbo_toYear","value","ds_search","TO_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cbo_toMonth","value","ds_search","TO_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_87.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_87.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_87.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          CREATION DATES :
        *******************************************************/

        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fv_sessionData = this.getSession(); //session object
        this.today = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//검색 영역 최소size 적용
        	this.div_search.set_height(this.div_search.uMinSize);
        	this.resetScroll();

        	this.copyPaste.addGrid(this.grd_list);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_searchQrtBgtUseYn = function (bInit){
        	var sSvcId = "searchQrtBgtUseYn";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_84/selectQrtBgtUseYn.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_qrtBgtUseYn=ds_qrtBgtUseYn";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function()	{
        	oSortInfo = this.grd_list.uaSortInfo;
        	if(oSortInfo != null){
        		if("CHG_RSN" != oSortInfo.bindCol){
        			this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		}
        	}

        	var sSvcId = "selectList";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_87/select-bgt-trans-month-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_list";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function()	{
        	var sSvcId = "save";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_87/save-bgt-trans-month.do";
        	var inDs = "ds_list=ds_list:U";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode == -1) {
        		alert(this.fn_getMessage("ERRC000058")); //오류가 발생했습니다.
        	}
        	else {
        		if(svcID == "selectList"){

        		}
        		else if(svcID == "searchQrtBgtUseYn") {
        			var closDdNm = this.ds_qrtBgtUseYn.getColumn(0,"BGT_CLOS_DD_CD")=="99" ? "말일" : this.ds_qrtBgtUseYn.getColumn(0,"BGT_CLOS_DD_CD") + "일";
        			this.div_search.form.sta_bgtClosDdCd.set_text(closDdNm);
        			this.setPeriodCombo();

        			if(this.ds_qrtBgtUseYn.getColumn(0,"BGT_FW_SPR_CD") == "02") { //예산이월구분코드 (01:자동이월,02:수동이월,03:이월사용안함)
        				this.div_search.form.btn_search.set_enable(true);
        				this.btn_save.set_enable(true);
        			}
        			else {
        				this.div_search.form.btn_search.set_enable(false);
        				this.btn_save.set_enable(false);
        				alert(this.fn_getMessage("ERRC000124", "운영단위"));	//수동이월 처리 대상 &1 이(가) 아닙니다
        			}
        		}
        		else if(svcID == "save") {
        			alert(this.fn_getMessage("ERRC000081")); //저장되었습니다.
        			this.btn_search_onclick();
        		}
        	}
        };

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_list"){
        		this.btn_search_onclick();
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//search static 필수표시 설정
        	this.div_search.form.Static02.uEssentiel = "true";
        	this.div_search.form.Static05.uEssentiel = "true";

        	//search div 초기 설정
        	this.div_search.uMinSize = this.div_search.height;
        	this.div_search.uMaxSize = 157;

        	//grid 초기 설정
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";
        	this.grd_list.uCellSizeType = "true";

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_list";
        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        	this.grd_list.uDefaultFormat = "DEPT_ID,DEPT_NM,ACCT_ID,ACCT_NM,ACCT_CD,ACCT_LVL,HRNK_ACCT_ID,HRNK_ACCT_NM,HRNK_ACCT_CD,ODR_AVIL_AMT,TRANS_AMT,BGT_AMT_TO,CHG_RSN";

        	this.today = this.gfn_getDate();
        	this.fn_resetSearch();
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.cfn_personalPopupClose = function(sRet){
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        this.fn_resetSearch = function() {
        	for(i=0; i<this.ds_search.colcount; i++) {
        		this.ds_search.setColumn(0, i, "");
        	}
        	for(i=0; i<this.ds_qrtBgtUseYn.colcount; i++) {
        		this.ds_qrtBgtUseYn.setColumn(0, i, "");
        	}
        	this.div_search.form.sta_bgtClosDdCd.set_text("");

        	this.ds_search.setColumn(0,"CO_CD", this.fv_sessionData.coCd);
        	this.ds_search.setColumn(0,"BGT_REG_SPR_CD", "20"); //예산등록구분코드(10:계정별, 20:부서별)
        	this.ds_search.setColumn(0,"ACCT_TP_CD", "1"); //계정유형코드(1:일반, 2:공통)

        	this.setPeriodCombo();
        }

        this.setPeriodCombo = function() {
        	var qrtBgtUseYn = this.ds_qrtBgtUseYn.getColumn(0,"QRT_BGT_USE_YN"); //분기예산사용여부

        	this.ds_fromYear.clearData();
        	this.ds_toYear.clearData();
        	this.ds_fromMonth.clearData();
        	this.ds_toMonth.clearData();

        	var curMonth = this.today.substr(4,2);
        	var nextDay = this.gfn_addMonth(this.today, 1);
        	var curYear = this.gfn_left(this.today,4);
        	var nextYear = this.gfn_left(nextDay,4);
        	this.ds_fromYear.addRow();
        	this.ds_fromYear.setColumn(0,"CD", curYear);
        	this.ds_fromYear.setColumn(0,"NM", curYear + "년");
        	this.ds_toYear.addRow();
        	this.ds_toYear.setColumn(0,"CD", nextYear)
        	this.ds_toYear.setColumn(0,"NM", nextYear + "년")

        	this.div_search.form.cbo_fromYear.set_value(curYear);
        	this.div_search.form.cbo_toYear.set_value(nextYear);

        	if(qrtBgtUseYn != "Y") { //월별
        		for(var i=1; i<=12; i++) {
        			var nRow = this.ds_fromMonth.addRow();
        			this.ds_fromMonth.setColumn(nRow, "CD", i.toString().padLeft(2, '0'));
        			this.ds_fromMonth.setColumn(nRow, "NM", i + "월");
        			nRow = this.ds_toMonth.addRow();
        			this.ds_toMonth.setColumn(nRow, "CD", i.toString().padLeft(2, '0'));
        			this.ds_toMonth.setColumn(nRow, "NM", i + "월");
        		}

        		this.div_search.form.cbo_fromMonth.set_value(curMonth);
        		this.div_search.form.cbo_toMonth.set_value(nextDay.substr(4,2));
        		this.ds_search.setColumn(0,"BGT_PERD_SPR_CD","1"); //예산기간구분코드(1:월, 2:분기)
        	}
        	else { //분기별
        		for(var i=1; i<=4; i++) {
        			var nRow = this.ds_fromMonth.addRow();
        			this.ds_fromMonth.setColumn(nRow, "CD", (20+i).toString());
        			this.ds_fromMonth.setColumn(nRow, "NM", i + "분기");
        			nRow = this.ds_toMonth.addRow();
        			this.ds_toMonth.setColumn(nRow, "CD", (20+i).toString());
        			this.ds_toMonth.setColumn(nRow, "NM", i + "분기");
        		}

        		if(curMonth >= 1 && curMonth <= 3) { //1분기
        			this.div_search.form.cbo_fromMonth.set_value("21");
        			this.div_search.form.cbo_toMonth.set_value("22");
        		} else if(curMonth >= 4 && curMonth <= 6) { //2분기
        			this.div_search.form.cbo_fromMonth.set_value("22");
        			this.div_search.form.cbo_toMonth.set_value("23");
        		} else if(curMonth >= 7 && curMonth <= 9) { //3분기
        			this.div_search.form.cbo_fromMonth.set_value("23");
        			this.div_search.form.cbo_toMonth.set_value("24");
        		} else if(curMonth >= 10 && curMonth <= 12) { //4분기
        			this.div_search.form.cbo_fromMonth.set_value("24");
        			this.div_search.form.cbo_toMonth.set_value("21");
        		}

        		this.ds_search.setColumn(0,"BGT_PERD_SPR_CD","2"); //예산기간구분코드(1:월, 2:분기)
        	}

        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 버튼 click  이벤트
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	if(this.gfn_isNull(this.ds_search.getColumn(0,"BZPLC_ID"))) {
        		alert(this.fn_getMessage("ERRC000004", "사업장")); //&1 은(는) 필수 입력값입니다.
        		return;
        	}
        	if(this.gfn_isNull(this.ds_search.getColumn(0,"OPR_UNIT_ID"))) {
        		alert(this.fn_getMessage("ERRC000004", "운영단위")); //&1 은(는) 필수 입력값입니다.
        		return;
        	}
        	if(this.ds_search.getColumn(0,"FROM_YEAR")+this.ds_search.getColumn(0,"FROM_MONTH") >= this.ds_search.getColumn(0,"TO_YEAR")+this.ds_search.getColumn(0,"TO_MONTH")) {
        		alert("이월받을 예산년월이 과거이거나 같을 수 없습니다.");
        		return;
        	}

        	this.fn_search();
        };

        this.btn_reset_onclick = function(obj,e)
        {
        	this.fn_resetSearch();
        };


        this.btn_bzplc_onclick = function(obj,e)
        {
        	var params = {coCd : this.ds_search.getColumn(0,"CO_CD")};

        	this.gfn_openPopup('bizPop', "CO_POP::SSP_BO_PP_22.xfdl", params, function(sPopupId, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		this.ds_search.setColumn(0,"BZPLC_ID",retObj.BZPLC_ID);
        		this.ds_search.setColumn(0,"BZPLC_NM",retObj.BZPLC_NM);
        	}, {titlebar:"true"});
        };

        this.btn_oprUnit_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var params = { coCd : this.ds_search.getColumn(0,"CO_CD")
        				   , bzplcId : this.ds_search.getColumn(0,"BZPLC_ID") };

        	this.gfn_openPopup('oprUnitPop', "CO_POP::SSP_BO_PP_15.xfdl", params, function(sPopupId, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		this.ds_search.setColumn(0,"OPR_UNIT_ID",retObj.OPR_UNIT_ID);
        		this.ds_search.setColumn(0,"OPR_UNIT_NM",retObj.OPR_UNIT_NM);

        		this.fn_searchQrtBgtUseYn(); //운영단위 제어권한 분기예산사용여부 조회

        	}, {titlebar:"true"});
        };

        this.btn_dept_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var params = { coCd : this.ds_search.getColumn(0,"CO_CD")
        				   , bzplcId : this.ds_search.getColumn(0,"BZPLC_ID")
        				   , oprUnitId : this.ds_search.getColumn(0,"OPR_UNIT_ID") };

        	this.gfn_openPopup('deptPop', "CC::SSP_BO_PP_37.xfdl", params, function(sPopupId, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		var id = "";
        		var nm = "";
        		for(i=0; i<retObj.length; i++) {
        			var row = JSON.parse(retObj[i]);
        			id += row.DEPT_ID + ",";
        			nm += row.DEPT_NM + ",";
        		}

        		this.ds_search.setColumn(0,"DEPT_ID",id.replace(/,\s*$/, ""));
        		this.ds_search.setColumn(0,"DEPT_NM",nm.replace(/,\s*$/, ""));
        	}, {titlebar:"true"});
        };

        this.btn_deptMemo_onclick = function(obj,e)
        {
        	var params = { textId : this.div_search.form.edtDeptId };

        	this.gfn_openPopup('deptPop', "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		this.ds_search.setColumn(0,"DEPT_ID",retObj.textValue.replace(/,\s*$/, ""));
        		this.ds_search.setColumn(0,"DEPT_NM",retObj.textValue.replace(/,\s*$/, ""));
        	}, {title:"멀티 텍스트 팝업"});
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if(!this.gfn_dsIsUpdated(this.ds_list)) {
        		alert(this.fn_getMessage("ERRC000039")); //변경된 행이 없습니다.
        		return;
        	}
        	for(i=0; i<this.ds_list.getRowCount(); i++) {
        		if (this.gfn_isUpdatedRow(this.ds_list, i) == true) {
        			if(this.gfn_isNull(this.ds_list.getColumn(i, "TRANS_AMT"))) {
        				alert(this.fn_getMessage("ERRC000009", "이월금액")); //을 입력하세요.
        				return;
        			}

        			if(this.gfn_isNull(this.ds_list.getColumn(i, "CHG_RSN"))) {
        				alert(this.fn_getMessage("ERRC000009", "이월사유")); //을 입력하세요.
        				return;
        			}
        		}
        	}


        	var closDdNm = this.ds_qrtBgtUseYn.getColumn(0,"BGT_CLOS_DD_CD")=="99" ? "말일" : this.ds_qrtBgtUseYn.getColumn(0,"BGT_CLOS_DD_CD") + "일";
        	if(this.today.substr(6,2) < this.ds_qrtBgtUseYn.getColumn(0,"BGT_CLOS_DD_CD")) {
        		if(confirm(this.fn_getMessage("ERRC000057", closDdNm))) { //예산마감일은 &1 입니다. 이월 처리하시겠습니까?
        			this.fn_save();
        		}
        	}
        	else {
        		if(confirm(this.fn_getMessage("ERRC000067"))) { //이월처리하시겠습니까?
        			this.fn_save();
        		}
        	}

        };


        this.grd_list_onkeyup = function(obj,e)
        {
        	var curCol = obj.currentcol;
        	var columnId = this.getBindColumnIDByIndex(obj, curCol); // 클릭한 그리드 칼럼의 ID
        	if("TRANS_AMT" == columnId){
        		var curRow = obj.currentrow;
        		var curValue = obj.getEditValue();

        		if(Number(this.ds_list.getColumn(curRow,"ODR_AVIL_AMT")) < Number(obj.getEditValue())) {
        			alert(this.fn_getMessage("ERRC000013")); //가능 금액을 초과하였습니다. 다시 입력 해 주세요.
        			obj.setEditValue(0);
        		}

        		var sum = Number(obj.getEditValue()) + Number(this.gfn_nvl(this.ds_list.getColumn(curRow,"ORG_BGT_AMT_TO"),0));
        		this.ds_list.setColumn(curRow,"BGT_AMT_TO", sum);
        	}
        };

        this.btn_grdReset_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRC000075"))) { //입력된 값을 초기화 하시겠습니까?
        		//그리드 초기화시 재조회
        		this.btn_search_onclick();
        	}
        };

        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        // 레이아웃 초기화
        this.btn_layoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalSave("grd_list", this.grd_list.uOrgFormat);
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };
        this.SSP_BO_MA_87_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){
        		this.btn_search_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_87_onkeyup,this);
            this.div_search.form.title01.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_search.form.btn_bzplc.addEventHandler("onclick",this.btn_bzplc_onclick,this);
            this.div_search.form.btn_deptMemo.addEventHandler("onclick",this.btn_deptMemo_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.div_search.form.btn_dept.addEventHandler("onclick",this.btn_dept_onclick,this);
            this.div_search.form.btn_oprUnit.addEventHandler("onclick",this.btn_oprUnit_onclick,this);
            this.grd_list.addEventHandler("onkeyup",this.grd_list_onkeyup,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_grdReset.addEventHandler("onclick",this.btn_grdReset_onclick,this);
            this.title01.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_87.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
