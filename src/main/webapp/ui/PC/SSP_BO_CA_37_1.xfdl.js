(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CA_37_1");
            this.set_titletext("전용상품 가격관리 - 영업담당자");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("PC::SSP_BO_CA_37.xfdl");
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
            this._addPreloadList("fdl","PC::SSP_BO_CA_37.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_CA_37_1.xfdl", function() {

        this.SSP_BO_CA_37_1_onload = function(obj,e)
        {
        	//trace("### SSP_BO_CA_37_1_onload ###");
        };
        this.detailFunction = function(){
        	this.Div00.form.fn_displayGubun("2");
        }
        this.cfn_personalPopupClose = function(sRet){
        	this.Div00.form.grd_mainList.set_formats(sRet);
        	this.Div00.form.pdiv_personal.closePopup();
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_CA_37_1_onload,this);
        };
        this.loadIncludeScript("SSP_BO_CA_37_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
