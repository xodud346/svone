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
            this.set_titletext("기준판매가 참조가격관리 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("PC::SSP_BO_CA_55.xfdl");
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
            this._addPreloadList("fdl","PC::SSP_BO_CA_55.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_CA_55_1.xfdl", function() {

        this.test1_onload = function(obj,e)
        {


        };

        this.tabPageInit = function(){

        	//탭페이지1 수정
        	this.Div00.form.Tab00.Tabpage1.form.Div00.form.btn_write.set_visible(false);
        	this.Div00.form.Tab00.Tabpage1.form.Div00.form.btn_insert.set_visible(false);
        	this.Div00.form.Tab00.Tabpage1.form.Div00.form.grd_exPrdPrcList.setCellProperty("body",0,"textDecoration","none");
        	this.Div00.form.Tab00.Tabpage1.form.Div00.form.grd_exPrdPrcList.setCellProperty("body",0,"color","black");
        	this.Div00.form.Tab00.Tabpage1.form.Div00.form.grd_exPrdPrcList.setCellProperty("body",0,"font",'normal 12px/normal "Malgun Gothic,맑은고딕,Apple SD Gothic Neo,dotum,돋움,arial,sans-serif"');

        	//탭페이지2 수정
        	this.Div00.form.Tab00.Tabpage2.form.Div00.form.btn_insert.set_visible(false);

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test1_onload,this);
        };
        this.loadIncludeScript("SSP_BO_CA_55_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
