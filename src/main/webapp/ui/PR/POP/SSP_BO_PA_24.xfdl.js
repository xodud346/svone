(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_24");
            this.set_titletext("담당자 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_updateData", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SEQ\" type=\"STRING\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div","20","80",null,"380","20",null,null,null,null,null,this);
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

            obj = new Static("sta_prdClcd","139","7",null,"30","420",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","37",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","139","38","160","30",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_form_rdo_useYn_innerdataset = new nexacro.NormalDataset("div_form_rdo_useYn_innerdataset", obj);
            div_form_rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">삭제</Col></Row></Rows>");
            obj.set_innerdataset(div_form_rdo_useYn_innerdataset);
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","37","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","68",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_chrpsnId","139","69",null,"30","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","68","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","0","99",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00","0","130",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00","0","161",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00_00","0","192",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00_00_00","0","223",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00_00_00_00","0","254",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00_00_00_00_00","0","285",null,"90","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","99","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_text("신규 담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","244","103","184","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_empNo","139","103","101","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_sprCd","139","131",null,"30","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","130","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_text("담당자 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_regDtm","139","162",null,"30","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","161","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_regpsnId","139","193",null,"30","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","0","192","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_updDtm","139","224",null,"30","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("25");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","0","223","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("26");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_updpsnId","139","255",null,"30","20",null,null,null,null,null,this.div.form);
            obj.set_taborder("27");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","254","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("28");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new TextArea("tae_reason","139","289",null,"82","10",null,null,null,null,null,this.div.form);
            obj.set_taborder("29");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","285","130","90",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("30");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_categoryNm","390","7",null,"30","10",null,null,null,null,null,this.div.form);
            obj.set_taborder("31");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_title","20","21","182","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("담당자 상세");
            obj.set_font("bold 14pt \"Arial\"");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","328",null,"100","32",null,"30",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","431",null,"100","32",null,"30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_person_popup","451","183","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_history_popup",null,"49","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("변경이력");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",850,540,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_24.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_PA_24.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP속성 생성 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.psnDupChk = '';
        this.sEmpNo = '';
        this.sOprtrNm = '';
        this.bOriginalUseYn = false;

        this.bChkUseYn = false;
        this.bChkPsn = false;
        this.chrpsnTpCd = '';
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);

        	this.chrpsnTpCd = this.parent.chrpsnTpCd;	//상품,MD 구분
        	this.ds_search.setColumn(0, "PRD_CLSF_CHRPSN_TP_CD", this.chrpsnTpCd);

        	//리스트에서 받은 변수
        	this.ds_search.setColumn(0, "CO_CD", this.parent.CO_CD);
        	this.ds_search.setColumn(0, "PRD_CLCD", this.parent.PRD_CLCD);
        	this.ds_search.setColumn(0, "PRD_CLSF_CHRPSN_ID", this.parent.PRD_CLSF_CHRPSN_ID);
        	this.ds_search.setColumn(0, "PRD_CLSF_CHRPSN_SEQ", this.parent.PRD_CLSF_CHRPSN_SEQ);
        	this.ds_updateData.addRow();
        	this.ds_updateData.copyRow(0, this.ds_search, 0);
        	this.fn_detail();
        };

        // 화면 단축키
        this.fn_onkeyup = function(obj,e)
        {
        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.btn_save_onclick();
        		event.preventDefault();
        	}

        	// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		//if(this.confirm(this.gfn_getMessage('ERRP000304'))){
        			this.close();
        		//}
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_detail = function ()
        {
            var sSvcId = "selectPersonDetail";
            var sUrl = "/pr/prs-mng/select-person-detail.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_detail=personDetail";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //담당자 수정
        this.fn_save = function ()
        {
            var sSvcId = "save";
            var sUrl = "/pr/prs-mng/update-person.do";
            var inDs = "ds_updateData=ds_updateData";
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
                case "selectPersonDetail" :
        			this.div.form.sta_prdClcd.set_text(this.ds_detail.getColumn(0, "PRD_CLCD"));	//카테고리ID
        			this.div.form.sta_categoryNm.set_text(this.ds_detail.getColumn(0, "PRD_CLCD"));
        			this.div.form.sta_categoryNm.set_text(this.ds_detail.getColumn(0, "PRD_CLSF_NM"));
        			this.div.form.rdo_useYn.set_value(this.ds_detail.getColumn(0, "PRD_CLSF_CHRPSN_USEYN"));
        			this.div.form.sta_chrpsnId.set_text(this.ds_detail.getColumn(0, "PRD_CLSF_CHRPSN_ID"));
        			this.div.form.sta_sprCd.set_text(this.ds_detail.getColumn(0, "PRD_CLSF_CHRPSN_SPR_CD"));
        			this.div.form.tae_reason.set_value(this.ds_detail.getColumn(0, "UPD_RSN"));
        			this.div.form.sta_regDtm.set_text(this.ds_detail.getColumn(0, "REG_DTM"));
        			this.div.form.sta_regpsnId.set_text(this.ds_detail.getColumn(0, "REGPSN_ID"));
        			this.div.form.sta_updDtm.set_text(this.ds_detail.getColumn(0, "UPD_DTM"));
        			this.div.form.sta_updpsnId.set_text(this.ds_detail.getColumn(0, "UPDPSN_ID"));
        			this.bOriginalUseYn = this.ds_detail.getColumn(0, "PRD_CLSF_CHRPSN_USEYN")=='Y'?true:false;

                    break;

        		case "personDuplicateCheck" :
        			if(this.psnDupChk == "1"){
        				//alert("AM-BO-051 신규 담당자와 원래 담당자가 동일합니다. ");
        				alert(this.gfn_getMessage('ERRP000051'));
        				this.div.form.edt_empNo.set_value('');
        				this.div.form.edt_oprtrNm.set_value('');
        				this.ds_updateData.setColumn(0, "NEW_PRD_CLSF_CHRPSN_ID", '');
        				this.bChkPsn = false;
        			}else{
        				this.div.form.edt_empNo.set_value(this.sEmpNo);
        				this.div.form.edt_oprtrNm.set_value(this.sOprtrNm);
        				this.ds_updateData.setColumn(0, "NEW_PRD_CLSF_CHRPSN_ID", this.sEmpNo);	//신규담당자
        				this.bChkPsn = true;
        			}
        			this.fn_toggleTextArea();

                    break;

        		case "save" :
        			//alert('저장 되었습니다.');
        			this.close(true);

                    break;

            }
        };

        //팝업콜백
        this.fn_popupCallback = function(svcID, args){
            switch(svcID) {
                case "btn_person_popup" :
        			var jsonData = JSON.parse(args);
        			this.sEmpNo = jsonData.EMP_NO;
        			this.sOprtrNm = jsonData.OPRTR_NM;
        			this.ds_search.setColumn(0, "EMP_NO", jsonData.EMP_NO);	//체크대상
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
        //변경사유 활성/비활성
        this.fn_toggleTextArea = function(){
        	var bUseYn = (this.bChkUseYn == this.bOriginalUseYn);
        	if(bUseYn || this.bChkPsn){
        		this.div.form.tae_reason.set_enable(true);
        		this.div.form.tae_reason.set_value('');
        	}else{
        		this.div.form.tae_reason.set_enable(false);
        		this.div.form.tae_reason.set_value(this.ds_detail.getColumn(0, "UPD_RSN"));
        	}
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //이력팝업
        this.btn_history_popup_onclick = function(obj,e)
        {
        	var params = {
        		historyType:'person', //필수
        		key1:this.ds_search.getColumn(0, "PRD_CLCD"),
        		key2:this.ds_detail.getColumn(0, "PRD_CLSF_CHRPSN_SPR_CD")=="정"?"10":"20",
        		key3:this.ds_detail.getColumn(0, "PRD_CLSF_CHRPSN_SEQ")
        	};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_48.xfdl", params,  "fn_popupCallback", options);
        };

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close(false);
        };

        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	var bUseYn = (this.bChkUseYn == this.bOriginalUseYn);
        	if(!bUseYn && !this.bChkPsn){
        		//alert('AM-BO-129변경 된 내용이 없습니다');
        		alert(this.gfn_getMessage('ERRP000129'));
        		return;
        	}
        	if(bUseYn || this.bChkPsn){
        		if(this.gfn_isNull(this.div.form.tae_reason.value)){
        			//alert('AM-BO-030수정사유를 입력해 주세요');
        			alert(this.gfn_getMessage('ERRP000030'));
        			return;
        		}
        	}
        	this.ds_updateData.setColumn(0, "PRD_CLSF_CHRPSN_USEYN", this.div.form.rdo_useYn.value);	//사용여부
        	this.ds_updateData.setColumn(0, "UPD_RSN", this.div.form.tae_reason.value);	//사유

        	//this.confirm('AM-BO-006수정된 내용으로 저장하시겠습니까?')
        	if(this.confirm(this.gfn_getMessage('ERRP000006'))){
        		this.fn_save();
        	}
        };

        //담당자팝업
        this.btn_person_popup_onclick = function(obj,e)
        {
        	if(!this.bChkUseYn){
        		var params = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};
        		var options = {};
        		this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", options);
        	}
        };

        //사용여부 이벤트
        this.div_rdo_useYn_onitemchanged = function(obj,e)
        {
        	if(obj.value == 'N'){
        		this.bChkUseYn = true;

        		//삭제선택시 담당자 항목 초기화
        		this.div.form.edt_empNo.set_value('');
        		this.div.form.edt_oprtrNm.set_value('');
        		this.ds_updateData.setColumn(0, "NEW_PRD_CLSF_CHRPSN_ID", '');
        		this.bChkPsn = false;
        	}else{
        		this.bChkUseYn = false;
        	}
        	this.fn_toggleTextArea();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div.form.rdo_useYn.addEventHandler("onitemchanged",this.div_rdo_useYn_onitemchanged,this);
            this.div.form.edt_empNo.addEventHandler("onkeyup",this.Div00_edit_MNFR_NO_onkeyup,this);
            this.div.form.tae_reason.addEventHandler("onchanged",this.div_tae_reason_onchanged,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_person_popup.addEventHandler("onclick",this.btn_person_popup_onclick,this);
            this.btn_history_popup.addEventHandler("onclick",this.btn_history_popup_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_24.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
