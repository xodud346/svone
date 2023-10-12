(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_RD_54_01");
            this.set_titletext("거부사유");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_output", this);
            obj._setContents("<ColumnInfo><Column id=\"RSN_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new TextArea("RSN_TXT","139","4",null,"82","10",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_maxlength("650");
            this.div.addChild(obj.name, obj);

            obj = new Static("staRsnTxt","0","0","130","90",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_text("거부 사유");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_close","300",null,"100","32",null,"14",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,180,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div.form.RSN_TXT","value","ds_output","RSN_TXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_54_01.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_RD_54_01.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP 거부 사유 팝업 
        CREATION DATES : 2022.11.24
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.valiFormIds = [
        	   {"name" : "거부 사유", "id" : "RSN_TXT"}
        ];
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	this.ds_output.clearData();
        	this.ds_output.addRow();

        	if (!this.gfn_isNull(this.parent.RSN_TXT)) {
        		this.div.form.RSN_TXT.set_readonly(this.parent.READ_ONLY == 'Y');
        		this.ds_output.setColumn(0, 'RSN_TXT', this.parent.RSN_TXT);
        	}
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
        this.cfn_formInit = function() {
        	//static 필수값 표시 초기 설정
        	this.div.form.staRsnTxt.uEssentiel = "true";
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

        	if (validation) {
        		var resData = {};
        		var resString = "";
        		resData.RSN_TXT = this.ds_output.getColumn(0, "RSN_TXT");
        		resString = JSON.stringify(resData);
        		this.close(resString);
        	}
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        this.SSP_BO_RD_54_01_onkeyup = function(obj,e)
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
            this.addEventHandler("onkeyup",this.SSP_BO_RD_54_01_onkeyup,this);
            this.div.form.RSN_TXT.addEventHandler("onchanged",this.div_tae_reason_onchanged,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_54_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
