(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("workPage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(963,872);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("mainLogo","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MAIN_logo");
            obj.set_border("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",963,872,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mainFrame_org.xfdl", function() {
        /*******************************************************
          PROJECT NAME :
          CREATION DATES :
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        	this.oApp = nexacro.getApplication();
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        	this.fn_onLoad = function(obj,e)
        	{
        		// 이 시점에 세션 같은걸 가져와야 하는듯함.
        		//alert("111");
        	};
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//조회
        	/*
        	this.fn_search = function()	{
        		var sSvcId = "sampleSelect";
        		var sUrl = "sampleSelectMap.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_sampleList=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};
        	*/
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	/*
        		if(svcID == "sampleSelect"){
        			trace(this.ds_sampleList.saveXML());
        		}
        	*/
        	}
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.ImageViewer00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.mainLogo.addEventHandler("onclick",this.ImageViewer00_onclick,this);
        };
        this.loadIncludeScript("mainFrame_org.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
