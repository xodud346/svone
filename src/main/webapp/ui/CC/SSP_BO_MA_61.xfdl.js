(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form1");
            this.set_titletext("예산 부서/계정설정 탭");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CCO_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","25",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","432","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04_00","862","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzplc","393","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprUnit","809","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_dept","1243","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","134","4","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitId","567","4","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","998","4","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","235","4","154","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitNm","666","4","137","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","1098","4","137","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitTxt","834","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_deptTxt","1267","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"62","60","30","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"62","60","30","btn_search:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCount","0","131","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","160",null,null,"0","60",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사업장ID\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"운영단위ID\"/><Cell col=\"3\" text=\"운영단위명\"/><Cell col=\"4\" text=\"부서ID\"/><Cell col=\"5\" text=\"부서명\"/><Cell col=\"6\" text=\"부서코드\"/></Band><Band id=\"body\"><Cell text=\"bind:BZPLC_ID\" textAlign=\"center\" suppress=\"0\"/><Cell col=\"1\" text=\"bind:BZPLC_NM\" suppress=\"0\"/><Cell col=\"2\" text=\"bind:OPR_UNIT_ID\" textAlign=\"center\" suppress=\"0\"/><Cell col=\"3\" text=\"bind:OPR_UNIT_NM\" suppress=\"0\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:DEPT_ID\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"5\" text=\"bind:DEPT_NM\"/><Cell col=\"6\" text=\"bind:CCO_DEPT_CD\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"38","20","9",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_pageViewCnt",null,"121","90","30","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var cbo_pageViewCnt_innerdataset = new nexacro.NormalDataset("cbo_pageViewCnt_innerdataset", obj);
            cbo_pageViewCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pageViewCnt_innerdataset);
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"121","110","30","cbo_pageViewCnt:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀 다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"121","86","30","286",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장(미사용)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_batchReg",null,"121","70","30","btn_excel:4",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,680,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_bzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_oprUnitId","value","ds_search","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_deptId","value","ds_search","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_bzplcNm","value","ds_search","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_oprUnitNm","value","ds_search","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_deptNm","value","ds_search","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_61.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_61.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_61.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 부서/계정 설정
          CREATION DATES : 20220506
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fv_sessionData = this.getSession(); //session object
        this.fv_totalCount = 0;
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
        //조회
        this.fn_search = function()	{
        	oSortInfo = this.grd_list.uaSortInfo;
        	if(oSortInfo != null){
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        	}

        	var sSvcId = "selectList";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_61/selectBgtDeptMappList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_list";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function()	{
        	var sSvcId = "save";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_61/updateBgtMappDept.do";
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
        		alert(this.fn_getMessage("ERRC000058"));
        	}
        	else {
        		if(svcID == "selectList"){
        			if(this.ds_list.getRowCount() > 0) {
        				this.fv_totalCount = this.ds_list.getColumn(0,"TOT_CUNT");
        				this.div_paging.form.cfn_createPage(this.div_paging,this.fv_totalCount,this.cbo_pageViewCnt.value,"fn_pageCallback");
        			}
        		}
        		else if(svcID == "save") {
        			alert(this.fn_getMessage("ERRC000081"));
        			this.btn_search_onclick();
        		}
        	}
        };

        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;
        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_pageViewCnt.value);
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.sta_totCount.set_text(sTotText);
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

        	//search div 초기 설정
        	this.div_search.uMinSize = this.div_search.height;
        	this.div_search.uMaxSize = 157;

        	//grid 초기 설정
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";
        	this.grd_list.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	this.ds_search.setColumn(0,"CO_CD",this.fv_sessionData.coCd);
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 버튼 click  이벤트
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	if(this.gfn_isNull(this.ds_search.getColumn(0,"BZPLC_ID"))) {
        		alert(this.fn_getMessage("ERRC000009", "사업장"));
        		return;
        	}

        	var oPaging = this.div_paging;
        	oPaging.uPageNum = 0;
        	this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        	this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_pageViewCnt.value);

        	this.fn_search();
        };


        this.btn_excel_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.grd_list, fileName:"예산부서목록"});
        };


        this.btn_reset_onclick = function(obj,e)
        {
        	for(i=0; i<this.ds_search.colcount; i++) {
        		this.ds_search.setColumn(0, i, "");
        	}
        };


        this.btn_bzplc_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var params = { coCd : this.fv_sessionData.coCd };

        	this.gfn_openPopup('bizPop', "CO_POP::SSP_BO_PP_22.xfdl", params, function(sPopupId, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		this.ds_search.setColumn(0,"BZPLC_ID",retObj.BZPLC_ID);
        		this.ds_search.setColumn(0,"BZPLC_NM",retObj.BZPLC_NM);
        	}, {titlebar:"true"});
        };

        this.btn_oprUnit_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var params = {
        			coCd : this.fv_sessionData.coCd
        			,bzplcId : this.ds_search.getColumn(0,"BZPLC_ID")
        		};

        	this.gfn_openPopup('oprUnitPop', "CO_POP::SSP_BO_PP_23.xfdl", params, function(sPopupId, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		var id = "";
        		var nm = "";
        		for(i=0; i<retObj.length; i++) {
        			var row = JSON.parse(retObj[i]);
        			id += row.OPR_UNIT_ID + ",";
        			nm += row.OPR_UNIT_NM + ",";
        		}

        		this.ds_search.setColumn(0,"OPR_UNIT_ID",id.replace(/,\s*$/, ""));
        		this.ds_search.setColumn(0,"OPR_UNIT_NM",nm.replace(/,\s*$/, ""));
        	}, {titlebar:"true"});
        };

        this.btn_dept_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var params = {
        		coCd : this.fv_sessionData.coCd
        		,bzplcId : this.ds_search.getColumn(0,"BZPLC_ID")
        		,oprUnitId : this.ds_search.getColumn(0,"OPR_UNIT_ID")
        	};

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

        this.btn_oprUnitTxt_onclick = function(obj,e)
        {
        	var params = { textId : this.div_search.form.edt_oprUnitId };

        	this.gfn_openPopup('oprUnitPop', "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		this.ds_search.setColumn(0,"OPR_UNIT_ID",retObj.textValue.replace(/,\s*$/, ""));
        		this.ds_search.setColumn(0,"OPR_UNIT_NM",retObj.textValue.replace(/,\s*$/, ""));
        	}, {title:"멀티 텍스트 팝업"});
        };

        this.btn_deptTxt_onclick = function(obj,e)
        {
        	var params = { textId : this.div_search.form.edt_deptId };

        	this.gfn_openPopup('oprUnitPop', "CO_POP::SSP_BO_PP_13.xfdl", params,  function(objID, sRetValue) {
        		var retObj = JSON.parse(sRetValue);
        		this.ds_search.setColumn(0,"DEPT_ID",retObj.textValue.replace(/,\s*$/, ""));
        		this.ds_search.setColumn(0,"DEPT_NM",retObj.textValue.replace(/,\s*$/, ""));
        	}, {title:"멀티 텍스트 팝업"});
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	obj.showEditor(true); //한번 클릭시 그리드텍사스박스에 포커스 줌

        	if(this.gfn_getBindColumnNameByIndex(obj, e.col) == "DEPT_ID") {
        		var params = {CO_CD : this.ds_list.getColumn(e.row,"CO_CD")
        			, BZPLC_ID : this.ds_list.getColumn(e.row,"BZPLC_ID")
        			, OPR_UNIT_ID : this.ds_list.getColumn(e.row,"OPR_UNIT_ID")
        			, DEPT_ID : this.ds_list.getColumn(e.row,"DEPT_ID")
        			, DEPT_NM : this.ds_list.getColumn(e.row,"DEPT_NM")
        		};

        		this.gfn_openPopup('bgtSettingPop', "CC::SSP_BO_MA_84.xfdl", params,  function(objID, sRetValue) {
        		}, {titlebar:"true", title:"예산설정팝업"});
        	}
        };

        this.btn_batchReg_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_XL_CC_16"};
        	var options = {};
        	options.title = "예산 일괄등록";
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param, function() {

        	}, options);
        };

        this.btn_save_onclick = function(obj,e)
        {
        	// # SSP-812 수정 : 부서코드 수정 불가능하게 변경 및 저장버튼 제거(숨김처리)
        	if(!this.gfn_dsIsUpdated(this.ds_list)) {
        		alert(this.fn_getMessage("ERRC000039"));
        		return;
        	}

        	if(confirm(this.fn_getMessage("ERRC000080"))) {
        		this.fn_save();
        	}
        };

        this.cbo_pageViewCnt_onitemchanged = function(obj,e)
        {
        	this.btn_search_onclick();
        };

        this.form1_onkeyup = function(obj,e)
        {
        	if(e.ctrlkey && e.keycode==13) {
        		this.btn_search_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.form1_onkeyup,this);
            this.div_search.form.btn_bzplc.addEventHandler("onclick",this.btn_bzplc_onclick,this);
            this.div_search.form.btn_oprUnit.addEventHandler("onclick",this.btn_oprUnit_onclick,this);
            this.div_search.form.btn_dept.addEventHandler("onclick",this.btn_dept_onclick,this);
            this.div_search.form.btn_oprUnitTxt.addEventHandler("onclick",this.btn_oprUnitTxt_onclick,this);
            this.div_search.form.btn_deptTxt.addEventHandler("onclick",this.btn_deptTxt_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.cbo_pageViewCnt.addEventHandler("onitemchanged",this.cbo_pageViewCnt_onitemchanged,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_batchReg.addEventHandler("onclick",this.btn_batchReg_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_61.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
