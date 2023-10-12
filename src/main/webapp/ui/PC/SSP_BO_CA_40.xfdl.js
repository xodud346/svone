(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CA_40");
            this.set_titletext("전용상품 노출판매가 상세 - MD담당자");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("PC::SSP_BO_CA_39.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,950,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","PC::SSP_BO_CA_39.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_CA_40.xfdl", function() {
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.prdId = "";
        this.prdNm = "";
        this.bzplcId = "";
        this.bzplcNm = "";
        this.strAuth = "4";
        this.strIsNew = "N";

        /*this.detailFunction = function(){
        	this.Div00.form.auth = 1;
        	this.Div00.form.fn_checkData();
        }*/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.SSP_BO_CA_40_onload = function(obj,e)
        {
        	trace("### SSP_BO_CA_40_onload ###");

        	this.prdId = this.parent.param1;
        	this.prdNm = this.parent.param2;
        	this.bzplcId = this.parent.param3;
        	this.bzplcNm = this.parent.param4;
        	this.strAuth = this.parent.param5;
        	this.strIsNew = this.parent.param6;

        	this.Div00.form.fn_userInit(this.prdId, this.prdNm, this.bzplcId, this.bzplcNm, this.strAuth ,this.strIsNew);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_CA_40_onload,this);
        };
        this.loadIncludeScript("SSP_BO_CA_40.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
