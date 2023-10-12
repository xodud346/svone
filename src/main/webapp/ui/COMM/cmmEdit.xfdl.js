(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmEdit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","Edit00:-22","6","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("X");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,30,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmEdit.xfdl", function() {

        this.Edit00_oninput = function(obj,e)
        {
        	if(this.gfn_isNull(obj.value)){
        		//데이터가 빈값이면
        		this.btn_clear.set_visible(false);
        	} else {
        		this.btn_clear.set_visible(true);
        	}
        };

        this.btn_clear_onclick = function(obj,e)
        {
        	this.Edit00.set_value("");
        	this.btn_clear.set_visible(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Edit00.addEventHandler("oninput",this.Edit00_oninput,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };
        this.loadIncludeScript("cmmEdit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
