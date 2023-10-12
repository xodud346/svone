(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_05");
            this.set_titletext("주문일괄등록이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_PGM_IDT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM_START\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM_END\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_IDS\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_PGM_IDT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_NRML_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_ERR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_STOR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cdList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SUPPER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"130","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","82",null,"48","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_SearchArea");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","60","28","20",null,null,null,null,null,this.Div00.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div01","20","20",null,"63","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_background("transparent");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","430","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("변경항목 <fc v=\'red\'>*</fc>");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","430","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("일괄등록 일자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnId","140","35","110","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("112");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","0","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnIdNm","253","35","139","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_text("safdsa");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_regpsnIdPopup","edt_regpsnIdNm:4","35","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","0","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_regStart","570","4","130","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_fromTo","cal_regStart:4","4","9","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("~");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_regEnd","sta_fromTo:4","4","130","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_chgItm","140","4","281","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_cdList");
            obj.set_codecolumn("CHG_ITM_GRP_CD");
            obj.set_datacolumn("CHG_ITM_GRP_NM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","420","33","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnIdMulti","140","35","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_text("112");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_regpsnIdMultiPopup","372","35","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_regpsnIdInput","400","35","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"83","30","10","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grid_list01","20","Div00:50",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list01");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"변경항목 그룹코드\"/><Cell col=\"2\" text=\"업로드 건수\"/><Cell col=\"3\" text=\"정상건수\"/><Cell col=\"4\" text=\"오류건수\"/><Cell col=\"5\" text=\"저장여부\"/><Cell col=\"6\" text=\"등록자\"/><Cell col=\"7\" text=\"등록일시\"/></Band><Band id=\"body\"><Cell text=\"bind:CHG_ITM_GRP_CD\"/><Cell col=\"1\" text=\"bind:CHG_ITM_GRP_NM\"/><Cell col=\"2\" displaytype=\"number\" textAlign=\"right\" text=\"bind:UPLD_CNT\"/><Cell col=\"3\" displaytype=\"number\" textAlign=\"right\" text=\"bind:UPLD_NRML_CNT\"/><Cell col=\"4\" displaytype=\"number\" textAlign=\"right\" text=\"bind:UPLD_ERR_CNT\"/><Cell col=\"5\" text=\"bind:UPLD_STOR_YN\"/><Cell col=\"6\" text=\"bind:OPRTR_NM\"/><Cell col=\"7\" text=\"bind:REG_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltext=\" \" calendardisplayinvalidtext=\" \" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","160","240","14",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","41.65%",null,"70","30",null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"Div00:10","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm","btn_cancel:10",null,"70","30",null,"20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_05.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_05.xfdl", function() {
        // 주문일괄변경 검색팝업

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object

        this.isSupper = false;
        this.chgItmGrpCd = "";
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_05_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.copyPaste.addGrid(this.grid_list01, this, false);
        	this.Div00.form.Div01.form.edt_regpsnId.set_value(this.parent.pv2);
        	this.Div00.form.Div01.form.edt_regpsnIdNm.set_value(this.parent.pv3);
        	this.chgItmGrpCd = this.parent.pv4;

        	this.Div00.form.Div01.form.cal_regStart.set_value(this.parent.pv5);
        	this.Div00.form.Div01.form.cal_regEnd.set_value(this.parent.pv6);

        	//this.fn_setDefaultDay();
        	this.fn_swapBySupper(false);
        	this.fn_itmGrpsearch();

        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_05_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_itmGrpsearch = function() {
        	var sSvcId = "selectExcelUpldItmGrp2";
        	var sUrl = "/od/orderChange/selectExcelUpldItmGrp2.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_cdList=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_search = function() {
        	var sSvcId = "selectExcelUpldDtlsHstList";
        	var sUrl = "/od/odrPopup/selectExcelUpldDtlsHstList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "INQ_COND_DTLS", this.name);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectExcelUpldDtlsHstList") {
        		trace("### selectExcelUpldDtlsHstList - ds_list01.rowcount : " + this.ds_list01.rowcount);
        		this.sta_totcnt.set_text("(<b v='true'>총" + this.ds_list01.rowcount + "건)");
        	}
        	else if (svcID == "selectExcelUpldItmGrp2") {
        		trace("### selectExcelUpldItmGrp - ds_cdList.rowcount : " + this.ds_cdList.rowcount);
        		this.Div00.form.Div01.form.cmb_chgItm.set_value(this.chgItmGrpCd);

        		if (this.ds_cdList.getColumn(0, "IS_SUPPER") == "Y")	this.isSupper = true;
        		else	this.isSupper = false;

        		this.fn_swapBySupper(this.isSupper);
        	}
        	else if(svcID == "insertOdrInqTgtDtls"){
        		this.fn_search()
        	}
        };

        /***********************************************************************************************
        * POPUP CALLBACK 영역
        ************************************************************************************************/
        this.fn_popupCallback = function(sPopupId, sRetValue) {
            var resData = "";
            var sIdList = "";
            var sNmList = "";

            if (sRetValue == undefined) {
                return;
            }
            else {
                resData = JSON.parse(sRetValue);
            }

        	//trace("### fn_popupCallback - OPRTR_ID : " + resData.OPRTR_ID + ", OPRTR_NM : " + resData.OPRTR_NM + ", sPopupId : " + sPopupId);
            switch (sPopupId) {
                case "oprIdPopup":	// 운영자 팝업
        			this.Div00.form.Div01.form.edt_regpsnId.set_value(resData.OPRTR_ID);
        			this.Div00.form.Div01.form.edt_regpsnIdNm.set_value(resData.OPRTR_NM);
        			break;
        		case "regpsnIdPopup":	// 운영자 멀티 팝업
        			for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.OPRTR_ID +",";
                    }
        			this.Div00.form.Div01.form.edt_regpsnIdMulti.set_value(sIdList);
                    //this.fn_setMSearch(this.name, "REGPSN_IDS", sIdList);
        			break;
        		// 운영자 멀티 INPUT
                case "SSP_BO_OA_05;REGPSN_IDS":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_regpsnIdMulti.set_value(sIdList);
                    break;
        	}
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_setDefaultDay = function() {
        	var objCurr = new nexacro.Date();
            var sToday = objCurr.getFullYear() + ((objCurr.getMonth() + 1) + "").padLeft(2, '0') + (objCurr.getDate() + "").padLeft(2, '0');
        	this.Div00.form.Div01.form.cal_regStart.set_value(sToday);
        	this.Div00.form.Div01.form.cal_regEnd.set_value(sToday);
        };

        this.fn_validationFromTo = function() {
        	var startDate = this.Div00.form.Div01.form.cal_regStart.value;
        	var endDate = this.Div00.form.Div01.form.cal_regEnd.value;

        	if (startDate > endDate) {
        			alert(this.fn_getMessage("ERRS000258", "시작일자", "종료일자", "크게"));
        			return false;
        	}
        	else if (endDate < startDate) {
        		alert(this.fn_getMessage("ERRS000258", "종료일자", "시작일자", "작게"));
        		return false;
        	}

        	return true;
        };

        this.fn_searchMapSetting = function() {
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "CHG_ITM_GRP_CD", this.ds_cdList.getColumn(this.Div00.form.Div01.form.cmb_chgItm.index, "CHG_ITM_GRP_CD"));
        	this.ds_search.setColumn(0, "UPLD_PGM_IDT_NM", "SSP_BO_OA_41");
        	if (this.isSupper == false)	this.ds_search.setColumn(0, "REGPSN_ID", this.Div00.form.Div01.form.edt_regpsnId.value);
        	else	this.ds_search.setColumn(0, "REGPSN_ID", "");
        	this.ds_search.setColumn(0, "REG_DTM_START", this.Div00.form.Div01.form.cal_regStart.value);
        	this.ds_search.setColumn(0, "REG_DTM_END", this.Div00.form.Div01.form.cal_regEnd.value);
        	this.ds_search.setColumn(0, "REGPSN_IDS", "0");
        };

        this.fn_useClose = function(close) {
        	if (close == false) {
        		this.close();
        		return;
        	}

        	var resData = {};
        	var resString = "";
        	var selectedRow = this.ds_list01.rowposition;

        	if (selectedRow < 0) {
        		this.close();
        		return;
        	}

        	resData.CO_CD = this.ds_list01.getColumn(selectedRow, "CO_CD");
        	resData.USR_ID = this.ds_list01.getColumn(selectedRow, "USR_ID");
        	resData.UPLD_PGM_IDT_NM = this.ds_list01.getColumn(selectedRow, "UPLD_PGM_IDT_NM");
        	resData.CHG_ITM_GRP_CD = this.ds_list01.getColumn(selectedRow, "CHG_ITM_GRP_CD");
        	resData.REGPSN_ID = this.ds_list01.getColumn(selectedRow, "REGPSN_ID");
        	resData.FROM_DAY = this.Div00.form.Div01.form.cal_regStart.value.substr(0, 8);
        	resData.TO_DAY = this.Div00.form.Div01.form.cal_regEnd.value.substr(0, 8);
        	resString = JSON.stringify(resData);

        	//trace("### OA_05 - from : " + resData.FROM_DAY + ", to : " + resData.TO_DAY);

        	this.close(resString);
        };

        this.fn_swapBySupper = function(isSupper) {
        	// 멀티팝업 표시
        	if (isSupper) {
        		this.Div00.form.Div01.form.edt_regpsnIdMulti.set_visible(true);
        		this.Div00.form.Div01.form.btn_regpsnIdMultiPopup.set_visible(true);
        		this.Div00.form.Div01.form.btn_regpsnIdInput.set_visible(true);

        		this.Div00.form.Div01.form.edt_regpsnId.set_visible(false);
        		this.Div00.form.Div01.form.edt_regpsnIdNm.set_visible(false);
        		this.Div00.form.Div01.form.btn_regpsnIdPopup.set_visible(false);	// 단일 사용자 버튼은 항상 안보임
        	}
        	// 단일팝업 표시
        	else {
        		this.Div00.form.Div01.form.edt_regpsnIdMulti.set_visible(false);
        		this.Div00.form.Div01.form.btn_regpsnIdMultiPopup.set_visible(false);
        		this.Div00.form.Div01.form.btn_regpsnIdInput.set_visible(false);

        		this.Div00.form.Div01.form.edt_regpsnId.set_visible(true);
        		this.Div00.form.Div01.form.edt_regpsnIdNm.set_visible(true);
        		this.Div00.form.Div01.form.btn_regpsnIdPopup.set_visible(false);	// 단일 사용자 버튼은 항상 안보임
        	}
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("btn_cancel_onclick");
        	this.fn_regMethodShiftENTER("btn_confirm_onclick");
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 등록자 팝업
        this.btn_regpsnIdPopup_onclick = function(obj,e)
        {
        	var objParam = {coCod:this.fv_coCd, oprtrId:"", oprtrNm:""}
        	this.gfn_openPopup("oprIdPopup", "CO_POP::SSP_BO_PP_44.xfdl", objParam);
        };
        // 조회
        this.btn_search_onclick = function(obj,e)
        {
        	if (this.Div00.form.Div01.form.cmb_chgItm.index < 0) {
        		alert(this.fn_getMessage("ERRS000144", "변경항목"));
        		return;
        	}
        	// 검색 기간 검사
        	if (this.fn_validationFromTo() == false)	return;

        	this.fn_searchMapSetting();
        	this.fn_setMSearch(this.name, "REGPSN_IDS", this.Div00.form.Div01.form.edt_regpsnIdMulti.value);

        	var nCount = this.ds_select.getRowCount();
        	if (nCount == 0) {
        		this.fn_search();
        	}
        	else {
        		this.fn_insertSelectedData("fn_callBack");
        	}

        	/*
        	if (this.isSupper == true) {
        		this.fn_search();
        	}
        	else {
        		var nCount = this.ds_select.getRowCount();
        		if (nCount == 0) {
        			this.fn_search();
        		}
        		else {
        			this.fn_insertSelectedData("fn_callBack");
        		}
        	}
        	*/
        };
        // 확인
        this.btn_confirm_onclick = function(obj,e)
        {
        	var selectedRow = this.ds_list01.rowposition;
        	if (selectedRow < 0) {
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}
        	this.fn_useClose(true);
        };
        // 취소
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.fn_useClose(false);
        };

        this.btn_excelDownload_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.grid_list01, fileName:"주문일괄등록이력"});
        };

        // 등록자 멀티 팝업
        this.btn_regpsnIdMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd, title:"운영자 조회"};
        	this.gfn_openPopup("regpsnIdPopup", "OD::SSP_BO_OA_43.xfdl", objParam);
        };
        // 등록자 멀티 인풋
        this.btn_regpsnIdInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name, "REGPSN_IDS", this.Div00.form.Div01.form.edt_regpsnIdMulti.value, "fn_popupCallback", 120, 300);
        };

        /***********************************************************************************************
        * GRID EVENT 영역
        ************************************************************************************************/
        this.grid_list01_oncelldbclick = function(obj,e)
        {
        	this.fn_useClose(true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_05_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_05_onkeyup,this);
            this.Div00.form.Div02.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.Div01.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.btn_regpsnIdPopup.addEventHandler("onclick",this.btn_regpsnIdPopup_onclick,this);
            this.Div00.form.Div01.form.cal_regStart.addEventHandler("onchanged",this.Div00_Calendar42_onchanged,this);
            this.Div00.form.Div01.form.cal_regEnd.addEventHandler("onchanged",this.Div00_Calendar42_onchanged,this);
            this.Div00.form.Div01.form.cmb_chgItm.addEventHandler("onitemchanged",this.Div00_cmb_chgItm_onitemchanged,this);
            this.Div00.form.Div01.form.btn_regpsnIdMultiPopup.addEventHandler("onclick",this.btn_regpsnIdMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_regpsnIdInput.addEventHandler("onclick",this.btn_regpsnIdInput_onclick,this);
            this.grid_list01.addEventHandler("oncelldblclick",this.grid_list01_oncelldbclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
