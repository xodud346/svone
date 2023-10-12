(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_24");
            this.set_titletext("엑셀업로드 양식 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div_save","20","20","540","371",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","30",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("0");
            obj.set_text("비밀번호 설정");
            obj.set_cssclass("sta_WF_title02");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static03","0","36",null,"32","10",null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","36","130","32",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("3");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.Div_save.addChild(obj.name, obj);

            obj = new Edit("pwd","140","40","381","24",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_password("true");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("totalPageCount","0",null,"380","135",null,"6",null,null,null,null,this.Div_save.form);
            obj.set_taborder("4");
            obj.set_text("이용안내 \r\n- 엑셀에 사용할 암호를 설정하는 화면입니다. \r\n- 엑셀을 열어보실 때 현재 입력하는 암호를 입력해야 합니다.  ");
            obj.set_usedecorate("true");
            this.Div_save.addChild(obj.name, obj);

            obj = new Button("btn_cancel","220","Div_save:10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_cancel:4","Div_save:10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,450,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","Div_save.form.pwd","value","ds_pwdChk","pwd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("pwdSetPopup.xfdl","CO::coUtils.xjs");
        this.registerScript("pwdSetPopup.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
         this.SSP_BO_CN_24_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "btn_save_onclick",
        		ESC : "",
        		CTRL_ENTER : "",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
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
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //저장 유효성 체크
        this.fn_validationCheck = function(){
        	var pwd = this.Div_save.form.pwd.value;
        	 if(pwd == '' ||pwd == null){
        		alert("비밀번호를 입력해주세요");
        		 return false;
        	 }
        	 return true;
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //확인 버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()){
        		this.close(this.Div_save.form.pwd.value);
        	}
        };

        //취소 버튼 클릭
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };


        this.Div_save_pwd_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_CN_24_onload,this);
            this.Div_save.form.Static60_00.addEventHandler("onclick",this.Div_save_Static60_00_onclick,this);
            this.Div_save.form.Static02_00.addEventHandler("onclick",this.Div_save_Static02_00_onclick,this);
            this.Div_save.form.pwd.addEventHandler("onchanged",this.Div_save_pwd_onchanged,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("pwdSetPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
