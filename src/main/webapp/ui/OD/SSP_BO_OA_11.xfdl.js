(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_11");
            this.set_titletext("비용이체부서변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,460);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_subTitle01","20","64","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("■ 요청 정보");
            obj.set_cssclass("sta_WF_title01");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","sta_subTitle01:10",null,"63","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
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

            obj = new Edit("edt_chgReqrRsn","110","36","540","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_mbrNm","100","0","82.14%","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("홍길동");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_subTitle02","20","Div00:30","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("■ 현 비용 부서");
            obj.set_cssclass("sta_WF_title01");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","20","sta_subTitle02:10",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07_01","0","30",null,"32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","331","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("부서");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"0","330","32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("계정");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","0","30","331","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00",null,"30","330","32","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","5","35","110","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","120","35","205","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_acctId",null,"35","110","22","215",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_acctNm",null,"35","205","22","5",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta_subTitle03","20","Div02:30","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("■ 변경 비용 부서");
            obj.set_cssclass("sta_WF_title01");
            obj.set_font("12px/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","sta_subTitle03:10",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07_01","0","30",null,"32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","331","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("부서");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"0","330","32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("계정");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","0","30","331","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00",null,"30","330","32","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","5","35","110","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","120","35","178","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_deptPopup","302","34","24","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_acctId",null,"35","110","22","215",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_acctNm",null,"35","178","22","32",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_acctPopup",null,"34","24","24","4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_save","610",null,"70","30",null,"17",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("비용 이체 부서 변경");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,460,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_11.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_11.xfdl", function() {
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.resultCount = "";
        this.fv_coCd = "";
        this.fv_mbrId = "";
        this.fv_mbrNm = "";
        this.fv_deptId = "";
        this.fv_deptNm = "";
        this.fv_acctId = "";
        this.fv_acctNm = "";
        this.fv_acctIdNm = "";
        // 변경된 부서/계정 정보
        this.fv_chgDeptId = "";
        this.fv_chgDeptNm = "";
        this.fv_chgAcctId = "";
        this.fv_chgAcctNm = "";
        this.fv_chgAcctCd = "";
        this.fv_chgAcctIdNm = "";
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_11_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	// 필요 정보 : CO_CD, MBR_ID, MBR_NM, DEPT_ID, DEPT_NM, ACCT_ID, ACCT_NM
        	this.fv_coCd = this.parent.pv1;
            this.fv_mbrId = this.parent.pv2;
        	this.fv_mbrNm = this.parent.pv3;
        	this.fv_deptId = this.parent.pv4;
        	this.fv_deptNm = this.parent.pv5;
            this.fv_acctId = this.parent.pv6;
            this.fv_acctNm = this.parent.pv7;
        	this.fv_acctIdNm = this.parent.pv8;

        	this.fv_chgDeptId = this.fv_deptId;
        	this.fv_chgDeptNm = this.fv_deptNm;
        	this.fv_chgAcctId = this.fv_acctId;
        	this.fv_chgAcctNm = this.fv_acctNm;
        	this.fv_chgAcctIdNm = this.fv_acctIdNm;
        	this.fn_setDisplayInfo();

        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_11_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/


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

        	switch (sPopupId) {
        		// 비용이체부서 팝업
        		case "costTrnsfDept":
        			this.fv_chgDeptId = resData.DEPT_ID;
        			this.fv_chgDeptNm = resData.DEPT_NM;
        			this.fv_chgAcctId = "";
        			this.fv_chgAcctNm = "";
        			this.fn_setDisplayInfo();
        			break;
        		// 비용이체부서계정 팝업
        		case "costTrnsfDeptAcct":
        			this.fv_chgAcctId = resData.ACCT_ID;
        			this.fv_chgAcctNm = resData.ACCT_NM;
        			this.fv_chgAcctCd = resData.ACCT_CD;
        			this.fv_chgAcctIdNm = resData.ACCT_CD + " | " + resData.ACCT_NM ;
        			this.fn_setDisplayInfo();
        			break;
        	}
        }

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_setDisplayInfo = function() {
          this.Div00.form.sta_mbrNm.set_text(this.fv_mbrNm);
          this.Div02.form.edt_deptId.set_value(this.fv_deptId);
          this.Div02.form.edt_deptNm.set_value(this.fv_deptNm);
          this.Div02.form.edt_acctId.set_value(this.fv_acctId);
          this.Div02.form.edt_acctNm.set_value(this.fv_acctNm);

          this.Div01.form.edt_deptId.set_value(this.fv_chgDeptId);
          this.Div01.form.edt_deptNm.set_value(this.fv_chgDeptNm);
          this.Div01.form.edt_acctId.set_value(this.fv_chgAcctId);
          this.Div01.form.edt_acctNm.set_value(this.fv_chgAcctNm);
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	//this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        	this.fn_regMethodShiftENTER("btn_save_onclick");
        };

        this.fn_closeForm = function() {
        	this.close(0);
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 취소
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close(0);
        };
        // 확인
        this.btn_save_onclick = function(obj,e)
        {
        	var reason = this.Div00.form.edt_chgReqrRsn.text;

        	if (this.fv_deptId == this.chgDeptId) {
        		alert("부서정보가 변경되지 않았습니다.");
        		return;
        	}

        	if (this.fv_acctId == this.fv_chgAcctId) {
        		alert("계정정보가 변경되지 않았습니다.");
        		return;
        	}

        	if (this.gfn_isNull(this.fv_chgAcctId)) {
        		alert(this.fn_getMessage("ERRS000027", "계정정보"));
        		return;
        	}

        	var resData = {};
        	var resString = "";

        	resData.COST_TRNSF_DEPT_ID = this.fv_chgDeptId;
        	resData.COST_TRNSF_DEPT_NM = this.fv_chgDeptNm;
        	resData.ACCT_ID = this.fv_chgAcctId;
        	resData.ACCT_NM = this.fv_chgAcctNm;
        	resData.ACCT_ID_NM = this.fv_chgAcctIdNm;
        	resData.REASON = this.Div00.form.edt_chgReqrRsn.text;
        	resString = JSON.stringify(resData);

        	this.close(resString)
        };
        // 부서 팝업
        this.btn_deptPopup_onclick = function(obj,e)
        {
        	var objParam = {pv1:this.fv_coCd, pv2:this.fv_mbrId};
        	this.gfn_openPopup("costTrnsfDept", "OD::SSP_BO_OA_12.xfdl", objParam);
        };
        // 계정 팝업
        this.btn_acctPopup_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.fv_chgDeptId)) {
        		alert(this.fn_getMessage("ERRS000027", "부서정보"));
        		return;
        	}

        	if (this.gfn_isNull(this.fv_mbrId)) {
        		alert(this.fn_getMessage("ERRS000027", "주문자"));
        		return;
        	}

        	if (this.gfn_isNull(this.fv_coCd)) {
        		alert(this.fn_getMessage("ERRS000027", "회사코드"));
        		return;
        	}

        	var objParam = {pv1:this.fv_coCd, pv2:this.fv_mbrId, pv3:this.fv_chgDeptId};
        	this.gfn_openPopup("costTrnsfDeptAcct", "OD::SSP_BO_OA_13.xfdl", objParam);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_11_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_11_onkeyup,this);
            this.Div00.form.sta_odrsnNo.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.sta_odrsnNo00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.sta_mbrNm.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.Div01.form.btn_deptPopup.addEventHandler("onclick",this.btn_deptPopup_onclick,this);
            this.Div01.form.btn_acctPopup.addEventHandler("onclick",this.btn_acctPopup_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
