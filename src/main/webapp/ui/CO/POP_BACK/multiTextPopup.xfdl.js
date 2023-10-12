(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("multiTextPopup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("textContents","33","33","527","374",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","230","475","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("적용");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,580,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("multiTextPopup.xfdl", function() {

        this.multiTextPopup_onload = function(obj,e)
        {
        	if( this.parent.textId.value != undefined ) {
        		this.textContents.set_value(nexacro.replaceAll(this.parent.textId.value, ",", "\n"));
        	}

        };

        this.Button00_onclick = function(obj,e)
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
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("multiTextPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
