(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dlvPopup");
            this.set_titletext("SSP속성 상세 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,305);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_cancel","157",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","260",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","48",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("0px solid darkblue");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","125","6",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("PRD_ATTR_CD","150","10",null,"24","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("SSP속성코드");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07","100","68",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","68","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("USE_YN","150","72","246","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var divDetail_form_USE_YN_innerdataset = new nexacro.NormalDataset("divDetail_form_USE_YN_innerdataset", obj);
            divDetail_form_USE_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_USE_YN_innerdataset);
            obj.set_text("기본 배송지");
            obj.set_value("Y");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_00","125","37",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("PRNM","150","41",null,"24","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_maxlength("50");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staPrnm","0","37","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("SSP속성명 ");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07_00","100","99",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","99","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("SSP속성사용 상품군수");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","100","130",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","130","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","100","161",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","0","161","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("PRD_CLCD_CNT","150","103",null,"24","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("REG_DTM","150","134",null,"24","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("UPD_DTM","150","165",null,"24","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static1","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("| SSP속성 상세");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,305,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","divDetail.form.PRD_ATTR_CD","value","ds_detail","PRD_ATTR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.USE_YN","value","ds_detail","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.PRNM","value","ds_detail","PRNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDetail.form.PRD_CLCD_CNT","value","ds_detail","PRD_CLCD_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.REG_DTM","value","ds_detail","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.UPD_DTM","value","ds_detail","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_19.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_19.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_19.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP속성 상세 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        //부모창에서 넘긴 파라미터
        this.attrCd = this.parent.attrCd;

        this.valiFormIds = [
        	   {"name" : "SSP속성명"     , "id" : "PRNM"}
        ];

        this.coCd = this.parent.coCd;
        this.mallSprCd = "10";
        this.prNmCnt = 0;
        this.oldPrNm = null;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.fn_search();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function()
        {
        	var sSvcId = "selectProperty";
        	var sUrl   = "/pr/ctg-mng/select-property.do";
        	var inDs   = "ds_search=ds_search";
        	var outDs  = "ds_detail=ds_output";
        	var arg    = "";

        	this.ds_search.setColumn(0, "CO_CD", this.coCd);
        	this.ds_search.setColumn(0, "PRD_ATTR_CD", this.attrCd);
        	this.ds_search.setColumn(0, "MALL_SPR_CD", this.mallSprCd);
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 속성명 중복여부 확인
        this.fn_prNm = function()
        {
        	var sSvcId = "selectPropertyPrNm";
        	var sUrl   = "/pr/ctg-mng/select-property-prnm.do";
        	var inDs   = "ds_search=ds_search";
        	var outDs  = "";
        	var arg    = "";

        	this.ds_search.setColumn(0, "CO_CD", this.coCd);
        	this.ds_search.setColumn(0, "MALL_SPR_CD", this.mallSprCd);
        	this.ds_search.setColumn(0, "PRNM", this.divDetail.form.PRNM.value);
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //계정 등록
        this.fn_regist = function()
        {
        	if( !this.fn_dataCheck(this.ds_detail)  ) {
        		//alert("변경된 내용이 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000129"));
        		return false;
        	} else {
        		var validation = this.fn_validationForm(this.divDetail, this.valiFormIds, this.ds_detail);

        		if( validation ) {
        			var sSvcId = "saveProperty";
        			var sUrl   = "/pr/ctg-mng/save-property.do";
        			var inDs   = "ds_detail=ds_detail:U";
        			var outDs  = "";
        			var arg    = "";

        			if( this.confirm(this.fn_getMessage("ERRP000006")) ) {
        				this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        			}
        		}
        	}
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        	case "selectProperty":
        		// SSP속성사용 상품군이 없는 경우에만 미사용' 선택이 가능
        		if(this.ds_detail.getColumn(0,"PRD_CLCD_CNT") > 0){
        			this.divDetail.form.USE_YN.set_enable(false);
        		}

        		this.oldPrNm = this.ds_detail.getColumn(0,"PRNM");
        		break;

        	case "selectPropertyPrNm" :
        		// 속성명 중복여부 확인
        		if(this.prNmCnt > 0 ){
        			//this.alert("입력한 속성명은 이미 존재하는 속성명입니다.");
        			this.alert(this.fn_getMessage("ERRP000274"));
        			this.divDetail.form.PRNM.setFocus();
        			return false;
        		}else{
        			this.fn_regist();
        		}
        		break;

        	case "saveProperty":
        			//this.alert("수정 되었습니다.");
        			this.close(true);
        		break;
        	default:
        		break;
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//static 필수값 표시 초기 설정
        	this.divDetail.form.staPrnm.uEssentiel = "true";

        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //등록 버튼
        this.insert_btn_onclick = function(obj,e)
        {
        	if(this.oldPrNm != this.ds_detail.getColumn(0,"PRNM")){
        		this.fn_prNm();
        	}else{
        		this.fn_regist();
        	}
        };
        //취소 버튼
        this.btn_clear_onclick = function(obj,e)
        {
        	this.close(false);
        };

        // 단축키
        this.dlvPopup_onkeyup = function(obj,e)
        {
        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.insert_btn_onclick();
        	}

        	// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		this.btn_clear_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.dlvPopup_onkeyup,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.divDetail.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.divDetail.form.USE_YN.addEventHandler("onitemchanged",this.Div01_o_onitemchanged,this);
            this.divDetail.form.Static29_00_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_19.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
