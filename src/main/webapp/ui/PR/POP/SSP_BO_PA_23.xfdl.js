(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_23");
            this.set_titletext("담당자 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insertData", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdClsfChrpsnSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div","20","44",null,"132","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","6",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","138","10","100","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","0","37",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","244","41","184","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_empNo","139","41","101","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","37","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","68",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","68","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("담당자구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_prdClsfNm","138","10","590","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_info","0","102","469","26",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_text("* 정담당자는 1명만 등록 가능하며, 부담당자는 1명 이상 등록할 수 있습니다");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_person_popup","432","41","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_category_popup","732","10","24","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Radio("rdo_chrpsnSpr","140","72","180","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_prdClsfChrpsnSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_title","20","21","182","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("담당자 등록");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","298",null,"100","32",null,"50",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","401",null,"100","32",null,"50",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,280,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_23.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_PA_23.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP속성 생성 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.sprCd = "";
        this.sPrdClcd = "";
        this.psnDupChk = "";
        this.sEmpNo = "";
        this.sOprtrNm = "";
        this.chrpsnTpCd = '';
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	this.chrpsnTpCd = this.parent.chrpsnTpCd;
        	this.ds_search.setColumn(0, "PRD_CLSF_CHRPSN_TP_CD", this.chrpsnTpCd);
        };

        // 화면 단축키
        this.fn_onkeyup = function(obj,e)
        {
        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.insert_btn_onclick();
        		event.preventDefault();
        	}

        		// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		//this.btn_clear_onclick();
        		this.close();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){

            var sSvcId = "commonCodeSearch";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_prdClsfChrpsnSprCd=ds_output1";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "PRD_CLSF_CHRPSN_SPR_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_personSprCd = function ()
        {
            var sSvcId = "selectPersonSprCd";
            var sUrl = "/pr/prs-mng/select-person-sprcd.do";
            var inDs = "ds_search=ds_search";
            var outDs = "";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //담당자 등록
        this.fn_registPerson = function (bInit)
        {
            var sSvcId = "registPerson";
            var sUrl = "/pr/prs-mng/insert-person.do";
            var inDs = "ds_insertData=ds_insertData";
            var outDs = "";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //담당자 중복체크
        this.fn_personDuplicateCheck = function ()
        {
            var sSvcId = "personDuplicateCheck";
            var sUrl = "/pr/prs-mng/select-person-duplicate-check.do";
            var inDs = "ds_search=ds_search";
            var outDs = "";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "selectPersonSprCd" :
        			if(this.sprCd=='20'){
        				//alert("AM-BO-029  해당 상품군에는 정 담당자가 이미 존재합니다.");
        				if(this.div.form.rdo_chrpsnSpr.value!='20'){	//이미 부를 선택한경우 부를 등록할수밖에 없을 경우에는 알럿 안띄움
        					alert(this.gfn_getMessage('ERRP000029'));
        				}
        				this.div.form.rdo_chrpsnSpr.set_readonly(true);
        			}else{
        				this.div.form.rdo_chrpsnSpr.set_readonly(false);
        			}
        			this.div.form.rdo_chrpsnSpr.set_value(this.sprCd);

                    break;

        		case "registPerson" :
        			//alert('등록 되었습니다.');
        			this.close(true);

                    break;

        		case "personDuplicateCheck" :
        			if(this.psnDupChk == "0"){
        				this.div.form.edt_empNo.set_value(this.sEmpNo);
        				this.div.form.edt_oprtrNm.set_value(this.sOprtrNm);
        			}else{
        				//alert("AM-BO-051 신규 담당자와 원래 담당자가 동일합니다. ");
        				alert(this.gfn_getMessage('ERRP000051'));
        			}

                    break;

            }
        };

        //팝업콜백
        this.fn_popupCallback = function(svcID, args){
            switch(svcID) {
                case "btn_category_popup" :
                    var jsonData = JSON.parse(args);
                    this.div.form.edt_prdClcd.set_value(jsonData.PRD_CLCD);
                    this.div.form.edt_prdClsfNm.set_value(jsonData.FULL_PRD_CLSF_NM);
        			this.sPrdClcd = jsonData.PRD_CLCD;

        			//정/부 구분 호출
        			//this.div.form.rdo_chrpsnSpr.set_value('');
        			this.ds_search.setColumn(0, "PRD_CLCD", jsonData.PRD_CLCD);
        			this.fn_personSprCd();

        			//담당자 초기화
        			this.div.form.edt_empNo.set_value("");
        			this.sEmpNo = "";
        			this.div.form.edt_oprtrNm.set_value("");
        			this.sOprtrNm = "";

                    break;

        		case "btn_person_popup" :
        			var jsonData = JSON.parse(args);
        			this.sEmpNo = jsonData.EMP_NO;
        			this.sOprtrNm = jsonData.OPRTR_NM;
        			this.ds_search.setColumn(0, "EMP_NO", jsonData.EMP_NO);
        			this.fn_personDuplicateCheck();

                    break;

            }
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_regist = function(){
        	if(this.gfn_isNull(this.sPrdClcd)){
        		//alert("AM-BO-023 상품군을 선택해 주세요");
        		alert(this.gfn_getMessage('ERRP000023'));
        		return false;
        	}
        	if(this.gfn_isNull(this.sEmpNo)){
        		//alert("AM-BO-022 담당자를 지정해 주세요");
        		alert(this.gfn_getMessage('ERRP000022'));
        		return false;
        	}
        	this.ds_insertData.clearData();
        	this.ds_insertData.addRow();
        	this.ds_insertData.setColumn(0, "PRD_CLSF_CHRPSN_ID", this.sEmpNo);	//담당자
        	this.ds_insertData.setColumn(0, "PRD_CLCD", this.sPrdClcd);	//카테고리ID
        	this.ds_insertData.setColumn(0, "MALL_SPR_CD", '10');	//몰구분(SSP 10)
        	this.ds_insertData.setColumn(0, "PRD_CLSF_CHRPSN_TP_CD", this.chrpsnTpCd);	//분류담당자(상품 10, MD 20)
        	this.ds_insertData.setColumn(0, "PRD_CLSF_CHRPSN_USEYN", 'Y');
        	this.ds_insertData.setColumn(0, "PRD_CLSF_CHRPSN_SPR_CD", this.sprCd);	//정/부 구분

        	//AM-BO-032 입력된 정보로 등록처리 하시겠습니까?
        	var sResult = this.confirm(this.gfn_getMessage('ERRP000032'));
        	if(sResult){
        		this.fn_registPerson();
        	}

        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //등록 버튼
        this.insert_btn_onclick = function(obj,e)
        {
        	this.fn_regist();
        };

        //취소 버튼
        this.btn_clear_onclick = function(obj,e)
        {
        	//var bResult = this.confirm("AM-BO-013 등록을 취소하시겠습니까?");
        	var bResult = this.confirm(this.gfn_getMessage('ERRP000013'));
        	if(bResult){
        		this.close(false);
        	}
        };

        //카테고리팝업
        this.btn_cate_popup_onclick = function(obj,e)
        {
        	var params = {mallSprCd:'10',coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};	//ssp
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", options);
        };

        //담당자팝업
        this.btn_person_popup_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.sPrdClcd)){
        		//alert("AM-BO-023 상품군을 선택해 주세요");
        		alert(this.gfn_getMessage('ERRP000023'));
        		return false;
        	}
            var params = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", options);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div.form.edt_prdClcd.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div.form.edt_empNo.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div.form.btn_person_popup.addEventHandler("onclick",this.btn_person_popup_onclick,this);
            this.div.form.btn_category_popup.addEventHandler("onclick",this.btn_cate_popup_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.insert_btn_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_23.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
