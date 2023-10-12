(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_11");
            this.set_titletext("운영자권한그룹관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab00","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text(" 부서별 메뉴 권한 ");
            obj.set_url("CO::SSP_BO_YA_11_1.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text(" 운영자별 메뉴 권한 ");
            obj.set_url("CO::SSP_BO_YA_11_2.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text(" 운영자별 개별메뉴 권한 ");
            obj.set_url("CO::SSP_BO_YA_11_3.xfdl");
            this.Tab00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1338,843,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CO::SSP_BO_YA_11_1.xfdl");
            this._addPreloadList("fdl","CO::SSP_BO_YA_11_2.xfdl");
            this._addPreloadList("fdl","CO::SSP_BO_YA_11_3.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_YA_11.xfdl", function() {

        this.fn_tabLoad = function(obj,e)
        {
        	this.Tab00.removeTabpage(2);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_tabLoad,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("SSP_BO_YA_11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
