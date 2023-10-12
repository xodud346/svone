(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_16");
            this.set_titletext("오즈리포트 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(970,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("wbs00","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",970,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_YA_16.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.params = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.params = this.parent.reportParams;

        	if(this.gfn_isNull(this.params)){
        		alert("REPORT ID를 정확히 입력해주세요.");
        		return;
        	}

        	this.wbs00.set_url(top.location.host + "/co/oz/ozreport.do");
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
        // URL 정보에 따른 화면이 로딩된 후처리 이벤트
        this.wbs00_onloadcompleted = function(obj,e)
        {
        	this.fn_ozCall();
        };

        this.fn_ozCall = function()
        {
        	if(system.navigatorname.toUpperCase() == "NEXACRO")
        	{
        		trace("NEXACRO RUNTIME");
        		this.wbs00.callMethod("fn_setParam", this.params);
        		this.wbs00.callMethod("fn_ozStart");
        	}
        	else
        	{
        		trace("WEB BROWSER");
        		this.wbs00.callMethod("fn_setParam", this.params);
        		this.wbs00.callMethod("fn_ozStart");
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.wbs00.addEventHandler("onloadcompleted",this.wbs00_onloadcompleted,this);
            this.wbs00.addEventHandler("onusernotify",this.wbs00_onusernotify,this);
        };
        this.loadIncludeScript("SSP_BO_YA_16.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
