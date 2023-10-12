(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CA_35");
            this.set_titletext("공용상품 영업지정판매가 상세 - SSP기획팀");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("PC::SSP_BO_CA_33.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","PC::SSP_BO_CA_33.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_CA_35.xfdl", function() {

        this.SSP_BO_CA_35_onload = function(obj,e)
        {
        	this.prdId = this.parent.prdId;
        	this.prdNm = this.parent.prdNm;
        	this.bzplcId = this.parent.bzplcId;
        	this.bzplcNm = this.parent.bzplcNm;
        	this.strAuth = this.parent.strAuth;
        	this.strIsNew = this.parent.strIsNew;

        	this.Div00.form.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm, this.strAuth ,this.strIsNew);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_CA_35_onload,this);
        };
        this.loadIncludeScript("SSP_BO_CA_35.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
