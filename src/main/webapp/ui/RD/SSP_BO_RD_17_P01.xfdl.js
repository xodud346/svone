(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_RD_17_P01");
            this.set_titletext("거부사유");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_output", this);
            obj._setContents("<ColumnInfo><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div","20","20",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00_00_00_00_00","0","0",null,"90","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new TextArea("UPD_RSN","139","4",null,"82","10",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_maxlength("650");
            this.div.addChild(obj.name, obj);

            obj = new Static("staUpdRsn","0","0","130","90",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_text("거부사유");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_close","250",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_conf","353",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,180,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div.form.UPD_RSN","value","ds_output","UPD_RSN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_17_P01.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_RD_17_P01.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP속성 생성 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.valiFormIds = [
        	   {"name" : "변경사유"     , "id" : "UPD_RSN"}
        ];
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);

        	this.ds_output.clearData();
        	this.ds_output.addRow();

        	// 2022.10.20 sg.park SSP-1572 > SSP-1253 [BO 견적요청 목록] 협력사 견적거부 상태값 오류
        	if( !this.gfn_isNull(this.parent.UPD_RSN) ) {
        		this.div.form.UPD_RSN.set_readonly(this.parent.READ_ONLY=='Y');
        		this.ds_output.setColumn(0, 'UPD_RSN', this.parent.UPD_RSN);
        	}
        	// /2022.10.20 sg.park SSP-1572 > SSP-1253 [BO 견적요청 목록] 협력사 견적거부 상태값 오류
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//static 필수값 표시 초기 설정
        	this.div.form.staUpdRsn.uEssentiel = "true";

        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.btn_conf_onclick = function(obj,e)
        {
        	var validation = this.fn_validationForm(this.div, this.valiFormIds, this.ds_output);

        	if( validation ) {
        		var resData = {};
        		var resString = "";
        		resData.UPD_RSN = this.ds_output.getColumn(0,"UPD_RSN");
        		resString = JSON.stringify(resData);
        		this.close(resString);
        	}
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.SSP_BO_NA_27_onkeyup = function(obj,e)
        {
        	// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		this.btn_close_onclick();
        	}

        	// CTRL + ENTER
        	if (e.keycode == 13 && e.ctrlkey == true) {
        		// 선택
        		this.btn_conf_onclick();
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_NA_27_onkeyup,this);
            this.div.form.UPD_RSN.addEventHandler("onchanged",this.div_tae_reason_onchanged,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_conf.addEventHandler("onclick",this.btn_conf_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_17_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
