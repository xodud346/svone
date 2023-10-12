(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePage03_P01");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(150,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_value","0","0","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","122","2","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("X");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",150,30,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePage03_P01.xfdl", function() {

        this.fn_onLoad = function(obj,e)
        {
        	this.sta_value.set_text(this.parent.uValue);
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var oChild = this.getOwnerFrame();
        	oChild.form.cfn_delItem(this.parent.id);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
        };
        this.loadIncludeScript("samplePage03_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
