(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test1");
            this.set_titletext("절사관리 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("PC::SSP_BO_CA_50.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","PC::SSP_BO_CA_50.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_CA_50_1.xfdl", function() {

        this.test1_onload = function(obj,e)
        {
        	//저장버튼 set_visible(false)
        	this.Div00.form.btn_save.set_visible(false);

        	//그리드에 있는 selectBox readonly
        	this.Div00.form.grd_detr.setCellProperty( "body", 2, "displaytype", "combotext" );
        	this.Div00.form.grd_detr.setCellProperty( "body", 3, "displaytype", "combotext" );
        	this.Div00.form.grd_detr.setCellProperty( "body", 2, "edittype", "readonly" );
        	this.Div00.form.grd_detr.setCellProperty( "body", 3, "edittype", "readonly" );

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test1_onload,this);
        };
        this.loadIncludeScript("SSP_BO_CA_50_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
