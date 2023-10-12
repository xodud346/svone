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
            this.set_titletext("SSP속성 생성 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDetail","20","48",null,"77","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px solid darkblue");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","125","6",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("PRNM","150","10",null,"24","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_maxlength("50");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staPrnm","0","6","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("SSP속성명 ");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07","100","37",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","37","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("USE_YN","150","41","256","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
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

            obj = new Button("btn_cancel","157",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","260",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("| SSP속성 추가");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,180,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divDetail.form.PRNM","value","ds_detail","PRNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDetail.form.USE_YN","value","ds_detail","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_18.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_18.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_18.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP속성 생성 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.valiFormIds = [
        	   {"name" : "SSP속성명"     , "id" : "PRNM"}
        ];

        this.coCd = this.parent.coCd;
        this.mallSprCd = "10";
        this.prNmCnt = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.ds_detail.addRow();
        	this.divDetail.form.USE_YN.set_value("Y");
        	this.ds_detail.setColumn(0,"MALL_SPR_CD",this.mallSprCd);

        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
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
        	var validation = this.fn_validationForm(this.divDetail, this.valiFormIds, this.ds_detail);

        	if( validation ) {
        		var sSvcId = "saveProperty";
        		var sUrl   = "/pr/ctg-mng/save-property.do";
        		var inDs   = "ds_detail=ds_detail:U";
        		var outDs  = "";
        		var arg    = "";

        		if( this.confirm(this.fn_getMessage("ERRP000012")) ) {
        			this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
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
        		//this.alert("등록 되었습니다.");
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
        	this.fn_prNm();
        };
        //취소 버튼
        this.btn_clear_onclick = function(obj,e)
        {
        	if(this.confirm(this.fn_getMessage("ERRP000013"))){
        		this.close(false);
        	}
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
            this.divDetail.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.divDetail.form.USE_YN.addEventHandler("onitemchanged",this.Div01_o_onitemchanged,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.insert_btn_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_18.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
