(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_13");
            this.set_titletext("멀티입력메모");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,508);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("textContents","10","10","300","450",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","250","textContents:10",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","186","textContents:10","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",320,508,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PP_13.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.multiTextPopup_onload = function(obj,e)
        {
        	if( this.parent.textId.value != undefined ) {
        		this.textContents.set_value(nexacro.replaceAll(this.parent.textId.value, ",", "\n"));
        	}

        };

        this.fn_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
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
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_del_onclick = function(obj,e)
        {
        	this.textContents.set_value("");
        	this.textContents.setFocus();
        };

        this.btn_select_onclick = function(obj,e)
        {
        	var textId = this.parent.textId.id;
        	var textValue = this.textContents.value;
        	var params = {
        		textId : textId,
        		textValue : textValue == undefined ? "" : nexacro.replaceAll(this.textContents.value, "\n", ",")
        	}

        	this.close(JSON.stringify(params));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.multiTextPopup_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PP_13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
