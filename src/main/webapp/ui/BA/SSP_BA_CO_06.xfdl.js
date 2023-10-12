(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BA_CO_06");
            this.set_titletext("배치프로그램 실행이력 상세보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(930,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("errorDtls","10","11","910","529",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_scrollbartype("auto");
            obj.set_dragscrolltype("horz");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",930,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BA_CO_06.xfdl", function() {

        this.exceptionDtsPopup_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//get params
        	var errorDtls = this.parent.errorDtls;

        	// 타이틀 헤더설정
        	this.set_titletext("배치프로그램 실행이력 Exception");

        	//set param
        	this.errorDtls.set_value(errorDtls);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.exceptionDtsPopup_onload,this);
            this.errorDtls.addEventHandler("onchanged",this.exceptionDtsMsg_onchanged,this);
        };
        this.loadIncludeScript("SSP_BA_CO_06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
