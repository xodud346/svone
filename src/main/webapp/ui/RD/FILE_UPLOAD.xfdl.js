(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_LA_01");
            this.set_titletext("공용상품가격관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new RaonkUpload("RaonkUpload00","158","75","942","222",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_FolderNameRule("/aaa/bbb");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1200","35","60","70",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전송");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1113","35","67","75",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FILE_UPLOAD.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.RaonkUpload00.Transfer();
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.RaonkUpload00.OpenFileDialog();
        };

        this.RaonkUpload00_RAONKUPLOAD_BeforeCreation = function(obj)
        {
        	this.RaonkUpload00.FolderNameRule = "/aaaa/bbb";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.RaonkUpload00.addEventHandler("RAONKUPLOAD_BeforeCreation",this.RaonkUpload00_RAONKUPLOAD_BeforeCreation,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("FILE_UPLOAD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
