(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("exceptionDtsPopup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(930,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("exceptionDtsMsg","10","11","910","529",null,null,null,null,null,null,this);
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
        this.registerScript("exceptionDtsPopup.xfdl", function() {

        this.exceptionDtsPopup_onload = function(obj,e)
        {
        	//get params
        	var detailMsg = this.parent.detailMsg;

        	// 타이틀 헤더설정
        	this.set_titletext("에러 상세 내역");

        	//set param
        	this.exceptionDtsMsg.set_value(detailMsg);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.exceptionDtsPopup_onload,this);
        };
        this.loadIncludeScript("exceptionDtsPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
