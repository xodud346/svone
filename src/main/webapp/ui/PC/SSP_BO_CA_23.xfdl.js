(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CA_23");
            this.set_titletext("공용상품 기준판매가 상세 - MD담당자");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,822);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("PC::SSP_BO_CA_22.xfdl");
            obj.set_async("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,822,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","PC::SSP_BO_CA_22.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_CA_23.xfdl", function() {

        this.SSP_BO_CA_23_onload = function(obj,e)
        {
        	this.prdId = this.parent.param1;
        	this.prdNm = this.parent.param2;
        	this.bzplcId = this.parent.param3;
        	this.bzplcNm = this.parent.param4;
        	this.strAuth = this.parent.param5;
        	this.strIsNew = this.parent.param6;
        	this.newPrdReqNo = this.parent.param7;

        	this.Div00.form.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm, this.strAuth ,this.strIsNew, this.newPrdReqNo);

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_CA_23_onload,this);
        };
        this.loadIncludeScript("SSP_BO_CA_23.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
